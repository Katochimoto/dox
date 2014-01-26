describe('parse.tag @protected', function() {
    /*jshint -W020 */
    var parse = require('../../lib/parse.tag').parse;
    /*jshint -W020 */
    var expect = require('expect.js');

    it('protected empty text', function() {
        var tag = parse('@protected');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('protected');
    });

    it('protected empty text', function() {
        var tag = parse('@protected   \n\n  \n\n ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('protected');
    });

    it('protected empty text', function() {
        var tag = parse('@protected sdfsdfsdf \n\n  \n  ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('protected');
    });

});