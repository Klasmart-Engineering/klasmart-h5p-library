!(function (e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var o = (r[n] = { i: n, l: !1, exports: {} });
        return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var r = {};
    (t.m = e),
        (t.c = r),
        (t.d = function (e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n });
        }),
        (t.n = function (e) {
            var r =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return t.d(r, "a", r), r;
        }),
        (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (t.p = ""),
        t((t.s = 81));
})([
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n, a, i, s, u) {
            if ((o(t), !e)) {
                var c;
                if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var l = [r, n, a, i, s, u],
                        p = 0;
                    (c = new Error(
                        t.replace(/%s/g, function () {
                            return l[p++];
                        })
                    )),
                        (c.name = "Invariant Violation");
                }
                throw ((c.framesToPop = 1), c);
            }
        }
        var o = function (e) {};
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            for (var t = arguments.length - 1, r = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, n = 0; n < t; n++) r += "&args[]=" + encodeURIComponent(arguments[n + 1]);
            r += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            var o = new Error(r);
            throw ((o.name = "Invariant Violation"), (o.framesToPop = 1), o);
        }
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        var n = r(7),
            o = n;
        e.exports = o;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e);
        } /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
        var o = Object.getOwnPropertySymbols,
            a = Object.prototype.hasOwnProperty,
            i = Object.prototype.propertyIsEnumerable;
        e.exports = (function () {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
                for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                if (
                    "0123456789" !==
                    Object.getOwnPropertyNames(t)
                        .map(function (e) {
                            return t[e];
                        })
                        .join("")
                )
                    return !1;
                var n = {};
                return (
                    "abcdefghijklmnopqrst".split("").forEach(function (e) {
                        n[e] = e;
                    }),
                    "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                );
            } catch (e) {
                return !1;
            }
        })()
            ? Object.assign
            : function (e, t) {
                  for (var r, s, u = n(e), c = 1; c < arguments.length; c++) {
                      r = Object(arguments[c]);
                      for (var l in r) a.call(r, l) && (u[l] = r[l]);
                      if (o) {
                          s = o(r);
                          for (var p = 0; p < s.length; p++) i.call(r, s[p]) && (u[s[p]] = r[s[p]]);
                      }
                  }
                  return u;
              };
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            return (1 === e.nodeType && e.getAttribute(h) === String(t)) || (8 === e.nodeType && e.nodeValue === " react-text: " + t + " ") || (8 === e.nodeType && e.nodeValue === " react-empty: " + t + " ");
        }
        function o(e) {
            for (var t; (t = e._renderedComponent); ) e = t;
            return e;
        }
        function a(e, t) {
            var r = o(e);
            (r._hostNode = t), (t[g] = r);
        }
        function i(e) {
            var t = e._hostNode;
            t && (delete t[g], (e._hostNode = null));
        }
        function s(e, t) {
            if (!(e._flags & m.hasCachedChildNodes)) {
                var r = e._renderedChildren,
                    i = t.firstChild;
                e: for (var s in r)
                    if (r.hasOwnProperty(s)) {
                        var u = r[s],
                            c = o(u)._domID;
                        if (0 !== c) {
                            for (; null !== i; i = i.nextSibling)
                                if (n(i, c)) {
                                    a(u, i);
                                    continue e;
                                }
                            p("32", c);
                        }
                    }
                e._flags |= m.hasCachedChildNodes;
            }
        }
        function u(e) {
            if (e[g]) return e[g];
            for (var t = []; !e[g]; ) {
                if ((t.push(e), !e.parentNode)) return null;
                e = e.parentNode;
            }
            for (var r, n; e && (n = e[g]); e = t.pop()) (r = n), t.length && s(n, e);
            return r;
        }
        function c(e) {
            var t = u(e);
            return null != t && t._hostNode === e ? t : null;
        }
        function l(e) {
            if ((void 0 === e._hostNode && p("33"), e._hostNode)) return e._hostNode;
            for (var t = []; !e._hostNode; ) t.push(e), e._hostParent || p("34"), (e = e._hostParent);
            for (; t.length; e = t.pop()) s(e, e._hostNode);
            return e._hostNode;
        }
        var p = r(1),
            d = r(14),
            f = r(54),
            h = (r(0), d.ID_ATTRIBUTE_NAME),
            m = f,
            g = "__reactInternalInstance$" + Math.random().toString(36).slice(2),
            v = { getClosestInstanceFromNode: u, getInstanceFromNode: c, getNodeFromInstance: l, precacheChildNodes: s, precacheNode: a, uncacheNode: i };
        e.exports = v;
    },
    function (e, t, r) {
        "use strict";
        var n = !("undefined" == typeof window || !window.document || !window.document.createElement),
            o = { canUseDOM: n, canUseWorkers: "undefined" != typeof Worker, canUseEventListeners: n && !(!window.addEventListener && !window.attachEvent), canUseViewport: n && !!window.screen, isInWorker: !n };
        e.exports = o;
    },
    function (e, t, r) {
        "use strict";
        var n = null;
        e.exports = { debugTool: n };
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return function () {
                return e;
            };
        }
        var o = function () {};
        (o.thatReturns = n),
            (o.thatReturnsFalse = n(!1)),
            (o.thatReturnsTrue = n(!0)),
            (o.thatReturnsNull = n(null)),
            (o.thatReturnsThis = function () {
                return this;
            }),
            (o.thatReturnsArgument = function (e) {
                return e;
            }),
            (e.exports = o);
    },
    function (e, t, r) {
        "use strict";
        function n() {
            (D.ReactReconcileTransaction && C) || l("123");
        }
        function o() {
            this.reinitializeTransaction(), (this.dirtyComponentsLength = null), (this.callbackQueue = d.getPooled()), (this.reconcileTransaction = D.ReactReconcileTransaction.getPooled(!0));
        }
        function a(e, t, r, o, a, i) {
            return n(), C.batchedUpdates(e, t, r, o, a, i);
        }
        function i(e, t) {
            return e._mountOrder - t._mountOrder;
        }
        function s(e) {
            var t = e.dirtyComponentsLength;
            t !== y.length && l("124", t, y.length), y.sort(i), b++;
            for (var r = 0; r < t; r++) {
                var n = y[r],
                    o = n._pendingCallbacks;
                n._pendingCallbacks = null;
                var a;
                if (h.logTopLevelRenders) {
                    var s = n;
                    n._currentElement.type.isReactTopLevelWrapper && (s = n._renderedComponent), (a = "React update: " + s.getName()), console.time(a);
                }
                if ((m.performUpdateIfNecessary(n, e.reconcileTransaction, b), a && console.timeEnd(a), o)) for (var u = 0; u < o.length; u++) e.callbackQueue.enqueue(o[u], n.getPublicInstance());
            }
        }
        function u(e) {
            if ((n(), !C.isBatchingUpdates)) return void C.batchedUpdates(u, e);
            y.push(e), null == e._updateBatchNumber && (e._updateBatchNumber = b + 1);
        }
        function c(e, t) {
            v(C.isBatchingUpdates, "ReactUpdates.asap: Can't enqueue an asap callback in a context whereupdates are not being batched."), w.enqueue(e, t), (E = !0);
        }
        var l = r(1),
            p = r(3),
            d = r(58),
            f = r(11),
            h = r(59),
            m = r(15),
            g = r(22),
            v = r(0),
            y = [],
            b = 0,
            w = d.getPooled(),
            E = !1,
            C = null,
            x = {
                initialize: function () {
                    this.dirtyComponentsLength = y.length;
                },
                close: function () {
                    this.dirtyComponentsLength !== y.length ? (y.splice(0, this.dirtyComponentsLength), _()) : (y.length = 0);
                },
            },
            k = {
                initialize: function () {
                    this.callbackQueue.reset();
                },
                close: function () {
                    this.callbackQueue.notifyAll();
                },
            },
            S = [x, k];
        p(o.prototype, g, {
            getTransactionWrappers: function () {
                return S;
            },
            destructor: function () {
                (this.dirtyComponentsLength = null), d.release(this.callbackQueue), (this.callbackQueue = null), D.ReactReconcileTransaction.release(this.reconcileTransaction), (this.reconcileTransaction = null);
            },
            perform: function (e, t, r) {
                return g.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, r);
            },
        }),
            f.addPoolingTo(o);
        var _ = function () {
                for (; y.length || E; ) {
                    if (y.length) {
                        var e = o.getPooled();
                        e.perform(s, null, e), o.release(e);
                    }
                    if (E) {
                        E = !1;
                        var t = w;
                        (w = d.getPooled()), t.notifyAll(), d.release(t);
                    }
                }
            },
            A = {
                injectReconcileTransaction: function (e) {
                    e || l("126"), (D.ReactReconcileTransaction = e);
                },
                injectBatchingStrategy: function (e) {
                    e || l("127"), "function" != typeof e.batchedUpdates && l("128"), "boolean" != typeof e.isBatchingUpdates && l("129"), (C = e);
                },
            },
            D = { ReactReconcileTransaction: null, batchedUpdates: a, enqueueUpdate: u, flushBatchedUpdates: _, injection: A, asap: c };
        e.exports = D;
    },
    function (e, t, r) {
        "use strict";
        var n = { current: null };
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            (this.dispatchConfig = e), (this._targetInst = t), (this.nativeEvent = r);
            var o = this.constructor.Interface;
            for (var a in o)
                if (o.hasOwnProperty(a)) {
                    var s = o[a];
                    s ? (this[a] = s(r)) : "target" === a ? (this.target = n) : (this[a] = r[a]);
                }
            var u = null != r.defaultPrevented ? r.defaultPrevented : !1 === r.returnValue;
            return (this.isDefaultPrevented = u ? i.thatReturnsTrue : i.thatReturnsFalse), (this.isPropagationStopped = i.thatReturnsFalse), this;
        }
        var o = r(3),
            a = r(11),
            i = r(7),
            s = (r(2), ["dispatchConfig", "_targetInst", "nativeEvent", "isDefaultPrevented", "isPropagationStopped", "_dispatchListeners", "_dispatchInstances"]),
            u = {
                type: null,
                target: null,
                currentTarget: i.thatReturnsNull,
                eventPhase: null,
                bubbles: null,
                cancelable: null,
                timeStamp: function (e) {
                    return e.timeStamp || Date.now();
                },
                defaultPrevented: null,
                isTrusted: null,
            };
        o(n.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), (this.isDefaultPrevented = i.thatReturnsTrue));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), (this.isPropagationStopped = i.thatReturnsTrue));
            },
            persist: function () {
                this.isPersistent = i.thatReturnsTrue;
            },
            isPersistent: i.thatReturnsFalse,
            destructor: function () {
                var e = this.constructor.Interface;
                for (var t in e) this[t] = null;
                for (var r = 0; r < s.length; r++) this[s[r]] = null;
            },
        }),
            (n.Interface = u),
            (n.augmentClass = function (e, t) {
                var r = this,
                    n = function () {};
                n.prototype = r.prototype;
                var i = new n();
                o(i, e.prototype), (e.prototype = i), (e.prototype.constructor = e), (e.Interface = o({}, r.Interface, t)), (e.augmentClass = r.augmentClass), a.addPoolingTo(e, a.fourArgumentPooler);
            }),
            a.addPoolingTo(n, a.fourArgumentPooler),
            (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        var n = r(1),
            o =
                (r(0),
                function (e) {
                    var t = this;
                    if (t.instancePool.length) {
                        var r = t.instancePool.pop();
                        return t.call(r, e), r;
                    }
                    return new t(e);
                }),
            a = function (e, t) {
                var r = this;
                if (r.instancePool.length) {
                    var n = r.instancePool.pop();
                    return r.call(n, e, t), n;
                }
                return new r(e, t);
            },
            i = function (e, t, r) {
                var n = this;
                if (n.instancePool.length) {
                    var o = n.instancePool.pop();
                    return n.call(o, e, t, r), o;
                }
                return new n(e, t, r);
            },
            s = function (e, t, r, n) {
                var o = this;
                if (o.instancePool.length) {
                    var a = o.instancePool.pop();
                    return o.call(a, e, t, r, n), a;
                }
                return new o(e, t, r, n);
            },
            u = function (e) {
                var t = this;
                e instanceof t || n("25"), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e);
            },
            c = o,
            l = function (e, t) {
                var r = e;
                return (r.instancePool = []), (r.getPooled = t || c), r.poolSize || (r.poolSize = 10), (r.release = u), r;
            },
            p = { addPoolingTo: l, oneArgumentPooler: o, twoArgumentPooler: a, threeArgumentPooler: i, fourArgumentPooler: s };
        e.exports = p;
    },
    function (e, t, r) {
        "use strict";
        var n = r(3),
            o = r(49),
            a = r(84),
            i = r(89),
            s = r(13),
            u = r(90),
            c = r(96),
            l = r(97),
            p = r(99),
            d = s.createElement,
            f = s.createFactory,
            h = s.cloneElement,
            m = n,
            g = function (e) {
                return e;
            },
            v = {
                Children: { map: a.map, forEach: a.forEach, count: a.count, toArray: a.toArray, only: p },
                Component: o.Component,
                PureComponent: o.PureComponent,
                createElement: d,
                cloneElement: h,
                isValidElement: s.isValidElement,
                PropTypes: u,
                createClass: l,
                createFactory: f,
                createMixin: g,
                DOM: i,
                version: c,
                __spread: m,
            };
        e.exports = v;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return void 0 !== e.ref;
        }
        function o(e) {
            return void 0 !== e.key;
        }
        var a = r(3),
            i = r(9),
            s = (r(2), r(51), Object.prototype.hasOwnProperty),
            u = r(52),
            c = { key: !0, ref: !0, __self: !0, __source: !0 },
            l = function (e, t, r, n, o, a, i) {
                var s = { $$typeof: u, type: e, key: t, ref: r, props: i, _owner: a };
                return s;
            };
        (l.createElement = function (e, t, r) {
            var a,
                u = {},
                p = null,
                d = null;
            if (null != t) {
                n(t) && (d = t.ref), o(t) && (p = "" + t.key), void 0 === t.__self ? null : t.__self, void 0 === t.__source ? null : t.__source;
                for (a in t) s.call(t, a) && !c.hasOwnProperty(a) && (u[a] = t[a]);
            }
            var f = arguments.length - 2;
            if (1 === f) u.children = r;
            else if (f > 1) {
                for (var h = Array(f), m = 0; m < f; m++) h[m] = arguments[m + 2];
                u.children = h;
            }
            if (e && e.defaultProps) {
                var g = e.defaultProps;
                for (a in g) void 0 === u[a] && (u[a] = g[a]);
            }
            return l(e, p, d, 0, 0, i.current, u);
        }),
            (l.createFactory = function (e) {
                var t = l.createElement.bind(null, e);
                return (t.type = e), t;
            }),
            (l.cloneAndReplaceKey = function (e, t) {
                return l(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
            }),
            (l.cloneElement = function (e, t, r) {
                var u,
                    p = a({}, e.props),
                    d = e.key,
                    f = e.ref,
                    h = (e._self, e._source, e._owner);
                if (null != t) {
                    n(t) && ((f = t.ref), (h = i.current)), o(t) && (d = "" + t.key);
                    var m;
                    e.type && e.type.defaultProps && (m = e.type.defaultProps);
                    for (u in t) s.call(t, u) && !c.hasOwnProperty(u) && (void 0 === t[u] && void 0 !== m ? (p[u] = m[u]) : (p[u] = t[u]));
                }
                var g = arguments.length - 2;
                if (1 === g) p.children = r;
                else if (g > 1) {
                    for (var v = Array(g), y = 0; y < g; y++) v[y] = arguments[y + 2];
                    p.children = v;
                }
                return l(e.type, d, f, 0, 0, h, p);
            }),
            (l.isValidElement = function (e) {
                return "object" == typeof e && null !== e && e.$$typeof === u;
            }),
            (e.exports = l);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            return (e & t) === t;
        }
        var o = r(1),
            a =
                (r(0),
                {
                    MUST_USE_PROPERTY: 1,
                    HAS_BOOLEAN_VALUE: 4,
                    HAS_NUMERIC_VALUE: 8,
                    HAS_POSITIVE_NUMERIC_VALUE: 24,
                    HAS_OVERLOADED_BOOLEAN_VALUE: 32,
                    injectDOMPropertyConfig: function (e) {
                        var t = a,
                            r = e.Properties || {},
                            i = e.DOMAttributeNamespaces || {},
                            u = e.DOMAttributeNames || {},
                            c = e.DOMPropertyNames || {},
                            l = e.DOMMutationMethods || {};
                        e.isCustomAttribute && s._isCustomAttributeFunctions.push(e.isCustomAttribute);
                        for (var p in r) {
                            s.properties.hasOwnProperty(p) && o("48", p);
                            var d = p.toLowerCase(),
                                f = r[p],
                                h = {
                                    attributeName: d,
                                    attributeNamespace: null,
                                    propertyName: p,
                                    mutationMethod: null,
                                    mustUseProperty: n(f, t.MUST_USE_PROPERTY),
                                    hasBooleanValue: n(f, t.HAS_BOOLEAN_VALUE),
                                    hasNumericValue: n(f, t.HAS_NUMERIC_VALUE),
                                    hasPositiveNumericValue: n(f, t.HAS_POSITIVE_NUMERIC_VALUE),
                                    hasOverloadedBooleanValue: n(f, t.HAS_OVERLOADED_BOOLEAN_VALUE),
                                };
                            if ((h.hasBooleanValue + h.hasNumericValue + h.hasOverloadedBooleanValue <= 1 || o("50", p), u.hasOwnProperty(p))) {
                                var m = u[p];
                                h.attributeName = m;
                            }
                            i.hasOwnProperty(p) && (h.attributeNamespace = i[p]), c.hasOwnProperty(p) && (h.propertyName = c[p]), l.hasOwnProperty(p) && (h.mutationMethod = l[p]), (s.properties[p] = h);
                        }
                    },
                }),
            i = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
            s = {
                ID_ATTRIBUTE_NAME: "data-reactid",
                ROOT_ATTRIBUTE_NAME: "data-reactroot",
                ATTRIBUTE_NAME_START_CHAR: i,
                ATTRIBUTE_NAME_CHAR: i + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
                properties: {},
                getPossibleStandardName: null,
                _isCustomAttributeFunctions: [],
                isCustomAttribute: function (e) {
                    for (var t = 0; t < s._isCustomAttributeFunctions.length; t++) {
                        if ((0, s._isCustomAttributeFunctions[t])(e)) return !0;
                    }
                    return !1;
                },
                injection: a,
            };
        e.exports = s;
    },
    function (e, t, r) {
        "use strict";
        function n() {
            o.attachRefs(this, this._currentElement);
        }
        var o = r(109),
            a =
                (r(6),
                r(2),
                {
                    mountComponent: function (e, t, r, o, a, i) {
                        var s = e.mountComponent(t, r, o, a, i);
                        return e._currentElement && null != e._currentElement.ref && t.getReactMountReady().enqueue(n, e), s;
                    },
                    getHostNode: function (e) {
                        return e.getHostNode();
                    },
                    unmountComponent: function (e, t) {
                        o.detachRefs(e, e._currentElement), e.unmountComponent(t);
                    },
                    receiveComponent: function (e, t, r, a) {
                        var i = e._currentElement;
                        if (t !== i || a !== e._context) {
                            var s = o.shouldUpdateRefs(i, t);
                            s && o.detachRefs(e, i), e.receiveComponent(t, r, a), s && e._currentElement && null != e._currentElement.ref && r.getReactMountReady().enqueue(n, e);
                        }
                    },
                    performUpdateIfNecessary: function (e, t, r) {
                        e._updateBatchNumber === r && e.performUpdateIfNecessary(t);
                    },
                });
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            if (h) {
                var t = e.node,
                    r = e.children;
                if (r.length) for (var n = 0; n < r.length; n++) m(t, r[n], null);
                else null != e.html ? p(t, e.html) : null != e.text && f(t, e.text);
            }
        }
        function o(e, t) {
            e.parentNode.replaceChild(t.node, e), n(t);
        }
        function a(e, t) {
            h ? e.children.push(t) : e.node.appendChild(t.node);
        }
        function i(e, t) {
            h ? (e.html = t) : p(e.node, t);
        }
        function s(e, t) {
            h ? (e.text = t) : f(e.node, t);
        }
        function u() {
            return this.node.nodeName;
        }
        function c(e) {
            return { node: e, children: [], html: null, text: null, toString: u };
        }
        var l = r(37),
            p = r(24),
            d = r(38),
            f = r(63),
            h = ("undefined" != typeof document && "number" == typeof document.documentMode) || ("undefined" != typeof navigator && "string" == typeof navigator.userAgent && /\bEdge\/\d/.test(navigator.userAgent)),
            m = d(function (e, t, r) {
                11 === t.node.nodeType || (1 === t.node.nodeType && "object" === t.node.nodeName.toLowerCase() && (null == t.node.namespaceURI || t.node.namespaceURI === l.html))
                    ? (n(t), e.insertBefore(t.node, r))
                    : (e.insertBefore(t.node, r), n(t));
            });
        (c.insertTreeBefore = m), (c.replaceChildWithTree = o), (c.queueChild = a), (c.queueHTML = i), (c.queueText = s), (e.exports = c);
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            for (var t = arguments.length - 1, r = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, n = 0; n < t; n++) r += "&args[]=" + encodeURIComponent(arguments[n + 1]);
            r += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            var o = new Error(r);
            throw ((o.name = "Invariant Violation"), (o.framesToPop = 1), o);
        }
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r) {
            var n = t.dispatchConfig.phasedRegistrationNames[r];
            return v(e, n);
        }
        function o(e, t, r) {
            var o = n(e, r, t);
            o && ((r._dispatchListeners = m(r._dispatchListeners, o)), (r._dispatchInstances = m(r._dispatchInstances, e)));
        }
        function a(e) {
            e && e.dispatchConfig.phasedRegistrationNames && h.traverseTwoPhase(e._targetInst, o, e);
        }
        function i(e) {
            if (e && e.dispatchConfig.phasedRegistrationNames) {
                var t = e._targetInst,
                    r = t ? h.getParentInstance(t) : null;
                h.traverseTwoPhase(r, o, e);
            }
        }
        function s(e, t, r) {
            if (r && r.dispatchConfig.registrationName) {
                var n = r.dispatchConfig.registrationName,
                    o = v(e, n);
                o && ((r._dispatchListeners = m(r._dispatchListeners, o)), (r._dispatchInstances = m(r._dispatchInstances, e)));
            }
        }
        function u(e) {
            e && e.dispatchConfig.registrationName && s(e._targetInst, null, e);
        }
        function c(e) {
            g(e, a);
        }
        function l(e) {
            g(e, i);
        }
        function p(e, t, r, n) {
            h.traverseEnterLeave(r, n, s, e, t);
        }
        function d(e) {
            g(e, u);
        }
        var f = r(19),
            h = r(31),
            m = r(55),
            g = r(56),
            v = (r(2), f.getListener),
            y = { accumulateTwoPhaseDispatches: c, accumulateTwoPhaseDispatchesSkipTarget: l, accumulateDirectDispatches: d, accumulateEnterLeaveDispatches: p };
        e.exports = y;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return "button" === e || "input" === e || "select" === e || "textarea" === e;
        }
        function o(e, t, r) {
            switch (e) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                    return !(!r.disabled || !n(t));
                default:
                    return !1;
            }
        }
        var a = r(1),
            i = r(30),
            s = r(31),
            u = r(32),
            c = r(55),
            l = r(56),
            p = (r(0), {}),
            d = null,
            f = function (e, t) {
                e && (s.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e));
            },
            h = function (e) {
                return f(e, !0);
            },
            m = function (e) {
                return f(e, !1);
            },
            g = function (e) {
                return "." + e._rootNodeID;
            },
            v = {
                injection: { injectEventPluginOrder: i.injectEventPluginOrder, injectEventPluginsByName: i.injectEventPluginsByName },
                putListener: function (e, t, r) {
                    "function" != typeof r && a("94", t, typeof r);
                    var n = g(e);
                    (p[t] || (p[t] = {}))[n] = r;
                    var o = i.registrationNameModules[t];
                    o && o.didPutListener && o.didPutListener(e, t, r);
                },
                getListener: function (e, t) {
                    var r = p[t];
                    if (o(t, e._currentElement.type, e._currentElement.props)) return null;
                    var n = g(e);
                    return r && r[n];
                },
                deleteListener: function (e, t) {
                    var r = i.registrationNameModules[t];
                    r && r.willDeleteListener && r.willDeleteListener(e, t);
                    var n = p[t];
                    if (n) {
                        delete n[g(e)];
                    }
                },
                deleteAllListeners: function (e) {
                    var t = g(e);
                    for (var r in p)
                        if (p.hasOwnProperty(r) && p[r][t]) {
                            var n = i.registrationNameModules[r];
                            n && n.willDeleteListener && n.willDeleteListener(e, r), delete p[r][t];
                        }
                },
                extractEvents: function (e, t, r, n) {
                    for (var o, a = i.plugins, s = 0; s < a.length; s++) {
                        var u = a[s];
                        if (u) {
                            var l = u.extractEvents(e, t, r, n);
                            l && (o = c(o, l));
                        }
                    }
                    return o;
                },
                enqueueEvents: function (e) {
                    e && (d = c(d, e));
                },
                processEventQueue: function (e) {
                    var t = d;
                    (d = null), e ? l(t, h) : l(t, m), d && a("95"), u.rethrowCaughtError();
                },
                __purge: function () {
                    p = {};
                },
                __getListenerBank: function () {
                    return p;
                },
            };
        e.exports = v;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            return o.call(this, e, t, r, n);
        }
        var o = r(10),
            a = r(33),
            i = {
                view: function (e) {
                    if (e.view) return e.view;
                    var t = a(e);
                    if (t.window === t) return t;
                    var r = t.ownerDocument;
                    return r ? r.defaultView || r.parentWindow : window;
                },
                detail: function (e) {
                    return e.detail || 0;
                },
            };
        o.augmentClass(n, i), (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        var n = {
            remove: function (e) {
                e._reactInternalInstance = void 0;
            },
            get: function (e) {
                return e._reactInternalInstance;
            },
            has: function (e) {
                return void 0 !== e._reactInternalInstance;
            },
            set: function (e, t) {
                e._reactInternalInstance = t;
            },
        };
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        var n = r(1),
            o = (r(0), {}),
            a = {
                reinitializeTransaction: function () {
                    (this.transactionWrappers = this.getTransactionWrappers()), this.wrapperInitData ? (this.wrapperInitData.length = 0) : (this.wrapperInitData = []), (this._isInTransaction = !1);
                },
                _isInTransaction: !1,
                getTransactionWrappers: null,
                isInTransaction: function () {
                    return !!this._isInTransaction;
                },
                perform: function (e, t, r, o, a, i, s, u) {
                    this.isInTransaction() && n("27");
                    var c, l;
                    try {
                        (this._isInTransaction = !0), (c = !0), this.initializeAll(0), (l = e.call(t, r, o, a, i, s, u)), (c = !1);
                    } finally {
                        try {
                            if (c)
                                try {
                                    this.closeAll(0);
                                } catch (e) {}
                            else this.closeAll(0);
                        } finally {
                            this._isInTransaction = !1;
                        }
                    }
                    return l;
                },
                initializeAll: function (e) {
                    for (var t = this.transactionWrappers, r = e; r < t.length; r++) {
                        var n = t[r];
                        try {
                            (this.wrapperInitData[r] = o), (this.wrapperInitData[r] = n.initialize ? n.initialize.call(this) : null);
                        } finally {
                            if (this.wrapperInitData[r] === o)
                                try {
                                    this.initializeAll(r + 1);
                                } catch (e) {}
                        }
                    }
                },
                closeAll: function (e) {
                    this.isInTransaction() || n("28");
                    for (var t = this.transactionWrappers, r = e; r < t.length; r++) {
                        var a,
                            i = t[r],
                            s = this.wrapperInitData[r];
                        try {
                            (a = !0), s !== o && i.close && i.close.call(this, s), (a = !1);
                        } finally {
                            if (a)
                                try {
                                    this.closeAll(r + 1);
                                } catch (e) {}
                        }
                    }
                    this.wrapperInitData.length = 0;
                },
            };
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            return o.call(this, e, t, r, n);
        }
        var o = r(20),
            a = r(62),
            i = r(35),
            s = {
                screenX: null,
                screenY: null,
                clientX: null,
                clientY: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                getModifierState: i,
                button: function (e) {
                    var t = e.button;
                    return "which" in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0;
                },
                buttons: null,
                relatedTarget: function (e) {
                    return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
                },
                pageX: function (e) {
                    return "pageX" in e ? e.pageX : e.clientX + a.currentScrollLeft;
                },
                pageY: function (e) {
                    return "pageY" in e ? e.pageY : e.clientY + a.currentScrollTop;
                },
            };
        o.augmentClass(n, s), (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        var n,
            o = r(5),
            a = r(37),
            i = /^[ \r\n\t\f]/,
            s = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
            u = r(38),
            c = u(function (e, t) {
                if (e.namespaceURI !== a.svg || "innerHTML" in e) e.innerHTML = t;
                else {
                    (n = n || document.createElement("div")), (n.innerHTML = "<svg>" + t + "</svg>");
                    for (var r = n.firstChild; r.firstChild; ) e.appendChild(r.firstChild);
                }
            });
        if (o.canUseDOM) {
            var l = document.createElement("div");
            (l.innerHTML = " "),
                "" === l.innerHTML &&
                    (c = function (e, t) {
                        if ((e.parentNode && e.parentNode.replaceChild(e, e), i.test(t) || ("<" === t[0] && s.test(t)))) {
                            e.innerHTML = String.fromCharCode(65279) + t;
                            var r = e.firstChild;
                            1 === r.data.length ? e.removeChild(r) : r.deleteData(0, 1);
                        } else e.innerHTML = t;
                    }),
                (l = null);
        }
        e.exports = c;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = "" + e,
                r = a.exec(t);
            if (!r) return t;
            var n,
                o = "",
                i = 0,
                s = 0;
            for (i = r.index; i < t.length; i++) {
                switch (t.charCodeAt(i)) {
                    case 34:
                        n = "&quot;";
                        break;
                    case 38:
                        n = "&amp;";
                        break;
                    case 39:
                        n = "&#x27;";
                        break;
                    case 60:
                        n = "&lt;";
                        break;
                    case 62:
                        n = "&gt;";
                        break;
                    default:
                        continue;
                }
                s !== i && (o += t.substring(s, i)), (s = i + 1), (o += n);
            }
            return s !== i ? o + t.substring(s, i) : o;
        }
        function o(e) {
            return "boolean" == typeof e || "number" == typeof e ? "" + e : n(e);
        }
        var a = /["'&<>]/;
        e.exports = o;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return Object.prototype.hasOwnProperty.call(e, m) || ((e[m] = f++), (p[e[m]] = {})), p[e[m]];
        }
        var o,
            a = r(3),
            i = r(30),
            s = r(130),
            u = r(62),
            c = r(131),
            l = r(34),
            p = {},
            d = !1,
            f = 0,
            h = {
                topAbort: "abort",
                topAnimationEnd: c("animationend") || "animationend",
                topAnimationIteration: c("animationiteration") || "animationiteration",
                topAnimationStart: c("animationstart") || "animationstart",
                topBlur: "blur",
                topCanPlay: "canplay",
                topCanPlayThrough: "canplaythrough",
                topChange: "change",
                topClick: "click",
                topCompositionEnd: "compositionend",
                topCompositionStart: "compositionstart",
                topCompositionUpdate: "compositionupdate",
                topContextMenu: "contextmenu",
                topCopy: "copy",
                topCut: "cut",
                topDoubleClick: "dblclick",
                topDrag: "drag",
                topDragEnd: "dragend",
                topDragEnter: "dragenter",
                topDragExit: "dragexit",
                topDragLeave: "dragleave",
                topDragOver: "dragover",
                topDragStart: "dragstart",
                topDrop: "drop",
                topDurationChange: "durationchange",
                topEmptied: "emptied",
                topEncrypted: "encrypted",
                topEnded: "ended",
                topError: "error",
                topFocus: "focus",
                topInput: "input",
                topKeyDown: "keydown",
                topKeyPress: "keypress",
                topKeyUp: "keyup",
                topLoadedData: "loadeddata",
                topLoadedMetadata: "loadedmetadata",
                topLoadStart: "loadstart",
                topMouseDown: "mousedown",
                topMouseMove: "mousemove",
                topMouseOut: "mouseout",
                topMouseOver: "mouseover",
                topMouseUp: "mouseup",
                topPaste: "paste",
                topPause: "pause",
                topPlay: "play",
                topPlaying: "playing",
                topProgress: "progress",
                topRateChange: "ratechange",
                topScroll: "scroll",
                topSeeked: "seeked",
                topSeeking: "seeking",
                topSelectionChange: "selectionchange",
                topStalled: "stalled",
                topSuspend: "suspend",
                topTextInput: "textInput",
                topTimeUpdate: "timeupdate",
                topTouchCancel: "touchcancel",
                topTouchEnd: "touchend",
                topTouchMove: "touchmove",
                topTouchStart: "touchstart",
                topTransitionEnd: c("transitionend") || "transitionend",
                topVolumeChange: "volumechange",
                topWaiting: "waiting",
                topWheel: "wheel",
            },
            m = "_reactListenersID" + String(Math.random()).slice(2),
            g = a({}, s, {
                ReactEventListener: null,
                injection: {
                    injectReactEventListener: function (e) {
                        e.setHandleTopLevel(g.handleTopLevel), (g.ReactEventListener = e);
                    },
                },
                setEnabled: function (e) {
                    g.ReactEventListener && g.ReactEventListener.setEnabled(e);
                },
                isEnabled: function () {
                    return !(!g.ReactEventListener || !g.ReactEventListener.isEnabled());
                },
                listenTo: function (e, t) {
                    for (var r = t, o = n(r), a = i.registrationNameDependencies[e], s = 0; s < a.length; s++) {
                        var u = a[s];
                        (o.hasOwnProperty(u) && o[u]) ||
                            ("topWheel" === u
                                ? l("wheel")
                                    ? g.ReactEventListener.trapBubbledEvent("topWheel", "wheel", r)
                                    : l("mousewheel")
                                    ? g.ReactEventListener.trapBubbledEvent("topWheel", "mousewheel", r)
                                    : g.ReactEventListener.trapBubbledEvent("topWheel", "DOMMouseScroll", r)
                                : "topScroll" === u
                                ? l("scroll", !0)
                                    ? g.ReactEventListener.trapCapturedEvent("topScroll", "scroll", r)
                                    : g.ReactEventListener.trapBubbledEvent("topScroll", "scroll", g.ReactEventListener.WINDOW_HANDLE)
                                : "topFocus" === u || "topBlur" === u
                                ? (l("focus", !0)
                                      ? (g.ReactEventListener.trapCapturedEvent("topFocus", "focus", r), g.ReactEventListener.trapCapturedEvent("topBlur", "blur", r))
                                      : l("focusin") && (g.ReactEventListener.trapBubbledEvent("topFocus", "focusin", r), g.ReactEventListener.trapBubbledEvent("topBlur", "focusout", r)),
                                  (o.topBlur = !0),
                                  (o.topFocus = !0))
                                : h.hasOwnProperty(u) && g.ReactEventListener.trapBubbledEvent(u, h[u], r),
                            (o[u] = !0));
                    }
                },
                trapBubbledEvent: function (e, t, r) {
                    return g.ReactEventListener.trapBubbledEvent(e, t, r);
                },
                trapCapturedEvent: function (e, t, r) {
                    return g.ReactEventListener.trapCapturedEvent(e, t, r);
                },
                supportsEventPageXY: function () {
                    if (!document.createEvent) return !1;
                    var e = document.createEvent("MouseEvent");
                    return null != e && "pageX" in e;
                },
                ensureScrollValueMonitoring: function () {
                    if ((void 0 === o && (o = g.supportsEventPageXY()), !o && !d)) {
                        var e = u.refreshScrollValues;
                        g.ReactEventListener.monitorScrollValue(e), (d = !0);
                    }
                },
            });
        e.exports = g;
    },
    function (e, t, r) {
        (function (e, n) {
            var o;
            !(function (a) {
                var i = "object" == typeof t && t,
                    s = ("object" == typeof e && e && e.exports, "object" == typeof n && n);
                var u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                    c = /[\x01-\x7F]/g,
                    l = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
                    p = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,
                    d = {
                        "­": "shy",
                        "‌": "zwnj",
                        "‍": "zwj",
                        "‎": "lrm",
                        "⁣": "ic",
                        "⁢": "it",
                        "⁡": "af",
                        "‏": "rlm",
                        "​": "ZeroWidthSpace",
                        "⁠": "NoBreak",
                        "̑": "DownBreve",
                        "⃛": "tdot",
                        "⃜": "DotDot",
                        "\t": "Tab",
                        "\n": "NewLine",
                        " ": "puncsp",
                        " ": "MediumSpace",
                        " ": "thinsp",
                        " ": "hairsp",
                        " ": "emsp13",
                        " ": "ensp",
                        " ": "emsp14",
                        " ": "emsp",
                        " ": "numsp",
                        " ": "nbsp",
                        "  ": "ThickSpace",
                        "‾": "oline",
                        _: "lowbar",
                        "‐": "dash",
                        "–": "ndash",
                        "—": "mdash",
                        "―": "horbar",
                        ",": "comma",
                        ";": "semi",
                        "⁏": "bsemi",
                        ":": "colon",
                        "⩴": "Colone",
                        "!": "excl",
                        "¡": "iexcl",
                        "?": "quest",
                        "¿": "iquest",
                        ".": "period",
                        "‥": "nldr",
                        "…": "mldr",
                        "·": "middot",
                        "'": "apos",
                        "‘": "lsquo",
                        "’": "rsquo",
                        "‚": "sbquo",
                        "‹": "lsaquo",
                        "›": "rsaquo",
                        '"': "quot",
                        "“": "ldquo",
                        "”": "rdquo",
                        "„": "bdquo",
                        "«": "laquo",
                        "»": "raquo",
                        "(": "lpar",
                        ")": "rpar",
                        "[": "lsqb",
                        "]": "rsqb",
                        "{": "lcub",
                        "}": "rcub",
                        "⌈": "lceil",
                        "⌉": "rceil",
                        "⌊": "lfloor",
                        "⌋": "rfloor",
                        "⦅": "lopar",
                        "⦆": "ropar",
                        "⦋": "lbrke",
                        "⦌": "rbrke",
                        "⦍": "lbrkslu",
                        "⦎": "rbrksld",
                        "⦏": "lbrksld",
                        "⦐": "rbrkslu",
                        "⦑": "langd",
                        "⦒": "rangd",
                        "⦓": "lparlt",
                        "⦔": "rpargt",
                        "⦕": "gtlPar",
                        "⦖": "ltrPar",
                        "⟦": "lobrk",
                        "⟧": "robrk",
                        "⟨": "lang",
                        "⟩": "rang",
                        "⟪": "Lang",
                        "⟫": "Rang",
                        "⟬": "loang",
                        "⟭": "roang",
                        "❲": "lbbrk",
                        "❳": "rbbrk",
                        "‖": "Vert",
                        "§": "sect",
                        "¶": "para",
                        "@": "commat",
                        "*": "ast",
                        "/": "sol",
                        undefined: null,
                        "&": "amp",
                        "#": "num",
                        "%": "percnt",
                        "‰": "permil",
                        "‱": "pertenk",
                        "†": "dagger",
                        "‡": "Dagger",
                        "•": "bull",
                        "⁃": "hybull",
                        "′": "prime",
                        "″": "Prime",
                        "‴": "tprime",
                        "⁗": "qprime",
                        "‵": "bprime",
                        "⁁": "caret",
                        "`": "grave",
                        "´": "acute",
                        "˜": "tilde",
                        "^": "Hat",
                        "¯": "macr",
                        "˘": "breve",
                        "˙": "dot",
                        "¨": "die",
                        "˚": "ring",
                        "˝": "dblac",
                        "¸": "cedil",
                        "˛": "ogon",
                        ˆ: "circ",
                        ˇ: "caron",
                        "°": "deg",
                        "©": "copy",
                        "®": "reg",
                        "℗": "copysr",
                        "℘": "wp",
                        "℞": "rx",
                        "℧": "mho",
                        "℩": "iiota",
                        "←": "larr",
                        "↚": "nlarr",
                        "→": "rarr",
                        "↛": "nrarr",
                        "↑": "uarr",
                        "↓": "darr",
                        "↔": "harr",
                        "↮": "nharr",
                        "↕": "varr",
                        "↖": "nwarr",
                        "↗": "nearr",
                        "↘": "searr",
                        "↙": "swarr",
                        "↝": "rarrw",
                        "↝̸": "nrarrw",
                        "↞": "Larr",
                        "↟": "Uarr",
                        "↠": "Rarr",
                        "↡": "Darr",
                        "↢": "larrtl",
                        "↣": "rarrtl",
                        "↤": "mapstoleft",
                        "↥": "mapstoup",
                        "↦": "map",
                        "↧": "mapstodown",
                        "↩": "larrhk",
                        "↪": "rarrhk",
                        "↫": "larrlp",
                        "↬": "rarrlp",
                        "↭": "harrw",
                        "↰": "lsh",
                        "↱": "rsh",
                        "↲": "ldsh",
                        "↳": "rdsh",
                        "↵": "crarr",
                        "↶": "cularr",
                        "↷": "curarr",
                        "↺": "olarr",
                        "↻": "orarr",
                        "↼": "lharu",
                        "↽": "lhard",
                        "↾": "uharr",
                        "↿": "uharl",
                        "⇀": "rharu",
                        "⇁": "rhard",
                        "⇂": "dharr",
                        "⇃": "dharl",
                        "⇄": "rlarr",
                        "⇅": "udarr",
                        "⇆": "lrarr",
                        "⇇": "llarr",
                        "⇈": "uuarr",
                        "⇉": "rrarr",
                        "⇊": "ddarr",
                        "⇋": "lrhar",
                        "⇌": "rlhar",
                        "⇐": "lArr",
                        "⇍": "nlArr",
                        "⇑": "uArr",
                        "⇒": "rArr",
                        "⇏": "nrArr",
                        "⇓": "dArr",
                        "⇔": "iff",
                        "⇎": "nhArr",
                        "⇕": "vArr",
                        "⇖": "nwArr",
                        "⇗": "neArr",
                        "⇘": "seArr",
                        "⇙": "swArr",
                        "⇚": "lAarr",
                        "⇛": "rAarr",
                        "⇝": "zigrarr",
                        "⇤": "larrb",
                        "⇥": "rarrb",
                        "⇵": "duarr",
                        "⇽": "loarr",
                        "⇾": "roarr",
                        "⇿": "hoarr",
                        "∀": "forall",
                        "∁": "comp",
                        "∂": "part",
                        "∂̸": "npart",
                        "∃": "exist",
                        "∄": "nexist",
                        "∅": "empty",
                        "∇": "Del",
                        "∈": "in",
                        "∉": "notin",
                        "∋": "ni",
                        "∌": "notni",
                        "϶": "bepsi",
                        "∏": "prod",
                        "∐": "coprod",
                        "∑": "sum",
                        "+": "plus",
                        "±": "pm",
                        "÷": "div",
                        "×": "times",
                        "<": "lt",
                        "≮": "nlt",
                        "<⃒": "nvlt",
                        "=": "equals",
                        "≠": "ne",
                        "=⃥": "bne",
                        "⩵": "Equal",
                        ">": "gt",
                        "≯": "ngt",
                        ">⃒": "nvgt",
                        "¬": "not",
                        "|": "vert",
                        "¦": "brvbar",
                        "−": "minus",
                        "∓": "mp",
                        "∔": "plusdo",
                        "⁄": "frasl",
                        "∖": "setmn",
                        "∗": "lowast",
                        "∘": "compfn",
                        "√": "Sqrt",
                        "∝": "prop",
                        "∞": "infin",
                        "∟": "angrt",
                        "∠": "ang",
                        "∠⃒": "nang",
                        "∡": "angmsd",
                        "∢": "angsph",
                        "∣": "mid",
                        "∤": "nmid",
                        "∥": "par",
                        "∦": "npar",
                        "∧": "and",
                        "∨": "or",
                        "∩": "cap",
                        "∩︀": "caps",
                        "∪": "cup",
                        "∪︀": "cups",
                        "∫": "int",
                        "∬": "Int",
                        "∭": "tint",
                        "⨌": "qint",
                        "∮": "oint",
                        "∯": "Conint",
                        "∰": "Cconint",
                        "∱": "cwint",
                        "∲": "cwconint",
                        "∳": "awconint",
                        "∴": "there4",
                        "∵": "becaus",
                        "∶": "ratio",
                        "∷": "Colon",
                        "∸": "minusd",
                        "∺": "mDDot",
                        "∻": "homtht",
                        "∼": "sim",
                        "≁": "nsim",
                        "∼⃒": "nvsim",
                        "∽": "bsim",
                        "∽̱": "race",
                        "∾": "ac",
                        "∾̳": "acE",
                        "∿": "acd",
                        "≀": "wr",
                        "≂": "esim",
                        "≂̸": "nesim",
                        "≃": "sime",
                        "≄": "nsime",
                        "≅": "cong",
                        "≇": "ncong",
                        "≆": "simne",
                        "≈": "ap",
                        "≉": "nap",
                        "≊": "ape",
                        "≋": "apid",
                        "≋̸": "napid",
                        "≌": "bcong",
                        "≍": "CupCap",
                        "≭": "NotCupCap",
                        "≍⃒": "nvap",
                        "≎": "bump",
                        "≎̸": "nbump",
                        "≏": "bumpe",
                        "≏̸": "nbumpe",
                        "≐": "doteq",
                        "≐̸": "nedot",
                        "≑": "eDot",
                        "≒": "efDot",
                        "≓": "erDot",
                        "≔": "colone",
                        "≕": "ecolon",
                        "≖": "ecir",
                        "≗": "cire",
                        "≙": "wedgeq",
                        "≚": "veeeq",
                        "≜": "trie",
                        "≟": "equest",
                        "≡": "equiv",
                        "≢": "nequiv",
                        "≡⃥": "bnequiv",
                        "≤": "le",
                        "≰": "nle",
                        "≤⃒": "nvle",
                        "≥": "ge",
                        "≱": "nge",
                        "≥⃒": "nvge",
                        "≦": "lE",
                        "≦̸": "nlE",
                        "≧": "gE",
                        "≧̸": "ngE",
                        "≨︀": "lvnE",
                        "≨": "lnE",
                        "≩": "gnE",
                        "≩︀": "gvnE",
                        "≪": "ll",
                        "≪̸": "nLtv",
                        "≪⃒": "nLt",
                        "≫": "gg",
                        "≫̸": "nGtv",
                        "≫⃒": "nGt",
                        "≬": "twixt",
                        "≲": "lsim",
                        "≴": "nlsim",
                        "≳": "gsim",
                        "≵": "ngsim",
                        "≶": "lg",
                        "≸": "ntlg",
                        "≷": "gl",
                        "≹": "ntgl",
                        "≺": "pr",
                        "⊀": "npr",
                        "≻": "sc",
                        "⊁": "nsc",
                        "≼": "prcue",
                        "⋠": "nprcue",
                        "≽": "sccue",
                        "⋡": "nsccue",
                        "≾": "prsim",
                        "≿": "scsim",
                        "≿̸": "NotSucceedsTilde",
                        "⊂": "sub",
                        "⊄": "nsub",
                        "⊂⃒": "vnsub",
                        "⊃": "sup",
                        "⊅": "nsup",
                        "⊃⃒": "vnsup",
                        "⊆": "sube",
                        "⊈": "nsube",
                        "⊇": "supe",
                        "⊉": "nsupe",
                        "⊊︀": "vsubne",
                        "⊊": "subne",
                        "⊋︀": "vsupne",
                        "⊋": "supne",
                        "⊍": "cupdot",
                        "⊎": "uplus",
                        "⊏": "sqsub",
                        "⊏̸": "NotSquareSubset",
                        "⊐": "sqsup",
                        "⊐̸": "NotSquareSuperset",
                        "⊑": "sqsube",
                        "⋢": "nsqsube",
                        "⊒": "sqsupe",
                        "⋣": "nsqsupe",
                        "⊓": "sqcap",
                        "⊓︀": "sqcaps",
                        "⊔": "sqcup",
                        "⊔︀": "sqcups",
                        "⊕": "oplus",
                        "⊖": "ominus",
                        "⊗": "otimes",
                        "⊘": "osol",
                        "⊙": "odot",
                        "⊚": "ocir",
                        "⊛": "oast",
                        "⊝": "odash",
                        "⊞": "plusb",
                        "⊟": "minusb",
                        "⊠": "timesb",
                        "⊡": "sdotb",
                        "⊢": "vdash",
                        "⊬": "nvdash",
                        "⊣": "dashv",
                        "⊤": "top",
                        "⊥": "bot",
                        "⊧": "models",
                        "⊨": "vDash",
                        "⊭": "nvDash",
                        "⊩": "Vdash",
                        "⊮": "nVdash",
                        "⊪": "Vvdash",
                        "⊫": "VDash",
                        "⊯": "nVDash",
                        "⊰": "prurel",
                        "⊲": "vltri",
                        "⋪": "nltri",
                        "⊳": "vrtri",
                        "⋫": "nrtri",
                        "⊴": "ltrie",
                        "⋬": "nltrie",
                        "⊴⃒": "nvltrie",
                        "⊵": "rtrie",
                        "⋭": "nrtrie",
                        "⊵⃒": "nvrtrie",
                        "⊶": "origof",
                        "⊷": "imof",
                        "⊸": "mumap",
                        "⊹": "hercon",
                        "⊺": "intcal",
                        "⊻": "veebar",
                        "⊽": "barvee",
                        "⊾": "angrtvb",
                        "⊿": "lrtri",
                        "⋀": "Wedge",
                        "⋁": "Vee",
                        "⋂": "xcap",
                        "⋃": "xcup",
                        "⋄": "diam",
                        "⋅": "sdot",
                        "⋆": "Star",
                        "⋇": "divonx",
                        "⋈": "bowtie",
                        "⋉": "ltimes",
                        "⋊": "rtimes",
                        "⋋": "lthree",
                        "⋌": "rthree",
                        "⋍": "bsime",
                        "⋎": "cuvee",
                        "⋏": "cuwed",
                        "⋐": "Sub",
                        "⋑": "Sup",
                        "⋒": "Cap",
                        "⋓": "Cup",
                        "⋔": "fork",
                        "⋕": "epar",
                        "⋖": "ltdot",
                        "⋗": "gtdot",
                        "⋘": "Ll",
                        "⋘̸": "nLl",
                        "⋙": "Gg",
                        "⋙̸": "nGg",
                        "⋚︀": "lesg",
                        "⋚": "leg",
                        "⋛": "gel",
                        "⋛︀": "gesl",
                        "⋞": "cuepr",
                        "⋟": "cuesc",
                        "⋦": "lnsim",
                        "⋧": "gnsim",
                        "⋨": "prnsim",
                        "⋩": "scnsim",
                        "⋮": "vellip",
                        "⋯": "ctdot",
                        "⋰": "utdot",
                        "⋱": "dtdot",
                        "⋲": "disin",
                        "⋳": "isinsv",
                        "⋴": "isins",
                        "⋵": "isindot",
                        "⋵̸": "notindot",
                        "⋶": "notinvc",
                        "⋷": "notinvb",
                        "⋹": "isinE",
                        "⋹̸": "notinE",
                        "⋺": "nisd",
                        "⋻": "xnis",
                        "⋼": "nis",
                        "⋽": "notnivc",
                        "⋾": "notnivb",
                        "⌅": "barwed",
                        "⌆": "Barwed",
                        "⌌": "drcrop",
                        "⌍": "dlcrop",
                        "⌎": "urcrop",
                        "⌏": "ulcrop",
                        "⌐": "bnot",
                        "⌒": "profline",
                        "⌓": "profsurf",
                        "⌕": "telrec",
                        "⌖": "target",
                        "⌜": "ulcorn",
                        "⌝": "urcorn",
                        "⌞": "dlcorn",
                        "⌟": "drcorn",
                        "⌢": "frown",
                        "⌣": "smile",
                        "⌭": "cylcty",
                        "⌮": "profalar",
                        "⌶": "topbot",
                        "⌽": "ovbar",
                        "⌿": "solbar",
                        "⍼": "angzarr",
                        "⎰": "lmoust",
                        "⎱": "rmoust",
                        "⎴": "tbrk",
                        "⎵": "bbrk",
                        "⎶": "bbrktbrk",
                        "⏜": "OverParenthesis",
                        "⏝": "UnderParenthesis",
                        "⏞": "OverBrace",
                        "⏟": "UnderBrace",
                        "⏢": "trpezium",
                        "⏧": "elinters",
                        "␣": "blank",
                        "─": "boxh",
                        "│": "boxv",
                        "┌": "boxdr",
                        "┐": "boxdl",
                        "└": "boxur",
                        "┘": "boxul",
                        "├": "boxvr",
                        "┤": "boxvl",
                        "┬": "boxhd",
                        "┴": "boxhu",
                        "┼": "boxvh",
                        "═": "boxH",
                        "║": "boxV",
                        "╒": "boxdR",
                        "╓": "boxDr",
                        "╔": "boxDR",
                        "╕": "boxdL",
                        "╖": "boxDl",
                        "╗": "boxDL",
                        "╘": "boxuR",
                        "╙": "boxUr",
                        "╚": "boxUR",
                        "╛": "boxuL",
                        "╜": "boxUl",
                        "╝": "boxUL",
                        "╞": "boxvR",
                        "╟": "boxVr",
                        "╠": "boxVR",
                        "╡": "boxvL",
                        "╢": "boxVl",
                        "╣": "boxVL",
                        "╤": "boxHd",
                        "╥": "boxhD",
                        "╦": "boxHD",
                        "╧": "boxHu",
                        "╨": "boxhU",
                        "╩": "boxHU",
                        "╪": "boxvH",
                        "╫": "boxVh",
                        "╬": "boxVH",
                        "▀": "uhblk",
                        "▄": "lhblk",
                        "█": "block",
                        "░": "blk14",
                        "▒": "blk12",
                        "▓": "blk34",
                        "□": "squ",
                        "▪": "squf",
                        "▫": "EmptyVerySmallSquare",
                        "▭": "rect",
                        "▮": "marker",
                        "▱": "fltns",
                        "△": "xutri",
                        "▴": "utrif",
                        "▵": "utri",
                        "▸": "rtrif",
                        "▹": "rtri",
                        "▽": "xdtri",
                        "▾": "dtrif",
                        "▿": "dtri",
                        "◂": "ltrif",
                        "◃": "ltri",
                        "◊": "loz",
                        "○": "cir",
                        "◬": "tridot",
                        "◯": "xcirc",
                        "◸": "ultri",
                        "◹": "urtri",
                        "◺": "lltri",
                        "◻": "EmptySmallSquare",
                        "◼": "FilledSmallSquare",
                        "★": "starf",
                        "☆": "star",
                        "☎": "phone",
                        "♀": "female",
                        "♂": "male",
                        "♠": "spades",
                        "♣": "clubs",
                        "♥": "hearts",
                        "♦": "diams",
                        "♪": "sung",
                        "✓": "check",
                        "✗": "cross",
                        "✠": "malt",
                        "✶": "sext",
                        "❘": "VerticalSeparator",
                        "⟈": "bsolhsub",
                        "⟉": "suphsol",
                        "⟵": "xlarr",
                        "⟶": "xrarr",
                        "⟷": "xharr",
                        "⟸": "xlArr",
                        "⟹": "xrArr",
                        "⟺": "xhArr",
                        "⟼": "xmap",
                        "⟿": "dzigrarr",
                        "⤂": "nvlArr",
                        "⤃": "nvrArr",
                        "⤄": "nvHarr",
                        "⤅": "Map",
                        "⤌": "lbarr",
                        "⤍": "rbarr",
                        "⤎": "lBarr",
                        "⤏": "rBarr",
                        "⤐": "RBarr",
                        "⤑": "DDotrahd",
                        "⤒": "UpArrowBar",
                        "⤓": "DownArrowBar",
                        "⤖": "Rarrtl",
                        "⤙": "latail",
                        "⤚": "ratail",
                        "⤛": "lAtail",
                        "⤜": "rAtail",
                        "⤝": "larrfs",
                        "⤞": "rarrfs",
                        "⤟": "larrbfs",
                        "⤠": "rarrbfs",
                        "⤣": "nwarhk",
                        "⤤": "nearhk",
                        "⤥": "searhk",
                        "⤦": "swarhk",
                        "⤧": "nwnear",
                        "⤨": "toea",
                        "⤩": "tosa",
                        "⤪": "swnwar",
                        "⤳": "rarrc",
                        "⤳̸": "nrarrc",
                        "⤵": "cudarrr",
                        "⤶": "ldca",
                        "⤷": "rdca",
                        "⤸": "cudarrl",
                        "⤹": "larrpl",
                        "⤼": "curarrm",
                        "⤽": "cularrp",
                        "⥅": "rarrpl",
                        "⥈": "harrcir",
                        "⥉": "Uarrocir",
                        "⥊": "lurdshar",
                        "⥋": "ldrushar",
                        "⥎": "LeftRightVector",
                        "⥏": "RightUpDownVector",
                        "⥐": "DownLeftRightVector",
                        "⥑": "LeftUpDownVector",
                        "⥒": "LeftVectorBar",
                        "⥓": "RightVectorBar",
                        "⥔": "RightUpVectorBar",
                        "⥕": "RightDownVectorBar",
                        "⥖": "DownLeftVectorBar",
                        "⥗": "DownRightVectorBar",
                        "⥘": "LeftUpVectorBar",
                        "⥙": "LeftDownVectorBar",
                        "⥚": "LeftTeeVector",
                        "⥛": "RightTeeVector",
                        "⥜": "RightUpTeeVector",
                        "⥝": "RightDownTeeVector",
                        "⥞": "DownLeftTeeVector",
                        "⥟": "DownRightTeeVector",
                        "⥠": "LeftUpTeeVector",
                        "⥡": "LeftDownTeeVector",
                        "⥢": "lHar",
                        "⥣": "uHar",
                        "⥤": "rHar",
                        "⥥": "dHar",
                        "⥦": "luruhar",
                        "⥧": "ldrdhar",
                        "⥨": "ruluhar",
                        "⥩": "rdldhar",
                        "⥪": "lharul",
                        "⥫": "llhard",
                        "⥬": "rharul",
                        "⥭": "lrhard",
                        "⥮": "udhar",
                        "⥯": "duhar",
                        "⥰": "RoundImplies",
                        "⥱": "erarr",
                        "⥲": "simrarr",
                        "⥳": "larrsim",
                        "⥴": "rarrsim",
                        "⥵": "rarrap",
                        "⥶": "ltlarr",
                        "⥸": "gtrarr",
                        "⥹": "subrarr",
                        "⥻": "suplarr",
                        "⥼": "lfisht",
                        "⥽": "rfisht",
                        "⥾": "ufisht",
                        "⥿": "dfisht",
                        "⦚": "vzigzag",
                        "⦜": "vangrt",
                        "⦝": "angrtvbd",
                        "⦤": "ange",
                        "⦥": "range",
                        "⦦": "dwangle",
                        "⦧": "uwangle",
                        "⦨": "angmsdaa",
                        "⦩": "angmsdab",
                        "⦪": "angmsdac",
                        "⦫": "angmsdad",
                        "⦬": "angmsdae",
                        "⦭": "angmsdaf",
                        "⦮": "angmsdag",
                        "⦯": "angmsdah",
                        "⦰": "bemptyv",
                        "⦱": "demptyv",
                        "⦲": "cemptyv",
                        "⦳": "raemptyv",
                        "⦴": "laemptyv",
                        "⦵": "ohbar",
                        "⦶": "omid",
                        "⦷": "opar",
                        "⦹": "operp",
                        "⦻": "olcross",
                        "⦼": "odsold",
                        "⦾": "olcir",
                        "⦿": "ofcir",
                        "⧀": "olt",
                        "⧁": "ogt",
                        "⧂": "cirscir",
                        "⧃": "cirE",
                        "⧄": "solb",
                        "⧅": "bsolb",
                        "⧉": "boxbox",
                        "⧍": "trisb",
                        "⧎": "rtriltri",
                        "⧏": "LeftTriangleBar",
                        "⧏̸": "NotLeftTriangleBar",
                        "⧐": "RightTriangleBar",
                        "⧐̸": "NotRightTriangleBar",
                        "⧜": "iinfin",
                        "⧝": "infintie",
                        "⧞": "nvinfin",
                        "⧣": "eparsl",
                        "⧤": "smeparsl",
                        "⧥": "eqvparsl",
                        "⧫": "lozf",
                        "⧴": "RuleDelayed",
                        "⧶": "dsol",
                        "⨀": "xodot",
                        "⨁": "xoplus",
                        "⨂": "xotime",
                        "⨄": "xuplus",
                        "⨆": "xsqcup",
                        "⨍": "fpartint",
                        "⨐": "cirfnint",
                        "⨑": "awint",
                        "⨒": "rppolint",
                        "⨓": "scpolint",
                        "⨔": "npolint",
                        "⨕": "pointint",
                        "⨖": "quatint",
                        "⨗": "intlarhk",
                        "⨢": "pluscir",
                        "⨣": "plusacir",
                        "⨤": "simplus",
                        "⨥": "plusdu",
                        "⨦": "plussim",
                        "⨧": "plustwo",
                        "⨩": "mcomma",
                        "⨪": "minusdu",
                        "⨭": "loplus",
                        "⨮": "roplus",
                        "⨯": "Cross",
                        "⨰": "timesd",
                        "⨱": "timesbar",
                        "⨳": "smashp",
                        "⨴": "lotimes",
                        "⨵": "rotimes",
                        "⨶": "otimesas",
                        "⨷": "Otimes",
                        "⨸": "odiv",
                        "⨹": "triplus",
                        "⨺": "triminus",
                        "⨻": "tritime",
                        "⨼": "iprod",
                        "⨿": "amalg",
                        "⩀": "capdot",
                        "⩂": "ncup",
                        "⩃": "ncap",
                        "⩄": "capand",
                        "⩅": "cupor",
                        "⩆": "cupcap",
                        "⩇": "capcup",
                        "⩈": "cupbrcap",
                        "⩉": "capbrcup",
                        "⩊": "cupcup",
                        "⩋": "capcap",
                        "⩌": "ccups",
                        "⩍": "ccaps",
                        "⩐": "ccupssm",
                        "⩓": "And",
                        "⩔": "Or",
                        "⩕": "andand",
                        "⩖": "oror",
                        "⩗": "orslope",
                        "⩘": "andslope",
                        "⩚": "andv",
                        "⩛": "orv",
                        "⩜": "andd",
                        "⩝": "ord",
                        "⩟": "wedbar",
                        "⩦": "sdote",
                        "⩪": "simdot",
                        "⩭": "congdot",
                        "⩭̸": "ncongdot",
                        "⩮": "easter",
                        "⩯": "apacir",
                        "⩰": "apE",
                        "⩰̸": "napE",
                        "⩱": "eplus",
                        "⩲": "pluse",
                        "⩳": "Esim",
                        "⩷": "eDDot",
                        "⩸": "equivDD",
                        "⩹": "ltcir",
                        "⩺": "gtcir",
                        "⩻": "ltquest",
                        "⩼": "gtquest",
                        "⩽": "les",
                        "⩽̸": "nles",
                        "⩾": "ges",
                        "⩾̸": "nges",
                        "⩿": "lesdot",
                        "⪀": "gesdot",
                        "⪁": "lesdoto",
                        "⪂": "gesdoto",
                        "⪃": "lesdotor",
                        "⪄": "gesdotol",
                        "⪅": "lap",
                        "⪆": "gap",
                        "⪇": "lne",
                        "⪈": "gne",
                        "⪉": "lnap",
                        "⪊": "gnap",
                        "⪋": "lEg",
                        "⪌": "gEl",
                        "⪍": "lsime",
                        "⪎": "gsime",
                        "⪏": "lsimg",
                        "⪐": "gsiml",
                        "⪑": "lgE",
                        "⪒": "glE",
                        "⪓": "lesges",
                        "⪔": "gesles",
                        "⪕": "els",
                        "⪖": "egs",
                        "⪗": "elsdot",
                        "⪘": "egsdot",
                        "⪙": "el",
                        "⪚": "eg",
                        "⪝": "siml",
                        "⪞": "simg",
                        "⪟": "simlE",
                        "⪠": "simgE",
                        "⪡": "LessLess",
                        "⪡̸": "NotNestedLessLess",
                        "⪢": "GreaterGreater",
                        "⪢̸": "NotNestedGreaterGreater",
                        "⪤": "glj",
                        "⪥": "gla",
                        "⪦": "ltcc",
                        "⪧": "gtcc",
                        "⪨": "lescc",
                        "⪩": "gescc",
                        "⪪": "smt",
                        "⪫": "lat",
                        "⪬": "smte",
                        "⪬︀": "smtes",
                        "⪭": "late",
                        "⪭︀": "lates",
                        "⪮": "bumpE",
                        "⪯": "pre",
                        "⪯̸": "npre",
                        "⪰": "sce",
                        "⪰̸": "nsce",
                        "⪳": "prE",
                        "⪴": "scE",
                        "⪵": "prnE",
                        "⪶": "scnE",
                        "⪷": "prap",
                        "⪸": "scap",
                        "⪹": "prnap",
                        "⪺": "scnap",
                        "⪻": "Pr",
                        "⪼": "Sc",
                        "⪽": "subdot",
                        "⪾": "supdot",
                        "⪿": "subplus",
                        "⫀": "supplus",
                        "⫁": "submult",
                        "⫂": "supmult",
                        "⫃": "subedot",
                        "⫄": "supedot",
                        "⫅": "subE",
                        "⫅̸": "nsubE",
                        "⫆": "supE",
                        "⫆̸": "nsupE",
                        "⫇": "subsim",
                        "⫈": "supsim",
                        "⫋︀": "vsubnE",
                        "⫋": "subnE",
                        "⫌︀": "vsupnE",
                        "⫌": "supnE",
                        "⫏": "csub",
                        "⫐": "csup",
                        "⫑": "csube",
                        "⫒": "csupe",
                        "⫓": "subsup",
                        "⫔": "supsub",
                        "⫕": "subsub",
                        "⫖": "supsup",
                        "⫗": "suphsub",
                        "⫘": "supdsub",
                        "⫙": "forkv",
                        "⫚": "topfork",
                        "⫛": "mlcp",
                        "⫤": "Dashv",
                        "⫦": "Vdashl",
                        "⫧": "Barv",
                        "⫨": "vBar",
                        "⫩": "vBarv",
                        "⫫": "Vbar",
                        "⫬": "Not",
                        "⫭": "bNot",
                        "⫮": "rnmid",
                        "⫯": "cirmid",
                        "⫰": "midcir",
                        "⫱": "topcir",
                        "⫲": "nhpar",
                        "⫳": "parsim",
                        "⫽": "parsl",
                        "⫽⃥": "nparsl",
                        "♭": "flat",
                        "♮": "natur",
                        "♯": "sharp",
                        "¤": "curren",
                        "¢": "cent",
                        $: "dollar",
                        "£": "pound",
                        "¥": "yen",
                        "€": "euro",
                        "¹": "sup1",
                        "½": "half",
                        "⅓": "frac13",
                        "¼": "frac14",
                        "⅕": "frac15",
                        "⅙": "frac16",
                        "⅛": "frac18",
                        "²": "sup2",
                        "⅔": "frac23",
                        "⅖": "frac25",
                        "³": "sup3",
                        "¾": "frac34",
                        "⅗": "frac35",
                        "⅜": "frac38",
                        "⅘": "frac45",
                        "⅚": "frac56",
                        "⅝": "frac58",
                        "⅞": "frac78",
                        "𝒶": "ascr",
                        "𝕒": "aopf",
                        "𝔞": "afr",
                        "𝔸": "Aopf",
                        "𝔄": "Afr",
                        "𝒜": "Ascr",
                        ª: "ordf",
                        á: "aacute",
                        Á: "Aacute",
                        à: "agrave",
                        À: "Agrave",
                        ă: "abreve",
                        Ă: "Abreve",
                        â: "acirc",
                        Â: "Acirc",
                        å: "aring",
                        Å: "angst",
                        ä: "auml",
                        Ä: "Auml",
                        ã: "atilde",
                        Ã: "Atilde",
                        ą: "aogon",
                        Ą: "Aogon",
                        ā: "amacr",
                        Ā: "Amacr",
                        æ: "aelig",
                        Æ: "AElig",
                        "𝒷": "bscr",
                        "𝕓": "bopf",
                        "𝔟": "bfr",
                        "𝔹": "Bopf",
                        ℬ: "Bscr",
                        "𝔅": "Bfr",
                        "𝔠": "cfr",
                        "𝒸": "cscr",
                        "𝕔": "copf",
                        ℭ: "Cfr",
                        "𝒞": "Cscr",
                        ℂ: "Copf",
                        ć: "cacute",
                        Ć: "Cacute",
                        ĉ: "ccirc",
                        Ĉ: "Ccirc",
                        č: "ccaron",
                        Č: "Ccaron",
                        ċ: "cdot",
                        Ċ: "Cdot",
                        ç: "ccedil",
                        Ç: "Ccedil",
                        "℅": "incare",
                        "𝔡": "dfr",
                        ⅆ: "dd",
                        "𝕕": "dopf",
                        "𝒹": "dscr",
                        "𝒟": "Dscr",
                        "𝔇": "Dfr",
                        ⅅ: "DD",
                        "𝔻": "Dopf",
                        ď: "dcaron",
                        Ď: "Dcaron",
                        đ: "dstrok",
                        Đ: "Dstrok",
                        ð: "eth",
                        Ð: "ETH",
                        ⅇ: "ee",
                        ℯ: "escr",
                        "𝔢": "efr",
                        "𝕖": "eopf",
                        ℰ: "Escr",
                        "𝔈": "Efr",
                        "𝔼": "Eopf",
                        é: "eacute",
                        É: "Eacute",
                        è: "egrave",
                        È: "Egrave",
                        ê: "ecirc",
                        Ê: "Ecirc",
                        ě: "ecaron",
                        Ě: "Ecaron",
                        ë: "euml",
                        Ë: "Euml",
                        ė: "edot",
                        Ė: "Edot",
                        ę: "eogon",
                        Ę: "Eogon",
                        ē: "emacr",
                        Ē: "Emacr",
                        "𝔣": "ffr",
                        "𝕗": "fopf",
                        "𝒻": "fscr",
                        "𝔉": "Ffr",
                        "𝔽": "Fopf",
                        ℱ: "Fscr",
                        ﬀ: "fflig",
                        ﬃ: "ffilig",
                        ﬄ: "ffllig",
                        ﬁ: "filig",
                        fj: "fjlig",
                        ﬂ: "fllig",
                        ƒ: "fnof",
                        ℊ: "gscr",
                        "𝕘": "gopf",
                        "𝔤": "gfr",
                        "𝒢": "Gscr",
                        "𝔾": "Gopf",
                        "𝔊": "Gfr",
                        ǵ: "gacute",
                        ğ: "gbreve",
                        Ğ: "Gbreve",
                        ĝ: "gcirc",
                        Ĝ: "Gcirc",
                        ġ: "gdot",
                        Ġ: "Gdot",
                        Ģ: "Gcedil",
                        "𝔥": "hfr",
                        ℎ: "planckh",
                        "𝒽": "hscr",
                        "𝕙": "hopf",
                        ℋ: "Hscr",
                        ℌ: "Hfr",
                        ℍ: "Hopf",
                        ĥ: "hcirc",
                        Ĥ: "Hcirc",
                        ℏ: "hbar",
                        ħ: "hstrok",
                        Ħ: "Hstrok",
                        "𝕚": "iopf",
                        "𝔦": "ifr",
                        "𝒾": "iscr",
                        ⅈ: "ii",
                        "𝕀": "Iopf",
                        ℐ: "Iscr",
                        ℑ: "Im",
                        í: "iacute",
                        Í: "Iacute",
                        ì: "igrave",
                        Ì: "Igrave",
                        î: "icirc",
                        Î: "Icirc",
                        ï: "iuml",
                        Ï: "Iuml",
                        ĩ: "itilde",
                        Ĩ: "Itilde",
                        İ: "Idot",
                        į: "iogon",
                        Į: "Iogon",
                        ī: "imacr",
                        Ī: "Imacr",
                        ĳ: "ijlig",
                        Ĳ: "IJlig",
                        ı: "imath",
                        "𝒿": "jscr",
                        "𝕛": "jopf",
                        "𝔧": "jfr",
                        "𝒥": "Jscr",
                        "𝔍": "Jfr",
                        "𝕁": "Jopf",
                        ĵ: "jcirc",
                        Ĵ: "Jcirc",
                        ȷ: "jmath",
                        "𝕜": "kopf",
                        "𝓀": "kscr",
                        "𝔨": "kfr",
                        "𝒦": "Kscr",
                        "𝕂": "Kopf",
                        "𝔎": "Kfr",
                        ķ: "kcedil",
                        Ķ: "Kcedil",
                        "𝔩": "lfr",
                        "𝓁": "lscr",
                        ℓ: "ell",
                        "𝕝": "lopf",
                        ℒ: "Lscr",
                        "𝔏": "Lfr",
                        "𝕃": "Lopf",
                        ĺ: "lacute",
                        Ĺ: "Lacute",
                        ľ: "lcaron",
                        Ľ: "Lcaron",
                        ļ: "lcedil",
                        Ļ: "Lcedil",
                        ł: "lstrok",
                        Ł: "Lstrok",
                        ŀ: "lmidot",
                        Ŀ: "Lmidot",
                        "𝔪": "mfr",
                        "𝕞": "mopf",
                        "𝓂": "mscr",
                        "𝔐": "Mfr",
                        "𝕄": "Mopf",
                        ℳ: "Mscr",
                        "𝔫": "nfr",
                        "𝕟": "nopf",
                        "𝓃": "nscr",
                        ℕ: "Nopf",
                        "𝒩": "Nscr",
                        "𝔑": "Nfr",
                        ń: "nacute",
                        Ń: "Nacute",
                        ň: "ncaron",
                        Ň: "Ncaron",
                        ñ: "ntilde",
                        Ñ: "Ntilde",
                        ņ: "ncedil",
                        Ņ: "Ncedil",
                        "№": "numero",
                        ŋ: "eng",
                        Ŋ: "ENG",
                        "𝕠": "oopf",
                        "𝔬": "ofr",
                        ℴ: "oscr",
                        "𝒪": "Oscr",
                        "𝔒": "Ofr",
                        "𝕆": "Oopf",
                        º: "ordm",
                        ó: "oacute",
                        Ó: "Oacute",
                        ò: "ograve",
                        Ò: "Ograve",
                        ô: "ocirc",
                        Ô: "Ocirc",
                        ö: "ouml",
                        Ö: "Ouml",
                        ő: "odblac",
                        Ő: "Odblac",
                        õ: "otilde",
                        Õ: "Otilde",
                        ø: "oslash",
                        Ø: "Oslash",
                        ō: "omacr",
                        Ō: "Omacr",
                        œ: "oelig",
                        Œ: "OElig",
                        "𝔭": "pfr",
                        "𝓅": "pscr",
                        "𝕡": "popf",
                        ℙ: "Popf",
                        "𝔓": "Pfr",
                        "𝒫": "Pscr",
                        "𝕢": "qopf",
                        "𝔮": "qfr",
                        "𝓆": "qscr",
                        "𝒬": "Qscr",
                        "𝔔": "Qfr",
                        ℚ: "Qopf",
                        ĸ: "kgreen",
                        "𝔯": "rfr",
                        "𝕣": "ropf",
                        "𝓇": "rscr",
                        ℛ: "Rscr",
                        ℜ: "Re",
                        ℝ: "Ropf",
                        ŕ: "racute",
                        Ŕ: "Racute",
                        ř: "rcaron",
                        Ř: "Rcaron",
                        ŗ: "rcedil",
                        Ŗ: "Rcedil",
                        "𝕤": "sopf",
                        "𝓈": "sscr",
                        "𝔰": "sfr",
                        "𝕊": "Sopf",
                        "𝔖": "Sfr",
                        "𝒮": "Sscr",
                        "Ⓢ": "oS",
                        ś: "sacute",
                        Ś: "Sacute",
                        ŝ: "scirc",
                        Ŝ: "Scirc",
                        š: "scaron",
                        Š: "Scaron",
                        ş: "scedil",
                        Ş: "Scedil",
                        ß: "szlig",
                        "𝔱": "tfr",
                        "𝓉": "tscr",
                        "𝕥": "topf",
                        "𝒯": "Tscr",
                        "𝔗": "Tfr",
                        "𝕋": "Topf",
                        ť: "tcaron",
                        Ť: "Tcaron",
                        ţ: "tcedil",
                        Ţ: "Tcedil",
                        "™": "trade",
                        ŧ: "tstrok",
                        Ŧ: "Tstrok",
                        "𝓊": "uscr",
                        "𝕦": "uopf",
                        "𝔲": "ufr",
                        "𝕌": "Uopf",
                        "𝔘": "Ufr",
                        "𝒰": "Uscr",
                        ú: "uacute",
                        Ú: "Uacute",
                        ù: "ugrave",
                        Ù: "Ugrave",
                        ŭ: "ubreve",
                        Ŭ: "Ubreve",
                        û: "ucirc",
                        Û: "Ucirc",
                        ů: "uring",
                        Ů: "Uring",
                        ü: "uuml",
                        Ü: "Uuml",
                        ű: "udblac",
                        Ű: "Udblac",
                        ũ: "utilde",
                        Ũ: "Utilde",
                        ų: "uogon",
                        Ų: "Uogon",
                        ū: "umacr",
                        Ū: "Umacr",
                        "𝔳": "vfr",
                        "𝕧": "vopf",
                        "𝓋": "vscr",
                        "𝔙": "Vfr",
                        "𝕍": "Vopf",
                        "𝒱": "Vscr",
                        "𝕨": "wopf",
                        "𝓌": "wscr",
                        "𝔴": "wfr",
                        "𝒲": "Wscr",
                        "𝕎": "Wopf",
                        "𝔚": "Wfr",
                        ŵ: "wcirc",
                        Ŵ: "Wcirc",
                        "𝔵": "xfr",
                        "𝓍": "xscr",
                        "𝕩": "xopf",
                        "𝕏": "Xopf",
                        "𝔛": "Xfr",
                        "𝒳": "Xscr",
                        "𝔶": "yfr",
                        "𝓎": "yscr",
                        "𝕪": "yopf",
                        "𝒴": "Yscr",
                        "𝔜": "Yfr",
                        "𝕐": "Yopf",
                        ý: "yacute",
                        Ý: "Yacute",
                        ŷ: "ycirc",
                        Ŷ: "Ycirc",
                        ÿ: "yuml",
                        Ÿ: "Yuml",
                        "𝓏": "zscr",
                        "𝔷": "zfr",
                        "𝕫": "zopf",
                        ℨ: "Zfr",
                        ℤ: "Zopf",
                        "𝒵": "Zscr",
                        ź: "zacute",
                        Ź: "Zacute",
                        ž: "zcaron",
                        Ž: "Zcaron",
                        ż: "zdot",
                        Ż: "Zdot",
                        Ƶ: "imped",
                        þ: "thorn",
                        Þ: "THORN",
                        ŉ: "napos",
                        α: "alpha",
                        Α: "Alpha",
                        β: "beta",
                        Β: "Beta",
                        γ: "gamma",
                        Γ: "Gamma",
                        δ: "delta",
                        Δ: "Delta",
                        ε: "epsi",
                        ϵ: "epsiv",
                        Ε: "Epsilon",
                        ϝ: "gammad",
                        Ϝ: "Gammad",
                        ζ: "zeta",
                        Ζ: "Zeta",
                        η: "eta",
                        Η: "Eta",
                        θ: "theta",
                        ϑ: "thetav",
                        Θ: "Theta",
                        ι: "iota",
                        Ι: "Iota",
                        κ: "kappa",
                        ϰ: "kappav",
                        Κ: "Kappa",
                        λ: "lambda",
                        Λ: "Lambda",
                        μ: "mu",
                        µ: "micro",
                        Μ: "Mu",
                        ν: "nu",
                        Ν: "Nu",
                        ξ: "xi",
                        Ξ: "Xi",
                        ο: "omicron",
                        Ο: "Omicron",
                        π: "pi",
                        ϖ: "piv",
                        Π: "Pi",
                        ρ: "rho",
                        ϱ: "rhov",
                        Ρ: "Rho",
                        σ: "sigma",
                        Σ: "Sigma",
                        ς: "sigmaf",
                        τ: "tau",
                        Τ: "Tau",
                        υ: "upsi",
                        Υ: "Upsilon",
                        ϒ: "Upsi",
                        φ: "phi",
                        ϕ: "phiv",
                        Φ: "Phi",
                        χ: "chi",
                        Χ: "Chi",
                        ψ: "psi",
                        Ψ: "Psi",
                        ω: "omega",
                        Ω: "ohm",
                        а: "acy",
                        А: "Acy",
                        б: "bcy",
                        Б: "Bcy",
                        в: "vcy",
                        В: "Vcy",
                        г: "gcy",
                        Г: "Gcy",
                        ѓ: "gjcy",
                        Ѓ: "GJcy",
                        д: "dcy",
                        Д: "Dcy",
                        ђ: "djcy",
                        Ђ: "DJcy",
                        е: "iecy",
                        Е: "IEcy",
                        ё: "iocy",
                        Ё: "IOcy",
                        є: "jukcy",
                        Є: "Jukcy",
                        ж: "zhcy",
                        Ж: "ZHcy",
                        з: "zcy",
                        З: "Zcy",
                        ѕ: "dscy",
                        Ѕ: "DScy",
                        и: "icy",
                        И: "Icy",
                        і: "iukcy",
                        І: "Iukcy",
                        ї: "yicy",
                        Ї: "YIcy",
                        й: "jcy",
                        Й: "Jcy",
                        ј: "jsercy",
                        Ј: "Jsercy",
                        к: "kcy",
                        К: "Kcy",
                        ќ: "kjcy",
                        Ќ: "KJcy",
                        л: "lcy",
                        Л: "Lcy",
                        љ: "ljcy",
                        Љ: "LJcy",
                        м: "mcy",
                        М: "Mcy",
                        н: "ncy",
                        Н: "Ncy",
                        њ: "njcy",
                        Њ: "NJcy",
                        о: "ocy",
                        О: "Ocy",
                        п: "pcy",
                        П: "Pcy",
                        р: "rcy",
                        Р: "Rcy",
                        с: "scy",
                        С: "Scy",
                        т: "tcy",
                        Т: "Tcy",
                        ћ: "tshcy",
                        Ћ: "TSHcy",
                        у: "ucy",
                        У: "Ucy",
                        ў: "ubrcy",
                        Ў: "Ubrcy",
                        ф: "fcy",
                        Ф: "Fcy",
                        х: "khcy",
                        Х: "KHcy",
                        ц: "tscy",
                        Ц: "TScy",
                        ч: "chcy",
                        Ч: "CHcy",
                        џ: "dzcy",
                        Џ: "DZcy",
                        ш: "shcy",
                        Ш: "SHcy",
                        щ: "shchcy",
                        Щ: "SHCHcy",
                        ъ: "hardcy",
                        Ъ: "HARDcy",
                        ы: "ycy",
                        Ы: "Ycy",
                        ь: "softcy",
                        Ь: "SOFTcy",
                        э: "ecy",
                        Э: "Ecy",
                        ю: "yucy",
                        Ю: "YUcy",
                        я: "yacy",
                        Я: "YAcy",
                        ℵ: "aleph",
                        ℶ: "beth",
                        ℷ: "gimel",
                        ℸ: "daleth",
                    },
                    f = /["&'<>`]/g,
                    h = { '"': "&quot;", "&": "&amp;", "'": "&#x27;", "<": "&lt;", ">": "&gt;", "`": "&#x60;" },
                    m = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,
                    g = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
                    v = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,
                    y = {
                        aacute: "á",
                        Aacute: "Á",
                        abreve: "ă",
                        Abreve: "Ă",
                        ac: "∾",
                        acd: "∿",
                        acE: "∾̳",
                        acirc: "â",
                        Acirc: "Â",
                        acute: "´",
                        acy: "а",
                        Acy: "А",
                        aelig: "æ",
                        AElig: "Æ",
                        af: "⁡",
                        afr: "𝔞",
                        Afr: "𝔄",
                        agrave: "à",
                        Agrave: "À",
                        alefsym: "ℵ",
                        aleph: "ℵ",
                        alpha: "α",
                        Alpha: "Α",
                        amacr: "ā",
                        Amacr: "Ā",
                        amalg: "⨿",
                        amp: "&",
                        AMP: "&",
                        and: "∧",
                        And: "⩓",
                        andand: "⩕",
                        andd: "⩜",
                        andslope: "⩘",
                        andv: "⩚",
                        ang: "∠",
                        ange: "⦤",
                        angle: "∠",
                        angmsd: "∡",
                        angmsdaa: "⦨",
                        angmsdab: "⦩",
                        angmsdac: "⦪",
                        angmsdad: "⦫",
                        angmsdae: "⦬",
                        angmsdaf: "⦭",
                        angmsdag: "⦮",
                        angmsdah: "⦯",
                        angrt: "∟",
                        angrtvb: "⊾",
                        angrtvbd: "⦝",
                        angsph: "∢",
                        angst: "Å",
                        angzarr: "⍼",
                        aogon: "ą",
                        Aogon: "Ą",
                        aopf: "𝕒",
                        Aopf: "𝔸",
                        ap: "≈",
                        apacir: "⩯",
                        ape: "≊",
                        apE: "⩰",
                        apid: "≋",
                        apos: "'",
                        ApplyFunction: "⁡",
                        approx: "≈",
                        approxeq: "≊",
                        aring: "å",
                        Aring: "Å",
                        ascr: "𝒶",
                        Ascr: "𝒜",
                        Assign: "≔",
                        ast: "*",
                        asymp: "≈",
                        asympeq: "≍",
                        atilde: "ã",
                        Atilde: "Ã",
                        auml: "ä",
                        Auml: "Ä",
                        awconint: "∳",
                        awint: "⨑",
                        backcong: "≌",
                        backepsilon: "϶",
                        backprime: "‵",
                        backsim: "∽",
                        backsimeq: "⋍",
                        Backslash: "∖",
                        Barv: "⫧",
                        barvee: "⊽",
                        barwed: "⌅",
                        Barwed: "⌆",
                        barwedge: "⌅",
                        bbrk: "⎵",
                        bbrktbrk: "⎶",
                        bcong: "≌",
                        bcy: "б",
                        Bcy: "Б",
                        bdquo: "„",
                        becaus: "∵",
                        because: "∵",
                        Because: "∵",
                        bemptyv: "⦰",
                        bepsi: "϶",
                        bernou: "ℬ",
                        Bernoullis: "ℬ",
                        beta: "β",
                        Beta: "Β",
                        beth: "ℶ",
                        between: "≬",
                        bfr: "𝔟",
                        Bfr: "𝔅",
                        bigcap: "⋂",
                        bigcirc: "◯",
                        bigcup: "⋃",
                        bigodot: "⨀",
                        bigoplus: "⨁",
                        bigotimes: "⨂",
                        bigsqcup: "⨆",
                        bigstar: "★",
                        bigtriangledown: "▽",
                        bigtriangleup: "△",
                        biguplus: "⨄",
                        bigvee: "⋁",
                        bigwedge: "⋀",
                        bkarow: "⤍",
                        blacklozenge: "⧫",
                        blacksquare: "▪",
                        blacktriangle: "▴",
                        blacktriangledown: "▾",
                        blacktriangleleft: "◂",
                        blacktriangleright: "▸",
                        blank: "␣",
                        blk12: "▒",
                        blk14: "░",
                        blk34: "▓",
                        block: "█",
                        bne: "=⃥",
                        bnequiv: "≡⃥",
                        bnot: "⌐",
                        bNot: "⫭",
                        bopf: "𝕓",
                        Bopf: "𝔹",
                        bot: "⊥",
                        bottom: "⊥",
                        bowtie: "⋈",
                        boxbox: "⧉",
                        boxdl: "┐",
                        boxdL: "╕",
                        boxDl: "╖",
                        boxDL: "╗",
                        boxdr: "┌",
                        boxdR: "╒",
                        boxDr: "╓",
                        boxDR: "╔",
                        boxh: "─",
                        boxH: "═",
                        boxhd: "┬",
                        boxhD: "╥",
                        boxHd: "╤",
                        boxHD: "╦",
                        boxhu: "┴",
                        boxhU: "╨",
                        boxHu: "╧",
                        boxHU: "╩",
                        boxminus: "⊟",
                        boxplus: "⊞",
                        boxtimes: "⊠",
                        boxul: "┘",
                        boxuL: "╛",
                        boxUl: "╜",
                        boxUL: "╝",
                        boxur: "└",
                        boxuR: "╘",
                        boxUr: "╙",
                        boxUR: "╚",
                        boxv: "│",
                        boxV: "║",
                        boxvh: "┼",
                        boxvH: "╪",
                        boxVh: "╫",
                        boxVH: "╬",
                        boxvl: "┤",
                        boxvL: "╡",
                        boxVl: "╢",
                        boxVL: "╣",
                        boxvr: "├",
                        boxvR: "╞",
                        boxVr: "╟",
                        boxVR: "╠",
                        bprime: "‵",
                        breve: "˘",
                        Breve: "˘",
                        brvbar: "¦",
                        bscr: "𝒷",
                        Bscr: "ℬ",
                        bsemi: "⁏",
                        bsim: "∽",
                        bsime: "⋍",
                        bsol: "\\",
                        bsolb: "⧅",
                        bsolhsub: "⟈",
                        bull: "•",
                        bullet: "•",
                        bump: "≎",
                        bumpe: "≏",
                        bumpE: "⪮",
                        bumpeq: "≏",
                        Bumpeq: "≎",
                        cacute: "ć",
                        Cacute: "Ć",
                        cap: "∩",
                        Cap: "⋒",
                        capand: "⩄",
                        capbrcup: "⩉",
                        capcap: "⩋",
                        capcup: "⩇",
                        capdot: "⩀",
                        CapitalDifferentialD: "ⅅ",
                        caps: "∩︀",
                        caret: "⁁",
                        caron: "ˇ",
                        Cayleys: "ℭ",
                        ccaps: "⩍",
                        ccaron: "č",
                        Ccaron: "Č",
                        ccedil: "ç",
                        Ccedil: "Ç",
                        ccirc: "ĉ",
                        Ccirc: "Ĉ",
                        Cconint: "∰",
                        ccups: "⩌",
                        ccupssm: "⩐",
                        cdot: "ċ",
                        Cdot: "Ċ",
                        cedil: "¸",
                        Cedilla: "¸",
                        cemptyv: "⦲",
                        cent: "¢",
                        centerdot: "·",
                        CenterDot: "·",
                        cfr: "𝔠",
                        Cfr: "ℭ",
                        chcy: "ч",
                        CHcy: "Ч",
                        check: "✓",
                        checkmark: "✓",
                        chi: "χ",
                        Chi: "Χ",
                        cir: "○",
                        circ: "ˆ",
                        circeq: "≗",
                        circlearrowleft: "↺",
                        circlearrowright: "↻",
                        circledast: "⊛",
                        circledcirc: "⊚",
                        circleddash: "⊝",
                        CircleDot: "⊙",
                        circledR: "®",
                        circledS: "Ⓢ",
                        CircleMinus: "⊖",
                        CirclePlus: "⊕",
                        CircleTimes: "⊗",
                        cire: "≗",
                        cirE: "⧃",
                        cirfnint: "⨐",
                        cirmid: "⫯",
                        cirscir: "⧂",
                        ClockwiseContourIntegral: "∲",
                        CloseCurlyDoubleQuote: "”",
                        CloseCurlyQuote: "’",
                        clubs: "♣",
                        clubsuit: "♣",
                        colon: ":",
                        Colon: "∷",
                        colone: "≔",
                        Colone: "⩴",
                        coloneq: "≔",
                        comma: ",",
                        commat: "@",
                        comp: "∁",
                        compfn: "∘",
                        complement: "∁",
                        complexes: "ℂ",
                        cong: "≅",
                        congdot: "⩭",
                        Congruent: "≡",
                        conint: "∮",
                        Conint: "∯",
                        ContourIntegral: "∮",
                        copf: "𝕔",
                        Copf: "ℂ",
                        coprod: "∐",
                        Coproduct: "∐",
                        copy: "©",
                        COPY: "©",
                        copysr: "℗",
                        CounterClockwiseContourIntegral: "∳",
                        crarr: "↵",
                        cross: "✗",
                        Cross: "⨯",
                        cscr: "𝒸",
                        Cscr: "𝒞",
                        csub: "⫏",
                        csube: "⫑",
                        csup: "⫐",
                        csupe: "⫒",
                        ctdot: "⋯",
                        cudarrl: "⤸",
                        cudarrr: "⤵",
                        cuepr: "⋞",
                        cuesc: "⋟",
                        cularr: "↶",
                        cularrp: "⤽",
                        cup: "∪",
                        Cup: "⋓",
                        cupbrcap: "⩈",
                        cupcap: "⩆",
                        CupCap: "≍",
                        cupcup: "⩊",
                        cupdot: "⊍",
                        cupor: "⩅",
                        cups: "∪︀",
                        curarr: "↷",
                        curarrm: "⤼",
                        curlyeqprec: "⋞",
                        curlyeqsucc: "⋟",
                        curlyvee: "⋎",
                        curlywedge: "⋏",
                        curren: "¤",
                        curvearrowleft: "↶",
                        curvearrowright: "↷",
                        cuvee: "⋎",
                        cuwed: "⋏",
                        cwconint: "∲",
                        cwint: "∱",
                        cylcty: "⌭",
                        dagger: "†",
                        Dagger: "‡",
                        daleth: "ℸ",
                        darr: "↓",
                        dArr: "⇓",
                        Darr: "↡",
                        dash: "‐",
                        dashv: "⊣",
                        Dashv: "⫤",
                        dbkarow: "⤏",
                        dblac: "˝",
                        dcaron: "ď",
                        Dcaron: "Ď",
                        dcy: "д",
                        Dcy: "Д",
                        dd: "ⅆ",
                        DD: "ⅅ",
                        ddagger: "‡",
                        ddarr: "⇊",
                        DDotrahd: "⤑",
                        ddotseq: "⩷",
                        deg: "°",
                        Del: "∇",
                        delta: "δ",
                        Delta: "Δ",
                        demptyv: "⦱",
                        dfisht: "⥿",
                        dfr: "𝔡",
                        Dfr: "𝔇",
                        dHar: "⥥",
                        dharl: "⇃",
                        dharr: "⇂",
                        DiacriticalAcute: "´",
                        DiacriticalDot: "˙",
                        DiacriticalDoubleAcute: "˝",
                        DiacriticalGrave: "`",
                        DiacriticalTilde: "˜",
                        diam: "⋄",
                        diamond: "⋄",
                        Diamond: "⋄",
                        diamondsuit: "♦",
                        diams: "♦",
                        die: "¨",
                        DifferentialD: "ⅆ",
                        digamma: "ϝ",
                        disin: "⋲",
                        div: "÷",
                        divide: "÷",
                        divideontimes: "⋇",
                        divonx: "⋇",
                        djcy: "ђ",
                        DJcy: "Ђ",
                        dlcorn: "⌞",
                        dlcrop: "⌍",
                        dollar: "$",
                        dopf: "𝕕",
                        Dopf: "𝔻",
                        dot: "˙",
                        Dot: "¨",
                        DotDot: "⃜",
                        doteq: "≐",
                        doteqdot: "≑",
                        DotEqual: "≐",
                        dotminus: "∸",
                        dotplus: "∔",
                        dotsquare: "⊡",
                        doublebarwedge: "⌆",
                        DoubleContourIntegral: "∯",
                        DoubleDot: "¨",
                        DoubleDownArrow: "⇓",
                        DoubleLeftArrow: "⇐",
                        DoubleLeftRightArrow: "⇔",
                        DoubleLeftTee: "⫤",
                        DoubleLongLeftArrow: "⟸",
                        DoubleLongLeftRightArrow: "⟺",
                        DoubleLongRightArrow: "⟹",
                        DoubleRightArrow: "⇒",
                        DoubleRightTee: "⊨",
                        DoubleUpArrow: "⇑",
                        DoubleUpDownArrow: "⇕",
                        DoubleVerticalBar: "∥",
                        downarrow: "↓",
                        Downarrow: "⇓",
                        DownArrow: "↓",
                        DownArrowBar: "⤓",
                        DownArrowUpArrow: "⇵",
                        DownBreve: "̑",
                        downdownarrows: "⇊",
                        downharpoonleft: "⇃",
                        downharpoonright: "⇂",
                        DownLeftRightVector: "⥐",
                        DownLeftTeeVector: "⥞",
                        DownLeftVector: "↽",
                        DownLeftVectorBar: "⥖",
                        DownRightTeeVector: "⥟",
                        DownRightVector: "⇁",
                        DownRightVectorBar: "⥗",
                        DownTee: "⊤",
                        DownTeeArrow: "↧",
                        drbkarow: "⤐",
                        drcorn: "⌟",
                        drcrop: "⌌",
                        dscr: "𝒹",
                        Dscr: "𝒟",
                        dscy: "ѕ",
                        DScy: "Ѕ",
                        dsol: "⧶",
                        dstrok: "đ",
                        Dstrok: "Đ",
                        dtdot: "⋱",
                        dtri: "▿",
                        dtrif: "▾",
                        duarr: "⇵",
                        duhar: "⥯",
                        dwangle: "⦦",
                        dzcy: "џ",
                        DZcy: "Џ",
                        dzigrarr: "⟿",
                        eacute: "é",
                        Eacute: "É",
                        easter: "⩮",
                        ecaron: "ě",
                        Ecaron: "Ě",
                        ecir: "≖",
                        ecirc: "ê",
                        Ecirc: "Ê",
                        ecolon: "≕",
                        ecy: "э",
                        Ecy: "Э",
                        eDDot: "⩷",
                        edot: "ė",
                        eDot: "≑",
                        Edot: "Ė",
                        ee: "ⅇ",
                        efDot: "≒",
                        efr: "𝔢",
                        Efr: "𝔈",
                        eg: "⪚",
                        egrave: "è",
                        Egrave: "È",
                        egs: "⪖",
                        egsdot: "⪘",
                        el: "⪙",
                        Element: "∈",
                        elinters: "⏧",
                        ell: "ℓ",
                        els: "⪕",
                        elsdot: "⪗",
                        emacr: "ē",
                        Emacr: "Ē",
                        empty: "∅",
                        emptyset: "∅",
                        EmptySmallSquare: "◻",
                        emptyv: "∅",
                        EmptyVerySmallSquare: "▫",
                        emsp: " ",
                        emsp13: " ",
                        emsp14: " ",
                        eng: "ŋ",
                        ENG: "Ŋ",
                        ensp: " ",
                        eogon: "ę",
                        Eogon: "Ę",
                        eopf: "𝕖",
                        Eopf: "𝔼",
                        epar: "⋕",
                        eparsl: "⧣",
                        eplus: "⩱",
                        epsi: "ε",
                        epsilon: "ε",
                        Epsilon: "Ε",
                        epsiv: "ϵ",
                        eqcirc: "≖",
                        eqcolon: "≕",
                        eqsim: "≂",
                        eqslantgtr: "⪖",
                        eqslantless: "⪕",
                        Equal: "⩵",
                        equals: "=",
                        EqualTilde: "≂",
                        equest: "≟",
                        Equilibrium: "⇌",
                        equiv: "≡",
                        equivDD: "⩸",
                        eqvparsl: "⧥",
                        erarr: "⥱",
                        erDot: "≓",
                        escr: "ℯ",
                        Escr: "ℰ",
                        esdot: "≐",
                        esim: "≂",
                        Esim: "⩳",
                        eta: "η",
                        Eta: "Η",
                        eth: "ð",
                        ETH: "Ð",
                        euml: "ë",
                        Euml: "Ë",
                        euro: "€",
                        excl: "!",
                        exist: "∃",
                        Exists: "∃",
                        expectation: "ℰ",
                        exponentiale: "ⅇ",
                        ExponentialE: "ⅇ",
                        fallingdotseq: "≒",
                        fcy: "ф",
                        Fcy: "Ф",
                        female: "♀",
                        ffilig: "ﬃ",
                        fflig: "ﬀ",
                        ffllig: "ﬄ",
                        ffr: "𝔣",
                        Ffr: "𝔉",
                        filig: "ﬁ",
                        FilledSmallSquare: "◼",
                        FilledVerySmallSquare: "▪",
                        fjlig: "fj",
                        flat: "♭",
                        fllig: "ﬂ",
                        fltns: "▱",
                        fnof: "ƒ",
                        fopf: "𝕗",
                        Fopf: "𝔽",
                        forall: "∀",
                        ForAll: "∀",
                        fork: "⋔",
                        forkv: "⫙",
                        Fouriertrf: "ℱ",
                        fpartint: "⨍",
                        frac12: "½",
                        frac13: "⅓",
                        frac14: "¼",
                        frac15: "⅕",
                        frac16: "⅙",
                        frac18: "⅛",
                        frac23: "⅔",
                        frac25: "⅖",
                        frac34: "¾",
                        frac35: "⅗",
                        frac38: "⅜",
                        frac45: "⅘",
                        frac56: "⅚",
                        frac58: "⅝",
                        frac78: "⅞",
                        frasl: "⁄",
                        frown: "⌢",
                        fscr: "𝒻",
                        Fscr: "ℱ",
                        gacute: "ǵ",
                        gamma: "γ",
                        Gamma: "Γ",
                        gammad: "ϝ",
                        Gammad: "Ϝ",
                        gap: "⪆",
                        gbreve: "ğ",
                        Gbreve: "Ğ",
                        Gcedil: "Ģ",
                        gcirc: "ĝ",
                        Gcirc: "Ĝ",
                        gcy: "г",
                        Gcy: "Г",
                        gdot: "ġ",
                        Gdot: "Ġ",
                        ge: "≥",
                        gE: "≧",
                        gel: "⋛",
                        gEl: "⪌",
                        geq: "≥",
                        geqq: "≧",
                        geqslant: "⩾",
                        ges: "⩾",
                        gescc: "⪩",
                        gesdot: "⪀",
                        gesdoto: "⪂",
                        gesdotol: "⪄",
                        gesl: "⋛︀",
                        gesles: "⪔",
                        gfr: "𝔤",
                        Gfr: "𝔊",
                        gg: "≫",
                        Gg: "⋙",
                        ggg: "⋙",
                        gimel: "ℷ",
                        gjcy: "ѓ",
                        GJcy: "Ѓ",
                        gl: "≷",
                        gla: "⪥",
                        glE: "⪒",
                        glj: "⪤",
                        gnap: "⪊",
                        gnapprox: "⪊",
                        gne: "⪈",
                        gnE: "≩",
                        gneq: "⪈",
                        gneqq: "≩",
                        gnsim: "⋧",
                        gopf: "𝕘",
                        Gopf: "𝔾",
                        grave: "`",
                        GreaterEqual: "≥",
                        GreaterEqualLess: "⋛",
                        GreaterFullEqual: "≧",
                        GreaterGreater: "⪢",
                        GreaterLess: "≷",
                        GreaterSlantEqual: "⩾",
                        GreaterTilde: "≳",
                        gscr: "ℊ",
                        Gscr: "𝒢",
                        gsim: "≳",
                        gsime: "⪎",
                        gsiml: "⪐",
                        gt: ">",
                        Gt: "≫",
                        GT: ">",
                        gtcc: "⪧",
                        gtcir: "⩺",
                        gtdot: "⋗",
                        gtlPar: "⦕",
                        gtquest: "⩼",
                        gtrapprox: "⪆",
                        gtrarr: "⥸",
                        gtrdot: "⋗",
                        gtreqless: "⋛",
                        gtreqqless: "⪌",
                        gtrless: "≷",
                        gtrsim: "≳",
                        gvertneqq: "≩︀",
                        gvnE: "≩︀",
                        Hacek: "ˇ",
                        hairsp: " ",
                        half: "½",
                        hamilt: "ℋ",
                        hardcy: "ъ",
                        HARDcy: "Ъ",
                        harr: "↔",
                        hArr: "⇔",
                        harrcir: "⥈",
                        harrw: "↭",
                        Hat: "^",
                        hbar: "ℏ",
                        hcirc: "ĥ",
                        Hcirc: "Ĥ",
                        hearts: "♥",
                        heartsuit: "♥",
                        hellip: "…",
                        hercon: "⊹",
                        hfr: "𝔥",
                        Hfr: "ℌ",
                        HilbertSpace: "ℋ",
                        hksearow: "⤥",
                        hkswarow: "⤦",
                        hoarr: "⇿",
                        homtht: "∻",
                        hookleftarrow: "↩",
                        hookrightarrow: "↪",
                        hopf: "𝕙",
                        Hopf: "ℍ",
                        horbar: "―",
                        HorizontalLine: "─",
                        hscr: "𝒽",
                        Hscr: "ℋ",
                        hslash: "ℏ",
                        hstrok: "ħ",
                        Hstrok: "Ħ",
                        HumpDownHump: "≎",
                        HumpEqual: "≏",
                        hybull: "⁃",
                        hyphen: "‐",
                        iacute: "í",
                        Iacute: "Í",
                        ic: "⁣",
                        icirc: "î",
                        Icirc: "Î",
                        icy: "и",
                        Icy: "И",
                        Idot: "İ",
                        iecy: "е",
                        IEcy: "Е",
                        iexcl: "¡",
                        iff: "⇔",
                        ifr: "𝔦",
                        Ifr: "ℑ",
                        igrave: "ì",
                        Igrave: "Ì",
                        ii: "ⅈ",
                        iiiint: "⨌",
                        iiint: "∭",
                        iinfin: "⧜",
                        iiota: "℩",
                        ijlig: "ĳ",
                        IJlig: "Ĳ",
                        Im: "ℑ",
                        imacr: "ī",
                        Imacr: "Ī",
                        image: "ℑ",
                        ImaginaryI: "ⅈ",
                        imagline: "ℐ",
                        imagpart: "ℑ",
                        imath: "ı",
                        imof: "⊷",
                        imped: "Ƶ",
                        Implies: "⇒",
                        in: "∈",
                        incare: "℅",
                        infin: "∞",
                        infintie: "⧝",
                        inodot: "ı",
                        int: "∫",
                        Int: "∬",
                        intcal: "⊺",
                        integers: "ℤ",
                        Integral: "∫",
                        intercal: "⊺",
                        Intersection: "⋂",
                        intlarhk: "⨗",
                        intprod: "⨼",
                        InvisibleComma: "⁣",
                        InvisibleTimes: "⁢",
                        iocy: "ё",
                        IOcy: "Ё",
                        iogon: "į",
                        Iogon: "Į",
                        iopf: "𝕚",
                        Iopf: "𝕀",
                        iota: "ι",
                        Iota: "Ι",
                        iprod: "⨼",
                        iquest: "¿",
                        iscr: "𝒾",
                        Iscr: "ℐ",
                        isin: "∈",
                        isindot: "⋵",
                        isinE: "⋹",
                        isins: "⋴",
                        isinsv: "⋳",
                        isinv: "∈",
                        it: "⁢",
                        itilde: "ĩ",
                        Itilde: "Ĩ",
                        iukcy: "і",
                        Iukcy: "І",
                        iuml: "ï",
                        Iuml: "Ï",
                        jcirc: "ĵ",
                        Jcirc: "Ĵ",
                        jcy: "й",
                        Jcy: "Й",
                        jfr: "𝔧",
                        Jfr: "𝔍",
                        jmath: "ȷ",
                        jopf: "𝕛",
                        Jopf: "𝕁",
                        jscr: "𝒿",
                        Jscr: "𝒥",
                        jsercy: "ј",
                        Jsercy: "Ј",
                        jukcy: "є",
                        Jukcy: "Є",
                        kappa: "κ",
                        Kappa: "Κ",
                        kappav: "ϰ",
                        kcedil: "ķ",
                        Kcedil: "Ķ",
                        kcy: "к",
                        Kcy: "К",
                        kfr: "𝔨",
                        Kfr: "𝔎",
                        kgreen: "ĸ",
                        khcy: "х",
                        KHcy: "Х",
                        kjcy: "ќ",
                        KJcy: "Ќ",
                        kopf: "𝕜",
                        Kopf: "𝕂",
                        kscr: "𝓀",
                        Kscr: "𝒦",
                        lAarr: "⇚",
                        lacute: "ĺ",
                        Lacute: "Ĺ",
                        laemptyv: "⦴",
                        lagran: "ℒ",
                        lambda: "λ",
                        Lambda: "Λ",
                        lang: "⟨",
                        Lang: "⟪",
                        langd: "⦑",
                        langle: "⟨",
                        lap: "⪅",
                        Laplacetrf: "ℒ",
                        laquo: "«",
                        larr: "←",
                        lArr: "⇐",
                        Larr: "↞",
                        larrb: "⇤",
                        larrbfs: "⤟",
                        larrfs: "⤝",
                        larrhk: "↩",
                        larrlp: "↫",
                        larrpl: "⤹",
                        larrsim: "⥳",
                        larrtl: "↢",
                        lat: "⪫",
                        latail: "⤙",
                        lAtail: "⤛",
                        late: "⪭",
                        lates: "⪭︀",
                        lbarr: "⤌",
                        lBarr: "⤎",
                        lbbrk: "❲",
                        lbrace: "{",
                        lbrack: "[",
                        lbrke: "⦋",
                        lbrksld: "⦏",
                        lbrkslu: "⦍",
                        lcaron: "ľ",
                        Lcaron: "Ľ",
                        lcedil: "ļ",
                        Lcedil: "Ļ",
                        lceil: "⌈",
                        lcub: "{",
                        lcy: "л",
                        Lcy: "Л",
                        ldca: "⤶",
                        ldquo: "“",
                        ldquor: "„",
                        ldrdhar: "⥧",
                        ldrushar: "⥋",
                        ldsh: "↲",
                        le: "≤",
                        lE: "≦",
                        LeftAngleBracket: "⟨",
                        leftarrow: "←",
                        Leftarrow: "⇐",
                        LeftArrow: "←",
                        LeftArrowBar: "⇤",
                        LeftArrowRightArrow: "⇆",
                        leftarrowtail: "↢",
                        LeftCeiling: "⌈",
                        LeftDoubleBracket: "⟦",
                        LeftDownTeeVector: "⥡",
                        LeftDownVector: "⇃",
                        LeftDownVectorBar: "⥙",
                        LeftFloor: "⌊",
                        leftharpoondown: "↽",
                        leftharpoonup: "↼",
                        leftleftarrows: "⇇",
                        leftrightarrow: "↔",
                        Leftrightarrow: "⇔",
                        LeftRightArrow: "↔",
                        leftrightarrows: "⇆",
                        leftrightharpoons: "⇋",
                        leftrightsquigarrow: "↭",
                        LeftRightVector: "⥎",
                        LeftTee: "⊣",
                        LeftTeeArrow: "↤",
                        LeftTeeVector: "⥚",
                        leftthreetimes: "⋋",
                        LeftTriangle: "⊲",
                        LeftTriangleBar: "⧏",
                        LeftTriangleEqual: "⊴",
                        LeftUpDownVector: "⥑",
                        LeftUpTeeVector: "⥠",
                        LeftUpVector: "↿",
                        LeftUpVectorBar: "⥘",
                        LeftVector: "↼",
                        LeftVectorBar: "⥒",
                        leg: "⋚",
                        lEg: "⪋",
                        leq: "≤",
                        leqq: "≦",
                        leqslant: "⩽",
                        les: "⩽",
                        lescc: "⪨",
                        lesdot: "⩿",
                        lesdoto: "⪁",
                        lesdotor: "⪃",
                        lesg: "⋚︀",
                        lesges: "⪓",
                        lessapprox: "⪅",
                        lessdot: "⋖",
                        lesseqgtr: "⋚",
                        lesseqqgtr: "⪋",
                        LessEqualGreater: "⋚",
                        LessFullEqual: "≦",
                        LessGreater: "≶",
                        lessgtr: "≶",
                        LessLess: "⪡",
                        lesssim: "≲",
                        LessSlantEqual: "⩽",
                        LessTilde: "≲",
                        lfisht: "⥼",
                        lfloor: "⌊",
                        lfr: "𝔩",
                        Lfr: "𝔏",
                        lg: "≶",
                        lgE: "⪑",
                        lHar: "⥢",
                        lhard: "↽",
                        lharu: "↼",
                        lharul: "⥪",
                        lhblk: "▄",
                        ljcy: "љ",
                        LJcy: "Љ",
                        ll: "≪",
                        Ll: "⋘",
                        llarr: "⇇",
                        llcorner: "⌞",
                        Lleftarrow: "⇚",
                        llhard: "⥫",
                        lltri: "◺",
                        lmidot: "ŀ",
                        Lmidot: "Ŀ",
                        lmoust: "⎰",
                        lmoustache: "⎰",
                        lnap: "⪉",
                        lnapprox: "⪉",
                        lne: "⪇",
                        lnE: "≨",
                        lneq: "⪇",
                        lneqq: "≨",
                        lnsim: "⋦",
                        loang: "⟬",
                        loarr: "⇽",
                        lobrk: "⟦",
                        longleftarrow: "⟵",
                        Longleftarrow: "⟸",
                        LongLeftArrow: "⟵",
                        longleftrightarrow: "⟷",
                        Longleftrightarrow: "⟺",
                        LongLeftRightArrow: "⟷",
                        longmapsto: "⟼",
                        longrightarrow: "⟶",
                        Longrightarrow: "⟹",
                        LongRightArrow: "⟶",
                        looparrowleft: "↫",
                        looparrowright: "↬",
                        lopar: "⦅",
                        lopf: "𝕝",
                        Lopf: "𝕃",
                        loplus: "⨭",
                        lotimes: "⨴",
                        lowast: "∗",
                        lowbar: "_",
                        LowerLeftArrow: "↙",
                        LowerRightArrow: "↘",
                        loz: "◊",
                        lozenge: "◊",
                        lozf: "⧫",
                        lpar: "(",
                        lparlt: "⦓",
                        lrarr: "⇆",
                        lrcorner: "⌟",
                        lrhar: "⇋",
                        lrhard: "⥭",
                        lrm: "‎",
                        lrtri: "⊿",
                        lsaquo: "‹",
                        lscr: "𝓁",
                        Lscr: "ℒ",
                        lsh: "↰",
                        Lsh: "↰",
                        lsim: "≲",
                        lsime: "⪍",
                        lsimg: "⪏",
                        lsqb: "[",
                        lsquo: "‘",
                        lsquor: "‚",
                        lstrok: "ł",
                        Lstrok: "Ł",
                        lt: "<",
                        Lt: "≪",
                        LT: "<",
                        ltcc: "⪦",
                        ltcir: "⩹",
                        ltdot: "⋖",
                        lthree: "⋋",
                        ltimes: "⋉",
                        ltlarr: "⥶",
                        ltquest: "⩻",
                        ltri: "◃",
                        ltrie: "⊴",
                        ltrif: "◂",
                        ltrPar: "⦖",
                        lurdshar: "⥊",
                        luruhar: "⥦",
                        lvertneqq: "≨︀",
                        lvnE: "≨︀",
                        macr: "¯",
                        male: "♂",
                        malt: "✠",
                        maltese: "✠",
                        map: "↦",
                        Map: "⤅",
                        mapsto: "↦",
                        mapstodown: "↧",
                        mapstoleft: "↤",
                        mapstoup: "↥",
                        marker: "▮",
                        mcomma: "⨩",
                        mcy: "м",
                        Mcy: "М",
                        mdash: "—",
                        mDDot: "∺",
                        measuredangle: "∡",
                        MediumSpace: " ",
                        Mellintrf: "ℳ",
                        mfr: "𝔪",
                        Mfr: "𝔐",
                        mho: "℧",
                        micro: "µ",
                        mid: "∣",
                        midast: "*",
                        midcir: "⫰",
                        middot: "·",
                        minus: "−",
                        minusb: "⊟",
                        minusd: "∸",
                        minusdu: "⨪",
                        MinusPlus: "∓",
                        mlcp: "⫛",
                        mldr: "…",
                        mnplus: "∓",
                        models: "⊧",
                        mopf: "𝕞",
                        Mopf: "𝕄",
                        mp: "∓",
                        mscr: "𝓂",
                        Mscr: "ℳ",
                        mstpos: "∾",
                        mu: "μ",
                        Mu: "Μ",
                        multimap: "⊸",
                        mumap: "⊸",
                        nabla: "∇",
                        nacute: "ń",
                        Nacute: "Ń",
                        nang: "∠⃒",
                        nap: "≉",
                        napE: "⩰̸",
                        napid: "≋̸",
                        napos: "ŉ",
                        napprox: "≉",
                        natur: "♮",
                        natural: "♮",
                        naturals: "ℕ",
                        nbsp: " ",
                        nbump: "≎̸",
                        nbumpe: "≏̸",
                        ncap: "⩃",
                        ncaron: "ň",
                        Ncaron: "Ň",
                        ncedil: "ņ",
                        Ncedil: "Ņ",
                        ncong: "≇",
                        ncongdot: "⩭̸",
                        ncup: "⩂",
                        ncy: "н",
                        Ncy: "Н",
                        ndash: "–",
                        ne: "≠",
                        nearhk: "⤤",
                        nearr: "↗",
                        neArr: "⇗",
                        nearrow: "↗",
                        nedot: "≐̸",
                        NegativeMediumSpace: "​",
                        NegativeThickSpace: "​",
                        NegativeThinSpace: "​",
                        NegativeVeryThinSpace: "​",
                        nequiv: "≢",
                        nesear: "⤨",
                        nesim: "≂̸",
                        NestedGreaterGreater: "≫",
                        NestedLessLess: "≪",
                        NewLine: "\n",
                        nexist: "∄",
                        nexists: "∄",
                        nfr: "𝔫",
                        Nfr: "𝔑",
                        nge: "≱",
                        ngE: "≧̸",
                        ngeq: "≱",
                        ngeqq: "≧̸",
                        ngeqslant: "⩾̸",
                        nges: "⩾̸",
                        nGg: "⋙̸",
                        ngsim: "≵",
                        ngt: "≯",
                        nGt: "≫⃒",
                        ngtr: "≯",
                        nGtv: "≫̸",
                        nharr: "↮",
                        nhArr: "⇎",
                        nhpar: "⫲",
                        ni: "∋",
                        nis: "⋼",
                        nisd: "⋺",
                        niv: "∋",
                        njcy: "њ",
                        NJcy: "Њ",
                        nlarr: "↚",
                        nlArr: "⇍",
                        nldr: "‥",
                        nle: "≰",
                        nlE: "≦̸",
                        nleftarrow: "↚",
                        nLeftarrow: "⇍",
                        nleftrightarrow: "↮",
                        nLeftrightarrow: "⇎",
                        nleq: "≰",
                        nleqq: "≦̸",
                        nleqslant: "⩽̸",
                        nles: "⩽̸",
                        nless: "≮",
                        nLl: "⋘̸",
                        nlsim: "≴",
                        nlt: "≮",
                        nLt: "≪⃒",
                        nltri: "⋪",
                        nltrie: "⋬",
                        nLtv: "≪̸",
                        nmid: "∤",
                        NoBreak: "⁠",
                        NonBreakingSpace: " ",
                        nopf: "𝕟",
                        Nopf: "ℕ",
                        not: "¬",
                        Not: "⫬",
                        NotCongruent: "≢",
                        NotCupCap: "≭",
                        NotDoubleVerticalBar: "∦",
                        NotElement: "∉",
                        NotEqual: "≠",
                        NotEqualTilde: "≂̸",
                        NotExists: "∄",
                        NotGreater: "≯",
                        NotGreaterEqual: "≱",
                        NotGreaterFullEqual: "≧̸",
                        NotGreaterGreater: "≫̸",
                        NotGreaterLess: "≹",
                        NotGreaterSlantEqual: "⩾̸",
                        NotGreaterTilde: "≵",
                        NotHumpDownHump: "≎̸",
                        NotHumpEqual: "≏̸",
                        notin: "∉",
                        notindot: "⋵̸",
                        notinE: "⋹̸",
                        notinva: "∉",
                        notinvb: "⋷",
                        notinvc: "⋶",
                        NotLeftTriangle: "⋪",
                        NotLeftTriangleBar: "⧏̸",
                        NotLeftTriangleEqual: "⋬",
                        NotLess: "≮",
                        NotLessEqual: "≰",
                        NotLessGreater: "≸",
                        NotLessLess: "≪̸",
                        NotLessSlantEqual: "⩽̸",
                        NotLessTilde: "≴",
                        NotNestedGreaterGreater: "⪢̸",
                        NotNestedLessLess: "⪡̸",
                        notni: "∌",
                        notniva: "∌",
                        notnivb: "⋾",
                        notnivc: "⋽",
                        NotPrecedes: "⊀",
                        NotPrecedesEqual: "⪯̸",
                        NotPrecedesSlantEqual: "⋠",
                        NotReverseElement: "∌",
                        NotRightTriangle: "⋫",
                        NotRightTriangleBar: "⧐̸",
                        NotRightTriangleEqual: "⋭",
                        NotSquareSubset: "⊏̸",
                        NotSquareSubsetEqual: "⋢",
                        NotSquareSuperset: "⊐̸",
                        NotSquareSupersetEqual: "⋣",
                        NotSubset: "⊂⃒",
                        NotSubsetEqual: "⊈",
                        NotSucceeds: "⊁",
                        NotSucceedsEqual: "⪰̸",
                        NotSucceedsSlantEqual: "⋡",
                        NotSucceedsTilde: "≿̸",
                        NotSuperset: "⊃⃒",
                        NotSupersetEqual: "⊉",
                        NotTilde: "≁",
                        NotTildeEqual: "≄",
                        NotTildeFullEqual: "≇",
                        NotTildeTilde: "≉",
                        NotVerticalBar: "∤",
                        npar: "∦",
                        nparallel: "∦",
                        nparsl: "⫽⃥",
                        npart: "∂̸",
                        npolint: "⨔",
                        npr: "⊀",
                        nprcue: "⋠",
                        npre: "⪯̸",
                        nprec: "⊀",
                        npreceq: "⪯̸",
                        nrarr: "↛",
                        nrArr: "⇏",
                        nrarrc: "⤳̸",
                        nrarrw: "↝̸",
                        nrightarrow: "↛",
                        nRightarrow: "⇏",
                        nrtri: "⋫",
                        nrtrie: "⋭",
                        nsc: "⊁",
                        nsccue: "⋡",
                        nsce: "⪰̸",
                        nscr: "𝓃",
                        Nscr: "𝒩",
                        nshortmid: "∤",
                        nshortparallel: "∦",
                        nsim: "≁",
                        nsime: "≄",
                        nsimeq: "≄",
                        nsmid: "∤",
                        nspar: "∦",
                        nsqsube: "⋢",
                        nsqsupe: "⋣",
                        nsub: "⊄",
                        nsube: "⊈",
                        nsubE: "⫅̸",
                        nsubset: "⊂⃒",
                        nsubseteq: "⊈",
                        nsubseteqq: "⫅̸",
                        nsucc: "⊁",
                        nsucceq: "⪰̸",
                        nsup: "⊅",
                        nsupe: "⊉",
                        nsupE: "⫆̸",
                        nsupset: "⊃⃒",
                        nsupseteq: "⊉",
                        nsupseteqq: "⫆̸",
                        ntgl: "≹",
                        ntilde: "ñ",
                        Ntilde: "Ñ",
                        ntlg: "≸",
                        ntriangleleft: "⋪",
                        ntrianglelefteq: "⋬",
                        ntriangleright: "⋫",
                        ntrianglerighteq: "⋭",
                        nu: "ν",
                        Nu: "Ν",
                        num: "#",
                        numero: "№",
                        numsp: " ",
                        nvap: "≍⃒",
                        nvdash: "⊬",
                        nvDash: "⊭",
                        nVdash: "⊮",
                        nVDash: "⊯",
                        nvge: "≥⃒",
                        nvgt: ">⃒",
                        nvHarr: "⤄",
                        nvinfin: "⧞",
                        nvlArr: "⤂",
                        nvle: "≤⃒",
                        nvlt: "<⃒",
                        nvltrie: "⊴⃒",
                        nvrArr: "⤃",
                        nvrtrie: "⊵⃒",
                        nvsim: "∼⃒",
                        nwarhk: "⤣",
                        nwarr: "↖",
                        nwArr: "⇖",
                        nwarrow: "↖",
                        nwnear: "⤧",
                        oacute: "ó",
                        Oacute: "Ó",
                        oast: "⊛",
                        ocir: "⊚",
                        ocirc: "ô",
                        Ocirc: "Ô",
                        ocy: "о",
                        Ocy: "О",
                        odash: "⊝",
                        odblac: "ő",
                        Odblac: "Ő",
                        odiv: "⨸",
                        odot: "⊙",
                        odsold: "⦼",
                        oelig: "œ",
                        OElig: "Œ",
                        ofcir: "⦿",
                        ofr: "𝔬",
                        Ofr: "𝔒",
                        ogon: "˛",
                        ograve: "ò",
                        Ograve: "Ò",
                        ogt: "⧁",
                        ohbar: "⦵",
                        ohm: "Ω",
                        oint: "∮",
                        olarr: "↺",
                        olcir: "⦾",
                        olcross: "⦻",
                        oline: "‾",
                        olt: "⧀",
                        omacr: "ō",
                        Omacr: "Ō",
                        omega: "ω",
                        Omega: "Ω",
                        omicron: "ο",
                        Omicron: "Ο",
                        omid: "⦶",
                        ominus: "⊖",
                        oopf: "𝕠",
                        Oopf: "𝕆",
                        opar: "⦷",
                        OpenCurlyDoubleQuote: "“",
                        OpenCurlyQuote: "‘",
                        operp: "⦹",
                        oplus: "⊕",
                        or: "∨",
                        Or: "⩔",
                        orarr: "↻",
                        ord: "⩝",
                        order: "ℴ",
                        orderof: "ℴ",
                        ordf: "ª",
                        ordm: "º",
                        origof: "⊶",
                        oror: "⩖",
                        orslope: "⩗",
                        orv: "⩛",
                        oS: "Ⓢ",
                        oscr: "ℴ",
                        Oscr: "𝒪",
                        oslash: "ø",
                        Oslash: "Ø",
                        osol: "⊘",
                        otilde: "õ",
                        Otilde: "Õ",
                        otimes: "⊗",
                        Otimes: "⨷",
                        otimesas: "⨶",
                        ouml: "ö",
                        Ouml: "Ö",
                        ovbar: "⌽",
                        OverBar: "‾",
                        OverBrace: "⏞",
                        OverBracket: "⎴",
                        OverParenthesis: "⏜",
                        par: "∥",
                        para: "¶",
                        parallel: "∥",
                        parsim: "⫳",
                        parsl: "⫽",
                        part: "∂",
                        PartialD: "∂",
                        pcy: "п",
                        Pcy: "П",
                        percnt: "%",
                        period: ".",
                        permil: "‰",
                        perp: "⊥",
                        pertenk: "‱",
                        pfr: "𝔭",
                        Pfr: "𝔓",
                        phi: "φ",
                        Phi: "Φ",
                        phiv: "ϕ",
                        phmmat: "ℳ",
                        phone: "☎",
                        pi: "π",
                        Pi: "Π",
                        pitchfork: "⋔",
                        piv: "ϖ",
                        planck: "ℏ",
                        planckh: "ℎ",
                        plankv: "ℏ",
                        plus: "+",
                        plusacir: "⨣",
                        plusb: "⊞",
                        pluscir: "⨢",
                        plusdo: "∔",
                        plusdu: "⨥",
                        pluse: "⩲",
                        PlusMinus: "±",
                        plusmn: "±",
                        plussim: "⨦",
                        plustwo: "⨧",
                        pm: "±",
                        Poincareplane: "ℌ",
                        pointint: "⨕",
                        popf: "𝕡",
                        Popf: "ℙ",
                        pound: "£",
                        pr: "≺",
                        Pr: "⪻",
                        prap: "⪷",
                        prcue: "≼",
                        pre: "⪯",
                        prE: "⪳",
                        prec: "≺",
                        precapprox: "⪷",
                        preccurlyeq: "≼",
                        Precedes: "≺",
                        PrecedesEqual: "⪯",
                        PrecedesSlantEqual: "≼",
                        PrecedesTilde: "≾",
                        preceq: "⪯",
                        precnapprox: "⪹",
                        precneqq: "⪵",
                        precnsim: "⋨",
                        precsim: "≾",
                        prime: "′",
                        Prime: "″",
                        primes: "ℙ",
                        prnap: "⪹",
                        prnE: "⪵",
                        prnsim: "⋨",
                        prod: "∏",
                        Product: "∏",
                        profalar: "⌮",
                        profline: "⌒",
                        profsurf: "⌓",
                        prop: "∝",
                        Proportion: "∷",
                        Proportional: "∝",
                        propto: "∝",
                        prsim: "≾",
                        prurel: "⊰",
                        pscr: "𝓅",
                        Pscr: "𝒫",
                        psi: "ψ",
                        Psi: "Ψ",
                        puncsp: " ",
                        qfr: "𝔮",
                        Qfr: "𝔔",
                        qint: "⨌",
                        qopf: "𝕢",
                        Qopf: "ℚ",
                        qprime: "⁗",
                        qscr: "𝓆",
                        Qscr: "𝒬",
                        quaternions: "ℍ",
                        quatint: "⨖",
                        quest: "?",
                        questeq: "≟",
                        quot: '"',
                        QUOT: '"',
                        rAarr: "⇛",
                        race: "∽̱",
                        racute: "ŕ",
                        Racute: "Ŕ",
                        radic: "√",
                        raemptyv: "⦳",
                        rang: "⟩",
                        Rang: "⟫",
                        rangd: "⦒",
                        range: "⦥",
                        rangle: "⟩",
                        raquo: "»",
                        rarr: "→",
                        rArr: "⇒",
                        Rarr: "↠",
                        rarrap: "⥵",
                        rarrb: "⇥",
                        rarrbfs: "⤠",
                        rarrc: "⤳",
                        rarrfs: "⤞",
                        rarrhk: "↪",
                        rarrlp: "↬",
                        rarrpl: "⥅",
                        rarrsim: "⥴",
                        rarrtl: "↣",
                        Rarrtl: "⤖",
                        rarrw: "↝",
                        ratail: "⤚",
                        rAtail: "⤜",
                        ratio: "∶",
                        rationals: "ℚ",
                        rbarr: "⤍",
                        rBarr: "⤏",
                        RBarr: "⤐",
                        rbbrk: "❳",
                        rbrace: "}",
                        rbrack: "]",
                        rbrke: "⦌",
                        rbrksld: "⦎",
                        rbrkslu: "⦐",
                        rcaron: "ř",
                        Rcaron: "Ř",
                        rcedil: "ŗ",
                        Rcedil: "Ŗ",
                        rceil: "⌉",
                        rcub: "}",
                        rcy: "р",
                        Rcy: "Р",
                        rdca: "⤷",
                        rdldhar: "⥩",
                        rdquo: "”",
                        rdquor: "”",
                        rdsh: "↳",
                        Re: "ℜ",
                        real: "ℜ",
                        realine: "ℛ",
                        realpart: "ℜ",
                        reals: "ℝ",
                        rect: "▭",
                        reg: "®",
                        REG: "®",
                        ReverseElement: "∋",
                        ReverseEquilibrium: "⇋",
                        ReverseUpEquilibrium: "⥯",
                        rfisht: "⥽",
                        rfloor: "⌋",
                        rfr: "𝔯",
                        Rfr: "ℜ",
                        rHar: "⥤",
                        rhard: "⇁",
                        rharu: "⇀",
                        rharul: "⥬",
                        rho: "ρ",
                        Rho: "Ρ",
                        rhov: "ϱ",
                        RightAngleBracket: "⟩",
                        rightarrow: "→",
                        Rightarrow: "⇒",
                        RightArrow: "→",
                        RightArrowBar: "⇥",
                        RightArrowLeftArrow: "⇄",
                        rightarrowtail: "↣",
                        RightCeiling: "⌉",
                        RightDoubleBracket: "⟧",
                        RightDownTeeVector: "⥝",
                        RightDownVector: "⇂",
                        RightDownVectorBar: "⥕",
                        RightFloor: "⌋",
                        rightharpoondown: "⇁",
                        rightharpoonup: "⇀",
                        rightleftarrows: "⇄",
                        rightleftharpoons: "⇌",
                        rightrightarrows: "⇉",
                        rightsquigarrow: "↝",
                        RightTee: "⊢",
                        RightTeeArrow: "↦",
                        RightTeeVector: "⥛",
                        rightthreetimes: "⋌",
                        RightTriangle: "⊳",
                        RightTriangleBar: "⧐",
                        RightTriangleEqual: "⊵",
                        RightUpDownVector: "⥏",
                        RightUpTeeVector: "⥜",
                        RightUpVector: "↾",
                        RightUpVectorBar: "⥔",
                        RightVector: "⇀",
                        RightVectorBar: "⥓",
                        ring: "˚",
                        risingdotseq: "≓",
                        rlarr: "⇄",
                        rlhar: "⇌",
                        rlm: "‏",
                        rmoust: "⎱",
                        rmoustache: "⎱",
                        rnmid: "⫮",
                        roang: "⟭",
                        roarr: "⇾",
                        robrk: "⟧",
                        ropar: "⦆",
                        ropf: "𝕣",
                        Ropf: "ℝ",
                        roplus: "⨮",
                        rotimes: "⨵",
                        RoundImplies: "⥰",
                        rpar: ")",
                        rpargt: "⦔",
                        rppolint: "⨒",
                        rrarr: "⇉",
                        Rrightarrow: "⇛",
                        rsaquo: "›",
                        rscr: "𝓇",
                        Rscr: "ℛ",
                        rsh: "↱",
                        Rsh: "↱",
                        rsqb: "]",
                        rsquo: "’",
                        rsquor: "’",
                        rthree: "⋌",
                        rtimes: "⋊",
                        rtri: "▹",
                        rtrie: "⊵",
                        rtrif: "▸",
                        rtriltri: "⧎",
                        RuleDelayed: "⧴",
                        ruluhar: "⥨",
                        rx: "℞",
                        sacute: "ś",
                        Sacute: "Ś",
                        sbquo: "‚",
                        sc: "≻",
                        Sc: "⪼",
                        scap: "⪸",
                        scaron: "š",
                        Scaron: "Š",
                        sccue: "≽",
                        sce: "⪰",
                        scE: "⪴",
                        scedil: "ş",
                        Scedil: "Ş",
                        scirc: "ŝ",
                        Scirc: "Ŝ",
                        scnap: "⪺",
                        scnE: "⪶",
                        scnsim: "⋩",
                        scpolint: "⨓",
                        scsim: "≿",
                        scy: "с",
                        Scy: "С",
                        sdot: "⋅",
                        sdotb: "⊡",
                        sdote: "⩦",
                        searhk: "⤥",
                        searr: "↘",
                        seArr: "⇘",
                        searrow: "↘",
                        sect: "§",
                        semi: ";",
                        seswar: "⤩",
                        setminus: "∖",
                        setmn: "∖",
                        sext: "✶",
                        sfr: "𝔰",
                        Sfr: "𝔖",
                        sfrown: "⌢",
                        sharp: "♯",
                        shchcy: "щ",
                        SHCHcy: "Щ",
                        shcy: "ш",
                        SHcy: "Ш",
                        ShortDownArrow: "↓",
                        ShortLeftArrow: "←",
                        shortmid: "∣",
                        shortparallel: "∥",
                        ShortRightArrow: "→",
                        ShortUpArrow: "↑",
                        shy: "­",
                        sigma: "σ",
                        Sigma: "Σ",
                        sigmaf: "ς",
                        sigmav: "ς",
                        sim: "∼",
                        simdot: "⩪",
                        sime: "≃",
                        simeq: "≃",
                        simg: "⪞",
                        simgE: "⪠",
                        siml: "⪝",
                        simlE: "⪟",
                        simne: "≆",
                        simplus: "⨤",
                        simrarr: "⥲",
                        slarr: "←",
                        SmallCircle: "∘",
                        smallsetminus: "∖",
                        smashp: "⨳",
                        smeparsl: "⧤",
                        smid: "∣",
                        smile: "⌣",
                        smt: "⪪",
                        smte: "⪬",
                        smtes: "⪬︀",
                        softcy: "ь",
                        SOFTcy: "Ь",
                        sol: "/",
                        solb: "⧄",
                        solbar: "⌿",
                        sopf: "𝕤",
                        Sopf: "𝕊",
                        spades: "♠",
                        spadesuit: "♠",
                        spar: "∥",
                        sqcap: "⊓",
                        sqcaps: "⊓︀",
                        sqcup: "⊔",
                        sqcups: "⊔︀",
                        Sqrt: "√",
                        sqsub: "⊏",
                        sqsube: "⊑",
                        sqsubset: "⊏",
                        sqsubseteq: "⊑",
                        sqsup: "⊐",
                        sqsupe: "⊒",
                        sqsupset: "⊐",
                        sqsupseteq: "⊒",
                        squ: "□",
                        square: "□",
                        Square: "□",
                        SquareIntersection: "⊓",
                        SquareSubset: "⊏",
                        SquareSubsetEqual: "⊑",
                        SquareSuperset: "⊐",
                        SquareSupersetEqual: "⊒",
                        SquareUnion: "⊔",
                        squarf: "▪",
                        squf: "▪",
                        srarr: "→",
                        sscr: "𝓈",
                        Sscr: "𝒮",
                        ssetmn: "∖",
                        ssmile: "⌣",
                        sstarf: "⋆",
                        star: "☆",
                        Star: "⋆",
                        starf: "★",
                        straightepsilon: "ϵ",
                        straightphi: "ϕ",
                        strns: "¯",
                        sub: "⊂",
                        Sub: "⋐",
                        subdot: "⪽",
                        sube: "⊆",
                        subE: "⫅",
                        subedot: "⫃",
                        submult: "⫁",
                        subne: "⊊",
                        subnE: "⫋",
                        subplus: "⪿",
                        subrarr: "⥹",
                        subset: "⊂",
                        Subset: "⋐",
                        subseteq: "⊆",
                        subseteqq: "⫅",
                        SubsetEqual: "⊆",
                        subsetneq: "⊊",
                        subsetneqq: "⫋",
                        subsim: "⫇",
                        subsub: "⫕",
                        subsup: "⫓",
                        succ: "≻",
                        succapprox: "⪸",
                        succcurlyeq: "≽",
                        Succeeds: "≻",
                        SucceedsEqual: "⪰",
                        SucceedsSlantEqual: "≽",
                        SucceedsTilde: "≿",
                        succeq: "⪰",
                        succnapprox: "⪺",
                        succneqq: "⪶",
                        succnsim: "⋩",
                        succsim: "≿",
                        SuchThat: "∋",
                        sum: "∑",
                        Sum: "∑",
                        sung: "♪",
                        sup: "⊃",
                        Sup: "⋑",
                        sup1: "¹",
                        sup2: "²",
                        sup3: "³",
                        supdot: "⪾",
                        supdsub: "⫘",
                        supe: "⊇",
                        supE: "⫆",
                        supedot: "⫄",
                        Superset: "⊃",
                        SupersetEqual: "⊇",
                        suphsol: "⟉",
                        suphsub: "⫗",
                        suplarr: "⥻",
                        supmult: "⫂",
                        supne: "⊋",
                        supnE: "⫌",
                        supplus: "⫀",
                        supset: "⊃",
                        Supset: "⋑",
                        supseteq: "⊇",
                        supseteqq: "⫆",
                        supsetneq: "⊋",
                        supsetneqq: "⫌",
                        supsim: "⫈",
                        supsub: "⫔",
                        supsup: "⫖",
                        swarhk: "⤦",
                        swarr: "↙",
                        swArr: "⇙",
                        swarrow: "↙",
                        swnwar: "⤪",
                        szlig: "ß",
                        Tab: "\t",
                        target: "⌖",
                        tau: "τ",
                        Tau: "Τ",
                        tbrk: "⎴",
                        tcaron: "ť",
                        Tcaron: "Ť",
                        tcedil: "ţ",
                        Tcedil: "Ţ",
                        tcy: "т",
                        Tcy: "Т",
                        tdot: "⃛",
                        telrec: "⌕",
                        tfr: "𝔱",
                        Tfr: "𝔗",
                        there4: "∴",
                        therefore: "∴",
                        Therefore: "∴",
                        theta: "θ",
                        Theta: "Θ",
                        thetasym: "ϑ",
                        thetav: "ϑ",
                        thickapprox: "≈",
                        thicksim: "∼",
                        ThickSpace: "  ",
                        thinsp: " ",
                        ThinSpace: " ",
                        thkap: "≈",
                        thksim: "∼",
                        thorn: "þ",
                        THORN: "Þ",
                        tilde: "˜",
                        Tilde: "∼",
                        TildeEqual: "≃",
                        TildeFullEqual: "≅",
                        TildeTilde: "≈",
                        times: "×",
                        timesb: "⊠",
                        timesbar: "⨱",
                        timesd: "⨰",
                        tint: "∭",
                        toea: "⤨",
                        top: "⊤",
                        topbot: "⌶",
                        topcir: "⫱",
                        topf: "𝕥",
                        Topf: "𝕋",
                        topfork: "⫚",
                        tosa: "⤩",
                        tprime: "‴",
                        trade: "™",
                        TRADE: "™",
                        triangle: "▵",
                        triangledown: "▿",
                        triangleleft: "◃",
                        trianglelefteq: "⊴",
                        triangleq: "≜",
                        triangleright: "▹",
                        trianglerighteq: "⊵",
                        tridot: "◬",
                        trie: "≜",
                        triminus: "⨺",
                        TripleDot: "⃛",
                        triplus: "⨹",
                        trisb: "⧍",
                        tritime: "⨻",
                        trpezium: "⏢",
                        tscr: "𝓉",
                        Tscr: "𝒯",
                        tscy: "ц",
                        TScy: "Ц",
                        tshcy: "ћ",
                        TSHcy: "Ћ",
                        tstrok: "ŧ",
                        Tstrok: "Ŧ",
                        twixt: "≬",
                        twoheadleftarrow: "↞",
                        twoheadrightarrow: "↠",
                        uacute: "ú",
                        Uacute: "Ú",
                        uarr: "↑",
                        uArr: "⇑",
                        Uarr: "↟",
                        Uarrocir: "⥉",
                        ubrcy: "ў",
                        Ubrcy: "Ў",
                        ubreve: "ŭ",
                        Ubreve: "Ŭ",
                        ucirc: "û",
                        Ucirc: "Û",
                        ucy: "у",
                        Ucy: "У",
                        udarr: "⇅",
                        udblac: "ű",
                        Udblac: "Ű",
                        udhar: "⥮",
                        ufisht: "⥾",
                        ufr: "𝔲",
                        Ufr: "𝔘",
                        ugrave: "ù",
                        Ugrave: "Ù",
                        uHar: "⥣",
                        uharl: "↿",
                        uharr: "↾",
                        uhblk: "▀",
                        ulcorn: "⌜",
                        ulcorner: "⌜",
                        ulcrop: "⌏",
                        ultri: "◸",
                        umacr: "ū",
                        Umacr: "Ū",
                        uml: "¨",
                        UnderBar: "_",
                        UnderBrace: "⏟",
                        UnderBracket: "⎵",
                        UnderParenthesis: "⏝",
                        Union: "⋃",
                        UnionPlus: "⊎",
                        uogon: "ų",
                        Uogon: "Ų",
                        uopf: "𝕦",
                        Uopf: "𝕌",
                        uparrow: "↑",
                        Uparrow: "⇑",
                        UpArrow: "↑",
                        UpArrowBar: "⤒",
                        UpArrowDownArrow: "⇅",
                        updownarrow: "↕",
                        Updownarrow: "⇕",
                        UpDownArrow: "↕",
                        UpEquilibrium: "⥮",
                        upharpoonleft: "↿",
                        upharpoonright: "↾",
                        uplus: "⊎",
                        UpperLeftArrow: "↖",
                        UpperRightArrow: "↗",
                        upsi: "υ",
                        Upsi: "ϒ",
                        upsih: "ϒ",
                        upsilon: "υ",
                        Upsilon: "Υ",
                        UpTee: "⊥",
                        UpTeeArrow: "↥",
                        upuparrows: "⇈",
                        urcorn: "⌝",
                        urcorner: "⌝",
                        urcrop: "⌎",
                        uring: "ů",
                        Uring: "Ů",
                        urtri: "◹",
                        uscr: "𝓊",
                        Uscr: "𝒰",
                        utdot: "⋰",
                        utilde: "ũ",
                        Utilde: "Ũ",
                        utri: "▵",
                        utrif: "▴",
                        uuarr: "⇈",
                        uuml: "ü",
                        Uuml: "Ü",
                        uwangle: "⦧",
                        vangrt: "⦜",
                        varepsilon: "ϵ",
                        varkappa: "ϰ",
                        varnothing: "∅",
                        varphi: "ϕ",
                        varpi: "ϖ",
                        varpropto: "∝",
                        varr: "↕",
                        vArr: "⇕",
                        varrho: "ϱ",
                        varsigma: "ς",
                        varsubsetneq: "⊊︀",
                        varsubsetneqq: "⫋︀",
                        varsupsetneq: "⊋︀",
                        varsupsetneqq: "⫌︀",
                        vartheta: "ϑ",
                        vartriangleleft: "⊲",
                        vartriangleright: "⊳",
                        vBar: "⫨",
                        Vbar: "⫫",
                        vBarv: "⫩",
                        vcy: "в",
                        Vcy: "В",
                        vdash: "⊢",
                        vDash: "⊨",
                        Vdash: "⊩",
                        VDash: "⊫",
                        Vdashl: "⫦",
                        vee: "∨",
                        Vee: "⋁",
                        veebar: "⊻",
                        veeeq: "≚",
                        vellip: "⋮",
                        verbar: "|",
                        Verbar: "‖",
                        vert: "|",
                        Vert: "‖",
                        VerticalBar: "∣",
                        VerticalLine: "|",
                        VerticalSeparator: "❘",
                        VerticalTilde: "≀",
                        VeryThinSpace: " ",
                        vfr: "𝔳",
                        Vfr: "𝔙",
                        vltri: "⊲",
                        vnsub: "⊂⃒",
                        vnsup: "⊃⃒",
                        vopf: "𝕧",
                        Vopf: "𝕍",
                        vprop: "∝",
                        vrtri: "⊳",
                        vscr: "𝓋",
                        Vscr: "𝒱",
                        vsubne: "⊊︀",
                        vsubnE: "⫋︀",
                        vsupne: "⊋︀",
                        vsupnE: "⫌︀",
                        Vvdash: "⊪",
                        vzigzag: "⦚",
                        wcirc: "ŵ",
                        Wcirc: "Ŵ",
                        wedbar: "⩟",
                        wedge: "∧",
                        Wedge: "⋀",
                        wedgeq: "≙",
                        weierp: "℘",
                        wfr: "𝔴",
                        Wfr: "𝔚",
                        wopf: "𝕨",
                        Wopf: "𝕎",
                        wp: "℘",
                        wr: "≀",
                        wreath: "≀",
                        wscr: "𝓌",
                        Wscr: "𝒲",
                        xcap: "⋂",
                        xcirc: "◯",
                        xcup: "⋃",
                        xdtri: "▽",
                        xfr: "𝔵",
                        Xfr: "𝔛",
                        xharr: "⟷",
                        xhArr: "⟺",
                        xi: "ξ",
                        Xi: "Ξ",
                        xlarr: "⟵",
                        xlArr: "⟸",
                        xmap: "⟼",
                        xnis: "⋻",
                        xodot: "⨀",
                        xopf: "𝕩",
                        Xopf: "𝕏",
                        xoplus: "⨁",
                        xotime: "⨂",
                        xrarr: "⟶",
                        xrArr: "⟹",
                        xscr: "𝓍",
                        Xscr: "𝒳",
                        xsqcup: "⨆",
                        xuplus: "⨄",
                        xutri: "△",
                        xvee: "⋁",
                        xwedge: "⋀",
                        yacute: "ý",
                        Yacute: "Ý",
                        yacy: "я",
                        YAcy: "Я",
                        ycirc: "ŷ",
                        Ycirc: "Ŷ",
                        ycy: "ы",
                        Ycy: "Ы",
                        yen: "¥",
                        yfr: "𝔶",
                        Yfr: "𝔜",
                        yicy: "ї",
                        YIcy: "Ї",
                        yopf: "𝕪",
                        Yopf: "𝕐",
                        yscr: "𝓎",
                        Yscr: "𝒴",
                        yucy: "ю",
                        YUcy: "Ю",
                        yuml: "ÿ",
                        Yuml: "Ÿ",
                        zacute: "ź",
                        Zacute: "Ź",
                        zcaron: "ž",
                        Zcaron: "Ž",
                        zcy: "з",
                        Zcy: "З",
                        zdot: "ż",
                        Zdot: "Ż",
                        zeetrf: "ℨ",
                        ZeroWidthSpace: "​",
                        zeta: "ζ",
                        Zeta: "Ζ",
                        zfr: "𝔷",
                        Zfr: "ℨ",
                        zhcy: "ж",
                        ZHcy: "Ж",
                        zigrarr: "⇝",
                        zopf: "𝕫",
                        Zopf: "ℤ",
                        zscr: "𝓏",
                        Zscr: "𝒵",
                        zwj: "‍",
                        zwnj: "‌",
                    },
                    b = {
                        aacute: "á",
                        Aacute: "Á",
                        acirc: "â",
                        Acirc: "Â",
                        acute: "´",
                        aelig: "æ",
                        AElig: "Æ",
                        agrave: "à",
                        Agrave: "À",
                        amp: "&",
                        AMP: "&",
                        aring: "å",
                        Aring: "Å",
                        atilde: "ã",
                        Atilde: "Ã",
                        auml: "ä",
                        Auml: "Ä",
                        brvbar: "¦",
                        ccedil: "ç",
                        Ccedil: "Ç",
                        cedil: "¸",
                        cent: "¢",
                        copy: "©",
                        COPY: "©",
                        curren: "¤",
                        deg: "°",
                        divide: "÷",
                        eacute: "é",
                        Eacute: "É",
                        ecirc: "ê",
                        Ecirc: "Ê",
                        egrave: "è",
                        Egrave: "È",
                        eth: "ð",
                        ETH: "Ð",
                        euml: "ë",
                        Euml: "Ë",
                        frac12: "½",
                        frac14: "¼",
                        frac34: "¾",
                        gt: ">",
                        GT: ">",
                        iacute: "í",
                        Iacute: "Í",
                        icirc: "î",
                        Icirc: "Î",
                        iexcl: "¡",
                        igrave: "ì",
                        Igrave: "Ì",
                        iquest: "¿",
                        iuml: "ï",
                        Iuml: "Ï",
                        laquo: "«",
                        lt: "<",
                        LT: "<",
                        macr: "¯",
                        micro: "µ",
                        middot: "·",
                        nbsp: " ",
                        not: "¬",
                        ntilde: "ñ",
                        Ntilde: "Ñ",
                        oacute: "ó",
                        Oacute: "Ó",
                        ocirc: "ô",
                        Ocirc: "Ô",
                        ograve: "ò",
                        Ograve: "Ò",
                        ordf: "ª",
                        ordm: "º",
                        oslash: "ø",
                        Oslash: "Ø",
                        otilde: "õ",
                        Otilde: "Õ",
                        ouml: "ö",
                        Ouml: "Ö",
                        para: "¶",
                        plusmn: "±",
                        pound: "£",
                        quot: '"',
                        QUOT: '"',
                        raquo: "»",
                        reg: "®",
                        REG: "®",
                        sect: "§",
                        shy: "­",
                        sup1: "¹",
                        sup2: "²",
                        sup3: "³",
                        szlig: "ß",
                        thorn: "þ",
                        THORN: "Þ",
                        times: "×",
                        uacute: "ú",
                        Uacute: "Ú",
                        ucirc: "û",
                        Ucirc: "Û",
                        ugrave: "ù",
                        Ugrave: "Ù",
                        uml: "¨",
                        uuml: "ü",
                        Uuml: "Ü",
                        yacute: "ý",
                        Yacute: "Ý",
                        yen: "¥",
                        yuml: "ÿ",
                    },
                    w = {
                        0: "�",
                        128: "€",
                        130: "‚",
                        131: "ƒ",
                        132: "„",
                        133: "…",
                        134: "†",
                        135: "‡",
                        136: "ˆ",
                        137: "‰",
                        138: "Š",
                        139: "‹",
                        140: "Œ",
                        142: "Ž",
                        145: "‘",
                        146: "’",
                        147: "“",
                        148: "”",
                        149: "•",
                        150: "–",
                        151: "—",
                        152: "˜",
                        153: "™",
                        154: "š",
                        155: "›",
                        156: "œ",
                        158: "ž",
                        159: "Ÿ",
                    },
                    E = [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        11,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25,
                        26,
                        27,
                        28,
                        29,
                        30,
                        31,
                        127,
                        128,
                        129,
                        130,
                        131,
                        132,
                        133,
                        134,
                        135,
                        136,
                        137,
                        138,
                        139,
                        140,
                        141,
                        142,
                        143,
                        144,
                        145,
                        146,
                        147,
                        148,
                        149,
                        150,
                        151,
                        152,
                        153,
                        154,
                        155,
                        156,
                        157,
                        158,
                        159,
                        64976,
                        64977,
                        64978,
                        64979,
                        64980,
                        64981,
                        64982,
                        64983,
                        64984,
                        64985,
                        64986,
                        64987,
                        64988,
                        64989,
                        64990,
                        64991,
                        64992,
                        64993,
                        64994,
                        64995,
                        64996,
                        64997,
                        64998,
                        64999,
                        65e3,
                        65001,
                        65002,
                        65003,
                        65004,
                        65005,
                        65006,
                        65007,
                        65534,
                        65535,
                        131070,
                        131071,
                        196606,
                        196607,
                        262142,
                        262143,
                        327678,
                        327679,
                        393214,
                        393215,
                        458750,
                        458751,
                        524286,
                        524287,
                        589822,
                        589823,
                        655358,
                        655359,
                        720894,
                        720895,
                        786430,
                        786431,
                        851966,
                        851967,
                        917502,
                        917503,
                        983038,
                        983039,
                        1048574,
                        1048575,
                        1114110,
                        1114111,
                    ],
                    C = String.fromCharCode,
                    x = {},
                    k = x.hasOwnProperty,
                    S = function (e, t) {
                        return k.call(e, t);
                    },
                    _ = function (e, t) {
                        for (var r = -1, n = e.length; ++r < n; ) if (e[r] == t) return !0;
                        return !1;
                    },
                    A = function (e, t) {
                        if (!e) return t;
                        var r,
                            n = {};
                        for (r in t) n[r] = S(e, r) ? e[r] : t[r];
                        return n;
                    },
                    D = function (e, t) {
                        var r = "";
                        return (e >= 55296 && e <= 57343) || e > 1114111
                            ? (t && q("character reference outside the permissible Unicode range"), "�")
                            : S(w, e)
                            ? (t && q("disallowed character reference"), w[e])
                            : (t && _(E, e) && q("disallowed character reference"), e > 65535 && ((e -= 65536), (r += C(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), (r += C(e)));
                    },
                    T = function (e) {
                        return "&#x" + e.toString(16).toUpperCase() + ";";
                    },
                    N = function (e) {
                        return "&#" + e + ";";
                    },
                    q = function (e) {
                        throw Error("Parse error: " + e);
                    },
                    P = function (e, t) {
                        (t = A(t, P.options)), t.strict && g.test(e) && q("forbidden code point");
                        var r = t.encodeEverything,
                            n = t.useNamedReferences,
                            o = t.allowUnsafeSymbols,
                            a = t.decimal ? N : T,
                            i = function (e) {
                                return a(e.charCodeAt(0));
                            };
                        return (
                            r
                                ? ((e = e.replace(c, function (e) {
                                      return n && S(d, e) ? "&" + d[e] + ";" : i(e);
                                  })),
                                  n &&
                                      (e = e
                                          .replace(/&gt;\u20D2/g, "&nvgt;")
                                          .replace(/&lt;\u20D2/g, "&nvlt;")
                                          .replace(/&#x66;&#x6A;/g, "&fjlig;")),
                                  n &&
                                      (e = e.replace(p, function (e) {
                                          return "&" + d[e] + ";";
                                      })))
                                : n
                                ? (o ||
                                      (e = e.replace(f, function (e) {
                                          return "&" + d[e] + ";";
                                      })),
                                  (e = e.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;")),
                                  (e = e.replace(p, function (e) {
                                      return "&" + d[e] + ";";
                                  })))
                                : o || (e = e.replace(f, i)),
                            e
                                .replace(u, function (e) {
                                    var t = e.charCodeAt(0),
                                        r = e.charCodeAt(1);
                                    return a(1024 * (t - 55296) + r - 56320 + 65536);
                                })
                                .replace(l, i)
                        );
                    };
                P.options = { allowUnsafeSymbols: !1, encodeEverything: !1, strict: !1, useNamedReferences: !1, decimal: !1 };
                var R = function (e, t) {
                    t = A(t, R.options);
                    var r = t.strict;
                    return (
                        r && m.test(e) && q("malformed character reference"),
                        e.replace(v, function (e, n, o, a, i, s, u, c, l) {
                            var p, d, f, h, m, g;
                            return n
                                ? ((m = n), y[m])
                                : o
                                ? ((m = o), (g = a), g && t.isAttributeValue ? (r && "=" == g && q("`&` did not start a character reference"), e) : (r && q("named character reference was not terminated by a semicolon"), b[m] + (g || "")))
                                : i
                                ? ((f = i), (d = s), r && !d && q("character reference was not terminated by a semicolon"), (p = parseInt(f, 10)), D(p, r))
                                : u
                                ? ((h = u), (d = c), r && !d && q("character reference was not terminated by a semicolon"), (p = parseInt(h, 16)), D(p, r))
                                : (r && q("named character reference was not terminated by a semicolon"), e);
                        })
                    );
                };
                R.options = { isAttributeValue: !1, strict: !1 };
                var I = function (e) {
                        return e.replace(f, function (e) {
                            return h[e];
                        });
                    },
                    L = { version: "1.2.0", encode: P, decode: R, escape: I, unescape: R };
                void 0 !==
                    (o = function () {
                        return L;
                    }.call(t, r, t, e)) && (e.exports = o);
            })();
        }.call(t, r(180)(e), r(181)));
    },
    function (e, t, r) {
        "use strict";
        e.exports = r(12);
    },
    function (e, t, r) {
        "use strict";
        var n = {};
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n() {
            if (s)
                for (var e in u) {
                    var t = u[e],
                        r = s.indexOf(e);
                    if ((r > -1 || i("96", e), !c.plugins[r])) {
                        t.extractEvents || i("97", e), (c.plugins[r] = t);
                        var n = t.eventTypes;
                        for (var a in n) o(n[a], t, a) || i("98", a, e);
                    }
                }
        }
        function o(e, t, r) {
            c.eventNameDispatchConfigs.hasOwnProperty(r) && i("99", r), (c.eventNameDispatchConfigs[r] = e);
            var n = e.phasedRegistrationNames;
            if (n) {
                for (var o in n)
                    if (n.hasOwnProperty(o)) {
                        var s = n[o];
                        a(s, t, r);
                    }
                return !0;
            }
            return !!e.registrationName && (a(e.registrationName, t, r), !0);
        }
        function a(e, t, r) {
            c.registrationNameModules[e] && i("100", e), (c.registrationNameModules[e] = t), (c.registrationNameDependencies[e] = t.eventTypes[r].dependencies);
        }
        var i = r(1),
            s = (r(0), null),
            u = {},
            c = {
                plugins: [],
                eventNameDispatchConfigs: {},
                registrationNameModules: {},
                registrationNameDependencies: {},
                possibleRegistrationNames: null,
                injectEventPluginOrder: function (e) {
                    s && i("101"), (s = Array.prototype.slice.call(e)), n();
                },
                injectEventPluginsByName: function (e) {
                    var t = !1;
                    for (var r in e)
                        if (e.hasOwnProperty(r)) {
                            var o = e[r];
                            (u.hasOwnProperty(r) && u[r] === o) || (u[r] && i("102", r), (u[r] = o), (t = !0));
                        }
                    t && n();
                },
                getPluginModuleForEvent: function (e) {
                    var t = e.dispatchConfig;
                    if (t.registrationName) return c.registrationNameModules[t.registrationName] || null;
                    if (void 0 !== t.phasedRegistrationNames) {
                        var r = t.phasedRegistrationNames;
                        for (var n in r)
                            if (r.hasOwnProperty(n)) {
                                var o = c.registrationNameModules[r[n]];
                                if (o) return o;
                            }
                    }
                    return null;
                },
                _resetEventPlugins: function () {
                    s = null;
                    for (var e in u) u.hasOwnProperty(e) && delete u[e];
                    c.plugins.length = 0;
                    var t = c.eventNameDispatchConfigs;
                    for (var r in t) t.hasOwnProperty(r) && delete t[r];
                    var n = c.registrationNameModules;
                    for (var o in n) n.hasOwnProperty(o) && delete n[o];
                },
            };
        e.exports = c;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return "topMouseUp" === e || "topTouchEnd" === e || "topTouchCancel" === e;
        }
        function o(e) {
            return "topMouseMove" === e || "topTouchMove" === e;
        }
        function a(e) {
            return "topMouseDown" === e || "topTouchStart" === e;
        }
        function i(e, t, r, n) {
            var o = e.type || "unknown-event";
            (e.currentTarget = v.getNodeFromInstance(n)), t ? m.invokeGuardedCallbackWithCatch(o, r, e) : m.invokeGuardedCallback(o, r, e), (e.currentTarget = null);
        }
        function s(e, t) {
            var r = e._dispatchListeners,
                n = e._dispatchInstances;
            if (Array.isArray(r)) for (var o = 0; o < r.length && !e.isPropagationStopped(); o++) i(e, t, r[o], n[o]);
            else r && i(e, t, r, n);
            (e._dispatchListeners = null), (e._dispatchInstances = null);
        }
        function u(e) {
            var t = e._dispatchListeners,
                r = e._dispatchInstances;
            if (Array.isArray(t)) {
                for (var n = 0; n < t.length && !e.isPropagationStopped(); n++) if (t[n](e, r[n])) return r[n];
            } else if (t && t(e, r)) return r;
            return null;
        }
        function c(e) {
            var t = u(e);
            return (e._dispatchInstances = null), (e._dispatchListeners = null), t;
        }
        function l(e) {
            var t = e._dispatchListeners,
                r = e._dispatchInstances;
            Array.isArray(t) && h("103"), (e.currentTarget = t ? v.getNodeFromInstance(r) : null);
            var n = t ? t(e) : null;
            return (e.currentTarget = null), (e._dispatchListeners = null), (e._dispatchInstances = null), n;
        }
        function p(e) {
            return !!e._dispatchListeners;
        }
        var d,
            f,
            h = r(1),
            m = r(32),
            g =
                (r(0),
                r(2),
                {
                    injectComponentTree: function (e) {
                        d = e;
                    },
                    injectTreeTraversal: function (e) {
                        f = e;
                    },
                }),
            v = {
                isEndish: n,
                isMoveish: o,
                isStartish: a,
                executeDirectDispatch: l,
                executeDispatchesInOrder: s,
                executeDispatchesInOrderStopAtTrue: c,
                hasDispatches: p,
                getInstanceFromNode: function (e) {
                    return d.getInstanceFromNode(e);
                },
                getNodeFromInstance: function (e) {
                    return d.getNodeFromInstance(e);
                },
                isAncestor: function (e, t) {
                    return f.isAncestor(e, t);
                },
                getLowestCommonAncestor: function (e, t) {
                    return f.getLowestCommonAncestor(e, t);
                },
                getParentInstance: function (e) {
                    return f.getParentInstance(e);
                },
                traverseTwoPhase: function (e, t, r) {
                    return f.traverseTwoPhase(e, t, r);
                },
                traverseEnterLeave: function (e, t, r, n, o) {
                    return f.traverseEnterLeave(e, t, r, n, o);
                },
                injection: g,
            };
        e.exports = v;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r) {
            try {
                t(r);
            } catch (e) {
                null === o && (o = e);
            }
        }
        var o = null,
            a = {
                invokeGuardedCallback: n,
                invokeGuardedCallbackWithCatch: n,
                rethrowCaughtError: function () {
                    if (o) {
                        var e = o;
                        throw ((o = null), e);
                    }
                },
            };
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e.target || e.srcElement || window;
            return t.correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t;
        }
        e.exports = n;
    },
    function (e, t, r) {
        "use strict"
        /**
         * Checks if an event is supported in the current execution environment.
         *
         * NOTE: This will not work correctly for non-generic events such as `change`,
         * `reset`, `load`, `error`, and `select`.
         *
         * Borrows from Modernizr.
         *
         * @param {string} eventNameSuffix Event name, e.g. "click".
         * @param {?boolean} capture Check if the capture phase is supported.
         * @return {boolean} True if the event is supported.
         * @internal
         * @license Modernizr 3.0.0pre (Custom Build) | MIT
         */;
        function n(e, t) {
            if (!a.canUseDOM || (t && !("addEventListener" in document))) return !1;
            var r = "on" + e,
                n = r in document;
            if (!n) {
                var i = document.createElement("div");
                i.setAttribute(r, "return;"), (n = "function" == typeof i[r]);
            }
            return !n && o && "wheel" === e && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n;
        }
        var o,
            a = r(5);
        a.canUseDOM && (o = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "")), (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = this,
                r = t.nativeEvent;
            if (r.getModifierState) return r.getModifierState(e);
            var n = a[e];
            return !!n && !!r[n];
        }
        function o(e) {
            return n;
        }
        var a = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        e.exports = o;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            return Array.isArray(t) && (t = t[1]), t ? t.nextSibling : e.firstChild;
        }
        function o(e, t, r) {
            l.insertTreeBefore(e, t, r);
        }
        function a(e, t, r) {
            Array.isArray(t) ? s(e, t[0], t[1], r) : m(e, t, r);
        }
        function i(e, t) {
            if (Array.isArray(t)) {
                var r = t[1];
                (t = t[0]), u(e, t, r), e.removeChild(r);
            }
            e.removeChild(t);
        }
        function s(e, t, r, n) {
            for (var o = t; ; ) {
                var a = o.nextSibling;
                if ((m(e, o, n), o === r)) break;
                o = a;
            }
        }
        function u(e, t, r) {
            for (;;) {
                var n = t.nextSibling;
                if (n === r) break;
                e.removeChild(n);
            }
        }
        function c(e, t, r) {
            var n = e.parentNode,
                o = e.nextSibling;
            o === t ? r && m(n, document.createTextNode(r), o) : r ? (h(o, r), u(n, o, t)) : u(n, e, t);
        }
        var l = r(16),
            p = r(115),
            d = (r(4), r(6), r(38)),
            f = r(24),
            h = r(63),
            m = d(function (e, t, r) {
                e.insertBefore(t, r);
            }),
            g = p.dangerouslyReplaceNodeWithMarkup,
            v = {
                dangerouslyReplaceNodeWithMarkup: g,
                replaceDelimitedText: c,
                processUpdates: function (e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var s = t[r];
                        switch (s.type) {
                            case "INSERT_MARKUP":
                                o(e, s.content, n(e, s.afterNode));
                                break;
                            case "MOVE_EXISTING":
                                a(e, s.fromNode, n(e, s.afterNode));
                                break;
                            case "SET_MARKUP":
                                f(e, s.content);
                                break;
                            case "TEXT_CONTENT":
                                h(e, s.content);
                                break;
                            case "REMOVE_NODE":
                                i(e, s.fromNode);
                        }
                    }
                },
            };
        e.exports = v;
    },
    function (e, t, r) {
        "use strict";
        var n = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        var n = function (e) {
            return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
                ? function (t, r, n, o) {
                      MSApp.execUnsafeLocalFunction(function () {
                          return e(t, r, n, o);
                      });
                  }
                : e;
        };
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            null != e.checkedLink && null != e.valueLink && s("87");
        }
        function o(e) {
            n(e), (null != e.value || null != e.onChange) && s("88");
        }
        function a(e) {
            n(e), (null != e.checked || null != e.onChange) && s("89");
        }
        function i(e) {
            if (e) {
                var t = e.getName();
                if (t) return " Check the render method of `" + t + "`.";
            }
            return "";
        }
        var s = r(1),
            u = r(133),
            c = r(53),
            l = r(12),
            p = c(l.isValidElement),
            d = (r(0), r(2), { button: !0, checkbox: !0, image: !0, hidden: !0, radio: !0, reset: !0, submit: !0 }),
            f = {
                value: function (e, t, r) {
                    return !e[t] || d[e.type] || e.onChange || e.readOnly || e.disabled
                        ? null
                        : new Error(
                              "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
                          );
                },
                checked: function (e, t, r) {
                    return !e[t] || e.onChange || e.readOnly || e.disabled
                        ? null
                        : new Error(
                              "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
                          );
                },
                onChange: p.func,
            },
            h = {},
            m = {
                checkPropTypes: function (e, t, r) {
                    for (var n in f) {
                        if (f.hasOwnProperty(n)) var o = f[n](t, n, e, "prop", null, u);
                        if (o instanceof Error && !(o.message in h)) {
                            h[o.message] = !0;
                            i(r);
                        }
                    }
                },
                getValue: function (e) {
                    return e.valueLink ? (o(e), e.valueLink.value) : e.value;
                },
                getChecked: function (e) {
                    return e.checkedLink ? (a(e), e.checkedLink.value) : e.checked;
                },
                executeOnChange: function (e, t) {
                    return e.valueLink ? (o(e), e.valueLink.requestChange(t.target.value)) : e.checkedLink ? (a(e), e.checkedLink.requestChange(t.target.checked)) : e.onChange ? e.onChange.call(void 0, t) : void 0;
                },
            };
        e.exports = m;
    },
    function (e, t, r) {
        "use strict";
        var n = r(1),
            o = (r(0), !1),
            a = {
                replaceNodeWithMarkup: null,
                processChildrenUpdates: null,
                injection: {
                    injectEnvironment: function (e) {
                        o && n("104"), (a.replaceNodeWithMarkup = e.replaceNodeWithMarkup), (a.processChildrenUpdates = e.processChildrenUpdates), (o = !0);
                    },
                },
            };
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e !== e && t !== t;
        }
        function o(e, t) {
            if (n(e, t)) return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
            var r = Object.keys(e),
                o = Object.keys(t);
            if (r.length !== o.length) return !1;
            for (var i = 0; i < r.length; i++) if (!a.call(t, r[i]) || !n(e[r[i]], t[r[i]])) return !1;
            return !0;
        }
        var a = Object.prototype.hasOwnProperty;
        e.exports = o;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            var r = null === e || !1 === e,
                n = null === t || !1 === t;
            if (r || n) return r === n;
            var o = typeof e,
                a = typeof t;
            return "string" === o || "number" === o ? "string" === a || "number" === a : "object" === a && e.type === t.type && e.key === t.key;
        }
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = { "=": "=0", ":": "=2" };
            return (
                "$" +
                ("" + e).replace(/[=:]/g, function (e) {
                    return t[e];
                })
            );
        }
        function o(e) {
            var t = /(=0|=2)/g,
                r = { "=0": "=", "=2": ":" };
            return ("" + ("." === e[0] && "$" === e[1] ? e.substring(2) : e.substring(1))).replace(t, function (e) {
                return r[e];
            });
        }
        var a = { escape: n, unescape: o };
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            u.enqueueUpdate(e);
        }
        function o(e) {
            var t = typeof e;
            if ("object" !== t) return t;
            var r = (e.constructor && e.constructor.name) || t,
                n = Object.keys(e);
            return n.length > 0 && n.length < 20 ? r + " (keys: " + n.join(", ") + ")" : r;
        }
        function a(e, t) {
            var r = s.get(e);
            if (!r) {
                return null;
            }
            return r;
        }
        var i = r(1),
            s = (r(9), r(21)),
            u = (r(6), r(8)),
            c =
                (r(0),
                r(2),
                {
                    isMounted: function (e) {
                        var t = s.get(e);
                        return !!t && !!t._renderedComponent;
                    },
                    enqueueCallback: function (e, t, r) {
                        c.validateCallback(t, r);
                        var o = a(e);
                        if (!o) return null;
                        o._pendingCallbacks ? o._pendingCallbacks.push(t) : (o._pendingCallbacks = [t]), n(o);
                    },
                    enqueueCallbackInternal: function (e, t) {
                        e._pendingCallbacks ? e._pendingCallbacks.push(t) : (e._pendingCallbacks = [t]), n(e);
                    },
                    enqueueForceUpdate: function (e) {
                        var t = a(e, "forceUpdate");
                        t && ((t._pendingForceUpdate = !0), n(t));
                    },
                    enqueueReplaceState: function (e, t, r) {
                        var o = a(e, "replaceState");
                        o &&
                            ((o._pendingStateQueue = [t]),
                            (o._pendingReplaceState = !0),
                            void 0 !== r && null !== r && (c.validateCallback(r, "replaceState"), o._pendingCallbacks ? o._pendingCallbacks.push(r) : (o._pendingCallbacks = [r])),
                            n(o));
                    },
                    enqueueSetState: function (e, t) {
                        var r = a(e, "setState");
                        if (r) {
                            (r._pendingStateQueue || (r._pendingStateQueue = [])).push(t), n(r);
                        }
                    },
                    enqueueElementInternal: function (e, t, r) {
                        (e._pendingElement = t), (e._context = r), n(e);
                    },
                    validateCallback: function (e, t) {
                        e && "function" != typeof e && i("122", t, o(e));
                    },
                });
        e.exports = c;
    },
    function (e, t, r) {
        "use strict";
        var n = (r(3), r(7)),
            o = (r(2), n);
        e.exports = o;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t,
                r = e.keyCode;
            return "charCode" in e ? 0 === (t = e.charCode) && 13 === r && (t = 13) : (t = r), t >= 32 || 13 === t ? t : 0;
        }
        e.exports = n;
    },
    function (e, t) {
        e.exports = function () {
            var e = [];
            return (
                (e.toString = function () {
                    for (var e = [], t = 0; t < this.length; t++) {
                        var r = this[t];
                        r[2] ? e.push("@media " + r[2] + "{" + r[1] + "}") : e.push(r[1]);
                    }
                    return e.join("");
                }),
                (e.i = function (t, r) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    for (var n = {}, o = 0; o < this.length; o++) {
                        var a = this[o][0];
                        "number" == typeof a && (n[a] = !0);
                    }
                    for (o = 0; o < t.length; o++) {
                        var i = t[o];
                        ("number" == typeof i[0] && n[i[0]]) || (r && !i[2] ? (i[2] = r) : r && (i[2] = "(" + i[2] + ") and (" + r + ")"), e.push(i));
                    }
                }),
                e
            );
        };
    },
    function (e, t) {
        function r(e, t) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r],
                    o = d[n.id];
                if (o) {
                    o.refs++;
                    for (var a = 0; a < o.parts.length; a++) o.parts[a](n.parts[a]);
                    for (; a < n.parts.length; a++) o.parts.push(u(n.parts[a], t));
                } else {
                    for (var i = [], a = 0; a < n.parts.length; a++) i.push(u(n.parts[a], t));
                    d[n.id] = { id: n.id, refs: 1, parts: i };
                }
            }
        }
        function n(e) {
            for (var t = [], r = {}, n = 0; n < e.length; n++) {
                var o = e[n],
                    a = o[0],
                    i = o[1],
                    s = o[2],
                    u = o[3],
                    c = { css: i, media: s, sourceMap: u };
                r[a] ? r[a].parts.push(c) : t.push((r[a] = { id: a, parts: [c] }));
            }
            return t;
        }
        function o(e, t) {
            var r = m(),
                n = y[y.length - 1];
            if ("top" === e.insertAt) n ? (n.nextSibling ? r.insertBefore(t, n.nextSibling) : r.appendChild(t)) : r.insertBefore(t, r.firstChild), y.push(t);
            else {
                if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                r.appendChild(t);
            }
        }
        function a(e) {
            e.parentNode.removeChild(e);
            var t = y.indexOf(e);
            t >= 0 && y.splice(t, 1);
        }
        function i(e) {
            var t = document.createElement("style");
            return (t.type = "text/css"), o(e, t), t;
        }
        function s(e) {
            var t = document.createElement("link");
            return (t.rel = "stylesheet"), o(e, t), t;
        }
        function u(e, t) {
            var r, n, o;
            if (t.singleton) {
                var u = v++;
                (r = g || (g = i(t))), (n = c.bind(null, r, u, !1)), (o = c.bind(null, r, u, !0));
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa
                    ? ((r = s(t)),
                      (n = p.bind(null, r)),
                      (o = function () {
                          a(r), r.href && URL.revokeObjectURL(r.href);
                      }))
                    : ((r = i(t)),
                      (n = l.bind(null, r)),
                      (o = function () {
                          a(r);
                      }));
            return (
                n(e),
                function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        n((e = t));
                    } else o();
                }
            );
        }
        function c(e, t, r, n) {
            var o = r ? "" : n.css;
            if (e.styleSheet) e.styleSheet.cssText = b(t, o);
            else {
                var a = document.createTextNode(o),
                    i = e.childNodes;
                i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
            }
        }
        function l(e, t) {
            var r = t.css,
                n = t.media;
            if ((n && e.setAttribute("media", n), e.styleSheet)) e.styleSheet.cssText = r;
            else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(r));
            }
        }
        function p(e, t) {
            var r = t.css,
                n = t.sourceMap;
            n && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
            var o = new Blob([r], { type: "text/css" }),
                a = e.href;
            (e.href = URL.createObjectURL(o)), a && URL.revokeObjectURL(a);
        }
        var d = {},
            f = function (e) {
                var t;
                return function () {
                    return void 0 === t && (t = e.apply(this, arguments)), t;
                };
            },
            h = f(function () {
                return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
            }),
            m = f(function () {
                return document.head || document.getElementsByTagName("head")[0];
            }),
            g = null,
            v = 0,
            y = [];
        e.exports = function (e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}), void 0 === t.singleton && (t.singleton = h()), void 0 === t.insertAt && (t.insertAt = "bottom");
            var o = n(e);
            return (
                r(o, t),
                function (e) {
                    for (var a = [], i = 0; i < o.length; i++) {
                        var s = o[i],
                            u = d[s.id];
                        u.refs--, a.push(u);
                    }
                    if (e) {
                        r(n(e), t);
                    }
                    for (var i = 0; i < a.length; i++) {
                        var u = a[i];
                        if (0 === u.refs) {
                            for (var c = 0; c < u.parts.length; c++) u.parts[c]();
                            delete d[u.id];
                        }
                    }
                }
            );
        };
        var b = (function () {
            var e = [];
            return function (t, r) {
                return (e[t] = r), e.filter(Boolean).join("\n");
            };
        })();
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r) {
            (this.props = e), (this.context = t), (this.refs = c), (this.updater = r || u);
        }
        function o(e, t, r) {
            (this.props = e), (this.context = t), (this.refs = c), (this.updater = r || u);
        }
        function a() {}
        var i = r(17),
            s = r(3),
            u = r(50),
            c = (r(51), r(29));
        r(0), r(83);
        (n.prototype.isReactComponent = {}),
            (n.prototype.setState = function (e, t) {
                "object" != typeof e && "function" != typeof e && null != e && i("85"), this.updater.enqueueSetState(this, e), t && this.updater.enqueueCallback(this, t, "setState");
            }),
            (n.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this), e && this.updater.enqueueCallback(this, e, "forceUpdate");
            });
        (a.prototype = n.prototype), (o.prototype = new a()), (o.prototype.constructor = o), s(o.prototype, n.prototype), (o.prototype.isPureReactComponent = !0), (e.exports = { Component: n, PureComponent: o });
    },
    function (e, t, r) {
        "use strict";
        var n =
            (r(2),
            {
                isMounted: function (e) {
                    return !1;
                },
                enqueueCallback: function (e, t) {},
                enqueueForceUpdate: function (e) {},
                enqueueReplaceState: function (e, t) {},
                enqueueSetState: function (e, t) {},
            });
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        var n = !1;
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        var n = ("function" == typeof Symbol && Symbol.for && Symbol.for("react.element")) || 60103;
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        var n = r(91);
        e.exports = function (e) {
            return n(e, !1);
        };
    },
    function (e, t, r) {
        "use strict";
        var n = { hasCachedChildNodes: 1 };
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            return null == t && o("30"), null == e ? t : Array.isArray(e) ? (Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e)) : Array.isArray(t) ? [e].concat(t) : [e, t];
        }
        var o = r(1);
        r(0);
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r) {
            Array.isArray(e) ? e.forEach(t, r) : e && t.call(r, e);
        }
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n() {
            return !a && o.canUseDOM && (a = "textContent" in document.documentElement ? "textContent" : "innerText"), a;
        }
        var o = r(5),
            a = null;
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var o = r(1),
            a = r(11),
            i =
                (r(0),
                (function () {
                    function e(t) {
                        n(this, e), (this._callbacks = null), (this._contexts = null), (this._arg = t);
                    }
                    return (
                        (e.prototype.enqueue = function (e, t) {
                            (this._callbacks = this._callbacks || []), this._callbacks.push(e), (this._contexts = this._contexts || []), this._contexts.push(t);
                        }),
                        (e.prototype.notifyAll = function () {
                            var e = this._callbacks,
                                t = this._contexts,
                                r = this._arg;
                            if (e && t) {
                                e.length !== t.length && o("24"), (this._callbacks = null), (this._contexts = null);
                                for (var n = 0; n < e.length; n++) e[n].call(t[n], r);
                                (e.length = 0), (t.length = 0);
                            }
                        }),
                        (e.prototype.checkpoint = function () {
                            return this._callbacks ? this._callbacks.length : 0;
                        }),
                        (e.prototype.rollback = function (e) {
                            this._callbacks && this._contexts && ((this._callbacks.length = e), (this._contexts.length = e));
                        }),
                        (e.prototype.reset = function () {
                            (this._callbacks = null), (this._contexts = null);
                        }),
                        (e.prototype.destructor = function () {
                            this.reset();
                        }),
                        e
                    );
                })());
        e.exports = a.addPoolingTo(i);
    },
    function (e, t, r) {
        "use strict";
        var n = { logTopLevelRenders: !1 };
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e.type,
                r = e.nodeName;
            return r && "input" === r.toLowerCase() && ("checkbox" === t || "radio" === t);
        }
        function o(e) {
            return e._wrapperState.valueTracker;
        }
        function a(e, t) {
            e._wrapperState.valueTracker = t;
        }
        function i(e) {
            e._wrapperState.valueTracker = null;
        }
        function s(e) {
            var t;
            return e && (t = n(e) ? "" + e.checked : e.value), t;
        }
        var u = r(4),
            c = {
                _getTrackerFromNode: function (e) {
                    return o(u.getInstanceFromNode(e));
                },
                track: function (e) {
                    if (!o(e)) {
                        var t = u.getNodeFromInstance(e),
                            r = n(t) ? "checked" : "value",
                            s = Object.getOwnPropertyDescriptor(t.constructor.prototype, r),
                            c = "" + t[r];
                        t.hasOwnProperty(r) ||
                            "function" != typeof s.get ||
                            "function" != typeof s.set ||
                            (Object.defineProperty(t, r, {
                                enumerable: s.enumerable,
                                configurable: !0,
                                get: function () {
                                    return s.get.call(this);
                                },
                                set: function (e) {
                                    (c = "" + e), s.set.call(this, e);
                                },
                            }),
                            a(e, {
                                getValue: function () {
                                    return c;
                                },
                                setValue: function (e) {
                                    c = "" + e;
                                },
                                stopTracking: function () {
                                    i(e), delete t[r];
                                },
                            }));
                    }
                },
                updateValueIfChanged: function (e) {
                    if (!e) return !1;
                    var t = o(e);
                    if (!t) return c.track(e), !0;
                    var r = t.getValue(),
                        n = s(u.getNodeFromInstance(e));
                    return n !== r && (t.setValue(n), !0);
                },
                stopTracking: function (e) {
                    var t = o(e);
                    t && t.stopTracking();
                },
            };
        e.exports = c;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return "input" === t ? !!o[e.type] : "textarea" === t;
        }
        var o = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        var n = {
            currentScrollLeft: 0,
            currentScrollTop: 0,
            refreshScrollValues: function (e) {
                (n.currentScrollLeft = e.x), (n.currentScrollTop = e.y);
            },
        };
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        var n = r(5),
            o = r(25),
            a = r(24),
            i = function (e, t) {
                if (t) {
                    var r = e.firstChild;
                    if (r && r === e.lastChild && 3 === r.nodeType) return void (r.nodeValue = t);
                }
                e.textContent = t;
            };
        n.canUseDOM &&
            ("textContent" in document.documentElement ||
                (i = function (e, t) {
                    if (3 === e.nodeType) return void (e.nodeValue = t);
                    a(e, o(t));
                })),
            (e.exports = i);
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            try {
                e.focus();
            } catch (e) {}
        }
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            return e + t.charAt(0).toUpperCase() + t.substring(1);
        }
        var o = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0,
            },
            a = ["Webkit", "ms", "Moz", "O"];
        Object.keys(o).forEach(function (e) {
            a.forEach(function (t) {
                o[n(t, e)] = o[e];
            });
        });
        var i = {
                background: { backgroundAttachment: !0, backgroundColor: !0, backgroundImage: !0, backgroundPositionX: !0, backgroundPositionY: !0, backgroundRepeat: !0 },
                backgroundPosition: { backgroundPositionX: !0, backgroundPositionY: !0 },
                border: { borderWidth: !0, borderStyle: !0, borderColor: !0 },
                borderBottom: { borderBottomWidth: !0, borderBottomStyle: !0, borderBottomColor: !0 },
                borderLeft: { borderLeftWidth: !0, borderLeftStyle: !0, borderLeftColor: !0 },
                borderRight: { borderRightWidth: !0, borderRightStyle: !0, borderRightColor: !0 },
                borderTop: { borderTopWidth: !0, borderTopStyle: !0, borderTopColor: !0 },
                font: { fontStyle: !0, fontVariant: !0, fontWeight: !0, fontSize: !0, lineHeight: !0, fontFamily: !0 },
                outline: { outlineWidth: !0, outlineStyle: !0, outlineColor: !0 },
            },
            s = { isUnitlessNumber: o, shorthandPropertyExpansions: i };
        e.exports = s;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return !!c.hasOwnProperty(e) || (!u.hasOwnProperty(e) && (s.test(e) ? ((c[e] = !0), !0) : ((u[e] = !0), !1)));
        }
        function o(e, t) {
            return null == t || (e.hasBooleanValue && !t) || (e.hasNumericValue && isNaN(t)) || (e.hasPositiveNumericValue && t < 1) || (e.hasOverloadedBooleanValue && !1 === t);
        }
        var a = r(14),
            i = (r(4), r(6), r(129)),
            s = (r(2), new RegExp("^[" + a.ATTRIBUTE_NAME_START_CHAR + "][" + a.ATTRIBUTE_NAME_CHAR + "]*$")),
            u = {},
            c = {},
            l = {
                createMarkupForID: function (e) {
                    return a.ID_ATTRIBUTE_NAME + "=" + i(e);
                },
                setAttributeForID: function (e, t) {
                    e.setAttribute(a.ID_ATTRIBUTE_NAME, t);
                },
                createMarkupForRoot: function () {
                    return a.ROOT_ATTRIBUTE_NAME + '=""';
                },
                setAttributeForRoot: function (e) {
                    e.setAttribute(a.ROOT_ATTRIBUTE_NAME, "");
                },
                createMarkupForProperty: function (e, t) {
                    var r = a.properties.hasOwnProperty(e) ? a.properties[e] : null;
                    if (r) {
                        if (o(r, t)) return "";
                        var n = r.attributeName;
                        return r.hasBooleanValue || (r.hasOverloadedBooleanValue && !0 === t) ? n + '=""' : n + "=" + i(t);
                    }
                    return a.isCustomAttribute(e) ? (null == t ? "" : e + "=" + i(t)) : null;
                },
                createMarkupForCustomAttribute: function (e, t) {
                    return n(e) && null != t ? e + "=" + i(t) : "";
                },
                setValueForProperty: function (e, t, r) {
                    var n = a.properties.hasOwnProperty(t) ? a.properties[t] : null;
                    if (n) {
                        var i = n.mutationMethod;
                        if (i) i(e, r);
                        else {
                            if (o(n, r)) return void this.deleteValueForProperty(e, t);
                            if (n.mustUseProperty) e[n.propertyName] = r;
                            else {
                                var s = n.attributeName,
                                    u = n.attributeNamespace;
                                u ? e.setAttributeNS(u, s, "" + r) : n.hasBooleanValue || (n.hasOverloadedBooleanValue && !0 === r) ? e.setAttribute(s, "") : e.setAttribute(s, "" + r);
                            }
                        }
                    } else if (a.isCustomAttribute(t)) return void l.setValueForAttribute(e, t, r);
                },
                setValueForAttribute: function (e, t, r) {
                    if (n(t)) {
                        null == r ? e.removeAttribute(t) : e.setAttribute(t, "" + r);
                    }
                },
                deleteValueForAttribute: function (e, t) {
                    e.removeAttribute(t);
                },
                deleteValueForProperty: function (e, t) {
                    var r = a.properties.hasOwnProperty(t) ? a.properties[t] : null;
                    if (r) {
                        var n = r.mutationMethod;
                        if (n) n(e, void 0);
                        else if (r.mustUseProperty) {
                            var o = r.propertyName;
                            r.hasBooleanValue ? (e[o] = !1) : (e[o] = "");
                        } else e.removeAttribute(r.attributeName);
                    } else a.isCustomAttribute(t) && e.removeAttribute(t);
                },
            };
        e.exports = l;
    },
    function (e, t, r) {
        "use strict";
        function n() {
            if (this._rootNodeID && this._wrapperState.pendingUpdate) {
                this._wrapperState.pendingUpdate = !1;
                var e = this._currentElement.props,
                    t = s.getValue(e);
                null != t && o(this, Boolean(e.multiple), t);
            }
        }
        function o(e, t, r) {
            var n,
                o,
                a = u.getNodeFromInstance(e).options;
            if (t) {
                for (n = {}, o = 0; o < r.length; o++) n["" + r[o]] = !0;
                for (o = 0; o < a.length; o++) {
                    var i = n.hasOwnProperty(a[o].value);
                    a[o].selected !== i && (a[o].selected = i);
                }
            } else {
                for (n = "" + r, o = 0; o < a.length; o++) if (a[o].value === n) return void (a[o].selected = !0);
                a.length && (a[0].selected = !0);
            }
        }
        function a(e) {
            var t = this._currentElement.props,
                r = s.executeOnChange(t, e);
            return this._rootNodeID && (this._wrapperState.pendingUpdate = !0), c.asap(n, this), r;
        }
        var i = r(3),
            s = r(39),
            u = r(4),
            c = r(8),
            l = (r(2), !1),
            p = {
                getHostProps: function (e, t) {
                    return i({}, t, { onChange: e._wrapperState.onChange, value: void 0 });
                },
                mountWrapper: function (e, t) {
                    var r = s.getValue(t);
                    (e._wrapperState = { pendingUpdate: !1, initialValue: null != r ? r : t.defaultValue, listeners: null, onChange: a.bind(e), wasMultiple: Boolean(t.multiple) }),
                        void 0 === t.value || void 0 === t.defaultValue || l || (l = !0);
                },
                getSelectValueContext: function (e) {
                    return e._wrapperState.initialValue;
                },
                postUpdateWrapper: function (e) {
                    var t = e._currentElement.props;
                    e._wrapperState.initialValue = void 0;
                    var r = e._wrapperState.wasMultiple;
                    e._wrapperState.wasMultiple = Boolean(t.multiple);
                    var n = s.getValue(t);
                    null != n
                        ? ((e._wrapperState.pendingUpdate = !1), o(e, Boolean(t.multiple), n))
                        : r !== Boolean(t.multiple) && (null != t.defaultValue ? o(e, Boolean(t.multiple), t.defaultValue) : o(e, Boolean(t.multiple), t.multiple ? [] : ""));
                },
            };
        e.exports = p;
    },
    function (e, t) {
        function r() {
            throw new Error("setTimeout has not been defined");
        }
        function n() {
            throw new Error("clearTimeout has not been defined");
        }
        function o(e) {
            if (l === setTimeout) return setTimeout(e, 0);
            if ((l === r || !l) && setTimeout) return (l = setTimeout), setTimeout(e, 0);
            try {
                return l(e, 0);
            } catch (t) {
                try {
                    return l.call(null, e, 0);
                } catch (t) {
                    return l.call(this, e, 0);
                }
            }
        }
        function a(e) {
            if (p === clearTimeout) return clearTimeout(e);
            if ((p === n || !p) && clearTimeout) return (p = clearTimeout), clearTimeout(e);
            try {
                return p(e);
            } catch (t) {
                try {
                    return p.call(null, e);
                } catch (t) {
                    return p.call(this, e);
                }
            }
        }
        function i() {
            m && f && ((m = !1), f.length ? (h = f.concat(h)) : (g = -1), h.length && s());
        }
        function s() {
            if (!m) {
                var e = o(i);
                m = !0;
                for (var t = h.length; t; ) {
                    for (f = h, h = []; ++g < t; ) f && f[g].run();
                    (g = -1), (t = h.length);
                }
                (f = null), (m = !1), a(e);
            }
        }
        function u(e, t) {
            (this.fun = e), (this.array = t);
        }
        function c() {}
        var l,
            p,
            d = (e.exports = {});
        !(function () {
            try {
                l = "function" == typeof setTimeout ? setTimeout : r;
            } catch (e) {
                l = r;
            }
            try {
                p = "function" == typeof clearTimeout ? clearTimeout : n;
            } catch (e) {
                p = n;
            }
        })();
        var f,
            h = [],
            m = !1,
            g = -1;
        (d.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            h.push(new u(e, t)), 1 !== h.length || m || o(s);
        }),
            (u.prototype.run = function () {
                this.fun.apply(null, this.array);
            }),
            (d.title = "browser"),
            (d.browser = !0),
            (d.env = {}),
            (d.argv = []),
            (d.version = ""),
            (d.versions = {}),
            (d.on = c),
            (d.addListener = c),
            (d.once = c),
            (d.off = c),
            (d.removeListener = c),
            (d.removeAllListeners = c),
            (d.emit = c),
            (d.prependListener = c),
            (d.prependOnceListener = c),
            (d.listeners = function (e) {
                return [];
            }),
            (d.binding = function (e) {
                throw new Error("process.binding is not supported");
            }),
            (d.cwd = function () {
                return "/";
            }),
            (d.chdir = function (e) {
                throw new Error("process.chdir is not supported");
            }),
            (d.umask = function () {
                return 0;
            });
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            if (e) {
                var t = e.getName();
                if (t) return " Check the render method of `" + t + "`.";
            }
            return "";
        }
        function o(e) {
            return "function" == typeof e && void 0 !== e.prototype && "function" == typeof e.prototype.mountComponent && "function" == typeof e.prototype.receiveComponent;
        }
        function a(e, t) {
            var r;
            if (null === e || !1 === e) r = c.create(a);
            else if ("object" == typeof e) {
                var s = e,
                    u = s.type;
                if ("function" != typeof u && "string" != typeof u) {
                    var d = "";
                    (d += n(s._owner)), i("130", null == u ? u : typeof u, d);
                }
                "string" == typeof s.type ? (r = l.createInternalComponent(s)) : o(s.type) ? ((r = new s.type(s)), r.getHostNode || (r.getHostNode = r.getNativeNode)) : (r = new p(s));
            } else "string" == typeof e || "number" == typeof e ? (r = l.createInstanceForText(e)) : i("131", typeof e);
            return (r._mountIndex = 0), (r._mountImage = null), r;
        }
        var i = r(1),
            s = r(3),
            u = r(138),
            c = r(71),
            l = r(72),
            p =
                (r(139),
                r(0),
                r(2),
                function (e) {
                    this.construct(e);
                });
        s(p.prototype, u, { _instantiateReactComponent: a }), (e.exports = a);
    },
    function (e, t, r) {
        "use strict";
        var n = r(1),
            o = r(12),
            a =
                (r(0),
                {
                    HOST: 0,
                    COMPOSITE: 1,
                    EMPTY: 2,
                    getType: function (e) {
                        return null === e || !1 === e ? a.EMPTY : o.isValidElement(e) ? ("function" == typeof e.type ? a.COMPOSITE : a.HOST) : void n("26", e);
                    },
                });
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        var n,
            o = {
                injectEmptyComponentFactory: function (e) {
                    n = e;
                },
            },
            a = {
                create: function (e) {
                    return n(e);
                },
            };
        (a.injection = o), (e.exports = a);
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return s || i("111", e.type), new s(e);
        }
        function o(e) {
            return new u(e);
        }
        function a(e) {
            return e instanceof u;
        }
        var i = r(1),
            s = (r(0), null),
            u = null,
            c = {
                injectGenericComponentClass: function (e) {
                    s = e;
                },
                injectTextComponentClass: function (e) {
                    u = e;
                },
            },
            l = { createInternalComponent: n, createInstanceForText: o, isTextComponent: a, injection: c };
        e.exports = l;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            return e && "object" == typeof e && null != e.key ? c.escape(e.key) : t.toString(36);
        }
        function o(e, t, r, a) {
            var d = typeof e;
            if ((("undefined" !== d && "boolean" !== d) || (e = null), null === e || "string" === d || "number" === d || ("object" === d && e.$$typeof === s))) return r(a, e, "" === t ? l + n(e, 0) : t), 1;
            var f,
                h,
                m = 0,
                g = "" === t ? l : t + p;
            if (Array.isArray(e)) for (var v = 0; v < e.length; v++) (f = e[v]), (h = g + n(f, v)), (m += o(f, h, r, a));
            else {
                var y = u(e);
                if (y) {
                    var b,
                        w = y.call(e);
                    if (y !== e.entries) for (var E = 0; !(b = w.next()).done; ) (f = b.value), (h = g + n(f, E++)), (m += o(f, h, r, a));
                    else
                        for (; !(b = w.next()).done; ) {
                            var C = b.value;
                            C && ((f = C[1]), (h = g + c.escape(C[0]) + p + n(f, 0)), (m += o(f, h, r, a)));
                        }
                } else if ("object" === d) {
                    var x = "",
                        k = String(e);
                    i("31", "[object Object]" === k ? "object with keys {" + Object.keys(e).join(", ") + "}" : k, x);
                }
            }
            return m;
        }
        function a(e, t, r) {
            return null == e ? 0 : o(e, "", t, r);
        }
        var i = r(1),
            s = (r(9), r(140)),
            u = r(141),
            c = (r(0), r(43)),
            l = (r(2), "."),
            p = ":";
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = Function.prototype.toString,
                r = Object.prototype.hasOwnProperty,
                n = RegExp(
                    "^" +
                        t
                            .call(r)
                            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                        "$"
                );
            try {
                var o = t.call(e);
                return n.test(o);
            } catch (e) {
                return !1;
            }
        }
        function o(e) {
            var t = c(e);
            if (t) {
                var r = t.childIDs;
                l(e), r.forEach(o);
            }
        }
        function a(e, t, r) {
            return "\n    in " + (e || "Unknown") + (t ? " (at " + t.fileName.replace(/^.*[\\\/]/, "") + ":" + t.lineNumber + ")" : r ? " (created by " + r + ")" : "");
        }
        function i(e) {
            return null == e ? "#empty" : "string" == typeof e || "number" == typeof e ? "#text" : "string" == typeof e.type ? e.type : e.type.displayName || e.type.name || "Unknown";
        }
        function s(e) {
            var t,
                r = S.getDisplayName(e),
                n = S.getElement(e),
                o = S.getOwnerID(e);
            return o && (t = S.getDisplayName(o)), a(r, n && n._source, t);
        }
        var u,
            c,
            l,
            p,
            d,
            f,
            h,
            m = r(17),
            g = r(9),
            v =
                (r(0),
                r(2),
                "function" == typeof Array.from &&
                    "function" == typeof Map &&
                    n(Map) &&
                    null != Map.prototype &&
                    "function" == typeof Map.prototype.keys &&
                    n(Map.prototype.keys) &&
                    "function" == typeof Set &&
                    n(Set) &&
                    null != Set.prototype &&
                    "function" == typeof Set.prototype.keys &&
                    n(Set.prototype.keys));
        if (v) {
            var y = new Map(),
                b = new Set();
            (u = function (e, t) {
                y.set(e, t);
            }),
                (c = function (e) {
                    return y.get(e);
                }),
                (l = function (e) {
                    y.delete(e);
                }),
                (p = function () {
                    return Array.from(y.keys());
                }),
                (d = function (e) {
                    b.add(e);
                }),
                (f = function (e) {
                    b.delete(e);
                }),
                (h = function () {
                    return Array.from(b.keys());
                });
        } else {
            var w = {},
                E = {},
                C = function (e) {
                    return "." + e;
                },
                x = function (e) {
                    return parseInt(e.substr(1), 10);
                };
            (u = function (e, t) {
                var r = C(e);
                w[r] = t;
            }),
                (c = function (e) {
                    var t = C(e);
                    return w[t];
                }),
                (l = function (e) {
                    var t = C(e);
                    delete w[t];
                }),
                (p = function () {
                    return Object.keys(w).map(x);
                }),
                (d = function (e) {
                    var t = C(e);
                    E[t] = !0;
                }),
                (f = function (e) {
                    var t = C(e);
                    delete E[t];
                }),
                (h = function () {
                    return Object.keys(E).map(x);
                });
        }
        var k = [],
            S = {
                onSetChildren: function (e, t) {
                    var r = c(e);
                    r || m("144"), (r.childIDs = t);
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n],
                            a = c(o);
                        a || m("140"), null == a.childIDs && "object" == typeof a.element && null != a.element && m("141"), a.isMounted || m("71"), null == a.parentID && (a.parentID = e), a.parentID !== e && m("142", o, a.parentID, e);
                    }
                },
                onBeforeMountComponent: function (e, t, r) {
                    u(e, { element: t, parentID: r, text: null, childIDs: [], isMounted: !1, updateCount: 0 });
                },
                onBeforeUpdateComponent: function (e, t) {
                    var r = c(e);
                    r && r.isMounted && (r.element = t);
                },
                onMountComponent: function (e) {
                    var t = c(e);
                    t || m("144"), (t.isMounted = !0), 0 === t.parentID && d(e);
                },
                onUpdateComponent: function (e) {
                    var t = c(e);
                    t && t.isMounted && t.updateCount++;
                },
                onUnmountComponent: function (e) {
                    var t = c(e);
                    if (t) {
                        t.isMounted = !1;
                        0 === t.parentID && f(e);
                    }
                    k.push(e);
                },
                purgeUnmountedComponents: function () {
                    if (!S._preventPurging) {
                        for (var e = 0; e < k.length; e++) {
                            o(k[e]);
                        }
                        k.length = 0;
                    }
                },
                isMounted: function (e) {
                    var t = c(e);
                    return !!t && t.isMounted;
                },
                getCurrentStackAddendum: function (e) {
                    var t = "";
                    if (e) {
                        var r = i(e),
                            n = e._owner;
                        t += a(r, e._source, n && n.getName());
                    }
                    var o = g.current,
                        s = o && o._debugID;
                    return (t += S.getStackAddendumByID(s));
                },
                getStackAddendumByID: function (e) {
                    for (var t = ""; e; ) (t += s(e)), (e = S.getParentID(e));
                    return t;
                },
                getChildIDs: function (e) {
                    var t = c(e);
                    return t ? t.childIDs : [];
                },
                getDisplayName: function (e) {
                    var t = S.getElement(e);
                    return t ? i(t) : null;
                },
                getElement: function (e) {
                    var t = c(e);
                    return t ? t.element : null;
                },
                getOwnerID: function (e) {
                    var t = S.getElement(e);
                    return t && t._owner ? t._owner._debugID : null;
                },
                getParentID: function (e) {
                    var t = c(e);
                    return t ? t.parentID : null;
                },
                getSource: function (e) {
                    var t = c(e),
                        r = t ? t.element : null;
                    return null != r ? r._source : null;
                },
                getText: function (e) {
                    var t = S.getElement(e);
                    return "string" == typeof t ? t : "number" == typeof t ? "" + t : null;
                },
                getUpdateCount: function (e) {
                    var t = c(e);
                    return t ? t.updateCount : 0;
                },
                getRootIDs: h,
                getRegisteredIDs: p,
                pushNonStandardWarningStack: function (e, t) {
                    if ("function" == typeof console.reactStack) {
                        var r = [],
                            n = g.current,
                            o = n && n._debugID;
                        try {
                            for (e && r.push({ name: o ? S.getDisplayName(o) : null, fileName: t ? t.fileName : null, lineNumber: t ? t.lineNumber : null }); o; ) {
                                var a = S.getElement(o),
                                    i = S.getParentID(o),
                                    s = S.getOwnerID(o),
                                    u = s ? S.getDisplayName(s) : null,
                                    c = a && a._source;
                                r.push({ name: u, fileName: c ? c.fileName : null, lineNumber: c ? c.lineNumber : null }), (o = i);
                            }
                        } catch (e) {}
                        console.reactStack(r);
                    }
                },
                popNonStandardWarningStack: function () {
                    "function" == typeof console.reactStackEnd && console.reactStackEnd();
                },
            };
        e.exports = S;
    },
    function (e, t, r) {
        "use strict";
        var n = r(7),
            o = {
                listen: function (e, t, r) {
                    return e.addEventListener
                        ? (e.addEventListener(t, r, !1),
                          {
                              remove: function () {
                                  e.removeEventListener(t, r, !1);
                              },
                          })
                        : e.attachEvent
                        ? (e.attachEvent("on" + t, r),
                          {
                              remove: function () {
                                  e.detachEvent("on" + t, r);
                              },
                          })
                        : void 0;
                },
                capture: function (e, t, r) {
                    return e.addEventListener
                        ? (e.addEventListener(t, r, !0),
                          {
                              remove: function () {
                                  e.removeEventListener(t, r, !0);
                              },
                          })
                        : { remove: n };
                },
                registerDefault: function () {},
            };
        e.exports = o;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return a(document.documentElement, e);
        }
        var o = r(153),
            a = r(155),
            i = r(64),
            s = r(77),
            u = {
                hasSelectionCapabilities: function (e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && (("input" === t && "text" === e.type) || "textarea" === t || "true" === e.contentEditable);
                },
                getSelectionInformation: function () {
                    var e = s();
                    return { focusedElem: e, selectionRange: u.hasSelectionCapabilities(e) ? u.getSelection(e) : null };
                },
                restoreSelection: function (e) {
                    var t = s(),
                        r = e.focusedElem,
                        o = e.selectionRange;
                    t !== r && n(r) && (u.hasSelectionCapabilities(r) && u.setSelection(r, o), i(r));
                },
                getSelection: function (e) {
                    var t;
                    if ("selectionStart" in e) t = { start: e.selectionStart, end: e.selectionEnd };
                    else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
                        var r = document.selection.createRange();
                        r.parentElement() === e && (t = { start: -r.moveStart("character", -e.value.length), end: -r.moveEnd("character", -e.value.length) });
                    } else t = o.getOffsets(e);
                    return t || { start: 0, end: 0 };
                },
                setSelection: function (e, t) {
                    var r = t.start,
                        n = t.end;
                    if ((void 0 === n && (n = r), "selectionStart" in e)) (e.selectionStart = r), (e.selectionEnd = Math.min(n, e.value.length));
                    else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
                        var a = e.createTextRange();
                        a.collapse(!0), a.moveStart("character", r), a.moveEnd("character", n - r), a.select();
                    } else o.setOffsets(e, t);
                },
            };
        e.exports = u;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
            try {
                return e.activeElement || e.body;
            } catch (t) {
                return e.body;
            }
        }
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            for (var r = Math.min(e.length, t.length), n = 0; n < r; n++) if (e.charAt(n) !== t.charAt(n)) return n;
            return e.length === t.length ? -1 : r;
        }
        function o(e) {
            return e ? (e.nodeType === I ? e.documentElement : e.firstChild) : null;
        }
        function a(e) {
            return (e.getAttribute && e.getAttribute(q)) || "";
        }
        function i(e, t, r, n, o) {
            var a;
            if (E.logTopLevelRenders) {
                var i = e._currentElement.props.child,
                    s = i.type;
                (a = "React mount: " + ("string" == typeof s ? s : s.displayName || s.name)), console.time(a);
            }
            var u = k.mountComponent(e, r, null, b(e, t), o, 0);
            a && console.timeEnd(a), (e._renderedComponent._topLevelWrapper = e), F._mountImageIntoNode(u, t, e, n, r);
        }
        function s(e, t, r, n) {
            var o = _.ReactReconcileTransaction.getPooled(!r && w.useCreateElement);
            o.perform(i, null, e, t, o, r, n), _.ReactReconcileTransaction.release(o);
        }
        function u(e, t, r) {
            for (k.unmountComponent(e, r), t.nodeType === I && (t = t.documentElement); t.lastChild; ) t.removeChild(t.lastChild);
        }
        function c(e) {
            var t = o(e);
            if (t) {
                var r = y.getInstanceFromNode(t);
                return !(!r || !r._hostParent);
            }
        }
        function l(e) {
            return !(!e || (e.nodeType !== R && e.nodeType !== I && e.nodeType !== L));
        }
        function p(e) {
            var t = o(e),
                r = t && y.getInstanceFromNode(t);
            return r && !r._hostParent ? r : null;
        }
        function d(e) {
            var t = p(e);
            return t ? t._hostContainerInfo._topLevelWrapper : null;
        }
        var f = r(1),
            h = r(16),
            m = r(14),
            g = r(12),
            v = r(26),
            y = (r(9), r(4)),
            b = r(170),
            w = r(171),
            E = r(59),
            C = r(21),
            x = (r(6), r(172)),
            k = r(15),
            S = r(44),
            _ = r(8),
            A = r(29),
            D = r(69),
            T = (r(0), r(24)),
            N = r(42),
            q = (r(2), m.ID_ATTRIBUTE_NAME),
            P = m.ROOT_ATTRIBUTE_NAME,
            R = 1,
            I = 9,
            L = 11,
            M = {},
            O = 1,
            U = function () {
                this.rootID = O++;
            };
        (U.prototype.isReactComponent = {}),
            (U.prototype.render = function () {
                return this.props.child;
            }),
            (U.isReactTopLevelWrapper = !0);
        var F = {
            TopLevelWrapper: U,
            _instancesByReactRootID: M,
            scrollMonitor: function (e, t) {
                t();
            },
            _updateRootComponent: function (e, t, r, n, o) {
                return (
                    F.scrollMonitor(n, function () {
                        S.enqueueElementInternal(e, t, r), o && S.enqueueCallbackInternal(e, o);
                    }),
                    e
                );
            },
            _renderNewRootComponent: function (e, t, r, n) {
                l(t) || f("37"), v.ensureScrollValueMonitoring();
                var o = D(e, !1);
                _.batchedUpdates(s, o, t, r, n);
                var a = o._instance.rootID;
                return (M[a] = o), o;
            },
            renderSubtreeIntoContainer: function (e, t, r, n) {
                return (null != e && C.has(e)) || f("38"), F._renderSubtreeIntoContainer(e, t, r, n);
            },
            _renderSubtreeIntoContainer: function (e, t, r, n) {
                S.validateCallback(n, "ReactDOM.render"),
                    g.isValidElement(t) ||
                        f(
                            "39",
                            "string" == typeof t
                                ? " Instead of passing a string like 'div', pass React.createElement('div') or <div />."
                                : "function" == typeof t
                                ? " Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />."
                                : null != t && void 0 !== t.props
                                ? " This may be caused by unintentionally loading two independent copies of React."
                                : ""
                        );
                var i,
                    s = g.createElement(U, { child: t });
                if (e) {
                    var u = C.get(e);
                    i = u._processChildContext(u._context);
                } else i = A;
                var l = d(r);
                if (l) {
                    var p = l._currentElement,
                        h = p.props.child;
                    if (N(h, t)) {
                        var m = l._renderedComponent.getPublicInstance(),
                            v =
                                n &&
                                function () {
                                    n.call(m);
                                };
                        return F._updateRootComponent(l, s, i, r, v), m;
                    }
                    F.unmountComponentAtNode(r);
                }
                var y = o(r),
                    b = y && !!a(y),
                    w = c(r),
                    E = b && !l && !w,
                    x = F._renderNewRootComponent(s, r, E, i)._renderedComponent.getPublicInstance();
                return n && n.call(x), x;
            },
            render: function (e, t, r) {
                return F._renderSubtreeIntoContainer(null, e, t, r);
            },
            unmountComponentAtNode: function (e) {
                l(e) || f("40");
                var t = d(e);
                if (!t) {
                    c(e), 1 === e.nodeType && e.hasAttribute(P);
                    return !1;
                }
                return delete M[t._instance.rootID], _.batchedUpdates(u, t, e, !1), !0;
            },
            _mountImageIntoNode: function (e, t, r, a, i) {
                if ((l(t) || f("41"), a)) {
                    var s = o(t);
                    if (x.canReuseMarkup(e, s)) return void y.precacheNode(r, s);
                    var u = s.getAttribute(x.CHECKSUM_ATTR_NAME);
                    s.removeAttribute(x.CHECKSUM_ATTR_NAME);
                    var c = s.outerHTML;
                    s.setAttribute(x.CHECKSUM_ATTR_NAME, u);
                    var p = e,
                        d = n(p, c),
                        m = " (client) " + p.substring(d - 20, d + 20) + "\n (server) " + c.substring(d - 20, d + 20);
                    t.nodeType === I && f("42", m);
                }
                if ((t.nodeType === I && f("43"), i.useCreateElement)) {
                    for (; t.lastChild; ) t.removeChild(t.lastChild);
                    h.insertTreeBefore(t, e, null);
                } else T(t, e), y.precacheNode(r, t.firstChild);
            },
        };
        e.exports = F;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            for (var t; (t = e._renderedNodeType) === o.COMPOSITE; ) e = e._renderedComponent;
            return t === o.HOST ? e._renderedComponent : t === o.EMPTY ? null : void 0;
        }
        var o = r(70);
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      },
            a = (function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t;
                };
            })(),
            i = (function () {
                function e() {
                    n(this, e);
                }
                return (
                    a(e, null, [
                        {
                            key: "extend",
                            value: function () {
                                for (var e = 1; e < arguments.length; e++)
                                    for (var t in arguments[e])
                                        arguments[e].hasOwnProperty(t) && ("object" === o(arguments[0][t]) && "object" === o(arguments[e][t]) ? this.extend(arguments[0][t], arguments[e][t]) : (arguments[0][t] = arguments[e][t]));
                                return arguments[0];
                            },
                        },
                    ]),
                    e
                );
            })();
        t.default = i;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var o = r(82),
            a = n(o),
            i = r(80),
            s = n(i),
            u = r(27);
        H5P.SpeakTheWords = (function (e) {
            function t(t, r, n) {
                var o = this;
                (this.params = s.default.extend({ behaviour: { enableSolutionsButton: !0, enableRetry: !0 } }, t)), e.call(this, "speak-the-words");
                var i = new a.default(t, this, n);
                (this.registerDomElements = function () {
                    i.registerDomElements();
                }),
                    (this.resetTask = function () {
                        i.resetTask();
                    }),
                    (this.showSolutions = function () {
                        i.showSolutions(), i.question.hideButton("try-again"), i.isQuestionAnswered() || o.setFeedback((0, u.decode)(t.incorrectAnswerText), 0, 1);
                    }),
                    (this.getScore = function () {
                        return i.getScore();
                    }),
                    (this.getMaxScore = function () {
                        return i.getMaxScore();
                    }),
                    (this.getAnswerGiven = function () {
                        return i.isQuestionAnswered();
                    }),
                    (this.getXAPIData = function () {
                        return i.getXAPIData(o);
                    }),
                    (this.stop = function () {
                        i.stopListening();
                    }),
                    (this.getCurrentState = function () {
                        return i.getCurrentState();
                    });
            }
            return (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), t;
        })(H5P.Question);
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                    }
                    return e;
                },
            i = (function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t;
                };
            })(),
            s = r(28),
            u = n(s),
            c = r(100),
            l = n(c);
        r(177), r(179);
        var p = r(27),
            d = r(182),
            f = n(d),
            h = r(183),
            m = n(h),
            g = r(186),
            v = n(g),
            y = r(80),
            b = n(y),
            w = (function () {
                function e(t, r, n) {
                    o(this, e),
                        (this.params = b.default.extend(
                            {
                                question: "",
                                acceptedAnswers: [],
                                incorrectAnswerText: "Incorrect answer",
                                correctAnswerText: "Correct answer",
                                inputLanguage: "en-US",
                                l10n: {
                                    retryLabel: "Retry",
                                    showSolutionLabel: "Show solution",
                                    speakLabel: "Push to speak",
                                    listeningLabel: "Listening...",
                                    correctAnswersText: "The correct answer(s):",
                                    userAnswersText: "Your answer(s) was interpreted as:",
                                    noSound: "I could not hear you, make sure your microphone is enabled",
                                    unsupportedBrowserHeader: "It looks like your browser does not support speech recognition",
                                    unsupportedBrowserDetails: "Please try again in a browser like Chrome",
                                    acceptedAnswers: "Accepted answers: @answers",
                                    a11yShowSolution: "Show the solution. The task will be marked with its correct solution.",
                                    a11yRetry: "Retry the task. Reset all responses and start the task over again.",
                                },
                            },
                            t
                        )),
                        (this.VIEW_STATES = ["task", "results", "solutions"]),
                        (this.previousState = n && n.previousState ? n.previousState : {}),
                        (this.params.acceptedAnswers = this.params.acceptedAnswers.map(p.decode)),
                        (this.mediaRecorder = null),
                        (this.mediaChunks = []),
                        (this.question = r),
                        (this.hasAnswered = !1),
                        (this.score = 0),
                        this.setViewState(this.previousState.vieState || "task"),
                        window.annyang &&
                            ((this.speechEventStore = new H5P.EventDispatcher()),
                            this.createIntroduction(this.params.question),
                            this.createContent(this.params),
                            this.createButtonBar(this.params.l10n),
                            (this.handleAnswered = this.handleAnswered.bind(this)),
                            l.default.render(
                                u.default.createElement(
                                    "div",
                                    null,
                                    u.default.createElement(m.default, { eventStore: this.speechEventStore, l10n: this.params.l10n, speechEngine: this.speechEngine }),
                                    u.default.createElement(v.default, a({ eventStore: this.speechEventStore }, this.params))
                                ),
                                this.questionWrapper
                            ),
                            (this.speechEngine = new f.default(this.params, this.speechEventStore)),
                            this.speechEventStore.on("answered-correctly", this.handleAnswered),
                            this.speechEventStore.on("answered-wrong", this.handleAnswered));
                }
                return (
                    i(e, [
                        {
                            key: "createIntroduction",
                            value: function (e) {
                                var t = document.createElement("div");
                                (t.className = "h5p-speak-the-words-introduction"), (t.textContent = (0, p.decode)(e)), (this.introduction = t);
                            },
                        },
                        {
                            key: "createContent",
                            value: function () {
                                var e = document.createElement("div");
                                (e.className = "h5p-speak-the-words"), (this.questionWrapper = e);
                            },
                        },
                        {
                            key: "createButtonBar",
                            value: function (e) {
                                var t = this;
                                this.question.addButton(
                                    "try-again",
                                    (0, p.decode)(e.retryLabel),
                                    function () {
                                        t.resetTask();
                                    },
                                    !1,
                                    { "aria-label": e.a11yRetry }
                                ),
                                    this.question.addButton(
                                        "show-solution",
                                        (0, p.decode)(e.showSolutionLabel),
                                        function () {
                                            t.showSolutions();
                                        },
                                        !1,
                                        { "aria-label": e.a11yShowSolution }
                                    );
                            },
                        },
                        {
                            key: "handleAnswered",
                            value: function (e) {
                                this.mediaRecorder && "inactive" !== this.mediaRecorder.state && this.mediaRecorder.stop(),
                                    this.questionWrapper.parentNode.classList.add("empty"),
                                    this.questionWrapper.parentNode.parentNode && this.questionWrapper.parentNode.parentNode.classList.add("answered");
                                var t = e.data[0];
                                this.lastInterpretations = e.data;
                                var r = -1 !== this.params.acceptedAnswers.indexOf(t),
                                    n = "";
                                r
                                    ? ((this.score = 1), (n = this.params.correctAnswerText), this.question.showButton("try-again"), this.question.hideButton("show-solution"))
                                    : ((this.score = 0), (n = this.params.incorrectAnswerText), this.question.showButton("try-again"), this.question.showButton("show-solution")),
                                    this.question.setFeedback((0, p.decode)(n), this.getScore(), this.getMaxScore()),
                                    (this.previousState.viewState && "task" !== this.previousState.viewState) || this.triggerXAPIAnswered(t),
                                    (this.hasAnswered = !0),
                                    this.setViewState("results");
                            },
                        },
                        {
                            key: "registerDomElements",
                            value: function () {
                                var e = this;
                                if (!window.annyang) {
                                    var t = document.createElement("div");
                                    return (
                                        l.default.render(
                                            u.default.createElement(
                                                "div",
                                                { className: "h5p-speak-the-words-unsupported-browser-error" },
                                                u.default.createElement("div", { className: "h5p-speak-the-words-unsupported-browser-header" }, (0, p.decode)(this.params.l10n.unsupportedBrowserHeader)),
                                                u.default.createElement("div", { className: "h5p-speak-the-words-unsupported-browser-body" }, (0, p.decode)(this.params.l10n.unsupportedBrowserDetails))
                                            ),
                                            t
                                        ),
                                        void this.question.setIntroduction(t)
                                    );
                                }
                                (this.mediaMIMEType = this.getRecordingMIMEType()),
                                    this.mediaMIMEType &&
                                        navigator.mediaDevices.getUserMedia({ audio: !0 }).then(function (t) {
                                            (e.mediaRecorder = new MediaRecorder(t)),
                                                (e.mediaRecorder.onstop = function () {
                                                    var t = new Blob(e.mediaChunks, { type: e.mediaMIMEType });
                                                    (e.mediaChunks = []), e.triggerFileExport({ type: e.mediaMIMEType, blob: t });
                                                }),
                                                (e.mediaRecorder.ondataavailable = function (t) {
                                                    e.mediaChunks.push(t.data);
                                                }),
                                                e.speechEventStore.on("start-listening", function () {
                                                    "recording" !== e.mediaRecorder.state && e.mediaRecorder.start();
                                                });
                                        }),
                                    this.question.setIntroduction(this.introduction),
                                    this.question.setContent(this.questionWrapper),
                                    this.previousState.lastInterpretations && this.previousState.lastInterpretations.length && this.recreateState();
                            },
                        },
                        {
                            key: "recreateState",
                            value: function () {
                                var e = -1 !== this.params.acceptedAnswers.indexOf(this.previousState.lastInterpretations[0]);
                                ("results" !== this.previousState.viewState && "solutions" !== this.previousState.viewState) ||
                                    (e ? this.speechEventStore.trigger("answered-correctly", this.previousState.lastInterpretations) : this.speechEventStore.trigger("answered-wrong", this.previousState.lastInterpretations)),
                                    "solutions" === this.previousState.viewState && this.showSolutions(),
                                    this.speechEventStore.trigger("resize");
                            },
                        },
                        {
                            key: "resetTask",
                            value: function () {
                                this.questionWrapper.parentNode.classList.remove("empty"),
                                    this.questionWrapper.parentNode.parentNode && this.questionWrapper.parentNode.parentNode.classList.remove("answered", "showing-solution"),
                                    this.question.hideButton("try-again"),
                                    this.question.hideButton("show-solution"),
                                    this.question.removeFeedback(),
                                    this.speechEventStore.trigger("reset-task"),
                                    (this.hasAnswered = !1),
                                    (this.score = 0),
                                    this.question.trigger("reset-task"),
                                    (this.previousState = {}),
                                    (this.lastInterpretations = []),
                                    this.setViewState("task");
                            },
                        },
                        {
                            key: "showSolutions",
                            value: function () {
                                this.questionWrapper.parentNode.classList.remove("empty"),
                                    this.questionWrapper.parentNode.parentNode && this.questionWrapper.parentNode.parentNode.classList.add("showing-solution"),
                                    this.question.hideButton("show-solution"),
                                    this.speechEventStore.trigger("show-solution"),
                                    this.setViewState("solutions");
                            },
                        },
                        {
                            key: "stopListening",
                            value: function () {
                                this.speechEventStore.trigger("stop-all-media");
                            },
                        },
                        {
                            key: "getScore",
                            value: function () {
                                return this.score;
                            },
                        },
                        {
                            key: "getMaxScore",
                            value: function () {
                                return 1;
                            },
                        },
                        {
                            key: "isQuestionAnswered",
                            value: function () {
                                return this.hasAnswered;
                            },
                        },
                        {
                            key: "triggerXAPIAnswered",
                            value: function (e) {
                                var t = this.getXAPIAnswerEvent(this.question);
                                (t.data.statement.result.response = e), this.question.trigger(t);
                            },
                        },
                        {
                            key: "getXAPIData",
                            value: function (e) {
                                return { statement: this.getXAPIAnswerEvent(e).data.statement };
                            },
                        },
                        {
                            key: "getXAPIAnswerEvent",
                            value: function (e) {
                                var t = this.createXAPIEvent("answered", e);
                                return t.setScoredResult(this.getScore(), this.getMaxScore(), e, !0, this.getScore() === this.getMaxScore()), t;
                            },
                        },
                        {
                            key: "createXAPIEvent",
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    r = new H5P.XAPIEvent();
                                return r.setActor(), r.setVerb(e), r.setObject(t), r.setContext(t), b.default.extend(r.getVerifiedStatementValue(["object", "definition"]), this.getxAPIDefinition()), r;
                            },
                        },
                        {
                            key: "getxAPIDefinition",
                            value: function () {
                                return {
                                    name: { "en-US": H5P.createTitle("Speak the Words") },
                                    description: { "en-US": this.params.question },
                                    type: "http://adlnet.gov/expapi/activities/cmi.interaction",
                                    interactionType: "fill-in",
                                    correctResponsesPattern: this.params.acceptedAnswers,
                                };
                            },
                        },
                        {
                            key: "getRecordingMIMEType",
                            value: function () {
                                return window.MediaRecorder
                                    ? window.MediaRecorder.isTypeSupported
                                        ? window.MediaRecorder.isTypeSupported("audio/webm")
                                            ? "audio/webm"
                                            : window.MediaRecorder.isTypeSupported("audio/mp4")
                                            ? "audio/mp4"
                                            : null
                                        : "audio/mp4"
                                    : null;
                            },
                        },
                        {
                            key: "getCurrentState",
                            value: function () {
                                return { viewState: this.viewState, lastInterpretations: this.lastInterpretations || [] };
                            },
                        },
                        {
                            key: "setViewState",
                            value: function (e) {
                                -1 !== this.VIEW_STATES.indexOf(e) && (this.question.trigger("kllStoreSessionState", void 0, { bubbles: !0, external: !0 }), (this.viewState = e));
                            },
                        },
                        {
                            key: "triggerFileExport",
                            value: function (e) {
                                if ((e.contentId || (e.contentId = this.question.contentId), !e.subContentId && this.question.subContentId && (e.subContentId = this.question.subContentId), !e.user)) {
                                    var t = new H5P.XAPIEvent();
                                    t.setActor(), (e.user = t.data.statement.actor);
                                }
                                (e.description = e.description = this.params.l10n.acceptedAnswers.replace(/@answers/g, this.params.acceptedAnswers.join(", "))), this.speechEventStore.trigger("exportFile", e, { external: !0 });
                            },
                        },
                    ]),
                    e
                );
            })();
        t.default = w;
    },
    function (e, t, r) {
        "use strict";
        var n = function () {};
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return ("" + e).replace(w, "$&/");
        }
        function o(e, t) {
            (this.func = e), (this.context = t), (this.count = 0);
        }
        function a(e, t, r) {
            var n = e.func,
                o = e.context;
            n.call(o, t, e.count++);
        }
        function i(e, t, r) {
            if (null == e) return e;
            var n = o.getPooled(t, r);
            v(e, a, n), o.release(n);
        }
        function s(e, t, r, n) {
            (this.result = e), (this.keyPrefix = t), (this.func = r), (this.context = n), (this.count = 0);
        }
        function u(e, t, r) {
            var o = e.result,
                a = e.keyPrefix,
                i = e.func,
                s = e.context,
                u = i.call(s, t, e.count++);
            Array.isArray(u) ? c(u, o, r, g.thatReturnsArgument) : null != u && (m.isValidElement(u) && (u = m.cloneAndReplaceKey(u, a + (!u.key || (t && t.key === u.key) ? "" : n(u.key) + "/") + r)), o.push(u));
        }
        function c(e, t, r, o, a) {
            var i = "";
            null != r && (i = n(r) + "/");
            var c = s.getPooled(t, i, o, a);
            v(e, u, c), s.release(c);
        }
        function l(e, t, r) {
            if (null == e) return e;
            var n = [];
            return c(e, n, null, t, r), n;
        }
        function p(e, t, r) {
            return null;
        }
        function d(e, t) {
            return v(e, p, null);
        }
        function f(e) {
            var t = [];
            return c(e, t, null, g.thatReturnsArgument), t;
        }
        var h = r(85),
            m = r(13),
            g = r(7),
            v = r(86),
            y = h.twoArgumentPooler,
            b = h.fourArgumentPooler,
            w = /\/+/g;
        (o.prototype.destructor = function () {
            (this.func = null), (this.context = null), (this.count = 0);
        }),
            h.addPoolingTo(o, y),
            (s.prototype.destructor = function () {
                (this.result = null), (this.keyPrefix = null), (this.func = null), (this.context = null), (this.count = 0);
            }),
            h.addPoolingTo(s, b);
        var E = { forEach: i, map: l, mapIntoWithKeyPrefixInternal: c, count: d, toArray: f };
        e.exports = E;
    },
    function (e, t, r) {
        "use strict";
        var n = r(17),
            o =
                (r(0),
                function (e) {
                    var t = this;
                    if (t.instancePool.length) {
                        var r = t.instancePool.pop();
                        return t.call(r, e), r;
                    }
                    return new t(e);
                }),
            a = function (e, t) {
                var r = this;
                if (r.instancePool.length) {
                    var n = r.instancePool.pop();
                    return r.call(n, e, t), n;
                }
                return new r(e, t);
            },
            i = function (e, t, r) {
                var n = this;
                if (n.instancePool.length) {
                    var o = n.instancePool.pop();
                    return n.call(o, e, t, r), o;
                }
                return new n(e, t, r);
            },
            s = function (e, t, r, n) {
                var o = this;
                if (o.instancePool.length) {
                    var a = o.instancePool.pop();
                    return o.call(a, e, t, r, n), a;
                }
                return new o(e, t, r, n);
            },
            u = function (e) {
                var t = this;
                e instanceof t || n("25"), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e);
            },
            c = o,
            l = function (e, t) {
                var r = e;
                return (r.instancePool = []), (r.getPooled = t || c), r.poolSize || (r.poolSize = 10), (r.release = u), r;
            },
            p = { addPoolingTo: l, oneArgumentPooler: o, twoArgumentPooler: a, threeArgumentPooler: i, fourArgumentPooler: s };
        e.exports = p;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            return e && "object" == typeof e && null != e.key ? c.escape(e.key) : t.toString(36);
        }
        function o(e, t, r, a) {
            var d = typeof e;
            if ((("undefined" !== d && "boolean" !== d) || (e = null), null === e || "string" === d || "number" === d || ("object" === d && e.$$typeof === s))) return r(a, e, "" === t ? l + n(e, 0) : t), 1;
            var f,
                h,
                m = 0,
                g = "" === t ? l : t + p;
            if (Array.isArray(e)) for (var v = 0; v < e.length; v++) (f = e[v]), (h = g + n(f, v)), (m += o(f, h, r, a));
            else {
                var y = u(e);
                if (y) {
                    var b,
                        w = y.call(e);
                    if (y !== e.entries) for (var E = 0; !(b = w.next()).done; ) (f = b.value), (h = g + n(f, E++)), (m += o(f, h, r, a));
                    else
                        for (; !(b = w.next()).done; ) {
                            var C = b.value;
                            C && ((f = C[1]), (h = g + c.escape(C[0]) + p + n(f, 0)), (m += o(f, h, r, a)));
                        }
                } else if ("object" === d) {
                    var x = "",
                        k = String(e);
                    i("31", "[object Object]" === k ? "object with keys {" + Object.keys(e).join(", ") + "}" : k, x);
                }
            }
            return m;
        }
        function a(e, t, r) {
            return null == e ? 0 : o(e, "", t, r);
        }
        var i = r(17),
            s = (r(9), r(52)),
            u = r(87),
            c = (r(0), r(88)),
            l = (r(2), "."),
            p = ":";
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e && ((o && e[o]) || e[a]);
            if ("function" == typeof t) return t;
        }
        var o = "function" == typeof Symbol && Symbol.iterator,
            a = "@@iterator";
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = { "=": "=0", ":": "=2" };
            return (
                "$" +
                ("" + e).replace(/[=:]/g, function (e) {
                    return t[e];
                })
            );
        }
        function o(e) {
            var t = /(=0|=2)/g,
                r = { "=0": "=", "=2": ":" };
            return ("" + ("." === e[0] && "$" === e[1] ? e.substring(2) : e.substring(1))).replace(t, function (e) {
                return r[e];
            });
        }
        var a = { escape: n, unescape: o };
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        var n = r(13),
            o = n.createFactory,
            a = {
                a: o("a"),
                abbr: o("abbr"),
                address: o("address"),
                area: o("area"),
                article: o("article"),
                aside: o("aside"),
                audio: o("audio"),
                b: o("b"),
                base: o("base"),
                bdi: o("bdi"),
                bdo: o("bdo"),
                big: o("big"),
                blockquote: o("blockquote"),
                body: o("body"),
                br: o("br"),
                button: o("button"),
                canvas: o("canvas"),
                caption: o("caption"),
                cite: o("cite"),
                code: o("code"),
                col: o("col"),
                colgroup: o("colgroup"),
                data: o("data"),
                datalist: o("datalist"),
                dd: o("dd"),
                del: o("del"),
                details: o("details"),
                dfn: o("dfn"),
                dialog: o("dialog"),
                div: o("div"),
                dl: o("dl"),
                dt: o("dt"),
                em: o("em"),
                embed: o("embed"),
                fieldset: o("fieldset"),
                figcaption: o("figcaption"),
                figure: o("figure"),
                footer: o("footer"),
                form: o("form"),
                h1: o("h1"),
                h2: o("h2"),
                h3: o("h3"),
                h4: o("h4"),
                h5: o("h5"),
                h6: o("h6"),
                head: o("head"),
                header: o("header"),
                hgroup: o("hgroup"),
                hr: o("hr"),
                html: o("html"),
                i: o("i"),
                iframe: o("iframe"),
                img: o("img"),
                input: o("input"),
                ins: o("ins"),
                kbd: o("kbd"),
                keygen: o("keygen"),
                label: o("label"),
                legend: o("legend"),
                li: o("li"),
                link: o("link"),
                main: o("main"),
                map: o("map"),
                mark: o("mark"),
                menu: o("menu"),
                menuitem: o("menuitem"),
                meta: o("meta"),
                meter: o("meter"),
                nav: o("nav"),
                noscript: o("noscript"),
                object: o("object"),
                ol: o("ol"),
                optgroup: o("optgroup"),
                option: o("option"),
                output: o("output"),
                p: o("p"),
                param: o("param"),
                picture: o("picture"),
                pre: o("pre"),
                progress: o("progress"),
                q: o("q"),
                rp: o("rp"),
                rt: o("rt"),
                ruby: o("ruby"),
                s: o("s"),
                samp: o("samp"),
                script: o("script"),
                section: o("section"),
                select: o("select"),
                small: o("small"),
                source: o("source"),
                span: o("span"),
                strong: o("strong"),
                style: o("style"),
                sub: o("sub"),
                summary: o("summary"),
                sup: o("sup"),
                table: o("table"),
                tbody: o("tbody"),
                td: o("td"),
                textarea: o("textarea"),
                tfoot: o("tfoot"),
                th: o("th"),
                thead: o("thead"),
                time: o("time"),
                title: o("title"),
                tr: o("tr"),
                track: o("track"),
                u: o("u"),
                ul: o("ul"),
                var: o("var"),
                video: o("video"),
                wbr: o("wbr"),
                circle: o("circle"),
                clipPath: o("clipPath"),
                defs: o("defs"),
                ellipse: o("ellipse"),
                g: o("g"),
                image: o("image"),
                line: o("line"),
                linearGradient: o("linearGradient"),
                mask: o("mask"),
                path: o("path"),
                pattern: o("pattern"),
                polygon: o("polygon"),
                polyline: o("polyline"),
                radialGradient: o("radialGradient"),
                rect: o("rect"),
                stop: o("stop"),
                svg: o("svg"),
                text: o("text"),
                tspan: o("tspan"),
            };
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        var n = r(13),
            o = n.isValidElement,
            a = r(53);
        e.exports = a(o);
    },
    function (e, t, r) {
        "use strict";
        function n() {
            return null;
        }
        var o = r(92),
            a = r(3),
            i = r(94),
            s = r(95),
            u = Function.call.bind(Object.prototype.hasOwnProperty),
            c = function () {};
        e.exports = function (e, t) {
            function r(e) {
                var t = e && ((A && e[A]) || e[D]);
                if ("function" == typeof t) return t;
            }
            function l(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t;
            }
            function p(e) {
                (this.message = e), (this.stack = "");
            }
            function d(e) {
                function r(r, n, o, a, s, u, c) {
                    if (((a = a || T), (u = u || o), c !== i)) {
                        if (t) {
                            var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                            throw ((l.name = "Invariant Violation"), l);
                        }
                    }
                    return null == n[o]
                        ? r
                            ? new p(
                                  null === n[o] ? "The " + s + " `" + u + "` is marked as required in `" + a + "`, but its value is `null`." : "The " + s + " `" + u + "` is marked as required in `" + a + "`, but its value is `undefined`."
                              )
                            : null
                        : e(n, o, a, s, u);
                }
                var n = r.bind(null, !1);
                return (n.isRequired = r.bind(null, !0)), n;
            }
            function f(e) {
                function t(t, r, n, o, a, i) {
                    var s = t[r];
                    if (x(s) !== e) return new p("Invalid " + o + " `" + a + "` of type `" + k(s) + "` supplied to `" + n + "`, expected `" + e + "`.");
                    return null;
                }
                return d(t);
            }
            function h(e) {
                function t(t, r, n, o, a) {
                    if ("function" != typeof e) return new p("Property `" + a + "` of component `" + n + "` has invalid PropType notation inside arrayOf.");
                    var s = t[r];
                    if (!Array.isArray(s)) {
                        return new p("Invalid " + o + " `" + a + "` of type `" + x(s) + "` supplied to `" + n + "`, expected an array.");
                    }
                    for (var u = 0; u < s.length; u++) {
                        var c = e(s, u, n, o, a + "[" + u + "]", i);
                        if (c instanceof Error) return c;
                    }
                    return null;
                }
                return d(t);
            }
            function m(e) {
                function t(t, r, n, o, a) {
                    if (!(t[r] instanceof e)) {
                        var i = e.name || T;
                        return new p("Invalid " + o + " `" + a + "` of type `" + _(t[r]) + "` supplied to `" + n + "`, expected instance of `" + i + "`.");
                    }
                    return null;
                }
                return d(t);
            }
            function g(e) {
                function t(t, r, n, o, a) {
                    for (var i = t[r], s = 0; s < e.length; s++) if (l(i, e[s])) return null;
                    var u = JSON.stringify(e, function (e, t) {
                        return "symbol" === k(t) ? String(t) : t;
                    });
                    return new p("Invalid " + o + " `" + a + "` of value `" + String(i) + "` supplied to `" + n + "`, expected one of " + u + ".");
                }
                return Array.isArray(e) ? d(t) : n;
            }
            function v(e) {
                function t(t, r, n, o, a) {
                    if ("function" != typeof e) return new p("Property `" + a + "` of component `" + n + "` has invalid PropType notation inside objectOf.");
                    var s = t[r],
                        c = x(s);
                    if ("object" !== c) return new p("Invalid " + o + " `" + a + "` of type `" + c + "` supplied to `" + n + "`, expected an object.");
                    for (var l in s)
                        if (u(s, l)) {
                            var d = e(s, l, n, o, a + "." + l, i);
                            if (d instanceof Error) return d;
                        }
                    return null;
                }
                return d(t);
            }
            function y(e) {
                function t(t, r, n, o, a) {
                    for (var s = 0; s < e.length; s++) {
                        if (null == (0, e[s])(t, r, n, o, a, i)) return null;
                    }
                    return new p("Invalid " + o + " `" + a + "` supplied to `" + n + "`.");
                }
                if (!Array.isArray(e)) return n;
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    if ("function" != typeof o) return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + S(o) + " at index " + r + "."), n;
                }
                return d(t);
            }
            function b(e) {
                function t(t, r, n, o, a) {
                    var s = t[r],
                        u = x(s);
                    if ("object" !== u) return new p("Invalid " + o + " `" + a + "` of type `" + u + "` supplied to `" + n + "`, expected `object`.");
                    for (var c in e) {
                        var l = e[c];
                        if (l) {
                            var d = l(s, c, n, o, a + "." + c, i);
                            if (d) return d;
                        }
                    }
                    return null;
                }
                return d(t);
            }
            function w(e) {
                function t(t, r, n, o, s) {
                    var u = t[r],
                        c = x(u);
                    if ("object" !== c) return new p("Invalid " + o + " `" + s + "` of type `" + c + "` supplied to `" + n + "`, expected `object`.");
                    var l = a({}, t[r], e);
                    for (var d in l) {
                        var f = e[d];
                        if (!f) return new p("Invalid " + o + " `" + s + "` key `" + d + "` supplied to `" + n + "`.\nBad object: " + JSON.stringify(t[r], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                        var h = f(u, d, n, o, s + "." + d, i);
                        if (h) return h;
                    }
                    return null;
                }
                return d(t);
            }
            function E(t) {
                switch (typeof t) {
                    case "number":
                    case "string":
                    case "undefined":
                        return !0;
                    case "boolean":
                        return !t;
                    case "object":
                        if (Array.isArray(t)) return t.every(E);
                        if (null === t || e(t)) return !0;
                        var n = r(t);
                        if (!n) return !1;
                        var o,
                            a = n.call(t);
                        if (n !== t.entries) {
                            for (; !(o = a.next()).done; ) if (!E(o.value)) return !1;
                        } else
                            for (; !(o = a.next()).done; ) {
                                var i = o.value;
                                if (i && !E(i[1])) return !1;
                            }
                        return !0;
                    default:
                        return !1;
                }
            }
            function C(e, t) {
                return "symbol" === e || (!!t && ("Symbol" === t["@@toStringTag"] || ("function" == typeof Symbol && t instanceof Symbol)));
            }
            function x(e) {
                var t = typeof e;
                return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : C(t, e) ? "symbol" : t;
            }
            function k(e) {
                if (void 0 === e || null === e) return "" + e;
                var t = x(e);
                if ("object" === t) {
                    if (e instanceof Date) return "date";
                    if (e instanceof RegExp) return "regexp";
                }
                return t;
            }
            function S(e) {
                var t = k(e);
                switch (t) {
                    case "array":
                    case "object":
                        return "an " + t;
                    case "boolean":
                    case "date":
                    case "regexp":
                        return "a " + t;
                    default:
                        return t;
                }
            }
            function _(e) {
                return e.constructor && e.constructor.name ? e.constructor.name : T;
            }
            var A = "function" == typeof Symbol && Symbol.iterator,
                D = "@@iterator",
                T = "<<anonymous>>",
                N = {
                    array: f("array"),
                    bool: f("boolean"),
                    func: f("function"),
                    number: f("number"),
                    object: f("object"),
                    string: f("string"),
                    symbol: f("symbol"),
                    any: (function () {
                        return d(n);
                    })(),
                    arrayOf: h,
                    element: (function () {
                        function t(t, r, n, o, a) {
                            var i = t[r];
                            if (!e(i)) {
                                return new p("Invalid " + o + " `" + a + "` of type `" + x(i) + "` supplied to `" + n + "`, expected a single ReactElement.");
                            }
                            return null;
                        }
                        return d(t);
                    })(),
                    elementType: (function () {
                        function e(e, t, r, n, a) {
                            var i = e[t];
                            if (!o.isValidElementType(i)) {
                                return new p("Invalid " + n + " `" + a + "` of type `" + x(i) + "` supplied to `" + r + "`, expected a single ReactElement type.");
                            }
                            return null;
                        }
                        return d(e);
                    })(),
                    instanceOf: m,
                    node: (function () {
                        function e(e, t, r, n, o) {
                            return E(e[t]) ? null : new p("Invalid " + n + " `" + o + "` supplied to `" + r + "`, expected a ReactNode.");
                        }
                        return d(e);
                    })(),
                    objectOf: v,
                    oneOf: g,
                    oneOfType: y,
                    shape: b,
                    exact: w,
                };
            return (p.prototype = Error.prototype), (N.checkPropTypes = s), (N.resetWarningCache = s.resetWarningCache), (N.PropTypes = N), N;
        };
    },
    function (e, t, r) {
        "use strict";
        e.exports = r(93);
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            if ("object" == typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                    case i:
                        switch ((e = e.type)) {
                            case f:
                            case h:
                            case u:
                            case l:
                            case c:
                            case g:
                                return e;
                            default:
                                switch ((e = e && e.$$typeof)) {
                                    case d:
                                    case m:
                                    case b:
                                    case y:
                                    case p:
                                        return e;
                                    default:
                                        return t;
                                }
                        }
                    case s:
                        return t;
                }
            }
        }
        function o(e) {
            return n(e) === h;
        }
        /** @license React v16.13.1
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var a = "function" == typeof Symbol && Symbol.for,
            i = a ? Symbol.for("react.element") : 60103,
            s = a ? Symbol.for("react.portal") : 60106,
            u = a ? Symbol.for("react.fragment") : 60107,
            c = a ? Symbol.for("react.strict_mode") : 60108,
            l = a ? Symbol.for("react.profiler") : 60114,
            p = a ? Symbol.for("react.provider") : 60109,
            d = a ? Symbol.for("react.context") : 60110,
            f = a ? Symbol.for("react.async_mode") : 60111,
            h = a ? Symbol.for("react.concurrent_mode") : 60111,
            m = a ? Symbol.for("react.forward_ref") : 60112,
            g = a ? Symbol.for("react.suspense") : 60113,
            v = a ? Symbol.for("react.suspense_list") : 60120,
            y = a ? Symbol.for("react.memo") : 60115,
            b = a ? Symbol.for("react.lazy") : 60116,
            w = a ? Symbol.for("react.block") : 60121,
            E = a ? Symbol.for("react.fundamental") : 60117,
            C = a ? Symbol.for("react.responder") : 60118,
            x = a ? Symbol.for("react.scope") : 60119;
        (t.AsyncMode = f),
            (t.ConcurrentMode = h),
            (t.ContextConsumer = d),
            (t.ContextProvider = p),
            (t.Element = i),
            (t.ForwardRef = m),
            (t.Fragment = u),
            (t.Lazy = b),
            (t.Memo = y),
            (t.Portal = s),
            (t.Profiler = l),
            (t.StrictMode = c),
            (t.Suspense = g),
            (t.isAsyncMode = function (e) {
                return o(e) || n(e) === f;
            }),
            (t.isConcurrentMode = o),
            (t.isContextConsumer = function (e) {
                return n(e) === d;
            }),
            (t.isContextProvider = function (e) {
                return n(e) === p;
            }),
            (t.isElement = function (e) {
                return "object" == typeof e && null !== e && e.$$typeof === i;
            }),
            (t.isForwardRef = function (e) {
                return n(e) === m;
            }),
            (t.isFragment = function (e) {
                return n(e) === u;
            }),
            (t.isLazy = function (e) {
                return n(e) === b;
            }),
            (t.isMemo = function (e) {
                return n(e) === y;
            }),
            (t.isPortal = function (e) {
                return n(e) === s;
            }),
            (t.isProfiler = function (e) {
                return n(e) === l;
            }),
            (t.isStrictMode = function (e) {
                return n(e) === c;
            }),
            (t.isSuspense = function (e) {
                return n(e) === g;
            }),
            (t.isValidElementType = function (e) {
                return (
                    "string" == typeof e ||
                    "function" == typeof e ||
                    e === u ||
                    e === h ||
                    e === l ||
                    e === c ||
                    e === g ||
                    e === v ||
                    ("object" == typeof e && null !== e && (e.$$typeof === b || e.$$typeof === y || e.$$typeof === p || e.$$typeof === d || e.$$typeof === m || e.$$typeof === E || e.$$typeof === C || e.$$typeof === x || e.$$typeof === w))
                );
            }),
            (t.typeOf = n);
    },
    function (e, t, r) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n, o) {}
        (n.resetWarningCache = function () {}), (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        e.exports = "15.7.0";
    },
    function (e, t, r) {
        "use strict";
        var n = r(49),
            o = n.Component,
            a = r(13),
            i = a.isValidElement,
            s = r(50),
            u = r(98);
        e.exports = u(o, i, s);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n, o, a, i, s) {
            if ((u(t), !e)) {
                var c;
                if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var l = [r, n, o, a, i, s],
                        p = 0;
                    (c = new Error(
                        t.replace(/%s/g, function () {
                            return l[p++];
                        })
                    )),
                        (c.name = "Invariant Violation");
                }
                throw ((c.framesToPop = 1), c);
            }
        }
        function o(e) {
            return e;
        }
        function a(e, t, r) {
            function a(e, t) {
                var r = y.hasOwnProperty(t) ? y[t] : null;
                x.hasOwnProperty(t) && n("OVERRIDE_BASE" === r, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", t),
                    e && n("DEFINE_MANY" === r || "DEFINE_MANY_MERGED" === r, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", t);
            }
            function u(e, r) {
                if (r) {
                    n("function" != typeof r, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),
                        n(!t(r), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
                    var o = e.prototype,
                        i = o.__reactAutoBindPairs;
                    r.hasOwnProperty(c) && w.mixins(e, r.mixins);
                    for (var s in r)
                        if (r.hasOwnProperty(s) && s !== c) {
                            var u = r[s],
                                l = o.hasOwnProperty(s);
                            if ((a(l, s), w.hasOwnProperty(s))) w[s](e, u);
                            else {
                                var p = y.hasOwnProperty(s),
                                    h = "function" == typeof u,
                                    m = h && !p && !l && !1 !== r.autobind;
                                if (m) i.push(s, u), (o[s] = u);
                                else if (l) {
                                    var g = y[s];
                                    n(p && ("DEFINE_MANY_MERGED" === g || "DEFINE_MANY" === g), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", g, s),
                                        "DEFINE_MANY_MERGED" === g ? (o[s] = d(o[s], u)) : "DEFINE_MANY" === g && (o[s] = f(o[s], u));
                                } else o[s] = u;
                            }
                        }
                } else;
            }
            function l(e, t) {
                if (t)
                    for (var r in t) {
                        var o = t[r];
                        if (t.hasOwnProperty(r)) {
                            var a = r in w;
                            n(!a, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', r);
                            var i = r in e;
                            if (i) {
                                var s = b.hasOwnProperty(r) ? b[r] : null;
                                return n("DEFINE_MANY_MERGED" === s, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", r), void (e[r] = d(e[r], o));
                            }
                            e[r] = o;
                        }
                    }
            }
            function p(e, t) {
                n(e && t && "object" == typeof e && "object" == typeof t, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");
                for (var r in t)
                    t.hasOwnProperty(r) &&
                        (n(
                            void 0 === e[r],
                            "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",
                            r
                        ),
                        (e[r] = t[r]));
                return e;
            }
            function d(e, t) {
                return function () {
                    var r = e.apply(this, arguments),
                        n = t.apply(this, arguments);
                    if (null == r) return n;
                    if (null == n) return r;
                    var o = {};
                    return p(o, r), p(o, n), o;
                };
            }
            function f(e, t) {
                return function () {
                    e.apply(this, arguments), t.apply(this, arguments);
                };
            }
            function h(e, t) {
                var r = t.bind(e);
                return r;
            }
            function m(e) {
                for (var t = e.__reactAutoBindPairs, r = 0; r < t.length; r += 2) {
                    var n = t[r],
                        o = t[r + 1];
                    e[n] = h(e, o);
                }
            }
            function g(e) {
                var t = o(function (e, o, a) {
                    this.__reactAutoBindPairs.length && m(this), (this.props = e), (this.context = o), (this.refs = s), (this.updater = a || r), (this.state = null);
                    var i = this.getInitialState ? this.getInitialState() : null;
                    n("object" == typeof i && !Array.isArray(i), "%s.getInitialState(): must return an object or null", t.displayName || "ReactCompositeComponent"), (this.state = i);
                });
                (t.prototype = new k()),
                    (t.prototype.constructor = t),
                    (t.prototype.__reactAutoBindPairs = []),
                    v.forEach(u.bind(null, t)),
                    u(t, E),
                    u(t, e),
                    u(t, C),
                    t.getDefaultProps && (t.defaultProps = t.getDefaultProps()),
                    n(t.prototype.render, "createClass(...): Class specification must implement a `render` method.");
                for (var a in y) t.prototype[a] || (t.prototype[a] = null);
                return t;
            }
            var v = [],
                y = {
                    mixins: "DEFINE_MANY",
                    statics: "DEFINE_MANY",
                    propTypes: "DEFINE_MANY",
                    contextTypes: "DEFINE_MANY",
                    childContextTypes: "DEFINE_MANY",
                    getDefaultProps: "DEFINE_MANY_MERGED",
                    getInitialState: "DEFINE_MANY_MERGED",
                    getChildContext: "DEFINE_MANY_MERGED",
                    render: "DEFINE_ONCE",
                    componentWillMount: "DEFINE_MANY",
                    componentDidMount: "DEFINE_MANY",
                    componentWillReceiveProps: "DEFINE_MANY",
                    shouldComponentUpdate: "DEFINE_ONCE",
                    componentWillUpdate: "DEFINE_MANY",
                    componentDidUpdate: "DEFINE_MANY",
                    componentWillUnmount: "DEFINE_MANY",
                    UNSAFE_componentWillMount: "DEFINE_MANY",
                    UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
                    UNSAFE_componentWillUpdate: "DEFINE_MANY",
                    updateComponent: "OVERRIDE_BASE",
                },
                b = { getDerivedStateFromProps: "DEFINE_MANY_MERGED" },
                w = {
                    displayName: function (e, t) {
                        e.displayName = t;
                    },
                    mixins: function (e, t) {
                        if (t) for (var r = 0; r < t.length; r++) u(e, t[r]);
                    },
                    childContextTypes: function (e, t) {
                        e.childContextTypes = i({}, e.childContextTypes, t);
                    },
                    contextTypes: function (e, t) {
                        e.contextTypes = i({}, e.contextTypes, t);
                    },
                    getDefaultProps: function (e, t) {
                        e.getDefaultProps ? (e.getDefaultProps = d(e.getDefaultProps, t)) : (e.getDefaultProps = t);
                    },
                    propTypes: function (e, t) {
                        e.propTypes = i({}, e.propTypes, t);
                    },
                    statics: function (e, t) {
                        l(e, t);
                    },
                    autobind: function () {},
                },
                E = {
                    componentDidMount: function () {
                        this.__isMounted = !0;
                    },
                },
                C = {
                    componentWillUnmount: function () {
                        this.__isMounted = !1;
                    },
                },
                x = {
                    replaceState: function (e, t) {
                        this.updater.enqueueReplaceState(this, e, t);
                    },
                    isMounted: function () {
                        return !!this.__isMounted;
                    },
                },
                k = function () {};
            return i(k.prototype, e.prototype, x), g;
        }
        var i = r(3),
            s = {},
            u = function (e) {},
            c = "mixins";
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return a.isValidElement(e) || o("143"), e;
        }
        var o = r(17),
            a = r(13);
        r(0);
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        e.exports = r(101);
    },
    function (e, t, r) {
        "use strict";
        var n = r(4),
            o = r(102),
            a = r(78),
            i = r(15),
            s = r(8),
            u = r(174),
            c = r(175),
            l = r(79),
            p = r(176);
        r(2);
        o.inject();
        var d = { findDOMNode: c, render: a.render, unmountComponentAtNode: a.unmountComponentAtNode, version: u, unstable_batchedUpdates: s.batchedUpdates, unstable_renderSubtreeIntoContainer: p };
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject &&
            __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
                ComponentTree: {
                    getClosestInstanceFromNode: n.getClosestInstanceFromNode,
                    getNodeFromInstance: function (e) {
                        return e._renderedComponent && (e = l(e)), e ? n.getNodeFromInstance(e) : null;
                    },
                },
                Mount: a,
                Reconciler: i,
            });
        e.exports = d;
    },
    function (e, t, r) {
        "use strict";
        function n() {
            x ||
                ((x = !0),
                y.EventEmitter.injectReactEventListener(v),
                y.EventPluginHub.injectEventPluginOrder(s),
                y.EventPluginUtils.injectComponentTree(d),
                y.EventPluginUtils.injectTreeTraversal(h),
                y.EventPluginHub.injectEventPluginsByName({ SimpleEventPlugin: C, EnterLeaveEventPlugin: u, ChangeEventPlugin: i, SelectEventPlugin: E, BeforeInputEventPlugin: a }),
                y.HostComponent.injectGenericComponentClass(p),
                y.HostComponent.injectTextComponentClass(m),
                y.DOMProperty.injectDOMPropertyConfig(o),
                y.DOMProperty.injectDOMPropertyConfig(c),
                y.DOMProperty.injectDOMPropertyConfig(w),
                y.EmptyComponent.injectEmptyComponentFactory(function (e) {
                    return new f(e);
                }),
                y.Updates.injectReconcileTransaction(b),
                y.Updates.injectBatchingStrategy(g),
                y.Component.injectEnvironment(l));
        }
        var o = r(103),
            a = r(104),
            i = r(108),
            s = r(111),
            u = r(112),
            c = r(113),
            l = r(114),
            p = r(120),
            d = r(4),
            f = r(145),
            h = r(146),
            m = r(147),
            g = r(148),
            v = r(149),
            y = r(151),
            b = r(152),
            w = r(158),
            E = r(159),
            C = r(160),
            x = !1;
        e.exports = { inject: n };
    },
    function (e, t, r) {
        "use strict";
        var n = {
            Properties: {
                "aria-current": 0,
                "aria-details": 0,
                "aria-disabled": 0,
                "aria-hidden": 0,
                "aria-invalid": 0,
                "aria-keyshortcuts": 0,
                "aria-label": 0,
                "aria-roledescription": 0,
                "aria-autocomplete": 0,
                "aria-checked": 0,
                "aria-expanded": 0,
                "aria-haspopup": 0,
                "aria-level": 0,
                "aria-modal": 0,
                "aria-multiline": 0,
                "aria-multiselectable": 0,
                "aria-orientation": 0,
                "aria-placeholder": 0,
                "aria-pressed": 0,
                "aria-readonly": 0,
                "aria-required": 0,
                "aria-selected": 0,
                "aria-sort": 0,
                "aria-valuemax": 0,
                "aria-valuemin": 0,
                "aria-valuenow": 0,
                "aria-valuetext": 0,
                "aria-atomic": 0,
                "aria-busy": 0,
                "aria-live": 0,
                "aria-relevant": 0,
                "aria-dropeffect": 0,
                "aria-grabbed": 0,
                "aria-activedescendant": 0,
                "aria-colcount": 0,
                "aria-colindex": 0,
                "aria-colspan": 0,
                "aria-controls": 0,
                "aria-describedby": 0,
                "aria-errormessage": 0,
                "aria-flowto": 0,
                "aria-labelledby": 0,
                "aria-owns": 0,
                "aria-posinset": 0,
                "aria-rowcount": 0,
                "aria-rowindex": 0,
                "aria-rowspan": 0,
                "aria-setsize": 0,
            },
            DOMAttributeNames: {},
            DOMPropertyNames: {},
        };
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
        }
        function o(e) {
            switch (e) {
                case "topCompositionStart":
                    return S.compositionStart;
                case "topCompositionEnd":
                    return S.compositionEnd;
                case "topCompositionUpdate":
                    return S.compositionUpdate;
            }
        }
        function a(e, t) {
            return "topKeyDown" === e && t.keyCode === y;
        }
        function i(e, t) {
            switch (e) {
                case "topKeyUp":
                    return -1 !== v.indexOf(t.keyCode);
                case "topKeyDown":
                    return t.keyCode !== y;
                case "topKeyPress":
                case "topMouseDown":
                case "topBlur":
                    return !0;
                default:
                    return !1;
            }
        }
        function s(e) {
            var t = e.detail;
            return "object" == typeof t && "data" in t ? t.data : null;
        }
        function u(e, t, r, n) {
            var u, c;
            if ((b ? (u = o(e)) : A ? i(e, r) && (u = S.compositionEnd) : a(e, r) && (u = S.compositionStart), !u)) return null;
            C && (A || u !== S.compositionStart ? u === S.compositionEnd && A && (c = A.getData()) : (A = h.getPooled(n)));
            var l = m.getPooled(u, t, r, n);
            if (c) l.data = c;
            else {
                var p = s(r);
                null !== p && (l.data = p);
            }
            return d.accumulateTwoPhaseDispatches(l), l;
        }
        function c(e, t) {
            switch (e) {
                case "topCompositionEnd":
                    return s(t);
                case "topKeyPress":
                    return t.which !== x ? null : ((_ = !0), k);
                case "topTextInput":
                    var r = t.data;
                    return r === k && _ ? null : r;
                default:
                    return null;
            }
        }
        function l(e, t) {
            if (A) {
                if ("topCompositionEnd" === e || (!b && i(e, t))) {
                    var r = A.getData();
                    return h.release(A), (A = null), r;
                }
                return null;
            }
            switch (e) {
                case "topPaste":
                    return null;
                case "topKeyPress":
                    return t.which && !n(t) ? String.fromCharCode(t.which) : null;
                case "topCompositionEnd":
                    return C ? null : t.data;
                default:
                    return null;
            }
        }
        function p(e, t, r, n) {
            var o;
            if (!(o = E ? c(e, r) : l(e, r))) return null;
            var a = g.getPooled(S.beforeInput, t, r, n);
            return (a.data = o), d.accumulateTwoPhaseDispatches(a), a;
        }
        var d = r(18),
            f = r(5),
            h = r(105),
            m = r(106),
            g = r(107),
            v = [9, 13, 27, 32],
            y = 229,
            b = f.canUseDOM && "CompositionEvent" in window,
            w = null;
        f.canUseDOM && "documentMode" in document && (w = document.documentMode);
        var E =
                f.canUseDOM &&
                "TextEvent" in window &&
                !w &&
                !(function () {
                    var e = window.opera;
                    return "object" == typeof e && "function" == typeof e.version && parseInt(e.version(), 10) <= 12;
                })(),
            C = f.canUseDOM && (!b || (w && w > 8 && w <= 11)),
            x = 32,
            k = String.fromCharCode(x),
            S = {
                beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["topCompositionEnd", "topKeyPress", "topTextInput", "topPaste"] },
                compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: ["topBlur", "topCompositionEnd", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"] },
                compositionStart: {
                    phasedRegistrationNames: { bubbled: "onCompositionStart", captured: "onCompositionStartCapture" },
                    dependencies: ["topBlur", "topCompositionStart", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"],
                },
                compositionUpdate: {
                    phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" },
                    dependencies: ["topBlur", "topCompositionUpdate", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"],
                },
            },
            _ = !1,
            A = null,
            D = {
                eventTypes: S,
                extractEvents: function (e, t, r, n) {
                    return [u(e, t, r, n), p(e, t, r, n)];
                },
            };
        e.exports = D;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            (this._root = e), (this._startText = this.getText()), (this._fallbackText = null);
        }
        var o = r(3),
            a = r(11),
            i = r(57);
        o(n.prototype, {
            destructor: function () {
                (this._root = null), (this._startText = null), (this._fallbackText = null);
            },
            getText: function () {
                return "value" in this._root ? this._root.value : this._root[i()];
            },
            getData: function () {
                if (this._fallbackText) return this._fallbackText;
                var e,
                    t,
                    r = this._startText,
                    n = r.length,
                    o = this.getText(),
                    a = o.length;
                for (e = 0; e < n && r[e] === o[e]; e++);
                var i = n - e;
                for (t = 1; t <= i && r[n - t] === o[a - t]; t++);
                var s = t > 1 ? 1 - t : void 0;
                return (this._fallbackText = o.slice(e, s)), this._fallbackText;
            },
        }),
            a.addPoolingTo(n),
            (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            return o.call(this, e, t, r, n);
        }
        var o = r(10),
            a = { data: null };
        o.augmentClass(n, a), (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            return o.call(this, e, t, r, n);
        }
        var o = r(10),
            a = { data: null };
        o.augmentClass(n, a), (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r) {
            var n = _.getPooled(q.change, e, t, r);
            return (n.type = "change"), C.accumulateTwoPhaseDispatches(n), n;
        }
        function o(e) {
            var t = e.nodeName && e.nodeName.toLowerCase();
            return "select" === t || ("input" === t && "file" === e.type);
        }
        function a(e) {
            var t = n(R, e, D(e));
            S.batchedUpdates(i, t);
        }
        function i(e) {
            E.enqueueEvents(e), E.processEventQueue(!1);
        }
        function s(e, t) {
            (P = e), (R = t), P.attachEvent("onchange", a);
        }
        function u() {
            P && (P.detachEvent("onchange", a), (P = null), (R = null));
        }
        function c(e, t) {
            var r = A.updateValueIfChanged(e),
                n = !0 === t.simulated && M._allowSimulatedPassThrough;
            if (r || n) return e;
        }
        function l(e, t) {
            if ("topChange" === e) return t;
        }
        function p(e, t, r) {
            "topFocus" === e ? (u(), s(t, r)) : "topBlur" === e && u();
        }
        function d(e, t) {
            (P = e), (R = t), P.attachEvent("onpropertychange", h);
        }
        function f() {
            P && (P.detachEvent("onpropertychange", h), (P = null), (R = null));
        }
        function h(e) {
            "value" === e.propertyName && c(R, e) && a(e);
        }
        function m(e, t, r) {
            "topFocus" === e ? (f(), d(t, r)) : "topBlur" === e && f();
        }
        function g(e, t, r) {
            if ("topSelectionChange" === e || "topKeyUp" === e || "topKeyDown" === e) return c(R, r);
        }
        function v(e) {
            var t = e.nodeName;
            return t && "input" === t.toLowerCase() && ("checkbox" === e.type || "radio" === e.type);
        }
        function y(e, t, r) {
            if ("topClick" === e) return c(t, r);
        }
        function b(e, t, r) {
            if ("topInput" === e || "topChange" === e) return c(t, r);
        }
        function w(e, t) {
            if (null != e) {
                var r = e._wrapperState || t._wrapperState;
                if (r && r.controlled && "number" === t.type) {
                    var n = "" + t.value;
                    t.getAttribute("value") !== n && t.setAttribute("value", n);
                }
            }
        }
        var E = r(19),
            C = r(18),
            x = r(5),
            k = r(4),
            S = r(8),
            _ = r(10),
            A = r(60),
            D = r(33),
            T = r(34),
            N = r(61),
            q = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: ["topBlur", "topChange", "topClick", "topFocus", "topInput", "topKeyDown", "topKeyUp", "topSelectionChange"] } },
            P = null,
            R = null,
            I = !1;
        x.canUseDOM && (I = T("change") && (!document.documentMode || document.documentMode > 8));
        var L = !1;
        x.canUseDOM && (L = T("input") && (!document.documentMode || document.documentMode > 9));
        var M = {
            eventTypes: q,
            _allowSimulatedPassThrough: !0,
            _isInputEventSupported: L,
            extractEvents: function (e, t, r, a) {
                var i,
                    s,
                    u = t ? k.getNodeFromInstance(t) : window;
                if ((o(u) ? (I ? (i = l) : (s = p)) : N(u) ? (L ? (i = b) : ((i = g), (s = m))) : v(u) && (i = y), i)) {
                    var c = i(e, t, r);
                    if (c) {
                        return n(c, r, a);
                    }
                }
                s && s(e, u, t), "topBlur" === e && w(t, u);
            },
        };
        e.exports = M;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r) {
            "function" == typeof e ? e(t.getPublicInstance()) : a.addComponentAsRefTo(t, e, r);
        }
        function o(e, t, r) {
            "function" == typeof e ? e(null) : a.removeComponentAsRefFrom(t, e, r);
        }
        var a = r(110),
            i = {};
        (i.attachRefs = function (e, t) {
            if (null !== t && "object" == typeof t) {
                var r = t.ref;
                null != r && n(r, e, t._owner);
            }
        }),
            (i.shouldUpdateRefs = function (e, t) {
                var r = null,
                    n = null;
                null !== e && "object" == typeof e && ((r = e.ref), (n = e._owner));
                var o = null,
                    a = null;
                return null !== t && "object" == typeof t && ((o = t.ref), (a = t._owner)), r !== o || ("string" == typeof o && a !== n);
            }),
            (i.detachRefs = function (e, t) {
                if (null !== t && "object" == typeof t) {
                    var r = t.ref;
                    null != r && o(r, e, t._owner);
                }
            }),
            (e.exports = i);
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return !(!e || "function" != typeof e.attachRef || "function" != typeof e.detachRef);
        }
        var o = r(1),
            a =
                (r(0),
                {
                    addComponentAsRefTo: function (e, t, r) {
                        n(r) || o("119"), r.attachRef(t, e);
                    },
                    removeComponentAsRefFrom: function (e, t, r) {
                        n(r) || o("120");
                        var a = r.getPublicInstance();
                        a && a.refs[t] === e.getPublicInstance() && r.detachRef(t);
                    },
                });
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        var n = ["ResponderEventPlugin", "SimpleEventPlugin", "TapEventPlugin", "EnterLeaveEventPlugin", "ChangeEventPlugin", "SelectEventPlugin", "BeforeInputEventPlugin"];
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        var n = r(18),
            o = r(4),
            a = r(23),
            i = { mouseEnter: { registrationName: "onMouseEnter", dependencies: ["topMouseOut", "topMouseOver"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["topMouseOut", "topMouseOver"] } },
            s = {
                eventTypes: i,
                extractEvents: function (e, t, r, s) {
                    if ("topMouseOver" === e && (r.relatedTarget || r.fromElement)) return null;
                    if ("topMouseOut" !== e && "topMouseOver" !== e) return null;
                    var u;
                    if (s.window === s) u = s;
                    else {
                        var c = s.ownerDocument;
                        u = c ? c.defaultView || c.parentWindow : window;
                    }
                    var l, p;
                    if ("topMouseOut" === e) {
                        l = t;
                        var d = r.relatedTarget || r.toElement;
                        p = d ? o.getClosestInstanceFromNode(d) : null;
                    } else (l = null), (p = t);
                    if (l === p) return null;
                    var f = null == l ? u : o.getNodeFromInstance(l),
                        h = null == p ? u : o.getNodeFromInstance(p),
                        m = a.getPooled(i.mouseLeave, l, r, s);
                    (m.type = "mouseleave"), (m.target = f), (m.relatedTarget = h);
                    var g = a.getPooled(i.mouseEnter, p, r, s);
                    return (g.type = "mouseenter"), (g.target = h), (g.relatedTarget = f), n.accumulateEnterLeaveDispatches(m, g, l, p), [m, g];
                },
            };
        e.exports = s;
    },
    function (e, t, r) {
        "use strict";
        var n = r(14),
            o = n.injection.MUST_USE_PROPERTY,
            a = n.injection.HAS_BOOLEAN_VALUE,
            i = n.injection.HAS_NUMERIC_VALUE,
            s = n.injection.HAS_POSITIVE_NUMERIC_VALUE,
            u = n.injection.HAS_OVERLOADED_BOOLEAN_VALUE,
            c = {
                isCustomAttribute: RegExp.prototype.test.bind(new RegExp("^(data|aria)-[" + n.ATTRIBUTE_NAME_CHAR + "]*$")),
                Properties: {
                    accept: 0,
                    acceptCharset: 0,
                    accessKey: 0,
                    action: 0,
                    allowFullScreen: a,
                    allowTransparency: 0,
                    alt: 0,
                    as: 0,
                    async: a,
                    autoComplete: 0,
                    autoPlay: a,
                    capture: a,
                    cellPadding: 0,
                    cellSpacing: 0,
                    charSet: 0,
                    challenge: 0,
                    checked: o | a,
                    cite: 0,
                    classID: 0,
                    className: 0,
                    cols: s,
                    colSpan: 0,
                    content: 0,
                    contentEditable: 0,
                    contextMenu: 0,
                    controls: a,
                    controlsList: 0,
                    coords: 0,
                    crossOrigin: 0,
                    data: 0,
                    dateTime: 0,
                    default: a,
                    defer: a,
                    dir: 0,
                    disabled: a,
                    download: u,
                    draggable: 0,
                    encType: 0,
                    form: 0,
                    formAction: 0,
                    formEncType: 0,
                    formMethod: 0,
                    formNoValidate: a,
                    formTarget: 0,
                    frameBorder: 0,
                    headers: 0,
                    height: 0,
                    hidden: a,
                    high: 0,
                    href: 0,
                    hrefLang: 0,
                    htmlFor: 0,
                    httpEquiv: 0,
                    icon: 0,
                    id: 0,
                    inputMode: 0,
                    integrity: 0,
                    is: 0,
                    keyParams: 0,
                    keyType: 0,
                    kind: 0,
                    label: 0,
                    lang: 0,
                    list: 0,
                    loop: a,
                    low: 0,
                    manifest: 0,
                    marginHeight: 0,
                    marginWidth: 0,
                    max: 0,
                    maxLength: 0,
                    media: 0,
                    mediaGroup: 0,
                    method: 0,
                    min: 0,
                    minLength: 0,
                    multiple: o | a,
                    muted: o | a,
                    name: 0,
                    nonce: 0,
                    noValidate: a,
                    open: a,
                    optimum: 0,
                    pattern: 0,
                    placeholder: 0,
                    playsInline: a,
                    poster: 0,
                    preload: 0,
                    profile: 0,
                    radioGroup: 0,
                    readOnly: a,
                    referrerPolicy: 0,
                    rel: 0,
                    required: a,
                    reversed: a,
                    role: 0,
                    rows: s,
                    rowSpan: i,
                    sandbox: 0,
                    scope: 0,
                    scoped: a,
                    scrolling: 0,
                    seamless: a,
                    selected: o | a,
                    shape: 0,
                    size: s,
                    sizes: 0,
                    span: s,
                    spellCheck: 0,
                    src: 0,
                    srcDoc: 0,
                    srcLang: 0,
                    srcSet: 0,
                    start: i,
                    step: 0,
                    style: 0,
                    summary: 0,
                    tabIndex: 0,
                    target: 0,
                    title: 0,
                    type: 0,
                    useMap: 0,
                    value: 0,
                    width: 0,
                    wmode: 0,
                    wrap: 0,
                    about: 0,
                    datatype: 0,
                    inlist: 0,
                    prefix: 0,
                    property: 0,
                    resource: 0,
                    typeof: 0,
                    vocab: 0,
                    autoCapitalize: 0,
                    autoCorrect: 0,
                    autoSave: 0,
                    color: 0,
                    itemProp: 0,
                    itemScope: a,
                    itemType: 0,
                    itemID: 0,
                    itemRef: 0,
                    results: 0,
                    security: 0,
                    unselectable: 0,
                },
                DOMAttributeNames: { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" },
                DOMPropertyNames: {},
                DOMMutationMethods: {
                    value: function (e, t) {
                        if (null == t) return e.removeAttribute("value");
                        "number" !== e.type || !1 === e.hasAttribute("value") ? e.setAttribute("value", "" + t) : e.validity && !e.validity.badInput && e.ownerDocument.activeElement !== e && e.setAttribute("value", "" + t);
                    },
                },
            };
        e.exports = c;
    },
    function (e, t, r) {
        "use strict";
        var n = r(36),
            o = r(119),
            a = { processChildrenUpdates: o.dangerouslyProcessChildrenUpdates, replaceNodeWithMarkup: n.dangerouslyReplaceNodeWithMarkup };
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        var n = r(1),
            o = r(16),
            a = r(5),
            i = r(116),
            s = r(7),
            u =
                (r(0),
                {
                    dangerouslyReplaceNodeWithMarkup: function (e, t) {
                        if ((a.canUseDOM || n("56"), t || n("57"), "HTML" === e.nodeName && n("58"), "string" == typeof t)) {
                            var r = i(t, s)[0];
                            e.parentNode.replaceChild(r, e);
                        } else o.replaceChildWithTree(e, t);
                    },
                });
        e.exports = u;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e.match(l);
            return t && t[1].toLowerCase();
        }
        function o(e, t) {
            var r = c;
            c || u(!1);
            var o = n(e),
                a = o && s(o);
            if (a) {
                r.innerHTML = a[1] + e + a[2];
                for (var l = a[0]; l--; ) r = r.lastChild;
            } else r.innerHTML = e;
            var p = r.getElementsByTagName("script");
            p.length && (t || u(!1), i(p).forEach(t));
            for (var d = Array.from(r.childNodes); r.lastChild; ) r.removeChild(r.lastChild);
            return d;
        }
        var a = r(5),
            i = r(117),
            s = r(118),
            u = r(0),
            c = a.canUseDOM ? document.createElement("div") : null,
            l = /^\s*<(\w+)/;
        e.exports = o;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e.length;
            if (((Array.isArray(e) || ("object" != typeof e && "function" != typeof e)) && i(!1), "number" != typeof t && i(!1), 0 === t || t - 1 in e || i(!1), "function" == typeof e.callee && i(!1), e.hasOwnProperty))
                try {
                    return Array.prototype.slice.call(e);
                } catch (e) {}
            for (var r = Array(t), n = 0; n < t; n++) r[n] = e[n];
            return r;
        }
        function o(e) {
            return !!e && ("object" == typeof e || "function" == typeof e) && "length" in e && !("setInterval" in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee" in e || "item" in e);
        }
        function a(e) {
            return o(e) ? (Array.isArray(e) ? e.slice() : n(e)) : [e];
        }
        var i = r(0);
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return i || a(!1), d.hasOwnProperty(e) || (e = "*"), s.hasOwnProperty(e) || ((i.innerHTML = "*" === e ? "<link />" : "<" + e + "></" + e + ">"), (s[e] = !i.firstChild)), s[e] ? d[e] : null;
        }
        var o = r(5),
            a = r(0),
            i = o.canUseDOM ? document.createElement("div") : null,
            s = {},
            u = [1, '<select multiple="true">', "</select>"],
            c = [1, "<table>", "</table>"],
            l = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            p = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
            d = {
                "*": [1, "?<div>", "</div>"],
                area: [1, "<map>", "</map>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                param: [1, "<object>", "</object>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                optgroup: u,
                option: u,
                caption: c,
                colgroup: c,
                tbody: c,
                tfoot: c,
                thead: c,
                td: l,
                th: l,
            };
        ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"].forEach(function (e) {
            (d[e] = p), (s[e] = !0);
        }),
            (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        var n = r(36),
            o = r(4),
            a = {
                dangerouslyProcessChildrenUpdates: function (e, t) {
                    var r = o.getNodeFromInstance(e);
                    n.processUpdates(r, t);
                },
            };
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            if (e) {
                var t = e._currentElement._owner || null;
                if (t) {
                    var r = t.getName();
                    if (r) return " This DOM node was rendered by `" + r + "`.";
                }
            }
            return "";
        }
        function o(e, t) {
            t &&
                (X[e._tag] && (null != t.children || null != t.dangerouslySetInnerHTML) && g("137", e._tag, e._currentElement._owner ? " Check the render method of " + e._currentElement._owner.getName() + "." : ""),
                null != t.dangerouslySetInnerHTML && (null != t.children && g("60"), ("object" == typeof t.dangerouslySetInnerHTML && H in t.dangerouslySetInnerHTML) || g("61")),
                null != t.style && "object" != typeof t.style && g("62", n(e)));
        }
        function a(e, t, r, n) {
            if (!(n instanceof I)) {
                var o = e._hostContainerInfo,
                    a = o._node && o._node.nodeType === G,
                    s = a ? o._node : o._ownerDocument;
                B(t, s), n.getReactMountReady().enqueue(i, { inst: e, registrationName: t, listener: r });
            }
        }
        function i() {
            var e = this;
            k.putListener(e.inst, e.registrationName, e.listener);
        }
        function s() {
            var e = this;
            T.postMountWrapper(e);
        }
        function u() {
            var e = this;
            P.postMountWrapper(e);
        }
        function c() {
            var e = this;
            N.postMountWrapper(e);
        }
        function l() {
            M.track(this);
        }
        function p() {
            var e = this;
            e._rootNodeID || g("63");
            var t = F(e);
            switch ((t || g("64"), e._tag)) {
                case "iframe":
                case "object":
                    e._wrapperState.listeners = [_.trapBubbledEvent("topLoad", "load", t)];
                    break;
                case "video":
                case "audio":
                    e._wrapperState.listeners = [];
                    for (var r in z) z.hasOwnProperty(r) && e._wrapperState.listeners.push(_.trapBubbledEvent(r, z[r], t));
                    break;
                case "source":
                    e._wrapperState.listeners = [_.trapBubbledEvent("topError", "error", t)];
                    break;
                case "img":
                    e._wrapperState.listeners = [_.trapBubbledEvent("topError", "error", t), _.trapBubbledEvent("topLoad", "load", t)];
                    break;
                case "form":
                    e._wrapperState.listeners = [_.trapBubbledEvent("topReset", "reset", t), _.trapBubbledEvent("topSubmit", "submit", t)];
                    break;
                case "input":
                case "select":
                case "textarea":
                    e._wrapperState.listeners = [_.trapBubbledEvent("topInvalid", "invalid", t)];
            }
        }
        function d() {
            q.postUpdateWrapper(this);
        }
        function f(e) {
            J.call(Q, e) || ($.test(e) || g("65", e), (Q[e] = !0));
        }
        function h(e, t) {
            return e.indexOf("-") >= 0 || null != t.is;
        }
        function m(e) {
            var t = e.type;
            f(t),
                (this._currentElement = e),
                (this._tag = t.toLowerCase()),
                (this._namespaceURI = null),
                (this._renderedChildren = null),
                (this._previousStyle = null),
                (this._previousStyleCopy = null),
                (this._hostNode = null),
                (this._hostParent = null),
                (this._rootNodeID = 0),
                (this._domID = 0),
                (this._hostContainerInfo = null),
                (this._wrapperState = null),
                (this._topLevelWrapper = null),
                (this._flags = 0);
        }
        var g = r(1),
            v = r(3),
            y = r(121),
            b = r(122),
            w = r(16),
            E = r(37),
            C = r(14),
            x = r(66),
            k = r(19),
            S = r(30),
            _ = r(26),
            A = r(54),
            D = r(4),
            T = r(132),
            N = r(134),
            q = r(67),
            P = r(135),
            R = (r(6), r(136)),
            I = r(143),
            L = (r(7), r(25)),
            M = (r(0), r(34), r(41), r(60)),
            O = (r(45), r(2), A),
            U = k.deleteListener,
            F = D.getNodeFromInstance,
            B = _.listenTo,
            V = S.registrationNameModules,
            j = { string: !0, number: !0 },
            H = "__html",
            W = { children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null },
            G = 11,
            z = {
                topAbort: "abort",
                topCanPlay: "canplay",
                topCanPlayThrough: "canplaythrough",
                topDurationChange: "durationchange",
                topEmptied: "emptied",
                topEncrypted: "encrypted",
                topEnded: "ended",
                topError: "error",
                topLoadedData: "loadeddata",
                topLoadedMetadata: "loadedmetadata",
                topLoadStart: "loadstart",
                topPause: "pause",
                topPlay: "play",
                topPlaying: "playing",
                topProgress: "progress",
                topRateChange: "ratechange",
                topSeeked: "seeked",
                topSeeking: "seeking",
                topStalled: "stalled",
                topSuspend: "suspend",
                topTimeUpdate: "timeupdate",
                topVolumeChange: "volumechange",
                topWaiting: "waiting",
            },
            Y = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 },
            K = { listing: !0, pre: !0, textarea: !0 },
            X = v({ menuitem: !0 }, Y),
            $ = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
            Q = {},
            J = {}.hasOwnProperty,
            Z = 1;
        (m.displayName = "ReactDOMComponent"),
            (m.Mixin = {
                mountComponent: function (e, t, r, n) {
                    (this._rootNodeID = Z++), (this._domID = r._idCounter++), (this._hostParent = t), (this._hostContainerInfo = r);
                    var a = this._currentElement.props;
                    switch (this._tag) {
                        case "audio":
                        case "form":
                        case "iframe":
                        case "img":
                        case "link":
                        case "object":
                        case "source":
                        case "video":
                            (this._wrapperState = { listeners: null }), e.getReactMountReady().enqueue(p, this);
                            break;
                        case "input":
                            T.mountWrapper(this, a, t), (a = T.getHostProps(this, a)), e.getReactMountReady().enqueue(l, this), e.getReactMountReady().enqueue(p, this);
                            break;
                        case "option":
                            N.mountWrapper(this, a, t), (a = N.getHostProps(this, a));
                            break;
                        case "select":
                            q.mountWrapper(this, a, t), (a = q.getHostProps(this, a)), e.getReactMountReady().enqueue(p, this);
                            break;
                        case "textarea":
                            P.mountWrapper(this, a, t), (a = P.getHostProps(this, a)), e.getReactMountReady().enqueue(l, this), e.getReactMountReady().enqueue(p, this);
                    }
                    o(this, a);
                    var i, d;
                    null != t ? ((i = t._namespaceURI), (d = t._tag)) : r._tag && ((i = r._namespaceURI), (d = r._tag)),
                        (null == i || (i === E.svg && "foreignobject" === d)) && (i = E.html),
                        i === E.html && ("svg" === this._tag ? (i = E.svg) : "math" === this._tag && (i = E.mathml)),
                        (this._namespaceURI = i);
                    var f;
                    if (e.useCreateElement) {
                        var h,
                            m = r._ownerDocument;
                        if (i === E.html)
                            if ("script" === this._tag) {
                                var g = m.createElement("div"),
                                    v = this._currentElement.type;
                                (g.innerHTML = "<" + v + "></" + v + ">"), (h = g.removeChild(g.firstChild));
                            } else h = a.is ? m.createElement(this._currentElement.type, a.is) : m.createElement(this._currentElement.type);
                        else h = m.createElementNS(i, this._currentElement.type);
                        D.precacheNode(this, h), (this._flags |= O.hasCachedChildNodes), this._hostParent || x.setAttributeForRoot(h), this._updateDOMProperties(null, a, e);
                        var b = w(h);
                        this._createInitialChildren(e, a, n, b), (f = b);
                    } else {
                        var C = this._createOpenTagMarkupAndPutListeners(e, a),
                            k = this._createContentMarkup(e, a, n);
                        f = !k && Y[this._tag] ? C + "/>" : C + ">" + k + "</" + this._currentElement.type + ">";
                    }
                    switch (this._tag) {
                        case "input":
                            e.getReactMountReady().enqueue(s, this), a.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
                            break;
                        case "textarea":
                            e.getReactMountReady().enqueue(u, this), a.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
                            break;
                        case "select":
                        case "button":
                            a.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
                            break;
                        case "option":
                            e.getReactMountReady().enqueue(c, this);
                    }
                    return f;
                },
                _createOpenTagMarkupAndPutListeners: function (e, t) {
                    var r = "<" + this._currentElement.type;
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            var o = t[n];
                            if (null != o)
                                if (V.hasOwnProperty(n)) o && a(this, n, o, e);
                                else {
                                    "style" === n && (o && (o = this._previousStyleCopy = v({}, t.style)), (o = b.createMarkupForStyles(o, this)));
                                    var i = null;
                                    null != this._tag && h(this._tag, t) ? W.hasOwnProperty(n) || (i = x.createMarkupForCustomAttribute(n, o)) : (i = x.createMarkupForProperty(n, o)), i && (r += " " + i);
                                }
                        }
                    return e.renderToStaticMarkup ? r : (this._hostParent || (r += " " + x.createMarkupForRoot()), (r += " " + x.createMarkupForID(this._domID)));
                },
                _createContentMarkup: function (e, t, r) {
                    var n = "",
                        o = t.dangerouslySetInnerHTML;
                    if (null != o) null != o.__html && (n = o.__html);
                    else {
                        var a = j[typeof t.children] ? t.children : null,
                            i = null != a ? null : t.children;
                        if (null != a) n = L(a);
                        else if (null != i) {
                            var s = this.mountChildren(i, e, r);
                            n = s.join("");
                        }
                    }
                    return K[this._tag] && "\n" === n.charAt(0) ? "\n" + n : n;
                },
                _createInitialChildren: function (e, t, r, n) {
                    var o = t.dangerouslySetInnerHTML;
                    if (null != o) null != o.__html && w.queueHTML(n, o.__html);
                    else {
                        var a = j[typeof t.children] ? t.children : null,
                            i = null != a ? null : t.children;
                        if (null != a) "" !== a && w.queueText(n, a);
                        else if (null != i) for (var s = this.mountChildren(i, e, r), u = 0; u < s.length; u++) w.queueChild(n, s[u]);
                    }
                },
                receiveComponent: function (e, t, r) {
                    var n = this._currentElement;
                    (this._currentElement = e), this.updateComponent(t, n, e, r);
                },
                updateComponent: function (e, t, r, n) {
                    var a = t.props,
                        i = this._currentElement.props;
                    switch (this._tag) {
                        case "input":
                            (a = T.getHostProps(this, a)), (i = T.getHostProps(this, i));
                            break;
                        case "option":
                            (a = N.getHostProps(this, a)), (i = N.getHostProps(this, i));
                            break;
                        case "select":
                            (a = q.getHostProps(this, a)), (i = q.getHostProps(this, i));
                            break;
                        case "textarea":
                            (a = P.getHostProps(this, a)), (i = P.getHostProps(this, i));
                    }
                    switch ((o(this, i), this._updateDOMProperties(a, i, e), this._updateDOMChildren(a, i, e, n), this._tag)) {
                        case "input":
                            T.updateWrapper(this), M.updateValueIfChanged(this);
                            break;
                        case "textarea":
                            P.updateWrapper(this);
                            break;
                        case "select":
                            e.getReactMountReady().enqueue(d, this);
                    }
                },
                _updateDOMProperties: function (e, t, r) {
                    var n, o, i;
                    for (n in e)
                        if (!t.hasOwnProperty(n) && e.hasOwnProperty(n) && null != e[n])
                            if ("style" === n) {
                                var s = this._previousStyleCopy;
                                for (o in s) s.hasOwnProperty(o) && ((i = i || {}), (i[o] = ""));
                                this._previousStyleCopy = null;
                            } else
                                V.hasOwnProperty(n) ? e[n] && U(this, n) : h(this._tag, e) ? W.hasOwnProperty(n) || x.deleteValueForAttribute(F(this), n) : (C.properties[n] || C.isCustomAttribute(n)) && x.deleteValueForProperty(F(this), n);
                    for (n in t) {
                        var u = t[n],
                            c = "style" === n ? this._previousStyleCopy : null != e ? e[n] : void 0;
                        if (t.hasOwnProperty(n) && u !== c && (null != u || null != c))
                            if ("style" === n)
                                if ((u ? (u = this._previousStyleCopy = v({}, u)) : (this._previousStyleCopy = null), c)) {
                                    for (o in c) !c.hasOwnProperty(o) || (u && u.hasOwnProperty(o)) || ((i = i || {}), (i[o] = ""));
                                    for (o in u) u.hasOwnProperty(o) && c[o] !== u[o] && ((i = i || {}), (i[o] = u[o]));
                                } else i = u;
                            else if (V.hasOwnProperty(n)) u ? a(this, n, u, r) : c && U(this, n);
                            else if (h(this._tag, t)) W.hasOwnProperty(n) || x.setValueForAttribute(F(this), n, u);
                            else if (C.properties[n] || C.isCustomAttribute(n)) {
                                var l = F(this);
                                null != u ? x.setValueForProperty(l, n, u) : x.deleteValueForProperty(l, n);
                            }
                    }
                    i && b.setValueForStyles(F(this), i, this);
                },
                _updateDOMChildren: function (e, t, r, n) {
                    var o = j[typeof e.children] ? e.children : null,
                        a = j[typeof t.children] ? t.children : null,
                        i = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html,
                        s = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html,
                        u = null != o ? null : e.children,
                        c = null != a ? null : t.children,
                        l = null != o || null != i,
                        p = null != a || null != s;
                    null != u && null == c ? this.updateChildren(null, r, n) : l && !p && this.updateTextContent(""),
                        null != a ? o !== a && this.updateTextContent("" + a) : null != s ? i !== s && this.updateMarkup("" + s) : null != c && this.updateChildren(c, r, n);
                },
                getHostNode: function () {
                    return F(this);
                },
                unmountComponent: function (e) {
                    switch (this._tag) {
                        case "audio":
                        case "form":
                        case "iframe":
                        case "img":
                        case "link":
                        case "object":
                        case "source":
                        case "video":
                            var t = this._wrapperState.listeners;
                            if (t) for (var r = 0; r < t.length; r++) t[r].remove();
                            break;
                        case "input":
                        case "textarea":
                            M.stopTracking(this);
                            break;
                        case "html":
                        case "head":
                        case "body":
                            g("66", this._tag);
                    }
                    this.unmountChildren(e), D.uncacheNode(this), k.deleteAllListeners(this), (this._rootNodeID = 0), (this._domID = 0), (this._wrapperState = null);
                },
                getPublicInstance: function () {
                    return F(this);
                },
            }),
            v(m.prototype, m.Mixin, R.Mixin),
            (e.exports = m);
    },
    function (e, t, r) {
        "use strict";
        var n = r(4),
            o = r(64),
            a = {
                focusDOMComponent: function () {
                    o(n.getNodeFromInstance(this));
                },
            };
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        var n = r(65),
            o = r(5),
            a = (r(6), r(123), r(125)),
            i = r(126),
            s = r(128),
            u =
                (r(2),
                s(function (e) {
                    return i(e);
                })),
            c = !1,
            l = "cssFloat";
        if (o.canUseDOM) {
            var p = document.createElement("div").style;
            try {
                p.font = "";
            } catch (e) {
                c = !0;
            }
            void 0 === document.documentElement.style.cssFloat && (l = "styleFloat");
        }
        var d = {
            createMarkupForStyles: function (e, t) {
                var r = "";
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var o = 0 === n.indexOf("--"),
                            i = e[n];
                        null != i && ((r += u(n) + ":"), (r += a(n, i, t, o) + ";"));
                    }
                return r || null;
            },
            setValueForStyles: function (e, t, r) {
                var o = e.style;
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        var s = 0 === i.indexOf("--"),
                            u = a(i, t[i], r, s);
                        if ((("float" !== i && "cssFloat" !== i) || (i = l), s)) o.setProperty(i, u);
                        else if (u) o[i] = u;
                        else {
                            var p = c && n.shorthandPropertyExpansions[i];
                            if (p) for (var d in p) o[d] = "";
                            else o[i] = "";
                        }
                    }
            },
        };
        e.exports = d;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return o(e.replace(a, "ms-"));
        }
        var o = r(124),
            a = /^-ms-/;
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return e.replace(o, function (e, t) {
                return t.toUpperCase();
            });
        }
        var o = /-(.)/g;
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            if (null == t || "boolean" == typeof t || "" === t) return "";
            var o = isNaN(t);
            if (n || o || 0 === t || (a.hasOwnProperty(e) && a[e])) return "" + t;
            if ("string" == typeof t) {
                t = t.trim();
            }
            return t + "px";
        }
        var o = r(65),
            a = (r(2), o.isUnitlessNumber);
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return o(e).replace(a, "-ms-");
        }
        var o = r(127),
            a = /^ms-/;
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return e.replace(o, "-$1").toLowerCase();
        }
        var o = /([A-Z])/g;
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = {};
            return function (r) {
                return t.hasOwnProperty(r) || (t[r] = e.call(this, r)), t[r];
            };
        }
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return '"' + o(e) + '"';
        }
        var o = r(25);
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            o.enqueueEvents(e), o.processEventQueue(!1);
        }
        var o = r(19),
            a = {
                handleTopLevel: function (e, t, r, a) {
                    n(o.extractEvents(e, t, r, a));
                },
            };
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            var r = {};
            return (r[e.toLowerCase()] = t.toLowerCase()), (r["Webkit" + e] = "webkit" + t), (r["Moz" + e] = "moz" + t), (r["ms" + e] = "MS" + t), (r["O" + e] = "o" + t.toLowerCase()), r;
        }
        function o(e) {
            if (s[e]) return s[e];
            if (!i[e]) return e;
            var t = i[e];
            for (var r in t) if (t.hasOwnProperty(r) && r in u) return (s[e] = t[r]);
            return "";
        }
        var a = r(5),
            i = { animationend: n("Animation", "AnimationEnd"), animationiteration: n("Animation", "AnimationIteration"), animationstart: n("Animation", "AnimationStart"), transitionend: n("Transition", "TransitionEnd") },
            s = {},
            u = {};
        a.canUseDOM &&
            ((u = document.createElement("div").style),
            "AnimationEvent" in window || (delete i.animationend.animation, delete i.animationiteration.animation, delete i.animationstart.animation),
            "TransitionEvent" in window || delete i.transitionend.transition),
            (e.exports = o);
    },
    function (e, t, r) {
        "use strict";
        function n() {
            this._rootNodeID && d.updateWrapper(this);
        }
        function o(e) {
            return "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value;
        }
        function a(e) {
            var t = this._currentElement.props,
                r = c.executeOnChange(t, e);
            p.asap(n, this);
            var o = t.name;
            if ("radio" === t.type && null != o) {
                for (var a = l.getNodeFromInstance(this), s = a; s.parentNode; ) s = s.parentNode;
                for (var u = s.querySelectorAll("input[name=" + JSON.stringify("" + o) + '][type="radio"]'), d = 0; d < u.length; d++) {
                    var f = u[d];
                    if (f !== a && f.form === a.form) {
                        var h = l.getInstanceFromNode(f);
                        h || i("90"), p.asap(n, h);
                    }
                }
            }
            return r;
        }
        var i = r(1),
            s = r(3),
            u = r(66),
            c = r(39),
            l = r(4),
            p = r(8),
            d =
                (r(0),
                r(2),
                {
                    getHostProps: function (e, t) {
                        var r = c.getValue(t),
                            n = c.getChecked(t);
                        return s({ type: void 0, step: void 0, min: void 0, max: void 0 }, t, {
                            defaultChecked: void 0,
                            defaultValue: void 0,
                            value: null != r ? r : e._wrapperState.initialValue,
                            checked: null != n ? n : e._wrapperState.initialChecked,
                            onChange: e._wrapperState.onChange,
                        });
                    },
                    mountWrapper: function (e, t) {
                        var r = t.defaultValue;
                        e._wrapperState = { initialChecked: null != t.checked ? t.checked : t.defaultChecked, initialValue: null != t.value ? t.value : r, listeners: null, onChange: a.bind(e), controlled: o(t) };
                    },
                    updateWrapper: function (e) {
                        var t = e._currentElement.props,
                            r = t.checked;
                        null != r && u.setValueForProperty(l.getNodeFromInstance(e), "checked", r || !1);
                        var n = l.getNodeFromInstance(e),
                            o = c.getValue(t);
                        if (null != o)
                            if (0 === o && "" === n.value) n.value = "0";
                            else if ("number" === t.type) {
                                var a = parseFloat(n.value, 10) || 0;
                                (o != a || (o == a && n.value != o)) && (n.value = "" + o);
                            } else n.value !== "" + o && (n.value = "" + o);
                        else
                            null == t.value && null != t.defaultValue && n.defaultValue !== "" + t.defaultValue && (n.defaultValue = "" + t.defaultValue),
                                null == t.checked && null != t.defaultChecked && (n.defaultChecked = !!t.defaultChecked);
                    },
                    postMountWrapper: function (e) {
                        var t = e._currentElement.props,
                            r = l.getNodeFromInstance(e);
                        switch (t.type) {
                            case "submit":
                            case "reset":
                                break;
                            case "color":
                            case "date":
                            case "datetime":
                            case "datetime-local":
                            case "month":
                            case "time":
                            case "week":
                                (r.value = ""), (r.value = r.defaultValue);
                                break;
                            default:
                                r.value = r.value;
                        }
                        var n = r.name;
                        "" !== n && (r.name = ""), (r.defaultChecked = !r.defaultChecked), (r.defaultChecked = !r.defaultChecked), "" !== n && (r.name = n);
                    },
                });
        e.exports = d;
    },
    function (e, t, r) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = "";
            return (
                a.Children.forEach(e, function (e) {
                    null != e && ("string" == typeof e || "number" == typeof e ? (t += e) : u || (u = !0));
                }),
                t
            );
        }
        var o = r(3),
            a = r(12),
            i = r(4),
            s = r(67),
            u = (r(2), !1),
            c = {
                mountWrapper: function (e, t, r) {
                    var o = null;
                    if (null != r) {
                        var a = r;
                        "optgroup" === a._tag && (a = a._hostParent), null != a && "select" === a._tag && (o = s.getSelectValueContext(a));
                    }
                    var i = null;
                    if (null != o) {
                        var u;
                        if (((u = null != t.value ? t.value + "" : n(t.children)), (i = !1), Array.isArray(o))) {
                            for (var c = 0; c < o.length; c++)
                                if ("" + o[c] === u) {
                                    i = !0;
                                    break;
                                }
                        } else i = "" + o === u;
                    }
                    e._wrapperState = { selected: i };
                },
                postMountWrapper: function (e) {
                    var t = e._currentElement.props;
                    if (null != t.value) {
                        i.getNodeFromInstance(e).setAttribute("value", t.value);
                    }
                },
                getHostProps: function (e, t) {
                    var r = o({ selected: void 0, children: void 0 }, t);
                    null != e._wrapperState.selected && (r.selected = e._wrapperState.selected);
                    var a = n(t.children);
                    return a && (r.children = a), r;
                },
            };
        e.exports = c;
    },
    function (e, t, r) {
        "use strict";
        function n() {
            this._rootNodeID && l.updateWrapper(this);
        }
        function o(e) {
            var t = this._currentElement.props,
                r = s.executeOnChange(t, e);
            return c.asap(n, this), r;
        }
        var a = r(1),
            i = r(3),
            s = r(39),
            u = r(4),
            c = r(8),
            l =
                (r(0),
                r(2),
                {
                    getHostProps: function (e, t) {
                        return null != t.dangerouslySetInnerHTML && a("91"), i({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue, onChange: e._wrapperState.onChange });
                    },
                    mountWrapper: function (e, t) {
                        var r = s.getValue(t),
                            n = r;
                        if (null == r) {
                            var i = t.defaultValue,
                                u = t.children;
                            null != u && (null != i && a("92"), Array.isArray(u) && (u.length <= 1 || a("93"), (u = u[0])), (i = "" + u)), null == i && (i = ""), (n = i);
                        }
                        e._wrapperState = { initialValue: "" + n, listeners: null, onChange: o.bind(e) };
                    },
                    updateWrapper: function (e) {
                        var t = e._currentElement.props,
                            r = u.getNodeFromInstance(e),
                            n = s.getValue(t);
                        if (null != n) {
                            var o = "" + n;
                            o !== r.value && (r.value = o), null == t.defaultValue && (r.defaultValue = o);
                        }
                        null != t.defaultValue && (r.defaultValue = t.defaultValue);
                    },
                    postMountWrapper: function (e) {
                        var t = u.getNodeFromInstance(e),
                            r = t.textContent;
                        r === e._wrapperState.initialValue && (t.value = r);
                    },
                });
        e.exports = l;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r) {
            return { type: "INSERT_MARKUP", content: e, fromIndex: null, fromNode: null, toIndex: r, afterNode: t };
        }
        function o(e, t, r) {
            return { type: "MOVE_EXISTING", content: null, fromIndex: e._mountIndex, fromNode: d.getHostNode(e), toIndex: r, afterNode: t };
        }
        function a(e, t) {
            return { type: "REMOVE_NODE", content: null, fromIndex: e._mountIndex, fromNode: t, toIndex: null, afterNode: null };
        }
        function i(e) {
            return { type: "SET_MARKUP", content: e, fromIndex: null, fromNode: null, toIndex: null, afterNode: null };
        }
        function s(e) {
            return { type: "TEXT_CONTENT", content: e, fromIndex: null, fromNode: null, toIndex: null, afterNode: null };
        }
        function u(e, t) {
            return t && ((e = e || []), e.push(t)), e;
        }
        function c(e, t) {
            p.processChildrenUpdates(e, t);
        }
        var l = r(1),
            p = r(40),
            d = (r(21), r(6), r(9), r(15)),
            f = r(137),
            h = (r(7), r(142)),
            m =
                (r(0),
                {
                    Mixin: {
                        _reconcilerInstantiateChildren: function (e, t, r) {
                            return f.instantiateChildren(e, t, r);
                        },
                        _reconcilerUpdateChildren: function (e, t, r, n, o, a) {
                            var i,
                                s = 0;
                            return (i = h(t, s)), f.updateChildren(e, i, r, n, o, this, this._hostContainerInfo, a, s), i;
                        },
                        mountChildren: function (e, t, r) {
                            var n = this._reconcilerInstantiateChildren(e, t, r);
                            this._renderedChildren = n;
                            var o = [],
                                a = 0;
                            for (var i in n)
                                if (n.hasOwnProperty(i)) {
                                    var s = n[i],
                                        u = 0,
                                        c = d.mountComponent(s, t, this, this._hostContainerInfo, r, u);
                                    (s._mountIndex = a++), o.push(c);
                                }
                            return o;
                        },
                        updateTextContent: function (e) {
                            var t = this._renderedChildren;
                            f.unmountChildren(t, !1);
                            for (var r in t) t.hasOwnProperty(r) && l("118");
                            c(this, [s(e)]);
                        },
                        updateMarkup: function (e) {
                            var t = this._renderedChildren;
                            f.unmountChildren(t, !1);
                            for (var r in t) t.hasOwnProperty(r) && l("118");
                            c(this, [i(e)]);
                        },
                        updateChildren: function (e, t, r) {
                            this._updateChildren(e, t, r);
                        },
                        _updateChildren: function (e, t, r) {
                            var n = this._renderedChildren,
                                o = {},
                                a = [],
                                i = this._reconcilerUpdateChildren(n, e, a, o, t, r);
                            if (i || n) {
                                var s,
                                    l = null,
                                    p = 0,
                                    f = 0,
                                    h = 0,
                                    m = null;
                                for (s in i)
                                    if (i.hasOwnProperty(s)) {
                                        var g = n && n[s],
                                            v = i[s];
                                        g === v
                                            ? ((l = u(l, this.moveChild(g, m, p, f))), (f = Math.max(g._mountIndex, f)), (g._mountIndex = p))
                                            : (g && (f = Math.max(g._mountIndex, f)), (l = u(l, this._mountChildAtIndex(v, a[h], m, p, t, r))), h++),
                                            p++,
                                            (m = d.getHostNode(v));
                                    }
                                for (s in o) o.hasOwnProperty(s) && (l = u(l, this._unmountChild(n[s], o[s])));
                                l && c(this, l), (this._renderedChildren = i);
                            }
                        },
                        unmountChildren: function (e) {
                            var t = this._renderedChildren;
                            f.unmountChildren(t, e), (this._renderedChildren = null);
                        },
                        moveChild: function (e, t, r, n) {
                            if (e._mountIndex < n) return o(e, t, r);
                        },
                        createChild: function (e, t, r) {
                            return n(r, t, e._mountIndex);
                        },
                        removeChild: function (e, t) {
                            return a(e, t);
                        },
                        _mountChildAtIndex: function (e, t, r, n, o, a) {
                            return (e._mountIndex = n), this.createChild(e, r, t);
                        },
                        _unmountChild: function (e, t) {
                            var r = this.removeChild(e, t);
                            return (e._mountIndex = null), r;
                        },
                    },
                });
        e.exports = m;
    },
    function (e, t, r) {
        "use strict";
        (function (t) {
            function n(e, t, r, n) {
                var o = void 0 === e[r];
                null != t && o && (e[r] = a(t, !0));
            }
            var o = r(15),
                a = r(69),
                i = (r(43), r(42)),
                s = r(73);
            r(2);
            void 0 !== t && t.env;
            var u = {
                instantiateChildren: function (e, t, r, o) {
                    if (null == e) return null;
                    var a = {};
                    return s(e, n, a), a;
                },
                updateChildren: function (e, t, r, n, s, u, c, l, p) {
                    if (t || e) {
                        var d, f;
                        for (d in t)
                            if (t.hasOwnProperty(d)) {
                                f = e && e[d];
                                var h = f && f._currentElement,
                                    m = t[d];
                                if (null != f && i(h, m)) o.receiveComponent(f, m, s, l), (t[d] = f);
                                else {
                                    f && ((n[d] = o.getHostNode(f)), o.unmountComponent(f, !1));
                                    var g = a(m, !0);
                                    t[d] = g;
                                    var v = o.mountComponent(g, s, u, c, l, p);
                                    r.push(v);
                                }
                            }
                        for (d in e) !e.hasOwnProperty(d) || (t && t.hasOwnProperty(d)) || ((f = e[d]), (n[d] = o.getHostNode(f)), o.unmountComponent(f, !1));
                    }
                },
                unmountChildren: function (e, t) {
                    for (var r in e)
                        if (e.hasOwnProperty(r)) {
                            var n = e[r];
                            o.unmountComponent(n, t);
                        }
                },
            };
            e.exports = u;
        }.call(t, r(68)));
    },
    function (e, t, r) {
        "use strict";
        function n(e) {}
        function o(e) {
            return !(!e.prototype || !e.prototype.isReactComponent);
        }
        function a(e) {
            return !(!e.prototype || !e.prototype.isPureReactComponent);
        }
        var i = r(1),
            s = r(3),
            u = r(12),
            c = r(40),
            l = r(9),
            p = r(32),
            d = r(21),
            f = (r(6), r(70)),
            h = r(15),
            m = r(29),
            g = (r(0), r(41)),
            v = r(42),
            y = (r(2), { ImpureClass: 0, PureClass: 1, StatelessFunctional: 2 });
        n.prototype.render = function () {
            var e = d.get(this)._currentElement.type,
                t = e(this.props, this.context, this.updater);
            return t;
        };
        var b = 1,
            w = {
                construct: function (e) {
                    (this._currentElement = e),
                        (this._rootNodeID = 0),
                        (this._compositeType = null),
                        (this._instance = null),
                        (this._hostParent = null),
                        (this._hostContainerInfo = null),
                        (this._updateBatchNumber = null),
                        (this._pendingElement = null),
                        (this._pendingStateQueue = null),
                        (this._pendingReplaceState = !1),
                        (this._pendingForceUpdate = !1),
                        (this._renderedNodeType = null),
                        (this._renderedComponent = null),
                        (this._context = null),
                        (this._mountOrder = 0),
                        (this._topLevelWrapper = null),
                        (this._pendingCallbacks = null),
                        (this._calledComponentWillUnmount = !1);
                },
                mountComponent: function (e, t, r, s) {
                    (this._context = s), (this._mountOrder = b++), (this._hostParent = t), (this._hostContainerInfo = r);
                    var c,
                        l = this._currentElement.props,
                        p = this._processContext(s),
                        f = this._currentElement.type,
                        h = e.getUpdateQueue(),
                        g = o(f),
                        v = this._constructComponent(g, l, p, h);
                    g || (null != v && null != v.render)
                        ? a(f)
                            ? (this._compositeType = y.PureClass)
                            : (this._compositeType = y.ImpureClass)
                        : ((c = v), null === v || !1 === v || u.isValidElement(v) || i("105", f.displayName || f.name || "Component"), (v = new n(f)), (this._compositeType = y.StatelessFunctional));
                    (v.props = l), (v.context = p), (v.refs = m), (v.updater = h), (this._instance = v), d.set(v, this);
                    var w = v.state;
                    void 0 === w && (v.state = w = null),
                        ("object" != typeof w || Array.isArray(w)) && i("106", this.getName() || "ReactCompositeComponent"),
                        (this._pendingStateQueue = null),
                        (this._pendingReplaceState = !1),
                        (this._pendingForceUpdate = !1);
                    var E;
                    return (E = v.unstable_handleError ? this.performInitialMountWithErrorHandling(c, t, r, e, s) : this.performInitialMount(c, t, r, e, s)), v.componentDidMount && e.getReactMountReady().enqueue(v.componentDidMount, v), E;
                },
                _constructComponent: function (e, t, r, n) {
                    return this._constructComponentWithoutOwner(e, t, r, n);
                },
                _constructComponentWithoutOwner: function (e, t, r, n) {
                    var o = this._currentElement.type;
                    return e ? new o(t, r, n) : o(t, r, n);
                },
                performInitialMountWithErrorHandling: function (e, t, r, n, o) {
                    var a,
                        i = n.checkpoint();
                    try {
                        a = this.performInitialMount(e, t, r, n, o);
                    } catch (s) {
                        n.rollback(i),
                            this._instance.unstable_handleError(s),
                            this._pendingStateQueue && (this._instance.state = this._processPendingState(this._instance.props, this._instance.context)),
                            (i = n.checkpoint()),
                            this._renderedComponent.unmountComponent(!0),
                            n.rollback(i),
                            (a = this.performInitialMount(e, t, r, n, o));
                    }
                    return a;
                },
                performInitialMount: function (e, t, r, n, o) {
                    var a = this._instance,
                        i = 0;
                    a.componentWillMount && (a.componentWillMount(), this._pendingStateQueue && (a.state = this._processPendingState(a.props, a.context))), void 0 === e && (e = this._renderValidatedComponent());
                    var s = f.getType(e);
                    this._renderedNodeType = s;
                    var u = this._instantiateReactComponent(e, s !== f.EMPTY);
                    this._renderedComponent = u;
                    var c = h.mountComponent(u, n, t, r, this._processChildContext(o), i);
                    return c;
                },
                getHostNode: function () {
                    return h.getHostNode(this._renderedComponent);
                },
                unmountComponent: function (e) {
                    if (this._renderedComponent) {
                        var t = this._instance;
                        if (t.componentWillUnmount && !t._calledComponentWillUnmount)
                            if (((t._calledComponentWillUnmount = !0), e)) {
                                var r = this.getName() + ".componentWillUnmount()";
                                p.invokeGuardedCallback(r, t.componentWillUnmount.bind(t));
                            } else t.componentWillUnmount();
                        this._renderedComponent && (h.unmountComponent(this._renderedComponent, e), (this._renderedNodeType = null), (this._renderedComponent = null), (this._instance = null)),
                            (this._pendingStateQueue = null),
                            (this._pendingReplaceState = !1),
                            (this._pendingForceUpdate = !1),
                            (this._pendingCallbacks = null),
                            (this._pendingElement = null),
                            (this._context = null),
                            (this._rootNodeID = 0),
                            (this._topLevelWrapper = null),
                            d.remove(t);
                    }
                },
                _maskContext: function (e) {
                    var t = this._currentElement.type,
                        r = t.contextTypes;
                    if (!r) return m;
                    var n = {};
                    for (var o in r) n[o] = e[o];
                    return n;
                },
                _processContext: function (e) {
                    var t = this._maskContext(e);
                    return t;
                },
                _processChildContext: function (e) {
                    var t,
                        r = this._currentElement.type,
                        n = this._instance;
                    if ((n.getChildContext && (t = n.getChildContext()), t)) {
                        "object" != typeof r.childContextTypes && i("107", this.getName() || "ReactCompositeComponent");
                        for (var o in t) o in r.childContextTypes || i("108", this.getName() || "ReactCompositeComponent", o);
                        return s({}, e, t);
                    }
                    return e;
                },
                _checkContextTypes: function (e, t, r) {},
                receiveComponent: function (e, t, r) {
                    var n = this._currentElement,
                        o = this._context;
                    (this._pendingElement = null), this.updateComponent(t, n, e, o, r);
                },
                performUpdateIfNecessary: function (e) {
                    null != this._pendingElement
                        ? h.receiveComponent(this, this._pendingElement, e, this._context)
                        : null !== this._pendingStateQueue || this._pendingForceUpdate
                        ? this.updateComponent(e, this._currentElement, this._currentElement, this._context, this._context)
                        : (this._updateBatchNumber = null);
                },
                updateComponent: function (e, t, r, n, o) {
                    var a = this._instance;
                    null == a && i("136", this.getName() || "ReactCompositeComponent");
                    var s,
                        u = !1;
                    this._context === o ? (s = a.context) : ((s = this._processContext(o)), (u = !0));
                    var c = t.props,
                        l = r.props;
                    t !== r && (u = !0), u && a.componentWillReceiveProps && a.componentWillReceiveProps(l, s);
                    var p = this._processPendingState(l, s),
                        d = !0;
                    this._pendingForceUpdate || (a.shouldComponentUpdate ? (d = a.shouldComponentUpdate(l, p, s)) : this._compositeType === y.PureClass && (d = !g(c, l) || !g(a.state, p))),
                        (this._updateBatchNumber = null),
                        d ? ((this._pendingForceUpdate = !1), this._performComponentUpdate(r, l, p, s, e, o)) : ((this._currentElement = r), (this._context = o), (a.props = l), (a.state = p), (a.context = s));
                },
                _processPendingState: function (e, t) {
                    var r = this._instance,
                        n = this._pendingStateQueue,
                        o = this._pendingReplaceState;
                    if (((this._pendingReplaceState = !1), (this._pendingStateQueue = null), !n)) return r.state;
                    if (o && 1 === n.length) return n[0];
                    for (var a = s({}, o ? n[0] : r.state), i = o ? 1 : 0; i < n.length; i++) {
                        var u = n[i];
                        s(a, "function" == typeof u ? u.call(r, a, e, t) : u);
                    }
                    return a;
                },
                _performComponentUpdate: function (e, t, r, n, o, a) {
                    var i,
                        s,
                        u,
                        c = this._instance,
                        l = Boolean(c.componentDidUpdate);
                    l && ((i = c.props), (s = c.state), (u = c.context)),
                        c.componentWillUpdate && c.componentWillUpdate(t, r, n),
                        (this._currentElement = e),
                        (this._context = a),
                        (c.props = t),
                        (c.state = r),
                        (c.context = n),
                        this._updateRenderedComponent(o, a),
                        l && o.getReactMountReady().enqueue(c.componentDidUpdate.bind(c, i, s, u), c);
                },
                _updateRenderedComponent: function (e, t) {
                    var r = this._renderedComponent,
                        n = r._currentElement,
                        o = this._renderValidatedComponent(),
                        a = 0;
                    if (v(n, o)) h.receiveComponent(r, o, e, this._processChildContext(t));
                    else {
                        var i = h.getHostNode(r);
                        h.unmountComponent(r, !1);
                        var s = f.getType(o);
                        this._renderedNodeType = s;
                        var u = this._instantiateReactComponent(o, s !== f.EMPTY);
                        this._renderedComponent = u;
                        var c = h.mountComponent(u, e, this._hostParent, this._hostContainerInfo, this._processChildContext(t), a);
                        this._replaceNodeWithMarkup(i, c, r);
                    }
                },
                _replaceNodeWithMarkup: function (e, t, r) {
                    c.replaceNodeWithMarkup(e, t, r);
                },
                _renderValidatedComponentWithoutOwnerOrContext: function () {
                    var e = this._instance;
                    return e.render();
                },
                _renderValidatedComponent: function () {
                    var e;
                    if (this._compositeType !== y.StatelessFunctional) {
                        l.current = this;
                        try {
                            e = this._renderValidatedComponentWithoutOwnerOrContext();
                        } finally {
                            l.current = null;
                        }
                    } else e = this._renderValidatedComponentWithoutOwnerOrContext();
                    return null === e || !1 === e || u.isValidElement(e) || i("109", this.getName() || "ReactCompositeComponent"), e;
                },
                attachRef: function (e, t) {
                    var r = this.getPublicInstance();
                    null == r && i("110");
                    var n = t.getPublicInstance();
                    (r.refs === m ? (r.refs = {}) : r.refs)[e] = n;
                },
                detachRef: function (e) {
                    delete this.getPublicInstance().refs[e];
                },
                getName: function () {
                    var e = this._currentElement.type,
                        t = this._instance && this._instance.constructor;
                    return e.displayName || (t && t.displayName) || e.name || (t && t.name) || null;
                },
                getPublicInstance: function () {
                    var e = this._instance;
                    return this._compositeType === y.StatelessFunctional ? null : e;
                },
                _instantiateReactComponent: null,
            };
        e.exports = w;
    },
    function (e, t, r) {
        "use strict";
        function n() {
            return o++;
        }
        var o = 1;
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        var n = ("function" == typeof Symbol && Symbol.for && Symbol.for("react.element")) || 60103;
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e && ((o && e[o]) || e[a]);
            if ("function" == typeof t) return t;
        }
        var o = "function" == typeof Symbol && Symbol.iterator,
            a = "@@iterator";
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        (function (t) {
            function n(e, t, r, n) {
                if (e && "object" == typeof e) {
                    var o = e,
                        a = void 0 === o[r];
                    a && null != t && (o[r] = t);
                }
            }
            function o(e, t) {
                if (null == e) return e;
                var r = {};
                return a(e, n, r), r;
            }
            var a = (r(43), r(73));
            r(2);
            void 0 !== t && t.env, (e.exports = o);
        }.call(t, r(68)));
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            this.reinitializeTransaction(), (this.renderToStaticMarkup = e), (this.useCreateElement = !1), (this.updateQueue = new s(this));
        }
        var o = r(3),
            a = r(11),
            i = r(22),
            s = (r(6), r(144)),
            u = [],
            c = { enqueue: function () {} },
            l = {
                getTransactionWrappers: function () {
                    return u;
                },
                getReactMountReady: function () {
                    return c;
                },
                getUpdateQueue: function () {
                    return this.updateQueue;
                },
                destructor: function () {},
                checkpoint: function () {},
                rollback: function () {},
            };
        o(n.prototype, i, l), a.addPoolingTo(n), (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var o = r(44),
            a =
                (r(2),
                (function () {
                    function e(t) {
                        n(this, e), (this.transaction = t);
                    }
                    return (
                        (e.prototype.isMounted = function (e) {
                            return !1;
                        }),
                        (e.prototype.enqueueCallback = function (e, t, r) {
                            this.transaction.isInTransaction() && o.enqueueCallback(e, t, r);
                        }),
                        (e.prototype.enqueueForceUpdate = function (e) {
                            this.transaction.isInTransaction() && o.enqueueForceUpdate(e);
                        }),
                        (e.prototype.enqueueReplaceState = function (e, t) {
                            this.transaction.isInTransaction() && o.enqueueReplaceState(e, t);
                        }),
                        (e.prototype.enqueueSetState = function (e, t) {
                            this.transaction.isInTransaction() && o.enqueueSetState(e, t);
                        }),
                        e
                    );
                })());
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        var n = r(3),
            o = r(16),
            a = r(4),
            i = function (e) {
                (this._currentElement = null), (this._hostNode = null), (this._hostParent = null), (this._hostContainerInfo = null), (this._domID = 0);
            };
        n(i.prototype, {
            mountComponent: function (e, t, r, n) {
                var i = r._idCounter++;
                (this._domID = i), (this._hostParent = t), (this._hostContainerInfo = r);
                var s = " react-empty: " + this._domID + " ";
                if (e.useCreateElement) {
                    var u = r._ownerDocument,
                        c = u.createComment(s);
                    return a.precacheNode(this, c), o(c);
                }
                return e.renderToStaticMarkup ? "" : "\x3c!--" + s + "--\x3e";
            },
            receiveComponent: function () {},
            getHostNode: function () {
                return a.getNodeFromInstance(this);
            },
            unmountComponent: function () {
                a.uncacheNode(this);
            },
        }),
            (e.exports = i);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            "_hostNode" in e || u("33"), "_hostNode" in t || u("33");
            for (var r = 0, n = e; n; n = n._hostParent) r++;
            for (var o = 0, a = t; a; a = a._hostParent) o++;
            for (; r - o > 0; ) (e = e._hostParent), r--;
            for (; o - r > 0; ) (t = t._hostParent), o--;
            for (var i = r; i--; ) {
                if (e === t) return e;
                (e = e._hostParent), (t = t._hostParent);
            }
            return null;
        }
        function o(e, t) {
            "_hostNode" in e || u("35"), "_hostNode" in t || u("35");
            for (; t; ) {
                if (t === e) return !0;
                t = t._hostParent;
            }
            return !1;
        }
        function a(e) {
            return "_hostNode" in e || u("36"), e._hostParent;
        }
        function i(e, t, r) {
            for (var n = []; e; ) n.push(e), (e = e._hostParent);
            var o;
            for (o = n.length; o-- > 0; ) t(n[o], "captured", r);
            for (o = 0; o < n.length; o++) t(n[o], "bubbled", r);
        }
        function s(e, t, r, o, a) {
            for (var i = e && t ? n(e, t) : null, s = []; e && e !== i; ) s.push(e), (e = e._hostParent);
            for (var u = []; t && t !== i; ) u.push(t), (t = t._hostParent);
            var c;
            for (c = 0; c < s.length; c++) r(s[c], "bubbled", o);
            for (c = u.length; c-- > 0; ) r(u[c], "captured", a);
        }
        var u = r(1);
        r(0);
        e.exports = { isAncestor: o, getLowestCommonAncestor: n, getParentInstance: a, traverseTwoPhase: i, traverseEnterLeave: s };
    },
    function (e, t, r) {
        "use strict";
        var n = r(1),
            o = r(3),
            a = r(36),
            i = r(16),
            s = r(4),
            u = r(25),
            c =
                (r(0),
                r(45),
                function (e) {
                    (this._currentElement = e), (this._stringText = "" + e), (this._hostNode = null), (this._hostParent = null), (this._domID = 0), (this._mountIndex = 0), (this._closingComment = null), (this._commentNodes = null);
                });
        o(c.prototype, {
            mountComponent: function (e, t, r, n) {
                var o = r._idCounter++,
                    a = " react-text: " + o + " ";
                if (((this._domID = o), (this._hostParent = t), e.useCreateElement)) {
                    var c = r._ownerDocument,
                        l = c.createComment(a),
                        p = c.createComment(" /react-text "),
                        d = i(c.createDocumentFragment());
                    return i.queueChild(d, i(l)), this._stringText && i.queueChild(d, i(c.createTextNode(this._stringText))), i.queueChild(d, i(p)), s.precacheNode(this, l), (this._closingComment = p), d;
                }
                var f = u(this._stringText);
                return e.renderToStaticMarkup ? f : "\x3c!--" + a + "--\x3e" + f + "\x3c!-- /react-text --\x3e";
            },
            receiveComponent: function (e, t) {
                if (e !== this._currentElement) {
                    this._currentElement = e;
                    var r = "" + e;
                    if (r !== this._stringText) {
                        this._stringText = r;
                        var n = this.getHostNode();
                        a.replaceDelimitedText(n[0], n[1], r);
                    }
                }
            },
            getHostNode: function () {
                var e = this._commentNodes;
                if (e) return e;
                if (!this._closingComment)
                    for (var t = s.getNodeFromInstance(this), r = t.nextSibling; ; ) {
                        if ((null == r && n("67", this._domID), 8 === r.nodeType && " /react-text " === r.nodeValue)) {
                            this._closingComment = r;
                            break;
                        }
                        r = r.nextSibling;
                    }
                return (e = [this._hostNode, this._closingComment]), (this._commentNodes = e), e;
            },
            unmountComponent: function () {
                (this._closingComment = null), (this._commentNodes = null), s.uncacheNode(this);
            },
        }),
            (e.exports = c);
    },
    function (e, t, r) {
        "use strict";
        function n() {
            this.reinitializeTransaction();
        }
        var o = r(3),
            a = r(8),
            i = r(22),
            s = r(7),
            u = {
                initialize: s,
                close: function () {
                    d.isBatchingUpdates = !1;
                },
            },
            c = { initialize: s, close: a.flushBatchedUpdates.bind(a) },
            l = [c, u];
        o(n.prototype, i, {
            getTransactionWrappers: function () {
                return l;
            },
        });
        var p = new n(),
            d = {
                isBatchingUpdates: !1,
                batchedUpdates: function (e, t, r, n, o, a) {
                    var i = d.isBatchingUpdates;
                    return (d.isBatchingUpdates = !0), i ? e(t, r, n, o, a) : p.perform(e, null, t, r, n, o, a);
                },
            };
        e.exports = d;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            for (; e._hostParent; ) e = e._hostParent;
            var t = p.getNodeFromInstance(e),
                r = t.parentNode;
            return p.getClosestInstanceFromNode(r);
        }
        function o(e, t) {
            (this.topLevelType = e), (this.nativeEvent = t), (this.ancestors = []);
        }
        function a(e) {
            var t = f(e.nativeEvent),
                r = p.getClosestInstanceFromNode(t),
                o = r;
            do {
                e.ancestors.push(o), (o = o && n(o));
            } while (o);
            for (var a = 0; a < e.ancestors.length; a++) (r = e.ancestors[a]), m._handleTopLevel(e.topLevelType, r, e.nativeEvent, f(e.nativeEvent));
        }
        function i(e) {
            e(h(window));
        }
        var s = r(3),
            u = r(75),
            c = r(5),
            l = r(11),
            p = r(4),
            d = r(8),
            f = r(33),
            h = r(150);
        s(o.prototype, {
            destructor: function () {
                (this.topLevelType = null), (this.nativeEvent = null), (this.ancestors.length = 0);
            },
        }),
            l.addPoolingTo(o, l.twoArgumentPooler);
        var m = {
            _enabled: !0,
            _handleTopLevel: null,
            WINDOW_HANDLE: c.canUseDOM ? window : null,
            setHandleTopLevel: function (e) {
                m._handleTopLevel = e;
            },
            setEnabled: function (e) {
                m._enabled = !!e;
            },
            isEnabled: function () {
                return m._enabled;
            },
            trapBubbledEvent: function (e, t, r) {
                return r ? u.listen(r, t, m.dispatchEvent.bind(null, e)) : null;
            },
            trapCapturedEvent: function (e, t, r) {
                return r ? u.capture(r, t, m.dispatchEvent.bind(null, e)) : null;
            },
            monitorScrollValue: function (e) {
                var t = i.bind(null, e);
                u.listen(window, "scroll", t);
            },
            dispatchEvent: function (e, t) {
                if (m._enabled) {
                    var r = o.getPooled(e, t);
                    try {
                        d.batchedUpdates(a, r);
                    } finally {
                        o.release(r);
                    }
                }
            },
        };
        e.exports = m;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return e.Window && e instanceof e.Window ? { x: e.pageXOffset || e.document.documentElement.scrollLeft, y: e.pageYOffset || e.document.documentElement.scrollTop } : { x: e.scrollLeft, y: e.scrollTop };
        }
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        var n = r(14),
            o = r(19),
            a = r(31),
            i = r(40),
            s = r(71),
            u = r(26),
            c = r(72),
            l = r(8),
            p = { Component: i.injection, DOMProperty: n.injection, EmptyComponent: s.injection, EventPluginHub: o.injection, EventPluginUtils: a.injection, EventEmitter: u.injection, HostComponent: c.injection, Updates: l.injection };
        e.exports = p;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            this.reinitializeTransaction(), (this.renderToStaticMarkup = !1), (this.reactMountReady = a.getPooled(null)), (this.useCreateElement = e);
        }
        var o = r(3),
            a = r(58),
            i = r(11),
            s = r(26),
            u = r(76),
            c = (r(6), r(22)),
            l = r(44),
            p = { initialize: u.getSelectionInformation, close: u.restoreSelection },
            d = {
                initialize: function () {
                    var e = s.isEnabled();
                    return s.setEnabled(!1), e;
                },
                close: function (e) {
                    s.setEnabled(e);
                },
            },
            f = {
                initialize: function () {
                    this.reactMountReady.reset();
                },
                close: function () {
                    this.reactMountReady.notifyAll();
                },
            },
            h = [p, d, f],
            m = {
                getTransactionWrappers: function () {
                    return h;
                },
                getReactMountReady: function () {
                    return this.reactMountReady;
                },
                getUpdateQueue: function () {
                    return l;
                },
                checkpoint: function () {
                    return this.reactMountReady.checkpoint();
                },
                rollback: function (e) {
                    this.reactMountReady.rollback(e);
                },
                destructor: function () {
                    a.release(this.reactMountReady), (this.reactMountReady = null);
                },
            };
        o(n.prototype, c, m), i.addPoolingTo(n), (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            return e === r && t === n;
        }
        function o(e) {
            var t = document.selection,
                r = t.createRange(),
                n = r.text.length,
                o = r.duplicate();
            o.moveToElementText(e), o.setEndPoint("EndToStart", r);
            var a = o.text.length;
            return { start: a, end: a + n };
        }
        function a(e) {
            var t = window.getSelection && window.getSelection();
            if (!t || 0 === t.rangeCount) return null;
            var r = t.anchorNode,
                o = t.anchorOffset,
                a = t.focusNode,
                i = t.focusOffset,
                s = t.getRangeAt(0);
            try {
                s.startContainer.nodeType, s.endContainer.nodeType;
            } catch (e) {
                return null;
            }
            var u = n(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset),
                c = u ? 0 : s.toString().length,
                l = s.cloneRange();
            l.selectNodeContents(e), l.setEnd(s.startContainer, s.startOffset);
            var p = n(l.startContainer, l.startOffset, l.endContainer, l.endOffset),
                d = p ? 0 : l.toString().length,
                f = d + c,
                h = document.createRange();
            h.setStart(r, o), h.setEnd(a, i);
            var m = h.collapsed;
            return { start: m ? f : d, end: m ? d : f };
        }
        function i(e, t) {
            var r,
                n,
                o = document.selection.createRange().duplicate();
            void 0 === t.end ? ((r = t.start), (n = r)) : t.start > t.end ? ((r = t.end), (n = t.start)) : ((r = t.start), (n = t.end)),
                o.moveToElementText(e),
                o.moveStart("character", r),
                o.setEndPoint("EndToStart", o),
                o.moveEnd("character", n - r),
                o.select();
        }
        function s(e, t) {
            if (window.getSelection) {
                var r = window.getSelection(),
                    n = e[l()].length,
                    o = Math.min(t.start, n),
                    a = void 0 === t.end ? o : Math.min(t.end, n);
                if (!r.extend && o > a) {
                    var i = a;
                    (a = o), (o = i);
                }
                var s = c(e, o),
                    u = c(e, a);
                if (s && u) {
                    var p = document.createRange();
                    p.setStart(s.node, s.offset), r.removeAllRanges(), o > a ? (r.addRange(p), r.extend(u.node, u.offset)) : (p.setEnd(u.node, u.offset), r.addRange(p));
                }
            }
        }
        var u = r(5),
            c = r(154),
            l = r(57),
            p = u.canUseDOM && "selection" in document && !("getSelection" in window),
            d = { getOffsets: p ? o : a, setOffsets: p ? i : s };
        e.exports = d;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            for (; e && e.firstChild; ) e = e.firstChild;
            return e;
        }
        function o(e) {
            for (; e; ) {
                if (e.nextSibling) return e.nextSibling;
                e = e.parentNode;
            }
        }
        function a(e, t) {
            for (var r = n(e), a = 0, i = 0; r; ) {
                if (3 === r.nodeType) {
                    if (((i = a + r.textContent.length), a <= t && i >= t)) return { node: r, offset: t - a };
                    a = i;
                }
                r = n(o(r));
            }
        }
        e.exports = a;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            return !(!e || !t) && (e === t || (!o(e) && (o(t) ? n(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))));
        }
        var o = r(156);
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return o(e) && 3 == e.nodeType;
        }
        var o = r(157);
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e ? e.ownerDocument || e : document,
                r = t.defaultView || window;
            return !(!e || !("function" == typeof r.Node ? e instanceof r.Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName));
        }
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        var n = { xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace" },
            o = {
                accentHeight: "accent-height",
                accumulate: 0,
                additive: 0,
                alignmentBaseline: "alignment-baseline",
                allowReorder: "allowReorder",
                alphabetic: 0,
                amplitude: 0,
                arabicForm: "arabic-form",
                ascent: 0,
                attributeName: "attributeName",
                attributeType: "attributeType",
                autoReverse: "autoReverse",
                azimuth: 0,
                baseFrequency: "baseFrequency",
                baseProfile: "baseProfile",
                baselineShift: "baseline-shift",
                bbox: 0,
                begin: 0,
                bias: 0,
                by: 0,
                calcMode: "calcMode",
                capHeight: "cap-height",
                clip: 0,
                clipPath: "clip-path",
                clipRule: "clip-rule",
                clipPathUnits: "clipPathUnits",
                colorInterpolation: "color-interpolation",
                colorInterpolationFilters: "color-interpolation-filters",
                colorProfile: "color-profile",
                colorRendering: "color-rendering",
                contentScriptType: "contentScriptType",
                contentStyleType: "contentStyleType",
                cursor: 0,
                cx: 0,
                cy: 0,
                d: 0,
                decelerate: 0,
                descent: 0,
                diffuseConstant: "diffuseConstant",
                direction: 0,
                display: 0,
                divisor: 0,
                dominantBaseline: "dominant-baseline",
                dur: 0,
                dx: 0,
                dy: 0,
                edgeMode: "edgeMode",
                elevation: 0,
                enableBackground: "enable-background",
                end: 0,
                exponent: 0,
                externalResourcesRequired: "externalResourcesRequired",
                fill: 0,
                fillOpacity: "fill-opacity",
                fillRule: "fill-rule",
                filter: 0,
                filterRes: "filterRes",
                filterUnits: "filterUnits",
                floodColor: "flood-color",
                floodOpacity: "flood-opacity",
                focusable: 0,
                fontFamily: "font-family",
                fontSize: "font-size",
                fontSizeAdjust: "font-size-adjust",
                fontStretch: "font-stretch",
                fontStyle: "font-style",
                fontVariant: "font-variant",
                fontWeight: "font-weight",
                format: 0,
                from: 0,
                fx: 0,
                fy: 0,
                g1: 0,
                g2: 0,
                glyphName: "glyph-name",
                glyphOrientationHorizontal: "glyph-orientation-horizontal",
                glyphOrientationVertical: "glyph-orientation-vertical",
                glyphRef: "glyphRef",
                gradientTransform: "gradientTransform",
                gradientUnits: "gradientUnits",
                hanging: 0,
                horizAdvX: "horiz-adv-x",
                horizOriginX: "horiz-origin-x",
                ideographic: 0,
                imageRendering: "image-rendering",
                in: 0,
                in2: 0,
                intercept: 0,
                k: 0,
                k1: 0,
                k2: 0,
                k3: 0,
                k4: 0,
                kernelMatrix: "kernelMatrix",
                kernelUnitLength: "kernelUnitLength",
                kerning: 0,
                keyPoints: "keyPoints",
                keySplines: "keySplines",
                keyTimes: "keyTimes",
                lengthAdjust: "lengthAdjust",
                letterSpacing: "letter-spacing",
                lightingColor: "lighting-color",
                limitingConeAngle: "limitingConeAngle",
                local: 0,
                markerEnd: "marker-end",
                markerMid: "marker-mid",
                markerStart: "marker-start",
                markerHeight: "markerHeight",
                markerUnits: "markerUnits",
                markerWidth: "markerWidth",
                mask: 0,
                maskContentUnits: "maskContentUnits",
                maskUnits: "maskUnits",
                mathematical: 0,
                mode: 0,
                numOctaves: "numOctaves",
                offset: 0,
                opacity: 0,
                operator: 0,
                order: 0,
                orient: 0,
                orientation: 0,
                origin: 0,
                overflow: 0,
                overlinePosition: "overline-position",
                overlineThickness: "overline-thickness",
                paintOrder: "paint-order",
                panose1: "panose-1",
                pathLength: "pathLength",
                patternContentUnits: "patternContentUnits",
                patternTransform: "patternTransform",
                patternUnits: "patternUnits",
                pointerEvents: "pointer-events",
                points: 0,
                pointsAtX: "pointsAtX",
                pointsAtY: "pointsAtY",
                pointsAtZ: "pointsAtZ",
                preserveAlpha: "preserveAlpha",
                preserveAspectRatio: "preserveAspectRatio",
                primitiveUnits: "primitiveUnits",
                r: 0,
                radius: 0,
                refX: "refX",
                refY: "refY",
                renderingIntent: "rendering-intent",
                repeatCount: "repeatCount",
                repeatDur: "repeatDur",
                requiredExtensions: "requiredExtensions",
                requiredFeatures: "requiredFeatures",
                restart: 0,
                result: 0,
                rotate: 0,
                rx: 0,
                ry: 0,
                scale: 0,
                seed: 0,
                shapeRendering: "shape-rendering",
                slope: 0,
                spacing: 0,
                specularConstant: "specularConstant",
                specularExponent: "specularExponent",
                speed: 0,
                spreadMethod: "spreadMethod",
                startOffset: "startOffset",
                stdDeviation: "stdDeviation",
                stemh: 0,
                stemv: 0,
                stitchTiles: "stitchTiles",
                stopColor: "stop-color",
                stopOpacity: "stop-opacity",
                strikethroughPosition: "strikethrough-position",
                strikethroughThickness: "strikethrough-thickness",
                string: 0,
                stroke: 0,
                strokeDasharray: "stroke-dasharray",
                strokeDashoffset: "stroke-dashoffset",
                strokeLinecap: "stroke-linecap",
                strokeLinejoin: "stroke-linejoin",
                strokeMiterlimit: "stroke-miterlimit",
                strokeOpacity: "stroke-opacity",
                strokeWidth: "stroke-width",
                surfaceScale: "surfaceScale",
                systemLanguage: "systemLanguage",
                tableValues: "tableValues",
                targetX: "targetX",
                targetY: "targetY",
                textAnchor: "text-anchor",
                textDecoration: "text-decoration",
                textRendering: "text-rendering",
                textLength: "textLength",
                to: 0,
                transform: 0,
                u1: 0,
                u2: 0,
                underlinePosition: "underline-position",
                underlineThickness: "underline-thickness",
                unicode: 0,
                unicodeBidi: "unicode-bidi",
                unicodeRange: "unicode-range",
                unitsPerEm: "units-per-em",
                vAlphabetic: "v-alphabetic",
                vHanging: "v-hanging",
                vIdeographic: "v-ideographic",
                vMathematical: "v-mathematical",
                values: 0,
                vectorEffect: "vector-effect",
                version: 0,
                vertAdvY: "vert-adv-y",
                vertOriginX: "vert-origin-x",
                vertOriginY: "vert-origin-y",
                viewBox: "viewBox",
                viewTarget: "viewTarget",
                visibility: 0,
                widths: 0,
                wordSpacing: "word-spacing",
                writingMode: "writing-mode",
                x: 0,
                xHeight: "x-height",
                x1: 0,
                x2: 0,
                xChannelSelector: "xChannelSelector",
                xlinkActuate: "xlink:actuate",
                xlinkArcrole: "xlink:arcrole",
                xlinkHref: "xlink:href",
                xlinkRole: "xlink:role",
                xlinkShow: "xlink:show",
                xlinkTitle: "xlink:title",
                xlinkType: "xlink:type",
                xmlBase: "xml:base",
                xmlns: 0,
                xmlnsXlink: "xmlns:xlink",
                xmlLang: "xml:lang",
                xmlSpace: "xml:space",
                y: 0,
                y1: 0,
                y2: 0,
                yChannelSelector: "yChannelSelector",
                z: 0,
                zoomAndPan: "zoomAndPan",
            },
            a = {
                Properties: {},
                DOMAttributeNamespaces: { xlinkActuate: n.xlink, xlinkArcrole: n.xlink, xlinkHref: n.xlink, xlinkRole: n.xlink, xlinkShow: n.xlink, xlinkTitle: n.xlink, xlinkType: n.xlink, xmlBase: n.xml, xmlLang: n.xml, xmlSpace: n.xml },
                DOMAttributeNames: {},
            };
        Object.keys(o).forEach(function (e) {
            (a.Properties[e] = 0), o[e] && (a.DOMAttributeNames[e] = o[e]);
        }),
            (e.exports = a);
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            if ("selectionStart" in e && u.hasSelectionCapabilities(e)) return { start: e.selectionStart, end: e.selectionEnd };
            if (window.getSelection) {
                var t = window.getSelection();
                return { anchorNode: t.anchorNode, anchorOffset: t.anchorOffset, focusNode: t.focusNode, focusOffset: t.focusOffset };
            }
            if (document.selection) {
                var r = document.selection.createRange();
                return { parentElement: r.parentElement(), text: r.text, top: r.boundingTop, left: r.boundingLeft };
            }
        }
        function o(e, t) {
            if (y || null == m || m !== l()) return null;
            var r = n(m);
            if (!v || !d(v, r)) {
                v = r;
                var o = c.getPooled(h.select, g, e, t);
                return (o.type = "select"), (o.target = m), a.accumulateTwoPhaseDispatches(o), o;
            }
            return null;
        }
        var a = r(18),
            i = r(5),
            s = r(4),
            u = r(76),
            c = r(10),
            l = r(77),
            p = r(61),
            d = r(41),
            f = i.canUseDOM && "documentMode" in document && document.documentMode <= 11,
            h = {
                select: {
                    phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" },
                    dependencies: ["topBlur", "topContextMenu", "topFocus", "topKeyDown", "topKeyUp", "topMouseDown", "topMouseUp", "topSelectionChange"],
                },
            },
            m = null,
            g = null,
            v = null,
            y = !1,
            b = !1,
            w = {
                eventTypes: h,
                extractEvents: function (e, t, r, n) {
                    if (!b) return null;
                    var a = t ? s.getNodeFromInstance(t) : window;
                    switch (e) {
                        case "topFocus":
                            (p(a) || "true" === a.contentEditable) && ((m = a), (g = t), (v = null));
                            break;
                        case "topBlur":
                            (m = null), (g = null), (v = null);
                            break;
                        case "topMouseDown":
                            y = !0;
                            break;
                        case "topContextMenu":
                        case "topMouseUp":
                            return (y = !1), o(r, n);
                        case "topSelectionChange":
                            if (f) break;
                        case "topKeyDown":
                        case "topKeyUp":
                            return o(r, n);
                    }
                    return null;
                },
                didPutListener: function (e, t, r) {
                    "onSelect" === t && (b = !0);
                },
            };
        e.exports = w;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return "." + e._rootNodeID;
        }
        function o(e) {
            return "button" === e || "input" === e || "select" === e || "textarea" === e;
        }
        var a = r(1),
            i = r(75),
            s = r(18),
            u = r(4),
            c = r(161),
            l = r(162),
            p = r(10),
            d = r(163),
            f = r(164),
            h = r(23),
            m = r(166),
            g = r(167),
            v = r(168),
            y = r(20),
            b = r(169),
            w = r(7),
            E = r(46),
            C = (r(0), {}),
            x = {};
        [
            "abort",
            "animationEnd",
            "animationIteration",
            "animationStart",
            "blur",
            "canPlay",
            "canPlayThrough",
            "click",
            "contextMenu",
            "copy",
            "cut",
            "doubleClick",
            "drag",
            "dragEnd",
            "dragEnter",
            "dragExit",
            "dragLeave",
            "dragOver",
            "dragStart",
            "drop",
            "durationChange",
            "emptied",
            "encrypted",
            "ended",
            "error",
            "focus",
            "input",
            "invalid",
            "keyDown",
            "keyPress",
            "keyUp",
            "load",
            "loadedData",
            "loadedMetadata",
            "loadStart",
            "mouseDown",
            "mouseMove",
            "mouseOut",
            "mouseOver",
            "mouseUp",
            "paste",
            "pause",
            "play",
            "playing",
            "progress",
            "rateChange",
            "reset",
            "scroll",
            "seeked",
            "seeking",
            "stalled",
            "submit",
            "suspend",
            "timeUpdate",
            "touchCancel",
            "touchEnd",
            "touchMove",
            "touchStart",
            "transitionEnd",
            "volumeChange",
            "waiting",
            "wheel",
        ].forEach(function (e) {
            var t = e[0].toUpperCase() + e.slice(1),
                r = "on" + t,
                n = "top" + t,
                o = { phasedRegistrationNames: { bubbled: r, captured: r + "Capture" }, dependencies: [n] };
            (C[e] = o), (x[n] = o);
        });
        var k = {},
            S = {
                eventTypes: C,
                extractEvents: function (e, t, r, n) {
                    var o = x[e];
                    if (!o) return null;
                    var i;
                    switch (e) {
                        case "topAbort":
                        case "topCanPlay":
                        case "topCanPlayThrough":
                        case "topDurationChange":
                        case "topEmptied":
                        case "topEncrypted":
                        case "topEnded":
                        case "topError":
                        case "topInput":
                        case "topInvalid":
                        case "topLoad":
                        case "topLoadedData":
                        case "topLoadedMetadata":
                        case "topLoadStart":
                        case "topPause":
                        case "topPlay":
                        case "topPlaying":
                        case "topProgress":
                        case "topRateChange":
                        case "topReset":
                        case "topSeeked":
                        case "topSeeking":
                        case "topStalled":
                        case "topSubmit":
                        case "topSuspend":
                        case "topTimeUpdate":
                        case "topVolumeChange":
                        case "topWaiting":
                            i = p;
                            break;
                        case "topKeyPress":
                            if (0 === E(r)) return null;
                        case "topKeyDown":
                        case "topKeyUp":
                            i = f;
                            break;
                        case "topBlur":
                        case "topFocus":
                            i = d;
                            break;
                        case "topClick":
                            if (2 === r.button) return null;
                        case "topDoubleClick":
                        case "topMouseDown":
                        case "topMouseMove":
                        case "topMouseUp":
                        case "topMouseOut":
                        case "topMouseOver":
                        case "topContextMenu":
                            i = h;
                            break;
                        case "topDrag":
                        case "topDragEnd":
                        case "topDragEnter":
                        case "topDragExit":
                        case "topDragLeave":
                        case "topDragOver":
                        case "topDragStart":
                        case "topDrop":
                            i = m;
                            break;
                        case "topTouchCancel":
                        case "topTouchEnd":
                        case "topTouchMove":
                        case "topTouchStart":
                            i = g;
                            break;
                        case "topAnimationEnd":
                        case "topAnimationIteration":
                        case "topAnimationStart":
                            i = c;
                            break;
                        case "topTransitionEnd":
                            i = v;
                            break;
                        case "topScroll":
                            i = y;
                            break;
                        case "topWheel":
                            i = b;
                            break;
                        case "topCopy":
                        case "topCut":
                        case "topPaste":
                            i = l;
                    }
                    i || a("86", e);
                    var u = i.getPooled(o, t, r, n);
                    return s.accumulateTwoPhaseDispatches(u), u;
                },
                didPutListener: function (e, t, r) {
                    if ("onClick" === t && !o(e._tag)) {
                        var a = n(e),
                            s = u.getNodeFromInstance(e);
                        k[a] || (k[a] = i.listen(s, "click", w));
                    }
                },
                willDeleteListener: function (e, t) {
                    if ("onClick" === t && !o(e._tag)) {
                        var r = n(e);
                        k[r].remove(), delete k[r];
                    }
                },
            };
        e.exports = S;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            return o.call(this, e, t, r, n);
        }
        var o = r(10),
            a = { animationName: null, elapsedTime: null, pseudoElement: null };
        o.augmentClass(n, a), (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            return o.call(this, e, t, r, n);
        }
        var o = r(10),
            a = {
                clipboardData: function (e) {
                    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
                },
            };
        o.augmentClass(n, a), (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            return o.call(this, e, t, r, n);
        }
        var o = r(20),
            a = { relatedTarget: null };
        o.augmentClass(n, a), (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            return o.call(this, e, t, r, n);
        }
        var o = r(20),
            a = r(46),
            i = r(165),
            s = r(35),
            u = {
                key: i,
                location: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                repeat: null,
                locale: null,
                getModifierState: s,
                charCode: function (e) {
                    return "keypress" === e.type ? a(e) : 0;
                },
                keyCode: function (e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                },
                which: function (e) {
                    return "keypress" === e.type ? a(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                },
            };
        o.augmentClass(n, u), (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            if (e.key) {
                var t = a[e.key] || e.key;
                if ("Unidentified" !== t) return t;
            }
            if ("keypress" === e.type) {
                var r = o(e);
                return 13 === r ? "Enter" : String.fromCharCode(r);
            }
            return "keydown" === e.type || "keyup" === e.type ? i[e.keyCode] || "Unidentified" : "";
        }
        var o = r(46),
            a = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified",
            },
            i = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta",
            };
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            return o.call(this, e, t, r, n);
        }
        var o = r(23),
            a = { dataTransfer: null };
        o.augmentClass(n, a), (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            return o.call(this, e, t, r, n);
        }
        var o = r(20),
            a = r(35),
            i = { touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: a };
        o.augmentClass(n, i), (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            return o.call(this, e, t, r, n);
        }
        var o = r(10),
            a = { propertyName: null, elapsedTime: null, pseudoElement: null };
        o.augmentClass(n, a), (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            return o.call(this, e, t, r, n);
        }
        var o = r(23),
            a = {
                deltaX: function (e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
                },
                deltaY: function (e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
                },
                deltaZ: null,
                deltaMode: null,
            };
        o.augmentClass(n, a), (e.exports = n);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            var r = { _topLevelWrapper: e, _idCounter: 1, _ownerDocument: t ? (t.nodeType === o ? t : t.ownerDocument) : null, _node: t, _tag: t ? t.nodeName.toLowerCase() : null, _namespaceURI: t ? t.namespaceURI : null };
            return r;
        }
        var o = (r(45), 9);
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        var n = { useCreateElement: !0, useFiber: !1 };
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        var n = r(173),
            o = /\/?>/,
            a = /^<\!\-\-/,
            i = {
                CHECKSUM_ATTR_NAME: "data-react-checksum",
                addChecksumToMarkup: function (e) {
                    var t = n(e);
                    return a.test(e) ? e : e.replace(o, " " + i.CHECKSUM_ATTR_NAME + '="' + t + '"$&');
                },
                canReuseMarkup: function (e, t) {
                    var r = t.getAttribute(i.CHECKSUM_ATTR_NAME);
                    return (r = r && parseInt(r, 10)), n(e) === r;
                },
            };
        e.exports = i;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            for (var t = 1, r = 0, n = 0, a = e.length, i = -4 & a; n < i; ) {
                for (var s = Math.min(n + 4096, i); n < s; n += 4) r += (t += e.charCodeAt(n)) + (t += e.charCodeAt(n + 1)) + (t += e.charCodeAt(n + 2)) + (t += e.charCodeAt(n + 3));
                (t %= o), (r %= o);
            }
            for (; n < a; n++) r += t += e.charCodeAt(n);
            return (t %= o), (r %= o), t | (r << 16);
        }
        var o = 65521;
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        e.exports = "15.6.2";
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = i.get(e);
            if (t) return (t = s(t)), t ? a.getNodeFromInstance(t) : null;
            "function" == typeof e.render ? o("44") : o("45", Object.keys(e));
        }
        var o = r(1),
            a = (r(9), r(4)),
            i = r(21),
            s = r(79);
        r(0), r(2);
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        var n = r(78);
        e.exports = n.renderSubtreeIntoContainer;
    },
    function (e, t, r) {
        var n = r(178);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        r(48)(n, {});
        n.locals && (e.exports = n.locals);
    },
    function (e, t, r) {
        (t = e.exports = r(47)()),
            t.push([
                e.i,
                ".h5p-speak-the-words{font-family:Roboto,sans-serif}.h5p-speak-the-words .h5p-question-introduction{margin:0;padding:2em 1.75em 1em;font-size:inherit}.h5p-speak-the-words-introduction{font-size:1.4em}.h5p-speak-the-words .h5p-question-content{margin:0;padding:1em 1.75em}.h5p-speak-the-words .h5p-question-feedback.h5p-question-visible{margin:0;padding:1em 1.75em 0}.h5p-speak-the-words .h5p-question-scorebar.h5p-question-visible{margin-left:1.75em}.h5p-speak-the-words .h5p-question-buttons.h5p-question-visible.has-scorebar:not(.wrap){padding-top:0;width:calc(100% - 16.5em);margin-bottom:2em}.h5p-speak-the-words .h5p-question-buttons.h5p-question-visible.wrap{margin-left:1.75em;margin-bottom:1.75em;width:calc(100% - 3.5em)}.h5p-speak-the-words .h5p-question-scorebar.full-width{width:calc(100% - 3.5em)}.h5p-speak-the-words-unsupported-browser-error{padding:1em 0;color:darkred}.h5p-speak-the-words-unsupported-browser-body,.h5p-speak-the-words-unsupported-browser-header{margin:1em 0}.h5p-speak-the-words .h5p-question-content.empty{padding:0}",
                "",
            ]);
    },
    function (e, t, r) {
        "use strict";
        var n,
            o,
            a =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      };
        //! annyang
        //! version : 2.6.1
        //! author  : Tal Ater @TalAter
        //! license : MIT
        //! https://www.TalAter.com/annyang/
        //! annyang
        //! version : 2.6.1
        //! author  : Tal Ater @TalAter
        //! license : MIT
        //! https://www.TalAter.com/annyang/
        !(function (r, a) {
            (n = []),
                void 0 !==
                    (o = function () {
                        return (r.annyang = a(r));
                    }.apply(t, n)) && (e.exports = o);
        })("undefined" != typeof window ? window : void 0, function (e, t) {
            var r,
                n = e.SpeechRecognition || e.webkitSpeechRecognition || e.mozSpeechRecognition || e.msSpeechRecognition || e.oSpeechRecognition;
            if (!n) return null;
            var o,
                i,
                s = [],
                u = { start: [], error: [], end: [], soundstart: [], result: [], resultMatch: [], resultNoMatch: [], errorNetwork: [], errorPermissionBlocked: [], errorPermissionDenied: [] },
                c = 0,
                l = 0,
                p = !1,
                d = "font-weight: bold; color: #00f;",
                f = !1,
                h = !1,
                m = /\s*\((.*?)\)\s*/g,
                g = /(\(\?:[^)]+\))\?/g,
                v = /(\(\?)?:\w+/g,
                y = /\*\w+/g,
                b = /[\-{}\[\]+?.,\\\^$|#]/g,
                w = function (e) {
                    for (var t = arguments.length, r = Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                    e.forEach(function (e) {
                        e.callback.apply(e.context, r);
                    });
                },
                E = function () {
                    return o !== t;
                },
                C = function (e, t) {
                    -1 !== e.indexOf("%c") || t ? console.log(e, t || d) : console.log(e);
                },
                x = function () {
                    E() || r.init({}, !1);
                },
                k = function (e, t, r) {
                    s.push({ command: e, callback: t, originalPhrase: r }), p && C("Command successfully loaded: %c" + r, d);
                },
                S = function (e) {
                    var t;
                    w(u.result, e);
                    for (var r = 0; r < e.length; r++) {
                        (t = e[r].trim()), p && C("Speech recognized: %c" + t, d);
                        for (var n = 0, o = s.length; n < o; n++) {
                            var a = s[n],
                                i = a.command.exec(t);
                            if (i) {
                                var c = i.slice(1);
                                return p && (C("command matched: %c" + a.originalPhrase, d), c.length && C("with parameters", c)), a.callback.apply(this, c), void w(u.resultMatch, t, a.originalPhrase, e);
                            }
                        }
                    }
                    w(u.resultNoMatch, e);
                };
            return (r = {
                init: function (a) {
                    var d = !(1 < arguments.length && arguments[1] !== t) || arguments[1];
                    o && o.abort && o.abort(),
                        ((o = new n()).maxAlternatives = 5),
                        (o.continuous = "http:" === e.location.protocol),
                        (o.lang = "en-US"),
                        (o.onstart = function () {
                            (h = !0), w(u.start);
                        }),
                        (o.onsoundstart = function () {
                            w(u.soundstart);
                        }),
                        (o.onerror = function (e) {
                            switch ((w(u.error, e), e.error)) {
                                case "network":
                                    w(u.errorNetwork, e);
                                    break;
                                case "not-allowed":
                                case "service-not-allowed":
                                    (i = !1), new Date().getTime() - c < 200 ? w(u.errorPermissionBlocked, e) : w(u.errorPermissionDenied, e);
                            }
                        }),
                        (o.onend = function () {
                            if (((h = !1), w(u.end), i)) {
                                var e = new Date().getTime() - c;
                                (l += 1) % 10 == 0 && p && C("Speech Recognition is repeatedly stopping and starting. See http://is.gd/annyang_restarts for tips."),
                                    e < 1e3
                                        ? setTimeout(function () {
                                              r.start({ paused: f });
                                          }, 1e3 - e)
                                        : r.start({ paused: f });
                            }
                        }),
                        (o.onresult = function (e) {
                            if (f) return p && C("Speech heard, but annyang is paused"), !1;
                            for (var t = e.results[e.resultIndex], r = [], n = 0; n < t.length; n++) r[n] = t[n].transcript;
                            S(r);
                        }),
                        d && (s = []),
                        a.length && this.addCommands(a);
                },
                start: function (e) {
                    x(), (f = (e = e || {}).paused !== t && !!e.paused), (i = e.autoRestart === t || !!e.autoRestart), e.continuous !== t && (o.continuous = !!e.continuous), (c = new Date().getTime());
                    try {
                        o.start();
                    } catch (e) {
                        p && C(e.message);
                    }
                },
                abort: function () {
                    (i = !1), (l = 0), E() && o.abort();
                },
                pause: function () {
                    f = !0;
                },
                resume: function () {
                    r.start();
                },
                debug: function () {
                    var e = !(0 < arguments.length && arguments[0] !== t) || arguments[0];
                    p = !!e;
                },
                setLanguage: function (e) {
                    x(), (o.lang = e);
                },
                addCommands: function (t) {
                    var r, n;
                    for (var o in (x(), t))
                        if (t.hasOwnProperty(o))
                            if ("function" == typeof (r = e[t[o]] || t[o]))
                                k(
                                    ((n = (n = o)
                                        .replace(b, "\\$&")
                                        .replace(m, "(?:$1)?")
                                        .replace(v, function (e, t) {
                                            return t ? e : "([^\\s]+)";
                                        })
                                        .replace(y, "(.*?)")
                                        .replace(g, "\\s*$1?\\s*")),
                                    new RegExp("^" + n + "$", "i")),
                                    r,
                                    o
                                );
                            else {
                                if (!("object" === (void 0 === r ? "undefined" : a(r)) && r.regexp instanceof RegExp)) {
                                    p && C("Can not register command: %c" + o, d);
                                    continue;
                                }
                                k(new RegExp(r.regexp.source, "i"), r.callback, o);
                            }
                },
                removeCommands: function (e) {
                    e === t
                        ? (s = [])
                        : ((e = Array.isArray(e) ? e : [e]),
                          (s = s.filter(function (t) {
                              for (var r = 0; r < e.length; r++) if (e[r] === t.originalPhrase) return !1;
                              return !0;
                          })));
                },
                addCallback: function (r, n, o) {
                    var a = e[n] || n;
                    "function" == typeof a && u[r] !== t && u[r].push({ callback: a, context: o || this });
                },
                removeCallback: function (e, r) {
                    var n = function (e) {
                        return e.callback !== r;
                    };
                    for (var o in u) u.hasOwnProperty(o) && ((e !== t && e !== o) || (u[o] = r === t ? [] : u[o].filter(n)));
                },
                isListening: function () {
                    return h && !f;
                },
                getSpeechRecognizer: function () {
                    return o;
                },
                trigger: function (e) {
                    r.isListening() ? (Array.isArray(e) || (e = [e]), S(e)) : p && C(h ? "Speech heard, but annyang is paused" : "Cannot trigger while annyang is aborted");
                },
            });
        });
    },
    function (e, t) {
        e.exports = function (e) {
            return (
                e.webpackPolyfill ||
                    ((e.deprecate = function () {}),
                    (e.paths = []),
                    e.children || (e.children = []),
                    Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return e.l;
                        },
                    }),
                    Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function () {
                            return e.i;
                        },
                    }),
                    (e.webpackPolyfill = 1)),
                e
            );
        };
    },
    function (e, t) {
        var r;
        r = (function () {
            return this;
        })();
        try {
            r = r || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" == typeof window && (r = window);
        }
        e.exports = r;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = (function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t;
                };
            })(),
            a = (function () {
                function e(t, r) {
                    var o = this;
                    n(this, e),
                        (this.params = t),
                        (this.eventStore = r),
                        (this.annyang = window.annyang),
                        (this.listening = !1),
                        (this.commands = this.getCommands(t.acceptedAnswers)),
                        this.eventStore.on("start-listening", function () {
                            o.init();
                        }),
                        this.eventStore.on("stop-listening", function () {
                            o.destroy();
                        }),
                        this.eventStore.on("stop-all-media", function () {
                            o.destroy();
                        });
                }
                return (
                    o(e, [
                        {
                            key: "init",
                            value: function () {
                                this.params.inputLanguage && this.annyang.setLanguage(this.params.inputLanguage),
                                    (this.listening = !0),
                                    this.annyang.addCallback("resultNoMatch", this.answeredWrong.bind(this)),
                                    this.annyang.addCommands(this.commands),
                                    this.annyang.start();
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                (this.listening = !1), this.annyang.removeCallback("resultNoMatch", this.answeredWrong.bind(this)), this.annyang.removeCommands(), this.annyang.abort();
                            },
                        },
                        {
                            key: "answeredCorrectly",
                            value: function (e) {
                                this.listening && (this.eventStore.trigger("answered-correctly", [e]), this.destroy());
                            },
                        },
                        {
                            key: "answeredWrong",
                            value: function (e) {
                                this.listening && (this.eventStore.trigger("answered-wrong", e), this.destroy());
                            },
                        },
                        {
                            key: "getCommands",
                            value: function (e) {
                                var t = this;
                                return e.reduce(function (e, r) {
                                    return (
                                        (e[r] = function () {
                                            t.answeredCorrectly(r);
                                        }),
                                        e
                                    );
                                }, {});
                            },
                        },
                    ]),
                    e
                );
            })();
        t.default = a;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = (function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t;
                };
            })(),
            s = r(28),
            u = (function (e) {
                return e && e.__esModule ? e : { default: e };
            })(s);
        r(184);
        var c = r(27),
            l = (function (e) {
                function t(e) {
                    n(this, t);
                    var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return (
                        (r.speechEngine = e.speechEngine),
                        (r.eventStore = e.eventStore),
                        (r.initialState = { listening: !1, processingSound: !1, disabled: !1, hidden: !1 }),
                        (r.state = r.initialState),
                        r.initSpeechEngineListeners(),
                        r.eventStore.on("stop-all-media", function () {
                            r.setState({ listening: !1 });
                        }),
                        r
                    );
                }
                return (
                    a(t, e),
                    i(t, [
                        {
                            key: "resetState",
                            value: function () {
                                this.setState(this.initialState);
                            },
                        },
                        {
                            key: "disableButton",
                            value: function () {
                                this.eventStore.trigger("stop-listening"), this.setState({ listening: !1, processingSound: !1, disabled: !0 });
                            },
                        },
                        {
                            key: "hideButton",
                            value: function () {
                                this.eventStore.trigger("stop-listening"), this.setState({ hidden: !0 });
                            },
                        },
                        {
                            key: "handleKeyPressed",
                            value: function (e) {
                                (32 !== e.which && 13 !== e.which) || (this.startListening(), e.preventDefault());
                            },
                        },
                        {
                            key: "handleMouseDown",
                            value: function (e) {
                                1 === e.nativeEvent.which && (this.startListening(), e.preventDefault());
                            },
                        },
                        {
                            key: "startListening",
                            value: function () {
                                if (this.state.disabled) return !1;
                                var e = this;
                                navigator.permissions
                                    .query({ name: "microphone" })
                                    .then(function (t) {
                                        if ("denied" !== t.state && "prompt" !== t.state) {
                                            if (e.state.listening) return e.setState({ listening: !1 }), void e.eventStore.trigger("stop-listening");
                                            e.setState({ listening: !0 }), e.eventStore.trigger("start-listening");
                                        }
                                    })
                                    .catch(function () {
                                        navigator.mediaDevices.getUserMedia({ audio: !0 }).then(function (e) {
                                            (window.localStream = e), (window.localAudio.srcObject = e), (window.localAudio.autoplay = !0);
                                        });
                                    });
                            },
                        },
                        {
                            key: "initSpeechEngineListeners",
                            value: function () {
                                this.eventStore.on("reset-task", this.resetState.bind(this)),
                                    this.eventStore.on("show-solution", this.hideButton.bind(this)),
                                    this.eventStore.on("answered-correctly", this.hideButton.bind(this)),
                                    this.eventStore.on("answered-wrong", this.disableButton.bind(this));
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = "h5p-speak-the-words-record h5p-joubelui-button" + (this.state.listening ? " h5p-listening" : "") + (this.state.disabled ? " h5p-disabled" : "") + (this.state.hidden ? " h5p-hidden" : ""),
                                    t = this.state.listening ? this.props.l10n.listeningLabel : this.props.l10n.speakLabel;
                                return u.default.createElement("button", { type: "button", className: e, onMouseDown: this.handleMouseDown.bind(this), onKeyDown: this.handleKeyPressed.bind(this) }, (0, c.decode)(t));
                            },
                        },
                    ]),
                    t
                );
            })(u.default.Component);
        t.default = l;
    },
    function (e, t, r) {
        var n = r(185);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        r(48)(n, {});
        n.locals && (e.exports = n.locals);
    },
    function (e, t, r) {
        (t = e.exports = r(47)()),
            t.push([
                e.i,
                '.h5p-speak-the-words-record:before{font-family:H5PFontAwesome4;content:"\\F130"}.h5p-speak-the-words-record.h5p-disabled,.h5p-speak-the-words-record.h5p-disabled:active,.h5p-speak-the-words-record.h5p-disabled:focus,.h5p-speak-the-words-record.h5p-disabled:hover,.h5p-speak-the-words-record.h5p-hidden,.h5p-speak-the-words-record.h5p-hidden:active,.h5p-speak-the-words-record.h5p-hidden:focus,.h5p-speak-the-words-record.h5p-hidden:hover{display:none}.h5p-speak-the-words-record.h5p-listening,.h5p-speak-the-words-record.h5p-listening:active,.h5p-speak-the-words-record.h5p-listening:focus,.h5p-speak-the-words-record.h5p-listening:hover{background-color:#dd2e2e;box-shadow:none}',
                "",
            ]);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = (function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t;
                };
            })(),
            s = r(28),
            u = (function (e) {
                return e && e.__esModule ? e : { default: e };
            })(s);
        r(187);
        var c = r(27),
            l = (function (e) {
                function t(e) {
                    n(this, t);
                    var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return (
                        (r.state = { showSolution: !1, userAnswers: [] }),
                        e.eventStore.on("show-solution", function () {
                            r.setState({ showSolution: !0 });
                        }),
                        e.eventStore.on("reset-task", function () {
                            r.setState({ showSolution: !1, userAnswers: [] });
                        }),
                        e.eventStore.on("answered-wrong", function (e) {
                            r.setState({ userAnswers: e.data });
                        }),
                        r
                    );
                }
                return (
                    a(t, e),
                    i(t, [
                        {
                            key: "render",
                            value: function () {
                                var e = "h5p-speak-the-words-solution-area" + (this.state.showSolution ? "" : " hidden"),
                                    t = null;
                                return (
                                    this.state.userAnswers &&
                                        this.state.userAnswers.length &&
                                        (t = u.default.createElement(
                                            "div",
                                            { className: "h5p-speak-the-words-user-answer-text" },
                                            u.default.createElement("div", null, (0, c.decode)(this.props.l10n.userAnswersText)),
                                            this.state.userAnswers.map(function (e) {
                                                return u.default.createElement("div", { key: e, className: "h5p-speak-the-words-interpreted-answer" }, e);
                                            })
                                        )),
                                    u.default.createElement(
                                        "div",
                                        { className: e },
                                        t,
                                        u.default.createElement(
                                            "div",
                                            { className: "h5p-speak-the-words-correct-answer-text" },
                                            u.default.createElement("div", null, (0, c.decode)(this.props.l10n.correctAnswersText)),
                                            this.props.acceptedAnswers.map(function (e) {
                                                return u.default.createElement("div", { key: e, className: "h5p-speak-the-words-correct-answer" }, e);
                                            })
                                        )
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(u.default.Component);
        t.default = l;
    },
    function (e, t, r) {
        var n = r(188);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        r(48)(n, {});
        n.locals && (e.exports = n.locals);
    },
    function (e, t, r) {
        (t = e.exports = r(47)()),
            t.push([
                e.i,
                '.h5p-speak-the-words-solution-area.hidden{display:none}.h5p-speak-the-words-correct-answer-text,.h5p-speak-the-words-user-answer-text{margin:1em 0}.h5p-speak-the-words-correct-answer,.h5p-speak-the-words-interpreted-answer{display:inline-block;padding:.15em .65em;margin:0 .25em .25em;border-radius:.25em}.h5p-speak-the-words-interpreted-answer{background-color:#f7d0d0;color:#b71c1c}.h5p-speak-the-words-correct-answer{border:.1em dotted #77b395;background-color:#e4f4ec}.h5p-speak-the-words-interpreted-answer:after{font-family:H5PFontAwesome4;position:relative;right:.1em;display:inline-block;text-decoration:none;padding-left:.75em;content:"\\F00D";color:#b71c1c}',
                "",
            ]);
    },
]);
