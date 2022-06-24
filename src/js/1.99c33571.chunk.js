(this['webpackJsonpbnc-wallet-exchange'] =
  this['webpackJsonpbnc-wallet-exchange'] || []).push([
  [1],
  {
    1025: function (e, t, n) {
      'use strict';
      function r(e) {
        return (r =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          'function' === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              v(e, t, n[t]);
            });
        }
        return e;
      }
      function c(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), e;
      }
      function l(e, t) {
        return !t || ('object' !== r(t) && 'function' !== typeof t) ? h(e) : t;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && p(e, t);
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var g = n(0),
        b = n(4),
        m = n(540),
        y = n(339);
      function O(e) {
        for (var t = '', n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          r < 128
            ? (t += String.fromCharCode(r))
            : r < 2048
            ? ((t += String.fromCharCode(192 | (r >> 6))),
              (t += String.fromCharCode(128 | (63 & r))))
            : r < 55296 || r >= 57344
            ? ((t += String.fromCharCode(224 | (r >> 12))),
              (t += String.fromCharCode(128 | ((r >> 6) & 63))),
              (t += String.fromCharCode(128 | (63 & r))))
            : (n++,
              (r = 65536 + (((1023 & r) << 10) | (1023 & e.charCodeAt(n)))),
              (t += String.fromCharCode(240 | (r >> 18))),
              (t += String.fromCharCode(128 | ((r >> 12) & 63))),
              (t += String.fromCharCode(128 | ((r >> 6) & 63))),
              (t += String.fromCharCode(128 | (63 & r))));
        }
        return t;
      }
      var w = {
          size: 128,
          level: 'L',
          bgColor: '#FFFFFF',
          fgColor: '#000000',
          includeMargin: !1,
        },
        _ = {
          value: b.string.isRequired,
          size: b.number,
          level: b.oneOf(['L', 'M', 'Q', 'H']),
          bgColor: b.string,
          fgColor: b.string,
          includeMargin: b.bool,
        };
      function E(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = [];
        return (
          e.forEach(function (e, r) {
            var o = null;
            e.forEach(function (i, c) {
              if (!i && null !== o)
                return (
                  n.push(
                    'M'
                      .concat(o + t, ' ')
                      .concat(r + t, 'h')
                      .concat(c - o, 'v1H')
                      .concat(o + t, 'z')
                  ),
                  void (o = null)
                );
              if (c !== e.length - 1) i && null === o && (o = c);
              else {
                if (!i) return;
                null === o
                  ? n.push(
                      'M'
                        .concat(c + t, ',')
                        .concat(r + t, ' h1v1H')
                        .concat(c + t, 'z')
                    )
                  : n.push(
                      'M'
                        .concat(o + t, ',')
                        .concat(r + t, ' h')
                        .concat(c + 1 - o, 'v1H')
                        .concat(o + t, 'z')
                    );
              }
            });
          }),
          n.join('')
        );
      }
      var D = (function () {
          try {
            new Path2D().addPath(new Path2D());
          } catch (e) {
            return !1;
          }
          return !0;
        })(),
        j = (function (e) {
          function t() {
            var e, n;
            a(this, t);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              v(
                h(h((n = l(this, (e = d(t)).call.apply(e, [this].concat(o)))))),
                '_canvas',
                void 0
              ),
              n
            );
          }
          return (
            f(t, e),
            u(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.update();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.update();
                },
              },
              {
                key: 'update',
                value: function () {
                  var e = this.props,
                    t = e.value,
                    n = e.size,
                    r = e.level,
                    o = e.bgColor,
                    i = e.fgColor,
                    c = e.includeMargin,
                    a = new m(-1, y[r]);
                  if ((a.addData(O(t)), a.make(), null != this._canvas)) {
                    var s = this._canvas,
                      u = s.getContext('2d');
                    if (!u) return;
                    var l = a.modules;
                    if (null === l) return;
                    var d = c ? 4 : 0,
                      f = l.length + 2 * d,
                      p = window.devicePixelRatio || 1;
                    s.height = s.width = n * p;
                    var h = (n / f) * p;
                    u.scale(h, h),
                      (u.fillStyle = o),
                      u.fillRect(0, 0, f, f),
                      (u.fillStyle = i),
                      D
                        ? u.fill(new Path2D(E(l, d)))
                        : l.forEach(function (e, t) {
                            e.forEach(function (e, n) {
                              e && u.fillRect(n + d, t + d, 1, 1);
                            });
                          });
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = (t.value, t.size),
                    r = (t.level, t.bgColor, t.fgColor, t.style),
                    a =
                      (t.includeMargin,
                      c(t, [
                        'value',
                        'size',
                        'level',
                        'bgColor',
                        'fgColor',
                        'style',
                        'includeMargin',
                      ])),
                    s = i({ height: n, width: n }, r);
                  return g.createElement(
                    'canvas',
                    o(
                      {
                        style: s,
                        height: n,
                        width: n,
                        ref: function (t) {
                          return (e._canvas = t);
                        },
                      },
                      a
                    )
                  );
                },
              },
            ]),
            t
          );
        })(g.PureComponent);
      v(j, 'defaultProps', w), v(j, 'propTypes', _);
      var T = (function (e) {
        function t() {
          return a(this, t), l(this, d(t).apply(this, arguments));
        }
        return (
          f(t, e),
          u(t, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.value,
                  n = e.size,
                  r = e.level,
                  i = e.bgColor,
                  a = e.fgColor,
                  s = e.includeMargin,
                  u = c(e, [
                    'value',
                    'size',
                    'level',
                    'bgColor',
                    'fgColor',
                    'includeMargin',
                  ]),
                  l = new m(-1, y[r]);
                l.addData(O(t)), l.make();
                var d = l.modules;
                if (null === d) return null;
                var f = s ? 4 : 0,
                  p = E(d, f),
                  h = d.length + 2 * f;
                return g.createElement(
                  'svg',
                  o(
                    {
                      shapeRendering: 'crispEdges',
                      height: n,
                      width: n,
                      viewBox: '0 0 '.concat(h, ' ').concat(h),
                    },
                    u
                  ),
                  g.createElement('path', {
                    fill: i,
                    d: 'M0,0 h'.concat(h, 'v').concat(h, 'H0z'),
                  }),
                  g.createElement('path', { fill: a, d: p })
                );
              },
            },
          ]),
          t
        );
      })(g.PureComponent);
      v(T, 'defaultProps', w), v(T, 'propTypes', _);
      var C = function (e) {
        var t = e.renderAs,
          n = c(e, ['renderAs']),
          r = 'svg' === t ? T : j;
        return g.createElement(r, n);
      };
      (C.defaultProps = i({ renderAs: 'canvas' }, w)), (e.exports = C);
    },
    1043: function (e, t, n) {
      (function (r, o) {
        var i = n(1101),
          c = n(1076),
          a = n(1102),
          s = c.join,
          u = c.dirname,
          l =
            (i.accessSync &&
              function (e) {
                try {
                  i.accessSync(e);
                } catch (t) {
                  return !1;
                }
                return !0;
              }) ||
            i.existsSync ||
            c.existsSync,
          d = {
            arrow:
              Object({
                NODE_ENV: 'production',
                PUBLIC_URL: 'https://dex-bin.bnbstatic.com/5134e38f',
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                REACT_APP_GIT_SHA: '5134e38f',
                REACT_APP_MINITOKEN_ENABLED: 'true',
                REACT_APP_STATIC_HOST: 'https://dex-bin.bnbstatic.com',
                REACT_APP_NETWORK_ENV: 'mainnet',
                REACT_APP_EXPLORER: 'https://explorer.binance.org',
              }).NODE_BINDINGS_ARROW || ' \u2192 ',
            compiled:
              Object({
                NODE_ENV: 'production',
                PUBLIC_URL: 'https://dex-bin.bnbstatic.com/5134e38f',
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                REACT_APP_GIT_SHA: '5134e38f',
                REACT_APP_MINITOKEN_ENABLED: 'true',
                REACT_APP_STATIC_HOST: 'https://dex-bin.bnbstatic.com',
                REACT_APP_NETWORK_ENV: 'mainnet',
                REACT_APP_EXPLORER: 'https://explorer.binance.org',
              }).NODE_BINDINGS_COMPILED_DIR || 'compiled',
            platform: r.platform,
            arch: r.arch,
            nodePreGyp:
              'node-v' + r.versions.modules + '-' + r.platform + '-' + r.arch,
            version: r.versions.node,
            bindings: 'bindings.node',
            try: [
              ['module_root', 'build', 'bindings'],
              ['module_root', 'build', 'Debug', 'bindings'],
              ['module_root', 'build', 'Release', 'bindings'],
              ['module_root', 'out', 'Debug', 'bindings'],
              ['module_root', 'Debug', 'bindings'],
              ['module_root', 'out', 'Release', 'bindings'],
              ['module_root', 'Release', 'bindings'],
              ['module_root', 'build', 'default', 'bindings'],
              [
                'module_root',
                'compiled',
                'version',
                'platform',
                'arch',
                'bindings',
              ],
              [
                'module_root',
                'addon-build',
                'release',
                'install-root',
                'bindings',
              ],
              [
                'module_root',
                'addon-build',
                'debug',
                'install-root',
                'bindings',
              ],
              [
                'module_root',
                'addon-build',
                'default',
                'install-root',
                'bindings',
              ],
              ['module_root', 'lib', 'binding', 'nodePreGyp', 'bindings'],
            ],
          };
        (e.exports = t =
          function (e) {
            'string' == typeof e ? (e = { bindings: e }) : e || (e = {}),
              Object.keys(d).map(function (t) {
                t in e || (e[t] = d[t]);
              }),
              e.module_root || (e.module_root = t.getRoot(t.getFileName())),
              '.node' != c.extname(e.bindings) && (e.bindings += '.node');
            for (
              var n, r, o, i = require, a = [], u = 0, l = e.try.length;
              u < l;
              u++
            ) {
              (n = s.apply(
                null,
                e.try[u].map(function (t) {
                  return e[t] || t;
                })
              )),
                a.push(n);
              try {
                return (
                  (r = e.path ? i.resolve(n) : i(n)), e.path || (r.path = n), r
                );
              } catch (f) {
                if (
                  'MODULE_NOT_FOUND' !== f.code &&
                  'QUALIFIED_PATH_RESOLUTION_FAILED' !== f.code &&
                  !/not find/i.test(f.message)
                )
                  throw f;
              }
            }
            throw (
              (((o = new Error(
                'Could not locate the bindings file. Tried:\n' +
                  a
                    .map(function (t) {
                      return e.arrow + t;
                    })
                    .join('\n')
              )).tries = a),
              o)
            );
          }),
          (t.getFileName = function (e) {
            var t,
              n = Error.prepareStackTrace,
              r = Error.stackTraceLimit,
              i = {};
            (Error.stackTraceLimit = 10),
              (Error.prepareStackTrace = function (n, r) {
                for (var i = 0, c = r.length; i < c; i++)
                  if ((t = r[i].getFileName()) !== o) {
                    if (!e) return;
                    if (t !== e) return;
                  }
              }),
              Error.captureStackTrace(i),
              (Error.prepareStackTrace = n),
              (Error.stackTraceLimit = r);
            return 0 === t.indexOf('file://') && (t = a(t)), t;
          }),
          (t.getRoot = function (e) {
            for (var t, n = u(e); ; ) {
              if (
                ('.' === n && (n = r.cwd()),
                l(s(n, 'package.json')) || l(s(n, 'node_modules')))
              )
                return n;
              if (t === n)
                throw new Error(
                  'Could not find module root given file: "' +
                    e +
                    '". Do you have a `package.json` file? '
                );
              (t = n), (n = s(n, '..'));
            }
          });
      }.call(this, n(23), '/index.js'));
    },
    1073: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return g;
        });
      var r = n(190),
        o = n(1075),
        i = n.n(o),
        c = n(1077),
        a = n(252),
        s = n(55),
        u = n(62),
        l = n.n(u),
        d = n(51),
        f = n(1104),
        p = n.n(f);
      !(function () {
        var e = new Error("Cannot find module 'usb'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      })();
      let h = 500,
        v = () => !1;
      class g extends c.a {
        static open(e) {
          return Promise.resolve().then(() => {
            if (e) return new g(new i.a.HID(e));
            const t = Object(c.b)()[0];
            if (!t) throw new s.TransportError('NoDevice', 'NoDevice');
            return new g(new i.a.HID(t.path));
          });
        }
      }
      (g.isSupported = c.a.isSupported),
        (g.list = c.a.list),
        (g.setListenDevicesDebounce = (e) => {
          h = e;
        }),
        (g.setListenDevicesPollingSkip = (e) => {
          v = e;
        }),
        (g.setListenDevicesDebug = () => {
          console.warn(
            'setListenDevicesDebug is deprecated. Use @ledgerhq/logs instead. No logs will get emitted there anymore.'
          );
        }),
        (g.listen = (e) => {
          let t = !1;
          Promise.resolve(Object(c.b)()).then((n) => {
            var o,
              i = Object(r.a)(n);
            try {
              for (i.s(); !(o = i.n()).done; ) {
                const n = o.value;
                if (!t) {
                  const t = n.path,
                    r = Object(a.d)(n.productId);
                  e.next({
                    type: 'add',
                    descriptor: t,
                    device: n,
                    deviceModel: r,
                  });
                }
              }
            } catch (c) {
              i.e(c);
            } finally {
              i.f();
            }
          });
          const n = ((e, t) => {
              const n = new l.a();
              n.setMaxListeners(0);
              let r = Object(c.b)();
              const o = (e) => e.path,
                i = () => [...new Set(Object(c.b)().map((e) => o(e)))],
                a = (e) => r.find((t) => e.includes(o(t)));
              let s = i();
              const u = p()(() => {
                  if (t())
                    Object(d.log)(
                      'hid-listen',
                      'Polling skipped, re-debouncing'
                    ),
                      u();
                  else {
                    Object(d.log)(
                      'hid-listen',
                      'Polling for added or removed devices'
                    );
                    let e = !1;
                    const t = i(),
                      u = t.filter((e) => !s.includes(e));
                    u.length > 0
                      ? (Object(d.log)('hid-listen', 'New device found:', u),
                        (r = Object(c.b)()),
                        n.emit('add', a(u)),
                        (e = !0))
                      : Object(d.log)('hid-listen', 'No new device found');
                    const l = s.filter((e) => !t.includes(e));
                    l.length > 0
                      ? (Object(d.log)(
                          'hid-listen',
                          'Removed device found:',
                          l
                        ),
                        n.emit('remove', a(l)),
                        (r = r.filter((e) => !l.includes(o(e)))),
                        (e = !0))
                      : Object(d.log)('hid-listen', 'No removed device found'),
                      e && (s = t);
                  }
                }, e),
                f = (e) => {
                  Object(d.log)('hid-listen', 'Device add detected:', e), u();
                };
              (function () {
                var e = new Error("Cannot find module 'usb'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })().on('attach', f),
                Object(d.log)('hid-listen', 'attach listener added');
              const h = (e) => {
                Object(d.log)('hid-listen', 'Device removal detected:', e), u();
              };
              return (
                (function () {
                  var e = new Error("Cannot find module 'usb'");
                  throw ((e.code = 'MODULE_NOT_FOUND'), e);
                })().on('detach', h),
                Object(d.log)('hid-listen', 'detach listener added'),
                {
                  stop: () => {
                    Object(d.log)(
                      'hid-listen',
                      'Stop received, removing listeners and cancelling pending debounced polls'
                    ),
                      u.cancel(),
                      (function () {
                        var e = new Error("Cannot find module 'usb'");
                        throw ((e.code = 'MODULE_NOT_FOUND'), e);
                      })().removeListener('attach', f),
                      (function () {
                        var e = new Error("Cannot find module 'usb'");
                        throw ((e.code = 'MODULE_NOT_FOUND'), e);
                      })().removeListener('detach', h);
                  },
                  events: n,
                }
              );
            })(h, v),
            o = n.events,
            i = n.stop,
            s = (n) => {
              if (t || !n) return;
              const r = Object(a.d)(n.productId);
              e.next({
                type: 'add',
                descriptor: n.path,
                deviceModel: r,
                device: n,
              });
            },
            u = (n) => {
              if (t || !n) return;
              const r = Object(a.d)(n.productId);
              e.next({
                type: 'remove',
                descriptor: n.path,
                deviceModel: r,
                device: n,
              });
            };
          return (
            o.on('add', s),
            o.on('remove', u),
            {
              unsubscribe: function () {
                (t = !0),
                  o.removeListener('add', s),
                  o.removeListener('remove', u),
                  i();
              },
            }
          );
        });
    },
    1075: function (e, t, n) {
      (function (e) {
        var r = n(542),
          o = n(62).EventEmitter,
          i = n(541),
          c = null;
        var a = null;
        function s() {
          a ||
            (a =
              'linux' === r.platform()
                ? c && 'hidraw' !== c
                  ? n(1043)('HID.node')
                  : n(1043)('HID-hidraw.node')
                : n(1043)('HID.node'));
        }
        function u() {
          o.call(this), s();
          var t = new Array(arguments.length + 1);
          t[0] = null;
          for (var n = 0; n < arguments.length; n++) t[n + 1] = arguments[n];
          for (var n in ((this._raw = new (Function.prototype.bind.apply(
            a.HID,
            t
          ))()),
          a.HID.prototype))
            'close' != n &&
              'read' != n &&
              (this[n] = a.HID.prototype[n].bind(this._raw));
          this._paused = !0;
          var r = this;
          r.on('newListener', function (t, n) {
            'data' == t && e.nextTick(r.resume.bind(r));
          });
        }
        i.inherits(u, o),
          (u.prototype.close = function () {
            (this._closing = !0),
              this.removeAllListeners(),
              this._raw.close(),
              (this._closed = !0);
          }),
          (u.prototype.pause = function () {
            this._paused = !0;
          }),
          (u.prototype.read = function (e) {
            if (this._closed)
              throw new Error('Unable to read from a closed HID device');
            return this._raw.read(e);
          }),
          (u.prototype.resume = function () {
            var e = this;
            e._paused &&
              e.listeners('data').length > 0 &&
              ((e._paused = !1),
              e.read(function t(n, r) {
                n
                  ? ((e._paused = !0), e._closing || e.emit('error', n))
                  : (e.listeners('data').length <= 0 && (e._paused = !0),
                    e._paused || e.read(t),
                    e.emit('data', r));
              }));
          }),
          (t.HID = u),
          (t.devices = function () {
            return s(), a.devices.apply(u, arguments);
          }),
          (t.setDriverType = function (e) {
            c = e;
          });
      }.call(this, n(23)));
    },
    1076: function (e, t, n) {
      (function (e) {
        function n(e, t) {
          for (var n = 0, r = e.length - 1; r >= 0; r--) {
            var o = e[r];
            '.' === o
              ? e.splice(r, 1)
              : '..' === o
              ? (e.splice(r, 1), n++)
              : n && (e.splice(r, 1), n--);
          }
          if (t) for (; n--; n) e.unshift('..');
          return e;
        }
        function r(e, t) {
          if (e.filter) return e.filter(t);
          for (var n = [], r = 0; r < e.length; r++)
            t(e[r], r, e) && n.push(e[r]);
          return n;
        }
        (t.resolve = function () {
          for (
            var t = '', o = !1, i = arguments.length - 1;
            i >= -1 && !o;
            i--
          ) {
            var c = i >= 0 ? arguments[i] : e.cwd();
            if ('string' !== typeof c)
              throw new TypeError('Arguments to path.resolve must be strings');
            c && ((t = c + '/' + t), (o = '/' === c.charAt(0)));
          }
          return (
            (o ? '/' : '') +
              (t = n(
                r(t.split('/'), function (e) {
                  return !!e;
                }),
                !o
              ).join('/')) || '.'
          );
        }),
          (t.normalize = function (e) {
            var i = t.isAbsolute(e),
              c = '/' === o(e, -1);
            return (
              (e = n(
                r(e.split('/'), function (e) {
                  return !!e;
                }),
                !i
              ).join('/')) ||
                i ||
                (e = '.'),
              e && c && (e += '/'),
              (i ? '/' : '') + e
            );
          }),
          (t.isAbsolute = function (e) {
            return '/' === e.charAt(0);
          }),
          (t.join = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return t.normalize(
              r(e, function (e, t) {
                if ('string' !== typeof e)
                  throw new TypeError('Arguments to path.join must be strings');
                return e;
              }).join('/')
            );
          }),
          (t.relative = function (e, n) {
            function r(e) {
              for (var t = 0; t < e.length && '' === e[t]; t++);
              for (var n = e.length - 1; n >= 0 && '' === e[n]; n--);
              return t > n ? [] : e.slice(t, n - t + 1);
            }
            (e = t.resolve(e).substr(1)), (n = t.resolve(n).substr(1));
            for (
              var o = r(e.split('/')),
                i = r(n.split('/')),
                c = Math.min(o.length, i.length),
                a = c,
                s = 0;
              s < c;
              s++
            )
              if (o[s] !== i[s]) {
                a = s;
                break;
              }
            var u = [];
            for (s = a; s < o.length; s++) u.push('..');
            return (u = u.concat(i.slice(a))).join('/');
          }),
          (t.sep = '/'),
          (t.delimiter = ':'),
          (t.dirname = function (e) {
            if (('string' !== typeof e && (e += ''), 0 === e.length))
              return '.';
            for (
              var t = e.charCodeAt(0),
                n = 47 === t,
                r = -1,
                o = !0,
                i = e.length - 1;
              i >= 1;
              --i
            )
              if (47 === (t = e.charCodeAt(i))) {
                if (!o) {
                  r = i;
                  break;
                }
              } else o = !1;
            return -1 === r
              ? n
                ? '/'
                : '.'
              : n && 1 === r
              ? '/'
              : e.slice(0, r);
          }),
          (t.basename = function (e, t) {
            var n = (function (e) {
              'string' !== typeof e && (e += '');
              var t,
                n = 0,
                r = -1,
                o = !0;
              for (t = e.length - 1; t >= 0; --t)
                if (47 === e.charCodeAt(t)) {
                  if (!o) {
                    n = t + 1;
                    break;
                  }
                } else -1 === r && ((o = !1), (r = t + 1));
              return -1 === r ? '' : e.slice(n, r);
            })(e);
            return (
              t &&
                n.substr(-1 * t.length) === t &&
                (n = n.substr(0, n.length - t.length)),
              n
            );
          }),
          (t.extname = function (e) {
            'string' !== typeof e && (e += '');
            for (
              var t = -1, n = 0, r = -1, o = !0, i = 0, c = e.length - 1;
              c >= 0;
              --c
            ) {
              var a = e.charCodeAt(c);
              if (47 !== a)
                -1 === r && ((o = !1), (r = c + 1)),
                  46 === a
                    ? -1 === t
                      ? (t = c)
                      : 1 !== i && (i = 1)
                    : -1 !== t && (i = -1);
              else if (!o) {
                n = c + 1;
                break;
              }
            }
            return -1 === t ||
              -1 === r ||
              0 === i ||
              (1 === i && t === r - 1 && t === n + 1)
              ? ''
              : e.slice(t, r);
          });
        var o =
          'b' === 'ab'.substr(-1)
            ? function (e, t, n) {
                return e.substr(t, n);
              }
            : function (e, t, n) {
                return t < 0 && (t = e.length + t), e.substr(t, n);
              };
      }.call(this, n(23)));
    },
    1077: function (e, t, n) {
      'use strict';
      (function (e, r) {
        n.d(t, 'b', function () {
          return g;
        }),
          n.d(t, 'a', function () {
            return m;
          });
        var o = n(21),
          i = n.n(o),
          c = n(9),
          a = n(1075),
          s = n.n(a),
          u = n(227),
          l = n(51),
          d = n(252),
          f = n(1103),
          p = n.n(f),
          h = n(55);
        const v = (t) =>
          ['win32', 'darwin'].includes(e.platform)
            ? 65440 === t.usagePage
            : 0 === t.interface;
        function g() {
          return s.a.devices(d.e, 0).filter(v);
        }
        const b = (e) => e && e.message && e.message.indexOf('HID') >= 0;
        class m extends u.a {
          static open(e) {
            return Promise.resolve().then(() => {
              if (e) return new m(new s.a.HID(e));
              const t = g()[0];
              if (!t) throw new h.TransportError('NoDevice', 'NoDevice');
              return new m(new s.a.HID(t.path));
            });
          }
          constructor(e) {
            var t;
            super(),
              (t = this),
              (this.device = void 0),
              (this.deviceModel = void 0),
              (this.channel = Math.floor(65535 * Math.random())),
              (this.packetSize = 64),
              (this.disconnected = !1),
              (this.setDisconnected = () => {
                this.disconnected ||
                  (this.emit('disconnect'), (this.disconnected = !0));
              }),
              (this.writeHID = (e) => {
                const t = [0];
                for (let r = 0; r < e.length; r++) t.push(e[r]);
                try {
                  return this.device.write(t), Promise.resolve();
                } catch (n) {
                  return b(n)
                    ? (this.setDisconnected(),
                      Promise.reject(new h.DisconnectedDevice(n.message)))
                    : Promise.reject(n);
                }
              }),
              (this.readHID = () =>
                new Promise((e, t) =>
                  this.device.read((n, o) => {
                    if (!o) return t(new h.DisconnectedDevice());
                    if (n) {
                      if (b(n))
                        return (
                          this.setDisconnected(),
                          t(new h.DisconnectedDevice(n.message))
                        );
                      t(n);
                    } else {
                      const t = r.from(o);
                      e(t);
                    }
                  })
                )),
              (this.exchange = (e) =>
                this.exchangeAtomicImpl(
                  Object(c.a)(
                    i.a.mark(function n() {
                      var r, o, c, a, s, u, d, f;
                      return i.a.wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              (r = t.channel),
                                (o = t.packetSize),
                                Object(l.log)(
                                  'apdu',
                                  '=> ' + e.toString('hex')
                                ),
                                (c = p()(r, o)),
                                (a = c.makeBlocks(e)),
                                (s = 0);
                            case 5:
                              if (!(s < a.length)) {
                                n.next = 11;
                                break;
                              }
                              return (n.next = 8), t.writeHID(a[s]);
                            case 8:
                              s++, (n.next = 5);
                              break;
                            case 11:
                              if ((u = c.getReducedResult(d))) {
                                n.next = 18;
                                break;
                              }
                              return (n.next = 14), t.readHID();
                            case 14:
                              (f = n.sent),
                                (d = c.reduceResponse(d, f)),
                                (n.next = 11);
                              break;
                            case 18:
                              return (
                                Object(l.log)(
                                  'apdu',
                                  '<= ' + u.toString('hex')
                                ),
                                n.abrupt('return', u)
                              );
                            case 20:
                            case 'end':
                              return n.stop();
                          }
                      }, n);
                    })
                  )
                )),
              (this.device = e);
            const n = e.getDeviceInfo();
            this.deviceModel = n && n.product ? Object(d.c)(n.product) : null;
          }
          setScrambleKey() {}
          close() {
            var e = this;
            return Object(c.a)(
              i.a.mark(function t() {
                return i.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.exchangeBusyPromise;
                      case 2:
                        e.device.close();
                      case 3:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          }
        }
        (m.isSupported = () => Promise.resolve('function' === typeof s.a.HID)),
          (m.list = () => Promise.resolve(g().map((e) => e.path))),
          (m.listen = (e) => (
            g().forEach((t) => {
              const n = Object(d.d)(t.productId);
              e.next({
                type: 'add',
                descriptor: t.path,
                deviceModel: n,
                device: t,
              });
            }),
            e.complete(),
            { unsubscribe: () => {} }
          ));
      }.call(this, n(23), n(10).Buffer));
    },
    1078: function (e, t) {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ('object' == t || 'function' == t);
      };
    },
    1079: function (e, t, n) {
      var r = n(1106),
        o = 'object' == typeof self && self && self.Object === Object && self,
        i = r || o || Function('return this')();
      e.exports = i;
    },
    1080: function (e, t, n) {
      var r = n(1079).Symbol;
      e.exports = r;
    },
    1101: function (e, t) {},
    1102: function (e, t, n) {
      var r = n(1076).sep || '/';
      e.exports = function (e) {
        if (
          'string' != typeof e ||
          e.length <= 7 ||
          'file://' != e.substring(0, 7)
        )
          throw new TypeError(
            'must pass in a file:// URI to convert to a file path'
          );
        var t = decodeURI(e.substring(7)),
          n = t.indexOf('/'),
          o = t.substring(0, n),
          i = t.substring(n + 1);
        'localhost' == o && (o = '');
        o && (o = r + r + o);
        (i = i.replace(/^(.+)\|/, '$1:')),
          '\\' == r && (i = i.replace(/\//g, '\\'));
        /^.+\:/.test(i) || (i = r + i);
        return o + i;
      };
    },
    1103: function (e, t, n) {
      'use strict';
      (function (e) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0);
        var r = n(55);
        function o(t) {
          const n = e.alloc(2);
          return n.writeUInt16BE(t, 0), n;
        }
        const i = { data: e.alloc(0), dataLength: 0, sequence: 0 };
        var c = (t, n) => ({
          makeBlocks(r) {
            let i = e.concat([o(r.length), r]);
            const c = n - 5,
              a = Math.ceil(i.length / c);
            i = e.concat([i, e.alloc(a * c - i.length + 1).fill(0)]);
            const s = [];
            for (let n = 0; n < a; n++) {
              const r = e.alloc(5);
              r.writeUInt16BE(t, 0), r.writeUInt8(5, 2), r.writeUInt16BE(n, 3);
              const o = i.slice(n * c, (n + 1) * c);
              s.push(e.concat([r, o]));
            }
            return s;
          },
          reduceResponse(n, o) {
            let c = n || i,
              a = c.data,
              s = c.dataLength,
              u = c.sequence;
            if (o.readUInt16BE(0) !== t)
              throw new r.TransportError('Invalid channel', 'InvalidChannel');
            if (5 !== o.readUInt8(2))
              throw new r.TransportError('Invalid tag', 'InvalidTag');
            if (o.readUInt16BE(3) !== u)
              throw new r.TransportError('Invalid sequence', 'InvalidSequence');
            n || (s = o.readUInt16BE(5)), u++;
            const l = o.slice(n ? 5 : 7);
            return (
              (a = e.concat([a, l])),
              a.length > s && (a = a.slice(0, s)),
              { data: a, dataLength: s, sequence: u }
            );
          },
          getReducedResult(e) {
            if (e && e.dataLength === e.data.length) return e.data;
          },
        });
        t.default = c;
      }.call(this, n(10).Buffer));
    },
    1104: function (e, t, n) {
      var r = n(1078),
        o = n(1105),
        i = n(1107),
        c = Math.max,
        a = Math.min;
      e.exports = function (e, t, n) {
        var s,
          u,
          l,
          d,
          f,
          p,
          h = 0,
          v = !1,
          g = !1,
          b = !0;
        if ('function' != typeof e) throw new TypeError('Expected a function');
        function m(t) {
          var n = s,
            r = u;
          return (s = u = void 0), (h = t), (d = e.apply(r, n));
        }
        function y(e) {
          return (h = e), (f = setTimeout(w, t)), v ? m(e) : d;
        }
        function O(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || (g && e - h >= l);
        }
        function w() {
          var e = o();
          if (O(e)) return _(e);
          f = setTimeout(
            w,
            (function (e) {
              var n = t - (e - p);
              return g ? a(n, l - (e - h)) : n;
            })(e)
          );
        }
        function _(e) {
          return (f = void 0), b && s ? m(e) : ((s = u = void 0), d);
        }
        function E() {
          var e = o(),
            n = O(e);
          if (((s = arguments), (u = this), (p = e), n)) {
            if (void 0 === f) return y(p);
            if (g) return clearTimeout(f), (f = setTimeout(w, t)), m(p);
          }
          return void 0 === f && (f = setTimeout(w, t)), d;
        }
        return (
          (t = i(t) || 0),
          r(n) &&
            ((v = !!n.leading),
            (l = (g = 'maxWait' in n) ? c(i(n.maxWait) || 0, t) : l),
            (b = 'trailing' in n ? !!n.trailing : b)),
          (E.cancel = function () {
            void 0 !== f && clearTimeout(f), (h = 0), (s = p = u = f = void 0);
          }),
          (E.flush = function () {
            return void 0 === f ? d : _(o());
          }),
          E
        );
      };
    },
    1105: function (e, t, n) {
      var r = n(1079);
      e.exports = function () {
        return r.Date.now();
      };
    },
    1106: function (e, t, n) {
      (function (t) {
        var n = 'object' == typeof t && t && t.Object === Object && t;
        e.exports = n;
      }.call(this, n(30)));
    },
    1107: function (e, t, n) {
      var r = n(1078),
        o = n(1108),
        i = /^\s+|\s+$/g,
        c = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        u = parseInt;
      e.exports = function (e) {
        if ('number' == typeof e) return e;
        if (o(e)) return NaN;
        if (r(e)) {
          var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
          e = r(t) ? t + '' : t;
        }
        if ('string' != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, '');
        var n = a.test(e);
        return n || s.test(e) ? u(e.slice(2), n ? 2 : 8) : c.test(e) ? NaN : +e;
      };
    },
    1108: function (e, t, n) {
      var r = n(1109),
        o = n(1112);
      e.exports = function (e) {
        return 'symbol' == typeof e || (o(e) && '[object Symbol]' == r(e));
      };
    },
    1109: function (e, t, n) {
      var r = n(1080),
        o = n(1110),
        i = n(1111),
        c = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : c && c in Object(e)
          ? o(e)
          : i(e);
      };
    },
    1110: function (e, t, n) {
      var r = n(1080),
        o = Object.prototype,
        i = o.hasOwnProperty,
        c = o.toString,
        a = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        var t = i.call(e, a),
          n = e[a];
        try {
          e[a] = void 0;
          var r = !0;
        } catch (s) {}
        var o = c.call(e);
        return r && (t ? (e[a] = n) : delete e[a]), o;
      };
    },
    1111: function (e, t) {
      var n = Object.prototype.toString;
      e.exports = function (e) {
        return n.call(e);
      };
    },
    1112: function (e, t) {
      e.exports = function (e) {
        return null != e && 'object' == typeof e;
      };
    },
  },
]);
//# sourceMappingURL=/src/js/1.99c33571.chunk.js.map
