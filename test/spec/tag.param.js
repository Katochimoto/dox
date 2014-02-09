describe('parse.tag @param', function() {
    /*jshint -W020 */
    var parse = require('../../lib/parse.tag').parse;
    /*jshint -W020 */
    var expect = require('expect.js');


    it('param empty type and name', function() {
        expect(function() {
            parse('@param    ');
        }).to.throwError();
    });

    it('param empty type and name', function() {
        expect(function() {
            parse('@param');
        }).to.throwError();
    });

    it('param empty type and name', function() {
        expect(function() {
            parse('@param  \n\n  \n');
        }).to.throwError();
    });

    it('param empty type', function() {
        var tag = parse('@param    test   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
    });

    it('param empty type', function() {
        var tag = parse('@param    test \n\n   \n  ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
    });

    it('param empty type by description', function() {
        var tag = parse('@param test text description');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'description');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.description).to.be('text description');
    });

    it('param empty type by description', function() {
        var tag = parse('@param    test text description\n\n   \n  ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'description');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.description).to.be('text description');
    });

    it('optional param empty type', function() {
        var tag = parse('@param [test]');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'optional');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.optional).to.be.ok();
    });

    it('optional param empty type by description', function() {
        var tag = parse('@param [test] text description');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'optional', 'description');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.optional).to.be.ok();
        expect(tag.description).to.be('text description');
    });

    it('optional param empty type', function() {
        var tag = parse('@param    [test]     \n\n   \n   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'optional');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.optional).to.be.ok();
    });

    it('optional param empty type by description', function() {
        var tag = parse('@param    [test]     text description     \n\n   \n   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'optional', 'description');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.optional).to.be.ok();
        expect(tag.description).to.be('text description');
    });

    it('optional param empty type default value', function() {
        var tag = parse('@param [test=qwe asd]');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'optional', 'default');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.default).to.be('qwe asd');
        expect(tag.optional).to.be.ok();
    });

    it('optional param empty type by description default value', function() {
        var tag = parse('@param [test=qwe asd] text description');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'optional', 'description', 'default');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.default).to.be('qwe asd');
        expect(tag.optional).to.be.ok();
        expect(tag.description).to.be('text description');
    });

    it('optional param empty type default value', function() {
        var tag = parse('@param    [test=qwe asd]     \n\n   \n   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'optional', 'default');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.default).to.be('qwe asd');
        expect(tag.optional).to.be.ok();
    });

    it('optional param empty type by description default value', function() {
        var tag = parse('@param    [test=qwe asd]     text description     \n\n   \n   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'optional', 'description', 'default');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.default).to.be('qwe asd');
        expect(tag.optional).to.be.ok();
        expect(tag.description).to.be('text description');
    });

    it('param empty name', function() {
        expect(function() {
            parse('@param {String}');
        }).to.throwError();
    });

    it('param empty description', function() {
        var tag = parse('@param {String} test');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'types', 'name');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.types).to.be.a(Array);
        expect(tag.types).to.have.length(1);
        expect(tag.types).to.eql([ 'String' ]);
    });

    it('optional param empty description', function() {
        var tag = parse('@param {String} [test]');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'types', 'name', 'optional');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.types).to.be.a(Array);
        expect(tag.types).to.have.length(1);
        expect(tag.types).to.eql([ 'String' ]);
        expect(tag.optional).to.be.ok();
    });

    it('optional param empty description by default', function() {
        var tag = parse('@param {String} [test=qwe asd]');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'types', 'name', 'optional', 'default');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.types).to.be.a(Array);
        expect(tag.types).to.have.length(1);
        expect(tag.types).to.eql([ 'String' ]);
        expect(tag.optional).to.be.ok();
        expect(tag.default).to.be('qwe asd');
    });

    it('optional param not empty description by default', function() {
        var tag = parse('@param {String} [test=qwe asd] text description');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'types', 'name', 'optional', 'default', 'description');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.types).to.be.a(Array);
        expect(tag.types).to.have.length(1);
        expect(tag.types).to.eql([ 'String' ]);
        expect(tag.optional).to.be.ok();
        expect(tag.default).to.be('qwe asd');
        expect(tag.description).to.be('text description');
    });

    it('optional param not empty description by default', function() {
        var tag = parse('@param {!String} [test=qwe asd] text description');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'types', 'name', 'optional', 'default', 'description', 'nonNullable');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.types).to.be.a(Array);
        expect(tag.types).to.have.length(1);
        expect(tag.types).to.eql([ 'String' ]);
        expect(tag.optional).to.be.ok();
        expect(tag.nonNullable).to.be.ok();
        expect(tag.default).to.be('qwe asd');
        expect(tag.description).to.be('text description');
    });

    it('optional param not empty description by default', function() {
        var tag = parse('@param {?String} [test=qwe asd] text description');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'types', 'name', 'optional', 'default', 'description', 'nullable');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.types).to.be.a(Array);
        expect(tag.types).to.have.length(1);
        expect(tag.types).to.eql([ 'String' ]);
        expect(tag.optional).to.be.ok();
        expect(tag.nullable).to.be.ok();
        expect(tag.default).to.be('qwe asd');
        expect(tag.description).to.be('text description');
    });

    it('optional param not empty description by default', function() {
        var tag = parse('@param {String=} [test=qwe asd] text description');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'types', 'name', 'optional', 'default', 'description');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.types).to.be.a(Array);
        expect(tag.types).to.have.length(1);
        expect(tag.types).to.eql([ 'String' ]);
        expect(tag.optional).to.be.ok();
        expect(tag.default).to.be('qwe asd');
        expect(tag.description).to.be('text description');
    });

    it('optional param not empty description by default', function() {
        var tag = parse('@param {String=} test text description');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'types', 'name', 'optional', 'description');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.types).to.be.a(Array);
        expect(tag.types).to.have.length(1);
        expect(tag.types).to.eql([ 'String' ]);
        expect(tag.optional).to.be.ok();
        expect(tag.description).to.be('text description');
    });

    it('many types', function() {
        var tag = parse('@param {string|boolean} test');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'types', 'name');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.types).to.be.a(Array);
        expect(tag.types).to.have.length(2);
        expect(tag.types).to.eql([ 'string', 'boolean' ]);
    });

    it('many types', function() {
        var tag = parse('@param {(string|boolean)} test');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'types', 'name');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.types).to.be.a(Array);
        expect(tag.types).to.have.length(2);
        expect(tag.types).to.eql([ 'string', 'boolean' ]);
    });

    it('many types', function() {
        var tag = parse('@param {{a: number, b: string, c}} test');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'types', 'name');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.types).to.be.a(Array);
        expect(tag.types).to.have.length(1);
        expect(tag.types).to.eql([ '{a: number, b: string, c}' ]);
    });

    it('many types', function() {
        var tag = parse('@param {*} test   \n\n   \n  ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'types', 'name');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.types).to.be.a(Array);
        expect(tag.types).to.have.length(1);
        expect(tag.types).to.eql([ '*' ]);
    });

    it('param dot', function() {
        var tag = parse('@param    test1.test2   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test1.test2');
    });
});
