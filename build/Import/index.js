export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
            return (()=>{
                var __webpack_modules__ = {};
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.rv = ()=>"1.7.12";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.12";
                })();
                var $app_style$ = [
                    [
                        [
                            [
                                2,
                                "text"
                            ]
                        ],
                        {
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "column"
                            ]
                        ],
                        {
                            flexDirection: "column"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "center"
                            ]
                        ],
                        {
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "page"
                            ]
                        ],
                        {
                            width: "432px",
                            height: "514px",
                            backgroundColor: "#000000",
                            position: "relative"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "topbar"
                            ]
                        ],
                        {
                            position: "absolute",
                            top: "30px",
                            left: "40px",
                            width: "352px",
                            height: "44px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "title"
                            ]
                        ],
                        {
                            fontSize: "34px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "body"
                            ]
                        ],
                        {
                            position: "absolute",
                            top: "150px",
                            left: "34px",
                            width: "364px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "intro"
                            ]
                        ],
                        {
                            width: "364px",
                            paddingTop: "22px",
                            paddingRight: "18px",
                            paddingBottom: "22px",
                            paddingLeft: "18px",
                            marginBottom: "18px",
                            borderRadius: "18px",
                            backgroundColor: "rgba(40, 40, 44, 0.55)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "intro-t"
                            ]
                        ],
                        {
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "intro-s"
                            ]
                        ],
                        {
                            fontSize: "15px",
                            color: "#8e8e93",
                            marginTop: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hint"
                            ]
                        ],
                        {
                            width: "364px",
                            height: "44px",
                            marginTop: "6px",
                            borderRadius: "22px",
                            backgroundColor: "rgba(10, 132, 255, 0.2)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hint-t"
                            ]
                        ],
                        {
                            fontSize: "16px",
                            color: "#0a84ff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "rbtn"
                            ]
                        ],
                        {
                            width: "72px",
                            height: "72px",
                            borderRadius: "36px",
                            backgroundColor: "rgba(40, 40, 44, 0.42)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "back-btn"
                            ]
                        ],
                        {
                            position: "absolute",
                            bottom: "26px",
                            left: "34px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chev"
                            ]
                        ],
                        {
                            fontSize: "50px",
                            color: "#ffffff",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chev-shift"
                            ]
                        ],
                        {
                            position: "relative",
                            left: "-3px"
                        }
                    ]
                ];
                var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.file"));
                    var _system3 = _interopRequireDefault($app_require$1("@app-module/system.interconnect"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    const DIR = 'internal://files/gallery/';
                    const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                    var _default = exports.default = {
                        private: {
                            connText: '等待手机 AstroBox 连接…',
                            connect: null,
                            imported: 0,
                            busy: false,
                            _rx: null,
                            _seq: 0
                        },
                        onInit () {
                            const self = this;
                            try {
                                this.connect = _system3.default.instance();
                                this.connect.onopen = function() {
                                    self.connText = '已连接，去 AstroBox 选图吧';
                                };
                                this.connect.onmessage = function(msg) {
                                    self.onMessage(msg);
                                };
                            } catch (e) {
                                this.connText = '通信不可用';
                            }
                        },
                        onDestroy () {
                            if (this.connect) {
                                this.connect.onopen = null;
                                this.connect.onmessage = null;
                            }
                        },
                        onMessage (msg) {
                            let raw = msg && msg.data ? msg.data : msg;
                            if ('string' == typeof raw) {
                                try {
                                    raw = JSON.parse(raw);
                                } catch (e) {}
                            }
                            if (!raw || 'object' != typeof raw) return;
                            if ('gallery_chunk' === raw.type) return void this.onChunk(raw);
                            if ('image' === raw.type && raw.data) {
                                this.busy = true;
                                this.writeImage(raw.name, raw.data, true === raw.keep);
                            }
                        },
                        onChunk (msg) {
                            const total = parseInt(msg.total, 10) || 1;
                            const idx = parseInt(msg.index, 10) || 0;
                            const keep = true === msg.keep;
                            const name = keep ? this.safeName(msg.name || '') : this.safeName(msg.name || 'img_' + Date.now() + '.png');
                            if (!this._rx || this._rx.name !== name || this._rx.total !== total) {
                                this._rx = {
                                    name: name,
                                    total: total,
                                    keep: keep,
                                    parts: new Array(total),
                                    got: 0
                                };
                                this.connText = '正在接收图片，请勿操作…';
                                this.busy = true;
                            }
                            if (idx < 0 || idx >= total) return;
                            if (void 0 === this._rx.parts[idx]) {
                                this._rx.parts[idx] = msg.data || '';
                                this._rx.got++;
                            }
                            if (this._rx.got < total) return;
                            const full = this._rx.parts.join('');
                            const doneName = this._rx.name;
                            const doneKeep = this._rx.keep;
                            this._rx = null;
                            this.writeImage(doneName, full, doneKeep);
                        },
                        uniqueName (name) {
                            const raw = String(name || 'import.png');
                            const dot = raw.lastIndexOf('.');
                            const stem = dot > 0 ? raw.slice(0, dot) : raw;
                            const ext = dot > 0 ? raw.slice(dot) : '.png';
                            const base = this.safeName(stem).slice(0, 24) || 'import';
                            this._seq = (this._seq || 0) + 1;
                            return base + '_' + Date.now() + '_' + this._seq + ext;
                        },
                        writeImage (name, b64data, keep) {
                            const safe = keep ? this.safeName(name) : this.uniqueName(name);
                            const self = this;
                            try {
                                const bytes = this.decodeBase64(b64data);
                                _system2.default.writeArrayBuffer({
                                    uri: DIR + safe,
                                    buffer: bytes,
                                    success: function() {
                                        if (!(keep && 't' === safe.charAt(0))) self.imported++;
                                        self.busy = false;
                                        self.connText = '已导入 ' + self.imported + ' 张，返回图库查看';
                                    },
                                    fail: function() {
                                        self.busy = false;
                                        self.connText = '图片写入失败，请重试';
                                    }
                                });
                            } catch (e) {
                                self.busy = false;
                                self.connText = '图片数据解析失败';
                            }
                        },
                        safeName (n) {
                            return String(n).replace(/[^a-zA-Z0-9._]/g, '_').slice(0, 40);
                        },
                        decodeBase64 (b64) {
                            let str = String(b64).replace(/\s/g, '').replace(/-/g, '+').replace(/_/g, '/');
                            const pad = str.length % 4;
                            if (pad) str += '==='.slice(0, 4 - pad);
                            const len = str.length;
                            const outLen = Math.floor(3 * len / 4);
                            const out = new Uint8Array(outLen);
                            let p = 0;
                            for(let i = 0; i < len; i += 4){
                                const c1 = B64.indexOf(str.charAt(i));
                                const c2 = B64.indexOf(str.charAt(i + 1));
                                const c3 = '=' === str.charAt(i + 2) ? -1 : B64.indexOf(str.charAt(i + 2));
                                const c4 = '=' === str.charAt(i + 3) ? -1 : B64.indexOf(str.charAt(i + 3));
                                if (p < outLen) out[p++] = c1 << 2 | c2 >> 4;
                                if (p < outLen) out[p++] = (15 & c2) << 4 | c3 >> 2;
                                if (p < outLen) out[p++] = (3 & c3) << 6 | c4;
                            }
                            return out;
                        },
                        goBack () {
                            if (this.busy) return;
                            _system.default.back();
                        },
                        onRootSwipe (e) {
                            if (this.busy) return true;
                            if (e && 'right' === e.direction) {
                                this.goBack();
                                return true;
                            }
                            return false;
                        },
                        onBackPress () {
                            if (this.busy) return true;
                            _system.default.back();
                            return true;
                        }
                    };
                    const moduleOwn = exports.default || module.exports;
                    const accessors = [
                        'public',
                        'protected',
                        'private'
                    ];
                    if (moduleOwn.data && accessors.some(function(acc) {
                        return moduleOwn[acc];
                    })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                    if (!moduleOwn.data) {
                        moduleOwn.data = {};
                        moduleOwn._descriptor = {};
                        accessors.forEach(function(acc) {
                            const accType = typeof moduleOwn[acc];
                            if ('object' === accType) {
                                moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                    access: acc
                                };
                            } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                        });
                    }
                };
                var $app_template$ = function(vm) {
                    const _vm_ = vm || this;
                    return aiot.__ce__("div", {
                        __vm__: _vm_,
                        __opts__: {
                            classList: [
                                "page"
                            ],
                            events: {
                                swipe: function(evt) {
                                    return _vm_.onRootSwipe(evt);
                                }
                            }
                        }
                    }, [
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "topbar",
                                    "center"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "title"
                                    ],
                                    value: "导入图片"
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "body",
                                    "column"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "intro",
                                        "column"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "intro-t"
                                        ],
                                        value: "手机端选图，自动推送到手表"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "intro-s"
                                        ],
                                        value: "在 AstroBox 运行「Allo图库导入器」，点「选择图片」即可。"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "hint",
                                        "center"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "hint-t"
                                        ],
                                        value: function() {
                                            return _vm_.connText;
                                        }
                                    }
                                }, [])
                            ])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "rbtn",
                                    "back-btn",
                                    "center"
                                ],
                                events: {
                                    click: function(evt) {
                                        return _vm_.goBack(evt);
                                    }
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "chev",
                                        "chev-shift"
                                    ],
                                    value: "‹"
                                }
                            }, [])
                        ])
                    ]);
                };
                $app_exports$['entry'] = function($app_exports$) {
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.template = $app_template$;
                    $app_exports$.default.style = $app_style$;
                };
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}
