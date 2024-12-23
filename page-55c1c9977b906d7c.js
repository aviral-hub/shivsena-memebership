(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    2034: function(e, a, r) {
        Promise.resolve().then(r.bind(r, 7762)),
        Promise.resolve().then(r.bind(r, 6820)),
        Promise.resolve().then(r.t.bind(r, 5878, 23))
    },
    7762: function(e, a, r) {
        "use strict";
        r.d(a, {
            GoogleFormWrapper: function() {
                return L
            }
        });
        var t = r(7437)
          , s = r(2265)
          , l = r(7053)
          , d = r(535)
          , i = r(1994)
          , n = r(3335);
        function o() {
            for (var e = arguments.length, a = Array(e), r = 0; r < e; r++)
                a[r] = arguments[r];
            return (0,
            n.m6)((0,
            i.W)(a))
        }
        let c = (0,
        d.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "h-10 w-10"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , m = s.forwardRef( (e, a) => {
            let {className: r, variant: s, size: d, asChild: i=!1, ...n} = e
              , m = i ? l.g7 : "button";
            return (0,
            t.jsx)(m, {
                className: o(c({
                    variant: s,
                    size: d,
                    className: r
                })),
                ref: a,
                ...n
            })
        }
        );
        m.displayName = "Button";
        let u = s.forwardRef( (e, a) => {
            let {className: r, type: s, ...l} = e;
            return (0,
            t.jsx)("input", {
                type: s,
                className: o("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r),
                ref: a,
                ...l
            })
        }
        );
        u.displayName = "Input";
        var f = r(6394);
        let h = (0,
        d.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
          , x = s.forwardRef( (e, a) => {
            let {className: r, ...s} = e;
            return (0,
            t.jsx)(f.f, {
                ref: a,
                className: o(h(), r),
                ...s
            })
        }
        );
        x.displayName = f.f.displayName;
        var p = r(294)
          , g = r(875)
          , b = r(2135)
          , v = r(401);
        let j = p.fC;
        p.ZA;
        let N = p.B4
          , y = s.forwardRef( (e, a) => {
            let {className: r, children: s, ...l} = e;
            return (0,
            t.jsxs)(p.xz, {
                ref: a,
                className: o("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", r),
                ...l,
                children: [s, (0,
                t.jsx)(p.JO, {
                    asChild: !0,
                    children: (0,
                    t.jsx)(g.Z, {
                        className: "h-4 w-4 opacity-50"
                    })
                })]
            })
        }
        );
        y.displayName = p.xz.displayName;
        let w = s.forwardRef( (e, a) => {
            let {className: r, ...s} = e;
            return (0,
            t.jsx)(p.u_, {
                ref: a,
                className: o("flex cursor-default items-center justify-center py-1", r),
                ...s,
                children: (0,
                t.jsx)(b.Z, {
                    className: "h-4 w-4"
                })
            })
        }
        );
        w.displayName = p.u_.displayName;
        let F = s.forwardRef( (e, a) => {
            let {className: r, ...s} = e;
            return (0,
            t.jsx)(p.$G, {
                ref: a,
                className: o("flex cursor-default items-center justify-center py-1", r),
                ...s,
                children: (0,
                t.jsx)(g.Z, {
                    className: "h-4 w-4"
                })
            })
        }
        );
        F.displayName = p.$G.displayName;
        let C = s.forwardRef( (e, a) => {
            let {className: r, children: s, position: l="popper", ...d} = e;
            return (0,
            t.jsx)(p.h_, {
                children: (0,
                t.jsxs)(p.VY, {
                    ref: a,
                    className: o("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === l && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", r),
                    position: l,
                    ...d,
                    children: [(0,
                    t.jsx)(w, {}), (0,
                    t.jsx)(p.l_, {
                        className: o("p-1", "popper" === l && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                        children: s
                    }), (0,
                    t.jsx)(F, {})]
                })
            })
        }
        );
        C.displayName = p.VY.displayName,
        s.forwardRef( (e, a) => {
            let {className: r, ...s} = e;
            return (0,
            t.jsx)(p.__, {
                ref: a,
                className: o("py-1.5 pl-8 pr-2 text-sm font-semibold", r),
                ...s
            })
        }
        ).displayName = p.__.displayName;
        let D = s.forwardRef( (e, a) => {
            let {className: r, children: s, ...l} = e;
            return (0,
            t.jsxs)(p.ck, {
                ref: a,
                className: o("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r),
                ...l,
                children: [(0,
                t.jsx)("span", {
                    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                    children: (0,
                    t.jsx)(p.wU, {
                        children: (0,
                        t.jsx)(v.Z, {
                            className: "h-4 w-4"
                        })
                    })
                }), (0,
                t.jsx)(p.eT, {
                    children: s
                })]
            })
        }
        );
        D.displayName = p.ck.displayName,
        s.forwardRef( (e, a) => {
            let {className: r, ...s} = e;
            return (0,
            t.jsx)(p.Z0, {
                ref: a,
                className: o("-mx-1 my-1 h-px bg-muted", r),
                ...s
            })
        }
        ).displayName = p.Z0.displayName;
        let k = s.forwardRef( (e, a) => {
            let {className: r, ...s} = e;
            return (0,
            t.jsx)("div", {
                ref: a,
                className: o("rounded-lg border bg-card text-card-foreground shadow-sm", r),
                ...s
            })
        }
        );
        k.displayName = "Card",
        s.forwardRef( (e, a) => {
            let {className: r, ...s} = e;
            return (0,
            t.jsx)("div", {
                ref: a,
                className: o("flex flex-col space-y-1.5 p-6", r),
                ...s
            })
        }
        ).displayName = "CardHeader",
        s.forwardRef( (e, a) => {
            let {className: r, ...s} = e;
            return (0,
            t.jsx)("div", {
                ref: a,
                className: o("text-2xl font-semibold leading-none tracking-tight", r),
                ...s
            })
        }
        ).displayName = "CardTitle",
        s.forwardRef( (e, a) => {
            let {className: r, ...s} = e;
            return (0,
            t.jsx)("div", {
                ref: a,
                className: o("text-sm text-muted-foreground", r),
                ...s
            })
        }
        ).displayName = "CardDescription";
        let R = s.forwardRef( (e, a) => {
            let {className: r, ...s} = e;
            return (0,
            t.jsx)("div", {
                ref: a,
                className: o("p-6 pt-0", r),
                ...s
            })
        }
        );
        R.displayName = "CardContent",
        s.forwardRef( (e, a) => {
            let {className: r, ...s} = e;
            return (0,
            t.jsx)("div", {
                ref: a,
                className: o("flex items-center p-6 pt-0", r),
                ...s
            })
        }
        ).displayName = "CardFooter";
        var B = r(3145)
          , S = r(5398);
        function _(e) {
            let {name: a, photoPath: r, area: s, dob: l} = e
              , d = "".concat(s, "-").concat(Date.now().toString().slice(-6));
            return (0,
            t.jsx)(k, {
                className: "w-[600px] h-[360px] bg-gradient-to-br from-white to-orange-50 relative overflow-hidden",
                children: (0,
                t.jsxs)(R, {
                    className: "p-0 h-full",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "absolute top-0 left-0 w-full h-full",
                        children: [(0,
                        t.jsx)("div", {
                            className: "absolute top-0 right-0 w-60 h-60 bg-[#FF6B1D] rounded-full -translate-y-1/2 translate-x-1/2 opacity-90"
                        }), (0,
                        t.jsx)("div", {
                            className: "absolute bottom-0 left-0 w-[360px] h-[360px] bg-[#FF6B1D] rounded-full -translate-x-1/2 translate-y-1/2 opacity-90"
                        }), (0,
                        t.jsx)("div", {
                            className: "absolute top-0 right-0 w-40 h-40 border border-gray-200 grid grid-cols-4 grid-rows-4",
                            children: Array(16).fill(0).map( (e, a) => (0,
                            t.jsx)("div", {
                                className: "border border-gray-200"
                            }, a))
                        }), (0,
                        t.jsx)("div", {
                            className: "absolute bottom-0 right-0 w-40 h-40 border border-gray-200 grid grid-cols-4 grid-rows-4",
                            children: Array(16).fill(0).map( (e, a) => (0,
                            t.jsx)("div", {
                                className: "border border-gray-200"
                            }, a))
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "relative z-10 p-4 flex h-full",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "flex-1 flex flex-col",
                            children: [(0,
                            t.jsx)("div", {
                                className: "w-24 h-24",
                                children: (0,
                                t.jsx)(B.default, {
                                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-jruoKzRyjEyaNHvUyfpbkahBICaAAr.png",
                                    alt: "Shiv Sena Logo",
                                    width: 96,
                                    height: 96,
                                    className: "object-contain"
                                })
                            }), (0,
                            t.jsx)("h2", {
                                className: "text-[#FF6B1D] text-3xl font-bold text-center mb-4",
                                children: "शिवसेना सदस्यता"
                            }), (0,
                            t.jsxs)("div", {
                                className: "flex-1 flex flex-col items-center space-y-2",
                                children: [(0,
                                t.jsx)("h2", {
                                    className: "text-2xl font-bold text-gray-800",
                                    children: a
                                }), (0,
                                t.jsxs)("p", {
                                    className: "text-sm text-gray-600",
                                    children: ["Area: ", s]
                                }), (0,
                                t.jsxs)("p", {
                                    className: "text-sm text-gray-600",
                                    children: ["DOB: ", new Date(l).toLocaleDateString()]
                                }), (0,
                                t.jsxs)("p", {
                                    className: "text-sm text-gray-600",
                                    children: ["ID: ", d]
                                })]
                            }), (0,
                            t.jsx)("div", {
                                className: "flex justify-end",
                                children: (0,
                                t.jsx)("div", {
                                    className: "w-20 h-20",
                                    children: (0,
                                    t.jsx)(S.t, {
                                        value: "".concat(a, "-").concat(d, "-").concat(s),
                                        size: 80,
                                        fgColor: "#FF6B1D",
                                        className: "w-full h-full"
                                    })
                                })
                            })]
                        }), (0,
                        t.jsx)("div", {
                            className: "w-48 flex items-center justify-center",
                            children: (0,
                            t.jsx)("div", {
                                className: "w-40 h-40 rounded-full overflow-hidden border-4 border-[#FF6B1D] shadow-2xl",
                                children: (0,
                                t.jsx)(B.default, {
                                    src: r,
                                    alt: a,
                                    width: 160,
                                    height: 160,
                                    className: "object-cover"
                                })
                            })
                        })]
                    })]
                })
            })
        }
        var A = r(4457)
          , E = r.n(A);
        let I = ["Chandrapur", "Bhadravati", "Warora", "Chimur", "Nagbhir", "Bramhapuri", "Sindhewahi", "Mul", "Gondpipri", "Pomburna", "Saoli", "Rajura", "Korpana", "Jivati", "Ballarpur"].sort();
        function z() {
            let[e,a] = (0,
            s.useState)({
                name: "",
                dob: "",
                area: "",
                photo: null
            })
              , [r,l] = (0,
            s.useState)(!1)
              , [d,i] = (0,
            s.useState)(!1)
              , [n,o] = (0,
            s.useState)(!1)
              , [c,f] = (0,
            s.useState)(null)
              , h = async a => {
                if (a.preventDefault(),
                o(!0),
                f(null),
                !e.name || !e.dob || !e.area || !e.photo) {
                    f("Please fill in all fields"),
                    o(!1);
                    return
                }
                l(!0),
                o(!1);
                try {
                    await fetch("/api/membership-count", {
                        method: "POST"
                    })
                } catch (e) {
                    console.error("Failed to increment membership count:", e)
                }
            }
              , p = async () => {
                let a = document.getElementById("id-card");
                if (a)
                    try {
                        o(!0);
                        let r = (await E()(a, {
                            scale: 2,
                            useCORS: !0,
                            backgroundColor: null,
                            width: 600,
                            height: 360
                        })).toDataURL("image/png")
                          , t = document.createElement("a");
                        t.download = "shivsena-card-".concat(e.name.toLowerCase().replace(/\s+/g, "-"), ".png"),
                        t.href = r,
                        t.click(),
                        i(!0)
                    } catch (e) {
                        console.error("Error downloading card:", e),
                        f("Failed to download card")
                    } finally {
                        o(!1)
                    }
            }
            ;
            return r ? (0,
            t.jsxs)("div", {
                className: "max-w-2xl mx-auto space-y-6",
                children: [(0,
                t.jsx)("div", {
                    className: "overflow-x-auto pb-4 flex justify-center",
                    children: (0,
                    t.jsx)("div", {
                        id: "id-card",
                        children: (0,
                        t.jsx)(_, {
                            name: e.name,
                            photoPath: e.photo || "",
                            area: e.area,
                            dob: e.dob
                        })
                    })
                }), (0,
                t.jsxs)("div", {
                    className: "space-y-4",
                    children: [d ? (0,
                    t.jsxs)(k, {
                        className: "p-6 text-center space-y-4 bg-green-50 border-green-200",
                        children: [(0,
                        t.jsx)("p", {
                            className: "text-green-600",
                            children: "✓ ID Card Downloaded Successfully!"
                        }), (0,
                        t.jsx)("p", {
                            className: "font-medium",
                            children: "Step 2: Join Our WhatsApp Group"
                        }), (0,
                        t.jsx)(m, {
                            asChild: !0,
                            className: "bg-[#25D366] hover:bg-[#25D366]/90",
                            children: (0,
                            t.jsx)("a", {
                                href: "https://chat.whatsapp.com/Jgv8ce2o5pR9fWNKZ7FT7g",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Join WhatsApp Group"
                            })
                        })]
                    }) : (0,
                    t.jsx)("div", {
                        className: "flex justify-center",
                        children: (0,
                        t.jsx)(m, {
                            onClick: p,
                            className: "bg-[#FF6B1D] hover:bg-[#FF6B1D]/90",
                            disabled: n,
                            children: n ? "Downloading..." : "Step 1: Download ID Card"
                        })
                    }), (0,
                    t.jsx)("div", {
                        className: "flex justify-center",
                        children: (0,
                        t.jsx)(m, {
                            onClick: () => {
                                l(!1),
                                i(!1)
                            }
                            ,
                            variant: "outline",
                            children: "Create New Card"
                        })
                    })]
                })]
            }) : (0,
            t.jsx)("div", {
                className: "max-w-2xl mx-auto",
                children: (0,
                t.jsxs)("form", {
                    onSubmit: h,
                    className: "max-w-md mx-auto space-y-4 bg-white p-6 rounded-lg shadow-lg",
                    children: [(0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsx)(x, {
                            htmlFor: "name",
                            children: "Full Name"
                        }), (0,
                        t.jsx)(u, {
                            id: "name",
                            type: "text",
                            value: e.name,
                            onChange: e => a(a => ({
                                ...a,
                                name: e.target.value
                            })),
                            className: "mt-1",
                            required: !0
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsx)(x, {
                            htmlFor: "dob",
                            children: "Date of Birth"
                        }), (0,
                        t.jsx)(u, {
                            id: "dob",
                            type: "date",
                            value: e.dob,
                            onChange: e => a(a => ({
                                ...a,
                                dob: e.target.value
                            })),
                            className: "mt-1",
                            required: !0
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsx)(x, {
                            htmlFor: "area",
                            children: "Area"
                        }), (0,
                        t.jsxs)(j, {
                            onValueChange: e => a(a => ({
                                ...a,
                                area: e
                            })),
                            required: !0,
                            children: [(0,
                            t.jsx)(y, {
                                className: "mt-1",
                                children: (0,
                                t.jsx)(N, {
                                    placeholder: "Select area"
                                })
                            }), (0,
                            t.jsx)(C, {
                                children: I.map(e => (0,
                                t.jsx)(D, {
                                    value: e,
                                    children: e
                                }, e))
                            })]
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsx)(x, {
                            htmlFor: "photo",
                            children: "Photo"
                        }), (0,
                        t.jsx)(u, {
                            id: "photo",
                            type: "file",
                            accept: "image/*",
                            onChange: e => {
                                var r;
                                let t = null === (r = e.target.files) || void 0 === r ? void 0 : r[0];
                                if (t) {
                                    let e = new FileReader;
                                    e.onloadend = () => {
                                        a(a => ({
                                            ...a,
                                            photo: e.result
                                        }))
                                    }
                                    ,
                                    e.readAsDataURL(t)
                                }
                            }
                            ,
                            className: "mt-1",
                            required: !0
                        })]
                    }), (0,
                    t.jsx)(m, {
                        type: "submit",
                        className: "w-full bg-[#FF6B1D] hover:bg-[#FF6B1D]/90",
                        disabled: n,
                        children: n ? "Generating..." : "Generate ID Card"
                    }), c && (0,
                    t.jsx)("p", {
                        className: "text-red-500 text-center",
                        children: c
                    })]
                })
            })
        }
        function L() {
            let[e,a] = (0,
            s.useState)(!1);
            return ((0,
            s.useEffect)( () => {
                let e = e => {
                    "formSubmitted" === e.data && a(!0)
                }
                ;
                return window.addEventListener("message", e),
                () => window.removeEventListener("message", e)
            }
            , []),
            e) ? (0,
            t.jsxs)("div", {
                className: "space-y-6",
                children: [(0,
                t.jsx)("div", {
                    className: "bg-green-50 border border-green-200 rounded-lg p-4 text-center text-green-700",
                    children: "Registration completed successfully! Generate your ID card below."
                }), (0,
                t.jsx)(z, {})]
            }) : (0,
            t.jsxs)("div", {
                className: "max-w-4xl mx-auto space-y-6",
                children: [(0,
                t.jsx)("div", {
                    className: "bg-white rounded-lg shadow-lg overflow-hidden",
                    children: (0,
                    t.jsx)("iframe", {
                        src: "https://docs.google.com/forms/d/e/1FAIpQLSegiqa6i53mn6WfYUpKkngVmjjLE2L4WPhgPA1CZePi_r39FA/viewform?embedded=true",
                        width: "100%",
                        height: "800",
                        frameBorder: "0",
                        marginHeight: 0,
                        marginWidth: 0,
                        className: "w-full",
                        children: "Loading..."
                    })
                }), (0,
                t.jsx)("div", {
                    className: "text-center",
                    children: (0,
                    t.jsx)(m, {
                        onClick: () => a(!0),
                        className: "bg-[#FF6B1D] hover:bg-[#FF6B1D]/90",
                        children: "I've Completed the Form"
                    })
                })]
            })
        }
    },
    6820: function(e, a, r) {
        "use strict";
        r.d(a, {
            MembershipCount: function() {
                return l
            }
        });
        var t = r(7437)
          , s = r(2265);
        function l() {
            let[e,a] = (0,
            s.useState)(0);
            return (0,
            s.useEffect)( () => {
                let e = async () => {
                    try {
                        let e = await fetch("/api/membership-count")
                          , r = await e.json();
                        a(r.count)
                    } catch (e) {
                        console.error("Failed to fetch membership count:", e)
                    }
                }
                ;
                e();
                let r = setInterval(e, 6e4);
                return () => clearInterval(r)
            }
            , []),
            (0,
            t.jsx)("div", {
                className: "text-center mt-4",
                children: (0,
                t.jsxs)("p", {
                    className: "text-lg font-semibold",
                    children: ["Total Membership Cards Generated: ", (0,
                    t.jsx)("span", {
                        className: "text-[#FF6B1D]",
                        children: e
                    })]
                })
            })
        }
    }
}, function(e) {
    e.O(0, [337, 844, 971, 117, 744], function() {
        return e(e.s = 2034)
    }),
    _N_E = e.O()
}
]);
