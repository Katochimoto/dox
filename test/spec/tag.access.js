describe('parse.tag @access', function() {
    /*jshint -W020 */
    var parse = require('../../lib/parse.tag').parse;
    /*jshint -W020 */
    var expect = require('expect.js');

    it('access empty text', function() {
        var tag = parse('@access');
        expect(tag).to.be.a(Object);
        expect(tag).to.eql({});
    });

    it('access empty text', function() {
        var tag = parse('@access   \n\n   \n ');
        expect(tag).to.be.a(Object);
        expect(tag).to.eql({});
    });

    it('access empty text', function() {
        var tag = parse('@access  sfsdfsdf \n\n   \n ');
        expect(tag).to.be.a(Object);
        expect(tag).to.eql({});
    });

    it('access public', function() {
        var tag = parse('@access public');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('public');
    });

    it('access protected', function() {
        var tag = parse('@access protected');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('protected');
    });

    it('access private', function() {
        var tag = parse('@access private');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('private');
    });
});