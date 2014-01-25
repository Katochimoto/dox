if (typeof require == 'function') {
    /*jshint -W020 */
    dox = require('../../');
    /*jshint -W020 */
    expect = require('expect.js');
}

describe('dox.parseTag() @abstract', function() {
    it('abstract empty text', function() {
        var tag = dox.parseTag('@abstract');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('abstract');
    });

    it('abstract empty text', function() {
        var tag = dox.parseTag('@abstract   \n\n   \n ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('abstract');
    });

    it('abstract empty text', function() {
        var tag = dox.parseTag('@abstract  sfsdfsdf \n\n   \n ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('abstract');
    });
});