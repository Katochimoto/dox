describe('parse.context', function() {
    /* global __dirname */

    var parse = require('../../lib/parse.context').parse;
    var expect = require('expect.js');
    var fs = require('fs');

    function fixture(name, fn) {
        fs.readFile(__dirname + '/parse.context/' + name + '.txt', 'utf8', fn);
    }

    it('empty context', function() {
        fixture('empty', function(err, str) {
            var context = parse(str);
            expect(context).to.be.a(Object);
            expect(context).to.eql({});
        });
    });

    it('function statement 1', function() {
        fixture('function1', function(err, str) {
            var context = parse(str);
            expect(context).to.be.a(Object);
            expect(context).to.eql({ type: 'function', name: 'test', string: 'test()' });
        });
    });

    it('function statement 2', function() {
        fixture('function2', function(err, str) {
            var context = parse(str);
            expect(context).to.be.a(Object);
            expect(context).to.eql({ type: 'function', name: 'test', string: 'test()' });
        });
    });

    it('function expression 1', function() {
        fixture('function3', function(err, str) {
            var context = parse(str);
            expect(context).to.be.a(Object);
            expect(context).to.eql({ type: 'function', name: 'test', string: 'test()' });
        });
    });

    it('prototype method 1', function() {
        fixture('function4', function(err, str) {
            var context = parse(str);
            expect(context).to.be.a(Object);
            expect(context).to.eql({
                type: 'method',
                name: 'test',
                string: 'Sample.prototype.test()',
                cons: 'Sample'
            });
        });
    });

    it('method 1', function() {
        fixture('function5', function(err, str) {
            var context = parse(str);
            expect(context).to.be.a(Object);
            expect(context).to.eql({
                type: 'method',
                name: 'test',
                string: 'proto.test()',
                receiver: 'proto'
            });
        });
    });

    it('prototype property 1', function() {
        fixture('property1', function(err, str) {
            var context = parse(str);
            expect(context).to.be.a(Object);
            expect(context).to.eql({
                type: 'property',
                name: 'test',
                string: 'Sample.prototype.test',
                cons: 'Sample',
                value: '\'test\''
            });
        });
    });

    it('property 1', function() {
        fixture('property2', function(err, str) {
            var context = parse(str);
            expect(context).to.be.a(Object);
            expect(context).to.eql({
                type: 'property',
                name: 'test',
                string: 'proto.test',
                receiver: 'proto',
                value: '\'test\''
            });
        });
    });

    it('declaration 1', function() {
        fixture('declaration1', function(err, str) {
            var context = parse(str);
            expect(context).to.be.a(Object);
            expect(context).to.eql({
                type: 'declaration',
                name: 'TEST',
                string: 'TEST',
                value: '123'
            });
        });
    });
});
