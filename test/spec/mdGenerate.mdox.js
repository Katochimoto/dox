describe('mdGenerate.mdox', function() {
    /* global __dirname */

    var mdGenerate = require('../../lib/mdox').mdGenerate;
    var expect = require('expect.js');
    var fs = require('fs');

    function fixture(name, fn) {
        var str = fs.readFileSync(__dirname + '/mdGenerate.mdox/' + name + '.txt', {
            encoding: 'utf8'
        });

        fn(null, str);
    }

    it('empty comments', function() {
        fixture('sample1', function(err, str) {
            var comments = mdGenerate(str);

            //console.log("'%s'", comments);

        });
    });
});
