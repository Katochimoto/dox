if (typeof require == 'function') {
    /*jshint -W020 */
    dox = require('../../');
    /*jshint -W020 */
    expect = require('expect.js');
}

describe('dox.parseTag() @access', function() {
    it('access empty text', function() {
        var tag = dox.parseTag('@access');
        expect(tag).to.be.a(Object);
        expect(tag).to.eql({});
    });

    it('access empty text', function() {
        var tag = dox.parseTag('@access   \n\n   \n ');
        expect(tag).to.be.a(Object);
        expect(tag).to.eql({});
    });

    it('access empty text', function() {
        var tag = dox.parseTag('@access  sfsdfsdf \n\n   \n ');
        expect(tag).to.be.a(Object);
        expect(tag).to.eql({});
    });

    it('access public', function() {
        var tag = dox.parseTag('@access public');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('public');
    });

    it('access protected', function() {
        var tag = dox.parseTag('@access protected');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('protected');
    });

    it('access private', function() {
        var tag = dox.parseTag('@access private');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('private');
    });
});