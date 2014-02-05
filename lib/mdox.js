var parseComments = require('./parse.comments').parse;
var yr = require('../node_modules/yate/lib/runtime');

exports.mdGenerate = function(str, options, theme) {
    theme = theme || 'default';

    require('../tmpl/' + theme + '.yate.js');

    var data = parseComments(str, options);

    console.log(JSON.stringify(data));

    // ./node_modules/.bin/yate tmpl/default.yate > tmpl/default.yate.js
    return yr.run('main', {
        comments: data
    });
};
