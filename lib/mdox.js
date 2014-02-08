var parseComments = require('./parse.comments').parse;
var yr = require('../node_modules/yate/lib/runtime');

exports.mdGenerate = function(str, options, theme) {
    theme = theme || 'default';



    var data = parseComments(str, options);
    var ext = yr.externals;

    ext['mdox-string-trim'] = function(value) {
        return value.trim();
    };

    ext['mdox-string-empty'] = function(value) {
        return !Boolean(value.trim());
    };

    console.log(JSON.stringify(data));

    // ./node_modules/.bin/yate tmpl/mdox.yate > tmpl/mdox.yate.js
    // ./node_modules/.bin/yate tmpl/default.yate --import tmpl/mdox.yate.obj > tmpl/default.yate.js

    require('../tmpl/mdox.yate.js');

    require('../tmpl/' + theme + '.yate.js');

    return yr.run(theme, {
        comments: data
    });
};
