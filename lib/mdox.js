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

    root = path.normalize(root);
    var tmpDir = path.join(root, '.tmp');
    var docDir = path.join(root, 'doc');

    // файл содержания по файлам
    var tmpByFileTOC = path.join(tmpDir, 'file.json');
    // файл содержания по структуре
    var tmpContextTOC = path.join(tmpDir, 'context.json');
    // папка с документацией по файлам
    var tmpByFileDir = path.join(tmpDir, 'file');
    // папка с документацией по структуре
    var tmpContextDir = path.join(tmpDir, 'context');
    // исходники
    var tmpSourceDir = path.join(tmpDir, 'source');
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
    mkdirp.sync(tmpByFileDir);
    mkdirp.sync(tmpContextDir);
    mkdirp.sync(tmpSourceDir);
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

    var fileTOC = [];
    var contextTOC = {};
    var error = false;
    files.forEach(function(file, idx) {
        var ext = path.extname(file);
        var fileSource = path.join(root, file);
        var dirSource = path.dirname(file);
        var baseSource = path.basename(file, ext);
        var mdFileSource = path.join(root, dirSource, baseSource + '.md');
        var titleFile;

        // документация по файлам
        var tmpFileSource = path.join(tmpByFileDir, dirSource, baseSource + '.json');
        var tmpMdFileSource = path.join(tmpByFileDir, dirSource, baseSource + '.md');


        cli.debug('Read: ' + fileSource);

        var contexts = {};
        var data = fs.readFileSync(fileSource, { encoding: 'utf8' });
        data = exports.jsonGenerate(data || '');

        data.forEach(function(comment) {
            var context = comment.matchCtx.context;

            contexts[context] = contexts[context] || [];
            contexts[context].push(comment);

            if (comment.matchCtx.type === 'file' && comment.matchCtx.name) {
                titleFile = comment.matchCtx.name;
            }
        });

        for (var context in contexts) {
            if (contexts.hasOwnProperty(context)) {
                var name = context.replace(/[^a-z0-9\.]/ig, '_');
                var contextFile = path.join(tmpContextDir, name + '.json');
                if (fs.existsSync(contextFile)) {
                    fs.appendFileSync(contextFile, '\n' + JSON.stringify(contexts[context]), { encoding: 'utf8' });

                } else {
                    fs.writeFileSync(contextFile, JSON.stringify(contexts[context]), { encoding: 'utf8' });
                }

                contextTOC[name] = contextTOC[name] || { files: [] };
                contextTOC[name].files.push(file);
                contextTOC[name].mdFile = path.join(tmpContextDir, name + '.md');
                contextTOC[name].title = context;
            }
        }


        mkdirp.sync(path.dirname(tmpFileSource));
        fs.writeFileSync(tmpFileSource, JSON.stringify(data, null, 4), {
            encoding: 'utf8'
        });

        if (fs.existsSync(mdFileSource)) {
            var mdData = fs.readFileSync(mdFileSource, { encoding: 'utf8' });
            fs.writeFileSync(tmpMdFileSource, mdData, { encoding: 'utf8' });
        }

        fileTOC.push({
            file: file,
            mdFile: path.join(dirSource, baseSource + '.md'),
            title: titleFile,
            contexts: Object.keys(contexts)
        });
    });

    contextTOC = Object.keys(contextTOC).map(function(k) {
        return this[k];
    }, contextTOC);

    fs.writeFileSync(tmpByFileTOC, JSON.stringify(fileTOC, null, 4), { encoding: 'utf8' });
    fs.writeFileSync(tmpContextTOC, JSON.stringify(contextTOC, null, 4), { encoding: 'utf8' });

    rimraf.sync(tmpDir);
    cli.debug('Tmp remove: ' + tmpDir);

    if (error) {
        cli.info('Some error!');

    } else {
        cli.ok('Finished!');
    }
};
