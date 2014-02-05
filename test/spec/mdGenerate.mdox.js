describe('mdGenerate.mdox', function() {
    /* global __dirname */

    var mdGenerate = require('../../lib/mdox').mdGenerate;
    var expect = require('expect.js');
    var fs = require('fs');

    function fixture(name, fn) {
        fs.readFile(__dirname + '/mdGenerate.mdox/' + name + '.txt', 'utf8', fn);
    }

    it('empty comments', function() {
        fixture('sample1', function(err, str) {
            var comments = mdGenerate(str);

            console.log("'%s'", comments);

        });
    });
});
