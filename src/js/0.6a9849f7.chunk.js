(this['webpackJsonpbnc-wallet-exchange'] =
  this['webpackJsonpbnc-wallet-exchange'] || []).push([
  [0, 27],
  {
    1e3: function (t, e, r) {
      'use strict';
      var n = r(1009);
      function a(t, e) {
        if ('function' != typeof t || (null != e && 'function' != typeof e))
          throw new TypeError('Expected a function');
        var r = function r() {
          var n = arguments,
            a = e ? e.apply(this, n) : n[0],
            o = r.cache;
          if (o.has(a)) return o.get(a);
          var c = t.apply(this, n);
          return (r.cache = o.set(a, c) || o), c;
        };
        return (r.cache = new (a.Cache || n.a)()), r;
      }
      (a.Cache = n.a), (e.a = a);
    },
    1004: function (t, e, r) {
      'use strict';
      var n = function () {
          (this.__data__ = []), (this.size = 0);
        },
        a = r(1008);
      var o = function (t, e) {
          for (var r = t.length; r--; ) if (Object(a.a)(t[r][0], e)) return r;
          return -1;
        },
        c = Array.prototype.splice;
      var i = function (t) {
        var e = this.__data__,
          r = o(e, t);
        return (
          !(r < 0) &&
          (r == e.length - 1 ? e.pop() : c.call(e, r, 1), --this.size, !0)
        );
      };
      var u = function (t) {
        var e = this.__data__,
          r = o(e, t);
        return r < 0 ? void 0 : e[r][1];
      };
      var s = function (t) {
        return o(this.__data__, t) > -1;
      };
      var f = function (t, e) {
        var r = this.__data__,
          n = o(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
      };
      function p(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (p.prototype.clear = n),
        (p.prototype.delete = i),
        (p.prototype.get = u),
        (p.prototype.has = s),
        (p.prototype.set = f);
      e.a = p;
    },
    1007: function (t, e, r) {
      'use strict';
      var n = r(981),
        a = r(326),
        o = Object(n.a)(a.a, 'Map');
      e.a = o;
    },
    1008: function (t, e, r) {
      'use strict';
      e.a = function (t, e) {
        return t === e || (t !== t && e !== e);
      };
    },
    1009: function (t, e, r) {
      'use strict';
      var n = r(981),
        a = Object(n.a)(Object, 'create');
      var o = function () {
        (this.__data__ = a ? a(null) : {}), (this.size = 0);
      };
      var c = function (t) {
          var e = this.has(t) && delete this.__data__[t];
          return (this.size -= e ? 1 : 0), e;
        },
        i = Object.prototype.hasOwnProperty;
      var u = function (t) {
          var e = this.__data__;
          if (a) {
            var r = e[t];
            return '__lodash_hash_undefined__' === r ? void 0 : r;
          }
          return i.call(e, t) ? e[t] : void 0;
        },
        s = Object.prototype.hasOwnProperty;
      var f = function (t) {
        var e = this.__data__;
        return a ? void 0 !== e[t] : s.call(e, t);
      };
      var p = function (t, e) {
        var r = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (r[t] = a && void 0 === e ? '__lodash_hash_undefined__' : e),
          this
        );
      };
      function b(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (b.prototype.clear = o),
        (b.prototype.delete = c),
        (b.prototype.get = u),
        (b.prototype.has = f),
        (b.prototype.set = p);
      var v = b,
        l = r(1004),
        h = r(1007);
      var _ = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new v(),
            map: new (h.a || l.a)(),
            string: new v(),
          });
      };
      var j = function (t) {
        var e = typeof t;
        return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
          ? '__proto__' !== t
          : null === t;
      };
      var y = function (t, e) {
        var r = t.__data__;
        return j(e) ? r['string' == typeof e ? 'string' : 'hash'] : r.map;
      };
      var O = function (t) {
        var e = y(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
      var d = function (t) {
        return y(this, t).get(t);
      };
      var g = function (t) {
        return y(this, t).has(t);
      };
      var w = function (t, e) {
        var r = y(this, t),
          n = r.size;
        return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
      };
      function A(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (A.prototype.clear = _),
        (A.prototype.delete = O),
        (A.prototype.get = d),
        (A.prototype.has = g),
        (A.prototype.set = w);
      e.a = A;
    },
    1010: function (t, e, r) {
      'use strict';
      var n = Function.prototype.toString;
      e.a = function (t) {
        if (null != t) {
          try {
            return n.call(t);
          } catch (e) {}
          try {
            return t + '';
          } catch (e) {}
        }
        return '';
      };
    },
    1021: function (t, e, r) {
      'use strict';
      e.a = function (t) {
        return null != t && 'object' == typeof t;
      };
    },
    1022: function (t, e, r) {
      'use strict';
      var n = Array.isArray;
      e.a = n;
    },
    1040: function (t, e, r) {
      'use strict';
      var n = r(981),
        a = r(326),
        o = Object(n.a)(a.a, 'DataView'),
        c = r(1007),
        i = Object(n.a)(a.a, 'Promise'),
        u = Object(n.a)(a.a, 'Set'),
        s = Object(n.a)(a.a, 'WeakMap'),
        f = r(337),
        p = r(1010),
        b = Object(p.a)(o),
        v = Object(p.a)(c.a),
        l = Object(p.a)(i),
        h = Object(p.a)(u),
        _ = Object(p.a)(s),
        j = f.a;
      ((o && '[object DataView]' != j(new o(new ArrayBuffer(1)))) ||
        (c.a && '[object Map]' != j(new c.a())) ||
        (i && '[object Promise]' != j(i.resolve())) ||
        (u && '[object Set]' != j(new u())) ||
        (s && '[object WeakMap]' != j(new s()))) &&
        (j = function (t) {
          var e = Object(f.a)(t),
            r = '[object Object]' == e ? t.constructor : void 0,
            n = r ? Object(p.a)(r) : '';
          if (n)
            switch (n) {
              case b:
                return '[object DataView]';
              case v:
                return '[object Map]';
              case l:
                return '[object Promise]';
              case h:
                return '[object Set]';
              case _:
                return '[object WeakMap]';
            }
          return e;
        });
      e.a = j;
    },
    1045: function (t, e, r) {
      'use strict';
      (function (t) {
        var n = r(326),
          a = r(1118),
          o =
            'object' == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          c = o && 'object' == typeof t && t && !t.nodeType && t,
          i = c && c.exports === o ? n.a.Buffer : void 0,
          u = (i ? i.isBuffer : void 0) || a.a;
        e.a = u;
      }.call(this, r(539)(t)));
    },
    1046: function (t, e, r) {
      'use strict';
      (function (t) {
        var n = r(476),
          a =
            'object' == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          o = a && 'object' == typeof t && t && !t.nodeType && t,
          c = o && o.exports === a && n.a.process,
          i = (function () {
            try {
              var t = o && o.require && o.require('util').types;
              return t || (c && c.binding && c.binding('util'));
            } catch (e) {}
          })();
        e.a = i;
      }.call(this, r(539)(t)));
    },
    1047: function (t, e, r) {
      'use strict';
      e.a = function (t) {
        return function (e) {
          return t(e);
        };
      };
    },
    1048: function (t, e, r) {
      'use strict';
      var n = Object.prototype;
      e.a = function (t) {
        var e = t && t.constructor;
        return t === (('function' == typeof e && e.prototype) || n);
      };
    },
    1072: function (t, e, r) {
      'use strict';
      var n = r(1097),
        a = r(1048),
        o = r(1087),
        c = Object(o.a)(Object.keys, Object),
        i = Object.prototype.hasOwnProperty;
      var u = function (t) {
          if (!Object(a.a)(t)) return c(t);
          var e = [];
          for (var r in Object(t))
            i.call(t, r) && 'constructor' != r && e.push(r);
          return e;
        },
        s = r(1086);
      e.a = function (t) {
        return Object(s.a)(t) ? Object(n.a)(t) : u(t);
      };
    },
    1074: function (t, e, r) {
      'use strict';
      var n = function (t, e) {
          for (
            var r = -1, n = null == t ? 0 : t.length, a = 0, o = [];
            ++r < n;

          ) {
            var c = t[r];
            e(c, r, t) && (o[a++] = c);
          }
          return o;
        },
        a = r(1088),
        o = Object.prototype.propertyIsEnumerable,
        c = Object.getOwnPropertySymbols,
        i = c
          ? function (t) {
              return null == t
                ? []
                : ((t = Object(t)),
                  n(c(t), function (e) {
                    return o.call(t, e);
                  }));
            }
          : a.a;
      e.a = i;
    },
    1081: function (t, e, r) {
      'use strict';
      e.a = function (t) {
        return (
          'number' == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        );
      };
    },
    1082: function (t, e, r) {
      'use strict';
      var n = r(326).a.Uint8Array;
      e.a = n;
    },
    1083: function (t, e, r) {
      'use strict';
      var n = r(1084),
        a = r(1074),
        o = r(1072);
      e.a = function (t) {
        return Object(n.a)(t, o.a, a.a);
      };
    },
    1084: function (t, e, r) {
      'use strict';
      var n = r(1085),
        a = r(1022);
      e.a = function (t, e, r) {
        var o = e(t);
        return Object(a.a)(t) ? o : Object(n.a)(o, r(t));
      };
    },
    1085: function (t, e, r) {
      'use strict';
      e.a = function (t, e) {
        for (var r = -1, n = e.length, a = t.length; ++r < n; ) t[a + r] = e[r];
        return t;
      };
    },
    1086: function (t, e, r) {
      'use strict';
      var n = r(327),
        a = r(1081);
      e.a = function (t) {
        return null != t && Object(a.a)(t.length) && !Object(n.a)(t);
      };
    },
    1087: function (t, e, r) {
      'use strict';
      e.a = function (t, e) {
        return function (r) {
          return t(e(r));
        };
      };
    },
    1088: function (t, e, r) {
      'use strict';
      e.a = function () {
        return [];
      };
    },
    1096: function (t, e, r) {
      'use strict';
      var n = r(1004);
      var a = function () {
        (this.__data__ = new n.a()), (this.size = 0);
      };
      var o = function (t) {
        var e = this.__data__,
          r = e.delete(t);
        return (this.size = e.size), r;
      };
      var c = function (t) {
        return this.__data__.get(t);
      };
      var i = function (t) {
          return this.__data__.has(t);
        },
        u = r(1007),
        s = r(1009);
      var f = function (t, e) {
        var r = this.__data__;
        if (r instanceof n.a) {
          var a = r.__data__;
          if (!u.a || a.length < 199)
            return a.push([t, e]), (this.size = ++r.size), this;
          r = this.__data__ = new s.a(a);
        }
        return r.set(t, e), (this.size = r.size), this;
      };
      function p(t) {
        var e = (this.__data__ = new n.a(t));
        this.size = e.size;
      }
      (p.prototype.clear = a),
        (p.prototype.delete = o),
        (p.prototype.get = c),
        (p.prototype.has = i),
        (p.prototype.set = f);
      e.a = p;
    },
    1097: function (t, e, r) {
      'use strict';
      var n = function (t, e) {
          for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
          return n;
        },
        a = r(337),
        o = r(1021);
      var c = function (t) {
          return Object(o.a)(t) && '[object Arguments]' == Object(a.a)(t);
        },
        i = Object.prototype,
        u = i.hasOwnProperty,
        s = i.propertyIsEnumerable,
        f = c(
          (function () {
            return arguments;
          })()
        )
          ? c
          : function (t) {
              return (
                Object(o.a)(t) && u.call(t, 'callee') && !s.call(t, 'callee')
              );
            },
        p = r(1022),
        b = r(1045),
        v = /^(?:0|[1-9]\d*)$/;
      var l = function (t, e) {
          var r = typeof t;
          return (
            !!(e = null == e ? 9007199254740991 : e) &&
            ('number' == r || ('symbol' != r && v.test(t))) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
          );
        },
        h = r(1099),
        _ = Object.prototype.hasOwnProperty;
      e.a = function (t, e) {
        var r = Object(p.a)(t),
          a = !r && f(t),
          o = !r && !a && Object(b.a)(t),
          c = !r && !a && !o && Object(h.a)(t),
          i = r || a || o || c,
          u = i ? n(t.length, String) : [],
          s = u.length;
        for (var v in t)
          (!e && !_.call(t, v)) ||
            (i &&
              ('length' == v ||
                (o && ('offset' == v || 'parent' == v)) ||
                (c &&
                  ('buffer' == v || 'byteLength' == v || 'byteOffset' == v)) ||
                l(v, s))) ||
            u.push(v);
        return u;
      };
    },
    1099: function (t, e, r) {
      'use strict';
      var n = r(337),
        a = r(1081),
        o = r(1021),
        c = {};
      (c['[object Float32Array]'] =
        c['[object Float64Array]'] =
        c['[object Int8Array]'] =
        c['[object Int16Array]'] =
        c['[object Int32Array]'] =
        c['[object Uint8Array]'] =
        c['[object Uint8ClampedArray]'] =
        c['[object Uint16Array]'] =
        c['[object Uint32Array]'] =
          !0),
        (c['[object Arguments]'] =
          c['[object Array]'] =
          c['[object ArrayBuffer]'] =
          c['[object Boolean]'] =
          c['[object DataView]'] =
          c['[object Date]'] =
          c['[object Error]'] =
          c['[object Function]'] =
          c['[object Map]'] =
          c['[object Number]'] =
          c['[object Object]'] =
          c['[object RegExp]'] =
          c['[object Set]'] =
          c['[object String]'] =
          c['[object WeakMap]'] =
            !1);
      var i = function (t) {
          return Object(o.a)(t) && Object(a.a)(t.length) && !!c[Object(n.a)(t)];
        },
        u = r(1047),
        s = r(1046),
        f = s.a && s.a.isTypedArray,
        p = f ? Object(u.a)(f) : i;
      e.a = p;
    },
    1118: function (t, e, r) {
      'use strict';
      e.a = function () {
        return !1;
      };
    },
    970: function (t, e, r) {
      'use strict';
      var n = r(1096),
        a = r(1009);
      var o = function (t) {
        return this.__data__.set(t, '__lodash_hash_undefined__'), this;
      };
      var c = function (t) {
        return this.__data__.has(t);
      };
      function i(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.__data__ = new a.a(); ++e < r; ) this.add(t[e]);
      }
      (i.prototype.add = i.prototype.push = o), (i.prototype.has = c);
      var u = i;
      var s = function (t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
          if (e(t[r], r, t)) return !0;
        return !1;
      };
      var f = function (t, e) {
        return t.has(e);
      };
      var p = function (t, e, r, n, a, o) {
          var c = 1 & r,
            i = t.length,
            p = e.length;
          if (i != p && !(c && p > i)) return !1;
          var b = o.get(t);
          if (b && o.get(e)) return b == e;
          var v = -1,
            l = !0,
            h = 2 & r ? new u() : void 0;
          for (o.set(t, e), o.set(e, t); ++v < i; ) {
            var _ = t[v],
              j = e[v];
            if (n) var y = c ? n(j, _, v, e, t, o) : n(_, j, v, t, e, o);
            if (void 0 !== y) {
              if (y) continue;
              l = !1;
              break;
            }
            if (h) {
              if (
                !s(e, function (t, e) {
                  if (!f(h, e) && (_ === t || a(_, t, r, n, o)))
                    return h.push(e);
                })
              ) {
                l = !1;
                break;
              }
            } else if (_ !== j && !a(_, j, r, n, o)) {
              l = !1;
              break;
            }
          }
          return o.delete(t), o.delete(e), l;
        },
        b = r(159),
        v = r(1082),
        l = r(1008);
      var h = function (t) {
        var e = -1,
          r = Array(t.size);
        return (
          t.forEach(function (t, n) {
            r[++e] = [n, t];
          }),
          r
        );
      };
      var _ = function (t) {
          var e = -1,
            r = Array(t.size);
          return (
            t.forEach(function (t) {
              r[++e] = t;
            }),
            r
          );
        },
        j = b.a ? b.a.prototype : void 0,
        y = j ? j.valueOf : void 0;
      var O = function (t, e, r, n, a, o, c) {
          switch (r) {
            case '[object DataView]':
              if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                return !1;
              (t = t.buffer), (e = e.buffer);
            case '[object ArrayBuffer]':
              return !(
                t.byteLength != e.byteLength || !o(new v.a(t), new v.a(e))
              );
            case '[object Boolean]':
            case '[object Date]':
            case '[object Number]':
              return Object(l.a)(+t, +e);
            case '[object Error]':
              return t.name == e.name && t.message == e.message;
            case '[object RegExp]':
            case '[object String]':
              return t == e + '';
            case '[object Map]':
              var i = h;
            case '[object Set]':
              var u = 1 & n;
              if ((i || (i = _), t.size != e.size && !u)) return !1;
              var s = c.get(t);
              if (s) return s == e;
              (n |= 2), c.set(t, e);
              var f = p(i(t), i(e), n, a, o, c);
              return c.delete(t), f;
            case '[object Symbol]':
              if (y) return y.call(t) == y.call(e);
          }
          return !1;
        },
        d = r(1083),
        g = Object.prototype.hasOwnProperty;
      var w = function (t, e, r, n, a, o) {
          var c = 1 & r,
            i = Object(d.a)(t),
            u = i.length;
          if (u != Object(d.a)(e).length && !c) return !1;
          for (var s = u; s--; ) {
            var f = i[s];
            if (!(c ? f in e : g.call(e, f))) return !1;
          }
          var p = o.get(t);
          if (p && o.get(e)) return p == e;
          var b = !0;
          o.set(t, e), o.set(e, t);
          for (var v = c; ++s < u; ) {
            var l = t[(f = i[s])],
              h = e[f];
            if (n) var _ = c ? n(h, l, f, e, t, o) : n(l, h, f, t, e, o);
            if (!(void 0 === _ ? l === h || a(l, h, r, n, o) : _)) {
              b = !1;
              break;
            }
            v || (v = 'constructor' == f);
          }
          if (b && !v) {
            var j = t.constructor,
              y = e.constructor;
            j == y ||
              !('constructor' in t) ||
              !('constructor' in e) ||
              ('function' == typeof j &&
                j instanceof j &&
                'function' == typeof y &&
                y instanceof y) ||
              (b = !1);
          }
          return o.delete(t), o.delete(e), b;
        },
        A = r(1040),
        m = r(1022),
        z = r(1045),
        x = r(1099),
        P = '[object Object]',
        k = Object.prototype.hasOwnProperty;
      var S = function (t, e, r, a, o, c) {
          var i = Object(m.a)(t),
            u = Object(m.a)(e),
            s = i ? '[object Array]' : Object(A.a)(t),
            f = u ? '[object Array]' : Object(A.a)(e),
            b = (s = '[object Arguments]' == s ? P : s) == P,
            v = (f = '[object Arguments]' == f ? P : f) == P,
            l = s == f;
          if (l && Object(z.a)(t)) {
            if (!Object(z.a)(e)) return !1;
            (i = !0), (b = !1);
          }
          if (l && !b)
            return (
              c || (c = new n.a()),
              i || Object(x.a)(t) ? p(t, e, r, a, o, c) : O(t, e, s, r, a, o, c)
            );
          if (!(1 & r)) {
            var h = b && k.call(t, '__wrapped__'),
              _ = v && k.call(e, '__wrapped__');
            if (h || _) {
              var j = h ? t.value() : t,
                y = _ ? e.value() : e;
              return c || (c = new n.a()), o(j, y, r, a, c);
            }
          }
          return !!l && (c || (c = new n.a()), w(t, e, r, a, o, c));
        },
        E = r(1021);
      var M = function t(e, r, n, a, o) {
        return (
          e === r ||
          (null == e || null == r || (!Object(E.a)(e) && !Object(E.a)(r))
            ? e !== e && r !== r
            : S(e, r, n, a, t, o))
        );
      };
      e.a = function (t, e) {
        return M(t, e);
      };
    },
    981: function (t, e, r) {
      'use strict';
      var n = r(327),
        a = r(326).a['__core-js_shared__'],
        o = (function () {
          var t = /[^.]+$/.exec((a && a.keys && a.keys.IE_PROTO) || '');
          return t ? 'Symbol(src)_1.' + t : '';
        })();
      var c = function (t) {
          return !!o && o in t;
        },
        i = r(331),
        u = r(1010),
        s = /^\[object .+?Constructor\]$/,
        f = Function.prototype,
        p = Object.prototype,
        b = f.toString,
        v = p.hasOwnProperty,
        l = RegExp(
          '^' +
            b
              .call(v)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        );
      var h = function (t) {
        return (
          !(!Object(i.a)(t) || c(t)) &&
          (Object(n.a)(t) ? l : s).test(Object(u.a)(t))
        );
      };
      var _ = function (t, e) {
        return null == t ? void 0 : t[e];
      };
      e.a = function (t, e) {
        var r = _(t, e);
        return h(r) ? r : void 0;
      };
    },
  },
]);
//# sourceMappingURL=/src/js/0.6a9849f7.chunk.js.map
