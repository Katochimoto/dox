
var parseType = require('./parse.type').parse;

var PATTERNS = {
    types: function(tagString, required, other) {
        var typesMatch = tagString.match(/^(\{{1,2}.*?\}{1,2})/);
        tagString = tagString.replace(/^\{{1,2}.*?\}{1,2}/, '').trim();

        if (!typesMatch) {
            if (required) {
                throw new Error();
            }

            return { tagString: tagString };
        }

        var types = parseType(typesMatch[1]);
        if (!types.data.length) {
            if (required) {
                throw new Error();
            }

            return { tagString: tagString };
        }

        for (var iterator in types) {
            if (types.hasOwnProperty(iterator)) {
                other[iterator] = types[iterator];
            }
        }

        delete other.data;

        return {
            tagString: tagString,
            data: types.data
        };
    },
    name: function(tagString, required, other) {
        //var nameMatch = tagString.match(/^(\[([^\[\]]+?)\]|[a-z0-9\.]+)/i);
        //tagString = tagString.replace(/^\[[^\[\]]+?\]|[a-z0-9\.]+/i, '').trim();
        var nameMatch = tagString.match(/^(\[(.+)\]|[a-z0-9\.\#\~\-\_\$]+)/i);
        tagString = tagString.replace(/^\[.+\]|[a-z0-9\.\#\~\-\_\$]+/i, '').trim();

        if (!nameMatch) {
            if (required) {
                throw new Error('Error parse tag "' + tagString + '"');
            }

            return { tagString: tagString };
        }

        var name = { tagString: tagString };

        if (nameMatch[2]) {
            nameMatch = nameMatch[2].split('=');
            name.data = nameMatch.shift();

            if (nameMatch.length) {
                other.default = nameMatch.join('=');
            }

            other.optional = true;
        } else {
            name.data = nameMatch[1];
        }

        other.original = name.data.split('.')[0];

        return name;
    },
    description: function(tagString, required/*, other*/) {
        if (!tagString) {
            if (required) {
                throw new Error();
            }

            return { tagString: '' };
        }

        return {
            tagString: '',
            data: tagString
        };
    },
    access: function(tagString, required/*, other*/) {
        if (!tagString || ['private', 'protected', 'public'].indexOf(tagString) === -1) {
            if (required) {
                throw new Error();
            }

            return { tagString: '' };
        }

        return {
            tagString: '',
            data: tagString
        };
    },
    memberName: function(tagString/*, required, other*/) {
        return {
            tagString: tagString.split(' as ')[1] || '',
            data: tagString.split(' as ')[0]
        };
    },
    title: function(tagString, required/*, other*/) {
        var titleMatch = tagString.match(/^<caption>(.+)<\/caption>/);
        tagString = tagString.replace(/^<caption>.+<\/caption>/, '').trim();

        if (!titleMatch) {
            if (required) {
                throw new Error();
            }

            return { tagString: tagString };
        }

        return {
            tagString: tagString,
            data: titleMatch[1].trim()
        };
    },
    kind: function(tagString, required/*, other*/) {
        if (!tagString || [
            'class',
            'constant',
            'event',
            'external',
            'file',
            'function',
            'member',
            'mixin',
            'module',
            'namespace',
            'typedef'
        ].indexOf(tagString) === -1) {
            if (required) {
                throw new Error();
            }

            return { tagString: '' };
        }

        return {
            tagString: '',
            data: tagString
        };
    },
    event: function(tagString, required, other) {
        if (!tagString) {
            if (required) {
                throw new Error('Error parse tag "' + tagString + '"');
            }

            return { tagString: '' };
        }

        var parts = tagString.split('#');

        other.context = parts.length === 2 ? parts[0] : undefined;
        other.event = tagString;

        return {
            tagString: '',
            data: parts.length === 2 ? parts[1] : parts[0]
        };
    }
};

var TAGS = {
    // @see http://usejsdoc.org/tags-param.html
    'arg': '?types name ?description',
    'argument': '?types name ?description',
    'param': '?types name ?description',

    // @see http://usejsdoc.org/tags-abstract.html
    'virtual': '',
    'abstract': '',
    // @see http://usejsdoc.org/tags-public.html
    'public': '',
    // @see http://usejsdoc.org/tags-private.html
    'private': '',
    // @see http://usejsdoc.org/tags-protected.html
    'protected': '',

    // @see http://usejsdoc.org/tags-access.html
    'access': 'access',

    // @see http://usejsdoc.org/tags-alias.html
    'alias': 'name',

    // @see http://usejsdoc.org/tags-augments.html
    'augments': 'name:otherClass',
    'extends': 'name:otherClass',

    // @see http://usejsdoc.org/tags-author.html
    'author': 'description',

    // @see http://usejsdoc.org/tags-borrows.html
    'borrows': 'memberName:otherName memberName:thisName',

    // @see http://usejsdoc.org/tags-callback.html
    'callback': 'name',

    // @see http://usejsdoc.org/tags-classdesc.html
    'classdesc': 'description',

    // @see http://usejsdoc.org/tags-constant.html
    'constant': '?types ?name',
    'const': '?types ?name',

    // @see http://usejsdoc.org/tags-constructor.html
    'constructor': '?types ?name',
    'class': '?types ?name',

    // @see http://usejsdoc.org/tags-constructs.html
    'constructs': '?name',

    // @see http://usejsdoc.org/tags-file.html
    'file': 'description',
    'overview': 'description',
    'fileoverview': 'description',

    // @see http://usejsdoc.org/tags-copyright.html
    'copyright': 'description',

    // @see http://usejsdoc.org/tags-default.html
    'default': '?description:value',
    'defaultvalue': '?description:value',

    // @see http://usejsdoc.org/tags-deprecated.html
    'deprecated': '?description',

    // @see http://usejsdoc.org/tags-description.html
    'desc': 'description',
    'description': 'description',

    // @see http://usejsdoc.org/tags-enum.html
    'enum': '?types',

    // @see http://usejsdoc.org/tags-event.html
    'event': 'event:name',

    // @see http://usejsdoc.org/tags-example.html
    'example': '?title ?description',

    // @see http://usejsdoc.org/tags-exports.html
    'exports': 'name',

    // http://usejsdoc.org/tags-external.html
    'external': 'name',
    'host': 'name',

    // @see http://usejsdoc.org/tags-fires.html
    'fires': 'description',
    'emits': 'description',

    // @see http://usejsdoc.org/tags-global.html
    'global': '',

    // @see http://usejsdoc.org/tags-ignore.html
    'ignore': '',

    // @see http://usejsdoc.org/tags-inner.html
    'inner': '',

    // @see http://usejsdoc.org/tags-static.html
    'static': '',

    // @see http://usejsdoc.org/tags-instance.html
    'instance': '',

    // @see http://usejsdoc.org/tags-kind.html
    'kind': 'kind',

    // @see http://usejsdoc.org/tags-lends.html
    'lends': 'name',

    // @see http://usejsdoc.org/tags-license.html
    'license': 'description',

    // @see http://usejsdoc.org/tags-member.html
    'member': '?types ?name',
    'var': '?types ?name',

    // @see http://usejsdoc.org/tags-memberof.html
    'memberOf': 'name:parent',
    'memberof': 'name:parent',

    // @see http://usejsdoc.org/tags-method.html
    'method': '?name',
    'func': '?name',
    'function': '?name',

    // @see http://usejsdoc.org/tags-mixes.html
    'mixes': 'name',

    // @see http://usejsdoc.org/tags-mixin.html
    'mixin': '?name',

    // @see http://usejsdoc.org/tags-module.html
    'module': '?types name',

    // @see http://usejsdoc.org/tags-name.html
    'name': 'name',

    // @see http://usejsdoc.org/tags-namespace.html
    'namespace': '?types ?name',

    // @see http://usejsdoc.org/tags-property.html
    'property': '?types name ?description',
    'prop': '?types name ?description',

    // @see http://usejsdoc.org/tags-readonly.html
    'readonly': '',

    // @see http://usejsdoc.org/tags-requires.html
    'requires': 'name',

    // @see http://usejsdoc.org/tags-returns.html
    'return': 'types ?description',
    'returns': 'types ?description',

    // @see http://usejsdoc.org/tags-since.html
    'since': 'description',

    // @see http://usejsdoc.org/tags-summary.html
    'summary': 'description',

    // @see http://usejsdoc.org/tags-this.html
    'this': 'name',

    // @see http://usejsdoc.org/tags-throws.html
    'throws': '?types ?description',
    'exception': '?types ?description',

    // @see http://usejsdoc.org/tags-todo.html
    'todo': 'description',

    // @see http://usejsdoc.org/tags-type.html
    'type': 'types',

    // @see http://usejsdoc.org/tags-typedef.html
    'typedef': '?types name',

    // @see http://usejsdoc.org/tags-version.html
    'version': 'description',

    'api': 'description:visibility',

    'title': 'description'
};

/**
 * Parse tag string "@param {Array} name description" etc.
 *
 * @param {String} str
 * @return {Object|Boolean}
 * @api public
 */
exports.parse = function(str) {
    'use strict';

    str = str.trim()
        .replace(/\r\n/gm, '\n')
        .replace(/.*/gm, function(part) {
            return part.trim();
        });

    var multiparts = str.split(/\n/);
    var tagString = multiparts.shift();

    var tagTypeMatch = tagString.match(/^@([a-z]+)/i);
    if (!tagTypeMatch) {
        return false;
    }

    tagString = tagString.replace(/^@[a-z]+/i, '').trim();
    var type = tagTypeMatch[1];
    var tag = { type: type };
    var patterns = (TAGS.hasOwnProperty(type) ? TAGS[type] : 'description').split(' ');

    if (type === 'example') {
        tagString = tagString + multiparts.join('\n');
    }

    patterns.filter(function(pattern) {
            return Boolean(pattern.length);
        })
        .forEach(function(pattern) {
            pattern = pattern.split(':');
            var required = pattern[0].indexOf('?') !== 0;
            var patternName = required ? pattern[0] : pattern[0].substr(1);
            var paramName = pattern[1] || patternName;
            var otherParams = {};

            var match = PATTERNS[patternName](tagString, required, otherParams);
            tagString = match.tagString;
            if (typeof(match.data) !== 'undefined') {
                tag[paramName] = match.data;
            }

            for (var i in otherParams) {
                if (otherParams.hasOwnProperty(i)) {
                    tag[i] = otherParams[i];
                }
            }
        });

    return tag;
};
