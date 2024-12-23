"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[844], {
    9205: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return s
            }
        });
        var n = r(2265);
        let o = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
          , i = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return t.filter( (e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()
        };
        var l = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        let a = (0,
        n.forwardRef)( (e, t) => {
            let {color: r="currentColor", size: o=24, strokeWidth: a=2, absoluteStrokeWidth: s, className: u="", children: c, iconNode: d, ...f} = e;
            return (0,
            n.createElement)("svg", {
                ref: t,
                ...l,
                width: o,
                height: o,
                stroke: r,
                strokeWidth: s ? 24 * Number(a) / Number(o) : a,
                className: i("lucide", u),
                ...f
            }, [...d.map(e => {
                let[t,r] = e;
                return (0,
                n.createElement)(t, r)
            }
            ), ...Array.isArray(c) ? c : [c]])
        }
        )
          , s = (e, t) => {
            let r = (0,
            n.forwardRef)( (r, l) => {
                let {className: s, ...u} = r;
                return (0,
                n.createElement)(a, {
                    ref: l,
                    iconNode: t,
                    className: i("lucide-".concat(o(e)), s),
                    ...u
                })
            }
            );
            return r.displayName = "".concat(e),
            r
        }
    },
    401: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return n
            }
        });
        let n = (0,
        r(9205).Z)("Check", [["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]])
    },
    875: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return n
            }
        });
        let n = (0,
        r(9205).Z)("ChevronDown", [["path", {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }]])
    },
    2135: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return n
            }
        });
        let n = (0,
        r(9205).Z)("ChevronUp", [["path", {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }]])
    },
    3145: function(e, t, r) {
        r.d(t, {
            default: function() {
                return o.a
            }
        });
        var n = r(8461)
          , o = r.n(n)
    },
    5878: function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function() {
                return b
            }
        });
        let n = r(7043)
          , o = r(3099)
          , i = r(7437)
          , l = o._(r(2265))
          , a = n._(r(4887))
          , s = n._(r(8293))
          , u = r(5346)
          , c = r(128)
          , d = r(2589);
        r(1765);
        let f = r(5523)
          , p = n._(r(5084))
          , h = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0
        };
        function m(e, t, r, n, o, i, l) {
            let a = null == e ? void 0 : e.src;
            e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a,
            ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
            ).then( () => {
                if (e.parentElement && e.isConnected) {
                    if ("empty" !== t && o(!0),
                    null == r ? void 0 : r.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let n = !1
                          , o = !1;
                        r.current({
                            ...t,
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: () => n,
                            isPropagationStopped: () => o,
                            persist: () => {}
                            ,
                            preventDefault: () => {
                                n = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: () => {
                                o = !0,
                                t.stopPropagation()
                            }
                        })
                    }
                    (null == n ? void 0 : n.current) && n.current(e)
                }
            }
            ))
        }
        function g(e) {
            return l.use ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let v = (0,
        l.forwardRef)( (e, t) => {
            let {src: r, srcSet: n, sizes: o, height: a, width: s, decoding: u, className: c, style: d, fetchPriority: f, placeholder: p, loading: h, unoptimized: v, fill: y, onLoadRef: b, onLoadingCompleteRef: w, setBlurComplete: x, setShowAltText: E, sizesInput: C, onLoad: S, onError: R, ...M} = e;
            return (0,
            i.jsx)("img", {
                ...M,
                ...g(f),
                loading: h,
                width: s,
                height: a,
                decoding: u,
                "data-nimg": y ? "fill" : "1",
                className: c,
                style: d,
                sizes: o,
                srcSet: n,
                src: r,
                ref: (0,
                l.useCallback)(e => {
                    t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                    e && (R && (e.src = e.src),
                    e.complete && m(e, p, b, w, x, v, C))
                }
                , [r, p, b, w, x, R, v, C, t]),
                onLoad: e => {
                    m(e.currentTarget, p, b, w, x, v, C)
                }
                ,
                onError: e => {
                    E(!0),
                    "empty" !== p && x(!0),
                    R && R(e)
                }
            })
        }
        );
        function y(e) {
            let {isAppRouter: t, imgAttributes: r} = e
              , n = {
                as: "image",
                imageSrcSet: r.srcSet,
                imageSizes: r.sizes,
                crossOrigin: r.crossOrigin,
                referrerPolicy: r.referrerPolicy,
                ...g(r.fetchPriority)
            };
            return t && a.default.preload ? (a.default.preload(r.src, n),
            null) : (0,
            i.jsx)(s.default, {
                children: (0,
                i.jsx)("link", {
                    rel: "preload",
                    href: r.srcSet ? void 0 : r.src,
                    ...n
                }, "__nimg-" + r.src + r.srcSet + r.sizes)
            })
        }
        let b = (0,
        l.forwardRef)( (e, t) => {
            let r = (0,
            l.useContext)(f.RouterContext)
              , n = (0,
            l.useContext)(d.ImageConfigContext)
              , o = (0,
            l.useMemo)( () => {
                let e = h || n || c.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
                  , r = e.deviceSizes.sort( (e, t) => e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: r
                }
            }
            , [n])
              , {onLoad: a, onLoadingComplete: s} = e
              , m = (0,
            l.useRef)(a);
            (0,
            l.useEffect)( () => {
                m.current = a
            }
            , [a]);
            let g = (0,
            l.useRef)(s);
            (0,
            l.useEffect)( () => {
                g.current = s
            }
            , [s]);
            let[b,w] = (0,
            l.useState)(!1)
              , [x,E] = (0,
            l.useState)(!1)
              , {props: C, meta: S} = (0,
            u.getImgProps)(e, {
                defaultLoader: p.default,
                imgConf: o,
                blurComplete: b,
                showAltText: x
            });
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(v, {
                    ...C,
                    unoptimized: S.unoptimized,
                    placeholder: S.placeholder,
                    fill: S.fill,
                    onLoadRef: m,
                    onLoadingCompleteRef: g,
                    setBlurComplete: w,
                    setShowAltText: E,
                    sizesInput: e.sizes,
                    ref: t
                }), S.priority ? (0,
                i.jsx)(y, {
                    isAppRouter: !r,
                    imgAttributes: C
                }) : null]
            })
        }
        );
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    1436: function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = r(7043)._(r(2265)).default.createContext({})
    },
    3964: function(e, t) {
        function r(e) {
            let {ampFirst: t=!1, hybrid: r=!1, hasQuery: n=!1} = void 0 === e ? {} : e;
            return t || r && n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    5346: function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function() {
                return a
            }
        }),
        r(1765);
        let n = r(6496)
          , o = r(128);
        function i(e) {
            return void 0 !== e.default
        }
        function l(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function a(e, t) {
            var r;
            let a, s, u, {src: c, sizes: d, unoptimized: f=!1, priority: p=!1, loading: h, className: m, quality: g, width: v, height: y, fill: b=!1, style: w, overrideSrc: x, onLoad: E, onLoadingComplete: C, placeholder: S="empty", blurDataURL: R, fetchPriority: M, decoding: P="async", layout: k, objectFit: A, objectPosition: N, lazyBoundary: j, lazyRoot: O, ...L} = e, {imgConf: T, showAltText: _, blurComplete: I, defaultLoader: z} = t, D = T || o.imageConfigDefault;
            if ("allSizes"in D)
                a = D;
            else {
                let e = [...D.deviceSizes, ...D.imageSizes].sort( (e, t) => e - t)
                  , t = D.deviceSizes.sort( (e, t) => e - t);
                a = {
                    ...D,
                    allSizes: e,
                    deviceSizes: t
                }
            }
            if (void 0 === z)
                throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
            let F = L.loader || z;
            delete L.loader,
            delete L.srcSet;
            let W = "__next_img_default"in F;
            if (W) {
                if ("custom" === a.loader)
                    throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let e = F;
                F = t => {
                    let {config: r, ...n} = t;
                    return e(n)
                }
            }
            if (k) {
                "fill" === k && (b = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[k];
                e && (w = {
                    ...w,
                    ...e
                });
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[k];
                t && !d && (d = t)
            }
            let B = ""
              , H = l(v)
              , V = l(y);
            if ("object" == typeof (r = c) && (i(r) || void 0 !== r.src)) {
                let e = i(c) ? c.default : c;
                if (!e.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                if (!e.height || !e.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                if (s = e.blurWidth,
                u = e.blurHeight,
                R = R || e.blurDataURL,
                B = e.src,
                !b) {
                    if (H || V) {
                        if (H && !V) {
                            let t = H / e.width;
                            V = Math.round(e.height * t)
                        } else if (!H && V) {
                            let t = V / e.height;
                            H = Math.round(e.width * t)
                        }
                    } else
                        H = e.width,
                        V = e.height
                }
            }
            let U = !p && ("lazy" === h || void 0 === h);
            (!(c = "string" == typeof c ? c : B) || c.startsWith("data:") || c.startsWith("blob:")) && (f = !0,
            U = !1),
            a.unoptimized && (f = !0),
            W && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (f = !0),
            p && (M = "high");
            let $ = l(g)
              , Y = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: A,
                objectPosition: N
            } : {}, _ ? {} : {
                color: "transparent"
            }, w)
              , G = I || "empty" === S ? null : "blur" === S ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            n.getImageBlurSvg)({
                widthInt: H,
                heightInt: V,
                blurWidth: s,
                blurHeight: u,
                blurDataURL: R || "",
                objectFit: Y.objectFit
            }) + '")' : 'url("' + S + '")'
              , K = G ? {
                backgroundSize: Y.objectFit || "cover",
                backgroundPosition: Y.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: G
            } : {}
              , X = function(e) {
                let {config: t, src: r, unoptimized: n, width: o, quality: i, sizes: l, loader: a} = e;
                if (n)
                    return {
                        src: r,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: s, kind: u} = function(e, t, r) {
                    let {deviceSizes: n, allSizes: o} = e;
                    if (r) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let n; n = e.exec(r); n)
                            t.push(parseInt(n[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: o.filter(t => t >= n[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: o,
                            kind: "w"
                        }
                    }
                    return "number" != typeof t ? {
                        widths: n,
                        kind: "w"
                    } : {
                        widths: [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))],
                        kind: "x"
                    }
                }(t, o, l)
                  , c = s.length - 1;
                return {
                    sizes: l || "w" !== u ? l : "100vw",
                    srcSet: s.map( (e, n) => a({
                        config: t,
                        src: r,
                        quality: i,
                        width: e
                    }) + " " + ("w" === u ? e : n + 1) + u).join(", "),
                    src: a({
                        config: t,
                        src: r,
                        quality: i,
                        width: s[c]
                    })
                }
            }({
                config: a,
                src: c,
                unoptimized: f,
                width: H,
                quality: $,
                sizes: d,
                loader: F
            });
            return {
                props: {
                    ...L,
                    loading: U ? "lazy" : h,
                    fetchPriority: M,
                    width: H,
                    height: V,
                    decoding: P,
                    className: m,
                    style: {
                        ...Y,
                        ...K
                    },
                    sizes: X.sizes,
                    srcSet: X.srcSet,
                    src: x || X.src
                },
                meta: {
                    unoptimized: f,
                    priority: p,
                    placeholder: S,
                    fill: b
                }
            }
        }
    },
    8293: function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            default: function() {
                return m
            },
            defaultHead: function() {
                return d
            }
        });
        let n = r(7043)
          , o = r(3099)
          , i = r(7437)
          , l = o._(r(2265))
          , a = n._(r(7421))
          , s = r(1436)
          , u = r(8701)
          , c = r(3964);
        function d(e) {
            void 0 === e && (e = !1);
            let t = [(0,
            i.jsx)("meta", {
                charSet: "utf-8"
            })];
            return e || t.push((0,
            i.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            t
        }
        function f(e, t) {
            return "string" == typeof t || "number" == typeof t ? e : t.type === l.default.Fragment ? e.concat(l.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
        }
        r(1765);
        let p = ["name", "httpEquiv", "charSet", "itemProp"];
        function h(e, t) {
            let {inAmpMode: r} = t;
            return e.reduce(f, []).reverse().concat(d(r).reverse()).filter(function() {
                let e = new Set
                  , t = new Set
                  , r = new Set
                  , n = {};
                return o => {
                    let i = !0
                      , l = !1;
                    if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                        l = !0;
                        let t = o.key.slice(o.key.indexOf("$") + 1);
                        e.has(t) ? i = !1 : e.add(t)
                    }
                    switch (o.type) {
                    case "title":
                    case "base":
                        t.has(o.type) ? i = !1 : t.add(o.type);
                        break;
                    case "meta":
                        for (let e = 0, t = p.length; e < t; e++) {
                            let t = p[e];
                            if (o.props.hasOwnProperty(t)) {
                                if ("charSet" === t)
                                    r.has(t) ? i = !1 : r.add(t);
                                else {
                                    let e = o.props[t]
                                      , r = n[t] || new Set;
                                    ("name" !== t || !l) && r.has(e) ? i = !1 : (r.add(e),
                                    n[t] = r)
                                }
                            }
                        }
                    }
                    return i
                }
            }()).reverse().map( (e, t) => {
                let n = e.key || t;
                if (!r && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                    let t = {
                        ...e.props || {}
                    };
                    return t["data-href"] = t.href,
                    t.href = void 0,
                    t["data-optimized-fonts"] = !0,
                    l.default.cloneElement(e, t)
                }
                return l.default.cloneElement(e, {
                    key: n
                })
            }
            )
        }
        let m = function(e) {
            let {children: t} = e
              , r = (0,
            l.useContext)(s.AmpStateContext)
              , n = (0,
            l.useContext)(u.HeadManagerContext);
            return (0,
            i.jsx)(a.default, {
                reduceComponentsToState: h,
                headManager: n,
                inAmpMode: (0,
                c.isInAmpMode)(r),
                children: t
            })
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    6496: function(e, t) {
        function r(e) {
            let {widthInt: t, heightInt: r, blurWidth: n, blurHeight: o, blurDataURL: i, objectFit: l} = e
              , a = n ? 40 * n : t
              , s = o ? 40 * o : r
              , u = a && s ? "viewBox='0 0 " + a + " " + s + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === l ? "xMidYMid" : "cover" === l ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + i + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    2589: function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let n = r(7043)._(r(2265))
          , o = r(128)
          , i = n.default.createContext(o.imageConfigDefault)
    },
    128: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            VALID_LOADERS: function() {
                return r
            },
            imageConfigDefault: function() {
                return n
            }
        });
        let r = ["default", "imgix", "cloudinary", "akamai", "custom"]
          , n = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "inline",
            localPatterns: void 0,
            remotePatterns: [],
            unoptimized: !1
        }
    },
    8461: function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            default: function() {
                return s
            },
            getImageProps: function() {
                return a
            }
        });
        let n = r(7043)
          , o = r(5346)
          , i = r(5878)
          , l = n._(r(5084));
        function a(e) {
            let {props: t} = (0,
            o.getImgProps)(e, {
                defaultLoader: l.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                }
            });
            for (let[e,r] of Object.entries(t))
                void 0 === r && delete t[e];
            return {
                props: t
            }
        }
        let s = i.Image
    },
    5084: function(e, t) {
        function r(e) {
            let {config: t, src: r, width: n, quality: o} = e;
            return t.path + "?url=" + encodeURIComponent(r) + "&w=" + n + "&q=" + (o || 75)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r.__next_img_default = !0;
        let n = r
    },
    5523: function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "RouterContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = r(7043)._(r(2265)).default.createContext(null)
    },
    7421: function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let n = r(2265)
          , o = "undefined" == typeof window
          , i = o ? () => {}
        : n.useLayoutEffect
          , l = o ? () => {}
        : n.useEffect;
        function a(e) {
            let {headManager: t, reduceComponentsToState: r} = e;
            function a() {
                if (t && t.mountedInstances) {
                    let o = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(r(o, e))
                }
            }
            if (o) {
                var s;
                null == t || null == (s = t.mountedInstances) || s.add(e.children),
                a()
            }
            return i( () => {
                var r;
                return null == t || null == (r = t.mountedInstances) || r.add(e.children),
                () => {
                    var r;
                    null == t || null == (r = t.mountedInstances) || r.delete(e.children)
                }
            }
            ),
            i( () => (t && (t._pendingUpdate = a),
            () => {
                t && (t._pendingUpdate = a)
            }
            )),
            l( () => (t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null),
            () => {
                t && t._pendingUpdate && (t._pendingUpdate(),
                t._pendingUpdate = null)
            }
            )),
            null
        }
    },
    8575: function(e, t, r) {
        r.d(t, {
            F: function() {
                return i
            },
            e: function() {
                return l
            }
        });
        var n = r(2265);
        function o(e, t) {
            if ("function" == typeof e)
                return e(t);
            null != e && (e.current = t)
        }
        function i(...e) {
            return t => {
                let r = !1
                  , n = e.map(e => {
                    let n = o(e, t);
                    return r || "function" != typeof n || (r = !0),
                    n
                }
                );
                if (r)
                    return () => {
                        for (let t = 0; t < n.length; t++) {
                            let r = n[t];
                            "function" == typeof r ? r() : o(e[t], null)
                        }
                    }
            }
        }
        function l(...e) {
            return n.useCallback(i(...e), e)
        }
    },
    6394: function(e, t, r) {
        r.d(t, {
            f: function() {
                return a
            }
        });
        var n = r(2265)
          , o = r(6840)
          , i = r(7437)
          , l = n.forwardRef( (e, t) => (0,
        i.jsx)(o.WV.label, {
            ...e,
            ref: t,
            onMouseDown: t => {
                var r;
                t.target.closest("button, input, select, textarea") || (null === (r = e.onMouseDown) || void 0 === r || r.call(e, t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault())
            }
        }));
        l.displayName = "Label";
        var a = l
    },
    6840: function(e, t, r) {
        r.d(t, {
            WV: function() {
                return a
            },
            jH: function() {
                return s
            }
        });
        var n = r(2265)
          , o = r(4887)
          , i = r(7053)
          , l = r(7437)
          , a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce( (e, t) => {
            let r = n.forwardRef( (e, r) => {
                let {asChild: n, ...o} = e
                  , a = n ? i.g7 : t;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0,
                l.jsx)(a, {
                    ...o,
                    ref: r
                })
            }
            );
            return r.displayName = `Primitive.${t}`,
            {
                ...e,
                [t]: r
            }
        }
        , {});
        function s(e, t) {
            e && o.flushSync( () => e.dispatchEvent(t))
        }
    },
    294: function(e, t, r) {
        let n;
        r.d(t, {
            VY: function() {
                return r7
            },
            ZA: function() {
                return ne
            },
            JO: function() {
                return r5
            },
            ck: function() {
                return nr
            },
            wU: function() {
                return no
            },
            eT: function() {
                return nn
            },
            __: function() {
                return nt
            },
            h_: function() {
                return r6
            },
            fC: function() {
                return r3
            },
            $G: function() {
                return nl
            },
            u_: function() {
                return ni
            },
            Z0: function() {
                return na
            },
            xz: function() {
                return r8
            },
            B4: function() {
                return r4
            },
            l_: function() {
                return r9
            }
        });
        var o, i, l, a, s, u, c, d, f = r(2265), p = r.t(f, 2), h = r(4887);
        function m(e, [t,r]) {
            return Math.min(r, Math.max(t, e))
        }
        function g(e, t, {checkForDefaultPrevented: r=!0}={}) {
            return function(n) {
                if (e?.(n),
                !1 === r || !n.defaultPrevented)
                    return t?.(n)
            }
        }
        var v = r(7437);
        function y(e, t=[]) {
            let r = []
              , n = () => {
                let t = r.map(e => f.createContext(e));
                return function(r) {
                    let n = r?.[e] || t;
                    return f.useMemo( () => ({
                        [`__scope${e}`]: {
                            ...r,
                            [e]: n
                        }
                    }), [r, n])
                }
            }
            ;
            return n.scopeName = e,
            [function(t, n) {
                let o = f.createContext(n)
                  , i = r.length;
                r = [...r, n];
                let l = t => {
                    let {scope: r, children: n, ...l} = t
                      , a = r?.[e]?.[i] || o
                      , s = f.useMemo( () => l, Object.values(l));
                    return (0,
                    v.jsx)(a.Provider, {
                        value: s,
                        children: n
                    })
                }
                ;
                return l.displayName = t + "Provider",
                [l, function(r, l) {
                    let a = l?.[e]?.[i] || o
                      , s = f.useContext(a);
                    if (s)
                        return s;
                    if (void 0 !== n)
                        return n;
                    throw Error(`\`${r}\` must be used within \`${t}\``)
                }
                ]
            }
            , function(...e) {
                let t = e[0];
                if (1 === e.length)
                    return t;
                let r = () => {
                    let r = e.map(e => ({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let n = r.reduce( (t, {useScope: r, scopeName: n}) => {
                            let o = r(e)[`__scope${n}`];
                            return {
                                ...t,
                                ...o
                            }
                        }
                        , {});
                        return f.useMemo( () => ({
                            [`__scope${t.scopeName}`]: n
                        }), [n])
                    }
                }
                ;
                return r.scopeName = t.scopeName,
                r
            }(n, ...t)]
        }
        var b = r(8575)
          , w = r(7053)
          , x = f.createContext(void 0)
          , E = r(6840);
        function C(e) {
            let t = f.useRef(e);
            return f.useEffect( () => {
                t.current = e
            }
            ),
            f.useMemo( () => (...e) => t.current?.(...e), [])
        }
        var S = "dismissableLayer.update"
          , R = f.createContext({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        })
          , M = f.forwardRef( (e, t) => {
            var r, n;
            let {disableOutsidePointerEvents: o=!1, onEscapeKeyDown: i, onPointerDownOutside: l, onFocusOutside: a, onInteractOutside: s, onDismiss: u, ...d} = e
              , p = f.useContext(R)
              , [h,m] = f.useState(null)
              , y = null !== (n = null == h ? void 0 : h.ownerDocument) && void 0 !== n ? n : null === (r = globalThis) || void 0 === r ? void 0 : r.document
              , [,w] = f.useState({})
              , x = (0,
            b.e)(t, e => m(e))
              , M = Array.from(p.layers)
              , [A] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1)
              , N = M.indexOf(A)
              , j = h ? M.indexOf(h) : -1
              , O = p.layersWithOutsidePointerEventsDisabled.size > 0
              , L = j >= N
              , T = function(e) {
                var t;
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document
                  , n = C(e)
                  , o = f.useRef(!1)
                  , i = f.useRef( () => {}
                );
                return f.useEffect( () => {
                    let e = e => {
                        if (e.target && !o.current) {
                            let t = function() {
                                k("dismissableLayer.pointerDownOutside", n, o, {
                                    discrete: !0
                                })
                            }
                              , o = {
                                originalEvent: e
                            };
                            "touch" === e.pointerType ? (r.removeEventListener("click", i.current),
                            i.current = t,
                            r.addEventListener("click", i.current, {
                                once: !0
                            })) : t()
                        } else
                            r.removeEventListener("click", i.current);
                        o.current = !1
                    }
                      , t = window.setTimeout( () => {
                        r.addEventListener("pointerdown", e)
                    }
                    , 0);
                    return () => {
                        window.clearTimeout(t),
                        r.removeEventListener("pointerdown", e),
                        r.removeEventListener("click", i.current)
                    }
                }
                , [r, n]),
                {
                    onPointerDownCapture: () => o.current = !0
                }
            }(e => {
                let t = e.target
                  , r = [...p.branches].some(e => e.contains(t));
                !L || r || (null == l || l(e),
                null == s || s(e),
                e.defaultPrevented || null == u || u())
            }
            , y)
              , _ = function(e) {
                var t;
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document
                  , n = C(e)
                  , o = f.useRef(!1);
                return f.useEffect( () => {
                    let e = e => {
                        e.target && !o.current && k("dismissableLayer.focusOutside", n, {
                            originalEvent: e
                        }, {
                            discrete: !1
                        })
                    }
                    ;
                    return r.addEventListener("focusin", e),
                    () => r.removeEventListener("focusin", e)
                }
                , [r, n]),
                {
                    onFocusCapture: () => o.current = !0,
                    onBlurCapture: () => o.current = !1
                }
            }(e => {
                let t = e.target;
                [...p.branches].some(e => e.contains(t)) || (null == a || a(e),
                null == s || s(e),
                e.defaultPrevented || null == u || u())
            }
            , y);
            return !function(e, t=globalThis?.document) {
                let r = C(e);
                f.useEffect( () => {
                    let e = e => {
                        "Escape" === e.key && r(e)
                    }
                    ;
                    return t.addEventListener("keydown", e, {
                        capture: !0
                    }),
                    () => t.removeEventListener("keydown", e, {
                        capture: !0
                    })
                }
                , [r, t])
            }(e => {
                j !== p.layers.size - 1 || (null == i || i(e),
                !e.defaultPrevented && u && (e.preventDefault(),
                u()))
            }
            , y),
            f.useEffect( () => {
                if (h)
                    return o && (0 === p.layersWithOutsidePointerEventsDisabled.size && (c = y.body.style.pointerEvents,
                    y.body.style.pointerEvents = "none"),
                    p.layersWithOutsidePointerEventsDisabled.add(h)),
                    p.layers.add(h),
                    P(),
                    () => {
                        o && 1 === p.layersWithOutsidePointerEventsDisabled.size && (y.body.style.pointerEvents = c)
                    }
            }
            , [h, y, o, p]),
            f.useEffect( () => () => {
                h && (p.layers.delete(h),
                p.layersWithOutsidePointerEventsDisabled.delete(h),
                P())
            }
            , [h, p]),
            f.useEffect( () => {
                let e = () => w({});
                return document.addEventListener(S, e),
                () => document.removeEventListener(S, e)
            }
            , []),
            (0,
            v.jsx)(E.WV.div, {
                ...d,
                ref: x,
                style: {
                    pointerEvents: O ? L ? "auto" : "none" : void 0,
                    ...e.style
                },
                onFocusCapture: g(e.onFocusCapture, _.onFocusCapture),
                onBlurCapture: g(e.onBlurCapture, _.onBlurCapture),
                onPointerDownCapture: g(e.onPointerDownCapture, T.onPointerDownCapture)
            })
        }
        );
        function P() {
            let e = new CustomEvent(S);
            document.dispatchEvent(e)
        }
        function k(e, t, r, n) {
            let {discrete: o} = n
              , i = r.originalEvent.target
              , l = new CustomEvent(e,{
                bubbles: !1,
                cancelable: !0,
                detail: r
            });
            t && i.addEventListener(e, t, {
                once: !0
            }),
            o ? (0,
            E.jH)(i, l) : i.dispatchEvent(l)
        }
        M.displayName = "DismissableLayer",
        f.forwardRef( (e, t) => {
            let r = f.useContext(R)
              , n = f.useRef(null)
              , o = (0,
            b.e)(t, n);
            return f.useEffect( () => {
                let e = n.current;
                if (e)
                    return r.branches.add(e),
                    () => {
                        r.branches.delete(e)
                    }
            }
            , [r.branches]),
            (0,
            v.jsx)(E.WV.div, {
                ...e,
                ref: o
            })
        }
        ).displayName = "DismissableLayerBranch";
        var A = 0;
        function N() {
            let e = document.createElement("span");
            return e.setAttribute("data-radix-focus-guard", ""),
            e.tabIndex = 0,
            e.style.outline = "none",
            e.style.opacity = "0",
            e.style.position = "fixed",
            e.style.pointerEvents = "none",
            e
        }
        var j = "focusScope.autoFocusOnMount"
          , O = "focusScope.autoFocusOnUnmount"
          , L = {
            bubbles: !1,
            cancelable: !0
        }
          , T = f.forwardRef( (e, t) => {
            let {loop: r=!1, trapped: n=!1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l} = e
              , [a,s] = f.useState(null)
              , u = C(o)
              , c = C(i)
              , d = f.useRef(null)
              , p = (0,
            b.e)(t, e => s(e))
              , h = f.useRef({
                paused: !1,
                pause() {
                    this.paused = !0
                },
                resume() {
                    this.paused = !1
                }
            }).current;
            f.useEffect( () => {
                if (n) {
                    let e = function(e) {
                        if (h.paused || !a)
                            return;
                        let t = e.target;
                        a.contains(t) ? d.current = t : z(d.current, {
                            select: !0
                        })
                    }
                      , t = function(e) {
                        if (h.paused || !a)
                            return;
                        let t = e.relatedTarget;
                        null === t || a.contains(t) || z(d.current, {
                            select: !0
                        })
                    };
                    document.addEventListener("focusin", e),
                    document.addEventListener("focusout", t);
                    let r = new MutationObserver(function(e) {
                        if (document.activeElement === document.body)
                            for (let t of e)
                                t.removedNodes.length > 0 && z(a)
                    }
                    );
                    return a && r.observe(a, {
                        childList: !0,
                        subtree: !0
                    }),
                    () => {
                        document.removeEventListener("focusin", e),
                        document.removeEventListener("focusout", t),
                        r.disconnect()
                    }
                }
            }
            , [n, a, h.paused]),
            f.useEffect( () => {
                if (a) {
                    D.add(h);
                    let e = document.activeElement;
                    if (!a.contains(e)) {
                        let t = new CustomEvent(j,L);
                        a.addEventListener(j, u),
                        a.dispatchEvent(t),
                        t.defaultPrevented || (function(e) {
                            let {select: t=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                              , r = document.activeElement;
                            for (let n of e)
                                if (z(n, {
                                    select: t
                                }),
                                document.activeElement !== r)
                                    return
                        }(_(a).filter(e => "A" !== e.tagName), {
                            select: !0
                        }),
                        document.activeElement === e && z(a))
                    }
                    return () => {
                        a.removeEventListener(j, u),
                        setTimeout( () => {
                            let t = new CustomEvent(O,L);
                            a.addEventListener(O, c),
                            a.dispatchEvent(t),
                            t.defaultPrevented || z(null != e ? e : document.body, {
                                select: !0
                            }),
                            a.removeEventListener(O, c),
                            D.remove(h)
                        }
                        , 0)
                    }
                }
            }
            , [a, u, c, h]);
            let m = f.useCallback(e => {
                if (!r && !n || h.paused)
                    return;
                let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey
                  , o = document.activeElement;
                if (t && o) {
                    let t = e.currentTarget
                      , [n,i] = function(e) {
                        let t = _(e);
                        return [I(t, e), I(t.reverse(), e)]
                    }(t);
                    n && i ? e.shiftKey || o !== i ? e.shiftKey && o === n && (e.preventDefault(),
                    r && z(i, {
                        select: !0
                    })) : (e.preventDefault(),
                    r && z(n, {
                        select: !0
                    })) : o === t && e.preventDefault()
                }
            }
            , [r, n, h.paused]);
            return (0,
            v.jsx)(E.WV.div, {
                tabIndex: -1,
                ...l,
                ref: p,
                onKeyDown: m
            })
        }
        );
        function _(e) {
            let t = []
              , r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => {
                    let t = "INPUT" === e.tagName && "hidden" === e.type;
                    return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            });
            for (; r.nextNode(); )
                t.push(r.currentNode);
            return t
        }
        function I(e, t) {
            for (let r of e)
                if (!function(e, t) {
                    let {upTo: r} = t;
                    if ("hidden" === getComputedStyle(e).visibility)
                        return !0;
                    for (; e && (void 0 === r || e !== r); ) {
                        if ("none" === getComputedStyle(e).display)
                            return !0;
                        e = e.parentElement
                    }
                    return !1
                }(r, {
                    upTo: t
                }))
                    return r
        }
        function z(e) {
            let {select: t=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (e && e.focus) {
                var r;
                let n = document.activeElement;
                e.focus({
                    preventScroll: !0
                }),
                e !== n && (r = e)instanceof HTMLInputElement && "select"in r && t && e.select()
            }
        }
        T.displayName = "FocusScope";
        var D = (n = [],
        {
            add(e) {
                let t = n[0];
                e !== t && (null == t || t.pause()),
                (n = F(n, e)).unshift(e)
            },
            remove(e) {
                var t;
                null === (t = (n = F(n, e))[0]) || void 0 === t || t.resume()
            }
        });
        function F(e, t) {
            let r = [...e]
              , n = r.indexOf(t);
            return -1 !== n && r.splice(n, 1),
            r
        }
        var W = globalThis?.document ? f.useLayoutEffect : () => {}
          , B = p["useId".toString()] || ( () => void 0)
          , H = 0;
        function V(e) {
            let[t,r] = f.useState(B());
            return W( () => {
                e || r(e => e ?? String(H++))
            }
            , [e]),
            e || (t ? `radix-${t}` : "")
        }
        let U = ["top", "right", "bottom", "left"]
          , $ = Math.min
          , Y = Math.max
          , G = Math.round
          , K = Math.floor
          , X = e => ({
            x: e,
            y: e
        })
          , Q = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        }
          , Z = {
            start: "end",
            end: "start"
        };
        function q(e, t) {
            return "function" == typeof e ? e(t) : e
        }
        function J(e) {
            return e.split("-")[0]
        }
        function ee(e) {
            return e.split("-")[1]
        }
        function et(e) {
            return "x" === e ? "y" : "x"
        }
        function er(e) {
            return "y" === e ? "height" : "width"
        }
        function en(e) {
            return ["top", "bottom"].includes(J(e)) ? "y" : "x"
        }
        function eo(e) {
            return e.replace(/start|end/g, e => Z[e])
        }
        function ei(e) {
            return e.replace(/left|right|bottom|top/g, e => Q[e])
        }
        function el(e) {
            return "number" != typeof e ? {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...e
            } : {
                top: e,
                right: e,
                bottom: e,
                left: e
            }
        }
        function ea(e) {
            let {x: t, y: r, width: n, height: o} = e;
            return {
                width: n,
                height: o,
                top: r,
                left: t,
                right: t + n,
                bottom: r + o,
                x: t,
                y: r
            }
        }
        function es(e, t, r) {
            let n, {reference: o, floating: i} = e, l = en(t), a = et(en(t)), s = er(a), u = J(t), c = "y" === l, d = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, p = o[s] / 2 - i[s] / 2;
            switch (u) {
            case "top":
                n = {
                    x: d,
                    y: o.y - i.height
                };
                break;
            case "bottom":
                n = {
                    x: d,
                    y: o.y + o.height
                };
                break;
            case "right":
                n = {
                    x: o.x + o.width,
                    y: f
                };
                break;
            case "left":
                n = {
                    x: o.x - i.width,
                    y: f
                };
                break;
            default:
                n = {
                    x: o.x,
                    y: o.y
                }
            }
            switch (ee(t)) {
            case "start":
                n[a] -= p * (r && c ? -1 : 1);
                break;
            case "end":
                n[a] += p * (r && c ? -1 : 1)
            }
            return n
        }
        let eu = async (e, t, r) => {
            let {placement: n="bottom", strategy: o="absolute", middleware: i=[], platform: l} = r
              , a = i.filter(Boolean)
              , s = await (null == l.isRTL ? void 0 : l.isRTL(t))
              , u = await l.getElementRects({
                reference: e,
                floating: t,
                strategy: o
            })
              , {x: c, y: d} = es(u, n, s)
              , f = n
              , p = {}
              , h = 0;
            for (let r = 0; r < a.length; r++) {
                let {name: i, fn: m} = a[r]
                  , {x: g, y: v, data: y, reset: b} = await m({
                    x: c,
                    y: d,
                    initialPlacement: n,
                    placement: f,
                    strategy: o,
                    middlewareData: p,
                    rects: u,
                    platform: l,
                    elements: {
                        reference: e,
                        floating: t
                    }
                });
                c = null != g ? g : c,
                d = null != v ? v : d,
                p = {
                    ...p,
                    [i]: {
                        ...p[i],
                        ...y
                    }
                },
                b && h <= 50 && (h++,
                "object" == typeof b && (b.placement && (f = b.placement),
                b.rects && (u = !0 === b.rects ? await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }) : b.rects),
                {x: c, y: d} = es(u, f, s)),
                r = -1)
            }
            return {
                x: c,
                y: d,
                placement: f,
                strategy: o,
                middlewareData: p
            }
        }
        ;
        async function ec(e, t) {
            var r;
            void 0 === t && (t = {});
            let {x: n, y: o, platform: i, rects: l, elements: a, strategy: s} = e
              , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: f=!1, padding: p=0} = q(t, e)
              , h = el(p)
              , m = a[f ? "floating" === d ? "reference" : "floating" : d]
              , g = ea(await i.getClippingRect({
                element: null == (r = await (null == i.isElement ? void 0 : i.isElement(m))) || r ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                boundary: u,
                rootBoundary: c,
                strategy: s
            }))
              , v = "floating" === d ? {
                x: n,
                y: o,
                width: l.floating.width,
                height: l.floating.height
            } : l.reference
              , y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating))
              , b = await (null == i.isElement ? void 0 : i.isElement(y)) && await (null == i.getScale ? void 0 : i.getScale(y)) || {
                x: 1,
                y: 1
            }
              , w = ea(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: a,
                rect: v,
                offsetParent: y,
                strategy: s
            }) : v);
            return {
                top: (g.top - w.top + h.top) / b.y,
                bottom: (w.bottom - g.bottom + h.bottom) / b.y,
                left: (g.left - w.left + h.left) / b.x,
                right: (w.right - g.right + h.right) / b.x
            }
        }
        function ed(e, t) {
            return {
                top: e.top - t.height,
                right: e.right - t.width,
                bottom: e.bottom - t.height,
                left: e.left - t.width
            }
        }
        function ef(e) {
            return U.some(t => e[t] >= 0)
        }
        async function ep(e, t) {
            let {placement: r, platform: n, elements: o} = e
              , i = await (null == n.isRTL ? void 0 : n.isRTL(o.floating))
              , l = J(r)
              , a = ee(r)
              , s = "y" === en(r)
              , u = ["left", "top"].includes(l) ? -1 : 1
              , c = i && s ? -1 : 1
              , d = q(t, e)
              , {mainAxis: f, crossAxis: p, alignmentAxis: h} = "number" == typeof d ? {
                mainAxis: d,
                crossAxis: 0,
                alignmentAxis: null
            } : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis
            };
            return a && "number" == typeof h && (p = "end" === a ? -1 * h : h),
            s ? {
                x: p * c,
                y: f * u
            } : {
                x: f * u,
                y: p * c
            }
        }
        function eh() {
            return "undefined" != typeof window
        }
        function em(e) {
            return ey(e) ? (e.nodeName || "").toLowerCase() : "#document"
        }
        function eg(e) {
            var t;
            return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        }
        function ev(e) {
            var t;
            return null == (t = (ey(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
        }
        function ey(e) {
            return !!eh() && (e instanceof Node || e instanceof eg(e).Node)
        }
        function eb(e) {
            return !!eh() && (e instanceof Element || e instanceof eg(e).Element)
        }
        function ew(e) {
            return !!eh() && (e instanceof HTMLElement || e instanceof eg(e).HTMLElement)
        }
        function ex(e) {
            return !!eh() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof eg(e).ShadowRoot)
        }
        function eE(e) {
            let {overflow: t, overflowX: r, overflowY: n, display: o} = eP(e);
            return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
        }
        function eC(e) {
            return [":popover-open", ":modal"].some(t => {
                try {
                    return e.matches(t)
                } catch (e) {
                    return !1
                }
            }
            )
        }
        function eS(e) {
            let t = eR()
              , r = eb(e) ? eP(e) : e;
            return "none" !== r.transform || "none" !== r.perspective || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || ["transform", "perspective", "filter"].some(e => (r.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (r.contain || "").includes(e))
        }
        function eR() {
            return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
        }
        function eM(e) {
            return ["html", "body", "#document"].includes(em(e))
        }
        function eP(e) {
            return eg(e).getComputedStyle(e)
        }
        function ek(e) {
            return eb(e) ? {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            } : {
                scrollLeft: e.scrollX,
                scrollTop: e.scrollY
            }
        }
        function eA(e) {
            if ("html" === em(e))
                return e;
            let t = e.assignedSlot || e.parentNode || ex(e) && e.host || ev(e);
            return ex(t) ? t.host : t
        }
        function eN(e, t, r) {
            var n;
            void 0 === t && (t = []),
            void 0 === r && (r = !0);
            let o = function e(t) {
                let r = eA(t);
                return eM(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : ew(r) && eE(r) ? r : e(r)
            }(e)
              , i = o === (null == (n = e.ownerDocument) ? void 0 : n.body)
              , l = eg(o);
            if (i) {
                let e = ej(l);
                return t.concat(l, l.visualViewport || [], eE(o) ? o : [], e && r ? eN(e) : [])
            }
            return t.concat(o, eN(o, [], r))
        }
        function ej(e) {
            return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
        }
        function eO(e) {
            let t = eP(e)
              , r = parseFloat(t.width) || 0
              , n = parseFloat(t.height) || 0
              , o = ew(e)
              , i = o ? e.offsetWidth : r
              , l = o ? e.offsetHeight : n
              , a = G(r) !== i || G(n) !== l;
            return a && (r = i,
            n = l),
            {
                width: r,
                height: n,
                $: a
            }
        }
        function eL(e) {
            return eb(e) ? e : e.contextElement
        }
        function eT(e) {
            let t = eL(e);
            if (!ew(t))
                return X(1);
            let r = t.getBoundingClientRect()
              , {width: n, height: o, $: i} = eO(t)
              , l = (i ? G(r.width) : r.width) / n
              , a = (i ? G(r.height) : r.height) / o;
            return l && Number.isFinite(l) || (l = 1),
            a && Number.isFinite(a) || (a = 1),
            {
                x: l,
                y: a
            }
        }
        let e_ = X(0);
        function eI(e) {
            let t = eg(e);
            return eR() && t.visualViewport ? {
                x: t.visualViewport.offsetLeft,
                y: t.visualViewport.offsetTop
            } : e_
        }
        function ez(e, t, r, n) {
            var o;
            void 0 === t && (t = !1),
            void 0 === r && (r = !1);
            let i = e.getBoundingClientRect()
              , l = eL(e)
              , a = X(1);
            t && (n ? eb(n) && (a = eT(n)) : a = eT(e));
            let s = (void 0 === (o = r) && (o = !1),
            n && (!o || n === eg(l)) && o) ? eI(l) : X(0)
              , u = (i.left + s.x) / a.x
              , c = (i.top + s.y) / a.y
              , d = i.width / a.x
              , f = i.height / a.y;
            if (l) {
                let e = eg(l)
                  , t = n && eb(n) ? eg(n) : n
                  , r = e
                  , o = ej(r);
                for (; o && n && t !== r; ) {
                    let e = eT(o)
                      , t = o.getBoundingClientRect()
                      , n = eP(o)
                      , i = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x
                      , l = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
                    u *= e.x,
                    c *= e.y,
                    d *= e.x,
                    f *= e.y,
                    u += i,
                    c += l,
                    o = ej(r = eg(o))
                }
            }
            return ea({
                width: d,
                height: f,
                x: u,
                y: c
            })
        }
        function eD(e, t) {
            let r = ek(e).scrollLeft;
            return t ? t.left + r : ez(ev(e)).left + r
        }
        function eF(e, t, r) {
            void 0 === r && (r = !1);
            let n = e.getBoundingClientRect();
            return {
                x: n.left + t.scrollLeft - (r ? 0 : eD(e, n)),
                y: n.top + t.scrollTop
            }
        }
        function eW(e, t, r) {
            let n;
            if ("viewport" === t)
                n = function(e, t) {
                    let r = eg(e)
                      , n = ev(e)
                      , o = r.visualViewport
                      , i = n.clientWidth
                      , l = n.clientHeight
                      , a = 0
                      , s = 0;
                    if (o) {
                        i = o.width,
                        l = o.height;
                        let e = eR();
                        (!e || e && "fixed" === t) && (a = o.offsetLeft,
                        s = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: s
                    }
                }(e, r);
            else if ("document" === t)
                n = function(e) {
                    let t = ev(e)
                      , r = ek(e)
                      , n = e.ownerDocument.body
                      , o = Y(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth)
                      , i = Y(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight)
                      , l = -r.scrollLeft + eD(e)
                      , a = -r.scrollTop;
                    return "rtl" === eP(n).direction && (l += Y(t.clientWidth, n.clientWidth) - o),
                    {
                        width: o,
                        height: i,
                        x: l,
                        y: a
                    }
                }(ev(e));
            else if (eb(t))
                n = function(e, t) {
                    let r = ez(e, !0, "fixed" === t)
                      , n = r.top + e.clientTop
                      , o = r.left + e.clientLeft
                      , i = ew(e) ? eT(e) : X(1)
                      , l = e.clientWidth * i.x;
                    return {
                        width: l,
                        height: e.clientHeight * i.y,
                        x: o * i.x,
                        y: n * i.y
                    }
                }(t, r);
            else {
                let r = eI(e);
                n = {
                    x: t.x - r.x,
                    y: t.y - r.y,
                    width: t.width,
                    height: t.height
                }
            }
            return ea(n)
        }
        function eB(e) {
            return "static" === eP(e).position
        }
        function eH(e, t) {
            if (!ew(e) || "fixed" === eP(e).position)
                return null;
            if (t)
                return t(e);
            let r = e.offsetParent;
            return ev(e) === r && (r = r.ownerDocument.body),
            r
        }
        function eV(e, t) {
            let r = eg(e);
            if (eC(e))
                return r;
            if (!ew(e)) {
                let t = eA(e);
                for (; t && !eM(t); ) {
                    if (eb(t) && !eB(t))
                        return t;
                    t = eA(t)
                }
                return r
            }
            let n = eH(e, t);
            for (; n && ["table", "td", "th"].includes(em(n)) && eB(n); )
                n = eH(n, t);
            return n && eM(n) && eB(n) && !eS(n) ? r : n || function(e) {
                let t = eA(e);
                for (; ew(t) && !eM(t); ) {
                    if (eS(t))
                        return t;
                    if (eC(t))
                        break;
                    t = eA(t)
                }
                return null
            }(e) || r
        }
        let eU = async function(e) {
            let t = this.getOffsetParent || eV
              , r = this.getDimensions
              , n = await r(e.floating);
            return {
                reference: function(e, t, r) {
                    let n = ew(t)
                      , o = ev(t)
                      , i = "fixed" === r
                      , l = ez(e, !0, i, t)
                      , a = {
                        scrollLeft: 0,
                        scrollTop: 0
                    }
                      , s = X(0);
                    if (n || !n && !i) {
                        if (("body" !== em(t) || eE(o)) && (a = ek(t)),
                        n) {
                            let e = ez(t, !0, i, t);
                            s.x = e.x + t.clientLeft,
                            s.y = e.y + t.clientTop
                        } else
                            o && (s.x = eD(o))
                    }
                    let u = !o || n || i ? X(0) : eF(o, a);
                    return {
                        x: l.left + a.scrollLeft - s.x - u.x,
                        y: l.top + a.scrollTop - s.y - u.y,
                        width: l.width,
                        height: l.height
                    }
                }(e.reference, await t(e.floating), e.strategy),
                floating: {
                    x: 0,
                    y: 0,
                    width: n.width,
                    height: n.height
                }
            }
        }
          , e$ = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                let {elements: t, rect: r, offsetParent: n, strategy: o} = e
                  , i = "fixed" === o
                  , l = ev(n)
                  , a = !!t && eC(t.floating);
                if (n === l || a && i)
                    return r;
                let s = {
                    scrollLeft: 0,
                    scrollTop: 0
                }
                  , u = X(1)
                  , c = X(0)
                  , d = ew(n);
                if ((d || !d && !i) && (("body" !== em(n) || eE(l)) && (s = ek(n)),
                ew(n))) {
                    let e = ez(n);
                    u = eT(n),
                    c.x = e.x + n.clientLeft,
                    c.y = e.y + n.clientTop
                }
                let f = !l || d || i ? X(0) : eF(l, s, !0);
                return {
                    width: r.width * u.x,
                    height: r.height * u.y,
                    x: r.x * u.x - s.scrollLeft * u.x + c.x + f.x,
                    y: r.y * u.y - s.scrollTop * u.y + c.y + f.y
                }
            },
            getDocumentElement: ev,
            getClippingRect: function(e) {
                let {element: t, boundary: r, rootBoundary: n, strategy: o} = e
                  , i = [..."clippingAncestors" === r ? eC(t) ? [] : function(e, t) {
                    let r = t.get(e);
                    if (r)
                        return r;
                    let n = eN(e, [], !1).filter(e => eb(e) && "body" !== em(e))
                      , o = null
                      , i = "fixed" === eP(e).position
                      , l = i ? eA(e) : e;
                    for (; eb(l) && !eM(l); ) {
                        let t = eP(l)
                          , r = eS(l);
                        r || "fixed" !== t.position || (o = null),
                        (i ? !r && !o : !r && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || eE(l) && !r && function e(t, r) {
                            let n = eA(t);
                            return !(n === r || !eb(n) || eM(n)) && ("fixed" === eP(n).position || e(n, r))
                        }(e, l)) ? n = n.filter(e => e !== l) : o = t,
                        l = eA(l)
                    }
                    return t.set(e, n),
                    n
                }(t, this._c) : [].concat(r), n]
                  , l = i[0]
                  , a = i.reduce( (e, r) => {
                    let n = eW(t, r, o);
                    return e.top = Y(n.top, e.top),
                    e.right = $(n.right, e.right),
                    e.bottom = $(n.bottom, e.bottom),
                    e.left = Y(n.left, e.left),
                    e
                }
                , eW(t, l, o));
                return {
                    width: a.right - a.left,
                    height: a.bottom - a.top,
                    x: a.left,
                    y: a.top
                }
            },
            getOffsetParent: eV,
            getElementRects: eU,
            getClientRects: function(e) {
                return Array.from(e.getClientRects())
            },
            getDimensions: function(e) {
                let {width: t, height: r} = eO(e);
                return {
                    width: t,
                    height: r
                }
            },
            getScale: eT,
            isElement: eb,
            isRTL: function(e) {
                return "rtl" === eP(e).direction
            }
        }
          , eY = e => ({
            name: "arrow",
            options: e,
            async fn(t) {
                let {x: r, y: n, placement: o, rects: i, platform: l, elements: a, middlewareData: s} = t
                  , {element: u, padding: c=0} = q(e, t) || {};
                if (null == u)
                    return {};
                let d = el(c)
                  , f = {
                    x: r,
                    y: n
                }
                  , p = et(en(o))
                  , h = er(p)
                  , m = await l.getDimensions(u)
                  , g = "y" === p
                  , v = g ? "clientHeight" : "clientWidth"
                  , y = i.reference[h] + i.reference[p] - f[p] - i.floating[h]
                  , b = f[p] - i.reference[p]
                  , w = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(u))
                  , x = w ? w[v] : 0;
                x && await (null == l.isElement ? void 0 : l.isElement(w)) || (x = a.floating[v] || i.floating[h]);
                let E = x / 2 - m[h] / 2 - 1
                  , C = $(d[g ? "top" : "left"], E)
                  , S = $(d[g ? "bottom" : "right"], E)
                  , R = x - m[h] - S
                  , M = x / 2 - m[h] / 2 + (y / 2 - b / 2)
                  , P = Y(C, $(M, R))
                  , k = !s.arrow && null != ee(o) && M !== P && i.reference[h] / 2 - (M < C ? C : S) - m[h] / 2 < 0
                  , A = k ? M < C ? M - C : M - R : 0;
                return {
                    [p]: f[p] + A,
                    data: {
                        [p]: P,
                        centerOffset: M - P - A,
                        ...k && {
                            alignmentOffset: A
                        }
                    },
                    reset: k
                }
            }
        })
          , eG = (e, t, r) => {
            let n = new Map
              , o = {
                platform: e$,
                ...r
            }
              , i = {
                ...o.platform,
                _c: n
            };
            return eu(e, t, {
                ...o,
                platform: i
            })
        }
        ;
        var eK = "undefined" != typeof document ? f.useLayoutEffect : f.useEffect;
        function eX(e, t) {
            let r, n, o;
            if (e === t)
                return !0;
            if (typeof e != typeof t)
                return !1;
            if ("function" == typeof e && e.toString() === t.toString())
                return !0;
            if (e && t && "object" == typeof e) {
                if (Array.isArray(e)) {
                    if ((r = e.length) !== t.length)
                        return !1;
                    for (n = r; 0 != n--; )
                        if (!eX(e[n], t[n]))
                            return !1;
                    return !0
                }
                if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length)
                    return !1;
                for (n = r; 0 != n--; )
                    if (!({}).hasOwnProperty.call(t, o[n]))
                        return !1;
                for (n = r; 0 != n--; ) {
                    let r = o[n];
                    if (("_owner" !== r || !e.$$typeof) && !eX(e[r], t[r]))
                        return !1
                }
                return !0
            }
            return e != e && t != t
        }
        function eQ(e) {
            return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
        }
        function eZ(e, t) {
            let r = eQ(e);
            return Math.round(t * r) / r
        }
        function eq(e) {
            let t = f.useRef(e);
            return eK( () => {
                t.current = e
            }
            ),
            t
        }
        let eJ = e => ({
            name: "arrow",
            options: e,
            fn(t) {
                let {element: r, padding: n} = "function" == typeof e ? e(t) : e;
                return r && ({}).hasOwnProperty.call(r, "current") ? null != r.current ? eY({
                    element: r.current,
                    padding: n
                }).fn(t) : {} : r ? eY({
                    element: r,
                    padding: n
                }).fn(t) : {}
            }
        })
          , e0 = (e, t) => {
            var r;
            return {
                ...(void 0 === (r = e) && (r = 0),
                {
                    name: "offset",
                    options: r,
                    async fn(e) {
                        var t, n;
                        let {x: o, y: i, placement: l, middlewareData: a} = e
                          , s = await ep(e, r);
                        return l === (null == (t = a.offset) ? void 0 : t.placement) && null != (n = a.arrow) && n.alignmentOffset ? {} : {
                            x: o + s.x,
                            y: i + s.y,
                            data: {
                                ...s,
                                placement: l
                            }
                        }
                    }
                }),
                options: [e, t]
            }
        }
          , e1 = (e, t) => {
            var r;
            return {
                ...(void 0 === (r = e) && (r = {}),
                {
                    name: "shift",
                    options: r,
                    async fn(e) {
                        let {x: t, y: n, placement: o} = e
                          , {mainAxis: i=!0, crossAxis: l=!1, limiter: a={
                            fn: e => {
                                let {x: t, y: r} = e;
                                return {
                                    x: t,
                                    y: r
                                }
                            }
                        }, ...s} = q(r, e)
                          , u = {
                            x: t,
                            y: n
                        }
                          , c = await ec(e, s)
                          , d = en(J(o))
                          , f = et(d)
                          , p = u[f]
                          , h = u[d];
                        if (i) {
                            let e = "y" === f ? "top" : "left"
                              , t = "y" === f ? "bottom" : "right"
                              , r = p + c[e]
                              , n = p - c[t];
                            p = Y(r, $(p, n))
                        }
                        if (l) {
                            let e = "y" === d ? "top" : "left"
                              , t = "y" === d ? "bottom" : "right"
                              , r = h + c[e]
                              , n = h - c[t];
                            h = Y(r, $(h, n))
                        }
                        let m = a.fn({
                            ...e,
                            [f]: p,
                            [d]: h
                        });
                        return {
                            ...m,
                            data: {
                                x: m.x - t,
                                y: m.y - n,
                                enabled: {
                                    [f]: i,
                                    [d]: l
                                }
                            }
                        }
                    }
                }),
                options: [e, t]
            }
        }
          , e2 = (e, t) => {
            var r;
            return {
                ...(void 0 === (r = e) && (r = {}),
                {
                    options: r,
                    fn(e) {
                        let {x: t, y: n, placement: o, rects: i, middlewareData: l} = e
                          , {offset: a=0, mainAxis: s=!0, crossAxis: u=!0} = q(r, e)
                          , c = {
                            x: t,
                            y: n
                        }
                          , d = en(o)
                          , f = et(d)
                          , p = c[f]
                          , h = c[d]
                          , m = q(a, e)
                          , g = "number" == typeof m ? {
                            mainAxis: m,
                            crossAxis: 0
                        } : {
                            mainAxis: 0,
                            crossAxis: 0,
                            ...m
                        };
                        if (s) {
                            let e = "y" === f ? "height" : "width"
                              , t = i.reference[f] - i.floating[e] + g.mainAxis
                              , r = i.reference[f] + i.reference[e] - g.mainAxis;
                            p < t ? p = t : p > r && (p = r)
                        }
                        if (u) {
                            var v, y;
                            let e = "y" === f ? "width" : "height"
                              , t = ["top", "left"].includes(J(o))
                              , r = i.reference[d] - i.floating[e] + (t && (null == (v = l.offset) ? void 0 : v[d]) || 0) + (t ? 0 : g.crossAxis)
                              , n = i.reference[d] + i.reference[e] + (t ? 0 : (null == (y = l.offset) ? void 0 : y[d]) || 0) - (t ? g.crossAxis : 0);
                            h < r ? h = r : h > n && (h = n)
                        }
                        return {
                            [f]: p,
                            [d]: h
                        }
                    }
                }),
                options: [e, t]
            }
        }
          , e3 = (e, t) => {
            var r;
            return {
                ...(void 0 === (r = e) && (r = {}),
                {
                    name: "flip",
                    options: r,
                    async fn(e) {
                        var t, n, o, i, l;
                        let {placement: a, middlewareData: s, rects: u, initialPlacement: c, platform: d, elements: f} = e
                          , {mainAxis: p=!0, crossAxis: h=!0, fallbackPlacements: m, fallbackStrategy: g="bestFit", fallbackAxisSideDirection: v="none", flipAlignment: y=!0, ...b} = q(r, e);
                        if (null != (t = s.arrow) && t.alignmentOffset)
                            return {};
                        let w = J(a)
                          , x = en(c)
                          , E = J(c) === c
                          , C = await (null == d.isRTL ? void 0 : d.isRTL(f.floating))
                          , S = m || (E || !y ? [ei(c)] : function(e) {
                            let t = ei(e);
                            return [eo(e), t, eo(t)]
                        }(c))
                          , R = "none" !== v;
                        !m && R && S.push(...function(e, t, r, n) {
                            let o = ee(e)
                              , i = function(e, t, r) {
                                let n = ["left", "right"]
                                  , o = ["right", "left"];
                                switch (e) {
                                case "top":
                                case "bottom":
                                    if (r)
                                        return t ? o : n;
                                    return t ? n : o;
                                case "left":
                                case "right":
                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                default:
                                    return []
                                }
                            }(J(e), "start" === r, n);
                            return o && (i = i.map(e => e + "-" + o),
                            t && (i = i.concat(i.map(eo)))),
                            i
                        }(c, y, v, C));
                        let M = [c, ...S]
                          , P = await ec(e, b)
                          , k = []
                          , A = (null == (n = s.flip) ? void 0 : n.overflows) || [];
                        if (p && k.push(P[w]),
                        h) {
                            let e = function(e, t, r) {
                                void 0 === r && (r = !1);
                                let n = ee(e)
                                  , o = et(en(e))
                                  , i = er(o)
                                  , l = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                                return t.reference[i] > t.floating[i] && (l = ei(l)),
                                [l, ei(l)]
                            }(a, u, C);
                            k.push(P[e[0]], P[e[1]])
                        }
                        if (A = [...A, {
                            placement: a,
                            overflows: k
                        }],
                        !k.every(e => e <= 0)) {
                            let e = ((null == (o = s.flip) ? void 0 : o.index) || 0) + 1
                              , t = M[e];
                            if (t)
                                return {
                                    data: {
                                        index: e,
                                        overflows: A
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                            let r = null == (i = A.filter(e => e.overflows[0] <= 0).sort( (e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                            if (!r)
                                switch (g) {
                                case "bestFit":
                                    {
                                        let e = null == (l = A.filter(e => {
                                            if (R) {
                                                let t = en(e.placement);
                                                return t === x || "y" === t
                                            }
                                            return !0
                                        }
                                        ).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce( (e, t) => e + t, 0)]).sort( (e, t) => e[1] - t[1])[0]) ? void 0 : l[0];
                                        e && (r = e);
                                        break
                                    }
                                case "initialPlacement":
                                    r = c
                                }
                            if (a !== r)
                                return {
                                    reset: {
                                        placement: r
                                    }
                                }
                        }
                        return {}
                    }
                }),
                options: [e, t]
            }
        }
          , e8 = (e, t) => {
            var r;
            return {
                ...(void 0 === (r = e) && (r = {}),
                {
                    name: "size",
                    options: r,
                    async fn(e) {
                        var t, n;
                        let o, i;
                        let {placement: l, rects: a, platform: s, elements: u} = e
                          , {apply: c= () => {}
                        , ...d} = q(r, e)
                          , f = await ec(e, d)
                          , p = J(l)
                          , h = ee(l)
                          , m = "y" === en(l)
                          , {width: g, height: v} = a.floating;
                        "top" === p || "bottom" === p ? (o = p,
                        i = h === (await (null == s.isRTL ? void 0 : s.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (i = p,
                        o = "end" === h ? "top" : "bottom");
                        let y = v - f.top - f.bottom
                          , b = g - f.left - f.right
                          , w = $(v - f[o], y)
                          , x = $(g - f[i], b)
                          , E = !e.middlewareData.shift
                          , C = w
                          , S = x;
                        if (null != (t = e.middlewareData.shift) && t.enabled.x && (S = b),
                        null != (n = e.middlewareData.shift) && n.enabled.y && (C = y),
                        E && !h) {
                            let e = Y(f.left, 0)
                              , t = Y(f.right, 0)
                              , r = Y(f.top, 0)
                              , n = Y(f.bottom, 0);
                            m ? S = g - 2 * (0 !== e || 0 !== t ? e + t : Y(f.left, f.right)) : C = v - 2 * (0 !== r || 0 !== n ? r + n : Y(f.top, f.bottom))
                        }
                        await c({
                            ...e,
                            availableWidth: S,
                            availableHeight: C
                        });
                        let R = await s.getDimensions(u.floating);
                        return g !== R.width || v !== R.height ? {
                            reset: {
                                rects: !0
                            }
                        } : {}
                    }
                }),
                options: [e, t]
            }
        }
          , e4 = (e, t) => {
            var r;
            return {
                ...(void 0 === (r = e) && (r = {}),
                {
                    name: "hide",
                    options: r,
                    async fn(e) {
                        let {rects: t} = e
                          , {strategy: n="referenceHidden", ...o} = q(r, e);
                        switch (n) {
                        case "referenceHidden":
                            {
                                let r = ed(await ec(e, {
                                    ...o,
                                    elementContext: "reference"
                                }), t.reference);
                                return {
                                    data: {
                                        referenceHiddenOffsets: r,
                                        referenceHidden: ef(r)
                                    }
                                }
                            }
                        case "escaped":
                            {
                                let r = ed(await ec(e, {
                                    ...o,
                                    altBoundary: !0
                                }), t.floating);
                                return {
                                    data: {
                                        escapedOffsets: r,
                                        escaped: ef(r)
                                    }
                                }
                            }
                        default:
                            return {}
                        }
                    }
                }),
                options: [e, t]
            }
        }
          , e5 = (e, t) => ({
            ...eJ(e),
            options: [e, t]
        });
        var e6 = f.forwardRef( (e, t) => {
            let {children: r, width: n=10, height: o=5, ...i} = e;
            return (0,
            v.jsx)(E.WV.svg, {
                ...i,
                ref: t,
                width: n,
                height: o,
                viewBox: "0 0 30 10",
                preserveAspectRatio: "none",
                children: e.asChild ? r : (0,
                v.jsx)("polygon", {
                    points: "0,0 30,0 15,10"
                })
            })
        }
        );
        e6.displayName = "Arrow";
        var e7 = "Popper"
          , [e9,te] = y(e7)
          , [tt,tr] = e9(e7)
          , tn = e => {
            let {__scopePopper: t, children: r} = e
              , [n,o] = f.useState(null);
            return (0,
            v.jsx)(tt, {
                scope: t,
                anchor: n,
                onAnchorChange: o,
                children: r
            })
        }
        ;
        tn.displayName = e7;
        var to = "PopperAnchor"
          , ti = f.forwardRef( (e, t) => {
            let {__scopePopper: r, virtualRef: n, ...o} = e
              , i = tr(to, r)
              , l = f.useRef(null)
              , a = (0,
            b.e)(t, l);
            return f.useEffect( () => {
                i.onAnchorChange((null == n ? void 0 : n.current) || l.current)
            }
            ),
            n ? null : (0,
            v.jsx)(E.WV.div, {
                ...o,
                ref: a
            })
        }
        );
        ti.displayName = to;
        var tl = "PopperContent"
          , [ta,ts] = e9(tl)
          , tu = f.forwardRef( (e, t) => {
            var r, n, o, i, l, a, s, u;
            let {__scopePopper: c, side: d="bottom", sideOffset: p=0, align: m="center", alignOffset: g=0, arrowPadding: y=0, avoidCollisions: w=!0, collisionBoundary: x=[], collisionPadding: S=0, sticky: R="partial", hideWhenDetached: M=!1, updatePositionStrategy: P="optimized", onPlaced: k, ...A} = e
              , N = tr(tl, c)
              , [j,O] = f.useState(null)
              , L = (0,
            b.e)(t, e => O(e))
              , [T,_] = f.useState(null)
              , I = function(e) {
                let[t,r] = f.useState(void 0);
                return W( () => {
                    if (e) {
                        r({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t => {
                            let n, o;
                            if (!Array.isArray(t) || !t.length)
                                return;
                            let i = t[0];
                            if ("borderBoxSize"in i) {
                                let e = i.borderBoxSize
                                  , t = Array.isArray(e) ? e[0] : e;
                                n = t.inlineSize,
                                o = t.blockSize
                            } else
                                n = e.offsetWidth,
                                o = e.offsetHeight;
                            r({
                                width: n,
                                height: o
                            })
                        }
                        );
                        return t.observe(e, {
                            box: "border-box"
                        }),
                        () => t.unobserve(e)
                    }
                    r(void 0)
                }
                , [e]),
                t
            }(T)
              , z = null !== (s = null == I ? void 0 : I.width) && void 0 !== s ? s : 0
              , D = null !== (u = null == I ? void 0 : I.height) && void 0 !== u ? u : 0
              , F = "number" == typeof S ? S : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...S
            }
              , B = Array.isArray(x) ? x : [x]
              , H = B.length > 0
              , V = {
                padding: F,
                boundary: B.filter(tp),
                altBoundary: H
            }
              , {refs: U, floatingStyles: G, placement: X, isPositioned: Q, middlewareData: Z} = function(e) {
                void 0 === e && (e = {});
                let {placement: t="bottom", strategy: r="absolute", middleware: n=[], platform: o, elements: {reference: i, floating: l}={}, transform: a=!0, whileElementsMounted: s, open: u} = e
                  , [c,d] = f.useState({
                    x: 0,
                    y: 0,
                    strategy: r,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1
                })
                  , [p,m] = f.useState(n);
                eX(p, n) || m(n);
                let[g,v] = f.useState(null)
                  , [y,b] = f.useState(null)
                  , w = f.useCallback(e => {
                    e !== S.current && (S.current = e,
                    v(e))
                }
                , [])
                  , x = f.useCallback(e => {
                    e !== R.current && (R.current = e,
                    b(e))
                }
                , [])
                  , E = i || g
                  , C = l || y
                  , S = f.useRef(null)
                  , R = f.useRef(null)
                  , M = f.useRef(c)
                  , P = null != s
                  , k = eq(s)
                  , A = eq(o)
                  , N = eq(u)
                  , j = f.useCallback( () => {
                    if (!S.current || !R.current)
                        return;
                    let e = {
                        placement: t,
                        strategy: r,
                        middleware: p
                    };
                    A.current && (e.platform = A.current),
                    eG(S.current, R.current, e).then(e => {
                        let t = {
                            ...e,
                            isPositioned: !1 !== N.current
                        };
                        O.current && !eX(M.current, t) && (M.current = t,
                        h.flushSync( () => {
                            d(t)
                        }
                        ))
                    }
                    )
                }
                , [p, t, r, A, N]);
                eK( () => {
                    !1 === u && M.current.isPositioned && (M.current.isPositioned = !1,
                    d(e => ({
                        ...e,
                        isPositioned: !1
                    })))
                }
                , [u]);
                let O = f.useRef(!1);
                eK( () => (O.current = !0,
                () => {
                    O.current = !1
                }
                ), []),
                eK( () => {
                    if (E && (S.current = E),
                    C && (R.current = C),
                    E && C) {
                        if (k.current)
                            return k.current(E, C, j);
                        j()
                    }
                }
                , [E, C, j, k, P]);
                let L = f.useMemo( () => ({
                    reference: S,
                    floating: R,
                    setReference: w,
                    setFloating: x
                }), [w, x])
                  , T = f.useMemo( () => ({
                    reference: E,
                    floating: C
                }), [E, C])
                  , _ = f.useMemo( () => {
                    let e = {
                        position: r,
                        left: 0,
                        top: 0
                    };
                    if (!T.floating)
                        return e;
                    let t = eZ(T.floating, c.x)
                      , n = eZ(T.floating, c.y);
                    return a ? {
                        ...e,
                        transform: "translate(" + t + "px, " + n + "px)",
                        ...eQ(T.floating) >= 1.5 && {
                            willChange: "transform"
                        }
                    } : {
                        position: r,
                        left: t,
                        top: n
                    }
                }
                , [r, a, T.floating, c.x, c.y]);
                return f.useMemo( () => ({
                    ...c,
                    update: j,
                    refs: L,
                    elements: T,
                    floatingStyles: _
                }), [c, j, L, T, _])
            }({
                strategy: "fixed",
                placement: d + ("center" !== m ? "-" + m : ""),
                whileElementsMounted: function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                    return function(e, t, r, n) {
                        let o;
                        void 0 === n && (n = {});
                        let {ancestorScroll: i=!0, ancestorResize: l=!0, elementResize: a="function" == typeof ResizeObserver, layoutShift: s="function" == typeof IntersectionObserver, animationFrame: u=!1} = n
                          , c = eL(e)
                          , d = i || l ? [...c ? eN(c) : [], ...eN(t)] : [];
                        d.forEach(e => {
                            i && e.addEventListener("scroll", r, {
                                passive: !0
                            }),
                            l && e.addEventListener("resize", r)
                        }
                        );
                        let f = c && s ? function(e, t) {
                            let r, n = null, o = ev(e);
                            function i() {
                                var e;
                                clearTimeout(r),
                                null == (e = n) || e.disconnect(),
                                n = null
                            }
                            return !function l(a, s) {
                                void 0 === a && (a = !1),
                                void 0 === s && (s = 1),
                                i();
                                let {left: u, top: c, width: d, height: f} = e.getBoundingClientRect();
                                if (a || t(),
                                !d || !f)
                                    return;
                                let p = K(c)
                                  , h = K(o.clientWidth - (u + d))
                                  , m = {
                                    rootMargin: -p + "px " + -h + "px " + -K(o.clientHeight - (c + f)) + "px " + -K(u) + "px",
                                    threshold: Y(0, $(1, s)) || 1
                                }
                                  , g = !0;
                                function v(e) {
                                    let t = e[0].intersectionRatio;
                                    if (t !== s) {
                                        if (!g)
                                            return l();
                                        t ? l(!1, t) : r = setTimeout( () => {
                                            l(!1, 1e-7)
                                        }
                                        , 1e3)
                                    }
                                    g = !1
                                }
                                try {
                                    n = new IntersectionObserver(v,{
                                        ...m,
                                        root: o.ownerDocument
                                    })
                                } catch (e) {
                                    n = new IntersectionObserver(v,m)
                                }
                                n.observe(e)
                            }(!0),
                            i
                        }(c, r) : null
                          , p = -1
                          , h = null;
                        a && (h = new ResizeObserver(e => {
                            let[n] = e;
                            n && n.target === c && h && (h.unobserve(t),
                            cancelAnimationFrame(p),
                            p = requestAnimationFrame( () => {
                                var e;
                                null == (e = h) || e.observe(t)
                            }
                            )),
                            r()
                        }
                        ),
                        c && !u && h.observe(c),
                        h.observe(t));
                        let m = u ? ez(e) : null;
                        return u && function t() {
                            let n = ez(e);
                            m && (n.x !== m.x || n.y !== m.y || n.width !== m.width || n.height !== m.height) && r(),
                            m = n,
                            o = requestAnimationFrame(t)
                        }(),
                        r(),
                        () => {
                            var e;
                            d.forEach(e => {
                                i && e.removeEventListener("scroll", r),
                                l && e.removeEventListener("resize", r)
                            }
                            ),
                            null == f || f(),
                            null == (e = h) || e.disconnect(),
                            h = null,
                            u && cancelAnimationFrame(o)
                        }
                    }(...t, {
                        animationFrame: "always" === P
                    })
                },
                elements: {
                    reference: N.anchor
                },
                middleware: [e0({
                    mainAxis: p + D,
                    alignmentAxis: g
                }), w && e1({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === R ? e2() : void 0,
                    ...V
                }), w && e3({
                    ...V
                }), e8({
                    ...V,
                    apply: e => {
                        let {elements: t, rects: r, availableWidth: n, availableHeight: o} = e
                          , {width: i, height: l} = r.reference
                          , a = t.floating.style;
                        a.setProperty("--radix-popper-available-width", "".concat(n, "px")),
                        a.setProperty("--radix-popper-available-height", "".concat(o, "px")),
                        a.setProperty("--radix-popper-anchor-width", "".concat(i, "px")),
                        a.setProperty("--radix-popper-anchor-height", "".concat(l, "px"))
                    }
                }), T && e5({
                    element: T,
                    padding: y
                }), th({
                    arrowWidth: z,
                    arrowHeight: D
                }), M && e4({
                    strategy: "referenceHidden",
                    ...V
                })]
            })
              , [q,J] = tm(X)
              , ee = C(k);
            W( () => {
                Q && (null == ee || ee())
            }
            , [Q, ee]);
            let et = null === (r = Z.arrow) || void 0 === r ? void 0 : r.x
              , er = null === (n = Z.arrow) || void 0 === n ? void 0 : n.y
              , en = (null === (o = Z.arrow) || void 0 === o ? void 0 : o.centerOffset) !== 0
              , [eo,ei] = f.useState();
            return W( () => {
                j && ei(window.getComputedStyle(j).zIndex)
            }
            , [j]),
            (0,
            v.jsx)("div", {
                ref: U.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...G,
                    transform: Q ? G.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: eo,
                    "--radix-popper-transform-origin": [null === (i = Z.transformOrigin) || void 0 === i ? void 0 : i.x, null === (l = Z.transformOrigin) || void 0 === l ? void 0 : l.y].join(" "),
                    ...(null === (a = Z.hide) || void 0 === a ? void 0 : a.referenceHidden) && {
                        visibility: "hidden",
                        pointerEvents: "none"
                    }
                },
                dir: e.dir,
                children: (0,
                v.jsx)(ta, {
                    scope: c,
                    placedSide: q,
                    onArrowChange: _,
                    arrowX: et,
                    arrowY: er,
                    shouldHideArrow: en,
                    children: (0,
                    v.jsx)(E.WV.div, {
                        "data-side": q,
                        "data-align": J,
                        ...A,
                        ref: L,
                        style: {
                            ...A.style,
                            animation: Q ? void 0 : "none"
                        }
                    })
                })
            })
        }
        );
        tu.displayName = tl;
        var tc = "PopperArrow"
          , td = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
        }
          , tf = f.forwardRef(function(e, t) {
            let {__scopePopper: r, ...n} = e
              , o = ts(tc, r)
              , i = td[o.placedSide];
            return (0,
            v.jsx)("span", {
                ref: o.onArrowChange,
                style: {
                    position: "absolute",
                    left: o.arrowX,
                    top: o.arrowY,
                    [i]: 0,
                    transformOrigin: {
                        top: "",
                        right: "0 0",
                        bottom: "center 0",
                        left: "100% 0"
                    }[o.placedSide],
                    transform: {
                        top: "translateY(100%)",
                        right: "translateY(50%) rotate(90deg) translateX(-50%)",
                        bottom: "rotate(180deg)",
                        left: "translateY(50%) rotate(-90deg) translateX(50%)"
                    }[o.placedSide],
                    visibility: o.shouldHideArrow ? "hidden" : void 0
                },
                children: (0,
                v.jsx)(e6, {
                    ...n,
                    ref: t,
                    style: {
                        ...n.style,
                        display: "block"
                    }
                })
            })
        });
        function tp(e) {
            return null !== e
        }
        tf.displayName = tc;
        var th = e => ({
            name: "transformOrigin",
            options: e,
            fn(t) {
                var r, n, o, i, l;
                let {placement: a, rects: s, middlewareData: u} = t
                  , c = (null === (r = u.arrow) || void 0 === r ? void 0 : r.centerOffset) !== 0
                  , d = c ? 0 : e.arrowWidth
                  , f = c ? 0 : e.arrowHeight
                  , [p,h] = tm(a)
                  , m = {
                    start: "0%",
                    center: "50%",
                    end: "100%"
                }[h]
                  , g = (null !== (i = null === (n = u.arrow) || void 0 === n ? void 0 : n.x) && void 0 !== i ? i : 0) + d / 2
                  , v = (null !== (l = null === (o = u.arrow) || void 0 === o ? void 0 : o.y) && void 0 !== l ? l : 0) + f / 2
                  , y = ""
                  , b = "";
                return "bottom" === p ? (y = c ? m : "".concat(g, "px"),
                b = "".concat(-f, "px")) : "top" === p ? (y = c ? m : "".concat(g, "px"),
                b = "".concat(s.floating.height + f, "px")) : "right" === p ? (y = "".concat(-f, "px"),
                b = c ? m : "".concat(v, "px")) : "left" === p && (y = "".concat(s.floating.width + f, "px"),
                b = c ? m : "".concat(v, "px")),
                {
                    data: {
                        x: y,
                        y: b
                    }
                }
            }
        });
        function tm(e) {
            let[t,r="center"] = e.split("-");
            return [t, r]
        }
        var tg = f.forwardRef( (e, t) => {
            var r, n;
            let {container: o, ...i} = e
              , [l,a] = f.useState(!1);
            W( () => a(!0), []);
            let s = o || l && (null === (n = globalThis) || void 0 === n ? void 0 : null === (r = n.document) || void 0 === r ? void 0 : r.body);
            return s ? h.createPortal((0,
            v.jsx)(E.WV.div, {
                ...i,
                ref: t
            }), s) : null
        }
        );
        function tv({prop: e, defaultProp: t, onChange: r= () => {}
        }) {
            let[n,o] = function({defaultProp: e, onChange: t}) {
                let r = f.useState(e)
                  , [n] = r
                  , o = f.useRef(n)
                  , i = C(t);
                return f.useEffect( () => {
                    o.current !== n && (i(n),
                    o.current = n)
                }
                , [n, o, i]),
                r
            }({
                defaultProp: t,
                onChange: r
            })
              , i = void 0 !== e
              , l = i ? e : n
              , a = C(r);
            return [l, f.useCallback(t => {
                if (i) {
                    let r = "function" == typeof t ? t(e) : t;
                    r !== e && a(r)
                } else
                    o(t)
            }
            , [i, e, o, a])]
        }
        tg.displayName = "Portal";
        var ty = f.forwardRef( (e, t) => (0,
        v.jsx)(E.WV.span, {
            ...e,
            ref: t,
            style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style
            }
        }));
        ty.displayName = "VisuallyHidden";
        var tb = new WeakMap
          , tw = new WeakMap
          , tx = {}
          , tE = 0
          , tC = function(e) {
            return e && (e.host || tC(e.parentNode))
        }
          , tS = function(e, t, r, n) {
            var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                if (t.contains(e))
                    return e;
                var r = tC(e);
                return r && t.contains(r) ? r : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"),
                null)
            }).filter(function(e) {
                return !!e
            });
            tx[r] || (tx[r] = new WeakMap);
            var i = tx[r]
              , l = []
              , a = new Set
              , s = new Set(o)
              , u = function(e) {
                !e || a.has(e) || (a.add(e),
                u(e.parentNode))
            };
            o.forEach(u);
            var c = function(e) {
                !e || s.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                    if (a.has(e))
                        c(e);
                    else
                        try {
                            var t = e.getAttribute(n)
                              , o = null !== t && "false" !== t
                              , s = (tb.get(e) || 0) + 1
                              , u = (i.get(e) || 0) + 1;
                            tb.set(e, s),
                            i.set(e, u),
                            l.push(e),
                            1 === s && o && tw.set(e, !0),
                            1 === u && e.setAttribute(r, "true"),
                            o || e.setAttribute(n, "true")
                        } catch (t) {
                            console.error("aria-hidden: cannot operate on ", e, t)
                        }
                })
            };
            return c(t),
            a.clear(),
            tE++,
            function() {
                l.forEach(function(e) {
                    var t = tb.get(e) - 1
                      , o = i.get(e) - 1;
                    tb.set(e, t),
                    i.set(e, o),
                    t || (tw.has(e) || e.removeAttribute(n),
                    tw.delete(e)),
                    o || e.removeAttribute(r)
                }),
                --tE || (tb = new WeakMap,
                tb = new WeakMap,
                tw = new WeakMap,
                tx = {})
            }
        }
          , tR = function(e, t, r) {
            void 0 === r && (r = "data-aria-hidden");
            var n = Array.from(Array.isArray(e) ? e : [e])
              , o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
            return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))),
            tS(n, o, r, "aria-hidden")) : function() {
                return null
            }
        }
          , tM = function() {
            return (tM = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        function tP(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                    0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
            return r
        }
        "function" == typeof SuppressedError && SuppressedError;
        var tk = "right-scroll-bar-position"
          , tA = "width-before-scroll-bar";
        function tN(e, t) {
            return "function" == typeof e ? e(t) : e && (e.current = t),
            e
        }
        var tj = "undefined" != typeof window ? f.useLayoutEffect : f.useEffect
          , tO = new WeakMap
          , tL = (void 0 === o && (o = {}),
        (void 0 === i && (i = function(e) {
            return e
        }
        ),
        l = [],
        a = !1,
        s = {
            read: function() {
                if (a)
                    throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return l.length ? l[l.length - 1] : null
            },
            useMedium: function(e) {
                var t = i(e, a);
                return l.push(t),
                function() {
                    l = l.filter(function(e) {
                        return e !== t
                    })
                }
            },
            assignSyncMedium: function(e) {
                for (a = !0; l.length; ) {
                    var t = l;
                    l = [],
                    t.forEach(e)
                }
                l = {
                    push: function(t) {
                        return e(t)
                    },
                    filter: function() {
                        return l
                    }
                }
            },
            assignMedium: function(e) {
                a = !0;
                var t = [];
                if (l.length) {
                    var r = l;
                    l = [],
                    r.forEach(e),
                    t = l
                }
                var n = function() {
                    var r = t;
                    t = [],
                    r.forEach(e)
                }
                  , o = function() {
                    return Promise.resolve().then(n)
                };
                o(),
                l = {
                    push: function(e) {
                        t.push(e),
                        o()
                    },
                    filter: function(e) {
                        return t = t.filter(e),
                        l
                    }
                }
            }
        }).options = tM({
            async: !0,
            ssr: !1
        }, o),
        s)
          , tT = function() {}
          , t_ = f.forwardRef(function(e, t) {
            var r, n, o, i, l = f.useRef(null), a = f.useState({
                onScrollCapture: tT,
                onWheelCapture: tT,
                onTouchMoveCapture: tT
            }), s = a[0], u = a[1], c = e.forwardProps, d = e.children, p = e.className, h = e.removeScrollBar, m = e.enabled, g = e.shards, v = e.sideCar, y = e.noIsolation, b = e.inert, w = e.allowPinchZoom, x = e.as, E = e.gapMode, C = tP(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = (r = [l, t],
            n = function(e) {
                return r.forEach(function(t) {
                    return tN(t, e)
                })
            }
            ,
            (o = (0,
            f.useState)(function() {
                return {
                    value: null,
                    callback: n,
                    facade: {
                        get current() {
                            return o.value
                        },
                        set current(value) {
                            var e = o.value;
                            e !== value && (o.value = value,
                            o.callback(value, e))
                        }
                    }
                }
            })[0]).callback = n,
            i = o.facade,
            tj(function() {
                var e = tO.get(i);
                if (e) {
                    var t = new Set(e)
                      , n = new Set(r)
                      , o = i.current;
                    t.forEach(function(e) {
                        n.has(e) || tN(e, null)
                    }),
                    n.forEach(function(e) {
                        t.has(e) || tN(e, o)
                    })
                }
                tO.set(i, r)
            }, [r]),
            i), R = tM(tM({}, C), s);
            return f.createElement(f.Fragment, null, m && f.createElement(v, {
                sideCar: tL,
                removeScrollBar: h,
                shards: g,
                noIsolation: y,
                inert: b,
                setCallbacks: u,
                allowPinchZoom: !!w,
                lockRef: l,
                gapMode: E
            }), c ? f.cloneElement(f.Children.only(d), tM(tM({}, R), {
                ref: S
            })) : f.createElement(void 0 === x ? "div" : x, tM({}, R, {
                className: p,
                ref: S
            }), d))
        });
        t_.defaultProps = {
            enabled: !0,
            removeScrollBar: !0,
            inert: !1
        },
        t_.classNames = {
            fullWidth: tA,
            zeroRight: tk
        };
        var tI = function(e) {
            var t = e.sideCar
              , r = tP(e, ["sideCar"]);
            if (!t)
                throw Error("Sidecar: please provide `sideCar` property to import the right car");
            var n = t.read();
            if (!n)
                throw Error("Sidecar medium not found");
            return f.createElement(n, tM({}, r))
        };
        tI.isSideCarExport = !0;
        var tz = function() {
            var e = 0
              , t = null;
            return {
                add: function(n) {
                    if (0 == e && (t = function() {
                        if (!document)
                            return null;
                        var e = document.createElement("style");
                        e.type = "text/css";
                        var t = d || r.nc;
                        return t && e.setAttribute("nonce", t),
                        e
                    }())) {
                        var o, i;
                        (o = t).styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n)),
                        i = t,
                        (document.head || document.getElementsByTagName("head")[0]).appendChild(i)
                    }
                    e++
                },
                remove: function() {
                    --e || !t || (t.parentNode && t.parentNode.removeChild(t),
                    t = null)
                }
            }
        }
          , tD = function() {
            var e = tz();
            return function(t, r) {
                f.useEffect(function() {
                    return e.add(t),
                    function() {
                        e.remove()
                    }
                }, [t && r])
            }
        }
          , tF = function() {
            var e = tD();
            return function(t) {
                return e(t.styles, t.dynamic),
                null
            }
        }
          , tW = {
            left: 0,
            top: 0,
            right: 0,
            gap: 0
        }
          , tB = function(e) {
            return parseInt(e || "", 10) || 0
        }
          , tH = function(e) {
            var t = window.getComputedStyle(document.body)
              , r = t["padding" === e ? "paddingLeft" : "marginLeft"]
              , n = t["padding" === e ? "paddingTop" : "marginTop"]
              , o = t["padding" === e ? "paddingRight" : "marginRight"];
            return [tB(r), tB(n), tB(o)]
        }
          , tV = function(e) {
            if (void 0 === e && (e = "margin"),
            "undefined" == typeof window)
                return tW;
            var t = tH(e)
              , r = document.documentElement.clientWidth
              , n = window.innerWidth;
            return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, n - r + t[2] - t[0])
            }
        }
          , tU = tF()
          , t$ = "data-scroll-locked"
          , tY = function(e, t, r, n) {
            var o = e.left
              , i = e.top
              , l = e.right
              , a = e.gap;
            return void 0 === r && (r = "margin"),
            "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(n, ";\n   padding-right: ").concat(a, "px ").concat(n, ";\n  }\n  body[").concat(t$, "] {\n    overflow: hidden ").concat(n, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(n, ";"), "margin" === r && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(n, ";\n    "), "padding" === r && "padding-right: ".concat(a, "px ").concat(n, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(tk, " {\n    right: ").concat(a, "px ").concat(n, ";\n  }\n  \n  .").concat(tA, " {\n    margin-right: ").concat(a, "px ").concat(n, ";\n  }\n  \n  .").concat(tk, " .").concat(tk, " {\n    right: 0 ").concat(n, ";\n  }\n  \n  .").concat(tA, " .").concat(tA, " {\n    margin-right: 0 ").concat(n, ";\n  }\n  \n  body[").concat(t$, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
        }
          , tG = function() {
            var e = parseInt(document.body.getAttribute(t$) || "0", 10);
            return isFinite(e) ? e : 0
        }
          , tK = function() {
            f.useEffect(function() {
                return document.body.setAttribute(t$, (tG() + 1).toString()),
                function() {
                    var e = tG() - 1;
                    e <= 0 ? document.body.removeAttribute(t$) : document.body.setAttribute(t$, e.toString())
                }
            }, [])
        }
          , tX = function(e) {
            var t = e.noRelative
              , r = e.noImportant
              , n = e.gapMode
              , o = void 0 === n ? "margin" : n;
            tK();
            var i = f.useMemo(function() {
                return tV(o)
            }, [o]);
            return f.createElement(tU, {
                styles: tY(i, !t, o, r ? "" : "!important")
            })
        }
          , tQ = !1;
        if ("undefined" != typeof window)
            try {
                var tZ = Object.defineProperty({}, "passive", {
                    get: function() {
                        return tQ = !0,
                        !0
                    }
                });
                window.addEventListener("test", tZ, tZ),
                window.removeEventListener("test", tZ, tZ)
            } catch (e) {
                tQ = !1
            }
        var tq = !!tQ && {
            passive: !1
        }
          , tJ = function(e, t) {
            if (!(e instanceof Element))
                return !1;
            var r = window.getComputedStyle(e);
            return "hidden" !== r[t] && !(r.overflowY === r.overflowX && "TEXTAREA" !== e.tagName && "visible" === r[t])
        }
          , t0 = function(e, t) {
            var r = t.ownerDocument
              , n = t;
            do {
                if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host),
                t1(e, n)) {
                    var o = t2(e, n);
                    if (o[1] > o[2])
                        return !0
                }
                n = n.parentNode
            } while (n && n !== r.body);
            return !1
        }
          , t1 = function(e, t) {
            return "v" === e ? tJ(t, "overflowY") : tJ(t, "overflowX")
        }
          , t2 = function(e, t) {
            return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
        }
          , t3 = function(e, t, r, n, o) {
            var i, l = (i = window.getComputedStyle(t).direction,
            "h" === e && "rtl" === i ? -1 : 1), a = l * n, s = r.target, u = t.contains(s), c = !1, d = a > 0, f = 0, p = 0;
            do {
                var h = t2(e, s)
                  , m = h[0]
                  , g = h[1] - h[2] - l * m;
                (m || g) && t1(e, s) && (f += g,
                p += m),
                s instanceof ShadowRoot ? s = s.host : s = s.parentNode
            } while (!u && s !== document.body || u && (t.contains(s) || t === s));
            return d && (o && 1 > Math.abs(f) || !o && a > f) ? c = !0 : !d && (o && 1 > Math.abs(p) || !o && -a > p) && (c = !0),
            c
        }
          , t8 = function(e) {
            return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        }
          , t4 = function(e) {
            return [e.deltaX, e.deltaY]
        }
          , t5 = function(e) {
            return e && "current"in e ? e.current : e
        }
          , t6 = 0
          , t7 = []
          , t9 = (u = function(e) {
            var t = f.useRef([])
              , r = f.useRef([0, 0])
              , n = f.useRef()
              , o = f.useState(t6++)[0]
              , i = f.useState(tF)[0]
              , l = f.useRef(e);
            f.useEffect(function() {
                l.current = e
            }, [e]),
            f.useEffect(function() {
                if (e.inert) {
                    document.body.classList.add("block-interactivity-".concat(o));
                    var t = (function(e, t, r) {
                        if (r || 2 == arguments.length)
                            for (var n, o = 0, i = t.length; o < i; o++)
                                !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)),
                                n[o] = t[o]);
                        return e.concat(n || Array.prototype.slice.call(t))
                    }
                    )([e.lockRef.current], (e.shards || []).map(t5), !0).filter(Boolean);
                    return t.forEach(function(e) {
                        return e.classList.add("allow-interactivity-".concat(o))
                    }),
                    function() {
                        document.body.classList.remove("block-interactivity-".concat(o)),
                        t.forEach(function(e) {
                            return e.classList.remove("allow-interactivity-".concat(o))
                        })
                    }
                }
            }, [e.inert, e.lockRef.current, e.shards]);
            var a = f.useCallback(function(e, t) {
                if ("touches"in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey)
                    return !l.current.allowPinchZoom;
                var o, i = t8(e), a = r.current, s = "deltaX"in e ? e.deltaX : a[0] - i[0], u = "deltaY"in e ? e.deltaY : a[1] - i[1], c = e.target, d = Math.abs(s) > Math.abs(u) ? "h" : "v";
                if ("touches"in e && "h" === d && "range" === c.type)
                    return !1;
                var f = t0(d, c);
                if (!f)
                    return !0;
                if (f ? o = d : (o = "v" === d ? "h" : "v",
                f = t0(d, c)),
                !f)
                    return !1;
                if (!n.current && "changedTouches"in e && (s || u) && (n.current = o),
                !o)
                    return !0;
                var p = n.current || o;
                return t3(p, t, e, "h" === p ? s : u, !0)
            }, [])
              , s = f.useCallback(function(e) {
                if (t7.length && t7[t7.length - 1] === i) {
                    var r = "deltaY"in e ? t4(e) : t8(e)
                      , n = t.current.filter(function(t) {
                        var n;
                        return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (n = t.delta)[0] === r[0] && n[1] === r[1]
                    })[0];
                    if (n && n.should) {
                        e.cancelable && e.preventDefault();
                        return
                    }
                    if (!n) {
                        var o = (l.current.shards || []).map(t5).filter(Boolean).filter(function(t) {
                            return t.contains(e.target)
                        });
                        (o.length > 0 ? a(e, o[0]) : !l.current.noIsolation) && e.cancelable && e.preventDefault()
                    }
                }
            }, [])
              , u = f.useCallback(function(e, r, n, o) {
                var i = {
                    name: e,
                    delta: r,
                    target: n,
                    should: o,
                    shadowParent: function(e) {
                        for (var t = null; null !== e; )
                            e instanceof ShadowRoot && (t = e.host,
                            e = e.host),
                            e = e.parentNode;
                        return t
                    }(n)
                };
                t.current.push(i),
                setTimeout(function() {
                    t.current = t.current.filter(function(e) {
                        return e !== i
                    })
                }, 1)
            }, [])
              , c = f.useCallback(function(e) {
                r.current = t8(e),
                n.current = void 0
            }, [])
              , d = f.useCallback(function(t) {
                u(t.type, t4(t), t.target, a(t, e.lockRef.current))
            }, [])
              , p = f.useCallback(function(t) {
                u(t.type, t8(t), t.target, a(t, e.lockRef.current))
            }, []);
            f.useEffect(function() {
                return t7.push(i),
                e.setCallbacks({
                    onScrollCapture: d,
                    onWheelCapture: d,
                    onTouchMoveCapture: p
                }),
                document.addEventListener("wheel", s, tq),
                document.addEventListener("touchmove", s, tq),
                document.addEventListener("touchstart", c, tq),
                function() {
                    t7 = t7.filter(function(e) {
                        return e !== i
                    }),
                    document.removeEventListener("wheel", s, tq),
                    document.removeEventListener("touchmove", s, tq),
                    document.removeEventListener("touchstart", c, tq)
                }
            }, []);
            var h = e.removeScrollBar
              , m = e.inert;
            return f.createElement(f.Fragment, null, m ? f.createElement(i, {
                styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
            }) : null, h ? f.createElement(tX, {
                gapMode: e.gapMode
            }) : null)
        }
        ,
        tL.useMedium(u),
        tI)
          , re = f.forwardRef(function(e, t) {
            return f.createElement(t_, tM({}, e, {
                ref: t,
                sideCar: t9
            }))
        });
        re.classNames = t_.classNames;
        var rt = [" ", "Enter", "ArrowUp", "ArrowDown"]
          , rr = [" ", "Enter"]
          , rn = "Select"
          , [ro,ri,rl] = function(e) {
            let t = e + "CollectionProvider"
              , [r,n] = y(t)
              , [o,i] = r(t, {
                collectionRef: {
                    current: null
                },
                itemMap: new Map
            })
              , l = e => {
                let {scope: t, children: r} = e
                  , n = f.useRef(null)
                  , i = f.useRef(new Map).current;
                return (0,
                v.jsx)(o, {
                    scope: t,
                    itemMap: i,
                    collectionRef: n,
                    children: r
                })
            }
            ;
            l.displayName = t;
            let a = e + "CollectionSlot"
              , s = f.forwardRef( (e, t) => {
                let {scope: r, children: n} = e
                  , o = i(a, r)
                  , l = (0,
                b.e)(t, o.collectionRef);
                return (0,
                v.jsx)(w.g7, {
                    ref: l,
                    children: n
                })
            }
            );
            s.displayName = a;
            let u = e + "CollectionItemSlot"
              , c = "data-radix-collection-item"
              , d = f.forwardRef( (e, t) => {
                let {scope: r, children: n, ...o} = e
                  , l = f.useRef(null)
                  , a = (0,
                b.e)(t, l)
                  , s = i(u, r);
                return f.useEffect( () => (s.itemMap.set(l, {
                    ref: l,
                    ...o
                }),
                () => void s.itemMap.delete(l))),
                (0,
                v.jsx)(w.g7, {
                    [c]: "",
                    ref: a,
                    children: n
                })
            }
            );
            return d.displayName = u,
            [{
                Provider: l,
                Slot: s,
                ItemSlot: d
            }, function(t) {
                let r = i(e + "CollectionConsumer", t);
                return f.useCallback( () => {
                    let e = r.collectionRef.current;
                    if (!e)
                        return [];
                    let t = Array.from(e.querySelectorAll("[".concat(c, "]")));
                    return Array.from(r.itemMap.values()).sort( (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
                }
                , [r.collectionRef, r.itemMap])
            }
            , n]
        }(rn)
          , [ra,rs] = y(rn, [rl, te])
          , ru = te()
          , [rc,rd] = ra(rn)
          , [rf,rp] = ra(rn)
          , rh = e => {
            let {__scopeSelect: t, children: r, open: n, defaultOpen: o, onOpenChange: i, value: l, defaultValue: a, onValueChange: s, dir: u, name: c, autoComplete: d, disabled: p, required: h, form: m} = e
              , g = ru(t)
              , [y,b] = f.useState(null)
              , [w,E] = f.useState(null)
              , [C,S] = f.useState(!1)
              , R = function(e) {
                let t = f.useContext(x);
                return e || t || "ltr"
            }(u)
              , [M=!1,P] = tv({
                prop: n,
                defaultProp: o,
                onChange: i
            })
              , [k,A] = tv({
                prop: l,
                defaultProp: a,
                onChange: s
            })
              , N = f.useRef(null)
              , j = !y || m || !!y.closest("form")
              , [O,L] = f.useState(new Set)
              , T = Array.from(O).map(e => e.props.value).join(";");
            return (0,
            v.jsx)(tn, {
                ...g,
                children: (0,
                v.jsxs)(rc, {
                    required: h,
                    scope: t,
                    trigger: y,
                    onTriggerChange: b,
                    valueNode: w,
                    onValueNodeChange: E,
                    valueNodeHasChildren: C,
                    onValueNodeHasChildrenChange: S,
                    contentId: V(),
                    value: k,
                    onValueChange: A,
                    open: M,
                    onOpenChange: P,
                    dir: R,
                    triggerPointerDownPosRef: N,
                    disabled: p,
                    children: [(0,
                    v.jsx)(ro.Provider, {
                        scope: t,
                        children: (0,
                        v.jsx)(rf, {
                            scope: e.__scopeSelect,
                            onNativeOptionAdd: f.useCallback(e => {
                                L(t => new Set(t).add(e))
                            }
                            , []),
                            onNativeOptionRemove: f.useCallback(e => {
                                L(t => {
                                    let r = new Set(t);
                                    return r.delete(e),
                                    r
                                }
                                )
                            }
                            , []),
                            children: r
                        })
                    }), j ? (0,
                    v.jsxs)(r0, {
                        "aria-hidden": !0,
                        required: h,
                        tabIndex: -1,
                        name: c,
                        autoComplete: d,
                        value: k,
                        onChange: e => A(e.target.value),
                        disabled: p,
                        form: m,
                        children: [void 0 === k ? (0,
                        v.jsx)("option", {
                            value: ""
                        }) : null, Array.from(O)]
                    }, T) : null]
                })
            })
        }
        ;
        rh.displayName = rn;
        var rm = "SelectTrigger"
          , rg = f.forwardRef( (e, t) => {
            let {__scopeSelect: r, disabled: n=!1, ...o} = e
              , i = ru(r)
              , l = rd(rm, r)
              , a = l.disabled || n
              , s = (0,
            b.e)(t, l.onTriggerChange)
              , u = ri(r)
              , c = f.useRef("touch")
              , [d,p,h] = r1(e => {
                let t = u().filter(e => !e.disabled)
                  , r = t.find(e => e.value === l.value)
                  , n = r2(t, e, r);
                void 0 !== n && l.onValueChange(n.value)
            }
            )
              , m = e => {
                a || (l.onOpenChange(!0),
                h()),
                e && (l.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY)
                })
            }
            ;
            return (0,
            v.jsx)(ti, {
                asChild: !0,
                ...i,
                children: (0,
                v.jsx)(E.WV.button, {
                    type: "button",
                    role: "combobox",
                    "aria-controls": l.contentId,
                    "aria-expanded": l.open,
                    "aria-required": l.required,
                    "aria-autocomplete": "none",
                    dir: l.dir,
                    "data-state": l.open ? "open" : "closed",
                    disabled: a,
                    "data-disabled": a ? "" : void 0,
                    "data-placeholder": rJ(l.value) ? "" : void 0,
                    ...o,
                    ref: s,
                    onClick: g(o.onClick, e => {
                        e.currentTarget.focus(),
                        "mouse" !== c.current && m(e)
                    }
                    ),
                    onPointerDown: g(o.onPointerDown, e => {
                        c.current = e.pointerType;
                        let t = e.target;
                        t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
                        0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (m(e),
                        e.preventDefault())
                    }
                    ),
                    onKeyDown: g(o.onKeyDown, e => {
                        let t = "" !== d.current;
                        e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || p(e.key),
                        (!t || " " !== e.key) && rt.includes(e.key) && (m(),
                        e.preventDefault())
                    }
                    )
                })
            })
        }
        );
        rg.displayName = rm;
        var rv = "SelectValue"
          , ry = f.forwardRef( (e, t) => {
            let {__scopeSelect: r, className: n, style: o, children: i, placeholder: l="", ...a} = e
              , s = rd(rv, r)
              , {onValueNodeHasChildrenChange: u} = s
              , c = void 0 !== i
              , d = (0,
            b.e)(t, s.onValueNodeChange);
            return W( () => {
                u(c)
            }
            , [u, c]),
            (0,
            v.jsx)(E.WV.span, {
                ...a,
                ref: d,
                style: {
                    pointerEvents: "none"
                },
                children: rJ(s.value) ? (0,
                v.jsx)(v.Fragment, {
                    children: l
                }) : i
            })
        }
        );
        ry.displayName = rv;
        var rb = f.forwardRef( (e, t) => {
            let {__scopeSelect: r, children: n, ...o} = e;
            return (0,
            v.jsx)(E.WV.span, {
                "aria-hidden": !0,
                ...o,
                ref: t,
                children: n || "▼"
            })
        }
        );
        rb.displayName = "SelectIcon";
        var rw = e => (0,
        v.jsx)(tg, {
            asChild: !0,
            ...e
        });
        rw.displayName = "SelectPortal";
        var rx = "SelectContent"
          , rE = f.forwardRef( (e, t) => {
            let r = rd(rx, e.__scopeSelect)
              , [n,o] = f.useState();
            return (W( () => {
                o(new DocumentFragment)
            }
            , []),
            r.open) ? (0,
            v.jsx)(rR, {
                ...e,
                ref: t
            }) : n ? h.createPortal((0,
            v.jsx)(rC, {
                scope: e.__scopeSelect,
                children: (0,
                v.jsx)(ro.Slot, {
                    scope: e.__scopeSelect,
                    children: (0,
                    v.jsx)("div", {
                        children: e.children
                    })
                })
            }), n) : null
        }
        );
        rE.displayName = rx;
        var [rC,rS] = ra(rx)
          , rR = f.forwardRef( (e, t) => {
            let {__scopeSelect: r, position: n="item-aligned", onCloseAutoFocus: o, onEscapeKeyDown: i, onPointerDownOutside: l, side: a, sideOffset: s, align: u, alignOffset: c, arrowPadding: d, collisionBoundary: p, collisionPadding: h, sticky: m, hideWhenDetached: y, avoidCollisions: x, ...E} = e
              , C = rd(rx, r)
              , [S,R] = f.useState(null)
              , [P,k] = f.useState(null)
              , j = (0,
            b.e)(t, e => R(e))
              , [O,L] = f.useState(null)
              , [_,I] = f.useState(null)
              , z = ri(r)
              , [D,F] = f.useState(!1)
              , W = f.useRef(!1);
            f.useEffect( () => {
                if (S)
                    return tR(S)
            }
            , [S]),
            f.useEffect( () => {
                var e, t;
                let r = document.querySelectorAll("[data-radix-focus-guard]");
                return document.body.insertAdjacentElement("afterbegin", null !== (e = r[0]) && void 0 !== e ? e : N()),
                document.body.insertAdjacentElement("beforeend", null !== (t = r[1]) && void 0 !== t ? t : N()),
                A++,
                () => {
                    1 === A && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()),
                    A--
                }
            }
            , []);
            let B = f.useCallback(e => {
                let[t,...r] = z().map(e => e.ref.current)
                  , [n] = r.slice(-1)
                  , o = document.activeElement;
                for (let r of e)
                    if (r === o || (null == r || r.scrollIntoView({
                        block: "nearest"
                    }),
                    r === t && P && (P.scrollTop = 0),
                    r === n && P && (P.scrollTop = P.scrollHeight),
                    null == r || r.focus(),
                    document.activeElement !== o))
                        return
            }
            , [z, P])
              , H = f.useCallback( () => B([O, S]), [B, O, S]);
            f.useEffect( () => {
                D && H()
            }
            , [D, H]);
            let {onOpenChange: V, triggerPointerDownPosRef: U} = C;
            f.useEffect( () => {
                if (S) {
                    let e = {
                        x: 0,
                        y: 0
                    }
                      , t = t => {
                        var r, n, o, i;
                        e = {
                            x: Math.abs(Math.round(t.pageX) - (null !== (o = null === (r = U.current) || void 0 === r ? void 0 : r.x) && void 0 !== o ? o : 0)),
                            y: Math.abs(Math.round(t.pageY) - (null !== (i = null === (n = U.current) || void 0 === n ? void 0 : n.y) && void 0 !== i ? i : 0))
                        }
                    }
                      , r = r => {
                        e.x <= 10 && e.y <= 10 ? r.preventDefault() : S.contains(r.target) || V(!1),
                        document.removeEventListener("pointermove", t),
                        U.current = null
                    }
                    ;
                    return null !== U.current && (document.addEventListener("pointermove", t),
                    document.addEventListener("pointerup", r, {
                        capture: !0,
                        once: !0
                    })),
                    () => {
                        document.removeEventListener("pointermove", t),
                        document.removeEventListener("pointerup", r, {
                            capture: !0
                        })
                    }
                }
            }
            , [S, V, U]),
            f.useEffect( () => {
                let e = () => V(!1);
                return window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                    window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e)
                }
            }
            , [V]);
            let[$,Y] = r1(e => {
                let t = z().filter(e => !e.disabled)
                  , r = t.find(e => e.ref.current === document.activeElement)
                  , n = r2(t, e, r);
                n && setTimeout( () => n.ref.current.focus())
            }
            )
              , G = f.useCallback( (e, t, r) => {
                let n = !W.current && !r;
                (void 0 !== C.value && C.value === t || n) && (L(e),
                n && (W.current = !0))
            }
            , [C.value])
              , K = f.useCallback( () => null == S ? void 0 : S.focus(), [S])
              , X = f.useCallback( (e, t, r) => {
                let n = !W.current && !r;
                (void 0 !== C.value && C.value === t || n) && I(e)
            }
            , [C.value])
              , Q = "popper" === n ? rP : rM
              , Z = Q === rP ? {
                side: a,
                sideOffset: s,
                align: u,
                alignOffset: c,
                arrowPadding: d,
                collisionBoundary: p,
                collisionPadding: h,
                sticky: m,
                hideWhenDetached: y,
                avoidCollisions: x
            } : {};
            return (0,
            v.jsx)(rC, {
                scope: r,
                content: S,
                viewport: P,
                onViewportChange: k,
                itemRefCallback: G,
                selectedItem: O,
                onItemLeave: K,
                itemTextRefCallback: X,
                focusSelectedItem: H,
                selectedItemText: _,
                position: n,
                isPositioned: D,
                searchRef: $,
                children: (0,
                v.jsx)(re, {
                    as: w.g7,
                    allowPinchZoom: !0,
                    children: (0,
                    v.jsx)(T, {
                        asChild: !0,
                        trapped: C.open,
                        onMountAutoFocus: e => {
                            e.preventDefault()
                        }
                        ,
                        onUnmountAutoFocus: g(o, e => {
                            var t;
                            null === (t = C.trigger) || void 0 === t || t.focus({
                                preventScroll: !0
                            }),
                            e.preventDefault()
                        }
                        ),
                        children: (0,
                        v.jsx)(M, {
                            asChild: !0,
                            disableOutsidePointerEvents: !0,
                            onEscapeKeyDown: i,
                            onPointerDownOutside: l,
                            onFocusOutside: e => e.preventDefault(),
                            onDismiss: () => C.onOpenChange(!1),
                            children: (0,
                            v.jsx)(Q, {
                                role: "listbox",
                                id: C.contentId,
                                "data-state": C.open ? "open" : "closed",
                                dir: C.dir,
                                onContextMenu: e => e.preventDefault(),
                                ...E,
                                ...Z,
                                onPlaced: () => F(!0),
                                ref: j,
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    outline: "none",
                                    ...E.style
                                },
                                onKeyDown: g(E.onKeyDown, e => {
                                    let t = e.ctrlKey || e.altKey || e.metaKey;
                                    if ("Tab" === e.key && e.preventDefault(),
                                    t || 1 !== e.key.length || Y(e.key),
                                    ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                        let t = z().filter(e => !e.disabled).map(e => e.ref.current);
                                        if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()),
                                        ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                            let r = e.target
                                              , n = t.indexOf(r);
                                            t = t.slice(n + 1)
                                        }
                                        setTimeout( () => B(t)),
                                        e.preventDefault()
                                    }
                                }
                                )
                            })
                        })
                    })
                })
            })
        }
        );
        rR.displayName = "SelectContentImpl";
        var rM = f.forwardRef( (e, t) => {
            let {__scopeSelect: r, onPlaced: n, ...o} = e
              , i = rd(rx, r)
              , l = rS(rx, r)
              , [a,s] = f.useState(null)
              , [u,c] = f.useState(null)
              , d = (0,
            b.e)(t, e => c(e))
              , p = ri(r)
              , h = f.useRef(!1)
              , g = f.useRef(!0)
              , {viewport: y, selectedItem: w, selectedItemText: x, focusSelectedItem: C} = l
              , S = f.useCallback( () => {
                if (i.trigger && i.valueNode && a && u && y && w && x) {
                    let e = i.trigger.getBoundingClientRect()
                      , t = u.getBoundingClientRect()
                      , r = i.valueNode.getBoundingClientRect()
                      , o = x.getBoundingClientRect();
                    if ("rtl" !== i.dir) {
                        let n = o.left - t.left
                          , i = r.left - n
                          , l = e.left - i
                          , s = e.width + l
                          , u = Math.max(s, t.width)
                          , c = m(i, [10, Math.max(10, window.innerWidth - 10 - u)]);
                        a.style.minWidth = s + "px",
                        a.style.left = c + "px"
                    } else {
                        let n = t.right - o.right
                          , i = window.innerWidth - r.right - n
                          , l = window.innerWidth - e.right - i
                          , s = e.width + l
                          , u = Math.max(s, t.width)
                          , c = m(i, [10, Math.max(10, window.innerWidth - 10 - u)]);
                        a.style.minWidth = s + "px",
                        a.style.right = c + "px"
                    }
                    let l = p()
                      , s = window.innerHeight - 20
                      , c = y.scrollHeight
                      , d = window.getComputedStyle(u)
                      , f = parseInt(d.borderTopWidth, 10)
                      , g = parseInt(d.paddingTop, 10)
                      , v = parseInt(d.borderBottomWidth, 10)
                      , b = f + g + c + parseInt(d.paddingBottom, 10) + v
                      , E = Math.min(5 * w.offsetHeight, b)
                      , C = window.getComputedStyle(y)
                      , S = parseInt(C.paddingTop, 10)
                      , R = parseInt(C.paddingBottom, 10)
                      , M = e.top + e.height / 2 - 10
                      , P = w.offsetHeight / 2
                      , k = f + g + (w.offsetTop + P);
                    if (k <= M) {
                        let e = l.length > 0 && w === l[l.length - 1].ref.current;
                        a.style.bottom = "0px";
                        let t = u.clientHeight - y.offsetTop - y.offsetHeight;
                        a.style.height = k + Math.max(s - M, P + (e ? R : 0) + t + v) + "px"
                    } else {
                        let e = l.length > 0 && w === l[0].ref.current;
                        a.style.top = "0px";
                        let t = Math.max(M, f + y.offsetTop + (e ? S : 0) + P);
                        a.style.height = t + (b - k) + "px",
                        y.scrollTop = k - M + y.offsetTop
                    }
                    a.style.margin = "".concat(10, "px 0"),
                    a.style.minHeight = E + "px",
                    a.style.maxHeight = s + "px",
                    null == n || n(),
                    requestAnimationFrame( () => h.current = !0)
                }
            }
            , [p, i.trigger, i.valueNode, a, u, y, w, x, i.dir, n]);
            W( () => S(), [S]);
            let[R,M] = f.useState();
            W( () => {
                u && M(window.getComputedStyle(u).zIndex)
            }
            , [u]);
            let P = f.useCallback(e => {
                e && !0 === g.current && (S(),
                null == C || C(),
                g.current = !1)
            }
            , [S, C]);
            return (0,
            v.jsx)(rk, {
                scope: r,
                contentWrapper: a,
                shouldExpandOnScrollRef: h,
                onScrollButtonChange: P,
                children: (0,
                v.jsx)("div", {
                    ref: s,
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        position: "fixed",
                        zIndex: R
                    },
                    children: (0,
                    v.jsx)(E.WV.div, {
                        ...o,
                        ref: d,
                        style: {
                            boxSizing: "border-box",
                            maxHeight: "100%",
                            ...o.style
                        }
                    })
                })
            })
        }
        );
        rM.displayName = "SelectItemAlignedPosition";
        var rP = f.forwardRef( (e, t) => {
            let {__scopeSelect: r, align: n="start", collisionPadding: o=10, ...i} = e
              , l = ru(r);
            return (0,
            v.jsx)(tu, {
                ...l,
                ...i,
                ref: t,
                align: n,
                collisionPadding: o,
                style: {
                    boxSizing: "border-box",
                    ...i.style,
                    "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                }
            })
        }
        );
        rP.displayName = "SelectPopperPosition";
        var [rk,rA] = ra(rx, {})
          , rN = "SelectViewport"
          , rj = f.forwardRef( (e, t) => {
            let {__scopeSelect: r, nonce: n, ...o} = e
              , i = rS(rN, r)
              , l = rA(rN, r)
              , a = (0,
            b.e)(t, i.onViewportChange)
              , s = f.useRef(0);
            return (0,
            v.jsxs)(v.Fragment, {
                children: [(0,
                v.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                    },
                    nonce: n
                }), (0,
                v.jsx)(ro.Slot, {
                    scope: r,
                    children: (0,
                    v.jsx)(E.WV.div, {
                        "data-radix-select-viewport": "",
                        role: "presentation",
                        ...o,
                        ref: a,
                        style: {
                            position: "relative",
                            flex: 1,
                            overflow: "hidden auto",
                            ...o.style
                        },
                        onScroll: g(o.onScroll, e => {
                            let t = e.currentTarget
                              , {contentWrapper: r, shouldExpandOnScrollRef: n} = l;
                            if ((null == n ? void 0 : n.current) && r) {
                                let e = Math.abs(s.current - t.scrollTop);
                                if (e > 0) {
                                    let n = window.innerHeight - 20
                                      , o = Math.max(parseFloat(r.style.minHeight), parseFloat(r.style.height));
                                    if (o < n) {
                                        let i = o + e
                                          , l = Math.min(n, i)
                                          , a = i - l;
                                        r.style.height = l + "px",
                                        "0px" === r.style.bottom && (t.scrollTop = a > 0 ? a : 0,
                                        r.style.justifyContent = "flex-end")
                                    }
                                }
                            }
                            s.current = t.scrollTop
                        }
                        )
                    })
                })]
            })
        }
        );
        rj.displayName = rN;
        var rO = "SelectGroup"
          , [rL,rT] = ra(rO)
          , r_ = f.forwardRef( (e, t) => {
            let {__scopeSelect: r, ...n} = e
              , o = V();
            return (0,
            v.jsx)(rL, {
                scope: r,
                id: o,
                children: (0,
                v.jsx)(E.WV.div, {
                    role: "group",
                    "aria-labelledby": o,
                    ...n,
                    ref: t
                })
            })
        }
        );
        r_.displayName = rO;
        var rI = "SelectLabel"
          , rz = f.forwardRef( (e, t) => {
            let {__scopeSelect: r, ...n} = e
              , o = rT(rI, r);
            return (0,
            v.jsx)(E.WV.div, {
                id: o.id,
                ...n,
                ref: t
            })
        }
        );
        rz.displayName = rI;
        var rD = "SelectItem"
          , [rF,rW] = ra(rD)
          , rB = f.forwardRef( (e, t) => {
            let {__scopeSelect: r, value: n, disabled: o=!1, textValue: i, ...l} = e
              , a = rd(rD, r)
              , s = rS(rD, r)
              , u = a.value === n
              , [c,d] = f.useState(null != i ? i : "")
              , [p,h] = f.useState(!1)
              , m = (0,
            b.e)(t, e => {
                var t;
                return null === (t = s.itemRefCallback) || void 0 === t ? void 0 : t.call(s, e, n, o)
            }
            )
              , y = V()
              , w = f.useRef("touch")
              , x = () => {
                o || (a.onValueChange(n),
                a.onOpenChange(!1))
            }
            ;
            if ("" === n)
                throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
            return (0,
            v.jsx)(rF, {
                scope: r,
                value: n,
                disabled: o,
                textId: y,
                isSelected: u,
                onItemTextChange: f.useCallback(e => {
                    d(t => {
                        var r;
                        return t || (null !== (r = null == e ? void 0 : e.textContent) && void 0 !== r ? r : "").trim()
                    }
                    )
                }
                , []),
                children: (0,
                v.jsx)(ro.ItemSlot, {
                    scope: r,
                    value: n,
                    disabled: o,
                    textValue: c,
                    children: (0,
                    v.jsx)(E.WV.div, {
                        role: "option",
                        "aria-labelledby": y,
                        "data-highlighted": p ? "" : void 0,
                        "aria-selected": u && p,
                        "data-state": u ? "checked" : "unchecked",
                        "aria-disabled": o || void 0,
                        "data-disabled": o ? "" : void 0,
                        tabIndex: o ? void 0 : -1,
                        ...l,
                        ref: m,
                        onFocus: g(l.onFocus, () => h(!0)),
                        onBlur: g(l.onBlur, () => h(!1)),
                        onClick: g(l.onClick, () => {
                            "mouse" !== w.current && x()
                        }
                        ),
                        onPointerUp: g(l.onPointerUp, () => {
                            "mouse" === w.current && x()
                        }
                        ),
                        onPointerDown: g(l.onPointerDown, e => {
                            w.current = e.pointerType
                        }
                        ),
                        onPointerMove: g(l.onPointerMove, e => {
                            if (w.current = e.pointerType,
                            o) {
                                var t;
                                null === (t = s.onItemLeave) || void 0 === t || t.call(s)
                            } else
                                "mouse" === w.current && e.currentTarget.focus({
                                    preventScroll: !0
                                })
                        }
                        ),
                        onPointerLeave: g(l.onPointerLeave, e => {
                            if (e.currentTarget === document.activeElement) {
                                var t;
                                null === (t = s.onItemLeave) || void 0 === t || t.call(s)
                            }
                        }
                        ),
                        onKeyDown: g(l.onKeyDown, e => {
                            var t;
                            (null === (t = s.searchRef) || void 0 === t ? void 0 : t.current) !== "" && " " === e.key || (rr.includes(e.key) && x(),
                            " " === e.key && e.preventDefault())
                        }
                        )
                    })
                })
            })
        }
        );
        rB.displayName = rD;
        var rH = "SelectItemText"
          , rV = f.forwardRef( (e, t) => {
            let {__scopeSelect: r, className: n, style: o, ...i} = e
              , l = rd(rH, r)
              , a = rS(rH, r)
              , s = rW(rH, r)
              , u = rp(rH, r)
              , [c,d] = f.useState(null)
              , p = (0,
            b.e)(t, e => d(e), s.onItemTextChange, e => {
                var t;
                return null === (t = a.itemTextRefCallback) || void 0 === t ? void 0 : t.call(a, e, s.value, s.disabled)
            }
            )
              , m = null == c ? void 0 : c.textContent
              , g = f.useMemo( () => (0,
            v.jsx)("option", {
                value: s.value,
                disabled: s.disabled,
                children: m
            }, s.value), [s.disabled, s.value, m])
              , {onNativeOptionAdd: y, onNativeOptionRemove: w} = u;
            return W( () => (y(g),
            () => w(g)), [y, w, g]),
            (0,
            v.jsxs)(v.Fragment, {
                children: [(0,
                v.jsx)(E.WV.span, {
                    id: s.textId,
                    ...i,
                    ref: p
                }), s.isSelected && l.valueNode && !l.valueNodeHasChildren ? h.createPortal(i.children, l.valueNode) : null]
            })
        }
        );
        rV.displayName = rH;
        var rU = "SelectItemIndicator"
          , r$ = f.forwardRef( (e, t) => {
            let {__scopeSelect: r, ...n} = e;
            return rW(rU, r).isSelected ? (0,
            v.jsx)(E.WV.span, {
                "aria-hidden": !0,
                ...n,
                ref: t
            }) : null
        }
        );
        r$.displayName = rU;
        var rY = "SelectScrollUpButton"
          , rG = f.forwardRef( (e, t) => {
            let r = rS(rY, e.__scopeSelect)
              , n = rA(rY, e.__scopeSelect)
              , [o,i] = f.useState(!1)
              , l = (0,
            b.e)(t, n.onScrollButtonChange);
            return W( () => {
                if (r.viewport && r.isPositioned) {
                    let e = function() {
                        i(t.scrollTop > 0)
                    }
                      , t = r.viewport;
                    return e(),
                    t.addEventListener("scroll", e),
                    () => t.removeEventListener("scroll", e)
                }
            }
            , [r.viewport, r.isPositioned]),
            o ? (0,
            v.jsx)(rQ, {
                ...e,
                ref: l,
                onAutoScroll: () => {
                    let {viewport: e, selectedItem: t} = r;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                }
            }) : null
        }
        );
        rG.displayName = rY;
        var rK = "SelectScrollDownButton"
          , rX = f.forwardRef( (e, t) => {
            let r = rS(rK, e.__scopeSelect)
              , n = rA(rK, e.__scopeSelect)
              , [o,i] = f.useState(!1)
              , l = (0,
            b.e)(t, n.onScrollButtonChange);
            return W( () => {
                if (r.viewport && r.isPositioned) {
                    let e = function() {
                        let e = t.scrollHeight - t.clientHeight;
                        i(Math.ceil(t.scrollTop) < e)
                    }
                      , t = r.viewport;
                    return e(),
                    t.addEventListener("scroll", e),
                    () => t.removeEventListener("scroll", e)
                }
            }
            , [r.viewport, r.isPositioned]),
            o ? (0,
            v.jsx)(rQ, {
                ...e,
                ref: l,
                onAutoScroll: () => {
                    let {viewport: e, selectedItem: t} = r;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                }
            }) : null
        }
        );
        rX.displayName = rK;
        var rQ = f.forwardRef( (e, t) => {
            let {__scopeSelect: r, onAutoScroll: n, ...o} = e
              , i = rS("SelectScrollButton", r)
              , l = f.useRef(null)
              , a = ri(r)
              , s = f.useCallback( () => {
                null !== l.current && (window.clearInterval(l.current),
                l.current = null)
            }
            , []);
            return f.useEffect( () => () => s(), [s]),
            W( () => {
                var e;
                let t = a().find(e => e.ref.current === document.activeElement);
                null == t || null === (e = t.ref.current) || void 0 === e || e.scrollIntoView({
                    block: "nearest"
                })
            }
            , [a]),
            (0,
            v.jsx)(E.WV.div, {
                "aria-hidden": !0,
                ...o,
                ref: t,
                style: {
                    flexShrink: 0,
                    ...o.style
                },
                onPointerDown: g(o.onPointerDown, () => {
                    null === l.current && (l.current = window.setInterval(n, 50))
                }
                ),
                onPointerMove: g(o.onPointerMove, () => {
                    var e;
                    null === (e = i.onItemLeave) || void 0 === e || e.call(i),
                    null === l.current && (l.current = window.setInterval(n, 50))
                }
                ),
                onPointerLeave: g(o.onPointerLeave, () => {
                    s()
                }
                )
            })
        }
        )
          , rZ = f.forwardRef( (e, t) => {
            let {__scopeSelect: r, ...n} = e;
            return (0,
            v.jsx)(E.WV.div, {
                "aria-hidden": !0,
                ...n,
                ref: t
            })
        }
        );
        rZ.displayName = "SelectSeparator";
        var rq = "SelectArrow";
        function rJ(e) {
            return "" === e || void 0 === e
        }
        f.forwardRef( (e, t) => {
            let {__scopeSelect: r, ...n} = e
              , o = ru(r)
              , i = rd(rq, r)
              , l = rS(rq, r);
            return i.open && "popper" === l.position ? (0,
            v.jsx)(tf, {
                ...o,
                ...n,
                ref: t
            }) : null
        }
        ).displayName = rq;
        var r0 = f.forwardRef( (e, t) => {
            let {value: r, ...n} = e
              , o = f.useRef(null)
              , i = (0,
            b.e)(t, o)
              , l = function(e) {
                let t = f.useRef({
                    value: e,
                    previous: e
                });
                return f.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
                t.current.value = e),
                t.current.previous), [e])
            }(r);
            return f.useEffect( () => {
                let e = o.current
                  , t = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
                if (l !== r && t) {
                    let n = new Event("change",{
                        bubbles: !0
                    });
                    t.call(e, r),
                    e.dispatchEvent(n)
                }
            }
            , [l, r]),
            (0,
            v.jsx)(ty, {
                asChild: !0,
                children: (0,
                v.jsx)("select", {
                    ...n,
                    ref: i,
                    defaultValue: r
                })
            })
        }
        );
        function r1(e) {
            let t = C(e)
              , r = f.useRef("")
              , n = f.useRef(0)
              , o = f.useCallback(e => {
                let o = r.current + e;
                t(o),
                function e(t) {
                    r.current = t,
                    window.clearTimeout(n.current),
                    "" !== t && (n.current = window.setTimeout( () => e(""), 1e3))
                }(o)
            }
            , [t])
              , i = f.useCallback( () => {
                r.current = "",
                window.clearTimeout(n.current)
            }
            , []);
            return f.useEffect( () => () => window.clearTimeout(n.current), []),
            [r, o, i]
        }
        function r2(e, t, r) {
            var n;
            let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t
              , i = (n = Math.max(r ? e.indexOf(r) : -1, 0),
            e.map( (t, r) => e[(n + r) % e.length]));
            1 === o.length && (i = i.filter(e => e !== r));
            let l = i.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
            return l !== r ? l : void 0
        }
        r0.displayName = "BubbleSelect";
        var r3 = rh
          , r8 = rg
          , r4 = ry
          , r5 = rb
          , r6 = rw
          , r7 = rE
          , r9 = rj
          , ne = r_
          , nt = rz
          , nr = rB
          , nn = rV
          , no = r$
          , ni = rG
          , nl = rX
          , na = rZ
    },
    7053: function(e, t, r) {
        r.d(t, {
            g7: function() {
                return l
            }
        });
        var n = r(2265)
          , o = r(8575)
          , i = r(7437)
          , l = n.forwardRef( (e, t) => {
            let {children: r, ...o} = e
              , l = n.Children.toArray(r)
              , s = l.find(u);
            if (s) {
                let e = s.props.children
                  , r = l.map(t => t !== s ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
                return (0,
                i.jsx)(a, {
                    ...o,
                    ref: t,
                    children: n.isValidElement(e) ? n.cloneElement(e, void 0, r) : null
                })
            }
            return (0,
            i.jsx)(a, {
                ...o,
                ref: t,
                children: r
            })
        }
        );
        l.displayName = "Slot";
        var a = n.forwardRef( (e, t) => {
            let {children: r, ...i} = e;
            if (n.isValidElement(r)) {
                let e, l;
                let a = (e = Object.getOwnPropertyDescriptor(r.props, "ref")?.get) && "isReactWarning"in e && e.isReactWarning ? r.ref : (e = Object.getOwnPropertyDescriptor(r, "ref")?.get) && "isReactWarning"in e && e.isReactWarning ? r.props.ref : r.props.ref || r.ref;
                return n.cloneElement(r, {
                    ...function(e, t) {
                        let r = {
                            ...t
                        };
                        for (let n in t) {
                            let o = e[n]
                              , i = t[n];
                            /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                                i(...e),
                                o(...e)
                            }
                            : o && (r[n] = o) : "style" === n ? r[n] = {
                                ...o,
                                ...i
                            } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                        }
                        return {
                            ...e,
                            ...r
                        }
                    }(i, r.props),
                    ref: t ? (0,
                    o.F)(t, a) : a
                })
            }
            return n.Children.count(r) > 1 ? n.Children.only(null) : null
        }
        );
        a.displayName = "SlotClone";
        var s = ({children: e}) => (0,
        i.jsx)(i.Fragment, {
            children: e
        });
        function u(e) {
            return n.isValidElement(e) && e.type === s
        }
    },
    535: function(e, t, r) {
        r.d(t, {
            j: function() {
                return l
            }
        });
        var n = r(1994);
        let o = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e
          , i = n.W
          , l = (e, t) => r => {
            var n;
            if ((null == t ? void 0 : t.variants) == null)
                return i(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
            let {variants: l, defaultVariants: a} = t
              , s = Object.keys(l).map(e => {
                let t = null == r ? void 0 : r[e]
                  , n = null == a ? void 0 : a[e];
                if (null === t)
                    return null;
                let i = o(t) || o(n);
                return l[e][i]
            }
            )
              , u = r && Object.entries(r).reduce( (e, t) => {
                let[r,n] = t;
                return void 0 === n || (e[r] = n),
                e
            }
            , {});
            return i(e, s, null == t ? void 0 : null === (n = t.compoundVariants) || void 0 === n ? void 0 : n.reduce( (e, t) => {
                let {class: r, className: n, ...o} = t;
                return Object.entries(o).every(e => {
                    let[t,r] = e;
                    return Array.isArray(r) ? r.includes({
                        ...a,
                        ...u
                    }[t]) : ({
                        ...a,
                        ...u
                    })[t] === r
                }
                ) ? [...e, r, n] : e
            }
            , []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
        }
    },
    1994: function(e, t, r) {
        r.d(t, {
            W: function() {
                return n
            }
        });
        function n() {
            for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
                (e = arguments[r]) && (t = function e(t) {
                    var r, n, o = "";
                    if ("string" == typeof t || "number" == typeof t)
                        o += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var i = t.length;
                            for (r = 0; r < i; r++)
                                t[r] && (n = e(t[r])) && (o && (o += " "),
                                o += n)
                        } else
                            for (n in t)
                                t[n] && (o && (o += " "),
                                o += n)
                    }
                    return o
                }(e)) && (n && (n += " "),
                n += t);
            return n
        }
    },
    5398: function(e, t, r) {
        r.d(t, {
            t: function() {
                return E
            }
        });
        var n, o, i, l = r(2265), a = Object.defineProperty, s = Object.getOwnPropertySymbols, u = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable, d = (e, t, r) => t in e ? a(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r, f = (e, t) => {
            for (var r in t || (t = {}))
                u.call(t, r) && d(e, r, t[r]);
            if (s)
                for (var r of s(t))
                    c.call(t, r) && d(e, r, t[r]);
            return e
        }
        , p = (e, t) => {
            var r = {};
            for (var n in e)
                u.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
            if (null != e && s)
                for (var n of s(e))
                    0 > t.indexOf(n) && c.call(e, n) && (r[n] = e[n]);
            return r
        }
        ;
        (e => {
            let t = class t {
                constructor(e, r, n, i) {
                    if (this.version = e,
                    this.errorCorrectionLevel = r,
                    this.modules = [],
                    this.isFunction = [],
                    e < t.MIN_VERSION || e > t.MAX_VERSION)
                        throw RangeError("Version value out of range");
                    if (i < -1 || i > 7)
                        throw RangeError("Mask value out of range");
                    this.size = 4 * e + 17;
                    let l = [];
                    for (let e = 0; e < this.size; e++)
                        l.push(!1);
                    for (let e = 0; e < this.size; e++)
                        this.modules.push(l.slice()),
                        this.isFunction.push(l.slice());
                    this.drawFunctionPatterns();
                    let a = this.addEccAndInterleave(n);
                    if (this.drawCodewords(a),
                    -1 == i) {
                        let e = 1e9;
                        for (let t = 0; t < 8; t++) {
                            this.applyMask(t),
                            this.drawFormatBits(t);
                            let r = this.getPenaltyScore();
                            r < e && (i = t,
                            e = r),
                            this.applyMask(t)
                        }
                    }
                    o(0 <= i && i <= 7),
                    this.mask = i,
                    this.applyMask(i),
                    this.drawFormatBits(i),
                    this.isFunction = []
                }
                static encodeText(r, n) {
                    let o = e.QrSegment.makeSegments(r);
                    return t.encodeSegments(o, n)
                }
                static encodeBinary(r, n) {
                    let o = e.QrSegment.makeBytes(r);
                    return t.encodeSegments([o], n)
                }
                static encodeSegments(e, n, i=1, a=40, s=-1, u=!0) {
                    let c, d;
                    if (!(t.MIN_VERSION <= i && i <= a && a <= t.MAX_VERSION) || s < -1 || s > 7)
                        throw RangeError("Invalid value");
                    for (c = i; ; c++) {
                        let r = 8 * t.getNumDataCodewords(c, n)
                          , o = l.getTotalBits(e, c);
                        if (o <= r) {
                            d = o;
                            break
                        }
                        if (c >= a)
                            throw RangeError("Data too long")
                    }
                    for (let e of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
                        u && d <= 8 * t.getNumDataCodewords(c, e) && (n = e);
                    let f = [];
                    for (let t of e)
                        for (let e of (r(t.mode.modeBits, 4, f),
                        r(t.numChars, t.mode.numCharCountBits(c), f),
                        t.getData()))
                            f.push(e);
                    o(f.length == d);
                    let p = 8 * t.getNumDataCodewords(c, n);
                    o(f.length <= p),
                    r(0, Math.min(4, p - f.length), f),
                    r(0, (8 - f.length % 8) % 8, f),
                    o(f.length % 8 == 0);
                    for (let e = 236; f.length < p; e ^= 253)
                        r(e, 8, f);
                    let h = [];
                    for (; 8 * h.length < f.length; )
                        h.push(0);
                    return f.forEach( (e, t) => h[t >>> 3] |= e << 7 - (7 & t)),
                    new t(c,n,h,s)
                }
                getModule(e, t) {
                    return 0 <= e && e < this.size && 0 <= t && t < this.size && this.modules[t][e]
                }
                getModules() {
                    return this.modules
                }
                drawFunctionPatterns() {
                    for (let e = 0; e < this.size; e++)
                        this.setFunctionModule(6, e, e % 2 == 0),
                        this.setFunctionModule(e, 6, e % 2 == 0);
                    this.drawFinderPattern(3, 3),
                    this.drawFinderPattern(this.size - 4, 3),
                    this.drawFinderPattern(3, this.size - 4);
                    let e = this.getAlignmentPatternPositions()
                      , t = e.length;
                    for (let r = 0; r < t; r++)
                        for (let n = 0; n < t; n++)
                            0 == r && 0 == n || 0 == r && n == t - 1 || r == t - 1 && 0 == n || this.drawAlignmentPattern(e[r], e[n]);
                    this.drawFormatBits(0),
                    this.drawVersion()
                }
                drawFormatBits(e) {
                    let t = this.errorCorrectionLevel.formatBits << 3 | e
                      , r = t;
                    for (let e = 0; e < 10; e++)
                        r = r << 1 ^ (r >>> 9) * 1335;
                    let i = (t << 10 | r) ^ 21522;
                    o(i >>> 15 == 0);
                    for (let e = 0; e <= 5; e++)
                        this.setFunctionModule(8, e, n(i, e));
                    this.setFunctionModule(8, 7, n(i, 6)),
                    this.setFunctionModule(8, 8, n(i, 7)),
                    this.setFunctionModule(7, 8, n(i, 8));
                    for (let e = 9; e < 15; e++)
                        this.setFunctionModule(14 - e, 8, n(i, e));
                    for (let e = 0; e < 8; e++)
                        this.setFunctionModule(this.size - 1 - e, 8, n(i, e));
                    for (let e = 8; e < 15; e++)
                        this.setFunctionModule(8, this.size - 15 + e, n(i, e));
                    this.setFunctionModule(8, this.size - 8, !0)
                }
                drawVersion() {
                    if (this.version < 7)
                        return;
                    let e = this.version;
                    for (let t = 0; t < 12; t++)
                        e = e << 1 ^ (e >>> 11) * 7973;
                    let t = this.version << 12 | e;
                    o(t >>> 18 == 0);
                    for (let e = 0; e < 18; e++) {
                        let r = n(t, e)
                          , o = this.size - 11 + e % 3
                          , i = Math.floor(e / 3);
                        this.setFunctionModule(o, i, r),
                        this.setFunctionModule(i, o, r)
                    }
                }
                drawFinderPattern(e, t) {
                    for (let r = -4; r <= 4; r++)
                        for (let n = -4; n <= 4; n++) {
                            let o = Math.max(Math.abs(n), Math.abs(r))
                              , i = e + n
                              , l = t + r;
                            0 <= i && i < this.size && 0 <= l && l < this.size && this.setFunctionModule(i, l, 2 != o && 4 != o)
                        }
                }
                drawAlignmentPattern(e, t) {
                    for (let r = -2; r <= 2; r++)
                        for (let n = -2; n <= 2; n++)
                            this.setFunctionModule(e + n, t + r, 1 != Math.max(Math.abs(n), Math.abs(r)))
                }
                setFunctionModule(e, t, r) {
                    this.modules[t][e] = r,
                    this.isFunction[t][e] = !0
                }
                addEccAndInterleave(e) {
                    let r = this.version
                      , n = this.errorCorrectionLevel;
                    if (e.length != t.getNumDataCodewords(r, n))
                        throw RangeError("Invalid argument");
                    let i = t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][r]
                      , l = t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][r]
                      , a = Math.floor(t.getNumRawDataModules(r) / 8)
                      , s = i - a % i
                      , u = Math.floor(a / i)
                      , c = []
                      , d = t.reedSolomonComputeDivisor(l);
                    for (let r = 0, n = 0; r < i; r++) {
                        let o = e.slice(n, n + u - l + (r < s ? 0 : 1));
                        n += o.length;
                        let i = t.reedSolomonComputeRemainder(o, d);
                        r < s && o.push(0),
                        c.push(o.concat(i))
                    }
                    let f = [];
                    for (let e = 0; e < c[0].length; e++)
                        c.forEach( (t, r) => {
                            (e != u - l || r >= s) && f.push(t[e])
                        }
                        );
                    return o(f.length == a),
                    f
                }
                drawCodewords(e) {
                    if (e.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
                        throw RangeError("Invalid argument");
                    let r = 0;
                    for (let t = this.size - 1; t >= 1; t -= 2) {
                        6 == t && (t = 5);
                        for (let o = 0; o < this.size; o++)
                            for (let i = 0; i < 2; i++) {
                                let l = t - i
                                  , a = (t + 1 & 2) == 0 ? this.size - 1 - o : o;
                                !this.isFunction[a][l] && r < 8 * e.length && (this.modules[a][l] = n(e[r >>> 3], 7 - (7 & r)),
                                r++)
                            }
                    }
                    o(r == 8 * e.length)
                }
                applyMask(e) {
                    if (e < 0 || e > 7)
                        throw RangeError("Mask value out of range");
                    for (let t = 0; t < this.size; t++)
                        for (let r = 0; r < this.size; r++) {
                            let n;
                            switch (e) {
                            case 0:
                                n = (r + t) % 2 == 0;
                                break;
                            case 1:
                                n = t % 2 == 0;
                                break;
                            case 2:
                                n = r % 3 == 0;
                                break;
                            case 3:
                                n = (r + t) % 3 == 0;
                                break;
                            case 4:
                                n = (Math.floor(r / 3) + Math.floor(t / 2)) % 2 == 0;
                                break;
                            case 5:
                                n = r * t % 2 + r * t % 3 == 0;
                                break;
                            case 6:
                                n = (r * t % 2 + r * t % 3) % 2 == 0;
                                break;
                            case 7:
                                n = ((r + t) % 2 + r * t % 3) % 2 == 0;
                                break;
                            default:
                                throw Error("Unreachable")
                            }
                            !this.isFunction[t][r] && n && (this.modules[t][r] = !this.modules[t][r])
                        }
                }
                getPenaltyScore() {
                    let e = 0;
                    for (let r = 0; r < this.size; r++) {
                        let n = !1
                          , o = 0
                          , i = [0, 0, 0, 0, 0, 0, 0];
                        for (let l = 0; l < this.size; l++)
                            this.modules[r][l] == n ? 5 == ++o ? e += t.PENALTY_N1 : o > 5 && e++ : (this.finderPenaltyAddHistory(o, i),
                            n || (e += this.finderPenaltyCountPatterns(i) * t.PENALTY_N3),
                            n = this.modules[r][l],
                            o = 1);
                        e += this.finderPenaltyTerminateAndCount(n, o, i) * t.PENALTY_N3
                    }
                    for (let r = 0; r < this.size; r++) {
                        let n = !1
                          , o = 0
                          , i = [0, 0, 0, 0, 0, 0, 0];
                        for (let l = 0; l < this.size; l++)
                            this.modules[l][r] == n ? 5 == ++o ? e += t.PENALTY_N1 : o > 5 && e++ : (this.finderPenaltyAddHistory(o, i),
                            n || (e += this.finderPenaltyCountPatterns(i) * t.PENALTY_N3),
                            n = this.modules[l][r],
                            o = 1);
                        e += this.finderPenaltyTerminateAndCount(n, o, i) * t.PENALTY_N3
                    }
                    for (let r = 0; r < this.size - 1; r++)
                        for (let n = 0; n < this.size - 1; n++) {
                            let o = this.modules[r][n];
                            o == this.modules[r][n + 1] && o == this.modules[r + 1][n] && o == this.modules[r + 1][n + 1] && (e += t.PENALTY_N2)
                        }
                    let r = 0;
                    for (let e of this.modules)
                        r = e.reduce( (e, t) => e + (t ? 1 : 0), r);
                    let n = this.size * this.size
                      , i = Math.ceil(Math.abs(20 * r - 10 * n) / n) - 1;
                    return o(0 <= i && i <= 9),
                    o(0 <= (e += i * t.PENALTY_N4) && e <= 2568888),
                    e
                }
                getAlignmentPatternPositions() {
                    if (1 == this.version)
                        return [];
                    {
                        let e = Math.floor(this.version / 7) + 2
                          , t = 32 == this.version ? 26 : 2 * Math.ceil((4 * this.version + 4) / (2 * e - 2))
                          , r = [6];
                        for (let n = this.size - 7; r.length < e; n -= t)
                            r.splice(1, 0, n);
                        return r
                    }
                }
                static getNumRawDataModules(e) {
                    if (e < t.MIN_VERSION || e > t.MAX_VERSION)
                        throw RangeError("Version number out of range");
                    let r = (16 * e + 128) * e + 64;
                    if (e >= 2) {
                        let t = Math.floor(e / 7) + 2;
                        r -= (25 * t - 10) * t - 55,
                        e >= 7 && (r -= 36)
                    }
                    return o(208 <= r && r <= 29648),
                    r
                }
                static getNumDataCodewords(e, r) {
                    return Math.floor(t.getNumRawDataModules(e) / 8) - t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e] * t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]
                }
                static reedSolomonComputeDivisor(e) {
                    if (e < 1 || e > 255)
                        throw RangeError("Degree out of range");
                    let r = [];
                    for (let t = 0; t < e - 1; t++)
                        r.push(0);
                    r.push(1);
                    let n = 1;
                    for (let o = 0; o < e; o++) {
                        for (let e = 0; e < r.length; e++)
                            r[e] = t.reedSolomonMultiply(r[e], n),
                            e + 1 < r.length && (r[e] ^= r[e + 1]);
                        n = t.reedSolomonMultiply(n, 2)
                    }
                    return r
                }
                static reedSolomonComputeRemainder(e, r) {
                    let n = r.map(e => 0);
                    for (let o of e) {
                        let e = o ^ n.shift();
                        n.push(0),
                        r.forEach( (r, o) => n[o] ^= t.reedSolomonMultiply(r, e))
                    }
                    return n
                }
                static reedSolomonMultiply(e, t) {
                    if (e >>> 8 != 0 || t >>> 8 != 0)
                        throw RangeError("Byte out of range");
                    let r = 0;
                    for (let n = 7; n >= 0; n--)
                        r = r << 1 ^ (r >>> 7) * 285 ^ (t >>> n & 1) * e;
                    return o(r >>> 8 == 0),
                    r
                }
                finderPenaltyCountPatterns(e) {
                    let t = e[1];
                    o(t <= 3 * this.size);
                    let r = t > 0 && e[2] == t && e[3] == 3 * t && e[4] == t && e[5] == t;
                    return (r && e[0] >= 4 * t && e[6] >= t ? 1 : 0) + (r && e[6] >= 4 * t && e[0] >= t ? 1 : 0)
                }
                finderPenaltyTerminateAndCount(e, t, r) {
                    return e && (this.finderPenaltyAddHistory(t, r),
                    t = 0),
                    t += this.size,
                    this.finderPenaltyAddHistory(t, r),
                    this.finderPenaltyCountPatterns(r)
                }
                finderPenaltyAddHistory(e, t) {
                    0 == t[0] && (e += this.size),
                    t.pop(),
                    t.unshift(e)
                }
            }
            ;
            function r(e, t, r) {
                if (t < 0 || t > 31 || e >>> t != 0)
                    throw RangeError("Value out of range");
                for (let n = t - 1; n >= 0; n--)
                    r.push(e >>> n & 1)
            }
            function n(e, t) {
                return (e >>> t & 1) != 0
            }
            function o(e) {
                if (!e)
                    throw Error("Assertion error")
            }
            t.MIN_VERSION = 1,
            t.MAX_VERSION = 40,
            t.PENALTY_N1 = 3,
            t.PENALTY_N2 = 3,
            t.PENALTY_N3 = 40,
            t.PENALTY_N4 = 10,
            t.ECC_CODEWORDS_PER_BLOCK = [[-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]],
            t.NUM_ERROR_CORRECTION_BLOCKS = [[-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25], [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49], [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68], [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]],
            e.QrCode = t;
            let i = class e {
                constructor(e, t, r) {
                    if (this.mode = e,
                    this.numChars = t,
                    this.bitData = r,
                    t < 0)
                        throw RangeError("Invalid argument");
                    this.bitData = r.slice()
                }
                static makeBytes(t) {
                    let n = [];
                    for (let e of t)
                        r(e, 8, n);
                    return new e(e.Mode.BYTE,t.length,n)
                }
                static makeNumeric(t) {
                    if (!e.isNumeric(t))
                        throw RangeError("String contains non-numeric characters");
                    let n = [];
                    for (let e = 0; e < t.length; ) {
                        let o = Math.min(t.length - e, 3);
                        r(parseInt(t.substring(e, e + o), 10), 3 * o + 1, n),
                        e += o
                    }
                    return new e(e.Mode.NUMERIC,t.length,n)
                }
                static makeAlphanumeric(t) {
                    let n;
                    if (!e.isAlphanumeric(t))
                        throw RangeError("String contains unencodable characters in alphanumeric mode");
                    let o = [];
                    for (n = 0; n + 2 <= t.length; n += 2) {
                        let i = 45 * e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n));
                        r(i += e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n + 1)), 11, o)
                    }
                    return n < t.length && r(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n)), 6, o),
                    new e(e.Mode.ALPHANUMERIC,t.length,o)
                }
                static makeSegments(t) {
                    return "" == t ? [] : e.isNumeric(t) ? [e.makeNumeric(t)] : e.isAlphanumeric(t) ? [e.makeAlphanumeric(t)] : [e.makeBytes(e.toUtf8ByteArray(t))]
                }
                static makeEci(t) {
                    let n = [];
                    if (t < 0)
                        throw RangeError("ECI assignment value out of range");
                    if (t < 128)
                        r(t, 8, n);
                    else if (t < 16384)
                        r(2, 2, n),
                        r(t, 14, n);
                    else if (t < 1e6)
                        r(6, 3, n),
                        r(t, 21, n);
                    else
                        throw RangeError("ECI assignment value out of range");
                    return new e(e.Mode.ECI,0,n)
                }
                static isNumeric(t) {
                    return e.NUMERIC_REGEX.test(t)
                }
                static isAlphanumeric(t) {
                    return e.ALPHANUMERIC_REGEX.test(t)
                }
                getData() {
                    return this.bitData.slice()
                }
                static getTotalBits(e, t) {
                    let r = 0;
                    for (let n of e) {
                        let e = n.mode.numCharCountBits(t);
                        if (n.numChars >= 1 << e)
                            return 1 / 0;
                        r += 4 + e + n.bitData.length
                    }
                    return r
                }
                static toUtf8ByteArray(e) {
                    e = encodeURI(e);
                    let t = [];
                    for (let r = 0; r < e.length; r++)
                        "%" != e.charAt(r) ? t.push(e.charCodeAt(r)) : (t.push(parseInt(e.substring(r + 1, r + 3), 16)),
                        r += 2);
                    return t
                }
            }
            ;
            i.NUMERIC_REGEX = /^[0-9]*$/,
            i.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/,
            i.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
            let l = i;
            e.QrSegment = i
        }
        )(i || (i = {})),
        (e => {
            let t = class {
                constructor(e, t) {
                    this.ordinal = e,
                    this.formatBits = t
                }
            }
            ;
            t.LOW = new t(0,1),
            t.MEDIUM = new t(1,0),
            t.QUARTILE = new t(2,3),
            t.HIGH = new t(3,2),
            e.Ecc = t
        }
        )((n = i || (i = {})).QrCode || (n.QrCode = {})),
        (e => {
            let t = class {
                constructor(e, t) {
                    this.modeBits = e,
                    this.numBitsCharCount = t
                }
                numCharCountBits(e) {
                    return this.numBitsCharCount[Math.floor((e + 7) / 17)]
                }
            }
            ;
            t.NUMERIC = new t(1,[10, 12, 14]),
            t.ALPHANUMERIC = new t(2,[9, 11, 13]),
            t.BYTE = new t(4,[8, 16, 16]),
            t.KANJI = new t(8,[8, 10, 12]),
            t.ECI = new t(7,[0, 0, 0]),
            e.Mode = t
        }
        )((o = i || (i = {})).QrSegment || (o.QrSegment = {}));
        var h = i
          , m = {
            L: h.QrCode.Ecc.LOW,
            M: h.QrCode.Ecc.MEDIUM,
            Q: h.QrCode.Ecc.QUARTILE,
            H: h.QrCode.Ecc.HIGH
        }
          , g = "#FFFFFF"
          , v = "#000000";
        function y(e, t=0) {
            let r = [];
            return e.forEach(function(e, n) {
                let o = null;
                e.forEach(function(i, l) {
                    if (!i && null !== o) {
                        r.push(`M${o + t} ${n + t}h${l - o}v1H${o + t}z`),
                        o = null;
                        return
                    }
                    if (l === e.length - 1) {
                        if (!i)
                            return;
                        null === o ? r.push(`M${l + t},${n + t} h1v1H${l + t}z`) : r.push(`M${o + t},${n + t} h${l + 1 - o}v1H${o + t}z`);
                        return
                    }
                    i && null === o && (o = l)
                })
            }),
            r.join("")
        }
        function b(e, t) {
            return e.slice().map( (e, r) => r < t.y || r >= t.y + t.h ? e : e.map( (e, r) => (r < t.x || r >= t.x + t.w) && e))
        }
        function w({value: e, level: t, minVersion: r, includeMargin: n, marginSize: o, imageSettings: i, size: a, boostLevel: s}) {
            let u = l.useMemo( () => {
                let n = (Array.isArray(e) ? e : [e]).reduce( (e, t) => (e.push(...h.QrSegment.makeSegments(t)),
                e), []);
                return h.QrCode.encodeSegments(n, m[t], r, void 0, void 0, s)
            }
            , [e, t, r, s])
              , {cells: c, margin: d, numCells: f, calculatedImageSettings: p} = l.useMemo( () => {
                let e = u.getModules()
                  , t = null != o ? Math.max(Math.floor(o), 0) : n ? 4 : 0
                  , r = e.length + 2 * t
                  , l = function(e, t, r, n) {
                    if (null == n)
                        return null;
                    let o = e.length + 2 * r
                      , i = Math.floor(.1 * t)
                      , l = o / t
                      , a = (n.width || i) * l
                      , s = (n.height || i) * l
                      , u = null == n.x ? e.length / 2 - a / 2 : n.x * l
                      , c = null == n.y ? e.length / 2 - s / 2 : n.y * l
                      , d = null == n.opacity ? 1 : n.opacity
                      , f = null;
                    if (n.excavate) {
                        let e = Math.floor(u)
                          , t = Math.floor(c);
                        f = {
                            x: e,
                            y: t,
                            w: Math.ceil(a + u - e),
                            h: Math.ceil(s + c - t)
                        }
                    }
                    return {
                        x: u,
                        y: c,
                        h: s,
                        w: a,
                        excavation: f,
                        opacity: d,
                        crossOrigin: n.crossOrigin
                    }
                }(e, a, t, i);
                return {
                    cells: e,
                    margin: t,
                    numCells: r,
                    calculatedImageSettings: l
                }
            }
            , [u, a, i, n, o]);
            return {
                qrcode: u,
                margin: d,
                cells: c,
                numCells: f,
                calculatedImageSettings: p
            }
        }
        var x = function() {
            try {
                new Path2D().addPath(new Path2D)
            } catch (e) {
                return !1
            }
            return !0
        }();
        l.forwardRef(function(e, t) {
            let {value: r, size: n=128, level: o="L", bgColor: i=g, fgColor: a=v, includeMargin: s=!1, minVersion: u=1, boostLevel: c, marginSize: d, imageSettings: h} = e
              , m = p(e, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "minVersion", "boostLevel", "marginSize", "imageSettings"])
              , {style: E} = m
              , C = p(m, ["style"])
              , S = null == h ? void 0 : h.src
              , R = l.useRef(null)
              , M = l.useRef(null)
              , P = l.useCallback(e => {
                R.current = e,
                "function" == typeof t ? t(e) : t && (t.current = e)
            }
            , [t])
              , [k,A] = l.useState(!1)
              , {margin: N, cells: j, numCells: O, calculatedImageSettings: L} = w({
                value: r,
                level: o,
                minVersion: u,
                boostLevel: c,
                includeMargin: s,
                marginSize: d,
                imageSettings: h,
                size: n
            });
            l.useEffect( () => {
                if (null != R.current) {
                    let e = R.current
                      , t = e.getContext("2d");
                    if (!t)
                        return;
                    let r = j
                      , o = M.current
                      , l = null != L && null !== o && o.complete && 0 !== o.naturalHeight && 0 !== o.naturalWidth;
                    l && null != L.excavation && (r = b(j, L.excavation));
                    let s = window.devicePixelRatio || 1;
                    e.height = e.width = n * s;
                    let u = n / O * s;
                    t.scale(u, u),
                    t.fillStyle = i,
                    t.fillRect(0, 0, O, O),
                    t.fillStyle = a,
                    x ? t.fill(new Path2D(y(r, N))) : j.forEach(function(e, r) {
                        e.forEach(function(e, n) {
                            e && t.fillRect(n + N, r + N, 1, 1)
                        })
                    }),
                    L && (t.globalAlpha = L.opacity),
                    l && t.drawImage(o, L.x + N, L.y + N, L.w, L.h)
                }
            }
            ),
            l.useEffect( () => {
                A(!1)
            }
            , [S]);
            let T = f({
                height: n,
                width: n
            }, E)
              , _ = null;
            return null != S && (_ = l.createElement("img", {
                src: S,
                key: S,
                style: {
                    display: "none"
                },
                onLoad: () => {
                    A(!0)
                }
                ,
                ref: M,
                crossOrigin: null == L ? void 0 : L.crossOrigin
            })),
            l.createElement(l.Fragment, null, l.createElement("canvas", f({
                style: T,
                height: n,
                width: n,
                ref: P,
                role: "img"
            }, C)), _)
        }).displayName = "QRCodeCanvas";
        var E = l.forwardRef(function(e, t) {
            let {value: r, size: n=128, level: o="L", bgColor: i=g, fgColor: a=v, includeMargin: s=!1, minVersion: u=1, boostLevel: c, title: d, marginSize: h, imageSettings: m} = e
              , x = p(e, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "minVersion", "boostLevel", "title", "marginSize", "imageSettings"])
              , {margin: E, cells: C, numCells: S, calculatedImageSettings: R} = w({
                value: r,
                level: o,
                minVersion: u,
                boostLevel: c,
                includeMargin: s,
                marginSize: h,
                imageSettings: m,
                size: n
            })
              , M = C
              , P = null;
            null != m && null != R && (null != R.excavation && (M = b(C, R.excavation)),
            P = l.createElement("image", {
                href: m.src,
                height: R.h,
                width: R.w,
                x: R.x + E,
                y: R.y + E,
                preserveAspectRatio: "none",
                opacity: R.opacity,
                crossOrigin: R.crossOrigin
            }));
            let k = y(M, E);
            return l.createElement("svg", f({
                height: n,
                width: n,
                viewBox: `0 0 ${S} ${S}`,
                ref: t,
                role: "img"
            }, x), !!d && l.createElement("title", null, d), l.createElement("path", {
                fill: i,
                d: `M0,0 h${S}v${S}H0z`,
                shapeRendering: "crispEdges"
            }), l.createElement("path", {
                fill: a,
                d: k,
                shapeRendering: "crispEdges"
            }), P)
        });
        E.displayName = "QRCodeSVG"
    },
    3335: function(e, t, r) {
        r.d(t, {
            m6: function() {
                return X
            }
        });
        let n = e => {
            let t = a(e)
              , {conflictingClassGroups: r, conflictingClassGroupModifiers: n} = e;
            return {
                getClassGroupId: e => {
                    let r = e.split("-");
                    return "" === r[0] && 1 !== r.length && r.shift(),
                    o(r, t) || l(e)
                }
                ,
                getConflictingClassGroupIds: (e, t) => {
                    let o = r[e] || [];
                    return t && n[e] ? [...o, ...n[e]] : o
                }
            }
        }
          , o = (e, t) => {
            if (0 === e.length)
                return t.classGroupId;
            let r = e[0]
              , n = t.nextPart.get(r)
              , i = n ? o(e.slice(1), n) : void 0;
            if (i)
                return i;
            if (0 === t.validators.length)
                return;
            let l = e.join("-");
            return t.validators.find( ({validator: e}) => e(l))?.classGroupId
        }
          , i = /^\[(.+)\]$/
          , l = e => {
            if (i.test(e)) {
                let t = i.exec(e)[1]
                  , r = t?.substring(0, t.indexOf(":"));
                if (r)
                    return "arbitrary.." + r
            }
        }
          , a = e => {
            let {theme: t, prefix: r} = e
              , n = {
                nextPart: new Map,
                validators: []
            };
            return d(Object.entries(e.classGroups), r).forEach( ([e,r]) => {
                s(r, n, e, t)
            }
            ),
            n
        }
          , s = (e, t, r, n) => {
            e.forEach(e => {
                if ("string" == typeof e) {
                    ("" === e ? t : u(t, e)).classGroupId = r;
                    return
                }
                if ("function" == typeof e) {
                    if (c(e)) {
                        s(e(n), t, r, n);
                        return
                    }
                    t.validators.push({
                        validator: e,
                        classGroupId: r
                    });
                    return
                }
                Object.entries(e).forEach( ([e,o]) => {
                    s(o, u(t, e), r, n)
                }
                )
            }
            )
        }
          , u = (e, t) => {
            let r = e;
            return t.split("-").forEach(e => {
                r.nextPart.has(e) || r.nextPart.set(e, {
                    nextPart: new Map,
                    validators: []
                }),
                r = r.nextPart.get(e)
            }
            ),
            r
        }
          , c = e => e.isThemeGetter
          , d = (e, t) => t ? e.map( ([e,r]) => [e, r.map(e => "string" == typeof e ? t + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map( ([e,r]) => [t + e, r])) : e)]) : e
          , f = e => {
            if (e < 1)
                return {
                    get: () => void 0,
                    set: () => {}
                };
            let t = 0
              , r = new Map
              , n = new Map
              , o = (o, i) => {
                r.set(o, i),
                ++t > e && (t = 0,
                n = r,
                r = new Map)
            }
            ;
            return {
                get(e) {
                    let t = r.get(e);
                    return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t),
                    t) : void 0
                },
                set(e, t) {
                    r.has(e) ? r.set(e, t) : o(e, t)
                }
            }
        }
          , p = e => {
            let {separator: t, experimentalParseClassName: r} = e
              , n = 1 === t.length
              , o = t[0]
              , i = t.length
              , l = e => {
                let r;
                let l = []
                  , a = 0
                  , s = 0;
                for (let u = 0; u < e.length; u++) {
                    let c = e[u];
                    if (0 === a) {
                        if (c === o && (n || e.slice(u, u + i) === t)) {
                            l.push(e.slice(s, u)),
                            s = u + i;
                            continue
                        }
                        if ("/" === c) {
                            r = u;
                            continue
                        }
                    }
                    "[" === c ? a++ : "]" === c && a--
                }
                let u = 0 === l.length ? e : e.substring(s)
                  , c = u.startsWith("!")
                  , d = c ? u.substring(1) : u;
                return {
                    modifiers: l,
                    hasImportantModifier: c,
                    baseClassName: d,
                    maybePostfixModifierPosition: r && r > s ? r - s : void 0
                }
            }
            ;
            return r ? e => r({
                className: e,
                parseClassName: l
            }) : l
        }
          , h = e => {
            if (e.length <= 1)
                return e;
            let t = []
              , r = [];
            return e.forEach(e => {
                "[" === e[0] ? (t.push(...r.sort(), e),
                r = []) : r.push(e)
            }
            ),
            t.push(...r.sort()),
            t
        }
          , m = e => ({
            cache: f(e.cacheSize),
            parseClassName: p(e),
            ...n(e)
        })
          , g = /\s+/
          , v = (e, t) => {
            let {parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: o} = t
              , i = []
              , l = e.trim().split(g)
              , a = "";
            for (let e = l.length - 1; e >= 0; e -= 1) {
                let t = l[e]
                  , {modifiers: s, hasImportantModifier: u, baseClassName: c, maybePostfixModifierPosition: d} = r(t)
                  , f = !!d
                  , p = n(f ? c.substring(0, d) : c);
                if (!p) {
                    if (!f || !(p = n(c))) {
                        a = t + (a.length > 0 ? " " + a : a);
                        continue
                    }
                    f = !1
                }
                let m = h(s).join(":")
                  , g = u ? m + "!" : m
                  , v = g + p;
                if (i.includes(v))
                    continue;
                i.push(v);
                let y = o(p, f);
                for (let e = 0; e < y.length; ++e) {
                    let t = y[e];
                    i.push(g + t)
                }
                a = t + (a.length > 0 ? " " + a : a)
            }
            return a
        }
        ;
        function y() {
            let e, t, r = 0, n = "";
            for (; r < arguments.length; )
                (e = arguments[r++]) && (t = b(e)) && (n && (n += " "),
                n += t);
            return n
        }
        let b = e => {
            let t;
            if ("string" == typeof e)
                return e;
            let r = "";
            for (let n = 0; n < e.length; n++)
                e[n] && (t = b(e[n])) && (r && (r += " "),
                r += t);
            return r
        }
          , w = e => {
            let t = t => t[e] || [];
            return t.isThemeGetter = !0,
            t
        }
          , x = /^\[(?:([a-z-]+):)?(.+)\]$/i
          , E = /^\d+\/\d+$/
          , C = new Set(["px", "full", "screen"])
          , S = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
          , R = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
          , M = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
          , P = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
          , k = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
          , A = e => j(e) || C.has(e) || E.test(e)
          , N = e => U(e, "length", $)
          , j = e => !!e && !Number.isNaN(Number(e))
          , O = e => U(e, "number", j)
          , L = e => !!e && Number.isInteger(Number(e))
          , T = e => e.endsWith("%") && j(e.slice(0, -1))
          , _ = e => x.test(e)
          , I = e => S.test(e)
          , z = new Set(["length", "size", "percentage"])
          , D = e => U(e, z, Y)
          , F = e => U(e, "position", Y)
          , W = new Set(["image", "url"])
          , B = e => U(e, W, K)
          , H = e => U(e, "", G)
          , V = () => !0
          , U = (e, t, r) => {
            let n = x.exec(e);
            return !!n && (n[1] ? "string" == typeof t ? n[1] === t : t.has(n[1]) : r(n[2]))
        }
          , $ = e => R.test(e) && !M.test(e)
          , Y = () => !1
          , G = e => P.test(e)
          , K = e => k.test(e)
          , X = function(e, ...t) {
            let r, n, o;
            let i = function(a) {
                return n = (r = m(t.reduce( (e, t) => t(e), e()))).cache.get,
                o = r.cache.set,
                i = l,
                l(a)
            };
            function l(e) {
                let t = n(e);
                if (t)
                    return t;
                let i = v(e, r);
                return o(e, i),
                i
            }
            return function() {
                return i(y.apply(null, arguments))
            }
        }( () => {
            let e = w("colors")
              , t = w("spacing")
              , r = w("blur")
              , n = w("brightness")
              , o = w("borderColor")
              , i = w("borderRadius")
              , l = w("borderSpacing")
              , a = w("borderWidth")
              , s = w("contrast")
              , u = w("grayscale")
              , c = w("hueRotate")
              , d = w("invert")
              , f = w("gap")
              , p = w("gradientColorStops")
              , h = w("gradientColorStopPositions")
              , m = w("inset")
              , g = w("margin")
              , v = w("opacity")
              , y = w("padding")
              , b = w("saturate")
              , x = w("scale")
              , E = w("sepia")
              , C = w("skew")
              , S = w("space")
              , R = w("translate")
              , M = () => ["auto", "contain", "none"]
              , P = () => ["auto", "hidden", "clip", "visible", "scroll"]
              , k = () => ["auto", _, t]
              , z = () => [_, t]
              , W = () => ["", A, N]
              , U = () => ["auto", j, _]
              , $ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
              , Y = () => ["solid", "dashed", "dotted", "double", "none"]
              , G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
              , K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
              , X = () => ["", "0", _]
              , Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
              , Z = () => [j, _];
            return {
                cacheSize: 500,
                separator: ":",
                theme: {
                    colors: [V],
                    spacing: [A, N],
                    blur: ["none", "", I, _],
                    brightness: Z(),
                    borderColor: [e],
                    borderRadius: ["none", "", "full", I, _],
                    borderSpacing: z(),
                    borderWidth: W(),
                    contrast: Z(),
                    grayscale: X(),
                    hueRotate: Z(),
                    invert: X(),
                    gap: z(),
                    gradientColorStops: [e],
                    gradientColorStopPositions: [T, N],
                    inset: k(),
                    margin: k(),
                    opacity: Z(),
                    padding: z(),
                    saturate: Z(),
                    scale: Z(),
                    sepia: X(),
                    skew: Z(),
                    space: z(),
                    translate: z()
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", _]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [I]
                    }],
                    "break-after": [{
                        "break-after": Q()
                    }],
                    "break-before": [{
                        "break-before": Q()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [...$(), _]
                    }],
                    overflow: [{
                        overflow: P()
                    }],
                    "overflow-x": [{
                        "overflow-x": P()
                    }],
                    "overflow-y": [{
                        "overflow-y": P()
                    }],
                    overscroll: [{
                        overscroll: M()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": M()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": M()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [m]
                    }],
                    "inset-x": [{
                        "inset-x": [m]
                    }],
                    "inset-y": [{
                        "inset-y": [m]
                    }],
                    start: [{
                        start: [m]
                    }],
                    end: [{
                        end: [m]
                    }],
                    top: [{
                        top: [m]
                    }],
                    right: [{
                        right: [m]
                    }],
                    bottom: [{
                        bottom: [m]
                    }],
                    left: [{
                        left: [m]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", L, _]
                    }],
                    basis: [{
                        basis: k()
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", _]
                    }],
                    grow: [{
                        grow: X()
                    }],
                    shrink: [{
                        shrink: X()
                    }],
                    order: [{
                        order: ["first", "last", "none", L, _]
                    }],
                    "grid-cols": [{
                        "grid-cols": [V]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: ["full", L, _]
                        }, _]
                    }],
                    "col-start": [{
                        "col-start": U()
                    }],
                    "col-end": [{
                        "col-end": U()
                    }],
                    "grid-rows": [{
                        "grid-rows": [V]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [L, _]
                        }, _]
                    }],
                    "row-start": [{
                        "row-start": U()
                    }],
                    "row-end": [{
                        "row-end": U()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", _]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", _]
                    }],
                    gap: [{
                        gap: [f]
                    }],
                    "gap-x": [{
                        "gap-x": [f]
                    }],
                    "gap-y": [{
                        "gap-y": [f]
                    }],
                    "justify-content": [{
                        justify: ["normal", ...K()]
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal", ...K(), "baseline"]
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [...K(), "baseline"]
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [y]
                    }],
                    px: [{
                        px: [y]
                    }],
                    py: [{
                        py: [y]
                    }],
                    ps: [{
                        ps: [y]
                    }],
                    pe: [{
                        pe: [y]
                    }],
                    pt: [{
                        pt: [y]
                    }],
                    pr: [{
                        pr: [y]
                    }],
                    pb: [{
                        pb: [y]
                    }],
                    pl: [{
                        pl: [y]
                    }],
                    m: [{
                        m: [g]
                    }],
                    mx: [{
                        mx: [g]
                    }],
                    my: [{
                        my: [g]
                    }],
                    ms: [{
                        ms: [g]
                    }],
                    me: [{
                        me: [g]
                    }],
                    mt: [{
                        mt: [g]
                    }],
                    mr: [{
                        mr: [g]
                    }],
                    mb: [{
                        mb: [g]
                    }],
                    ml: [{
                        ml: [g]
                    }],
                    "space-x": [{
                        "space-x": [S]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [S]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", _, t]
                    }],
                    "min-w": [{
                        "min-w": [_, t, "min", "max", "fit"]
                    }],
                    "max-w": [{
                        "max-w": [_, t, "none", "full", "min", "max", "fit", "prose", {
                            screen: [I]
                        }, I]
                    }],
                    h: [{
                        h: [_, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "min-h": [{
                        "min-h": [_, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "max-h": [{
                        "max-h": [_, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    size: [{
                        size: [_, t, "auto", "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", I, N]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", O]
                    }],
                    "font-family": [{
                        font: [V]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", _]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", j, O]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", A, _]
                    }],
                    "list-image": [{
                        "list-image": ["none", _]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", _]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [e]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [v]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [e]
                    }],
                    "text-opacity": [{
                        "text-opacity": [v]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...Y(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", A, N]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", A, _]
                    }],
                    "text-decoration-color": [{
                        decoration: [e]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: z()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", _]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", _]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [v]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [...$(), F]
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", D]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, B]
                    }],
                    "bg-color": [{
                        bg: [e]
                    }],
                    "gradient-from-pos": [{
                        from: [h]
                    }],
                    "gradient-via-pos": [{
                        via: [h]
                    }],
                    "gradient-to-pos": [{
                        to: [h]
                    }],
                    "gradient-from": [{
                        from: [p]
                    }],
                    "gradient-via": [{
                        via: [p]
                    }],
                    "gradient-to": [{
                        to: [p]
                    }],
                    rounded: [{
                        rounded: [i]
                    }],
                    "rounded-s": [{
                        "rounded-s": [i]
                    }],
                    "rounded-e": [{
                        "rounded-e": [i]
                    }],
                    "rounded-t": [{
                        "rounded-t": [i]
                    }],
                    "rounded-r": [{
                        "rounded-r": [i]
                    }],
                    "rounded-b": [{
                        "rounded-b": [i]
                    }],
                    "rounded-l": [{
                        "rounded-l": [i]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [i]
                    }],
                    "rounded-se": [{
                        "rounded-se": [i]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [i]
                    }],
                    "rounded-es": [{
                        "rounded-es": [i]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [i]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [i]
                    }],
                    "rounded-br": [{
                        "rounded-br": [i]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [i]
                    }],
                    "border-w": [{
                        border: [a]
                    }],
                    "border-w-x": [{
                        "border-x": [a]
                    }],
                    "border-w-y": [{
                        "border-y": [a]
                    }],
                    "border-w-s": [{
                        "border-s": [a]
                    }],
                    "border-w-e": [{
                        "border-e": [a]
                    }],
                    "border-w-t": [{
                        "border-t": [a]
                    }],
                    "border-w-r": [{
                        "border-r": [a]
                    }],
                    "border-w-b": [{
                        "border-b": [a]
                    }],
                    "border-w-l": [{
                        "border-l": [a]
                    }],
                    "border-opacity": [{
                        "border-opacity": [v]
                    }],
                    "border-style": [{
                        border: [...Y(), "hidden"]
                    }],
                    "divide-x": [{
                        "divide-x": [a]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [a]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [v]
                    }],
                    "divide-style": [{
                        divide: Y()
                    }],
                    "border-color": [{
                        border: [o]
                    }],
                    "border-color-x": [{
                        "border-x": [o]
                    }],
                    "border-color-y": [{
                        "border-y": [o]
                    }],
                    "border-color-s": [{
                        "border-s": [o]
                    }],
                    "border-color-e": [{
                        "border-e": [o]
                    }],
                    "border-color-t": [{
                        "border-t": [o]
                    }],
                    "border-color-r": [{
                        "border-r": [o]
                    }],
                    "border-color-b": [{
                        "border-b": [o]
                    }],
                    "border-color-l": [{
                        "border-l": [o]
                    }],
                    "divide-color": [{
                        divide: [o]
                    }],
                    "outline-style": [{
                        outline: ["", ...Y()]
                    }],
                    "outline-offset": [{
                        "outline-offset": [A, _]
                    }],
                    "outline-w": [{
                        outline: [A, N]
                    }],
                    "outline-color": [{
                        outline: [e]
                    }],
                    "ring-w": [{
                        ring: W()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [e]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [v]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [A, N]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [e]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", I, H]
                    }],
                    "shadow-color": [{
                        shadow: [V]
                    }],
                    opacity: [{
                        opacity: [v]
                    }],
                    "mix-blend": [{
                        "mix-blend": [...G(), "plus-lighter", "plus-darker"]
                    }],
                    "bg-blend": [{
                        "bg-blend": G()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [r]
                    }],
                    brightness: [{
                        brightness: [n]
                    }],
                    contrast: [{
                        contrast: [s]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", I, _]
                    }],
                    grayscale: [{
                        grayscale: [u]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [c]
                    }],
                    invert: [{
                        invert: [d]
                    }],
                    saturate: [{
                        saturate: [b]
                    }],
                    sepia: [{
                        sepia: [E]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [r]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [n]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [s]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [u]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [c]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [d]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [v]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [b]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [E]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [l]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [l]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [l]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", _]
                    }],
                    duration: [{
                        duration: Z()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", _]
                    }],
                    delay: [{
                        delay: Z()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", _]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [x]
                    }],
                    "scale-x": [{
                        "scale-x": [x]
                    }],
                    "scale-y": [{
                        "scale-y": [x]
                    }],
                    rotate: [{
                        rotate: [L, _]
                    }],
                    "translate-x": [{
                        "translate-x": [R]
                    }],
                    "translate-y": [{
                        "translate-y": [R]
                    }],
                    "skew-x": [{
                        "skew-x": [C]
                    }],
                    "skew-y": [{
                        "skew-y": [C]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", _]
                    }],
                    accent: [{
                        accent: ["auto", e]
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", _]
                    }],
                    "caret-color": [{
                        caret: [e]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": z()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": z()
                    }],
                    "scroll-my": [{
                        "scroll-my": z()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": z()
                    }],
                    "scroll-me": [{
                        "scroll-me": z()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": z()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": z()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": z()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": z()
                    }],
                    "scroll-p": [{
                        "scroll-p": z()
                    }],
                    "scroll-px": [{
                        "scroll-px": z()
                    }],
                    "scroll-py": [{
                        "scroll-py": z()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": z()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": z()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": z()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": z()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": z()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": z()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", _]
                    }],
                    fill: [{
                        fill: [e, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [A, N, O]
                    }],
                    stroke: [{
                        stroke: [e, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        }
        )
    }
}]);
