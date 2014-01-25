if (typeof require == 'function') {
    /*jshint -W020 */
    dox = require('../../');
    /*jshint -W020 */
    expect = require('expect.js');
}

describe('dox.parseTag() @protected', function() {
    it('protected empty text', function() {
        var tag = dox.parseTag('@protected');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('protected');
    });

    it('protected empty text', function() {
        var tag = dox.parseTag('@protected   \n\n  \n\n ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('protected');
    });

    it('protected empty text', function() {
        var tag = dox.parseTag('@protected sdfsdfsdf \n\n  \n  ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('protected');
    });

});