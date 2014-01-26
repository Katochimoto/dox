/* jshint -W067 */
(function() {
    'use strict';

    var mdox = require('./lib/mdox.js');

    mdox.version = '0.4.4';

    var namespace;

    if (typeof module !== 'undefined') {
        namespace = module.exports = mdox;
    } else {
        namespace = (function() {
            return this || (1, eval)('this');
        }());
    }

    namespace.mdox = mdox;
}());
