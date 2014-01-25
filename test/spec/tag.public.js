if (typeof require == 'function') {
    /*jshint -W020 */
    dox = require('../../');
    /*jshint -W020 */
    expect = require('expect.js');
}

describe('dox.parseTag() @public', function() {
    it('public empty text', function() {
        var tag = dox.parseTag('@public');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('public');
    });

    it('public empty text', function() {
        var tag = dox.parseTag('@public   \n\n  \n\n ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('public');
    });

    it('public empty text', function() {
        var tag = dox.parseTag('@public sdfsdfsdf \n\n  \n  ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('public');
    });

});