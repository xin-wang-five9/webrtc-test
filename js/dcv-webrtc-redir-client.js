!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).dcvwebrtc = {})
}(this, (function (e) {
    "use strict";
    var t = {
            major: 0,
            minor: 4,
            patch: 7,
            buildNumber: 0,
            gitHash: "8b733f1e21fe19be8ad6f87905ae89eec817d70c",
            versionStr: "0.4.7+build.0"
        },
        n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function i(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    var r = {exports: {}};
    !function (e) {
        var t, i;
        t = n, i = function () {
            var e = function () {
                }, t = "undefined",
                n = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent),
                i = ["trace", "debug", "info", "warn", "error"], r = {}, s = null;

            function a(e, t) {
                var n = e[t];
                if ("function" == typeof n.bind) return n.bind(e);
                try {
                    return Function.prototype.bind.call(n, e)
                } catch (t) {
                    return function () {
                        return Function.prototype.apply.apply(n, [e, arguments])
                    }
                }
            }

            function o() {
                console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace()
            }

            function d() {
                for (var n = this.getLevel(), r = 0; r < i.length; r++) {
                    var s = i[r];
                    this[s] = r < n ? e : this.methodFactory(s, n, this.name)
                }
                if (this.log = this.debug, typeof console === t && n < this.levels.SILENT) return "No console available for logging"
            }

            function c(e) {
                return function () {
                    typeof console !== t && (d.call(this), this[e].apply(this, arguments))
                }
            }

            function l(i, r, s) {
                return function (i) {
                    return "debug" === i && (i = "log"), typeof console !== t && ("trace" === i && n ? o : void 0 !== console[i] ? a(console, i) : void 0 !== console.log ? a(console, "log") : e)
                }(i) || c.apply(this, arguments)
            }

            function h(e, n) {
                var a, o, c, h = this, u = "loglevel";

                function _() {
                    var e;
                    if (typeof window !== t && u) {
                        try {
                            e = window.localStorage[u]
                        } catch (e) {
                        }
                        if (typeof e === t) try {
                            var n = window.document.cookie, i = encodeURIComponent(u), r = n.indexOf(i + "=");
                            -1 !== r && (e = /^([^;]+)/.exec(n.slice(r + i.length + 1))[1])
                        } catch (e) {
                        }
                        return void 0 === h.levels[e] && (e = void 0), e
                    }
                }

                function f(e) {
                    var t = e;
                    if ("string" == typeof t && void 0 !== h.levels[t.toUpperCase()] && (t = h.levels[t.toUpperCase()]), "number" == typeof t && t >= 0 && t <= h.levels.SILENT) return t;
                    throw new TypeError("log.setLevel() called with invalid level: " + e)
                }

                "string" == typeof e ? u += ":" + e : "symbol" == typeof e && (u = void 0), h.name = e, h.levels = {
                    TRACE: 0,
                    DEBUG: 1,
                    INFO: 2,
                    WARN: 3,
                    ERROR: 4,
                    SILENT: 5
                }, h.methodFactory = n || l, h.getLevel = function () {
                    return null != c ? c : null != o ? o : a
                }, h.setLevel = function (e, n) {
                    return c = f(e), !1 !== n && function (e) {
                        var n = (i[e] || "silent").toUpperCase();
                        if (typeof window !== t && u) {
                            try {
                                return void (window.localStorage[u] = n)
                            } catch (e) {
                            }
                            try {
                                window.document.cookie = encodeURIComponent(u) + "=" + n + ";"
                            } catch (e) {
                            }
                        }
                    }(c), d.call(h)
                }, h.setDefaultLevel = function (e) {
                    o = f(e), _() || h.setLevel(e, !1)
                }, h.resetLevel = function () {
                    c = null, function () {
                        if (typeof window !== t && u) {
                            try {
                                window.localStorage.removeItem(u)
                            } catch (e) {
                            }
                            try {
                                window.document.cookie = encodeURIComponent(u) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                            } catch (e) {
                            }
                        }
                    }(), d.call(h)
                }, h.enableAll = function (e) {
                    h.setLevel(h.levels.TRACE, e)
                }, h.disableAll = function (e) {
                    h.setLevel(h.levels.SILENT, e)
                }, h.rebuild = function () {
                    if (s !== h && (a = f(s.getLevel())), d.call(h), s === h) for (var e in r) r[e].rebuild()
                }, a = f(s ? s.getLevel() : "WARN");
                var E = _();
                null != E && (c = f(E)), d.call(h)
            }

            (s = new h).getLogger = function (e) {
                if ("symbol" != typeof e && "string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
                var t = r[e];
                return t || (t = r[e] = new h(e, s.methodFactory)), t
            };
            var u = typeof window !== t ? window.log : void 0;
            return s.noConflict = function () {
                return typeof window !== t && window.log === s && (window.log = u), s
            }, s.getLoggers = function () {
                return r
            }, s.default = s, s
        }, e.exports ? e.exports = i() : t.log = i()
    }(r);
    var s = i(r.exports);
    const a = Object.freeze({
            HELLO_API_NAME: "hello",
            GETUSERMEDIA_API_NAME: "navigator.mediaDevices.getUserMedia",
            ENUMERATEDEVICES_API_NAME: "navigator.mediaDevices.enumerateDevices",
            ADD_MEDIADEVICES_EVENT_LISTENER: "navigator.mediaDevices.addEventListener",
            GENERATE_CERTIFICATE_API_NAME: "RTCPeerConnection.generateCertificate",
            NEWRTCPEERCONNECTION_API_NAME: "new.RTCPeerConnection",
            PC_GET_CONFIGURATION: "pcs.getConfiguration",
            NEW_AUDIO_CONTEXT: "new.AudioContext",
            CREATE_WORKER: "new.Worker",
            WORKER_POST_MESSAGE: "workers.postMessage",
            WORKER_TERMINATE: "workers.terminate",
            AUDIO_CTX_CREATE_AUDIO_NODE: "audioContexts.createAudioNode",
            AUDIO_CTX_CLOSE: "audioContexts.close",
            AUDIO_NODE_CONNECT: "audioNodes.connect",
            AUDIO_NODE_DISCONNECT: "audioNodes.disconnect",
            AUDIO_PARAM_SET_VALUE_AT_TIME: "audioParams.setValueAtTime",
            AUDIO_PARAM_SET_RAMP_TO_VALUE_AT_TIME: "audioParams.linearRampToValueAtTime",
            AUDIO_NODE_SET_TYPE: "audioNodes.setType",
            AUDIO_NODE_START: "audioNodes.start",
            AUDIO_NODE_STOP: "audioNodes.stop",
            PC_CLOSE_API_NAME: "pcs.close",
            ADDSTREAM_API_NAME: "pcs.addStream",
            STREAM_REMOVE_TRACK: "streams.removeTrack",
            STREAM_ADD_TRACK: "streams.addTrack",
            GET_STATS_API_NAME: "pcs.getStats",
            CREATE_OFFER_API_NAME: "pcs.createOffer",
            SET_LOCAL_DESCRIPTION_API_NAME: "pcs.setLocalDescription",
            ADD_PC_EVENT_LISTENER: "pcs.addEventListener",
            ADD_TRACK_EVENT_LISTENER: "tracks.addEventListener",
            ADD_DTMF_EVENT_LISTENER: "dtmfs.addEventListener",
            ADD_WORKER_EVENT_LISTENER: "workers.addEventListener",
            SET_REMOTE_DESCRIPTION_API_NAME: "pcs.setRemoteDescription",
            ADD_ICE_CANDIDATE_API_NAME: "pcs.addIceCandidate",
            CREATE_MEDIA_ELEMENT_API_NAME: "document.createElement",
            MEDIA_ELEMENT_SET_SINK_ID_API_NAME: "mediaElements.setSinkId",
            MEDIA_ELEMENT_REMOVE: "mediaElements.remove",
            CREATE_ANSWER_API_NAME: "pcs.createAnswer",
            UNLOAD_EVENT_NAME: "unload",
            TOGGLE_TRACK_ENABLED_API_NAME: "tracks.enabled",
            TRACK_STOP_API_NAME: "tracks.stop",
            TRACK_GET_SETTINGS: "tracks.getSettings",
            GET_RECEIVERS_API_NAME: "pcs.getReceivers",
            ADD_TRACK_API_NAME: "pcs.addTrack",
            GET_SENDERS_API_NAME: "pcs.getSenders",
            GET_SENDER_STATS_API_NAME: "senders.getStats",
            GET_RECEIVER_STATS_API_NAME: "receivers.getStats",
            SET_MEDIA_SRC_OBJ_API_NAME: "mediaElements.srcObject",
            SET_MEDIA_HIDDEN_API_NAME: "mediaElements.hidden",
            SET_MEDIA_VOLUME_API_NAME: "mediaElements.volume",
            MEDIA_ELEMENT_PLAY_API_NAME: "mediaElements.play",
            MEDIA_ELEMENT_PAUSE_API_NAME: "mediaElements.pause",
            MEDIA_ELEMENT_MUTED: "mediaElements.muted",
            ADD_TRANSCEIVER_API_NAME: "pcs.addTransceiver",
            GET_TRANSCEIVERS_API_NAME: "pcs.getTransceivers",
            TRANSCEIVER_SET_CODEC_PREFS: "transceivers.setCodecPreferences",
            REPLACE_SENDER_TRACK_API_NAME: "senders.replaceTrack",
            PC_REMOVE_TRACK_API_NAME: "pcs.removeTrack",
            INSERT_DTMF_API_NAME: "dtmfSenders.insertDTMF",
            SENDER_CREATE_ENCODED_STREAMS: "senders.createEncodedStreams",
            RECEIVER_CREATE_ENCODED_STREAMS: "receivers.createEncodedStreams"
        }), o = Object.freeze({
            SIG_STATE_CHANGE: "signalingstatechange",
            TRACK: "track",
            CONN_STATE_CHANGE: "connectionstatechange",
            ICE_CONN_STATE_CHANGE: "iceconnectionstatechange",
            ICE_GATHER_STATE_CHANGE: "icegatheringstatechange",
            ICE_CANDIDATE: "icecandidate",
            NEGOTIATION_NEEDED: "negotiationneeded"
        }), d = Object.freeze({ENDED: "ended", MUTE: "mute", UNMUTE: "unmute"}),
        c = Object.freeze({TONECHANGE: "tonechange"}),
        l = Object.freeze({ERROR: "error", MESSAGE: "message", MESSAGE_ERROR: "messageerror"}),
        h = Object.freeze({DEVICECHANGE: "devicechange"}),
        u = Object.freeze({NEW: "new", AVAILABLE: "available", UNAVAILABLE: "unavailable"}), _ = Object.freeze({
            BETA_CHROME: "epghbidlkiikjcmmloiahljfmkgbjgjb",
            CHROME: "epghbidlkiikjcmmloiahljfmkgbjgjb",
            EDGE: "kjbbkjjiecchbcdoollhgffghfjnbhef"
        });
    for (var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", E = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), p = 0; p < 64; p++) E[f.charCodeAt(p)] = p;
    var g = function (e) {
        var t, n = new Uint8Array(e), i = n.length, r = "";
        for (t = 0; t < i; t += 3) r += f[n[t] >> 2], r += f[(3 & n[t]) << 4 | n[t + 1] >> 4], r += f[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], r += f[63 & n[t + 2]];
        return i % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : i % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r
    }, m = function (e) {
        var t, n, i, r, s, a = .75 * e.length, o = e.length, d = 0;
        "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
        var c = new ArrayBuffer(a), l = new Uint8Array(c);
        for (t = 0; t < o; t += 4) n = E[e.charCodeAt(t)], i = E[e.charCodeAt(t + 1)], r = E[e.charCodeAt(t + 2)], s = E[e.charCodeAt(t + 3)], l[d++] = n << 2 | i >> 4, l[d++] = (15 & i) << 4 | r >> 2, l[d++] = (3 & r) << 6 | 63 & s;
        return c
    }, v = {exports: {}};/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
    !function (e, t) {
        !function (e) {
            function t(e) {
                let t = e.length;
                for (; --t >= 0;) e[t] = 0
            }

            const n = 256, i = 286, r = 30, s = 15,
                a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
                o = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
                d = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
                c = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                l = new Array(576);
            t(l);
            const h = new Array(60);
            t(h);
            const u = new Array(512);
            t(u);
            const _ = new Array(256);
            t(_);
            const f = new Array(29);
            t(f);
            const E = new Array(r);

            function p(e, t, n, i, r) {
                this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = i, this.max_length = r, this.has_stree = e && e.length
            }

            let g, m, v;

            function A(e, t) {
                this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
            }

            t(E);
            const w = e => e < 256 ? u[e] : u[256 + (e >>> 7)], T = (e, t) => {
                e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255
            }, y = (e, t, n) => {
                e.bi_valid > 16 - n ? (e.bi_buf |= t << e.bi_valid & 65535, T(e, e.bi_buf), e.bi_buf = t >> 16 - e.bi_valid, e.bi_valid += n - 16) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n)
            }, b = (e, t, n) => {
                y(e, n[2 * t], n[2 * t + 1])
            }, I = (e, t) => {
                let n = 0;
                do {
                    n |= 1 & e, e >>>= 1, n <<= 1
                } while (--t > 0);
                return n >>> 1
            }, R = (e, t, n) => {
                const i = new Array(16);
                let r, a, o = 0;
                for (r = 1; r <= s; r++) o = o + n[r - 1] << 1, i[r] = o;
                for (a = 0; a <= t; a++) {
                    let t = e[2 * a + 1];
                    0 !== t && (e[2 * a] = I(i[t]++, t))
                }
            }, k = e => {
                let t;
                for (t = 0; t < i; t++) e.dyn_ltree[2 * t] = 0;
                for (t = 0; t < r; t++) e.dyn_dtree[2 * t] = 0;
                for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
                e.dyn_ltree[512] = 1, e.opt_len = e.static_len = 0, e.sym_next = e.matches = 0
            }, N = e => {
                e.bi_valid > 8 ? T(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
            }, D = (e, t, n, i) => {
                const r = 2 * t, s = 2 * n;
                return e[r] < e[s] || e[r] === e[s] && i[t] <= i[n]
            }, S = (e, t, n) => {
                const i = e.heap[n];
                let r = n << 1;
                for (; r <= e.heap_len && (r < e.heap_len && D(t, e.heap[r + 1], e.heap[r], e.depth) && r++, !D(t, i, e.heap[r], e.depth));) e.heap[n] = e.heap[r], n = r, r <<= 1;
                e.heap[n] = i
            }, C = (e, t, i) => {
                let r, s, d, c, l = 0;
                if (0 !== e.sym_next) do {
                    r = 255 & e.pending_buf[e.sym_buf + l++], r += (255 & e.pending_buf[e.sym_buf + l++]) << 8, s = e.pending_buf[e.sym_buf + l++], 0 === r ? b(e, s, t) : (d = _[s], b(e, d + n + 1, t), c = a[d], 0 !== c && (s -= f[d], y(e, s, c)), r--, d = w(r), b(e, d, i), c = o[d], 0 !== c && (r -= E[d], y(e, r, c)))
                } while (l < e.sym_next);
                b(e, 256, t)
            }, x = (e, t) => {
                const n = t.dyn_tree, i = t.stat_desc.static_tree, r = t.stat_desc.has_stree, a = t.stat_desc.elems;
                let o, d, c, l = -1;
                for (e.heap_len = 0, e.heap_max = 573, o = 0; o < a; o++) 0 !== n[2 * o] ? (e.heap[++e.heap_len] = l = o, e.depth[o] = 0) : n[2 * o + 1] = 0;
                for (; e.heap_len < 2;) c = e.heap[++e.heap_len] = l < 2 ? ++l : 0, n[2 * c] = 1, e.depth[c] = 0, e.opt_len--, r && (e.static_len -= i[2 * c + 1]);
                for (t.max_code = l, o = e.heap_len >> 1; o >= 1; o--) S(e, n, o);
                c = a;
                do {
                    o = e.heap[1], e.heap[1] = e.heap[e.heap_len--], S(e, n, 1), d = e.heap[1], e.heap[--e.heap_max] = o, e.heap[--e.heap_max] = d, n[2 * c] = n[2 * o] + n[2 * d], e.depth[c] = (e.depth[o] >= e.depth[d] ? e.depth[o] : e.depth[d]) + 1, n[2 * o + 1] = n[2 * d + 1] = c, e.heap[1] = c++, S(e, n, 1)
                } while (e.heap_len >= 2);
                e.heap[--e.heap_max] = e.heap[1], ((e, t) => {
                    const n = t.dyn_tree, i = t.max_code, r = t.stat_desc.static_tree, a = t.stat_desc.has_stree,
                        o = t.stat_desc.extra_bits, d = t.stat_desc.extra_base, c = t.stat_desc.max_length;
                    let l, h, u, _, f, E, p = 0;
                    for (_ = 0; _ <= s; _++) e.bl_count[_] = 0;
                    for (n[2 * e.heap[e.heap_max] + 1] = 0, l = e.heap_max + 1; l < 573; l++) h = e.heap[l], _ = n[2 * n[2 * h + 1] + 1] + 1, _ > c && (_ = c, p++), n[2 * h + 1] = _, h > i || (e.bl_count[_]++, f = 0, h >= d && (f = o[h - d]), E = n[2 * h], e.opt_len += E * (_ + f), a && (e.static_len += E * (r[2 * h + 1] + f)));
                    if (0 !== p) {
                        do {
                            for (_ = c - 1; 0 === e.bl_count[_];) _--;
                            e.bl_count[_]--, e.bl_count[_ + 1] += 2, e.bl_count[c]--, p -= 2
                        } while (p > 0);
                        for (_ = c; 0 !== _; _--) for (h = e.bl_count[_]; 0 !== h;) u = e.heap[--l], u > i || (n[2 * u + 1] !== _ && (e.opt_len += (_ - n[2 * u + 1]) * n[2 * u], n[2 * u + 1] = _), h--)
                    }
                })(e, t), R(n, l, e.bl_count)
            }, P = (e, t, n) => {
                let i, r, s = -1, a = t[1], o = 0, d = 7, c = 4;
                for (0 === a && (d = 138, c = 3), t[2 * (n + 1) + 1] = 65535, i = 0; i <= n; i++) r = a, a = t[2 * (i + 1) + 1], ++o < d && r === a || (o < c ? e.bl_tree[2 * r] += o : 0 !== r ? (r !== s && e.bl_tree[2 * r]++, e.bl_tree[32]++) : o <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++, o = 0, s = r, 0 === a ? (d = 138, c = 3) : r === a ? (d = 6, c = 3) : (d = 7, c = 4))
            }, M = (e, t, n) => {
                let i, r, s = -1, a = t[1], o = 0, d = 7, c = 4;
                for (0 === a && (d = 138, c = 3), i = 0; i <= n; i++) if (r = a, a = t[2 * (i + 1) + 1], !(++o < d && r === a)) {
                    if (o < c) do {
                        b(e, r, e.bl_tree)
                    } while (0 != --o); else 0 !== r ? (r !== s && (b(e, r, e.bl_tree), o--), b(e, 16, e.bl_tree), y(e, o - 3, 2)) : o <= 10 ? (b(e, 17, e.bl_tree), y(e, o - 3, 3)) : (b(e, 18, e.bl_tree), y(e, o - 11, 7));
                    o = 0, s = r, 0 === a ? (d = 138, c = 3) : r === a ? (d = 6, c = 3) : (d = 7, c = 4)
                }
            };
            let O = !1;
            const L = (e, t, n, i) => {
                y(e, 0 + (i ? 1 : 0), 3), N(e), T(e, n), T(e, ~n), n && e.pending_buf.set(e.window.subarray(t, t + n), e.pending), e.pending += n
            };
            var U = (e, t, i, r) => {
                let s, a, o = 0;
                e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = (e => {
                    let t, i = 4093624447;
                    for (t = 0; t <= 31; t++, i >>>= 1) if (1 & i && 0 !== e.dyn_ltree[2 * t]) return 0;
                    if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
                    for (t = 32; t < n; t++) if (0 !== e.dyn_ltree[2 * t]) return 1;
                    return 0
                })(e)), x(e, e.l_desc), x(e, e.d_desc), o = (e => {
                    let t;
                    for (P(e, e.dyn_ltree, e.l_desc.max_code), P(e, e.dyn_dtree, e.d_desc.max_code), x(e, e.bl_desc), t = 18; t >= 3 && 0 === e.bl_tree[2 * c[t] + 1]; t--) ;
                    return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
                })(e), s = e.opt_len + 3 + 7 >>> 3, a = e.static_len + 3 + 7 >>> 3, a <= s && (s = a)) : s = a = i + 5, i + 4 <= s && -1 !== t ? L(e, t, i, r) : 4 === e.strategy || a === s ? (y(e, 2 + (r ? 1 : 0), 3), C(e, l, h)) : (y(e, 4 + (r ? 1 : 0), 3), ((e, t, n, i) => {
                    let r;
                    for (y(e, t - 257, 5), y(e, n - 1, 5), y(e, i - 4, 4), r = 0; r < i; r++) y(e, e.bl_tree[2 * c[r] + 1], 3);
                    M(e, e.dyn_ltree, t - 1), M(e, e.dyn_dtree, n - 1)
                })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1), C(e, e.dyn_ltree, e.dyn_dtree)), k(e), r && N(e)
            }, z = {
                _tr_init: e => {
                    O || ((() => {
                        let e, t, n, c, A;
                        const w = new Array(16);
                        for (n = 0, c = 0; c < 28; c++) for (f[c] = n, e = 0; e < 1 << a[c]; e++) _[n++] = c;
                        for (_[n - 1] = c, A = 0, c = 0; c < 16; c++) for (E[c] = A, e = 0; e < 1 << o[c]; e++) u[A++] = c;
                        for (A >>= 7; c < r; c++) for (E[c] = A << 7, e = 0; e < 1 << o[c] - 7; e++) u[256 + A++] = c;
                        for (t = 0; t <= s; t++) w[t] = 0;
                        for (e = 0; e <= 143;) l[2 * e + 1] = 8, e++, w[8]++;
                        for (; e <= 255;) l[2 * e + 1] = 9, e++, w[9]++;
                        for (; e <= 279;) l[2 * e + 1] = 7, e++, w[7]++;
                        for (; e <= 287;) l[2 * e + 1] = 8, e++, w[8]++;
                        for (R(l, 287, w), e = 0; e < r; e++) h[2 * e + 1] = 5, h[2 * e] = I(e, 5);
                        g = new p(l, a, 257, i, s), m = new p(h, o, 0, r, s), v = new p(new Array(0), d, 0, 19, 7)
                    })(), O = !0), e.l_desc = new A(e.dyn_ltree, g), e.d_desc = new A(e.dyn_dtree, m), e.bl_desc = new A(e.bl_tree, v), e.bi_buf = 0, e.bi_valid = 0, k(e)
                },
                _tr_stored_block: L,
                _tr_flush_block: U,
                _tr_tally: (e, t, i) => (e.pending_buf[e.sym_buf + e.sym_next++] = t, e.pending_buf[e.sym_buf + e.sym_next++] = t >> 8, e.pending_buf[e.sym_buf + e.sym_next++] = i, 0 === t ? e.dyn_ltree[2 * i]++ : (e.matches++, t--, e.dyn_ltree[2 * (_[i] + n + 1)]++, e.dyn_dtree[2 * w(t)]++), e.sym_next === e.sym_end),
                _tr_align: e => {
                    y(e, 2, 3), b(e, 256, l), (e => {
                        16 === e.bi_valid ? (T(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
                    })(e)
                }
            }, V = (e, t, n, i) => {
                let r = 65535 & e | 0, s = e >>> 16 & 65535 | 0, a = 0;
                for (; 0 !== n;) {
                    a = n > 2e3 ? 2e3 : n, n -= a;
                    do {
                        r = r + t[i++] | 0, s = s + r | 0
                    } while (--a);
                    r %= 65521, s %= 65521
                }
                return r | s << 16 | 0
            };
            const G = new Uint32Array((() => {
                let e, t = [];
                for (var n = 0; n < 256; n++) {
                    e = n;
                    for (var i = 0; i < 8; i++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                    t[n] = e
                }
                return t
            })());
            var q = (e, t, n, i) => {
                const r = G, s = i + n;
                e ^= -1;
                for (let n = i; n < s; n++) e = e >>> 8 ^ r[255 & (e ^ t[n])];
                return -1 ^ e
            }, H = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            }, j = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_MEM_ERROR: -4,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
            };
            const {
                    _tr_init: B,
                    _tr_stored_block: F,
                    _tr_flush_block: Z,
                    _tr_tally: W,
                    _tr_align: K
                } = z, {
                    Z_NO_FLUSH: $,
                    Z_PARTIAL_FLUSH: J,
                    Z_FULL_FLUSH: Y,
                    Z_FINISH: X,
                    Z_BLOCK: Q,
                    Z_OK: ee,
                    Z_STREAM_END: te,
                    Z_STREAM_ERROR: ne,
                    Z_DATA_ERROR: ie,
                    Z_BUF_ERROR: re,
                    Z_DEFAULT_COMPRESSION: se,
                    Z_FILTERED: ae,
                    Z_HUFFMAN_ONLY: oe,
                    Z_RLE: de,
                    Z_FIXED: ce,
                    Z_DEFAULT_STRATEGY: le,
                    Z_UNKNOWN: he,
                    Z_DEFLATED: ue
                } = j, _e = 258, fe = 262, Ee = 42, pe = 113, ge = 666, me = (e, t) => (e.msg = H[t], t),
                ve = e => 2 * e - (e > 4 ? 9 : 0), Ae = e => {
                    let t = e.length;
                    for (; --t >= 0;) e[t] = 0
                }, we = e => {
                    let t, n, i, r = e.w_size;
                    t = e.hash_size, i = t;
                    do {
                        n = e.head[--i], e.head[i] = n >= r ? n - r : 0
                    } while (--t);
                    t = r, i = t;
                    do {
                        n = e.prev[--i], e.prev[i] = n >= r ? n - r : 0
                    } while (--t)
                };
            let Te = (e, t, n) => (t << e.hash_shift ^ n) & e.hash_mask;
            const ye = e => {
                const t = e.state;
                let n = t.pending;
                n > e.avail_out && (n = e.avail_out), 0 !== n && (e.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + n), e.next_out), e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, 0 === t.pending && (t.pending_out = 0))
            }, be = (e, t) => {
                Z(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, ye(e.strm)
            }, Ie = (e, t) => {
                e.pending_buf[e.pending++] = t
            }, Re = (e, t) => {
                e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t
            }, ke = (e, t, n, i) => {
                let r = e.avail_in;
                return r > i && (r = i), 0 === r ? 0 : (e.avail_in -= r, t.set(e.input.subarray(e.next_in, e.next_in + r), n), 1 === e.state.wrap ? e.adler = V(e.adler, t, r, n) : 2 === e.state.wrap && (e.adler = q(e.adler, t, r, n)), e.next_in += r, e.total_in += r, r)
            }, Ne = (e, t) => {
                let n, i, r = e.max_chain_length, s = e.strstart, a = e.prev_length, o = e.nice_match;
                const d = e.strstart > e.w_size - fe ? e.strstart - (e.w_size - fe) : 0, c = e.window, l = e.w_mask,
                    h = e.prev, u = e.strstart + _e;
                let _ = c[s + a - 1], f = c[s + a];
                e.prev_length >= e.good_match && (r >>= 2), o > e.lookahead && (o = e.lookahead);
                do {
                    if (n = t, c[n + a] === f && c[n + a - 1] === _ && c[n] === c[s] && c[++n] === c[s + 1]) {
                        s += 2, n++;
                        do {
                        } while (c[++s] === c[++n] && c[++s] === c[++n] && c[++s] === c[++n] && c[++s] === c[++n] && c[++s] === c[++n] && c[++s] === c[++n] && c[++s] === c[++n] && c[++s] === c[++n] && s < u);
                        if (i = _e - (u - s), s = u - _e, i > a) {
                            if (e.match_start = t, a = i, i >= o) break;
                            _ = c[s + a - 1], f = c[s + a]
                        }
                    }
                } while ((t = h[t & l]) > d && 0 != --r);
                return a <= e.lookahead ? a : e.lookahead
            }, De = e => {
                const t = e.w_size;
                let n, i, r;
                do {
                    if (i = e.window_size - e.lookahead - e.strstart, e.strstart >= t + (t - fe) && (e.window.set(e.window.subarray(t, t + t - i), 0), e.match_start -= t, e.strstart -= t, e.block_start -= t, e.insert > e.strstart && (e.insert = e.strstart), we(e), i += t), 0 === e.strm.avail_in) break;
                    if (n = ke(e.strm, e.window, e.strstart + e.lookahead, i), e.lookahead += n, e.lookahead + e.insert >= 3) for (r = e.strstart - e.insert, e.ins_h = e.window[r], e.ins_h = Te(e, e.ins_h, e.window[r + 1]); e.insert && (e.ins_h = Te(e, e.ins_h, e.window[r + 3 - 1]), e.prev[r & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = r, r++, e.insert--, !(e.lookahead + e.insert < 3));) ;
                } while (e.lookahead < fe && 0 !== e.strm.avail_in)
            }, Se = (e, t) => {
                let n, i, r, s = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5, a = 0,
                    o = e.strm.avail_in;
                do {
                    if (n = 65535, r = e.bi_valid + 42 >> 3, e.strm.avail_out < r) break;
                    if (r = e.strm.avail_out - r, i = e.strstart - e.block_start, n > i + e.strm.avail_in && (n = i + e.strm.avail_in), n > r && (n = r), n < s && (0 === n && t !== X || t === $ || n !== i + e.strm.avail_in)) break;
                    a = t === X && n === i + e.strm.avail_in ? 1 : 0, F(e, 0, 0, a), e.pending_buf[e.pending - 4] = n, e.pending_buf[e.pending - 3] = n >> 8, e.pending_buf[e.pending - 2] = ~n, e.pending_buf[e.pending - 1] = ~n >> 8, ye(e.strm), i && (i > n && (i = n), e.strm.output.set(e.window.subarray(e.block_start, e.block_start + i), e.strm.next_out), e.strm.next_out += i, e.strm.avail_out -= i, e.strm.total_out += i, e.block_start += i, n -= i), n && (ke(e.strm, e.strm.output, e.strm.next_out, n), e.strm.next_out += n, e.strm.avail_out -= n, e.strm.total_out += n)
                } while (0 === a);
                return o -= e.strm.avail_in, o && (o >= e.w_size ? (e.matches = 2, e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0), e.strstart = e.w_size, e.insert = e.strstart) : (e.window_size - e.strstart <= o && (e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, e.insert > e.strstart && (e.insert = e.strstart)), e.window.set(e.strm.input.subarray(e.strm.next_in - o, e.strm.next_in), e.strstart), e.strstart += o, e.insert += o > e.w_size - e.insert ? e.w_size - e.insert : o), e.block_start = e.strstart), e.high_water < e.strstart && (e.high_water = e.strstart), a ? 4 : t !== $ && t !== X && 0 === e.strm.avail_in && e.strstart === e.block_start ? 2 : (r = e.window_size - e.strstart, e.strm.avail_in > r && e.block_start >= e.w_size && (e.block_start -= e.w_size, e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, r += e.w_size, e.insert > e.strstart && (e.insert = e.strstart)), r > e.strm.avail_in && (r = e.strm.avail_in), r && (ke(e.strm, e.window, e.strstart, r), e.strstart += r, e.insert += r > e.w_size - e.insert ? e.w_size - e.insert : r), e.high_water < e.strstart && (e.high_water = e.strstart), r = e.bi_valid + 42 >> 3, r = e.pending_buf_size - r > 65535 ? 65535 : e.pending_buf_size - r, s = r > e.w_size ? e.w_size : r, i = e.strstart - e.block_start, (i >= s || (i || t === X) && t !== $ && 0 === e.strm.avail_in && i <= r) && (n = i > r ? r : i, a = t === X && 0 === e.strm.avail_in && n === i ? 1 : 0, F(e, e.block_start, n, a), e.block_start += n, ye(e.strm)), a ? 3 : 1)
            }, Ce = (e, t) => {
                let n, i;
                for (; ;) {
                    if (e.lookahead < fe) {
                        if (De(e), e.lookahead < fe && t === $) return 1;
                        if (0 === e.lookahead) break
                    }
                    if (n = 0, e.lookahead >= 3 && (e.ins_h = Te(e, e.ins_h, e.window[e.strstart + 3 - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== n && e.strstart - n <= e.w_size - fe && (e.match_length = Ne(e, n)), e.match_length >= 3) if (i = W(e, e.strstart - e.match_start, e.match_length - 3), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
                        e.match_length--;
                        do {
                            e.strstart++, e.ins_h = Te(e, e.ins_h, e.window[e.strstart + 3 - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart
                        } while (0 != --e.match_length);
                        e.strstart++
                    } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = Te(e, e.ins_h, e.window[e.strstart + 1]); else i = W(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
                    if (i && (be(e, !1), 0 === e.strm.avail_out)) return 1
                }
                return e.insert = e.strstart < 2 ? e.strstart : 2, t === X ? (be(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.sym_next && (be(e, !1), 0 === e.strm.avail_out) ? 1 : 2
            }, xe = (e, t) => {
                let n, i, r;
                for (; ;) {
                    if (e.lookahead < fe) {
                        if (De(e), e.lookahead < fe && t === $) return 1;
                        if (0 === e.lookahead) break
                    }
                    if (n = 0, e.lookahead >= 3 && (e.ins_h = Te(e, e.ins_h, e.window[e.strstart + 3 - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = 2, 0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - fe && (e.match_length = Ne(e, n), e.match_length <= 5 && (e.strategy === ae || 3 === e.match_length && e.strstart - e.match_start > 4096) && (e.match_length = 2)), e.prev_length >= 3 && e.match_length <= e.prev_length) {
                        r = e.strstart + e.lookahead - 3, i = W(e, e.strstart - 1 - e.prev_match, e.prev_length - 3), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
                        do {
                            ++e.strstart <= r && (e.ins_h = Te(e, e.ins_h, e.window[e.strstart + 3 - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart)
                        } while (0 != --e.prev_length);
                        if (e.match_available = 0, e.match_length = 2, e.strstart++, i && (be(e, !1), 0 === e.strm.avail_out)) return 1
                    } else if (e.match_available) {
                        if (i = W(e, 0, e.window[e.strstart - 1]), i && be(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return 1
                    } else e.match_available = 1, e.strstart++, e.lookahead--
                }
                return e.match_available && (i = W(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < 2 ? e.strstart : 2, t === X ? (be(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.sym_next && (be(e, !1), 0 === e.strm.avail_out) ? 1 : 2
            };

            function Pe(e, t, n, i, r) {
                this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = i, this.func = r
            }

            const Me = [new Pe(0, 0, 0, 0, Se), new Pe(4, 4, 8, 4, Ce), new Pe(4, 5, 16, 8, Ce), new Pe(4, 6, 32, 32, Ce), new Pe(4, 4, 16, 16, xe), new Pe(8, 16, 32, 32, xe), new Pe(8, 16, 128, 128, xe), new Pe(8, 32, 128, 256, xe), new Pe(32, 128, 258, 1024, xe), new Pe(32, 258, 258, 4096, xe)];

            function Oe() {
                this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = ue, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(1146), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), Ae(this.dyn_ltree), Ae(this.dyn_dtree), Ae(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(573), Ae(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(573), Ae(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
            }

            const Le = e => {
                if (!e) return 1;
                const t = e.state;
                return !t || t.strm !== e || t.status !== Ee && 57 !== t.status && 69 !== t.status && 73 !== t.status && 91 !== t.status && 103 !== t.status && t.status !== pe && t.status !== ge ? 1 : 0
            }, Ue = e => {
                if (Le(e)) return me(e, ne);
                e.total_in = e.total_out = 0, e.data_type = he;
                const t = e.state;
                return t.pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = 2 === t.wrap ? 57 : t.wrap ? Ee : pe, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = -2, B(t), ee
            }, ze = e => {
                const t = Ue(e);
                var n;
                return t === ee && ((n = e.state).window_size = 2 * n.w_size, Ae(n.head), n.max_lazy_match = Me[n.level].max_lazy, n.good_match = Me[n.level].good_length, n.nice_match = Me[n.level].nice_length, n.max_chain_length = Me[n.level].max_chain, n.strstart = 0, n.block_start = 0, n.lookahead = 0, n.insert = 0, n.match_length = n.prev_length = 2, n.match_available = 0, n.ins_h = 0), t
            }, Ve = (e, t, n, i, r, s) => {
                if (!e) return ne;
                let a = 1;
                if (t === se && (t = 6), i < 0 ? (a = 0, i = -i) : i > 15 && (a = 2, i -= 16), r < 1 || r > 9 || n !== ue || i < 8 || i > 15 || t < 0 || t > 9 || s < 0 || s > ce || 8 === i && 1 !== a) return me(e, ne);
                8 === i && (i = 9);
                const o = new Oe;
                return e.state = o, o.strm = e, o.status = Ee, o.wrap = a, o.gzhead = null, o.w_bits = i, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = r + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3), o.window = new Uint8Array(2 * o.w_size), o.head = new Uint16Array(o.hash_size), o.prev = new Uint16Array(o.w_size), o.lit_bufsize = 1 << r + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new Uint8Array(o.pending_buf_size), o.sym_buf = o.lit_bufsize, o.sym_end = 3 * (o.lit_bufsize - 1), o.level = t, o.strategy = s, o.method = n, ze(e)
            };
            var Ge = {
                deflateInit: (e, t) => Ve(e, t, ue, 15, 8, le),
                deflateInit2: Ve,
                deflateReset: ze,
                deflateResetKeep: Ue,
                deflateSetHeader: (e, t) => Le(e) || 2 !== e.state.wrap ? ne : (e.state.gzhead = t, ee),
                deflate: (e, t) => {
                    if (Le(e) || t > Q || t < 0) return e ? me(e, ne) : ne;
                    const n = e.state;
                    if (!e.output || 0 !== e.avail_in && !e.input || n.status === ge && t !== X) return me(e, 0 === e.avail_out ? re : ne);
                    const i = n.last_flush;
                    if (n.last_flush = t, 0 !== n.pending) {
                        if (ye(e), 0 === e.avail_out) return n.last_flush = -1, ee
                    } else if (0 === e.avail_in && ve(t) <= ve(i) && t !== X) return me(e, re);
                    if (n.status === ge && 0 !== e.avail_in) return me(e, re);
                    if (n.status === Ee && 0 === n.wrap && (n.status = pe), n.status === Ee) {
                        let t = ue + (n.w_bits - 8 << 4) << 8, i = -1;
                        if (i = n.strategy >= oe || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3, t |= i << 6, 0 !== n.strstart && (t |= 32), t += 31 - t % 31, Re(n, t), 0 !== n.strstart && (Re(n, e.adler >>> 16), Re(n, 65535 & e.adler)), e.adler = 1, n.status = pe, ye(e), 0 !== n.pending) return n.last_flush = -1, ee
                    }
                    if (57 === n.status) if (e.adler = 0, Ie(n, 31), Ie(n, 139), Ie(n, 8), n.gzhead) Ie(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)), Ie(n, 255 & n.gzhead.time), Ie(n, n.gzhead.time >> 8 & 255), Ie(n, n.gzhead.time >> 16 & 255), Ie(n, n.gzhead.time >> 24 & 255), Ie(n, 9 === n.level ? 2 : n.strategy >= oe || n.level < 2 ? 4 : 0), Ie(n, 255 & n.gzhead.os), n.gzhead.extra && n.gzhead.extra.length && (Ie(n, 255 & n.gzhead.extra.length), Ie(n, n.gzhead.extra.length >> 8 & 255)), n.gzhead.hcrc && (e.adler = q(e.adler, n.pending_buf, n.pending, 0)), n.gzindex = 0, n.status = 69; else if (Ie(n, 0), Ie(n, 0), Ie(n, 0), Ie(n, 0), Ie(n, 0), Ie(n, 9 === n.level ? 2 : n.strategy >= oe || n.level < 2 ? 4 : 0), Ie(n, 3), n.status = pe, ye(e), 0 !== n.pending) return n.last_flush = -1, ee;
                    if (69 === n.status) {
                        if (n.gzhead.extra) {
                            let t = n.pending, i = (65535 & n.gzhead.extra.length) - n.gzindex;
                            for (; n.pending + i > n.pending_buf_size;) {
                                let r = n.pending_buf_size - n.pending;
                                if (n.pending_buf.set(n.gzhead.extra.subarray(n.gzindex, n.gzindex + r), n.pending), n.pending = n.pending_buf_size, n.gzhead.hcrc && n.pending > t && (e.adler = q(e.adler, n.pending_buf, n.pending - t, t)), n.gzindex += r, ye(e), 0 !== n.pending) return n.last_flush = -1, ee;
                                t = 0, i -= r
                            }
                            let r = new Uint8Array(n.gzhead.extra);
                            n.pending_buf.set(r.subarray(n.gzindex, n.gzindex + i), n.pending), n.pending += i, n.gzhead.hcrc && n.pending > t && (e.adler = q(e.adler, n.pending_buf, n.pending - t, t)), n.gzindex = 0
                        }
                        n.status = 73
                    }
                    if (73 === n.status) {
                        if (n.gzhead.name) {
                            let t, i = n.pending;
                            do {
                                if (n.pending === n.pending_buf_size) {
                                    if (n.gzhead.hcrc && n.pending > i && (e.adler = q(e.adler, n.pending_buf, n.pending - i, i)), ye(e), 0 !== n.pending) return n.last_flush = -1, ee;
                                    i = 0
                                }
                                t = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0, Ie(n, t)
                            } while (0 !== t);
                            n.gzhead.hcrc && n.pending > i && (e.adler = q(e.adler, n.pending_buf, n.pending - i, i)), n.gzindex = 0
                        }
                        n.status = 91
                    }
                    if (91 === n.status) {
                        if (n.gzhead.comment) {
                            let t, i = n.pending;
                            do {
                                if (n.pending === n.pending_buf_size) {
                                    if (n.gzhead.hcrc && n.pending > i && (e.adler = q(e.adler, n.pending_buf, n.pending - i, i)), ye(e), 0 !== n.pending) return n.last_flush = -1, ee;
                                    i = 0
                                }
                                t = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0, Ie(n, t)
                            } while (0 !== t);
                            n.gzhead.hcrc && n.pending > i && (e.adler = q(e.adler, n.pending_buf, n.pending - i, i))
                        }
                        n.status = 103
                    }
                    if (103 === n.status) {
                        if (n.gzhead.hcrc) {
                            if (n.pending + 2 > n.pending_buf_size && (ye(e), 0 !== n.pending)) return n.last_flush = -1, ee;
                            Ie(n, 255 & e.adler), Ie(n, e.adler >> 8 & 255), e.adler = 0
                        }
                        if (n.status = pe, ye(e), 0 !== n.pending) return n.last_flush = -1, ee
                    }
                    if (0 !== e.avail_in || 0 !== n.lookahead || t !== $ && n.status !== ge) {
                        let i = 0 === n.level ? Se(n, t) : n.strategy === oe ? ((e, t) => {
                            let n;
                            for (; ;) {
                                if (0 === e.lookahead && (De(e), 0 === e.lookahead)) {
                                    if (t === $) return 1;
                                    break
                                }
                                if (e.match_length = 0, n = W(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (be(e, !1), 0 === e.strm.avail_out)) return 1
                            }
                            return e.insert = 0, t === X ? (be(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.sym_next && (be(e, !1), 0 === e.strm.avail_out) ? 1 : 2
                        })(n, t) : n.strategy === de ? ((e, t) => {
                            let n, i, r, s;
                            const a = e.window;
                            for (; ;) {
                                if (e.lookahead <= _e) {
                                    if (De(e), e.lookahead <= _e && t === $) return 1;
                                    if (0 === e.lookahead) break
                                }
                                if (e.match_length = 0, e.lookahead >= 3 && e.strstart > 0 && (r = e.strstart - 1, i = a[r], i === a[++r] && i === a[++r] && i === a[++r])) {
                                    s = e.strstart + _e;
                                    do {
                                    } while (i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && r < s);
                                    e.match_length = _e - (s - r), e.match_length > e.lookahead && (e.match_length = e.lookahead)
                                }
                                if (e.match_length >= 3 ? (n = W(e, 1, e.match_length - 3), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = W(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (be(e, !1), 0 === e.strm.avail_out)) return 1
                            }
                            return e.insert = 0, t === X ? (be(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.sym_next && (be(e, !1), 0 === e.strm.avail_out) ? 1 : 2
                        })(n, t) : Me[n.level].func(n, t);
                        if (3 !== i && 4 !== i || (n.status = ge), 1 === i || 3 === i) return 0 === e.avail_out && (n.last_flush = -1), ee;
                        if (2 === i && (t === J ? K(n) : t !== Q && (F(n, 0, 0, !1), t === Y && (Ae(n.head), 0 === n.lookahead && (n.strstart = 0, n.block_start = 0, n.insert = 0))), ye(e), 0 === e.avail_out)) return n.last_flush = -1, ee
                    }
                    return t !== X ? ee : n.wrap <= 0 ? te : (2 === n.wrap ? (Ie(n, 255 & e.adler), Ie(n, e.adler >> 8 & 255), Ie(n, e.adler >> 16 & 255), Ie(n, e.adler >> 24 & 255), Ie(n, 255 & e.total_in), Ie(n, e.total_in >> 8 & 255), Ie(n, e.total_in >> 16 & 255), Ie(n, e.total_in >> 24 & 255)) : (Re(n, e.adler >>> 16), Re(n, 65535 & e.adler)), ye(e), n.wrap > 0 && (n.wrap = -n.wrap), 0 !== n.pending ? ee : te)
                },
                deflateEnd: e => {
                    if (Le(e)) return ne;
                    const t = e.state.status;
                    return e.state = null, t === pe ? me(e, ie) : ee
                },
                deflateSetDictionary: (e, t) => {
                    let n = t.length;
                    if (Le(e)) return ne;
                    const i = e.state, r = i.wrap;
                    if (2 === r || 1 === r && i.status !== Ee || i.lookahead) return ne;
                    if (1 === r && (e.adler = V(e.adler, t, n, 0)), i.wrap = 0, n >= i.w_size) {
                        0 === r && (Ae(i.head), i.strstart = 0, i.block_start = 0, i.insert = 0);
                        let e = new Uint8Array(i.w_size);
                        e.set(t.subarray(n - i.w_size, n), 0), t = e, n = i.w_size
                    }
                    const s = e.avail_in, a = e.next_in, o = e.input;
                    for (e.avail_in = n, e.next_in = 0, e.input = t, De(i); i.lookahead >= 3;) {
                        let e = i.strstart, t = i.lookahead - 2;
                        do {
                            i.ins_h = Te(i, i.ins_h, i.window[e + 3 - 1]), i.prev[e & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = e, e++
                        } while (--t);
                        i.strstart = e, i.lookahead = 2, De(i)
                    }
                    return i.strstart += i.lookahead, i.block_start = i.strstart, i.insert = i.lookahead, i.lookahead = 0, i.match_length = i.prev_length = 2, i.match_available = 0, e.next_in = a, e.input = o, e.avail_in = s, i.wrap = r, ee
                },
                deflateInfo: "pako deflate (from Nodeca project)"
            };
            const qe = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
            var He = function (e) {
                const t = Array.prototype.slice.call(arguments, 1);
                for (; t.length;) {
                    const n = t.shift();
                    if (n) {
                        if ("object" != typeof n) throw new TypeError(n + "must be non-object");
                        for (const t in n) qe(n, t) && (e[t] = n[t])
                    }
                }
                return e
            }, je = e => {
                let t = 0;
                for (let n = 0, i = e.length; n < i; n++) t += e[n].length;
                const n = new Uint8Array(t);
                for (let t = 0, i = 0, r = e.length; t < r; t++) {
                    let r = e[t];
                    n.set(r, i), i += r.length
                }
                return n
            };
            let Be = !0;
            try {
                String.fromCharCode.apply(null, new Uint8Array(1))
            } catch (e) {
                Be = !1
            }
            const Fe = new Uint8Array(256);
            for (let e = 0; e < 256; e++) Fe[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
            Fe[254] = Fe[254] = 1;
            var Ze = e => {
                if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return (new TextEncoder).encode(e);
                let t, n, i, r, s, a = e.length, o = 0;
                for (r = 0; r < a; r++) n = e.charCodeAt(r), 55296 == (64512 & n) && r + 1 < a && (i = e.charCodeAt(r + 1), 56320 == (64512 & i) && (n = 65536 + (n - 55296 << 10) + (i - 56320), r++)), o += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
                for (t = new Uint8Array(o), s = 0, r = 0; s < o; r++) n = e.charCodeAt(r), 55296 == (64512 & n) && r + 1 < a && (i = e.charCodeAt(r + 1), 56320 == (64512 & i) && (n = 65536 + (n - 55296 << 10) + (i - 56320), r++)), n < 128 ? t[s++] = n : n < 2048 ? (t[s++] = 192 | n >>> 6, t[s++] = 128 | 63 & n) : n < 65536 ? (t[s++] = 224 | n >>> 12, t[s++] = 128 | n >>> 6 & 63, t[s++] = 128 | 63 & n) : (t[s++] = 240 | n >>> 18, t[s++] = 128 | n >>> 12 & 63, t[s++] = 128 | n >>> 6 & 63, t[s++] = 128 | 63 & n);
                return t
            }, We = (e, t) => {
                const n = t || e.length;
                if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) return (new TextDecoder).decode(e.subarray(0, t));
                let i, r;
                const s = new Array(2 * n);
                for (r = 0, i = 0; i < n;) {
                    let t = e[i++];
                    if (t < 128) {
                        s[r++] = t;
                        continue
                    }
                    let a = Fe[t];
                    if (a > 4) s[r++] = 65533, i += a - 1; else {
                        for (t &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && i < n;) t = t << 6 | 63 & e[i++], a--;
                        a > 1 ? s[r++] = 65533 : t < 65536 ? s[r++] = t : (t -= 65536, s[r++] = 55296 | t >> 10 & 1023, s[r++] = 56320 | 1023 & t)
                    }
                }
                return ((e, t) => {
                    if (t < 65534 && e.subarray && Be) return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
                    let n = "";
                    for (let i = 0; i < t; i++) n += String.fromCharCode(e[i]);
                    return n
                })(s, r)
            }, Ke = (e, t) => {
                (t = t || e.length) > e.length && (t = e.length);
                let n = t - 1;
                for (; n >= 0 && 128 == (192 & e[n]);) n--;
                return n < 0 || 0 === n ? t : n + Fe[e[n]] > t ? n : t
            }, $e = function () {
                this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
            };
            const Je = Object.prototype.toString, {
                Z_NO_FLUSH: Ye,
                Z_SYNC_FLUSH: Xe,
                Z_FULL_FLUSH: Qe,
                Z_FINISH: et,
                Z_OK: tt,
                Z_STREAM_END: nt,
                Z_DEFAULT_COMPRESSION: it,
                Z_DEFAULT_STRATEGY: rt,
                Z_DEFLATED: st
            } = j;

            function at(e) {
                this.options = He({
                    level: it,
                    method: st,
                    chunkSize: 16384,
                    windowBits: 15,
                    memLevel: 8,
                    strategy: rt
                }, e || {});
                let t = this.options;
                t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new $e, this.strm.avail_out = 0;
                let n = Ge.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
                if (n !== tt) throw new Error(H[n]);
                if (t.header && Ge.deflateSetHeader(this.strm, t.header), t.dictionary) {
                    let e;
                    if (e = "string" == typeof t.dictionary ? Ze(t.dictionary) : "[object ArrayBuffer]" === Je.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, n = Ge.deflateSetDictionary(this.strm, e), n !== tt) throw new Error(H[n]);
                    this._dict_set = !0
                }
            }

            function ot(e, t) {
                const n = new at(t);
                if (n.push(e, !0), n.err) throw n.msg || H[n.err];
                return n.result
            }

            at.prototype.push = function (e, t) {
                const n = this.strm, i = this.options.chunkSize;
                let r, s;
                if (this.ended) return !1;
                for (s = t === ~~t ? t : !0 === t ? et : Ye, "string" == typeof e ? n.input = Ze(e) : "[object ArrayBuffer]" === Je.call(e) ? n.input = new Uint8Array(e) : n.input = e, n.next_in = 0, n.avail_in = n.input.length; ;) if (0 === n.avail_out && (n.output = new Uint8Array(i), n.next_out = 0, n.avail_out = i), (s === Xe || s === Qe) && n.avail_out <= 6) this.onData(n.output.subarray(0, n.next_out)), n.avail_out = 0; else {
                    if (r = Ge.deflate(n, s), r === nt) return n.next_out > 0 && this.onData(n.output.subarray(0, n.next_out)), r = Ge.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === tt;
                    if (0 !== n.avail_out) {
                        if (s > 0 && n.next_out > 0) this.onData(n.output.subarray(0, n.next_out)), n.avail_out = 0; else if (0 === n.avail_in) break
                    } else this.onData(n.output)
                }
                return !0
            }, at.prototype.onData = function (e) {
                this.chunks.push(e)
            }, at.prototype.onEnd = function (e) {
                e === tt && (this.result = je(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
            };
            var dt = {
                Deflate: at, deflate: ot, deflateRaw: function (e, t) {
                    return (t = t || {}).raw = !0, ot(e, t)
                }, gzip: function (e, t) {
                    return (t = t || {}).gzip = !0, ot(e, t)
                }, constants: j
            };
            const ct = 16209;
            var lt = function (e, t) {
                let n, i, r, s, a, o, d, c, l, h, u, _, f, E, p, g, m, v, A, w, T, y, b, I;
                const R = e.state;
                n = e.next_in, b = e.input, i = n + (e.avail_in - 5), r = e.next_out, I = e.output, s = r - (t - e.avail_out), a = r + (e.avail_out - 257), o = R.dmax, d = R.wsize, c = R.whave, l = R.wnext, h = R.window, u = R.hold, _ = R.bits, f = R.lencode, E = R.distcode, p = (1 << R.lenbits) - 1, g = (1 << R.distbits) - 1;
                e:do {
                    _ < 15 && (u += b[n++] << _, _ += 8, u += b[n++] << _, _ += 8), m = f[u & p];
                    t:for (; ;) {
                        if (v = m >>> 24, u >>>= v, _ -= v, v = m >>> 16 & 255, 0 === v) I[r++] = 65535 & m; else {
                            if (!(16 & v)) {
                                if (0 == (64 & v)) {
                                    m = f[(65535 & m) + (u & (1 << v) - 1)];
                                    continue t
                                }
                                if (32 & v) {
                                    R.mode = 16191;
                                    break e
                                }
                                e.msg = "invalid literal/length code", R.mode = ct;
                                break e
                            }
                            A = 65535 & m, v &= 15, v && (_ < v && (u += b[n++] << _, _ += 8), A += u & (1 << v) - 1, u >>>= v, _ -= v), _ < 15 && (u += b[n++] << _, _ += 8, u += b[n++] << _, _ += 8), m = E[u & g];
                            n:for (; ;) {
                                if (v = m >>> 24, u >>>= v, _ -= v, v = m >>> 16 & 255, !(16 & v)) {
                                    if (0 == (64 & v)) {
                                        m = E[(65535 & m) + (u & (1 << v) - 1)];
                                        continue n
                                    }
                                    e.msg = "invalid distance code", R.mode = ct;
                                    break e
                                }
                                if (w = 65535 & m, v &= 15, _ < v && (u += b[n++] << _, _ += 8, _ < v && (u += b[n++] << _, _ += 8)), w += u & (1 << v) - 1, w > o) {
                                    e.msg = "invalid distance too far back", R.mode = ct;
                                    break e
                                }
                                if (u >>>= v, _ -= v, v = r - s, w > v) {
                                    if (v = w - v, v > c && R.sane) {
                                        e.msg = "invalid distance too far back", R.mode = ct;
                                        break e
                                    }
                                    if (T = 0, y = h, 0 === l) {
                                        if (T += d - v, v < A) {
                                            A -= v;
                                            do {
                                                I[r++] = h[T++]
                                            } while (--v);
                                            T = r - w, y = I
                                        }
                                    } else if (l < v) {
                                        if (T += d + l - v, v -= l, v < A) {
                                            A -= v;
                                            do {
                                                I[r++] = h[T++]
                                            } while (--v);
                                            if (T = 0, l < A) {
                                                v = l, A -= v;
                                                do {
                                                    I[r++] = h[T++]
                                                } while (--v);
                                                T = r - w, y = I
                                            }
                                        }
                                    } else if (T += l - v, v < A) {
                                        A -= v;
                                        do {
                                            I[r++] = h[T++]
                                        } while (--v);
                                        T = r - w, y = I
                                    }
                                    for (; A > 2;) I[r++] = y[T++], I[r++] = y[T++], I[r++] = y[T++], A -= 3;
                                    A && (I[r++] = y[T++], A > 1 && (I[r++] = y[T++]))
                                } else {
                                    T = r - w;
                                    do {
                                        I[r++] = I[T++], I[r++] = I[T++], I[r++] = I[T++], A -= 3
                                    } while (A > 2);
                                    A && (I[r++] = I[T++], A > 1 && (I[r++] = I[T++]))
                                }
                                break
                            }
                        }
                        break
                    }
                } while (n < i && r < a);
                A = _ >> 3, n -= A, _ -= A << 3, u &= (1 << _) - 1, e.next_in = n, e.next_out = r, e.avail_in = n < i ? i - n + 5 : 5 - (n - i), e.avail_out = r < a ? a - r + 257 : 257 - (r - a), R.hold = u, R.bits = _
            };
            const ht = 15,
                ut = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
                _t = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
                ft = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
                Et = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
            var pt = (e, t, n, i, r, s, a, o) => {
                const d = o.bits;
                let c, l, h, u, _, f, E = 0, p = 0, g = 0, m = 0, v = 0, A = 0, w = 0, T = 0, y = 0, b = 0, I = null;
                const R = new Uint16Array(16), k = new Uint16Array(16);
                let N, D, S, C = null;
                for (E = 0; E <= ht; E++) R[E] = 0;
                for (p = 0; p < i; p++) R[t[n + p]]++;
                for (v = d, m = ht; m >= 1 && 0 === R[m]; m--) ;
                if (v > m && (v = m), 0 === m) return r[s++] = 20971520, r[s++] = 20971520, o.bits = 1, 0;
                for (g = 1; g < m && 0 === R[g]; g++) ;
                for (v < g && (v = g), T = 1, E = 1; E <= ht; E++) if (T <<= 1, T -= R[E], T < 0) return -1;
                if (T > 0 && (0 === e || 1 !== m)) return -1;
                for (k[1] = 0, E = 1; E < ht; E++) k[E + 1] = k[E] + R[E];
                for (p = 0; p < i; p++) 0 !== t[n + p] && (a[k[t[n + p]]++] = p);
                if (0 === e ? (I = C = a, f = 20) : 1 === e ? (I = ut, C = _t, f = 257) : (I = ft, C = Et, f = 0), b = 0, p = 0, E = g, _ = s, A = v, w = 0, h = -1, y = 1 << v, u = y - 1, 1 === e && y > 852 || 2 === e && y > 592) return 1;
                for (; ;) {
                    N = E - w, a[p] + 1 < f ? (D = 0, S = a[p]) : a[p] >= f ? (D = C[a[p] - f], S = I[a[p] - f]) : (D = 96, S = 0), c = 1 << E - w, l = 1 << A, g = l;
                    do {
                        l -= c, r[_ + (b >> w) + l] = N << 24 | D << 16 | S | 0
                    } while (0 !== l);
                    for (c = 1 << E - 1; b & c;) c >>= 1;
                    if (0 !== c ? (b &= c - 1, b += c) : b = 0, p++, 0 == --R[E]) {
                        if (E === m) break;
                        E = t[n + a[p]]
                    }
                    if (E > v && (b & u) !== h) {
                        for (0 === w && (w = v), _ += g, A = E - w, T = 1 << A; A + w < m && (T -= R[A + w], !(T <= 0));) A++, T <<= 1;
                        if (y += 1 << A, 1 === e && y > 852 || 2 === e && y > 592) return 1;
                        h = b & u, r[h] = v << 24 | A << 16 | _ - s | 0
                    }
                }
                return 0 !== b && (r[_ + b] = E - w << 24 | 64 << 16 | 0), o.bits = v, 0
            };
            const {
                    Z_FINISH: gt,
                    Z_BLOCK: mt,
                    Z_TREES: vt,
                    Z_OK: At,
                    Z_STREAM_END: wt,
                    Z_NEED_DICT: Tt,
                    Z_STREAM_ERROR: yt,
                    Z_DATA_ERROR: bt,
                    Z_MEM_ERROR: It,
                    Z_BUF_ERROR: Rt,
                    Z_DEFLATED: kt
                } = j, Nt = 16180, Dt = 16190, St = 16191, Ct = 16192, xt = 16194, Pt = 16199, Mt = 16200, Ot = 16206,
                Lt = 16209, Ut = e => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);

            function zt() {
                this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
            }

            const Vt = e => {
                if (!e) return 1;
                const t = e.state;
                return !t || t.strm !== e || t.mode < Nt || t.mode > 16211 ? 1 : 0
            }, Gt = e => {
                if (Vt(e)) return yt;
                const t = e.state;
                return e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = Nt, t.last = 0, t.havedict = 0, t.flags = -1, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(852), t.distcode = t.distdyn = new Int32Array(592), t.sane = 1, t.back = -1, At
            }, qt = e => {
                if (Vt(e)) return yt;
                const t = e.state;
                return t.wsize = 0, t.whave = 0, t.wnext = 0, Gt(e)
            }, Ht = (e, t) => {
                let n;
                if (Vt(e)) return yt;
                const i = e.state;
                return t < 0 ? (n = 0, t = -t) : (n = 5 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? yt : (null !== i.window && i.wbits !== t && (i.window = null), i.wrap = n, i.wbits = t, qt(e))
            }, jt = (e, t) => {
                if (!e) return yt;
                const n = new zt;
                e.state = n, n.strm = e, n.window = null, n.mode = Nt;
                const i = Ht(e, t);
                return i !== At && (e.state = null), i
            };
            let Bt, Ft, Zt = !0;
            const Wt = e => {
                if (Zt) {
                    Bt = new Int32Array(512), Ft = new Int32Array(32);
                    let t = 0;
                    for (; t < 144;) e.lens[t++] = 8;
                    for (; t < 256;) e.lens[t++] = 9;
                    for (; t < 280;) e.lens[t++] = 7;
                    for (; t < 288;) e.lens[t++] = 8;
                    for (pt(1, e.lens, 0, 288, Bt, 0, e.work, {bits: 9}), t = 0; t < 32;) e.lens[t++] = 5;
                    pt(2, e.lens, 0, 32, Ft, 0, e.work, {bits: 5}), Zt = !1
                }
                e.lencode = Bt, e.lenbits = 9, e.distcode = Ft, e.distbits = 5
            }, Kt = (e, t, n, i) => {
                let r;
                const s = e.state;
                return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new Uint8Array(s.wsize)), i >= s.wsize ? (s.window.set(t.subarray(n - s.wsize, n), 0), s.wnext = 0, s.whave = s.wsize) : (r = s.wsize - s.wnext, r > i && (r = i), s.window.set(t.subarray(n - i, n - i + r), s.wnext), (i -= r) ? (s.window.set(t.subarray(n - i, n), 0), s.wnext = i, s.whave = s.wsize) : (s.wnext += r, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += r))), 0
            };
            var $t = {
                inflateReset: qt,
                inflateReset2: Ht,
                inflateResetKeep: Gt,
                inflateInit: e => jt(e, 15),
                inflateInit2: jt,
                inflate: (e, t) => {
                    let n, i, r, s, a, o, d, c, l, h, u, _, f, E, p, g, m, v, A, w, T, y, b = 0;
                    const I = new Uint8Array(4);
                    let R, k;
                    const N = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
                    if (Vt(e) || !e.output || !e.input && 0 !== e.avail_in) return yt;
                    n = e.state, n.mode === St && (n.mode = Ct), a = e.next_out, r = e.output, d = e.avail_out, s = e.next_in, i = e.input, o = e.avail_in, c = n.hold, l = n.bits, h = o, u = d, y = At;
                    e:for (; ;) switch (n.mode) {
                        case Nt:
                            if (0 === n.wrap) {
                                n.mode = Ct;
                                break
                            }
                            for (; l < 16;) {
                                if (0 === o) break e;
                                o--, c += i[s++] << l, l += 8
                            }
                            if (2 & n.wrap && 35615 === c) {
                                0 === n.wbits && (n.wbits = 15), n.check = 0, I[0] = 255 & c, I[1] = c >>> 8 & 255, n.check = q(n.check, I, 2, 0), c = 0, l = 0, n.mode = 16181;
                                break
                            }
                            if (n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & c) << 8) + (c >> 8)) % 31) {
                                e.msg = "incorrect header check", n.mode = Lt;
                                break
                            }
                            if ((15 & c) !== kt) {
                                e.msg = "unknown compression method", n.mode = Lt;
                                break
                            }
                            if (c >>>= 4, l -= 4, T = 8 + (15 & c), 0 === n.wbits && (n.wbits = T), T > 15 || T > n.wbits) {
                                e.msg = "invalid window size", n.mode = Lt;
                                break
                            }
                            n.dmax = 1 << n.wbits, n.flags = 0, e.adler = n.check = 1, n.mode = 512 & c ? 16189 : St, c = 0, l = 0;
                            break;
                        case 16181:
                            for (; l < 16;) {
                                if (0 === o) break e;
                                o--, c += i[s++] << l, l += 8
                            }
                            if (n.flags = c, (255 & n.flags) !== kt) {
                                e.msg = "unknown compression method", n.mode = Lt;
                                break
                            }
                            if (57344 & n.flags) {
                                e.msg = "unknown header flags set", n.mode = Lt;
                                break
                            }
                            n.head && (n.head.text = c >> 8 & 1), 512 & n.flags && 4 & n.wrap && (I[0] = 255 & c, I[1] = c >>> 8 & 255, n.check = q(n.check, I, 2, 0)), c = 0, l = 0, n.mode = 16182;
                        case 16182:
                            for (; l < 32;) {
                                if (0 === o) break e;
                                o--, c += i[s++] << l, l += 8
                            }
                            n.head && (n.head.time = c), 512 & n.flags && 4 & n.wrap && (I[0] = 255 & c, I[1] = c >>> 8 & 255, I[2] = c >>> 16 & 255, I[3] = c >>> 24 & 255, n.check = q(n.check, I, 4, 0)), c = 0, l = 0, n.mode = 16183;
                        case 16183:
                            for (; l < 16;) {
                                if (0 === o) break e;
                                o--, c += i[s++] << l, l += 8
                            }
                            n.head && (n.head.xflags = 255 & c, n.head.os = c >> 8), 512 & n.flags && 4 & n.wrap && (I[0] = 255 & c, I[1] = c >>> 8 & 255, n.check = q(n.check, I, 2, 0)), c = 0, l = 0, n.mode = 16184;
                        case 16184:
                            if (1024 & n.flags) {
                                for (; l < 16;) {
                                    if (0 === o) break e;
                                    o--, c += i[s++] << l, l += 8
                                }
                                n.length = c, n.head && (n.head.extra_len = c), 512 & n.flags && 4 & n.wrap && (I[0] = 255 & c, I[1] = c >>> 8 & 255, n.check = q(n.check, I, 2, 0)), c = 0, l = 0
                            } else n.head && (n.head.extra = null);
                            n.mode = 16185;
                        case 16185:
                            if (1024 & n.flags && (_ = n.length, _ > o && (_ = o), _ && (n.head && (T = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Uint8Array(n.head.extra_len)), n.head.extra.set(i.subarray(s, s + _), T)), 512 & n.flags && 4 & n.wrap && (n.check = q(n.check, i, _, s)), o -= _, s += _, n.length -= _), n.length)) break e;
                            n.length = 0, n.mode = 16186;
                        case 16186:
                            if (2048 & n.flags) {
                                if (0 === o) break e;
                                _ = 0;
                                do {
                                    T = i[s + _++], n.head && T && n.length < 65536 && (n.head.name += String.fromCharCode(T))
                                } while (T && _ < o);
                                if (512 & n.flags && 4 & n.wrap && (n.check = q(n.check, i, _, s)), o -= _, s += _, T) break e
                            } else n.head && (n.head.name = null);
                            n.length = 0, n.mode = 16187;
                        case 16187:
                            if (4096 & n.flags) {
                                if (0 === o) break e;
                                _ = 0;
                                do {
                                    T = i[s + _++], n.head && T && n.length < 65536 && (n.head.comment += String.fromCharCode(T))
                                } while (T && _ < o);
                                if (512 & n.flags && 4 & n.wrap && (n.check = q(n.check, i, _, s)), o -= _, s += _, T) break e
                            } else n.head && (n.head.comment = null);
                            n.mode = 16188;
                        case 16188:
                            if (512 & n.flags) {
                                for (; l < 16;) {
                                    if (0 === o) break e;
                                    o--, c += i[s++] << l, l += 8
                                }
                                if (4 & n.wrap && c !== (65535 & n.check)) {
                                    e.msg = "header crc mismatch", n.mode = Lt;
                                    break
                                }
                                c = 0, l = 0
                            }
                            n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, n.mode = St;
                            break;
                        case 16189:
                            for (; l < 32;) {
                                if (0 === o) break e;
                                o--, c += i[s++] << l, l += 8
                            }
                            e.adler = n.check = Ut(c), c = 0, l = 0, n.mode = Dt;
                        case Dt:
                            if (0 === n.havedict) return e.next_out = a, e.avail_out = d, e.next_in = s, e.avail_in = o, n.hold = c, n.bits = l, Tt;
                            e.adler = n.check = 1, n.mode = St;
                        case St:
                            if (t === mt || t === vt) break e;
                        case Ct:
                            if (n.last) {
                                c >>>= 7 & l, l -= 7 & l, n.mode = Ot;
                                break
                            }
                            for (; l < 3;) {
                                if (0 === o) break e;
                                o--, c += i[s++] << l, l += 8
                            }
                            switch (n.last = 1 & c, c >>>= 1, l -= 1, 3 & c) {
                                case 0:
                                    n.mode = 16193;
                                    break;
                                case 1:
                                    if (Wt(n), n.mode = Pt, t === vt) {
                                        c >>>= 2, l -= 2;
                                        break e
                                    }
                                    break;
                                case 2:
                                    n.mode = 16196;
                                    break;
                                case 3:
                                    e.msg = "invalid block type", n.mode = Lt
                            }
                            c >>>= 2, l -= 2;
                            break;
                        case 16193:
                            for (c >>>= 7 & l, l -= 7 & l; l < 32;) {
                                if (0 === o) break e;
                                o--, c += i[s++] << l, l += 8
                            }
                            if ((65535 & c) != (c >>> 16 ^ 65535)) {
                                e.msg = "invalid stored block lengths", n.mode = Lt;
                                break
                            }
                            if (n.length = 65535 & c, c = 0, l = 0, n.mode = xt, t === vt) break e;
                        case xt:
                            n.mode = 16195;
                        case 16195:
                            if (_ = n.length, _) {
                                if (_ > o && (_ = o), _ > d && (_ = d), 0 === _) break e;
                                r.set(i.subarray(s, s + _), a), o -= _, s += _, d -= _, a += _, n.length -= _;
                                break
                            }
                            n.mode = St;
                            break;
                        case 16196:
                            for (; l < 14;) {
                                if (0 === o) break e;
                                o--, c += i[s++] << l, l += 8
                            }
                            if (n.nlen = 257 + (31 & c), c >>>= 5, l -= 5, n.ndist = 1 + (31 & c), c >>>= 5, l -= 5, n.ncode = 4 + (15 & c), c >>>= 4, l -= 4, n.nlen > 286 || n.ndist > 30) {
                                e.msg = "too many length or distance symbols", n.mode = Lt;
                                break
                            }
                            n.have = 0, n.mode = 16197;
                        case 16197:
                            for (; n.have < n.ncode;) {
                                for (; l < 3;) {
                                    if (0 === o) break e;
                                    o--, c += i[s++] << l, l += 8
                                }
                                n.lens[N[n.have++]] = 7 & c, c >>>= 3, l -= 3
                            }
                            for (; n.have < 19;) n.lens[N[n.have++]] = 0;
                            if (n.lencode = n.lendyn, n.lenbits = 7, R = {bits: n.lenbits}, y = pt(0, n.lens, 0, 19, n.lencode, 0, n.work, R), n.lenbits = R.bits, y) {
                                e.msg = "invalid code lengths set", n.mode = Lt;
                                break
                            }
                            n.have = 0, n.mode = 16198;
                        case 16198:
                            for (; n.have < n.nlen + n.ndist;) {
                                for (; b = n.lencode[c & (1 << n.lenbits) - 1], p = b >>> 24, g = b >>> 16 & 255, m = 65535 & b, !(p <= l);) {
                                    if (0 === o) break e;
                                    o--, c += i[s++] << l, l += 8
                                }
                                if (m < 16) c >>>= p, l -= p, n.lens[n.have++] = m; else {
                                    if (16 === m) {
                                        for (k = p + 2; l < k;) {
                                            if (0 === o) break e;
                                            o--, c += i[s++] << l, l += 8
                                        }
                                        if (c >>>= p, l -= p, 0 === n.have) {
                                            e.msg = "invalid bit length repeat", n.mode = Lt;
                                            break
                                        }
                                        T = n.lens[n.have - 1], _ = 3 + (3 & c), c >>>= 2, l -= 2
                                    } else if (17 === m) {
                                        for (k = p + 3; l < k;) {
                                            if (0 === o) break e;
                                            o--, c += i[s++] << l, l += 8
                                        }
                                        c >>>= p, l -= p, T = 0, _ = 3 + (7 & c), c >>>= 3, l -= 3
                                    } else {
                                        for (k = p + 7; l < k;) {
                                            if (0 === o) break e;
                                            o--, c += i[s++] << l, l += 8
                                        }
                                        c >>>= p, l -= p, T = 0, _ = 11 + (127 & c), c >>>= 7, l -= 7
                                    }
                                    if (n.have + _ > n.nlen + n.ndist) {
                                        e.msg = "invalid bit length repeat", n.mode = Lt;
                                        break
                                    }
                                    for (; _--;) n.lens[n.have++] = T
                                }
                            }
                            if (n.mode === Lt) break;
                            if (0 === n.lens[256]) {
                                e.msg = "invalid code -- missing end-of-block", n.mode = Lt;
                                break
                            }
                            if (n.lenbits = 9, R = {bits: n.lenbits}, y = pt(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, R), n.lenbits = R.bits, y) {
                                e.msg = "invalid literal/lengths set", n.mode = Lt;
                                break
                            }
                            if (n.distbits = 6, n.distcode = n.distdyn, R = {bits: n.distbits}, y = pt(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, R), n.distbits = R.bits, y) {
                                e.msg = "invalid distances set", n.mode = Lt;
                                break
                            }
                            if (n.mode = Pt, t === vt) break e;
                        case Pt:
                            n.mode = Mt;
                        case Mt:
                            if (o >= 6 && d >= 258) {
                                e.next_out = a, e.avail_out = d, e.next_in = s, e.avail_in = o, n.hold = c, n.bits = l, lt(e, u), a = e.next_out, r = e.output, d = e.avail_out, s = e.next_in, i = e.input, o = e.avail_in, c = n.hold, l = n.bits, n.mode === St && (n.back = -1);
                                break
                            }
                            for (n.back = 0; b = n.lencode[c & (1 << n.lenbits) - 1], p = b >>> 24, g = b >>> 16 & 255, m = 65535 & b, !(p <= l);) {
                                if (0 === o) break e;
                                o--, c += i[s++] << l, l += 8
                            }
                            if (g && 0 == (240 & g)) {
                                for (v = p, A = g, w = m; b = n.lencode[w + ((c & (1 << v + A) - 1) >> v)], p = b >>> 24, g = b >>> 16 & 255, m = 65535 & b, !(v + p <= l);) {
                                    if (0 === o) break e;
                                    o--, c += i[s++] << l, l += 8
                                }
                                c >>>= v, l -= v, n.back += v
                            }
                            if (c >>>= p, l -= p, n.back += p, n.length = m, 0 === g) {
                                n.mode = 16205;
                                break
                            }
                            if (32 & g) {
                                n.back = -1, n.mode = St;
                                break
                            }
                            if (64 & g) {
                                e.msg = "invalid literal/length code", n.mode = Lt;
                                break
                            }
                            n.extra = 15 & g, n.mode = 16201;
                        case 16201:
                            if (n.extra) {
                                for (k = n.extra; l < k;) {
                                    if (0 === o) break e;
                                    o--, c += i[s++] << l, l += 8
                                }
                                n.length += c & (1 << n.extra) - 1, c >>>= n.extra, l -= n.extra, n.back += n.extra
                            }
                            n.was = n.length, n.mode = 16202;
                        case 16202:
                            for (; b = n.distcode[c & (1 << n.distbits) - 1], p = b >>> 24, g = b >>> 16 & 255, m = 65535 & b, !(p <= l);) {
                                if (0 === o) break e;
                                o--, c += i[s++] << l, l += 8
                            }
                            if (0 == (240 & g)) {
                                for (v = p, A = g, w = m; b = n.distcode[w + ((c & (1 << v + A) - 1) >> v)], p = b >>> 24, g = b >>> 16 & 255, m = 65535 & b, !(v + p <= l);) {
                                    if (0 === o) break e;
                                    o--, c += i[s++] << l, l += 8
                                }
                                c >>>= v, l -= v, n.back += v
                            }
                            if (c >>>= p, l -= p, n.back += p, 64 & g) {
                                e.msg = "invalid distance code", n.mode = Lt;
                                break
                            }
                            n.offset = m, n.extra = 15 & g, n.mode = 16203;
                        case 16203:
                            if (n.extra) {
                                for (k = n.extra; l < k;) {
                                    if (0 === o) break e;
                                    o--, c += i[s++] << l, l += 8
                                }
                                n.offset += c & (1 << n.extra) - 1, c >>>= n.extra, l -= n.extra, n.back += n.extra
                            }
                            if (n.offset > n.dmax) {
                                e.msg = "invalid distance too far back", n.mode = Lt;
                                break
                            }
                            n.mode = 16204;
                        case 16204:
                            if (0 === d) break e;
                            if (_ = u - d, n.offset > _) {
                                if (_ = n.offset - _, _ > n.whave && n.sane) {
                                    e.msg = "invalid distance too far back", n.mode = Lt;
                                    break
                                }
                                _ > n.wnext ? (_ -= n.wnext, f = n.wsize - _) : f = n.wnext - _, _ > n.length && (_ = n.length), E = n.window
                            } else E = r, f = a - n.offset, _ = n.length;
                            _ > d && (_ = d), d -= _, n.length -= _;
                            do {
                                r[a++] = E[f++]
                            } while (--_);
                            0 === n.length && (n.mode = Mt);
                            break;
                        case 16205:
                            if (0 === d) break e;
                            r[a++] = n.length, d--, n.mode = Mt;
                            break;
                        case Ot:
                            if (n.wrap) {
                                for (; l < 32;) {
                                    if (0 === o) break e;
                                    o--, c |= i[s++] << l, l += 8
                                }
                                if (u -= d, e.total_out += u, n.total += u, 4 & n.wrap && u && (e.adler = n.check = n.flags ? q(n.check, r, u, a - u) : V(n.check, r, u, a - u)), u = d, 4 & n.wrap && (n.flags ? c : Ut(c)) !== n.check) {
                                    e.msg = "incorrect data check", n.mode = Lt;
                                    break
                                }
                                c = 0, l = 0
                            }
                            n.mode = 16207;
                        case 16207:
                            if (n.wrap && n.flags) {
                                for (; l < 32;) {
                                    if (0 === o) break e;
                                    o--, c += i[s++] << l, l += 8
                                }
                                if (4 & n.wrap && c !== (4294967295 & n.total)) {
                                    e.msg = "incorrect length check", n.mode = Lt;
                                    break
                                }
                                c = 0, l = 0
                            }
                            n.mode = 16208;
                        case 16208:
                            y = wt;
                            break e;
                        case Lt:
                            y = bt;
                            break e;
                        case 16210:
                            return It;
                        default:
                            return yt
                    }
                    return e.next_out = a, e.avail_out = d, e.next_in = s, e.avail_in = o, n.hold = c, n.bits = l, (n.wsize || u !== e.avail_out && n.mode < Lt && (n.mode < Ot || t !== gt)) && Kt(e, e.output, e.next_out, u - e.avail_out), h -= e.avail_in, u -= e.avail_out, e.total_in += h, e.total_out += u, n.total += u, 4 & n.wrap && u && (e.adler = n.check = n.flags ? q(n.check, r, u, e.next_out - u) : V(n.check, r, u, e.next_out - u)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === St ? 128 : 0) + (n.mode === Pt || n.mode === xt ? 256 : 0), (0 === h && 0 === u || t === gt) && y === At && (y = Rt), y
                },
                inflateEnd: e => {
                    if (Vt(e)) return yt;
                    let t = e.state;
                    return t.window && (t.window = null), e.state = null, At
                },
                inflateGetHeader: (e, t) => {
                    if (Vt(e)) return yt;
                    const n = e.state;
                    return 0 == (2 & n.wrap) ? yt : (n.head = t, t.done = !1, At)
                },
                inflateSetDictionary: (e, t) => {
                    const n = t.length;
                    let i, r, s;
                    return Vt(e) ? yt : (i = e.state, 0 !== i.wrap && i.mode !== Dt ? yt : i.mode === Dt && (r = 1, r = V(r, t, n, 0), r !== i.check) ? bt : (s = Kt(e, t, n, n), s ? (i.mode = 16210, It) : (i.havedict = 1, At)))
                },
                inflateInfo: "pako inflate (from Nodeca project)"
            }, Jt = function () {
                this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
            };
            const Yt = Object.prototype.toString, {
                Z_NO_FLUSH: Xt,
                Z_FINISH: Qt,
                Z_OK: en,
                Z_STREAM_END: tn,
                Z_NEED_DICT: nn,
                Z_STREAM_ERROR: rn,
                Z_DATA_ERROR: sn,
                Z_MEM_ERROR: an
            } = j;

            function on(e) {
                this.options = He({chunkSize: 65536, windowBits: 15, to: ""}, e || {});
                const t = this.options;
                t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new $e, this.strm.avail_out = 0;
                let n = $t.inflateInit2(this.strm, t.windowBits);
                if (n !== en) throw new Error(H[n]);
                if (this.header = new Jt, $t.inflateGetHeader(this.strm, this.header), t.dictionary && ("string" == typeof t.dictionary ? t.dictionary = Ze(t.dictionary) : "[object ArrayBuffer]" === Yt.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (n = $t.inflateSetDictionary(this.strm, t.dictionary), n !== en))) throw new Error(H[n])
            }

            function dn(e, t) {
                const n = new on(t);
                if (n.push(e), n.err) throw n.msg || H[n.err];
                return n.result
            }

            on.prototype.push = function (e, t) {
                const n = this.strm, i = this.options.chunkSize, r = this.options.dictionary;
                let s, a, o;
                if (this.ended) return !1;
                for (a = t === ~~t ? t : !0 === t ? Qt : Xt, "[object ArrayBuffer]" === Yt.call(e) ? n.input = new Uint8Array(e) : n.input = e, n.next_in = 0, n.avail_in = n.input.length; ;) {
                    for (0 === n.avail_out && (n.output = new Uint8Array(i), n.next_out = 0, n.avail_out = i), s = $t.inflate(n, a), s === nn && r && (s = $t.inflateSetDictionary(n, r), s === en ? s = $t.inflate(n, a) : s === sn && (s = nn)); n.avail_in > 0 && s === tn && n.state.wrap > 0 && 0 !== e[n.next_in];) $t.inflateReset(n), s = $t.inflate(n, a);
                    switch (s) {
                        case rn:
                        case sn:
                        case nn:
                        case an:
                            return this.onEnd(s), this.ended = !0, !1
                    }
                    if (o = n.avail_out, n.next_out && (0 === n.avail_out || s === tn)) if ("string" === this.options.to) {
                        let e = Ke(n.output, n.next_out), t = n.next_out - e, r = We(n.output, e);
                        n.next_out = t, n.avail_out = i - t, t && n.output.set(n.output.subarray(e, e + t), 0), this.onData(r)
                    } else this.onData(n.output.length === n.next_out ? n.output : n.output.subarray(0, n.next_out));
                    if (s !== en || 0 !== o) {
                        if (s === tn) return s = $t.inflateEnd(this.strm), this.onEnd(s), this.ended = !0, !0;
                        if (0 === n.avail_in) break
                    }
                }
                return !0
            }, on.prototype.onData = function (e) {
                this.chunks.push(e)
            }, on.prototype.onEnd = function (e) {
                e === en && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = je(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
            };
            var cn = {
                Inflate: on, inflate: dn, inflateRaw: function (e, t) {
                    return (t = t || {}).raw = !0, dn(e, t)
                }, ungzip: dn, constants: j
            };
            const {Deflate: ln, deflate: hn, deflateRaw: un, gzip: _n} = dt, {
                Inflate: fn,
                inflate: En,
                inflateRaw: pn,
                ungzip: gn
            } = cn;
            var mn = ln, vn = hn, An = un, wn = _n, Tn = fn, yn = En, bn = pn, In = gn, Rn = j, kn = {
                Deflate: mn,
                deflate: vn,
                deflateRaw: An,
                gzip: wn,
                Inflate: Tn,
                inflate: yn,
                inflateRaw: bn,
                ungzip: In,
                constants: Rn
            };
            e.Deflate = mn, e.Inflate = Tn, e.constants = Rn, e.default = kn, e.deflate = vn, e.deflateRaw = An, e.gzip = wn, e.inflate = yn, e.inflateRaw = bn, e.ungzip = In, Object.defineProperty(e, "__esModule", {value: !0})
        }(t)
    }(0, v.exports);
    var A = i(v.exports);

    function w() {
        return -1 !== document.location.search.indexOf("USE_DCV_WEBRTC_BETA_EXTENSION") ? _.BETA_CHROME : function () {
            const e = window.navigator.userAgent.toLowerCase();
            return e.indexOf("edg/") > -1 || e.indexOf("edge") > -1
        }() ? _.EDGE : _.CHROME
    }

    class T {
        constructor(e, t) {
            this.component = e, this.extensionId = t
        }

        emitHostLogEntry(e, t) {
            const n = {
                type: "log",
                requestId: crypto.randomUUID(),
                message: {logs: [{level: e, component: this.component, message: t}]}
            };
            chrome.runtime.sendMessage(this.extensionId, n)
        }

        trace(e) {
            this.emitHostLogEntry("trace", e)
        }

        debug(e) {
            this.emitHostLogEntry("debug", e)
        }

        info(e) {
            this.emitHostLogEntry("info", e)
        }

        error(e) {
            this.emitHostLogEntry("error", e)
        }

        warn(e) {
            this.emitHostLogEntry("warn", e)
        }
    }

    class y {
        constructor(e) {
            if (this.version = t, this.config = e, this.logger = e.logger, this.clientInfo = null, this.certParams = {
                name: "ECDSA",
                namedCurve: "P-256"
            }, this.disableUnloadCleanup = e.disableUnloadCleanup, this.extensionId = w(), console.debug(`Using extensionId: ${this.extensionId}`), this.hostLogger = new T("dcvwebrtcproxy", this.extensionId), this.pcProxies = new Map, this.audioContextProxies = new Map, this.audioNodeProxies = new Map, this.workerProxies = new Map, this.streamProxies = new Map, this.eventListeners = new Map, this.mediaElementProxies = new Map, this.transceiverProxies = new Map, this.senderProxies = new Map, this.dtmfProxies = new Map, this.receiverProxies = new Map, this.trackProxies = new Map, this.overridenApis = new Map, this.decoder = new TextDecoder("utf-8"), this.firedEvents = new Set, this.md = null, this.devices = [], this.logger.debug(`Checking for chrome extension.  Chrome runtime: ${chrome.runtime}`), void 0 === chrome.runtime) throw new Error("Chrome runtime not available.  DCV WebRTC chrome extension may not be active.");
            this.overridenApis.set("navigator.mediaDevices.getUserMedia", navigator.mediaDevices.getUserMedia), this.overridenApis.set("navigator.mediaDevices.addEventListener", navigator.mediaDevices.addEventListener), this.overridenApis.set("navigator.mediaDevices.removeEventListener", navigator.mediaDevices.removeEventListener), this.overridenApis.set("navigator.mediaDevices.enumerateDevices", navigator.mediaDevices.enumerateDevices), this.overridenApis.set("window.RTCPeerConnection", window.RTCPeerConnection), this.overridenApis.set("window.RTCPeerConnection.generateCertificate", window.RTCPeerConnection.generateCertificate), this.overridenApis.set("window.AudioContext", window.AudioContext), this.overridenApis.set("window.Worker", window.Worker), this.status = u.NEW, this.statusChangeEventListeners = [], this.lastHeartbeat = Date.now(), this.heartbeatTimeout = null, this.heartbeatTimeoutMs = 1e4, this.heartbeatIntervalPeriodMs = 1e3, this.heartbeatInterval = null, this.enumerateDevicesInterval = null, this.enumerateDevicesPeriodMs = 3e3
        }

        clearHeartbeatInterval() {
            this.heartbeatTimeout && (clearTimeout(this.heartbeatTimeout), this.heartbeatTimeout = null), this.hearbeatInterval && (clearInterval(this.hearbeatInterval), this.hearbeatInterval = null)
        }

        resetHeartbeat(e) {
            var t = this;
            this.clearHeartbeatInterval(), this.heartbeatTimeoutMs = e && e.heartbeatTimeoutMs ? e.heartbeatTimeoutMs : this.heartbeatTimeoutMs, this.heartbeatIntervalPeriodMs = e && e.heartbeatIntervalPeriodMs ? e.heartbeatIntervalPeriodMs : this.heartbeatIntervalPeriodMs, this.hearbeatInterval = setInterval((async function () {
                t.heartbeatTimeout || (t.heartbeatTimeout = setTimeout((function () {
                    t.logger.debug(`heartbeatTimeout reached, current status: ${t.status}, last hb: ${Date.now() - t.lastHeartbeat}ms ago.`), t.status !== u.UNAVAILABLE && (t.status = u.UNAVAILABLE, t.statusChangeEventListeners.forEach((function (e) {
                        e({status: t.status, data: t.clientInfo, lastHeartbeat: t.lastHeartbeat})
                    })))
                }), t.heartbeatTimeoutMs));
                try {
                    if (t.clientInfo = await t.sendApiRequest(a.HELLO_API_NAME, []), !t.clientInfo) throw new Error("Failed to get clientInfo.");
                    t.heartbeatTimeout && (clearTimeout(t.heartbeatTimeout), t.heartbeatTimeout = null), t.status !== u.AVAILABLE && (t.status = u.AVAILABLE, t.statusChangeEventListeners.forEach((function (e) {
                        e({status: t.status, data: t.clientInfo})
                    }))), t.lastHeartbeat = Date.now()
                } catch (e) {
                    t.logger.debug(`Heartbeat ping failed.  Last heartbeat received ${Date.now() - t.lastHeartbeat}ms ago.`)
                }
            }), this.heartbeatIntervalPeriodMs)
        }

        makeMediaDeviceInfoProxies(e) {
            return e.forEach((function (e) {
                e.toJSON = function () {
                    return e
                }
            })), e
        }

        makeTrackProxy(e) {
            var t = this;
            if (this.trackProxies.has(e.id)) {
                let t = this.trackProxies.get(e.id);
                return Object.assign(t, e), t
            }
            return this.trackProxies.set(e.id, e), e.pendingEvents = new Map, e.stop = function () {
                t.sendApiRequest(a.TRACK_STOP_API_NAME, [e.id])
            }, e.getSettings = function () {
                return t.sendApiRequest(a.TRACK_GET_SETTINGS, [e.id]).then((function (t) {
                    t && (e.settings = t)
                })), e.settings
            }, e.addEventListener = function (n, i, r) {
                t.logger.debug("Setting ended event listener via addEventListener."), t.addTrackEventListener(e.id, n, i, r)
            }, e.removeEventListener = function (n, i) {
                t.removeEventListener(e.id, n, i)
            }, Object.defineProperty(e, "onended", {
                set: function (n) {
                    t.addTrackEventListener(e.id, d.ENDED, n)
                }, get: function () {
                    return null
                }, configurable: !0
            }), Object.defineProperty(e, "onmute", {
                set: function (n) {
                    t.addTrackEventListener(e.id, d.MUTE, n)
                }, get: function () {
                    return null
                }, configurable: !0
            }), Object.defineProperty(e, "onunmute", {
                set: function (n) {
                    t.addTrackEventListener(e.id, d.UNMUTE, n)
                }, get: function () {
                    return null
                }, configurable: !0
            }), e.trackEnabled = e.enabled, Object.defineProperty(e, "enabled", {
                set: function (n) {
                    e.trackEnabled = n, t.sendApiRequest(a.TOGGLE_TRACK_ENABLED_API_NAME, [e.id, n]).then((function (n) {
                        n && (t.trackProxies.get(e.id).trackEnabled = n.enabled)
                    }))
                }, get: function () {
                    return e.trackEnabled
                }, configurable: !0
            }), this.preRegisterEvents(d, e, this.addTrackEventListener), e
        }

        makeStreamProxy(e) {
            var t = this;
            this.streamProxies.set(e.id, e);
            let n = new MediaStream;
            n.type = "proxy", n.proxy = e;
            let i = e.tracks ? e.tracks.map((function (e) {
                return t.makeTrackProxy(e)
            })) : [];
            return e.tracks = i, n.getTracks = function () {
                return i
            }, n.getAudioTracks = function () {
                return i.filter((function (e) {
                    return "audio" === e.kind
                }))
            }, n.getVideoTracks = function () {
                return i.filter((function (e) {
                    return "video" === e.kind
                }))
            }, n.getTrackById = function (e) {
                return i.find((function (t) {
                    return t.id === e
                }))
            }, n.createMediaElement = function (e) {
                return t.createMediaElement(e)
            }, n.addTrack = function (n) {
                t.sendApiRequest(a.STREAM_ADD_TRACK, [e.id, n.id])
            }, n.removeTrack = function (n) {
                t.sendApiRequest(a.STREAM_REMOVE_TRACK, [e.id, n.id])
            }, n
        }

        updateTransceiverProxy(e) {
            let t = this.transceiverProxies.get(e.id);
            return t || (t = {}), Object.assign(t, e), e.receiver && "proxy" === e.receiver.type && (t.receiver = this.updateReceiverProxy(e.receiver)), e.sender && "proxy" === e.sender.type && (t.sender = this.updateSenderProxy(e.sender)), this.transceiverProxies.set(e.id, t), t
        }

        updatePCSenders(e, t) {
            var n = this;
            let i = t.map((function (e) {
                return n.updateSenderProxy(e)
            }));
            this.pcProxies.get(e).senders = i
        }

        updatePCReceivers(e, t) {
            var n = this;
            let i = t.map((function (e) {
                return n.updateReceiverProxy(e)
            }));
            this.pcProxies.get(e).receivers = i
        }

        updatePCTransceivers(e, t) {
            var n = this;
            let i = t;
            i.forEach((function (e) {
                n.updateTransceiverProxy(e)
            })), this.pcProxies.get(e).transceivers = i
        }

        isValidApi(e) {
            let t = !1;
            for (const n in a) if (a[n] === e) {
                t = !0;
                break
            }
            return t
        }

        async sendApiRequest(e, t, n = crypto.randomUUID()) {
            this.logger.debug(e, t, n);
            try {
                const i = {api: e, args: t};
                let r = A.deflateRaw(JSON.stringify(i));
                const s = {requestId: n, message: r, type: "request"};
                this.logger.debug("Sending request:", JSON.stringify(s));
                let a = await chrome.runtime.sendMessage(this.extensionId, s);
                r = a.message;
                const o = A.inflateRaw(r), d = this.decoder.decode(o);
                if (a.message = JSON.parse(d), this.logger.debug("Received response: ", JSON.stringify(a)), !a || !a.message || !a.type) {
                    let e = `Received empty message or type, extensionResponse: ${JSON.stringify(a)}, request: ${JSON.stringify(s)}, message: ${JSON.stringify(i)}`;
                    return this.hostLogger.error(e), null
                }
                if ("error" === a.type) {
                    let e = `Received error: ${JSON.stringify(a)}, for request: ${JSON.stringify(s)}, message: ${JSON.stringify(i)}`,
                        t = null;
                    if (this.hostLogger.error(e), a.message.error && a.message.error.message && a.message.error && a.message.error.name) throw e = a.message.error.message, t = a.message.error.name, new DOMException(e, t);
                    return null
                }
                if ("response" !== a.type && "event" !== a.type && "error" !== a.type) {
                    let e = `Received invalid message type, type: ${JSON.stringify(a.type)}, event: ${JSON.stringify(a)}, request: ${JSON.stringify(s)}, message: ${JSON.stringify(i)}`;
                    return this.hostLogger.warn(e), null
                }
                if (a.message.api && !this.isValidApi(a.message.api)) {
                    let e = `Received invalid message api, event: ${JSON.stringify(a)}, request: ${JSON.stringify(s)}, message: ${JSON.stringify(i)}`;
                    return this.hostLogger.warn(e), null
                }
                return "event" === a.type ? a.message.event : a.message.response
            } catch (i) {
                return this.logger.warn(`Failed to send api request: api: ${e}, args: ${t}, requestId: ${n}`, i), null
            }
        }

        async getUserMediaInternal(e) {
            let t = await this.sendApiRequest(a.GETUSERMEDIA_API_NAME, [e]);
            return t ? this.makeStreamProxy(t) : null
        }

        getOverridenApi(e) {
            return this.overridenApis.get(e)
        }

        async getUserMedia(e) {
            const t = Object.freeze(e);
            if (t.audio && t.video) {
                let e = await navigator.permissions.query({name: "microphone"}),
                    n = await navigator.permissions.query({name: "camera"});
                if (e && "granted" === e.state && n && "granted" === n.state) return await this.getUserMediaInternal(t)
            } else if (t.audio) {
                let e = await navigator.permissions.query({name: "microphone"});
                if (e && "granted" === e.state) return await this.getUserMediaInternal(t)
            } else if (t.video) {
                let e = await navigator.permissions.query({name: "camera"});
                if (e && "granted" === e.state) return await this.getUserMediaInternal(t)
            }
            let n = [];
            if (t.video && (n = await this.getOverridenApi("navigator.mediaDevices.enumerateDevices").apply(navigator.mediaDevices), n = n.filter((function (e) {
                return e.kind && e.kind.indexOf("video") > -1
            }))), t.audio && !t.video || t.video && n.length > 0) {
                let e = await this.getOverridenApi("navigator.mediaDevices.getUserMedia").apply(navigator.mediaDevices, [t]);
                this.disposeStream(e)
            }
            return await this.getUserMediaInternal(t)
        }

        async enumerateDevices() {
            let e = await this.sendApiRequest(a.ENUMERATEDEVICES_API_NAME, []);
            return e ? this.makeMediaDeviceInfoProxies(e) : []
        }

        getVersion() {
            return t
        }

        makeReceiverProxy(e) {
            var t = this;
            return e.track && (e.track = this.makeTrackProxy(e.track)), e.getSynchronizationSources = function () {
                return e.synchronizationSources
            }, e.getStats = async function () {
                const n = await t.sendApiRequest(a.GET_RECEIVER_STATS_API_NAME, [e.id]);
                let i = new Map;
                return n && n.forEach((function (e) {
                    i.set(e.id, e)
                })), i
            }, e.createEncodedStreams = function () {
                let n = {
                    id: crypto.randomUUID(),
                    type: "proxy",
                    readable: {id: crypto.randomUUID(), type: "proxy"},
                    writable: {id: crypto.randomUUID(), type: "proxy"}
                };
                return t.streamProxies.set(n.id, n), t.sendApiRequest(a.RECEIVER_CREATE_ENCODED_STREAMS, [e.id, n]), n
            }, this.receiverProxies.set(e.id, e), e
        }

        makeDTMFProxy(e) {
            var t = this;
            let n = e;
            return this.dtmfProxies.has(n.id) ? (n = this.dtmfProxies.get(n.id), Object.assign(n, e)) : (this.dtmfProxies.set(n.id, n), n.pendingEvents = new Map, n.insertDTMF = function (e, i, r) {
                t.sendApiRequest(a.INSERT_DTMF_API_NAME, [n.id, e, i, r])
            }, n.addEventListener = function (e, i, r) {
                t.addDtmfEventListener(n.id, e, i, r)
            }, n.removeEventListener = function (e, i) {
                t.removeEventListener(n.id, e, i)
            }, Object.defineProperty(n, "ontonechange", {
                set: function (e) {
                    t.addDtmfEventListener(n.id, c.TONECHANGE, e)
                }, get: function () {
                    return null
                }, configurable: !0
            }), this.preRegisterEvents(c, n, this.addDtmfEventListener)), n
        }

        makeSenderProxy(e) {
            var t = this;
            return e.track && (e.track = this.makeTrackProxy(e.track)), e.dtmf && (e.dtmf = this.makeDTMFProxy(e.dtmf)), e.getStats = async function () {
                let n = await t.sendApiRequest(a.GET_SENDER_STATS_API_NAME, [e.id]);
                return n && (n.has = function (e) {
                    return void 0 !== n.find((function (t) {
                        return t.id === e
                    }))
                }, n.get = function (e) {
                    return n.find((function (t) {
                        return t.id === e
                    }))
                }), n
            }, e.replaceTrack = function (n) {
                return e.track = n, t.sendApiRequest(a.REPLACE_SENDER_TRACK_API_NAME, [e.id, n])
            }, e.createEncodedStreams = function () {
                let n = {
                    id: crypto.randomUUID(),
                    type: "proxy",
                    readable: {type: "proxy", id: crypto.randomUUID()},
                    writable: {type: "proxy", id: crypto.randomUUID()}
                };
                return t.streamProxies.set(n.id, n), t.sendApiRequest(a.SENDER_CREATE_ENCODED_STREAMS, [e.id, n]), n
            }, e
        }

        updateSenderProxy(e) {
            let t = this.senderProxies.get(e.id);
            return t ? Object.assign(t, e) : (t = e, this.senderProxies.set(e.id, t)), this.makeSenderProxy(t)
        }

        updateReceiverProxy(e) {
            let t = this.receiverProxies.get(e.id);
            return t ? Object.assign(t, e) : (t = e, this.receiverProxies.set(e.id, t)), this.makeReceiverProxy(t)
        }

        addTrack(e, t) {
            var n = this;
            let i = crypto.randomUUID();
            this.sendApiRequest(a.ADD_TRACK_API_NAME, [i, ...arguments]).then((function (e) {
                e && (n.updateSenderProxy(e), n.updatePCSenders(e.pcId, e.senders), n.updatePCReceivers(e.pcId, e.receivers), n.updatePCTransceivers(e.pcId, e.transceivers))
            }));
            let r = this.updateSenderProxy({id: i});
            return this.pcProxies.get(e).senders.push(r), r
        }

        updatePeerConnectionProxy(e) {
            let t = this.pcProxies.get(e.pcId);
            Object.assign(t, e), this.updatePCSenders(e.pcId, e.senders), this.updatePCReceivers(e.pcId, e.receivers), this.updatePCTransceivers(e.pcId, e.transceivers)
        }

        createPeerConnection(e, t) {
            var n = this;
            let i = crypto.randomUUID(), r = this;
            this.logger.debug(`Creating RTCPeerConnection with id: ${i}`);
            let s = {
                type: "proxy",
                id: i,
                signalingState: "new",
                connectionState: "new",
                iceConnectionState: "new",
                iceGatheringState: "new",
                receivers: [],
                senders: [],
                transceivers: [],
                pendingEvents: new Map,
                configuration: e,
                close: function () {
                    n.close(i)
                },
                addStream: function (e) {
                    n.addStream(i, e)
                },
                getConfiguration: function () {
                    return n.sendApiRequest(a.PC_GET_CONFIGURATION, [i]).then((function (e) {
                        e && (s.configuration = e)
                    })), s.configuration
                },
                getStats: function (e) {
                    return n.getStats(i, e)
                },
                createOffer: function (e) {
                    return n.createOffer(i, e)
                },
                createAnswer: function (e) {
                    return n.createAnswer(i, e)
                },
                setLocalDescription: function (e) {
                    return n.setLocalDescription(i, e)
                },
                addEventListener: function (e, t) {
                    n.addPeerConnectionEventListener(i, e, t)
                },
                removeEventListener: function (e, t) {
                    n.removeEventListener(i, e, t)
                },
                getEventListener: function (e) {
                    return n.eventListeners.get(i).get(e)
                },
                set onicecandidate(e) {
                    this.addEventListener(o.ICE_CANDIDATE, e)
                },
                get onicecandidate() {
                    return this.getEventListener(o.ICE_CANDIDATE)
                },
                set ontrack(e) {
                    this.addEventListener(o.TRACK, e)
                },
                get ontrack() {
                    return this.getEventListener(o.TRACK)
                },
                get onsignalingstatechange() {
                    return this.getEventListener(o.SIG_STATE_CHANGE)
                },
                set onsignalingstatechange(e) {
                    this.addEventListener(o.SIG_STATE_CHANGE, e)
                },
                get onconnectionstatechange() {
                    return this.getEventListener(o.CONN_STATE_CHANGE)
                },
                set onconnectionstatechange(e) {
                    this.addEventListener(o.CONN_STATE_CHANGE, e)
                },
                get oniceconnectionstatechange() {
                    return this.getEventListener(o.ICE_CONN_STATE_CHANGE)
                },
                set oniceconnectionstatechange(e) {
                    this.addEventListener(o.ICE_CONN_STATE_CHANGE, e)
                },
                get onicegatheringstatechange() {
                    return this.getEventListener(o.ICE_GATHER_STATE_CHANGE)
                },
                set onicegatheringstatechange(e) {
                    this.addEventListener(o.ICE_GATHER_STATE_CHANGE, e)
                },
                get onnegotiationneeded() {
                    return this.getEventListener(o.NEGOTIATION_NEEDED)
                },
                set onnegotiationneeded(e) {
                    this.addEventListener(o.NEGOTIATION_NEEDED, e)
                },
                setRemoteDescription: function (e) {
                    return n.setRemoteDescription(i, e)
                },
                addIceCandidate: function (e) {
                    return n.addIceCandidate(i, e)
                },
                getRemoteStreams: function () {
                    return n.logger.warn("getRemoteStreams not implemented on proxy."), []
                },
                getReceivers: function () {
                    return n.getReceivers(i)
                },
                getSenders: function () {
                    return n.getSenders(i)
                },
                addTrack: function (e) {
                    let t = [i, ...arguments];
                    return r.addTrack.apply(r, t)
                },
                addTransceiver: function (e, t) {
                    return n.addTransceiver(i, e, t)
                },
                getTransceivers: function () {
                    return n.getTransceivers(i)
                },
                removeTrack: function (e) {
                    n.removeTrack(i, e)
                }
            };
            return this.pcProxies.set(i, s), this.sendApiRequest(a.NEWRTCPEERCONNECTION_API_NAME, [i, e, t], i).then((function (e) {
                e && n.updatePeerConnectionProxy(e)
            }), (function (e) {
                n.logger.error(`Error creating proxied RTCPeerConnection: ${e}`)
            })), this.preRegisterEvents(o, this.pcProxies.get(i), this.addPeerConnectionEventListener), this.pcProxies.get(i)
        }

        preRegisterEvents(e, t, n) {
            for (const i in e) "string" == typeof e[i] && n.apply(this, [t.id, e[i], function (e) {
                t.pendingEvents.has(e.eventName) || t.pendingEvents.set(e.eventName, []), t.pendingEvents.get(e.eventName).push(e)
            }])
        }

        updateAudioContextProxy(e) {
            let t = this.audioContextProxies.get(e.id);
            Object.assign(t, e)
        }

        updateAudioNodeProxy(e) {
            let t = this.audioNodeProxies.get(e.id);
            Object.assign(t, e), e.stream && this.makeStreamProxy(e.stream)
        }

        makeAudioNodeProxy(e, t) {
            var n = this;
            return {
                type: "proxy", id: t, context: this.audioContextProxies.get(e), connect: function (e, i, r) {
                    return n.sendApiRequest(a.AUDIO_NODE_CONNECT, [t, e, i, r]), e
                }, disconnect: function (e, i, r) {
                    n.sendApiRequest(a.AUDIO_NODE_DISCONNECT, [t, e, i, r])
                }
            }
        }

        createAudioNode(e, t, n) {
            var i = this;
            let r = crypto.randomUUID();
            return this.audioNodeProxies.set(r, this.makeAudioNodeProxy(e, r)), this.sendApiRequest(a.AUDIO_CTX_CREATE_AUDIO_NODE, [e, r, t, n], r).then((function (e) {
                e && i.updateAudioNodeProxy(e)
            }), (function (e) {
                i.logger.error(`Error creating proxied ${t}: ${e}`)
            })), this.audioNodeProxies.get(r)
        }

        makeWorkerProxy(e) {
            var t = this;
            let n = {
                id: e, pendingEvents: new Map, type: "proxy", postMessage: function (n, i) {
                    t.sendApiRequest(a.WORKER_POST_MESSAGE, [e, n, i])
                }, terminate: function () {
                    t.sendApiRequest(a.WORKER_TERMINATE, [e])
                }, addEventListener: function (e, i, r) {
                    t.addWorkerEventListener(n.id, e, i, r)
                }, removeEventListener: function (e, i) {
                    t.removeEventListener(n.id, e, i)
                }
            };
            return Object.defineProperty(n, "onerror", {
                set: function (e) {
                    t.addWorkerEventListener(n.id, l.ERROR, e)
                }, get: function () {
                    return null
                }, configurable: !0
            }), Object.defineProperty(n, "onmessage", {
                set: function (e) {
                    t.addWorkerEventListener(n.id, l.MESSAGE, e)
                }, get: function () {
                    return null
                }, configurable: !0
            }), Object.defineProperty(n, "onmessageerror", {
                set: function (e) {
                    t.addWorkerEventListener(n.id, l.MESSAGE_ERROR, e)
                }, get: function () {
                    return null
                }, configurable: !0
            }), n
        }

        createWorker(e, t) {
            var n = this;
            let i = crypto.randomUUID(), r = this.makeWorkerProxy(i);
            return this.workerProxies.set(i, r), fetch(e).then((function (e) {
                e.blob().then((function (e) {
                    e.arrayBuffer().then((function (r) {
                        let s = g(r);
                        n.sendApiRequest(a.CREATE_WORKER, [i, e.type, s, t]).then((function (e) {
                            n.logger.debug(`Created worker: ${JSON.stringify(e)}`)
                        }))
                    }))
                }))
            })), this.logger.debug(`Preregistering events for worker: ${JSON.stringify(r)}`), this.preRegisterEvents(l, r, this.addWorkerEventListener), r
        }

        createAudioContext() {
            var e = this;
            let t = crypto.randomUUID(), n = crypto.randomUUID();
            return this.audioContextProxies.set(t, {
                type: "proxy", id: t, destination: this.makeAudioNodeProxy(t, n), createGain: function () {
                    let n = e.createAudioNode(t, "Gain", []), i = {
                        setValueAtTime: function (t, r) {
                            return i.currentValue = t, e.sendApiRequest(a.AUDIO_PARAM_SET_VALUE_AT_TIME, [n.id, t, r]), i
                        }, linearRampToValueAtTime: function (t, r) {
                            return e.sendApiRequest(a.AUDIO_PARAM_SET_RAMP_TO_VALUE_AT_TIME, [n.id, t, r]), i
                        }
                    };
                    return Object.defineProperty(i, "value", {
                        set: function (e) {
                            return i.setValueAtTime(e, 0)
                        }, get: function () {
                            return i.currentValue
                        }, configurable: !0
                    }), n.gain = i, n
                }, createOscillator: function () {
                    let n = e.createAudioNode(t, "Oscillator", []);
                    n.start = function (t = 0) {
                        e.sendApiRequest(a.AUDIO_NODE_START, [n.id, t])
                    }, n.stop = function (t = 0) {
                        e.sendApiRequest(a.AUDIO_NODE_STOP, [n.id, t])
                    }, Object.defineProperty(n, "type", {
                        set: function (t) {
                            n.currentType = t, e.sendApiRequest(a.AUDIO_NODE_SET_TYPE, [n.id, t])
                        }, get: function () {
                            return n.currentType
                        }, configurable: !0
                    });
                    let i = {
                        setValueAtTime: function (t, r) {
                            return e.sendApiRequest(a.AUDIO_PARAM_SET_VALUE_AT_TIME, [n.id, t, r]), i
                        }
                    };
                    return Object.defineProperty(i, "value", {
                        set: function (e) {
                            return i.setValueAtTime(e, 0)
                        }, get: function () {
                            return i.currentValue
                        }, configurable: !0
                    }), n.frequency = i, n
                }, createMediaStreamSource: function (n) {
                    return e.createAudioNode(t, "MediaStreamSource", [n.proxy])
                }, createAnalyser: function () {
                    return e.createAudioNode(t, "Analyser", [])
                }, createMediaStreamDestination: function () {
                    let n = e.createAudioNode(t, "MediaStreamDestination", []);
                    return n.stream = e.makeStreamProxy({id: n.id, tracks: [{id: n.id, kind: "audio"}]}), n
                }, close: function () {
                    return e.sendApiRequest(a.AUDIO_CTX_CLOSE, [t])
                }
            }), this.sendApiRequest(a.NEW_AUDIO_CONTEXT, [t, n], t).then((function (t) {
                t && e.updateAudioContextProxy(t)
            }), (function (t) {
                e.logger.error(`Error creating proxied AudioContext: ${t}`)
            })), this.audioContextProxies.get(t)
        }

        close(e) {
            this.eventListeners.get(e).clear(), this.sendApiRequest(a.PC_CLOSE_API_NAME, [e])
        }

        addStream(e, t) {
            this.sendApiRequest(a.ADDSTREAM_API_NAME, [e, t.proxy])
        }

        getStats(e, t) {
            return "function" == typeof t ? Promise.reject(new Error("callback based getStats is obsolete.")) : this.sendApiRequest(a.GET_STATS_API_NAME, [e, t])
        }

        createOffer(e, t) {
            return this.sendApiRequest(a.CREATE_OFFER_API_NAME, [e, t])
        }

        createAnswer(e, t) {
            return this.sendApiRequest(a.CREATE_ANSWER_API_NAME, [e, t])
        }

        setLocalDescription(e, t) {
            return this.pcProxies.get(e).localDescription = t, this.sendApiRequest(a.SET_LOCAL_DESCRIPTION_API_NAME, [e, t])
        }

        setRemoteDescription(e, t) {
            return this.sendApiRequest(a.SET_REMOTE_DESCRIPTION_API_NAME, [e, t])
        }

        handleAddEventListenerResponse(e) {
            var t = this;
            e.eventName === o.SIG_STATE_CHANGE ? this.updatePeerConnectionProxy(e) : e.eventName === o.TRACK ? (e.streams = e.streams.map((function (e) {
                return t.makeStreamProxy(e)
            })), e.track = this.makeTrackProxy(e.track), this.updatePeerConnectionProxy(e)) : (e.eventName === o.CONN_STATE_CHANGE || e.eventName === o.ICE_CONN_STATE_CHANGE || e.eventName === o.ICE_GATHER_STATE_CHANGE || e.eventName === o.ICE_CANDIDATE || e.eventName === o.NEGOTIATION_NEEDED) && this.updatePeerConnectionProxy(e), this.fireUpEventHandlers(this.pcProxies.get(e.pcId), e), this.sendApiRequest(a.ADD_PC_EVENT_LISTENER, [e.pcId, e.eventName]).then((function (e) {
                e && t.handleAddEventListenerResponse(e)
            }))
        }

        fireUpEventHandlers(e, t) {
            if (e && this.eventListeners.get(e.id).has(t.eventName)) {
                let n = e.pendingEvents;
                this.eventListeners.get(e.id).get(t.eventName).forEach((function (e, i) {
                    0 === i ? e(t) : n.get(t.eventName).forEach((function (t) {
                        e(t)
                    }))
                })), n.set(t.eventName, [])
            }
        }

        handleAddTrackEventListenerResponse(e) {
            var t = this;
            "mute" !== e.eventName && "unmute" !== e.eventName || (this.trackProxies.get(e.trackId).muted = e.muted), this.fireUpEventHandlers(this.trackProxies.get(e.trackId), e), this.sendApiRequest(a.ADD_TRACK_EVENT_LISTENER, [e.trackId, e.eventName]).then((function (e) {
                e && t.handleAddTrackEventListenerResponse(e)
            }))
        }

        handleAddDtmfEventListenerResponse(e) {
            var t = this;
            this.fireUpEventHandlers(this.dtmfProxies.get(e.dtmfId), e), this.sendApiRequest(a.ADD_DTMF_EVENT_LISTENER, [e.dtmfId, e.eventName]).then((function (e) {
                e && t.handleAddDtmfEventListenerResponse(e)
            }))
        }

        handleAddWorkerEventListenerResponse(e) {
            var t = this;
            this.fireUpEventHandlers(this.workerProxies.get(e.wId), e), this.sendApiRequest(a.ADD_WORKER_EVENT_LISTENER, [e.wId, e.eventName]).then((function (e) {
                e && t.handleAddWorkerEventListenerResponse(e)
            }))
        }

        handleAddMediaDevicesEventListenerResponse(e) {
            var t = this;
            let n = this.md;
            this.firedEvents.has(e.id) || (this.fireUpEventHandlers(n, e), this.firedEvents.add(e.id)), this.sendApiRequest(a.ADD_MEDIADEVICES_EVENT_LISTENER, [e.mdId, e.eventName]).then((function (e) {
                e && t.handleAddMediaDevicesEventListenerResponse(e)
            }))
        }

        addEventListener(e, t, n) {
            this.eventListeners.has(e) || this.eventListeners.set(e, new Map), this.eventListeners.get(e).has(t) || this.eventListeners.get(e).set(t, []), this.eventListeners.get(e).get(t).push(n)
        }

        addPeerConnectionEventListener(e, t, n) {
            var i = this;
            this.addEventListener(e, t, n), this.sendApiRequest(a.ADD_PC_EVENT_LISTENER, [e, t]).then((function (e) {
                e && i.handleAddEventListenerResponse(e)
            }))
        }

        addTrackEventListener(e, t, n, i) {
            var r = this;
            this.addEventListener(e, t, n), this.sendApiRequest(a.ADD_TRACK_EVENT_LISTENER, [e, t, i]).then((function (e) {
                e && r.handleAddTrackEventListenerResponse(e)
            }))
        }

        addDtmfEventListener(e, t, n, i) {
            var r = this;
            this.addEventListener(e, t, n), this.sendApiRequest(a.ADD_DTMF_EVENT_LISTENER, [e, t, i]).then((function (e) {
                e && r.handleAddDtmfEventListenerResponse(e)
            }))
        }

        addWorkerEventListener(e, t, n) {
            var i = this;
            this.addEventListener(e, t, n), this.sendApiRequest(a.ADD_WORKER_EVENT_LISTENER, [e, t]).then((function (e) {
                e && i.handleAddWorkerEventListenerResponse(e)
            }))
        }

        fireSingleEvent(e, t) {
            e && this.eventListeners.get(e.id).has(t.eventName) && this.eventListeners.get(e.id).get(t.eventName).forEach((function (e) {
                e(t)
            }))
        }

        fireDeviceChangeEvent(e) {
            const t = {id: crypto.randomUUID(), mdId: e.id, eventName: h.DEVICECHANGE, type: h.DEVICECHANGE};
            this.fireSingleEvent(e, t)
        }

        isUndefinedOrNull(e) {
            return null == e
        }

        isObject(e) {
            return !this.isUndefinedOrNull(e) && "object" == typeof e && !Array.isArray(e)
        }

        mediaDeviceInfoAreEqual(e, t) {
            return !(!this.isObject(e) || !this.isObject(t)) && (e.kind === t.kind && e.deviceId === t.deviceId && e.groupId === t.groupId && e.label === t.label)
        }

        defaultDeviceChanged(e, t) {
            return e.length > 0 && t.length > 0 && !this.mediaDeviceInfoAreEqual(e[0], t[0])
        }

        addMediaDevicesEventListener(e, t, n) {
            var i = this;
            this.addEventListener(e, t, n), this.isClientNiva() ? this.enumerateDevicesInterval || (this.enumerateDevicesInterval = setInterval((async function () {
                const e = await i.enumerateDevices(), t = Math.abs(i.devices.length - e.length);
                if (t > 0) for (let e = 0; e < t; e++) i.fireDeviceChangeEvent(i.md); else {
                    const t = i.devices.filter((function (e) {
                        return "audioinput" === e.kind
                    })), n = e.filter((function (e) {
                        return "audioinput" === e.kind
                    }));
                    i.defaultDeviceChanged(t, n) && i.fireDeviceChangeEvent(i.md);
                    const r = i.devices.filter((function (e) {
                        return "audiooutput" === e.kind
                    })), s = e.filter((function (e) {
                        return "audiooutput" === e.kind
                    }));
                    i.defaultDeviceChanged(r, s) && i.fireDeviceChangeEvent(i.md)
                }
                i.devices = e
            }), this.enumerateDevicesPeriodMs)) : this.sendApiRequest(a.ADD_MEDIADEVICES_EVENT_LISTENER, [e, t]).then((function (e) {
                e && i.handleAddMediaDevicesEventListenerResponse(e)
            }))
        }

        removeEventListener(e, t, n) {
            let i = this.eventListeners.get(e).get(t);
            const r = i.indexOf(n);
            r > -1 && i.splice(r, 1)
        }

        addIceCandidate(e, t) {
            let n = t ? {sdpMLineIndex: t.sdpMLineIndex, sdpMid: t.sdpMid, candidate: t.candidate} : null;
            return this.sendApiRequest(a.ADD_ICE_CANDIDATE_API_NAME, [e, n])
        }

        mapAudioElement(e) {
            let t = {kind: "audio", style: e.css ? e.css : "display: none", autoplay: e.autoplay, controls: e.controls};
            e.proxy && "function" == typeof e.proxy.remove && e.proxy.remove(), e.proxy = this.createMediaElement(t), Object.defineProperty(e, "srcObject", {
                set: function (t) {
                    e.proxy.srcObject = t
                }, get: function () {
                    return e.proxy.srcObject
                }, configurable: !0
            }), Object.defineProperty(e, "hidden", {
                set: function (t) {
                    e.proxy.hidden = t
                }, get: function () {
                    return e.proxy.hidden
                }, configurable: !0
            }), Object.defineProperty(e, "volume", {
                set: function (t) {
                    e.proxy.volume = t
                }, get: function () {
                    return e.proxy.volume
                }, configurable: !0
            }), Object.defineProperty(e, "muted", {
                set: function (t) {
                    e.proxy.muted = t
                }, get: function () {
                    return e.proxy.muted
                }, configurable: !0
            }), e.play = function () {
                e.proxy.play()
            }, e.pause = function () {
                e.proxy.pause()
            }, e.setSinkId = function (t) {
                e.proxy.setSinkId(t)
            }, e.remove = function () {
                e.proxy.remove()
            }
        }

        createMediaElement(e) {
            var t = this;
            let n = crypto.randomUUID();
            this.sendApiRequest(a.CREATE_MEDIA_ELEMENT_API_NAME, [n, e], n).then((function (e) {
                if (e) {
                    t.mediaElementProxies.get(e.id).sinkId = e.sinkId
                }
            }));
            let i = {
                id: n, type: "proxy", classList: new Set, isMuted: !1, play: function () {
                    t.sendApiRequest(a.MEDIA_ELEMENT_PLAY_API_NAME, [n])
                }, pause: function () {
                    t.sendApiRequest(a.MEDIA_ELEMENT_PAUSE_API_NAME, [n])
                }, setSinkId: function (e) {
                    return t.sendApiRequest(a.MEDIA_ELEMENT_SET_SINK_ID_API_NAME, [n, e])
                }, remove: function () {
                    return t.sendApiRequest(a.MEDIA_ELEMENT_REMOVE, [n])
                }
            };
            return this.mediaElementProxies.set(n, i), i.classList.remove = function (e) {
                i.classList.delete(e)
            }, Object.assign(i, e), Object.defineProperty(i, "srcObject", {
                set: function (e) {
                    i.stream = e, t.sendApiRequest(a.SET_MEDIA_SRC_OBJ_API_NAME, [i.id, e && e.proxy ? e.proxy : e])
                }, get: function () {
                    return i.stream
                }, configurable: !0
            }), Object.defineProperty(i, "hidden", {
                set: function (e) {
                    t.sendApiRequest(a.SET_MEDIA_HIDDEN_API_NAME, [i.id, e])
                }, get: function () {
                    return i.hidden
                }, configurable: !0
            }), Object.defineProperty(i, "volume", {
                set: function (e) {
                    t.sendApiRequest(a.SET_MEDIA_VOLUME_API_NAME, [i.id, e])
                }, get: function () {
                    return i.volume
                }, configurable: !0
            }), Object.defineProperty(i, "muted", {
                set: function (e) {
                    i.isMuted = e, t.sendApiRequest(a.MEDIA_ELEMENT_MUTED, [i.id, e]).then((function (e) {
                        e && (i.isMuted = e.muted)
                    }))
                }, get: function () {
                    return i.isMuted
                }, configurable: !0
            }), i
        }

        generateCertificate(e) {
            return this.sendApiRequest(a.GENERATE_CERTIFICATE_API_NAME, [e])
        }

        getReceivers(e) {
            var t = this;
            return this.sendApiRequest(a.GET_RECEIVERS_API_NAME, [e]).then((function (e) {
                e && t.updatePCReceivers(e.pcId, e.receivers)
            })), this.pcProxies.get(e).receivers
        }

        getSenders(e) {
            var t = this;
            return this.sendApiRequest(a.GET_SENDERS_API_NAME, [e]).then((function (e) {
                e && t.updatePCSenders(e.pcId, e.senders)
            })), this.pcProxies.get(e).senders
        }

        removeTrack(e, t) {
            this.sendApiRequest(a.PC_REMOVE_TRACK_API_NAME, [e, t])
        }

        getTransceivers(e) {
            var t = this;
            return this.sendApiRequest(a.GET_TRANSCEIVERS_API_NAME, [e]).then((function (e) {
                e && t.updatePCTransceivers(e.pcId, e.transceivers)
            })), this.pcProxies.get(e).transceivers
        }

        addTransceiver(e, t, n) {
            var i = this;
            let r = crypto.randomUUID(), s = {
                type: "proxy",
                id: r,
                sender: this.makeSenderProxy({id: crypto.randomUUID()}),
                receiver: this.makeReceiverProxy({id: crypto.randomUUID()}),
                setCodecPreferences: function (e) {
                    i.sendApiRequest(a.TRANSCEIVER_SET_CODEC_PREFS, [r, e])
                }
            };
            return this.transceiverProxies.set(s.id, s), this.pcProxies.get(e).transceivers.push(s), this.pcProxies.get(e).receivers.push(s.receiver), this.pcProxies.get(e).senders.push(s.sender), this.sendApiRequest(a.ADD_TRANSCEIVER_API_NAME, [e, s, "string" == typeof t ? t : this.makeTrackProxy(t), n]).then((function (e) {
                e && (i.updateTransceiverProxy(e), i.updatePCSenders(e.pcId, e.senders), i.updatePCReceivers(e.pcId, e.receivers), i.updatePCTransceivers(e.pcId, e.transceivers))
            })), s
        }

        setLogger(e) {
            this.logger = e
        }

        addMediaDevicesProxyMethods(e) {
            var t = this;
            e.getUserMedia = function (e) {
                return t.getUserMedia(e)
            }, e.enumerateDevices = function () {
                return t.enumerateDevices()
            }, e.addEventListener = function (n, i, r) {
                t.logger.debug(`Setting mediaDevices ${n} event listener via addEventListener.`), t.addMediaDevicesEventListener(e.id, n, i, r)
            }, e.removeEventListener = function (n, i) {
                t.removeEventListener(e.id, n, i)
            }, Object.defineProperty(e, "ondevicechange", {
                set: function (n) {
                    t.addMediaDevicesEventListener(e.id, h.DEVICECHANGE, n)
                }, get: function () {
                    return null
                }, configurable: !0
            })
        }

        isClientNiva() {
            if (this.clientInfo && this.clientInfo.userAgent) {
                const e = new RegExp("AFTGAZLTC;"), t = this.clientInfo.userAgent.match(e);
                return null !== t && t.length > 0
            }
            return !1
        }

        disposeStream(e) {
            e.getTracks().forEach((function (t) {
                t.stop(), e.removeTrack(t)
            }))
        }

        makeMediaDevicesProxy() {
            var e = this;
            return this.md || (this.md = {
                type: "proxy",
                id: crypto.randomUUID(),
                pendingEvents: new Map
            }, this.addMediaDevicesProxyMethods(this.md), this.isClientNiva() ? this.getUserMedia({audio: !0}).then((function (t) {
                e.enumerateDevices().then((function (t) {
                    e.devices = t
                })), e.disposeStream(t)
            })) : this.preRegisterEvents(h, this.md, this.addMediaDevicesEventListener)), this.md
        }

        overrideWebRTC() {
            this.logger.info("Overriding WebRTC interfaces for the current webapp.");
            let e = this;
            Object.assign(navigator.mediaDevices, this.makeMediaDevicesProxy()), this.addMediaDevicesProxyMethods(navigator.mediaDevices), window.RTCPeerConnection = function (t, n) {
                return e.createPeerConnection(t, n)
            }, window.RTCPeerConnection.generateCertificate = function (t) {
                return e.generateCertificate(t)
            }, window.AudioContext = function () {
                return e.createAudioContext()
            }, window.Worker = function (t, n) {
                return e.createWorker(t, n)
            }
        }

        removeStatusChangeEventListener(e) {
            this.statusChangeEventListeners = this.statusChangeEventListeners.filter((function (t) {
                return t !== e
            }))
        }

        addStatusChangeEventListener(e) {
            this.statusChangeEventListeners.push(e)
        }

        unload() {
            this.hostLogger.info("Page about to unload, cleaning up proxy state.");
            let e = {
                pcIds: [],
                streamIds: [],
                mediaElementIds: [],
                transceiverIds: [],
                senderIds: [],
                receiverIds: [],
                trackIds: [],
                workerIds: []
            };
            this.pcProxies.forEach((function (t, n) {
                e.pcIds.push(n)
            })), this.streamProxies.forEach((function (t, n) {
                e.streamIds.push(n)
            })), this.trackProxies.forEach((function (t, n) {
                e.trackIds.push(n)
            })), this.workerProxies.forEach((function (t, n) {
                e.workerIds.push(n)
            })), this.mediaElementProxies.forEach((function (t, n) {
                e.mediaElementIds.push(n)
            })), this.transceiverProxies.forEach((function (t, n) {
                e.transceiverIds.push(n)
            })), this.senderProxies.forEach((function (t, n) {
                e.senderIds.push(n)
            })), this.receiverProxies.forEach((function (t, n) {
                e.receiverIds.push(n)
            })), this.sendApiRequest(a.UNLOAD_EVENT_NAME, [e])
        }

        async sendHelloRequest() {
            var e = this;
            let n = await this.sendApiRequest(a.HELLO_API_NAME, []);
            return n && !globalThis.DCVWebRTCRedirProxy && (this.status = u.AVAILABLE, this.hostLogger.info(`Running in a DCV WebRTC redirection env, proxy version: ${t.versionStr} - ${t.gitHash}, userAgent: ${navigator.userAgent}, url: ${window.location.href}`), this.hostLogger.info(`Client info: ${JSON.stringify(n)}`), window.addEventListener("beforeunload", (function (t) {
                e.disableUnloadCleanup || e.unload()
            }))), n
        }

        static setInitCallback(e, t) {
            const n = globalThis.DCVWebRTCRedirProxy;
            if (n) e({success: !0, proxy: n}); else {
                y.initCallbacks || (y.initCallbacks = new Map);
                const n = setTimeout((function () {
                    e({
                        success: !1,
                        error: `Failed to initialize DCVWebRTCPeerConnectionProxy in ${t}ms`
                    }), y.initCallbacks.delete(e)
                }), t);
                y.initCallbacks.set(e, n)
            }
        }
    }

    class b {
        constructor(e) {
            this.version = t, this.config = e, this.logger = e.logger ? e.logger : s, this.channel = e.channel, this.decoder = new TextDecoder("utf-8"), this.messageBuffer = null, this.pcs = new Map, this.pcPromises = new Map, this.audioContexts = new Map, this.audioNodes = new Map, this.workers = new Map, this.workerPromises = new Map, this.certs = new Map, this.streams = new Map, this.tracks = new Map, this.offers = new Map, this.answers = new Map, this.remoteDescriptions = new Map, this.mediaElements = new Map, this.senders = new Map, this.dtmfSenders = new Map, this.receivers = new Map, this.transceivers = new Map, this.webview = e.webview, this.logger.info(`Created WebRTC Redirection Client version: ${t.versionStr} - ${t.gitHash}`)
        }

        encodeBase64(e) {
            return g(e)
        }

        decodeBase64(e) {
            return m(e)
        }

        getVersion() {
            return this.version
        }

        concatUint8Arrays(e) {
            const t = e.reduce((function (e, t) {
                return e + t.byteLength
            }), 0), n = new Uint8Array(t);
            let i = 0;
            return e.forEach((function (e) {
                n.set(e, i), i += e.byteLength
            })), n
        }

        parseHeader(e) {
            return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
        }

        onMessageReceived(e) {
            try {
                let t = 0;
                for (null === this.messageBuffer ? this.messageBuffer = new Uint8Array(e) : this.messageBuffer = this.concatUint8Arrays([this.messageBuffer, new Uint8Array(e)]), this.messageBuffer.byteLength >= 4 && (t = this.parseHeader(this.messageBuffer)); t > 0 && this.messageBuffer.byteLength >= t + 4;) {
                    let e = 4, n = 4 + t, i = this.messageBuffer.slice(e, n), r = this.decoder.decode(i),
                        s = JSON.parse(r);
                    this.handleMessage(s), this.messageBuffer = this.messageBuffer.slice(n), t = this.messageBuffer.byteLength >= 4 ? this.parseHeader(this.messageBuffer) : 0
                }
            } catch (e) {
                this.logger.error(`Failed to parse JSON from binaryPayload: ${e}`), this.messageBuffer = null
            }
        }

        getPeerConnection(e) {
            var t = this;
            return this.pcs.has(e) ? this.pcs.get(e) : (this.pcPromises.has(e) || this.pcPromises.set(e, []), new Promise((function (n, i) {
                t.pcPromises.get(e).push({resolve: n, reject: i})
            })))
        }

        closePeerConnection(e) {
            var t = this;
            if (this.pcs.has(e)) {
                let n = this.pcs.get(e);
                n.getTransceivers().forEach((function (e) {
                    e.sender && (e.sender.dtmf && t.dtmfSenders.forEach((function (n, i) {
                        n === e.sender.dtmf && t.dtmfSenders.delete(i)
                    })), t.senders.forEach((function (n, i) {
                        n === e.sender && t.senders.delete(i)
                    }))), e.receiver && t.receivers.forEach((function (n, i) {
                        n === e.receiver && t.receivers.delete(i)
                    })), t.transceivers.forEach((function (n, i) {
                        n === e && t.transceivers.delete(i)
                    }))
                })), n.getSenders().forEach((function (e) {
                    t.senders.forEach((function (n, i) {
                        n === e && t.senders.delete(i)
                    }))
                })), n.getReceivers((function (e) {
                    t.receivers.forEach((function (n, i) {
                        n === e && t.receivers.delete(i)
                    }))
                })), n.localDescription && (this.offers.forEach((function (e, i) {
                    n.localDescription.type === e.type && n.localDescription.sdp === e.sdp && t.offers.delete(i)
                })), this.answers.forEach((function (e, i) {
                    n.localDescription.type === e.type && n.localDescription.sdp === e.sdp && t.offers.delete(i)
                }))), n.remoteDescription && this.remoteDescriptions.forEach((function (e, i) {
                    n.remoteDescription.type === e.type && n.remoteDescription.sdp === e.sdp && t.remoteDescriptions.delete(i)
                })), this.pcPromises.has(e) && (this.pcPromises.get(e).forEach((function (e) {
                    e.reject(null)
                })), this.pcPromises.delete(e)), n.close(), this.pcs.delete(e)
            }
        }

        getPendingEvent(e, t) {
            return e.pendingEvents.has(t) && e.pendingEvents.get(t).length > 0 ? e.pendingEvents.get(t).shift() : (e.eventPromises.has(t) || e.eventPromises.set(t, []), new Promise((function (n, i) {
                e.eventPromises.get(t).push({resolve: n, reject: i})
            })))
        }

        getStream(e) {
            return this.streams.get(e)
        }

        makeTrackTO(e, t = (e.id ? e.id : crypto.randomUUID())) {
            return this.tracks.set(t, e), {
                type: "proxy",
                contentHint: e.contentHint,
                enabled: e.enabled,
                id: t,
                kind: e.kind,
                label: e.label,
                muted: e.muted,
                readyState: e.readyState,
                settings: e.getSettings()
            }
        }

        makeStreamTO(e, t = (e.id ? e.id : crypto.randomUUID())) {
            var n = this;
            this.streams.set(t, e);
            let i = e.getTracks().map((function (e) {
                return n.makeTrackTO(e)
            }));
            return {type: "proxy", id: t, active: e.active, tracks: i}
        }

        makeSyncronizationSourceTO(e) {
            return {audioLevel: e.audioLevel, rtpTimestamp: e.rtpTimestamp, source: e.source, timestamp: e.timestamp}
        }

        makeReceiverTO(e) {
            var t = this;
            let n = e.getSynchronizationSources();
            n = n.map((function (e) {
                return t.makeSyncronizationSourceTO(e)
            }));
            let i = {
                id: e.id ? e.id : crypto.randomUUID(),
                type: "proxy",
                track: e.track ? this.makeTrackTO(e.track) : null,
                synchronizationSources: n,
                stats: []
            };
            return e.id = i.id, this.receivers.set(i.id, e), i
        }

        makeDTMFSenderTO(e) {
            let t = {id: e.id ? e.id : crypto.randomUUID(), type: "proxy", toneBuffer: e.toneBuffer};
            return e.id = t.id, this.dtmfSenders.set(t.id, e), t
        }

        makeSenderTO(e) {
            let t = {
                id: e.id ? e.id : crypto.randomUUID(),
                type: "proxy",
                track: e.track ? this.makeTrackTO(e.track) : null,
                dtmf: e.dtmf ? this.makeDTMFSenderTO(e.dtmf) : null
            };
            return e.id = t.id, this.senders.set(t.id, e), t
        }

        makeTransceiverTO(e) {
            return {
                id: e.id,
                type: "proxy",
                currentDirection: e.currentDirection,
                direction: e.direction,
                mid: e.mid,
                receiver: e.receiver ? this.makeReceiverTO(e.receiver) : null,
                sender: e.sender ? this.makeSenderTO(e.sender) : null,
                stopped: e.stopped
            }
        }

        findProxySubject(e) {
            return this.pcs.has(e) ? this.pcs.get(e) : this.audioContexts.has(e) ? this.audioContexts.get(e) : this.audioNodes.has(e) ? this.audioNodes.get(e) : this.workers.has(e) ? this.workers.get(e) : this.certs.has(e) ? this.certs.get(e) : this.streams.has(e) ? this.streams.get(e) : this.offers.has(e) ? this.offers.get(e) : this.answers.has(e) ? this.answers.get(e) : this.remoteDescriptions.has(e) ? this.remoteDescriptions.get(e) : this.mediaElements.has(e) ? this.mediaElements.get(e) : this.senders.has(e) ? this.senders.get(e) : this.dtmfSenders.has(e) ? this.dtmfSenders.get(e) : this.receivers.has(e) ? this.receivers.get(e) : this.transceivers.has(e) ? this.transceivers.get(e) : this.tracks.has(e) ? this.tracks.get(e) : null
        }

        traverse(e, t) {
            if ("object" == typeof e) for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t.apply(this, [e, n, e[n]]), null !== e[n] && "object" == typeof e[n] && this.traverse(e[n], t))
        }

        getWorker(e) {
            var t = this;
            return this.workers.has(e) ? this.workers.get(e) : (this.workerPromises.has(e) || this.workerPromises.set(e, []), new Promise((function (n, i) {
                t.workerPromises.get(e).push({resolve: n, reject: i})
            })))
        }

        gatherPeerConnectionState(e, t) {
            var n = this;
            e.canTrickleIceCandidates = t.canTrickleIceCandidates, e.connectionState = t.connectionState, e.currentLocalDescription = t.currentLocalDescription, e.currentRemoteDescription = t.currentRemoteDescription, e.iceConnectionState = t.iceConnectionState, e.iceGatheringState = t.iceGatheringState, e.iceGatheringState = t.iceGatheringState, e.localDescription = t.localDescription, e.peerIdentity = t.peerIdentity, e.pendingLocalDescription = t.pendingLocalDescription, e.pendingRemoteDescription = t.pendingRemoteDescription, e.remoteDescription = t.remoteDescription, e.sctp = t.sctp, e.signalingState = t.signalingState, e.configuration = t.getConfiguration(), e.transceivers = t.getTransceivers().map((function (e) {
                return n.makeTransceiverTO(e)
            })), e.senders = t.getSenders().map((function (e) {
                return n.makeSenderTO(e)
            })), e.receivers = t.getReceivers().map((function (e) {
                return n.makeReceiverTO(e)
            }))
        }

        getBrowserName(e) {
            const t = e.toLowerCase();
            switch (!0) {
                case t.indexOf("edge") > -1:
                    return "edge";
                case t.indexOf("edg/") > -1:
                    return "edg";
                case t.indexOf("opr") > -1 && Boolean(window.opr):
                    return "opera";
                case t.indexOf("chrome") > -1 && Boolean(window.chrome):
                    return "chrome";
                case t.indexOf("trident") > -1:
                    return "ie";
                case t.indexOf("firefox") > -1:
                    return "firefox";
                case t.indexOf("safari") > -1:
                    return "safari";
                default:
                    return "other"
            }
        }

        getBrowserVersion(e) {
            let t = this.getBrowserName(e), n = new RegExp(`(?<=${t}\\/)\\d+(?:\\.\\d+)+`, "i").exec(e);
            return n && n.length > 0 ? n[0] : null
        }

        async callWebRTCApi(e, t, n) {
            var i = this;
            switch (e) {
                case a.HELLO_API_NAME:
                    return this.platform = "web", this.webview && (this.webview.is_webkit && (this.platform = "macOS"), this.webview.is_chrome && (this.platform = "windows")), {
                        version: this.version,
                        platform: this.platform,
                        userAgent: navigator.userAgent,
                        browserDetails: {
                            browser: this.getBrowserName(navigator.userAgent),
                            version: this.getBrowserVersion(navigator.userAgent)
                        }
                    };
                case a.GETUSERMEDIA_API_NAME: {
                    let [e] = n, t = null;
                    if (this.webview && this.webview.is_webkit && "hidden" === document.visibilityState) {
                        let e = this.masterUserMedia.clone();
                        this.logger.info("Using clone of masterUserMedia(id): ", this.masterUserMedia.id, ", clone(id): ", e.id), t = e
                    } else t = await navigator.mediaDevices.getUserMedia(e);
                    return this.makeStreamTO(t)
                }
                case a.ENUMERATEDEVICES_API_NAME:
                    return (await navigator.mediaDevices.enumerateDevices()).map((function (e) {
                        return e.toJSON()
                    }));
                case a.STREAM_ADD_TRACK: {
                    let [e, t] = n, i = this.streams.get(e), r = this.tracks.get(t);
                    return i && r && i.addTrack(r), {}
                }
                case a.STREAM_REMOVE_TRACK: {
                    let [e, t] = n, i = this.streams.get(e), r = this.tracks.get(t);
                    return i && r && i.removeTrack(r), {}
                }
                case a.GENERATE_CERTIFICATE_API_NAME: {
                    let [e] = n, i = await RTCPeerConnection.generateCertificate(e);
                    return this.certs.set(t, i), {
                        type: "proxy",
                        id: t,
                        expires: i.expires,
                        fingerprints: i.getFingerprints()
                    }
                }
                case a.NEWRTCPEERCONNECTION_API_NAME: {
                    let [e, t, r] = n;
                    if (t && t.certificates) {
                        let e = t.certificates.map((function (e) {
                            return i.certs.get(e.id)
                        }));
                        t.certificates = e
                    }
                    let s = new RTCPeerConnection(t, r);
                    this.pcs.set(e, s), this.pcPromises.has(e) && (this.pcPromises.get(e).forEach((function (e) {
                        e.resolve(e)
                    })), this.pcPromises.set(e, []));
                    let a = {type: "proxy", pcId: e};
                    return this.gatherPeerConnectionState(a, s), a
                }
                case a.PC_GET_CONFIGURATION: {
                    let [e] = n;
                    return (await this.getPeerConnection(e)).getConfiguration()
                }
                case a.CREATE_WORKER: {
                    let [e, t, i, r] = n, s = m(i), a = new Blob([s], {type: t}), o = URL.createObjectURL(a),
                        d = new Worker(o, r);
                    return this.workers.set(e, d), this.workerPromises.has(e) && (this.workerPromises.get(e).forEach((function (e) {
                        e.resolve(d)
                    })), this.workerPromises.set(e, [])), {type: "proxy", id: e}
                }
                case a.WORKER_TERMINATE: {
                    let [e] = n;
                    return this.workers.has(e) && (this.workers.get(e).terminate(), this.workerPromises.has(e) && this.workerPromises.get(e).forEach((function (e) {
                        e.reject(null)
                    })), this.workerPromises.delete(e), this.workers.delete(e)), {}
                }
                case a.WORKER_POST_MESSAGE: {
                    let [e, t, r] = n, s = await this.getWorker(e);
                    return this.traverse(t, (function (e, t, n) {
                        "proxy" === n.type && n.id && (e[t] = i.findProxySubject(n.id))
                    })), this.traverse(r, (function (e, t, n) {
                        "proxy" === n.type && n.id && (e[t] = i.findProxySubject(n.id))
                    })), s.postMessage(t, r), {type: "proxy", id: e}
                }
                case a.NEW_AUDIO_CONTEXT: {
                    let [e, t] = n, i = new AudioContext;
                    return this.audioContexts.set(e, i), this.audioNodes.set(t, i.destination), {
                        type: "proxy",
                        id: e,
                        baseLatency: i.baseLatency,
                        currentTime: i.currentTime,
                        outputLatency: i.outputLatency,
                        sampleRate: i.sampleRate,
                        sinkId: i.sinkId,
                        state: i.state
                    }
                }
                case a.AUDIO_CTX_CREATE_AUDIO_NODE: {
                    let [e, t, r, s] = n;
                    if (this.audioContexts.has(e)) {
                        let n = this.audioContexts.get(e), a = n["create" + r];
                        s = s.map((function (e) {
                            return "proxy" === e.type ? i.findProxySubject(e.id) : e
                        }));
                        let o = a.apply(n, s);
                        this.audioNodes.set(t, o);
                        let d = null;
                        if (o.stream) {
                            let e = o.stream.getTracks().map((function (e) {
                                return i.makeTrackTO(e, t)
                            }));
                            d = this.makeStreamTO(o.stream, t), d.tracks = e
                        }
                        return {
                            id: t,
                            channelCount: o.channelCount,
                            channelCountMode: o.channelCountMode,
                            channelInterpretation: o.channelInterpretation,
                            numberOfInputs: o.numberOfInputs,
                            numberOfOutputs: o.numberOfOutputs,
                            fftSize: o.fftSize,
                            frequencyBinCount: o.frequencyBinCount,
                            maxDecibels: o.maxDecibels,
                            minDecibels: o.minDecibels,
                            smoothingTimeConstant: o.smoothingTimeConstant,
                            stream: d
                        }
                    }
                    return {}
                }
                case a.AUDIO_CTX_CLOSE: {
                    let [e] = n;
                    if (this.audioContexts.has(e)) {
                        this.audioContexts.get(e).close(), this.audioContexts.delete(e)
                    }
                    return {}
                }
                case a.AUDIO_NODE_CONNECT: {
                    let [e, t, i, r] = n, s = this.audioNodes.get(e), a = this.findProxySubject(t.id);
                    return s && a && s.connect(a, i || 0, r || 0), {}
                }
                case a.AUDIO_NODE_DISCONNECT: {
                    let [e, t, i, r] = n, s = this.audioNodes.get(e), a = this.findProxySubject(t.id);
                    return s && a && s.disconnect(a, i || 0, r || 0), {}
                }
                case a.AUDIO_NODE_SET_TYPE: {
                    let [e, t] = n;
                    if (this.audioNodes.has(e)) {
                        this.audioNodes.get(e).type = t
                    }
                    return {}
                }
                case a.AUDIO_NODE_START: {
                    let [e, t] = n;
                    if (this.audioNodes.has(e)) {
                        this.audioNodes.get(e).start(t)
                    }
                    return {}
                }
                case a.AUDIO_NODE_STOP: {
                    let [e, t] = n;
                    if (this.audioNodes.has(e)) {
                        this.audioNodes.get(e).stop(t)
                    }
                    return {}
                }
                case a.AUDIO_PARAM_SET_VALUE_AT_TIME: {
                    let [e, t, i] = n;
                    if (this.audioNodes.has(e)) {
                        let n = this.audioNodes.get(e);
                        n.gain ? n.gain.setValueAtTime(t, i || n.context.currentTime) : n.frequency && n.frequency.setValueAtTime(t, i || n.context.currentTime)
                    }
                    return {}
                }
                case a.AUDIO_PARAM_SET_RAMP_TO_VALUE_AT_TIME: {
                    let [e, t, i] = n;
                    if (this.audioNodes.has(e)) {
                        let n = this.audioNodes.get(e);
                        n.frequency && n.frequency.linearRampToValueAtTime(t, i || n.context.currentTime)
                    }
                    return {}
                }
                case a.GET_RECEIVERS_API_NAME: {
                    let [e] = n;
                    return {
                        pcId: e, receivers: (await this.getPeerConnection(e)).getReceivers().map((function (e) {
                            return i.makeReceiverTO(e)
                        }))
                    }
                }
                case a.GET_SENDERS_API_NAME: {
                    let [e] = n;
                    return {
                        pcId: e, senders: (await this.getPeerConnection(e)).getSenders().map((function (e) {
                            return i.makeSenderTO(e)
                        }))
                    }
                }
                case a.INSERT_DTMF_API_NAME: {
                    let [e, t, i, r] = n, s = this.dtmfSenders.get(e);
                    return s && s.insertDTMF(t, i, r), {}
                }
                case a.GET_TRANSCEIVERS_API_NAME: {
                    let [e] = n, t = (await this.getPeerConnection(e)).getTransceivers();
                    return t = t.map((function (e) {
                        return e.id = e.id ? e.id : crypto.randomUUID(), i.makeTransceiverTO(e)
                    })), {pcId: e, transceivers: t}
                }
                case a.TRANSCEIVER_SET_CODEC_PREFS:
                    return {};
                case a.ADD_TRACK_API_NAME: {
                    let [e, t, r, ...s] = n, a = await this.getPeerConnection(t), o = [];
                    s.forEach((function (e) {
                        const t = i.streams.get(e.proxy.id);
                        t && o.push(t)
                    }));
                    let d = this.tracks.get(r.id);
                    if (d) {
                        let n = [d, ...o], r = a.addTrack.apply(a, n);
                        r.id = e;
                        let s = this.makeSenderTO(r);
                        return s.pcId = t, s.senders = a.getSenders().map((function (e) {
                            return i.makeSenderTO(e)
                        })), s.receivers = a.getReceivers().map((function (e) {
                            return i.makeReceiverTO(e)
                        })), s.transceivers = a.getTransceivers().map((function (e) {
                            return i.makeTransceiverTO(e)
                        })), s
                    }
                    return {}
                }
                case a.ADD_TRANSCEIVER_API_NAME: {
                    let [e, t, r, s] = n, a = await this.getPeerConnection(e);
                    if ("string" != typeof r && (r = this.tracks.get(r.id)), s && s.streams) {
                        let e = [];
                        s.streams.forEach((function (t) {
                            if (t.proxy) {
                                let n = i.streams.get(t.proxy.id);
                                e.push(n)
                            }
                        })), s.streams = e
                    }
                    let o = a.addTransceiver(r, s);
                    o.id = t.id, this.transceivers.set(t.id, o), o.sender && (o.sender.id = t.sender.id, this.senders.set(t.sender.id, o.sender)), o.receiver && (o.receiver.id = t.receiver.id, this.receivers.set(t.receiver.id, o.receiver));
                    let d = this.makeTransceiverTO(o);
                    return d.pcId = e, d.senders = a.getSenders().map((function (e) {
                        return i.makeSenderTO(e)
                    })), d.receivers = a.getReceivers().map((function (e) {
                        return i.makeReceiverTO(e)
                    })), d.transceivers = a.getTransceivers().map((function (e) {
                        return i.makeTransceiverTO(e)
                    })), d
                }
                case a.PC_CLOSE_API_NAME: {
                    let [e] = n;
                    return this.closePeerConnection(e), {}
                }
                case a.ADDSTREAM_API_NAME: {
                    let [e, t] = n, i = this.streams.get(t.id);
                    return (await this.getPeerConnection(e)).addStream(i), t
                }
                case a.GET_STATS_API_NAME: {
                    let [e, t] = n, i = await this.getPeerConnection(e), r = await i.getStats(t), s = [];
                    return r.forEach((function (e) {
                        let t = Object.assign({}, e);
                        s.push(t)
                    })), s
                }
                case a.GET_SENDER_STATS_API_NAME: {
                    let [e] = n;
                    if (this.senders.has(e)) {
                        let t = await this.senders.get(e).getStats(), n = [];
                        return t.forEach((function (e) {
                            let t = Object.assign({}, e);
                            n.push(t)
                        })), n
                    }
                    return []
                }
                case a.GET_RECEIVER_STATS_API_NAME: {
                    let [e] = n;
                    if (this.receivers.has(e)) {
                        let t = await this.receivers.get(e).getStats(), n = [];
                        return t.forEach((function (e) {
                            let t = {
                                id: e.id ? e.id : crypto.randomUUID(),
                                type: e.type,
                                concealedSamples: e.concealedSamples
                            };
                            n.push(t)
                        })), n
                    }
                    return {}
                }
                case a.REPLACE_SENDER_TRACK_API_NAME: {
                    let [e, t] = n, i = this.senders.get(e), r = t ? this.tracks.get(t.id) : null;
                    return r && i && await i.replaceTrack(r), {}
                }
                case a.PC_REMOVE_TRACK_API_NAME: {
                    let [e, t] = n, i = await this.getPeerConnection(e), r = this.senders.get(t.id);
                    return r && i.removeTrack(r), {}
                }
                case a.CREATE_OFFER_API_NAME: {
                    let [e, i] = n, r = await this.getPeerConnection(e), s = await r.createOffer(i);
                    return this.offers.set(t, s), {id: t, type: s.type, sdp: s.sdp}
                }
                case a.CREATE_ANSWER_API_NAME: {
                    let [e, i] = n, r = await this.getPeerConnection(e), s = await r.createAnswer(i);
                    return this.answers.set(t, s), {id: t, type: s.type, sdp: s.sdp}
                }
                case a.SET_LOCAL_DESCRIPTION_API_NAME: {
                    let [e, t] = n, i = "offer" === t.type ? this.offers : this.answers, r = t.id ? i.get(t.id) : t;
                    if (r) {
                        r.sdp = t.sdp;
                        let n = await this.getPeerConnection(e);
                        return await n.setLocalDescription(r), t
                    }
                    return {}
                }
                case a.SET_REMOTE_DESCRIPTION_API_NAME: {
                    let [e, t] = n, i = await this.getPeerConnection(e);
                    return await i.setRemoteDescription(t), t
                }
                case a.ADD_ICE_CANDIDATE_API_NAME: {
                    let [e, t] = n,
                        i = t ? new RTCIceCandidate({sdpMLineIndex: t.sdpMLineIndex, candidate: t.candidate}) : null;
                    return (await this.getPeerConnection(e)).addIceCandidate(i), t
                }
                case a.ADD_PC_EVENT_LISTENER: {
                    let [e, r] = n, s = await this.getPeerConnection(e);
                    if (s.pendingEvents || (s.pendingEvents = new Map), s.eventPromises || (s.eventPromises = new Map), s.pendingEvents.has(r)) {
                        let e = await this.getPendingEvent(s, r);
                        this.sendEvent(a.ADD_PC_EVENT_LISTENER, t, e)
                    } else if (!s[r]) {
                        const n = function (n) {
                            let r = null;
                            if (n.type === o.ICE_CANDIDATE) {
                                let t = n.candidate, a = null;
                                t && (a = {
                                    sdpMLineIndex: t.sdpMLineIndex,
                                    sdpMid: t.sdpMid,
                                    candidate: t.candidate,
                                    type: t.type,
                                    foundation: t.foundation,
                                    protocol: t.protocol,
                                    address: t.address,
                                    port: t.port,
                                    priority: t.priority,
                                    url: t.url,
                                    relayProtocol: t.relayProtocol,
                                    component: t.compoonent,
                                    relatedAddress: t.relatedAddress,
                                    relatedPort: t.relatedPort,
                                    tcpType: t.tcpType,
                                    usernameFragment: t.usernameFragment
                                }), r = {
                                    pcId: e,
                                    eventName: n.type,
                                    type: "proxy",
                                    candidate: a
                                }, i.gatherPeerConnectionState(r, s)
                            } else n.type === o.SIG_STATE_CHANGE ? (r = {
                                pcId: e,
                                eventName: n.type,
                                type: "proxy"
                            }, i.gatherPeerConnectionState(r, s)) : n.type === o.TRACK ? (r = {
                                pcId: e,
                                eventName: n.type,
                                type: "proxy",
                                streams: [],
                                senders: [],
                                receivers: [],
                                track: i.makeTrackTO(n.track)
                            }, r.streams = n.streams.map((function (e) {
                                return i.makeStreamTO(e)
                            })), i.gatherPeerConnectionState(r, s)) : n.type === o.CONN_STATE_CHANGE || n.type === o.ICE_CONN_STATE_CHANGE || n.type === o.ICE_GATHER_STATE_CHANGE || n.type === o.NEGOTIATION_NEEDED ? (r = {
                                pcId: e,
                                eventName: n.type,
                                type: "proxy"
                            }, i.gatherPeerConnectionState(r, s)) : i.logger.warn(`Ignored event, type: ${n.type}, event: ${JSON.stringify(n)}`);
                            r && i.processPendingEvents(s, n, r, a.ADD_PC_EVENT_LISTENER, t)
                        };
                        s[r] = n, s.addEventListener(r, n)
                    }
                    return null
                }
                case a.ADD_TRACK_EVENT_LISTENER: {
                    let [e, r, s] = n, o = this.tracks.get(e);
                    if (o) {
                        if (o.pendingEvents || (o.pendingEvents = new Map), o.eventPromises || (o.eventPromises = new Map), o.pendingEvents.has(r)) {
                            let e = await this.getPendingEvent(o, r);
                            this.sendEvent(a.ADD_TRACK_EVENT_LISTENER, t, e)
                        } else if (!o[r]) {
                            const n = function (n) {
                                if (Object.values(d).includes(r)) {
                                    let r = {trackId: e, eventName: n.type, type: "proxy"};
                                    r && i.processPendingEvents(o, n, r, a.ADD_TRACK_EVENT_LISTENER, t)
                                } else i.logger.warn(`Ignored event: ${JSON.stringify(n)}`)
                            };
                            o[r] = n, o.addEventListener(r, n, s)
                        }
                        return null
                    }
                    return {}
                }
                case a.ADD_WORKER_EVENT_LISTENER: {
                    let [e, r] = n, s = await this.getWorker(e);
                    if (s.pendingEvents || (s.pendingEvents = new Map), s.eventPromises || (s.eventPromises = new Map), s.pendingEvents.has(r)) {
                        let e = await this.getPendingEvent(s, r);
                        this.sendEvent(a.ADD_WORKER_EVENT_LISTENER, t, e)
                    } else if (!s[r]) {
                        const n = function (n) {
                            if (Object.values(l).includes(r)) {
                                let r = {wId: e, eventName: n.type, type: "proxy", data: n.data};
                                r && i.processPendingEvents(s, n, r, a.ADD_WORKER_EVENT_LISTENER, t)
                            } else i.logger.warn(`Ignored event: ${JSON.stringify(n)}`, n)
                        };
                        s[r] = n, s.addEventListener(r, n)
                    }
                    return null
                }
                case a.ADD_DTMF_EVENT_LISTENER: {
                    let [e, r, s] = n, o = this.dtmfSenders.get(e);
                    if (o.pendingEvents || (o.pendingEvents = new Map), o.eventPromises || (o.eventPromises = new Map), o.pendingEvents.has(r)) {
                        let e = await this.getPendingEvent(o, r);
                        this.sendEvent(a.ADD_DTMF_EVENT_LISTENER, t, e)
                    } else if (!o[r]) {
                        const n = function (n) {
                            if (Object.values(c).includes(r)) {
                                let r = {dtmfId: e, eventName: n.type, type: n.type, tone: n.tone};
                                i.processPendingEvents(o, n, r, a.ADD_DTMF_EVENT_LISTENER, t)
                            } else i.logger.warn(`Ignored event: ${JSON.stringify(n)}`)
                        };
                        o[r] = n, o.addEventListener(r, n, s)
                    }
                    return null
                }
                case a.ADD_MEDIADEVICES_EVENT_LISTENER: {
                    let [e, r, s] = n, o = navigator.mediaDevices;
                    if (o.pendingEvents || (o.pendingEvents = new Map), o.eventPromises || (o.eventPromises = new Map), o.pendingEvents.has(r)) {
                        let e = await this.getPendingEvent(o, r);
                        this.sendEvent(a.ADD_MEDIADEVICES_EVENT_LISTENER, t, e)
                    } else if (!o[r]) {
                        const n = function (n) {
                            if (Object.values(h).includes(r)) {
                                let r = {id: crypto.randomUUID(), mdId: e, eventName: n.type, type: n.type};
                                i.processPendingEvents(o, n, r, a.ADD_MEDIADEVICES_EVENT_LISTENER, t)
                            } else i.logger.warn(`Ignored event: ${JSON.stringify(n)}`)
                        };
                        o[r] = n, o.addEventListener(r, n, s)
                    }
                    return null
                }
                case a.CREATE_MEDIA_ELEMENT_API_NAME: {
                    let [e, t] = n;
                    if ("audio" !== t.kind && "video" !== t.kind) return this.logger.warn(`Invalid media type: ${JSON.stringify(t)}`), null;
                    let i = document.createElement(t.kind);
                    return Object.assign(i, t), document.body.appendChild(i), this.mediaElements.set(e, i), {
                        id: e,
                        sinkId: i.sinkId
                    }
                }
                case a.MEDIA_ELEMENT_SET_SINK_ID_API_NAME: {
                    let [e, t] = n, i = this.mediaElements.get(e);
                    if (i) {
                        return await i.setSinkId(t), {id: e, sinkId: i.sinkId}
                    }
                    return {}
                }
                case a.SET_MEDIA_SRC_OBJ_API_NAME: {
                    let [e, t] = n, i = t ? this.getStream(t.id) : null;
                    return this.mediaElements.has(e) && (this.mediaElements.get(e).srcObject = i), {}
                }
                case a.MEDIA_ELEMENT_MUTED: {
                    let [e, t] = n;
                    return this.mediaElements.has(e) && (this.mediaElements.get(e).muted = t), {id: e, muted: t}
                }
                case a.SET_MEDIA_HIDDEN_API_NAME: {
                    let [e, t] = n, i = this.mediaElements.get(e);
                    return i && (i.hidden = t), {}
                }
                case a.SET_MEDIA_VOLUME_API_NAME: {
                    let [e, t] = n;
                    return this.mediaElements.has(e) && (this.mediaElements.get(e).volume = t), {}
                }
                case a.MEDIA_ELEMENT_PLAY_API_NAME: {
                    let [e] = n;
                    return this.mediaElements.has(e) && this.mediaElements.get(e).play(), {}
                }
                case a.MEDIA_ELEMENT_PAUSE_API_NAME: {
                    let [e] = n;
                    return this.mediaElements.has(e) && this.mediaElements.get(e).pause(), {}
                }
                case a.MEDIA_ELEMENT_REMOVE: {
                    let [e] = n;
                    return this.mediaElements.has(e) && (this.mediaElements.get(e).remove(), this.mediaElements.delete(e)), {}
                }
                case a.TOGGLE_TRACK_ENABLED_API_NAME: {
                    let [e, t] = n, i = this.tracks.get(e);
                    return i ? (i.enabled = t, this.makeTrackTO(i)) : {}
                }
                case a.TRACK_STOP_API_NAME: {
                    let [e] = n, t = this.tracks.get(e);
                    return t && (t.stop(), this.tracks.delete(e)), {}
                }
                case a.TRACK_GET_SETTINGS: {
                    let [e] = n, t = this.tracks.get(e);
                    return t ? t.getSettings() : {}
                }
                case a.SENDER_CREATE_ENCODED_STREAMS: {
                    let [e, t] = n;
                    if (this.senders.has(e)) {
                        let n = this.senders.get(e).createEncodedStreams();
                        return this.streams.set(t.id, n), this.streams.set(t.readable.id, n.readable), this.streams.set(t.writable.id, n.writable), t
                    }
                    return {}
                }
                case a.RECEIVER_CREATE_ENCODED_STREAMS: {
                    let [e, t] = n;
                    if (this.receivers.has(e)) {
                        let n = this.receivers.get(e).createEncodedStreams();
                        return this.streams.set(t.id, n), this.streams.set(t.readable.id, n.readable), this.streams.set(t.writable.id, n.writable), t
                    }
                    return {}
                }
                case a.UNLOAD_EVENT_NAME: {
                    let [e] = n;
                    return e.pcIds.forEach((function (e) {
                        i.closePeerConnection(e)
                    })), e.streamIds.forEach((function (e) {
                        let t = i.streams.get(e);
                        t && ("function" == typeof t.getTracks && t.getTracks().forEach((function (e) {
                            e.stop()
                        })), i.streams.delete(e))
                    })), e.trackIds.forEach((function (e) {
                        i.tracks.delete(e)
                    })), e.workerIds.forEach((function (e) {
                        let t = i.workers.get(e);
                        t && t.terminate(), i.workers.delete(e)
                    })), e.mediaElementIds.forEach((function (e) {
                        let t = i.mediaElements.get(e);
                        t && (t.remove(), i.mediaElements.delete(e))
                    })), e.transceiverIds.forEach((function (e) {
                        i.transceivers.delete(e)
                    })), e.senderIds.forEach((function (e) {
                        i.senders.delete(e)
                    })), e.receiverIds.forEach((function (e) {
                        i.receivers.delete(e)
                    })), {}
                }
                default: {
                    const t = new Error(`Invalid api: ${e}`);
                    throw t.name = "InvalidApi", t
                }
            }
        }

        sendMessage(e) {
            let t = e.message, n = A.deflateRaw(JSON.stringify(t));
            e.message = n;
            let i = (new TextEncoder).encode(JSON.stringify(e)), r = i.byteLength,
                s = new Uint8Array([r, r >> 8, r >> 16, r >> 24]);
            this.channel.sendMessage(s), this.channel.sendMessage(i)
        }

        sendEvent(e, t, n) {
            let i = {requestId: t, type: "event", message: {api: e, event: n}};
            this.sendMessage(i)
        }

        sendResponse(e, t, n) {
            let i = {requestId: t, type: "response", message: {api: e, response: n}};
            this.sendMessage(i)
        }

        sendError(e, t, n) {
            let i = {requestId: t, type: "error", message: {api: e, error: n}};
            this.sendMessage(i)
        }

        async handleWebRTCApi(e) {
            try {
                let t = await this.callWebRTCApi(e.message.api, e.requestId, e.message.args);
                t && this.sendResponse(e.message.api, e.requestId, t)
            } catch (t) {
                this.logger.error(`Error handling WebRTC API: ${JSON.stringify(e)}, message: ${t.message ? t.message : "(no message)"}, error: ${JSON.stringify(t)}`), this.logger.trace(t), this.sendError(e.message.api, e.requestId, {
                    name: t.name,
                    message: t.message
                })
            }
        }

        processPendingEvents(e, t, n, i, r) {
            if (e.pendingEvents.has(t.type)) {
                e.pendingEvents.get(t.type).push(n);
                let i = e.eventPromises.get(t.type);
                i && i.forEach((function (e) {
                    e.resolve(n)
                }))
            } else this.sendEvent(i, r, n), e.pendingEvents.set(t.type, [])
        }

        handleMessage(e) {
            let t = e.message, n = A.inflateRaw(t), i = this.decoder.decode(n);
            e.message = JSON.parse(i), e.message.api && e.requestId && e.message.args ? this.handleWebRTCApi(e) : (this.logger.error(`Invalid message format: ${JSON.stringify(e)}`), this.logger.trace(e))
        }

        onClose(e) {
            this.logger.info(`WebRTC redir custom channel closed: ${JSON.stringify(e)}"`), this.release()
        }

        release() {
            var e = this;
            this.streams.forEach((function (e) {
                e.getTracks().forEach((function (e) {
                    e.stop()
                }))
            })), this.mediaElements.forEach((function (e) {
                e.remove()
            })), this.pcs.forEach((function (t, n) {
                e.closePeerConnection(n)
            })), this.certs.clear()
        }
    }

    function I(e, t, n) {
        globalThis.DCVWebRTCRedirProxy = t, y.initCallbacks ? (y.initCallbacks.forEach((function (i, r) {
            clearTimeout(i), r({success: e, proxy: t, error: n})
        })), y.initCallbacks.clear()) : s.debug("No DCVWebRTCPeerConnectionProxy.initCallback was specified.")
    }

    try {
        window.DCVWebRTCPeerConnectionProxy = y;
        let e = new y({logger: s});
        e.sendHelloRequest().then((function (t) {
            if (t) s.debug(`Successfully received hello response from client: ${JSON.stringify(t)}`), e.clientInfo = t, e.resetHeartbeat(null), I(!0, e); else {
                const e = "Running in an invalid dcv webrtc env, skipping setting up proxy (empty result).";
                s.debug(e), I(!1, null, e)
            }
        })).catch((function (e) {
            const t = `Running in an invalid dcv webrtc env, skipping setting up proxy: ${JSON.stringify(e)}`;
            s.debug(t), I(!1, null, t)
        }))
    } catch (e) {
        const t = e.message;
        I(!1, null, t), s.debug(`Skipping setting up proxy in client env: ${t}`)
    }
    let R = null;
    if (window.chrome && window.chrome.webview ? R = {
        is_chrome: !0,
        handler: window.chrome.webview
    } : window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.ipc && (R = {
        is_webkit: !0,
        handler: {
            postMessage: function (e) {
                window.webkit.messageHandlers.ipc.postMessage(e)
            }
        }
    }), R) {
        globalThis.dcv_webview_ipc = R, console.log("Initializing webrtc redir client library.");
        let e = new b({
            logger: {
                postMessage: function (e, ...t) {
                    let n = `LOG|${e}|${t.join(" ")}`;
                    R.handler.postMessage(n)
                }, info: function (...e) {
                    this.postMessage("info", ...e)
                }, debug: function (...e) {
                    this.postMessage("debug", ...e)
                }, warn: function (...e) {
                    this.postMessage("warn", ...e)
                }, error: function (...e) {
                    this.postMessage("info", ...e)
                }, trace: function (...e) {
                    this.postMessage("trace", ...e)
                }
            }, channel: {
                sendMessage: function (t) {
                    let n = e.encodeBase64(t.buffer);
                    R.handler.postMessage(n)
                }
            }, webview: R
        });
        if (R.onWebViewMessage = function (t) {
            let n = e.decodeBase64(t.data), i = new Uint8Array(n);
            e.onMessageReceived(i)
        }, R.is_chrome && R.handler.addEventListener("message", R.onWebViewMessage), R.is_webkit) {
            let t = e.logger, n = async function () {
                t.info("Requesting user media, document visibility: ", document.visibilityState);
                let n = await navigator.mediaDevices.getUserMedia({audio: !0});
                t.info("Obtained master user media (id): ", n.id, ", document visibility: ", document.visibilityState), e.masterUserMedia = n
            };
            n(), navigator.mediaDevices.addEventListener("devicechange", (function (e) {
                t.info("Device changed: ", JSON.stringify(e)), n()
            }))
        }
    }
    e.DCVWebRTCRedirClient = b
}));