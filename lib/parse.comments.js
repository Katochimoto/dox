var parseContext = require('./parse.context').parse;
var parseComment = require('./parse.comment').parse;
var utils = require('./utils');

/**
 * @param {String} str
 * @param {Object} options
 * @return {Array}
 * @api public
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

    var normalizeComments = [];
    var currentContext;
    comments.forEach(function(comment) {
        var ctx = comment.matchCtx = {
            type: utils.getType(comment),
            name: utils.getName(comment),
            context: utils.getContext(comment)
        };

        if (ctx.context && currentContext !== ctx.context) {
            if (ctx.context !== ctx.name) {
                normalizeComments.push(utils.createContextComment(ctx.context));
            }

            currentContext = ctx.context;
        }


        normalizeComments.push(comment);
    });

    return normalizeComments;
};
