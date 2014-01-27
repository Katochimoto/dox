var R_TYPE = /^\{(.*?)\}$/;
var R_GROUP_TYPE = /^\{\((.*?)\)\}$/;
var R_TYPE_MOD = /^[?!]|[=]$/g;
var GROUP_SEP = '|';


/**
 * Parse tag type string "{Array|Object}" etc.
 *
 * @see http://usejsdoc.org/tags-type.html
 * @param {String} str
 * @return {Object}
 * @api public
 */
exports.parse = function(str) {
    'use strict';

    str = str.trim();

    var typesMatch = str.match(R_GROUP_TYPE);
    if (!typesMatch) {
        typesMatch = str.match(R_TYPE);
    }

    if (!typesMatch) {
        return { data: [] };
    }

    var types = typesMatch[1].trim().split(GROUP_SEP);
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

        return type.replace(R_TYPE_MOD, '');
    });

    var ret = {
        data: types
    };

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
