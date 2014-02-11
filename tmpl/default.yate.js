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

    var j2 = [ 0, 'tags', 0, 'type' ];

    function p0(m, c0, i0, l0) {
        return !nodeset2boolean( (selectNametest('ignore', c0, [])) ) && !(cmpSN("ignore", m.s(j2, c0))) && (cmpSN("file", m.s(j2, c0)) || cmpSN("overview", m.s(j2, c0)) || cmpSN("fileoverview", m.s(j2, c0)));
    }

    var j3 = [ 0, 'comments', 2, p0 ];

    function p1(m, c0, i0, l0) {
        return !nodeset2boolean( (selectNametest('ignore', c0, [])) ) && !(cmpSN("ignore", m.s(j2, c0))) && cmpSN("global", m.s(j2, c0));
    }

    var j4 = [ 0, 'comments', 2, p1 ];

    function p2(m, c0, i0, l0) {
        return !nodeset2boolean( (selectNametest('ignore', c0, [])) ) && !(cmpSN("ignore", m.s(j2, c0))) && !(cmpSN("global", m.s(j2, c0))) && !(cmpSN("file", m.s(j2, c0))) && !(cmpSN("overview", m.s(j2, c0))) && !(cmpSN("fileoverview", m.s(j2, c0)));
    }

    var j5 = [ 0, 'comments', 2, p2 ];

    function p3(m, c0, i0, l0) {
        return cmpSN("file", m.s(j2, c0)) || cmpSN("overview", m.s(j2, c0)) || cmpSN("fileoverview", m.s(j2, c0));
    }

    var j6 = [ 0, 'comments', 2, p3 ];

    var j7 = [ 0, 'type' ];

    function p4(m, c0, i0, l0) {
        return cmpSN("overview", selectNametest('type', c0, []));
    }

    var j8 = [ 0, 'tags', 2, p4, 0, 'description' ];

    function p5(m, c0, i0, l0) {
        return cmpSN("fileoverview", selectNametest('type', c0, []));
    }

    var j9 = [ 0, 'tags', 2, p5, 0, 'description' ];

    function p6(m, c0, i0, l0) {
        return cmpSN("file", selectNametest('type', c0, []));
    }

    var j10 = [ 0, 'tags', 2, p6, 0, 'description' ];

    function p7(m, c0, i0, l0) {
        return cmpSN("desc", selectNametest('type', c0, []));
    }

    var j11 = [ 0, 'tags', 2, p7 ];

    function p8(m, c0, i0, l0) {
        return cmpSN("description", selectNametest('type', c0, []));
    }

    var j12 = [ 0, 'tags', 2, p8 ];

    var j13 = [ 0, 'description', 0, 'full' ];

    function p9(m, c0, i0, l0) {
        return cmpSN("version", selectNametest('type', c0, []));
    }

    var j14 = [ 0, 'tags', 2, p9, 0, 'description' ];

    function p10(m, c0, i0, l0) {
        return cmpSN("author", selectNametest('type', c0, []));
    }

    var j15 = [ 0, 'tags', 2, p10, 0, 'description' ];

    function p11(m, c0, i0, l0) {
        return cmpSN("copyright", selectNametest('type', c0, []));
    }

    var j16 = [ 0, 'tags', 2, p11 ];

    var j17 = [ 0, 'ctx', 0, 'type' ];

    function p12(m, c0, i0, l0) {
        return cmpSN("constant", m.s(j2, c0)) || cmpSN("const", m.s(j2, c0)) || cmpSN("var", m.s(j2, c0)) || cmpSN("member", m.s(j2, c0)) || cmpSN("property", m.s(j17, c0)) || cmpSN("declaration", m.s(j17, c0));
    }

    var j18 = [ 0, 'comments', 2, p12 ];

    function p13(m, c0, i0, l0) {
        return cmpSN("memberOf", selectNametest('type', c0, []));
    }

    var j19 = [ 0, 'tags', 2, p13, 0, 'parent' ];

    function p14(m, c0, i0, l0) {
        return cmpSN("property", selectNametest('type', c0, []));
    }

    var j20 = [ 0, 'ctx', 2, p14, 0, 'cons' ];

    function p15(m, c0, i0, l0) {
        return cmpSN("declaration", selectNametest('type', c0, []));
    }

    var j21 = [ 0, 'ctx', 2, p15, 0, 'receiver' ];

    function p16(m, c0, i0, l0) {
        return cmpSN("memberof", selectNametest('type', c0, []));
    }

    var j22 = [ 0, 'tags', 2, p16, 0, 'parent' ];

    function p17(m, c0, i0, l0) {
        return cmpSN("static", selectNametest('type', c0, []));
    }

    var j23 = [ 0, 'tags', 2, p17 ];

    function p18(m, c0, i0, l0) {
        return cmpSN("const", selectNametest('type', c0, []));
    }

    var j24 = [ 0, 'tags', 2, p18, 0, 'name' ];

    function p19(m, c0, i0, l0) {
        return cmpSN("member", selectNametest('type', c0, []));
    }

    var j25 = [ 0, 'tags', 2, p19, 0, 'name' ];

    function p20(m, c0, i0, l0) {
        return cmpSN("var", selectNametest('type', c0, []));
    }

    var j26 = [ 0, 'tags', 2, p20, 0, 'name' ];

    var j27 = [ 0, 'ctx', 2, p14, 0, 'name' ];

    var j28 = [ 0, 'ctx', 2, p15, 0, 'name' ];

    function p21(m, c0, i0, l0) {
        return cmpSN("constant", selectNametest('type', c0, []));
    }

    var j29 = [ 0, 'tags', 2, p21, 0, 'name' ];

    function p22(m, c0, i0, l0) {
        return cmpSN("name", selectNametest('type', c0, []));
    }

    var j30 = [ 0, 'tags', 2, p22, 0, 'name' ];

    var j31 = [ 1, 0 ];

    function p23(m, c0, i0, l0) {
        return cmpSN("summary", selectNametest('type', c0, []));
    }

    var j32 = [ 0, 'tags', 2, p23 ];

    function p24(m, c0, i0, l0) {
        return cmpSN("private", selectNametest('type', c0, []));
    }

    var j33 = [ 0, 'tags', 2, p24 ];

    function p25(m, c0, i0, l0) {
        return cmpSN("protected", selectNametest('type', c0, []));
    }

    var j34 = [ 0, 'tags', 2, p25 ];

    function p26(m, c0, i0, l0) {
        return cmpSN("public", selectNametest('type', c0, []));
    }

    var j35 = [ 0, 'tags', 2, p26 ];

    function p27(m, c0, i0, l0) {
        return cmpSN("access", selectNametest('type', c0, []));
    }

    var j36 = [ 0, 'tags', 2, p27, 0, 'access' ];

    function p28(m, c0, i0, l0) {
        return cmpSN("alias", selectNametest('type', c0, []));
    }

    var j37 = [ 0, 'tags', 2, p28, 0, 'name' ];

    var j38 = [ 0, 'ctx', 2, p15, 0, 'value' ];

    var j39 = [ 0, 'ctx', 2, p14, 0, 'value' ];

    function p29(m, c0, i0, l0) {
        return cmpSN("method", m.s(j2, c0)) || cmpSN("function", m.s(j2, c0)) || cmpSN("func", m.s(j2, c0)) || cmpSN("callback", m.s(j2, c0)) || cmpSN("constructs", m.s(j2, c0)) || cmpSN("method", m.s(j17, c0)) || cmpSN("function", m.s(j17, c0));
    }

    var j40 = [ 0, 'comments', 2, p29 ];

    function p30(m, c0, i0, l0) {
        return cmpSN("method", selectNametest('type', c0, []));
    }

    var j41 = [ 0, 'ctx', 2, p30, 0, 'cons' ];

    var j42 = [ 0, 'ctx', 2, p30, 0, 'receiver' ];

    function p31(m, c0, i0, l0) {
        return cmpSN("callback", selectNametest('type', c0, []));
    }

    var j43 = [ 0, 'tags', 2, p31 ];

    function p32(m, c0, i0, l0) {
        return cmpSN("func", selectNametest('type', c0, []));
    }

    var j44 = [ 0, 'tags', 2, p32 ];

    function p33(m, c0, i0, l0) {
        return cmpSN("function", selectNametest('type', c0, []));
    }

    var j45 = [ 0, 'tags', 2, p33, 0, 'name' ];

    var j46 = [ 0, 'tags', 2, p30, 0, 'name' ];

    var j47 = [ 0, 'ctx', 2, p30, 0, 'name' ];

    var j48 = [ 0, 'ctx', 2, p33, 0, 'name' ];

    function p34(m, c0, i0, l0) {
        return cmpSN("constructs", selectNametest('type', c0, []));
    }

    var j49 = [ 0, 'tags', 2, p34 ];

    var j50 = [ 0, 'tags', 2, p31, 0, 'name' ];

    var j51 = [ 0, 'tags', 2, p32, 0, 'name' ];

    var j52 = [ 0, 'tags', 2, p34, 0, 'name' ];

    var j53 = [ 0, 'original' ];

    var j54 = [ 0, 'name' ];

    function p35(m, c0, i0, l0) {
        return (cmpSN("param", selectNametest('type', c0, [])) || cmpSN("arg", selectNametest('type', c0, [])) || cmpSN("argument", selectNametest('type', c0, []))) && cmpNN(selectNametest('original', c0, []), selectNametest('name', c0, []));
    }

    var j55 = [ 0, 'tags', 2, p35 ];

    var j56 = [ 0, 'optional' ];

    function p36(m, c0, i0, l0) {
        return cmpSN("throws", selectNametest('type', c0, [])) || cmpSN("exception", selectNametest('type', c0, []));
    }

    var j57 = [ 0, 'tags', 2, p36 ];

    var j58 = [ 0, 'description' ];

    function p37(m, c0, i0, l0) {
        return cmpSN("param", selectNametest('type', c0, [])) || cmpSN("arg", selectNametest('type', c0, [])) || cmpSN("argument", selectNametest('type', c0, []));
    }

    var j59 = [ 0, 'tags', 2, p37 ];

    var j60 = [ 0, 'nullable' ];

    var j61 = [ 0, 'nonNullable' ];

    var j62 = [ 0, 'default' ];

    function p38(m, c0, i0, l0) {
        return cmpSN("return", selectNametest('type', c0, [])) || cmpSN("returns", selectNametest('type', c0, []));
    }

    var j63 = [ 0, 'tags', 2, p38 ];

    function p39(m, c0, i0, l0) {
        return cmpSN("fires", selectNametest('type', c0, [])) || cmpSN("emits", selectNametest('type', c0, []));
    }

    var j64 = [ 0, 'tags', 2, p39 ];

    function p40(m, c0, i0, l0) {
        return cmpSN("example", selectNametest('type', c0, []));
    }

    var j65 = [ 0, 'tags', 2, p40 ];

    var j66 = [ 0, 'title' ];

    function p41(m, c0, i0, l0) {
        return cmpSN("this", selectNametest('type', c0, []));
    }

    var j67 = [ 0, 'tags', 2, p41, 0, 'name' ];

    function p42(m, c0, i0, l0) {
        return cmpSN("class", m.s(j2, c0)) || cmpSN("classdesc", m.s(j2, c0)) || cmpSN("constructor", m.s(j2, c0)) || cmpSN("namespace", m.s(j2, c0)) || cmpSN("mixin", m.s(j2, c0)) || cmpSN("lends", m.s(j2, c0)) || cmpSN("event", m.s(j2, c0));
    }

    var j68 = [ 0, 'comments', 2, p42 ];

    function p43(m, c0, i0, l0) {
        return cmpSN("constructor", selectNametest('type', c0, []));
    }

    var j69 = [ 0, 'tags', 2, p43 ];

    function p44(m, c0, i0, l0) {
        return cmpSN("namespace", selectNametest('type', c0, []));
    }

    var j70 = [ 0, 'tags', 2, p44 ];

    function p45(m, c0, i0, l0) {
        return cmpSN("mixin", selectNametest('type', c0, []));
    }

    var j71 = [ 0, 'tags', 2, p45, 0, 'name' ];

    function p46(m, c0, i0, l0) {
        return cmpSN("event", selectNametest('type', c0, []));
    }

    var j72 = [ 0, 'tags', 2, p46, 0, 'name' ];

    function p47(m, c0, i0, l0) {
        return cmpSN("class", selectNametest('type', c0, []));
    }

    var j73 = [ 0, 'tags', 2, p47 ];

    var j74 = [ 0, 'tags', 2, p43, 0, 'name' ];

    var j75 = [ 0, 'tags', 2, p44, 0, 'name' ];

    var j76 = [ 0, 'tags', 2, p47, 0, 'name' ];

    function p48(m, c0, i0, l0) {
        return cmpSN("classdesc", selectNametest('type', c0, []));
    }

    var j77 = [ 0, 'tags', 2, p48 ];

    var j78 = [ 0, 'tags', 2, p14 ];

    function p49(m, c0, i0, l0) {
        return cmpSN("module", m.s(j2, c0));
    }

    var j79 = [ 0, 'comments', 2, p49 ];

    function p50(m, c0, i0, l0) {
        return cmpSN("module", selectNametest('type', c0, []));
    }

    var j80 = [ 0, 'tags', 2, p50 ];

    var j81 = [ 0, 'tags', 2, p50, 0, 'name' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, m.s(j3, c0), 'item-comment', a0)
        r0 += m.a(m, m.s(j4, c0), 'item-comment', a0)
        r0 += m.a(m, m.s(j5, c0), 'item-comment', a0)
        r0 += closeAttrs(a0);
        r0 += "\n\n[TOC]\n\n";

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
        if (nodeset2boolean( (m.s(j10, c0)) )) {
            r1 += nodeset2scalar( m.s(j10, c0) );
        } else if (nodeset2boolean( (m.s(j8, c0)) )) {
            r1 += nodeset2scalar( m.s(j8, c0) );
        } else if (nodeset2boolean( (m.s(j9, c0)) )) {
            r1 += nodeset2scalar( m.s(j9, c0) );
        } else {
            r1 += "Undefined";
        }
        var v0 = r1;

        //  var description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j11, c0), 'item-tag', a1)
        r1 += closeAttrs(a1);
        r1 += "\n\n";
        r1 += m.a(m, m.s(j12, c0), 'item-tag', a1)
        r1 += "\n\n";
        r1 += nodeset2xml( m.s(j13, c0) );
        var v1 = r1;

        r0 += closeAttrs(a0);
        r0 += "#";
        r0 += scalar2xml( v0 );
        r0 += "\n\n";
        if (nodeset2boolean( (m.s(j14, c0)) )) {
            r0 += "`Version: " + nodeset2xml( ( m.s(j14, c0) ) ) + "` ";
        }
        if (nodeset2boolean( (m.s(j15, c0)) )) {
            r0 += "`Author: " + nodeset2xml( ( m.s(j15, c0) ) ) + "` ";
        }
        r0 += "\n\n";
        r0 += m.a(m, m.s(j16, c0), 'item-tag', a0)
        r0 += "\n\n";
        r0 += scalar2xml( (yr.externals['mdox-string-trim'])(xml2scalar( v1 )) );
        r0 += "\n\n";

        return r0;
    };
    M.t1.j = j6;
    M.t1.a = 0;

    // match .comments[ .tags.type == "constant" || .tags.type == "const" || .tags.type == "var" || .tags.type == "member" || .ctx.type == "property" || .ctx.type == "declaration" ] : item-comment
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var context : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j22, c0)) )) {
            r1 += nodeset2scalar( m.s(j22, c0) );
        } else if (nodeset2boolean( (m.s(j19, c0)) )) {
            r1 += nodeset2scalar( m.s(j19, c0) );
        } else if (nodeset2boolean( (m.s(j20, c0)) )) {
            r1 += nodeset2scalar( m.s(j20, c0) );
        } else if (nodeset2boolean( (m.s(j21, c0)) )) {
            r1 += nodeset2scalar( m.s(j21, c0) );
        } else {
            r1 += "";
        }
        var v2 = r1;

        //  var context-sep : scalar
        var r1 = '';
        var a1 = { a: {} };
        if ((!(yr.externals['mdox-string-empty'])(v2))) {
            r1 += " *";
            r1 += v2;
            if (nodeset2boolean( (m.s(j23, c0)) )) {
                r1 += ":";
            } else {
                r1 += ".";
            }
            r1 += "*";
        } else {
            r1 += "";
        }
        var v3 = r1;

        //  var name-type : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j29, c0)) )) {
            r1 += "Constant";
        } else if (nodeset2boolean( (m.s(j24, c0)) )) {
            r1 += "Constant";
        } else if (nodeset2boolean( (m.s(j25, c0)) )) {
            r1 += "Var";
        } else if (nodeset2boolean( (m.s(j26, c0)) )) {
            r1 += "Var";
        } else if (nodeset2boolean( (m.s(j27, c0)) )) {
            r1 += "Property";
        } else if (nodeset2boolean( (m.s(j28, c0)) )) {
            r1 += "Var";
        } else {
            r1 += "";
        }
        var v4 = r1;

        //  var name : nodeset
        var r1 = [];
        if (nodeset2boolean( (m.s(j29, c0)) )) {
            r1 = m.s(j29, c0);
        } else if (nodeset2boolean( (m.s(j24, c0)) )) {
            r1 = m.s(j24, c0);
        } else if (nodeset2boolean( (m.s(j25, c0)) )) {
            r1 = m.s(j25, c0);
        } else if (nodeset2boolean( (m.s(j26, c0)) )) {
            r1 = m.s(j26, c0);
        } else if (nodeset2boolean( (m.s(j30, c0)) )) {
            r1 = m.s(j30, c0);
        } else if (nodeset2boolean( (m.s(j27, c0)) )) {
            r1 = m.s(j27, c0);
        } else if (nodeset2boolean( (m.s(j28, c0)) )) {
            r1 = m.s(j28, c0);
        }
        var v5 = r1;

        //  var name-context : scalar
        var r1 = '';
        var a1 = { a: {} };
        r1 += " **" + nodeset2scalar( ( v5 ) ) + "**";
        var v6 = r1;

        //  var types : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j31, c0), 'mdox-tag-types', a1, (function() {
            var r1 = [];
            var a1 = { a: {} };
            r1.push("type");
            r1.push("constant");
            r1.push("const");
            r1.push("member");
            r1.push("var");

            return r1;
        })())
        var v7 = r1;

        //  var description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j32, c0), 'item-tag', a1)
        r1 += closeAttrs(a1);
        if (nodeset2boolean( (m.s(j11, c0)) )) {
            r1 += "\n\n";
            r1 += m.a(m, m.s(j11, c0), 'item-tag', a1)
        }
        if (nodeset2boolean( (m.s(j12, c0)) )) {
            r1 += "\n\n";
            r1 += m.a(m, m.s(j12, c0), 'item-tag', a1)
        }
        if (nodeset2boolean( (m.s(j13, c0)) )) {
            r1 += "\n\n";
            r1 += nodeset2xml( m.s(j13, c0) );
        }
        var v8 = r1;

        //  var access : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j36, c0)) )) {
            r1 += nodeset2scalar( m.s(j36, c0) );
        } else if (nodeset2boolean( (m.s(j33, c0)) )) {
            r1 += "private";
        } else if (nodeset2boolean( (m.s(j34, c0)) )) {
            r1 += "protected";
        } else if (nodeset2boolean( (m.s(j35, c0)) )) {
            r1 += "public";
        }
        var v9 = r1;

        //  var alias : nodeset
        var r1 = [];
        if (nodeset2boolean( (m.s(j37, c0)) )) {
            r1 = m.s(j37, c0);
        }
        var v10 = r1;

        //  var value : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j39, c0)) )) {
            r1 += nodeset2scalar( m.s(j39, c0) );
        } else if (nodeset2boolean( (m.s(j38, c0)) )) {
            r1 += nodeset2scalar( m.s(j38, c0) );
        } else {
            r1 += "";
        }
        var v11 = r1;

        r0 += closeAttrs(a0);
        r0 += "#### ";
        if ((!(yr.externals['mdox-string-empty'])(v4))) {
            r0 += scalar2xml( v4 );
            r0 += ": ";
        }
        r0 += nodeset2xml( v5 );
        r0 += "\n\n";
        r0 += scalar2xml( v3 );
        r0 += scalar2xml( v6 );
        r0 += " ";
        r0 += v7;
        if ((!(yr.externals['mdox-string-empty'])(v11))) {
            r0 += " = ";
            r0 += "``";
            r0 += scalar2xml( v11 );
            r0 += "``";
        }
        r0 += "\n\n";
        r0 += "***";
        r0 += "\n\n";
        r0 += m.a(m, m.s(j31, c0), 'tags-flags', a0, (function() {
            var r0 = [];
            var a0 = { a: {} };
            r0.push("deprecated");
            r0.push("instance");
            r0.push("readonly");
            r0.push("global");
            r0.push("static");
            r0.push("inner");

            return r0;
        })())
        if ((!(yr.externals['mdox-string-empty'])(v9))) {
            r0 += "`Access: " + scalar2xml( ( v9 ) ) + "` ";
        }
        if ((!(yr.externals['mdox-string-empty'])(nodeset2scalar( v10 )))) {
            r0 += "`Alias: " + nodeset2xml( ( v10 ) ) + "` ";
        }
        r0 += "\n\n";
        r0 += scalar2xml( (yr.externals['mdox-string-trim'])(xml2scalar( v8 )) );
        r0 += "\n\n";

        return r0;
    };
    M.t2.j = j18;
    M.t2.a = 0;

    // match .comments[ .tags.type == "method" || .tags.type == "function" || .tags.type == "func" || .tags.type == "callback" || .tags.type == "constructs" || .ctx.type == "method" || .ctx.type == "function" ] : item-comment
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var context : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j22, c0)) )) {
            r1 += nodeset2scalar( m.s(j22, c0) );
        } else if (nodeset2boolean( (m.s(j19, c0)) )) {
            r1 += nodeset2scalar( m.s(j19, c0) );
        } else if (nodeset2boolean( (m.s(j41, c0)) )) {
            r1 += nodeset2scalar( m.s(j41, c0) );
        } else if (nodeset2boolean( (m.s(j42, c0)) )) {
            r1 += nodeset2scalar( m.s(j42, c0) );
        } else {
            r1 += "";
        }
        var v12 = r1;

        //  var context-sep : scalar
        var r1 = '';
        var a1 = { a: {} };
        if ((!(yr.externals['mdox-string-empty'])(v12))) {
            r1 += " *";
            r1 += v12;
            if (nodeset2boolean( (m.s(j23, c0)) )) {
                r1 += ":";
            } else {
                r1 += ".";
            }
            r1 += "*";
        } else {
            r1 += "";
        }
        var v13 = r1;

        //  var name-type : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j49, c0)) )) {
            r1 += "Constructor";
        } else if (nodeset2boolean( (m.s(j43, c0)) )) {
            r1 += "Callback";
        } else if (nodeset2boolean( (m.s(j44, c0)) )) {
            r1 += "Function";
        } else if (nodeset2boolean( (m.s(j45, c0)) )) {
            r1 += "Function";
        } else if (nodeset2boolean( (m.s(j46, c0)) )) {
            r1 += "Method";
        } else if (nodeset2boolean( (m.s(j47, c0)) )) {
            r1 += "Method";
        } else if (nodeset2boolean( (m.s(j48, c0)) )) {
            r1 += "Function";
        } else {
            r1 += "";
        }
        var v14 = r1;

        //  var name : nodeset
        var r1 = [];
        if (nodeset2boolean( (m.s(j52, c0)) )) {
            r1 = m.s(j52, c0);
        } else if (nodeset2boolean( (m.s(j50, c0)) )) {
            r1 = m.s(j50, c0);
        } else if (nodeset2boolean( (m.s(j51, c0)) )) {
            r1 = m.s(j51, c0);
        } else if (nodeset2boolean( (m.s(j45, c0)) )) {
            r1 = m.s(j45, c0);
        } else if (nodeset2boolean( (m.s(j46, c0)) )) {
            r1 = m.s(j46, c0);
        } else if (nodeset2boolean( (m.s(j30, c0)) )) {
            r1 = m.s(j30, c0);
        } else if (nodeset2boolean( (m.s(j47, c0)) )) {
            r1 = m.s(j47, c0);
        } else if (nodeset2boolean( (m.s(j48, c0)) )) {
            r1 = m.s(j48, c0);
        }
        var v15 = r1;

        //  var name-context : scalar
        var r1 = '';
        var a1 = { a: {} };
        r1 += " **" + nodeset2scalar( ( v15 ) ) + "**";
        var v16 = r1;

        //  var types : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j31, c0), 'mdox-tag-types', a1, (function() {
            var r1 = [];
            var a1 = { a: {} };
            r1.push("return");
            r1.push("returns");

            return r1;
        })())
        var v17 = r1;

        //  var description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j32, c0), 'item-tag', a1)
        r1 += closeAttrs(a1);
        if (nodeset2boolean( (m.s(j11, c0)) )) {
            r1 += "\n\n";
            r1 += m.a(m, m.s(j11, c0), 'item-tag', a1)
        }
        if (nodeset2boolean( (m.s(j12, c0)) )) {
            r1 += "\n\n";
            r1 += m.a(m, m.s(j12, c0), 'item-tag', a1)
        }
        if (nodeset2boolean( (m.s(j13, c0)) )) {
            r1 += "\n\n";
            r1 += nodeset2xml( m.s(j13, c0) );
        }
        var v18 = r1;

        //  var args : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        var items0 = (m.s(j55, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += ", ";
            }
            if (nodeset2boolean( (selectNametest('optional', c1, [])) )) {
                r1 += "[";
            }
            r1 += m.a(m, m.s(j31, c1), 'mdox-tag-types-str', a1)
            r1 += " ";
            r1 += nodeset2xml( selectNametest('name', c1, []) );
            if (nodeset2boolean( (selectNametest('optional', c1, [])) )) {
                r1 += "]";
            }
        }
        var v19 = r1;

        //  var throws-description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        var items0 = (m.s(j57, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += "\n";
            }
            r1 += " - ";
            r1 += m.a(m, m.s(j31, c1), 'mdox-tag-types-str', a1)
            if (nodeset2boolean( (selectNametest('description', c1, [])) )) {
                r1 += " : ";
                r1 += nodeset2xml( selectNametest('description', c1, []) );
            }
        }
        var v20 = r1;

        //  var args-description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        var items0 = (m.s(j59, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += "\n";
            }
            r1 += " - ";
            if (nodeset2boolean( (selectNametest('optional', c1, [])) )) {
                r1 += "[";
            }
            r1 += nodeset2xml( selectNametest('name', c1, []) );
            r1 += " ";
            r1 += m.a(m, m.s(j31, c1), 'mdox-tag-types-str', a1)
            if (nodeset2boolean( (selectNametest('nonNullable', c1, [])) )) {
                r1 += " `non nullable`";
            } else if (nodeset2boolean( (selectNametest('nullable', c1, [])) )) {
                r1 += " `nullable`";
            }
            if (nodeset2boolean( (selectNametest('optional', c1, [])) )) {
                r1 += "]";
            }
            if (nodeset2boolean( (selectNametest('default', c1, [])) )) {
                r1 += " = ``";
                r1 += nodeset2xml( selectNametest('default', c1, []) );
                r1 += "``";
            }
            if (nodeset2boolean( (selectNametest('description', c1, [])) )) {
                r1 += " : ";
                r1 += nodeset2xml( selectNametest('description', c1, []) );
            }
        }
        var v21 = r1;

        //  var return-description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        var items0 = (m.s(j63, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += "\n";
            }
            r1 += " - ";
            r1 += m.a(m, m.s(j31, c1), 'mdox-tag-types-str', a1)
            if (nodeset2boolean( (selectNametest('description', c1, [])) )) {
                r1 += " : ";
                r1 += nodeset2xml( selectNametest('description', c1, []) );
            }
        }
        var v22 = r1;

        //  var fires-description : scalar
        var r1 = '';
        var a1 = { a: {} };
        var items0 = (m.s(j64, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += "\n";
            }
            r1 += " - ";
            r1 += simpleScalar('description', c1);
        }
        var v23 = r1;

        //  var example : scalar
        var r1 = '';
        var a1 = { a: {} };
        var items0 = (m.s(j65, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += "\n\n";
            }
            r1 += simpleScalar('title', c1);
            r1 += "\n";
            r1 += "```\n";
            r1 += simpleScalar('description', c1);
            r1 += "\n```";
        }
        var v24 = r1;

        //  var access : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j36, c0)) )) {
            r1 += nodeset2scalar( m.s(j36, c0) );
        } else if (nodeset2boolean( (m.s(j33, c0)) )) {
            r1 += "private";
        } else if (nodeset2boolean( (m.s(j34, c0)) )) {
            r1 += "protected";
        } else if (nodeset2boolean( (m.s(j35, c0)) )) {
            r1 += "public";
        }
        var v25 = r1;

        //  var alias : nodeset
        var r1 = [];
        if (nodeset2boolean( (m.s(j37, c0)) )) {
            r1 = m.s(j37, c0);
        }
        var v26 = r1;

        //  var this-type : nodeset
        var r1 = [];
        if (nodeset2boolean( (m.s(j67, c0)) )) {
            r1 = m.s(j67, c0);
        }
        var v27 = r1;

        r0 += closeAttrs(a0);
        r0 += "#### ";
        if ((!(yr.externals['mdox-string-empty'])(v14))) {
            r0 += scalar2xml( v14 );
            r0 += ": ";
        }
        r0 += nodeset2xml( v15 );
        r0 += "\n\n";
        r0 += scalar2xml( v13 );
        r0 += scalar2xml( v16 );
        r0 += " (";
        r0 += v19;
        r0 += ")";
        r0 += " ";
        r0 += v17;
        r0 += "\n\n";
        r0 += "***";
        r0 += "\n\n";
        r0 += m.a(m, m.s(j31, c0), 'tags-flags', a0, (function() {
            var r0 = [];
            var a0 = { a: {} };
            r0.push("deprecated");
            r0.push("instance");
            r0.push("global");
            r0.push("static");
            r0.push("inner");

            return r0;
        })())
        if ((!(yr.externals['mdox-string-empty'])(v25))) {
            r0 += "`Access: " + scalar2xml( ( v25 ) ) + "` ";
        }
        if ((!(yr.externals['mdox-string-empty'])(nodeset2scalar( v26 )))) {
            r0 += "`Alias: " + nodeset2xml( ( v26 ) ) + "` ";
        }
        if ((!(yr.externals['mdox-string-empty'])(nodeset2scalar( v27 )))) {
            r0 += "`This: " + nodeset2xml( ( v27 ) ) + "` ";
        }
        r0 += "\n\n";
        r0 += scalar2xml( (yr.externals['mdox-string-trim'])(xml2scalar( v18 )) );
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v21 )))) {
            r0 += "\n\n";
            r0 += "*Arguments:*";
            r0 += "\n";
            r0 += v21;
        }
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v22 )))) {
            r0 += "\n\n";
            r0 += "*Returns:*";
            r0 += "\n";
            r0 += v22;
        }
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v20 )))) {
            r0 += "\n\n";
            r0 += "*Exceptions:*";
            r0 += "\n";
            r0 += v20;
        }
        if ((!(yr.externals['mdox-string-empty'])(v23))) {
            r0 += "\n\n";
            r0 += "*Fires:*";
            r0 += "\n";
            r0 += scalar2xml( v23 );
        }
        if ((!(yr.externals['mdox-string-empty'])(v24))) {
            r0 += "\n\n";
            r0 += "##### **Example**";
            r0 += "\n\n";
            r0 += scalar2xml( v24 );
        }
        r0 += "\n\n";

        return r0;
    };
    M.t3.j = j40;
    M.t3.a = 0;

    // match .comments[ .tags.type == "class" || .tags.type == "classdesc" || .tags.type == "constructor" || .tags.type == "namespace" || .tags.type == "mixin" || .tags.type == "lends" || .tags.type == "event" ] : item-comment
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var name-type : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j73, c0)) )) {
            r1 += "Class";
        } else if (nodeset2boolean( (m.s(j69, c0)) )) {
            r1 += "Class";
        } else if (nodeset2boolean( (m.s(j70, c0)) )) {
            r1 += "Namespace";
        } else if (nodeset2boolean( (m.s(j71, c0)) )) {
            r1 += "Mixin";
        } else if (nodeset2boolean( (m.s(j72, c0)) )) {
            r1 += "Event";
        } else {
            r1 += "";
        }
        var v28 = r1;

        //  var name : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j76, c0)) )) {
            r1 += nodeset2scalar( m.s(j76, c0) );
        } else if (nodeset2boolean( (m.s(j74, c0)) )) {
            r1 += nodeset2scalar( m.s(j74, c0) );
        } else if (nodeset2boolean( (m.s(j75, c0)) )) {
            r1 += nodeset2scalar( m.s(j75, c0) );
        } else if (nodeset2boolean( (m.s(j71, c0)) )) {
            r1 += nodeset2scalar( m.s(j71, c0) );
        } else if (nodeset2boolean( (m.s(j72, c0)) )) {
            r1 += nodeset2scalar( m.s(j72, c0) );
        } else if (nodeset2boolean( (m.s(j30, c0)) )) {
            r1 += nodeset2scalar( m.s(j30, c0) );
        } else if (nodeset2boolean( (m.s(j48, c0)) )) {
            r1 += nodeset2scalar( m.s(j48, c0) );
        } else if (nodeset2boolean( (m.s(j28, c0)) )) {
            r1 += nodeset2scalar( m.s(j28, c0) );
        } else if (nodeset2boolean( (m.s(j27, c0)) )) {
            r1 += nodeset2scalar( m.s(j27, c0) );
        } else if (nodeset2boolean( (m.s(j47, c0)) )) {
            r1 += nodeset2scalar( m.s(j47, c0) );
        } else {
            r1 += "Undefined";
        }
        var v29 = r1;

        //  var types : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j31, c0), 'mdox-tag-types', a1, (function() {
            var r1 = [];
            var a1 = { a: {} };
            r1.push("class");
            r1.push("constructor");
            r1.push("namespace");

            return r1;
        })())
        var v30 = r1;

        //  var description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j32, c0), 'item-tag', a1)
        r1 += closeAttrs(a1);
        if (nodeset2boolean( (m.s(j77, c0)) )) {
            r1 += "\n\n";
            r1 += m.a(m, m.s(j77, c0), 'item-tag', a1)
        }
        if (nodeset2boolean( (m.s(j11, c0)) )) {
            r1 += "\n\n";
            r1 += m.a(m, m.s(j11, c0), 'item-tag', a1)
        }
        if (nodeset2boolean( (m.s(j12, c0)) )) {
            r1 += "\n\n";
            r1 += m.a(m, m.s(j12, c0), 'item-tag', a1)
        }
        if (nodeset2boolean( (m.s(j13, c0)) )) {
            r1 += "\n\n";
            r1 += nodeset2xml( m.s(j13, c0) );
        }
        var v31 = r1;

        //  var example : scalar
        var r1 = '';
        var a1 = { a: {} };
        var items0 = (m.s(j65, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += "\n\n";
            }
            r1 += simpleScalar('title', c1);
            r1 += "\n";
            r1 += "```\n";
            r1 += simpleScalar('description', c1);
            r1 += "\n```";
        }
        var v32 = r1;

        //  var prop-description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        var items0 = (m.s(j78, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += "\n";
            }
            r1 += " - ";
            if (nodeset2boolean( (selectNametest('optional', c1, [])) )) {
                r1 += "[";
            }
            r1 += nodeset2xml( selectNametest('name', c1, []) );
            r1 += " ";
            r1 += m.a(m, m.s(j31, c1), 'mdox-tag-types-str', a1)
            if (nodeset2boolean( (selectNametest('nonNullable', c1, [])) )) {
                r1 += " `non nullable`";
            } else if (nodeset2boolean( (selectNametest('nullable', c1, [])) )) {
                r1 += " `nullable`";
            }
            if (nodeset2boolean( (selectNametest('optional', c1, [])) )) {
                r1 += "]";
            }
            if (nodeset2boolean( (selectNametest('default', c1, [])) )) {
                r1 += " = ``";
                r1 += nodeset2xml( selectNametest('default', c1, []) );
                r1 += "``";
            }
            if (nodeset2boolean( (selectNametest('description', c1, [])) )) {
                r1 += " : ";
                r1 += nodeset2xml( selectNametest('description', c1, []) );
            }
        }
        var v33 = r1;

        r0 += closeAttrs(a0);
        r0 += "### ";
        if ((!(yr.externals['mdox-string-empty'])(v28))) {
            r0 += scalar2xml( v28 );
            r0 += ": ";
        }
        r0 += scalar2xml( v29 );
        r0 += "\n\n";
        r0 += "***";
        r0 += "\n\n";
        r0 += m.a(m, m.s(j31, c0), 'tags-flags', a0, (function() {
            var r0 = [];
            var a0 = { a: {} };
            r0.push("deprecated");
            r0.push("instance");
            r0.push("global");
            r0.push("static");
            r0.push("inner");

            return r0;
        })())
        if ((v30)) {
            r0 += "\n\n";
            r0 += "**Type:** " + ( v30 );
        }
        r0 += "\n\n";
        r0 += scalar2xml( (yr.externals['mdox-string-trim'])(xml2scalar( v31 )) );
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v33 )))) {
            r0 += "\n\n";
            r0 += "*Propertys:*";
            r0 += "\n";
            r0 += v33;
        }
        if ((!(yr.externals['mdox-string-empty'])(v32))) {
            r0 += "\n\n";
            r0 += "##### **Example**";
            r0 += "\n\n";
            r0 += scalar2xml( v32 );
        }
        r0 += "\n\n";

        return r0;
    };
    M.t4.j = j68;
    M.t4.a = 0;

    // match .comments[ .tags.type == "module" ] : item-comment
    M.t5 = function t5(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var types : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j31, c0), 'mdox-tag-types', a1, (function() {
            var r1 = [];
            var a1 = { a: {} };
            r1.push("module");

            return r1;
        })())
        var v34 = r1;

        //  var name-type : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j80, c0)) )) {
            r1 += "Module";
        } else {
            r1 += "";
        }
        var v35 = r1;

        //  var name : nodeset
        var r1 = [];
        r1 = m.s(j81, c0);
        var v36 = r1;

        //  var description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j11, c0), 'item-tag', a1)
        r1 += closeAttrs(a1);
        r1 += "\n\n";
        r1 += m.a(m, m.s(j12, c0), 'item-tag', a1)
        r1 += "\n\n";
        r1 += nodeset2xml( m.s(j13, c0) );
        var v37 = r1;

        //  var example : scalar
        var r1 = '';
        var a1 = { a: {} };
        var items0 = (m.s(j65, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += "\n\n";
            }
            r1 += simpleScalar('title', c1);
            r1 += "\n";
            r1 += "```\n";
            r1 += simpleScalar('description', c1);
            r1 += "\n```";
        }
        var v38 = r1;

        r0 += closeAttrs(a0);
        r0 += "## ";
        if ((!(yr.externals['mdox-string-empty'])(v35))) {
            r0 += scalar2xml( v35 );
            r0 += ": ";
        }
        r0 += nodeset2xml( v36 );
        r0 += "\n\n";
        r0 += m.a(m, m.s(j31, c0), 'tags-flags', a0, (function() {
            var r0 = [];
            var a0 = { a: {} };
            r0.push("deprecated");
            r0.push("instance");
            r0.push("global");
            r0.push("static");
            r0.push("inner");

            return r0;
        })())
        if ((v34)) {
            r0 += "\n\n";
            r0 += "**Type:** " + ( v34 );
        }
        r0 += "\n\n";
        r0 += scalar2xml( (yr.externals['mdox-string-trim'])(xml2scalar( v37 )) );
        if ((!(yr.externals['mdox-string-empty'])(v38))) {
            r0 += "\n\n";
            r0 += "##### **Example**";
            r0 += "\n\n";
            r0 += scalar2xml( v38 );
        }
        r0 += "\n\n";

        return r0;
    };
    M.t5.j = j79;
    M.t5.a = 0;

    M.matcher = {
        "": {
            "": [
                "t0"
            ]
        },
        "item-comment": {
            "comments": [
                "t5",
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
