/*!
 * Module dependencies.
 */

'use strict';

//var escape = require('./utils').escape;
var parseContext = require('./parse.context').parse;
var parseComment = require('./parse.comment').parse;

/**
 * Expose api.
 */

exports.api = require('./api');

/**
 * Parse comments in the given string of `js`.
 *
 * @param {String} js
 * @param {Object} options
 * @return {Array}
 * @api public
 */

exports.parseComments = function(js, options){
    options = options || {};
    js = js.replace(/\r\n/gm, '\n');

    var comments = []
        , comment
        , buf = ''
        , ignore
        , withinMultiline = false
        , withinSingle = false
        , code;

    for (var i = 0, len = js.length; i < len; ++i) {
        // start comment
        if (!withinMultiline && !withinSingle && '/' == js[i] && '*' == js[i+1]) {
            // code following previous comment
            if (buf.trim().length) {
                comment = comments[comments.length - 1];
                if(comment) {
                    comment.code = code = buf.trim();
                    comment.ctx = parseContext(code);
                }
                buf = '';
            }
            i += 2;
            withinMultiline = true;
            ignore = '!' == js[i];
            // end comment
        } else if (withinMultiline && !withinSingle && '*' == js[i] && '/' == js[i+1]) {
            i += 2;
            buf = buf.replace(/^[ \t]*\* ?/gm, '');
            comment = parseComment(buf, options);
            comment.ignore = ignore;
            comments.push(comment);
            withinMultiline = ignore = false;
            buf = '';
        } else if (!withinSingle && !withinMultiline && '/' == js[i] && '/' == js[i+1]) {
            withinSingle = true;
            buf += js[i];
        } else if (withinSingle && !withinMultiline && '\n' == js[i]) {
            withinSingle = false;
            buf += js[i];
            // buffer comment or code
        } else {
            buf += js[i];
        }
    }

    if (comments.length === 0) {
        comments.push({
            tags: [],
            description: {full: '', summary: '', body: ''},
            isPrivate: false
        });
    }

    // trailing code
    if (buf.trim().length) {
        comment = comments[comments.length - 1];
        code = buf.trim();
        comment.code = code;
        comment.ctx = parseContext(code);
    }

    return comments;
};
