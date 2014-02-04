describe('parse.tag @access', function() {
    /*jshint -W020 */
    var parse = require('../../lib/parse.tag').parse;
    /*jshint -W020 */
    var expect = require('expect.js');

    it('access empty text', function() {
        expect(function() {
            parse('@access');
        }).to.throwError();
    });

    it('access empty text', function() {
        expect(function() {
            parse('@access   \n\n   \n ');
        }).to.throwError();
    });

    it('access empty text', function() {
        expect(function() {
            parse('@access  sfsdfsdf \n\n   \n ');
        }).to.throwError();
    });

    it('access public', function() {
        var tag = parse('@access public');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'access');
        expect(tag.type).to.be('access');
        expect(tag.access).to.be('public');
    });

    it('access protected', function() {
        var tag = parse('@access protected');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'access');
        expect(tag.type).to.be('access');
        expect(tag.access).to.be('protected');
    });

    it('access private', function() {
        var tag = parse('@access private');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'access');
        expect(tag.type).to.be('access');
        expect(tag.access).to.be('private');
    });
});
