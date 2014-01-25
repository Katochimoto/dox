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
});