if (typeof require == 'function') {
    /*jshint -W020 */
    dox = require('../../');
    /*jshint -W020 */
    expect = require('expect.js');
}

describe('dox.parseTag() @private', function() {
    it('private empty text', function() {
        var tag = dox.parseTag('@private');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('private');
    });

    it('private empty text', function() {
        var tag = dox.parseTag('@private   \n\n  \n\n ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('private');
    });

    it('private empty text', function() {
        var tag = dox.parseTag('@private sdfsdfsdf \n\n  \n  ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('private');
    });

});