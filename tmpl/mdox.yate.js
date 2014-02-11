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

    var j6 = [ 0, 'tags' ];

    var j7 = [ 0, 'description' ];

    var j8 = [ 0, 'description', 0, 'full' ];

    function p2(m, c0, i0, l0) {
        return cmpSN("example", selectNametest('type', c0, []));
    }

    var j9 = [ 0, 'tags', 2, p2 ];

    var j10 = [ 0, 'title' ];

    function p3(m, c0, i0, l0) {
        return cmpSN("private", selectNametest('type', c0, []));
    }

    var j11 = [ 0, 'tags', 2, p3 ];

    function p4(m, c0, i0, l0) {
        return cmpSN("protected", selectNametest('type', c0, []));
    }

    var j12 = [ 0, 'tags', 2, p4 ];

    function p5(m, c0, i0, l0) {
        return cmpSN("public", selectNametest('type', c0, []));
    }

    var j13 = [ 0, 'tags', 2, p5 ];

    function p6(m, c0, i0, l0) {
        return cmpSN("access", selectNametest('type', c0, []));
    }

    var j14 = [ 0, 'tags', 2, p6, 0, 'access' ];

    var j16 = [ 0, 'optional' ];

    var j17 = [ 0, 'name' ];

    var j18 = [ 0, 'nullable' ];

    var j19 = [ 0, 'nonNullable' ];

    var j20 = [ 0, 'default' ];

    function p9(m, c0, i0, l0) {
        return cmpSN("classdesc", selectNametest('type', c0, [])) || cmpSN("description", selectNametest('type', c0, [])) || cmpSN("desc", selectNametest('type', c0, [])) || cmpSN("file", selectNametest('type', c0, [])) || cmpSN("overview", selectNametest('type', c0, [])) || cmpSN("fileoverview", selectNametest('type', c0, [])) || cmpSN("summary", selectNametest('type', c0, []));
    }

    var j22 = [ 0, 'tags', 2, p9 ];

    function p10(m, c0, i0, l0) {
        return cmpSN("module", selectNametest('type', c0, []));
    }

    var j23 = [ 0, 'tags', 2, p10 ];

    function p11(m, c0, i0, l0) {
        return cmpSN("version", selectNametest('type', c0, []));
    }

    var j24 = [ 0, 'tags', 2, p11 ];

    function p12(m, c0, i0, l0) {
        return cmpSN("copyright", selectNametest('type', c0, []));
    }

    var j25 = [ 0, 'tags', 2, p12 ];

    function p13(m, c0, i0, l0) {
        return cmpSN("author", selectNametest('type', c0, []));
    }

    var j26 = [ 0, 'tags', 2, p13 ];

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

    // match .* : tags-flags
    M.t2 = function t2(m, c0, i0, l0, a0, v2) {
        var r0 = '';

        function p1(m, c0, i0, l0) {
            return (yr.externals['mdox-array-inarray'])(simpleScalar('type', c0), v2);
        }

        var j5 = [ 0, 'tags', 2, p1 ];

        r0 += m.a(m, m.s(j5, c0), 'tags-flags-str', a0)

        return r0;
    };
    M.t2.j = j0;
    M.t2.a = 0;

    // match .* : tags-flags-str
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "`" + nodeset2xml( ( selectNametest('type', c0, []) ) ) + "` ";

        return r0;
    };
    M.t3.j = j0;
    M.t3.a = 0;

    // match .* : description
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var tags-type : array
        var r1 = [];
        var a1 = { a: {} };
        r1.push("summary");
        r1.push("classdesc");
        r1.push("desc");
        r1.push("description");
        var v3 = r1;

        //  var description : scalar
        var r1 = '';
        var a1 = { a: {} };
        var items0 = (selectNametest('tags', c0, []));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if (((yr.externals['mdox-array-inarray'])(simpleScalar('type', c1), v3) && simpleBoolean('description', c1))) {
                r1 += simpleScalar('description', c1);
                r1 += "\n\n";
            }
        }
        if (nodeset2boolean( (m.s(j8, c0)) )) {
            r1 += nodeset2scalar( m.s(j8, c0) );
            r1 += "\n\n";
        }
        var v4 = r1;

        r0 += closeAttrs(a0);
        r0 += scalar2xml( (yr.externals['mdox-string-trim'])(v4) );

        return r0;
    };
    M.t4.j = j0;
    M.t4.a = 0;

    // match .* : example
    M.t5 = function t5(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var example : scalar
        var r1 = '';
        var a1 = { a: {} };
        var items0 = (m.s(j9, c0));
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
        var v5 = r1;

        r0 += closeAttrs(a0);
        if ((!(yr.externals['mdox-string-empty'])(v5))) {
            r0 += "\n\n";
            r0 += "##### **Example**";
            r0 += "\n\n";
            r0 += scalar2xml( v5 );
        }

        return r0;
    };
    M.t5.j = j0;
    M.t5.a = 0;

    // match .* : access
    M.t6 = function t6(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var access : scalar
        var r1 = '';
        var a1 = { a: {} };
        if (nodeset2boolean( (m.s(j14, c0)) )) {
            r1 += nodeset2scalar( m.s(j14, c0) );
        } else if (nodeset2boolean( (m.s(j11, c0)) )) {
            r1 += "private";
        } else if (nodeset2boolean( (m.s(j12, c0)) )) {
            r1 += "protected";
        } else if (nodeset2boolean( (m.s(j13, c0)) )) {
            r1 += "public";
        }
        var v6 = r1;

        r0 += closeAttrs(a0);
        if ((!(yr.externals['mdox-string-empty'])(v6))) {
            r0 += "`" + scalar2xml( ( v6 ) ) + "` ";
        }

        return r0;
    };
    M.t6.j = j0;
    M.t6.a = 0;

    // match .* : argument-description
    M.t7 = function t7(m, c0, i0, l0, a0, v7) {
        var r0 = '';

        function p7(m, c0, i0, l0) {
            return (yr.externals['mdox-array-inarray'])(simpleScalar('type', c0), v7);
        }

        var j15 = [ 0, 'tags', 2, p7 ];

        r0 += closeAttrs(a0);
        var items0 = (m.s(j15, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r0 += "\n";
            }
            r0 += " - ";
            if (nodeset2boolean( (selectNametest('optional', c1, [])) )) {
                r0 += "[";
            }
            r0 += nodeset2xml( selectNametest('name', c1, []) );
            r0 += " ";
            r0 += m.a(m, m.s(j4, c1), 'mdox-tag-types-str', a0)
            if (nodeset2boolean( (selectNametest('nonNullable', c1, [])) )) {
                r0 += " `non nullable`";
            } else if (nodeset2boolean( (selectNametest('nullable', c1, [])) )) {
                r0 += " `nullable`";
            }
            if (nodeset2boolean( (selectNametest('optional', c1, [])) )) {
                r0 += "]";
            }
            if (nodeset2boolean( (selectNametest('default', c1, [])) )) {
                r0 += " = ``";
                r0 += nodeset2xml( selectNametest('default', c1, []) );
                r0 += "``";
            }
            if (nodeset2boolean( (selectNametest('description', c1, [])) )) {
                r0 += " : ";
                r0 += nodeset2xml( selectNametest('description', c1, []) );
            }
        }

        return r0;
    };
    M.t7.j = j0;
    M.t7.a = 0;

    // match .* : type-description
    M.t8 = function t8(m, c0, i0, l0, a0, v8) {
        var r0 = '';

        function p8(m, c0, i0, l0) {
            return (yr.externals['mdox-array-inarray'])(simpleScalar('type', c0), v8);
        }

        var j21 = [ 0, 'tags', 2, p8 ];

        r0 += closeAttrs(a0);
        var items0 = (m.s(j21, c0));
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            if ((i1 != 0)) {
                r0 += "\n";
            }
            r0 += " - ";
            r0 += m.a(m, m.s(j4, c1), 'mdox-tag-types-str', a0)
            if (nodeset2boolean( (selectNametest('description', c1, [])) )) {
                r0 += " : ";
                r0 += nodeset2xml( selectNametest('description', c1, []) );
            }
        }

        return r0;
    };
    M.t8.j = j0;
    M.t8.a = 0;

    // match .tags[ .type == "classdesc" || .type == "description" || .type == "desc" || .type == "file" || .type == "overview" || .type == "fileoverview" || .type == "summary" ] : item-tag
    M.t9 = function t9(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('description', c0, []) );

        return r0;
    };
    M.t9.j = j22;
    M.t9.a = 0;

    // match .tags[ .type == "module" ] : item-tag
    M.t10 = function t10(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('name', c0, []) );

        return r0;
    };
    M.t10.j = j23;
    M.t10.a = 0;

    // match .tags[ .type == "version" ] : item-tag
    M.t11 = function t11(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "*Version*: ";
        r0 += "`";
        r0 += nodeset2xml( selectNametest('description', c0, []) );
        r0 += "`";

        return r0;
    };
    M.t11.j = j24;
    M.t11.a = 0;

    // match .tags[ .type == "copyright" ] : item-tag
    M.t12 = function t12(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "© ";
        r0 += nodeset2xml( selectNametest('description', c0, []) );

        return r0;
    };
    M.t12.j = j25;
    M.t12.a = 0;

    // match .tags[ .type == "author" ] : item-tag
    M.t13 = function t13(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "*Author*: ";
        r0 += nodeset2xml( selectNametest('description', c0, []) );

        return r0;
    };
    M.t13.j = j26;
    M.t13.a = 0;

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
        "tags-flags": {
            "*": [
                "t2"
            ]
        },
        "tags-flags-str": {
            "*": [
                "t3"
            ]
        },
        "description": {
            "*": [
                "t4"
            ]
        },
        "example": {
            "*": [
                "t5"
            ]
        },
        "access": {
            "*": [
                "t6"
            ]
        },
        "argument-description": {
            "*": [
                "t7"
            ]
        },
        "type-description": {
            "*": [
                "t8"
            ]
        },
        "item-tag": {
            "tags": [
                "t13",
                "t12",
                "t11",
                "t10",
                "t9"
            ]
        }
    };
    M.imports = [];

    yr.register('mdox', M);

})();
