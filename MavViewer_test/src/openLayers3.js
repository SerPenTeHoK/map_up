/**
 * Created by SerP on 24.02.2016.
 */
// OpenLayers 3. See http://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/ol3/master/LICENSE.md
// Version: v3.7.0-38-g112473a

(function (root, factory) {
    if (typeof exports === "object") {
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        root.ol = factory();
    }
}(this, function () {
    var OPENLAYERS = {};
    var k, aa = aa || {}, ba = this;

    function m(b) {
        return void 0 !== b
    }

    function u(b, c, d) {
        b = b.split(".");
        d = d || ba;
        b[0] in d || !d.execScript || d.execScript("var " + b[0]);
        for (var e; b.length && (e = b.shift());)!b.length && m(c) ? d[e] = c : d[e] ? d = d[e] : d = d[e] = {}
    }

    function ca() {
    }

    function da(b) {
        b.Pa = function () {
            return b.sg ? b.sg : b.sg = new b
        }
    }

    function ea(b) {
        var c = typeof b;
        if ("object" == c)if (b) {
            if (b instanceof Array)return "array";
            if (b instanceof Object)return c;
            var d = Object.prototype.toString.call(b);
            if ("[object Window]" == d)return "object";
            if ("[object Array]" == d || "number" == typeof b.length && "undefined" != typeof b.splice && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("splice"))return "array";
            if ("[object Function]" == d || "undefined" != typeof b.call && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("call"))return "function"
        } else return "null";
        else if ("function" == c && "undefined" == typeof b.call)return "object";
        return c
    }

    function fa(b) {
        return null === b
    }

    function ga(b) {
        return "array" == ea(b)
    }

    function ha(b) {
        var c = ea(b);
        return "array" == c || "object" == c && "number" == typeof b.length
    }

    function ia(b) {
        return "string" == typeof b
    }

    function ja(b) {
        return "number" == typeof b
    }

    function ka(b) {
        return "function" == ea(b)
    }

    function la(b) {
        var c = typeof b;
        return "object" == c && null != b || "function" == c
    }

    function ma(b) {
        return b[na] || (b[na] = ++oa)
    }

    var na = "closure_uid_" + (1E9 * Math.random() >>> 0), oa = 0;

    function pa(b, c, d) {
        return b.call.apply(b.bind, arguments)
    }

    function qa(b, c, d) {
        if (!b)throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function () {
                var d = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(d, e);
                return b.apply(c, d)
            }
        }
        return function () {
            return b.apply(c, arguments)
        }
    }

    function ra(b, c, d) {
        ra = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? pa : qa;
        return ra.apply(null, arguments)
    }

    function sa(b, c) {
        var d = Array.prototype.slice.call(arguments, 1);
        return function () {
            var c = d.slice();
            c.push.apply(c, arguments);
            return b.apply(this, c)
        }
    }

    var ua = Date.now || function () {
            return +new Date
        };

    function w(b, c) {
        function d() {
        }

        d.prototype = c.prototype;
        b.$ = c.prototype;
        b.prototype = new d;
        b.prototype.constructor = b;
        b.Jo = function (b, d, g) {
            for (var h = Array(arguments.length - 2), l = 2; l < arguments.length; l++)h[l - 2] = arguments[l];
            return c.prototype[d].apply(b, h)
        }
    };
    var va, wa;

    function xa(b) {
        if (Error.captureStackTrace)Error.captureStackTrace(this, xa); else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        b && (this.message = String(b))
    }

    w(xa, Error);
    xa.prototype.name = "CustomError";
    var ya;

    function za(b, c) {
        var d = b.length - c.length;
        return 0 <= d && b.indexOf(c, d) == d
    }

    function Ba(b, c) {
        for (var d = b.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < d.length;)e += d.shift() + f.shift();
        return e + d.join("%s")
    }

    var Ca = String.prototype.trim ? function (b) {
        return b.trim()
    } : function (b) {
        return b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function Da(b) {
        if (!Ea.test(b))return b;
        -1 != b.indexOf("&") && (b = b.replace(Fa, "&amp;"));
        -1 != b.indexOf("<") && (b = b.replace(Ga, "&lt;"));
        -1 != b.indexOf(">") && (b = b.replace(Ha, "&gt;"));
        -1 != b.indexOf('"') && (b = b.replace(Ja, "&quot;"));
        -1 != b.indexOf("'") && (b = b.replace(Ka, "&#39;"));
        -1 != b.indexOf("\x00") && (b = b.replace(La, "&#0;"));
        return b
    }

    var Fa = /&/g, Ga = /</g, Ha = />/g, Ja = /"/g, Ka = /'/g, La = /\x00/g, Ea = /[\x00&<>"']/;

    function Ma(b) {
        b = m(void 0) ? b.toFixed(void 0) : String(b);
        var c = b.indexOf(".");
        -1 == c && (c = b.length);
        c = Math.max(0, 2 - c);
        return Array(c + 1).join("0") + b
    }

    function Na(b, c) {
        for (var d = 0, e = Ca(String(b)).split("."), f = Ca(String(c)).split("."), g = Math.max(e.length, f.length), h = 0; 0 == d && h < g; h++) {
            var l = e[h] || "", n = f[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
            do {
                var r = p.exec(l) || ["", "", ""], t = q.exec(n) || ["", "", ""];
                if (0 == r[0].length && 0 == t[0].length)break;
                d = Pa(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == t[1].length ? 0 : parseInt(t[1], 10)) || Pa(0 == r[2].length, 0 == t[2].length) || Pa(r[2], t[2])
            } while (0 == d)
        }
        return d
    }

    function Pa(b, c) {
        return b < c ? -1 : b > c ? 1 : 0
    };
    var Qa = Array.prototype;

    function Ra(b, c) {
        return Qa.indexOf.call(b, c, void 0)
    }

    function Sa(b, c, d) {
        Qa.forEach.call(b, c, d)
    }

    function Ta(b, c) {
        return Qa.filter.call(b, c, void 0)
    }

    function Ua(b, c, d) {
        return Qa.map.call(b, c, d)
    }

    function Va(b, c) {
        return Qa.some.call(b, c, void 0)
    }

    function Wa(b, c) {
        var d = Xa(b, c, void 0);
        return 0 > d ? null : ia(b) ? b.charAt(d) : b[d]
    }

    function Xa(b, c, d) {
        for (var e = b.length, f = ia(b) ? b.split("") : b, g = 0; g < e; g++)if (g in f && c.call(d, f[g], g, b))return g;
        return -1
    }

    function Ya(b, c) {
        return 0 <= Ra(b, c)
    }

    function Za(b, c) {
        var d = Ra(b, c), e;
        (e = 0 <= d) && Qa.splice.call(b, d, 1);
        return e
    }

    function ab(b) {
        return Qa.concat.apply(Qa, arguments)
    }

    function bb(b) {
        var c = b.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++)d[e] = b[e];
            return d
        }
        return []
    }

    function cb(b, c) {
        for (var d = 1; d < arguments.length; d++) {
            var e = arguments[d];
            if (ha(e)) {
                var f = b.length || 0, g = e.length || 0;
                b.length = f + g;
                for (var h = 0; h < g; h++)b[f + h] = e[h]
            } else b.push(e)
        }
    }

    function eb(b, c, d, e) {
        Qa.splice.apply(b, fb(arguments, 1))
    }

    function fb(b, c, d) {
        return 2 >= arguments.length ? Qa.slice.call(b, c) : Qa.slice.call(b, c, d)
    }

    function gb(b, c) {
        b.sort(c || hb)
    }

    function ib(b, c) {
        if (!ha(b) || !ha(c) || b.length != c.length)return !1;
        for (var d = b.length, e = jb, f = 0; f < d; f++)if (!e(b[f], c[f]))return !1;
        return !0
    }

    function hb(b, c) {
        return b > c ? 1 : b < c ? -1 : 0
    }

    function jb(b, c) {
        return b === c
    }

    function kb(b) {
        for (var c = [], d = 0; d < arguments.length; d++) {
            var e = arguments[d];
            if (ga(e))for (var f = 0; f < e.length; f += 8192)for (var g = kb.apply(null, fb(e, f, f + 8192)), h = 0; h < g.length; h++)c.push(g[h]); else c.push(e)
        }
        return c
    };
    var lb;
    a:{
        var mb = ba.navigator;
        if (mb) {
            var nb = mb.userAgent;
            if (nb) {
                lb = nb;
                break a
            }
        }
        lb = ""
    }
    function ob(b) {
        return -1 != lb.indexOf(b)
    };
    function pb(b, c, d) {
        for (var e in b)c.call(d, b[e], e, b)
    }

    function qb(b, c) {
        for (var d in b)if (c.call(void 0, b[d], d, b))return !0;
        return !1
    }

    function rb(b) {
        var c = 0, d;
        for (d in b)c++;
        return c
    }

    function sb(b) {
        var c = [], d = 0, e;
        for (e in b)c[d++] = b[e];
        return c
    }

    function tb(b) {
        var c = [], d = 0, e;
        for (e in b)c[d++] = e;
        return c
    }

    function ub(b, c) {
        return c in b
    }

    function vb(b, c) {
        for (var d in b)if (b[d] == c)return !0;
        return !1
    }

    function wb(b, c) {
        for (var d in b)if (c.call(void 0, b[d], d, b))return d
    }

    function xb(b) {
        for (var c in b)return !1;
        return !0
    }

    function yb(b) {
        for (var c in b)delete b[c]
    }

    function zb(b, c) {
        c in b && delete b[c]
    }

    function Ab(b, c, d) {
        return c in b ? b[c] : d
    }

    function Bb(b, c) {
        var d = [];
        return c in b ? b[c] : b[c] = d
    }

    function Db(b) {
        var c = {}, d;
        for (d in b)c[d] = b[d];
        return c
    }

    function Eb(b) {
        var c = ea(b);
        if ("object" == c || "array" == c) {
            if (b.clone)return b.clone();
            var c = "array" == c ? [] : {}, d;
            for (d in b)c[d] = Eb(b[d]);
            return c
        }
        return b
    }

    var Fb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Gb(b, c) {
        for (var d, e, f = 1; f < arguments.length; f++) {
            e = arguments[f];
            for (d in e)b[d] = e[d];
            for (var g = 0; g < Fb.length; g++)d = Fb[g], Object.prototype.hasOwnProperty.call(e, d) && (b[d] = e[d])
        }
    }

    function Hb(b) {
        var c = arguments.length;
        if (1 == c && ga(arguments[0]))return Hb.apply(null, arguments[0]);
        for (var d = {}, e = 0; e < c; e++)d[arguments[e]] = !0;
        return d
    };
    var Ib = ob("Opera") || ob("OPR"), Jb = ob("Trident") || ob("MSIE"), Kb = ob("Gecko") && -1 == lb.toLowerCase().indexOf("webkit") && !(ob("Trident") || ob("MSIE")), Lb = -1 != lb.toLowerCase().indexOf("webkit"), Mb = ob("Macintosh"), Nb = ob("Windows"), Ob = ob("Linux") || ob("CrOS");

    function Pb() {
        var b = ba.document;
        return b ? b.documentMode : void 0
    }

    var Qb = function () {
        var b = "", c;
        if (Ib && ba.opera)return b = ba.opera.version, ka(b) ? b() : b;
        Kb ? c = /rv\:([^\);]+)(\)|;)/ : Jb ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Lb && (c = /WebKit\/(\S+)/);
        c && (b = (b = c.exec(lb)) ? b[1] : "");
        return Jb && (c = Pb(), c > parseFloat(b)) ? String(c) : b
    }(), Rb = {};

    function Sb(b) {
        return Rb[b] || (Rb[b] = 0 <= Na(Qb, b))
    }

    var Tb = ba.document, Ub = Tb && Jb ? Pb() || ("CSS1Compat" == Tb.compatMode ? parseInt(Qb, 10) : 5) : void 0;
    var Vb = Jb && !Sb("9.0") && "" !== Qb;

    function Wb(b, c, d) {
        return Math.min(Math.max(b, c), d)
    }

    function Xb(b, c) {
        var d = b % c;
        return 0 > d * c ? d + c : d
    }

    function Yb(b, c, d) {
        return b + d * (c - b)
    }

    function Zb(b) {
        return b * Math.PI / 180
    };
    function $b(b) {
        return function (c) {
            if (m(c))return [Wb(c[0], b[0], b[2]), Wb(c[1], b[1], b[3])]
        }
    }

    function ac(b) {
        return b
    };
    function bc(b, c, d) {
        var e = b.length;
        if (b[0] <= c)return 0;
        if (!(c <= b[e - 1]))if (0 < d)for (d = 1; d < e; ++d) {
            if (b[d] < c)return d - 1
        } else if (0 > d)for (d = 1; d < e; ++d) {
            if (b[d] <= c)return d
        } else for (d = 1; d < e; ++d) {
            if (b[d] == c)return d;
            if (b[d] < c)return b[d - 1] - c < c - b[d] ? d - 1 : d
        }
        return e - 1
    };
    function cc(b) {
        return function (c, d, e) {
            if (m(c))return c = bc(b, c, e), c = Wb(c + d, 0, b.length - 1), b[c]
        }
    }

    function dc(b, c, d) {
        return function (e, f, g) {
            if (m(e))return g = 0 < g ? 0 : 0 > g ? 1 : .5, e = Math.floor(Math.log(c / e) / Math.log(b) + g), f = Math.max(e + f, 0), m(d) && (f = Math.min(f, d)), c / Math.pow(b, f)
        }
    };
    function ec(b) {
        if (m(b))return 0
    }

    function fc(b, c) {
        if (m(b))return b + c
    }

    function gc(b) {
        var c = 2 * Math.PI / b;
        return function (b, e) {
            if (m(b))return b = Math.floor((b + e) / c + .5) * c
        }
    }

    function hc() {
        var b = Zb(5);
        return function (c, d) {
            if (m(c))return Math.abs(c + d) <= b ? 0 : c + d
        }
    };
    function ic(b, c, d) {
        this.center = b;
        this.resolution = c;
        this.rotation = d
    };
    var jc = !Jb || Jb && 9 <= Ub, lc = !Jb || Jb && 9 <= Ub, mc = Jb && !Sb("9");
    !Lb || Sb("528");
    Kb && Sb("1.9b") || Jb && Sb("8") || Ib && Sb("9.5") || Lb && Sb("528");
    Kb && !Sb("8") || Jb && Sb("9");
    function nc() {
        0 != oc && (pc[ma(this)] = this);
        this.ea = this.ea;
        this.ca = this.ca
    }

    var oc = 0, pc = {};
    nc.prototype.ea = !1;
    nc.prototype.dd = function () {
        if (!this.ea && (this.ea = !0, this.W(), 0 != oc)) {
            var b = ma(this);
            delete pc[b]
        }
    };
    function qc(b, c) {
        var d = sa(rc, c);
        b.ea ? d.call(void 0) : (b.ca || (b.ca = []), b.ca.push(m(void 0) ? ra(d, void 0) : d))
    }

    nc.prototype.W = function () {
        if (this.ca)for (; this.ca.length;)this.ca.shift()()
    };
    function rc(b) {
        b && "function" == typeof b.dd && b.dd()
    };
    function sc(b, c) {
        this.type = b;
        this.c = this.target = c;
        this.i = !1;
        this.sh = !0
    }

    sc.prototype.nb = function () {
        this.i = !0
    };
    sc.prototype.preventDefault = function () {
        this.sh = !1
    };
    function tc(b) {
        b.nb()
    }

    function uc(b) {
        b.preventDefault()
    };
    var vc = Jb ? "focusout" : "DOMFocusOut";

    function wc(b) {
        wc[" "](b);
        return b
    }

    wc[" "] = ca;
    function xc(b, c) {
        sc.call(this, b ? b.type : "");
        this.relatedTarget = this.c = this.target = null;
        this.B = this.g = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.v = this.f = this.b = this.l = !1;
        this.state = null;
        this.j = !1;
        this.a = null;
        b && yc(this, b, c)
    }

    w(xc, sc);
    var zc = [1, 4, 2];

    function yc(b, c, d) {
        b.a = c;
        var e = b.type = c.type;
        b.target = c.target || c.srcElement;
        b.c = d;
        if (d = c.relatedTarget) {
            if (Kb) {
                var f;
                a:{
                    try {
                        wc(d.nodeName);
                        f = !0;
                        break a
                    } catch (g) {
                    }
                    f = !1
                }
                f || (d = null)
            }
        } else"mouseover" == e ? d = c.fromElement : "mouseout" == e && (d = c.toElement);
        b.relatedTarget = d;
        Object.defineProperties ? Object.defineProperties(b, {
            offsetX: {
                configurable: !0,
                enumerable: !0,
                get: b.hg,
                set: b.Zn
            }, offsetY: {configurable: !0, enumerable: !0, get: b.ig, set: b.$n}
        }) : (b.offsetX = b.hg(), b.offsetY = b.ig());
        b.clientX = void 0 !== c.clientX ? c.clientX :
            c.pageX;
        b.clientY = void 0 !== c.clientY ? c.clientY : c.pageY;
        b.screenX = c.screenX || 0;
        b.screenY = c.screenY || 0;
        b.button = c.button;
        b.g = c.keyCode || 0;
        b.B = c.charCode || ("keypress" == e ? c.keyCode : 0);
        b.l = c.ctrlKey;
        b.b = c.altKey;
        b.f = c.shiftKey;
        b.v = c.metaKey;
        b.j = Mb ? c.metaKey : c.ctrlKey;
        b.state = c.state;
        c.defaultPrevented && b.preventDefault()
    }

    function Ac(b) {
        return (jc ? 0 == b.a.button : "click" == b.type ? !0 : !!(b.a.button & zc[0])) && !(Lb && Mb && b.l)
    }

    k = xc.prototype;
    k.nb = function () {
        xc.$.nb.call(this);
        this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
    };
    k.preventDefault = function () {
        xc.$.preventDefault.call(this);
        var b = this.a;
        if (b.preventDefault)b.preventDefault(); else if (b.returnValue = !1, mc)try {
            if (b.ctrlKey || 112 <= b.keyCode && 123 >= b.keyCode)b.keyCode = -1
        } catch (c) {
        }
    };
    k.Ui = function () {
        return this.a
    };
    k.hg = function () {
        return Lb || void 0 !== this.a.offsetX ? this.a.offsetX : this.a.layerX
    };
    k.Zn = function (b) {
        Object.defineProperties(this, {offsetX: {writable: !0, enumerable: !0, configurable: !0, value: b}})
    };
    k.ig = function () {
        return Lb || void 0 !== this.a.offsetY ? this.a.offsetY : this.a.layerY
    };
    k.$n = function (b) {
        Object.defineProperties(this, {offsetY: {writable: !0, enumerable: !0, configurable: !0, value: b}})
    };
    var Bc = "closure_listenable_" + (1E6 * Math.random() | 0);

    function Cc(b) {
        return !(!b || !b[Bc])
    }

    var Dc = 0;

    function Fc(b, c, d, e, f) {
        this.listener = b;
        this.a = null;
        this.src = c;
        this.type = d;
        this.Wc = !!e;
        this.Xd = f;
        this.key = ++Dc;
        this.Oc = this.Dd = !1
    }

    function Gc(b) {
        b.Oc = !0;
        b.listener = null;
        b.a = null;
        b.src = null;
        b.Xd = null
    };
    function Hc(b) {
        this.src = b;
        this.a = {};
        this.b = 0
    }

    Hc.prototype.add = function (b, c, d, e, f) {
        var g = b.toString();
        b = this.a[g];
        b || (b = this.a[g] = [], this.b++);
        var h = Ic(b, c, e, f);
        -1 < h ? (c = b[h], d || (c.Dd = !1)) : (c = new Fc(c, this.src, g, !!e, f), c.Dd = d, b.push(c));
        return c
    };
    Hc.prototype.remove = function (b, c, d, e) {
        b = b.toString();
        if (!(b in this.a))return !1;
        var f = this.a[b];
        c = Ic(f, c, d, e);
        return -1 < c ? (Gc(f[c]), Qa.splice.call(f, c, 1), 0 == f.length && (delete this.a[b], this.b--), !0) : !1
    };
    function Jc(b, c) {
        var d = c.type;
        if (!(d in b.a))return !1;
        var e = Za(b.a[d], c);
        e && (Gc(c), 0 == b.a[d].length && (delete b.a[d], b.b--));
        return e
    }

    function Kc(b, c, d, e, f) {
        b = b.a[c.toString()];
        c = -1;
        b && (c = Ic(b, d, e, f));
        return -1 < c ? b[c] : null
    }

    function Lc(b, c, d) {
        var e = m(c), f = e ? c.toString() : "", g = m(d);
        return qb(b.a, function (b) {
            for (var c = 0; c < b.length; ++c)if (!(e && b[c].type != f || g && b[c].Wc != d))return !0;
            return !1
        })
    }

    function Ic(b, c, d, e) {
        for (var f = 0; f < b.length; ++f) {
            var g = b[f];
            if (!g.Oc && g.listener == c && g.Wc == !!d && g.Xd == e)return f
        }
        return -1
    };
    var Mc = "closure_lm_" + (1E6 * Math.random() | 0), Nc = {}, Oc = 0;

    function x(b, c, d, e, f) {
        if (ga(c)) {
            for (var g = 0; g < c.length; g++)x(b, c[g], d, e, f);
            return null
        }
        d = Pc(d);
        return Cc(b) ? b.Ra(c, d, e, f) : Qc(b, c, d, !1, e, f)
    }

    function Qc(b, c, d, e, f, g) {
        if (!c)throw Error("Invalid event type");
        var h = !!f, l = Rc(b);
        l || (b[Mc] = l = new Hc(b));
        d = l.add(c, d, e, f, g);
        if (d.a)return d;
        e = Sc();
        d.a = e;
        e.src = b;
        e.listener = d;
        b.addEventListener ? b.addEventListener(c.toString(), e, h) : b.attachEvent(Tc(c.toString()), e);
        Oc++;
        return d
    }

    function Sc() {
        var b = Uc, c = lc ? function (d) {
            return b.call(c.src, c.listener, d)
        } : function (d) {
            d = b.call(c.src, c.listener, d);
            if (!d)return d
        };
        return c
    }

    function Vc(b, c, d, e, f) {
        if (ga(c)) {
            for (var g = 0; g < c.length; g++)Vc(b, c[g], d, e, f);
            return null
        }
        d = Pc(d);
        return Cc(b) ? b.jb.add(String(c), d, !0, e, f) : Qc(b, c, d, !0, e, f)
    }

    function Wc(b, c, d, e, f) {
        if (ga(c))for (var g = 0; g < c.length; g++)Wc(b, c[g], d, e, f); else d = Pc(d), Cc(b) ? b.Cf(c, d, e, f) : b && (b = Rc(b)) && (c = Kc(b, c, d, !!e, f)) && Xc(c)
    }

    function Xc(b) {
        if (ja(b) || !b || b.Oc)return !1;
        var c = b.src;
        if (Cc(c))return Jc(c.jb, b);
        var d = b.type, e = b.a;
        c.removeEventListener ? c.removeEventListener(d, e, b.Wc) : c.detachEvent && c.detachEvent(Tc(d), e);
        Oc--;
        (d = Rc(c)) ? (Jc(d, b), 0 == d.b && (d.src = null, c[Mc] = null)) : Gc(b);
        return !0
    }

    function Tc(b) {
        return b in Nc ? Nc[b] : Nc[b] = "on" + b
    }

    function Yc(b, c, d, e) {
        var f = !0;
        if (b = Rc(b))if (c = b.a[c.toString()])for (c = c.concat(), b = 0; b < c.length; b++) {
            var g = c[b];
            g && g.Wc == d && !g.Oc && (g = Zc(g, e), f = f && !1 !== g)
        }
        return f
    }

    function Zc(b, c) {
        var d = b.listener, e = b.Xd || b.src;
        b.Dd && Xc(b);
        return d.call(e, c)
    }

    function Uc(b, c) {
        if (b.Oc)return !0;
        if (!lc) {
            var d;
            if (!(d = c))a:{
                d = ["window", "event"];
                for (var e = ba, f; f = d.shift();)if (null != e[f])e = e[f]; else {
                    d = null;
                    break a
                }
                d = e
            }
            f = d;
            d = new xc(f, this);
            e = !0;
            if (!(0 > f.keyCode || void 0 != f.returnValue)) {
                a:{
                    var g = !1;
                    if (0 == f.keyCode)try {
                        f.keyCode = -1;
                        break a
                    } catch (h) {
                        g = !0
                    }
                    if (g || void 0 == f.returnValue)f.returnValue = !0
                }
                f = [];
                for (g = d.c; g; g = g.parentNode)f.push(g);
                for (var g = b.type, l = f.length - 1; !d.i && 0 <= l; l--) {
                    d.c = f[l];
                    var n = Yc(f[l], g, !0, d), e = e && n
                }
                for (l = 0; !d.i && l < f.length; l++)d.c = f[l], n =
                    Yc(f[l], g, !1, d), e = e && n
            }
            return e
        }
        return Zc(b, new xc(c, this))
    }

    function Rc(b) {
        b = b[Mc];
        return b instanceof Hc ? b : null
    }

    var $c = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Pc(b) {
        if (ka(b))return b;
        b[$c] || (b[$c] = function (c) {
            return b.handleEvent(c)
        });
        return b[$c]
    };
    function ad() {
        nc.call(this);
        this.jb = new Hc(this);
        this.Bd = this;
        this.Ma = null
    }

    w(ad, nc);
    ad.prototype[Bc] = !0;
    k = ad.prototype;
    k.addEventListener = function (b, c, d, e) {
        x(this, b, c, d, e)
    };
    k.removeEventListener = function (b, c, d, e) {
        Wc(this, b, c, d, e)
    };
    function C(b, c) {
        var d, e = b.Ma;
        if (e)for (d = []; e; e = e.Ma)d.push(e);
        var e = b.Bd, f = c, g = f.type || f;
        if (ia(f))f = new sc(f, e); else if (f instanceof sc)f.target = f.target || e; else {
            var h = f, f = new sc(g, e);
            Gb(f, h)
        }
        var h = !0, l;
        if (d)for (var n = d.length - 1; !f.i && 0 <= n; n--)l = f.c = d[n], h = bd(l, g, !0, f) && h;
        f.i || (l = f.c = e, h = bd(l, g, !0, f) && h, f.i || (h = bd(l, g, !1, f) && h));
        if (d)for (n = 0; !f.i && n < d.length; n++)l = f.c = d[n], h = bd(l, g, !1, f) && h;
        return h
    }

    k.W = function () {
        ad.$.W.call(this);
        if (this.jb) {
            var b = this.jb, c = 0, d;
            for (d in b.a) {
                for (var e = b.a[d], f = 0; f < e.length; f++)++c, Gc(e[f]);
                delete b.a[d];
                b.b--
            }
        }
        this.Ma = null
    };
    k.Ra = function (b, c, d, e) {
        return this.jb.add(String(b), c, !1, d, e)
    };
    k.Cf = function (b, c, d, e) {
        return this.jb.remove(String(b), c, d, e)
    };
    function bd(b, c, d, e) {
        c = b.jb.a[String(c)];
        if (!c)return !0;
        c = c.concat();
        for (var f = !0, g = 0; g < c.length; ++g) {
            var h = c[g];
            if (h && !h.Oc && h.Wc == d) {
                var l = h.listener, n = h.Xd || h.src;
                h.Dd && Jc(b.jb, h);
                f = !1 !== l.call(n, e) && f
            }
        }
        return f && 0 != e.sh
    }

    function cd(b, c, d) {
        return Lc(b.jb, m(c) ? String(c) : void 0, d)
    };
    function dd() {
        ad.call(this);
        this.a = 0
    }

    w(dd, ad);
    function ed(b) {
        Xc(b)
    }

    k = dd.prototype;
    k.s = function () {
        ++this.a;
        C(this, "change")
    };
    k.K = function () {
        return this.a
    };
    k.G = function (b, c, d) {
        return x(this, b, c, !1, d)
    };
    k.L = function (b, c, d) {
        return Vc(this, b, c, !1, d)
    };
    k.J = function (b, c, d) {
        Wc(this, b, c, !1, d)
    };
    k.M = ed;
    function fd(b, c, d) {
        sc.call(this, b);
        this.key = c;
        this.oldValue = d
    }

    w(fd, sc);
    function gd(b) {
        dd.call(this);
        ma(this);
        this.B = {};
        m(b) && this.I(b)
    }

    w(gd, dd);
    var hd = {};

    function id(b) {
        return hd.hasOwnProperty(b) ? hd[b] : hd[b] = "change:" + b
    }

    k = gd.prototype;
    k.get = function (b) {
        var c;
        this.B.hasOwnProperty(b) && (c = this.B[b]);
        return c
    };
    k.O = function () {
        return tb(this.B)
    };
    k.P = function () {
        var b = {}, c;
        for (c in this.B)b[c] = this.B[c];
        return b
    };
    function jd(b, c, d) {
        var e;
        e = id(c);
        C(b, new fd(e, c, d));
        C(b, new fd("propertychange", c, d))
    }

    k.set = function (b, c) {
        var d = this.B[b];
        this.B[b] = c;
        jd(this, b, d)
    };
    k.I = function (b) {
        for (var c in b)this.set(c, b[c])
    };
    k.S = function (b) {
        if (b in this.B) {
            var c = this.B[b];
            delete this.B[b];
            jd(this, b, c)
        }
    };
    function kd(b, c, d) {
        m(d) || (d = [0, 0]);
        d[0] = b[0] + 2 * c;
        d[1] = b[1] + 2 * c;
        return d
    }

    function ld(b, c, d) {
        m(d) || (d = [0, 0]);
        d[0] = b[0] * c + .5 | 0;
        d[1] = b[1] * c + .5 | 0;
        return d
    }

    function md(b, c) {
        if (ga(b))return b;
        m(c) ? (c[0] = b, c[1] = b) : c = [b, b];
        return c
    };
    function nd(b, c) {
        b[0] += c[0];
        b[1] += c[1];
        return b
    }

    function od(b, c) {
        var d = b[0], e = b[1], f = c[0], g = c[1], h = f[0], f = f[1], l = g[0], g = g[1], n = l - h, p = g - f, d = 0 === n && 0 === p ? 0 : (n * (d - h) + p * (e - f)) / (n * n + p * p || 0);
        0 >= d || (1 <= d ? (h = l, f = g) : (h += d * n, f += d * p));
        return [h, f]
    }

    function pd(b, c) {
        var d = Xb(b + 180, 360) - 180, e = Math.abs(Math.round(3600 * d));
        return Math.floor(e / 3600) + "\u00b0 " + Ma(Math.floor(e / 60 % 60)) + "\u2032 " + Ma(Math.floor(e % 60)) + "\u2033 " + c.charAt(0 > d ? 1 : 0)
    }

    function qd(b, c, d) {
        return m(b) ? c.replace("{x}", b[0].toFixed(d)).replace("{y}", b[1].toFixed(d)) : ""
    }

    function rd(b, c) {
        for (var d = !0, e = b.length - 1; 0 <= e; --e)if (b[e] != c[e]) {
            d = !1;
            break
        }
        return d
    }

    function sd(b, c) {
        var d = Math.cos(c), e = Math.sin(c), f = b[1] * d + b[0] * e;
        b[0] = b[0] * d - b[1] * e;
        b[1] = f;
        return b
    }

    function td(b, c) {
        var d = b[0] - c[0], e = b[1] - c[1];
        return d * d + e * e
    }

    function ud(b, c) {
        return td(b, od(b, c))
    }

    function vd(b, c) {
        return qd(b, "{x}, {y}", c)
    };
    function wd(b) {
        this.length = b.length || b;
        for (var c = 0; c < this.length; c++)this[c] = b[c] || 0
    }

    wd.prototype.a = 4;
    wd.prototype.set = function (b, c) {
        c = c || 0;
        for (var d = 0; d < b.length && c + d < this.length; d++)this[c + d] = b[d]
    };
    wd.prototype.toString = Array.prototype.join;
    "undefined" == typeof Float32Array && (wd.BYTES_PER_ELEMENT = 4, wd.prototype.BYTES_PER_ELEMENT = wd.prototype.a, wd.prototype.set = wd.prototype.set, wd.prototype.toString = wd.prototype.toString, u("Float32Array", wd, void 0));
    function xd(b) {
        this.length = b.length || b;
        for (var c = 0; c < this.length; c++)this[c] = b[c] || 0
    }

    xd.prototype.a = 8;
    xd.prototype.set = function (b, c) {
        c = c || 0;
        for (var d = 0; d < b.length && c + d < this.length; d++)this[c + d] = b[d]
    };
    xd.prototype.toString = Array.prototype.join;
    if ("undefined" == typeof Float64Array) {
        try {
            xd.BYTES_PER_ELEMENT = 8
        } catch (yd) {
        }
        xd.prototype.BYTES_PER_ELEMENT = xd.prototype.a;
        xd.prototype.set = xd.prototype.set;
        xd.prototype.toString = xd.prototype.toString;
        u("Float64Array", xd, void 0)
    }
    ;
    function zd(b, c, d, e, f) {
        b[0] = c;
        b[1] = d;
        b[2] = e;
        b[3] = f
    };
    function Ad() {
        var b = Array(16);
        Bd(b, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return b
    }

    function Cd() {
        var b = Array(16);
        Bd(b, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return b
    }

    function Bd(b, c, d, e, f, g, h, l, n, p, q, r, t, v, A, z, E) {
        b[0] = c;
        b[1] = d;
        b[2] = e;
        b[3] = f;
        b[4] = g;
        b[5] = h;
        b[6] = l;
        b[7] = n;
        b[8] = p;
        b[9] = q;
        b[10] = r;
        b[11] = t;
        b[12] = v;
        b[13] = A;
        b[14] = z;
        b[15] = E
    }

    function Dd(b, c) {
        b[0] = c[0];
        b[1] = c[1];
        b[2] = c[2];
        b[3] = c[3];
        b[4] = c[4];
        b[5] = c[5];
        b[6] = c[6];
        b[7] = c[7];
        b[8] = c[8];
        b[9] = c[9];
        b[10] = c[10];
        b[11] = c[11];
        b[12] = c[12];
        b[13] = c[13];
        b[14] = c[14];
        b[15] = c[15]
    }

    function Ed(b) {
        b[0] = 1;
        b[1] = 0;
        b[2] = 0;
        b[3] = 0;
        b[4] = 0;
        b[5] = 1;
        b[6] = 0;
        b[7] = 0;
        b[8] = 0;
        b[9] = 0;
        b[10] = 1;
        b[11] = 0;
        b[12] = 0;
        b[13] = 0;
        b[14] = 0;
        b[15] = 1
    }

    function Fd(b, c, d) {
        var e = b[0], f = b[1], g = b[2], h = b[3], l = b[4], n = b[5], p = b[6], q = b[7], r = b[8], t = b[9], v = b[10], A = b[11], z = b[12], E = b[13], B = b[14];
        b = b[15];
        var y = c[0], L = c[1], K = c[2], H = c[3], S = c[4], ta = c[5], Oa = c[6], R = c[7], Aa = c[8], db = c[9], Ia = c[10], Cb = c[11], $a = c[12], Ec = c[13], kc = c[14];
        c = c[15];
        d[0] = e * y + l * L + r * K + z * H;
        d[1] = f * y + n * L + t * K + E * H;
        d[2] = g * y + p * L + v * K + B * H;
        d[3] = h * y + q * L + A * K + b * H;
        d[4] = e * S + l * ta + r * Oa + z * R;
        d[5] = f * S + n * ta + t * Oa + E * R;
        d[6] = g * S + p * ta + v * Oa + B * R;
        d[7] = h * S + q * ta + A * Oa + b * R;
        d[8] = e * Aa + l * db + r * Ia + z * Cb;
        d[9] = f * Aa + n * db + t * Ia + E * Cb;
        d[10] =
            g * Aa + p * db + v * Ia + B * Cb;
        d[11] = h * Aa + q * db + A * Ia + b * Cb;
        d[12] = e * $a + l * Ec + r * kc + z * c;
        d[13] = f * $a + n * Ec + t * kc + E * c;
        d[14] = g * $a + p * Ec + v * kc + B * c;
        d[15] = h * $a + q * Ec + A * kc + b * c
    }

    function Gd(b, c) {
        var d = b[0], e = b[1], f = b[2], g = b[3], h = b[4], l = b[5], n = b[6], p = b[7], q = b[8], r = b[9], t = b[10], v = b[11], A = b[12], z = b[13], E = b[14], B = b[15], y = d * l - e * h, L = d * n - f * h, K = d * p - g * h, H = e * n - f * l, S = e * p - g * l, ta = f * p - g * n, Oa = q * z - r * A, R = q * E - t * A, Aa = q * B - v * A, db = r * E - t * z, Ia = r * B - v * z, Cb = t * B - v * E, $a = y * Cb - L * Ia + K * db + H * Aa - S * R + ta * Oa;
        0 != $a && ($a = 1 / $a, c[0] = (l * Cb - n * Ia + p * db) * $a, c[1] = (-e * Cb + f * Ia - g * db) * $a, c[2] = (z * ta - E * S + B * H) * $a, c[3] = (-r * ta + t * S - v * H) * $a, c[4] = (-h * Cb + n * Aa - p * R) * $a, c[5] = (d * Cb - f * Aa + g * R) * $a, c[6] = (-A * ta + E * K - B * L) * $a, c[7] = (q * ta - t * K + v *
            L) * $a, c[8] = (h * Ia - l * Aa + p * Oa) * $a, c[9] = (-d * Ia + e * Aa - g * Oa) * $a, c[10] = (A * S - z * K + B * y) * $a, c[11] = (-q * S + r * K - v * y) * $a, c[12] = (-h * db + l * R - n * Oa) * $a, c[13] = (d * db - e * R + f * Oa) * $a, c[14] = (-A * H + z * L - E * y) * $a, c[15] = (q * H - r * L + t * y) * $a)
    }

    function Hd(b, c, d) {
        var e = b[1] * c + b[5] * d + 0 * b[9] + b[13], f = b[2] * c + b[6] * d + 0 * b[10] + b[14], g = b[3] * c + b[7] * d + 0 * b[11] + b[15];
        b[12] = b[0] * c + b[4] * d + 0 * b[8] + b[12];
        b[13] = e;
        b[14] = f;
        b[15] = g
    }

    function Id(b, c, d) {
        Bd(b, b[0] * c, b[1] * c, b[2] * c, b[3] * c, b[4] * d, b[5] * d, b[6] * d, b[7] * d, 1 * b[8], 1 * b[9], 1 * b[10], 1 * b[11], b[12], b[13], b[14], b[15])
    }

    function Jd(b, c) {
        var d = b[0], e = b[1], f = b[2], g = b[3], h = b[4], l = b[5], n = b[6], p = b[7], q = Math.cos(c), r = Math.sin(c);
        b[0] = d * q + h * r;
        b[1] = e * q + l * r;
        b[2] = f * q + n * r;
        b[3] = g * q + p * r;
        b[4] = d * -r + h * q;
        b[5] = e * -r + l * q;
        b[6] = f * -r + n * q;
        b[7] = g * -r + p * q
    }

    new Float64Array(3);
    new Float64Array(3);
    new Float64Array(4);
    new Float64Array(4);
    new Float64Array(4);
    new Float64Array(16);
    function Kd(b) {
        for (var c = Ld(), d = 0, e = b.length; d < e; ++d)Md(c, b[d]);
        return c
    }

    function Nd(b, c, d) {
        var e = Math.min.apply(null, b), f = Math.min.apply(null, c);
        b = Math.max.apply(null, b);
        c = Math.max.apply(null, c);
        return Od(e, f, b, c, d)
    }

    function Pd(b, c, d) {
        return m(d) ? (d[0] = b[0] - c, d[1] = b[1] - c, d[2] = b[2] + c, d[3] = b[3] + c, d) : [b[0] - c, b[1] - c, b[2] + c, b[3] + c]
    }

    function Qd(b, c) {
        return m(c) ? (c[0] = b[0], c[1] = b[1], c[2] = b[2], c[3] = b[3], c) : b.slice()
    }

    function Rd(b, c, d) {
        c = c < b[0] ? b[0] - c : b[2] < c ? c - b[2] : 0;
        b = d < b[1] ? b[1] - d : b[3] < d ? d - b[3] : 0;
        return c * c + b * b
    }

    function Sd(b, c) {
        return Td(b, c[0], c[1])
    }

    function Ud(b, c) {
        return b[0] <= c[0] && c[2] <= b[2] && b[1] <= c[1] && c[3] <= b[3]
    }

    function Td(b, c, d) {
        return b[0] <= c && c <= b[2] && b[1] <= d && d <= b[3]
    }

    function Vd(b, c) {
        var d = b[1], e = b[2], f = b[3], g = c[0], h = c[1], l = 0;
        g < b[0] ? l = l | 16 : g > e && (l = l | 4);
        h < d ? l |= 8 : h > f && (l |= 2);
        0 === l && (l = 1);
        return l
    }

    function Ld() {
        return [Infinity, Infinity, -Infinity, -Infinity]
    }

    function Od(b, c, d, e, f) {
        return m(f) ? (f[0] = b, f[1] = c, f[2] = d, f[3] = e, f) : [b, c, d, e]
    }

    function Wd(b, c) {
        var d = b[0], e = b[1];
        return Od(d, e, d, e, c)
    }

    function Xd(b, c) {
        return b[0] == c[0] && b[2] == c[2] && b[1] == c[1] && b[3] == c[3]
    }

    function Yd(b, c) {
        c[0] < b[0] && (b[0] = c[0]);
        c[2] > b[2] && (b[2] = c[2]);
        c[1] < b[1] && (b[1] = c[1]);
        c[3] > b[3] && (b[3] = c[3]);
        return b
    }

    function Md(b, c) {
        c[0] < b[0] && (b[0] = c[0]);
        c[0] > b[2] && (b[2] = c[0]);
        c[1] < b[1] && (b[1] = c[1]);
        c[1] > b[3] && (b[3] = c[1])
    }

    function Zd(b, c, d, e, f) {
        for (; d < e; d += f) {
            var g = b, h = c[d], l = c[d + 1];
            g[0] = Math.min(g[0], h);
            g[1] = Math.min(g[1], l);
            g[2] = Math.max(g[2], h);
            g[3] = Math.max(g[3], l)
        }
        return b
    }

    function $d(b, c, d) {
        var e;
        return (e = c.call(d, ae(b))) || (e = c.call(d, be(b))) || (e = c.call(d, ce(b))) ? e : (e = c.call(d, de(b))) ? e : !1
    }

    function ae(b) {
        return [b[0], b[1]]
    }

    function be(b) {
        return [b[2], b[1]]
    }

    function ee(b) {
        return [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2]
    }

    function fe(b, c, d, e) {
        var f = c * e[0] / 2;
        e = c * e[1] / 2;
        c = Math.cos(d);
        d = Math.sin(d);
        f = [-f, -f, f, f];
        e = [-e, e, -e, e];
        var g, h, l;
        for (g = 0; 4 > g; ++g)h = f[g], l = e[g], f[g] = b[0] + h * c - l * d, e[g] = b[1] + h * d + l * c;
        return Nd(f, e, void 0)
    }

    function ge(b) {
        return b[3] - b[1]
    }

    function he(b, c, d) {
        d = m(d) ? d : Ld();
        ie(b, c) && (d[0] = b[0] > c[0] ? b[0] : c[0], d[1] = b[1] > c[1] ? b[1] : c[1], d[2] = b[2] < c[2] ? b[2] : c[2], d[3] = b[3] < c[3] ? b[3] : c[3]);
        return d
    }

    function de(b) {
        return [b[0], b[3]]
    }

    function ce(b) {
        return [b[2], b[3]]
    }

    function je(b) {
        return b[2] - b[0]
    }

    function ie(b, c) {
        return b[0] <= c[2] && b[2] >= c[0] && b[1] <= c[3] && b[3] >= c[1]
    }

    function ke(b) {
        return b[2] < b[0] || b[3] < b[1]
    }

    function le(b, c) {
        var d = (b[2] - b[0]) / 2 * (c - 1), e = (b[3] - b[1]) / 2 * (c - 1);
        b[0] -= d;
        b[2] += d;
        b[1] -= e;
        b[3] += e
    }

    function me(b, c, d) {
        b = [b[0], b[1], b[0], b[3], b[2], b[1], b[2], b[3]];
        c(b, b, 2);
        return Nd([b[0], b[2], b[4], b[6]], [b[1], b[3], b[5], b[7]], d)
    };
    function ne(b) {
        return function () {
            return b
        }
    }

    var oe = ne(!1), pe = ne(!0), qe = ne(null);

    function re(b) {
        return b
    }

    function se(b) {
        var c;
        c = c || 0;
        return function () {
            return b.apply(this, Array.prototype.slice.call(arguments, 0, c))
        }
    }

    function te(b) {
        var c = arguments, d = c.length;
        return function () {
            for (var b, f = 0; f < d; f++)b = c[f].apply(this, arguments);
            return b
        }
    }

    function ue(b) {
        var c = arguments, d = c.length;
        return function () {
            for (var b = 0; b < d; b++)if (!c[b].apply(this, arguments))return !1;
            return !0
        }
    };
    /*

     Latitude/longitude spherical geodesy formulae taken from
     http://www.movable-type.co.uk/scripts/latlong.html
     Licensed under CC-BY-3.0.
     */
    function ve(b) {
        this.radius = b
    }

    ve.prototype.b = function (b) {
        for (var c = 0, d = b.length, e = b[d - 1][0], f = b[d - 1][1], g = 0; g < d; g++)var h = b[g][0], l = b[g][1], c = c + Zb(h - e) * (2 + Math.sin(Zb(f)) + Math.sin(Zb(l))), e = h, f = l;
        return c * this.radius * this.radius / 2
    };
    ve.prototype.a = function (b, c) {
        var d = Zb(b[1]), e = Zb(c[1]), f = (e - d) / 2, g = Zb(c[0] - b[0]) / 2, d = Math.sin(f) * Math.sin(f) + Math.sin(g) * Math.sin(g) * Math.cos(d) * Math.cos(e);
        return 2 * this.radius * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d))
    };
    ve.prototype.offset = function (b, c, d) {
        var e = Zb(b[1]);
        c /= this.radius;
        var f = Math.asin(Math.sin(e) * Math.cos(c) + Math.cos(e) * Math.sin(c) * Math.cos(d));
        return [180 * (Zb(b[0]) + Math.atan2(Math.sin(d) * Math.sin(c) * Math.cos(e), Math.cos(c) - Math.sin(e) * Math.sin(f))) / Math.PI, 180 * f / Math.PI]
    };
    var we = new ve(6370997);
    var xe = {};
    xe.degrees = 2 * Math.PI * we.radius / 360;
    xe.ft = .3048;
    xe.m = 1;
    xe["us-ft"] = 1200 / 3937;
    function ye(b) {
        this.a = b.code;
        this.b = b.units;
        this.i = m(b.extent) ? b.extent : null;
        this.j = m(b.worldExtent) ? b.worldExtent : null;
        this.f = m(b.axisOrientation) ? b.axisOrientation : "enu";
        this.g = (this.c = m(b.global) ? b.global : !1) && null !== this.i;
        this.B = m(b.getPointResolution) ? b.getPointResolution : this.uj;
        this.l = null;
        if ("function" == typeof proj4) {
            var c = b.code, d = proj4.defs(c);
            if (m(d)) {
                m(d.axis) && !m(b.axisOrientation) && (this.f = d.axis);
                m(b.units) || (b = d.units, !m(b) && m(d.to_meter) && (b = d.to_meter.toString(), xe[b] = d.to_meter),
                    this.b = b);
                b = ze;
                var e, f;
                for (e in b)f = proj4.defs(e), m(f) && (b = Ae(e), f === d ? Be([b, this]) : (f = proj4(e, c), Ce(b, this, f.forward, f.inverse)))
            }
        }
    }

    k = ye.prototype;
    k.Vi = function () {
        return this.a
    };
    k.R = function () {
        return this.i
    };
    k.Jl = function () {
        return this.b
    };
    k.Nd = function () {
        return xe[this.b]
    };
    k.Fj = function () {
        return this.j
    };
    function De(b) {
        return b.f
    }

    k.tk = function () {
        return this.c
    };
    k.Vn = function (b) {
        this.g = (this.c = b) && null !== this.i
    };
    k.Kl = function (b) {
        this.i = b;
        this.g = this.c && null !== b
    };
    k.io = function (b) {
        this.j = b
    };
    k.Un = function (b) {
        this.B = b
    };
    k.uj = function (b, c) {
        if ("degrees" == this.b)return b;
        var d = Ee(this, Ae("EPSG:4326")), e = [c[0] - b / 2, c[1], c[0] + b / 2, c[1], c[0], c[1] - b / 2, c[0], c[1] + b / 2], e = d(e, e, 2), d = (we.a(e.slice(0, 2), e.slice(2, 4)) + we.a(e.slice(4, 6), e.slice(6, 8))) / 2, e = this.Nd();
        m(e) && (d /= e);
        return d
    };
    k.getPointResolution = function (b, c) {
        return this.B(b, c)
    };
    var ze = {}, Fe = {};

    function Be(b) {
        Ge(b);
        Sa(b, function (c) {
            Sa(b, function (b) {
                c !== b && He(c, b, Ie)
            })
        })
    }

    function Je() {
        var b = Ke, c = Le, d = Me;
        Sa(Ne, function (e) {
            Sa(b, function (b) {
                He(e, b, c);
                He(b, e, d)
            })
        })
    }

    function Pe(b) {
        ze[b.a] = b;
        He(b, b, Ie)
    }

    function Ge(b) {
        var c = [];
        Sa(b, function (b) {
            c.push(Pe(b))
        })
    }

    function Qe(b) {
        return null != b ? ia(b) ? Ae(b) : b : Ae("EPSG:3857")
    }

    function He(b, c, d) {
        b = b.a;
        c = c.a;
        b in Fe || (Fe[b] = {});
        Fe[b][c] = d
    }

    function Ce(b, c, d, e) {
        b = Ae(b);
        c = Ae(c);
        He(b, c, Re(d));
        He(c, b, Re(e))
    }

    function Re(b) {
        return function (c, d, e) {
            var f = c.length;
            e = m(e) ? e : 2;
            d = m(d) ? d : Array(f);
            var g, h;
            for (h = 0; h < f; h += e)for (g = b([c[h], c[h + 1]]), d[h] = g[0], d[h + 1] = g[1], g = e - 1; 2 <= g; --g)d[h + g] = c[h + g];
            return d
        }
    }

    function Ae(b) {
        var c;
        b instanceof ye ? c = b : ia(b) ? (c = ze[b], !m(c) && "function" == typeof proj4 && m(proj4.defs(b)) && (c = new ye({code: b}), Pe(c))) : c = null;
        return c
    }

    function Se(b, c) {
        return b === c ? !0 : b.a === c.a ? !0 : b.b != c.b ? !1 : Ee(b, c) === Ie
    }

    function Te(b, c) {
        var d = Ae(b), e = Ae(c);
        return Ee(d, e)
    }

    function Ee(b, c) {
        var d = b.a, e = c.a, f;
        d in Fe && e in Fe[d] && (f = Fe[d][e]);
        m(f) || (f = Ue);
        return f
    }

    function Ue(b, c) {
        if (m(c) && b !== c) {
            for (var d = 0, e = b.length; d < e; ++d)c[d] = b[d];
            b = c
        }
        return b
    }

    function Ie(b, c) {
        var d;
        if (m(c)) {
            d = 0;
            for (var e = b.length; d < e; ++d)c[d] = b[d];
            d = c
        } else d = b.slice();
        return d
    }

    function Ve(b, c, d) {
        return Te(c, d)(b, void 0, b.length)
    }

    function We(b, c, d) {
        c = Te(c, d);
        return me(b, c)
    };
    function Xe() {
        gd.call(this);
        this.v = Ld();
        this.u = -1;
        this.g = {};
        this.l = this.i = 0
    }

    w(Xe, gd);
    k = Xe.prototype;
    k.$a = function (b, c) {
        var d = m(c) ? c : [NaN, NaN];
        this.Ya(b[0], b[1], d, Infinity);
        return d
    };
    k.Ne = function (b) {
        return this.gc(b[0], b[1])
    };
    k.gc = oe;
    k.R = function (b) {
        this.u != this.a && (this.v = this.Ed(this.v), this.u = this.a);
        var c = this.v;
        m(b) ? (b[0] = c[0], b[1] = c[1], b[2] = c[2], b[3] = c[3]) : b = c;
        return b
    };
    k.transform = function (b, c) {
        this.va(Te(b, c));
        return this
    };
    function Ye(b, c, d, e, f, g) {
        var h = f[0], l = f[1], n = f[4], p = f[5], q = f[12];
        f = f[13];
        for (var r = m(g) ? g : [], t = 0; c < d; c += e) {
            var v = b[c], A = b[c + 1];
            r[t++] = h * v + n * A + q;
            r[t++] = l * v + p * A + f
        }
        m(g) && r.length != t && (r.length = t);
        return r
    };
    function Ze() {
        Xe.call(this);
        this.b = "XY";
        this.H = 2;
        this.o = null
    }

    w(Ze, Xe);
    function $e(b) {
        if ("XY" == b)return 2;
        if ("XYZ" == b || "XYM" == b)return 3;
        if ("XYZM" == b)return 4
    }

    k = Ze.prototype;
    k.gc = oe;
    k.Ed = function (b) {
        var c = this.o, d = this.o.length, e = this.H;
        b = Od(Infinity, Infinity, -Infinity, -Infinity, b);
        return Zd(b, c, 0, d, e)
    };
    k.Ab = function () {
        return this.o.slice(0, this.H)
    };
    k.Bb = function () {
        return this.o.slice(this.o.length - this.H)
    };
    k.Cb = function () {
        return this.b
    };
    k.$e = function (b) {
        this.l != this.a && (yb(this.g), this.i = 0, this.l = this.a);
        if (0 > b || 0 !== this.i && b <= this.i)return this;
        var c = b.toString();
        if (this.g.hasOwnProperty(c))return this.g[c];
        var d = this.Cc(b);
        if (d.o.length < this.o.length)return this.g[c] = d;
        this.i = b;
        return this
    };
    k.Cc = function () {
        return this
    };
    function af(b, c, d) {
        b.H = $e(c);
        b.b = c;
        b.o = d
    }

    function bf(b, c, d, e) {
        if (m(c))d = $e(c); else {
            for (c = 0; c < e; ++c) {
                if (0 === d.length) {
                    b.b = "XY";
                    b.H = 2;
                    return
                }
                d = d[0]
            }
            d = d.length;
            c = 2 == d ? "XY" : 3 == d ? "XYZ" : 4 == d ? "XYZM" : void 0
        }
        b.b = c;
        b.H = d
    }

    k.va = function (b) {
        null !== this.o && (b(this.o, this.o, this.H), this.s())
    };
    k.Ua = function (b, c) {
        var d = this.o;
        if (null !== d) {
            var e = d.length, f = this.H, g = m(d) ? d : [], h = 0, l, n;
            for (l = 0; l < e; l += f)for (g[h++] = d[l] + b, g[h++] = d[l + 1] + c, n = l + 2; n < l + f; ++n)g[h++] = d[n];
            m(d) && g.length != h && (g.length = h);
            this.s()
        }
    };
    function cf(b, c, d, e) {
        for (var f = 0, g = b[d - e], h = b[d - e + 1]; c < d; c += e)var l = b[c], n = b[c + 1], f = f + (h * l - g * n), g = l, h = n;
        return f / 2
    }

    function df(b, c, d, e) {
        var f = 0, g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var l = d[g], f = f + cf(b, c, l, e);
            c = l
        }
        return f
    };
    function ef(b, c, d, e, f, g) {
        var h = f - d, l = g - e;
        if (0 !== h || 0 !== l) {
            var n = ((b - d) * h + (c - e) * l) / (h * h + l * l);
            1 < n ? (d = f, e = g) : 0 < n && (d += h * n, e += l * n)
        }
        return ff(b, c, d, e)
    }

    function ff(b, c, d, e) {
        b = d - b;
        c = e - c;
        return b * b + c * c
    };
    function gf(b, c, d, e, f, g, h) {
        var l = b[c], n = b[c + 1], p = b[d] - l, q = b[d + 1] - n;
        if (0 !== p || 0 !== q)if (g = ((f - l) * p + (g - n) * q) / (p * p + q * q), 1 < g)c = d; else if (0 < g) {
            for (f = 0; f < e; ++f)h[f] = Yb(b[c + f], b[d + f], g);
            h.length = e;
            return
        }
        for (f = 0; f < e; ++f)h[f] = b[c + f];
        h.length = e
    }

    function hf(b, c, d, e, f) {
        var g = b[c], h = b[c + 1];
        for (c += e; c < d; c += e) {
            var l = b[c], n = b[c + 1], g = ff(g, h, l, n);
            g > f && (f = g);
            g = l;
            h = n
        }
        return f
    }

    function jf(b, c, d, e, f) {
        var g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var l = d[g];
            f = hf(b, c, l, e, f);
            c = l
        }
        return f
    }

    function kf(b, c, d, e, f, g, h, l, n, p, q) {
        if (c == d)return p;
        var r;
        if (0 === f) {
            r = ff(h, l, b[c], b[c + 1]);
            if (r < p) {
                for (q = 0; q < e; ++q)n[q] = b[c + q];
                n.length = e;
                return r
            }
            return p
        }
        for (var t = m(q) ? q : [NaN, NaN], v = c + e; v < d;)if (gf(b, v - e, v, e, h, l, t), r = ff(h, l, t[0], t[1]), r < p) {
            p = r;
            for (q = 0; q < e; ++q)n[q] = t[q];
            n.length = e;
            v += e
        } else v += e * Math.max((Math.sqrt(r) - Math.sqrt(p)) / f | 0, 1);
        if (g && (gf(b, d - e, c, e, h, l, t), r = ff(h, l, t[0], t[1]), r < p)) {
            p = r;
            for (q = 0; q < e; ++q)n[q] = t[q];
            n.length = e
        }
        return p
    }

    function lf(b, c, d, e, f, g, h, l, n, p, q) {
        q = m(q) ? q : [NaN, NaN];
        var r, t;
        r = 0;
        for (t = d.length; r < t; ++r) {
            var v = d[r];
            p = kf(b, c, v, e, f, g, h, l, n, p, q);
            c = v
        }
        return p
    };
    function mf(b, c) {
        var d = 0, e, f;
        e = 0;
        for (f = c.length; e < f; ++e)b[d++] = c[e];
        return d
    }

    function nf(b, c, d, e) {
        var f, g;
        f = 0;
        for (g = d.length; f < g; ++f) {
            var h = d[f], l;
            for (l = 0; l < e; ++l)b[c++] = h[l]
        }
        return c
    }

    function of(b, c, d, e, f) {
        f = m(f) ? f : [];
        var g = 0, h, l;
        h = 0;
        for (l = d.length; h < l; ++h)c = nf(b, c, d[h], e), f[g++] = c;
        f.length = g;
        return f
    };
    function pf(b, c, d, e, f) {
        f = m(f) ? f : [];
        for (var g = 0; c < d; c += e)f[g++] = b.slice(c, c + e);
        f.length = g;
        return f
    }

    function qf(b, c, d, e, f) {
        f = m(f) ? f : [];
        var g = 0, h, l;
        h = 0;
        for (l = d.length; h < l; ++h) {
            var n = d[h];
            f[g++] = pf(b, c, n, e, f[g]);
            c = n
        }
        f.length = g;
        return f
    };
    function rf(b, c, d, e, f, g, h) {
        var l = (d - c) / e;
        if (3 > l) {
            for (; c < d; c += e)g[h++] = b[c], g[h++] = b[c + 1];
            return h
        }
        var n = Array(l);
        n[0] = 1;
        n[l - 1] = 1;
        d = [c, d - e];
        for (var p = 0, q; 0 < d.length;) {
            var r = d.pop(), t = d.pop(), v = 0, A = b[t], z = b[t + 1], E = b[r], B = b[r + 1];
            for (q = t + e; q < r; q += e) {
                var y = ef(b[q], b[q + 1], A, z, E, B);
                y > v && (p = q, v = y)
            }
            v > f && (n[(p - c) / e] = 1, t + e < p && d.push(t, p), p + e < r && d.push(p, r))
        }
        for (q = 0; q < l; ++q)n[q] && (g[h++] = b[c + q * e], g[h++] = b[c + q * e + 1]);
        return h
    }

    function sf(b, c, d, e, f, g, h, l) {
        var n, p;
        n = 0;
        for (p = d.length; n < p; ++n) {
            var q = d[n];
            a:{
                var r = b, t = q, v = e, A = f, z = g;
                if (c != t) {
                    var E = A * Math.round(r[c] / A), B = A * Math.round(r[c + 1] / A);
                    c += v;
                    z[h++] = E;
                    z[h++] = B;
                    var y = void 0, L = void 0;
                    do if (y = A * Math.round(r[c] / A), L = A * Math.round(r[c + 1] / A), c += v, c == t) {
                        z[h++] = y;
                        z[h++] = L;
                        break a
                    } while (y == E && L == B);
                    for (; c < t;) {
                        var K, H;
                        K = A * Math.round(r[c] / A);
                        H = A * Math.round(r[c + 1] / A);
                        c += v;
                        if (K != y || H != L) {
                            var S = y - E, ta = L - B, Oa = K - E, R = H - B;
                            S * R == ta * Oa && (0 > S && Oa < S || S == Oa || 0 < S && Oa > S) && (0 > ta && R < ta || ta == R || 0 < ta &&
                            R > ta) || (z[h++] = y, z[h++] = L, E = y, B = L);
                            y = K;
                            L = H
                        }
                    }
                    z[h++] = y;
                    z[h++] = L
                }
            }
            l.push(h);
            c = q
        }
        return h
    };
    function tf(b, c) {
        Ze.call(this);
        this.c = this.j = -1;
        this.ja(b, c)
    }

    w(tf, Ze);
    k = tf.prototype;
    k.clone = function () {
        var b = new tf(null);
        uf(b, this.b, this.o.slice());
        return b
    };
    k.Ya = function (b, c, d, e) {
        if (e < Rd(this.R(), b, c))return e;
        this.c != this.a && (this.j = Math.sqrt(hf(this.o, 0, this.o.length, this.H, 0)), this.c = this.a);
        return kf(this.o, 0, this.o.length, this.H, this.j, !0, b, c, d, e)
    };
    k.pl = function () {
        return cf(this.o, 0, this.o.length, this.H)
    };
    k.V = function () {
        return pf(this.o, 0, this.o.length, this.H)
    };
    k.Cc = function (b) {
        var c = [];
        c.length = rf(this.o, 0, this.o.length, this.H, b, c, 0);
        b = new tf(null);
        uf(b, "XY", c);
        return b
    };
    k.U = function () {
        return "LinearRing"
    };
    k.ja = function (b, c) {
        null === b ? uf(this, "XY", null) : (bf(this, c, b, 1), null === this.o && (this.o = []), this.o.length = nf(this.o, 0, b, this.H), this.s())
    };
    function uf(b, c, d) {
        af(b, c, d);
        b.s()
    };
    function D(b, c) {
        Ze.call(this);
        this.ja(b, c)
    }

    w(D, Ze);
    k = D.prototype;
    k.clone = function () {
        var b = new D(null);
        vf(b, this.b, this.o.slice());
        return b
    };
    k.Ya = function (b, c, d, e) {
        var f = this.o;
        b = ff(b, c, f[0], f[1]);
        if (b < e) {
            e = this.H;
            for (c = 0; c < e; ++c)d[c] = f[c];
            d.length = e;
            return b
        }
        return e
    };
    k.V = function () {
        return null === this.o ? [] : this.o.slice()
    };
    k.Ed = function (b) {
        return Wd(this.o, b)
    };
    k.U = function () {
        return "Point"
    };
    k.sa = function (b) {
        return Td(b, this.o[0], this.o[1])
    };
    k.ja = function (b, c) {
        null === b ? vf(this, "XY", null) : (bf(this, c, b, 0), null === this.o && (this.o = []), this.o.length = mf(this.o, b), this.s())
    };
    function vf(b, c, d) {
        af(b, c, d);
        b.s()
    };
    function wf(b, c, d, e, f) {
        return !$d(f, function (f) {
            return !xf(b, c, d, e, f[0], f[1])
        })
    }

    function xf(b, c, d, e, f, g) {
        for (var h = !1, l = b[d - e], n = b[d - e + 1]; c < d; c += e) {
            var p = b[c], q = b[c + 1];
            n > g != q > g && f < (p - l) * (g - n) / (q - n) + l && (h = !h);
            l = p;
            n = q
        }
        return h
    }

    function yf(b, c, d, e, f, g) {
        if (0 === d.length || !xf(b, c, d[0], e, f, g))return !1;
        var h;
        c = 1;
        for (h = d.length; c < h; ++c)if (xf(b, d[c - 1], d[c], e, f, g))return !1;
        return !0
    };
    function zf(b, c, d, e, f, g, h) {
        var l, n, p, q, r, t = f[g + 1], v = [], A = d[0];
        p = b[A - e];
        r = b[A - e + 1];
        for (l = c; l < A; l += e) {
            q = b[l];
            n = b[l + 1];
            if (t <= r && n <= t || r <= t && t <= n)p = (t - r) / (n - r) * (q - p) + p, v.push(p);
            p = q;
            r = n
        }
        A = NaN;
        r = -Infinity;
        v.sort();
        p = v[0];
        l = 1;
        for (n = v.length; l < n; ++l) {
            q = v[l];
            var z = Math.abs(q - p);
            z > r && (p = (p + q) / 2, yf(b, c, d, e, p, t) && (A = p, r = z));
            p = q
        }
        isNaN(A) && (A = f[g]);
        return m(h) ? (h.push(A, t), h) : [A, t]
    };
    function Af(b, c, d, e, f, g) {
        for (var h = [b[c], b[c + 1]], l = [], n; c + e < d; c += e) {
            l[0] = b[c + e];
            l[1] = b[c + e + 1];
            if (n = f.call(g, h, l))return n;
            h[0] = l[0];
            h[1] = l[1]
        }
        return !1
    };
    function Bf(b, c, d, e, f) {
        var g = Zd(Ld(), b, c, d, e);
        return ie(f, g) ? Ud(f, g) || g[0] >= f[0] && g[2] <= f[2] || g[1] >= f[1] && g[3] <= f[3] ? !0 : Af(b, c, d, e, function (b, c) {
            var d = !1, e = Vd(f, b), g = Vd(f, c);
            if (1 === e || 1 === g)d = !0; else {
                var r = f[0], t = f[1], v = f[2], A = f[3], z = c[0], E = c[1], B = (E - b[1]) / (z - b[0]);
                g & 2 && !(e & 2) && (d = z - (E - A) / B, d = d >= r && d <= v);
                d || !(g & 4) || e & 4 || (d = E - (z - v) * B, d = d >= t && d <= A);
                d || !(g & 8) || e & 8 || (d = z - (E - t) / B, d = d >= r && d <= v);
                d || !(g & 16) || e & 16 || (d = E - (z - r) * B, d = d >= t && d <= A)
            }
            return d
        }) : !1
    }

    function Cf(b, c, d, e, f) {
        var g = d[0];
        if (!(Bf(b, c, g, e, f) || xf(b, c, g, e, f[0], f[1]) || xf(b, c, g, e, f[0], f[3]) || xf(b, c, g, e, f[2], f[1]) || xf(b, c, g, e, f[2], f[3])))return !1;
        if (1 === d.length)return !0;
        c = 1;
        for (g = d.length; c < g; ++c)if (wf(b, d[c - 1], d[c], e, f))return !1;
        return !0
    };
    function Df(b, c, d, e) {
        for (var f = 0, g = b[d - e], h = b[d - e + 1]; c < d; c += e)var l = b[c], n = b[c + 1], f = f + (l - g) * (n + h), g = l, h = n;
        return 0 < f
    }

    function Ef(b, c, d, e) {
        var f = 0;
        e = m(e) ? e : !1;
        var g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var l = c[g], f = Df(b, f, l, d);
            if (0 === g) {
                if (e && f || !e && !f)return !1
            } else if (e && !f || !e && f)return !1;
            f = l
        }
        return !0
    }

    function Ff(b, c, d, e, f) {
        f = m(f) ? f : !1;
        var g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var l = d[g], n = Df(b, c, l, e);
            if (0 === g ? f && n || !f && !n : f && !n || !f && n)for (var n = b, p = l, q = e; c < p - q;) {
                var r;
                for (r = 0; r < q; ++r) {
                    var t = n[c + r];
                    n[c + r] = n[p - q + r];
                    n[p - q + r] = t
                }
                c += q;
                p -= q
            }
            c = l
        }
        return c
    }

    function Gf(b, c, d, e) {
        var f = 0, g, h;
        g = 0;
        for (h = c.length; g < h; ++g)f = Ff(b, f, c[g], d, e);
        return f
    };
    function F(b, c) {
        Ze.call(this);
        this.c = [];
        this.A = -1;
        this.D = null;
        this.T = this.C = this.N = -1;
        this.j = null;
        this.ja(b, c)
    }

    w(F, Ze);
    k = F.prototype;
    k.Ai = function (b) {
        null === this.o ? this.o = b.o.slice() : cb(this.o, b.o);
        this.c.push(this.o.length);
        this.s()
    };
    k.clone = function () {
        var b = new F(null);
        Hf(b, this.b, this.o.slice(), this.c.slice());
        return b
    };
    k.Ya = function (b, c, d, e) {
        if (e < Rd(this.R(), b, c))return e;
        this.C != this.a && (this.N = Math.sqrt(jf(this.o, 0, this.c, this.H, 0)), this.C = this.a);
        return lf(this.o, 0, this.c, this.H, this.N, !0, b, c, d, e)
    };
    k.gc = function (b, c) {
        return yf(If(this), 0, this.c, this.H, b, c)
    };
    k.sl = function () {
        return df(If(this), 0, this.c, this.H)
    };
    k.V = function (b) {
        var c;
        m(b) ? (c = If(this).slice(), Ff(c, 0, this.c, this.H, b)) : c = this.o;
        return qf(c, 0, this.c, this.H)
    };
    function Jf(b) {
        if (b.A != b.a) {
            var c = ee(b.R());
            b.D = zf(If(b), 0, b.c, b.H, c, 0);
            b.A = b.a
        }
        return b.D
    }

    k.gj = function () {
        return new D(Jf(this))
    };
    k.lj = function () {
        return this.c.length
    };
    k.dg = function (b) {
        if (0 > b || this.c.length <= b)return null;
        var c = new tf(null);
        uf(c, this.b, this.o.slice(0 === b ? 0 : this.c[b - 1], this.c[b]));
        return c
    };
    k.Md = function () {
        var b = this.b, c = this.o, d = this.c, e = [], f = 0, g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var l = d[g], n = new tf(null);
            uf(n, b, c.slice(f, l));
            e.push(n);
            f = l
        }
        return e
    };
    function If(b) {
        if (b.T != b.a) {
            var c = b.o;
            Ef(c, b.c, b.H) ? b.j = c : (b.j = c.slice(), b.j.length = Ff(b.j, 0, b.c, b.H));
            b.T = b.a
        }
        return b.j
    }

    k.Cc = function (b) {
        var c = [], d = [];
        c.length = sf(this.o, 0, this.c, this.H, Math.sqrt(b), c, 0, d);
        b = new F(null);
        Hf(b, "XY", c, d);
        return b
    };
    k.U = function () {
        return "Polygon"
    };
    k.sa = function (b) {
        return Cf(If(this), 0, this.c, this.H, b)
    };
    k.ja = function (b, c) {
        if (null === b)Hf(this, "XY", null, this.c); else {
            bf(this, c, b, 2);
            null === this.o && (this.o = []);
            var d = of(this.o, 0, b, this.H, this.c);
            this.o.length = 0 === d.length ? 0 : d[d.length - 1];
            this.s()
        }
    };
    function Hf(b, c, d, e) {
        af(b, c, d);
        b.c = e;
        b.s()
    }

    function Kf(b, c, d, e) {
        var f = m(e) ? e : 32;
        e = [];
        var g;
        for (g = 0; g < f; ++g)cb(e, b.offset(c, d, 2 * Math.PI * g / f));
        e.push(e[0], e[1]);
        b = new F(null);
        Hf(b, "XY", e, [e.length]);
        return b
    }

    function Lf(b) {
        var c = b[0], d = b[1], e = b[2];
        b = b[3];
        c = [c, d, c, b, e, b, e, d, c, d];
        d = new F(null);
        Hf(d, "XY", c, [c.length]);
        return d
    }

    function Mf(b, c, d) {
        var e = m(c) ? c : 32, f = b.H;
        c = b.b;
        for (var g = new F(null, c), e = f * (e + 1), f = [], h = 0; h < e; h++)f[h] = 0;
        Hf(g, c, f, [f.length]);
        Nf(g, b.ld(), b.lf(), d);
        return g
    }

    function Nf(b, c, d, e) {
        var f = b.o, g = b.b, h = b.H, l = b.c, n = f.length / h - 1;
        e = m(e) ? e : 0;
        for (var p, q, r = 0; r <= n; ++r)q = r * h, p = e + 2 * Xb(r, n) * Math.PI / n, f[q] = c[0] + d * Math.cos(p), f[q + 1] = c[1] + d * Math.sin(p);
        Hf(b, g, f, l)
    };
    function Of(b) {
        gd.call(this);
        b = m(b) ? b : {};
        this.c = [0, 0];
        var c = {};
        c.center = m(b.center) ? b.center : null;
        this.g = Qe(b.projection);
        var d, e, f, g = m(b.minZoom) ? b.minZoom : 0;
        d = m(b.maxZoom) ? b.maxZoom : 28;
        var h = m(b.zoomFactor) ? b.zoomFactor : 2;
        if (m(b.resolutions))d = b.resolutions, e = d[0], f = d[d.length - 1], d = cc(d); else {
            e = Qe(b.projection);
            f = e.R();
            var l = (null === f ? 360 * xe.degrees / xe[e.b] : Math.max(je(f), ge(f))) / 256 / Math.pow(2, 0), n = l / Math.pow(2, 28);
            e = b.maxResolution;
            m(e) ? g = 0 : e = l / Math.pow(h, g);
            f = b.minResolution;
            m(f) || (f = m(b.maxZoom) ?
                m(b.maxResolution) ? e / Math.pow(h, d) : l / Math.pow(h, d) : n);
            d = g + Math.floor(Math.log(e / f) / Math.log(h));
            f = e / Math.pow(h, d - g);
            d = dc(h, e, d - g)
        }
        this.b = e;
        this.j = f;
        this.f = g;
        g = m(b.extent) ? $b(b.extent) : ac;
        (m(b.enableRotation) ? b.enableRotation : 1) ? (e = b.constrainRotation, e = m(e) && !0 !== e ? !1 === e ? fc : ja(e) ? gc(e) : fc : hc()) : e = ec;
        this.i = new ic(g, d, e);
        m(b.resolution) ? c.resolution = b.resolution : m(b.zoom) && (c.resolution = this.constrainResolution(this.b, b.zoom - this.f));
        c.rotation = m(b.rotation) ? b.rotation : 0;
        this.I(c)
    }

    w(Of, gd);
    k = Of.prototype;
    k.Fd = function (b) {
        return this.i.center(b)
    };
    k.constrainResolution = function (b, c, d) {
        return this.i.resolution(b, c || 0, d || 0)
    };
    k.constrainRotation = function (b, c) {
        return this.i.rotation(b, c || 0)
    };
    k.Ka = function () {
        return this.get("center")
    };
    k.Vc = function (b) {
        var c = this.Ka(), d = this.Da(), e = this.Ea();
        return fe(c, d, e, b)
    };
    k.$k = function () {
        return this.g
    };
    k.Da = function () {
        return this.get("resolution")
    };
    function Pf(b) {
        var c = b.b, d = Math.log(c / b.j) / Math.log(2);
        return function (b) {
            return c / Math.pow(2, b * d)
        }
    }

    k.Ea = function () {
        return this.get("rotation")
    };
    function Rf(b) {
        var c = b.b, d = Math.log(c / b.j) / Math.log(2);
        return function (b) {
            return Math.log(c / b) / Math.log(2) / d
        }
    }

    function Sf(b) {
        var c = b.Ka(), d = b.g, e = b.Da();
        b = b.Ea();
        return {
            center: [Math.round(c[0] / e) * e, Math.round(c[1] / e) * e],
            projection: m(d) ? d : null,
            resolution: e,
            rotation: b
        }
    }

    k.Hj = function () {
        var b, c = this.Da();
        if (m(c)) {
            var d, e = 0;
            do {
                d = this.constrainResolution(this.b, e);
                if (d == c) {
                    b = e;
                    break
                }
                ++e
            } while (d > this.j)
        }
        return m(b) ? this.f + b : b
    };
    k.Qe = function (b, c, d) {
        b instanceof Ze || (b = Lf(b));
        var e = m(d) ? d : {};
        d = m(e.padding) ? e.padding : [0, 0, 0, 0];
        var f = m(e.constrainResolution) ? e.constrainResolution : !0, g = m(e.nearest) ? e.nearest : !1, h;
        m(e.minResolution) ? h = e.minResolution : m(e.maxZoom) ? h = this.constrainResolution(this.b, e.maxZoom - this.f, 0) : h = 0;
        var l = b.o, n = this.Ea(), e = Math.cos(-n), n = Math.sin(-n), p = Infinity, q = Infinity, r = -Infinity, t = -Infinity;
        b = b.H;
        for (var v = 0, A = l.length; v < A; v += b)var z = l[v] * e - l[v + 1] * n, E = l[v] * n + l[v + 1] * e, p = Math.min(p, z), q = Math.min(q, E),
            r = Math.max(r, z), t = Math.max(t, E);
        l = [p, q, r, t];
        c = [c[0] - d[1] - d[3], c[1] - d[0] - d[2]];
        c = Math.max(je(l) / c[0], ge(l) / c[1]);
        c = isNaN(c) ? h : Math.max(c, h);
        f && (h = this.constrainResolution(c, 0, 0), !g && h < c && (h = this.constrainResolution(h, -1, 0)), c = h);
        this.Xb(c);
        n = -n;
        g = (p + r) / 2 + (d[1] - d[3]) / 2 * c;
        d = (q + t) / 2 + (d[0] - d[2]) / 2 * c;
        this.eb([g * e - d * n, d * e + g * n])
    };
    k.Gi = function (b, c, d) {
        var e = this.Ea(), f = Math.cos(-e), e = Math.sin(-e), g = b[0] * f - b[1] * e;
        b = b[1] * f + b[0] * e;
        var h = this.Da(), g = g + (c[0] / 2 - d[0]) * h;
        b += (d[1] - c[1] / 2) * h;
        e = -e;
        this.eb([g * f - b * e, b * f + g * e])
    };
    function Tf(b) {
        return null != b.Ka() && m(b.Da())
    }

    k.rotate = function (b, c) {
        if (m(c)) {
            var d, e = this.Ka();
            m(e) && (d = [e[0] - c[0], e[1] - c[1]], sd(d, b - this.Ea()), nd(d, c));
            this.eb(d)
        }
        this.fe(b)
    };
    k.eb = function (b) {
        this.set("center", b)
    };
    function Uf(b, c) {
        b.c[1] += c
    }

    k.Xb = function (b) {
        this.set("resolution", b)
    };
    k.fe = function (b) {
        this.set("rotation", b)
    };
    k.ko = function (b) {
        b = this.constrainResolution(this.b, b - this.f, 0);
        this.Xb(b)
    };
    function Vf(b) {
        return 1 - Math.pow(1 - b, 3)
    };
    function Wf(b) {
        return 3 * b * b - 2 * b * b * b
    }

    function Xf(b) {
        return b
    }

    function Yf(b) {
        return .5 > b ? Wf(2 * b) : 1 - Wf(2 * (b - .5))
    };
    function Zf(b) {
        var c = b.source, d = m(b.start) ? b.start : ua(), e = c[0], f = c[1], g = m(b.duration) ? b.duration : 1E3, h = m(b.easing) ? b.easing : Wf;
        return function (b, c) {
            if (c.time < d)return c.animate = !0, c.viewHints[0] += 1, !0;
            if (c.time < d + g) {
                var p = 1 - h((c.time - d) / g), q = e - c.viewState.center[0], r = f - c.viewState.center[1];
                c.animate = !0;
                c.viewState.center[0] += p * q;
                c.viewState.center[1] += p * r;
                c.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }

    function $f(b) {
        var c = m(b.rotation) ? b.rotation : 0, d = m(b.start) ? b.start : ua(), e = m(b.duration) ? b.duration : 1E3, f = m(b.easing) ? b.easing : Wf, g = m(b.anchor) ? b.anchor : null;
        return function (b, l) {
            if (l.time < d)return l.animate = !0, l.viewHints[0] += 1, !0;
            if (l.time < d + e) {
                var n = 1 - f((l.time - d) / e), n = (c - l.viewState.rotation) * n;
                l.animate = !0;
                l.viewState.rotation += n;
                if (null !== g) {
                    var p = l.viewState.center;
                    p[0] -= g[0];
                    p[1] -= g[1];
                    sd(p, n);
                    nd(p, g)
                }
                l.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }

    function ag(b) {
        var c = b.resolution, d = m(b.start) ? b.start : ua(), e = m(b.duration) ? b.duration : 1E3, f = m(b.easing) ? b.easing : Wf;
        return function (b, h) {
            if (h.time < d)return h.animate = !0, h.viewHints[0] += 1, !0;
            if (h.time < d + e) {
                var l = 1 - f((h.time - d) / e), n = c - h.viewState.resolution;
                h.animate = !0;
                h.viewState.resolution += l * n;
                h.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    };
    function bg(b, c, d, e) {
        return m(e) ? (e[0] = b, e[1] = c, e[2] = d, e) : [b, c, d]
    }

    function cg(b, c, d) {
        return b + "/" + c + "/" + d
    }

    function dg(b) {
        var c = b[0], d = Array(c), e = 1 << c - 1, f, g;
        for (f = 0; f < c; ++f)g = 48, b[1] & e && (g += 1), b[2] & e && (g += 2), d[f] = String.fromCharCode(g), e >>= 1;
        return d.join("")
    }

    function eg(b) {
        return cg(b[0], b[1], b[2])
    }

    function fg(b, c, d) {
        var e = b[0], f = gg(c, b);
        d = hg(d);
        if (Sd(d, f))return b;
        b = je(d);
        d = Math.ceil((d[0] - f[0]) / b);
        f[0] += b * d;
        return c.Rd(f, e)
    }

    function ig(b, c) {
        var d = b[0], e = b[1], f = b[2];
        if (c.minZoom > d || d > c.maxZoom)return !1;
        var g = c.R(), d = null === g ? null === c.b ? null : c.b[d] : jg(c, g, d);
        return null === d ? !0 : kg(d, e, f)
    };
    function lg(b, c, d, e) {
        this.a = b;
        this.f = c;
        this.b = d;
        this.c = e
    }

    lg.prototype.contains = function (b) {
        return kg(this, b[1], b[2])
    };
    function kg(b, c, d) {
        return b.a <= c && c <= b.f && b.b <= d && d <= b.c
    }

    function mg(b, c) {
        return b.a == c.a && b.b == c.b && b.f == c.f && b.c == c.c
    }

    function ng(b) {
        return b.f - b.a + 1
    }

    function og(b, c) {
        return b.a <= c.f && b.f >= c.a && b.b <= c.c && b.c >= c.b
    };
    function pg(b) {
        this.b = b.html;
        this.a = m(b.tileRanges) ? b.tileRanges : null
    }

    pg.prototype.c = function () {
        return this.b
    };
    function qg(b, c, d) {
        sc.call(this, b, d);
        this.element = c
    }

    w(qg, sc);
    function rg(b) {
        gd.call(this);
        this.b = m(b) ? b : [];
        sg(this)
    }

    w(rg, gd);
    k = rg.prototype;
    k.clear = function () {
        for (; 0 < this.Qb();)this.pop()
    };
    k.ff = function (b) {
        var c, d;
        c = 0;
        for (d = b.length; c < d; ++c)this.push(b[c]);
        return this
    };
    k.forEach = function (b, c) {
        Sa(this.b, b, c)
    };
    k.Jk = function () {
        return this.b
    };
    k.item = function (b) {
        return this.b[b]
    };
    k.Qb = function () {
        return this.get("length")
    };
    k.Yd = function (b, c) {
        eb(this.b, b, 0, c);
        sg(this);
        C(this, new qg("add", c, this))
    };
    k.pop = function () {
        return this.zf(this.Qb() - 1)
    };
    k.push = function (b) {
        var c = this.b.length;
        this.Yd(c, b);
        return c
    };
    k.remove = function (b) {
        var c = this.b, d, e;
        d = 0;
        for (e = c.length; d < e; ++d)if (c[d] === b)return this.zf(d)
    };
    k.zf = function (b) {
        var c = this.b[b];
        Qa.splice.call(this.b, b, 1);
        sg(this);
        C(this, new qg("remove", c, this));
        return c
    };
    k.Rn = function (b, c) {
        var d = this.Qb();
        if (b < d)d = this.b[b], this.b[b] = c, C(this, new qg("remove", d, this)), C(this, new qg("add", c, this)); else {
            for (; d < b; ++d)this.Yd(d, void 0);
            this.Yd(b, c)
        }
    };
    function sg(b) {
        b.set("length", b.b.length)
    };
    var tg = /^#(?:[0-9a-f]{3}){1,2}$/i, ug = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i, vg = /^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i;

    function wg(b) {
        return ga(b) ? b : xg(b)
    }

    function yg(b) {
        if (!ia(b)) {
            var c = b[0];
            c != (c | 0) && (c = c + .5 | 0);
            var d = b[1];
            d != (d | 0) && (d = d + .5 | 0);
            var e = b[2];
            e != (e | 0) && (e = e + .5 | 0);
            b = "rgba(" + c + "," + d + "," + e + "," + b[3] + ")"
        }
        return b
    }

    var xg = function () {
        var b = {}, c = 0;
        return function (d) {
            var e;
            if (b.hasOwnProperty(d))e = b[d]; else {
                if (1024 <= c) {
                    e = 0;
                    for (var f in b)0 === (e++ & 3) && (delete b[f], --c)
                }
                var g, h;
                tg.exec(d) ? (h = 3 == d.length - 1 ? 1 : 2, e = parseInt(d.substr(1 + 0 * h, h), 16), f = parseInt(d.substr(1 + 1 * h, h), 16), g = parseInt(d.substr(1 + 2 * h, h), 16), 1 == h && (e = (e << 4) + e, f = (f << 4) + f, g = (g << 4) + g), e = [e, f, g, 1]) : (h = vg.exec(d)) ? (e = Number(h[1]), f = Number(h[2]), g = Number(h[3]), h = Number(h[4]), e = [e, f, g, h], e = zg(e, e)) : (h = ug.exec(d)) ? (e = Number(h[1]), f = Number(h[2]), g = Number(h[3]),
                    e = [e, f, g, 1], e = zg(e, e)) : e = void 0;
                b[d] = e;
                ++c
            }
            return e
        }
    }();

    function zg(b, c) {
        var d = m(c) ? c : [];
        d[0] = Wb(b[0] + .5 | 0, 0, 255);
        d[1] = Wb(b[1] + .5 | 0, 0, 255);
        d[2] = Wb(b[2] + .5 | 0, 0, 255);
        d[3] = Wb(b[3], 0, 1);
        return d
    };
    function Ag() {
        this.j = Ad();
        this.b = void 0;
        this.a = Ad();
        this.f = void 0;
        this.c = Ad();
        this.i = void 0;
        this.g = Ad();
        this.B = void 0;
        this.l = Ad()
    }

    function Bg(b, c, d, e, f) {
        var g = !1;
        m(c) && c !== b.b && (g = b.a, Ed(g), g[12] = c, g[13] = c, g[14] = c, g[15] = 1, b.b = c, g = !0);
        if (m(d) && d !== b.f) {
            g = b.c;
            Ed(g);
            g[0] = d;
            g[5] = d;
            g[10] = d;
            g[15] = 1;
            var h = -.5 * d + .5;
            g[12] = h;
            g[13] = h;
            g[14] = h;
            g[15] = 1;
            b.f = d;
            g = !0
        }
        m(e) && e !== b.i && (g = Math.cos(e), h = Math.sin(e), Bd(b.g, .213 + .787 * g - .213 * h, .213 - .213 * g + .143 * h, .213 - .213 * g - .787 * h, 0, .715 - .715 * g - .715 * h, .715 + .285 * g + .14 * h, .715 - .715 * g + .715 * h, 0, .072 - .072 * g + .928 * h, .072 - .072 * g - .283 * h, .072 + .928 * g + .072 * h, 0, 0, 0, 0, 1), b.i = e, g = !0);
        m(f) && f !== b.B && (Bd(b.l, .213 + .787 *
            f, .213 - .213 * f, .213 - .213 * f, 0, .715 - .715 * f, .715 + .285 * f, .715 - .715 * f, 0, .072 - .072 * f, .072 - .072 * f, .072 + .928 * f, 0, 0, 0, 0, 1), b.B = f, g = !0);
        g && (g = b.j, Ed(g), m(d) && Fd(g, b.c, g), m(c) && Fd(g, b.a, g), m(f) && Fd(g, b.l, g), m(e) && Fd(g, b.g, g));
        return b.j
    };
    var Cg = !Jb || Jb && 9 <= Ub;
    !Kb && !Jb || Jb && Jb && 9 <= Ub || Kb && Sb("1.9.1");
    Jb && Sb("9");
    Hb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    function Dg(b, c) {
        this.x = m(b) ? b : 0;
        this.y = m(c) ? c : 0
    }

    k = Dg.prototype;
    k.clone = function () {
        return new Dg(this.x, this.y)
    };
    k.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    k.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    k.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    k.scale = function (b, c) {
        var d = ja(c) ? c : b;
        this.x *= b;
        this.y *= d;
        return this
    };
    function Eg(b, c) {
        this.width = b;
        this.height = c
    }

    k = Eg.prototype;
    k.clone = function () {
        return new Eg(this.width, this.height)
    };
    k.wa = function () {
        return !(this.width * this.height)
    };
    k.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    k.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    k.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    k.scale = function (b, c) {
        var d = ja(c) ? c : b;
        this.width *= b;
        this.height *= d;
        return this
    };
    function Fg(b) {
        return b ? new Gg(Hg(b)) : ya || (ya = new Gg)
    }

    function Ig(b) {
        var c = document;
        return ia(b) ? c.getElementById(b) : b
    }

    function Jg(b, c) {
        pb(c, function (c, e) {
            "style" == e ? b.style.cssText = c : "class" == e ? b.className = c : "for" == e ? b.htmlFor = c : e in Kg ? b.setAttribute(Kg[e], c) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? b.setAttribute(e, c) : b[e] = c
        })
    }

    var Kg = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Lg(b) {
        b = b.document.documentElement;
        return new Eg(b.clientWidth, b.clientHeight)
    }

    function Mg(b, c, d) {
        var e = arguments, f = document, g = e[0], h = e[1];
        if (!Cg && h && (h.name || h.type)) {
            g = ["<", g];
            h.name && g.push(' name="', Da(h.name), '"');
            if (h.type) {
                g.push(' type="', Da(h.type), '"');
                var l = {};
                Gb(l, h);
                delete l.type;
                h = l
            }
            g.push(">");
            g = g.join("")
        }
        g = f.createElement(g);
        h && (ia(h) ? g.className = h : ga(h) ? g.className = h.join(" ") : Jg(g, h));
        2 < e.length && Ng(f, g, e, 2);
        return g
    }

    function Ng(b, c, d, e) {
        function f(d) {
            d && c.appendChild(ia(d) ? b.createTextNode(d) : d)
        }

        for (; e < d.length; e++) {
            var g = d[e];
            !ha(g) || la(g) && 0 < g.nodeType ? f(g) : Sa(Og(g) ? bb(g) : g, f)
        }
    }

    function Pg(b) {
        return document.createElement(b)
    }

    function Qg(b, c) {
        Ng(Hg(b), b, arguments, 1)
    }

    function Rg(b) {
        for (var c; c = b.firstChild;)b.removeChild(c)
    }

    function Sg(b, c, d) {
        b.insertBefore(c, b.childNodes[d] || null)
    }

    function Tg(b) {
        b && b.parentNode && b.parentNode.removeChild(b)
    }

    function Ug(b, c) {
        var d = c.parentNode;
        d && d.replaceChild(b, c)
    }

    function Vg(b) {
        if (void 0 != b.firstElementChild)b = b.firstElementChild; else for (b = b.firstChild; b && 1 != b.nodeType;)b = b.nextSibling;
        return b
    }

    function Wg(b, c) {
        if (b.contains && 1 == c.nodeType)return b == c || b.contains(c);
        if ("undefined" != typeof b.compareDocumentPosition)return b == c || Boolean(b.compareDocumentPosition(c) & 16);
        for (; c && b != c;)c = c.parentNode;
        return c == b
    }

    function Hg(b) {
        return 9 == b.nodeType ? b : b.ownerDocument || b.document
    }

    function Og(b) {
        if (b && "number" == typeof b.length) {
            if (la(b))return "function" == typeof b.item || "string" == typeof b.item;
            if (ka(b))return "function" == typeof b.item
        }
        return !1
    }

    function Gg(b) {
        this.a = b || ba.document || document
    }

    function Xg() {
        return !0
    }

    function Yg(b) {
        var c = b.a;
        b = Lb ? c.body || c.documentElement : c.documentElement;
        c = c.parentWindow || c.defaultView;
        return Jb && Sb("10") && c.pageYOffset != b.scrollTop ? new Dg(b.scrollLeft, b.scrollTop) : new Dg(c.pageXOffset || b.scrollLeft, c.pageYOffset || b.scrollTop)
    }

    Gg.prototype.appendChild = function (b, c) {
        b.appendChild(c)
    };
    Gg.prototype.contains = Wg;
    function Zg(b) {
        if (b.classList)return b.classList;
        b = b.className;
        return ia(b) && b.match(/\S+/g) || []
    }

    function $g(b, c) {
        return b.classList ? b.classList.contains(c) : Ya(Zg(b), c)
    }

    function ah(b, c) {
        b.classList ? b.classList.add(c) : $g(b, c) || (b.className += 0 < b.className.length ? " " + c : c)
    }

    function bh(b, c) {
        b.classList ? b.classList.remove(c) : $g(b, c) && (b.className = Ta(Zg(b), function (b) {
            return b != c
        }).join(" "))
    }

    function ch(b, c) {
        $g(b, c) ? bh(b, c) : ah(b, c)
    };
    function dh(b, c, d, e) {
        this.top = b;
        this.right = c;
        this.bottom = d;
        this.left = e
    }

    k = dh.prototype;
    k.clone = function () {
        return new dh(this.top, this.right, this.bottom, this.left)
    };
    k.contains = function (b) {
        return this && b ? b instanceof dh ? b.left >= this.left && b.right <= this.right && b.top >= this.top && b.bottom <= this.bottom : b.x >= this.left && b.x <= this.right && b.y >= this.top && b.y <= this.bottom : !1
    };
    k.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    k.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    k.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    k.scale = function (b, c) {
        var d = ja(c) ? c : b;
        this.left *= b;
        this.right *= b;
        this.top *= d;
        this.bottom *= d;
        return this
    };
    function eh(b, c, d, e) {
        this.left = b;
        this.top = c;
        this.width = d;
        this.height = e
    }

    k = eh.prototype;
    k.clone = function () {
        return new eh(this.left, this.top, this.width, this.height)
    };
    k.contains = function (b) {
        return b instanceof eh ? this.left <= b.left && this.left + this.width >= b.left + b.width && this.top <= b.top && this.top + this.height >= b.top + b.height : b.x >= this.left && b.x <= this.left + this.width && b.y >= this.top && b.y <= this.top + this.height
    };
    function fh(b, c) {
        var d = c.x < b.left ? b.left - c.x : Math.max(c.x - (b.left + b.width), 0), e = c.y < b.top ? b.top - c.y : Math.max(c.y - (b.top + b.height), 0);
        return d * d + e * e
    }

    k.distance = function (b) {
        return Math.sqrt(fh(this, b))
    };
    k.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    k.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    k.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    k.scale = function (b, c) {
        var d = ja(c) ? c : b;
        this.left *= b;
        this.width *= b;
        this.top *= d;
        this.height *= d;
        return this
    };
    function gh(b, c) {
        var d = Hg(b);
        return d.defaultView && d.defaultView.getComputedStyle && (d = d.defaultView.getComputedStyle(b, null)) ? d[c] || d.getPropertyValue(c) || "" : ""
    }

    function hh(b, c) {
        return gh(b, c) || (b.currentStyle ? b.currentStyle[c] : null) || b.style && b.style[c]
    }

    function ih(b, c, d) {
        var e;
        c instanceof Dg ? (e = c.x, c = c.y) : (e = c, c = d);
        b.style.left = jh(e);
        b.style.top = jh(c)
    }

    function kh(b) {
        var c;
        try {
            c = b.getBoundingClientRect()
        } catch (d) {
            return {left: 0, top: 0, right: 0, bottom: 0}
        }
        Jb && b.ownerDocument.body && (b = b.ownerDocument, c.left -= b.documentElement.clientLeft + b.body.clientLeft, c.top -= b.documentElement.clientTop + b.body.clientTop);
        return c
    }

    function lh(b) {
        if (1 == b.nodeType)return b = kh(b), new Dg(b.left, b.top);
        var c = ka(b.Ui), d = b;
        b.targetTouches && b.targetTouches.length ? d = b.targetTouches[0] : c && b.a.targetTouches && b.a.targetTouches.length && (d = b.a.targetTouches[0]);
        return new Dg(d.clientX, d.clientY)
    }

    function jh(b) {
        "number" == typeof b && (b = b + "px");
        return b
    }

    function mh(b) {
        var c = nh;
        if ("none" != hh(b, "display"))return c(b);
        var d = b.style, e = d.display, f = d.visibility, g = d.position;
        d.visibility = "hidden";
        d.position = "absolute";
        d.display = "inline";
        b = c(b);
        d.display = e;
        d.position = g;
        d.visibility = f;
        return b
    }

    function nh(b) {
        var c = b.offsetWidth, d = b.offsetHeight, e = Lb && !c && !d;
        return m(c) && !e || !b.getBoundingClientRect ? new Eg(c, d) : (b = kh(b), new Eg(b.right - b.left, b.bottom - b.top))
    }

    function oh(b, c) {
        b.style.display = c ? "" : "none"
    }

    function ph(b, c, d, e) {
        if (/^\d+px?$/.test(c))return parseInt(c, 10);
        var f = b.style[d], g = b.runtimeStyle[d];
        b.runtimeStyle[d] = b.currentStyle[d];
        b.style[d] = c;
        c = b.style[e];
        b.style[d] = f;
        b.runtimeStyle[d] = g;
        return c
    }

    function qh(b, c) {
        var d = b.currentStyle ? b.currentStyle[c] : null;
        return d ? ph(b, d, "left", "pixelLeft") : 0
    }

    function rh(b, c) {
        if (Jb) {
            var d = qh(b, c + "Left"), e = qh(b, c + "Right"), f = qh(b, c + "Top"), g = qh(b, c + "Bottom");
            return new dh(f, e, g, d)
        }
        d = gh(b, c + "Left");
        e = gh(b, c + "Right");
        f = gh(b, c + "Top");
        g = gh(b, c + "Bottom");
        return new dh(parseFloat(f), parseFloat(e), parseFloat(g), parseFloat(d))
    }

    var sh = {thin: 2, medium: 4, thick: 6};

    function th(b, c) {
        if ("none" == (b.currentStyle ? b.currentStyle[c + "Style"] : null))return 0;
        var d = b.currentStyle ? b.currentStyle[c + "Width"] : null;
        return d in sh ? sh[d] : ph(b, d, "left", "pixelLeft")
    }

    function uh(b) {
        if (Jb && !(Jb && 9 <= Ub)) {
            var c = th(b, "borderLeft"), d = th(b, "borderRight"), e = th(b, "borderTop");
            b = th(b, "borderBottom");
            return new dh(e, d, b, c)
        }
        c = gh(b, "borderLeftWidth");
        d = gh(b, "borderRightWidth");
        e = gh(b, "borderTopWidth");
        b = gh(b, "borderBottomWidth");
        return new dh(parseFloat(e), parseFloat(d), parseFloat(b), parseFloat(c))
    };
    function vh(b, c, d) {
        sc.call(this, b);
        this.map = c;
        this.frameState = m(d) ? d : null
    }

    w(vh, sc);
    function wh(b) {
        gd.call(this);
        this.element = m(b.element) ? b.element : null;
        this.b = this.T = null;
        this.v = [];
        this.render = m(b.render) ? b.render : ca;
        m(b.target) && this.c(b.target)
    }

    w(wh, gd);
    function xh(b) {
        x(b, ["mouseout", vc], function () {
            this.blur()
        }, !1)
    }

    wh.prototype.W = function () {
        Tg(this.element);
        wh.$.W.call(this)
    };
    wh.prototype.g = function () {
        return this.b
    };
    wh.prototype.setMap = function (b) {
        null === this.b || Tg(this.element);
        0 != this.v.length && (Sa(this.v, Xc), this.v.length = 0);
        this.b = b;
        null !== this.b && ((null === this.T ? b.D : this.T).appendChild(this.element), this.render !== ca && this.v.push(x(b, "postrender", this.render, !1, this)), b.render())
    };
    wh.prototype.c = function (b) {
        this.T = Ig(b)
    };
    function yh() {
        this.c = 0;
        this.f = {};
        this.b = this.a = null
    }

    k = yh.prototype;
    k.clear = function () {
        this.c = 0;
        this.f = {};
        this.b = this.a = null
    };
    function zh(b, c) {
        return b.f.hasOwnProperty(c)
    }

    k.forEach = function (b, c) {
        for (var d = this.a; null !== d;)b.call(c, d.wc, d.ae, this), d = d.cb
    };
    k.get = function (b) {
        b = this.f[b];
        if (b === this.b)return b.wc;
        b === this.a ? (this.a = this.a.cb, this.a.Tb = null) : (b.cb.Tb = b.Tb, b.Tb.cb = b.cb);
        b.cb = null;
        b.Tb = this.b;
        this.b = this.b.cb = b;
        return b.wc
    };
    k.$b = function () {
        return this.c
    };
    k.O = function () {
        var b = Array(this.c), c = 0, d;
        for (d = this.b; null !== d; d = d.Tb)b[c++] = d.ae;
        return b
    };
    k.lb = function () {
        var b = Array(this.c), c = 0, d;
        for (d = this.b; null !== d; d = d.Tb)b[c++] = d.wc;
        return b
    };
    k.pop = function () {
        var b = this.a;
        delete this.f[b.ae];
        null !== b.cb && (b.cb.Tb = null);
        this.a = b.cb;
        null === this.a && (this.b = null);
        --this.c;
        return b.wc
    };
    k.set = function (b, c) {
        var d = {ae: b, cb: null, Tb: this.b, wc: c};
        null === this.b ? this.a = d : this.b.cb = d;
        this.b = d;
        this.f[b] = d;
        ++this.c
    };
    function Ah(b) {
        yh.call(this);
        this.g = m(b) ? b : 2048
    }

    w(Ah, yh);
    function Bh(b) {
        return b.$b() > b.g
    };
    function Ch(b, c) {
        ad.call(this);
        this.a = b;
        this.state = c
    }

    w(Ch, ad);
    function Dh(b) {
        C(b, "change")
    }

    Ch.prototype.ob = function () {
        return ma(this).toString()
    };
    Ch.prototype.i = function () {
        return this.a
    };
    function Eh(b) {
        gd.call(this);
        this.j = Ae(b.projection);
        this.g = m(b.attributions) ? b.attributions : null;
        this.ba = b.logo;
        this.A = m(b.state) ? b.state : "ready";
        this.D = m(b.wrapX) ? b.wrapX : !1
    }

    w(Eh, gd);
    k = Eh.prototype;
    k.ke = ca;
    k.la = function () {
        return this.g
    };
    k.ka = function () {
        return this.ba
    };
    k.ma = function () {
        return this.j
    };
    k.na = function () {
        return this.A
    };
    function Fh(b) {
        return b.D
    }

    function Gh(b, c) {
        b.A = c;
        b.s()
    };
    function Hh(b) {
        this.minZoom = m(b.minZoom) ? b.minZoom : 0;
        this.a = b.resolutions;
        this.maxZoom = this.a.length - 1;
        this.c = m(b.origin) ? b.origin : null;
        this.g = null;
        m(b.origins) && (this.g = b.origins);
        var c = b.extent;
        m(c) && null === this.c && null === this.g && (this.c = de(c));
        this.i = null;
        m(b.tileSizes) && (this.i = b.tileSizes);
        this.l = m(b.tileSize) ? b.tileSize : null === this.i ? 256 : null;
        this.v = m(c) ? c : null;
        this.b = null;
        m(b.sizes) ? this.b = Ua(b.sizes, function (b) {
            return new lg(Math.min(0, b[0]), Math.max(b[0] - 1, -1), Math.min(0, b[1]), Math.max(b[1] -
                1, -1))
        }, this) : null != c && Ih(this, c);
        this.f = [0, 0]
    }

    var Jh = [0, 0, 0];

    function Kh(b, c, d, e, f) {
        f = Lh(b, c, f);
        for (c = c[0] - 1; c >= b.minZoom;) {
            if (d.call(null, c, jg(b, f, c, e)))return !0;
            --c
        }
        return !1
    }

    k = Hh.prototype;
    k.R = function () {
        return this.v
    };
    k.eg = function () {
        return this.maxZoom
    };
    k.fg = function () {
        return this.minZoom
    };
    k.Kc = function (b) {
        return null === this.c ? this.g[b] : this.c
    };
    k.ua = function (b) {
        return this.a[b]
    };
    k.Xg = function () {
        return this.a
    };
    function Mh(b, c, d, e) {
        return c[0] < b.maxZoom ? (e = Lh(b, c, e), jg(b, e, c[0] + 1, d)) : null
    }

    function Nh(b, c, d, e) {
        Oh(b, c[0], c[1], d, !1, Jh);
        var f = Jh[1], g = Jh[2];
        Oh(b, c[2], c[3], d, !0, Jh);
        b = Jh[1];
        c = Jh[2];
        m(e) ? (e.a = f, e.f = b, e.b = g, e.c = c) : e = new lg(f, b, g, c);
        return e
    }

    function jg(b, c, d, e) {
        return Nh(b, c, b.ua(d), e)
    }

    function gg(b, c) {
        var d = b.Kc(c[0]), e = b.ua(c[0]), f = md(b.Ja(c[0]), b.f);
        return [d[0] + (c[1] + .5) * f[0] * e, d[1] + (c[2] + .5) * f[1] * e]
    }

    function Lh(b, c, d) {
        var e = b.Kc(c[0]), f = b.ua(c[0]);
        b = md(b.Ja(c[0]), b.f);
        var g = e[0] + c[1] * b[0] * f;
        c = e[1] + c[2] * b[1] * f;
        return Od(g, c, g + b[0] * f, c + b[1] * f, d)
    }

    k.jd = function (b, c, d) {
        return Oh(this, b[0], b[1], c, !1, d)
    };
    function Oh(b, c, d, e, f, g) {
        var h = Ph(b, e), l = e / b.ua(h), n = b.Kc(h);
        b = md(b.Ja(h), b.f);
        c = l * Math.floor((c - n[0]) / e + (f ? .5 : 0)) / b[0];
        d = l * Math.floor((d - n[1]) / e + (f ? 0 : .5)) / b[1];
        f ? (c = Math.ceil(c) - 1, d = Math.ceil(d) - 1) : (c = Math.floor(c), d = Math.floor(d));
        return bg(h, c, d, g)
    }

    k.Rd = function (b, c, d) {
        return Oh(this, b[0], b[1], this.ua(c), !1, d)
    };
    k.Ja = function (b) {
        return null === this.l ? this.i[b] : this.l
    };
    function Ph(b, c) {
        var d = bc(b.a, c, 0);
        return Wb(d, b.minZoom, b.maxZoom)
    }

    function Ih(b, c) {
        for (var d = b.a.length, e = Array(d), f = b.minZoom; f < d; ++f)e[f] = jg(b, c, f);
        b.b = e
    }

    function Qh(b) {
        var c = {};
        Gb(c, m(b) ? b : {});
        m(c.extent) || (c.extent = Ae("EPSG:3857").R());
        c.resolutions = Rh(c.extent, c.maxZoom, c.tileSize);
        delete c.maxZoom;
        return new Hh(c)
    }

    function Rh(b, c, d) {
        c = m(c) ? c : 42;
        var e = ge(b);
        b = je(b);
        d = md(m(d) ? d : 256);
        d = Math.max(b / d[0], e / d[1]);
        c += 1;
        e = Array(c);
        for (b = 0; b < c; ++b)e[b] = d / Math.pow(2, b);
        return e
    }

    function hg(b) {
        b = Ae(b);
        var c = b.R();
        null === c && (b = 180 * xe.degrees / b.Nd(), c = Od(-b, -b, b, b));
        return c
    };
    function Sh(b) {
        Eh.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            logo: b.logo,
            projection: b.projection,
            state: b.state,
            wrapX: b.wrapX
        });
        this.aa = m(b.opaque) ? b.opaque : !1;
        this.fa = m(b.tilePixelRatio) ? b.tilePixelRatio : 1;
        this.tileGrid = m(b.tileGrid) ? b.tileGrid : null;
        this.b = new Ah;
        this.c = [0, 0]
    }

    w(Sh, Eh);
    function Th(b, c, d, e) {
        for (var f = !0, g, h, l = d.a; l <= d.f; ++l)for (var n = d.b; n <= d.c; ++n)g = b.kb(c, l, n), h = !1, zh(b.b, g) && (g = b.b.get(g), (h = 2 === g.state) && (h = !1 !== e(g))), h || (f = !1);
        return f
    }

    k = Sh.prototype;
    k.Kd = function () {
        return 0
    };
    k.kb = cg;
    k.za = function () {
        return this.tileGrid
    };
    function Uh(b, c) {
        var d;
        if (null === b.tileGrid) {
            var e = c.l;
            if (null === e) {
                var e = hg(c), f = m(void 0) ? void 0 : "top-left", g = Rh(e, void 0, void 0);
                "bottom-left" === f ? d = ae(e) : "bottom-right" === f ? d = be(e) : "top-left" === f ? d = de(e) : "top-right" === f && (d = ce(e));
                e = new Hh({extent: e, origin: d, resolutions: g, tileSize: void 0});
                c.l = e
            }
            d = e
        } else d = b.tileGrid;
        return d
    }

    k.cc = function (b, c, d) {
        c = Uh(this, d);
        return ld(md(c.Ja(b), this.c), this.fa, this.c)
    };
    function Vh(b, c, d) {
        d = m(d) ? d : b.j;
        var e = Uh(b, d);
        b.D && d.c && (c = fg(c, e, d));
        return ig(c, e) ? c : null
    }

    k.Ef = ca;
    function Xh(b, c) {
        sc.call(this, b);
        this.tile = c
    }

    w(Xh, sc);
    function Yh(b) {
        b = m(b) ? b : {};
        this.D = Pg("UL");
        this.u = Pg("LI");
        this.D.appendChild(this.u);
        oh(this.u, !1);
        this.f = m(b.collapsed) ? b.collapsed : !0;
        this.j = m(b.collapsible) ? b.collapsible : !0;
        this.j || (this.f = !1);
        var c = m(b.className) ? b.className : "ol-attribution", d = m(b.tipLabel) ? b.tipLabel : "Attributions", e = m(b.collapseLabel) ? b.collapseLabel : "\u00bb";
        this.C = ia(e) ? Mg("SPAN", {}, e) : e;
        e = m(b.label) ? b.label : "i";
        this.N = ia(e) ? Mg("SPAN", {}, e) : e;
        d = Mg("BUTTON", {type: "button", title: d}, this.j && !this.f ? this.C : this.N);
        x(d, "click",
            this.cl, !1, this);
        x(d, ["mouseout", vc], function () {
            this.blur()
        }, !1);
        c = Mg("DIV", c + " ol-unselectable ol-control" + (this.f && this.j ? " ol-collapsed" : "") + (this.j ? "" : " ol-uncollapsible"), this.D, d);
        wh.call(this, {element: c, render: m(b.render) ? b.render : Zh, target: b.target});
        this.A = !0;
        this.l = {};
        this.i = {};
        this.ba = {}
    }

    w(Yh, wh);
    function Zh(b) {
        b = b.frameState;
        if (null === b)this.A && (oh(this.element, !1), this.A = !1); else {
            var c, d, e, f, g, h, l, n, p, q, r, t = b.layerStatesArray, v = Db(b.attributions), A = {}, z = b.viewState.projection;
            d = 0;
            for (c = t.length; d < c; d++)if (h = t[d].layer.da(), null !== h && (q = ma(h).toString(), p = h.g, null !== p))for (e = 0, f = p.length; e < f; e++)if (l = p[e], n = ma(l).toString(), !(n in v)) {
                g = b.usedTiles[q];
                if (m(g)) {
                    var E = Uh(h, z);
                    a:{
                        r = l;
                        var B = z;
                        if (null === r.a)r = !0; else {
                            var y = void 0, L = void 0, K = void 0, H = void 0;
                            for (H in g)if (H in r.a)for (var K = g[H],
                                                              S, y = 0, L = r.a[H].length; y < L; ++y) {
                                S = r.a[H][y];
                                if (og(S, K)) {
                                    r = !0;
                                    break a
                                }
                                var ta = jg(E, B.R(), parseInt(H, 10)), Oa = ng(ta);
                                if (K.a < ta.a || K.f > ta.f)if (og(S, new lg(Xb(K.a, Oa), Xb(K.f, Oa), K.b, K.c)) || ng(K) > Oa && og(S, ta)) {
                                    r = !0;
                                    break a
                                }
                            }
                            r = !1
                        }
                    }
                } else r = !1;
                r ? (n in A && delete A[n], v[n] = l) : A[n] = l
            }
            c = [v, A];
            d = c[0];
            c = c[1];
            for (var R in this.l)R in d ? (this.i[R] || (oh(this.l[R], !0), this.i[R] = !0), delete d[R]) : R in c ? (this.i[R] && (oh(this.l[R], !1), delete this.i[R]), delete c[R]) : (Tg(this.l[R]), delete this.l[R], delete this.i[R]);
            for (R in d)e =
                Pg("LI"), e.innerHTML = d[R].b, this.D.appendChild(e), this.l[R] = e, this.i[R] = !0;
            for (R in c)e = Pg("LI"), e.innerHTML = c[R].b, oh(e, !1), this.D.appendChild(e), this.l[R] = e;
            R = !xb(this.i) || !xb(b.logos);
            this.A != R && (oh(this.element, R), this.A = R);
            R && xb(this.i) ? ah(this.element, "ol-logo-only") : bh(this.element, "ol-logo-only");
            var Aa;
            b = b.logos;
            R = this.ba;
            for (Aa in R)Aa in b || (Tg(R[Aa]), delete R[Aa]);
            for (var db in b)db in R || (Aa = new Image, Aa.src = db, d = b[db], "" === d ? d = Aa : (d = Mg("A", {href: d}), d.appendChild(Aa)), this.u.appendChild(d),
                R[db] = d);
            oh(this.u, !xb(b))
        }
    }

    k = Yh.prototype;
    k.cl = function (b) {
        b.preventDefault();
        $h(this)
    };
    function $h(b) {
        ch(b.element, "ol-collapsed");
        b.f ? Ug(b.C, b.N) : Ug(b.N, b.C);
        b.f = !b.f
    }

    k.bl = function () {
        return this.j
    };
    k.el = function (b) {
        this.j !== b && (this.j = b, ch(this.element, "ol-uncollapsible"), !b && this.f && $h(this))
    };
    k.dl = function (b) {
        this.j && this.f !== b && $h(this)
    };
    k.al = function () {
        return this.f
    };
    function ai(b) {
        b = m(b) ? b : {};
        var c = m(b.className) ? b.className : "ol-rotate", d = m(b.label) ? b.label : "\u21e7";
        this.f = null;
        ia(d) ? this.f = Mg("SPAN", "ol-compass", d) : (this.f = d, ah(this.f, "ol-compass"));
        d = Mg("BUTTON", {
            "class": c + "-reset",
            type: "button",
            title: m(b.tipLabel) ? b.tipLabel : "Reset rotation"
        }, this.f);
        x(d, "click", ai.prototype.u, !1, this);
        xh(d);
        c = Mg("DIV", c + " ol-unselectable ol-control", d);
        wh.call(this, {element: c, render: m(b.render) ? b.render : bi, target: b.target});
        this.j = m(b.duration) ? b.duration : 250;
        this.i = m(b.autoHide) ?
            b.autoHide : !0;
        this.l = void 0;
        this.i && ah(this.element, "ol-hidden")
    }

    w(ai, wh);
    ai.prototype.u = function (b) {
        b.preventDefault();
        b = this.b;
        var c = b.X();
        if (null !== c) {
            for (var d = c.Ea(); d < -Math.PI;)d += 2 * Math.PI;
            for (; d > Math.PI;)d -= 2 * Math.PI;
            m(d) && (0 < this.j && b.Oa($f({rotation: d, duration: this.j, easing: Vf})), c.fe(0))
        }
    };
    function bi(b) {
        b = b.frameState;
        if (null !== b) {
            b = b.viewState.rotation;
            if (b != this.l) {
                var c = "rotate(" + 180 * b / Math.PI + "deg)";
                if (this.i) {
                    var d = this.element;
                    0 === b ? ah(d, "ol-hidden") : bh(d, "ol-hidden")
                }
                this.f.style.msTransform = c;
                this.f.style.webkitTransform = c;
                this.f.style.transform = c
            }
            this.l = b
        }
    };
    function ci(b) {
        b = m(b) ? b : {};
        var c = m(b.className) ? b.className : "ol-zoom", d = m(b.delta) ? b.delta : 1, e = m(b.zoomOutLabel) ? b.zoomOutLabel : "\u2212", f = m(b.zoomOutTipLabel) ? b.zoomOutTipLabel : "Zoom out", g = Mg("BUTTON", {
            "class": c + "-in",
            type: "button",
            title: m(b.zoomInTipLabel) ? b.zoomInTipLabel : "Zoom in"
        }, m(b.zoomInLabel) ? b.zoomInLabel : "+");
        x(g, "click", sa(ci.prototype.i, d), !1, this);
        xh(g);
        e = Mg("BUTTON", {"class": c + "-out", type: "button", title: f}, e);
        x(e, "click", sa(ci.prototype.i, -d), !1, this);
        x(e, ["mouseout", vc], function () {
                this.blur()
            },
            !1);
        c = Mg("DIV", c + " ol-unselectable ol-control", g, e);
        wh.call(this, {element: c, target: b.target});
        this.f = m(b.duration) ? b.duration : 250
    }

    w(ci, wh);
    ci.prototype.i = function (b, c) {
        c.preventDefault();
        var d = this.b, e = d.X();
        if (null !== e) {
            var f = e.Da();
            m(f) && (0 < this.f && d.Oa(ag({
                resolution: f,
                duration: this.f,
                easing: Vf
            })), d = e.constrainResolution(f, b), e.Xb(d))
        }
    };
    function di(b) {
        b = m(b) ? b : {};
        var c = new rg;
        (m(b.zoom) ? b.zoom : 1) && c.push(new ci(b.zoomOptions));
        (m(b.rotate) ? b.rotate : 1) && c.push(new ai(b.rotateOptions));
        (m(b.attribution) ? b.attribution : 1) && c.push(new Yh(b.attributionOptions));
        return c
    };
    var ei = Lb ? "webkitfullscreenchange" : Kb ? "mozfullscreenchange" : Jb ? "MSFullscreenChange" : "fullscreenchange";

    function fi() {
        var b = Fg().a, c = b.body;
        return !!(c.webkitRequestFullscreen || c.mozRequestFullScreen && b.mozFullScreenEnabled || c.msRequestFullscreen && b.msFullscreenEnabled || c.requestFullscreen && b.fullscreenEnabled)
    }

    function gi(b) {
        b.webkitRequestFullscreen ? b.webkitRequestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.msRequestFullscreen ? b.msRequestFullscreen() : b.requestFullscreen && b.requestFullscreen()
    }

    function hi() {
        var b = Fg().a;
        return !!(b.webkitIsFullScreen || b.mozFullScreen || b.msFullscreenElement || b.fullscreenElement)
    };
    function ii(b) {
        b = m(b) ? b : {};
        this.f = m(b.className) ? b.className : "ol-full-screen";
        var c = m(b.label) ? b.label : "\u2194";
        this.i = ia(c) ? document.createTextNode(String(c)) : c;
        c = m(b.labelActive) ? b.labelActive : "\u00d7";
        this.j = ia(c) ? document.createTextNode(String(c)) : c;
        c = m(b.tipLabel) ? b.tipLabel : "Toggle full-screen";
        c = Mg("BUTTON", {"class": this.f + "-" + hi(), type: "button", title: c}, this.i);
        x(c, "click", this.A, !1, this);
        xh(c);
        x(ba.document, ei, this.l, !1, this);
        var d = this.f + " ol-unselectable ol-control " + (fi() ? "" : "ol-unsupported"),
            c = Mg("DIV", d, c);
        wh.call(this, {element: c, target: b.target});
        this.u = m(b.keys) ? b.keys : !1
    }

    w(ii, wh);
    ii.prototype.A = function (b) {
        b.preventDefault();
        fi() && (b = this.b, null !== b && (hi() ? (b = Fg().a, b.webkitCancelFullScreen ? b.webkitCancelFullScreen() : b.mozCancelFullScreen ? b.mozCancelFullScreen() : b.msExitFullscreen ? b.msExitFullscreen() : b.exitFullscreen && b.exitFullscreen()) : (b = b.jf(), b = Ig(b), this.u ? b.mozRequestFullScreenWithKeys ? b.mozRequestFullScreenWithKeys() : b.webkitRequestFullscreen ? b.webkitRequestFullscreen() : gi(b) : gi(b))))
    };
    ii.prototype.l = function () {
        var b = this.f + "-true", c = this.f + "-false", d = Vg(this.element), e = this.b;
        hi() ? ($g(d, c) && (bh(d, c), ah(d, b)), Ug(this.j, this.i)) : ($g(d, b) && (bh(d, b), ah(d, c)), Ug(this.i, this.j));
        null === e || e.Rc()
    };
    function ji(b) {
        b = m(b) ? b : {};
        var c = Mg("DIV", m(b.className) ? b.className : "ol-mouse-position");
        wh.call(this, {element: c, render: m(b.render) ? b.render : ki, target: b.target});
        x(this, id("projection"), this.fl, !1, this);
        m(b.coordinateFormat) && this.vh(b.coordinateFormat);
        m(b.projection) && this.Eg(Ae(b.projection));
        this.u = m(b.undefinedHTML) ? b.undefinedHTML : "";
        this.l = c.innerHTML;
        this.j = this.i = this.f = null
    }

    w(ji, wh);
    function ki(b) {
        b = b.frameState;
        null === b ? this.f = null : this.f != b.viewState.projection && (this.f = b.viewState.projection, this.i = null);
        li(this, this.j)
    }

    k = ji.prototype;
    k.fl = function () {
        this.i = null
    };
    k.$f = function () {
        return this.get("coordinateFormat")
    };
    k.Dg = function () {
        return this.get("projection")
    };
    k.ak = function (b) {
        this.j = this.b.Jd(b.a);
        li(this, this.j)
    };
    k.bk = function () {
        li(this, null);
        this.j = null
    };
    k.setMap = function (b) {
        ji.$.setMap.call(this, b);
        null !== b && (b = b.b, this.v.push(x(b, "mousemove", this.ak, !1, this), x(b, "mouseout", this.bk, !1, this)))
    };
    k.vh = function (b) {
        this.set("coordinateFormat", b)
    };
    k.Eg = function (b) {
        this.set("projection", b)
    };
    function li(b, c) {
        var d = b.u;
        if (null !== c && null !== b.f) {
            if (null === b.i) {
                var e = b.Dg();
                b.i = m(e) ? Ee(b.f, e) : Ue
            }
            e = b.b.ta(c);
            null !== e && (b.i(e, e), d = b.$f(), d = m(d) ? d(e) : e.toString())
        }
        m(b.l) && d == b.l || (b.element.innerHTML = d, b.l = d)
    };
    function mi(b, c, d) {
        nc.call(this);
        this.f = b;
        this.c = d;
        this.a = c || window;
        this.b = ra(this.Vf, this)
    }

    w(mi, nc);
    k = mi.prototype;
    k.ha = null;
    k.Ff = !1;
    k.start = function () {
        ni(this);
        this.Ff = !1;
        var b = oi(this), c = pi(this);
        b && !c && this.a.mozRequestAnimationFrame ? (this.ha = x(this.a, "MozBeforePaint", this.b), this.a.mozRequestAnimationFrame(null), this.Ff = !0) : this.ha = b && c ? b.call(this.a, this.b) : this.a.setTimeout(se(this.b), 20)
    };
    function ni(b) {
        if (null != b.ha) {
            var c = oi(b), d = pi(b);
            c && !d && b.a.mozRequestAnimationFrame ? Xc(b.ha) : c && d ? d.call(b.a, b.ha) : b.a.clearTimeout(b.ha)
        }
        b.ha = null
    }

    k.Vf = function () {
        this.Ff && this.ha && Xc(this.ha);
        this.ha = null;
        this.f.call(this.c, ua())
    };
    k.W = function () {
        ni(this);
        mi.$.W.call(this)
    };
    function oi(b) {
        b = b.a;
        return b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || null
    }

    function pi(b) {
        b = b.a;
        return b.cancelAnimationFrame || b.cancelRequestAnimationFrame || b.webkitCancelRequestAnimationFrame || b.mozCancelRequestAnimationFrame || b.oCancelRequestAnimationFrame || b.msCancelRequestAnimationFrame || null
    };
    function qi(b) {
        ba.setTimeout(function () {
            throw b;
        }, 0)
    }

    function ri(b, c) {
        var d = b;
        c && (d = ra(b, c));
        d = si(d);
        !ka(ba.setImmediate) || ba.Window && ba.Window.prototype.setImmediate == ba.setImmediate ? (ti || (ti = ui()), ti(d)) : ba.setImmediate(d)
    }

    var ti;

    function ui() {
        var b = ba.MessageChannel;
        "undefined" === typeof b && "undefined" !== typeof window && window.postMessage && window.addEventListener && (b = function () {
            var b = document.createElement("iframe");
            b.style.display = "none";
            b.src = "";
            document.documentElement.appendChild(b);
            var c = b.contentWindow, b = c.document;
            b.open();
            b.write("");
            b.close();
            var d = "callImmediate" + Math.random(), e = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host, b = ra(function (b) {
                    if (("*" == e || b.origin == e) && b.data == d)this.port1.onmessage()
                },
                this);
            c.addEventListener("message", b, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    c.postMessage(d, e)
                }
            }
        });
        if ("undefined" !== typeof b && !ob("Trident") && !ob("MSIE")) {
            var c = new b, d = {}, e = d;
            c.port1.onmessage = function () {
                if (m(d.next)) {
                    d = d.next;
                    var b = d.Rf;
                    d.Rf = null;
                    b()
                }
            };
            return function (b) {
                e.next = {Rf: b};
                e = e.next;
                c.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function (b) {
            var c = document.createElement("script");
            c.onreadystatechange = function () {
                c.onreadystatechange =
                    null;
                c.parentNode.removeChild(c);
                c = null;
                b();
                b = null
            };
            document.documentElement.appendChild(c)
        } : function (b) {
            ba.setTimeout(b, 0)
        }
    }

    var si = re;

    function vi(b) {
        if ("function" == typeof b.lb)return b.lb();
        if (ia(b))return b.split("");
        if (ha(b)) {
            for (var c = [], d = b.length, e = 0; e < d; e++)c.push(b[e]);
            return c
        }
        return sb(b)
    }

    function wi(b, c) {
        if ("function" == typeof b.forEach)b.forEach(c, void 0); else if (ha(b) || ia(b))Sa(b, c, void 0); else {
            var d;
            if ("function" == typeof b.O)d = b.O(); else if ("function" != typeof b.lb)if (ha(b) || ia(b)) {
                d = [];
                for (var e = b.length, f = 0; f < e; f++)d.push(f)
            } else d = tb(b); else d = void 0;
            for (var e = vi(b), f = e.length, g = 0; g < f; g++)c.call(void 0, e[g], d && d[g], b)
        }
    };
    function xi(b, c) {
        this.b = {};
        this.a = [];
        this.c = 0;
        var d = arguments.length;
        if (1 < d) {
            if (d % 2)throw Error("Uneven number of arguments");
            for (var e = 0; e < d; e += 2)this.set(arguments[e], arguments[e + 1])
        } else if (b) {
            b instanceof xi ? (d = b.O(), e = b.lb()) : (d = tb(b), e = sb(b));
            for (var f = 0; f < d.length; f++)this.set(d[f], e[f])
        }
    }

    k = xi.prototype;
    k.$b = function () {
        return this.c
    };
    k.lb = function () {
        yi(this);
        for (var b = [], c = 0; c < this.a.length; c++)b.push(this.b[this.a[c]]);
        return b
    };
    k.O = function () {
        yi(this);
        return this.a.concat()
    };
    k.wa = function () {
        return 0 == this.c
    };
    k.clear = function () {
        this.b = {};
        this.c = this.a.length = 0
    };
    k.remove = function (b) {
        return zi(this.b, b) ? (delete this.b[b], this.c--, this.a.length > 2 * this.c && yi(this), !0) : !1
    };
    function yi(b) {
        if (b.c != b.a.length) {
            for (var c = 0, d = 0; c < b.a.length;) {
                var e = b.a[c];
                zi(b.b, e) && (b.a[d++] = e);
                c++
            }
            b.a.length = d
        }
        if (b.c != b.a.length) {
            for (var f = {}, d = c = 0; c < b.a.length;)e = b.a[c], zi(f, e) || (b.a[d++] = e, f[e] = 1), c++;
            b.a.length = d
        }
    }

    k.get = function (b, c) {
        return zi(this.b, b) ? this.b[b] : c
    };
    k.set = function (b, c) {
        zi(this.b, b) || (this.c++, this.a.push(b));
        this.b[b] = c
    };
    k.forEach = function (b, c) {
        for (var d = this.O(), e = 0; e < d.length; e++) {
            var f = d[e], g = this.get(f);
            b.call(c, g, f, this)
        }
    };
    k.clone = function () {
        return new xi(this)
    };
    function zi(b, c) {
        return Object.prototype.hasOwnProperty.call(b, c)
    };
    function Ai() {
        this.a = ua()
    }

    new Ai;
    Ai.prototype.set = function (b) {
        this.a = b
    };
    Ai.prototype.get = function () {
        return this.a
    };
    function Bi(b) {
        ad.call(this);
        this.wd = b || window;
        this.Sd = x(this.wd, "resize", this.jk, !1, this);
        this.Td = Lg(this.wd || window)
    }

    w(Bi, ad);
    k = Bi.prototype;
    k.Sd = null;
    k.wd = null;
    k.Td = null;
    k.W = function () {
        Bi.$.W.call(this);
        this.Sd && (Xc(this.Sd), this.Sd = null);
        this.Td = this.wd = null
    };
    k.jk = function () {
        var b = Lg(this.wd || window), c = this.Td;
        b == c || b && c && b.width == c.width && b.height == c.height || (this.Td = b, C(this, "resize"))
    };
    function Ci(b, c, d, e, f) {
        if (!(Jb || Lb && Sb("525")))return !0;
        if (Mb && f)return Di(b);
        if (f && !e)return !1;
        ja(c) && (c = Ei(c));
        if (!d && (17 == c || 18 == c || Mb && 91 == c))return !1;
        if (Lb && e && d)switch (b) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (Jb && e && c == b)return !1;
        switch (b) {
            case 13:
                return !0;
            case 27:
                return !Lb
        }
        return Di(b)
    }

    function Di(b) {
        if (48 <= b && 57 >= b || 96 <= b && 106 >= b || 65 <= b && 90 >= b || Lb && 0 == b)return !0;
        switch (b) {
            case 32:
            case 63:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
        }
    }

    function Ei(b) {
        if (Kb)b = Fi(b); else if (Mb && Lb)a:switch (b) {
            case 93:
                b = 91;
                break a
        }
        return b
    }

    function Fi(b) {
        switch (b) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return b
        }
    };
    function Gi(b, c) {
        ad.call(this);
        b && Hi(this, b, c)
    }

    w(Gi, ad);
    k = Gi.prototype;
    k.kd = null;
    k.Zd = null;
    k.cf = null;
    k.$d = null;
    k.Qa = -1;
    k.Ob = -1;
    k.Je = !1;
    var Ii = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }, Ji = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    }, Ki = Jb || Lb && Sb("525"), Li = Mb && Kb;
    Gi.prototype.a = function (b) {
        Lb && (17 == this.Qa && !b.l || 18 == this.Qa && !b.b || Mb && 91 == this.Qa && !b.v) && (this.Ob = this.Qa = -1);
        -1 == this.Qa && (b.l && 17 != b.g ? this.Qa = 17 : b.b && 18 != b.g ? this.Qa = 18 : b.v && 91 != b.g && (this.Qa = 91));
        Ki && !Ci(b.g, this.Qa, b.f, b.l, b.b) ? this.handleEvent(b) : (this.Ob = Ei(b.g), Li && (this.Je = b.b))
    };
    Gi.prototype.b = function (b) {
        this.Ob = this.Qa = -1;
        this.Je = b.b
    };
    Gi.prototype.handleEvent = function (b) {
        var c = b.a, d, e, f = c.altKey;
        Jb && "keypress" == b.type ? (d = this.Ob, e = 13 != d && 27 != d ? c.keyCode : 0) : Lb && "keypress" == b.type ? (d = this.Ob, e = 0 <= c.charCode && 63232 > c.charCode && Di(d) ? c.charCode : 0) : Ib ? (d = this.Ob, e = Di(d) ? c.keyCode : 0) : (d = c.keyCode || this.Ob, e = c.charCode || 0, Li && (f = this.Je), Mb && 63 == e && 224 == d && (d = 191));
        var g = d = Ei(d), h = c.keyIdentifier;
        d ? 63232 <= d && d in Ii ? g = Ii[d] : 25 == d && b.f && (g = 9) : h && h in Ji && (g = Ji[h]);
        this.Qa = g;
        b = new Mi(g, e, 0, c);
        b.b = f;
        C(this, b)
    };
    function Hi(b, c, d) {
        b.$d && Ni(b);
        b.kd = c;
        b.Zd = x(b.kd, "keypress", b, d);
        b.cf = x(b.kd, "keydown", b.a, d, b);
        b.$d = x(b.kd, "keyup", b.b, d, b)
    }

    function Ni(b) {
        b.Zd && (Xc(b.Zd), Xc(b.cf), Xc(b.$d), b.Zd = null, b.cf = null, b.$d = null);
        b.kd = null;
        b.Qa = -1;
        b.Ob = -1
    }

    Gi.prototype.W = function () {
        Gi.$.W.call(this);
        Ni(this)
    };
    function Mi(b, c, d, e) {
        xc.call(this, e);
        this.type = "key";
        this.g = b;
        this.B = c
    }

    w(Mi, xc);
    function Oi(b, c) {
        ad.call(this);
        var d = this.a = b;
        (d = la(d) && 1 == d.nodeType ? this.a : this.a ? this.a.body : null) && hh(d, "direction");
        this.b = x(this.a, Kb ? "DOMMouseScroll" : "mousewheel", this, c)
    }

    w(Oi, ad);
    Oi.prototype.handleEvent = function (b) {
        var c = 0, d = 0, e = 0;
        b = b.a;
        if ("mousewheel" == b.type) {
            d = 1;
            if (Jb || Lb && (Nb || Sb("532.0")))d = 40;
            e = Pi(-b.wheelDelta, d);
            m(b.wheelDeltaX) ? (c = Pi(-b.wheelDeltaX, d), d = Pi(-b.wheelDeltaY, d)) : d = e
        } else e = b.detail, 100 < e ? e = 3 : -100 > e && (e = -3), m(b.axis) && b.axis === b.HORIZONTAL_AXIS ? c = e : d = e;
        ja(this.c) && Wb(c, -this.c, this.c);
        ja(this.f) && (d = Wb(d, -this.f, this.f));
        c = new Qi(e, b, 0, d);
        C(this, c)
    };
    function Pi(b, c) {
        return Lb && (Mb || Ob) && 0 != b % c ? b : b / c
    }

    Oi.prototype.W = function () {
        Oi.$.W.call(this);
        Xc(this.b);
        this.b = null
    };
    function Qi(b, c, d, e) {
        xc.call(this, c);
        this.type = "mousewheel";
        this.detail = b;
        this.u = e
    }

    w(Qi, xc);
    function Ri(b, c, d) {
        sc.call(this, b);
        this.a = c;
        b = m(d) ? d : {};
        this.buttons = Si(b);
        this.pressure = Ti(b, this.buttons);
        this.bubbles = Ab(b, "bubbles", !1);
        this.cancelable = Ab(b, "cancelable", !1);
        this.view = Ab(b, "view", null);
        this.detail = Ab(b, "detail", null);
        this.screenX = Ab(b, "screenX", 0);
        this.screenY = Ab(b, "screenY", 0);
        this.clientX = Ab(b, "clientX", 0);
        this.clientY = Ab(b, "clientY", 0);
        this.button = Ab(b, "button", 0);
        this.relatedTarget = Ab(b, "relatedTarget", null);
        this.pointerId = Ab(b, "pointerId", 0);
        this.width = Ab(b, "width", 0);
        this.height =
            Ab(b, "height", 0);
        this.pointerType = Ab(b, "pointerType", "");
        this.isPrimary = Ab(b, "isPrimary", !1);
        c.preventDefault && (this.preventDefault = function () {
            c.preventDefault()
        })
    }

    w(Ri, sc);
    function Si(b) {
        if (b.buttons || Ui)b = b.buttons; else switch (b.which) {
            case 1:
                b = 1;
                break;
            case 2:
                b = 4;
                break;
            case 3:
                b = 2;
                break;
            default:
                b = 0
        }
        return b
    }

    function Ti(b, c) {
        var d = 0;
        b.pressure ? d = b.pressure : d = c ? .5 : 0;
        return d
    }

    var Ui = !1;
    try {
        Ui = 1 === (new MouseEvent("click", {buttons: 1})).buttons
    } catch (Vi) {
    }
    ;
    function Wi(b, c) {
        var d = Pg("CANVAS");
        m(b) && (d.width = b);
        m(c) && (d.height = c);
        return d.getContext("2d")
    }

    var Xi = function () {
        var b;
        return function () {
            if (!m(b))if (ba.getComputedStyle) {
                var c = Pg("P"), d, e = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
                document.body.appendChild(c);
                for (var f in e)f in c.style && (c.style[f] = "translate(1px,1px)", d = ba.getComputedStyle(c).getPropertyValue(e[f]));
                Tg(c);
                b = d && "none" !== d
            } else b = !1;
            return b
        }
    }(), Yi = function () {
        var b;
        return function () {
            if (!m(b))if (ba.getComputedStyle) {
                var c = Pg("P"),
                    d, e = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                document.body.appendChild(c);
                for (var f in e)f in c.style && (c.style[f] = "translate3d(1px,1px,1px)", d = ba.getComputedStyle(c).getPropertyValue(e[f]));
                Tg(c);
                b = d && "none" !== d
            } else b = !1;
            return b
        }
    }();

    function Zi(b, c) {
        var d = b.style;
        d.WebkitTransform = c;
        d.MozTransform = c;
        d.a = c;
        d.msTransform = c;
        d.transform = c;
        Jb && !Vb && (b.style.transformOrigin = "0 0")
    }

    function $i(b, c) {
        var d;
        if (Yi()) {
            if (m(6)) {
                var e = Array(16);
                for (d = 0; 16 > d; ++d)e[d] = c[d].toFixed(6);
                d = e.join(",")
            } else d = c.join(",");
            Zi(b, "matrix3d(" + d + ")")
        } else if (Xi()) {
            e = [c[0], c[1], c[4], c[5], c[12], c[13]];
            if (m(6)) {
                var f = Array(6);
                for (d = 0; 6 > d; ++d)f[d] = e[d].toFixed(6);
                d = f.join(",")
            } else d = e.join(",");
            Zi(b, "matrix(" + d + ")")
        } else b.style.left = Math.round(c[12]) + "px", b.style.top = Math.round(c[13]) + "px"
    };
    var aj = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];

    function bj(b, c) {
        var d, e, f = aj.length;
        for (e = 0; e < f; ++e)try {
            if (d = b.getContext(aj[e], c), null !== d)return d
        } catch (g) {
        }
        return null
    };
    var cj, dj = ba.devicePixelRatio || 1, ej = !1, fj = function () {
        if (!("HTMLCanvasElement" in ba))return !1;
        try {
            var b = Wi();
            if (null === b)return !1;
            m(b.setLineDash) && (ej = !0);
            return !0
        } catch (c) {
            return !1
        }
    }(), gj = "DeviceOrientationEvent" in ba, hj = "geolocation" in ba.navigator, ij = "ontouchstart" in ba, jj = "PointerEvent" in ba, kj = !!ba.navigator.msPointerEnabled, lj = !1, mj, nj = [];
    if ("WebGLRenderingContext" in ba)try {
        var pj = bj(Pg("CANVAS"), {failIfMajorPerformanceCaveat: !0});
        null !== pj && (lj = !0, mj = pj.getParameter(pj.MAX_TEXTURE_SIZE), nj = pj.getSupportedExtensions())
    } catch (qj) {
    }
    cj = lj;
    wa = nj;
    va = mj;
    function rj(b, c) {
        this.a = b;
        this.g = c
    };
    function sj(b) {
        rj.call(this, b, {
            mousedown: this.vk,
            mousemove: this.wk,
            mouseup: this.zk,
            mouseover: this.yk,
            mouseout: this.xk
        });
        this.b = b.b;
        this.c = []
    }

    w(sj, rj);
    function tj(b, c) {
        for (var d = b.c, e = c.clientX, f = c.clientY, g = 0, h = d.length, l; g < h && (l = d[g]); g++) {
            var n = Math.abs(f - l[1]);
            if (25 >= Math.abs(e - l[0]) && 25 >= n)return !0
        }
        return !1
    }

    function uj(b) {
        var c = vj(b, b.a), d = c.preventDefault;
        c.preventDefault = function () {
            b.preventDefault();
            d()
        };
        c.pointerId = 1;
        c.isPrimary = !0;
        c.pointerType = "mouse";
        return c
    }

    k = sj.prototype;
    k.vk = function (b) {
        if (!tj(this, b)) {
            (1).toString() in this.b && this.cancel(b);
            var c = uj(b);
            this.b[(1).toString()] = b;
            wj(this.a, xj, c, b)
        }
    };
    k.wk = function (b) {
        if (!tj(this, b)) {
            var c = uj(b);
            wj(this.a, yj, c, b)
        }
    };
    k.zk = function (b) {
        if (!tj(this, b)) {
            var c = this.b[(1).toString()];
            c && c.button === b.button && (c = uj(b), wj(this.a, zj, c, b), zb(this.b, (1).toString()))
        }
    };
    k.yk = function (b) {
        if (!tj(this, b)) {
            var c = uj(b);
            Aj(this.a, c, b)
        }
    };
    k.xk = function (b) {
        if (!tj(this, b)) {
            var c = uj(b);
            Bj(this.a, c, b)
        }
    };
    k.cancel = function (b) {
        var c = uj(b);
        this.a.cancel(c, b);
        zb(this.b, (1).toString())
    };
    function Cj(b) {
        rj.call(this, b, {
            MSPointerDown: this.Ek,
            MSPointerMove: this.Fk,
            MSPointerUp: this.Ik,
            MSPointerOut: this.Gk,
            MSPointerOver: this.Hk,
            MSPointerCancel: this.Dk,
            MSGotPointerCapture: this.Bk,
            MSLostPointerCapture: this.Ck
        });
        this.b = b.b;
        this.c = ["", "unavailable", "touch", "pen", "mouse"]
    }

    w(Cj, rj);
    function Dj(b, c) {
        var d = c;
        ja(c.a.pointerType) && (d = vj(c, c.a), d.pointerType = b.c[c.a.pointerType]);
        return d
    }

    k = Cj.prototype;
    k.Ek = function (b) {
        this.b[b.a.pointerId] = b;
        var c = Dj(this, b);
        wj(this.a, xj, c, b)
    };
    k.Fk = function (b) {
        var c = Dj(this, b);
        wj(this.a, yj, c, b)
    };
    k.Ik = function (b) {
        var c = Dj(this, b);
        wj(this.a, zj, c, b);
        zb(this.b, b.a.pointerId)
    };
    k.Gk = function (b) {
        var c = Dj(this, b);
        Bj(this.a, c, b)
    };
    k.Hk = function (b) {
        var c = Dj(this, b);
        Aj(this.a, c, b)
    };
    k.Dk = function (b) {
        var c = Dj(this, b);
        this.a.cancel(c, b);
        zb(this.b, b.a.pointerId)
    };
    k.Ck = function (b) {
        C(this.a, new Ri("lostpointercapture", b, b.a))
    };
    k.Bk = function (b) {
        C(this.a, new Ri("gotpointercapture", b, b.a))
    };
    function Ej(b) {
        rj.call(this, b, {
            pointerdown: this.kn,
            pointermove: this.ln,
            pointerup: this.pn,
            pointerout: this.mn,
            pointerover: this.nn,
            pointercancel: this.jn,
            gotpointercapture: this.Ij,
            lostpointercapture: this.uk
        })
    }

    w(Ej, rj);
    k = Ej.prototype;
    k.kn = function (b) {
        Fj(this.a, b)
    };
    k.ln = function (b) {
        Fj(this.a, b)
    };
    k.pn = function (b) {
        Fj(this.a, b)
    };
    k.mn = function (b) {
        Fj(this.a, b)
    };
    k.nn = function (b) {
        Fj(this.a, b)
    };
    k.jn = function (b) {
        Fj(this.a, b)
    };
    k.uk = function (b) {
        Fj(this.a, b)
    };
    k.Ij = function (b) {
        Fj(this.a, b)
    };
    function Gj(b, c) {
        rj.call(this, b, {touchstart: this.po, touchmove: this.oo, touchend: this.no, touchcancel: this.mo});
        this.b = b.b;
        this.j = c;
        this.c = void 0;
        this.i = 0;
        this.f = void 0
    }

    w(Gj, rj);
    k = Gj.prototype;
    k.rh = function () {
        this.i = 0;
        this.f = void 0
    };
    function Hj(b, c, d) {
        c = vj(c, d);
        c.pointerId = d.identifier + 2;
        c.bubbles = !0;
        c.cancelable = !0;
        c.detail = b.i;
        c.button = 0;
        c.buttons = 1;
        c.width = d.webkitRadiusX || d.radiusX || 0;
        c.height = d.webkitRadiusY || d.radiusY || 0;
        c.pressure = d.webkitForce || d.force || .5;
        c.isPrimary = b.c === d.identifier;
        c.pointerType = "touch";
        c.clientX = d.clientX;
        c.clientY = d.clientY;
        c.screenX = d.screenX;
        c.screenY = d.screenY;
        return c
    }

    function Ij(b, c, d) {
        function e() {
            c.preventDefault()
        }

        var f = Array.prototype.slice.call(c.a.changedTouches), g = f.length, h, l;
        for (h = 0; h < g; ++h)l = Hj(b, c, f[h]), l.preventDefault = e, d.call(b, c, l)
    }

    k.po = function (b) {
        var c = b.a.touches, d = tb(this.b), e = d.length;
        if (e >= c.length) {
            var f = [], g, h, l;
            for (g = 0; g < e; ++g) {
                h = d[g];
                l = this.b[h];
                var n;
                if (!(n = 1 == h))a:{
                    n = c.length;
                    for (var p = void 0, q = 0; q < n; q++)if (p = c[q], p.identifier === h - 2) {
                        n = !0;
                        break a
                    }
                    n = !1
                }
                n || f.push(l.kc)
            }
            for (g = 0; g < f.length; ++g)this.Ke(b, f[g])
        }
        c = rb(this.b);
        if (0 === c || 1 === c && (1).toString() in this.b)this.c = b.a.changedTouches[0].identifier, m(this.f) && ba.clearTimeout(this.f);
        Jj(this, b);
        this.i++;
        Ij(this, b, this.en)
    };
    k.en = function (b, c) {
        this.b[c.pointerId] = {target: c.target, kc: c, ah: c.target};
        var d = this.a;
        c.bubbles = !0;
        wj(d, Kj, c, b);
        d = this.a;
        c.bubbles = !1;
        wj(d, Lj, c, b);
        wj(this.a, xj, c, b)
    };
    k.oo = function (b) {
        b.preventDefault();
        Ij(this, b, this.Ak)
    };
    k.Ak = function (b, c) {
        var d = this.b[c.pointerId];
        if (d) {
            var e = d.kc, f = d.ah;
            wj(this.a, yj, c, b);
            e && f !== c.target && (e.relatedTarget = c.target, c.relatedTarget = f, e.target = f, c.target ? (Bj(this.a, e, b), Aj(this.a, c, b)) : (c.target = f, c.relatedTarget = null, this.Ke(b, c)));
            d.kc = c;
            d.ah = c.target
        }
    };
    k.no = function (b) {
        Jj(this, b);
        Ij(this, b, this.qo)
    };
    k.qo = function (b, c) {
        wj(this.a, zj, c, b);
        this.a.kc(c, b);
        var d = this.a;
        c.bubbles = !1;
        wj(d, Mj, c, b);
        zb(this.b, c.pointerId);
        c.isPrimary && (this.c = void 0, this.f = ba.setTimeout(ra(this.rh, this), 200))
    };
    k.mo = function (b) {
        Ij(this, b, this.Ke)
    };
    k.Ke = function (b, c) {
        this.a.cancel(c, b);
        this.a.kc(c, b);
        var d = this.a;
        c.bubbles = !1;
        wj(d, Mj, c, b);
        zb(this.b, c.pointerId);
        c.isPrimary && (this.c = void 0, this.f = ba.setTimeout(ra(this.rh, this), 200))
    };
    function Jj(b, c) {
        var d = b.j.c, e = c.a.changedTouches[0];
        if (b.c === e.identifier) {
            var f = [e.clientX, e.clientY];
            d.push(f);
            ba.setTimeout(function () {
                Za(d, f)
            }, 2500)
        }
    };
    function Nj(b) {
        ad.call(this);
        this.f = b;
        this.b = {};
        this.c = {};
        this.a = [];
        jj ? Oj(this, new Ej(this)) : kj ? Oj(this, new Cj(this)) : (b = new sj(this), Oj(this, b), ij && Oj(this, new Gj(this, b)));
        b = this.a.length;
        for (var c, d = 0; d < b; d++)c = this.a[d], Pj(this, tb(c.g))
    }

    w(Nj, ad);
    function Oj(b, c) {
        var d = tb(c.g);
        d && (Sa(d, function (b) {
            var d = c.g[b];
            d && (this.c[b] = ra(d, c))
        }, b), b.a.push(c))
    }

    Nj.prototype.g = function (b) {
        var c = this.c[b.type];
        c && c(b)
    };
    function Pj(b, c) {
        Sa(c, function (b) {
            x(this.f, b, this.g, !1, this)
        }, b)
    }

    function Qj(b, c) {
        Sa(c, function (b) {
            Wc(this.f, b, this.g, !1, this)
        }, b)
    }

    function vj(b, c) {
        for (var d = {}, e, f = 0, g = Rj.length; f < g; f++)e = Rj[f][0], d[e] = b[e] || c[e] || Rj[f][1];
        return d
    }

    Nj.prototype.kc = function (b, c) {
        b.bubbles = !0;
        wj(this, Sj, b, c)
    };
    Nj.prototype.cancel = function (b, c) {
        wj(this, Tj, b, c)
    };
    function Bj(b, c, d) {
        b.kc(c, d);
        var e = c.relatedTarget;
        null !== e && Wg(c.target, e) || (c.bubbles = !1, wj(b, Mj, c, d))
    }

    function Aj(b, c, d) {
        c.bubbles = !0;
        wj(b, Kj, c, d);
        var e = c.relatedTarget;
        null !== e && Wg(c.target, e) || (c.bubbles = !1, wj(b, Lj, c, d))
    }

    function wj(b, c, d, e) {
        C(b, new Ri(c, e, d))
    }

    function Fj(b, c) {
        C(b, new Ri(c.type, c, c.a))
    }

    Nj.prototype.W = function () {
        for (var b = this.a.length, c, d = 0; d < b; d++)c = this.a[d], Qj(this, tb(c.g));
        Nj.$.W.call(this)
    };
    var yj = "pointermove", xj = "pointerdown", zj = "pointerup", Kj = "pointerover", Sj = "pointerout", Lj = "pointerenter", Mj = "pointerleave", Tj = "pointercancel", Rj = [["bubbles", !1], ["cancelable", !1], ["view", null], ["detail", null], ["screenX", 0], ["screenY", 0], ["clientX", 0], ["clientY", 0], ["ctrlKey", !1], ["altKey", !1], ["shiftKey", !1], ["metaKey", !1], ["button", 0], ["relatedTarget", null], ["buttons", 0], ["pointerId", 0], ["width", 0], ["height", 0], ["pressure", 0], ["tiltX", 0], ["tiltY", 0], ["pointerType", ""], ["hwTimestamp", 0], ["isPrimary",
        !1], ["type", ""], ["target", null], ["currentTarget", null], ["which", 0]];

    function Uj(b, c, d, e, f) {
        vh.call(this, b, c, f);
        this.a = d;
        this.originalEvent = d.a;
        this.pixel = c.Jd(this.originalEvent);
        this.coordinate = c.ta(this.pixel);
        this.dragging = m(e) ? e : !1
    }

    w(Uj, vh);
    Uj.prototype.preventDefault = function () {
        Uj.$.preventDefault.call(this);
        this.a.preventDefault()
    };
    Uj.prototype.nb = function () {
        Uj.$.nb.call(this);
        this.a.nb()
    };
    function Vj(b, c, d, e, f) {
        Uj.call(this, b, c, d.a, e, f);
        this.b = d
    }

    w(Vj, Uj);
    function Wj(b) {
        ad.call(this);
        this.c = b;
        this.i = 0;
        this.j = !1;
        this.b = this.l = this.f = null;
        b = this.c.b;
        this.u = 0;
        this.v = {};
        this.g = new Nj(b);
        this.a = null;
        this.l = x(this.g, xj, this.ek, !1, this);
        this.B = x(this.g, yj, this.Hn, !1, this)
    }

    w(Wj, ad);
    function Xj(b, c) {
        var d;
        d = new Vj(Yj, b.c, c);
        C(b, d);
        0 !== b.i ? (ba.clearTimeout(b.i), b.i = 0, d = new Vj(Zj, b.c, c), C(b, d)) : b.i = ba.setTimeout(ra(function () {
            this.i = 0;
            var b = new Vj(ak, this.c, c);
            C(this, b)
        }, b), 250)
    }

    function bk(b, c) {
        c.type == ck || c.type == dk ? delete b.v[c.pointerId] : c.type == ek && (b.v[c.pointerId] = !0);
        b.u = rb(b.v)
    }

    k = Wj.prototype;
    k.og = function (b) {
        bk(this, b);
        var c = new Vj(ck, this.c, b);
        C(this, c);
        !this.j && 0 === b.button && Xj(this, this.b);
        0 === this.u && (Sa(this.f, Xc), this.f = null, this.j = !1, this.b = null, rc(this.a), this.a = null)
    };
    k.ek = function (b) {
        bk(this, b);
        var c = new Vj(ek, this.c, b);
        C(this, c);
        this.b = b;
        null === this.f && (this.a = new Nj(document), this.f = [x(this.a, fk, this.Wk, !1, this), x(this.a, ck, this.og, !1, this), x(this.g, dk, this.og, !1, this)])
    };
    k.Wk = function (b) {
        if (b.clientX != this.b.clientX || b.clientY != this.b.clientY) {
            this.j = !0;
            var c = new Vj(gk, this.c, b, this.j);
            C(this, c)
        }
        b.preventDefault()
    };
    k.Hn = function (b) {
        C(this, new Vj(b.type, this.c, b, null !== this.b && (b.clientX != this.b.clientX || b.clientY != this.b.clientY)))
    };
    k.W = function () {
        null !== this.B && (Xc(this.B), this.B = null);
        null !== this.l && (Xc(this.l), this.l = null);
        null !== this.f && (Sa(this.f, Xc), this.f = null);
        null !== this.a && (rc(this.a), this.a = null);
        null !== this.g && (rc(this.g), this.g = null);
        Wj.$.W.call(this)
    };
    var ak = "singleclick", Yj = "click", Zj = "dblclick", gk = "pointerdrag", fk = "pointermove", ek = "pointerdown", ck = "pointerup", dk = "pointercancel", hk = {
        Ho: ak,
        wo: Yj,
        xo: Zj,
        Ao: gk,
        Do: fk,
        zo: ek,
        Go: ck,
        Fo: "pointerover",
        Eo: "pointerout",
        Bo: "pointerenter",
        Co: "pointerleave",
        yo: dk
    };

    function ik(b) {
        gd.call(this);
        var c = Db(b);
        c.brightness = m(b.brightness) ? b.brightness : 0;
        c.contrast = m(b.contrast) ? b.contrast : 1;
        c.hue = m(b.hue) ? b.hue : 0;
        c.opacity = m(b.opacity) ? b.opacity : 1;
        c.saturation = m(b.saturation) ? b.saturation : 1;
        c.visible = m(b.visible) ? b.visible : !0;
        c.maxResolution = m(b.maxResolution) ? b.maxResolution : Infinity;
        c.minResolution = m(b.minResolution) ? b.minResolution : 0;
        this.I(c)
    }

    w(ik, gd);
    k = ik.prototype;
    k.Ib = function () {
        return this.get("brightness")
    };
    k.Jb = function () {
        return this.get("contrast")
    };
    k.Kb = function () {
        return this.get("hue")
    };
    function jk(b) {
        var c = b.Ib(), d = b.Jb(), e = b.Kb(), f = b.Rb(), g = b.Nb(), h = b.af(), l = b.mb(), n = b.R(), p = b.Lb(), q = b.Mb();
        return {
            layer: b,
            brightness: Wb(c, -1, 1),
            contrast: Math.max(d, 0),
            hue: e,
            opacity: Wb(f, 0, 1),
            saturation: Math.max(g, 0),
            l: h,
            visible: l,
            Pb: !0,
            extent: n,
            maxResolution: p,
            minResolution: Math.max(q, 0)
        }
    }

    k.R = function () {
        return this.get("extent")
    };
    k.Lb = function () {
        return this.get("maxResolution")
    };
    k.Mb = function () {
        return this.get("minResolution")
    };
    k.Rb = function () {
        return this.get("opacity")
    };
    k.Nb = function () {
        return this.get("saturation")
    };
    k.mb = function () {
        return this.get("visible")
    };
    k.mc = function (b) {
        this.set("brightness", b)
    };
    k.nc = function (b) {
        this.set("contrast", b)
    };
    k.oc = function (b) {
        this.set("hue", b)
    };
    k.hc = function (b) {
        this.set("extent", b)
    };
    k.pc = function (b) {
        this.set("maxResolution", b)
    };
    k.qc = function (b) {
        this.set("minResolution", b)
    };
    k.ic = function (b) {
        this.set("opacity", b)
    };
    k.rc = function (b) {
        this.set("saturation", b)
    };
    k.sc = function (b) {
        this.set("visible", b)
    };
    function kk() {
    };
    function lk(b, c, d, e, f, g) {
        sc.call(this, b, c);
        this.vectorContext = d;
        this.frameState = e;
        this.context = f;
        this.glContext = g
    }

    w(lk, sc);
    function G(b) {
        var c = Db(b);
        delete c.source;
        ik.call(this, c);
        this.i = this.N = this.C = null;
        m(b.map) && this.setMap(b.map);
        x(this, id("source"), this.lk, !1, this);
        this.Qc(m(b.source) ? b.source : null)
    }

    w(G, ik);
    function mk(b, c) {
        return b.visible && c >= b.minResolution && c < b.maxResolution
    }

    k = G.prototype;
    k.Ze = function (b) {
        b = m(b) ? b : [];
        b.push(jk(this));
        return b
    };
    k.da = function () {
        var b = this.get("source");
        return m(b) ? b : null
    };
    k.af = function () {
        var b = this.da();
        return null === b ? "undefined" : b.A
    };
    k.Il = function () {
        this.s()
    };
    k.lk = function () {
        null !== this.i && (Xc(this.i), this.i = null);
        var b = this.da();
        null !== b && (this.i = x(b, "change", this.Il, !1, this));
        this.s()
    };
    k.setMap = function (b) {
        Xc(this.C);
        this.s();
        Xc(this.N);
        null !== b && (this.C = x(b, "precompose", function (b) {
            var d = jk(this);
            d.Pb = !1;
            b.frameState.layerStatesArray.push(d);
            b.frameState.layerStates[ma(this)] = d
        }, !1, this), this.N = x(this, "change", b.render, !1, b))
    };
    k.Qc = function (b) {
        this.set("source", b)
    };
    function nk(b, c, d, e, f) {
        ad.call(this);
        this.i = f;
        this.extent = b;
        this.g = d;
        this.resolution = c;
        this.state = e
    }

    w(nk, ad);
    nk.prototype.R = function () {
        return this.extent
    };
    function ok(b, c, d, e, f, g, h, l) {
        Ed(b);
        0 === c && 0 === d || Hd(b, c, d);
        1 == e && 1 == f || Id(b, e, f);
        0 !== g && Jd(b, g);
        0 === h && 0 === l || Hd(b, h, l);
        return b
    }

    function pk(b, c) {
        return b[0] == c[0] && b[1] == c[1] && b[4] == c[4] && b[5] == c[5] && b[12] == c[12] && b[13] == c[13]
    }

    function qk(b, c, d) {
        var e = b[1], f = b[5], g = b[13], h = c[0];
        c = c[1];
        d[0] = b[0] * h + b[4] * c + b[12];
        d[1] = e * h + f * c + g;
        return d
    };
    function rk(b) {
        dd.call(this);
        this.b = b
    }

    w(rk, dd);
    k = rk.prototype;
    k.Va = ca;
    k.jc = function (b, c, d, e) {
        b = b.slice();
        qk(c.pixelToCoordinateMatrix, b, b);
        if (this.Va(b, c, pe, this))return d.call(e, this.b)
    };
    k.ie = oe;
    k.Gd = function (b, c) {
        return function (d, e) {
            return Th(b, d, e, function (b) {
                c[d] || (c[d] = {});
                c[d][b.a.toString()] = b
            })
        }
    };
    k.Ll = function (b) {
        2 === b.target.state && sk(this)
    };
    function tk(b, c) {
        var d = c.state;
        2 != d && 3 != d && x(c, "change", b.Ll, !1, b);
        0 == d && (c.load(), d = c.state);
        return 2 == d
    }

    function sk(b) {
        var c = b.b;
        c.mb() && "ready" == c.af() && b.s()
    }

    function uk(b, c) {
        Bh(c.b) && b.postRenderFunctions.push(sa(function (b, c, f) {
            c = ma(b).toString();
            b = b.b;
            f = f.usedTiles[c];
            for (var g; Bh(b) && !(c = b.a.wc, g = c.a[0].toString(), g in f && f[g].contains(c.a));)b.pop().dd()
        }, c))
    }

    function vk(b, c) {
        if (null != c) {
            var d, e, f;
            e = 0;
            for (f = c.length; e < f; ++e)d = c[e], b[ma(d).toString()] = d
        }
    }

    function wk(b, c) {
        var d = c.ba;
        m(d) && (ia(d) ? b.logos[d] = "" : la(d) && (b.logos[d.src] = d.href))
    }

    function xk(b, c, d, e) {
        c = ma(c).toString();
        d = d.toString();
        c in b ? d in b[c] ? (b = b[c][d], e.a < b.a && (b.a = e.a), e.f > b.f && (b.f = e.f), e.b < b.b && (b.b = e.b), e.c > b.c && (b.c = e.c)) : b[c][d] = e : (b[c] = {}, b[c][d] = e)
    }

    function yk(b, c, d) {
        return [c * (Math.round(b[0] / c) + d[0] % 2 / 2), c * (Math.round(b[1] / c) + d[1] % 2 / 2)]
    }

    function zk(b, c, d, e, f, g, h, l, n, p) {
        var q = ma(c).toString();
        q in b.wantedTiles || (b.wantedTiles[q] = {});
        var r = b.wantedTiles[q];
        b = b.tileQueue;
        var t = d.minZoom, v, A, z, E, B, y;
        for (y = h; y >= t; --y)for (A = jg(d, g, y, A), z = d.ua(y), E = A.a; E <= A.f; ++E)for (B = A.b; B <= A.c; ++B)h - y <= l ? (v = c.bc(y, E, B, e, f), 0 == v.state && (r[eg(v.a)] = !0, v.ob() in b.c || Ak(b, [v, q, gg(d, v.a), z])), m(n) && n.call(p, v)) : c.Ef(y, E, B)
    };
    function Bk(b) {
        this.A = b.opacity;
        this.D = b.rotateWithView;
        this.B = b.rotation;
        this.v = b.scale;
        this.ea = b.snapToPixel
    }

    k = Bk.prototype;
    k.me = function () {
        return this.A
    };
    k.Pd = function () {
        return this.D
    };
    k.ne = function () {
        return this.B
    };
    k.oe = function () {
        return this.v
    };
    k.Qd = function () {
        return this.ea
    };
    k.pe = function (b) {
        this.B = b
    };
    k.qe = function (b) {
        this.v = b
    };
    function Ck(b) {
        b = m(b) ? b : {};
        this.g = m(b.anchor) ? b.anchor : [.5, .5];
        this.f = null;
        this.b = m(b.anchorOrigin) ? b.anchorOrigin : "top-left";
        this.j = m(b.anchorXUnits) ? b.anchorXUnits : "fraction";
        this.l = m(b.anchorYUnits) ? b.anchorYUnits : "fraction";
        var c = m(b.crossOrigin) ? b.crossOrigin : null, d = m(b.img) ? b.img : null, e = m(b.imgSize) ? b.imgSize : null, f = b.src;
        m(f) && 0 !== f.length || null === d || (f = d.src);
        var g = m(b.src) ? 0 : 2, h = Dk.Pa(), l = h.get(f, c);
        null === l && (l = new Ek(d, f, e, c, g), h.set(f, c, l));
        this.a = l;
        this.ca = m(b.offset) ? b.offset : [0, 0];
        this.c = m(b.offsetOrigin) ? b.offsetOrigin : "top-left";
        this.i = null;
        this.u = m(b.size) ? b.size : null;
        Bk.call(this, {
            opacity: m(b.opacity) ? b.opacity : 1,
            rotation: m(b.rotation) ? b.rotation : 0,
            scale: m(b.scale) ? b.scale : 1,
            snapToPixel: m(b.snapToPixel) ? b.snapToPixel : !0,
            rotateWithView: m(b.rotateWithView) ? b.rotateWithView : !1
        })
    }

    w(Ck, Bk);
    k = Ck.prototype;
    k.yb = function () {
        if (null !== this.f)return this.f;
        var b = this.g, c = this.fb();
        if ("fraction" == this.j || "fraction" == this.l) {
            if (null === c)return null;
            b = this.g.slice();
            "fraction" == this.j && (b[0] *= c[0]);
            "fraction" == this.l && (b[1] *= c[1])
        }
        if ("top-left" != this.b) {
            if (null === c)return null;
            b === this.g && (b = this.g.slice());
            if ("top-right" == this.b || "bottom-right" == this.b)b[0] = -b[0] + c[0];
            if ("bottom-left" == this.b || "bottom-right" == this.b)b[1] = -b[1] + c[1]
        }
        return this.f = b
    };
    k.Sb = function () {
        return this.a.a
    };
    k.Ld = function () {
        return this.a.b
    };
    k.qd = function () {
        return this.a.c
    };
    k.le = function () {
        var b = this.a;
        if (null === b.g)if (b.l) {
            var c = b.b[0], d = b.b[1], e = Wi(c, d);
            e.fillRect(0, 0, c, d);
            b.g = e.canvas
        } else b.g = b.a;
        return b.g
    };
    k.Db = function () {
        if (null !== this.i)return this.i;
        var b = this.ca;
        if ("top-left" != this.c) {
            var c = this.fb(), d = this.a.b;
            if (null === c || null === d)return null;
            b = b.slice();
            if ("top-right" == this.c || "bottom-right" == this.c)b[0] = d[0] - c[0] - b[0];
            if ("bottom-left" == this.c || "bottom-right" == this.c)b[1] = d[1] - c[1] - b[1]
        }
        return this.i = b
    };
    k.ym = function () {
        return this.a.i
    };
    k.fb = function () {
        return null === this.u ? this.a.b : this.u
    };
    k.ef = function (b, c) {
        return x(this.a, "change", b, !1, c)
    };
    k.load = function () {
        this.a.load()
    };
    k.Df = function (b, c) {
        Wc(this.a, "change", b, !1, c)
    };
    function Ek(b, c, d, e, f) {
        ad.call(this);
        this.g = null;
        this.a = null === b ? new Image : b;
        null !== e && (this.a.crossOrigin = e);
        this.f = null;
        this.c = f;
        this.b = d;
        this.i = c;
        this.l = !1
    }

    w(Ek, ad);
    Ek.prototype.j = function () {
        this.c = 3;
        Sa(this.f, Xc);
        this.f = null;
        C(this, "change")
    };
    Ek.prototype.B = function () {
        this.c = 2;
        this.b = [this.a.width, this.a.height];
        Sa(this.f, Xc);
        this.f = null;
        var b = Wi(1, 1);
        b.drawImage(this.a, 0, 0);
        try {
            b.getImageData(0, 0, 1, 1)
        } catch (c) {
            this.l = !0
        }
        C(this, "change")
    };
    Ek.prototype.load = function () {
        if (0 == this.c) {
            this.c = 1;
            this.f = [Vc(this.a, "error", this.j, !1, this), Vc(this.a, "load", this.B, !1, this)];
            try {
                this.a.src = this.i
            } catch (b) {
                this.j()
            }
        }
    };
    function Dk() {
        this.a = {};
        this.b = 0
    }

    da(Dk);
    Dk.prototype.clear = function () {
        this.a = {};
        this.b = 0
    };
    Dk.prototype.get = function (b, c) {
        var d = c + ":" + b;
        return d in this.a ? this.a[d] : null
    };
    Dk.prototype.set = function (b, c, d) {
        this.a[c + ":" + b] = d;
        ++this.b
    };
    function Fk(b, c) {
        nc.call(this);
        this.i = c;
        this.f = {};
        this.v = {}
    }

    w(Fk, nc);
    function Gk(b) {
        var c = b.viewState, d = b.coordinateToPixelMatrix;
        ok(d, b.size[0] / 2, b.size[1] / 2, 1 / c.resolution, -1 / c.resolution, -c.rotation, -c.center[0], -c.center[1]);
        Gd(d, b.pixelToCoordinateMatrix)
    }

    k = Fk.prototype;
    k.W = function () {
        pb(this.f, rc);
        Fk.$.W.call(this)
    };
    function Hk() {
        var b = Dk.Pa();
        if (32 < b.b) {
            var c = 0, d, e;
            for (d in b.a) {
                e = b.a[d];
                var f;
                if (f = 0 === (c++ & 3))Cc(e) ? e = cd(e, void 0, void 0) : (e = Rc(e), e = !!e && Lc(e, void 0, void 0)), f = !e;
                f && (delete b.a[d], --b.b)
            }
        }
    }

    k.mf = function (b, c, d, e, f, g) {
        var h, l = c.viewState, n = l.resolution, p = l.projection, l = b;
        if (p.g) {
            h = p.R();
            var p = je(h), q = b[0];
            if (q < h[0] || q > h[2])l = Math.ceil((h[0] - q) / p), l = [q + p * l, b[1]]
        }
        p = c.layerStatesArray;
        for (q = p.length - 1; 0 <= q; --q) {
            h = p[q];
            var r = h.layer;
            if (!h.Pb || mk(h, n) && f.call(g, r))if (h = Ik(this, r).Va(Fh(r.da()) ? l : b, c, d, e))return h
        }
    };
    k.Mg = function (b, c, d, e, f, g) {
        var h, l = c.viewState.resolution, n = c.layerStatesArray, p;
        for (p = n.length - 1; 0 <= p; --p) {
            h = n[p];
            var q = h.layer;
            if (mk(h, l) && f.call(g, q) && (h = Ik(this, q).jc(b, c, d, e)))return h
        }
    };
    k.Ng = function (b, c, d, e) {
        b = this.mf(b, c, pe, this, d, e);
        return m(b)
    };
    function Ik(b, c) {
        var d = ma(c).toString();
        if (d in b.f)return b.f[d];
        var e = b.Oe(c);
        b.f[d] = e;
        b.v[d] = x(e, "change", b.Uj, !1, b);
        return e
    }

    k.Uj = function () {
        this.i.render()
    };
    k.xe = ca;
    k.Mn = function (b, c) {
        for (var d in this.f)if (!(null !== c && d in c.layerStates)) {
            var e = d, f = this.f[e];
            delete this.f[e];
            Xc(this.v[e]);
            delete this.v[e];
            rc(f)
        }
    };
    function Jk(b, c) {
        for (var d in b.f)if (!(d in c.layerStates)) {
            c.postRenderFunctions.push(ra(b.Mn, b));
            break
        }
    };
    function Kk(b, c) {
        this.j = b;
        this.g = c;
        this.a = [];
        this.b = [];
        this.c = {}
    }

    Kk.prototype.clear = function () {
        this.a.length = 0;
        this.b.length = 0;
        yb(this.c)
    };
    function Lk(b) {
        var c = b.a, d = b.b, e = c[0];
        1 == c.length ? (c.length = 0, d.length = 0) : (c[0] = c.pop(), d[0] = d.pop(), Mk(b, 0));
        c = b.g(e);
        delete b.c[c];
        return e
    }

    function Ak(b, c) {
        var d = b.j(c);
        Infinity != d && (b.a.push(c), b.b.push(d), b.c[b.g(c)] = !0, Nk(b, 0, b.a.length - 1))
    }

    Kk.prototype.$b = function () {
        return this.a.length
    };
    Kk.prototype.wa = function () {
        return 0 === this.a.length
    };
    function Mk(b, c) {
        for (var d = b.a, e = b.b, f = d.length, g = d[c], h = e[c], l = c; c < f >> 1;) {
            var n = 2 * c + 1, p = 2 * c + 2, n = p < f && e[p] < e[n] ? p : n;
            d[c] = d[n];
            e[c] = e[n];
            c = n
        }
        d[c] = g;
        e[c] = h;
        Nk(b, l, c)
    }

    function Nk(b, c, d) {
        var e = b.a;
        b = b.b;
        for (var f = e[d], g = b[d]; d > c;) {
            var h = d - 1 >> 1;
            if (b[h] > g)e[d] = e[h], b[d] = b[h], d = h; else break
        }
        e[d] = f;
        b[d] = g
    }

    function Ok(b) {
        var c = b.j, d = b.a, e = b.b, f = 0, g = d.length, h, l, n;
        for (l = 0; l < g; ++l)h = d[l], n = c(h), Infinity == n ? delete b.c[b.g(h)] : (e[f] = n, d[f++] = h);
        d.length = f;
        e.length = f;
        for (c = (b.a.length >> 1) - 1; 0 <= c; c--)Mk(b, c)
    };
    function Pk(b, c) {
        Kk.call(this, function (c) {
            return b.apply(null, c)
        }, function (b) {
            return b[0].ob()
        });
        this.l = c;
        this.f = 0
    }

    w(Pk, Kk);
    Pk.prototype.i = function (b) {
        b = b.target;
        var c = b.state;
        if (2 === c || 3 === c || 4 === c)Wc(b, "change", this.i, !1, this), --this.f, this.l()
    };
    function Qk(b, c, d) {
        this.f = b;
        this.c = c;
        this.i = d;
        this.a = [];
        this.b = this.g = 0
    }

    Qk.prototype.update = function (b, c) {
        this.a.push(b, c, ua())
    };
    function Rk(b, c) {
        var d = b.f, e = b.b, f = b.c - e, g = Sk(b);
        return Zf({
            source: c, duration: g, easing: function (b) {
                return e * (Math.exp(d * b * g) - 1) / f
            }
        })
    }

    function Sk(b) {
        return Math.log(b.c / b.b) / b.f
    };
    function Tk(b) {
        gd.call(this);
        this.v = null;
        this.f(!0);
        this.handleEvent = b.handleEvent
    }

    w(Tk, gd);
    Tk.prototype.b = function () {
        return this.get("active")
    };
    Tk.prototype.f = function (b) {
        this.set("active", b)
    };
    Tk.prototype.setMap = function (b) {
        this.v = b
    };
    function Uk(b, c, d, e, f) {
        if (null != d) {
            var g = c.Ea(), h = c.Ka();
            m(g) && m(h) && m(f) && 0 < f && (b.Oa($f({
                rotation: g,
                duration: f,
                easing: Vf
            })), m(e) && b.Oa(Zf({source: h, duration: f, easing: Vf})));
            c.rotate(d, e)
        }
    }

    function Vk(b, c, d, e, f) {
        var g = c.Da();
        d = c.constrainResolution(g, d, 0);
        Wk(b, c, d, e, f)
    }

    function Wk(b, c, d, e, f) {
        if (null != d) {
            var g = c.Da(), h = c.Ka();
            m(g) && m(h) && m(f) && 0 < f && (b.Oa(ag({
                resolution: g,
                duration: f,
                easing: Vf
            })), m(e) && b.Oa(Zf({source: h, duration: f, easing: Vf})));
            if (null != e) {
                var l;
                b = c.Ka();
                f = c.Da();
                m(b) && m(f) && (l = [e[0] - d * (e[0] - b[0]) / f, e[1] - d * (e[1] - b[1]) / f]);
                c.eb(l)
            }
            c.Xb(d)
        }
    };
    function Xk(b) {
        b = m(b) ? b : {};
        this.c = m(b.delta) ? b.delta : 1;
        Tk.call(this, {handleEvent: Yk});
        this.g = m(b.duration) ? b.duration : 250
    }

    w(Xk, Tk);
    function Yk(b) {
        var c = !1, d = b.a;
        if (b.type == Zj) {
            var c = b.map, e = b.coordinate, d = d.f ? -this.c : this.c, f = c.X();
            Vk(c, f, d, e, this.g);
            b.preventDefault();
            c = !0
        }
        return !c
    };
    function Zk(b) {
        b = b.a;
        return b.b && !b.j && b.f
    }

    function $k(b) {
        return "pointermove" == b.type
    }

    function al(b) {
        return b.type == ak
    }

    function bl(b) {
        b = b.a;
        return !b.b && !b.j && !b.f
    }

    function cl(b) {
        b = b.a;
        return !b.b && !b.j && b.f
    }

    function dl(b) {
        b = b.a.target.tagName;
        return "INPUT" !== b && "SELECT" !== b && "TEXTAREA" !== b
    }

    function el(b) {
        return 1 == b.b.pointerId
    };
    function fl(b) {
        b = m(b) ? b : {};
        Tk.call(this, {handleEvent: m(b.handleEvent) ? b.handleEvent : gl});
        this.Uc = m(b.handleDownEvent) ? b.handleDownEvent : oe;
        this.He = m(b.handleDragEvent) ? b.handleDragEvent : ca;
        this.mi = m(b.handleMoveEvent) ? b.handleMoveEvent : ca;
        this.Vh = m(b.handleUpEvent) ? b.handleUpEvent : oe;
        this.u = !1;
        this.ba = {};
        this.i = []
    }

    w(fl, Tk);
    function hl(b) {
        for (var c = b.length, d = 0, e = 0, f = 0; f < c; f++)d += b[f].clientX, e += b[f].clientY;
        return [d / c, e / c]
    }

    function gl(b) {
        if (!(b instanceof Vj))return !0;
        var c = !1, d = b.type;
        if (d === ek || d === gk || d === ck)d = b.b, b.type == ck ? delete this.ba[d.pointerId] : b.type == ek ? this.ba[d.pointerId] = d : d.pointerId in this.ba && (this.ba[d.pointerId] = d), this.i = sb(this.ba);
        this.u && (b.type == gk ? this.He(b) : b.type == ck && (this.u = this.Vh(b)));
        b.type == ek ? (this.u = b = this.Uc(b), c = this.tc(b)) : b.type == fk && this.mi(b);
        return !c
    }

    fl.prototype.tc = re;
    function il(b) {
        fl.call(this, {handleDownEvent: jl, handleDragEvent: kl, handleUpEvent: ll});
        b = m(b) ? b : {};
        this.c = b.kinetic;
        this.g = this.j = null;
        this.A = m(b.condition) ? b.condition : bl;
        this.l = !1
    }

    w(il, fl);
    function kl(b) {
        var c = hl(this.i);
        this.c && this.c.update(c[0], c[1]);
        if (null !== this.g) {
            var d = this.g[0] - c[0], e = c[1] - this.g[1];
            b = b.map;
            var f = b.X(), g = Sf(f), e = d = [d, e], h = g.resolution;
            e[0] *= h;
            e[1] *= h;
            sd(d, g.rotation);
            nd(d, g.center);
            d = f.Fd(d);
            b.render();
            f.eb(d)
        }
        this.g = c
    }

    function ll(b) {
        b = b.map;
        var c = b.X();
        if (0 === this.i.length) {
            var d;
            if (d = !this.l && this.c)if (d = this.c, 6 > d.a.length)d = !1; else {
                var e = ua() - d.i, f = d.a.length - 3;
                if (d.a[f + 2] < e)d = !1; else {
                    for (var g = f - 3; 0 < g && d.a[g + 2] > e;)g -= 3;
                    var e = d.a[f + 2] - d.a[g + 2], h = d.a[f] - d.a[g], f = d.a[f + 1] - d.a[g + 1];
                    d.g = Math.atan2(f, h);
                    d.b = Math.sqrt(h * h + f * f) / e;
                    d = d.b > d.c
                }
            }
            d && (d = this.c, d = (d.c - d.b) / d.f, f = this.c.g, g = c.Ka(), this.j = Rk(this.c, g), b.Oa(this.j), g = b.ya(g), d = b.ta([g[0] - d * Math.cos(f), g[1] - d * Math.sin(f)]), d = c.Fd(d), c.eb(d));
            Uf(c, -1);
            b.render();
            return !1
        }
        this.g = null;
        return !0
    }

    function jl(b) {
        if (0 < this.i.length && this.A(b)) {
            var c = b.map, d = c.X();
            this.g = null;
            this.u || Uf(d, 1);
            c.render();
            null !== this.j && Za(c.C, this.j) && (d.eb(b.frameState.viewState.center), this.j = null);
            this.c && (b = this.c, b.a.length = 0, b.g = 0, b.b = 0);
            this.l = 1 < this.i.length;
            return !0
        }
        return !1
    }

    il.prototype.tc = oe;
    function ml(b) {
        b = m(b) ? b : {};
        fl.call(this, {handleDownEvent: nl, handleDragEvent: pl, handleUpEvent: ql});
        this.g = m(b.condition) ? b.condition : Zk;
        this.c = void 0;
        this.j = m(b.duration) ? b.duration : 250
    }

    w(ml, fl);
    function pl(b) {
        if (el(b)) {
            var c = b.map, d = c.Ca();
            b = b.pixel;
            d = Math.atan2(d[1] / 2 - b[1], b[0] - d[0] / 2);
            if (m(this.c)) {
                b = d - this.c;
                var e = c.X(), f = e.Ea();
                c.render();
                Uk(c, e, f - b)
            }
            this.c = d
        }
    }

    function ql(b) {
        if (!el(b))return !0;
        b = b.map;
        var c = b.X();
        Uf(c, -1);
        var d = c.Ea(), e = this.j, d = c.constrainRotation(d, 0);
        Uk(b, c, d, void 0, e);
        return !1
    }

    function nl(b) {
        return el(b) && Ac(b.a) && this.g(b) ? (b = b.map, Uf(b.X(), 1), b.render(), this.c = void 0, !0) : !1
    }

    ml.prototype.tc = oe;
    function rl(b) {
        this.c = this.b = this.f = this.g = this.a = null;
        this.j = b
    }

    w(rl, nc);
    function sl(b) {
        var c = b.f, d = b.b;
        b = Ua([c, [c[0], d[1]], d, [d[0], c[1]]], b.a.ta, b.a);
        b[4] = b[0].slice();
        return new F([b])
    }

    rl.prototype.W = function () {
        this.setMap(null)
    };
    rl.prototype.i = function (b) {
        var c = this.c, d = this.j;
        b.vectorContext.yc(Infinity, function (b) {
            b.Ha(d.f, d.c);
            b.Ia(d.b);
            b.Yb(c, null)
        })
    };
    rl.prototype.Y = function () {
        return this.c
    };
    function tl(b) {
        null === b.a || null === b.f || null === b.b || b.a.render()
    }

    rl.prototype.setMap = function (b) {
        null !== this.g && (Xc(this.g), this.g = null, this.a.render(), this.a = null);
        this.a = b;
        null !== this.a && (this.g = x(b, "postcompose", this.i, !1, this), tl(this))
    };
    function ul(b, c) {
        sc.call(this, b);
        this.coordinate = c
    }

    w(ul, sc);
    function vl(b) {
        fl.call(this, {handleDownEvent: wl, handleDragEvent: xl, handleUpEvent: yl});
        b = m(b) ? b : {};
        this.g = new rl(m(b.style) ? b.style : null);
        this.c = null;
        this.l = m(b.condition) ? b.condition : pe
    }

    w(vl, fl);
    function xl(b) {
        if (el(b)) {
            var c = this.g;
            b = b.pixel;
            c.f = this.c;
            c.b = b;
            c.c = sl(c);
            tl(c)
        }
    }

    vl.prototype.Y = function () {
        return this.g.Y()
    };
    vl.prototype.j = ca;
    function yl(b) {
        if (!el(b))return !0;
        this.g.setMap(null);
        var c = b.pixel[0] - this.c[0], d = b.pixel[1] - this.c[1];
        64 <= c * c + d * d && (this.j(b), C(this, new ul("boxend", b.coordinate)));
        return !1
    }

    function wl(b) {
        if (el(b) && Ac(b.a) && this.l(b)) {
            this.c = b.pixel;
            this.g.setMap(b.map);
            var c = this.g, d = this.c;
            c.f = this.c;
            c.b = d;
            c.c = sl(c);
            tl(c);
            C(this, new ul("boxstart", b.coordinate));
            return !0
        }
        return !1
    };
    function zl() {
        this.b = -1
    };
    function Al() {
        this.b = -1;
        this.b = 64;
        this.a = Array(4);
        this.g = Array(this.b);
        this.f = this.c = 0;
        this.a[0] = 1732584193;
        this.a[1] = 4023233417;
        this.a[2] = 2562383102;
        this.a[3] = 271733878;
        this.f = this.c = 0
    }

    w(Al, zl);
    function Bl(b, c, d) {
        d || (d = 0);
        var e = Array(16);
        if (ia(c))for (var f = 0; 16 > f; ++f)e[f] = c.charCodeAt(d++) | c.charCodeAt(d++) << 8 | c.charCodeAt(d++) << 16 | c.charCodeAt(d++) << 24; else for (f = 0; 16 > f; ++f)e[f] = c[d++] | c[d++] << 8 | c[d++] << 16 | c[d++] << 24;
        c = b.a[0];
        d = b.a[1];
        var f = b.a[2], g = b.a[3], h = 0, h = c + (g ^ d & (f ^ g)) + e[0] + 3614090360 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[1] + 3905402710 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[2] + 606105819 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^
            c)) + e[3] + 3250441966 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[4] + 4118548399 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[5] + 1200080426 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[6] + 2821735955 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[7] + 4249261313 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[8] + 1770035416 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[9] + 2336552879 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f +
            (d ^ g & (c ^ d)) + e[10] + 4294925233 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[11] + 2304563134 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[12] + 1804603682 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[13] + 4254626195 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[14] + 2792965006 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[15] + 1236535329 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (f ^ g & (d ^ f)) + e[1] + 4129170786 & 4294967295;
        c = d + (h << 5 & 4294967295 |
            h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[6] + 3225465664 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[11] + 643717713 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[0] + 3921069994 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[5] + 3593408605 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[10] + 38016083 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[15] + 3634488961 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[4] + 3889429448 & 4294967295;
        d = f + (h << 20 & 4294967295 |
            h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[9] + 568446438 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[14] + 3275163606 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[3] + 4107603335 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[8] + 1163531501 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[13] + 2850285829 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[2] + 4243563512 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[7] + 1735328473 & 4294967295;
        f = g + (h << 14 & 4294967295 |
            h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[12] + 2368359562 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (d ^ f ^ g) + e[5] + 4294588738 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[8] + 2272392833 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[11] + 1839030562 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[14] + 4259657740 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[1] + 2763975236 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[4] + 1272893353 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^
            c ^ d) + e[7] + 4139469664 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[10] + 3200236656 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[13] + 681279174 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[0] + 3936430074 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[3] + 3572445317 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[6] + 76029189 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[9] + 3654602809 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[12] + 3873151461 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[15] + 530742520 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[2] + 3299628645 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (f ^ (d | ~g)) + e[0] + 4096336452 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[7] + 1126891415 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[14] + 2878612391 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[5] + 4237533241 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[12] + 1700485571 & 4294967295;
        c = d +
            (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[3] + 2399980690 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[10] + 4293915773 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[1] + 2240044497 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[8] + 1873313359 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[15] + 4264355552 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[6] + 2734768916 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[13] + 1309151649 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[4] + 4149444226 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[11] + 3174756917 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[2] + 718787259 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[9] + 3951481745 & 4294967295;
        b.a[0] = b.a[0] + c & 4294967295;
        b.a[1] = b.a[1] + (f + (h << 21 & 4294967295 | h >>> 11)) & 4294967295;
        b.a[2] = b.a[2] + f & 4294967295;
        b.a[3] = b.a[3] + g & 4294967295
    }

    Al.prototype.update = function (b, c) {
        m(c) || (c = b.length);
        for (var d = c - this.b, e = this.g, f = this.c, g = 0; g < c;) {
            if (0 == f)for (; g <= d;)Bl(this, b, g), g += this.b;
            if (ia(b))for (; g < c;) {
                if (e[f++] = b.charCodeAt(g++), f == this.b) {
                    Bl(this, e);
                    f = 0;
                    break
                }
            } else for (; g < c;)if (e[f++] = b[g++], f == this.b) {
                Bl(this, e);
                f = 0;
                break
            }
        }
        this.c = f;
        this.f += c
    };
    function Cl(b) {
        b = m(b) ? b : {};
        this.a = m(b.color) ? b.color : null;
        this.f = b.lineCap;
        this.c = m(b.lineDash) ? b.lineDash : null;
        this.g = b.lineJoin;
        this.i = b.miterLimit;
        this.b = b.width;
        this.j = void 0
    }

    k = Cl.prototype;
    k.Em = function () {
        return this.a
    };
    k.ij = function () {
        return this.f
    };
    k.Fm = function () {
        return this.c
    };
    k.jj = function () {
        return this.g
    };
    k.oj = function () {
        return this.i
    };
    k.Gm = function () {
        return this.b
    };
    k.Hm = function (b) {
        this.a = b;
        this.j = void 0
    };
    k.Wn = function (b) {
        this.f = b;
        this.j = void 0
    };
    k.Im = function (b) {
        this.c = b;
        this.j = void 0
    };
    k.Xn = function (b) {
        this.g = b;
        this.j = void 0
    };
    k.Yn = function (b) {
        this.i = b;
        this.j = void 0
    };
    k.ho = function (b) {
        this.b = b;
        this.j = void 0
    };
    k.zb = function () {
        if (!m(this.j)) {
            var b = "s" + (null === this.a ? "-" : yg(this.a)) + "," + (m(this.f) ? this.f.toString() : "-") + "," + (null === this.c ? "-" : this.c.toString()) + "," + (m(this.g) ? this.g : "-") + "," + (m(this.i) ? this.i.toString() : "-") + "," + (m(this.b) ? this.b.toString() : "-"), c = new Al;
            c.update(b);
            var d = Array((56 > c.c ? c.b : 2 * c.b) - c.c);
            d[0] = 128;
            for (b = 1; b < d.length - 8; ++b)d[b] = 0;
            for (var e = 8 * c.f, b = d.length - 8; b < d.length; ++b)d[b] = e & 255, e /= 256;
            c.update(d);
            d = Array(16);
            for (b = e = 0; 4 > b; ++b)for (var f = 0; 32 > f; f += 8)d[e++] = c.a[b] >>> f & 255;
            if (8192 > d.length)c = String.fromCharCode.apply(null, d); else for (c = "", b = 0; b < d.length; b += 8192)c += String.fromCharCode.apply(null, fb(d, b, b + 8192));
            this.j = c
        }
        return this.j
    };
    var Dl = [0, 0, 0, 1], El = [], Fl = [0, 0, 0, 1];

    function Gl(b) {
        b = m(b) ? b : {};
        this.a = m(b.color) ? b.color : null;
        this.b = void 0
    }

    Gl.prototype.c = function () {
        return this.a
    };
    Gl.prototype.f = function (b) {
        this.a = b;
        this.b = void 0
    };
    Gl.prototype.zb = function () {
        m(this.b) || (this.b = "f" + (null === this.a ? "-" : yg(this.a)));
        return this.b
    };
    function Hl(b) {
        b = m(b) ? b : {};
        this.i = this.a = this.g = null;
        this.f = m(b.fill) ? b.fill : null;
        this.b = m(b.stroke) ? b.stroke : null;
        this.c = b.radius;
        this.u = [0, 0];
        this.l = this.ca = this.j = null;
        var c = b.atlasManager, d, e = null, f, g = 0;
        null !== this.b && (f = yg(this.b.a), g = this.b.b, m(g) || (g = 1), e = this.b.c, ej || (e = null));
        var h = 2 * (this.c + g) + 1;
        f = {strokeStyle: f, ud: g, size: h, lineDash: e};
        m(c) ? (h = Math.round(h), (e = null === this.f) && (d = ra(this.Sg, this, f)), g = this.zb(), f = c.add(g, h, h, ra(this.Tg, this, f), d), this.a = f.image, this.u = [f.offsetX, f.offsetY],
            d = f.image.width, this.i = e ? f.rg : this.a) : (this.a = Pg("CANVAS"), this.a.height = h, this.a.width = h, d = h = this.a.width, c = this.a.getContext("2d"), this.Tg(f, c, 0, 0), null === this.f ? (c = this.i = Pg("CANVAS"), c.height = f.size, c.width = f.size, c = c.getContext("2d"), this.Sg(f, c, 0, 0)) : this.i = this.a);
        this.j = [h / 2, h / 2];
        this.ca = [h, h];
        this.l = [d, d];
        Bk.call(this, {
            opacity: 1,
            rotateWithView: !1,
            rotation: 0,
            scale: 1,
            snapToPixel: m(b.snapToPixel) ? b.snapToPixel : !0
        })
    }

    w(Hl, Bk);
    k = Hl.prototype;
    k.yb = function () {
        return this.j
    };
    k.vm = function () {
        return this.f
    };
    k.le = function () {
        return this.i
    };
    k.Sb = function () {
        return this.a
    };
    k.qd = function () {
        return 2
    };
    k.Ld = function () {
        return this.l
    };
    k.Db = function () {
        return this.u
    };
    k.wm = function () {
        return this.c
    };
    k.fb = function () {
        return this.ca
    };
    k.xm = function () {
        return this.b
    };
    k.ef = ca;
    k.load = ca;
    k.Df = ca;
    k.Tg = function (b, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        c.arc(b.size / 2, b.size / 2, this.c, 0, 2 * Math.PI, !0);
        null !== this.f && (c.fillStyle = yg(this.f.a), c.fill());
        null !== this.b && (c.strokeStyle = b.strokeStyle, c.lineWidth = b.ud, null === b.lineDash || c.setLineDash(b.lineDash), c.stroke());
        c.closePath()
    };
    k.Sg = function (b, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        c.arc(b.size / 2, b.size / 2, this.c, 0, 2 * Math.PI, !0);
        c.fillStyle = Dl;
        c.fill();
        null !== this.b && (c.strokeStyle = b.strokeStyle, c.lineWidth = b.ud, null === b.lineDash || c.setLineDash(b.lineDash), c.stroke());
        c.closePath()
    };
    k.zb = function () {
        var b = null === this.b ? "-" : this.b.zb(), c = null === this.f ? "-" : this.f.zb();
        if (null === this.g || b != this.g[1] || c != this.g[2] || this.c != this.g[3])this.g = ["c" + b + c + (m(this.c) ? this.c.toString() : "-"), b, c, this.c];
        return this.g[0]
    };
    function Il(b) {
        b = m(b) ? b : {};
        this.j = null;
        this.g = Jl;
        m(b.geometry) && this.Wg(b.geometry);
        this.f = m(b.fill) ? b.fill : null;
        this.i = m(b.image) ? b.image : null;
        this.c = m(b.stroke) ? b.stroke : null;
        this.b = m(b.text) ? b.text : null;
        this.a = b.zIndex
    }

    k = Il.prototype;
    k.Y = function () {
        return this.j
    };
    k.cj = function () {
        return this.g
    };
    k.Jm = function () {
        return this.f
    };
    k.Km = function () {
        return this.i
    };
    k.Lm = function () {
        return this.c
    };
    k.Mm = function () {
        return this.b
    };
    k.Gj = function () {
        return this.a
    };
    k.Wg = function (b) {
        ka(b) ? this.g = b : ia(b) ? this.g = function (c) {
            return c.get(b)
        } : null === b ? this.g = Jl : m(b) && (this.g = function () {
            return b
        });
        this.j = b
    };
    k.jo = function (b) {
        this.a = b
    };
    function Kl(b) {
        ka(b) || (b = ga(b) ? b : [b], b = ne(b));
        return b
    }

    function Ll() {
        var b = new Gl({color: "rgba(255,255,255,0.4)"}), c = new Cl({
            color: "#3399CC",
            width: 1.25
        }), d = [new Il({image: new Hl({fill: b, stroke: c, radius: 5}), fill: b, stroke: c})];
        Ll = function () {
            return d
        };
        return d
    }

    function Ml() {
        var b = {}, c = [255, 255, 255, 1], d = [0, 153, 255, 1];
        b.Polygon = [new Il({fill: new Gl({color: [255, 255, 255, .5]})})];
        b.MultiPolygon = b.Polygon;
        b.LineString = [new Il({stroke: new Cl({color: c, width: 5})}), new Il({stroke: new Cl({color: d, width: 3})})];
        b.MultiLineString = b.LineString;
        b.Circle = b.Polygon.concat(b.LineString);
        b.Point = [new Il({
            image: new Hl({radius: 6, fill: new Gl({color: d}), stroke: new Cl({color: c, width: 1.5})}),
            zIndex: Infinity
        })];
        b.MultiPoint = b.Point;
        b.GeometryCollection = b.Polygon.concat(b.Point);
        return b
    }

    function Jl(b) {
        return b.Y()
    };
    function Nl(b) {
        var c = m(b) ? b : {};
        b = m(c.condition) ? c.condition : cl;
        this.A = m(c.duration) ? c.duration : 200;
        c = m(c.style) ? c.style : new Il({stroke: new Cl({color: [0, 0, 255, 1]})});
        vl.call(this, {condition: b, style: c})
    }

    w(Nl, vl);
    Nl.prototype.j = function () {
        var b = this.v, c = b.X(), d = this.Y().R(), e = ee(d), f = b.Ca(), d = Math.max(je(d) / f[0], ge(d) / f[1]), f = this.A, d = c.constrainResolution(d, 0, void 0);
        Wk(b, c, d, e, f)
    };
    function Ol(b) {
        Tk.call(this, {handleEvent: Pl});
        b = m(b) ? b : {};
        this.c = m(b.condition) ? b.condition : ue(bl, dl);
        this.g = m(b.duration) ? b.duration : 100;
        this.i = m(b.pixelDelta) ? b.pixelDelta : 128
    }

    w(Ol, Tk);
    function Pl(b) {
        var c = !1;
        if ("key" == b.type) {
            var d = b.a.g;
            if (this.c(b) && (40 == d || 37 == d || 39 == d || 38 == d)) {
                var e = b.map, c = e.X(), f = Sf(c), g = f.resolution * this.i, h = 0, l = 0;
                40 == d ? l = -g : 37 == d ? h = -g : 39 == d ? h = g : l = g;
                d = [h, l];
                sd(d, f.rotation);
                f = this.g;
                g = c.Ka();
                m(g) && (m(f) && 0 < f && e.Oa(Zf({
                    source: g,
                    duration: f,
                    easing: Xf
                })), e = c.Fd([g[0] + d[0], g[1] + d[1]]), c.eb(e));
                b.preventDefault();
                c = !0
            }
        }
        return !c
    };
    function Ql(b) {
        Tk.call(this, {handleEvent: Rl});
        b = m(b) ? b : {};
        this.g = m(b.condition) ? b.condition : dl;
        this.c = m(b.delta) ? b.delta : 1;
        this.i = m(b.duration) ? b.duration : 100
    }

    w(Ql, Tk);
    function Rl(b) {
        var c = !1;
        if ("key" == b.type) {
            var d = b.a.B;
            if (this.g(b) && (43 == d || 45 == d)) {
                c = b.map;
                d = 43 == d ? this.c : -this.c;
                c.render();
                var e = c.X();
                Vk(c, e, d, void 0, this.i);
                b.preventDefault();
                c = !0
            }
        }
        return !c
    };
    function Sl(b) {
        Tk.call(this, {handleEvent: Tl});
        b = m(b) ? b : {};
        this.c = 0;
        this.u = m(b.duration) ? b.duration : 250;
        this.i = null;
        this.j = this.g = void 0
    }

    w(Sl, Tk);
    function Tl(b) {
        var c = !1;
        if ("mousewheel" == b.type) {
            var c = b.map, d = b.a;
            this.i = b.coordinate;
            this.c += d.u;
            m(this.g) || (this.g = ua());
            d = Math.max(80 - (ua() - this.g), 0);
            ba.clearTimeout(this.j);
            this.j = ba.setTimeout(ra(this.l, this, c), d);
            b.preventDefault();
            c = !0
        }
        return !c
    }

    Sl.prototype.l = function (b) {
        var c = Wb(this.c, -1, 1), d = b.X();
        b.render();
        Vk(b, d, -c, this.i, this.u);
        this.c = 0;
        this.i = null;
        this.j = this.g = void 0
    };
    function Ul(b) {
        fl.call(this, {handleDownEvent: Vl, handleDragEvent: Wl, handleUpEvent: Xl});
        b = m(b) ? b : {};
        this.g = null;
        this.j = void 0;
        this.c = !1;
        this.l = 0;
        this.D = m(b.threshold) ? b.threshold : .3;
        this.A = m(b.duration) ? b.duration : 250
    }

    w(Ul, fl);
    function Wl(b) {
        var c = 0, d = this.i[0], e = this.i[1], d = Math.atan2(e.clientY - d.clientY, e.clientX - d.clientX);
        m(this.j) && (c = d - this.j, this.l += c, !this.c && Math.abs(this.l) > this.D && (this.c = !0));
        this.j = d;
        b = b.map;
        d = lh(b.b);
        e = hl(this.i);
        e[0] -= d.x;
        e[1] -= d.y;
        this.g = b.ta(e);
        this.c && (d = b.X(), e = d.Ea(), b.render(), Uk(b, d, e + c, this.g))
    }

    function Xl(b) {
        if (2 > this.i.length) {
            b = b.map;
            var c = b.X();
            Uf(c, -1);
            if (this.c) {
                var d = c.Ea(), e = this.g, f = this.A, d = c.constrainRotation(d, 0);
                Uk(b, c, d, e, f)
            }
            return !1
        }
        return !0
    }

    function Vl(b) {
        return 2 <= this.i.length ? (b = b.map, this.g = null, this.j = void 0, this.c = !1, this.l = 0, this.u || Uf(b.X(), 1), b.render(), !0) : !1
    }

    Ul.prototype.tc = oe;
    function Yl(b) {
        fl.call(this, {handleDownEvent: Zl, handleDragEvent: $l, handleUpEvent: am});
        b = m(b) ? b : {};
        this.g = null;
        this.l = m(b.duration) ? b.duration : 400;
        this.c = void 0;
        this.j = 1
    }

    w(Yl, fl);
    function $l(b) {
        var c = 1, d = this.i[0], e = this.i[1], f = d.clientX - e.clientX, d = d.clientY - e.clientY, f = Math.sqrt(f * f + d * d);
        m(this.c) && (c = this.c / f);
        this.c = f;
        1 != c && (this.j = c);
        b = b.map;
        var f = b.X(), d = f.Da(), e = lh(b.b), g = hl(this.i);
        g[0] -= e.x;
        g[1] -= e.y;
        this.g = b.ta(g);
        b.render();
        Wk(b, f, d * c, this.g)
    }

    function am(b) {
        if (2 > this.i.length) {
            b = b.map;
            var c = b.X();
            Uf(c, -1);
            var d = c.Da(), e = this.g, f = this.l, d = c.constrainResolution(d, 0, this.j - 1);
            Wk(b, c, d, e, f);
            return !1
        }
        return !0
    }

    function Zl(b) {
        return 2 <= this.i.length ? (b = b.map, this.g = null, this.c = void 0, this.j = 1, this.u || Uf(b.X(), 1), b.render(), !0) : !1
    }

    Yl.prototype.tc = oe;
    function bm(b) {
        b = m(b) ? b : {};
        var c = new rg, d = new Qk(-.005, .05, 100);
        (m(b.altShiftDragRotate) ? b.altShiftDragRotate : 1) && c.push(new ml);
        (m(b.doubleClickZoom) ? b.doubleClickZoom : 1) && c.push(new Xk({
            delta: b.zoomDelta,
            duration: b.zoomDuration
        }));
        (m(b.dragPan) ? b.dragPan : 1) && c.push(new il({kinetic: d}));
        (m(b.pinchRotate) ? b.pinchRotate : 1) && c.push(new Ul);
        (m(b.pinchZoom) ? b.pinchZoom : 1) && c.push(new Yl({duration: b.zoomDuration}));
        if (m(b.keyboard) ? b.keyboard : 1)c.push(new Ol), c.push(new Ql({
            delta: b.zoomDelta,
            duration: b.zoomDuration
        }));
        (m(b.mouseWheelZoom) ? b.mouseWheelZoom : 1) && c.push(new Sl({duration: b.zoomDuration}));
        (m(b.shiftDragZoom) ? b.shiftDragZoom : 1) && c.push(new Nl);
        return c
    };
    function cm(b) {
        var c = m(b) ? b : {};
        b = Db(c);
        delete b.layers;
        c = c.layers;
        ik.call(this, b);
        this.c = [];
        this.b = {};
        x(this, id("layers"), this.Wj, !1, this);
        null != c ? ga(c) && (c = new rg(c.slice())) : c = new rg;
        this.Ah(c)
    }

    w(cm, ik);
    k = cm.prototype;
    k.Vd = function () {
        this.mb() && this.s()
    };
    k.Wj = function () {
        Sa(this.c, Xc);
        this.c.length = 0;
        var b = this.Gc();
        this.c.push(x(b, "add", this.Vj, !1, this), x(b, "remove", this.Xj, !1, this));
        pb(this.b, function (b) {
            Sa(b, Xc)
        });
        yb(this.b);
        var b = b.b, c, d, e;
        c = 0;
        for (d = b.length; c < d; c++)e = b[c], this.b[ma(e).toString()] = [x(e, "propertychange", this.Vd, !1, this), x(e, "change", this.Vd, !1, this)];
        this.s()
    };
    k.Vj = function (b) {
        b = b.element;
        var c = ma(b).toString();
        this.b[c] = [x(b, "propertychange", this.Vd, !1, this), x(b, "change", this.Vd, !1, this)];
        this.s()
    };
    k.Xj = function (b) {
        b = ma(b.element).toString();
        Sa(this.b[b], Xc);
        delete this.b[b];
        this.s()
    };
    k.Gc = function () {
        return this.get("layers")
    };
    k.Ah = function (b) {
        this.set("layers", b)
    };
    k.Ze = function (b) {
        var c = m(b) ? b : [], d = c.length;
        this.Gc().forEach(function (b) {
            b.Ze(c)
        });
        b = jk(this);
        var e, f;
        for (e = c.length; d < e; d++)f = c[d], f.brightness = Wb(f.brightness + b.brightness, -1, 1), f.contrast *= b.contrast, f.hue += b.hue, f.opacity *= b.opacity, f.saturation *= b.saturation, f.visible = f.visible && b.visible, f.maxResolution = Math.min(f.maxResolution, b.maxResolution), f.minResolution = Math.max(f.minResolution, b.minResolution), m(b.extent) && (f.extent = m(f.extent) ? he(f.extent, b.extent) : b.extent);
        return c
    };
    k.af = function () {
        return "ready"
    };
    function dm(b) {
        ye.call(this, {code: b, units: "m", extent: em, global: !0, worldExtent: fm})
    }

    w(dm, ye);
    dm.prototype.getPointResolution = function (b, c) {
        var d = c[1] / 6378137;
        return b / ((Math.exp(d) + Math.exp(-d)) / 2)
    };
    var gm = 6378137 * Math.PI, em = [-gm, -gm, gm, gm], fm = [-180, -85, 180, 85], Ke = Ua("EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" "), function (b) {
        return new dm(b)
    });

    function Le(b, c, d) {
        var e = b.length;
        d = 1 < d ? d : 2;
        m(c) || (2 < d ? c = b.slice() : c = Array(e));
        for (var f = 0; f < e; f += d)c[f] = 6378137 * Math.PI * b[f] / 180, c[f + 1] = 6378137 * Math.log(Math.tan(Math.PI * (b[f + 1] + 90) / 360));
        return c
    }

    function Me(b, c, d) {
        var e = b.length;
        d = 1 < d ? d : 2;
        m(c) || (2 < d ? c = b.slice() : c = Array(e));
        for (var f = 0; f < e; f += d)c[f] = 180 * b[f] / (6378137 * Math.PI), c[f + 1] = 360 * Math.atan(Math.exp(b[f + 1] / 6378137)) / Math.PI - 90;
        return c
    };
    function hm(b, c) {
        ye.call(this, {code: b, units: "degrees", extent: im, axisOrientation: c, global: !0, worldExtent: im})
    }

    w(hm, ye);
    hm.prototype.getPointResolution = function (b) {
        return b
    };
    var im = [-180, -90, 180, 90], Ne = [new hm("CRS:84"), new hm("EPSG:4326", "neu"), new hm("urn:ogc:def:crs:EPSG::4326", "neu"), new hm("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new hm("urn:ogc:def:crs:OGC:1.3:CRS84"), new hm("urn:ogc:def:crs:OGC:2:84"), new hm("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new hm("urn:x-ogc:def:crs:EPSG:4326", "neu")];

    function jm() {
        Be(Ke);
        Be(Ne);
        Je()
    };
    function I(b) {
        G.call(this, m(b) ? b : {})
    }

    w(I, G);
    function J(b) {
        b = m(b) ? b : {};
        var c = Db(b);
        delete c.preload;
        delete c.useInterimTilesOnError;
        G.call(this, c);
        this.f(m(b.preload) ? b.preload : 0);
        this.g(m(b.useInterimTilesOnError) ? b.useInterimTilesOnError : !0)
    }

    w(J, G);
    J.prototype.b = function () {
        return this.get("preload")
    };
    J.prototype.f = function (b) {
        this.set("preload", b)
    };
    J.prototype.c = function () {
        return this.get("useInterimTilesOnError")
    };
    J.prototype.g = function (b) {
        this.set("useInterimTilesOnError", b)
    };
    function M(b) {
        b = m(b) ? b : {};
        var c = Db(b);
        delete c.style;
        delete c.renderBuffer;
        delete c.updateWhileAnimating;
        delete c.updateWhileInteracting;
        G.call(this, c);
        this.c = m(b.renderBuffer) ? b.renderBuffer : 100;
        this.j = null;
        this.b = void 0;
        this.g(b.style);
        this.u = m(b.updateWhileAnimating) ? b.updateWhileAnimating : !1;
        this.A = m(b.updateWhileInteracting) ? b.updateWhileInteracting : !1
    }

    w(M, G);
    M.prototype.T = function () {
        return this.j
    };
    M.prototype.ba = function () {
        return this.b
    };
    M.prototype.g = function (b) {
        this.j = m(b) ? b : Ll;
        this.b = null === b ? void 0 : Kl(this.j);
        this.s()
    };
    function km(b, c, d, e, f) {
        this.A = {};
        this.c = b;
        this.ea = c;
        this.g = d;
        this.C = e;
        this.Uc = f;
        this.i = this.a = this.b = this.Ma = this.ra = this.fa = null;
        this.Na = this.xa = this.u = this.ba = this.T = this.N = 0;
        this.Xa = !1;
        this.j = this.qb = 0;
        this.rb = !1;
        this.Z = 0;
        this.f = "";
        this.B = this.ca = this.tb = this.sb = 0;
        this.aa = this.v = this.l = null;
        this.D = [];
        this.Bd = Ad()
    }

    function lm(b, c, d) {
        if (null !== b.i) {
            c = Ye(c, 0, d, 2, b.C, b.D);
            d = b.c;
            var e = b.Bd, f = d.globalAlpha;
            1 != b.u && (d.globalAlpha = f * b.u);
            var g = b.qb;
            b.Xa && (g += b.Uc);
            var h, l;
            h = 0;
            for (l = c.length; h < l; h += 2) {
                var n = c[h] - b.N, p = c[h + 1] - b.T;
                b.rb && (n = n + .5 | 0, p = p + .5 | 0);
                if (0 !== g || 1 != b.j) {
                    var q = n + b.N, r = p + b.T;
                    ok(e, q, r, b.j, b.j, g, -q, -r);
                    d.setTransform(e[0], e[1], e[4], e[5], e[12], e[13])
                }
                d.drawImage(b.i, b.xa, b.Na, b.Z, b.ba, n, p, b.Z, b.ba)
            }
            0 === g && 1 == b.j || d.setTransform(1, 0, 0, 1, 0, 0);
            1 != b.u && (d.globalAlpha = f)
        }
    }

    function mm(b, c, d, e) {
        var f = 0;
        if (null !== b.aa && "" !== b.f) {
            null === b.l || nm(b, b.l);
            null === b.v || om(b, b.v);
            var g = b.aa, h = b.c, l = b.Ma;
            null === l ? (h.font = g.font, h.textAlign = g.textAlign, h.textBaseline = g.textBaseline, b.Ma = {
                font: g.font,
                textAlign: g.textAlign,
                textBaseline: g.textBaseline
            }) : (l.font != g.font && (l.font = h.font = g.font), l.textAlign != g.textAlign && (l.textAlign = h.textAlign = g.textAlign), l.textBaseline != g.textBaseline && (l.textBaseline = h.textBaseline = g.textBaseline));
            c = Ye(c, f, d, e, b.C, b.D);
            for (g = b.c; f < d; f += e) {
                h = c[f] +
                    b.sb;
                l = c[f + 1] + b.tb;
                if (0 !== b.ca || 1 != b.B) {
                    var n = ok(b.Bd, h, l, b.B, b.B, b.ca, -h, -l);
                    g.setTransform(n[0], n[1], n[4], n[5], n[12], n[13])
                }
                null === b.v || g.strokeText(b.f, h, l);
                null === b.l || g.fillText(b.f, h, l)
            }
            0 === b.ca && 1 == b.B || g.setTransform(1, 0, 0, 1, 0, 0)
        }
    }

    function pm(b, c, d, e, f, g) {
        var h = b.c;
        b = Ye(c, d, e, f, b.C, b.D);
        h.moveTo(b[0], b[1]);
        for (c = 2; c < b.length; c += 2)h.lineTo(b[c], b[c + 1]);
        g && h.lineTo(b[0], b[1]);
        return e
    }

    function rm(b, c, d, e, f) {
        var g = b.c, h, l;
        h = 0;
        for (l = e.length; h < l; ++h)d = pm(b, c, d, e[h], f, !0), g.closePath();
        return d
    }

    k = km.prototype;
    k.yc = function (b, c) {
        var d = b.toString(), e = this.A[d];
        m(e) ? e.push(c) : this.A[d] = [c]
    };
    k.zc = function (b) {
        if (ie(this.g, b.R())) {
            if (null !== this.b || null !== this.a) {
                null === this.b || nm(this, this.b);
                null === this.a || om(this, this.a);
                var c;
                c = b.o;
                c = null === c ? null : Ye(c, 0, c.length, b.H, this.C, this.D);
                var d = c[2] - c[0], e = c[3] - c[1], d = Math.sqrt(d * d + e * e), e = this.c;
                e.beginPath();
                e.arc(c[0], c[1], d, 0, 2 * Math.PI);
                null === this.b || e.fill();
                null === this.a || e.stroke()
            }
            "" !== this.f && mm(this, b.ld(), 2, 2)
        }
    };
    k.Pe = function (b, c) {
        var d = (0, c.g)(b);
        if (null != d && ie(this.g, d.R())) {
            var e = c.a;
            m(e) || (e = 0);
            this.yc(e, function (b) {
                b.Ha(c.f, c.c);
                b.hb(c.i);
                b.Ia(c.b);
                sm[d.U()].call(b, d, null)
            })
        }
    };
    k.Hd = function (b, c) {
        var d = b.f, e, f;
        e = 0;
        for (f = d.length; e < f; ++e) {
            var g = d[e];
            sm[g.U()].call(this, g, c)
        }
    };
    k.wb = function (b) {
        var c = b.o;
        b = b.H;
        null === this.i || lm(this, c, c.length);
        "" !== this.f && mm(this, c, c.length, b)
    };
    k.vb = function (b) {
        var c = b.o;
        b = b.H;
        null === this.i || lm(this, c, c.length);
        "" !== this.f && mm(this, c, c.length, b)
    };
    k.Gb = function (b) {
        if (ie(this.g, b.R())) {
            if (null !== this.a) {
                om(this, this.a);
                var c = this.c, d = b.o;
                c.beginPath();
                pm(this, d, 0, d.length, b.H, !1);
                c.stroke()
            }
            "" !== this.f && (b = tm(b), mm(this, b, 2, 2))
        }
    };
    k.Ac = function (b) {
        var c = b.R();
        if (ie(this.g, c)) {
            if (null !== this.a) {
                om(this, this.a);
                var c = this.c, d = b.o, e = 0, f = b.c, g = b.H;
                c.beginPath();
                var h, l;
                h = 0;
                for (l = f.length; h < l; ++h)e = pm(this, d, e, f[h], g, !1);
                c.stroke()
            }
            "" !== this.f && (b = um(b), mm(this, b, b.length, 2))
        }
    };
    k.Yb = function (b) {
        if (ie(this.g, b.R())) {
            if (null !== this.a || null !== this.b) {
                null === this.b || nm(this, this.b);
                null === this.a || om(this, this.a);
                var c = this.c;
                c.beginPath();
                rm(this, If(b), 0, b.c, b.H);
                null === this.b || c.fill();
                null === this.a || c.stroke()
            }
            "" !== this.f && (b = Jf(b), mm(this, b, 2, 2))
        }
    };
    k.Bc = function (b) {
        if (ie(this.g, b.R())) {
            if (null !== this.a || null !== this.b) {
                null === this.b || nm(this, this.b);
                null === this.a || om(this, this.a);
                var c = this.c, d = vm(b), e = 0, f = b.c, g = b.H, h, l;
                h = 0;
                for (l = f.length; h < l; ++h) {
                    var n = f[h];
                    c.beginPath();
                    e = rm(this, d, e, n, g);
                    null === this.b || c.fill();
                    null === this.a || c.stroke()
                }
            }
            "" !== this.f && (b = wm(b), mm(this, b, b.length, 2))
        }
    };
    function xm(b) {
        var c = Ua(tb(b.A), Number);
        gb(c);
        var d, e, f, g, h;
        d = 0;
        for (e = c.length; d < e; ++d)for (f = b.A[c[d].toString()], g = 0, h = f.length; g < h; ++g)f[g](b)
    }

    function nm(b, c) {
        var d = b.c, e = b.fa;
        null === e ? (d.fillStyle = c.fillStyle, b.fa = {fillStyle: c.fillStyle}) : e.fillStyle != c.fillStyle && (e.fillStyle = d.fillStyle = c.fillStyle)
    }

    function om(b, c) {
        var d = b.c, e = b.ra;
        null === e ? (d.lineCap = c.lineCap, ej && d.setLineDash(c.lineDash), d.lineJoin = c.lineJoin, d.lineWidth = c.lineWidth, d.miterLimit = c.miterLimit, d.strokeStyle = c.strokeStyle, b.ra = {
            lineCap: c.lineCap,
            lineDash: c.lineDash,
            lineJoin: c.lineJoin,
            lineWidth: c.lineWidth,
            miterLimit: c.miterLimit,
            strokeStyle: c.strokeStyle
        }) : (e.lineCap != c.lineCap && (e.lineCap = d.lineCap = c.lineCap), ej && !ib(e.lineDash, c.lineDash) && d.setLineDash(e.lineDash = c.lineDash), e.lineJoin != c.lineJoin && (e.lineJoin = d.lineJoin =
            c.lineJoin), e.lineWidth != c.lineWidth && (e.lineWidth = d.lineWidth = c.lineWidth), e.miterLimit != c.miterLimit && (e.miterLimit = d.miterLimit = c.miterLimit), e.strokeStyle != c.strokeStyle && (e.strokeStyle = d.strokeStyle = c.strokeStyle))
    }

    k.Ha = function (b, c) {
        if (null === b)this.b = null; else {
            var d = b.a;
            this.b = {fillStyle: yg(null === d ? Dl : d)}
        }
        if (null === c)this.a = null; else {
            var d = c.a, e = c.f, f = c.c, g = c.g, h = c.b, l = c.i;
            this.a = {
                lineCap: m(e) ? e : "round",
                lineDash: null != f ? f : El,
                lineJoin: m(g) ? g : "round",
                lineWidth: this.ea * (m(h) ? h : 1),
                miterLimit: m(l) ? l : 10,
                strokeStyle: yg(null === d ? Fl : d)
            }
        }
    };
    k.hb = function (b) {
        if (null === b)this.i = null; else {
            var c = b.yb(), d = b.Sb(1), e = b.Db(), f = b.fb();
            this.N = c[0];
            this.T = c[1];
            this.ba = f[1];
            this.i = d;
            this.u = b.A;
            this.xa = e[0];
            this.Na = e[1];
            this.Xa = b.D;
            this.qb = b.B;
            this.j = b.v;
            this.rb = b.ea;
            this.Z = f[0]
        }
    };
    k.Ia = function (b) {
        if (null === b)this.f = ""; else {
            var c = b.a;
            null === c ? this.l = null : (c = c.a, this.l = {fillStyle: yg(null === c ? Dl : c)});
            var d = b.i;
            if (null === d)this.v = null; else {
                var c = d.a, e = d.f, f = d.c, g = d.g, h = d.b, d = d.i;
                this.v = {
                    lineCap: m(e) ? e : "round",
                    lineDash: null != f ? f : El,
                    lineJoin: m(g) ? g : "round",
                    lineWidth: m(h) ? h : 1,
                    miterLimit: m(d) ? d : 10,
                    strokeStyle: yg(null === c ? Fl : c)
                }
            }
            var c = b.f, e = b.B, f = b.v, g = b.g, h = b.b, d = b.c, l = b.j;
            b = b.l;
            this.aa = {
                font: m(c) ? c : "10px sans-serif",
                textAlign: m(l) ? l : "center",
                textBaseline: m(b) ? b : "middle"
            };
            this.f =
                m(d) ? d : "";
            this.sb = m(e) ? this.ea * e : 0;
            this.tb = m(f) ? this.ea * f : 0;
            this.ca = m(g) ? g : 0;
            this.B = this.ea * (m(h) ? h : 1)
        }
    };
    var sm = {
        Point: km.prototype.wb,
        LineString: km.prototype.Gb,
        Polygon: km.prototype.Yb,
        MultiPoint: km.prototype.vb,
        MultiLineString: km.prototype.Ac,
        MultiPolygon: km.prototype.Bc,
        GeometryCollection: km.prototype.Hd,
        Circle: km.prototype.zc
    };

    function ym(b) {
        rk.call(this, b);
        this.N = Ad()
    }

    w(ym, rk);
    ym.prototype.u = function (b, c, d) {
        zm(this, "precompose", d, b, void 0);
        var e = this.je();
        if (null !== e) {
            var f = c.extent, g = m(f);
            if (g) {
                var h = b.pixelRatio, l = de(f), n = ce(f), p = be(f), f = ae(f);
                qk(b.coordinateToPixelMatrix, l, l);
                qk(b.coordinateToPixelMatrix, n, n);
                qk(b.coordinateToPixelMatrix, p, p);
                qk(b.coordinateToPixelMatrix, f, f);
                d.save();
                d.beginPath();
                d.moveTo(l[0] * h, l[1] * h);
                d.lineTo(n[0] * h, n[1] * h);
                d.lineTo(p[0] * h, p[1] * h);
                d.lineTo(f[0] * h, f[1] * h);
                d.clip()
            }
            h = this.cg();
            l = d.globalAlpha;
            d.globalAlpha = c.opacity;
            0 === b.viewState.rotation ?
                (c = h[13], n = e.width * h[0], p = e.height * h[5], d.drawImage(e, 0, 0, +e.width, +e.height, Math.round(h[12]), Math.round(c), Math.round(n), Math.round(p))) : (d.setTransform(h[0], h[1], h[4], h[5], h[12], h[13]), d.drawImage(e, 0, 0), d.setTransform(1, 0, 0, 1, 0, 0));
            d.globalAlpha = l;
            g && d.restore()
        }
        zm(this, "postcompose", d, b, void 0)
    };
    function zm(b, c, d, e, f) {
        var g = b.b;
        cd(g, c) && (b = m(f) ? f : Am(b, e, 0), b = new km(d, e.pixelRatio, e.extent, b, e.viewState.rotation), C(g, new lk(c, g, b, e, d, null)), xm(b))
    }

    function Am(b, c, d) {
        var e = c.viewState, f = c.pixelRatio;
        return ok(b.N, f * c.size[0] / 2, f * c.size[1] / 2, f / e.resolution, -f / e.resolution, -e.rotation, -e.center[0] + d, -e.center[1])
    }

    function Bm(b, c) {
        var d = [0, 0];
        qk(c, b, d);
        return d
    }

    var Cm = function () {
        var b = null, c = null;
        return function (d) {
            if (null === b) {
                b = Wi(1, 1);
                c = b.createImageData(1, 1);
                var e = c.data;
                e[0] = 42;
                e[1] = 84;
                e[2] = 126;
                e[3] = 255
            }
            var e = b.canvas, f = d[0] <= e.width && d[1] <= e.height;
            f || (e.width = d[0], e.height = d[1], e = d[0] - 1, d = d[1] - 1, b.putImageData(c, e, d), d = b.getImageData(e, d, 1, 1), f = ib(c.data, d.data));
            return f
        }
    }();
    var Dm = ["Polygon", "LineString", "Image", "Text"];

    function Em(b, c, d) {
        this.Ma = b;
        this.Z = c;
        this.f = null;
        this.g = 0;
        this.resolution = d;
        this.T = this.N = null;
        this.b = [];
        this.coordinates = [];
        this.fa = Ad();
        this.a = [];
        this.aa = [];
        this.ra = Ad()
    }

    w(Em, kk);
    function Fm(b, c, d, e, f, g) {
        var h = b.coordinates.length, l = b.Te(), n = [c[d], c[d + 1]], p = [NaN, NaN], q = !0, r, t, v;
        for (r = d + f; r < e; r += f)p[0] = c[r], p[1] = c[r + 1], v = Vd(l, p), v !== t ? (q && (b.coordinates[h++] = n[0], b.coordinates[h++] = n[1]), b.coordinates[h++] = p[0], b.coordinates[h++] = p[1], q = !1) : 1 === v ? (b.coordinates[h++] = p[0], b.coordinates[h++] = p[1], q = !1) : q = !0, n[0] = p[0], n[1] = p[1], t = v;
        r === d + f && (b.coordinates[h++] = n[0], b.coordinates[h++] = n[1]);
        g && (b.coordinates[h++] = c[d], b.coordinates[h++] = c[d + 1]);
        return h
    }

    function Gm(b, c) {
        b.N = [0, c, 0];
        b.b.push(b.N);
        b.T = [0, c, 0];
        b.a.push(b.T)
    }

    function Hm(b, c, d, e, f, g, h, l, n) {
        var p;
        pk(e, b.fa) ? p = b.aa : (p = Ye(b.coordinates, 0, b.coordinates.length, 2, e, b.aa), Dd(b.fa, e));
        e = 0;
        var q = h.length, r = 0, t;
        for (b = b.ra; e < q;) {
            var v = h[e], A, z, E, B;
            switch (v[0]) {
                case 0:
                    r = v[1];
                    t = ma(r).toString();
                    m(g[t]) ? e = v[2] : m(n) && !ie(n, r.Y().R()) ? e = v[2] : ++e;
                    break;
                case 1:
                    c.beginPath();
                    ++e;
                    break;
                case 2:
                    r = v[1];
                    t = p[r];
                    var y = p[r + 1], L = p[r + 2] - t, r = p[r + 3] - y;
                    c.arc(t, y, Math.sqrt(L * L + r * r), 0, 2 * Math.PI, !0);
                    ++e;
                    break;
                case 3:
                    c.closePath();
                    ++e;
                    break;
                case 4:
                    r = v[1];
                    t = v[2];
                    A = v[3];
                    E = v[4] * d;
                    var K = v[5] *
                        d, H = v[6];
                    z = v[7];
                    var S = v[8], ta = v[9], y = v[11], L = v[12], Oa = v[13], R = v[14];
                    for (v[10] && (y += f); r < t; r += 2) {
                        v = p[r] - E;
                        B = p[r + 1] - K;
                        Oa && (v = v + .5 | 0, B = B + .5 | 0);
                        if (1 != L || 0 !== y) {
                            var Aa = v + E, db = B + K;
                            ok(b, Aa, db, L, L, y, -Aa, -db);
                            c.setTransform(b[0], b[1], b[4], b[5], b[12], b[13])
                        }
                        Aa = c.globalAlpha;
                        1 != z && (c.globalAlpha = Aa * z);
                        c.drawImage(A, S, ta, R, H, v, B, R * d, H * d);
                        1 != z && (c.globalAlpha = Aa);
                        1 == L && 0 === y || c.setTransform(1, 0, 0, 1, 0, 0)
                    }
                    ++e;
                    break;
                case 5:
                    r = v[1];
                    t = v[2];
                    E = v[3];
                    K = v[4] * d;
                    H = v[5] * d;
                    y = v[6];
                    L = v[7] * d;
                    A = v[8];
                    for (z = v[9]; r < t; r += 2) {
                        v = p[r] +
                            K;
                        B = p[r + 1] + H;
                        if (1 != L || 0 !== y)ok(b, v, B, L, L, y, -v, -B), c.setTransform(b[0], b[1], b[4], b[5], b[12], b[13]);
                        z && c.strokeText(E, v, B);
                        A && c.fillText(E, v, B);
                        1 == L && 0 === y || c.setTransform(1, 0, 0, 1, 0, 0)
                    }
                    ++e;
                    break;
                case 6:
                    if (m(l) && (r = v[1], r = l(r)))return r;
                    ++e;
                    break;
                case 7:
                    c.fill();
                    ++e;
                    break;
                case 8:
                    r = v[1];
                    t = v[2];
                    c.moveTo(p[r], p[r + 1]);
                    for (r += 2; r < t; r += 2)c.lineTo(p[r], p[r + 1]);
                    ++e;
                    break;
                case 9:
                    c.fillStyle = v[1];
                    ++e;
                    break;
                case 10:
                    r = m(v[7]) ? v[7] : !0;
                    t = v[2];
                    c.strokeStyle = v[1];
                    c.lineWidth = r ? t * d : t;
                    c.lineCap = v[3];
                    c.lineJoin = v[4];
                    c.miterLimit =
                        v[5];
                    ej && c.setLineDash(v[6]);
                    ++e;
                    break;
                case 11:
                    c.font = v[1];
                    c.textAlign = v[2];
                    c.textBaseline = v[3];
                    ++e;
                    break;
                case 12:
                    c.stroke();
                    ++e;
                    break;
                default:
                    ++e
            }
        }
    }

    function Im(b) {
        var c = b.a;
        c.reverse();
        var d, e = c.length, f, g, h = -1;
        for (d = 0; d < e; ++d)if (f = c[d], g = f[0], 6 == g)h = d; else if (0 == g) {
            f[2] = d;
            f = b.a;
            for (g = d; h < g;) {
                var l = f[h];
                f[h] = f[g];
                f[g] = l;
                ++h;
                --g
            }
            h = -1
        }
    }

    function Jm(b, c) {
        b.N[2] = b.b.length;
        b.N = null;
        b.T[2] = b.a.length;
        b.T = null;
        var d = [6, c];
        b.b.push(d);
        b.a.push(d)
    }

    Em.prototype.he = ca;
    Em.prototype.Te = function () {
        return this.Z
    };
    function Km(b, c, d) {
        Em.call(this, b, c, d);
        this.l = this.ba = null;
        this.C = this.ca = this.ea = this.D = this.A = this.u = this.v = this.B = this.j = this.i = this.c = void 0
    }

    w(Km, Em);
    Km.prototype.wb = function (b, c) {
        if (null !== this.l) {
            Gm(this, c);
            var d = b.o, e = this.coordinates.length, d = Fm(this, d, 0, d.length, b.H, !1);
            this.b.push([4, e, d, this.l, this.c, this.i, this.j, this.B, this.v, this.u, this.A, this.D, this.ea, this.ca, this.C]);
            this.a.push([4, e, d, this.ba, this.c, this.i, this.j, this.B, this.v, this.u, this.A, this.D, this.ea, this.ca, this.C]);
            Jm(this, c)
        }
    };
    Km.prototype.vb = function (b, c) {
        if (null !== this.l) {
            Gm(this, c);
            var d = b.o, e = this.coordinates.length, d = Fm(this, d, 0, d.length, b.H, !1);
            this.b.push([4, e, d, this.l, this.c, this.i, this.j, this.B, this.v, this.u, this.A, this.D, this.ea, this.ca, this.C]);
            this.a.push([4, e, d, this.ba, this.c, this.i, this.j, this.B, this.v, this.u, this.A, this.D, this.ea, this.ca, this.C]);
            Jm(this, c)
        }
    };
    Km.prototype.he = function () {
        Im(this);
        this.i = this.c = void 0;
        this.l = this.ba = null;
        this.C = this.ca = this.D = this.A = this.u = this.v = this.B = this.ea = this.j = void 0
    };
    Km.prototype.hb = function (b) {
        var c = b.yb(), d = b.fb(), e = b.le(1), f = b.Sb(1), g = b.Db();
        this.c = c[0];
        this.i = c[1];
        this.ba = e;
        this.l = f;
        this.j = d[1];
        this.B = b.A;
        this.v = g[0];
        this.u = g[1];
        this.A = b.D;
        this.D = b.B;
        this.ea = b.v;
        this.ca = b.ea;
        this.C = d[0]
    };
    function Lm(b, c, d) {
        Em.call(this, b, c, d);
        this.c = {
            cd: void 0,
            Yc: void 0,
            Zc: null,
            $c: void 0,
            ad: void 0,
            bd: void 0,
            df: 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }

    w(Lm, Em);
    function Mm(b, c, d, e, f) {
        var g = b.coordinates.length;
        c = Fm(b, c, d, e, f, !1);
        g = [8, g, c];
        b.b.push(g);
        b.a.push(g);
        return e
    }

    k = Lm.prototype;
    k.Te = function () {
        null === this.f && (this.f = Qd(this.Z), 0 < this.g && Pd(this.f, this.resolution * (this.g + 1) / 2, this.f));
        return this.f
    };
    function Nm(b) {
        var c = b.c, d = c.strokeStyle, e = c.lineCap, f = c.lineDash, g = c.lineJoin, h = c.lineWidth, l = c.miterLimit;
        c.cd == d && c.Yc == e && ib(c.Zc, f) && c.$c == g && c.ad == h && c.bd == l || (c.df != b.coordinates.length && (b.b.push([12]), c.df = b.coordinates.length), b.b.push([10, d, h, e, g, l, f], [1]), c.cd = d, c.Yc = e, c.Zc = f, c.$c = g, c.ad = h, c.bd = l)
    }

    k.Gb = function (b, c) {
        var d = this.c, e = d.lineWidth;
        m(d.strokeStyle) && m(e) && (Nm(this), Gm(this, c), this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash], [1]), d = b.o, Mm(this, d, 0, d.length, b.H), this.a.push([12]), Jm(this, c))
    };
    k.Ac = function (b, c) {
        var d = this.c, e = d.lineWidth;
        if (m(d.strokeStyle) && m(e)) {
            Nm(this);
            Gm(this, c);
            this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash], [1]);
            var d = b.c, e = b.o, f = b.H, g = 0, h, l;
            h = 0;
            for (l = d.length; h < l; ++h)g = Mm(this, e, g, d[h], f);
            this.a.push([12]);
            Jm(this, c)
        }
    };
    k.he = function () {
        this.c.df != this.coordinates.length && this.b.push([12]);
        Im(this);
        this.c = null
    };
    k.Ha = function (b, c) {
        var d = c.a;
        this.c.strokeStyle = yg(null === d ? Fl : d);
        d = c.f;
        this.c.lineCap = m(d) ? d : "round";
        d = c.c;
        this.c.lineDash = null === d ? El : d;
        d = c.g;
        this.c.lineJoin = m(d) ? d : "round";
        d = c.b;
        this.c.lineWidth = m(d) ? d : 1;
        d = c.i;
        this.c.miterLimit = m(d) ? d : 10;
        this.c.lineWidth > this.g && (this.g = this.c.lineWidth, this.f = null)
    };
    function Om(b, c, d) {
        Em.call(this, b, c, d);
        this.c = {
            Sf: void 0,
            cd: void 0,
            Yc: void 0,
            Zc: null,
            $c: void 0,
            ad: void 0,
            bd: void 0,
            fillStyle: void 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }

    w(Om, Em);
    function Pm(b, c, d, e, f) {
        var g = b.c, h = [1];
        b.b.push(h);
        b.a.push(h);
        var l, h = 0;
        for (l = e.length; h < l; ++h) {
            var n = e[h], p = b.coordinates.length;
            d = Fm(b, c, d, n, f, !0);
            d = [8, p, d];
            p = [3];
            b.b.push(d, p);
            b.a.push(d, p);
            d = n
        }
        c = [7];
        b.a.push(c);
        m(g.fillStyle) && b.b.push(c);
        m(g.strokeStyle) && (g = [12], b.b.push(g), b.a.push(g));
        return d
    }

    k = Om.prototype;
    k.zc = function (b, c) {
        var d = this.c, e = d.strokeStyle;
        if (m(d.fillStyle) || m(e)) {
            Qm(this);
            Gm(this, c);
            this.a.push([9, yg(Dl)]);
            m(d.strokeStyle) && this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]);
            var f = b.o, e = this.coordinates.length;
            Fm(this, f, 0, f.length, b.H, !1);
            f = [1];
            e = [2, e];
            this.b.push(f, e);
            this.a.push(f, e);
            e = [7];
            this.a.push(e);
            m(d.fillStyle) && this.b.push(e);
            m(d.strokeStyle) && (d = [12], this.b.push(d), this.a.push(d));
            Jm(this, c)
        }
    };
    k.Yb = function (b, c) {
        var d = this.c, e = d.strokeStyle;
        if (m(d.fillStyle) || m(e))Qm(this), Gm(this, c), this.a.push([9, yg(Dl)]), m(d.strokeStyle) && this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]), d = b.c, e = If(b), Pm(this, e, 0, d, b.H), Jm(this, c)
    };
    k.Bc = function (b, c) {
        var d = this.c, e = d.strokeStyle;
        if (m(d.fillStyle) || m(e)) {
            Qm(this);
            Gm(this, c);
            this.a.push([9, yg(Dl)]);
            m(d.strokeStyle) && this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]);
            var d = b.c, e = vm(b), f = b.H, g = 0, h, l;
            h = 0;
            for (l = d.length; h < l; ++h)g = Pm(this, e, g, d[h], f);
            Jm(this, c)
        }
    };
    k.he = function () {
        Im(this);
        this.c = null;
        var b = this.Ma;
        if (0 !== b) {
            var c = this.coordinates, d, e;
            d = 0;
            for (e = c.length; d < e; ++d)c[d] = b * Math.round(c[d] / b)
        }
    };
    k.Te = function () {
        null === this.f && (this.f = Qd(this.Z), 0 < this.g && Pd(this.f, this.resolution * (this.g + 1) / 2, this.f));
        return this.f
    };
    k.Ha = function (b, c) {
        var d = this.c;
        if (null === b)d.fillStyle = void 0; else {
            var e = b.a;
            d.fillStyle = yg(null === e ? Dl : e)
        }
        null === c ? (d.strokeStyle = void 0, d.lineCap = void 0, d.lineDash = null, d.lineJoin = void 0, d.lineWidth = void 0, d.miterLimit = void 0) : (e = c.a, d.strokeStyle = yg(null === e ? Fl : e), e = c.f, d.lineCap = m(e) ? e : "round", e = c.c, d.lineDash = null === e ? El : e.slice(), e = c.g, d.lineJoin = m(e) ? e : "round", e = c.b, d.lineWidth = m(e) ? e : 1, e = c.i, d.miterLimit = m(e) ? e : 10, d.lineWidth > this.g && (this.g = d.lineWidth, this.f = null))
    };
    function Qm(b) {
        var c = b.c, d = c.fillStyle, e = c.strokeStyle, f = c.lineCap, g = c.lineDash, h = c.lineJoin, l = c.lineWidth, n = c.miterLimit;
        m(d) && c.Sf != d && (b.b.push([9, d]), c.Sf = c.fillStyle);
        !m(e) || c.cd == e && c.Yc == f && c.Zc == g && c.$c == h && c.ad == l && c.bd == n || (b.b.push([10, e, l, f, h, n, g]), c.cd = e, c.Yc = f, c.Zc = g, c.$c = h, c.ad = l, c.bd = n)
    }

    function Rm(b, c, d) {
        Em.call(this, b, c, d);
        this.ca = this.ea = this.D = null;
        this.l = "";
        this.A = this.u = this.v = this.B = 0;
        this.j = this.i = this.c = null
    }

    w(Rm, Em);
    Rm.prototype.xb = function (b, c, d, e, f, g) {
        if ("" !== this.l && null !== this.j && (null !== this.c || null !== this.i)) {
            if (null !== this.c) {
                f = this.c;
                var h = this.D;
                if (null === h || h.fillStyle != f.fillStyle) {
                    var l = [9, f.fillStyle];
                    this.b.push(l);
                    this.a.push(l);
                    null === h ? this.D = {fillStyle: f.fillStyle} : h.fillStyle = f.fillStyle
                }
            }
            null !== this.i && (f = this.i, h = this.ea, null === h || h.lineCap != f.lineCap || h.lineDash != f.lineDash || h.lineJoin != f.lineJoin || h.lineWidth != f.lineWidth || h.miterLimit != f.miterLimit || h.strokeStyle != f.strokeStyle) && (l = [10,
                f.strokeStyle, f.lineWidth, f.lineCap, f.lineJoin, f.miterLimit, f.lineDash, !1], this.b.push(l), this.a.push(l), null === h ? this.ea = {
                lineCap: f.lineCap,
                lineDash: f.lineDash,
                lineJoin: f.lineJoin,
                lineWidth: f.lineWidth,
                miterLimit: f.miterLimit,
                strokeStyle: f.strokeStyle
            } : (h.lineCap = f.lineCap, h.lineDash = f.lineDash, h.lineJoin = f.lineJoin, h.lineWidth = f.lineWidth, h.miterLimit = f.miterLimit, h.strokeStyle = f.strokeStyle));
            f = this.j;
            h = this.ca;
            if (null === h || h.font != f.font || h.textAlign != f.textAlign || h.textBaseline != f.textBaseline)l =
                [11, f.font, f.textAlign, f.textBaseline], this.b.push(l), this.a.push(l), null === h ? this.ca = {
                font: f.font,
                textAlign: f.textAlign,
                textBaseline: f.textBaseline
            } : (h.font = f.font, h.textAlign = f.textAlign, h.textBaseline = f.textBaseline);
            Gm(this, g);
            f = this.coordinates.length;
            b = Fm(this, b, c, d, e, !1);
            b = [5, f, b, this.l, this.B, this.v, this.u, this.A, null !== this.c, null !== this.i];
            this.b.push(b);
            this.a.push(b);
            Jm(this, g)
        }
    };
    Rm.prototype.Ia = function (b) {
        if (null === b)this.l = ""; else {
            var c = b.a;
            null === c ? this.c = null : (c = c.a, c = yg(null === c ? Dl : c), null === this.c ? this.c = {fillStyle: c} : this.c.fillStyle = c);
            var d = b.i;
            if (null === d)this.i = null; else {
                var c = d.a, e = d.f, f = d.c, g = d.g, h = d.b, d = d.i, e = m(e) ? e : "round", f = null != f ? f.slice() : El, g = m(g) ? g : "round", h = m(h) ? h : 1, d = m(d) ? d : 10, c = yg(null === c ? Fl : c);
                if (null === this.i)this.i = {
                    lineCap: e,
                    lineDash: f,
                    lineJoin: g,
                    lineWidth: h,
                    miterLimit: d,
                    strokeStyle: c
                }; else {
                    var l = this.i;
                    l.lineCap = e;
                    l.lineDash = f;
                    l.lineJoin = g;
                    l.lineWidth =
                        h;
                    l.miterLimit = d;
                    l.strokeStyle = c
                }
            }
            var n = b.f, c = b.B, e = b.v, f = b.g, h = b.b, d = b.c, g = b.j, l = b.l;
            b = m(n) ? n : "10px sans-serif";
            g = m(g) ? g : "center";
            l = m(l) ? l : "middle";
            null === this.j ? this.j = {
                font: b,
                textAlign: g,
                textBaseline: l
            } : (n = this.j, n.font = b, n.textAlign = g, n.textBaseline = l);
            this.l = m(d) ? d : "";
            this.B = m(c) ? c : 0;
            this.v = m(e) ? e : 0;
            this.u = m(f) ? f : 0;
            this.A = m(h) ? h : 1
        }
    };
    function Sm(b, c, d, e) {
        this.l = b;
        this.c = c;
        this.j = d;
        this.f = e;
        this.b = {};
        this.g = Wi(1, 1);
        this.i = Ad()
    }

    function Tm(b) {
        for (var c in b.b) {
            var d = b.b[c], e;
            for (e in d)d[e].he()
        }
    }

    function Um(b, c, d, e, f, g) {
        var h = b.i;
        ok(h, .5, .5, 1 / d, -1 / d, -e, -c[0], -c[1]);
        var l = b.g;
        l.clearRect(0, 0, 1, 1);
        var n;
        m(b.f) && (n = Ld(), Md(n, c), Pd(n, d * b.f, n));
        return Vm(b, l, h, e, f, function (b) {
            if (0 < l.getImageData(0, 0, 1, 1).data[3]) {
                if (b = g(b))return b;
                l.clearRect(0, 0, 1, 1)
            }
        }, n)
    }

    Sm.prototype.a = function (b, c) {
        var d = m(b) ? b.toString() : "0", e = this.b[d];
        m(e) || (e = {}, this.b[d] = e);
        d = e[c];
        m(d) || (d = new Wm[c](this.l, this.c, this.j), e[c] = d);
        return d
    };
    Sm.prototype.wa = function () {
        return xb(this.b)
    };
    function Xm(b, c, d, e, f, g) {
        var h = Ua(tb(b.b), Number);
        gb(h);
        var l = b.c, n = l[0], p = l[1], q = l[2], l = l[3], n = [n, p, n, l, q, l, q, p];
        Ye(n, 0, 8, 2, e, n);
        c.save();
        c.beginPath();
        c.moveTo(n[0], n[1]);
        c.lineTo(n[2], n[3]);
        c.lineTo(n[4], n[5]);
        c.lineTo(n[6], n[7]);
        c.closePath();
        c.clip();
        for (var r, t, n = 0, p = h.length; n < p; ++n)for (r = b.b[h[n].toString()], q = 0, l = Dm.length; q < l; ++q)t = r[Dm[q]], m(t) && Hm(t, c, d, e, f, g, t.b, void 0);
        c.restore()
    }

    function Vm(b, c, d, e, f, g, h) {
        var l = Ua(tb(b.b), Number);
        gb(l, function (b, c) {
            return c - b
        });
        var n, p, q, r, t;
        n = 0;
        for (p = l.length; n < p; ++n)for (r = b.b[l[n].toString()], q = Dm.length - 1; 0 <= q; --q)if (t = r[Dm[q]], m(t) && (t = Hm(t, c, 1, d, e, f, t.a, g, h)))return t
    }

    var Wm = {Image: Km, LineString: Lm, Polygon: Om, Text: Rm};

    function Ym(b, c, d) {
        Ze.call(this);
        this.Af(b, m(c) ? c : 0, d)
    }

    w(Ym, Ze);
    k = Ym.prototype;
    k.clone = function () {
        var b = new Ym(null);
        af(b, this.b, this.o.slice());
        b.s();
        return b
    };
    k.Ya = function (b, c, d, e) {
        var f = this.o;
        b -= f[0];
        var g = c - f[1];
        c = b * b + g * g;
        if (c < e) {
            if (0 === c)for (e = 0; e < this.H; ++e)d[e] = f[e]; else for (e = this.lf() / Math.sqrt(c), d[0] = f[0] + e * b, d[1] = f[1] + e * g, e = 2; e < this.H; ++e)d[e] = f[e];
            d.length = this.H;
            return c
        }
        return e
    };
    k.gc = function (b, c) {
        var d = this.o, e = b - d[0], d = c - d[1];
        return e * e + d * d <= Zm(this)
    };
    k.ld = function () {
        return this.o.slice(0, this.H)
    };
    k.Ed = function (b) {
        var c = this.o, d = c[this.H] - c[0];
        return Od(c[0] - d, c[1] - d, c[0] + d, c[1] + d, b)
    };
    k.lf = function () {
        return Math.sqrt(Zm(this))
    };
    function Zm(b) {
        var c = b.o[b.H] - b.o[0];
        b = b.o[b.H + 1] - b.o[1];
        return c * c + b * b
    }

    k.U = function () {
        return "Circle"
    };
    k.sa = function (b) {
        var c = this.R();
        return ie(b, c) ? (c = this.ld(), b[0] <= c[0] && b[2] >= c[0] || b[1] <= c[1] && b[3] >= c[1] ? !0 : $d(b, this.Ne, this)) : !1
    };
    k.ll = function (b) {
        var c = this.H, d = b.slice();
        d[c] = d[0] + (this.o[c] - this.o[0]);
        var e;
        for (e = 1; e < c; ++e)d[c + e] = b[e];
        af(this, this.b, d);
        this.s()
    };
    k.Af = function (b, c, d) {
        if (null === b)af(this, "XY", null); else {
            bf(this, d, b, 0);
            null === this.o && (this.o = []);
            d = this.o;
            b = mf(d, b);
            d[b++] = d[0] + c;
            var e;
            c = 1;
            for (e = this.H; c < e; ++c)d[b++] = d[c];
            d.length = b
        }
        this.s()
    };
    k.ml = function (b) {
        this.o[this.H] = this.o[0] + b;
        this.s()
    };
    function $m(b) {
        Xe.call(this);
        this.f = m(b) ? b : null;
        an(this)
    }

    w($m, Xe);
    function bn(b) {
        var c = [], d, e;
        d = 0;
        for (e = b.length; d < e; ++d)c.push(b[d].clone());
        return c
    }

    function cn(b) {
        var c, d;
        if (null !== b.f)for (c = 0, d = b.f.length; c < d; ++c)Wc(b.f[c], "change", b.s, !1, b)
    }

    function an(b) {
        var c, d;
        if (null !== b.f)for (c = 0, d = b.f.length; c < d; ++c)x(b.f[c], "change", b.s, !1, b)
    }

    k = $m.prototype;
    k.clone = function () {
        var b = new $m(null);
        b.xh(this.f);
        return b
    };
    k.Ya = function (b, c, d, e) {
        if (e < Rd(this.R(), b, c))return e;
        var f = this.f, g, h;
        g = 0;
        for (h = f.length; g < h; ++g)e = f[g].Ya(b, c, d, e);
        return e
    };
    k.gc = function (b, c) {
        var d = this.f, e, f;
        e = 0;
        for (f = d.length; e < f; ++e)if (d[e].gc(b, c))return !0;
        return !1
    };
    k.Ed = function (b) {
        Od(Infinity, Infinity, -Infinity, -Infinity, b);
        for (var c = this.f, d = 0, e = c.length; d < e; ++d)Yd(b, c[d].R());
        return b
    };
    k.ag = function () {
        return bn(this.f)
    };
    k.$e = function (b) {
        this.l != this.a && (yb(this.g), this.i = 0, this.l = this.a);
        if (0 > b || 0 !== this.i && b < this.i)return this;
        var c = b.toString();
        if (this.g.hasOwnProperty(c))return this.g[c];
        var d = [], e = this.f, f = !1, g, h;
        g = 0;
        for (h = e.length; g < h; ++g) {
            var l = e[g], n = l.$e(b);
            d.push(n);
            n !== l && (f = !0)
        }
        if (f)return b = new $m(null), cn(b), b.f = d, an(b), b.s(), this.g[c] = b;
        this.i = b;
        return this
    };
    k.U = function () {
        return "GeometryCollection"
    };
    k.sa = function (b) {
        var c = this.f, d, e;
        d = 0;
        for (e = c.length; d < e; ++d)if (c[d].sa(b))return !0;
        return !1
    };
    k.wa = function () {
        return 0 == this.f.length
    };
    k.xh = function (b) {
        b = bn(b);
        cn(this);
        this.f = b;
        an(this);
        this.s()
    };
    k.va = function (b) {
        var c = this.f, d, e;
        d = 0;
        for (e = c.length; d < e; ++d)c[d].va(b);
        this.s()
    };
    k.Ua = function (b, c) {
        var d = this.f, e, f;
        e = 0;
        for (f = d.length; e < f; ++e)d[e].Ua(b, c);
        this.s()
    };
    k.W = function () {
        cn(this);
        $m.$.W.call(this)
    };
    function dn(b, c, d, e, f) {
        var g = NaN, h = NaN, l = (d - c) / e;
        if (0 !== l)if (1 == l)g = b[c], h = b[c + 1]; else if (2 == l)g = .5 * b[c] + .5 * b[c + e], h = .5 * b[c + 1] + .5 * b[c + e + 1]; else {
            var h = b[c], l = b[c + 1], n = 0, g = [0], p;
            for (p = c + e; p < d; p += e) {
                var q = b[p], r = b[p + 1], n = n + Math.sqrt((q - h) * (q - h) + (r - l) * (r - l));
                g.push(n);
                h = q;
                l = r
            }
            d = .5 * n;
            for (var t, h = hb, l = 0, n = g.length; l < n;)p = l + n >> 1, q = h(d, g[p]), 0 < q ? l = p + 1 : (n = p, t = !q);
            t = t ? l : ~l;
            0 > t ? (d = (d - g[-t - 2]) / (g[-t - 1] - g[-t - 2]), c += (-t - 2) * e, g = Yb(b[c], b[c + e], d), h = Yb(b[c + 1], b[c + e + 1], d)) : (g = b[c + t * e], h = b[c + t * e + 1])
        }
        return null != f ?
            (f[0] = g, f[1] = h, f) : [g, h]
    }

    function en(b, c, d, e, f, g) {
        if (d == c)return null;
        if (f < b[c + e - 1])return g ? (d = b.slice(c, c + e), d[e - 1] = f, d) : null;
        if (b[d - 1] < f)return g ? (d = b.slice(d - e, d), d[e - 1] = f, d) : null;
        if (f == b[c + e - 1])return b.slice(c, c + e);
        c /= e;
        for (d /= e; c < d;)g = c + d >> 1, f < b[(g + 1) * e - 1] ? d = g : c = g + 1;
        d = b[c * e - 1];
        if (f == d)return b.slice((c - 1) * e, (c - 1) * e + e);
        g = (f - d) / (b[(c + 1) * e - 1] - d);
        d = [];
        var h;
        for (h = 0; h < e - 1; ++h)d.push(Yb(b[(c - 1) * e + h], b[c * e + h], g));
        d.push(f);
        return d
    }

    function fn(b, c, d, e, f, g) {
        var h = 0;
        if (g)return en(b, h, c[c.length - 1], d, e, f);
        if (e < b[d - 1])return f ? (b = b.slice(0, d), b[d - 1] = e, b) : null;
        if (b[b.length - 1] < e)return f ? (b = b.slice(b.length - d), b[d - 1] = e, b) : null;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var l = c[f];
            if (h != l) {
                if (e < b[h + d - 1])break;
                if (e <= b[l - 1])return en(b, h, l, d, e, !1);
                h = l
            }
        }
        return null
    };
    function N(b, c) {
        Ze.call(this);
        this.c = null;
        this.A = this.D = this.j = -1;
        this.ja(b, c)
    }

    w(N, Ze);
    k = N.prototype;
    k.yi = function (b) {
        null === this.o ? this.o = b.slice() : cb(this.o, b);
        this.s()
    };
    k.clone = function () {
        var b = new N(null);
        gn(b, this.b, this.o.slice());
        return b
    };
    k.Ya = function (b, c, d, e) {
        if (e < Rd(this.R(), b, c))return e;
        this.A != this.a && (this.D = Math.sqrt(hf(this.o, 0, this.o.length, this.H, 0)), this.A = this.a);
        return kf(this.o, 0, this.o.length, this.H, this.D, !1, b, c, d, e)
    };
    k.Ni = function (b, c) {
        return Af(this.o, 0, this.o.length, this.H, b, c)
    };
    k.nl = function (b, c) {
        return "XYM" != this.b && "XYZM" != this.b ? null : en(this.o, 0, this.o.length, this.H, b, m(c) ? c : !1)
    };
    k.V = function () {
        return pf(this.o, 0, this.o.length, this.H)
    };
    k.ol = function () {
        var b = this.o, c = this.H, d = b[0], e = b[1], f = 0, g;
        for (g = 0 + c; g < this.o.length; g += c)var h = b[g], l = b[g + 1], f = f + Math.sqrt((h - d) * (h - d) + (l - e) * (l - e)), d = h, e = l;
        return f
    };
    function tm(b) {
        b.j != b.a && (b.c = dn(b.o, 0, b.o.length, b.H, b.c), b.j = b.a);
        return b.c
    }

    k.Cc = function (b) {
        var c = [];
        c.length = rf(this.o, 0, this.o.length, this.H, b, c, 0);
        b = new N(null);
        gn(b, "XY", c);
        return b
    };
    k.U = function () {
        return "LineString"
    };
    k.sa = function (b) {
        return Bf(this.o, 0, this.o.length, this.H, b)
    };
    k.ja = function (b, c) {
        null === b ? gn(this, "XY", null) : (bf(this, c, b, 1), null === this.o && (this.o = []), this.o.length = nf(this.o, 0, b, this.H), this.s())
    };
    function gn(b, c, d) {
        af(b, c, d);
        b.s()
    };
    function O(b, c) {
        Ze.call(this);
        this.c = [];
        this.j = this.A = -1;
        this.ja(b, c)
    }

    w(O, Ze);
    k = O.prototype;
    k.zi = function (b) {
        null === this.o ? this.o = b.o.slice() : cb(this.o, b.o.slice());
        this.c.push(this.o.length);
        this.s()
    };
    k.clone = function () {
        var b = new O(null);
        hn(b, this.b, this.o.slice(), this.c.slice());
        return b
    };
    k.Ya = function (b, c, d, e) {
        if (e < Rd(this.R(), b, c))return e;
        this.j != this.a && (this.A = Math.sqrt(jf(this.o, 0, this.c, this.H, 0)), this.j = this.a);
        return lf(this.o, 0, this.c, this.H, this.A, !1, b, c, d, e)
    };
    k.ql = function (b, c, d) {
        return "XYM" != this.b && "XYZM" != this.b || 0 === this.o.length ? null : fn(this.o, this.c, this.H, b, m(c) ? c : !1, m(d) ? d : !1)
    };
    k.V = function () {
        return qf(this.o, 0, this.c, this.H)
    };
    k.kj = function (b) {
        if (0 > b || this.c.length <= b)return null;
        var c = new N(null);
        gn(c, this.b, this.o.slice(0 === b ? 0 : this.c[b - 1], this.c[b]));
        return c
    };
    k.gd = function () {
        var b = this.o, c = this.c, d = this.b, e = [], f = 0, g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var l = c[g], n = new N(null);
            gn(n, d, b.slice(f, l));
            e.push(n);
            f = l
        }
        return e
    };
    function um(b) {
        var c = [], d = b.o, e = 0, f = b.c;
        b = b.H;
        var g, h;
        g = 0;
        for (h = f.length; g < h; ++g) {
            var l = f[g], e = dn(d, e, l, b);
            cb(c, e);
            e = l
        }
        return c
    }

    k.Cc = function (b) {
        var c = [], d = [], e = this.o, f = this.c, g = this.H, h = 0, l = 0, n, p;
        n = 0;
        for (p = f.length; n < p; ++n) {
            var q = f[n], l = rf(e, h, q, g, b, c, l);
            d.push(l);
            h = q
        }
        c.length = l;
        b = new O(null);
        hn(b, "XY", c, d);
        return b
    };
    k.U = function () {
        return "MultiLineString"
    };
    k.sa = function (b) {
        a:{
            var c = this.o, d = this.c, e = this.H, f = 0, g, h;
            g = 0;
            for (h = d.length; g < h; ++g) {
                if (Bf(c, f, d[g], e, b)) {
                    b = !0;
                    break a
                }
                f = d[g]
            }
            b = !1
        }
        return b
    };
    k.ja = function (b, c) {
        if (null === b)hn(this, "XY", null, this.c); else {
            bf(this, c, b, 2);
            null === this.o && (this.o = []);
            var d = of(this.o, 0, b, this.H, this.c);
            this.o.length = 0 === d.length ? 0 : d[d.length - 1];
            this.s()
        }
    };
    function hn(b, c, d, e) {
        af(b, c, d);
        b.c = e;
        b.s()
    }

    function jn(b, c) {
        var d = "XY", e = [], f = [], g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var l = c[g];
            0 === g && (d = l.b);
            cb(e, l.o);
            f.push(e.length)
        }
        hn(b, d, e, f)
    };
    function kn(b, c) {
        Ze.call(this);
        this.ja(b, c)
    }

    w(kn, Ze);
    k = kn.prototype;
    k.Bi = function (b) {
        null === this.o ? this.o = b.o.slice() : cb(this.o, b.o);
        this.s()
    };
    k.clone = function () {
        var b = new kn(null);
        af(b, this.b, this.o.slice());
        b.s();
        return b
    };
    k.Ya = function (b, c, d, e) {
        if (e < Rd(this.R(), b, c))return e;
        var f = this.o, g = this.H, h, l, n;
        h = 0;
        for (l = f.length; h < l; h += g)if (n = ff(b, c, f[h], f[h + 1]), n < e) {
            e = n;
            for (n = 0; n < g; ++n)d[n] = f[h + n];
            d.length = g
        }
        return e
    };
    k.V = function () {
        return pf(this.o, 0, this.o.length, this.H)
    };
    k.tj = function (b) {
        var c = null === this.o ? 0 : this.o.length / this.H;
        if (0 > b || c <= b)return null;
        c = new D(null);
        vf(c, this.b, this.o.slice(b * this.H, (b + 1) * this.H));
        return c
    };
    k.ge = function () {
        var b = this.o, c = this.b, d = this.H, e = [], f, g;
        f = 0;
        for (g = b.length; f < g; f += d) {
            var h = new D(null);
            vf(h, c, b.slice(f, f + d));
            e.push(h)
        }
        return e
    };
    k.U = function () {
        return "MultiPoint"
    };
    k.sa = function (b) {
        var c = this.o, d = this.H, e, f, g, h;
        e = 0;
        for (f = c.length; e < f; e += d)if (g = c[e], h = c[e + 1], Td(b, g, h))return !0;
        return !1
    };
    k.ja = function (b, c) {
        null === b ? af(this, "XY", null) : (bf(this, c, b, 1), null === this.o && (this.o = []), this.o.length = nf(this.o, 0, b, this.H));
        this.s()
    };
    function P(b, c) {
        Ze.call(this);
        this.c = [];
        this.A = -1;
        this.D = null;
        this.T = this.C = this.N = -1;
        this.j = null;
        this.ja(b, c)
    }

    w(P, Ze);
    k = P.prototype;
    k.Ci = function (b) {
        if (null === this.o)this.o = b.o.slice(), b = b.c.slice(), this.c.push(); else {
            var c = this.o.length;
            cb(this.o, b.o);
            b = b.c.slice();
            var d, e;
            d = 0;
            for (e = b.length; d < e; ++d)b[d] += c
        }
        this.c.push(b);
        this.s()
    };
    k.clone = function () {
        var b = new P(null), c = Eb(this.c);
        ln(b, this.b, this.o.slice(), c);
        return b
    };
    k.Ya = function (b, c, d, e) {
        if (e < Rd(this.R(), b, c))return e;
        if (this.C != this.a) {
            var f = this.c, g = 0, h = 0, l, n;
            l = 0;
            for (n = f.length; l < n; ++l)var p = f[l], h = jf(this.o, g, p, this.H, h), g = p[p.length - 1];
            this.N = Math.sqrt(h);
            this.C = this.a
        }
        f = vm(this);
        g = this.c;
        h = this.H;
        l = this.N;
        n = 0;
        var p = m(void 0) ? void 0 : [NaN, NaN], q, r;
        q = 0;
        for (r = g.length; q < r; ++q) {
            var t = g[q];
            e = lf(f, n, t, h, l, !0, b, c, d, e, p);
            n = t[t.length - 1]
        }
        return e
    };
    k.gc = function (b, c) {
        var d;
        a:{
            d = vm(this);
            var e = this.c, f = 0;
            if (0 !== e.length) {
                var g, h;
                g = 0;
                for (h = e.length; g < h; ++g) {
                    var l = e[g];
                    if (yf(d, f, l, this.H, b, c)) {
                        d = !0;
                        break a
                    }
                    f = l[l.length - 1]
                }
            }
            d = !1
        }
        return d
    };
    k.rl = function () {
        var b = vm(this), c = this.c, d = 0, e = 0, f, g;
        f = 0;
        for (g = c.length; f < g; ++f)var h = c[f], e = e + df(b, d, h, this.H), d = h[h.length - 1];
        return e
    };
    k.V = function (b) {
        var c;
        m(b) ? (c = vm(this).slice(), Gf(c, this.c, this.H, b)) : c = this.o;
        b = c;
        c = this.c;
        var d = this.H, e = 0, f = m(void 0) ? void 0 : [], g = 0, h, l;
        h = 0;
        for (l = c.length; h < l; ++h) {
            var n = c[h];
            f[g++] = qf(b, e, n, d, f[g]);
            e = n[n.length - 1]
        }
        f.length = g;
        return f
    };
    function wm(b) {
        if (b.A != b.a) {
            var c = b.o, d = b.c, e = b.H, f = 0, g = [], h, l, n = Ld();
            h = 0;
            for (l = d.length; h < l; ++h) {
                var p = d[h], n = Zd(Od(Infinity, Infinity, -Infinity, -Infinity, void 0), c, f, p[0], e);
                g.push((n[0] + n[2]) / 2, (n[1] + n[3]) / 2);
                f = p[p.length - 1]
            }
            c = vm(b);
            d = b.c;
            e = b.H;
            f = 0;
            h = [];
            l = 0;
            for (n = d.length; l < n; ++l)p = d[l], h = zf(c, f, p, e, g, 2 * l, h), f = p[p.length - 1];
            b.D = h;
            b.A = b.a
        }
        return b.D
    }

    k.hj = function () {
        var b = new kn(null), c = wm(this).slice();
        af(b, "XY", c);
        b.s();
        return b
    };
    function vm(b) {
        if (b.T != b.a) {
            var c = b.o, d;
            a:{
                d = b.c;
                var e, f;
                e = 0;
                for (f = d.length; e < f; ++e)if (!Ef(c, d[e], b.H, void 0)) {
                    d = !1;
                    break a
                }
                d = !0
            }
            d ? b.j = c : (b.j = c.slice(), b.j.length = Gf(b.j, b.c, b.H));
            b.T = b.a
        }
        return b.j
    }

    k.Cc = function (b) {
        var c = [], d = [], e = this.o, f = this.c, g = this.H;
        b = Math.sqrt(b);
        var h = 0, l = 0, n, p;
        n = 0;
        for (p = f.length; n < p; ++n) {
            var q = f[n], r = [], l = sf(e, h, q, g, b, c, l, r);
            d.push(r);
            h = q[q.length - 1]
        }
        c.length = l;
        e = new P(null);
        ln(e, "XY", c, d);
        return e
    };
    k.vj = function (b) {
        if (0 > b || this.c.length <= b)return null;
        var c;
        0 === b ? c = 0 : (c = this.c[b - 1], c = c[c.length - 1]);
        b = this.c[b].slice();
        var d = b[b.length - 1];
        if (0 !== c) {
            var e, f;
            e = 0;
            for (f = b.length; e < f; ++e)b[e] -= c
        }
        e = new F(null);
        Hf(e, this.b, this.o.slice(c, d), b);
        return e
    };
    k.Od = function () {
        var b = this.b, c = this.o, d = this.c, e = [], f = 0, g, h, l, n;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var p = d[g].slice(), q = p[p.length - 1];
            if (0 !== f)for (l = 0, n = p.length; l < n; ++l)p[l] -= f;
            l = new F(null);
            Hf(l, b, c.slice(f, q), p);
            e.push(l);
            f = q
        }
        return e
    };
    k.U = function () {
        return "MultiPolygon"
    };
    k.sa = function (b) {
        a:{
            var c = vm(this), d = this.c, e = this.H, f = 0, g, h;
            g = 0;
            for (h = d.length; g < h; ++g) {
                var l = d[g];
                if (Cf(c, f, l, e, b)) {
                    b = !0;
                    break a
                }
                f = l[l.length - 1]
            }
            b = !1
        }
        return b
    };
    k.ja = function (b, c) {
        if (null === b)ln(this, "XY", null, this.c); else {
            bf(this, c, b, 3);
            null === this.o && (this.o = []);
            var d = this.o, e = this.H, f = this.c, g = 0, f = m(f) ? f : [], h = 0, l, n;
            l = 0;
            for (n = b.length; l < n; ++l)g = of(d, g, b[l], e, f[h]), f[h++] = g, g = g[g.length - 1];
            f.length = h;
            0 === f.length ? this.o.length = 0 : (d = f[f.length - 1], this.o.length = 0 === d.length ? 0 : d[d.length - 1]);
            this.s()
        }
    };
    function ln(b, c, d, e) {
        af(b, c, d);
        b.c = e;
        b.s()
    }

    function mn(b, c) {
        var d = "XY", e = [], f = [], g, h, l;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var n = c[g];
            0 === g && (d = n.b);
            var p = e.length;
            l = n.c;
            var q, r;
            q = 0;
            for (r = l.length; q < r; ++q)l[q] += p;
            cb(e, n.o);
            f.push(l)
        }
        ln(b, d, e, f)
    };
    function nn(b, c) {
        return ma(b) - ma(c)
    }

    function on(b, c) {
        var d = .5 * b / c;
        return d * d
    }

    function pn(b, c, d, e, f, g) {
        var h = !1, l, n;
        l = d.i;
        null !== l && (n = l.qd(), 2 == n || 3 == n ? l.Df(f, g) : (0 == n && l.load(), l.ef(f, g), h = !0));
        f = (0, d.g)(c);
        null != f && (e = f.$e(e), (0, qn[e.U()])(b, e, d, c));
        return h
    }

    var qn = {
        Point: function (b, c, d, e) {
            var f = d.i;
            if (null !== f) {
                if (2 != f.qd())return;
                var g = b.a(d.a, "Image");
                g.hb(f);
                g.wb(c, e)
            }
            f = d.b;
            null !== f && (b = b.a(d.a, "Text"), b.Ia(f), b.xb(c.V(), 0, 2, 2, c, e))
        }, LineString: function (b, c, d, e) {
            var f = d.c;
            if (null !== f) {
                var g = b.a(d.a, "LineString");
                g.Ha(null, f);
                g.Gb(c, e)
            }
            f = d.b;
            null !== f && (b = b.a(d.a, "Text"), b.Ia(f), b.xb(tm(c), 0, 2, 2, c, e))
        }, Polygon: function (b, c, d, e) {
            var f = d.f, g = d.c;
            if (null !== f || null !== g) {
                var h = b.a(d.a, "Polygon");
                h.Ha(f, g);
                h.Yb(c, e)
            }
            f = d.b;
            null !== f && (b = b.a(d.a, "Text"), b.Ia(f),
                b.xb(Jf(c), 0, 2, 2, c, e))
        }, MultiPoint: function (b, c, d, e) {
            var f = d.i;
            if (null !== f) {
                if (2 != f.qd())return;
                var g = b.a(d.a, "Image");
                g.hb(f);
                g.vb(c, e)
            }
            f = d.b;
            null !== f && (b = b.a(d.a, "Text"), b.Ia(f), d = c.o, b.xb(d, 0, d.length, c.H, c, e))
        }, MultiLineString: function (b, c, d, e) {
            var f = d.c;
            if (null !== f) {
                var g = b.a(d.a, "LineString");
                g.Ha(null, f);
                g.Ac(c, e)
            }
            f = d.b;
            null !== f && (b = b.a(d.a, "Text"), b.Ia(f), d = um(c), b.xb(d, 0, d.length, 2, c, e))
        }, MultiPolygon: function (b, c, d, e) {
            var f = d.f, g = d.c;
            if (null !== g || null !== f) {
                var h = b.a(d.a, "Polygon");
                h.Ha(f,
                    g);
                h.Bc(c, e)
            }
            f = d.b;
            null !== f && (b = b.a(d.a, "Text"), b.Ia(f), d = wm(c), b.xb(d, 0, d.length, 2, c, e))
        }, GeometryCollection: function (b, c, d, e) {
            c = c.f;
            var f, g;
            f = 0;
            for (g = c.length; f < g; ++f)(0, qn[c[f].U()])(b, c[f], d, e)
        }, Circle: function (b, c, d, e) {
            var f = d.f, g = d.c;
            if (null !== f || null !== g) {
                var h = b.a(d.a, "Polygon");
                h.Ha(f, g);
                h.zc(c, e)
            }
            f = d.b;
            null !== f && (b = b.a(d.a, "Text"), b.Ia(f), b.xb(c.ld(), 0, 2, 2, c, e))
        }
    };

    function rn(b, c, d, e, f) {
        nk.call(this, b, c, d, 2, e);
        this.b = f
    }

    w(rn, nk);
    rn.prototype.a = function () {
        return this.b
    };
    function sn(b) {
        Eh.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            logo: b.logo,
            projection: b.projection,
            state: b.state
        });
        this.v = m(b.resolutions) ? b.resolutions : null
    }

    w(sn, Eh);
    function tn(b, c) {
        if (null !== b.v) {
            var d = bc(b.v, c, 0);
            c = b.v[d]
        }
        return c
    }

    sn.prototype.l = function (b) {
        b = b.target;
        switch (b.state) {
            case 1:
                C(this, new un(vn, b));
                break;
            case 2:
                C(this, new un(wn, b));
                break;
            case 3:
                C(this, new un(xn, b))
        }
    };
    function yn(b, c) {
        b.a().src = c
    }

    function un(b, c) {
        sc.call(this, b);
        this.image = c
    }

    w(un, sc);
    var vn = "imageloadstart", wn = "imageloadend", xn = "imageloaderror";

    function zn(b) {
        sn.call(this, {
            attributions: b.attributions,
            logo: b.logo,
            projection: b.projection,
            resolutions: b.resolutions,
            state: m(b.state) ? b.state : void 0
        });
        this.Z = b.canvasFunction;
        this.N = null;
        this.T = 0;
        this.aa = m(b.ratio) ? b.ratio : 1.5
    }

    w(zn, sn);
    zn.prototype.Hc = function (b, c, d, e) {
        c = tn(this, c);
        var f = this.N;
        if (null !== f && this.T == this.a && f.resolution == c && f.g == d && Ud(f.R(), b))return f;
        b = b.slice();
        le(b, this.aa);
        e = this.Z(b, c, d, [je(b) / c * d, ge(b) / c * d], e);
        null === e || (f = new rn(b, c, d, this.g, e));
        this.N = f;
        this.T = this.a;
        return f
    };
    function An(b) {
        gd.call(this);
        this.ha = void 0;
        this.b = "geometry";
        this.g = null;
        this.c = void 0;
        this.f = null;
        x(this, id(this.b), this.Ud, !1, this);
        m(b) && (b instanceof Xe || null === b ? this.Sa(b) : this.I(b))
    }

    w(An, gd);
    k = An.prototype;
    k.clone = function () {
        var b = new An(this.P());
        b.Pc(this.b);
        var c = this.Y();
        null != c && b.Sa(c.clone());
        c = this.g;
        null === c || b.hf(c);
        return b
    };
    k.Y = function () {
        return this.get(this.b)
    };
    k.ej = function () {
        return this.ha
    };
    k.dj = function () {
        return this.b
    };
    k.Mk = function () {
        return this.g
    };
    k.Nk = function () {
        return this.c
    };
    k.Ok = function () {
        this.s()
    };
    k.Ud = function () {
        null !== this.f && (Xc(this.f), this.f = null);
        var b = this.Y();
        null != b && (this.f = x(b, "change", this.Ok, !1, this));
        this.s()
    };
    k.Sa = function (b) {
        this.set(this.b, b)
    };
    k.hf = function (b) {
        this.g = b;
        null === b ? b = void 0 : ka(b) || (b = ga(b) ? b : [b], b = ne(b));
        this.c = b;
        this.s()
    };
    k.Wb = function (b) {
        this.ha = b;
        this.s()
    };
    k.Pc = function (b) {
        Wc(this, id(this.b), this.Ud, !1, this);
        this.b = b;
        x(this, id(this.b), this.Ud, !1, this);
        this.Ud()
    };
    function Bn(b) {
        b.prototype.then = b.prototype.then;
        b.prototype.$goog_Thenable = !0
    }

    function Cn(b) {
        if (!b)return !1;
        try {
            return !!b.$goog_Thenable
        } catch (c) {
            return !1
        }
    };
    function Dn(b, c) {
        En || Fn();
        Gn || (En(), Gn = !0);
        Hn.push(new In(b, c))
    }

    var En;

    function Fn() {
        if (ba.Promise && ba.Promise.resolve) {
            var b = ba.Promise.resolve();
            En = function () {
                b.then(Jn)
            }
        } else En = function () {
            ri(Jn)
        }
    }

    var Gn = !1, Hn = [];

    function Jn() {
        for (; Hn.length;) {
            var b = Hn;
            Hn = [];
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    d.a.call(d.b)
                } catch (e) {
                    qi(e)
                }
            }
        }
        Gn = !1
    }

    function In(b, c) {
        this.a = b;
        this.b = c
    };
    function Kn(b, c) {
        this.b = Ln;
        this.i = void 0;
        this.a = this.c = null;
        this.f = this.g = !1;
        try {
            var d = this;
            b.call(c, function (b) {
                Mn(d, Nn, b)
            }, function (b) {
                Mn(d, On, b)
            })
        } catch (e) {
            Mn(this, On, e)
        }
    }

    var Ln = 0, Nn = 2, On = 3;
    Kn.prototype.then = function (b, c, d) {
        return Pn(this, ka(b) ? b : null, ka(c) ? c : null, d)
    };
    Bn(Kn);
    Kn.prototype.cancel = function (b) {
        this.b == Ln && Dn(function () {
            var c = new Qn(b);
            Rn(this, c)
        }, this)
    };
    function Rn(b, c) {
        if (b.b == Ln)if (b.c) {
            var d = b.c;
            if (d.a) {
                for (var e = 0, f = -1, g = 0, h; h = d.a[g]; g++)if (h = h.Xc)if (e++, h == b && (f = g), 0 <= f && 1 < e)break;
                0 <= f && (d.b == Ln && 1 == e ? Rn(d, c) : (e = d.a.splice(f, 1)[0], Sn(d, e, On, c)))
            }
        } else Mn(b, On, c)
    }

    function Tn(b, c) {
        b.a && b.a.length || b.b != Nn && b.b != On || Un(b);
        b.a || (b.a = []);
        b.a.push(c)
    }

    function Pn(b, c, d, e) {
        var f = {Xc: null, Yg: null, $g: null};
        f.Xc = new Kn(function (b, h) {
            f.Yg = c ? function (d) {
                try {
                    var f = c.call(e, d);
                    b(f)
                } catch (p) {
                    h(p)
                }
            } : b;
            f.$g = d ? function (c) {
                try {
                    var f = d.call(e, c);
                    !m(f) && c instanceof Qn ? h(c) : b(f)
                } catch (p) {
                    h(p)
                }
            } : h
        });
        f.Xc.c = b;
        Tn(b, f);
        return f.Xc
    }

    Kn.prototype.j = function (b) {
        this.b = Ln;
        Mn(this, Nn, b)
    };
    Kn.prototype.l = function (b) {
        this.b = Ln;
        Mn(this, On, b)
    };
    function Mn(b, c, d) {
        if (b.b == Ln) {
            if (b == d)c = On, d = new TypeError("Promise cannot resolve to itself"); else {
                if (Cn(d)) {
                    b.b = 1;
                    d.then(b.j, b.l, b);
                    return
                }
                if (la(d))try {
                    var e = d.then;
                    if (ka(e)) {
                        Vn(b, d, e);
                        return
                    }
                } catch (f) {
                    c = On, d = f
                }
            }
            b.i = d;
            b.b = c;
            Un(b);
            c != On || d instanceof Qn || Wn(b, d)
        }
    }

    function Vn(b, c, d) {
        function e(c) {
            g || (g = !0, b.l(c))
        }

        function f(c) {
            g || (g = !0, b.j(c))
        }

        b.b = 1;
        var g = !1;
        try {
            d.call(c, f, e)
        } catch (h) {
            e(h)
        }
    }

    function Un(b) {
        b.g || (b.g = !0, Dn(b.B, b))
    }

    Kn.prototype.B = function () {
        for (; this.a && this.a.length;) {
            var b = this.a;
            this.a = [];
            for (var c = 0; c < b.length; c++)Sn(this, b[c], this.b, this.i)
        }
        this.g = !1
    };
    function Sn(b, c, d, e) {
        if (d == Nn)c.Yg(e); else {
            if (c.Xc)for (; b && b.f; b = b.c)b.f = !1;
            c.$g(e)
        }
    }

    function Wn(b, c) {
        b.f = !0;
        Dn(function () {
            b.f && Xn.call(null, c)
        })
    }

    var Xn = qi;

    function Qn(b) {
        xa.call(this, b)
    }

    w(Qn, xa);
    Qn.prototype.name = "cancel";
    function Yn(b, c, d) {
        if (ka(b))d && (b = ra(b, d)); else if (b && "function" == typeof b.handleEvent)b = ra(b.handleEvent, b); else throw Error("Invalid listener argument");
        return 2147483647 < c ? -1 : ba.setTimeout(b, c || 0)
    };
    var Zn = ba.JSON.parse, $n = ba.JSON.stringify;

    function ao() {
    }

    ao.prototype.a = null;
    function bo(b) {
        var c;
        (c = b.a) || (c = {}, co(b) && (c[0] = !0, c[1] = !0), c = b.a = c);
        return c
    };
    var eo;

    function fo() {
    }

    w(fo, ao);
    function go(b) {
        return (b = co(b)) ? new ActiveXObject(b) : new XMLHttpRequest
    }

    function co(b) {
        if (!b.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var c = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], d = 0; d < c.length; d++) {
                var e = c[d];
                try {
                    return new ActiveXObject(e), b.b = e
                } catch (f) {
                }
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return b.b
    }

    eo = new fo;
    var ho = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

    function io(b) {
        if (jo) {
            jo = !1;
            var c = ba.location;
            if (c) {
                var d = c.href;
                if (d && (d = (d = io(d)[3] || null) ? decodeURI(d) : d) && d != c.hostname)throw jo = !0, Error();
            }
        }
        return b.match(ho)
    }

    var jo = Lb;

    function ko(b, c) {
        for (var d = b.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].indexOf("="), g = null, h = null;
            0 <= f ? (g = d[e].substring(0, f), h = d[e].substring(f + 1)) : g = d[e];
            c(g, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "")
        }
    }

    function lo(b) {
        if (b[1]) {
            var c = b[0], d = c.indexOf("#");
            0 <= d && (b.push(c.substr(d)), b[0] = c = c.substr(0, d));
            d = c.indexOf("?");
            0 > d ? b[1] = "?" : d == c.length - 1 && (b[1] = void 0)
        }
        return b.join("")
    }

    function mo(b, c, d) {
        if (ga(c))for (var e = 0; e < c.length; e++)mo(b, String(c[e]), d); else null != c && d.push("&", b, "" === c ? "" : "=", encodeURIComponent(String(c)))
    }

    function no(b, c) {
        for (var d in c)mo(d, c[d], b);
        return b
    };
    function oo(b) {
        ad.call(this);
        this.C = new xi;
        this.l = b || null;
        this.a = !1;
        this.j = this.ga = null;
        this.g = this.u = "";
        this.b = this.v = this.f = this.B = !1;
        this.i = 0;
        this.c = null;
        this.A = po;
        this.D = this.N = !1
    }

    w(oo, ad);
    var po = "", qo = /^https?$/i, ro = ["POST", "PUT"];
    k = oo.prototype;
    k.send = function (b, c, d, e) {
        if (this.ga)throw Error("[goog.net.XhrIo] Object is active with another request=" + this.u + "; newUri=" + b);
        c = c ? c.toUpperCase() : "GET";
        this.u = b;
        this.g = "";
        this.B = !1;
        this.a = !0;
        this.ga = this.l ? go(this.l) : go(eo);
        this.j = this.l ? bo(this.l) : bo(eo);
        this.ga.onreadystatechange = ra(this.Zg, this);
        try {
            this.v = !0, this.ga.open(c, String(b), !0), this.v = !1
        } catch (f) {
            so(this, f);
            return
        }
        b = d || "";
        var g = this.C.clone();
        e && wi(e, function (b, c) {
            g.set(c, b)
        });
        e = Wa(g.O(), to);
        d = ba.FormData && b instanceof ba.FormData;
        !Ya(ro, c) || e || d || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        g.forEach(function (b, c) {
            this.ga.setRequestHeader(c, b)
        }, this);
        this.A && (this.ga.responseType = this.A);
        "withCredentials" in this.ga && (this.ga.withCredentials = this.N);
        try {
            uo(this), 0 < this.i && ((this.D = vo(this.ga)) ? (this.ga.timeout = this.i, this.ga.ontimeout = ra(this.uc, this)) : this.c = Yn(this.uc, this.i, this)), this.f = !0, this.ga.send(b), this.f = !1
        } catch (h) {
            so(this, h)
        }
    };
    function vo(b) {
        return Jb && Sb(9) && ja(b.timeout) && m(b.ontimeout)
    }

    function to(b) {
        return "content-type" == b.toLowerCase()
    }

    k.uc = function () {
        "undefined" != typeof aa && this.ga && (this.g = "Timed out after " + this.i + "ms, aborting", C(this, "timeout"), this.ga && this.a && (this.a = !1, this.b = !0, this.ga.abort(), this.b = !1, C(this, "complete"), C(this, "abort"), wo(this)))
    };
    function so(b, c) {
        b.a = !1;
        b.ga && (b.b = !0, b.ga.abort(), b.b = !1);
        b.g = c;
        xo(b);
        wo(b)
    }

    function xo(b) {
        b.B || (b.B = !0, C(b, "complete"), C(b, "error"))
    }

    k.W = function () {
        this.ga && (this.a && (this.a = !1, this.b = !0, this.ga.abort(), this.b = !1), wo(this, !0));
        oo.$.W.call(this)
    };
    k.Zg = function () {
        this.ea || (this.v || this.f || this.b ? yo(this) : this.an())
    };
    k.an = function () {
        yo(this)
    };
    function yo(b) {
        if (b.a && "undefined" != typeof aa && (!b.j[1] || 4 != zo(b) || 2 != Ao(b)))if (b.f && 4 == zo(b))Yn(b.Zg, 0, b); else if (C(b, "readystatechange"), 4 == zo(b)) {
            b.a = !1;
            try {
                if (Bo(b))C(b, "complete"), C(b, "success"); else {
                    var c;
                    try {
                        c = 2 < zo(b) ? b.ga.statusText : ""
                    } catch (d) {
                        c = ""
                    }
                    b.g = c + " [" + Ao(b) + "]";
                    xo(b)
                }
            } finally {
                wo(b)
            }
        }
    }

    function wo(b, c) {
        if (b.ga) {
            uo(b);
            var d = b.ga, e = b.j[0] ? ca : null;
            b.ga = null;
            b.j = null;
            c || C(b, "ready");
            try {
                d.onreadystatechange = e
            } catch (f) {
            }
        }
    }

    function uo(b) {
        b.ga && b.D && (b.ga.ontimeout = null);
        ja(b.c) && (ba.clearTimeout(b.c), b.c = null)
    }

    function Bo(b) {
        var c = Ao(b), d;
        a:switch (c) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                d = !0;
                break a;
            default:
                d = !1
        }
        if (!d) {
            if (c = 0 === c)b = io(String(b.u))[1] || null, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), c = !qo.test(b ? b.toLowerCase() : "");
            d = c
        }
        return d
    }

    function zo(b) {
        return b.ga ? b.ga.readyState : 0
    }

    function Ao(b) {
        try {
            return 2 < zo(b) ? b.ga.status : -1
        } catch (c) {
            return -1
        }
    }

    function Co(b) {
        try {
            return b.ga ? b.ga.responseText : ""
        } catch (c) {
            return ""
        }
    };
    function Do(b) {
        if ("undefined" != typeof XMLSerializer)return (new XMLSerializer).serializeToString(b);
        if (b = b.xml)return b;
        throw Error("Your browser does not support serializing XML documents");
    };
    var Eo;
    a:if (document.implementation && document.implementation.createDocument)Eo = document.implementation.createDocument("", "", null); else {
        if ("undefined" != typeof ActiveXObject) {
            var Fo = new ActiveXObject("MSXML2.DOMDocument");
            if (Fo) {
                Fo.resolveExternals = !1;
                Fo.validateOnParse = !1;
                try {
                    Fo.setProperty("ProhibitDTD", !0), Fo.setProperty("MaxXMLSize", 2048), Fo.setProperty("MaxElementDepth", 256)
                } catch (Go) {
                }
            }
            if (Fo) {
                Eo = Fo;
                break a
            }
        }
        throw Error("Your browser does not support creating new documents");
    }
    var Ho = Eo;

    function Io(b, c) {
        return Ho.createElementNS(b, c)
    }

    function Jo(b, c) {
        null === b && (b = "");
        return Ho.createNode(1, c, b)
    }

    var Ko = document.implementation && document.implementation.createDocument ? Io : Jo;

    function Lo(b, c) {
        return Mo(b, c, []).join("")
    }

    function Mo(b, c, d) {
        if (4 == b.nodeType || 3 == b.nodeType)c ? d.push(String(b.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : d.push(b.nodeValue); else for (b = b.firstChild; null !== b; b = b.nextSibling)Mo(b, c, d);
        return d
    }

    function No(b) {
        return b.localName
    }

    function Oo(b) {
        var c = b.localName;
        return m(c) ? c : b.baseName
    }

    var Po = Jb ? Oo : No;

    function Qo(b) {
        return b instanceof Document
    }

    function Ro(b) {
        return la(b) && 9 == b.nodeType
    }

    var So = Jb ? Ro : Qo;

    function To(b) {
        return b instanceof Node
    }

    function Uo(b) {
        return la(b) && m(b.nodeType)
    }

    var Vo = Jb ? Uo : To;

    function Wo(b, c, d) {
        return b.getAttributeNS(c, d) || ""
    }

    function Xo(b, c, d) {
        var e = "";
        b = Yo(b, c, d);
        m(b) && (e = b.nodeValue);
        return e
    }

    var Zo = document.implementation && document.implementation.createDocument ? Wo : Xo;

    function $o(b, c, d) {
        return b.getAttributeNodeNS(c, d)
    }

    function ap(b, c, d) {
        var e = null;
        b = b.attributes;
        for (var f, g, h = 0, l = b.length; h < l; ++h)if (f = b[h], f.namespaceURI == c && (g = f.prefix ? f.prefix + ":" + d : d, g == f.nodeName)) {
            e = f;
            break
        }
        return e
    }

    var Yo = document.implementation && document.implementation.createDocument ? $o : ap;

    function bp(b, c, d, e) {
        b.setAttributeNS(c, d, e)
    }

    function cp(b, c, d, e) {
        null === c ? b.setAttribute(d, e) : (c = b.ownerDocument.createNode(2, d, c), c.nodeValue = e, b.setAttributeNode(c))
    }

    var dp = document.implementation && document.implementation.createDocument ? bp : cp;

    function ep(b) {
        return (new DOMParser).parseFromString(b, "application/xml")
    }

    function fp(b, c) {
        return function (d, e) {
            var f = b.call(c, d, e);
            m(f) && cb(e[e.length - 1], f)
        }
    }

    function gp(b, c) {
        return function (d, e) {
            var f = b.call(m(c) ? c : this, d, e);
            m(f) && e[e.length - 1].push(f)
        }
    }

    function hp(b, c) {
        return function (d, e) {
            var f = b.call(m(c) ? c : this, d, e);
            m(f) && (e[e.length - 1] = f)
        }
    }

    function ip(b) {
        return function (c, d) {
            var e = b.call(m(void 0) ? void 0 : this, c, d);
            m(e) && Bb(d[d.length - 1], m(void 0) ? void 0 : c.localName).push(e)
        }
    }

    function Q(b, c) {
        return function (d, e) {
            var f = b.call(m(void 0) ? void 0 : this, d, e);
            m(f) && (e[e.length - 1][m(c) ? c : d.localName] = f)
        }
    }

    function T(b, c, d) {
        return jp(b, c, d)
    }

    function U(b, c) {
        return function (d, e, f) {
            b.call(m(c) ? c : this, d, e, f);
            f[f.length - 1].node.appendChild(d)
        }
    }

    function kp(b) {
        var c, d;
        return function (e, f, g) {
            if (!m(c)) {
                c = {};
                var h = {};
                h[e.localName] = b;
                c[e.namespaceURI] = h;
                d = lp(e.localName)
            }
            mp(c, d, f, g)
        }
    }

    function lp(b, c) {
        return function (d, e, f) {
            d = e[e.length - 1].node;
            e = b;
            m(e) || (e = f);
            f = c;
            m(c) || (f = d.namespaceURI);
            return Ko(f, e)
        }
    }

    var np = lp();

    function op(b, c) {
        for (var d = c.length, e = Array(d), f = 0; f < d; ++f)e[f] = b[c[f]];
        return e
    }

    function jp(b, c, d) {
        d = m(d) ? d : {};
        var e, f;
        e = 0;
        for (f = b.length; e < f; ++e)d[b[e]] = c;
        return d
    }

    function pp(b, c, d, e) {
        for (c = c.firstElementChild; null !== c; c = c.nextElementSibling) {
            var f = b[c.namespaceURI];
            m(f) && (f = f[c.localName], m(f) && f.call(e, c, d))
        }
    }

    function V(b, c, d, e, f) {
        e.push(b);
        pp(c, d, e, f);
        return e.pop()
    }

    function mp(b, c, d, e, f, g) {
        for (var h = (m(f) ? f : d).length, l, n, p = 0; p < h; ++p)l = d[p], m(l) && (n = c.call(g, l, e, m(f) ? f[p] : void 0), m(n) && b[n.namespaceURI][n.localName].call(g, n, l, e))
    }

    function qp(b, c, d, e, f, g, h) {
        f.push(b);
        mp(c, d, e, f, g, h);
        f.pop()
    };
    function rp(b, c, d) {
        return function (e, f, g) {
            e = new oo;
            e.A = "text";
            x(e, "complete", function (b) {
                b = b.target;
                if (Bo(b)) {
                    var e = c.U(), f;
                    if ("json" == e)f = Co(b); else if ("text" == e)f = Co(b); else if ("xml" == e) {
                        if (!Jb)try {
                            f = b.ga ? b.ga.responseXML : null
                        } catch (p) {
                            f = null
                        }
                        null != f || (f = ep(Co(b)))
                    }
                    null != f && (f = c.qa(f, {featureProjection: g}), d.call(this, f))
                }
                rc(b)
            }, !1, this);
            e.send(b)
        }
    }

    function sp(b, c) {
        return rp(b, c, function (b) {
            this.xc(b)
        })
    };
    function tp() {
        return [[-Infinity, -Infinity, Infinity, Infinity]]
    };
    var up;
    (function () {
        var b = {Wf: {}};
        (function () {
            function c(b, d) {
                if (!(this instanceof c))return new c(b, d);
                this.Ie = Math.max(4, b || 9);
                this.Nf = Math.max(2, Math.ceil(.4 * this.Ie));
                d && this.ti(d);
                this.clear()
            }

            function d(b, c) {
                b.bbox = e(b, 0, b.children.length, c)
            }

            function e(b, c, d, e) {
                for (var g = [Infinity, Infinity, -Infinity, -Infinity], h; c < d; c++)h = b.children[c], f(g, b.Ba ? e(h) : h.bbox);
                return g
            }

            function f(b, c) {
                b[0] = Math.min(b[0], c[0]);
                b[1] = Math.min(b[1], c[1]);
                b[2] = Math.max(b[2], c[2]);
                b[3] = Math.max(b[3], c[3])
            }

            function g(b, c) {
                return b.bbox[0] -
                    c.bbox[0]
            }

            function h(b, c) {
                return b.bbox[1] - c.bbox[1]
            }

            function l(b) {
                return (b[2] - b[0]) * (b[3] - b[1])
            }

            function n(b) {
                return b[2] - b[0] + (b[3] - b[1])
            }

            function p(b, c) {
                return b[0] <= c[0] && b[1] <= c[1] && c[2] <= b[2] && c[3] <= b[3]
            }

            function q(b, c) {
                return c[0] <= b[2] && c[1] <= b[3] && c[2] >= b[0] && c[3] >= b[1]
            }

            function r(b, c, d, e, f) {
                for (var g = [c, d], h; g.length;)d = g.pop(), c = g.pop(), d - c <= e || (h = c + Math.ceil((d - c) / e / 2) * e, t(b, c, d, h, f), g.push(c, h, h, d))
            }

            function t(b, c, d, e, f) {
                for (var g, h, l, n, p; d > c;) {
                    600 < d - c && (g = d - c + 1, h = e - c + 1, l = Math.log(g),
                        n = .5 * Math.exp(2 * l / 3), p = .5 * Math.sqrt(l * n * (g - n) / g) * (0 > h - g / 2 ? -1 : 1), l = Math.max(c, Math.floor(e - h * n / g + p)), h = Math.min(d, Math.floor(e + (g - h) * n / g + p)), t(b, l, h, e, f));
                    g = b[e];
                    h = c;
                    n = d;
                    v(b, c, e);
                    for (0 < f(b[d], g) && v(b, c, d); h < n;) {
                        v(b, h, n);
                        h++;
                        for (n--; 0 > f(b[h], g);)h++;
                        for (; 0 < f(b[n], g);)n--
                    }
                    0 === f(b[c], g) ? v(b, c, n) : (n++, v(b, n, d));
                    n <= e && (c = n + 1);
                    e <= n && (d = n - 1)
                }
            }

            function v(b, c, d) {
                var e = b[c];
                b[c] = b[d];
                b[d] = e
            }

            c.prototype = {
                all: function () {
                    return this.Jf(this.data, [])
                }, search: function (b) {
                    var c = this.data, d = [], e = this.La;
                    if (!q(b, c.bbox))return d;
                    for (var f = [], g, h, l, n; c;) {
                        g = 0;
                        for (h = c.children.length; g < h; g++)l = c.children[g], n = c.Ba ? e(l) : l.bbox, q(b, n) && (c.Ba ? d.push(l) : p(b, n) ? this.Jf(l, d) : f.push(l));
                        c = f.pop()
                    }
                    return d
                }, load: function (b) {
                    if (!b || !b.length)return this;
                    if (b.length < this.Nf) {
                        for (var c = 0, d = b.length; c < d; c++)this.oa(b[c]);
                        return this
                    }
                    b = this.Lf(b.slice(), 0, b.length - 1, 0);
                    this.data.children.length ? this.data.height === b.height ? this.Of(this.data, b) : (this.data.height < b.height && (c = this.data, this.data = b, b = c), this.Mf(b, this.data.height - b.height - 1,
                        !0)) : this.data = b;
                    return this
                }, oa: function (b) {
                    b && this.Mf(b, this.data.height - 1);
                    return this
                }, clear: function () {
                    this.data = {children: [], height: 1, bbox: [Infinity, Infinity, -Infinity, -Infinity], Ba: !0};
                    return this
                }, remove: function (b) {
                    if (!b)return this;
                    for (var c = this.data, d = this.La(b), e = [], f = [], g, h, l, n; c || e.length;) {
                        c || (c = e.pop(), h = e[e.length - 1], g = f.pop(), n = !0);
                        if (c.Ba && (l = c.children.indexOf(b), -1 !== l)) {
                            c.children.splice(l, 1);
                            e.push(c);
                            this.si(e);
                            break
                        }
                        n || c.Ba || !p(c.bbox, d) ? h ? (g++, c = h.children[g], n = !1) : c = null :
                            (e.push(c), f.push(g), g = 0, h = c, c = c.children[0])
                    }
                    return this
                }, La: function (b) {
                    return b
                }, Le: function (b, c) {
                    return b[0] - c[0]
                }, Me: function (b, c) {
                    return b[1] - c[1]
                }, toJSON: function () {
                    return this.data
                }, Jf: function (b, c) {
                    for (var d = []; b;)b.Ba ? c.push.apply(c, b.children) : d.push.apply(d, b.children), b = d.pop();
                    return c
                }, Lf: function (b, c, e, f) {
                    var g = e - c + 1, h = this.Ie, l;
                    if (g <= h)return l = {
                        children: b.slice(c, e + 1),
                        height: 1,
                        bbox: null,
                        Ba: !0
                    }, d(l, this.La), l;
                    f || (f = Math.ceil(Math.log(g) / Math.log(h)), h = Math.ceil(g / Math.pow(h, f - 1)));
                    l = {children: [], height: f, bbox: null};
                    var g = Math.ceil(g / h), h = g * Math.ceil(Math.sqrt(h)), n, p, q;
                    for (r(b, c, e, h, this.Le); c <= e; c += h)for (p = Math.min(c + h - 1, e), r(b, c, p, g, this.Me), n = c; n <= p; n += g)q = Math.min(n + g - 1, p), l.children.push(this.Lf(b, n, q, f - 1));
                    d(l, this.La);
                    return l
                }, ri: function (b, c, d, e) {
                    for (var f, g, h, n, p, q, r, t; ;) {
                        e.push(c);
                        if (c.Ba || e.length - 1 === d)break;
                        r = t = Infinity;
                        f = 0;
                        for (g = c.children.length; f < g; f++) {
                            h = c.children[f];
                            p = l(h.bbox);
                            q = b;
                            var v = h.bbox;
                            q = (Math.max(v[2], q[2]) - Math.min(v[0], q[0])) * (Math.max(v[3],
                                    q[3]) - Math.min(v[1], q[1])) - p;
                            q < t ? (t = q, r = p < r ? p : r, n = h) : q === t && p < r && (r = p, n = h)
                        }
                        c = n
                    }
                    return c
                }, Mf: function (b, c, d) {
                    var e = this.La;
                    d = d ? b.bbox : e(b);
                    var e = [], g = this.ri(d, this.data, c, e);
                    g.children.push(b);
                    for (f(g.bbox, d); 0 <= c;)if (e[c].children.length > this.Ie)this.ui(e, c), c--; else break;
                    this.ni(d, e, c)
                }, ui: function (b, c) {
                    var e = b[c], f = e.children.length, g = this.Nf;
                    this.oi(e, g, f);
                    f = {children: e.children.splice(this.pi(e, g, f)), height: e.height};
                    e.Ba && (f.Ba = !0);
                    d(e, this.La);
                    d(f, this.La);
                    c ? b[c - 1].children.push(f) : this.Of(e,
                        f)
                }, Of: function (b, c) {
                    this.data = {children: [b, c], height: b.height + 1};
                    d(this.data, this.La)
                }, pi: function (b, c, d) {
                    var f, g, h, n, p, q, r;
                    p = q = Infinity;
                    for (f = c; f <= d - c; f++) {
                        g = e(b, 0, f, this.La);
                        h = e(b, f, d, this.La);
                        var t = g, v = h;
                        n = Math.max(t[0], v[0]);
                        var Aa = Math.max(t[1], v[1]), db = Math.min(t[2], v[2]), t = Math.min(t[3], v[3]);
                        n = Math.max(0, db - n) * Math.max(0, t - Aa);
                        g = l(g) + l(h);
                        n < p ? (p = n, r = f, q = g < q ? g : q) : n === p && g < q && (q = g, r = f)
                    }
                    return r
                }, oi: function (b, c, d) {
                    var e = b.Ba ? this.Le : g, f = b.Ba ? this.Me : h, l = this.Kf(b, c, d, e);
                    c = this.Kf(b, c, d, f);
                    l < c && b.children.sort(e)
                }, Kf: function (b, c, d, g) {
                    b.children.sort(g);
                    g = this.La;
                    var h = e(b, 0, c, g), l = e(b, d - c, d, g), p = n(h) + n(l), q, r;
                    for (q = c; q < d - c; q++)r = b.children[q], f(h, b.Ba ? g(r) : r.bbox), p += n(h);
                    for (q = d - c - 1; q >= c; q--)r = b.children[q], f(l, b.Ba ? g(r) : r.bbox), p += n(l);
                    return p
                }, ni: function (b, c, d) {
                    for (; 0 <= d; d--)f(c[d].bbox, b)
                }, si: function (b) {
                    for (var c = b.length - 1, e; 0 <= c; c--)0 === b[c].children.length ? 0 < c ? (e = b[c - 1].children, e.splice(e.indexOf(b[c]), 1)) : this.clear() : d(b[c], this.La)
                }, ti: function (b) {
                    var c = ["return a", " - b",
                        ";"];
                    this.Le = new Function("a", "b", c.join(b[0]));
                    this.Me = new Function("a", "b", c.join(b[1]));
                    this.La = new Function("a", "return [a" + b.join(", a") + "];")
                }
            };
            "function" === typeof define && define.Io ? define("rbush", function () {
                return c
            }) : "undefined" !== typeof b ? b.Wf = c : "undefined" !== typeof self ? self.a = c : window.a = c
        })();
        up = b.Wf
    })();
    function vp(b) {
        this.b = up(b);
        this.a = {}
    }

    k = vp.prototype;
    k.oa = function (b, c) {
        var d = [b[0], b[1], b[2], b[3], c];
        this.b.oa(d);
        this.a[ma(c)] = d
    };
    k.load = function (b, c) {
        for (var d = Array(c.length), e = 0, f = c.length; e < f; e++) {
            var g = b[e], h = c[e], g = [g[0], g[1], g[2], g[3], h];
            d[e] = g;
            this.a[ma(h)] = g
        }
        this.b.load(d)
    };
    k.remove = function (b) {
        b = ma(b);
        var c = this.a[b];
        zb(this.a, b);
        return null !== this.b.remove(c)
    };
    k.update = function (b, c) {
        var d = ma(c);
        Xd(this.a[d].slice(0, 4), b) || (this.remove(c), this.oa(b, c))
    };
    function wp(b) {
        b = b.b.all();
        return Ua(b, function (b) {
            return b[4]
        })
    }

    function xp(b, c) {
        var d = b.b.search(c);
        return Ua(d, function (b) {
            return b[4]
        })
    }

    k.forEach = function (b, c) {
        return yp(wp(this), b, c)
    };
    function zp(b, c, d, e) {
        return yp(xp(b, c), d, e)
    }

    function yp(b, c, d) {
        for (var e, f = 0, g = b.length; f < g && !(e = c.call(d, b[f])); f++);
        return e
    }

    k.wa = function () {
        return xb(this.a)
    };
    k.clear = function () {
        this.b.clear();
        this.a = {}
    };
    k.R = function () {
        return this.b.data.bbox
    };
    function W(b) {
        b = m(b) ? b : {};
        Eh.call(this, {
            attributions: b.attributions,
            logo: b.logo,
            projection: void 0,
            state: "ready",
            wrapX: m(b.wrapX) ? b.wrapX : !0
        });
        this.T = ca;
        m(b.loader) ? this.T = b.loader : m(b.url) && (this.T = sp(b.url, b.format));
        this.xa = m(b.strategy) ? b.strategy : tp;
        var c = m(b.useSpatialIndex) ? b.useSpatialIndex : !0;
        this.b = c ? new vp : null;
        this.Z = new vp;
        this.f = {};
        this.i = {};
        this.l = {};
        this.v = {};
        this.c = null;
        var d, e;
        b.features instanceof rg ? (d = b.features, e = d.b) : ga(b.features) && (e = b.features);
        c || m(d) || (d = new rg(e));
        m(e) &&
        Ap(this, e);
        m(d) && Bp(this, d)
    }

    w(W, Eh);
    k = W.prototype;
    k.pd = function (b) {
        var c = ma(b).toString();
        if (Cp(this, c, b)) {
            Dp(this, c, b);
            var d = b.Y();
            null != d ? (c = d.R(), null === this.b || this.b.oa(c, b)) : this.f[c] = b;
            C(this, new Ep("addfeature", b))
        }
        this.s()
    };
    function Dp(b, c, d) {
        b.v[c] = [x(d, "change", b.mg, !1, b), x(d, "propertychange", b.mg, !1, b)]
    }

    function Cp(b, c, d) {
        var e = !0, f = d.ha;
        m(f) ? f.toString() in b.i ? e = !1 : b.i[f.toString()] = d : b.l[c] = d;
        return e
    }

    k.xc = function (b) {
        Ap(this, b);
        this.s()
    };
    function Ap(b, c) {
        var d, e, f, g, h = [], l = [], n = [];
        e = 0;
        for (f = c.length; e < f; e++)g = c[e], d = ma(g).toString(), Cp(b, d, g) && l.push(g);
        e = 0;
        for (f = l.length; e < f; e++) {
            g = l[e];
            d = ma(g).toString();
            Dp(b, d, g);
            var p = g.Y();
            null != p ? (d = p.R(), h.push(d), n.push(g)) : b.f[d] = g
        }
        null === b.b || b.b.load(h, n);
        e = 0;
        for (f = l.length; e < f; e++)C(b, new Ep("addfeature", l[e]))
    }

    function Bp(b, c) {
        var d = !1;
        x(b, "addfeature", function (b) {
            d || (d = !0, c.push(b.feature), d = !1)
        });
        x(b, "removefeature", function (b) {
            d || (d = !0, c.remove(b.feature), d = !1)
        });
        x(c, "add", function (b) {
            d || (b = b.element, d = !0, this.pd(b), d = !1)
        }, !1, b);
        x(c, "remove", function (b) {
            d || (b = b.element, d = !0, this.Jc(b), d = !1)
        }, !1, b);
        b.c = c
    }

    k.clear = function (b) {
        if (b) {
            for (var c in this.v)Sa(this.v[c], Xc);
            null === this.c && (this.v = {}, this.i = {}, this.l = {})
        } else b = this.qh, null !== this.b && (this.b.forEach(b, this), pb(this.f, b, this));
        null === this.c || this.c.clear();
        null === this.b || this.b.clear();
        this.Z.clear();
        this.f = {};
        C(this, new Ep("clear"));
        this.s()
    };
    k.Xf = function (b, c) {
        if (null !== this.b)return this.b.forEach(b, c);
        if (null !== this.c)return this.c.forEach(b, c)
    };
    function Fp(b, c, d) {
        b.fd([c[0], c[1], c[0], c[1]], function (b) {
            if (b.Y().Ne(c))return d.call(void 0, b)
        })
    }

    k.fd = function (b, c, d) {
        if (null !== this.b)return zp(this.b, b, c, d);
        if (null !== this.c)return this.c.forEach(c, d)
    };
    k.Hb = function (b, c, d, e) {
        return this.fd(b, d, e)
    };
    k.Se = function (b, c, d) {
        return this.fd(b, function (e) {
            if (e.Y().sa(b) && (e = c.call(d, e)))return e
        })
    };
    k.We = function () {
        return this.c
    };
    k.Ic = function () {
        var b;
        null !== this.c ? b = this.c.b : null !== this.b && (b = wp(this.b), xb(this.f) || cb(b, sb(this.f)));
        return b
    };
    k.Ve = function (b) {
        var c = [];
        Fp(this, b, function (b) {
            c.push(b)
        });
        return c
    };
    k.Xe = function (b) {
        return xp(this.b, b)
    };
    k.Zf = function (b) {
        var c = b[0], d = b[1], e = null, f = [NaN, NaN], g = Infinity, h = [-Infinity, -Infinity, Infinity, Infinity];
        zp(this.b, h, function (b) {
            var n = b.Y(), p = g;
            g = n.Ya(c, d, f, g);
            g < p && (e = b, b = Math.sqrt(g), h[0] = c - b, h[1] = d - b, h[2] = c + b, h[3] = d + b)
        });
        return e
    };
    k.R = function () {
        return this.b.R()
    };
    k.Ue = function (b) {
        b = this.i[b.toString()];
        return m(b) ? b : null
    };
    k.mg = function (b) {
        b = b.target;
        var c = ma(b).toString(), d = b.Y();
        null != d ? (d = d.R(), c in this.f ? (delete this.f[c], null === this.b || this.b.oa(d, b)) : null === this.b || this.b.update(d, b)) : c in this.f || (null === this.b || this.b.remove(b), this.f[c] = b);
        d = b.ha;
        m(d) ? (d = d.toString(), c in this.l ? (delete this.l[c], this.i[d] = b) : this.i[d] !== b && (Gp(this, b), this.i[d] = b)) : c in this.l || (Gp(this, b), this.l[c] = b);
        this.s();
        C(this, new Ep("changefeature", b))
    };
    k.wa = function () {
        return this.b.wa() && xb(this.f)
    };
    k.fc = function (b, c, d) {
        var e = this.Z;
        b = this.xa(b, c);
        var f, g;
        f = 0;
        for (g = b.length; f < g; ++f) {
            var h = b[f];
            zp(e, h, function (b) {
                return Ud(b.extent, h)
            }) || (this.T.call(this, h, c, d), e.oa(h, {extent: h.slice()}))
        }
    };
    k.Jc = function (b) {
        var c = ma(b).toString();
        c in this.f ? delete this.f[c] : null === this.b || this.b.remove(b);
        this.qh(b);
        this.s()
    };
    k.qh = function (b) {
        var c = ma(b).toString();
        Sa(this.v[c], Xc);
        delete this.v[c];
        var d = b.ha;
        m(d) ? delete this.i[d.toString()] : delete this.l[c];
        C(this, new Ep("removefeature", b))
    };
    function Gp(b, c) {
        for (var d in b.i)if (b.i[d] === c) {
            delete b.i[d];
            break
        }
    }

    function Ep(b, c) {
        sc.call(this, b);
        this.feature = c
    }

    w(Ep, sc);
    function Hp(b) {
        this.b = b.source;
        this.fa = Ad();
        this.c = Wi();
        this.f = [0, 0];
        this.u = null;
        zn.call(this, {
            attributions: b.attributions,
            canvasFunction: ra(this.Fi, this),
            logo: b.logo,
            projection: b.projection,
            ratio: b.ratio,
            resolutions: b.resolutions,
            state: this.b.A
        });
        this.C = null;
        this.i = void 0;
        this.Pg(b.style);
        x(this.b, "change", this.Yl, void 0, this)
    }

    w(Hp, zn);
    k = Hp.prototype;
    k.Fi = function (b, c, d, e, f) {
        var g = new Sm(.5 * c / d, b, c);
        this.b.fc(b, c, f);
        var h = !1;
        this.b.Hb(b, c, function (b) {
            var e;
            if (!(e = h)) {
                var f;
                m(b.c) ? f = b.c.call(b, c) : m(this.i) && (f = this.i(b, c));
                if (null != f) {
                    var q, r = !1;
                    e = 0;
                    for (q = f.length; e < q; ++e)r = pn(g, b, f[e], on(c, d), this.Xl, this) || r;
                    e = r
                } else e = !1
            }
            h = e
        }, this);
        Tm(g);
        if (h)return null;
        this.f[0] != e[0] || this.f[1] != e[1] ? (this.c.canvas.width = e[0], this.c.canvas.height = e[1], this.f[0] = e[0], this.f[1] = e[1]) : this.c.clearRect(0, 0, e[0], e[1]);
        b = Ip(this, ee(b), c, d, e);
        Xm(g, this.c, d, b, 0,
            {});
        this.u = g;
        return this.c.canvas
    };
    k.ke = function (b, c, d, e, f) {
        if (null !== this.u) {
            var g = {};
            return Um(this.u, b, c, 0, e, function (b) {
                var c = ma(b).toString();
                if (!(c in g))return g[c] = !0, f(b)
            })
        }
    };
    k.Ul = function () {
        return this.b
    };
    k.Vl = function () {
        return this.C
    };
    k.Wl = function () {
        return this.i
    };
    function Ip(b, c, d, e, f) {
        return ok(b.fa, f[0] / 2, f[1] / 2, e / d, -e / d, 0, -c[0], -c[1])
    }

    k.Xl = function () {
        this.s()
    };
    k.Yl = function () {
        Gh(this, this.b.A)
    };
    k.Pg = function (b) {
        this.C = m(b) ? b : Ll;
        this.i = null === b ? void 0 : Kl(this.C);
        this.s()
    };
    function Jp(b) {
        ym.call(this, b);
        this.g = null;
        this.i = Ad();
        this.c = this.f = null
    }

    w(Jp, ym);
    k = Jp.prototype;
    k.Va = function (b, c, d, e) {
        var f = this.b;
        return f.da().ke(b, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function (b) {
            return d.call(e, b, f)
        })
    };
    k.jc = function (b, c, d, e) {
        if (!fa(this.je()))if (this.b.da() instanceof Hp) {
            if (b = b.slice(), qk(c.pixelToCoordinateMatrix, b, b), this.Va(b, c, pe, this))return d.call(e, this.b)
        } else if (null === this.f && (this.f = Ad(), Gd(this.i, this.f)), c = Bm(b, this.f), null === this.c && (this.c = Wi(1, 1)), this.c.clearRect(0, 0, 1, 1), this.c.drawImage(this.je(), c[0], c[1], 1, 1, 0, 0, 1, 1), 0 < this.c.getImageData(0, 0, 1, 1).data[3])return d.call(e, this.b)
    };
    k.je = function () {
        return null === this.g ? null : this.g.a()
    };
    k.cg = function () {
        return this.i
    };
    k.nf = function (b, c) {
        var d = b.pixelRatio, e = b.viewState, f = e.center, g = e.resolution, h = e.rotation, l, n = this.b.da(), p = b.viewHints;
        l = b.extent;
        m(c.extent) && (l = he(l, c.extent));
        p[0] || p[1] || ke(l) || (e = e.projection, p = n.j, null === p || (e = p), l = n.Hc(l, g, d, e), null !== l && tk(this, l) && (this.g = l));
        if (null !== this.g) {
            l = this.g;
            var e = l.R(), p = l.resolution, q = l.g, g = d * p / (g * q);
            ok(this.i, d * b.size[0] / 2, d * b.size[1] / 2, g, g, h, q * (e[0] - f[0]) / p, q * (f[1] - e[3]) / p);
            this.f = null;
            vk(b.attributions, l.i);
            wk(b, n)
        }
        return !0
    };
    function Kp(b) {
        ym.call(this, b);
        this.c = this.i = null;
        this.B = !1;
        this.j = null;
        this.v = Ad();
        this.g = null;
        this.D = this.C = this.A = NaN;
        this.l = this.f = null;
        this.T = [0, 0]
    }

    w(Kp, ym);
    Kp.prototype.je = function () {
        return this.i
    };
    Kp.prototype.cg = function () {
        return this.v
    };
    Kp.prototype.nf = function (b, c) {
        var d = b.pixelRatio, e = b.viewState, f = e.projection, g = this.b, h = g.da(), l = Uh(h, f), n = h.Kd(), p = Ph(l, e.resolution), q = h.cc(p, b.pixelRatio, f), r = q[0] / md(l.Ja(p), this.T)[0], t = l.ua(p), r = t / r, v = e.center, A;
        t == e.resolution ? (v = yk(v, t, b.size), A = fe(v, t, e.rotation, b.size)) : A = b.extent;
        m(c.extent) && (A = he(A, c.extent));
        if (ke(A))return !1;
        var z = Nh(l, A, t), E = q[0] * ng(z), B = q[1] * (z.c - z.b + 1), y, L;
        null === this.i ? (L = Wi(E, B), this.i = L.canvas, this.c = [E, B], this.j = L, this.B = !Cm(this.c)) : (y = this.i, L = this.j, this.c[0] <
        E || this.c[1] < B || this.C !== q[0] || this.D !== q[1] || this.B && (this.c[0] > E || this.c[1] > B) ? (y.width = E, y.height = B, this.c = [E, B], this.B = !Cm(this.c), this.f = null) : (E = this.c[0], B = this.c[1], (y = p != this.A) || (y = this.f, y = !(y.a <= z.a && z.f <= y.f && y.b <= z.b && z.c <= y.c)), y && (this.f = null)));
        var K, H;
        null === this.f ? (E /= q[0], B /= q[1], K = z.a - Math.floor((E - ng(z)) / 2), H = z.b - Math.floor((B - (z.c - z.b + 1)) / 2), this.A = p, this.C = q[0], this.D = q[1], this.f = new lg(K, K + E - 1, H, H + B - 1), this.l = Array(E * B), B = this.f) : (B = this.f, E = ng(B));
        y = {};
        y[p] = {};
        var S = [], ta =
            this.Gd(h, y), Oa = g.c(), R = Ld(), Aa = new lg(0, 0, 0, 0), db, Ia, Cb;
        for (H = z.a; H <= z.f; ++H)for (Cb = z.b; Cb <= z.c; ++Cb)Ia = h.bc(p, H, Cb, d, f), K = Ia.state, 2 == K || 4 == K || 3 == K && !Oa ? y[p][eg(Ia.a)] = Ia : (db = Kh(l, Ia.a, ta, Aa, R), db || (S.push(Ia), db = Mh(l, Ia.a, Aa, R), null === db || ta(p + 1, db)));
        ta = 0;
        for (db = S.length; ta < db; ++ta)Ia = S[ta], H = q[0] * (Ia.a[1] - B.a), Cb = q[1] * (B.c - Ia.a[2]), L.clearRect(H, Cb, q[0], q[1]);
        S = Ua(tb(y), Number);
        gb(S);
        var $a = h.aa, Ec = de(Lh(l, [p, B.a, B.c], R)), kc, Oe, oj, Wh, Qf, qm, ta = 0;
        for (db = S.length; ta < db; ++ta)if (kc = S[ta], q = h.cc(kc,
                d, f), Wh = y[kc], kc == p)for (oj in Wh)Ia = Wh[oj], Oe = (Ia.a[2] - B.b) * E + (Ia.a[1] - B.a), this.l[Oe] != Ia && (H = q[0] * (Ia.a[1] - B.a), Cb = q[1] * (B.c - Ia.a[2]), K = Ia.state, 4 != K && (3 != K || Oa) && $a || L.clearRect(H, Cb, q[0], q[1]), 2 == K && L.drawImage(Ia.Ta(), n, n, q[0], q[1], H, Cb, q[0], q[1]), this.l[Oe] = Ia); else for (oj in kc = l.ua(kc) / t, Wh)for (Ia = Wh[oj], Oe = Lh(l, Ia.a, R), H = (Oe[0] - Ec[0]) / r, Cb = (Ec[1] - Oe[3]) / r, qm = kc * q[0], Qf = kc * q[1], K = Ia.state, 4 != K && $a || L.clearRect(H, Cb, qm, Qf), 2 == K && L.drawImage(Ia.Ta(), n, n, q[0], q[1], H, Cb, qm, Qf), Ia = jg(l, Oe, p, Aa),
                                                                                                                                                                                                                                                                                                                                                                                                                      K = Math.max(Ia.a, B.a), Cb = Math.min(Ia.f, B.f), H = Math.max(Ia.b, B.b), Ia = Math.min(Ia.c, B.c); K <= Cb; ++K)for (Qf = H; Qf <= Ia; ++Qf)Oe = (Qf - B.b) * E + (K - B.a), this.l[Oe] = void 0;
        xk(b.usedTiles, h, p, z);
        zk(b, h, l, d, f, A, p, g.b());
        uk(b, h);
        wk(b, h);
        ok(this.v, d * b.size[0] / 2, d * b.size[1] / 2, d * r / e.resolution, d * r / e.resolution, e.rotation, (Ec[0] - v[0]) / r, (v[1] - Ec[1]) / r);
        this.g = null;
        return !0
    };
    Kp.prototype.jc = function (b, c, d, e) {
        if (null !== this.j && (null === this.g && (this.g = Ad(), Gd(this.v, this.g)), b = Bm(b, this.g), 0 < this.j.getImageData(b[0], b[1], 1, 1).data[3]))return d.call(e, this.b)
    };
    function Lp(b) {
        ym.call(this, b);
        this.f = !1;
        this.B = -1;
        this.l = NaN;
        this.i = Ld();
        this.c = this.j = null;
        this.g = Wi()
    }

    w(Lp, ym);
    Lp.prototype.u = function (b, c, d) {
        var e = b.extent, f = b.pixelRatio, g = c.Pb ? b.skippedFeatureUids : {}, h = b.viewState, l = h.projection, h = h.rotation, n = l.R(), p = this.b.da(), q = Am(this, b, 0);
        zm(this, "precompose", d, b, q);
        var r = this.c;
        if (null !== r && !r.wa()) {
            var t;
            cd(this.b, "render") ? (this.g.canvas.width = d.canvas.width, this.g.canvas.height = d.canvas.height, t = this.g) : t = d;
            var v = t.globalAlpha;
            t.globalAlpha = c.opacity;
            Xm(r, t, f, q, h, g);
            if (p.D && l.g && !Ud(n, e)) {
                c = e[0];
                l = je(n);
                for (p = 0; c < n[0];)--p, q = l * p, q = Am(this, b, q), Xm(r, t, f, q, h, g),
                    c += l;
                p = 0;
                for (c = e[2]; c > n[2];)++p, q = l * p, q = Am(this, b, q), Xm(r, t, f, q, h, g), c -= l;
                q = Am(this, b, 0)
            }
            t != d && (zm(this, "render", t, b, q), d.drawImage(t.canvas, 0, 0));
            t.globalAlpha = v
        }
        zm(this, "postcompose", d, b, q)
    };
    Lp.prototype.Va = function (b, c, d, e) {
        if (null !== this.c) {
            var f = c.viewState.resolution, g = c.viewState.rotation, h = this.b, l = c.layerStates[ma(h)], n = {};
            return Um(this.c, b, f, g, l.Pb ? c.skippedFeatureUids : {}, function (b) {
                var c = ma(b).toString();
                if (!(c in n))return n[c] = !0, d.call(e, b, h)
            })
        }
    };
    Lp.prototype.v = function () {
        sk(this)
    };
    Lp.prototype.nf = function (b) {
        function c(b) {
            var c;
            m(b.c) ? c = b.c.call(b, p) : m(d.b) && (c = (0, d.b)(b, p));
            if (null != c) {
                if (null != c) {
                    var e, f, g = !1;
                    e = 0;
                    for (f = c.length; e < f; ++e)g = pn(t, b, c[e], on(p, q), this.v, this) || g;
                    b = g
                } else b = !1;
                this.f = this.f || b
            }
        }

        var d = this.b, e = d.da();
        vk(b.attributions, e.g);
        wk(b, e);
        var f = b.viewHints[0], g = b.viewHints[1], h = d.u, l = d.A;
        if (!this.f && !h && f || !l && g)return !0;
        var n = b.extent, l = b.viewState, f = l.projection, p = l.resolution, q = b.pixelRatio, g = d.a, r = d.c, h = d.get("renderOrder");
        m(h) || (h = nn);
        n = Pd(n, r * p);
        r = l.projection.R();
        e.D && l.projection.g && !Ud(r, b.extent) && (b = Math.max(je(n) / 2, je(r)), n[0] = r[0] - b, n[2] = r[2] + b);
        if (!this.f && this.l == p && this.B == g && this.j == h && Ud(this.i, n))return !0;
        rc(this.c);
        this.c = null;
        this.f = !1;
        var t = new Sm(.5 * p / q, n, p, d.c);
        e.fc(n, p, f);
        if (null === h)e.Hb(n, p, c, this); else {
            var v = [];
            e.Hb(n, p, function (b) {
                v.push(b)
            }, this);
            gb(v, h);
            Sa(v, c, this)
        }
        Tm(t);
        this.l = p;
        this.B = g;
        this.j = h;
        this.i = n;
        this.c = t;
        return !0
    };
    function Mp(b, c) {
        Fk.call(this, 0, c);
        this.c = Wi();
        this.a = this.c.canvas;
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.className = "ol-unselectable";
        Sg(b, this.a, 0);
        this.b = !0;
        this.g = Ad()
    }

    w(Mp, Fk);
    Mp.prototype.Oe = function (b) {
        return b instanceof I ? new Jp(b) : b instanceof J ? new Kp(b) : b instanceof M ? new Lp(b) : null
    };
    function Np(b, c, d) {
        var e = b.i, f = b.c;
        if (cd(e, c)) {
            var g = d.extent, h = d.pixelRatio, l = d.viewState.rotation, n = d.pixelRatio, p = d.viewState, q = p.resolution;
            b = ok(b.g, b.a.width / 2, b.a.height / 2, n / q, -n / q, -p.rotation, -p.center[0], -p.center[1]);
            g = new km(f, h, g, b, l);
            C(e, new lk(c, e, g, d, f, null));
            xm(g)
        }
    }

    Mp.prototype.U = function () {
        return "canvas"
    };
    Mp.prototype.xe = function (b) {
        if (null === b)this.b && (oh(this.a, !1), this.b = !1); else {
            var c = this.c, d = b.size[0] * b.pixelRatio, e = b.size[1] * b.pixelRatio;
            this.a.width != d || this.a.height != e ? (this.a.width = d, this.a.height = e) : c.clearRect(0, 0, this.a.width, this.a.height);
            Gk(b);
            Np(this, "precompose", b);
            var d = b.layerStatesArray, e = b.viewState.resolution, f, g, h, l;
            f = 0;
            for (g = d.length; f < g; ++f)l = d[f], h = l.layer, h = Ik(this, h), mk(l, e) && "ready" == l.l && h.nf(b, l) && h.u(b, l, c);
            Np(this, "postcompose", b);
            this.b || (oh(this.a, !0), this.b = !0);
            Jk(this, b);
            b.postRenderFunctions.push(Hk)
        }
    };
    function Op(b, c) {
        rk.call(this, b);
        this.target = c
    }

    w(Op, rk);
    Op.prototype.g = ca;
    Op.prototype.l = ca;
    function Pp(b) {
        var c = Pg("DIV");
        c.style.position = "absolute";
        Op.call(this, b, c);
        this.c = null;
        this.f = Cd()
    }

    w(Pp, Op);
    Pp.prototype.Va = function (b, c, d, e) {
        var f = this.b;
        return f.da().ke(b, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function (b) {
            return d.call(e, b, f)
        })
    };
    Pp.prototype.g = function () {
        Rg(this.target);
        this.c = null
    };
    Pp.prototype.i = function (b, c) {
        var d = b.viewState, e = d.center, f = d.resolution, g = d.rotation, h = this.c, l = this.b.da(), n = b.viewHints, p = b.extent;
        m(c.extent) && (p = he(p, c.extent));
        n[0] || n[1] || ke(p) || (d = d.projection, n = l.j, null === n || (d = n), p = l.Hc(p, f, b.pixelRatio, d), null === p || tk(this, p) && (h = p));
        null !== h && (d = h.R(), n = h.resolution, p = Ad(), ok(p, b.size[0] / 2, b.size[1] / 2, n / f, n / f, g, (d[0] - e[0]) / n, (e[1] - d[3]) / n), h != this.c && (e = h.a(this), e.style.maxWidth = "none", e.style.position = "absolute", Rg(this.target), this.target.appendChild(e),
            this.c = h), pk(p, this.f) || ($i(this.target, p), Dd(this.f, p)), vk(b.attributions, h.i), wk(b, l));
        return !0
    };
    function Qp(b) {
        var c = Pg("DIV");
        c.style.position = "absolute";
        Op.call(this, b, c);
        this.f = !0;
        this.B = 1;
        this.j = 0;
        this.c = {}
    }

    w(Qp, Op);
    Qp.prototype.g = function () {
        Rg(this.target);
        this.j = 0
    };
    Qp.prototype.i = function (b, c) {
        if (!c.visible)return this.f && (oh(this.target, !1), this.f = !1), !0;
        var d = b.pixelRatio, e = b.viewState, f = e.projection, g = this.b, h = g.da(), l = Uh(h, f), n = h.Kd(), p = Ph(l, e.resolution), q = l.ua(p), r = e.center, t;
        q == e.resolution ? (r = yk(r, q, b.size), t = fe(r, q, e.rotation, b.size)) : t = b.extent;
        m(c.extent) && (t = he(t, c.extent));
        var q = Nh(l, t, q), v = {};
        v[p] = {};
        var A = this.Gd(h, v), z = g.c(), E = Ld(), B = new lg(0, 0, 0, 0), y, L, K, H;
        for (K = q.a; K <= q.f; ++K)for (H = q.b; H <= q.c; ++H)y = h.bc(p, K, H, d, f), L = y.state, 2 == L ? v[p][eg(y.a)] =
            y : 4 == L || 3 == L && !z || (L = Kh(l, y.a, A, B, E), L || (y = Mh(l, y.a, B, E), null === y || A(p + 1, y)));
        var S;
        if (this.j != h.a) {
            for (S in this.c)z = this.c[+S], Tg(z.target);
            this.c = {};
            this.j = h.a
        }
        E = Ua(tb(v), Number);
        gb(E);
        var A = {}, ta;
        K = 0;
        for (H = E.length; K < H; ++K) {
            S = E[K];
            S in this.c ? z = this.c[S] : (z = l.Rd(r, S), z = new Rp(l, z), A[S] = !0, this.c[S] = z);
            S = v[S];
            for (ta in S) {
                y = z;
                L = S[ta];
                var Oa = n, R = L.a, Aa = R[0], db = R[1], Ia = R[2], R = eg(R);
                if (!(R in y.b)) {
                    var Aa = md(y.f.Ja(Aa), y.l), Cb = L.Ta(y), $a = Cb.style;
                    $a.maxWidth = "none";
                    var Ec = void 0, kc = void 0;
                    0 < Oa ? (Ec =
                        Pg("DIV"), kc = Ec.style, kc.overflow = "hidden", kc.width = Aa[0] + "px", kc.height = Aa[1] + "px", $a.position = "absolute", $a.left = -Oa + "px", $a.top = -Oa + "px", $a.width = Aa[0] + 2 * Oa + "px", $a.height = Aa[1] + 2 * Oa + "px", Ec.appendChild(Cb)) : ($a.width = Aa[0] + "px", $a.height = Aa[1] + "px", Ec = Cb, kc = $a);
                    kc.position = "absolute";
                    kc.left = (db - y.c[1]) * Aa[0] + "px";
                    kc.top = (y.c[2] - Ia) * Aa[1] + "px";
                    null === y.a && (y.a = document.createDocumentFragment());
                    y.a.appendChild(Ec);
                    y.b[R] = L
                }
            }
            null !== z.a && (z.target.appendChild(z.a), z.a = null)
        }
        n = Ua(tb(this.c), Number);
        gb(n);
        K = Ad();
        ta = 0;
        for (E = n.length; ta < E; ++ta)if (S = n[ta], z = this.c[S], S in v)if (y = z.j, H = z.i, ok(K, b.size[0] / 2, b.size[1] / 2, y / e.resolution, y / e.resolution, e.rotation, (H[0] - r[0]) / y, (r[1] - H[1]) / y), H = z, y = K, pk(y, H.g) || ($i(H.target, y), Dd(H.g, y)), S in A) {
            for (--S; 0 <= S; --S)if (S in this.c) {
                H = this.c[S].target;
                H.parentNode && H.parentNode.insertBefore(z.target, H.nextSibling);
                break
            }
            0 > S && Sg(this.target, z.target, 0)
        } else {
            if (!b.viewHints[0] && !b.viewHints[1]) {
                L = jg(z.f, t, z.c[0], B);
                S = [];
                y = H = void 0;
                for (y in z.b)H = z.b[y], L.contains(H.a) ||
                S.push(H);
                Oa = L = void 0;
                L = 0;
                for (Oa = S.length; L < Oa; ++L)H = S[L], y = eg(H.a), Tg(H.Ta(z)), delete z.b[y]
            }
        } else Tg(z.target), delete this.c[S];
        c.opacity != this.B && (this.B = this.target.style.opacity = c.opacity);
        c.visible && !this.f && (oh(this.target, !0), this.f = !0);
        xk(b.usedTiles, h, p, q);
        zk(b, h, l, d, f, t, p, g.b());
        uk(b, h);
        wk(b, h);
        return !0
    };
    function Rp(b, c) {
        this.target = Pg("DIV");
        this.target.style.position = "absolute";
        this.target.style.width = "100%";
        this.target.style.height = "100%";
        this.f = b;
        this.c = c;
        this.i = de(Lh(b, c));
        this.j = b.ua(c[0]);
        this.b = {};
        this.a = null;
        this.g = Cd();
        this.l = [0, 0]
    };
    function Sp(b) {
        this.j = Wi();
        var c = this.j.canvas;
        c.style.maxWidth = "none";
        c.style.position = "absolute";
        Op.call(this, b, c);
        this.f = !1;
        this.A = -1;
        this.u = NaN;
        this.B = Ld();
        this.c = this.v = null;
        this.C = Ad();
        this.D = Ad()
    }

    w(Sp, Op);
    Sp.prototype.l = function (b, c) {
        var d = b.viewState, e = d.center, f = d.rotation, g = d.resolution, d = b.pixelRatio, h = b.size[0], l = b.size[1], n = h * d, p = l * d, e = ok(this.C, d * h / 2, d * l / 2, d / g, -d / g, -f, -e[0], -e[1]), g = this.j;
        g.canvas.width = n;
        g.canvas.height = p;
        h = ok(this.D, 0, 0, 1 / d, 1 / d, 0, -(n - h) / 2 * d, -(p - l) / 2 * d);
        $i(g.canvas, h);
        Tp(this, "precompose", b, e);
        h = this.c;
        null === h || h.wa() || (g.globalAlpha = c.opacity, Xm(h, g, d, e, f, c.Pb ? b.skippedFeatureUids : {}), Tp(this, "render", b, e));
        Tp(this, "postcompose", b, e)
    };
    function Tp(b, c, d, e) {
        var f = b.j;
        b = b.b;
        cd(b, c) && (e = new km(f, d.pixelRatio, d.extent, e, d.viewState.rotation), C(b, new lk(c, b, e, d, f, null)), xm(e))
    }

    Sp.prototype.Va = function (b, c, d, e) {
        if (null !== this.c) {
            var f = c.viewState.resolution, g = c.viewState.rotation, h = this.b, l = c.layerStates[ma(h)], n = {};
            return Um(this.c, b, f, g, l.Pb ? c.skippedFeatureUids : {}, function (b) {
                var c = ma(b).toString();
                if (!(c in n))return n[c] = !0, d.call(e, b, h)
            })
        }
    };
    Sp.prototype.N = function () {
        sk(this)
    };
    Sp.prototype.i = function (b) {
        function c(b) {
            var c;
            m(b.c) ? c = b.c.call(b, n) : m(d.b) && (c = (0, d.b)(b, n));
            if (null != c) {
                if (null != c) {
                    var e, f, g = !1;
                    e = 0;
                    for (f = c.length; e < f; ++e)g = pn(q, b, c[e], on(n, p), this.N, this) || g;
                    b = g
                } else b = !1;
                this.f = this.f || b
            }
        }

        var d = this.b, e = d.da();
        vk(b.attributions, e.g);
        wk(b, e);
        var f = b.viewHints[0], g = b.viewHints[1], h = d.u, l = d.A;
        if (!this.f && !h && f || !l && g)return !0;
        var g = b.extent, h = b.viewState, f = h.projection, n = h.resolution, p = b.pixelRatio;
        b = d.a;
        l = d.c;
        h = d.get("renderOrder");
        m(h) || (h = nn);
        g = Pd(g, l * n);
        if (!this.f &&
            this.u == n && this.A == b && this.v == h && Ud(this.B, g))return !0;
        rc(this.c);
        this.c = null;
        this.f = !1;
        var q = new Sm(.5 * n / p, g, n, d.c);
        e.fc(g, n, f);
        if (null === h)e.Hb(g, n, c, this); else {
            var r = [];
            e.Hb(g, n, function (b) {
                r.push(b)
            }, this);
            gb(r, h);
            Sa(r, c, this)
        }
        Tm(q);
        this.u = n;
        this.A = b;
        this.v = h;
        this.B = g;
        this.c = q;
        return !0
    };
    function Up(b, c) {
        Fk.call(this, 0, c);
        this.b = null;
        this.b = Wi();
        var d = this.b.canvas;
        d.style.position = "absolute";
        d.style.width = "100%";
        d.style.height = "100%";
        d.className = "ol-unselectable";
        Sg(b, d, 0);
        this.g = Ad();
        this.a = Pg("DIV");
        this.a.className = "ol-unselectable";
        d = this.a.style;
        d.position = "absolute";
        d.width = "100%";
        d.height = "100%";
        x(this.a, "touchstart", uc);
        Sg(b, this.a, 0);
        this.c = !0
    }

    w(Up, Fk);
    Up.prototype.W = function () {
        Tg(this.a);
        Up.$.W.call(this)
    };
    Up.prototype.Oe = function (b) {
        if (b instanceof I)b = new Pp(b); else if (b instanceof J)b = new Qp(b); else if (b instanceof M)b = new Sp(b); else return null;
        return b
    };
    function Vp(b, c, d) {
        var e = b.i;
        if (cd(e, c)) {
            var f = d.extent, g = d.pixelRatio, h = d.viewState, l = h.rotation, n = b.b, p = n.canvas;
            ok(b.g, p.width / 2, p.height / 2, g / h.resolution, -g / h.resolution, -h.rotation, -h.center[0], -h.center[1]);
            b = new km(n, g, f, b.g, l);
            C(e, new lk(c, e, b, d, n, null));
            xm(b)
        }
    }

    Up.prototype.U = function () {
        return "dom"
    };
    Up.prototype.xe = function (b) {
        if (null === b)this.c && (oh(this.a, !1), this.c = !1); else {
            var c;
            c = function (b, c) {
                Sg(this.a, b, c)
            };
            var d = this.i;
            if (cd(d, "precompose") || cd(d, "postcompose")) {
                var d = this.b.canvas, e = b.pixelRatio;
                d.width = b.size[0] * e;
                d.height = b.size[1] * e
            }
            Vp(this, "precompose", b);
            var d = b.layerStatesArray, e = b.viewState.resolution, f, g, h, l;
            f = 0;
            for (g = d.length; f < g; ++f)l = d[f], h = l.layer, h = Ik(this, h), c.call(this, h.target, f), mk(l, e) && "ready" == l.l ? h.i(b, l) && h.l(b, l) : h.g();
            c = b.layerStates;
            for (var n in this.f)n in c ||
            (h = this.f[n], Tg(h.target));
            this.c || (oh(this.a, !0), this.c = !0);
            Gk(b);
            Jk(this, b);
            b.postRenderFunctions.push(Hk);
            Vp(this, "postcompose", b)
        }
    };
    function Wp(b) {
        this.a = b
    }

    function Xp(b) {
        this.a = b
    }

    w(Xp, Wp);
    Xp.prototype.U = function () {
        return 35632
    };
    function Yp(b) {
        this.a = b
    }

    w(Yp, Wp);
    Yp.prototype.U = function () {
        return 35633
    };
    function Zp() {
        this.a = "precision mediump float;varying vec2 a;varying float b;uniform mat4 k;uniform float l;uniform sampler2D m;void main(void){vec4 texColor=texture2D(m,a);float alpha=texColor.a*b*l;if(alpha==0.0){discard;}gl_FragColor.a=alpha;gl_FragColor.rgb=(k*vec4(texColor.rgb,1.)).rgb;}"
    }

    w(Zp, Xp);
    da(Zp);
    function $p() {
        this.a = "varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}"
    }

    w($p, Yp);
    da($p);
    function aq(b, c) {
        this.v = b.getUniformLocation(c, "k");
        this.l = b.getUniformLocation(c, "j");
        this.B = b.getUniformLocation(c, "i");
        this.i = b.getUniformLocation(c, "l");
        this.j = b.getUniformLocation(c, "h");
        this.a = b.getAttribLocation(c, "e");
        this.b = b.getAttribLocation(c, "f");
        this.f = b.getAttribLocation(c, "c");
        this.c = b.getAttribLocation(c, "g");
        this.g = b.getAttribLocation(c, "d")
    };
    function bq() {
        this.a = "precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"
    }

    w(bq, Xp);
    da(bq);
    function cq() {
        this.a = "varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}"
    }

    w(cq, Yp);
    da(cq);
    function dq(b, c) {
        this.l = b.getUniformLocation(c, "j");
        this.B = b.getUniformLocation(c, "i");
        this.i = b.getUniformLocation(c, "k");
        this.j = b.getUniformLocation(c, "h");
        this.a = b.getAttribLocation(c, "e");
        this.b = b.getAttribLocation(c, "f");
        this.f = b.getAttribLocation(c, "c");
        this.c = b.getAttribLocation(c, "g");
        this.g = b.getAttribLocation(c, "d")
    };
    function eq(b) {
        this.a = m(b) ? b : [];
        this.b = m(void 0) ? void 0 : 35044
    };
    function fq(b, c) {
        this.v = b;
        this.a = c;
        this.b = {};
        this.i = {};
        this.g = {};
        this.l = this.B = this.f = this.j = null;
        (this.c = Ya(wa, "OES_element_index_uint")) && c.getExtension("OES_element_index_uint");
        x(this.v, "webglcontextlost", this.Vm, !1, this);
        x(this.v, "webglcontextrestored", this.Wm, !1, this)
    }

    function gq(b, c, d) {
        var e = b.a, f = d.a, g = ma(d);
        if (g in b.b)e.bindBuffer(c, b.b[g].buffer); else {
            var h = e.createBuffer();
            e.bindBuffer(c, h);
            var l;
            34962 == c ? l = new Float32Array(f) : 34963 == c && (l = b.c ? new Uint32Array(f) : new Uint16Array(f));
            e.bufferData(c, l, d.b);
            b.b[g] = {c: d, buffer: h}
        }
    }

    function hq(b, c) {
        var d = b.a, e = ma(c), f = b.b[e];
        d.isContextLost() || d.deleteBuffer(f.buffer);
        delete b.b[e]
    }

    k = fq.prototype;
    k.W = function () {
        var b = this.a;
        b.isContextLost() || (pb(this.b, function (c) {
            b.deleteBuffer(c.buffer)
        }), pb(this.g, function (c) {
            b.deleteProgram(c)
        }), pb(this.i, function (c) {
            b.deleteShader(c)
        }), b.deleteFramebuffer(this.f), b.deleteRenderbuffer(this.l), b.deleteTexture(this.B))
    };
    k.Um = function () {
        return this.a
    };
    k.Ye = function () {
        if (null === this.f) {
            var b = this.a, c = b.createFramebuffer();
            b.bindFramebuffer(b.FRAMEBUFFER, c);
            var d = iq(b, 1, 1), e = b.createRenderbuffer();
            b.bindRenderbuffer(b.RENDERBUFFER, e);
            b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, 1, 1);
            b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, d, 0);
            b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, e);
            b.bindTexture(b.TEXTURE_2D, null);
            b.bindRenderbuffer(b.RENDERBUFFER, null);
            b.bindFramebuffer(b.FRAMEBUFFER,
                null);
            this.f = c;
            this.B = d;
            this.l = e
        }
        return this.f
    };
    function jq(b, c) {
        var d = ma(c);
        if (d in b.i)return b.i[d];
        var e = b.a, f = e.createShader(c.U());
        e.shaderSource(f, c.a);
        e.compileShader(f);
        return b.i[d] = f
    }

    function kq(b, c, d) {
        var e = ma(c) + "/" + ma(d);
        if (e in b.g)return b.g[e];
        var f = b.a, g = f.createProgram();
        f.attachShader(g, jq(b, c));
        f.attachShader(g, jq(b, d));
        f.linkProgram(g);
        return b.g[e] = g
    }

    k.Vm = function () {
        yb(this.b);
        yb(this.i);
        yb(this.g);
        this.l = this.B = this.f = this.j = null
    };
    k.Wm = function () {
    };
    k.re = function (b) {
        if (b == this.j)return !1;
        this.a.useProgram(b);
        this.j = b;
        return !0
    };
    function lq(b, c, d) {
        var e = b.createTexture();
        b.bindTexture(b.TEXTURE_2D, e);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
        m(c) && b.texParameteri(3553, 10242, c);
        m(d) && b.texParameteri(3553, 10243, d);
        return e
    }

    function iq(b, c, d) {
        var e = lq(b, void 0, void 0);
        b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, c, d, 0, b.RGBA, b.UNSIGNED_BYTE, null);
        return e
    }

    function mq(b, c) {
        var d = lq(b, 33071, 33071);
        b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, c);
        return d
    };
    function nq(b, c) {
        this.ea = this.D = void 0;
        this.sb = new Ag;
        this.B = ee(c);
        this.A = [];
        this.i = [];
        this.N = void 0;
        this.g = [];
        this.f = [];
        this.ba = this.T = void 0;
        this.b = [];
        this.C = this.ca = this.l = null;
        this.Z = void 0;
        this.qb = Cd();
        this.rb = Cd();
        this.fa = this.aa = void 0;
        this.tb = Cd();
        this.xa = this.Ma = this.ra = void 0;
        this.Xa = [];
        this.j = [];
        this.a = [];
        this.u = null;
        this.c = [];
        this.v = [];
        this.Na = void 0
    }

    w(nq, kk);
    function oq(b, c) {
        var d = b.u, e = b.l, f = b.Xa, g = b.j, h = c.a;
        return function () {
            if (!h.isContextLost()) {
                var b, n;
                b = 0;
                for (n = f.length; b < n; ++b)h.deleteTexture(f[b]);
                b = 0;
                for (n = g.length; b < n; ++b)h.deleteTexture(g[b])
            }
            hq(c, d);
            hq(c, e)
        }
    }

    function pq(b, c, d, e) {
        var f = b.D, g = b.ea, h = b.N, l = b.T, n = b.ba, p = b.Z, q = b.aa, r = b.fa, t = b.ra ? 1 : 0, v = b.Ma, A = b.xa, z = b.Na, E = Math.cos(v), v = Math.sin(v), B = b.b.length, y = b.a.length, L, K, H, S, ta, Oa;
        for (L = 0; L < d; L += e)ta = c[L] - b.B[0], Oa = c[L + 1] - b.B[1], K = y / 8, H = -A * f, S = -A * (h - g), b.a[y++] = ta, b.a[y++] = Oa, b.a[y++] = H * E - S * v, b.a[y++] = H * v + S * E, b.a[y++] = q / n, b.a[y++] = (r + h) / l, b.a[y++] = p, b.a[y++] = t, H = A * (z - f), S = -A * (h - g), b.a[y++] = ta, b.a[y++] = Oa, b.a[y++] = H * E - S * v, b.a[y++] = H * v + S * E, b.a[y++] = (q + z) / n, b.a[y++] = (r + h) / l, b.a[y++] = p, b.a[y++] = t, H = A * (z -
            f), S = A * g, b.a[y++] = ta, b.a[y++] = Oa, b.a[y++] = H * E - S * v, b.a[y++] = H * v + S * E, b.a[y++] = (q + z) / n, b.a[y++] = r / l, b.a[y++] = p, b.a[y++] = t, H = -A * f, S = A * g, b.a[y++] = ta, b.a[y++] = Oa, b.a[y++] = H * E - S * v, b.a[y++] = H * v + S * E, b.a[y++] = q / n, b.a[y++] = r / l, b.a[y++] = p, b.a[y++] = t, b.b[B++] = K, b.b[B++] = K + 1, b.b[B++] = K + 2, b.b[B++] = K, b.b[B++] = K + 2, b.b[B++] = K + 3
    }

    nq.prototype.vb = function (b, c) {
        this.c.push(this.b.length);
        this.v.push(c);
        var d = b.o;
        pq(this, d, d.length, b.H)
    };
    nq.prototype.wb = function (b, c) {
        this.c.push(this.b.length);
        this.v.push(c);
        var d = b.o;
        pq(this, d, d.length, b.H)
    };
    function qq(b, c) {
        var d = c.a;
        b.A.push(b.b.length);
        b.i.push(b.b.length);
        b.u = new eq(b.a);
        gq(c, 34962, b.u);
        b.l = new eq(b.b);
        gq(c, 34963, b.l);
        var e = {};
        rq(b.Xa, b.g, e, d);
        rq(b.j, b.f, e, d);
        b.D = void 0;
        b.ea = void 0;
        b.N = void 0;
        b.g = null;
        b.f = null;
        b.T = void 0;
        b.ba = void 0;
        b.b = null;
        b.Z = void 0;
        b.aa = void 0;
        b.fa = void 0;
        b.ra = void 0;
        b.Ma = void 0;
        b.xa = void 0;
        b.a = null;
        b.Na = void 0
    }

    function rq(b, c, d, e) {
        var f, g, h, l = c.length;
        for (h = 0; h < l; ++h)f = c[h], g = ma(f).toString(), g in d ? f = d[g] : (f = mq(e, f), d[g] = f), b[h] = f
    }

    function sq(b, c, d, e, f, g, h, l, n, p, q, r, t, v, A) {
        var z = c.a;
        gq(c, 34962, b.u);
        gq(c, 34963, b.l);
        var E = l || 1 != n || p || 1 != q, B, y;
        E ? (B = Zp.Pa(), y = $p.Pa()) : (B = bq.Pa(), y = cq.Pa());
        y = kq(c, B, y);
        E ? null === b.ca ? (B = new aq(z, y), b.ca = B) : B = b.ca : null === b.C ? (B = new dq(z, y), b.C = B) : B = b.C;
        c.re(y);
        z.enableVertexAttribArray(B.f);
        z.vertexAttribPointer(B.f, 2, 5126, !1, 32, 0);
        z.enableVertexAttribArray(B.a);
        z.vertexAttribPointer(B.a, 2, 5126, !1, 32, 8);
        z.enableVertexAttribArray(B.g);
        z.vertexAttribPointer(B.g, 2, 5126, !1, 32, 16);
        z.enableVertexAttribArray(B.b);
        z.vertexAttribPointer(B.b, 1, 5126, !1, 32, 24);
        z.enableVertexAttribArray(B.c);
        z.vertexAttribPointer(B.c, 1, 5126, !1, 32, 28);
        y = b.tb;
        ok(y, 0, 0, 2 / (e * g[0]), 2 / (e * g[1]), -f, -(d[0] - b.B[0]), -(d[1] - b.B[1]));
        d = b.rb;
        e = 2 / g[0];
        g = 2 / g[1];
        Ed(d);
        d[0] = e;
        d[5] = g;
        d[10] = 1;
        d[15] = 1;
        g = b.qb;
        Ed(g);
        0 !== f && Jd(g, -f);
        z.uniformMatrix4fv(B.j, !1, y);
        z.uniformMatrix4fv(B.B, !1, d);
        z.uniformMatrix4fv(B.l, !1, g);
        z.uniform1f(B.i, h);
        E && z.uniformMatrix4fv(B.v, !1, Bg(b.sb, l, n, p, q));
        var L;
        if (m(t)) {
            if (v)a:{
                f = c.c ? 5125 : 5123;
                c = c.c ? 4 : 2;
                p = b.c.length - 1;
                for (h =
                         b.j.length - 1; 0 <= h; --h)for (z.bindTexture(3553, b.j[h]), l = 0 < h ? b.i[h - 1] : 0, q = b.i[h]; 0 <= p && b.c[p] >= l;) {
                    n = b.c[p];
                    v = b.v[p];
                    E = ma(v).toString();
                    if (!m(r[E]) && (!m(A) || ie(A, v.Y().R())) && (z.clear(z.COLOR_BUFFER_BIT | z.DEPTH_BUFFER_BIT), z.drawElements(4, q - n, f, n * c), q = t(v))) {
                        b = q;
                        break a
                    }
                    q = n;
                    p--
                }
                b = void 0
            } else z.clear(z.COLOR_BUFFER_BIT | z.DEPTH_BUFFER_BIT), tq(b, z, c, r, b.j, b.i), b = (b = t(null)) ? b : void 0;
            L = b
        } else tq(b, z, c, r, b.Xa, b.A);
        z.disableVertexAttribArray(B.f);
        z.disableVertexAttribArray(B.a);
        z.disableVertexAttribArray(B.g);
        z.disableVertexAttribArray(B.b);
        z.disableVertexAttribArray(B.c);
        return L
    }

    function tq(b, c, d, e, f, g) {
        var h = d.c ? 5125 : 5123;
        d = d.c ? 4 : 2;
        if (xb(e)) {
            var l;
            b = 0;
            e = f.length;
            for (l = 0; b < e; ++b) {
                c.bindTexture(3553, f[b]);
                var n = g[b];
                c.drawElements(4, n - l, h, l * d);
                l = n
            }
        } else {
            l = 0;
            var p, n = 0;
            for (p = f.length; n < p; ++n) {
                c.bindTexture(3553, f[n]);
                for (var q = 0 < n ? g[n - 1] : 0, r = g[n], t = q; l < b.c.length && b.c[l] <= r;) {
                    var v = ma(b.v[l]).toString();
                    m(e[v]) ? (t !== q && c.drawElements(4, q - t, h, t * d), q = t = l === b.c.length - 1 ? r : b.c[l + 1]) : q = l === b.c.length - 1 ? r : b.c[l + 1];
                    l++
                }
                t !== q && c.drawElements(4, q - t, h, t * d)
            }
        }
    }

    nq.prototype.hb = function (b) {
        var c = b.yb(), d = b.Sb(1), e = b.Ld(), f = b.le(1), g = b.A, h = b.Db(), l = b.D, n = b.B, p = b.fb();
        b = b.v;
        var q;
        0 === this.g.length ? this.g.push(d) : (q = this.g[this.g.length - 1], ma(q) != ma(d) && (this.A.push(this.b.length), this.g.push(d)));
        0 === this.f.length ? this.f.push(f) : (q = this.f[this.f.length - 1], ma(q) != ma(f) && (this.i.push(this.b.length), this.f.push(f)));
        this.D = c[0];
        this.ea = c[1];
        this.N = p[1];
        this.T = e[1];
        this.ba = e[0];
        this.Z = g;
        this.aa = h[0];
        this.fa = h[1];
        this.Ma = n;
        this.ra = l;
        this.xa = b;
        this.Na = p[0]
    };
    function uq(b, c, d) {
        this.f = c;
        this.g = b;
        this.c = d;
        this.b = {}
    }

    function vq(b, c) {
        var d = [], e;
        for (e in b.b)d.push(oq(b.b[e], c));
        return te.apply(null, d)
    }

    function wq(b, c) {
        for (var d in b.b)qq(b.b[d], c)
    }

    uq.prototype.a = function (b, c) {
        var d = this.b[c];
        m(d) || (d = new xq[c](this.g, this.f), this.b[c] = d);
        return d
    };
    uq.prototype.wa = function () {
        return xb(this.b)
    };
    function yq(b, c, d, e, f, g, h, l, n, p, q, r, t, v) {
        var A = zq, z, E;
        for (z = Dm.length - 1; 0 <= z; --z)if (E = b.b[Dm[z]], m(E) && (E = sq(E, c, d, e, f, A, g, h, l, n, p, q, r, t, v)))return E
    }

    function Aq(b, c, d, e, f, g, h, l, n, p, q, r) {
        var t = d.a;
        t.bindFramebuffer(t.FRAMEBUFFER, d.Ye());
        var v;
        m(b.c) && (v = Pd(Wd(c), e * b.c));
        return yq(b, d, c, e, f, g, h, l, n, p, q, function (b) {
            var c = new Uint8Array(4);
            t.readPixels(0, 0, 1, 1, t.RGBA, t.UNSIGNED_BYTE, c);
            if (0 < c[3] && (b = r(b)))return b
        }, !0, v)
    }

    function Bq(b, c, d, e, f, g, h, l, n, p, q) {
        var r = d.a;
        r.bindFramebuffer(r.FRAMEBUFFER, d.Ye());
        b = yq(b, d, c, e, f, g, h, l, n, p, q, function () {
            var b = new Uint8Array(4);
            r.readPixels(0, 0, 1, 1, r.RGBA, r.UNSIGNED_BYTE, b);
            return 0 < b[3]
        }, !1);
        return m(b)
    }

    var xq = {Image: nq}, zq = [1, 1];

    function Cq(b, c, d, e, f, g) {
        this.b = b;
        this.g = c;
        this.f = g;
        this.l = f;
        this.j = e;
        this.i = d;
        this.c = null;
        this.a = {}
    }

    w(Cq, kk);
    k = Cq.prototype;
    k.yc = function (b, c) {
        var d = b.toString(), e = this.a[d];
        m(e) ? e.push(c) : this.a[d] = [c]
    };
    k.zc = function () {
    };
    k.Pe = function (b, c) {
        var d = (0, c.g)(b);
        if (null != d && ie(this.f, d.R())) {
            var e = c.a;
            m(e) || (e = 0);
            this.yc(e, function (b) {
                b.Ha(c.f, c.c);
                b.hb(c.i);
                b.Ia(c.b);
                var e = Dq[d.U()];
                e && e.call(b, d, null)
            })
        }
    };
    k.Hd = function (b, c) {
        var d = b.f, e, f;
        e = 0;
        for (f = d.length; e < f; ++e) {
            var g = d[e], h = Dq[g.U()];
            h && h.call(this, g, c)
        }
    };
    k.wb = function (b, c) {
        var d = this.b, e = (new uq(1, this.f)).a(0, "Image");
        e.hb(this.c);
        e.wb(b, c);
        qq(e, d);
        sq(e, this.b, this.g, this.i, this.j, this.l, 1, 0, 1, 0, 1, {}, void 0, !1);
        oq(e, d)()
    };
    k.Gb = function () {
    };
    k.Ac = function () {
    };
    k.vb = function (b, c) {
        var d = this.b, e = (new uq(1, this.f)).a(0, "Image");
        e.hb(this.c);
        e.vb(b, c);
        qq(e, d);
        sq(e, this.b, this.g, this.i, this.j, this.l, 1, 0, 1, 0, 1, {}, void 0, !1);
        oq(e, d)()
    };
    k.Bc = function () {
    };
    k.Yb = function () {
    };
    k.xb = function () {
    };
    k.Ha = function () {
    };
    k.hb = function (b) {
        this.c = b
    };
    k.Ia = function () {
    };
    var Dq = {Point: Cq.prototype.wb, MultiPoint: Cq.prototype.vb, GeometryCollection: Cq.prototype.Hd};

    function Eq() {
        this.a = "precision mediump float;varying vec2 a;uniform mat4 f;uniform float g;uniform sampler2D h;void main(void){vec4 texColor=texture2D(h,a);gl_FragColor.rgb=(f*vec4(texColor.rgb,1.)).rgb;gl_FragColor.a=texColor.a*g;}"
    }

    w(Eq, Xp);
    da(Eq);
    function Fq() {
        this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"
    }

    w(Fq, Yp);
    da(Fq);
    function Gq(b, c) {
        this.j = b.getUniformLocation(c, "f");
        this.c = b.getUniformLocation(c, "g");
        this.f = b.getUniformLocation(c, "e");
        this.i = b.getUniformLocation(c, "d");
        this.g = b.getUniformLocation(c, "h");
        this.a = b.getAttribLocation(c, "b");
        this.b = b.getAttribLocation(c, "c")
    };
    function Hq() {
        this.a = "precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"
    }

    w(Hq, Xp);
    da(Hq);
    function Iq() {
        this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"
    }

    w(Iq, Yp);
    da(Iq);
    function Jq(b, c) {
        this.c = b.getUniformLocation(c, "f");
        this.f = b.getUniformLocation(c, "e");
        this.i = b.getUniformLocation(c, "d");
        this.g = b.getUniformLocation(c, "g");
        this.a = b.getAttribLocation(c, "b");
        this.b = b.getAttribLocation(c, "c")
    };
    function Kq(b, c) {
        rk.call(this, c);
        this.c = b;
        this.ba = new eq([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
        this.g = this.Wa = null;
        this.i = void 0;
        this.B = Ad();
        this.A = Cd();
        this.Z = new Ag;
        this.u = this.v = null
    }

    w(Kq, rk);
    function Lq(b, c, d) {
        var e = b.c.c;
        if (m(b.i) && b.i == d)e.bindFramebuffer(36160, b.g); else {
            c.postRenderFunctions.push(sa(function (b, c, d) {
                b.isContextLost() || (b.deleteFramebuffer(c), b.deleteTexture(d))
            }, e, b.g, b.Wa));
            c = iq(e, d, d);
            var f = e.createFramebuffer();
            e.bindFramebuffer(36160, f);
            e.framebufferTexture2D(36160, 36064, 3553, c, 0);
            b.Wa = c;
            b.g = f;
            b.i = d
        }
    }

    Kq.prototype.Og = function (b, c, d) {
        Mq(this, "precompose", d, b);
        gq(d, 34962, this.ba);
        var e = d.a, f = c.brightness || 1 != c.contrast || c.hue || 1 != c.saturation, g, h;
        f ? (g = Eq.Pa(), h = Fq.Pa()) : (g = Hq.Pa(), h = Iq.Pa());
        g = kq(d, g, h);
        f ? null === this.v ? this.v = h = new Gq(e, g) : h = this.v : null === this.u ? this.u = h = new Jq(e, g) : h = this.u;
        d.re(g) && (e.enableVertexAttribArray(h.a), e.vertexAttribPointer(h.a, 2, 5126, !1, 16, 0), e.enableVertexAttribArray(h.b), e.vertexAttribPointer(h.b, 2, 5126, !1, 16, 8), e.uniform1i(h.g, 0));
        e.uniformMatrix4fv(h.i, !1, this.B);
        e.uniformMatrix4fv(h.f, !1, this.A);
        f && e.uniformMatrix4fv(h.j, !1, Bg(this.Z, c.brightness, c.contrast, c.hue, c.saturation));
        e.uniform1f(h.c, c.opacity);
        e.bindTexture(3553, this.Wa);
        e.drawArrays(5, 0, 4);
        Mq(this, "postcompose", d, b)
    };
    function Mq(b, c, d, e) {
        b = b.b;
        if (cd(b, c)) {
            var f = e.viewState;
            C(b, new lk(c, b, new Cq(d, f.center, f.resolution, f.rotation, e.size, e.extent), e, null, d))
        }
    }

    Kq.prototype.of = function () {
        this.g = this.Wa = null;
        this.i = void 0
    };
    function Nq(b, c) {
        Kq.call(this, b, c);
        this.l = this.j = this.f = null
    }

    w(Nq, Kq);
    function Oq(b, c) {
        var d = c.a();
        return mq(b.c.c, d)
    }

    Nq.prototype.Va = function (b, c, d, e) {
        var f = this.b;
        return f.da().ke(b, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function (b) {
            return d.call(e, b, f)
        })
    };
    Nq.prototype.pf = function (b, c) {
        var d = this.c.c, e = b.pixelRatio, f = b.viewState, g = f.center, h = f.resolution, l = f.rotation, n = this.f, p = this.Wa, q = this.b.da(), r = b.viewHints, t = b.extent;
        m(c.extent) && (t = he(t, c.extent));
        r[0] || r[1] || ke(t) || (f = f.projection, r = q.j, null === r || (f = r), t = q.Hc(t, h, e, f), null !== t && tk(this, t) && (n = t, p = Oq(this, t), null === this.Wa || b.postRenderFunctions.push(sa(function (b, c) {
            b.isContextLost() || b.deleteTexture(c)
        }, d, this.Wa))));
        null !== n && (d = this.c.g.v, Pq(this, d.width, d.height, e, g, h, l, n.R()), this.l = null,
            e = this.B, Ed(e), Id(e, 1, -1), Hd(e, 0, -1), this.f = n, this.Wa = p, vk(b.attributions, n.i), wk(b, q));
        return !0
    };
    function Pq(b, c, d, e, f, g, h, l) {
        c *= g;
        d *= g;
        b = b.A;
        Ed(b);
        Id(b, 2 * e / c, 2 * e / d);
        Jd(b, -h);
        Hd(b, l[0] - f[0], l[1] - f[1]);
        Id(b, (l[2] - l[0]) / 2, (l[3] - l[1]) / 2);
        Hd(b, 1, 1)
    }

    Nq.prototype.ie = function (b, c) {
        var d = this.Va(b, c, pe, this);
        return m(d)
    };
    Nq.prototype.jc = function (b, c, d, e) {
        if (null !== this.f && !fa(this.f.a()))if (this.b.da() instanceof Hp) {
            if (b = b.slice(), qk(c.pixelToCoordinateMatrix, b, b), this.Va(b, c, pe, this))return d.call(e, this.b)
        } else {
            var f = [this.f.a().width, this.f.a().height];
            if (null === this.l) {
                var g = c.size;
                c = Ad();
                Ed(c);
                Hd(c, -1, -1);
                Id(c, 2 / g[0], 2 / g[1]);
                Hd(c, 0, g[1]);
                Id(c, 1, -1);
                g = Ad();
                Gd(this.A, g);
                var h = Ad();
                Ed(h);
                Hd(h, 0, f[1]);
                Id(h, 1, -1);
                Id(h, f[0] / 2, f[1] / 2);
                Hd(h, 1, 1);
                var l = Ad();
                Fd(h, g, l);
                Fd(l, c, l);
                this.l = l
            }
            c = [0, 0];
            qk(this.l, b, c);
            if (!(0 > c[0] ||
                c[0] > f[0] || 0 > c[1] || c[1] > f[1]) && (null === this.j && (this.j = Wi(1, 1)), this.j.clearRect(0, 0, 1, 1), this.j.drawImage(this.f.a(), c[0], c[1], 1, 1, 0, 0, 1, 1), 0 < this.j.getImageData(0, 0, 1, 1).data[3]))return d.call(e, this.b)
        }
    };
    function Qq() {
        this.a = "precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"
    }

    w(Qq, Xp);
    da(Qq);
    function Rq() {
        this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"
    }

    w(Rq, Yp);
    da(Rq);
    function Sq(b, c) {
        this.c = b.getUniformLocation(c, "e");
        this.f = b.getUniformLocation(c, "d");
        this.a = b.getAttribLocation(c, "b");
        this.b = b.getAttribLocation(c, "c")
    };
    function Tq(b, c) {
        Kq.call(this, b, c);
        this.N = Qq.Pa();
        this.aa = Rq.Pa();
        this.f = null;
        this.C = new eq([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
        this.D = this.j = null;
        this.l = -1;
        this.T = [0, 0]
    }

    w(Tq, Kq);
    k = Tq.prototype;
    k.W = function () {
        hq(this.c.g, this.C);
        Tq.$.W.call(this)
    };
    k.Gd = function (b, c) {
        var d = this.c;
        return function (e, f) {
            return Th(b, e, f, function (b) {
                var f = zh(d.b, b.ob());
                f && (c[e] || (c[e] = {}), c[e][b.a.toString()] = b);
                return f
            })
        }
    };
    k.of = function () {
        Tq.$.of.call(this);
        this.f = null
    };
    k.pf = function (b, c, d) {
        var e = this.c, f = d.a, g = b.viewState, h = g.projection, l = this.b, n = l.da(), p = Uh(n, h), q = Ph(p, g.resolution), r = p.ua(q), t = n.cc(q, b.pixelRatio, h), v = t[0] / md(p.Ja(q), this.T)[0], A = r / v, z = n.Kd(), E = g.center, B;
        r == g.resolution ? (E = yk(E, r, b.size), B = fe(E, r, g.rotation, b.size)) : B = b.extent;
        r = Nh(p, B, r);
        if (null !== this.j && mg(this.j, r) && this.l == n.a)A = this.D; else {
            var y = [ng(r), r.c - r.b + 1], y = Math.max(y[0] * t[0], y[1] * t[1]), L = Math.pow(2, Math.ceil(Math.log(y) / Math.LN2)), y = A * L, K = p.Kc(q), H = K[0] + r.a * t[0] * A, A = K[1] + r.b *
                t[1] * A, A = [H, A, H + y, A + y];
            Lq(this, b, L);
            f.viewport(0, 0, L, L);
            f.clearColor(0, 0, 0, 0);
            f.clear(16384);
            f.disable(3042);
            L = kq(d, this.N, this.aa);
            d.re(L);
            null === this.f && (this.f = new Sq(f, L));
            gq(d, 34962, this.C);
            f.enableVertexAttribArray(this.f.a);
            f.vertexAttribPointer(this.f.a, 2, 5126, !1, 16, 0);
            f.enableVertexAttribArray(this.f.b);
            f.vertexAttribPointer(this.f.b, 2, 5126, !1, 16, 8);
            f.uniform1i(this.f.c, 0);
            d = {};
            d[q] = {};
            var S = this.Gd(n, d), ta = l.c(), L = !0, H = Ld(), Oa = new lg(0, 0, 0, 0), R, Aa, db;
            for (Aa = r.a; Aa <= r.f; ++Aa)for (db = r.b; db <=
            r.c; ++db) {
                K = n.bc(q, Aa, db, v, h);
                if (m(c.extent) && (R = Lh(p, K.a, H), !ie(R, c.extent)))continue;
                R = K.state;
                if (2 == R) {
                    if (zh(e.b, K.ob())) {
                        d[q][eg(K.a)] = K;
                        continue
                    }
                } else if (4 == R || 3 == R && !ta)continue;
                L = !1;
                R = Kh(p, K.a, S, Oa, H);
                R || (K = Mh(p, K.a, Oa, H), null === K || S(q + 1, K))
            }
            c = Ua(tb(d), Number);
            gb(c);
            for (var S = new Float32Array(4), Ia, Cb, $a, ta = 0, Oa = c.length; ta < Oa; ++ta)for (Ia in Cb = d[c[ta]], Cb)K = Cb[Ia], R = Lh(p, K.a, H), Aa = 2 * (R[2] - R[0]) / y, db = 2 * (R[3] - R[1]) / y, $a = 2 * (R[0] - A[0]) / y - 1, R = 2 * (R[1] - A[1]) / y - 1, zd(S, Aa, db, $a, R), f.uniform4fv(this.f.f,
                S), Uq(e, K, t, z * v), f.drawArrays(5, 0, 4);
            L ? (this.j = r, this.D = A, this.l = n.a) : (this.D = this.j = null, this.l = -1, b.animate = !0)
        }
        xk(b.usedTiles, n, q, r);
        var Ec = e.l;
        zk(b, n, p, v, h, B, q, l.b(), function (b) {
            var c;
            (c = 2 != b.state || zh(e.b, b.ob())) || (c = b.ob() in Ec.c);
            c || Ak(Ec, [b, gg(p, b.a), p.ua(b.a[0]), t, z * v])
        }, this);
        uk(b, n);
        wk(b, n);
        f = this.B;
        Ed(f);
        Hd(f, (E[0] - A[0]) / (A[2] - A[0]), (E[1] - A[1]) / (A[3] - A[1]));
        0 !== g.rotation && Jd(f, g.rotation);
        Id(f, b.size[0] * g.resolution / (A[2] - A[0]), b.size[1] * g.resolution / (A[3] - A[1]));
        Hd(f, -.5, -.5);
        return !0
    };
    k.jc = function (b, c, d, e) {
        if (null !== this.g) {
            var f = [0, 0];
            qk(this.B, [b[0] / c.size[0], (c.size[1] - b[1]) / c.size[1]], f);
            b = [f[0] * this.i, f[1] * this.i];
            c = this.c.g.a;
            c.bindFramebuffer(c.FRAMEBUFFER, this.g);
            f = new Uint8Array(4);
            c.readPixels(b[0], b[1], 1, 1, c.RGBA, c.UNSIGNED_BYTE, f);
            if (0 < f[3])return d.call(e, this.b)
        }
    };
    function Vq(b, c) {
        Kq.call(this, b, c);
        this.l = !1;
        this.T = -1;
        this.N = NaN;
        this.D = Ld();
        this.j = this.f = this.C = null
    }

    w(Vq, Kq);
    k = Vq.prototype;
    k.Og = function (b, c, d) {
        this.j = c;
        var e = b.viewState, f = this.f;
        if (null !== f && !f.wa()) {
            var g = e.center, h = e.resolution, e = e.rotation, l = b.size, n = c.opacity, p = c.brightness, q = c.contrast, r = c.hue, t = c.saturation;
            b = c.Pb ? b.skippedFeatureUids : {};
            var v, A;
            c = 0;
            for (v = Dm.length; c < v; ++c)A = f.b[Dm[c]], m(A) && sq(A, d, g, h, e, l, n, p, q, r, t, b, void 0, !1)
        }
    };
    k.W = function () {
        var b = this.f;
        null !== b && (vq(b, this.c.g)(), this.f = null);
        Vq.$.W.call(this)
    };
    k.Va = function (b, c, d, e) {
        if (null !== this.f && null !== this.j) {
            var f = c.viewState, g = this.b, h = this.j, l = {};
            return Aq(this.f, b, this.c.g, f.resolution, f.rotation, h.opacity, h.brightness, h.contrast, h.hue, h.saturation, h.Pb ? c.skippedFeatureUids : {}, function (b) {
                var c = ma(b).toString();
                if (!(c in l))return l[c] = !0, d.call(e, b, g)
            })
        }
    };
    k.ie = function (b, c) {
        if (null === this.f || null === this.j)return !1;
        var d = c.viewState, e = this.j;
        return Bq(this.f, b, this.c.g, d.resolution, d.rotation, e.opacity, e.brightness, e.contrast, e.hue, e.saturation, c.skippedFeatureUids)
    };
    k.jc = function (b, c, d, e) {
        b = b.slice();
        qk(c.pixelToCoordinateMatrix, b, b);
        if (this.ie(b, c))return d.call(e, this.b)
    };
    k.Ol = function () {
        sk(this)
    };
    k.pf = function (b, c, d) {
        function e(b) {
            var c;
            m(b.c) ? c = b.c.call(b, p) : m(f.b) && (c = (0, f.b)(b, p));
            if (null != c) {
                if (null != c) {
                    var d, e, g = !1;
                    d = 0;
                    for (e = c.length; d < e; ++d)g = pn(t, b, c[d], on(p, q), this.Ol, this) || g;
                    b = g
                } else b = !1;
                this.l = this.l || b
            }
        }

        var f = this.b;
        c = f.da();
        vk(b.attributions, c.g);
        wk(b, c);
        var g = b.viewHints[0], h = b.viewHints[1], l = f.u, n = f.A;
        if (!this.l && !l && g || !n && h)return !0;
        var h = b.extent, l = b.viewState, g = l.projection, p = l.resolution, q = b.pixelRatio, l = f.a, r = f.c, n = f.get("renderOrder");
        m(n) || (n = nn);
        h = Pd(h, r * p);
        if (!this.l &&
            this.N == p && this.T == l && this.C == n && Ud(this.D, h))return !0;
        null === this.f || b.postRenderFunctions.push(vq(this.f, d));
        this.l = !1;
        var t = new uq(.5 * p / q, h, f.c);
        c.fc(h, p, g);
        if (null === n)c.Hb(h, p, e, this); else {
            var v = [];
            c.Hb(h, p, function (b) {
                v.push(b)
            }, this);
            gb(v, n);
            Sa(v, e, this)
        }
        wq(t, d);
        this.N = p;
        this.T = l;
        this.C = n;
        this.D = h;
        this.f = t;
        return !0
    };
    function Wq(b, c) {
        Fk.call(this, 0, c);
        this.a = Pg("CANVAS");
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.className = "ol-unselectable";
        Sg(b, this.a, 0);
        this.A = this.D = 0;
        this.C = Wi();
        this.B = !0;
        this.c = bj(this.a, {
            antialias: !0,
            depth: !1,
            failIfMajorPerformanceCaveat: !0,
            preserveDrawingBuffer: !1,
            stencil: !0
        });
        this.g = new fq(this.a, this.c);
        x(this.a, "webglcontextlost", this.Ml, !1, this);
        x(this.a, "webglcontextrestored", this.Nl, !1, this);
        this.b = new yh;
        this.u = null;
        this.l = new Kk(ra(function (b) {
            var c = b[1];
            b = b[2];
            var f = c[0] - this.u[0], c = c[1] - this.u[1];
            return 65536 * Math.log(b) + Math.sqrt(f * f + c * c) / b
        }, this), function (b) {
            return b[0].ob()
        });
        this.N = ra(function () {
            if (!this.l.wa()) {
                Ok(this.l);
                var b = Lk(this.l);
                Uq(this, b[0], b[3], b[4])
            }
        }, this);
        this.j = 0;
        Xq(this)
    }

    w(Wq, Fk);
    function Uq(b, c, d, e) {
        var f = b.c, g = c.ob();
        if (zh(b.b, g))b = b.b.get(g), f.bindTexture(3553, b.Wa), 9729 != b.ug && (f.texParameteri(3553, 10240, 9729), b.ug = 9729), 9729 != b.vg && (f.texParameteri(3553, 10240, 9729), b.vg = 9729); else {
            var h = f.createTexture();
            f.bindTexture(3553, h);
            if (0 < e) {
                var l = b.C.canvas, n = b.C;
                b.D !== d[0] || b.A !== d[1] ? (l.width = d[0], l.height = d[1], b.D = d[0], b.A = d[1]) : n.clearRect(0, 0, d[0], d[1]);
                n.drawImage(c.Ta(), e, e, d[0], d[1], 0, 0, d[0], d[1]);
                f.texImage2D(3553, 0, 6408, 6408, 5121, l)
            } else f.texImage2D(3553, 0, 6408, 6408,
                5121, c.Ta());
            f.texParameteri(3553, 10240, 9729);
            f.texParameteri(3553, 10241, 9729);
            f.texParameteri(3553, 10242, 33071);
            f.texParameteri(3553, 10243, 33071);
            b.b.set(g, {Wa: h, ug: 9729, vg: 9729})
        }
    }

    k = Wq.prototype;
    k.Oe = function (b) {
        return b instanceof I ? new Nq(this, b) : b instanceof J ? new Tq(this, b) : b instanceof M ? new Vq(this, b) : null
    };
    function Yq(b, c, d) {
        var e = b.i;
        if (cd(e, c)) {
            var f = b.g;
            b = d.viewState;
            b = new Cq(f, b.center, b.resolution, b.rotation, d.size, d.extent);
            C(e, new lk(c, e, b, d, null, f));
            c = Ua(tb(b.a), Number);
            gb(c);
            var g, h;
            d = 0;
            for (e = c.length; d < e; ++d)for (f = b.a[c[d].toString()], g = 0, h = f.length; g < h; ++g)f[g](b)
        }
    }

    k.W = function () {
        var b = this.c;
        b.isContextLost() || this.b.forEach(function (c) {
            null === c || b.deleteTexture(c.Wa)
        });
        rc(this.g);
        Wq.$.W.call(this)
    };
    k.Ii = function (b, c) {
        for (var d = this.c, e; 1024 < this.b.$b() - this.j;) {
            e = this.b.a.wc;
            if (null === e)if (+this.b.a.ae == c.index)break; else--this.j; else d.deleteTexture(e.Wa);
            this.b.pop()
        }
    };
    k.U = function () {
        return "webgl"
    };
    k.Ml = function (b) {
        b.preventDefault();
        this.b.clear();
        this.j = 0;
        pb(this.f, function (b) {
            b.of()
        })
    };
    k.Nl = function () {
        Xq(this);
        this.i.render()
    };
    function Xq(b) {
        b = b.c;
        b.activeTexture(33984);
        b.blendFuncSeparate(770, 771, 1, 771);
        b.disable(2884);
        b.disable(2929);
        b.disable(3089);
        b.disable(2960)
    }

    k.xe = function (b) {
        var c = this.g, d = this.c;
        if (d.isContextLost())return !1;
        if (null === b)return this.B && (oh(this.a, !1), this.B = !1), !1;
        this.u = b.focus;
        this.b.set((-b.index).toString(), null);
        ++this.j;
        Yq(this, "precompose", b);
        var e = [], f = b.layerStatesArray, g = b.viewState.resolution, h, l, n, p;
        h = 0;
        for (l = f.length; h < l; ++h)p = f[h], mk(p, g) && "ready" == p.l && (n = Ik(this, p.layer), n.pf(b, p, c) && e.push(p));
        f = b.size[0] * b.pixelRatio;
        g = b.size[1] * b.pixelRatio;
        if (this.a.width != f || this.a.height != g)this.a.width = f, this.a.height = g;
        d.bindFramebuffer(36160,
            null);
        d.clearColor(0, 0, 0, 0);
        d.clear(16384);
        d.enable(3042);
        d.viewport(0, 0, this.a.width, this.a.height);
        h = 0;
        for (l = e.length; h < l; ++h)p = e[h], n = Ik(this, p.layer), n.Og(b, p, c);
        this.B || (oh(this.a, !0), this.B = !0);
        Gk(b);
        1024 < this.b.$b() - this.j && b.postRenderFunctions.push(ra(this.Ii, this));
        this.l.wa() || (b.postRenderFunctions.push(this.N), b.animate = !0);
        Yq(this, "postcompose", b);
        Jk(this, b);
        b.postRenderFunctions.push(Hk)
    };
    k.mf = function (b, c, d, e, f, g) {
        var h;
        if (this.c.isContextLost())return !1;
        var l = c.viewState, n = c.layerStatesArray, p;
        for (p = n.length - 1; 0 <= p; --p) {
            h = n[p];
            var q = h.layer;
            if (mk(h, l.resolution) && f.call(g, q) && (h = Ik(this, q).Va(b, c, d, e)))return h
        }
    };
    k.Ng = function (b, c, d, e) {
        var f = !1;
        if (this.c.isContextLost())return !1;
        var g = c.viewState, h = c.layerStatesArray, l;
        for (l = h.length - 1; 0 <= l; --l) {
            var n = h[l], p = n.layer;
            if (mk(n, g.resolution) && d.call(e, p) && (f = Ik(this, p).ie(b, c)))return !0
        }
        return f
    };
    k.Mg = function (b, c, d, e, f) {
        if (this.c.isContextLost())return !1;
        var g = c.viewState, h, l = c.layerStatesArray, n;
        for (n = l.length - 1; 0 <= n; --n) {
            h = l[n];
            var p = h.layer;
            if (mk(h, g.resolution) && f.call(e, p) && (h = Ik(this, p).jc(b, c, d, e)))return h
        }
    };
    var Zq = ["canvas", "webgl", "dom"];

    function X(b) {
        gd.call(this);
        var c = $q(b);
        this.rb = m(b.loadTilesWhileAnimating) ? b.loadTilesWhileAnimating : !1;
        this.sb = m(b.loadTilesWhileInteracting) ? b.loadTilesWhileInteracting : !1;
        this.Uc = m(b.pixelRatio) ? b.pixelRatio : dj;
        this.tb = c.logos;
        this.u = new mi(this.Nn, void 0, this);
        qc(this, this.u);
        this.Xa = Ad();
        this.He = Ad();
        this.qb = 0;
        this.c = null;
        this.ra = Ld();
        this.j = this.N = null;
        this.b = Mg("DIV", "ol-viewport");
        this.b.style.position = "relative";
        this.b.style.overflow = "hidden";
        this.b.style.width = "100%";
        this.b.style.height =
            "100%";
        this.b.style.msTouchAction = "none";
        ij && ah(this.b, "ol-touch");
        this.aa = Mg("DIV", "ol-overlaycontainer");
        this.b.appendChild(this.aa);
        this.D = Mg("DIV", "ol-overlaycontainer-stopevent");
        x(this.D, ["click", "dblclick", "mousedown", "touchstart", "MSPointerDown", ek, Kb ? "DOMMouseScroll" : "mousewheel"], tc);
        this.b.appendChild(this.D);
        b = new Wj(this);
        x(b, sb(hk), this.ng, !1, this);
        qc(this, b);
        this.Z = c.keyboardEventTarget;
        this.A = new Gi;
        x(this.A, "key", this.lg, !1, this);
        qc(this, this.A);
        b = new Oi(this.b);
        x(b, "mousewheel",
            this.lg, !1, this);
        qc(this, b);
        this.g = c.controls;
        this.f = c.interactions;
        this.i = c.overlays;
        this.l = new c.Pn(this.b, this);
        qc(this, this.l);
        this.Na = new Bi;
        qc(this, this.Na);
        this.T = this.v = null;
        this.C = [];
        this.fa = [];
        this.xa = new Pk(ra(this.Cj, this), ra(this.Yk, this));
        this.ba = {};
        x(this, id("layergroup"), this.Rj, !1, this);
        x(this, id("view"), this.nk, !1, this);
        x(this, id("size"), this.kk, !1, this);
        x(this, id("target"), this.mk, !1, this);
        this.I(c.values);
        this.g.forEach(function (b) {
            b.setMap(this)
        }, this);
        x(this.g, "add", function (b) {
                b.element.setMap(this)
            },
            !1, this);
        x(this.g, "remove", function (b) {
            b.element.setMap(null)
        }, !1, this);
        this.f.forEach(function (b) {
            b.setMap(this)
        }, this);
        x(this.f, "add", function (b) {
            b.element.setMap(this)
        }, !1, this);
        x(this.f, "remove", function (b) {
            b.element.setMap(null)
        }, !1, this);
        this.i.forEach(function (b) {
            b.setMap(this)
        }, this);
        x(this.i, "add", function (b) {
            b.element.setMap(this)
        }, !1, this);
        x(this.i, "remove", function (b) {
            b.element.setMap(null)
        }, !1, this)
    }

    w(X, gd);
    k = X.prototype;
    k.wi = function (b) {
        this.g.push(b)
    };
    k.xi = function (b) {
        this.f.push(b)
    };
    k.Pf = function (b) {
        this.ac().Gc().push(b)
    };
    k.Qf = function (b) {
        this.i.push(b)
    };
    k.Oa = function (b) {
        this.render();
        Array.prototype.push.apply(this.C, arguments)
    };
    k.W = function () {
        Tg(this.b);
        X.$.W.call(this)
    };
    k.Re = function (b, c, d, e, f) {
        if (null !== this.c)return b = this.ta(b), this.l.mf(b, this.c, c, m(d) ? d : null, m(e) ? e : pe, m(f) ? f : null)
    };
    k.Xk = function (b, c, d, e, f) {
        if (null !== this.c)return this.l.Mg(b, this.c, c, m(d) ? d : null, m(e) ? e : pe, m(f) ? f : null)
    };
    k.pk = function (b, c, d) {
        if (null === this.c)return !1;
        b = this.ta(b);
        return this.l.Ng(b, this.c, m(c) ? c : pe, m(d) ? d : null)
    };
    k.Yi = function (b) {
        return this.ta(this.Jd(b))
    };
    k.Jd = function (b) {
        if (m(b.changedTouches)) {
            var c = b.changedTouches[0];
            b = lh(this.b);
            return [c.clientX - b.x, c.clientY - b.y]
        }
        c = this.b;
        b = lh(b);
        c = lh(c);
        c = new Dg(b.x - c.x, b.y - c.y);
        return [c.x, c.y]
    };
    k.jf = function () {
        return this.get("target")
    };
    k.hd = function () {
        var b = this.jf();
        return m(b) ? Ig(b) : null
    };
    k.ta = function (b) {
        var c = this.c;
        if (null === c)return null;
        b = b.slice();
        return qk(c.pixelToCoordinateMatrix, b, b)
    };
    k.Wi = function () {
        return this.g
    };
    k.rj = function () {
        return this.i
    };
    k.fj = function () {
        return this.f
    };
    k.ac = function () {
        return this.get("layergroup")
    };
    k.Bg = function () {
        return this.ac().Gc()
    };
    k.ya = function (b) {
        var c = this.c;
        if (null === c)return null;
        b = b.slice(0, 2);
        return qk(c.coordinateToPixelMatrix, b, b)
    };
    k.Ca = function () {
        return this.get("size")
    };
    k.X = function () {
        return this.get("view")
    };
    k.Ej = function () {
        return this.b
    };
    k.Cj = function (b, c, d, e) {
        var f = this.c;
        if (!(null !== f && c in f.wantedTiles && f.wantedTiles[c][eg(b.a)]))return Infinity;
        b = d[0] - f.focus[0];
        d = d[1] - f.focus[1];
        return 65536 * Math.log(e) + Math.sqrt(b * b + d * d) / e
    };
    k.lg = function (b, c) {
        var d = new Uj(c || b.type, this, b);
        this.ng(d)
    };
    k.ng = function (b) {
        if (null !== this.c) {
            this.T = b.coordinate;
            b.frameState = this.c;
            var c = this.f.b, d;
            if (!1 !== C(this, b))for (d = c.length - 1; 0 <= d; d--) {
                var e = c[d];
                if (e.b() && !e.handleEvent(b))break
            }
        }
    };
    k.hk = function () {
        var b = this.c, c = this.xa;
        if (!c.wa()) {
            var d = 16, e = d, f = 0;
            null !== b && (f = b.viewHints, f[0] && (d = this.rb ? 8 : 0, e = 2), f[1] && (d = this.sb ? 8 : 0, e = 2), f = rb(b.wantedTiles));
            d *= f;
            e *= f;
            if (c.f < d) {
                Ok(c);
                for (var f = 0, g; c.f < d && f < e && 0 < c.$b();)g = Lk(c)[0], 0 === g.state && (x(g, "change", c.i, !1, c), g.load(), ++c.f, ++f)
            }
        }
        c = this.fa;
        e = 0;
        for (d = c.length; e < d; ++e)c[e](this, b);
        c.length = 0
    };
    k.kk = function () {
        this.render()
    };
    k.mk = function () {
        var b = this.hd();
        Ni(this.A);
        null === b ? (Tg(this.b), null !== this.v && (Xc(this.v), this.v = null)) : (b.appendChild(this.b), Hi(this.A, null === this.Z ? b : this.Z), null === this.v && (this.v = x(this.Na, "resize", this.Rc, !1, this)));
        this.Rc()
    };
    k.Yk = function () {
        this.render()
    };
    k.ok = function () {
        this.render()
    };
    k.nk = function () {
        null !== this.N && (Xc(this.N), this.N = null);
        var b = this.X();
        null !== b && (this.N = x(b, "propertychange", this.ok, !1, this));
        this.render()
    };
    k.Sj = function () {
        this.render()
    };
    k.Tj = function () {
        this.render()
    };
    k.Rj = function () {
        if (null !== this.j) {
            for (var b = this.j.length, c = 0; c < b; ++c)Xc(this.j[c]);
            this.j = null
        }
        b = this.ac();
        null != b && (this.j = [x(b, "propertychange", this.Tj, !1, this), x(b, "change", this.Sj, !1, this)]);
        this.render()
    };
    k.On = function () {
        var b = this.u;
        ni(b);
        b.Vf()
    };
    k.render = function () {
        null != this.u.ha || this.u.start()
    };
    k.In = function (b) {
        if (m(this.g.remove(b)))return b
    };
    k.Jn = function (b) {
        var c;
        m(this.f.remove(b)) && (c = b);
        return c
    };
    k.Kn = function (b) {
        return this.ac().Gc().remove(b)
    };
    k.Ln = function (b) {
        if (m(this.i.remove(b)))return b
    };
    k.Nn = function (b) {
        var c, d, e, f = this.Ca(), g = this.X(), h = null;
        if (m(f) && 0 < f[0] && 0 < f[1] && null !== g && Tf(g)) {
            var h = g.c.slice(), l = this.ac().Ze(), n = {};
            c = 0;
            for (d = l.length; c < d; ++c)n[ma(l[c].layer)] = l[c];
            e = Sf(g);
            h = {
                animate: !1,
                attributions: {},
                coordinateToPixelMatrix: this.Xa,
                extent: null,
                focus: null === this.T ? e.center : this.T,
                index: this.qb++,
                layerStates: n,
                layerStatesArray: l,
                logos: Db(this.tb),
                pixelRatio: this.Uc,
                pixelToCoordinateMatrix: this.He,
                postRenderFunctions: [],
                size: f,
                skippedFeatureUids: this.ba,
                tileQueue: this.xa,
                time: b,
                usedTiles: {},
                viewState: e,
                viewHints: h,
                wantedTiles: {}
            }
        }
        if (null !== h) {
            b = this.C;
            c = f = 0;
            for (d = b.length; c < d; ++c)g = b[c], g(this, h) && (b[f++] = g);
            b.length = f;
            h.extent = fe(e.center, e.resolution, e.rotation, h.size)
        }
        this.c = h;
        this.l.xe(h);
        null !== h && (h.animate && this.render(), Array.prototype.push.apply(this.fa, h.postRenderFunctions), 0 !== this.C.length || h.viewHints[0] || h.viewHints[1] || Xd(h.extent, this.ra) || (C(this, new vh("moveend", this, h)), Qd(h.extent, this.ra)));
        C(this, new vh("postrender", this, h));
        ri(this.hk, this)
    };
    k.zh = function (b) {
        this.set("layergroup", b)
    };
    k.Bf = function (b) {
        this.set("size", b)
    };
    k.Zk = function (b) {
        this.set("target", b)
    };
    k.fo = function (b) {
        this.set("view", b)
    };
    k.Eh = function (b) {
        b = ma(b).toString();
        this.ba[b] = !0;
        this.render()
    };
    k.Rc = function () {
        var b = this.hd();
        if (null === b)this.Bf(void 0); else {
            var c = Hg(b), d = Jb && b.currentStyle;
            d && Xg(Fg(c)) && "auto" != d.width && "auto" != d.height && !d.boxSizing ? (c = ph(b, d.width, "width", "pixelWidth"), b = ph(b, d.height, "height", "pixelHeight"), b = new Eg(c, b)) : (d = new Eg(b.offsetWidth, b.offsetHeight), c = rh(b, "padding"), b = uh(b), b = new Eg(d.width - b.left - c.left - c.right - b.right, d.height - b.top - c.top - c.bottom - b.bottom));
            this.Bf([b.width, b.height])
        }
    };
    k.Jh = function (b) {
        b = ma(b).toString();
        delete this.ba[b];
        this.render()
    };
    function $q(b) {
        var c = null;
        m(b.keyboardEventTarget) && (c = ia(b.keyboardEventTarget) ? document.getElementById(b.keyboardEventTarget) : b.keyboardEventTarget);
        var d = {}, e = {};
        if (!m(b.logo) || "boolean" == typeof b.logo && b.logo)e["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] =
            "http://openlayers.org/"; else {
            var f = b.logo;
            ia(f) ? e[f] = "" : la(f) && (e[f.src] = f.href)
        }
        f = b.layers instanceof cm ? b.layers : new cm({layers: b.layers});
        d.layergroup = f;
        d.target = b.target;
        d.view = m(b.view) ? b.view : new Of;
        var f = Fk, g;
        m(b.renderer) ? ga(b.renderer) ? g = b.renderer : ia(b.renderer) && (g = [b.renderer]) : g = Zq;
        var h, l;
        h = 0;
        for (l = g.length; h < l; ++h) {
            var n = g[h];
            if ("canvas" == n) {
                if (fj) {
                    f = Mp;
                    break
                }
            } else if ("dom" == n) {
                f = Up;
                break
            } else if ("webgl" == n && cj) {
                f = Wq;
                break
            }
        }
        var p;
        m(b.controls) ? p = ga(b.controls) ? new rg(b.controls.slice()) :
            b.controls : p = di();
        var q;
        m(b.interactions) ? q = ga(b.interactions) ? new rg(b.interactions.slice()) : b.interactions : q = bm();
        b = m(b.overlays) ? ga(b.overlays) ? new rg(b.overlays.slice()) : b.overlays : new rg;
        return {controls: p, interactions: q, keyboardEventTarget: c, logos: e, overlays: b, Pn: f, values: d}
    }

    jm();
    function ar(b) {
        gd.call(this);
        this.l = m(b.insertFirst) ? b.insertFirst : !0;
        this.v = m(b.stopEvent) ? b.stopEvent : !0;
        this.c = Mg("DIV", {"class": "ol-overlay-container"});
        this.c.style.position = "absolute";
        this.j = m(b.autoPan) ? b.autoPan : !1;
        this.g = m(b.autoPanAnimation) ? b.autoPanAnimation : {};
        this.i = m(b.autoPanMargin) ? b.autoPanMargin : 20;
        this.b = {Cd: "", be: "", ye: "", ze: "", visible: !0};
        this.f = null;
        x(this, id("element"), this.Nj, !1, this);
        x(this, id("map"), this.Zj, !1, this);
        x(this, id("offset"), this.dk, !1, this);
        x(this, id("position"),
            this.fk, !1, this);
        x(this, id("positioning"), this.gk, !1, this);
        m(b.element) && this.wh(b.element);
        this.Bh(m(b.offset) ? b.offset : [0, 0]);
        this.Ch(m(b.positioning) ? b.positioning : "top-left");
        m(b.position) && this.kf(b.position)
    }

    w(ar, gd);
    k = ar.prototype;
    k.de = function () {
        return this.get("element")
    };
    k.ee = function () {
        return this.get("map")
    };
    k.gg = function () {
        return this.get("offset")
    };
    k.Cg = function () {
        return this.get("position")
    };
    k.jg = function () {
        return this.get("positioning")
    };
    k.Nj = function () {
        Rg(this.c);
        var b = this.de();
        null != b && Qg(this.c, b)
    };
    k.Zj = function () {
        null !== this.f && (Tg(this.c), Xc(this.f), this.f = null);
        var b = this.ee();
        null != b && (this.f = x(b, "postrender", this.render, !1, this), br(this), b = this.v ? b.D : b.aa, this.l ? Sg(b, this.c, 0) : Qg(b, this.c))
    };
    k.render = function () {
        br(this)
    };
    k.dk = function () {
        br(this)
    };
    k.fk = function () {
        br(this);
        if (m(this.get("position")) && this.j) {
            var b = this.ee();
            if (m(b) && !fa(b.hd())) {
                var c = cr(b.hd(), b.Ca()), d = this.de(), e = d.offsetWidth, f = d.currentStyle || window.getComputedStyle(d), e = e + (parseInt(f.marginLeft, 10) + parseInt(f.marginRight, 10)), f = d.offsetHeight, g = d.currentStyle || window.getComputedStyle(d), f = f + (parseInt(g.marginTop, 10) + parseInt(g.marginBottom, 10)), h = cr(d, [e, f]), d = this.i;
                Ud(c, h) || (e = h[0] - c[0], f = c[2] - h[2], g = h[1] - c[1], h = c[3] - h[3], c = [0, 0], 0 > e ? c[0] = e - d : 0 > f && (c[0] = Math.abs(f) +
                    d), 0 > g ? c[1] = g - d : 0 > h && (c[1] = Math.abs(h) + d), 0 === c[0] && 0 === c[1]) || (d = b.X().Ka(), e = b.ya(d), c = [e[0] + c[0], e[1] + c[1]], null !== this.g && (this.g.source = d, b.Oa(Zf(this.g))), b.X().eb(b.ta(c)))
            }
        }
    };
    k.gk = function () {
        br(this)
    };
    k.wh = function (b) {
        this.set("element", b)
    };
    k.setMap = function (b) {
        this.set("map", b)
    };
    k.Bh = function (b) {
        this.set("offset", b)
    };
    k.kf = function (b) {
        this.set("position", b)
    };
    function cr(b, c) {
        var d = Hg(b);
        hh(b, "position");
        var e = new Dg(0, 0), f;
        f = d ? Hg(d) : document;
        f = !Jb || Jb && 9 <= Ub || Xg(Fg(f)) ? f.documentElement : f.body;
        b != f && (f = kh(b), d = Yg(Fg(d)), e.x = f.left + d.x, e.y = f.top + d.y);
        return [e.x, e.y, e.x + c[0], e.y + c[1]]
    }

    k.Ch = function (b) {
        this.set("positioning", b)
    };
    function br(b) {
        var c = b.ee(), d = b.Cg();
        if (m(c) && null !== c.c && m(d)) {
            var d = c.ya(d), e = c.Ca(), c = b.c.style, f = b.gg(), g = b.jg(), h = f[0], f = f[1];
            if ("bottom-right" == g || "center-right" == g || "top-right" == g)"" !== b.b.be && (b.b.be = c.left = ""), h = Math.round(e[0] - d[0] - h) + "px", b.b.ye != h && (b.b.ye = c.right = h); else {
                "" !== b.b.ye && (b.b.ye = c.right = "");
                if ("bottom-center" == g || "center-center" == g || "top-center" == g)h -= mh(b.c).width / 2;
                h = Math.round(d[0] + h) + "px";
                b.b.be != h && (b.b.be = c.left = h)
            }
            if ("bottom-left" == g || "bottom-center" == g || "bottom-right" ==
                g)"" !== b.b.ze && (b.b.ze = c.top = ""), d = Math.round(e[1] - d[1] - f) + "px", b.b.Cd != d && (b.b.Cd = c.bottom = d); else {
                "" !== b.b.Cd && (b.b.Cd = c.bottom = "");
                if ("center-left" == g || "center-center" == g || "center-right" == g)f -= mh(b.c).height / 2;
                d = Math.round(d[1] + f) + "px";
                b.b.ze != d && (b.b.ze = c.top = d)
            }
            b.b.visible || (oh(b.c, !0), b.b.visible = !0)
        } else b.b.visible && (oh(b.c, !1), b.b.visible = !1)
    };
    function dr(b) {
        b = m(b) ? b : {};
        this.i = m(b.collapsed) ? b.collapsed : !0;
        this.j = m(b.collapsible) ? b.collapsible : !0;
        this.j || (this.i = !1);
        var c = m(b.className) ? b.className : "ol-overviewmap", d = m(b.tipLabel) ? b.tipLabel : "Overview map", e = m(b.collapseLabel) ? b.collapseLabel : "\u00ab";
        this.u = ia(e) ? Mg("SPAN", {}, e) : e;
        e = m(b.label) ? b.label : "\u00bb";
        this.A = ia(e) ? Mg("SPAN", {}, e) : e;
        d = Mg("BUTTON", {type: "button", title: d}, this.j && !this.i ? this.u : this.A);
        x(d, "click", this.il, !1, this);
        xh(d);
        var e = Mg("DIV", "ol-overviewmap-map"), f = this.f =
            new X({controls: new rg, interactions: new rg, target: e});
        m(b.layers) && b.layers.forEach(function (b) {
            f.Pf(b)
        }, this);
        var g = Mg("DIV", "ol-overviewmap-box");
        this.l = new ar({position: [0, 0], positioning: "bottom-left", element: g});
        this.f.Qf(this.l);
        c = Mg("DIV", c + " ol-unselectable ol-control" + (this.i && this.j ? " ol-collapsed" : "") + (this.j ? "" : " ol-uncollapsible"), e, d);
        wh.call(this, {element: c, render: m(b.render) ? b.render : er, target: b.target})
    }

    w(dr, wh);
    k = dr.prototype;
    k.setMap = function (b) {
        var c = this.b;
        b !== c && (c && (c = c.X()) && Wc(c, id("rotation"), this.Wd, !1, this), dr.$.setMap.call(this, b), b && (this.v.push(x(b, "propertychange", this.$j, !1, this)), 0 === this.f.Bg().Qb() && this.f.zh(b.ac()), b = b.X())) && (x(b, id("rotation"), this.Wd, !1, this), Tf(b) && (this.f.Rc(), fr(this)))
    };
    k.$j = function (b) {
        "view" === b.key && ((b = b.oldValue) && Wc(b, id("rotation"), this.Wd, !1, this), b = this.b.X(), x(b, id("rotation"), this.Wd, !1, this))
    };
    k.Wd = function () {
        this.f.X().fe(this.b.X().Ea())
    };
    function er() {
        var b = this.b, c = this.f;
        if (null !== b.c && null !== c.c) {
            var d = b.Ca(), b = b.X().Vc(d), e = c.Ca(), d = c.X().Vc(e), f = c.ya(de(b)), c = c.ya(be(b)), c = new Eg(Math.abs(f[0] - c[0]), Math.abs(f[1] - c[1])), f = e[0], e = e[1];
            c.width < .1 * f || c.height < .1 * e || c.width > .75 * f || c.height > .75 * e ? fr(this) : Ud(d, b) || (b = this.f, d = this.b.X(), b.X().eb(d.Ka()))
        }
        gr(this)
    }

    function fr(b) {
        var c = b.b;
        b = b.f;
        var d = c.Ca(), c = c.X().Vc(d), d = b.Ca();
        b = b.X();
        var e = Math.log(7.5) / Math.LN2;
        le(c, 1 / (.1 * Math.pow(2, e / 2)));
        b.Qe(c, d)
    }

    function gr(b) {
        var c = b.b, d = b.f;
        if (null !== c.c && null !== d.c) {
            var e = c.Ca(), f = c.X(), g = d.X();
            d.Ca();
            var c = f.Ea(), h = b.l, d = b.l.de(), f = f.Vc(e), e = g.Da(), g = ae(f), f = ce(f), l;
            b = b.b.X().Ka();
            m(b) && (l = [g[0] - b[0], g[1] - b[1]], sd(l, c), nd(l, b));
            h.kf(l);
            null != d && (l = new Eg(Math.abs((g[0] - f[0]) / e), Math.abs((f[1] - g[1]) / e)), c = Xg(Fg(Hg(d))), !Jb || Sb("10") || c && Sb("8") ? (d = d.style, Kb ? d.MozBoxSizing = "border-box" : Lb ? d.WebkitBoxSizing = "border-box" : d.boxSizing = "border-box", d.width = Math.max(l.width, 0) + "px", d.height = Math.max(l.height,
                    0) + "px") : (b = d.style, c ? (c = rh(d, "padding"), d = uh(d), b.pixelWidth = l.width - d.left - c.left - c.right - d.right, b.pixelHeight = l.height - d.top - c.top - c.bottom - d.bottom) : (b.pixelWidth = l.width, b.pixelHeight = l.height)))
        }
    }

    k.il = function (b) {
        b.preventDefault();
        hr(this)
    };
    function hr(b) {
        ch(b.element, "ol-collapsed");
        b.i ? Ug(b.u, b.A) : Ug(b.A, b.u);
        b.i = !b.i;
        var c = b.f;
        b.i || null !== c.c || (c.Rc(), fr(b), Vc(c, "postrender", function () {
            gr(this)
        }, !1, b))
    }

    k.hl = function () {
        return this.j
    };
    k.kl = function (b) {
        this.j !== b && (this.j = b, ch(this.element, "ol-uncollapsible"), !b && this.i && hr(this))
    };
    k.jl = function (b) {
        this.j && this.i !== b && hr(this)
    };
    k.gl = function () {
        return this.i
    };
    function ir(b) {
        b = m(b) ? b : {};
        var c = m(b.className) ? b.className : "ol-scale-line";
        this.l = Mg("DIV", c + "-inner");
        this.j = Mg("DIV", c + " ol-unselectable", this.l);
        this.A = null;
        this.u = m(b.minWidth) ? b.minWidth : 64;
        this.f = !1;
        this.N = void 0;
        this.D = "";
        this.i = null;
        wh.call(this, {element: this.j, render: m(b.render) ? b.render : jr, target: b.target});
        x(this, id("units"), this.Z, !1, this);
        this.ba(b.units || "metric")
    }

    w(ir, wh);
    var kr = [1, 2, 5];
    ir.prototype.C = function () {
        return this.get("units")
    };
    function jr(b) {
        b = b.frameState;
        null === b ? this.A = null : this.A = b.viewState;
        lr(this)
    }

    ir.prototype.Z = function () {
        lr(this)
    };
    ir.prototype.ba = function (b) {
        this.set("units", b)
    };
    function lr(b) {
        var c = b.A;
        if (null === c)b.f && (oh(b.j, !1), b.f = !1); else {
            var d = c.center, e = c.projection, c = e.getPointResolution(c.resolution, d), f = e.b, g = b.C();
            "degrees" != f || "metric" != g && "imperial" != g && "us" != g && "nautical" != g ? "degrees" != f && "degrees" == g ? (null === b.i && (b.i = Ee(e, Ae("EPSG:4326"))), d = Math.cos(Zb(b.i(d)[1])), e = we.radius, e /= xe[f], c *= 180 / (Math.PI * d * e)) : b.i = null : (b.i = null, d = Math.cos(Zb(d[1])), c *= Math.PI * d * we.radius / 180);
            d = b.u * c;
            f = "";
            "degrees" == g ? d < 1 / 60 ? (f = "\u2033", c *= 3600) : 1 > d ? (f = "\u2032", c *= 60) : f = "\u00b0" :
                "imperial" == g ? .9144 > d ? (f = "in", c /= .0254) : 1609.344 > d ? (f = "ft", c /= .3048) : (f = "mi", c /= 1609.344) : "nautical" == g ? (c /= 1852, f = "nm") : "metric" == g ? 1 > d ? (f = "mm", c *= 1E3) : 1E3 > d ? f = "m" : (f = "km", c /= 1E3) : "us" == g && (.9144 > d ? (f = "in", c *= 39.37) : 1609.344 > d ? (f = "ft", c /= .30480061) : (f = "mi", c /= 1609.3472));
            for (d = 3 * Math.floor(Math.log(b.u * c) / Math.log(10)); ;) {
                e = kr[d % 3] * Math.pow(10, Math.floor(d / 3));
                g = Math.round(e / c);
                if (isNaN(g)) {
                    oh(b.j, !1);
                    b.f = !1;
                    return
                }
                if (g >= b.u)break;
                ++d
            }
            c = e + " " + f;
            b.D != c && (b.l.innerHTML = c, b.D = c);
            b.N != g && (b.l.style.width =
                g + "px", b.N = g);
            b.f || (oh(b.j, !0), b.f = !0)
        }
    };
    function mr(b) {
        nc.call(this);
        this.b = b;
        this.a = {}
    }

    w(mr, nc);
    var nr = [];
    mr.prototype.Ra = function (b, c, d, e) {
        ga(c) || (c && (nr[0] = c.toString()), c = nr);
        for (var f = 0; f < c.length; f++) {
            var g = x(b, c[f], d || this.handleEvent, e || !1, this.b || this);
            if (!g)break;
            this.a[g.key] = g
        }
        return this
    };
    mr.prototype.Cf = function (b, c, d, e, f) {
        if (ga(c))for (var g = 0; g < c.length; g++)this.Cf(b, c[g], d, e, f); else d = d || this.handleEvent, f = f || this.b || this, d = Pc(d), e = !!e, c = Cc(b) ? Kc(b.jb, String(c), d, e, f) : b ? (b = Rc(b)) ? Kc(b, c, d, e, f) : null : null, c && (Xc(c), delete this.a[c.key]);
        return this
    };
    function or(b) {
        pb(b.a, Xc);
        b.a = {}
    }

    mr.prototype.W = function () {
        mr.$.W.call(this);
        or(this)
    };
    mr.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    function pr(b, c, d) {
        ad.call(this);
        this.target = b;
        this.handle = c || b;
        this.a = d || new eh(NaN, NaN, NaN, NaN);
        this.c = Hg(b);
        this.b = new mr(this);
        qc(this, this.b);
        x(this.handle, ["touchstart", "mousedown"], this.Fh, !1, this)
    }

    w(pr, ad);
    var qr = Jb || Kb && Sb("1.9.3");
    k = pr.prototype;
    k.clientX = 0;
    k.clientY = 0;
    k.screenX = 0;
    k.screenY = 0;
    k.Gh = 0;
    k.Hh = 0;
    k.Dc = 0;
    k.Ec = 0;
    k.ec = !1;
    k.W = function () {
        pr.$.W.call(this);
        Wc(this.handle, ["touchstart", "mousedown"], this.Fh, !1, this);
        or(this.b);
        qr && this.c.releaseCapture();
        this.handle = this.target = null
    };
    k.Fh = function (b) {
        var c = "mousedown" == b.type;
        if (this.ec || c && !Ac(b))C(this, "earlycancel"); else if (rr(b), C(this, new sr("start", this, b.clientX, b.clientY))) {
            this.ec = !0;
            b.preventDefault();
            var c = this.c, d = c.documentElement, e = !qr;
            this.b.Ra(c, ["touchmove", "mousemove"], this.ck, e);
            this.b.Ra(c, ["touchend", "mouseup"], this.Id, e);
            qr ? (d.setCapture(!1), this.b.Ra(d, "losecapture", this.Id)) : this.b.Ra(c ? c.parentWindow || c.defaultView : window, "blur", this.Id);
            this.g && this.b.Ra(this.g, "scroll", this.bn, e);
            this.clientX = this.Gh =
                b.clientX;
            this.clientY = this.Hh = b.clientY;
            this.screenX = b.screenX;
            this.screenY = b.screenY;
            this.Dc = this.target.offsetLeft;
            this.Ec = this.target.offsetTop;
            this.f = Yg(Fg(this.c));
            ua()
        }
    };
    k.Id = function (b) {
        or(this.b);
        qr && this.c.releaseCapture();
        if (this.ec) {
            rr(b);
            this.ec = !1;
            var c = tr(this, this.Dc), d = ur(this, this.Ec);
            C(this, new sr("end", this, b.clientX, b.clientY, 0, c, d))
        } else C(this, "earlycancel")
    };
    function rr(b) {
        var c = b.type;
        "touchstart" == c || "touchmove" == c ? yc(b, b.a.targetTouches[0], b.c) : "touchend" != c && "touchcancel" != c || yc(b, b.a.changedTouches[0], b.c)
    }

    k.ck = function (b) {
        rr(b);
        var c = 1 * (b.clientX - this.clientX), d = b.clientY - this.clientY;
        this.clientX = b.clientX;
        this.clientY = b.clientY;
        this.screenX = b.screenX;
        this.screenY = b.screenY;
        if (!this.ec) {
            var e = this.Gh - this.clientX, f = this.Hh - this.clientY;
            if (0 < e * e + f * f)if (C(this, new sr("start", this, b.clientX, b.clientY)))this.ec = !0; else {
                this.ea || this.Id(b);
                return
            }
        }
        d = vr(this, c, d);
        c = d.x;
        d = d.y;
        this.ec && C(this, new sr("beforedrag", this, b.clientX, b.clientY, 0, c, d)) && (wr(this, b, c, d), b.preventDefault())
    };
    function vr(b, c, d) {
        var e = Yg(Fg(b.c));
        c += e.x - b.f.x;
        d += e.y - b.f.y;
        b.f = e;
        b.Dc += c;
        b.Ec += d;
        c = tr(b, b.Dc);
        b = ur(b, b.Ec);
        return new Dg(c, b)
    }

    k.bn = function (b) {
        var c = vr(this, 0, 0);
        b.clientX = this.clientX;
        b.clientY = this.clientY;
        wr(this, b, c.x, c.y)
    };
    function wr(b, c, d, e) {
        b.target.style.left = d + "px";
        b.target.style.top = e + "px";
        C(b, new sr("drag", b, c.clientX, c.clientY, 0, d, e))
    }

    function tr(b, c) {
        var d = b.a, e = isNaN(d.left) ? null : d.left, d = isNaN(d.width) ? 0 : d.width;
        return Math.min(null != e ? e + d : Infinity, Math.max(null != e ? e : -Infinity, c))
    }

    function ur(b, c) {
        var d = b.a, e = isNaN(d.top) ? null : d.top, d = isNaN(d.height) ? 0 : d.height;
        return Math.min(null != e ? e + d : Infinity, Math.max(null != e ? e : -Infinity, c))
    }

    function sr(b, c, d, e, f, g, h) {
        sc.call(this, b);
        this.clientX = d;
        this.clientY = e;
        this.left = m(g) ? g : c.Dc;
        this.top = m(h) ? h : c.Ec
    }

    w(sr, sc);
    function xr(b) {
        b = m(b) ? b : {};
        this.i = void 0;
        this.j = yr;
        this.l = null;
        this.A = !1;
        this.u = m(b.duration) ? b.duration : 200;
        var c = m(b.className) ? b.className : "ol-zoomslider", d = Mg("DIV", [c + "-thumb", "ol-unselectable"]), c = Mg("DIV", [c, "ol-unselectable", "ol-control"], d);
        this.f = new pr(d);
        qc(this, this.f);
        x(this.f, "start", this.Mj, !1, this);
        x(this.f, "drag", this.Kj, !1, this);
        x(this.f, "end", this.Lj, !1, this);
        x(c, "click", this.Jj, !1, this);
        x(d, "click", tc);
        wh.call(this, {element: c, render: m(b.render) ? b.render : zr})
    }

    w(xr, wh);
    var yr = 0;
    k = xr.prototype;
    k.setMap = function (b) {
        xr.$.setMap.call(this, b);
        null === b || b.render()
    };
    function zr(b) {
        if (null !== b.frameState) {
            if (!this.A) {
                var c = this.element, d = mh(c), e = Vg(c), c = rh(e, "margin"), f = new Eg(e.offsetWidth, e.offsetHeight), e = f.width + c.right + c.left, c = f.height + c.top + c.bottom;
                this.l = [e, c];
                e = d.width - e;
                c = d.height - c;
                d.width > d.height ? (this.j = 1, d = new eh(0, 0, e, 0)) : (this.j = yr, d = new eh(0, 0, 0, c));
                this.f.a = d || new eh(NaN, NaN, NaN, NaN);
                this.A = !0
            }
            b = b.frameState.viewState.resolution;
            b !== this.i && (this.i = b, b = 1 - Rf(this.b.X())(b), d = this.f, c = Vg(this.element), 1 == this.j ? ih(c, d.a.left + d.a.width * b) : ih(c,
                d.a.left, d.a.top + d.a.height * b))
        }
    }

    k.Jj = function (b) {
        var c = this.b, d = c.X(), e = d.Da();
        c.Oa(ag({resolution: e, duration: this.u, easing: Vf}));
        b = Ar(this, b.offsetX - this.l[0] / 2, b.offsetY - this.l[1] / 2);
        b = Br(this, b);
        d.Xb(d.constrainResolution(b))
    };
    k.Mj = function () {
        Uf(this.b.X(), 1)
    };
    k.Kj = function (b) {
        b = Ar(this, b.left, b.top);
        this.i = Br(this, b);
        this.b.X().Xb(this.i)
    };
    k.Lj = function () {
        var b = this.b, c = b.X();
        Uf(c, -1);
        b.Oa(ag({resolution: this.i, duration: this.u, easing: Vf}));
        b = c.constrainResolution(this.i);
        c.Xb(b)
    };
    function Ar(b, c, d) {
        var e = b.f.a;
        return Wb(1 === b.j ? (c - e.left) / e.width : (d - e.top) / e.height, 0, 1)
    }

    function Br(b, c) {
        return Pf(b.b.X())(1 - c)
    };
    function Cr(b) {
        b = m(b) ? b : {};
        this.f = m(b.extent) ? b.extent : null;
        var c = m(b.className) ? b.className : "ol-zoom-extent", d = Mg("BUTTON", {
            type: "button",
            title: m(b.tipLabel) ? b.tipLabel : "Fit to extent"
        }, m(b.label) ? b.label : "E");
        x(d, "click", this.i, !1, this);
        xh(d);
        c = Mg("DIV", c + " ol-unselectable ol-control", d);
        wh.call(this, {element: c, target: b.target})
    }

    w(Cr, wh);
    Cr.prototype.i = function (b) {
        b.preventDefault();
        var c = this.b;
        b = c.X();
        var d = null === this.f ? b.g.R() : this.f, c = c.Ca();
        b.Qe(d, c)
    };
    function Dr(b) {
        gd.call(this);
        b = m(b) ? b : {};
        this.b = null;
        x(this, id("tracking"), this.Lk, !1, this);
        this.gf(m(b.tracking) ? b.tracking : !1)
    }

    w(Dr, gd);
    k = Dr.prototype;
    k.W = function () {
        this.gf(!1);
        Dr.$.W.call(this)
    };
    k.cn = function (b) {
        b = b.a;
        if (null != b.alpha) {
            var c = Zb(b.alpha);
            this.set("alpha", c);
            "boolean" == typeof b.absolute && b.absolute ? this.set("heading", c) : null != b.webkitCompassHeading && null != b.webkitCompassAccuracy && -1 != b.webkitCompassAccuracy && this.set("heading", Zb(b.webkitCompassHeading))
        }
        null != b.beta && this.set("beta", Zb(b.beta));
        null != b.gamma && this.set("gamma", Zb(b.gamma));
        this.s()
    };
    k.Qi = function () {
        return this.get("alpha")
    };
    k.Ti = function () {
        return this.get("beta")
    };
    k.bj = function () {
        return this.get("gamma")
    };
    k.Kk = function () {
        return this.get("heading")
    };
    k.xg = function () {
        return this.get("tracking")
    };
    k.Lk = function () {
        if (gj) {
            var b = this.xg();
            b && null === this.b ? this.b = x(ba, "deviceorientation", this.cn, !1, this) : b || null === this.b || (Xc(this.b), this.b = null)
        }
    };
    k.gf = function (b) {
        this.set("tracking", b)
    };
    function Er() {
        this.defaultDataProjection = null
    }

    function Fr(b, c, d) {
        var e;
        m(d) && (e = {
            dataProjection: m(d.dataProjection) ? d.dataProjection : b.Ga(c),
            featureProjection: d.featureProjection
        });
        return Gr(b, e)
    }

    function Gr(b, c) {
        var d;
        m(c) && (d = {
            featureProjection: c.featureProjection,
            dataProjection: null != c.dataProjection ? c.dataProjection : b.defaultDataProjection,
            rightHanded: c.rightHanded
        });
        return d
    }

    function Hr(b, c, d) {
        var e = m(d) ? Ae(d.featureProjection) : null;
        d = m(d) ? Ae(d.dataProjection) : null;
        return null === e || null === d || Se(e, d) ? b : b instanceof Xe ? (c ? b.clone() : b).transform(c ? e : d, c ? d : e) : We(c ? b.slice() : b, c ? e : d, c ? d : e)
    };
    function Ir() {
        this.defaultDataProjection = null
    }

    w(Ir, Er);
    function Jr(b) {
        return la(b) ? b : ia(b) ? (b = Zn(b), m(b) ? b : null) : null
    }

    k = Ir.prototype;
    k.U = function () {
        return "json"
    };
    k.Eb = function (b, c) {
        return this.Mc(Jr(b), Fr(this, b, c))
    };
    k.qa = function (b, c) {
        return this.uf(Jr(b), Fr(this, b, c))
    };
    k.Nc = function (b, c) {
        return this.ih(Jr(b), Fr(this, b, c))
    };
    k.Ga = function (b) {
        return this.oh(Jr(b))
    };
    k.xd = function (b, c) {
        return $n(this.Sc(b, c))
    };
    k.Fb = function (b, c) {
        return $n(this.Ce(b, c))
    };
    k.Tc = function (b, c) {
        return $n(this.Ee(b, c))
    };
    function Kr(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.a = b.geometryName
    }

    w(Kr, Ir);
    function Lr(b, c) {
        if (null === b)return null;
        var d;
        if (ja(b.x) && ja(b.y))d = "Point"; else if (null != b.points)d = "MultiPoint"; else if (null != b.paths)d = 1 === b.paths.length ? "LineString" : "MultiLineString"; else if (null != b.rings) {
            var e = b.rings, f = Mr(b), g = [];
            d = [];
            var h, l;
            h = 0;
            for (l = e.length; h < l; ++h) {
                var n = kb(e[h]);
                Df(n, 0, n.length, f.length) ? g.push([e[h]]) : d.push(e[h])
            }
            for (; d.length;) {
                e = d.shift();
                f = !1;
                for (h = g.length - 1; 0 <= h; h--)if (Ud((new tf(g[h][0])).R(), (new tf(e)).R())) {
                    g[h].push(e);
                    f = !0;
                    break
                }
                f || g.push([e.reverse()])
            }
            b =
                Db(b);
            1 === g.length ? (d = "Polygon", b.rings = g[0]) : (d = "MultiPolygon", b.rings = g)
        }
        return Hr((0, Nr[d])(b), !1, c)
    }

    function Mr(b) {
        var c = "XY";
        !0 === b.hasZ && !0 === b.hasM ? c = "XYZM" : !0 === b.hasZ ? c = "XYZ" : !0 === b.hasM && (c = "XYM");
        return c
    }

    function Or(b) {
        b = b.b;
        return {hasZ: "XYZ" === b || "XYZM" === b, hasM: "XYM" === b || "XYZM" === b}
    }

    var Nr = {
        Point: function (b) {
            return null != b.m && null != b.z ? new D([b.x, b.y, b.z, b.m], "XYZM") : null != b.z ? new D([b.x, b.y, b.z], "XYZ") : null != b.m ? new D([b.x, b.y, b.m], "XYM") : new D([b.x, b.y])
        }, LineString: function (b) {
            return new N(b.paths[0], Mr(b))
        }, Polygon: function (b) {
            return new F(b.rings, Mr(b))
        }, MultiPoint: function (b) {
            return new kn(b.points, Mr(b))
        }, MultiLineString: function (b) {
            return new O(b.paths, Mr(b))
        }, MultiPolygon: function (b) {
            return new P(b.rings, Mr(b))
        }
    }, Pr = {
        Point: function (b) {
            var c = b.V();
            b = b.b;
            if ("XYZ" === b)return {
                x: c[0],
                y: c[1], z: c[2]
            };
            if ("XYM" === b)return {x: c[0], y: c[1], m: c[2]};
            if ("XYZM" === b)return {x: c[0], y: c[1], z: c[2], m: c[3]};
            if ("XY" === b)return {x: c[0], y: c[1]}
        }, LineString: function (b) {
            var c = Or(b);
            return {hasZ: c.hasZ, hasM: c.hasM, paths: [b.V()]}
        }, Polygon: function (b) {
            var c = Or(b);
            return {hasZ: c.hasZ, hasM: c.hasM, rings: b.V(!1)}
        }, MultiPoint: function (b) {
            var c = Or(b);
            return {hasZ: c.hasZ, hasM: c.hasM, points: b.V()}
        }, MultiLineString: function (b) {
            var c = Or(b);
            return {hasZ: c.hasZ, hasM: c.hasM, paths: b.V()}
        }, MultiPolygon: function (b) {
            var c = Or(b);
            b = b.V(!1);
            for (var d = [], e = 0; e < b.length; e++)for (var f = b[e].length - 1; 0 <= f; f--)d.push(b[e][f]);
            return {hasZ: c.hasZ, hasM: c.hasM, rings: d}
        }
    };
    k = Kr.prototype;
    k.Mc = function (b, c) {
        var d = Lr(b.geometry, c), e = new An;
        m(this.a) && e.Pc(this.a);
        e.Sa(d);
        m(c) && m(c.bf) && m(b.attributes[c.bf]) && e.Wb(b.attributes[c.bf]);
        m(b.attributes) && e.I(b.attributes);
        return e
    };
    k.uf = function (b, c) {
        var d = m(c) ? c : {};
        if (null != b.features) {
            var e = [], f = b.features, g, h;
            d.bf = b.objectIdFieldName;
            g = 0;
            for (h = f.length; g < h; ++g)e.push(this.Mc(f[g], d));
            return e
        }
        return [this.Mc(b, d)]
    };
    k.ih = function (b, c) {
        return Lr(b, c)
    };
    k.oh = function (b) {
        return null != b.spatialReference && null != b.spatialReference.wkid ? Ae("EPSG:" + b.spatialReference.wkid) : null
    };
    function Qr(b, c) {
        return (0, Pr[b.U()])(Hr(b, !0, c), c)
    }

    k.Ee = function (b, c) {
        return Qr(b, Gr(this, c))
    };
    k.Sc = function (b, c) {
        c = Gr(this, c);
        var d = {}, e = b.Y();
        null != e && (d.geometry = Qr(e, c));
        e = b.P();
        zb(e, b.b);
        d.attributes = xb(e) ? {} : e;
        m(c) && m(c.featureProjection) && (d.spatialReference = {wkid: Ae(c.featureProjection).a.split(":").pop()});
        return d
    };
    k.Ce = function (b, c) {
        c = Gr(this, c);
        var d = [], e, f;
        e = 0;
        for (f = b.length; e < f; ++e)d.push(this.Sc(b[e], c));
        return {features: d}
    };
    function Rr(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ae(null != b.defaultDataProjection ? b.defaultDataProjection : "EPSG:4326");
        this.a = b.geometryName
    }

    w(Rr, Ir);
    function Sr(b, c) {
        return null === b ? null : Hr((0, Tr[b.type])(b), !1, c)
    }

    function Ur(b, c) {
        return (0, Vr[b.U()])(Hr(b, !0, c), c)
    }

    var Tr = {
        Point: function (b) {
            return new D(b.coordinates)
        }, LineString: function (b) {
            return new N(b.coordinates)
        }, Polygon: function (b) {
            return new F(b.coordinates)
        }, MultiPoint: function (b) {
            return new kn(b.coordinates)
        }, MultiLineString: function (b) {
            return new O(b.coordinates)
        }, MultiPolygon: function (b) {
            return new P(b.coordinates)
        }, GeometryCollection: function (b, c) {
            var d = Ua(b.geometries, function (b) {
                return Sr(b, c)
            });
            return new $m(d)
        }
    }, Vr = {
        Point: function (b) {
            return {type: "Point", coordinates: b.V()}
        }, LineString: function (b) {
            return {
                type: "LineString",
                coordinates: b.V()
            }
        }, Polygon: function (b, c) {
            var d;
            m(c) && (d = c.rightHanded);
            return {type: "Polygon", coordinates: b.V(d)}
        }, MultiPoint: function (b) {
            return {type: "MultiPoint", coordinates: b.V()}
        }, MultiLineString: function (b) {
            return {type: "MultiLineString", coordinates: b.V()}
        }, MultiPolygon: function (b, c) {
            var d;
            m(c) && (d = c.rightHanded);
            return {type: "MultiPolygon", coordinates: b.V(d)}
        }, GeometryCollection: function (b, c) {
            return {
                type: "GeometryCollection", geometries: Ua(b.f, function (b) {
                    return Ur(b, c)
                })
            }
        }, Circle: function () {
            return {
                type: "GeometryCollection",
                geometries: []
            }
        }
    };
    k = Rr.prototype;
    k.Mc = function (b, c) {
        var d = Sr(b.geometry, c), e = new An;
        m(this.a) && e.Pc(this.a);
        e.Sa(d);
        m(b.id) && e.Wb(b.id);
        m(b.properties) && e.I(b.properties);
        return e
    };
    k.uf = function (b, c) {
        if ("Feature" == b.type)return [this.Mc(b, c)];
        if ("FeatureCollection" == b.type) {
            var d = [], e = b.features, f, g;
            f = 0;
            for (g = e.length; f < g; ++f)d.push(this.Mc(e[f], c));
            return d
        }
        return []
    };
    k.ih = function (b, c) {
        return Sr(b, c)
    };
    k.oh = function (b) {
        b = b.crs;
        return null != b ? "name" == b.type ? Ae(b.properties.name) : "EPSG" == b.type ? Ae("EPSG:" + b.properties.code) : null : this.defaultDataProjection
    };
    k.Sc = function (b, c) {
        c = Gr(this, c);
        var d = {type: "Feature"}, e = b.ha;
        null != e && (d.id = e);
        e = b.Y();
        d.geometry = null != e ? Ur(e, c) : null;
        e = b.P();
        zb(e, b.b);
        d.properties = xb(e) ? null : e;
        return d
    };
    k.Ce = function (b, c) {
        c = Gr(this, c);
        var d = [], e, f;
        e = 0;
        for (f = b.length; e < f; ++e)d.push(this.Sc(b[e], c));
        return {type: "FeatureCollection", features: d}
    };
    k.Ee = function (b, c) {
        return Ur(b, Gr(this, c))
    };
    function Wr() {
        this.defaultDataProjection = null
    }

    w(Wr, Er);
    k = Wr.prototype;
    k.U = function () {
        return "xml"
    };
    k.Eb = function (b, c) {
        if (So(b))return Xr(this, b, c);
        if (Vo(b))return this.gh(b, c);
        if (ia(b)) {
            var d = ep(b);
            return Xr(this, d, c)
        }
        return null
    };
    function Xr(b, c, d) {
        b = Yr(b, c, d);
        return 0 < b.length ? b[0] : null
    }

    k.qa = function (b, c) {
        if (So(b))return Yr(this, b, c);
        if (Vo(b))return this.Ub(b, c);
        if (ia(b)) {
            var d = ep(b);
            return Yr(this, d, c)
        }
        return []
    };
    function Yr(b, c, d) {
        var e = [];
        for (c = c.firstChild; null !== c; c = c.nextSibling)1 == c.nodeType && cb(e, b.Ub(c, d));
        return e
    }

    k.Nc = function (b, c) {
        if (So(b))return this.v(b, c);
        if (Vo(b)) {
            var d = this.te(b, [Fr(this, b, m(c) ? c : {})]);
            return m(d) ? d : null
        }
        return ia(b) ? (d = ep(b), this.v(d, c)) : null
    };
    k.Ga = function (b) {
        return So(b) ? this.yf(b) : Vo(b) ? this.we(b) : ia(b) ? (b = ep(b), this.yf(b)) : null
    };
    k.yf = function () {
        return this.defaultDataProjection
    };
    k.we = function () {
        return this.defaultDataProjection
    };
    k.xd = function (b, c) {
        var d = this.A(b, c);
        return Do(d)
    };
    k.Fb = function (b, c) {
        var d = this.b(b, c);
        return Do(d)
    };
    k.Tc = function (b, c) {
        var d = this.B(b, c);
        return Do(d)
    };
    function Zr(b) {
        b = m(b) ? b : {};
        this.featureType = b.featureType;
        this.featureNS = b.featureNS;
        this.srsName = b.srsName;
        this.schemaLocation = "";
        this.a = {};
        this.a["http://www.opengis.net/gml"] = {
            featureMember: hp(Zr.prototype.sd),
            featureMembers: hp(Zr.prototype.sd)
        };
        this.defaultDataProjection = null
    }

    w(Zr, Wr);
    k = Zr.prototype;
    k.sd = function (b, c) {
        var d = Po(b), e;
        if ("FeatureCollection" == d)"http://www.opengis.net/wfs" === b.namespaceURI ? e = V([], this.a, b, c, this) : e = V(null, this.a, b, c, this); else if ("featureMembers" == d || "featureMember" == d) {
            var f = c[0], g = f.featureType;
            e = f.featureNS;
            var h, l;
            if (!m(g) && null != b.childNodes) {
                g = [];
                e = {};
                h = 0;
                for (l = b.childNodes.length; h < l; ++h) {
                    var n = b.childNodes[h];
                    if (1 === n.nodeType) {
                        var p = n.nodeName.split(":").pop();
                        if (-1 === Ra(g, p)) {
                            var q;
                            vb(e, n.namespaceURI) ? q = wb(e, function (b) {
                                return b === n.namespaceURI
                            }) : (q =
                                "p" + rb(e), e[q] = n.namespaceURI);
                            g.push(q + ":" + p)
                        }
                    }
                }
                f.featureType = g;
                f.featureNS = e
            }
            ia(e) && (h = e, e = {}, e.p0 = h);
            var f = {}, g = ga(g) ? g : [g], r;
            for (r in e) {
                p = {};
                h = 0;
                for (l = g.length; h < l; ++h)(-1 === g[h].indexOf(":") ? "p0" : g[h].split(":")[0]) === r && (p[g[h].split(":").pop()] = "featureMembers" == d ? gp(this.tf, this) : hp(this.tf, this));
                f[e[r]] = p
            }
            e = V([], f, b, c)
        }
        m(e) || (e = []);
        return e
    };
    k.te = function (b, c) {
        var d = c[0];
        d.srsName = b.firstElementChild.getAttribute("srsName");
        var e = V(null, this.If, b, c, this);
        if (null != e)return Hr(e, !1, d)
    };
    k.tf = function (b, c) {
        var d, e = b.getAttribute("fid") || Zo(b, "http://www.opengis.net/gml", "id"), f = {}, g;
        for (d = b.firstElementChild; null !== d; d = d.nextElementSibling) {
            var h = Po(d);
            if (0 === d.childNodes.length || 1 === d.childNodes.length && (3 === d.firstChild.nodeType || 4 === d.firstChild.nodeType)) {
                var l = Lo(d, !1);
                /^[\s\xa0]*$/.test(l) && (l = void 0);
                f[h] = l
            } else"boundedBy" !== h && (g = h), f[h] = this.te(d, c)
        }
        d = new An(f);
        m(g) && d.Pc(g);
        e && d.Wb(e);
        return d
    };
    k.nh = function (b, c) {
        var d = this.se(b, c);
        if (null != d) {
            var e = new D(null);
            vf(e, "XYZ", d);
            return e
        }
    };
    k.lh = function (b, c) {
        var d = V([], this.ci, b, c, this);
        if (m(d))return new kn(d)
    };
    k.kh = function (b, c) {
        var d = V([], this.bi, b, c, this);
        if (m(d)) {
            var e = new O(null);
            jn(e, d);
            return e
        }
    };
    k.mh = function (b, c) {
        var d = V([], this.di, b, c, this);
        if (m(d)) {
            var e = new P(null);
            mn(e, d);
            return e
        }
    };
    k.bh = function (b, c) {
        pp(this.gi, b, c, this)
    };
    k.tg = function (b, c) {
        pp(this.$h, b, c, this)
    };
    k.dh = function (b, c) {
        pp(this.hi, b, c, this)
    };
    k.ue = function (b, c) {
        var d = this.se(b, c);
        if (null != d) {
            var e = new N(null);
            gn(e, "XYZ", d);
            return e
        }
    };
    k.vn = function (b, c) {
        var d = V(null, this.zd, b, c, this);
        if (null != d)return d
    };
    k.jh = function (b, c) {
        var d = this.se(b, c);
        if (m(d)) {
            var e = new tf(null);
            uf(e, "XYZ", d);
            return e
        }
    };
    k.ve = function (b, c) {
        var d = V([null], this.Ge, b, c, this);
        if (m(d) && null !== d[0]) {
            var e = new F(null), f = d[0], g = [f.length], h, l;
            h = 1;
            for (l = d.length; h < l; ++h)cb(f, d[h]), g.push(f.length);
            Hf(e, "XYZ", f, g);
            return e
        }
    };
    k.se = function (b, c) {
        return V(null, this.zd, b, c, this)
    };
    k.ci = Object({
        "http://www.opengis.net/gml": {
            pointMember: gp(Zr.prototype.bh),
            pointMembers: gp(Zr.prototype.bh)
        }
    });
    k.bi = Object({
        "http://www.opengis.net/gml": {
            lineStringMember: gp(Zr.prototype.tg),
            lineStringMembers: gp(Zr.prototype.tg)
        }
    });
    k.di = Object({
        "http://www.opengis.net/gml": {
            polygonMember: gp(Zr.prototype.dh),
            polygonMembers: gp(Zr.prototype.dh)
        }
    });
    k.gi = Object({"http://www.opengis.net/gml": {Point: gp(Zr.prototype.se)}});
    k.$h = Object({"http://www.opengis.net/gml": {LineString: gp(Zr.prototype.ue)}});
    k.hi = Object({"http://www.opengis.net/gml": {Polygon: gp(Zr.prototype.ve)}});
    k.Ad = Object({"http://www.opengis.net/gml": {LinearRing: hp(Zr.prototype.vn)}});
    k.Ub = function (b, c) {
        var d = {featureType: this.featureType, featureNS: this.featureNS};
        m(c) && Gb(d, Fr(this, b, c));
        return this.sd(b, [d])
    };
    k.we = function (b) {
        return Ae(m(this.u) ? this.u : b.firstElementChild.getAttribute("srsName"))
    };
    function $r(b) {
        b = Lo(b, !1);
        return as(b)
    }

    function as(b) {
        if (b = /^\s*(true|1)|(false|0)\s*$/.exec(b))return m(b[1]) || !1
    }

    function bs(b) {
        b = Lo(b, !1);
        if (b = /^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?))\s*$/.exec(b)) {
            var c = Date.UTC(parseInt(b[1], 10), parseInt(b[2], 10) - 1, parseInt(b[3], 10), parseInt(b[4], 10), parseInt(b[5], 10), parseInt(b[6], 10)) / 1E3;
            if ("Z" != b[7]) {
                var d = "-" == b[8] ? -1 : 1, c = c + 60 * d * parseInt(b[9], 10);
                m(b[10]) && (c += 3600 * d * parseInt(b[10], 10))
            }
            return c
        }
    }

    function cs(b) {
        b = Lo(b, !1);
        return ds(b)
    }

    function ds(b) {
        if (b = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(b))return parseFloat(b[1])
    }

    function es(b) {
        b = Lo(b, !1);
        return fs(b)
    }

    function fs(b) {
        if (b = /^\s*(\d+)\s*$/.exec(b))return parseInt(b[1], 10)
    }

    function Y(b) {
        b = Lo(b, !1);
        return Ca(b)
    }

    function gs(b, c) {
        hs(b, c ? "1" : "0")
    }

    function is(b, c) {
        b.appendChild(Ho.createTextNode(c.toPrecision()))
    }

    function js(b, c) {
        b.appendChild(Ho.createTextNode(c.toString()))
    }

    function hs(b, c) {
        b.appendChild(Ho.createTextNode(c))
    };
    function ks(b) {
        b = m(b) ? b : {};
        Zr.call(this, b);
        this.l = m(b.surface) ? b.surface : !1;
        this.g = m(b.curve) ? b.curve : !1;
        this.i = m(b.multiCurve) ? b.multiCurve : !0;
        this.j = m(b.multiSurface) ? b.multiSurface : !0;
        this.schemaLocation = m(b.schemaLocation) ? b.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd"
    }

    w(ks, Zr);
    k = ks.prototype;
    k.yn = function (b, c) {
        var d = V([], this.ai, b, c, this);
        if (m(d)) {
            var e = new O(null);
            jn(e, d);
            return e
        }
    };
    k.zn = function (b, c) {
        var d = V([], this.ei, b, c, this);
        if (m(d)) {
            var e = new P(null);
            mn(e, d);
            return e
        }
    };
    k.Tf = function (b, c) {
        pp(this.Xh, b, c, this)
    };
    k.Ih = function (b, c) {
        pp(this.ki, b, c, this)
    };
    k.Cn = function (b, c) {
        return V([null], this.fi, b, c, this)
    };
    k.En = function (b, c) {
        return V([null], this.ji, b, c, this)
    };
    k.Dn = function (b, c) {
        return V([null], this.Ge, b, c, this)
    };
    k.xn = function (b, c) {
        return V([null], this.zd, b, c, this)
    };
    k.sk = function (b, c) {
        var d = V(void 0, this.Ad, b, c, this);
        m(d) && c[c.length - 1].push(d)
    };
    k.Ji = function (b, c) {
        var d = V(void 0, this.Ad, b, c, this);
        m(d) && (c[c.length - 1][0] = d)
    };
    k.ph = function (b, c) {
        var d = V([null], this.li, b, c, this);
        if (m(d) && null !== d[0]) {
            var e = new F(null), f = d[0], g = [f.length], h, l;
            h = 1;
            for (l = d.length; h < l; ++h)cb(f, d[h]), g.push(f.length);
            Hf(e, "XYZ", f, g);
            return e
        }
    };
    k.eh = function (b, c) {
        var d = V([null], this.Yh, b, c, this);
        if (m(d)) {
            var e = new N(null);
            gn(e, "XYZ", d);
            return e
        }
    };
    k.tn = function (b, c) {
        var d = V([null], this.Zh, b, c, this);
        return Od(d[1][0], d[1][1], d[2][0], d[2][1])
    };
    k.wn = function (b, c) {
        for (var d = Lo(b, !1), e = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/, f = [], g; g = e.exec(d);)f.push(parseFloat(g[1])), d = d.substr(g[0].length);
        if ("" === d) {
            d = c[0].srsName;
            e = "enu";
            null === d || (e = De(Ae(d)));
            if ("neu" === e)for (d = 0, e = f.length; d < e; d += 3)g = f[d], f[d] = f[d + 1], f[d + 1] = g;
            d = f.length;
            2 == d && f.push(0);
            return 0 === d ? void 0 : f
        }
    };
    k.wf = function (b, c) {
        var d = Lo(b, !1).replace(/^\s*|\s*$/g, ""), e = c[0].srsName, f = b.parentNode.getAttribute("srsDimension"), g = "enu";
        null === e || (g = De(Ae(e)));
        d = d.split(/\s+/);
        e = 2;
        fa(b.getAttribute("srsDimension")) ? fa(b.getAttribute("dimension")) ? null === f || (e = fs(f)) : e = fs(b.getAttribute("dimension")) : e = fs(b.getAttribute("srsDimension"));
        for (var h, l, n = [], p = 0, q = d.length; p < q; p += e)f = parseFloat(d[p]), h = parseFloat(d[p + 1]), l = 3 === e ? parseFloat(d[p + 2]) : 0, "en" === g.substr(0, 2) ? n.push(f, h, l) : n.push(h, f, l);
        return n
    };
    k.zd = Object({"http://www.opengis.net/gml": {pos: hp(ks.prototype.wn), posList: hp(ks.prototype.wf)}});
    k.Ge = Object({"http://www.opengis.net/gml": {interior: ks.prototype.sk, exterior: ks.prototype.Ji}});
    k.If = Object({
        "http://www.opengis.net/gml": {
            Point: hp(Zr.prototype.nh),
            MultiPoint: hp(Zr.prototype.lh),
            LineString: hp(Zr.prototype.ue),
            MultiLineString: hp(Zr.prototype.kh),
            LinearRing: hp(Zr.prototype.jh),
            Polygon: hp(Zr.prototype.ve),
            MultiPolygon: hp(Zr.prototype.mh),
            Surface: hp(ks.prototype.ph),
            MultiSurface: hp(ks.prototype.zn),
            Curve: hp(ks.prototype.eh),
            MultiCurve: hp(ks.prototype.yn),
            Envelope: hp(ks.prototype.tn)
        }
    });
    k.ai = Object({
        "http://www.opengis.net/gml": {
            curveMember: gp(ks.prototype.Tf),
            curveMembers: gp(ks.prototype.Tf)
        }
    });
    k.ei = Object({
        "http://www.opengis.net/gml": {
            surfaceMember: gp(ks.prototype.Ih),
            surfaceMembers: gp(ks.prototype.Ih)
        }
    });
    k.Xh = Object({"http://www.opengis.net/gml": {LineString: gp(Zr.prototype.ue), Curve: gp(ks.prototype.eh)}});
    k.ki = Object({"http://www.opengis.net/gml": {Polygon: gp(Zr.prototype.ve), Surface: gp(ks.prototype.ph)}});
    k.li = Object({"http://www.opengis.net/gml": {patches: hp(ks.prototype.Cn)}});
    k.Yh = Object({"http://www.opengis.net/gml": {segments: hp(ks.prototype.En)}});
    k.Zh = Object({"http://www.opengis.net/gml": {lowerCorner: gp(ks.prototype.wf), upperCorner: gp(ks.prototype.wf)}});
    k.fi = Object({"http://www.opengis.net/gml": {PolygonPatch: hp(ks.prototype.Dn)}});
    k.ji = Object({"http://www.opengis.net/gml": {LineStringSegment: hp(ks.prototype.xn)}});
    function ls(b, c, d) {
        d = d[d.length - 1].srsName;
        c = c.V();
        for (var e = c.length, f = Array(e), g, h = 0; h < e; ++h) {
            g = c[h];
            var l = h, n = "enu";
            null != d && (n = De(Ae(d)));
            f[l] = "en" === n.substr(0, 2) ? g[0] + " " + g[1] : g[1] + " " + g[0]
        }
        hs(b, f.join(" "))
    }

    k.Sh = function (b, c, d) {
        var e = d[d.length - 1].srsName;
        null != e && b.setAttribute("srsName", e);
        e = Ko(b.namespaceURI, "pos");
        b.appendChild(e);
        d = d[d.length - 1].srsName;
        b = "enu";
        null != d && (b = De(Ae(d)));
        c = c.V();
        hs(e, "en" === b.substr(0, 2) ? c[0] + " " + c[1] : c[1] + " " + c[0])
    };
    var ms = {"http://www.opengis.net/gml": {lowerCorner: U(hs), upperCorner: U(hs)}};
    k = ks.prototype;
    k.to = function (b, c, d) {
        var e = d[d.length - 1].srsName;
        m(e) && b.setAttribute("srsName", e);
        qp({node: b}, ms, np, [c[0] + " " + c[1], c[2] + " " + c[3]], d, ["lowerCorner", "upperCorner"], this)
    };
    k.Ph = function (b, c, d) {
        var e = d[d.length - 1].srsName;
        null != e && b.setAttribute("srsName", e);
        e = Ko(b.namespaceURI, "posList");
        b.appendChild(e);
        ls(e, c, d)
    };
    k.ii = function (b, c) {
        var d = c[c.length - 1], e = d.node, f = d.exteriorWritten;
        m(f) || (d.exteriorWritten = !0);
        return Ko(e.namespaceURI, m(f) ? "interior" : "exterior")
    };
    k.Fe = function (b, c, d) {
        var e = d[d.length - 1].srsName;
        "PolygonPatch" !== b.nodeName && null != e && b.setAttribute("srsName", e);
        "Polygon" === b.nodeName || "PolygonPatch" === b.nodeName ? (c = c.Md(), qp({
            node: b,
            srsName: e
        }, ns, this.ii, c, d, void 0, this)) : "Surface" === b.nodeName && (e = Ko(b.namespaceURI, "patches"), b.appendChild(e), b = Ko(e.namespaceURI, "PolygonPatch"), e.appendChild(b), this.Fe(b, c, d))
    };
    k.Ae = function (b, c, d) {
        var e = d[d.length - 1].srsName;
        "LineStringSegment" !== b.nodeName && null != e && b.setAttribute("srsName", e);
        "LineString" === b.nodeName || "LineStringSegment" === b.nodeName ? (e = Ko(b.namespaceURI, "posList"), b.appendChild(e), ls(e, c, d)) : "Curve" === b.nodeName && (e = Ko(b.namespaceURI, "segments"), b.appendChild(e), b = Ko(e.namespaceURI, "LineStringSegment"), e.appendChild(b), this.Ae(b, c, d))
    };
    k.Rh = function (b, c, d) {
        var e = d[d.length - 1], f = e.srsName, e = e.surface;
        null != f && b.setAttribute("srsName", f);
        c = c.Od();
        qp({node: b, srsName: f, surface: e}, os, this.f, c, d, void 0, this)
    };
    k.uo = function (b, c, d) {
        var e = d[d.length - 1].srsName;
        null != e && b.setAttribute("srsName", e);
        c = c.ge();
        qp({node: b, srsName: e}, ps, lp("pointMember"), c, d, void 0, this)
    };
    k.Qh = function (b, c, d) {
        var e = d[d.length - 1], f = e.srsName, e = e.curve;
        null != f && b.setAttribute("srsName", f);
        c = c.gd();
        qp({node: b, srsName: f, curve: e}, qs, this.f, c, d, void 0, this)
    };
    k.Th = function (b, c, d) {
        var e = Ko(b.namespaceURI, "LinearRing");
        b.appendChild(e);
        this.Ph(e, c, d)
    };
    k.Uh = function (b, c, d) {
        var e = this.c(c, d);
        m(e) && (b.appendChild(e), this.Fe(e, c, d))
    };
    k.vo = function (b, c, d) {
        var e = Ko(b.namespaceURI, "Point");
        b.appendChild(e);
        this.Sh(e, c, d)
    };
    k.Oh = function (b, c, d) {
        var e = this.c(c, d);
        m(e) && (b.appendChild(e), this.Ae(e, c, d))
    };
    k.De = function (b, c, d) {
        var e = d[d.length - 1], f = Db(e);
        f.node = b;
        var g;
        ga(c) ? m(e.dataProjection) ? g = We(c, e.featureProjection, e.dataProjection) : g = c : g = Hr(c, !0, e);
        qp(f, rs, this.c, [g], d, void 0, this)
    };
    k.Mh = function (b, c, d) {
        var e = c.ha;
        m(e) && b.setAttribute("fid", e);
        var e = d[d.length - 1], f = e.featureNS, g = c.b;
        m(e.lc) || (e.lc = {}, e.lc[f] = {});
        var h = c.P();
        c = [];
        var l = [], n;
        for (n in h) {
            var p = h[n];
            null !== p && (c.push(n), l.push(p), n == g ? n in e.lc[f] || (e.lc[f][n] = U(this.De, this)) : n in e.lc[f] || (e.lc[f][n] = U(hs)))
        }
        n = Db(e);
        n.node = b;
        qp(n, e.lc, lp(void 0, f), l, d, c)
    };
    var os = {
        "http://www.opengis.net/gml": {
            surfaceMember: U(ks.prototype.Uh),
            polygonMember: U(ks.prototype.Uh)
        }
    }, ps = {"http://www.opengis.net/gml": {pointMember: U(ks.prototype.vo)}}, qs = {
        "http://www.opengis.net/gml": {
            lineStringMember: U(ks.prototype.Oh),
            curveMember: U(ks.prototype.Oh)
        }
    }, ns = {"http://www.opengis.net/gml": {exterior: U(ks.prototype.Th), interior: U(ks.prototype.Th)}}, rs = {
        "http://www.opengis.net/gml": {
            Curve: U(ks.prototype.Ae),
            MultiCurve: U(ks.prototype.Qh),
            Point: U(ks.prototype.Sh),
            MultiPoint: U(ks.prototype.uo),
            LineString: U(ks.prototype.Ae),
            MultiLineString: U(ks.prototype.Qh),
            LinearRing: U(ks.prototype.Ph),
            Polygon: U(ks.prototype.Fe),
            MultiPolygon: U(ks.prototype.Rh),
            Surface: U(ks.prototype.Fe),
            MultiSurface: U(ks.prototype.Rh),
            Envelope: U(ks.prototype.to)
        }
    }, ss = {
        MultiLineString: "lineStringMember",
        MultiCurve: "curveMember",
        MultiPolygon: "polygonMember",
        MultiSurface: "surfaceMember"
    };
    ks.prototype.f = function (b, c) {
        return Ko("http://www.opengis.net/gml", ss[c[c.length - 1].node.nodeName])
    };
    ks.prototype.c = function (b, c) {
        var d = c[c.length - 1], e = d.multiSurface, f = d.surface, g = d.curve, d = d.multiCurve, h;
        ga(b) ? h = "Envelope" : (h = b.U(), "MultiPolygon" === h && !0 === e ? h = "MultiSurface" : "Polygon" === h && !0 === f ? h = "Surface" : "LineString" === h && !0 === g ? h = "Curve" : "MultiLineString" === h && !0 === d && (h = "MultiCurve"));
        return Ko("http://www.opengis.net/gml", h)
    };
    ks.prototype.B = function (b, c) {
        c = Gr(this, c);
        var d = Ko("http://www.opengis.net/gml", "geom"), e = {
            node: d,
            srsName: this.srsName,
            curve: this.g,
            surface: this.l,
            multiSurface: this.j,
            multiCurve: this.i
        };
        m(c) && Gb(e, c);
        this.De(d, b, [e]);
        return d
    };
    ks.prototype.b = function (b, c) {
        c = Gr(this, c);
        var d = Ko("http://www.opengis.net/gml", "featureMembers");
        dp(d, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
        var e = {
            srsName: this.srsName,
            curve: this.g,
            surface: this.l,
            multiSurface: this.j,
            multiCurve: this.i,
            featureNS: this.featureNS,
            featureType: this.featureType
        };
        m(c) && Gb(e, c);
        var e = [e], f = e[e.length - 1], g = f.featureType, h = f.featureNS, l = {};
        l[h] = {};
        l[h][g] = U(this.Mh, this);
        f = Db(f);
        f.node = d;
        qp(f, l, lp(g, h), b, e);
        return d
    };
    function ts(b) {
        b = m(b) ? b : {};
        Zr.call(this, b);
        this.a["http://www.opengis.net/gml"].featureMember = gp(Zr.prototype.sd);
        this.schemaLocation = m(b.schemaLocation) ? b.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"
    }

    w(ts, Zr);
    k = ts.prototype;
    k.hh = function (b, c) {
        var d = Lo(b, !1).replace(/^\s*|\s*$/g, ""), e = c[0].srsName, f = b.parentNode.getAttribute("srsDimension"), g = "enu";
        null === e || (g = De(Ae(e)));
        d = d.split(/[\s,]+/);
        e = 2;
        fa(b.getAttribute("srsDimension")) ? fa(b.getAttribute("dimension")) ? null === f || (e = fs(f)) : e = fs(b.getAttribute("dimension")) : e = fs(b.getAttribute("srsDimension"));
        for (var h, l, n = [], p = 0, q = d.length; p < q; p += e)f = parseFloat(d[p]), h = parseFloat(d[p + 1]), l = 3 === e ? parseFloat(d[p + 2]) : 0, "en" === g.substr(0, 2) ? n.push(f, h, l) : n.push(h, f, l);
        return n
    };
    k.sn = function (b, c) {
        var d = V([null], this.Wh, b, c, this);
        return Od(d[1][0], d[1][1], d[1][3], d[1][4])
    };
    k.qk = function (b, c) {
        var d = V(void 0, this.Ad, b, c, this);
        m(d) && c[c.length - 1].push(d)
    };
    k.dn = function (b, c) {
        var d = V(void 0, this.Ad, b, c, this);
        m(d) && (c[c.length - 1][0] = d)
    };
    k.zd = Object({"http://www.opengis.net/gml": {coordinates: hp(ts.prototype.hh)}});
    k.Ge = Object({"http://www.opengis.net/gml": {innerBoundaryIs: ts.prototype.qk, outerBoundaryIs: ts.prototype.dn}});
    k.Wh = Object({"http://www.opengis.net/gml": {coordinates: gp(ts.prototype.hh)}});
    k.If = Object({
        "http://www.opengis.net/gml": {
            Point: hp(Zr.prototype.nh),
            MultiPoint: hp(Zr.prototype.lh),
            LineString: hp(Zr.prototype.ue),
            MultiLineString: hp(Zr.prototype.kh),
            LinearRing: hp(Zr.prototype.jh),
            Polygon: hp(Zr.prototype.ve),
            MultiPolygon: hp(Zr.prototype.mh),
            Box: hp(ts.prototype.sn)
        }
    });
    function us(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ae("EPSG:4326");
        this.a = b.readExtensions
    }

    w(us, Wr);
    var vs = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"];

    function ws(b, c, d) {
        b.push(parseFloat(c.getAttribute("lon")), parseFloat(c.getAttribute("lat")));
        "ele" in d ? (b.push(d.ele), zb(d, "ele")) : b.push(0);
        "time" in d ? (b.push(d.time), zb(d, "time")) : b.push(0);
        return b
    }

    function xs(b, c) {
        var d = c[c.length - 1], e = b.getAttribute("href");
        null === e || (d.link = e);
        pp(ys, b, c)
    }

    function zs(b, c) {
        c[c.length - 1].extensionsNode_ = b
    }

    function As(b, c) {
        var d = c[0], e = V({flatCoordinates: []}, Bs, b, c);
        if (m(e)) {
            var f = e.flatCoordinates;
            zb(e, "flatCoordinates");
            var g = new N(null);
            gn(g, "XYZM", f);
            Hr(g, !1, d);
            d = new An(g);
            d.I(e);
            return d
        }
    }

    function Cs(b, c) {
        var d = c[0], e = V({flatCoordinates: [], ends: []}, Ds, b, c);
        if (m(e)) {
            var f = e.flatCoordinates;
            zb(e, "flatCoordinates");
            var g = e.ends;
            zb(e, "ends");
            var h = new O(null);
            hn(h, "XYZM", f, g);
            Hr(h, !1, d);
            d = new An(h);
            d.I(e);
            return d
        }
    }

    function Es(b, c) {
        var d = c[0], e = V({}, Fs, b, c);
        if (m(e)) {
            var f = ws([], b, e), f = new D(f, "XYZM");
            Hr(f, !1, d);
            d = new An(f);
            d.I(e);
            return d
        }
    }

    var Gs = {rte: As, trk: Cs, wpt: Es}, Hs = T(vs, {
            rte: gp(As),
            trk: gp(Cs),
            wpt: gp(Es)
        }), ys = T(vs, {text: Q(Y, "linkText"), type: Q(Y, "linkType")}), Bs = T(vs, {
            name: Q(Y),
            cmt: Q(Y),
            desc: Q(Y),
            src: Q(Y),
            link: xs,
            number: Q(es),
            extensions: zs,
            type: Q(Y),
            rtept: function (b, c) {
                var d = V({}, Is, b, c);
                m(d) && ws(c[c.length - 1].flatCoordinates, b, d)
            }
        }), Is = T(vs, {ele: Q(cs), time: Q(bs)}), Ds = T(vs, {
            name: Q(Y),
            cmt: Q(Y),
            desc: Q(Y),
            src: Q(Y),
            link: xs,
            number: Q(es),
            type: Q(Y),
            extensions: zs,
            trkseg: function (b, c) {
                var d = c[c.length - 1];
                pp(Js, b, c);
                d.ends.push(d.flatCoordinates.length)
            }
        }),
        Js = T(vs, {
            trkpt: function (b, c) {
                var d = V({}, Ks, b, c);
                m(d) && ws(c[c.length - 1].flatCoordinates, b, d)
            }
        }), Ks = T(vs, {ele: Q(cs), time: Q(bs)}), Fs = T(vs, {
            ele: Q(cs),
            time: Q(bs),
            magvar: Q(cs),
            geoidheight: Q(cs),
            name: Q(Y),
            cmt: Q(Y),
            desc: Q(Y),
            src: Q(Y),
            link: xs,
            sym: Q(Y),
            type: Q(Y),
            fix: Q(Y),
            sat: Q(es),
            hdop: Q(cs),
            vdop: Q(cs),
            pdop: Q(cs),
            ageofdgpsdata: Q(cs),
            dgpsid: Q(es),
            extensions: zs
        });

    function Ls(b, c) {
        null === c && (c = []);
        for (var d = 0, e = c.length; d < e; ++d) {
            var f = c[d];
            if (m(b.a)) {
                var g = f.get("extensionsNode_") || null;
                b.a(f, g)
            }
            f.set("extensionsNode_", void 0)
        }
    }

    us.prototype.gh = function (b, c) {
        if (!Ya(vs, b.namespaceURI))return null;
        var d = Gs[b.localName];
        if (!m(d))return null;
        d = d(b, [Fr(this, b, c)]);
        if (!m(d))return null;
        Ls(this, [d]);
        return d
    };
    us.prototype.Ub = function (b, c) {
        if (!Ya(vs, b.namespaceURI))return [];
        if ("gpx" == b.localName) {
            var d = V([], Hs, b, [Fr(this, b, c)]);
            if (m(d))return Ls(this, d), d
        }
        return []
    };
    function Ms(b, c, d) {
        b.setAttribute("href", c);
        c = d[d.length - 1].properties;
        qp({node: b}, Ns, np, [c.linkText, c.linkType], d, Os)
    }

    function Ps(b, c, d) {
        var e = d[d.length - 1], f = e.node.namespaceURI, g = e.properties;
        dp(b, null, "lat", c[1]);
        dp(b, null, "lon", c[0]);
        switch (e.geometryLayout) {
            case "XYZM":
                0 !== c[3] && (g.time = c[3]);
            case "XYZ":
                0 !== c[2] && (g.ele = c[2]);
                break;
            case "XYM":
                0 !== c[2] && (g.time = c[2])
        }
        c = Qs[f];
        e = op(g, c);
        qp({node: b, properties: g}, Rs, np, e, d, c)
    }

    var Os = ["text", "type"], Ns = jp(vs, {
            text: U(hs),
            type: U(hs)
        }), Ss = jp(vs, "name cmt desc src link number type rtept".split(" ")), Ts = jp(vs, {
            name: U(hs),
            cmt: U(hs),
            desc: U(hs),
            src: U(hs),
            link: U(Ms),
            number: U(js),
            type: U(hs),
            rtept: kp(U(Ps))
        }), Us = jp(vs, "name cmt desc src link number type trkseg".split(" ")), Xs = jp(vs, {
            name: U(hs),
            cmt: U(hs),
            desc: U(hs),
            src: U(hs),
            link: U(Ms),
            number: U(js),
            type: U(hs),
            trkseg: kp(U(function (b, c, d) {
                qp({node: b, geometryLayout: c.b, properties: {}}, Vs, Ws, c.V(), d)
            }))
        }), Ws = lp("trkpt"), Vs = jp(vs, {trkpt: U(Ps)}),
        Qs = jp(vs, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")), Rs = jp(vs, {
            ele: U(is),
            time: U(function (b, c) {
                var d = new Date(1E3 * c), d = d.getUTCFullYear() + "-" + Ma(d.getUTCMonth() + 1) + "-" + Ma(d.getUTCDate()) + "T" + Ma(d.getUTCHours()) + ":" + Ma(d.getUTCMinutes()) + ":" + Ma(d.getUTCSeconds()) + "Z";
                b.appendChild(Ho.createTextNode(d))
            }),
            magvar: U(is),
            geoidheight: U(is),
            name: U(hs),
            cmt: U(hs),
            desc: U(hs),
            src: U(hs),
            link: U(Ms),
            sym: U(hs),
            type: U(hs),
            fix: U(hs),
            sat: U(js),
            hdop: U(is),
            vdop: U(is),
            pdop: U(is),
            ageofdgpsdata: U(is),
            dgpsid: U(js)
        }), Ys = {Point: "wpt", LineString: "rte", MultiLineString: "trk"};

    function Zs(b, c) {
        var d = b.Y();
        if (m(d))return Ko(c[c.length - 1].node.namespaceURI, Ys[d.U()])
    }

    var $s = jp(vs, {
        rte: U(function (b, c, d) {
            var e = d[0], f = c.P();
            b = {node: b, properties: f};
            c = c.Y();
            m(c) && (c = Hr(c, !0, e), b.geometryLayout = c.b, f.rtept = c.V());
            e = Ss[d[d.length - 1].node.namespaceURI];
            f = op(f, e);
            qp(b, Ts, np, f, d, e)
        }), trk: U(function (b, c, d) {
            var e = d[0], f = c.P();
            b = {node: b, properties: f};
            c = c.Y();
            m(c) && (c = Hr(c, !0, e), f.trkseg = c.gd());
            e = Us[d[d.length - 1].node.namespaceURI];
            f = op(f, e);
            qp(b, Xs, np, f, d, e)
        }), wpt: U(function (b, c, d) {
            var e = d[0], f = d[d.length - 1];
            f.properties = c.P();
            c = c.Y();
            m(c) && (c = Hr(c, !0, e), f.geometryLayout =
                c.b, Ps(b, c.V(), d))
        })
    });
    us.prototype.b = function (b, c) {
        c = Gr(this, c);
        var d = Ko("http://www.topografix.com/GPX/1/1", "gpx");
        qp({node: d}, $s, Zs, b, [c]);
        return d
    };
    function at(b) {
        b = bt(b);
        return Ua(b, function (b) {
            return b.c.substring(b.b, b.a)
        })
    }

    function ct(b, c, d) {
        this.c = b;
        this.b = c;
        this.a = d
    }

    function bt(b) {
        for (var c = RegExp("\r\n|\r|\n", "g"), d = 0, e, f = []; e = c.exec(b);)d = new ct(b, d, e.index), f.push(d), d = c.lastIndex;
        d < b.length && (d = new ct(b, d, b.length), f.push(d));
        return f
    };
    function dt() {
        this.defaultDataProjection = null
    }

    w(dt, Er);
    k = dt.prototype;
    k.U = function () {
        return "text"
    };
    k.Eb = function (b, c) {
        return this.rd(ia(b) ? b : "", Gr(this, c))
    };
    k.qa = function (b, c) {
        return this.vf(ia(b) ? b : "", Gr(this, c))
    };
    k.Nc = function (b, c) {
        return this.td(ia(b) ? b : "", Gr(this, c))
    };
    k.Ga = function () {
        return this.defaultDataProjection
    };
    k.xd = function (b, c) {
        return this.Be(b, Gr(this, c))
    };
    k.Fb = function (b, c) {
        return this.Nh(b, Gr(this, c))
    };
    k.Tc = function (b, c) {
        return this.yd(b, Gr(this, c))
    };
    function et(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ae("EPSG:4326");
        this.a = m(b.altitudeMode) ? b.altitudeMode : "none"
    }

    w(et, dt);
    var ft = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/, gt = /^H.([A-Z]{3}).*?:(.*)/, ht = /^HFDTE(\d{2})(\d{2})(\d{2})/;
    et.prototype.rd = function (b, c) {
        var d = this.a, e = at(b), f = {}, g = [], h = 2E3, l = 0, n = 1, p, q;
        p = 0;
        for (q = e.length; p < q; ++p) {
            var r = e[p], t;
            if ("B" == r.charAt(0)) {
                if (t = ft.exec(r)) {
                    var r = parseInt(t[1], 10), v = parseInt(t[2], 10), A = parseInt(t[3], 10), z = parseInt(t[4], 10) + parseInt(t[5], 10) / 6E4;
                    "S" == t[6] && (z = -z);
                    var E = parseInt(t[7], 10) + parseInt(t[8], 10) / 6E4;
                    "W" == t[9] && (E = -E);
                    g.push(E, z);
                    "none" != d && g.push("gps" == d ? parseInt(t[11], 10) : "barometric" == d ? parseInt(t[12], 10) : 0);
                    g.push(Date.UTC(h, l, n, r, v, A) / 1E3)
                }
            } else if ("H" == r.charAt(0))if (t =
                    ht.exec(r))n = parseInt(t[1], 10), l = parseInt(t[2], 10) - 1, h = 2E3 + parseInt(t[3], 10); else if (t = gt.exec(r))f[t[1]] = Ca(t[2]), ht.exec(r)
        }
        if (0 === g.length)return null;
        e = new N(null);
        gn(e, "none" == d ? "XYM" : "XYZM", g);
        d = new An(Hr(e, !1, c));
        d.I(f);
        return d
    };
    et.prototype.vf = function (b, c) {
        var d = this.rd(b, c);
        return null === d ? [] : [d]
    };
    function it(b, c) {
        var d;
        b instanceof it ? (this.dc = m(c) ? c : b.dc, jt(this, b.Vb), this.vc = b.vc, this.ub = b.ub, kt(this, b.Lc), this.pb = b.pb, lt(this, b.a.clone()), this.Zb = b.Zb) : b && (d = io(String(b))) ? (this.dc = !!c, jt(this, d[1] || "", !0), this.vc = mt(d[2] || ""), this.ub = mt(d[3] || "", !0), kt(this, d[4]), this.pb = mt(d[5] || "", !0), lt(this, d[6] || "", !0), this.Zb = mt(d[7] || "")) : (this.dc = !!c, this.a = new nt(null, 0, this.dc))
    }

    k = it.prototype;
    k.Vb = "";
    k.vc = "";
    k.ub = "";
    k.Lc = null;
    k.pb = "";
    k.Zb = "";
    k.dc = !1;
    k.toString = function () {
        var b = [], c = this.Vb;
        c && b.push(ot(c, pt, !0), ":");
        if (c = this.ub) {
            b.push("//");
            var d = this.vc;
            d && b.push(ot(d, pt, !0), "@");
            b.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
            c = this.Lc;
            null != c && b.push(":", String(c))
        }
        if (c = this.pb)this.ub && "/" != c.charAt(0) && b.push("/"), b.push(ot(c, "/" == c.charAt(0) ? qt : rt, !0));
        (c = this.a.toString()) && b.push("?", c);
        (c = this.Zb) && b.push("#", ot(c, st));
        return b.join("")
    };
    k.clone = function () {
        return new it(this)
    };
    function jt(b, c, d) {
        b.Vb = d ? mt(c, !0) : c;
        b.Vb && (b.Vb = b.Vb.replace(/:$/, ""))
    }

    function kt(b, c) {
        if (c) {
            c = Number(c);
            if (isNaN(c) || 0 > c)throw Error("Bad port number " + c);
            b.Lc = c
        } else b.Lc = null
    }

    function lt(b, c, d) {
        c instanceof nt ? (b.a = c, tt(b.a, b.dc)) : (d || (c = ot(c, ut)), b.a = new nt(c, 0, b.dc))
    }

    function vt(b) {
        return b instanceof it ? b.clone() : new it(b, void 0)
    }

    function wt(b, c) {
        b instanceof it || (b = vt(b));
        c instanceof it || (c = vt(c));
        var d = b, e = c, f = d.clone(), g = !!e.Vb;
        g ? jt(f, e.Vb) : g = !!e.vc;
        g ? f.vc = e.vc : g = !!e.ub;
        g ? f.ub = e.ub : g = null != e.Lc;
        var h = e.pb;
        if (g)kt(f, e.Lc); else if (g = !!e.pb)if ("/" != h.charAt(0) && (d.ub && !d.pb ? h = "/" + h : (d = f.pb.lastIndexOf("/"), -1 != d && (h = f.pb.substr(0, d + 1) + h))), d = h, ".." == d || "." == d)h = ""; else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
            for (var h = 0 == d.lastIndexOf("/", 0), d = d.split("/"), l = [], n = 0; n < d.length;) {
                var p = d[n++];
                "." == p ? h && n == d.length && l.push("") :
                    ".." == p ? ((1 < l.length || 1 == l.length && "" != l[0]) && l.pop(), h && n == d.length && l.push("")) : (l.push(p), h = !0)
            }
            h = l.join("/")
        } else h = d;
        g ? f.pb = h : g = "" !== e.a.toString();
        g ? lt(f, mt(e.a.toString())) : g = !!e.Zb;
        g && (f.Zb = e.Zb);
        return f
    }

    function mt(b, c) {
        return b ? c ? decodeURI(b) : decodeURIComponent(b) : ""
    }

    function ot(b, c, d) {
        return ia(b) ? (b = encodeURI(b).replace(c, xt), d && (b = b.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), b) : null
    }

    function xt(b) {
        b = b.charCodeAt(0);
        return "%" + (b >> 4 & 15).toString(16) + (b & 15).toString(16)
    }

    var pt = /[#\/\?@]/g, rt = /[\#\?:]/g, qt = /[\#\?]/g, ut = /[\#\?@]/g, st = /#/g;

    function nt(b, c, d) {
        this.a = b || null;
        this.b = !!d
    }

    function yt(b) {
        b.pa || (b.pa = new xi, b.Aa = 0, b.a && ko(b.a, function (c, d) {
            b.add(decodeURIComponent(c.replace(/\+/g, " ")), d)
        }))
    }

    k = nt.prototype;
    k.pa = null;
    k.Aa = null;
    k.$b = function () {
        yt(this);
        return this.Aa
    };
    k.add = function (b, c) {
        yt(this);
        this.a = null;
        b = zt(this, b);
        var d = this.pa.get(b);
        d || this.pa.set(b, d = []);
        d.push(c);
        this.Aa++;
        return this
    };
    k.remove = function (b) {
        yt(this);
        b = zt(this, b);
        return zi(this.pa.b, b) ? (this.a = null, this.Aa -= this.pa.get(b).length, this.pa.remove(b)) : !1
    };
    k.clear = function () {
        this.pa = this.a = null;
        this.Aa = 0
    };
    k.wa = function () {
        yt(this);
        return 0 == this.Aa
    };
    function At(b, c) {
        yt(b);
        c = zt(b, c);
        return zi(b.pa.b, c)
    }

    k.O = function () {
        yt(this);
        for (var b = this.pa.lb(), c = this.pa.O(), d = [], e = 0; e < c.length; e++)for (var f = b[e], g = 0; g < f.length; g++)d.push(c[e]);
        return d
    };
    k.lb = function (b) {
        yt(this);
        var c = [];
        if (ia(b))At(this, b) && (c = ab(c, this.pa.get(zt(this, b)))); else {
            b = this.pa.lb();
            for (var d = 0; d < b.length; d++)c = ab(c, b[d])
        }
        return c
    };
    k.set = function (b, c) {
        yt(this);
        this.a = null;
        b = zt(this, b);
        At(this, b) && (this.Aa -= this.pa.get(b).length);
        this.pa.set(b, [c]);
        this.Aa++;
        return this
    };
    k.get = function (b, c) {
        var d = b ? this.lb(b) : [];
        return 0 < d.length ? String(d[0]) : c
    };
    function Bt(b, c, d) {
        b.remove(c);
        0 < d.length && (b.a = null, b.pa.set(zt(b, c), bb(d)), b.Aa += d.length)
    }

    k.toString = function () {
        if (this.a)return this.a;
        if (!this.pa)return "";
        for (var b = [], c = this.pa.O(), d = 0; d < c.length; d++)for (var e = c[d], f = encodeURIComponent(String(e)), e = this.lb(e), g = 0; g < e.length; g++) {
            var h = f;
            "" !== e[g] && (h += "=" + encodeURIComponent(String(e[g])));
            b.push(h)
        }
        return this.a = b.join("&")
    };
    k.clone = function () {
        var b = new nt;
        b.a = this.a;
        this.pa && (b.pa = this.pa.clone(), b.Aa = this.Aa);
        return b
    };
    function zt(b, c) {
        var d = String(c);
        b.b && (d = d.toLowerCase());
        return d
    }

    function tt(b, c) {
        c && !b.b && (yt(b), b.a = null, b.pa.forEach(function (b, c) {
            var f = c.toLowerCase();
            c != f && (this.remove(c), Bt(this, f, b))
        }, b));
        b.b = c
    };
    function Ct(b) {
        b = m(b) ? b : {};
        this.f = b.font;
        this.g = b.rotation;
        this.b = b.scale;
        this.c = b.text;
        this.j = b.textAlign;
        this.l = b.textBaseline;
        this.a = m(b.fill) ? b.fill : null;
        this.i = m(b.stroke) ? b.stroke : null;
        this.B = m(b.offsetX) ? b.offsetX : 0;
        this.v = m(b.offsetY) ? b.offsetY : 0
    }

    k = Ct.prototype;
    k.$i = function () {
        return this.f
    };
    k.pj = function () {
        return this.B
    };
    k.qj = function () {
        return this.v
    };
    k.Nm = function () {
        return this.a
    };
    k.Om = function () {
        return this.g
    };
    k.Pm = function () {
        return this.b
    };
    k.Qm = function () {
        return this.i
    };
    k.Rm = function () {
        return this.c
    };
    k.Aj = function () {
        return this.j
    };
    k.Bj = function () {
        return this.l
    };
    k.Tn = function (b) {
        this.f = b
    };
    k.Sn = function (b) {
        this.a = b
    };
    k.Sm = function (b) {
        this.g = b
    };
    k.Tm = function (b) {
        this.b = b
    };
    k.ao = function (b) {
        this.i = b
    };
    k.bo = function (b) {
        this.c = b
    };
    k.co = function (b) {
        this.j = b
    };
    k.eo = function (b) {
        this.l = b
    };
    function Dt(b) {
        function c(b) {
            return ga(b) ? b : ia(b) ? (!(b in e) && "#" + b in e && (b = "#" + b), c(e[b])) : d
        }

        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ae("EPSG:4326");
        var d = m(b.defaultStyle) ? b.defaultStyle : Et, e = {};
        this.c = m(b.extractStyles) ? b.extractStyles : !0;
        this.a = e;
        this.f = function () {
            var b = this.get("Style");
            if (m(b))return b;
            b = this.get("styleUrl");
            return m(b) ? c(b) : d
        }
    }

    w(Dt, Wr);
    var Ft = ["http://www.google.com/kml/ext/2.2"], Gt = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"], Ht = [255, 255, 255, 1], It = new Gl({color: Ht}), Jt = [20, 2], Kt = [64, 64], Lt = new Ck({
        anchor: Jt,
        anchorOrigin: "bottom-left",
        anchorXUnits: "pixels",
        anchorYUnits: "pixels",
        crossOrigin: "anonymous",
        rotation: 0,
        scale: .5,
        size: Kt,
        src: "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"
    }), Mt = new Cl({color: Ht, width: 1}), Nt = new Ct({
        font: "normal 16px Helvetica",
        fill: It, stroke: Mt, scale: 1
    }), Et = [new Il({fill: It, image: Lt, text: Nt, stroke: Mt, zIndex: 0})], Ot = {
        fraction: "fraction",
        pixels: "pixels"
    };

    function Pt(b) {
        b = Lo(b, !1);
        if (b = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(b))return b = b[1], [parseInt(b.substr(6, 2), 16), parseInt(b.substr(4, 2), 16), parseInt(b.substr(2, 2), 16), parseInt(b.substr(0, 2), 16) / 255]
    }

    function Qt(b) {
        b = Lo(b, !1);
        for (var c = [], d = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i, e; e = d.exec(b);)c.push(parseFloat(e[1]), parseFloat(e[2]), e[3] ? parseFloat(e[3]) : 0), b = b.substr(e[0].length);
        return "" !== b ? void 0 : c
    }

    function Rt(b) {
        var c = Lo(b, !1);
        return null != b.baseURI ? wt(b.baseURI, Ca(c)).toString() : Ca(c)
    }

    function St(b) {
        b = cs(b);
        if (m(b))return Math.sqrt(b)
    }

    function Tt(b, c) {
        return V(null, Ut, b, c)
    }

    function Vt(b, c) {
        var d = V({o: [], Lh: []}, Wt, b, c);
        if (m(d)) {
            var e = d.o, d = d.Lh, f, g;
            f = 0;
            for (g = Math.min(e.length, d.length); f < g; ++f)e[4 * f + 3] = d[f];
            d = new N(null);
            gn(d, "XYZM", e);
            return d
        }
    }

    function Xt(b, c) {
        var d = V({}, Yt, b, c), e = V(null, Zt, b, c);
        if (m(e)) {
            var f = new N(null);
            gn(f, "XYZ", e);
            f.I(d);
            return f
        }
    }

    function $t(b, c) {
        var d = V({}, Yt, b, c), e = V(null, Zt, b, c);
        if (m(e)) {
            var f = new F(null);
            Hf(f, "XYZ", e, [e.length]);
            f.I(d);
            return f
        }
    }

    function au(b, c) {
        var d = V([], bu, b, c);
        if (!m(d))return null;
        if (0 === d.length)return new $m(d);
        var e = !0, f = d[0].U(), g, h, l;
        h = 1;
        for (l = d.length; h < l; ++h)if (g = d[h], g.U() != f) {
            e = !1;
            break
        }
        if (e) {
            if ("Point" == f) {
                g = d[0];
                e = g.b;
                f = g.o;
                h = 1;
                for (l = d.length; h < l; ++h)g = d[h], cb(f, g.o);
                g = new kn(null);
                af(g, e, f);
                g.s();
                cu(g, d);
                return g
            }
            return "LineString" == f ? (g = new O(null), jn(g, d), cu(g, d), g) : "Polygon" == f ? (g = new P(null), mn(g, d), cu(g, d), g) : "GeometryCollection" == f ? new $m(d) : null
        }
        return new $m(d)
    }

    function du(b, c) {
        var d = V({}, Yt, b, c), e = V(null, Zt, b, c);
        if (null != e) {
            var f = new D(null);
            vf(f, "XYZ", e);
            f.I(d);
            return f
        }
    }

    function eu(b, c) {
        var d = V({}, Yt, b, c), e = V([null], fu, b, c);
        if (null != e && null !== e[0]) {
            var f = new F(null), g = e[0], h = [g.length], l, n;
            l = 1;
            for (n = e.length; l < n; ++l)cb(g, e[l]), h.push(g.length);
            Hf(f, "XYZ", g, h);
            f.I(d);
            return f
        }
    }

    function gu(b, c) {
        var d = V({}, hu, b, c);
        if (!m(d))return null;
        var e = Ab(d, "fillStyle", It), f = d.fill;
        m(f) && !f && (e = null);
        var f = Ab(d, "imageStyle", Lt), g = Ab(d, "textStyle", Nt), h = Ab(d, "strokeStyle", Mt), d = d.outline;
        m(d) && !d && (h = null);
        return [new Il({fill: e, image: f, stroke: h, text: g, zIndex: void 0})]
    }

    function cu(b, c) {
        var d = c.length, e = Array(c.length), f = Array(c.length), g, h, l, n;
        l = n = !1;
        for (h = 0; h < d; ++h)g = c[h], e[h] = g.get("extrude"), f[h] = g.get("altitudeMode"), l = l || m(e[h]), n = n || m(f[h]);
        l && b.set("extrude", e);
        n && b.set("altitudeMode", f)
    }

    function iu(b, c) {
        pp(ju, b, c)
    }

    var ku = T(Gt, {value: hp(Y)}), ju = T(Gt, {
            Data: function (b, c) {
                var d = b.getAttribute("name");
                if (null !== d) {
                    var e = V(void 0, ku, b, c);
                    m(e) && (c[c.length - 1][d] = e)
                }
            }, SchemaData: function (b, c) {
                pp(lu, b, c)
            }
        }), Yt = T(Gt, {
            extrude: Q($r),
            altitudeMode: Q(Y)
        }), Ut = T(Gt, {coordinates: hp(Qt)}), fu = T(Gt, {
            innerBoundaryIs: function (b, c) {
                var d = V(void 0, mu, b, c);
                m(d) && c[c.length - 1].push(d)
            }, outerBoundaryIs: function (b, c) {
                var d = V(void 0, nu, b, c);
                m(d) && (c[c.length - 1][0] = d)
            }
        }), Wt = T(Gt, {
            when: function (b, c) {
                var d = c[c.length - 1].Lh, e = Lo(b, !1);
                if (e =
                        /^\s*(\d{4})($|-(\d{2})($|-(\d{2})($|T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?)))))\s*$/.exec(e)) {
                    var f = Date.UTC(parseInt(e[1], 10), m(e[3]) ? parseInt(e[3], 10) - 1 : 0, m(e[5]) ? parseInt(e[5], 10) : 1, m(e[7]) ? parseInt(e[7], 10) : 0, m(e[8]) ? parseInt(e[8], 10) : 0, m(e[9]) ? parseInt(e[9], 10) : 0);
                    if (m(e[10]) && "Z" != e[10]) {
                        var g = "-" == e[11] ? -1 : 1, f = f + 60 * g * parseInt(e[12], 10);
                        m(e[13]) && (f += 3600 * g * parseInt(e[13], 10))
                    }
                    d.push(f)
                } else d.push(0)
            }
        }, T(Ft, {
            coord: function (b, c) {
                var d = c[c.length - 1].o, e = Lo(b, !1);
                (e = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(e)) ?
                    d.push(parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3]), 0) : d.push(0, 0, 0, 0)
            }
        })), Zt = T(Gt, {coordinates: hp(Qt)}), ou = T(Gt, {href: Q(Rt)}, T(Ft, {
            x: Q(cs),
            y: Q(cs),
            w: Q(cs),
            h: Q(cs)
        })), pu = T(Gt, {
            Icon: Q(function (b, c) {
                var d = V({}, ou, b, c);
                return m(d) ? d : null
            }), heading: Q(cs), hotSpot: Q(function (b) {
                var c = b.getAttribute("xunits"), d = b.getAttribute("yunits");
                return {x: parseFloat(b.getAttribute("x")), Gf: Ot[c], y: parseFloat(b.getAttribute("y")), Hf: Ot[d]}
            }), scale: Q(St)
        }), mu = T(Gt, {LinearRing: hp(Tt)}), qu = T(Gt, {color: Q(Pt), scale: Q(St)}),
        ru = T(Gt, {color: Q(Pt), width: Q(cs)}), bu = T(Gt, {
            LineString: gp(Xt),
            LinearRing: gp($t),
            MultiGeometry: gp(au),
            Point: gp(du),
            Polygon: gp(eu)
        }), su = T(Ft, {Track: gp(Vt)}), uu = T(Gt, {
            ExtendedData: iu, Link: function (b, c) {
                pp(tu, b, c)
            }, address: Q(Y), description: Q(Y), name: Q(Y), open: Q($r), phoneNumber: Q(Y), visibility: Q($r)
        }), tu = T(Gt, {href: Q(Rt)}), nu = T(Gt, {LinearRing: hp(Tt)}), vu = T(Gt, {
            Style: Q(gu),
            key: Q(Y),
            styleUrl: Q(function (b) {
                var c = Ca(Lo(b, !1));
                return null != b.baseURI ? wt(b.baseURI, c).toString() : c
            })
        }), xu = T(Gt, {
            ExtendedData: iu,
            MultiGeometry: Q(au, "geometry"),
            LineString: Q(Xt, "geometry"),
            LinearRing: Q($t, "geometry"),
            Point: Q(du, "geometry"),
            Polygon: Q(eu, "geometry"),
            Style: Q(gu),
            StyleMap: function (b, c) {
                var d = V(void 0, wu, b, c);
                if (m(d)) {
                    var e = c[c.length - 1];
                    ga(d) ? e.Style = d : ia(d) && (e.styleUrl = d)
                }
            },
            address: Q(Y),
            description: Q(Y),
            name: Q(Y),
            open: Q($r),
            phoneNumber: Q(Y),
            styleUrl: Q(Rt),
            visibility: Q($r)
        }, T(Ft, {
            MultiTrack: Q(function (b, c) {
                var d = V([], su, b, c);
                if (m(d)) {
                    var e = new O(null);
                    jn(e, d);
                    return e
                }
            }, "geometry"), Track: Q(Vt, "geometry")
        })), yu =
            T(Gt, {color: Q(Pt), fill: Q($r), outline: Q($r)}), lu = T(Gt, {
            SimpleData: function (b, c) {
                var d = b.getAttribute("name");
                if (null !== d) {
                    var e = Y(b);
                    c[c.length - 1][d] = e
                }
            }
        }), hu = T(Gt, {
            IconStyle: function (b, c) {
                var d = V({}, pu, b, c);
                if (m(d)) {
                    var e = c[c.length - 1], f = Ab(d, "Icon", {}), g;
                    g = f.href;
                    g = m(g) ? g : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png";
                    var h, l, n, p = d.hotSpot;
                    m(p) ? (h = [p.x, p.y], l = p.Gf, n = p.Hf) : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" === g ? (h = Jt, n = l = "pixels") : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(g) &&
                    (h = [.5, 0], n = l = "fraction");
                    var q, p = f.x, r = f.y;
                    m(p) && m(r) && (q = [p, r]);
                    var t, p = f.w, f = f.h;
                    m(p) && m(f) && (t = [p, f]);
                    var v, f = d.heading;
                    m(f) && (v = Zb(f));
                    d = d.scale;
                    "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" == g && (t = Kt);
                    h = new Ck({
                        anchor: h,
                        anchorOrigin: "bottom-left",
                        anchorXUnits: l,
                        anchorYUnits: n,
                        crossOrigin: "anonymous",
                        offset: q,
                        offsetOrigin: "bottom-left",
                        rotation: v,
                        scale: d,
                        size: t,
                        src: g
                    });
                    e.imageStyle = h
                }
            }, LabelStyle: function (b, c) {
                var d = V({}, qu, b, c);
                m(d) && (c[c.length - 1].textStyle = new Ct({
                    fill: new Gl({
                        color: Ab(d,
                            "color", Ht)
                    }), scale: d.scale
                }))
            }, LineStyle: function (b, c) {
                var d = V({}, ru, b, c);
                m(d) && (c[c.length - 1].strokeStyle = new Cl({color: Ab(d, "color", Ht), width: Ab(d, "width", 1)}))
            }, PolyStyle: function (b, c) {
                var d = V({}, yu, b, c);
                if (m(d)) {
                    var e = c[c.length - 1];
                    e.fillStyle = new Gl({color: Ab(d, "color", Ht)});
                    var f = d.fill;
                    m(f) && (e.fill = f);
                    d = d.outline;
                    m(d) && (e.outline = d)
                }
            }
        }), wu = T(Gt, {
            Pair: function (b, c) {
                var d = V({}, vu, b, c);
                if (m(d)) {
                    var e = d.key;
                    m(e) && "normal" == e && (e = d.styleUrl, m(e) && (c[c.length - 1] = e), d = d.Style, m(d) && (c[c.length -
                    1] = d))
                }
            }
        });
    k = Dt.prototype;
    k.fh = function (b, c) {
        Po(b);
        var d = T(Gt, {
            Folder: fp(this.fh, this),
            Placemark: gp(this.xf, this),
            Style: ra(this.Gn, this),
            StyleMap: ra(this.Fn, this)
        }), d = V([], d, b, c, this);
        if (m(d))return d
    };
    k.xf = function (b, c) {
        var d = V({geometry: null}, xu, b, c);
        if (m(d)) {
            var e = new An, f = b.getAttribute("id");
            null === f || e.Wb(f);
            f = c[0];
            null != d.geometry && Hr(d.geometry, !1, f);
            e.I(d);
            this.c && e.hf(this.f);
            return e
        }
    };
    k.Gn = function (b, c) {
        var d = b.getAttribute("id");
        if (null !== d) {
            var e = gu(b, c);
            m(e) && (d = null != b.baseURI ? wt(b.baseURI, "#" + d).toString() : "#" + d, this.a[d] = e)
        }
    };
    k.Fn = function (b, c) {
        var d = b.getAttribute("id");
        if (null !== d) {
            var e = V(void 0, wu, b, c);
            m(e) && (d = null != b.baseURI ? wt(b.baseURI, "#" + d).toString() : "#" + d, this.a[d] = e)
        }
    };
    k.gh = function (b, c) {
        if (!Ya(Gt, b.namespaceURI))return null;
        var d = this.xf(b, [Fr(this, b, c)]);
        return m(d) ? d : null
    };
    k.Ub = function (b, c) {
        if (!Ya(Gt, b.namespaceURI))return [];
        var d;
        d = Po(b);
        if ("Document" == d || "Folder" == d)return d = this.fh(b, [Fr(this, b, c)]), m(d) ? d : [];
        if ("Placemark" == d)return d = this.xf(b, [Fr(this, b, c)]), m(d) ? [d] : [];
        if ("kml" == d) {
            d = [];
            var e;
            for (e = b.firstElementChild; null !== e; e = e.nextElementSibling) {
                var f = this.Ub(e, c);
                m(f) && cb(d, f)
            }
            return d
        }
        return []
    };
    k.An = function (b) {
        if (So(b))return zu(this, b);
        if (Vo(b))return Au(this, b);
        if (ia(b))return b = ep(b), zu(this, b)
    };
    function zu(b, c) {
        var d;
        for (d = c.firstChild; null !== d; d = d.nextSibling)if (1 == d.nodeType) {
            var e = Au(b, d);
            if (m(e))return e
        }
    }

    function Au(b, c) {
        var d;
        for (d = c.firstElementChild; null !== d; d = d.nextElementSibling)if (Ya(Gt, d.namespaceURI) && "name" == d.localName)return Y(d);
        for (d = c.firstElementChild; null !== d; d = d.nextElementSibling) {
            var e = Po(d);
            if (Ya(Gt, d.namespaceURI) && ("Document" == e || "Folder" == e || "Placemark" == e || "kml" == e) && (e = Au(b, d), m(e)))return e
        }
    }

    k.Bn = function (b) {
        var c = [];
        So(b) ? cb(c, Bu(this, b)) : Vo(b) ? cb(c, Cu(this, b)) : ia(b) && (b = ep(b), cb(c, Bu(this, b)));
        return c
    };
    function Bu(b, c) {
        var d, e = [];
        for (d = c.firstChild; null !== d; d = d.nextSibling)1 == d.nodeType && cb(e, Cu(b, d));
        return e
    }

    function Cu(b, c) {
        var d, e = [];
        for (d = c.firstElementChild; null !== d; d = d.nextElementSibling)if (Ya(Gt, d.namespaceURI) && "NetworkLink" == d.localName) {
            var f = V({}, uu, d, []);
            e.push(f)
        }
        for (d = c.firstElementChild; null !== d; d = d.nextElementSibling)f = Po(d), !Ya(Gt, d.namespaceURI) || "Document" != f && "Folder" != f && "kml" != f || cb(e, Cu(b, d));
        return e
    }

    function Du(b, c) {
        var d = wg(c), d = [255 * (4 == d.length ? d[3] : 1), d[2], d[1], d[0]], e;
        for (e = 0; 4 > e; ++e) {
            var f = parseInt(d[e], 10).toString(16);
            d[e] = 1 == f.length ? "0" + f : f
        }
        hs(b, d.join(""))
    }

    function Eu(b, c, d) {
        qp({node: b}, Fu, Gu, [c], d)
    }

    function Hu(b, c, d) {
        var e = {node: b};
        null != c.ha && b.setAttribute("id", c.ha);
        b = c.P();
        var f = c.c;
        m(f) && (f = f.call(c, 0), null !== f && 0 < f.length && (b.Style = f[0], f = f[0].b, null === f || (b.name = f.c)));
        f = Iu[d[d.length - 1].node.namespaceURI];
        b = op(b, f);
        qp(e, Ju, np, b, d, f);
        b = d[0];
        c = c.Y();
        null != c && (c = Hr(c, !0, b));
        qp(e, Ju, Ku, [c], d)
    }

    function Lu(b, c, d) {
        var e = c.o;
        b = {node: b};
        b.layout = c.b;
        b.stride = c.H;
        qp(b, Mu, Nu, [e], d)
    }

    function Ou(b, c, d) {
        c = c.Md();
        var e = c.shift();
        b = {node: b};
        qp(b, Pu, Qu, c, d);
        qp(b, Pu, Ru, [e], d)
    }

    function Su(b, c) {
        is(b, c * c)
    }

    var Tu = jp(Gt, ["Document", "Placemark"]), Wu = jp(Gt, {
            Document: U(function (b, c, d) {
                qp({node: b}, Uu, Vu, c, d)
            }), Placemark: U(Hu)
        }), Uu = jp(Gt, {Placemark: U(Hu)}), Xu = {
            Point: "Point",
            LineString: "LineString",
            LinearRing: "LinearRing",
            Polygon: "Polygon",
            MultiPoint: "MultiGeometry",
            MultiLineString: "MultiGeometry",
            MultiPolygon: "MultiGeometry"
        }, Yu = jp(Gt, ["href"], jp(Ft, ["x", "y", "w", "h"])), Zu = jp(Gt, {href: U(hs)}, jp(Ft, {
            x: U(is),
            y: U(is),
            w: U(is),
            h: U(is)
        })), $u = jp(Gt, ["scale", "heading", "Icon", "hotSpot"]), bv = jp(Gt, {
            Icon: U(function (b,
                              c, d) {
                b = {node: b};
                var e = Yu[d[d.length - 1].node.namespaceURI], f = op(c, e);
                qp(b, Zu, np, f, d, e);
                e = Yu[Ft[0]];
                f = op(c, e);
                qp(b, Zu, av, f, d, e)
            }), heading: U(is), hotSpot: U(function (b, c) {
                b.setAttribute("x", c.x);
                b.setAttribute("y", c.y);
                b.setAttribute("xunits", c.Gf);
                b.setAttribute("yunits", c.Hf)
            }), scale: U(Su)
        }), cv = jp(Gt, ["color", "scale"]), dv = jp(Gt, {
            color: U(Du),
            scale: U(Su)
        }), ev = jp(Gt, ["color", "width"]), fv = jp(Gt, {
            color: U(Du),
            width: U(is)
        }), Fu = jp(Gt, {LinearRing: U(Lu)}), gv = jp(Gt, {LineString: U(Lu), Point: U(Lu), Polygon: U(Ou)}),
        Iu = jp(Gt, "name open visibility address phoneNumber description styleUrl Style".split(" ")), Ju = jp(Gt, {
            MultiGeometry: U(function (b, c, d) {
                b = {node: b};
                var e = c.U(), f, g;
                "MultiPoint" == e ? (f = c.ge(), g = hv) : "MultiLineString" == e ? (f = c.gd(), g = iv) : "MultiPolygon" == e && (f = c.Od(), g = jv);
                qp(b, gv, g, f, d)
            }),
            LineString: U(Lu),
            LinearRing: U(Lu),
            Point: U(Lu),
            Polygon: U(Ou),
            Style: U(function (b, c, d) {
                b = {node: b};
                var e = {}, f = c.f, g = c.c, h = c.i;
                c = c.b;
                null === h || (e.IconStyle = h);
                null === c || (e.LabelStyle = c);
                null === g || (e.LineStyle = g);
                null === f || (e.PolyStyle =
                    f);
                c = kv[d[d.length - 1].node.namespaceURI];
                e = op(e, c);
                qp(b, lv, np, e, d, c)
            }),
            address: U(hs),
            description: U(hs),
            name: U(hs),
            open: U(gs),
            phoneNumber: U(hs),
            styleUrl: U(hs),
            visibility: U(gs)
        }), Mu = jp(Gt, {
            coordinates: U(function (b, c, d) {
                d = d[d.length - 1];
                var e = d.layout;
                d = d.stride;
                var f;
                "XY" == e || "XYM" == e ? f = 2 : ("XYZ" == e || "XYZM" == e) && (f = 3);
                var g, h = c.length, l = "";
                if (0 < h) {
                    l += c[0];
                    for (e = 1; e < f; ++e)l += "," + c[e];
                    for (g = d; g < h; g += d)for (l += " " + c[g], e = 1; e < f; ++e)l += "," + c[g + e]
                }
                hs(b, l)
            })
        }), Pu = jp(Gt, {outerBoundaryIs: U(Eu), innerBoundaryIs: U(Eu)}),
        mv = jp(Gt, {color: U(Du)}), kv = jp(Gt, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"]), lv = jp(Gt, {
            IconStyle: U(function (b, c, d) {
                b = {node: b};
                var e = {}, f = c.fb(), g = c.Ld(), h = {href: c.a.i};
                if (null !== f) {
                    h.w = f[0];
                    h.h = f[1];
                    var l = c.yb(), n = c.Db();
                    null !== n && null !== g && 0 !== n[0] && n[1] !== f[1] && (h.x = n[0], h.y = g[1] - (n[1] + f[1]));
                    null === l || 0 === l[0] || l[1] === f[1] || (e.hotSpot = {
                        x: l[0],
                        Gf: "pixels",
                        y: f[1] - l[1],
                        Hf: "pixels"
                    })
                }
                e.Icon = h;
                f = c.v;
                1 !== f && (e.scale = f);
                c = c.B;
                0 !== c && (e.heading = c);
                c = $u[d[d.length - 1].node.namespaceURI];
                e = op(e, c);
                qp(b, bv, np, e, d, c)
            }), LabelStyle: U(function (b, c, d) {
                b = {node: b};
                var e = {}, f = c.a;
                null === f || (e.color = f.a);
                c = c.b;
                m(c) && 1 !== c && (e.scale = c);
                c = cv[d[d.length - 1].node.namespaceURI];
                e = op(e, c);
                qp(b, dv, np, e, d, c)
            }), LineStyle: U(function (b, c, d) {
                b = {node: b};
                var e = ev[d[d.length - 1].node.namespaceURI];
                c = op({color: c.a, width: c.b}, e);
                qp(b, fv, np, c, d, e)
            }), PolyStyle: U(function (b, c, d) {
                qp({node: b}, mv, nv, [c.a], d)
            })
        });

    function av(b, c, d) {
        return Ko(Ft[0], "gx:" + d)
    }

    function Vu(b, c) {
        return Ko(c[c.length - 1].node.namespaceURI, "Placemark")
    }

    function Ku(b, c) {
        if (null != b)return Ko(c[c.length - 1].node.namespaceURI, Xu[b.U()])
    }

    var nv = lp("color"), Nu = lp("coordinates"), Qu = lp("innerBoundaryIs"), hv = lp("Point"), iv = lp("LineString"), Gu = lp("LinearRing"), jv = lp("Polygon"), Ru = lp("outerBoundaryIs");
    Dt.prototype.b = function (b, c) {
        c = Gr(this, c);
        var d = Ko(Gt[4], "kml");
        dp(d, "http://www.w3.org/2000/xmlns/", "xmlns:gx", Ft[0]);
        dp(d, "http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        dp(d, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
        var e = {node: d}, f = {};
        1 < b.length ? f.Document = b : 1 == b.length && (f.Placemark = b[0]);
        var g = Tu[d.namespaceURI], f = op(f, g);
        qp(e, Wu, np, f, [c], g);
        return d
    };
    function ov() {
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ae("EPSG:4326")
    }

    w(ov, Wr);
    function pv(b, c) {
        c[c.length - 1].vd[b.getAttribute("k")] = b.getAttribute("v")
    }

    var qv = [null], rv = T(qv, {
        nd: function (b, c) {
            c[c.length - 1].Fc.push(b.getAttribute("ref"))
        }, tag: pv
    }), tv = T(qv, {
        node: function (b, c) {
            var d = c[0], e = c[c.length - 1], f = b.getAttribute("id"), g = [parseFloat(b.getAttribute("lon")), parseFloat(b.getAttribute("lat"))];
            e.wg[f] = g;
            var h = V({vd: {}}, sv, b, c);
            xb(h.vd) || (g = new D(g), Hr(g, !1, d), d = new An(g), d.Wb(f), d.I(h.vd), e.features.push(d))
        }, way: function (b, c) {
            for (var d = c[0], e = b.getAttribute("id"), f = V({
                Fc: [],
                vd: {}
            }, rv, b, c), g = c[c.length - 1], h = [], l = 0, n = f.Fc.length; l < n; l++)cb(h, g.wg[f.Fc[l]]);
            f.Fc[0] == f.Fc[f.Fc.length - 1] ? (l = new F(null), Hf(l, "XY", h, [h.length])) : (l = new N(null), gn(l, "XY", h));
            Hr(l, !1, d);
            d = new An(l);
            d.Wb(e);
            d.I(f.vd);
            g.features.push(d)
        }
    }), sv = T(qv, {tag: pv});
    ov.prototype.Ub = function (b, c) {
        var d = Fr(this, b, c);
        return "osm" == b.localName && (d = V({wg: {}, features: []}, tv, b, [d]), m(d.features)) ? d.features : []
    };
    function uv(b) {
        return b.getAttributeNS("http://www.w3.org/1999/xlink", "href")
    };
    function vv() {
    }

    vv.prototype.c = function (b) {
        return So(b) ? this.b(b) : Vo(b) ? this.a(b) : ia(b) ? (b = ep(b), this.b(b)) : null
    };
    function wv() {
    }

    w(wv, vv);
    wv.prototype.b = function (b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling)if (1 == b.nodeType)return this.a(b);
        return null
    };
    wv.prototype.a = function (b) {
        b = V({}, xv, b, []);
        return m(b) ? b : null
    };
    var yv = [null, "http://www.opengis.net/ows/1.1"], xv = T(yv, {
        ServiceIdentification: Q(function (b, c) {
            return V({}, zv, b, c)
        }), ServiceProvider: Q(function (b, c) {
            return V({}, Av, b, c)
        }), OperationsMetadata: Q(function (b, c) {
            return V({}, Bv, b, c)
        })
    }), Cv = T(yv, {
        DeliveryPoint: Q(Y),
        City: Q(Y),
        AdministrativeArea: Q(Y),
        PostalCode: Q(Y),
        Country: Q(Y),
        ElectronicMailAddress: Q(Y)
    }), Dv = T(yv, {
        Value: ip(function (b) {
            return Y(b)
        })
    }), Ev = T(yv, {
        AllowedValues: Q(function (b, c) {
            return V({}, Dv, b, c)
        })
    }), Gv = T(yv, {
        Phone: Q(function (b, c) {
            return V({},
                Fv, b, c)
        }), Address: Q(function (b, c) {
            return V({}, Cv, b, c)
        })
    }), Iv = T(yv, {
        HTTP: Q(function (b, c) {
            return V({}, Hv, b, c)
        })
    }), Hv = T(yv, {
        Get: ip(function (b, c) {
            var d = uv(b);
            return m(d) ? V({href: d}, Jv, b, c) : void 0
        }), Post: void 0
    }), Kv = T(yv, {
        DCP: Q(function (b, c) {
            return V({}, Iv, b, c)
        })
    }), Bv = T(yv, {
        Operation: function (b, c) {
            var d = b.getAttribute("name"), e = V({}, Kv, b, c);
            m(e) && (c[c.length - 1][d] = e)
        }
    }), Fv = T(yv, {Voice: Q(Y), Facsimile: Q(Y)}), Jv = T(yv, {
        Constraint: ip(function (b, c) {
            var d = b.getAttribute("name");
            return m(d) ? V({name: d}, Ev, b, c) :
                void 0
        })
    }), Lv = T(yv, {
        IndividualName: Q(Y), PositionName: Q(Y), ContactInfo: Q(function (b, c) {
            return V({}, Gv, b, c)
        })
    }), zv = T(yv, {Title: Q(Y), ServiceTypeVersion: Q(Y), ServiceType: Q(Y)}), Av = T(yv, {
        ProviderName: Q(Y),
        ProviderSite: Q(uv),
        ServiceContact: Q(function (b, c) {
            return V({}, Lv, b, c)
        })
    });

    function Mv(b, c, d, e) {
        var f;
        m(e) ? f = m(void 0) ? void 0 : 0 : (e = [], f = 0);
        var g, h;
        for (g = 0; g < c;)for (h = b[g++], e[f++] = b[g++], e[f++] = h, h = 2; h < d; ++h)e[f++] = b[g++];
        e.length = f
    };
    function Nv(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ae("EPSG:4326");
        this.a = m(b.factor) ? b.factor : 1E5;
        this.b = m(b.geometryLayout) ? b.geometryLayout : "XY"
    }

    w(Nv, dt);
    function Ov(b, c, d) {
        d = m(d) ? d : 1E5;
        var e, f = Array(c);
        for (e = 0; e < c; ++e)f[e] = 0;
        var g, h;
        g = 0;
        for (h = b.length; g < h;)for (e = 0; e < c; ++e, ++g) {
            var l = b[g], n = l - f[e];
            f[e] = l;
            b[g] = n
        }
        return Pv(b, d)
    }

    function Qv(b, c, d) {
        var e = m(d) ? d : 1E5, f = Array(c);
        for (d = 0; d < c; ++d)f[d] = 0;
        b = Rv(b, e);
        var g, e = 0;
        for (g = b.length; e < g;)for (d = 0; d < c; ++d, ++e)f[d] += b[e], b[e] = f[d];
        return b
    }

    function Pv(b, c) {
        var d = m(c) ? c : 1E5, e, f;
        e = 0;
        for (f = b.length; e < f; ++e)b[e] = Math.round(b[e] * d);
        d = 0;
        for (e = b.length; d < e; ++d)f = b[d], b[d] = 0 > f ? ~(f << 1) : f << 1;
        d = "";
        e = 0;
        for (f = b.length; e < f; ++e) {
            for (var g = b[e], h = void 0, l = ""; 32 <= g;)h = (32 | g & 31) + 63, l += String.fromCharCode(h), g >>= 5;
            h = g + 63;
            l += String.fromCharCode(h);
            d += l
        }
        return d
    }

    function Rv(b, c) {
        var d = m(c) ? c : 1E5, e = [], f = 0, g = 0, h, l;
        h = 0;
        for (l = b.length; h < l; ++h) {
            var n = b.charCodeAt(h) - 63, f = f | (n & 31) << g;
            32 > n ? (e.push(f), g = f = 0) : g += 5
        }
        f = 0;
        for (g = e.length; f < g; ++f)h = e[f], e[f] = h & 1 ? ~(h >> 1) : h >> 1;
        f = 0;
        for (g = e.length; f < g; ++f)e[f] /= d;
        return e
    }

    k = Nv.prototype;
    k.rd = function (b, c) {
        var d = this.td(b, c);
        return new An(d)
    };
    k.vf = function (b, c) {
        return [this.rd(b, c)]
    };
    k.td = function (b, c) {
        var d = $e(this.b), e = Qv(b, d, this.a);
        Mv(e, e.length, d, e);
        d = pf(e, 0, e.length, d);
        return Hr(new N(d, this.b), !1, Gr(this, c))
    };
    k.Be = function (b, c) {
        var d = b.Y();
        return null != d ? this.yd(d, c) : ""
    };
    k.Nh = function (b, c) {
        return this.Be(b[0], c)
    };
    k.yd = function (b, c) {
        b = Hr(b, !0, Gr(this, c));
        var d = b.o, e = b.H;
        Mv(d, d.length, e, d);
        return Ov(d, e, this.a)
    };
    function Sv(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ae(null != b.defaultDataProjection ? b.defaultDataProjection : "EPSG:4326")
    }

    w(Sv, Ir);
    function Tv(b, c) {
        var d = [], e, f, g, h;
        g = 0;
        for (h = b.length; g < h; ++g)e = b[g], 0 < g && d.pop(), 0 <= e ? f = c[e] : f = c[~e].slice().reverse(), d.push.apply(d, f);
        e = 0;
        for (f = d.length; e < f; ++e)d[e] = d[e].slice();
        return d
    }

    function Uv(b, c, d, e, f) {
        b = b.geometries;
        var g = [], h, l;
        h = 0;
        for (l = b.length; h < l; ++h)g[h] = Vv(b[h], c, d, e, f);
        return g
    }

    function Vv(b, c, d, e, f) {
        var g = b.type, h = Wv[g];
        c = "Point" === g || "MultiPoint" === g ? h(b, d, e) : h(b, c);
        d = new An;
        d.Sa(Hr(c, !1, f));
        m(b.id) && d.Wb(b.id);
        m(b.properties) && d.I(b.properties);
        return d
    }

    Sv.prototype.uf = function (b, c) {
        if ("Topology" == b.type) {
            var d, e = null, f = null;
            m(b.transform) && (d = b.transform, e = d.scale, f = d.translate);
            var g = b.arcs;
            if (m(d)) {
                d = e;
                var h = f, l, n;
                l = 0;
                for (n = g.length; l < n; ++l)for (var p = g[l], q = d, r = h, t = 0, v = 0, A = void 0, z = void 0, E = void 0, z = 0, E = p.length; z < E; ++z)A = p[z], t += A[0], v += A[1], A[0] = t, A[1] = v, Xv(A, q, r)
            }
            d = [];
            h = sb(b.objects);
            l = 0;
            for (n = h.length; l < n; ++l)"GeometryCollection" === h[l].type ? (p = h[l], d.push.apply(d, Uv(p, g, e, f, c))) : (p = h[l], d.push(Vv(p, g, e, f, c)));
            return d
        }
        return []
    };
    function Xv(b, c, d) {
        b[0] = b[0] * c[0] + d[0];
        b[1] = b[1] * c[1] + d[1]
    }

    Sv.prototype.Ga = function () {
        return this.defaultDataProjection
    };
    var Wv = {
        Point: function (b, c, d) {
            b = b.coordinates;
            null === c || null === d || Xv(b, c, d);
            return new D(b)
        }, LineString: function (b, c) {
            var d = Tv(b.arcs, c);
            return new N(d)
        }, Polygon: function (b, c) {
            var d = [], e, f;
            e = 0;
            for (f = b.arcs.length; e < f; ++e)d[e] = Tv(b.arcs[e], c);
            return new F(d)
        }, MultiPoint: function (b, c, d) {
            b = b.coordinates;
            var e, f;
            if (null !== c && null !== d)for (e = 0, f = b.length; e < f; ++e)Xv(b[e], c, d);
            return new kn(b)
        }, MultiLineString: function (b, c) {
            var d = [], e, f;
            e = 0;
            for (f = b.arcs.length; e < f; ++e)d[e] = Tv(b.arcs[e], c);
            return new O(d)
        },
        MultiPolygon: function (b, c) {
            var d = [], e, f, g, h, l, n;
            l = 0;
            for (n = b.arcs.length; l < n; ++l) {
                e = b.arcs[l];
                f = [];
                g = 0;
                for (h = e.length; g < h; ++g)f[g] = Tv(e[g], c);
                d[l] = f
            }
            return new P(d)
        }
    };

    function Yv(b) {
        b = m(b) ? b : {};
        this.g = b.featureType;
        this.c = b.featureNS;
        this.a = m(b.gmlFormat) ? b.gmlFormat : new ks;
        this.f = m(b.schemaLocation) ? b.schemaLocation : "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd";
        this.defaultDataProjection = null
    }

    w(Yv, Wr);
    Yv.prototype.Ub = function (b, c) {
        var d = {featureType: this.g, featureNS: this.c};
        Gb(d, Fr(this, b, m(c) ? c : {}));
        d = [d];
        this.a.a["http://www.opengis.net/gml"].featureMember = gp(Zr.prototype.sd);
        d = V([], this.a.a, b, d, this.a);
        m(d) || (d = []);
        return d
    };
    Yv.prototype.j = function (b) {
        if (So(b))return Zv(b);
        if (Vo(b))return V({}, $v, b, []);
        if (ia(b))return b = ep(b), Zv(b)
    };
    Yv.prototype.i = function (b) {
        if (So(b))return aw(this, b);
        if (Vo(b))return bw(this, b);
        if (ia(b))return b = ep(b), aw(this, b)
    };
    function aw(b, c) {
        for (var d = c.firstChild; null !== d; d = d.nextSibling)if (1 == d.nodeType)return bw(b, d)
    }

    var cw = {"http://www.opengis.net/gml": {boundedBy: Q(Zr.prototype.te, "bounds")}};

    function bw(b, c) {
        var d = {}, e = fs(c.getAttribute("numberOfFeatures"));
        d.numberOfFeatures = e;
        return V(d, cw, c, [], b.a)
    }

    var dw = {
        "http://www.opengis.net/wfs": {
            totalInserted: Q(es),
            totalUpdated: Q(es),
            totalDeleted: Q(es)
        }
    }, ew = {
        "http://www.opengis.net/ogc": {
            FeatureId: gp(function (b) {
                return b.getAttribute("fid")
            })
        }
    }, fw = {
        "http://www.opengis.net/wfs": {
            Feature: function (b, c) {
                pp(ew, b, c)
            }
        }
    }, $v = {
        "http://www.opengis.net/wfs": {
            TransactionSummary: Q(function (b, c) {
                return V({}, dw, b, c)
            }, "transactionSummary"), InsertResults: Q(function (b, c) {
                return V([], fw, b, c)
            }, "insertIds")
        }
    };

    function Zv(b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling)if (1 == b.nodeType)return V({}, $v, b, [])
    }

    var gw = {"http://www.opengis.net/wfs": {PropertyName: U(hs)}};

    function hw(b, c) {
        var d = Ko("http://www.opengis.net/ogc", "Filter"), e = Ko("http://www.opengis.net/ogc", "FeatureId");
        d.appendChild(e);
        e.setAttribute("fid", c);
        b.appendChild(d)
    }

    var iw = {
        "http://www.opengis.net/wfs": {
            Insert: U(function (b, c, d) {
                var e = d[d.length - 1], e = Ko(e.featureNS, e.featureType);
                b.appendChild(e);
                ks.prototype.Mh(e, c, d)
            }), Update: U(function (b, c, d) {
                var e = d[d.length - 1], f = e.featureType, g = e.featurePrefix, g = m(g) ? g : "feature", h = e.featureNS;
                b.setAttribute("typeName", g + ":" + f);
                dp(b, "http://www.w3.org/2000/xmlns/", "xmlns:" + g, h);
                f = c.ha;
                if (m(f)) {
                    for (var g = c.O(), h = [], l = 0, n = g.length; l < n; l++) {
                        var p = c.get(g[l]);
                        m(p) && h.push({name: g[l], value: p})
                    }
                    qp({node: b, srsName: e.srsName}, iw,
                        lp("Property"), h, d);
                    hw(b, f)
                }
            }), Delete: U(function (b, c, d) {
                var e = d[d.length - 1];
                d = e.featureType;
                var f = e.featurePrefix, f = m(f) ? f : "feature", e = e.featureNS;
                b.setAttribute("typeName", f + ":" + d);
                dp(b, "http://www.w3.org/2000/xmlns/", "xmlns:" + f, e);
                c = c.ha;
                m(c) && hw(b, c)
            }), Property: U(function (b, c, d) {
                var e = Ko("http://www.opengis.net/wfs", "Name");
                b.appendChild(e);
                hs(e, c.name);
                null != c.value && (e = Ko("http://www.opengis.net/wfs", "Value"), b.appendChild(e), c.value instanceof Xe ? ks.prototype.De(e, c.value, d) : hs(e, c.value))
            }),
            Native: U(function (b, c) {
                m(c.so) && b.setAttribute("vendorId", c.so);
                m(c.Qn) && b.setAttribute("safeToIgnore", c.Qn);
                m(c.value) && hs(b, c.value)
            })
        }
    }, jw = {
        "http://www.opengis.net/wfs": {
            Query: U(function (b, c, d) {
                var e = d[d.length - 1], f = e.featurePrefix, g = e.featureNS, h = e.propertyNames, l = e.srsName;
                b.setAttribute("typeName", (m(f) ? f + ":" : "") + c);
                m(l) && b.setAttribute("srsName", l);
                m(g) && dp(b, "http://www.w3.org/2000/xmlns/", "xmlns:" + f, g);
                c = Db(e);
                c.node = b;
                qp(c, gw, lp("PropertyName"), h, d);
                e = e.bbox;
                m(e) && (h = Ko("http://www.opengis.net/ogc",
                    "Filter"), c = d[d.length - 1].geometryName, f = Ko("http://www.opengis.net/ogc", "BBOX"), h.appendChild(f), g = Ko("http://www.opengis.net/ogc", "PropertyName"), hs(g, c), f.appendChild(g), ks.prototype.De(f, e, d), b.appendChild(h))
            })
        }
    };
    Yv.prototype.l = function (b) {
        var c = Ko("http://www.opengis.net/wfs", "GetFeature");
        c.setAttribute("service", "WFS");
        c.setAttribute("version", "1.1.0");
        m(b) && (m(b.handle) && c.setAttribute("handle", b.handle), m(b.outputFormat) && c.setAttribute("outputFormat", b.outputFormat), m(b.maxFeatures) && c.setAttribute("maxFeatures", b.maxFeatures), m(b.resultType) && c.setAttribute("resultType", b.resultType), m(b.lo) && c.setAttribute("startIndex", b.lo), m(b.count) && c.setAttribute("count", b.count));
        dp(c, "http://www.w3.org/2001/XMLSchema-instance",
            "xsi:schemaLocation", this.f);
        var d = b.featureTypes;
        b = [{
            node: c,
            srsName: b.srsName,
            featureNS: m(b.featureNS) ? b.featureNS : this.c,
            featurePrefix: b.featurePrefix,
            geometryName: b.geometryName,
            bbox: b.bbox,
            propertyNames: m(b.propertyNames) ? b.propertyNames : []
        }];
        var e = Db(b[b.length - 1]);
        e.node = c;
        qp(e, jw, lp("Query"), d, b);
        return c
    };
    Yv.prototype.u = function (b, c, d, e) {
        var f = [], g = Ko("http://www.opengis.net/wfs", "Transaction");
        g.setAttribute("service", "WFS");
        g.setAttribute("version", "1.1.0");
        var h, l;
        m(e) && (h = m(e.gmlOptions) ? e.gmlOptions : {}, m(e.handle) && g.setAttribute("handle", e.handle));
        dp(g, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.f);
        null != b && (l = {
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, Gb(l, h), qp(l, iw, lp("Insert"), b, f));
        null != c && (l = {
            node: g, featureNS: e.featureNS,
            featureType: e.featureType, featurePrefix: e.featurePrefix
        }, Gb(l, h), qp(l, iw, lp("Update"), c, f));
        null != d && qp({
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, iw, lp("Delete"), d, f);
        m(e.nativeElements) && qp({
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, iw, lp("Native"), e.nativeElements, f);
        return g
    };
    Yv.prototype.yf = function (b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling)if (1 == b.nodeType)return this.we(b);
        return null
    };
    Yv.prototype.we = function (b) {
        if (null != b.firstElementChild && null != b.firstElementChild.firstElementChild)for (b = b.firstElementChild.firstElementChild, b = b.firstElementChild; null !== b; b = b.nextElementSibling)if (0 !== b.childNodes.length && (1 !== b.childNodes.length || 3 !== b.firstChild.nodeType)) {
            var c = [{}];
            this.a.te(b, c);
            return Ae(c.pop().srsName)
        }
        return null
    };
    function kw(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.a = m(b.splitCollection) ? b.splitCollection : !1
    }

    w(kw, dt);
    function lw(b) {
        b = b.V();
        return 0 == b.length ? "" : b[0] + " " + b[1]
    }

    function mw(b) {
        b = b.V();
        for (var c = [], d = 0, e = b.length; d < e; ++d)c.push(b[d][0] + " " + b[d][1]);
        return c.join(",")
    }

    function nw(b) {
        var c = [];
        b = b.Md();
        for (var d = 0, e = b.length; d < e; ++d)c.push("(" + mw(b[d]) + ")");
        return c.join(",")
    }

    function ow(b) {
        var c = b.U();
        b = (0, pw[c])(b);
        c = c.toUpperCase();
        return 0 === b.length ? c + " EMPTY" : c + "(" + b + ")"
    }

    var pw = {
        Point: lw, LineString: mw, Polygon: nw, MultiPoint: function (b) {
            var c = [];
            b = b.ge();
            for (var d = 0, e = b.length; d < e; ++d)c.push("(" + lw(b[d]) + ")");
            return c.join(",")
        }, MultiLineString: function (b) {
            var c = [];
            b = b.gd();
            for (var d = 0, e = b.length; d < e; ++d)c.push("(" + mw(b[d]) + ")");
            return c.join(",")
        }, MultiPolygon: function (b) {
            var c = [];
            b = b.Od();
            for (var d = 0, e = b.length; d < e; ++d)c.push("(" + nw(b[d]) + ")");
            return c.join(",")
        }, GeometryCollection: function (b) {
            var c = [];
            b = b.ag();
            for (var d = 0, e = b.length; d < e; ++d)c.push(ow(b[d]));
            return c.join(",")
        }
    };
    k = kw.prototype;
    k.rd = function (b, c) {
        var d = this.td(b, c);
        if (m(d)) {
            var e = new An;
            e.Sa(d);
            return e
        }
        return null
    };
    k.vf = function (b, c) {
        var d = [], e = this.td(b, c);
        this.a && "GeometryCollection" == e.U() ? d = e.f : d = [e];
        for (var f = [], g = 0, h = d.length; g < h; ++g)e = new An, e.Sa(d[g]), f.push(e);
        return f
    };
    k.td = function (b, c) {
        var d;
        d = new qw(new rw(b));
        d.a = sw(d.b);
        d = tw(d);
        return m(d) ? Hr(d, !1, c) : null
    };
    k.Be = function (b, c) {
        var d = b.Y();
        return m(d) ? this.yd(d, c) : ""
    };
    k.Nh = function (b, c) {
        if (1 == b.length)return this.Be(b[0], c);
        for (var d = [], e = 0, f = b.length; e < f; ++e)d.push(b[e].Y());
        d = new $m(d);
        return this.yd(d, c)
    };
    k.yd = function (b, c) {
        return ow(Hr(b, !0, c))
    };
    function rw(b) {
        this.b = b;
        this.a = -1
    }

    function uw(b, c) {
        var d = m(c) ? c : !1;
        return "0" <= b && "9" >= b || "." == b && !d
    }

    function sw(b) {
        var c = b.b.charAt(++b.a), d = {position: b.a, value: c};
        if ("(" == c)d.type = 2; else if ("," == c)d.type = 5; else if (")" == c)d.type = 3; else if (uw(c) || "-" == c) {
            d.type = 4;
            var e, c = b.a, f = !1, g = !1;
            do {
                if ("." == e)f = !0; else if ("e" == e || "E" == e)g = !0;
                e = b.b.charAt(++b.a)
            } while (uw(e, f) || !g && ("e" == e || "E" == e) || g && ("-" == e || "+" == e));
            b = parseFloat(b.b.substring(c, b.a--));
            d.value = b
        } else if ("a" <= c && "z" >= c || "A" <= c && "Z" >= c) {
            d.type = 1;
            c = b.a;
            do e = b.b.charAt(++b.a); while ("a" <= e && "z" >= e || "A" <= e && "Z" >= e);
            b = b.b.substring(c, b.a--).toUpperCase();
            d.value = b
        } else {
            if (" " == c || "\t" == c || "\r" == c || "\n" == c)return sw(b);
            if ("" === c)d.type = 6; else throw Error("Unexpected character: " + c);
        }
        return d
    }

    function qw(b) {
        this.b = b
    }

    k = qw.prototype;
    k.match = function (b) {
        if (b = this.a.type == b)this.a = sw(this.b);
        return b
    };
    function tw(b) {
        var c = b.a;
        if (b.match(1)) {
            var d = c.value;
            if ("GEOMETRYCOLLECTION" == d) {
                a:{
                    if (b.match(2)) {
                        c = [];
                        do c.push(tw(b)); while (b.match(5));
                        if (b.match(3)) {
                            b = c;
                            break a
                        }
                    } else if (vw(b)) {
                        b = [];
                        break a
                    }
                    throw Error(ww(b));
                }
                return new $m(b)
            }
            var e = xw[d], c = yw[d];
            if (!m(e) || !m(c))throw Error("Invalid geometry type: " + d);
            b = e.call(b);
            return new c(b)
        }
        throw Error(ww(b));
    }

    k.rf = function () {
        if (this.match(2)) {
            var b = zw(this);
            if (this.match(3))return b
        } else if (vw(this))return null;
        throw Error(ww(this));
    };
    k.qf = function () {
        if (this.match(2)) {
            var b = Aw(this);
            if (this.match(3))return b
        } else if (vw(this))return [];
        throw Error(ww(this));
    };
    k.sf = function () {
        if (this.match(2)) {
            var b = Bw(this);
            if (this.match(3))return b
        } else if (vw(this))return [];
        throw Error(ww(this));
    };
    k.gn = function () {
        if (this.match(2)) {
            var b;
            if (2 == this.a.type)for (b = [this.rf()]; this.match(5);)b.push(this.rf()); else b = Aw(this);
            if (this.match(3))return b
        } else if (vw(this))return [];
        throw Error(ww(this));
    };
    k.fn = function () {
        if (this.match(2)) {
            var b = Bw(this);
            if (this.match(3))return b
        } else if (vw(this))return [];
        throw Error(ww(this));
    };
    k.hn = function () {
        if (this.match(2)) {
            for (var b = [this.sf()]; this.match(5);)b.push(this.sf());
            if (this.match(3))return b
        } else if (vw(this))return [];
        throw Error(ww(this));
    };
    function zw(b) {
        for (var c = [], d = 0; 2 > d; ++d) {
            var e = b.a;
            if (b.match(4))c.push(e.value); else break
        }
        if (2 == c.length)return c;
        throw Error(ww(b));
    }

    function Aw(b) {
        for (var c = [zw(b)]; b.match(5);)c.push(zw(b));
        return c
    }

    function Bw(b) {
        for (var c = [b.qf()]; b.match(5);)c.push(b.qf());
        return c
    }

    function vw(b) {
        var c = 1 == b.a.type && "EMPTY" == b.a.value;
        c && (b.a = sw(b.b));
        return c
    }

    function ww(b) {
        return "Unexpected `" + b.a.value + "` at position " + b.a.position + " in `" + b.b.b + "`"
    }

    var yw = {
        POINT: D,
        LINESTRING: N,
        POLYGON: F,
        MULTIPOINT: kn,
        MULTILINESTRING: O,
        MULTIPOLYGON: P
    }, xw = {
        POINT: qw.prototype.rf,
        LINESTRING: qw.prototype.qf,
        POLYGON: qw.prototype.sf,
        MULTIPOINT: qw.prototype.gn,
        MULTILINESTRING: qw.prototype.fn,
        MULTIPOLYGON: qw.prototype.hn
    };

    function Cw() {
        this.version = void 0
    }

    w(Cw, vv);
    Cw.prototype.b = function (b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling)if (1 == b.nodeType)return this.a(b);
        return null
    };
    Cw.prototype.a = function (b) {
        this.version = Ca(b.getAttribute("version"));
        b = V({version: this.version}, Dw, b, []);
        return m(b) ? b : null
    };
    function Ew(b, c) {
        return V({}, Fw, b, c)
    }

    function Gw(b, c) {
        return V({}, Hw, b, c)
    }

    function Iw(b, c) {
        var d = Ew(b, c);
        if (m(d)) {
            var e = [fs(b.getAttribute("width")), fs(b.getAttribute("height"))];
            d.size = e;
            return d
        }
    }

    function Jw(b, c) {
        return V([], Kw, b, c)
    }

    var Lw = [null, "http://www.opengis.net/wms"], Dw = T(Lw, {
        Service: Q(function (b, c) {
            return V({}, Mw, b, c)
        }), Capability: Q(function (b, c) {
            return V({}, Nw, b, c)
        })
    }), Nw = T(Lw, {
        Request: Q(function (b, c) {
            return V({}, Ow, b, c)
        }), Exception: Q(function (b, c) {
            return V([], Pw, b, c)
        }), Layer: Q(function (b, c) {
            return V({}, Qw, b, c)
        })
    }), Mw = T(Lw, {
        Name: Q(Y),
        Title: Q(Y),
        Abstract: Q(Y),
        KeywordList: Q(Jw),
        OnlineResource: Q(uv),
        ContactInformation: Q(function (b, c) {
            return V({}, Rw, b, c)
        }),
        Fees: Q(Y),
        AccessConstraints: Q(Y),
        LayerLimit: Q(es),
        MaxWidth: Q(es),
        MaxHeight: Q(es)
    }), Rw = T(Lw, {
        ContactPersonPrimary: Q(function (b, c) {
            return V({}, Sw, b, c)
        }), ContactPosition: Q(Y), ContactAddress: Q(function (b, c) {
            return V({}, Tw, b, c)
        }), ContactVoiceTelephone: Q(Y), ContactFacsimileTelephone: Q(Y), ContactElectronicMailAddress: Q(Y)
    }), Sw = T(Lw, {ContactPerson: Q(Y), ContactOrganization: Q(Y)}), Tw = T(Lw, {
        AddressType: Q(Y),
        Address: Q(Y),
        City: Q(Y),
        StateOrProvince: Q(Y),
        PostCode: Q(Y),
        Country: Q(Y)
    }), Pw = T(Lw, {Format: gp(Y)}), Qw = T(Lw, {
        Name: Q(Y), Title: Q(Y), Abstract: Q(Y), KeywordList: Q(Jw), CRS: ip(Y),
        EX_GeographicBoundingBox: Q(function (b, c) {
            var d = V({}, Uw, b, c);
            if (m(d)) {
                var e = d.westBoundLongitude, f = d.southBoundLatitude, g = d.eastBoundLongitude, d = d.northBoundLatitude;
                return m(e) && m(f) && m(g) && m(d) ? [e, f, g, d] : void 0
            }
        }), BoundingBox: ip(function (b) {
            var c = [ds(b.getAttribute("minx")), ds(b.getAttribute("miny")), ds(b.getAttribute("maxx")), ds(b.getAttribute("maxy"))], d = [ds(b.getAttribute("resx")), ds(b.getAttribute("resy"))];
            return {crs: b.getAttribute("CRS"), extent: c, res: d}
        }), Dimension: ip(function (b) {
            return {
                name: b.getAttribute("name"),
                units: b.getAttribute("units"),
                unitSymbol: b.getAttribute("unitSymbol"),
                "default": b.getAttribute("default"),
                multipleValues: as(b.getAttribute("multipleValues")),
                nearestValue: as(b.getAttribute("nearestValue")),
                current: as(b.getAttribute("current")),
                values: Y(b)
            }
        }), Attribution: Q(function (b, c) {
            return V({}, Vw, b, c)
        }), AuthorityURL: ip(function (b, c) {
            var d = Ew(b, c);
            if (m(d))return d.name = b.getAttribute("name"), d
        }), Identifier: ip(Y), MetadataURL: ip(function (b, c) {
            var d = Ew(b, c);
            if (m(d))return d.type = b.getAttribute("type"),
                d
        }), DataURL: ip(Ew), FeatureListURL: ip(Ew), Style: ip(function (b, c) {
            return V({}, Ww, b, c)
        }), MinScaleDenominator: Q(cs), MaxScaleDenominator: Q(cs), Layer: ip(function (b, c) {
            var d = c[c.length - 1], e = V({}, Qw, b, c);
            if (m(e)) {
                var f = as(b.getAttribute("queryable"));
                m(f) || (f = d.queryable);
                e.queryable = m(f) ? f : !1;
                f = fs(b.getAttribute("cascaded"));
                m(f) || (f = d.cascaded);
                e.cascaded = f;
                f = as(b.getAttribute("opaque"));
                m(f) || (f = d.opaque);
                e.opaque = m(f) ? f : !1;
                f = as(b.getAttribute("noSubsets"));
                m(f) || (f = d.noSubsets);
                e.noSubsets = m(f) ? f : !1;
                f = ds(b.getAttribute("fixedWidth"));
                m(f) || (f = d.fixedWidth);
                e.fixedWidth = f;
                f = ds(b.getAttribute("fixedHeight"));
                m(f) || (f = d.fixedHeight);
                e.fixedHeight = f;
                Sa(["Style", "CRS", "AuthorityURL"], function (b) {
                    var c = d[b];
                    if (m(c)) {
                        var f = Bb(e, b), f = f.concat(c);
                        e[b] = f
                    }
                });
                Sa("EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" "), function (b) {
                    m(e[b]) || (e[b] = d[b])
                });
                return e
            }
        })
    }), Vw = T(Lw, {Title: Q(Y), OnlineResource: Q(uv), LogoURL: Q(Iw)}), Uw = T(Lw, {
        westBoundLongitude: Q(cs),
        eastBoundLongitude: Q(cs), southBoundLatitude: Q(cs), northBoundLatitude: Q(cs)
    }), Ow = T(Lw, {GetCapabilities: Q(Gw), GetMap: Q(Gw), GetFeatureInfo: Q(Gw)}), Hw = T(Lw, {
        Format: ip(Y),
        DCPType: ip(function (b, c) {
            return V({}, Xw, b, c)
        })
    }), Xw = T(Lw, {
        HTTP: Q(function (b, c) {
            return V({}, Yw, b, c)
        })
    }), Yw = T(Lw, {Get: Q(Ew), Post: Q(Ew)}), Ww = T(Lw, {
        Name: Q(Y),
        Title: Q(Y),
        Abstract: Q(Y),
        LegendURL: ip(Iw),
        StyleSheetURL: Q(Ew),
        StyleURL: Q(Ew)
    }), Fw = T(Lw, {Format: Q(Y), OnlineResource: Q(uv)}), Kw = T(Lw, {Keyword: gp(Y)});

    function Zw() {
        this.c = "http://mapserver.gis.umn.edu/mapserver";
        this.a = new ts;
        this.defaultDataProjection = null
    }

    w(Zw, Wr);
    function $w(b, c, d) {
        c.namespaceURI = b.c;
        var e = Po(c), f = [];
        if (0 === c.childNodes.length)return f;
        "msGMLOutput" == e && Sa(c.childNodes, function (b) {
            if (1 === b.nodeType) {
                var c = d[0], e = b.localName, n = RegExp, p;
                p = "_layer".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
                n = new n(p, "");
                e = e.replace(n, "") + "_feature";
                c.featureType = e;
                c.featureNS = this.c;
                n = {};
                n[e] = gp(this.a.tf, this.a);
                c = T([c.featureNS, null], n);
                b.namespaceURI = this.c;
                b = V([], c, b, d, this.a);
                m(b) && cb(f, b)
            }
        }, b);
        "FeatureCollection" == e && (b = V([],
            b.a.a, c, [{}], b.a), m(b) && (f = b));
        return f
    }

    Zw.prototype.Ub = function (b, c) {
        var d = {featureType: this.featureType, featureNS: this.featureNS};
        m(c) && Gb(d, Fr(this, b, c));
        return $w(this, b, [d])
    };
    function ax() {
        this.f = new wv
    }

    w(ax, vv);
    ax.prototype.b = function (b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling)if (1 == b.nodeType)return this.a(b);
        return null
    };
    ax.prototype.a = function (b) {
        this.version = Ca(b.getAttribute("version"));
        var c = this.f.a(b);
        if (!m(c))return null;
        c.version = this.version;
        c = V(c, bx, b, []);
        return m(c) ? c : null
    };
    function cx(b) {
        var c = Y(b).split(" ");
        if (m(c) && 2 == c.length)return b = +c[0], c = +c[1], isNaN(b) || isNaN(c) ? void 0 : [b, c]
    }

    var dx = [null, "http://www.opengis.net/wmts/1.0"], ex = [null, "http://www.opengis.net/ows/1.1"], bx = T(dx, {
            Contents: Q(function (b, c) {
                return V({}, fx, b, c)
            })
        }), fx = T(dx, {
            Layer: ip(function (b, c) {
                return V({}, gx, b, c)
            }), TileMatrixSet: ip(function (b, c) {
                return V({}, hx, b, c)
            })
        }), gx = T(dx, {
            Style: ip(function (b, c) {
                var d = V({}, ix, b, c);
                if (m(d)) {
                    var e = "true" === b.getAttribute("isDefault");
                    d.isDefault = e;
                    return d
                }
            }), Format: ip(Y), TileMatrixSetLink: ip(function (b, c) {
                return V({}, jx, b, c)
            }), ResourceURL: ip(function (b) {
                var c = b.getAttribute("format"),
                    d = b.getAttribute("template");
                b = b.getAttribute("resourceType");
                var e = {};
                m(c) && (e.format = c);
                m(d) && (e.template = d);
                m(b) && (e.resourceType = b);
                return e
            })
        }, T(ex, {
            Title: Q(Y), Abstract: Q(Y), WGS84BoundingBox: Q(function (b, c) {
                var d = V([], kx, b, c);
                return 2 != d.length ? void 0 : Kd(d)
            }), Identifier: Q(Y)
        })), ix = T(dx, {
            LegendURL: ip(function (b) {
                var c = {};
                c.format = b.getAttribute("format");
                c.href = uv(b);
                return c
            })
        }, T(ex, {Title: Q(Y), Identifier: Q(Y)})), jx = T(dx, {TileMatrixSet: Q(Y)}), kx = T(ex, {
            LowerCorner: gp(cx),
            UpperCorner: gp(cx)
        }),
        hx = T(dx, {
            WellKnownScaleSet: Q(Y), TileMatrix: ip(function (b, c) {
                return V({}, lx, b, c)
            })
        }, T(ex, {SupportedCRS: Q(Y), Identifier: Q(Y)})), lx = T(dx, {
            TopLeftCorner: Q(cx),
            ScaleDenominator: Q(cs),
            TileWidth: Q(es),
            TileHeight: Q(es),
            MatrixWidth: Q(es),
            MatrixHeight: Q(es)
        }, T(ex, {Identifier: Q(Y)}));
    var mx = new ve(6378137);

    function nx(b) {
        gd.call(this);
        b = m(b) ? b : {};
        this.b = null;
        this.f = Ue;
        this.c = void 0;
        x(this, id("projection"), this.Rk, !1, this);
        x(this, id("tracking"), this.Sk, !1, this);
        m(b.projection) && this.Ag(Ae(b.projection));
        m(b.trackingOptions) && this.Dh(b.trackingOptions);
        this.ce(m(b.tracking) ? b.tracking : !1)
    }

    w(nx, gd);
    k = nx.prototype;
    k.W = function () {
        this.ce(!1);
        nx.$.W.call(this)
    };
    k.Rk = function () {
        var b = this.yg();
        null != b && (this.f = Ee(Ae("EPSG:4326"), b), null === this.b || this.set("position", this.f(this.b)))
    };
    k.Sk = function () {
        if (hj) {
            var b = this.zg();
            b && !m(this.c) ? this.c = ba.navigator.geolocation.watchPosition(ra(this.qn, this), ra(this.rn, this), this.kg()) : !b && m(this.c) && (ba.navigator.geolocation.clearWatch(this.c), this.c = void 0)
        }
    };
    k.qn = function (b) {
        b = b.coords;
        this.set("accuracy", b.accuracy);
        this.set("altitude", null === b.altitude ? void 0 : b.altitude);
        this.set("altitudeAccuracy", null === b.altitudeAccuracy ? void 0 : b.altitudeAccuracy);
        this.set("heading", null === b.heading ? void 0 : Zb(b.heading));
        null === this.b ? this.b = [b.longitude, b.latitude] : (this.b[0] = b.longitude, this.b[1] = b.latitude);
        var c = this.f(this.b);
        this.set("position", c);
        this.set("speed", null === b.speed ? void 0 : b.speed);
        b = Kf(mx, this.b, b.accuracy);
        b.va(this.f);
        this.set("accuracyGeometry",
            b);
        this.s()
    };
    k.rn = function (b) {
        b.type = "error";
        this.ce(!1);
        C(this, b)
    };
    k.Oi = function () {
        return this.get("accuracy")
    };
    k.Pi = function () {
        return this.get("accuracyGeometry") || null
    };
    k.Ri = function () {
        return this.get("altitude")
    };
    k.Si = function () {
        return this.get("altitudeAccuracy")
    };
    k.Pk = function () {
        return this.get("heading")
    };
    k.Qk = function () {
        return this.get("position")
    };
    k.yg = function () {
        return this.get("projection")
    };
    k.yj = function () {
        return this.get("speed")
    };
    k.zg = function () {
        return this.get("tracking")
    };
    k.kg = function () {
        return this.get("trackingOptions")
    };
    k.Ag = function (b) {
        this.set("projection", b)
    };
    k.ce = function (b) {
        this.set("tracking", b)
    };
    k.Dh = function (b) {
        this.set("trackingOptions", b)
    };
    function ox(b, c, d) {
        for (var e = [], f = b(0), g = b(1), h = c(f), l = c(g), n = [g, f], p = [l, h], q = [1, 0], r = {}, t = 1E5, v, A, z, E, B; 0 < --t && 0 < q.length;)z = q.pop(), f = n.pop(), h = p.pop(), g = z.toString(), g in r || (e.push(h[0], h[1]), r[g] = !0), E = q.pop(), g = n.pop(), l = p.pop(), B = (z + E) / 2, v = b(B), A = c(v), ef(A[0], A[1], h[0], h[1], l[0], l[1]) < d ? (e.push(l[0], l[1]), g = E.toString(), r[g] = !0) : (q.push(E, B, B, z), p.push(l, A, A, h), n.push(g, v, v, f));
        return e
    }

    function px(b, c, d, e, f) {
        var g = Ae("EPSG:4326");
        return ox(function (e) {
            return [b, c + (d - c) * e]
        }, Te(g, e), f)
    }

    function qx(b, c, d, e, f) {
        var g = Ae("EPSG:4326");
        return ox(function (e) {
            return [c + (d - c) * e, b]
        }, Te(g, e), f)
    };
    function rx(b) {
        b = m(b) ? b : {};
        this.l = this.j = null;
        this.f = this.c = Infinity;
        this.i = this.g = -Infinity;
        this.ea = m(b.targetSize) ? b.targetSize : 100;
        this.A = m(b.maxLines) ? b.maxLines : 100;
        this.a = [];
        this.b = [];
        this.D = m(b.strokeStyle) ? b.strokeStyle : sx;
        this.u = this.B = void 0;
        this.v = null;
        this.setMap(m(b.map) ? b.map : null)
    }

    var sx = new Cl({color: "rgba(0,0,0,0.2)"}), tx = [90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001];

    function ux(b, c, d, e, f) {
        var g = f;
        c = px(c, b.g, b.c, b.l, d);
        g = m(b.a[g]) ? b.a[g] : new N(null);
        gn(g, "XY", c);
        ie(g.R(), e) && (b.a[f++] = g);
        return f
    }

    function vx(b, c, d, e, f) {
        var g = f;
        c = qx(c, b.i, b.f, b.l, d);
        g = m(b.b[g]) ? b.b[g] : new N(null);
        gn(g, "XY", c);
        ie(g.R(), e) && (b.b[f++] = g);
        return f
    }

    k = rx.prototype;
    k.Tk = function () {
        return this.j
    };
    k.nj = function () {
        return this.a
    };
    k.sj = function () {
        return this.b
    };
    k.pg = function (b) {
        var c = b.vectorContext, d = b.frameState;
        b = d.extent;
        var e = d.viewState, f = e.center, g = e.projection, e = e.resolution, d = d.pixelRatio, d = e * e / (4 * d * d);
        if (null === this.l || !Se(this.l, g)) {
            var h = g.R(), l = g.j, n = l[2], p = l[1], q = l[0];
            this.c = l[3];
            this.f = n;
            this.g = p;
            this.i = q;
            l = Ae("EPSG:4326");
            this.B = Te(l, g);
            this.u = Te(g, l);
            this.v = this.u(ee(h));
            this.l = g
        }
        for (var g = this.v[0], h = this.v[1], l = -1, r, p = Math.pow(this.ea * e, 2), q = [], t = [], e = 0, n = tx.length; e < n; ++e) {
            r = tx[e] / 2;
            q[0] = g - r;
            q[1] = h - r;
            t[0] = g + r;
            t[1] = h + r;
            this.B(q, q);
            this.B(t,
                t);
            r = Math.pow(t[0] - q[0], 2) + Math.pow(t[1] - q[1], 2);
            if (r <= p)break;
            l = tx[e]
        }
        e = l;
        if (-1 == e)this.a.length = this.b.length = 0; else {
            g = this.u(f);
            f = g[0];
            g = g[1];
            h = this.A;
            f = Math.floor(f / e) * e;
            p = Wb(f, this.i, this.f);
            n = ux(this, p, d, b, 0);
            for (l = 0; p != this.i && l++ < h;)p = Math.max(p - e, this.i), n = ux(this, p, d, b, n);
            p = Wb(f, this.i, this.f);
            for (l = 0; p != this.f && l++ < h;)p = Math.min(p + e, this.f), n = ux(this, p, d, b, n);
            this.a.length = n;
            g = Math.floor(g / e) * e;
            f = Wb(g, this.g, this.c);
            n = vx(this, f, d, b, 0);
            for (l = 0; f != this.g && l++ < h;)f = Math.max(f - e, this.g), n =
                vx(this, f, d, b, n);
            f = Wb(g, this.g, this.c);
            for (l = 0; f != this.c && l++ < h;)f = Math.min(f + e, this.c), n = vx(this, f, d, b, n);
            this.b.length = n
        }
        c.Ha(null, this.D);
        b = 0;
        for (d = this.a.length; b < d; ++b)f = this.a[b], c.Gb(f, null);
        b = 0;
        for (d = this.b.length; b < d; ++b)f = this.b[b], c.Gb(f, null)
    };
    k.setMap = function (b) {
        null !== this.j && (this.j.J("postcompose", this.pg, this), this.j.render());
        null !== b && (b.G("postcompose", this.pg, this), b.render());
        this.j = b
    };
    function wx(b, c, d, e, f, g, h) {
        nk.call(this, b, c, d, 0, e);
        this.l = f;
        this.b = new Image;
        null !== g && (this.b.crossOrigin = g);
        this.f = {};
        this.c = null;
        this.state = 0;
        this.j = h
    }

    w(wx, nk);
    wx.prototype.a = function (b) {
        if (m(b)) {
            var c = ma(b);
            if (c in this.f)return this.f[c];
            b = xb(this.f) ? this.b : this.b.cloneNode(!1);
            return this.f[c] = b
        }
        return this.b
    };
    wx.prototype.B = function () {
        this.state = 3;
        Sa(this.c, Xc);
        this.c = null;
        C(this, "change")
    };
    wx.prototype.v = function () {
        m(this.resolution) || (this.resolution = ge(this.extent) / this.b.height);
        this.state = 2;
        Sa(this.c, Xc);
        this.c = null;
        C(this, "change")
    };
    wx.prototype.load = function () {
        0 == this.state && (this.state = 1, C(this, "change"), this.c = [Vc(this.b, "error", this.B, !1, this), Vc(this.b, "load", this.v, !1, this)], this.j(this, this.l))
    };
    function xx(b, c, d, e, f) {
        Ch.call(this, b, c);
        this.j = d;
        this.b = new Image;
        null !== e && (this.b.crossOrigin = e);
        this.c = {};
        this.g = null;
        this.l = f
    }

    w(xx, Ch);
    k = xx.prototype;
    k.W = function () {
        1 == this.state && yx(this);
        xx.$.W.call(this)
    };
    k.Ta = function (b) {
        if (m(b)) {
            var c = ma(b);
            if (c in this.c)return this.c[c];
            b = xb(this.c) ? this.b : this.b.cloneNode(!1);
            return this.c[c] = b
        }
        return this.b
    };
    k.ob = function () {
        return this.j
    };
    k.Uk = function () {
        this.state = 3;
        yx(this);
        Dh(this)
    };
    k.Vk = function () {
        this.state = this.b.naturalWidth && this.b.naturalHeight ? 2 : 4;
        yx(this);
        Dh(this)
    };
    k.load = function () {
        0 == this.state && (this.state = 1, Dh(this), this.g = [Vc(this.b, "error", this.Uk, !1, this), Vc(this.b, "load", this.Vk, !1, this)], this.l(this, this.j))
    };
    function yx(b) {
        Sa(b.g, Xc);
        b.g = null
    };
    function zx(b, c, d) {
        return function (e, f, g) {
            return d(b, c, e, f, g)
        }
    }

    function Ax() {
    };
    function Bx(b, c) {
        ad.call(this);
        this.a = new mr(this);
        var d = b;
        c && (d = Hg(b));
        this.a.Ra(d, "dragenter", this.Xm);
        d != b && this.a.Ra(d, "dragover", this.Ym);
        this.a.Ra(b, "dragover", this.Zm);
        this.a.Ra(b, "drop", this.$m)
    }

    w(Bx, ad);
    k = Bx.prototype;
    k.ed = !1;
    k.W = function () {
        Bx.$.W.call(this);
        this.a.dd()
    };
    k.Xm = function (b) {
        var c = b.a.dataTransfer;
        (this.ed = !(!c || !(c.types && (Ya(c.types, "Files") || Ya(c.types, "public.file-url")) || c.files && 0 < c.files.length))) && b.preventDefault()
    };
    k.Ym = function (b) {
        this.ed && (b.preventDefault(), b.a.dataTransfer.dropEffect = "none")
    };
    k.Zm = function (b) {
        this.ed && (b.preventDefault(), b.nb(), b = b.a.dataTransfer, b.effectAllowed = "all", b.dropEffect = "copy")
    };
    k.$m = function (b) {
        this.ed && (b.preventDefault(), b.nb(), b = new xc(b.a), b.type = "drop", C(this, b))
    };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
     */
    function Cx(b, c) {
        this.g = [];
        this.A = b;
        this.u = c || null;
        this.f = this.a = !1;
        this.c = void 0;
        this.B = this.D = this.j = !1;
        this.i = 0;
        this.b = null;
        this.l = 0
    }

    Cx.prototype.cancel = function (b) {
        if (this.a)this.c instanceof Cx && this.c.cancel(); else {
            if (this.b) {
                var c = this.b;
                delete this.b;
                b ? c.cancel(b) : (c.l--, 0 >= c.l && c.cancel())
            }
            this.A ? this.A.call(this.u, this) : this.B = !0;
            this.a || (b = new Dx, Ex(this), Fx(this, !1, b))
        }
    };
    Cx.prototype.v = function (b, c) {
        this.j = !1;
        Fx(this, b, c)
    };
    function Fx(b, c, d) {
        b.a = !0;
        b.c = d;
        b.f = !c;
        Gx(b)
    }

    function Ex(b) {
        if (b.a) {
            if (!b.B)throw new Hx;
            b.B = !1
        }
    }

    function Ix(b, c, d, e) {
        b.g.push([c, d, e]);
        b.a && Gx(b)
    }

    Cx.prototype.then = function (b, c, d) {
        var e, f, g = new Kn(function (b, c) {
            e = b;
            f = c
        });
        Ix(this, e, function (b) {
            b instanceof Dx ? g.cancel() : f(b)
        });
        return g.then(b, c, d)
    };
    Bn(Cx);
    function Jx(b) {
        return Va(b.g, function (b) {
            return ka(b[1])
        })
    }

    function Gx(b) {
        if (b.i && b.a && Jx(b)) {
            var c = b.i, d = Kx[c];
            d && (ba.clearTimeout(d.ha), delete Kx[c]);
            b.i = 0
        }
        b.b && (b.b.l--, delete b.b);
        for (var c = b.c, e = d = !1; b.g.length && !b.j;) {
            var f = b.g.shift(), g = f[0], h = f[1], f = f[2];
            if (g = b.f ? h : g)try {
                var l = g.call(f || b.u, c);
                m(l) && (b.f = b.f && (l == c || l instanceof Error), b.c = c = l);
                Cn(c) && (e = !0, b.j = !0)
            } catch (n) {
                c = n, b.f = !0, Jx(b) || (d = !0)
            }
        }
        b.c = c;
        e && (l = ra(b.v, b, !0), e = ra(b.v, b, !1), c instanceof Cx ? (Ix(c, l, e), c.D = !0) : c.then(l, e));
        d && (c = new Lx(c), Kx[c.ha] = c, b.i = c.ha)
    }

    function Hx() {
        xa.call(this)
    }

    w(Hx, xa);
    Hx.prototype.message = "Deferred has already fired";
    Hx.prototype.name = "AlreadyCalledError";
    function Dx() {
        xa.call(this)
    }

    w(Dx, xa);
    Dx.prototype.message = "Deferred was canceled";
    Dx.prototype.name = "CanceledError";
    function Lx(b) {
        this.ha = ba.setTimeout(ra(this.b, this), 0);
        this.a = b
    }

    Lx.prototype.b = function () {
        delete Kx[this.ha];
        throw this.a;
    };
    var Kx = {};

    function Mx(b, c) {
        m(b.name) ? (this.name = b.name, this.code = Nx[b.name]) : (this.code = b.code, this.name = Ox(b.code));
        xa.call(this, Ba("%s %s", this.name, c))
    }

    w(Mx, xa);
    function Ox(b) {
        var c = wb(Nx, function (c) {
            return b == c
        });
        if (!m(c))throw Error("Invalid code: " + b);
        return c
    }

    var Nx = {
        AbortError: 3,
        EncodingError: 5,
        InvalidModificationError: 9,
        InvalidStateError: 7,
        NotFoundError: 1,
        NotReadableError: 4,
        NoModificationAllowedError: 6,
        PathExistsError: 12,
        QuotaExceededError: 10,
        SecurityError: 2,
        SyntaxError: 8,
        TypeMismatchError: 11
    };

    function Px(b, c) {
        sc.call(this, b.type, c)
    }

    w(Px, sc);
    function Qx() {
        ad.call(this);
        this.gb = new FileReader;
        this.gb.onloadstart = ra(this.a, this);
        this.gb.onprogress = ra(this.a, this);
        this.gb.onload = ra(this.a, this);
        this.gb.onabort = ra(this.a, this);
        this.gb.onerror = ra(this.a, this);
        this.gb.onloadend = ra(this.a, this)
    }

    w(Qx, ad);
    Qx.prototype.getError = function () {
        return this.gb.error && new Mx(this.gb.error, "reading file")
    };
    Qx.prototype.a = function (b) {
        C(this, new Px(b, this))
    };
    Qx.prototype.W = function () {
        Qx.$.W.call(this);
        delete this.gb
    };
    function Rx(b) {
        var c = new Cx;
        b.Ra("loadend", sa(function (b, c) {
            var f = c.gb.result, g = c.getError();
            null == f || g ? (Ex(b), Fx(b, !1, g)) : (Ex(b), Fx(b, !0, f));
            c.dd()
        }, c, b));
        return c
    };
    function Sx(b) {
        b = m(b) ? b : {};
        Tk.call(this, {handleEvent: pe});
        this.i = m(b.formatConstructors) ? b.formatConstructors : [];
        this.u = m(b.projection) ? Ae(b.projection) : null;
        this.g = null;
        this.c = void 0
    }

    w(Sx, Tk);
    Sx.prototype.W = function () {
        m(this.c) && Xc(this.c);
        Sx.$.W.call(this)
    };
    Sx.prototype.j = function (b) {
        b = b.a.dataTransfer.files;
        var c, d, e;
        c = 0;
        for (d = b.length; c < d; ++c) {
            var f = e = b[c], g = new Qx, h = Rx(g);
            g.gb.readAsText(f, "");
            Ix(h, sa(this.l, e), null, this)
        }
    };
    Sx.prototype.l = function (b, c) {
        var d = this.v, e = this.u;
        null === e && (e = d.X().g);
        var d = this.i, f = [], g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var l = new d[g], n;
            try {
                n = l.qa(c)
            } catch (p) {
                n = null
            }
            if (null !== n) {
                var l = l.Ga(c), l = Te(l, e), q, r;
                q = 0;
                for (r = n.length; q < r; ++q) {
                    var t = n[q], v = t.Y();
                    null != v && v.va(l);
                    f.push(t)
                }
            }
        }
        C(this, new Tx(Ux, this, b, f, e))
    };
    Sx.prototype.setMap = function (b) {
        m(this.c) && (Xc(this.c), this.c = void 0);
        null !== this.g && (rc(this.g), this.g = null);
        Sx.$.setMap.call(this, b);
        null !== b && (this.g = new Bx(b.b), this.c = x(this.g, "drop", this.j, !1, this))
    };
    var Ux = "addfeatures";

    function Tx(b, c, d, e, f) {
        sc.call(this, b, c);
        this.features = e;
        this.file = d;
        this.projection = f
    }

    w(Tx, sc);
    function Vx(b, c) {
        this.x = b;
        this.y = c
    }

    w(Vx, Dg);
    Vx.prototype.clone = function () {
        return new Vx(this.x, this.y)
    };
    Vx.prototype.scale = Dg.prototype.scale;
    Vx.prototype.add = function (b) {
        this.x += b.x;
        this.y += b.y;
        return this
    };
    Vx.prototype.rotate = function (b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        var d = this.y * c + this.x * b;
        this.x = this.x * c - this.y * b;
        this.y = d;
        return this
    };
    function Wx(b) {
        b = m(b) ? b : {};
        fl.call(this, {handleDownEvent: Xx, handleDragEvent: Yx, handleUpEvent: Zx});
        this.l = m(b.condition) ? b.condition : cl;
        this.c = this.g = void 0;
        this.j = 0;
        this.A = m(b.duration) ? b.duration : 400
    }

    w(Wx, fl);
    function Yx(b) {
        if (el(b)) {
            var c = b.map, d = c.Ca();
            b = b.pixel;
            b = new Vx(b[0] - d[0] / 2, d[1] / 2 - b[1]);
            d = Math.atan2(b.y, b.x);
            b = Math.sqrt(b.x * b.x + b.y * b.y);
            var e = c.X(), f = Sf(e);
            c.render();
            m(this.g) && Uk(c, e, f.rotation - (d - this.g));
            this.g = d;
            m(this.c) && Wk(c, e, f.resolution / b * this.c);
            m(this.c) && (this.j = this.c / b);
            this.c = b
        }
    }

    function Zx(b) {
        if (!el(b))return !0;
        b = b.map;
        var c = b.X();
        Uf(c, -1);
        var d = Sf(c), e = this.j - 1, f = d.rotation, f = c.constrainRotation(f, 0);
        Uk(b, c, f, void 0, void 0);
        d = d.resolution;
        f = this.A;
        d = c.constrainResolution(d, 0, e);
        Wk(b, c, d, void 0, f);
        this.j = 0;
        return !1
    }

    function Xx(b) {
        return el(b) && this.l(b) ? (Uf(b.map.X(), 1), this.c = this.g = void 0, !0) : !1
    };
    function $x(b, c) {
        sc.call(this, b);
        this.feature = c
    }

    w($x, sc);
    function ay(b) {
        fl.call(this, {handleDownEvent: by, handleEvent: cy, handleUpEvent: dy});
        this.aa = null;
        this.T = !1;
        this.sb = m(b.source) ? b.source : null;
        this.qb = m(b.features) ? b.features : null;
        this.Di = m(b.snapTolerance) ? b.snapTolerance : 12;
        this.Z = b.type;
        this.c = ey(this.Z);
        this.Xa = m(b.minPoints) ? b.minPoints : this.c === fy ? 3 : 2;
        this.Na = m(b.maxPoints) ? b.maxPoints : Infinity;
        var c = b.geometryFunction;
        if (!m(c))if ("Circle" === this.Z)c = function (b, c) {
            var d = m(c) ? c : new Ym([NaN, NaN]);
            d.Af(b[0], Math.sqrt(td(b[0], b[1])));
            return d
        }; else {
            var d,
                c = this.c;
            c === gy ? d = D : c === hy ? d = N : c === fy && (d = F);
            c = function (b, c) {
                var g = c;
                m(g) ? g.ja(b) : g = new d(b);
                return g
            }
        }
        this.C = c;
        this.N = this.A = this.g = this.D = this.l = this.j = null;
        this.Ei = m(b.clickTolerance) ? b.clickTolerance * b.clickTolerance : 36;
        this.ra = new M({
            source: new W({useSpatialIndex: !1, wrapX: m(b.wrapX) ? b.wrapX : !1}),
            style: m(b.style) ? b.style : iy()
        });
        this.rb = b.geometryName;
        this.vi = m(b.condition) ? b.condition : bl;
        this.xa = m(b.freehandCondition) ? b.freehandCondition : cl;
        x(this, id("active"), this.tb, !1, this)
    }

    w(ay, fl);
    function iy() {
        var b = Ml();
        return function (c) {
            return b[c.Y().U()]
        }
    }

    ay.prototype.setMap = function (b) {
        ay.$.setMap.call(this, b);
        this.tb()
    };
    function cy(b) {
        var c = !this.T;
        this.T && b.type === gk ? (jy(this, b), c = !1) : b.type === fk ? c = ky(this, b) : b.type === Zj && (c = !1);
        return gl.call(this, b) && c
    }

    function by(b) {
        if (this.vi(b))return this.aa = b.pixel, !0;
        if (this.c !== hy && this.c !== fy || !this.xa(b))return !1;
        this.aa = b.pixel;
        this.T = !0;
        null === this.j && ly(this, b);
        return !0
    }

    function dy(b) {
        this.T = !1;
        var c = this.aa, d = b.pixel, e = c[0] - d[0], c = c[1] - d[1], d = !0;
        e * e + c * c <= this.Ei && (ky(this, b), null === this.j ? ly(this, b) : (this.c === gy || this.c === my) && null !== this.j || ny(this, b) ? this.fa() : jy(this, b), d = !1);
        return d
    }

    function ky(b, c) {
        if (b.c === gy && null === b.j)ly(b, c); else if (null === b.j) {
            var d = c.coordinate.slice();
            null === b.D ? (b.D = new An(new D(d)), oy(b)) : b.D.Y().ja(d)
        } else {
            var d = c.coordinate, e = b.l.Y(), f;
            b.c === gy ? f = b.g : b.c === fy ? (f = b.g[0], f = f[f.length - 1], ny(b, c) && (d = b.j.slice())) : (f = b.g, f = f[f.length - 1]);
            f[0] = d[0];
            f[1] = d[1];
            b.C(b.g, e);
            null === b.D || b.D.Y().ja(d);
            e instanceof F && b.c !== fy ? (null === b.A && (b.A = new An(new N(null))), e = e.dg(0), d = b.A.Y(), gn(d, e.b, e.o)) : null !== b.N && (d = b.A.Y(), d.ja(b.N));
            oy(b)
        }
        return !0
    }

    function ny(b, c) {
        var d = !1;
        if (null !== b.l) {
            var e = !1, f = [b.j];
            b.c === hy ? e = b.g.length > b.Xa : b.c === fy && (e = b.g[0].length > b.Xa, f = [b.g[0][0], b.g[0][b.g[0].length - 2]]);
            if (e)for (var e = c.map, g = 0, h = f.length; g < h; g++) {
                var l = f[g], n = e.ya(l), p = c.pixel, d = p[0] - n[0], n = p[1] - n[1], p = b.T && b.xa(c) ? 1 : b.Di;
                if (d = Math.sqrt(d * d + n * n) <= p) {
                    b.j = l;
                    break
                }
            }
        }
        return d
    }

    function ly(b, c) {
        var d = c.coordinate;
        b.j = d;
        b.c === gy ? b.g = d.slice() : b.c === fy ? (b.g = [[d.slice(), d.slice()]], b.N = b.g[0]) : (b.g = [d.slice(), d.slice()], b.c === my && (b.N = b.g));
        null !== b.N && (b.A = new An(new N(b.N)));
        d = b.C(b.g);
        b.l = new An;
        m(b.rb) && b.l.Pc(b.rb);
        b.l.Sa(d);
        oy(b);
        C(b, new $x("drawstart", b.l))
    }

    function jy(b, c) {
        var d = c.coordinate, e = b.l.Y(), f, g;
        if (b.c === hy)b.j = d.slice(), g = b.g, g.push(d.slice()), f = g.length > b.Na, b.C(g, e); else if (b.c === fy) {
            g = b.g[0];
            g.push(d.slice());
            if (f = g.length > b.Na)b.j = g[0];
            b.C(b.g, e)
        }
        oy(b);
        f && b.fa()
    }

    ay.prototype.fa = function () {
        var b = py(this), c = this.g, d = b.Y();
        this.c === hy ? (c.pop(), this.C(c, d)) : this.c === fy && (c[0].pop(), c[0].push(c[0][0]), this.C(c, d));
        "MultiPoint" === this.Z ? b.Sa(new kn([c])) : "MultiLineString" === this.Z ? b.Sa(new O([c])) : "MultiPolygon" === this.Z && b.Sa(new P([c]));
        C(this, new $x("drawend", b));
        null === this.qb || this.qb.push(b);
        null === this.sb || this.sb.pd(b)
    };
    function py(b) {
        b.j = null;
        var c = b.l;
        null !== c && (b.l = null, b.D = null, b.A = null, b.ra.da().clear(!0));
        return c
    }

    ay.prototype.tc = oe;
    function oy(b) {
        var c = [];
        null === b.l || c.push(b.l);
        null === b.A || c.push(b.A);
        null === b.D || c.push(b.D);
        b = b.ra.da();
        b.clear(!0);
        b.xc(c)
    }

    ay.prototype.tb = function () {
        var b = this.v, c = this.b();
        null !== b && c || py(this);
        this.ra.setMap(c ? b : null)
    };
    function ey(b) {
        var c;
        "Point" === b || "MultiPoint" === b ? c = gy : "LineString" === b || "MultiLineString" === b ? c = hy : "Polygon" === b || "MultiPolygon" === b ? c = fy : "Circle" === b && (c = my);
        return c
    }

    var gy = "Point", hy = "LineString", fy = "Polygon", my = "Circle";

    function qy(b, c, d) {
        sc.call(this, b);
        this.features = c;
        this.mapBrowserPointerEvent = d
    }

    w(qy, sc);
    function ry(b) {
        fl.call(this, {handleDownEvent: sy, handleDragEvent: ty, handleEvent: uy, handleUpEvent: vy});
        this.fa = m(b.deleteCondition) ? b.deleteCondition : ue(bl, al);
        this.aa = this.g = null;
        this.D = [0, 0];
        this.N = [NaN, NaN];
        this.c = new vp;
        this.A = m(b.pixelTolerance) ? b.pixelTolerance : 10;
        this.Z = !1;
        this.j = null;
        this.C = new M({
            source: new W({useSpatialIndex: !1, wrapX: m(b.wrapX) ? b.wrapX : !1}),
            style: m(b.style) ? b.style : wy(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        this.T = {
            Point: this.zl,
            LineString: this.Gg,
            LinearRing: this.Gg,
            Polygon: this.Al,
            MultiPoint: this.xl,
            MultiLineString: this.wl,
            MultiPolygon: this.yl,
            GeometryCollection: this.vl
        };
        this.l = b.features;
        this.l.forEach(this.Fg, this);
        x(this.l, "add", this.tl, !1, this);
        x(this.l, "remove", this.ul, !1, this)
    }

    w(ry, fl);
    k = ry.prototype;
    k.Fg = function (b) {
        var c = b.Y();
        m(this.T[c.U()]) && this.T[c.U()].call(this, b, c);
        b = this.v;
        null === b || xy(this, this.D, b)
    };
    k.setMap = function (b) {
        this.C.setMap(b);
        ry.$.setMap.call(this, b)
    };
    k.tl = function (b) {
        this.Fg(b.element)
    };
    k.ul = function (b) {
        var c = b.element;
        b = this.c;
        var d, e = [];
        zp(b, c.Y().R(), function (b) {
            c === b.feature && e.push(b)
        });
        for (d = e.length - 1; 0 <= d; --d)b.remove(e[d]);
        null !== this.g && 0 === this.l.Qb() && (this.C.da().Jc(this.g), this.g = null)
    };
    k.zl = function (b, c) {
        var d = c.V(), d = {feature: b, geometry: c, ia: [d, d]};
        this.c.oa(c.R(), d)
    };
    k.xl = function (b, c) {
        var d = c.V(), e, f, g;
        f = 0;
        for (g = d.length; f < g; ++f)e = d[f], e = {
            feature: b,
            geometry: c,
            depth: [f],
            index: f,
            ia: [e, e]
        }, this.c.oa(c.R(), e)
    };
    k.Gg = function (b, c) {
        var d = c.V(), e, f, g, h;
        e = 0;
        for (f = d.length - 1; e < f; ++e)g = d.slice(e, e + 2), h = {
            feature: b,
            geometry: c,
            index: e,
            ia: g
        }, this.c.oa(Kd(g), h)
    };
    k.wl = function (b, c) {
        var d = c.V(), e, f, g, h, l, n, p;
        h = 0;
        for (l = d.length; h < l; ++h)for (e = d[h], f = 0, g = e.length - 1; f < g; ++f)n = e.slice(f, f + 2), p = {
            feature: b,
            geometry: c,
            depth: [h],
            index: f,
            ia: n
        }, this.c.oa(Kd(n), p)
    };
    k.Al = function (b, c) {
        var d = c.V(), e, f, g, h, l, n, p;
        h = 0;
        for (l = d.length; h < l; ++h)for (e = d[h], f = 0, g = e.length - 1; f < g; ++f)n = e.slice(f, f + 2), p = {
            feature: b,
            geometry: c,
            depth: [h],
            index: f,
            ia: n
        }, this.c.oa(Kd(n), p)
    };
    k.yl = function (b, c) {
        var d = c.V(), e, f, g, h, l, n, p, q, r, t;
        n = 0;
        for (p = d.length; n < p; ++n)for (q = d[n], h = 0, l = q.length; h < l; ++h)for (e = q[h], f = 0, g = e.length - 1; f < g; ++f)r = e.slice(f, f + 2), t = {
            feature: b,
            geometry: c,
            depth: [h, n],
            index: f,
            ia: r
        }, this.c.oa(Kd(r), t)
    };
    k.vl = function (b, c) {
        var d, e = c.f;
        for (d = 0; d < e.length; ++d)this.T[e[d].U()].call(this, b, e[d])
    };
    function yy(b, c) {
        var d = b.g;
        null === d ? (d = new An(new D(c)), b.g = d, b.C.da().pd(d)) : d.Y().ja(c)
    }

    function zy(b, c) {
        return b.index - c.index
    }

    function sy(b) {
        xy(this, b.pixel, b.map);
        this.j = [];
        var c = this.g;
        if (null !== c) {
            var d = [], c = c.Y().V(), e = Kd([c]), e = xp(this.c, e), f = {};
            e.sort(zy);
            for (var g = 0, h = e.length; g < h; ++g) {
                var l = e[g], n = l.ia, p = ma(l.feature), q = l.depth;
                q && (p += "-" + q.join("-"));
                f[p] || (f[p] = Array(2));
                if (rd(n[0], c) && !f[p][0])this.j.push([l, 0]), f[p][0] = l; else if (rd(n[1], c) && !f[p][1]) {
                    if ("LineString" !== l.geometry.U() && "MultiLineString" !== l.geometry.U() || !f[p][0] || 0 !== f[p][0].index)this.j.push([l, 1]), f[p][1] = l
                } else ma(n) in this.aa && !f[p][0] && !f[p][1] &&
                d.push([l, c])
            }
            for (g = d.length - 1; 0 <= g; --g)this.rk.apply(this, d[g]);
            C(this, new qy("modifystart", this.l, b))
        }
        return null !== this.g
    }

    function ty(b) {
        b = b.coordinate;
        for (var c = 0, d = this.j.length; c < d; ++c) {
            for (var e = this.j[c], f = e[0], g = f.depth, h = f.geometry, l = h.V(), n = f.ia, e = e[1]; b.length < h.H;)b.push(0);
            switch (h.U()) {
                case "Point":
                    l = b;
                    n[0] = n[1] = b;
                    break;
                case "MultiPoint":
                    l[f.index] = b;
                    n[0] = n[1] = b;
                    break;
                case "LineString":
                    l[f.index + e] = b;
                    n[e] = b;
                    break;
                case "MultiLineString":
                    l[g[0]][f.index + e] = b;
                    n[e] = b;
                    break;
                case "Polygon":
                    l[g[0]][f.index + e] = b;
                    n[e] = b;
                    break;
                case "MultiPolygon":
                    l[g[1]][g[0]][f.index + e] = b, n[e] = b
            }
            h.ja(l)
        }
        yy(this, b)
    }

    function vy(b) {
        for (var c, d = this.j.length - 1; 0 <= d; --d)c = this.j[d][0], this.c.update(Kd(c.ia), c);
        C(this, new qy("modifyend", this.l, b));
        return !1
    }

    function uy(b) {
        var c;
        b.map.X().c.slice()[1] || b.type != fk || this.u || (this.D = b.pixel, xy(this, b.pixel, b.map));
        if (null !== this.g && this.fa(b))if (this.N[0] !== this.D[0] || this.N[1] !== this.D[1]) {
            this.g.Y();
            c = this.j;
            var d = {}, e, f, g, h, l, n, p, q, r;
            for (l = c.length - 1; 0 <= l; --l)if (g = c[l], q = g[0], h = q.geometry, f = h.V(), r = ma(q.feature), q.depth && (r += "-" + q.depth.join("-")), e = p = n = void 0, 0 === g[1] ? (p = q, n = q.index) : 1 == g[1] && (e = q, n = q.index + 1), r in d || (d[r] = [e, p, n]), g = d[r], m(e) && (g[0] = e), m(p) && (g[1] = p), m(g[0]) && m(g[1])) {
                e = f;
                r = !1;
                p = n -
                    1;
                switch (h.U()) {
                    case "MultiLineString":
                        f[q.depth[0]].splice(n, 1);
                        r = !0;
                        break;
                    case "LineString":
                        f.splice(n, 1);
                        r = !0;
                        break;
                    case "MultiPolygon":
                        e = e[q.depth[1]];
                    case "Polygon":
                        e = e[q.depth[0]], 4 < e.length && (n == e.length - 1 && (n = 0), e.splice(n, 1), r = !0, 0 === n && (e.pop(), e.push(e[0]), p = e.length - 1))
                }
                r && (this.c.remove(g[0]), this.c.remove(g[1]), h.ja(f), f = {
                    depth: q.depth,
                    feature: q.feature,
                    geometry: q.geometry,
                    index: p,
                    ia: [g[0].ia[0], g[1].ia[1]]
                }, this.c.oa(Kd(f.ia), f), Ay(this, h, n, q.depth, -1), this.C.da().Jc(this.g), this.g =
                    null)
            }
            c = !0
        } else c = !0;
        return gl.call(this, b) && !c
    }

    function xy(b, c, d) {
        function e(b, c) {
            return ud(f, b.ia) - ud(f, c.ia)
        }

        var f = d.ta(c), g = d.ta([c[0] - b.A, c[1] + b.A]), h = d.ta([c[0] + b.A, c[1] - b.A]), g = Kd([g, h]), g = xp(b.c, g);
        if (0 < g.length) {
            g.sort(e);
            var h = g[0].ia, l = od(f, h), n = d.ya(l);
            if (Math.sqrt(td(c, n)) <= b.A) {
                c = d.ya(h[0]);
                d = d.ya(h[1]);
                c = td(n, c);
                d = td(n, d);
                b.Z = Math.sqrt(Math.min(c, d)) <= b.A;
                b.Z && (l = c > d ? h[1] : h[0]);
                yy(b, l);
                d = {};
                d[ma(h)] = !0;
                c = 1;
                for (n = g.length; c < n; ++c)if (l = g[c].ia, rd(h[0], l[0]) && rd(h[1], l[1]) || rd(h[0], l[1]) && rd(h[1], l[0]))d[ma(l)] = !0; else break;
                b.aa = d;
                return
            }
        }
        null !== b.g && (b.C.da().Jc(b.g), b.g = null)
    }

    k.rk = function (b, c) {
        for (var d = b.ia, e = b.feature, f = b.geometry, g = b.depth, h = b.index, l; c.length < f.H;)c.push(0);
        switch (f.U()) {
            case "MultiLineString":
                l = f.V();
                l[g[0]].splice(h + 1, 0, c);
                break;
            case "Polygon":
                l = f.V();
                l[g[0]].splice(h + 1, 0, c);
                break;
            case "MultiPolygon":
                l = f.V();
                l[g[1]][g[0]].splice(h + 1, 0, c);
                break;
            case "LineString":
                l = f.V();
                l.splice(h + 1, 0, c);
                break;
            default:
                return
        }
        f.ja(l);
        l = this.c;
        l.remove(b);
        Ay(this, f, h, g, 1);
        var n = {ia: [d[0], c], feature: e, geometry: f, depth: g, index: h};
        l.oa(Kd(n.ia), n);
        this.j.push([n, 1]);
        d = {ia: [c, d[1]], feature: e, geometry: f, depth: g, index: h + 1};
        l.oa(Kd(d.ia), d);
        this.j.push([d, 0]);
        this.N = this.D
    };
    function Ay(b, c, d, e, f) {
        zp(b.c, c.R(), function (b) {
            b.geometry === c && (!m(e) || ib(b.depth, e)) && b.index > d && (b.index += f)
        })
    }

    function wy() {
        var b = Ml();
        return function () {
            return b.Point
        }
    };
    function By(b, c, d, e) {
        sc.call(this, b);
        this.selected = c;
        this.deselected = d;
        this.mapBrowserEvent = e
    }

    w(By, sc);
    function Cy(b) {
        Tk.call(this, {handleEvent: Dy});
        b = m(b) ? b : {};
        this.u = m(b.condition) ? b.condition : al;
        this.j = m(b.addCondition) ? b.addCondition : oe;
        this.C = m(b.removeCondition) ? b.removeCondition : oe;
        this.T = m(b.toggleCondition) ? b.toggleCondition : cl;
        this.l = m(b.multi) ? b.multi : !1;
        this.g = m(b.filter) ? b.filter : pe;
        var c;
        if (m(b.layers))if (ka(b.layers))c = b.layers; else {
            var d = b.layers;
            c = function (b) {
                return Ya(d, b)
            }
        } else c = pe;
        this.i = c;
        this.c = new M({
            source: new W({useSpatialIndex: !1, wrapX: b.wrapX}), style: m(b.style) ? b.style :
                Ey(), updateWhileAnimating: !0, updateWhileInteracting: !0
        });
        b = this.c.da().c;
        x(b, "add", this.A, !1, this);
        x(b, "remove", this.N, !1, this)
    }

    w(Cy, Tk);
    Cy.prototype.D = function () {
        return this.c.da().c
    };
    function Dy(b) {
        if (!this.u(b))return !0;
        var c = this.j(b), d = this.C(b), e = this.T(b), f = !c && !d && !e, g = b.map, h = this.c.da().c, l = [], n = [], p = !1;
        if (f)g.Re(b.pixel, function (b, c) {
            if (this.g(b, c))return n.push(b), !this.l
        }, this, this.i), 0 < n.length && 1 == h.Qb() && h.item(0) == n[0] || (p = !0, 0 !== h.Qb() && (l = Array.prototype.concat(h.b), h.clear()), h.ff(n)); else {
            g.Re(b.pixel, function (b, f) {
                -1 == Ra(h.b, b) ? (c || e) && this.g(b, f) && n.push(b) : (d || e) && l.push(b)
            }, this, this.i);
            for (f = l.length - 1; 0 <= f; --f)h.remove(l[f]);
            h.ff(n);
            if (0 < n.length || 0 < l.length)p = !0
        }
        p && C(this, new By("select", n, l, b));
        return $k(b)
    }

    Cy.prototype.setMap = function (b) {
        var c = this.v, d = this.c.da().c;
        null === c || d.forEach(c.Jh, c);
        Cy.$.setMap.call(this, b);
        this.c.setMap(b);
        null === b || d.forEach(b.Eh, b)
    };
    function Ey() {
        var b = Ml();
        cb(b.Polygon, b.LineString);
        cb(b.GeometryCollection, b.LineString);
        return function (c) {
            return b[c.Y().U()]
        }
    }

    Cy.prototype.A = function (b) {
        b = b.element;
        var c = this.v;
        null === c || c.Eh(b)
    };
    Cy.prototype.N = function (b) {
        b = b.element;
        var c = this.v;
        null === c || c.Jh(b)
    };
    function Fy(b) {
        fl.call(this, {handleEvent: Gy, handleDownEvent: pe, handleUpEvent: Hy});
        b = m(b) ? b : {};
        this.l = m(b.source) ? b.source : null;
        this.j = m(b.features) ? b.features : null;
        this.aa = [];
        this.D = {};
        this.C = {};
        this.T = {};
        this.A = {};
        this.N = null;
        this.g = m(b.pixelTolerance) ? b.pixelTolerance : 10;
        this.fa = ra(Iy, this);
        this.c = new vp;
        this.Z = {
            Point: this.Gl,
            LineString: this.Jg,
            LinearRing: this.Jg,
            Polygon: this.Hl,
            MultiPoint: this.El,
            MultiLineString: this.Dl,
            MultiPolygon: this.Fl,
            GeometryCollection: this.Cl
        }
    }

    w(Fy, fl);
    k = Fy.prototype;
    k.md = function (b, c) {
        var d = m(c) ? c : !0, e = b.Y(), f = this.Z[e.U()];
        if (m(f)) {
            var g = ma(b);
            this.T[g] = e.R(Ld());
            f.call(this, b, e);
            d && (this.C[g] = e.G("change", ra(this.Pj, this, b), this), this.D[g] = b.G(id(b.b), this.Bl, this))
        }
    };
    k.Li = function (b) {
        this.md(b)
    };
    k.Mi = function (b) {
        this.od(b)
    };
    k.Hg = function (b) {
        var c;
        b instanceof Ep ? c = b.feature : b instanceof qg && (c = b.element);
        this.md(c)
    };
    k.Ig = function (b) {
        var c;
        b instanceof Ep ? c = b.feature : b instanceof qg && (c = b.element);
        this.od(c)
    };
    k.Bl = function (b) {
        b = b.c;
        this.od(b, !0);
        this.md(b, !0)
    };
    k.Pj = function (b) {
        if (this.u) {
            var c = ma(b);
            c in this.A || (this.A[c] = b)
        } else this.Kh(b)
    };
    k.od = function (b, c) {
        var d = m(c) ? c : !0, e = ma(b), f = this.T[e];
        if (f) {
            var g = this.c, h = [];
            zp(g, f, function (c) {
                b === c.feature && h.push(c)
            });
            for (f = h.length - 1; 0 <= f; --f)g.remove(h[f]);
            d && (Xc(this.C[e]), delete this.C[e], Xc(this.D[e]), delete this.D[e])
        }
    };
    k.setMap = function (b) {
        var c = this.v, d = this.aa, e;
        null === this.j ? null === this.l || (e = this.l.Ic()) : e = this.j;
        c && (Sa(d, ed), d.length = 0, e.forEach(this.Mi, this));
        Fy.$.setMap.call(this, b);
        b && (null !== this.j ? (d.push(this.j.G("add", this.Hg, this)), d.push(this.j.G("remove", this.Ig, this))) : null !== this.l && (d.push(this.l.G("addfeature", this.Hg, this)), d.push(this.l.G("removefeature", this.Ig, this))), e.forEach(this.Li, this))
    };
    k.tc = oe;
    k.Kh = function (b) {
        this.od(b, !1);
        this.md(b, !1)
    };
    k.Cl = function (b, c) {
        var d, e = c.f;
        for (d = 0; d < e.length; ++d)this.Z[e[d].U()].call(this, b, e[d])
    };
    k.Jg = function (b, c) {
        var d = c.V(), e, f, g, h;
        e = 0;
        for (f = d.length - 1; e < f; ++e)g = d.slice(e, e + 2), h = {feature: b, ia: g}, this.c.oa(Kd(g), h)
    };
    k.Dl = function (b, c) {
        var d = c.V(), e, f, g, h, l, n, p;
        h = 0;
        for (l = d.length; h < l; ++h)for (e = d[h], f = 0, g = e.length - 1; f < g; ++f)n = e.slice(f, f + 2), p = {
            feature: b,
            ia: n
        }, this.c.oa(Kd(n), p)
    };
    k.El = function (b, c) {
        var d = c.V(), e, f, g;
        f = 0;
        for (g = d.length; f < g; ++f)e = d[f], e = {feature: b, ia: [e, e]}, this.c.oa(c.R(), e)
    };
    k.Fl = function (b, c) {
        var d = c.V(), e, f, g, h, l, n, p, q, r, t;
        n = 0;
        for (p = d.length; n < p; ++n)for (q = d[n], h = 0, l = q.length; h < l; ++h)for (e = q[h], f = 0, g = e.length - 1; f < g; ++f)r = e.slice(f, f + 2), t = {
            feature: b,
            ia: r
        }, this.c.oa(Kd(r), t)
    };
    k.Gl = function (b, c) {
        var d = c.V(), d = {feature: b, ia: [d, d]};
        this.c.oa(c.R(), d)
    };
    k.Hl = function (b, c) {
        var d = c.V(), e, f, g, h, l, n, p;
        h = 0;
        for (l = d.length; h < l; ++h)for (e = d[h], f = 0, g = e.length - 1; f < g; ++f)n = e.slice(f, f + 2), p = {
            feature: b,
            ia: n
        }, this.c.oa(Kd(n), p)
    };
    function Gy(b) {
        var c, d, e = b.pixel, f = b.coordinate;
        c = b.map;
        var g = c.ta([e[0] - this.g, e[1] + this.g]);
        d = c.ta([e[0] + this.g, e[1] - this.g]);
        var g = Kd([g, d]), h = xp(this.c, g), l = !1, g = !1, n = null;
        d = null;
        0 < h.length && (this.N = f, h.sort(this.fa), h = h[0].ia, n = od(f, h), d = c.ya(n), Math.sqrt(td(e, d)) <= this.g && (g = !0, e = c.ya(h[0]), f = c.ya(h[1]), e = td(d, e), f = td(d, f), l = Math.sqrt(Math.min(e, f)) <= this.g)) && (n = e > f ? h[1] : h[0], d = c.ya(n), d = [Math.round(d[0]), Math.round(d[1])]);
        c = n;
        g && (b.coordinate = c.slice(0, 2), b.pixel = d);
        return gl.call(this, b)
    }

    function Hy() {
        var b = sb(this.A);
        b.length && (Sa(b, this.Kh, this), this.A = {});
        return !1
    }

    function Iy(b, c) {
        return ud(this.N, b.ia) - ud(this.N, c.ia)
    };
    function Z(b) {
        b = m(b) ? b : {};
        var c = Db(b);
        delete c.gradient;
        delete c.radius;
        delete c.blur;
        delete c.shadow;
        delete c.weight;
        M.call(this, c);
        this.f = null;
        this.Z = m(b.shadow) ? b.shadow : 250;
        this.D = void 0;
        this.v = null;
        x(this, id("gradient"), this.Qj, !1, this);
        this.yh(m(b.gradient) ? b.gradient : Jy);
        this.uh(m(b.blur) ? b.blur : 15);
        this.Lg(m(b.radius) ? b.radius : 8);
        x(this, [id("blur"), id("radius")], this.qg, !1, this);
        this.qg();
        var d = m(b.weight) ? b.weight : "weight", e;
        ia(d) ? e = function (b) {
            return b.get(d)
        } : e = d;
        this.g(ra(function (b) {
            b =
                e(b);
            b = m(b) ? Wb(b, 0, 1) : 1;
            var c = 255 * b | 0, d = this.v[c];
            m(d) || (d = [new Il({image: new Ck({opacity: b, src: this.D})})], this.v[c] = d);
            return d
        }, this));
        this.set("renderOrder", null);
        x(this, "render", this.ik, !1, this)
    }

    w(Z, M);
    var Jy = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];
    k = Z.prototype;
    k.Yf = function () {
        return this.get("blur")
    };
    k.bg = function () {
        return this.get("gradient")
    };
    k.Kg = function () {
        return this.get("radius")
    };
    k.Qj = function () {
        for (var b = this.bg(), c = Wi(1, 256), d = c.createLinearGradient(0, 0, 1, 256), e = 1 / (b.length - 1), f = 0, g = b.length; f < g; ++f)d.addColorStop(f * e, b[f]);
        c.fillStyle = d;
        c.fillRect(0, 0, 1, 256);
        this.f = c.getImageData(0, 0, 1, 256).data
    };
    k.qg = function () {
        var b = this.Kg(), c = this.Yf(), d = b + c + 1, e = 2 * d, e = Wi(e, e);
        e.shadowOffsetX = e.shadowOffsetY = this.Z;
        e.shadowBlur = c;
        e.shadowColor = "#000";
        e.beginPath();
        c = d - this.Z;
        e.arc(c, c, b, 0, 2 * Math.PI, !0);
        e.fill();
        this.D = e.canvas.toDataURL();
        this.v = Array(256);
        this.s()
    };
    k.ik = function (b) {
        b = b.context;
        var c = b.canvas, c = b.getImageData(0, 0, c.width, c.height), d = c.data, e, f, g;
        e = 0;
        for (f = d.length; e < f; e += 4)if (g = 4 * d[e + 3])d[e] = this.f[g], d[e + 1] = this.f[g + 1], d[e + 2] = this.f[g + 2];
        b.putImageData(c, 0, 0)
    };
    k.uh = function (b) {
        this.set("blur", b)
    };
    k.yh = function (b) {
        this.set("gradient", b)
    };
    k.Lg = function (b) {
        this.set("radius", b)
    };
    function Ky(b, c) {
        var d = c || {}, e = d.document || document, f = Pg("SCRIPT"), g = {
            th: f,
            uc: void 0
        }, h = new Cx(Ly, g), l = null, n = null != d.timeout ? d.timeout : 5E3;
        0 < n && (l = window.setTimeout(function () {
            My(f, !0);
            var c = new Ny(Oy, "Timeout reached for loading script " + b);
            Ex(h);
            Fx(h, !1, c)
        }, n), g.uc = l);
        f.onload = f.onreadystatechange = function () {
            f.readyState && "loaded" != f.readyState && "complete" != f.readyState || (My(f, d.Hi || !1, l), Ex(h), Fx(h, !0, null))
        };
        f.onerror = function () {
            My(f, !0, l);
            var c = new Ny(Py, "Error while loading script " + b);
            Ex(h);
            Fx(h, !1, c)
        };
        Jg(f, {type: "text/javascript", charset: "UTF-8", src: b});
        Qy(e).appendChild(f);
        return h
    }

    function Qy(b) {
        var c = b.getElementsByTagName("HEAD");
        return c && 0 != c.length ? c[0] : b.documentElement
    }

    function Ly() {
        if (this && this.th) {
            var b = this.th;
            b && "SCRIPT" == b.tagName && My(b, !0, this.uc)
        }
    }

    function My(b, c, d) {
        null != d && ba.clearTimeout(d);
        b.onload = ca;
        b.onerror = ca;
        b.onreadystatechange = ca;
        c && window.setTimeout(function () {
            Tg(b)
        }, 0)
    }

    var Py = 0, Oy = 1;

    function Ny(b, c) {
        var d = "Jsloader error (code #" + b + ")";
        c && (d += ": " + c);
        xa.call(this, d);
        this.code = b
    }

    w(Ny, xa);
    function Ry(b, c) {
        this.b = new it(b);
        this.a = c ? c : "callback";
        this.uc = 5E3
    }

    var Sy = 0;
    Ry.prototype.send = function (b, c, d, e) {
        b = b || null;
        e = e || "_" + (Sy++).toString(36) + ua().toString(36);
        ba._callbacks_ || (ba._callbacks_ = {});
        var f = this.b.clone();
        if (b)for (var g in b)if (!b.hasOwnProperty || b.hasOwnProperty(g)) {
            var h = f, l = g, n = b[g];
            ga(n) || (n = [String(n)]);
            Bt(h.a, l, n)
        }
        c && (ba._callbacks_[e] = Ty(e, c), c = this.a, g = "_callbacks_." + e, ga(g) || (g = [String(g)]), Bt(f.a, c, g));
        c = Ky(f.toString(), {timeout: this.uc, Hi: !0});
        Ix(c, null, Uy(e, b, d), void 0);
        return {ha: e, Uf: c}
    };
    Ry.prototype.cancel = function (b) {
        b && (b.Uf && b.Uf.cancel(), b.ha && Vy(b.ha, !1))
    };
    function Uy(b, c, d) {
        return function () {
            Vy(b, !1);
            d && d(c)
        }
    }

    function Ty(b, c) {
        return function (d) {
            Vy(b, !0);
            c.apply(void 0, arguments)
        }
    }

    function Vy(b, c) {
        ba._callbacks_[b] && (c ? delete ba._callbacks_[b] : ba._callbacks_[b] = ca)
    };
    function Wy(b) {
        var c = /\{z\}/g, d = /\{x\}/g, e = /\{y\}/g, f = /\{-y\}/g;
        return function (g) {
            return null === g ? void 0 : b.replace(c, g[0].toString()).replace(d, g[1].toString()).replace(e, function () {
                return (-g[2] - 1).toString()
            }).replace(f, function () {
                return ((1 << g[0]) + g[2]).toString()
            })
        }
    }

    function Xy(b) {
        return Yy(Ua(b, Wy))
    }

    function Yy(b) {
        return 1 === b.length ? b[0] : function (c, d, e) {
            return null === c ? void 0 : b[Xb((c[1] << c[0]) + c[2], b.length)](c, d, e)
        }
    }

    function Zy() {
    }

    function $y(b) {
        var c = [], d = /\{(\d)-(\d)\}/.exec(b) || /\{([a-z])-([a-z])\}/.exec(b);
        if (d) {
            var e = d[2].charCodeAt(0), f;
            for (f = d[1].charCodeAt(0); f <= e; ++f)c.push(b.replace(d[0], String.fromCharCode(f)))
        } else c.push(b);
        return c
    };
    function az(b) {
        Sh.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            logo: b.logo,
            opaque: b.opaque,
            projection: b.projection,
            state: m(b.state) ? b.state : void 0,
            tileGrid: b.tileGrid,
            tilePixelRatio: b.tilePixelRatio,
            wrapX: b.wrapX
        });
        this.tileUrlFunction = m(b.tileUrlFunction) ? b.tileUrlFunction : Zy;
        this.crossOrigin = m(b.crossOrigin) ? b.crossOrigin : null;
        this.tileLoadFunction = m(b.tileLoadFunction) ? b.tileLoadFunction : bz;
        this.tileClass = m(b.tileClass) ? b.tileClass : xx
    }

    w(az, Sh);
    function bz(b, c) {
        b.Ta().src = c
    }

    k = az.prototype;
    k.bc = function (b, c, d, e, f) {
        var g = this.kb(b, c, d);
        if (zh(this.b, g))return this.b.get(g);
        b = [b, c, d];
        c = Vh(this, b, f);
        e = null === c ? void 0 : this.tileUrlFunction(c, e, f);
        e = new this.tileClass(b, m(e) ? 0 : 4, m(e) ? e : "", this.crossOrigin, this.tileLoadFunction);
        x(e, "change", this.km, !1, this);
        this.b.set(g, e);
        return e
    };
    k.ab = function () {
        return this.tileLoadFunction
    };
    k.bb = function () {
        return this.tileUrlFunction
    };
    k.km = function (b) {
        b = b.target;
        switch (b.state) {
            case 1:
                C(this, new Xh("tileloadstart", b));
                break;
            case 2:
                C(this, new Xh("tileloadend", b));
                break;
            case 3:
                C(this, new Xh("tileloaderror", b))
        }
    };
    k.ib = function (b) {
        this.b.clear();
        this.tileLoadFunction = b;
        this.s()
    };
    k.Fa = function (b) {
        this.b.clear();
        this.tileUrlFunction = b;
        this.s()
    };
    k.Ef = function (b, c, d) {
        b = this.kb(b, c, d);
        zh(this.b, b) && this.b.get(b)
    };
    function cz(b) {
        az.call(this, {
            crossOrigin: "anonymous",
            opaque: !0,
            projection: Ae("EPSG:3857"),
            state: "loading",
            tileLoadFunction: b.tileLoadFunction,
            wrapX: m(b.wrapX) ? b.wrapX : !0
        });
        this.i = m(b.culture) ? b.culture : "en-us";
        this.f = m(b.maxZoom) ? b.maxZoom : -1;
        var c = new it("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" + b.imagerySet);
        (new Ry(c, "jsonp")).send({include: "ImageryProviders", uriScheme: "https", key: b.key}, ra(this.l, this))
    }

    w(cz, az);
    var dz = new pg({html: '<a class="ol-attribution-bing-tos" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'});
    cz.prototype.l = function (b) {
        if (200 != b.statusCode || "OK" != b.statusDescription || "ValidCredentials" != b.authenticationResultCode || 1 != b.resourceSets.length || 1 != b.resourceSets[0].resources.length)Gh(this, "error"); else {
            var c = b.brandLogoUri;
            -1 == c.indexOf("https") && (c = c.replace("http", "https"));
            var d = b.resourceSets[0].resources[0], e = -1 == this.f ? d.zoomMax : this.f;
            b = hg(this.j);
            var f = Qh({
                extent: b,
                minZoom: d.zoomMin,
                maxZoom: e,
                tileSize: d.imageWidth == d.imageHeight ? d.imageWidth : [d.imageWidth, d.imageHeight]
            });
            this.tileGrid =
                f;
            var g = this.i;
            this.tileUrlFunction = Yy(Ua(d.imageUrlSubdomains, function (b) {
                var c = [0, 0, 0], e = d.imageUrl.replace("{subdomain}", b).replace("{culture}", g);
                return function (b) {
                    if (null !== b)return bg(b[0], b[1], -b[2] - 1, c), e.replace("{quadkey}", dg(c))
                }
            }));
            if (d.imageryProviders) {
                var h = Ee(Ae("EPSG:4326"), this.j);
                b = Ua(d.imageryProviders, function (b) {
                    var c = b.attribution, d = {};
                    Sa(b.coverageAreas, function (b) {
                        var c = b.zoomMin, g = Math.min(b.zoomMax, e);
                        b = b.bbox;
                        b = me([b[1], b[0], b[3], b[2]], h);
                        var l, n;
                        for (l = c; l <= g; ++l)n = l.toString(),
                            c = jg(f, b, l), n in d ? d[n].push(c) : d[n] = [c]
                    });
                    return new pg({html: c, tileRanges: d})
                });
                b.push(dz);
                this.g = b
            }
            this.ba = c;
            Gh(this, "ready")
        }
    };
    function ez(b) {
        W.call(this, {attributions: b.attributions, extent: b.extent, logo: b.logo, projection: b.projection});
        this.N = void 0;
        this.aa = m(b.distance) ? b.distance : 20;
        this.C = [];
        this.u = b.source;
        this.u.G("change", ez.prototype.ra, this)
    }

    w(ez, W);
    ez.prototype.fa = function () {
        return this.u
    };
    ez.prototype.fc = function (b, c, d) {
        c !== this.N && (this.clear(), this.N = c, this.u.fc(b, c, d), fz(this), this.xc(this.C))
    };
    ez.prototype.ra = function () {
        this.clear();
        fz(this);
        this.xc(this.C);
        this.s()
    };
    function fz(b) {
        if (m(b.N)) {
            b.C.length = 0;
            for (var c = Ld(), d = b.aa * b.N, e = b.u.Ic(), f = {}, g = 0, h = e.length; g < h; g++) {
                var l = e[g];
                ub(f, ma(l).toString()) || (l = l.Y().V(), Wd(l, c), Pd(c, d, c), l = b.u.Xe(c), l = Ta(l, function (b) {
                    b = ma(b).toString();
                    return b in f ? !1 : f[b] = !0
                }), b.C.push(gz(l)))
            }
        }
    }

    function gz(b) {
        for (var c = b.length, d = [0, 0], e = 0; e < c; e++) {
            var f = b[e].Y().V();
            nd(d, f)
        }
        c = 1 / c;
        d[0] *= c;
        d[1] *= c;
        d = new An(new D(d));
        d.set("features", b);
        return d
    };
    function hz(b) {
        sn.call(this, {projection: b.projection, resolutions: b.resolutions});
        this.Z = m(b.crossOrigin) ? b.crossOrigin : null;
        this.i = m(b.displayDpi) ? b.displayDpi : 96;
        this.f = m(b.params) ? b.params : {};
        var c;
        m(b.url) ? c = zx(b.url, this.f, ra(this.Rl, this)) : c = Ax;
        this.N = c;
        this.b = m(b.imageLoadFunction) ? b.imageLoadFunction : yn;
        this.aa = m(b.hidpi) ? b.hidpi : !0;
        this.T = m(b.metersPerUnit) ? b.metersPerUnit : 1;
        this.u = m(b.ratio) ? b.ratio : 1;
        this.fa = m(b.useOverlay) ? b.useOverlay : !1;
        this.c = null;
        this.C = 0
    }

    w(hz, sn);
    k = hz.prototype;
    k.Ql = function () {
        return this.f
    };
    k.Hc = function (b, c, d, e) {
        c = tn(this, c);
        d = this.aa ? d : 1;
        var f = this.c;
        if (null !== f && this.C == this.a && f.resolution == c && f.g == d && Ud(f.R(), b))return f;
        1 != this.u && (b = b.slice(), le(b, this.u));
        e = this.N(b, [je(b) / c * d, ge(b) / c * d], e);
        m(e) ? (f = new wx(b, c, d, this.g, e, this.Z, this.b), x(f, "change", this.l, !1, this)) : f = null;
        this.c = f;
        this.C = this.a;
        return f
    };
    k.Pl = function () {
        return this.b
    };
    k.Tl = function (b) {
        Gb(this.f, b);
        this.s()
    };
    k.Rl = function (b, c, d, e) {
        var f;
        f = this.T;
        var g = je(d), h = ge(d), l = e[0], n = e[1], p = .0254 / this.i;
        f = n * g > l * h ? g * f / (l * p) : h * f / (n * p);
        d = ee(d);
        e = {
            OPERATION: this.fa ? "GETDYNAMICMAPOVERLAYIMAGE" : "GETMAPIMAGE",
            VERSION: "2.0.0",
            LOCALE: "en",
            CLIENTAGENT: "ol.source.ImageMapGuide source",
            CLIP: "1",
            SETDISPLAYDPI: this.i,
            SETDISPLAYWIDTH: Math.round(e[0]),
            SETDISPLAYHEIGHT: Math.round(e[1]),
            SETVIEWSCALE: f,
            SETVIEWCENTERX: d[0],
            SETVIEWCENTERY: d[1]
        };
        Gb(e, c);
        return lo(no([b], e))
    };
    k.Sl = function (b) {
        this.c = null;
        this.b = b;
        this.s()
    };
    function iz(b) {
        var c = m(b.attributions) ? b.attributions : null, d = b.imageExtent, e, f;
        m(b.imageSize) && (e = ge(d) / b.imageSize[1], f = [e]);
        var g = m(b.crossOrigin) ? b.crossOrigin : null, h = m(b.imageLoadFunction) ? b.imageLoadFunction : yn;
        sn.call(this, {attributions: c, logo: b.logo, projection: Ae(b.projection), resolutions: f});
        this.b = new wx(d, e, 1, c, b.url, g, h);
        x(this.b, "change", this.l, !1, this)
    }

    w(iz, sn);
    iz.prototype.Hc = function (b) {
        return ie(b, this.b.R()) ? this.b : null
    };
    function jz(b) {
        b = m(b) ? b : {};
        sn.call(this, {
            attributions: b.attributions,
            logo: b.logo,
            projection: b.projection,
            resolutions: b.resolutions
        });
        this.aa = m(b.crossOrigin) ? b.crossOrigin : null;
        this.f = b.url;
        this.u = m(b.imageLoadFunction) ? b.imageLoadFunction : yn;
        this.c = b.params;
        this.i = !0;
        kz(this);
        this.Z = b.serverType;
        this.fa = m(b.hidpi) ? b.hidpi : !0;
        this.b = null;
        this.C = [0, 0];
        this.T = 0;
        this.N = m(b.ratio) ? b.ratio : 1.5
    }

    w(jz, sn);
    var lz = [101, 101];
    k = jz.prototype;
    k.Zl = function (b, c, d, e) {
        if (m(this.f)) {
            var f = fe(b, c, 0, lz), g = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.c.LAYERS
            };
            Gb(g, this.c, e);
            e = Math.floor((f[3] - b[1]) / c);
            g[this.i ? "I" : "X"] = Math.floor((b[0] - f[0]) / c);
            g[this.i ? "J" : "Y"] = e;
            return mz(this, f, lz, 1, Ae(d), g)
        }
    };
    k.am = function () {
        return this.c
    };
    k.Hc = function (b, c, d, e) {
        if (!m(this.f))return null;
        c = tn(this, c);
        1 == d || this.fa && m(this.Z) || (d = 1);
        var f = this.b;
        if (null !== f && this.T == this.a && f.resolution == c && f.g == d && Ud(f.R(), b))return f;
        f = {SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0};
        Gb(f, this.c);
        b = b.slice();
        var g = (b[0] + b[2]) / 2, h = (b[1] + b[3]) / 2;
        if (1 != this.N) {
            var l = this.N * je(b) / 2, n = this.N * ge(b) / 2;
            b[0] = g - l;
            b[1] = h - n;
            b[2] = g + l;
            b[3] = h + n
        }
        var l = c / d, n = Math.ceil(je(b) / l), p = Math.ceil(ge(b) / l);
        b[0] = g - l * n / 2;
        b[2] = g + l * n / 2;
        b[1] = h -
            l * p / 2;
        b[3] = h + l * p / 2;
        this.C[0] = n;
        this.C[1] = p;
        e = mz(this, b, this.C, d, e, f);
        this.b = new wx(b, c, d, this.g, e, this.aa, this.u);
        this.T = this.a;
        x(this.b, "change", this.l, !1, this);
        return this.b
    };
    k.$l = function () {
        return this.u
    };
    function mz(b, c, d, e, f, g) {
        g[b.i ? "CRS" : "SRS"] = f.a;
        "STYLES" in b.c || (g.STYLES = new String(""));
        if (1 != e)switch (b.Z) {
            case "geoserver":
                e = 90 * e + .5 | 0;
                g.FORMAT_OPTIONS = m(g.FORMAT_OPTIONS) ? g.FORMAT_OPTIONS + (";dpi:" + e) : "dpi:" + e;
                break;
            case "mapserver":
                g.MAP_RESOLUTION = 90 * e;
                break;
            case "carmentaserver":
            case "qgis":
                g.DPI = 90 * e
        }
        g.WIDTH = d[0];
        g.HEIGHT = d[1];
        d = f.f;
        var h;
        b.i && "ne" == d.substr(0, 2) ? h = [c[1], c[0], c[3], c[2]] : h = c;
        g.BBOX = h.join(",");
        return lo(no([b.f], g))
    }

    k.bm = function () {
        return this.f
    };
    k.cm = function (b) {
        this.b = null;
        this.u = b;
        this.s()
    };
    k.dm = function (b) {
        b != this.f && (this.f = b, this.b = null, this.s())
    };
    k.em = function (b) {
        Gb(this.c, b);
        kz(this);
        this.b = null;
        this.s()
    };
    function kz(b) {
        b.i = 0 <= Na(Ab(b.c, "VERSION", "1.3.0"), "1.3")
    };
    function nz(b) {
        var c = m(b.projection) ? b.projection : "EPSG:3857", d = m(b.tileGrid) ? b.tileGrid : Qh({
            extent: hg(c),
            maxZoom: b.maxZoom,
            tileSize: b.tileSize
        });
        az.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            logo: b.logo,
            projection: c,
            tileGrid: d,
            tileLoadFunction: b.tileLoadFunction,
            tilePixelRatio: b.tilePixelRatio,
            tileUrlFunction: Zy,
            wrapX: m(b.wrapX) ? b.wrapX : !0
        });
        m(b.tileUrlFunction) ? this.Fa(b.tileUrlFunction) : m(b.urls) ? this.Fa(Xy(b.urls)) : m(b.url) && this.f(b.url)
    }

    w(nz, az);
    nz.prototype.f = function (b) {
        this.Fa(Xy($y(b)))
    };
    function oz(b) {
        b = m(b) ? b : {};
        var c;
        m(b.attributions) ? c = b.attributions : c = [pz];
        nz.call(this, {
            attributions: c,
            crossOrigin: m(b.crossOrigin) ? b.crossOrigin : "anonymous",
            opaque: !0,
            maxZoom: m(b.maxZoom) ? b.maxZoom : 19,
            tileLoadFunction: b.tileLoadFunction,
            url: m(b.url) ? b.url : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            wrapX: b.wrapX
        })
    }

    w(oz, nz);
    var pz = new pg({html: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'});

    function qz(b) {
        b = m(b) ? b : {};
        var c = rz[b.layer];
        this.i = b.layer;
        nz.call(this, {
            attributions: c.attributions,
            crossOrigin: "anonymous",
            logo: "https://developer.mapquest.com/content/osm/mq_logo.png",
            maxZoom: c.maxZoom,
            opaque: !0,
            tileLoadFunction: b.tileLoadFunction,
            url: m(b.url) ? b.url : "https://otile{1-4}-s.mqcdn.com/tiles/1.0.0/" + this.i + "/{z}/{x}/{y}.jpg"
        })
    }

    w(qz, nz);
    var sz = new pg({html: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a>'}), rz = {
        osm: {
            maxZoom: 19,
            attributions: [sz, pz]
        },
        sat: {
            maxZoom: 18,
            attributions: [sz, new pg({html: "Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency"})]
        },
        hyb: {maxZoom: 18, attributions: [sz, pz]}
    };
    qz.prototype.l = function () {
        return this.i
    };
    var tz = {
        terrain: {Za: "jpg", opaque: !0},
        "terrain-background": {Za: "jpg", opaque: !0},
        "terrain-labels": {Za: "png", opaque: !1},
        "terrain-lines": {Za: "png", opaque: !1},
        "toner-background": {Za: "png", opaque: !0},
        toner: {Za: "png", opaque: !0},
        "toner-hybrid": {Za: "png", opaque: !1},
        "toner-labels": {Za: "png", opaque: !1},
        "toner-lines": {Za: "png", opaque: !1},
        "toner-lite": {Za: "png", opaque: !0},
        watercolor: {Za: "jpg", opaque: !0}
    }, uz = {
        terrain: {minZoom: 4, maxZoom: 18},
        toner: {minZoom: 0, maxZoom: 20},
        watercolor: {minZoom: 3, maxZoom: 16}
    };

    function vz(b) {
        var c = b.layer.indexOf("-"), d = tz[b.layer];
        nz.call(this, {
            attributions: wz,
            crossOrigin: "anonymous",
            maxZoom: uz[-1 == c ? b.layer : b.layer.slice(0, c)].maxZoom,
            opaque: d.opaque,
            tileLoadFunction: b.tileLoadFunction,
            url: m(b.url) ? b.url : "https://stamen-tiles-{a-d}.a.ssl.fastly.net/" + b.layer + "/{z}/{x}/{y}." + d.Za
        })
    }

    w(vz, nz);
    var wz = [new pg({html: 'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'}), pz];

    function xz(b) {
        b = m(b) ? b : {};
        var c = m(b.params) ? b.params : {};
        az.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            logo: b.logo,
            projection: b.projection,
            tileGrid: b.tileGrid,
            tileLoadFunction: b.tileLoadFunction,
            tileUrlFunction: ra(this.im, this),
            wrapX: m(b.wrapX) ? b.wrapX : !0
        });
        var d = b.urls;
        !m(d) && m(b.url) && (d = $y(b.url));
        this.i = null != d ? d : [];
        this.f = c;
        this.l = Ld()
    }

    w(xz, az);
    k = xz.prototype;
    k.fm = function () {
        return this.f
    };
    k.cc = function (b, c, d) {
        b = xz.$.cc.call(this, b, c, d);
        return 1 == c ? b : ld(b, c, this.c)
    };
    k.gm = function () {
        return this.i
    };
    k.hm = function (b) {
        b = m(b) ? $y(b) : null;
        this.Qg(b)
    };
    k.Qg = function (b) {
        this.i = null != b ? b : [];
        this.s()
    };
    k.im = function (b, c, d) {
        var e = this.tileGrid;
        null === e && (e = Uh(this, d));
        if (!(e.a.length <= b[0])) {
            var f = Lh(e, b, this.l), g = md(e.Ja(b[0]), this.c);
            1 != c && (g = ld(g, c, this.c));
            e = {F: "image", FORMAT: "PNG32", TRANSPARENT: !0};
            Gb(e, this.f);
            var h = this.i;
            0 == h.length ? b = void 0 : (d = d.a.split(":").pop(), e.SIZE = g[0] + "," + g[1], e.BBOX = f.join(","), e.BBOXSR = d, e.IMAGESR = d, e.DPI = Math.round(90 * c), b = 1 == h.length ? h[0] : h[Xb((b[1] << b[0]) + b[2], h.length)], za(b, "/") || (b += "/"), za(b, "MapServer/") ? b += "export" : za(b, "ImageServer/") && (b += "exportImage"),
                b = lo(no([b], e)));
            return b
        }
    };
    k.jm = function (b) {
        Gb(this.f, b);
        this.s()
    };
    function yz(b, c, d) {
        Ch.call(this, b, 2);
        this.f = c;
        this.c = d;
        this.b = {}
    }

    w(yz, Ch);
    yz.prototype.Ta = function (b) {
        b = m(b) ? ma(b) : -1;
        if (b in this.b)return this.b[b];
        var c = this.f, d = Wi(c[0], c[1]);
        d.strokeStyle = "black";
        d.strokeRect(.5, .5, c[0] + .5, c[1] + .5);
        d.fillStyle = "black";
        d.textAlign = "center";
        d.textBaseline = "middle";
        d.font = "24px sans-serif";
        d.fillText(this.c, c[0] / 2, c[1] / 2);
        return this.b[b] = d.canvas
    };
    function zz(b) {
        Sh.call(this, {opaque: !1, projection: b.projection, tileGrid: b.tileGrid, wrapX: m(b.wrapX) ? b.wrapX : !0})
    }

    w(zz, Sh);
    zz.prototype.bc = function (b, c, d) {
        var e = this.kb(b, c, d);
        if (zh(this.b, e))return this.b.get(e);
        var f = md(this.tileGrid.Ja(b));
        b = [b, c, d];
        c = Vh(this, b);
        c = null === c ? "" : eg(Vh(this, c));
        f = new yz(b, f, c);
        this.b.set(e, f);
        return f
    };
    function Az(b) {
        az.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            projection: Ae("EPSG:3857"),
            state: "loading",
            tileLoadFunction: b.tileLoadFunction,
            wrapX: m(b.wrapX) ? b.wrapX : !0
        });
        (new Ry(b.url)).send(void 0, ra(this.f, this))
    }

    w(Az, az);
    Az.prototype.f = function (b) {
        var c = Ae("EPSG:4326"), d = this.j, e;
        m(b.bounds) && (e = me(b.bounds, Ee(c, d)));
        var f = b.minzoom || 0, g = b.maxzoom || 22;
        this.tileGrid = d = Qh({extent: hg(d), maxZoom: g, minZoom: f});
        this.tileUrlFunction = Xy(b.tiles);
        if (m(b.attribution) && null === this.g) {
            c = m(e) ? e : c.R();
            e = {};
            for (var h; f <= g; ++f)h = f.toString(), e[h] = [jg(d, c, f)];
            this.g = [new pg({html: b.attribution, tileRanges: e})]
        }
        Gh(this, "ready")
    };
    function Bz(b) {
        Sh.call(this, {projection: Ae("EPSG:3857"), state: "loading"});
        this.l = m(b.preemptive) ? b.preemptive : !0;
        this.f = Zy;
        this.i = void 0;
        (new Ry(b.url)).send(void 0, ra(this.lm, this))
    }

    w(Bz, Sh);
    k = Bz.prototype;
    k.zj = function () {
        return this.i
    };
    k.Ki = function (b, c, d, e, f) {
        null === this.tileGrid ? !0 === f ? ri(function () {
            d.call(e, null)
        }) : d.call(e, null) : (c = this.tileGrid.jd(b, c), Cz(this.bc(c[0], c[1], c[2], 1, this.j), b, d, e, f))
    };
    k.lm = function (b) {
        var c = Ae("EPSG:4326"), d = this.j, e;
        m(b.bounds) && (e = me(b.bounds, Ee(c, d)));
        var f = b.minzoom || 0, g = b.maxzoom || 22;
        this.tileGrid = d = Qh({extent: hg(d), maxZoom: g, minZoom: f});
        this.i = b.template;
        var h = b.grids;
        if (null != h) {
            this.f = Xy(h);
            if (m(b.attribution)) {
                c = m(e) ? e : c.R();
                for (e = {}; f <= g; ++f)h = f.toString(), e[h] = [jg(d, c, f)];
                this.g = [new pg({html: b.attribution, tileRanges: e})]
            }
            Gh(this, "ready")
        } else Gh(this, "error")
    };
    k.bc = function (b, c, d, e, f) {
        var g = this.kb(b, c, d);
        if (zh(this.b, g))return this.b.get(g);
        b = [b, c, d];
        c = Vh(this, b, f);
        e = this.f(c, e, f);
        e = new Dz(b, m(e) ? 0 : 4, m(e) ? e : "", Lh(this.tileGrid, b), this.l);
        this.b.set(g, e);
        return e
    };
    k.Ef = function (b, c, d) {
        b = this.kb(b, c, d);
        zh(this.b, b) && this.b.get(b)
    };
    function Dz(b, c, d, e, f) {
        Ch.call(this, b, c);
        this.j = d;
        this.b = e;
        this.l = f;
        this.f = this.g = this.c = null
    }

    w(Dz, Ch);
    k = Dz.prototype;
    k.Ta = function () {
        return null
    };
    function Ez(b, c) {
        if (null === b.c || null === b.g || null == b.f)return null;
        var d = b.c[Math.floor((1 - (c[1] - b.b[1]) / (b.b[3] - b.b[1])) * b.c.length)];
        if (!ia(d))return null;
        d = d.charCodeAt(Math.floor((c[0] - b.b[0]) / (b.b[2] - b.b[0]) * d.length));
        93 <= d && d--;
        35 <= d && d--;
        d = b.g[d - 32];
        return null != d ? b.f[d] : null
    }

    function Cz(b, c, d, e, f) {
        0 == b.state && !0 === f ? (Vc(b, "change", function () {
            d.call(e, Ez(this, c))
        }, !1, b), Fz(b)) : !0 === f ? ri(function () {
            d.call(e, Ez(this, c))
        }, b) : d.call(e, Ez(b, c))
    }

    k.ob = function () {
        return this.j
    };
    k.Oj = function () {
        this.state = 3;
        Dh(this)
    };
    k.Yj = function (b) {
        this.c = b.grid;
        this.g = b.keys;
        this.f = b.data;
        this.state = 4;
        Dh(this)
    };
    function Fz(b) {
        0 == b.state && (b.state = 1, (new Ry(b.j)).send(void 0, ra(b.Yj, b), ra(b.Oj, b)))
    }

    k.load = function () {
        this.l && Fz(this)
    };
    function Gz(b) {
        W.call(this, {attributions: b.attributions, logo: b.logo, projection: void 0, state: "ready", wrapX: b.wrapX});
        this.fa = m(b.format) ? b.format : null;
        this.C = b.tileGrid;
        this.N = Zy;
        this.aa = m(b.tileLoadFunction) ? b.tileLoadFunction : null;
        this.u = {};
        m(b.tileUrlFunction) ? (this.N = b.tileUrlFunction, this.s()) : m(b.urls) ? (this.N = Xy(b.urls), this.s()) : m(b.url) && (this.N = Xy($y(b.url)), this.s())
    }

    w(Gz, W);
    k = Gz.prototype;
    k.clear = function () {
        yb(this.u)
    };
    function Hz(b, c, d, e) {
        var f = b.u;
        b = b.C.jd(c, d);
        f = f[b[0] + "/" + b[1] + "/" + b[2]];
        if (m(f))for (b = 0, d = f.length; b < d; ++b) {
            var g = f[b];
            if (g.Y().Ne(c) && e.call(void 0, g))break
        }
    }

    k.Hb = function (b, c, d, e) {
        var f = this.C, g = this.u;
        c = Ph(f, c);
        b = jg(f, b, c);
        for (var h, f = b.a; f <= b.f; ++f)for (h = b.b; h <= b.c; ++h) {
            var l = g[c + "/" + f + "/" + h];
            if (m(l)) {
                var n, p;
                n = 0;
                for (p = l.length; n < p; ++n) {
                    var q = d.call(e, l[n]);
                    if (q)return q
                }
            }
        }
    };
    k.Ic = function () {
        var b = this.u, c = [], d;
        for (d in b)cb(c, b[d]);
        return c
    };
    k.Zi = function (b, c) {
        var d = [];
        Hz(this, b, c, function (b) {
            d.push(b)
        });
        return d
    };
    function Iz(b, c, d) {
        var e = b.C;
        b.D && d.c && (c = fg(c, e, d));
        return ig(c, e) ? c : null
    }

    k.fc = function (b, c, d) {
        function e(b, c) {
            h[b] = c;
            this.s()
        }

        var f = this.C, g = this.N, h = this.u, l = Ph(f, c), f = jg(f, b, l), n = [l, 0, 0], p, q;
        for (p = f.a; p <= f.f; ++p)for (q = f.b; q <= f.c; ++q) {
            var r = l + "/" + p + "/" + q;
            if (!(r in h)) {
                n[1] = p;
                n[2] = q;
                var t = Iz(this, n, d), t = null === t ? void 0 : g(t, 1, d);
                m(t) && (h[r] = [], r = sa(e, r), null === this.aa ? rp(t, this.fa, r).call(this, b, c, d) : this.aa(t, ra(r, this)))
            }
        }
    };
    function Jz(b) {
        b = m(b) ? b : {};
        var c = m(b.params) ? b.params : {};
        az.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            logo: b.logo,
            opaque: !Ab(c, "TRANSPARENT", !0),
            projection: b.projection,
            tileGrid: b.tileGrid,
            tileLoadFunction: b.tileLoadFunction,
            tileUrlFunction: ra(this.qm, this),
            wrapX: m(b.wrapX) ? b.wrapX : !0
        });
        var d = b.urls;
        !m(d) && m(b.url) && (d = $y(b.url));
        this.i = null != d ? d : [];
        this.v = m(b.gutter) ? b.gutter : 0;
        this.f = c;
        this.l = !0;
        this.u = b.serverType;
        this.N = m(b.hidpi) ? b.hidpi : !0;
        this.C = "";
        Kz(this);
        this.T = Ld();
        Lz(this)
    }

    w(Jz, az);
    k = Jz.prototype;
    k.mm = function (b, c, d, e) {
        d = Ae(d);
        var f = this.tileGrid;
        null === f && (f = Uh(this, d));
        c = f.jd(b, c);
        if (!(f.a.length <= c[0])) {
            var g = f.ua(c[0]), h = Lh(f, c, this.T), f = md(f.Ja(c[0]), this.c), l = this.v;
            0 !== l && (f = kd(f, l, this.c), h = Pd(h, g * l, h));
            l = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.f.LAYERS
            };
            Gb(l, this.f, e);
            e = Math.floor((h[3] - b[1]) / g);
            l[this.l ? "I" : "X"] = Math.floor((b[0] - h[0]) / g);
            l[this.l ? "J" : "Y"] = e;
            return Mz(this, c, f, h, 1, d, l)
        }
    };
    k.Kd = function () {
        return this.v
    };
    k.kb = function (b, c, d) {
        return this.C + Jz.$.kb.call(this, b, c, d)
    };
    k.nm = function () {
        return this.f
    };
    function Mz(b, c, d, e, f, g, h) {
        var l = b.i;
        if (0 != l.length) {
            h.WIDTH = d[0];
            h.HEIGHT = d[1];
            h[b.l ? "CRS" : "SRS"] = g.a;
            "STYLES" in b.f || (h.STYLES = new String(""));
            if (1 != f)switch (b.u) {
                case "geoserver":
                    d = 90 * f + .5 | 0;
                    h.FORMAT_OPTIONS = m(h.FORMAT_OPTIONS) ? h.FORMAT_OPTIONS + (";dpi:" + d) : "dpi:" + d;
                    break;
                case "mapserver":
                    h.MAP_RESOLUTION = 90 * f;
                    break;
                case "carmentaserver":
                case "qgis":
                    h.DPI = 90 * f
            }
            g = g.f;
            b.l && "ne" == g.substr(0, 2) && (b = e[0], e[0] = e[1], e[1] = b, b = e[2], e[2] = e[3], e[3] = b);
            h.BBOX = e.join(",");
            return lo(no([1 == l.length ? l[0] : l[Xb((c[1] <<
                c[0]) + c[2], l.length)]], h))
        }
    }

    k.cc = function (b, c, d) {
        b = Jz.$.cc.call(this, b, c, d);
        return 1 != c && this.N && m(this.u) ? ld(b, c, this.c) : b
    };
    k.om = function () {
        return this.i
    };
    function Kz(b) {
        var c = 0, d = [], e, f;
        e = 0;
        for (f = b.i.length; e < f; ++e)d[c++] = b.i[e];
        for (var g in b.f)d[c++] = g + "-" + b.f[g];
        b.C = d.join("#")
    }

    k.pm = function (b) {
        b = m(b) ? $y(b) : null;
        this.Rg(b)
    };
    k.Rg = function (b) {
        this.i = null != b ? b : [];
        Kz(this);
        this.s()
    };
    k.qm = function (b, c, d) {
        var e = this.tileGrid;
        null === e && (e = Uh(this, d));
        if (!(e.a.length <= b[0])) {
            1 == c || this.N && m(this.u) || (c = 1);
            var f = e.ua(b[0]), g = Lh(e, b, this.T), e = md(e.Ja(b[0]), this.c), h = this.v;
            0 !== h && (e = kd(e, h, this.c), g = Pd(g, f * h, g));
            1 != c && (e = ld(e, c, this.c));
            f = {SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0};
            Gb(f, this.f);
            return Mz(this, b, e, g, c, d, f)
        }
    };
    k.rm = function (b) {
        Gb(this.f, b);
        Kz(this);
        Lz(this);
        this.s()
    };
    function Lz(b) {
        b.l = 0 <= Na(Ab(b.f, "VERSION", "1.3.0"), "1.3")
    };
    function Nz(b) {
        this.j = b.matrixIds;
        Hh.call(this, {
            extent: b.extent,
            origin: b.origin,
            origins: b.origins,
            resolutions: b.resolutions,
            tileSize: b.tileSize,
            tileSizes: b.tileSizes,
            sizes: b.sizes
        })
    }

    w(Nz, Hh);
    Nz.prototype.B = function () {
        return this.j
    };
    function Oz(b, c) {
        var d = [], e = [], f = [], g = [], h = [], l;
        l = Ae(b.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var n = l.Nd(), p = "ne" == l.f.substr(0, 2);
        gb(b.TileMatrix, function (b, c) {
            return c.ScaleDenominator - b.ScaleDenominator
        });
        Sa(b.TileMatrix, function (b) {
            e.push(b.Identifier);
            var c = 2.8E-4 * b.ScaleDenominator / n, l = b.TileWidth, v = b.TileHeight;
            p ? f.push([b.TopLeftCorner[1], b.TopLeftCorner[0]]) : f.push(b.TopLeftCorner);
            d.push(c);
            g.push(l == v ? l : [l, v]);
            h.push([b.MatrixWidth, -b.MatrixHeight])
        });
        return new Nz({
            extent: c,
            origins: f, resolutions: d, matrixIds: e, tileSizes: g, sizes: h
        })
    };
    function Pz(b) {
        function c(b) {
            b = "KVP" == e ? lo(no([b], g)) : b.replace(/\{(\w+?)\}/g, function (b, c) {
                return c.toLowerCase() in g ? g[c.toLowerCase()] : b
            });
            return function (c) {
                if (null !== c) {
                    var d = {TileMatrix: f.j[c[0]], TileCol: c[1], TileRow: -c[2] - 1};
                    Gb(d, h);
                    c = b;
                    return c = "KVP" == e ? lo(no([c], d)) : c.replace(/\{(\w+?)\}/g, function (b, c) {
                        return d[c]
                    })
                }
            }
        }

        this.T = m(b.version) ? b.version : "1.0.0";
        this.u = m(b.format) ? b.format : "image/jpeg";
        this.f = m(b.dimensions) ? b.dimensions : {};
        this.v = "";
        Qz(this);
        this.C = b.layer;
        this.l = b.matrixSet;
        this.N = b.style;
        var d = b.urls;
        !m(d) && m(b.url) && (d = $y(b.url));
        this.i = null != d ? d : [];
        var e = this.Z = m(b.requestEncoding) ? b.requestEncoding : "KVP", f = b.tileGrid, g = {
            layer: this.C,
            style: this.N,
            tilematrixset: this.l
        };
        "KVP" == e && Gb(g, {Service: "WMTS", Request: "GetTile", Version: this.T, Format: this.u});
        var h = this.f, d = 0 < this.i.length ? Yy(Ua(this.i, c)) : Zy;
        az.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            logo: b.logo,
            projection: b.projection,
            tileClass: b.tileClass,
            tileGrid: f,
            tileLoadFunction: b.tileLoadFunction,
            tilePixelRatio: b.tilePixelRatio,
            tileUrlFunction: d,
            wrapX: m(b.wrapX) ? b.wrapX : !1
        })
    }

    w(Pz, az);
    k = Pz.prototype;
    k.Xi = function () {
        return this.f
    };
    k.aj = function () {
        return this.u
    };
    k.kb = function (b, c, d) {
        return this.v + Pz.$.kb.call(this, b, c, d)
    };
    k.sm = function () {
        return this.C
    };
    k.mj = function () {
        return this.l
    };
    k.xj = function () {
        return this.Z
    };
    k.tm = function () {
        return this.N
    };
    k.um = function () {
        return this.i
    };
    k.Dj = function () {
        return this.T
    };
    function Qz(b) {
        var c = 0, d = [], e;
        for (e in b.f)d[c++] = e + "-" + b.f[e];
        b.v = d.join("/")
    }

    k.ro = function (b) {
        Gb(this.f, b);
        Qz(this);
        this.s()
    };
    function Rz(b) {
        b = m(b) ? b : {};
        var c = b.size, d = c[0], e = c[1], f = [], g = 256;
        switch (m(b.tierSizeCalculation) ? b.tierSizeCalculation : "default") {
            case "default":
                for (; d > g || e > g;)f.push([Math.ceil(d / g), Math.ceil(e / g)]), g += g;
                break;
            case "truncated":
                for (; d > g || e > g;)f.push([Math.ceil(d / g), Math.ceil(e / g)]), d >>= 1, e >>= 1
        }
        f.push([1, 1]);
        f.reverse();
        for (var g = [1], h = [0], e = 1, d = f.length; e < d; e++)g.push(1 << e), h.push(f[e - 1][0] * f[e - 1][1] + h[e - 1]);
        g.reverse();
        var c = [0, -c[1], c[0], 0], c = new Hh({extent: c, origin: de(c), resolutions: g}), l = b.url;
        az.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            logo: b.logo,
            tileClass: Sz,
            tileGrid: c,
            tileUrlFunction: function (b) {
                if (null !== b) {
                    var c = b[0], d = b[1];
                    b = -b[2] - 1;
                    return l + "TileGroup" + ((d + b * f[c][0] + h[c]) / 256 | 0) + "/" + c + "-" + d + "-" + b + ".jpg"
                }
            }
        })
    }

    w(Rz, az);
    function Sz(b, c, d, e, f) {
        xx.call(this, b, c, d, e, f);
        this.f = {}
    }

    w(Sz, xx);
    Sz.prototype.Ta = function (b) {
        var c = m(b) ? ma(b).toString() : "";
        if (c in this.f)return this.f[c];
        b = Sz.$.Ta.call(this, b);
        if (2 == this.state) {
            if (256 == b.width && 256 == b.height)return this.f[c] = b;
            var d = Wi(256, 256);
            d.drawImage(b, 0, 0);
            return this.f[c] = d.canvas
        }
        return b
    };
    function Tz(b) {
        b = m(b) ? b : {};
        this.b = m(b.initialSize) ? b.initialSize : 256;
        this.c = m(b.maxSize) ? b.maxSize : m(va) ? va : 2048;
        this.a = m(b.space) ? b.space : 1;
        this.g = [new Uz(this.b, this.a)];
        this.f = this.b;
        this.i = [new Uz(this.f, this.a)]
    }

    Tz.prototype.add = function (b, c, d, e, f, g) {
        if (c + this.a > this.c || d + this.a > this.c)return null;
        e = Vz(this, !1, b, c, d, e, g);
        if (null === e)return null;
        b = Vz(this, !0, b, c, d, m(f) ? f : qe, g);
        return {offsetX: e.offsetX, offsetY: e.offsetY, image: e.image, rg: b.image}
    };
    function Vz(b, c, d, e, f, g, h) {
        var l = c ? b.i : b.g, n, p, q;
        p = 0;
        for (q = l.length; p < q; ++p) {
            n = l[p];
            n = n.add(d, e, f, g, h);
            if (null !== n)return n;
            null === n && p === q - 1 && (c ? (n = Math.min(2 * b.f, b.c), b.f = n) : (n = Math.min(2 * b.b, b.c), b.b = n), n = new Uz(n, b.a), l.push(n), ++q)
        }
    }

    function Uz(b, c) {
        this.a = c;
        this.b = [{x: 0, y: 0, width: b, height: b}];
        this.f = {};
        this.c = Pg("CANVAS");
        this.c.width = b;
        this.c.height = b;
        this.g = this.c.getContext("2d")
    }

    Uz.prototype.get = function (b) {
        return Ab(this.f, b, null)
    };
    Uz.prototype.add = function (b, c, d, e, f) {
        var g, h, l;
        h = 0;
        for (l = this.b.length; h < l; ++h)if (g = this.b[h], g.width >= c + this.a && g.height >= d + this.a)return l = {
            offsetX: g.x + this.a,
            offsetY: g.y + this.a,
            image: this.c
        }, this.f[b] = l, e.call(f, this.g, g.x + this.a, g.y + this.a), b = h, c = c + this.a, d = d + this.a, f = e = void 0, g.width - c > g.height - d ? (e = {
            x: g.x + c,
            y: g.y,
            width: g.width - c,
            height: g.height
        }, f = {x: g.x, y: g.y + d, width: c, height: g.height - d}, Wz(this, b, e, f)) : (e = {
            x: g.x + c,
            y: g.y,
            width: g.width - c,
            height: d
        }, f = {
            x: g.x, y: g.y + d, width: g.width, height: g.height -
            d
        }, Wz(this, b, e, f)), l;
        return null
    };
    function Wz(b, c, d, e) {
        c = [c, 1];
        0 < d.width && 0 < d.height && c.push(d);
        0 < e.width && 0 < e.height && c.push(e);
        b.b.splice.apply(b.b, c)
    };
    function Xz(b) {
        this.u = this.f = this.g = null;
        this.l = m(b.fill) ? b.fill : null;
        this.N = [0, 0];
        this.a = b.points;
        this.c = m(b.radius) ? b.radius : b.radius1;
        this.i = m(b.radius2) ? b.radius2 : this.c;
        this.j = m(b.angle) ? b.angle : 0;
        this.b = m(b.stroke) ? b.stroke : null;
        this.C = this.T = this.ca = null;
        var c = b.atlasManager, d = "", e = "", f = 0, g = null, h, l = 0;
        null !== this.b && (h = yg(this.b.a), l = this.b.b, m(l) || (l = 1), g = this.b.c, ej || (g = null), e = this.b.g, m(e) || (e = "round"), d = this.b.f, m(d) || (d = "round"), f = this.b.i, m(f) || (f = 10));
        var n = 2 * (this.c + l) + 1, d = {
            strokeStyle: h,
            ud: l, size: n, lineCap: d, lineDash: g, lineJoin: e, miterLimit: f
        };
        if (m(c)) {
            var n = Math.round(n), e = null === this.l, p;
            e && (p = ra(this.Ug, this, d));
            f = this.zb();
            p = c.add(f, n, n, ra(this.Vg, this, d), p);
            this.f = p.image;
            this.N = [p.offsetX, p.offsetY];
            c = p.image.width;
            this.u = e ? p.rg : this.f
        } else this.f = Pg("CANVAS"), this.f.height = n, this.f.width = n, c = n = this.f.width, p = this.f.getContext("2d"), this.Vg(d, p, 0, 0), null === this.l ? (p = this.u = Pg("CANVAS"), p.height = d.size, p.width = d.size, p = p.getContext("2d"), this.Ug(d, p, 0, 0)) : this.u = this.f;
        this.ca =
            [n / 2, n / 2];
        this.T = [n, n];
        this.C = [c, c];
        Bk.call(this, {
            opacity: 1,
            rotateWithView: !1,
            rotation: m(b.rotation) ? b.rotation : 0,
            scale: 1,
            snapToPixel: m(b.snapToPixel) ? b.snapToPixel : !0
        })
    }

    w(Xz, Bk);
    k = Xz.prototype;
    k.yb = function () {
        return this.ca
    };
    k.zm = function () {
        return this.j
    };
    k.Am = function () {
        return this.l
    };
    k.le = function () {
        return this.u
    };
    k.Sb = function () {
        return this.f
    };
    k.Ld = function () {
        return this.C
    };
    k.qd = function () {
        return 2
    };
    k.Db = function () {
        return this.N
    };
    k.Bm = function () {
        return this.a
    };
    k.Cm = function () {
        return this.c
    };
    k.wj = function () {
        return this.i
    };
    k.fb = function () {
        return this.T
    };
    k.Dm = function () {
        return this.b
    };
    k.ef = ca;
    k.load = ca;
    k.Df = ca;
    k.Vg = function (b, c, d, e) {
        var f;
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        this.i !== this.c && (this.a *= 2);
        for (d = 0; d <= this.a; d++)e = 2 * d * Math.PI / this.a - Math.PI / 2 + this.j, f = 0 === d % 2 ? this.c : this.i, c.lineTo(b.size / 2 + f * Math.cos(e), b.size / 2 + f * Math.sin(e));
        null !== this.l && (c.fillStyle = yg(this.l.a), c.fill());
        null !== this.b && (c.strokeStyle = b.strokeStyle, c.lineWidth = b.ud, null === b.lineDash || c.setLineDash(b.lineDash), c.lineCap = b.lineCap, c.lineJoin = b.lineJoin, c.miterLimit = b.miterLimit, c.stroke());
        c.closePath()
    };
    k.Ug = function (b, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        this.i !== this.c && (this.a *= 2);
        var f;
        for (d = 0; d <= this.a; d++)f = 2 * d * Math.PI / this.a - Math.PI / 2 + this.j, e = 0 === d % 2 ? this.c : this.i, c.lineTo(b.size / 2 + e * Math.cos(f), b.size / 2 + e * Math.sin(f));
        c.fillStyle = Dl;
        c.fill();
        null !== this.b && (c.strokeStyle = b.strokeStyle, c.lineWidth = b.ud, null === b.lineDash || c.setLineDash(b.lineDash), c.stroke());
        c.closePath()
    };
    k.zb = function () {
        var b = null === this.b ? "-" : this.b.zb(), c = null === this.l ? "-" : this.l.zb();
        if (null === this.g || b != this.g[1] || c != this.g[2] || this.c != this.g[3] || this.i != this.g[4] || this.j != this.g[5] || this.a != this.g[6])this.g = ["r" + b + c + (m(this.c) ? this.c.toString() : "-") + (m(this.i) ? this.i.toString() : "-") + (m(this.j) ? this.j.toString() : "-") + (m(this.a) ? this.a.toString() : "-"), b, c, this.c, this.i, this.j, this.a];
        return this.g[0]
    };
    u("ol.animation.bounce", function (b) {
        var c = b.resolution, d = m(b.start) ? b.start : ua(), e = m(b.duration) ? b.duration : 1E3, f = m(b.easing) ? b.easing : Yf;
        return function (b, h) {
            if (h.time < d)return h.animate = !0, h.viewHints[0] += 1, !0;
            if (h.time < d + e) {
                var l = f((h.time - d) / e), n = c - h.viewState.resolution;
                h.animate = !0;
                h.viewState.resolution += l * n;
                h.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }, OPENLAYERS);
    u("ol.animation.pan", Zf, OPENLAYERS);
    u("ol.animation.rotate", $f, OPENLAYERS);
    u("ol.animation.zoom", ag, OPENLAYERS);
    u("ol.Attribution", pg, OPENLAYERS);
    pg.prototype.getHTML = pg.prototype.c;
    qg.prototype.element = qg.prototype.element;
    u("ol.Collection", rg, OPENLAYERS);
    rg.prototype.clear = rg.prototype.clear;
    rg.prototype.extend = rg.prototype.ff;
    rg.prototype.forEach = rg.prototype.forEach;
    rg.prototype.getArray = rg.prototype.Jk;
    rg.prototype.item = rg.prototype.item;
    rg.prototype.getLength = rg.prototype.Qb;
    rg.prototype.insertAt = rg.prototype.Yd;
    rg.prototype.pop = rg.prototype.pop;
    rg.prototype.push = rg.prototype.push;
    rg.prototype.remove = rg.prototype.remove;
    rg.prototype.removeAt = rg.prototype.zf;
    rg.prototype.setAt = rg.prototype.Rn;
    u("ol.coordinate.add", nd, OPENLAYERS);
    u("ol.coordinate.createStringXY", function (b) {
        return function (c) {
            return vd(c, b)
        }
    }, OPENLAYERS);
    u("ol.coordinate.format", qd, OPENLAYERS);
    u("ol.coordinate.rotate", sd, OPENLAYERS);
    u("ol.coordinate.toStringHDMS", function (b) {
        return m(b) ? pd(b[1], "NS") + " " + pd(b[0], "EW") : ""
    }, OPENLAYERS);
    u("ol.coordinate.toStringXY", vd, OPENLAYERS);
    u("ol.DeviceOrientation", Dr, OPENLAYERS);
    Dr.prototype.getAlpha = Dr.prototype.Qi;
    Dr.prototype.getBeta = Dr.prototype.Ti;
    Dr.prototype.getGamma = Dr.prototype.bj;
    Dr.prototype.getHeading = Dr.prototype.Kk;
    Dr.prototype.getTracking = Dr.prototype.xg;
    Dr.prototype.setTracking = Dr.prototype.gf;
    u("ol.easing.easeIn", function (b) {
        return Math.pow(b, 3)
    }, OPENLAYERS);
    u("ol.easing.easeOut", Vf, OPENLAYERS);
    u("ol.easing.inAndOut", Wf, OPENLAYERS);
    u("ol.easing.linear", Xf, OPENLAYERS);
    u("ol.easing.upAndDown", Yf, OPENLAYERS);
    u("ol.extent.boundingExtent", Kd, OPENLAYERS);
    u("ol.extent.buffer", Pd, OPENLAYERS);
    u("ol.extent.containsCoordinate", Sd, OPENLAYERS);
    u("ol.extent.containsExtent", Ud, OPENLAYERS);
    u("ol.extent.containsXY", Td, OPENLAYERS);
    u("ol.extent.createEmpty", Ld, OPENLAYERS);
    u("ol.extent.equals", Xd, OPENLAYERS);
    u("ol.extent.extend", Yd, OPENLAYERS);
    u("ol.extent.getBottomLeft", ae, OPENLAYERS);
    u("ol.extent.getBottomRight", be, OPENLAYERS);
    u("ol.extent.getCenter", ee, OPENLAYERS);
    u("ol.extent.getHeight", ge, OPENLAYERS);
    u("ol.extent.getIntersection", he, OPENLAYERS);
    u("ol.extent.getSize", function (b) {
        return [b[2] - b[0], b[3] - b[1]]
    }, OPENLAYERS);
    u("ol.extent.getTopLeft", de, OPENLAYERS);
    u("ol.extent.getTopRight", ce, OPENLAYERS);
    u("ol.extent.getWidth", je, OPENLAYERS);
    u("ol.extent.intersects", ie, OPENLAYERS);
    u("ol.extent.isEmpty", ke, OPENLAYERS);
    u("ol.extent.applyTransform", me, OPENLAYERS);
    u("ol.Feature", An, OPENLAYERS);
    An.prototype.clone = An.prototype.clone;
    An.prototype.getGeometry = An.prototype.Y;
    An.prototype.getId = An.prototype.ej;
    An.prototype.getGeometryName = An.prototype.dj;
    An.prototype.getStyle = An.prototype.Mk;
    An.prototype.getStyleFunction = An.prototype.Nk;
    An.prototype.setGeometry = An.prototype.Sa;
    An.prototype.setStyle = An.prototype.hf;
    An.prototype.setId = An.prototype.Wb;
    An.prototype.setGeometryName = An.prototype.Pc;
    u("ol.featureloader.xhr", sp, OPENLAYERS);
    u("ol.Geolocation", nx, OPENLAYERS);
    nx.prototype.getAccuracy = nx.prototype.Oi;
    nx.prototype.getAccuracyGeometry = nx.prototype.Pi;
    nx.prototype.getAltitude = nx.prototype.Ri;
    nx.prototype.getAltitudeAccuracy = nx.prototype.Si;
    nx.prototype.getHeading = nx.prototype.Pk;
    nx.prototype.getPosition = nx.prototype.Qk;
    nx.prototype.getProjection = nx.prototype.yg;
    nx.prototype.getSpeed = nx.prototype.yj;
    nx.prototype.getTracking = nx.prototype.zg;
    nx.prototype.getTrackingOptions = nx.prototype.kg;
    nx.prototype.setProjection = nx.prototype.Ag;
    nx.prototype.setTracking = nx.prototype.ce;
    nx.prototype.setTrackingOptions = nx.prototype.Dh;
    u("ol.Graticule", rx, OPENLAYERS);
    rx.prototype.getMap = rx.prototype.Tk;
    rx.prototype.getMeridians = rx.prototype.nj;
    rx.prototype.getParallels = rx.prototype.sj;
    rx.prototype.setMap = rx.prototype.setMap;
    u("ol.has.DEVICE_PIXEL_RATIO", dj, OPENLAYERS);
    u("ol.has.CANVAS", fj, OPENLAYERS);
    u("ol.has.DEVICE_ORIENTATION", gj, OPENLAYERS);
    u("ol.has.GEOLOCATION", hj, OPENLAYERS);
    u("ol.has.TOUCH", ij, OPENLAYERS);
    u("ol.has.WEBGL", cj, OPENLAYERS);
    wx.prototype.getImage = wx.prototype.a;
    xx.prototype.getImage = xx.prototype.Ta;
    u("ol.Kinetic", Qk, OPENLAYERS);
    u("ol.loadingstrategy.all", tp, OPENLAYERS);
    u("ol.loadingstrategy.bbox", function (b) {
        return [b]
    }, OPENLAYERS);
    u("ol.loadingstrategy.tile", function (b) {
        return function (c, d) {
            var e = Ph(b, d), f = jg(b, c, e), g = [], e = [e, 0, 0];
            for (e[1] = f.a; e[1] <= f.f; ++e[1])for (e[2] = f.b; e[2] <= f.c; ++e[2])g.push(Lh(b, e));
            return g
        }
    }, OPENLAYERS);
    u("ol.Map", X, OPENLAYERS);
    X.prototype.addControl = X.prototype.wi;
    X.prototype.addInteraction = X.prototype.xi;
    X.prototype.addLayer = X.prototype.Pf;
    X.prototype.addOverlay = X.prototype.Qf;
    X.prototype.beforeRender = X.prototype.Oa;
    X.prototype.forEachFeatureAtPixel = X.prototype.Re;
    X.prototype.forEachLayerAtPixel = X.prototype.Xk;
    X.prototype.hasFeatureAtPixel = X.prototype.pk;
    X.prototype.getEventCoordinate = X.prototype.Yi;
    X.prototype.getEventPixel = X.prototype.Jd;
    X.prototype.getTarget = X.prototype.jf;
    X.prototype.getTargetElement = X.prototype.hd;
    X.prototype.getCoordinateFromPixel = X.prototype.ta;
    X.prototype.getControls = X.prototype.Wi;
    X.prototype.getOverlays = X.prototype.rj;
    X.prototype.getInteractions = X.prototype.fj;
    X.prototype.getLayerGroup = X.prototype.ac;
    X.prototype.getLayers = X.prototype.Bg;
    X.prototype.getPixelFromCoordinate = X.prototype.ya;
    X.prototype.getSize = X.prototype.Ca;
    X.prototype.getView = X.prototype.X;
    X.prototype.getViewport = X.prototype.Ej;
    X.prototype.renderSync = X.prototype.On;
    X.prototype.render = X.prototype.render;
    X.prototype.removeControl = X.prototype.In;
    X.prototype.removeInteraction = X.prototype.Jn;
    X.prototype.removeLayer = X.prototype.Kn;
    X.prototype.removeOverlay = X.prototype.Ln;
    X.prototype.setLayerGroup = X.prototype.zh;
    X.prototype.setSize = X.prototype.Bf;
    X.prototype.setTarget = X.prototype.Zk;
    X.prototype.setView = X.prototype.fo;
    X.prototype.updateSize = X.prototype.Rc;
    Uj.prototype.originalEvent = Uj.prototype.originalEvent;
    Uj.prototype.pixel = Uj.prototype.pixel;
    Uj.prototype.coordinate = Uj.prototype.coordinate;
    Uj.prototype.dragging = Uj.prototype.dragging;
    Uj.prototype.preventDefault = Uj.prototype.preventDefault;
    Uj.prototype.stopPropagation = Uj.prototype.nb;
    vh.prototype.map = vh.prototype.map;
    vh.prototype.frameState = vh.prototype.frameState;
    fd.prototype.key = fd.prototype.key;
    fd.prototype.oldValue = fd.prototype.oldValue;
    u("ol.Object", gd, OPENLAYERS);
    gd.prototype.get = gd.prototype.get;
    gd.prototype.getKeys = gd.prototype.O;
    gd.prototype.getProperties = gd.prototype.P;
    gd.prototype.set = gd.prototype.set;
    gd.prototype.setProperties = gd.prototype.I;
    gd.prototype.unset = gd.prototype.S;
    u("ol.Observable", dd, OPENLAYERS);
    u("ol.Observable.unByKey", ed, OPENLAYERS);
    dd.prototype.changed = dd.prototype.s;
    dd.prototype.getRevision = dd.prototype.K;
    dd.prototype.on = dd.prototype.G;
    dd.prototype.once = dd.prototype.L;
    dd.prototype.un = dd.prototype.J;
    dd.prototype.unByKey = dd.prototype.M;
    u("ol.inherits", w, OPENLAYERS);
    u("ol.Overlay", ar, OPENLAYERS);
    ar.prototype.getElement = ar.prototype.de;
    ar.prototype.getMap = ar.prototype.ee;
    ar.prototype.getOffset = ar.prototype.gg;
    ar.prototype.getPosition = ar.prototype.Cg;
    ar.prototype.getPositioning = ar.prototype.jg;
    ar.prototype.setElement = ar.prototype.wh;
    ar.prototype.setMap = ar.prototype.setMap;
    ar.prototype.setOffset = ar.prototype.Bh;
    ar.prototype.setPosition = ar.prototype.kf;
    ar.prototype.setPositioning = ar.prototype.Ch;
    u("ol.size.toSize", md, OPENLAYERS);
    Ch.prototype.getTileCoord = Ch.prototype.i;
    u("ol.View", Of, OPENLAYERS);
    Of.prototype.constrainCenter = Of.prototype.Fd;
    Of.prototype.constrainResolution = Of.prototype.constrainResolution;
    Of.prototype.constrainRotation = Of.prototype.constrainRotation;
    Of.prototype.getCenter = Of.prototype.Ka;
    Of.prototype.calculateExtent = Of.prototype.Vc;
    Of.prototype.getProjection = Of.prototype.$k;
    Of.prototype.getResolution = Of.prototype.Da;
    Of.prototype.getRotation = Of.prototype.Ea;
    Of.prototype.getZoom = Of.prototype.Hj;
    Of.prototype.fit = Of.prototype.Qe;
    Of.prototype.centerOn = Of.prototype.Gi;
    Of.prototype.rotate = Of.prototype.rotate;
    Of.prototype.setCenter = Of.prototype.eb;
    Of.prototype.setResolution = Of.prototype.Xb;
    Of.prototype.setRotation = Of.prototype.fe;
    Of.prototype.setZoom = Of.prototype.ko;
    u("ol.xml.getAllTextContent", Lo, OPENLAYERS);
    u("ol.xml.parse", ep, OPENLAYERS);
    u("ol.webgl.Context", fq, OPENLAYERS);
    fq.prototype.getGL = fq.prototype.Um;
    fq.prototype.getHitDetectionFramebuffer = fq.prototype.Ye;
    fq.prototype.useProgram = fq.prototype.re;
    u("ol.tilegrid.TileGrid", Hh, OPENLAYERS);
    Hh.prototype.getMaxZoom = Hh.prototype.eg;
    Hh.prototype.getMinZoom = Hh.prototype.fg;
    Hh.prototype.getOrigin = Hh.prototype.Kc;
    Hh.prototype.getResolution = Hh.prototype.ua;
    Hh.prototype.getResolutions = Hh.prototype.Xg;
    Hh.prototype.getTileCoordForCoordAndResolution = Hh.prototype.jd;
    Hh.prototype.getTileCoordForCoordAndZ = Hh.prototype.Rd;
    Hh.prototype.getTileSize = Hh.prototype.Ja;
    u("ol.tilegrid.createXYZ", Qh, OPENLAYERS);
    u("ol.tilegrid.WMTS", Nz, OPENLAYERS);
    Nz.prototype.getMatrixIds = Nz.prototype.B;
    u("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet", Oz, OPENLAYERS);
    u("ol.style.AtlasManager", Tz, OPENLAYERS);
    u("ol.style.Circle", Hl, OPENLAYERS);
    Hl.prototype.getAnchor = Hl.prototype.yb;
    Hl.prototype.getFill = Hl.prototype.vm;
    Hl.prototype.getImage = Hl.prototype.Sb;
    Hl.prototype.getOrigin = Hl.prototype.Db;
    Hl.prototype.getRadius = Hl.prototype.wm;
    Hl.prototype.getSize = Hl.prototype.fb;
    Hl.prototype.getStroke = Hl.prototype.xm;
    u("ol.style.Fill", Gl, OPENLAYERS);
    Gl.prototype.getColor = Gl.prototype.c;
    Gl.prototype.setColor = Gl.prototype.f;
    u("ol.style.Icon", Ck, OPENLAYERS);
    Ck.prototype.getAnchor = Ck.prototype.yb;
    Ck.prototype.getImage = Ck.prototype.Sb;
    Ck.prototype.getOrigin = Ck.prototype.Db;
    Ck.prototype.getSrc = Ck.prototype.ym;
    Ck.prototype.getSize = Ck.prototype.fb;
    u("ol.style.Image", Bk, OPENLAYERS);
    Bk.prototype.getOpacity = Bk.prototype.me;
    Bk.prototype.getRotateWithView = Bk.prototype.Pd;
    Bk.prototype.getRotation = Bk.prototype.ne;
    Bk.prototype.getScale = Bk.prototype.oe;
    Bk.prototype.getSnapToPixel = Bk.prototype.Qd;
    Bk.prototype.setRotation = Bk.prototype.pe;
    Bk.prototype.setScale = Bk.prototype.qe;
    u("ol.style.RegularShape", Xz, OPENLAYERS);
    Xz.prototype.getAnchor = Xz.prototype.yb;
    Xz.prototype.getAngle = Xz.prototype.zm;
    Xz.prototype.getFill = Xz.prototype.Am;
    Xz.prototype.getImage = Xz.prototype.Sb;
    Xz.prototype.getOrigin = Xz.prototype.Db;
    Xz.prototype.getPoints = Xz.prototype.Bm;
    Xz.prototype.getRadius = Xz.prototype.Cm;
    Xz.prototype.getRadius2 = Xz.prototype.wj;
    Xz.prototype.getSize = Xz.prototype.fb;
    Xz.prototype.getStroke = Xz.prototype.Dm;
    u("ol.style.Stroke", Cl, OPENLAYERS);
    Cl.prototype.getColor = Cl.prototype.Em;
    Cl.prototype.getLineCap = Cl.prototype.ij;
    Cl.prototype.getLineDash = Cl.prototype.Fm;
    Cl.prototype.getLineJoin = Cl.prototype.jj;
    Cl.prototype.getMiterLimit = Cl.prototype.oj;
    Cl.prototype.getWidth = Cl.prototype.Gm;
    Cl.prototype.setColor = Cl.prototype.Hm;
    Cl.prototype.setLineCap = Cl.prototype.Wn;
    Cl.prototype.setLineDash = Cl.prototype.Im;
    Cl.prototype.setLineJoin = Cl.prototype.Xn;
    Cl.prototype.setMiterLimit = Cl.prototype.Yn;
    Cl.prototype.setWidth = Cl.prototype.ho;
    u("ol.style.Style", Il, OPENLAYERS);
    Il.prototype.getGeometry = Il.prototype.Y;
    Il.prototype.getGeometryFunction = Il.prototype.cj;
    Il.prototype.getFill = Il.prototype.Jm;
    Il.prototype.getImage = Il.prototype.Km;
    Il.prototype.getStroke = Il.prototype.Lm;
    Il.prototype.getText = Il.prototype.Mm;
    Il.prototype.getZIndex = Il.prototype.Gj;
    Il.prototype.setGeometry = Il.prototype.Wg;
    Il.prototype.setZIndex = Il.prototype.jo;
    u("ol.style.Text", Ct, OPENLAYERS);
    Ct.prototype.getFont = Ct.prototype.$i;
    Ct.prototype.getOffsetX = Ct.prototype.pj;
    Ct.prototype.getOffsetY = Ct.prototype.qj;
    Ct.prototype.getFill = Ct.prototype.Nm;
    Ct.prototype.getRotation = Ct.prototype.Om;
    Ct.prototype.getScale = Ct.prototype.Pm;
    Ct.prototype.getStroke = Ct.prototype.Qm;
    Ct.prototype.getText = Ct.prototype.Rm;
    Ct.prototype.getTextAlign = Ct.prototype.Aj;
    Ct.prototype.getTextBaseline = Ct.prototype.Bj;
    Ct.prototype.setFont = Ct.prototype.Tn;
    Ct.prototype.setFill = Ct.prototype.Sn;
    Ct.prototype.setRotation = Ct.prototype.Sm;
    Ct.prototype.setScale = Ct.prototype.Tm;
    Ct.prototype.setStroke = Ct.prototype.ao;
    Ct.prototype.setText = Ct.prototype.bo;
    Ct.prototype.setTextAlign = Ct.prototype.co;
    Ct.prototype.setTextBaseline = Ct.prototype.eo;
    u("ol.Sphere", ve, OPENLAYERS);
    ve.prototype.geodesicArea = ve.prototype.b;
    ve.prototype.haversineDistance = ve.prototype.a;
    u("ol.source.BingMaps", cz, OPENLAYERS);
    u("ol.source.BingMaps.TOS_ATTRIBUTION", dz, OPENLAYERS);
    u("ol.source.Cluster", ez, OPENLAYERS);
    ez.prototype.getSource = ez.prototype.fa;
    u("ol.source.ImageCanvas", zn, OPENLAYERS);
    u("ol.source.ImageMapGuide", hz, OPENLAYERS);
    hz.prototype.getParams = hz.prototype.Ql;
    hz.prototype.getImageLoadFunction = hz.prototype.Pl;
    hz.prototype.updateParams = hz.prototype.Tl;
    hz.prototype.setImageLoadFunction = hz.prototype.Sl;
    u("ol.source.Image", sn, OPENLAYERS);
    un.prototype.image = un.prototype.image;
    u("ol.source.ImageStatic", iz, OPENLAYERS);
    u("ol.source.ImageVector", Hp, OPENLAYERS);
    Hp.prototype.getSource = Hp.prototype.Ul;
    Hp.prototype.getStyle = Hp.prototype.Vl;
    Hp.prototype.getStyleFunction = Hp.prototype.Wl;
    Hp.prototype.setStyle = Hp.prototype.Pg;
    u("ol.source.ImageWMS", jz, OPENLAYERS);
    jz.prototype.getGetFeatureInfoUrl = jz.prototype.Zl;
    jz.prototype.getParams = jz.prototype.am;
    jz.prototype.getImageLoadFunction = jz.prototype.$l;
    jz.prototype.getUrl = jz.prototype.bm;
    jz.prototype.setImageLoadFunction = jz.prototype.cm;
    jz.prototype.setUrl = jz.prototype.dm;
    jz.prototype.updateParams = jz.prototype.em;
    u("ol.source.MapQuest", qz, OPENLAYERS);
    qz.prototype.getLayer = qz.prototype.l;
    u("ol.source.OSM", oz, OPENLAYERS);
    u("ol.source.OSM.ATTRIBUTION", pz, OPENLAYERS);
    u("ol.source.Source", Eh, OPENLAYERS);
    Eh.prototype.getAttributions = Eh.prototype.la;
    Eh.prototype.getLogo = Eh.prototype.ka;
    Eh.prototype.getProjection = Eh.prototype.ma;
    Eh.prototype.getState = Eh.prototype.na;
    u("ol.source.Stamen", vz, OPENLAYERS);
    u("ol.source.TileArcGISRest", xz, OPENLAYERS);
    xz.prototype.getParams = xz.prototype.fm;
    xz.prototype.getUrls = xz.prototype.gm;
    xz.prototype.setUrl = xz.prototype.hm;
    xz.prototype.setUrls = xz.prototype.Qg;
    xz.prototype.updateParams = xz.prototype.jm;
    u("ol.source.TileDebug", zz, OPENLAYERS);
    u("ol.source.TileImage", az, OPENLAYERS);
    az.prototype.getTileLoadFunction = az.prototype.ab;
    az.prototype.getTileUrlFunction = az.prototype.bb;
    az.prototype.setTileLoadFunction = az.prototype.ib;
    az.prototype.setTileUrlFunction = az.prototype.Fa;
    u("ol.source.TileJSON", Az, OPENLAYERS);
    u("ol.source.Tile", Sh, OPENLAYERS);
    Sh.prototype.getTileGrid = Sh.prototype.za;
    Xh.prototype.tile = Xh.prototype.tile;
    u("ol.source.TileUTFGrid", Bz, OPENLAYERS);
    Bz.prototype.getTemplate = Bz.prototype.zj;
    Bz.prototype.forDataAtCoordinateAndResolution = Bz.prototype.Ki;
    u("ol.source.TileVector", Gz, OPENLAYERS);
    Gz.prototype.getFeatures = Gz.prototype.Ic;
    Gz.prototype.getFeaturesAtCoordinateAndResolution = Gz.prototype.Zi;
    u("ol.source.TileWMS", Jz, OPENLAYERS);
    Jz.prototype.getGetFeatureInfoUrl = Jz.prototype.mm;
    Jz.prototype.getParams = Jz.prototype.nm;
    Jz.prototype.getUrls = Jz.prototype.om;
    Jz.prototype.setUrl = Jz.prototype.pm;
    Jz.prototype.setUrls = Jz.prototype.Rg;
    Jz.prototype.updateParams = Jz.prototype.rm;
    u("ol.source.Vector", W, OPENLAYERS);
    W.prototype.addFeature = W.prototype.pd;
    W.prototype.addFeatures = W.prototype.xc;
    W.prototype.clear = W.prototype.clear;
    W.prototype.forEachFeature = W.prototype.Xf;
    W.prototype.forEachFeatureInExtent = W.prototype.fd;
    W.prototype.forEachFeatureIntersectingExtent = W.prototype.Se;
    W.prototype.getFeaturesCollection = W.prototype.We;
    W.prototype.getFeatures = W.prototype.Ic;
    W.prototype.getFeaturesAtCoordinate = W.prototype.Ve;
    W.prototype.getFeaturesInExtent = W.prototype.Xe;
    W.prototype.getClosestFeatureToCoordinate = W.prototype.Zf;
    W.prototype.getExtent = W.prototype.R;
    W.prototype.getFeatureById = W.prototype.Ue;
    W.prototype.removeFeature = W.prototype.Jc;
    Ep.prototype.feature = Ep.prototype.feature;
    u("ol.source.WMTS", Pz, OPENLAYERS);
    Pz.prototype.getDimensions = Pz.prototype.Xi;
    Pz.prototype.getFormat = Pz.prototype.aj;
    Pz.prototype.getLayer = Pz.prototype.sm;
    Pz.prototype.getMatrixSet = Pz.prototype.mj;
    Pz.prototype.getRequestEncoding = Pz.prototype.xj;
    Pz.prototype.getStyle = Pz.prototype.tm;
    Pz.prototype.getUrls = Pz.prototype.um;
    Pz.prototype.getVersion = Pz.prototype.Dj;
    Pz.prototype.updateDimensions = Pz.prototype.ro;
    u("ol.source.WMTS.optionsFromCapabilities", function (b, c) {
        var d = Wa(b.Contents.Layer, function (b) {
            return b.Identifier == c.layer
        }), e, f;
        e = 1 < d.TileMatrixSetLink.length ? Xa(d.TileMatrixSetLink, function (b) {
            return b.TileMatrixSet == c.matrixSet
        }) : m(c.projection) ? Xa(d.TileMatrixSetLink, function (b) {
            return b.TileMatrixSet.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3") == c.projection
        }) : 0;
        0 > e && (e = 0);
        f = d.TileMatrixSetLink[e].TileMatrixSet;
        var g = d.Format[0];
        m(c.format) && (g = c.format);
        e = Xa(d.Style, function (b) {
            return m(c.style) ?
            b.Title == c.style : b.isDefault
        });
        0 > e && (e = 0);
        e = d.Style[e].Identifier;
        var h = {};
        m(d.Dimension) && Sa(d.Dimension, function (b) {
            var c = b.Identifier, d = b["default"];
            m(d) || (d = b.values[0]);
            h[c] = d
        });
        var l = Wa(b.Contents.TileMatrixSet, function (b) {
            return b.Identifier == f
        }), n;
        n = m(c.projection) ? Ae(c.projection) : Ae(l.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var p = d.WGS84BoundingBox, q, r;
        m(p) && (r = Ae("EPSG:4326").R(), r = p[0] == r[0] && p[2] == r[2], q = We(p, "EPSG:4326", n), p = n.R(), null === p || Ud(p, q) || (q = void 0));
        var l = Oz(l, q), t = [];
        q = c.requestEncoding;
        q = m(q) ? q : "";
        if (b.hasOwnProperty("OperationsMetadata") && b.OperationsMetadata.hasOwnProperty("GetTile") && 0 != q.lastIndexOf("REST", 0))for (var d = b.OperationsMetadata.GetTile.DCP.HTTP.Get, p = 0, v = d.length; p < v; ++p) {
            var A = Wa(d[p].Constraint, function (b) {
                return "GetEncoding" == b.name
            }).AllowedValues.Value;
            0 < A.length && Ya(A, "KVP") && (q = "KVP", t.push(d[p].href))
        } else q = "REST", Sa(d.ResourceURL, function (b) {
            "tile" == b.resourceType && (g = b.format, t.push(b.template))
        });
        return {
            urls: t, layer: c.layer,
            matrixSet: f, format: g, projection: n, requestEncoding: q, tileGrid: l, style: e, dimensions: h, wrapX: r
        }
    }, OPENLAYERS);
    u("ol.source.XYZ", nz, OPENLAYERS);
    nz.prototype.setUrl = nz.prototype.f;
    u("ol.source.Zoomify", Rz, OPENLAYERS);
    lk.prototype.vectorContext = lk.prototype.vectorContext;
    lk.prototype.frameState = lk.prototype.frameState;
    lk.prototype.context = lk.prototype.context;
    lk.prototype.glContext = lk.prototype.glContext;
    u("ol.render.VectorContext", kk, OPENLAYERS);
    Cq.prototype.drawAsync = Cq.prototype.yc;
    Cq.prototype.drawCircleGeometry = Cq.prototype.zc;
    Cq.prototype.drawFeature = Cq.prototype.Pe;
    Cq.prototype.drawGeometryCollectionGeometry = Cq.prototype.Hd;
    Cq.prototype.drawPointGeometry = Cq.prototype.wb;
    Cq.prototype.drawLineStringGeometry = Cq.prototype.Gb;
    Cq.prototype.drawMultiLineStringGeometry = Cq.prototype.Ac;
    Cq.prototype.drawMultiPointGeometry = Cq.prototype.vb;
    Cq.prototype.drawMultiPolygonGeometry = Cq.prototype.Bc;
    Cq.prototype.drawPolygonGeometry = Cq.prototype.Yb;
    Cq.prototype.drawText = Cq.prototype.xb;
    Cq.prototype.setFillStrokeStyle = Cq.prototype.Ha;
    Cq.prototype.setImageStyle = Cq.prototype.hb;
    Cq.prototype.setTextStyle = Cq.prototype.Ia;
    km.prototype.drawAsync = km.prototype.yc;
    km.prototype.drawCircleGeometry = km.prototype.zc;
    km.prototype.drawFeature = km.prototype.Pe;
    km.prototype.drawPointGeometry = km.prototype.wb;
    km.prototype.drawMultiPointGeometry = km.prototype.vb;
    km.prototype.drawLineStringGeometry = km.prototype.Gb;
    km.prototype.drawMultiLineStringGeometry = km.prototype.Ac;
    km.prototype.drawPolygonGeometry = km.prototype.Yb;
    km.prototype.drawMultiPolygonGeometry = km.prototype.Bc;
    km.prototype.setFillStrokeStyle = km.prototype.Ha;
    km.prototype.setImageStyle = km.prototype.hb;
    km.prototype.setTextStyle = km.prototype.Ia;
    u("ol.proj.common.add", jm, OPENLAYERS);
    u("ol.proj.METERS_PER_UNIT", xe, OPENLAYERS);
    u("ol.proj.Projection", ye, OPENLAYERS);
    ye.prototype.getCode = ye.prototype.Vi;
    ye.prototype.getExtent = ye.prototype.R;
    ye.prototype.getUnits = ye.prototype.Jl;
    ye.prototype.getMetersPerUnit = ye.prototype.Nd;
    ye.prototype.getWorldExtent = ye.prototype.Fj;
    ye.prototype.isGlobal = ye.prototype.tk;
    ye.prototype.setGlobal = ye.prototype.Vn;
    ye.prototype.setExtent = ye.prototype.Kl;
    ye.prototype.setWorldExtent = ye.prototype.io;
    ye.prototype.setGetPointResolution = ye.prototype.Un;
    ye.prototype.getPointResolution = ye.prototype.getPointResolution;
    u("ol.proj.addEquivalentProjections", Be, OPENLAYERS);
    u("ol.proj.addProjection", Pe, OPENLAYERS);
    u("ol.proj.addCoordinateTransforms", Ce, OPENLAYERS);
    u("ol.proj.fromLonLat", function (b, c) {
        return Ve(b, "EPSG:4326", m(c) ? c : "EPSG:3857")
    }, OPENLAYERS);
    u("ol.proj.toLonLat", function (b, c) {
        return Ve(b, m(c) ? c : "EPSG:3857", "EPSG:4326")
    }, OPENLAYERS);
    u("ol.proj.get", Ae, OPENLAYERS);
    u("ol.proj.getTransform", Te, OPENLAYERS);
    u("ol.proj.transform", Ve, OPENLAYERS);
    u("ol.proj.transformExtent", We, OPENLAYERS);
    u("ol.layer.Heatmap", Z, OPENLAYERS);
    Z.prototype.getBlur = Z.prototype.Yf;
    Z.prototype.getGradient = Z.prototype.bg;
    Z.prototype.getRadius = Z.prototype.Kg;
    Z.prototype.setBlur = Z.prototype.uh;
    Z.prototype.setGradient = Z.prototype.yh;
    Z.prototype.setRadius = Z.prototype.Lg;
    u("ol.layer.Image", I, OPENLAYERS);
    I.prototype.getSource = I.prototype.da;
    u("ol.layer.Layer", G, OPENLAYERS);
    G.prototype.getSource = G.prototype.da;
    G.prototype.setMap = G.prototype.setMap;
    G.prototype.setSource = G.prototype.Qc;
    u("ol.layer.Base", ik, OPENLAYERS);
    ik.prototype.getBrightness = ik.prototype.Ib;
    ik.prototype.getContrast = ik.prototype.Jb;
    ik.prototype.getHue = ik.prototype.Kb;
    ik.prototype.getExtent = ik.prototype.R;
    ik.prototype.getMaxResolution = ik.prototype.Lb;
    ik.prototype.getMinResolution = ik.prototype.Mb;
    ik.prototype.getOpacity = ik.prototype.Rb;
    ik.prototype.getSaturation = ik.prototype.Nb;
    ik.prototype.getVisible = ik.prototype.mb;
    ik.prototype.setBrightness = ik.prototype.mc;
    ik.prototype.setContrast = ik.prototype.nc;
    ik.prototype.setHue = ik.prototype.oc;
    ik.prototype.setExtent = ik.prototype.hc;
    ik.prototype.setMaxResolution = ik.prototype.pc;
    ik.prototype.setMinResolution = ik.prototype.qc;
    ik.prototype.setOpacity = ik.prototype.ic;
    ik.prototype.setSaturation = ik.prototype.rc;
    ik.prototype.setVisible = ik.prototype.sc;
    u("ol.layer.Group", cm, OPENLAYERS);
    cm.prototype.getLayers = cm.prototype.Gc;
    cm.prototype.setLayers = cm.prototype.Ah;
    u("ol.layer.Tile", J, OPENLAYERS);
    J.prototype.getPreload = J.prototype.b;
    J.prototype.getSource = J.prototype.da;
    J.prototype.setPreload = J.prototype.f;
    J.prototype.getUseInterimTilesOnError = J.prototype.c;
    J.prototype.setUseInterimTilesOnError = J.prototype.g;
    u("ol.layer.Vector", M, OPENLAYERS);
    M.prototype.getSource = M.prototype.da;
    M.prototype.getStyle = M.prototype.T;
    M.prototype.getStyleFunction = M.prototype.ba;
    M.prototype.setStyle = M.prototype.g;
    u("ol.interaction.DoubleClickZoom", Xk, OPENLAYERS);
    u("ol.interaction.DoubleClickZoom.handleEvent", Yk, OPENLAYERS);
    u("ol.interaction.DragAndDrop", Sx, OPENLAYERS);
    u("ol.interaction.DragAndDrop.handleEvent", pe, OPENLAYERS);
    Tx.prototype.features = Tx.prototype.features;
    Tx.prototype.file = Tx.prototype.file;
    Tx.prototype.projection = Tx.prototype.projection;
    ul.prototype.coordinate = ul.prototype.coordinate;
    u("ol.interaction.DragBox", vl, OPENLAYERS);
    vl.prototype.getGeometry = vl.prototype.Y;
    u("ol.interaction.DragPan", il, OPENLAYERS);
    u("ol.interaction.DragRotateAndZoom", Wx, OPENLAYERS);
    u("ol.interaction.DragRotate", ml, OPENLAYERS);
    u("ol.interaction.DragZoom", Nl, OPENLAYERS);
    $x.prototype.feature = $x.prototype.feature;
    u("ol.interaction.Draw", ay, OPENLAYERS);
    u("ol.interaction.Draw.handleEvent", cy, OPENLAYERS);
    ay.prototype.finishDrawing = ay.prototype.fa;
    u("ol.interaction.Draw.createRegularPolygon", function (b, c) {
        return function (d, e) {
            var f = d[0], g = d[1], h = Math.sqrt(td(f, g)), l = m(e) ? e : Mf(new Ym(f), b);
            Nf(l, f, h, m(c) ? c : Math.atan((g[1] - f[1]) / (g[0] - f[0])));
            return l
        }
    }, OPENLAYERS);
    u("ol.interaction.Interaction", Tk, OPENLAYERS);
    Tk.prototype.getActive = Tk.prototype.b;
    Tk.prototype.setActive = Tk.prototype.f;
    u("ol.interaction.defaults", bm, OPENLAYERS);
    u("ol.interaction.KeyboardPan", Ol, OPENLAYERS);
    u("ol.interaction.KeyboardPan.handleEvent", Pl, OPENLAYERS);
    u("ol.interaction.KeyboardZoom", Ql, OPENLAYERS);
    u("ol.interaction.KeyboardZoom.handleEvent", Rl, OPENLAYERS);
    qy.prototype.features = qy.prototype.features;
    qy.prototype.mapBrowserPointerEvent = qy.prototype.mapBrowserPointerEvent;
    u("ol.interaction.Modify", ry, OPENLAYERS);
    u("ol.interaction.Modify.handleEvent", uy, OPENLAYERS);
    u("ol.interaction.MouseWheelZoom", Sl, OPENLAYERS);
    u("ol.interaction.MouseWheelZoom.handleEvent", Tl, OPENLAYERS);
    u("ol.interaction.PinchRotate", Ul, OPENLAYERS);
    u("ol.interaction.PinchZoom", Yl, OPENLAYERS);
    u("ol.interaction.Pointer", fl, OPENLAYERS);
    u("ol.interaction.Pointer.handleEvent", gl, OPENLAYERS);
    By.prototype.selected = By.prototype.selected;
    By.prototype.deselected = By.prototype.deselected;
    By.prototype.mapBrowserEvent = By.prototype.mapBrowserEvent;
    u("ol.interaction.Select", Cy, OPENLAYERS);
    Cy.prototype.getFeatures = Cy.prototype.D;
    u("ol.interaction.Select.handleEvent", Dy, OPENLAYERS);
    Cy.prototype.setMap = Cy.prototype.setMap;
    u("ol.interaction.Snap", Fy, OPENLAYERS);
    Fy.prototype.addFeature = Fy.prototype.md;
    Fy.prototype.removeFeature = Fy.prototype.od;
    u("ol.geom.Circle", Ym, OPENLAYERS);
    Ym.prototype.clone = Ym.prototype.clone;
    Ym.prototype.getCenter = Ym.prototype.ld;
    Ym.prototype.getRadius = Ym.prototype.lf;
    Ym.prototype.getType = Ym.prototype.U;
    Ym.prototype.intersectsExtent = Ym.prototype.sa;
    Ym.prototype.setCenter = Ym.prototype.ll;
    Ym.prototype.setCenterAndRadius = Ym.prototype.Af;
    Ym.prototype.setRadius = Ym.prototype.ml;
    Ym.prototype.transform = Ym.prototype.transform;
    u("ol.geom.Geometry", Xe, OPENLAYERS);
    Xe.prototype.getClosestPoint = Xe.prototype.$a;
    Xe.prototype.getExtent = Xe.prototype.R;
    Xe.prototype.transform = Xe.prototype.transform;
    u("ol.geom.GeometryCollection", $m, OPENLAYERS);
    $m.prototype.clone = $m.prototype.clone;
    $m.prototype.getGeometries = $m.prototype.ag;
    $m.prototype.getType = $m.prototype.U;
    $m.prototype.intersectsExtent = $m.prototype.sa;
    $m.prototype.setGeometries = $m.prototype.xh;
    $m.prototype.applyTransform = $m.prototype.va;
    $m.prototype.translate = $m.prototype.Ua;
    u("ol.geom.LinearRing", tf, OPENLAYERS);
    tf.prototype.clone = tf.prototype.clone;
    tf.prototype.getArea = tf.prototype.pl;
    tf.prototype.getCoordinates = tf.prototype.V;
    tf.prototype.getType = tf.prototype.U;
    tf.prototype.setCoordinates = tf.prototype.ja;
    u("ol.geom.LineString", N, OPENLAYERS);
    N.prototype.appendCoordinate = N.prototype.yi;
    N.prototype.clone = N.prototype.clone;
    N.prototype.forEachSegment = N.prototype.Ni;
    N.prototype.getCoordinateAtM = N.prototype.nl;
    N.prototype.getCoordinates = N.prototype.V;
    N.prototype.getLength = N.prototype.ol;
    N.prototype.getType = N.prototype.U;
    N.prototype.intersectsExtent = N.prototype.sa;
    N.prototype.setCoordinates = N.prototype.ja;
    u("ol.geom.MultiLineString", O, OPENLAYERS);
    O.prototype.appendLineString = O.prototype.zi;
    O.prototype.clone = O.prototype.clone;
    O.prototype.getCoordinateAtM = O.prototype.ql;
    O.prototype.getCoordinates = O.prototype.V;
    O.prototype.getLineString = O.prototype.kj;
    O.prototype.getLineStrings = O.prototype.gd;
    O.prototype.getType = O.prototype.U;
    O.prototype.intersectsExtent = O.prototype.sa;
    O.prototype.setCoordinates = O.prototype.ja;
    u("ol.geom.MultiPoint", kn, OPENLAYERS);
    kn.prototype.appendPoint = kn.prototype.Bi;
    kn.prototype.clone = kn.prototype.clone;
    kn.prototype.getCoordinates = kn.prototype.V;
    kn.prototype.getPoint = kn.prototype.tj;
    kn.prototype.getPoints = kn.prototype.ge;
    kn.prototype.getType = kn.prototype.U;
    kn.prototype.intersectsExtent = kn.prototype.sa;
    kn.prototype.setCoordinates = kn.prototype.ja;
    u("ol.geom.MultiPolygon", P, OPENLAYERS);
    P.prototype.appendPolygon = P.prototype.Ci;
    P.prototype.clone = P.prototype.clone;
    P.prototype.getArea = P.prototype.rl;
    P.prototype.getCoordinates = P.prototype.V;
    P.prototype.getInteriorPoints = P.prototype.hj;
    P.prototype.getPolygon = P.prototype.vj;
    P.prototype.getPolygons = P.prototype.Od;
    P.prototype.getType = P.prototype.U;
    P.prototype.intersectsExtent = P.prototype.sa;
    P.prototype.setCoordinates = P.prototype.ja;
    u("ol.geom.Point", D, OPENLAYERS);
    D.prototype.clone = D.prototype.clone;
    D.prototype.getCoordinates = D.prototype.V;
    D.prototype.getType = D.prototype.U;
    D.prototype.intersectsExtent = D.prototype.sa;
    D.prototype.setCoordinates = D.prototype.ja;
    u("ol.geom.Polygon", F, OPENLAYERS);
    F.prototype.appendLinearRing = F.prototype.Ai;
    F.prototype.clone = F.prototype.clone;
    F.prototype.getArea = F.prototype.sl;
    F.prototype.getCoordinates = F.prototype.V;
    F.prototype.getInteriorPoint = F.prototype.gj;
    F.prototype.getLinearRingCount = F.prototype.lj;
    F.prototype.getLinearRing = F.prototype.dg;
    F.prototype.getLinearRings = F.prototype.Md;
    F.prototype.getType = F.prototype.U;
    F.prototype.intersectsExtent = F.prototype.sa;
    F.prototype.setCoordinates = F.prototype.ja;
    u("ol.geom.Polygon.circular", Kf, OPENLAYERS);
    u("ol.geom.Polygon.fromExtent", Lf, OPENLAYERS);
    u("ol.geom.Polygon.fromCircle", Mf, OPENLAYERS);
    u("ol.geom.SimpleGeometry", Ze, OPENLAYERS);
    Ze.prototype.getFirstCoordinate = Ze.prototype.Ab;
    Ze.prototype.getLastCoordinate = Ze.prototype.Bb;
    Ze.prototype.getLayout = Ze.prototype.Cb;
    Ze.prototype.applyTransform = Ze.prototype.va;
    Ze.prototype.translate = Ze.prototype.Ua;
    u("ol.format.EsriJSON", Kr, OPENLAYERS);
    Kr.prototype.readFeature = Kr.prototype.Eb;
    Kr.prototype.readFeatures = Kr.prototype.qa;
    Kr.prototype.readGeometry = Kr.prototype.Nc;
    Kr.prototype.readProjection = Kr.prototype.Ga;
    Kr.prototype.writeGeometry = Kr.prototype.Tc;
    Kr.prototype.writeGeometryObject = Kr.prototype.Ee;
    Kr.prototype.writeFeature = Kr.prototype.xd;
    Kr.prototype.writeFeatureObject = Kr.prototype.Sc;
    Kr.prototype.writeFeatures = Kr.prototype.Fb;
    Kr.prototype.writeFeaturesObject = Kr.prototype.Ce;
    u("ol.format.Feature", Er, OPENLAYERS);
    u("ol.format.GeoJSON", Rr, OPENLAYERS);
    Rr.prototype.readFeature = Rr.prototype.Eb;
    Rr.prototype.readFeatures = Rr.prototype.qa;
    Rr.prototype.readGeometry = Rr.prototype.Nc;
    Rr.prototype.readProjection = Rr.prototype.Ga;
    Rr.prototype.writeFeature = Rr.prototype.xd;
    Rr.prototype.writeFeatureObject = Rr.prototype.Sc;
    Rr.prototype.writeFeatures = Rr.prototype.Fb;
    Rr.prototype.writeFeaturesObject = Rr.prototype.Ce;
    Rr.prototype.writeGeometry = Rr.prototype.Tc;
    Rr.prototype.writeGeometryObject = Rr.prototype.Ee;
    u("ol.format.GPX", us, OPENLAYERS);
    us.prototype.readFeature = us.prototype.Eb;
    us.prototype.readFeatures = us.prototype.qa;
    us.prototype.readProjection = us.prototype.Ga;
    us.prototype.writeFeatures = us.prototype.Fb;
    us.prototype.writeFeaturesNode = us.prototype.b;
    u("ol.format.IGC", et, OPENLAYERS);
    et.prototype.readFeature = et.prototype.Eb;
    et.prototype.readFeatures = et.prototype.qa;
    et.prototype.readProjection = et.prototype.Ga;
    u("ol.format.KML", Dt, OPENLAYERS);
    Dt.prototype.readFeature = Dt.prototype.Eb;
    Dt.prototype.readFeatures = Dt.prototype.qa;
    Dt.prototype.readName = Dt.prototype.An;
    Dt.prototype.readNetworkLinks = Dt.prototype.Bn;
    Dt.prototype.readProjection = Dt.prototype.Ga;
    Dt.prototype.writeFeatures = Dt.prototype.Fb;
    Dt.prototype.writeFeaturesNode = Dt.prototype.b;
    u("ol.format.OSMXML", ov, OPENLAYERS);
    ov.prototype.readFeatures = ov.prototype.qa;
    ov.prototype.readProjection = ov.prototype.Ga;
    u("ol.format.Polyline", Nv, OPENLAYERS);
    u("ol.format.Polyline.encodeDeltas", Ov, OPENLAYERS);
    u("ol.format.Polyline.decodeDeltas", Qv, OPENLAYERS);
    u("ol.format.Polyline.encodeFloats", Pv, OPENLAYERS);
    u("ol.format.Polyline.decodeFloats", Rv, OPENLAYERS);
    Nv.prototype.readFeature = Nv.prototype.Eb;
    Nv.prototype.readFeatures = Nv.prototype.qa;
    Nv.prototype.readGeometry = Nv.prototype.Nc;
    Nv.prototype.readProjection = Nv.prototype.Ga;
    Nv.prototype.writeGeometry = Nv.prototype.Tc;
    u("ol.format.TopoJSON", Sv, OPENLAYERS);
    Sv.prototype.readFeatures = Sv.prototype.qa;
    Sv.prototype.readProjection = Sv.prototype.Ga;
    u("ol.format.WFS", Yv, OPENLAYERS);
    Yv.prototype.readFeatures = Yv.prototype.qa;
    Yv.prototype.readTransactionResponse = Yv.prototype.j;
    Yv.prototype.readFeatureCollectionMetadata = Yv.prototype.i;
    Yv.prototype.writeGetFeature = Yv.prototype.l;
    Yv.prototype.writeTransaction = Yv.prototype.u;
    Yv.prototype.readProjection = Yv.prototype.Ga;
    u("ol.format.WKT", kw, OPENLAYERS);
    kw.prototype.readFeature = kw.prototype.Eb;
    kw.prototype.readFeatures = kw.prototype.qa;
    kw.prototype.readGeometry = kw.prototype.Nc;
    kw.prototype.writeFeature = kw.prototype.xd;
    kw.prototype.writeFeatures = kw.prototype.Fb;
    kw.prototype.writeGeometry = kw.prototype.Tc;
    u("ol.format.WMSCapabilities", Cw, OPENLAYERS);
    Cw.prototype.read = Cw.prototype.c;
    u("ol.format.WMSGetFeatureInfo", Zw, OPENLAYERS);
    Zw.prototype.readFeatures = Zw.prototype.qa;
    u("ol.format.WMTSCapabilities", ax, OPENLAYERS);
    ax.prototype.read = ax.prototype.c;
    u("ol.format.GML2", ts, OPENLAYERS);
    u("ol.format.GML3", ks, OPENLAYERS);
    ks.prototype.writeGeometryNode = ks.prototype.B;
    ks.prototype.writeFeatures = ks.prototype.Fb;
    ks.prototype.writeFeaturesNode = ks.prototype.b;
    u("ol.format.GML", ks, OPENLAYERS);
    ks.prototype.writeFeatures = ks.prototype.Fb;
    ks.prototype.writeFeaturesNode = ks.prototype.b;
    Zr.prototype.readFeatures = Zr.prototype.qa;
    u("ol.events.condition.altKeyOnly", function (b) {
        b = b.a;
        return b.b && !b.j && !b.f
    }, OPENLAYERS);
    u("ol.events.condition.altShiftKeysOnly", Zk, OPENLAYERS);
    u("ol.events.condition.always", pe, OPENLAYERS);
    u("ol.events.condition.click", function (b) {
        return b.type == Yj
    }, OPENLAYERS);
    u("ol.events.condition.never", oe, OPENLAYERS);
    u("ol.events.condition.pointerMove", $k, OPENLAYERS);
    u("ol.events.condition.singleClick", al, OPENLAYERS);
    u("ol.events.condition.noModifierKeys", bl, OPENLAYERS);
    u("ol.events.condition.platformModifierKeyOnly", function (b) {
        b = b.a;
        return !b.b && b.j && !b.f
    }, OPENLAYERS);
    u("ol.events.condition.shiftKeyOnly", cl, OPENLAYERS);
    u("ol.events.condition.targetNotEditable", dl, OPENLAYERS);
    u("ol.events.condition.mouseOnly", el, OPENLAYERS);
    u("ol.control.Attribution", Yh, OPENLAYERS);
    u("ol.control.Attribution.render", Zh, OPENLAYERS);
    Yh.prototype.getCollapsible = Yh.prototype.bl;
    Yh.prototype.setCollapsible = Yh.prototype.el;
    Yh.prototype.setCollapsed = Yh.prototype.dl;
    Yh.prototype.getCollapsed = Yh.prototype.al;
    u("ol.control.Control", wh, OPENLAYERS);
    wh.prototype.getMap = wh.prototype.g;
    wh.prototype.setMap = wh.prototype.setMap;
    wh.prototype.setTarget = wh.prototype.c;
    u("ol.control.defaults", di, OPENLAYERS);
    u("ol.control.FullScreen", ii, OPENLAYERS);
    u("ol.control.MousePosition", ji, OPENLAYERS);
    u("ol.control.MousePosition.render", ki, OPENLAYERS);
    ji.prototype.getCoordinateFormat = ji.prototype.$f;
    ji.prototype.getProjection = ji.prototype.Dg;
    ji.prototype.setMap = ji.prototype.setMap;
    ji.prototype.setCoordinateFormat = ji.prototype.vh;
    ji.prototype.setProjection = ji.prototype.Eg;
    u("ol.control.OverviewMap", dr, OPENLAYERS);
    dr.prototype.setMap = dr.prototype.setMap;
    u("ol.control.OverviewMap.render", er, OPENLAYERS);
    dr.prototype.getCollapsible = dr.prototype.hl;
    dr.prototype.setCollapsible = dr.prototype.kl;
    dr.prototype.setCollapsed = dr.prototype.jl;
    dr.prototype.getCollapsed = dr.prototype.gl;
    u("ol.control.Rotate", ai, OPENLAYERS);
    u("ol.control.Rotate.render", bi, OPENLAYERS);
    u("ol.control.ScaleLine", ir, OPENLAYERS);
    ir.prototype.getUnits = ir.prototype.C;
    u("ol.control.ScaleLine.render", jr, OPENLAYERS);
    ir.prototype.setUnits = ir.prototype.ba;
    u("ol.control.Zoom", ci, OPENLAYERS);
    u("ol.control.ZoomSlider", xr, OPENLAYERS);
    u("ol.control.ZoomSlider.render", zr, OPENLAYERS);
    u("ol.control.ZoomToExtent", Cr, OPENLAYERS);
    u("ol.color.asArray", wg, OPENLAYERS);
    u("ol.color.asString", yg, OPENLAYERS);
    gd.prototype.changed = gd.prototype.s;
    gd.prototype.getRevision = gd.prototype.K;
    gd.prototype.on = gd.prototype.G;
    gd.prototype.once = gd.prototype.L;
    gd.prototype.un = gd.prototype.J;
    gd.prototype.unByKey = gd.prototype.M;
    rg.prototype.get = rg.prototype.get;
    rg.prototype.getKeys = rg.prototype.O;
    rg.prototype.getProperties = rg.prototype.P;
    rg.prototype.set = rg.prototype.set;
    rg.prototype.setProperties = rg.prototype.I;
    rg.prototype.unset = rg.prototype.S;
    rg.prototype.changed = rg.prototype.s;
    rg.prototype.getRevision = rg.prototype.K;
    rg.prototype.on = rg.prototype.G;
    rg.prototype.once = rg.prototype.L;
    rg.prototype.un = rg.prototype.J;
    rg.prototype.unByKey = rg.prototype.M;
    Dr.prototype.get = Dr.prototype.get;
    Dr.prototype.getKeys = Dr.prototype.O;
    Dr.prototype.getProperties = Dr.prototype.P;
    Dr.prototype.set = Dr.prototype.set;
    Dr.prototype.setProperties = Dr.prototype.I;
    Dr.prototype.unset = Dr.prototype.S;
    Dr.prototype.changed = Dr.prototype.s;
    Dr.prototype.getRevision = Dr.prototype.K;
    Dr.prototype.on = Dr.prototype.G;
    Dr.prototype.once = Dr.prototype.L;
    Dr.prototype.un = Dr.prototype.J;
    Dr.prototype.unByKey = Dr.prototype.M;
    An.prototype.get = An.prototype.get;
    An.prototype.getKeys = An.prototype.O;
    An.prototype.getProperties = An.prototype.P;
    An.prototype.set = An.prototype.set;
    An.prototype.setProperties = An.prototype.I;
    An.prototype.unset = An.prototype.S;
    An.prototype.changed = An.prototype.s;
    An.prototype.getRevision = An.prototype.K;
    An.prototype.on = An.prototype.G;
    An.prototype.once = An.prototype.L;
    An.prototype.un = An.prototype.J;
    An.prototype.unByKey = An.prototype.M;
    nx.prototype.get = nx.prototype.get;
    nx.prototype.getKeys = nx.prototype.O;
    nx.prototype.getProperties = nx.prototype.P;
    nx.prototype.set = nx.prototype.set;
    nx.prototype.setProperties = nx.prototype.I;
    nx.prototype.unset = nx.prototype.S;
    nx.prototype.changed = nx.prototype.s;
    nx.prototype.getRevision = nx.prototype.K;
    nx.prototype.on = nx.prototype.G;
    nx.prototype.once = nx.prototype.L;
    nx.prototype.un = nx.prototype.J;
    nx.prototype.unByKey = nx.prototype.M;
    xx.prototype.getTileCoord = xx.prototype.i;
    X.prototype.get = X.prototype.get;
    X.prototype.getKeys = X.prototype.O;
    X.prototype.getProperties = X.prototype.P;
    X.prototype.set = X.prototype.set;
    X.prototype.setProperties = X.prototype.I;
    X.prototype.unset = X.prototype.S;
    X.prototype.changed = X.prototype.s;
    X.prototype.getRevision = X.prototype.K;
    X.prototype.on = X.prototype.G;
    X.prototype.once = X.prototype.L;
    X.prototype.un = X.prototype.J;
    X.prototype.unByKey = X.prototype.M;
    Uj.prototype.map = Uj.prototype.map;
    Uj.prototype.frameState = Uj.prototype.frameState;
    Vj.prototype.originalEvent = Vj.prototype.originalEvent;
    Vj.prototype.pixel = Vj.prototype.pixel;
    Vj.prototype.coordinate = Vj.prototype.coordinate;
    Vj.prototype.dragging = Vj.prototype.dragging;
    Vj.prototype.preventDefault = Vj.prototype.preventDefault;
    Vj.prototype.stopPropagation = Vj.prototype.nb;
    Vj.prototype.map = Vj.prototype.map;
    Vj.prototype.frameState = Vj.prototype.frameState;
    ar.prototype.get = ar.prototype.get;
    ar.prototype.getKeys = ar.prototype.O;
    ar.prototype.getProperties = ar.prototype.P;
    ar.prototype.set = ar.prototype.set;
    ar.prototype.setProperties = ar.prototype.I;
    ar.prototype.unset = ar.prototype.S;
    ar.prototype.changed = ar.prototype.s;
    ar.prototype.getRevision = ar.prototype.K;
    ar.prototype.on = ar.prototype.G;
    ar.prototype.once = ar.prototype.L;
    ar.prototype.un = ar.prototype.J;
    ar.prototype.unByKey = ar.prototype.M;
    Of.prototype.get = Of.prototype.get;
    Of.prototype.getKeys = Of.prototype.O;
    Of.prototype.getProperties = Of.prototype.P;
    Of.prototype.set = Of.prototype.set;
    Of.prototype.setProperties = Of.prototype.I;
    Of.prototype.unset = Of.prototype.S;
    Of.prototype.changed = Of.prototype.s;
    Of.prototype.getRevision = Of.prototype.K;
    Of.prototype.on = Of.prototype.G;
    Of.prototype.once = Of.prototype.L;
    Of.prototype.un = Of.prototype.J;
    Of.prototype.unByKey = Of.prototype.M;
    Nz.prototype.getMaxZoom = Nz.prototype.eg;
    Nz.prototype.getMinZoom = Nz.prototype.fg;
    Nz.prototype.getOrigin = Nz.prototype.Kc;
    Nz.prototype.getResolution = Nz.prototype.ua;
    Nz.prototype.getResolutions = Nz.prototype.Xg;
    Nz.prototype.getTileCoordForCoordAndResolution = Nz.prototype.jd;
    Nz.prototype.getTileCoordForCoordAndZ = Nz.prototype.Rd;
    Nz.prototype.getTileSize = Nz.prototype.Ja;
    Hl.prototype.getOpacity = Hl.prototype.me;
    Hl.prototype.getRotateWithView = Hl.prototype.Pd;
    Hl.prototype.getRotation = Hl.prototype.ne;
    Hl.prototype.getScale = Hl.prototype.oe;
    Hl.prototype.getSnapToPixel = Hl.prototype.Qd;
    Hl.prototype.setRotation = Hl.prototype.pe;
    Hl.prototype.setScale = Hl.prototype.qe;
    Ck.prototype.getOpacity = Ck.prototype.me;
    Ck.prototype.getRotateWithView = Ck.prototype.Pd;
    Ck.prototype.getRotation = Ck.prototype.ne;
    Ck.prototype.getScale = Ck.prototype.oe;
    Ck.prototype.getSnapToPixel = Ck.prototype.Qd;
    Ck.prototype.setRotation = Ck.prototype.pe;
    Ck.prototype.setScale = Ck.prototype.qe;
    Xz.prototype.getOpacity = Xz.prototype.me;
    Xz.prototype.getRotateWithView = Xz.prototype.Pd;
    Xz.prototype.getRotation = Xz.prototype.ne;
    Xz.prototype.getScale = Xz.prototype.oe;
    Xz.prototype.getSnapToPixel = Xz.prototype.Qd;
    Xz.prototype.setRotation = Xz.prototype.pe;
    Xz.prototype.setScale = Xz.prototype.qe;
    Eh.prototype.get = Eh.prototype.get;
    Eh.prototype.getKeys = Eh.prototype.O;
    Eh.prototype.getProperties = Eh.prototype.P;
    Eh.prototype.set = Eh.prototype.set;
    Eh.prototype.setProperties = Eh.prototype.I;
    Eh.prototype.unset = Eh.prototype.S;
    Eh.prototype.changed = Eh.prototype.s;
    Eh.prototype.getRevision = Eh.prototype.K;
    Eh.prototype.on = Eh.prototype.G;
    Eh.prototype.once = Eh.prototype.L;
    Eh.prototype.un = Eh.prototype.J;
    Eh.prototype.unByKey = Eh.prototype.M;
    Sh.prototype.getAttributions = Sh.prototype.la;
    Sh.prototype.getLogo = Sh.prototype.ka;
    Sh.prototype.getProjection = Sh.prototype.ma;
    Sh.prototype.getState = Sh.prototype.na;
    Sh.prototype.get = Sh.prototype.get;
    Sh.prototype.getKeys = Sh.prototype.O;
    Sh.prototype.getProperties = Sh.prototype.P;
    Sh.prototype.set = Sh.prototype.set;
    Sh.prototype.setProperties = Sh.prototype.I;
    Sh.prototype.unset = Sh.prototype.S;
    Sh.prototype.changed = Sh.prototype.s;
    Sh.prototype.getRevision = Sh.prototype.K;
    Sh.prototype.on = Sh.prototype.G;
    Sh.prototype.once = Sh.prototype.L;
    Sh.prototype.un = Sh.prototype.J;
    Sh.prototype.unByKey = Sh.prototype.M;
    az.prototype.getTileGrid = az.prototype.za;
    az.prototype.getAttributions = az.prototype.la;
    az.prototype.getLogo = az.prototype.ka;
    az.prototype.getProjection = az.prototype.ma;
    az.prototype.getState = az.prototype.na;
    az.prototype.get = az.prototype.get;
    az.prototype.getKeys = az.prototype.O;
    az.prototype.getProperties = az.prototype.P;
    az.prototype.set = az.prototype.set;
    az.prototype.setProperties = az.prototype.I;
    az.prototype.unset = az.prototype.S;
    az.prototype.changed = az.prototype.s;
    az.prototype.getRevision = az.prototype.K;
    az.prototype.on = az.prototype.G;
    az.prototype.once = az.prototype.L;
    az.prototype.un = az.prototype.J;
    az.prototype.unByKey = az.prototype.M;
    cz.prototype.getTileLoadFunction = cz.prototype.ab;
    cz.prototype.getTileUrlFunction = cz.prototype.bb;
    cz.prototype.setTileLoadFunction = cz.prototype.ib;
    cz.prototype.setTileUrlFunction = cz.prototype.Fa;
    cz.prototype.getTileGrid = cz.prototype.za;
    cz.prototype.getAttributions = cz.prototype.la;
    cz.prototype.getLogo = cz.prototype.ka;
    cz.prototype.getProjection = cz.prototype.ma;
    cz.prototype.getState = cz.prototype.na;
    cz.prototype.get = cz.prototype.get;
    cz.prototype.getKeys = cz.prototype.O;
    cz.prototype.getProperties = cz.prototype.P;
    cz.prototype.set = cz.prototype.set;
    cz.prototype.setProperties = cz.prototype.I;
    cz.prototype.unset = cz.prototype.S;
    cz.prototype.changed = cz.prototype.s;
    cz.prototype.getRevision = cz.prototype.K;
    cz.prototype.on = cz.prototype.G;
    cz.prototype.once = cz.prototype.L;
    cz.prototype.un = cz.prototype.J;
    cz.prototype.unByKey = cz.prototype.M;
    W.prototype.getAttributions = W.prototype.la;
    W.prototype.getLogo = W.prototype.ka;
    W.prototype.getProjection = W.prototype.ma;
    W.prototype.getState = W.prototype.na;
    W.prototype.get = W.prototype.get;
    W.prototype.getKeys = W.prototype.O;
    W.prototype.getProperties = W.prototype.P;
    W.prototype.set = W.prototype.set;
    W.prototype.setProperties = W.prototype.I;
    W.prototype.unset = W.prototype.S;
    W.prototype.changed = W.prototype.s;
    W.prototype.getRevision = W.prototype.K;
    W.prototype.on = W.prototype.G;
    W.prototype.once = W.prototype.L;
    W.prototype.un = W.prototype.J;
    W.prototype.unByKey = W.prototype.M;
    ez.prototype.addFeature = ez.prototype.pd;
    ez.prototype.addFeatures = ez.prototype.xc;
    ez.prototype.clear = ez.prototype.clear;
    ez.prototype.forEachFeature = ez.prototype.Xf;
    ez.prototype.forEachFeatureInExtent = ez.prototype.fd;
    ez.prototype.forEachFeatureIntersectingExtent = ez.prototype.Se;
    ez.prototype.getFeaturesCollection = ez.prototype.We;
    ez.prototype.getFeatures = ez.prototype.Ic;
    ez.prototype.getFeaturesAtCoordinate = ez.prototype.Ve;
    ez.prototype.getFeaturesInExtent = ez.prototype.Xe;
    ez.prototype.getClosestFeatureToCoordinate = ez.prototype.Zf;
    ez.prototype.getExtent = ez.prototype.R;
    ez.prototype.getFeatureById = ez.prototype.Ue;
    ez.prototype.removeFeature = ez.prototype.Jc;
    ez.prototype.getAttributions = ez.prototype.la;
    ez.prototype.getLogo = ez.prototype.ka;
    ez.prototype.getProjection = ez.prototype.ma;
    ez.prototype.getState = ez.prototype.na;
    ez.prototype.get = ez.prototype.get;
    ez.prototype.getKeys = ez.prototype.O;
    ez.prototype.getProperties = ez.prototype.P;
    ez.prototype.set = ez.prototype.set;
    ez.prototype.setProperties = ez.prototype.I;
    ez.prototype.unset = ez.prototype.S;
    ez.prototype.changed = ez.prototype.s;
    ez.prototype.getRevision = ez.prototype.K;
    ez.prototype.on = ez.prototype.G;
    ez.prototype.once = ez.prototype.L;
    ez.prototype.un = ez.prototype.J;
    ez.prototype.unByKey = ez.prototype.M;
    sn.prototype.getAttributions = sn.prototype.la;
    sn.prototype.getLogo = sn.prototype.ka;
    sn.prototype.getProjection = sn.prototype.ma;
    sn.prototype.getState = sn.prototype.na;
    sn.prototype.get = sn.prototype.get;
    sn.prototype.getKeys = sn.prototype.O;
    sn.prototype.getProperties = sn.prototype.P;
    sn.prototype.set = sn.prototype.set;
    sn.prototype.setProperties = sn.prototype.I;
    sn.prototype.unset = sn.prototype.S;
    sn.prototype.changed = sn.prototype.s;
    sn.prototype.getRevision = sn.prototype.K;
    sn.prototype.on = sn.prototype.G;
    sn.prototype.once = sn.prototype.L;
    sn.prototype.un = sn.prototype.J;
    sn.prototype.unByKey = sn.prototype.M;
    zn.prototype.getAttributions = zn.prototype.la;
    zn.prototype.getLogo = zn.prototype.ka;
    zn.prototype.getProjection = zn.prototype.ma;
    zn.prototype.getState = zn.prototype.na;
    zn.prototype.get = zn.prototype.get;
    zn.prototype.getKeys = zn.prototype.O;
    zn.prototype.getProperties = zn.prototype.P;
    zn.prototype.set = zn.prototype.set;
    zn.prototype.setProperties = zn.prototype.I;
    zn.prototype.unset = zn.prototype.S;
    zn.prototype.changed = zn.prototype.s;
    zn.prototype.getRevision = zn.prototype.K;
    zn.prototype.on = zn.prototype.G;
    zn.prototype.once = zn.prototype.L;
    zn.prototype.un = zn.prototype.J;
    zn.prototype.unByKey = zn.prototype.M;
    hz.prototype.getAttributions = hz.prototype.la;
    hz.prototype.getLogo = hz.prototype.ka;
    hz.prototype.getProjection = hz.prototype.ma;
    hz.prototype.getState = hz.prototype.na;
    hz.prototype.get = hz.prototype.get;
    hz.prototype.getKeys = hz.prototype.O;
    hz.prototype.getProperties = hz.prototype.P;
    hz.prototype.set = hz.prototype.set;
    hz.prototype.setProperties = hz.prototype.I;
    hz.prototype.unset = hz.prototype.S;
    hz.prototype.changed = hz.prototype.s;
    hz.prototype.getRevision = hz.prototype.K;
    hz.prototype.on = hz.prototype.G;
    hz.prototype.once = hz.prototype.L;
    hz.prototype.un = hz.prototype.J;
    hz.prototype.unByKey = hz.prototype.M;
    iz.prototype.getAttributions = iz.prototype.la;
    iz.prototype.getLogo = iz.prototype.ka;
    iz.prototype.getProjection = iz.prototype.ma;
    iz.prototype.getState = iz.prototype.na;
    iz.prototype.get = iz.prototype.get;
    iz.prototype.getKeys = iz.prototype.O;
    iz.prototype.getProperties = iz.prototype.P;
    iz.prototype.set = iz.prototype.set;
    iz.prototype.setProperties = iz.prototype.I;
    iz.prototype.unset = iz.prototype.S;
    iz.prototype.changed = iz.prototype.s;
    iz.prototype.getRevision = iz.prototype.K;
    iz.prototype.on = iz.prototype.G;
    iz.prototype.once = iz.prototype.L;
    iz.prototype.un = iz.prototype.J;
    iz.prototype.unByKey = iz.prototype.M;
    Hp.prototype.getAttributions = Hp.prototype.la;
    Hp.prototype.getLogo = Hp.prototype.ka;
    Hp.prototype.getProjection = Hp.prototype.ma;
    Hp.prototype.getState = Hp.prototype.na;
    Hp.prototype.get = Hp.prototype.get;
    Hp.prototype.getKeys = Hp.prototype.O;
    Hp.prototype.getProperties = Hp.prototype.P;
    Hp.prototype.set = Hp.prototype.set;
    Hp.prototype.setProperties = Hp.prototype.I;
    Hp.prototype.unset = Hp.prototype.S;
    Hp.prototype.changed = Hp.prototype.s;
    Hp.prototype.getRevision = Hp.prototype.K;
    Hp.prototype.on = Hp.prototype.G;
    Hp.prototype.once = Hp.prototype.L;
    Hp.prototype.un = Hp.prototype.J;
    Hp.prototype.unByKey = Hp.prototype.M;
    jz.prototype.getAttributions = jz.prototype.la;
    jz.prototype.getLogo = jz.prototype.ka;
    jz.prototype.getProjection = jz.prototype.ma;
    jz.prototype.getState = jz.prototype.na;
    jz.prototype.get = jz.prototype.get;
    jz.prototype.getKeys = jz.prototype.O;
    jz.prototype.getProperties = jz.prototype.P;
    jz.prototype.set = jz.prototype.set;
    jz.prototype.setProperties = jz.prototype.I;
    jz.prototype.unset = jz.prototype.S;
    jz.prototype.changed = jz.prototype.s;
    jz.prototype.getRevision = jz.prototype.K;
    jz.prototype.on = jz.prototype.G;
    jz.prototype.once = jz.prototype.L;
    jz.prototype.un = jz.prototype.J;
    jz.prototype.unByKey = jz.prototype.M;
    nz.prototype.getTileLoadFunction = nz.prototype.ab;
    nz.prototype.getTileUrlFunction = nz.prototype.bb;
    nz.prototype.setTileLoadFunction = nz.prototype.ib;
    nz.prototype.setTileUrlFunction = nz.prototype.Fa;
    nz.prototype.getTileGrid = nz.prototype.za;
    nz.prototype.getAttributions = nz.prototype.la;
    nz.prototype.getLogo = nz.prototype.ka;
    nz.prototype.getProjection = nz.prototype.ma;
    nz.prototype.getState = nz.prototype.na;
    nz.prototype.get = nz.prototype.get;
    nz.prototype.getKeys = nz.prototype.O;
    nz.prototype.getProperties = nz.prototype.P;
    nz.prototype.set = nz.prototype.set;
    nz.prototype.setProperties = nz.prototype.I;
    nz.prototype.unset = nz.prototype.S;
    nz.prototype.changed = nz.prototype.s;
    nz.prototype.getRevision = nz.prototype.K;
    nz.prototype.on = nz.prototype.G;
    nz.prototype.once = nz.prototype.L;
    nz.prototype.un = nz.prototype.J;
    nz.prototype.unByKey = nz.prototype.M;
    qz.prototype.setUrl = qz.prototype.f;
    qz.prototype.getTileLoadFunction = qz.prototype.ab;
    qz.prototype.getTileUrlFunction = qz.prototype.bb;
    qz.prototype.setTileLoadFunction = qz.prototype.ib;
    qz.prototype.setTileUrlFunction = qz.prototype.Fa;
    qz.prototype.getTileGrid = qz.prototype.za;
    qz.prototype.getAttributions = qz.prototype.la;
    qz.prototype.getLogo = qz.prototype.ka;
    qz.prototype.getProjection = qz.prototype.ma;
    qz.prototype.getState = qz.prototype.na;
    qz.prototype.get = qz.prototype.get;
    qz.prototype.getKeys = qz.prototype.O;
    qz.prototype.getProperties = qz.prototype.P;
    qz.prototype.set = qz.prototype.set;
    qz.prototype.setProperties = qz.prototype.I;
    qz.prototype.unset = qz.prototype.S;
    qz.prototype.changed = qz.prototype.s;
    qz.prototype.getRevision = qz.prototype.K;
    qz.prototype.on = qz.prototype.G;
    qz.prototype.once = qz.prototype.L;
    qz.prototype.un = qz.prototype.J;
    qz.prototype.unByKey = qz.prototype.M;
    oz.prototype.setUrl = oz.prototype.f;
    oz.prototype.getTileLoadFunction = oz.prototype.ab;
    oz.prototype.getTileUrlFunction = oz.prototype.bb;
    oz.prototype.setTileLoadFunction = oz.prototype.ib;
    oz.prototype.setTileUrlFunction = oz.prototype.Fa;
    oz.prototype.getTileGrid = oz.prototype.za;
    oz.prototype.getAttributions = oz.prototype.la;
    oz.prototype.getLogo = oz.prototype.ka;
    oz.prototype.getProjection = oz.prototype.ma;
    oz.prototype.getState = oz.prototype.na;
    oz.prototype.get = oz.prototype.get;
    oz.prototype.getKeys = oz.prototype.O;
    oz.prototype.getProperties = oz.prototype.P;
    oz.prototype.set = oz.prototype.set;
    oz.prototype.setProperties = oz.prototype.I;
    oz.prototype.unset = oz.prototype.S;
    oz.prototype.changed = oz.prototype.s;
    oz.prototype.getRevision = oz.prototype.K;
    oz.prototype.on = oz.prototype.G;
    oz.prototype.once = oz.prototype.L;
    oz.prototype.un = oz.prototype.J;
    oz.prototype.unByKey = oz.prototype.M;
    vz.prototype.setUrl = vz.prototype.f;
    vz.prototype.getTileLoadFunction = vz.prototype.ab;
    vz.prototype.getTileUrlFunction = vz.prototype.bb;
    vz.prototype.setTileLoadFunction = vz.prototype.ib;
    vz.prototype.setTileUrlFunction = vz.prototype.Fa;
    vz.prototype.getTileGrid = vz.prototype.za;
    vz.prototype.getAttributions = vz.prototype.la;
    vz.prototype.getLogo = vz.prototype.ka;
    vz.prototype.getProjection = vz.prototype.ma;
    vz.prototype.getState = vz.prototype.na;
    vz.prototype.get = vz.prototype.get;
    vz.prototype.getKeys = vz.prototype.O;
    vz.prototype.getProperties = vz.prototype.P;
    vz.prototype.set = vz.prototype.set;
    vz.prototype.setProperties = vz.prototype.I;
    vz.prototype.unset = vz.prototype.S;
    vz.prototype.changed = vz.prototype.s;
    vz.prototype.getRevision = vz.prototype.K;
    vz.prototype.on = vz.prototype.G;
    vz.prototype.once = vz.prototype.L;
    vz.prototype.un = vz.prototype.J;
    vz.prototype.unByKey = vz.prototype.M;
    xz.prototype.getTileLoadFunction = xz.prototype.ab;
    xz.prototype.getTileUrlFunction = xz.prototype.bb;
    xz.prototype.setTileLoadFunction = xz.prototype.ib;
    xz.prototype.setTileUrlFunction = xz.prototype.Fa;
    xz.prototype.getTileGrid = xz.prototype.za;
    xz.prototype.getAttributions = xz.prototype.la;
    xz.prototype.getLogo = xz.prototype.ka;
    xz.prototype.getProjection = xz.prototype.ma;
    xz.prototype.getState = xz.prototype.na;
    xz.prototype.get = xz.prototype.get;
    xz.prototype.getKeys = xz.prototype.O;
    xz.prototype.getProperties = xz.prototype.P;
    xz.prototype.set = xz.prototype.set;
    xz.prototype.setProperties = xz.prototype.I;
    xz.prototype.unset = xz.prototype.S;
    xz.prototype.changed = xz.prototype.s;
    xz.prototype.getRevision = xz.prototype.K;
    xz.prototype.on = xz.prototype.G;
    xz.prototype.once = xz.prototype.L;
    xz.prototype.un = xz.prototype.J;
    xz.prototype.unByKey = xz.prototype.M;
    zz.prototype.getTileGrid = zz.prototype.za;
    zz.prototype.getAttributions = zz.prototype.la;
    zz.prototype.getLogo = zz.prototype.ka;
    zz.prototype.getProjection = zz.prototype.ma;
    zz.prototype.getState = zz.prototype.na;
    zz.prototype.get = zz.prototype.get;
    zz.prototype.getKeys = zz.prototype.O;
    zz.prototype.getProperties = zz.prototype.P;
    zz.prototype.set = zz.prototype.set;
    zz.prototype.setProperties = zz.prototype.I;
    zz.prototype.unset = zz.prototype.S;
    zz.prototype.changed = zz.prototype.s;
    zz.prototype.getRevision = zz.prototype.K;
    zz.prototype.on = zz.prototype.G;
    zz.prototype.once = zz.prototype.L;
    zz.prototype.un = zz.prototype.J;
    zz.prototype.unByKey = zz.prototype.M;
    Az.prototype.getTileLoadFunction = Az.prototype.ab;
    Az.prototype.getTileUrlFunction = Az.prototype.bb;
    Az.prototype.setTileLoadFunction = Az.prototype.ib;
    Az.prototype.setTileUrlFunction = Az.prototype.Fa;
    Az.prototype.getTileGrid = Az.prototype.za;
    Az.prototype.getAttributions = Az.prototype.la;
    Az.prototype.getLogo = Az.prototype.ka;
    Az.prototype.getProjection = Az.prototype.ma;
    Az.prototype.getState = Az.prototype.na;
    Az.prototype.get = Az.prototype.get;
    Az.prototype.getKeys = Az.prototype.O;
    Az.prototype.getProperties = Az.prototype.P;
    Az.prototype.set = Az.prototype.set;
    Az.prototype.setProperties = Az.prototype.I;
    Az.prototype.unset = Az.prototype.S;
    Az.prototype.changed = Az.prototype.s;
    Az.prototype.getRevision = Az.prototype.K;
    Az.prototype.on = Az.prototype.G;
    Az.prototype.once = Az.prototype.L;
    Az.prototype.un = Az.prototype.J;
    Az.prototype.unByKey = Az.prototype.M;
    Bz.prototype.getTileGrid = Bz.prototype.za;
    Bz.prototype.getAttributions = Bz.prototype.la;
    Bz.prototype.getLogo = Bz.prototype.ka;
    Bz.prototype.getProjection = Bz.prototype.ma;
    Bz.prototype.getState = Bz.prototype.na;
    Bz.prototype.get = Bz.prototype.get;
    Bz.prototype.getKeys = Bz.prototype.O;
    Bz.prototype.getProperties = Bz.prototype.P;
    Bz.prototype.set = Bz.prototype.set;
    Bz.prototype.setProperties = Bz.prototype.I;
    Bz.prototype.unset = Bz.prototype.S;
    Bz.prototype.changed = Bz.prototype.s;
    Bz.prototype.getRevision = Bz.prototype.K;
    Bz.prototype.on = Bz.prototype.G;
    Bz.prototype.once = Bz.prototype.L;
    Bz.prototype.un = Bz.prototype.J;
    Bz.prototype.unByKey = Bz.prototype.M;
    Gz.prototype.forEachFeatureIntersectingExtent = Gz.prototype.Se;
    Gz.prototype.getFeaturesCollection = Gz.prototype.We;
    Gz.prototype.getFeaturesAtCoordinate = Gz.prototype.Ve;
    Gz.prototype.getFeatureById = Gz.prototype.Ue;
    Gz.prototype.getAttributions = Gz.prototype.la;
    Gz.prototype.getLogo = Gz.prototype.ka;
    Gz.prototype.getProjection = Gz.prototype.ma;
    Gz.prototype.getState = Gz.prototype.na;
    Gz.prototype.get = Gz.prototype.get;
    Gz.prototype.getKeys = Gz.prototype.O;
    Gz.prototype.getProperties = Gz.prototype.P;
    Gz.prototype.set = Gz.prototype.set;
    Gz.prototype.setProperties = Gz.prototype.I;
    Gz.prototype.unset = Gz.prototype.S;
    Gz.prototype.changed = Gz.prototype.s;
    Gz.prototype.getRevision = Gz.prototype.K;
    Gz.prototype.on = Gz.prototype.G;
    Gz.prototype.once = Gz.prototype.L;
    Gz.prototype.un = Gz.prototype.J;
    Gz.prototype.unByKey = Gz.prototype.M;
    Jz.prototype.getTileLoadFunction = Jz.prototype.ab;
    Jz.prototype.getTileUrlFunction = Jz.prototype.bb;
    Jz.prototype.setTileLoadFunction = Jz.prototype.ib;
    Jz.prototype.setTileUrlFunction = Jz.prototype.Fa;
    Jz.prototype.getTileGrid = Jz.prototype.za;
    Jz.prototype.getAttributions = Jz.prototype.la;
    Jz.prototype.getLogo = Jz.prototype.ka;
    Jz.prototype.getProjection = Jz.prototype.ma;
    Jz.prototype.getState = Jz.prototype.na;
    Jz.prototype.get = Jz.prototype.get;
    Jz.prototype.getKeys = Jz.prototype.O;
    Jz.prototype.getProperties = Jz.prototype.P;
    Jz.prototype.set = Jz.prototype.set;
    Jz.prototype.setProperties = Jz.prototype.I;
    Jz.prototype.unset = Jz.prototype.S;
    Jz.prototype.changed = Jz.prototype.s;
    Jz.prototype.getRevision = Jz.prototype.K;
    Jz.prototype.on = Jz.prototype.G;
    Jz.prototype.once = Jz.prototype.L;
    Jz.prototype.un = Jz.prototype.J;
    Jz.prototype.unByKey = Jz.prototype.M;
    Pz.prototype.getTileLoadFunction = Pz.prototype.ab;
    Pz.prototype.getTileUrlFunction = Pz.prototype.bb;
    Pz.prototype.setTileLoadFunction = Pz.prototype.ib;
    Pz.prototype.setTileUrlFunction = Pz.prototype.Fa;
    Pz.prototype.getTileGrid = Pz.prototype.za;
    Pz.prototype.getAttributions = Pz.prototype.la;
    Pz.prototype.getLogo = Pz.prototype.ka;
    Pz.prototype.getProjection = Pz.prototype.ma;
    Pz.prototype.getState = Pz.prototype.na;
    Pz.prototype.get = Pz.prototype.get;
    Pz.prototype.getKeys = Pz.prototype.O;
    Pz.prototype.getProperties = Pz.prototype.P;
    Pz.prototype.set = Pz.prototype.set;
    Pz.prototype.setProperties = Pz.prototype.I;
    Pz.prototype.unset = Pz.prototype.S;
    Pz.prototype.changed = Pz.prototype.s;
    Pz.prototype.getRevision = Pz.prototype.K;
    Pz.prototype.on = Pz.prototype.G;
    Pz.prototype.once = Pz.prototype.L;
    Pz.prototype.un = Pz.prototype.J;
    Pz.prototype.unByKey = Pz.prototype.M;
    Rz.prototype.getTileLoadFunction = Rz.prototype.ab;
    Rz.prototype.getTileUrlFunction = Rz.prototype.bb;
    Rz.prototype.setTileLoadFunction = Rz.prototype.ib;
    Rz.prototype.setTileUrlFunction = Rz.prototype.Fa;
    Rz.prototype.getTileGrid = Rz.prototype.za;
    Rz.prototype.getAttributions = Rz.prototype.la;
    Rz.prototype.getLogo = Rz.prototype.ka;
    Rz.prototype.getProjection = Rz.prototype.ma;
    Rz.prototype.getState = Rz.prototype.na;
    Rz.prototype.get = Rz.prototype.get;
    Rz.prototype.getKeys = Rz.prototype.O;
    Rz.prototype.getProperties = Rz.prototype.P;
    Rz.prototype.set = Rz.prototype.set;
    Rz.prototype.setProperties = Rz.prototype.I;
    Rz.prototype.unset = Rz.prototype.S;
    Rz.prototype.changed = Rz.prototype.s;
    Rz.prototype.getRevision = Rz.prototype.K;
    Rz.prototype.on = Rz.prototype.G;
    Rz.prototype.once = Rz.prototype.L;
    Rz.prototype.un = Rz.prototype.J;
    Rz.prototype.unByKey = Rz.prototype.M;
    rk.prototype.changed = rk.prototype.s;
    rk.prototype.getRevision = rk.prototype.K;
    rk.prototype.on = rk.prototype.G;
    rk.prototype.once = rk.prototype.L;
    rk.prototype.un = rk.prototype.J;
    rk.prototype.unByKey = rk.prototype.M;
    Kq.prototype.changed = Kq.prototype.s;
    Kq.prototype.getRevision = Kq.prototype.K;
    Kq.prototype.on = Kq.prototype.G;
    Kq.prototype.once = Kq.prototype.L;
    Kq.prototype.un = Kq.prototype.J;
    Kq.prototype.unByKey = Kq.prototype.M;
    Nq.prototype.changed = Nq.prototype.s;
    Nq.prototype.getRevision = Nq.prototype.K;
    Nq.prototype.on = Nq.prototype.G;
    Nq.prototype.once = Nq.prototype.L;
    Nq.prototype.un = Nq.prototype.J;
    Nq.prototype.unByKey = Nq.prototype.M;
    Tq.prototype.changed = Tq.prototype.s;
    Tq.prototype.getRevision = Tq.prototype.K;
    Tq.prototype.on = Tq.prototype.G;
    Tq.prototype.once = Tq.prototype.L;
    Tq.prototype.un = Tq.prototype.J;
    Tq.prototype.unByKey = Tq.prototype.M;
    Vq.prototype.changed = Vq.prototype.s;
    Vq.prototype.getRevision = Vq.prototype.K;
    Vq.prototype.on = Vq.prototype.G;
    Vq.prototype.once = Vq.prototype.L;
    Vq.prototype.un = Vq.prototype.J;
    Vq.prototype.unByKey = Vq.prototype.M;
    Op.prototype.changed = Op.prototype.s;
    Op.prototype.getRevision = Op.prototype.K;
    Op.prototype.on = Op.prototype.G;
    Op.prototype.once = Op.prototype.L;
    Op.prototype.un = Op.prototype.J;
    Op.prototype.unByKey = Op.prototype.M;
    Pp.prototype.changed = Pp.prototype.s;
    Pp.prototype.getRevision = Pp.prototype.K;
    Pp.prototype.on = Pp.prototype.G;
    Pp.prototype.once = Pp.prototype.L;
    Pp.prototype.un = Pp.prototype.J;
    Pp.prototype.unByKey = Pp.prototype.M;
    Qp.prototype.changed = Qp.prototype.s;
    Qp.prototype.getRevision = Qp.prototype.K;
    Qp.prototype.on = Qp.prototype.G;
    Qp.prototype.once = Qp.prototype.L;
    Qp.prototype.un = Qp.prototype.J;
    Qp.prototype.unByKey = Qp.prototype.M;
    Sp.prototype.changed = Sp.prototype.s;
    Sp.prototype.getRevision = Sp.prototype.K;
    Sp.prototype.on = Sp.prototype.G;
    Sp.prototype.once = Sp.prototype.L;
    Sp.prototype.un = Sp.prototype.J;
    Sp.prototype.unByKey = Sp.prototype.M;
    ym.prototype.changed = ym.prototype.s;
    ym.prototype.getRevision = ym.prototype.K;
    ym.prototype.on = ym.prototype.G;
    ym.prototype.once = ym.prototype.L;
    ym.prototype.un = ym.prototype.J;
    ym.prototype.unByKey = ym.prototype.M;
    Jp.prototype.changed = Jp.prototype.s;
    Jp.prototype.getRevision = Jp.prototype.K;
    Jp.prototype.on = Jp.prototype.G;
    Jp.prototype.once = Jp.prototype.L;
    Jp.prototype.un = Jp.prototype.J;
    Jp.prototype.unByKey = Jp.prototype.M;
    Kp.prototype.changed = Kp.prototype.s;
    Kp.prototype.getRevision = Kp.prototype.K;
    Kp.prototype.on = Kp.prototype.G;
    Kp.prototype.once = Kp.prototype.L;
    Kp.prototype.un = Kp.prototype.J;
    Kp.prototype.unByKey = Kp.prototype.M;
    Lp.prototype.changed = Lp.prototype.s;
    Lp.prototype.getRevision = Lp.prototype.K;
    Lp.prototype.on = Lp.prototype.G;
    Lp.prototype.once = Lp.prototype.L;
    Lp.prototype.un = Lp.prototype.J;
    Lp.prototype.unByKey = Lp.prototype.M;
    ik.prototype.get = ik.prototype.get;
    ik.prototype.getKeys = ik.prototype.O;
    ik.prototype.getProperties = ik.prototype.P;
    ik.prototype.set = ik.prototype.set;
    ik.prototype.setProperties = ik.prototype.I;
    ik.prototype.unset = ik.prototype.S;
    ik.prototype.changed = ik.prototype.s;
    ik.prototype.getRevision = ik.prototype.K;
    ik.prototype.on = ik.prototype.G;
    ik.prototype.once = ik.prototype.L;
    ik.prototype.un = ik.prototype.J;
    ik.prototype.unByKey = ik.prototype.M;
    G.prototype.getBrightness = G.prototype.Ib;
    G.prototype.getContrast = G.prototype.Jb;
    G.prototype.getHue = G.prototype.Kb;
    G.prototype.getExtent = G.prototype.R;
    G.prototype.getMaxResolution = G.prototype.Lb;
    G.prototype.getMinResolution = G.prototype.Mb;
    G.prototype.getOpacity = G.prototype.Rb;
    G.prototype.getSaturation = G.prototype.Nb;
    G.prototype.getVisible = G.prototype.mb;
    G.prototype.setBrightness = G.prototype.mc;
    G.prototype.setContrast = G.prototype.nc;
    G.prototype.setHue = G.prototype.oc;
    G.prototype.setExtent = G.prototype.hc;
    G.prototype.setMaxResolution = G.prototype.pc;
    G.prototype.setMinResolution = G.prototype.qc;
    G.prototype.setOpacity = G.prototype.ic;
    G.prototype.setSaturation = G.prototype.rc;
    G.prototype.setVisible = G.prototype.sc;
    G.prototype.get = G.prototype.get;
    G.prototype.getKeys = G.prototype.O;
    G.prototype.getProperties = G.prototype.P;
    G.prototype.set = G.prototype.set;
    G.prototype.setProperties = G.prototype.I;
    G.prototype.unset = G.prototype.S;
    G.prototype.changed = G.prototype.s;
    G.prototype.getRevision = G.prototype.K;
    G.prototype.on = G.prototype.G;
    G.prototype.once = G.prototype.L;
    G.prototype.un = G.prototype.J;
    G.prototype.unByKey = G.prototype.M;
    M.prototype.setMap = M.prototype.setMap;
    M.prototype.setSource = M.prototype.Qc;
    M.prototype.getBrightness = M.prototype.Ib;
    M.prototype.getContrast = M.prototype.Jb;
    M.prototype.getHue = M.prototype.Kb;
    M.prototype.getExtent = M.prototype.R;
    M.prototype.getMaxResolution = M.prototype.Lb;
    M.prototype.getMinResolution = M.prototype.Mb;
    M.prototype.getOpacity = M.prototype.Rb;
    M.prototype.getSaturation = M.prototype.Nb;
    M.prototype.getVisible = M.prototype.mb;
    M.prototype.setBrightness = M.prototype.mc;
    M.prototype.setContrast = M.prototype.nc;
    M.prototype.setHue = M.prototype.oc;
    M.prototype.setExtent = M.prototype.hc;
    M.prototype.setMaxResolution = M.prototype.pc;
    M.prototype.setMinResolution = M.prototype.qc;
    M.prototype.setOpacity = M.prototype.ic;
    M.prototype.setSaturation = M.prototype.rc;
    M.prototype.setVisible = M.prototype.sc;
    M.prototype.get = M.prototype.get;
    M.prototype.getKeys = M.prototype.O;
    M.prototype.getProperties = M.prototype.P;
    M.prototype.set = M.prototype.set;
    M.prototype.setProperties = M.prototype.I;
    M.prototype.unset = M.prototype.S;
    M.prototype.changed = M.prototype.s;
    M.prototype.getRevision = M.prototype.K;
    M.prototype.on = M.prototype.G;
    M.prototype.once = M.prototype.L;
    M.prototype.un = M.prototype.J;
    M.prototype.unByKey = M.prototype.M;
    Z.prototype.getSource = Z.prototype.da;
    Z.prototype.getStyle = Z.prototype.T;
    Z.prototype.getStyleFunction = Z.prototype.ba;
    Z.prototype.setStyle = Z.prototype.g;
    Z.prototype.setMap = Z.prototype.setMap;
    Z.prototype.setSource = Z.prototype.Qc;
    Z.prototype.getBrightness = Z.prototype.Ib;
    Z.prototype.getContrast = Z.prototype.Jb;
    Z.prototype.getHue = Z.prototype.Kb;
    Z.prototype.getExtent = Z.prototype.R;
    Z.prototype.getMaxResolution = Z.prototype.Lb;
    Z.prototype.getMinResolution = Z.prototype.Mb;
    Z.prototype.getOpacity = Z.prototype.Rb;
    Z.prototype.getSaturation = Z.prototype.Nb;
    Z.prototype.getVisible = Z.prototype.mb;
    Z.prototype.setBrightness = Z.prototype.mc;
    Z.prototype.setContrast = Z.prototype.nc;
    Z.prototype.setHue = Z.prototype.oc;
    Z.prototype.setExtent = Z.prototype.hc;
    Z.prototype.setMaxResolution = Z.prototype.pc;
    Z.prototype.setMinResolution = Z.prototype.qc;
    Z.prototype.setOpacity = Z.prototype.ic;
    Z.prototype.setSaturation = Z.prototype.rc;
    Z.prototype.setVisible = Z.prototype.sc;
    Z.prototype.get = Z.prototype.get;
    Z.prototype.getKeys = Z.prototype.O;
    Z.prototype.getProperties = Z.prototype.P;
    Z.prototype.set = Z.prototype.set;
    Z.prototype.setProperties = Z.prototype.I;
    Z.prototype.unset = Z.prototype.S;
    Z.prototype.changed = Z.prototype.s;
    Z.prototype.getRevision = Z.prototype.K;
    Z.prototype.on = Z.prototype.G;
    Z.prototype.once = Z.prototype.L;
    Z.prototype.un = Z.prototype.J;
    Z.prototype.unByKey = Z.prototype.M;
    I.prototype.setMap = I.prototype.setMap;
    I.prototype.setSource = I.prototype.Qc;
    I.prototype.getBrightness = I.prototype.Ib;
    I.prototype.getContrast = I.prototype.Jb;
    I.prototype.getHue = I.prototype.Kb;
    I.prototype.getExtent = I.prototype.R;
    I.prototype.getMaxResolution = I.prototype.Lb;
    I.prototype.getMinResolution = I.prototype.Mb;
    I.prototype.getOpacity = I.prototype.Rb;
    I.prototype.getSaturation = I.prototype.Nb;
    I.prototype.getVisible = I.prototype.mb;
    I.prototype.setBrightness = I.prototype.mc;
    I.prototype.setContrast = I.prototype.nc;
    I.prototype.setHue = I.prototype.oc;
    I.prototype.setExtent = I.prototype.hc;
    I.prototype.setMaxResolution = I.prototype.pc;
    I.prototype.setMinResolution = I.prototype.qc;
    I.prototype.setOpacity = I.prototype.ic;
    I.prototype.setSaturation = I.prototype.rc;
    I.prototype.setVisible = I.prototype.sc;
    I.prototype.get = I.prototype.get;
    I.prototype.getKeys = I.prototype.O;
    I.prototype.getProperties = I.prototype.P;
    I.prototype.set = I.prototype.set;
    I.prototype.setProperties = I.prototype.I;
    I.prototype.unset = I.prototype.S;
    I.prototype.changed = I.prototype.s;
    I.prototype.getRevision = I.prototype.K;
    I.prototype.on = I.prototype.G;
    I.prototype.once = I.prototype.L;
    I.prototype.un = I.prototype.J;
    I.prototype.unByKey = I.prototype.M;
    cm.prototype.getBrightness = cm.prototype.Ib;
    cm.prototype.getContrast = cm.prototype.Jb;
    cm.prototype.getHue = cm.prototype.Kb;
    cm.prototype.getExtent = cm.prototype.R;
    cm.prototype.getMaxResolution = cm.prototype.Lb;
    cm.prototype.getMinResolution = cm.prototype.Mb;
    cm.prototype.getOpacity = cm.prototype.Rb;
    cm.prototype.getSaturation = cm.prototype.Nb;
    cm.prototype.getVisible = cm.prototype.mb;
    cm.prototype.setBrightness = cm.prototype.mc;
    cm.prototype.setContrast = cm.prototype.nc;
    cm.prototype.setHue = cm.prototype.oc;
    cm.prototype.setExtent = cm.prototype.hc;
    cm.prototype.setMaxResolution = cm.prototype.pc;
    cm.prototype.setMinResolution = cm.prototype.qc;
    cm.prototype.setOpacity = cm.prototype.ic;
    cm.prototype.setSaturation = cm.prototype.rc;
    cm.prototype.setVisible = cm.prototype.sc;
    cm.prototype.get = cm.prototype.get;
    cm.prototype.getKeys = cm.prototype.O;
    cm.prototype.getProperties = cm.prototype.P;
    cm.prototype.set = cm.prototype.set;
    cm.prototype.setProperties = cm.prototype.I;
    cm.prototype.unset = cm.prototype.S;
    cm.prototype.changed = cm.prototype.s;
    cm.prototype.getRevision = cm.prototype.K;
    cm.prototype.on = cm.prototype.G;
    cm.prototype.once = cm.prototype.L;
    cm.prototype.un = cm.prototype.J;
    cm.prototype.unByKey = cm.prototype.M;
    J.prototype.setMap = J.prototype.setMap;
    J.prototype.setSource = J.prototype.Qc;
    J.prototype.getBrightness = J.prototype.Ib;
    J.prototype.getContrast = J.prototype.Jb;
    J.prototype.getHue = J.prototype.Kb;
    J.prototype.getExtent = J.prototype.R;
    J.prototype.getMaxResolution = J.prototype.Lb;
    J.prototype.getMinResolution = J.prototype.Mb;
    J.prototype.getOpacity = J.prototype.Rb;
    J.prototype.getSaturation = J.prototype.Nb;
    J.prototype.getVisible = J.prototype.mb;
    J.prototype.setBrightness = J.prototype.mc;
    J.prototype.setContrast = J.prototype.nc;
    J.prototype.setHue = J.prototype.oc;
    J.prototype.setExtent = J.prototype.hc;
    J.prototype.setMaxResolution = J.prototype.pc;
    J.prototype.setMinResolution = J.prototype.qc;
    J.prototype.setOpacity = J.prototype.ic;
    J.prototype.setSaturation = J.prototype.rc;
    J.prototype.setVisible = J.prototype.sc;
    J.prototype.get = J.prototype.get;
    J.prototype.getKeys = J.prototype.O;
    J.prototype.getProperties = J.prototype.P;
    J.prototype.set = J.prototype.set;
    J.prototype.setProperties = J.prototype.I;
    J.prototype.unset = J.prototype.S;
    J.prototype.changed = J.prototype.s;
    J.prototype.getRevision = J.prototype.K;
    J.prototype.on = J.prototype.G;
    J.prototype.once = J.prototype.L;
    J.prototype.un = J.prototype.J;
    J.prototype.unByKey = J.prototype.M;
    Tk.prototype.get = Tk.prototype.get;
    Tk.prototype.getKeys = Tk.prototype.O;
    Tk.prototype.getProperties = Tk.prototype.P;
    Tk.prototype.set = Tk.prototype.set;
    Tk.prototype.setProperties = Tk.prototype.I;
    Tk.prototype.unset = Tk.prototype.S;
    Tk.prototype.changed = Tk.prototype.s;
    Tk.prototype.getRevision = Tk.prototype.K;
    Tk.prototype.on = Tk.prototype.G;
    Tk.prototype.once = Tk.prototype.L;
    Tk.prototype.un = Tk.prototype.J;
    Tk.prototype.unByKey = Tk.prototype.M;
    Xk.prototype.getActive = Xk.prototype.b;
    Xk.prototype.setActive = Xk.prototype.f;
    Xk.prototype.get = Xk.prototype.get;
    Xk.prototype.getKeys = Xk.prototype.O;
    Xk.prototype.getProperties = Xk.prototype.P;
    Xk.prototype.set = Xk.prototype.set;
    Xk.prototype.setProperties = Xk.prototype.I;
    Xk.prototype.unset = Xk.prototype.S;
    Xk.prototype.changed = Xk.prototype.s;
    Xk.prototype.getRevision = Xk.prototype.K;
    Xk.prototype.on = Xk.prototype.G;
    Xk.prototype.once = Xk.prototype.L;
    Xk.prototype.un = Xk.prototype.J;
    Xk.prototype.unByKey = Xk.prototype.M;
    Sx.prototype.getActive = Sx.prototype.b;
    Sx.prototype.setActive = Sx.prototype.f;
    Sx.prototype.get = Sx.prototype.get;
    Sx.prototype.getKeys = Sx.prototype.O;
    Sx.prototype.getProperties = Sx.prototype.P;
    Sx.prototype.set = Sx.prototype.set;
    Sx.prototype.setProperties = Sx.prototype.I;
    Sx.prototype.unset = Sx.prototype.S;
    Sx.prototype.changed = Sx.prototype.s;
    Sx.prototype.getRevision = Sx.prototype.K;
    Sx.prototype.on = Sx.prototype.G;
    Sx.prototype.once = Sx.prototype.L;
    Sx.prototype.un = Sx.prototype.J;
    Sx.prototype.unByKey = Sx.prototype.M;
    fl.prototype.getActive = fl.prototype.b;
    fl.prototype.setActive = fl.prototype.f;
    fl.prototype.get = fl.prototype.get;
    fl.prototype.getKeys = fl.prototype.O;
    fl.prototype.getProperties = fl.prototype.P;
    fl.prototype.set = fl.prototype.set;
    fl.prototype.setProperties = fl.prototype.I;
    fl.prototype.unset = fl.prototype.S;
    fl.prototype.changed = fl.prototype.s;
    fl.prototype.getRevision = fl.prototype.K;
    fl.prototype.on = fl.prototype.G;
    fl.prototype.once = fl.prototype.L;
    fl.prototype.un = fl.prototype.J;
    fl.prototype.unByKey = fl.prototype.M;
    vl.prototype.getActive = vl.prototype.b;
    vl.prototype.setActive = vl.prototype.f;
    vl.prototype.get = vl.prototype.get;
    vl.prototype.getKeys = vl.prototype.O;
    vl.prototype.getProperties = vl.prototype.P;
    vl.prototype.set = vl.prototype.set;
    vl.prototype.setProperties = vl.prototype.I;
    vl.prototype.unset = vl.prototype.S;
    vl.prototype.changed = vl.prototype.s;
    vl.prototype.getRevision = vl.prototype.K;
    vl.prototype.on = vl.prototype.G;
    vl.prototype.once = vl.prototype.L;
    vl.prototype.un = vl.prototype.J;
    vl.prototype.unByKey = vl.prototype.M;
    il.prototype.getActive = il.prototype.b;
    il.prototype.setActive = il.prototype.f;
    il.prototype.get = il.prototype.get;
    il.prototype.getKeys = il.prototype.O;
    il.prototype.getProperties = il.prototype.P;
    il.prototype.set = il.prototype.set;
    il.prototype.setProperties = il.prototype.I;
    il.prototype.unset = il.prototype.S;
    il.prototype.changed = il.prototype.s;
    il.prototype.getRevision = il.prototype.K;
    il.prototype.on = il.prototype.G;
    il.prototype.once = il.prototype.L;
    il.prototype.un = il.prototype.J;
    il.prototype.unByKey = il.prototype.M;
    Wx.prototype.getActive = Wx.prototype.b;
    Wx.prototype.setActive = Wx.prototype.f;
    Wx.prototype.get = Wx.prototype.get;
    Wx.prototype.getKeys = Wx.prototype.O;
    Wx.prototype.getProperties = Wx.prototype.P;
    Wx.prototype.set = Wx.prototype.set;
    Wx.prototype.setProperties = Wx.prototype.I;
    Wx.prototype.unset = Wx.prototype.S;
    Wx.prototype.changed = Wx.prototype.s;
    Wx.prototype.getRevision = Wx.prototype.K;
    Wx.prototype.on = Wx.prototype.G;
    Wx.prototype.once = Wx.prototype.L;
    Wx.prototype.un = Wx.prototype.J;
    Wx.prototype.unByKey = Wx.prototype.M;
    ml.prototype.getActive = ml.prototype.b;
    ml.prototype.setActive = ml.prototype.f;
    ml.prototype.get = ml.prototype.get;
    ml.prototype.getKeys = ml.prototype.O;
    ml.prototype.getProperties = ml.prototype.P;
    ml.prototype.set = ml.prototype.set;
    ml.prototype.setProperties = ml.prototype.I;
    ml.prototype.unset = ml.prototype.S;
    ml.prototype.changed = ml.prototype.s;
    ml.prototype.getRevision = ml.prototype.K;
    ml.prototype.on = ml.prototype.G;
    ml.prototype.once = ml.prototype.L;
    ml.prototype.un = ml.prototype.J;
    ml.prototype.unByKey = ml.prototype.M;
    Nl.prototype.getGeometry = Nl.prototype.Y;
    Nl.prototype.getActive = Nl.prototype.b;
    Nl.prototype.setActive = Nl.prototype.f;
    Nl.prototype.get = Nl.prototype.get;
    Nl.prototype.getKeys = Nl.prototype.O;
    Nl.prototype.getProperties = Nl.prototype.P;
    Nl.prototype.set = Nl.prototype.set;
    Nl.prototype.setProperties = Nl.prototype.I;
    Nl.prototype.unset = Nl.prototype.S;
    Nl.prototype.changed = Nl.prototype.s;
    Nl.prototype.getRevision = Nl.prototype.K;
    Nl.prototype.on = Nl.prototype.G;
    Nl.prototype.once = Nl.prototype.L;
    Nl.prototype.un = Nl.prototype.J;
    Nl.prototype.unByKey = Nl.prototype.M;
    ay.prototype.getActive = ay.prototype.b;
    ay.prototype.setActive = ay.prototype.f;
    ay.prototype.get = ay.prototype.get;
    ay.prototype.getKeys = ay.prototype.O;
    ay.prototype.getProperties = ay.prototype.P;
    ay.prototype.set = ay.prototype.set;
    ay.prototype.setProperties = ay.prototype.I;
    ay.prototype.unset = ay.prototype.S;
    ay.prototype.changed = ay.prototype.s;
    ay.prototype.getRevision = ay.prototype.K;
    ay.prototype.on = ay.prototype.G;
    ay.prototype.once = ay.prototype.L;
    ay.prototype.un = ay.prototype.J;
    ay.prototype.unByKey = ay.prototype.M;
    Ol.prototype.getActive = Ol.prototype.b;
    Ol.prototype.setActive = Ol.prototype.f;
    Ol.prototype.get = Ol.prototype.get;
    Ol.prototype.getKeys = Ol.prototype.O;
    Ol.prototype.getProperties = Ol.prototype.P;
    Ol.prototype.set = Ol.prototype.set;
    Ol.prototype.setProperties = Ol.prototype.I;
    Ol.prototype.unset = Ol.prototype.S;
    Ol.prototype.changed = Ol.prototype.s;
    Ol.prototype.getRevision = Ol.prototype.K;
    Ol.prototype.on = Ol.prototype.G;
    Ol.prototype.once = Ol.prototype.L;
    Ol.prototype.un = Ol.prototype.J;
    Ol.prototype.unByKey = Ol.prototype.M;
    Ql.prototype.getActive = Ql.prototype.b;
    Ql.prototype.setActive = Ql.prototype.f;
    Ql.prototype.get = Ql.prototype.get;
    Ql.prototype.getKeys = Ql.prototype.O;
    Ql.prototype.getProperties = Ql.prototype.P;
    Ql.prototype.set = Ql.prototype.set;
    Ql.prototype.setProperties = Ql.prototype.I;
    Ql.prototype.unset = Ql.prototype.S;
    Ql.prototype.changed = Ql.prototype.s;
    Ql.prototype.getRevision = Ql.prototype.K;
    Ql.prototype.on = Ql.prototype.G;
    Ql.prototype.once = Ql.prototype.L;
    Ql.prototype.un = Ql.prototype.J;
    Ql.prototype.unByKey = Ql.prototype.M;
    ry.prototype.getActive = ry.prototype.b;
    ry.prototype.setActive = ry.prototype.f;
    ry.prototype.get = ry.prototype.get;
    ry.prototype.getKeys = ry.prototype.O;
    ry.prototype.getProperties = ry.prototype.P;
    ry.prototype.set = ry.prototype.set;
    ry.prototype.setProperties = ry.prototype.I;
    ry.prototype.unset = ry.prototype.S;
    ry.prototype.changed = ry.prototype.s;
    ry.prototype.getRevision = ry.prototype.K;
    ry.prototype.on = ry.prototype.G;
    ry.prototype.once = ry.prototype.L;
    ry.prototype.un = ry.prototype.J;
    ry.prototype.unByKey = ry.prototype.M;
    Sl.prototype.getActive = Sl.prototype.b;
    Sl.prototype.setActive = Sl.prototype.f;
    Sl.prototype.get = Sl.prototype.get;
    Sl.prototype.getKeys = Sl.prototype.O;
    Sl.prototype.getProperties = Sl.prototype.P;
    Sl.prototype.set = Sl.prototype.set;
    Sl.prototype.setProperties = Sl.prototype.I;
    Sl.prototype.unset = Sl.prototype.S;
    Sl.prototype.changed = Sl.prototype.s;
    Sl.prototype.getRevision = Sl.prototype.K;
    Sl.prototype.on = Sl.prototype.G;
    Sl.prototype.once = Sl.prototype.L;
    Sl.prototype.un = Sl.prototype.J;
    Sl.prototype.unByKey = Sl.prototype.M;
    Ul.prototype.getActive = Ul.prototype.b;
    Ul.prototype.setActive = Ul.prototype.f;
    Ul.prototype.get = Ul.prototype.get;
    Ul.prototype.getKeys = Ul.prototype.O;
    Ul.prototype.getProperties = Ul.prototype.P;
    Ul.prototype.set = Ul.prototype.set;
    Ul.prototype.setProperties = Ul.prototype.I;
    Ul.prototype.unset = Ul.prototype.S;
    Ul.prototype.changed = Ul.prototype.s;
    Ul.prototype.getRevision = Ul.prototype.K;
    Ul.prototype.on = Ul.prototype.G;
    Ul.prototype.once = Ul.prototype.L;
    Ul.prototype.un = Ul.prototype.J;
    Ul.prototype.unByKey = Ul.prototype.M;
    Yl.prototype.getActive = Yl.prototype.b;
    Yl.prototype.setActive = Yl.prototype.f;
    Yl.prototype.get = Yl.prototype.get;
    Yl.prototype.getKeys = Yl.prototype.O;
    Yl.prototype.getProperties = Yl.prototype.P;
    Yl.prototype.set = Yl.prototype.set;
    Yl.prototype.setProperties = Yl.prototype.I;
    Yl.prototype.unset = Yl.prototype.S;
    Yl.prototype.changed = Yl.prototype.s;
    Yl.prototype.getRevision = Yl.prototype.K;
    Yl.prototype.on = Yl.prototype.G;
    Yl.prototype.once = Yl.prototype.L;
    Yl.prototype.un = Yl.prototype.J;
    Yl.prototype.unByKey = Yl.prototype.M;
    Cy.prototype.getActive = Cy.prototype.b;
    Cy.prototype.setActive = Cy.prototype.f;
    Cy.prototype.get = Cy.prototype.get;
    Cy.prototype.getKeys = Cy.prototype.O;
    Cy.prototype.getProperties = Cy.prototype.P;
    Cy.prototype.set = Cy.prototype.set;
    Cy.prototype.setProperties = Cy.prototype.I;
    Cy.prototype.unset = Cy.prototype.S;
    Cy.prototype.changed = Cy.prototype.s;
    Cy.prototype.getRevision = Cy.prototype.K;
    Cy.prototype.on = Cy.prototype.G;
    Cy.prototype.once = Cy.prototype.L;
    Cy.prototype.un = Cy.prototype.J;
    Cy.prototype.unByKey = Cy.prototype.M;
    Fy.prototype.getActive = Fy.prototype.b;
    Fy.prototype.setActive = Fy.prototype.f;
    Fy.prototype.get = Fy.prototype.get;
    Fy.prototype.getKeys = Fy.prototype.O;
    Fy.prototype.getProperties = Fy.prototype.P;
    Fy.prototype.set = Fy.prototype.set;
    Fy.prototype.setProperties = Fy.prototype.I;
    Fy.prototype.unset = Fy.prototype.S;
    Fy.prototype.changed = Fy.prototype.s;
    Fy.prototype.getRevision = Fy.prototype.K;
    Fy.prototype.on = Fy.prototype.G;
    Fy.prototype.once = Fy.prototype.L;
    Fy.prototype.un = Fy.prototype.J;
    Fy.prototype.unByKey = Fy.prototype.M;
    Xe.prototype.get = Xe.prototype.get;
    Xe.prototype.getKeys = Xe.prototype.O;
    Xe.prototype.getProperties = Xe.prototype.P;
    Xe.prototype.set = Xe.prototype.set;
    Xe.prototype.setProperties = Xe.prototype.I;
    Xe.prototype.unset = Xe.prototype.S;
    Xe.prototype.changed = Xe.prototype.s;
    Xe.prototype.getRevision = Xe.prototype.K;
    Xe.prototype.on = Xe.prototype.G;
    Xe.prototype.once = Xe.prototype.L;
    Xe.prototype.un = Xe.prototype.J;
    Xe.prototype.unByKey = Xe.prototype.M;
    Ze.prototype.getClosestPoint = Ze.prototype.$a;
    Ze.prototype.getExtent = Ze.prototype.R;
    Ze.prototype.transform = Ze.prototype.transform;
    Ze.prototype.get = Ze.prototype.get;
    Ze.prototype.getKeys = Ze.prototype.O;
    Ze.prototype.getProperties = Ze.prototype.P;
    Ze.prototype.set = Ze.prototype.set;
    Ze.prototype.setProperties = Ze.prototype.I;
    Ze.prototype.unset = Ze.prototype.S;
    Ze.prototype.changed = Ze.prototype.s;
    Ze.prototype.getRevision = Ze.prototype.K;
    Ze.prototype.on = Ze.prototype.G;
    Ze.prototype.once = Ze.prototype.L;
    Ze.prototype.un = Ze.prototype.J;
    Ze.prototype.unByKey = Ze.prototype.M;
    Ym.prototype.getFirstCoordinate = Ym.prototype.Ab;
    Ym.prototype.getLastCoordinate = Ym.prototype.Bb;
    Ym.prototype.getLayout = Ym.prototype.Cb;
    Ym.prototype.applyTransform = Ym.prototype.va;
    Ym.prototype.translate = Ym.prototype.Ua;
    Ym.prototype.getClosestPoint = Ym.prototype.$a;
    Ym.prototype.getExtent = Ym.prototype.R;
    Ym.prototype.get = Ym.prototype.get;
    Ym.prototype.getKeys = Ym.prototype.O;
    Ym.prototype.getProperties = Ym.prototype.P;
    Ym.prototype.set = Ym.prototype.set;
    Ym.prototype.setProperties = Ym.prototype.I;
    Ym.prototype.unset = Ym.prototype.S;
    Ym.prototype.changed = Ym.prototype.s;
    Ym.prototype.getRevision = Ym.prototype.K;
    Ym.prototype.on = Ym.prototype.G;
    Ym.prototype.once = Ym.prototype.L;
    Ym.prototype.un = Ym.prototype.J;
    Ym.prototype.unByKey = Ym.prototype.M;
    $m.prototype.getClosestPoint = $m.prototype.$a;
    $m.prototype.getExtent = $m.prototype.R;
    $m.prototype.transform = $m.prototype.transform;
    $m.prototype.get = $m.prototype.get;
    $m.prototype.getKeys = $m.prototype.O;
    $m.prototype.getProperties = $m.prototype.P;
    $m.prototype.set = $m.prototype.set;
    $m.prototype.setProperties = $m.prototype.I;
    $m.prototype.unset = $m.prototype.S;
    $m.prototype.changed = $m.prototype.s;
    $m.prototype.getRevision = $m.prototype.K;
    $m.prototype.on = $m.prototype.G;
    $m.prototype.once = $m.prototype.L;
    $m.prototype.un = $m.prototype.J;
    $m.prototype.unByKey = $m.prototype.M;
    tf.prototype.getFirstCoordinate = tf.prototype.Ab;
    tf.prototype.getLastCoordinate = tf.prototype.Bb;
    tf.prototype.getLayout = tf.prototype.Cb;
    tf.prototype.applyTransform = tf.prototype.va;
    tf.prototype.translate = tf.prototype.Ua;
    tf.prototype.getClosestPoint = tf.prototype.$a;
    tf.prototype.getExtent = tf.prototype.R;
    tf.prototype.transform = tf.prototype.transform;
    tf.prototype.get = tf.prototype.get;
    tf.prototype.getKeys = tf.prototype.O;
    tf.prototype.getProperties = tf.prototype.P;
    tf.prototype.set = tf.prototype.set;
    tf.prototype.setProperties = tf.prototype.I;
    tf.prototype.unset = tf.prototype.S;
    tf.prototype.changed = tf.prototype.s;
    tf.prototype.getRevision = tf.prototype.K;
    tf.prototype.on = tf.prototype.G;
    tf.prototype.once = tf.prototype.L;
    tf.prototype.un = tf.prototype.J;
    tf.prototype.unByKey = tf.prototype.M;
    N.prototype.getFirstCoordinate = N.prototype.Ab;
    N.prototype.getLastCoordinate = N.prototype.Bb;
    N.prototype.getLayout = N.prototype.Cb;
    N.prototype.applyTransform = N.prototype.va;
    N.prototype.translate = N.prototype.Ua;
    N.prototype.getClosestPoint = N.prototype.$a;
    N.prototype.getExtent = N.prototype.R;
    N.prototype.transform = N.prototype.transform;
    N.prototype.get = N.prototype.get;
    N.prototype.getKeys = N.prototype.O;
    N.prototype.getProperties = N.prototype.P;
    N.prototype.set = N.prototype.set;
    N.prototype.setProperties = N.prototype.I;
    N.prototype.unset = N.prototype.S;
    N.prototype.changed = N.prototype.s;
    N.prototype.getRevision = N.prototype.K;
    N.prototype.on = N.prototype.G;
    N.prototype.once = N.prototype.L;
    N.prototype.un = N.prototype.J;
    N.prototype.unByKey = N.prototype.M;
    O.prototype.getFirstCoordinate = O.prototype.Ab;
    O.prototype.getLastCoordinate = O.prototype.Bb;
    O.prototype.getLayout = O.prototype.Cb;
    O.prototype.applyTransform = O.prototype.va;
    O.prototype.translate = O.prototype.Ua;
    O.prototype.getClosestPoint = O.prototype.$a;
    O.prototype.getExtent = O.prototype.R;
    O.prototype.transform = O.prototype.transform;
    O.prototype.get = O.prototype.get;
    O.prototype.getKeys = O.prototype.O;
    O.prototype.getProperties = O.prototype.P;
    O.prototype.set = O.prototype.set;
    O.prototype.setProperties = O.prototype.I;
    O.prototype.unset = O.prototype.S;
    O.prototype.changed = O.prototype.s;
    O.prototype.getRevision = O.prototype.K;
    O.prototype.on = O.prototype.G;
    O.prototype.once = O.prototype.L;
    O.prototype.un = O.prototype.J;
    O.prototype.unByKey = O.prototype.M;
    kn.prototype.getFirstCoordinate = kn.prototype.Ab;
    kn.prototype.getLastCoordinate = kn.prototype.Bb;
    kn.prototype.getLayout = kn.prototype.Cb;
    kn.prototype.applyTransform = kn.prototype.va;
    kn.prototype.translate = kn.prototype.Ua;
    kn.prototype.getClosestPoint = kn.prototype.$a;
    kn.prototype.getExtent = kn.prototype.R;
    kn.prototype.transform = kn.prototype.transform;
    kn.prototype.get = kn.prototype.get;
    kn.prototype.getKeys = kn.prototype.O;
    kn.prototype.getProperties = kn.prototype.P;
    kn.prototype.set = kn.prototype.set;
    kn.prototype.setProperties = kn.prototype.I;
    kn.prototype.unset = kn.prototype.S;
    kn.prototype.changed = kn.prototype.s;
    kn.prototype.getRevision = kn.prototype.K;
    kn.prototype.on = kn.prototype.G;
    kn.prototype.once = kn.prototype.L;
    kn.prototype.un = kn.prototype.J;
    kn.prototype.unByKey = kn.prototype.M;
    P.prototype.getFirstCoordinate = P.prototype.Ab;
    P.prototype.getLastCoordinate = P.prototype.Bb;
    P.prototype.getLayout = P.prototype.Cb;
    P.prototype.applyTransform = P.prototype.va;
    P.prototype.translate = P.prototype.Ua;
    P.prototype.getClosestPoint = P.prototype.$a;
    P.prototype.getExtent = P.prototype.R;
    P.prototype.transform = P.prototype.transform;
    P.prototype.get = P.prototype.get;
    P.prototype.getKeys = P.prototype.O;
    P.prototype.getProperties = P.prototype.P;
    P.prototype.set = P.prototype.set;
    P.prototype.setProperties = P.prototype.I;
    P.prototype.unset = P.prototype.S;
    P.prototype.changed = P.prototype.s;
    P.prototype.getRevision = P.prototype.K;
    P.prototype.on = P.prototype.G;
    P.prototype.once = P.prototype.L;
    P.prototype.un = P.prototype.J;
    P.prototype.unByKey = P.prototype.M;
    D.prototype.getFirstCoordinate = D.prototype.Ab;
    D.prototype.getLastCoordinate = D.prototype.Bb;
    D.prototype.getLayout = D.prototype.Cb;
    D.prototype.applyTransform = D.prototype.va;
    D.prototype.translate = D.prototype.Ua;
    D.prototype.getClosestPoint = D.prototype.$a;
    D.prototype.getExtent = D.prototype.R;
    D.prototype.transform = D.prototype.transform;
    D.prototype.get = D.prototype.get;
    D.prototype.getKeys = D.prototype.O;
    D.prototype.getProperties = D.prototype.P;
    D.prototype.set = D.prototype.set;
    D.prototype.setProperties = D.prototype.I;
    D.prototype.unset = D.prototype.S;
    D.prototype.changed = D.prototype.s;
    D.prototype.getRevision = D.prototype.K;
    D.prototype.on = D.prototype.G;
    D.prototype.once = D.prototype.L;
    D.prototype.un = D.prototype.J;
    D.prototype.unByKey = D.prototype.M;
    F.prototype.getFirstCoordinate = F.prototype.Ab;
    F.prototype.getLastCoordinate = F.prototype.Bb;
    F.prototype.getLayout = F.prototype.Cb;
    F.prototype.applyTransform = F.prototype.va;
    F.prototype.translate = F.prototype.Ua;
    F.prototype.getClosestPoint = F.prototype.$a;
    F.prototype.getExtent = F.prototype.R;
    F.prototype.transform = F.prototype.transform;
    F.prototype.get = F.prototype.get;
    F.prototype.getKeys = F.prototype.O;
    F.prototype.getProperties = F.prototype.P;
    F.prototype.set = F.prototype.set;
    F.prototype.setProperties = F.prototype.I;
    F.prototype.unset = F.prototype.S;
    F.prototype.changed = F.prototype.s;
    F.prototype.getRevision = F.prototype.K;
    F.prototype.on = F.prototype.G;
    F.prototype.once = F.prototype.L;
    F.prototype.un = F.prototype.J;
    F.prototype.unByKey = F.prototype.M;
    ts.prototype.readFeatures = ts.prototype.qa;
    ks.prototype.readFeatures = ks.prototype.qa;
    ks.prototype.readFeatures = ks.prototype.qa;
    wh.prototype.get = wh.prototype.get;
    wh.prototype.getKeys = wh.prototype.O;
    wh.prototype.getProperties = wh.prototype.P;
    wh.prototype.set = wh.prototype.set;
    wh.prototype.setProperties = wh.prototype.I;
    wh.prototype.unset = wh.prototype.S;
    wh.prototype.changed = wh.prototype.s;
    wh.prototype.getRevision = wh.prototype.K;
    wh.prototype.on = wh.prototype.G;
    wh.prototype.once = wh.prototype.L;
    wh.prototype.un = wh.prototype.J;
    wh.prototype.unByKey = wh.prototype.M;
    Yh.prototype.getMap = Yh.prototype.g;
    Yh.prototype.setMap = Yh.prototype.setMap;
    Yh.prototype.setTarget = Yh.prototype.c;
    Yh.prototype.get = Yh.prototype.get;
    Yh.prototype.getKeys = Yh.prototype.O;
    Yh.prototype.getProperties = Yh.prototype.P;
    Yh.prototype.set = Yh.prototype.set;
    Yh.prototype.setProperties = Yh.prototype.I;
    Yh.prototype.unset = Yh.prototype.S;
    Yh.prototype.changed = Yh.prototype.s;
    Yh.prototype.getRevision = Yh.prototype.K;
    Yh.prototype.on = Yh.prototype.G;
    Yh.prototype.once = Yh.prototype.L;
    Yh.prototype.un = Yh.prototype.J;
    Yh.prototype.unByKey = Yh.prototype.M;
    ii.prototype.getMap = ii.prototype.g;
    ii.prototype.setMap = ii.prototype.setMap;
    ii.prototype.setTarget = ii.prototype.c;
    ii.prototype.get = ii.prototype.get;
    ii.prototype.getKeys = ii.prototype.O;
    ii.prototype.getProperties = ii.prototype.P;
    ii.prototype.set = ii.prototype.set;
    ii.prototype.setProperties = ii.prototype.I;
    ii.prototype.unset = ii.prototype.S;
    ii.prototype.changed = ii.prototype.s;
    ii.prototype.getRevision = ii.prototype.K;
    ii.prototype.on = ii.prototype.G;
    ii.prototype.once = ii.prototype.L;
    ii.prototype.un = ii.prototype.J;
    ii.prototype.unByKey = ii.prototype.M;
    ji.prototype.getMap = ji.prototype.g;
    ji.prototype.setTarget = ji.prototype.c;
    ji.prototype.get = ji.prototype.get;
    ji.prototype.getKeys = ji.prototype.O;
    ji.prototype.getProperties = ji.prototype.P;
    ji.prototype.set = ji.prototype.set;
    ji.prototype.setProperties = ji.prototype.I;
    ji.prototype.unset = ji.prototype.S;
    ji.prototype.changed = ji.prototype.s;
    ji.prototype.getRevision = ji.prototype.K;
    ji.prototype.on = ji.prototype.G;
    ji.prototype.once = ji.prototype.L;
    ji.prototype.un = ji.prototype.J;
    ji.prototype.unByKey = ji.prototype.M;
    dr.prototype.getMap = dr.prototype.g;
    dr.prototype.setTarget = dr.prototype.c;
    dr.prototype.get = dr.prototype.get;
    dr.prototype.getKeys = dr.prototype.O;
    dr.prototype.getProperties = dr.prototype.P;
    dr.prototype.set = dr.prototype.set;
    dr.prototype.setProperties = dr.prototype.I;
    dr.prototype.unset = dr.prototype.S;
    dr.prototype.changed = dr.prototype.s;
    dr.prototype.getRevision = dr.prototype.K;
    dr.prototype.on = dr.prototype.G;
    dr.prototype.once = dr.prototype.L;
    dr.prototype.un = dr.prototype.J;
    dr.prototype.unByKey = dr.prototype.M;
    ai.prototype.getMap = ai.prototype.g;
    ai.prototype.setMap = ai.prototype.setMap;
    ai.prototype.setTarget = ai.prototype.c;
    ai.prototype.get = ai.prototype.get;
    ai.prototype.getKeys = ai.prototype.O;
    ai.prototype.getProperties = ai.prototype.P;
    ai.prototype.set = ai.prototype.set;
    ai.prototype.setProperties = ai.prototype.I;
    ai.prototype.unset = ai.prototype.S;
    ai.prototype.changed = ai.prototype.s;
    ai.prototype.getRevision = ai.prototype.K;
    ai.prototype.on = ai.prototype.G;
    ai.prototype.once = ai.prototype.L;
    ai.prototype.un = ai.prototype.J;
    ai.prototype.unByKey = ai.prototype.M;
    ir.prototype.getMap = ir.prototype.g;
    ir.prototype.setMap = ir.prototype.setMap;
    ir.prototype.setTarget = ir.prototype.c;
    ir.prototype.get = ir.prototype.get;
    ir.prototype.getKeys = ir.prototype.O;
    ir.prototype.getProperties = ir.prototype.P;
    ir.prototype.set = ir.prototype.set;
    ir.prototype.setProperties = ir.prototype.I;
    ir.prototype.unset = ir.prototype.S;
    ir.prototype.changed = ir.prototype.s;
    ir.prototype.getRevision = ir.prototype.K;
    ir.prototype.on = ir.prototype.G;
    ir.prototype.once = ir.prototype.L;
    ir.prototype.un = ir.prototype.J;
    ir.prototype.unByKey = ir.prototype.M;
    ci.prototype.getMap = ci.prototype.g;
    ci.prototype.setMap = ci.prototype.setMap;
    ci.prototype.setTarget = ci.prototype.c;
    ci.prototype.get = ci.prototype.get;
    ci.prototype.getKeys = ci.prototype.O;
    ci.prototype.getProperties = ci.prototype.P;
    ci.prototype.set = ci.prototype.set;
    ci.prototype.setProperties = ci.prototype.I;
    ci.prototype.unset = ci.prototype.S;
    ci.prototype.changed = ci.prototype.s;
    ci.prototype.getRevision = ci.prototype.K;
    ci.prototype.on = ci.prototype.G;
    ci.prototype.once = ci.prototype.L;
    ci.prototype.un = ci.prototype.J;
    ci.prototype.unByKey = ci.prototype.M;
    xr.prototype.getMap = xr.prototype.g;
    xr.prototype.setTarget = xr.prototype.c;
    xr.prototype.get = xr.prototype.get;
    xr.prototype.getKeys = xr.prototype.O;
    xr.prototype.getProperties = xr.prototype.P;
    xr.prototype.set = xr.prototype.set;
    xr.prototype.setProperties = xr.prototype.I;
    xr.prototype.unset = xr.prototype.S;
    xr.prototype.changed = xr.prototype.s;
    xr.prototype.getRevision = xr.prototype.K;
    xr.prototype.on = xr.prototype.G;
    xr.prototype.once = xr.prototype.L;
    xr.prototype.un = xr.prototype.J;
    xr.prototype.unByKey = xr.prototype.M;
    Cr.prototype.getMap = Cr.prototype.g;
    Cr.prototype.setMap = Cr.prototype.setMap;
    Cr.prototype.setTarget = Cr.prototype.c;
    Cr.prototype.get = Cr.prototype.get;
    Cr.prototype.getKeys = Cr.prototype.O;
    Cr.prototype.getProperties = Cr.prototype.P;
    Cr.prototype.set = Cr.prototype.set;
    Cr.prototype.setProperties = Cr.prototype.I;
    Cr.prototype.unset = Cr.prototype.S;
    Cr.prototype.changed = Cr.prototype.s;
    Cr.prototype.getRevision = Cr.prototype.K;
    Cr.prototype.on = Cr.prototype.G;
    Cr.prototype.once = Cr.prototype.L;
    Cr.prototype.un = Cr.prototype.J;
    Cr.prototype.unByKey = Cr.prototype.M;
    return OPENLAYERS.ol;
}));
