describe('parse.context', function() {
    /* global __dirname */

    var parse = require('../../lib/parse.context').parse;
    var expect = require('expect.js');
    var fs = require('fs');

    function fixture(name, fn) {
        fs.readFile(__dirname + '/parse.context/' + name + '.txt', 'utf8', fn);
    }

    it('empty context', function() {
        fixture('empty', function(err, str) {
            var context = parse(str);
            expect(context).to.be.a(Object);
            expect(context).to.eql({});
        });
    });
});
