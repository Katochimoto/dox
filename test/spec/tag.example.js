if (typeof require == 'function') {
    /*jshint -W020 */
    dox = require('../../');
    /*jshint -W020 */
    expect = require('expect.js');
}

describe('dox.parseTag() @example', function() {
    it('example empty text', function() {
        var tag = dox.parseTag('@example    ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'string');
        expect(tag.type).to.be('example');
        expect(tag.string).to.be('');
    });

    it('example empty multiline text', function() {
        var tag = dox.parseTag('@example   \n   \n\n\n   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'string');
        expect(tag.type).to.be('example');
        expect(tag.string).to.be('');
    });

    it('example empty text and error caption', function() {
        var tag = dox.parseTag('@example test error caption');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'string');
        expect(tag.type).to.be('example');
        expect(tag.string).to.be('');
    });

    it('example empty multiline text and error caption', function() {
        var tag = dox.parseTag('@example test error caption\n   \n\n\n   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'string');
        expect(tag.type).to.be('example');
        expect(tag.string).to.be('');
    });

    it('example empty text and caption', function() {
        var tag = dox.parseTag('@example    <caption>   test caption   </caption>   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'string', 'title');
        expect(tag.type).to.be('example');
        expect(tag.string).to.be('');
        expect(tag.title).to.be('test caption');
    });

    it('example empty multiline text and caption', function() {
        var tag = dox.parseTag('@example    <caption>   test caption   </caption>   \n   \n\n\n   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'string', 'title');
        expect(tag.type).to.be('example');
        expect(tag.string).to.be('');
        expect(tag.title).to.be('test caption');
    });

    it('example text and empty caption', function() {
        var tag = dox.parseTag('@example  \n   test example   \n\n');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'string');
        expect(tag.type).to.be('example');
        expect(tag.string).to.be('test example');
    });

    it('example multiline text and empty caption', function() {
        var tag = dox.parseTag('@example  \n   test example   \n\nnext line\n\n');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'string');
        expect(tag.type).to.be('example');
        expect(tag.string).to.be('test example\n\nnext line');
    });

    it('example text and caption', function() {
        var tag = dox.parseTag('@example    <caption>   test caption   </caption>    \n   test example   \n\n');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'string', 'title');
        expect(tag.type).to.be('example');
        expect(tag.string).to.be('test example');
        expect(tag.title).to.be('test caption');
    });

    it('example multiline text and caption', function() {
        var tag = dox.parseTag('@example    <caption>   test caption   </caption>    \n   test example   \n\nnext line\n\n');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'string', 'title');
        expect(tag.type).to.be('example');
        expect(tag.string).to.be('test example\n\nnext line');
        expect(tag.title).to.be('test caption');
    });
});