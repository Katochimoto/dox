describe('parse.comment', function() {
    /* global __dirname */

    var parse = require('../../lib/parse.comment').parse;
    var expect = require('expect.js');
    var fs = require('fs');

    function fixture(name, fn) {
        fs.readFile(__dirname + '/parse.comment/' + name + '.txt', 'utf8', fn);
    }

    it('empty comment', function() {
        var comment = parse('', { raw: true });
        expect(comment).to.be.a(Object);
        expect(comment).to.only.have.keys('tags', 'description', 'isPrivate');

        expect(comment.tags).to.be.a(Array);
        expect(comment.tags).to.have.length(0);
        expect(comment.tags).to.eql([]);

        expect(comment.description).to.be.a(Object);
        expect(comment.description).to.only.have.keys('full', 'summary', 'body');
        expect(comment.description.full).to.be('');
        expect(comment.description.summary).to.be('');
        expect(comment.description.body).to.be('');

        expect(comment.isPrivate).to.not.be.ok();
    });

    it('empty comment', function() {
        fixture('empty', function(err, str) {
            var comment = parse(str, { raw: true });
            expect(comment).to.be.a(Object);
            expect(comment).to.only.have.keys('tags', 'description', 'isPrivate');

            expect(comment.tags).to.be.a(Array);
            expect(comment.tags).to.have.length(0);
            expect(comment.tags).to.eql([]);

            expect(comment.description).to.be.a(Object);
            expect(comment.description).to.only.have.keys('full', 'summary', 'body');
            expect(comment.description.full).to.be('');
            expect(comment.description.summary).to.be('');
            expect(comment.description.body).to.be('');

            expect(comment.isPrivate).to.not.be.ok();
        });
    });

    it('one line', function() {
        fixture('oneline1', function(err, str) {
            var comment = parse(str, { raw: true });
            expect(comment).to.be.a(Object);
            expect(comment).to.only.have.keys('tags', 'description', 'isPrivate');

            expect(comment.tags).to.be.a(Array);
            expect(comment.tags).to.have.length(0);
            expect(comment.tags).to.eql([]);

            expect(comment.description).to.be.a(Object);
            expect(comment.description).to.only.have.keys('full', 'summary', 'body');
            expect(comment.description.full).to.be('test');
            expect(comment.description.summary).to.be('test');
            expect(comment.description.body).to.be('');

            expect(comment.isPrivate).to.not.be.ok();
        });
    });

    it('one line', function() {
        fixture('oneline2', function(err, str) {
            var comment = parse(str, { raw: true });
            expect(comment).to.be.a(Object);
            expect(comment).to.only.have.keys('tags', 'description', 'isPrivate');

            expect(comment.tags).to.be.a(Array);
            expect(comment.tags).to.have.length(0);
            expect(comment.tags).to.eql([]);

            expect(comment.description).to.be.a(Object);
            expect(comment.description).to.only.have.keys('full', 'summary', 'body');
            expect(comment.description.full).to.be('test');
            expect(comment.description.summary).to.be('test');
            expect(comment.description.body).to.be('');

            expect(comment.isPrivate).to.not.be.ok();
        });
    });

    it('multiline', function() {
        fixture('multiline', function(err, str) {
            var comment = parse(str, { raw: true });
            expect(comment).to.be.a(Object);
            expect(comment).to.only.have.keys('tags', 'description', 'isPrivate');

            expect(comment.tags).to.be.a(Array);
            expect(comment.tags).to.have.length(0);
            expect(comment.tags).to.eql([]);

            expect(comment.description).to.be.a(Object);
            expect(comment.description).to.only.have.keys('full', 'summary', 'body');
            expect(comment.description.full).to.be('test1\n\ntest2');
            expect(comment.description.summary).to.be('test1');
            expect(comment.description.body).to.be('test2');

            expect(comment.isPrivate).to.not.be.ok();
        });
    });

    it('multiline and tags', function() {
        fixture('tags1', function(err, str) {
            var comment = parse(str, { raw: true });
            expect(comment).to.be.a(Object);
            expect(comment).to.only.have.keys('tags', 'description', 'isPrivate');

            expect(comment.tags).to.be.a(Array);
            expect(comment.tags).to.have.length(1);
            expect(comment.tags).to.eql([ { type: 'return', types: [ 'Boolean' ] } ]);

            expect(comment.description).to.be.a(Object);
            expect(comment.description).to.only.have.keys('full', 'summary', 'body');
            expect(comment.description.full).to.be('test1\n\ntest2');
            expect(comment.description.summary).to.be('test1');
            expect(comment.description.body).to.be('test2');

            expect(comment.isPrivate).to.not.be.ok();
        });
    });

    it('one line types', function() {
        fixture('tags2', function(err, str) {
            var comment = parse(str, { raw: true });
            expect(comment).to.be.a(Object);
            expect(comment).to.only.have.keys('tags', 'description', 'isPrivate');

            expect(comment.tags).to.be.a(Array);
            expect(comment.tags).to.have.length(1);
            expect(comment.tags).to.eql([ { type: 'return', types: [ 'Boolean' ] } ]);

            expect(comment.description).to.be.a(Object);
            expect(comment.description).to.only.have.keys('full', 'summary', 'body');
            expect(comment.description.full).to.be('');
            expect(comment.description.summary).to.be('');
            expect(comment.description.body).to.be('');

            expect(comment.isPrivate).to.not.be.ok();
        });
    });

    it('multiline and tags and isPrivate', function() {
        fixture('tags3', function(err, str) {
            var comment = parse(str, { raw: true });
            expect(comment).to.be.a(Object);
            expect(comment).to.only.have.keys('tags', 'description', 'isPrivate');

            expect(comment.tags).to.be.a(Array);
            expect(comment.tags).to.have.length(2);
            expect(comment.tags).to.eql([
                { type: 'api', visibility: 'private' },
                { type: 'return', types: [ 'Boolean' ] }
            ]);

            expect(comment.description).to.be.a(Object);
            expect(comment.description).to.only.have.keys('full', 'summary', 'body');
            expect(comment.description.full).to.be('test1\n\ntest2');
            expect(comment.description.summary).to.be('test1');
            expect(comment.description.body).to.be('test2');

            expect(comment.isPrivate).to.be.ok();
        });
    });

    it('multiline and tags and not isPrivate', function() {
        fixture('tags4', function(err, str) {
            var comment = parse(str, { raw: true });
            expect(comment).to.be.a(Object);
            expect(comment).to.only.have.keys('tags', 'description', 'isPrivate');

            expect(comment.tags).to.be.a(Array);
            expect(comment.tags).to.have.length(2);
            expect(comment.tags).to.eql([
                { type: 'api', visibility: 'public' },
                { type: 'return', types: [ 'Boolean' ] }
            ]);

            expect(comment.description).to.be.a(Object);
            expect(comment.description).to.only.have.keys('full', 'summary', 'body');
            expect(comment.description.full).to.be('test1\n\n\ntest2');
            expect(comment.description.summary).to.be('test1');
            expect(comment.description.body).to.be('test2');

            expect(comment.isPrivate).to.not.be.ok();
        });
    });

    it('multiline types', function() {
        fixture('tags5', function(err, str) {
            var comment = parse(str, { raw: true });
            expect(comment).to.be.a(Object);
            expect(comment).to.only.have.keys('tags', 'description', 'isPrivate');

            expect(comment.tags).to.be.a(Array);
            expect(comment.tags).to.have.length(2);
            expect(comment.tags).to.eql([
                { type: 'param', types: [ 'String' ], name: 'test', original: 'test' },
                { type: 'return', types: [ 'Boolean' ] }
            ]);

            expect(comment.description).to.be.a(Object);
            expect(comment.description).to.only.have.keys('full', 'summary', 'body');
            expect(comment.description.full).to.be('');
            expect(comment.description.summary).to.be('');
            expect(comment.description.body).to.be('');

            expect(comment.isPrivate).to.not.be.ok();
        });
    });
});
