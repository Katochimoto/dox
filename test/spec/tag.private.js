describe('parse.tag @private', function() {
    /*jshint -W020 */
    var parse = require('../../lib/parse.tag').parse;
    /*jshint -W020 */
    var expect = require('expect.js');

    it('private empty text', function() {
        var tag = parse('@private');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('private');
    });

    it('private empty text', function() {
        var tag = parse('@private   \n\n  \n\n ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('private');
    });

    it('private empty text', function() {
        var tag = parse('@private sdfsdfsdf \n\n  \n  ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'level');
        expect(tag.type).to.be('access');
        expect(tag.level).to.be('private');
    });

});