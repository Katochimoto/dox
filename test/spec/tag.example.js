describe('parse.tag @example', function() {
    /*jshint -W020 */
    var parse = require('../../lib/parse.tag').parse;
    /*jshint -W020 */
    var expect = require('expect.js');

    it('example empty text', function() {
        var tag = parse('@example    ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('example');
    });

    it('example empty multiline text', function() {
        var tag = parse('@example   \n   \n\n\n   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('example');
    });

    it('example empty text and inline caption', function() {
        var tag = parse('@example test inline caption');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'description');
        expect(tag.type).to.be('example');
        expect(tag.description).to.be('test inline caption');
    });

    it('example empty multiline text and inline caption', function() {
        var tag = parse('@example test inline caption\n   \n\n\n   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'description');
        expect(tag.type).to.be('example');
        expect(tag.description).to.be('test inline caption');
    });

    it('example empty text and caption', function() {
        var tag = parse('@example    <caption>   test caption   </caption>   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'title');
        expect(tag.type).to.be('example');
        expect(tag.title).to.be('test caption');
    });

    it('example empty multiline text and caption', function() {
        var tag = parse('@example    <caption>   test caption   </caption>   \n   \n\n\n   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'title');
        expect(tag.type).to.be('example');
        expect(tag.title).to.be('test caption');
    });

    it('example text and empty caption', function() {
        var tag = parse('@example  \n   test example   \n\n');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'description');
        expect(tag.type).to.be('example');
        expect(tag.description).to.be('test example');
    });

    it('example multiline text and empty caption', function() {
        var tag = parse('@example  \n   test example   \n\nnext line\n\n');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'description');
        expect(tag.type).to.be('example');
        expect(tag.description).to.be('test example\n\nnext line');
    });

    it('example text and caption', function() {
        var tag = parse('@example    <caption>   test caption   </caption>    \n   test example   \n\n');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'description', 'title');
        expect(tag.type).to.be('example');
        expect(tag.description).to.be('test example');
        expect(tag.title).to.be('test caption');
    });

    it('example multiline text and caption', function() {
        var tag = parse('@example    <caption>   test caption   </caption>    \n   test example   \n\nnext line\n\n');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'description', 'title');
        expect(tag.type).to.be('example');
        expect(tag.description).to.be('test example\n\nnext line');
        expect(tag.title).to.be('test caption');
    });
});