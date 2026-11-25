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
                    __webpack_require__.g = (()=>{
                        if ('object' == typeof globalThis) return globalThis;
                        try {
                            return this || new Function('return this')();
                        } catch (e) {
                            if ('object' == typeof window) return window;
                        }
                    })();
                })();
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
                            position: "relative",
                            overflow: "hidden"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "home"
                            ]
                        ],
                        {
                            width: "432px",
                            height: "514px",
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
                                "statusbar"
                            ]
                        ],
                        {
                            position: "absolute",
                            top: "226px",
                            left: "40px",
                            width: "352px",
                            height: "46px",
                            borderRadius: "23px",
                            backgroundColor: "rgba(28, 28, 30, 0.95)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "status-txt"
                            ]
                        ],
                        {
                            fontSize: "18px",
                            color: "#0a84ff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "photolist"
                            ]
                        ],
                        {
                            position: "absolute",
                            top: "92px",
                            left: "34px",
                            width: "364px",
                            height: "350px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "listrow"
                            ]
                        ],
                        {
                            width: "364px",
                            height: "122px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "cell"
                            ]
                        ],
                        {
                            width: "114px",
                            height: "114px",
                            marginTop: "3px",
                            marginRight: "3px",
                            marginBottom: "3px",
                            marginLeft: "3px",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "thumb"
                            ]
                        ],
                        {
                            width: "114px",
                            height: "114px",
                            borderRadius: "18px",
                            objectFit: "cover"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "empty"
                            ]
                        ],
                        {
                            position: "absolute",
                            top: "200px",
                            left: "40px",
                            width: "352px",
                            height: "120px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "empty-t"
                            ]
                        ],
                        {
                            fontSize: "24px",
                            color: "#8e8e93"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "empty-s"
                            ]
                        ],
                        {
                            fontSize: "17px",
                            color: "#636366",
                            marginTop: "8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "home-bottom"
                            ]
                        ],
                        {
                            position: "absolute",
                            bottom: "26px",
                            left: "40px",
                            width: "352px",
                            height: "72px",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "fab"
                            ]
                        ],
                        {
                            width: "72px",
                            height: "72px",
                            borderRadius: "36px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "fab"
                            ],
                            [
                                0,
                                "gray"
                            ]
                        ],
                        {
                            backgroundColor: "rgba(40, 40, 44, 0.42)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "fab"
                            ],
                            [
                                0,
                                "blue"
                            ]
                        ],
                        {
                            backgroundColor: "rgba(10, 132, 255, 0.62)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "plus"
                            ]
                        ],
                        {
                            fontSize: "52px",
                            color: "#ffffff",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "dots-row"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "dot"
                            ]
                        ],
                        {
                            width: "9px",
                            height: "9px",
                            borderRadius: "5px",
                            backgroundColor: "#e5e5ea",
                            marginTop: "0",
                            marginRight: "4px",
                            marginBottom: "0",
                            marginLeft: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "count-pill"
                            ]
                        ],
                        {
                            height: "42px",
                            paddingTop: "0",
                            paddingRight: "20px",
                            paddingBottom: "0",
                            paddingLeft: "20px",
                            borderRadius: "21px",
                            backgroundColor: "rgba(28, 28, 30, 0.85)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "count-txt"
                            ]
                        ],
                        {
                            fontSize: "20px",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "viewer"
                            ]
                        ],
                        {
                            width: "432px",
                            height: "514px",
                            position: "relative",
                            backgroundColor: "#000000"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "img-stage"
                            ]
                        ],
                        {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "432px",
                            height: "514px",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "photo"
                            ]
                        ],
                        {
                            width: "432px",
                            height: "514px",
                            position: "absolute",
                            objectFit: "contain"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "photo-zoom"
                            ]
                        ],
                        {
                            width: "864px",
                            height: "1028px",
                            position: "absolute",
                            objectFit: "contain"
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
                            top: "34px",
                            left: "34px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "more-btn"
                            ]
                        ],
                        {
                            position: "absolute",
                            top: "34px",
                            right: "34px"
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
                            textAlign: "center",
                            position: "relative",
                            top: "-3px"
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
                            left: "-3px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "more-menu"
                            ]
                        ],
                        {
                            position: "absolute",
                            top: "106px",
                            right: "34px",
                            width: "150px",
                            paddingTop: "8px",
                            paddingRight: "8px",
                            paddingBottom: "8px",
                            paddingLeft: "8px",
                            borderRadius: "18px",
                            backgroundColor: "rgba(28, 28, 30, 0.72)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "menu-item"
                            ]
                        ],
                        {
                            width: "134px",
                            height: "56px",
                            marginBottom: "6px",
                            borderRadius: "14px",
                            backgroundColor: "rgba(40, 40, 44, 0.55)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "menu-t"
                            ]
                        ],
                        {
                            fontSize: "19px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "page-count"
                            ]
                        ],
                        {
                            position: "absolute",
                            bottom: "40px",
                            right: "40px",
                            fontSize: "22px",
                            fontWeight: "bold",
                            color: "#ffffff",
                            textAlign: "right"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "nav-pair"
                            ]
                        ],
                        {
                            position: "absolute",
                            bottom: "30px",
                            left: "34px",
                            flexDirection: "row"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "nav-btn"
                            ]
                        ],
                        {
                            marginRight: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-mask"
                            ]
                        ],
                        {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "432px",
                            height: "514px",
                            backgroundColor: "rgba(0, 0, 0, 0.72)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-box"
                            ]
                        ],
                        {
                            width: "320px",
                            paddingTop: "24px",
                            paddingRight: "20px",
                            paddingBottom: "20px",
                            paddingLeft: "20px",
                            borderRadius: "24px",
                            backgroundColor: "#2c2c2e"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-t"
                            ]
                        ],
                        {
                            fontSize: "22px",
                            fontWeight: "bold",
                            color: "#ffffff",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-s"
                            ]
                        ],
                        {
                            fontSize: "15px",
                            color: "#8e8e93",
                            marginTop: "8px",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-btns"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: "22px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-btn"
                            ]
                        ],
                        {
                            width: "130px",
                            height: "54px",
                            borderRadius: "16px",
                            backgroundColor: "rgba(118, 118, 128, 0.75)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-btn-t"
                            ]
                        ],
                        {
                            fontSize: "19px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-btn"
                            ],
                            [
                                0,
                                "danger"
                            ]
                        ],
                        {
                            backgroundColor: "rgba(255, 69, 58, 0.92)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "transfer-mask"
                            ]
                        ],
                        {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "432px",
                            height: "514px",
                            backgroundColor: "rgba(0, 0, 0, 0.92)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "transfer-ring"
                            ]
                        ],
                        {
                            width: "92px",
                            height: "92px",
                            borderRadius: "46px",
                            backgroundColor: "#0a84ff",
                            marginBottom: "26px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "transfer-ico"
                            ]
                        ],
                        {
                            fontSize: "54px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "transfer-t"
                            ]
                        ],
                        {
                            fontSize: "26px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "transfer-s"
                            ]
                        ],
                        {
                            fontSize: "16px",
                            color: "#8e8e93",
                            marginTop: "10px"
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
                    const FAV_FILE = 'internal://files/gallery/favorites.txt';
                    const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                    const ZW = 864, ZH = 1028;
                    const SW = 432, SH = 514;
                    const ROW_H = 122;
                    const WIN_BUFFER = 2;
                    const VISIBLE_ROWS = 4;
                    var _default = exports.default = {
                        private: {
                            photos: [],
                            rows: [],
                            _rowsKey: '',
                            _winStart: -1,
                            _winEnd: -1,
                            count: 0,
                            countText: '0 / 0',
                            viewing: false,
                            viewIdx: 0,
                            currentSrc: '',
                            zoomed: false,
                            zoomBtn: '放大',
                            pageNo: '0 / 0',
                            offX: 0,
                            offY: 0,
                            panX: 0,
                            panY: 0,
                            menuOpen: false,
                            confirmDelete: false,
                            favBtnText: '收藏',
                            favNames: [],
                            showStatus: false,
                            statusText: '',
                            connect: null,
                            statusTimer: null,
                            busy: false,
                            _rx: null,
                            _seq: 0,
                            _loadSeq: 0,
                            _tx: 0,
                            _ty: 0,
                            _ox: 0,
                            _oy: 0,
                            _tt: 0,
                            _px: 0,
                            _py: 0,
                            _cx: 0,
                            _cy: 0,
                            _dragMode: false,
                            _dragTimer: null,
                            _lastTap: 0,
                            _tapTimer: null,
                            _panning: false,
                            _swipeDir: 0,
                            peerSrc: '',
                            peerX: 0,
                            peerVisible: false,
                            _animTimer: null,
                            _animTarget: -1
                        },
                        onInit () {
                            const builtin = [
                                '/common/images/g1.png'
                            ];
                            builtin.forEach((p)=>{
                                this.photos = this.photos.concat([
                                    {
                                        src: p,
                                        imported: false,
                                        name: ''
                                    }
                                ]);
                            });
                            this.updateCount();
                            this.setupInterconnect();
                        },
                        onShow () {
                            this.loadImported();
                            this.setupInterconnect();
                        },
                        onDestroy () {
                            if (this.connect) this.connect.onmessage = null;
                            if (this.statusTimer) {
                                clearTimeout(this.statusTimer);
                                this.statusTimer = null;
                            }
                            if (this._tapTimer) {
                                clearTimeout(this._tapTimer);
                                this._tapTimer = null;
                            }
                        },
                        onBackPress () {
                            if (this.busy) return true;
                            if (this.confirmDelete) {
                                this.confirmDelete = false;
                                return true;
                            }
                            if (this.menuOpen) {
                                this.menuOpen = false;
                                return true;
                            }
                            if (this.viewing) if (this.menuOpen) this.menuOpen = false;
                            else if (this.zoomed) this.zoomToggle();
                            else {
                                this.viewing = false;
                                this.peerVisible = false;
                            }
                            return true;
                        },
                        onRootSwipe (e) {
                            if (e && 'right' === e.direction) return true;
                            return false;
                        },
                        gotoImport () {
                            if (this.busy) return;
                            _system.default.push({
                                uri: '/Import'
                            });
                        },
                        gotoSettings () {
                            if (this.busy) return;
                            _system.default.push({
                                uri: '/Settings'
                            });
                        },
                        updateCount () {
                            this.count = this.photos.length;
                            this.countText = this.count + ' / ' + this.count;
                            if (!this.viewing) this.pageNo = '1 / ' + (this.count > 0 ? this.count : 0);
                            this.rebuildRows();
                        },
                        rebuildRows () {
                            const rows = [];
                            const n = this.photos.length;
                            const hasWindow = this._winStart >= 0 && this._winEnd >= this._winStart;
                            for(let i = 0; i < n; i += 3){
                                const rowIdx = i / 3;
                                const inWindow = !hasWindow || rowIdx >= this._winStart && rowIdx <= this._winEnd;
                                const row = {
                                    n: 0,
                                    i0: 0,
                                    i1: 0,
                                    i2: 0,
                                    s0: '',
                                    s1: '',
                                    s2: ''
                                };
                                for(let j = 0; j < 3 && i + j < n; j++){
                                    const p = this.photos[i + j];
                                    row['n'] = j + 1;
                                    row['i' + j] = i + j;
                                    row['s' + j] = inWindow ? p.thumb || p.src : '';
                                }
                                rows.push(row);
                            }
                            const MIN_ROWS = 3;
                            while(rows.length < MIN_ROWS)rows.push({
                                n: 0,
                                i0: 0,
                                i1: 0,
                                i2: 0,
                                s0: '',
                                s1: '',
                                s2: ''
                            });
                            let key = '';
                            for(let k = 0; k < rows.length; k++){
                                const r = rows[k];
                                key += r.n + '|' + r.s0 + '|' + r.s1 + '|' + r.s2 + ';';
                            }
                            if (key !== this._rowsKey) {
                                this._rowsKey = key;
                                this.rows = rows;
                            }
                        },
                        onGridScroll (e) {
                            if (!e || 'number' != typeof e.scrollY || isNaN(e.scrollY)) {
                                if (-1 !== this._winStart) {
                                    this._winStart = -1;
                                    this._winEnd = -1;
                                    this.rebuildRows();
                                }
                                return;
                            }
                            const y = Math.max(0, e.scrollY);
                            const start = Math.max(0, Math.floor(y / ROW_H) - WIN_BUFFER);
                            const end = start + VISIBLE_ROWS + 2 * WIN_BUFFER;
                            if (start === this._winStart && end === this._winEnd) return;
                            this._winStart = start;
                            this._winEnd = end;
                            this.rebuildRows();
                        },
                        loadImported () {
                            const self = this;
                            const seq = (self._loadSeq || 0) + 1;
                            self._loadSeq = seq;
                            _system2.default.list({
                                uri: DIR,
                                success: function(res) {
                                    if (seq !== self._loadSeq) return;
                                    const kept = [];
                                    for(let i = 0; i < self.photos.length; i++)if (!self.photos[i].imported) kept.push(self.photos[i]);
                                    self.photos = kept;
                                    const list = res.fileList || [];
                                    const thumbs = {};
                                    const fulls = [];
                                    const legacy = [];
                                    list.forEach(function(f) {
                                        const name = self.baseName(f.uri || f.name || '');
                                        const low = name.toLowerCase();
                                        if (-1 === low.indexOf('.png') && -1 === low.indexOf('.jpg') && -1 === low.indexOf('.jpeg')) return;
                                        if ('t' === low.charAt(0) && /^t\d+\.(png|jpg)$/.test(low)) thumbs[low.slice(1).replace(/\.(png|jpg)$/, '')] = name;
                                        else if (/^g\d+\.(png|jpg)$/.test(low)) fulls.push({
                                            name: name,
                                            gid: low.slice(1).replace(/\.(png|jpg)$/, '')
                                        });
                                        else legacy.push(name);
                                    });
                                    fulls.sort(function(a, b) {
                                        return a.gid < b.gid ? -1 : a.gid > b.gid ? 1 : 0;
                                    });
                                    fulls.forEach(function(it) {
                                        const tn = thumbs[it.gid];
                                        self.photos = self.photos.concat([
                                            {
                                                src: DIR + it.name,
                                                thumb: tn ? DIR + tn : DIR + it.name,
                                                tname: tn || '',
                                                imported: true,
                                                name: it.name
                                            }
                                        ]);
                                    });
                                    legacy.sort();
                                    legacy.forEach(function(name) {
                                        self.photos = self.photos.concat([
                                            {
                                                src: DIR + name,
                                                thumb: DIR + name,
                                                tname: '',
                                                imported: true,
                                                name: name
                                            }
                                        ]);
                                    });
                                    self.applyFavorites(function() {
                                        self.updateCount();
                                    });
                                },
                                fail: function() {}
                            });
                        },
                        favKey (p) {
                            if (!p) return '';
                            return p.imported ? p.name : p.src;
                        },
                        applyFavorites (done) {
                            const self = this;
                            _system2.default.readArrayBuffer({
                                uri: FAV_FILE,
                                success: function(res) {
                                    const names = self.parseFav(res);
                                    self.favNames = names;
                                    for(let i = 0; i < self.photos.length; i++)self.photos[i].fav = names.indexOf(self.favKey(self.photos[i])) >= 0;
                                    done();
                                },
                                fail: function() {
                                    self.favNames = [];
                                    done();
                                }
                            });
                        },
                        parseFav (res) {
                            try {
                                let buf = res && (res.buffer || res.data || res);
                                let s = '';
                                if ('string' == typeof buf) s = buf;
                                else {
                                    if (!buf || 'number' != typeof buf.byteLength) return [];
                                    const u8 = new Uint8Array(buf);
                                    for(let i = 0; i < u8.length; i++)s += String.fromCharCode(u8[i]);
                                }
                                const arr = JSON.parse(s);
                                return Array.isArray(arr) ? arr : [];
                            } catch (e) {
                                return [];
                            }
                        },
                        baseName (u) {
                            return String(u).split('/').pop();
                        },
                        setupInterconnect () {
                            const self = this;
                            try {
                                this.connect = _system3.default.instance();
                                this.connect.onmessage = function(msg) {
                                    let raw = msg && msg.data ? msg.data : msg;
                                    if ('string' == typeof raw) {
                                        try {
                                            raw = JSON.parse(raw);
                                        } catch (e) {}
                                    }
                                    self.onPluginMessage(raw);
                                };
                                this.connect.onopen = function() {
                                    self.flashStatus('手机已连接，可导入图片');
                                };
                            } catch (e) {}
                        },
                        hideBgForImport () {},
                        scheduleBgRestore () {},
                        onPluginMessage (msg) {
                            if (!msg || 'object' != typeof msg) return;
                            if ('gallery_chunk' === msg.type) return void this.onChunk(msg);
                            if ('image' !== msg.type || !msg.data) return;
                            this.busy = true;
                            this.hideBgForImport();
                            this.writeImage(msg.name, msg.data, true === msg.keep);
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
                                this.busy = true;
                                this.hideBgForImport();
                                if (this.viewing) {
                                    this.viewing = false;
                                    this.zoomed = false;
                                    this.menuOpen = false;
                                    this.confirmDelete = false;
                                    this.peerVisible = false;
                                }
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
                            const low = safe.toLowerCase();
                            const isThumb = keep && /^t\d+\.(png|jpg)$/.test(low);
                            const self = this;
                            try {
                                const bytes = this.decodeBase64(b64data);
                                _system2.default.writeArrayBuffer({
                                    uri: DIR + safe,
                                    buffer: bytes,
                                    success: function() {
                                        if (isThumb) return;
                                        self.loadImported();
                                        self.busy = false;
                                        self.scheduleBgRestore();
                                        self.flashStatus('已导入：' + safe);
                                    },
                                    fail: function() {
                                        if (isThumb) return;
                                        self.busy = false;
                                        self.scheduleBgRestore();
                                        self.flashStatus('图片写入失败');
                                    }
                                });
                            } catch (e) {
                                if (isThumb) return;
                                this.busy = false;
                                this.scheduleBgRestore();
                                self.flashStatus('图片数据解析失败');
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
                        onOpen (idx) {
                            if (this.busy) return;
                            const i = parseInt(idx, 10);
                            if (isNaN(i) || i < 0 || i >= this.photos.length) return;
                            this.openAt(i);
                        },
                        openAt (idx) {
                            if (this._animTimer) {
                                clearTimeout(this._animTimer);
                                this._animTimer = null;
                            }
                            this._animTarget = -1;
                            this.viewIdx = idx;
                            this.currentSrc = this.photos[idx].src;
                            this.zoomed = false;
                            this.zoomBtn = '放大';
                            this.panX = 0;
                            this.panY = 0;
                            this.peerVisible = false;
                            this.pageNo = idx + 1 + ' / ' + this.photos.length;
                            this.menuOpen = false;
                            this.confirmDelete = false;
                            this.favBtnText = this.photos[idx].fav ? '取消收藏' : '收藏';
                            this.viewing = true;
                        },
                        onClose () {
                            if (this.busy) return;
                            if (this._animTimer) {
                                clearTimeout(this._animTimer);
                                this._animTimer = null;
                            }
                            this._animTarget = -1;
                            this.viewing = false;
                            this.menuOpen = false;
                            this.peerVisible = false;
                            this._swipeDir = 0;
                        },
                        _animatePan (fromX, toX, fromY, toY, onDone) {
                            if (this._animTimer) {
                                clearTimeout(this._animTimer);
                                this._animTimer = null;
                            }
                            const self = this;
                            const DURATION = 240;
                            const start = Date.now();
                            function frame() {
                                const p = Math.min(1, (Date.now() - start) / DURATION);
                                const k = 1 - Math.pow(1 - p, 3);
                                const x = Math.round(fromX + (toX - fromX) * k);
                                const y = Math.round(fromY + (toY - fromY) * k);
                                self.panX = x;
                                self.panY = y;
                                if (self.peerVisible) self.peerX = x + (self._swipeDir < 0 ? SW : -SW);
                                if (p < 1) self._animTimer = setTimeout(frame, 1);
                                else {
                                    self.panX = toX;
                                    self.panY = toY;
                                    if (self.peerVisible) self.peerX = toX + (self._swipeDir < 0 ? SW : -SW);
                                    self._animTimer = null;
                                    self._animTarget = -1;
                                    if (onDone) onDone();
                                }
                            }
                            this._animTimer = setTimeout(frame, 1);
                        },
                        _commitView (idx) {
                            if (0 === this.photos.length) return;
                            this.viewIdx = Math.max(0, Math.min(this.photos.length - 1, idx));
                            this.currentSrc = this.photos[this.viewIdx].src;
                            this.pageNo = this.viewIdx + 1 + ' / ' + this.photos.length;
                            this.menuOpen = false;
                            this.confirmDelete = false;
                            this.favBtnText = this.photos[this.viewIdx].fav ? '取消收藏' : '收藏';
                            this.panX = 0;
                            this.panY = 0;
                            this.peerVisible = false;
                            this._swipeDir = 0;
                            if (this.zoomed) this.centerZoom();
                        },
                        setView (idx) {
                            if (this.busy) return;
                            if (0 === this.photos.length) return;
                            this._commitView(idx);
                        },
                        _slide (dir) {
                            if (this.busy) return;
                            if (this._animTimer) {
                                clearTimeout(this._animTimer);
                                this._animTimer = null;
                                const pending = this._animTarget;
                                this._animTarget = -1;
                                if (pending >= 0) this._commitView(pending);
                                else {
                                    this.panX = 0;
                                    this.panY = 0;
                                    this.peerVisible = false;
                                }
                            }
                            const n = this.photos.length;
                            if (0 === n || this.zoomed || n < 2) return;
                            const target = this.viewIdx + (dir < 0 ? 1 : -1);
                            if (target < 0 || target >= n) return;
                            const self = this;
                            this._swipeDir = dir;
                            this._animTarget = target;
                            this.peerSrc = this.photos[target].src;
                            this.peerX = dir < 0 ? SW : -SW;
                            this.peerVisible = true;
                            this._animatePan(0, dir < 0 ? -SW : SW, 0, 0, function() {
                                self._commitView(target);
                            });
                        },
                        onPrev () {
                            this._slide(1);
                        },
                        onNext () {
                            this._slide(-1);
                        },
                        centerZoom () {
                            this.offX = Math.floor((SW - ZW) / 2);
                            this.offY = Math.floor((SH - ZH) / 2);
                        },
                        zoomToggle () {
                            if (this.busy) return;
                            this.zoomed = !this.zoomed;
                            this.zoomBtn = this.zoomed ? '缩小' : '放大';
                            if (this.zoomed) this.centerZoom();
                        },
                        toggleMenu () {
                            if (this.busy) return;
                            this.menuOpen = !this.menuOpen;
                        },
                        onMenuZoom () {
                            this.menuOpen = false;
                            this.zoomToggle();
                        },
                        onMenuDelete () {
                            if (this.busy) return;
                            this.menuOpen = false;
                            this.confirmDelete = true;
                        },
                        onMenuFav () {
                            if (this.busy) return;
                            this.menuOpen = false;
                            this.toggleFav();
                        },
                        toggleFav () {
                            const p = this.photos[this.viewIdx];
                            const key = this.favKey(p);
                            if (!key) return;
                            const list = this.favNames.slice();
                            const i = list.indexOf(key);
                            if (i >= 0) {
                                list.splice(i, 1);
                                p.fav = false;
                                this.favBtnText = '收藏';
                                this.flashStatus('已取消收藏');
                            } else {
                                list.push(key);
                                p.fav = true;
                                this.favBtnText = '取消收藏';
                                this.flashStatus('已收藏');
                            }
                            this.favNames = list;
                            this.saveFav(list);
                        },
                        saveFav (list) {
                            const self = this;
                            const s = JSON.stringify(list || []);
                            const bytes = new Uint8Array(s.length);
                            for(let i = 0; i < s.length; i++)bytes[i] = 0xff & s.charCodeAt(i);
                            _system2.default.writeArrayBuffer({
                                uri: FAV_FILE,
                                buffer: bytes,
                                success: function() {},
                                fail: function() {
                                    self.flashStatus('收藏保存失败');
                                }
                            });
                        },
                        onCancelDelete () {
                            this.confirmDelete = false;
                        },
                        onConfirmDelete () {
                            this.confirmDelete = false;
                            this.deleteCurrent();
                        },
                        deleteCurrent () {
                            if (this.busy) return;
                            const p = this.photos[this.viewIdx];
                            if (!p) return;
                            if (p.imported && p.name) {
                                _system2.default.delete({
                                    uri: DIR + p.name,
                                    success: function() {},
                                    fail: function() {}
                                });
                                if (p.tname) _system2.default.delete({
                                    uri: DIR + p.tname,
                                    success: function() {},
                                    fail: function() {}
                                });
                                if (p.fav) {
                                    const key = this.favKey(p);
                                    const list = this.favNames.filter(function(n) {
                                        return n !== key;
                                    });
                                    this.favNames = list;
                                    this.saveFav(list);
                                }
                            }
                            this.photos.splice(this.viewIdx, 1);
                            this.updateCount();
                            if (0 === this.photos.length) {
                                this.viewing = false;
                                this.flashStatus('已删除，图库为空');
                                return;
                            }
                            if (this.viewIdx >= this.photos.length) this.viewIdx = this.photos.length - 1;
                            this.setView(this.viewIdx);
                            this.flashStatus('已删除');
                        },
                        onTouchStart (e) {
                            if (this.busy) return;
                            if (this._animTimer) {
                                clearTimeout(this._animTimer);
                                this._animTimer = null;
                                const target = this._animTarget;
                                this._animTarget = -1;
                                if (target >= 0) this._commitView(target);
                                else {
                                    this.panX = 0;
                                    this.panY = 0;
                                }
                                this.peerVisible = false;
                                this._swipeDir = 0;
                            }
                            try {
                                const t = e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0];
                                if (!t) return;
                                this._tx = t.clientX;
                                this._ty = t.clientY;
                                this._ox = this.offX;
                                this._oy = this.offY;
                                this._px = this.panX;
                                this._py = this.panY;
                                this._tt = Date.now();
                                this._panning = false;
                                this._dragMode = false;
                                this._swipeDir = 0;
                                const self = this;
                                if (this._dragTimer) clearTimeout(this._dragTimer);
                                this._dragTimer = setTimeout(function() {
                                    if (!self._panning) self._dragMode = true;
                                }, 280);
                            } catch (err) {}
                        },
                        onTouchMove (e) {
                            if (this.busy) return;
                            try {
                                const t = e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0];
                                if (!t) return;
                                const dx = t.clientX - this._tx;
                                const dy = t.clientY - this._ty;
                                const moved = Math.abs(dx) > 8 || Math.abs(dy) > 8;
                                if (this.zoomed) {
                                    if (moved) this._panning = true;
                                    let nx = this._ox + dx;
                                    let ny = this._oy + dy;
                                    if (nx > 0) nx = 0;
                                    if (nx < SW - ZW) nx = SW - ZW;
                                    if (ny > 0) ny = 0;
                                    if (ny < SH - ZH) ny = SH - ZH;
                                    this.offX = nx;
                                    this.offY = ny;
                                } else if (this._dragMode) {
                                    if (moved) this._panning = true;
                                    let nx = this._px + dx;
                                    let ny = this._py + dy;
                                    if (nx > 90) nx = 90;
                                    if (nx < -90) nx = -90;
                                    if (ny > 110) ny = 110;
                                    if (ny < -110) ny = -110;
                                    this.panX = nx;
                                    this.panY = ny;
                                } else if (Math.abs(dx) > 6 && Math.abs(dx) > 1.2 * Math.abs(dy)) {
                                    if (this._dragTimer) {
                                        clearTimeout(this._dragTimer);
                                        this._dragTimer = null;
                                    }
                                    this._panning = true;
                                    const dir = dx < 0 ? -1 : 1;
                                    if (this._swipeDir !== dir) {
                                        this._swipeDir = dir;
                                        const n = this.photos.length;
                                        let pi = this.viewIdx + (dir < 0 ? 1 : -1);
                                        if (pi < 0 || pi >= n) this.peerVisible = false;
                                        else {
                                            this.peerSrc = this.photos[pi].src;
                                            this.peerVisible = true;
                                        }
                                    }
                                    let nx = dx;
                                    if (nx > SW) nx = SW;
                                    if (nx < -SW) nx = -SW;
                                    this.panX = nx;
                                    this.panY = this._py;
                                    if (this.peerVisible) this.peerX = nx + (dir < 0 ? SW : -SW);
                                }
                            } catch (err) {}
                        },
                        onTouchEnd (e) {
                            if (this.busy) return;
                            if (this._dragTimer) {
                                clearTimeout(this._dragTimer);
                                this._dragTimer = null;
                            }
                            try {
                                const t = e.changedTouches && e.changedTouches[0];
                                if (!t) return;
                                const dx = t.clientX - this._tx;
                                const dy = t.clientY - this._ty;
                                if (this.zoomed) {
                                    if (!this._panning) this.handleTap();
                                    return;
                                }
                                if (this._dragMode) {
                                    this._lastTap = 0;
                                    return;
                                }
                                if (0 !== this._swipeDir) {
                                    const dir = this._swipeDir;
                                    const willSwitch = Math.abs(dx) > 60 && Math.abs(dx) > 1.3 * Math.abs(dy);
                                    const startX = this.panX;
                                    const startY = this.panY;
                                    const self = this;
                                    if (willSwitch && this.peerVisible) {
                                        const target = this.viewIdx + (dir < 0 ? 1 : -1);
                                        this._animTarget = target;
                                        this._animatePan(startX, dir < 0 ? -SW : SW, startY, 0, function() {
                                            self._commitView(target);
                                        });
                                    } else {
                                        this._animTarget = -1;
                                        this._animatePan(startX, 0, startY, 0, function() {
                                            self.peerVisible = false;
                                            self._swipeDir = 0;
                                        });
                                    }
                                    this._lastTap = 0;
                                    return;
                                }
                                if (Math.abs(dx) > 60 && Math.abs(dx) > 1.3 * Math.abs(dy)) {
                                    if (dx < 0) this.onNext();
                                    else this.onPrev();
                                    this._lastTap = 0;
                                    return;
                                }
                                this.handleTap();
                            } catch (err) {}
                        },
                        handleTap () {
                            if (this.busy) return;
                            const now = Date.now();
                            if (now - this._lastTap < 320) {
                                if (this._tapTimer) {
                                    clearTimeout(this._tapTimer);
                                    this._tapTimer = null;
                                }
                                this._lastTap = 0;
                                this.zoomToggle();
                            } else {
                                this._lastTap = now;
                                const self = this;
                                if (this._tapTimer) clearTimeout(this._tapTimer);
                                this._tapTimer = setTimeout(function() {
                                    self._tapTimer = null;
                                }, 320);
                            }
                        },
                        flashStatus (t) {
                            this.statusText = t;
                            this.showStatus = true;
                            if (this.statusTimer) clearTimeout(this.statusTimer);
                            const self = this;
                            this.statusTimer = setTimeout(function() {
                                self.showStatus = false;
                            }, 3000);
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
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return !_vm_.viewing;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "home"
                                        ]
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
                                                value: "Allo图库Lite"
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return !_vm_.viewing;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("list", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "photolist"
                                                    ],
                                                    id: "gridfocus",
                                                    events: {
                                                        scroll: function(evt) {
                                                            return _vm_.onGridScroll(evt);
                                                        }
                                                    }
                                                }
                                            }, [
                                                aiot.__cf__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        exp: function() {
                                                            return _vm_.rows;
                                                        },
                                                        key: "$idx",
                                                        value: "$item"
                                                    }
                                                }, function($idx, $item) {
                                                    return [
                                                        aiot.__ce__("list-item", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                type: "row",
                                                                classList: [
                                                                    "listrow"
                                                                ]
                                                            }
                                                        }, [
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return $item.n > 0;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "cell"
                                                                            ],
                                                                            events: {
                                                                                click: function(evt) {
                                                                                    return _vm_.onOpen($item.i0, evt);
                                                                                }
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "thumb"
                                                                                ],
                                                                                src: function() {
                                                                                    return $item.s0;
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ])
                                                                ];
                                                            }),
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return $item.n > 1;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "cell"
                                                                            ],
                                                                            events: {
                                                                                click: function(evt) {
                                                                                    return _vm_.onOpen($item.i1, evt);
                                                                                }
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "thumb"
                                                                                ],
                                                                                src: function() {
                                                                                    return $item.s1;
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ])
                                                                ];
                                                            }),
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return $item.n > 2;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "cell"
                                                                            ],
                                                                            events: {
                                                                                click: function(evt) {
                                                                                    return _vm_.onOpen($item.i2, evt);
                                                                                }
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "thumb"
                                                                                ],
                                                                                src: function() {
                                                                                    return $item.s2;
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ])
                                                                ];
                                                            })
                                                        ])
                                                    ];
                                                })
                                            ])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return 0 === _vm_.count;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "empty",
                                                        "column",
                                                        "center"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "empty-t"
                                                        ],
                                                        value: "暂无图片"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "empty-s"
                                                        ],
                                                        value: "点右下 + 导入"
                                                    }
                                                }, [])
                                            ])
                                        ];
                                    }),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "home-bottom"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "fab",
                                                    "gray",
                                                    "center"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.gotoSettings(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "dots-row",
                                                        "center"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "dot"
                                                        ]
                                                    }
                                                }, []),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "dot"
                                                        ]
                                                    }
                                                }, []),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "dot"
                                                        ]
                                                    }
                                                }, [])
                                            ])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "fab",
                                                    "blue",
                                                    "center"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.gotoImport(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "plus"
                                                    ],
                                                    value: "+"
                                                }
                                            }, [])
                                        ])
                                    ])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.viewing;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "viewer"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "img-stage",
                                                "center"
                                            ],
                                            events: {
                                                touchstart: function(evt) {
                                                    return _vm_.onTouchStart(evt);
                                                },
                                                touchmove: function(evt) {
                                                    return _vm_.onTouchMove(evt);
                                                },
                                                touchend: function(evt) {
                                                    return _vm_.onTouchEnd(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.peerVisible && !_vm_.zoomed;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("image", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "photo"
                                                        ],
                                                        src: function() {
                                                            return _vm_.peerSrc;
                                                        },
                                                        style: function() {
                                                            return __webpack_require__.g.$translateStyle$("left:" + _vm_.peerX + "px;top:" + _vm_.panY + "px");
                                                        }
                                                    }
                                                }, [])
                                            ];
                                        }),
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return !_vm_.zoomed;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("image", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "photo"
                                                        ],
                                                        src: function() {
                                                            return _vm_.currentSrc;
                                                        },
                                                        style: function() {
                                                            return __webpack_require__.g.$translateStyle$("left:" + _vm_.panX + "px;top:" + _vm_.panY + "px");
                                                        }
                                                    }
                                                }, [])
                                            ];
                                        }),
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.zoomed;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("image", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "photo-zoom"
                                                        ],
                                                        src: function() {
                                                            return _vm_.currentSrc;
                                                        },
                                                        style: function() {
                                                            return __webpack_require__.g.$translateStyle$("left:" + _vm_.offX + "px;top:" + _vm_.offY + "px");
                                                        }
                                                    }
                                                }, [])
                                            ];
                                        })
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
                                                    return _vm_.onClose(evt);
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
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "rbtn",
                                                "more-btn",
                                                "center"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.toggleMenu(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "dots-row",
                                                    "center"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "dot"
                                                    ]
                                                }
                                            }, []),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "dot"
                                                    ]
                                                }
                                            }, []),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "dot"
                                                    ]
                                                }
                                            }, [])
                                        ])
                                    ]),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.menuOpen;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "more-menu",
                                                        "column"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "menu-item",
                                                            "center"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.onMenuFav(evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "menu-t"
                                                            ],
                                                            value: function() {
                                                                return _vm_.favBtnText;
                                                            }
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "menu-item",
                                                            "center"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.onMenuZoom(evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "menu-t"
                                                            ],
                                                            value: function() {
                                                                return _vm_.zoomBtn;
                                                            }
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "menu-item",
                                                            "center"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.onMenuDelete(evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "menu-t"
                                                            ],
                                                            value: "删除"
                                                        }
                                                    }, [])
                                                ])
                                            ])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return !_vm_.menuOpen;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "page-count"
                                                    ],
                                                    value: function() {
                                                        return _vm_.pageNo;
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return !_vm_.menuOpen;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "nav-pair"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "rbtn",
                                                            "nav-btn",
                                                            "center"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.onPrev(evt);
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
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "rbtn",
                                                            "nav-btn",
                                                            "center"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.onNext(evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "chev"
                                                            ],
                                                            value: "›"
                                                        }
                                                    }, [])
                                                ])
                                            ])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.confirmDelete;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "confirm-mask",
                                                        "center"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "confirm-box",
                                                            "column"
                                                        ]
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "confirm-t"
                                                            ],
                                                            value: "删除这张图片？"
                                                        }
                                                    }, []),
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "confirm-s"
                                                            ],
                                                            value: "删除后无法恢复"
                                                        }
                                                    }, []),
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "confirm-btns"
                                                            ]
                                                        }
                                                    }, [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "confirm-btn",
                                                                    "cancel",
                                                                    "center"
                                                                ],
                                                                events: {
                                                                    click: function(evt) {
                                                                        return _vm_.onCancelDelete(evt);
                                                                    }
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("text", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "confirm-btn-t"
                                                                    ],
                                                                    value: "取消"
                                                                }
                                                            }, [])
                                                        ]),
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "confirm-btn",
                                                                    "danger",
                                                                    "center"
                                                                ],
                                                                events: {
                                                                    click: function(evt) {
                                                                        return _vm_.onConfirmDelete(evt);
                                                                    }
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("text", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "confirm-btn-t"
                                                                    ],
                                                                    value: "删除"
                                                                }
                                                            }, [])
                                                        ])
                                                    ])
                                                ])
                                            ])
                                        ];
                                    })
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.busy && !_vm_.viewing;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "transfer-mask",
                                            "column",
                                            "center"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "transfer-ring",
                                                "center"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "transfer-ico"
                                                ],
                                                value: "↓"
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "transfer-t"
                                            ],
                                            value: "正在导入图片"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "transfer-s"
                                            ],
                                            value: "请勿退出，完成后自动返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.showStatus;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "statusbar",
                                            "center"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "status-txt"
                                            ],
                                            value: function() {
                                                return _vm_.statusText;
                                            }
                                        }
                                    }, [])
                                ])
                            ];
                        })
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
