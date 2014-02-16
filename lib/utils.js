var jpath = require('jpath');


exports.getFileTitle = function(comments) {
    var title = jpath(comments, '/.[.matchCtx.type == "file" && .tags.type == "file"].tags[.type == "file"]')[0];
    return title ? title[0].description : '';
};


exports.contextSplit = function(comments) {
    var contexts = {};

    comments.forEach(function(comment) {
        if (!comment.ctx.type) {
            return;
        }

        var context = encodeURIComponent(comment.matchCtx.context);

        contexts[context] = contexts[context] || [];
        contexts[context].push(comment);
    });

    return contexts;
};

exports.getType = function(comment) {
    var classTypes = [ 'class', 'constructor', 'namespace', 'classdesc', 'mixin', 'lends', 'typedef', 'external' ];
    var classKinds = [ 'namespace', 'typedef', 'mixin', 'class', 'external' ];

    var funcTypes = [ 'method', 'function', 'func', 'callback', 'constructs', 'event' ];
    var funcKinds = [ 'event' ];
    var funcCtx = [ 'method', 'function' ];

    var propTypes = [ 'constant', 'const', 'var', 'member' ];
    var propCtx = [ 'property', 'declaration' ];
    var propKinds = [ 'constant', 'member' ];

    var fileTypes = [ 'file', 'overview', 'fileoverview' ];
    var fileKinds = [ 'file' ];

    var moduleTypes = [ 'module' ];
    var moduleKinds = [ 'module' ];

    var isModule = comment.tags.some(function(tag) {
        return (moduleTypes.indexOf(tag.type) !== -1 || moduleKinds.indexOf(tag.kind) !== -1);
    });

    if (isModule) {
        return 'module';
    }

    var isClass = comment.tags.some(function(tag) {
        return (classTypes.indexOf(tag.type) !== -1 || classKinds.indexOf(tag.kind) !== -1);
    });

    if (isClass) {
        return 'class';
    }

    var isFunc = comment.tags.some(function(tag) {
        return (funcTypes.indexOf(tag.type) !== -1 || funcKinds.indexOf(tag.kind) !== -1);
    }) || (comment.ctx && funcCtx.indexOf(comment.ctx.type) !== -1);

    if (isFunc) {
        return 'func';
    }

    var isProp = comment.tags.some(function(tag) {
        return (propTypes.indexOf(tag.type) !== -1 || propKinds.indexOf(tag.kind) !== -1);
    }) || (comment.ctx && propCtx.indexOf(comment.ctx.type) !== -1);

    if (isProp) {
        return 'prop';
    }

    var isFile = comment.tags.some(function(tag) {
        return (fileTypes.indexOf(tag.type) !== -1 || fileKinds.indexOf(tag.kind) !== -1);
    });

    if (isFile) {
        return 'file';
    }

    return '';
};

exports.getContext = function(comment) {
    var type = exports.getType(comment);
    var context = 'global';
    var parts = [];

    if (type === 'module') {
        parts = [
            '/.tags[.type == "module"].name',
            '/.tags[.type == "name"].name',
            '/.ctx[.type == "function"].name',
            '/.ctx[.type == "declaration"].name',
            '/.ctx[.type == "property"].name',
            '/.ctx[.type == "method"].name'
        ];

    } else if (type === 'class') {
        parts = [
            '/.tags[.type == "class"].name',
            '/.tags[.type == "constructor"].name',
            '/.tags[.type == "namespace"].name',
            '/.tags[.type == "mixin"].name',
            '/.tags[.type == "typedef"].name',
            '/.tags[.type == "external"].name',
            '/.tags[.type == "name"].name',
            '/.ctx[.type == "function"].name',
            '/.ctx[.type == "declaration"].name',
            '/.ctx[.type == "property"].name',
            '/.ctx[.type == "method"].name'
        ];

    } else if (type === 'func') {
        parts = [
            '/.tags[.type == "memberof"].parent',
            '/.tags[.type == "memberOf"].parent',
            '/.tags[.type == "event"].context',
            '/.ctx[.type == "method"].cons',
            '/.ctx[.type == "method"].receiver'
        ];

    } else if (type === 'prop') {
        parts = [
            '/.tags[.type == "memberof"].parent',
            '/.tags[.type == "memberOf"].parent',
            '/.ctx[.type == "property"].cons',
            '/.ctx[.type == "declaration"].receiver'
        ];
    }

    for (var i = 0; i < parts.length; i++) {
        context = jpath(comment, parts[i])[0];
        if (context) {
            break;
        }
    }

    return context;
};

exports.getName = function(comment) {
    var type = exports.getType(comment);
    var name;
    var parts = [];

    if (type === 'module') {
        parts = [
            '/.tags[.type == "module"].name',
            '/.tags[.type == "name"].name',
            '/.ctx[.type == "function"].name',
            '/.ctx[.type == "declaration"].name',
            '/.ctx[.type == "property"].name',
            '/.ctx[.type == "method"].name'
        ];

    } else if (type === 'class') {
        parts = [
            '/.tags[.type == "class"].name',
            '/.tags[.type == "constructor"].name',
            '/.tags[.type == "namespace"].name',
            '/.tags[.type == "mixin"].name',
            '/.tags[.type == "typedef"].name',
            '/.tags[.type == "external"].name',
            '/.tags[.type == "name"].name',
            '/.ctx[.type == "function"].name',
            '/.ctx[.type == "declaration"].name',
            '/.ctx[.type == "property"].name',
            '/.ctx[.type == "method"].name'
        ];

    } else if (type === 'func') {
        parts = [
            '/.tags[.type == "constructs"].name',
            '/.tags[.type == "callback"].name',
            '/.tags[.type == "func"].name',
            '/.tags[.type == "function"].name',
            '/.tags[.type == "method"].name',
            '/.tags[.type == "event"].name',
            '/.tags[.type == "name"].name',
            '/.ctx[.type == "method"].name',
            '/.ctx[.type == "function"].name'
        ];

    } else if (type === 'prop') {
        parts = [
            '/.tags[.type == "constant"].name',
            '/.tags[.type == "const"].name',
            '/.tags[.type == "member"].name',
            '/.tags[.type == "var"].name',
            '/.tags[.type == "name"].name',
            '/.ctx[.type == "property"].name',
            '/.ctx[.type == "declaration"].name'
        ];

    } else if (type === 'file') {
        parts = [
            '/.tags[.type == "title"].description',
            '/.tags[.type == "file"].description',
            '/.tags[.type == "overview"].description',
            '/.tags[.type == "fileoverview"].description'
        ];
    }

    for (var i = 0; i < parts.length; i++) {
        name = jpath(comment, parts[i])[0];
        if (name) {
            break;
        }
    }

    return name;
};

exports.createContextComment = function(context) {
    return {
        tags: [
            { type: 'class', name: context }
        ],
        isPrivate: false,
        description: { full: '', summary: '', body: '' },
        ignore: false,
        code: '',
        ctx: {},
        matchCtx: {
            type: 'class',
            name: context,
            context: context,
            weight: 100
        },
        fake: true
    };
};

exports.getWeight = function(comment) {
    var type = exports.getType(comment);
    var context = exports.getContext(comment);
    var weight = 0;

    if (context === 'global') {
        weight = 95;
    }

    switch (type) {
        case 'file':
            weight = 100;
            break;
        case 'module':
            weight = 90;
            break;
        case 'class':
            weight = 80;
            break;
        case 'prop':
            weight = 70;
            break;
        case 'func':
            weight = 60;
            break;
    }

    return weight;
};

