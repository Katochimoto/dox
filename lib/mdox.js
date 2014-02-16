var parseComments = require('./parse.comments').parse;
var normalizeComments = require('./parse.comments').normalize;
var markdown = require('github-flavored-markdown').parse;
var yr = require('../node_modules/yate/lib/runtime');
var utils = require('./utils');

var fs = require('fs');
var path = require('path');
var glob = require('glob');
var cli = require('cli');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var util = require('util');

exports.jsonGenerate = function(str, options) {
    return parseComments(str, options);
};

exports.mdGenerateByJson = function(data, theme, mode) {
    'use strict';

    theme = theme || 'default';
    mode = mode || 'comments';

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

    return yr.run(theme, { data: data }, mode);
};

exports.mdGenerate = function(str, options, theme) {
    return exports.mdGenerateByJson(
        exports.jsonGenerate(str, options),
        theme
    );
};

exports.htmlGenerate = function(str, options, theme) {
    return markdown(exports.mdGenerate(str, options, theme));
};

// ./bin/mdox --debug generate -c ./example -d ./example/doc
exports.docGenerate = function(options) {
    'use strict';

    var cwd = path.normalize(options.cwd);
    var docDir = path.normalize(options.out);
    var tmpDir = path.join(cwd, '.tmpmdox');

    // папка с документацией по файлам
    var tmpByFileDir = path.join(tmpDir, 'file');           // .tmp/file
    // папка с документацией по структуре
    var tmpContextDir = path.join(tmpDir, 'context');       // .tmp/context
    // исходники
    var tmpSourceDir = path.join(tmpDir, 'source');         // .tmp/source

    rimraf.sync(tmpDir);
    mkdirp.sync(tmpDir);
    mkdirp.sync(docDir);
    mkdirp.sync(tmpByFileDir);
    mkdirp.sync(tmpContextDir);
    mkdirp.sync(tmpSourceDir);
    cli.debug('Tmp create: ' + tmpDir);


    var fileTOC = {};
    var contextTOC = {};

    _getDocumentFiles(cwd).forEach(function(file) {
        var jsonFile = _replaceExt(file, 'json');

        cli.debug('Read: ' + file);

        var data = fs.readFileSync(path.join(cwd, file), { encoding: 'utf8' });
        data = exports.jsonGenerate(data || '');

        var contexts = utils.contextSplit(data);

        for (var context in contexts) {
            if (contexts.hasOwnProperty(context)) {
                var contextFile = path.join(tmpContextDir, context + '.json');

                if (fs.existsSync(contextFile)) {
                    fs.appendFileSync(contextFile, '\n' + JSON.stringify(contexts[context]), { encoding: 'utf8' });

                } else {
                    fs.writeFileSync(contextFile, JSON.stringify(contexts[context]), { encoding: 'utf8' });
                }


                if (!contextTOC[context]) {
                    contextTOC[context] = {
                        title: context,
                        linkMd: path.join('context', context + '.md'),
                        files: [ file ]
                    };

                } else {
                    contextTOC[context].files.push(file);
                }
            }
        }

        _writeFile(path.join(tmpByFileDir, jsonFile), JSON.stringify(data));

        fileTOC[file] = {
            title: file,
            linkSource: path.join('source', _replaceExt(file, 'html')),
            linkMd: path.join('file', _replaceExt(file, 'md')),
            contexts: Object.keys(contexts)
        };
    });



    (glob.sync('context/**/*.json', {
        root: tmpDir,
        cwd: tmpDir
    })).concat(glob.sync('file/**/*.json', {
        root: tmpDir,
        cwd: tmpDir
    })).forEach(function(file) {
        var mdFile = _replaceExt(file, 'md');
        var data = _getJsonComments(path.join(tmpDir, file));

        _writeFile(path.join(docDir, mdFile), exports.mdGenerateByJson(data));
    });



    var fileTOCContext = Object.keys(fileTOC).map(function(k) {
        var toc = this[k];
        toc.contexts = toc.contexts.map(function(context) {
            return contextTOC[context];
        });
        return toc;
    }, fileTOC);

    var contextTOCFiles = Object.keys(contextTOC).map(function(k) {
        var toc = this[k];
        toc.files = toc.files.map(function(file) {
            return fileTOC[file];
        });
        return toc;
    }, contextTOC);


    _writeFile(path.join(docDir, 'file.md'), exports.mdGenerateByJson(fileTOCContext, null, 'toc'));
    _writeFile(path.join(docDir, 'context.md'), exports.mdGenerateByJson(contextTOCFiles, null, 'toc'));


    rimraf.sync(tmpDir);
    cli.debug('Tmp remove: ' + tmpDir);

    cli.ok('Finished!');
};


function _writeFile(file, data) {
    mkdirp.sync(path.dirname(file));
    fs.writeFileSync(file, data, { encoding: 'utf8' });
}


function _getJsonComments(file) {
    var data = fs.readFileSync(file, { encoding: 'utf8' });

    data = data.split('\n').reduce(function(linePrev, line) {
        return (typeof(linePrev) === 'string' ? JSON.parse(linePrev) : linePrev).concat(JSON.parse(line));
    }, '[]');

    return normalizeComments(data);
}


function _replaceExt(file, ext) {
    return path.join(path.dirname(file), path.basename(file, path.extname(file)) + '.' + ext);
}


function _getDocumentFiles(root) {
    'use strict';

    var configFile = path.join(root, '.mdox');
    var configStr = [ '*' ];

    if (fs.existsSync(configFile)) {
        configStr = fs.readFileSync(configFile, { encoding: 'utf8' });

        if (configStr) {
            configStr = configStr.trim()
                .replace(/\r\n/gm, '\n')
                .split('\n');
        }
    }

    cli.debug('Patterns: ' + util.inspect(configStr, {
        showHidden: false,
        depth: Infinity,
        colors: true
    }));

    var files = [];
    configStr.forEach(function(pattern) {
        var globMatch = glob.sync(pattern, {
            root: root,
            cwd: root,
            mark: true // в конце у папки добавляет /
        });

        // убрать папки
        globMatch = globMatch.filter(function(match) {
            return match.charAt(match.length - 1) !== '/';
        });

        files = files.concat(globMatch);
    });

    // удаление дублей
    files = files.filter(function(file, idx, arr) {
        return (idx === arr.lastIndexOf(file));
    });

    return files;
}
