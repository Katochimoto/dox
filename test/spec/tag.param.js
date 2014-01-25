if (typeof require == 'function') {
    /*jshint -W020 */
    dox = require('../../');
    /*jshint -W020 */
    expect = require('expect.js');
}

describe('dox.parseTag() @param', function() {

    it('param empty type and name', function() {
        var tag = dox.parseTag('@param    ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('param');
    });

    it('param empty type and name', function() {
        var tag = dox.parseTag('@param');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('param');
    });

    it('param empty type and name', function() {
        var tag = dox.parseTag('@param  \n\n  \n');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('param');
    });

    it('param empty type', function() {
        var tag = dox.parseTag('@param    test   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
    });

    it('param empty type', function() {
        var tag = dox.parseTag('@param    test \n\n   \n  ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
    });

    it('param empty type by description', function() {
        var tag = dox.parseTag('@param test text description');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'description');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.description).to.be('text description');
    });

    it('param empty type by description', function() {
        var tag = dox.parseTag('@param    test text description\n\n   \n  ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'description');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.description).to.be('text description');
    });

    it('optional param empty type', function() {
        var tag = dox.parseTag('@param [test]');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'optional');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.optional).to.be.ok();
    });

    it('optional param empty type by description', function() {
        var tag = dox.parseTag('@param [test] text description');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'optional', 'description');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.optional).to.be.ok();
        expect(tag.description).to.be('text description');
    });

    it('optional param empty type', function() {
        var tag = dox.parseTag('@param    [test]     \n\n   \n   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'optional');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.optional).to.be.ok();
    });

    it('optional param empty type by description', function() {
        var tag = dox.parseTag('@param    [test]     text description     \n\n   \n   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'optional', 'description');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.optional).to.be.ok();
        expect(tag.description).to.be('text description');
    });

    it('optional param empty type default value', function() {
        var tag = dox.parseTag('@param [test=qwe asd]');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'optional', 'default');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.default).to.be('qwe asd');
        expect(tag.optional).to.be.ok();
    });

    it('optional param empty type by description default value', function() {
        var tag = dox.parseTag('@param [test=qwe asd] text description');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'optional', 'description', 'default');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.default).to.be('qwe asd');
        expect(tag.optional).to.be.ok();
        expect(tag.description).to.be('text description');
    });

    it('optional param empty type default value', function() {
        var tag = dox.parseTag('@param    [test=qwe asd]     \n\n   \n   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'optional', 'default');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.default).to.be('qwe asd');
        expect(tag.optional).to.be.ok();
    });

    it('optional param empty type by description default value', function() {
        var tag = dox.parseTag('@param    [test=qwe asd]     text description     \n\n   \n   ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type', 'name', 'optional', 'description', 'default');
        expect(tag.type).to.be('param');
        expect(tag.name).to.be('test');
        expect(tag.default).to.be('qwe asd');
        expect(tag.optional).to.be.ok();
        expect(tag.description).to.be('text description');
    });
});
