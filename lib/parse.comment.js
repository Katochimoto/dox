'use strict';

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
 * @return {Object}
 * @api public
 */

exports.parse = function(str, options) {
    str = str.trim();
    options = options || {};

    var comment = { tags: [] }
        , raw = options.raw
        , description = {};

    // parse comment body
    description.full = str.split('\n@')[0];
    description.summary = description.full.split('\n\n')[0];
    description.body = description.full.split('\n\n').slice(1).join('\n\n');
    comment.description = description;

    // parse tags
    if (~str.indexOf('\n@')) {
        var tags = '@' + str.split('\n@').slice(1).join('\n@');
        comment.tags = tags.split('\n').map(parseTag);
        comment.isPrivate = comment.tags.some(function(tag){
            return 'api' == tag.type && 'private' == tag.visibility;
        })
    }

    // markdown
    if (!raw) {
        description.full = markdown(description.full);
        description.summary = markdown(description.summary);
        description.body = markdown(description.body);
    }

    return comment;
};