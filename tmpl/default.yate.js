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
        return cmpSN("deprecated", selectNametest('type', c0, []));
    }

    var j17 = [ 0, 'tags', 2, p11 ];

    function p12(m, c0, i0, l0) {
        return cmpSN("memberOf", selectNametest('type', c0, []));
    }

    var j18 = [ 0, 'tags', 2, p12, 0, 'parent' ];

    function p13(m, c0, i0, l0) {
        return cmpSN("method", selectNametest('type', c0, []));
    }

    var j19 = [ 0, 'ctx', 2, p13, 0, 'cons' ];

    var j20 = [ 0, 'ctx', 2, p13, 0, 'receiver' ];

    function p14(m, c0, i0, l0) {
        return cmpSN("memberof", selectNametest('type', c0, []));
    }

    var j21 = [ 0, 'tags', 2, p14, 0, 'parent' ];

    function p15(m, c0, i0, l0) {
        return cmpSN("static", selectNametest('type', c0, []));
    }

    var j22 = [ 0, 'tags', 2, p15 ];

    function p16(m, c0, i0, l0) {
        return cmpSN("callback", selectNametest('type', c0, []));
    }

    var j23 = [ 0, 'tags', 2, p16, 0, 'name' ];

    function p17(m, c0, i0, l0) {
        return cmpSN("func", selectNametest('type', c0, []));
    }

    var j24 = [ 0, 'tags', 2, p17, 0, 'name' ];

    function p18(m, c0, i0, l0) {
        return cmpSN("function", selectNametest('type', c0, []));
    }

    var j25 = [ 0, 'tags', 2, p18, 0, 'name' ];

    var j26 = [ 0, 'tags', 2, p13, 0, 'name' ];

    function p19(m, c0, i0, l0) {
        return cmpSN("name", selectNametest('type', c0, []));
    }

    var j27 = [ 0, 'tags', 2, p19, 0, 'name' ];

    var j28 = [ 0, 'ctx', 2, p13, 0, 'name' ];

    var j29 = [ 0, 'ctx', 2, p18, 0, 'name' ];

    function p20(m, c0, i0, l0) {
        return cmpSN("constructs", selectNametest('type', c0, []));
    }

    var j30 = [ 0, 'tags', 2, p20, 0, 'name' ];

    var j31 = [ 1, 0 ];

    function p21(m, c0, i0, l0) {
        return cmpSN("summary", selectNametest('type', c0, []));
    }

    var j32 = [ 0, 'tags', 2, p21 ];

    function p22(m, c0, i0, l0) {
        return cmpSN("param", selectNametest('type', c0, [])) || cmpSN("arg", selectNametest('type', c0, [])) || cmpSN("argument", selectNametest('type', c0, []));
    }

    var j33 = [ 0, 'tags', 2, p22 ];

    var j34 = [ 0, 'name' ];

    function p23(m, c0, i0, l0) {
        return cmpSN("throws", selectNametest('type', c0, [])) || cmpSN("exception", selectNametest('type', c0, []));
    }

    var j35 = [ 0, 'tags', 2, p23 ];

    var j36 = [ 0, 'description' ];

    function p24(m, c0, i0, l0) {
        return cmpSN("return", selectNametest('type', c0, [])) || cmpSN("returns", selectNametest('type', c0, []));
    }

    var j37 = [ 0, 'tags', 2, p24 ];

    function p25(m, c0, i0, l0) {
        return cmpSN("fires", selectNametest('type', c0, [])) || cmpSN("emits", selectNametest('type', c0, []));
    }

    var j38 = [ 0, 'tags', 2, p25 ];

    function p26(m, c0, i0, l0) {
        return cmpSN("example", selectNametest('type', c0, []));
    }

    var j39 = [ 0, 'tags', 2, p26 ];

    var j40 = [ 0, 'title' ];

    function p27(m, c0, i0, l0) {
        return cmpSN("private", selectNametest('type', c0, []));
    }

    var j41 = [ 0, 'tags', 2, p27 ];

    function p28(m, c0, i0, l0) {
        return cmpSN("protected", selectNametest('type', c0, []));
    }

    var j42 = [ 0, 'tags', 2, p28 ];

    function p29(m, c0, i0, l0) {
        return cmpSN("public", selectNametest('type', c0, []));
    }

    var j43 = [ 0, 'tags', 2, p29 ];

    function p30(m, c0, i0, l0) {
        return cmpSN("access", selectNametest('type', c0, []));
    }

    var j44 = [ 0, 'tags', 2, p30, 0, 'access' ];

    function p31(m, c0, i0, l0) {
        return cmpSN("alias", selectNametest('type', c0, []));
    }

    var j45 = [ 0, 'tags', 2, p31, 0, 'name' ];

    function p32(m, c0, i0, l0) {
        return cmpSN("class", m.s(j3, c0)) || cmpSN("classdesc", m.s(j3, c0)) || cmpSN("constructor", m.s(j3, c0)) || cmpSN("namespace", m.s(j3, c0)) || cmpSN("mixin", m.s(j3, c0)) || cmpSN("lends", m.s(j3, c0));
    }

    var j46 = [ 0, 'comments', 2, p32 ];

    function p33(m, c0, i0, l0) {
        return cmpSN("constructor", selectNametest('type', c0, []));
    }

    var j47 = [ 0, 'tags', 2, p33, 0, 'name' ];

    function p34(m, c0, i0, l0) {
        return cmpSN("namespace", selectNametest('type', c0, []));
    }

    var j48 = [ 0, 'tags', 2, p34, 0, 'name' ];

    function p35(m, c0, i0, l0) {
        return cmpSN("mixin", selectNametest('type', c0, []));
    }

    var j49 = [ 0, 'tags', 2, p35, 0, 'name' ];

    function p36(m, c0, i0, l0) {
        return cmpSN("class", selectNametest('type', c0, []));
    }

    var j50 = [ 0, 'tags', 2, p36, 0, 'name' ];

    function p37(m, c0, i0, l0) {
        return cmpSN("classdesc", selectNametest('type', c0, []));
    }

    var j51 = [ 0, 'tags', 2, p37 ];

    function p38(m, c0, i0, l0) {
        return cmpSN("module", m.s(j3, c0));
    }

    var j52 = [ 0, 'comments', 2, p38 ];

    function p39(m, c0, i0, l0) {
        return cmpSN("module", selectNametest('type', c0, []));
    }

    var j53 = [ 0, 'tags', 2, p39, 0, 'name' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, m.s(j2, c0), 'item-comment', a0)
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

        //  var is-deprecated : boolean
        var v2 = nodeset2boolean( m.s(j17, c0) );

        //  var context : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j21, c0)) )) {
            r1 += nodeset2scalar( m.s(j21, c0) );
        } else if (nodeset2boolean( (m.s(j18, c0)) )) {
            r1 += nodeset2scalar( m.s(j18, c0) );
        } else if (nodeset2boolean( (m.s(j19, c0)) )) {
            r1 += nodeset2scalar( m.s(j19, c0) );
        } else if (nodeset2boolean( (m.s(j20, c0)) )) {
            r1 += nodeset2scalar( m.s(j20, c0) );
        } else {
            r1 += "";
        }
        var v3 = r1;

        //  var context-sep : scalar
        var r1 = '';
        var a1 = { a: {} };
        if ((!(yr.externals['mdox-string-empty'])(v3))) {
            r1 += " *";
            r1 += v3;
            if (nodeset2boolean( (m.s(j22, c0)) )) {
                r1 += ":";
            } else {
                r1 += ".";
            }
            r1 += "*";
        } else {
            r1 += "";
        }
        var v4 = r1;

        //  var name : scalar
        var r1 = '';
        var a1 = { a: {} };
        r1 += " **";
        if ((v2)) {
            r1 += "~~";
        }
        if (nodeset2boolean( (m.s(j30, c0)) )) {
            r1 += nodeset2scalar( m.s(j30, c0) );
        } else if (nodeset2boolean( (m.s(j23, c0)) )) {
            r1 += nodeset2scalar( m.s(j23, c0) );
        } else if (nodeset2boolean( (m.s(j24, c0)) )) {
            r1 += nodeset2scalar( m.s(j24, c0) );
        } else if (nodeset2boolean( (m.s(j25, c0)) )) {
            r1 += nodeset2scalar( m.s(j25, c0) );
        } else if (nodeset2boolean( (m.s(j26, c0)) )) {
            r1 += nodeset2scalar( m.s(j26, c0) );
        } else if (nodeset2boolean( (m.s(j27, c0)) )) {
            r1 += nodeset2scalar( m.s(j27, c0) );
        } else if (nodeset2boolean( (m.s(j28, c0)) )) {
            r1 += nodeset2scalar( m.s(j28, c0) );
        } else if (nodeset2boolean( (m.s(j29, c0)) )) {
            r1 += nodeset2scalar( m.s(j29, c0) );
        }
        if ((v2)) {
            r1 += "~~";
        }
        r1 += "**";
        var v5 = r1;

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
        var v6 = r1;

        //  var description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j32, c0), 'item-tag', a1)
        r1 += closeAttrs(a1);
        if (nodeset2boolean( (m.s(j9, c0)) )) {
            r1 += "\n\n";
            r1 += m.a(m, m.s(j9, c0), 'item-tag', a1)
        }
        if (nodeset2boolean( (m.s(j10, c0)) )) {
            r1 += "\n\n";
            r1 += m.a(m, m.s(j10, c0), 'item-tag', a1)
        }
        if (nodeset2boolean( (m.s(j11, c0)) )) {
            r1 += "\n\n";
            r1 += nodeset2xml( m.s(j11, c0) );
        }
        var v7 = r1;

        //  var args : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        var items0 = (m.s(j33, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += ", ";
            }
            r1 += m.a(m, m.s(j31, c1), 'mdox-tag-types-str', a1)
            r1 += " ";
            r1 += nodeset2xml( selectNametest('name', c1, []) );
        }
        var v8 = r1;

        //  var throws-description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        var items0 = (m.s(j35, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += "\n\n";
            }
            r1 += ">";
            r1 += " - ";
            r1 += m.a(m, m.s(j31, c1), 'mdox-tag-types-str', a1)
            if (nodeset2boolean( (selectNametest('description', c1, [])) )) {
                r1 += " : ";
                r1 += nodeset2xml( selectNametest('description', c1, []) );
            }
        }
        var v9 = r1;

        //  var args-description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        var items0 = (m.s(j33, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += "\n\n";
            }
            r1 += ">";
            r1 += " - ";
            r1 += nodeset2xml( selectNametest('name', c1, []) );
            r1 += " ";
            r1 += m.a(m, m.s(j31, c1), 'mdox-tag-types-str', a1)
            if (nodeset2boolean( (selectNametest('description', c1, [])) )) {
                r1 += " : ";
                r1 += nodeset2xml( selectNametest('description', c1, []) );
            }
        }
        var v10 = r1;

        //  var return-description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        var items0 = (m.s(j37, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += "\n\n";
            }
            r1 += ">";
            r1 += " - ";
            r1 += m.a(m, m.s(j31, c1), 'mdox-tag-types-str', a1)
            if (nodeset2boolean( (selectNametest('description', c1, [])) )) {
                r1 += " : ";
                r1 += nodeset2xml( selectNametest('description', c1, []) );
            }
        }
        var v11 = r1;

        //  var fires-description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        var items0 = (m.s(j38, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += "\n\n";
            }
            r1 += ">";
            r1 += " - ";
            r1 += nodeset2xml( selectNametest('description', c1, []) );
        }
        var v12 = r1;

        //  var example : scalar
        var r1 = '';
        var a1 = { a: {} };
        var items0 = (m.s(j39, c0));
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
        var v13 = r1;

        //  var access : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j44, c0)) )) {
            r1 += nodeset2scalar( m.s(j44, c0) );
        } else if (nodeset2boolean( (m.s(j41, c0)) )) {
            r1 += "private";
        } else if (nodeset2boolean( (m.s(j42, c0)) )) {
            r1 += "protected";
        } else if (nodeset2boolean( (m.s(j43, c0)) )) {
            r1 += "public";
        }
        var v14 = r1;

        //  var alias : nodeset
        var r1 = [];
        if (nodeset2boolean( (m.s(j45, c0)) )) {
            r1 = m.s(j45, c0);
        }
        var v15 = r1;

        r0 += closeAttrs(a0);
        r0 += "####";
        r0 += scalar2xml( v4 );
        r0 += scalar2xml( v5 );
        r0 += " (";
        r0 += v8;
        r0 += ")";
        r0 += " ";
        r0 += v6;
        r0 += "\n\n";
        r0 += scalar2xml( (yr.externals['mdox-string-trim'])(xml2scalar( v7 )) );
        if ((!(yr.externals['mdox-string-empty'])(v14))) {
            r0 += "\n\n";
            r0 += ">";
            r0 += " *Access:* ";
            r0 += "`";
            r0 += scalar2xml( v14 );
            r0 += "`";
        }
        if ((!(yr.externals['mdox-string-empty'])(nodeset2scalar( v15 )))) {
            r0 += "\n\n";
            r0 += ">";
            r0 += " *Alias:* ";
            r0 += "`";
            r0 += nodeset2xml( v15 );
            r0 += "`";
        }
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v10 )))) {
            r0 += "\n\n";
            r0 += ">";
            r0 += " *Arguments:*";
            r0 += "\n\n";
            r0 += v10;
        }
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v11 )))) {
            r0 += "\n\n";
            r0 += ">";
            r0 += " *Returns:*";
            r0 += "\n\n";
            r0 += v11;
        }
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v9 )))) {
            r0 += "\n\n";
            r0 += ">";
            r0 += " *Exceptions:*";
            r0 += "\n\n";
            r0 += v9;
        }
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v12 )))) {
            r0 += "\n\n";
            r0 += ">";
            r0 += " *Fires:*";
            r0 += "\n\n";
            r0 += v12;
        }
        if ((!(yr.externals['mdox-string-empty'])(v13))) {
            r0 += "\n\n";
            r0 += "##### **Example**";
            r0 += "\n\n";
            r0 += scalar2xml( v13 );
        }
        r0 += "\n\n";

        return r0;
    };
    M.t2.j = j16;
    M.t2.a = 0;

    // match .comments[ .tags.type == "class" || .tags.type == "classdesc" || .tags.type == "constructor" || .tags.type == "namespace" || .tags.type == "mixin" || .tags.type == "lends" ] : item-comment
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var is-deprecated : boolean
        var v16 = nodeset2boolean( m.s(j17, c0) );

        //  var name : scalar
        var r1 = '';
        var a1 = { a: {} };
        r1 += " *";
        if ((v16)) {
            r1 += "~~";
        }
        if (nodeset2boolean( (m.s(j50, c0)) )) {
            r1 += nodeset2scalar( m.s(j50, c0) );
        } else if (nodeset2boolean( (m.s(j47, c0)) )) {
            r1 += nodeset2scalar( m.s(j47, c0) );
        } else if (nodeset2boolean( (m.s(j48, c0)) )) {
            r1 += nodeset2scalar( m.s(j48, c0) );
        } else if (nodeset2boolean( (m.s(j49, c0)) )) {
            r1 += nodeset2scalar( m.s(j49, c0) );
        } else if (nodeset2boolean( (m.s(j29, c0)) )) {
            r1 += nodeset2scalar( m.s(j29, c0) );
        } else {
            r1 += "Undefined";
        }
        if ((v16)) {
            r1 += "~~";
        }
        r1 += "*";
        var v17 = r1;

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
        var v18 = r1;

        //  var description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j32, c0), 'item-tag', a1)
        r1 += closeAttrs(a1);
        if (nodeset2boolean( (m.s(j51, c0)) )) {
            r1 += "\n\n";
            r1 += m.a(m, m.s(j51, c0), 'item-tag', a1)
        }
        if (nodeset2boolean( (m.s(j9, c0)) )) {
            r1 += "\n\n";
            r1 += m.a(m, m.s(j9, c0), 'item-tag', a1)
        }
        if (nodeset2boolean( (m.s(j10, c0)) )) {
            r1 += "\n\n";
            r1 += m.a(m, m.s(j10, c0), 'item-tag', a1)
        }
        if (nodeset2boolean( (m.s(j11, c0)) )) {
            r1 += "\n\n";
            r1 += nodeset2xml( m.s(j11, c0) );
        }
        var v19 = r1;

        //  var example : scalar
        var r1 = '';
        var a1 = { a: {} };
        var items0 = (m.s(j39, c0));
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
        var v20 = r1;

        r0 += closeAttrs(a0);
        r0 += "###";
        r0 += scalar2xml( v17 );
        r0 += " ";
        r0 += v18;
        r0 += "\n\n";
        r0 += scalar2xml( (yr.externals['mdox-string-trim'])(xml2scalar( v19 )) );
        if ((!(yr.externals['mdox-string-empty'])(v20))) {
            r0 += "\n\n";
            r0 += "##### **Example**";
            r0 += "\n\n";
            r0 += scalar2xml( v20 );
        }
        r0 += "\n\n";

        return r0;
    };
    M.t3.j = j46;
    M.t3.a = 0;

    // match .comments[ .tags.type == "module" ] : item-comment
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var is-deprecated : boolean
        var v21 = nodeset2boolean( m.s(j17, c0) );

        //  var types : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j31, c0), 'mdox-tag-types', a1, (function() {
            var r1 = [];
            var a1 = { a: {} };
            r1.push("module");

            return r1;
        })())
        var v22 = r1;

        //  var name : scalar
        var r1 = '';
        var a1 = { a: {} };
        r1 += " ";
        if ((v21)) {
            r1 += "~~";
        }
        r1 += nodeset2scalar( m.s(j53, c0) );
        if ((v21)) {
            r1 += "~~";
        }
        var v23 = r1;

        //  var description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j9, c0), 'item-tag', a1)
        r1 += closeAttrs(a1);
        r1 += "\n\n";
        r1 += m.a(m, m.s(j10, c0), 'item-tag', a1)
        r1 += "\n\n";
        r1 += nodeset2xml( m.s(j11, c0) );
        var v24 = r1;

        //  var example : scalar
        var r1 = '';
        var a1 = { a: {} };
        var items0 = (m.s(j39, c0));
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
        var v25 = r1;

        r0 += closeAttrs(a0);
        r0 += "##";
        r0 += scalar2xml( v23 );
        r0 += " ";
        r0 += v22;
        r0 += "\n\n";
        r0 += scalar2xml( (yr.externals['mdox-string-trim'])(xml2scalar( v24 )) );
        if ((!(yr.externals['mdox-string-empty'])(v25))) {
            r0 += "\n\n";
            r0 += "##### **Example**";
            r0 += "\n\n";
            r0 += scalar2xml( v25 );
        }
        r0 += "\n\n";

        return r0;
    };
    M.t4.j = j52;
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
