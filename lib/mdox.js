var parseComments = require('./parse.comments').parse;
var markdown = require('github-flavored-markdown').parse;
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

exports.docGenerate = function(root/*options*/) {
    'use strict';

    var fs = require('fs');
    var path = require('path');
    var glob = require('glob');
    var cli = require('cli');
    var mkdirp = require('mkdirp');
    var rimraf = require('rimraf');
    var util = require('util');
    var utils = require('./utils');

    root = path.normalize(root);
    var tmpDir = path.join(root, '.tmp');
    var tmpByFileDir = path.join(tmpDir, 'file');
    var tmpContextDir = path.join(tmpDir, 'context');
    var configFile = path.join(root, '.mdox');
    var configStr = [ '*' ];

    if (fs.existsSync(configFile)) {
        configStr = fs.readFileSync(configFile, {
            encoding: 'utf8'
        });

        if (configStr) {
            configStr = configStr.trim()
                .replace(/\r\n/gm, '\n')
                .split('\n');
        } else {
            configStr = [];
        }
    }

    cli.debug('Patterns: ' + util.inspect(configStr, {
        showHidden: false,
        depth: Infinity,
        colors: true
    }));


    rimraf.sync(tmpDir);
    mkdirp.sync(tmpDir);
    cli.debug('Tmp create: ' + tmpDir);



    var files = [];
    configStr.forEach(function(pattern) {
        files = files.concat(glob.sync(pattern, {
            root: root,
            cwd: root,
            mark: true
        }).filter(function(match) {
            return match.charAt(match.length - 1) !== '/';
        }));
    });

    files = files.filter(function(file, idx, arr) {
        return idx == arr.lastIndexOf(file);
    });

    var error = false;
    files.forEach(function(file, idx) {
        var ext = path.extname(file);
        var fileSource = path.join(root, file);
        var dirSource = path.dirname(file);
        var tmpFileSource = path.join(tmpByFileDir, dirSource, path.basename(file, ext) + '.json');


        cli.debug('Read: ' + fileSource);

        var contexts = {};
        var data = fs.readFileSync(fileSource, { encoding: 'utf8', flag: 'r' });
        data = exports.jsonGenerate(data || '');

        data.forEach(function(comment) {
            var context = utils.getContext(comment);
            console.log(context);
        });


        mkdirp.sync(path.dirname(tmpFileSource));
        fs.writeFileSync(tmpFileSource, JSON.stringify(data), {
            encoding: 'utf8'
        });
    });

    rimraf.sync(tmpDir);
    cli.debug('Tmp remove: ' + tmpDir);

    if (error) {
        cli.info('Some error!');

    } else {
        cli.ok('Finished!');
    }
};
