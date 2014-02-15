var parseContext = require('./parse.context').parse;
var parseComment = require('./parse.comment').parse;
var utils = require('./utils');

/**
 * @param {String} str
 * @param {Object} options
 * @return {Array}
 */
exports.parse = function(str, options) {
    'use strict';

    options = options || {};
    str = str.replace(/\r\n/gm, '\n');

    var comments = [];
    var rComment = /\/\*(!?)([\s\S]*?)\*\//g;
    var rPrefixComment = /^\s*\*/mg;
    var match;
    var comment;
    var codeIdx = -1;
    var commentIds = -1;
    var loop = 1000;

    while ((match = rComment.exec(str)) !== null && loop) {
        comment = parseComment(match[2].trim().replace(rPrefixComment, ''), options);
        comment.ignore = !!match[1];

        comments.push(comment);

        if (codeIdx !== -1) {
            comments[commentIds].code = str.substring(codeIdx, match.index).trim();
            comments[commentIds].ctx = parseContext(comments[commentIds].code);
        }

        codeIdx = rComment.lastIndex;
        commentIds++;
        loop--;
    }

    if (codeIdx !== -1) {
        comments[commentIds].code = str.substr(codeIdx).trim();
        comments[commentIds].ctx = parseContext(comments[commentIds].code);
    }

    comments.forEach(function(comment) {
        comment.matchCtx = {
            type: utils.getType(comment),
            name: utils.getName(comment),
            context: utils.getContext(comment),
            weight: utils.getWeight(comment)
        };
    });

    return exports.normalize(comments);
};

/**
 * Удаление дублей фейковых комментариев контекста.
 * Если есть основной коментарий контекта, то удаляются все фейки.
 * Затем комментарии сортируются по весу.
 *
 * @param {Array} comments
 * @returns {Array}
 */
exports.normalize = function(comments) {
    var normalizeComments = {};

    comments.forEach(function(comment) {
        var ctx = comment.matchCtx;
        normalizeComments[ctx.context] = normalizeComments[ctx.context] || [];
        normalizeComments[ctx.context].push(comment);
    });

    comments = [];
    for (var context in normalizeComments) {
        if (normalizeComments.hasOwnProperty(context)) {
            var commentsContext = normalizeComments[context];
            commentsContext = commentsContext.filter(function(comment) {
                return !comment.fake;
            });

            if (context !== 'global') {
                var isDefineContext = commentsContext.some(function(comment) {
                    return (comment.matchCtx.name === comment.matchCtx.context);
                });

                if (!isDefineContext) {
                    commentsContext.unshift(utils.createContextComment(context));
                }
            }

            commentsContext.sort(function(a, b) {
                if (a.matchCtx.weight < b.matchCtx.weight) {
                    return 1;

                } else if (a.matchCtx.weight > b.matchCtx.weight) {
                    return -1;

                } else {
                    return 0;
                }
            });

            comments = comments.concat(commentsContext);
        }
    }

    return comments;
};
