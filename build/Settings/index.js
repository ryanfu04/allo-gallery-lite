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
                            position: "relative",
                            overflow: "hidden"
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
                            top: "26px",
                            left: "40px",
                            width: "352px",
                            height: "54px",
                            justifyContent: "flex-start",
                            alignItems: "center"
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
                            fontSize: "42px",
                            fontWeight: "bold",
                            color: "#ffffff",
                            textAlign: "left"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "menu"
                            ]
                        ],
                        {
                            position: "absolute",
                            top: "88px",
                            left: "34px",
                            width: "364px",
                            flexDirection: "column"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "rowitem"
                            ]
                        ],
                        {
                            width: "364px",
                            height: "54px",
                            marginBottom: "6px",
                            paddingTop: "0",
                            paddingRight: "20px",
                            paddingBottom: "0",
                            paddingLeft: "20px",
                            borderRadius: "16px",
                            backgroundColor: "rgba(28, 28, 30, 0.85)",
                            justifyContent: "space-between"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "row-t"
                            ]
                        ],
                        {
                            fontSize: "21px",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "row-arrow"
                            ]
                        ],
                        {
                            fontSize: "32px",
                            color: "#8e8e93"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "row-danger"
                            ]
                        ],
                        {
                            color: "#ff453a"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "exit-arrow"
                            ]
                        ],
                        {
                            fontSize: "24px",
                            color: "#ff453a"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "ver-t"
                            ]
                        ],
                        {
                            position: "absolute",
                            bottom: "44px",
                            right: "40px",
                            fontSize: "15px",
                            color: "#636366",
                            textAlign: "right"
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
                            bottom: "30px",
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
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        private: {
                            version: '1.0.1',
                            menus: [
                                {
                                    key: 'fav',
                                    label: '收藏图库'
                                },
                                {
                                    key: 'import',
                                    label: '导入图片'
                                },
                                {
                                    key: 'about',
                                    label: '关于'
                                }
                            ]
                        },
                        onMenu (key) {
                            if ('fav' === key) _system.default.push({
                                uri: '/Favorites'
                            });
                            else if ('import' === key) _system.default.push({
                                uri: '/Import'
                            });
                            else if ('about' === key) _system.default.push({
                                uri: '/About'
                            });
                        },
                        onExit () {
                            try {
                                if (this.$app && this.$app.exit) return void this.$app.exit();
                            } catch (e) {}
                            _system.default.back();
                        },
                        goBack () {
                            _system.default.back();
                        },
                        onRootSwipe (e) {
                            if (e && 'right' === e.direction) {
                                this.goBack();
                                return true;
                            }
                            return false;
                        },
                        onBackPress () {
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
                                    "topbar"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "title"
                                    ],
                                    value: "更多"
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "menu"
                                ]
                            }
                        }, [
                            aiot.__cf__({
                                __vm__: _vm_,
                                __opts__: {
                                    exp: function() {
                                        return _vm_.menus;
                                    },
                                    key: "$idx",
                                    value: "$item"
                                }
                            }, function($idx, $item) {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "rowitem",
                                                "center"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.onMenu($item.key, evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "row-t"
                                                ],
                                                value: function() {
                                                    return $item.label;
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "row-arrow"
                                                ],
                                                value: "›"
                                            }
                                        }, [])
                                    ])
                                ];
                            }),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "rowitem",
                                        "center"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.onExit(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "row-t",
                                            "row-danger"
                                        ],
                                        value: "退出应用"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "row-arrow",
                                            "exit-arrow"
                                        ],
                                        value: "✕"
                                    }
                                }, [])
                            ])
                        ]),
                        aiot.__ce__("text", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "ver-t"
                                ],
                                value: function() {
                                    return "Allo图库 v" + _vm_.version;
                                }
                            }
                        }, []),
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
