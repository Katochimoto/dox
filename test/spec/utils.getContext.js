describe('utils.getContext', function() {
    /*jshint -W020 */
    var getContext = require('../../lib/utils').getContext;
    /*jshint -W020 */
    var parse = require('../../lib/parse.comment').parse;
    /*jshint -W020 */
    var expect = require('expect.js');

    var fs = require('fs');

    function fixture(name, fn) {
        var str = fs.readFileSync(__dirname + '/utils.getContext/' + name + '.txt', {
            encoding: 'utf8'
        });

        fn(null, str);
    }

    it('empty comments', function() {
        fixture('context1', function(err, str) {
            var comment = parse(str);
            var context = getContext(comment);

            //console.log(comment);
            //console.log(context);

        });
    });

    /*it('public empty text', function() {
        var tag = parse('@public');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('public');
    });

    it('public empty text', function() {
        var tag = parse('@public   \n\n  \n\n ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('public');
    });

    it('public empty text', function() {
        var tag = parse('@public sdfsdfsdf \n\n  \n  ');
        expect(tag).to.be.a(Object);
        expect(tag).to.only.have.keys('type');
        expect(tag.type).to.be('public');
    });*/

});
