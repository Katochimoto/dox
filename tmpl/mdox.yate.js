var yr = yr || require('yate/lib/runtime.js');

(function() {

    var cmpNN = yr.cmpNN;
    var cmpSN = yr.cmpSN;
    var nodeset2xml = yr.nodeset2xml;
    var nodeset2boolean = yr.nodeset2boolean;
    var nodeset2attrvalue = yr.nodeset2attrvalue;
    var nodeset2scalar = yr.nodeset2scalar;
    var scalar2attrvalue = yr.scalar2attrvalue;
    var xml2attrvalue = yr.xml2attrvalue;
    var scalar2xml = yr.scalar2xml;
    var xml2scalar = yr.xml2scalar;
    var simpleScalar = yr.simpleScalar;
    var simpleBoolean = yr.simpleBoolean;
    var selectNametest = yr.selectNametest;
    var closeAttrs = yr.closeAttrs;

    var M = new yr.Module();

    var j0 = [ 0, '*' ];

    var j1 = [ 0, 'type' ];

    var j3 = [ 0, 'types' ];

    var j4 = [ 1, 0 ];

    function p1(m, c0, i0, l0) {
        return cmpSN("classdesc", selectNametest('type', c0, [])) || cmpSN("description", selectNametest('type', c0, [])) || cmpSN("desc", selectNametest('type', c0, [])) || cmpSN("file", selectNametest('type', c0, [])) || cmpSN("overview", selectNametest('type', c0, [])) || cmpSN("fileoverview", selectNametest('type', c0, []));
    }

    var j5 = [ 0, 'tags', 2, p1 ];

    var j6 = [ 0, 'description' ];

    function p2(m, c0, i0, l0) {
        return cmpSN("module", selectNametest('type', c0, []));
    }

    var j7 = [ 0, 'tags', 2, p2 ];

    var j8 = [ 0, 'name' ];

    function p3(m, c0, i0, l0) {
        return cmpSN("version", selectNametest('type', c0, []));
    }

    var j9 = [ 0, 'tags', 2, p3 ];

    function p4(m, c0, i0, l0) {
        return cmpSN("copyright", selectNametest('type', c0, []));
    }

    var j10 = [ 0, 'tags', 2, p4 ];

    function p5(m, c0, i0, l0) {
        return cmpSN("author", selectNametest('type', c0, []));
    }

    var j11 = [ 0, 'tags', 2, p5 ];

    // match .* : mdox-tag-types
    M.t0 = function t0(m, c0, i0, l0, a0, v0) {
        var r0 = '';

        function p0(m, c0, i0, l0) {
            return (yr.externals['mdox-array-inarray'])(simpleScalar('type', c0), v0);
        }

        var j2 = [ 0, 'tags', 2, p0 ];

        r0 += m.a(m, m.s(j2, c0), 'mdox-tag-types-str', a0)

        return r0;
    };
    M.t0.j = j0;
    M.t0.a = 0;

    // match .* : mdox-tag-types-str
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var str : scalar
        var r1 = '';
        var a1 = { a: {} };
        var items0 = (selectNametest('types', c0, []));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += "|";
            }
            r1 += nodeset2scalar( m.s(j4, c1) );
        }
        var v1 = r1;

        r0 += closeAttrs(a0);
        if ((!(yr.externals['mdox-string-empty'])(v1))) {
            r0 += "`";
            r0 += scalar2xml( v1 );
            r0 += "`";
        }

        return r0;
    };
    M.t1.j = j0;
    M.t1.a = 0;

    // match .tags[ .type == "classdesc" || .type == "description" || .type == "desc" || .type == "file" || .type == "overview" || .type == "fileoverview" ] : item-tag
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('description', c0, []) );

        return r0;
    };
    M.t2.j = j5;
    M.t2.a = 0;

    // match .tags[ .type == "module" ] : item-tag
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('name', c0, []) );

        return r0;
    };
    M.t3.j = j7;
    M.t3.a = 0;

    // match .tags[ .type == "version" ] : item-tag
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += " ";
        r0 += "`";
        r0 += nodeset2xml( selectNametest('description', c0, []) );
        r0 += "`";

        return r0;
    };
    M.t4.j = j9;
    M.t4.a = 0;

    // match .tags[ .type == "copyright" ] : item-tag
    M.t5 = function t5(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "© ";
        r0 += nodeset2xml( selectNametest('description', c0, []) );

        return r0;
    };
    M.t5.j = j10;
    M.t5.a = 0;

    // match .tags[ .type == "author" ] : item-tag
    M.t6 = function t6(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "*Author*: ";
        r0 += nodeset2xml( selectNametest('description', c0, []) );

        return r0;
    };
    M.t6.j = j11;
    M.t6.a = 0;

    M.matcher = {
        "mdox-tag-types": {
            "*": [
                "t0"
            ]
        },
        "mdox-tag-types-str": {
            "*": [
                "t1"
            ]
        },
        "item-tag": {
            "tags": [
                "t6",
                "t5",
                "t4",
                "t3",
                "t2"
            ]
        }
    };
    M.imports = [];

    yr.register('mdox', M);

})();
