(this['webpackJsonpbnc-wallet-exchange'] =
  this['webpackJsonpbnc-wallet-exchange'] || []).push([
  [8],
  {
    102: function (e, n, a) {
      'use strict';
      a.d(n, 'b', function () {
        return A;
      });
      var t = a(5),
        o = a.n(t),
        r = a(9),
        i = a(320),
        l = a.n(i),
        s = a(194),
        c = a.n(s);
      const d = '__DEX_DEVICE_ID__',
        u = {},
        m = () => 'undefined' !== typeof window.sessionStorage,
        h = () => 'undefined' !== typeof window.localStorage,
        p = (e) => {
          const n = d,
            a = JSON.stringify(e);
          (document.cookie = ''
            .concat(n, '=')
            .concat(
              a,
              ';expires=Fri, 31 Dec 9999 23:59:59 GMT;Path=/;secure=true;'
            )),
            h() && localStorage.setItem(n, a),
            m() && sessionStorage.setItem(n, a),
            (u[d] = a);
        },
        g = () => {
          const e = d;
          let n = null;
          if ((n || (n = u[d]), document.cookie)) {
            const a = new RegExp(
              '(?:(?:^|.*;\\s*)'.concat(e, '\\s*=\\s*([^;]*).*$)|^.*$')
            );
            n = document.cookie.replace(a, '$1');
          }
          !n && h() && (n = localStorage.getItem(e) || null),
            !n && m() && (n = sessionStorage.getItem(e) || null);
          const a = JSON.parse(n) || {};
          return n && setTimeout(() => p(a), 0), a;
        };
      var k = a(524);
      const y = new (a.n(k).a)().getResult(),
        b = () => {
          const e = y.os;
          return e && e.name
            ? ''.concat(e.name, ' ').concat(e.version)
            : 'unknown';
        },
        f = () => {
          const e = y.device;
          return e && e.model
            ? ''.concat(e.type, ' ').concat(e.vendor, ' ').concat(e.model, ' ')
            : 'unknown';
        },
        w = () => {
          const e = y.browser,
            n = y.os || {};
          return e && e.name
            ? ''
                .concat(e.name, ' V')
                .concat(e.version, ' (')
                .concat(n.name || '', ')')
            : 'unknown';
        },
        x = () => {
          const e = new Date().getTimezoneOffset();
          let n = -Math.floor(e / 60);
          return n > 0 && (n = '+'.concat(n)), 'GMT'.concat(n);
        },
        v = (e) => {
          const n = e[1].replace('canvas fp:data:image/png;base64,', '');
          return ((e) => {
            let n,
              a,
              t,
              o = '';
            for (n = 0, a = (e += '').length; n < a; n++)
              (t = e.charCodeAt(n).toString(16)),
                (o += t.length < 2 ? '0'.concat(t) : t);
            return o;
          })(atob(n).slice(-16, -12));
        };
      var C = a(11),
        T = a(43);
      const P = { info: {} },
        O = '__DI__',
        E = {
          colorDepth: !0,
          deviceMemory: !0,
          pixelRatio: !0,
          hardwareConcurrency: !0,
          sessionStorage: !0,
          localStorage: !0,
          indexedDb: !0,
          addBehavior: !0,
          openDatabase: !0,
          cpuClass: !0,
          doNotTrack: !0,
          adBlock: !0,
          hasLiedLanguages: !0,
          hasLiedResolution: !0,
          hasLiedOs: !0,
          hasLiedBrowser: !0,
          touchSupport: !0,
          fonts: !0,
          fontsFlash: !0,
          enumerateDevices: !0,
        },
        B = (e) => {
          const n = (n) => {
            const a = {};
            n.forEach((e) => {
              a[e.key] = e.value;
            });
            let t = ((e) => {
              const n = [];
              return (
                e.forEach((e) => {
                  n.push(e[0]);
                }),
                n.join(',')
              );
            })(a.plugins || a.regular_plugins || a.ie_plugins);
            if (t.length > 500) {
              const e = t.substr(0, 500).split(',').slice(0, -1);
              t = e.join(',');
            }
            const o = ((e) => {
                const n = {},
                  a = e.length;
                let t = 0;
                for (let o = 0; o < a; o++) {
                  const a = e[o] || '';
                  if (
                    (a.indexOf('webgl unmasked vendor:') > -1
                      ? ((n.vendor = a.split('webgl unmasked vendor:')[1]),
                        (t += 1))
                      : a.indexOf('webgl unmasked renderer:') > -1 &&
                        ((n.renderer = a.split('webgl unmasked renderer:')[1]),
                        (t += 1)),
                    2 === t)
                  )
                    break;
                }
                return n;
              })(a.webgl),
              r = {
                screen_resolution: a.screenResolution.join(','),
                available_screen_resolution:
                  a.availableScreenResolution.join(','),
                system_version: b(),
                brand_model: f(),
                system_lang: a.language,
                timezone: x(),
                timezoneOffset: a.timezoneOffset,
                user_agent: a.userAgent,
                list_plugin: t,
                canvas_code: v(a.canvas),
                webgl_vendor: o.vendor,
                webgl_renderer: o.renderer,
                audio: a.audio,
                platform: a.platform,
                web_timezone: a.timezone,
                device_name: w(),
              },
              i = Object.keys(r)
                .sort()
                .map((e) => r[e]);
            (r.fingerprint = l.a.x64hash128(i.join(''), 32)),
              (P.info = r),
              e && e(r);
          };
          try {
            l.a.get({ excludes: E }, n);
          } catch (a) {
            console.error('fingerprint error: ', a), e && e(P.info);
          }
        },
        S = (e) => {
          var n, a;
          const t = window.localStorage.getItem(O);
          return (
            t &&
            (null === (n = JSON.parse(t)) ||
            void 0 === n ||
            null === (a = n[e]) ||
            void 0 === a
              ? void 0
              : a[0])
          );
        },
        M = (e) => {
          const n = window.localStorage.getItem(O),
            a = n ? JSON.parse(n) : {};
          a[e.address]
            ? a[e.address].find((n) => n === e.deviceId) ||
              a[e.address].push(e.deviceId)
            : (a[e.address] = [e.deviceId]),
            window.localStorage.setItem(O, JSON.stringify(a));
        },
        A = (function () {
          var e = Object(r.a)(
            o.a.mark(function e(n, t, i, l) {
              var s;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      try {
                        n.device_id || (n.device_id = S(i)),
                          Object(T.a)() && (t = ''.concat(t, '_trubi')),
                          (s = {
                            deviceInfo: n,
                            operation: t,
                            address: i,
                            txHash: l,
                          }),
                          a
                            .e(36)
                            .then(a.bind(null, 1194))
                            .then(
                              (function () {
                                var e = Object(r.a)(
                                  o.a.mark(function e({ serialize: n }) {
                                    var a, t;
                                    return o.a.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.prev = 0),
                                                (a = n(s)),
                                                (e.next = 4),
                                                C.e.sendFingerPrint(a)
                                              );
                                            case 4:
                                              (t = e.sent),
                                                M({
                                                  address: i,
                                                  deviceId: t.device_id,
                                                }),
                                                (e.next = 11);
                                              break;
                                            case 8:
                                              (e.prev = 8),
                                                (e.t0 = e.catch(0)),
                                                console.log(e.t0);
                                            case 11:
                                            case 'end':
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      null,
                                      [[0, 8]]
                                    );
                                  })
                                );
                                return function (n) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            );
                      } catch (c) {
                        console.log(c);
                      }
                    case 1:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (n, a, t, o) {
            return e.apply(this, arguments);
          };
        })();
      'undefined' !== typeof window &&
        (window.requestIdleCallback
          ? window.requestIdleCallback(() => {
              B();
            })
          : setTimeout(() => {
              B();
            }, 500)),
        (P.getCurrentDeviceId = S),
        (P.saveCurrentDeviceId = (e, n) => {
          try {
            const a = g(),
              t = c()(e);
            if (!a[t]) {
              let e = [];
              for (const n in a) e.push({ k: n, v: a[n] });
              if (10 === e.length) {
                e = e.sort((e, n) => e.v.date - n.v.date);
                delete a[(e[0] || {}).k];
              }
            }
            (a[t] = { date: new Date().getTime(), value: n }), p(a);
          } catch (a) {
            return console.warn('saveCurrentDeviceId error: ', a), '';
          }
        }),
        (P.getInfo = (e) => {
          let n = '';
          try {
            const a = P.info;
            a.device_id = S(e);
            const t = c()(e),
              o = g(),
              r = Object.keys(o)
                .filter((e) => e !== t)
                .map((e) => o[e].value);
            (a.related_device_ids = r.join(',')), (n = a);
          } catch (a) {
            console.error('fingerprint error: ', a);
          }
          return n;
        });
      n.a = P;
    },
    109: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return l;
      }),
        a.d(n, 'b', function () {
          return d;
        });
      var t = a(8),
        o = a(0),
        r = a.n(o),
        i = a(1);
      const l = i.e.button.withConfig({
          displayName: 'Button',
          componentId: 'wiovqy-0',
        })(
          [
            'width:',
            ';height:',
            ';line-height:',
            ";text-align:center;font-size:14px;font-weight:500;background:linear-gradient(90deg,rgba(239,184,11,1) 0%,rgba(251,218,60,1) 100%);border-radius:3px;cursor:pointer;color:#212833;display:flex;justify-content:center;position:relative;overflow:hidden;border:none;outline:none;box-sizing:border-box;&:after{content:'';display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#999 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10,10);opacity:0;transition:transform 0.3s,opacity 0.5s;}&:active:after{transform:scale(0,0);opacity:0.6;transition:0s;}span{transition:transform 0.2s ease;white-space:nowrap;@media (max-width:768px){width:100%;}}a{transition:transform 0.2s ease;@media (max-width:768px){width:100%;}}i{@media (max-width:768px){display:none;}}&:hover span{transform:scale(0.9);}&:hover a{transform:scale(0.9);}&:hover i{transform:scale(0.9);}@media (max-width:768px){width:100%;}",
          ],
          (e) => (e.width ? e.width : '120px'),
          (e) => (e.height ? e.height : '40px'),
          (e) => (e.height ? e.height : '40px')
        ),
        s = Object(i.e)(l).withConfig({
          displayName: 'Button__DisabledButton',
          componentId: 'wiovqy-1',
        })(
          [
            'background:#848e9c;color:#fff;box-shadow:none;width:',
            ';&:hover{transform:scale(1);}',
          ],
          (e) => (e.width ? e.width : '100px')
        ),
        c = i.e.div.withConfig({
          displayName: 'Button__Loading',
          componentId: 'wiovqy-2',
        })([
          'width:20px;height:20px;border-radius:50%;border:1px solid #fff;border-left:1px solid transparent;animation:load 0.8s infinite linear;align-self:center;@keyframes load{0%{transform:rotate(0deg);}50%{transform:rotate(180deg);}100%{transform:rotate(360deg);}}',
        ]);
      class d extends o.PureComponent {
        constructor(...e) {
          super(...e),
            Object(t.a)(this, '_handleClick', (e) => {
              const n = this.props,
                a = n.onClick;
              n.loading || (a && a(e));
            });
        }
        render() {
          const e = this.props,
            n = e.disabled,
            a = e.children,
            t = e.loading,
            i = e.width,
            d = e.height,
            u = e.id;
          return r.a.createElement(
            o.Fragment,
            null,
            n
              ? r.a.createElement(s, { width: i, height: d, id: u }, a)
              : r.a.createElement(
                  l,
                  { onClick: this._handleClick, width: i, height: d, id: u },
                  t ? r.a.createElement(c, null) : a
                )
          );
        }
      }
      Object(t.a)(d, 'defaultProps', {
        disabled: !1,
        loading: !1,
        onClick: () => {},
        children: null,
        width: '',
        height: '',
        type: 'active',
        id: '',
      });
    },
    11: function (e, n, a) {
      'use strict';
      a.d(n, 'c', function () {
        return l;
      }),
        a.d(n, 'd', function () {
          return s;
        }),
        a.d(n, 'b', function () {
          return u;
        }),
        a.d(n, 'f', function () {
          return m;
        }),
        a.d(n, 'a', function () {
          return h;
        });
      var t = a(8),
        o = a(204),
        r = a.n(o),
        i = a(56);
      const l = 'mainnet',
        s = 'https://dex-bin.bnbstatic.com/5134e38f';
      (window.__network__ = 'mainnet'),
        (window.__commit__ = '5134e38f'),
        (window.__cdn_url__ = s);
      const c = {
          qa: 'https://dexqa-ud.fdgahl.cn',
          testnet: 'https://testnet-ud.binance.org',
          mainnet: 'https://ud.binance.org',
        },
        d = {
          qa: 'https://i18n.fdgahl.cn',
          testnet: 'https://i18n.bnbstatic.com',
          mainnet: 'https://i18n.bnbstatic.com',
        }[l],
        u = {
          qa: ['dex-api.fdgahl.cn'],
          testnet: [
            'testnet-dex-asiapacific.binance.org',
            'testnet-dex-atlantic.binance.org',
          ],
          mainnet: [
            'dex-asiapacific.binance.org',
            'dex-european.binance.org',
            'dex-atlantic.binance.org',
          ],
        }[l],
        m = window.sessionStorage.getItem('network'),
        h = 'https://explorer.binance.org';
      class p {
        constructor() {
          if (!p.instance) {
            const e = m || u[0];
            (this.baseUri = 'https://'.concat(e)),
              (this.wssUri = 'wss://'.concat(e, '/api/')),
              (this.axiosClient = r.a.create({ baseURL: this.baseUri })),
              (p.instance = this);
          }
          return p.instance;
        }
        getHttpBaseUri() {
          return this.baseUri;
        }
        getWSSBaseUri() {
          return this.wssUri;
        }
        setBaseUri(e) {
          (this.baseUri = 'https://'.concat(e)),
            (this.wssUri = 'wss://'.concat(e, '/api/'));
        }
        getBalances(e) {
          return this.request('get', '/api/v1/balances/'.concat(e));
        }
        getAccount(e) {
          return this.request('get', '/api/v1/account/'.concat(e));
        }
        getNodeInfo() {
          return this.request('get', '/api/v1/node-info');
        }
        getBep2Pairs() {
          return this.request('get', '/api/v1/markets', { limit: 1e3 });
        }
        getBep8Pairs() {
          return i.a
            ? this.request('get', '/api/v1/mini/markets', { limit: 1e3 })
            : Promise.resolve([]);
        }
        getFees() {
          return this.request('get', '/api/v1/fees');
        }
        getTokens() {
          return this.request('get', '/api/v1/tokens', {
            limit: 1e3,
            offset: 0,
          });
        }
        getMiniTokens() {
          return i.a
            ? this.request('get', '/api/v1/mini/tokens', { limit: 1e3 })
            : Promise.resolve([]);
        }
        getDepth(e) {
          return this.request('get', '/api/v1/depth', e);
        }
        getOpenOrdersQS(e) {
          return this.request('get', '/api/v1/orders/open', e);
        }
        getOpenOrdersQSForBep8(e) {
          return i.a
            ? this.request('get', '/api/v1/mini/orders/open', e)
            : Promise.resolve({ order: [], total: 0 });
        }
        getOrderHistoryQS(e) {
          return this.request('get', '/api/v1/orders/closed', e);
        }
        getOrderHistoryQSForBep8(e) {
          return i.a
            ? this.request('get', '/api/v1/mini/orders/closed', e)
            : Promise.resolve({ order: [], total: 0 });
        }
        getOrderTradeHistoryQS(e) {
          return this.request('get', '/api/v1/trades', e);
        }
        getOrderTradeHistoryQSForBep8(e) {
          return i.a
            ? this.request('get', '/api/v1/mini/trades', e)
            : Promise.resolve({ trade: [], total: 0 });
        }
        getFiatCurrency() {
          return this.request('get', '/api/v1/fiat-currency', null);
        }
        getCryptoCurrency() {
          return this.request('get', '/api/v1/crypto-currency', null);
        }
        get24HrTickerForBep2(e) {
          return this.request('get', '/api/v1/ticker/24hr', e);
        }
        get24HrTickerForBep8(e) {
          return i.a
            ? this.request('get', '/api/v1/mini/ticker/24hr', e)
            : Promise.resolve([]);
        }
        getTradesByHeight(e) {
          return this.request('get', '/api/query/trades-by-height', e);
        }
        getPeers() {
          return this.request('get', 'api/v1/peers');
        }
        getTradesByBlock(e) {
          return this.request('get', 'api/v1/block-trades', e);
        }
        ipValidate() {
          return this.request('get', 'api/ip-validate');
        }
        getTransactions(e) {
          return this.request('get', '/api/v1/transactions', e);
        }
        getBlockExchangeFees(e) {
          return this.request('get', '/api/v1/block-exchange-fee', e);
        }
        getI18nData(e) {
          return this.request(
            'get',
            '/i18n/api/v1/out/web-wallet-ui/'.concat(e),
            {},
            d,
            1e3
          );
        }
        checkTopic(e) {
          return this.request(
            'get',
            '/checkTopic',
            { topic: e },
            'https://wallet-bridge.binance.org',
            3e3
          );
        }
        getKline(e) {
          return this.request('get', '/api/v1/klines', e);
        }
        getMiniTokenKline(e) {
          return i.a
            ? this.request('get', '/api/v1/mini/klines', e)
            : Promise.resolve([]);
        }
        ping(e) {
          return this.request('get', '/api/v1/ping', null, e);
        }
        collectMetrics(e) {
          const n = {
            method: 'post',
            data: JSON.stringify(e),
            url: '/api/perf/metrics',
            baseURL: this.baseUri,
            headers: { 'content-type': 'application/json' },
          };
          return this.axiosClient
            .request(n)
            .then((e) => e.data)
            .catch((e) => {
              console.log(e);
            });
        }
        sendFingerPrint(e) {
          const n = {
            method: 'post',
            data: e.toString('hex'),
            url: '/api/v1/uo',
            baseURL: c[l],
            timeout: 3e3,
            headers: { 'content-type': 'text/plain' },
          };
          return this.axiosClient
            .request(n)
            .then((e) => e.data)
            .catch((e) => {
              console.log(e);
            });
        }
        request(e, n, a, t, o = 3e4) {
          const r = { timeout: o, method: e.toLowerCase() };
          return (
            (r.baseURL = t || this.baseUri),
            'get' === r.method &&
              (r.url = (function (e, n) {
                const a = [];
                for (const t in n) a.push(''.concat(t, '=').concat(n[t]));
                return ''.concat(e, '?').concat(a.join('&'));
              })(n, a)),
            'post' === r.method && (r.data = JSON.stringify(a)),
            this.axiosClient
              .request(r)
              .then((e) => e.data)
              .catch((e) => {
                throw (
                  (console.error('[API Failed] '.concat(e.message || ''), e, r),
                  e)
                );
              })
          );
        }
      }
      Object(t.a)(p, 'instance', void 0), (n.e = new p());
    },
    111: function (e, n, a) {
      'use strict';
      a.d(n, 'g', function () {
        return t;
      }),
        a.d(n, 'c', function () {
          return o;
        }),
        a.d(n, 'a', function () {
          return r;
        }),
        a.d(n, 'f', function () {
          return i;
        }),
        a.d(n, 'b', function () {
          return l;
        }),
        a.d(n, 'e', function () {
          return s;
        }),
        a.d(n, 'd', function () {
          return c;
        }),
        a.d(n, 'n', function () {
          return d;
        }),
        a.d(n, 'j', function () {
          return u;
        }),
        a.d(n, 'k', function () {
          return m;
        }),
        a.d(n, 'l', function () {
          return h;
        }),
        a.d(n, 'h', function () {
          return p;
        }),
        a.d(n, 'm', function () {
          return g;
        }),
        a.d(n, 'i', function () {
          return k;
        });
      const t = 'createAccount/SET_STEP',
        o = 'createAccount/SET_PASSWORD',
        r = 'createAccount/SET_ACCOUNT',
        i = 'createAccount/SET_SHOW_PRIVATEKEY',
        l = 'createAccount/SET_CONFIRM_MNEMONIC',
        s = 'createAccount/SET_SHOW_KEYSTORE_TEXT',
        c = 'createAccount/SET_RANDOM_WORDS',
        d = (e) => (n) => n({ type: t, step: e }),
        u = (e) => (n) => n({ type: o, password: e }),
        m = (e) => (n) => n({ type: c, data: e }),
        h = (e) => (n) => n({ type: s, data: e }),
        p = (e) => (n) => n({ type: r, data: e }),
        g = (e) => (n) => n({ type: i, data: e }),
        k = (e) => (n) => n({ type: l, data: e });
    },
    112: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return c;
      }),
        a.d(n, 'c', function () {
          return d;
        }),
        a.d(n, 'b', function () {
          return u;
        }),
        a.d(n, 'f', function () {
          return m;
        }),
        a.d(n, 'e', function () {
          return g;
        }),
        a.d(n, 'd', function () {
          return k;
        });
      var t = a(5),
        o = a.n(t),
        r = a(9),
        i = a(50),
        l = a(11),
        s = a(33);
      const c = 'SET_ACCOUNT_TRADE_HISTORY',
        d = 'SET_TRADE_HISTORY',
        u = 'SET_FETCH_TRADE_HISTORY',
        m = (e) => (n) => n({ type: d, data: e }),
        h = (e) => (n) => {
          n({ type: u, data: e });
        },
        p = (e) => (n) => {
          n({ type: c, data: e });
        },
        g = ({ params: e, tokenType: n = i.a }) =>
          (function () {
            var a = Object(r.a)(
              o.a.mark(function a(t) {
                var r;
                return o.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (((a.prev = 0), t(h(!0)), n !== i.a)) {
                            a.next = 8;
                            break;
                          }
                          return (a.next = 5), l.e.getOrderTradeHistoryQS(e);
                        case 5:
                          (a.t0 = a.sent), (a.next = 11);
                          break;
                        case 8:
                          return (
                            (a.next = 10), l.e.getOrderTradeHistoryQSForBep8(e)
                          );
                        case 10:
                          a.t0 = a.sent;
                        case 11:
                          (r = a.t0), t(m(r)), t(h(!1)), (a.next = 19);
                          break;
                        case 16:
                          (a.prev = 16),
                            (a.t1 = a.catch(0)),
                            console.log(
                              'status:'
                                .concat(a.t1.status, ' message: ')
                                .concat(a.t1.statusText)
                            );
                        case 19:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 16]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
        k = ({ params: e, withLoading: n, tokenType: a = i.a }) =>
          (function () {
            var t = Object(r.a)(
              o.a.mark(function t(r) {
                var c;
                return o.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((t.prev = 0), n && r(Object(s.i)(!0)), a !== i.a)
                          ) {
                            t.next = 8;
                            break;
                          }
                          return (t.next = 5), l.e.getOrderTradeHistoryQS(e);
                        case 5:
                          (t.t0 = t.sent), (t.next = 11);
                          break;
                        case 8:
                          return (
                            (t.next = 10), l.e.getOrderTradeHistoryQSForBep8(e)
                          );
                        case 10:
                          t.t0 = t.sent;
                        case 11:
                          (c = t.t0),
                            r(p(c)),
                            n && r(Object(s.i)(!1)),
                            (t.next = 19);
                          break;
                        case 16:
                          (t.prev = 16),
                            (t.t1 = t.catch(0)),
                            console.log(
                              'status:'
                                .concat(t.t1.status, ' message: ')
                                .concat(t.t1.statusText)
                            );
                        case 19:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 16]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
    },
    119: function (e, n, a) {
      'use strict';
      a.d(n, 'c', function () {
        return u;
      }),
        a.d(n, 'b', function () {
          return m;
        }),
        a.d(n, 'a', function () {
          return h;
        }),
        a.d(n, 'e', function () {
          return g;
        }),
        a.d(n, 'd', function () {
          return w;
        });
      var t = a(5),
        o = a.n(t),
        r = a(7),
        i = a(9),
        l = a(11),
        s = a(156),
        c = a(50);
      const d = [
          'btc',
          'etc',
          'eth',
          'bnb',
          'usdt',
          'busd',
          'bch',
          'ltc',
          'eos',
          'xrp',
          'ada',
          'bsv',
          'link',
        ],
        u = 'SET_PAIRS',
        m = 'SET_IS_FETCHING_MARKETS',
        h = 'SET_FAVORITES',
        p = (e) => (n) => n({ type: u, data: e }),
        g = (e) => (n) => n({ type: h, data: e }),
        k = (e) => (n) => {
          n({ type: m, data: e });
        },
        y = (function () {
          var e = Object(i.a)(
            o.a.mark(function e() {
              var n, a;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), l.e.getBep2Pairs();
                    case 2:
                      return (
                        (n = e.sent), (e.next = 5), l.e.get24HrTickerForBep2()
                      );
                    case 5:
                      return (
                        (a = e.sent),
                        e.abrupt('return', {
                          pairs: n.map((e) => {
                            const n = a.find(
                              (n) =>
                                n.baseAssetName === e.base_asset_symbol &&
                                n.quoteAssetName === e.quote_asset_symbol
                            ) || { quoteVolume: 0 };
                            return Object(r.a)(
                              { volume: Number(n.quoteVolume) },
                              e,
                              { tokenType: c.a }
                            );
                          }),
                          symbolTickers: a,
                        })
                      );
                    case 7:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        b = (function () {
          var e = Object(i.a)(
            o.a.mark(function e() {
              var n, a, t;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), l.e.getBep8Pairs();
                    case 2:
                      return (
                        (n = e.sent),
                        (a = n.filter((e) => {
                          var n, a;
                          return !d.includes(
                            null === e ||
                              void 0 === e ||
                              null === (n = e.base_asset_symbol) ||
                              void 0 === n ||
                              null === (a = n.split('-')[0]) ||
                              void 0 === a
                              ? void 0
                              : a.toLowerCase()
                          );
                        })),
                        (e.next = 6),
                        l.e.get24HrTickerForBep8()
                      );
                    case 6:
                      return (
                        (t = e.sent),
                        e.abrupt('return', {
                          pairs: a.map((e) => {
                            const n = t.find(
                              (n) =>
                                n.baseAssetName === e.base_asset_symbol &&
                                n.quoteAssetName === e.quote_asset_symbol
                            ) || { quoteVolume: 0 };
                            return Object(r.a)(
                              { volume: Number(n.quoteVolume) },
                              e,
                              { tokenType: c.b }
                            );
                          }),
                          symbolTickers: t,
                        })
                      );
                    case 8:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        f = (function () {
          var e = Object(i.a)(
            o.a.mark(function e() {
              var n, a;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), y();
                    case 2:
                      return (n = e.sent), (e.next = 5), b();
                    case 5:
                      return (
                        (a = e.sent),
                        e.abrupt('return', {
                          pairs: [...n.pairs, ...a.pairs],
                          symbolTickers: [
                            ...n.symbolTickers,
                            ...a.symbolTickers,
                          ],
                        })
                      );
                    case 7:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        w = () =>
          (function () {
            var e = Object(i.a)(
              o.a.mark(function e(n) {
                var a, t, r;
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), n(k(!0)), (e.next = 4), f();
                        case 4:
                          (a = e.sent),
                            (t = a.pairs),
                            (r = a.symbolTickers),
                            n(p(t)),
                            n(Object(s.d)(r)),
                            n(Object(s.e)({ pairs: t })),
                            n(k(!1)),
                            (e.next = 16);
                          break;
                        case 13:
                          (e.prev = 13),
                            (e.t0 = e.catch(0)),
                            console.log(
                              'status:'
                                .concat(e.t0.status, ' message: ')
                                .concat(e.t0.statusText)
                            );
                        case 16:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 13]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
    },
    123: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return o;
      });
      var t = a(66);
      const o = [
        'TUSDB',
        'THKDB',
        'TGBPB',
        'TCADB',
        'TAUDB',
        'IDRTB',
        'BTCB',
        'USDSB',
      ];
      n.b = (e) => {
        if (!e) return '';
        let n = e.split('_'),
          a = Object(t.a)(n, 2),
          r = a[0],
          i = a[1];
        return (
          o.find((e) => {
            var n, a;
            return null === (n = r) ||
              void 0 === n ||
              null === (a = n.toUpperCase()) ||
              void 0 === a
              ? void 0
              : a.includes(e);
          }) && (r = r.replace(/B-.+/i, '')),
          o.find((e) => {
            var n, a;
            return null === (n = i) ||
              void 0 === n ||
              null === (a = n.toUpperCase()) ||
              void 0 === a
              ? void 0
              : a.includes(e);
          }) && (i = i.replace(/B-.+/i, '')),
          i
            ? ''
                .concat(r.replace(/-.+/i, ''), '_')
                .concat(i.replace(/-.+/i, ''))
            : r.replace(/-.+/i, '')
        );
      };
    },
    139: function (e, n, a) {
      'use strict';
      a.d(n, 'b', function () {
        return d;
      }),
        a.d(n, 'a', function () {
          return m;
        });
      var t = a(0),
        o = a.n(t),
        r = a(24),
        i = a(80),
        l = a(11),
        s = a(43);
      const c = l.e.getHttpBaseUri(),
        d = Object(t.createContext)({});
      class u extends t.Component {
        constructor(e) {
          super(e);
          const n = Object(s.a)() ? 68 : 1,
            a = (this._client = new i.BncClient(c, !1, n));
          a.initChain(),
            'mainnet' === l.c
              ? a.chooseNetwork('mainnet')
              : a.chooseNetwork('testnet');
        }
        componentWillUpdate({ address: e }) {
          this.props.address !== e &&
            (console.log(
              'BNCClientProvider: Account address has changed, clearing account_number.'
            ),
            this._client &&
              this._client.account_number &&
              (this._client.account_number = null));
        }
        render() {
          const e = this.props.children;
          return o.a.createElement(d.Provider, { value: this._client }, e);
        }
      }
      d.Provider;
      const m = d.Consumer;
      n.c = Object(r.b)(({ account: { address: e } }) => ({ address: e }))(u);
    },
    140: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return H;
      });
      var t = a(5),
        o = a.n(t),
        r = a(9),
        i = a(8),
        l = a(0),
        s = a.n(l),
        c = a(4),
        d = a.n(c),
        u = a(1),
        m = a(110),
        h = a.n(m),
        p = a(3),
        g = a(24),
        k = a(19),
        y = a(180),
        b = a.n(y),
        f = a(69),
        w = a(521),
        x = a(139),
        v = a(322),
        C = (a(537), a(92)),
        T = a(11),
        P = a(72),
        O = a(102),
        E = a(50),
        B = a(45),
        S = a(94),
        M = a(112),
        A = a(6);
      const W = u.e.div.withConfig({
          displayName: 'WalletConnectProvider__ModalBody',
          componentId: 'sc-18v91p7-0',
        })(
          ['color:inherit;text-align:center;background:', ';box-shadow:', ';'],
          ({ theme: e }) => e.popupBg,
          ({ theme: e }) => e.boxShadow
        ),
        z = u.e.div.withConfig({
          displayName: 'WalletConnectProvider__ToastContainer',
          componentId: 'sc-18v91p7-1',
        })(['display:flex;flex-direction:column;']),
        D = u.e.h3.withConfig({
          displayName: 'WalletConnectProvider__ToastTitle',
          componentId: 'sc-18v91p7-2',
        })(
          ['display:flex;font-size:', ';font-weight:bold;margin-bottom:', ';'],
          ({ theme: e }) => Object(p.a)(e.honeycomb.size.increased),
          ({ theme: e }) => Object(p.a)(e.honeycomb.size.normal)
        ),
        _ = u.e.p.withConfig({
          displayName: 'WalletConnectProvider__ToastDescription',
          componentId: 'sc-18v91p7-3',
        })(['display:flex;font-size:', ';'], ({ theme: e }) =>
          Object(p.a)(e.honeycomb.size.normal)
        ),
        I = ({
          bncClient: e,
          walletConnectClient: n,
          preSignCb: a,
          postSignCb: t,
          errCb: o,
          isClientInitailized: r,
        }) => (
          Object(l.useEffect)(() => {
            if (!e || !n) return;
            if (!Object(C.c)()) return;
            if (!r) return;
            const i = n.getSigningDelegate(a, t, o);
            console.log('Setting WalletConnect signing delegate on BncClient.'),
              e.setSigningDelegate(i);
          }),
          null
        );
      (I.propTypes = {
        bncClient: d.a.object.isRequired,
        walletConnectClient: d.a.object.isRequired,
        isClientInitailized: d.a.bool.isRequired,
        preSignCb: d.a.func,
        postSignCb: d.a.func,
      }),
        (I.defaultProps = { preSignCb: () => {}, postSignCb: () => {} });
      const N = Object(l.createContext)({});
      class K extends l.Component {
        constructor(e) {
          var n;
          super(e),
            (n = this),
            Object(i.a)(this, '_pageUnLoad', (e) => {
              this._client.disconnect();
            }),
            Object(i.a)(
              this,
              '_pageLoad',
              Object(r.a)(
                o.a.mark(function e() {
                  var a, t;
                  return o.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (n.props.isConnectedWithWallet) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt('return');
                          case 3:
                            if (
                              ((a =
                                (a = localStorage.getItem('walletconnect')) &&
                                JSON.parse(a)),
                              (e.prev = 5),
                              !a || !a.handshakeTopic)
                            ) {
                              e.next = 13;
                              break;
                            }
                            return (
                              (e.next = 9), T.e.checkTopic(a.handshakeTopic)
                            );
                          case 9:
                            (t = e.sent) && t.isAlive
                              ? n._client.restoreSession()
                              : n._reconnect(),
                              (e.next = 14);
                            break;
                          case 13:
                            n._reconnect();
                          case 14:
                            e.next = 20;
                            break;
                          case 16:
                            (e.prev = 16),
                              (e.t0 = e.catch(5)),
                              n._reconnect(),
                              console.log(e.t0);
                          case 20:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 16]]
                  );
                })
              )
            ),
            Object(i.a)(this, '_onRestore', () => {
              (0, this.props.dispatch)(Object(f.c)(!0));
            }),
            Object(i.a)(this, '_onConnect', ({ accounts: e }) => {
              const n = this.props,
                a = n.dispatch,
                t = n.triggerElement,
                o = n.deviceInfo,
                r = { isWalletConnect: !0, isHardWare: !0 };
              let i = sessionStorage.getItem('user');
              if (
                ((i = (i && JSON.parse(i)) || {}),
                Object(O.b)(o, 'unlock_walletconnect', e[0], ''),
                a(
                  Object(B.e)({
                    address: e[0],
                    flags: r,
                    privateKey: 'HARDWARE',
                  })
                ),
                a(Object(f.d)('')),
                a(Object(f.c)(!0)),
                console.log('testt'),
                e[0] !== i.address)
              ) {
                a(Object(B.d)(e[0])),
                  Object(P.c)(e[0], { keystore: 'HARDWARE', flags: r });
                const n = Object(E.c)(),
                  t = { address: e[0], offset: 0, total: 1, limit: 30 };
                a(Object(S.d)({ params: t, tokenType: n })),
                  a(Object(S.e)({ params: t, withLoading: !0, tokenType: n })),
                  a(Object(M.d)({ params: t, withLoading: !0, tokenType: n }));
              } else t && h.a.function(t.click) && t.click();
            }),
            Object(i.a)(
              this,
              '_reconnect',
              Object(r.a)(
                o.a.mark(function e() {
                  var a, t;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a = n.props.dispatch),
                            window.localStorage.removeItem('walletconnect'),
                            !n._client.connected())
                          ) {
                            e.next = 6;
                            break;
                          }
                          return n._client.disconnect(), (e.next = 6), b()(1e3);
                        case 6:
                          return (e.next = 8), n._client.startSession(!1);
                        case 8:
                          (t = e.sent),
                            window.__DEV__ &&
                              console.log('WalletConnect URI', t),
                            a(Object(f.d)(t));
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )
            ),
            Object(i.a)(
              this,
              '_onDisconnect',
              Object(r.a)(
                o.a.mark(function e() {
                  var a;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = n.props.dispatch)(Object(f.d)('')),
                            a(Object(f.c)(!1)),
                            (e.next = 5),
                            b()(1e3)
                          );
                        case 5:
                          console.log('WalletConnect session disconnected'),
                            sessionStorage.removeItem('user'),
                            window.localStorage.removeItem('walletconnect'),
                            window.location.reload();
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )
            ),
            Object(i.a)(this, '_onSessionUpdate', (e) => {
              console.log('updated params...'), console.log(e);
              const n = this.props,
                a = n.dispatch,
                t = n.triggerElement;
              a(Object(f.d)('')), t && h.a.function(t.click) && t.click();
            }),
            Object(i.a)(this, '_showSignModal', () => {
              this.setState({ showModal: !0 });
            }),
            Object(i.a)(this, '_hideSignModal', () => {
              this.setState({ showModal: !1 });
            }),
            Object(i.a)(this, '_notify', () => {
              const e = this.props,
                n = e.isWalletConnect,
                a = e.isConnectedWithWallet,
                t = a
                  ? 'Mobile Wallet connected'
                  : 'Mobile Wallet disconnected';
              n &&
                Object(k.q)(
                  s.a.createElement(
                    k.m,
                    {
                      icon: a
                        ? s.a.createElement(k.m.Icon.Success, null)
                        : s.a.createElement(k.m.Icon.Danger, null),
                      'data-testid': 'success-toast',
                    },
                    s.a.createElement(
                      z,
                      null,
                      s.a.createElement(D, null, 'Status'),
                      s.a.createElement(_, null, t)
                    )
                  )
                );
            }),
            (this._client = new w.a(null)),
            this._client.on('connect', this._onConnect),
            this._client.on('restore', this._onRestore),
            this._client.on('disconnect', this._onDisconnect),
            this._client.on('session_update', this._onSessionUpdate),
            (this.state = { showModal: !1 });
        }
        componentDidMount() {
          window.addEventListener('load', this._pageLoad),
            window.addEventListener('unload', this._pageUnLoad);
        }
        componentWillUnmount() {
          window.removeEventListener('load', this._pageLoad);
        }
        componentDidUpdate(e) {
          this.props.isConnectedWithWallet !== e.isConnectedWithWallet &&
            this._notify();
        }
        render() {
          const e = this.state.showModal,
            n = this.props,
            a = n.children,
            t = n.formatI18nText;
          n.isConnectedWithWallet;
          return s.a.createElement(
            N.Provider,
            { value: this._client },
            s.a.createElement(x.a, null, (e) =>
              s.a.createElement(
                s.a.Fragment,
                null,
                s.a.createElement(I, {
                  bncClient: e,
                  walletConnectClient: this._client,
                  isClientInitailized: this._client.initialized(),
                  preSignCb: this._showSignModal,
                  postSignCb: this._hideSignModal,
                  errCb: this._hideSignModal,
                }),
                a
              )
            ),
            e
              ? s.a.createElement(
                  v.a,
                  {
                    title: t('walletConnect.readyToConfirm'),
                    close: this._hideSignModal,
                  },
                  s.a.createElement(
                    W,
                    null,
                    t('walletConnect.readyToConfirmBody')
                  )
                )
              : null
          );
        }
      }
      Object(i.a)(K, 'defaultProps', {
        triggerElement: null,
        address: '',
        formatI18nText: () => {},
        isWalletConnect: !1,
        isConnectedWithWallet: !1,
        deviceInfo: {},
      });
      N.Provider;
      const H = N.Consumer;
      n.b = Object(A.e)(
        Object(g.b)(
          ({
            globalData: { triggerElement: e, deviceInfo: n },
            account: {
              address: a,
              flags: { isWalletConnect: t },
            },
            walletConnect: { isConnectedWithWallet: o },
          }) => ({
            triggerElement: e,
            address: a,
            isWalletConnect: t,
            isConnectedWithWallet: o,
            deviceInfo: n,
          })
        )(K)
      );
    },
    156: function (e, n, a) {
      'use strict';
      a.d(n, 'b', function () {
        return s;
      }),
        a.d(n, 'a', function () {
          return c;
        }),
        a.d(n, 'e', function () {
          return d;
        }),
        a.d(n, 'd', function () {
          return u;
        }),
        a.d(n, 'c', function () {
          return m;
        });
      var t = a(5),
        o = a.n(t),
        r = a(9),
        i = a(11),
        l = a(56);
      const s = 'SET_TICKER_LOT_SIZE',
        c = 'SET_SYMBOL_TICKERS',
        d = (e) => (n) => n({ type: s, data: e }),
        u = (e) => (n) => n({ type: c, data: e }),
        m = () =>
          (function () {
            var e = Object(r.a)(
              o.a.mark(function e(n) {
                var a, t;
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            i.e.get24HrTickerForBep2()
                          );
                        case 3:
                          if (((a = e.sent), (t = []), (e.prev = 5), !l.a)) {
                            e.next = 10;
                            break;
                          }
                          return (e.next = 9), i.e.get24HrTickerForBep8();
                        case 9:
                          t = e.sent;
                        case 10:
                          e.next = 15;
                          break;
                        case 12:
                          (e.prev = 12),
                            (e.t0 = e.catch(5)),
                            console.error(
                              'Cound not fetch BEP8 ticker values',
                              e.t0
                            );
                        case 15:
                          n(u({ symbolTickers: [...a, ...t], from: 'rest' })),
                            (e.next = 21);
                          break;
                        case 18:
                          (e.prev = 18),
                            (e.t1 = e.catch(0)),
                            console.log(
                              'status:'
                                .concat(e.t1.status, ' message: ')
                                .concat(e.t1.statusText)
                            );
                        case 21:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [0, 18],
                    [5, 12],
                  ]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
    },
    157: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return t;
      });
      const t =
        'true' ===
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
        }).REACT_APP_ENABLE_TOKEN_MANAGEMENT;
    },
    163: function (e, n, a) {
      'use strict';
      a.d(n, 'b', function () {
        return u;
      }),
        a.d(n, 'c', function () {
          return m;
        });
      var t = a(5),
        o = a.n(t),
        r = a(7),
        i = a(9),
        l = a(72),
        s = a(510),
        c = {
          cn: a(511),
          en: s,
          in: a(512),
          kr: a(513),
          ru: a(514),
          tr: a(515),
          vn: a(516),
          es: a(517),
        },
        d = a(426);
      const u = () =>
          (function () {
            var e = Object(i.a)(
              o.a.mark(function e(n) {
                var a, t, i;
                return o.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (a = Object(l.a)('lang').toLowerCase() || 'en'),
                          (t = Object(r.a)({}, d, {}, c[a])),
                          n({
                            type: 'i18n/SET_I18N',
                            data: (i = { locale: a, data: t }),
                          }),
                          window.localStorage.setItem(
                            'lang_data',
                            JSON.stringify(i)
                          );
                      case 5:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
        m = (e) => (n, a) => {
          let t = e;
          t || (t = Object(l.a)('lang').toLowerCase()), (t = e || 'en');
          if (a().i18n.locale === t) return;
          const o = { locale: t, data: Object(r.a)({}, d, {}, c[t]) };
          n({ type: 'i18n/SET_I18N', data: o }),
            Object(l.e)('lang', t),
            window.localStorage.setItem('lang_data', JSON.stringify(o)),
            'undefined' === typeof window ||
              window.prerenderReady ||
              setTimeout(() => {
                window.prerenderReady = !0;
              }, 50);
        },
        h = (() => {
          const e = window.localStorage.getItem('lang_data');
          return e ? JSON.parse(e) : { locale: '', data: {} };
        })();
      n.a = (e = h, n) => {
        switch (n.type) {
          case 'i18n/SET_I18N':
            return Object(r.a)({}, e, {}, n.data);
          default:
            return e;
        }
      };
    },
    166: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return h;
      });
      var t = a(0),
        o = a.n(t),
        r = a(19),
        i = a(43),
        l = a(7),
        s = {
          contentMargin: '20px auto 30px',
          maxWidth: '1200px',
          minWidth: '1200px',
          basictTradePageMaxWidth: '1260px',
          basictTradePageMinWidth: '1260px',
          fontSizeSm: '12px',
          fontSizeMd: '14px',
          fontSizeLg: '16px',
          fontSizeXl: '18px',
          fontSizeXxl: '20px',
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 600,
          fontWeightBold: 700,
        };
      const c = {
        bg: '#FBFBFB',
        crosshair: '#888888',
        short: '#e24537',
        shortFill: '#e24537',
        long: '#00c087',
        longFill: '#00c087',
        cta: '#FBFBFB',
        ctaHighlight: '#F5F5F5',
        alert: '#FFD506',
        category: 'light',
        grid: '#E6E6E6',
        lineColor: '#555',
        textColor: '#999',
        maLine: '#f0b90b',
        ma1: '#ffc200',
        ma2: '#6600cc',
        ma3: '#cc0066',
      };
      var d = Object(l.a)({}, s, {
        mode: 'LIGHT',
        exchangeMainBg: '#ececef',
        exchangeSecondBg: '#fff',
        exchangeHeadShadow: 'none',
        exchangeTradePairSearchBg: 'transparent',
        exchangeCommonNumberColor: '#212833',
        exchangeIncrementButtonBorderColor: '#eaecef',
        exchangeMaxAmountBgColor: '#848E9C',
        exchangeMaxAmountColor: '#fff',
        exchangeButtonBorderColor: '#eaecef',
        exchangeButtonHoverBg: 'rgba(240, 185, 11, 0.15)',
        exchangeIconColor: '#959EB1',
        headerBg: '#fff',
        fiatPriceColor: '#333333',
        TxHashColor: '#212833',
        CheckBoxLabelColor: '#48515d',
        thColor: '#d8d8d8',
        qrcodeBg: '#fff',
        exchangeTitleColor: '#48515d',
        headerDropdownBg: '#fff',
        headerDropdownItemHoverBg: '#eaecef',
        headerItemHoverBg: '#eaecef',
        userMenuAddressBg: '#eaecef',
        userMenuAddressTextColor: '#212833',
        dropdownBg: '#fff',
        dropdownItemColor: '#212833',
        dropdownSelectBgColor: 'rgba(234, 236, 239, 0.5)',
        dropdownSelectItemColor: '#48515d',
        dropdownTextDisplayColor: '#fff',
        popupBg: '#fff',
        bg1: '#fff',
        bg2: '#fff',
        inputBgColor: '#fff',
        inputColor: '#212833',
        borderColor: '#DFE2E7',
        selcetItemColor: '#DFE2E7',
        calendarButtonEnable: '#212833',
        calendarButtonDisable: '#48515d',
        greyBg: '#f7f7f7',
        border: '#e6e6e6',
        border1: '#d8d8d8',
        activeBorder: '#f3ba2f',
        boxShadow: '0px 3px 20px 0px rgba(90,102,124,0.2)',
        toolTipBoxShadow: '0 0 12px rgba(0,0,0,.175)',
        activeBg: '#fff9e7',
        boxheadbg: '#f7f7f7',
        tableRowBg: '#fafafa',
        tabBorderColor: '#ddd',
        tabBg: '#fff',
        buttonbg: '#fff',
        chartbuttonbg: '#e6e6e6',
        buttonbgactive: '#f0b90b',
        buttonbgdisabled: '#ddd',
        buttonColorActive: '#f0b90b',
        okButtonBg: '#f0b90b',
        buttonGradient:
          'linear-gradient(90deg, rgba(239, 184, 11, 1) 0%, rgba(251, 218, 60, 1) 100%)',
        cancelButtonBg: '#fff',
        up: '#00c087',
        down: '#e24537',
        upLight: '#00c08766',
        downLight: '#e2453766',
        shallowDigitOpacity: 0.45,
        highlight: '#f0b90b',
        chartTheme: 'chart-white2',
        depthTheme: 'depth-white',
        chartDropdownSeparator: '#f4f4f4',
        fontColor: '#212833',
        fontColor2: '#555',
        fontColor3: '#666',
        fontColor4: '#999',
        fontColor5: '#ccc',
        fontColor6: '#fff',
        formsbg: '#f7f7f7',
        inputBorder: '#e2e2e2',
        formsHeaderbg: 'transparent',
        inputBg: '#fff',
        heading: '#262d33',
        miniSymbolsTabActive: 'rgba(253, 242, 216, 0.75)',
        loadingShadeColor: 'rgba(255,255,255,0.3)',
        errorInputBg: '#f7dee0',
        errorInputBorderColor: '#ef4b5a',
        tooltipBg: '#fff',
        counterColor: '#f5bc00',
        bnbBurning: '#e8b342',
        bnbBurnClose: '#aaa',
        buttonPrimaryColor: '#F0B90B',
        xfersLogoBoxBg: '#23448E',
        lineColor: '#f0f0f0',
        sectionBg: '#fff',
        sectionBorderRadius: '4px',
        sectionBoxShadow: '-4px 4px 10px 0px rgba(0,0,0,0.1)',
        radioBg: '#fff',
        buyButtonBg: '#2ebd85',
        sellButtonBg: '#e24537',
        scrollbarBg: '#fbfbfb',
        scrollbarTrackColor: '#fff',
        scrollbarThumbColor: '#d8d8d8',
        tableOddRowBg: '',
        tableRowHoverBg: 'rgba(253,247,236,1)',
        tableRowHoverTextColor: '#212833',
        bestAskBidColor: '#f0b90b',
        bestAskBidDecoration: 'none',
        exchangeSectionTitleColor: '#212833',
        exchangeTabSelectedColor: '#212833',
        exchangeTabSelectedBg: 'transparent',
        exchangeTabSelectedContent: '""',
        exchangeTabNotSelectedColor: '#21283348',
        inputPlaceholderColor: '#eaecef',
        tradingViewStyle: c,
        tradingViewCssPath:
          '/static/tradingview/themes/tv-light-theme-v1.min.css',
        tradingViewOverrides: {
          volumePaneSize: 'medium',
          'paneProperties.background': c.bg,
          'symbolWatermarkProperties.transparency': 85,
          'scalesProperties.backgroundColor': '#151a1e',
          'scalesProperties.textColor': '#555',
          'paneProperties.vertGridProperties.color': c.grid,
          'paneProperties.horzGridProperties.color': c.grid,
          'paneProperties.crossHairProperties.color': c.crosshair,
          'scalesProperties.lineColor': c.lineColor,
          'symbolWatermarkProperties.color': 'rgba(0, 0, 0, 0)',
          'mainSeriesProperties.style': 1,
          'mainSeriesProperties.candleStyle.upColor': c.long,
          'mainSeriesProperties.candleStyle.downColor': c.short,
          'mainSeriesProperties.candleStyle.drawWick': !0,
          'mainSeriesProperties.candleStyle.drawBorder': !0,
          'mainSeriesProperties.candleStyle.borderColor': '#C400CB',
          'mainSeriesProperties.candleStyle.borderUpColor': c.long,
          'mainSeriesProperties.candleStyle.borderDownColor': c.short,
          'mainSeriesProperties.candleStyle.wickUpColor': c.long,
          'mainSeriesProperties.candleStyle.wickDownColor': c.short,
          'study_Overlay@tv-basicstudies.barStyle.upColor': 'blue',
          'study_Overlay@tv-basicstudies.barStyle.downColor': 'blue',
          'study_Overlay@tv-basicstudies.lineStyle.color': 'blue',
          'study_Overlay@tv-basicstudies.areaStyle.color1': 'blue',
          'study_Overlay@tv-basicstudies.areaStyle.color2': 'blue',
          'study_Overlay@tv-basicstudies.areaStyle.linecolor': 'blue',
        },
        emergencyNotice: {
          wrapBg: '#212121',
          boxBg: '#3d3d3d',
          dotColor: '#f0b90b',
          titleColor: '#fff',
          detailLinkColor: '#f0b90b',
        },
        FormRow: {
          MaxQuantityBoxBg: '#f3ba2e',
          MaxQuantityBoxColor: '#333',
          FiatPriceBoxBg: 'rgba(38, 38, 38, 1)',
          FiatPriceBoxColor: '#fff',
        },
        Download: { bg: '#fff' },
        miniSymbolsFiatPrice: {
          bg: 'rgba(38, 38, 38, 1)',
          color: '#fff',
          shadowColor: 'rgba(51,51,51,0.3)',
          linkHoverColor: '#e8b342',
        },
      });
      const u = {
        bg: '#12161C',
        grid: '#333',
        lineColor: '#28343C',
        short: '#ea0070',
        shortFill: '#ea0070',
        long: '#00C087',
        longFill: '#00C087',
        crosshair: '#626c73',
        cta: '#363D52',
        ctaHighlight: '#414A67',
        alert: '#FFD506',
        category: 'dark',
        textColor: '#999',
        maLine: '#f5bc00',
        ma1: '#ffc200',
        ma2: '#ff00ff',
        ma3: '#cc0066',
      };
      var m = Object(l.a)({}, s, {
        mode: 'DARK',
        exchangeMainBg: '#000',
        exchangeSecondBg: '#12161C',
        exchangeHeadShadow: '1px 3px 5px 0px rgba(11, 14, 17, 1)',
        exchangeTradePairSearchBg: 'rgba(37, 45, 56, 0.4)',
        exchangeCommonNumberColor: '#fff',
        exchangeIncrementButtonBorderColor: 'transparent',
        exchangeButtonBorderColor: 'transparent',
        exchangeButtonHoverBg: 'rgba(240, 185, 11, 0.15)',
        exchangeMaxAmountBgColor: '#f0b90b',
        exchangeMaxAmountColor: '#263147',
        exchangeTitleColor: '#848e9c',
        exchangeIconColor: '#959EB1',
        qrcodeBg: '#252D38',
        exchangeTableTitle: '#48515d',
        exchangeFilterBg: 'rgba(37,45,56,0.4)',
        headerBg: '#12161C',
        headerDropdownBg: '#252D38',
        headerDropdownItemHoverBg: '#212833',
        headerItemHoverBg: 'rgba(33, 40, 51, 0.5)',
        userMenuAddressBg: 'rgba(255, 255, 255, 0.05)',
        userMenuAddressTextColor: 'rgba(255, 255, 255, 0.3)',
        calendarButtonEnable: '#848E9C',
        calendarButtonDisable: '#48515D',
        dropdownBg: '#252D38',
        dropdownItemColor: '#fff',
        dropdownSelectBgColor: 'rgb(33, 40, 51)',
        dropdownSelectItemColor: '#fff',
        dropdownTextDisplayColor: '#fff',
        popupBg: '#252D38',
        menuItemBg: '#252D38',
        fiatPriceColor: '#d4d4d4',
        TxHashColor: '#848E9C',
        CheckBoxLabelColor: '#848E9C',
        thColor: '#48515D',
        bg1: '#1A2132',
        bg2: '#212833',
        inputBgColor: '#252D38',
        inputColor: '#fff',
        boxbg: '#252D38',
        borderColor: '#212833',
        selcetItemColor: '#1A2132',
        border: '#333',
        border1: '#333',
        activeBorder: '#f3ba2f',
        boxShadow: '0px 3px 10px 0px rgba(0, 0, 0, 0.5)',
        scrollTableHDBoxShadow: '0px 3px 10px 0px rgba(0, 0, 0, 0.5)',
        toolTipBoxShadow: '0 0 12px rgba(0,0,0,.175)',
        activeBg: '#1d1d1d',
        tabBorderColor: '#48515D',
        tabBg: '#1d1d1d',
        buttonbg: '#1d1d1d',
        buttonbgactive: '#f0b90b',
        buttonbgdisabled: '#ddd',
        chartbuttonbg: '#12161C',
        chartButtonColorActive: '#fff',
        buttonColorActive: '#f5bc00',
        okButtonBg: '#f0b90b',
        buttonGradient:
          'linear-gradient(90deg, rgba(239, 184, 11, 1) 0%, rgba(251, 218, 60, 1) 100%)',
        cancelButtonBg: '#666',
        up: '#00C087',
        down: '#ea0070',
        upLight: 'rgba(0,192,135,0.15)',
        downLight: 'rgba(234,0,112,0.15)',
        shallowDigitOpacity: 0.5,
        highlight: '#f5bc00',
        chartTheme: 'chart-black-bnb',
        depthTheme: 'depth-black-bnb',
        fontColor: '#fff',
        fontColor1: '#afafaf',
        fontColor2: '#999',
        fontColor3: '#666',
        fontColor5: '#d4d4d4',
        formsbg: '#262626',
        inputBorder: '#333',
        formsHeaderbg: 'transparent',
        inputBg: '#212833',
        heading: '#fff',
        loadingShadeColor: '#1A2132',
        errorInputBg: 'transparent',
        errorInputBorderColor: '#ef4b5a',
        tooltipBg: '#666',
        counterColor: '#f5bc00',
        bnbBurning: '#e8b342',
        bnbBurnClose: '#aaa',
        xfersLogoBoxBg: '#23448E',
        lineColor: '#f0f0f0',
        sectionBg: '#1e2126',
        sectionBorderRadius: '4px',
        sectionBoxShadow: '-4px 4px 10px 0px rgba(0,0,0,0.1)',
        radioBg: '#1e273a',
        buyButtonBg:
          'linear-gradient(90deg, rgba(0, 192, 135, 1), rgba(65, 222, 221, 1))',
        sellButtonBg:
          'linear-gradient(90deg, rgba(234, 0, 112, 1), rgba(252, 84, 179, 1))',
        scrollbarBg: '#12161c',
        scrollbarTrackColor: '#252d38',
        scrollbarThumbColor: '#848e9c',
        tableOddRowBg: '#1b2027',
        tableRowHoverBg: '#252d38',
        tableRowHoverTextColor: '#fff',
        bestAskBidColor: 'currentColor',
        bestAskBidDecoration: 'underline',
        exchangeSectionTitleColor: '#f0b90b',
        exchangeTabSelectedColor: '#f0b90b',
        exchangeTabSelectedBg: 'rgba(240, 185, 11, 0.15)',
        exchangeTabSelectedContent: 'none',
        exchangeTabNotSelectedColor: '#848e9c',
        inputPlaceholderColor: '#848e9c',
        tradingViewStyle: u,
        tradingViewCssPath:
          '/static/tradingview/themes/tv-dark-theme-v1.min.css',
        tradingViewClipPath: 'inset(1px 2px 1px 1px)',
        tradingViewOverrides: {
          volumePaneSize: 'medium',
          'paneProperties.background': u.bg,
          'symbolWatermarkProperties.transparency': 85,
          'scalesProperties.backgroundColor': '#151a1e',
          'scalesProperties.textColor': u.textColor,
          'paneProperties.vertGridProperties.color': u.grid,
          'paneProperties.horzGridProperties.color': u.grid,
          'paneProperties.crossHairProperties.color': u.crosshair,
          'scalesProperties.lineColor': u.lineColor,
          'symbolWatermarkProperties.color': 'rgba(0, 0, 0, 0)',
          'mainSeriesProperties.style': 1,
          'mainSeriesProperties.candleStyle.upColor': u.long,
          'mainSeriesProperties.candleStyle.downColor': u.short,
          'mainSeriesProperties.candleStyle.drawWick': !0,
          'mainSeriesProperties.candleStyle.drawBorder': !0,
          'mainSeriesProperties.candleStyle.borderColor': '#C400CB',
          'mainSeriesProperties.candleStyle.borderUpColor': u.long,
          'mainSeriesProperties.candleStyle.borderDownColor': u.short,
          'mainSeriesProperties.candleStyle.wickUpColor': u.long,
          'mainSeriesProperties.candleStyle.wickDownColor': u.short,
          'study_Overlay@tv-basicstudies.barStyle.upColor': 'blue',
          'study_Overlay@tv-basicstudies.barStyle.downColor': 'blue',
          'study_Overlay@tv-basicstudies.lineStyle.color': 'blue',
          'study_Overlay@tv-basicstudies.areaStyle.color1': 'blue',
          'study_Overlay@tv-basicstudies.areaStyle.color2': 'blue',
          'study_Overlay@tv-basicstudies.areaStyle.linecolor': 'blue',
        },
        emergencyNotice: {
          wrapBg: '#212121',
          boxBg: '#3d3d3d',
          dotColor: '#f5bc00',
          titleColor: '#fff',
          detailLinkColor: '#f5bc00',
        },
        FormRow: {
          MaxQuantityBoxBg: '#f3ba2e',
          MaxQuantityBoxColor: '#333',
          FiatPriceBoxBg: '#1d1d1d',
          FiatPriceBoxColor: 'white',
        },
        Modal: {
          modalTitleBg: '#fff',
          modalTitleFontColor: '#fff',
          modalBoxBg: '#666',
          okButtonBg: '#f0b90b',
          okButtonColor: '#fff',
          okButtonBorderColor: '#f0b90b',
          cancelButtonBg: '#999',
          cancelButtonColor: '#fff',
          cancelButtonBorderColor: '#999',
        },
        Download: { bg: 'transparent' },
        miniSymbolsFiatPrice: {
          bg: '#666',
          color: '#fff',
          shadowColor: 'rgba(51,51,51,0.3)',
          linkHoverColor: '#e8b342',
        },
      });
      const h = ({ children: e, theme: n }) => {
        const a = Object(t.useMemo)(
            () => ({
              variant: 'light' === n ? 'light' : 'dark',
              localTheme: 'light' === n ? d : m,
            }),
            [n]
          ),
          l = a.variant,
          s = a.localTheme;
        return o.a.createElement(
          r.f,
          { family: Object(i.a)() ? 'sea' : 'gold', variant: l, localTheme: s },
          o.a.createElement(r.n, { position: 'top-right' }),
          o.a.createElement(r.e, null),
          e
        );
      };
    },
    167: function (e, n, a) {
      'use strict';
      (function (e) {
        a.d(n, 'b', function () {
          return s;
        }),
          a.d(n, 'c', function () {
            return c;
          }),
          a.d(n, 'a', function () {
            return d;
          });
        var t = a(5),
          o = a.n(t),
          r = a(9),
          i = a(80),
          l = a(11);
        const s = (function () {
            var e = Object(r.a)(
              o.a.mark(function e() {
                var n, a;
                return o.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ('undefined' !== typeof window) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt('return', {});
                      case 2:
                        return (
                          (e.next = 4),
                          null === (n = window.BinanceChain) || void 0 === n
                            ? void 0
                            : n.request({ method: 'eth_requestAccounts' })
                        );
                      case 4:
                        return (a = e.sent), e.abrupt('return', a[0]);
                      case 6:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          c = (function () {
            var e = Object(r.a)(
              o.a.mark(function e() {
                var n, a;
                return o.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a =
                            'mainnet' === l.c ? 'bbc-mainnet' : 'bbc-testnet'),
                          (e.next = 3),
                          null === (n = window.BinanceChain) || void 0 === n
                            ? void 0
                            : n.switchNetwork(a)
                        );
                      case 3:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          d = (n, a, t) =>
            (function () {
              var l = Object(r.a)(
                o.a.mark(function r(l, s) {
                  var c, d, u, m, h;
                  return o.a.wrap(
                    function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (o.prev = 0),
                              n && n(l),
                              (o.next = 4),
                              null === (c = window.BinanceChain) || void 0 === c
                                ? void 0
                                : c.bbcSignTx({ tx: l, signMsg: s })
                            );
                          case 4:
                            if (
                              ((d = o.sent),
                              (u = d.pubKey),
                              (m = d.signature),
                              a && a(),
                              !u || !m)
                            ) {
                              o.next = 11;
                              break;
                            }
                            return (
                              (h = i.crypto.getPublicKey(u)),
                              o.abrupt(
                                'return',
                                l.addSignature(h, e.from(m, 'hex'))
                              )
                            );
                          case 11:
                            o.next = 17;
                            break;
                          case 13:
                            throw (
                              ((o.prev = 13),
                              (o.t0 = o.catch(0)),
                              t && t(o.t0),
                              new Error(o.t0.error))
                            );
                          case 17:
                          case 'end':
                            return o.stop();
                        }
                    },
                    r,
                    null,
                    [[0, 13]]
                  );
                })
              );
              return function (e, n) {
                return l.apply(this, arguments);
              };
            })();
      }.call(this, a(10).Buffer));
    },
    187: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return t;
      }),
        a.d(n, 'c', function () {
          return i;
        }),
        a.d(n, 'b', function () {
          return l;
        });
      const t = Object.freeze({
          en: 'English',
          cn: '\u4e2d\u6587',
          kr: '\ud55c\uad6d\uc5b4',
          in: 'Indonesian',
          ru: '\u0420\u043e\u0441\u0441\u0438\u044f',
          tr: 'T\xfcrkiye',
          vn: 'Vi\u1ec7t nam',
          es: 'Espa\xf1ol',
        }),
        o =
          (Object.freeze({
            en: 'en',
            cn: 'zh-Hans',
            tw: 'zh-Hant',
            kr: 'ko',
            vn: 'vi',
          }),
          Object.freeze({
            en: 'en',
            cn: 'zh',
            tw: 'zh_TW',
            kr: 'ko',
            ru: 'ru',
            vn: 'vi',
            nl: 'nl_NL',
          })),
        r =
          (Object.freeze({
            en: 'en',
            cn: 'zh-CN',
            tw: 'zh-TW',
            kr: 'ko',
            ru: 'ru',
            vn: 'vi',
            nl: 'nl-NL',
            pt: 'pt',
          }),
          Object.freeze({
            en: 'en-us',
            cn: 'zh-cn',
            tw: 'zh-tw',
            kr: 'ko',
            ru: 'ru',
            vn: 'vi',
            it: 'it',
            es: 'es',
            de: 'de',
            fr: 'fr',
          })),
        i = (e = 'en') => o[e] || e,
        l = (e = 'en') => r[e] || e;
    },
    188: function (e, n, a) {
      'use strict';
      a.d(n, 'b', function () {
        return t;
      }),
        a.d(n, 'c', function () {
          return o;
        }),
        a.d(n, 'a', function () {
          return r;
        }),
        a.d(n, 'd', function () {
          return i;
        }),
        a.d(n, 'e', function () {
          return l;
        }),
        a.d(n, 'f', function () {
          return s;
        });
      const t = 'SET_REMOVE_WALLET',
        o = 'SET_RENAME_WALLET',
        r = 'SET_GOOGLE_DRIVE_KEYSTORES',
        i = 'SET_SELECTED_WALLET',
        l = (e) => (n) => n({ type: t, data: e }),
        s = (e) => (n) => n({ type: i, data: e });
    },
    192: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return s;
      }),
        a.d(n, 'b', function () {
          return c;
        }),
        a.d(n, 'c', function () {
          return m;
        }),
        a.d(n, 'd', function () {
          return h;
        });
      var t = a(5),
        o = a.n(t),
        r = a(9),
        i = a(11),
        l = a(33);
      const s = 'SET_BLOCK_FEE_HISTORY',
        c = 'SET_FEES',
        d = (e) => (n) => {
          n({ type: s, data: e });
        },
        u = (e) => (n) => {
          n({ type: c, data: e });
        },
        m = (e) =>
          (function () {
            var n = Object(r.a)(
              o.a.mark(function n(a) {
                var t;
                return o.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            a(Object(l.i)(!0)),
                            (n.next = 4),
                            i.e.getBlockExchangeFees(e)
                          );
                        case 4:
                          (t = n.sent),
                            a(d(t)),
                            a(Object(l.i)(!1)),
                            (n.next = 13);
                          break;
                        case 9:
                          (n.prev = 9),
                            (n.t0 = n.catch(0)),
                            console.log(
                              'status:'
                                .concat(n.t0.status, ' message: ')
                                .concat(n.t0.statusText)
                            ),
                            a(Object(l.i)(!1));
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })(),
        h = () =>
          (function () {
            var e = Object(r.a)(
              o.a.mark(function e(n) {
                var a;
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), i.e.getFees();
                        case 3:
                          (a = e.sent), n(u(a)), (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            console.log(
                              'status:'
                                .concat(e.t0.status, ' message: ')
                                .concat(e.t0.statusText)
                            );
                        case 10:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
    },
    198: function (e, n, a) {
      'use strict';
      var t = a(1);
      const o = t.e.div.withConfig({
        displayName: 'FlexBox',
        componentId: 'sc-14wq17r-0',
      })(
        [
          'align-items:',
          ';background:',
          ';display:flex;flex:',
          ';flex-basis:',
          ';flex-direction:',
          ';flex-wrap:',
          ';height:',
          ';justify-content:',
          ';margin:',
          ';padding:',
          ';align-content:',
          ';',
        ],
        ({ align: e }) => e,
        ({ bg: e, theme: n }) => ('theme' === e ? n.boxbg : ''),
        ({ flex: e }) => e,
        ({ basis: e }) => e,
        ({ direction: e }) => e,
        ({ wrap: e }) => e || 'wrap',
        ({ height: e }) => e,
        ({ justify: e }) => e,
        ({ margin: e }) => e,
        ({ padding: e }) => e,
        ({ content: e }) => e
      );
      Object(t.e)(o).withConfig({
        displayName: 'FlexBox__BorderedFlexBox',
        componentId: 'sc-14wq17r-1',
      })(
        [
          'border:1px solid ',
          ';height:',
          ';padding:0;margin:',
          ';user-select:none;',
        ],
        ({ theme: e }) => e.border || '#eee',
        ({ height: e }) => e,
        ({ margin: e }) => e || '5px'
      );
      n.a = o;
    },
    199: function (e, n, a) {
      'use strict';
      var t = a(0),
        o = a.n(t),
        r = a(535),
        i = (a(912), a(200)),
        l = a.n(i),
        s = a(526),
        c = a.n(s),
        d = a(64);
      const u = (e) => {
        const n = document.createElement('div');
        (n.className = 'alert'),
          (n.innerText = e),
          document.body.appendChild(n),
          setTimeout(() => {
            document.body.removeChild(n);
          }, 3e3);
      };
      let m = null;
      r.a.newInstance({}, (e) => {
        m || (m = e);
      });
      n.a = {
        info: (e) => {
          Object(d.c)()
            ? u(e)
            : m.notice({
                content: o.a.createElement(
                  'span',
                  { className: 'notification' },
                  o.a.createElement('img', { src: c.a }),
                  e
                ),
              });
        },
        warn: (e) => {
          Object(d.c)()
            ? u(e)
            : m.notice({
                duration: '5',
                content: o.a.createElement(
                  'span',
                  { className: 'notification' },
                  o.a.createElement('img', { src: l.a }),
                  e
                ),
              });
        },
      };
    },
    200: function (e, n, a) {
      e.exports = a.p + 'static/media/error-icon.7ab66c27.svg';
    },
    202: function (e, n, a) {
      'use strict';
      var t = a(0),
        o = a.n(t),
        r = a(1),
        i = a(226),
        l = a(37);
      const s = r.e.div.withConfig({
        displayName: 'Loading__Wrap',
        componentId: 'sc-1cu75yn-0',
      })(
        [
          'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:',
          ';',
        ],
        l.a.loading
      );
      n.a = () => o.a.createElement(s, null, o.a.createElement(i.a, null));
    },
    226: function (e, n, a) {
      'use strict';
      var t = a(0),
        o = a.n(t),
        r = a(1);
      const i = Object(r.f)([
          '0%,40%,100%{transform:scaleY(0.4);}20%{transform:scaleY(1.0);}',
        ]),
        l = r.e.div.withConfig({
          displayName: 'Spinner',
          componentId: 'sc-17mrgwr-0',
        })(
          [
            'width:50px;height:35px;text-align:center;font-size:10px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);& > div{background-color:#f5bc00;height:100%;width:3px;display:inline-block;margin:0 3px;animation:',
            ' 1.2s infinite ease-in-out;}& > .rect2{animation-delay:-1.1s;}& > .rect3{animation-delay:-1s;}& > .rect4{animation-delay:-0.9s;}& > .rect5{animation-delay:-0.8s;}',
          ],
          i
        );
      n.a = () =>
        o.a.createElement(
          l,
          null,
          o.a.createElement('div', { className: 'rect2' }),
          o.a.createElement('div', { className: 'rect3' }),
          o.a.createElement('div', { className: 'rect4' }),
          o.a.createElement('div', { className: 'rect5' })
        );
    },
    241: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return t;
      }),
        a.d(n, 'b', function () {
          return o;
        }),
        a.d(n, 'c', function () {
          return r;
        });
      const t = () => {
          let e = window.sessionStorage.getItem('user');
          return (e = (e && JSON.parse(e)) || {}), e.address;
        },
        o = () => {
          let e = window.localStorage.getItem('favorites');
          return (
            (e = (e && JSON.parse(e)) || {
              favorites_logined: [],
              favorites_unLogined: [],
            }),
            e
          );
        },
        r = () => {
          const e = t(),
            n = o();
          let a = n.favorites_unLogined;
          var r;
          return e
            ? ((a =
                null === (r = n.favorites_logined) || void 0 === r
                  ? void 0
                  : r.find((n) => {
                      var a;
                      return (
                        (null === (a = n[e]) || void 0 === a
                          ? void 0
                          : a.length) > 0
                      );
                    })),
              a ? a[e] : [])
            : a;
        };
    },
    248: function (e, n, a) {
      'use strict';
      var t = a(5),
        o = a.n(t),
        r = a(9),
        i = a(8),
        l = a(0),
        s = a.n(l),
        c = a(24),
        d = a(41),
        u = a(61),
        m = a(180),
        h = a.n(m),
        p = a(80),
        g = a(50),
        k = a(56),
        y = a(140),
        b = a(35),
        f = a(325),
        w = a(199),
        x = a(1),
        v = a(247),
        C = a.n(v);
      const T = x.e.div.withConfig({
        displayName: 'IntervalDate__DateTime',
        componentId: 'duw3pg-0',
      })([
        'color:#848e9c;font-size:12px;height:18px;line-height:18px;@media (max-width:768px){display:none;}',
      ]);
      class P extends l.PureComponent {
        constructor(...e) {
          super(...e),
            Object(i.a)(this, 'state', {
              datetime: C()(new Date()).format('YYYY-MM-DD HH:mm:ss'),
            });
        }
        componentDidMount() {
          this.intervalHandler = setInterval(() => {
            this.setState({
              datetime: C()(new Date()).format('YYYY-MM-DD HH:mm:ss'),
            });
          }, 1e3);
        }
        componentWillUnmount() {
          clearInterval(this.intervalHandler);
        }
        render() {
          const e = this.state.datetime;
          return s.a.createElement(T, null, e);
        }
      }
      var O = P,
        E = a(11),
        B = a(64),
        S = a(43);
      const M = x.e.div.withConfig({
          displayName: 'NetWork__Wrapper',
          componentId: 'sc-101q78y-0',
        })(
          [
            'display:flex;position:relative;color:',
            ";font-size:12px;height:14px;line-height:20px;align-items:center;cursor:pointer;.dropdown{transition:transform 0.3s ease-in;}&:hover{ul{display:block;li{position:relative;}}.dropdown{transform:rotate(180deg);}}&:after{content:' ';position:absolute;height:30px;width:100%;top:10px;}@media (max-width:768px){color:#fff;font-size:16px;&:hover{ul{display:none;}}}",
          ],
          ({ theme: e }) => e.up
        ),
        A = x.e.div.withConfig({
          displayName: 'NetWork__Cycle',
          componentId: 'sc-101q78y-1',
        })(
          [
            'width:6px;height:6px;border-radius:50%;background:',
            ';margin-right:5px;',
          ],
          ({ theme: e }) => e.up
        ),
        W = x.e.ul.withConfig({
          displayName: 'NetWork__Accelerate',
          componentId: 'sc-101q78y-2',
        })(
          [
            'position:absolute;left:0;top:20px;background:',
            ";display:none;box-shadow:0px 0px 10px 0px rgba(0,0,0,0.5);@keyframes appear{0%{height:0;opacity:0;}40%{height:17px;opacity:0;}100%{height:34px;opacity:1;}}&:before{content:' ';position:absolute;width:0;height:0;border-width:0 10px 10px;border-style:solid;border-color:transparent transparent rgba(33,40,51,1);top:-6px;z-index:-1;left:75px;}li{display:flex;padding:10px 15px;font-size:13px;width:220px;animation:appear 0.2s ease-in-out;background:",
            ';.cycle{background:#48515d;margin-top:2px;}.name{line-height:10px;margin-left:3px;color:',
            ';}.url{color:#848e9c;margin-left:3px;margin-top:5px;white-space:nowrap;}&:hover{background:',
            ';color:',
            ';.name{color:',
            ';}.cycle{background:',
            ';}}&.on{background-color:',
            ';.cycle{background:',
            ';}.name{color:',
            ';}}}',
          ],
          ({ theme: e }) => e.dropdownBg,
          ({ theme: e }) => e.dropdownBg,
          ({ theme: e }) => e.dropdownItemColor,
          ({ theme: e }) => e.dropdownSelectBgColor,
          ({ theme: e }) => e.highlight,
          ({ theme: e }) => e.highlight,
          ({ theme: e }) => e.highlight,
          ({ theme: e }) => e.dropdownSelectBgColor,
          ({ theme: e }) => e.up,
          ({ theme: e }) => e.up
        ),
        z = x.e.div.withConfig({
          displayName: 'NetWork__MobileWrap',
          componentId: 'sc-101q78y-3',
        })(
          [
            'color:',
            ';min-width:250px;max-width:450px;padding:15px;box-sizing:border-box;background:',
            ';box-shadow:',
            ';position:fixed;top:50%;left:50%;transform:',
            ';transition:transform 0.3s ease;border-radius:3px;@keyframes networkSlideUp{0%{transform:translate(-50%,-250%);}40%{transform:translate(-50%,-100%);}100%{transform:translate(-50%,-50%);}}',
          ],
          ({ theme: e }) => e.fontColor || 'black',
          ({ theme: e }) => e.popupBg || '#fff',
          ({ theme: e }) => e.boxShadow,
          ({ hide: e }) =>
            e ? 'translate(-50%, -250%)' : 'translate(-50%, -50%)'
        ),
        D = Object(x.e)(W).withConfig({
          displayName: 'NetWork__AccelerateMobile',
          componentId: 'sc-101q78y-4',
        })([
          'display:block;position:relative;left:0;top:0;background:transparent;box-shadow:none;li{margin-bottom:10px;font-size:16px;width:260px;position:relative;.url{line-height:30px;}@media (max-width:320px){width:240px;font-size:14px;}}',
        ]),
        _ = x.e.div.withConfig({
          displayName: 'NetWork__Close',
          componentId: 'sc-101q78y-5',
        })(
          [
            'position:absolute;top:8px;right:8px;cursor:pointer;color:#848e9c;line-height:20px;&:hover{color:',
            ';}',
          ],
          ({ theme: e }) => e.highlight
        ),
        I = x.e.div.withConfig({
          displayName: 'NetWork__Latency',
          componentId: 'sc-101q78y-6',
        })(
          ['position:absolute;right:10px;top:5px;color:', ';'],
          (e) => e.color
        ),
        N = (e) =>
          'Accelerated '.concat(-1 === E.b.indexOf(e) ? 1 : E.b.indexOf(e) + 1);
      class K extends s.a.Component {
        constructor(e) {
          super(e),
            Object(i.a)(this, '_selectNetwork', (e) => {
              this.setState({ current: e }, () => {
                if (
                  (window.sessionStorage.setItem('network', e), Object(S.a)())
                ) {
                  window.ipcRenderer.send('reload');
                } else Object(B.e)();
              });
            }),
            Object(i.a)(this, '_close', () => {
              const e = this.props.close;
              this.setState({ hide: !0 }, () => {
                setTimeout(() => {
                  e();
                }, 300);
              });
            }),
            (this.state = { current: E.f || E.b[0], hide: !1, apiLatency: {} });
        }
        componentDidMount() {
          this._pingNode();
        }
        _pingNode() {
          var e = this;
          const n = {};
          let a = 2e5,
            t = E.b[0];
          E.b.forEach(
            (function () {
              var i = Object(r.a)(
                o.a.mark(function r(i, l) {
                  var s, c, d;
                  return o.a.wrap(
                    function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (s = new Date().getTime()),
                              (o.prev = 1),
                              (o.next = 4),
                              E.e.ping('https://'.concat(i))
                            );
                          case 4:
                            (c = new Date().getTime()),
                              (d = c - s),
                              (o.next = 11);
                            break;
                          case 8:
                            (o.prev = 8), (o.t0 = o.catch(1)), (d = 'error');
                          case 11:
                            (n[i] = d),
                              e.setState({ apiLatency: n }),
                              d < a && ((a = d), (t = E.f || i)),
                              l === E.b.length - 1 &&
                                (E.e.setBaseUri(t), e.setState({ current: t }));
                          case 15:
                          case 'end':
                            return o.stop();
                        }
                    },
                    r,
                    null,
                    [[1, 8]]
                  );
                })
              );
              return function (e, n) {
                return i.apply(this, arguments);
              };
            })()
          );
        }
        render() {
          const e = this.props.theme,
            n = this.state,
            a = n.current,
            t = n.hide,
            o = n.apiLatency,
            r = N(a),
            i = E.b.map((n, t) => {
              let r = e.up;
              const i = o[n];
              return (
                i > 1e3 && i < 2e3 && (r = e.highlight),
                i >= 2e3 && (r = e.down),
                'error' === i && (r = e.down),
                s.a.createElement(
                  'li',
                  {
                    key: t,
                    className: a === n ? 'on' : '',
                    onClick: () => {
                      this._selectNetwork(n, t);
                    },
                  },
                  s.a.createElement(A, { className: 'cycle' }),
                  s.a.createElement(
                    'div',
                    null,
                    s.a.createElement(
                      'div',
                      { className: 'name' },
                      'Accelerated '.concat(t + 1)
                    ),
                    s.a.createElement('div', { className: 'url' }, n)
                  ),
                  s.a.createElement(
                    I,
                    { color: r },
                    'error' === i ? 'Network Issue' : ''.concat(i || 0, ' ms')
                  )
                )
              );
            });
          return s.a.createElement(
            s.a.Fragment,
            null,
            Object(B.c)()
              ? s.a.createElement(
                  z,
                  { hide: t },
                  s.a.createElement(D, null, i),
                  s.a.createElement(
                    _,
                    { onClick: this._close },
                    s.a.createElement(b.a, { type: 'close' })
                  )
                )
              : s.a.createElement(
                  M,
                  null,
                  s.a.createElement(A, null),
                  s.a.createElement('span', null, r),
                  '\xa0\xa0',
                  s.a.createElement(
                    'span',
                    { className: 'dropdown' },
                    '\u25be'
                  ),
                  s.a.createElement(W, null, i)
                )
          );
        }
      }
      Object(i.a)(K, 'defaultProps', { close: () => {} });
      var H = Object(x.h)(K),
        F = a(45),
        j = a(33),
        L = a(92),
        R = a(57),
        U = a(69),
        q = a(119),
        V = a(66),
        G = a(335),
        Y = a(198),
        X = a(37);
      const Q = x.e.div.withConfig({
          displayName: 'MenuMobile__MobileMenuLayout',
          componentId: 'wouq0v-0',
        })(
          [
            'position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0.4);z-index:',
            ';',
          ],
          X.a.mobileLayout
        ),
        J = x.e.div.withConfig({
          displayName: 'MenuMobile__MobileMenu',
          componentId: 'wouq0v-1',
        })(
          [
            'width:300px;background:#12161c;position:absolute;top:0;bottom:0;right:0;font-size:16px;padding-top:50px;transform:',
            ";transition:transform 0.3s linear;animation:bounce 0.3s linear;ul{margin-left:40px;border-bottom:1px solid #212833;padding:10px 0;li.current{color:#f0b90b;&:before{content:' ';position:absolute;display:block;height:2px;width:12px;left:0;bottom:6px;background:#f0b90b;}}li{height:40px;line-height:40px;position:relative;a{height:100%;display:block;color:inherit;font-size:16px;&:hover{text-decoration:none;}}}li.withSubMenus{height:auto;}}.footer{position:absolute;bottom:0;left:40px;right:0;}.docs{margin-left:30px;a{color:#848e9c;font-size:12px;}}.forums{margin-left:30px;a{color:#848e9c;font-size:12px;}}@media (max-width:768px){display:block;.subMenus{display:block;position:relative;top:0;li{text-align:left;}}}@keyframes bounce{0%{transform:translateX(100%);}40%{transform:translateX(50%);}100%{transform:translateX(0%);}}",
          ],
          ({ hide: e }) => (e ? 'translate(100%,0)' : 'translate(0,0)')
        ),
        Z = x.e.div.withConfig({
          displayName: 'MenuMobile__MenuInfo',
          componentId: 'wouq0v-2',
        })(['position:relative;']),
        $ = x.e.div.withConfig({
          displayName: 'MenuMobile__WalletInfo',
          componentId: 'wouq0v-3',
        })(
          [
            'display:',
            ';padding-left:30px;margin-bottom:20px;.address-info{line-height:20px;margin-left:10px;h2{font-size:18px;}}.address{width:180px;text-overflow:ellipsis;overflow:hidden;margin-right:10px;color:#848e9c;}',
          ],
          ({ show: e }) => (e ? 'flex' : 'none')
        ),
        ee = x.e.div.withConfig({
          displayName: 'MenuMobile__CloseWrap',
          componentId: 'wouq0v-4',
        })([
          "position:absolute;right:15px;top:0;&:before{content:' ';position:absolute;display:block;top:0;bottom:0;left:-20px;width:60px;}",
        ]),
        ne = x.e.div.withConfig({
          displayName: 'MenuMobile__NetworkNodes',
          componentId: 'wouq0v-5',
        })([
          'padding-left:40px;margin-bottom:30px;p{font-size:13px;color:#48515d;}.wrap{line-height:6px;span{margin-left:5px;}}',
        ]);
      class ae extends l.PureComponent {
        constructor(e) {
          super(e),
            Object(i.a)(this, 'layoutRef', s.a.createRef()),
            Object(i.a)(this, '_clickMenu', (e) => {
              this.props.history.push(e);
            }),
            Object(i.a)(this, '_buildMenus', () => {
              const e = this.state,
                n = e.menuGroups,
                a = e.path,
                t = e.notLoginMenuGroup,
                o = this.props,
                r = o.address,
                i = o.isIpValid,
                l = [];
              return (
                (r ? n : t).forEach((e) => {
                  if ('three' === e.group && !i) return;
                  const n = e.menus.map((e, n) =>
                    s.a.createElement(
                      'li',
                      {
                        className: a === e.path ? 'current' : '',
                        key: n,
                        onClick: () => {
                          this._clickMenu(e.path);
                        },
                      },
                      e.text
                    )
                  );
                  l.push(s.a.createElement('ul', { key: e.group }, n));
                }),
                l
              );
            }),
            Object(i.a)(this, '_copyAddress', () => {
              w.a.info('copy success');
            }),
            Object(i.a)(this, '_hide', () => {
              const e = this.props.close;
              this.setState({ hide: !0 }),
                setTimeout(() => {
                  e && e();
                }, 100);
            }),
            Object(i.a)(this, '_clickLayout', (e) => {
              e.target === this.layoutRef.current && this._hide();
            }),
            Object(i.a)(this, '_showNodes', () => {
              this.setState({ showNodes: !0, hide: !0 });
            }),
            Object(i.a)(this, '_hideNodes', () => {
              this.setState({ showNodes: !1 }), this._hide();
            }),
            (this.state = {
              path: '/',
              hide: !1,
              showNodes: !1,
              menuGroups: [
                {
                  group: 'one',
                  menus: [
                    { text: 'Markets', path: '/' },
                    { text: 'Exchange', path: '/trade' },
                  ],
                },
                {
                  group: 'two',
                  menus: [
                    { text: 'Balances', path: '/balances' },
                    { text: 'Open Orders', path: '/openOrders' },
                    { text: 'History', path: '/history' },
                  ],
                },
                {
                  group: 'three',
                  menus: [
                    { text: 'Change Wallet', path: '/unlock' },
                    { text: 'Create New Wallet', path: '/create' },
                  ],
                },
              ],
              notLoginMenuGroup: [
                {
                  group: 'one',
                  menus: [
                    { text: 'Markets', path: '/' },
                    { text: 'Exchange', path: '/trade' },
                  ],
                },
                {
                  group: 'three',
                  menus: [
                    { text: 'Create New Wallet', path: '/create' },
                    { text: 'Unlock Wallet', path: '/unlock' },
                  ],
                },
              ],
            });
        }
        componentDidMount() {
          const e = this.props.location.pathname.split('/'),
            n = Object(V.a)(e, 2)[1];
          this.setState({ path: '/'.concat(n), currentNetWork: E.f }),
            (document.body.style.overflow = 'hidden');
        }
        componentWillUnmount() {
          document.body.style.overflow = '';
        }
        render() {
          const e = this.props,
            n = e.address,
            a = e.closeWallet,
            t = this.state,
            o = t.hide,
            r = t.showNodes,
            i = t.currentNetWork,
            l = this._buildMenus(),
            c = N(i);
          return s.a.createElement(
            Q,
            { ref: this.layoutRef, onClick: this._clickLayout },
            s.a.createElement(
              J,
              { hide: o },
              s.a.createElement(
                ee,
                { onClick: this._hide },
                s.a.createElement(b.a, { type: 'close', size: '20' })
              ),
              s.a.createElement(
                $,
                { show: !!n },
                s.a.createElement(b.a, { type: 'account', size: '40' }),
                s.a.createElement(
                  'div',
                  { className: 'address-info' },
                  s.a.createElement('h2', null, 'Wallet'),
                  s.a.createElement(
                    Y.a,
                    null,
                    s.a.createElement('div', { className: 'address' }, n),
                    s.a.createElement(
                      G.CopyToClipboard,
                      { text: n, onCopy: this._copyAddress },
                      s.a.createElement(
                        'span',
                        { title: 'copy address' },
                        s.a.createElement(b.a, { type: 'copy' })
                      )
                    )
                  )
                )
              ),
              s.a.createElement(
                ne,
                { onClick: this._showNodes },
                s.a.createElement('p', null, 'Choose Node'),
                s.a.createElement(
                  Y.a,
                  { className: 'wrap' },
                  s.a.createElement(A, null),
                  s.a.createElement('span', null, c),
                  s.a.createElement('span', null, '\u25be')
                )
              ),
              s.a.createElement(Z, null, l),
              s.a.createElement(
                Y.a,
                { className: 'footer' },
                n && s.a.createElement('div', { onClick: a }, 'Close Wallet'),
                s.a.createElement(
                  'div',
                  { className: 'docs' },
                  s.a.createElement(
                    'a',
                    {
                      href: 'https://docs.binance.org/',
                      target: '_blank',
                      rel: 'noopener',
                    },
                    'Docs/FAQ'
                  )
                ),
                s.a.createElement(
                  'div',
                  { className: 'forums' },
                  s.a.createElement(
                    'a',
                    {
                      href: 'https://community.binance.org/',
                      target: '_blank',
                      rel: 'noopener',
                    },
                    'Forums'
                  )
                )
              )
            ),
            r && s.a.createElement(H, { close: this._hideNodes })
          );
        }
      }
      Object(i.a)(ae, 'defaultProps', {
        closeWallet: () => {},
        close: () => {},
        address: '',
        isIpValid: !0,
      });
      var te = Object(d.j)(ae),
        oe = a(93),
        re = a(87),
        ie = a(109),
        le = a(330),
        se = a(474),
        ce = a(200),
        de = a.n(ce);
      const ue = x.e.div.withConfig({
          displayName: 'ConfirmPasswordModalHost__Layer',
          componentId: 'mor4ef-0',
        })(
          [
            'position:fixed;top:0;left:0;right:0;bottom:0;z-index:',
            ';background:rgba(0,0,0,0.5);',
          ],
          X.a.modal
        ),
        me = x.e.div.withConfig({
          displayName: 'ConfirmPasswordModalHost__Wrapper',
          componentId: 'mor4ef-1',
        })(
          [
            'min-width:320px;max-width:450px;padding:30px;box-sizing:border-box;background:',
            ';box-shadow:',
            ';border-radius:3px;position:fixed;top:25%;left:50%;transform:translate(-50%,-50%);',
          ],
          ({ theme: e }) => e.popupBg,
          ({ theme: e }) => e.boxShadow
        ),
        he = x.e.div.withConfig({
          displayName: 'ConfirmPasswordModalHost__Title',
          componentId: 'mor4ef-2',
        })(
          ['font-size:14px;font-weight:bold;color:', ';'],
          ({ theme: e }) => e.fontColor
        ),
        pe = x.e.div.withConfig({
          displayName: 'ConfirmPasswordModalHost__Content',
          componentId: 'mor4ef-3',
        })([
          'padding:20px 0;font-size:16px;margin:20px 0 30px 0;width:400px;@media (min-width:320px) and (max-width:623px){width:280px;}',
        ]),
        ge = x.e.div.withConfig({
          displayName: 'ConfirmPasswordModalHost__Footer',
          componentId: 'mor4ef-4',
        })([
          'display:flex;flex-direction:row;justify-content:flex-end;align-items:center;a{color:#f0b90b;font-size:14px;}',
        ]),
        ke = x.e.div.withConfig({
          displayName: 'ConfirmPasswordModalHost__ErrorMsg',
          componentId: 'mor4ef-5',
        })([
          'color:#f23051;position:absolute;bottom:80px;left:25px;right:0;font-size:14px;display:flex;height:20px;align-items:center;img{width:15px;margin-right:5px;}',
        ]),
        ye = x.e.div.withConfig({
          displayName: 'ConfirmPasswordModalHost__Close',
          componentId: 'mor4ef-6',
        })(
          [
            'position:absolute;top:5px;right:8px;cursor:pointer;line-height:20px;color:',
            ';&:hover{color:#f0b90b;}',
          ],
          ({ theme: e }) => e.fontColor
        );
      class be extends l.Component {
        constructor(e) {
          super(e),
            Object(i.a)(this, '_keydown', (e) => {
              13 === e.keyCode && this._confirm();
            }),
            Object(i.a)(this, '_close', () => {
              const e = this.props;
              (0, e.dispatch)((0, e.setNeedAuth)(!1));
            }),
            Object(i.a)(this, '_confirm', () => {
              document.activeElement.blur();
              const e = this.props.setAccount;
              let n = sessionStorage.getItem('user');
              if (((n = (n && JSON.parse(n)) || {}), n.address && n.keystore)) {
                const a = this.state.password,
                  t = this.props,
                  o = t.dispatch,
                  r = t.triggerElement;
                if (!a)
                  return void this.setState({
                    errMsg: 'password should not be null',
                  });
                this.setState({ loading: !0 }),
                  (this.timeoutHanle1 = setTimeout(() => {
                    try {
                      const t = se.a(n.keystore, a, n.address);
                      o(e({ privateKey: t, cipher: a, flags: n.flags })),
                        (this.timeoutHanle2 = setTimeout(() => {
                          this.setState({ loading: !1 }),
                            r && r.click(),
                            this._close();
                        }, 800));
                    } catch (t) {
                      console.error('Wrong Password!', t),
                        this.setState({
                          errMsg: 'Wrong Password!',
                          loading: !1,
                        });
                    }
                  }, 100));
              }
            }),
            Object(i.a)(this, '_passwordChange', (e) => {
              this.setState({ password: e });
            }),
            (this.state = { password: '', errMsg: '', loading: !1 });
        }
        componentDidMount() {
          window.document.body.addEventListener('keydown', this._keydown);
        }
        componentWillUnmount() {
          clearTimeout(this.timeoutHanle1),
            clearTimeout(this.timeoutHanle2),
            window.document.body.removeEventListener('keydown', this._keydown);
        }
        render() {
          const e = this.props.needAuth,
            n = this.state,
            a = n.errMsg,
            t = n.loading;
          return e
            ? s.a.createElement(
                re.a,
                { animConfig: [{ opacity: [1, 0] }] },
                s.a.createElement(
                  ue,
                  { key: '1' },
                  s.a.createElement(
                    re.a,
                    { leaveReverse: !0, delay: 100, type: ['top', 'bottom'] },
                    s.a.createElement(
                      me,
                      { key: '2' },
                      s.a.createElement(he, null, 'Password'),
                      s.a.createElement(
                        pe,
                        null,
                        s.a.createElement(le.a, {
                          withRules: !1,
                          autoFocus: !0,
                          onChange: this._passwordChange,
                          title: 'Enter your session password',
                        })
                      ),
                      s.a.createElement(
                        ge,
                        null,
                        s.a.createElement(
                          ie.b,
                          {
                            onClick: this._confirm,
                            loading: t,
                            width: '100px',
                            type: 'submit',
                          },
                          s.a.createElement('span', null, 'Confirm')
                        )
                      ),
                      a &&
                        s.a.createElement(
                          ke,
                          null,
                          s.a.createElement('img', { src: de.a, alt: !0 }),
                          s.a.createElement('span', null, a)
                        ),
                      s.a.createElement(
                        ye,
                        { onClick: this._close },
                        s.a.createElement(b.a, { type: 'close', size: '18' })
                      )
                    )
                  )
                )
              )
            : null;
        }
      }
      Object(i.a)(be, 'defaultProps', {
        needAuth: !1,
        setAccount: () => {},
        setNeedAuth: () => {},
        dispatch: () => {},
        triggerElement: null,
      });
      var fe = Object(c.b)(
          ({
            account: { privateKey: e, needAuth: n },
            globalData: { triggerElement: a },
          }) => ({ needAuth: n, privateKey: e, triggerElement: a }),
          (e) => Object(oe.b)({ setAccount: F.e, setNeedAuth: F.f }, e)
        )(be),
        we = a(19),
        xe = a(6),
        ve = a(3);
      const Ce = x.e.div.withConfig({
          displayName: 'walletmodal__Connection',
          componentId: 'z3g2yx-0',
        })(
          ['display:flex;flex-direction:column;margin:-', ' 0;'],
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.small)
        ),
        Te = Object(x.e)(we.g.BinanceChain).withConfig({
          displayName: 'walletmodal__BinanceChain',
          componentId: 'z3g2yx-1',
        })(['font-size:', ';'], ({ theme: e }) =>
          Object(ve.a)(e.honeycomb.size.increased)
        ),
        Pe = Object(x.e)(we.g.WalletConnectColor).withConfig({
          displayName: 'walletmodal__Wallet',
          componentId: 'z3g2yx-2',
        })(['font-size:', ';'], ({ theme: e }) =>
          Object(ve.a)(e.honeycomb.size.large)
        ),
        Oe = x.e.div.withConfig({
          displayName: 'walletmodal__TypeName',
          componentId: 'z3g2yx-3',
        })(['font-size:', ';'], ({ theme: e }) =>
          Object(ve.a)(e.honeycomb.size.reduced)
        ),
        Ee = x.e.div.withConfig({
          displayName: 'walletmodal__ImgWrap',
          componentId: 'z3g2yx-4',
        })(['&,img{width:', ';}'], ({ theme: e }) =>
          Object(ve.a)(e.honeycomb.size.increased)
        ),
        Be = x.e.a.withConfig({
          displayName: 'walletmodal__Option',
          componentId: 'z3g2yx-5',
        })(
          [
            'border-radius:',
            ';padding:',
            ';margin:',
            ' 0;border:1px solid ',
            ';text-align:center;color:',
            ';display:flex;justify-content:space-between;align-items:center;transition:all 0.3s ease;background:',
            ";position:'relative';",
            '{fill:',
            ';}',
            '{fill:',
            ';font-size:',
            ';}',
            '{opacity:',
            ';}',
            '{opacity:',
            ';align-self:flex-start;}&:hover{border-color:',
            ';cursor:',
            ';text-decoration:none;}',
          ],
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.tiny),
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.normal),
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.tiny),
          ({ theme: e, comingSoon: n }) =>
            n
              ? Object(ve.e)(0.7, e.honeycomb.color.bg.input.normal)
              : e.honeycomb.color.bg.input.normal,
          ({ theme: e }) => e.honeycomb.color.text.normal,
          ({ theme: e, comingSoon: n }) =>
            n
              ? Object(ve.e)(0.7, e.honeycomb.color.bg.input.normal)
              : e.honeycomb.color.bg.input.normal,
          Te,
          ({ theme: e }) => e.honeycomb.color.primary.normal,
          Pe,
          ({ theme: e }) => e.honeycomb.color.primary.normal,
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.increased),
          Oe,
          ({ comingSoon: e }) => (e ? 0.3 : 1),
          Ee,
          ({ comingSoon: e }) => (e ? 0.3 : 1),
          ({ theme: e, comingSoon: n }) =>
            n ? 'none' : e.honeycomb.color.primary.normal,
          ({ comingSoon: e }) => (e ? 'not-allowed' : 'pointer')
        ),
        Se = x.e.div.withConfig({
          displayName: 'walletmodal__OptionContent',
          componentId: 'z3g2yx-6',
        })(
          [
            'display:flex;flex-direction:column;text-align:left;padding-right:',
            ';',
          ],
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.tiny)
        ),
        Me = x.e.p.withConfig({
          displayName: 'walletmodal__LeftContent',
          componentId: 'z3g2yx-7',
        })(
          ['color:', ';font-size:', ';'],
          ({ theme: e }) => e.honeycomb.color.text.masked,
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.small)
        ),
        Ae = x.e.div.withConfig({
          displayName: 'walletmodal__Original',
          componentId: 'z3g2yx-8',
        })(
          [
            'display:flex;justify-content:flex-end;padding-top:',
            ';> a{color:',
            ';font-size:',
            ';&:hover{color:',
            ';font-weight:500;text-decoration:none;}}',
          ],
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.increased),
          ({ theme: e }) => e.honeycomb.color.text.primary,
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.reduced),
          ({ theme: e }) => e.honeycomb.color.primary.normal
        ),
        We =
          (x.e.div.withConfig({
            displayName: 'walletmodal__Notice',
            componentId: 'z3g2yx-9',
          })(
            ['color:', ';font-size:', ';margin-top:', ';text-align:center;'],
            ({ theme: e }) => e.honeycomb.color.text.masked,
            ({ theme: e }) => Object(ve.a)(e.honeycomb.size.small),
            ({ theme: e }) =>
              Object(ve.a)(e.honeycomb.size.normal, e.honeycomb.size.small)
          ),
          x.e.div.withConfig({
            displayName: 'walletmodal__WarnMessage',
            componentId: 'z3g2yx-10',
          })(
            ['color:', ';font-size:', ';text-align:center;margin-top:', ';'],
            ({ theme: e }) => e.honeycomb.color.danger.normal,
            ({ theme: e }) => Object(ve.a)(e.honeycomb.size.small),
            ({ theme: e }) =>
              Object(ve.a)(e.honeycomb.size.increased, e.honeycomb.size.small)
          ),
          x.e.div.withConfig({
            displayName: 'walletmodal__BadgeBox',
            componentId: 'z3g2yx-11',
          })(['']),
          x.e.div.withConfig({
            displayName: 'walletmodal__LeftSide',
            componentId: 'z3g2yx-12',
          })(
            [
              'display:flex;flex-direction:row;justify-content:space-between;align-items:center;flex:1;margin-right:',
              ';',
            ],
            ({ theme: e }) => Object(ve.a)(e.honeycomb.size.normal)
          ));
      x.e.div.withConfig({
        displayName: 'walletmodal__ConnectionFailed',
        componentId: 'z3g2yx-13',
      })(
        ['margin-top:', ';color:', ';text-align:center;font-size:', ';'],
        ({ theme: e }) =>
          Object(ve.a)(e.honeycomb.size.increased, e.honeycomb.size.reduced),
        ({ theme: e }) => e.honeycomb.color.danger.normal,
        ({ theme: e }) => Object(ve.a)(e.honeycomb.size.reduced)
      );
      var ze = function ({ open: e, onClose: n }) {
          const a = Object(xe.d)().formatI18nText;
          return s.a.createElement(
            we.i,
            { open: e, onClose: n },
            s.a.createElement(we.i.Header, {
              title: a('createWallet.modal.title'),
            }),
            s.a.createElement(
              we.i.Content,
              null,
              s.a.createElement(
                Ce,
                null,
                s.a.createElement(
                  Be,
                  {
                    href: 'https://chrome.google.com/webstore/detail/binance-chain-wallet/fhbohimaelbohpjbbldcngcnapndodjp',
                    target: '_blank',
                  },
                  s.a.createElement(
                    Se,
                    null,
                    s.a.createElement(
                      We,
                      null,
                      s.a.createElement(
                        Oe,
                        null,
                        a('createWallet.option.install.extension.title')
                      )
                    ),
                    s.a.createElement(
                      Me,
                      null,
                      a('createWallet.option.install.extension.content')
                    )
                  ),
                  s.a.createElement(Ee, null, s.a.createElement(Te, null))
                )
              )
            )
          );
        },
        De = a(167),
        _e = a(72),
        Ie = a(102),
        Ne = a(94),
        Ke = a(112),
        He = a(311);
      function Fe() {
        return (Fe =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var a = arguments[n];
              for (var t in a)
                Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
            }
            return e;
          }).apply(this, arguments);
      }
      function je(e, n) {
        if (null == e) return {};
        var a,
          t,
          o = (function (e, n) {
            if (null == e) return {};
            var a,
              t,
              o = {},
              r = Object.keys(e);
            for (t = 0; t < r.length; t++)
              (a = r[t]), n.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (t = 0; t < r.length; t++)
            (a = r[t]),
              n.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      var Le = s.a.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM29.5 41L29.5 13H34.5V41H29.5ZM29.5 51L29.5 46H34.5V51H29.5Z',
        fill: '#F0B90B',
      });
      const Re = (e) => {
          let n = e.svgRef,
            a = e.title,
            t = je(e, ['svgRef', 'title']);
          return s.a.createElement(
            'svg',
            Fe(
              {
                width: 64,
                height: 64,
                viewBox: '0 0 64 64',
                fill: 'none',
                ref: n,
              },
              t
            ),
            a ? s.a.createElement('title', null, a) : null,
            Le
          );
        },
        Ue = s.a.forwardRef((e, n) =>
          s.a.createElement(Re, Fe({ svgRef: n }, e))
        );
      a.p;
      const qe = x.e.div.withConfig({
          displayName: 'checkWallet__Container',
          componentId: 'sc-1oqw8ni-0',
        })([
          'display:flex;flex-direction:column;justify-content:center;align-items:center;',
        ]),
        Ve = x.e.p.withConfig({
          displayName: 'checkWallet__Text',
          componentId: 'sc-1oqw8ni-1',
        })(
          [
            'font-size:',
            ';line-height:',
            ';color:',
            ';margin-bottom:',
            ';text-align:center;',
          ],
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.reduced),
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.increased),
          ({ theme: e }) => e.honeycomb.color.text.masked,
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.increased)
        ),
        Ge = x.e.a.withConfig({
          displayName: 'checkWallet__DownloadLink',
          componentId: 'sc-1oqw8ni-2',
        })(
          ['color:', ';padding:0 5px;'],
          ({ theme: e }) => e.honeycomb.color.text.primary
        ),
        Ye = x.e.h1.withConfig({
          displayName: 'checkWallet__ContentTitle',
          componentId: 'sc-1oqw8ni-3',
        })(
          [
            'font-size:',
            ';line-height:',
            ';margin-top:',
            ';margin-bottom:',
            ';',
          ],
          Object(ve.a)(16),
          Object(ve.a)(19),
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.normal),
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.small)
        );
      var Xe = ({ open: e, close: n }) => {
        const a = Object(He.detect)(),
          t = Object(xe.d)().formatI18nText,
          o = Object(l.useMemo)(() => {
            switch (a && a.name) {
              case 'firefox':
                return 'https://addons.mozilla.org/en-GB/firefox/addon/binance-chain/';
              case 'chrome':
              default:
                return 'https://chrome.google.com/webstore/detail/binance-chain-wallet/fhbohimaelbohpjbbldcngcnapndodjp?utm_source=chrome-ntp-icon';
            }
          }, [a]);
        return s.a.createElement(
          we.i,
          { open: e, onClose: n },
          s.a.createElement(we.i.Header, null),
          s.a.createElement(
            we.i.Content,
            null,
            s.a.createElement(
              qe,
              null,
              s.a.createElement(Ue, null),
              s.a.createElement(Ye, null, t('checkInstallModal.title')),
              s.a.createElement(
                Ve,
                null,
                t('checkInstallModal.text1'),
                s.a.createElement(
                  Ge,
                  { href: o, target: 'blank' },
                  t('checkInstallModal.link')
                ),
                t('checkInstallModal.text2')
              ),
              s.a.createElement(
                we.a,
                { shape: 'fit', variant: 'primary', htmlTag: 'a', href: o },
                t('checkInstallModal.button.install')
              )
            )
          )
        );
      };
      var Qe = function ({ open: e, onClose: n, onClickUnlock: a }) {
          const t = Object(l.useState)(!1),
            i = Object(V.a)(t, 2),
            d = i[0],
            m = i[1],
            h = Object(c.c)(),
            p = Object(c.d)((e) => e.globalData).deviceInfo,
            k = Object(xe.d)(),
            y = k.locale,
            b = k.formatI18nText,
            f = (function () {
              var e = Object(r.a)(
                o.a.mark(function e() {
                  var a, t, r, i;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            'undefined' === typeof window ||
                            window.BinanceChain
                          ) {
                            e.next = 4;
                            break;
                          }
                          m(!0), (e.next = 12);
                          break;
                        case 4:
                          return (e.next = 6), Object(De.b)();
                        case 6:
                          if (!(a = e.sent).startsWith('0x')) {
                            e.next = 11;
                            break;
                          }
                          return (e.next = 10), Object(De.c)();
                        case 10:
                          return e.abrupt('return');
                        case 11:
                          a &&
                            '' !== a &&
                            ((t = { isExtensionWallet: !0 }),
                            Object(_e.c)(a, { keystore: 'HARDWARE', flags: t }),
                            Object(Ie.b)(p, 'unlock_extension_wallet', a, ''),
                            h(Object(F.d)(a)),
                            h(
                              Object(F.e)({
                                address: a,
                                flags: t,
                                privateKey: 'HARDWARE',
                              })
                            ),
                            (r = Object(g.c)()),
                            (i = {
                              address: a,
                              offset: 0,
                              total: 1,
                              limit: 30,
                            }),
                            h(Object(Ne.d)({ params: i, tokenType: r })),
                            h(
                              Object(Ne.e)({
                                params: i,
                                withLoading: !0,
                                tokenType: r,
                              })
                            ),
                            h(
                              Object(Ke.d)({
                                params: i,
                                withLoading: !0,
                                tokenType: r,
                              })
                            ),
                            n());
                        case 12:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(
              we.i,
              { open: e, onClose: n },
              s.a.createElement(we.i.Header, {
                title: b('unlockWallet.modal.title'),
              }),
              s.a.createElement(
                we.i.Content,
                null,
                s.a.createElement(
                  Ce,
                  null,
                  s.a.createElement(
                    Be,
                    { onClick: f },
                    s.a.createElement(
                      Se,
                      null,
                      s.a.createElement(
                        We,
                        null,
                        s.a.createElement(
                          Oe,
                          null,
                          b('unlockWallet.option.extension.title')
                        )
                      ),
                      s.a.createElement(
                        Me,
                        null,
                        b('unlockWallet.option.extension.content')
                      )
                    ),
                    s.a.createElement(Ee, null, s.a.createElement(Te, null))
                  ),
                  s.a.createElement(
                    Be,
                    { onClick: a },
                    s.a.createElement(
                      We,
                      null,
                      s.a.createElement(
                        Oe,
                        null,
                        b('unlockWallet.option.wallet.connect')
                      )
                    ),
                    s.a.createElement(Ee, null, s.a.createElement(Pe, null))
                  )
                ),
                s.a.createElement(
                  Ae,
                  null,
                  s.a.createElement(
                    u.c,
                    { to: '/'.concat(y, '/unlock') },
                    b('unlockWallet.option.extension.link')
                  )
                )
              )
            ),
            s.a.createElement(Xe, { open: d, close: () => m(!1) })
          );
        },
        Je = (e, n = 5) =>
          e
            ? ''.concat(e.slice(0, n), '...').concat(e.slice(e.length - n))
            : '';
      const Ze = x.e.div.withConfig({
          displayName: 'walletinfo__Container',
          componentId: 'sc-1kzdt04-0',
        })(
          [
            'display:flex;flex-direction:column;color:',
            ';line-height:16px;cursor:pointer;white-space:nowrap;height:100%;width:100%;a{color:',
            ';height:100%;width:100%;display:flex;text-align:left;align-items:center;&:hover{color:',
            ';}}svg{transform:translateY(2px);}',
          ],
          ({ theme: e }) => e.honeycomb.color.text.normal,
          ({ theme: e }) => e.honeycomb.color.text.normal,
          ({ theme: e }) => e.honeycomb.color.text.primary
        ),
        $e = x.e.div.withConfig({
          displayName: 'walletinfo__Profile',
          componentId: 'sc-1kzdt04-1',
        })(
          [
            'margin-top:',
            ';margin-bottom:',
            ';background:',
            ';border-radius:',
            ';padding:',
            ' ',
            ';height:',
            'px;display:flex;flex-direction:column;min-width:',
            ';align-items:flex-start;transition:color 0.3s ease;color:',
            ';cursor:pointer;justify-content:center;svg{transition:color 0.3s ease;fill:',
            ';}',
          ],
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.tiny),
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.tiny),
          ({ theme: e }) => e.honeycomb.color.secondary.normal,
          ({ theme: e }) => Object(ve.a)(e.honeycomb.radius.normal),
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.micro),
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.small),
          ({ theme: e }) => e.honeycomb.size.huge,
          Object(ve.a)(130),
          ({ theme: e }) => e.honeycomb.color.text.normal,
          ({ theme: e }) => e.honeycomb.color.primary.normal
        ),
        en = x.e.div.withConfig({
          displayName: 'walletinfo__ProfileInner',
          componentId: 'sc-1kzdt04-2',
        })(
          [
            'align-items:center;display:flex;font-size:',
            ';font-weight:500;line-height:',
            ';',
          ],
          ({ theme: e }) =>
            Object(ve.a)(e.honeycomb.size.normal, e.honeycomb.size.reduced),
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.increased)
        ),
        nn = x.e.div.withConfig({
          displayName: 'walletinfo__ProfileInnerText',
          componentId: 'sc-1kzdt04-3',
        })(
          [
            'display:flex;font-size:',
            ';line-height:',
            ';@media (max-width:',
            '){font-size:',
            ';}',
          ],
          ({ theme: e }) =>
            Object(ve.a)(e.honeycomb.size.reduced, e.honeycomb.size.reduced),
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.normal),
          Object(ve.a)(767),
          ({ theme: e }) => Object(ve.a)(10, e.honeycomb.size.reduced)
        ),
        an = x.e.div.withConfig({
          displayName: 'walletinfo__Address',
          componentId: 'sc-1kzdt04-4',
        })(
          ['display:flex;padding-left:', ';font-size:', ';'],
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.micro),
          ({ theme: e }) =>
            Object(ve.a)(e.honeycomb.size.reduced, e.honeycomb.size.reduced)
        ),
        tn = Object(x.e)(an).withConfig({
          displayName: 'walletinfo__HighlightedAddress',
          componentId: 'sc-1kzdt04-5',
        })(['color:', ';'], ({ theme: e }) => e.honeycomb.color.text.primary),
        on = Object(x.e)(we.g.BinanceChain).withConfig({
          displayName: 'walletinfo__BinanceWalletIcon',
          componentId: 'sc-1kzdt04-6',
        })(['font-size:', ';'], ({ theme: e }) =>
          Object(ve.a)(e.honeycomb.size.reduced, e.honeycomb.size.reduced)
        ),
        rn = Object(x.e)(we.g.WalletConnectColor).withConfig({
          displayName: 'walletinfo__WalletConnectColorIcon',
          componentId: 'sc-1kzdt04-7',
        })(['font-size:', ';'], ({ theme: e }) =>
          Object(ve.a)(20, e.honeycomb.size.reduced)
        ),
        ln = x.e.div.withConfig({
          displayName: 'walletinfo__IconContainer',
          componentId: 'sc-1kzdt04-8',
        })([
          'display:flex;flex-direction:column;width:4em;> a{border-radius:0.5em;}',
        ]),
        sn = x.e.div.withConfig({
          displayName: 'walletinfo__AddressForCopy',
          componentId: 'sc-1kzdt04-9',
        })(['font-size:', ';display:flex;'], ({ theme: e }) =>
          Object(ve.a)(e.honeycomb.size.normal)
        ),
        cn = x.e.div.withConfig({
          displayName: 'walletinfo__AddressLabel',
          componentId: 'sc-1kzdt04-10',
        })(
          ['color:', ';display:flex;font-size:', ';margin-bottom:', ';'],
          ({ theme: e }) => e.honeycomb.color.text.masked,
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.small),
          ({ theme: e }) => Object(ve.a)(e.honeycomb.size.micro)
        ),
        dn = x.e.div.withConfig({
          displayName: 'walletinfo__AddressContainer',
          componentId: 'sc-1kzdt04-11',
        })(
          [
            'display:flex;line-height:',
            ';justify-content:space-between;align-items:center;',
          ],
          Object(ve.a)(18)
        ),
        un = x.e.div.withConfig({
          displayName: 'walletinfo__AddressOperations',
          componentId: 'sc-1kzdt04-12',
        })(['display:flex;font-size:', ';'], ({ theme: e }) =>
          Object(ve.a)(e.honeycomb.size.small)
        ),
        mn = Object(x.e)(we.d.Item).withConfig({
          displayName: 'walletinfo__DropdownItem',
          componentId: 'sc-1kzdt04-13',
        })(
          ['min-width:', ';padding:0 ', ';'],
          Object(ve.a)(226),
          ({ theme: e }) =>
            Object(ve.a)(e.honeycomb.size.normal, e.honeycomb.size.reduced)
        ),
        hn = Object(x.e)(mn).withConfig({
          displayName: 'walletinfo__MainDropdownItem',
          componentId: 'sc-1kzdt04-14',
        })(['height:4em;']);
      var pn = ({ unlock: e, disconnect: n }) => {
        const a = Object(xe.d)().formatI18nText,
          t = Object(c.d)((e) => e).account,
          o = t.address,
          r = t.network,
          i = Object(l.useState)(!1),
          d = Object(V.a)(i, 2),
          u = d[0],
          m = d[1],
          h = s.a.createElement(
            $e,
            null,
            s.a.createElement(
              en,
              null,
              Object(L.c)()
                ? s.a.createElement(rn, null)
                : s.a.createElement(on, null),
              u
                ? s.a.createElement(tn, null, Je(o))
                : s.a.createElement(an, null, Je(o))
            ),
            !Object(L.c)() &&
              s.a.createElement(
                nn,
                null,
                r && '' === r.name ? 'Connecting...' : r.name
              )
          );
        return o && '' !== o
          ? s.a.createElement(
              we.d,
              { target: h, onClick: () => m(!u) },
              s.a.createElement(
                hn,
                null,
                s.a.createElement(
                  Ze,
                  { extended: !0 },
                  s.a.createElement(cn, null, a('walletInfo.address')),
                  s.a.createElement(
                    dn,
                    null,
                    s.a.createElement(sn, null, Je(o, 8)),
                    s.a.createElement(
                      un,
                      null,
                      s.a.createElement(we.k, { size: 'normal' }),
                      s.a.createElement(we.c, { value: o }),
                      s.a.createElement(we.k, { size: 'tiny' }),
                      s.a.createElement(
                        ln,
                        null,
                        s.a.createElement(
                          we.a,
                          {
                            href: ''.concat(E.a, '/address/').concat(o),
                            target: '_blank',
                            variant: 'secondary',
                            shape: 'square',
                            size: 'normal',
                          },
                          s.a.createElement(we.g.ArrowTopRight, null)
                        )
                      )
                    )
                  )
                )
              ),
              s.a.createElement(we.d.Divider, null),
              s.a.createElement(
                mn,
                { onClick: e },
                s.a.createElement(Ze, null, a('walletInfo.unlock'))
              ),
              s.a.createElement(
                mn,
                { onClick: n },
                s.a.createElement(Ze, null, a('walletInfo.disconnect'))
              )
            )
          : null;
      };
      const gn = 56,
        kn = 97,
        yn = 'Binance-Chain-Tigris',
        bn = 'Binance-Chain-Ganges',
        fn = 1,
        wn = '0x01',
        xn = (e) => {
          let n = { id: 'bsc-mainnet', name: 'Binance Smart Chain Mainnet' };
          switch (e) {
            case gn:
              n = { id: 'bsc-mainnet', name: 'Binance Smart Chain Mainnet' };
              break;
            case kn:
              n = { id: 'bsc-testnet', name: 'Binance Smart Chain Testnet' };
              break;
            case yn:
              n = { id: 'bbc-mainnet', name: 'Binance Chain Mainnet' };
              break;
            case bn:
              n = { id: 'bbc-testnet', name: 'Binance Chain Testnet' };
              break;
            case fn:
            case wn:
              n = { id: 'eth-mainnet', name: 'Ethereum Network' };
          }
          return n;
        };
      var vn = a(157),
        Cn = a(338),
        Tn = a(530),
        Pn = a.n(Tn),
        On = a(531),
        En = a.n(On),
        Bn = a(532),
        Sn = a.n(Bn),
        Mn = a(533),
        An = a.n(Mn),
        Wn = a(332),
        zn = a.n(Wn),
        Dn = a(333),
        _n = a.n(Dn);
      const In = x.e.div.withConfig({
          displayName: 'styled__Wrapper',
          componentId: 'szefxg-0',
        })(
          [
            'height:50px;line-height:50px;background:',
            ';color:',
            ';display:flex;flex-direction:row;padding:0 15px;position:fixed;top:0;left:0;right:0;z-index:',
            ';@media (max-width:768px){height:44px;line-height:44px;}',
          ],
          ({ theme: e, bgColor: n }) => n || e.headerBg,
          ({ theme: e }) => e.fontColor,
          X.a.header
        ),
        Nn = x.e.div.withConfig({
          displayName: 'styled__StyledSelectLang',
          componentId: 'szefxg-1',
        })([
          'height:100%;.select{vertical-align:middle;height:40px;line-height:40px;color:inherit;}@media (max-width:768px){display:none;}',
        ]),
        Kn = x.e.div.withConfig({
          displayName: 'styled__LeftPane',
          componentId: 'szefxg-2',
        })(['display:flex;']),
        Hn = x.e.div.withConfig({
          displayName: 'styled__Logo',
          componentId: 'szefxg-3',
        })([
          'color:#f0b90b;max-width:150px;cursor:pointer;display:flex;align-items:center;justify-content:flex-start;margin-left:-15px;padding-left:15px;img{max-width:100%;height:25px;}',
        ]),
        Fn = x.e.div.withConfig({
          displayName: 'styled__DateNetWork',
          componentId: 'szefxg-4',
        })([
          'margin-left:20px;padding-top:10px;@media (max-width:868px){display:none;}',
        ]),
        jn = x.e.div.withConfig({
          displayName: 'styled__RightPane',
          componentId: 'szefxg-5',
        })([
          'justify-content:flex-end;display:flex;position:absolute;right:15px;',
        ]),
        Ln = x.e.ul.withConfig({
          displayName: 'styled__Menu',
          componentId: 'szefxg-6',
        })(
          [
            'display:flex;flex-direction:row;li{padding:0 15px;height:50px;line-height:50px;margin-left:15px;cursor:pointer;position:relative;&:hover{background:',
            ';}a{height:100%;display:block;color:inherit;font-size:14px;outline:none;&:hover{text-decoration:none;}}&:hover ul{display:block;}}li.withSubMenus{span{font-size:14px;}ul{color:#fff;}.triangle{position:absolute;right:0;top:50%;transform:translate(0,-50%) rotate(0deg);transition:transform 0.3s ease-in-out;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid currentColor;}&:hover .triangle{transform:translate(0,-50%) rotate(180deg);}}@media (max-width:768px){display:none;}',
          ],
          ({ theme: e }) => e.headerItemHoverBg
        ),
        Rn = x.e.div.withConfig({
          displayName: 'styled__MobileMenuIcon',
          componentId: 'szefxg-7',
        })([
          "display:none;position:relative;cursor:pointer;width:20px;&:before{content:'';position:absolute;display:block;width:60px;top:0;bottom:0;left:-20px;}@media (max-width:768px){display:block;}",
        ]),
        Un = x.e.div.withConfig({
          displayName: 'styled__ConfirmContent',
          componentId: 'szefxg-8',
        })([
          'display:flex;flex-direction:column;align-items:center;img{width:100px;margin-bottom:20px;}',
        ]),
        qn = x.e.div.withConfig({
          displayName: 'styled__CancelImg',
          componentId: 'szefxg-9',
        })(
          ['width:100px;height:66px;background:', ';background-size:contain;'],
          ({ theme: e }) =>
            'DARK' === e.mode
              ? 'url('.concat(_n.a, ')')
              : 'url('.concat(zn.a, ')')
        ),
        Vn = x.e.ul.withConfig({
          displayName: 'styled__SubMenus',
          componentId: 'szefxg-10',
        })(
          [
            'display:none;position:absolute;top:50px;right:0;box-shadow:0px 0px 10px 0px rgba(0,0,0,0.5);background:',
            ';li{background:',
            ';color:',
            ';height:34px;line-height:34px;padding:0 20px;text-align:center;white-space:nowrap;animation:appear 0.3s ease-in-out;margin-left:0;&:hover{background:',
            ';color:',
            ';}@media (max-width:768px){background:inherit;}}',
          ],
          ({ theme: e }) => e.headerDropdownBg,
          ({ theme: e }) => e.headerDropdownBg,
          ({ theme: e }) => e.fontColor,
          ({ theme: e }) => e.headerDropdownItemHoverBg,
          ({ theme: e }) => e.highlight
        ),
        Gn = x.e.div.withConfig({
          displayName: 'styled__MobileItemTradePair',
          componentId: 'szefxg-11',
        })([
          "font-size:18px;position:relative;width:fit-content;white-space:nowrap;&:before{content:'';display:block;position:absolute;width:40px;height:44px;right:-30px;}",
        ]),
        Yn = x.e.div.withConfig({
          displayName: 'styled__MobileItemMoreTradePair',
          componentId: 'szefxg-12',
        })(['position:absolute;right:-25px;top:0;']),
        Xn = x.e.div.withConfig({
          displayName: 'styled__MobileItemBox',
          componentId: 'szefxg-13',
        })([
          'display:none;width:100%;margin-left:20px;color:#fff;.value{margin-left:8px;width:60px;text-align:left;white-space:nowrap;}@media (max-width:768px){display:block;}@media (max-width:319px){display:none;}@media (max-width:350px){.trade-pair{font-size:14px;}.more-trade-pair{right:-20px;}}',
        ]),
        Qn = x.e.div.withConfig({
          displayName: 'styled__SearchWrap',
          componentId: 'szefxg-14',
        })(['position:absolute;top:0;right:50px;']),
        Jn = x.e.div.withConfig({
          displayName: 'styled__FavoriteIcon',
          componentId: 'szefxg-15',
        })([
          "display:none;cursor:pointer;width:20px;top:0px;&:before{content:'';position:absolute;display:block;width:60px;top:0;bottom:0;left:-20px;}@media (max-width:768px){display:block;}",
        ]),
        Zn = x.e.div.withConfig({
          displayName: 'styled__TagWrapper',
          componentId: 'szefxg-16',
        })(['display:flex;align-items:center;']),
        $n = x.e.div.withConfig({
          displayName: 'styled__TagText',
          componentId: 'szefxg-17',
        })([
          'position:relative;top:-2px;background:rgb(240,185,11,0.1);padding:4px 8px;border-radius:12px;font-size:12px;line-height:14px;color:#f0b90b;margin-left:8px;',
        ]),
        ea = () =>
          s.a.createElement(Zn, null, s.a.createElement($n, null, 'MiniToken')),
        na = Object(B.c)()
          ? Sn.a
          : Object(S.a)()
          ? An.a
          : 'testnet' === E.c
          ? Pn.a
          : En.a;
      class aa extends l.PureComponent {
        constructor(e) {
          var n;
          super(e),
            (n = this),
            Object(i.a)(this, 'state', {
              confirmLogout: !1,
              showMobileMenu: !1,
              showSearchIcon: !1,
              showCreateWalletModal: !1,
              showUnlockWalletModal: !1,
            }),
            Object(i.a)(this, '_confirmSignout', (e) => () => {
              Object(L.c)() && e && e.disconnect(),
                sessionStorage.removeItem('user'),
                window.localStorage.removeItem('walletconnect'),
                window.location.reload();
            }),
            Object(i.a)(this, '_copyAddress', () => {
              const e = this.props.formatI18nText;
              w.a.info(e('header.user.copySuccess'));
            }),
            Object(i.a)(this, '_exportKeyStore', (e) => {
              const n = this.props,
                a = n.dispatch,
                t = n.privateKey,
                o = n.cipher,
                r = n.needAuth;
              if (
                (r || (a(Object(F.f)(!0)), a(Object(j.l)(e.currentTarget))),
                r && t)
              ) {
                const e = p.crypto.generateKeyStore(t, o);
                Object(L.b)(e);
              }
            }),
            Object(i.a)(this, '_getMenus', () => {
              const e = this.props,
                n = e.withOpenOrders,
                a = e.address,
                t = e.locale,
                o = [
                  {
                    text: 'Order History',
                    i18nId: 'header.orderHistory',
                    path: '/'.concat(t, '/orderHistory'),
                  },
                  {
                    text: 'Trade History',
                    i18nId: 'header.tradeHistory',
                    path: '/'.concat(t, '/tradeHistory'),
                  },
                ];
              n &&
                o.unshift({
                  text: 'Open Orders',
                  i18nId: 'header.openOrders',
                  path: '/'.concat(t, '/openOrders'),
                }),
                o.push({
                  text: 'Fee History',
                  i18nId: 'header.feeHistory',
                  path: '/'.concat(t, '/feeHistory'),
                });
              const r = [
                {
                  text: 'Transactions',
                  i18nId: 'header.transactions',
                  path: '/'.concat(t, '/transactionHistory'),
                },
                {
                  text: 'Balances',
                  i18nId: 'header.balances',
                  path: '/'.concat(t, '/balances'),
                },
              ];
              vn.a ||
                (r.unshift({
                  text: 'Orders',
                  i18nId: 'header.orders',
                  subMenus: o,
                }),
                k.a
                  ? r.unshift({
                      text: 'Market',
                      i18nId: 'header.exchange',
                      subMenus: [
                        {
                          text: 'BEP2',
                          i18nId: 'header.exchange.menu.bep2',
                          path: '/'.concat(t, '/trade'),
                          external: !0,
                        },
                        {
                          text: 'BEP8',
                          i18nId: 'header.exchange.menu.bep8',
                          path: '/'.concat(t, '/trade/mini'),
                        },
                      ],
                    })
                  : r.unshift({
                      text: 'Market',
                      i18nId: 'header.exchange',
                      path: '/'.concat(t, '/trade'),
                    })),
                vn.a &&
                  Object(S.a)() &&
                  r.push({
                    text: 'Tokens',
                    i18nId: 'Tokens',
                    path: '/'.concat(t, '/tokens'),
                  });
              const i = [];
              return (
                vn.a ||
                  (k.a
                    ? i.push({
                        text: 'Market',
                        i18nId: 'header.exchange',
                        subMenus: [
                          {
                            text: 'BEP2',
                            i18nId: 'header.exchange.menu.bep2',
                            path: '/'.concat(t, '/trade'),
                            external: !0,
                          },
                          {
                            text: 'BEP8',
                            i18nId: 'header.exchange.menu.bep8',
                            path: '/'.concat(t, '/trade/mini'),
                          },
                        ],
                      })
                    : i.push({
                        text: 'Market',
                        i18nId: 'header.exchange',
                        path: '/'.concat(t, '/trade'),
                      })),
                i.push({
                  text: 'Create New Wallet',
                  i18nId: 'header.createWallet',
                  onClick: () => this._setCreateWalletModal(!0),
                }),
                i.push({
                  text: 'Unlock Wallet',
                  i18nId: 'header.unlockWallet',
                  onClick: () => this._onClickUnlock(),
                }),
                a ? r : i
              );
            }),
            Object(i.a)(this, '_showMobileMenu', () => {
              this.setState({ showMobileMenu: !0 });
            }),
            Object(i.a)(this, '_hideMobileMenu', () => {
              this.setState({ showMobileMenu: !1 });
            }),
            Object(i.a)(this, '_showTradepairs', () => {
              (0, this.props.dispatch)(Object(R.t)(!0));
            }),
            Object(i.a)(this, '_showConfirmLogout', () => {
              this.setState({ confirmLogout: !0 });
            }),
            Object(i.a)(this, '_setCreateWalletModal', (e) => {
              const n = this.props,
                a = n.dispatch,
                t = n.isIpValid,
                o = n.isShowIpValidation;
              t || o
                ? this.setState({ showCreateWalletModal: !!e })
                : a(Object(j.k)(!0));
            }),
            Object(i.a)(this, '_setUnlockWalletModal', (e) => {
              const n = this.props,
                a = n.dispatch,
                t = n.isIpValid,
                o = n.isShowIpValidation;
              t || o
                ? this.setState({ showUnlockWalletModal: !!e })
                : a(Object(j.k)(!0));
            }),
            Object(i.a)(this, '_onClickUnlock', () => {
              const e = this.props,
                n = e.history,
                a = e.locale,
                t = e.location,
                o = Object(d.f)(t.pathname, { path: '/:locale/tokens' });
              o && o.url.includes('/'.concat(a, '/tokens'))
                ? n.push('/'.concat(a, '/unlock?tokens=true'))
                : this._setUnlockWalletModal(!0);
            }),
            Object(i.a)(this, '_clickLogo', () => {
              const e = this.props.locale;
              Object(S.a)() || (window.location.href = '/'.concat(e));
            }),
            Object(i.a)(
              this,
              '_unlockWalletConnect',
              (function () {
                var e = Object(r.a)(
                  o.a.mark(function e(a) {
                    var t, r;
                    return o.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t = n.props.dispatch),
                              window.localStorage.removeItem('walletconnect'),
                              !a.connected())
                            ) {
                              e.next = 6;
                              break;
                            }
                            return a.disconnect(), (e.next = 6), h()(1e3);
                          case 6:
                            return (e.next = 8), a.startSession(!1);
                          case 8:
                            (r = e.sent),
                              window.__DEV__ &&
                                console.log('WalletConnect URI', r),
                              t(Object(U.d)(r)),
                              a.on('connect', n._onConnect);
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })()
            ),
            Object(i.a)(
              this,
              '_onConnect',
              Object(r.a)(
                o.a.mark(function e() {
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          n._setUnlockWalletModal(!1);
                        case 1:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              )
            ),
            Object(i.a)(this, '_getFavoriteIcon', () => {
              const e = this.props,
                n = e.currentTrade,
                a = e.favorites;
              return !!(null === a || void 0 === a
                ? void 0
                : a.find((e) => n.replace('_', '/') === e))
                ? 'starfilled'
                : 'staroutlined';
            }),
            Object(i.a)(this, '_addFavorite', () => {
              const e = this.props,
                n = e.favorites,
                a = e.dispatch,
                t = e.currentTrade.replace('_', '/');
              if (null === n || void 0 === n ? void 0 : n.find((e) => e === t))
                for (let o = 0, r = n.length; o < r; o++)
                  n[o] === t && n.splice(o, 1);
              else n.push(t);
              a(Object(q.e)(n));
            }),
            (this._onConnect = this._onConnect.bind(this));
        }
        componentDidMount() {
          const e = this.props.match.path;
          this.setState({ showSearchIcon: '/:locale/' === e[0] });
        }
        componentWillUnmount() {
          this.dateTimeHandler && clearInterval(this.dateTimeHandler);
        }
        render() {
          const e = this.state,
            n = e.confirmLogout,
            a = e.showMobileMenu,
            t = e.showSearchIcon,
            o = e.showCreateWalletModal,
            r = e.showUnlockWalletModal,
            i = this.props,
            l = i.address,
            c = i.currentTrade,
            d = i.withTradePairs,
            m = i.className,
            h = i.formatI18nText,
            p = i.bgColor,
            k = i.isIpValid,
            w = c.split('_'),
            x = this._getMenus().map((e, n) =>
              e.subMenus
                ? s.a.createElement(
                    'li',
                    { className: 'withSubMenus', key: e.text },
                    s.a.createElement('span', null, h(e.i18nId)),
                    s.a.createElement(
                      Vn,
                      { className: 'subMenus' },
                      e.subMenus.map((e) =>
                        s.a.createElement(
                          s.a.Fragment,
                          null,
                          e.external
                            ? s.a.createElement(
                                'li',
                                { key: e.text },
                                s.a.createElement(
                                  'a',
                                  { href: e.path },
                                  h(e.i18nId)
                                )
                              )
                            : s.a.createElement(
                                'li',
                                { key: e.text },
                                s.a.createElement(
                                  u.c,
                                  { to: e.path },
                                  h(e.i18nId)
                                )
                              )
                        )
                      )
                    ),
                    s.a.createElement('i', { className: 'triangle' })
                  )
                : s.a.createElement(
                    'li',
                    { key: e.text },
                    e.path &&
                      s.a.createElement(
                        u.c,
                        { to: e.path },
                        s.a.createElement('span', null, h(e.i18nId))
                      ),
                    e.onClick &&
                      s.a.createElement(
                        'a',
                        {
                          onClick: e.onClick,
                          onKeydown: e.onClick,
                          role: 'button',
                          tabIndex: n,
                        },
                        h(e.i18nId)
                      )
                  )
            ),
            v = this._getFavoriteIcon();
          return s.a.createElement(y.a, null, (e) =>
            s.a.createElement(
              In,
              { className: m, bgColor: p },
              s.a.createElement(
                Kn,
                null,
                s.a.createElement(
                  Hn,
                  { onClick: this._clickLogo },
                  s.a.createElement('img', { src: na, alt: '' })
                ),
                Object(g.c)() === g.b && s.a.createElement(ea, null),
                !Object(B.c)() &&
                  s.a.createElement(
                    Fn,
                    null,
                    s.a.createElement(O, null),
                    s.a.createElement(H, null)
                  ),
                d &&
                  w[0] &&
                  s.a.createElement(
                    Xn,
                    { onClick: this._showTradepairs },
                    s.a.createElement(
                      Gn,
                      null,
                      w[0].replace(/-[A-F0-9]+/g, ''),
                      ' / ',
                      w[1].replace(/-[A-F0-9]+/g, ''),
                      s.a.createElement(
                        Yn,
                        { onClick: this._showTradepairs },
                        s.a.createElement(b.a, {
                          type: 'sanjiaojiantouxia-B',
                          color: '#f0b90b',
                        })
                      )
                    )
                  ),
                d &&
                  s.a.createElement(
                    Jn,
                    { onClick: this._addFavorite },
                    s.a.createElement(b.a, {
                      type: v,
                      color: '#f0b90b',
                      size: 20,
                    })
                  )
              ),
              s.a.createElement(
                jn,
                null,
                s.a.createElement(
                  Ln,
                  null,
                  s.a.createElement(
                    'li',
                    null,
                    s.a.createElement(
                      'a',
                      Object.assign(
                        { href: E.a },
                        Object(S.a)() ? { target: '_blank' } : {}
                      ),
                      h('header.explorer')
                    )
                  ),
                  x
                ),
                l &&
                  s.a.createElement(pn, {
                    unlock: () => this._onClickUnlock(),
                    disconnect: this._showConfirmLogout,
                  }),
                s.a.createElement(
                  Nn,
                  null,
                  s.a.createElement(Cn.a, {
                    overlayClassName: 'header-dropdown-overlay',
                  })
                ),
                !Object(S.a)() &&
                  s.a.createElement(
                    Ln,
                    null,
                    s.a.createElement(
                      'li',
                      { className: 'withSubMenus' },
                      s.a.createElement(b.a, { type: 'detail-D' }),
                      s.a.createElement(
                        Vn,
                        { className: 'subMenus' },
                        s.a.createElement(
                          'li',
                          null,
                          s.a.createElement(
                            'a',
                            { href: 'https://docs.binance.org/' },
                            h('header.faq')
                          )
                        ),
                        s.a.createElement(
                          'li',
                          null,
                          s.a.createElement(
                            'a',
                            { href: 'https://community.binance.org/' },
                            h('header.forums')
                          )
                        ),
                        s.a.createElement(
                          'li',
                          null,
                          s.a.createElement(
                            'a',
                            { href: 'https://www.binance.org/en/blog/' },
                            h('header.blog')
                          )
                        ),
                        'mainnet' === E.c
                          ? s.a.createElement(
                              'li',
                              null,
                              s.a.createElement(
                                'a',
                                { href: 'https://testnet.binance.org' },
                                h('header.testnet')
                              )
                            )
                          : s.a.createElement(
                              'li',
                              null,
                              s.a.createElement(
                                'a',
                                { href: 'https://www.binance.org' },
                                h('header.mainnet')
                              )
                            )
                      )
                    )
                  ),
                s.a.createElement(
                  Rn,
                  { onClick: this._showMobileMenu },
                  s.a.createElement(b.a, { type: 'menu', size: 20 })
                ),
                Object(B.c)() &&
                  t &&
                  s.a.createElement(
                    Qn,
                    { onClick: this._showTradepairs },
                    s.a.createElement(b.a, {
                      type: 'search',
                      color: '#828A98',
                      size: '24',
                    })
                  )
              ),
              a &&
                s.a.createElement(te, {
                  address: l,
                  close: this._hideMobileMenu,
                  closeWallet: this._showConfirmLogout,
                  isIpValid: k,
                }),
              n &&
                s.a.createElement(
                  f.a,
                  {
                    cancelText: h('common.cancel'),
                    okText: h('common.confirm'),
                    confirm: this._confirmSignout(e),
                    cancel: () => {
                      this.setState({ confirmLogout: !1 });
                    },
                  },
                  s.a.createElement(
                    Un,
                    null,
                    s.a.createElement(qn, null),
                    s.a.createElement('p', null, h('header.youWantCloseWallet'))
                  )
                ),
              s.a.createElement(fe, null),
              s.a.createElement(ze, {
                open: o,
                onClose: () => this._setCreateWalletModal(!1),
              }),
              s.a.createElement(Qe, {
                open: r,
                onClose: () => this._setUnlockWalletModal(!1),
                onClickUnlock: () => this._unlockWalletConnect(e),
              })
            )
          );
        }
      }
      Object(i.a)(aa, 'defaultProps', {
        dispatch: () => {},
        privateKey: '',
        address: '',
        encryptedData: null,
        currentTrade: '',
        cipher: '',
        needAuth: !1,
        withOpenOrders: !0,
        withTradePairs: !1,
        formatI18nText: () => {},
        bgColor: '',
        isIpValid: !0,
        isShowIpValidation: !1,
        isConnectedWithWallet: !1,
        favorites: [],
        className: '',
        flags: {},
        location: {},
        deviceInfo: {},
      });
      var ta;
      n.a = Object(xe.e)(
        Object(c.b)(
          ({
            account: {
              privateKey: e,
              needAuth: n,
              address: a,
              encryptedData: t,
              cipher: o,
              flags: r,
            },
            exchange: { currentTrade: i },
            globalData: l,
            walletConnect: { isConnectedWithWallet: s },
            tradePairs: { favorites: c },
          }) => ({
            needAuth: n,
            privateKey: e,
            address: a,
            encryptedData: t,
            cipher: o,
            currentTrade: i,
            flags: r,
            isIpValid: l.isIpValid,
            isShowIpValidation: l.isShowIpValidation,
            isConnectedWithWallet: s,
            favorites: c,
            deviceInfo: l,
          })
        )(
          Object(d.j)(
            ((ta = aa),
            function (e) {
              const n = Object(c.c)(),
                a = Object(c.d)((e) => e.globalData).deviceInfo;
              return (
                Object(l.useEffect)(() => {
                  const e = setTimeout(() => {
                    const e = window.BinanceChain;
                    e &&
                      (Object(L.c)() ||
                        (e.on('connect', ({ chainId: e }) => {
                          console.log('BinanceChain connected'),
                            n(Object(F.e)({ network: xn(e) }));
                        }),
                        e.on('accountsChanged', (e) => {
                          console.log(
                            'BinanceChain accounts changed. New accounts are ',
                            e
                          ),
                            Object(_e.c)(e[0], {
                              keystore: 'HARDWARE',
                              flags: {
                                isWalletConnect: !1,
                                isExtensionWallet: !0,
                              },
                            }),
                            Object(Ie.b)(
                              a,
                              'unlock_extension_wallet',
                              e[0],
                              ''
                            ),
                            n(Object(F.d)(e[0])),
                            n(
                              Object(F.e)({
                                address: e[0],
                                flags: {
                                  isWalletConnect: !1,
                                  isExtensionWallet: !0,
                                },
                                privateKey: 'HARDWARE',
                              })
                            ),
                            window.location.reload();
                        }),
                        e.on(
                          'chainChanged',
                          (function () {
                            var e = Object(r.a)(
                              o.a.mark(function e(t) {
                                var r;
                                return o.a.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          console.log(
                                            'BinanceChain chain changed. New chain: ',
                                            t,
                                            xn(t)
                                          ),
                                          (e.next = 3),
                                          Object(De.b)()
                                        );
                                      case 3:
                                        (r = e.sent),
                                          Object(_e.c)(r, {
                                            keystore: 'HARDWARE',
                                            flags: {
                                              isWalletConnect: !1,
                                              isExtensionWallet: !0,
                                            },
                                          }),
                                          Object(Ie.b)(
                                            a,
                                            'unlock_extension_wallet',
                                            r,
                                            ''
                                          ),
                                          n(Object(F.d)(r)),
                                          n(
                                            Object(F.e)({
                                              address: r,
                                              network: xn(t),
                                              flags: {
                                                isWalletConnect: !1,
                                                isExtensionWallet: !0,
                                              },
                                              privateKey: 'HARDWARE',
                                            })
                                          );
                                      case 8:
                                      case 'end':
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function (n) {
                              return e.apply(this, arguments);
                            };
                          })()
                        ),
                        e.on('disconnect', () => {
                          console.log('disconnected from extension wallet ');
                        })));
                  }, 1e3);
                  return () => clearTimeout(e);
                }, [n, a]),
                s.a.createElement(ta, e)
              );
            })
          )
        )
      );
    },
    250: function (e, n, a) {
      'use strict';
      a.d(n, 'b', function () {
        return s;
      }),
        a.d(n, 'a', function () {
          return c;
        }),
        a.d(n, 'c', function () {
          return m;
        });
      var t = a(5),
        o = a.n(t),
        r = a(9),
        i = a(11),
        l = a(33);
      const s = 'SET_TRANSACTION_HISTORY',
        c = 'SET_FETCH_TRANSACTION',
        d = (e) => (n) => {
          n({ type: s, data: e });
        },
        u = (e) => (n) => {
          n({ type: c, data: e });
        },
        m = (e) =>
          (function () {
            var n = Object(r.a)(
              o.a.mark(function n(a) {
                var t;
                return o.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            a(Object(l.i)(!0)),
                            (n.next = 4),
                            i.e.getTransactions(e)
                          );
                        case 4:
                          (t = n.sent),
                            a(d(t)),
                            a(Object(l.i)(!1)),
                            (n.next = 14);
                          break;
                        case 9:
                          (n.prev = 9),
                            (n.t0 = n.catch(0)),
                            console.log(
                              'status:'
                                .concat(n.t0.status, ' message: ')
                                .concat(n.t0.statusText)
                            ),
                            a(u(!1)),
                            a(Object(l.i)(!1));
                        case 14:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
    },
    312: function (e, n, a) {
      'use strict';
      var t = a(0),
        o = a.n(t),
        r = a(1),
        i = a(35),
        l = a(37),
        s = a(6),
        c = a(43);
      const d = Object(c.a)() ? 'https://trubi.io/en/terms' : '/en/terms',
        u = Object(c.a)() ? 'https://trubi.io/en/terms' : '/en/privacy',
        m = Object(c.a)()
          ? 'account.footer.copyright.trubi'
          : 'account.footer.copyright',
        h = r.e.div.withConfig({
          displayName: 'Footer__Wrapper',
          componentId: 'sc-1kia7xo-0',
        })(
          [
            'height:50px;line-height:50px;background:',
            ';width:100%;color:',
            ';display:flex;font-size:13px;justify-content:space-between;position:fixed;bottom:0;z-index:',
            ';@media (max-width:768px){justify-content:flex-start;display:none;}',
          ],
          ({ theme: e }) => e.headerBg,
          ({ theme: e }) => e.fontColor,
          l.a.footer
        ),
        p = r.e.ul.withConfig({
          displayName: 'Footer__LeftPane',
          componentId: 'sc-1kia7xo-1',
        })([
          'display:flex;margin-left:90px;li{margin-right:30px;}a{color:inherit;&:hover{color:#f0b90b;}}@media (max-width:768px){display:none;}',
        ]),
        g = r.e.div.withConfig({
          displayName: 'Footer__RightPane',
          componentId: 'sc-1kia7xo-2',
        })([
          'display:flex;margin-right:90px;@media (max-width:768px){margin-right:0;width:100%;justify-content:space-around;}',
        ]),
        k = r.e.div.withConfig({
          displayName: 'Footer__CopyRight',
          componentId: 'sc-1kia7xo-3',
        })(['margin-right:5px;']),
        y = r.e.ul.withConfig({
          displayName: 'Footer__SocialList',
          componentId: 'sc-1kia7xo-4',
        })(
          [
            'display:flex;justify-content:center;align-items:center;li{margin-right:5px;a{width:26px;height:26px;border-radius:50%;background:',
            ';display:flex;justify-content:center;align-items:center;text-decoration:none;i{color:',
            ';}&:hover i{color:',
            ';}}}',
          ],
          ({ theme: e }) => e.exchangeMainBg,
          ({ theme: e }) => e.fontColor,
          ({ theme: e }) => e.highlight
        ),
        b = ({ formatI18nText: e }) =>
          o.a.createElement(
            h,
            null,
            o.a.createElement(
              p,
              null,
              o.a.createElement(
                'li',
                null,
                o.a.createElement(
                  'a',
                  { href: d, target: 'blank', rel: 'noopener' },
                  e('footer.terms')
                )
              ),
              o.a.createElement(
                'li',
                null,
                o.a.createElement(
                  'a',
                  { href: u, target: 'blank', rel: 'noopener' },
                  e('footer.privacy')
                )
              ),
              o.a.createElement(
                'li',
                null,
                o.a.createElement(
                  'a',
                  {
                    href: 'https://community.binance.org/',
                    target: 'blank',
                    rel: 'noopener',
                  },
                  e('header.forums')
                )
              ),
              o.a.createElement(
                'li',
                null,
                o.a.createElement(
                  'a',
                  {
                    href: 'https://docs.binance.org/',
                    target: 'blank',
                    rel: 'noopener',
                  },
                  e('header.faq')
                )
              )
            ),
            o.a.createElement(
              g,
              null,
              o.a.createElement(
                k,
                null,
                e(m).replace('2019', new Date().getFullYear())
              ),
              o.a.createElement(
                y,
                null,
                o.a.createElement(
                  'li',
                  null,
                  o.a.createElement(
                    'a',
                    {
                      href: 'https://t.me/BinanceDEXchange ',
                      target: 'blank',
                      rel: 'noopener',
                    },
                    o.a.createElement(i.a, { type: 'telegram', size: 14 })
                  )
                ),
                o.a.createElement(
                  'li',
                  null,
                  o.a.createElement(
                    'a',
                    {
                      href: 'https://twitter.com/BinanceChain',
                      target: 'blank',
                      rel: 'noopener',
                    },
                    o.a.createElement(i.a, { type: 'twitter', size: 14 })
                  )
                )
              )
            )
          );
      (b.defaultProps = { formatI18nText: () => {} }), (n.a = Object(s.e)(b));
    },
    322: function (e, n, a) {
      'use strict';
      var t = a(8),
        o = a(0),
        r = a.n(o),
        i = a(1),
        l = a(87),
        s = a(109),
        c = a(35),
        d = a(37),
        u = a(6);
      const m = i.e.div.withConfig({
          displayName: 'Modal__Layer',
          componentId: 'sc-1b5hton-0',
        })(
          [
            'position:fixed;top:0;left:0;right:0;bottom:0;z-index:',
            ';background:rgba(0,0,0,0.5);',
          ],
          d.a.modal
        ),
        h = i.e.div.withConfig({
          displayName: 'Modal__Wrapper',
          componentId: 'sc-1b5hton-1',
        })(
          [
            'color:',
            ';min-width:320px;padding:30px;box-sizing:border-box;background:',
            ';box-shadow:',
            ';position:fixed;top:20%;left:50%;transform:translate(-50%,-50%);',
          ],
          ({ theme: e }) => e.fontColor || 'black',
          ({ theme: e }) => e.popupBg || '#fff',
          ({ theme: e }) => e.boxShadow
        ),
        p = i.e.div.withConfig({
          displayName: 'Modal__Title',
          componentId: 'sc-1b5hton-2',
        })(['font-size:14px;font-weight:bold;']),
        g = i.e.div.withConfig({
          displayName: 'Modal__Content',
          componentId: 'sc-1b5hton-3',
        })([
          'padding:20px 0;font-size:16px;& a{&,&:hover,&:active,&:visited{color:inherit !important;text-decoration:underline;}}',
        ]),
        k = i.e.div.withConfig({
          displayName: 'Modal__Footer',
          componentId: 'sc-1b5hton-4',
        })(
          ['display:flex;flex-direction:row;justify-content:', ';'],
          (e) => e.align
        ),
        y = i.e.div.withConfig({
          displayName: 'Modal__Close',
          componentId: 'sc-1b5hton-5',
        })([
          'position:absolute;top:5px;right:8px;cursor:pointer;color:#848e9c;&:hover{color:#f0b90b;}',
        ]),
        b = Object(i.e)(s.a).withConfig({
          displayName: 'Modal__ModalButton',
          componentId: 'sc-1b5hton-6',
        })(['height:34px;line-height:34px;padding:0 20px;']),
        f = Object(i.e)(s.a).withConfig({
          displayName: 'Modal__CancelButton',
          componentId: 'sc-1b5hton-7',
        })([
          'height:34px;line-height:34px;background:#fff;border:1px solid #f0b90b;color:#f0b90b;margin-right:10px;box-sizing:border-box;',
        ]);
      class w extends o.PureComponent {
        constructor(...e) {
          super(...e),
            Object(t.a)(this, '_keydown', (e) => {
              const n = this.props.close;
              27 === e.keyCode && n && n();
            });
        }
        componentDidMount() {
          window.document.body.addEventListener('keydown', this._keydown);
        }
        componentWillUnmount() {
          window.document.body.removeEventListener('keydown', this._keydown);
        }
        render() {
          const e = this.props,
            n = e.closeText,
            a = e.title,
            t = e.close,
            o = e.children,
            i = e.closeAlign,
            s = e.next,
            d = e.cancelButton,
            u = e.hideButton,
            w = e.bgColor;
          return r.a.createElement(
            l.a,
            { animConfig: [{ opacity: [1, 0] }] },
            r.a.createElement(
              m,
              { key: '1' },
              r.a.createElement(
                l.a,
                { leaveReverse: !0, delay: 100, type: ['top', 'bottom'] },
                r.a.createElement(
                  h,
                  { key: '1', bgColor: w },
                  r.a.createElement(p, null, a),
                  r.a.createElement(g, null, o),
                  !u &&
                    r.a.createElement(
                      k,
                      { align: i },
                      d &&
                        t &&
                        r.a.createElement(
                          f,
                          { onClick: t },
                          r.a.createElement('span', null, 'Cancel')
                        ),
                      (s || t) &&
                        r.a.createElement(
                          b,
                          { onClick: s || t, width: '100px' },
                          r.a.createElement('span', null, n)
                        )
                    ),
                  t
                    ? r.a.createElement(
                        y,
                        { onClick: t },
                        r.a.createElement(c.a, { type: 'close', size: '18' })
                      )
                    : null
                )
              )
            )
          );
        }
      }
      Object(t.a)(w, 'defaultProps', {
        closeText: r.a.createElement(u.a, { value: 'common.close' }),
        cancelButton: !1,
        title: '',
        children: null,
        closeAlign: 'flex-end',
        bgColor: '',
        close: null,
        next: null,
        hideButton: !1,
      }),
        (n.a = w);
    },
    323: function (e, n, a) {
      'use strict';
      a.d(n, 'd', function () {
        return h;
      }),
        a.d(n, 'b', function () {
          return p;
        }),
        a.d(n, 'c', function () {
          return g;
        }),
        a.d(n, 'a', function () {
          return k;
        });
      var t = a(8),
        o = a(0),
        r = a.n(o),
        i = a(1),
        l = a(248),
        s = a(312),
        c = a(43),
        d = a(166);
      const u = i.e.div.withConfig({
          displayName: 'Layout__Wrapper',
          componentId: 'sc-7ylxnl-0',
        })(['height:100%;']),
        m = i.e.div.withConfig({
          displayName: 'Layout__Content',
          componentId: 'sc-7ylxnl-1',
        })(['flex-grow:1;padding:60px 0;']);
      class h extends o.PureComponent {
        render() {
          const e = this.props.children;
          return r.a.createElement(
            u,
            null,
            Object(c.a)()
              ? r.a.createElement(l.a, null)
              : r.a.createElement(
                  d.a,
                  { theme: 'dark' },
                  r.a.createElement(l.a, null)
                ),
            r.a.createElement(m, null, e),
            Object(c.a)()
              ? r.a.createElement(s.a, null)
              : r.a.createElement(
                  d.a,
                  { theme: 'dark' },
                  r.a.createElement(s.a, null)
                )
          );
        }
      }
      Object(t.a)(h, 'defaultProps', { children: null });
      const p = i.e.div.withConfig({
          displayName: 'Layout__Row',
          componentId: 'sc-7ylxnl-2',
        })(['display:flex;flex-direction:row;']),
        g = Object(i.e)(p).withConfig({
          displayName: 'Layout__RowGroup',
          componentId: 'sc-7ylxnl-3',
        })(['padding:12px 24px;flex-wrap:wrap;']),
        k = i.e.div.withConfig({
          displayName: 'Layout__Column',
          componentId: 'sc-7ylxnl-4',
        })(['flex:', ';'], ({ flex: e }) => (void 0 !== e ? e : 1));
    },
    325: function (e, n, a) {
      'use strict';
      var t = a(8),
        o = a(0),
        r = a.n(o),
        i = a(1),
        l = a(87),
        s = a(109),
        c = a(35),
        d = a(37);
      const u = i.e.div.withConfig({
          displayName: 'Confirm__Layer',
          componentId: 'sc-1nqwtur-0',
        })(
          [
            'position:fixed;top:0;left:0;right:0;bottom:0;z-index:',
            ';background:rgba(0,0,0,0.5);',
          ],
          d.a.modal
        ),
        m = i.e.div.withConfig({
          displayName: 'Confirm__Wrapper',
          componentId: 'sc-1nqwtur-1',
        })(
          [
            'min-width:320px;max-width:450px;padding:30px;box-sizing:border-box;background:',
            ';box-shadow:',
            ';position:fixed;top:30%;left:50%;transform:translate(-50%,-50%);@media (max-width:768px){width:100%;min-width:300px;max-width:300px;padding:15px;top:20%;}',
          ],
          ({ theme: e }) => e.popupBg,
          ({ theme: e }) => e.boxShadow
        ),
        h = i.e.div.withConfig({
          displayName: 'Confirm__Content',
          componentId: 'sc-1nqwtur-2',
        })(
          [
            'display:flex;justify-content:center;padding:10px 0 20px 0;font-size:16px;color:',
            ';',
          ],
          (e) => e.theme.fontColor
        ),
        p = i.e.div.withConfig({
          displayName: 'Confirm__Footer',
          componentId: 'sc-1nqwtur-3',
        })(['display:flex;flex-direction:row;justify-content:center;']),
        g = Object(i.e)(s.a).withConfig({
          displayName: 'Confirm__ConfirmButton',
          componentId: 'sc-1nqwtur-4',
        })(['height:34px;line-height:34px;']),
        k = Object(i.e)(s.a).withConfig({
          displayName: 'Confirm__CancelButton',
          componentId: 'sc-1nqwtur-5',
        })([
          'background:inherit;color:#f0b90b;border:1px solid #f0b90b;box-shadow:none;height:34px;line-height:34px;margin-right:25px;box-sizing:border-box;',
        ]),
        y = i.e.div.withConfig({
          displayName: 'Confirm__Close',
          componentId: 'sc-1nqwtur-6',
        })([
          'position:absolute;top:5px;right:8px;cursor:pointer;color:#848e9c;line-height:20px;&:hover{color:#f0b90b;}',
        ]);
      class b extends o.PureComponent {
        constructor(...e) {
          super(...e),
            Object(t.a)(this, '_keydown', (e) => {
              const n = this.props.cancel;
              27 === e.keyCode && n();
            });
        }
        componentDidMount() {
          (document.body.style.overflow = 'hidden'),
            window.document.body.addEventListener('keydown', this._keydown);
        }
        componentWillUnmount() {
          (document.body.style.overflow = ''),
            window.document.body.removeEventListener('keydown', this._keydown);
        }
        render() {
          const e = this.props,
            n = e.cancelText,
            a = e.okText,
            t = e.children,
            o = e.confirm,
            i = e.cancel;
          return r.a.createElement(
            l.a,
            { animConfig: [{ opacity: [1, 0] }] },
            r.a.createElement(
              u,
              { key: '1' },
              r.a.createElement(
                l.a,
                { leaveReverse: !0, delay: 100, type: ['top', 'bottom'] },
                r.a.createElement(
                  m,
                  { key: '2' },
                  r.a.createElement(h, null, t),
                  r.a.createElement(
                    p,
                    null,
                    r.a.createElement(
                      k,
                      { onClick: i },
                      r.a.createElement('span', null, n)
                    ),
                    r.a.createElement(
                      g,
                      { onClick: o },
                      r.a.createElement('span', null, a)
                    )
                  ),
                  r.a.createElement(
                    y,
                    { onClick: i },
                    r.a.createElement(c.a, { type: 'close', size: '18' })
                  )
                )
              )
            )
          );
        }
      }
      Object(t.a)(b, 'defaultProps', {
        okText: '',
        cancelText: '',
        confirm: () => {},
        cancel: () => {},
        children: null,
      }),
        (n.a = b);
    },
    328: function (e, n, a) {
      'use strict';
      var t = a(0),
        o = a(1),
        r = a(226),
        i = a(37);
      const l = o.e.div.withConfig({
        displayName: 'LoadingShade__Shade',
        componentId: 'sc-4fbldu-0',
      })(
        [
          'background:transparent;bottom:0;right:0;height:100%;left:0;pointer-events:none;position:absolute;top:0;opacity:0;z-index:',
          ';display:none;',
          '',
        ],
        i.a.shade,
        ({ hidden: e }) =>
          e
            ? ''
            : '\n    display: block;\n    pointer-events: auto;\n    opacity: 1;\n  '
      );
      n.a = (e) => t.createElement(l, e, t.createElement(r.a, null));
    },
    33: function (e, n, a) {
      'use strict';
      a.d(n, 'c', function () {
        return l;
      }),
        a.d(n, 'e', function () {
          return s;
        }),
        a.d(n, 'a', function () {
          return c;
        }),
        a.d(n, 'd', function () {
          return d;
        }),
        a.d(n, 'f', function () {
          return u;
        }),
        a.d(n, 'b', function () {
          return m;
        }),
        a.d(n, 'i', function () {
          return h;
        }),
        a.d(n, 'h', function () {
          return p;
        }),
        a.d(n, 'k', function () {
          return g;
        }),
        a.d(n, 'j', function () {
          return k;
        }),
        a.d(n, 'l', function () {
          return y;
        }),
        a.d(n, 'g', function () {
          return f;
        });
      var t = a(5),
        o = a.n(t),
        r = a(9),
        i = a(11);
      const l = 'SET_GLOBAL_LOADING',
        s = 'SET_NOT_LOGIN_NOTIFY',
        c = 'SET_CONFIRM_AUTH_ELE',
        d = 'SET_IS_IPVALIDATE',
        u = 'SET_SHOW_IPVALIDATION',
        m = 'SET_FINGER_PRINT',
        h = (e) => (n) => n({ type: l, data: e }),
        p = (e) => (n) => n({ type: m, data: e }),
        g = (e) => (n) => n({ type: u, data: e }),
        k = (e) => (n) => n({ type: s, data: e }),
        y = (e) => (n) => n({ type: c, data: e }),
        b = (e) => (n) => n({ type: d, data: e }),
        f = () =>
          (function () {
            var e = Object(r.a)(
              o.a.mark(function e(n) {
                var a;
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), i.e.ipValidate();
                        case 3:
                          (a = e.sent), n(b(a)), (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            console.log(
                              'status:'
                                .concat(e.t0.status, ' message: ')
                                .concat(e.t0.statusText)
                            );
                        case 10:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
    },
    330: function (e, n, a) {
      'use strict';
      var t = a(8),
        o = a(0),
        r = a.n(o),
        i = a(1),
        l = a(35),
        s = a(37),
        c = a(6);
      const d = i.e.div.withConfig({
          displayName: 'InputPassword__Wrapper',
          componentId: 'cq9aq8-0',
        })(
          [
            'margin-top:20px;position:relative;.inputWrap{position:relative;z-index:',
            ';}input{border:none;border-radius:0;width:100%;height:100%;outline:none;font-size:14px;border-bottom:1px solid ',
            ';caret-color:#f0b90b;padding:0;padding-bottom:10px;color:',
            ';background:inherit;position:relative;&:focus{border-color:#f0b90b;}}.label{font-size:16px;position:absolute;transform:translateY(0px);transition:all 0.2s ease;z-index:',
            ';color:#848e9c;}.label-value{transform:translateY(-20px);color:',
            ';font-size:12px;}',
          ],
          s.a.input,
          (e) => e.borderColor,
          ({ theme: e }) => e.fontColor,
          s.a.inputLabel,
          ({ theme: e }) => e.fontColor
        ),
        u = i.e.div.withConfig({
          displayName: 'InputPassword__EyeWrap',
          componentId: 'cq9aq8-1',
        })(
          ['position:absolute;right:0;top:0;color:', ';cursor:pointer;'],
          ({ theme: e }) => e.fontColor
        ),
        m = i.e.div.withConfig({
          displayName: 'InputPassword__Clear',
          componentId: 'cq9aq8-2',
        })(
          ['position:absolute;right:25px;top:0;color:', ';cursor:pointer;'],
          ({ theme: e }) => e.fontColor
        ),
        h = i.e.div.withConfig({
          displayName: 'InputPassword__Rules',
          componentId: 'cq9aq8-3',
        })(
          [
            'margin-top:5px;background:#fbfbfb;padding:10px;border:1px solid rgba(234,236,239,0.5);.text{font-size:14px;color:',
            ";line-height:14px;margin-bottom:10px;}ul{color:#263147;display:flex;justify-content:flex-start;padding-left:15px;li{position:relative;font-size:12px;white-space:nowrap;&:first-child{margin-right:60px;}&:before{content:'';position:absolute;width:8px;height:8px;border-radius:50%;background:#848e9c;top:5px;left:-15px;transition:background 0.25s ease;}}li.pass{&:before{background:#00c087;}}li.invalid{color:#f23051;&:before{background:#f23051;}}@media (min-width:320px) and (max-width:623px){flex-direction:column;}}",
          ],
          ({ theme: e }) => e.fontColor
        );
      class p extends o.PureComponent {
        constructor(e) {
          super(e),
            Object(t.a)(this, '_clear', () => {
              const e = this.props.onChange;
              this.setState({ value: '' }, () => {
                e('', !1);
              });
            }),
            Object(t.a)(this, '_showPassword', () => {
              const e = this.state.showPassword;
              this.setState({ showPassword: !e });
            }),
            Object(t.a)(this, '_passwordChange', (e) => {
              const n = this.props.onChange,
                a = e.currentTarget.value.trim(),
                t = a ? (a.length >= 8 ? 'pass' : 'invalid') : 'empty',
                o = a
                  ? /^(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]*/.test(a)
                    ? 'pass'
                    : 'invalid'
                  : 'empty';
              this.setState({ value: a }, () => {
                n(a, 'pass' === t && 'pass' === o);
              });
            }),
            (this.state = { showPassword: !1, value: '', pwdReadOnly: !0 });
        }
        componentDidMount() {
          setTimeout(() => {
            this.setState({ pwdReadOnly: !1 });
          }, 40);
        }
        render() {
          const e = this.state,
            n = e.showPassword,
            a = e.value,
            t = e.pwdReadOnly,
            o = this.props,
            i = o.withRules,
            s = o.title,
            p = o.autoFocus,
            g = o.warning,
            k = a ? (a.length >= 8 ? 'pass' : 'invalid') : 'empty',
            y = a
              ? /^(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]*/.test(a)
                ? 'pass'
                : 'invalid'
              : 'empty';
          return r.a.createElement(
            d,
            {
              borderColor: g ? 'rgba(242,48,81,0.5)' : 'rgba(234,236,239,0.5)',
            },
            r.a.createElement(
              'p',
              { className: a ? 'label label-value' : 'label' },
              s
            ),
            r.a.createElement(
              'div',
              { className: 'inputWrap' },
              r.a.createElement('input', {
                type: n ? 'text' : 'password',
                value: a,
                autoFocus: p,
                autocomplete: 'off',
                onChange: this._passwordChange,
                readOnly: t,
              }),
              r.a.createElement(
                u,
                { onClick: this._showPassword },
                r.a.createElement(l.a, {
                  type: n ? 'eye' : 'blind-eye',
                  size: '14',
                })
              ),
              a &&
                r.a.createElement(
                  m,
                  { onClick: this._clear },
                  r.a.createElement(l.a, { type: 'clear', size: '14' })
                )
            ),
            i &&
              r.a.createElement(
                h,
                null,
                r.a.createElement(
                  'div',
                  { className: 'text' },
                  r.a.createElement(c.a, {
                    value: 'inputPassword.passwordRule',
                  }),
                  ':',
                  ' '
                ),
                r.a.createElement(
                  'ul',
                  null,
                  r.a.createElement(
                    'li',
                    { className: k },
                    r.a.createElement(c.a, {
                      value: 'inputPassword.passwordRule1',
                    })
                  ),
                  r.a.createElement(
                    'li',
                    { className: y },
                    r.a.createElement(c.a, {
                      value: 'inputPassword.passwordRule2',
                    })
                  )
                )
              )
          );
        }
      }
      Object(t.a)(p, 'defaultProps', {
        onChange: () => {},
        withRules: !0,
        autoFocus: !1,
        warning: !1,
        title: r.a.createElement(c.a, {
          value: 'inputPassword.setANewPassword',
        }),
      }),
        (n.a = p);
    },
    332: function (e, n, a) {
      e.exports = a.p + 'static/media/cancelwhite.1cf4af66.svg';
    },
    333: function (e, n, a) {
      e.exports = a.p + 'static/media/cancelblack.cecbf7bf.svg';
    },
    334: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return r;
      }),
        a.d(n, 'b', function () {
          return i;
        });
      var t = a(7);
      const o = {
        delegatorAddress: '',
        validatorAddress: '',
        validatorName: '',
        amount: '',
        validatorSrcAddress: '',
        validatorDstAddress: '',
        validatorDstName: '',
        status: '',
      };
      n.c = (e = o, n) => {
        switch (n.type) {
          case 'SET_STAKE_DATA':
            return Object(t.a)({}, e, {}, n.data);
          case 'SET_CURRENT_STATUS':
            return Object(t.a)({}, e, { status: n.data });
          default:
            return Object(t.a)({}, e);
        }
      };
      const r = (e) => (n) => n({ type: 'SET_STAKE_DATA', data: e }),
        i = (e) => (n) => n({ type: 'SET_CURRENT_STATUS', data: e });
    },
    336: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return l;
      }),
        a.d(n, 'c', function () {
          return s;
        }),
        a.d(n, 'b', function () {
          return c;
        });
      var t = a(5),
        o = a.n(t),
        r = a(9),
        i = a(11);
      const l = 'SET_ORDERBOOK',
        s = (e) => (n) => n({ type: l, data: e }),
        c = (e) =>
          (function () {
            var n = Object(r.a)(
              o.a.mark(function n(a) {
                var t;
                return o.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), i.e.getDepth(e);
                        case 3:
                          ((t = n.sent).symbol = e.symbol),
                            a(s(t)),
                            (n.next = 11);
                          break;
                        case 8:
                          (n.prev = 8),
                            (n.t0 = n.catch(0)),
                            console.log(
                              'status:'
                                .concat(n.t0.status, ' message: ')
                                .concat(n.t0.statusText)
                            );
                        case 11:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
    },
    338: function (e, n, a) {
      'use strict';
      var t = a(8),
        o = a(0),
        r = a.n(o),
        i = a(41),
        l = a(24),
        s = a(187),
        c = a(324),
        d = a(329),
        u = a(249),
        m = a(1),
        h = a(327),
        p = (a(536), a(37)),
        g = a(35);
      function k() {
        const e = Object(c.a)([
          '\n  .rc-dropdown{\n    max-height: 180px;\n    overflow: auto;\n    box-shadow: 0px 1px 4px 0px rgba(90,102,124,0.2);\n    border-radius:3px;\n    z-index: ',
          ' !important;\n\n    ::-webkit-scrollbar {\n      width: 6px;\n      border-radius: 2px;\n      background-color: #DFE2E7;\n    }\n\n    ::-webkit-scrollbar-track {\n      border-radius: 2px;\n      background-color: #fff;\n    }\n\n    ::-webkit-scrollbar-thumb {\n      border-radius: 2px;\n      background-color: #848E9C;\n    }\n\n    ::-webkit-scrollbar-corner {\n      background-color: #848E9C;\n    }\n\n    .rc-dropdown-menu {\n      margin: 0px;\n      border: none;\n      box-shadow: 0 0 6px rgba(0,0,0,0.2);\n      background: ',
          ';\n\n      .rc-dropdown-menu-item {\n        cursor: pointer;\n        color: ',
          ';\n\n        &:hover{\n          color:#f0b90b;\n          background-color: ',
          ';\n        }\n      }\n\n      .rc-dropdown-menu-item-selected{\n        color:#f0b90b;\n        background-color: ',
          ";\n\n        &:after {\n          content: '';\n        }\n      }\n    }\n  }\n\n  /* make language select always dark theme */\n  .rc-dropdown.header-dropdown-overlay {\n      .rc-dropdown-menu {\n        background: ",
          ';\n\n        .rc-dropdown-menu-item {\n          background: ',
          ';\n          color: ',
          ';\n\n          &:hover{\n            color:',
          ';\n            background-color: ',
          ';\n          }\n        }\n\n        .rc-dropdown-menu-item-selected{\n          color:',
          ';\n          background-color: ',
          ';\n        }\n      }\n  }\n',
        ]);
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      const y = m.e.div.withConfig({
          displayName: 'Select__Wrapper',
          componentId: 'sc-3itfyu-0',
        })(
          [
            'position:relative;text-indent:10px;border-radius:0px;font-size:14px;color:',
            ';height:22px;line-height:22px;display:inline-block;cursor:pointer;box-sizing:border-box;min-width:100px;z-index:',
            ';width:',
            ';text-align:left;.selectValue{display:inline-block;vertical-align:top;}.dropdown{display:flex;align-items:center;&.rc-dropdown-open{.triangle{transform:translate(0,-50%) rotate(180deg);}}.triangle{transform:translate(0,-50%) rotate(0deg);transition:transform 0.3s ease-in-out;}}.triangle{position:absolute;right:5px;top:50%;transform:translate(0,-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid ',
            ';}',
          ],
          ({ theme: e }) => e.dropdownTextDisplayColor,
          () => p.a.dropdown,
          (e) => (e.width ? e.width : 'inherit'),
          ({ theme: e }) => e.dropdownSelectItemColor
        ),
        b = Object(m.c)(
          k(),
          p.a.modal,
          ({ theme: e }) => e.dropdownBg,
          ({ theme: e }) => e.dropdownSelectItemColor,
          ({ theme: e }) => e.dropdownSelectBgColor,
          ({ theme: e }) => e.dropdownSelectBgColor,
          ({ theme: e }) => e.headerDropdownBg,
          ({ theme: e }) => e.headerDropdownBg,
          ({ theme: e }) => e.fontColor,
          ({ theme: e }) => e.highlight,
          ({ theme: e }) => e.headerDropdownItemHoverBg,
          ({ theme: e }) => e.highlight,
          ({ theme: e }) => e.headerDropdownItemHoverBg
        );
      class f extends o.Component {
        constructor(e) {
          super(e),
            Object(t.a)(this, '_buildDefaultValue', () => {
              let e = this.props.defaultValue;
              if (e) return e;
              const n = this.props.options;
              return 0 === n.length ? '' : n[0].text;
            }),
            Object(t.a)(this, '_onSelect', ({ key: e }) => {
              const n = this.props.onChange;
              this.setState({ value: e }), n && n(e);
            }),
            Object(t.a)(this, '_getText', (e) => {
              const n = this.props.options.filter((n) => n.value === e)[0];
              return (n && n.text) || 'English';
            }),
            (this.state = { value: '' });
        }
        render() {
          const e = this.state.value,
            n = this.props,
            a = n.options,
            t = n.width,
            o = n.className,
            i = n.overlayClassName,
            l = this._buildDefaultValue(),
            s = e ? [e] : [l],
            c = a.map((e) =>
              r.a.createElement(
                u.a,
                { key: e.value },
                Object(h.a)(e.render) ? e.render() : e.text
              )
            ),
            m = r.a.createElement(
              u.b,
              { onSelect: this._onSelect, defaultSelectedKeys: s },
              c
            );
          return r.a.createElement(
            y,
            { width: t, className: 'select '.concat(o || '') },
            r.a.createElement(
              d.a,
              {
                trigger: ['hover'],
                overlay: m,
                animation: 'slide-up',
                overlayClassName: i,
              },
              r.a.createElement(
                'div',
                { className: 'dropdown' },
                r.a.createElement(g.a, { type: 'language-D' }),
                r.a.createElement(
                  'div',
                  { className: 'selectValue' },
                  this._getText(e || l)
                ),
                r.a.createElement('i', { className: 'triangle' })
              )
            ),
            r.a.createElement(b, null)
          );
        }
      }
      Object(t.a)(f, 'defaultProps', {
        options: [{ text: '', value: '' }],
        defaultValue: null,
        onChange: () => {},
        width: '',
        overlayClassName: '',
        withSearchBox: !1,
      });
      var w = f;
      const x = Object.keys(s.a).map((e) => ({ text: s.a[e], value: e }));
      class v extends o.PureComponent {
        constructor(...e) {
          super(...e),
            Object(t.a)(this, '_handleChange', (e) => {
              const n = this.props,
                a = n.history,
                t = n.match.url.split('/').slice(2).join('/');
              a.push('/'.concat(e, '/').concat(t));
            });
        }
        render() {
          const e = this.props,
            n = e.locale,
            a = e.overlayClassName;
          return o.createElement(w, {
            options: x,
            width: '130px',
            defaultValue: n,
            overlayClassName: a,
            onChange: this._handleChange,
          });
        }
      }
      Object(t.a)(v, 'defaultProps', {
        locale: 'en',
        match: {},
        overlayClassName: '',
      });
      n.a = Object(i.j)(Object(l.b)((e) => ({ locale: e.i18n.locale }))(v));
    },
    35: function (e, n, a) {
      'use strict';
      var t = a(201),
        o = a(0),
        r = a.n(o);
      const i = a(1).e.i.withConfig({
          displayName: 'Icon__Iconfont',
          componentId: 'mdbb86-0',
        })(
          ['color:', ';font-size:', ';&:hover{color:', ';}'],
          ({ color: e }) => e,
          ({ size: e }) => ''.concat(e, 'px'),
          (e) => (e.hoverColor ? e.hoverColor : e.color)
        ),
        l = (e) => {
          let n = e.type,
            a = e.size,
            o = e.color,
            l = Object(t.a)(e, ['type', 'size', 'color']);
          return r.a.createElement(
            i,
            Object.assign(
              {
                className: 'iconfont icon-'.concat(n),
                size: a || '16px',
                color: o,
              },
              l
            )
          );
        };
      (l.defaultProps = { size: 16, color: '', hoverColor: '' }), (n.a = l);
    },
    37: function (e, n, a) {
      'use strict';
      n.a = {
        negitive: -1,
        zeroIndex: 0,
        normalZIndex: 100,
        inputLabel: 100,
        textContent: 100,
        input: 300,
        confirmTransactionModal: 300,
        inputUnit: 600,
        fixedTableHeader: 700,
        filter: 800,
        fixedTab: 900,
        placeOrder: 900,
        placeOrderWidth: 1e3,
        dropdown: 1e3,
        calendar: 1e3,
        shade: 1e3,
        footer: 1e3,
        tradeOrders: 1e3,
        tradePair: 1e3,
        header: 1100,
        modal: 1100,
        loading: 1100,
        fullScreen: 1100,
        favorite: 1110,
        mobileLayout: 1200,
        routeLoading: 1200,
      };
    },
    426: function (e) {
      e.exports = JSON.parse(
        '{"account.footer.copyright":"\xa9 2018 - 2019 Binance.org. All rights reserved.","account.footer.copyright.trubi":"\xa9 2018 - 2019 Trubi. All rights reserved.","account.footer.exchange":"Exchange","account.footer.home":"Home","balances.filteredByAsset":"Filtered by asset","balances.hideZeroBalance":"Hide Zero Balance","balances.myBalances":"My Balances","blocked.country.list":"United States of America, China, Albania, Bosnia and Herzegovina, Belarus, Congo (DRC), C\xf4te d\'Ivoire, Crimea, Cuba, Iraq, Iran, North Korea, Liberia, Macedonia, Myanmar, Serbia, Sudan, Syria, Zimbabwe.","blocked.country.notice-1":"Part of the services on","blocked.country.notice-2":"are not available to the users from the below regions:","blocked.country.understand":"I understand","common.cancel":"Cancel","common.close":"Close","common.confirm":"Confirm ","common.connect":"Connect","common.continue":"Continue","common.errorOccured":"error occured","common.goBack":"Go Back","common.googleUnlock":"Google Drive","common.keystoreFile":"Keystore File","common.ledgerDevice":"Ledger Device","common.loading":"Loading","common.mnemonicPhrase":"Recovery Phrase","common.networkError":"Network Error","common.or":"or","common.password":"Password","common.placeOrder":"Place Order","common.pleaseCheckVisitWebsite":"Please check that you are visiting ","common.previous":"Previous","common.privateKey":"Private Key","common.systemError":"System Error","common.trezorDevice":"Trezor Device","common.viewMyPrivateKey":"View my Private Key","common.viewOnly":"View Only","common.walletConnect":"Mobile Wallet","common.yes":"Yes","common.warning":"Warning","common.next":"Next","common.buy-crypto-on-ramp":"Buy crypto","validation.onlyAlphaNumeric":"Only use letters and numbers","validation.onlyAlphaNumericWithSpace":"Only use letters, numbers and spaces","validation.size":"{label} length must between {min} and {max}","create.backupKeystore.backupYour":"Backup your ","create.backupKeystore.cannotRecoveredIt":"It cannot be recovered if you lose it.","create.backupKeystore.createBackupFile":"Create a backup of this file!","create.backupKeystore.downloadKeystoreFile":"Download Keystore File (UTC/JSON)","create.backupKeystore.getMyPrivateKey":"Get my Private Key","create.backupKeystore.keystoreFile":"Keystore File","create.backupKeystore.needFirstDownload":"You have to download keystore file first","create.backupKeystore.notShareFile":"Do not share or use this file on any unverified websites. Your funds can potentially be stolen.","create.backupMnemonic.note":"Back up the text below on paper and keep it somewhere secret and safe.","create.backupMnemonic.title":"Please backup mnemonic","create.backupText":"Back up the text below on paper and keep it somewhere secret and safe.","create.chooseKSOrMnemonic.keystoreAndPassword":"Keystore File + Password","create.chooseKSOrMnemonic.keystoreFile":"Keystore File","create.chooseKSOrMnemonic.recommendedUSBDrive":"Recommended to be backed up on a USB drive","create.chooseKSOrMnemonic.recommendedUSBDriveOrPaper":"Recommended to be backed up on paper or on a USB drive","create.chooseKSOrMnemonic.title":"How do you want to create your new wallet?","create.chooseKSOrMnemonic.unlockExistWallet":"Unlock an Existing Wallet","create.chooseKSOrMnemonic.useKeystoreFile":"Use your Keystore File (UTC / JSON) + Password to access your wallet","create.chooseKSOrMnemonic.useMnemonicPhrase":"Use your 24-word Mnemonic Phrase to access your wallet","create.confirmNote":"Are you sure you have noted down your Mnemonic Phrase?","create.createNewWallet":"Create New Wallet","create.doubleConfirmMnemonic.note":"Please select the Mnemonic Phrase in the correct order to ensure that your copy is correct.","create.doubleConfirmMnemonic.title":"Choose Secondary Access","create.doubleConfirmMnemonic.tryAgain":"Incorrect Mnemonic Phrase order. Please try again.","create.downloadKeyStoreFile":"Download Keystore File","create.enterPassword":"Enter a Password","create.google.createWallet":"Create wallet","create.google.createdSuccessfully":"Wallet Created Successfully","create.google.creationFailure":"Wallet Creation Failure","create.google.tryAgain":"Try again","create.google.walletName":"Wallet name","create.googledrive.rePassErr":"The password entered does not match","create.keystoreFileAndPassword":"Create Keystore File + Password","create.pick.useGoogleDrive.description":"Create a new wallet using your Google account","create.pick.useGoogleDrive.title":"Using Google Drive","create.pick.useLocalKeystore.description":"Create a new wallet that you can store on your device","create.pick.useLocalKeystore.title":"Using Keystore File","create.pleaseCheck":"Please check that you are visiting ","create.reEnterPassword":"Re-enter Password","create.stepTwo.desc":"We are about to show your mnemonic phrase, please ensure that no one else is looking at your screen.","create.success.desc1":"You are ready to use the Binance Chain Wallet and","create.success.desc2":"Decentralized Exchange!","create.success.title":"You\'re all set!","create.success.unlockWallet":"Unlock the wallet","create.tutorial.next":"Next","create.tutorial.skip":"Skip Tutorial (Not Recommended)","create.tutorial.step1.desc1":"Binance is committed to providing you with the best and safest experience on the Binance Chain. To do that, we ask for a minute of your time to understand how decentralized wallets work and to take action in safeguarding yourself. You can find the full Terms of Service here.","create.tutorial.step1.title":"Our Commitment","create.tutorial.step2.desc1":"You are solely responsible for keeping your funds. No one else, not even Binance, can help you recover your wallet if you lose it.","create.tutorial.step2.desc2":"When you create a wallet on Binance, you are provided with 3 different formats, each of them can be used to access your wallet.","create.tutorial.step2.title":"Keeping Your Funds","create.tutorial.step3.desc1":"You can think of the keystore file like a \u201cUser ID\u201d, while the password unlocks your wallet. Both are needed to access your wallet,so keep them safe. This is a required format on Binance.","create.tutorial.step3.title":"Keystore File + Password","create.tutorial.step4.desc1":"24 words that are both the \u201cUser ID\u201d and password.This is a secondary way to access your wallet if you lose your keystore file or forget your password. Anyone who knows your mnemonic phrase can access your wallet, so keep it safe.","create.tutorial.step4.title":"Mnemonic Phrase","create.tutorial.step5.desc1":"This is an alternative representation of the mnemonic phase words.","create.tutorial.step5.desc2":"Binance requires all users to use the keystore file + password; and choose between the mnemonic phrase or private key as a secondary method.","create.tutorial.step5.title":"Private key","create.tutorial.title":"Wallet Creation Tutorial","create.tutorial.understand":"I Understand","create.understandCheckbox":"I understand that Binance cannot recover or reset my password or the keystore file. I will make a backup of the keystore file/password, keep them secret, complete all wallet creation steps and agree to all the ","create.understandCheckbox.terms":"terms","create.unlockExistWallet":"Unlock an Existing Wallet","create.yourKeyStore":"Your Keystore","editWallet.remove":"Remove","editWallet.remove.desc1":"Please check that the wallet has no money","editWallet.remove.desc2":"as there is no way of recovering the wallet","editWallet.remove.removeButton":"Yes, remove this wallet","editWallet.remove.title":"Do you really want to remove this wallet?","editWallet.rename":"Rename","editWallet.rename.duplicateName":"Wallet name is exist","editWallet.rename.errMsg":"Name should not be null","editWallet.rename.title":"Wallet name","editWallet.title":"Wallet Name","editWallet.createWallet":"Create Wallet","editWallet.unlockWallet":"Unlock Wallet","exchange.BTCValue":"BTC Value","exchange.amount":"Amount","exchange.asset":"Asset","exchange.availableBalance":"Available Balance","exchange.blockHeight":"BlockHeight","exchange.buy":"Buy","exchange.calendar.clear":"Clear","exchange.calendar.ok":"Ok","exchange.calendar.today":"Today","exchange.chartbox.depth":"Depth","exchange.coin":"Coin","exchange.date":"Date","exchange.estimatedValue":"Estimated Value","exchange.filled":"Filled","exchange.from":"From","exchange.frozen":"Frozen","exchange.hideAllCanceled":"Hide all canceled","exchange.hideOtherPairs":"Hide Other Pairs","exchange.inOrder":"In Order","exchange.index.books":"Books","exchange.index.chart":"Chart","exchange.max":"Max","exchange.min":"Minimum trading unit:","exchange.name":"Name","exchange.notional":"Notional","exchange.oneDay":"1 Day","exchange.oneMonth":"1 Month","exchange.oneWeek":"1 Week","exchange.pair":"Pair","exchange.placeOrder.bestAsk":"Best Ask","exchange.placeOrder.bestBid":"Best Bid","exchange.placeOrder.limitOrder":"Limit Order","exchange.placeOrder.noEnoughBalance":"not enough balance","exchange.placeOrder.orderError":"Order Error","exchange.placeOrder.orderPriceHigher":"Your order price will be 2% higher than the latest market price. Please proceed cautiously.","exchange.placeOrder.orderPriceLow":"Your order price will be 2% less than the latest market price. Please proceed cautiously.","exchange.placeOrder.pleaseInputCorrectAmount":"Please input correct amount","exchange.placeOrder.buy.correctAmountForbep8":"The amount should be > 1","exchange.placeOrder.sell.correctAmountForbep8":"The amount should be > 1 or = balances","exchange.placeOrder.pleaseInputCorrectPrice":"Please input correct price","exchange.placeOrder.roundSizeErrorMsg":"You can only {side} {baseAsset} in multiples of {lotSize}","exchange.placeOrder.successNotifyMsg":"You have successfully created a limit order to {side} {quantity} {quoteAsset}","exchange.placeOrder.successNotifyTitle":"Limit {side} Order Created","exchange.pleaseSelectDate":"please select date","exchange.pleaseUnlockWallet.btn":"Unlock Wallet","exchange.pleaseUnlockWallet.createNewWallet":"Create New Wallet","exchange.pleaseUnlockWallet.desc":"Oops! Please unlock your wallet first","exchange.pleaseUnlockWallet.noWallet":"No Wallet?","exchange.price":"Price","exchange.search":"Search","exchange.sell":"Sell","exchange.side":"Side","exchange.status":"Status","exchange.symbolPriceInfo.high":"High","exchange.symbolPriceInfo.lastPrice":"Last Price","exchange.symbolPriceInfo.low":"Low","exchange.symbolPriceInfo.twentyFourHChange":"24h Change","exchange.symbolPriceInfo.twentyFourHHigh":"24h High","exchange.symbolPriceInfo.twentyFourHLow":"24h Low","exchange.symbolPriceInfo.twentyFourHVolume":"24h Volume","exchange.symbolPriceInfo.vol":"Vol","exchange.threeMonths":"3 Months","exchange.time.from":"From","exchange.to":"To","exchange.total":"Total","exchange.totalBalance":"Total Balance","exchange.tradingHistory.time":"Time","exchange.tradingHistory.title":"Trading History","exchange.tradingPair.change":"Change","exchange.tradingPair.pair":"Pair","exchange.tradingPair.price":"Price","exchange.tradingPair.search":"Search","exchange.tradingPair.volume":"Volume","exchange.txFee":"TxFee","exchange.txHash":"TxHash","exchange.type":"Type","exchange.value":"Value","exchange.miniToken.warning.title":"Do your own research","exchange.miniToken.warning.content1":"MiniToken is a special token type on Binance Chain. The information and materials provided here, whether or not provided on Binance\'s website/webpages, on third party websites, in marketing materials, newsletters or any form of publication are provided for general information only. They do not constitute an offer to buy or sell any products offered or advertised. Likewise, they are not to be taken as investment, financial or trading advice. Any expression of opinion is personal to the author and there is no guarantee of completeness or accuracy.","exchange.miniToken.warning.content2":"Binance shall not be responsible for any losses arising from investment based on any information made available via any of Binance\'s social media accounts or websites. All users or new participants, regardless of experience and knowledge are strongly recommended to do their own research prior to trying out any of the products we offer. If the user is still unsure after research, he/she is encouraged to avoid the product entirely. The user acknowledges that some of the products offered by Binance could be on the riskier spectrum. For avoidance of doubt, all users are encouraged to read the Terms of Use clearly.","exchange.miniToken.warning.button1":"I understand","exchange.miniToken.warning.fully.understand":"I fully understand, do not show it anymore.","fees.fee":"Fee","fees.height":"Height","fees.note":"Note","footer.terms":"Terms of Service","footer.privacy":"Privacy","googledrive.create.nameExist":"Name exist","header.balances":"Balances","header.createWallet":"Create Wallet","header.exchange":"Market","header.exchange.bep2":"Tokens (BEP2)","header.exchange.bep8":"MiniTokens (BEP8)","header.exchange.menu.bep2":"Tokens (BEP2)","header.exchange.menu.bep8":"MiniTokens (BEP8)","header.explorer":"Explorer","header.faq":"Docs / FAQ","header.blog":"Blog","header.feeHistory":"Fee History","header.forums":"Forums","header.mainnet":"Mainnet","header.openOrders":"Open Orders","header.orderHistory":"Order History","header.orders":"Orders","header.testnet":"testnet","header.tradeHistory":"Trade History","header.transactions":"Transactions","header.unlockWallet":"Unlock Wallet","header.user.changeWallet":"Change Wallet","header.user.closeWallet":"Close Wallet","header.user.coinomi":"Coinomi ","header.user.copyAddress":"copy address","header.user.copySuccess":"Copy successful!","header.user.createNewWallet":"Create New Wallet","header.user.exportKeystoreFile":"Export Keystore File","header.user.goToExplorer":"go to explorer","header.user.infinito":"Infinito ","header.user.ledger":"Ledger ","header.user.trezor":"Trezor Device","header.user.wallet":"Wallet","header.user.walletConnect":"WalletConnect ","header.youWantCloseWallet":"Are you sure you want to close wallet?","home.aboutPage.desc1.line1":"Binance Chain is a blockchain initially developed by Binance.","home.aboutPage.desc1.line2":"It\'s modern, safe and has near-instant transaction finality (it\'s fast).","home.aboutPage.desc2.line1":"Binance DEX is a decentralized order matching engine,","home.aboutPage.desc2.line2":"powered by the core Binance Chain technology.","home.aboutPage.desc3.line1":"Binance DEX is a modern and secure marketplace for issuing","home.aboutPage.desc3.line2":"and exchanging digital assets, and no-one other than you holds your keys. Trading your favorite assets has never been safer.","home.aboutPage.title":"About Binance DEX","home.binanceDex":"Binance DEX","home.processPage.aboutBalance":"About Binance DEX","home.processPage.create":"Create","home.processPage.createDesc":"First step is to create a Binance Chain address.","home.processPage.createWallet":"Create a New Wallet","home.processPage.getStart":"Get started with Binance DEX","home.processPage.go":"Go","home.processPage.placeOrders":"Place Orders","home.processPage.placeOrdersDesc":"Use the web wallet or API to send and cancel orders.","home.processPage.transferAssets":"Transfer Assets","home.processPage.transferAssetsDesc":"With a Binance Chain address, which can be generated with any wallet that supports Binance Chain, you can transfer BNB or other assets stored on that address.","home.processPage.unlock":"Unlock","home.processPage.unlockDesc":"Four ways to unlock your wallet","home.processPage.unlockMode1":"WalletConnect","home.processPage.unlockMode2":"Ledger","home.processPage.unlockMode3":"Keystore File + Password","home.processPage.unlockMode4":"Mnemonic","home.processPage.unlockWallet":"Unlock a Wallet","home.startPage.createWallet":"Create a Wallet","home.startPage.desc1":"Fast and secure decentralized digital asset exchange","home.startPage.desc2":"The new cryptocurrency trading standard is here.","home.startPage.getTestBNB":"Get Test BNB","home.startPage.startTrading":"Start Trading","home.whyPage.community":"It\'s a Community Initiative","home.whyPage.communityDesc":"Binance DEX is powered by on-chain governance and open source software components.","home.whyPage.decentralized":"Decentralized","home.whyPage.decentralizedDesc":"Experience direct wallet to wallet trading without any third party or central authority.","home.whyPage.getStarted":"Get Started","home.whyPage.lowTradingFees":"Low Trading Fees","home.whyPage.lowTradingFeesDesc":"Trade with no withdrawal, deposit, or order placement fees \u2014 and BNB holders benefit even more.","home.whyPage.safeAndSecure":"Safe and Secure","home.whyPage.safeAndSecureDesc":"Your funds are stored on a blockchain address with a private key that only you control.","home.whyPage.title":"Why Binance DEX","home.whyPage.userFriendly":"User Friendly","home.whyPage.userFriendlyDesc":"Create a wallet, unlock your wallet, and you\'re ready to trade. No need to deposit or withdraw.","inputPassword.passwordRule":"Your password must include the following properties","inputPassword.passwordRule1":"8 or more characters","inputPassword.passwordRule2":"An upper-case letter, symbol and a number","inputPassword.setANewPassword":"Set a New Password","landing.connectWallet":"Connect Wallet","landing.createWallet":"Create Wallet","landing.desc1":"Binance DEX","landing.desc2":"Fast and secure decentralized digital asset exchange. The new crypto currency trading standard is here.","landing.footer.fee":"Fee","landing.footer.terms":"Term of Service","landing.footer.privacy":"Privacy","landing.how.connect":"Connect","landing.how.connect.desc":"Accessing Binance DEX is easier than you think. Click the connect button and choose from connection options. You\u2019re all set.","landing.how.create":"Create","landing.how.create.desc":"Binance DEX gives you the freedom to choose from convenient keystores to ultra-secure hardware wallet options.","landing.how.step":"step","landing.how.title":"How to use","landing.how.trade":"Trade","landing.how.trade.desc":"Our goal is to make trading seamless and indistinguishable from Binance.com. To do that, we have optimised the best features so that everything you love is on Binance DEX too.","landing.markets":"Markets","landing.markets.24HChange":"24H Change","landing.markets.24HVolume":"24H Volume","landing.markets.lastPrice":"Last Price","landing.markets.pair":"Pair","landing.markets.searchPlaceholder":"Search coin name","landing.menu.balances":"Balances","landing.menu.changeWallet":"Change Wallet","landing.menu.closeWallet":"Close Wallet","landing.menu.community":"Community","landing.menu.copyAddress":"copy address","landing.menu.docs":"Docs","landing.menu.exchange":"Exchange","landing.menu.explorer":"Explorer","landing.menu.orders":"Orders","landing.menu.orders.feeHistory":"Fee History","landing.menu.orders.openOrders":"Open Orders","landing.menu.orders.orderHistory":"Order history","landing.menu.orders.tradeHistory":"Trade History","landing.menu.testnet":"Testnet","landing.menu.tools":"Tools","landing.menu.transaction":"Transaction","landing.menu.wallet":"Wallet","landing.startTrading":"Start Trading","landing.trust.activeAddress":"Active Wallets","landing.trust.activeAddress.desc":"More people trust Binance DEX\'s infrastructure and trading systems than any other wallet solution.","landing.trust.pairs":"Pairs","landing.trust.pairs.desc":"Binance DEX gives you more options and the flexibility to trade, with more added every week.","landing.trust.rank":"Ranked","landing.trust.rank.desc":"Binance DEX is the #1 decentralized cryptocurrency exchange on Coinmarketcap by volume.","landing.trust.title":"Why people trust us","landing.why.competitive":"Competitive","landing.why.competitive.desc":"Fees are just 0.04% when you use BNB to pay for trading fees. That\u2019s almost half of Binance.com, the world\u2019s leading exchange on trading fees.","landing.why.fast":"Fast","landing.why.fast.desc":"With 1 second block times, blockchain trade confirmations are a thing of the past. Get all the advantages of a DEX without the downsides.","landing.why.secure":"Secure","landing.why.secure.desc":"Binance DEX takes security to a whole new level. Peer-to-peer transfers and trades mean virtually zero exposure to security threats.","landing.why.title":"Why Binance DEX","lang.menu.copyAddress":" ","noContent.descPrefix":"You have no ","openOrders.areYourTrue":"Are you sure you want to","openOrders.cancel":"cancel","openOrders.cancel all":"cancel all","openOrders.cancel buy":"cancel buy","openOrders.cancel sell":"cancel sell","openOrders.cancelAll":"Cancel All","openOrders.cancelBuy":"Cancel Buy","openOrders.cancelOrder":"Cancel Order","openOrders.cancelOrders":"Cancel Orders","openOrders.cancelPartialSuccess":"Cancel partial success","openOrders.cancelSell":"Cancel Sell","openOrders.cancelSuccess":"Cancel Success","openOrders.keepOrder":"Keep Order","openOrders.keepOrders":"Keep Orders","openOrders.noBuyOpenOrders":"no buy open orders","openOrders.noOpenOrders":"no open orders","openOrders.noSellOpenOrders":"no sell open orders","openOrders.title":"Open Orders","orderForm.amount":"Amount","orderForm.avb":"Avb","orderForm.buy":"Buy","orderForm.equivalent":"Equivalent","orderForm.price":"Price","orderForm.sell":"Sell","orderForm.total":"Total","orderHistory.openHistory":"order history","orderHistory.title":"Order History","orderHistory.tradeId":"Trade ID","orderHistory.tradingPrice":"Trade Price","orderHistory.tradingTotal":"Trading Total","privateKeyModal.backupText":"Back up the text below on paper and keep it somewhere secret and safe.","privateKeyModal.title":"Your Private Key","testnet.binanceChainExplorerGuide":"Binance Chain Explorer Guide","testnet.fastAndSecureDesc":"Fast and secure decentralized digital asset exchange","testnet.fundingYourTestnetAccount":"Funding Your Testnet Account","testnet.howToAccessYourWallet":"How to Access Your Wallet","testnet.howToCreateAWallet":"How to Create a Wallet","testnet.interfaceGuide":"Interface Guide","testnet.thingsToAvoid":"Things to Avoid","testnet.title":"Binance Decentralized Exchange (TESTNET)","token.issue.bep2Title":"BEP-2 Token","token.issue.bep2Desc":"BEP-2 is a technical standard for the issuance and implementation of tokens on the Binance Chain.","token.issue.bep8Title":"BEP-8 Token (Mini-BEP2)","token.issue.bep8Desc":"BEP-8 is a technical standard for the issuance and implementation of tokens on the Binance Chain.","token.issue.title":"Token Issuance","token.issue.confirmationModal.title":"Check Token Contract","token.issue.confirmationModal.confirm":"Confirm","token.issue.tokenNameLabel":"Token Name","token.issue.tokenNameDesc":"Token name is limited to 32 characters.","token.issue.symbolLabel":"Symbol","token.issue.maxSupplyLabel":"Max Supply","token.issue.totalSuppyHeader":"Select Token Max Supply","token.issue.totalSuppyDesc":"Max supply is the maximum number of tokens that can be created","token.issue.supplyLabel":"Supply","token.issue.supplyDesc":"The number of tokens you need to issue","token.issue.prev":"My Token List","token.issue.updateTokenInfoHeader":"Set the URL to update token information(Optional)","token.issue.updateTokenInfoHeaderTips":"The URL will return JSON-formatted information that will be an introduction to your MiniToken","token.issue.fillInRequestedUrlLabel":"Fill in the requested URL","token.issue.issuanceFee":"issuance fee","token.list.title":"My Tokens","token.issueModal.mintable":"Mintable","token.issueModal.nonMintable":"Non-mintable","token.issueModal.name":"Token Name","token.issueModal.nameErrMsg":"token name is limited to 32 characters","token.issueModal.symbol":"Symbol","token.issueModal.symbolErrMsg":"symbol should be alphanumeric and length is limited to 3~8","token.issueModal.title":"Issue Token","token.issueModal.totalSupply":"Total Supply","token.issueModal.totalSupplyErrMsg":"invalid supply amount","token.listModal.address":"Address","token.listModal.confirm":"Confirm","token.listModal.initPrice":"Init Price","token.listModal.proposalId":"ProposalId","token.listModal.quoteAsset":"Quote Asset","token.listModal.title":"List Token","token.listModal.tokenName":"Token Name","token.main.burn":"Burn","token.main.freeze":"Freeze","token.main.issueToken":"Issue Token","token.main.list":"List","token.main.listSuccessmsg":"List success","token.main.mint":"Mint","token.main.proposal":"Proposal","token.main.submitListFirst":"Please submit list proposal first","token.main.submitSuccessmsg":"submit list proposal success","token.main.title":"My Token List","token.main.unfreeze":"UnFreeze","token.proposalModal.address":"Address","token.proposalModal.baseAsset":"Base Asset","token.proposalModal.desc":"Description","token.proposalModal.expireTime":"Expire Time","token.proposalModal.hours":"Hours","token.proposalModal.initDeposit":"Initial Deposit","token.proposalModal.initPrice":"Init Price","token.proposalModal.initPriceErr":"Init price should not be null","token.proposalModal.initPriceErr2":"init price should greater than 0","token.proposalModal.quoteAsset":"Quote Asset","token.proposalModal.title":"List Proposal","token.proposalModal.titleErr":"Proposal title should not be null","token.proposalModal.titleErr2":"Proposal title is longer than max length of 128","token.proposalModal.votingPeriod":"Voting Period","token.table.col.mintable":"Mintable","token.table.col.name":"Name","token.table.col.symbol":"Symbol","token.table.col.tokenType":"Type","token.table.col.totalSupply":"Total Supply","token.tokenModal.address":"Address","token.tokenModal.amount":"Amount","token.tokenModal.available":"Available","token.tokenModal.burnTitle":"Burn Token","token.tokenModal.confirm":"Confirm","token.tokenModal.desc":" ","token.tokenModal.freezeTitle":"Freeze Token","token.tokenModal.mintTitle":"Mint Token","token.tokenModal.name":"Name","token.tokenModal.unfreezeTitle":"Unfreeze Token","token.list.tradepair.exist":"Trade pair existed","token.warning":"We do not support walletconnect compatible wallets currently and for security reason, Ledger is the best choice to Issue/List/Mint/Burn Token","tradeHistory.tradeHistory":"trade history","transaction.here":"here","transaction.notes":"Not every transaction is included below. For full history, please refer to","txHistory.here":"here","txHistory.notEveryTransactionIsIncludedBelow":"Not every transaction is included below. For full history, please refer to here.","txHistory.title":"Transaction History","unlock.connectAddress.enterYourAddress":"Enter your address","unlock.connectAddress.invalidAddress":"Invalid address","unlock.connectAddress.viewOnlyMode":"Enter an address for view only mode","unlock.createNewWallet":"Create a New Wallet","unlock.google.chooseWallet":"Choose from your available wallets:","unlock.google.logIn":"Log in","unlock.google.notLoggedIn":"You have not logged into your Google Account","unlock.google.signedInAs":"You are signed in as","unlock.googledrive.editWallet":"Edit Wallet Details","unlock.googledrive.wallets":"Select from your following wallets to continue:","unlock.index.selectUnlockType":"Select how you would like to unlock","unlock.index.title":"Unlock Your Wallet","unlock.keystore.enterYourWalletPass":"Enter your wallet password","unlock.keystore.paste":"Or paste the contents of your keystore file","unlock.keystore.select":"Connect an encrypted wallet file and input your password","unlock.keystore.upload":"Upload keystore file","unlock.ledger.appInstallation":"App Installation","unlock.ledger.binanceChainReady":"Binance Chain Ready","unlock.ledger.connectToLedger":"Connect to Ledger","unlock.ledger.enterPINCode":"Enter PIN Code","unlock.ledger.getTheApp":"Get the app","unlock.ledger.havingConnectionIssues":"Having Connection Issues?","unlock.ledger.mustBeOnScreen":"must be on-screen","unlock.ledger.openBinanceChain":"Open Binance Chain","unlock.ledger.text":"Connect your hardware wallet here by following the on-screen instructions","unlock.ledger.title":"Unlock with a Ledger Device","unlock.ledger.usageInstructions":"Usage Instructions","unlock.mnemonic.pleaseEnterYourPhrase":"Please enter your 24 word phrase","unlock.mnemonic.pleaseSeparateEachWordSpace":"Please separate each word with a space.","unlock.mnemonic.warning.desc1":"This option restores a lost keystore file or password,","unlock.mnemonic.warning.desc2":"or imports a seed from another wallet app.","unlock.mnemonic.warning.desc3":"Warning! Entering your seed phrase or private key on any website is very dangerous. If you have malicious extensions installed in your browser or accidentally visit a phishing website, your assets can be stolen.","unlock.privateKey.enterYourPrivateKey":"Enter your private key (hex format)","unlock.privateKey.invalid":"The Private Key you entered is not in the right format and is invalid. Please try again.","unlock.privateKey.passwordInvalid":"That password is invalid. Please try again.","unlock.privateKey.warning":"For restoring a lost keystore file or password","unlock.privateKey.warningQuestion":"Entering your private key on any website is very dangerous. If you have malicious extensions installed in your browser or accidentally visit a phishing website, your assets can be stolen.","unlock.recover.content":"Recover wallet access using a recovery phrase made known during wallet creation","unlock.recover.download.button":"Download","unlock.recover.downloadTitle":"Download Your Keystore File","unlock.recover.password.placeholder":"Enter a strong password","unlock.recover.submit":"Submit","unlock.recover.title":"Recover a Keystore File","unlock.recover.understand.continue":"Recover a Keystore File","unlock.recover.word.placeholder":"Search","unlock.recover.wordlist.reset":"Reset","unlock.recover.wordlistTitle":"Please select your Mnemonic Phrase from the left list","unlock.support.wallets":" ","unlock.temporarySessionPassword":"Temporary session password","unlock.thisIsNotAValidWalletFile":"This is not a valid wallet file","unlock.trezor.connectToTrezor":"Connect to Trezor","unlock.trezor.firmwareNotice":"Note: Please make sure that you have updated to the latest Trezor firmware in order to use your device with the Binance Chain.","unlock.trezor.notOnTestNet":"Note: Trezor devices require Chrome or Firefox for now ","unlock.trezor.title":"Unlock with a Trezor Device","unlock.unlockWalletNow":"Unlock Wallet Now","unlock.walletConnect.notes":"Note: Trust Wallet and CoolWallet do not support the Binance Chain Testnet.","unlock.walletConnect.recommendedWallet":"Supported apps include","unlock.walletConnet.getTrustWallet":"Get Trust Wallet","unlock.walletConnet.qrCodeDesc1":"Get WalletConnect QR Code","unlock.walletConnet.qrCodeDesc2":"Don\u2019t have an app that supports WalletConnect yet?","unlock.walletConnet.showWalletQrCode":"Connect your mobile wallet here using a QR code on this screen","unlock.walletConnet.title":"Recommended","walletConnect.clickHereToUnlock":"Click here to unlock another wallet","walletConnect.error":"WalletConnect Error","walletConnect.errorOccur":"A WalletConnect error has occurred","walletConnect.pleaseEnsureOpenWorking":"Please ensure that the app is open and working.","walletConnect.pleaseUseAWalletConnect":"Please use an app that supports WalletConnect to scan the QR code above","walletConnect.qrCode":"WalletConnect QR code","walletConnect.readyToConfirm":"Please Confirm","walletConnect.readyToConfirmBody":"Please confirm the transaction on the wallet App.","walletconnect.notifycation.connectAgain":"Connect again","walletconnect.notifycation.disconnectMessage":" Disconnected from Mobile Wallet...","walletconnect.notifycation.hide":"Hide","local.secure.storage":"Local Secure Storage","local.keystore.replace.tips":"You already have a keystore file, make sure you have backed up before replace","staking.title":"Staking Communication","staking.goback":"Please go back to staking page manually and to play around","staking.confirm":"Confirm","staking.cancel":"Cancel","staking.notification.delegator.address":"Delegator address:","staking.notification.validator":"Validator:","staking.notification.amount":"Amount:","staking.notification.network.fee":"Network fee:","staking.notification.srcValidator.address":"Source Valiator:","staking.notification.dstalidator.address":"Destination Valiator:","staking.notification.total":"Total:","checkInstallModal.title":"Oops!","checkInstallModal.text1":"Looks like you don\'t have the Binance Chain browser extension installed yet. Head over to the","checkInstallModal.link":"Chrome/Firefox Extension","checkInstallModal.text2":"to quickly install the extension.","checkInstallModal.button.install":"Install Binance Chain Wallet","walletInfo.address":"Address","walletInfo.unlock":"Unlock Wallet","walletInfo.disconnect":"Disconnect","createWallet.modal.title":"Create Wallet","createWallet.option.install.extension.title":"Install Binance Chain Wallet","createWallet.option.install.extension.content":"Create an account via Binance Chain Wallet","unlockWallet.modal.title":"Unlock Wallet","unlockWallet.option.extension.title":"Binance Chain Wallet","unlockWallet.option.extension.content":"Binance Chain Wallet supports to use keystore and seed phrase to unlock wallets, and also supports Ledger Device.","unlockWallet.option.extension.link":"Use original way to unlock","unlockWallet.option.wallet.connect":"WalletConnect","unlockWallet.title":"Connect Wallet","unlockWallet.description":"Scan QR code with a WalletConnect-compatible wallet","loadingModal.title":"Waiting for Confirmation","loadingModal.content":"Confirm this transaction in your wallet","extension.wallet.provider.title":"You Must Change Network","extension.wallet.change.network":"Change Network","extension.wallet.provider.desc":"You\'re on the wrong network. Simply open the wallet and switch from {from} to {to}.","extension.wallet.wait.for.confirmation":"Waiting for Confirmation","extensino.wallet.wait.for.desc":"Confirm this transaction in your wallet"}'
      );
    },
    43: function (e, n, a) {
      'use strict';
      (function (e) {
        n.a = () =>
          ('undefined' !== typeof window &&
            'object' === typeof window.process &&
            'renderer' === window.process.type) ||
          !(
            'undefined' === typeof e ||
            'object' !== typeof e.versions ||
            !e.versions.electron
          ) ||
          ('object' === typeof navigator &&
            'string' === typeof navigator.userAgent &&
            navigator.userAgent.indexOf('Electron') >= 0);
      }.call(this, a(23)));
    },
    445: function (e, n) {
      function a(e) {
        var n = new Error("Cannot find module '" + e + "'");
        throw ((n.code = 'MODULE_NOT_FOUND'), n);
      }
      (a.keys = function () {
        return [];
      }),
        (a.resolve = a),
        (e.exports = a),
        (a.id = 445);
    },
    45: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return l;
      }),
        a.d(n, 'c', function () {
          return s;
        }),
        a.d(n, 'b', function () {
          return c;
        }),
        a.d(n, 'e', function () {
          return d;
        }),
        a.d(n, 'g', function () {
          return u;
        }),
        a.d(n, 'f', function () {
          return m;
        }),
        a.d(n, 'd', function () {
          return h;
        });
      var t = a(5),
        o = a.n(t),
        r = a(9),
        i = a(11);
      const l = 'account/SET_ACCOUNT',
        s = 'account/SET_USER_INFO',
        c = 'account/SET_NEEDAUTH',
        d = (e) => (n) => n({ type: l, data: e }),
        u = (e) => (n) => n({ type: s, data: e }),
        m = (e) => (n) => n({ type: c, data: e }),
        h = (e) =>
          (function () {
            var n = Object(r.a)(
              o.a.mark(function n(a) {
                var t;
                return o.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), i.e.getAccount(e);
                        case 3:
                          (t = n.sent), a(u(t)), (n.next = 10);
                          break;
                        case 7:
                          (n.prev = 7),
                            (n.t0 = n.catch(0)),
                            console.log(
                              'status:'
                                .concat(n.t0.status, ' message: ')
                                .concat(n.t0.statusText)
                            );
                        case 10:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
    },
    474: function (e, n, a) {
      'use strict';
      a.d(n, 'b', function () {
        return r;
      }),
        a.d(n, 'a', function () {
          return i;
        });
      var t = a(80);
      const o = 'testnet' === a(11).c ? 'tbnb' : 'bnb',
        r = (e, n) => t.crypto.generateKeyStore(e, n),
        i = (e, n, a) => {
          const r = t.crypto.getPrivateKeyFromKeyStore(e, n);
          if (t.crypto.getAddressFromPrivateKey(r, o) !== a)
            throw new Error('wrong password');
          return r;
        };
    },
    477: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return t;
      });
      const t =
        !!Object({
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
        }).REACT_APP_GOOGLE_UNLOCK_API_KEY &&
        !!Object({
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
        }).REACT_APP_GOOGLE_UNLOCK_CLIENT_ID;
    },
    50: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return o;
      }),
        a.d(n, 'b', function () {
          return r;
        }),
        a.d(n, 'd', function () {
          return i;
        }),
        a.d(n, 'c', function () {
          return l;
        });
      var t = a(41);
      const o = 'bep2',
        r = 'bep8',
        i = () => {
          const e = Object(t.h)().pathname;
          return /\/mini\/?/.test(e) ? r : o;
        },
        l = () => (/\/mini\/?/.test(window.location.pathname) ? r : o);
    },
    510: function (e) {
      e.exports = JSON.parse(
        '{"account.footer.copyright":"\xa9 2018 - 2019 Binance.org. All rights reserved.","account.footer.copyright.trubi":"\xa9 2018 - 2019 Trubi. All rights reserved.","account.footer.exchange":"Exchange","account.footer.home":"Home","balances.filteredByAsset":"Filtered by asset","balances.hideZeroBalance":"Hide Zero Balance","balances.myBalances":"My Balances","blocked.country.list":"United States of America, China Mainland, Albania, Bosnia and Herzegovina, Belarus, Congo (DRC), C\xf4te d\'Ivoire, Crimea, Cuba, Iraq, Iran, North Korea, Liberia, Macedonia, Myanmar, Serbia, Sudan, Syria, Zimbabwe.","common.cancel":"Cancel","common.close":"Close","common.confirm":"Confirm ","common.connect":"Connect","common.continue":"Continue","common.errorOccured":"error occured","common.goBack":"Go Back","common.googleUnlock":"Google Drive","common.keystoreFile":"Keystore File","common.ledgerDevice":"Ledger Device","common.loading":"Loading","common.mnemonicPhrase":"Recovery Phrase","common.networkError":"Network Error","common.or":"or","common.password":"Password","common.placeOrder":"Place Order","common.pleaseCheckVisitWebsite":"Please check that you are visiting ","common.previous":"Previous","common.privateKey":"Private Key","common.systemError":"System Error","common.trezorDevice":"Trezor Device","common.viewMyPrivateKey":"View my Private Key","common.viewOnly":"View Only","common.walletConnect":"Mobile Wallet","common.yes":"Yes","common.warning":"Warning","common.next":"Next","common.buy-crypto-on-ramp":"Buy crypto","validation.onlyAlphaNumeric":"Only use letters and numbers","validation.size":"{label} length must between {min} and {max}","create.backupKeystore.backupYour":"Backup your ","create.backupKeystore.cannotRecoveredIt":"It cannot be recovered if you lose it.","create.backupKeystore.createBackupFile":"Create a backup of this file!","create.backupKeystore.downloadKeystoreFile":"Download Keystore File (UTC/JSON)","create.backupKeystore.getMyPrivateKey":"Get my Private Key","create.backupKeystore.keystoreFile":"Keystore File","create.backupKeystore.needFirstDownload":"You have to download keystore file first","create.backupKeystore.notShareFile":"Do not share or use this file on any unverified websites. Your funds can potentially be stolen.","create.backupMnemonic.note":"Back up the text below on paper and keep it somewhere secret and safe.","create.backupMnemonic.title":"Please backup mnemonic","create.backupText":"Back up the text below on paper and keep it somewhere secret and safe.","create.chooseKSOrMnemonic.keystoreAndPassword":"Keystore File + Password","create.chooseKSOrMnemonic.keystoreFile":"Keystore File","create.chooseKSOrMnemonic.recommendedUSBDrive":"Recommended to be backed up on a USB drive","create.chooseKSOrMnemonic.recommendedUSBDriveOrPaper":"Recommended to be backed up on paper or on a USB drive","create.chooseKSOrMnemonic.title":"How do you want to create your new wallet?","create.chooseKSOrMnemonic.unlockExistWallet":"Unlock an Existing Wallet","create.chooseKSOrMnemonic.useKeystoreFile":"Use your Keystore File (UTC / JSON) + Password to access your wallet","create.chooseKSOrMnemonic.useMnemonicPhrase":"Use your 24-word Mnemonic Phrase to access your wallet","create.confirmNote":"Are you sure you have noted down your Mnemonic Phrase?","create.createNewWallet":"Create New Wallet","create.doubleConfirmMnemonic.note":"Please select the Mnemonic Phrase in the correct order to ensure that your copy is correct.","create.doubleConfirmMnemonic.title":"Choose Secondary Access","create.doubleConfirmMnemonic.tryAgain":"Incorrect Mnemonic Phrase order. Please try again.","create.downloadKeyStoreFile":"Download Keystore File","create.enterPassword":"Enter a Password","create.google.createWallet":"Create wallet","create.google.createdSuccessfully":"Wallet Created Successfully","create.google.creationFailure":"Wallet Creation Failure","create.google.tryAgain":"Try again","create.google.walletName":"Wallet name","create.googledrive.rePassErr":"The password entered does not match","create.keystoreFileAndPassword":"Create Keystore File + Password","create.pick.useGoogleDrive.description":"Create a new wallet using your Google account","create.pick.useGoogleDrive.title":"Using Google Drive","create.pick.useLocalKeystore.description":"Create a new wallet that you can store on your device","create.pick.useLocalKeystore.title":"Using Keystore File","create.pleaseCheck":"Please check that you are visiting ","create.reEnterPassword":"Re-enter Password","create.stepTwo.desc":"We are about to show your mnemonic phrase, please ensure that no one else is looking at your screen.","create.success.desc1":"You are ready to use the Binance Chain Wallet and","create.success.desc2":"Decentralized Exchange!","create.success.title":"You\'re all set!","create.success.unlockWallet":"Unlock the wallet","create.tutorial.next":"Next","create.tutorial.skip":"Skip Tutorial (Not Recommended)","create.tutorial.step1.desc1":"Binance is committed to providing you with the best and safest experience on the Binance Chain. To do that, we ask for a minute of your time to understand how decentralized wallets work and to take action in safeguarding yourself. You can find the full Terms of Service here.","create.tutorial.step1.title":"Our Commitment","create.tutorial.step2.desc1":"You are solely responsible for keeping your funds. No one else, not even Binance, can help you recover your wallet if you lose it.","create.tutorial.step2.desc2":"When you create a wallet on Binance, you are provided with 3 different formats, each of them can be used to access your wallet.","create.tutorial.step2.title":"Keeping Your Funds","create.tutorial.step3.desc1":"You can think of the keystore file like a \u201cUser ID\u201d, while the password unlocks your wallet. Both are needed to access your wallet,so keep them safe. This is a required format on Binance.","create.tutorial.step3.title":"Keystore File + Password","create.tutorial.step4.desc1":"24 words that are both the \u201cUser ID\u201d and password.This is a secondary way to access your wallet if you lose your keystore file or forget your password. Anyone who knows your mnemonic phrase can access your wallet, so keep it safe.","create.tutorial.step4.title":"Mnemonic Phrase","create.tutorial.step5.desc1":"This is an alternative representation of the mnemonic phase words.","create.tutorial.step5.desc2":"Binance requires all users to use the keystore file + password; and choose between the mnemonic phrase or private key as a secondary method.","create.tutorial.step5.title":"Private key","create.tutorial.title":"Wallet Creation Tutorial","create.tutorial.understand":"I Understand","create.understandCheckbox":"I understand that Binance cannot recover or reset my password or the keystore file. I will make a backup of the keystore file/password, keep them secret, complete all wallet creation steps and agree to all the ","create.understandCheckbox.terms":"terms","create.unlockExistWallet":"Unlock an Existing Wallet","create.yourKeyStore":"Your Keystore","editWallet.remove":"Remove","editWallet.remove.desc1":"Please check that the wallet has no money","editWallet.remove.desc2":"as there is no way of recovering the wallet","editWallet.remove.removeButton":"Yes, remove this wallet","editWallet.remove.title":"Do you really want to remove this wallet?","editWallet.rename":"Rename","editWallet.rename.duplicateName":"Wallet name is exist","editWallet.rename.errMsg":"Name should not be null","editWallet.rename.title":"Wallet name","editWallet.title":"Wallet Name","editWallet.createWallet":"Create Wallet","editWallet.unlockWallet":"Unlock Wallet","exchange.BTCValue":"BTC Value","exchange.amount":"Amount","exchange.asset":"Asset","exchange.availableBalance":"Available Balance","exchange.blockHeight":"BlockHeight","exchange.buy":"Buy","exchange.calendar.clear":"Clear","exchange.calendar.ok":"Ok","exchange.calendar.today":"Today","exchange.chartbox.depth":"Depth","exchange.coin":"Coin","exchange.date":"Date","exchange.estimatedValue":"Estimated Value","exchange.filled":"Filled","exchange.from":"From","exchange.frozen":"Frozen","exchange.hideAllCanceled":"Hide all canceled","exchange.hideOtherPairs":"Hide Other Pairs","exchange.inOrder":"In Order","exchange.index.books":"Books","exchange.index.chart":"Chart","exchange.max":"Max","exchange.min":"Minimum trading unit:","exchange.name":"Name","exchange.notional":"Notional","exchange.oneDay":"1 Day","exchange.oneMonth":"1 Month","exchange.oneWeek":"1 Week","exchange.pair":"Pair","exchange.placeOrder.bestAsk":"Best Ask","exchange.placeOrder.bestBid":"Best Bid","exchange.placeOrder.limitOrder":"Limit Order","exchange.placeOrder.noEnoughBalance":"not enough balance","exchange.placeOrder.orderError":"Order Error","exchange.placeOrder.orderPriceHigher":"Your order price will be 2% higher than the latest market price. Please proceed cautiously.","exchange.placeOrder.orderPriceLow":"Your order price will be 2% less than the latest market price. Please proceed cautiously.","exchange.placeOrder.pleaseInputCorrectAmount":"Please input correct amount","exchange.placeOrder.buy.correctAmountForbep8":"The amount should be > 1","exchange.placeOrder.sell.correctAmountForbep8":"The amount should be > 1 or = balances","exchange.placeOrder.pleaseInputCorrectPrice":"Please input correct price","exchange.placeOrder.roundSizeErrorMsg":"You can only {side} {baseAsset} in multiples of {lotSize}","exchange.placeOrder.successNotifyMsg":"You have successfully created a limit order to {side} {quantity} {quoteAsset}","exchange.placeOrder.successNotifyTitle":"Limit {side} Order Created","exchange.pleaseSelectDate":"please select date","exchange.pleaseUnlockWallet.btn":"Unlock Wallet","exchange.pleaseUnlockWallet.createNewWallet":"Create New Wallet","exchange.pleaseUnlockWallet.desc":"Oops! Please unlock your wallet first","exchange.pleaseUnlockWallet.noWallet":"No Wallet?","exchange.price":"Price","exchange.search":"Search","exchange.sell":"Sell","exchange.side":"Side","exchange.status":"Status","exchange.symbolPriceInfo.high":"High","exchange.symbolPriceInfo.lastPrice":"Last Price","exchange.symbolPriceInfo.low":"Low","exchange.symbolPriceInfo.twentyFourHChange":"24h Change","exchange.symbolPriceInfo.twentyFourHHigh":"24h High","exchange.symbolPriceInfo.twentyFourHLow":"24h Low","exchange.symbolPriceInfo.twentyFourHVolume":"24h Volume","exchange.symbolPriceInfo.vol":"Vol","exchange.threeMonths":"3 Months","exchange.time.from":"From","exchange.to":"To","exchange.total":"Total","exchange.totalBalance":"Total Balance","exchange.tradingHistory.time":"Time","exchange.tradingHistory.title":"Trading History","exchange.tradingPair.change":"Change","exchange.tradingPair.pair":"Pair","exchange.tradingPair.price":"Price","exchange.tradingPair.search":"Search","exchange.tradingPair.volume":"Volume","exchange.txFee":"TxFee","exchange.txHash":"TxHash","exchange.type":"Type","exchange.value":"Value","exchange.miniToken.warning.title":"Do your own research","exchange.miniToken.warning.content1":"MiniToken is a special token type on Binance Chain. The information and materials provided here, whether or not provided on Binance\'s website/webpages, on third party websites, in marketing materials, newsletters or any form of publication are provided for general information only. They do not constitute an offer to buy or sell any products offered or advertised. Likewise, they are not to be taken as investment, financial or trading advice. Any expression of opinion is personal to the author and there is no guarantee of completeness or accuracy.","exchange.miniToken.warning.content2":"Binance shall not be responsible for any losses arising from investment based on any information made available via any of Binance\'s social media accounts or websites. All users or new participants, regardless of experience and knowledge are strongly recommended to do their own research prior to trying out any of the products we offer. If the user is still unsure after research, he/she is encouraged to avoid the product entirely. The user acknowledges that some of the products offered by Binance could be on the riskier spectrum. For avoidance of doubt, all users are encouraged to read the Terms of Use clearly.","exchange.miniToken.warning.button1":"I understand","exchange.miniToken.warning.fully.understand":"I fully understand, do not show it anymore.","fees.fee":"Fee","fees.height":"Height","fees.note":"Note","footer.terms":"Terms of Service","footer.privacy":"Privacy","googledrive.create.nameExist":"Name exist","header.balances":"Balances","header.createWallet":"Create Wallet","header.exchange":"Market","header.exchange.bep2":"Tokens (BEP2)","header.exchange.bep8":"MiniTokens (BEP8)","header.exchange.menu.bep2":"Tokens (BEP2)","header.exchange.menu.bep8":"MiniTokens (BEP8)","header.explorer":"Explorer","header.faq":"Docs / FAQ","header.blog":"Blog","header.feeHistory":"Fee History","header.forums":"Forums","header.mainnet":"Mainnet","header.openOrders":"Open Orders","header.orderHistory":"Order History","header.orders":"Orders","header.testnet":"testnet","header.tradeHistory":"Trade History","header.transactions":"Transactions","header.unlockWallet":"Unlock Wallet","header.user.changeWallet":"Change Wallet","header.user.closeWallet":"Close Wallet","header.user.coinomi":"Coinomi ","header.user.copyAddress":"copy address","header.user.copySuccess":"Copy successful!","header.user.createNewWallet":"Create New Wallet","header.user.exportKeystoreFile":"Export Keystore File","header.user.goToExplorer":"go to explorer","header.user.infinito":"Infinito ","header.user.ledger":"Ledger ","header.user.trezor":"Trezor Device","header.user.wallet":"Wallet","header.user.walletConnect":"WalletConnect ","header.youWantCloseWallet":"Are you sure you want to close wallet?","home.aboutPage.desc1.line1":"Binance Chain is a blockchain initially developed by Binance.","home.aboutPage.desc1.line2":"It\'s modern, safe and has near-instant transaction finality (it\'s fast).","home.aboutPage.desc2.line1":"Binance DEX is a decentralized order matching engine,","home.aboutPage.desc2.line2":"powered by the core Binance Chain technology.","home.aboutPage.desc3.line1":"Binance DEX is a modern and secure marketplace for issuing","home.aboutPage.desc3.line2":"and exchanging digital assets, and no-one other than you holds your keys. Trading your favorite assets has never been safer.","home.aboutPage.title":"About Binance DEX","home.binanceDex":"Binance DEX","home.processPage.aboutBalance":"About Binance DEX","home.processPage.create":"Create","home.processPage.createDesc":"First step is to create a Binance Chain address.","home.processPage.createWallet":"Create a New Wallet","home.processPage.getStart":"Get started with Binance DEX","home.processPage.go":"Go","home.processPage.placeOrders":"Place Orders","home.processPage.placeOrdersDesc":"Use the web wallet or API to send and cancel orders.","home.processPage.transferAssets":"Transfer Assets","home.processPage.transferAssetsDesc":"With a Binance Chain address, which can be generated with any wallet that supports Binance Chain, you can transfer BNB or other assets stored on that address.","home.processPage.unlock":"Unlock","home.processPage.unlockDesc":"Four ways to unlock your wallet","home.processPage.unlockMode1":"WalletConnect","home.processPage.unlockMode2":"Ledger","home.processPage.unlockMode3":"Keystore File + Password","home.processPage.unlockMode4":"Mnemonic","home.processPage.unlockWallet":"Unlock a Wallet","home.startPage.createWallet":"Create a Wallet","home.startPage.desc1":"Fast and secure decentralized digital asset exchange","home.startPage.desc2":"The new cryptocurrency trading standard is here.","home.startPage.getTestBNB":"Get Test BNB","home.startPage.startTrading":"Start Trading","home.whyPage.community":"It\'s a Community Initiative","home.whyPage.communityDesc":"Binance DEX is powered by on-chain governance and open source software components.","home.whyPage.decentralized":"Decentralized","home.whyPage.decentralizedDesc":"Experience direct wallet to wallet trading without any third party or central authority.","home.whyPage.getStarted":"Get Started","home.whyPage.lowTradingFees":"Low Trading Fees","home.whyPage.lowTradingFeesDesc":"Trade with no withdrawal, deposit, or order placement fees \u2014 and BNB holders benefit even more.","home.whyPage.safeAndSecure":"Safe and Secure","home.whyPage.safeAndSecureDesc":"Your funds are stored on a blockchain address with a private key that only you control.","home.whyPage.title":"Why Binance DEX","home.whyPage.userFriendly":"User Friendly","home.whyPage.userFriendlyDesc":"Create a wallet, unlock your wallet, and you\'re ready to trade. No need to deposit or withdraw.","inputPassword.passwordRule":"Your password must include the following properties","inputPassword.passwordRule1":"8 or more characters","inputPassword.passwordRule2":"An upper-case letter, symbol and a number","inputPassword.setANewPassword":"Set a New Password","landing.connectWallet":"Connect Wallet","landing.createWallet":"Create Wallet","landing.desc1":"Binance DEX","landing.desc2":"Fast and secure decentralized digital asset exchange. The new crypto currency trading standard is here.","landing.footer.fee":"Fee","landing.footer.terms":"Term of Service","landing.footer.privacy":"Privacy","landing.how.connect":"Connect","landing.how.connect.desc":"Accessing Binance DEX is easier than you think. Click the connect button and choose from connection options. You\u2019re all set.","landing.how.create":"Create","landing.how.create.desc":"Binance DEX gives you the freedom to choose from convenient keystores to ultra-secure hardware wallet options.","landing.how.step":"step","landing.how.title":"How to use","landing.how.trade":"Trade","landing.how.trade.desc":"Our goal is to make trading seamless and indistinguishable from Binance.com. To do that, we have optimised the best features so that everything you love is on Binance DEX too.","landing.markets":"Markets","landing.markets.24HChange":"24H Change","landing.markets.24HVolume":"24H Volume","landing.markets.lastPrice":"Last Price","landing.markets.pair":"Pair","landing.markets.searchPlaceholder":"Search coin name","landing.menu.balances":"Balances","landing.menu.changeWallet":"Change Wallet","landing.menu.closeWallet":"Close Wallet","landing.menu.community":"Community","landing.menu.copyAddress":"copy address","landing.menu.docs":"Docs","landing.menu.exchange":"Exchange","landing.menu.explorer":"Explorer","landing.menu.orders":"Orders","landing.menu.orders.feeHistory":"Fee History","landing.menu.orders.openOrders":"Open Orders","landing.menu.orders.orderHistory":"Order history","landing.menu.orders.tradeHistory":"Trade History","landing.menu.testnet":"Testnet","landing.menu.tools":"Tools","landing.menu.transaction":"Transaction","landing.menu.wallet":"Wallet","landing.startTrading":"Start Trading","landing.trust.activeAddress":"Active Wallets","landing.trust.activeAddress.desc":"More people trust Binance DEX\'s infrastructure and trading systems than any other wallet solution.","landing.trust.pairs":"Pairs","landing.trust.pairs.desc":"Binance DEX gives you more options and the flexibility to trade, with more added every week.","landing.trust.rank":"Ranked","landing.trust.rank.desc":"Binance DEX is the #1 decentralized cryptocurrency exchange on Coinmarketcap by volume.","landing.trust.title":"Why people trust us","landing.why.competitive":"Competitive","landing.why.competitive.desc":"Fees are just 0.04% when you use BNB to pay for trading fees. That\u2019s almost half of Binance.com, the world\u2019s leading exchange on trading fees.","landing.why.fast":"Fast","landing.why.fast.desc":"With 1 second block times, blockchain trade confirmations are a thing of the past. Get all the advantages of a DEX without the downsides.","landing.why.secure":"Secure","landing.why.secure.desc":"Binance DEX takes security to a whole new level. Peer-to-peer transfers and trades mean virtually zero exposure to security threats.","landing.why.title":"Why Binance DEX","lang.menu.copyAddress":" ","noContent.descPrefix":"You have no ","openOrders.areYourTrue":"Are you sure you want to","openOrders.cancel":"cancel","openOrders.cancel all":"cancel all","openOrders.cancel buy":"cancel buy","openOrders.cancel sell":"cancel sell","openOrders.cancelAll":"Cancel All","openOrders.cancelBuy":"Cancel Buy","openOrders.cancelOrder":"Cancel Order","openOrders.cancelOrders":"Cancel Orders","openOrders.cancelPartialSuccess":"Cancel partial success","openOrders.cancelSell":"Cancel Sell","openOrders.cancelSuccess":"Cancel Success","openOrders.keepOrder":"Keep Order","openOrders.keepOrders":"Keep Orders","openOrders.noBuyOpenOrders":"no buy open orders","openOrders.noOpenOrders":"no open orders","openOrders.noSellOpenOrders":"no sell open orders","openOrders.title":"Open Orders","orderForm.amount":"Amount","orderForm.avb":"Avb","orderForm.buy":"Buy","orderForm.equivalent":"Equivalent","orderForm.price":"Price","orderForm.sell":"Sell","orderForm.total":"Total","orderHistory.openHistory":"order history","orderHistory.title":"Order History","orderHistory.tradeId":"Trade ID","orderHistory.tradingPrice":"Trade Price","orderHistory.tradingTotal":"Trading Total","privateKeyModal.backupText":"Back up the text below on paper and keep it somewhere secret and safe.","privateKeyModal.title":"Your Private Key","testnet.binanceChainExplorerGuide":"Binance Chain Explorer Guide","testnet.fastAndSecureDesc":"Fast and secure decentralized digital asset exchange","testnet.fundingYourTestnetAccount":"Funding Your Testnet Account","testnet.howToAccessYourWallet":"How to Access Your Wallet","testnet.howToCreateAWallet":"How to Create a Wallet","testnet.interfaceGuide":"Interface Guide","testnet.thingsToAvoid":"Things to Avoid","testnet.title":"Binance Decentralized Exchange (TESTNET)","token.issue.bep2Title":"BEP-2 Token","token.issue.bep2Desc":"BEP-2 is a technical standard for the issuance and implementation of tokens on the Binance Chain.","token.issue.bep8Title":"BEP-8 Token (Mini-BEP2)","token.issue.bep8Desc":"BEP-8 is a technical standard for the issuance and implementation of tokens on the Binance Chain.","token.issue.title":"Token Issuance","token.issue.confirmationModal.title":"Check Token Contract","token.issue.confirmationModal.confirm":"Confirm","token.issue.tokenNameLabel":"Token Name","token.issue.tokenNameDesc":"Token names must have between 3 and 32 characters.","token.issue.symbolLabel":"Symbol","token.issue.maxSupplyLabel":"Max Supply","token.issue.symbolDescLength":"Symbols must have between 2 and 5 characters.","token.issue.totalSuppyHeader":"Select Token Max Supply","token.issue.totalSuppyDesc":"Max supply is the maximum number of tokens that can be created","token.issue.supplyLabel":"Supply","token.issue.supplyDesc":"The number of tokens you need to issue","token.issue.prev":"My Token List","token.issue.updateTokenInfoHeader":"Set the URL to update token information(Optional)","token.issue.updateTokenInfoHeaderTips":"The URL will return JSON-formatted information that will be an introduction to your MiniToken","token.issue.fillInRequestedUrlLabel":"Fill in the requested URL","token.issue.issuanceFee":"issuance fee","token.list.title":"My Tokens","token.issueModal.mintable":"Mintable","token.issueModal.nonMintable":"Non-mintable","token.issueModal.name":"Token Name","token.issueModal.nameErrMsg":"token name is limited to 32 characters","token.issueModal.symbol":"Symbol","token.issueModal.symbolErrMsg":"symbol should be alphanumeric and length is limited to 3~8","token.issueModal.title":"Issue Token","token.issueModal.totalSupply":"Total Supply","token.issueModal.totalSupplyErrMsg":"invalid supply amount","token.listModal.address":"Address","token.listModal.confirm":"Confirm","token.listModal.initPrice":"Init Price","token.listModal.proposalId":"ProposalId","token.listModal.quoteAsset":"Quote Asset","token.listModal.title":"List Token","token.listModal.tokenName":"Token Name","token.main.burn":"Burn","token.main.freeze":"Freeze","token.main.issueToken":"Issue Token","token.main.list":"List","token.main.listSuccessmsg":"List success","token.main.mint":"Mint","token.main.proposal":"Proposal","token.main.submitListFirst":"Please submit list proposal first","token.main.submitSuccessmsg":"submit list proposal success","token.main.title":"My Token List","token.main.unfreeze":"UnFreeze","token.proposalModal.address":"Address","token.proposalModal.baseAsset":"Base Asset","token.proposalModal.desc":"Description","token.proposalModal.expireTime":"Expire Time","token.proposalModal.hours":"Hours","token.proposalModal.initDeposit":"Initial Deposit","token.proposalModal.initPrice":"Init Price","token.proposalModal.initPriceErr":"Init price should not be null","token.proposalModal.initPriceErr2":"init price should greater than 0","token.proposalModal.quoteAsset":"Quote Asset","token.proposalModal.title":"List Proposal","token.proposalModal.titleErr":"Proposal title should not be null","token.proposalModal.titleErr2":"Proposal title is longer than max length of 128","token.proposalModal.votingPeriod":"Voting Period","token.table.col.mintable":"Mintable","token.table.col.name":"Name","token.table.col.symbol":"Symbol","token.table.col.tokenType":"Type","token.table.col.totalSupply":"Total Supply","token.tokenModal.address":"Address","token.tokenModal.amount":"Amount","token.tokenModal.available":"Available","token.tokenModal.burnTitle":"Burn Token","token.tokenModal.confirm":"Confirm","token.tokenModal.desc":" ","token.tokenModal.freezeTitle":"Freeze Token","token.tokenModal.mintTitle":"Mint Token","token.tokenModal.name":"Name","token.tokenModal.unfreezeTitle":"Unfreeze Token","token.list.tradepair.exist":"Trade pair existed","token.warning":"We do not support walletconnect compatible wallets currently and for security reason, Ledger is the best choice to Issue/List/Mint/Burn Token","tradeHistory.tradeHistory":"trade history","transaction.here":"here","transaction.notes":"Not every transaction is included below. For full history, please refer to","txHistory.here":"here","txHistory.notEveryTransactionIsIncludedBelow":"Not every transaction is included below. For full history, please refer to here.","txHistory.title":"Transaction History","unlock.connectAddress.enterYourAddress":"Enter your address","unlock.connectAddress.invalidAddress":"Invalid address","unlock.connectAddress.viewOnlyMode":"Enter an address for view only mode","unlock.createNewWallet":"Create a New Wallet","unlock.google.chooseWallet":"Choose from your available wallets:","unlock.google.logIn":"Log in","unlock.google.notLoggedIn":"You have not logged into your Google Account","unlock.google.signedInAs":"You are signed in as","unlock.googledrive.editWallet":"Edit Wallet Details","unlock.googledrive.wallets":"Select from your following wallets to continue:","unlock.index.selectUnlockType":"Select how you would like to unlock","unlock.index.title":"Unlock Your Wallet","unlock.keystore.enterYourWalletPass":"Enter your wallet password","unlock.keystore.paste":"Or paste the contents of your keystore file","unlock.keystore.select":"Connect an encrypted wallet file and input your password","unlock.keystore.upload":"Upload keystore file","unlock.ledger.appInstallation":"App Installation","unlock.ledger.binanceChainReady":"Binance Chain Ready","unlock.ledger.connectToLedger":"Connect to Ledger","unlock.ledger.enterPINCode":"Enter PIN Code","unlock.ledger.getTheApp":"Get the app","unlock.ledger.havingConnectionIssues":"Having Connection Issues?","unlock.ledger.mustBeOnScreen":"must be on-screen","unlock.ledger.openBinanceChain":"Open Binance Chain","unlock.ledger.text":"Connect your hardware wallet here by following the on-screen instructions","unlock.ledger.title":"Unlock with a Ledger Device","unlock.ledger.usageInstructions":"Usage Instructions","unlock.mnemonic.pleaseEnterYourPhrase":"Please enter your 24 word phrase","unlock.mnemonic.pleaseSeparateEachWordSpace":"Please separate each word with a space.","unlock.mnemonic.warning.desc1":"This option restores a lost keystore file or password,","unlock.mnemonic.warning.desc2":"or imports a seed from another wallet app.","unlock.mnemonic.warning.desc3":"Warning! Entering your seed phrase or private key on any website is very dangerous. If you have malicious extensions installed in your browser or accidentally visit a phishing website, your assets can be stolen.","unlock.privateKey.enterYourPrivateKey":"Enter your private key (hex format)","unlock.privateKey.invalid":"The Private Key you entered is not in the right format and is invalid. Please try again.","unlock.privateKey.passwordInvalid":"That password is invalid. Please try again.","unlock.privateKey.warning":"For restoring a lost keystore file or password","unlock.privateKey.warningQuestion":"Entering your private key on any website is very dangerous. If you have malicious extensions installed in your browser or accidentally visit a phishing website, your assets can be stolen.","unlock.recover.content":"Recover wallet access using a recovery phrase made known during wallet creation","unlock.recover.download.button":"Download","unlock.recover.downloadTitle":"Download Your Keystore File","unlock.recover.password.placeholder":"Enter a strong password","unlock.recover.submit":"Submit","unlock.recover.title":"Recover a Keystore File","unlock.recover.understand.continue":"Recover a Keystore File","unlock.recover.word.placeholder":"Search","unlock.recover.wordlist.reset":"Reset","unlock.recover.wordlistTitle":"Please select your Mnemonic Phrase from the left list","unlock.support.wallets":" ","unlock.temporarySessionPassword":"Temporary session password","unlock.thisIsNotAValidWalletFile":"This is not a valid wallet file","unlock.trezor.connectToTrezor":"Connect to Trezor","unlock.trezor.firmwareNotice":"Note: Please make sure that you have updated to the latest Trezor firmware in order to use your device with the Binance Chain.","unlock.trezor.notOnTestNet":"Note: Trezor devices require Chrome or Firefox for now ","unlock.trezor.title":"Unlock with a Trezor Device","unlock.unlockWalletNow":"Unlock Wallet Now","unlock.walletConnect.notes":"Note: Trust Wallet and CoolWallet do not support the Binance Chain Testnet.","unlock.walletConnect.recommendedWallet":"Supported apps include","unlock.walletConnet.getTrustWallet":"Get Trust Wallet","unlock.walletConnet.qrCodeDesc1":"Get WalletConnect QR Code","unlock.walletConnet.qrCodeDesc2":"Don\u2019t have an app that supports WalletConnect yet?","unlock.walletConnet.showWalletQrCode":"Connect your mobile wallet here using a QR code on this screen","unlock.walletConnet.title":"Recommended","walletConnect.clickHereToUnlock":"Click here to unlock another wallet","walletConnect.error":"WalletConnect Error","walletConnect.errorOccur":"A WalletConnect error has occurred","walletConnect.pleaseEnsureOpenWorking":"Please ensure that the app is open and working.","walletConnect.pleaseUseAWalletConnect":"Please use an app that supports WalletConnect to scan the QR code above","walletConnect.qrCode":"WalletConnect QR code","walletConnect.readyToConfirm":"Please Confirm","walletConnect.readyToConfirmBody":"Please confirm the transaction on the wallet App.","walletconnect.notifycation.connectAgain":"Connect again","walletconnect.notifycation.disconnectMessage":" Disconnected from Mobile Wallet...","walletconnect.notifycation.hide":"Hide","local.secure.storage":"Local Secure Storage","local.keystore.replace.tips":"You already have a keystore file, make sure you have backed up before replace","staking.title":"Staking Communication","staking.goback":"Please go back to staking page manually and to play around","staking.confirm":"Confirm","staking.cancel":"Cancel","staking.notification.delegator.address":"Delegator address:","staking.notification.validator":"Validator:","staking.notification.amount":"Amount:","staking.notification.network.fee":"Network fee:","staking.notification.srcValidator.address":"Source Valiator:","staking.notification.dstalidator.address":"Destination Valiator:","staking.notification.total":"Total:"}'
      );
    },
    511: function (e) {
      e.exports = JSON.parse(
        '{"account.footer.copyright":"\xa9 2018 - 2019 Binance.org. All rights reserved.","account.footer.copyright.trubi":"\xa9 2018 - 2019 Trubi. All rights reserved.","account.footer.exchange":"\u4ea4\u6613\u6240","account.footer.home":"\u4e3b\u9875","balances.filteredByAsset":"\u7b5b\u9009\u8d44\u4ea7","balances.hideZeroBalance":"\u9690\u85cf\u4e3a0\u7684\u8d44\u4ea7","balances.myBalances":"\u6211\u7684\u8d44\u4ea7","blocked.country.list":"\u7f8e\u5229\u575a\u5408\u4f17\u56fd\uff0c\u4e2d\u56fd\uff0c\u963f\u5c14\u5df4\u5c3c\u4e9a\uff0c\u6ce2\u65af\u5c3c\u4e9a\u548c\u9ed1\u585e\u54e5\u7ef4\u90a3\uff0c\u767d\u4fc4\u7f57\u65af\uff0c\u521a\u679c\uff08\u91d1\uff09\uff0c\u79d1\u7279\u8fea\u74e6\uff0c\u514b\u91cc\u7c73\u4e9a\uff0c\u53e4\u5df4\uff0c\u4f0a\u62c9\u514b\uff0c\u4f0a\u6717\uff0c\u671d\u9c9c\uff0c\u5229\u6bd4\u91cc\u4e9a\uff0c\u9a6c\u5176\u987f\uff0c\u7f05\u7538\uff0c\u585e\u5c14\u7ef4\u4e9a\uff0c\u82cf\u4e39\uff0c\u53d9\u5229\u4e9a\uff0c\u6d25\u5df4\u5e03\u97e6\u3002","blocked.country.notice-1":"","blocked.country.notice-2":"\u7684\u90e8\u5206\u670d\u52a1\u5bf9\u4ee5\u4e0b\u5730\u533a\u7684\u7528\u6237\u4e0d\u53ef\u7528\uff1a","blocked.country.understand":"\u6211\u5df2\u77e5\u6653","common.cancel":"\u53d6\u6d88","common.close":"\u5173\u95ed","common.confirm":"\u786e\u8ba4 ","common.connect":"\u8fde\u63a5","common.continue":"\u7ee7\u7eed/\u4e0b\u4e00\u6b65","common.errorOccured":"error occured","common.goBack":"\u8fd4\u56de","common.googleUnlock":"Google\u4e91\u7aef\u786c\u76d8","common.keystoreFile":"Keystore \u6587\u4ef6","common.ledgerDevice":"Ledger \u8bbe\u5907","common.loading":"\u52a0\u8f7d\u4e2d","common.mnemonicPhrase":"\u6062\u590d\u52a9\u8bb0\u8bcd","common.networkError":"\u7f51\u7edc\u9519\u8bef","common.or":"\u6216","common.password":"\u5bc6\u7801","common.placeOrder":"\u4e0b\u5355","common.pleaseCheckVisitWebsite":"\u8bf7\u786e\u8ba4\u60a8\u6b63\u5728\u6d4f\u89c8\u5e01\u5b89\u94fe\u5b98\u65b9\u7f51\u7ad9\uff1a","common.previous":"\u4e0a\u4e00\u6b65","common.privateKey":"\u79c1\u94a5","common.systemError":"\u7cfb\u7edf\u9519\u8bef","common.trezorDevice":"Trezor \u8bbe\u5907","common.viewMyPrivateKey":"\u67e5\u770b\u6211\u7684\u79c1\u94a5","common.viewOnly":"View Only","common.walletConnect":"\u624b\u673a\u94b1\u5305","common.yes":"\u662f","common.warning":"\u8b66\u544a","common.next":"\u4e0b\u4e00\u6b65","common.buy-crypto-on-ramp":"Buy crypto","validation.onlyAlphaNumeric":"Only use letters and numbers","validation.size":"{label} length must between {min} and {max}","create.backupKeystore.backupYour":"\u8bf7\u5907\u4efd\u60a8\u7684","create.backupKeystore.cannotRecoveredIt":"\u4e00\u65e6\u4e22\u5931\uff0c\u65e0\u6cd5\u6062\u590d\u3002","create.backupKeystore.createBackupFile":"\u8bf7\u505a\u597d\u5907\u4efd","create.backupKeystore.downloadKeystoreFile":"\u4e0b\u8f7dKeystore\u6587\u4ef6(UTC/JSON)","create.backupKeystore.getMyPrivateKey":"\u83b7\u53d6\u6211\u7684\u79c1\u94a5","create.backupKeystore.keystoreFile":"Keystore\u6587\u4ef6","create.backupKeystore.needFirstDownload":"\u60a8\u5fc5\u987b\u5148\u4e0b\u8f7dKeystore\u6587\u4ef6","create.backupKeystore.notShareFile":"\u8bf7\u4e0d\u8981\u5bf9\u5916\u5206\u4eab\u79c1\u94a5\uff0c\u4e5f\u4e0d\u8981\u5728\u5176\u4ed6\u7f51\u7ad9\u4e0a\u4f7f\u7528\u79c1\u94a5, \u5426\u5219\u60a8\u7684\u8d44\u91d1\u5c06\u6709\u88ab\u76d7\u98ce\u9669\u3002","create.backupMnemonic.note":"\u628a\u4e0b\u9762\u7684\u52a9\u8bb0\u8bcd\u5907\u4efd\u5728\u7eb8\u4e0a\uff0c\u5e76\u5c06\u5176\u4fdd\u5b58\u5728\u67d0\u4e2a\u79d8\u5bc6\u548c\u5b89\u5168\u7684\u5730\u65b9\u3002","create.backupMnemonic.title":"\u8bf7\u5907\u4efd\u52a9\u8bb0\u8bcd","create.backupText":"\u628a\u4e0b\u9762\u7684\u52a9\u8bb0\u8bcd\u5907\u4efd\u5728\u7eb8\u4e0a\uff0c\u5e76\u5c06\u5176\u4fdd\u5b58\u5728\u67d0\u4e2a\u79d8\u5bc6\u548c\u5b89\u5168\u7684\u5730\u65b9\u3002","create.chooseKSOrMnemonic.keystoreAndPassword":"Keystore \u6587\u4ef6 + \u5bc6\u7801","create.chooseKSOrMnemonic.keystoreFile":"Keystore \u6587\u4ef6","create.chooseKSOrMnemonic.recommendedUSBDrive":"\u5efa\u8bae\u5907\u4efd\u5728USB\u5185","create.chooseKSOrMnemonic.recommendedUSBDriveOrPaper":"\u5efa\u8bae\u5907\u4efd\u5728\u7eb8\u4e0a\u6216USB\u5185","create.chooseKSOrMnemonic.title":"\u8bf7\u9009\u62e9\u60a8\u521b\u5efa\u94b1\u5305\u7684\u65b9\u5f0f\uff1f","create.chooseKSOrMnemonic.unlockExistWallet":"\u89e3\u9501\u94b1\u5305","create.chooseKSOrMnemonic.useKeystoreFile":"\u4f7f\u7528\u3010Keystore\u6587\u4ef6 + \u5bc6\u7801\u3011\u89e3\u9501\u4f60\u7684\u94b1\u5305","create.chooseKSOrMnemonic.useMnemonicPhrase":"\u4f7f\u752824\u4e2a\u5355\u8bcd\u7ec4\u6210\u7684\u52a9\u8bb0\u8bcd\u6765\u89e3\u9501\u60a8\u7684\u94b1\u5305","create.confirmNote":"\u8bf7\u786e\u8ba4\u5df2\u7ecf\u5907\u4efd\u597d\u52a9\u8bb0\u8bcd?","create.createNewWallet":"\u521b\u5efa\u65b0\u94b1\u5305","create.doubleConfirmMnemonic.note":"\u8bf7\u6309\u987a\u5e8f\u9009\u62e9\u60a8\u7684\u52a9\u8bb0\u8bcd\uff0c\u786e\u4fdd\u60a8\u7684\u5907\u4efd\u662f\u6b63\u786e\u7684\u3002","create.doubleConfirmMnemonic.title":"\u9009\u62e9\u4e8c\u6b21\u8bbf\u95ee","create.doubleConfirmMnemonic.tryAgain":"\u52a9\u8bb0\u8bcd\u987a\u5e8f\u4e0d\u6b63\u786e\uff0c\u8bf7\u6821\u5bf9","create.downloadKeyStoreFile":"\u4e0b\u8f7dKeystore\u6587\u4ef6","create.enterPassword":"\u8f93\u5165\u5bc6\u7801","create.google.createWallet":"\u521b\u5efa\u94b1\u5305","create.google.createdSuccessfully":"\u94b1\u5305\u521b\u5efa\u5b8c\u6210","create.google.creationFailure":"\u94b1\u5305\u521b\u5efa\u5931\u8d25","create.google.tryAgain":"\u518d\u8bd5\u4e00\u6b21","create.google.walletName":"\u94b1\u5305\u7684\u540d\u5b57","create.googledrive.rePassErr":"\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u5339\u914d","create.keystoreFileAndPassword":"\u521b\u5efaKeystore\u6587\u4ef6 + \u5bc6\u7801","create.pick.useGoogleDrive.description":"\u7528Google\u4e91\u7aef\u786c\u76d8\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u94b1\u5305","create.pick.useGoogleDrive.title":"\u4f7f\u7528Google\u4e91\u7aef\u786c\u76d8","create.pick.useLocalKeystore.description":"\u521b\u5efa\u4e00\u4e2a\u60a8\u7684\u8bbe\u5907\u4e0a\u4fdd\u5b58\u7684\u94b1\u5305","create.pick.useLocalKeystore.title":"\u4f7f\u7528Keystore\u6587\u4ef6","create.pleaseCheck":"\u8bf7\u786e\u8ba4\u60a8\u6b63\u5728\u6d4f\u89c8\u5e01\u5b89\u94fe\u5b98\u65b9\u7f51\u7ad9\uff1a","create.reEnterPassword":"\u91cd\u65b0\u8f93\u5165\u5bc6\u7801","create.stepTwo.desc":"\u6211\u4eec\u5373\u5c06\u5c55\u793a\u60a8\u7684\u52a9\u8bb0\u8bcd\uff0c\u8bf7\u786e\u4fdd\u6ca1\u6709\u5176\u4ed6\u4eba\u5728\u770b\u60a8\u7684\u5c4f\u5e55\u3002","create.success.desc1":"\u5f00\u59cb\u4f7f\u7528\u5e01\u5b89\u94b1\u5305\u548c","create.success.desc2":"\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240\u5427\uff01","create.success.title":"\u4f60\u5df2\u7ecf\u51c6\u5907\u597d\u4e86\uff01","create.success.unlockWallet":"\u89e3\u9501\u94b1\u5305","create.tutorial.next":"\u4e0b\u4e00\u6b65","create.tutorial.skip":"\u8df3\u8fc7\u6559\u7a0b\uff08\u4e0d\u63a8\u8350\uff09","create.tutorial.step1.desc1":"\u5e01\u5b89\u94fe\u81f4\u529b\u4e8e\u4e3a\u60a8\u63d0\u4f9b\u6700\u4f18\u8d28\u3001\u6700\u5b89\u5168\u7684\u4f7f\u7528\u4f53\u9a8c\u3002\u8981\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u6211\u4eec\u5e0c\u671b\u60a8\u82b1\u4e00\u5206\u949f\u7684\u65f6\u95f4\u6765\u4e86\u89e3\u53bb\u4e2d\u5fc3\u5316\u7684\u94b1\u5305\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff0c\u5e76\u5b66\u4f1a\u91c7\u53d6\u76f8\u5e94\u63aa\u65bd\u4fdd\u62a4\u60a8\u7684\u8d26\u53f7\u548c\u8d44\u4ea7\u5b89\u5168\u3002\u8be6\u60c5\u8bf7\u67e5\u9605\u6211\u4eec\u7684\u670d\u52a1\u6761\u6b3e\u3002","create.tutorial.step1.title":"\u6211\u4eec\u7684\u5efa\u8bae","create.tutorial.step2.desc1":"\u8bf7\u52a1\u5fc5\u4fdd\u7ba1\u597d\u60a8\u7684\u94b1\u5305\u3002\u4e00\u65e6\u4e22\u5931\uff0c\u5305\u62ec\u5e01\u5b89\u5728\u5185\u7684\u4efb\u4f55\u4eba\u90fd\u6ca1\u529e\u6cd5\u5e2e\u60a8\u6062\u590d\u3002","create.tutorial.step2.desc2":"\u60a8\u6709\u4e09\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u5728\u5e01\u5b89\u94fe\u4e0a\u521b\u5efa\u94b1\u5305\uff0c\u6bcf\u79cd\u65b9\u6cd5\u90fd\u53ef\u4ee5\u8bbf\u95ee\u94b1\u5305\u3002","create.tutorial.step2.title":"\u4fdd\u7ba1\u597d\u60a8\u7684\u94b1\u5305","create.tutorial.step3.desc1":"Keystore\u6587\u4ef6\u662f\u4fdd\u5b58\u79c1\u94a5\u7684\u52a0\u5bc6\u6587\u4ef6\uff0c\u60a8\u53ef\u4ee5\u4e3a\u81ea\u5df1\u7684Keystore\u6587\u4ef6\u8bbe\u7f6e\u5bc6\u7801\u4fdd\u62a4\u3002\u5f53\u60a8\u4f7f\u7528\u3010Keystore \u6587\u4ef6 + \u5bc6\u7801\u3011\u8fd9\u79cd\u65b9\u5f0f\u6765\u8bbf\u95ee\u94b1\u5305\u65f6\uff0c\u9700\u8981\u4e24\u8005\u540c\u65f6\u4f7f\u7528\u624d\u80fd\u751f\u6548\u3002\u4e22\u5931\u5176\u4e2d\u4e00\u4e2a\uff0c\u60a8\u5c06\u65e0\u6cd5\u627e\u56de\u60a8\u7684\u8d44\u4ea7\uff0c\u8bf7\u52a1\u5fc5\u4fdd\u7ba1\u597d\u5b83\u4eec\u3002","create.tutorial.step3.title":"Keystore\u6587\u4ef6 + \u5bc6\u7801","create.tutorial.step4.desc1":"\u52a9\u8bb0\u8bcd\u662f\u753124\u4e2a\u5355\u8bcd\u7ec4\u6210\u7684\uff0c\u662f\u5f00\u542f\u4f60\u94b1\u5305\u7684\u7b2c\u4e8c\u79cd\u65b9\u5f0f\uff0c\u8bf7\u5907\u4efd\u5e76\u4fdd\u7ba1\u597d\u60a8\u7684\u52a9\u8bb0\u8bcd\u3002\u8bf7\u4e0d\u8981\u5bf9\u5916\u5206\u4eab\u60a8\u7684\u52a9\u8bb0\u8bcd\uff0c\u4e5f\u4e0d\u8981\u5728\u5176\u4ed6\u7f51\u7ad9\u4e0a\u4f7f\u7528\u52a9\u8bb0\u8bcd\uff0c\u5426\u5219\u60a8\u7684\u8d44\u4ea7\u5c06\u6709\u88ab\u76d7\u98ce\u9669\u3002","create.tutorial.step4.title":"\u52a9\u8bb0\u8bcd","create.tutorial.step5.desc1":"\u79c1\u94a5\u662f\u52a9\u8bb0\u8bcd\u7684\u53e6\u4e00\u79cd\u5c55\u73b0\u5f62\u5f0f\u3002","create.tutorial.step5.desc2":"\u5e01\u5b89\u94fe\u8981\u6c42\u6240\u6709\u7684\u7528\u6237\u4f7f\u7528Keystore\u6587\u4ef6 + \u5bc6\u7801\u7684\u65b9\u5f0f\uff0c\u540c\u65f6\u8bf7\u5bf9\u52a9\u8bb0\u8bcd\u548c\u79c1\u94a5\u505a\u597d\u5907\u4efd\uff0c\u4ee5\u4f5c\u4e3a\u5907\u7528\u7684\u65b9\u5f0f\u8bbf\u95ee\u94b1\u5305\u3002","create.tutorial.step5.title":"\u79c1\u94a5","create.tutorial.title":"\u94b1\u5305\u521b\u5efa\u6559\u7a0b","create.tutorial.understand":"\u6211\u5df2\u77e5\u6653","create.understandCheckbox":"\u6211\u5df2\u77e5\u6653\u5e01\u5b89\u65e0\u6cd5\u6062\u590d\u6216\u8005\u91cd\u7f6e\u6211\u7684\u5bc6\u7801\u6216\u8005Keystore\u6587\u4ef6\uff0c\u6211\u5df2\u5907\u4efd\u5e76\u4fdd\u5b58\u597dKeystore \u6587\u4ef6/\u5bc6\u7801\uff0c\u5b8c\u6210\u6240\u6709\u94b1\u5305\u521b\u5efa\u6b65\u9aa4\uff0c\u5e76\u540c\u610f\u6240\u6709","create.understandCheckbox.terms":"\u6761\u6b3e\u3002","create.unlockExistWallet":"\u89e3\u9501\u94b1\u5305","create.yourKeyStore":"\u4f60\u7684Keystore","editWallet.remove":"\u79fb\u9664","editWallet.remove.desc1":"\u8bf7\u786e\u8ba4\u94b1\u5305\u91cc\u6ca1\u6709\u94b1","editWallet.remove.desc2":"\u56e0\u4e3a\u6ca1\u6709\u6062\u590d\u94b1\u5305\u7684\u65b9\u6cd5","editWallet.remove.removeButton":"\u662f\u7684\uff0c\u5220\u9664\u8fd9\u4e2a\u94b1\u5305","editWallet.remove.title":"\u662f\u5426\u771f\u7684\u8981\u5220\u9664\u8fd9\u4e2a\u94b1\u5305","editWallet.rename":"\u91cd\u547d\u540d","editWallet.rename.duplicateName":"\u94b1\u5305\u540d\u5b57\u5df2\u5b58\u5728","editWallet.rename.errMsg":"\u540d\u5b57\u4e0d\u80fd\u4e3a\u7a7a","editWallet.rename.title":"\u94b1\u5305\u540d\u5b57","editWallet.title":"\u94b1\u5305\u540d\u5b57","editWallet.createWallet":"\u521b\u5efa\u94b1\u5305","editWallet.unlockWallet":"\u89e3\u9501\u94b1\u5305","exchange.BTCValue":"BTC\u4f30\u503c","exchange.amount":"\u6570\u91cf","exchange.asset":"\u5e01\u79cd","exchange.availableBalance":"\u53ef\u7528\u8d44\u4ea7","exchange.blockHeight":"\u533a\u5757\u9ad8\u5ea6","exchange.buy":"\u4e70\u5165","exchange.calendar.clear":"\u6e05\u9664","exchange.calendar.ok":"\u786e\u8ba4","exchange.calendar.today":"\u4eca\u5929","exchange.chartbox.depth":"\u6df1\u5ea6\u56fe","exchange.coin":"\u5e01\u79cd","exchange.date":"\u65f6\u95f4","exchange.estimatedValue":"\u4f30\u503c","exchange.filled":"\u6210\u4ea4\u7387","exchange.from":"\u53d1\u8d77\u5730\u5740","exchange.frozen":"\u51bb\u7ed3","exchange.hideAllCanceled":"\u9690\u85cf\u64a4\u9500\u8ba2\u5355","exchange.hideOtherPairs":"\u9690\u85cf\u5176\u4ed6\u4ea4\u6613\u5bf9","exchange.inOrder":"\u4e0b\u5355\u51bb\u7ed3","exchange.index.books":"Books","exchange.index.chart":"Chart","exchange.max":"\u6700\u5927","exchange.min":"\u6700\u5c0f\u4ea4\u6613\u5355\u4f4d\uff1a","exchange.name":"\u540d\u79f0","exchange.notional":"\u603b\u989d","exchange.oneDay":"\u5f53\u65e5","exchange.oneMonth":"1\u4e2a\u6708","exchange.oneWeek":"1\u5468","exchange.pair":"\u5e02\u573a","exchange.placeOrder.bestAsk":"\u6700\u4f18\u5356\u4ef7","exchange.placeOrder.bestBid":"\u6700\u4f18\u4e70\u4ef7","exchange.placeOrder.limitOrder":"\u9650\u4ef7\u5355","exchange.placeOrder.noEnoughBalance":"\u6ca1\u6709\u8db3\u591f\u7684\u4f59\u989d","exchange.placeOrder.orderError":"\u4e0b\u5355\u5f02\u5e38","exchange.placeOrder.orderPriceHigher":"\u60a8\u7684\u8ba2\u5355\u4ef7\u683c\u9ad8\u51fa\u5e02\u573a\u6700\u65b0\u4ef7\u683c2\uff05\uff0c\u8bf7\u8c28\u614e\u4e0b\u5355\u3002","exchange.placeOrder.orderPriceLow":"\u60a8\u7684\u8ba2\u5355\u4ef7\u683c\u4f4e\u4e8e\u5e02\u573a\u6700\u65b0\u4ef7\u683c2\uff05\uff0c\u8bf7\u8c28\u614e\u4e0b\u5355\u3002","exchange.placeOrder.pleaseInputCorrectAmount":"Please input correct amount","exchange.placeOrder.buy.correctAmountForbep8":"The amount should be > 1","exchange.placeOrder.sell.correctAmountForbep8":"The amount should be > 1 or = balances","exchange.placeOrder.pleaseInputCorrectPrice":"Please input correct price","exchange.placeOrder.roundSizeErrorMsg":"\u4f60\u53ea\u80fd {side} {baseAsset} \u4ee5 {lotSize} \u7684\u6574\u6570\u500d","exchange.placeOrder.successNotifyMsg":"\u60a8\u5df2\u6210\u529f\u521b\u5efa {quantity} {quoteAsset} \u9650\u4ef7 {side} \u5355","exchange.placeOrder.successNotifyTitle":"\u9650\u4ef7{side}\u5355\u521b\u5efa\u6210\u529f","exchange.pleaseSelectDate":"\u8bf7\u9009\u62e9\u65f6\u95f4","exchange.pleaseUnlockWallet.btn":"\u89e3\u9501\u94b1\u5305","exchange.pleaseUnlockWallet.createNewWallet":"\u8bf7\u5148\u521b\u5efa\u4e00\u4e2a\u65b0\u94b1\u5305","exchange.pleaseUnlockWallet.desc":"\u62b1\u6b49\uff0c\u8bf7\u5148\u89e3\u9501\u60a8\u7684\u94b1\u5305\u3002","exchange.pleaseUnlockWallet.noWallet":"\u6ca1\u6709\u94b1\u5305\uff1f","exchange.price":"\u4ef7\u683c","exchange.search":"\u67e5\u8be2","exchange.sell":"\u5356\u51fa","exchange.side":"\u65b9\u5411","exchange.status":"\u72b6\u6001","exchange.symbolPriceInfo.high":"\u6700\u9ad8\u4ef7","exchange.symbolPriceInfo.lastPrice":"\u6700\u65b0\u4ef7","exchange.symbolPriceInfo.low":"\u6700\u4f4e\u4ef7","exchange.symbolPriceInfo.twentyFourHChange":"24h\u6da8\u8dcc","exchange.symbolPriceInfo.twentyFourHHigh":"24h\u6700\u9ad8\u4ef7","exchange.symbolPriceInfo.twentyFourHLow":"24h\u6700\u4f4e\u4ef7","exchange.symbolPriceInfo.twentyFourHVolume":"24h\u6210\u4ea4\u91cf","exchange.symbolPriceInfo.vol":"\u6210\u4ea4\u91cf","exchange.threeMonths":"3\u4e2a\u6708","exchange.time.from":"\u65f6\u95f4","exchange.to":"\u6536\u6b3e\u5730\u5740","exchange.total":"\u603b\u989d","exchange.totalBalance":"\u603b\u989d","exchange.tradingHistory.time":"\u65f6\u95f4","exchange.tradingHistory.title":"\u6700\u65b0\u6210\u4ea4","exchange.tradingPair.change":"\u6da8\u8dcc","exchange.tradingPair.pair":"\u5e02\u573a","exchange.tradingPair.price":"\u4ef7\u683c","exchange.tradingPair.search":"\u641c\u7d22","exchange.tradingPair.volume":"\u6210\u4ea4\u91cf","exchange.txFee":"\u624b\u7eed\u8d39","exchange.txHash":"TxHash","exchange.type":"\u7c7b\u578b","exchange.value":"\u6570\u91cf","exchange.miniToken.warning.title":"Do your own research","exchange.miniToken.warning.content1":"MiniToken is a special token type on Binance Chain. The information and materials provided here, whether or not provided on Binance\'s website/webpages, on third party websites, in marketing materials, newsletters or any form of publication are provided for general information only. They do not constitute an offer to buy or sell any products offered or advertised. Likewise, they are not to be taken as investment, financial or trading advice. Any expression of opinion is personal to the author and there is no guarantee of completeness or accuracy.","exchange.miniToken.warning.content2":"Binance shall not be responsible for any losses arising from investment based on any information made available via any of Binance\'s social media accounts or websites. All users or new participants, regardless of experience and knowledge are strongly recommended to do their own research prior to trying out any of the products we offer. If the user is still unsure after research, he/she is encouraged to avoid the product entirely. The user acknowledges that some of the products offered by Binance could be on the riskier spectrum. For avoidance of doubt, all users are encouraged to read the Terms of Use clearly.","exchange.miniToken.warning.button1":"\u6211\u660e\u767d\u4e86","exchange.miniToken.warning.fully.understand":"I fully understand, do not show it anymore.","fees.fee":"\u624b\u7eed\u8d39","fees.height":"\u533a\u5757\u9ad8\u5ea6","fees.note":"\u5907\u6ce8","footer.terms":"\u6761\u6b3e\u670d\u52a1","footer.privacy":"\u9690\u79c1\u8bf4\u660e","googledrive.create.nameExist":"\u540d\u5b57\u5df2\u5b58\u5728","header.balances":"\u8d44\u4ea7","header.createWallet":"\u521b\u5efa\u94b1\u5305","header.exchange":"\u4ea4\u6613\u6240","header.exchange.bep2":"Tokens (BEP2)","header.exchange.bep8":"MiniTokens (BEP8)","header.exchange.menu.bep2":"Tokens (BEP2)","header.exchange.menu.bep8":"MiniTokens (BEP8)","header.explorer":"\u533a\u5757\u94fe\u6d4f\u89c8\u5668","header.faq":"Docs / FAQ","header.blog":"Blog","header.feeHistory":"\u624b\u7eed\u8d39\u5386\u53f2","header.forums":"\u8bba\u575b","header.mainnet":"\u4e3b\u7f51","header.openOrders":"\u5f53\u524d\u59d4\u6258","header.orderHistory":"\u59d4\u6258\u5386\u53f2","header.orders":"\u59d4\u6258\u7ba1\u7406","header.testnet":"\u6d4b\u8bd5\u7f51","header.tradeHistory":"\u5386\u53f2\u6210\u4ea4","header.transactions":"\u4ea4\u6613\u8bb0\u5f55","header.unlockWallet":"\u89e3\u9501\u94b1\u5305","header.user.changeWallet":"\u5207\u6362\u94b1\u5305","header.user.closeWallet":"\u5173\u95ed\u94b1\u5305","header.user.coinomi":"Coinomi ","header.user.copyAddress":"\u590d\u5236\u5730\u5740","header.user.copySuccess":"\u590d\u5236\u6210\u529f!","header.user.createNewWallet":"\u521b\u5efa\u65b0\u94b1\u5305","header.user.exportKeystoreFile":"\u5bfc\u51faKeystore\u6587\u4ef6","header.user.goToExplorer":"\u524d\u5f80\u6d4f\u89c8\u5668","header.user.infinito":"Infinito ","header.user.ledger":"Ledger ","header.user.trezor":"Trezor \u8bbe\u5907","header.user.wallet":"\u94b1\u5305","header.user.walletConnect":"WalletConnect ","header.youWantCloseWallet":"\u4f60\u786e\u5b9a\u8981\u5173\u95ed\u94b1\u5305\u5417?","home.aboutPage.desc1.line1":"\u5e01\u5b89\u94fe\u662f\u5e01\u5b89\u6700\u521d\u5f00\u53d1\u7684\u533a\u5757\u94fe\u3002","home.aboutPage.desc1.line2":"\u5148\u8fdb\u3001\u5b89\u5168\u3001\u9ad8\u6548\u3002","home.aboutPage.desc2.line1":"\u5e01\u5b89\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240\u91c7\u7528\u5206\u5e03\u5f0f\u8ba2\u5355\u5339\u914d\u5f15\u64ce\uff0c","home.aboutPage.desc2.line2":"\u4ee5\u5e01\u5b89\u94fe\u7684\u6838\u5fc3\u6280\u672f\u4e3a\u9a71\u52a8\u3002","home.aboutPage.desc3.line1":"\u5e01\u5b89\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240\u662f\u4e00\u4e2a\u5148\u8fdb\u7684\u3001\u5b89\u5168\u7684\u6570\u5b57\u8d44\u4ea7\u53d1\u884c\u548c\u4ea4\u6613\u5e73\u53f0\uff0c","home.aboutPage.desc3.line2":"\u79c1\u94a5\u81ea\u6709, \u4ea4\u6613\u60a8\u6700\u559c\u6b22\u7684\u8d44\u4ea7\u4ece\u672a\u5982\u6b64\u5b89\u5168\u3002","home.aboutPage.title":"\u5173\u4e8e\u5e01\u5b89\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240","home.binanceDex":"\u5e01\u5b89\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u5e73\u53f0","home.processPage.aboutBalance":"\u5173\u4e8e\u5e01\u5b89\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240","home.processPage.create":"\u521b\u5efa","home.processPage.createDesc":"\u521b\u5efa\u5e01\u5b89\u94fe\u4e0a\u94b1\u5305\u662f\u7b2c\u4e00\u6b65","home.processPage.createWallet":"\u521b\u5efa\u65b0\u94b1\u5305","home.processPage.getStart":"\u5f00\u59cb\u4f7f\u7528\u5e01\u5b89\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240","home.processPage.go":"\u524d\u5f80","home.processPage.placeOrders":"\u4e0b\u5355","home.processPage.placeOrdersDesc":"\u4f7f\u7528Web\u94b1\u5305\u6216API\u53d1\u9001\u548c\u53d6\u6d88\u8ba2\u5355\u3002","home.processPage.transferAssets":"\u8f6c\u8d26","home.processPage.transferAssetsDesc":"\u4f7f\u7528\u5e01\u5b89\u94fe\u5730\u5740(\u53ef\u7531\u652f\u6301\u5e01\u5b89\u94fe\u7684\u4efb\u4f55\u94b1\u5305\u751f\u6210)\uff0c\u60a8\u53ef\u4ee5\u4ea4\u6613\u5b58\u50a8\u5728\u8be5\u5730\u5740\u4e0a\u7684BNB\u6216\u5176\u4ed6\u8d44\u4ea7\u3002","home.processPage.unlock":"\u89e3\u9501","home.processPage.unlockDesc":"\u56db\u79cd\u65b9\u5f0f\u89e3\u9501\u4f60\u7684\u94b1\u5305","home.processPage.unlockMode1":"WalletConnect","home.processPage.unlockMode2":"Ledger","home.processPage.unlockMode3":"Keystore \u6587\u4ef6+\u5bc6\u7801","home.processPage.unlockMode4":"\u52a9\u8bb0\u8bcd","home.processPage.unlockWallet":"\u89e3\u9501\u94b1\u5305","home.startPage.createWallet":"\u521b\u5efa\u94b1\u5305","home.startPage.desc1":"\u5b89\u5168\u9ad8\u6548\u7684\u53bb\u4e2d\u5fc3\u5316\u6570\u5b57\u8d44\u4ea7\u4ea4\u6613\u5e73\u53f0","home.startPage.desc2":"\u5f15\u9886\u52a0\u5bc6\u8d27\u5e01\u4ea4\u6613\u65b0\u6f6e\u6d41","home.startPage.getTestBNB":"\u83b7\u53d6\u6d4b\u8bd5BNB","home.startPage.startTrading":"\u5f00\u542f\u4ea4\u6613","home.whyPage.community":"\u793e\u533a\u81ea\u6cbb","home.whyPage.communityDesc":"\u5e01\u5b89\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240\u7531\u5728\u7ebf\u6cbb\u7406\u548c\u5f00\u6e90\u6280\u672f\u63d0\u4f9b\u652f\u6301\u3002","home.whyPage.decentralized":"\u53bb\u4e2d\u5fc3\u5316","home.whyPage.decentralizedDesc":"\u94b1\u5305\u5230\u94b1\u5305\u7684\u4ea4\u6613\uff0c\u6ca1\u6709\u7b2c\u4e09\u65b9\u548c\u4e2d\u5fc3\u5316\u7684\u4ecb\u5165\u3002","home.whyPage.getStarted":"\u5f00\u59cb\u4f7f\u7528","home.whyPage.lowTradingFees":"\u4f4e\u4ea4\u6613\u624b\u7eed\u8d39","home.whyPage.lowTradingFeesDesc":"\u5145\u503c\u3001\u63d0\u73b0\u3001\u4e0b\u5355\u514d\u8d39\u3002---BNB\u6301\u6709\u8005\u53ef\u4ee5\u4eab\u53d7\u66f4\u4f4e\u7684\u8d39\u7528\u3002","home.whyPage.safeAndSecure":"\u5b89\u5168\u53ef\u9760","home.whyPage.safeAndSecureDesc":"\u8d44\u4ea7\u5b58\u50a8\u5728\u533a\u5757\u94fe\u5730\u5740\u4e0a\uff0c\u53ea\u6709\u60a8\u7684\u79c1\u94a5\u53ef\u4ee5\u6253\u5f00\u5b83\u3002","home.whyPage.title":"\u4e3a\u4ec0\u4e48\u9009\u62e9\u5e01\u5b89\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240","home.whyPage.userFriendly":"\u4eba\u6027\u5316\u4f53\u9a8c","home.whyPage.userFriendlyDesc":"\u65e0\u9700\u5145\u503c\u6216\u8005\u63d0\u73b0\uff0c\u521b\u5efa/\u89e3\u9501\u94b1\u5305\uff0c\u5c31\u53ef\u4ee5\u4ea4\u6613\u3002","inputPassword.passwordRule":"\u60a8\u7684\u5bc6\u7801\u5fc5\u987b\u7b26\u5408\u4ee5\u4e0b\u8981\u6c42","inputPassword.passwordRule1":"\u81f3\u5c118\u4f4d\u5b57\u7b26","inputPassword.passwordRule2":"\u81f3\u5c11\u542b\u6709\u4e00\u4e2a\u5927\u5199\u5b57\u6bcd\uff0c\u7279\u6b8a\u5b57\u7b26\u548c\u6570\u5b57","inputPassword.setANewPassword":"\u8bbe\u7f6e\u4e00\u4e2a\u65b0\u5bc6\u7801","landing.connectWallet":"\u5173\u8054\u94b1\u5305","landing.createWallet":"\u521b\u5efa\u94b1\u5305","landing.desc1":"\u5e01\u5b89\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u5e73\u53f0","landing.desc2":"\u5b89\u5168\u9ad8\u6548\u7684\u53bb\u4e2d\u5fc3\u5316\u6570\u5b57\u8d44\u4ea7\u4ea4\u6613\u5e73\u53f0\\n\u5f15\u9886\u52a0\u5bc6\u8d27\u5e01\u4ea4\u6613\u65b0\u6f6e\u6d41","landing.footer.fee":"\u624b\u7eed\u8d39","landing.footer.terms":"\u670d\u52a1\u6761\u6b3e","landing.footer.privacy":"\u9690\u79c1\u8bf4\u660e","landing.how.connect":"\u8fde\u63a5","landing.how.connect.desc":"\u8bbf\u95eeBinance DEX\u6bd4\u60a8\u60f3\u8c61\u7684\u8981\u5bb9\u6613\u3002\u4ece\u8fde\u63a5\u9009\u9879\u4e2d\u9009\u62e9, \u7136\u540e\u5355\u51fb\u8fde\u63a5\u6309\u94ae\u3002\u5c31\u53ef\u4ee5\u5f00\u59cb\u4e86","landing.how.create":"\u521b\u5efa","landing.how.create.desc":"Binance DEX\u8ba9\u60a8\u53ef\u4ee5\u81ea\u7531\u9009\u62e9\uff0c\u4ece\u4fbf\u5229\u7684\u5bc6\u94a5\u5e93\u5230\u8d85\u5b89\u5168\u7684\u786c\u4ef6\u94b1\u5305\u9009\u9879\u3002","landing.how.step":"\u6b65\u9aa4","landing.how.title":"\u600e\u4e48\u4f7f\u7528","landing.how.trade":"\u4ea4\u6613","landing.how.trade.desc":"\u6211\u4eec\u7684\u76ee\u6807\u662f\u4f7f\u4ea4\u6613\u4e0eBinance.com\u65e0\u7f1d\u4e14\u65e0\u6cd5\u533a\u5206\u3002 \u4e3a\u6b64\uff0c\u6211\u4eec\u4f18\u5316\u4e86\u6700\u4f73\u529f\u80fd\uff0c\u4ee5\u4fbf\u60a8\u559c\u6b22\u7684\u6240\u6709\u5185\u5bb9\u4e5f\u90fd\u5728Binance DEX\u4e0a\u3002","landing.markets":"\u5e02\u573a","landing.markets.24HChange":"24\u5c0f\u65f6\u6da8\u8dcc","landing.markets.24HVolume":"24\u5c0f\u65f6\u6210\u4ea4\u91cf","landing.markets.lastPrice":"\u4ef7\u683c","landing.markets.pair":"\u5e02\u573a","landing.markets.searchPlaceholder":"\u67e5\u8be2\u5e01\u79cd\u540d\u79f0","landing.menu.balances":"\u4f59\u989d","landing.menu.changeWallet":"\u5207\u6362\u94b1\u5305","landing.menu.closeWallet":"\u5173\u95ed\u94b1\u5305","landing.menu.community":"\u793e\u533a","landing.menu.copyAddress":"\u590d\u5236\u5730\u5740","landing.menu.docs":"\u6587\u6863","landing.menu.exchange":"\u4ea4\u6613\u6240","landing.menu.explorer":"\u6d4f\u89c8\u5668","landing.menu.orders":"\u8ba2\u5355","landing.menu.orders.feeHistory":"\u624b\u7eed\u8d39\u5386\u53f2","landing.menu.orders.openOrders":"\u5f53\u524d\u59d4\u6258","landing.menu.orders.orderHistory":"\u59d4\u6258\u5386\u53f2","landing.menu.orders.tradeHistory":"\u5386\u53f2\u6210\u4ea4","landing.menu.testnet":"\u6d4b\u8bd5\u7f51","landing.menu.tools":"\u5de5\u5177","landing.menu.transaction":"\u4ea4\u6613","landing.menu.wallet":"\u94b1\u5305","landing.startTrading":"\u5f00\u59cb\u4ea4\u6613","landing.trust.activeAddress":"\u6d3b\u8dc3\u94b1\u5305","landing.trust.activeAddress.desc":"\u4e0e\u4efb\u4f55\u5176\u4ed6\u94b1\u5305\u89e3\u51b3\u65b9\u6848\u76f8\u6bd4\uff0c\u66f4\u591a\u7684\u4eba\u76f8\u4fe1Binance DEX\u7684\u57fa\u7840\u67b6\u6784\u548c\u4ea4\u6613\u7cfb\u7edf\u3002","landing.trust.pairs":"\u4ea4\u6613\u5bf9","landing.trust.pairs.desc":"Binance DEX\u6bcf\u5468\u4e3a\u60a8\u63d0\u4f9b\u66f4\u591a\u9009\u62e9\u548c\u4ea4\u6613\u7075\u6d3b\u6027\u3002","landing.trust.rank":"\u6392\u540d","landing.trust.rank.desc":"Binance DEX\u662fCoinmarketcap\u4e0a\u6392\u540d\u7b2c\u4e00\u7684\u53bb\u4e2d\u5fc3\u5316\u52a0\u5bc6\u8d27\u5e01\u4ea4\u6613\u6240\u3002","landing.trust.title":"\u4eba\u4eec\u4e3a\u4ec0\u4e48\u4fe1\u4efb\u6211\u4eec","landing.why.competitive":"\u7ade\u4e89\u529b","landing.why.competitive.desc":"\u5f53\u60a8\u4f7f\u7528BNB\u652f\u4ed8\u4ea4\u6613\u8d39\u7528\u65f6\uff0c\u8d39\u7528\u4ec5\u4e3a0.04\uff05\u3002 \u8fd9\u51e0\u4e4e\u662f\u5168\u7403\u9886\u5148\u7684\u4ea4\u6613\u8d39\u7528\u4ea4\u6613\u5e73\u53f0Binance.com\u7684\u4e00\u534a\u3002","landing.why.fast":"\u5feb","landing.why.fast.desc":"\u533a\u5757\u65f6\u95f4\u4e3a1\u79d2\uff0c\u533a\u5757\u94fe\u4ea4\u6613\u786e\u8ba4\u5df2\u6210\u4e3a\u8fc7\u53bb\u3002 \u5145\u5206\u5229\u7528DEX\u7684\u6240\u6709\u4f18\u70b9\uff0c\u800c\u6ca1\u6709\u7f3a\u70b9\u3002","landing.why.secure":"\u5b89\u5168","landing.why.secure.desc":"Binance DEX\u5c06\u5b89\u5168\u6027\u63d0\u5347\u5230\u4e00\u4e2a\u5168\u65b0\u7684\u6c34\u5e73\u3002 \u70b9\u5bf9\u70b9\u8f6c\u79fb\u548c\u4ea4\u6613\u610f\u5473\u7740\u51e0\u4e4e\u96f6\u5b89\u5168\u5a01\u80c1\u3002","landing.why.title":"\u4e3a\u4ec0\u4e48\u662f\u5e01\u5b89\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u5e73\u53f0","lang.menu.copyAddress":" ","noContent.descPrefix":"\u60a8\u6ca1\u6709","openOrders.areYourTrue":"\u4f60\u786e\u5b9a\u9700\u8981","openOrders.cancel":"\u64a4\u9500\u8ba2\u5355\u5417","openOrders.cancel all":"\u64a4\u9500\u5168\u90e8\u8ba2\u5355\u5417","openOrders.cancel buy":"\u64a4\u9500\u4e70\u5355\u5417","openOrders.cancel sell":"\u64a4\u9500\u5356\u5355\u5417","openOrders.cancelAll":"\u64a4\u9500\u5168\u90e8\u8ba2\u5355","openOrders.cancelBuy":"\u64a4\u9500\u4e70\u5355","openOrders.cancelOrder":"\u64a4\u9500\u8ba2\u5355","openOrders.cancelOrders":"\u64a4\u9500\u8ba2\u5355","openOrders.cancelPartialSuccess":"\u64a4\u9500\u90e8\u5206\u8ba2\u5355\u6210\u529f","openOrders.cancelSell":"\u64a4\u9500\u5356\u5355","openOrders.cancelSuccess":"\u64a4\u9500\u6210\u529f","openOrders.keepOrder":"\u53d6\u6d88","openOrders.keepOrders":"\u53d6\u6d88","openOrders.noBuyOpenOrders":"\u6ca1\u6709\u4e70\u5355","openOrders.noOpenOrders":"\u6ca1\u6709\u59d4\u6258\u5355","openOrders.noSellOpenOrders":"\u6ca1\u6709\u5356\u5355","openOrders.title":"\u5f53\u524d\u59d4\u6258","orderForm.amount":"\u6570\u91cf","orderForm.avb":"Avb","orderForm.buy":"\u4e70","orderForm.equivalent":"Equivalent","orderForm.price":"\u4ef7\u683c","orderForm.sell":"\u5356","orderForm.total":"\u603b\u989d","orderHistory.openHistory":"\u59d4\u6258\u5386\u53f2","orderHistory.title":"\u59d4\u6258\u5386\u53f2","orderHistory.tradeId":"Trade ID","orderHistory.tradingPrice":"\u4ea4\u6613\u4ef7\u683c","orderHistory.tradingTotal":"\u4ea4\u6613\u603b\u91cf","privateKeyModal.backupText":"\u628a\u4e0b\u9762\u7684\u52a9\u8bb0\u8bcd\u5907\u4efd\u5728\u7eb8\u4e0a\uff0c\u5e76\u5c06\u5176\u4fdd\u5b58\u5728\u67d0\u4e2a\u79d8\u5bc6\u548c\u5b89\u5168\u7684\u5730\u65b9\u3002","privateKeyModal.title":"\u6211\u7684\u79c1\u94a5","testnet.binanceChainExplorerGuide":"Binance Chain \u6d4f\u89c8\u5668\u4f7f\u7528\u6307\u5357","testnet.fastAndSecureDesc":"\u5b89\u5168\u9ad8\u6548\u7684\u53bb\u4e2d\u5fc3\u5316\u6570\u5b57\u8d44\u4ea7\u4ea4\u6613\u5e73\u53f0","testnet.fundingYourTestnetAccount":"\u7533\u8bf7 DEX \u6d4b\u8bd5\u8d44\u91d1","testnet.howToAccessYourWallet":"\u5982\u4f55\u8bbf\u95ee DEX \u94b1\u5305","testnet.howToCreateAWallet":"\u5982\u4f55\u5728 Binance DEX \u4e0a\u521b\u5efa\u94b1\u5305","testnet.interfaceGuide":"\u754c\u9762\u5411\u5bfc","testnet.thingsToAvoid":"\u6d4b\u8bd5\u7f51\u6ce8\u610f\u4e8b\u9879","testnet.title":"\u5e01\u5b89\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240 (\u6d4b\u8bd5\u7f51)","token.issue.bep2Title":"BEP-2 Token","token.issue.bep2Desc":"BEP-2 is a technical standard for the issuance and implementation of tokens on the Binance Chain.","token.issue.bep8Title":"BEP-8 Token (Mini-BEP2)","token.issue.bep8Desc":"BEP-8 is a technical standard for the issuance and implementation of tokens on the Binance Chain.","token.issue.title":"Token Issuance","token.issue.confirmationModal.title":"Check Token Contract","token.issue.confirmationModal.confirm":"\u5168\u90e8\u64a4\u9500","token.issue.tokenNameLabel":"Token Name","token.issue.tokenNameDesc":"Token names must have between 3 and 32 characters.","token.issue.symbolLabel":"\u5408\u7ea6","token.issue.maxSupplyLabel":"\u6700\u5927\u4f9b\u7ed9\u91cf","token.issue.symbolDescLength":"Symbols must have between 2 and 5 characters.","token.issue.totalSuppyHeader":"Select Token Max Supply","token.issue.totalSuppyDesc":"Max supply is the maximum number of tokens that can be created","token.issue.supplyLabel":"Supply","token.issue.supplyDesc":"The number of tokens you need to issue","token.issue.prev":"\u5e01\u5217\u8868","token.issue.updateTokenInfoHeader":"Set the URL to update token information(Optional)","token.issue.updateTokenInfoHeaderTips":"The URL will return JSON-formatted information that will be an introduction to your MiniToken","token.issue.fillInRequestedUrlLabel":"Fill in the requested URL","token.issue.issuanceFee":"issuance fee","token.list.title":"\u6211\u7684\u4ee3\u5e01","token.issueModal.mintable":"\u662f\u5426\u53ef\u589e\u53d1","token.issueModal.nonMintable":"Non-mintable","token.issueModal.name":"\u5e01\u79cd\u5168\u79f0","token.issueModal.nameErrMsg":"token\u7684\u540d\u5b57\u4e0d\u80fd\u8d85\u8fc732\u4e2a\u5b57\u7b26","token.issueModal.symbol":"\u5e01\u79cd","token.issueModal.symbolErrMsg":"\u5b57\u7b26\u5e94\u8be5\u662f\u82f1\u6587+\u6570\u5b57\u5e76\u4e14\u957f\u5ea6\u8303\u56f4\u662f3\uff5e8","token.issueModal.title":"\u53d1\u884cToken","token.issueModal.totalSupply":"\u603b\u91cf","token.issueModal.totalSupplyErrMsg":"\u53d1\u884c\u603b\u6570\u4e0d\u5bf9","token.listModal.address":"\u5730\u5740","token.listModal.confirm":"\u786e\u8ba4","token.listModal.initPrice":"\u521d\u59cb\u4ef7\u683c","token.listModal.proposalId":"\u7533\u8bf7Id","token.listModal.quoteAsset":"\u5e01\u79cd","token.listModal.title":"\u4e0a\u5e01","token.listModal.tokenName":"\u5e01\u79cd\u540d\u79f0","token.main.burn":"\u9500\u6bc1","token.main.freeze":"\u51bb\u7ed3","token.main.issueToken":"\u53d1\u884cToken","token.main.list":"\u4e0a\u5e01","token.main.listSuccessmsg":"\u4e0a\u5e01\u6210\u529f","token.main.mint":"\u589e\u53d1","token.main.proposal":"\u7533\u8bf7\u4e0a\u5e01","token.main.submitListFirst":"\u8bf7\u5148\u63d0\u4ea4\u4e0a\u5e01\u7533\u8bf7","token.main.submitSuccessmsg":"\u63d0\u4ea4\u4e0a\u5e01\u7533\u8bf7\u6210\u529f","token.main.title":"\u5e01\u5217\u8868","token.main.unfreeze":"\u89e3\u51bb","token.proposalModal.address":"\u5730\u5740","token.proposalModal.baseAsset":"\u57fa\u672c\u5e01\u79cd","token.proposalModal.desc":"\u63cf\u8ff0","token.proposalModal.expireTime":"\u8fc7\u671f\u65f6\u95f4","token.proposalModal.hours":"\u5c0f\u65f6","token.proposalModal.initDeposit":"\u521d\u59cb\u50a8\u5907\u91d1","token.proposalModal.initPrice":"\u521d\u59cb\u4ef7\u683c","token.proposalModal.initPriceErr":"\u521d\u59cb\u4ef7\u683c\u4e0d\u80fd\u4e3a\u7a7a","token.proposalModal.initPriceErr2":"\u521d\u59cb\u4ef7\u683c\u5e94\u8be5\u5927\u4e8e0","token.proposalModal.quoteAsset":"Quote \u5e01\u79cd","token.proposalModal.title":"\u4e0a\u5e01\u7533\u8bf7","token.proposalModal.titleErr":"\u7533\u8bf7\u7684\u6807\u9898\u4e0d\u80fd\u4e3a\u7a7a","token.proposalModal.titleErr2":"\u7533\u8bf7\u6807\u9898\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7128","token.proposalModal.votingPeriod":"\u6295\u7968\u65f6\u95f4","token.table.col.mintable":"\u662f\u5426\u53ef\u589e\u53d1","token.table.col.name":"\u540d\u79f0","token.table.col.symbol":"\u5e01\u79cd","token.table.col.tokenType":"\u7c7b\u578b","token.table.col.totalSupply":"\u603b\u91cf","token.tokenModal.address":"\u5730\u5740","token.tokenModal.amount":"\u6570\u91cf","token.tokenModal.available":"\u53ef\u7528\u4f59\u989d","token.tokenModal.burnTitle":"\u9500\u6bc1\u5e01\u79cd","token.tokenModal.confirm":"\u786e\u8ba4","token.tokenModal.desc":" ","token.tokenModal.freezeTitle":"\u51bb\u7ed3 Token","token.tokenModal.mintTitle":"\u589e\u53d1","token.tokenModal.name":"\u540d\u79f0","token.tokenModal.unfreezeTitle":"\u89e3\u51bbToken","token.list.tradepair.exist":"Trade pair existed","token.warning":"\u6211\u4eec\u76ee\u524d\u4e0d\u652f\u6301\u4e0ewalletconnect\u517c\u5bb9\u7684\u94b1\u5305\uff0c\u5e76\u4e14\u51fa\u4e8e\u5b89\u5168\u539f\u56e0\uff0cLedger\u662f\u53d1\u5e01/\u4e0a\u5e01/\u589e\u53d1/\u9500\u6bc1Token\u7684\u6700\u4f73\u9009\u62e9","tradeHistory.tradeHistory":"\u5386\u53f2\u6210\u4ea4","transaction.here":"\u8fd9\u91cc","transaction.notes":"\u5e76\u975e\u6bcf\u7b14\u4ea4\u6613\u90fd\u5305\u542b\u5728\u4e0b\u9762\u3002 \u6709\u5173\u5b8c\u6574\u7684\u5386\u53f2\u8bb0\u5f55\uff0c\u8bf7\u53c2\u9605","txHistory.here":"\u8fd9\u513f","txHistory.notEveryTransactionIsIncludedBelow":"\u4e0d\u662f\u6bcf\u4e00\u6761\u4ea4\u6613\u4fe1\u606f\u90fd\u4f1a\u5728\u8fd9\u91cc\u663e\u793a\u3002\u5982\u9700\u67e5\u770b\u5168\u90e8\u5386\u53f2\u8bb0\u5f55\uff0c\u8bf7\u70b9\u51fb\u67e5\u9605\u3002","txHistory.title":"\u4ea4\u6613\u8bb0\u5f55","unlock.connectAddress.enterYourAddress":"Enter your address","unlock.connectAddress.invalidAddress":"\u65e0\u6548\u7684\u5730\u5740","unlock.connectAddress.viewOnlyMode":"Enter an address for view only mode","unlock.createNewWallet":"\u521b\u5efa\u4e00\u4e2a\u65b0\u94b1\u5305","unlock.google.chooseWallet":"\u8bf7\u9009\u62e9\u60a8\u7684\u4e00\u4e2a\u94b1\u5305","unlock.google.logIn":"\u767b\u5f55","unlock.google.notLoggedIn":"\u60a8\u8fd8\u6ca1\u767b\u5f55\u60a8\u7684Google\u8d26\u6237","unlock.google.signedInAs":"\u767b\u9646\u6210\u529f","unlock.googledrive.editWallet":"\u7f16\u8f91\u94b1\u5305","unlock.googledrive.wallets":"\u8bf7\u4ece\u4e0b\u9762\u7684\u94b1\u5305\u4e2d\u9009\u62e9","unlock.index.selectUnlockType":"\u8bf7\u9009\u62e9\u60a8\u89e3\u9501\u7684\u65b9\u5f0f","unlock.index.title":"\u89e3\u9501\u94b1\u5305","unlock.keystore.enterYourWalletPass":"\u8f93\u5165\u4e00\u4e2a\u5f3a\u5bc6\u7801","unlock.keystore.paste":"\u6216\u8005\u590d\u5236\u60a8\u7684Keystore \u6587\u4ef6\u5185\u5bb9","unlock.keystore.select":"\u8fde\u63a5\u52a0\u5bc6\u7684\u94b1\u5305\u6587\u4ef6\u5e76\u8f93\u5165\u5bc6\u7801","unlock.keystore.upload":"\u4e0a\u4f20\u60a8\u7684Keystore\u6587\u4ef6","unlock.ledger.appInstallation":"\u5b89\u88c5App","unlock.ledger.binanceChainReady":"\u8bf7\u51c6\u5907\u597d Binance Chain","unlock.ledger.connectToLedger":"\u8fde\u63a5Ledger\u786c\u4ef6\u94b1\u5305","unlock.ledger.enterPINCode":"\u8f93\u5165PIN\u5bc6\u7801","unlock.ledger.getTheApp":"\u83b7\u53d6\u5e94\u7528\u7a0b\u5e8f","unlock.ledger.havingConnectionIssues":"\u8fde\u63a5\u51fa\u9519?","unlock.ledger.mustBeOnScreen":"\u5728 Ledger \u94b1\u5305\u4e2d","unlock.ledger.openBinanceChain":"\u6253\u5f00\u5e01\u5b89\u94fe","unlock.ledger.text":"\u6309\u7167\u5c4f\u5e55\u4e0a\u7684\u8bf4\u660e\u5728\u6b64\u5904\u8fde\u63a5\u786c\u4ef6\u94b1\u5305","unlock.ledger.title":"\u7528Ledger\u89e3\u9501","unlock.ledger.usageInstructions":"\u4f7f\u7528\u8bf4\u660e","unlock.mnemonic.pleaseEnterYourPhrase":"\u8bf7\u8f93\u5165\u60a8\u768424\u4e2a\u52a9\u8bb0\u8bcd","unlock.mnemonic.pleaseSeparateEachWordSpace":"\u8bf7\u95ee\u7a7a\u683c\u9694\u5f00\u6bcf\u4e00\u4e2a\u52a9\u8bb0\u8bcd\u3002","unlock.mnemonic.warning.desc1":"\u8be5\u9009\u9879\u6062\u590d\u4e22\u5931\u7684KeyStore \u6587\u4ef6\u3001\u5bc6\u7801","unlock.mnemonic.warning.desc2":"\u6216\u8005\u4ece\u5176\u4ed6\u94b1\u5305\u5bfc\u5165\u52a9\u8bb0\u8bcd","unlock.mnemonic.warning.desc3":"\u8b66\u544a\u63d0\u9192\uff1a\u8bf7\u52ff\u5728\u5176\u4ed6\u4efb\u4f55\u7f51\u7ad9\u8f93\u5165\u60a8\u7684\u52a9\u8bb0\u8bcd\u6216\u8005\u79c1\u94a5\uff0c\u4e00\u65e6\u60a8\u7684\u6d4f\u89c8\u5668\u5b89\u88c5\u4e86\u6076\u610f\u63d2\u4ef6\u6216\u8005\u4e0d\u5c0f\u5fc3\u8bbf\u95ee\u4e86\u9493\u9c7c\u7f51\u7ad9\uff0c\u60a8\u7684\u8d44\u4ea7\u53ef\u80fd\u4f1a\u6709\u88ab\u76d7\u98ce\u9669\u3002","unlock.privateKey.enterYourPrivateKey":"\u8f93\u5165\u60a8\u7684\u79c1\u94a5\uff08Hex\u683c\u5f0f\uff09","unlock.privateKey.invalid":"\u79c1\u94a5\u683c\u5f0f\u9519\u8bef\uff08\u65e0\u6548\u7684\u79c1\u94a5\uff09","unlock.privateKey.passwordInvalid":"\u4e34\u65f6\u4f1a\u8bdd\u5bc6\u7801\u9519\u8bef","unlock.privateKey.warning":"\u7528\u4e8e\u6062\u590d\u4e22\u5931\u7684Keystore\u6587\u4ef6\u6216\u5bc6\u7801","unlock.privateKey.warningQuestion":"\u8bf7\u52ff\u5728\u7f51\u7ad9\u4e0a\u663e\u793a\u60a8\u7684\u79c1\u94a5\uff0c\u4e00\u65e6\u60a8\u7684\u6d4f\u89c8\u5668\u5b89\u88c5\u4e86\u6076\u610f\u63d2\u4ef6\u6216\u4e0d\u5c0f\u5fc3\u8bbf\u95ee\u4e86\u9493\u9c7c\u7f51\u7ad9\uff0c\u60a8\u7684\u8d44\u4ea7\u53ef\u80fd\u4f1a\u6709\u88ab\u76d7\u98ce\u9669\u3002","unlock.recover.content":"\u4f7f\u7528\u5728\u521b\u5efa\u94b1\u5305\u671f\u95f4\u5df2\u77e5\u7684\u6062\u590d\u77ed\u8bed\u6765\u6062\u590d\u94b1\u5305\u8bbf\u95ee","unlock.recover.download.button":"\u4e0b\u8f7d","unlock.recover.downloadTitle":"\u4e0b\u8f7d\u4f60\u7684Ketstore\u6587\u4ef6","unlock.recover.password.placeholder":"\u8f93\u5165\u4e00\u4e2a\u5f3a\u5bc6\u7801","unlock.recover.submit":"\u63d0\u4ea4","unlock.recover.title":"\u6062\u590dkeystore\u6587\u4ef6","unlock.recover.understand.continue":"\u6062\u590d Keystore \u6587\u4ef6","unlock.recover.word.placeholder":"\u641c\u7d22","unlock.recover.wordlist.reset":"\u91cd\u7f6e","unlock.recover.wordlistTitle":"\u8bf7\u9009\u62e9\u5de6\u4fa7\u7684\u5355\u8bcd","unlock.support.wallets":" ","unlock.temporarySessionPassword":"\u4e34\u65f6\u4f1a\u8bdd\u5bc6\u7801","unlock.thisIsNotAValidWalletFile":"\u8fd9\u662f\u4e00\u4e2a\u65e0\u6548\u7684\u94b1\u5305\u6587\u4ef6","unlock.trezor.connectToTrezor":"\u8fde\u63a5\u5230Trezor","unlock.trezor.firmwareNotice":"\u63d0\u793a\uff1a\u4e3a\u4e86\u80fd\u5728\u5e01\u5b89\u94fe\u4e0a\u9762\u4f7f\u7528\uff0c\u8bf7\u786e\u4fddTrezor\u5df2\u7ecf\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c","unlock.trezor.notOnTestNet":"\u63d0\u793a\uff1aTrezor\u76ee\u524d\u53ea\u652f\u6301Chrome\u6216\u8005\u706b\u72d0\u6d4f\u89c8\u5668","unlock.trezor.title":"Trezor\u89e3\u9501","unlock.unlockWalletNow":"\u89e3\u9501\u94b1\u5305","unlock.walletConnect.notes":"\u63d0\u793a:Trust Wallet and CoolWallet \u4e0d\u652f\u6301testnet.","unlock.walletConnect.recommendedWallet":"\u652f\u6301\u7684\u94b1\u5305","unlock.walletConnet.getTrustWallet":"\u4e0b\u8f7d Trust Wallet","unlock.walletConnet.qrCodeDesc1":"\u83b7\u53d6WalletConnect\u4e8c\u7ef4\u7801","unlock.walletConnet.qrCodeDesc2":"\u8fd8\u6ca1\u6709\u652f\u6301WalletConnect\u7684App\uff1f","unlock.walletConnet.showWalletQrCode":"\u4f7f\u7528\u5c4f\u5e55\u4e0a\u7684\u4e8c\u7ef4\u7801\u8fde\u63a5\u4f60\u7684\u624b\u673a\u94b1\u5305","unlock.walletConnet.title":"\u63a8\u8350","walletConnect.clickHereToUnlock":"\u70b9\u51fb\u5207\u6362\u5176\u4ed6\u94b1\u5305","walletConnect.error":"WalletConnect \u9519\u8bef","walletConnect.errorOccur":"WalletConnect \u53d1\u751f\u4e86\u9519\u8bef","walletConnect.pleaseEnsureOpenWorking":"\u8bf7\u786e\u4fdd\u4f60\u7684\u6253\u5f00\u4e86App","walletConnect.pleaseUseAWalletConnect":"\u8bf7\u4f7f\u7528WalletConnect\u626b\u63cf\u4e0b\u65b9\u7684\u4e8c\u7ef4\u7801","walletConnect.qrCode":"WalletConnect \u4e8c\u7ef4\u7801","walletConnect.readyToConfirm":"\u8bf7\u786e\u8ba4","walletConnect.readyToConfirmBody":"\u8bf7\u5728App\u4e2d\u786e\u8ba4\u4ea4\u6613","walletconnect.notifycation.connectAgain":"\u91cd\u65b0\u8fde\u63a5","walletconnect.notifycation.disconnectMessage":"\u5df2\u7ecf\u548c\u624b\u673a\u94b1\u5305\u65ad\u5f00\u94fe\u63a5...","walletconnect.notifycation.hide":"\u9690\u85cf","local.secure.storage":"\u672c\u5730\u5b89\u5168\u5b58\u50a8","local.keystore.replace.tips":"\u60a8\u5df2\u7ecf\u6709\u4e00\u4e2a\u5bc6\u94a5\u5e93\u6587\u4ef6\uff0c\u8bf7\u786e\u4fdd\u5df2\u5907\u4efd\uff0c\u7136\u540e\u518d\u66ff\u6362","staking.title":"Staking Communication","staking.goback":"Please go back to staking page manually and to play around","staking.confirm":"\u5168\u90e8\u64a4\u9500","staking.cancel":"\u64a4\u9500","staking.notification.delegator.address":"Delegator address:","staking.notification.validator":"Validator:","staking.notification.amount":"\u6570\u91cf:","staking.notification.network.fee":"Network fee:","staking.notification.srcValidator.address":"Source Valiator:","staking.notification.dstalidator.address":"Destination Valiator:","staking.notification.total":"\u603b\u989d\uff1a"}'
      );
    },
    512: function (e) {
      e.exports = JSON.parse(
        '{"account.footer.copyright":"\xa9 2018 - 2019 Binance.org. Seluruh hak cipta dilindungi.","account.footer.copyright.trubi":"\xa9 2018 - 2019 Trubi. Seluruh hak cipta dilindungi.","account.footer.exchange":"Bursa","account.footer.home":"Beranda","balances.filteredByAsset":"Difilter menurut aset","balances.hideZeroBalance":"Sembunyikan Saldo Nol","balances.myBalances":"Saldo Saya","blocked.country.list":"Amerika Serikat, Cina, Albania, Bosnia dan Herzegovina, Belarus, Kongo (DRC), C\xf4te d\'Ivoire, Krimea, Kuba, Irak, Iran, Korea Utara, Liberia, Makedonia, Myanmar, Serbia, Sudan, Suriah, Zimbabwe.","common.cancel":"Batal","common.close":"Tutup","common.confirm":"Konfirmasi ","common.connect":"Hubungkan","common.continue":"Lanjutkan","common.errorOccured":"terjadi kesalahan","common.goBack":"Kembali","common.googleUnlock":"Google Drive","common.keystoreFile":"File Keystore","common.ledgerDevice":"Perangkat Ledger","common.loading":"Memuat","common.mnemonicPhrase":"Frasa Pemulihan","common.networkError":"Jaringan Error","common.or":"atau","common.password":"Kata sandi","common.placeOrder":"Pasang Order","common.pleaseCheckVisitWebsite":"Harap periksa bahwa Anda sedang mengunjungi ","common.previous":"Sebelum","common.privateKey":"Private Key","common.systemError":"Kesalahan Sistem","common.trezorDevice":"Perangkat Trezor","common.viewMyPrivateKey":"Lihat Private Key saya","common.viewOnly":"Hanya Lihat","common.walletConnect":"Dompet Seluler","common.yes":"Ya","common.warning":"Peringatan","common.next":"Selanjutnya","common.buy-crypto-on-ramp":"Buy crypto","validation.onlyAlphaNumeric":"Only use letters and numbers","validation.size":"{label} length must between {min} and {max}","create.backupKeystore.backupYour":"Cadangkan ","create.backupKeystore.cannotRecoveredIt":"Tidak dapat dipulihkan jika Anda menghilangkannya.","create.backupKeystore.createBackupFile":"Buat cadangan pada file ini!","create.backupKeystore.downloadKeystoreFile":"Unduh File Keystore (UTC/JSON)","create.backupKeystore.getMyPrivateKey":"Dapatkan Private Key saya","create.backupKeystore.keystoreFile":"File Keystore","create.backupKeystore.needFirstDownload":"Anda harus mengunduh file keystore terlebih dahulu","create.backupKeystore.notShareFile":"Jangan berbagi atau menggunakan file ini di situs web apa pun yang tidak diverifikasi. Dana Anda berpotensi dicuri.","create.backupMnemonic.note":"Cadangkan teks di bawah ini di atas kertas dan simpan di tempat yang rahasia dan aman.","create.backupMnemonic.title":"Harap cadangkan mnemonic","create.backupText":"Cadangkan teks di bawah ini di atas kertas dan simpan di tempat yang rahasia dan aman.","create.chooseKSOrMnemonic.keystoreAndPassword":"File Keystore + Kata Sandi","create.chooseKSOrMnemonic.keystoreFile":"File Keystore","create.chooseKSOrMnemonic.recommendedUSBDrive":"Disarankan untuk dicadangkan di drive USB","create.chooseKSOrMnemonic.recommendedUSBDriveOrPaper":"Disarankan untuk dicadangkan di atas kertas atau di drive USB","create.chooseKSOrMnemonic.title":"Bagaimana Anda ingin membuat dompet baru?","create.chooseKSOrMnemonic.unlockExistWallet":"Buka Dompet yang Ada","create.chooseKSOrMnemonic.useKeystoreFile":"Gunakan File Keystore (UTC / JSON) + Kata Sandi Anda untuk mengakses dompet","create.chooseKSOrMnemonic.useMnemonicPhrase":"Gunakan Frasa Mnemonik 24 kata Anda untuk mengakses dompet","create.confirmNote":"Apakah Anda yakin telah mencatat Frase Mnemonic Anda?","create.createNewWallet":"Buat Dompet Baru","create.doubleConfirmMnemonic.note":"Silakan pilih Frase Mnemonik dalam urutan yang tepat untuk memastikan bahwa salinan Anda benar.","create.doubleConfirmMnemonic.title":"Pilih Akses Sekunder","create.doubleConfirmMnemonic.tryAgain":"Urutan Frase Mnemonic salah. Silakan coba lagi.","create.downloadKeyStoreFile":"Unduh File Keystore","create.enterPassword":"Masukan kata sandi","create.google.createWallet":"Buat dompet","create.google.createdSuccessfully":"Berhasil Membuat Dompet","create.google.creationFailure":"Gagal Membuat Dompet","create.google.tryAgain":"Coba lagi","create.google.walletName":"Nama dompet","create.googledrive.rePassErr":"Kata sandi yang dimasukkan tidak cocok","create.keystoreFileAndPassword":"Buat File Keystore + Kata Sandi","create.pick.useGoogleDrive.description":"Buat dompet baru menggunakan akun Google Anda","create.pick.useGoogleDrive.title":"Menggunakan Google Drive","create.pick.useLocalKeystore.description":"Buat dompet baru yang dapat Anda simpan di perangkat Anda","create.pick.useLocalKeystore.title":"Menggunakan File Keystore","create.pleaseCheck":"Harap periksa bahwa Anda sedang mengunjungi ","create.reEnterPassword":"Masukkan Kembali Kata Sandi","create.stepTwo.desc":"Kami akan menunjukkan frasa mnemonik Anda, pastikan tidak ada orang lain yang melihat layar Anda.","create.success.desc1":"Anda siap menggunakan Dompet Binance Chain dan","create.success.desc2":"Bursa Terdesentralisasi!","create.success.title":"Anda sudah siap!","create.success.unlockWallet":"Buka dompet","create.tutorial.next":"Selanjutnya","create.tutorial.skip":"Lewati Tutorial (Tidak Disarankan)","create.tutorial.step1.desc1":"Binance berkomitmen untuk memberikan Anda pengalaman terbaik dan teraman di Binance Chain. Untuk melakukannya, kami meminta waktu Anda sebentar untuk memahami cara kerja dompet terdesentralisasi dan untuk mengambil tindakan dalam melindungi diri Anda sendiri. Anda dapat menemukan Ketentuan Layanan lengkap di sini.","create.tutorial.step1.title":"Komitmen Kami","create.tutorial.step2.desc1":"Anda bertanggung jawab penuh dalam menyimpan dana Anda. Tidak ada orang lain, bahkan Binance, yang dapat membantu Anda memulihkan dompet Anda jika hilang.","create.tutorial.step2.desc2":"Saat Anda membuat dompet di Binance, Anda diberikan 3 format berbeda, masing-masing dapat digunakan untuk mengakses dompet Anda.","create.tutorial.step2.title":"Menyimpan Dana Anda","create.tutorial.step3.desc1":"Anda dapat menganggap file keystore seperti \\"ID Pengguna\\", sementara kata sandi digunakan untuk membuka dompet Anda. Keduanya diperlukan untuk mengakses dompet, jadi, jaga agar tetap aman. Ini adalah format yang diperlukan di Binance.","create.tutorial.step3.title":"File Keystore + Kata Sandi","create.tutorial.step4.desc1":"24 kata yang merupakan \\"User ID\\" dan kata sandi. Ini adalah cara sekunder untuk mengakses dompet Anda jika Anda kehilangan file keystore atau lupa kata sandi Anda. Siapa pun yang tahu frasa mnemonik Anda dapat mengakses dompet Anda, jadi, jaga keamanannya.","create.tutorial.step4.title":"Frasa Mnemonic","create.tutorial.step5.desc1":"Ini merupakan representasi alternatif frase mnemonik.","create.tutorial.step5.desc2":"Binance mengharuskan semua pengguna untuk menggunakan file keystore + kata sandi; dan memilih antara frasa mnemonik atau private key sebagai metode sekunder.","create.tutorial.step5.title":"Private key","create.tutorial.title":"Tutorial Pembuatan Dompet","create.tutorial.understand":"Saya Mengerti","create.understandCheckbox":"Saya mengerti bahwa Binance tidak dapat memulihkan atau mengatur ulang kata sandi atau file keystore saya. Saya akan membuat cadangan file keystore/kata sandi, merahasiakannya, menyelesaikan semua langkah pembuatan dompet dan menyetujui semua ","create.understandCheckbox.terms":"ketentuan","create.unlockExistWallet":"Buka Dompet yang Ada","create.yourKeyStore":"Keystore Anda","editWallet.remove":"Hapus","editWallet.remove.desc1":"Periksa apakah dompet tidak memiliki uang","editWallet.remove.desc2":"karena tidak ada cara memulihkan dompet","editWallet.remove.removeButton":"Ya, hapus dompet ini","editWallet.remove.title":"Apakah Anda benar-benar ingin menghapus dompet ini?","editWallet.rename":"Ganti nama","editWallet.rename.duplicateName":"Nama dompet sudah ada","editWallet.rename.errMsg":"Nama tidak boleh kosong","editWallet.rename.title":"Nama dompet","editWallet.title":"Nama Dompet","editWallet.createWallet":"Buat Dompet","editWallet.unlockWallet":"Buka Dompet","exchange.BTCValue":"Nilai BTC","exchange.amount":"Jumlah","exchange.asset":"Aset","exchange.availableBalance":"Saldo Tersedia","exchange.blockHeight":"KetinggianBlock","exchange.buy":"Beli","exchange.calendar.clear":"Hapus","exchange.calendar.ok":"Ok","exchange.calendar.today":"Hari ini","exchange.chartbox.depth":"Kedalaman","exchange.coin":"Koin","exchange.date":"Tanggal","exchange.estimatedValue":"Estimasi Nilai","exchange.filled":"Terisi","exchange.from":"Dari","exchange.frozen":"Dibekukan","exchange.hideAllCanceled":"Sembunyikan semua yang dibatalkan","exchange.hideOtherPairs":"Sembunyikan Pasangan Lainnya","exchange.inOrder":"Dalam Order","exchange.index.books":"Book","exchange.index.chart":"Grafik","exchange.max":"Maks","exchange.min":"Unit perdagangan minimum:","exchange.name":"Nama","exchange.notional":"Nosional","exchange.oneDay":"1 Hari","exchange.oneMonth":"1 Bulan","exchange.oneWeek":"1 Minggu","exchange.pair":"Pasangan","exchange.placeOrder.bestAsk":"Permintaan Terbaik","exchange.placeOrder.bestBid":"Penawaran Terbaik","exchange.placeOrder.limitOrder":"Limit Order","exchange.placeOrder.noEnoughBalance":"saldo tidak mencukupi","exchange.placeOrder.orderError":"Kesalahan Order","exchange.placeOrder.orderPriceHigher":"Harga order Anda akan 2% lebih tinggi dari harga pasar terbaru. Silakan lanjutkan dengan hati-hati.","exchange.placeOrder.orderPriceLow":"Harga order Anda akan 2% lebih rendah dari harga pasar terbaru. Silakan lanjutkan dengan hati-hati.","exchange.placeOrder.pleaseInputCorrectAmount":"Please input correct amount","exchange.placeOrder.buy.correctAmountForbep8":"The amount should be > 1","exchange.placeOrder.sell.correctAmountForbep8":"The amount should be > 1 or = balances","exchange.placeOrder.pleaseInputCorrectPrice":"Please input correct price","exchange.placeOrder.roundSizeErrorMsg":"Anda hanya bisa {side} {baseAsset} dalam beberapa {lotSize}","exchange.placeOrder.successNotifyMsg":"Anda telah berhasil membuat limit order ke {side} {quantity} {quoteAsset}","exchange.placeOrder.successNotifyTitle":"Limit {side} Order Dibuat","exchange.pleaseSelectDate":"silakan pilih tanggal","exchange.pleaseUnlockWallet.btn":"Buka Dompet","exchange.pleaseUnlockWallet.createNewWallet":"Buat Dompet Baru","exchange.pleaseUnlockWallet.desc":"Ups! Buka dompet Anda terlebih dahulu","exchange.pleaseUnlockWallet.noWallet":"Tidak ada Dompet?","exchange.price":"Harga","exchange.search":"Cari","exchange.sell":"Jual","exchange.side":"Sisi","exchange.status":"Status","exchange.symbolPriceInfo.high":"High","exchange.symbolPriceInfo.lastPrice":"Harga Terakhir","exchange.symbolPriceInfo.low":"Low","exchange.symbolPriceInfo.twentyFourHChange":"Perubahan 24jam","exchange.symbolPriceInfo.twentyFourHHigh":"High 24jam","exchange.symbolPriceInfo.twentyFourHLow":"Low 24h","exchange.symbolPriceInfo.twentyFourHVolume":"Volume 24jam","exchange.symbolPriceInfo.vol":"Vol","exchange.threeMonths":"3 Bulan","exchange.time.from":"Dari","exchange.to":"Untuk","exchange.total":"Total","exchange.totalBalance":"Total Saldo","exchange.tradingHistory.time":"Waktu","exchange.tradingHistory.title":"Riwayat Perdagangan","exchange.tradingPair.change":"Perubahan","exchange.tradingPair.pair":"Pasangan","exchange.tradingPair.price":"Harga","exchange.tradingPair.search":"Cari","exchange.tradingPair.volume":"Volume","exchange.txFee":"BiayaTx","exchange.txHash":"HashTx","exchange.type":"Tipe","exchange.value":"Nilai","exchange.miniToken.warning.title":"Do your own research","exchange.miniToken.warning.content1":"MiniToken is a special token type on Binance Chain. The information and materials provided here, whether or not provided on Binance\'s website/webpages, on third party websites, in marketing materials, newsletters or any form of publication are provided for general information only. They do not constitute an offer to buy or sell any products offered or advertised. Likewise, they are not to be taken as investment, financial or trading advice. Any expression of opinion is personal to the author and there is no guarantee of completeness or accuracy.","exchange.miniToken.warning.content2":"Binance shall not be responsible for any losses arising from investment based on any information made available via any of Binance\'s social media accounts or websites. All users or new participants, regardless of experience and knowledge are strongly recommended to do their own research prior to trying out any of the products we offer. If the user is still unsure after research, he/she is encouraged to avoid the product entirely. The user acknowledges that some of the products offered by Binance could be on the riskier spectrum. For avoidance of doubt, all users are encouraged to read the Terms of Use clearly.","exchange.miniToken.warning.button1":"Saya mengerti","exchange.miniToken.warning.fully.understand":"I fully understand, do not show it anymore.","fees.fee":"Biaya","fees.height":"Ketinggian","fees.note":"Catatan","footer.terms":"Ketentuan Layanan","footer.privacy":"Privasi","googledrive.create.nameExist":"Nama suda ada","header.balances":"Saldo","header.createWallet":"Buat Dompet","header.exchange":"Bursa","header.exchange.bep2":"Tokens (BEP2)","header.exchange.bep8":"MiniTokens (BEP8)","header.exchange.menu.bep2":"Tokens (BEP2)","header.exchange.menu.bep8":"MiniTokens (BEP8)","header.explorer":"Eksplorer","header.faq":"Dokumen / FAQ","header.blog":"Blog","header.feeHistory":"Riwayat Biaya","header.forums":"Forum","header.mainnet":"Mainnet","header.openOrders":"Order Terbuka","header.orderHistory":"Riwayat Order","header.orders":"Order","header.testnet":"testnet","header.tradeHistory":"Riwayat Perdagangan","header.transactions":"Transaksi","header.unlockWallet":"Buka Dompet","header.user.changeWallet":"Ubah Dompet","header.user.closeWallet":"Tutup Dompet","header.user.coinomi":"Coinomi ","header.user.copyAddress":"salin alamat","header.user.copySuccess":"Sukses menyalin!","header.user.createNewWallet":"Buat Dompet Baru","header.user.exportKeystoreFile":"Ekspor File Keystore","header.user.goToExplorer":"kunjungi eksplorer","header.user.infinito":"Infinito ","header.user.ledger":"Ledger ","header.user.trezor":"Perangkat Trezor","header.user.wallet":"Dompet","header.user.walletConnect":"WalletConnect ","header.youWantCloseWallet":"Anda yakin ingin menutup dompet?","home.aboutPage.desc1.line1":"Binance Chain adalah blockchain yang awalnya dikembangkan oleh Binance.","home.aboutPage.desc1.line2":"Modern, aman dan memiliki penyelesaian transaksi hampir instan (cepat).","home.aboutPage.desc2.line1":"Binance DEX adalah mesin pencocokan order terdesentralisasi,","home.aboutPage.desc2.line2":"ditenagai oleh teknologi inti Binance Chain.","home.aboutPage.desc3.line1":"Binance DEX adalah pasar modern dan aman untuk penerbitan","home.aboutPage.desc3.line2":"dan bertukar aset digital, dan tidak ada orang lain selain Anda yang memegang kunci Anda. Perdagangan aset favorit Anda sangat aman.","home.aboutPage.title":"Tentang Binance DEX","home.binanceDex":"Binance DEX","home.processPage.aboutBalance":"Tentang Binance DEX","home.processPage.create":"Buat","home.processPage.createDesc":"Langkah pertama adalah membuat alamat Binance Chain.","home.processPage.createWallet":"Buat Dompet Baru","home.processPage.getStart":"Mulai menggunakan Binance DEX","home.processPage.go":"Ayo","home.processPage.placeOrders":"Pasang Order","home.processPage.placeOrdersDesc":"Gunakan dompet web atau API untuk mengirim dan membatalkan order.","home.processPage.transferAssets":"Transfer Aset","home.processPage.transferAssetsDesc":"Dengan alamat Binance Chain, yang dapat dibuat dengan dompet apa pun yang mendukung Binance Chain, Anda dapat mentransfer BNB atau aset lain yang disimpan di alamat tersebut.","home.processPage.unlock":"Buka","home.processPage.unlockDesc":"Empat cara untuk membuka dompet Anda","home.processPage.unlockMode1":"WalletConnect","home.processPage.unlockMode2":"Ledger","home.processPage.unlockMode3":"File Keystore + Kata Sandi","home.processPage.unlockMode4":"Mnemonic","home.processPage.unlockWallet":"Buka Dompet","home.startPage.createWallet":"Buat Dompet","home.startPage.desc1":"Bursa aset digital terdesentralisasi yang cepat dan aman","home.startPage.desc2":"Standar perdagangan mata uang kripto baru ada di sini.","home.startPage.getTestBNB":"Dapatkan BNB Tes","home.startPage.startTrading":"Mulai Berdagang","home.whyPage.community":"Ini merupakan Inisiatif Komunitas","home.whyPage.communityDesc":"Binance DEX didukung oleh tata kelola on-chain dan komponen perangkat lunak open source.","home.whyPage.decentralized":"Terdesentralisasi","home.whyPage.decentralizedDesc":"Manfaatkan perdagangan langsung dari dompet ke dompet tanpa pihak ketiga atau otoritas pusat.","home.whyPage.getStarted":"Mulai","home.whyPage.lowTradingFees":"Biaya Perdagangan Rendah","home.whyPage.lowTradingFeesDesc":"Berdagang tanpa biaya penarikan, setoran, atau pemasangan order - dan pemilik BNB mendapat manfaat lebih besar.","home.whyPage.safeAndSecure":"Aman dan Terjamin","home.whyPage.safeAndSecureDesc":"Dana Anda disimpan di alamat blockchain dengan private key, dan hanya Anda yang dapat mengendalikannya.","home.whyPage.title":"Kenapa Binance DEX","home.whyPage.userFriendly":"Ramah Pengguna","home.whyPage.userFriendlyDesc":"Buat dompet, buka dompet, dan Anda siap berdagang. Tidak perlu melakukan setoran atau penarikan.","inputPassword.passwordRule":"Kata sandi Anda harus mengandung unsur berikut","inputPassword.passwordRule1":"8 karakter atau lebih","inputPassword.passwordRule2":"Huruf besar, simbol, dan angka","inputPassword.setANewPassword":"Tetapkan Kata Sandi Baru","landing.connectWallet":"Hubungkan Dompet","landing.createWallet":"Buat Dompet","landing.desc1":"Binance DEX","landing.desc2":"Bursa aset digital terdesentralisasi yang cepat dan aman. Standar perdagangan mata uang kripto yang baru ada di sini.","landing.footer.fee":"Biaya","landing.footer.terms":"Ketentuan Layanan","landing.footer.privacy":"Privasi","landing.how.connect":"Hubungkan","landing.how.connect.desc":"Mengakses Binance DEX lebih mudah dari yang Anda pikirkan. Klik tombol hubungkan dan pilih dari opsi koneksi. Anda sudah siap.","landing.how.create":"Buat","landing.how.create.desc":"Binance DEX memberi Anda kebebasan untuk memilih dari keystores yang nyaman hingga opsi dompet hardware yang sangat aman.","landing.how.step":"langkah","landing.how.title":"Cara menggunakan","landing.how.trade":"Perdagangan","landing.how.trade.desc":"Tujuan kami adalah membuat perdagangan menjadi lancar dan tidak dapat dibedakan dari Binance.com. Untuk melakukan itu, kami telah mengoptimalkan fitur terbaik sehingga semua yang Anda sukai ada di Binance DEX juga.","landing.markets":"Pasar","landing.markets.24HChange":"Perubahan 24jam","landing.markets.24HVolume":"Volume 24jam","landing.markets.lastPrice":"Harga Terakhir","landing.markets.pair":"Pasangan","landing.markets.searchPlaceholder":"Cari nama koin","landing.menu.balances":"Saldo","landing.menu.changeWallet":"Ubah Dompet","landing.menu.closeWallet":"Tutup Dompet","landing.menu.community":"Komunitas","landing.menu.copyAddress":"salin alamat","landing.menu.docs":"Dokumen","landing.menu.exchange":"Bursa","landing.menu.explorer":"Eksplorer","landing.menu.orders":"Order","landing.menu.orders.feeHistory":"Riwayat Biaya","landing.menu.orders.openOrders":"Order Terbuka","landing.menu.orders.orderHistory":"Riwayat Order","landing.menu.orders.tradeHistory":"Riwayat Perdagangan","landing.menu.testnet":"Testnet","landing.menu.tools":"Alat","landing.menu.transaction":"Transaksi","landing.menu.wallet":"Dompet","landing.startTrading":"Mulai Berdagang","landing.trust.activeAddress":"Aktifkan Dompet","landing.trust.activeAddress.desc":"Lebih banyak orang yang mempercayai infrastruktur dan sistem perdagangan Binance DEX daripada solusi dompet lainnya.","landing.trust.pairs":"Pasangan","landing.trust.pairs.desc":"Binance DEX memberi Anda lebih banyak opsi dan fleksibilitas untuk berdagang, dan lebih banyak yang ditambahkan setiap minggu.","landing.trust.rank":"Peringkat","landing.trust.rank.desc":"Binance DEX merupakan bursa mata uang kripto terdesentralisasi #1 di Coinmarketcap berdasarkan volume.","landing.trust.title":"Mengapa orang mempercayai kami","landing.why.competitive":"Kompetitif","landing.why.competitive.desc":"Biaya hanya 0,04% ketika Anda menggunakan BNB untuk membayar biaya perdagangan. Hampir setengah dari Binance.com, bursa terkemuka di dunia dalam biaya perdagangan.","landing.why.fast":"Cepat","landing.why.fast.desc":"Dengan waktu blok 1 detik, konfirmasi perdagangan blockchain adalah masalah di masa lalu. Dapatkan semua keuntungan dari DEX tanpa kerugian.","landing.why.secure":"Aman","landing.why.secure.desc":"Binance DEX membawa keamanan ke tingkat yang lebih tinggi. Transfer dan perdagangan Peer-to-peer berarti hampir tidak ada ancaman keamanan.","landing.why.title":"Mengapa Binance DEX","lang.menu.copyAddress":" ","noContent.descPrefix":"Anda tidak memiliki ","openOrders.areYourTrue":"Anda yakin ingin","openOrders.cancel":"batal","openOrders.cancel all":"batalkan semua","openOrders.cancel buy":"batalkan pembelian","openOrders.cancel sell":"batalkan penjualan","openOrders.cancelAll":"Batalkan semua","openOrders.cancelBuy":"Batalkan Pembelian","openOrders.cancelOrder":"Batalkan Order","openOrders.cancelOrders":"Batalkan Order","openOrders.cancelPartialSuccess":"Berhasil membatalkan sebagian","openOrders.cancelSell":"Batalkan Penjualan","openOrders.cancelSuccess":"Berhasil Membatalkan","openOrders.keepOrder":"Simpan Order","openOrders.keepOrders":"Simpan Order","openOrders.noBuyOpenOrders":"tidak ada order beli terbuka","openOrders.noOpenOrders":"tidak ada order terbuka","openOrders.noSellOpenOrders":"tidak ada order jual terbuka","openOrders.title":"Order Terbuka","orderForm.amount":"Jumlah","orderForm.avb":"Ada","orderForm.buy":"Beli","orderForm.equivalent":"Ekuivalen","orderForm.price":"Harga","orderForm.sell":"Jual","orderForm.total":"Total","orderHistory.openHistory":"riwayat order","orderHistory.title":"Riwayat Order","orderHistory.tradeId":"ID Perdagangan","orderHistory.tradingPrice":"Harga Perdagangan","orderHistory.tradingTotal":"Total Perdagangan","privateKeyModal.backupText":"Cadangkan teks di bawah ini di atas kertas dan simpan di tempat yang rahasia dan aman.","privateKeyModal.title":"Private Key Anda","testnet.binanceChainExplorerGuide":"Panduan Explorer Binance Chain","testnet.fastAndSecureDesc":"Bursa aset digital terdesentralisasi yang cepat dan aman","testnet.fundingYourTestnetAccount":"Mendanai Akun Testnet Anda","testnet.howToAccessYourWallet":"Bagaimana Mengakses Dompet Anda","testnet.howToCreateAWallet":"Bagaimana Membuat Dompet","testnet.interfaceGuide":"Panduan Antarmuka","testnet.thingsToAvoid":"Hal-hal yang Harus Dihindari","testnet.title":"Bursa Terdesentralisasi Binance (TESTNET)","token.issue.bep2Title":"BEP-2 Token","token.issue.bep2Desc":"BEP-2 is a technical standard for the issuance and implementation of tokens on the Binance Chain.","token.issue.bep8Title":"BEP-8 Token (Mini-BEP2)","token.issue.bep8Desc":"BEP-8 is a technical standard for the issuance and implementation of tokens on the Binance Chain.","token.issue.title":"Token Issuance","token.issue.confirmationModal.title":"Check Token Contract","token.issue.confirmationModal.confirm":"Konfirmasi","token.issue.tokenNameLabel":"Nama Token","token.issue.tokenNameDesc":"Token names must have between 3 and 32 characters.","token.issue.symbolLabel":"Simbol","token.issue.maxSupplyLabel":"Pasokan Maks","token.issue.symbolDescLength":"Symbols must have between 2 and 5 characters.","token.issue.totalSuppyHeader":"Select Token Max Supply","token.issue.totalSuppyDesc":"Max supply is the maximum number of tokens that can be created","token.issue.supplyLabel":"Supply","token.issue.supplyDesc":"The number of tokens you need to issue","token.issue.prev":"List Token Saya","token.issue.updateTokenInfoHeader":"Set the URL to update token information(Optional)","token.issue.updateTokenInfoHeaderTips":"The URL will return JSON-formatted information that will be an introduction to your MiniToken","token.issue.fillInRequestedUrlLabel":"Fill in the requested URL","token.issue.issuanceFee":"issuance fee","token.list.title":"Token Saya","token.issueModal.mintable":"Dapat Dicetak","token.issueModal.nonMintable":"Non-mintable","token.issueModal.name":"Nama Token","token.issueModal.nameErrMsg":"nama token terbatas hingga 32 karakter","token.issueModal.symbol":"Simbol","token.issueModal.symbolErrMsg":"simbol harus alfanumerik dan panjang dibatasi hingga 3~8","token.issueModal.title":"Terbitkan Token","token.issueModal.totalSupply":"Total Pasokan","token.issueModal.totalSupplyErrMsg":"jumlah pasokan tidak valid","token.listModal.address":"Alamat","token.listModal.confirm":"Konfirmasi","token.listModal.initPrice":"Harga Init","token.listModal.proposalId":"IdProposal","token.listModal.quoteAsset":"Aset Penawaran","token.listModal.title":"List Token","token.listModal.tokenName":"Nama Token","token.main.burn":"Bakar","token.main.freeze":"Bekukan","token.main.issueToken":"Terbitkan Token","token.main.list":"List","token.main.listSuccessmsg":"Listing berhasil","token.main.mint":"Cetak","token.main.proposal":"Proposal","token.main.submitListFirst":"Silakan kirim proposal listing terlebih dahulu","token.main.submitSuccessmsg":"pengiriman proposal listing berhasil","token.main.title":"Listing Token Saya","token.main.unfreeze":"Cairkan","token.proposalModal.address":"Alamat","token.proposalModal.baseAsset":"Aset Dasar","token.proposalModal.desc":"Deskripsi","token.proposalModal.expireTime":"Waktu Kedaluwarsa","token.proposalModal.hours":"Jam","token.proposalModal.initDeposit":"Setoran Awal","token.proposalModal.initPrice":"Harga Awal","token.proposalModal.initPriceErr":"Harga awal tidak boleh kosong","token.proposalModal.initPriceErr2":"harga awal harus lebih besar dari 0","token.proposalModal.quoteAsset":"Aset Penawaran","token.proposalModal.title":"Proposal Listing","token.proposalModal.titleErr":"Judul proposal tidak boleh kosong","token.proposalModal.titleErr2":"Judul proposal lebih panjang dari maks 128","token.proposalModal.votingPeriod":"Periode Voting","token.table.col.mintable":"Dapat Dicetak","token.table.col.name":"Nama","token.table.col.symbol":"Simbol","token.table.col.tokenType":"Tipe","token.table.col.totalSupply":"Total Pasokan","token.tokenModal.address":"Alamat","token.tokenModal.amount":"Jumlah","token.tokenModal.available":"Tersedia","token.tokenModal.burnTitle":"Bakar Token","token.tokenModal.confirm":"Konfirmasi","token.tokenModal.desc":" ","token.tokenModal.freezeTitle":"Bekukan Token","token.tokenModal.mintTitle":"Cetak Token","token.tokenModal.name":"Nama","token.tokenModal.unfreezeTitle":"Cairkan Token","token.list.tradepair.exist":"Trade pair existed","token.warning":"Kami tidak mendukung dompet yang kompatibel dengan walletconnect saat ini dan demi alasan keamanan, Ledger adalah pilihan terbaik untuk Menerbitkan/Melist/Mencetak/Membakar Token","tradeHistory.tradeHistory":"riwayat perdagangan","transaction.here":"di sini","transaction.notes":"Tidak setiap transaksi termasuk di bawah ini. Untuk riwayat lengkap, silahkan lihat","txHistory.here":"di sini","txHistory.notEveryTransactionIsIncludedBelow":"Tidak setiap transaksi termasuk di bawah ini. Untuk riwayat lengkap, silahkan lihat di sini.","txHistory.title":"Riwayat Transaksi","unlock.connectAddress.enterYourAddress":"Masukkan Alamat Anda","unlock.connectAddress.invalidAddress":"Alamat tidak valid","unlock.connectAddress.viewOnlyMode":"Masukkan alamat untuk mode lihat saja","unlock.createNewWallet":"Buat Dompet Baru","unlock.google.chooseWallet":"Pilih dari dompet Anda yang tersedia:","unlock.google.logIn":"Masuk","unlock.google.notLoggedIn":"Anda belum masuk ke Akun Google Anda","unlock.google.signedInAs":"Anda masuk sebagai","unlock.googledrive.editWallet":"Edit Detail Dompet","unlock.googledrive.wallets":"Pilih dari dompet Anda berikut untuk melanjutkan:","unlock.index.selectUnlockType":"Pilih cara Anda ingin membuka","unlock.index.title":"Buka Dompet Anda","unlock.keystore.enterYourWalletPass":"Masukkan kata sandi dompet Anda","unlock.keystore.paste":"Atau tempel isi file keystore Anda","unlock.keystore.select":"Hubungkan file dompet terenkripsi dan masukkan kata sandi Anda","unlock.keystore.upload":"Unggah file keystore","unlock.ledger.appInstallation":"Instal Aplikasi","unlock.ledger.binanceChainReady":"Binance Chain Siap","unlock.ledger.connectToLedger":"Hubungkan ke Ledger","unlock.ledger.enterPINCode":"Masukkan Kode PIN","unlock.ledger.getTheApp":"Dapatkan aplikasi","unlock.ledger.havingConnectionIssues":"Menghadapi Masalah Koneksi?","unlock.ledger.mustBeOnScreen":"harus di layar","unlock.ledger.openBinanceChain":"Buka Binance Chain","unlock.ledger.text":"Hubungkan hardware wallet Anda di sini dengan mengikuti instruksi di layar","unlock.ledger.title":"Buka dengan Perangkat Ledger","unlock.ledger.usageInstructions":"Petunjuk Penggunaan","unlock.mnemonic.pleaseEnterYourPhrase":"Silakan masukkan frasa 24 kata Anda","unlock.mnemonic.pleaseSeparateEachWordSpace":"Pisahkan setiap kata dengan spasi.","unlock.mnemonic.warning.desc1":"Opsi ini mengembalikan file keystore atau kata sandi yang hilang,","unlock.mnemonic.warning.desc2":"atau mengimpor seed dari aplikasi dompet lain.","unlock.mnemonic.warning.desc3":"Peringatan! Memasukkan frase awal atau private key di situs web mana pun sangat berbahaya. Jika Anda memasang ekstensi berbahaya di browser atau secara tidak sengaja mengunjungi situs web phishing, aset Anda bisa dicuri.","unlock.privateKey.enterYourPrivateKey":"Masukkan private key Anda (format hex)","unlock.privateKey.invalid":"Private Key yang Anda masukkan tidak dalam format yang benar dan tidak valid. Silakan coba lagi.","unlock.privateKey.passwordInvalid":"Kata sandi tidak valid. Silakan coba lagi.","unlock.privateKey.warning":"Untuk memulihkan keystore atau kata sandi yang hilang","unlock.privateKey.warningQuestion":"Memasukkan private key Anda di situs web mana pun sangat berbahaya. Jika Anda memasang ekstensi berbahaya di browser atau secara tidak sengaja mengunjungi situs web phishing, aset Anda bisa dicuri.","unlock.recover.content":"Pulihkan akses dompet menggunakan frasa pemulihan yang diketahui selama pembuatan dompet","unlock.recover.download.button":"Unduh","unlock.recover.downloadTitle":"Unduh File Keystore Anda","unlock.recover.password.placeholder":"Masukkan kata sandi yang kuat","unlock.recover.submit":"Kirim","unlock.recover.title":"Pulihkan File Keystore","unlock.recover.understand.continue":"Pulihkan File Keystore","unlock.recover.word.placeholder":"Cari","unlock.recover.wordlist.reset":"Atur Ulang","unlock.recover.wordlistTitle":"Silakan pilih Frasa Mnemonik Anda dari daftar kiri","unlock.support.wallets":" ","unlock.temporarySessionPassword":"Kata sandi sesi sementara","unlock.thisIsNotAValidWalletFile":"Ini bukan file dompet yang valid","unlock.trezor.connectToTrezor":"Hubungkan ke Trezor","unlock.trezor.firmwareNotice":"Catatan: Pastikan Anda telah memperbarui firmware Trezor terbaru untuk menggunakan perangkat Anda dengan Binance Chain.","unlock.trezor.notOnTestNet":"Catatan: Perangkat Trezor membutuhkan Chrome atau Firefox untuk saat ini ","unlock.trezor.title":"Buka dengan Perangkat Trezor","unlock.unlockWalletNow":"Buka Dompet Sekarang","unlock.walletConnect.notes":"Catatan: Trust Wallet dan CoolWallet tidak mendukung Binance Chain Testnet.","unlock.walletConnect.recommendedWallet":"Aplikasi yang didukung termasuk","unlock.walletConnet.getTrustWallet":"Dapatkan Trust Wallet","unlock.walletConnet.qrCodeDesc1":"Dapatkan Kode QR WalletConnect","unlock.walletConnet.qrCodeDesc2":"Belum punya aplikasi yang mendukung WalletConnect?","unlock.walletConnet.showWalletQrCode":"Hubungkan dompet seluler Anda di sini menggunakan kode QR pada layar ini","unlock.walletConnet.title":"Direkomendasikan","walletConnect.clickHereToUnlock":"Klik di sini untuk membuka dompet lain","walletConnect.error":"Kesalahan WalletConnect","walletConnect.errorOccur":"Terjadi kesalahan WalletConnect","walletConnect.pleaseEnsureOpenWorking":"Pastikan aplikasi terbuka dan berfungsi.","walletConnect.pleaseUseAWalletConnect":"Silakan gunakan aplikasi yang mendukung WalletConnect untuk memindai kode QR di atas","walletConnect.qrCode":"Kode QR WalletConnect","walletConnect.readyToConfirm":"Silakan Konfirmasi","walletConnect.readyToConfirmBody":"Konfirmasi transaksi di Aplikasi dompet.","walletconnect.notifycation.connectAgain":"Hubungkan lagi","walletconnect.notifycation.disconnectMessage":" Terputus dari Dompet Seluler...","walletconnect.notifycation.hide":"Sembunyikan","local.secure.storage":"Penyimpanan Lokal Aman","local.keystore.replace.tips":"Anda sudah memiliki file keystore, pastikan Anda memiliki cadangannya sebelum mengganti","staking.title":"Staking Communication","staking.goback":"Please go back to staking page manually and to play around","staking.confirm":"Konfirmasi","staking.cancel":"Batal","staking.notification.delegator.address":"Delegator address:","staking.notification.validator":"Validator:","staking.notification.amount":"Jumlah:","staking.notification.network.fee":"Network fee:","staking.notification.srcValidator.address":"Source Valiator:","staking.notification.dstalidator.address":"Destination Valiator:","staking.notification.total":"Total:"}'
      );
    },
    513: function (e) {
      e.exports = JSON.parse(
        '{"account.footer.copyright":"\xa9 2018-2019 Binance.org \ubb34\ub2e8 \uc804\uc7ac\uc640 \ubcf5\uc81c\ub97c \uae08\ud568.","account.footer.copyright.trubi":"\xa9 2018-2019 Trubi. \ubb34\ub2e8 \uc804\uc7ac\uc640 \ubcf5\uc81c\ub97c \uae08\ud568.","account.footer.exchange":"\uac70\ub798\uc18c","account.footer.home":"\ud648","balances.filteredByAsset":"\uc790\uc0b0\uc73c\ub85c \ubd84\ub958","balances.hideZeroBalance":"\uc5c6\ub294 \uc794\uace0 \uc228\uae30\uae30","balances.myBalances":"\ub0b4 \uc794\uace0","blocked.country.list":"\ubbf8\uad6d, \uc54c\ubc14\ub2c8\uc544, \ubcf4\uc2a4\ub2c8\uc544 \ud5e4\ub974\uccb4\uace0\ube44\ub098, \ubca8\ub85c\ub8e8\uc2dc, \ucf69\uace0 (DRC), \ucf54\ud2b8\ub514\ubd80\uc544\ub974, \ud06c\ub9bc, \ucfe0\ubc14, \uc774\ub77c\ud06c, \uc774\ub780, \ubd81\ud55c, \ub77c\uc774\ubca0\ub9ac\uc544, \ub9c8\ucf00\ub3c4\ub2c8\uc544, \ubbf8\uc580\ub9c8, \uc138\ub974\ube44\uc544, \uc218\ub2e8, \uc2dc\ub9ac\uc544, \uc9d0\ubc14\ube0c\uc6e8.","common.cancel":"\ucde8\uc18c","common.close":"\uc885\ub8cc","common.confirm":"\ud655\uc778 ","common.connect":"\uc5f0\uacb0","common.continue":"\uacc4\uc18d","common.errorOccured":"\uc624\ub958 \ubc1c\uc0dd","common.goBack":"\ub4a4\ub85c\uac00\uae30","common.googleUnlock":"\uad6c\uae00 \ub4dc\ub77c\uc774\ube0c","common.keystoreFile":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c","common.ledgerDevice":"\ub81b\uc800 \ub514\ubc14\uc774\uc2a4","common.loading":"\ub85c\ub529\uc911","common.mnemonicPhrase":"\ubcf5\uad6c \ubb38\uad6c","common.networkError":"\ub124\ud2b8\uc6cc\ud06c \uc624\ub958","common.or":"\ub610\ub294","common.password":"\ube44\ubc00\ubc88\ud638","common.placeOrder":"\uc8fc\ubb38\ud558\uae30","common.pleaseCheckVisitWebsite":"\uc544\ub798 \uc8fc\uc18c\uc5d0 \ubc29\ubb38\ud558\uc2e0\uac8c \ub9de\ub294\uc9c0 \ud655\uc778\ud558\uc2ed\uc2dc\uc624 ","common.previous":"\uc774\uc804","common.privateKey":"\ud504\ub77c\uc774\ube57 \ud0a4","common.systemError":"\uc2dc\uc2a4\ud15c \uc624\ub958","common.trezorDevice":"\ud2b8\ub808\uc800 \ub514\ubc14\uc774\uc2a4","common.viewMyPrivateKey":"\ub0b4 \ud504\ub77c\uc774\ube57 \ud0a4 \ubcf4\uae30","common.viewOnly":"\ubcf4\uae30 \uc804\uc6a9","common.walletConnect":"\ubaa8\ubc14\uc77c \uc9c0\uac11","common.yes":"\uc608","common.warning":"Warning","common.next":"\ub2e4\uc74c","common.buy-crypto-on-ramp":"\uc554\ud638\ud654\ud3d0 \uad6c\ub9e4","validation.onlyAlphaNumeric":"\ubb38\uc790\uc640 \uc22b\uc790\ub9cc \uc0ac\uc6a9","validation.size":"{label} \uae38\uc774\ub294 {min}\uc5d0\uc11c {max} \uc0ac\uc774\uc5ec\uc57c \ud569\ub2c8\ub2e4","create.backupKeystore.backupYour":"\ubc31\uc5c5\ud558\uae30 ","create.backupKeystore.cannotRecoveredIt":"\uc783\uc5b4\ubc84\ub9ac\uba74 \ubcf5\uad6c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.","create.backupKeystore.createBackupFile":"\uc774 \ud30c\uc77c\uc758 \ubc31\uc5c5\uc744 \ub9cc\ub4dc\uc2ed\uc2dc\uc624!","create.backupKeystore.downloadKeystoreFile":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc (UTC/JSON)","create.backupKeystore.getMyPrivateKey":"\ub0b4 \ud504\ub77c\uc774\ube57 \ud0a4 \ubc1b\uae30","create.backupKeystore.keystoreFile":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c","create.backupKeystore.needFirstDownload":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c\uc744 \uba3c\uc800 \ub2e4\uc6b4\ub85c\ub4dc\ud574\uc57c \ud569\ub2c8\ub2e4","create.backupKeystore.notShareFile":"\ud655\uc778\ub418\uc9c0 \uc54a\uc740 \uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c \uc774 \ud30c\uc77c\uc744 \uacf5\uc720\ud558\uac70\ub098 \uc0ac\uc6a9\ud558\uc9c0 \ub9c8\uc2ed\uc2dc\uc624. \uc790\uae08\uc744 \ub3c4\ub09c\ub2f9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","create.backupMnemonic.note":"\uc544\ub798\uc758 \ud14d\uc2a4\ud2b8\ub97c \uc885\uc774\uc5d0 \ubc31\uc5c5\ud558\uace0 \uc548\uc804\ud55c \uacf3\uc5d0 \ubcf4\uad00\ud558\uc2ed\uc2dc\uc624.","create.backupMnemonic.title":"\ub2c8\ubaa8\ub2c9\uc744 \ubc31\uc5c5\ud558\uc2ed\uc2dc\uc624","create.backupText":"\uc544\ub798\uc758 \ud14d\uc2a4\ud2b8\ub97c \uc885\uc774\uc5d0 \ubc31\uc5c5\ud558\uace0 \uc548\uc804\ud55c \uacf3\uc5d0 \ubcf4\uad00\ud558\uc2ed\uc2dc\uc624.","create.chooseKSOrMnemonic.keystoreAndPassword":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c + \ube44\ubc00\ubc88\ud638","create.chooseKSOrMnemonic.keystoreFile":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c","create.chooseKSOrMnemonic.recommendedUSBDrive":"USB \ub4dc\ub77c\uc774\ube0c\uc5d0 \ubc31\uc5c5\ud560 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4","create.chooseKSOrMnemonic.recommendedUSBDriveOrPaper":"\uc885\uc774 \ub610\ub294 USB \ub4dc\ub77c\uc774\ube0c\uc5d0 \ubc31\uc5c5\ud560 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4","create.chooseKSOrMnemonic.title":"\uc0c8\ub85c\uc6b4 \uc9c0\uac11\uc744 \uc5b4\ub5bb\uac8c \ub9cc\ub4dc\uc2dc\uaca0\uc2b5\ub2c8\uae4c?","create.chooseKSOrMnemonic.unlockExistWallet":"\uae30\uc874 \uc9c0\uac11 \uc7a0\uae08 \ud574\uc81c","create.chooseKSOrMnemonic.useKeystoreFile":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c (UTC / JSON) + \ube44\ubc00\ubc88\ud638\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc9c0\uac11\uc5d0 \uc811\uadfc","create.chooseKSOrMnemonic.useMnemonicPhrase":"24 \ub2e8\uc5b4 \ub2c8\ubaa8\ub2c9 \ubb38\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc9c0\uac11\uc5d0 \uc811\uadfc","create.confirmNote":"\ub2c8\ubaa8\ub2c9 \ubb38\uad6c\ub97c \uc801\uc5b4\ub193\uc73c\uc168\uc2b5\ub2c8\uae4c?","create.createNewWallet":"\uc0c8\ub85c\uc6b4 \uc9c0\uac11 \uc0dd\uc131","create.doubleConfirmMnemonic.note":"\uc801\uc5b4\ub193\uc740 \ubb38\uad6c\uac00 \uc62c\ubc14\ub978\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574 \ub2c8\ubaa8\ub2c9 \ubb38\uad6c\ub97c \uc62c\ubc14\ub978 \uc21c\uc11c\ub85c \uc120\ud0dd\ud558\uc2ed\uc2dc\uc624.","create.doubleConfirmMnemonic.title":"\ubcf4\uc870 \uc811\uadfc \ubc29\ubc95 \uc120\ud0dd","create.doubleConfirmMnemonic.tryAgain":"\ub2c8\ubaa8\ub2c9 \ubb38\uad6c \uc21c\uc11c\uac00 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2ed\uc2dc\uc624.","create.downloadKeyStoreFile":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc","create.enterPassword":"\ube44\ubc00\ubc88\ud638 \uc785\ub825","create.google.createWallet":"\uc9c0\uac11 \uc0dd\uc131","create.google.createdSuccessfully":"\uc9c0\uac11 \uc0dd\uc131 \uc131\uacf5","create.google.creationFailure":"\uc9c0\uac11 \uc0dd\uc131 \uc2e4\ud328","create.google.tryAgain":"\ub2e4\uc2dc \uc2dc\ub3c4\ud558\uae30","create.google.walletName":"\uc9c0\uac11 \uc774\ub984","create.googledrive.rePassErr":"\uc785\ub825\ud55c \ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4","create.keystoreFileAndPassword":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c + \ube44\ubc00\ubc88\ud638 \uc0dd\uc131","create.pick.useGoogleDrive.description":"\uad6c\uae00 \uacc4\uc815\uc744\uc0ac\uc6a9\ud558\uc5ec \uc0c8\ub85c\uc6b4 \uc9c0\uac11 \uc0dd\uc131","create.pick.useGoogleDrive.title":"\uad6c\uae00 \ub4dc\ub77c\uc774\ube0c \uc0ac\uc6a9","create.pick.useLocalKeystore.description":"\ub514\ubc14\uc774\uc2a4\uc5d0 \uc800\uc7a5\ud560 \uc218 \uc788\ub294 \uc0c8\ub85c\uc6b4 \uc9c0\uac11\uc744 \uc0dd\uc131","create.pick.useLocalKeystore.title":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c \uc0ac\uc6a9","create.pleaseCheck":"\uc544\ub798 \uc8fc\uc18c\uc5d0 \ubc29\ubb38\ud558\uc2e0\uac8c \ub9de\ub294\uc9c0 \ud655\uc778\ud558\uc2ed\uc2dc\uc624 ","create.reEnterPassword":"\ube44\ubc00\ubc88\ud638 \uc7ac\uc785\ub825","create.stepTwo.desc":"\ub2c8\ubaa8\ub2c9 \ubb38\uad6c\ub97c \ud45c\uc2dc\ud558\ub824\uace0 \ud569\ub2c8\ub2e4, \ub2e4\ub978 \uc0ac\ub78c\uc774 \ud654\uba74\uc744 \ubcf4\uace0 \uc788\uc9c0 \uc54a\uc740\uc9c0 \ud655\uc778\ud558\uc2ed\uc2dc\uc624.","create.success.desc1":"\ubc14\uc774\ub0b8\uc2a4 \uccb4\uc778 \uc9c0\uac11\uc744 \uc0ac\uc6a9\ud560 \uc900\ube44\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.","create.success.desc2":"\ud0c8\uc911\uc559\ud654\ub41c \uac70\ub798\uc18c!","create.success.title":"\ubaa8\ub450 \uc900\ube44\ub418\uc5c8\uc2b5\ub2c8\ub2e4!","create.success.unlockWallet":"\uc9c0\uac11 \ud574\uc81c","create.tutorial.next":"\ub2e4\uc74c","create.tutorial.skip":"\ud29c\ud1a0\ub9ac\uc5bc \uac74\ub108\ub6f0\uae30 (\uad8c\uc7a5\ud558\uc9c0 \uc54a\uc74c)","create.tutorial.step1.desc1":"\ubc14\uc774\ub0b8\uc2a4\ub294 \ubc14\uc774\ub0b8\uc2a4 \uccb4\uc778\uc5d0\uc11c \uac00\uc7a5 \uc548\uc804\ud558\uace0 \ucd5c\uc0c1\uc758 \uacbd\ud5d8\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574 \ucd5c\uc120\uc744 \ub2e4\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574 \uc6b0\ub9ac\ub294 \uadc0\ud558\uc5d0\uac8c \ud0c8\uc911\uc559\ud654\ub41c \uc9c0\uac11\uc774 \uc5b4\ub5bb\uac8c \uc791\ub3d9\ud558\ub294\uc9c0 \uc774\ud574\ud558\uace0 \uc790\uc2e0\uc744 \ubcf4\ud638\ud558\uae30 \uc704\ud55c \uc870\uce58\ub97c \ucde8\ud560 \uc218 \uc788\ub294 \uc7a0\uae50\uc758 \uc2dc\uac04\uc744 \uc694\uccad\ud569\ub2c8\ub2e4. \uc804\uccb4 \uc11c\ube44\uc2a4 \uc57d\uad00\uc740 \uc5ec\uae30\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","create.tutorial.step1.title":"\uc6b0\ub9ac\uc758 \uc57d\uc18d","create.tutorial.step2.desc1":"\uadc0\ud558\uc758 \uc790\uae08\uc744 \uad00\ub9ac\ud558\ub294 \uac83\uc5d0 \ub300\ud55c \ucc45\uc784\uc740 \uc804\uc801\uc73c\ub85c \uadc0\ud558\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4. \ubc14\uc774\ub0b8\uc2a4\uc870\ucc28\ub3c4 \uadc0\ud558\uac00 \uc9c0\uac11\uc744 \uc783\uc5b4\ubc84\ub9ac\uba74 \uc9c0\uac11\uc744 \ubcf5\uad6c\ud558\ub294\ub370 \ub3c4\uc6c0\uc744 \uc904 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.","create.tutorial.step2.desc2":"\ubc14\uc774\ub0b8\uc2a4\uc5d0\uc11c \uc9c0\uac11\uc744 \ub9cc\ub4e4\uba74 3\uac00\uc9c0 \uc11c\ub85c \ub2e4\ub978 \ud615\uc2dd\uc774 \uc81c\uacf5\ub418\uba70 \uac01 \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc9c0\uac11\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","create.tutorial.step2.title":"\uc790\uae08 \uad00\ub9ac","create.tutorial.step3.desc1":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c\uc744 \\"\uc0ac\uc6a9\uc790 ID\\"\uc640 \uac19\uc774 \uc0dd\uac01\ud558\uba74 \ub418\uba70 \ube44\ubc00\ubc88\ud638\ub85c \uc9c0\uac11\uc744 \ud574\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c0\uac11\uc5d0 \uc811\uadfc\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub458 \ub2e4 \ud544\uc694\ud558\uae30 \ub54c\ubb38\uc5d0 \uc548\uc804\ud558\uac8c \ubcf4\uad00\ud558\uc2ed\uc2dc\uc624. \uc774\ub294 \ubc14\uc774\ub0b8\uc2a4\uc5d0\uc11c \ud544\uc694\ud55c \ud615\uc2dd\uc785\ub2c8\ub2e4.","create.tutorial.step3.title":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c + \ube44\ubc00\ubc88\ud638","create.tutorial.step4.desc1":"24\uac1c\uc758 \ub2e8\uc5b4\uac00 \\"\uc0ac\uc6a9\uc790 ID\\"\uc774\uc790 \ube44\ubc00\ubc88\ud638\uc785\ub2c8\ub2e4. \ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c \ub610\ub294 \ube44\ubc00\ubc88\ud638\ub97c \uc783\uc5b4\ubc84\ub9b4 \uacbd\uc6b0 \uc9c0\uac11\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \ubcf4\uc870 \ubc29\ubc95\uc785\ub2c8\ub2e4. \ub2c8\ubaa8\ub2c9 \ubb38\uad6c\ub97c \uc544\ub294 \uc0ac\ub78c\uc740 \ub204\uad6c\ub098 \uc9c0\uac11\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c \uc548\uc804\ud558\uac8c \ubcf4\uad00\ud558\uc2ed\uc2dc\uc624.","create.tutorial.step4.title":"\ub2c8\ubaa8\ub2c9 \ubb38\uad6c","create.tutorial.step5.desc1":"\uc774\uac83\uc740 \ub2c8\ubaa8\ub2c9 \ubb38\uad6c \ub2e8\uc5b4\uc758 \ub300\uccb4 \ud45c\ud604\uc785\ub2c8\ub2e4.","create.tutorial.step5.desc2":"\ubc14\uc774\ub0b8\uc2a4\ub294 \ubaa8\ub4e0 \uc0ac\uc6a9\uc790\uac00 \ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c + \ube44\ubc00\ubc88\ud638\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud558\uba70 \ub2c8\ubaa8\ub2c9 \ubb38\uad6c \ub610\ub294 \ud504\ub77c\uc774\ube57 \ud0a4 \uc911\uc5d0\uc11c \ubcf4\uc870 \ubc29\ubc95\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4.","create.tutorial.step5.title":"\ud504\ub77c\uc774\ube57 \ud0a4","create.tutorial.title":"\uc9c0\uac11 \uc0dd\uc131 \ud29c\ud1a0\ub9ac\uc5bc","create.tutorial.understand":"\uc774\ud574\ud588\uc2b5\ub2c8\ub2e4.","create.understandCheckbox":"\ubc14\uc774\ub0b8\uc2a4\uac00 \ube44\ubc00\ubc88\ud638 \ub610\ub294 \ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c\uc744 \ubcf5\uad6c\ud558\uac70\ub098 \uc7ac\uc124\uc815\ud560 \uc218 \uc5c6\uc74c\uc744 \uc774\ud574\ud569\ub2c8\ub2e4. \ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c/\ube44\ubc00\ubc88\ud638\ub97c \uc9c1\uc811 \ubc31\uc5c5\ud558\uace0 \ube44\ubc00\uc744 \uc720\uc9c0\ud558\uace0 \ubaa8\ub4e0 \uc9c0\uac11 \uc0dd\uc131 \uacfc\uc815\uc744 \uc644\ub8cc\ud560 \uac83\uc774\uba70 \ubaa8\ub4e0 \uac83\uc5d0 \ub3d9\uc758\ud569\ub2c8\ub2e4 ","create.understandCheckbox.terms":"\uc774\uc6a9 \uc57d\uad00","create.unlockExistWallet":"\uae30\uc874 \uc9c0\uac11 \uc7a0\uae08 \ud574\uc81c","create.yourKeyStore":"\ud0a4\uc2a4\ud1a0\uc5b4","editWallet.remove":"\uc0ad\uc81c","editWallet.remove.desc1":"\uc9c0\uac11\uc5d0 \ub3c8\uc774 \uc5c6\ub294\uc9c0 \ud655\uc778\ud558\uc2ed\uc2dc\uc624","editWallet.remove.desc2":"\uc9c0\uac11\uc744 \ubcf5\uad6c\ud560 \ubc29\ubc95\uc774 \uc5c6\uc2b5\ub2c8\ub2e4","editWallet.remove.removeButton":"\uc608, \uc9c0\uac11\uc744 \uc0ad\uc81c\ud574\uc8fc\uc2ed\uc2dc\uc624","editWallet.remove.title":"\uc774 \uc9c0\uac11\uc744 \uc815\ub9d0\ub85c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?","editWallet.rename":"\uc774\ub984 \ubc14\uafb8\uae30","editWallet.rename.duplicateName":"\uc9c0\uac11 \uc774\ub984\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4","editWallet.rename.errMsg":"\uc774\ub984\uc740 \ube48\uce78\uc774 \uc544\ub2c8\uc5b4\uc57c\ud569\ub2c8\ub2e4","editWallet.rename.title":"\uc9c0\uac11 \uc774\ub984","editWallet.title":"\uc9c0\uac11 \uc774\ub984","editWallet.createWallet":"\uc9c0\uac11 \uc0dd\uc131","editWallet.unlockWallet":"\uc9c0\uac11 \ud574\uc81c","exchange.BTCValue":"BTC \uac00\uce58","exchange.amount":"\uae08\uc561","exchange.asset":"\uc790\uc0b0","exchange.availableBalance":"\uc0ac\uc6a9 \uac00\ub2a5 \uc794\uace0","exchange.blockHeight":"\ube14\ub85d\ub192\uc774","exchange.buy":"\ub9e4\uc218","exchange.calendar.clear":"\uc0ad\uc81c","exchange.calendar.ok":"\ud655\uc778","exchange.calendar.today":"\uc624\ub298","exchange.chartbox.depth":"\uae4a\uc774","exchange.coin":"\ucf54\uc778","exchange.date":"\ub0a0\uc9dc","exchange.estimatedValue":"\uc608\uc0c1 \uac00\uce58","exchange.filled":"\uccb4\uacb0","exchange.from":"~\uc5d0\uc11c","exchange.frozen":"\ub3d9\uacb0","exchange.hideAllCanceled":"\ucde8\uc18c\ub41c \ubaa8\ub4e0 \ud56d\ubaa9 \uc228\uae30\uae30","exchange.hideOtherPairs":"\ub2e4\ub978 \ud398\uc5b4 \uc228\uae30\uae30","exchange.inOrder":"\uac70\ub798\uc911","exchange.index.books":"\uc7a5\ubd80","exchange.index.chart":"\ucc28\ud2b8","exchange.max":"\ucd5c\ub300","exchange.min":"\ucd5c\uc18c \uac70\ub798 \ub2e8\uc704:","exchange.name":"\uc774\ub984","exchange.notional":"\uacc4\uc57d","exchange.oneDay":"1\uc77c","exchange.oneMonth":"1\ub2ec","exchange.oneWeek":"1\uc8fc","exchange.pair":"\ud398\uc5b4","exchange.placeOrder.bestAsk":"\ucd5c\uace0 \ub9e4\uc218\uac00","exchange.placeOrder.bestBid":"\ucd5c\uace0 \ub9e4\ub3c4\uac00","exchange.placeOrder.limitOrder":"\uc9c0\uc815\uac00 \uc8fc\ubb38","exchange.placeOrder.noEnoughBalance":"\uc794\uace0\uac00 \ubd80\uc871\ud569\ub2c8\ub2e4","exchange.placeOrder.orderError":"\uc8fc\ubb38 \uc624\ub958","exchange.placeOrder.orderPriceHigher":"\uc8fc\ubb38 \uac00\uaca9\uc774 \ub9c8\uc9c0\ub9c9 \uac00\uaca9\ubcf4\ub2e4 2% \uc774\uc0c1 \ub192\uc2b5\ub2c8\ub2e4. \uc2e0\uc911\ud558\uac8c \uc9c4\ud589\ud558\uc2ed\uc2dc\uc624.","exchange.placeOrder.orderPriceLow":"\uc8fc\ubb38 \uac00\uaca9\uc774 \ub9c8\uc9c0\ub9c9 \uac00\uaca9\ubcf4\ub2e4 2% \uc774\uc0c1 \ub0ae\uc2b5\ub2c8\ub2e4. \uc2e0\uc911\ud558\uac8c \uc9c4\ud589\ud558\uc2ed\uc2dc\uc624.","exchange.placeOrder.pleaseInputCorrectAmount":"\uc815\ud655\ud55c \uae08\uc561\uc744 \uc785\ub825\ud558\uc2ed\uc2dc\uc624","exchange.placeOrder.buy.correctAmountForbep8":"\uae08\uc561\uc740 1\ubcf4\ub2e4 \ucee4\uc57c \ud569\ub2c8\ub2e4","exchange.placeOrder.sell.correctAmountForbep8":"\uae08\uc561\uc740 1\ubcf4\ub2e4 \ud06c\uac70\ub098 \uc794\uace0\uc640 \ub3d9\uc77c\ud574\uc57c \ud569\ub2c8\ub2e4","exchange.placeOrder.pleaseInputCorrectPrice":"\uc815\ud655\ud55c \uac00\uaca9\uc744 \uc785\ub825\ud558\uc2ed\uc2dc\uc624","exchange.placeOrder.roundSizeErrorMsg":"{lotSize} \uc758 \ubc30\uc218\ub85c {side}{baseAsset} \ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4","exchange.placeOrder.successNotifyMsg":"{side}{quantity}{quoteAsset} \uc5d0 \ub300\ud55c \uc9c0\uc815\uac00 \uc8fc\ubb38\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uc0dd\uc131\ud588\uc2b5\ub2c8\ub2e4.","exchange.placeOrder.successNotifyTitle":"\uc9c0\uc815\uac00 {side} \uc8fc\ubb38 \uc0dd\uc131","exchange.pleaseSelectDate":"\ub0a0\uc9dc\ub97c \uc120\ud0dd\ud558\uc2ed\uc2dc\uc624","exchange.pleaseUnlockWallet.btn":"\uc9c0\uac11 \ud574\uc81c","exchange.pleaseUnlockWallet.createNewWallet":"\uc0c8\ub85c\uc6b4 \uc9c0\uac11 \uc0dd\uc131","exchange.pleaseUnlockWallet.desc":"\uc9c0\uac11 \uc7a0\uae08 \ud574\uc81c\ub97c \uba3c\uc800 \uc9c4\ud589\ud558\uc2ed\uc2dc\uc624.","exchange.pleaseUnlockWallet.noWallet":"\uc9c0\uac11\uc774 \uc5c6\ub098\uc694?","exchange.price":"\uac00\uaca9","exchange.search":"\uac80\uc0c9","exchange.sell":"\ub9e4\ub3c4","exchange.side":"\uc0ac\uc774\ub4dc","exchange.status":"\uc0c1\ud0dc","exchange.symbolPriceInfo.high":"\uace0\uac00","exchange.symbolPriceInfo.lastPrice":"\ub9c8\uc9c0\ub9c9 \uccb4\uacb0\uac00","exchange.symbolPriceInfo.low":"\uc800\uac00","exchange.symbolPriceInfo.twentyFourHChange":"\uc804\uc77c\ub300\ube44","exchange.symbolPriceInfo.twentyFourHHigh":"24h \uace0\uac00","exchange.symbolPriceInfo.twentyFourHLow":"24h \uc800\uac00","exchange.symbolPriceInfo.twentyFourHVolume":"24h \uac70\ub798\ub7c9","exchange.symbolPriceInfo.vol":"\uac70\ub798\ub7c9","exchange.threeMonths":"3\ub2ec","exchange.time.from":"~\uc5d0\uc11c","exchange.to":"~\uc73c\ub85c","exchange.total":"\ucd1d\uc561","exchange.totalBalance":"\ucd1d \uc794\uace0","exchange.tradingHistory.time":"\uc2dc\uac04","exchange.tradingHistory.title":"\uac70\ub798 \ub0b4\uc5ed","exchange.tradingPair.change":"\ubcc0\ub3d9","exchange.tradingPair.pair":"\ud398\uc5b4","exchange.tradingPair.price":"\uac00\uaca9","exchange.tradingPair.search":"\uac80\uc0c9","exchange.tradingPair.volume":"\uac70\ub798\ub7c9","exchange.txFee":"Tx\uc218\uc218\ub8cc","exchange.txHash":"Tx\ud574\uc2dc","exchange.type":"\uc720\ud615","exchange.value":"\uac00\uce58","exchange.miniToken.warning.title":"\uc2a4\uc2a4\ub85c \uc5f0\uad6c\ud558\uc138\uc694","exchange.miniToken.warning.content1":"\ubbf8\ub2c8\ud1a0\ud070\uc740 \ubc14\uc774\ub0b8\uc2a4 \uccb4\uc778\uc758 \ud2b9\ubcc4\ud55c \ud1a0\ud070 \uc720\ud615\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c \uc81c\uacf5\ub41c \uc815\ubcf4\uc640 \uc790\ub8cc\ub294 \ubc14\uc774\ub0b8\uc2a4 \uc6f9\uc0ac\uc774\ud2b8/\uc6f9\ud398\uc774\uc9c0, \ud0c0\uc0ac \uc6f9\uc0ac\uc774\ud2b8, \ub9c8\ucf00\ud305 \uc790\ub8cc, \ub274\uc2a4\ub808\ud130 \ub610\ub294 \ubaa8\ub4e0 \ud615\ud0dc\uc758 \ucd9c\ud310\ubb3c\uc5d0\uc11c \uc81c\uacf5\ub418\ub294\uc9c0 \uc5ec\ubd80\uc640 \uad00\uacc4 \uc5c6\uc774 \uc77c\ubc18 \uc815\ubcf4\uc6a9\uc73c\ub85c\ub9cc \uc81c\uacf5\ub429\ub2c8\ub2e4. \uc774\ub294 \uc81c\uc548\ub418\uac70\ub098 \uad11\uace0\ub41c \uc0c1\ud488\uc744 \ub9e4\uc218 \ub610\ub294 \ub9e4\ub3c4\ud558\ub3c4\ub85d \uad8c\uc720\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub9c8\ucc2c\uac00\uc9c0\ub85c \uc774\ub294 \ud22c\uc790, \uc7ac\uc815 \ub610\ub294 \uac70\ub798 \uc870\uc5b8\uc73c\ub85c \ubc1b\uc544\ub4e4\uc5ec\uc11c\ub294 \uc548\ub429\ub2c8\ub2e4. \ubaa8\ub4e0 \uc758\uacac\uc740 \uc800\uc790 \uac1c\uc778\uc758 \uc758\uacac\uc774\uba70 \uc644\uc804\uc131\uc774\ub098 \uc815\ud655\uc131\uc744 \ubcf4\uc7a5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.","exchange.miniToken.warning.content2":"\ubc14\uc774\ub0b8\uc2a4\ub294 \ubc14\uc774\ub0b8\uc2a4\uc758 \uc18c\uc15c \ubbf8\ub514\uc5b4 \uacc4\uc815 \ub610\ub294 \uc6f9\uc0ac\uc774\ud2b8\ub97c \ud1b5\ud574 \uc81c\uacf5\ub418\ub294 \uc815\ubcf4\ub97c \uae30\ubc18\uc73c\ub85c \ud55c \ud22c\uc790\ub85c \uc778\ud574 \ubc1c\uc0dd\ub418\ub294 \uc190\uc2e4\uc5d0 \ub300\ud574 \ucc45\uc784\uc744 \uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uacbd\ud5d8\uacfc \uc9c0\uc2dd\uc5d0 \uad00\uacc4 \uc5c6\uc774 \ubaa8\ub4e0 \uc0ac\uc6a9\uc790 \ub610\ub294 \uc2e0\uaddc \ucc38\uc5ec\uc790\ub294 \ub2f9\uc0ac\uac00 \uc81c\uacf5\ud558\ub294 \uc0c1\ud488\uc744 \uc0ac\uc6a9\ud574\ubcf4\uae30 \uc804\uc5d0 \uc2a4\uc2a4\ub85c \uc5f0\uad6c\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uac00 \uc5f0\uad6c\ud55c \ud6c4\uc5d0\ub3c4 \uc5ec\uc804\ud788 \ud655\uc2e4\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \uc0c1\ud488\uc744 \uc644\uc804\ud788 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc544\uc57c \ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\ub294 \ubc14\uc774\ub0b8\uc2a4\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc77c\ubd80 \uc0c1\ud488\uc740 \ub354 \uc704\ud5d8\ud560 \uc218 \uc788\uc74c\uc744 \uc778\uc815\ud574\uc57c \ud569\ub2c8\ub2e4. \uc758\uc2ec\uc758 \uc5ec\uc9c0\ub97c \uc5c6\uc560\uae30 \uc704\ud574 \ubaa8\ub4e0 \uc0ac\uc6a9\uc790\ub294 \uc774\uc6a9 \uc57d\uad00\uc744 \uba85\ud655\ud558\uac8c \uc77d\uc744 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.","exchange.miniToken.warning.button1":"\uc774\ud574\ud588\uc2b5\ub2c8\ub2e4.","exchange.miniToken.warning.fully.understand":"\uc644\uc804\ud788 \uc774\ud574\ud588\uc73c\uba70 \ub354 \uc774\uc0c1 \ubcf4\uc5ec\uc8fc\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4.","fees.fee":"\uc218\uc218\ub8cc","fees.height":"\ub2e8\uacc4","fees.note":"\ube44\uace0","footer.terms":"\uc774\uc6a9 \uc57d\uad00","footer.privacy":"Privacy","googledrive.create.nameExist":"\uc874\uc7ac\ud558\ub294 \uc774\ub984","header.balances":"\uc794\uace0","header.createWallet":"\uc0c8\ub85c\uc6b4 \uc9c0\uac11 \uc0dd\uc131","header.exchange":"\uac70\ub798\uc18c","header.exchange.bep2":"\ud1a0\ud070 (BEP2)","header.exchange.bep8":"\ubbf8\ub2c8\ud1a0\ud070 (BEP8)","header.exchange.menu.bep2":"\ud1a0\ud070 (BEP2)","header.exchange.menu.bep8":"\ubbf8\ub2c8\ud1a0\ud070 (BEP8)","header.explorer":"\ud0d0\uc0c9\uae30","header.faq":"\ubb38\uc11c / FAQ","header.blog":"\ube14\ub85c\uadf8","header.feeHistory":"\uc218\uc218\ub8cc \ub0b4\uc5ed","header.forums":"\ud3ec\ub7fc","header.mainnet":"\uba54\uc778\ub137","header.openOrders":"\ub300\uae30 \uc8fc\ubb38","header.orderHistory":"\uc8fc\ubb38 \ub0b4\uc5ed","header.orders":"\uc8fc\ubb38","header.testnet":"\ud14c\uc2a4\ud2b8\ub137","header.tradeHistory":"\uac70\ub798 \ub0b4\uc5ed","header.transactions":"\ud2b8\ub79c\uc7ad\uc158","header.unlockWallet":"\uc9c0\uac11 \ud574\uc81c","header.user.changeWallet":"\uc9c0\uac11 \ubcc0\uacbd","header.user.closeWallet":"\uc9c0\uac11 \uc885\ub8cc","header.user.coinomi":"\ucf54\uc774\ub178\ubbf8 ","header.user.copyAddress":"\uc8fc\uc18c \ubcf5\uc0ac","header.user.copySuccess":"\ubcf5\uc0ac \uc131\uacf5!","header.user.createNewWallet":"\uc0c8\ub85c\uc6b4 \uc9c0\uac11 \uc0dd\uc131","header.user.exportKeystoreFile":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c \ub0b4\ubcf4\ub0b4\uae30","header.user.goToExplorer":"\ud0d0\uc0c9\uae30\ub85c \uc774\ub3d9","header.user.infinito":"\uc778\ud53c\ub2c8\ud1a0 ","header.user.ledger":"\ub81b\uc800 ","header.user.trezor":"\ud2b8\ub808\uc800 \ub514\ubc14\uc774\uc2a4","header.user.wallet":"\uc9c0\uac11","header.user.walletConnect":"\uc6d4\ub81b\ucee4\ub125\ud2b8 ","header.youWantCloseWallet":"\uc9c0\uac11\uc744 \uc885\ub8cc\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?","home.aboutPage.desc1.line1":"\ubc14\uc774\ub0b8\uc2a4 \uccb4\uc778\uc740 \ubc14\uc774\ub0b8\uc2a4\uac00 \ucc98\uc74c \uac1c\ubc1c\ud55c \ube14\ub85d\uccb4\uc778\uc785\ub2c8\ub2e4.","home.aboutPage.desc1.line2":"\ucd5c\uc2e0\uc774\uace0 \uc548\uc804\ud558\uba70 \uc989\uac01\uc801\uc778 \ud2b8\ub79c\uc7ad\uc158 \ucd5c\uc885\uc131\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4 (\ube60\ub985\ub2c8\ub2e4).","home.aboutPage.desc2.line1":"\ubc14\uc774\ub0b8\uc2a4 DEX\ub294 \ud0c8\uc911\uc559\ud654\ub41c \uc8fc\ubb38 \ub9e4\uce6d \uc5d4\uc9c4\uc774\uace0,","home.aboutPage.desc2.line2":"\ud575\uc2ec \ubc14\uc774\ub0b8\uc2a4 \uccb4\uc778 \uae30\uc220\ub85c \uc791\ub3d9\ud569\ub2c8\ub2e4.","home.aboutPage.desc3.line1":"\ubc14\uc774\ub0b8\uc2a4 DEX\ub294 \ubc1c\ud589\uc744 \uc704\ud55c \uc548\uc804\ud55c \ucd5c\uc2e0\uc2dd \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\uc785\ub2c8\ub2e4","home.aboutPage.desc3.line2":"\ub514\uc9c0\ud138 \uc790\uc0b0\uc744 \uad50\ud658\ud560 \uc218 \uc788\uc73c\uba70 \ubcf8\uc778\uc774 \uc544\ub2cc \ub2e4\ub978 \uc0ac\ub78c\uc774 \ud0a4\ub97c \uac00\uc9c0\uace0 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc88b\uc544\ud558\ub294 \uc790\uc0b0\uc744 \ub9e4\uc6b0 \uc548\uc804\ud558\uac8c \uac70\ub798\ud558\uc2ed\uc2dc\uc624.","home.aboutPage.title":"\ubc14\uc774\ub0b8\uc2a4 DEX \uc815\ubcf4","home.binanceDex":"\ubc14\uc774\ub0b8\uc2a4 DEX","home.processPage.aboutBalance":"\ubc14\uc774\ub0b8\uc2a4 DEX \uc815\ubcf4","home.processPage.create":"\uc0dd\uc131","home.processPage.createDesc":"\uccab \ub2e8\uacc4\ub294 \ubc14\uc774\ub0b8\uc2a4 \uccb4\uc778 \uc8fc\uc18c\ub97c \uc0dd\uc131\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.","home.processPage.createWallet":"\uc0c8\ub85c\uc6b4 \uc9c0\uac11 \uc0dd\uc131","home.processPage.getStart":"\ubc14\uc774\ub0b8\uc2a4 DEX \uc2dc\uc791\ud558\uae30","home.processPage.go":"\uc2dc\uc791","home.processPage.placeOrders":"\uc8fc\ubb38 \uc81c\ucd9c","home.processPage.placeOrdersDesc":"\uc6f9 \uc9c0\uac11 \ub610\ub294 API\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc8fc\ubb38\uc744 \uc804\uc1a1\ud558\uace0 \ucde8\uc18c\ud558\uc2ed\uc2dc\uc624.","home.processPage.transferAssets":"\uc790\uc0b0 \uc804\uc1a1","home.processPage.transferAssetsDesc":"\ubc14\uc774\ub0b8\uc2a4 \uccb4\uc778\uc744 \uc9c0\uc6d0\ud558\ub294 \uc9c0\uac11\uc73c\ub85c \uc0dd\uc131\ud560 \uc218 \uc788\ub294 \ubc14\uc774\ub0b8\uc2a4 \uccb4\uc778 \uc8fc\uc18c\ub97c \uc0ac\uc6a9\ud558\uba74 \ud574\ub2f9 \uc8fc\uc18c\uc5d0 \ubcf4\uad00\uc911\uc778 BNB \ub610\ub294 \ub2e4\ub978 \uc790\uc0b0\uc744 \uc804\uc1a1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","home.processPage.unlock":"\uc7a0\uae08 \ud574\uc81c","home.processPage.unlockDesc":"\uc9c0\uac11\uc744 \uc7a0\uae08 \ud574\uc81c\ud560\uc218 \uc788\ub294 4\uac00\uc9c0 \ubc29\ubc95","home.processPage.unlockMode1":"\uc6d4\ub81b\ucee4\ub125\ud2b8","home.processPage.unlockMode2":"\ub81b\uc800","home.processPage.unlockMode3":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c + \ube44\ubc00\ubc88\ud638","home.processPage.unlockMode4":"\ub2c8\ubaa8\ub2c9","home.processPage.unlockWallet":"\uc9c0\uac11 \ud574\uc81c","home.startPage.createWallet":"\uc9c0\uac11 \uc0dd\uc131","home.startPage.desc1":"\ube60\ub974\uace0 \uc548\uc804\ud55c \ud0c8\uc911\uc559 \ub514\uc9c0\ud138 \uc790\uc0b0 \uac70\ub798\uc18c","home.startPage.desc2":"\uc0c8\ub85c\uc6b4 \uc554\ud638\ud654\ud3d0 \uac70\ub798 \ud45c\uc900\uc774 \uc5ec\uae30 \uc788\uc2b5\ub2c8\ub2e4.","home.startPage.getTestBNB":"\ud14c\uc2a4\ud2b8 BNB \ubc1b\uae30","home.startPage.startTrading":"\uac70\ub798 \uc2dc\uc791\ud558\uae30","home.whyPage.community":"\uc774\uac83\uc740 \ucee4\ubba4\ub2c8\ud2f0 \uc774\ub2c8\uc154\ud2f0\ube0c\uc785\ub2c8\ub2e4","home.whyPage.communityDesc":"\ubc14\uc774\ub0b8\uc2a4 DEX\ub294 \uc628\uccb4\uc778 \uac70\ubc84\ub10c\uc2a4 \ubc0f \uc624\ud508 \uc18c\uc2a4 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uad6c\uc131 \uc694\uc18c\ub85c \uc791\ub3d9\ud569\ub2c8\ub2e4.","home.whyPage.decentralized":"\ud0c8\uc911\uc559","home.whyPage.decentralizedDesc":"\uc81c3\uc790 \ub610\ub294 \uc911\uc559\ud654\ub41c \uae30\uad00 \uc5c6\uc774 \uc9c1\uc811 \uc9c0\uac11\ub300 \uc9c0\uac11 \uac70\ub798\ub97c \uacbd\ud5d8\ud558\uc2ed\uc2dc\uc624.","home.whyPage.getStarted":"\uc2dc\uc791\ud558\uae30","home.whyPage.lowTradingFees":"\ub0ae\uc740 \uac70\ub798 \uc218\uc218\ub8cc","home.whyPage.lowTradingFeesDesc":"\ucd9c\uae08, \uc785\uae08, \uc8fc\ubb38 \uc785\ub825 \uc218\uc218\ub8cc \uc5c6\uc774 \uac70\ub798\ud558\uc2ed\uc2dc\uc624 \u2014 BNB \ud640\ub354\ub294 \ub354 \ub9ce\uc740 \ud61c\ud0dd\uc744 \ub204\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","home.whyPage.safeAndSecure":"\uc548\uc804\ud558\uace0 \ud655\uc2e4\ud55c","home.whyPage.safeAndSecureDesc":"\uadc0\ud558\uc758 \uc790\uae08\uc740 \uadc0\ud558\ub9cc \uc81c\uc5b4\ud560 \uc218 \uc788\ub294 \ud504\ub77c\uc774\ube57 \ud0a4\ub97c \uc0ac\uc6a9\ud558\ub294 \ube14\ub85d\uccb4\uc778 \uc8fc\uc18c\uc5d0 \ubcf4\uad00\ub429\ub2c8\ub2e4.","home.whyPage.title":"\uc65c \ubc14\uc774\ub0b8\uc2a4 DEX\uc785\ub2c8\uae4c","home.whyPage.userFriendly":"\uc0ac\uc6a9\uc790 \uce5c\ud654\uc801\uc778","home.whyPage.userFriendlyDesc":"\uc9c0\uac11\uc744 \uc0dd\uc131\ud558\uace0, \uc7a0\uae08 \ud574\uc81c\ud558\uba74 \uac70\ub798 \uc900\ube44\uac00 \uc644\ub8cc\ub429\ub2c8\ub2e4. \uc785\uae08 \ub610\ub294 \ucd9c\uae08\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.","inputPassword.passwordRule":"\ube44\ubc00\ubc88\ud638\ub294 \ub2e4\uc74c \uc18d\uc131\uc744 \ud3ec\ud568\ud574\uc57c \ud569\ub2c8\ub2e4","inputPassword.passwordRule1":"8\uc790 \uc774\uc0c1","inputPassword.passwordRule2":"\ub300\ubb38\uc790, \uae30\ud638 \ubc0f \uc22b\uc790","inputPassword.setANewPassword":"\uc0c8\ub85c\uc6b4 \ube44\ubc00\ubc88\ud638 \uc124\uc815","landing.connectWallet":"\uc9c0\uac11 \uc5f0\uacb0","landing.createWallet":"\uc9c0\uac11 \uc0dd\uc131","landing.desc1":"\ubc14\uc774\ub0b8\uc2a4 DEX","landing.desc2":"\ube60\ub974\uace0 \uc548\uc804\ud55c \ud0c8\uc911\uc559 \ub514\uc9c0\ud138 \uc790\uc0b0 \uac70\ub798\uc18c. \uc0c8\ub85c\uc6b4 \uc554\ud638\ud654\ud3d0 \uac70\ub798 \ud45c\uc900\uc774 \uc5ec\uae30 \uc788\uc2b5\ub2c8\ub2e4.","landing.footer.fee":"\uc218\uc218\ub8cc","landing.footer.terms":"\uc774\uc6a9 \uc57d\uad00","landing.footer.privacy":"Privacy","landing.how.connect":"\uc5f0\uacb0","landing.how.connect.desc":"\ubc14\uc774\ub0b8\uc2a4 DEX\uc5d0 \uc811\uadfc\ud558\ub294 \uac83\uc740 \uc0dd\uac01\ubcf4\ub2e4 \uc27d\uc2b5\ub2c8\ub2e4. \uc5f0\uacb0 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uace0 \uc5f0\uacb0 \uc635\uc158 \uc911\uc5d0 \uc120\ud0dd\ud558\uc2ed\uc2dc\uc624. \ubaa8\ub4e0 \uc900\ube44\uac00 \ub05d\ub0ac\uc2b5\ub2c8\ub2e4.","landing.how.create":"\uc0dd\uc131","landing.how.create.desc":"\ubc14\uc774\ub0b8\uc2a4 DEX\ub97c \uc0ac\uc6a9\ud558\uba74 \ud3b8\ub9ac\ud55c \ud0a4\uc2a4\ud1a0\uc5b4\uc5d0\uc11c \ub9e4\uc6b0 \uc548\uc804\ud55c \ud558\ub4dc\uc6e8\uc5b4 \uc9c0\uac11 \uc635\uc158\uc5d0 \uc774\ub974\uae30\uae4c\uc9c0 \uc790\uc720\ub86d\uac8c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","landing.how.step":"\ub2e8\uacc4","landing.how.title":"\uc0ac\uc6a9 \ubc29\ubc95","landing.how.trade":"\uac70\ub798","landing.how.trade.desc":"\uc6b0\ub9ac\uc758 \ubaa9\ud45c\ub294 Binance.com\uacfc \ube44\uad50\ud558\uc5ec \uc644\ubcbd\ud558\uace0 \uad6c\ubcc4\ud560 \uc218 \uc5c6\uac8c \uac70\ub798\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574 \uc6b0\ub9ac\ub294 \uadc0\ud558\uac00 \uc88b\uc544\ud558\ub294 \ubaa8\ub4e0 \uac83\uc774 \ubc14\uc774\ub0b8\uc2a4 DEX\uc5d0\ub3c4 \uc788\ub3c4\ub85d \ucd5c\uace0\uc758 \uae30\ub2a5\uc744 \ucd5c\uc801\ud654\ud588\uc2b5\ub2c8\ub2e4.","landing.markets":"\ub9c8\ucf13","landing.markets.24HChange":"\uc804\uc77c\ub300\ube44","landing.markets.24HVolume":"24H \uac70\ub798\ub7c9","landing.markets.lastPrice":"\ub9c8\uc9c0\ub9c9 \uccb4\uacb0\uac00","landing.markets.pair":"\ud398\uc5b4","landing.markets.searchPlaceholder":"\ucf54\uc778 \uc774\ub984 \uac80\uc0c9","landing.menu.balances":"\uc794\uace0","landing.menu.changeWallet":"\uc9c0\uac11 \ubcc0\uacbd","landing.menu.closeWallet":"\uc9c0\uac11 \uc885\ub8cc","landing.menu.community":"\ucee4\ubba4\ub2c8\ud2f0","landing.menu.copyAddress":"\uc8fc\uc18c \ubcf5\uc0ac","landing.menu.docs":"\ubb38\uc11c","landing.menu.exchange":"\uac70\ub798\uc18c","landing.menu.explorer":"\ud0d0\uc0c9\uae30","landing.menu.orders":"\uc8fc\ubb38","landing.menu.orders.feeHistory":"\uc218\uc218\ub8cc \ub0b4\uc5ed","landing.menu.orders.openOrders":"\ub300\uae30 \uc8fc\ubb38","landing.menu.orders.orderHistory":"\uc8fc\ubb38 \ub0b4\uc5ed","landing.menu.orders.tradeHistory":"\uac70\ub798 \ub0b4\uc5ed","landing.menu.testnet":"\ud14c\uc2a4\ud2b8\ub137","landing.menu.tools":"\ub3c4\uad6c","landing.menu.transaction":"\ud2b8\ub79c\uc7ad\uc158","landing.menu.wallet":"\uc9c0\uac11","landing.startTrading":"\uac70\ub798 \uc2dc\uc791\ud558\uae30","landing.trust.activeAddress":"\ud65c\uc131\ud654\ub41c \uc9c0\uac11","landing.trust.activeAddress.desc":"\ub354 \ub9ce\uc740 \uc0ac\ub78c\ub4e4\uc774 \ub2e4\ub978 \uc9c0\uac11 \uc194\ub8e8\uc158\ubcf4\ub2e4 \ubc14\uc774\ub0b8\uc2a4 DEX\uc758 \uc778\ud504\ub77c\uc640 \uac70\ub798 \uc2dc\uc2a4\ud15c\uc744 \uc2e0\ub8b0\ud569\ub2c8\ub2e4.","landing.trust.pairs":"\ud398\uc5b4","landing.trust.pairs.desc":"\ubc14\uc774\ub0b8\uc2a4 DEX\ub294 \ub9e4\uc8fc \ucd94\uac00\ub418\ub294 \uc635\uc158\uacfc \ud568\uaed8 \uac70\ub798\uc5d0 \uc720\uc5f0\uc131\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.","landing.trust.rank":"\uc21c\uc704\uad8c","landing.trust.rank.desc":"\ubc14\uc774\ub0b8\uc2a4 DEX\ub294 \ucf54\uc778\ub9c8\ucf13\ucea1\uc5d0\uc11c \uac70\ub798\ub7c9 \uae30\uc900\uc73c\ub85c 1\uc704\ub97c \ucc28\uc9c0\ud55c \ud0c8\uc911\uc559\ud654 \uc554\ud638\ud654\ud3d0 \uac70\ub798\uc18c\uc785\ub2c8\ub2e4.","landing.trust.title":"\uc0ac\ub78c\ub4e4\uc774 \uc6b0\ub9ac\ub97c \uc2e0\ub8b0\ud558\ub294 \uc774\uc720","landing.why.competitive":"\uacbd\uc7c1\ub825 \uc788\ub294","landing.why.competitive.desc":"BNB\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac70\ub798 \uc218\uc218\ub8cc\ub97c \uc9c0\ubd88\ud558\uba74 \uc218\uc218\ub8cc\ub294 0.04%\uc5d0 \ubd88\uacfc\ud569\ub2c8\ub2e4. \uc774\ub294 \uc138\uacc4 \ucd5c\uace0\uc758 \uac70\ub798\uc18c Binance.com \uac70\ub798 \uc218\uc218\ub8cc\uc758 \uac70\uc758 \uc808\ubc18\uc785\ub2c8\ub2e4.","landing.why.fast":"\ube60\ub978","landing.why.fast.desc":"1\ucd08\uc758 \ube14\ub85d \uc2dc\uac04\uc73c\ub85c \ube14\ub85d\uccb4\uc778 \uac70\ub798 \ud655\uc778\uc740 \uc774\ubbf8 \uc9c0\ub098\uac04 \uc77c\uc785\ub2c8\ub2e4. \ub2e8\uc810 \uc5c6\uc774 DEX\uc758 \ubaa8\ub4e0 \uc774\uc810\uc744 \ub204\ub9ac\uc2ed\uc2dc\uc624.","landing.why.secure":"\uc548\uc804\ud55c","landing.why.secure.desc":"\ubc14\uc774\ub0b8\uc2a4 DEX\ub294 \uc0c8\ub85c\uc6b4 \ucc28\uc6d0\uc758 \ubcf4\uc548\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. P2P \uc804\uc1a1 \ubc0f \uac70\ub798\ub85c \ubcf4\uc548 \uc704\ud611\uc5d0 \uac70\uc758 \ub178\ucd9c\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.","landing.why.title":"\uc65c \ubc14\uc774\ub0b8\uc2a4 DEX\uc785\ub2c8\uae4c","lang.menu.copyAddress":" ","noContent.descPrefix":"\uadc0\ud558\ub294 \uc5c6\uc2b5\ub2c8\ub2e4 ","openOrders.areYourTrue":"\uc815\ub9d0\ub85c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c","openOrders.cancel":"\ucde8\uc18c","openOrders.cancel all":"\uc804\ubd80 \ucde8\uc18c","openOrders.cancel buy":"\ub9e4\uc218 \ucde8\uc18c","openOrders.cancel sell":"\ub9e4\ub3c4 \ucde8\uc18c","openOrders.cancelAll":"\uc804\ubd80 \ucde8\uc18c","openOrders.cancelBuy":"\ub9e4\uc218 \ucde8\uc18c","openOrders.cancelOrder":"\uc8fc\ubb38 \ucde8\uc18c","openOrders.cancelOrders":"\uc8fc\ubb38 \ucde8\uc18c","openOrders.cancelPartialSuccess":"\ubd80\ubd84 \ucde8\uc18c \uc131\uacf5","openOrders.cancelSell":"\ub9e4\ub3c4 \ucde8\uc18c","openOrders.cancelSuccess":"\ucde8\uc18c \uc131\uacf5","openOrders.keepOrder":"\uc8fc\ubb38 \uc720\uc9c0","openOrders.keepOrders":"\uc8fc\ubb38 \uc720\uc9c0","openOrders.noBuyOpenOrders":"\ub300\uae30 \ub9e4\uc218 \uc8fc\ubb38 \uc5c6\uc74c","openOrders.noOpenOrders":"\ub300\uae30 \uc8fc\ubb38 \uc5c6\uc74c","openOrders.noSellOpenOrders":"\ub300\uae30 \ub9e4\ub3c4 \uc8fc\ubb38 \uc5c6\uc74c","openOrders.title":"\ub300\uae30 \uc8fc\ubb38","orderForm.amount":"\uae08\uc561","orderForm.avb":"Avb","orderForm.buy":"\ub9e4\uc218","orderForm.equivalent":"\ub4f1\uac00","orderForm.price":"\uac00\uaca9","orderForm.sell":"\ub9e4\ub3c4","orderForm.total":"\ud569\uacc4","orderHistory.openHistory":"\uc8fc\ubb38 \ub0b4\uc5ed","orderHistory.title":"\uc8fc\ubb38 \ub0b4\uc5ed","orderHistory.tradeId":"\uac70\ub798 ID","orderHistory.tradingPrice":"\uac70\ub798 \uac00\uaca9","orderHistory.tradingTotal":"\uac70\ub798 \ucd1d\ud569","privateKeyModal.backupText":"\uc544\ub798\uc758 \ud14d\uc2a4\ud2b8\ub97c \uc885\uc774\uc5d0 \ubc31\uc5c5\ud558\uace0 \uc548\uc804\ud55c \uacf3\uc5d0 \ubcf4\uad00\ud558\uc2ed\uc2dc\uc624.","privateKeyModal.title":"\uadc0\ud558\uc758 \ud504\ub77c\uc774\ube57 \ud0a4","testnet.binanceChainExplorerGuide":"\ubc14\uc774\ub0b8\uc2a4 \uccb4\uc778 \ud0d0\uc0c9\uae30 \uac00\uc774\ub4dc","testnet.fastAndSecureDesc":"\ube60\ub974\uace0 \uc548\uc804\ud55c \ud0c8\uc911\uc559 \ub514\uc9c0\ud138 \uc790\uc0b0 \uac70\ub798\uc18c","testnet.fundingYourTestnetAccount":"\ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc5d0 \uc790\uae08 \uc81c\uacf5","testnet.howToAccessYourWallet":"\uc9c0\uac11\uc5d0 \uc811\uadfc\ud558\ub294 \ubc29\ubc95","testnet.howToCreateAWallet":"\uc9c0\uac11\uc744 \uc0dd\uc131\ud558\ub294 \ubc29\ubc95","testnet.interfaceGuide":"\uc778\ud130\ud398\uc774\uc2a4 \uac00\uc774\ub4dc","testnet.thingsToAvoid":"\ud53c\ud574\uc57c \ud560 \uc0ac\ud56d\ub4e4","testnet.title":"\ubc14\uc774\ub0b8\uc2a4 \ud0c8\uc911\uc559 \uac70\ub798\uc18c (\ud14c\uc2a4\ud2b8\ub137)","token.issue.bep2Title":"BEP-2 \ud1a0\ud070","token.issue.bep2Desc":"BEP-2\ub294 \ubc14\uc774\ub0b8\uc2a4 \uccb4\uc778\uc5d0\uc11c \ud1a0\ud070\uc744 \ubc1c\ud589\ud558\uace0 \uad6c\ud604\ud558\uae30 \uc704\ud55c \uae30\uc220 \ud45c\uc900\uc785\ub2c8\ub2e4.","token.issue.bep8Title":"BEP-8 \ud1a0\ud070 (\ubbf8\ub2c8-BEP2)","token.issue.bep8Desc":"BEP-8\uc740 \ubc14\uc774\ub0b8\uc2a4 \uccb4\uc778\uc5d0\uc11c \ud1a0\ud070\uc744 \ubc1c\ud589\ud558\uace0 \uad6c\ud604\ud558\uae30 \uc704\ud55c \uae30\uc220 \ud45c\uc900\uc785\ub2c8\ub2e4.","token.issue.title":"\ud1a0\ud070 \ubc1c\ud589","token.issue.confirmationModal.title":"\ud1a0\ud070 \ucee8\ud2b8\ub799\ud2b8 \ud655\uc778","token.issue.confirmationModal.confirm":"\uc804\ubd80 \ucde8\uc18c","token.issue.tokenNameLabel":"\ud1a0\ud070 \uc774\ub984","token.issue.tokenNameDesc":"\ud1a0\ud070 \uc774\ub984\uc740 3\uc790\uc5d0\uc11c 32\uc790 \uc0ac\uc774\uc5ec\uc57c \ud569\ub2c8\ub2e4.","token.issue.symbolLabel":"\uc2ec\ubcfc","token.issue.maxSupplyLabel":"\ucd5c\ub300 \ubc1c\ud589\ub7c9","token.issue.symbolDescLength":"\uae30\ud638\ub294 2\uc790\uc5d0\uc11c 5\uc790 \uc0ac\uc774\uc5ec\uc57c \ud569\ub2c8\ub2e4.","token.issue.totalSuppyHeader":"\ud1a0\ud070 \ucd5c\ub300 \uacf5\uae09\ub7c9 \uc120\ud0dd","token.issue.totalSuppyDesc":"\ucd5c\ub300 \uacf5\uae09\ub7c9\uc740 \uc0dd\uc131\ud560 \uc218 \uc788\ub294 \ucd5c\ub300 \ud1a0\ud070 \uc218\uc785\ub2c8\ub2e4","token.issue.supplyLabel":"\uacf5\uae09\ub7c9","token.issue.supplyDesc":"\ubc1c\ud589\ud574\uc57c \ud558\ub294 \ud1a0\ud070 \uc218","token.issue.prev":"\ub0b4 \ud1a0\ud070 \ubaa9\ub85d","token.issue.updateTokenInfoHeader":"\ud1a0\ud070 \uc815\ubcf4\ub97c \uc5c5\ub370\uc774\ud2b8\ud560 URL \uc124\uc815 (\uc120\ud0dd \uc0ac\ud56d)","token.issue.updateTokenInfoHeaderTips":"URL\uc740 \ubbf8\ub2c8\ud1a0\ud070\uc5d0 \ub300\ud55c \uc18c\uac1c\uac00 \ub420 \uc218 \uc788\ub294 JSON \ud615\uc2dd\uc758 \uc815\ubcf4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4","token.issue.fillInRequestedUrlLabel":"\uc694\uccad URL\uc744 \uc785\ub825\ud558\uc138\uc694","token.issue.issuanceFee":"\ubc1c\ud589 \uc218\uc218\ub8cc","token.list.title":"\ub0b4 \ud1a0\ud070","token.issueModal.mintable":"\ubbfc\ud2b8 \uac00\ub2a5\ud55c","token.issueModal.nonMintable":"\ubbfc\ud2b8 \ubd88\uac00","token.issueModal.name":"\ud1a0\ud070 \uc774\ub984","token.issueModal.nameErrMsg":"\ud1a0\ud070 \uc774\ub984\uc740 32\uc790\ub85c \uc81c\ud55c\ub429\ub2c8\ub2e4","token.issueModal.symbol":"\uae30\ud638","token.issueModal.symbolErrMsg":"\uae30\ud638\ub294 \uc601\uc22b\uc790\uc5ec\uc57c\ud558\uba70 \uae38\uc774\ub294 3~8\uc790\ub85c \uc81c\ud55c\ub429\ub2c8\ub2e4","token.issueModal.title":"\ud1a0\ud070 \ubc1c\ud589","token.issueModal.totalSupply":"\ucd1d \uacf5\uae09\ub7c9","token.issueModal.totalSupplyErrMsg":"\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uacf5\uae09\ub7c9","token.listModal.address":"\uc8fc\uc18c","token.listModal.confirm":"\ud655\uc778","token.listModal.initPrice":"\ucd08\uae30 \uac00\uaca9","token.listModal.proposalId":"\uc81c\uc548\uc11c ID","token.listModal.quoteAsset":"\uc790\uc0b0 \uacac\uc801","token.listModal.title":"\ud1a0\ud070 \uc0c1\uc7a5","token.listModal.tokenName":"\ud1a0\ud070 \uc774\ub984","token.main.burn":"\uc18c\uac01","token.main.freeze":"\ub3d9\uacb0","token.main.issueToken":"\ud1a0\ud070 \ubc1c\ud589","token.main.list":"\uc0c1\uc7a5","token.main.listSuccessmsg":"\uc0c1\uc7a5 \uc131\uacf5","token.main.mint":"\ubbfc\ud2b8","token.main.proposal":"\uc81c\uc548\uc11c","token.main.submitListFirst":"\uc0c1\uc7a5 \uc81c\uc548\uc11c\ub97c \uba3c\uc800 \uc81c\ucd9c\ud558\uc2ed\uc2dc\uc624","token.main.submitSuccessmsg":"\uc0c1\uc7a5 \uc81c\uc548\uc11c \uc81c\ucd9c \uc131\uacf5","token.main.title":"\ub0b4 \ud1a0\ud070 \ubaa9\ub85d","token.main.unfreeze":"\ub3d9\uacb0 \ud574\uc81c","token.proposalModal.address":"\uc8fc\uc18c","token.proposalModal.baseAsset":"\uae30\ubcf8 \uc790\uc0b0","token.proposalModal.desc":"\uc124\uba85","token.proposalModal.expireTime":"\ub9cc\ub8cc \uc2dc\uac04","token.proposalModal.hours":"\uc2dc\uac04","token.proposalModal.initDeposit":"\ucd08\uae30 \uc785\uae08","token.proposalModal.initPrice":"\ucd08\uae30 \uac00\uaca9","token.proposalModal.initPriceErr":"\ucd08\uae30 \uac00\uaca9\uc740 \ube44\uc5b4\uc788\uc73c\uba74 \uc548\ub429\ub2c8\ub2e4","token.proposalModal.initPriceErr2":"\ucd08\uae30 \uac00\uaca9\uc740 0\ubcf4\ub2e4 \ucee4\uc57c\ud569\ub2c8\ub2e4","token.proposalModal.quoteAsset":"\uc790\uc0b0 \uacac\uc801","token.proposalModal.title":"\uc0c1\uc7a5 \uc81c\uc548\uc11c","token.proposalModal.titleErr":"\uc81c\uc548\uc11c \uc81c\ubaa9\uc740 \ube44\uc5b4\uc788\uc73c\uba74 \uc548\ub429\ub2c8\ub2e4","token.proposalModal.titleErr2":"\uc81c\uc548\uc11c \uc81c\ubaa9\uc774 \ucd5c\ub300 \uae38\uc774\uc778 128\ubcf4\ub2e4 \uae41\ub2c8\ub2e4","token.proposalModal.votingPeriod":"\ud22c\ud45c \uae30\uac04","token.table.col.mintable":"\ubbfc\ud2b8 \uac00\ub2a5\ud55c","token.table.col.name":"\uc774\ub984","token.table.col.symbol":"\uae30\ud638","token.table.col.tokenType":"\uc720\ud615","token.table.col.totalSupply":"\ucd1d \uacf5\uae09\ub7c9","token.tokenModal.address":"\uc8fc\uc18c","token.tokenModal.amount":"\uae08\uc561","token.tokenModal.available":"\uc0ac\uc6a9 \uac00\ub2a5","token.tokenModal.burnTitle":"\ud1a0\ud070 \uc18c\uac01","token.tokenModal.confirm":"\ud655\uc778","token.tokenModal.desc":" ","token.tokenModal.freezeTitle":"\ud1a0\ud070 \ub3d9\uacb0","token.tokenModal.mintTitle":"\ud1a0\ud070 \ubbfc\ud2b8","token.tokenModal.name":"\uc774\ub984","token.tokenModal.unfreezeTitle":"\ud1a0\ud070 \ub3d9\uacb0 \ud574\uc81c","token.list.tradepair.exist":"\uac70\ub798 \uc30d \uc874\uc7ac","token.warning":"We do not support walletconnect compatible wallets currently and for security reason, Ledger is the best choice to Issue/List/Mint/Burn Token","tradeHistory.tradeHistory":"\uac70\ub798 \ub0b4\uc5ed","transaction.here":"\uc774\uacf3","transaction.notes":"\ubaa8\ub4e0 \uac70\ub798\uac00 \uc544\ub798\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4. \uc804\uccb4 \ub0b4\uc5ed\uc740 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624","txHistory.here":"\uc774\uacf3","txHistory.notEveryTransactionIsIncludedBelow":"\ubaa8\ub4e0 \uac70\ub798\uac00 \uc544\ub798\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4. \uc804\uccb4 \ub0b4\uc5ed\uc740 \uc774\uacf3\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624.","txHistory.title":"\uac70\ub798 \ub0b4\uc5ed","unlock.connectAddress.enterYourAddress":"\uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc2ed\uc2dc\uc624","unlock.connectAddress.invalidAddress":"\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc8fc\uc18c","unlock.connectAddress.viewOnlyMode":"\ubcf4\uae30 \uc804\uc6a9 \ubaa8\ub4dc\ub85c \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc2ed\uc2dc\uc624","unlock.createNewWallet":"\uc0c8\ub85c\uc6b4 \uc9c0\uac11 \uc0dd\uc131","unlock.google.chooseWallet":"\uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc9c0\uac11 \uc911\uc5d0\uc11c \uc120\ud0dd\ud558\uc2ed\uc2dc\uc624:","unlock.google.logIn":"\ub85c\uadf8\uc778","unlock.google.notLoggedIn":"\uad6c\uae00 \uacc4\uc815\uc5d0 \ub85c\uadf8\uc778\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4","unlock.google.signedInAs":"\ub85c\uadf8\uc778 \ub418\uc5c8\uc2b5\ub2c8\ub2e4","unlock.googledrive.editWallet":"\uc9c0\uac11 \uc815\ubcf4 \uc218\uc815","unlock.googledrive.wallets":"\uacc4\uc18d\ud558\ub824\uba74 \ub2e4\uc74c \uc9c0\uac11 \uc911\uc5d0\uc11c \uc120\ud0dd\ud558\uc2ed\uc2dc\uc624:","unlock.index.selectUnlockType":"\uc7a0\uae08 \ud574\uc81c \ubc29\ubc95\uc744 \uc120\ud0dd\ud558\uc2ed\uc2dc\uc624","unlock.index.title":"\uc9c0\uac11 \ud574\uc81c","unlock.keystore.enterYourWalletPass":"\uc9c0\uac11 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc2ed\uc2dc\uc624","unlock.keystore.paste":"\ub610\ub294 \ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c\uc758 \ub0b4\uc6a9\uc744 \ubd99\uc5ec \ub123\uc73c\uc2ed\uc2dc\uc624","unlock.keystore.select":"\uc554\ud638\ud654\ub41c \uc9c0\uac11 \ud30c\uc77c\uc744 \uc5f0\uacb0\ud558\uace0 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc2ed\uc2dc\uc624","unlock.keystore.upload":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c \uc5c5\ub85c\ub4dc","unlock.ledger.appInstallation":"\uc571 \uc124\uce58","unlock.ledger.binanceChainReady":"\ubc14\uc774\ub0b8\uc2a4 \uccb4\uc778 \uc900\ube44","unlock.ledger.connectToLedger":"\ub81b\uc800\uc5d0 \uc5f0\uacb0","unlock.ledger.enterPINCode":"PIN \ucf54\ub4dc \uc785\ub825","unlock.ledger.getTheApp":"\uc571 \ubc1b\uae30","unlock.ledger.havingConnectionIssues":"\uc5f0\uacb0 \ubb38\uc81c\uac00 \uc788\uc73c\uc2ed\ub2c8\uae4c?","unlock.ledger.mustBeOnScreen":"\ud654\uba74\uc5d0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4","unlock.ledger.openBinanceChain":"\ubc14\uc774\ub0b8\uc2a4 \uccb4\uc778 \uc5f4\uae30","unlock.ledger.text":"\ud654\uba74\uc758 \uc9c0\uc2dc\uc5d0 \ub530\ub77c \uc5ec\uae30\uc5d0 \ud558\ub4dc\uc6e8\uc5b4 \uc9c0\uac11\uc744 \uc5f0\uacb0\ud558\uc2ed\uc2dc\uc624","unlock.ledger.title":"\ub81b\uc800 \ub514\ubc14\uc774\uc2a4\ub85c \uc7a0\uae08 \ud574\uc81c","unlock.ledger.usageInstructions":"\uc0ac\uc6a9 \uc9c0\uce68","unlock.mnemonic.pleaseEnterYourPhrase":"24\uac1c \ub2e8\uc5b4 \ubb38\uad6c\ub97c \uc785\ub825\ud558\uc2ed\uc2dc\uc624","unlock.mnemonic.pleaseSeparateEachWordSpace":"\uac01 \ub2e8\uc5b4\ub97c \uacf5\ubc31\uc73c\ub85c \ubd84\ub9ac\ud558\uc2ed\uc2dc\uc624.","unlock.mnemonic.warning.desc1":"\uc774 \uc635\uc158\uc740 \uc190\uc2e4\ub41c \ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c \ub610\ub294 \ube44\ubc00\ubc88\ud638\ub97c \ubcf5\uc6d0\ud558\uba70,","unlock.mnemonic.warning.desc2":"\ub2e4\ub978 \uc6d4\ub81b \uc571\uc5d0\uc11c \uc2dc\ub4dc\ub97c \uac00\uc838\uc635\ub2c8\ub2e4.","unlock.mnemonic.warning.desc3":"\uacbd\uace0! \uc544\ubb34 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \uc2dc\ub4dc \ubb38\uad6c \ub610\ub294 \ud504\ub77c\uc774\ube57 \ud0a4\ub97c \uc785\ub825\ud558\ub294 \uac83\uc740 \ub9e4\uc6b0 \uc704\ud5d8\ud569\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc545\uc131 \ud655\uc7a5 \ud504\ub85c\uadf8\ub7a8\uc774 \uc124\uce58\ub418\uc5b4 \uc788\uac70\ub098 \uc2e4\uc218\ub85c \ud53c\uc2f1 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \ubc29\ubb38\ud558\uba74 \uc790\uc0b0\uc744 \ub3c4\ub09c \ub2f9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","unlock.privateKey.enterYourPrivateKey":"\ud504\ub77c\uc774\ube57 \ud0a4\ub97c \uc785\ub825\ud558\uc2ed\uc2dc\uc624 (16\uc9c4\uc218 \ud615\uc2dd)","unlock.privateKey.invalid":"\uc785\ub825\ud55c \ud504\ub77c\uc774\ube57 \ud0a4\uac00 \uc62c\ubc14\ub978 \ud615\uc2dd\uc774 \uc544\ub2c8\uba70 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc2ed\uc2dc\uc624.","unlock.privateKey.passwordInvalid":"\ud574\ub2f9 \ube44\ubc00\ubc88\ud638\uac00 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc2ed\uc2dc\uc624.","unlock.privateKey.warning":"\uc190\uc2e4\ub41c \ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c \ub610\ub294 \ube44\ubc00\ubc88\ud638\ub97c \ubcf5\uc6d0","unlock.privateKey.warningQuestion":"\uc544\ubb34 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \ud504\ub77c\uc774\ube57 \ud0a4\ub97c \uc785\ub825\ud558\ub294 \uac83\uc740 \ub9e4\uc6b0 \uc704\ud5d8\ud569\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc545\uc131 \ud655\uc7a5 \ud504\ub85c\uadf8\ub7a8\uc774 \uc124\uce58\ub418\uc5b4 \uc788\uac70\ub098 \uc2e4\uc218\ub85c \ud53c\uc2f1 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \ubc29\ubb38\ud558\uba74 \uc790\uc0b0\uc744 \ub3c4\ub09c \ub2f9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","unlock.recover.content":"\uc9c0\uac11 \uc0dd\uc131 \uc911\uc5d0 \uc548\ub0b4 \ubc1b\uc740 \ubcf5\uad6c \ubb38\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc9c0\uac11 \uc811\uadfc \ubcf5\uad6c","unlock.recover.download.button":"\ub2e4\uc6b4\ub85c\ub4dc","unlock.recover.downloadTitle":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc","unlock.recover.password.placeholder":"\uac15\ub825\ud55c \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc2ed\uc2dc\uc624","unlock.recover.submit":"\ud655\uc778","unlock.recover.title":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c \ubcf5\uc6d0","unlock.recover.understand.continue":"\ud0a4\uc2a4\ud1a0\uc5b4 \ud30c\uc77c \ubcf5\uc6d0","unlock.recover.word.placeholder":"\uac80\uc0c9","unlock.recover.wordlist.reset":"\ucd08\uae30\ud654","unlock.recover.wordlistTitle":"\uc67c\ucabd \ubaa9\ub85d\uc5d0\uc11c \ub2c8\ubaa8\ub2c9 \ubb38\uad6c\ub97c \uc120\ud0dd\ud558\uc2ed\uc2dc\uc624","unlock.support.wallets":" ","unlock.temporarySessionPassword":"\uc784\uc2dc \uc138\uc158 \ube44\ubc00\ubc88\ud638","unlock.thisIsNotAValidWalletFile":"\uc720\ud6a8\ud55c \uc9c0\uac11 \ud30c\uc77c\uc774 \uc544\ub2d9\ub2c8\ub2e4","unlock.trezor.connectToTrezor":"\ud2b8\ub808\uc800\uc5d0 \uc5f0\uacb0","unlock.trezor.firmwareNotice":"\ucc38\uace0: \ubc14\uc774\ub0b8\uc2a4 \uccb4\uc778\uc744 \ub514\ubc14\uc774\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \ud2b8\ub808\uc800 \ud38c\uc6e8\uc5b4\ub97c \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud588\ub294\uc9c0 \ud655\uc778\ud558\uc2ed\uc2dc\uc624.","unlock.trezor.notOnTestNet":"\ube44\uace0: \ud2b8\ub808\uc800 \ub514\ubc14\uc774\uc2a4\ub294 \ud604\uc7ac \ud06c\ub86c \ub610\ub294 \ud30c\uc774\uc5b4\ud3ed\uc2a4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4 ","unlock.trezor.title":"\ud2b8\ub808\uc800 \ub514\ubc14\uc774\uc2a4\ub85c \uc7a0\uae08 \ud574\uc81c","unlock.unlockWalletNow":"\uc9c0\uae08 \uc9c0\uac11 \ud574\uc81c","unlock.walletConnect.notes":"\ucc38\uace0: \ud2b8\ub7ec\uc2a4\ud2b8 \uc6d4\ub81b \ubc0f \ucfe8\uc6d4\ub81b\uc740 \ubc14\uc774\ub0b8\uc2a4 \uccb4\uc778 \ud14c\uc2a4\ud2b8\ub137\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.","unlock.walletConnect.recommendedWallet":"\uc9c0\uc6d0\ub418\ub294 \uc571\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4","unlock.walletConnet.getTrustWallet":"\ud2b8\ub7ec\uc2a4\ud2b8 \uc6d4\ub81b \ubc1b\uae30","unlock.walletConnet.qrCodeDesc1":"\uc6d4\ub81b\ucee4\ub125\ud2b8 QR \ucf54\ub4dc \ubc1b\uae30","unlock.walletConnet.qrCodeDesc2":"\uc544\uc9c1 \uc6d4\ub81b\ucee4\ub125\ud2b8\ub97c \uc9c0\uc6d0\ud558\ub294 \uc571\uc774 \uc5c6\uc2b5\ub2c8\uae4c?","unlock.walletConnet.showWalletQrCode":"\uc774 \ud654\uba74\uc758 QR \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ubc14\uc77c \uc9c0\uac11\uc744 \uc5ec\uae30\uc5d0 \uc5f0\uacb0\ud558\uc2ed\uc2dc\uc624","unlock.walletConnet.title":"\uad8c\uc7a5","walletConnect.clickHereToUnlock":"\ub2e4\ub978 \uc9c0\uac11\uc744 \ud574\uc81c\ud558\ub824\uba74 \uc5ec\uae30\ub97c \ud074\ub9ad\ud558\uc2ed\uc2dc\uc624","walletConnect.error":"\uc6d4\ub81b\ucee4\ub125\ud2b8 \uc624\ub958","walletConnect.errorOccur":"\uc6d4\ub81b\ucee4\ub125\ud2b8 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4","walletConnect.pleaseEnsureOpenWorking":"\uc571\uc774 \uc5f4\ub824\uc788\uace0 \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud558\uc2ed\uc2dc\uc624.","walletConnect.pleaseUseAWalletConnect":"\uc704\uc758 QR \ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\ub824\uba74 \uc6d4\ub81b\ucee4\ub125\ud2b8\ub97c \uc9c0\uc6d0\ud558\ub294 \uc571\uc744 \uc0ac\uc6a9\ud558\uc2ed\uc2dc\uc624","walletConnect.qrCode":"\uc6d4\ub81b\ucee4\ub125\ud2b8 QR \ucf54\ub4dc","walletConnect.readyToConfirm":"\ud655\uc778\ud558\uc2ed\uc2dc\uc624","walletConnect.readyToConfirmBody":"\uc9c0\uac11 \uc571\uc5d0\uc11c \uac70\ub798\ub97c \ud655\uc778\ud558\uc2ed\uc2dc\uc624.","walletconnect.notifycation.connectAgain":"\ub2e4\uc2dc \uc5f0\uacb0","walletconnect.notifycation.disconnectMessage":" \ubaa8\ubc14\uc77c \uc9c0\uac11\uc5d0\uc11c \uc5f0\uacb0\uc774 \ub04a\uc5b4\uc84c\uc2b5\ub2c8\ub2e4...","walletconnect.notifycation.hide":"\uc228\uae30\uae30","local.secure.storage":"Local Secure Storage","local.keystore.replace.tips":"You already have a keystore file, make sure you have backed up before replace","staking.title":"\uc2a4\ud14c\uc774\ud0b9 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158","staking.goback":"\uc2a4\ud14c\uc774\ud0b9 \ud398\uc774\uc9c0\uc5d0 \uc218\ub3d9\uc73c\ub85c \ub3cc\uc544\uac00 \uc2dc\ub3c4\ud574\ubcf4\uc138\uc694","staking.confirm":"\uc804\ubd80 \ucde8\uc18c","staking.cancel":"\ucde8\uc18c","staking.notification.delegator.address":"\uc704\uc784\uc790 \uc8fc\uc18c:","staking.notification.validator":"\uac80\uc99d\uc790:","staking.notification.amount":"\uae08\uc561:","staking.notification.network.fee":"\ub124\ud2b8\uc6cc\ud06c \uc218\uc218\ub8cc:","staking.notification.srcValidator.address":"\uc1a1\uc2e0 \uac80\uc99d\uc790:","staking.notification.dstalidator.address":"\uc218\uc2e0 \uac80\uc99d\uc790:","staking.notification.total":"\ud569\uacc4:"}'
      );
    },
    514: function (e) {
      e.exports = JSON.parse(
        '{"account.footer.copyright":"\xa9 2018 - 2019 Binance.org. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.","account.footer.copyright.trubi":"\xa9 2018 - 2019 Trubi. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.","account.footer.exchange":"\u0411\u0438\u0440\u0436\u0430","account.footer.home":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f","balances.filteredByAsset":"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u043d\u043e \u043f\u043e \u0430\u043a\u0442\u0438\u0432\u0430\u043c","balances.hideZeroBalance":"\u0421\u043a\u0440\u044b\u0442\u044c \u043d\u0443\u043b\u0435\u0432\u043e\u0439 \u0431\u0430\u043b\u0430\u043d\u0441","balances.myBalances":"\u041c\u043e\u0438 \u0431\u0430\u043b\u0430\u043d\u0441\u044b","blocked.country.list":"\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0435 \u0428\u0442\u0430\u0442\u044b \u0410\u043c\u0435\u0440\u0438\u043a\u0438, \u041a\u0438\u0442\u0430\u0439, \u0410\u043b\u0431\u0430\u043d\u0438\u044f, \u0411\u043e\u0441\u043d\u0438\u044f \u0438 \u0413\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430, \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c, \u041a\u043e\u043d\u0433\u043e (\u0414\u0420\u041a), \u041a\u043e\u0442-\u0434\'\u0418\u0432\u0443\u0430\u0440, \u041a\u0440\u044b\u043c, \u041a\u0443\u0431\u0430, \u0418\u0440\u0430\u043a, \u0418\u0440\u0430\u043d, \u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041a\u043e\u0440\u0435\u044f, \u041b\u0438\u0431\u0435\u0440\u0438\u044f, \u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u044f, \u041c\u044c\u044f\u043d\u043c\u0430, \u0421\u0435\u0440\u0431\u0438\u044f, \u0421\u0443\u0434\u0430\u043d, \u0421\u0438\u0440\u0438\u044f, \u0417\u0438\u043c\u0431\u0430\u0431\u0432\u0435.","common.cancel":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","common.close":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","common.confirm":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c ","common.connect":"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c","common.continue":"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c","common.errorOccured":"\u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430","common.goBack":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434","common.googleUnlock":"Google Drive","common.keystoreFile":"\u0424\u0430\u0439\u043b Keystore","common.ledgerDevice":"Ledger","common.loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430","common.mnemonicPhrase":"\u0424\u0440\u0430\u0437\u0430 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f","common.networkError":"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0442\u0438","common.or":"\u0438\u043b\u0438","common.password":"\u041f\u0430\u0440\u043e\u043b\u044c","common.placeOrder":"\u0420\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043e\u0440\u0434\u0435\u0440","common.pleaseCheckVisitWebsite":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432\u044b \u0437\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u043d\u0430 ","common.previous":"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439","common.privateKey":"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u041a\u043b\u044e\u0447","common.systemError":"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430","common.trezorDevice":"\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e Trezor","common.viewMyPrivateKey":"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043c\u043e\u0439 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447","common.viewOnly":"\u0422\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440","common.walletConnect":"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a","common.yes":"\u0414\u0430","common.warning":"Warning","common.next":"\u0414\u0430\u043b\u0435\u0435","common.buy-crypto-on-ramp":"\u041a\u0443\u043f\u0438\u0442\u044c \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u0443","validation.onlyAlphaNumeric":"Only use letters and numbers","validation.size":"{label} length must between {min} and {max}","create.backupKeystore.backupYour":"\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0435 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u0430\u0448\u0435\u0433\u043e ","create.backupKeystore.cannotRecoveredIt":"\u041e\u043d \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d, \u0435\u0441\u043b\u0438 \u0432\u044b \u0435\u0433\u043e \u043f\u043e\u0442\u0435\u0440\u044f\u0435\u0442\u0435.","create.backupKeystore.createBackupFile":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e \u044d\u0442\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430!","create.backupKeystore.downloadKeystoreFile":"\u0421\u043a\u0430\u0447\u0430\u0442\u044c Keystore File (UTC/JSON)","create.backupKeystore.getMyPrivateKey":"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043c\u043e\u0439 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447","create.backupKeystore.keystoreFile":"\u0424\u0430\u0439\u043b Keystore","create.backupKeystore.needFirstDownload":"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0412\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043a\u0430\u0447\u0430\u0442\u044c Keystore File","create.backupKeystore.notShareFile":"\u041d\u0435 \u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0438 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u043d\u0430 \u043d\u0435\u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0445 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430\u0445. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0432\u0430\u0448\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0443\u043a\u0440\u0430\u0434\u0435\u043d\u044b.","create.backupMnemonic.note":"\u0421\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043d\u0438\u0436\u0435 \u0442\u0435\u043a\u0441\u0442\u0430 \u043d\u0430 \u0431\u0443\u043c\u0430\u0433\u0435 \u0438 \u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e \u0432 \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u043e\u043c \u0438 \u0432 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435.","create.backupMnemonic.title":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0441\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e \u043c\u043d\u0435\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439","create.backupText":"\u0421\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043d\u0438\u0436\u0435 \u0442\u0435\u043a\u0441\u0442\u0430 \u043d\u0430 \u0431\u0443\u043c\u0430\u0433\u0435 \u0438 \u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e \u0432 \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u043e\u043c \u0438 \u0432 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435.","create.chooseKSOrMnemonic.keystoreAndPassword":"Keystore File + \u041f\u0430\u0440\u043e\u043b\u044c","create.chooseKSOrMnemonic.keystoreFile":"\u0424\u0430\u0439\u043b Keystore","create.chooseKSOrMnemonic.recommendedUSBDrive":"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e \u043d\u0430 USB-\u043d\u0430\u043a\u043e\u043f\u0438\u0442\u0435\u043b\u0435","create.chooseKSOrMnemonic.recommendedUSBDriveOrPaper":"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e \u043d\u0430 \u0431\u0443\u043c\u0430\u0433\u0435 \u0438\u043b\u0438 USB-\u043d\u0430\u043a\u043e\u043f\u0438\u0442\u0435\u043b\u0435","create.chooseKSOrMnemonic.title":"\u041a\u0430\u043a \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a?","create.chooseKSOrMnemonic.unlockExistWallet":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a","create.chooseKSOrMnemonic.useKeystoreFile":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0430\u0439\u043b Keystore (UTC / JSON) + \u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0443","create.chooseKSOrMnemonic.useMnemonicPhrase":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0432\u0430\u0448\u0443 \u041c\u043d\u0435\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0444\u0440\u0430\u0437\u0443 \u0438\u0437 24-\u0445 \u0441\u043b\u043e\u0432 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0443","create.confirmNote":"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u043b\u0438 \u0441\u0432\u043e\u044e \u043c\u043d\u0435\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0444\u0440\u0430\u0437\u0443?","create.createNewWallet":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a","create.doubleConfirmMnemonic.note":"\u0427\u0442\u043e\u0431\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u0412\u0430\u0448\u0430 \u043a\u043e\u043f\u0438\u044f \u0432\u0435\u0440\u043d\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u043d\u0435\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0444\u0440\u0430\u0437\u0443 \u0432 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435.","create.doubleConfirmMnemonic.title":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0442\u043e\u0440\u0438\u0447\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f","create.doubleConfirmMnemonic.tryAgain":"\u041c\u043d\u0435\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0444\u0440\u0430\u0437\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0432 \u043d\u0435\u0432\u0435\u0440\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.","create.downloadKeyStoreFile":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b Keystore","create.enterPassword":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c","create.google.createWallet":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","create.google.createdSuccessfully":"\u041a\u043e\u0448\u0435\u043b\u0435\u043a \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d","create.google.creationFailure":"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430","create.google.tryAgain":"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u043d\u043e\u0432\u0430","create.google.walletName":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430","create.googledrive.rePassErr":"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442","create.keystoreFileAndPassword":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c Keystore File + \u041f\u0430\u0440\u043e\u043b\u044c","create.pick.useGoogleDrive.description":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 Google","create.pick.useGoogleDrive.title":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f Google Drive","create.pick.useLocalKeystore.description":"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043d\u0430 \u0441\u0432\u043e\u0435\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435","create.pick.useLocalKeystore.title":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f Keystore-\u0424\u0430\u0439\u043b","create.pleaseCheck":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432\u044b \u0437\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u043d\u0430 ","create.reEnterPassword":"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c","create.stepTwo.desc":"\u041c\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c\u0441\u044f \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0430\u0448\u0443 \u043c\u043d\u0435\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0444\u0440\u0430\u0437\u0443, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u043d\u0438\u043a\u0442\u043e \u043d\u0435 \u0441\u043c\u043e\u0442\u0440\u0438\u0442 \u043d\u0430 \u0432\u0430\u0448 \u044d\u043a\u0440\u0430\u043d.","create.success.desc1":"\u0412\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430 Binance Chain \u0438","create.success.desc2":"\u0414\u0435\u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0431\u0438\u0440\u0436\u0430!","create.success.title":"\u0412\u0441\u0451 \u0433\u043e\u0442\u043e\u0432\u043e!","create.success.unlockWallet":"\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","create.tutorial.next":"\u0414\u0430\u043b\u0435\u0435","create.tutorial.skip":"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (\u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f)","create.tutorial.step1.desc1":"Binance \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0441\u044f \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432\u0430\u043c \u0441\u0430\u043c\u044b\u0439 \u043b\u0443\u0447\u0448\u0438\u0439 \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439 \u043e\u043f\u044b\u0442 \u0432 Binance Chain. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043c\u044b \u0445\u043e\u0442\u0435\u043b\u0438 \u0431\u044b \u043f\u043e\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043c\u0438\u043d\u0443\u0442\u0443 \u0432\u0430\u0448\u0435\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0447\u0442\u043e\u0431\u044b \u0432\u044b \u043c\u043e\u0433\u043b\u0438 \u043f\u043e\u043d\u044f\u0442\u044c, \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0434\u0435\u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0438 \u0438 \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0438\u0435 \u043c\u0435\u0440\u044b \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u0438\u0442\u044c \u0441\u0435\u0431\u044f. \u041d\u0430\u0439\u0442\u0438 \u043f\u043e\u043b\u043d\u044b\u0435 \u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0434\u0435\u0441\u044c.","create.tutorial.step1.title":"\u041d\u0430\u0448\u0438 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430","create.tutorial.step2.desc1":"\u0412\u044b \u043d\u0435\u0441\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u0443\u044e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0438\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432. \u041d\u0438\u043a\u0442\u043e \u0434\u0440\u0443\u0433\u043e\u0439, \u0432\u043a\u043b\u044e\u0447\u0430\u044f Binance, \u043d\u0435 \u0441\u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043c\u043e\u0447\u044c \u0432\u0430\u043c \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a, \u0435\u0441\u043b\u0438 \u0432\u044b \u0435\u0433\u043e \u043f\u043e\u0442\u0435\u0440\u044f\u0435\u0442\u0435.","create.tutorial.step2.desc2":"\u041a\u043e\u0433\u0434\u0430 \u0432\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0435 \u043a\u043e\u0448\u0435\u043b\u0435\u043a \u043d\u0430 Binance, \u0432\u0430\u043c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f 3 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0444\u043e\u0440\u043c\u0430\u0442\u0430, \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0443.","create.tutorial.step2.title":"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0412\u0430\u0448\u0438\u0445 \u0421\u0440\u0435\u0434\u0441\u0442\u0432","create.tutorial.step3.desc1":"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u0443\u043c\u0430\u0442\u044c \u043e keystore-\u0444\u0430\u0439\u043b\u0435 \u043a\u0430\u043a \u043e\u0431 \xab\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\xbb, \u0432 \u0442\u043e \u0432\u0440\u0435\u043c\u044f \u043a\u0430\u043a \u043f\u0430\u0440\u043e\u043b\u044c \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0432\u0430\u0448 \u043a\u043e\u0448\u0435\u043b\u0435\u043a. \u041e\u0431\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0443, \u0442\u0430\u043a \u0447\u0442\u043e \u0434\u0435\u0440\u0436\u0438\u0442\u0435 \u0438\u0445 \u0432 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438. \u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043d\u0430 Binance.","create.tutorial.step3.title":"Keystore File + \u041f\u0430\u0440\u043e\u043b\u044c","create.tutorial.step4.desc1":"24 \u0441\u043b\u043e\u0432\u0430 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0438 \xab\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\xbb, \u0438 \u043f\u0430\u0440\u043e\u043b\u0435\u043c. \u042d\u0442\u043e \u0432\u0442\u043e\u0440\u0438\u0447\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0443, \u0435\u0441\u043b\u0438 \u0432\u044b \u043f\u043e\u0442\u0435\u0440\u044f\u0435\u0442\u0435 keystore-\u0444\u0430\u0439\u043b \u0438\u043b\u0438 \u0437\u0430\u0431\u0443\u0434\u0435\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c. \u041b\u044e\u0431\u043e\u0439, \u043a\u0442\u043e \u0443\u0437\u043d\u0430\u0435\u0442 \u0432\u0430\u0448\u0443 \u043c\u043d\u0435\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0444\u0440\u0430\u0437\u0443, \u0441\u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0443, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u0443\u044e \u0444\u0440\u0430\u0437\u0443 \u0432 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438.","create.tutorial.step4.title":"\u041c\u043d\u0435\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0444\u0440\u0430\u0437\u0430","create.tutorial.step5.desc1":"\u042d\u0442\u043e \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043b\u043e\u0432 \u043c\u043d\u0435\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0444\u0430\u0437\u044b.","create.tutorial.step5.desc2":"Binance \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043e\u0442 \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c keystore-\u0444\u0430\u0439\u043b \u0438 \u043f\u0430\u0440\u043e\u043b\u044c; \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0442\u043e\u0440\u0438\u0447\u043d\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u0435\u0436\u0434\u0443 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043c\u043d\u0435\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0444\u0440\u0430\u0437\u044b \u0438\u043b\u0438 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430.","create.tutorial.step5.title":"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447","create.tutorial.title":"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430","create.tutorial.understand":"\u042f \u043f\u043e\u043d\u0438\u043c\u0430\u044e","create.understandCheckbox":"\u042f \u043f\u043e\u043d\u0438\u043c\u0430\u044e, \u0447\u0442\u043e Binance \u043d\u0435 \u0441\u043c\u043e\u0436\u0435\u0442 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u043b\u0438 \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043c\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c \u0438\u043b\u0438 keystore \u0444\u0430\u0439\u043b. \u042f \u0441\u0434\u0435\u043b\u0430\u044e \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e keystore-\u0444\u0430\u0439\u043b\u0430 / \u043f\u0430\u0440\u043e\u043b\u044f, \u0441\u043e\u0445\u0440\u0430\u043d\u044e \u0438\u0445 \u0432 \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435, \u0432\u044b\u043f\u043e\u043b\u043d\u044e \u0432\u0441\u0435 \u0448\u0430\u0433\u0438 \u043f\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430 \u0438 \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441\u043e \u0432\u0441\u0435\u043c\u0438 ","create.understandCheckbox.terms":"\u0443\u0441\u043b\u043e\u0432\u0438\u044f","create.unlockExistWallet":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a","create.yourKeyStore":"\u0412\u0430\u0448 Keystore","editWallet.remove":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c","editWallet.remove.desc1":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u043d\u0430 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0435 \u043d\u0435\u0442 \u0434\u0435\u043d\u0435\u0433","editWallet.remove.desc2":", \u0442\u0430\u043a \u043a\u0430\u043a \u043d\u0435\u0442 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","editWallet.remove.removeButton":"\u0414\u0430, \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u043a\u043e\u0448\u0435\u043b\u0435\u043a","editWallet.remove.title":"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u043a\u043e\u0448\u0435\u043b\u0435\u043a?","editWallet.rename":"\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c","editWallet.rename.duplicateName":"\u041a\u043e\u0448\u0435\u043b\u0435\u043a \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442","editWallet.rename.errMsg":"\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c","editWallet.rename.title":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430","editWallet.title":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430","editWallet.createWallet":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","editWallet.unlockWallet":"\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","exchange.BTCValue":"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0432 BTC","exchange.amount":"\u0421\u0443\u043c\u043c\u0430","exchange.asset":"\u0410\u043a\u0442\u0438\u0432","exchange.availableBalance":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0439 \u0431\u0430\u043b\u0430\u043d\u0441","exchange.blockHeight":"\u0412\u044b\u0441\u043e\u0442\u0430 \u0431\u043b\u043e\u043a\u0430","exchange.buy":"\u041a\u0443\u043f\u0438\u0442\u044c","exchange.calendar.clear":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c","exchange.calendar.ok":"\u041e\u043a","exchange.calendar.today":"\u0421\u0435\u0433\u043e\u0434\u043d\u044f","exchange.chartbox.depth":"\u0413\u043b\u0443\u0431\u0438\u043d\u0430","exchange.coin":"\u041a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u0430","exchange.date":"\u0414\u0430\u0442\u0430","exchange.estimatedValue":"\u041e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c","exchange.filled":"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e","exchange.from":"\u041e\u0442","exchange.frozen":"\u0417\u0430\u043c\u043e\u0440\u043e\u0436\u0435\u043d\u043e","exchange.hideAllCanceled":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0441\u0435 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0435","exchange.hideOtherPairs":"\u0421\u043a\u0440\u044b\u0442\u044c \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u044b","exchange.inOrder":"\u0412 \u043e\u0440\u0434\u0435\u0440\u0430\u0445","exchange.index.books":"\u041a\u043d\u0438\u0433\u0430 \u043e\u0440\u0434\u0435\u0440\u043e\u0432","exchange.index.chart":"\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430","exchange.max":"\u041c\u0430\u043a\u0441","exchange.min":"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u043e\u0440\u0433\u043e\u0432\u0430\u044f \u0435\u0434\u0438\u043d\u0438\u0446\u0430:","exchange.name":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435","exchange.notional":"\u0423\u0441\u043b\u043e\u0432\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430","exchange.oneDay":"1 \u0434\u0435\u043d\u044c","exchange.oneMonth":"1 \u043c\u0435\u0441\u044f\u0446","exchange.oneWeek":"1 \u043d\u0435\u0434\u0435\u043b\u044f","exchange.pair":"\u041f\u0430\u0440\u0430","exchange.placeOrder.bestAsk":"\u041b\u0443\u0447\u0448\u0435\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435","exchange.placeOrder.bestBid":"\u041b\u0443\u0447\u0448\u0438\u0439 \u0441\u043f\u0440\u043e\u0441","exchange.placeOrder.limitOrder":"\u041b\u0438\u043c\u0438\u0442 \u043e\u0440\u0434\u0435\u0440","exchange.placeOrder.noEnoughBalance":"\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0431\u0430\u043b\u0430\u043d\u0441\u0430","exchange.placeOrder.orderError":"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0440\u0434\u0435\u0440\u0430","exchange.placeOrder.orderPriceHigher":"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0432\u0430\u0448\u0435\u0433\u043e \u043e\u0440\u0434\u0435\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u043d\u0430 2% \u0432\u044b\u0448\u0435, \u0447\u0435\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0440\u044b\u043d\u043e\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0431\u0443\u0434\u044c\u0442\u0435 \u043e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u044b.","exchange.placeOrder.orderPriceLow":"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0432\u0430\u0448\u0435\u0433\u043e \u043e\u0440\u0434\u0435\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u043d\u0430 2% \u043d\u0438\u0436\u0435, \u0447\u0435\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0440\u044b\u043d\u043e\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0431\u0443\u0434\u044c\u0442\u0435 \u043e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u044b.","exchange.placeOrder.pleaseInputCorrectAmount":"Please input correct amount","exchange.placeOrder.buy.correctAmountForbep8":"The amount should be > 1","exchange.placeOrder.sell.correctAmountForbep8":"The amount should be > 1 or = balances","exchange.placeOrder.pleaseInputCorrectPrice":"Please input correct price","exchange.placeOrder.roundSizeErrorMsg":"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e {side} {baseAsset}, \u043a\u0440\u0430\u0442\u043d\u0443\u044e {lotSize}","exchange.placeOrder.successNotifyMsg":"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u043b\u0438\u043c\u0438\u0442 \u043e\u0440\u0434\u0435\u0440 \u0434\u043b\u044f {side} {quantity} {quoteAsset}","exchange.placeOrder.successNotifyTitle":"\u041b\u0438\u043c\u0438\u0442{side} \u043e\u0440\u0434\u0435\u0440 \u0441\u043e\u0437\u0434\u0430\u043d","exchange.pleaseSelectDate":"\u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443","exchange.pleaseUnlockWallet.btn":"\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","exchange.pleaseUnlockWallet.createNewWallet":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a","exchange.pleaseUnlockWallet.desc":"\u0423\u043f\u0441! \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u0432\u043e\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a","exchange.pleaseUnlockWallet.noWallet":"\u041d\u0435\u0442 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430?","exchange.price":"\u0426\u0435\u043d\u0430","exchange.search":"\u041f\u043e\u0438\u0441\u043a","exchange.sell":"\u041f\u0440\u043e\u0434\u0430\u0442\u044c","exchange.side":"\u0421\u0442\u043e\u0440\u043e\u043d\u0430","exchange.status":"\u0421\u0442\u0430\u0442\u0443\u0441","exchange.symbolPriceInfo.high":"\u041c\u0430\u043a\u0441","exchange.symbolPriceInfo.lastPrice":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0446\u0435\u043d\u0430","exchange.symbolPriceInfo.low":"\u041c\u0438\u043d","exchange.symbolPriceInfo.twentyFourHChange":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0437\u0430 24\u0447","exchange.symbolPriceInfo.twentyFourHHigh":"\u041c\u0430\u043a\u0441 \u0437\u0430 24\u0447","exchange.symbolPriceInfo.twentyFourHLow":"\u041c\u0438\u043d \u0437\u0430 24\u0447","exchange.symbolPriceInfo.twentyFourHVolume":"\u041e\u0431\u044a\u0435\u043c \u0442\u043e\u0440\u0433\u043e\u0432 \u0437\u0430 24\u0447","exchange.symbolPriceInfo.vol":"\u041e\u0431\u044a\u0435\u043c","exchange.threeMonths":"3 \u043c\u0435\u0441\u044f\u0446\u0430","exchange.time.from":"\u041e\u0442","exchange.to":"\u0414\u043e","exchange.total":"\u0418\u0442\u043e\u0433\u043e","exchange.totalBalance":"\u041e\u0431\u0449\u0438\u0439 \u0431\u0430\u043b\u0430\u043d\u0441","exchange.tradingHistory.time":"\u0412\u0440\u0435\u043c\u044f","exchange.tradingHistory.title":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0441\u0434\u0435\u043b\u043e\u043a","exchange.tradingPair.change":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435","exchange.tradingPair.pair":"\u041f\u0430\u0440\u0430","exchange.tradingPair.price":"\u0426\u0435\u043d\u0430","exchange.tradingPair.search":"\u041f\u043e\u0438\u0441\u043a","exchange.tradingPair.volume":"\u041e\u0431\u044a\u0435\u043c","exchange.txFee":"TxFee","exchange.txHash":"\u0425\u044d\u0448 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438","exchange.type":"\u0422\u0438\u043f","exchange.value":"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c","exchange.miniToken.warning.title":"Do your own research","exchange.miniToken.warning.content1":"MiniToken is a special token type on Binance Chain. The information and materials provided here, whether or not provided on Binance\'s website/webpages, on third party websites, in marketing materials, newsletters or any form of publication are provided for general information only. They do not constitute an offer to buy or sell any products offered or advertised. Likewise, they are not to be taken as investment, financial or trading advice. Any expression of opinion is personal to the author and there is no guarantee of completeness or accuracy.","exchange.miniToken.warning.content2":"Binance shall not be responsible for any losses arising from investment based on any information made available via any of Binance\'s social media accounts or websites. All users or new participants, regardless of experience and knowledge are strongly recommended to do their own research prior to trying out any of the products we offer. If the user is still unsure after research, he/she is encouraged to avoid the product entirely. The user acknowledges that some of the products offered by Binance could be on the riskier spectrum. For avoidance of doubt, all users are encouraged to read the Terms of Use clearly.","exchange.miniToken.warning.button1":"\u041f\u043e\u043d\u044f\u0442\u043d\u043e","exchange.miniToken.warning.fully.understand":"I fully understand, do not show it anymore.","fees.fee":"\u041a\u043e\u043c\u0438\u0441\u0441\u0438\u044f","fees.height":"\u0412\u044b\u0441\u043e\u0442\u0430","fees.note":"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435","footer.terms":"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f","footer.privacy":"Privacy","googledrive.create.nameExist":"\u0418\u043c\u044f \u0437\u0430\u043d\u044f\u0442\u043e","header.balances":"\u0411\u0430\u043b\u0430\u043d\u0441\u044b","header.createWallet":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","header.exchange":"\u0411\u0438\u0440\u0436\u0430","header.exchange.bep2":"Tokens (BEP2)","header.exchange.bep8":"MiniTokens (BEP8)","header.exchange.menu.bep2":"Tokens (BEP2)","header.exchange.menu.bep8":"MiniTokens (BEP8)","header.explorer":"\u041e\u0431\u043e\u0437\u0440\u0435\u0432\u0430\u0442\u0435\u043b\u044c","header.faq":"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f / FAQ","header.blog":"\u0411\u043b\u043e\u0433","header.feeHistory":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0439","header.forums":"\u0424\u043e\u0440\u0443\u043c\u044b","header.mainnet":"\u041c\u0430\u0438\u043d\u043d\u0435\u0442","header.openOrders":"\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0435 \u043e\u0440\u0434\u0435\u0440\u0430","header.orderHistory":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0440\u0434\u0435\u0440\u043e\u0432","header.orders":"\u041e\u0440\u0434\u0435\u0440\u0430","header.testnet":"\u0442\u0435\u0441\u0442\u043d\u0435\u0442","header.tradeHistory":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0441\u0434\u0435\u043b\u043e\u043a","header.transactions":"\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438","header.unlockWallet":"\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","header.user.changeWallet":"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","header.user.closeWallet":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","header.user.coinomi":"Coinomi ","header.user.copyAddress":"\u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0434\u0440\u0435\u0441","header.user.copySuccess":"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e!","header.user.createNewWallet":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a","header.user.exportKeystoreFile":"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 Keystore-\u0424\u0430\u0439\u043b\u0430","header.user.goToExplorer":"\u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0431\u043e\u0437\u0440\u0435\u0432\u0430\u0442\u0435\u043b\u044e","header.user.infinito":"Infinito ","header.user.ledger":"Ledger ","header.user.trezor":"\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e Trezor","header.user.wallet":"\u041a\u043e\u0448\u0435\u043b\u0435\u043a","header.user.walletConnect":"WalletConnect ","header.youWantCloseWallet":"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a?","home.aboutPage.desc1.line1":"Binance Chain - \u044d\u0442\u043e \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d, \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 Binance.","home.aboutPage.desc1.line2":"\u042d\u0442\u043e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e, \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u0438 \u043f\u043e\u0447\u0442\u0438 \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 (\u044d\u0442\u043e \u0431\u044b\u0441\u0442\u0440\u043e).","home.aboutPage.desc2.line1":"Binance DEX - \u044d\u0442\u043e \u0434\u0435\u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0440\u0434\u0435\u0440\u043e\u0432,","home.aboutPage.desc2.line2":"\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0439 \u043d\u0430 \u0431\u0430\u0437\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 Binance Chain.","home.aboutPage.desc3.line1":"Binance DEX \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u043c \u0440\u044b\u043d\u043a\u043e\u043c \u0434\u043b\u044f \u0432\u044b\u043f\u0443\u0441\u043a\u0430","home.aboutPage.desc3.line2":"\u0438 \u043e\u0431\u043c\u0435\u043d\u0430 \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0445 \u0430\u043a\u0442\u0438\u0432\u043e\u0432, \u0438 \u043d\u0438\u043a\u0442\u043e, \u043a\u0440\u043e\u043c\u0435 \u0432\u0430\u0441, \u043d\u0435 \u0432\u043b\u0430\u0434\u0435\u0435\u0442 \u0432\u0430\u0448\u0438\u043c\u0438 \u043a\u043b\u044e\u0447\u0430\u043c\u0438. \u0422\u043e\u0440\u0433\u043e\u0432\u043b\u044f \u043b\u044e\u0431\u0438\u043c\u044b\u043c\u0438 \u0430\u043a\u0442\u0438\u0432\u0430\u043c\u0438 \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u0431\u044b\u043b\u0430 \u0431\u043e\u043b\u0435\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0439.","home.aboutPage.title":"\u041e Binance DEX","home.binanceDex":"Binance DEX","home.processPage.aboutBalance":"\u041e Binance DEX","home.processPage.create":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c","home.processPage.createDesc":"\u0412\u043e-\u043f\u0435\u0440\u0432\u044b\u0445, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u0434\u0440\u0435\u0441 Binance Chain.","home.processPage.createWallet":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a","home.processPage.getStart":"\u041d\u0430\u0447\u0430\u0442\u044c \u0441 Binance DEX","home.processPage.go":"\u0412\u043f\u0435\u0440\u0435\u0434","home.processPage.placeOrders":"\u0420\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043e\u0440\u0434\u0435\u0440\u0430","home.processPage.placeOrdersDesc":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0432\u0435\u0431-\u043a\u043e\u0448\u0435\u043b\u0435\u043a \u0438\u043b\u0438 API \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0438 \u043e\u0442\u043c\u0435\u043d\u044b \u043e\u0440\u0434\u0435\u0440\u043e\u0432.","home.processPage.transferAssets":"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0430\u043a\u0442\u0438\u0432\u044b","home.processPage.transferAssetsDesc":"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0430\u0434\u0440\u0435\u0441\u0430 Binance Chain, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d \u043b\u044e\u0431\u044b\u043c \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u043e\u043c, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0449\u0438\u043c Binance Chain, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 BNB \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u043a\u0442\u0438\u0432\u044b, \u0445\u0440\u0430\u043d\u044f\u0449\u0438\u0435\u0441\u044f \u043d\u0430 \u0434\u0430\u043d\u043d\u043e\u043c \u0430\u0434\u0440\u0435\u0441\u0435.","home.processPage.unlock":"\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c","home.processPage.unlockDesc":"\u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430","home.processPage.unlockMode1":"WalletConnect","home.processPage.unlockMode2":"Ledger","home.processPage.unlockMode3":"Keystore File + \u041f\u0430\u0440\u043e\u043b\u044c","home.processPage.unlockMode4":"\u041c\u043d\u0435\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0444\u0440\u0430\u0437\u0430","home.processPage.unlockWallet":"\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","home.startPage.createWallet":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","home.startPage.desc1":"\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439 \u0434\u0435\u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043e\u0431\u043c\u0435\u043d \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u043c\u0438 \u0430\u043a\u0442\u0438\u0432\u0430\u043c\u0438","home.startPage.desc2":"\u041d\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442 \u0442\u043e\u0440\u0433\u043e\u0432\u043b\u0438 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u0430\u043c\u0438.","home.startPage.getTestBNB":"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0435 BNB","home.startPage.startTrading":"\u041d\u0430\u0447\u0430\u0442\u044c \u0442\u043e\u0440\u0433\u043e\u0432\u043b\u044e","home.whyPage.community":"\u042d\u0442\u043e \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430","home.whyPage.communityDesc":"\u0411\u0438\u0440\u0436\u0430 Binance DEX \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0430 \u043d\u0430 \u0440\u0435\u0436\u0438\u043c\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f On-Chain \u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445 \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c.","home.whyPage.decentralized":"\u0414\u0435\u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e","home.whyPage.decentralizedDesc":"\u041e\u043f\u044b\u0442 \u0442\u043e\u0440\u0433\u043e\u0432\u043b\u0438 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0441 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430, \u0431\u0435\u0437 \u0443\u0447\u0430\u0441\u0442\u0438\u044f \u0442\u0440\u0435\u0442\u044c\u0435\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0438\u043b\u0438 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0440\u0433\u0430\u043d\u0430.","home.whyPage.getStarted":"\u041d\u0430\u0447\u0430\u0442\u044c","home.whyPage.lowTradingFees":"\u041d\u0438\u0437\u043a\u0438\u0435 \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0435 \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0438","home.whyPage.lowTradingFeesDesc":"\u0422\u043e\u0440\u0433\u0443\u0439\u0442\u0435 \u0431\u0435\u0437 \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0439 \u0437\u0430 \u0441\u043d\u044f\u0442\u0438\u0435 \u0438 \u0432\u043d\u0435\u0441\u0435\u043d\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438\u043b\u0438 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043e\u0440\u0434\u0435\u0440\u043e\u0432 - \u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043b\u0438 BNB \u043f\u043e\u043b\u0443\u0447\u0430\u044e\u0442 \u0433\u043e\u0440\u0430\u0437\u0434\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432.","home.whyPage.safeAndSecure":"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u0438 \u043d\u0430\u0434\u0435\u0436\u043d\u043e","home.whyPage.safeAndSecureDesc":"\u0412\u0430\u0448\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u043d\u0430 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0435 \u0441 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u043c \u043a\u043b\u044e\u0447\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u044b.","home.whyPage.title":"\u041f\u043e\u0447\u0435\u043c\u0443 Binance DEX","home.whyPage.userFriendly":"\u0423\u0434\u043e\u0431\u0435\u043d \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439","home.whyPage.userFriendlyDesc":"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0438 \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0432\u043e\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a \u0438 \u0432\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0442\u043e\u0440\u0433\u043e\u0432\u043b\u044e. \u041d\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0438\u043b\u0438 \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u044c \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430.","inputPassword.passwordRule":"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c","inputPassword.passwordRule1":"8 \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432","inputPassword.passwordRule2":"\u0417\u0430\u0433\u043b\u0430\u0432\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430, \u0441\u0438\u043c\u0432\u043e\u043b \u0438 \u0447\u0438\u0441\u043b\u043e","inputPassword.setANewPassword":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c","landing.connectWallet":"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","landing.createWallet":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","landing.desc1":"Binance DEX","landing.desc2":"\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0430\u044f \u0434\u0435\u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0431\u0438\u0440\u0436\u0430 \u0434\u043b\u044f \u043e\u0431\u043c\u0435\u043d\u0430 \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0445 \u0430\u043a\u0442\u0438\u0432\u043e\u0432. \u0417\u0434\u0435\u0441\u044c \u043d\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442 \u0442\u043e\u0440\u0433\u043e\u0432\u043b\u0438 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u043e\u0439.","landing.footer.fee":"\u041a\u043e\u043c\u0438\u0441\u0441\u0438\u044f","landing.footer.terms":"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f","landing.footer.privacy":"Privacy","landing.how.connect":"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c","landing.how.connect.desc":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 Binance DEX \u043d\u0430\u043c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0449\u0435, \u0447\u0435\u043c \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u043f\u043e\u044f\u0432\u0438\u0432\u0448\u0438\u0445\u0441\u044f \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432. \u0412\u0441\u0451 \u0433\u043e\u0442\u043e\u0432\u043e.","landing.how.create":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c","landing.how.create.desc":"Binance DEX \u0434\u0430\u0435\u0442 \u0432\u0430\u043c \u0441\u0432\u043e\u0431\u043e\u0434\u0443 \u0432\u044b\u0431\u043e\u0440\u0430 \u043c\u0435\u0436\u0434\u0443 \u0443\u0434\u043e\u0431\u043d\u044b\u043c\u0438 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430\u043c\u0438 \u043a\u043b\u044e\u0447\u0435\u0439 \u0438 \u0443\u043b\u044c\u0442\u0440\u0430-\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u043c\u0438 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430\u043c\u0438 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u044b\u0445 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u043e\u0432.","landing.how.step":"\u0448\u0430\u0433","landing.how.title":"\u041a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c","landing.how.trade":"\u0422\u043e\u0440\u0433\u043e\u0432\u043b\u044f","landing.how.trade.desc":"\u041d\u0430\u0448\u0430 \u0446\u0435\u043b\u044c - \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0442\u043e\u0440\u0433\u043e\u0432\u043b\u044e \u043f\u043b\u0430\u0432\u043d\u043e\u0439 \u0438 \u043d\u0435\u043e\u0442\u043b\u0438\u0447\u0438\u043c\u043e\u0439 \u043e\u0442 Binance.com. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043c\u044b \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u043b\u0443\u0447\u0448\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0435, \u0447\u0442\u043e \u0432\u044b \u043b\u044e\u0431\u0438\u0442\u0435, \u0431\u044b\u043b\u043e \u0438 \u043d\u0430 Binance DEX.","landing.markets":"\u0420\u044b\u043d\u043a\u0438","landing.markets.24HChange":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0437\u0430 24\u0447","landing.markets.24HVolume":"\u041e\u0431\u044a\u0435\u043c \u0442\u043e\u0440\u0433\u043e\u0432 \u0437\u0430 24\u0447","landing.markets.lastPrice":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0446\u0435\u043d\u0430","landing.markets.pair":"\u041f\u0430\u0440\u0430","landing.markets.searchPlaceholder":"\u0418\u0441\u043a\u0430\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u043e\u043d\u0435\u0442\u044b","landing.menu.balances":"\u0411\u0430\u043b\u0430\u043d\u0441\u044b","landing.menu.changeWallet":"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","landing.menu.closeWallet":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","landing.menu.community":"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e","landing.menu.copyAddress":"\u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0434\u0440\u0435\u0441","landing.menu.docs":"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b","landing.menu.exchange":"\u0411\u0438\u0440\u0436\u0430","landing.menu.explorer":"\u041e\u0431\u043e\u0437\u0440\u0435\u0432\u0430\u0442\u0435\u043b\u044c","landing.menu.orders":"\u041e\u0440\u0434\u0435\u0440\u0430","landing.menu.orders.feeHistory":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0438","landing.menu.orders.openOrders":"\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0435 \u043e\u0440\u0434\u0435\u0440\u0430","landing.menu.orders.orderHistory":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0440\u0434\u0435\u0440\u043e\u0432","landing.menu.orders.tradeHistory":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0441\u0434\u0435\u043b\u043e\u043a","landing.menu.testnet":"\u0422\u0435\u0441\u0442\u043d\u0435\u0442","landing.menu.tools":"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b","landing.menu.transaction":"\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f","landing.menu.wallet":"\u041a\u043e\u0448\u0435\u043b\u0435\u043a","landing.startTrading":"\u041d\u0430\u0447\u0430\u0442\u044c \u0442\u043e\u0440\u0433\u043e\u0432\u043b\u044e","landing.trust.activeAddress":"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0438","landing.trust.activeAddress.desc":"\u0418\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u0438 \u0442\u043e\u0440\u0433\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 Binance DEX \u0434\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u043b\u044e\u0434\u0435\u0439, \u0447\u0435\u043c \u043b\u044e\u0431\u044b\u043c \u0434\u0440\u0443\u0433\u0438\u043c \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u043e\u0432\u044b\u043c \u0440\u0435\u0448\u0435\u043d\u0438\u044f\u043c.","landing.trust.pairs":"\u041f\u0430\u0440\u044b","landing.trust.pairs.desc":"Binance DEX \u0434\u0430\u0435\u0442 \u0432\u0430\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0442\u043e\u0440\u0433\u043e\u0432\u043b\u0438, \u0441 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u043d\u043e\u0432\u043e\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u043a\u0430\u0436\u0434\u0443\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","landing.trust.rank":"\u0420\u0430\u043d\u0433","landing.trust.rank.desc":"Binance DEX - \u0434\u0435\u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u043d\u0430\u044f \u0431\u0438\u0440\u0436\u0430 \u21161 \u043f\u043e \u043e\u0431\u044a\u0435\u043c\u0443 \u0442\u043e\u0440\u0433\u043e\u0432 \u043d\u0430 Coinmarketcap.","landing.trust.title":"\u041f\u043e\u0447\u0435\u043c\u0443 \u043b\u044e\u0434\u0438 \u0434\u043e\u0432\u0435\u0440\u044f\u044e\u0442 \u043d\u0430\u043c","landing.why.competitive":"\u041a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e","landing.why.competitive.desc":"\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 BNB \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0445 \u0441\u0431\u043e\u0440\u043e\u0432 \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u044f \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u0435\u0433\u043e 0,04%. \u042d\u0442\u043e \u043f\u043e\u0447\u0442\u0438 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0430 \u043e\u0442 \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0439 \u043d\u0430 Binance.com, \u0432\u0435\u0434\u0443\u0449\u0435\u0439 \u0432 \u043c\u0438\u0440\u0435 \u0431\u0438\u0440\u0436\u0438 \u043f\u043e \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u043c \u0441\u0431\u043e\u0440\u0430\u043c.","landing.why.fast":"\u0411\u044b\u0441\u0442\u0440\u043e","landing.why.fast.desc":"\u0411\u043b\u043e\u043a\u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043a\u0430\u0436\u0434\u0443\u044e \u0441\u0435\u043a\u0443\u043d\u0434\u0443, \u0438 \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0441\u0434\u0435\u043b\u043a\u0438 \u0432 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0435 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432 \u043f\u0440\u043e\u0448\u043b\u043e\u043c. \u0412\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u0432\u0441\u0435\u043c\u0438 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u043c\u0438 DEX \u0431\u0435\u0437 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u043e\u0432.","landing.why.secure":"\u041d\u0430\u0434\u0435\u0436\u043d\u043e","landing.why.secure.desc":"Binance DEX \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c \u043d\u0430 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e \u043d\u043e\u0432\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c. P2P-\u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b \u0438 \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0435 \u0441\u0434\u0435\u043b\u043a\u0438 \u043e\u0437\u043d\u0430\u0447\u0430\u044e\u0442 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0443\u043b\u0435\u0432\u0443\u044e \u043f\u043e\u0434\u0432\u0435\u0440\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0443\u0433\u0440\u043e\u0437\u0430\u043c \u0434\u043b\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438.","landing.why.title":"\u041f\u043e\u0447\u0435\u043c\u0443 Binance DEX","lang.menu.copyAddress":" ","noContent.descPrefix":"\u0423 \u0412\u0430\u0441 \u043d\u0435\u0442 ","openOrders.areYourTrue":"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435","openOrders.cancel":"\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","openOrders.cancel all":"\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0441\u0435","openOrders.cancel buy":"\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0443","openOrders.cancel sell":"\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0430\u0436\u0443","openOrders.cancelAll":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0441\u0435","openOrders.cancelBuy":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0443","openOrders.cancelOrder":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0440\u0434\u0435\u0440","openOrders.cancelOrders":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0440\u0434\u0435\u0440\u0430","openOrders.cancelPartialSuccess":"\u041e\u0442\u043c\u0435\u043d\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u0430 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e","openOrders.cancelSell":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0430\u0436\u0443","openOrders.cancelSuccess":"\u041e\u0442\u043c\u0435\u043d\u0435\u043d\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e","openOrders.keepOrder":"\u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u043e\u0440\u0434\u0435\u0440","openOrders.keepOrders":"\u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u043e\u0440\u0434\u0435\u0440\u0430","openOrders.noBuyOpenOrders":"\u043d\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0445 \u043e\u0440\u0434\u0435\u0440\u043e\u0432 \u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443","openOrders.noOpenOrders":"\u043d\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0445 \u043e\u0440\u0434\u0435\u0440\u043e\u0432","openOrders.noSellOpenOrders":"\u043d\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0445 \u043e\u0440\u0434\u0435\u0440\u043e\u0432 \u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0443","openOrders.title":"\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0435 \u043e\u0440\u0434\u0435\u0440\u0430","orderForm.amount":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e","orderForm.avb":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e","orderForm.buy":"\u041a\u0443\u043f\u0438\u0442\u044c","orderForm.equivalent":"\u042d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442","orderForm.price":"\u0426\u0435\u043d\u0430","orderForm.sell":"\u041f\u0440\u043e\u0434\u0430\u0442\u044c","orderForm.total":"\u0412\u0441\u0435\u0433\u043e","orderHistory.openHistory":"\u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0440\u0434\u0435\u0440\u043e\u0432","orderHistory.title":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0440\u0434\u0435\u0440\u043e\u0432","orderHistory.tradeId":"ID \u0441\u0434\u0435\u043b\u043a\u0438","orderHistory.tradingPrice":"\u0422\u043e\u0440\u0433\u043e\u0432\u0430\u044f \u0446\u0435\u043d\u0430","orderHistory.tradingTotal":"\u0422\u043e\u0440\u0433\u043e\u0432\u0430\u044f \u0441\u0443\u043c\u043c\u0430","privateKeyModal.backupText":"\u0421\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043d\u0438\u0436\u0435 \u0442\u0435\u043a\u0441\u0442\u0430 \u043d\u0430 \u0431\u0443\u043c\u0430\u0433\u0435 \u0438 \u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e \u0432 \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u043e\u043c \u0438 \u0432 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435.","privateKeyModal.title":"\u0412\u0430\u0448 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447","testnet.binanceChainExplorerGuide":"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u0434\u043b\u044f Binance Chain Explorer","testnet.fastAndSecureDesc":"\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439 \u0434\u0435\u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043e\u0431\u043c\u0435\u043d \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u043c\u0438 \u0430\u043a\u0442\u0438\u0432\u0430\u043c\u0438","testnet.fundingYourTestnetAccount":"\u041f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0432\u0430\u0448\u0435\u0433\u043e Testnet-\u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430","testnet.howToAccessYourWallet":"\u041a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0443","testnet.howToCreateAWallet":"\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","testnet.interfaceGuide":"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e","testnet.thingsToAvoid":"\u0412\u0435\u0449\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0438\u0437\u0431\u0435\u0433\u0430\u0442\u044c","testnet.title":"\u0414\u0435\u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0431\u0438\u0440\u0436\u0430 Binance (TESTNET)","token.issue.bep2Title":"BEP-2 Token","token.issue.bep2Desc":"BEP-2 is a technical standard for the issuance and implementation of tokens on the Binance Chain.","token.issue.bep8Title":"BEP-8 Token (Mini-BEP2)","token.issue.bep8Desc":"BEP-8 is a technical standard for the issuance and implementation of tokens on the Binance Chain.","token.issue.title":"Token Issuance","token.issue.confirmationModal.title":"Check Token Contract","token.issue.confirmationModal.confirm":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0441\u0435","token.issue.tokenNameLabel":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u0430","token.issue.tokenNameDesc":"Token names must have between 3 and 32 characters.","token.issue.symbolLabel":"\u0421\u0438\u043c\u0432\u043e\u043b","token.issue.maxSupplyLabel":"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435","token.issue.symbolDescLength":"Symbols must have between 2 and 5 characters.","token.issue.totalSuppyHeader":"Select Token Max Supply","token.issue.totalSuppyDesc":"Max supply is the maximum number of tokens that can be created","token.issue.supplyLabel":"Supply","token.issue.supplyDesc":"The number of tokens you need to issue","token.issue.prev":"\u041c\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u043a\u0435\u043d\u043e\u0432","token.issue.updateTokenInfoHeader":"Set the URL to update token information(Optional)","token.issue.updateTokenInfoHeaderTips":"The URL will return JSON-formatted information that will be an introduction to your MiniToken","token.issue.fillInRequestedUrlLabel":"Fill in the requested URL","token.issue.issuanceFee":"issuance fee","token.list.title":"\u041c\u043e\u0438 \u0442\u043e\u043a\u0435\u043d\u044b","token.issueModal.mintable":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f","token.issueModal.nonMintable":"Non-mintable","token.issueModal.name":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u0430","token.issueModal.nameErrMsg":"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u0430 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e 32 \u0441\u0438\u043c\u0432\u043e\u043b\u0430\u043c\u0438","token.issueModal.symbol":"\u0421\u0438\u043c\u0432\u043e\u043b","token.issueModal.symbolErrMsg":"\u0441\u0438\u043c\u0432\u043e\u043b \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0431\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u044b\u043c, \u0434\u043b\u0438\u043d\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c 3~8","token.issueModal.title":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u0430","token.issueModal.totalSupply":"\u041e\u0431\u0449\u0435\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435","token.issueModal.totalSupplyErrMsg":"\u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f","token.listModal.address":"\u0410\u0434\u0440\u0435\u0441","token.listModal.confirm":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c","token.listModal.initPrice":"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u0446\u0435\u043d\u0430","token.listModal.proposalId":"ID \u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f","token.listModal.quoteAsset":"\u041a\u043e\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u044b\u0439 \u0430\u043a\u0442\u0438\u0432","token.listModal.title":"\u041b\u0438\u0441\u0442\u0438\u043d\u0433 \u0442\u043e\u043a\u0435\u043d\u0430","token.listModal.tokenName":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u0430","token.main.burn":"\u0421\u0436\u0438\u0433\u0430\u043d\u0438\u0435","token.main.freeze":"\u0417\u0430\u043c\u043e\u0440\u043e\u0437\u0438\u0442\u044c","token.main.issueToken":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u0430","token.main.list":"\u041b\u0438\u0441\u0442\u0438\u043d\u0433","token.main.listSuccessmsg":"\u0423\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u043b\u0438\u0441\u0442\u0438\u043d\u0433","token.main.mint":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c","token.main.proposal":"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435","token.main.submitListFirst":"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u044f\u0432\u043a\u0443 \u0434\u043b\u044f \u043b\u0438\u0441\u0442\u0438\u043d\u0433\u0430","token.main.submitSuccessmsg":"\u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u043b\u0438\u0441\u0442\u0438\u043d\u0433 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e","token.main.title":"\u041c\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u043a\u0435\u043d\u043e\u0432","token.main.unfreeze":"\u0420\u0430\u0437\u043c\u043e\u0440\u043e\u0437\u0438\u0442\u044c","token.proposalModal.address":"\u0410\u0434\u0440\u0435\u0441","token.proposalModal.baseAsset":"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u0430\u043a\u0442\u0438\u0432","token.proposalModal.desc":"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435","token.proposalModal.expireTime":"\u0412\u0440\u0435\u043c\u044f \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u044f","token.proposalModal.hours":"\u0427\u0430\u0441\u044b","token.proposalModal.initDeposit":"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0435\u043f\u043e\u0437\u0438\u0442","token.proposalModal.initPrice":"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u0446\u0435\u043d\u0430","token.proposalModal.initPriceErr":"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u0446\u0435\u043d\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u0443\u043b\u0435\u0432\u043e\u0439","token.proposalModal.initPriceErr2":"\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u0446\u0435\u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 0","token.proposalModal.quoteAsset":"\u041a\u043e\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u044b\u0439 \u0430\u043a\u0442\u0438\u0432","token.proposalModal.title":"\u0417\u0430\u044f\u0432\u043a\u0430 \u0434\u043b\u044f \u043b\u0438\u0441\u0442\u0438\u043d\u0433\u0430","token.proposalModal.titleErr":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c","token.proposalModal.titleErr2":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u0438\u043d\u043d\u0435\u0435 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0439 \u0434\u043b\u0438\u043d\u044b \u0432 128","token.proposalModal.votingPeriod":"\u041f\u0435\u0440\u0438\u043e\u0434 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u044f","token.table.col.mintable":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f","token.table.col.name":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435","token.table.col.symbol":"\u0421\u0438\u043c\u0432\u043e\u043b","token.table.col.tokenType":"\u0422\u0438\u043f ","token.table.col.totalSupply":"\u041e\u0431\u0449\u0435\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435","token.tokenModal.address":"\u0410\u0434\u0440\u0435\u0441","token.tokenModal.amount":"\u0421\u0443\u043c\u043c\u0430","token.tokenModal.available":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e","token.tokenModal.burnTitle":"\u0421\u0436\u0438\u0433\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u043e\u0432","token.tokenModal.confirm":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c","token.tokenModal.desc":" ","token.tokenModal.freezeTitle":"\u0417\u0430\u043c\u043e\u0440\u0430\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u043e\u0432","token.tokenModal.mintTitle":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u043e\u0432","token.tokenModal.name":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435","token.tokenModal.unfreezeTitle":"\u0420\u0430\u0437\u043c\u043e\u0440\u043e\u0437\u0438\u0442\u044c \u0442\u043e\u043a\u0435\u043d","token.list.tradepair.exist":"Trade pair existed","token.warning":"We do not support walletconnect compatible wallets currently and for security reason, Ledger is the best choice to Issue/List/Mint/Burn Token","tradeHistory.tradeHistory":"\u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0441\u0434\u0435\u043b\u043e\u043a","transaction.here":"\u0437\u0434\u0435\u0441\u044c","transaction.notes":"\u041d\u0435 \u0432\u0441\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b \u043d\u0438\u0436\u0435. \u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u043d\u043e\u0439 \u0438\u0441\u0442\u043e\u0440\u0438\u0438, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c","txHistory.here":"\u0437\u0434\u0435\u0441\u044c","txHistory.notEveryTransactionIsIncludedBelow":"\u041d\u0435 \u0432\u0441\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b \u043d\u0438\u0436\u0435. \u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u043d\u043e\u0439 \u0438\u0441\u0442\u043e\u0440\u0438\u0438, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u0441\u044e\u0434\u0430.","txHistory.title":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439","unlock.connectAddress.enterYourAddress":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0430\u0434\u0440\u0435\u0441","unlock.connectAddress.invalidAddress":"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441","unlock.connectAddress.viewOnlyMode":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0434\u043b\u044f \u0440\u0435\u0436\u0438\u043c\u0430 \xab\u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\xbb","unlock.createNewWallet":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a","unlock.google.chooseWallet":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u043e\u0432:","unlock.google.logIn":"\u0412\u043e\u0439\u0442\u0438","unlock.google.notLoggedIn":"\u0412\u044b \u043d\u0435 \u0432\u043e\u0448\u043b\u0438 \u0432 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 Google","unlock.google.signedInAs":"\u0412\u044b \u0432\u043e\u0448\u043b\u0438 \u043a\u0430\u043a","unlock.googledrive.editWallet":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0435","unlock.googledrive.wallets":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u043e\u0432, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c:","unlock.index.selectUnlockType":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435, \u043a\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0432\u044b \u0445\u043e\u0442\u0435\u043b\u0438 \u0431\u044b \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c","unlock.index.title":"\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a","unlock.keystore.enterYourWalletPass":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430","unlock.keystore.paste":"\u0418\u043b\u0438 \u0432\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0444\u0430\u0439\u043b\u0430 Keystore","unlock.keystore.select":"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430 \u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c","unlock.keystore.upload":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c Keystore \u0444\u0430\u0439\u043b","unlock.ledger.appInstallation":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f","unlock.ledger.binanceChainReady":"Binance Chain Ready","unlock.ledger.connectToLedger":"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a Ledger","unlock.ledger.enterPINCode":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 PIN-\u043a\u043e\u0434","unlock.ledger.getTheApp":"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435","unlock.ledger.havingConnectionIssues":"\u0418\u043c\u0435\u044e\u0442\u0441\u044f \u0442\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u0438 \u0441 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c?","unlock.ledger.mustBeOnScreen":"\u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435","unlock.ledger.openBinanceChain":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c Binance Chain","unlock.ledger.text":"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u044b\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a, \u0441\u043b\u0435\u0434\u0443\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435","unlock.ledger.title":"\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 Ledger","unlock.ledger.usageInstructions":"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u043f\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e","unlock.mnemonic.pleaseEnterYourPhrase":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0444\u0440\u0430\u0437\u0443 \u0438\u0437 24-\u0445 \u0441\u043b\u043e\u0432","unlock.mnemonic.pleaseSeparateEachWordSpace":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0442\u0434\u0435\u043b\u0438\u0442\u0435 \u043a\u0430\u0436\u0434\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u043c.","unlock.mnemonic.warning.desc1":"\u0414\u0430\u043d\u043d\u0430\u044f \u043e\u043f\u0446\u0438\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0443\u0442\u0435\u0440\u044f\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b Keystore \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c,","unlock.mnemonic.warning.desc2":"\u0438\u043b\u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0438\u0434-\u0444\u0440\u0430\u0437\u0443 \u0438\u0437 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430.","unlock.mnemonic.warning.desc3":"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435! \u041e\u043f\u0430\u0441\u043d\u043e \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0441\u0438\u0434-\u0444\u0440\u0430\u0437\u0443 \u0438\u043b\u0438 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043d\u0430 \u043b\u044e\u0431\u044b\u0445 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0441\u0430\u0439\u0442\u0430\u0445. \u0415\u0441\u043b\u0438 \u0432 \u0432\u0430\u0448\u0435\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0432\u0440\u0435\u0434\u043e\u043d\u043e\u0441\u043d\u044b\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0432\u044b \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0437\u0430\u0448\u043b\u0438 \u043d\u0430 \u0444\u0438\u0448\u0438\u043d\u0433\u043e\u0432\u044b\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442, \u0432\u0430\u0448\u0438 \u0430\u043a\u0442\u0438\u0432\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0443\u043a\u0440\u0430\u0434\u0435\u043d\u044b.","unlock.privateKey.enterYourPrivateKey":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 (\u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 hex)","unlock.privateKey.invalid":"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u0432\u0430\u043c\u0438 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0445 \u043a\u043b\u044e\u0447 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0438 \u043d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u0435\u043d. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.","unlock.privateKey.passwordInvalid":"\u042d\u0442\u043e\u0442 \u043f\u0430\u0440\u043e\u043b\u044c \u043d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u0435\u043d. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.","unlock.privateKey.warning":"\u0414\u043b\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0443\u0442\u0435\u0440\u044f\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 Keystore \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044f","unlock.privateKey.warningQuestion":"\u0412\u0432\u043e\u0434 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430 \u043d\u0430 \u043b\u044e\u0431\u044b\u0445 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0441\u0430\u0439\u0442\u0430\u0445 \u043e\u0447\u0435\u043d\u044c \u043e\u043f\u0430\u0441\u0435\u043d. \u0415\u0441\u043b\u0438 \u0432 \u0432\u0430\u0448\u0435\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0432\u0440\u0435\u0434\u043e\u043d\u043e\u0441\u043d\u044b\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0432\u044b \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0437\u0430\u0448\u043b\u0438 \u043d\u0430 \u0444\u0438\u0448\u0438\u043d\u0433\u043e\u0432\u044b\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442, \u0432\u0430\u0448\u0438 \u0430\u043a\u0442\u0438\u0432\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0443\u043a\u0440\u0430\u0434\u0435\u043d\u044b.","unlock.recover.content":"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0443 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0444\u0440\u0430\u0437\u044b, \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u043e\u0439 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430","unlock.recover.download.button":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c","unlock.recover.downloadTitle":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 Keystore \u0444\u0430\u0439\u043b","unlock.recover.password.placeholder":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0434\u0435\u0436\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c","unlock.recover.submit":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c","unlock.recover.title":"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b Keystore","unlock.recover.understand.continue":"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b Keystore","unlock.recover.word.placeholder":"\u041f\u043e\u0438\u0441\u043a","unlock.recover.wordlist.reset":"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c","unlock.recover.wordlistTitle":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043c\u043d\u0435\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0444\u0440\u0430\u0437\u0443 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u0441\u043b\u0435\u0432\u0430","unlock.support.wallets":" ","unlock.temporarySessionPassword":"\u041f\u0430\u0440\u043e\u043b\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0441\u0435\u0441\u0441\u0438\u0438","unlock.thisIsNotAValidWalletFile":"\u042d\u0442\u043e \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430","unlock.trezor.connectToTrezor":"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a Trezor","unlock.trezor.firmwareNotice":"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435: \u0427\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0441 Binance Chain, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0443 \u0432\u0430\u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435 Trezor.","unlock.trezor.notOnTestNet":"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435: \u0434\u043b\u044f \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 Trezor \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Chrome \u0438\u043b\u0438 Firefox ","unlock.trezor.title":"\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 Trezor","unlock.unlockWalletNow":"\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0448\u0435\u043b\u0435\u043a \u0441\u0435\u0439\u0447\u0430\u0441","unlock.walletConnect.notes":"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435: Trust Wallet \u0438 CoolWallet \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 Testnet Binance Chain.","unlock.walletConnect.recommendedWallet":"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0442","unlock.walletConnet.getTrustWallet":"\u0421\u043a\u0430\u0447\u0430\u0442\u044c Trust Wallet","unlock.walletConnet.qrCodeDesc1":"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c QR-\u043a\u043e\u0434 \u0434\u043b\u044f WalletConnect","unlock.walletConnet.qrCodeDesc2":"\u0423 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 WalletConnect?","unlock.walletConnet.showWalletQrCode":"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f QR-\u043a\u043e\u0434 \u043d\u0430 \u0434\u0430\u043d\u043d\u043e\u043c \u044d\u043a\u0440\u0430\u043d\u0435","unlock.walletConnet.title":"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043e","walletConnect.clickHereToUnlock":"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044c, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a","walletConnect.error":"\u041e\u0448\u0438\u0431\u043a\u0430 WalletConnect","walletConnect.errorOccur":"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 WalletConnect","walletConnect.pleaseEnsureOpenWorking":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u043e \u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442.","walletConnect.pleaseUseAWalletConnect":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 WalletConnect, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR-\u043a\u043e\u0434, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0448\u0435","walletConnect.qrCode":"QR-\u043a\u043e\u0434 \u0434\u043b\u044f WalletConnect","walletConnect.readyToConfirm":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435","walletConnect.readyToConfirmBody":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044e \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430.","walletconnect.notifycation.connectAgain":"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0441\u043d\u043e\u0432\u0430","walletconnect.notifycation.disconnectMessage":" \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u043e\u0442 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430...","walletconnect.notifycation.hide":"\u0421\u043a\u0440\u044b\u0442\u044c","local.secure.storage":"Local Secure Storage","local.keystore.replace.tips":"You already have a keystore file, make sure you have backed up before replace","staking.title":"Staking Communication","staking.goback":"Please go back to staking page manually and to play around","staking.confirm":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0441\u0435","staking.cancel":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","staking.notification.delegator.address":"Delegator address:","staking.notification.validator":"Validator:","staking.notification.amount":"\u0421\u0443\u043c\u043c\u0430:","staking.notification.network.fee":"Network fee:","staking.notification.srcValidator.address":"Source Valiator:","staking.notification.dstalidator.address":"Destination Valiator:","staking.notification.total":"\u0412\u0441\u0435\u0433\u043e:"}'
      );
    },
    515: function (e) {
      e.exports = JSON.parse(
        '{"account.footer.copyright":"\xa9 2018 - 2019 Binance.org. T\xfcm haklar\u0131 sakl\u0131d\u0131r.","account.footer.copyright.trubi":"\xa9 2018 - 2019 Trubi. T\xfcm haklar\u0131 sakl\u0131d\u0131r.","account.footer.exchange":"Borsa","account.footer.home":"Ana sayfa","balances.filteredByAsset":"Varl\u0131\u011fa g\xf6re filtrelenmi\u015f","balances.hideZeroBalance":"S\u0131f\u0131r Bakiyeleri Gizle","balances.myBalances":"Bakiyelerim","blocked.country.list":"Amerika Birle\u015fik Devletleri, \xc7in, Arnavutluk, Bosna Hersek, Belarus, Kongo (DRC), Fildi\u015fi Sahili, K\u0131r\u0131m, K\xfcba, Irak, \u0130ran, Kuzey Kore, Liberya, Makedonya, Myanmar, S\u0131rbistan, Sudan, Suriye, Zimbabve.","common.cancel":"\u0130ptal et","common.close":"Kapat","common.confirm":"Onayla ","common.connect":"Ba\u011flan","common.continue":"Devam et","common.errorOccured":"bir hata olu\u015ftu","common.goBack":"Geri Git","common.googleUnlock":"Google Drive","common.keystoreFile":"Keystore Dosyas\u0131","common.ledgerDevice":"Ledger Ayg\u0131t\u0131","common.loading":"Y\xfckleniyor","common.mnemonicPhrase":"Kurtarma C\xfcmlesi","common.networkError":"A\u011f Hatas\u0131","common.or":"ya da","common.password":"\u015eifre","common.placeOrder":"Emir Ver","common.pleaseCheckVisitWebsite":"L\xfctfen bu adresi ziyaret etti\u011finizden emin olun ","common.previous":"\xd6nceki","common.privateKey":"\xd6zel Anahtar","common.systemError":"Sistem Hatas\u0131","common.trezorDevice":"Trezor Ayg\u0131t\u0131","common.viewMyPrivateKey":"\xd6zel Anahtar\u0131m\u0131 G\xf6r\xfcnt\xfcle","common.viewOnly":"Yaln\u0131zca G\xf6r\xfcnt\xfcle","common.walletConnect":"Mobil C\xfczdan","common.yes":"Evet","common.warning":"Uyar\u0131","common.next":"Sonraki","common.buy-crypto-on-ramp":"Kripto al","validation.onlyAlphaNumeric":"Yaln\u0131zca harf ve rakam kullan\u0131n","validation.size":"{label} uzunlu\u011fu {min} ile {max} aras\u0131nda olmal\u0131d\u0131r","create.backupKeystore.backupYour":"Yedekleyin ","create.backupKeystore.cannotRecoveredIt":"E\u011fer kaybederseniz kurtar\u0131lamaz.","create.backupKeystore.createBackupFile":"Bu dosyan\u0131n bir yede\u011fini olu\u015fturun!","create.backupKeystore.downloadKeystoreFile":"Keystore Dosyas\u0131n\u0131 \u0130ndir (UTC/JSON)","create.backupKeystore.getMyPrivateKey":"\xd6zel Anahtar\u0131m\u0131 Al","create.backupKeystore.keystoreFile":"Keystore Dosyas\u0131","create.backupKeystore.needFirstDownload":"\xd6nce keystore dosyas\u0131n\u0131 indirmeniz gerekiyor","create.backupKeystore.notShareFile":"Bu dosyay\u0131 do\u011frulanmam\u0131\u015f hi\xe7bir web sitesinde payla\u015fmay\u0131n ya da kullanmay\u0131n. Aksi takdirde fonlar\u0131n\u0131z\u0131 \xe7al\u0131nma riski alt\u0131na sokars\u0131n\u0131z.","create.backupMnemonic.note":"A\u015fa\u011f\u0131daki metni bir ka\u011f\u0131da kaydedin ve bu ka\u011f\u0131d\u0131 gizli ve g\xfcvenli bir yerde saklay\u0131n.","create.backupMnemonic.title":"L\xfctfen hat\u0131rlatma c\xfcmlesini yedekleyin","create.backupText":"A\u015fa\u011f\u0131daki metni bir ka\u011f\u0131da kaydedin ve bu ka\u011f\u0131d\u0131 gizli ve g\xfcvenli bir yerde saklay\u0131n.","create.chooseKSOrMnemonic.keystoreAndPassword":"Keystore Dosyas\u0131 + \u015eifre","create.chooseKSOrMnemonic.keystoreFile":"Keystore Dosyas\u0131","create.chooseKSOrMnemonic.recommendedUSBDrive":"Bir USB s\xfcr\xfcc\xfcs\xfcnde yedeklenmesi tavsiye edilir","create.chooseKSOrMnemonic.recommendedUSBDriveOrPaper":"Bir USB s\xfcr\xfcc\xfcs\xfcnde ya da ka\u011f\u0131da yaz\u0131larak yedeklenmesi tavsiye edilir","create.chooseKSOrMnemonic.title":"Yeni c\xfczdan\u0131n\u0131z\u0131 nas\u0131l olu\u015fturmak istersiniz?","create.chooseKSOrMnemonic.unlockExistWallet":"Mevcut Bir C\xfczdan\u0131n Kilidini A\xe7\u0131n","create.chooseKSOrMnemonic.useKeystoreFile":"C\xfczdan\u0131n\u0131za eri\u015fmek i\xe7in Keystore Dosyan\u0131z\u0131 (UTC / JSON) + \u015eifrenizi kullan\u0131n","create.chooseKSOrMnemonic.useMnemonicPhrase":"C\xfczdan\u0131n\u0131za eri\u015fmek i\xe7in 24-kelimelik Hat\u0131rlatma C\xfcmlesini kullan\u0131n","create.confirmNote":"Hat\u0131rlatma C\xfcmlenizi not etti\u011finizden emin misiniz?","create.createNewWallet":"Yeni C\xfczdan Olu\u015ftur","create.doubleConfirmMnemonic.note":"Elinizdeki kopyan\u0131n do\u011fru oldu\u011fundan emin olmak i\xe7in l\xfctfen Hat\u0131rlatma C\xfcmlesini do\u011fru s\u0131ralamayla se\xe7in.","create.doubleConfirmMnemonic.title":"\u0130kincil Eri\u015fimi Se\xe7in","create.doubleConfirmMnemonic.tryAgain":"Yanl\u0131\u015f Hat\u0131rlatma C\xfcmlesi s\u0131ralamas\u0131. L\xfctfen tekrar deneyin.","create.downloadKeyStoreFile":"Keystore Dosyas\u0131n\u0131 \u0130ndir","create.enterPassword":"Bir \u015eifre Girin","create.google.createWallet":"C\xfczdan olu\u015ftur","create.google.createdSuccessfully":"C\xfczdan Ba\u015far\u0131yla Olu\u015fturuldu","create.google.creationFailure":"C\xfczdan Olu\u015fturulamad\u0131","create.google.tryAgain":"Tekrar Deneyin","create.google.walletName":"C\xfczdan ad\u0131","create.googledrive.rePassErr":"Girdi\u011finiz \u015fifre uyu\u015fmuyor","create.keystoreFileAndPassword":"Keystore Dosyas\u0131 + \u015eifre Olu\u015ftur","create.pick.useGoogleDrive.description":"Google hesab\u0131n\u0131z\u0131 kullanarak yeni bir c\xfczdan olu\u015fturun","create.pick.useGoogleDrive.title":"Google Drive Kullan\u0131l\u0131yor","create.pick.useLocalKeystore.description":"Cihaz\u0131n\u0131zda saklayabilece\u011finiz yeni bir c\xfczdan olu\u015fturun","create.pick.useLocalKeystore.title":"Keystore Dosyas\u0131 Kullan\u0131l\u0131yor","create.pleaseCheck":"L\xfctfen bu adresi ziyaret etti\u011finizden emin olun ","create.reEnterPassword":"\u015eifreyi Tekrar Girin","create.stepTwo.desc":"Birazdan size hat\u0131rlatma c\xfcmlenizi g\xf6sterece\u011fiz, l\xfctfen kimsenin ekran\u0131n\u0131za bakmad\u0131\u011f\u0131ndan emin olun.","create.success.desc1":"Binance Chain C\xfczdan\u0131n\u0131 ve","create.success.desc2":"Merkeziyetsiz Borsay\u0131 kullanmaya haz\u0131rs\u0131n\u0131z!","create.success.title":"Haz\u0131rs\u0131n\u0131z!","create.success.unlockWallet":"C\xfczdan\u0131n Kilidini A\xe7","create.tutorial.next":"Sonraki","create.tutorial.skip":"Tan\u0131t\u0131m\u0131 Ge\xe7 (\xd6nerilmez)","create.tutorial.step1.desc1":"Binance size Binance Chain \xfczerinde en iyi ve en g\xfcvenli deneyimi sunmay\u0131 taahh\xfct ediyor. Bunu yapmak i\xe7in, merkeziyetsiz c\xfczdanlar\u0131n nas\u0131l \xe7al\u0131\u015ft\u0131\u011f\u0131n\u0131 ve kendinizi koruman\u0131z i\xe7in neler yapman\u0131z gerekti\u011fini anlaman\u0131z\u0131 sa\u011flamak \xfczere bir dakikan\u0131z\u0131 rica ediyoruz. Hizmet Ko\u015fullar\u0131n\u0131n tamam\u0131na buradan ula\u015fabilirsiniz.","create.tutorial.step1.title":"Taahh\xfcd\xfcm\xfcz","create.tutorial.step2.desc1":"Fonlar\u0131n\u0131z\u0131 tutman\u0131n t\xfcm sorumlulu\u011fu size ait. Ba\u015fka hi\xe7 kimse, Binance bile, e\u011fer kaybederseniz c\xfczdan\u0131n\u0131z\u0131 geri getirmede size yard\u0131mc\u0131 olamaz.","create.tutorial.step2.desc2":"Binance \xfczerinde bir c\xfczdan olu\u015fturdu\u011funuzda size 3 farkl\u0131 format sunulur ve bu formatlar\u0131n her birini c\xfczdan\u0131n\u0131za eri\u015fmek i\xe7in kullanabilirsiniz.","create.tutorial.step2.title":"Fonlar\u0131n\u0131z\u0131 Tutmak","create.tutorial.step3.desc1":"Keystore dosyas\u0131n\u0131 bir \\"Kullan\u0131c\u0131 Kimli\u011fi\\" olarak d\xfc\u015f\xfcnebilirsiniz. \u015eifreniz de c\xfczdan\u0131n\u0131z\u0131 a\xe7ar. C\xfczdan\u0131n\u0131za eri\u015febilmeniz i\xe7in ikisi de gereklidir, bu y\xfczden bunlar\u0131 g\xfcvende tutmal\u0131s\u0131n\u0131z. Bu Binance\'in zorunlu k\u0131ld\u0131\u011f\u0131 formatt\u0131r.","create.tutorial.step3.title":"Keystore Dosyas\u0131 + \u015eifre","create.tutorial.step4.desc1":"24 kelime hem \\"Kullan\u0131c\u0131 Kimli\u011fi\\" hem de \u015fifredir. Keystore dosyan\u0131z\u0131 kaybetmeniz ya da \u015fifrenizi unutman\u0131z durumunda c\xfczdan\u0131n\u0131za eri\u015fmek i\xe7in ikinci yoldur. Hat\u0131rlatma c\xfcmlenizi bilen herhangi biri c\xfczdan\u0131n\u0131za girebilir, bu y\xfczden c\xfcmleyi g\xfcvende tutmal\u0131s\u0131n\u0131z.","create.tutorial.step4.title":"Hat\u0131rlatma C\xfcmlesi","create.tutorial.step5.desc1":"Hat\u0131rlatma c\xfcmlesi kelimelerinin farkl\u0131 bir temsilidir.","create.tutorial.step5.desc2":"Binance t\xfcm kullan\u0131c\u0131lar\u0131 i\xe7in keystore dosyas\u0131 + \u015fifreyi zorunlu k\u0131lar; ikincil y\xf6ntem olarak hat\u0131rlatma c\xfcmlesi ya da \xf6zel anahtar aras\u0131ndan se\xe7im yap\u0131l\u0131r.","create.tutorial.step5.title":"\xd6zel anahtar","create.tutorial.title":"C\xfczdan Yaratma Rehberi","create.tutorial.understand":"Anlad\u0131m","create.understandCheckbox":"Binance\'in \u015fifremi ya da keystore dosyam\u0131 kurtaramayaca\u011f\u0131n\u0131 ya da s\u0131f\u0131rlayamayaca\u011f\u0131n\u0131 anlad\u0131m. Keystore dosyam\u0131n/\u015fifremin yede\u011fini yapacak, bunlar\u0131 g\xfcvende tutacak, t\xfcm c\xfczdan olu\u015fturma ad\u0131mlar\u0131n\u0131 tamamlayaca\u011f\u0131m ve t\xfcm ko\u015fullar\u0131 ","create.understandCheckbox.terms":"kabul ediyorum","create.unlockExistWallet":"Varolan Bir C\xfczdan\u0131n Kilidini A\xe7","create.yourKeyStore":"Keystore\'unuz","editWallet.remove":"Kald\u0131r","editWallet.remove.desc1":"L\xfctfen c\xfczdanda para olmad\u0131\u011f\u0131ndan emin olun","editWallet.remove.desc2":"\xe7\xfcnk\xfc c\xfczdan\u0131 geri getirmek m\xfcmk\xfcn de\u011fil","editWallet.remove.removeButton":"Evet, bu c\xfczdan\u0131 kald\u0131r","editWallet.remove.title":"Bu c\xfczdan\u0131 kald\u0131rmak istedi\u011finizden emin misiniz?","editWallet.rename":"Yeniden adland\u0131r","editWallet.rename.duplicateName":"C\xfczdan ad\u0131 kay\u0131tl\u0131","editWallet.rename.errMsg":"Ad bo\u015f b\u0131rak\u0131lamaz","editWallet.rename.title":"C\xfczdan ad\u0131","editWallet.title":"C\xfczdan Ad\u0131","editWallet.createWallet":"C\xfczdan Olu\u015ftur","editWallet.unlockWallet":"C\xfczdan\u0131n Kilidini A\xe7","exchange.BTCValue":"BTC De\u011feri","exchange.amount":"Miktar","exchange.asset":"Varl\u0131k","exchange.availableBalance":"Kullan\u0131labilir Bakiye","exchange.blockHeight":"BlokY\xfcksekli\u011fi","exchange.buy":"Al","exchange.calendar.clear":"Temizle","exchange.calendar.ok":"Tamam","exchange.calendar.today":"Bug\xfcn","exchange.chartbox.depth":"Derinlik","exchange.coin":"Coin","exchange.date":"Tarih","exchange.estimatedValue":"Tahmini De\u011fer","exchange.filled":"Ger\xe7ekle\u015ftirilen","exchange.from":"Kimden","exchange.frozen":"Dondurulmu\u015f","exchange.hideAllCanceled":"\u0130ptal edilenlerin t\xfcm\xfcn\xfc gizle","exchange.hideOtherPairs":"Di\u011fer \xc7iftleri Gizle","exchange.inOrder":"\u0130\u015flemde","exchange.index.books":"Defterler","exchange.index.chart":"Grafik","exchange.max":"Maks","exchange.min":"Minimum al\u0131m sat\u0131m birimi:","exchange.name":"\u0130sim","exchange.notional":"Nosyonel","exchange.oneDay":"1 G\xfcn","exchange.oneMonth":"1 Ay","exchange.oneWeek":"1 Hafta","exchange.pair":"\xc7ift","exchange.placeOrder.bestAsk":"En \u0130yi Sat\u0131\u015f Fiyat\u0131","exchange.placeOrder.bestBid":"En \u0130yi Al\u0131\u015f Fiyat\u0131","exchange.placeOrder.limitOrder":"Limit Emri","exchange.placeOrder.noEnoughBalance":"yeterli bakiye yok","exchange.placeOrder.orderError":"Emir Hatas\u0131","exchange.placeOrder.orderPriceHigher":"Emir fiyat\u0131n\u0131z g\xfcncel piyasa fiyat\u0131ndan % 2 daha y\xfcksek olacak. L\xfctfen dikkatle devam edin.","exchange.placeOrder.orderPriceLow":"Emir fiyat\u0131n\u0131z g\xfcncel piyasa fiyat\u0131ndan % 2 daha d\xfc\u015f\xfck olacak. L\xfctfen dikkatle devam edin.","exchange.placeOrder.pleaseInputCorrectAmount":"L\xfctfen do\u011fru miktar\u0131 girin","exchange.placeOrder.buy.correctAmountForbep8":"Miktar > 1 olmal\u0131d\u0131r","exchange.placeOrder.sell.correctAmountForbep8":"Miktar > 1 veya = bakiyeler olmal\u0131d\u0131r","exchange.placeOrder.pleaseInputCorrectPrice":"L\xfctfen do\u011fru fiyat\u0131 girin","exchange.placeOrder.roundSizeErrorMsg":"{baseAsset}\'i yaln\u0131zca {lotSize} katlar\u0131 ile {side}","exchange.placeOrder.successNotifyMsg":"{side}{quantity}{quoteAsset} i\xe7in ba\u015far\u0131yla bir limit emri olu\u015fturdunuz","exchange.placeOrder.successNotifyTitle":"Limit {side} Emri Olu\u015fturuldu","exchange.pleaseSelectDate":"l\xfctfen tarih se\xe7in","exchange.pleaseUnlockWallet.btn":"C\xfczdan\u0131n Kilidini A\xe7","exchange.pleaseUnlockWallet.createNewWallet":"Yeni C\xfczdan Olu\u015ftur","exchange.pleaseUnlockWallet.desc":"L\xfctfen \xf6nce c\xfczdan\u0131n kilidini a\xe7\u0131n","exchange.pleaseUnlockWallet.noWallet":"C\xfczdan\u0131n\u0131z yok mu?","exchange.price":"Fiyat","exchange.search":"Ara","exchange.sell":"Sat","exchange.side":"Yan","exchange.status":"Durum","exchange.symbolPriceInfo.high":"Y\xfcksek","exchange.symbolPriceInfo.lastPrice":"Son Fiyat","exchange.symbolPriceInfo.low":"D\xfc\u015f\xfck","exchange.symbolPriceInfo.twentyFourHChange":"24s De\u011fi\u015fim","exchange.symbolPriceInfo.twentyFourHHigh":"24s En Y\xfcksek","exchange.symbolPriceInfo.twentyFourHLow":"24s En D\xfc\u015f\xfck","exchange.symbolPriceInfo.twentyFourHVolume":"24s Hacim","exchange.symbolPriceInfo.vol":"Hacim","exchange.threeMonths":"3 Ay","exchange.time.from":"Ba\u015flang\u0131\xe7","exchange.to":"Biti\u015f","exchange.total":"Toplam","exchange.totalBalance":"Toplam Bakiye","exchange.tradingHistory.time":"Zaman","exchange.tradingHistory.title":"Al\u0131m Sat\u0131m Ge\xe7mi\u015fi","exchange.tradingPair.change":"De\u011fi\u015ftir","exchange.tradingPair.pair":"\xc7ift","exchange.tradingPair.price":"Fiyat","exchange.tradingPair.search":"Ara","exchange.tradingPair.volume":"Hacim","exchange.txFee":"TxKomisyonu","exchange.txHash":"TxHash","exchange.type":"T\xfcr","exchange.value":"De\u011fer","exchange.miniToken.warning.title":"Kendi ara\u015ft\u0131rman\u0131z\u0131 kendiniz yap\u0131n","exchange.miniToken.warning.content1":"MiniToken, Binance Chain\'de \xf6zel bir token t\xfcr\xfcd\xfcr. Burada sa\u011flanan bilgi ve materyaller, Binance\'in web sitesinde/web sayfalar\u0131nda, \xfc\xe7\xfcnc\xfc taraf web sitelerinde, pazarlama materyallerinde, haber b\xfcltenlerinde veya herhangi bir yay\u0131nda payla\u015f\u0131lm\u0131\u015f olsun ya da olmas\u0131n, yaln\u0131zca genel bilgi ama\xe7l\u0131 payla\u015f\u0131lmaktad\u0131r. Teklif veya ilan edilen herhangi bir \xfcr\xfcn\xfc sat\u0131n almak veya satmak i\xe7in bir teklif olu\u015fturmazlar. Benzer \u015fekilde, finansal, yat\u0131r\u0131ma veya al\u0131m sat\u0131ma y\xf6nelik tavsiyeler olarak al\u0131nmamal\u0131d\u0131rlar. \u0130fade edilen t\xfcm g\xf6r\xfc\u015fler yazar\u0131n g\xf6r\xfc\u015fleri olup, bir g\xf6r\xfc\u015f\xfcn eksiksiz veya do\u011fru oldu\u011funa y\xf6nelik hi\xe7bir garanti verilmez.","exchange.miniToken.warning.content2":"Binance, Binance\'e ait bir sosyal medya hesab\u0131 veya web sitesi arac\u0131l\u0131\u011f\u0131yla sunulan herhangi bir bilgiye dayal\u0131 olarak yap\u0131lan yat\u0131r\u0131mlardan kaynaklanan hi\xe7bir kay\u0131ptan sorumlu olmayacakt\u0131r. Deneyim ve bilgi birikimlerine bak\u0131lmaks\u0131z\u0131n t\xfcm kullan\u0131c\u0131lar\u0131n ve yeni kat\u0131l\u0131mc\u0131lar\u0131n, sundu\u011fumuz \xfcr\xfcnlerden herhangi birini denemeden \xf6nce kendi ara\u015ft\u0131rmalar\u0131n\u0131 yapmalar\u0131 \u015fiddetle tavsiye edilir. Kullan\u0131c\u0131 ara\u015ft\u0131rmalar\u0131ndan sonra hala emin de\u011filse, \xfcr\xfcnden tamamen uzak durmas\u0131 \xf6nerilir. Kullan\u0131c\u0131, Binance taraf\u0131ndan sunulan baz\u0131 \xfcr\xfcnlerin y\xfcksek riskler i\xe7erebilece\u011fini kabul etmektedir. \u015e\xfcpheye mahal vermemek i\xe7in, t\xfcm kullan\u0131c\u0131lar\u0131n Kullan\u0131m Ko\u015fullar\u0131n\u0131 a\xe7\u0131k\xe7a okumas\u0131 tavsiye edilir.","exchange.miniToken.warning.button1":"Anlad\u0131m","exchange.miniToken.warning.fully.understand":"Tamamen anl\u0131yorum, tekrar g\xf6sterme.","fees.fee":"Komisyon","fees.height":"Y\xfckseklik","fees.note":"Not","footer.terms":"Hizmet Ko\u015fullar\u0131","footer.privacy":"Gizlilik","googledrive.create.nameExist":"Ad kay\u0131tl\u0131","header.balances":"Bakiyeler","header.createWallet":"C\xfczdan Olu\u015ftur","header.exchange":"Borsa","header.exchange.bep2":"Tokenler (BEP2)","header.exchange.bep8":"MiniTokenler (BEP8)","header.exchange.menu.bep2":"Tokenler (BEP2)","header.exchange.menu.bep8":"MiniTokenler (BEP8)","header.explorer":"Gezgin","header.faq":"Belgeler / SSS","header.blog":"Blog","header.feeHistory":"Komisyon Ge\xe7mi\u015fi","header.forums":"Forumlar","header.mainnet":"Ana a\u011f","header.openOrders":"A\xe7\u0131k Emirler","header.orderHistory":"Emir ge\xe7mi\u015fi","header.orders":"Emirler","header.testnet":"test a\u011f\u0131","header.tradeHistory":"Al\u0131m Sat\u0131m Ge\xe7mi\u015fi","header.transactions":"\u0130\u015flemler","header.unlockWallet":"C\xfczdan\u0131n Kilidini A\xe7","header.user.changeWallet":"C\xfczdan\u0131 De\u011fi\u015ftir","header.user.closeWallet":"C\xfczdan\u0131 Kapat","header.user.coinomi":"Coinomi ","header.user.copyAddress":"adresi kopyala","header.user.copySuccess":"Kopyalama ba\u015far\u0131l\u0131!","header.user.createNewWallet":"Yeni C\xfczdan Olu\u015ftur","header.user.exportKeystoreFile":"Keystore Dosyas\u0131n\u0131 D\u0131\u015fa Aktar","header.user.goToExplorer":"gezgine git","header.user.infinito":"Infinito ","header.user.ledger":"Ledger ","header.user.trezor":"Trezor Ayg\u0131t\u0131","header.user.wallet":"C\xfczdan","header.user.walletConnect":"WalletConnect ","header.youWantCloseWallet":"C\xfczdan\u0131 kapatmak istedi\u011finizden emin misiniz?","home.aboutPage.desc1.line1":"Binance Chain ilk olarak Binance taraf\u0131ndan geli\u015ftirilmi\u015f bir blockchaindir.","home.aboutPage.desc1.line2":"Modern, g\xfcvenli ve neredeyse an\u0131nda i\u015flem sonland\u0131rmaya sahiptir (h\u0131zl\u0131d\u0131r).","home.aboutPage.desc2.line1":"Binance DEX merkeziyetsiz bir emir e\u015fle\u015ftirme motorudur,","home.aboutPage.desc2.line2":"temel Binance Chain teknolojisiyle g\xfc\xe7lendirilmi\u015ftir.","home.aboutPage.desc3.line1":"Binance DEX dijital varl\u0131klar\u0131 \xe7\u0131karmak ve al\u0131p satmak i\xe7in","home.aboutPage.desc3.line2":"modern ve g\xfcvenli bir pazar yeridir ve anahtarlar\u0131n\u0131z yaln\u0131zca sizin elinizde olur. Favori varl\u0131klar\u0131n\u0131z\u0131 al\u0131p satmak hi\xe7 bu kadar g\xfcvenli olmam\u0131\u015ft\u0131.","home.aboutPage.title":"Binance DEX Hakk\u0131nda","home.binanceDex":"Binance DEX","home.processPage.aboutBalance":"Binance DEX Hakk\u0131nda","home.processPage.create":"Olu\u015ftur","home.processPage.createDesc":"\u0130lk ad\u0131m bir Binance Chain adresi olu\u015fturmakt\u0131r.","home.processPage.createWallet":"Yeni Bir C\xfczdan Olu\u015ftur","home.processPage.getStart":"Binance DEX\'i kullanmaya ba\u015flay\u0131n","home.processPage.go":"Git","home.processPage.placeOrders":"Emir Olu\u015ftur","home.processPage.placeOrdersDesc":"Emirleri g\xf6ndermek ve iptal etmek i\xe7in web c\xfczdan\u0131n\u0131 ya da API\'\u0131 kullan\u0131n.","home.processPage.transferAssets":"Varl\u0131klar\u0131 Transfer Et","home.processPage.transferAssetsDesc":"Binance Chain\'i destekleyen t\xfcm c\xfczdanlarla olu\u015fturulabilen bir Binance Chain adresiyle, bu adreste tutulan BNB\'leri ya da di\u011fer varl\u0131klar\u0131 transfer edebilirsiniz.","home.processPage.unlock":"Kilidini A\xe7","home.processPage.unlockDesc":"C\xfczdan\u0131n\u0131z\u0131n kilidini a\xe7man\u0131n d\xf6rt yolu","home.processPage.unlockMode1":"WalletConnect","home.processPage.unlockMode2":"Ledger","home.processPage.unlockMode3":"Keystore Dosyas\u0131 + \u015eifre","home.processPage.unlockMode4":"Hat\u0131rlatma C\xfcmlesi","home.processPage.unlockWallet":"Bir C\xfczdan\u0131n Kilidini A\xe7","home.startPage.createWallet":"Bir C\xfczdan Olu\u015ftur","home.startPage.desc1":"H\u0131zl\u0131 ve g\xfcvenli merkeziyetsiz dijital varl\u0131k borsas\u0131","home.startPage.desc2":"Yeni kripto para al\u0131m sat\u0131m standard\u0131 burada.","home.startPage.getTestBNB":"Test BNB\'lerini Al","home.startPage.startTrading":"Al\u0131m Sat\u0131ma Ba\u015fla","home.whyPage.community":"Bir Topluluk Giri\u015fimidir","home.whyPage.communityDesc":"Binance DEX zincir \xfcst\xfc y\xf6netim ve a\xe7\u0131k kaynakl\u0131 yaz\u0131l\u0131m \xf6\u011feleri ile g\xfc\xe7lendirilmi\u015ftir.","home.whyPage.decentralized":"Merkeziyetsiz","home.whyPage.decentralizedDesc":"Herhangi bir \xfc\xe7\xfcnc\xfc taraf ya da merkezi otorite olmadan do\u011frudan c\xfczdanlar aras\u0131 al\u0131m sat\u0131m\u0131 deneyimleyin.","home.whyPage.getStarted":"Ba\u015flay\u0131n","home.whyPage.lowTradingFees":"D\xfc\u015f\xfck Komisyonlar","home.whyPage.lowTradingFeesDesc":"\xc7ekim ve yat\u0131rma i\u015flemlerinin yan\u0131 s\u0131ra emir olu\u015fturmak i\xe7in de hi\xe7bir komisyon \xf6demeden al\u0131m sat\u0131m yap\u0131n - ve BNB sahipleri daha bir\xe7ok fayda sa\u011fl\u0131yor.","home.whyPage.safeAndSecure":"G\xfcvenli","home.whyPage.safeAndSecureDesc":"Fonlar\u0131n\u0131z, yaln\u0131zca sizin kontrol\xfcn\xfczde olan bir gizli anahtarla bir blockchain adresi \xfczerinde saklan\u0131r.","home.whyPage.title":"Neden Binance DEX","home.whyPage.userFriendly":"Kullan\u0131c\u0131 Dostu","home.whyPage.userFriendlyDesc":"Bir c\xfczdan olu\u015fturun, c\xfczdan\u0131n\u0131z\u0131n kilidini a\xe7\u0131n ve al\u0131m sat\u0131m yapmaya haz\u0131rs\u0131n\u0131z. Fon yat\u0131rmaya ya da \xe7ekmeye gerek yok.","inputPassword.passwordRule":"\u015eifreniz a\u015fa\u011f\u0131daki \xf6zelliklere sahip olmal\u0131d\u0131r","inputPassword.passwordRule1":"8 ya da daha fazla karakter","inputPassword.passwordRule2":"Bir b\xfcy\xfck harf, sembol ve rakam","inputPassword.setANewPassword":"Yeni bir \u015eifre Belirle","landing.connectWallet":"C\xfczdan\u0131 Ba\u011fla","landing.createWallet":"C\xfczdan Olu\u015ftur","landing.desc1":"Binance DEX","landing.desc2":"H\u0131zl\u0131 ve g\xfcvenli merkeziyetsiz dijital varl\u0131k borsas\u0131. Yeni kripto para al\u0131m sat\u0131m standard\u0131 burada.","landing.footer.fee":"Komisyon","landing.footer.terms":"Hizmet Ko\u015fullar\u0131","landing.footer.privacy":"Gizlilik","landing.how.connect":"Ba\u011flan","landing.how.connect.desc":"Binance DEX\'e eri\u015fim tahmin etti\u011finizden daha kolay. Ba\u011flan tu\u015funa t\u0131klay\u0131n ve ba\u011flant\u0131 se\xe7eneklerinden birini tercih edin. Haz\u0131rs\u0131n\u0131z.","landing.how.create":"Olu\u015ftur","landing.how.create.desc":"Binance DEX size kullan\u0131m\u0131 kolay keystore\'lardan ultra g\xfcvenli donan\u0131m c\xfczdanlar\u0131na kadar bir\xe7ok se\xe7enek aras\u0131ndan tercih yapabilme \xf6zg\xfcrl\xfc\u011f\xfc sunar.","landing.how.step":"ad\u0131m","landing.how.title":"Nas\u0131l kullan\u0131l\u0131r","landing.how.trade":"Al\u0131m sat\u0131m","landing.how.trade.desc":"Amac\u0131m\u0131z al\u0131m sat\u0131mlar\u0131 sorunsuz ve Binance.com\'dan farks\u0131z hale getirmek. Bunu yapmak i\xe7in en iyi \xf6zellikleri optimize ettik. B\xf6ylece sevdi\u011finiz her \u015feyi Binance DEX\'te de bulabileceksiniz.","landing.markets":"Piyasalar","landing.markets.24HChange":"24S De\u011fi\u015fim","landing.markets.24HVolume":"24S Hacim","landing.markets.lastPrice":"Son Fiyat","landing.markets.pair":"\xc7ift","landing.markets.searchPlaceholder":"Coin ismi ara","landing.menu.balances":"Bakiyeler","landing.menu.changeWallet":"C\xfczdan\u0131 De\u011fi\u015ftir","landing.menu.closeWallet":"C\xfczdan\u0131 Kapat","landing.menu.community":"Topluluk","landing.menu.copyAddress":"adresi kopyala","landing.menu.docs":"Belgeler","landing.menu.exchange":"Borsa","landing.menu.explorer":"Gezgin","landing.menu.orders":"Emirler","landing.menu.orders.feeHistory":"Komisyon Ge\xe7mi\u015fi","landing.menu.orders.openOrders":"A\xe7\u0131k Emirler","landing.menu.orders.orderHistory":"Emir ge\xe7mi\u015fi","landing.menu.orders.tradeHistory":"Al\u0131m Sat\u0131m Ge\xe7mi\u015fi","landing.menu.testnet":"Test a\u011f\u0131","landing.menu.tools":"Ara\xe7lar","landing.menu.transaction":"\u0130\u015flem","landing.menu.wallet":"C\xfczdan","landing.startTrading":"Al\u0131m Sat\u0131ma Ba\u015fla","landing.trust.activeAddress":"Aktif C\xfczdanlar","landing.trust.activeAddress.desc":"Bir\xe7ok ki\u015fi Binance DEX\'in altyap\u0131s\u0131na ve al\u0131m sat\u0131m sistemlerine t\xfcm di\u011fer c\xfczdan \xe7\xf6z\xfcmlerinden daha fazla g\xfcveniyor.","landing.trust.pairs":"\xc7iftler","landing.trust.pairs.desc":"Binance DEX size daha fazla se\xe7enek ve al\u0131m sat\u0131m esnekli\u011fi sunuyor ve bunlara her hafta yenileri ekleniyor.","landing.trust.rank":"S\u0131ralama","landing.trust.rank.desc":"Binance DEX, Coinmarketcap\'te hacim baz\u0131nda 1 numaral\u0131 merkeziyetsiz kripto para borsas\u0131.","landing.trust.title":"\u0130nsanlar bize neden g\xfcveniyor","landing.why.competitive":"Rekabet\xe7i","landing.why.competitive.desc":"Al\u0131m sat\u0131m komisyonlar\u0131n\u0131 BNB ile \xf6dedi\u011finizde komisyonlar yaln\u0131zca %0,04. Bu oran al\u0131m sat\u0131m komisyonlar\u0131 baz\u0131nda d\xfcnyan\u0131n lider borsas\u0131 Binance.com\'un neredeyse yar\u0131s\u0131.","landing.why.fast":"H\u0131zl\u0131","landing.why.fast.desc":"1 saniyelik blok s\xfcreleriyle blockchain al\u0131m sat\u0131m do\u011frulamalar\u0131 art\u0131k ge\xe7mi\u015fte kald\u0131. Olumsuz yanlar olmadan DEX\'in t\xfcm avantajlar\u0131ndan faydalan\u0131n.","landing.why.secure":"G\xfcvenli","landing.why.secure.desc":"Binance DEX g\xfcvenli\u011fi tamamen yeni bir seviyeye ta\u015f\u0131yor. E\u015fler aras\u0131 transferler ve al\u0131m sat\u0131mlar g\xfcvenlik risklerine hi\xe7 maruz kalmamak anlam\u0131na geliyor.","landing.why.title":"Neden Binance DEX","lang.menu.copyAddress":" ","noContent.descPrefix":"Bulunmuyor ","openOrders.areYourTrue":"Emin misiniz","openOrders.cancel":"iptal et","openOrders.cancel all":"t\xfcm\xfcn\xfc iptal et","openOrders.cancel buy":"al\u0131m\u0131 iptal et","openOrders.cancel sell":"sat\u0131\u015f\u0131 iptal et","openOrders.cancelAll":"T\xfcm\xfcn\xfc \u0130ptal Et","openOrders.cancelBuy":"Al\u0131m\u0131 \u0130ptal Et","openOrders.cancelOrder":"Emri \u0130ptal Et","openOrders.cancelOrders":"Emirleri \u0130ptal Et","openOrders.cancelPartialSuccess":"\u0130ptal k\u0131smen ba\u015far\u0131l\u0131","openOrders.cancelSell":"Sat\u0131\u015f\u0131 \u0130ptal Et","openOrders.cancelSuccess":"\u0130ptal Ba\u015far\u0131l\u0131","openOrders.keepOrder":"Emri Tut","openOrders.keepOrders":"Emirleri Tut","openOrders.noBuyOpenOrders":"a\xe7\u0131k al\u0131m emri yok","openOrders.noOpenOrders":"a\xe7\u0131k emir yok","openOrders.noSellOpenOrders":"a\xe7\u0131k sat\u0131\u015f emri yok","openOrders.title":"A\xe7\u0131k Emirler","orderForm.amount":"Miktar","orderForm.avb":"Kull.","orderForm.buy":"Al","orderForm.equivalent":"Denk gelen","orderForm.price":"Fiyat","orderForm.sell":"Sat","orderForm.total":"Toplam","orderHistory.openHistory":"emir ge\xe7mi\u015fi","orderHistory.title":"Emir Ge\xe7mi\u015fi","orderHistory.tradeId":"Al\u0131m Sat\u0131m Kimli\u011fi","orderHistory.tradingPrice":"Al\u0131m Sat\u0131m Fiyat\u0131","orderHistory.tradingTotal":"Al\u0131m Sat\u0131m Toplam\u0131","privateKeyModal.backupText":"A\u015fa\u011f\u0131daki metni bir ka\u011f\u0131da kaydedin ve bu ka\u011f\u0131d\u0131 gizli ve g\xfcvenli bir yerde saklay\u0131n.","privateKeyModal.title":"\xd6zel Anahtar\u0131n\u0131z","testnet.binanceChainExplorerGuide":"Binance Chain Gezgin Rehberi","testnet.fastAndSecureDesc":"H\u0131zl\u0131 ve g\xfcvenli merkeziyetsiz dijital varl\u0131k borsas\u0131","testnet.fundingYourTestnetAccount":"Test A\u011f\u0131 Hesab\u0131n\u0131z\u0131 Fonlama","testnet.howToAccessYourWallet":"C\xfczdan\u0131n\u0131za Nas\u0131l Eri\u015febilirsiniz","testnet.howToCreateAWallet":"Nas\u0131l C\xfczdan Olu\u015fturulur","testnet.interfaceGuide":"Aray\xfcz Rehberi","testnet.thingsToAvoid":"Ka\xe7\u0131nman\u0131z Gerekenler","testnet.title":"Binance Merkeziyetsiz Borsas\u0131 (Test A\u011f\u0131)","token.issue.bep2Title":"BEP-2 Tokeni","token.issue.bep2Desc":"BEP-2, Binance Chain\'de tokenlerin yay\u0131nlanmas\u0131 ve uygulanmas\u0131 i\xe7in teknik bir standartt\u0131r.","token.issue.bep8Title":"BEP-8 Tokeni (Mini-BEP2)","token.issue.bep8Desc":"BEP-8, Binance Chain\'de tokenlerin yay\u0131nlanmas\u0131 ve uygulanmas\u0131 i\xe7in teknik bir standartt\u0131r.","token.issue.title":"Token Yay\u0131nlama","token.issue.confirmationModal.title":"Token S\xf6zle\u015fmesini Okuyun","token.issue.confirmationModal.confirm":"Onayla","token.issue.tokenNameLabel":"Token Ad\u0131","token.issue.tokenNameDesc":"Token adlar\u0131 3 ila 32 karakter aras\u0131nda olmal\u0131d\u0131r.","token.issue.symbolLabel":"Simge","token.issue.maxSupplyLabel":"Maksimum Arz","token.issue.symbolDescLength":"Semboller 2 ila 5 karakter aras\u0131nda olmal\u0131d\u0131r.","token.issue.totalSuppyHeader":"Token Maksimum Arz\u0131n\u0131 Se\xe7in","token.issue.totalSuppyDesc":"Maksimum arz, olu\u015fturulabilecek maksimum token say\u0131s\u0131d\u0131r","token.issue.supplyLabel":"Arz","token.issue.supplyDesc":"Yay\u0131nlaman\u0131z gereken token say\u0131s\u0131","token.issue.prev":"Token Listem","token.issue.updateTokenInfoHeader":"Token bilgilerini g\xfcncellemek i\xe7in URL\'yi belirleyin (\u0130ste\u011fe ba\u011fl\u0131)","token.issue.updateTokenInfoHeaderTips":"URL, MiniTokeninizin tan\u0131t\u0131m\u0131 niteli\u011finde olacak JSON bi\xe7imli bilgileri d\xf6nd\xfcrecektir","token.issue.fillInRequestedUrlLabel":"Talep edilen URL\'yi girin","token.issue.issuanceFee":"yay\u0131nlama \xfccreti","token.list.title":"Tokenlerim","token.issueModal.mintable":"Kaz\u0131labilir","token.issueModal.nonMintable":"Kaz\u0131lamaz","token.issueModal.name":"Token Ad\u0131","token.issueModal.nameErrMsg":"token ad\u0131 32 karakterle s\u0131n\u0131rl\u0131d\u0131r","token.issueModal.symbol":"Simge","token.issueModal.symbolErrMsg":"simge alfanumerik olmal\u0131d\u0131r ve uzunlu\u011fu 3~8 ile s\u0131n\u0131rl\u0131d\u0131r","token.issueModal.title":"Token \xc7\u0131kar","token.issueModal.totalSupply":"Toplam Arz","token.issueModal.totalSupplyErrMsg":"ge\xe7ersiz arz miktar\u0131","token.listModal.address":"Adres","token.listModal.confirm":"Onayla","token.listModal.initPrice":"Ba\u015fl. Fiyat\u0131","token.listModal.proposalId":"TeklifKimli\u011fi","token.listModal.quoteAsset":"Teklif Edilen Varl\u0131k","token.listModal.title":"Tokeni Listele","token.listModal.tokenName":"Token Ad\u0131","token.main.burn":"Yak","token.main.freeze":"Dondur","token.main.issueToken":"Token \xc7\u0131kar","token.main.list":"Listele","token.main.listSuccessmsg":"Listeleme ba\u015far\u0131l\u0131","token.main.mint":"Kaz","token.main.proposal":"Teklif","token.main.submitListFirst":"L\xfctfen \xf6nce listeleme teklifini g\xf6nderin","token.main.submitSuccessmsg":"listeleme teklifi ba\u015far\u0131yla g\xf6nderildi","token.main.title":"Token Listem","token.main.unfreeze":"Tekrar a\xe7","token.proposalModal.address":"Adres","token.proposalModal.baseAsset":"Baz Varl\u0131k","token.proposalModal.desc":"A\xe7\u0131klama","token.proposalModal.expireTime":"Son Kullan\u0131m Zaman\u0131","token.proposalModal.hours":"Saat","token.proposalModal.initDeposit":"\u0130lk Yat\u0131rma","token.proposalModal.initPrice":"Ba\u015fl. Fiyat\u0131","token.proposalModal.initPriceErr":"Ba\u015flang\u0131\xe7 fiyat\u0131 bo\u015f olmamal\u0131d\u0131r","token.proposalModal.initPriceErr2":"ba\u015flang\u0131\xe7 fiyat\u0131 0\'dan b\xfcy\xfck olmal\u0131d\u0131r","token.proposalModal.quoteAsset":"Teklif Edilen Varl\u0131k","token.proposalModal.title":"Listeleme Teklifi","token.proposalModal.titleErr":"Teklif ba\u015fl\u0131\u011f\u0131 bo\u015f olmamal\u0131d\u0131r","token.proposalModal.titleErr2":"Teklif ba\u015fl\u0131\u011f\u0131 maks. uzunluk olan 128\'den daha uzun","token.proposalModal.votingPeriod":"Oylama D\xf6nemi","token.table.col.mintable":"Kaz\u0131labilir","token.table.col.name":"Ad","token.table.col.symbol":"Simge","token.table.col.tokenType":"T\xfcr","token.table.col.totalSupply":"Toplam Arz","token.tokenModal.address":"Adres","token.tokenModal.amount":"Miktar","token.tokenModal.available":"Kullan\u0131labilir","token.tokenModal.burnTitle":"Token Yak","token.tokenModal.confirm":"Onayla","token.tokenModal.desc":" ","token.tokenModal.freezeTitle":"Token Dondur","token.tokenModal.mintTitle":"Token Kaz","token.tokenModal.name":"Ad","token.tokenModal.unfreezeTitle":"Tokeni Tekrar A\xe7","token.list.tradepair.exist":"Mevcut al\u0131m sat\u0131m \xe7ifti","token.warning":"Walletconnect (c\xfczdan ba\u011flama) uyumlu c\xfczdanlar\u0131 \u015fu an desteklemiyoruz ve g\xfcvenlik ama\xe7lar\u0131 do\u011frultusunda Ledger token \xe7\u0131karmak/listelemek/kazmak/yakmak i\xe7in en iyi se\xe7enektir","tradeHistory.tradeHistory":"al\u0131m-sat\u0131m ge\xe7mi\u015fi","transaction.here":"buradan","transaction.notes":"T\xfcm i\u015flemler a\u015fa\u011f\u0131ya dahil edilmemi\u015ftir. Tam ge\xe7mi\u015fi \u015furadan g\xf6rebilirsiniz","txHistory.here":"buradan","txHistory.notEveryTransactionIsIncludedBelow":"T\xfcm i\u015flemler a\u015fa\u011f\u0131ya dahil edilmemi\u015ftir. Tam ge\xe7mi\u015fi buradan g\xf6rebilirsiniz.","txHistory.title":"\u0130\u015flem Ge\xe7mi\u015fi","unlock.connectAddress.enterYourAddress":"Adresinizi girin","unlock.connectAddress.invalidAddress":"Ge\xe7ersiz adres","unlock.connectAddress.viewOnlyMode":"Yaln\u0131zca g\xf6r\xfcnt\xfclenebilir mod i\xe7in bir adres girin","unlock.createNewWallet":"Yeni Bir C\xfczdan Olu\u015ftur","unlock.google.chooseWallet":"Kullan\u0131labilir c\xfczdanlar\u0131n\u0131zdan birini se\xe7in:","unlock.google.logIn":"Giri\u015f yap","unlock.google.notLoggedIn":"Google Hesab\u0131n\u0131za giri\u015f yapmad\u0131n\u0131z","unlock.google.signedInAs":"Giri\u015f yapt\u0131\u011f\u0131n\u0131z kullan\u0131c\u0131 ad\u0131","unlock.googledrive.editWallet":"C\xfczdan Bilgilerini D\xfczenle","unlock.googledrive.wallets":"Devam etmek i\xe7in \u015fu c\xfczdanlar\u0131n\u0131zdan birini se\xe7in:","unlock.index.selectUnlockType":"Kilidi nas\u0131l tekrar a\xe7mak istedi\u011finizi se\xe7in","unlock.index.title":"C\xfczdan\u0131n\u0131z\u0131n Kilidini A\xe7\u0131n","unlock.keystore.enterYourWalletPass":"C\xfczdan \u015fifrenizi girin","unlock.keystore.paste":"Ya da keystore dosyan\u0131z\u0131n i\xe7eri\u011fini yap\u0131\u015ft\u0131r\u0131n","unlock.keystore.select":"\u015eifreli bir c\xfczdan dosyas\u0131n\u0131 ba\u011flay\u0131n ve \u015fifrenizi girin","unlock.keystore.upload":"Keystore dosyas\u0131n\u0131 y\xfckle","unlock.ledger.appInstallation":"Uygulama Kurulumu","unlock.ledger.binanceChainReady":"Binance Chain Haz\u0131r","unlock.ledger.connectToLedger":"Ledger\'a Ba\u011flan","unlock.ledger.enterPINCode":"PIN Kodu Gir","unlock.ledger.getTheApp":"Uygulamay\u0131 indir","unlock.ledger.havingConnectionIssues":"Ba\u011flant\u0131 Sorunlar\u0131 M\u0131 Ya\u015f\u0131yorsunuz?","unlock.ledger.mustBeOnScreen":"ekran \xfczerinde olmal\u0131d\u0131r","unlock.ledger.openBinanceChain":"Binance Chain\'i A\xe7","unlock.ledger.text":"Ekranda g\xf6r\xfcnen talimatlar\u0131 takip ederek donan\u0131m c\xfczdan\u0131n\u0131z\u0131 buradan ba\u011flay\u0131n","unlock.ledger.title":"Bir Ledger Ayg\u0131t\u0131 ile kilidi a\xe7","unlock.ledger.usageInstructions":"Kullan\u0131m Talimatlar\u0131","unlock.mnemonic.pleaseEnterYourPhrase":"L\xfctfen 24 kelimelik c\xfcmlenizi girin","unlock.mnemonic.pleaseSeparateEachWordSpace":"L\xfctfen her kelime aras\u0131nda bo\u015fluk b\u0131rak\u0131n.","unlock.mnemonic.warning.desc1":"Bu se\xe7enek kay\u0131p bir keystore dosyas\u0131n\u0131 ya da \u015fifreyi geri getirir,","unlock.mnemonic.warning.desc2":"ya da ba\u015fka bir c\xfczdan uygulamas\u0131ndan kurtarma c\xfcmlesini i\xe7e aktar\u0131r.","unlock.mnemonic.warning.desc3":"Uyar\u0131! Kurtarma c\xfcmlenizi ya da \xf6zel anahtar\u0131n\u0131z\u0131 bir web sitesine girmeniz \xe7ok tehlikelidir. E\u011fer taray\u0131c\u0131n\u0131zda zararl\u0131 uzant\u0131lar y\xfckl\xfcyse ya da yanl\u0131\u015fl\u0131kla bir oltalama web sitesini ziyaret ederseniz varl\u0131klar\u0131n\u0131z \xe7al\u0131nabilir.","unlock.privateKey.enterYourPrivateKey":"\xd6zel anahtar\u0131n\u0131z\u0131 girin (hex format\u0131nda)","unlock.privateKey.invalid":"Girdi\u011finiz \xd6zel Anahtar do\u011fru formatta de\u011fil ve ge\xe7ersiz. L\xfctfen tekrar deneyin.","unlock.privateKey.passwordInvalid":"\u015eifre ge\xe7ersiz. L\xfctfen tekrar deneyin.","unlock.privateKey.warning":"Kay\u0131p bir keystore dosyas\u0131n\u0131 ya da \u015fifreyi geri getirmek i\xe7in","unlock.privateKey.warningQuestion":"\xd6zel anahtar\u0131n\u0131z\u0131 herhangi bir web sitesine girmeniz \xe7ok tehlikelidir. E\u011fer taray\u0131c\u0131n\u0131zda zararl\u0131 uzant\u0131lar y\xfckl\xfcyse ya da yanl\u0131\u015fl\u0131kla bir oltalama web sitesini ziyaret ederseniz varl\u0131klar\u0131n\u0131z \xe7al\u0131nabilir.","unlock.recover.content":"C\xfczdan olu\u015fturulurken size sunulan kurtarma c\xfcmlesini kullanarak c\xfczdan\u0131 geri getirin","unlock.recover.download.button":"\u0130ndir","unlock.recover.downloadTitle":"Keystore Dosyan\u0131z\u0131 \u0130ndirin","unlock.recover.password.placeholder":"G\xfc\xe7l\xfc bir \u015fifre girin","unlock.recover.submit":"G\xf6nder","unlock.recover.title":"Bir Keystore Dosyas\u0131n\u0131 Kurtar\u0131n","unlock.recover.understand.continue":"Bir Keystore Dosyas\u0131n\u0131 Kurtar\u0131n","unlock.recover.word.placeholder":"Ara","unlock.recover.wordlist.reset":"S\u0131f\u0131rla","unlock.recover.wordlistTitle":"L\xfctfen soldaki listeden Hat\u0131rlatma C\xfcmlenizi se\xe7in","unlock.support.wallets":" ","unlock.temporarySessionPassword":"Ge\xe7ici oturum \u015fifresi","unlock.thisIsNotAValidWalletFile":"Bu ge\xe7erli bir c\xfczdan dosyas\u0131 de\u011fil","unlock.trezor.connectToTrezor":"Trezor\'a Ba\u011flan","unlock.trezor.firmwareNotice":"Not: Cihaz\u0131n\u0131z\u0131 Binance Chain\'le kullanabilmek i\xe7in l\xfctfen en son Trezor yaz\u0131l\u0131m\u0131na g\xfcncelledi\u011finizden emin olun.","unlock.trezor.notOnTestNet":"Not: Trezor ayg\u0131tlar\u0131 \u015fu an i\xe7in Chrome ya da Firefox gerektiriyor ","unlock.trezor.title":"Bir Trezor Cihaz\u0131 ile kilidi a\xe7","unlock.unlockWalletNow":"C\xfczdan\u0131n Kilidini \u015eimdi A\xe7","unlock.walletConnect.notes":"Not: Trust Wallet ve CoolWallet Binance Chain Test A\u011f\u0131n\u0131 desteklemiyor.","unlock.walletConnect.recommendedWallet":"Desteklenen uygulamalar","unlock.walletConnet.getTrustWallet":"Trust Wallet Al","unlock.walletConnet.qrCodeDesc1":"WalletConnect QR Kodunu Al","unlock.walletConnet.qrCodeDesc2":"Hen\xfcz WalletConnect\'i destekleyen bir uygulaman\u0131z yok mu?","unlock.walletConnet.showWalletQrCode":"Bu ekrandaki QR kodu kullanarak mobil c\xfczdan\u0131n\u0131z\u0131 buraya ba\u011flay\u0131n","unlock.walletConnet.title":"\xd6nerilen","walletConnect.clickHereToUnlock":"Ba\u015fka bir c\xfczdan\u0131n kilidini a\xe7mak i\xe7in buraya t\u0131klay\u0131n","walletConnect.error":"WalletConnect Hatas\u0131","walletConnect.errorOccur":"Bir WalletConnect hatas\u0131 meydana geldi","walletConnect.pleaseEnsureOpenWorking":"L\xfctfen uygulaman\u0131n a\xe7\u0131k ve \xe7al\u0131\u015f\u0131r durumda oldu\u011fundan emin olun.","walletConnect.pleaseUseAWalletConnect":"L\xfctfen yukar\u0131daki QR kodu taramak i\xe7in WalletConnect\'i destekleyen bir uygulama kullan\u0131n","walletConnect.qrCode":"WalletConnect QR kodu","walletConnect.readyToConfirm":"L\xfctfen Onaylay\u0131n","walletConnect.readyToConfirmBody":"L\xfctfen c\xfczdan uygulamas\u0131ndaki i\u015flemi onaylay\u0131n.","walletconnect.notifycation.connectAgain":"Tekrar ba\u011flan","walletconnect.notifycation.disconnectMessage":" Mobil C\xfczdanla ba\u011flant\u0131 kesildi...","walletconnect.notifycation.hide":"Gizle","local.secure.storage":"Yerel G\xfcvenli Depolama","local.keystore.replace.tips":"Zaten bir keystore dosyan\u0131z var, de\u011fi\u015ftirmeden \xf6nce yedekledi\u011finizden emin olun","staking.title":"Staking \u0130leti\u015fimi","staking.goback":"L\xfctfen manuel olarak staking sayfas\u0131na geri d\xf6n\xfcn ve gezinin","staking.confirm":"Onayla","staking.cancel":"\u0130ptal et","staking.notification.delegator.address":"Yetkilendirici adres:","staking.notification.validator":"Do\u011frulay\u0131c\u0131:","staking.notification.amount":"Miktar:","staking.notification.network.fee":"A\u011f \xfccreti:","staking.notification.srcValidator.address":"Kaynak Do\u011frulay\u0131c\u0131:","staking.notification.dstalidator.address":"Hedef Do\u011frulay\u0131c\u0131:","staking.notification.total":"Toplam:"}'
      );
    },
    516: function (e) {
      e.exports = JSON.parse(
        '{"account.footer.copyright":"\xa9 2018 - 2019 Binance.org. B\u1ea3o l\u01b0u m\u1ecdi quy\u1ec1n.","account.footer.copyright.trubi":"\xa9 2018 - 2019 Trubi. B\u1ea3o l\u01b0u m\u1ecdi quy\u1ec1n.","account.footer.exchange":"S\xe0n giao d\u1ecbch","account.footer.home":"Trang ch\u1ee7","balances.filteredByAsset":"L\u1ecdc theo t\xe0i s\u1ea3n","balances.hideZeroBalance":"\u1ea8n s\u1ed1 d\u01b0 b\u1eb1ng 0","balances.myBalances":"S\u1ed1 d\u01b0 c\u1ee7a t\xf4i","blocked.country.list":"Hoa K\u1ef3, Trung Qu\u1ed1c, Albania, Bosnia v\xe0 Herzegovina, Belarus, C\u1ed9ng ho\xe0 D\xe2n ch\u1ee7 Congo, B\u1edd Bi\u1ec3n Ng\xe0, Crimea, Cuba, Iraq, Iran, Tri\u1ec1u Ti\xean, Liberia, Macedonia, Myanmar, Serbia, Sudan, Syria, Zimbabwe.","common.cancel":"H\u1ee7y b\u1ecf","common.close":"\u0110\xf3ng","common.confirm":"X\xe1c nh\u1eadn ","common.connect":"K\u1ebft n\u1ed1i","common.continue":"Ti\u1ebfp t\u1ee5c","common.errorOccured":"\u0111\xe3 x\u1ea3y ra l\u1ed7i","common.goBack":"Quay l\u1ea1i","common.googleUnlock":"Google Drive","common.keystoreFile":"File Keystore","common.ledgerDevice":"Thi\u1ebft b\u1ecb Ledger","common.loading":"\u0110ang t\u1ea3i","common.mnemonicPhrase":"C\u1ee5m t\u1eeb kh\xf4i ph\u1ee5c","common.networkError":"L\u1ed7i m\u1ea1ng l\u01b0\u1edbi","common.or":"ho\u1eb7c","common.password":"M\u1eadt kh\u1ea9u","common.placeOrder":"\u0110\u1eb7t l\u1ec7nh","common.pleaseCheckVisitWebsite":"H\xe3y \u0111\u1ea3m b\u1ea3o r\u1eb1ng b\u1ea1n \u0111ang truy c\u1eadp ","common.previous":"Tr\u01b0\u1edbc","common.privateKey":"Private Key","common.systemError":"L\u1ed7i h\u1ec7 th\u1ed1ng","common.trezorDevice":"Thi\u1ebft b\u1ecb Trezor","common.viewMyPrivateKey":"Xem Private Key c\u1ee7a t\xf4i","common.viewOnly":"Ch\u1ec9 xem","common.walletConnect":"V\xed di \u0111\u1ed9ng","common.yes":"C\xf3","common.warning":"Warning","common.next":"Ti\u1ebfp theo","common.buy-crypto-on-ramp":"Mua ti\u1ec1n m\xe3 ho\xe1","validation.onlyAlphaNumeric":"Ch\u1ec9 s\u1eed d\u1ee5ng k\xfd t\u1ef1 v\xe0 ch\u1eef s\u1ed1","validation.size":"\u0110\u1ed9 d\xe0i {label} ph\u1ea3i l\xe0 t\u1eeb {min} \u0111\u1ebfn {max}","create.backupKeystore.backupYour":"Sao l\u01b0u d\u1ef1 ph\xf2ng c\u1ee7a b\u1ea1n ","create.backupKeystore.cannotRecoveredIt":"N\xf3 s\u1ebd kh\xf4ng th\u1ec3 \u0111\u01b0\u1ee3c kh\xf4i ph\u1ee5c n\u1ebfu b\u1ea1n l\xe0m m\u1ea5t.","create.backupKeystore.createBackupFile":"H\xe3y t\u1ea1o b\u1ea3n l\u01b0u d\u1ef1 ph\xf2ng cho file n\xe0y!","create.backupKeystore.downloadKeystoreFile":"T\u1ea3i xu\u1ed1ng File Keystore (UTC/JSON)","create.backupKeystore.getMyPrivateKey":"L\u1ea5y Private Key c\u1ee7a t\xf4i","create.backupKeystore.keystoreFile":"File Keystore","create.backupKeystore.needFirstDownload":"B\u1ea1n ph\u1ea3i t\u1ea3i xu\u1ed1ng file keystore tr\u01b0\u1edbc","create.backupKeystore.notShareFile":"Kh\xf4ng \u0111\u01b0\u1ee3c chia s\u1ebb ho\u1eb7c s\u1eed d\u1ee5ng file n\xe0y tr\xean b\u1ea5t k\u1ef3 website ch\u01b0a \u0111\u01b0\u1ee3c x\xe1c minh n\xe0y. T\xe0i s\u1ea3n c\u1ee7a b\u1ea1n c\xf3 th\u1ec3 s\u1ebd b\u1ecb \u0111\xe1nh c\u1eafp.","create.backupMnemonic.note":"H\xe3y ghi l\u1ea1i \u0111o\u1ea1n v\u0103n b\u1ea3n d\u01b0\u1edbi \u0111\xe2y l\xean gi\u1ea5y v\xe0 l\u01b0u tr\u1eef n\xf3 \u1edf m\u1ed9t n\u01a1i b\xed m\u1eadt v\xe0 an to\xe0n.","create.backupMnemonic.title":"Xin h\xe3y sao l\u01b0u l\u1ea1i c\u1ee5m t\u1eeb ghi nh\u1edb","create.backupText":"H\xe3y ghi l\u1ea1i \u0111o\u1ea1n v\u0103n b\u1ea3n d\u01b0\u1edbi \u0111\xe2y l\xean gi\u1ea5y v\xe0 l\u01b0u tr\u1eef n\xf3 \u1edf m\u1ed9t n\u01a1i b\xed m\u1eadt v\xe0 an to\xe0n.","create.chooseKSOrMnemonic.keystoreAndPassword":"File Keystore + M\u1eadt kh\u1ea9u","create.chooseKSOrMnemonic.keystoreFile":"File Keystore","create.chooseKSOrMnemonic.recommendedUSBDrive":"Khuy\u1ebfn ngh\u1ecb l\xe0 n\xean l\u01b0u l\u1ea1i tr\xean USB","create.chooseKSOrMnemonic.recommendedUSBDriveOrPaper":"Khuy\u1ebfn ngh\u1ecb l\xe0 n\xean l\u01b0u l\u1ea1i tr\xean gi\u1ea5y ho\u1eb7c tr\xean USB","create.chooseKSOrMnemonic.title":"B\u1ea1n mu\u1ed1n t\u1ea1o v\xed m\u1edbi theo c\xe1ch n\xe0o?","create.chooseKSOrMnemonic.unlockExistWallet":"M\u1edf kho\xe1 V\xed s\u1eb5n c\xf3","create.chooseKSOrMnemonic.useKeystoreFile":"S\u1eed d\u1ee5ng File Keystore (UTC / JSON) + M\u1eadt kh\u1ea9u \u0111\u1ec3 truy c\u1eadp v\xe0o v\xed c\u1ee7a b\u1ea1n","create.chooseKSOrMnemonic.useMnemonicPhrase":"S\u1eed d\u1ee5ng C\u1ee5m t\u1eeb Ghi nh\u1edb 24 k\xfd t\u1ef1 \u0111\u1ec3 truy c\u1eadp v\xe0o v\xed","create.confirmNote":"B\u1ea1n c\xf3 ch\u1eafc \u0111\xe3 ghi l\u1ea1i C\u1ee5m t\u1eeb Ghi nh\u1edb?","create.createNewWallet":"T\u1ea1o v\xed m\u1edbi","create.doubleConfirmMnemonic.note":"H\xe3y l\u1ef1a ch\u1ecdn C\u1ee5m t\u1eeb Ghi nh\u1edb theo \u0111\xfang th\u1ee9 t\u1ef1 \u0111\u1ec3 ch\u1eafc r\u1eb1ng b\u1ea3n l\u01b0u c\u1ee7a b\u1ea1n l\xe0 ch\xednh x\xe1c.","create.doubleConfirmMnemonic.title":"Ch\u1ecdn c\xe1ch truy c\u1eadp ph\u1ee5","create.doubleConfirmMnemonic.tryAgain":"Th\u1ee9 t\u1ef1 C\u1ee5m t\u1eeb Ghi nh\u1edb kh\xf4ng ch\xednh x\xe1c. Vui l\xf2ng th\u1eed l\u1ea1i.","create.downloadKeyStoreFile":"T\u1ea3i xu\u1ed1ng File Keystore","create.enterPassword":"Nh\u1eadp m\u1eadt kh\u1ea9u","create.google.createWallet":"T\u1ea1o v\xed","create.google.createdSuccessfully":"T\u1ea1o v\xed th\xe0nh c\xf4ng","create.google.creationFailure":"T\u1ea1o v\xed th\u1ea5t b\u1ea1i","create.google.tryAgain":"Th\u1eed l\u1ea1i","create.google.walletName":"T\xean v\xed","create.googledrive.rePassErr":"M\u1eadt kh\u1ea9u \u0111\xe3 nh\u1eadp kh\xf4ng kh\u1edbp","create.keystoreFileAndPassword":"T\u1ea1o File Keystore + M\u1eadt kh\u1ea9u","create.pick.useGoogleDrive.description":"T\u1ea1o v\xed m\u1edbi b\u1eb1ng t\xe0i kho\u1ea3n Google","create.pick.useGoogleDrive.title":"S\u1eed d\u1ee5ng Google Drive","create.pick.useLocalKeystore.description":"T\u1ea1o v\xed m\u1edbi b\u1ea1n c\xf3 th\u1ec3 l\u01b0u trong thi\u1ebft b\u1ecb c\u1ee7a m\xecnh","create.pick.useLocalKeystore.title":"S\u1eed d\u1ee5ng Keystore File","create.pleaseCheck":"H\xe3y \u0111\u1ea3m b\u1ea3o r\u1eb1ng b\u1ea1n \u0111ang truy c\u1eadp ","create.reEnterPassword":"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u","create.stepTwo.desc":"Ch\xfang t\xf4i chu\u1ea9n b\u1ecb hi\u1ec3n th\u1ecb c\u1ee5m t\u1eeb ghi nh\u1edb, h\xe3y b\u1ea3o \u0111\u1ea3m kh\xf4ng c\xf3 ai \u0111ang nh\xecn v\xe0o m\xe0n h\xecnh c\u1ee7a b\u1ea1n.","create.success.desc1":"B\u1ea1n \u0111\xe3 s\u1eb5n s\xe0ng s\u1eed d\u1ee5ng v\xed Binance Chain v\xe0","create.success.desc2":"S\xe0n giao d\u1ecbch phi t\u1eadp trung!","create.success.title":"B\u1ea1n \u0111\xe3 s\u1eb5n s\xe0ng!","create.success.unlockWallet":"M\u1edf kho\xe1 v\xed","create.tutorial.next":"Ti\u1ebfp theo","create.tutorial.skip":"B\u1ecf qua ph\u1ea7n h\u01b0\u1edbng d\u1eabn (kh\xf4ng n\xean)","create.tutorial.step1.desc1":"Binance cam k\u1ebft cung c\u1ea5p cho b\u1ea1n tr\u1ea3i nghi\u1ec7m t\u1ed1t nh\u1ea5t v\xe0 an to\xe0n nh\u1ea5t tr\xean Binance Chain. \u0110\u1ec3 l\xe0m \u0111\u01b0\u1ee3c \u0111i\u1ec1u n\xe0y, ch\xfang t\xf4i y\xeau c\u1ea7u b\u1ea1n d\xe0nh ra m\u1ed9t ph\xfat \u0111\u1ec3 hi\u1ec3u c\xe1ch v\xed phi t\u1eadp trung ho\u1ea1t \u0111\u1ed9ng v\xe0 c\xf3 nh\u1eefng bi\u1ec7n ph\xe1p \u0111\u1ec3 t\u1ef1 b\u1ea3o v\u1ec7 m\xecnh. B\u1ea1n c\xf3 th\u1ec3 \u0111\u1ecdc \u0110i\u1ec1u kho\u1ea3n D\u1ecbch v\u1ee5 \u1edf \u0111\xe2y.","create.tutorial.step1.title":"Cam k\u1ebft c\u1ee7a ch\xfang t\xf4i","create.tutorial.step2.desc1":"B\u1ea1n ho\xe0n to\xe0n ch\u1ecbu tr\xe1ch nhi\u1ec7m b\u1ea3o qu\u1ea3n ti\u1ec1n c\u1ee7a m\xecnh. Kh\xf4ng m\u1ed9t ai, k\u1ec3 c\u1ea3 Binance, c\xf3 th\u1ec3 gi\xfap b\u1ea1n l\u1ea5y l\u1ea1i ti\u1ec1n n\u1ebfu \u0111\u1ec3 m\u1ea5t.","create.tutorial.step2.desc2":"Khi t\u1ea1o v\xed tr\xean Binance, b\u1ea1n \u0111\u01b0\u1ee3c cung c\u1ea5p 3 \u0111\u1ecbnh d\u1ea1ng kh\xe1c nhau, c\xf3 th\u1ec3 d\xf9ng m\u1ed9t trong ba \u0111\u1ec3 truy c\u1eadp v\xe0o v\xed.","create.tutorial.step2.title":"Gi\u1eef ti\u1ec1n c\u1ee7a b\u1ea1n","create.tutorial.step3.desc1":"B\u1ea1n c\xf3 th\u1ec3 ngh\u0129 file keystore nh\u01b0 l\xe0 \\"ID ng\u01b0\u1eddi d\xf9ng\\", c\xf2n m\u1eadt kh\u1ea9u l\xe0 \u0111\u1ec3 m\u1edf kho\xe1 v\xed. C\u1ea7n c\u1ea3 hai \u0111\u1ec3 c\xf3 th\u1ec3 truy c\u1eadp v\xed, n\xean ph\u1ea3i gi\u1eef ch\xfang an to\xe0n. \u0110\xe2y l\xe0 m\u1ed9t y\xeau c\u1ea7u b\u1eaft bu\u1ed9c c\u1ee7a Binance.","create.tutorial.step3.title":"File Keystore + M\u1eadt kh\u1ea9u","create.tutorial.step4.desc1":"24 k\xfd t\u1ef1 v\u1eeba l\xe0 \\"ID ng\u01b0\u1eddi d\xf9ng\\" v\xe0 m\u1eadt kh\u1ea9u. \u0110\xe2y l\xe0 c\xe1ch th\u1ee9 hai \u0111\u1ec3 truy c\u1eadp v\xe0o v\xed trong tr\u01b0\u1eddng h\u1ee3p m\u1ea5t file keystore ho\u1eb7c qu\xean m\u1eadt kh\u1ea9u. B\u1ea5t k\u1ef3 ai bi\u1ebft c\u1ee5m t\u1eeb ghi nh\u1edb c\u1ee7a b\u1ea1n \u0111\u1ec1u c\xf3 th\u1ec3 truy c\u1eadp v\xe0o v\xed, n\xean h\xe3y gi\u1eef n\xf3 an to\xe0n.","create.tutorial.step4.title":"C\u1ee5m t\u1eeb Ghi nh\u1edb","create.tutorial.step5.desc1":"\u0110\xe2y l\xe0 m\u1ed9t c\xe1ch hi\u1ec3n th\u1ecb kh\xe1c cho c\u1ee5m t\u1eeb ghi nh\u1edb.","create.tutorial.step5.desc2":"Binance y\xeau c\u1ea7u t\u1ea5t c\u1ea3 ng\u01b0\u1eddi d\xf9ng s\u1eed d\u1ee5ng file keystore + m\u1eadt kh\u1ea9u; v\xe0 ch\u1ecdn ho\u1eb7c c\u1ee5m t\u1eeb ghi nh\u1edb ho\u1eb7c private key l\xe0m ph\u01b0\u01a1ng \xe1n d\u1ef1 ph\xf2ng.","create.tutorial.step5.title":"Private Key","create.tutorial.title":"H\u01b0\u1edbng d\u1eabn t\u1ea1o v\xed","create.tutorial.understand":"T\xf4i hi\u1ec3u","create.understandCheckbox":"T\xf4i hi\u1ec3u l\xe0 Binance kh\xf4ng th\u1ec3 kh\xf4i ph\u1ee5c ho\u1eb7c \u0111\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u ho\u1eb7c file keystore c\u1ee7a t\xf4i. T\xf4i s\u1ebd t\u1ea1o m\u1ed9t b\u1ea3n sao l\u01b0u file keystore/m\u1eadt kh\u1ea9u, gi\u1eef b\xed m\u1eadt n\xf3, ho\xe0n th\xe0nh t\u1ea5t c\u1ea3 c\xe1c b\u01b0\u1edbc t\u1ea1o v\xed v\xe0 \u0111\u1ed3ng \xfd v\u1edbi t\u1ea5t c\u1ea3 ","create.understandCheckbox.terms":"\u0111i\u1ec1u kho\u1ea3n","create.unlockExistWallet":"M\u1edf kho\xe1 V\xed s\u1eb5n c\xf3","create.yourKeyStore":"Keystore c\u1ee7a b\u1ea1n","editWallet.remove":"G\u1ee1 b\u1ecf","editWallet.remove.desc1":"H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng v\xed hi\u1ec7n kh\xf4ng c\xf3 ti\u1ec1n","editWallet.remove.desc2":"v\xec kh\xf4ng c\xf3 c\xe1ch n\xe0o \u0111\u1ec3 kh\xf4i ph\u1ee5c v\xed","editWallet.remove.removeButton":"\u0110\xfang, g\u1ee1 b\u1ecf v\xed","editWallet.remove.title":"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn s\u1ebd g\u1ee1 b\u1ecf v\xed n\xe0y?","editWallet.rename":"\u0110\u1ed5i t\xean","editWallet.rename.duplicateName":"T\xean v\xed \u0111\xe3 t\u1ed3n t\u1ea1i","editWallet.rename.errMsg":"T\xean kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng","editWallet.rename.title":"T\xean v\xed","editWallet.title":"T\xean v\xed","editWallet.createWallet":"T\u1ea1o v\xed","editWallet.unlockWallet":"M\u1edf v\xed","exchange.BTCValue":"Gi\xe1 tr\u1ecb BTC","exchange.amount":"S\u1ed1 l\u01b0\u1ee3ng","exchange.asset":"T\xe0i s\u1ea3n","exchange.availableBalance":"S\u1ed1 d\u01b0 kh\u1ea3 d\u1ee5ng","exchange.blockHeight":"\u0110\u1ed9 cao kh\u1ed1i","exchange.buy":"Mua","exchange.calendar.clear":"Xo\xe1","exchange.calendar.ok":"\u0110\u1ed3ng \xfd","exchange.calendar.today":"H\xf4m nay","exchange.chartbox.depth":"\u0110\u1ed9 s\xe2u","exchange.coin":"\u0110\u1ed3ng coin","exchange.date":"Ng\xe0y","exchange.estimatedValue":"Gi\xe1 tr\u1ecb \u01b0\u1edbc t\xednh","exchange.filled":"\u0110\xe3 kh\u1edbp l\u1ec7nh","exchange.from":"T\u1eeb","exchange.frozen":"\u0110\xe3 \u0111\xf3ng b\u0103ng","exchange.hideAllCanceled":"\u1ea8n t\u1ea5t c\u1ea3 l\u1ec7nh \u0111\xe3 hu\u1ef7","exchange.hideOtherPairs":"\u1ea8n c\xe1c c\u1eb7p kh\xe1c","exchange.inOrder":"\u0110ang \u0111\u1eb7t l\u1ec7nh","exchange.index.books":"S\u1ed5 l\u1ec7nh","exchange.index.chart":"\u0110\u1ed3 th\u1ecb","exchange.max":"T\u1ed1i \u0111a","exchange.min":"S\u1ed1 l\u01b0\u1ee3ng giao d\u1ecbch t\u1ed1i thi\u1ec3u:","exchange.name":"T\xean","exchange.notional":"Danh ngh\u0129a","exchange.oneDay":"1 Ng\xe0y","exchange.oneMonth":"1 Th\xe1ng","exchange.oneWeek":"1 Tu\u1ea7n","exchange.pair":"C\u1eb7p","exchange.placeOrder.bestAsk":"Gi\xe1 h\u1ecfi b\xe1n t\u1ed1t nh\u1ea5t","exchange.placeOrder.bestBid":"Gi\xe1 h\u1ecfi mua t\u1ed1t nh\u1ea5t","exchange.placeOrder.limitOrder":"L\u1ec7nh Limit","exchange.placeOrder.noEnoughBalance":"s\u1ed1 d\u01b0 kh\xf4ng \u0111\u1ee7","exchange.placeOrder.orderError":"L\u1ed7i \u0111\u1eb7t l\u1ec7nh","exchange.placeOrder.orderPriceHigher":"Gi\xe1 \u0111\u1eb7t l\u1ec7nh c\u1ee7a b\u1ea1n s\u1ebd cao h\u01a1n 2% so v\u1edbi gi\xe1 th\u1ecb tr\u01b0\u1eddng g\u1ea7n nh\u1ea5t. H\xe3y thao t\xe1c th\u1eadn tr\u1ecdng.","exchange.placeOrder.orderPriceLow":"Gi\xe1 \u0111\u1eb7t l\u1ec7nh c\u1ee7a b\u1ea1n s\u1ebd th\u1ea5p h\u01a1n 2% so v\u1edbi gi\xe1 th\u1ecb tr\u01b0\u1eddng g\u1ea7n nh\u1ea5t. H\xe3y thao t\xe1c th\u1eadn tr\u1ecdng.","exchange.placeOrder.pleaseInputCorrectAmount":"H\xe3y nh\u1eadp s\u1ed1 ti\u1ec1n ch\xednh x\xe1c","exchange.placeOrder.buy.correctAmountForbep8":"S\u1ed1 ti\u1ec1n n\xean > 1","exchange.placeOrder.sell.correctAmountForbep8":"S\u1ed1 ti\u1ec1n n\xean > 1 ho\u1eb7c = s\u1ed1 d\u01b0","exchange.placeOrder.pleaseInputCorrectPrice":"H\xe3y nh\u1eadp m\u1ee9c gi\xe1 ch\xednh x\xe1c","exchange.placeOrder.roundSizeErrorMsg":"B\u1ea1n ch\u1ec9 c\xf3 th\u1ec3 {side}{baseAsset} v\u1edbi s\u1ed1 l\u01b0\u1ee3ng {lotSize}","exchange.placeOrder.successNotifyMsg":"B\u1ea1n \u0111\xe3 t\u1ea1o th\xe0nh c\xf4ng l\u1ec7nh limit {side}{quantity}{quoteAsset}","exchange.placeOrder.successNotifyTitle":"\u0110\xe3 t\u1ea1o L\u1ec7nh Limit {side}","exchange.pleaseSelectDate":"vui l\xf2ng ch\u1ecdn ng\xe0y","exchange.pleaseUnlockWallet.btn":"M\u1edf kho\xe1 v\xed","exchange.pleaseUnlockWallet.createNewWallet":"T\u1ea1o v\xed m\u1edbi","exchange.pleaseUnlockWallet.desc":"Oops! Vui l\xf2ng m\u1edf kho\xe1 v\xed tr\u01b0\u1edbc","exchange.pleaseUnlockWallet.noWallet":"Kh\xf4ng c\xf3 v\xed?","exchange.price":"Gi\xe1","exchange.search":"T\xecm ki\u1ebfm","exchange.sell":"B\xe1n","exchange.side":"B\xean","exchange.status":"Tr\u1ea1ng th\xe1i","exchange.symbolPriceInfo.high":"Gi\xe1 cao nh\u1ea5t","exchange.symbolPriceInfo.lastPrice":"Gi\xe1 g\u1ea7n nh\u1ea5t","exchange.symbolPriceInfo.low":"Gi\xe1 th\u1ea5p nh\u1ea5t","exchange.symbolPriceInfo.twentyFourHChange":"Thay \u0111\u1ed5i 24h","exchange.symbolPriceInfo.twentyFourHHigh":"Gi\xe1 cao nh\u1ea5t 24h","exchange.symbolPriceInfo.twentyFourHLow":"Gi\xe1 th\u1ea5p nh\u1ea5t 24h","exchange.symbolPriceInfo.twentyFourHVolume":"Kh\u1ed1i l\u01b0\u1ee3ng giao d\u1ecbch 24h","exchange.symbolPriceInfo.vol":"KL","exchange.threeMonths":"Qu\xfd","exchange.time.from":"T\u1eeb","exchange.to":"\u0110\u1ebfn","exchange.total":"T\u1ed5ng","exchange.totalBalance":"T\u1ed5ng s\u1ed1 d\u01b0","exchange.tradingHistory.time":"Th\u1eddi gian","exchange.tradingHistory.title":"L\u1ecbch s\u1eed giao d\u1ecbch","exchange.tradingPair.change":"Thay \u0111\u1ed5i","exchange.tradingPair.pair":"C\u1eb7p","exchange.tradingPair.price":"Gi\xe1","exchange.tradingPair.search":"T\xecm ki\u1ebfm","exchange.tradingPair.volume":"Kh\u1ed1i l\u01b0\u1ee3ng","exchange.txFee":"Ph\xed giao d\u1ecbch","exchange.txHash":"Hash giao d\u1ecbch","exchange.type":"Lo\u1ea1i","exchange.value":"Gi\xe1 tr\u1ecb","exchange.miniToken.warning.title":"Do your own research","exchange.miniToken.warning.content1":"MiniToken is a special token type on Binance Chain. The information and materials provided here, whether or not provided on Binance\'s website/webpages, on third party websites, in marketing materials, newsletters or any form of publication are provided for general information only. They do not constitute an offer to buy or sell any products offered or advertised. Likewise, they are not to be taken as investment, financial or trading advice. Any expression of opinion is personal to the author and there is no guarantee of completeness or accuracy.","exchange.miniToken.warning.content2":"Binance shall not be responsible for any losses arising from investment based on any information made available via any of Binance\'s social media accounts or websites. All users or new participants, regardless of experience and knowledge are strongly recommended to do their own research prior to trying out any of the products we offer. If the user is still unsure after research, he/she is encouraged to avoid the product entirely. The user acknowledges that some of the products offered by Binance could be on the riskier spectrum. For avoidance of doubt, all users are encouraged to read the Terms of Use clearly.","exchange.miniToken.warning.button1":"H\xe3y ho\xe0n t\u1ea5t X\xe1c minh danh t\xednh c\u1ee7a b\u1ea1n tr\u01b0\u1edbc. B\u1ea1n s\u1ebd c\xf3 th\u1ec3 r\xfat \u0111\u1ebfn 100 BTC trong v\xf2ng 24 gi\u1edd","exchange.miniToken.warning.fully.understand":"I fully understand, do not show it anymore.","fees.fee":"Ph\xed giao d\u1ecbch","fees.height":"\u0110\u1ed9 cao","fees.note":"L\u01b0u \xfd","footer.terms":"\u0110i\u1ec1u kho\u1ea3n D\u1ecbch v\u1ee5","footer.privacy":"Privacy","googledrive.create.nameExist":"T\xean t\u1ed3n t\u1ea1i","header.balances":"S\u1ed1 d\u01b0","header.createWallet":"T\u1ea1o v\xed m\u1edbi","header.exchange":"S\xe0n giao d\u1ecbch","header.exchange.bep2":"Tokens (BEP2)","header.exchange.bep8":"MiniTokens (BEP8)","header.exchange.menu.bep2":"Tokens (BEP2)","header.exchange.menu.bep8":"MiniTokens (BEP8)","header.explorer":"Explorer","header.faq":"Docs / FAQ","header.blog":"Blog","header.feeHistory":"L\u1ecbch s\u1eed ph\xed","header.forums":"Di\u1ec5n \u0111\xe0n","header.mainnet":"Mainnet","header.openOrders":"L\u1ec7nh \u0111ang m\u1edf","header.orderHistory":"L\u1ecbch s\u1eed l\u1ec7nh","header.orders":"L\u1ec7nh","header.testnet":"testnet","header.tradeHistory":"L\u1ecbch s\u1eed giao d\u1ecbch","header.transactions":"Giao d\u1ecbch","header.unlockWallet":"M\u1edf kho\xe1 v\xed","header.user.changeWallet":"Thay \u0111\u1ed5i v\xed","header.user.closeWallet":"\u0110\xf3ng v\xed","header.user.coinomi":"Coinomi ","header.user.copyAddress":"sao ch\xe9p \u0111\u1ecba ch\u1ec9","header.user.copySuccess":"Sao ch\xe9p th\xe0nh c\xf4ng!","header.user.createNewWallet":"T\u1ea1o v\xed m\u1edbi","header.user.exportKeystoreFile":"Xu\u1ea5t File Keystore","header.user.goToExplorer":"\u0111i \u0111\u1ebfn explorer","header.user.infinito":"Infinito ","header.user.ledger":"V\xed Ledger ","header.user.trezor":"Thi\u1ebft b\u1ecb Trezor","header.user.wallet":"V\xed","header.user.walletConnect":"V\xed WalletConnect ","header.youWantCloseWallet":"B\u1ea1n c\xf3 ch\u1eafc l\xe0 mu\u1ed1n \u0111\xf3ng v\xed?","home.aboutPage.desc1.line1":"Binance Chain l\xe0 m\u1ed9t s\xe1ng ki\u1ebfn blockchain ban \u0111\u1ea7u \u0111\u01b0\u1ee3c ph\xe1t tri\u1ec3n b\u1edfi Binance.","home.aboutPage.desc1.line2":"N\xf3 hi\u1ec7n \u0111\u1ea1i, an to\xe0n v\xe0 c\xf3 t\u1ed1c \u0111\u1ed9 giao d\u1ecbch g\u1ea7n nh\u01b0 t\u1ee9c th\xec (nhanh ch\xf3ng).","home.aboutPage.desc2.line1":"Binance DEX l\xe0 m\u1ed9t c\u01a1 ch\u1ebf kh\u1edbp l\u1ec7nh phi t\u1eadp trung,","home.aboutPage.desc2.line2":"c\u1ea5p ngu\u1ed3n b\u1edfi c\xf4ng ngh\u1ec7 Binance Chain.","home.aboutPage.desc3.line1":"Binance DEX l\xe0 m\u1ed9t th\u1ecb tr\u01b0\u1eddng hi\u1ec7n \u0111\u1ea1i v\xe0 an to\xe0n \u0111\u1ec3 ph\xe1t h\xe0nh","home.aboutPage.desc3.line2":"v\xe0 giao d\u1ecbch t\xe0i s\u1ea3n k\u1ef9 thu\u1eadt s\u1ed1, v\xe0 kh\xf4ng ai ngo\xe0i b\u1ea1n n\u1eafm gi\u1eef private key. Vi\u1ec7c giao d\u1ecbch t\xe0i s\u1ea3n \u01b0a th\xedch c\u1ee7a b\u1ea1n ch\u01b0a bao gi\u1edd an to\xe0n nh\u01b0 l\xfac n\xe0y.","home.aboutPage.title":"V\u1ec1 Binance DEX","home.binanceDex":"Binance DEX","home.processPage.aboutBalance":"V\u1ec1 Binance DEX","home.processPage.create":"T\u1ea1o","home.processPage.createDesc":"B\u01b0\u1edbc \u0111\u1ea7u ti\xean l\xe0 t\u1ea1o \u0111\u1ecba ch\u1ec9 Binance Chain.","home.processPage.createWallet":"T\u1ea1o v\xed m\u1edbi","home.processPage.getStart":"B\u1eaft \u0111\u1ea7u v\u1edbi Binance DEX","home.processPage.go":"\u0110i \u0111\u1ebfn","home.processPage.placeOrders":"\u0110\u1eb7t l\u1ec7nh","home.processPage.placeOrdersDesc":"S\u1eed d\u1ee5ng v\xed tr\xean web ho\u1eb7c API \u0111\u1ec3 g\u1eedi ho\u1eb7c hu\u1ef7 l\u1ec7nh.","home.processPage.transferAssets":"Chuy\u1ec3n t\xe0i s\u1ea3n","home.processPage.transferAssetsDesc":"V\u1edbi \u0111\u1ecba ch\u1ec9 Binance Chain, v\u1ed1n \u0111\u01b0\u1ee3c t\u1ea1o ra cho b\u1ea5t k\u1ef3 v\xed n\xe0o h\u1ed7 tr\u1ee3 Binance Chain, b\u1ea1n c\xf3 th\u1ec3 chuy\u1ec3n BNB ho\u1eb7c c\xe1c t\xe0i s\u1ea3n kh\xe1c \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef \u1edf \u0111\u1ecba ch\u1ec9 \u0111\xf3.","home.processPage.unlock":"M\u1edf kho\xe1","home.processPage.unlockDesc":"B\u1ed1n c\xe1ch \u0111\u1ec3 m\u1edf kho\xe1 v\xed c\u1ee7a b\u1ea1n","home.processPage.unlockMode1":"V\xed WalletConnect","home.processPage.unlockMode2":"V\xed Ledger","home.processPage.unlockMode3":"File Keystore + M\u1eadt kh\u1ea9u","home.processPage.unlockMode4":"C\u1ee5m t\u1eeb ghi nh\u1edb","home.processPage.unlockWallet":"M\u1edf kho\xe1 v\xed","home.startPage.createWallet":"T\u1ea1o v\xed m\u1edbi","home.startPage.desc1":"N\u1ec1n t\u1ea3ng giao d\u1ecbch t\xe0i s\u1ea3n k\u1ef9 thu\u1eadt s\u1ed1 nhanh v\xe0 an to\xe0n","home.startPage.desc2":"Ti\xeau chu\u1ea9n m\u1edbi cho giao d\u1ecbch ti\u1ec1n m\xe3 ho\xe1 \u0111\xe3 c\xf3 m\u1eb7t.","home.startPage.getTestBNB":"Nh\u1eadn BNB th\u1eed nghi\u1ec7m","home.startPage.startTrading":"B\u1eaft \u0111\u1ea7u giao d\u1ecbch","home.whyPage.community":"N\xf3 l\xe0 m\u1ed9t S\xe1ng ki\u1ebfn C\u1ed9ng \u0111\u1ed3ng","home.whyPage.communityDesc":"Binance Chain \u0111\u01b0\u1ee3c c\u1ea5p ngu\u1ed3n b\u1edfi c\u01a1 ch\u1ebf qu\u1ea3n tr\u1ecb on-chain v\xe0 c\xe1c ph\u1ea7n m\u1ec1m m\xe3 ngu\u1ed3n m\u1edf.","home.whyPage.decentralized":"Phi t\u1eadp trung","home.whyPage.decentralizedDesc":"Tr\u1ea3i nghi\u1ec7m giao d\u1ecbch tr\u1ef1c ti\u1ebfp gi\u1eefa c\xe1c v\xed m\xe0 kh\xf4ng th\xf4ng qua b\u1ea5t k\u1ef3 b\xean th\u1ee9 ba ho\u1eb7c c\u01a1 ch\u1ebf t\u1eadp quy\u1ec1n n\xe0o.","home.whyPage.getStarted":"H\xe3y b\u1eaft \u0111\u1ea7u","home.whyPage.lowTradingFees":"Ph\xed giao d\u1ecbch th\u1ea5p","home.whyPage.lowTradingFeesDesc":"Giao d\u1ecbch m\xe0 kh\xf4ng c\xf3 ph\xed n\u1ea1p, r\xfat ho\u1eb7c \u0111\u1eb7t l\u1ec7nh - v\xe0 ng\u01b0\u1eddi s\u1edf h\u1eefu BNB c\xf2n nh\u1eadn \u0111\u01b0\u1ee3c nhi\u1ec1u l\u1ee3i nhu\u1eadn h\u01a1n.","home.whyPage.safeAndSecure":"An to\xe0n v\xe0 B\u1ea3o \u0111\u1ea3m","home.whyPage.safeAndSecureDesc":"Ti\u1ec1n c\u1ee7a b\u1ea1n \u0111\u01b0\u1ee3c gi\u1eef tr\xean m\u1ed9t \u0111\u1ecba ch\u1ec9 blockchain v\u1edbi private key ch\u1ec9 m\xecnh b\u1ea1n ki\u1ec3m so\xe1t.","home.whyPage.title":"V\xec sao l\u1ea1i ch\u1ecdn Binance DEX","home.whyPage.userFriendly":"Th\xe2n thi\u1ec7n v\u1edbi ng\u01b0\u1eddi d\xf9ng","home.whyPage.userFriendlyDesc":"T\u1ea1o v\xed, m\u1edf kho\xe1 v\xed, v\xe0 b\u1ea1n \u0111\xe3 s\u1eb5n s\xe0ng giao d\u1ecbch. Kh\xf4ng c\u1ea7n ph\u1ea3i n\u1ea1p ho\u1eb7c r\xfat.","inputPassword.passwordRule":"M\u1eadt kh\u1ea9u c\u1ee7a b\u1ea1n ph\u1ea3i bao g\u1ed3m c\xe1c th\xe0nh t\u1ed1 sau","inputPassword.passwordRule1":"T\u1ed1i thi\u1ec3u 8 k\xfd t\u1ef1","inputPassword.passwordRule2":"C\xf3 k\xfd t\u1ef1 in hoa, bi\u1ec3u t\u01b0\u1ee3ng v\xe0 s\u1ed1","inputPassword.setANewPassword":"\u0110\u1eb7t m\u1eadt kh\u1ea9u m\u1edbi","landing.connectWallet":"K\u1ebft n\u1ed1i v\xed","landing.createWallet":"T\u1ea1o v\xed m\u1edbi","landing.desc1":"Binance DEX","landing.desc2":"N\u1ec1n t\u1ea3ng giao d\u1ecbch t\xe0i s\u1ea3n k\u1ef9 thu\u1eadt s\u1ed1 nhanh v\xe0 an to\xe0n. Ti\xeau chu\u1ea9n m\u1edbi cho giao d\u1ecbch ti\u1ec1n m\xe3 ho\xe1 \u0111\xe3 c\xf3 m\u1eb7t.","landing.footer.fee":"Ph\xed","landing.footer.terms":"\u0110i\u1ec1u kho\u1ea3n D\u1ecbch v\u1ee5","landing.footer.privacy":"Privacy","landing.how.connect":"K\u1ebft n\u1ed1i","landing.how.connect.desc":"Vi\u1ec7c truy c\u1eadp Binance DEX d\u1ec5 h\u01a1n r\u1ea5t nhi\u1ec1u so v\u1edbi b\u1ea1n ngh\u0129. Ch\u1ec9 c\u1ea7n nh\u1ea5p v\xe0o n\xfat k\u1ebft n\u1ed1i v\xe0 l\u1ef1a ch\u1ecdn m\u1ed9t trong nh\u1eefng l\u1ef1a ch\u1ecdn k\u1ebft n\u1ed1i. V\xe0 th\u1ebf l\xe0 xong.","landing.how.create":"T\u1ea1o","landing.how.create.desc":"Binance DEX cho b\u1ea1n quy\u1ec1n l\u1ef1a ch\u1ecdn t\u1eeb keystore ti\u1ec7n l\u1ee3i cho \u0111\u1ebfn c\xe1c lo\u1ea1i v\xed ph\u1ea7n c\u1ee9ng b\u1ea3o m\u1eadt t\u1ed1i \u0111a.","landing.how.step":"b\u01b0\u1edbc","landing.how.title":"C\xe1ch s\u1eed d\u1ee5ng","landing.how.trade":"Giao d\u1ecbch","landing.how.trade.desc":"M\u1ee5c ti\xeau c\u1ee7a ch\xfang t\xf4i l\xe0 khi\u1ebfn ho\u1ea1t \u0111\u1ed9ng giao d\u1ecbch li\u1ec1n m\u1ea1ch v\xe0 kh\xf4ng t\xe1ch bi\u1ec7t kh\u1ecfi Binance.com. \u0110\u1ec3 l\xe0m \u0111i\u1ec1u n\xe0y, ch\xfang t\xf4i \u0111\xe3 t\u1ed1i \u01b0u nh\u1eefng t\xednh n\u0103ng t\u1ed1t nh\u1ea5t \u0111\u1ec3 m\u1ecdi th\u1ee9 b\u1ea1n y\xeau th\xedch \u0111\u1ec1u c\xf3 tr\xean Binance DEX.","landing.markets":"Th\u1ecb tr\u01b0\u1eddng","landing.markets.24HChange":"Thay \u0111\u1ed5i 24H","landing.markets.24HVolume":"Kh\u1ed1i l\u01b0\u1ee3ng 24H","landing.markets.lastPrice":"Gi\xe1 g\u1ea7n nh\u1ea5t","landing.markets.pair":"C\u1eb7p","landing.markets.searchPlaceholder":"T\xecm ki\u1ebfm \u0111\u1ed3ng coin","landing.menu.balances":"S\u1ed1 d\u01b0","landing.menu.changeWallet":"Thay \u0111\u1ed5i v\xed","landing.menu.closeWallet":"\u0110\xf3ng v\xed","landing.menu.community":"C\u1ed9ng \u0111\u1ed3ng","landing.menu.copyAddress":"sao ch\xe9p \u0111\u1ecba ch\u1ec9","landing.menu.docs":"Docs","landing.menu.exchange":"S\xe0n giao d\u1ecbch","landing.menu.explorer":"Kh\xe1m ph\xe1","landing.menu.orders":"L\u1ec7nh","landing.menu.orders.feeHistory":"L\u1ecbch s\u1eed ph\xed","landing.menu.orders.openOrders":"L\u1ec7nh \u0111ang m\u1edf","landing.menu.orders.orderHistory":"L\u1ecbch s\u1eed \u0111\u1eb7t l\u1ec7nh","landing.menu.orders.tradeHistory":"L\u1ecbch s\u1eed giao d\u1ecbch","landing.menu.testnet":"Testnet","landing.menu.tools":"C\xf4ng c\u1ee5","landing.menu.transaction":"Giao d\u1ecbch","landing.menu.wallet":"V\xed","landing.startTrading":"B\u1eaft \u0111\u1ea7u giao d\u1ecbch","landing.trust.activeAddress":"V\xed \u0111ang ho\u1ea1t \u0111\u1ed9ng","landing.trust.activeAddress.desc":"Nhi\u1ec1u ng\u01b0\u1eddi tin t\u01b0\u1edfng c\u01a1 s\u1edf h\u1ea1 t\u1ea7ng v\xe0 h\u1ec7 th\u1ed1ng giao d\u1ecbch c\u1ee7a Binance DEX h\u01a1n nh\u1eefng gi\u1ea3i ph\xe1p v\xed kh\xe1c.","landing.trust.pairs":"C\u1eb7p","landing.trust.pairs.desc":"Binance DEX cho b\u1ea1n th\xeam l\u1ef1a ch\u1ecdn v\xe0 s\u1ef1 linh ho\u1ea1t trong giao d\u1ecbch, m\u1ed7i tu\u1ea7n m\u1ed9t t\xednh n\u0103ng m\u1edbi.","landing.trust.rank":"X\u1ebfp h\u1ea1ng","landing.trust.rank.desc":"Binance DEX l\xe0 s\xe0n giao d\u1ecbch ti\u1ec1n m\xe3 ho\xe1 phi t\u1eadp trung c\xf3 kh\u1ed1i l\u01b0\u1ee3ng giao d\u1ecbch l\u1edbn nh\u1ea5t tr\xean CoinMarketCap.","landing.trust.title":"V\xec sao ng\u01b0\u1eddi d\xf9ng tin t\u01b0\u1edfng ch\xfang t\xf4i","landing.why.competitive":"C\u1ea1nh tranh","landing.why.competitive.desc":"Ph\xed giao d\u1ecbch ch\u1ec9 l\xe0 0.04% khi b\u1ea1n d\xf9ng BNB \u0111\u1ec3 tr\u1ea3 ph\xed. Con s\u1ed1 n\xe0y th\u1ea5p g\u1ea7n m\u1ed9t n\u1eeda so v\u1edbi Binance.com, s\xe0n giao d\u1ecbch c\xf3 m\u1ee9c ph\xed ph\u1ea3i ch\u0103ng h\xe0ng \u0111\u1ea7u th\u1ebf gi\u1edbi.","landing.why.fast":"Nhanh ch\xf3ng","landing.why.fast.desc":"V\u1edbi th\u1eddi gian t\u1ea1o kh\u1ed1i 1 gi\xe2y, x\xe1c nh\u1eadn giao d\u1ecbch blockchain gi\u1edd \u0111\xe3 l\xe0 qu\xe1 kh\u1ee9. H\xe3y t\u1eadn d\u1ee5ng t\u1ea5t c\u1ea3 l\u1ee3i th\u1ebf c\u1ee7a DEX m\xe0 kh\xf4ng lo gi\xe1n \u0111o\u1ea1n giao d\u1ecbch.","landing.why.secure":"An to\xe0n","landing.why.secure.desc":"Binance DEX \u0111\u01b0a c\xf4ng t\xe1c b\u1ea3o m\u1eadt l\xean m\u1ed9t t\u1ea7m cao m\u1edbi. Chuy\u1ec3n ti\u1ec1n v\xe0 giao d\u1ecbch \u0111\u1ed3ng c\u1ea5p gi\xfap h\u1ea1n ch\u1ebf t\u1ed1i \u0111a c\xe1c hi\u1ec3m ho\u1ea1 an ninh.","landing.why.title":"V\xec sao l\u1ea1i ch\u1ecdn Binance DEX","lang.menu.copyAddress":" ","noContent.descPrefix":"B\u1ea1n kh\xf4ng c\xf3 ","openOrders.areYourTrue":"B\u1ea1n c\xf3 ch\u1eafc l\xe0 mu\u1ed1n","openOrders.cancel":"hu\u1ef7","openOrders.cancel all":"hu\u1ef7 t\u1ea5t c\u1ea3","openOrders.cancel buy":"hu\u1ef7 mua","openOrders.cancel sell":"hu\u1ef7 b\xe1n","openOrders.cancelAll":"Hu\u1ef7 T\u1ea5t c\u1ea3","openOrders.cancelBuy":"Hu\u1ef7 Mua","openOrders.cancelOrder":"Hu\u1ef7 l\u1ec7nh","openOrders.cancelOrders":"Hu\u1ef7 c\xe1c l\u1ec7nh","openOrders.cancelPartialSuccess":"Hu\u1ef7 m\u1ed9t ph\u1ea7n th\xe0nh c\xf4ng","openOrders.cancelSell":"Hu\u1ef7 l\u1ec7nh b\xe1n","openOrders.cancelSuccess":"Hu\u1ef7 th\xe0nh c\xf4ng","openOrders.keepOrder":"Gi\u1eef l\u1ec7nh","openOrders.keepOrders":"Gi\u1eef c\xe1c l\u1ec7nh","openOrders.noBuyOpenOrders":"kh\xf4ng c\xf3 l\u1ec7nh mua n\xe0o \u0111ang m\u1edf","openOrders.noOpenOrders":"kh\xf4ng c\xf3 l\u1ec7nh n\xe0o \u0111ang m\u1edf","openOrders.noSellOpenOrders":"kh\xf4ng c\xf3 l\u1ec7nh b\xe1n n\xe0o \u0111ang m\u1edf","openOrders.title":"L\u1ec7nh \u0111ang m\u1edf","orderForm.amount":"S\u1ed1 l\u01b0\u1ee3ng","orderForm.avb":"Avb","orderForm.buy":"Mua","orderForm.equivalent":"T\u01b0\u01a1ng \u0111\u01b0\u01a1ng","orderForm.price":"Gi\xe1","orderForm.sell":"B\xe1n","orderForm.total":"T\u1ed5ng","orderHistory.openHistory":"l\u1ecbch s\u1eed \u0111\u1eb7t l\u1ec7nh","orderHistory.title":"L\u1ecbch s\u1eed \u0111\u1eb7t l\u1ec7nh","orderHistory.tradeId":"ID giao d\u1ecbch","orderHistory.tradingPrice":"Gi\xe1 giao d\u1ecbch","orderHistory.tradingTotal":"T\u1ed5ng l\u01b0\u1ee3ng giao d\u1ecbch","privateKeyModal.backupText":"H\xe3y ghi l\u1ea1i \u0111o\u1ea1n v\u0103n b\u1ea3n d\u01b0\u1edbi \u0111\xe2y l\xean gi\u1ea5y v\xe0 l\u01b0u tr\u1eef n\xf3 \u1edf m\u1ed9t n\u01a1i b\xed m\u1eadt v\xe0 an to\xe0n.","privateKeyModal.title":"Private key c\u1ee7a b\u1ea1n","testnet.binanceChainExplorerGuide":"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng tr\xecnh kh\xe1m ph\xe1 c\u1ee7a Binance Chain","testnet.fastAndSecureDesc":"N\u1ec1n t\u1ea3ng giao d\u1ecbch t\xe0i s\u1ea3n k\u1ef9 thu\u1eadt s\u1ed1 nhanh v\xe0 an to\xe0n","testnet.fundingYourTestnetAccount":"N\u1ea1p ti\u1ec1n cho t\xe0i kho\u1ea3n testnet c\u1ee7a b\u1ea1n","testnet.howToAccessYourWallet":"C\xe1ch truy c\u1eadp v\xe0o v\xed c\u1ee7a b\u1ea1n","testnet.howToCreateAWallet":"C\xe1ch t\u1ea1o v\xed m\u1edbi","testnet.interfaceGuide":"H\u01b0\u1edbng d\u1eabn giao di\u1ec7n","testnet.thingsToAvoid":"Nh\u1eefng \u0111i\u1ec1u c\u1ea7n tr\xe1nh","testnet.title":"S\xe0n giao d\u1ecbch phi t\u1eadp trung Binance (M\u1ea1ng Th\u1eed Nghi\u1ec7m)","token.issue.bep2Title":"Token BEP-2","token.issue.bep2Desc":"BEP-2 l\xe0 ti\xeau chu\u1ea9n k\u1ef9 thu\u1eadt \u0111\u1ec3 ph\xe1t h\xe0nh v\xe0 tri\u1ec3n khai token tr\xean Binance Chain.","token.issue.bep8Title":"Token BEP-8 (Mini-BEP2)","token.issue.bep8Desc":"BEP-8 l\xe0 ti\xeau chu\u1ea9n k\u1ef9 thu\u1eadt \u0111\u1ec3 ph\xe1t h\xe0nh v\xe0 tri\u1ec3n khai token tr\xean Binance Chain.","token.issue.title":"Ph\xe1t h\xe0nh Token","token.issue.confirmationModal.title":"Ki\u1ec3m tra H\u1ee3p \u0111\u1ed3ng Token","token.issue.confirmationModal.confirm":"T\xfcm\xfcn\xfc iptal et","token.issue.tokenNameLabel":"T\xean token","token.issue.tokenNameDesc":"Token names must have between 3 and 32 characters.","token.issue.symbolLabel":"K\xfd hi\u1ec7u","token.issue.maxSupplyLabel":"T\u1ed5ng cung t\u1ed1i \u0111a","token.issue.symbolDescLength":"Symbols must have between 2 and 5 characters.","token.issue.totalSuppyHeader":"Ch\u1ecdn m\u1ee9c t\u1ed5ng cung token t\u1ed1i \u0111a","token.issue.totalSuppyDesc":"Max supply is the maximum number of tokens that can be created","token.issue.supplyLabel":"T\u1ed5ng cung","token.issue.supplyDesc":"The number of tokens you need to issue","token.issue.prev":"Danh s\xe1ch token c\u1ee7a t\xf4i","token.issue.updateTokenInfoHeader":"Set the URL to update token information(Optional)","token.issue.updateTokenInfoHeaderTips":"The URL will return JSON-formatted information that will be an introduction to your MiniToken","token.issue.fillInRequestedUrlLabel":"\u0110i\u1ec1n v\xe0o URL \u0111\u01b0\u1ee3c y\xeau c\u1ea7u","token.issue.issuanceFee":"issuance fee","token.list.title":"Token c\u1ee7a t\xf4i","token.issueModal.mintable":"C\xf3 th\u1ec3 t\u1ea1o th\xeam","token.issueModal.nonMintable":"Non-mintable","token.issueModal.name":"T\xean token","token.issueModal.nameErrMsg":"t\xean token t\u1ed1i \u0111a l\xe0 32 k\xfd t\u1ef1","token.issueModal.symbol":"Bi\u1ec3u t\u01b0\u1ee3ng","token.issueModal.symbolErrMsg":"bi\u1ec3u t\u01b0\u1ee3ng n\xean k\u1ebft h\u1ee3p ch\u1eef v\xe0 s\u1ed1, \u0111\u1ed9 d\xe0i t\u1eeb 3-8 k\xfd t\u1ef1","token.issueModal.title":"Ph\xe1t h\xe0nh token","token.issueModal.totalSupply":"T\u1ed5ng cung","token.issueModal.totalSupplyErrMsg":"s\u1ed1 l\u01b0\u1ee3ng cung kh\xf4ng h\u1ee3p l\u1ec7","token.listModal.address":"\u0110\u1ecba ch\u1ec9","token.listModal.confirm":"X\xe1c nh\u1eadn","token.listModal.initPrice":"Gi\xe1 ban \u0111\u1ea7u","token.listModal.proposalId":"Id \u0111\u1ec1 xu\u1ea5t","token.listModal.quoteAsset":"T\xe0i s\u1ea3n t\xednh gi\xe1","token.listModal.title":"Ni\xeam y\u1ebft token","token.listModal.tokenName":"T\xean token","token.main.burn":"\u0110\u1ed1t","token.main.freeze":"\u0110\xf3ng b\u0103ng","token.main.issueToken":"Ph\xe1t h\xe0nh token","token.main.list":"Ni\xeam y\u1ebft","token.main.listSuccessmsg":"Ni\xeam y\u1ebft th\xe0nh c\xf4ng","token.main.mint":"\u0110\xfac","token.main.proposal":"\u0110\u1ec1 xu\u1ea5t","token.main.submitListFirst":"Vui l\xf2ng g\u1eedi \u0111\u1ec1 xu\u1ea5t ni\xeam y\u1ebft tr\u01b0\u1edbc","token.main.submitSuccessmsg":"g\u1eedi \u0111\u1ec1 xu\u1ea5t ni\xeam y\u1ebft th\xe0nh c\xf4ng","token.main.title":"Danh s\xe1ch token c\u1ee7a t\xf4i","token.main.unfreeze":"Ng\u1eebng \u0111\xf3ng b\u0103ng","token.proposalModal.address":"\u0110\u1ecba ch\u1ec9","token.proposalModal.baseAsset":"T\xe0i s\u1ea3n c\u01a1 s\u1edf","token.proposalModal.desc":"M\xf4 t\u1ea3","token.proposalModal.expireTime":"Th\u1eddi \u0111i\u1ec3m h\u1ebft h\u1ea1n","token.proposalModal.hours":"Gi\u1edd","token.proposalModal.initDeposit":"Kho\u1ea3n n\u1ea1p ban \u0111\u1ea7u","token.proposalModal.initPrice":"Gi\xe1 ban \u0111\u1ea7u","token.proposalModal.initPriceErr":"Gi\xe1 ban \u0111\u1ea7u kh\xf4ng n\xean \u0111\u1ec3 tr\u1ed1ng","token.proposalModal.initPriceErr2":"gi\xe1 ban \u0111\u1ea7u n\xean l\u1edbn h\u01a1n 0","token.proposalModal.quoteAsset":"T\xe0i s\u1ea3n t\xednh gi\xe1","token.proposalModal.title":"\u0110\u1ec1 xu\u1ea5t ni\xeam y\u1ebft","token.proposalModal.titleErr":"Ti\xeau \u0111\u1ec1 \u0111\u1ec1 xu\u1ea5t kh\xf4ng n\xean \u0111\u1ec3 tr\u1ed1ng","token.proposalModal.titleErr2":"Ti\xeau \u0111\u1ec1 \u0111\u1ec1 xu\u1ea5t t\u1ed1i \u0111a l\xe0 128 k\xfd t\u1ef1","token.proposalModal.votingPeriod":"Th\u1eddi gian b\u1ecf phi\u1ebfu","token.table.col.mintable":"C\xf3 th\u1ec3 t\u1ea1o th\xeam","token.table.col.name":"T\xean","token.table.col.symbol":"Bi\u1ec3u t\u01b0\u1ee3ng","token.table.col.tokenType":"Lo\u1ea1i","token.table.col.totalSupply":"T\u1ed5ng cung","token.tokenModal.address":"\u0110\u1ecba ch\u1ec9","token.tokenModal.amount":"S\u1ed1 l\u01b0\u1ee3ng","token.tokenModal.available":"Kh\u1ea3 d\u1ee5ng","token.tokenModal.burnTitle":"\u0110\u1ed1t token","token.tokenModal.confirm":"X\xe1c nh\u1eadn","token.tokenModal.desc":" ","token.tokenModal.freezeTitle":"\u0110\xf3ng b\u0103ng token","token.tokenModal.mintTitle":"T\u1ea1o th\xeam token","token.tokenModal.name":"T\xean","token.tokenModal.unfreezeTitle":"Ng\u1eebng \u0111\xf3ng b\u0103ng token","token.list.tradepair.exist":"Trade pair existed","token.warning":"We do not support walletconnect compatible wallets currently and for security reason, Ledger is the best choice to Issue/List/Mint/Burn Token","tradeHistory.tradeHistory":"l\u1ecbch s\u1eed giao d\u1ecbch","transaction.here":"\u1edf \u0111\xe2y","transaction.notes":"Kh\xf4ng ph\u1ea3i t\u1ea5t c\u1ea3 giao d\u1ecbch \u0111\u1ec1u \u0111\u01b0\u1ee3c bao g\u1ed3m d\u01b0\u1edbi \u0111\xe2y. \u0110\u1ec3 xem l\u1ecbch s\u1eed \u0111\u1ea7y \u0111\u1ee7, h\xe3y tham kh\u1ea3o","txHistory.here":"t\u1ea1i \u0111\xe2y","txHistory.notEveryTransactionIsIncludedBelow":"Kh\xf4ng ph\u1ea3i t\u1ea5t c\u1ea3 giao d\u1ecbch \u0111\u1ec1u \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb \u1edf d\u01b0\u1edbi. \u0110\u1ec3 xem to\xe0n b\u1ed9 l\u1ecbch s\u1eed, vui l\xf2ng xem \u1edf \u0111\xe2y.","txHistory.title":"L\u1ecbch s\u1eed giao d\u1ecbch","unlock.connectAddress.enterYourAddress":"Nh\u1eadp \u0111\u1ecba ch\u1ec9 c\u1ee7a b\u1ea1n","unlock.connectAddress.invalidAddress":"\u0110\u1ecba ch\u1ec9 kh\xf4ng h\u1ee3p l\u1ec7","unlock.connectAddress.viewOnlyMode":"Nh\u1eadp m\u1ed9t \u0111\u1ecba ch\u1ec9 \u1edf ch\u1ebf \u0111\u1ed9 ch\u1ec9 xem","unlock.createNewWallet":"T\u1ea1o v\xed m\u1edbi","unlock.google.chooseWallet":"Ch\u1ecdn t\u1eeb c\xe1c v\xed kh\u1ea3 d\u1ee5ng c\u1ee7a b\u1ea1n:","unlock.google.logIn":"\u0110\u0103ng nh\u1eadp","unlock.google.notLoggedIn":"B\u1ea1n ch\u01b0a \u0111\u0103ng nh\u1eadp v\xe0o t\xe0i kho\u1ea3n Google","unlock.google.signedInAs":"B\u1ea1n \u0111ang \u0111\u0103ng nh\u1eadp v\u1edbi","unlock.googledrive.editWallet":"Ch\u1ec9nh s\u1eeda chi ti\u1ebft v\xed","unlock.googledrive.wallets":"Ch\u1ecdn m\u1ed9t trong c\xe1c v\xed d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 ti\u1ebfp t\u1ee5c:","unlock.index.selectUnlockType":"Ch\u1ecdn c\xe1ch m\u1edf kho\xe1","unlock.index.title":"M\u1edf kho\xe1 v\xed c\u1ee7a b\u1ea1n","unlock.keystore.enterYourWalletPass":"Nh\u1eadp m\u1eadt kh\u1ea9u v\xed c\u1ee7a b\u1ea1n","unlock.keystore.paste":"Ho\u1eb7c d\xe1n n\u1ed9i dung c\u1ee7a file keystore c\u1ee7a b\u1ea1n","unlock.keystore.select":"K\u1ebft n\u1ed9i m\u1ed9t file v\xed \u0111\xe3 \u0111\u01b0\u1ee3c m\xe3 ho\xe1 v\xe0 nh\u1eadp m\u1eadt kh\u1ea9u c\u1ee7a b\u1ea1n","unlock.keystore.upload":"T\u1ea3i l\xean file keystore","unlock.ledger.appInstallation":"C\xe0i \u0111\u1eb7t \u1ee9ng d\u1ee5ng","unlock.ledger.binanceChainReady":"Binance Chain s\u1eb5n s\xe0ng","unlock.ledger.connectToLedger":"K\u1ebft n\u1ed1i \u0111\u1ebfn v\xed Ledger","unlock.ledger.enterPINCode":"Nh\u1eadp m\xe3 PIN","unlock.ledger.getTheApp":"Truy c\u1eadp \u1ee9ng d\u1ee5ng","unlock.ledger.havingConnectionIssues":"\u0110ang g\u1eb7p v\u1ea5n \u0111\u1ec1 v\u1ec1 k\u1ebft n\u1ed1i?","unlock.ledger.mustBeOnScreen":"ph\u1ea3i hi\u1ec3n th\u1ecb tr\xean m\xe0n h\xecnh","unlock.ledger.openBinanceChain":"M\u1edf Binance Chain","unlock.ledger.text":"K\u1ebft n\u1ed1i \u0111\u1ebfn v\xed ph\u1ea7n c\u1ee9ng b\u1eb1ng c\xe1ch l\xe0m theo c\xe1c ch\u1ec9 d\u1eabn tr\xean m\xe0n h\xecnh","unlock.ledger.title":"M\u1edf kho\xe1 b\u1eb1ng thi\u1ebft b\u1ecb Ledger","unlock.ledger.usageInstructions":"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng","unlock.mnemonic.pleaseEnterYourPhrase":"Nh\u1eadp c\u1ee5m t\u1eeb 24 k\xfd t\u1ef1","unlock.mnemonic.pleaseSeparateEachWordSpace":"Vui l\xf2ng \u0111\u1eb7t d\u1ea5u c\xe1ch gi\u1eefa c\xe1c t\u1eeb.","unlock.mnemonic.warning.desc1":"L\u1ef1a ch\u1ecdn n\xe0y nh\u1eb1m kh\xf4i ph\u1ee5c file keystore ho\u1eb7c m\u1eadt kh\u1ea9u \u0111\xe3 m\u1ea5t","unlock.mnemonic.warning.desc2":"ho\u1eb7c nh\u1eadp seed t\u1eeb m\u1ed9t \u1ee9ng d\u1ee5ng v\xed kh\xe1c.","unlock.mnemonic.warning.desc3":"C\u1ea3nh b\xe1o! Vi\u1ec7c nh\u1eadp seed ho\u1eb7c private key l\xean b\u1ea5t k\u1ef3 website n\xe0o \u0111\u1ec1u v\xf4 c\xf9ng nguy hi\u1ec3m. N\u1ebfu tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n \u0111ang c\xe0i ti\u1ec7n \xedch m\u1edf r\u1ed9ng \u0111\u1ed9c h\u1ea1i ho\u1eb7c b\u1ea1n \u0111ang truy c\u1eadp v\xe0o m\u1ed9t trang phishing, t\xe0i s\u1ea3n c\u1ee7a b\u1ea1n c\xf3 th\u1ec3 s\u1ebd b\u1ecb \u0111\xe1nh c\u1eafp.","unlock.privateKey.enterYourPrivateKey":"Nh\u1eadp private key c\u1ee7a b\u1ea1n (theo \u0111\u1ecbnh d\u1ea1ng hex)","unlock.privateKey.invalid":"Private key b\u1ea1n \u0111\xe3 nh\u1eadp kh\xf4ng \u0111\xfang \u0111\u1ecbnh d\u1ea1ng v\xe0 kh\xf4ng h\u1ee3p l\u1ec7. Vui l\xf2ng th\u1eed l\u1ea1i.","unlock.privateKey.passwordInvalid":"M\u1eadt kh\u1ea9u kh\xf4ng h\u1ee3p l\u1ec7. Vui l\xf2ng th\u1eed l\u1ea1i.","unlock.privateKey.warning":"\u0110\u1ec3 kh\xf4i ph\u1ee5c file keystore ho\u1eb7c m\u1eadt kh\u1ea9u \u0111\xe3 m\u1ea5t","unlock.privateKey.warningQuestion":"Vi\u1ec7c nh\u1eadp seed ho\u1eb7c private key l\xean b\u1ea5t k\u1ef3 website n\xe0o \u0111\u1ec1u v\xf4 c\xf9ng nguy hi\u1ec3m. N\u1ebfu tr\xecnh duy\u1ec7t c\u1ee7a b\u1ea1n \u0111ang c\xe0i ti\u1ec7n \xedch m\u1edf r\u1ed9ng \u0111\u1ed9c h\u1ea1i ho\u1eb7c b\u1ea1n \u0111ang truy c\u1eadp v\xe0o m\u1ed9t trang phishing, t\xe0i s\u1ea3n c\u1ee7a b\u1ea1n c\xf3 th\u1ec3 s\u1ebd b\u1ecb \u0111\xe1nh c\u1eafp.","unlock.recover.content":"Kh\xf4i ph\u1ee5c kh\u1ea3 n\u0103ng truy c\u1eadp v\xe0o v\xed b\u1eb1ng m\u1ed9t c\u1ee5m t\u1eeb kh\xf4i ph\u1ee5c c\xf3 \u0111\u01b0\u1ee3c \u1edf th\u1eddi \u0111i\u1ec3m t\u1ea1o v\xed","unlock.recover.download.button":"T\u1ea3i xu\u1ed1ng","unlock.recover.downloadTitle":"T\u1ea3i xu\u1ed1ng File Keystore c\u1ee7a b\u1ea1n","unlock.recover.password.placeholder":"Nh\u1eadp m\u1ed9t m\u1eadt kh\u1ea9u m\u1ea1nh","unlock.recover.submit":"G\u1eedi","unlock.recover.title":"Kh\xf4i ph\u1ee5c File Keystore","unlock.recover.understand.continue":"Kh\xf4i ph\u1ee5c File Keystore","unlock.recover.word.placeholder":"T\xecm ki\u1ebfm","unlock.recover.wordlist.reset":"\u0110\u1eb7t l\u1ea1i","unlock.recover.wordlistTitle":"H\xe3y l\u1ef1a ch\u1ecdn C\u1ee5m t\u1eeb Ghi nh\u1edb c\u1ee7a b\u1ea1n t\u1eeb danh s\xe1ch b\xean tr\xe1i","unlock.support.wallets":" ","unlock.temporarySessionPassword":"M\u1eadt kh\u1ea9u t\u1ea1m th\u1eddi","unlock.thisIsNotAValidWalletFile":"\u0110\xe2y kh\xf4ng ph\u1ea3i l\xe0 file v\xed h\u1ee3p l\u1ec7","unlock.trezor.connectToTrezor":"K\u1ebft n\u1ed1i \u0111\u1ebfn v\xed Trezor","unlock.trezor.firmwareNotice":"L\u01b0u \xfd: B\u1ea3o \u0111\u1ea3m r\u1eb1ng b\u1ea1n \u0111\xe3 c\u1eadp nh\u1eadt Trezor l\xean phi\xean b\u1ea3n m\u1edbi nh\u1ea5t \u0111\u1ec3 k\u1ebft n\u1ed1i v\u1edbi Binance Chain.","unlock.trezor.notOnTestNet":"L\u01b0u \xfd: Thi\u1ebft b\u1ecb Trezor t\u1eeb gi\u1edd y\xeau c\u1ea7u Chrome ho\u1eb7c Firefox ","unlock.trezor.title":"M\u1edf kho\xe1 b\u1eb1ng thi\u1ebft b\u1ecb Trezor","unlock.unlockWalletNow":"M\u1edf kho\xe1 v\xed ngay","unlock.walletConnect.notes":"L\u01b0u \xfd: Trust Wallet v\xe0 CoolWallet ch\u01b0a h\u1ed7 tr\u1ee3 testnet Binance Chain.","unlock.walletConnect.recommendedWallet":"C\xe1c \u1ee9ng d\u1ee5ng \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 g\u1ed3m","unlock.walletConnet.getTrustWallet":"Truy c\u1eadp Trust Wallet","unlock.walletConnet.qrCodeDesc1":"Nh\u1eadn m\xe3 QR v\xed WalletConnect","unlock.walletConnet.qrCodeDesc2":"V\u1eabn ch\u01b0a c\xf3 \u1ee9ng d\u1ee5ng h\u1ed7 tr\u1ee3 v\xed WalletConnect?","unlock.walletConnet.showWalletQrCode":"K\u1ebft n\u1ed1i \u0111\u1ebfn v\xed di \u0111\u1ed9ng c\u1ee7a b\u1ea1n b\u1eb1ng m\xe3 QR hi\u1ec3n th\u1ecb tr\xean m\xe0n h\xecnh","unlock.walletConnet.title":"Khuy\xean d\xf9ng","walletConnect.clickHereToUnlock":"Nh\u1ea5n v\xe0o \u0111\xe2y \u0111\u1ec3 m\u1edf kho\xe1 m\u1ed9t v\xed kh\xe1c","walletConnect.error":"L\u1ed7i v\xed WalletConnect","walletConnect.errorOccur":"X\u1ea3y ra l\u1ed7i v\xed WalletConnect","walletConnect.pleaseEnsureOpenWorking":"H\xe3y b\u1ea3o \u0111\u1ea3m r\u1eb1ng \u1ee9ng d\u1ee5ng \u0111ang m\u1edf v\xe0 ho\u1ea1t \u0111\u1ed9ng b\xecnh th\u01b0\u1eddng.","walletConnect.pleaseUseAWalletConnect":"H\xe3y s\u1eed d\u1ee5ng m\u1ed9t \u1ee9ng d\u1ee5ng h\u1ed7 tr\u1ee3 WalletConnect \u0111\u1ec3 qu\xe9t m\xe3 QR \u1edf tr\xean","walletConnect.qrCode":"M\xe3 QR k\u1ebft n\u1ed1i v\xed WalletConnect","walletConnect.readyToConfirm":"Vui l\xf2ng x\xe1c nh\u1eadn","walletConnect.readyToConfirmBody":"Vui l\xf2ng x\xe1c nh\u1eadn giao d\u1ecbch tr\xean \u1ee8ng d\u1ee5ng v\xed.","walletconnect.notifycation.connectAgain":"K\u1ebft n\u1ed1i l\u1ea1i","walletconnect.notifycation.disconnectMessage":" Ng\u1eebng k\u1ebft n\u1ed1i \u0111\u1ebfn V\xed di \u0111\u1ed9ng...","walletconnect.notifycation.hide":"\u1ea8n","local.secure.storage":"Local Secure Storage","local.keystore.replace.tips":"You already have a keystore file, make sure you have backed up before replace","staking.title":"Staking Communication","staking.goback":"Please go back to staking page manually and to play around","staking.confirm":"T\xfcm\xfcn\xfc iptal et","staking.cancel":"Hu\u1ef7","staking.notification.delegator.address":"Delegator address:","staking.notification.validator":"Validator:","staking.notification.amount":"S\u1ed1 l\u01b0\u1ee3ng:","staking.notification.network.fee":"Network fee:","staking.notification.srcValidator.address":"Source Valiator:","staking.notification.dstalidator.address":"Destination Valiator:","staking.notification.total":"T\u1ed5ng c\u1ed9ng:"}'
      );
    },
    517: function (e) {
      e.exports = JSON.parse(
        '{"account.footer.copyright":"\xa9 2018-2019 Binance.org. Todos los derechos reservados.","account.footer.copyright.trubi":"\xa9 2018-2019 Trubi. Todos los derechos reservados.","account.footer.exchange":"Exchange","account.footer.home":"Inicio","balances.filteredByAsset":"Filtrado por activo","balances.hideZeroBalance":"Ocultar balance en cero","balances.myBalances":"Mi balance","blocked.country.list":"Estados Unidos de Am\xe9rica, porcelana, Albania, Bosnia y Herzegovina, Bielorrusia, Congo (RDC), Costa de Marfil, Crimea, Cuba, Irak, Ir\xe1n, Corea del Norte, Liberia, Macedonia, Myanmar, Serbia, Sud\xe1n, Siria, Zimbabwe.","common.cancel":"Cancelar","common.close":"Cerrar","common.confirm":"Confirmar ","common.connect":"Conectar","common.continue":"Continuar","common.errorOccured":"Ocurri\xf3 un error","common.goBack":"Regresar","common.googleUnlock":"Google Drive","common.keystoreFile":"Archivo de almac\xe9n de claves","common.ledgerDevice":"Dispositivo Ledger","common.loading":"Cargando","common.mnemonicPhrase":"Frase de recuperaci\xf3n","common.networkError":"Error de red","common.or":"o","common.password":"Contrase\xf1a","common.placeOrder":"Realizar Orden","common.pleaseCheckVisitWebsite":"Por favor, comprueba que est\xe1s visitando ","common.previous":"Anterior","common.privateKey":"Llave privada","common.systemError":"Error del Sistema","common.trezorDevice":"Dispositivo Trezor","common.viewMyPrivateKey":"Ver mi clave privada","common.viewOnly":"S\xf3lo vista","common.walletConnect":"Billetera m\xf3vil","common.yes":"Si","common.warning":"Advertencia","common.next":"Siguiente","common.buy-crypto-on-ramp":"Comprar Cripto","validation.onlyAlphaNumeric":"Utilice solo letras y n\xfameros","validation.size":"{label} longitud debe estar entre {min} y {max}","create.backupKeystore.backupYour":"Guarde su","create.backupKeystore.cannotRecoveredIt":"No se puede recuperar si lo pierde.","create.backupKeystore.createBackupFile":"\xa1Crear una copia de seguridad de este archivo!","create.backupKeystore.downloadKeystoreFile":"Descargar archivo de almac\xe9n de claves (UTC/JSON)","create.backupKeystore.getMyPrivateKey":"Obtener mi clave privada","create.backupKeystore.keystoreFile":"Archivo de almac\xe9n de claves","create.backupKeystore.needFirstDownload":"Debes descargar primero el archivo de almac\xe9n de claves","create.backupKeystore.notShareFile":"No comparta ni use este archivo en ning\xfan sitio web que no est\xe9 verificado. Sus fondos pueden potencialmente ser robados.","create.backupMnemonic.note":"Haga una copia de seguridad del texto a continuaci\xf3n en papel y gu\xe1rdelo en un lugar secreto y seguro.","create.backupMnemonic.title":"Por favor haga una copia de seguridad de su Frase mnem\xf3nica","create.backupText":"Haga una copia de seguridad del texto a continuaci\xf3n en papel y gu\xe1rdelo en un lugar secreto y seguro.","create.chooseKSOrMnemonic.keystoreAndPassword":"Archivo de almac\xe9n de claves + contrase\xf1a","create.chooseKSOrMnemonic.keystoreFile":"Archivo de almac\xe9n de claves","create.chooseKSOrMnemonic.recommendedUSBDrive":"Se recomienda realizar una copia de seguridad en un dispositivo de almacenamiento USB","create.chooseKSOrMnemonic.recommendedUSBDriveOrPaper":"Se recomienda realizar una copia de seguridad en papel o en un dispositivo de almacenamiento USB","create.chooseKSOrMnemonic.title":"\xbfC\xf3mo desea crear su nueva billetera?","create.chooseKSOrMnemonic.unlockExistWallet":"Desbloquear una billetera existente","create.chooseKSOrMnemonic.useKeystoreFile":"Use su archivo de almac\xe9n de claves (UTC/JSON) + contrase\xf1a para acceder a su billetera","create.chooseKSOrMnemonic.useMnemonicPhrase":"Use su frase mnem\xf3nica de 24 palabras para acceder a su billetera","create.confirmNote":"\xbfEst\xe1 seguro de haber anotado su frase mnem\xf3nica?","create.createNewWallet":"Crear una billetera nueva","create.doubleConfirmMnemonic.note":"Seleccione la Frase mnem\xf3nica en el orden correcto para asegurarse de que su copia sea correcta.","create.doubleConfirmMnemonic.title":"Elija una segunda opci\xf3n para acceder","create.doubleConfirmMnemonic.tryAgain":"El orden de la frase mnem\xf3nica es incorrecta. Int\xe9ntalo de nuevo.","create.downloadKeyStoreFile":"Descargar archivo","create.enterPassword":"Ingrese una contrase\xf1a","create.google.createWallet":"Crear billetera","create.google.createdSuccessfully":"Billetera creada correctamente","create.google.creationFailure":"Ha ocurrido un error al crear la Billetera","create.google.tryAgain":"Intentar de nuevo","create.google.walletName":"Nombre de la Billetera","create.googledrive.rePassErr":"La contrase\xf1a ingresada no coincide","create.keystoreFileAndPassword":"Crear archivo de almacenamiento para sus claves + Contrase\xf1a","create.pick.useGoogleDrive.description":"Crea una nueva Billetera utilizando tu cuenta de Google","create.pick.useGoogleDrive.title":"Utilizando Google Drive","create.pick.useLocalKeystore.description":"Crear una Billetera nueva, para almacenar en su dispositivo","create.pick.useLocalKeystore.title":"Utilizando el archivo de almac\xe9n de claves","create.pleaseCheck":"Por favor, comprueba que est\xe1s visitando ","create.reEnterPassword":"Escriba nuevamente la contrase\xf1a","create.stepTwo.desc":"Estamos a punto de mostrar su frase mnem\xf3nica, por favor, aseg\xfarese de que nadie m\xe1s est\xe1 mirando su pantalla.","create.success.desc1":"Ahora puede usar su Billetera de Binance Chain","create.success.desc2":"\xa1Exchange Descentralizado!","create.success.title":"\xa1Todo listo!","create.success.unlockWallet":"Desbloquear Billetera","create.tutorial.next":"Siguiente","create.tutorial.skip":"Omitir Tutorial (No recomendado)","create.tutorial.step1.desc1":"Binance se compromete a brindarle la mejor y m\xe1s segura experiencia Binance Chain. Para hacer eso, le pedimos un minuto de su tiempo para comprender c\xf3mo funcionan las billeteras descentralizadas y tomar medidas para protegerse. Puede encontrar los T\xe9rminos de servicio completos aqu\xed.","create.tutorial.step1.title":"Nuestro compromiso","create.tutorial.step2.desc1":"Usted es el \xfanico responsable de mantener sus fondos protegidos. Nadie m\xe1s, ni siquiera Binance, puede ayudarlo a recuperar su billetera si la pierde.","create.tutorial.step2.desc2":"Cuando crea una billetera en Binance, se le proporcionan 3 formas diferentes de acceso, cada uno de ellos se puede utilizar para ingresar a la billetera.","create.tutorial.step2.title":"Manteniendo sus fondos","create.tutorial.step3.desc1":"El archivo de almac\xe9n de claves puede ser visto como una \\"ID del usuario\\", mientras que la contrase\xf1a desbloquea su billetera. Ambos son necesarios para acceder a su billetera, as\xed que mant\xe9ngalos protegidos. Este es un requerimiento obligatorio en Binance.","create.tutorial.step3.title":"Archivo de almac\xe9n de claves + contrase\xf1a","create.tutorial.step4.desc1":"Las 24 palabras, vincula la billetera como si usar\xe1s el Almacenamiento de claves y la contrase\xf1a. Esta es una forma alternativa de acceder a su billetera si pierde su archivo de almac\xe9n de llaves privadas u olvida su contrase\xf1a. Cualquiera que conozca tu frase mnem\xf3nica puede acceder a tu billetera, por lo que es recomendable mantenerla protegida.","create.tutorial.step4.title":"Frase mnem\xf3nica","create.tutorial.step5.desc1":"Esta es una representaci\xf3n alternativa de las palabras que te otorgan las frases mnem\xf3nica.","create.tutorial.step5.desc2":"Binance requiere que todos los usuarios utilicen el archivo de almac\xe9n de llaves privadas+ contrase\xf1a; y elija entre la frase mnem\xf3nica o la clave privada como m\xe9todo secundario.","create.tutorial.step5.title":"Llave privada","create.tutorial.title":"Tutorial para crear una Billetera","create.tutorial.understand":"Entiendo","create.understandCheckbox":"Entiendo que Binance no puede recuperar o restablecer mi contrase\xf1a o el archivo del almac\xe9n de claves. Har\xe9 una copia de seguridad del archivo y de mi contrase\xf1a de almac\xe9n de claves, los mantendr\xe9 protegidos y proceder\xe9 a completar todos los pasos para la creaci\xf3n de la billetera y aceptar\xe9 todos los ","create.understandCheckbox.terms":"t\xe9rminos","create.unlockExistWallet":"Desbloquear una billetera existente","create.yourKeyStore":"Tu almacenamiento de claves","editWallet.remove":"Remover","editWallet.remove.desc1":"Por favor verifica que la billetera no tenga fondos","editWallet.remove.desc2":"ya que no hay posibilidades de recuperar/restablecer la billetera","editWallet.remove.removeButton":"S\xed, eliminar esta billetera","editWallet.remove.title":"\xbfRealmente quieres eliminar esta billetera?","editWallet.rename":"Renombrar","editWallet.rename.duplicateName":"El nombre de la billetera ya se encuentra ocupado","editWallet.rename.errMsg":"El nombre debe contener alg\xfan texto","editWallet.rename.title":"Nombre de la Billetera","editWallet.title":"Nombre de la Billetera","editWallet.createWallet":"Crear billetera","editWallet.unlockWallet":"Desbloquear billetera","exchange.BTCValue":"Cantidad BTC","exchange.amount":"Monto","exchange.asset":"Activo","exchange.availableBalance":"Balance disponible","exchange.blockHeight":"Altura del Bloque","exchange.buy":"Comprar","exchange.calendar.clear":"Limpiar","exchange.calendar.ok":"Ok","exchange.calendar.today":"Hoy","exchange.chartbox.depth":"Profundidad","exchange.coin":"Moneda","exchange.date":"Fecha","exchange.estimatedValue":"Valor Estimado","exchange.filled":"Completado","exchange.from":"De","exchange.frozen":"Congelado","exchange.hideAllCanceled":"Ocultar todo lo cancelado","exchange.hideOtherPairs":"Ocultar otros pares","exchange.inOrder":"Ordenes abiertas","exchange.index.books":"Libros","exchange.index.chart":"Gr\xe1fico","exchange.max":"M\xe1ximo","exchange.min":"Unidad m\xednima de comercio:","exchange.name":"Nombre","exchange.notional":"Hipot\xe9tico","exchange.oneDay":"1 D\xeda","exchange.oneMonth":"1 Mes","exchange.oneWeek":"1 Semana","exchange.pair":"Par","exchange.placeOrder.bestAsk":"Mejor precio de venta","exchange.placeOrder.bestBid":"Mejor precio de compra","exchange.placeOrder.limitOrder":"Orden Limit","exchange.placeOrder.noEnoughBalance":"balance insuficiente","exchange.placeOrder.orderError":"Error en la orden","exchange.placeOrder.orderPriceHigher":"El precio de su orden ser\xe1 un 2% m\xe1s alto que el \xfaltimo precio de mercado. Por favor proceda con cautela.","exchange.placeOrder.orderPriceLow":"El precio de su orden ser\xe1 un 2% menor al \xfaltimo precio de mercado. Por favor proceda con cautela.","exchange.placeOrder.pleaseInputCorrectAmount":"Por favor ingrese la cantidad correcta","exchange.placeOrder.buy.correctAmountForbep8":"La cantidad debe ser > 1","exchange.placeOrder.sell.correctAmountForbep8":"La cantidad debe ser > 1 o = balances","exchange.placeOrder.pleaseInputCorrectPrice":"Por favor ingrese el precio correcto","exchange.placeOrder.roundSizeErrorMsg":"Solo puedes {side} {baseAsset} en m\xfaltiplos de {lotSize}","exchange.placeOrder.successNotifyMsg":"La orden limit fue creada con \xe9xito a {side} {quantity} {quoteAsset}","exchange.placeOrder.successNotifyTitle":"L\xedmit {side} orden creada","exchange.pleaseSelectDate":"por favor seleccione la fecha","exchange.pleaseUnlockWallet.btn":"Desbloquear billetera","exchange.pleaseUnlockWallet.createNewWallet":"Crear una billetera nueva","exchange.pleaseUnlockWallet.desc":"\xa1Ups! Por favor, desbloquea tu billetera primero","exchange.pleaseUnlockWallet.noWallet":"\xbfSin billetera?","exchange.price":"Precio","exchange.search":"Buscar","exchange.sell":"Vender","exchange.side":"Lateral","exchange.status":"Estado","exchange.symbolPriceInfo.high":"Alto","exchange.symbolPriceInfo.lastPrice":"\xdaltimo precio","exchange.symbolPriceInfo.low":"Bajo","exchange.symbolPriceInfo.twentyFourHChange":"Variaci\xf3n en 24h","exchange.symbolPriceInfo.twentyFourHHigh":"M\xe1ximo en 24h","exchange.symbolPriceInfo.twentyFourHLow":"24h M\xednimo","exchange.symbolPriceInfo.twentyFourHVolume":"Volumen en 24h","exchange.symbolPriceInfo.vol":"Volumen","exchange.threeMonths":"3 meses","exchange.time.from":"De","exchange.to":"Para","exchange.total":"Total ","exchange.totalBalance":"Balance total","exchange.tradingHistory.time":"Hora","exchange.tradingHistory.title":"Historial de Trading","exchange.tradingPair.change":"Cambiar","exchange.tradingPair.pair":"Par","exchange.tradingPair.price":"Precio","exchange.tradingPair.search":"Buscar","exchange.tradingPair.volume":"Volumen","exchange.txFee":"TxFee","exchange.txHash":"TxHash","exchange.type":"Tipo","exchange.value":"Valor","exchange.miniToken.warning.title":"Do your own research","exchange.miniToken.warning.content1":"MiniToken is a special token type on Binance Chain. The information and materials provided here, whether or not provided on Binance\'s website/webpages, on third party websites, in marketing materials, newsletters or any form of publication are provided for general information only. They do not constitute an offer to buy or sell any products offered or advertised. Likewise, they are not to be taken as investment, financial or trading advice. Any expression of opinion is personal to the author and there is no guarantee of completeness or accuracy.","exchange.miniToken.warning.content2":"Binance shall not be responsible for any losses arising from investment based on any information made available via any of Binance\'s social media accounts or websites. All users or new participants, regardless of experience and knowledge are strongly recommended to do their own research prior to trying out any of the products we offer. If the user is still unsure after research, he/she is encouraged to avoid the product entirely. The user acknowledges that some of the products offered by Binance could be on the riskier spectrum. For avoidance of doubt, all users are encouraged to read the Terms of Use clearly.","exchange.miniToken.warning.button1":"Entendido","exchange.miniToken.warning.fully.understand":"I fully understand, do not show it anymore.","fees.fee":"Comision","fees.height":"Tama\xf1o","fees.note":"Nota","footer.terms":"T\xe9rminos de servicio","footer.privacy":"Privacidad","googledrive.create.nameExist":"El nombre existe","header.balances":"Balances","header.createWallet":"Crear billetera","header.exchange":"Exchange","header.exchange.bep2":"Tokens (BEP2)","header.exchange.bep8":"MiniTokens (BEP8)","header.exchange.menu.bep2":"Tokens (BEP2)","header.exchange.menu.bep8":"MiniTokens (BEP8)","header.explorer":"Explorador","header.faq":"Documentos / Preguntas frecuentes","header.blog":"Blog","header.feeHistory":"Historial de comisiones","header.forums":"Foros","header.mainnet":"Mainnet","header.openOrders":"\xd3rdenes Abiertas","header.orderHistory":"Historial de \xf3rdenes","header.orders":"\xd3rdenes ","header.testnet":"testnet","header.tradeHistory":"Historial de Trades","header.transactions":"Transacciones","header.unlockWallet":"Desbloquear billetera","header.user.changeWallet":"Cambiar billetera","header.user.closeWallet":"Cerrar billetera","header.user.coinomi":"Coinomi ","header.user.copyAddress":"copiar direcci\xf3n","header.user.copySuccess":"\xa1Copia exitosa!","header.user.createNewWallet":"Crear una billetera nueva","header.user.exportKeystoreFile":"Exportar archivo de almac\xe9n de claves","header.user.goToExplorer":"ir al explorador","header.user.infinito":"Infinito ","header.user.ledger":"Ledger ","header.user.trezor":"Dispositivo Trezor","header.user.wallet":"Billetera","header.user.walletConnect":"WalletConnect ","header.youWantCloseWallet":"\xbfSeguro que quieres cerrar la billetera?","home.aboutPage.desc1.line1":"Binance Chain es una blockchain desarrollada inicialmente por Binance.","home.aboutPage.desc1.line2":"Es moderno, seguro y tiene una finalidad de transacci\xf3n casi instant\xe1nea (es r\xe1pido).","home.aboutPage.desc2.line1":"Binance DEX es un motor descentralizado de correspondencia de \xf3rdenes,","home.aboutPage.desc2.line2":"impulsado por la tecnolog\xeda central de Binance Chain.","home.aboutPage.desc3.line1":"Binance DEX es un mercado moderno y seguro para emitir","home.aboutPage.desc3.line2":"e intercambiando activos digitales, y nadie m\xe1s que usted tiene sus llaves. El trading de sus activos favoritos nunca ha sido m\xe1s seguro.","home.aboutPage.title":"Acerca de Binance DEX","home.binanceDex":"Binance DEX","home.processPage.aboutBalance":"Acerca de Binance DEX","home.processPage.create":"Crear","home.processPage.createDesc":"El primer paso es crear una direcci\xf3n de Binance Chain.","home.processPage.createWallet":"Crear una billetera nueva","home.processPage.getStart":"Comience con Binance DEX","home.processPage.go":"Ir","home.processPage.placeOrders":"Colocar ordenes","home.processPage.placeOrdersDesc":"Utilice la billetera web o API para enviar y cancelar ordenes.","home.processPage.transferAssets":"Transferir Activos","home.processPage.transferAssetsDesc":"Con una direcci\xf3n de Binance Chain, que se pueda generar con cualquier billetera que admita Binance Chain, puede transferir BNB u otros activos almacenados en esa direcci\xf3n.","home.processPage.unlock":"Desbloquear","home.processPage.unlockDesc":"Cuatro formas de desbloquear tu billetera","home.processPage.unlockMode1":"WalletConnect","home.processPage.unlockMode2":"Ledger","home.processPage.unlockMode3":"Archivo de almac\xe9n de claves + contrase\xf1a","home.processPage.unlockMode4":"Mnem\xf3nico","home.processPage.unlockWallet":"Desbloquear una billetera","home.startPage.createWallet":"Crear billetera","home.startPage.desc1":"Intercambio de activos digitales descentralizado r\xe1pido y seguro","home.startPage.desc2":"El nuevo est\xe1ndar de trading de criptomonedas est\xe1 aqu\xed.","home.startPage.getTestBNB":"Obtener prueba BNB","home.startPage.startTrading":"Empezar a hacer trading","home.whyPage.community":"Es una iniciativa comunitaria","home.whyPage.communityDesc":"Binance DEX funciona con componentes de software de c\xf3digo abierto y gobernanza en cadena.","home.whyPage.decentralized":"Descentralizado","home.whyPage.decentralizedDesc":"Experimente el trading directo de billetera a billetera sin ning\xfan tercero o autoridad central.","home.whyPage.getStarted":"Empezar","home.whyPage.lowTradingFees":"Bajas comisiones de trading","home.whyPage.lowTradingFeesDesc":"Haga trading sin comisiones de retiro, dep\xf3sito o al colocar una orden. Adem\xe1s los holders de BNB se benefician a\xfan m\xe1s.","home.whyPage.safeAndSecure":"Seguro y protegido","home.whyPage.safeAndSecureDesc":"Sus fondos se almacenan en una direcci\xf3n de blockchain con una clave privada que solo usted controla.","home.whyPage.title":"\xbfPor qu\xe9 Binance DEX?","home.whyPage.userFriendly":"F\xe1cil de usar","home.whyPage.userFriendlyDesc":"Crea una billetera, desbloqu\xe9ala, y ya estar\xe1 listo para hacer trading. No es necesario depositar ni retirar.","inputPassword.passwordRule":"Su contrase\xf1a debe cumplir con los siguientes requisitos","inputPassword.passwordRule1":"8 o m\xe1s caracteres","inputPassword.passwordRule2":"Una letra may\xfascula, un s\xedmbolo y un n\xfamero","inputPassword.setANewPassword":"Establecer una nueva contrase\xf1a","landing.connectWallet":"Conectar billetera","landing.createWallet":"Crear billetera","landing.desc1":"Binance DEX","landing.desc2":"Exchange de activos digitales descentralizado r\xe1pido y seguro. El nuevo est\xe1ndar de trading de criptomonedas est\xe1 aqu\xed.","landing.footer.fee":"Comision","landing.footer.terms":"T\xe9rminos de servicio","landing.footer.privacy":"Privacidad","landing.how.connect":"Conectar","landing.how.connect.desc":"Acceder a Binance DEX es m\xe1s f\xe1cil de lo que piensas. Haga clic en el bot\xf3n de conectar y elija entre las opciones de conexi\xf3n. Y ya estar\xe1 listo.","landing.how.create":"Crear","landing.how.create.desc":"Binance DEX le brinda la libertad de elegir entre almacenes de claves convenientes y opciones de billetera de hardware ultraseguro.","landing.how.step":"paso","landing.how.title":"C\xf3mo utilizar","landing.how.trade":"Trade","landing.how.trade.desc":"Nuestro objetivo es hacer que el trading sea transparente e indistinguible de Binance.com. Para hacer eso, hemos optimizado las mejores funciones para que tengas todo lo que amas en Binance DEX tambi\xe9n.","landing.markets":"Mercados","landing.markets.24HChange":"Cambio 24H","landing.markets.24HVolume":"Volumen en 24H","landing.markets.lastPrice":"\xdaltimo precio","landing.markets.pair":"Par","landing.markets.searchPlaceholder":"Buscar el nombre de la moneda","landing.menu.balances":"Balances","landing.menu.changeWallet":"Cambiar billetera","landing.menu.closeWallet":"Cerrar billetera","landing.menu.community":"Comunidad","landing.menu.copyAddress":"copiar direcci\xf3n","landing.menu.docs":"Documentos","landing.menu.exchange":"Exchange","landing.menu.explorer":"Explorador","landing.menu.orders":"\xd3rdenes ","landing.menu.orders.feeHistory":"Historial de comisiones","landing.menu.orders.openOrders":"\xd3rdenes Abiertas","landing.menu.orders.orderHistory":"Historial de Orden","landing.menu.orders.tradeHistory":"Historial de Trades","landing.menu.testnet":"Testnet","landing.menu.tools":"Herramientas","landing.menu.transaction":"Transacci\xf3n","landing.menu.wallet":"Billetera","landing.startTrading":"Empezar a hacer trading","landing.trust.activeAddress":"Billeteras activas","landing.trust.activeAddress.desc":"M\xe1s personas conf\xedan en la infraestructura y los sistemas de trading de Binance DEX que en cualquier otra soluci\xf3n de billetera.","landing.trust.pairs":"Pares","landing.trust.pairs.desc":"Binance DEX le brinda m\xe1s opciones y la flexibilidad para comerciar con m\xe1s agregados cada semana.","landing.trust.rank":"Clasificado","landing.trust.rank.desc":"Binance DEX es el intercambio de criptomonedas descentralizado #1 en Coinmarketcap por volumen.","landing.trust.title":"\xbfPor qu\xe9 la gente conf\xeda en nosotros?","landing.why.competitive":"Competitivo","landing.why.competitive.desc":"Las comisiones son solo del 0.04% cuando usa BNB para pagar las comisiones de trading. Eso es casi la mitad de Binance.com, el intercambio l\xedder mundial en comisiones de trading.","landing.why.fast":"R\xe1pido","landing.why.fast.desc":"Con tiempos de bloque de 1 segundo, las confirmaciones de comercio de blockchain son cosa del pasado. Obtenga todas las ventajas de un DEX sin desventajas.","landing.why.secure":"Seguro","landing.why.secure.desc":"Binance DEX lleva la seguridad a un nivel completamente nuevo. Las transferencias y los intercambios entre pares significan una exposici\xf3n pr\xe1cticamente nula a las amenazas de seguridad.","landing.why.title":"Por qu\xe9 Binance DEX","lang.menu.copyAddress":" ","noContent.descPrefix":"No tienes ","openOrders.areYourTrue":"Est\xe1s seguro de que quieres","openOrders.cancel":"cancelar","openOrders.cancel all":"cancelar todo","openOrders.cancel buy":"cancelar compra","openOrders.cancel sell":"cancelar venta","openOrders.cancelAll":"Cancelar todo","openOrders.cancelBuy":"Cancelar Compra","openOrders.cancelOrder":"Cancelar Orden","openOrders.cancelOrders":"Cancelar \xf3rdenes","openOrders.cancelPartialSuccess":"Cancelar los parciales","openOrders.cancelSell":"Cancelar Venta","openOrders.cancelSuccess":"Cancelado con \xe9xito","openOrders.keepOrder":"Mantener la orden","openOrders.keepOrders":"Mantener las \xf3rdenes","openOrders.noBuyOpenOrders":"no comprar \xf3rdenes abiertas","openOrders.noOpenOrders":"no hay \xf3rdenes abiertas","openOrders.noSellOpenOrders":"no vender \xf3rdenes abiertas","openOrders.title":"\xd3rdenes abiertas","orderForm.amount":"Cantidad","orderForm.avb":"Avb","orderForm.buy":"Comprar","orderForm.equivalent":"Equivalente","orderForm.price":"Precio","orderForm.sell":"Vender","orderForm.total":"Total ","orderHistory.openHistory":"Historial de orden","orderHistory.title":"Historial de \xf3rdenes","orderHistory.tradeId":"ID de Trade","orderHistory.tradingPrice":"Precio de trade","orderHistory.tradingTotal":"Total del trading","privateKeyModal.backupText":"Haga una copia de seguridad del texto a continuaci\xf3n en papel y gu\xe1rdelo en un lugar secreto y seguro.","privateKeyModal.title":"Su clave privada","testnet.binanceChainExplorerGuide":"Gu\xeda del Explorador de Binance Chain","testnet.fastAndSecureDesc":"Intercambio de activos digitales descentralizado r\xe1pido y seguro","testnet.fundingYourTestnetAccount":"Financiando su cuenta de Testnet","testnet.howToAccessYourWallet":"C\xf3mo acceder a su billetera","testnet.howToCreateAWallet":"C\xf3mo crear una billetera","testnet.interfaceGuide":"Gu\xeda de interfaz","testnet.thingsToAvoid":"Cosas a evitar","testnet.title":"Intercambio descentralizado de Binance (TESTNET)","token.issue.bep2Title":"Token BEP-2","token.issue.bep2Desc":"BEP-2 es un est\xe1ndar t\xe9cnico para la emisi\xf3n e implementaci\xf3n de tokens en la Binance Chain.","token.issue.bep8Title":"Token BEP-8 (Mini-BEP2)","token.issue.bep8Desc":"BEP-8 es un est\xe1ndar t\xe9cnico para la emisi\xf3n e implementaci\xf3n de tokens en la Binance Chain.","token.issue.title":"Emisi\xf3n de Token","token.issue.confirmationModal.title":"Comprobar contrato del token","token.issue.confirmationModal.confirm":"Confirmar","token.issue.tokenNameLabel":"Nombre del Token","token.issue.tokenNameDesc":"Token names must have between 3 and 32 characters.","token.issue.symbolLabel":"S\xedmbolo","token.issue.maxSupplyLabel":"Suministro m\xe1ximo","token.issue.symbolDescLength":"Symbols must have between 2 and 5 characters.","token.issue.totalSuppyHeader":"Seleccione el suministro m\xe1ximo del token","token.issue.totalSuppyDesc":"Max supply is the maximum number of tokens that can be created","token.issue.supplyLabel":"Suministro","token.issue.supplyDesc":"The number of tokens you need to issue","token.issue.prev":"Mi lista de tokens","token.issue.updateTokenInfoHeader":"Set the URL to update token information(Optional)","token.issue.updateTokenInfoHeaderTips":"The URL will return JSON-formatted information that will be an introduction to your MiniToken","token.issue.fillInRequestedUrlLabel":"Rellene la URL solicitada","token.issue.issuanceFee":"issuance fee","token.list.title":"Mis Tokens","token.issueModal.mintable":"Imprimible","token.issueModal.nonMintable":"Non-mintable","token.issueModal.name":"Nombre del Token","token.issueModal.nameErrMsg":"el nombre del token est\xe1 limitado a 32 caracteres","token.issueModal.symbol":"S\xedmbolo","token.issueModal.symbolErrMsg":"el s\xedmbolo debe ser alfanum\xe9rico y la longitud est\xe1 limitada a 3~8","token.issueModal.title":"Emisi\xf3n de token","token.issueModal.totalSupply":"Suministro total","token.issueModal.totalSupplyErrMsg":"cantidad de suministro no v\xe1lida","token.listModal.address":"Direcci\xf3n","token.listModal.confirm":"Confirmar compra","token.listModal.initPrice":"Precio inicial","token.listModal.proposalId":"Id de propuesta","token.listModal.quoteAsset":"Activo de cotizaci\xf3n","token.listModal.title":"Lista de token","token.listModal.tokenName":"Nombre del Token","token.main.burn":"Quemar","token.main.freeze":"Congelar","token.main.issueToken":"Emisi\xf3n de token","token.main.list":"Lista","token.main.listSuccessmsg":"Lista de \xe9xito","token.main.mint":"Mint","token.main.proposal":"Mint","token.main.submitListFirst":"Por favor, primero env\xede la propuesta de la lista","token.main.submitSuccessmsg":"Listado completo de propuestas","token.main.title":"Env\xedo de la propuesta de lista exitoso","token.main.unfreeze":"Descongelar","token.proposalModal.address":"Direcci\xf3n","token.proposalModal.baseAsset":"Activo base","token.proposalModal.desc":"Descripci\xf3n","token.proposalModal.expireTime":"Tiempo de expiraci\xf3n","token.proposalModal.hours":"Horas","token.proposalModal.initDeposit":"Dep\xf3sito inicial","token.proposalModal.initPrice":"Precio inicial","token.proposalModal.initPriceErr":"El precio inicial no debe estar vac\xedo","token.proposalModal.initPriceErr2":"el precio inicial debe ser mayor que 0","token.proposalModal.quoteAsset":"Activo de cotizaci\xf3n","token.proposalModal.title":"Lista de propuestas","token.proposalModal.titleErr":"El t\xedtulo de la propuesta no debe estar vac\xedo","token.proposalModal.titleErr2":"El t\xedtulo de la propuesta es m\xe1s largo que la longitud m\xe1xima de 128","token.proposalModal.votingPeriod":"Periodo de votaci\xf3n","token.table.col.mintable":"Imprimible","token.table.col.name":"Nombre","token.table.col.symbol":"S\xedmbolo","token.table.col.tokenType":"Tipo","token.table.col.totalSupply":"Suministro total","token.tokenModal.address":"Direcci\xf3n","token.tokenModal.amount":"Cantidad","token.tokenModal.available":"Disponible","token.tokenModal.burnTitle":"Quemar Token","token.tokenModal.confirm":"Confirmar compra","token.tokenModal.desc":" ","token.tokenModal.freezeTitle":"Token congelado","token.tokenModal.mintTitle":"Mint Token","token.tokenModal.name":"Nombre","token.tokenModal.unfreezeTitle":"Descongelar token","token.list.tradepair.exist":"Trade pair existed","token.warning":"Actualmente no admitimos billeteras compatibles con walletconnect y por razones de seguridad, Ledger es la mejor opci\xf3n para Emitir/Listar/Acu\xf1ar/Quemar los tokens","tradeHistory.tradeHistory":"historial de trades","transaction.here":"aqu\xed","transaction.notes":"No todas las transacciones se incluyen a continuaci\xf3n. Para ver el historial completo, consulte","txHistory.here":"aqu\xed","txHistory.notEveryTransactionIsIncludedBelow":"No todas las transacciones se incluyen a continuaci\xf3n. Para ver el historial completo, por favor consulte aqu\xed.","txHistory.title":"Historial de Transacciones","unlock.connectAddress.enterYourAddress":"Ingrese su direccion","unlock.connectAddress.invalidAddress":"Direcci\xf3n inv\xe1lida","unlock.connectAddress.viewOnlyMode":"Ingrese una direcci\xf3n para el modo de solo lectura","unlock.createNewWallet":"Crear una billetera nueva","unlock.google.chooseWallet":"Elija entre sus billeteras disponibles:","unlock.google.logIn":"Iniciar sesi\xf3n","unlock.google.notLoggedIn":"No has iniciado sesi\xf3n en tu cuenta de Google","unlock.google.signedInAs":"Est\xe1s registrado como","unlock.googledrive.editWallet":"Editar detalles de billetera","unlock.googledrive.wallets":"Seleccione alguna de sus siguientes billeteras para continuar:","unlock.index.selectUnlockType":"Selecciona c\xf3mo te gustar\xeda desbloquearla","unlock.index.title":"Desbloquear Billetera","unlock.keystore.enterYourWalletPass":"Ingrese la contrase\xf1a de su billetera","unlock.keystore.paste":"O pega el contenido de su archivo de almac\xe9n de claves","unlock.keystore.select":"Conecte un archivo de billetera cifrado e ingrese su contrase\xf1a","unlock.keystore.upload":"Subir archivo de almac\xe9n de claves","unlock.ledger.appInstallation":"Instalaci\xf3n de aplicaciones","unlock.ledger.binanceChainReady":"Binance Chain Listo","unlock.ledger.connectToLedger":"Conectar a Ledger","unlock.ledger.enterPINCode":"Ingrese el c\xf3digo PIN","unlock.ledger.getTheApp":"Obtener la aplicaci\xf3n","unlock.ledger.havingConnectionIssues":"\xbfTiene problemas de conexi\xf3n?","unlock.ledger.mustBeOnScreen":"debe estar en la pantalla","unlock.ledger.openBinanceChain":"Abrir Binance Chain","unlock.ledger.text":"Conecte su billetera de hardware aqu\xed siguiendo las instrucciones en pantalla","unlock.ledger.title":"Desbloquear con un dispositivo Ledger","unlock.ledger.usageInstructions":"Instrucciones de uso","unlock.mnemonic.pleaseEnterYourPhrase":"Por favor ingrese su frase de 24 palabras","unlock.mnemonic.pleaseSeparateEachWordSpace":"Por favor separe cada palabra con un espacio.","unlock.mnemonic.warning.desc1":"Esta opci\xf3n restaura un archivo o contrase\xf1a del almac\xe9n de claves","unlock.mnemonic.warning.desc2":"o puedes importar la seed de una billetera perteneciente a otra aplicaci\xf3n.","unlock.mnemonic.warning.desc3":"\xa1Advertencia! Ingresar su frase de semilla o clave privada en cualquier sitio web es muy peligroso. Si tiene extensiones maliciosas instaladas en su navegador o visita accidentalmente un sitio web de phishing, sus activos pueden ser robados.","unlock.privateKey.enterYourPrivateKey":"Ingrese su clave privada (formato hexadecimal)","unlock.privateKey.invalid":"La clave privada que ingres\xf3 no est\xe1 en el formato correcto y no es v\xe1lida. Int\xe9ntalo de nuevo.","unlock.privateKey.passwordInvalid":"La contrase\xf1a no es v\xe1lida. Por favor, int\xe9ntalo de nuevo.","unlock.privateKey.warning":"Para restaurar un archivo o contrase\xf1a del almac\xe9n de claves que haya perdido","unlock.privateKey.warningQuestion":"\xa1Advertencia! Ingresar su frase de semilla o clave privada en cualquier sitio web es muy peligroso. Si tiene extensiones maliciosas instaladas en su navegador o visita accidentalmente un sitio web de phishing, sus activos pueden ser robados.","unlock.recover.content":"Recupere el acceso a la billetera usando una frase de recuperaci\xf3n conocida durante la creaci\xf3n de la billetera","unlock.recover.download.button":"Descargar","unlock.recover.downloadTitle":"Descargue su archivo de almac\xe9n de claves","unlock.recover.password.placeholder":"Ingrese una contrase\xf1a segura","unlock.recover.submit":"Enviar","unlock.recover.title":"Recuperar archivo","unlock.recover.understand.continue":"Recuperar archivo","unlock.recover.word.placeholder":"Buscar","unlock.recover.wordlist.reset":"Reiniciar","unlock.recover.wordlistTitle":"Seleccione su Frase mnem\xf3nica de la lista de la izquierda","unlock.support.wallets":" ","unlock.temporarySessionPassword":"Contrase\xf1a de sesi\xf3n temporal","unlock.thisIsNotAValidWalletFile":"Este no es un archivo de billetera v\xe1lido","unlock.trezor.connectToTrezor":"Conectar a Trezor","unlock.trezor.firmwareNotice":"Nota: Aseg\xfarese de haber actualizado al \xfaltimo firmware de Trezor para utilizar su dispositivo con Binance Chain.","unlock.trezor.notOnTestNet":"Nota: Por los momentos, los dispositivos Trezor requieren Chrome o Firefox ","unlock.trezor.title":"Desbloquear con un dispositivo Trezor","unlock.unlockWalletNow":"Desbloquear billetera","unlock.walletConnect.notes":"Nota: Trust Wallet y CoolWallet no son compatibles con Binance Chain Testnet.","unlock.walletConnect.recommendedWallet":"Las aplicaciones compatibles incluyen","unlock.walletConnet.getTrustWallet":"Descarga Trust Wallet","unlock.walletConnet.qrCodeDesc1":"Obtener el c\xf3digo QR de WalletConnect","unlock.walletConnet.qrCodeDesc2":"\xbfTodav\xeda no tienes una aplicaci\xf3n que admita WalletConnect?","unlock.walletConnet.showWalletQrCode":"Conecte su billetera m\xf3vil aqu\xed usando un c\xf3digo QR en esta pantalla","unlock.walletConnet.title":"Recomendado","walletConnect.clickHereToUnlock":"Haga clic aqu\xed para desbloquear otra billetera","walletConnect.error":"Error de WalletConnect","walletConnect.errorOccur":"Se produjo un error de WalletConnect","walletConnect.pleaseEnsureOpenWorking":"Aseg\xfarese de que la aplicaci\xf3n est\xe9 abierta y funcionando.","walletConnect.pleaseUseAWalletConnect":"Por favor, utilice una aplicaci\xf3n que soporte WalletConnect para escanear el c\xf3digo QR anterior","walletConnect.qrCode":"C\xf3digo QR de WalletConnect","walletConnect.readyToConfirm":"Por favor confirmar","walletConnect.readyToConfirmBody":"Por favor, confirme la transacci\xf3n en la aplicaci\xf3n de la billetera.","walletconnect.notifycation.connectAgain":"Conectar de nuevo","walletconnect.notifycation.disconnectMessage":" Desconectado de la billetera m\xf3vil...","walletconnect.notifycation.hide":"Ocultar","local.secure.storage":"Almacenamiento local seguro","local.keystore.replace.tips":"Ya tiene un archivo de almacenamiento de claves, aseg\xfarese de haber realizado una copia de seguridad antes de reemplazar","staking.title":"Staking Communication","staking.goback":"Please go back to staking page manually and to play around","staking.confirm":"Confirmar","staking.cancel":"Cancelar","staking.notification.delegator.address":"Delegator address:","staking.notification.validator":"Validator:","staking.notification.amount":"Cantidad:","staking.notification.network.fee":"Network fee:","staking.notification.srcValidator.address":"Source Valiator:","staking.notification.dstalidator.address":"Destination Valiator:","staking.notification.total":"Total:"}'
      );
    },
    521: function (e, n, a) {
      'use strict';
      (function (e) {
        var t = a(8),
          o = a(5),
          r = a.n(o),
          i = a(9),
          l = a(62),
          s = a.n(l),
          c = a(80),
          d = a(318),
          u = a.n(d);
        const m = (n, a, t, o) =>
          (function () {
            var l = Object(i.a)(
              r.a.mark(function i(l, s) {
                var d, u, m, h, p, g, k, y, b, f;
                return r.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (d = l.getSignBytes(s)),
                            (u = JSON.parse(d.toString())),
                            a && a(d, u),
                            (r.prev = 3),
                            (r.next = 6),
                            n.sendTransaction(u)
                          );
                        case 6:
                          (h = r.sent), (m = h.result || h), (r.next = 15);
                          break;
                        case 10:
                          throw (
                            ((r.prev = 10),
                            (r.t0 = r.catch(3)),
                            o && o(r.t0),
                            console.error('WalletConnect error!', r.t0),
                            r.t0)
                          );
                        case 15:
                          if (
                            (m ||
                              (o &&
                                o(
                                  new Error(
                                    'The WalletConnect provider responded without a pubkey or signature'
                                  )
                                )),
                            (r.prev = 16),
                            (p = JSON.parse(m)),
                            (g = p.signature),
                            (k = p.publicKey),
                            64 === (y = e.from(g, 'hex')).byteLength)
                          ) {
                            r.next = 21;
                            break;
                          }
                          throw new Error(
                            'WalletConnectSigningDelegate: invalid signature length'
                          );
                        case 21:
                          if (65 === e.from(k, 'hex').byteLength) {
                            r.next = 23;
                            break;
                          }
                          throw new Error(
                            'WalletConnectSigningDelegate: invalid pubkey length'
                          );
                        case 23:
                          return (
                            (b = c.crypto.getPublicKey(k)),
                            (f = l.addSignature(b, y)),
                            setTimeout(() => {
                              n.sendConfirmation(!0);
                            }, 0),
                            t && t(k, g),
                            r.abrupt('return', f)
                          );
                        case 30:
                          return (
                            (r.prev = 30),
                            (r.t1 = r.catch(16)),
                            console.error(
                              'WalletConnectSigningDelegate: error during sig parse/add/confirm',
                              r.t1
                            ),
                            setTimeout(() => {
                              n.sendConfirmation(!1, r.t1.message);
                            }, 0),
                            o && o(r.t1),
                            r.abrupt('return', l)
                          );
                        case 36:
                        case 'end':
                          return r.stop();
                      }
                  },
                  i,
                  null,
                  [
                    [3, 10],
                    [16, 30],
                  ]
                );
              })
            );
            return function (e, n) {
              return l.apply(this, arguments);
            };
          })();
        class h extends s.a {
          constructor(e) {
            super(e),
              (this._connector = null),
              (this._initialized = !1),
              (this._onConnect = this._onConnect.bind(this)),
              (this._onSessionUpdate = this._onSessionUpdate.bind(this)),
              (this._onDisconnect = this._onDisconnect.bind(this));
          }
          startSession(e = !1, n = 'https://wallet-bridge.binance.org') {
            var a = this;
            return Object(i.a)(
              r.a.mark(function t() {
                var o, i;
                return r.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          a._initialized ||
                            (((o = new u.a({ bridge: n })).clientMeta.url =
                              'https://www.binance.org'),
                            (a._connector = o),
                            (a._initialized = !0)),
                          a._connector.connected && a._connector.killSession(),
                          console.log('WalletConnect: creating session.'),
                          (t.next = 5),
                          a._connector.createSession()
                        );
                      case 5:
                        if (
                          (console.log('WalletConnect: session created.'),
                          (i = a._connector.uri),
                          a._connector.on('connect', a._onConnect),
                          a._connector.on('disconnect', a._onDisconnect),
                          a._connector.on('session_update', a._onSessionUpdate),
                          !e)
                        ) {
                          t.next = 12;
                          break;
                        }
                        throw new Error(
                          'The WalletConnect QR code modal is not supported.'
                        );
                      case 12:
                        return t.abrupt('return', i);
                      case 13:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          }
          restoreSession() {
            var e = this;
            return Object(i.a)(
              r.a.mark(function n() {
                var a;
                return r.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        e._initialized ||
                          ((a = new u.a({
                            bridge: 'https://wallet-bridge.binance.org',
                          })),
                          (e._connector = a),
                          (e._initialized = !0),
                          e._connector.on('disconnect', e._onDisconnect),
                          e._connector.on('session_update', e._onSessionUpdate),
                          e.emit('restore'));
                      case 1:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              })
            )();
          }
          sendTransaction(e) {
            var n = this;
            return Object(i.a)(
              r.a.mark(function a() {
                var t;
                return r.a.wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (e && 'object' === typeof e) {
                          a.next = 2;
                          break;
                        }
                        throw new Error(
                          'sendTransaction expected a `signDocObj` of type `object`'
                        );
                      case 2:
                        return (
                          (t = {
                            id: 1,
                            jsonrpc: '2.0',
                            method: h.METHOD_SIGN,
                            params: [e],
                          }),
                          a.abrupt('return', n._connector.sendCustomRequest(t))
                        );
                      case 4:
                      case 'end':
                        return a.stop();
                    }
                }, a);
              })
            )();
          }
          sendConfirmation(e = !0, n = null) {
            var a = this;
            return Object(i.a)(
              r.a.mark(function t() {
                var o;
                return r.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if ('boolean' === typeof e) {
                          t.next = 2;
                          break;
                        }
                        throw new Error(
                          'sendConfirmation expected an `ok` of type `boolean`'
                        );
                      case 2:
                        if (!n || 'string' === typeof n) {
                          t.next = 4;
                          break;
                        }
                        throw new Error(
                          'sendConfirmation expected an optional `errorMsg` of type `string`'
                        );
                      case 4:
                        return (
                          (o = {
                            id: 1,
                            jsonrpc: '2.0',
                            method: h.METHOD_CONFIRM,
                            params: [{ ok: e, errorMsg: n }],
                          }),
                          t.abrupt('return', a._connector.sendCustomRequest(o))
                        );
                      case 6:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          }
          disconnect() {
            this._connector &&
              (Array.isArray(this._connector._eventEmitters) &&
                (this._connector._eventEmitters.length = 0),
              this._connector.killSession(),
              (this._connector = null),
              (this._initialized = !1));
          }
          initialized() {
            return !!this._initialized;
          }
          ready() {
            return !!this._initialized && this._connector.connected;
          }
          connected() {
            return this.ready();
          }
          getSigningDelegate(e, n, a) {
            return m(this, e, n, a);
          }
          _onConnect(e, { params: n }) {
            if (
              (console.log('WalletConnect: _onConnect', this._initialized),
              !this._initialized)
            )
              return;
            if (e) throw e;
            if (!n || !n[0]) throw new Error('_onConnect: no payload!');
            const a = this._connector,
              t = a.accounts,
              o = a.chainId,
              r = t[0];
            this.emit('connect', { chainId: o, accounts: t, address: r });
          }
          _onSessionUpdate(e, { params: n }) {
            if (
              (console.log(
                'WalletConnect: _onSessionUpdate',
                this._initialized
              ),
              this._initialized)
            ) {
              if (e) throw e;
              if (!n || !n[0]) throw new Error('_onSessionUpdate: no payload!');
              this.emit('session_update', n[0]);
            }
          }
          _onDisconnect(e, { params: n }) {
            if (
              (console.log('WalletConnect: _onDisconnect', this._initialized),
              this._initialized)
            ) {
              if (e) throw e;
              if (!n || !n[0]) throw new Error('_onDisconnect: no payload!');
              (this._initialized = !1),
                delete this._connector,
                this.emit('disconnect', n[0]);
            } else
              console.error(
                'WalletConnect disconnect when not ready. This should never happen!',
                e,
                n
              );
          }
        }
        Object(t.a)(h, 'METHOD_SIGN', 'bnb_sign'),
          Object(t.a)(h, 'METHOD_CONFIRM', 'bnb_tx_confirmation'),
          (n.a = h);
      }.call(this, a(10).Buffer));
    },
    522: function (e, n, a) {
      e.exports = a.p + 'static/media/success-black.36fc10e4.svg';
    },
    523: function (e, n, a) {
      e.exports = a.p + 'static/media/fail-black.93d4db02.svg';
    },
    526: function (e, n, a) {
      e.exports = a.p + 'static/media/success-icon.d64529f6.svg';
    },
    530: function (e, n, a) {
      e.exports = a.p + 'static/media/testnet.02ac5932.svg';
    },
    531: function (e, n, a) {
      e.exports = a.p + 'static/media/mainnet.983a5f1b.svg';
    },
    532: function (e, n, a) {
      e.exports = a.p + 'static/media/mobile.79efb097.svg';
    },
    533: function (e, n, a) {
      e.exports = a.p + 'static/media/trubi.270c287a.svg';
    },
    537: function (e, n, a) {
      'use strict';
      var t = a(8),
        o = a(0),
        r = a.n(o),
        i = a(1),
        l = a(87),
        s = a(35),
        c = a(522),
        d = a.n(c),
        u = a(523),
        m = a.n(u),
        h = a(37);
      const p = i.e.div.withConfig({
          displayName: 'Notifycation__Layer',
          componentId: 'kdmexa-0',
        })(
          [
            'position:fixed;top:50px;right:5px;z-index:',
            ';width:340px;min-height:90px;background:',
            ';box-shadow:',
            ';',
          ],
          h.a.modal,
          (e) => e.theme.bg2 || '#1E2126',
          (e) => e.theme.boxShadow || '0px 0px 10px 0px rgba(0,0,0,0.5)'
        ),
        g = i.e.div.withConfig({
          displayName: 'Notifycation__Wrapper',
          componentId: 'kdmexa-1',
        })(['display:flex;flex-direction:row;align-items:center;']),
        k = i.e.div.withConfig({
          displayName: 'Notifycation__NotifyIcon',
          componentId: 'kdmexa-2',
        })(['width:30px;margin:0 20px;img{width:inherit;}']),
        y = i.e.div.withConfig({
          displayName: 'Notifycation__Content',
          componentId: 'kdmexa-3',
        })(
          ['padding:15px 0;font-size:16px;color:', ';'],
          (e) => e.theme.fontColor || '#fff'
        ),
        b = i.e.div.withConfig({
          displayName: 'Notifycation__Title',
          componentId: 'kdmexa-4',
        })(['font-size:14px;']),
        f = i.e.div.withConfig({
          displayName: 'Notifycation__Msg',
          componentId: 'kdmexa-5',
        })(['font-size:12px;max-width:235px;word-break:break-all;']),
        w = i.e.div.withConfig({
          displayName: 'Notifycation__Close',
          componentId: 'kdmexa-6',
        })(
          [
            'position:absolute;top:5px;right:5px;cursor:pointer;color:',
            ';&:hover{color:#f0b90b;}',
          ],
          (e) => e.theme.fontColor || '#fff'
        );
      class x extends o.PureComponent {
        componentDidMount() {
          const e = this.props.close;
          this.timoutHandle = setTimeout(() => {
            e && e();
          }, 5e3);
        }
        render() {
          const e = this.props,
            n = e.title,
            a = e.msg,
            t = e.type,
            o = e.close;
          return r.a.createElement(
            l.a,
            { leaveReverse: !0, delay: 100, type: ['right', 'left'] },
            r.a.createElement(
              p,
              { key: '1' },
              r.a.createElement(
                g,
                null,
                r.a.createElement(
                  k,
                  null,
                  r.a.createElement('img', {
                    src: 'success' === t ? d.a : m.a,
                    alt: !0,
                  })
                ),
                r.a.createElement(
                  y,
                  null,
                  r.a.createElement(b, null, n),
                  r.a.createElement(f, null, a)
                ),
                r.a.createElement(
                  w,
                  { onClick: o },
                  r.a.createElement(s.a, { type: 'close', size: '16' })
                )
              )
            )
          );
        }
        componentWillUnmount() {
          clearTimeout(this.timoutHandle);
        }
      }
      Object(t.a)(x, 'defaultProps', {
        closeText: 'close',
        title: '',
        children: null,
        closeAlign: 'flex-end',
        close: () => {},
      }),
        (n.a = x);
    },
    543: function (e, n, a) {
      e.exports = a(950);
    },
    56: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return t;
      }),
        a.d(n, 'c', function () {
          return o;
        }),
        a.d(n, 'b', function () {
          return r;
        }),
        a.d(n, 'd', function () {
          return i;
        });
      const t = !0,
        o =
          (Object({
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
          }).REACT_APP_ENABLE_MOONPAY,
          'production'),
        r =
          'production' === o
            ? 'pk_live_AezjYN2UJghXHVXoWH6oFFE3kBI37p'
            : 'pk_test_OZksbXGh4UvoO9zxDKS9IpbGVSZke4h',
        i =
          'production' === o
            ? 'https://wallet.binance.org/api/v1/moonpay/sign'
            : 'https://testnet-wallet.binance.org/api/v1/moonpay/sign';
    },
    57: function (e, n, a) {
      'use strict';
      a.d(n, 'b', function () {
        return l;
      }),
        a.d(n, 'e', function () {
          return s;
        }),
        a.d(n, 'k', function () {
          return c;
        }),
        a.d(n, 'f', function () {
          return d;
        }),
        a.d(n, 'c', function () {
          return u;
        }),
        a.d(n, 'd', function () {
          return m;
        }),
        a.d(n, 'a', function () {
          return h;
        }),
        a.d(n, 'i', function () {
          return p;
        }),
        a.d(n, 'g', function () {
          return g;
        }),
        a.d(n, 'h', function () {
          return k;
        }),
        a.d(n, 'j', function () {
          return y;
        }),
        a.d(n, 'p', function () {
          return b;
        }),
        a.d(n, 'n', function () {
          return f;
        }),
        a.d(n, 'o', function () {
          return w;
        }),
        a.d(n, 's', function () {
          return T;
        }),
        a.d(n, 't', function () {
          return P;
        }),
        a.d(n, 'q', function () {
          return O;
        }),
        a.d(n, 'r', function () {
          return E;
        }),
        a.d(n, 'm', function () {
          return B;
        }),
        a.d(n, 'l', function () {
          return S;
        });
      var t = a(5),
        o = a.n(t),
        r = a(9),
        i = a(11);
      const l = 'SET_BANLANCES',
        s = 'SET_CURRENT_TRADE',
        c = 'SET_TOKENS',
        d = 'SET_FIAT_CURRENCY',
        u = 'SET_CRYPTO_CURRENCY',
        m = 'SET_CURRENT_PRICE',
        h = 'SET_AMOUNT',
        p = 'SET_SHOW_PRICE_NOTIFY',
        g = 'SET_PRICE_CHECK',
        k = 'SET_PRICE_CHECK_TEXT',
        y = 'SET_SHOW_TRADE_PAIRS_MOBILE',
        b = (e) => (n) => n({ type: s, data: e }),
        f = (e) => (n) => n({ type: h, data: e }),
        w = (e) => (n) => n({ type: m, data: e }),
        x = (e) => (n) => n({ type: c, data: e }),
        v = (e) => (n) => n({ type: d, data: e }),
        C = (e) => (n) => n({ type: u, data: e }),
        T = (e) => (n) => {
          n({ type: p, data: e });
        },
        P = (e) => (n) => {
          n({ type: y, data: e });
        },
        O = (e) => (n) => n({ type: g, data: e }),
        E = (e) => (n) => n({ type: k, data: e }),
        B = () =>
          (function () {
            var e = Object(r.a)(
              o.a.mark(function e(n) {
                var a, t;
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), i.e.getTokens();
                        case 3:
                          return (
                            (a = e.sent), (e.next = 6), i.e.getMiniTokens()
                          );
                        case 6:
                          (t = e.sent), n(x([...a, ...t])), (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(0)),
                            console.log(
                              'status:'
                                .concat(e.t0.status, ' message: ')
                                .concat(e.t0.statusText)
                            );
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
        S = () =>
          (function () {
            var e = Object(r.a)(
              o.a.mark(function e(n) {
                var a, t;
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0), (e.next = 3), i.e.getFiatCurrency()
                          );
                        case 3:
                          return (
                            (a = e.sent), (e.next = 6), i.e.getCryptoCurrency()
                          );
                        case 6:
                          (t = e.sent), n(v(a)), n(C(t)), (e.next = 14);
                          break;
                        case 11:
                          (e.prev = 11),
                            (e.t0 = e.catch(0)),
                            console.log(
                              'status:'
                                .concat(e.t0.status, ' message: ')
                                .concat(e.t0.statusText)
                            );
                        case 14:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
    },
    595: function (e, n) {},
    597: function (e, n) {},
    6: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return p;
      }),
        a.d(n, 'e', function () {
          return g;
        }),
        a.d(n, 'd', function () {
          return k;
        }),
        a.d(n, 'c', function () {
          return y;
        }),
        a.d(n, 'b', function () {
          return b;
        });
      var t = a(201),
        o = a(0),
        r = a.n(o),
        i = a(24),
        l = a(4),
        s = a.n(l),
        c = a(41),
        d = a(163),
        u = a(72),
        m = a(187);
      const h = ({ i18n: e, defaultValue: n, value: a }) =>
        (e || {})[a] || n || a;
      h.propTypes = { i18n: s.a.object, value: s.a.string };
      const p = Object(i.b)((e) => ({ i18n: e.i18n.data }))(h),
        g = (e) =>
          Object(i.b)((e) => ({
            locale: e.i18n.locale,
            i18n: e.i18n.data,
            formatI18nText: (n, { defaultValue: a = '', values: t } = {}) => {
              let o = h({ i18n: e.i18n.data, defaultValue: a, value: n });
              return t
                ? (Object.keys(t).forEach((e) => {
                    o = o.replace('{'.concat(e, '}'), t[e]);
                  }),
                  o)
                : o;
            },
          }))(e),
        k = () => {
          const e = Object(i.d)((e) => e.i18n.locale),
            n = Object(i.d)((e) => e.i18n.data),
            a = Object(o.useCallback)(
              (e, { defaultValue: a = '', values: t } = {}) => {
                let o = h({ i18n: n, defaultValue: a, value: e });
                return t
                  ? (Object.keys(t).forEach((e) => {
                      o = o.replace('{'.concat(e, '}'), t[e]);
                    }),
                    o)
                  : o;
              },
              [n]
            );
          return Object(o.useMemo)(
            () => ({ locale: e, formatI18nText: a }),
            [e, a]
          );
        },
        y = (...e) => e.reduce((e, n) => e.concat(['/:locale'.concat(n)]), []),
        b = Object(i.b)((e) => ({ locale: e.i18n.locale }))((e) => {
          let n = e.component,
            a = e.locale,
            o = e.dispatch,
            i = Object(t.a)(e, ['component', 'locale', 'dispatch']);
          return r.a.createElement(
            c.b,
            Object.assign({}, i, {
              render: (e) => {
                const t = e.match,
                  i = t.params,
                  l = t.url,
                  s = a || Object(u.a)('lang') || 'en',
                  h = i.locale;
                let p,
                  g = h || s;
                return (
                  m.a[g]
                    ? h || (p = '/'.concat(g).concat(e.location.pathname))
                    : ((g = s), (p = '/'.concat(g).concat(l))),
                  o(Object(d.c)(g)),
                  p
                    ? r.a.createElement(c.a, { to: p })
                    : r.a.createElement(n, e)
                );
              },
            })
          );
        });
    },
    607: function (e, n) {},
    609: function (e, n) {},
    635: function (e, n) {},
    636: function (e, n) {},
    64: function (e, n, a) {
      'use strict';
      a.d(n, 'c', function () {
        return t;
      }),
        a.d(n, 'd', function () {
          return o;
        }),
        a.d(n, 'b', function () {
          return r;
        }),
        a.d(n, 'e', function () {
          return i;
        }),
        (n.a = (e) => {
          const n = new RegExp('(^|&)'.concat(e, '=([^&]*)(&|$)')),
            a = window.location.search.substr(1).match(n);
          return null != a ? decodeURIComponent(a[2]) : null;
        });
      const t = () =>
          /mobile|phone|android|pad/i.test(window.navigator.userAgent),
        o = () => /pad/i.test(window.navigator.userAgent),
        r = () => /iphone|ipad/i.test(window.navigator.userAgent),
        i = () => {
          const e = window.location,
            n = e.origin,
            a = e.pathname,
            t = e.hash;
          window.location.href = n + a + t;
        };
    },
    641: function (e, n) {},
    643: function (e, n) {},
    667: function (e, n) {},
    69: function (e, n, a) {
      'use strict';
      a.d(n, 'b', function () {
        return t;
      }),
        a.d(n, 'a', function () {
          return o;
        }),
        a.d(n, 'd', function () {
          return r;
        }),
        a.d(n, 'c', function () {
          return i;
        });
      const t = 'SET_WALLETCONNECT_URI',
        o = 'SET_ISCONNECT_WITH_WALLECT',
        r = (e) => (n) => n({ type: t, data: e }),
        i = (e) => (n) => n({ type: o, data: e });
    },
    72: function (e, n, a) {
      'use strict';
      a.d(n, 'a', function () {
        return r;
      }),
        a.d(n, 'e', function () {
          return i;
        }),
        a.d(n, 'c', function () {
          return l;
        }),
        a.d(n, 'd', function () {
          return s;
        }),
        a.d(n, 'b', function () {
          return c;
        });
      var t = a(7);
      a(310);
      const o = window.ipcRenderer,
        r = (e) => {
          if ('undefined' === typeof document) return '';
          const n = ''.concat(e, '='),
            a = document.cookie.split(';');
          for (let t = 0; t < a.length; t++) {
            let e = a[t];
            for (; ' ' === e.charAt(0); ) e = e.substring(1, e.length);
            if (0 === e.indexOf(n))
              return e.substring(n.length, e.length) || '';
          }
          return '';
        },
        i = (e, n, a = 365) => {
          const t = new Date();
          let o;
          a
            ? (t.setTime(t.getTime() + 24 * a * 60 * 60 * 1e3),
              (o = '; expires='.concat(t.toGMTString())))
            : (o = ''),
            (document.cookie = ''
              .concat(e, '=')
              .concat(n)
              .concat(o, '; path=/'));
        },
        l = (e, n) => {
          let a = window.sessionStorage.getItem('user');
          (a = (a && JSON.parse(a)) || {}),
            (a = Object(t.a)({ address: e }, n)),
            window.sessionStorage.setItem('user', JSON.stringify(a));
        },
        s = (e) => (
          o.send('keystore_save', e),
          new Promise((e, n) => {
            o.on('save_keystore_success', (n, a) => {
              e(a);
            }),
              o.on('save_keystore_fail', (e, a) => {
                n(a);
              });
          })
        ),
        c = () => (
          o.send('keystore_read'),
          new Promise((e, n) => {
            o.on('keystore_read_success', (n, a) => {
              e(a);
            }),
              o.on('keystore_read_failure', () => {
                n('read keystores failed');
              });
          })
        );
    },
    753: function (e, n) {},
    831: function (e, n) {},
    834: function (e, n) {},
    836: function (e, n) {},
    852: function (e, n) {},
    92: function (e, n, a) {
      'use strict';
      a.d(n, 'b', function () {
        return r;
      }),
        a.d(n, 'c', function () {
          return i;
        });
      var t = a(251),
        o = a.n(t);
      const r = (e) => {
          const n = document.createElement('a'),
            a = new Blob([JSON.stringify(e)]);
          (n.download = ''.concat(o.a.v4(), '_keystore')),
            (n.href = URL.createObjectURL(a)),
            document.body.appendChild(n),
            n.click(),
            window.URL.revokeObjectURL(n.href),
            n.remove();
        },
        i = () => {
          let e = sessionStorage.getItem('user') || '{}';
          return (e = JSON.parse(e)), e.flags && e.flags.isWalletConnect;
        };
      n.a = () => {
        let e = sessionStorage.getItem('user') || '{}';
        return (e = JSON.parse(e)), !!e.keystore;
      };
    },
    94: function (e, n, a) {
      'use strict';
      a.d(n, 'b', function () {
        return c;
      }),
        a.d(n, 'c', function () {
          return d;
        }),
        a.d(n, 'a', function () {
          return u;
        }),
        a.d(n, 'f', function () {
          return m;
        }),
        a.d(n, 'd', function () {
          return g;
        }),
        a.d(n, 'e', function () {
          return k;
        });
      var t = a(5),
        o = a.n(t),
        r = a(9),
        i = a(50),
        l = a(11),
        s = a(33);
      const c = 'SET_OPEN_ORDERS',
        d = 'SET_ORDER_HISTORY',
        u = 'SET_FETCH_OPENORDERS',
        m = (e) => (n) => n({ type: c, data: e }),
        h = (e) => (n) => n({ type: d, data: e }),
        p = (e) => (n) => n({ type: u, data: e }),
        g = ({ params: e, tokenType: n = i.a }) =>
          (function () {
            var a = Object(r.a)(
              o.a.mark(function a(t) {
                var r;
                return o.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (((a.prev = 0), t(p(!0)), n !== i.a)) {
                            a.next = 8;
                            break;
                          }
                          return (a.next = 5), l.e.getOpenOrdersQS(e);
                        case 5:
                          (a.t0 = a.sent), (a.next = 11);
                          break;
                        case 8:
                          return (a.next = 10), l.e.getOpenOrdersQSForBep8(e);
                        case 10:
                          a.t0 = a.sent;
                        case 11:
                          (r = a.t0), t(m(r)), t(p(!1)), (a.next = 20);
                          break;
                        case 16:
                          (a.prev = 16),
                            (a.t1 = a.catch(0)),
                            t(p(!1)),
                            console.log(
                              'status:'
                                .concat(a.t1.status, ' message: ')
                                .concat(a.t1.statusText)
                            );
                        case 20:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 16]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
        k = ({ params: e, withLoading: n, tokenType: a = i.a }) =>
          (function () {
            var t = Object(r.a)(
              o.a.mark(function t(r) {
                var c;
                return o.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((t.prev = 0), n && r(Object(s.i)(!0)), a !== i.a)
                          ) {
                            t.next = 8;
                            break;
                          }
                          return (t.next = 5), l.e.getOrderHistoryQS(e);
                        case 5:
                          (t.t0 = t.sent), (t.next = 11);
                          break;
                        case 8:
                          return (t.next = 10), l.e.getOrderHistoryQSForBep8(e);
                        case 10:
                          t.t0 = t.sent;
                        case 11:
                          (c = t.t0),
                            r(h(c)),
                            n && r(Object(s.i)(!1)),
                            (t.next = 20);
                          break;
                        case 16:
                          (t.prev = 16),
                            (t.t1 = t.catch(0)),
                            console.log(
                              'status:'
                                .concat(t.t1.status, ' message: ')
                                .concat(t.t1.statusText)
                            ),
                            n && r(Object(s.i)(!1));
                        case 20:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 16]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
    },
    947: function (e, n) {
      if ('undefined' !== typeof window) {
        const e = window.analytics || {};
        if (void 0 === e.firstLoad) {
          const n = /^(?!(^|.*\.)(?:binance\.(org))$).*$/,
            a = /^(?!(^|.*\.)(?:fdgahl\.cn)$).*$/,
            t = /^localhost$/,
            o = window.location.hostname;
          !o.match(n) ||
            !o.match(a) ||
            o.match(t) ||
            window.location.href.startsWith('file://') ||
            window.location.href.startsWith(
              'https://translate.googleusercontent.com/'
            ) ||
            window.location.href.startsWith(
              'https://www.translatoruser.net/'
            ) ||
            (function (e, n) {
              const a = e.createElement(n),
                t = e.getElementsByTagName(n)[0],
                o = ''.concat('5134e38f', '/static/a.min.js');
              (a.src = o),
                a.setAttribute('async', ''),
                t.parentNode.insertBefore(a, t.nextSibling);
            })(document, 'script'),
            (e.firstLoad = !1);
        }
      }
    },
    948: function (e, n, a) {},
    949: function (e, n, a) {},
    950: function (e, n, a) {
      'use strict';
      a.r(n);
      a(544);
      var t = a(0),
        o = a.n(t),
        r = a(16),
        i = a(36),
        l = a.n(i),
        s = a(24),
        c = a(503),
        d = a.n(c),
        u = a(8),
        m = a(61),
        h = a(41),
        p = a(19),
        g = a(202),
        k = a(5),
        y = a.n(k),
        b = a(9),
        f = a(245),
        w = a.n(f);
      let x;
      class v extends t.Component {
        componentDidMount() {
          return Object(b.a)(
            y.a.mark(function e() {
              var n, a;
              return y.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ('undefined' !== typeof window) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt('return');
                    case 2:
                      if (!window.location.hostname.includes('localhost')) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt('return');
                    case 4:
                      try {
                        (n = window.location.hostname.includes('localhost')
                          ? ''
                          : 'https://sensors.binance.cloud/sa?project=dex'),
                          (a = window.location.hostname.includes('localhost')
                            ? ''
                            : 'https://s.datasconsole.com/?project=dex'),
                          w.a.init({
                            server_url: n,
                            web_url: a,
                            heatmap_url: '/static/sensorsdata/heatmap.min.js',
                            heatmap: { clickmap: 'all' },
                            name: 'SensorsSdk',
                            show_log: !1,
                          }),
                          w.a.quick('autoTrack'),
                          (t = w.a),
                          (x = t);
                      } catch (o) {
                        console.error(o);
                      }
                    case 5:
                    case 'end':
                      return e.stop();
                  }
                var t;
              }, e);
            })
          )();
        }
        render() {
          return o.a.createElement(t.Fragment, null, null);
        }
      }
      class C extends t.PureComponent {
        componentDidMount() {
          window.location.href = '/static/guides/DEX-Ledger-Documentation.html';
        }
        render() {
          return o.a.createElement(
            'p',
            null,
            'Please wait, loading Ledger guide.'
          );
        }
      }
      var T = C,
        P = a(423),
        O = a.n(P),
        E = a(1),
        B = a(508),
        S = a(328),
        M = a(64),
        A = a(37);
      const W = E.e.div.withConfig({
          displayName: 'RouteLoading__Wrap',
          componentId: 'sc-1eyn820-0',
        })(
          ['position:fixed;top:0;left:0;right:0;z-index:', ';'],
          A.a.routeLoading
        ),
        z = Object(E.e)(W).withConfig({
          displayName: 'RouteLoading__MobileWrap',
          componentId: 'sc-1eyn820-1',
        })(['bottom:0;']),
        D = E.e.div.withConfig({
          displayName: 'RouteLoading__Progress',
          componentId: 'sc-1eyn820-2',
        })([
          'width:100%;height:2px;background:#f0b90b;animation:big 0.8s linear;@keyframes big{0%{width:0%;}10%{width:80%;}30%{width:98%;}100%{width:100%;}}',
        ]);
      var _ = ({ error: e, retry: n, timedOut: a }) =>
        e
          ? (window.__DEV__ && alert(e),
            console.log(e),
            setTimeout(() => {
              Object(M.e)();
            }, 1e3),
            o.a.createElement(
              'div',
              null,
              'Sorry, there was a problem loading the page.',
              o.a.createElement('button', { onClick: n }, 'Retry')
            ))
          : a
          ? o.a.createElement(
              'div',
              null,
              'Taking a long time... ',
              o.a.createElement('button', { onClick: n }, 'Retry')
            )
          : o.a.createElement(
              o.a.Fragment,
              null,
              Object(M.c)()
                ? o.a.createElement(z, null, o.a.createElement(S.a, null))
                : o.a.createElement(W, null, o.a.createElement(D, null))
            );
      const I = l()({
          loader: () => a.e(37).then(a.bind(null, 1186)),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        N = l()({
          loader: () =>
            Promise.all([a.e(0), a.e(1), a.e(4), a.e(3), a.e(14)]).then(
              a.bind(null, 1197)
            ),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        K = l()({
          loader: () => Promise.all([a.e(6), a.e(25)]).then(a.bind(null, 1069)),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        H = l()({
          loader: () =>
            Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(11)]).then(
              a.bind(null, 1196)
            ),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        F = l()({
          loader: () =>
            Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(12)]).then(
              a.bind(null, 1095)
            ),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        j = l()({
          loader: () =>
            Promise.all([a.e(0), a.e(5), a.e(26)]).then(a.bind(null, 1202)),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        L = l()({
          loader: () =>
            Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(21)]).then(
              a.bind(null, 991)
            ),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        R = l()({
          loader: () => Promise.all([a.e(7), a.e(27)]).then(a.bind(null, 1184)),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        U = l()({
          loader: () =>
            Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(18)]).then(
              a.bind(null, 1002)
            ),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        q = l()({
          loader: () =>
            Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(15)]).then(
              a.bind(null, 1187)
            ),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        V = l()({
          loader: () =>
            Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(16)]).then(
              a.bind(null, 1203)
            ),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        G = l()({
          loader: () =>
            Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(17)]).then(
              a.bind(null, 1098)
            ),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        Y = l()({
          loader: () => a.e(33).then(a.bind(null, 1188)),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        X = l()({
          loader: () => a.e(34).then(a.bind(null, 1189)),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        Q = l()({
          loader: () => a.e(32).then(a.bind(null, 1190)),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        J = l()({
          loader: () => Promise.all([a.e(5), a.e(24)]).then(a.bind(null, 1191)),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        Z = l()({
          loader: () => a.e(35).then(a.bind(null, 1192)),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        $ = l()({
          loader: () => a.e(38).then(a.bind(null, 1193)),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        ee = l()({
          loader: () =>
            Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(13)]).then(
              a.bind(null, 1200)
            ),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        ne = l()({
          loader: () =>
            Promise.all([a.e(0), a.e(40), a.e(23)]).then(a.bind(null, 1199)),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        ae = l()({
          loader: () => a.e(31).then(a.bind(null, 1204)),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        te = l()({
          loader: () => a.e(28).then(a.bind(null, 1205)),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        oe = l()({
          loader: () => a.e(30).then(a.bind(null, 1201)),
          loading: _,
          delay: 500,
          timeout: 5e4,
        }),
        re = l()({
          loader: () => Promise.all([a.e(6), a.e(22)]).then(a.bind(null, 1198)),
          loading: _,
          delay: 500,
          timeout: 5e4,
        });
      var ie = a(6),
        le = a(166),
        se = a(323);
      const ce = O()().fetch,
        de = E.e.div.withConfig({
          displayName: 'BlogArticlePage__Wrapper',
          componentId: 'sc-1yobcxd-0',
        })(['background:#fdfdfd;']),
        ue = E.e.div.withConfig({
          displayName: 'BlogArticlePage__Content',
          componentId: 'sc-1yobcxd-1',
        })([
          "max-width:1200px;font-size:15px;padding:240px 15px 80px 15px;margin:auto;&:before{content:'';display:block;background:transparent url(/static/blog/en/images/banner.png);background-size:cover;background-position:center center;position:absolute;left:0;top:44px;height:200px;width:100%;}h1,h2,h3,h4,h5,h6{color:inherit !important;font-size:1.2rem;margin:1.5rem 0 0.5rem;font-weight:600;}h1{font-size:2rem;margin-bottom:1.7rem;}h3{font-size:1rem;}p{line-height:1.66rem;}ul{list-style:initial;margin-left:1rem;}a{&,&:hover,&:active,&:visited{font-weight:bold;color:#f0b90b;}}",
        ]),
        me = E.e.div.withConfig({
          displayName: 'BlogArticlePage__Loading',
          componentId: 'sc-1yobcxd-2',
        })([
          'width:20px;height:20px;border-radius:50%;border:1px solid #fff;border-left:1px solid transparent;animation:load 0.8s infinite linear;align-self:center;@keyframes load{0%{transform:rotate(0deg);}50%{transform:rotate(180deg);}100%{transform:rotate(360deg);}}',
        ]),
        he = E.e.a
          .attrs({ href: ({ src: e }) => e, target: '_blank' })
          .withConfig({
            displayName: 'BlogArticlePage__ImageLink',
            componentId: 'sc-1yobcxd-3',
          })(
          [
            'background:url(',
            ');background-repeat:no-repeat;background-size:cover;background-position:center;border:1px solid transparent;height:256px;width:100vw;max-width:512px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;margin:1.5rem 0;',
          ],
          ({ href: e }) => e
        );
      class pe extends t.PureComponent {
        constructor(...e) {
          super(...e), Object(u.a)(this, 'state', {});
        }
        componentWillMount() {
          var e = this;
          return Object(b.a)(
            y.a.mark(function n() {
              return y.a.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), e.fetchContent(e.props);
                    case 2:
                    case 'end':
                      return n.stop();
                  }
              }, n);
            })
          )();
        }
        componentDidMount() {
          document
            .querySelector('meta[name="robots"]')
            .setAttribute('content', 'index,follow');
        }
        componentWillReceiveProps(e) {
          var n = this;
          return Object(b.a)(
            y.a.mark(function a() {
              var t, o, r, i, l, s, c, d;
              return y.a.wrap(function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      if (
                        ((t = e.match),
                        (o = t.params),
                        (r = o.locale),
                        (i = o.slug),
                        (l = n.props.match),
                        (s = l.params),
                        (c = s.locale),
                        (d = s.slug),
                        r !== c || i !== d)
                      ) {
                        a.next = 6;
                        break;
                      }
                      return a.abrupt('return');
                    case 6:
                      return (a.next = 8), n.fetchContent(e);
                    case 8:
                    case 'end':
                      return a.stop();
                  }
              }, a);
            })
          )();
        }
        fetchContent(e = this.props) {
          var n = this;
          return Object(b.a)(
            y.a.mark(function a() {
              var t, o, r, i, l, s;
              return y.a.wrap(function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (t = e.match),
                        (o = t.params),
                        (r = o.locale),
                        (i = o.slug),
                        (a.next = 4),
                        ce('/static/blog/'.concat(r, '/').concat(i, '.md'))
                      );
                    case 4:
                      return (l = a.sent), (a.next = 7), l.text();
                    case 7:
                      (s = a.sent),
                        n.setState({ content: s, status: l.status });
                    case 9:
                    case 'end':
                      return a.stop();
                  }
              }, a);
            })
          )();
        }
        render() {
          const e = this.state,
            n = e.content,
            a = e.status;
          if (a && 200 !== a) return o.a.createElement(Q, null);
          let t = o.a.createElement(me, null);
          return (
            n &&
              (t = o.a.createElement(
                B.a,
                { options: { overrides: { img: { component: he } } } },
                n
              )),
            o.a.createElement(
              le.a,
              { theme: 'light' },
              o.a.createElement(
                se.d,
                null,
                o.a.createElement(de, null, o.a.createElement(ue, null, t))
              )
            )
          );
        }
      }
      Object(u.a)(pe, 'defaultProps', { match: {} });
      var ge = Object(ie.e)(
          Object(s.b)(({ i18n: { locale: e } }) => ({ locale: e }))(
            Object(h.j)(pe)
          )
        ),
        ke = a(139),
        ye = a(140),
        be = a(197);
      var fe = {
        init: function () {
          be.a.initialize('UA-196912329-3', { debug: !1 });
        },
        sendEvent: function (e) {
          be.a.event(e);
        },
        sendPageview: function (e) {
          be.a.set({ page: e }), be.a.pageview(e);
        },
      };
      const we = () => (
        (() => {
          const e = Object(h.h)();
          Object(t.useEffect)(() => {
            fe.init();
          }, []),
            Object(t.useEffect)(() => {
              const n = e.pathname + e.search;
              fe.sendPageview(n);
            }, [e]);
        })(),
        null
      );
      var xe = a(57),
        ve = a(11);
      const Ce = (e) => (n) => n({ type: 'SET_PEERS', data: e }),
        Te = () =>
          (function () {
            var e = Object(b.a)(
              y.a.mark(function e(n) {
                var a;
                return y.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), ve.e.getPeers();
                        case 3:
                          (a = e.sent), n(Ce(a)), (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            console.log(
                              'status:'
                                .concat(e.t0.status, ' message: ')
                                .concat(e.t0.statusText)
                            );
                        case 10:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
      var Pe = a(119),
        Oe = a(192),
        Ee = a(45),
        Be = a(33),
        Se = a(163),
        Me = a(50);
      var Ae = Object(t.memo)(() => {
          const e = Object(s.c)(),
            n = Object(Me.d)(),
            a = Object(s.d)((e) => e.exchange.currentTrade),
            o = Object(s.d)((e) => e.tradePairs.pairs),
            r = Object(t.useMemo)(
              () => o.filter((e) => e.tokenType === n),
              [o, n]
            );
          return (
            Object(t.useEffect)(() => {
              e(Object(xe.l)()),
                e(Te()),
                e(Object(Oe.d)()),
                e(Object(xe.m)()),
                e(Object(Pe.d)()),
                e(Object(Be.g)()),
                e(Object(Se.b)());
              let n = sessionStorage.getItem('user');
              (n = (n && JSON.parse(n)) || {}),
                n.address && e(Object(Ee.d)(n.address));
            }, [e]),
            Object(t.useEffect)(() => {
              if (!a && r.length > 0) {
                const n = r[0],
                  a = ''
                    .concat(n.base_asset_symbol, '_')
                    .concat(n.quote_asset_symbol);
                e(Object(xe.p)(a));
              }
            }, [e, a, r]),
            null
          );
        }),
        We = a(102),
        ze = a(43),
        De = a(56);
      const _e =
        (window.chrome && window.chrome.extension) || Object(ze.a)()
          ? m.b
          : m.a;
      class Ie extends t.PureComponent {
        constructor(...e) {
          super(...e),
            Object(u.a)(this, '_getDeviceInfo', () => {
              const e = this.props,
                n = e.dispatch,
                a = e.address,
                t = setInterval(() => {
                  const e = We.a.getInfo(a);
                  e.webgl_vendor &&
                    e.webgl_renderer &&
                    (n(Object(Be.h)(e)), clearInterval(t));
                }, 2e3);
            });
        }
        componentDidMount() {
          window.addEventListener('resize', this._resizeWindow),
            this._getDeviceInfo(),
            window.addEventListener('load', () => {
              void 0 !== performance
                ? setTimeout(() => {
                    const e = performance.getEntriesByType('resource');
                    if (void 0 === e || e.length <= 0)
                      return void console.log(
                        'there are NO `resource` performance records'
                      );
                    const n = e
                        .filter(
                          (e) =>
                            'xmlhttprequest' === e.initiatorType ||
                            'fetch' === e.initiatorType
                        )
                        .map((e) => ({
                          connectEnd: e.connectEnd,
                          connectStart: e.connectStart,
                          decodedBodySize: e.decodedBodySize,
                          domainLookupEnd: e.domainLookupEnd,
                          domainLookupStart: e.domainLookupStart,
                          duration: e.duration,
                          encodedBodySize: e.encodedBodySize,
                          entryType: e.entryType,
                          fetchStart: e.fetchStart,
                          initiatorType: e.initiatorType,
                          name: e.name,
                          nextHopProtocol: e.nextHopProtocol,
                          redirectEnd: e.redirectEnd,
                          redirectStart: e.redirectStart,
                          requestStart: e.requestStart,
                          responseEnd: e.responseEnd,
                          responseStart: e.responseStart,
                          secureConnectionStart: e.secureConnectionStart,
                          serverTiming: e.serverTiming,
                          startTime: e.startTime,
                          transferSize: e.transferSize,
                          workerStart: e.workerStart,
                          page: window.location.pathname,
                        })),
                      a = performance.getEntriesByType('navigation'),
                      t = { metrics: n.concat(a) };
                    ve.e.collectMetrics(t);
                  }, 5e3)
                : console.log('performance NOT supported');
            });
        }
        componentWillUnmount() {
          window.removeEventListener('resize', this._resizeWindow);
        }
        render() {
          const e = this.props,
            n = e.isLoading,
            a = e.isHardware,
            t = e.showTradePairsMobile;
          return o.a.createElement(
            p.b.Provider,
            { mode: De.c, apiKey: De.b, signatureEndpoint: De.d },
            o.a.createElement(
              ke.c,
              null,
              o.a.createElement(
                ye.b,
                null,
                o.a.createElement(
                  _e,
                  null,
                  o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                      h.d,
                      null,
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: '/',
                        component: I,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/'),
                        component: I,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/trade'),
                        component: H,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/tradev1'),
                        component: H,
                      }),
                      De.a &&
                        o.a.createElement(ie.b, {
                          exact: !0,
                          path: Object(ie.c)('/trade/mini/:symbol'),
                          component: H,
                        }),
                      De.a &&
                        o.a.createElement(ie.b, {
                          exact: !0,
                          path: Object(ie.c)('/trade/mini'),
                          component: H,
                        }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: '/trade/:symbol',
                        component: H,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/trade/:symbol'),
                        component: H,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/tradev1/:symbol'),
                        component: H,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/index.html'),
                        component: H,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/create'),
                        component: K,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/unlock'),
                        component: N,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/openOrders'),
                        component: L,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/mini/openOrders'),
                        component: L,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/orderHistory'),
                        component: U,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/mini/orderHistory'),
                        component: U,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/tradeHistory'),
                        component: V,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/feeHistory'),
                        component: q,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/balances'),
                        component: F,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/balances/:symbol'),
                        component: j,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/transactionHistory'),
                        component: G,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/history'),
                        component: R,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/terms'),
                        component: Z,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/edit-wallet'),
                        component: re,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/tokens'),
                        component: ee,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/tokens_beta'),
                        component: ne,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/tokens/issue/:type'),
                        component: te,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/tokens/issue'),
                        component: ae,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/blog/:slug'),
                        component: ge,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/guides/ledger'),
                        component: T,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/coinomi'),
                        component: Y,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/infinito'),
                        component: X,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/recover'),
                        component: oe,
                      }),
                      o.a.createElement(ie.b, {
                        exact: !0,
                        path: Object(ie.c)('/privacy'),
                        component: $,
                      }),
                      o.a.createElement(h.b, { component: Q })
                    ),
                    n && !a && o.a.createElement(g.a, null),
                    Object(ze.a)() && o.a.createElement(v, null),
                    o.a.createElement(Ae, null),
                    o.a.createElement(we, null),
                    Object(M.c)() && t && o.a.createElement(J, { hide: !t })
                  )
                )
              )
            )
          );
        }
      }
      Object(u.a)(Ie, 'defaultProps', {
        isLoading: !1,
        isHardware: !1,
        showTradePairsMobile: !1,
        deviceInfo: {},
        address: '',
      });
      var Ne = Object(s.b)(
        ({
          globalData: { isLoading: e, deviceInfo: n },
          account: {
            address: a,
            flags: { isHardware: t },
          },
          exchange: { showTradePairsMobile: o },
        }) => ({
          isLoading: e,
          isHardware: t,
          showTradePairsMobile: o,
          deviceInfo: n,
          address: a,
        })
      )(Ie);
      class Ke extends t.PureComponent {
        render() {
          const e = this.props,
            n = e.isLoading,
            a = e.isHardware;
          return o.a.createElement(
            ke.c,
            null,
            o.a.createElement(
              ye.b,
              null,
              o.a.createElement(
                m.b,
                null,
                o.a.createElement(
                  'div',
                  null,
                  o.a.createElement(
                    h.d,
                    null,
                    o.a.createElement(ie.b, {
                      exact: !0,
                      path: Object(ie.c)('/create'),
                      component: K,
                    }),
                    o.a.createElement(ie.b, {
                      exact: !0,
                      path: Object(ie.c)('/unlock'),
                      component: N,
                    }),
                    o.a.createElement(ie.b, {
                      exact: !0,
                      path: Object(ie.c)('/tokens'),
                      component: ee,
                    }),
                    o.a.createElement(ie.b, {
                      exact: !0,
                      path: Object(ie.c)('/balances'),
                      component: F,
                    }),
                    o.a.createElement(ie.b, {
                      exact: !0,
                      path: Object(ie.c)('/transactionHistory'),
                      component: G,
                    })
                  ),
                  n && !a && o.a.createElement(g.a, null),
                  o.a.createElement(Ae, null),
                  o.a.createElement(we, null)
                )
              )
            )
          );
        }
      }
      Object(u.a)(Ke, 'defaultProps', { isLoading: !1, isHardware: !1 });
      var He = Object(s.b)(
        ({
          globalData: { isLoading: e },
          account: {
            flags: { isHardware: n },
          },
        }) => ({ isLoading: e, isHardware: n })
      )(Ke);
      const Fe = Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      function je(e) {
        navigator.serviceWorker
          .register(e)
          .then((e) => {
            e.onupdatefound = () => {
              const n = e.installing;
              n.onstatechange = () => {
                'installed' === n.state &&
                  (navigator.serviceWorker.controller
                    ? console.log('New content is available; please refresh.')
                    : console.log('Content is cached for offline use.'));
              };
            };
          })
          .catch((e) => {
            console.error('Error during service worker registration:', e);
          });
      }
      var Le = a(93),
        Re = a(534),
        Ue = a(7),
        qe = a(111);
      const Ve = {
        password: '',
        address: '',
        privateKey: '',
        keyStore: '',
        step: a(477).a ? 'chooseMethod' : 'inputPassword',
        mnemonic: '',
        randomWords: [],
        keyStoreText: '',
        showPrivateKey: !1,
        confirmMnemonic: !1,
      };
      const Ge = Object(Ue.a)(
        {
          needAuth: !1,
          address: '',
          cipher: '',
          privateKey: '',
          keyStore: '',
          mnemonic: '',
          encryptedData: {},
          network: { id: '', name: '' },
          flags: {
            isHardware: !1,
            isLedger: !1,
            isTrezor: !1,
            isCoinomi: !1,
            isCoinomiEmulate: !1,
            isInfinito: !1,
            isInfinitoEmulate: !1,
            isWalletConnect: !1,
            isExtensionWallet: !1,
          },
          wcUri: '',
          userInfo: {},
        },
        (() => {
          let e = sessionStorage.getItem('user');
          e = (e && JSON.parse(e)) || {};
          const n = {};
          return (
            e.address &&
              ((n.address = e.address),
              (n.flags = e.flags || {}),
              (n.encryptedData = e.privateKey),
              (n.flags.isHardware || n.flags.isExtensionWallet) &&
                (n.privateKey = 'HARDWARE')),
            n
          );
        })()
      );
      let Ye;
      const Xe = (e) => {
        const n = e.balances || [];
        return (
          (e.balances = n.map((e) =>
            Object(Ue.a)({}, e, {
              free: parseFloat(e.free, 10),
              frozen: parseFloat(e.frozen, 10),
              locked: parseFloat(e.locked, 10),
            })
          )),
          e
        );
      };
      const Qe = {
        curIndicators: { curOver: 'MA', curInd: 'MACD' },
        isDataLoading: {},
      };
      var Je = a(66),
        Ze = a(123);
      const $e = {
          currentTrade: '',
          displayCurrentTrade: '',
          currentPrice: '',
          buyAmount: '',
          sellAmount: '',
          priceNotifyText: '',
          tokens: [],
          fiatRate: {},
          cryptoCurrencyRate: {},
          showPriceNotify: !1,
          hasPriceChecked: !1,
          nodeInfo: {},
          peers: {},
          showTradePairsMobile: !1,
        },
        en = (e) => {
          const n = e.split('_');
          let a = Object(Je.a)(n, 2),
            t = a[0],
            o = a[1];
          return (
            Ze.a.find((e) => t.toUpperCase().includes(e)) &&
              (t = t.replace(/B-.+/i, '')),
            Ze.a.find((e) => o.toUpperCase().includes(e)) &&
              (o = o.replace(/B-.+/i, '')),
            ''.concat(t, '_').concat(o)
          );
        };
      const nn = { nodeInfo: {}, blockHeight: 0, isLoading: !1 };
      var an = a(250);
      const tn = { transactionHistory: {}, fetchTransaction: !1 };
      const on = {
        isLoading: !1,
        showNotLoginNotify: !1,
        triggerElement: null,
        isIpValid: !0,
        isShowIpValidation: !0,
        deviceInfo: {},
      };
      var rn = a(156);
      const ln = { tickerSize: {}, lotSize: {}, symbolTickers: [] };
      var sn = a(94);
      const cn = { openOrders: {}, orderHistory: {}, isFetchOpenOrders: !1 };
      const dn = {
          blockFeeHistory: {},
          fees: [],
          transferFee: 0,
          issueFeeForBep2: 0,
          issueTinyFee: 0,
          issueMiniFee: 0,
        },
        un = Math.pow(10, 8),
        mn = (e) => {
          for (let n = 0, a = e.length; n < a; n++) {
            const a = e[n] || {};
            if (a.fixed_fee_params) return a.fixed_fee_params.fee / un;
          }
          return 0;
        };
      var hn = a(112);
      const pn = {
          tradeHistory: { trade: [] },
          accountTradeHistory: { trade: [] },
          isFetchTradeHistory: !1,
        },
        gn = (e) => {
          switch (e) {
            case 0:
              return 'Unknown';
            case 1:
              return 'SellTaker';
            case 2:
              return 'BuyTaker';
            case 3:
              return 'BuySurplus';
            case 4:
              return 'SellSurplus';
            case 5:
              return 'Neutral';
            default:
              return 'Unknown';
          }
        };
      var kn = a(336);
      var yn = a(241);
      const bn = {
          pairs: [],
          quoteAssets: [],
          isFetchingMarkets: !0,
          favorites: Object(yn.c)(),
        },
        fn = [
          'TUSDB',
          'THKDB',
          'TGBPB',
          'TCADB',
          'TAUDB',
          'USD',
          'PAX',
          'IDRTB',
          'BKRW-AB7',
        ],
        wn = (e, n) => {
          const a = [];
          return (
            e.forEach((e) => {
              a.find((a) => a.toUpperCase() === e[n].toUpperCase()) ||
                a.push(e[n]);
            }),
            a
          );
        },
        xn = (e) => {
          const n = [
            { value: 'favorites', index: 0, displayName: 'favorites' },
          ];
          return {
            pairs: e
              .map((e) => {
                const a = e.quote_asset_symbol.toUpperCase();
                var t;
                return (
                  a.includes('BTCB') &&
                    ((e.tab = 'BTCB'),
                    n.find((e) => 'BTCB' === e.value) ||
                      n.push({ value: 'BTCB', index: 2, displayName: 'BTC' })),
                  a.includes('BNB') &&
                    ((e.tab = 'BNB'),
                    n.find((e) => 'BNB' === e.value) ||
                      n.push({ value: 'BNB', index: 1, displayName: 'BNB' })),
                  (t = a).includes('BTC') ||
                    t.includes('BNB') ||
                    fn.find((e) => t.includes(e)) ||
                    ((e.tab = 'ALTS'),
                    n.find((e) => 'ALTS' === e.value) ||
                      n.push({ value: 'ALTS', index: 3, displayName: 'ALTS' })),
                  (fn.find((e) => a.includes(e)) ||
                    a.includes('USD') ||
                    a.includes('PAX') ||
                    a.includes('TUSD')) &&
                    ((e.tab = 'FIAT\u24c8'),
                    n.find((e) => 'FIAT\u24c8' === e.value) ||
                      n.push({
                        value: 'FIAT\u24c8',
                        index: 4,
                        displayName: 'FIAT\u24c8',
                      })),
                  (e.price = e.price || e.list_price),
                  (e.base_asset_displayname = e.base_asset_symbol.replace(
                    /-.+/i,
                    ''
                  )),
                  (e.quote_asset_displayname = e.quote_asset_symbol.replace(
                    /-.+/i,
                    ''
                  )),
                  Ze.a.find((n) =>
                    e.base_asset_symbol.toUpperCase().includes(n)
                  ) &&
                    (e.base_asset_displayname = e.base_asset_symbol.replace(
                      /B-.+/i,
                      ''
                    )),
                  Ze.a.find((n) =>
                    e.quote_asset_symbol.toUpperCase().includes(n)
                  ) &&
                    (e.quote_asset_displayname = e.quote_asset_symbol.replace(
                      /B-.+/i,
                      ''
                    )),
                  e
                );
              })
              .sort((e, n) =>
                'BNB' === e.tab && 'BNB' === n.tab
                  ? n.volume - e.volume
                  : 'BNB' === e.tab && 'BNB' !== n.tab
                  ? -1
                  : ('BNB' !== e.tab && n.tab, 1)
              ),
            tabs: n.sort((e, n) => e.index - n.index).map((e) => e.displayName),
          };
        },
        vn = (e) => {
          const n = Object(yn.a)(),
            a = Object(yn.b)();
          if (n) {
            var t;
            const o =
              null === (t = a.favorites_logined) || void 0 === t
                ? void 0
                : t.find((e) => !!e[n]);
            if (o)
              (null === e || void 0 === e ? void 0 : e.length) > 0 &&
                (o[n] = e);
            else {
              const t = {};
              (t[n] = e || []), a.favorites_logined.push(t);
            }
          } else
            (null === e || void 0 === e ? void 0 : e.length) > 0 &&
              (a.favorites_unLogined = e);
          return window.localStorage.setItem('favorites', JSON.stringify(a)), e;
        };
      var Cn = a(69);
      const Tn = { wcUri: '', isConnectedWithWallet: !1, walletAddress: '' };
      var Pn = a(188);
      const On = {
        toBeRemovedWallet: null,
        toBeRenamedWallet: null,
        keystores: null,
        selectedWallet: null,
      };
      var En = a(334),
        Bn = Object(Le.c)({
          i18n: Se.a,
          create: (e = Ve, n) => {
            switch (n.type) {
              case qe.c:
                return Object(Ue.a)({}, e, { password: n.password });
              case qe.g:
                return Object(Ue.a)({}, e, { step: n.step });
              case qe.e:
              case qe.a:
              case qe.d:
                return Object(Ue.a)({}, e, {}, n.data);
              case qe.f:
                return Object(Ue.a)({}, e, { showPrivateKey: n.data });
              case qe.b:
                return Object(Ue.a)({}, e, { confirmMnemonic: n.data });
              default:
                return e;
            }
          },
          account: (e = Ge, n) => {
            switch (n.type) {
              case Ee.a:
                return Object(Ue.a)({}, e, {}, n.data);
              case Ee.c:
                return Object(Ue.a)({}, e, { userInfo: Xe(n.data) });
              case Ee.b:
                return (
                  (Ye = n.data),
                  e.flags.isHardware && (Ye = !1),
                  Object(Ue.a)({}, e, { needAuth: Ye })
                );
              default:
                return e;
            }
          },
          chart: (e = Qe, n) => {
            switch (n.type) {
              case 'CHANGE_CHART_INDICATOR':
                return Object(Ue.a)({}, e, {
                  curIndicators: Object(Ue.a)(
                    {},
                    e.curIndicators,
                    {},
                    n.curInd
                  ),
                });
              case 'IS_DATA_LOADING':
                return Object(Ue.a)({}, e, {
                  isDataLoading: Object(Ue.a)({}, e.isDataLoading, {
                    [n.key]: n.isLoading,
                  }),
                });
              default:
                return e;
            }
          },
          exchange: (e = $e, n) => {
            switch (n.type) {
              case xe.e:
                return Object(Ue.a)({}, e, {
                  currentTrade: n.data,
                  displayCurrentTrade: en(n.data),
                });
              case xe.f:
                return Object(Ue.a)({}, e, { fiatRate: n.data });
              case xe.c:
                return Object(Ue.a)({}, e, { cryptoCurrencyRate: n.data });
              case xe.k:
                return Object(Ue.a)({}, e, {
                  tokens:
                    ((a = n.data),
                    a.map(
                      (e) => (
                        Ze.a.find((n) => e.symbol.toUpperCase().includes(n)) &&
                          (e.original_symbol = e.symbol.replace(/B-.+/i, '')),
                        e
                      )
                    )),
                });
              case xe.b:
                return Object(Ue.a)({}, e, { balances: n.data });
              case xe.d:
                return Object(Ue.a)({}, e, { currentPrice: n.data });
              case xe.a:
                return Object(Ue.a)({}, e, {}, n.data);
              case xe.i:
                return Object(Ue.a)({}, e, { showPriceNotify: n.data });
              case xe.g:
                return Object(Ue.a)({}, e, { hasPriceChecked: n.data });
              case xe.h:
                return Object(Ue.a)({}, e, { priceNotifyText: n.data });
              case xe.j:
                return Object(Ue.a)({}, e, { showTradePairsMobile: n.data });
              default:
                return e;
            }
            var a;
          },
          node: (e = nn, n) => {
            switch (n.type) {
              case 'SET_NODE_INFO':
                return Object(Ue.a)({}, e, { nodeInfo: n.data });
              case 'SET_BLOCK_HEIGHT':
                return Object(Ue.a)({}, e, { blockHeight: n.data });
              case 'SET_PEERS':
                return Object(Ue.a)({}, e, { peers: n.data });
              case 'SET_GLOBAL_LOADING':
                return Object(Ue.a)({}, e, { isLoading: n.data });
              default:
                return e;
            }
          },
          transaction: (e = tn, n) => {
            switch (n.type) {
              case an.b:
                return Object(Ue.a)({}, e, { transactionHistory: n.data });
              case an.a:
                return Object(Ue.a)({}, e, { fetchTransaction: n.data });
              default:
                return e;
            }
          },
          globalData: (e = on, n) => {
            switch (n.type) {
              case Be.c:
                return Object(Ue.a)({}, e, { isLoading: n.data });
              case Be.b:
                return Object(Ue.a)({}, e, { deviceInfo: n.data });
              case Be.f:
                return Object(Ue.a)({}, e, { isShowIpValidation: n.data });
              case Be.e:
                return Object(Ue.a)({}, e, { showNotLoginNotify: n.data });
              case Be.a:
                return Object(Ue.a)({}, e, { triggerElement: n.data });
              case Be.d:
                return Object(Ue.a)({}, e, { isIpValid: n.data });
              default:
                return e;
            }
          },
          tickers: (e = ln, n) => {
            switch (n.type) {
              case rn.b:
                return ((e, n) => {
                  const a = {},
                    t = {},
                    o = n.data.pairs;
                  return (
                    Array.isArray(o) &&
                      o.forEach((e) => {
                        const n = ''
                          .concat(e.base_asset_symbol, '_')
                          .concat(e.quote_asset_symbol);
                        (a[n] = e.tick_size), (t[n] = e.lot_size);
                      }),
                    Object(Ue.a)({}, e, { tickerSize: a, lotSize: t })
                  );
                })(e, n);
              case rn.a:
                return ((e, n) => {
                  const a = n.data.from,
                    t = n.data.symbolTickers;
                  return Array.isArray(t)
                    ? 'rest' === a
                      ? Object(Ue.a)({}, e, {
                          symbolTickers: t.map((e) => ({
                            symbol: e.symbol,
                            priceChangePercent: e.priceChangePercent / 100,
                            baseAssetVolume: e.volume,
                            quoteVolume: e.quoteVolume,
                            volume: Number(e.quoteVolume),
                            price: e.lastPrice,
                            highPrice: e.highPrice,
                            lowPrice: e.lowPrice,
                          })),
                        })
                      : 'ws' === a
                      ? Object(Ue.a)({}, e, { symbolTickers: t })
                      : e
                    : e;
                })(e, n);
              default:
                return e;
            }
          },
          order: (e = cn, n) => {
            switch (n.type) {
              case sn.b:
                return Object(Ue.a)({}, e, { openOrders: n.data });
              case sn.c:
                return Object(Ue.a)({}, e, { orderHistory: n.data });
              case sn.a:
                return Object(Ue.a)({}, e, { isFetchOpenOrders: n.data });
              default:
                return e;
            }
          },
          fees: (e = dn, n) => {
            switch (n.type) {
              case Oe.a:
                return Object(Ue.a)({}, e, { blockFeeHistory: n.data });
              case Oe.b:
                return Object(Ue.a)(
                  {},
                  e,
                  { fees: n.data },
                  ((e) => {
                    const n = e.find((e) => 'issueMsg' === e.msg_type),
                      a = e.find((e) => 'tinyIssueMsg' === e.msg_type),
                      t = e.find((e) => 'miniIssueMsg' === e.msg_type);
                    return {
                      issueFeeForBep2:
                        (null === n || void 0 === n ? void 0 : n.fee) / un,
                      issueTinyFee:
                        (null === a || void 0 === a ? void 0 : a.fee) / un,
                      issueMiniFee:
                        (null === t || void 0 === t ? void 0 : t.fee) / un,
                    };
                  })(n.data),
                  { transferFee: mn(n.data) }
                );
              default:
                return e;
            }
          },
          trade: (e = pn, n) => {
            switch (n.type) {
              case hn.c:
                return Object(Ue.a)({}, e, {
                  tradeHistory:
                    ((a = n.data || []),
                    (a.trade = a.trade.map((e) =>
                      Object(Ue.a)({ tickType: e.tickType || gn(e.tt) }, e)
                    )),
                    a),
                });
              case hn.a:
                return Object(Ue.a)({}, e, { accountTradeHistory: n.data });
              case hn.b:
                return Object(Ue.a)({}, e, { isFetchTradeHistory: n.data });
              default:
                return e;
            }
            var a;
          },
          orderBooks: (e = null, n) => {
            switch (n.type) {
              case kn.a:
                return ((e, n) => {
                  if (n) {
                    e = e || {};
                    const a = n.symbol,
                      t = n.asks,
                      o = n.bids;
                    e[a] = {
                      asks: t.slice(0, 100),
                      bids: o.slice(0, 100),
                      symbol: a,
                    };
                  }
                  return e;
                })(e, n.data);
              default:
                return e;
            }
          },
          tradePairs: (e = bn, n) => {
            switch (n.type) {
              case Pe.c:
                const o = xn(n.data),
                  r = o.tabs,
                  i = o.pairs;
                return Object(Ue.a)({}, e, {
                  pairs: i,
                  tabs: r,
                  quoteAssets: wn(n.data, 'quote_asset_symbol'),
                  quoteAssetsForBep8:
                    ((a = n.data),
                    (t = 'quote_asset_symbol'),
                    wn(a, t).filter(
                      (e) => e.startsWith('BNB') || e.startsWith('BUSD')
                    )),
                });
              case Pe.b:
                return Object(Ue.a)({}, e, { isFetchingMarkets: n.data });
              case Pe.a:
                return Object(Ue.a)({}, e, { favorites: vn(n.data) });
              default:
                return e;
            }
            var a, t;
          },
          walletConnect: (e = Tn, n) => {
            switch (n.type) {
              case Cn.b:
                return Object(Ue.a)({}, e, { wcUri: n.data });
              case Cn.a:
                return Object(Ue.a)({}, e, { isConnectedWithWallet: n.data });
              default:
                return e;
            }
          },
          googleDrive: (e = On, n) => {
            switch (n.type) {
              case Pn.b:
                return Object(Ue.a)({}, e, { toBeRemovedWallet: n.data });
              case Pn.c:
                return Object(Ue.a)({}, e, { toBeRenamedWallet: n.data });
              case Pn.a:
                return Object(Ue.a)({}, e, { keystores: n.data });
              case Pn.d:
                return Object(Ue.a)({}, e, { selectedWallet: n.data });
              default:
                return e;
            }
          },
          staking: En.c,
        });
      const Sn = [Re.a];
      const Mn = Object(Le.d)(Object(Le.a)(...Sn));
      var An = Object(Le.e)(Bn, {}, Mn),
        Wn = a(203),
        zn = a.n(Wn);
      window.location.host.includes('localhost') &&
        (window.__TREZOR_CONNECT_SRC = 'https://localhost:8088/'),
        zn.a.on(Wn.UI_EVENT, (e) => {
          console.debug('Trezor Event!', e);
        });
      a(947), a(948), a(949);
      var Dn = a(157);
      const _n = o.a.createElement(
        d.a,
        null,
        o.a.createElement(
          s.a,
          { store: An },
          Dn.a ? o.a.createElement(He, null) : o.a.createElement(Ne, null)
        )
      );
      l.a.preloadReady().then(() => {
        Object(r.render)(_n, document.getElementById('root'));
      }),
        (window.__DEV__ = !1),
        (window.__isTokenTool__ = Object({
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
        }).REACT_APP_IS_TOKEN_TOOL),
        (function () {
          if ('serviceWorker' in navigator) {
            if (
              new URL('https://dex-bin.bnbstatic.com/5134e38f', window.location)
                .origin !== window.location.origin
            )
              return;
            window.addEventListener('load', () => {
              const e = ''.concat(
                'https://dex-bin.bnbstatic.com/5134e38f',
                '/sw.js'
              );
              Fe
                ? (!(function (e) {
                    fetch(e)
                      .then((n) => {
                        404 === n.status ||
                        -1 ===
                          n.headers.get('content-type').indexOf('javascript')
                          ? navigator.serviceWorker.ready.then((e) => {
                              e.unregister().then(() => {
                                window.location.reload();
                              });
                            })
                          : je(e);
                      })
                      .catch(() => {
                        console.log(
                          'No internet connection found. App is running in offline mode.'
                        );
                      });
                  })(e),
                  navigator.serviceWorker.ready.then(() => {
                    console.log(
                      'This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ'
                    );
                  }))
                : je(e);
            });
          }
        })(),
        (function () {
          try {
            zn.a.manifest({
              email: 'support@binance.org',
              appUrl: 'https://www.binance.org',
            });
          } catch (e) {
            console.warn('Trezor Connect manifest() failed', e);
          }
        })();
    },
  },
  [[543, 9, 10]],
]);
//# sourceMappingURL=/src/js/main.00db4e21.chunk.js.map
