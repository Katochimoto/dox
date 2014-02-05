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
exports.parse = function(str) {
    'use strict';

    var match = str.trim().match(/^.+$/m);

    if (!match) {
        return {};
    }

    str = match[0];

    // function statement
    if (/^function ([\w$]+) *\(/.exec(str)) {
        return {
            type: 'function',
            name: RegExp.$1,
            string: RegExp.$1 + '()'
        };

    // function expression
    } else if (/^var *([\w$]+)[ \t]*=[ \t]*function/.exec(str)) {
        return {
            type: 'function',
            name: RegExp.$1,
            string: RegExp.$1 + '()'
        };

    // prototype method
    } else if (/^([\w$]+)\.prototype\.([\w$]+)[ \t]*=[ \t]*function/.exec(str)) {
        return {
            type: 'method',
            name: RegExp.$2,
            string: RegExp.$1 + '.prototype.' + RegExp.$2 + '()',

            cons: RegExp.$1
        };

    // prototype property
    } else if (/^([\w$]+)\.prototype\.([\w$]+)[ \t]*=[ \t]*([^\n;]+)/.exec(str)) {
        return {
            type: 'property',
            name: RegExp.$2,
            string: RegExp.$1 + '.prototype.' + RegExp.$2,

            cons: RegExp.$1,
            value: RegExp.$3

        };

    // method
    } else if (/^([\w$.]+)\.([\w$]+)[ \t]*=[ \t]*function/.exec(str)) {
        return {
            type: 'method',
            name: RegExp.$2,
            string: RegExp.$1 + '.' + RegExp.$2 + '()',

            receiver: RegExp.$1
        };

    // property
    } else if (/^([\w$]+)\.([\w$]+)[ \t]*=[ \t]*([^\n;]+)/.exec(str)) {
        return {
            type: 'property',
            name: RegExp.$2,
            string: RegExp.$1 + '.' + RegExp.$2,

            receiver: RegExp.$1,
            value: RegExp.$3
        };

    // declaration
    } else if (/^var +([\w$]+)[ \t]*=[ \t]*([^\n;]+)/.exec(str)) {
        return {
            type: 'declaration',
            name: RegExp.$1,
            string: RegExp.$1,

            value: RegExp.$2
        };
    }

    return {};
};
