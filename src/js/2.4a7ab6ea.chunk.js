(this['webpackJsonpbnc-wallet-exchange'] =
  this['webpackJsonpbnc-wallet-exchange'] || []).push([
  [2],
  {
    1013: function (t, e, r) {},
    1119: function (t, e, r) {
      'use strict';
      (function (t) {
        var n = r(326),
          c =
            'object' == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          a = c && 'object' == typeof t && t && !t.nodeType && t,
          o = a && a.exports === c ? n.a.Buffer : void 0,
          u = o ? o.allocUnsafe : void 0;
        e.a = function (t, e) {
          if (e) return t.slice();
          var r = t.length,
            n = u ? u(r) : new t.constructor(r);
          return t.copy(n), n;
        };
      }.call(this, r(539)(t)));
    },
    975: function (t, e, r) {
      'use strict';
      var n = r(1096);
      var c = function (t, e) {
          for (
            var r = -1, n = null == t ? 0 : t.length;
            ++r < n && !1 !== e(t[r], r, t);

          );
          return t;
        },
        a = r(981),
        o = (function () {
          try {
            var t = Object(a.a)(Object, 'defineProperty');
            return t({}, '', {}), t;
          } catch (e) {}
        })();
      var u = function (t, e, r) {
          '__proto__' == e && o
            ? o(t, e, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0,
              })
            : (t[e] = r);
        },
        b = r(1008),
        i = Object.prototype.hasOwnProperty;
      var j = function (t, e, r) {
        var n = t[e];
        (i.call(t, e) && Object(b.a)(n, r) && (void 0 !== r || e in t)) ||
          u(t, e, r);
      };
      var f = function (t, e, r, n) {
          var c = !r;
          r || (r = {});
          for (var a = -1, o = e.length; ++a < o; ) {
            var b = e[a],
              i = n ? n(r[b], t[b], b, r, t) : void 0;
            void 0 === i && (i = t[b]), c ? u(r, b, i) : j(r, b, i);
          }
          return r;
        },
        s = r(1072);
      var v = function (t, e) {
          return t && f(e, Object(s.a)(e), t);
        },
        y = r(1097),
        p = r(331),
        l = r(1048);
      var O = function (t) {
          var e = [];
          if (null != t) for (var r in Object(t)) e.push(r);
          return e;
        },
        w = Object.prototype.hasOwnProperty;
      var A = function (t) {
          if (!Object(p.a)(t)) return O(t);
          var e = Object(l.a)(t),
            r = [];
          for (var n in t)
            ('constructor' != n || (!e && w.call(t, n))) && r.push(n);
          return r;
        },
        h = r(1086);
      var d = function (t) {
        return Object(h.a)(t) ? Object(y.a)(t, !0) : A(t);
      };
      var g = function (t, e) {
          return t && f(e, d(e), t);
        },
        x = r(1119);
      var m = function (t, e) {
          var r = -1,
            n = t.length;
          for (e || (e = Array(n)); ++r < n; ) e[r] = t[r];
          return e;
        },
        I = r(1074);
      var S = function (t, e) {
          return f(t, Object(I.a)(t), e);
        },
        U = r(1085),
        F = r(1087),
        P = Object(F.a)(Object.getPrototypeOf, Object),
        B = r(1088),
        E = Object.getOwnPropertySymbols
          ? function (t) {
              for (var e = []; t; ) Object(U.a)(e, Object(I.a)(t)), (t = P(t));
              return e;
            }
          : B.a;
      var M = function (t, e) {
          return f(t, E(t), e);
        },
        k = r(1083),
        D = r(1084);
      var _ = function (t) {
          return Object(D.a)(t, d, E);
        },
        C = r(1040),
        J = Object.prototype.hasOwnProperty;
      var L = function (t) {
          var e = t.length,
            r = new t.constructor(e);
          return (
            e &&
              'string' == typeof t[0] &&
              J.call(t, 'index') &&
              ((r.index = t.index), (r.input = t.input)),
            r
          );
        },
        N = r(1082);
      var R = function (t) {
        var e = new t.constructor(t.byteLength);
        return new N.a(e).set(new N.a(t)), e;
      };
      var T = function (t, e) {
          var r = e ? R(t.buffer) : t.buffer;
          return new t.constructor(r, t.byteOffset, t.byteLength);
        },
        V = /\w*$/;
      var G = function (t) {
          var e = new t.constructor(t.source, V.exec(t));
          return (e.lastIndex = t.lastIndex), e;
        },
        W = r(159),
        $ = W.a ? W.a.prototype : void 0,
        q = $ ? $.valueOf : void 0;
      var z = function (t) {
        return q ? Object(q.call(t)) : {};
      };
      var H = function (t, e) {
        var r = e ? R(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length);
      };
      var K = function (t, e, r) {
          var n = t.constructor;
          switch (e) {
            case '[object ArrayBuffer]':
              return R(t);
            case '[object Boolean]':
            case '[object Date]':
              return new n(+t);
            case '[object DataView]':
              return T(t, r);
            case '[object Float32Array]':
            case '[object Float64Array]':
            case '[object Int8Array]':
            case '[object Int16Array]':
            case '[object Int32Array]':
            case '[object Uint8Array]':
            case '[object Uint8ClampedArray]':
            case '[object Uint16Array]':
            case '[object Uint32Array]':
              return H(t, r);
            case '[object Map]':
              return new n();
            case '[object Number]':
            case '[object String]':
              return new n(t);
            case '[object RegExp]':
              return G(t);
            case '[object Set]':
              return new n();
            case '[object Symbol]':
              return z(t);
          }
        },
        Q = Object.create,
        X = (function () {
          function t() {}
          return function (e) {
            if (!Object(p.a)(e)) return {};
            if (Q) return Q(e);
            t.prototype = e;
            var r = new t();
            return (t.prototype = void 0), r;
          };
        })();
      var Y = function (t) {
          return 'function' != typeof t.constructor || Object(l.a)(t)
            ? {}
            : X(P(t));
        },
        Z = r(1022),
        tt = r(1045),
        et = r(1021);
      var rt = function (t) {
          return Object(et.a)(t) && '[object Map]' == Object(C.a)(t);
        },
        nt = r(1047),
        ct = r(1046),
        at = ct.a && ct.a.isMap,
        ot = at ? Object(nt.a)(at) : rt;
      var ut = function (t) {
          return Object(et.a)(t) && '[object Set]' == Object(C.a)(t);
        },
        bt = ct.a && ct.a.isSet,
        it = bt ? Object(nt.a)(bt) : ut,
        jt = {};
      (jt['[object Arguments]'] =
        jt['[object Array]'] =
        jt['[object ArrayBuffer]'] =
        jt['[object DataView]'] =
        jt['[object Boolean]'] =
        jt['[object Date]'] =
        jt['[object Float32Array]'] =
        jt['[object Float64Array]'] =
        jt['[object Int8Array]'] =
        jt['[object Int16Array]'] =
        jt['[object Int32Array]'] =
        jt['[object Map]'] =
        jt['[object Number]'] =
        jt['[object Object]'] =
        jt['[object RegExp]'] =
        jt['[object Set]'] =
        jt['[object String]'] =
        jt['[object Symbol]'] =
        jt['[object Uint8Array]'] =
        jt['[object Uint8ClampedArray]'] =
        jt['[object Uint16Array]'] =
        jt['[object Uint32Array]'] =
          !0),
        (jt['[object Error]'] =
          jt['[object Function]'] =
          jt['[object WeakMap]'] =
            !1);
      var ft = function t(e, r, a, o, u, b) {
        var i,
          f = 1 & r,
          y = 2 & r,
          l = 4 & r;
        if ((a && (i = u ? a(e, o, u, b) : a(e)), void 0 !== i)) return i;
        if (!Object(p.a)(e)) return e;
        var O = Object(Z.a)(e);
        if (O) {
          if (((i = L(e)), !f)) return m(e, i);
        } else {
          var w = Object(C.a)(e),
            A = '[object Function]' == w || '[object GeneratorFunction]' == w;
          if (Object(tt.a)(e)) return Object(x.a)(e, f);
          if (
            '[object Object]' == w ||
            '[object Arguments]' == w ||
            (A && !u)
          ) {
            if (((i = y || A ? {} : Y(e)), !f))
              return y ? M(e, g(i, e)) : S(e, v(i, e));
          } else {
            if (!jt[w]) return u ? e : {};
            i = K(e, w, f);
          }
        }
        b || (b = new n.a());
        var h = b.get(e);
        if (h) return h;
        b.set(e, i),
          it(e)
            ? e.forEach(function (n) {
                i.add(t(n, r, a, n, e, b));
              })
            : ot(e) &&
              e.forEach(function (n, c) {
                i.set(c, t(n, r, a, c, e, b));
              });
        var d = l ? (y ? _ : k.a) : y ? keysIn : s.a,
          I = O ? void 0 : d(e);
        return (
          c(I || e, function (n, c) {
            I && (n = e[(c = n)]), j(i, c, t(n, r, a, c, e, b));
          }),
          i
        );
      };
      e.a = function (t) {
        return ft(t, 5);
      };
    },
  },
]);
//# sourceMappingURL=/src/js/2.4a7ab6ea.chunk.js.map
