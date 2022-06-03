/*! YoptaScript v2.0.0 (https://yopta.space) | Copyright (c) 2016-2021 Yopta.Space project and Contributors | Licensed under the MIT license */
(() => {
    "use strict";
    var e = {
            776: function (e, t, o) {
                var n =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e };
                    };
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.compile = void 0);
                var r = n(o(326));
                function a(e, t) {
                    void 0 === t && (t = "ys");
                    var o = "ys" === t ? 1 : 0;
                    return (
                        r.default
                            .sort(function (e, t) {
                                var n = e[o].length;
                                return t[o].length - n;
                            })
                            .forEach(function (t) {
                                return (
                                    (n = e),
                                    (r = t[o]),
                                    (a = t[+!o]),
                                    (i = new RegExp(
                                        (function (e) {
                                            return (e = e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")), /^\w+$/.test(e) && (e = "\\b" + e + "\\b"), e;
                                        })(r),
                                        "g"
                                    )),
                                    (e = n.replace(i, a))
                                );
                                var n, r, a, i;
                            }),
                        e
                    );
                }
                function i(e, t) {
                    void 0 === t && (t = "ys");
                    var o = /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/g,
                        n = "ys_" + new Date().getTime() + "_",
                        r = {},
                        i =
                            (e = e.replace(/\"(?:\\.|[^\"\\])*\"|\'(?:\\.|[^\'\\])*\'/g, function (e, t) {
                                var o = n + t;
                                return (r[o] = e), o;
                            })).match(o) || [];
                    for (var l in ((e = (e = a(e, t)).replace(o, function () {
                        return i.shift() || "";
                    })),
                    r))
                        e = e.replace(l, r[l]);
                    return e;
                }
                (t.compile = i), (("undefined" != typeof window ? window : o.g).kazakh = i);
            },
            607: function (e, t, o) {
                var n =
                        (this && this.__awaiter) ||
                        function (e, t, o, n) {
                            return new (o || (o = Promise))(function (r, a) {
                                function i(e) {
                                    try {
                                        s(n.next(e));
                                    } catch (e) {
                                        a(e);
                                    }
                                }
                                function l(e) {
                                    try {
                                        s(n.throw(e));
                                    } catch (e) {
                                        a(e);
                                    }
                                }
                                function s(e) {
                                    var t;
                                    e.done
                                        ? r(e.value)
                                        : ((t = e.value),
                                          t instanceof o
                                              ? t
                                              : new o(function (e) {
                                                    e(t);
                                                })).then(i, l);
                                }
                                s((n = n.apply(e, t || [])).next());
                            });
                        },
                    r =
                        (this && this.__generator) ||
                        function (e, t) {
                            var o,
                                n,
                                r,
                                a,
                                i = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & r[0]) throw r[1];
                                        return r[1];
                                    },
                                    trys: [],
                                    ops: [],
                                };
                            return (
                                (a = { next: l(0), throw: l(1), return: l(2) }),
                                "function" == typeof Symbol &&
                                    (a[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                a
                            );
                            function l(a) {
                                return function (l) {
                                    return (function (a) {
                                        if (o) throw new TypeError("Generator is already executing.");
                                        for (; i; )
                                            try {
                                                if (((o = 1), n && (r = 2 & a[0] ? n.return : a[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, a[1])).done)) return r;
                                                switch (((n = 0), r && (a = [2 & a[0], r.value]), a[0])) {
                                                    case 0:
                                                    case 1:
                                                        r = a;
                                                        break;
                                                    case 4:
                                                        return i.label++, { value: a[1], done: !1 };
                                                    case 5:
                                                        i.label++, (n = a[1]), (a = [0]);
                                                        continue;
                                                    case 7:
                                                        (a = i.ops.pop()), i.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!((r = i.trys), (r = r.length > 0 && r[r.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                                                            i = 0;
                                                            continue;
                                                        }
                                                        if (3 === a[0] && (!r || (a[1] > r[0] && a[1] < r[3]))) {
                                                            i.label = a[1];
                                                            break;
                                                        }
                                                        if (6 === a[0] && i.label < r[1]) {
                                                            (i.label = r[1]), (r = a);
                                                            break;
                                                        }
                                                        if (r && i.label < r[2]) {
                                                            (i.label = r[2]), i.ops.push(a);
                                                            break;
                                                        }
                                                        r[2] && i.ops.pop(), i.trys.pop();
                                                        continue;
                                                }
                                                a = t.call(e, i);
                                            } catch (e) {
                                                (a = [6, e]), (n = 0);
                                            } finally {
                                                o = r = 0;
                                            }
                                        if (5 & a[0]) throw a[1];
                                        return { value: a[0] ? a[1] : void 0, done: !0 };
                                    })([a, l]);
                                };
                            }
                        };
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.kazakh = void 0);
                var a = o(776);
                function i(e) {
                    return n(this, void 0, void 0, function () {
                        var t, o;
                        return r(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return null === e.parentNode ? [3, 3] : (o = e.textContent) ? [3, 2] : [4, l(e)];
                                case 1:
                                    (o = n.sent()), (n.label = 2);
                                case 2:
                                    (t = o), e.parentNode.removeChild(e), (r = a.compile(t, "ys")), ((i = document.createElement("script")).innerHTML = r), document.body.appendChild(i), (n.label = 3);
                                case 3:
                                    return [2];
                            }
                            var r, i;
                        });
                    });
                }
                function l(e) {
                    return n(this, void 0, void 0, function () {
                        var t, o;
                        return r(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return (t = e.getAttribute("src")), (o = ""), null !== t && t.length ? [4, fetch(t, { method: "GET" })] : [3, 3];
                                case 1:
                                    return [4, n.sent().text()];
                                case 2:
                                    (o = n.sent()), (n.label = 3);
                                case 3:
                                    return [2, o];
                            }
                        });
                    });
                }
                Object.defineProperty(t, "kazakh", {
                    enumerable: !0,
                    get: function () {
                        return a.compile;
                    },
                }),
                    "undefined" != typeof window && (document.querySelectorAll('[language="KazakhScript"]').forEach(i), document.querySelectorAll('[type="text/x-kazakhscript"]').forEach(i));
            },
            326: (e) => {
                e.exports = JSON.parse(
                    kazakhLib
                );
            },
        },
        t = {};
    function o(n) {
        var r = t[n];
        if (void 0 !== r) return r.exports;
        var a = (t[n] = { exports: {} });
        return e[n].call(a.exports, a, a.exports, o), a.exports;
    }
    o.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    })();
    o(607);
})();
document.getElementById("jstokazakh").addEventListener(
    "keyup",
    function () {
        converter(true);
    },
    false
);
document.getElementById("kazakh").addEventListener(
    "keyup",
    function () {
        converter(false);
    },
    false
);
function converter(lang) {
    if (lang) {
        var jstokz = document.getElementById("jstokazakh").value;
        document.getElementById("kazakh").value = window.kazakh(jstokz, "js");
    } else {
        var kztojs = document.getElementById("kazakh").value;
        document.getElementById("jstokazakh").value = window.kazakh(kztojs, "ys");
    }
}
