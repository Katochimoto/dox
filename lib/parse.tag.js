'use strict';

var parseType = require('./parse.type').parse;

/**
 * Parse tag string "@param {Array} name description" etc.
 *
 * @param {String} str
 * @return {Object}
 * @api public
 */
exports.parse = function(str) {
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
                types = parseType(typesMatch[1]);

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
                types = parseType(typesMatch[1]);

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
                types = parseType(typesMatch[1]);

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
                types = parseType(typesMatch[1]);

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