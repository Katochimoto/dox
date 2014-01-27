var markdown = require('github-flavored-markdown').parse;
var parseTag = require('./parse.tag').parse;

/**
 * Parse the given comment `str`.
 *
 * The comment object returned contains the following
 *
 *  - `tags`  array of tag objects
 *  - `description` the first line of the comment
 *  - `body` lines following the description
 *  - `content` both the description and the body
 *  - `isPrivate` true when "@api private" is used
 *
 * @param {String} str
 * @param {Object} options
 * @param {Boolean} options.raw
 * @return {Object}
 * @api public
 */

exports.parse = function(str, options) {
    'use strict';

    str = str.trim()
        .replace(/\r\n/gm, '\n')
        .replace(/.*/gm, function(part) {
            return part.trim();
        });

    options = options || {};

    var comment = {
        tags: [],
        isPrivate: false,
        description: { full: '', summary: '', body: '' }
    };

    var idxTagsStart = str.indexOf('\n@');
    if (str.charAt(0) === '@') {
        idxTagsStart = 0;
    }

    comment.description.full = idxTagsStart === -1 ? str : str.substr(0, idxTagsStart).trim();

    var idxSummaryStart = comment.description.full.indexOf('\n\n');

    if (idxSummaryStart !== -1) {
        comment.description.summary = comment.description.full.substr(0, idxSummaryStart).trim();
        comment.description.body = comment.description.full.substr(idxSummaryStart).trim();

    } else {
        comment.description.summary = comment.description.full;
        comment.description.body = '';
    }

    if (idxTagsStart !== -1) {
        var tagBody = str.substr(idxTagsStart).trim();
        var r = /^@/mg;
        var m;
        var index = 0;
        var loop = 50;
        var tag;

        while (loop && (m = r.exec(tagBody)) !== null) {
            if (m.index > 0) {
                tag = parseTag(tagBody.substr(index, m.index));
                if (tag) {
                    comment.tags.push(tag);
                }
            }

            index = m.index;
            loop--;
        }

        tag = parseTag(tagBody.substr(index));
        if (tag) {
            comment.tags.push(tag);
        }

        comment.isPrivate = comment.tags.some(function(tag) {
            return tag.type === 'api' && tag.visibility === 'private';
        });
    }

    if (!options.raw) {
        comment.description.full = markdown(comment.description.full);
        comment.description.summary = markdown(comment.description.summary);
        comment.description.body = markdown(comment.description.body);
    }

    return comment;
};
