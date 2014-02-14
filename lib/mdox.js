var parseComments = require('./parse.comments').parse;
var markdown = require('github-flavored-markdown').parse;
var glob = require('glob');
var yr = require('../node_modules/yate/lib/runtime');

exports.jsonGenerate = function(str, options) {
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

exports.htmlGenerate = function(str, options, theme) {
    return markdown(exports.mdGenerate(str, options, theme));
};

exports.docGenerate = function(/*options*/) {
    'use strict';

};
