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

    ext['mdox-array-inarray'] = function(value, array) {
        return array.indexOf(value) !== -1;
    };

    console.log(JSON.stringify(data));

    // ./node_modules/.bin/yate tmpl/_mdox.yate > tmpl/_mdox.yate.js
    // ./node_modules/.bin/yate tmpl/default.yate --import tmpl/_mdox.yate.obj > tmpl/default.yate.js
    // ./node_modules/.bin/mocha --reporter dot test/spec/mdGenerate.mdox.js

    require('../tmpl/_mdox.yate.js');

    require('../tmpl/' + theme + '.yate.js');

    return yr.run(theme, {
        comments: data
    });
};
