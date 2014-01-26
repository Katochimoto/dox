'use strict';

/**
 * Parse tag type string "{Array|Object}" etc.
 *
 * @see http://usejsdoc.org/tags-type.html
 * @param {String} str
 * @return {Object}
 * @api public
 */
exports.parse = function(str) {
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