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

    var j0 = [ ];

    var j1 = [ 0, 'ignore' ];

    function p0(m, c0, i0, l0) {
        return !nodeset2boolean( (selectNametest('ignore', c0, [])) );
    }

    var j2 = [ 0, 'comments', 2, p0 ];

    var j3 = [ 0, 'tags', 0, 'type' ];

    function p1(m, c0, i0, l0) {
        return cmpSN("file", m.s(j3, c0)) || cmpSN("overview", m.s(j3, c0)) || cmpSN("fileoverview", m.s(j3, c0));
    }

    var j4 = [ 0, 'comments', 2, p1 ];

    var j5 = [ 0, 'type' ];

    function p2(m, c0, i0, l0) {
        return cmpSN("file", selectNametest('type', c0, [])) || cmpSN("overview", selectNametest('type', c0, [])) || cmpSN("fileoverview", selectNametest('type', c0, []));
    }

    var j6 = [ 0, 'tags', 2, p2 ];

    function p3(m, c0, i0, l0) {
        return cmpSN("version", selectNametest('type', c0, []));
    }

    var j7 = [ 0, 'tags', 2, p3 ];

    function p4(m, c0, i0, l0) {
        return cmpSN("author", selectNametest('type', c0, []));
    }

    var j8 = [ 0, 'tags', 2, p4 ];

    function p5(m, c0, i0, l0) {
        return cmpSN("copyright", selectNametest('type', c0, []));
    }

    var j9 = [ 0, 'tags', 2, p5 ];

    function p6(m, c0, i0, l0) {
        return cmpSN("description", selectNametest('type', c0, []));
    }

    var j10 = [ 0, 'tags', 2, p6 ];

    var j11 = [ 0, 'description', 0, 'full' ];

    function p7(m, c0, i0, l0) {
        return cmpSN("file", selectNametest('type', c0, [])) || cmpSN("overview", selectNametest('type', c0, [])) || cmpSN("fileoverview", selectNametest('type', c0, [])) || cmpSN("description", selectNametest('type', c0, []));
    }

    var j12 = [ 0, 'tags', 2, p7 ];

    var j13 = [ 0, 'description' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, m.s(j2, c0), 'item-comment', a0)

        return r0;
    };
    M.t0.j = 1;
    M.t0.a = 1;

    // match .comments[ .tags.type == "file" || .tags.type == "overview" || .tags.type == "fileoverview" ] : item-comment
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "##";
        r0 += m.a(m, m.s(j6, c0), 'item-tag', a0)
        r0 += m.a(m, m.s(j7, c0), 'item-tag', a0)
        r0 += "\n\n";
        r0 += m.a(m, m.s(j8, c0), 'item-tag', a0)
        r0 += "\n\n";
        r0 += m.a(m, m.s(j9, c0), 'item-tag', a0)
        r0 += "\n\n";
        r0 += m.a(m, m.s(j10, c0), 'item-tag', a0)
        r0 += "\n\n";
        r0 += nodeset2xml( m.s(j11, c0) );

        return r0;
    };
    M.t1.j = j4;
    M.t1.a = 0;

    // match .tags[ .type == "file" || .type == "overview" || .type == "fileoverview" || .type == "description" ] : item-tag
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += " ";
        r0 += nodeset2xml( selectNametest('description', c0, []) );

        return r0;
    };
    M.t2.j = j12;
    M.t2.a = 0;

    // match .tags[ .type == "version" ] : item-tag
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += " ";
        r0 += "`";
        r0 += nodeset2xml( selectNametest('description', c0, []) );
        r0 += "`";

        return r0;
    };
    M.t3.j = j7;
    M.t3.a = 0;

    // match .tags[ .type == "copyright" ] : item-tag
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "© ";
        r0 += nodeset2xml( selectNametest('description', c0, []) );

        return r0;
    };
    M.t4.j = j9;
    M.t4.a = 0;

    // match .tags[ .type == "author" ] : item-tag
    M.t5 = function t5(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "*Author*: ";
        r0 += nodeset2xml( selectNametest('description', c0, []) );

        return r0;
    };
    M.t5.j = j8;
    M.t5.a = 0;

    M.matcher = {
        "": {
            "": [
                "t0"
            ]
        },
        "item-comment": {
            "comments": [
                "t1"
            ]
        },
        "item-tag": {
            "tags": [
                "t5",
                "t4",
                "t3",
                "t2"
            ]
        }
    };
    M.imports = [];

    yr.register('main', M);

})();
