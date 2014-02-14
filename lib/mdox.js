var parseComments = require('./parse.comments').parse;
var yr = require('../node_modules/yate/lib/runtime');

exports.jsonGenerate = function(str, options) {
    'use strict';
    return parseComments(str, options);
};

exports.mdGenerate = function(str, options, theme) {
    'use strict';

    theme = theme || 'default';

    var data = exports.jsonGenerate(str, options);
    var ext = yr.externals;

    ext['mdox-string-trim'] = function(value) {
        return value.trim();
    };

    ext['mdox-string-empty'] = function(value) {
        return !Boolean(value.trim());
    };

    ext['mdox-array-inarray'] = function(value, array) {
        return array.indexOf(value) !== -1;
    };

    require('../tmpl/_mdox.yate.js');
    require('../tmpl/' + theme + '.yate.js');

    return yr.run(theme, {
        comments: data
    });
};
