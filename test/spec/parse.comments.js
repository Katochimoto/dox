describe('parse.comments', function() {
    /* global __dirname */

    var parse = require('../../lib/parse.comments').parse;
    var expect = require('expect.js');
    var fs = require('fs');

    function fixture(name, fn) {
        fs.readFile(__dirname + '/parse.comments/' + name + '.txt', 'utf8', fn);
    }

    it('empty comments', function() {
        fixture('empty', function(err, str) {
            var comments = parse(str);
            expect(comments).to.be.a(Array);
            expect(comments).to.have.length(0);
            expect(comments).to.eql([]);
        });
    });

    it('one text comment', function() {
        fixture('onecomment1', function(err, str) {
            var comments = parse(str);
            expect(comments).to.be.a(Array);
            expect(comments).to.have.length(1);
            expect(comments).to.eql([ {
                tags: [],
                isPrivate: false,
                description: { full: '123', summary: '123', body: '' },
                ignore: false,
                code: '',
                ctx: {},
                matchCtx: { type: '', name: undefined, context: undefined }
            } ]);
        });
    });

    it('one line text comment', function() {
        fixture('onecomment2', function(err, str) {
            var comments = parse(str);
            expect(comments).to.be.a(Array);
            expect(comments).to.have.length(1);
            expect(comments).to.eql([ {
                tags: [],
                isPrivate: false,
                description: { full: '123', summary: '123', body: '' },
                ignore: false,
                code: '',
                ctx: {},
                matchCtx: { type: '', name: undefined, context: undefined }
            } ]);
        });
    });

    it('one format text comment', function() {
        fixture('onecomment3', function(err, str) {
            var comments = parse(str);
            expect(comments).to.be.a(Array);
            expect(comments).to.have.length(1);
            expect(comments).to.eql([ {
                tags: [],
                isPrivate: false,
                description: { full: '123', summary: '123', body: '' },
                ignore: false,
                code: '',
                ctx: {},
                matchCtx: { type: '', name: undefined, context: undefined }
            } ]);
        });
    });

    it('one ignore text comment', function() {
        fixture('onecomment4', function(err, str) {
            var comments = parse(str);
            expect(comments).to.be.a(Array);
            expect(comments).to.have.length(1);
            expect(comments).to.eql([ {
                tags: [],
                isPrivate: false,
                description: { full: '123', summary: '123', body: '' },
                ignore: true,
                code: '',
                ctx: {},
                matchCtx: { type: '', name: undefined, context: undefined }
            } ]);
        });
    });

    it('one line ignore text comment', function() {
        fixture('onecomment5', function(err, str) {
            var comments = parse(str);
            expect(comments).to.be.a(Array);
            expect(comments).to.have.length(1);
            expect(comments).to.eql([ {
                tags: [],
                isPrivate: false,
                description: { full: '123', summary: '123', body: '' },
                ignore: true,
                code: '',
                ctx: {},
                matchCtx: { type: '', name: undefined, context: undefined }
            } ]);
        });
    });

    it('one code text comment', function() {
        fixture('onecomment6', function(err, str) {
            var comments = parse(str);
            expect(comments).to.be.a(Array);
            expect(comments).to.have.length(1);
            expect(comments).to.eql([ {
                tags: [],
                isPrivate: false,
                description: { full: '123', summary: '123', body: '' },
                ignore: false,
                code: '456',
                ctx: {},
                matchCtx: { type: '', name: undefined, context: undefined }
            } ]);
        });
    });

    it('one description text comment', function() {
        fixture('onecomment7', function(err, str) {
            var comments = parse(str);
            expect(comments).to.be.a(Array);
            expect(comments).to.have.length(1);
            expect(comments).to.eql([ {
                tags: [],
                isPrivate: false,
                description: { full: 'summary\n\nbody', summary: 'summary', body: 'body' },
                ignore: false,
                code: '',
                ctx: {},
                matchCtx: { type: '', name: undefined, context: undefined }
            } ]);
        });
    });

    it('one private text comment', function() {
        fixture('onecomment8', function(err, str) {
            var comments = parse(str);
            expect(comments).to.be.a(Array);
            expect(comments).to.have.length(1);
            expect(comments).to.eql([ {
                tags: [ { type: 'api', visibility: 'private' } ],
                isPrivate: true,
                description: { full: 'summary\n\nbody', summary: 'summary', body: 'body' },
                ignore: false,
                code: '',
                ctx: {},
                matchCtx: { type: '', name: undefined, context: undefined }
            } ]);
        });
    });

    it('many comment', function() {
        fixture('manycomment1', function(err, str) {
            var comments = parse(str);
            expect(comments).to.be.a(Array);
            expect(comments).to.have.length(5);
        });
    });

});
