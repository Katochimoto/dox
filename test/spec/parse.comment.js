describe('parse.comment', function() {

    /*jshint -W020 */
    var parse = require('../../lib/parse.comment').parse;
    /*jshint -W020 */
    var expect = require('expect.js');


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
        var comment = parse('   \n\n  \n\n  \n\n  ', { raw: true });
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

    it('one line', function() {
        var comment = parse('test', { raw: true });
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

    it('one line', function() {
        var comment = parse('\n\n  \n  \n test \n  \n\n\n  \n', { raw: true });
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

    it('multiline', function() {
        var string = '\n\
        test1  \n\
        \n\
        test2\n\
            ';

        var comment = parse(string, { raw: true });
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

    it('multiline and tags', function() {
        var string = '\n\
        test1  \n\
        \n\
        test2\n\
            \n\
            @return {Boolean}';

        var comment = parse(string, { raw: true });
        expect(comment).to.be.a(Object);
        expect(comment).to.only.have.keys('tags', 'description', 'isPrivate');

        expect(comment.tags).to.be.a(Array);
        expect(comment.tags).to.have.length(1);
        expect(comment.tags).to.eql([ { type: 'return', types: [ 'Boolean' ] } ]);

        expect(comment.description).to.be.a(Object);
        expect(comment.description).to.only.have.keys('full', 'summary', 'body');
        expect(comment.description.full).to.be('test1\n\ntest2\n');
        expect(comment.description.summary).to.be('test1');
        expect(comment.description.body).to.be('test2');

        expect(comment.isPrivate).to.not.be.ok();
    });

    it('one line types', function() {
        var comment = parse('@return {Boolean}', { raw: true });
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

    it('multiline and tags and isPrivate', function() {
        var string = '\n\
        test1  \n\
        \n\
        test2\n\
            \n\
            @api private\n\
            @return {Boolean}';

        var comment = parse(string, { raw: true });
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
        expect(comment.description.full).to.be('test1\n\ntest2\n');
        expect(comment.description.summary).to.be('test1');
        expect(comment.description.body).to.be('test2');

        expect(comment.isPrivate).to.be.ok();
    });

    it('multiline and tags and not isPrivate', function() {
        var string = '\n\
        test1  \n\
        \n\
        test2\n\
            \n\
            @api public\n\
            @return {Boolean}';

        var comment = parse(string, { raw: true });
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
        expect(comment.description.full).to.be('test1\n\ntest2\n');
        expect(comment.description.summary).to.be('test1');
        expect(comment.description.body).to.be('test2');

        expect(comment.isPrivate).to.not.be.ok();
    });

    it('multiline types', function() {
        var comment = parse('@param {String} test\n@return {Boolean}', { raw: true });
        expect(comment).to.be.a(Object);
        expect(comment).to.only.have.keys('tags', 'description', 'isPrivate');

        expect(comment.tags).to.be.a(Array);
        expect(comment.tags).to.have.length(2);
        expect(comment.tags).to.eql([
            { type: 'param', types: [ 'String' ], name: 'test' },
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