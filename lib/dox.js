/*!
 * Module dependencies.
 */

'use strict';

var markdown = require('github-flavored-markdown').parse;
var escape = require('./utils').escape;

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
 * @see exports.parseComment
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
                    comment.ctx = exports.parseCodeContext(code);
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
            comment = exports.parseComment(buf, options);
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
        comment.ctx = exports.parseCodeContext(code);
    }

    return comments;
};

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
 * @see exports.parseTag
 * @api public
 */

exports.parseComment = function(str, options) {
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
        comment.tags = tags.split('\n').map(exports.parseTag);
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

/**
 * Parse tag string "@param {Array} name description" etc.
 *
 * @param {String} str
 * @return {Object}
 * @api public
 */
exports.parseTag = function(str) {
    str = str.trim().replace(/.*/gm, function(part) {
        return part.trim();
    });

    var multiparts = str.split(/\n/);
    var tagString = multiparts.shift();

    var tagTypeMatch = tagString.match(/^@([a-z]+)/i);
    if (!tagTypeMatch) {
        return {};
    }


    var types;
    var typesMatch;
    var nameMatch;
    var iterator;
    var type = tagTypeMatch[1];
    var tag = { type: type };

    tagString = tagString.replace(/^@[a-z]+/i, '').trim();

    switch (type) {
        // @see http://usejsdoc.org/tags-example.html
        case 'example':
            tag.string = multiparts.join('\n').trim();
            var titleMatch = tagString.match(/^<caption>(.+)<\/caption>$/);
            if (titleMatch) {
                tag.title = titleMatch[1].trim();
            }
            break;

        // @see http://usejsdoc.org/tags-param.html
        case 'arg':
        case 'argument':
        case 'param':
            typesMatch = tagString.match(/^(\{{1,2}.*?\}{1,2})/);
            if (typesMatch) {
                tagString = tagString.replace(/^\{{1,2}.*?\}{1,2}/, '').trim();
                types = exports.parseTagTypes(typesMatch[1]);

                if (types.types.length) {
                    for (iterator in types) {
                        if (types.hasOwnProperty(iterator)) {
                            tag[iterator] = types[iterator];
                        }
                    }
                }
            }

            nameMatch = tagString.match(/^(\[([^\[\]]+?)\]|[a-z0-9]+)/i);
            if (nameMatch) {
                tagString = tagString.replace(/^\[[^\[\]]+?\]|[a-z0-9]+/i, '').trim();

                if (nameMatch[2]) {
                    nameMatch = nameMatch[2].split('=');
                    tag.name = nameMatch.shift();
                    if (nameMatch.length) {
                        tag.default = nameMatch.join('=');
                    }

                    tag.optional = true;
                } else {
                    tag.name = nameMatch[1];
                }
            }

            if (tagString) {
                tag.description = tagString;
            }
            break;

        // @see http://usejsdoc.org/tags-abstract.html
        case 'virtual':
        case 'abstract':
        // @see http://usejsdoc.org/tags-static.html
        case 'static':
        // @see http://usejsdoc.org/tags-global.html
        case 'global':
        // @see http://usejsdoc.org/tags-instance.html
        case 'instance':
        // @see http://usejsdoc.org/tags-inner.html
        case 'inner':
            break;

        // @see http://usejsdoc.org/tags-access.html
        case 'access':
            if (['private', 'protected', 'public'].indexOf(tagString) !== -1) {
                tag.level = tagString;
            } else {
                tag = {};
            }
            break;

        // @see http://usejsdoc.org/tags-public.html
        case 'public':
        // @see http://usejsdoc.org/tags-private.html
        case 'private':
        // @see http://usejsdoc.org/tags-protected.html
        case 'protected':
            tag = { type: 'access', level: type };
            break;

        // @see http://usejsdoc.org/tags-alias.html
        case 'alias':
        case 'extends':
        // @see http://usejsdoc.org/tags-author.html
        case 'author':
        // @see http://usejsdoc.org/tags-name.html
        case 'name':
        // @see http://usejsdoc.org/tags-this.html
        case 'this':
            tag.string = tagString;
            break;

        // @see http://usejsdoc.org/tags-augments.html
        case 'augments':
            tag.otherClass = tagString;
            break;

        // @see http://usejsdoc.org/tags-borrows.html
        case 'borrows':
            tag.otherMemberName = tagString.split(' as ')[0];
            tag.thisMemberName = tagString.split(' as ')[1];
            break;

        // @see http://usejsdoc.org/tags-typedef.html
        case 'typedef':
        // @see http://usejsdoc.org/tags-constructor.html
        case 'constructor':
        case 'class':
        // @see http://usejsdoc.org/tags-constant.html
        case 'constant':
        case 'const':
        // @see http://usejsdoc.org/tags-member.html
        case 'member':
        case 'var':
        // @see http://usejsdoc.org/tags-property.html
        case 'property':
        case 'prop':
            typesMatch = tagString.match(/^(\{{1,2}.*?\}{1,2})/);
            if (typesMatch) {
                tagString = tagString.replace(/^\{{1,2}.*?\}{1,2}/, '').trim();
                types = exports.parseTagTypes(typesMatch[1]);

                if (types.types.length) {
                    for (iterator in types) {
                        if (types.hasOwnProperty(iterator)) {
                            tag[iterator] = types[iterator];
                        }
                    }
                }
            }

            tag.name = tagString;
            break;

        // @see http://usejsdoc.org/tags-enum.html
        case 'enum':
        // @see http://usejsdoc.org/tags-type.html
        case 'type':
            typesMatch = tagString.match(/^(\{{1,2}.*?\}{1,2})/);
            if (typesMatch) {
                tagString = tagString.replace(/^\{{1,2}.*?\}{1,2}/, '').trim();
                types = exports.parseTagTypes(typesMatch[1]);

                if (types.types.length) {
                    for (iterator in types) {
                        if (types.hasOwnProperty(iterator)) {
                            tag[iterator] = types[iterator];
                        }
                    }
                }
            }
            break;


        // @see http://usejsdoc.org/tags-callback.html
        case 'callback':
            tag.type = 'typedef';
            tag.name = tagString;
            tag.types = [ 'function' ];
            break;

        // @see http://usejsdoc.org/tags-returns.html
        case 'return':
        case 'returns':
        // @see http://usejsdoc.org/tags-throws.html
        case 'throws':
            typesMatch = tagString.match(/^(\{{1,2}.*?\}{1,2})/);
            if (typesMatch) {
                tagString = tagString.replace(/^\{{1,2}.*?\}{1,2}/, '').trim();
                types = exports.parseTagTypes(typesMatch[1]);

                if (types.types.length) {
                    for (iterator in types) {
                        if (types.hasOwnProperty(iterator)) {
                            tag[iterator] = types[iterator];
                        }
                    }
                }
            }

            tag.description = tagString;
            break;

        // @see http://usejsdoc.org/tags-memberof.html
        case 'memberOf':
        case 'memberof':
            tag.parent = tagString;
            break;

        // @see http://usejsdoc.org/tags-see.html
        case 'see':
        // @see http://usejsdoc.org/tags-link.html
        case 'link':
            if (tagString.indexOf('http') === 0) {
                tag.url = tagString;
            } else {
                tag.local = tagString;
            }
            break;

        case 'api':
            tag.visibility = tagString;
            break;

        // @see http://usejsdoc.org/tags-method.html
        case 'method':
        case 'func':
        case 'function':
        // @see http://usejsdoc.org/tags-classdesc.html
        case 'classdesc':
        // @see http://usejsdoc.org/tags-default.html
        case 'default':
        case 'defaultvalue':
        // @see http://usejsdoc.org/tags-constructs.html
        case 'constructs':
        // @see http://usejsdoc.org/tags-lends.html
        case 'lends':
        // @see http://usejsdoc.org/tags-file.html
        case 'file':
        case 'overview':
        case 'fileoverview':
        // @see http://usejsdoc.org/tags-copyright.html
        case 'copyright':
        // @see http://usejsdoc.org/tags-version.html
        case 'version':
        // @see http://usejsdoc.org/tags-since.html
        case 'since':
        // @see http://usejsdoc.org/tags-deprecated.html
        case 'deprecated':
        // @see http://usejsdoc.org/tags-description.html
        case 'desc':
        case 'description':
        default:
            if (tagString) {
                tag.string = tagString;
            }
            break;
    }

    return tag;
};

/**
 * Parse tag type string "{Array|Object}" etc.
 *
 * @see http://usejsdoc.org/tags-type.html
 * @param {String} str
 * @return {Object}
 * @api public
 */
exports.parseTagTypes = function(str) {
    var typesMatch = str.trim().match(/^(\{\(|\{)(.*?)(\)\}|\})$/);
    if (!typesMatch) {
        return { types: [] };
    }

    var types = typesMatch[2].trim().split('|');
    var isNullable = false;
    var isNonNullable = false;
    var isOptional = false;

    types = types.map(function(type) {
        if (types.length === 1) {
            if (type.indexOf('?') === 0) {
                isNullable = true;

            } else if (type.indexOf('!') === 0) {
                isNonNullable = true;
            }

            if (type.indexOf('=') === type.length - 1) {
                isOptional = true;
            }
        }

        return type.replace(/^[?!]|[=]$/g, '');
    });

    var ret = { types: types };

    if (isNullable) {
        ret.nullable = true;
    }

    if (isNonNullable) {
        ret.nonNullable = true;
    }

    if (isOptional) {
        ret.optional = true;
    }

    return ret;
};

/**
 * Parse the context from the given `str` of js.
 *
 * This method attempts to discover the context
 * for the comment based on it's code. Currently
 * supports:
 *
 *   - function statements
 *   - function expressions
 *   - prototype methods
 *   - prototype properties
 *   - methods
 *   - properties
 *   - declarations
 *
 * @param {String} str
 * @return {Object}
 * @api public
 */

exports.parseCodeContext = function(str){
    str = str.split('\n')[0];

    // function statement
    if (/^function ([\w$]+) *\(/.exec(str)) {
        return {
            type: 'function'
            , name: RegExp.$1
            , string: RegExp.$1 + '()'
        };
        // function expression
    } else if (/^var *([\w$]+)[ \t]*=[ \t]*function/.exec(str)) {
        return {
            type: 'function'
            , name: RegExp.$1
            , string: RegExp.$1 + '()'
        };
        // prototype method
    } else if (/^([\w$]+)\.prototype\.([\w$]+)[ \t]*=[ \t]*function/.exec(str)) {
        return {
            type: 'method'
            , constructor: RegExp.$1
            , cons: RegExp.$1
            , name: RegExp.$2
            , string: RegExp.$1 + '.prototype.' + RegExp.$2 + '()'
        };
        // prototype property
    } else if (/^([\w$]+)\.prototype\.([\w$]+)[ \t]*=[ \t]*([^\n;]+)/.exec(str)) {
        return {
            type: 'property'
            , constructor: RegExp.$1
            , cons: RegExp.$1
            , name: RegExp.$2
            , value: RegExp.$3
            , string: RegExp.$1 + '.prototype.' + RegExp.$2
        };
        // method
    } else if (/^([\w$.]+)\.([\w$]+)[ \t]*=[ \t]*function/.exec(str)) {
        return {
            type: 'method'
            , receiver: RegExp.$1
            , name: RegExp.$2
            , string: RegExp.$1 + '.' + RegExp.$2 + '()'
        };
        // property
    } else if (/^([\w$]+)\.([\w$]+)[ \t]*=[ \t]*([^\n;]+)/.exec(str)) {
        return {
            type: 'property'
            , receiver: RegExp.$1
            , name: RegExp.$2
            , value: RegExp.$3
            , string: RegExp.$1 + '.' + RegExp.$2
        };
        // declaration
    } else if (/^var +([\w$]+)[ \t]*=[ \t]*([^\n;]+)/.exec(str)) {
        return {
            type: 'declaration'
            , name: RegExp.$1
            , value: RegExp.$2
            , string: RegExp.$1
        };
    }

    return {};
};
