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
                            borderRadius: "18px",
                            backgroundColor: "#1c1c1e",
                            position: "relative"
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
                            objectFit: "contain"
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
                            fontSize: "15px",
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
                            justifyContent: "flex-start"
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
                                "backtxt"
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
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    const DIR = 'internal://files/gallery/';
                    const FAV_FILE = 'internal://files/gallery/favorites.txt';
                    const BUILTIN = [
                        '/common/images/g1.png'
                    ];
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
                            showStatus: false,
                            statusText: '',
                            statusTimer: null,
                            _loadSeq: 0,
                            _tx: 0,
                            _ty: 0,
                            _ox: 0,
                            _oy: 0,
                            _tt: 0,
                            _px: 0,
                            _py: 0,
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
                            this.loadFavorites();
                        },
                        onShow () {
                            this.loadFavorites();
                        },
                        onDestroy () {
                            if (this.statusTimer) {
                                clearTimeout(this.statusTimer);
                                this.statusTimer = null;
                            }
                            if (this._tapTimer) {
                                clearTimeout(this._tapTimer);
                                this._tapTimer = null;
                            }
                            if (this._animTimer) {
                                clearTimeout(this._animTimer);
                                this._animTimer = null;
                            }
                        },
                        loadFavorites () {
                            const self = this;
                            const seq = (self._loadSeq || 0) + 1;
                            self._loadSeq = seq;
                            _system2.default.readArrayBuffer({
                                uri: FAV_FILE,
                                success: function(res) {
                                    if (seq !== self._loadSeq) return;
                                    const names = self.parseFav(res);
                                    _system2.default.list({
                                        uri: DIR,
                                        success: function(lr) {
                                            if (seq !== self._loadSeq) return;
                                            self.buildPhotos(names, lr.fileList || []);
                                        },
                                        fail: function() {
                                            if (seq === self._loadSeq) self.buildPhotos(names, []);
                                        }
                                    });
                                },
                                fail: function() {
                                    if (seq === self._loadSeq) self.buildPhotos([], []);
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
                        buildPhotos (favNames, list) {
                            const thumbs = {};
                            const fulls = [];
                            const legacy = [];
                            list.forEach(function(f) {
                                const name = String(f.uri || f.name || '').split('/').pop();
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
                            const items = [];
                            BUILTIN.forEach(function(p) {
                                if (favNames.indexOf(p) < 0) return;
                                items.push({
                                    src: p,
                                    thumb: p,
                                    imported: false,
                                    name: ''
                                });
                            });
                            fulls.forEach(function(it) {
                                if (favNames.indexOf(it.name) < 0) return;
                                const tn = thumbs[it.gid];
                                items.push({
                                    src: DIR + it.name,
                                    thumb: tn ? DIR + tn : DIR + it.name,
                                    imported: true,
                                    name: it.name
                                });
                            });
                            legacy.sort();
                            legacy.forEach(function(name) {
                                if (favNames.indexOf(name) < 0) return;
                                items.push({
                                    src: DIR + name,
                                    thumb: DIR + name,
                                    imported: true,
                                    name: name
                                });
                            });
                            this.photos = items;
                            this.count = items.length;
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
                        onOpen (idx) {
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
                            this._swipeDir = 0;
                            this.pageNo = idx + 1 + ' / ' + this.photos.length;
                            this.menuOpen = false;
                            this.viewing = true;
                        },
                        onClose () {
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
                            this.panX = 0;
                            this.panY = 0;
                            this.peerVisible = false;
                            this._swipeDir = 0;
                            if (this.zoomed) this.centerZoom();
                        },
                        setView (idx) {
                            if (0 === this.photos.length) return;
                            this._commitView(idx);
                        },
                        _slide (dir) {
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
                            this.zoomed = !this.zoomed;
                            this.zoomBtn = this.zoomed ? '缩小' : '放大';
                            if (this.zoomed) this.centerZoom();
                        },
                        toggleMenu () {
                            this.menuOpen = !this.menuOpen;
                        },
                        onMenuZoom () {
                            this.menuOpen = false;
                            this.zoomToggle();
                        },
                        onMenuFav () {
                            this.menuOpen = false;
                            const p = this.photos[this.viewIdx];
                            if (!p) return;
                            const key = p.imported ? p.name : p.src;
                            if (!key) return;
                            const self = this;
                            _system2.default.readArrayBuffer({
                                uri: FAV_FILE,
                                success: function(res) {
                                    let names = self.parseFav(res);
                                    names = names.filter(function(n) {
                                        return n !== key;
                                    });
                                    const s = JSON.stringify(names);
                                    const bytes = new Uint8Array(s.length);
                                    for(let i = 0; i < s.length; i++)bytes[i] = 0xff & s.charCodeAt(i);
                                    _system2.default.writeArrayBuffer({
                                        uri: FAV_FILE,
                                        buffer: bytes,
                                        success: function() {
                                            self.photos.splice(self.viewIdx, 1);
                                            self.count = self.photos.length;
                                            if (0 === self.photos.length) {
                                                self.viewing = false;
                                                self.rebuildRows();
                                                self.flashStatus('已取消收藏');
                                                return;
                                            }
                                            if (self.viewIdx >= self.photos.length) self.viewIdx = self.photos.length - 1;
                                            self.setView(self.viewIdx);
                                            self.rebuildRows();
                                            self.flashStatus('已取消收藏');
                                        },
                                        fail: function() {
                                            self.flashStatus('保存失败');
                                        }
                                    });
                                },
                                fail: function() {
                                    self.flashStatus('读取收藏失败');
                                }
                            });
                        },
                        onTouchStart (e) {
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
                        onBackPress () {
                            if (this.menuOpen) {
                                this.menuOpen = false;
                                return true;
                            }
                            if (this.viewing) {
                                if (this.zoomed) this.zoomToggle();
                                else this.viewing = false;
                                return true;
                            }
                            _system.default.back();
                            return true;
                        },
                        onRootSwipe (e) {
                            if (e && 'right' === e.direction) {
                                this.onBackPress();
                                return true;
                            }
                            return false;
                        },
                        goBack () {
                            _system.default.back();
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
                                                value: "收藏"
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
                                                        value: "暂无收藏"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "empty-s"
                                                        ],
                                                        value: "浏览图片时点三点菜单收藏"
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
                                                        return _vm_.goBack(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "backtxt",
                                                        "chev-shift"
                                                    ],
                                                    value: "‹"
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
                                                            value: "取消收藏"
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
                                    })
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
