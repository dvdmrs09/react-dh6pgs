/*! For license information please see 4.f666fd11.chunk.js.LICENSE.txt */
(this['webpackJsonpbnc-wallet-exchange'] =
  this['webpackJsonpbnc-wallet-exchange'] || []).push([
  [4],
  {
    1042: function (e, t, n) {
      var i;
      (i = function () {
        return (function (e) {
          var t = {};
          function n(i) {
            if (t[i]) return t[i].exports;
            var a = (t[i] = { i: i, l: !1, exports: {} });
            return e[i].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, i) {
              n.o(e, t) ||
                Object.defineProperty(e, t, {
                  configurable: !1,
                  enumerable: !0,
                  get: i,
                });
            }),
            (n.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return n.d(t, 'a', t), t;
            }),
            (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ''),
            n((n.s = 6))
          );
        })([
          function (e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = {
                LOADED: '__TAB__LOADED_EVENT__',
                CUSTOM: '__TAB__CUSTOM_EVENT__',
                HANDSHAKE: '__TAB__HANDSHAKE_EVENT__',
                ON_BEFORE_UNLOAD: '__TAB__ON_BEFORE_UNLOAD__',
                PARENT_DISCONNECTED: '__PARENT_DISCONNECTED__',
                HANDSHAKE_WITH_PARENT: '__HANDSHAKE_WITH_PARENT__',
                PARENT_COMMUNICATED: '__PARENT_COMMUNICATED__',
              });
          },
          function (e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = {
                INVALID_JSON: 'Invalid JSON Object!',
                INVALID_DATA: 'Some wrong message is being sent by Parent.',
                CONFIG_REQUIRED:
                  'Configuration options required. Please read docs.',
                CUSTOM_EVENT:
                  "CustomEvent(and it's polyfill) is not supported in this browser.",
                URL_REQUIRED:
                  'Url is needed for creating and opening a new window/tab. Please read docs.',
              });
          },
          function (e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var i = s(n(0)),
              a = s(n(3)),
              o = s(n(4)),
              r = s(n(1));
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var u = {
              tabs: [],
              config: {},
              _remove: function (e) {
                var t;
                (t = a.default.searchByKeyName(u.tabs, 'id', e.id, 'index')),
                  u.tabs.splice(t, 1);
              },
              _preProcessMessage: function (e) {
                try {
                  e = u.config.stringify(e);
                } catch (t) {
                  throw new Error(r.default.INVALID_JSON);
                }
                return (
                  e &&
                    -1 === e.indexOf(i.default.PARENT_COMMUNICATED) &&
                    (e = i.default.PARENT_COMMUNICATED + e),
                  e
                );
              },
              addNew: function (e) {
                u.tabs.push(e);
              },
              getOpened: function () {
                return u.tabs.filter(function (e) {
                  return e.status === o.default.OPEN;
                });
              },
              getClosed: function () {
                return u.tabs.filter(function (e) {
                  return e.status === o.default.CLOSE;
                });
              },
              getAll: function () {
                return u.tabs;
              },
              closeTab: function (e) {
                var t = a.default.searchByKeyName(u.tabs, 'id', e);
                return (
                  t && t.ref && (t.ref.close(), (t.status = o.default.CLOSE)), u
                );
              },
              closeAll: function () {
                var e = void 0;
                for (e = 0; e < u.tabs.length; e++)
                  u.tabs[e] &&
                    u.tabs[e].ref &&
                    (u.tabs[e].ref.close(),
                    (u.tabs[e].status = o.default.CLOSE));
                return u;
              },
              broadCastAll: function (e, t) {
                var n = void 0,
                  i = u.getOpened();
                for (e = u._preProcessMessage(e), n = 0; n < i.length; n++)
                  u.sendMessage(i[n], e, t);
                return u;
              },
              broadCastTo: function (e, t, n) {
                var i,
                  o = u.getAll();
                return (
                  (t = u._preProcessMessage(t)),
                  (i = a.default.searchByKeyName(o, 'id', e)),
                  u.sendMessage(i, t, n),
                  u
                );
              },
              sendMessage: function (e, t, n) {
                var i = u.config.origin || '*';
                if (n && e.ref[0])
                  for (var a = 0; a < e.ref.length; a++)
                    e.ref[a].postMessage(t, i);
                else e.ref && e.ref.top && e.ref.top.postMessage(t, i);
              },
            };
            t.default = u;
          },
          function (e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var i = {},
              a = { INDEX: 'index', OBJECT: 'object', BOTH: 'both' };
            (i.searchByKeyName = function (e, t, n, i) {
              if (!e || !t) return !1;
              i = i || a[1];
              var o = void 0,
                r = void 0,
                s = void 0,
                u = -1;
              for (o = 0; o < e.length; o++) {
                if (
                  ((r = e[o]),
                  !isNaN(n) && parseInt(r[t], 10) === parseInt(n, 10))
                ) {
                  u = o;
                  break;
                }
                if (isNaN(n) && r[t] === n) {
                  u = o;
                  break;
                }
              }
              switch ((-1 === u && (e[u] = {}), i)) {
                case a.INDEX:
                  s = u;
                  break;
                case a.BOTH:
                  s = { obj: e[u], index: u };
                  break;
                case a.OBJECT:
                default:
                  s = e[u];
              }
              return s;
            }),
              (t.default = i);
          },
          function (e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = { OPEN: 'open', CLOSE: 'close' });
          },
          function (e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var i = {
              disable: function (e) {
                if (!e) return !1;
                var t = void 0,
                  n = document.querySelectorAll('[' + e + ']');
                for (t = 0; t < n.length; t++)
                  n[t].setAttribute('disabled', 'disabled');
              },
              enable: function (e) {
                if (!e) return !1;
                var t = void 0,
                  n = document.querySelectorAll('[' + e + ']');
                for (t = 0; t < n.length; t++) n[t].removeAttribute('disabled');
              },
            };
            t.default = i;
          },
          function (e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var i = o(n(7)),
              a = o(n(12));
            function o(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var r = { Parent: i.default, Child: a.default };
            t.default = r;
          },
          function (e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var i =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                      Object.prototype.hasOwnProperty.call(n, i) &&
                        (e[i] = n[i]);
                  }
                  return e;
                },
              a = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, n, i) {
                  return n && e(t.prototype, n), i && e(t, i), t;
                };
              })(),
              o = c(n(8)),
              r = c(n(2)),
              s = c(n(5)),
              u = c(n(4)),
              d = c(n(1)),
              l = c(n(0)),
              f = c(n(10));
            function c(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var h = void 0,
              v = void 0,
              g = (function () {
                function e(t) {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, e),
                    'undefined' === typeof (t = t || {}).heartBeatInterval &&
                      (t.heartBeatInterval = 500),
                    'undefined' === typeof t.shouldInitImmediately &&
                      (t.shouldInitImmediately = !0),
                    'function' !== typeof t.parse && (t.parse = JSON.parse),
                    'function' !== typeof t.stringify &&
                      (t.stringify = JSON.stringify),
                    (r.default.tabs = []),
                    (this.Tab = o.default),
                    i(this, t),
                    (r.default.config = t),
                    this.shouldInitImmediately && this.init();
                }
                return (
                  a(e, [
                    {
                      key: 'addInterval',
                      value: function () {
                        var e = void 0,
                          t = r.default.getAll(),
                          n = r.default.getOpened();
                        if (!n || !n.length)
                          return window.clearInterval(h), (h = null), !1;
                        for (e = 0; e < t.length; e++)
                          this.removeClosedTabs && this.watchStatus(t[e]),
                            t[e] &&
                              t[e].ref &&
                              (t[e].status = t[e].ref.closed
                                ? u.default.CLOSE
                                : u.default.OPEN);
                        this.onPollingCallback && this.onPollingCallback();
                      },
                    },
                    {
                      key: 'startPollingTabs',
                      value: function () {
                        var e = this;
                        h = window.setInterval(function () {
                          return e.addInterval();
                        }, this.heartBeatInterval);
                      },
                    },
                    {
                      key: 'watchStatus',
                      value: function (e) {
                        if (!e || !e.ref) return !1;
                        var t = e.ref.closed ? u.default.CLOSE : u.default.OPEN,
                          n = e.status;
                        if (!t || t === n) return !1;
                        n === u.default.OPEN &&
                          t === u.default.CLOSE &&
                          r.default._remove(e);
                      },
                    },
                    {
                      key: 'onChildUnload',
                      value: function (e) {
                        this.onChildDisconnect &&
                          this.onChildDisconnect(e.detail);
                      },
                    },
                    {
                      key: 'customEventUnListener',
                      value: function (e) {
                        this.enableElements(),
                          e.detail &&
                          e.detail.type === l.default.HANDSHAKE &&
                          this.onHandshakeCallback
                            ? this.onHandshakeCallback(e.detail.tabInfo)
                            : e.detail &&
                              e.detail.type === l.default.CUSTOM &&
                              this.onChildCommunication &&
                              this.onChildCommunication(e.detail.tabInfo);
                      },
                    },
                    {
                      key: 'addEventListeners',
                      value: function () {
                        var e = this;
                        window.removeEventListener(
                          'message',
                          f.default.onNewTab
                        ),
                          window.addEventListener(
                            'message',
                            f.default.onNewTab
                          ),
                          window.removeEventListener(
                            'onCustomChildMessage',
                            this.customEventUnListener
                          ),
                          window.addEventListener(
                            'onCustomChildMessage',
                            function (t) {
                              return e.customEventUnListener(t);
                            }
                          ),
                          window.removeEventListener(
                            'onChildUnload',
                            this.onChildUnload
                          ),
                          window.addEventListener(
                            'onChildUnload',
                            function (t) {
                              return e.onChildUnload(t);
                            }
                          ),
                          (window.onbeforeunload = function () {
                            r.default.broadCastAll(
                              l.default.PARENT_DISCONNECTED
                            );
                          });
                      },
                    },
                    {
                      key: 'enableElements',
                      value: function () {
                        s.default.enable('data-tab-opener');
                      },
                    },
                    {
                      key: 'getAllTabs',
                      value: function () {
                        return r.default.getAll();
                      },
                    },
                    {
                      key: 'getOpenedTabs',
                      value: function () {
                        return r.default.getOpened();
                      },
                    },
                    {
                      key: 'getClosedTabs',
                      value: function () {
                        return r.default.getClosed();
                      },
                    },
                    {
                      key: 'closeAllTabs',
                      value: function () {
                        return r.default.closeAll();
                      },
                    },
                    {
                      key: 'closeTab',
                      value: function (e) {
                        return r.default.closeTab(e);
                      },
                    },
                    {
                      key: 'broadCastAll',
                      value: function (e) {
                        return r.default.broadCastAll(e);
                      },
                    },
                    {
                      key: 'broadCastTo',
                      value: function (e, t) {
                        return r.default.broadCastTo(e, t);
                      },
                    },
                    {
                      key: 'openNewTab',
                      value: function (e) {
                        if (!e) throw new Error(d.default.CONFIG_REQUIRED);
                        if (!e.url) throw new Error(d.default.URL_REQUIRED);
                        return (
                          (v = new this.Tab()).create(e),
                          h || this.startPollingTabs(),
                          v
                        );
                      },
                    },
                    {
                      key: 'init',
                      value: function () {
                        this.addEventListeners();
                      },
                    },
                  ]),
                  e
                );
              })();
            t.default = g;
          },
          function (e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var i =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                      Object.prototype.hasOwnProperty.call(n, i) &&
                        (e[i] = n[i]);
                  }
                  return e;
                },
              a = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, n, i) {
                  return n && e(t.prototype, n), i && e(t, i), t;
                };
              })(),
              o = u(n(2)),
              r = u(n(9)),
              s = u(n(5));
            function u(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var d = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                })(this, e),
                  (window.name = window.name || 'PARENT_TAB');
              }
              return (
                a(e, [
                  {
                    key: 'create',
                    value: function (e) {
                      return (
                        i(this, (e = e || {})),
                        (this.id =
                          r.default.generate() || o.default.tabs.length + 1),
                        (this.status = 'open'),
                        (this.ref = window.open(
                          this.url,
                          e.windowName || '_blank',
                          e.windowFeatures
                        )),
                        s.default.disable('data-tab-opener'),
                        (window.newlyTabOpened = {
                          id: this.id,
                          name: this.name || this.windowName,
                          ref: this.ref,
                        }),
                        o.default.addNew(this),
                        this
                      );
                    },
                  },
                ]),
                e
              );
            })();
            t.default = d;
          },
          function (e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var i = void 0;
            (i = (function () {
              function e() {}
              return (
                (e.generate = function () {
                  var t = e._getRandomInt,
                    n = e._hexAligner;
                  return (
                    n(t(32), 8) +
                    '-' +
                    n(t(16), 4) +
                    '-' +
                    n(16384 | t(12), 4) +
                    '-' +
                    n(32768 | t(14), 4) +
                    '-' +
                    n(t(48), 12)
                  );
                }),
                (e._getRandomInt = function (e) {
                  return e < 0
                    ? NaN
                    : e <= 30
                    ? 0 | (Math.random() * (1 << e))
                    : e <= 53
                    ? (0 | (Math.random() * (1 << 30))) +
                      (0 | (Math.random() * (1 << (e - 30)))) * (1 << 30)
                    : NaN;
                }),
                (e._getIntAligner = function (e) {
                  return function (t, n) {
                    for (
                      var i = t.toString(e), a = n - i.length, o = '0';
                      a > 0;
                      a >>>= 1, o += o
                    )
                      1 & a && (i = o + i);
                    return i;
                  };
                }),
                (e._hexAligner = e._getIntAligner(16)),
                (e.prototype.toString = function () {
                  return this.hexString;
                }),
                e
              );
            })()),
              (t.default = i);
          },
          function (e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var i = s(n(3)),
              a = s(n(2)),
              o = s(n(1)),
              r = s(n(0));
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            n(11);
            var u = {
              _onLoad: function (e) {
                var t = void 0,
                  n = void 0,
                  i = e.split(r.default.LOADED)[1];
                if (i)
                  try {
                    (i = a.default.config.parse(i)).id &&
                      (t = a.default.getAll()).length &&
                      ((window.newlyTabOpened = t[t.length - 1]),
                      (window.newlyTabOpened.id = i.id),
                      (window.newlyTabOpened.name = i.name || i.windowName));
                  } catch (s) {
                    throw new Error(o.default.INVALID_JSON);
                  }
                if (window.newlyTabOpened)
                  try {
                    (n = r.default.HANDSHAKE_WITH_PARENT),
                      (n += a.default.config.stringify({
                        id: window.newlyTabOpened.id,
                        name:
                          window.newlyTabOpened.name ||
                          window.newlyTabOpened.windowName,
                        parentName: window.name,
                      })),
                      a.default.sendMessage(
                        window.newlyTabOpened,
                        n,
                        i.isSiteInsideFrame
                      );
                  } catch (s) {
                    throw new Error(o.default.INVALID_JSON);
                  }
              },
              _onCustomMessage: function (e, t) {
                var n,
                  i = e.split(t)[1];
                try {
                  i = a.default.config.parse(i);
                } catch (r) {
                  throw new Error(o.default.INVALID_JSON);
                }
                (n = new CustomEvent('onCustomChildMessage', {
                  detail: { tabInfo: i, type: t },
                })),
                  window.dispatchEvent(n);
              },
              _onBeforeUnload: function (e) {
                var t = void 0,
                  n = e.split(r.default.ON_BEFORE_UNLOAD)[1];
                try {
                  n = a.default.config.parse(n);
                } catch (u) {
                  throw new Error(o.default.INVALID_JSON);
                }
                a.default.tabs.length &&
                  ((t = a.default.getAll()),
                  (window.newlyTabOpened =
                    i.default.searchByKeyName(t, 'id', n.id) ||
                    window.newlyTabOpened));
                var s = new CustomEvent('onChildUnload', { detail: n });
                window.dispatchEvent(s);
              },
              onNewTab: function (e) {
                var t = e.data;
                return (
                  !(!t || 'string' !== typeof t || !a.default.tabs.length) &&
                  (!a.default.config.origin ||
                    a.default.config.origin === e.origin) &&
                  void (t.indexOf(r.default.LOADED) > -1
                    ? u._onLoad(t)
                    : t.indexOf(r.default.CUSTOM) > -1
                    ? u._onCustomMessage(t, r.default.CUSTOM)
                    : t.indexOf(r.default.HANDSHAKE) > -1
                    ? u._onCustomMessage(t, r.default.HANDSHAKE)
                    : t.indexOf(r.default.ON_BEFORE_UNLOAD) > -1 &&
                      u._onBeforeUnload(t))
                );
              },
            };
            t.default = u;
          },
          function (e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = (function () {
                function e(e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = document.createEvent('CustomEvent');
                  return n.initCustomEvent(e, !1, !1, t.detail), n;
                }
                'function' !== typeof window.CustomEvent &&
                  ((e.prototype = window.Event.prototype),
                  (window.CustomEvent = e));
              })());
          },
          function (e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var i =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                      Object.prototype.hasOwnProperty.call(n, i) &&
                        (e[i] = n[i]);
                  }
                  return e;
                },
              a = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                }
                return function (t, n, i) {
                  return n && e(t.prototype, n), i && e(t, i), t;
                };
              })(),
              o = s(n(0)),
              r = s(n(1));
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var u = (function () {
              function e(t) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                })(this, e),
                  (this.sessionStorageKey = '__vwo_new_tab_info__'),
                  t || (t = {}),
                  'undefined' === typeof t.handshakeExpiryLimit &&
                    (t.handshakeExpiryLimit = 5e3),
                  'undefined' === typeof t.shouldInitImmediately &&
                    (t.shouldInitImmediately = !0),
                  'function' !== typeof t.parse && (t.parse = JSON.parse),
                  'function' !== typeof t.stringify &&
                    (t.stringify = JSON.stringify),
                  (this.tabName = window.name),
                  (this.tabId = null),
                  (this.tabParentName = null),
                  i(this, t),
                  (this.config = t),
                  this.shouldInitImmediately && this.init();
              }
              return (
                a(e, [
                  {
                    key: '_isSessionStorage',
                    value: function () {
                      return !(
                        !('sessionStorage' in window) || !window.sessionStorage
                      );
                    },
                  },
                  {
                    key: '_getData',
                    value: function () {
                      return (
                        !!this.isSessionStorageSupported &&
                        window.sessionStorage.getItem(this.sessionStorageKey)
                      );
                    },
                  },
                  {
                    key: '_setData',
                    value: function (e) {
                      return (
                        !!this.isSessionStorageSupported &&
                        (window.sessionStorage.setItem(
                          this.sessionStorageKey,
                          e
                        ),
                        e)
                      );
                    },
                  },
                  {
                    key: '_restoreData',
                    value: function () {
                      if (!this.isSessionStorageSupported) return !1;
                      if (this.isSessionStorageSupported) {
                        var e = this._getData();
                        this._parseData(e);
                      }
                    },
                  },
                  {
                    key: '_parseData',
                    value: function (e) {
                      var t = void 0;
                      try {
                        (t = this.config.parse(e)),
                          (this.tabId = t && t.id),
                          (this.tabName = t && t.name),
                          (this.tabParentName = t && t.parentName);
                      } catch (n) {
                        throw new Error(r.default.INVALID_DATA);
                      }
                    },
                  },
                  {
                    key: 'onCommunication',
                    value: function (e) {
                      var t = this,
                        n = void 0,
                        i = e.data;
                      if (
                        i &&
                        'string' === typeof i &&
                        (!this.config.origin || this.config.origin === e.origin)
                      ) {
                        var a;
                        if (
                          (window.clearTimeout(this.timeout),
                          i.indexOf(o.default.PARENT_DISCONNECTED) > -1 &&
                            (this.config.onParentDisconnect &&
                              this.config.onParentDisconnect(),
                            window.removeEventListener('message', function (e) {
                              return t.onCommunication(e);
                            })),
                          i.indexOf(o.default.HANDSHAKE_WITH_PARENT) > -1)
                        )
                          (n = i.split(o.default.HANDSHAKE_WITH_PARENT)[1]),
                            this._setData(n),
                            this._parseData(n),
                            (a = {
                              id: this.tabId,
                              isSiteInsideFrame: this.config.isSiteInsideFrame,
                            }),
                            this.sendMessageToParent(a, o.default.HANDSHAKE),
                            this.config.onInitialize &&
                              this.config.onInitialize();
                        if (i.indexOf(o.default.PARENT_COMMUNICATED) > -1) {
                          n = i.split(o.default.PARENT_COMMUNICATED)[1];
                          try {
                            n = this.config.parse(n);
                          } catch (s) {
                            throw new Error(r.default.INVALID_JSON);
                          }
                          this.config.onParentCommunication &&
                            this.config.onParentCommunication(n);
                        }
                      }
                    },
                  },
                  {
                    key: 'addListeners',
                    value: function () {
                      var e = this;
                      (window.onbeforeunload = function (t) {
                        var n = {
                          id: e.tabId,
                          isSiteInsideFrame: e.config.isSiteInsideFrame,
                        };
                        e.sendMessageToParent(n, o.default.ON_BEFORE_UNLOAD);
                      }),
                        window.removeEventListener('message', function (t) {
                          return e.onCommunication(t);
                        }),
                        window.addEventListener('message', function (t) {
                          return e.onCommunication(t);
                        });
                    },
                  },
                  {
                    key: 'setHandshakeExpiry',
                    value: function () {
                      var e = this;
                      return window.setTimeout(function () {
                        e.config.onHandShakeExpiry &&
                          e.config.onHandShakeExpiry();
                      }, this.handshakeExpiryLimit);
                    },
                  },
                  {
                    key: 'sendMessageToParent',
                    value: function (e, t) {
                      var n = void 0;
                      (e = (t || o.default.CUSTOM) + this.config.stringify(e)),
                        window.top.opener &&
                          ((n = this.config.origin || '*'),
                          window.top.opener.postMessage(e, n));
                    },
                  },
                  {
                    key: 'getTabInfo',
                    value: function () {
                      return {
                        id: this.tabId,
                        name: this.tabName,
                        parentName: this.tabParentName,
                        isSiteInsideFrame: this.config.isSiteInsideFrame,
                      };
                    },
                  },
                  {
                    key: 'init',
                    value: function () {
                      (this.isSessionStorageSupported =
                        this._isSessionStorage()),
                        this.addListeners(),
                        this._restoreData(),
                        this.sendMessageToParent(
                          this.getTabInfo(),
                          o.default.LOADED
                        ),
                        (this.timeout = this.setHandshakeExpiry()),
                        this.config.onReady && this.config.onReady();
                    },
                  },
                ]),
                e
              );
            })();
            t.default = u;
          },
        ]);
      }),
        (e.exports = i());
    },
  },
]);
//# sourceMappingURL=/src/js/4.f666fd11.chunk.js.map
