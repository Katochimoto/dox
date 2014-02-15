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

    var j3 = [ 0, 'matchCtx', 0, 'type' ];

    function p0(m, c0, i0, l0) {
        return !nodeset2boolean( (selectNametest('ignore', c0, [])) ) && !(cmpSN("ignore", m.s(j2, c0))) && cmpSN("file", m.s(j3, c0));
    }

    var j4 = [ 0, 'data', 2, p0 ];

    function p1(m, c0, i0, l0) {
        return !nodeset2boolean( (selectNametest('ignore', c0, [])) ) && !(cmpSN("ignore", m.s(j2, c0))) && cmpSN("global", m.s(j2, c0));
    }

    var j5 = [ 0, 'data', 2, p1 ];

    function p2(m, c0, i0, l0) {
        return !nodeset2boolean( (selectNametest('ignore', c0, [])) ) && !(cmpSN("ignore", m.s(j2, c0))) && !(cmpSN("global", m.s(j2, c0))) && !(cmpSN("file", m.s(j3, c0)));
    }

    var j6 = [ 0, 'data', 2, p2 ];

    function p3(m, c0, i0, l0) {
        return !nodeset2boolean( (m.s(j3, c0)) );
    }

    var j7 = [ 0, 'data', 2, p3 ];

    function p4(m, c0, i0, l0) {
        return cmpSN("file", m.s(j3, c0));
    }

    var j8 = [ 0, 'data', 2, p4 ];

    var j9 = [ 0, 'matchCtx', 0, 'name' ];

    var j10 = [ 1, 0 ];

    var j11 = [ 0, 'type' ];

    function p5(m, c0, i0, l0) {
        return cmpSN("version", selectNametest('type', c0, []));
    }

    var j12 = [ 0, 'tags', 2, p5, 0, 'description' ];

    function p6(m, c0, i0, l0) {
        return cmpSN("author", selectNametest('type', c0, []));
    }

    var j13 = [ 0, 'tags', 2, p6, 0, 'description' ];

    function p7(m, c0, i0, l0) {
        return cmpSN("copyright", selectNametest('type', c0, []));
    }

    var j14 = [ 0, 'tags', 2, p7, 0, 'description' ];

    function p8(m, c0, i0, l0) {
        return cmpSN("prop", m.s(j3, c0));
    }

    var j15 = [ 0, 'data', 2, p8 ];

    var j16 = [ 0, 'matchCtx', 0, 'context' ];

    function p9(m, c0, i0, l0) {
        return cmpSN("static", selectNametest('type', c0, []));
    }

    var j17 = [ 0, 'tags', 2, p9 ];

    function p10(m, c0, i0, l0) {
        return cmpSN("const", selectNametest('type', c0, []));
    }

    var j18 = [ 0, 'tags', 2, p10 ];

    var j19 = [ 0, 'kind' ];

    function p11(m, c0, i0, l0) {
        return cmpSN("member", selectNametest('type', c0, [])) || cmpSN("member", selectNametest('kind', c0, []));
    }

    var j20 = [ 0, 'tags', 2, p11 ];

    function p12(m, c0, i0, l0) {
        return cmpSN("var", selectNametest('type', c0, []));
    }

    var j21 = [ 0, 'tags', 2, p12 ];

    function p13(m, c0, i0, l0) {
        return cmpSN("enum", selectNametest('type', c0, []));
    }

    var j22 = [ 0, 'tags', 2, p13 ];

    function p14(m, c0, i0, l0) {
        return cmpSN("property", selectNametest('type', c0, []));
    }

    var j23 = [ 0, 'ctx', 2, p14 ];

    function p15(m, c0, i0, l0) {
        return cmpSN("declaration", selectNametest('type', c0, []));
    }

    var j24 = [ 0, 'ctx', 2, p15 ];

    function p16(m, c0, i0, l0) {
        return cmpSN("constant", selectNametest('type', c0, [])) || cmpSN("constant", selectNametest('kind', c0, []));
    }

    var j25 = [ 0, 'tags', 2, p16 ];

    var j26 = [ 0, 'ctx', 2, p15, 0, 'value' ];

    var j27 = [ 0, 'ctx', 2, p14, 0, 'value' ];

    function p17(m, c0, i0, l0) {
        return cmpSN("title", selectNametest('type', c0, []));
    }

    var j28 = [ 0, 'tags', 2, p17, 0, 'description' ];

    function p18(m, c0, i0, l0) {
        return cmpSN("alias", selectNametest('type', c0, []));
    }

    var j29 = [ 0, 'tags', 2, p18, 0, 'name' ];

    function p19(m, c0, i0, l0) {
        return cmpSN("func", m.s(j3, c0));
    }

    var j30 = [ 0, 'data', 2, p19 ];

    function p20(m, c0, i0, l0) {
        return cmpSN("callback", selectNametest('type', c0, []));
    }

    var j31 = [ 0, 'tags', 2, p20 ];

    function p21(m, c0, i0, l0) {
        return cmpSN("func", selectNametest('type', c0, []));
    }

    var j32 = [ 0, 'tags', 2, p21 ];

    function p22(m, c0, i0, l0) {
        return cmpSN("function", selectNametest('type', c0, []));
    }

    var j33 = [ 0, 'tags', 2, p22, 0, 'name' ];

    function p23(m, c0, i0, l0) {
        return cmpSN("method", selectNametest('type', c0, []));
    }

    var j34 = [ 0, 'tags', 2, p23, 0, 'name' ];

    function p24(m, c0, i0, l0) {
        return cmpSN("event", selectNametest('type', c0, [])) || cmpSN("event", selectNametest('kind', c0, []));
    }

    var j35 = [ 0, 'tags', 2, p24 ];

    var j36 = [ 0, 'ctx', 2, p23, 0, 'name' ];

    var j37 = [ 0, 'ctx', 2, p22, 0, 'name' ];

    function p25(m, c0, i0, l0) {
        return cmpSN("constructs", selectNametest('type', c0, []));
    }

    var j38 = [ 0, 'tags', 2, p25 ];

    var j39 = [ 0, 'original' ];

    var j40 = [ 0, 'name' ];

    function p26(m, c0, i0, l0) {
        return (cmpSN("param", selectNametest('type', c0, [])) || cmpSN("arg", selectNametest('type', c0, [])) || cmpSN("argument", selectNametest('type', c0, []))) && cmpNN(selectNametest('original', c0, []), selectNametest('name', c0, []));
    }

    var j41 = [ 0, 'tags', 2, p26 ];

    var j42 = [ 0, 'optional' ];

    function p27(m, c0, i0, l0) {
        return cmpSN("fires", selectNametest('type', c0, [])) || cmpSN("emits", selectNametest('type', c0, []));
    }

    var j43 = [ 0, 'tags', 2, p27 ];

    var j44 = [ 0, 'description' ];

    function p28(m, c0, i0, l0) {
        return cmpSN("this", selectNametest('type', c0, []));
    }

    var j45 = [ 0, 'tags', 2, p28, 0, 'name' ];

    function p29(m, c0, i0, l0) {
        return cmpSN("class", m.s(j3, c0)) || cmpSN("module", m.s(j3, c0));
    }

    var j46 = [ 0, 'data', 2, p29 ];

    function p30(m, c0, i0, l0) {
        return cmpSN("constructor", selectNametest('type', c0, []));
    }

    var j47 = [ 0, 'tags', 2, p30 ];

    function p31(m, c0, i0, l0) {
        return cmpSN("module", selectNametest('type', c0, [])) || cmpSN("module", selectNametest('kind', c0, []));
    }

    var j48 = [ 0, 'tags', 2, p31 ];

    function p32(m, c0, i0, l0) {
        return cmpSN("namespace", selectNametest('type', c0, [])) || cmpSN("namespace", selectNametest('kind', c0, []));
    }

    var j49 = [ 0, 'tags', 2, p32 ];

    function p33(m, c0, i0, l0) {
        return cmpSN("mixin", selectNametest('type', c0, [])) || cmpSN("mixin", selectNametest('kind', c0, []));
    }

    var j50 = [ 0, 'tags', 2, p33 ];

    function p34(m, c0, i0, l0) {
        return cmpSN("typedef", selectNametest('type', c0, [])) || cmpSN("typedef", selectNametest('kind', c0, []));
    }

    var j51 = [ 0, 'tags', 2, p34 ];

    function p35(m, c0, i0, l0) {
        return cmpSN("external", selectNametest('type', c0, [])) || cmpSN("external", selectNametest('kind', c0, []));
    }

    var j52 = [ 0, 'tags', 2, p35 ];

    function p36(m, c0, i0, l0) {
        return cmpSN("class", selectNametest('type', c0, [])) || cmpSN("class", selectNametest('kind', c0, []));
    }

    var j53 = [ 0, 'tags', 2, p36 ];

    // match / : comments
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, m.s(j4, c0), 'item-comment', a0)
        r0 += m.a(m, m.s(j5, c0), 'item-comment', a0)
        r0 += m.a(m, m.s(j6, c0), 'item-comment', a0)
        r0 += closeAttrs(a0);
        r0 += "\n\n[TOC]\n\n";

        return r0;
    };
    M.t0.j = 1;
    M.t0.a = 1;

    // match / : toc
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "[Publish a document](qwe/qqwe.asd)";
        r0 += "&gt; asdasd";

        return r0;
    };
    M.t1.j = 1;
    M.t1.a = 1;

    // match .data[ !( .matchCtx.type ) ] : item-comment
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';

        return r0;
    };
    M.t2.j = j7;
    M.t2.a = 0;

    // match .data[ .matchCtx.type == "file" ] : item-comment
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "# ";
        if (nodeset2boolean( (m.s(j9, c0)) )) {
            r0 += nodeset2xml( m.s(j9, c0) );
        } else {
            r0 += "Undefined";
        }
        r0 += "\n\n";
        r0 += m.a(m, m.s(j10, c0), 'access', a0)
        r0 += m.a(m, m.s(j10, c0), 'tags-flags', a0, (function() {
            var r0 = [];
            var a0 = { a: {} };
            r0.push("deprecated");

            return r0;
        })())
        if (nodeset2boolean( (m.s(j12, c0)) )) {
            r0 += "`Version: " + nodeset2xml( ( m.s(j12, c0) ) ) + "` ";
        }
        if (nodeset2boolean( (m.s(j13, c0)) )) {
            r0 += "`Author: " + nodeset2xml( ( m.s(j13, c0) ) ) + "` ";
        }
        r0 += "\n\n";
        if (nodeset2boolean( (m.s(j14, c0)) )) {
            r0 += "© ";
            r0 += nodeset2xml( m.s(j14, c0) );
            r0 += "\n\n";
        }
        r0 += m.a(m, m.s(j10, c0), 'description', a0)
        r0 += m.a(m, m.s(j10, c0), 'example', a0)
        r0 += "\n\n";

        return r0;
    };
    M.t3.j = j8;
    M.t3.a = 0;

    // match .data[ .matchCtx.type == "prop" ] : item-comment
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var context : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j16, c0)) )) {
            r1 += nodeset2scalar( m.s(j16, c0) );
        } else {
            r1 += "";
        }
        var v0 = r1;

        //  var context-sep : scalar
        var r1 = '';
        var a1 = { a: {} };
        if ((!(yr.externals['mdox-string-empty'])(v0))) {
            r1 += " *";
            r1 += v0;
            if (nodeset2boolean( (m.s(j17, c0)) )) {
                r1 += ":";
            } else {
                r1 += ".";
            }
            r1 += "*";
        } else {
            r1 += "";
        }
        var v1 = r1;

        //  var name-type : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j25, c0)) )) {
            r1 += "Constant";
        } else if (nodeset2boolean( (m.s(j18, c0)) )) {
            r1 += "Constant";
        } else if (nodeset2boolean( (m.s(j20, c0)) )) {
            r1 += "Var";
        } else if (nodeset2boolean( (m.s(j21, c0)) )) {
            r1 += "Var";
        } else if (nodeset2boolean( (m.s(j22, c0)) )) {
            r1 += "Enum";
        } else if (nodeset2boolean( (m.s(j23, c0)) )) {
            r1 += "Property";
        } else if (nodeset2boolean( (m.s(j24, c0)) )) {
            r1 += "Var";
        } else {
            r1 += "";
        }
        var v2 = r1;

        //  var name : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j9, c0)) )) {
            r1 += nodeset2scalar( m.s(j9, c0) );
        } else {
            r1 += "Undefined";
        }
        var v3 = r1;

        //  var name-context : scalar
        var r1 = '';
        var a1 = { a: {} };
        r1 += " **" + ( v3 ) + "**";
        var v4 = r1;

        //  var types : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j10, c0), 'mdox-tag-types', a1, (function() {
            var r1 = [];
            var a1 = { a: {} };
            r1.push("type");
            r1.push("constant");
            r1.push("const");
            r1.push("member");
            r1.push("var");
            r1.push("enum");

            return r1;
        })())
        var v5 = r1;

        //  var value : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j27, c0)) )) {
            r1 += nodeset2scalar( m.s(j27, c0) );
        } else if (nodeset2boolean( (m.s(j26, c0)) )) {
            r1 += nodeset2scalar( m.s(j26, c0) );
        } else {
            r1 += "";
        }
        var v6 = r1;

        r0 += closeAttrs(a0);
        r0 += "#### ";
        if (nodeset2boolean( (m.s(j28, c0)) )) {
            r0 += nodeset2xml( m.s(j28, c0) );
        } else {
            if ((!(yr.externals['mdox-string-empty'])(v2))) {
                r0 += scalar2xml( v2 );
                r0 += ": ";
            }
            r0 += scalar2xml( v3 );
        }
        r0 += "\n\n";
        r0 += scalar2xml( v1 );
        r0 += scalar2xml( v4 );
        r0 += " ";
        r0 += v5;
        if ((!(yr.externals['mdox-string-empty'])(v6))) {
            r0 += " = ";
            r0 += "``";
            r0 += scalar2xml( v6 );
            r0 += "``";
        }
        r0 += "\n\n";
        r0 += "***";
        r0 += "\n\n";
        r0 += m.a(m, m.s(j10, c0), 'access', a0)
        r0 += m.a(m, m.s(j10, c0), 'tags-flags', a0, (function() {
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
        if ((!(yr.externals['mdox-string-empty'])(nodeset2scalar( m.s(j29, c0) )))) {
            r0 += "`Alias: " + nodeset2xml( ( m.s(j29, c0) ) ) + "` ";
        }
        r0 += "\n\n";
        r0 += m.a(m, m.s(j10, c0), 'description', a0)
        r0 += m.a(m, m.s(j10, c0), 'example', a0)
        r0 += "\n\n";

        return r0;
    };
    M.t4.j = j15;
    M.t4.a = 0;

    // match .data[ .matchCtx.type == "func" ] : item-comment
    M.t5 = function t5(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var context : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j16, c0)) )) {
            r1 += nodeset2scalar( m.s(j16, c0) );
        } else {
            r1 += "";
        }
        var v7 = r1;

        //  var context-sep : scalar
        var r1 = '';
        var a1 = { a: {} };
        if ((!(yr.externals['mdox-string-empty'])(v7))) {
            r1 += " *";
            r1 += v7;
            if (nodeset2boolean( (m.s(j17, c0)) )) {
                r1 += ":";
            } else {
                r1 += ".";
            }
            r1 += "*";
        } else {
            r1 += "";
        }
        var v8 = r1;

        //  var name-type : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j38, c0)) )) {
            r1 += "Constructor";
        } else if (nodeset2boolean( (m.s(j31, c0)) )) {
            r1 += "Callback";
        } else if (nodeset2boolean( (m.s(j32, c0)) )) {
            r1 += "Function";
        } else if (nodeset2boolean( (m.s(j33, c0)) )) {
            r1 += "Function";
        } else if (nodeset2boolean( (m.s(j34, c0)) )) {
            r1 += "Method";
        } else if (nodeset2boolean( (m.s(j35, c0)) )) {
            r1 += "Event";
        } else if (nodeset2boolean( (m.s(j36, c0)) )) {
            r1 += "Method";
        } else if (nodeset2boolean( (m.s(j37, c0)) )) {
            r1 += "Function";
        } else {
            r1 += "";
        }
        var v9 = r1;

        //  var name : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j9, c0)) )) {
            r1 += nodeset2scalar( m.s(j9, c0) );
        } else {
            r1 += "Undefined";
        }
        var v10 = r1;

        //  var name-context : scalar
        var r1 = '';
        var a1 = { a: {} };
        r1 += " **" + ( v10 ) + "**";
        var v11 = r1;

        //  var types : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j10, c0), 'mdox-tag-types', a1, (function() {
            var r1 = [];
            var a1 = { a: {} };
            r1.push("return");
            r1.push("returns");

            return r1;
        })())
        var v12 = r1;

        //  var args : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += closeAttrs(a1);
        var items0 = (m.s(j41, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += ", ";
            }
            if (nodeset2boolean( (selectNametest('optional', c1, [])) )) {
                r1 += "[";
            }
            r1 += m.a(m, m.s(j10, c1), 'mdox-tag-types-str', a1)
            r1 += " ";
            r1 += nodeset2xml( selectNametest('name', c1, []) );
            if (nodeset2boolean( (selectNametest('optional', c1, [])) )) {
                r1 += "]";
            }
        }
        var v13 = r1;

        //  var throws-description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j10, c0), 'type-description', a1, (function() {
            var r1 = [];
            var a1 = { a: {} };
            r1.push("throws");
            r1.push("exception");

            return r1;
        })())
        var v14 = r1;

        //  var return-description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j10, c0), 'type-description', a1, (function() {
            var r1 = [];
            var a1 = { a: {} };
            r1.push("return");
            r1.push("returns");

            return r1;
        })())
        var v15 = r1;

        //  var fires-description : scalar
        var r1 = '';
        var a1 = { a: {} };
        var items0 = (m.s(j43, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r1 += "\n";
            }
            r1 += " - ";
            r1 += simpleScalar('description', c1);
        }
        var v16 = r1;

        //  var args-description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j10, c0), 'argument-description', a1, (function() {
            var r1 = [];
            var a1 = { a: {} };
            r1.push("param");
            r1.push("arg");
            r1.push("argument");

            return r1;
        })())
        var v17 = r1;

        //  var prop-description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j10, c0), 'argument-description', a1, (function() {
            var r1 = [];
            var a1 = { a: {} };
            r1.push("property");

            return r1;
        })())
        var v18 = r1;

        r0 += closeAttrs(a0);
        r0 += "#### ";
        if (nodeset2boolean( (m.s(j28, c0)) )) {
            r0 += nodeset2xml( m.s(j28, c0) );
        } else {
            if ((!(yr.externals['mdox-string-empty'])(v9))) {
                r0 += scalar2xml( v9 );
                r0 += ": ";
            }
            r0 += scalar2xml( v10 );
        }
        r0 += "\n\n";
        r0 += scalar2xml( v8 );
        r0 += scalar2xml( v11 );
        r0 += " (";
        r0 += v13;
        r0 += ")";
        r0 += " ";
        r0 += v12;
        r0 += "\n\n";
        r0 += "***";
        r0 += "\n\n";
        r0 += m.a(m, m.s(j10, c0), 'access', a0)
        r0 += m.a(m, m.s(j10, c0), 'tags-flags', a0, (function() {
            var r0 = [];
            var a0 = { a: {} };
            r0.push("deprecated");
            r0.push("instance");
            r0.push("global");
            r0.push("static");
            r0.push("inner");

            return r0;
        })())
        if ((!(yr.externals['mdox-string-empty'])(nodeset2scalar( m.s(j29, c0) )))) {
            r0 += "`Alias: " + nodeset2xml( ( m.s(j29, c0) ) ) + "` ";
        }
        if ((!(yr.externals['mdox-string-empty'])(nodeset2scalar( m.s(j45, c0) )))) {
            r0 += "`This: " + nodeset2xml( ( m.s(j45, c0) ) ) + "` ";
        }
        r0 += "\n\n";
        r0 += m.a(m, m.s(j10, c0), 'description', a0)
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v17 )))) {
            r0 += "\n\n";
            r0 += "*Arguments:*";
            r0 += "\n";
            r0 += v17;
        }
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v18 )))) {
            r0 += "\n\n";
            r0 += "*Propertys:*";
            r0 += "\n";
            r0 += v18;
        }
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v15 )))) {
            r0 += "\n\n";
            r0 += "*Returns:*";
            r0 += "\n";
            r0 += v15;
        }
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v14 )))) {
            r0 += "\n\n";
            r0 += "*Exceptions:*";
            r0 += "\n";
            r0 += v14;
        }
        if ((!(yr.externals['mdox-string-empty'])(v16))) {
            r0 += "\n\n";
            r0 += "*Fires:*";
            r0 += "\n";
            r0 += scalar2xml( v16 );
        }
        r0 += m.a(m, m.s(j10, c0), 'example', a0)
        r0 += "\n\n";

        return r0;
    };
    M.t5.j = j30;
    M.t5.a = 0;

    // match .data[ .matchCtx.type == "class" || .matchCtx.type == "module" ] : item-comment
    M.t6 = function t6(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var name-type : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j53, c0)) )) {
            r1 += "Class";
        } else if (nodeset2boolean( (m.s(j47, c0)) )) {
            r1 += "Class";
        } else if (nodeset2boolean( (m.s(j48, c0)) )) {
            r1 += "Module";
        } else if (nodeset2boolean( (m.s(j49, c0)) )) {
            r1 += "Namespace";
        } else if (nodeset2boolean( (m.s(j50, c0)) )) {
            r1 += "Mixin";
        } else if (nodeset2boolean( (m.s(j51, c0)) )) {
            r1 += "Type";
        } else if (nodeset2boolean( (m.s(j52, c0)) )) {
            r1 += "External";
        } else {
            r1 += "";
        }
        var v19 = r1;

        //  var name : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j9, c0)) )) {
            r1 += nodeset2scalar( m.s(j9, c0) );
        } else {
            r1 += "Undefined";
        }
        var v20 = r1;

        //  var types : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j10, c0), 'mdox-tag-types', a1, (function() {
            var r1 = [];
            var a1 = { a: {} };
            r1.push("module");
            r1.push("class");
            r1.push("constructor");
            r1.push("namespace");
            r1.push("typedef");

            return r1;
        })())
        var v21 = r1;

        //  var prop-description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j10, c0), 'argument-description', a1, (function() {
            var r1 = [];
            var a1 = { a: {} };
            r1.push("property");

            return r1;
        })())
        var v22 = r1;

        //  var throws-description : xml
        var r1 = '';
        var a1 = { a: {} };
        r1 += m.a(m, m.s(j10, c0), 'type-description', a1, (function() {
            var r1 = [];
            var a1 = { a: {} };
            r1.push("throws");
            r1.push("exception");

            return r1;
        })())
        var v23 = r1;

        r0 += closeAttrs(a0);
        r0 += "### ";
        if (nodeset2boolean( (m.s(j28, c0)) )) {
            r0 += nodeset2xml( m.s(j28, c0) );
        } else {
            if ((!(yr.externals['mdox-string-empty'])(v19))) {
                r0 += scalar2xml( v19 );
                r0 += ": ";
            }
            r0 += scalar2xml( v20 );
        }
        r0 += "\n\n";
        r0 += "***";
        r0 += "\n\n";
        r0 += m.a(m, m.s(j10, c0), 'access', a0)
        r0 += m.a(m, m.s(j10, c0), 'tags-flags', a0, (function() {
            var r0 = [];
            var a0 = { a: {} };
            r0.push("deprecated");
            r0.push("instance");
            r0.push("global");
            r0.push("static");
            r0.push("inner");

            return r0;
        })())
        if ((v21)) {
            r0 += "\n\n";
            r0 += "**Type:** " + ( v21 );
        }
        r0 += "\n\n";
        r0 += m.a(m, m.s(j10, c0), 'description', a0)
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v22 )))) {
            r0 += "\n\n";
            r0 += "*Propertys:*";
            r0 += "\n";
            r0 += v22;
        }
        if ((!(yr.externals['mdox-string-empty'])(xml2scalar( v23 )))) {
            r0 += "\n\n";
            r0 += "*Exceptions:*";
            r0 += "\n";
            r0 += v23;
        }
        r0 += m.a(m, m.s(j10, c0), 'example', a0)
        r0 += "\n\n";

        return r0;
    };
    M.t6.j = j46;
    M.t6.a = 0;

    M.matcher = {
        "comments": {
            "": [
                "t0"
            ]
        },
        "toc": {
            "": [
                "t1"
            ]
        },
        "item-comment": {
            "data": [
                "t6",
                "t5",
                "t4",
                "t3",
                "t2"
            ]
        }
    };
    M.imports = ["mdox"];

    yr.register('default', M);

})();
