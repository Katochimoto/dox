if (typeof require == 'function') {
    /*jshint -W020 */
    dox = require('../../');
    /*jshint -W020 */
    expect = require('expect.js');
}

describe('exports.parseTagTypes', function() {

    it('allows any type', function() {
        var tagTypes = dox.parseTagTypes('{*}');
        expect(tagTypes).to.be.a(Object);
        expect(tagTypes).to.only.have.keys('types');

        expect(tagTypes.types).to.be.a(Array);
        expect(tagTypes.types).to.have.length(1);
        expect(tagTypes.types).to.eql([ '*' ]);
    });

    it('symbol name', function() {
        var tagTypes = dox.parseTagTypes('{boolean}');
        expect(tagTypes).to.be.a(Object);
        expect(tagTypes).to.only.have.keys('types');

        expect(tagTypes.types).to.be.a(Array);
        expect(tagTypes.types).to.have.length(1);
        expect(tagTypes.types).to.eql([ 'boolean' ]);
    });

    it('name expression', function() {
        var tagTypes = dox.parseTagTypes('{myNamespace.MyClass}');
        expect(tagTypes).to.be.a(Object);
        expect(tagTypes).to.only.have.keys('types');

        expect(tagTypes.types).to.be.a(Array);
        expect(tagTypes.types).to.have.length(1);
        expect(tagTypes.types).to.eql([ 'myNamespace.MyClass' ]);
    });

    it('multiple types', function() {
        var tagTypes = dox.parseTagTypes('{string|boolean}');
        expect(tagTypes).to.be.a(Object);
        expect(tagTypes).to.only.have.keys('types');

        expect(tagTypes.types).to.be.a(Array);
        expect(tagTypes.types).to.have.length(2);
        expect(tagTypes.types).to.eql([ 'string', 'boolean' ]);
    });

    it('multiple types', function() {
        var tagTypes = dox.parseTagTypes('{(string|boolean)}');
        expect(tagTypes).to.be.a(Object);
        expect(tagTypes).to.only.have.keys('types');

        expect(tagTypes.types).to.be.a(Array);
        expect(tagTypes.types).to.have.length(2);
        expect(tagTypes.types).to.eql([ 'string', 'boolean' ]);
    });

    it('multiple types', function() {
        var tagTypes = dox.parseTagTypes('{(string|Array.<string>)}');
        expect(tagTypes).to.be.a(Object);
        expect(tagTypes).to.only.have.keys('types');

        expect(tagTypes.types).to.be.a(Array);
        expect(tagTypes.types).to.have.length(2);
        expect(tagTypes.types).to.eql([ 'string', 'Array.<string>' ]);
    });

    it('arrays and objects (type applications and record types)', function() {
        var tagTypes = dox.parseTagTypes('{Array.<MyClass>}');
        expect(tagTypes).to.be.a(Object);
        expect(tagTypes).to.only.have.keys('types');

        expect(tagTypes.types).to.be.a(Array);
        expect(tagTypes.types).to.have.length(1);
        expect(tagTypes.types).to.eql([ 'Array.<MyClass>' ]);
    });

    it('arrays and objects (type applications and record types)', function() {
        var tagTypes = dox.parseTagTypes('{MyClass[]}');
        expect(tagTypes).to.be.a(Object);
        expect(tagTypes).to.only.have.keys('types');

        expect(tagTypes.types).to.be.a(Array);
        expect(tagTypes.types).to.have.length(1);
        expect(tagTypes.types).to.eql([ 'MyClass[]' ]);
    });

    it('arrays and objects (type applications and record types)', function() {
        var tagTypes = dox.parseTagTypes('{Object.<string, number>}');
        expect(tagTypes).to.be.a(Object);
        expect(tagTypes).to.only.have.keys('types');

        expect(tagTypes.types).to.be.a(Array);
        expect(tagTypes.types).to.have.length(1);
        expect(tagTypes.types).to.eql([ 'Object.<string, number>' ]);
    });

    it('arrays and objects (type applications and record types)', function() {
        var tagTypes = dox.parseTagTypes('{{a: number, b: string, c}}');
        expect(tagTypes).to.be.a(Object);
        expect(tagTypes).to.only.have.keys('types');

        expect(tagTypes.types).to.be.a(Array);
        expect(tagTypes.types).to.have.length(1);
        expect(tagTypes.types).to.eql([ '{a: number, b: string, c}' ]);
    });

    it('nullable type', function() {
        var tagTypes = dox.parseTagTypes('{?number}');
        expect(tagTypes).to.be.a(Object);
        expect(tagTypes).to.only.have.keys('types', 'nullable');

        expect(tagTypes.types).to.be.a(Array);
        expect(tagTypes.types).to.have.length(1);
        expect(tagTypes.types).to.eql([ 'number' ]);

        expect(tagTypes.nullable).to.be.ok();
    });

    it('non-nullable type', function() {
        var tagTypes = dox.parseTagTypes('{!number}');
        expect(tagTypes).to.be.a(Object);
        expect(tagTypes).to.only.have.keys('types', 'nonNullable');

        expect(tagTypes.types).to.be.a(Array);
        expect(tagTypes.types).to.have.length(1);
        expect(tagTypes.types).to.eql([ 'number' ]);

        expect(tagTypes.nonNullable).to.be.ok();
    });

    it('variable number of that type', function() {
        var tagTypes = dox.parseTagTypes('{...number}');
        expect(tagTypes).to.be.a(Object);
        expect(tagTypes).to.only.have.keys('types');

        expect(tagTypes.types).to.be.a(Array);
        expect(tagTypes.types).to.have.length(1);
        expect(tagTypes.types).to.eql([ '...number' ]);
    });

    it('optional parameter', function() {
        var tagTypes = dox.parseTagTypes('{number=}');
        expect(tagTypes).to.be.a(Object);
        expect(tagTypes).to.only.have.keys('types', 'optional');

        expect(tagTypes.types).to.be.a(Array);
        expect(tagTypes.types).to.have.length(1);
        expect(tagTypes.types).to.eql([ 'number' ]);

        expect(tagTypes.optional).to.be.ok();
    });

    it('error parameter', function() {
        var tagTypes = dox.parseTagTypes('number');
        expect(tagTypes).to.be.a(Object);
        expect(tagTypes).to.only.have.keys('types');

        expect(tagTypes.types).to.be.a(Array);
        expect(tagTypes.types).to.have.length(0);
        expect(tagTypes.types).to.eql([]);
    });
});
