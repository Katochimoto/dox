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
        return cmpSN("overview", selectNametest('type', c0, []));
    }

    var j6 = [ 0, 'tags', 2, p2, 0, 'description' ];

    function p3(m, c0, i0, l0) {
        return cmpSN("fileoverview", selectNametest('type', c0, []));
    }

    var j7 = [ 0, 'tags', 2, p3, 0, 'description' ];

    function p4(m, c0, i0, l0) {
        return cmpSN("file", selectNametest('type', c0, []));
    }

    var j8 = [ 0, 'tags', 2, p4, 0, 'description' ];

    function p5(m, c0, i0, l0) {
        return cmpSN("desc", selectNametest('type', c0, []));
    }

    var j9 = [ 0, 'tags', 2, p5 ];

    function p6(m, c0, i0, l0) {
        return cmpSN("description", selectNametest('type', c0, []));
    }

    var j10 = [ 0, 'tags', 2, p6 ];

    var j11 = [ 0, 'description', 0, 'full' ];

    function p7(m, c0, i0, l0) {
        return cmpSN("version", selectNametest('type', c0, []));
    }

    var j12 = [ 0, 'tags', 2, p7 ];

    function p8(m, c0, i0, l0) {
        return cmpSN("author", selectNametest('type', c0, []));
    }

    var j13 = [ 0, 'tags', 2, p8 ];

    function p9(m, c0, i0, l0) {
        return cmpSN("copyright", selectNametest('type', c0, []));
    }

    var j14 = [ 0, 'tags', 2, p9 ];

    var j15 = [ 0, 'ctx', 0, 'type' ];

    function p10(m, c0, i0, l0) {
        return cmpSN("method", m.s(j3, c0)) || cmpSN("function", m.s(j3, c0)) || cmpSN("func", m.s(j3, c0)) || cmpSN("callback", m.s(j3, c0)) || cmpSN("constructs", m.s(j3, c0)) || cmpSN("method", m.s(j15, c0)) || cmpSN("function", m.s(j15, c0));
    }

    var j16 = [ 0, 'comments', 2, p10 ];

    function p11(m, c0, i0, l0) {
        return cmpSN("method", selectNametest('type', c0, []));
    }

    var j17 = [ 0, 'ctx', 2, p11, 0, 'receiver' ];

    var j18 = [ 0, 'ctx', 2, p11, 0, 'cons' ];

    function p12(m, c0, i0, l0) {
        return cmpSN("static", selectNametest('type', c0, []));
    }

    var j19 = [ 0, 'tags', 2, p12 ];

    var j20 = [ 0, 'ctx', 2, p11, 0, 'name' ];

    function p13(m, c0, i0, l0) {
        return cmpSN("function", selectNametest('type', c0, []));
    }

    var j21 = [ 0, 'ctx', 2, p13, 0, 'name' ];

    function p14(m, c0, i0, l0) {
        return cmpSN("name", selectNametest('type', c0, []));
    }

    var j22 = [ 0, 'tags', 2, p14, 0, 'name' ];

    var j23 = [ 1, 0 ];

    function p15(m, c0, i0, l0) {
        return cmpSN("class", m.s(j3, c0)) || cmpSN("classdesc", m.s(j3, c0)) || cmpSN("constructor", m.s(j3, c0)) || cmpSN("namespace", m.s(j3, c0)) || cmpSN("mixin", m.s(j3, c0)) || cmpSN("lends", m.s(j3, c0));
    }

    var j24 = [ 0, 'comments', 2, p15 ];

    function p16(m, c0, i0, l0) {
        return cmpSN("constructor", selectNametest('type', c0, []));
    }

    var j25 = [ 0, 'tags', 2, p16, 0, 'name' ];

    function p17(m, c0, i0, l0) {
        return cmpSN("namespace", selectNametest('type', c0, []));
    }

    var j26 = [ 0, 'tags', 2, p17, 0, 'name' ];

    function p18(m, c0, i0, l0) {
        return cmpSN("mixin", selectNametest('type', c0, []));
    }

    var j27 = [ 0, 'tags', 2, p18, 0, 'name' ];

    function p19(m, c0, i0, l0) {
        return cmpSN("class", selectNametest('type', c0, []));
    }

    var j28 = [ 0, 'tags', 2, p19, 0, 'name' ];

    function p20(m, c0, i0, l0) {
        return cmpSN("classdesc", selectNametest('type', c0, []));
    }

    var j29 = [ 0, 'tags', 2, p20 ];

    function p21(m, c0, i0, l0) {
        return cmpSN("module", m.s(j3, c0));
    }

    var j30 = [ 0, 'comments', 2, p21 ];

    function p22(m, c0, i0, l0) {
        return cmpSN("module", selectNametest('type', c0, []));
    }

    var j31 = [ 0, 'tags', 2, p22, 0, 'name' ];

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

        //  var name : scalar
        var r1 = '';
        var a1 = { a: {} };
        r1 += " ";
        if (nodeset2boolean( (m.s(j8, c0)) )) {
            r1 += nodeset2scalar( m.s(j8, c0) );
        } else if (nodeset2boolean( (m.s(j6, c0)) )) {
            r1 += nodeset2scalar( m.s(j6, c0) );
        } else if (nodeset2boolean( (m.s(j7, c0)) )) {
            r1 += nodeset2scalar( m.s(j7, c0) );
        } else {
            r1 += "Undefined";
        }
        var v0 = r1;

        //  var description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j9, c0), 'item-tag', a1)
        r1 += closeAttrs(a1);
        r1 += "\n\n";
        r1 += m.a(m, m.s(j10, c0), 'item-tag', a1)
        r1 += "\n\n";
        r1 += nodeset2xml( m.s(j11, c0) );
        var v1 = r1;

        r0 += closeAttrs(a0);
        r0 += "#";
        r0 += scalar2xml( v0 );
        r0 += m.a(m, m.s(j12, c0), 'item-tag', a0)
        r0 += "\n\n";
        r0 += m.a(m, m.s(j13, c0), 'item-tag', a0)
        r0 += "\n\n";
        r0 += m.a(m, m.s(j14, c0), 'item-tag', a0)
        r0 += "\n\n";
        r0 += scalar2xml( (yr.externals['mdox-string-trim'])(xml2scalar( v1 )) );
        r0 += "\n\n";

        return r0;
    };
    M.t1.j = j4;
    M.t1.a = 0;

    // match .comments[ .tags.type == "method" || .tags.type == "function" || .tags.type == "func" || .tags.type == "callback" || .tags.type == "constructs" || .ctx.type == "method" || .ctx.type == "function" ] : item-comment
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var context : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j18, c0)) )) {
            r1 += nodeset2scalar( m.s(j18, c0) );
        } else if (nodeset2boolean( (m.s(j17, c0)) )) {
            r1 += nodeset2scalar( m.s(j17, c0) );
        } else {
            r1 += "";
        }
        var v2 = r1;

        //  var contextSep : scalar
        var r1 = '';
        var a1 = { a: {} };
        if ((!(yr.externals['mdox-string-empty'])(v2))) {
            r1 += " *";
            r1 += v2;
            if (nodeset2boolean( (m.s(j19, c0)) )) {
                r1 += ":";
            } else {
                r1 += ".";
            }
            r1 += "*";
        } else {
            r1 += "";
        }
        var v3 = r1;

        //  var name : scalar
        var r1 = '';
        var a1 = { a: {} };
        r1 += " **";
        if (nodeset2boolean( (m.s(j22, c0)) )) {
            r1 += nodeset2scalar( m.s(j22, c0) );
        } else if (nodeset2boolean( (m.s(j20, c0)) )) {
            r1 += nodeset2scalar( m.s(j20, c0) );
        } else if (nodeset2boolean( (m.s(j21, c0)) )) {
            r1 += nodeset2scalar( m.s(j21, c0) );
        }
        r1 += "**";
        var v4 = r1;

        //  var returnTypes : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j23, c0), 'mdox-tag-types', a1, "return")
        r1 += m.a(m, m.s(j23, c0), 'mdox-tag-types', a1, "returns")
        var v5 = r1;

        //  var description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j9, c0), 'item-tag', a1)
        r1 += closeAttrs(a1);
        r1 += "\n\n";
        r1 += m.a(m, m.s(j10, c0), 'item-tag', a1)
        r1 += "\n\n";
        r1 += nodeset2xml( m.s(j11, c0) );
        var v6 = r1;

        r0 += closeAttrs(a0);
        r0 += "####";
        r0 += scalar2xml( v3 );
        r0 += scalar2xml( v4 );
        r0 += " (";
        r0 += ")";
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v5 )))) {
            r0 += " `";
            r0 += v5;
            r0 += "`";
        }
        r0 += "\n\n";
        r0 += scalar2xml( (yr.externals['mdox-string-trim'])(xml2scalar( v6 )) );
        r0 += "\n\n";

        return r0;
    };
    M.t2.j = j16;
    M.t2.a = 0;

    // match .comments[ .tags.type == "class" || .tags.type == "classdesc" || .tags.type == "constructor" || .tags.type == "namespace" || .tags.type == "mixin" || .tags.type == "lends" ] : item-comment
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var name : scalar
        var r1 = '';
        var a1 = { a: {} };
        r1 += " *";
        if (nodeset2boolean( (m.s(j28, c0)) )) {
            r1 += nodeset2scalar( m.s(j28, c0) );
        } else if (nodeset2boolean( (m.s(j25, c0)) )) {
            r1 += nodeset2scalar( m.s(j25, c0) );
        } else if (nodeset2boolean( (m.s(j26, c0)) )) {
            r1 += nodeset2scalar( m.s(j26, c0) );
        } else if (nodeset2boolean( (m.s(j27, c0)) )) {
            r1 += nodeset2scalar( m.s(j27, c0) );
        } else if (nodeset2boolean( (m.s(j21, c0)) )) {
            r1 += nodeset2scalar( m.s(j21, c0) );
        } else {
            r1 += "Undefined";
        }
        r1 += "*";
        var v7 = r1;

        //  var types : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j23, c0), 'mdox-tag-types', a1, "class")
        r1 += m.a(m, m.s(j23, c0), 'mdox-tag-types', a1, "constructor")
        r1 += m.a(m, m.s(j23, c0), 'mdox-tag-types', a1, "namespace")
        var v8 = r1;

        //  var description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j29, c0), 'item-tag', a1)
        r1 += closeAttrs(a1);
        r1 += "\n\n";
        r1 += m.a(m, m.s(j9, c0), 'item-tag', a1)
        r1 += "\n\n";
        r1 += m.a(m, m.s(j10, c0), 'item-tag', a1)
        r1 += "\n\n";
        r1 += nodeset2xml( m.s(j11, c0) );
        var v9 = r1;

        r0 += closeAttrs(a0);
        r0 += "###";
        r0 += scalar2xml( v7 );
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v8 )))) {
            r0 += " `";
            r0 += v8;
            r0 += "`";
        }
        r0 += "\n\n";
        r0 += scalar2xml( (yr.externals['mdox-string-trim'])(xml2scalar( v9 )) );
        r0 += "\n\n";

        return r0;
    };
    M.t3.j = j24;
    M.t3.a = 0;

    // match .comments[ .tags.type == "module" ] : item-comment
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var types : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j23, c0), 'mdox-tag-types', a1, "module")
        var v10 = r1;

        //  var name : scalar
        var r1 = '';
        var a1 = { a: {} };
        r1 += " ";
        r1 += nodeset2scalar( m.s(j31, c0) );
        var v11 = r1;

        //  var description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j9, c0), 'item-tag', a1)
        r1 += closeAttrs(a1);
        r1 += "\n\n";
        r1 += m.a(m, m.s(j10, c0), 'item-tag', a1)
        r1 += "\n\n";
        r1 += nodeset2xml( m.s(j11, c0) );
        var v12 = r1;

        r0 += closeAttrs(a0);
        r0 += "##";
        r0 += scalar2xml( v11 );
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v10 )))) {
            r0 += " `";
            r0 += v10;
            r0 += "`";
        }
        r0 += "\n\n";
        r0 += scalar2xml( (yr.externals['mdox-string-trim'])(xml2scalar( v12 )) );
        r0 += "\n\n";

        return r0;
    };
    M.t4.j = j30;
    M.t4.a = 0;

    M.matcher = {
        "": {
            "": [
                "t0"
            ]
        },
        "item-comment": {
            "comments": [
                "t4",
                "t3",
                "t2",
                "t1"
            ]
        }
    };
    M.imports = ["mdox"];

    yr.register('default', M);

})();
