var jpath = require('jpath');

/**
 * Escape the given `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */
exports.escape = function(html)  {
    return String(html)
        .replace(/&(?!\w+;)/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
};

exports.getType = function(comment) {
    var classTypes = [ 'class', 'constructor', 'namespace', 'classdesc', 'mixin', 'lends', 'event', 'typedef', 'external' ];
    var classKinds = [ 'namespace', 'typedef', 'mixin', 'class', 'event', 'external' ];

    var funcTypes = [ 'method', 'function', 'func', 'callback', 'constructs' ];
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
        return (funcTypes.indexOf(tag.type) !== -1);
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
    var context;
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
            '/.tags[.type == "event"].name',
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
    var parts;

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
            '/.tags[.type == "event"].name',
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
