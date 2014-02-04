describe('parse.tag @abstract', function() {
    /*jshint -W020 */
    var parse = require('../../lib/parse.tag').parse;
    /*jshint -W020 */
    var expect = require('expect.js');

    it('abstract empty text', function() {
        var tag = parse('@abstract');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('abstract');
    });

    it('abstract empty text', function() {
        var tag = parse('@abstract   \n\n   \n ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('abstract');
    });

    it('abstract empty text', function() {
        var tag = parse('@abstract  sfsdfsdf \n\n   \n ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('abstract');
    });
});
