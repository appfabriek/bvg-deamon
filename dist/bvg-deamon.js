#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS({
  "node_modules/picocolors/picocolors.js"(exports2, module2) {
    var p = process || {};
    var argv = p.argv || [];
    var env = p.env || {};
    var isColorSupported = !(!!env.NO_COLOR || argv.includes("--no-color")) && (!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env.TERM !== "dumb" || !!env.CI);
    var formatter = (open, close, replace = open) => (input) => {
      let string = "" + input, index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let result = "", cursor = 0;
      do {
        result += string.substring(cursor, index) + replace;
        cursor = index + close.length;
        index = string.indexOf(close, cursor);
      } while (~index);
      return result + string.substring(cursor);
    };
    var createColors = (enabled2 = isColorSupported) => {
      let f = enabled2 ? formatter : () => String;
      return {
        isColorSupported: enabled2,
        reset: f("\x1B[0m", "\x1B[0m"),
        bold: f("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
        dim: f("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
        italic: f("\x1B[3m", "\x1B[23m"),
        underline: f("\x1B[4m", "\x1B[24m"),
        inverse: f("\x1B[7m", "\x1B[27m"),
        hidden: f("\x1B[8m", "\x1B[28m"),
        strikethrough: f("\x1B[9m", "\x1B[29m"),
        black: f("\x1B[30m", "\x1B[39m"),
        red: f("\x1B[31m", "\x1B[39m"),
        green: f("\x1B[32m", "\x1B[39m"),
        yellow: f("\x1B[33m", "\x1B[39m"),
        blue: f("\x1B[34m", "\x1B[39m"),
        magenta: f("\x1B[35m", "\x1B[39m"),
        cyan: f("\x1B[36m", "\x1B[39m"),
        white: f("\x1B[37m", "\x1B[39m"),
        gray: f("\x1B[90m", "\x1B[39m"),
        bgBlack: f("\x1B[40m", "\x1B[49m"),
        bgRed: f("\x1B[41m", "\x1B[49m"),
        bgGreen: f("\x1B[42m", "\x1B[49m"),
        bgYellow: f("\x1B[43m", "\x1B[49m"),
        bgBlue: f("\x1B[44m", "\x1B[49m"),
        bgMagenta: f("\x1B[45m", "\x1B[49m"),
        bgCyan: f("\x1B[46m", "\x1B[49m"),
        bgWhite: f("\x1B[47m", "\x1B[49m"),
        blackBright: f("\x1B[90m", "\x1B[39m"),
        redBright: f("\x1B[91m", "\x1B[39m"),
        greenBright: f("\x1B[92m", "\x1B[39m"),
        yellowBright: f("\x1B[93m", "\x1B[39m"),
        blueBright: f("\x1B[94m", "\x1B[39m"),
        magentaBright: f("\x1B[95m", "\x1B[39m"),
        cyanBright: f("\x1B[96m", "\x1B[39m"),
        whiteBright: f("\x1B[97m", "\x1B[39m"),
        bgBlackBright: f("\x1B[100m", "\x1B[49m"),
        bgRedBright: f("\x1B[101m", "\x1B[49m"),
        bgGreenBright: f("\x1B[102m", "\x1B[49m"),
        bgYellowBright: f("\x1B[103m", "\x1B[49m"),
        bgBlueBright: f("\x1B[104m", "\x1B[49m"),
        bgMagentaBright: f("\x1B[105m", "\x1B[49m"),
        bgCyanBright: f("\x1B[106m", "\x1B[49m"),
        bgWhiteBright: f("\x1B[107m", "\x1B[49m")
      };
    };
    module2.exports = createColors();
    module2.exports.createColors = createColors;
  }
});

// node_modules/ws/lib/constants.js
var require_constants = __commonJS({
  "node_modules/ws/lib/constants.js"(exports2, module2) {
    "use strict";
    var BINARY_TYPES = ["nodebuffer", "arraybuffer", "fragments"];
    var hasBlob = typeof Blob !== "undefined";
    if (hasBlob) BINARY_TYPES.push("blob");
    module2.exports = {
      BINARY_TYPES,
      CLOSE_TIMEOUT: 3e4,
      EMPTY_BUFFER: Buffer.alloc(0),
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      hasBlob,
      kForOnEventAttribute: /* @__PURE__ */ Symbol("kIsForOnEventAttribute"),
      kListener: /* @__PURE__ */ Symbol("kListener"),
      kStatusCode: /* @__PURE__ */ Symbol("status-code"),
      kWebSocket: /* @__PURE__ */ Symbol("websocket"),
      NOOP: () => {
      }
    };
  }
});

// node_modules/ws/lib/buffer-util.js
var require_buffer_util = __commonJS({
  "node_modules/ws/lib/buffer-util.js"(exports2, module2) {
    "use strict";
    var { EMPTY_BUFFER } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    function concat(list, totalLength) {
      if (list.length === 0) return EMPTY_BUFFER;
      if (list.length === 1) return list[0];
      const target = Buffer.allocUnsafe(totalLength);
      let offset = 0;
      for (let i = 0; i < list.length; i++) {
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
      }
      if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
      }
      return target;
    }
    function _mask(source, mask, output, offset, length) {
      for (let i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }
    function _unmask(buffer, mask) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] ^= mask[i & 3];
      }
    }
    function toArrayBuffer(buf) {
      if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
      }
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
    }
    function toBuffer(data) {
      toBuffer.readOnly = true;
      if (Buffer.isBuffer(data)) return data;
      let buf;
      if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
      } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
      } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
      }
      return buf;
    }
    module2.exports = {
      concat,
      mask: _mask,
      toArrayBuffer,
      toBuffer,
      unmask: _unmask
    };
    if (!process.env.WS_NO_BUFFER_UTIL) {
      try {
        const bufferUtil = require("bufferutil");
        module2.exports.mask = function(source, mask, output, offset, length) {
          if (length < 48) _mask(source, mask, output, offset, length);
          else bufferUtil.mask(source, mask, output, offset, length);
        };
        module2.exports.unmask = function(buffer, mask) {
          if (buffer.length < 32) _unmask(buffer, mask);
          else bufferUtil.unmask(buffer, mask);
        };
      } catch (e) {
      }
    }
  }
});

// node_modules/ws/lib/limiter.js
var require_limiter = __commonJS({
  "node_modules/ws/lib/limiter.js"(exports2, module2) {
    "use strict";
    var kDone = /* @__PURE__ */ Symbol("kDone");
    var kRun = /* @__PURE__ */ Symbol("kRun");
    var Limiter = class {
      /**
       * Creates a new `Limiter`.
       *
       * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
       *     to run concurrently
       */
      constructor(concurrency) {
        this[kDone] = () => {
          this.pending--;
          this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
      }
      /**
       * Adds a job to the queue.
       *
       * @param {Function} job The job to run
       * @public
       */
      add(job) {
        this.jobs.push(job);
        this[kRun]();
      }
      /**
       * Removes a job from the queue and runs it if possible.
       *
       * @private
       */
      [kRun]() {
        if (this.pending === this.concurrency) return;
        if (this.jobs.length) {
          const job = this.jobs.shift();
          this.pending++;
          job(this[kDone]);
        }
      }
    };
    module2.exports = Limiter;
  }
});

// node_modules/ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS({
  "node_modules/ws/lib/permessage-deflate.js"(exports2, module2) {
    "use strict";
    var zlib = require("zlib");
    var bufferUtil = require_buffer_util();
    var Limiter = require_limiter();
    var { kStatusCode } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    var TRAILER = Buffer.from([0, 0, 255, 255]);
    var kPerMessageDeflate = /* @__PURE__ */ Symbol("permessage-deflate");
    var kTotalLength = /* @__PURE__ */ Symbol("total-length");
    var kCallback = /* @__PURE__ */ Symbol("callback");
    var kBuffers = /* @__PURE__ */ Symbol("buffers");
    var kError = /* @__PURE__ */ Symbol("error");
    var zlibLimiter;
    var PerMessageDeflate2 = class {
      /**
       * Creates a PerMessageDeflate instance.
       *
       * @param {Object} [options] Configuration options
       * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
       *     for, or request, a custom client window size
       * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
       *     acknowledge disabling of client context takeover
       * @param {Number} [options.concurrencyLimit=10] The number of concurrent
       *     calls to zlib
       * @param {Boolean} [options.isServer=false] Create the instance in either
       *     server or client mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
       *     use of a custom server window size
       * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
       *     disabling of server context takeover
       * @param {Number} [options.threshold=1024] Size (in bytes) below which
       *     messages should not be compressed if context takeover is disabled
       * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
       *     deflate
       * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
       *     inflate
       */
      constructor(options) {
        this._options = options || {};
        this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
        this._maxPayload = this._options.maxPayload | 0;
        this._isServer = !!this._options.isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
          const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          zlibLimiter = new Limiter(concurrency);
        }
      }
      /**
       * @type {String}
       */
      static get extensionName() {
        return "permessage-deflate";
      }
      /**
       * Create an extension negotiation offer.
       *
       * @return {Object} Extension parameters
       * @public
       */
      offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }
        return params;
      }
      /**
       * Accept an extension negotiation offer/response.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Object} Accepted configuration
       * @public
       */
      accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
      }
      /**
       * Releases all resources used by the extension.
       *
       * @public
       */
      cleanup() {
        if (this._inflate) {
          this._inflate.close();
          this._inflate = null;
        }
        if (this._deflate) {
          const callback = this._deflate[kCallback];
          this._deflate.close();
          this._deflate = null;
          if (callback) {
            callback(
              new Error(
                "The deflate stream was closed while data was being processed"
              )
            );
          }
        }
      }
      /**
       *  Accept an extension negotiation offer.
       *
       * @param {Array} offers The extension negotiation offers
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && !params.client_max_window_bits) {
            return false;
          }
          return true;
        });
        if (!accepted) {
          throw new Error("None of the extension offers can be accepted");
        }
        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === "number") {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === "number") {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
          delete accepted.client_max_window_bits;
        }
        return accepted;
      }
      /**
       * Accept the extension negotiation response.
       *
       * @param {Array} response The extension negotiation response
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === "number") {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
          throw new Error(
            'Unexpected or invalid parameter "client_max_window_bits"'
          );
        }
        return params;
      }
      /**
       * Normalize parameters.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Array} The offers/response with normalized parameters
       * @private
       */
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            let value = params[key];
            if (value.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }
            value = value[0];
            if (key === "client_max_window_bits") {
              if (value !== true) {
                const num = +value;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(
                    `Invalid value for parameter "${key}": ${value}`
                  );
                }
                value = num;
              } else if (!this._isServer) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else if (key === "server_max_window_bits") {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
              value = num;
            } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
              if (value !== true) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }
            params[key] = value;
          });
        });
        return configurations;
      }
      /**
       * Decompress data. Concurrency limited.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      decompress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._decompress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Compress data. Concurrency limited.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      compress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._compress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Decompress data.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._inflate = zlib.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits
          });
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on("error", inflateOnError);
          this._inflate.on("data", inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin) this._inflate.write(TRAILER);
        this._inflate.flush(() => {
          const err = this._inflate[kError];
          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }
          const data2 = bufferUtil.concat(
            this._inflate[kBuffers],
            this._inflate[kTotalLength]
          );
          if (this._inflate._readableState.endEmitted) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
              this._inflate.reset();
            }
          }
          callback(null, data2);
        });
      }
      /**
       * Compress data.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _compress(data, fin, callback) {
        const endpoint = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._deflate = zlib.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits
          });
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          this._deflate.on("data", deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
          if (!this._deflate) {
            return;
          }
          let data2 = bufferUtil.concat(
            this._deflate[kBuffers],
            this._deflate[kTotalLength]
          );
          if (fin) {
            data2 = new FastBuffer(data2.buffer, data2.byteOffset, data2.length - 4);
          }
          this._deflate[kCallback] = null;
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._deflate.reset();
          }
          callback(null, data2);
        });
      }
    };
    module2.exports = PerMessageDeflate2;
    function deflateOnData(chunk) {
      this[kBuffers].push(chunk);
      this[kTotalLength] += chunk.length;
    }
    function inflateOnData(chunk) {
      this[kTotalLength] += chunk.length;
      if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
      }
      this[kError] = new RangeError("Max payload size exceeded");
      this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
      this[kError][kStatusCode] = 1009;
      this.removeListener("data", inflateOnData);
      this.reset();
    }
    function inflateOnError(err) {
      this[kPerMessageDeflate]._inflate = null;
      if (this[kError]) {
        this[kCallback](this[kError]);
        return;
      }
      err[kStatusCode] = 1007;
      this[kCallback](err);
    }
  }
});

// node_modules/ws/lib/validation.js
var require_validation = __commonJS({
  "node_modules/ws/lib/validation.js"(exports2, module2) {
    "use strict";
    var { isUtf8 } = require("buffer");
    var { hasBlob } = require_constants();
    var tokenChars = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 0 - 15
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 16 - 31
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      // 32 - 47
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      // 48 - 63
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 64 - 79
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      // 80 - 95
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 96 - 111
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0
      // 112 - 127
    ];
    function isValidStatusCode(code) {
      return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
    }
    function _isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || // Overlong
          buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || // Overlong
          buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    function isBlob(value) {
      return hasBlob && typeof value === "object" && typeof value.arrayBuffer === "function" && typeof value.type === "string" && typeof value.stream === "function" && (value[Symbol.toStringTag] === "Blob" || value[Symbol.toStringTag] === "File");
    }
    module2.exports = {
      isBlob,
      isValidStatusCode,
      isValidUTF8: _isValidUTF8,
      tokenChars
    };
    if (isUtf8) {
      module2.exports.isValidUTF8 = function(buf) {
        return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
      };
    } else if (!process.env.WS_NO_UTF_8_VALIDATE) {
      try {
        const isValidUTF8 = require("utf-8-validate");
        module2.exports.isValidUTF8 = function(buf) {
          return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
        };
      } catch (e) {
      }
    }
  }
});

// node_modules/ws/lib/receiver.js
var require_receiver = __commonJS({
  "node_modules/ws/lib/receiver.js"(exports2, module2) {
    "use strict";
    var { Writable } = require("stream");
    var PerMessageDeflate2 = require_permessage_deflate();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      kStatusCode,
      kWebSocket
    } = require_constants();
    var { concat, toArrayBuffer, unmask } = require_buffer_util();
    var { isValidStatusCode, isValidUTF8 } = require_validation();
    var FastBuffer = Buffer[Symbol.species];
    var GET_INFO = 0;
    var GET_PAYLOAD_LENGTH_16 = 1;
    var GET_PAYLOAD_LENGTH_64 = 2;
    var GET_MASK = 3;
    var GET_DATA = 4;
    var INFLATING = 5;
    var DEFER_EVENT = 6;
    var Receiver2 = class extends Writable {
      /**
       * Creates a Receiver instance.
       *
       * @param {Object} [options] Options object
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {String} [options.binaryType=nodebuffer] The type for binary data
       * @param {Object} [options.extensions] An object containing the negotiated
       *     extensions
       * @param {Boolean} [options.isServer=false] Specifies whether to operate in
       *     client or server mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       */
      constructor(options = {}) {
        super();
        this._allowSynchronousEvents = options.allowSynchronousEvents !== void 0 ? options.allowSynchronousEvents : true;
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = void 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];
        this._errored = false;
        this._loop = false;
        this._state = GET_INFO;
      }
      /**
       * Implements `Writable.prototype._write()`.
       *
       * @param {Buffer} chunk The chunk of data to write
       * @param {String} encoding The character encoding of `chunk`
       * @param {Function} cb Callback
       * @private
       */
      _write(chunk, encoding, cb) {
        if (this._opcode === 8 && this._state == GET_INFO) return cb();
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
      }
      /**
       * Consumes `n` bytes from the buffered data.
       *
       * @param {Number} n The number of bytes to consume
       * @return {Buffer} The consumed bytes
       * @private
       */
      consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length) return this._buffers.shift();
        if (n < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = new FastBuffer(
            buf.buffer,
            buf.byteOffset + n,
            buf.length - n
          );
          return new FastBuffer(buf.buffer, buf.byteOffset, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
          const buf = this._buffers[0];
          const offset = dst.length - n;
          if (n >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
            this._buffers[0] = new FastBuffer(
              buf.buffer,
              buf.byteOffset + n,
              buf.length - n
            );
          }
          n -= buf.length;
        } while (n > 0);
        return dst;
      }
      /**
       * Starts the parsing loop.
       *
       * @param {Function} cb Callback
       * @private
       */
      startLoop(cb) {
        this._loop = true;
        do {
          switch (this._state) {
            case GET_INFO:
              this.getInfo(cb);
              break;
            case GET_PAYLOAD_LENGTH_16:
              this.getPayloadLength16(cb);
              break;
            case GET_PAYLOAD_LENGTH_64:
              this.getPayloadLength64(cb);
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              this.getData(cb);
              break;
            case INFLATING:
            case DEFER_EVENT:
              this._loop = false;
              return;
          }
        } while (this._loop);
        if (!this._errored) cb();
      }
      /**
       * Reads the first two bytes of a frame.
       *
       * @param {Function} cb Callback
       * @private
       */
      getInfo(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
          const error = this.createError(
            RangeError,
            "RSV2 and RSV3 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_2_3"
          );
          cb(error);
          return;
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate2.extensionName]) {
          const error = this.createError(
            RangeError,
            "RSV1 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1"
          );
          cb(error);
          return;
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (!this._fragmented) {
            const error = this.createError(
              RangeError,
              "invalid opcode 0",
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            const error = this.createError(
              RangeError,
              `invalid opcode ${this._opcode}`,
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            const error = this.createError(
              RangeError,
              "FIN must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_FIN"
            );
            cb(error);
            return;
          }
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
            const error = this.createError(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              true,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
            );
            cb(error);
            return;
          }
        } else {
          const error = this.createError(
            RangeError,
            `invalid opcode ${this._opcode}`,
            true,
            1002,
            "WS_ERR_INVALID_OPCODE"
          );
          cb(error);
          return;
        }
        if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._isServer) {
          if (!this._masked) {
            const error = this.createError(
              RangeError,
              "MASK must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_MASK"
            );
            cb(error);
            return;
          }
        } else if (this._masked) {
          const error = this.createError(
            RangeError,
            "MASK must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_MASK"
          );
          cb(error);
          return;
        }
        if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
        else this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+16).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength16(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+64).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength64(cb) {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
          const error = this.createError(
            RangeError,
            "Unsupported WebSocket frame: payload length > 2^53 - 1",
            false,
            1009,
            "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
          );
          cb(error);
          return;
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        this.haveLength(cb);
      }
      /**
       * Payload length has been read.
       *
       * @param {Function} cb Callback
       * @private
       */
      haveLength(cb) {
        if (this._payloadLength && this._opcode < 8) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            const error = this.createError(
              RangeError,
              "Max payload size exceeded",
              false,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            );
            cb(error);
            return;
          }
        }
        if (this._masked) this._state = GET_MASK;
        else this._state = GET_DATA;
      }
      /**
       * Reads mask bytes.
       *
       * @private
       */
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
      }
      /**
       * Reads data bytes.
       *
       * @param {Function} cb Callback
       * @private
       */
      getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }
          data = this.consume(this._payloadLength);
          if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
            unmask(data, this._mask);
          }
        }
        if (this._opcode > 7) {
          this.controlMessage(data, cb);
          return;
        }
        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }
        if (data.length) {
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }
        this.dataMessage(cb);
      }
      /**
       * Decompresses data.
       *
       * @param {Buffer} data Compressed data
       * @param {Function} cb Callback
       * @private
       */
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err) return cb(err);
          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              const error = this.createError(
                RangeError,
                "Max payload size exceeded",
                false,
                1009,
                "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
              );
              cb(error);
              return;
            }
            this._fragments.push(buf);
          }
          this.dataMessage(cb);
          if (this._state === GET_INFO) this.startLoop(cb);
        });
      }
      /**
       * Handles a data message.
       *
       * @param {Function} cb Callback
       * @private
       */
      dataMessage(cb) {
        if (!this._fin) {
          this._state = GET_INFO;
          return;
        }
        const messageLength = this._messageLength;
        const fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._fragments = [];
        if (this._opcode === 2) {
          let data;
          if (this._binaryType === "nodebuffer") {
            data = concat(fragments, messageLength);
          } else if (this._binaryType === "arraybuffer") {
            data = toArrayBuffer(concat(fragments, messageLength));
          } else if (this._binaryType === "blob") {
            data = new Blob(fragments);
          } else {
            data = fragments;
          }
          if (this._allowSynchronousEvents) {
            this.emit("message", data, true);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", data, true);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        } else {
          const buf = concat(fragments, messageLength);
          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            const error = this.createError(
              Error,
              "invalid UTF-8 sequence",
              true,
              1007,
              "WS_ERR_INVALID_UTF8"
            );
            cb(error);
            return;
          }
          if (this._state === INFLATING || this._allowSynchronousEvents) {
            this.emit("message", buf, false);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", buf, false);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        }
      }
      /**
       * Handles a control message.
       *
       * @param {Buffer} data Data to handle
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      controlMessage(data, cb) {
        if (this._opcode === 8) {
          if (data.length === 0) {
            this._loop = false;
            this.emit("conclude", 1005, EMPTY_BUFFER);
            this.end();
          } else {
            const code = data.readUInt16BE(0);
            if (!isValidStatusCode(code)) {
              const error = this.createError(
                RangeError,
                `invalid status code ${code}`,
                true,
                1002,
                "WS_ERR_INVALID_CLOSE_CODE"
              );
              cb(error);
              return;
            }
            const buf = new FastBuffer(
              data.buffer,
              data.byteOffset + 2,
              data.length - 2
            );
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              const error = this.createError(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
              cb(error);
              return;
            }
            this._loop = false;
            this.emit("conclude", code, buf);
            this.end();
          }
          this._state = GET_INFO;
          return;
        }
        if (this._allowSynchronousEvents) {
          this.emit(this._opcode === 9 ? "ping" : "pong", data);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit(this._opcode === 9 ? "ping" : "pong", data);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      }
      /**
       * Builds an error object.
       *
       * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
       * @param {String} message The error message
       * @param {Boolean} prefix Specifies whether or not to add a default prefix to
       *     `message`
       * @param {Number} statusCode The status code
       * @param {String} errorCode The exposed error code
       * @return {(Error|RangeError)} The error
       * @private
       */
      createError(ErrorCtor, message, prefix, statusCode, errorCode) {
        this._loop = false;
        this._errored = true;
        const err = new ErrorCtor(
          prefix ? `Invalid WebSocket frame: ${message}` : message
        );
        Error.captureStackTrace(err, this.createError);
        err.code = errorCode;
        err[kStatusCode] = statusCode;
        return err;
      }
    };
    module2.exports = Receiver2;
  }
});

// node_modules/ws/lib/sender.js
var require_sender = __commonJS({
  "node_modules/ws/lib/sender.js"(exports2, module2) {
    "use strict";
    var { Duplex } = require("stream");
    var { randomFillSync } = require("crypto");
    var {
      types: { isUint8Array }
    } = require("util");
    var PerMessageDeflate2 = require_permessage_deflate();
    var { EMPTY_BUFFER, kWebSocket, NOOP } = require_constants();
    var { isBlob, isValidStatusCode } = require_validation();
    var { mask: applyMask, toBuffer } = require_buffer_util();
    var kByteLength = /* @__PURE__ */ Symbol("kByteLength");
    var maskBuffer = Buffer.alloc(4);
    var RANDOM_POOL_SIZE = 8 * 1024;
    var randomPool;
    var randomPoolPointer = RANDOM_POOL_SIZE;
    var DEFAULT = 0;
    var DEFLATING = 1;
    var GET_BLOB_DATA = 2;
    var Sender2 = class _Sender {
      /**
       * Creates a Sender instance.
       *
       * @param {Duplex} socket The connection socket
       * @param {Object} [extensions] An object containing the negotiated extensions
       * @param {Function} [generateMask] The function used to generate the masking
       *     key
       */
      constructor(socket, extensions, generateMask) {
        this._extensions = extensions || {};
        if (generateMask) {
          this._generateMask = generateMask;
          this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._queue = [];
        this._state = DEFAULT;
        this.onerror = NOOP;
        this[kWebSocket] = void 0;
      }
      /**
       * Frames a piece of data according to the HyBi WebSocket protocol.
       *
       * @param {(Buffer|String)} data The data to frame
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @return {(Buffer|String)[]} The framed data
       * @public
       */
      static frame(data, options) {
        let mask;
        let merge = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
          mask = options.maskBuffer || maskBuffer;
          if (options.generateMask) {
            options.generateMask(mask);
          } else {
            if (randomPoolPointer === RANDOM_POOL_SIZE) {
              if (randomPool === void 0) {
                randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
              }
              randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
              randomPoolPointer = 0;
            }
            mask[0] = randomPool[randomPoolPointer++];
            mask[1] = randomPool[randomPoolPointer++];
            mask[2] = randomPool[randomPoolPointer++];
            mask[3] = randomPool[randomPoolPointer++];
          }
          skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
          offset = 6;
        }
        let dataLength;
        if (typeof data === "string") {
          if ((!options.mask || skipMasking) && options[kByteLength] !== void 0) {
            dataLength = options[kByteLength];
          } else {
            data = Buffer.from(data);
            dataLength = data.length;
          }
        } else {
          dataLength = data.length;
          merge = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (dataLength > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 128 : options.opcode;
        if (options.rsv1) target[0] |= 64;
        target[1] = payloadLength;
        if (payloadLength === 126) {
          target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
          target[2] = target[3] = 0;
          target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask) return [target, data];
        target[1] |= 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking) return [target, data];
        if (merge) {
          applyMask(data, mask, target, offset, dataLength);
          return [target];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [target, data];
      }
      /**
       * Sends a close message to the other peer.
       *
       * @param {Number} [code] The status code component of the body
       * @param {(String|Buffer)} [data] The message component of the body
       * @param {Boolean} [mask=false] Specifies whether or not to mask the message
       * @param {Function} [cb] Callback
       * @public
       */
      close(code, data, mask, cb) {
        let buf;
        if (code === void 0) {
          buf = EMPTY_BUFFER;
        } else if (typeof code !== "number" || !isValidStatusCode(code)) {
          throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || !data.length) {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          const length = Buffer.byteLength(data);
          if (length > 123) {
            throw new RangeError("The message must not be greater than 123 bytes");
          }
          buf = Buffer.allocUnsafe(2 + length);
          buf.writeUInt16BE(code, 0);
          if (typeof data === "string") {
            buf.write(data, 2);
          } else if (isUint8Array(data)) {
            buf.set(data, 2);
          } else {
            throw new TypeError("Second argument must be a string or a Uint8Array");
          }
        }
        const options = {
          [kByteLength]: buf.length,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: false,
          rsv1: false
        };
        if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, buf, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(buf, options), cb);
        }
      }
      /**
       * Sends a ping message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      ping(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a pong message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      pong(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a data message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Object} options Options object
       * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
       *     or text
       * @param {Boolean} [options.compress=false] Specifies whether or not to
       *     compress `data`
       * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Function} [cb] Callback
       * @public
       */
      send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (this._firstFragment) {
          this._firstFragment = false;
          if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
            rsv1 = byteLength >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }
        if (options.fin) this._firstFragment = true;
        const opts = {
          [kByteLength]: byteLength,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
          } else {
            this.getBlobData(data, this._compress, opts, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, this._compress, opts, cb]);
        } else {
          this.dispatch(data, this._compress, opts, cb);
        }
      }
      /**
       * Gets the contents of a blob as binary data.
       *
       * @param {Blob} blob The blob
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     the data
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      getBlobData(blob, compress, options, cb) {
        this._bufferedBytes += options[kByteLength];
        this._state = GET_BLOB_DATA;
        blob.arrayBuffer().then((arrayBuffer) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while the blob was being read"
            );
            process.nextTick(callCallbacks, this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          const data = toBuffer(arrayBuffer);
          if (!compress) {
            this._state = DEFAULT;
            this.sendFrame(_Sender.frame(data, options), cb);
            this.dequeue();
          } else {
            this.dispatch(data, compress, options, cb);
          }
        }).catch((err) => {
          process.nextTick(onError, this, err, cb);
        });
      }
      /**
       * Dispatches a message.
       *
       * @param {(Buffer|String)} data The message to send
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     `data`
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(_Sender.frame(data, options), cb);
          return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._state = DEFLATING;
        perMessageDeflate.compress(data, options.fin, (_, buf) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while data was being compressed"
            );
            callCallbacks(this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          this._state = DEFAULT;
          options.readOnly = false;
          this.sendFrame(_Sender.frame(buf, options), cb);
          this.dequeue();
        });
      }
      /**
       * Executes queued send operations.
       *
       * @private
       */
      dequeue() {
        while (this._state === DEFAULT && this._queue.length) {
          const params = this._queue.shift();
          this._bufferedBytes -= params[3][kByteLength];
          Reflect.apply(params[0], this, params.slice(1));
        }
      }
      /**
       * Enqueues a send operation.
       *
       * @param {Array} params Send operation parameters.
       * @private
       */
      enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
      }
      /**
       * Sends a frame.
       *
       * @param {(Buffer | String)[]} list The frame to send
       * @param {Function} [cb] Callback
       * @private
       */
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.cork();
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
          this._socket.uncork();
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };
    module2.exports = Sender2;
    function callCallbacks(sender, err, cb) {
      if (typeof cb === "function") cb(err);
      for (let i = 0; i < sender._queue.length; i++) {
        const params = sender._queue[i];
        const callback = params[params.length - 1];
        if (typeof callback === "function") callback(err);
      }
    }
    function onError(sender, err, cb) {
      callCallbacks(sender, err, cb);
      sender.onerror(err);
    }
  }
});

// node_modules/ws/lib/event-target.js
var require_event_target = __commonJS({
  "node_modules/ws/lib/event-target.js"(exports2, module2) {
    "use strict";
    var { kForOnEventAttribute, kListener } = require_constants();
    var kCode = /* @__PURE__ */ Symbol("kCode");
    var kData = /* @__PURE__ */ Symbol("kData");
    var kError = /* @__PURE__ */ Symbol("kError");
    var kMessage = /* @__PURE__ */ Symbol("kMessage");
    var kReason = /* @__PURE__ */ Symbol("kReason");
    var kTarget = /* @__PURE__ */ Symbol("kTarget");
    var kType = /* @__PURE__ */ Symbol("kType");
    var kWasClean = /* @__PURE__ */ Symbol("kWasClean");
    var Event = class {
      /**
       * Create a new `Event`.
       *
       * @param {String} type The name of the event
       * @throws {TypeError} If the `type` argument is not specified
       */
      constructor(type) {
        this[kTarget] = null;
        this[kType] = type;
      }
      /**
       * @type {*}
       */
      get target() {
        return this[kTarget];
      }
      /**
       * @type {String}
       */
      get type() {
        return this[kType];
      }
    };
    Object.defineProperty(Event.prototype, "target", { enumerable: true });
    Object.defineProperty(Event.prototype, "type", { enumerable: true });
    var CloseEvent = class extends Event {
      /**
       * Create a new `CloseEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {Number} [options.code=0] The status code explaining why the
       *     connection was closed
       * @param {String} [options.reason=''] A human-readable string explaining why
       *     the connection was closed
       * @param {Boolean} [options.wasClean=false] Indicates whether or not the
       *     connection was cleanly closed
       */
      constructor(type, options = {}) {
        super(type);
        this[kCode] = options.code === void 0 ? 0 : options.code;
        this[kReason] = options.reason === void 0 ? "" : options.reason;
        this[kWasClean] = options.wasClean === void 0 ? false : options.wasClean;
      }
      /**
       * @type {Number}
       */
      get code() {
        return this[kCode];
      }
      /**
       * @type {String}
       */
      get reason() {
        return this[kReason];
      }
      /**
       * @type {Boolean}
       */
      get wasClean() {
        return this[kWasClean];
      }
    };
    Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
    var ErrorEvent = class extends Event {
      /**
       * Create a new `ErrorEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.error=null] The error that generated this event
       * @param {String} [options.message=''] The error message
       */
      constructor(type, options = {}) {
        super(type);
        this[kError] = options.error === void 0 ? null : options.error;
        this[kMessage] = options.message === void 0 ? "" : options.message;
      }
      /**
       * @type {*}
       */
      get error() {
        return this[kError];
      }
      /**
       * @type {String}
       */
      get message() {
        return this[kMessage];
      }
    };
    Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
    Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
    var MessageEvent = class extends Event {
      /**
       * Create a new `MessageEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.data=null] The message content
       */
      constructor(type, options = {}) {
        super(type);
        this[kData] = options.data === void 0 ? null : options.data;
      }
      /**
       * @type {*}
       */
      get data() {
        return this[kData];
      }
    };
    Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
    var EventTarget = {
      /**
       * Register an event listener.
       *
       * @param {String} type A string representing the event type to listen for
       * @param {(Function|Object)} handler The listener to add
       * @param {Object} [options] An options object specifies characteristics about
       *     the event listener
       * @param {Boolean} [options.once=false] A `Boolean` indicating that the
       *     listener should be invoked at most once after being added. If `true`,
       *     the listener would be automatically removed when invoked.
       * @public
       */
      addEventListener(type, handler, options = {}) {
        for (const listener of this.listeners(type)) {
          if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            return;
          }
        }
        let wrapper;
        if (type === "message") {
          wrapper = function onMessage(data, isBinary) {
            const event = new MessageEvent("message", {
              data: isBinary ? data : data.toString()
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "close") {
          wrapper = function onClose(code, message) {
            const event = new CloseEvent("close", {
              code,
              reason: message.toString(),
              wasClean: this._closeFrameReceived && this._closeFrameSent
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "error") {
          wrapper = function onError(error) {
            const event = new ErrorEvent("error", {
              error,
              message: error.message
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "open") {
          wrapper = function onOpen() {
            const event = new Event("open");
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else {
          return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options.once) {
          this.once(type, wrapper);
        } else {
          this.on(type, wrapper);
        }
      },
      /**
       * Remove an event listener.
       *
       * @param {String} type A string representing the event type to remove
       * @param {(Function|Object)} handler The listener to remove
       * @public
       */
      removeEventListener(type, handler) {
        for (const listener of this.listeners(type)) {
          if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            this.removeListener(type, listener);
            break;
          }
        }
      }
    };
    module2.exports = {
      CloseEvent,
      ErrorEvent,
      Event,
      EventTarget,
      MessageEvent
    };
    function callListener(listener, thisArg, event) {
      if (typeof listener === "object" && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
      } else {
        listener.call(thisArg, event);
      }
    }
  }
});

// node_modules/ws/lib/extension.js
var require_extension = __commonJS({
  "node_modules/ws/lib/extension.js"(exports2, module2) {
    "use strict";
    var { tokenChars } = require_validation();
    function push(dest, name, elem) {
      if (dest[name] === void 0) dest[name] = [elem];
      else dest[name].push(elem);
    }
    function parse(header) {
      const offers = /* @__PURE__ */ Object.create(null);
      let params = /* @__PURE__ */ Object.create(null);
      let mustUnescape = false;
      let isEscaping = false;
      let inQuotes = false;
      let extensionName;
      let paramName;
      let start = -1;
      let code = -1;
      let end = -1;
      let i = 0;
      for (; i < header.length; i++) {
        code = header.charCodeAt(i);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (i !== 0 && (code === 32 || code === 9)) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            const name = header.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = /* @__PURE__ */ Object.create(null);
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            push(params, header.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1) start = i;
            else if (!mustUnescape) mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1) start = i;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            let value = header.slice(start, end);
            if (mustUnescape) {
              value = value.replace(/\\/g, "");
              mustUnescape = false;
            }
            push(params, paramName, value);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            paramName = void 0;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }
      if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1) end = i;
      const token = header.slice(start, end);
      if (extensionName === void 0) {
        push(offers, token, params);
      } else {
        if (paramName === void 0) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ""));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }
      return offers;
    }
    function format(extensions) {
      return Object.keys(extensions).map((extension2) => {
        let configurations = extensions[extension2];
        if (!Array.isArray(configurations)) configurations = [configurations];
        return configurations.map((params) => {
          return [extension2].concat(
            Object.keys(params).map((k) => {
              let values = params[k];
              if (!Array.isArray(values)) values = [values];
              return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
            })
          ).join("; ");
        }).join(", ");
      }).join(", ");
    }
    module2.exports = { format, parse };
  }
});

// node_modules/ws/lib/websocket.js
var require_websocket = __commonJS({
  "node_modules/ws/lib/websocket.js"(exports2, module2) {
    "use strict";
    var EventEmitter2 = require("events");
    var https = require("https");
    var http = require("http");
    var net = require("net");
    var tls = require("tls");
    var { randomBytes, createHash } = require("crypto");
    var { Duplex, Readable } = require("stream");
    var { URL: URL2 } = require("url");
    var PerMessageDeflate2 = require_permessage_deflate();
    var Receiver2 = require_receiver();
    var Sender2 = require_sender();
    var { isBlob } = require_validation();
    var {
      BINARY_TYPES,
      CLOSE_TIMEOUT,
      EMPTY_BUFFER,
      GUID,
      kForOnEventAttribute,
      kListener,
      kStatusCode,
      kWebSocket,
      NOOP
    } = require_constants();
    var {
      EventTarget: { addEventListener, removeEventListener }
    } = require_event_target();
    var { format, parse } = require_extension();
    var { toBuffer } = require_buffer_util();
    var kAborted = /* @__PURE__ */ Symbol("kAborted");
    var protocolVersions = [8, 13];
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    var WebSocket2 = class _WebSocket extends EventEmitter2 {
      /**
       * Create a new `WebSocket`.
       *
       * @param {(String|URL)} address The URL to which to connect
       * @param {(String|String[])} [protocols] The subprotocols
       * @param {Object} [options] Connection options
       */
      constructor(address, protocols, options) {
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._errorEmitted = false;
        this._extensions = {};
        this._paused = false;
        this._protocol = "";
        this._readyState = _WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
          this._bufferedAmount = 0;
          this._isServer = false;
          this._redirects = 0;
          if (protocols === void 0) {
            protocols = [];
          } else if (!Array.isArray(protocols)) {
            if (typeof protocols === "object" && protocols !== null) {
              options = protocols;
              protocols = [];
            } else {
              protocols = [protocols];
            }
          }
          initAsClient(this, address, protocols, options);
        } else {
          this._autoPong = options.autoPong;
          this._closeTimeout = options.closeTimeout;
          this._isServer = true;
        }
      }
      /**
       * For historical reasons, the custom "nodebuffer" type is used by the default
       * instead of "blob".
       *
       * @type {String}
       */
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(type) {
        if (!BINARY_TYPES.includes(type)) return;
        this._binaryType = type;
        if (this._receiver) this._receiver._binaryType = type;
      }
      /**
       * @type {Number}
       */
      get bufferedAmount() {
        if (!this._socket) return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
      }
      /**
       * @type {String}
       */
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      /**
       * @type {Boolean}
       */
      get isPaused() {
        return this._paused;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onclose() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onerror() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onopen() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onmessage() {
        return null;
      }
      /**
       * @type {String}
       */
      get protocol() {
        return this._protocol;
      }
      /**
       * @type {Number}
       */
      get readyState() {
        return this._readyState;
      }
      /**
       * @type {String}
       */
      get url() {
        return this._url;
      }
      /**
       * Set up the socket and the internal resources.
       *
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Object} options Options object
       * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Number} [options.maxPayload=0] The maximum allowed message size
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @private
       */
      setSocket(socket, head, options) {
        const receiver = new Receiver2({
          allowSynchronousEvents: options.allowSynchronousEvents,
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxPayload: options.maxPayload,
          skipUTF8Validation: options.skipUTF8Validation
        });
        const sender = new Sender2(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._sender = sender;
        this._socket = socket;
        receiver[kWebSocket] = this;
        sender[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        sender.onerror = senderOnError;
        if (socket.setTimeout) socket.setTimeout(0);
        if (socket.setNoDelay) socket.setNoDelay();
        if (head.length > 0) socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this._readyState = _WebSocket.OPEN;
        this.emit("open");
      }
      /**
       * Emit the `'close'` event.
       *
       * @private
       */
      emitClose() {
        if (!this._socket) {
          this._readyState = _WebSocket.CLOSED;
          this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        if (this._extensions[PerMessageDeflate2.extensionName]) {
          this._extensions[PerMessageDeflate2.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = _WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
      }
      /**
       * Start a closing handshake.
       *
       *          +----------+   +-----------+   +----------+
       *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
       *    |     +----------+   +-----------+   +----------+     |
       *          +----------+   +-----------+         |
       * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
       *          +----------+   +-----------+   |
       *    |           |                        |   +---+        |
       *                +------------------------+-->|fin| - - - -
       *    |         +---+                      |   +---+
       *     - - - - -|fin|<---------------------+
       *              +---+
       *
       * @param {Number} [code] Status code explaining why the connection is closing
       * @param {(String|Buffer)} [data] The reason why the connection is
       *     closing
       * @public
       */
      close(code, data) {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this.readyState === _WebSocket.CLOSING) {
          if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
            this._socket.end();
          }
          return;
        }
        this._readyState = _WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err) => {
          if (err) return;
          this._closeFrameSent = true;
          if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
            this._socket.end();
          }
        });
        setCloseTimer(this);
      }
      /**
       * Pause the socket.
       *
       * @public
       */
      pause() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = true;
        this._socket.pause();
      }
      /**
       * Send a ping.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the ping is sent
       * @public
       */
      ping(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Send a pong.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the pong is sent
       * @public
       */
      pong(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Resume the socket.
       *
       * @public
       */
      resume() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain) this._socket.resume();
      }
      /**
       * Send a data message.
       *
       * @param {*} data The message to send
       * @param {Object} [options] Options object
       * @param {Boolean} [options.binary] Specifies whether `data` is binary or
       *     text
       * @param {Boolean} [options.compress] Specifies whether or not to compress
       *     `data`
       * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when data is written out
       * @public
       */
      send(data, options, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        const opts = {
          binary: typeof data !== "string",
          mask: !this._isServer,
          compress: true,
          fin: true,
          ...options
        };
        if (!this._extensions[PerMessageDeflate2.extensionName]) {
          opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
      }
      /**
       * Forcibly close the connection.
       *
       * @public
       */
      terminate() {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this._socket) {
          this._readyState = _WebSocket.CLOSING;
          this._socket.destroy();
        }
      }
    };
    Object.defineProperty(WebSocket2, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2.prototype, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2.prototype, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    [
      "binaryType",
      "bufferedAmount",
      "extensions",
      "isPaused",
      "protocol",
      "readyState",
      "url"
    ].forEach((property) => {
      Object.defineProperty(WebSocket2.prototype, property, { enumerable: true });
    });
    ["open", "error", "close", "message"].forEach((method) => {
      Object.defineProperty(WebSocket2.prototype, `on${method}`, {
        enumerable: true,
        get() {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) return listener[kListener];
          }
          return null;
        },
        set(handler) {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) {
              this.removeListener(method, listener);
              break;
            }
          }
          if (typeof handler !== "function") return;
          this.addEventListener(method, handler, {
            [kForOnEventAttribute]: true
          });
        }
      });
    });
    WebSocket2.prototype.addEventListener = addEventListener;
    WebSocket2.prototype.removeEventListener = removeEventListener;
    module2.exports = WebSocket2;
    function initAsClient(websocket, address, protocols, options) {
      const opts = {
        allowSynchronousEvents: true,
        autoPong: true,
        closeTimeout: CLOSE_TIMEOUT,
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: "GET",
        host: void 0,
        path: void 0,
        port: void 0
      };
      websocket._autoPong = opts.autoPong;
      websocket._closeTimeout = opts.closeTimeout;
      if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(
          `Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`
        );
      }
      let parsedUrl;
      if (address instanceof URL2) {
        parsedUrl = address;
      } else {
        try {
          parsedUrl = new URL2(address);
        } catch {
          throw new SyntaxError(`Invalid URL: ${address}`);
        }
      }
      if (parsedUrl.protocol === "http:") {
        parsedUrl.protocol = "ws:";
      } else if (parsedUrl.protocol === "https:") {
        parsedUrl.protocol = "wss:";
      }
      websocket._url = parsedUrl.href;
      const isSecure = parsedUrl.protocol === "wss:";
      const isIpcUrl = parsedUrl.protocol === "ws+unix:";
      let invalidUrlMessage;
      if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
        invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`;
      } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
      } else if (parsedUrl.hash) {
        invalidUrlMessage = "The URL contains a fragment identifier";
      }
      if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
          throw err;
        } else {
          emitErrorAndClose(websocket, err);
          return;
        }
      }
      const defaultPort = isSecure ? 443 : 80;
      const key = randomBytes(16).toString("base64");
      const request = isSecure ? https.request : http.request;
      const protocolSet = /* @__PURE__ */ new Set();
      let perMessageDeflate;
      opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
      opts.defaultPort = opts.defaultPort || defaultPort;
      opts.port = parsedUrl.port || defaultPort;
      opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
      opts.headers = {
        ...opts.headers,
        "Sec-WebSocket-Version": opts.protocolVersion,
        "Sec-WebSocket-Key": key,
        Connection: "Upgrade",
        Upgrade: "websocket"
      };
      opts.path = parsedUrl.pathname + parsedUrl.search;
      opts.timeout = opts.handshakeTimeout;
      if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate2({
          ...opts.perMessageDeflate,
          isServer: false,
          maxPayload: opts.maxPayload
        });
        opts.headers["Sec-WebSocket-Extensions"] = format({
          [PerMessageDeflate2.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols.length) {
        for (const protocol of protocols) {
          if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
            throw new SyntaxError(
              "An invalid or duplicated subprotocol was specified"
            );
          }
          protocolSet.add(protocol);
        }
        opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
      }
      if (opts.origin) {
        if (opts.protocolVersion < 13) {
          opts.headers["Sec-WebSocket-Origin"] = opts.origin;
        } else {
          opts.headers.Origin = opts.origin;
        }
      }
      if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
      }
      if (isIpcUrl) {
        const parts = opts.path.split(":");
        opts.socketPath = parts[0];
        opts.path = parts[1];
      }
      let req;
      if (opts.followRedirects) {
        if (websocket._redirects === 0) {
          websocket._originalIpc = isIpcUrl;
          websocket._originalSecure = isSecure;
          websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
          const headers = options && options.headers;
          options = { ...options, headers: {} };
          if (headers) {
            for (const [key2, value] of Object.entries(headers)) {
              options.headers[key2.toLowerCase()] = value;
            }
          }
        } else if (websocket.listenerCount("redirect") === 0) {
          const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
          if (!isSameHost || websocket._originalSecure && !isSecure) {
            delete opts.headers.authorization;
            delete opts.headers.cookie;
            if (!isSameHost) delete opts.headers.host;
            opts.auth = void 0;
          }
        }
        if (opts.auth && !options.headers.authorization) {
          options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
        }
        req = websocket._req = request(opts);
        if (websocket._redirects) {
          websocket.emit("redirect", websocket.url, req);
        }
      } else {
        req = websocket._req = request(opts);
      }
      if (opts.timeout) {
        req.on("timeout", () => {
          abortHandshake(websocket, req, "Opening handshake has timed out");
        });
      }
      req.on("error", (err) => {
        if (req === null || req[kAborted]) return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
      });
      req.on("response", (res) => {
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
          if (++websocket._redirects > opts.maxRedirects) {
            abortHandshake(websocket, req, "Maximum redirects exceeded");
            return;
          }
          req.abort();
          let addr;
          try {
            addr = new URL2(location, address);
          } catch (e) {
            const err = new SyntaxError(`Invalid URL: ${location}`);
            emitErrorAndClose(websocket, err);
            return;
          }
          initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit("unexpected-response", req, res)) {
          abortHandshake(
            websocket,
            req,
            `Unexpected server response: ${res.statusCode}`
          );
        }
      });
      req.on("upgrade", (res, socket, head) => {
        websocket.emit("upgrade", res);
        if (websocket.readyState !== WebSocket2.CONNECTING) return;
        req = websocket._req = null;
        const upgrade = res.headers.upgrade;
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          abortHandshake(websocket, socket, "Invalid Upgrade header");
          return;
        }
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
          abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        let protError;
        if (serverProt !== void 0) {
          if (!protocolSet.size) {
            protError = "Server sent a subprotocol but none was requested";
          } else if (!protocolSet.has(serverProt)) {
            protError = "Server sent an invalid subprotocol";
          }
        } else if (protocolSet.size) {
          protError = "Server sent no subprotocol";
        }
        if (protError) {
          abortHandshake(websocket, socket, protError);
          return;
        }
        if (serverProt) websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
        if (secWebSocketExtensions !== void 0) {
          if (!perMessageDeflate) {
            const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          let extensions;
          try {
            extensions = parse(secWebSocketExtensions);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          const extensionNames = Object.keys(extensions);
          if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate2.extensionName) {
            const message = "Server indicated an extension that was not requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          try {
            perMessageDeflate.accept(extensions[PerMessageDeflate2.extensionName]);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          websocket._extensions[PerMessageDeflate2.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
          allowSynchronousEvents: opts.allowSynchronousEvents,
          generateMask: opts.generateMask,
          maxPayload: opts.maxPayload,
          skipUTF8Validation: opts.skipUTF8Validation
        });
      });
      if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
      } else {
        req.end();
      }
    }
    function emitErrorAndClose(websocket, err) {
      websocket._readyState = WebSocket2.CLOSING;
      websocket._errorEmitted = true;
      websocket.emit("error", err);
      websocket.emitClose();
    }
    function netConnect(options) {
      options.path = options.socketPath;
      return net.connect(options);
    }
    function tlsConnect(options) {
      options.path = void 0;
      if (!options.servername && options.servername !== "") {
        options.servername = net.isIP(options.host) ? "" : options.host;
      }
      return tls.connect(options);
    }
    function abortHandshake(websocket, stream, message) {
      websocket._readyState = WebSocket2.CLOSING;
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake);
      if (stream.setHeader) {
        stream[kAborted] = true;
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
          stream.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
      } else {
        stream.destroy(err);
        stream.once("error", websocket.emit.bind(websocket, "error"));
        stream.once("close", websocket.emitClose.bind(websocket));
      }
    }
    function sendAfterClose(websocket, data, cb) {
      if (data) {
        const length = isBlob(data) ? data.size : toBuffer(data).length;
        if (websocket._socket) websocket._sender._bufferedBytes += length;
        else websocket._bufferedAmount += length;
      }
      if (cb) {
        const err = new Error(
          `WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`
        );
        process.nextTick(cb, err);
      }
    }
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket];
      websocket._closeFrameReceived = true;
      websocket._closeMessage = reason;
      websocket._closeCode = code;
      if (websocket._socket[kWebSocket] === void 0) return;
      websocket._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket._socket);
      if (code === 1005) websocket.close();
      else websocket.close(code, reason);
    }
    function receiverOnDrain() {
      const websocket = this[kWebSocket];
      if (!websocket.isPaused) websocket._socket.resume();
    }
    function receiverOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket._socket[kWebSocket] !== void 0) {
        websocket._socket.removeListener("data", socketOnData);
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
      }
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function receiverOnFinish() {
      this[kWebSocket].emitClose();
    }
    function receiverOnMessage(data, isBinary) {
      this[kWebSocket].emit("message", data, isBinary);
    }
    function receiverOnPing(data) {
      const websocket = this[kWebSocket];
      if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
      websocket.emit("ping", data);
    }
    function receiverOnPong(data) {
      this[kWebSocket].emit("pong", data);
    }
    function resume(stream) {
      stream.resume();
    }
    function senderOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket.readyState === WebSocket2.CLOSED) return;
      if (websocket.readyState === WebSocket2.OPEN) {
        websocket._readyState = WebSocket2.CLOSING;
        setCloseTimer(websocket);
      }
      this._socket.end();
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function setCloseTimer(websocket) {
      websocket._closeTimer = setTimeout(
        websocket._socket.destroy.bind(websocket._socket),
        websocket._closeTimeout
      );
    }
    function socketOnClose() {
      const websocket = this[kWebSocket];
      this.removeListener("close", socketOnClose);
      this.removeListener("data", socketOnData);
      this.removeListener("end", socketOnEnd);
      websocket._readyState = WebSocket2.CLOSING;
      if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && this._readableState.length !== 0) {
        const chunk = this.read(this._readableState.length);
        websocket._receiver.write(chunk);
      }
      websocket._receiver.end();
      this[kWebSocket] = void 0;
      clearTimeout(websocket._closeTimer);
      if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
      } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
      }
    }
    function socketOnData(chunk) {
      if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
      }
    }
    function socketOnEnd() {
      const websocket = this[kWebSocket];
      websocket._readyState = WebSocket2.CLOSING;
      websocket._receiver.end();
      this.end();
    }
    function socketOnError() {
      const websocket = this[kWebSocket];
      this.removeListener("error", socketOnError);
      this.on("error", NOOP);
      if (websocket) {
        websocket._readyState = WebSocket2.CLOSING;
        this.destroy();
      }
    }
  }
});

// node_modules/ws/lib/stream.js
var require_stream = __commonJS({
  "node_modules/ws/lib/stream.js"(exports2, module2) {
    "use strict";
    var WebSocket2 = require_websocket();
    var { Duplex } = require("stream");
    function emitClose(stream) {
      stream.emit("close");
    }
    function duplexOnEnd() {
      if (!this.destroyed && this._writableState.finished) {
        this.destroy();
      }
    }
    function duplexOnError(err) {
      this.removeListener("error", duplexOnError);
      this.destroy();
      if (this.listenerCount("error") === 0) {
        this.emit("error", err);
      }
    }
    function createWebSocketStream2(ws, options) {
      let terminateOnDestroy = true;
      const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });
      ws.on("message", function message(msg, isBinary) {
        const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
        if (!duplex.push(data)) ws.pause();
      });
      ws.once("error", function error(err) {
        if (duplex.destroyed) return;
        terminateOnDestroy = false;
        duplex.destroy(err);
      });
      ws.once("close", function close() {
        if (duplex.destroyed) return;
        duplex.push(null);
      });
      duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose, duplex);
          return;
        }
        let called = false;
        ws.once("error", function error(err2) {
          called = true;
          callback(err2);
        });
        ws.once("close", function close() {
          if (!called) callback(err);
          process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy) ws.terminate();
      };
      duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._final(callback);
          });
          return;
        }
        if (ws._socket === null) return;
        if (ws._socket._writableState.finished) {
          callback();
          if (duplex._readableState.endEmitted) duplex.destroy();
        } else {
          ws._socket.once("finish", function finish() {
            callback();
          });
          ws.close();
        }
      };
      duplex._read = function() {
        if (ws.isPaused) ws.resume();
      };
      duplex._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._write(chunk, encoding, callback);
          });
          return;
        }
        ws.send(chunk, callback);
      };
      duplex.on("end", duplexOnEnd);
      duplex.on("error", duplexOnError);
      return duplex;
    }
    module2.exports = createWebSocketStream2;
  }
});

// node_modules/ws/lib/subprotocol.js
var require_subprotocol = __commonJS({
  "node_modules/ws/lib/subprotocol.js"(exports2, module2) {
    "use strict";
    var { tokenChars } = require_validation();
    function parse(header) {
      const protocols = /* @__PURE__ */ new Set();
      let start = -1;
      let end = -1;
      let i = 0;
      for (i; i < header.length; i++) {
        const code = header.charCodeAt(i);
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1) end = i;
        } else if (code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1) end = i;
          const protocol2 = header.slice(start, end);
          if (protocols.has(protocol2)) {
            throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
          }
          protocols.add(protocol2);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
      if (start === -1 || end !== -1) {
        throw new SyntaxError("Unexpected end of input");
      }
      const protocol = header.slice(start, i);
      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }
      protocols.add(protocol);
      return protocols;
    }
    module2.exports = { parse };
  }
});

// node_modules/ws/lib/websocket-server.js
var require_websocket_server = __commonJS({
  "node_modules/ws/lib/websocket-server.js"(exports2, module2) {
    "use strict";
    var EventEmitter2 = require("events");
    var http = require("http");
    var { Duplex } = require("stream");
    var { createHash } = require("crypto");
    var extension2 = require_extension();
    var PerMessageDeflate2 = require_permessage_deflate();
    var subprotocol2 = require_subprotocol();
    var WebSocket2 = require_websocket();
    var { CLOSE_TIMEOUT, GUID, kWebSocket } = require_constants();
    var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
    var RUNNING = 0;
    var CLOSING = 1;
    var CLOSED = 2;
    var WebSocketServer2 = class extends EventEmitter2 {
      /**
       * Create a `WebSocketServer` instance.
       *
       * @param {Object} options Configuration options
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Boolean} [options.autoPong=true] Specifies whether or not to
       *     automatically send a pong in response to a ping
       * @param {Number} [options.backlog=511] The maximum length of the queue of
       *     pending connections
       * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
       *     track clients
       * @param {Number} [options.closeTimeout=30000] Duration in milliseconds to
       *     wait for the closing handshake to finish after `websocket.close()` is
       *     called
       * @param {Function} [options.handleProtocols] A hook to handle protocols
       * @param {String} [options.host] The hostname where to bind the server
       * @param {Number} [options.maxPayload=104857600] The maximum allowed message
       *     size
       * @param {Boolean} [options.noServer=false] Enable no server mode
       * @param {String} [options.path] Accept only connections matching this path
       * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
       *     permessage-deflate
       * @param {Number} [options.port] The port where to bind the server
       * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
       *     server to use
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @param {Function} [options.verifyClient] A hook to reject connections
       * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
       *     class to use. It must be the `WebSocket` class or class that extends it
       * @param {Function} [callback] A listener for the `listening` event
       */
      constructor(options, callback) {
        super();
        options = {
          allowSynchronousEvents: true,
          autoPong: true,
          maxPayload: 100 * 1024 * 1024,
          skipUTF8Validation: false,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          closeTimeout: CLOSE_TIMEOUT,
          verifyClient: null,
          noServer: false,
          backlog: null,
          // use default (511 as implemented in net.js)
          server: null,
          host: null,
          path: null,
          port: null,
          WebSocket: WebSocket2,
          ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
          throw new TypeError(
            'One and only one of the "port", "server", or "noServer" options must be specified'
          );
        }
        if (options.port != null) {
          this._server = http.createServer((req, res) => {
            const body = http.STATUS_CODES[426];
            res.writeHead(426, {
              "Content-Length": body.length,
              "Content-Type": "text/plain"
            });
            res.end(body);
          });
          this._server.listen(
            options.port,
            options.host,
            options.backlog,
            callback
          );
        } else if (options.server) {
          this._server = options.server;
        }
        if (this._server) {
          const emitConnection = this.emit.bind(this, "connection");
          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, emitConnection);
            }
          });
        }
        if (options.perMessageDeflate === true) options.perMessageDeflate = {};
        if (options.clientTracking) {
          this.clients = /* @__PURE__ */ new Set();
          this._shouldEmitClose = false;
        }
        this.options = options;
        this._state = RUNNING;
      }
      /**
       * Returns the bound address, the address family name, and port of the server
       * as reported by the operating system if listening on an IP socket.
       * If the server is listening on a pipe or UNIX domain socket, the name is
       * returned as a string.
       *
       * @return {(Object|String|null)} The address of the server
       * @public
       */
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server) return null;
        return this._server.address();
      }
      /**
       * Stop the server from accepting new connections and emit the `'close'` event
       * when all existing connections are closed.
       *
       * @param {Function} [cb] A one-time listener for the `'close'` event
       * @public
       */
      close(cb) {
        if (this._state === CLOSED) {
          if (cb) {
            this.once("close", () => {
              cb(new Error("The server is not running"));
            });
          }
          process.nextTick(emitClose, this);
          return;
        }
        if (cb) this.once("close", cb);
        if (this._state === CLOSING) return;
        this._state = CLOSING;
        if (this.options.noServer || this.options.server) {
          if (this._server) {
            this._removeListeners();
            this._removeListeners = this._server = null;
          }
          if (this.clients) {
            if (!this.clients.size) {
              process.nextTick(emitClose, this);
            } else {
              this._shouldEmitClose = true;
            }
          } else {
            process.nextTick(emitClose, this);
          }
        } else {
          const server = this._server;
          this._removeListeners();
          this._removeListeners = this._server = null;
          server.close(() => {
            emitClose(this);
          });
        }
      }
      /**
       * See if a given request should be handled by this server instance.
       *
       * @param {http.IncomingMessage} req Request object to inspect
       * @return {Boolean} `true` if the request is valid, else `false`
       * @public
       */
      shouldHandle(req) {
        if (this.options.path) {
          const index = req.url.indexOf("?");
          const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
          if (pathname !== this.options.path) return false;
        }
        return true;
      }
      /**
       * Handle a HTTP Upgrade request.
       *
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @public
       */
      handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const key = req.headers["sec-websocket-key"];
        const upgrade = req.headers.upgrade;
        const version = +req.headers["sec-websocket-version"];
        if (req.method !== "GET") {
          const message = "Invalid HTTP method";
          abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
          return;
        }
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          const message = "Invalid Upgrade header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (key === void 0 || !keyRegex.test(key)) {
          const message = "Missing or invalid Sec-WebSocket-Key header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (version !== 13 && version !== 8) {
          const message = "Missing or invalid Sec-WebSocket-Version header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message, {
            "Sec-WebSocket-Version": "13, 8"
          });
          return;
        }
        if (!this.shouldHandle(req)) {
          abortHandshake(socket, 400);
          return;
        }
        const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
        let protocols = /* @__PURE__ */ new Set();
        if (secWebSocketProtocol !== void 0) {
          try {
            protocols = subprotocol2.parse(secWebSocketProtocol);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Protocol header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
        const extensions = {};
        if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
          const perMessageDeflate = new PerMessageDeflate2({
            ...this.options.perMessageDeflate,
            isServer: true,
            maxPayload: this.options.maxPayload
          });
          try {
            const offers = extension2.parse(secWebSocketExtensions);
            if (offers[PerMessageDeflate2.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate2.extensionName]);
              extensions[PerMessageDeflate2.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        if (this.options.verifyClient) {
          const info = {
            origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(req.socket.authorized || req.socket.encrypted),
            req
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(
                extensions,
                key,
                protocols,
                req,
                socket,
                head,
                cb
              );
            });
            return;
          }
          if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
      }
      /**
       * Upgrade the connection to WebSocket.
       *
       * @param {Object} extensions The accepted extensions
       * @param {String} key The value of the `Sec-WebSocket-Key` header
       * @param {Set} protocols The subprotocols
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @throws {Error} If called more than once with the same socket
       * @private
       */
      completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
        if (!socket.readable || !socket.writable) return socket.destroy();
        if (socket[kWebSocket]) {
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
          );
        }
        if (this._state > RUNNING) return abortHandshake(socket, 503);
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        const headers = [
          "HTTP/1.1 101 Switching Protocols",
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new this.options.WebSocket(null, void 0, this.options);
        if (protocols.size) {
          const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
          if (protocol) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
            ws._protocol = protocol;
          }
        }
        if (extensions[PerMessageDeflate2.extensionName]) {
          const params = extensions[PerMessageDeflate2.extensionName].params;
          const value = extension2.format({
            [PerMessageDeflate2.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value}`);
          ws._extensions = extensions;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws.setSocket(socket, head, {
          allowSynchronousEvents: this.options.allowSynchronousEvents,
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        });
        if (this.clients) {
          this.clients.add(ws);
          ws.on("close", () => {
            this.clients.delete(ws);
            if (this._shouldEmitClose && !this.clients.size) {
              process.nextTick(emitClose, this);
            }
          });
        }
        cb(ws, req);
      }
    };
    module2.exports = WebSocketServer2;
    function addListeners(server, map) {
      for (const event of Object.keys(map)) server.on(event, map[event]);
      return function removeListeners() {
        for (const event of Object.keys(map)) {
          server.removeListener(event, map[event]);
        }
      };
    }
    function emitClose(server) {
      server._state = CLOSED;
      server.emit("close");
    }
    function socketOnError() {
      this.destroy();
    }
    function abortHandshake(socket, code, message, headers) {
      message = message || http.STATUS_CODES[code];
      headers = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(message),
        ...headers
      };
      socket.once("finish", socket.destroy);
      socket.end(
        `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message
      );
    }
    function abortHandshakeOrEmitwsClientError(server, req, socket, code, message, headers) {
      if (server.listenerCount("wsClientError")) {
        const err = new Error(message);
        Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
        server.emit("wsClientError", err, socket, req);
      } else {
        abortHandshake(socket, code, message, headers);
      }
    }
  }
});

// src/cli/index.ts
var import_node_readline = __toESM(require("node:readline"));
var import_picocolors = __toESM(require_picocolors());

// node_modules/@typespec/ts-http-runtime/dist/esm/util/checkEnvironment.js
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
var isWebWorker = typeof self === "object" && typeof self?.importScripts === "function" && (self.constructor?.name === "DedicatedWorkerGlobalScope" || self.constructor?.name === "ServiceWorkerGlobalScope" || self.constructor?.name === "SharedWorkerGlobalScope");
var isDeno = typeof Deno !== "undefined" && typeof Deno.version !== "undefined" && typeof Deno.version.deno !== "undefined";
var isBun = typeof Bun !== "undefined" && typeof Bun.version !== "undefined";
var isNodeLike = typeof globalThis.process !== "undefined" && Boolean(globalThis.process.version) && Boolean(globalThis.process.versions?.node);
var isReactNative = typeof navigator !== "undefined" && navigator?.product === "ReactNative";

// node_modules/@azure/abort-controller/dist/esm/AbortError.js
var AbortError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "AbortError";
  }
};

// node_modules/@azure/core-util/dist/esm/createAbortablePromise.js
function createAbortablePromise(buildPromise, options) {
  const { cleanupBeforeAbort, abortSignal, abortErrorMsg } = options ?? {};
  return new Promise((resolve, reject) => {
    function rejectOnAbort() {
      reject(new AbortError(abortErrorMsg ?? "The operation was aborted."));
    }
    function removeListeners() {
      abortSignal?.removeEventListener("abort", onAbort);
    }
    function onAbort() {
      cleanupBeforeAbort?.();
      removeListeners();
      rejectOnAbort();
    }
    if (abortSignal?.aborted) {
      return rejectOnAbort();
    }
    try {
      buildPromise((x) => {
        removeListeners();
        resolve(x);
      }, (x) => {
        removeListeners();
        reject(x);
      });
    } catch (err) {
      reject(err);
    }
    abortSignal?.addEventListener("abort", onAbort);
  });
}

// node_modules/@azure/core-util/dist/esm/delay.js
var StandardAbortMessage = "The delay was aborted.";
function delay(timeInMs, options) {
  let token;
  const { abortSignal, abortErrorMsg } = options ?? {};
  return createAbortablePromise((resolve) => {
    token = setTimeout(resolve, timeInMs);
  }, {
    cleanupBeforeAbort: () => clearTimeout(token),
    abortSignal,
    abortErrorMsg: abortErrorMsg ?? StandardAbortMessage
  });
}

// node_modules/@azure/web-pubsub-client/dist/esm/webPubSubClient.js
var import_events = __toESM(require("events"), 1);

// node_modules/@azure/web-pubsub-client/dist/esm/errors/index.js
var SendMessageError = class extends Error {
  /**
   * Error name
   */
  name;
  /**
   * The ack id of the message
   */
  ackId;
  /**
   * The error details from the service
   */
  errorDetail;
  /**
   * Initialize a SendMessageError
   * @param message - The error message
   * @param ackMessage - The ack message
   */
  constructor(message, options) {
    super(message);
    this.name = "SendMessageError";
    this.ackId = options.ackId;
    this.errorDetail = options.errorDetail;
  }
};
var InvocationError = class extends Error {
  /**
   * The invocation id of the request.
   */
  invocationId;
  /**
   * Error details from the service if available.
   */
  errorDetail;
  constructor(message, options) {
    super(message);
    this.name = "InvocationError";
    this.invocationId = options.invocationId;
    this.errorDetail = options.errorDetail;
  }
};

// node_modules/@typespec/ts-http-runtime/dist/esm/logger/log.js
var import_node_os = require("node:os");
var import_node_util = __toESM(require("node:util"), 1);
var import_node_process = __toESM(require("node:process"), 1);
function log(message, ...args) {
  import_node_process.default.stderr.write(`${import_node_util.default.format(message, ...args)}${import_node_os.EOL}`);
}

// node_modules/@typespec/ts-http-runtime/dist/esm/logger/debug.js
var debugEnvVariable = typeof process !== "undefined" && process.env && process.env.DEBUG || void 0;
var enabledString;
var enabledNamespaces = [];
var skippedNamespaces = [];
var debuggers = [];
if (debugEnvVariable) {
  enable(debugEnvVariable);
}
var debugObj = Object.assign((namespace) => {
  return createDebugger(namespace);
}, {
  enable,
  enabled,
  disable,
  log
});
function enable(namespaces) {
  enabledString = namespaces;
  enabledNamespaces = [];
  skippedNamespaces = [];
  const namespaceList = namespaces.split(",").map((ns) => ns.trim());
  for (const ns of namespaceList) {
    if (ns.startsWith("-")) {
      skippedNamespaces.push(ns.substring(1));
    } else {
      enabledNamespaces.push(ns);
    }
  }
  for (const instance of debuggers) {
    instance.enabled = enabled(instance.namespace);
  }
}
function enabled(namespace) {
  if (namespace.endsWith("*")) {
    return true;
  }
  for (const skipped of skippedNamespaces) {
    if (namespaceMatches(namespace, skipped)) {
      return false;
    }
  }
  for (const enabledNamespace of enabledNamespaces) {
    if (namespaceMatches(namespace, enabledNamespace)) {
      return true;
    }
  }
  return false;
}
function namespaceMatches(namespace, patternToMatch) {
  if (patternToMatch.indexOf("*") === -1) {
    return namespace === patternToMatch;
  }
  let pattern = patternToMatch;
  if (patternToMatch.indexOf("**") !== -1) {
    const patternParts = [];
    let lastCharacter = "";
    for (const character of patternToMatch) {
      if (character === "*" && lastCharacter === "*") {
        continue;
      } else {
        lastCharacter = character;
        patternParts.push(character);
      }
    }
    pattern = patternParts.join("");
  }
  let namespaceIndex = 0;
  let patternIndex = 0;
  const patternLength = pattern.length;
  const namespaceLength = namespace.length;
  let lastWildcard = -1;
  let lastWildcardNamespace = -1;
  while (namespaceIndex < namespaceLength && patternIndex < patternLength) {
    if (pattern[patternIndex] === "*") {
      lastWildcard = patternIndex;
      patternIndex++;
      if (patternIndex === patternLength) {
        return true;
      }
      while (namespace[namespaceIndex] !== pattern[patternIndex]) {
        namespaceIndex++;
        if (namespaceIndex === namespaceLength) {
          return false;
        }
      }
      lastWildcardNamespace = namespaceIndex;
      namespaceIndex++;
      patternIndex++;
      continue;
    } else if (pattern[patternIndex] === namespace[namespaceIndex]) {
      patternIndex++;
      namespaceIndex++;
    } else if (lastWildcard >= 0) {
      patternIndex = lastWildcard + 1;
      namespaceIndex = lastWildcardNamespace + 1;
      if (namespaceIndex === namespaceLength) {
        return false;
      }
      while (namespace[namespaceIndex] !== pattern[patternIndex]) {
        namespaceIndex++;
        if (namespaceIndex === namespaceLength) {
          return false;
        }
      }
      lastWildcardNamespace = namespaceIndex;
      namespaceIndex++;
      patternIndex++;
      continue;
    } else {
      return false;
    }
  }
  const namespaceDone = namespaceIndex === namespace.length;
  const patternDone = patternIndex === pattern.length;
  const trailingWildCard = patternIndex === pattern.length - 1 && pattern[patternIndex] === "*";
  return namespaceDone && (patternDone || trailingWildCard);
}
function disable() {
  const result = enabledString || "";
  enable("");
  return result;
}
function createDebugger(namespace) {
  const newDebugger = Object.assign(debug, {
    enabled: enabled(namespace),
    destroy,
    log: debugObj.log,
    namespace,
    extend
  });
  function debug(...args) {
    if (!newDebugger.enabled) {
      return;
    }
    if (args.length > 0) {
      args[0] = `${namespace} ${args[0]}`;
    }
    newDebugger.log(...args);
  }
  debuggers.push(newDebugger);
  return newDebugger;
}
function destroy() {
  const index = debuggers.indexOf(this);
  if (index >= 0) {
    debuggers.splice(index, 1);
    return true;
  }
  return false;
}
function extend(namespace) {
  const newDebugger = createDebugger(`${this.namespace}:${namespace}`);
  newDebugger.log = this.log;
  return newDebugger;
}
var debug_default = debugObj;

// node_modules/@typespec/ts-http-runtime/dist/esm/logger/logger.js
var TYPESPEC_RUNTIME_LOG_LEVELS = ["verbose", "info", "warning", "error"];
var levelMap = {
  verbose: 400,
  info: 300,
  warning: 200,
  error: 100
};
function patchLogMethod(parent, child) {
  child.log = (...args) => {
    parent.log(...args);
  };
}
function isTypeSpecRuntimeLogLevel(level) {
  return TYPESPEC_RUNTIME_LOG_LEVELS.includes(level);
}
function createLoggerContext(options) {
  const registeredLoggers = /* @__PURE__ */ new Set();
  const logLevelFromEnv = typeof process !== "undefined" && process.env && process.env[options.logLevelEnvVarName] || void 0;
  let logLevel;
  const clientLogger = debug_default(options.namespace);
  clientLogger.log = (...args) => {
    debug_default.log(...args);
  };
  function contextSetLogLevel(level) {
    if (level && !isTypeSpecRuntimeLogLevel(level)) {
      throw new Error(`Unknown log level '${level}'. Acceptable values: ${TYPESPEC_RUNTIME_LOG_LEVELS.join(",")}`);
    }
    logLevel = level;
    const enabledNamespaces2 = [];
    for (const logger2 of registeredLoggers) {
      if (shouldEnable(logger2)) {
        enabledNamespaces2.push(logger2.namespace);
      }
    }
    debug_default.enable(enabledNamespaces2.join(","));
  }
  if (logLevelFromEnv) {
    if (isTypeSpecRuntimeLogLevel(logLevelFromEnv)) {
      contextSetLogLevel(logLevelFromEnv);
    } else {
      console.error(`${options.logLevelEnvVarName} set to unknown log level '${logLevelFromEnv}'; logging is not enabled. Acceptable values: ${TYPESPEC_RUNTIME_LOG_LEVELS.join(", ")}.`);
    }
  }
  function shouldEnable(logger2) {
    return Boolean(logLevel && levelMap[logger2.level] <= levelMap[logLevel]);
  }
  function createLogger(parent, level) {
    const logger2 = Object.assign(parent.extend(level), {
      level
    });
    patchLogMethod(parent, logger2);
    if (shouldEnable(logger2)) {
      const enabledNamespaces2 = debug_default.disable();
      debug_default.enable(enabledNamespaces2 + "," + logger2.namespace);
    }
    registeredLoggers.add(logger2);
    return logger2;
  }
  function contextGetLogLevel() {
    return logLevel;
  }
  function contextCreateClientLogger(namespace) {
    const clientRootLogger = clientLogger.extend(namespace);
    patchLogMethod(clientLogger, clientRootLogger);
    return {
      error: createLogger(clientRootLogger, "error"),
      warning: createLogger(clientRootLogger, "warning"),
      info: createLogger(clientRootLogger, "info"),
      verbose: createLogger(clientRootLogger, "verbose")
    };
  }
  return {
    setLogLevel: contextSetLogLevel,
    getLogLevel: contextGetLogLevel,
    createClientLogger: contextCreateClientLogger,
    logger: clientLogger
  };
}
var context = createLoggerContext({
  logLevelEnvVarName: "TYPESPEC_RUNTIME_LOG_LEVEL",
  namespace: "typeSpecRuntime"
});
var TypeSpecRuntimeLogger = context.logger;

// node_modules/@azure/logger/dist/esm/index.js
var context2 = createLoggerContext({
  logLevelEnvVarName: "AZURE_LOG_LEVEL",
  namespace: "azure"
});
var AzureLogger = context2.logger;
function createClientLogger(namespace) {
  return context2.createClientLogger(namespace);
}

// node_modules/@azure/web-pubsub-client/dist/esm/logger.js
var logger = createClientLogger("web-pubsub-client");

// node_modules/@azure/web-pubsub-client/dist/esm/protocols/jsonProtocolBase.js
var import_buffer = require("buffer");
function parseMessages(input) {
  if (typeof input !== "string") {
    throw new Error("Invalid input for JSON hub protocol. Expected a string.");
  }
  if (!input) {
    throw new Error("No input");
  }
  const parsedMessage = JSON.parse(input);
  const typedMessage = parsedMessage;
  let returnMessage;
  if (typedMessage.type === "system") {
    if (typedMessage.event === "connected") {
      returnMessage = { ...parsedMessage, kind: "connected" };
    } else if (typedMessage.event === "disconnected") {
      returnMessage = { ...parsedMessage, kind: "disconnected" };
    } else {
      return null;
    }
  } else if (typedMessage.type === "message") {
    if (typedMessage.from === "group") {
      const data = parsePayload(parsedMessage.data, parsedMessage.dataType);
      if (data === null) {
        return null;
      }
      returnMessage = { ...parsedMessage, data, kind: "groupData" };
    } else if (typedMessage.from === "server") {
      const data = parsePayload(parsedMessage.data, parsedMessage.dataType);
      if (data === null) {
        return null;
      }
      returnMessage = {
        ...parsedMessage,
        data,
        kind: "serverData"
      };
    } else {
      return null;
    }
  } else if (typedMessage.type === "ack") {
    returnMessage = { ...parsedMessage, kind: "ack" };
  } else if (typedMessage.type === "invokeResponse") {
    let data;
    if (parsedMessage.dataType != null) {
      const parsedData = parsePayload(parsedMessage.data, parsedMessage.dataType);
      if (parsedData === null) {
        return null;
      }
      data = parsedData;
    }
    returnMessage = {
      kind: "invokeResponse",
      invocationId: parsedMessage.invocationId,
      success: parsedMessage.success,
      dataType: parsedMessage.dataType,
      data,
      error: parsedMessage.error
    };
  } else if (typedMessage.type === "cancelInvocation") {
    returnMessage = {
      ...parsedMessage,
      kind: "cancelInvocation"
    };
  } else if (typedMessage.type === "pong") {
    returnMessage = { ...parsedMessage, kind: "pong" };
  } else {
    return null;
  }
  return returnMessage;
}
function writeMessage(message) {
  let data;
  switch (message.kind) {
    case "joinGroup": {
      data = { type: "joinGroup", group: message.group, ackId: message.ackId };
      break;
    }
    case "leaveGroup": {
      data = { type: "leaveGroup", group: message.group, ackId: message.ackId };
      break;
    }
    case "sendEvent": {
      data = {
        type: "event",
        event: message.event,
        ackId: message.ackId,
        dataType: message.dataType,
        data: getPayload(message.data, message.dataType)
      };
      break;
    }
    case "sendToGroup": {
      data = {
        type: "sendToGroup",
        group: message.group,
        ackId: message.ackId,
        dataType: message.dataType,
        data: getPayload(message.data, message.dataType),
        noEcho: message.noEcho
      };
      break;
    }
    case "sequenceAck": {
      data = { type: "sequenceAck", sequenceId: message.sequenceId };
      break;
    }
    case "invoke": {
      const invokePayload = {
        type: "invoke",
        invocationId: message.invocationId,
        target: message.target,
        event: message.event
      };
      if (message.dataType != null && message.data != null) {
        invokePayload.dataType = message.dataType;
        invokePayload.data = getPayload(message.data, message.dataType);
      }
      data = invokePayload;
      break;
    }
    case "invokeResponse": {
      const invokeResponse = {
        type: "invokeResponse",
        invocationId: message.invocationId,
        success: message.success,
        error: message.error
      };
      if (message.dataType != null && message.data != null) {
        invokeResponse.dataType = message.dataType;
        invokeResponse.data = getPayload(message.data, message.dataType);
      }
      data = invokeResponse;
      break;
    }
    case "cancelInvocation": {
      data = {
        type: "cancelInvocation",
        invocationId: message.invocationId
      };
      break;
    }
    case "ping": {
      data = { type: "ping" };
      break;
    }
    default: {
      throw new Error(`Unsupported type: ${message.kind}`);
    }
  }
  return JSON.stringify(data);
}
function getPayload(data, dataType) {
  switch (dataType) {
    case "text": {
      if (typeof data !== "string") {
        throw new TypeError("Message must be a string.");
      }
      return data;
    }
    case "json": {
      return data;
    }
    case "binary":
    case "protobuf": {
      if (data instanceof ArrayBuffer) {
        return import_buffer.Buffer.from(data).toString("base64");
      }
      throw new TypeError("Message must be a ArrayBuffer");
    }
  }
}
function parsePayload(data, dataType) {
  if (dataType === "text") {
    if (typeof data !== "string") {
      throw new TypeError("Message must be a string when dataType is text");
    }
    return data;
  } else if (dataType === "json") {
    return data;
  } else if (dataType === "binary" || dataType === "protobuf") {
    const buf = import_buffer.Buffer.from(data, "base64");
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  } else {
    return null;
  }
}

// node_modules/@azure/web-pubsub-client/dist/esm/protocols/webPubSubJsonProtocol.js
var WebPubSubJsonProtocolImpl = class {
  /**
   * True if the protocol supports reliable features
   */
  isReliableSubProtocol = false;
  /**
   * The name of subprotocol. Name will be used in websocket subprotocol
   */
  name = "json.webpubsub.azure.v1";
  /**
   * Creates WebPubSubMessage objects from the specified serialized representation.
   * @param input - The serialized representation
   */
  parseMessages(input) {
    return parseMessages(input);
  }
  /**
   * Write WebPubSubMessage to string
   * @param message - The message to be written
   */
  writeMessage(message) {
    return writeMessage(message);
  }
};

// node_modules/@azure/web-pubsub-client/dist/esm/protocols/webPubSubJsonReliableProtocol.js
var WebPubSubJsonReliableProtocolImpl = class {
  /**
   * True if the protocol supports reliable features
   */
  isReliableSubProtocol = true;
  /**
   * The name of subprotocol. Name will be used in websocket subprotocol
   */
  name = "json.reliable.webpubsub.azure.v1";
  /**
   * Creates WebPubSubMessage objects from the specified serialized representation.
   * @param input - The serialized representation
   */
  parseMessages(input) {
    return parseMessages(input);
  }
  /**
   * Write WebPubSubMessage to string
   * @param message - The message to be written
   */
  writeMessage(message) {
    return writeMessage(message);
  }
};

// node_modules/@azure/web-pubsub-client/dist/esm/protocols/index.js
var WebPubSubJsonProtocol = () => {
  return new WebPubSubJsonProtocolImpl();
};
var WebPubSubJsonReliableProtocol = () => {
  return new WebPubSubJsonReliableProtocolImpl();
};

// node_modules/ws/wrapper.mjs
var import_stream = __toESM(require_stream(), 1);
var import_extension = __toESM(require_extension(), 1);
var import_permessage_deflate = __toESM(require_permessage_deflate(), 1);
var import_receiver = __toESM(require_receiver(), 1);
var import_sender = __toESM(require_sender(), 1);
var import_subprotocol = __toESM(require_subprotocol(), 1);
var import_websocket = __toESM(require_websocket(), 1);
var import_websocket_server = __toESM(require_websocket_server(), 1);
var wrapper_default = import_websocket.default;

// node_modules/@azure/web-pubsub-client/dist/esm/websocket/websocketClient.js
var WebSocketClient = class {
  _socket;
  constructor(uri, protocolName) {
    this._socket = new wrapper_default(uri, protocolName);
    this._socket.binaryType = "arraybuffer";
  }
  onopen(fn) {
    this._socket.onopen = fn;
  }
  onclose(fn) {
    this._socket.onclose = (event) => fn(event.code, event.reason);
  }
  onerror(fn) {
    this._socket.onerror = (event) => fn(event.error);
  }
  onmessage(fn) {
    this._socket.onmessage = (event) => fn(event.data);
  }
  close(code, reason) {
    this._socket.close(code, reason);
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  send(data, _) {
    return new Promise((resolve, reject) => {
      this._socket.send(data, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
  isOpen() {
    return this._socket.readyState === wrapper_default.OPEN;
  }
};
var WebSocketClientFactory = class {
  create(uri, protocolName) {
    return new WebSocketClient(uri, protocolName);
  }
};

// node_modules/@azure/web-pubsub-client/dist/esm/utils/abortablePromise.js
async function abortablePromise(promise, signal) {
  if (signal.aborted) {
    throw new AbortError("The operation was aborted.");
  }
  let onAbort;
  const p = new Promise((_, reject) => {
    onAbort = () => {
      reject(new AbortError("The operation was aborted."));
    };
    signal.addEventListener("abort", onAbort);
  });
  try {
    return await Promise.race([promise, p]);
  } finally {
    signal.removeEventListener("abort", onAbort);
  }
}

// node_modules/@azure/web-pubsub-client/dist/esm/ackManager.js
var AckManager = class {
  _ackEntries = /* @__PURE__ */ new Map();
  _ackId;
  constructor(initialAckId = 0) {
    this._ackId = initialAckId;
  }
  registerAck(ackId) {
    const resolvedAckId = ackId ?? this._generateAckId();
    let entry = this._ackEntries.get(resolvedAckId);
    if (!entry) {
      entry = new AckEntity(resolvedAckId);
      this._ackEntries.set(resolvedAckId, entry);
    }
    const ackEntry = entry;
    return {
      ackId: resolvedAckId,
      wait: (abortSignal) => this._waitForEntry(ackEntry, abortSignal)
    };
  }
  resolveAck(ackId, result) {
    const entry = this._ackEntries.get(ackId);
    if (!entry) {
      return false;
    }
    this._ackEntries.delete(ackId);
    entry.resolve(result);
    return true;
  }
  rejectAck(ackId, reason) {
    const entry = this._ackEntries.get(ackId);
    if (!entry) {
      return false;
    }
    this._ackEntries.delete(ackId);
    entry.reject(reason);
    return true;
  }
  discard(ackId) {
    this._ackEntries.delete(ackId);
  }
  rejectAll(createReason) {
    this._ackEntries.forEach((entry, ackId) => {
      if (this._ackEntries.delete(ackId)) {
        entry.reject(createReason(ackId));
      }
    });
  }
  _waitForEntry(entry, abortSignal) {
    if (!abortSignal) {
      return entry.promise();
    }
    return abortablePromise(entry.promise(), abortSignal).catch((err) => {
      if (err instanceof Error && err.name === "AbortError") {
        throw new SendMessageError("Cancelled by abortSignal", { ackId: entry.ackId });
      }
      throw err;
    });
  }
  _generateAckId() {
    this._ackId += 1;
    return this._ackId;
  }
};
var AckEntity = class {
  constructor(ackId) {
    this.ackId = ackId;
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }
  _promise;
  _resolve;
  _reject;
  promise() {
    return this._promise;
  }
  resolve(value) {
    const callback = this._resolve;
    if (!callback) {
      return;
    }
    this._resolve = void 0;
    this._reject = void 0;
    callback(value);
  }
  reject(reason) {
    const callback = this._reject;
    if (!callback) {
      return;
    }
    this._resolve = void 0;
    this._reject = void 0;
    callback(reason);
  }
};

// node_modules/@azure/web-pubsub-client/dist/esm/invocationManager.js
var InvocationManager = class {
  _entries = /* @__PURE__ */ new Map();
  _nextId = 0;
  registerInvocation(invocationId) {
    const resolvedId = invocationId ?? this._generateInvocationId();
    if (this._entries.has(resolvedId)) {
      throw new InvocationError("Invocation id is already registered.", {
        invocationId: resolvedId
      });
    }
    const entity = new InvocationEntity(resolvedId);
    this._entries.set(resolvedId, entity);
    return {
      invocationId: resolvedId,
      wait: (options) => this._waitForEntry(entity, options)
    };
  }
  resolveInvocation(message) {
    const entry = this._entries.get(message.invocationId);
    if (!entry) {
      return false;
    }
    this._entries.delete(message.invocationId);
    entry.resolve(message);
    return true;
  }
  rejectInvocation(invocationId, reason) {
    const entry = this._entries.get(invocationId);
    if (!entry) {
      return false;
    }
    this._entries.delete(invocationId);
    entry.reject(reason);
    return true;
  }
  discard(invocationId) {
    this._entries.delete(invocationId);
  }
  rejectAll(createReason) {
    this._entries.forEach((entry, invocationId) => {
      if (this._entries.delete(invocationId)) {
        entry.reject(createReason(invocationId));
      }
    });
  }
  _waitForEntry(entry, options) {
    const waitPromise = entry.promise();
    const abortSignal = options?.abortSignal;
    if (!abortSignal) {
      return waitPromise;
    }
    if (abortSignal.aborted) {
      if (this._entries.delete(entry.invocationId)) {
        entry.reject(this._createAbortError(entry.invocationId));
      }
      return waitPromise;
    }
    return new Promise((resolve, reject) => {
      const onAbort = () => {
        abortSignal.removeEventListener("abort", onAbort);
        if (this._entries.delete(entry.invocationId)) {
          entry.reject(this._createAbortError(entry.invocationId));
        }
      };
      abortSignal.addEventListener("abort", onAbort);
      waitPromise.then((result) => {
        abortSignal.removeEventListener("abort", onAbort);
        return resolve(result);
      }).catch((err) => {
        abortSignal.removeEventListener("abort", onAbort);
        return reject(err);
      });
    });
  }
  _generateInvocationId() {
    this._nextId += 1;
    return this._nextId.toString();
  }
  _createAbortError(invocationId) {
    return new InvocationError("Invocation cancelled by abortSignal.", {
      invocationId
    });
  }
};
var InvocationEntity = class {
  constructor(invocationId) {
    this.invocationId = invocationId;
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }
  _promise;
  _resolve;
  _reject;
  promise() {
    return this._promise;
  }
  resolve(value) {
    const callback = this._resolve;
    if (!callback) {
      return;
    }
    this._resolve = void 0;
    this._reject = void 0;
    callback(value);
  }
  reject(reason) {
    const callback = this._reject;
    if (!callback) {
      return;
    }
    this._resolve = void 0;
    this._reject = void 0;
    callback(reason);
  }
};

// node_modules/@azure/web-pubsub-client/dist/esm/webPubSubClient.js
var WebPubSubClient = class {
  _protocol;
  _credential;
  _options;
  _groupMap;
  _ackManager;
  _invocationManager;
  _sequenceId;
  _messageRetryPolicy;
  _reconnectRetryPolicy;
  _quickSequenceAckDiff = 300;
  // The timeout for keep alive
  _keepAliveTimeoutInMs;
  // The interval at which to send keep-alive ping messages to the runtime
  _keepAliveIntervalInMs;
  _emitter = new import_events.default();
  _state;
  _isStopping = false;
  _pingKeepaliveTask;
  _timeoutMonitorTask;
  // connection lifetime
  _wsClient;
  _uri;
  _lastCloseEvent;
  _lastDisconnectedMessage;
  _connectionId;
  _reconnectionToken;
  _isInitialConnected = false;
  _sequenceAckTask;
  _lastMessageReceived = Date.now();
  constructor(credential, options) {
    if (typeof credential === "string") {
      this._credential = { getClientAccessUrl: credential };
    } else {
      this._credential = credential;
    }
    if (options == null) {
      options = {};
    }
    this._buildDefaultOptions(options);
    this._options = options;
    this._messageRetryPolicy = new RetryPolicy(this._options.messageRetryOptions);
    this._reconnectRetryPolicy = new RetryPolicy(this._options.reconnectRetryOptions);
    this._protocol = this._options.protocol;
    this._groupMap = /* @__PURE__ */ new Map();
    this._ackManager = new AckManager();
    this._invocationManager = new InvocationManager();
    this._sequenceId = new SequenceId();
    this._keepAliveTimeoutInMs = this._options.keepAliveTimeoutInMs ?? 12e4;
    this._keepAliveIntervalInMs = this._options.keepAliveIntervalInMs ?? 2e4;
    this._state = "Stopped";
  }
  /**
   * Start to start to the service.
   * @param abortSignal - The abort signal
   */
  async start(options) {
    if (this._isStopping) {
      throw new Error("Can't start a client during stopping");
    }
    if (this._state !== "Stopped") {
      throw new Error("Client can be only started when it's Stopped");
    }
    let abortSignal;
    if (options) {
      abortSignal = options.abortSignal;
    }
    if (!this._pingKeepaliveTask && this._keepAliveIntervalInMs > 0) {
      this._pingKeepaliveTask = this._getPingKeepaliveTask();
    }
    if (!this._timeoutMonitorTask && this._keepAliveTimeoutInMs > 0) {
      this._timeoutMonitorTask = this._getTimeoutMonitorTask();
    }
    try {
      await this._startCore(abortSignal);
    } catch (err) {
      this._changeState(
        "Stopped"
        /* Stopped */
      );
      this._disposeKeepaliveTasks();
      this._isStopping = false;
      throw err;
    }
  }
  async _startFromRestarting(abortSignal) {
    if (this._state !== "Disconnected") {
      throw new Error("Client can be only restarted when it's Disconnected");
    }
    try {
      logger.verbose("Staring reconnecting.");
      await this._startCore(abortSignal);
    } catch (err) {
      this._changeState(
        "Disconnected"
        /* Disconnected */
      );
      throw err;
    }
  }
  async _startCore(abortSignal) {
    this._changeState(
      "Connecting"
      /* Connecting */
    );
    logger.info("Staring a new connection");
    this._sequenceId.reset();
    this._isInitialConnected = false;
    this._lastCloseEvent = void 0;
    this._lastDisconnectedMessage = void 0;
    this._connectionId = void 0;
    this._reconnectionToken = void 0;
    this._uri = void 0;
    if (typeof this._credential.getClientAccessUrl === "string") {
      this._uri = this._credential.getClientAccessUrl;
    } else {
      this._uri = await this._credential.getClientAccessUrl({
        abortSignal
      });
    }
    if (typeof this._uri !== "string") {
      throw new Error(
        `The clientAccessUrl must be a string but currently it's ${typeof this._uri}`
      );
    }
    await this._connectCore(this._uri);
  }
  /**
   * Stop the client.
   */
  stop() {
    if (this._state === "Stopped" || this._isStopping) {
      return;
    }
    this._isStopping = true;
    if (this._wsClient && this._wsClient.isOpen()) {
      this._wsClient.close();
    } else {
      this._isStopping = false;
    }
    this._disposeKeepaliveTasks();
  }
  _disposeKeepaliveTasks() {
    if (this._pingKeepaliveTask) {
      this._pingKeepaliveTask.abort();
      this._pingKeepaliveTask = void 0;
    }
    if (this._timeoutMonitorTask) {
      this._timeoutMonitorTask.abort();
      this._timeoutMonitorTask = void 0;
    }
  }
  on(event, listener) {
    this._emitter.on(event, listener);
  }
  off(event, listener) {
    this._emitter.removeListener(event, listener);
  }
  _emitEvent(event, args) {
    this._emitter.emit(event, args);
  }
  /**
   * Send custom event to server.
   * @param eventName - The event name
   * @param content - The data content
   * @param dataType - The data type
   * @param options - The options
   * @param abortSignal - The abort signal
   */
  async sendEvent(eventName, content, dataType, options) {
    return this._operationExecuteWithRetry(
      () => this._sendEventAttempt(eventName, content, dataType, options),
      options?.abortSignal
    );
  }
  async _sendEventAttempt(eventName, content, dataType, options) {
    const fireAndForget = options?.fireAndForget ?? false;
    if (!fireAndForget) {
      return this._sendMessageWithAckId(
        (id) => {
          return {
            kind: "sendEvent",
            dataType,
            data: content,
            ackId: id,
            event: eventName
          };
        },
        options?.ackId,
        options?.abortSignal
      );
    }
    const message = {
      kind: "sendEvent",
      dataType,
      data: content,
      event: eventName
    };
    await this._sendMessage(message, options?.abortSignal);
    return { isDuplicated: false };
  }
  async _invokeEventAttempt(eventName, content, dataType, options) {
    const invokeOptions = options ?? {};
    const { invocationId, wait } = this._invocationManager.registerInvocation(
      invokeOptions.invocationId
    );
    const invokeMessage = {
      kind: "invoke",
      invocationId,
      target: "event",
      event: eventName,
      dataType,
      data: content
    };
    const responsePromise = wait({
      abortSignal: invokeOptions.abortSignal
    });
    try {
      await this._sendMessage(invokeMessage, invokeOptions.abortSignal);
    } catch (err) {
      const invocationError = err instanceof InvocationError ? err : new InvocationError(
        err instanceof Error ? err.message : "Failed to send invocation message.",
        {
          invocationId
        }
      );
      this._invocationManager.rejectInvocation(invocationId, invocationError);
      void responsePromise.catch(() => {
      });
      throw invocationError;
    }
    try {
      const response = await responsePromise;
      return this._mapInvokeResponse(response);
    } catch (err) {
      const shouldCancel = err instanceof InvocationError && err.errorDetail == null || invokeOptions.abortSignal?.aborted === true;
      if (shouldCancel) {
        await this._sendCancelInvocation(invocationId).catch(() => {
        });
      }
      throw err;
    } finally {
      this._invocationManager.discard(invocationId);
    }
  }
  /**
   * Invoke an upstream event and wait for the correlated response.
   * @param eventName - The event name
   * @param content - The payload
   * @param dataType - The payload type
   * @param options - Invoke options
   */
  async invokeEvent(eventName, content, dataType, options) {
    return this._operationExecuteWithRetry(
      () => this._invokeEventAttempt(eventName, content, dataType, options),
      options?.abortSignal
    );
  }
  /**
   * Join the client to group
   * @param groupName - The group name
   * @param options - The join group options
   */
  async joinGroup(groupName, options) {
    return this._operationExecuteWithRetry(
      () => this._joinGroupAttempt(groupName, options),
      options?.abortSignal
    );
  }
  async _joinGroupAttempt(groupName, options) {
    const group = this._getOrAddGroup(groupName);
    const result = await this._joinGroupCore(groupName, options);
    group.isJoined = true;
    return result;
  }
  async _joinGroupCore(groupName, options) {
    return this._sendMessageWithAckId(
      (id) => {
        return {
          group: groupName,
          ackId: id,
          kind: "joinGroup"
        };
      },
      options?.ackId,
      options?.abortSignal
    );
  }
  /**
   * Leave the client from group
   * @param groupName - The group name
   * @param ackId - The optional ackId. If not specified, client will generate one.
   * @param abortSignal - The abort signal
   */
  async leaveGroup(groupName, options) {
    return this._operationExecuteWithRetry(
      () => this._leaveGroupAttempt(groupName, options),
      options?.abortSignal
    );
  }
  async _leaveGroupAttempt(groupName, options) {
    const group = this._getOrAddGroup(groupName);
    const result = await this._sendMessageWithAckId(
      (id) => {
        return {
          group: groupName,
          ackId: id,
          kind: "leaveGroup"
        };
      },
      options?.ackId,
      options?.abortSignal
    );
    group.isJoined = false;
    return result;
  }
  /**
   * Send message to group.
   * @param groupName - The group name
   * @param content - The data content
   * @param dataType - The data type
   * @param options - The options
   * @param abortSignal - The abort signal
   */
  async sendToGroup(groupName, content, dataType, options) {
    return this._operationExecuteWithRetry(
      () => this._sendToGroupAttempt(groupName, content, dataType, options),
      options?.abortSignal
    );
  }
  async _sendToGroupAttempt(groupName, content, dataType, options) {
    const fireAndForget = options?.fireAndForget ?? false;
    const noEcho = options?.noEcho ?? false;
    if (!fireAndForget) {
      return this._sendMessageWithAckId(
        (id) => {
          return {
            kind: "sendToGroup",
            group: groupName,
            dataType,
            data: content,
            ackId: id,
            noEcho
          };
        },
        options?.ackId,
        options?.abortSignal
      );
    }
    const message = {
      kind: "sendToGroup",
      group: groupName,
      dataType,
      data: content,
      noEcho
    };
    await this._sendMessage(message, options?.abortSignal);
    return { isDuplicated: false };
  }
  _getWebSocketClientFactory() {
    return new WebSocketClientFactory();
  }
  async _trySendSequenceAck() {
    if (!this._protocol.isReliableSubProtocol) {
      return;
    }
    const [isUpdated, seqId] = this._sequenceId.tryGetSequenceId();
    if (isUpdated && seqId !== null && seqId !== void 0) {
      const message = {
        kind: "sequenceAck",
        sequenceId: seqId
      };
      try {
        await this._sendMessage(message);
      } catch {
        this._sequenceId.tryUpdate(seqId);
      }
    }
  }
  _connectCore(uri) {
    if (this._isStopping) {
      throw new Error("Can't start a client during stopping");
    }
    return new Promise((resolve, reject) => {
      const client = this._wsClient = this._getWebSocketClientFactory().create(
        uri,
        this._protocol.name
      );
      client.onopen(() => {
        if (this._isStopping) {
          try {
            client.close();
          } catch {
          }
          reject(new Error(`The client is stopped`));
        }
        logger.verbose("WebSocket connection has opened");
        this._lastMessageReceived = Date.now();
        this._changeState(
          "Connected"
          /* Connected */
        );
        if (this._protocol.isReliableSubProtocol) {
          if (this._sequenceAckTask != null) {
            this._sequenceAckTask.abort();
          }
          this._sequenceAckTask = new AbortableTask(async () => {
            await this._trySendSequenceAck();
          }, 1e3);
        }
        resolve();
      });
      client.onerror((e) => {
        if (this._sequenceAckTask != null) {
          this._sequenceAckTask.abort();
        }
        reject(e);
      });
      client.onclose((code, reason) => {
        if (this._state === "Connected") {
          logger.verbose("WebSocket closed after open");
          if (this._sequenceAckTask != null) {
            this._sequenceAckTask.abort();
          }
          logger.info(`WebSocket connection closed. Code: ${code}, Reason: ${reason}`);
          this._lastCloseEvent = { code, reason };
          this._handleConnectionClose.call(this);
        } else {
          logger.verbose("WebSocket closed before open");
          reject(new Error(`Failed to start WebSocket: ${code}`));
        }
      });
      client.onmessage((data) => {
        const handleAckMessage = (message) => {
          const isDuplicated = message.error != null && message.error.name === "Duplicate";
          if (message.success || isDuplicated) {
            this._ackManager.resolveAck(message.ackId, {
              ackId: message.ackId,
              isDuplicated
            });
          } else {
            this._ackManager.rejectAck(
              message.ackId,
              new SendMessageError("Failed to send message.", {
                ackId: message.ackId,
                errorDetail: message.error
              })
            );
          }
        };
        const handleConnectedMessage = async (message) => {
          this._connectionId = message.connectionId;
          this._reconnectionToken = message.reconnectionToken;
          if (!this._isInitialConnected) {
            this._isInitialConnected = true;
            if (this._options.autoRejoinGroups) {
              const groupPromises = [];
              this._groupMap.forEach((g) => {
                if (g.isJoined) {
                  groupPromises.push(
                    (async () => {
                      try {
                        await this._joinGroupCore(g.name);
                      } catch (err) {
                        this._safeEmitRejoinGroupFailed(g.name, err);
                      }
                    })()
                  );
                }
              });
              await Promise.all(groupPromises).catch(() => {
              });
            }
            this._safeEmitConnected(message.connectionId, message.userId);
          }
        };
        const handleDisconnectedMessage = (message) => {
          this._lastDisconnectedMessage = message;
        };
        const handleGroupDataMessage = (message) => {
          if (message.sequenceId != null) {
            const diff = this._sequenceId.tryUpdate(message.sequenceId);
            if (diff === 0) {
              return;
            }
            if (diff > this._quickSequenceAckDiff) {
              this._trySendSequenceAck();
            }
          }
          this._safeEmitGroupMessage(message);
        };
        const handleServerDataMessage = (message) => {
          if (message.sequenceId != null) {
            const diff = this._sequenceId.tryUpdate(message.sequenceId);
            if (diff === 0) {
              return;
            }
            if (diff > this._quickSequenceAckDiff) {
              this._trySendSequenceAck();
            }
          }
          this._safeEmitServerMessage(message);
        };
        const handleInvokeResponseMessage = (message) => {
          const resolved = this._invocationManager.resolveInvocation(message);
          if (!resolved) {
            logger.verbose(
              `Received invokeResponse for unknown invocationId: ${message.invocationId}`
            );
          }
        };
        this._lastMessageReceived = Date.now();
        let messages;
        try {
          let convertedData;
          if (Array.isArray(data)) {
            convertedData = Buffer.concat(data);
          } else {
            convertedData = data;
          }
          messages = this._protocol.parseMessages(convertedData);
          if (messages === null) {
            return;
          }
        } catch (err) {
          logger.warning("An error occurred while parsing the message from service", err);
          throw err;
        }
        if (!Array.isArray(messages)) {
          messages = [messages];
        }
        messages.forEach((message) => {
          try {
            switch (message.kind) {
              case "pong": {
                break;
              }
              case "ack": {
                handleAckMessage(message);
                break;
              }
              case "connected": {
                handleConnectedMessage(message);
                break;
              }
              case "disconnected": {
                handleDisconnectedMessage(message);
                break;
              }
              case "groupData": {
                handleGroupDataMessage(message);
                break;
              }
              case "serverData": {
                handleServerDataMessage(message);
                break;
              }
              case "invokeResponse": {
                handleInvokeResponseMessage(message);
                break;
              }
            }
          } catch (err) {
            logger.warning(
              `An error occurred while handling the message with kind: ${message.kind} from service`,
              err
            );
          }
        });
      });
    });
  }
  async _handleConnectionCloseAndNoRecovery() {
    this._state = "Disconnected";
    this._safeEmitDisconnected(this._connectionId, this._lastDisconnectedMessage);
    if (this._options.autoReconnect) {
      await this._autoReconnect();
    } else {
      await this._handleConnectionStopped();
    }
  }
  async _autoReconnect() {
    let isSuccess = false;
    let attempt = 0;
    try {
      while (!this._isStopping) {
        try {
          await this._startFromRestarting();
          isSuccess = true;
          break;
        } catch (err) {
          logger.warning("An attempt to reconnect connection failed.", err);
          attempt++;
          const delayInMs = this._reconnectRetryPolicy.nextRetryDelayInMs(attempt);
          if (delayInMs == null) {
            break;
          }
          logger.verbose(`Delay time for reconnect attempt ${attempt}: ${delayInMs}`);
          await delay(delayInMs).catch(() => {
          });
        }
      }
    } finally {
      if (!isSuccess) {
        this._handleConnectionStopped();
      }
    }
  }
  _handleConnectionStopped() {
    this._isStopping = false;
    this._state = "Stopped";
    this._disposeKeepaliveTasks();
    this._safeEmitStopped();
  }
  async _trySendPing() {
    if (this._state !== "Connected" || !this._wsClient?.isOpen()) {
      return;
    }
    const message = {
      kind: "ping"
    };
    try {
      await this._sendMessage(message);
    } catch {
      logger.warning("Failed to send keepalive message to the service");
    }
  }
  async _checkKeepAliveTimeout() {
    if (this._state !== "Connected" || !this._wsClient?.isOpen()) {
      return;
    }
    const now = Date.now();
    if (now - this._lastMessageReceived > this._keepAliveTimeoutInMs) {
      logger.warning(
        `No messages received for ${now - this._lastMessageReceived} ms. Closing. The keep alive timeout is set to ${this._keepAliveTimeoutInMs} ms.`
      );
      this._wsClient?.close();
    }
  }
  _getPingKeepaliveTask() {
    return new AbortableTask(async () => {
      await this._trySendPing();
    }, this._keepAliveIntervalInMs);
  }
  _getTimeoutMonitorTask() {
    const timeout = this._keepAliveTimeoutInMs;
    const checkInterval = Math.floor(timeout / 3);
    return new AbortableTask(async () => {
      await this._checkKeepAliveTimeout();
    }, checkInterval);
  }
  async _sendMessage(message, abortSignal) {
    if (!this._wsClient || !this._wsClient.isOpen()) {
      throw new Error("The connection is not connected.");
    }
    const payload = this._protocol.writeMessage(message);
    await this._wsClient.send(payload, abortSignal);
  }
  async _sendMessageWithAckId(messageProvider, ackId, abortSignal) {
    const { ackId: resolvedAckId, wait } = this._ackManager.registerAck(ackId);
    const message = messageProvider(resolvedAckId);
    try {
      await this._sendMessage(message, abortSignal);
    } catch (error) {
      this._ackManager.discard(resolvedAckId);
      let errorMessage = "";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      throw new SendMessageError(errorMessage, { ackId: resolvedAckId });
    }
    return wait(abortSignal);
  }
  async _handleConnectionClose() {
    this._ackManager.rejectAll((ackId) => {
      return new SendMessageError(
        "Connection is disconnected before receive ack from the service",
        {
          ackId
        }
      );
    });
    this._invocationManager.rejectAll((invocationId) => {
      return new InvocationError(
        "Connection is disconnected before receiving invoke response from the service",
        {
          invocationId
        }
      );
    });
    if (this._isStopping) {
      logger.warning("The client is stopping state. Stop recovery.");
      this._handleConnectionCloseAndNoRecovery();
      return;
    }
    if (this._lastCloseEvent && this._lastCloseEvent.code === 1008) {
      logger.warning("The websocket close with status code 1008. Stop recovery.");
      this._handleConnectionCloseAndNoRecovery();
      return;
    }
    if (!this._protocol.isReliableSubProtocol) {
      logger.warning("The protocol is not reliable, recovery is not applicable");
      this._handleConnectionCloseAndNoRecovery();
      return;
    }
    const recoveryUri = this._buildRecoveryUri();
    if (!recoveryUri) {
      logger.warning("Connection id or reconnection token is not available");
      this._handleConnectionCloseAndNoRecovery();
      return;
    }
    let recovered = false;
    this._state = "Recovering";
    const abortSignal = AbortSignal.timeout(30 * 1e3);
    try {
      while (!abortSignal.aborted || this._isStopping) {
        try {
          await this._connectCore.call(this, recoveryUri);
          recovered = true;
          return;
        } catch {
          await delay(1e3);
        }
      }
    } finally {
      if (!recovered) {
        logger.warning("Recovery attempts failed more then 30 seconds or the client is stopping");
        this._handleConnectionCloseAndNoRecovery();
      }
    }
  }
  _safeEmitConnected(connectionId, userId) {
    this._emitEvent("connected", {
      connectionId,
      userId
    });
  }
  _safeEmitDisconnected(connectionId, lastDisconnectedMessage) {
    this._emitEvent("disconnected", {
      connectionId,
      message: lastDisconnectedMessage
    });
  }
  _safeEmitGroupMessage(message) {
    this._emitEvent("group-message", {
      message
    });
  }
  _safeEmitServerMessage(message) {
    this._emitEvent("server-message", {
      message
    });
  }
  _safeEmitStopped() {
    this._emitEvent("stopped", {});
  }
  _safeEmitRejoinGroupFailed(groupName, err) {
    this._emitEvent("rejoin-group-failed", {
      group: groupName,
      error: err
    });
  }
  _mapInvokeResponse(message) {
    if (message.success !== true) {
      if (message.success === false) {
        throw new InvocationError(message.error?.message ?? "Invocation failed.", {
          invocationId: message.invocationId,
          errorDetail: message.error
        });
      }
      throw new InvocationError("Unsupported invoke response frame.", {
        invocationId: message.invocationId
      });
    }
    return {
      invocationId: message.invocationId,
      dataType: message.dataType,
      data: message.data
    };
  }
  async _sendCancelInvocation(invocationId) {
    const message = {
      kind: "cancelInvocation",
      invocationId
    };
    try {
      await this._sendMessage(message);
    } catch (err) {
      logger.verbose(`Failed to send cancelInvocation for ${invocationId}`, err);
    }
  }
  _buildDefaultOptions(clientOptions) {
    if (clientOptions.autoReconnect == null) {
      clientOptions.autoReconnect = true;
    }
    if (clientOptions.autoRejoinGroups == null) {
      clientOptions.autoRejoinGroups = true;
    }
    if (clientOptions.protocol == null) {
      clientOptions.protocol = WebPubSubJsonReliableProtocol();
    }
    if (clientOptions.keepAliveTimeoutInMs == null) {
      clientOptions.keepAliveTimeoutInMs = 12e4;
    }
    if (clientOptions.keepAliveTimeoutInMs < 0) {
      throw new RangeError("keepAliveTimeoutInMs must be greater than or equal to 0.");
    }
    if (clientOptions.keepAliveIntervalInMs == null) {
      clientOptions.keepAliveIntervalInMs = 2e4;
    }
    if (clientOptions.keepAliveIntervalInMs < 0) {
      throw new RangeError("keepAliveIntervalInMs must be greater than or equal to 0.");
    }
    this._buildMessageRetryOptions(clientOptions);
    this._buildReconnectRetryOptions(clientOptions);
    return clientOptions;
  }
  _buildMessageRetryOptions(clientOptions) {
    if (!clientOptions.messageRetryOptions) {
      clientOptions.messageRetryOptions = {};
    }
    if (clientOptions.messageRetryOptions.maxRetries == null || clientOptions.messageRetryOptions.maxRetries < 0) {
      clientOptions.messageRetryOptions.maxRetries = 3;
    }
    if (clientOptions.messageRetryOptions.retryDelayInMs == null || clientOptions.messageRetryOptions.retryDelayInMs < 0) {
      clientOptions.messageRetryOptions.retryDelayInMs = 1e3;
    }
    if (clientOptions.messageRetryOptions.maxRetryDelayInMs == null || clientOptions.messageRetryOptions.maxRetryDelayInMs < 0) {
      clientOptions.messageRetryOptions.maxRetryDelayInMs = 3e4;
    }
    if (clientOptions.messageRetryOptions.mode == null) {
      clientOptions.messageRetryOptions.mode = "Fixed";
    }
  }
  _buildReconnectRetryOptions(clientOptions) {
    if (!clientOptions.reconnectRetryOptions) {
      clientOptions.reconnectRetryOptions = {};
    }
    if (clientOptions.reconnectRetryOptions.maxRetries == null || clientOptions.reconnectRetryOptions.maxRetries < 0) {
      clientOptions.reconnectRetryOptions.maxRetries = Number.MAX_VALUE;
    }
    if (clientOptions.reconnectRetryOptions.retryDelayInMs == null || clientOptions.reconnectRetryOptions.retryDelayInMs < 0) {
      clientOptions.reconnectRetryOptions.retryDelayInMs = 1e3;
    }
    if (clientOptions.reconnectRetryOptions.maxRetryDelayInMs == null || clientOptions.reconnectRetryOptions.maxRetryDelayInMs < 0) {
      clientOptions.reconnectRetryOptions.maxRetryDelayInMs = 3e4;
    }
    if (clientOptions.reconnectRetryOptions.mode == null) {
      clientOptions.reconnectRetryOptions.mode = "Fixed";
    }
  }
  _buildRecoveryUri() {
    if (this._connectionId && this._reconnectionToken && this._uri) {
      const url = new URL(this._uri);
      url.searchParams.append("awps_connection_id", this._connectionId);
      url.searchParams.append("awps_reconnection_token", this._reconnectionToken);
      return url.toString();
    }
    return null;
  }
  _getOrAddGroup(name) {
    if (!this._groupMap.has(name)) {
      this._groupMap.set(name, new WebPubSubGroup(name));
    }
    return this._groupMap.get(name);
  }
  _changeState(newState) {
    logger.verbose(
      `The client state transfer from ${this._state.toString()} to ${newState.toString()}`
    );
    this._state = newState;
  }
  async _operationExecuteWithRetry(inner, signal) {
    let retryAttempt = 0;
    while (true) {
      try {
        return await inner.call(this);
      } catch (err) {
        if (err instanceof InvocationError) {
          throw err;
        }
        retryAttempt++;
        const delayInMs = this._messageRetryPolicy.nextRetryDelayInMs(retryAttempt);
        if (delayInMs == null) {
          throw err;
        }
        await delay(delayInMs);
        if (signal?.aborted) {
          throw err;
        }
      }
    }
  }
};
var RetryPolicy = class {
  _retryOptions;
  _maxRetriesToGetMaxDelay;
  constructor(retryOptions) {
    this._retryOptions = retryOptions;
    this._maxRetriesToGetMaxDelay = Math.ceil(
      Math.log2(this._retryOptions.maxRetryDelayInMs) - Math.log2(this._retryOptions.retryDelayInMs) + 1
    );
  }
  nextRetryDelayInMs(retryAttempt) {
    if (retryAttempt > this._retryOptions.maxRetries) {
      return null;
    } else {
      if (this._retryOptions.mode === "Fixed") {
        return this._retryOptions.retryDelayInMs;
      } else {
        return this._calculateExponentialDelay(retryAttempt);
      }
    }
  }
  _calculateExponentialDelay(attempt) {
    if (attempt >= this._maxRetriesToGetMaxDelay) {
      return this._retryOptions.maxRetryDelayInMs;
    } else {
      return (1 << attempt - 1) * this._retryOptions.retryDelayInMs;
    }
  }
};
var WebPubSubGroup = class {
  name;
  isJoined = false;
  constructor(name) {
    this.name = name;
  }
};
var SequenceId = class {
  _sequenceId;
  _isUpdate;
  constructor() {
    this._sequenceId = 0;
    this._isUpdate = false;
  }
  tryUpdate(sequenceId) {
    this._isUpdate = true;
    if (sequenceId > this._sequenceId) {
      const diff = sequenceId - this._sequenceId;
      this._sequenceId = sequenceId;
      return diff;
    }
    return 0;
  }
  tryGetSequenceId() {
    if (this._isUpdate) {
      this._isUpdate = false;
      return [true, this._sequenceId];
    }
    return [false, null];
  }
  reset() {
    this._sequenceId = 0;
    this._isUpdate = false;
  }
};
var AbortableTask = class {
  _func;
  _abortController;
  _interval;
  _obj;
  constructor(func, interval, obj) {
    this._func = func;
    this._abortController = new AbortController();
    this._interval = interval;
    this._obj = obj;
    this._start();
  }
  abort() {
    try {
      this._abortController.abort();
    } catch {
    }
  }
  async _start() {
    const signal = this._abortController.signal;
    while (!signal.aborted) {
      try {
        await this._func(this._obj);
      } catch {
      } finally {
        await delay(this._interval);
      }
    }
  }
};

// src/cli/credentials.ts
var import_node_fs = __toESM(require("node:fs"));
var import_node_path = __toESM(require("node:path"));
var import_node_os2 = __toESM(require("node:os"));
function defaultPath() {
  const xdg = process.env.XDG_CONFIG_HOME;
  const base = xdg ? xdg : import_node_path.default.join(import_node_os2.default.homedir(), ".config");
  return import_node_path.default.join(base, "bvg-deamon", "credentials.json");
}
function credentialsPath() {
  return process.env.BVG_DEAMON_CREDENTIALS ?? defaultPath();
}
function loadCredentials() {
  const p = credentialsPath();
  if (!import_node_fs.default.existsSync(p)) return null;
  try {
    const data = JSON.parse(import_node_fs.default.readFileSync(p, "utf8"));
    if (!data.azure_hub_url || !data.client_id || !data.registration_token) return null;
    return data;
  } catch {
    return null;
  }
}
function saveCredentials(creds) {
  const p = credentialsPath();
  import_node_fs.default.mkdirSync(import_node_path.default.dirname(p), { recursive: true });
  import_node_fs.default.writeFileSync(p, JSON.stringify(creds, null, 2), { mode: 384 });
  return p;
}
function wipeCredentials() {
  const p = credentialsPath();
  if (import_node_fs.default.existsSync(p)) import_node_fs.default.unlinkSync(p);
}

// src/cli/index.ts
var subcommands = {
  join: cmdJoin,
  daemon: cmdDaemon,
  clients: cmdClients,
  send: cmdSend,
  unpair: cmdUnpair
};
async function main() {
  const [cmd, ...rest] = process.argv.slice(2);
  if (!cmd || cmd === "--help" || cmd === "-h") {
    printUsage();
    return cmd ? 0 : 2;
  }
  const fn = subcommands[cmd];
  if (!fn) {
    console.error(import_picocolors.default.red(`unknown subcommand: ${cmd}`));
    printUsage();
    return 2;
  }
  try {
    return await fn(rest);
  } catch (err) {
    console.error(import_picocolors.default.red(err instanceof Error ? err.message : String(err)));
    return 1;
  }
}
function printUsage() {
  console.error(`
bvg-deamon \u2014 pure-Azure transport client for bvgeert

Usage:
  bvg-deamon join --hub <wss://x.webpubsub.azure.com/client/hubs/<hub>> --transport <identifier>
      anonymously connect to bvgeert via Azure, request to join a
      transport, print a pairing code and wait for admin approval.

  bvg-deamon daemon
      keep an authenticated WebSocket open. Prints incoming envelopes.
      Type "reply <text>" in stdin to reply to the last sender.

  bvg-deamon clients [--online]
      list members of the joined transport.

  bvg-deamon send <target-identifier|*> <text>
      send a direct message to one client on the joined transport, or "*" to broadcast.

  bvg-deamon unpair
      wipe local credentials (server-side revoke via bvgeert admin).

Credentials are stored at $BVG_DEAMON_CREDENTIALS or ~/.config/bvg-deamon/credentials.json (mode 0600).
`);
}
function parseFlag(args, name) {
  const idx = args.indexOf(`--${name}`);
  if (idx === -1) return void 0;
  return args[idx + 1];
}
function asSystemMsg(data) {
  if (!data || typeof data !== "object") return null;
  const obj = data;
  if (typeof obj.type !== "string") return null;
  return obj;
}
async function cmdJoin(args) {
  const hub = parseFlag(args, "hub");
  const transport = parseFlag(args, "transport");
  if (!hub || !transport) {
    console.error(import_picocolors.default.red("usage: bvg-deamon join --hub <wss-url> --transport <identifier>"));
    return 2;
  }
  console.log(import_picocolors.default.cyan("connecting to Azure anonymously..."));
  const client = new WebPubSubClient({ getClientAccessUrl: async () => hub }, { protocol: WebPubSubJsonProtocol() });
  let approved = null;
  let denied = false;
  let topicRequested = false;
  let connectionId = null;
  client.on("connected", (e) => {
    connectionId = e.connectionId;
  });
  client.on("server-message", async (e) => {
    const msg = asSystemMsg(e.message.data);
    if (!msg) return;
    if (msg.type === "pairing.code") {
      console.log("");
      console.log(import_picocolors.default.bold("pair code:"), import_picocolors.default.cyan(msg.code));
      if (msg.admin_url) console.log(`approve in admin: ${msg.admin_url}`);
      console.log(`expires: ${msg.expires_at}`);
      console.log(import_picocolors.default.dim("\nwaiting for approval \u2014 Ctrl+C to cancel\n"));
      if (!topicRequested) {
        topicRequested = true;
        await client.sendEvent("pairing.request_topic", { topic_identifier: transport }, "json", { fireAndForget: true });
      }
    } else if (msg.type === "pairing.approved") {
      approved = msg;
    } else if (msg.type === "pairing.denied") {
      denied = true;
    }
  });
  await client.start();
  const startedAt = Date.now();
  while (!approved && !denied && Date.now() - startedAt < 30 * 60 * 1e3) {
    await new Promise((r) => setTimeout(r, 1e3));
  }
  await client.stop();
  if (denied) {
    console.error(import_picocolors.default.red("denied by admin"));
    return 3;
  }
  if (!approved) {
    console.error(import_picocolors.default.red("timeout waiting for approval"));
    return 4;
  }
  const path2 = saveCredentials({
    azure_hub_url: hub,
    client_id: approved.client_id,
    registration_token: approved.registration_token,
    access_url: approved.url,
    access_url_expires_at: approved.expires_at,
    topic_identifier: transport
  });
  console.log(import_picocolors.default.green(`paired as ${approved.client_id} on transport ${transport}`));
  console.log(`credentials: ${path2}`);
  console.log(import_picocolors.default.dim(`bootstrap connectionId was ${connectionId}`));
  return 0;
}
async function cmdUnpair(_args) {
  wipeCredentials();
  console.log(import_picocolors.default.green("local credentials wiped"));
  return 0;
}
function authedClient(creds) {
  let accessUrl = creds.access_url ?? "";
  let accessExpiresAt = creds.access_url_expires_at ? Date.parse(creds.access_url_expires_at) : 0;
  let refreshResolve = null;
  const c = new WebPubSubClient({
    getClientAccessUrl: async () => {
      if (!accessUrl) throw new Error("no access url \u2014 re-pair");
      if (Date.now() >= accessExpiresAt - 6e4 && !refreshResolve) {
        try {
          const waiter = new Promise((resolve) => {
            refreshResolve = resolve;
          });
          await c.sendEvent("request_refresh_token", {}, "json", { fireAndForget: true });
          accessUrl = await Promise.race([
            waiter,
            new Promise((_, reject) => setTimeout(() => reject(new Error("token refresh timeout")), 3e4))
          ]);
        } catch {
        } finally {
          refreshResolve = null;
        }
      }
      return accessUrl;
    }
  }, {
    autoReconnect: true,
    reconnectRetryOptions: { maxRetries: Number.MAX_SAFE_INTEGER, retryDelayInMs: 1e3, maxRetryDelayInMs: 3e4, mode: "Exponential" },
    protocol: WebPubSubJsonProtocol()
  });
  c.on("server-message", (e) => {
    const data = e.message.data;
    if (data?.type === "token.refresh" && typeof data.url === "string") {
      accessUrl = data.url;
      if (typeof data.expires_at === "string") accessExpiresAt = Date.parse(data.expires_at);
      refreshResolve?.(data.url);
    }
  });
  return c;
}
function requireCreds() {
  const creds = loadCredentials();
  if (!creds) {
    console.error(import_picocolors.default.red("not paired \u2014 run `bvg-deamon join` first"));
    process.exit(2);
  }
  return creds;
}
async function cmdDaemon(_args) {
  const creds = requireCreds();
  const client = authedClient(creds);
  let lastSender = null;
  client.on("connected", (e) => {
    console.log(import_picocolors.default.green(`connected \u2014 connectionId=${e.connectionId} userId=${e.userId}`));
    console.log(import_picocolors.default.dim(`transport: ${creds.topic_identifier ?? "(unknown)"}`));
    console.log(import_picocolors.default.dim("type 'reply <text>' to reply to last sender, 'help' for commands"));
  });
  client.on("disconnected", (e) => {
    console.log(import_picocolors.default.yellow(`disconnected \u2014 ${e.message ?? ""}`));
  });
  const handleEnvelope = (data) => {
    if (data?.type === "token.refresh") return;
    const sender = data?.sender_identifier ?? "(unknown)";
    const target = data?.target_identifier;
    if (target && target !== creds.client_id) return;
    const payload = typeof data?.payload === "string" ? data.payload : JSON.stringify(data?.payload);
    console.log(`${import_picocolors.default.cyan("[" + sender + "]")} ${data?.message_type ?? ""}: ${payload}`);
    lastSender = sender;
  };
  client.on("server-message", (e) => handleEnvelope(e.message.data));
  client.on("group-message", (e) => handleEnvelope(e.message.data));
  await client.start();
  const rl = import_node_readline.default.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
  rl.on("line", async (raw) => {
    const line = raw.trim();
    if (!line) return;
    if (line === "help") {
      console.log(import_picocolors.default.dim("commands: reply <text> | send <identifier> <text> | clients | quit"));
      return;
    }
    if (line === "quit") {
      await client.stop();
      process.exit(0);
    }
    if (line === "clients") {
      try {
        await listClients(creds, false);
      } catch (err) {
        console.error(import_picocolors.default.red(err instanceof Error ? err.message : String(err)));
      }
      return;
    }
    const replyMatch = line.match(/^reply\s+(.+)$/);
    if (replyMatch) {
      if (!lastSender) {
        console.log(import_picocolors.default.yellow("no last sender to reply to"));
        return;
      }
      await publish(client, creds, lastSender, replyMatch[1]);
      return;
    }
    const sendMatch = line.match(/^send\s+(\S+)\s+(.+)$/);
    if (sendMatch) {
      await publish(client, creds, sendMatch[1], sendMatch[2]);
      return;
    }
    console.log(import_picocolors.default.yellow("unknown command \u2014 try 'help'"));
  });
  return new Promise((resolve) => {
    const shutdown = async (sig) => {
      console.log(import_picocolors.default.dim(`
${sig}, stopping`));
      try {
        await client.stop();
      } catch {
      }
      resolve(0);
    };
    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));
  });
}
async function publish(client, creds, targetIdentifier, text) {
  const target = targetIdentifier === "*" ? null : targetIdentifier;
  await client.sendEvent("publish", {
    topic_identifier: creds.topic_identifier,
    message_type: "chat.text",
    payload: text,
    target_identifier: target
  }, "json", { fireAndForget: true });
  console.log(import_picocolors.default.green(`sent to ${targetIdentifier}: ${text}`));
}
async function cmdClients(args) {
  const creds = requireCreds();
  await listClients(creds, args.includes("--online"));
  return 0;
}
async function listClients(creds, onlineOnly) {
  if (!creds.topic_identifier) throw new Error("no transport associated with credentials");
  const client = authedClient(creds);
  let result = null;
  client.on("server-message", (e) => {
    const data = e.message.data;
    if (data?.type === "clients.list_result") {
      result = data;
    }
  });
  await client.start();
  await client.sendEvent("clients.list", { topic_identifier: creds.topic_identifier }, "json", { fireAndForget: true });
  const startedAt = Date.now();
  while (!result && Date.now() - startedAt < 1e4) {
    await new Promise((r) => setTimeout(r, 100));
  }
  await client.stop();
  if (!result) throw new Error("timeout waiting for clients list");
  const entries = onlineOnly ? result.clients.filter((c) => c.online) : result.clients;
  for (const c of entries) {
    const dot = c.online ? import_picocolors.default.green("\u25CF") : import_picocolors.default.dim("\u25CB");
    console.log(`${dot} ${c.identifier}${c.name ? ` (${c.name})` : ""} \u2014 ${c.kind}`);
  }
}
async function cmdSend(args) {
  const creds = requireCreds();
  const [target, ...rest] = args;
  if (!target || rest.length === 0) {
    console.error(import_picocolors.default.red("usage: bvg-deamon send <target-identifier|*> <text>"));
    return 2;
  }
  const text = rest.join(" ");
  const client = authedClient(creds);
  await client.start();
  await publish(client, creds, target, text);
  await client.stop();
  return 0;
}
main().then((code) => process.exit(code));
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL3BpY29jb2xvcnMvcGljb2NvbG9ycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL2NvbnN0YW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL2J1ZmZlci11dGlsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy93cy9saWIvbGltaXRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3Blcm1lc3NhZ2UtZGVmbGF0ZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3ZhbGlkYXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3dzL2xpYi9yZWNlaXZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3NlbmRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL2V2ZW50LXRhcmdldC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL2V4dGVuc2lvbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3dlYnNvY2tldC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3N0cmVhbS5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3N1YnByb3RvY29sLmpzIiwgIi4uL25vZGVfbW9kdWxlcy93cy9saWIvd2Vic29ja2V0LXNlcnZlci5qcyIsICIuLi9zcmMvY2xpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AdHlwZXNwZWMvdHMtaHR0cC1ydW50aW1lL3NyYy91dGlsL2NoZWNrRW52aXJvbm1lbnQudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BhenVyZS9hYm9ydC1jb250cm9sbGVyL3NyYy9BYm9ydEVycm9yLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvY29yZS11dGlsL3NyYy9jcmVhdGVBYm9ydGFibGVQcm9taXNlLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvY29yZS11dGlsL3NyYy9kZWxheS50cyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL3dlYlB1YlN1YkNsaWVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL2Vycm9ycy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHR5cGVzcGVjL3RzLWh0dHAtcnVudGltZS9zcmMvbG9nZ2VyL2xvZy50cyIsICIuLi9ub2RlX21vZHVsZXMvQHR5cGVzcGVjL3RzLWh0dHAtcnVudGltZS9zcmMvbG9nZ2VyL2RlYnVnLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AdHlwZXNwZWMvdHMtaHR0cC1ydW50aW1lL3NyYy9sb2dnZXIvbG9nZ2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvbG9nZ2VyL3NyYy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL2xvZ2dlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL3Byb3RvY29scy9qc29uUHJvdG9jb2xCYXNlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvd2ViLXB1YnN1Yi1jbGllbnQvZGlzdC9lc20vcHJvdG9jb2xzL3dlYlB1YlN1Ykpzb25Qcm90b2NvbC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL3Byb3RvY29scy93ZWJQdWJTdWJKc29uUmVsaWFibGVQcm90b2NvbC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL3Byb3RvY29scy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3Mvd3JhcHBlci5tanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BhenVyZS93ZWItcHVic3ViLWNsaWVudC9kaXN0L2VzbS93ZWJzb2NrZXQvd2Vic29ja2V0Q2xpZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvd2ViLXB1YnN1Yi1jbGllbnQvZGlzdC9lc20vdXRpbHMvYWJvcnRhYmxlUHJvbWlzZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL2Fja01hbmFnZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BhenVyZS93ZWItcHVic3ViLWNsaWVudC9kaXN0L2VzbS9pbnZvY2F0aW9uTWFuYWdlci5qcyIsICIuLi9zcmMvY2xpL2NyZWRlbnRpYWxzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJsZXQgcCA9IHByb2Nlc3MgfHwge30sIGFyZ3YgPSBwLmFyZ3YgfHwgW10sIGVudiA9IHAuZW52IHx8IHt9XG5sZXQgaXNDb2xvclN1cHBvcnRlZCA9XG5cdCEoISFlbnYuTk9fQ09MT1IgfHwgYXJndi5pbmNsdWRlcyhcIi0tbm8tY29sb3JcIikpICYmXG5cdCghIWVudi5GT1JDRV9DT0xPUiB8fCBhcmd2LmluY2x1ZGVzKFwiLS1jb2xvclwiKSB8fCBwLnBsYXRmb3JtID09PSBcIndpbjMyXCIgfHwgKChwLnN0ZG91dCB8fCB7fSkuaXNUVFkgJiYgZW52LlRFUk0gIT09IFwiZHVtYlwiKSB8fCAhIWVudi5DSSlcblxubGV0IGZvcm1hdHRlciA9IChvcGVuLCBjbG9zZSwgcmVwbGFjZSA9IG9wZW4pID0+XG5cdGlucHV0ID0+IHtcblx0XHRsZXQgc3RyaW5nID0gXCJcIiArIGlucHV0LCBpbmRleCA9IHN0cmluZy5pbmRleE9mKGNsb3NlLCBvcGVuLmxlbmd0aClcblx0XHRyZXR1cm4gfmluZGV4ID8gb3BlbiArIHJlcGxhY2VDbG9zZShzdHJpbmcsIGNsb3NlLCByZXBsYWNlLCBpbmRleCkgKyBjbG9zZSA6IG9wZW4gKyBzdHJpbmcgKyBjbG9zZVxuXHR9XG5cbmxldCByZXBsYWNlQ2xvc2UgPSAoc3RyaW5nLCBjbG9zZSwgcmVwbGFjZSwgaW5kZXgpID0+IHtcblx0bGV0IHJlc3VsdCA9IFwiXCIsIGN1cnNvciA9IDBcblx0ZG8ge1xuXHRcdHJlc3VsdCArPSBzdHJpbmcuc3Vic3RyaW5nKGN1cnNvciwgaW5kZXgpICsgcmVwbGFjZVxuXHRcdGN1cnNvciA9IGluZGV4ICsgY2xvc2UubGVuZ3RoXG5cdFx0aW5kZXggPSBzdHJpbmcuaW5kZXhPZihjbG9zZSwgY3Vyc29yKVxuXHR9IHdoaWxlICh+aW5kZXgpXG5cdHJldHVybiByZXN1bHQgKyBzdHJpbmcuc3Vic3RyaW5nKGN1cnNvcilcbn1cblxubGV0IGNyZWF0ZUNvbG9ycyA9IChlbmFibGVkID0gaXNDb2xvclN1cHBvcnRlZCkgPT4ge1xuXHRsZXQgZiA9IGVuYWJsZWQgPyBmb3JtYXR0ZXIgOiAoKSA9PiBTdHJpbmdcblx0cmV0dXJuIHtcblx0XHRpc0NvbG9yU3VwcG9ydGVkOiBlbmFibGVkLFxuXHRcdHJlc2V0OiBmKFwiXFx4MWJbMG1cIiwgXCJcXHgxYlswbVwiKSxcblx0XHRib2xkOiBmKFwiXFx4MWJbMW1cIiwgXCJcXHgxYlsyMm1cIiwgXCJcXHgxYlsyMm1cXHgxYlsxbVwiKSxcblx0XHRkaW06IGYoXCJcXHgxYlsybVwiLCBcIlxceDFiWzIybVwiLCBcIlxceDFiWzIybVxceDFiWzJtXCIpLFxuXHRcdGl0YWxpYzogZihcIlxceDFiWzNtXCIsIFwiXFx4MWJbMjNtXCIpLFxuXHRcdHVuZGVybGluZTogZihcIlxceDFiWzRtXCIsIFwiXFx4MWJbMjRtXCIpLFxuXHRcdGludmVyc2U6IGYoXCJcXHgxYls3bVwiLCBcIlxceDFiWzI3bVwiKSxcblx0XHRoaWRkZW46IGYoXCJcXHgxYls4bVwiLCBcIlxceDFiWzI4bVwiKSxcblx0XHRzdHJpa2V0aHJvdWdoOiBmKFwiXFx4MWJbOW1cIiwgXCJcXHgxYlsyOW1cIiksXG5cblx0XHRibGFjazogZihcIlxceDFiWzMwbVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRyZWQ6IGYoXCJcXHgxYlszMW1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0Z3JlZW46IGYoXCJcXHgxYlszMm1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0eWVsbG93OiBmKFwiXFx4MWJbMzNtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdGJsdWU6IGYoXCJcXHgxYlszNG1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0bWFnZW50YTogZihcIlxceDFiWzM1bVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRjeWFuOiBmKFwiXFx4MWJbMzZtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdHdoaXRlOiBmKFwiXFx4MWJbMzdtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdGdyYXk6IGYoXCJcXHgxYls5MG1cIiwgXCJcXHgxYlszOW1cIiksXG5cblx0XHRiZ0JsYWNrOiBmKFwiXFx4MWJbNDBtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnUmVkOiBmKFwiXFx4MWJbNDFtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnR3JlZW46IGYoXCJcXHgxYls0Mm1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdZZWxsb3c6IGYoXCJcXHgxYls0M21cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdCbHVlOiBmKFwiXFx4MWJbNDRtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnTWFnZW50YTogZihcIlxceDFiWzQ1bVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ0N5YW46IGYoXCJcXHgxYls0Nm1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdXaGl0ZTogZihcIlxceDFiWzQ3bVwiLCBcIlxceDFiWzQ5bVwiKSxcblxuXHRcdGJsYWNrQnJpZ2h0OiBmKFwiXFx4MWJbOTBtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdHJlZEJyaWdodDogZihcIlxceDFiWzkxbVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRncmVlbkJyaWdodDogZihcIlxceDFiWzkybVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHR5ZWxsb3dCcmlnaHQ6IGYoXCJcXHgxYls5M21cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0Ymx1ZUJyaWdodDogZihcIlxceDFiWzk0bVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRtYWdlbnRhQnJpZ2h0OiBmKFwiXFx4MWJbOTVtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdGN5YW5CcmlnaHQ6IGYoXCJcXHgxYls5Nm1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0d2hpdGVCcmlnaHQ6IGYoXCJcXHgxYls5N21cIiwgXCJcXHgxYlszOW1cIiksXG5cblx0XHRiZ0JsYWNrQnJpZ2h0OiBmKFwiXFx4MWJbMTAwbVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ1JlZEJyaWdodDogZihcIlxceDFiWzEwMW1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdHcmVlbkJyaWdodDogZihcIlxceDFiWzEwMm1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdZZWxsb3dCcmlnaHQ6IGYoXCJcXHgxYlsxMDNtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnQmx1ZUJyaWdodDogZihcIlxceDFiWzEwNG1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdNYWdlbnRhQnJpZ2h0OiBmKFwiXFx4MWJbMTA1bVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ0N5YW5CcmlnaHQ6IGYoXCJcXHgxYlsxMDZtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnV2hpdGVCcmlnaHQ6IGYoXCJcXHgxYlsxMDdtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ29sb3JzKClcbm1vZHVsZS5leHBvcnRzLmNyZWF0ZUNvbG9ycyA9IGNyZWF0ZUNvbG9yc1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQklOQVJZX1RZUEVTID0gWydub2RlYnVmZmVyJywgJ2FycmF5YnVmZmVyJywgJ2ZyYWdtZW50cyddO1xuY29uc3QgaGFzQmxvYiA9IHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJztcblxuaWYgKGhhc0Jsb2IpIEJJTkFSWV9UWVBFUy5wdXNoKCdibG9iJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBCSU5BUllfVFlQRVMsXG4gIENMT1NFX1RJTUVPVVQ6IDMwMDAwLFxuICBFTVBUWV9CVUZGRVI6IEJ1ZmZlci5hbGxvYygwKSxcbiAgR1VJRDogJzI1OEVBRkE1LUU5MTQtNDdEQS05NUNBLUM1QUIwREM4NUIxMScsXG4gIGhhc0Jsb2IsXG4gIGtGb3JPbkV2ZW50QXR0cmlidXRlOiBTeW1ib2woJ2tJc0Zvck9uRXZlbnRBdHRyaWJ1dGUnKSxcbiAga0xpc3RlbmVyOiBTeW1ib2woJ2tMaXN0ZW5lcicpLFxuICBrU3RhdHVzQ29kZTogU3ltYm9sKCdzdGF0dXMtY29kZScpLFxuICBrV2ViU29ja2V0OiBTeW1ib2woJ3dlYnNvY2tldCcpLFxuICBOT09QOiAoKSA9PiB7fVxufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHsgRU1QVFlfQlVGRkVSIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5jb25zdCBGYXN0QnVmZmVyID0gQnVmZmVyW1N5bWJvbC5zcGVjaWVzXTtcblxuLyoqXG4gKiBNZXJnZXMgYW4gYXJyYXkgb2YgYnVmZmVycyBpbnRvIGEgbmV3IGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcltdfSBsaXN0IFRoZSBhcnJheSBvZiBidWZmZXJzIHRvIGNvbmNhdFxuICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsTGVuZ3RoIFRoZSB0b3RhbCBsZW5ndGggb2YgYnVmZmVycyBpbiB0aGUgbGlzdFxuICogQHJldHVybiB7QnVmZmVyfSBUaGUgcmVzdWx0aW5nIGJ1ZmZlclxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBjb25jYXQobGlzdCwgdG90YWxMZW5ndGgpIHtcbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gRU1QVFlfQlVGRkVSO1xuICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHJldHVybiBsaXN0WzBdO1xuXG4gIGNvbnN0IHRhcmdldCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZSh0b3RhbExlbmd0aCk7XG4gIGxldCBvZmZzZXQgPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGJ1ZiA9IGxpc3RbaV07XG4gICAgdGFyZ2V0LnNldChidWYsIG9mZnNldCk7XG4gICAgb2Zmc2V0ICs9IGJ1Zi5sZW5ndGg7XG4gIH1cblxuICBpZiAob2Zmc2V0IDwgdG90YWxMZW5ndGgpIHtcbiAgICByZXR1cm4gbmV3IEZhc3RCdWZmZXIodGFyZ2V0LmJ1ZmZlciwgdGFyZ2V0LmJ5dGVPZmZzZXQsIG9mZnNldCk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIE1hc2tzIGEgYnVmZmVyIHVzaW5nIHRoZSBnaXZlbiBtYXNrLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBzb3VyY2UgVGhlIGJ1ZmZlciB0byBtYXNrXG4gKiBAcGFyYW0ge0J1ZmZlcn0gbWFzayBUaGUgbWFzayB0byB1c2VcbiAqIEBwYXJhbSB7QnVmZmVyfSBvdXRwdXQgVGhlIGJ1ZmZlciB3aGVyZSB0byBzdG9yZSB0aGUgcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IFRoZSBvZmZzZXQgYXQgd2hpY2ggdG8gc3RhcnQgd3JpdGluZ1xuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRvIG1hc2suXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIF9tYXNrKHNvdXJjZSwgbWFzaywgb3V0cHV0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0W29mZnNldCArIGldID0gc291cmNlW2ldIF4gbWFza1tpICYgM107XG4gIH1cbn1cblxuLyoqXG4gKiBVbm1hc2tzIGEgYnVmZmVyIHVzaW5nIHRoZSBnaXZlbiBtYXNrLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byB1bm1hc2tcbiAqIEBwYXJhbSB7QnVmZmVyfSBtYXNrIFRoZSBtYXNrIHRvIHVzZVxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBfdW5tYXNrKGJ1ZmZlciwgbWFzaykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1ZmZlci5sZW5ndGg7IGkrKykge1xuICAgIGJ1ZmZlcltpXSBePSBtYXNrW2kgJiAzXTtcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgYnVmZmVyIHRvIGFuIGBBcnJheUJ1ZmZlcmAuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZiBUaGUgYnVmZmVyIHRvIGNvbnZlcnRcbiAqIEByZXR1cm4ge0FycmF5QnVmZmVyfSBDb252ZXJ0ZWQgYnVmZmVyXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXlCdWZmZXIoYnVmKSB7XG4gIGlmIChidWYubGVuZ3RoID09PSBidWYuYnVmZmVyLmJ5dGVMZW5ndGgpIHtcbiAgICByZXR1cm4gYnVmLmJ1ZmZlcjtcbiAgfVxuXG4gIHJldHVybiBidWYuYnVmZmVyLnNsaWNlKGJ1Zi5ieXRlT2Zmc2V0LCBidWYuYnl0ZU9mZnNldCArIGJ1Zi5sZW5ndGgpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBkYXRhYCB0byBhIGBCdWZmZXJgLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgZGF0YSB0byBjb252ZXJ0XG4gKiBAcmV0dXJuIHtCdWZmZXJ9IFRoZSBidWZmZXJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdG9CdWZmZXIoZGF0YSkge1xuICB0b0J1ZmZlci5yZWFkT25seSA9IHRydWU7XG5cbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihkYXRhKSkgcmV0dXJuIGRhdGE7XG5cbiAgbGV0IGJ1ZjtcblxuICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgYnVmID0gbmV3IEZhc3RCdWZmZXIoZGF0YSk7XG4gIH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpKSB7XG4gICAgYnVmID0gbmV3IEZhc3RCdWZmZXIoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoKTtcbiAgfSBlbHNlIHtcbiAgICBidWYgPSBCdWZmZXIuZnJvbShkYXRhKTtcbiAgICB0b0J1ZmZlci5yZWFkT25seSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGJ1Zjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbmNhdCxcbiAgbWFzazogX21hc2ssXG4gIHRvQXJyYXlCdWZmZXIsXG4gIHRvQnVmZmVyLFxuICB1bm1hc2s6IF91bm1hc2tcbn07XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICAqL1xuaWYgKCFwcm9jZXNzLmVudi5XU19OT19CVUZGRVJfVVRJTCkge1xuICB0cnkge1xuICAgIGNvbnN0IGJ1ZmZlclV0aWwgPSByZXF1aXJlKCdidWZmZXJ1dGlsJyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cy5tYXNrID0gZnVuY3Rpb24gKHNvdXJjZSwgbWFzaywgb3V0cHV0LCBvZmZzZXQsIGxlbmd0aCkge1xuICAgICAgaWYgKGxlbmd0aCA8IDQ4KSBfbWFzayhzb3VyY2UsIG1hc2ssIG91dHB1dCwgb2Zmc2V0LCBsZW5ndGgpO1xuICAgICAgZWxzZSBidWZmZXJVdGlsLm1hc2soc291cmNlLCBtYXNrLCBvdXRwdXQsIG9mZnNldCwgbGVuZ3RoKTtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHMudW5tYXNrID0gZnVuY3Rpb24gKGJ1ZmZlciwgbWFzaykge1xuICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPCAzMikgX3VubWFzayhidWZmZXIsIG1hc2spO1xuICAgICAgZWxzZSBidWZmZXJVdGlsLnVubWFzayhidWZmZXIsIG1hc2spO1xuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBDb250aW51ZSByZWdhcmRsZXNzIG9mIHRoZSBlcnJvci5cbiAgfVxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3Qga0RvbmUgPSBTeW1ib2woJ2tEb25lJyk7XG5jb25zdCBrUnVuID0gU3ltYm9sKCdrUnVuJyk7XG5cbi8qKlxuICogQSB2ZXJ5IHNpbXBsZSBqb2IgcXVldWUgd2l0aCBhZGp1c3RhYmxlIGNvbmN1cnJlbmN5LiBBZGFwdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9TVFJNTC9hc3luYy1saW1pdGVyXG4gKi9cbmNsYXNzIExpbWl0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBgTGltaXRlcmAuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbY29uY3VycmVuY3k9SW5maW5pdHldIFRoZSBtYXhpbXVtIG51bWJlciBvZiBqb2JzIGFsbG93ZWRcbiAgICogICAgIHRvIHJ1biBjb25jdXJyZW50bHlcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmN1cnJlbmN5KSB7XG4gICAgdGhpc1trRG9uZV0gPSAoKSA9PiB7XG4gICAgICB0aGlzLnBlbmRpbmctLTtcbiAgICAgIHRoaXNba1J1bl0oKTtcbiAgICB9O1xuICAgIHRoaXMuY29uY3VycmVuY3kgPSBjb25jdXJyZW5jeSB8fCBJbmZpbml0eTtcbiAgICB0aGlzLmpvYnMgPSBbXTtcbiAgICB0aGlzLnBlbmRpbmcgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBqb2IgdG8gdGhlIHF1ZXVlLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBqb2IgVGhlIGpvYiB0byBydW5cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgYWRkKGpvYikge1xuICAgIHRoaXMuam9icy5wdXNoKGpvYik7XG4gICAgdGhpc1trUnVuXSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBqb2IgZnJvbSB0aGUgcXVldWUgYW5kIHJ1bnMgaXQgaWYgcG9zc2libGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBba1J1bl0oKSB7XG4gICAgaWYgKHRoaXMucGVuZGluZyA9PT0gdGhpcy5jb25jdXJyZW5jeSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuam9icy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGpvYiA9IHRoaXMuam9icy5zaGlmdCgpO1xuXG4gICAgICB0aGlzLnBlbmRpbmcrKztcbiAgICAgIGpvYih0aGlzW2tEb25lXSk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGltaXRlcjtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHpsaWIgPSByZXF1aXJlKCd6bGliJyk7XG5cbmNvbnN0IGJ1ZmZlclV0aWwgPSByZXF1aXJlKCcuL2J1ZmZlci11dGlsJyk7XG5jb25zdCBMaW1pdGVyID0gcmVxdWlyZSgnLi9saW1pdGVyJyk7XG5jb25zdCB7IGtTdGF0dXNDb2RlIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5jb25zdCBGYXN0QnVmZmVyID0gQnVmZmVyW1N5bWJvbC5zcGVjaWVzXTtcbmNvbnN0IFRSQUlMRVIgPSBCdWZmZXIuZnJvbShbMHgwMCwgMHgwMCwgMHhmZiwgMHhmZl0pO1xuY29uc3Qga1Blck1lc3NhZ2VEZWZsYXRlID0gU3ltYm9sKCdwZXJtZXNzYWdlLWRlZmxhdGUnKTtcbmNvbnN0IGtUb3RhbExlbmd0aCA9IFN5bWJvbCgndG90YWwtbGVuZ3RoJyk7XG5jb25zdCBrQ2FsbGJhY2sgPSBTeW1ib2woJ2NhbGxiYWNrJyk7XG5jb25zdCBrQnVmZmVycyA9IFN5bWJvbCgnYnVmZmVycycpO1xuY29uc3Qga0Vycm9yID0gU3ltYm9sKCdlcnJvcicpO1xuXG4vL1xuLy8gV2UgbGltaXQgemxpYiBjb25jdXJyZW5jeSwgd2hpY2ggcHJldmVudHMgc2V2ZXJlIG1lbW9yeSBmcmFnbWVudGF0aW9uXG4vLyBhcyBkb2N1bWVudGVkIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvODg3MSNpc3N1ZWNvbW1lbnQtMjUwOTE1OTEzXG4vLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL3dlYnNvY2tldHMvd3MvaXNzdWVzLzEyMDJcbi8vXG4vLyBJbnRlbnRpb25hbGx5IGdsb2JhbDsgaXQncyB0aGUgZ2xvYmFsIHRocmVhZCBwb29sIHRoYXQncyBhbiBpc3N1ZS5cbi8vXG5sZXQgemxpYkxpbWl0ZXI7XG5cbi8qKlxuICogcGVybWVzc2FnZS1kZWZsYXRlIGltcGxlbWVudGF0aW9uLlxuICovXG5jbGFzcyBQZXJNZXNzYWdlRGVmbGF0ZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgUGVyTWVzc2FnZURlZmxhdGUgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQ29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TnVtYmVyKX0gW29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0c10gQWR2ZXJ0aXNlIHN1cHBvcnRcbiAgICogICAgIGZvciwgb3IgcmVxdWVzdCwgYSBjdXN0b20gY2xpZW50IHdpbmRvdyBzaXplXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuY2xpZW50Tm9Db250ZXh0VGFrZW92ZXI9ZmFsc2VdIEFkdmVydGlzZS9cbiAgICogICAgIGFja25vd2xlZGdlIGRpc2FibGluZyBvZiBjbGllbnQgY29udGV4dCB0YWtlb3ZlclxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuY29uY3VycmVuY3lMaW1pdD0xMF0gVGhlIG51bWJlciBvZiBjb25jdXJyZW50XG4gICAqICAgICBjYWxscyB0byB6bGliXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaXNTZXJ2ZXI9ZmFsc2VdIENyZWF0ZSB0aGUgaW5zdGFuY2UgaW4gZWl0aGVyXG4gICAqICAgICBzZXJ2ZXIgb3IgY2xpZW50IG1vZGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm1heFBheWxvYWQ9MF0gVGhlIG1heGltdW0gYWxsb3dlZCBtZXNzYWdlIGxlbmd0aFxuICAgKiBAcGFyYW0geyhCb29sZWFufE51bWJlcil9IFtvcHRpb25zLnNlcnZlck1heFdpbmRvd0JpdHNdIFJlcXVlc3QvY29uZmlybSB0aGVcbiAgICogICAgIHVzZSBvZiBhIGN1c3RvbSBzZXJ2ZXIgd2luZG93IHNpemVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5zZXJ2ZXJOb0NvbnRleHRUYWtlb3Zlcj1mYWxzZV0gUmVxdWVzdC9hY2NlcHRcbiAgICogICAgIGRpc2FibGluZyBvZiBzZXJ2ZXIgY29udGV4dCB0YWtlb3ZlclxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudGhyZXNob2xkPTEwMjRdIFNpemUgKGluIGJ5dGVzKSBiZWxvdyB3aGljaFxuICAgKiAgICAgbWVzc2FnZXMgc2hvdWxkIG5vdCBiZSBjb21wcmVzc2VkIGlmIGNvbnRleHQgdGFrZW92ZXIgaXMgZGlzYWJsZWRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnpsaWJEZWZsYXRlT3B0aW9uc10gT3B0aW9ucyB0byBwYXNzIHRvIHpsaWIgb25cbiAgICogICAgIGRlZmxhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnpsaWJJbmZsYXRlT3B0aW9uc10gT3B0aW9ucyB0byBwYXNzIHRvIHpsaWIgb25cbiAgICogICAgIGluZmxhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLl90aHJlc2hvbGQgPVxuICAgICAgdGhpcy5fb3B0aW9ucy50aHJlc2hvbGQgIT09IHVuZGVmaW5lZCA/IHRoaXMuX29wdGlvbnMudGhyZXNob2xkIDogMTAyNDtcbiAgICB0aGlzLl9tYXhQYXlsb2FkID0gdGhpcy5fb3B0aW9ucy5tYXhQYXlsb2FkIHwgMDtcbiAgICB0aGlzLl9pc1NlcnZlciA9ICEhdGhpcy5fb3B0aW9ucy5pc1NlcnZlcjtcbiAgICB0aGlzLl9kZWZsYXRlID0gbnVsbDtcbiAgICB0aGlzLl9pbmZsYXRlID0gbnVsbDtcblxuICAgIHRoaXMucGFyYW1zID0gbnVsbDtcblxuICAgIGlmICghemxpYkxpbWl0ZXIpIHtcbiAgICAgIGNvbnN0IGNvbmN1cnJlbmN5ID1cbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jb25jdXJyZW5jeUxpbWl0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IHRoaXMuX29wdGlvbnMuY29uY3VycmVuY3lMaW1pdFxuICAgICAgICAgIDogMTA7XG4gICAgICB6bGliTGltaXRlciA9IG5ldyBMaW1pdGVyKGNvbmN1cnJlbmN5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgZXh0ZW5zaW9uTmFtZSgpIHtcbiAgICByZXR1cm4gJ3Blcm1lc3NhZ2UtZGVmbGF0ZSc7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBuZWdvdGlhdGlvbiBvZmZlci5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fSBFeHRlbnNpb24gcGFyYW1ldGVyc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBvZmZlcigpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgIGlmICh0aGlzLl9vcHRpb25zLnNlcnZlck5vQ29udGV4dFRha2VvdmVyKSB7XG4gICAgICBwYXJhbXMuc2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5jbGllbnROb0NvbnRleHRUYWtlb3Zlcikge1xuICAgICAgcGFyYW1zLmNsaWVudF9ub19jb250ZXh0X3Rha2VvdmVyID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuc2VydmVyTWF4V2luZG93Qml0cykge1xuICAgICAgcGFyYW1zLnNlcnZlcl9tYXhfd2luZG93X2JpdHMgPSB0aGlzLl9vcHRpb25zLnNlcnZlck1heFdpbmRvd0JpdHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMpIHtcbiAgICAgIHBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzID0gdGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzID09IG51bGwpIHtcbiAgICAgIHBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBhbiBleHRlbnNpb24gbmVnb3RpYXRpb24gb2ZmZXIvcmVzcG9uc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGNvbmZpZ3VyYXRpb25zIFRoZSBleHRlbnNpb24gbmVnb3RpYXRpb24gb2ZmZXJzL3JlcG9uc2VcbiAgICogQHJldHVybiB7T2JqZWN0fSBBY2NlcHRlZCBjb25maWd1cmF0aW9uXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFjY2VwdChjb25maWd1cmF0aW9ucykge1xuICAgIGNvbmZpZ3VyYXRpb25zID0gdGhpcy5ub3JtYWxpemVQYXJhbXMoY29uZmlndXJhdGlvbnMpO1xuXG4gICAgdGhpcy5wYXJhbXMgPSB0aGlzLl9pc1NlcnZlclxuICAgICAgPyB0aGlzLmFjY2VwdEFzU2VydmVyKGNvbmZpZ3VyYXRpb25zKVxuICAgICAgOiB0aGlzLmFjY2VwdEFzQ2xpZW50KGNvbmZpZ3VyYXRpb25zKTtcblxuICAgIHJldHVybiB0aGlzLnBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlcyBhbGwgcmVzb3VyY2VzIHVzZWQgYnkgdGhlIGV4dGVuc2lvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY2xlYW51cCgpIHtcbiAgICBpZiAodGhpcy5faW5mbGF0ZSkge1xuICAgICAgdGhpcy5faW5mbGF0ZS5jbG9zZSgpO1xuICAgICAgdGhpcy5faW5mbGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RlZmxhdGUpIHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5fZGVmbGF0ZVtrQ2FsbGJhY2tdO1xuXG4gICAgICB0aGlzLl9kZWZsYXRlLmNsb3NlKCk7XG4gICAgICB0aGlzLl9kZWZsYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKFxuICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICdUaGUgZGVmbGF0ZSBzdHJlYW0gd2FzIGNsb3NlZCB3aGlsZSBkYXRhIHdhcyBiZWluZyBwcm9jZXNzZWQnXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAgQWNjZXB0IGFuIGV4dGVuc2lvbiBuZWdvdGlhdGlvbiBvZmZlci5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gb2ZmZXJzIFRoZSBleHRlbnNpb24gbmVnb3RpYXRpb24gb2ZmZXJzXG4gICAqIEByZXR1cm4ge09iamVjdH0gQWNjZXB0ZWQgY29uZmlndXJhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWNjZXB0QXNTZXJ2ZXIob2ZmZXJzKSB7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMuX29wdGlvbnM7XG4gICAgY29uc3QgYWNjZXB0ZWQgPSBvZmZlcnMuZmluZCgocGFyYW1zKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIChvcHRzLnNlcnZlck5vQ29udGV4dFRha2VvdmVyID09PSBmYWxzZSAmJlxuICAgICAgICAgIHBhcmFtcy5zZXJ2ZXJfbm9fY29udGV4dF90YWtlb3ZlcikgfHxcbiAgICAgICAgKHBhcmFtcy5zZXJ2ZXJfbWF4X3dpbmRvd19iaXRzICYmXG4gICAgICAgICAgKG9wdHMuc2VydmVyTWF4V2luZG93Qml0cyA9PT0gZmFsc2UgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygb3B0cy5zZXJ2ZXJNYXhXaW5kb3dCaXRzID09PSAnbnVtYmVyJyAmJlxuICAgICAgICAgICAgICBvcHRzLnNlcnZlck1heFdpbmRvd0JpdHMgPiBwYXJhbXMuc2VydmVyX21heF93aW5kb3dfYml0cykpKSB8fFxuICAgICAgICAodHlwZW9mIG9wdHMuY2xpZW50TWF4V2luZG93Qml0cyA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgICAhcGFyYW1zLmNsaWVudF9tYXhfd2luZG93X2JpdHMpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGlmICghYWNjZXB0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm9uZSBvZiB0aGUgZXh0ZW5zaW9uIG9mZmVycyBjYW4gYmUgYWNjZXB0ZWQnKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5zZXJ2ZXJOb0NvbnRleHRUYWtlb3Zlcikge1xuICAgICAgYWNjZXB0ZWQuc2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0cy5jbGllbnROb0NvbnRleHRUYWtlb3Zlcikge1xuICAgICAgYWNjZXB0ZWQuY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdHMuc2VydmVyTWF4V2luZG93Qml0cyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGFjY2VwdGVkLnNlcnZlcl9tYXhfd2luZG93X2JpdHMgPSBvcHRzLnNlcnZlck1heFdpbmRvd0JpdHM7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0cy5jbGllbnRNYXhXaW5kb3dCaXRzID09PSAnbnVtYmVyJykge1xuICAgICAgYWNjZXB0ZWQuY2xpZW50X21heF93aW5kb3dfYml0cyA9IG9wdHMuY2xpZW50TWF4V2luZG93Qml0cztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgYWNjZXB0ZWQuY2xpZW50X21heF93aW5kb3dfYml0cyA9PT0gdHJ1ZSB8fFxuICAgICAgb3B0cy5jbGllbnRNYXhXaW5kb3dCaXRzID09PSBmYWxzZVxuICAgICkge1xuICAgICAgZGVsZXRlIGFjY2VwdGVkLmNsaWVudF9tYXhfd2luZG93X2JpdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY2VwdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdCB0aGUgZXh0ZW5zaW9uIG5lZ290aWF0aW9uIHJlc3BvbnNlLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSByZXNwb25zZSBUaGUgZXh0ZW5zaW9uIG5lZ290aWF0aW9uIHJlc3BvbnNlXG4gICAqIEByZXR1cm4ge09iamVjdH0gQWNjZXB0ZWQgY29uZmlndXJhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWNjZXB0QXNDbGllbnQocmVzcG9uc2UpIHtcbiAgICBjb25zdCBwYXJhbXMgPSByZXNwb25zZVswXTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMuX29wdGlvbnMuY2xpZW50Tm9Db250ZXh0VGFrZW92ZXIgPT09IGZhbHNlICYmXG4gICAgICBwYXJhbXMuY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXJcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBwYXJhbWV0ZXIgXCJjbGllbnRfbm9fY29udGV4dF90YWtlb3ZlclwiJyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJhbXMuY2xpZW50X21heF93aW5kb3dfYml0cykge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzID0gdGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMgPT09IGZhbHNlIHx8XG4gICAgICAodHlwZW9mIHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cyA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgcGFyYW1zLmNsaWVudF9tYXhfd2luZG93X2JpdHMgPiB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdVbmV4cGVjdGVkIG9yIGludmFsaWQgcGFyYW1ldGVyIFwiY2xpZW50X21heF93aW5kb3dfYml0c1wiJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBwYXJhbWV0ZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBjb25maWd1cmF0aW9ucyBUaGUgZXh0ZW5zaW9uIG5lZ290aWF0aW9uIG9mZmVycy9yZXBvbnNlXG4gICAqIEByZXR1cm4ge0FycmF5fSBUaGUgb2ZmZXJzL3Jlc3BvbnNlIHdpdGggbm9ybWFsaXplZCBwYXJhbWV0ZXJzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBub3JtYWxpemVQYXJhbXMoY29uZmlndXJhdGlvbnMpIHtcbiAgICBjb25maWd1cmF0aW9ucy5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHBhcmFtc1trZXldO1xuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgXCIke2tleX1cIiBtdXN0IGhhdmUgb25seSBhIHNpbmdsZSB2YWx1ZWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZVswXTtcblxuICAgICAgICBpZiAoa2V5ID09PSAnY2xpZW50X21heF93aW5kb3dfYml0cycpIHtcbiAgICAgICAgICBpZiAodmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9ICt2YWx1ZTtcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihudW0pIHx8IG51bSA8IDggfHwgbnVtID4gMTUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgICBgSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyIFwiJHtrZXl9XCI6ICR7dmFsdWV9YFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSBudW07XG4gICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgIGBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgXCIke2tleX1cIjogJHt2YWx1ZX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdzZXJ2ZXJfbWF4X3dpbmRvd19iaXRzJykge1xuICAgICAgICAgIGNvbnN0IG51bSA9ICt2YWx1ZTtcbiAgICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIobnVtKSB8fCBudW0gPCA4IHx8IG51bSA+IDE1KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICBgSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyIFwiJHtrZXl9XCI6ICR7dmFsdWV9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWUgPSBudW07XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAga2V5ID09PSAnY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXInIHx8XG4gICAgICAgICAga2V5ID09PSAnc2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXInXG4gICAgICAgICkge1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgYEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciBcIiR7a2V5fVwiOiAke3ZhbHVlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBwYXJhbWV0ZXIgXCIke2tleX1cImApO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY29tcHJlc3MgZGF0YS4gQ29uY3VycmVuY3kgbGltaXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgQ29tcHJlc3NlZCBkYXRhXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmluIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGlzIHRoZSBsYXN0IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGRlY29tcHJlc3MoZGF0YSwgZmluLCBjYWxsYmFjaykge1xuICAgIHpsaWJMaW1pdGVyLmFkZCgoZG9uZSkgPT4ge1xuICAgICAgdGhpcy5fZGVjb21wcmVzcyhkYXRhLCBmaW4sIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICBkb25lKCk7XG4gICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXByZXNzIGRhdGEuIENvbmN1cnJlbmN5IGxpbWl0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7KEJ1ZmZlcnxTdHJpbmcpfSBkYXRhIERhdGEgdG8gY29tcHJlc3NcbiAgICogQHBhcmFtIHtCb29sZWFufSBmaW4gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgdGhlIGxhc3QgZnJhZ21lbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY29tcHJlc3MoZGF0YSwgZmluLCBjYWxsYmFjaykge1xuICAgIHpsaWJMaW1pdGVyLmFkZCgoZG9uZSkgPT4ge1xuICAgICAgdGhpcy5fY29tcHJlc3MoZGF0YSwgZmluLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNvbXByZXNzIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIENvbXByZXNzZWQgZGF0YVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZpbiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhpcyBpcyB0aGUgbGFzdCBmcmFnbWVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2RlY29tcHJlc3MoZGF0YSwgZmluLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5faXNTZXJ2ZXIgPyAnY2xpZW50JyA6ICdzZXJ2ZXInO1xuXG4gICAgaWYgKCF0aGlzLl9pbmZsYXRlKSB7XG4gICAgICBjb25zdCBrZXkgPSBgJHtlbmRwb2ludH1fbWF4X3dpbmRvd19iaXRzYDtcbiAgICAgIGNvbnN0IHdpbmRvd0JpdHMgPVxuICAgICAgICB0eXBlb2YgdGhpcy5wYXJhbXNba2V5XSAhPT0gJ251bWJlcidcbiAgICAgICAgICA/IHpsaWIuWl9ERUZBVUxUX1dJTkRPV0JJVFNcbiAgICAgICAgICA6IHRoaXMucGFyYW1zW2tleV07XG5cbiAgICAgIHRoaXMuX2luZmxhdGUgPSB6bGliLmNyZWF0ZUluZmxhdGVSYXcoe1xuICAgICAgICAuLi50aGlzLl9vcHRpb25zLnpsaWJJbmZsYXRlT3B0aW9ucyxcbiAgICAgICAgd2luZG93Qml0c1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9pbmZsYXRlW2tQZXJNZXNzYWdlRGVmbGF0ZV0gPSB0aGlzO1xuICAgICAgdGhpcy5faW5mbGF0ZVtrVG90YWxMZW5ndGhdID0gMDtcbiAgICAgIHRoaXMuX2luZmxhdGVba0J1ZmZlcnNdID0gW107XG4gICAgICB0aGlzLl9pbmZsYXRlLm9uKCdlcnJvcicsIGluZmxhdGVPbkVycm9yKTtcbiAgICAgIHRoaXMuX2luZmxhdGUub24oJ2RhdGEnLCBpbmZsYXRlT25EYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pbmZsYXRlW2tDYWxsYmFja10gPSBjYWxsYmFjaztcblxuICAgIHRoaXMuX2luZmxhdGUud3JpdGUoZGF0YSk7XG4gICAgaWYgKGZpbikgdGhpcy5faW5mbGF0ZS53cml0ZShUUkFJTEVSKTtcblxuICAgIHRoaXMuX2luZmxhdGUuZmx1c2goKCkgPT4ge1xuICAgICAgY29uc3QgZXJyID0gdGhpcy5faW5mbGF0ZVtrRXJyb3JdO1xuXG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRoaXMuX2luZmxhdGUuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5faW5mbGF0ZSA9IG51bGw7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IGJ1ZmZlclV0aWwuY29uY2F0KFxuICAgICAgICB0aGlzLl9pbmZsYXRlW2tCdWZmZXJzXSxcbiAgICAgICAgdGhpcy5faW5mbGF0ZVtrVG90YWxMZW5ndGhdXG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5faW5mbGF0ZS5fcmVhZGFibGVTdGF0ZS5lbmRFbWl0dGVkKSB7XG4gICAgICAgIHRoaXMuX2luZmxhdGUuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5faW5mbGF0ZSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbmZsYXRlW2tUb3RhbExlbmd0aF0gPSAwO1xuICAgICAgICB0aGlzLl9pbmZsYXRlW2tCdWZmZXJzXSA9IFtdO1xuXG4gICAgICAgIGlmIChmaW4gJiYgdGhpcy5wYXJhbXNbYCR7ZW5kcG9pbnR9X25vX2NvbnRleHRfdGFrZW92ZXJgXSkge1xuICAgICAgICAgIHRoaXMuX2luZmxhdGUucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wcmVzcyBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0geyhCdWZmZXJ8U3RyaW5nKX0gZGF0YSBEYXRhIHRvIGNvbXByZXNzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmluIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGlzIHRoZSBsYXN0IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29tcHJlc3MoZGF0YSwgZmluLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5faXNTZXJ2ZXIgPyAnc2VydmVyJyA6ICdjbGllbnQnO1xuXG4gICAgaWYgKCF0aGlzLl9kZWZsYXRlKSB7XG4gICAgICBjb25zdCBrZXkgPSBgJHtlbmRwb2ludH1fbWF4X3dpbmRvd19iaXRzYDtcbiAgICAgIGNvbnN0IHdpbmRvd0JpdHMgPVxuICAgICAgICB0eXBlb2YgdGhpcy5wYXJhbXNba2V5XSAhPT0gJ251bWJlcidcbiAgICAgICAgICA/IHpsaWIuWl9ERUZBVUxUX1dJTkRPV0JJVFNcbiAgICAgICAgICA6IHRoaXMucGFyYW1zW2tleV07XG5cbiAgICAgIHRoaXMuX2RlZmxhdGUgPSB6bGliLmNyZWF0ZURlZmxhdGVSYXcoe1xuICAgICAgICAuLi50aGlzLl9vcHRpb25zLnpsaWJEZWZsYXRlT3B0aW9ucyxcbiAgICAgICAgd2luZG93Qml0c1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2RlZmxhdGVba1RvdGFsTGVuZ3RoXSA9IDA7XG4gICAgICB0aGlzLl9kZWZsYXRlW2tCdWZmZXJzXSA9IFtdO1xuXG4gICAgICB0aGlzLl9kZWZsYXRlLm9uKCdkYXRhJywgZGVmbGF0ZU9uRGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGVmbGF0ZVtrQ2FsbGJhY2tdID0gY2FsbGJhY2s7XG5cbiAgICB0aGlzLl9kZWZsYXRlLndyaXRlKGRhdGEpO1xuICAgIHRoaXMuX2RlZmxhdGUuZmx1c2goemxpYi5aX1NZTkNfRkxVU0gsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fZGVmbGF0ZSkge1xuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgZGVmbGF0ZSBzdHJlYW0gd2FzIGNsb3NlZCB3aGlsZSBkYXRhIHdhcyBiZWluZyBwcm9jZXNzZWQuXG4gICAgICAgIC8vXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGEgPSBidWZmZXJVdGlsLmNvbmNhdChcbiAgICAgICAgdGhpcy5fZGVmbGF0ZVtrQnVmZmVyc10sXG4gICAgICAgIHRoaXMuX2RlZmxhdGVba1RvdGFsTGVuZ3RoXVxuICAgICAgKTtcblxuICAgICAgaWYgKGZpbikge1xuICAgICAgICBkYXRhID0gbmV3IEZhc3RCdWZmZXIoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5sZW5ndGggLSA0KTtcbiAgICAgIH1cblxuICAgICAgLy9cbiAgICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBjYWxsYmFjayB3aWxsIG5vdCBiZSBjYWxsZWQgYWdhaW4gaW5cbiAgICAgIC8vIGBQZXJNZXNzYWdlRGVmbGF0ZSNjbGVhbnVwKClgLlxuICAgICAgLy9cbiAgICAgIHRoaXMuX2RlZmxhdGVba0NhbGxiYWNrXSA9IG51bGw7XG5cbiAgICAgIHRoaXMuX2RlZmxhdGVba1RvdGFsTGVuZ3RoXSA9IDA7XG4gICAgICB0aGlzLl9kZWZsYXRlW2tCdWZmZXJzXSA9IFtdO1xuXG4gICAgICBpZiAoZmluICYmIHRoaXMucGFyYW1zW2Ake2VuZHBvaW50fV9ub19jb250ZXh0X3Rha2VvdmVyYF0pIHtcbiAgICAgICAgdGhpcy5fZGVmbGF0ZS5yZXNldCgpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBlck1lc3NhZ2VEZWZsYXRlO1xuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgYHpsaWIuRGVmbGF0ZVJhd2Agc3RyZWFtIGAnZGF0YSdgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBjaHVuayBBIGNodW5rIG9mIGRhdGFcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlZmxhdGVPbkRhdGEoY2h1bmspIHtcbiAgdGhpc1trQnVmZmVyc10ucHVzaChjaHVuayk7XG4gIHRoaXNba1RvdGFsTGVuZ3RoXSArPSBjaHVuay5sZW5ndGg7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgemxpYi5JbmZsYXRlUmF3YCBzdHJlYW0gYCdkYXRhJ2AgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGNodW5rIEEgY2h1bmsgb2YgZGF0YVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5mbGF0ZU9uRGF0YShjaHVuaykge1xuICB0aGlzW2tUb3RhbExlbmd0aF0gKz0gY2h1bmsubGVuZ3RoO1xuXG4gIGlmIChcbiAgICB0aGlzW2tQZXJNZXNzYWdlRGVmbGF0ZV0uX21heFBheWxvYWQgPCAxIHx8XG4gICAgdGhpc1trVG90YWxMZW5ndGhdIDw9IHRoaXNba1Blck1lc3NhZ2VEZWZsYXRlXS5fbWF4UGF5bG9hZFxuICApIHtcbiAgICB0aGlzW2tCdWZmZXJzXS5wdXNoKGNodW5rKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzW2tFcnJvcl0gPSBuZXcgUmFuZ2VFcnJvcignTWF4IHBheWxvYWQgc2l6ZSBleGNlZWRlZCcpO1xuICB0aGlzW2tFcnJvcl0uY29kZSA9ICdXU19FUlJfVU5TVVBQT1JURURfTUVTU0FHRV9MRU5HVEgnO1xuICB0aGlzW2tFcnJvcl1ba1N0YXR1c0NvZGVdID0gMTAwOTtcbiAgdGhpcy5yZW1vdmVMaXN0ZW5lcignZGF0YScsIGluZmxhdGVPbkRhdGEpO1xuXG4gIC8vXG4gIC8vIFRoZSBjaG9pY2UgdG8gZW1wbG95IGB6bGliLnJlc2V0KClgIG92ZXIgYHpsaWIuY2xvc2UoKWAgaXMgZGljdGF0ZWQgYnkgdGhlXG4gIC8vIGZhY3QgdGhhdCBpbiBOb2RlLmpzIHZlcnNpb25zIHByaW9yIHRvIDEzLjEwLjAsIHRoZSBjYWxsYmFjayBmb3JcbiAgLy8gYHpsaWIuZmx1c2goKWAgaXMgbm90IGNhbGxlZCBpZiBgemxpYi5jbG9zZSgpYCBpcyB1c2VkLiBVdGlsaXppbmdcbiAgLy8gYHpsaWIucmVzZXQoKWAgZW5zdXJlcyB0aGF0IGVpdGhlciB0aGUgY2FsbGJhY2sgaXMgaW52b2tlZCBvciBhbiBlcnJvciBpc1xuICAvLyBlbWl0dGVkLlxuICAvL1xuICB0aGlzLnJlc2V0KCk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgemxpYi5JbmZsYXRlUmF3YCBzdHJlYW0gYCdlcnJvcidgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyciBUaGUgZW1pdHRlZCBlcnJvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5mbGF0ZU9uRXJyb3IoZXJyKSB7XG4gIC8vXG4gIC8vIFRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBgWmxpYiNjbG9zZSgpYCBhcyB0aGUgaGFuZGxlIGlzIGF1dG9tYXRpY2FsbHlcbiAgLy8gY2xvc2VkIHdoZW4gYW4gZXJyb3IgaXMgZW1pdHRlZC5cbiAgLy9cbiAgdGhpc1trUGVyTWVzc2FnZURlZmxhdGVdLl9pbmZsYXRlID0gbnVsbDtcblxuICBpZiAodGhpc1trRXJyb3JdKSB7XG4gICAgdGhpc1trQ2FsbGJhY2tdKHRoaXNba0Vycm9yXSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZXJyW2tTdGF0dXNDb2RlXSA9IDEwMDc7XG4gIHRoaXNba0NhbGxiYWNrXShlcnIpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBpc1V0ZjggfSA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG5jb25zdCB7IGhhc0Jsb2IgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbi8vXG4vLyBBbGxvd2VkIHRva2VuIGNoYXJhY3RlcnM6XG4vL1xuLy8gJyEnLCAnIycsICckJywgJyUnLCAnJicsICcnJywgJyonLCAnKycsICctJyxcbi8vICcuJywgMC05LCBBLVosICdeJywgJ18nLCAnYCcsIGEteiwgJ3wnLCAnfidcbi8vXG4vLyB0b2tlbkNoYXJzWzMyXSA9PT0gMCAvLyAnICdcbi8vIHRva2VuQ2hhcnNbMzNdID09PSAxIC8vICchJ1xuLy8gdG9rZW5DaGFyc1szNF0gPT09IDAgLy8gJ1wiJ1xuLy8gLi4uXG4vL1xuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCB0b2tlbkNoYXJzID0gW1xuICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAvLyAwIC0gMTVcbiAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgLy8gMTYgLSAzMVxuICAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAwLCAvLyAzMiAtIDQ3XG4gIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIC8vIDQ4IC0gNjNcbiAgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgLy8gNjQgLSA3OVxuICAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAvLyA4MCAtIDk1XG4gIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIC8vIDk2IC0gMTExXG4gIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDAgLy8gMTEyIC0gMTI3XG5dO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIHN0YXR1cyBjb2RlIGlzIGFsbG93ZWQgaW4gYSBjbG9zZSBmcmFtZS5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gY29kZSBUaGUgc3RhdHVzIGNvZGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgc3RhdHVzIGNvZGUgaXMgdmFsaWQsIGVsc2UgYGZhbHNlYFxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBpc1ZhbGlkU3RhdHVzQ29kZShjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgKGNvZGUgPj0gMTAwMCAmJlxuICAgICAgY29kZSA8PSAxMDE0ICYmXG4gICAgICBjb2RlICE9PSAxMDA0ICYmXG4gICAgICBjb2RlICE9PSAxMDA1ICYmXG4gICAgICBjb2RlICE9PSAxMDA2KSB8fFxuICAgIChjb2RlID49IDMwMDAgJiYgY29kZSA8PSA0OTk5KVxuICApO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGdpdmVuIGJ1ZmZlciBjb250YWlucyBvbmx5IGNvcnJlY3QgVVRGLTguXG4gKiBQb3J0ZWQgZnJvbSBodHRwczovL3d3dy5jbC5jYW0uYWMudWsvJTdFbWdrMjUvdWNzL3V0ZjhfY2hlY2suYyBieVxuICogTWFya3VzIEt1aG4uXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZiBUaGUgYnVmZmVyIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYGJ1ZmAgY29udGFpbnMgb25seSBjb3JyZWN0IFVURi04LCBlbHNlIGBmYWxzZWBcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gX2lzVmFsaWRVVEY4KGJ1Zikge1xuICBjb25zdCBsZW4gPSBidWYubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBpZiAoKGJ1ZltpXSAmIDB4ODApID09PSAwKSB7XG4gICAgICAvLyAweHh4eHh4eFxuICAgICAgaSsrO1xuICAgIH0gZWxzZSBpZiAoKGJ1ZltpXSAmIDB4ZTApID09PSAweGMwKSB7XG4gICAgICAvLyAxMTB4eHh4eCAxMHh4eHh4eFxuICAgICAgaWYgKFxuICAgICAgICBpICsgMSA9PT0gbGVuIHx8XG4gICAgICAgIChidWZbaSArIDFdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpXSAmIDB4ZmUpID09PSAweGMwIC8vIE92ZXJsb25nXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpICs9IDI7XG4gICAgfSBlbHNlIGlmICgoYnVmW2ldICYgMHhmMCkgPT09IDB4ZTApIHtcbiAgICAgIC8vIDExMTB4eHh4IDEweHh4eHh4IDEweHh4eHh4XG4gICAgICBpZiAoXG4gICAgICAgIGkgKyAyID49IGxlbiB8fFxuICAgICAgICAoYnVmW2kgKyAxXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIChidWZbaSArIDJdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpXSA9PT0gMHhlMCAmJiAoYnVmW2kgKyAxXSAmIDB4ZTApID09PSAweDgwKSB8fCAvLyBPdmVybG9uZ1xuICAgICAgICAoYnVmW2ldID09PSAweGVkICYmIChidWZbaSArIDFdICYgMHhlMCkgPT09IDB4YTApIC8vIFN1cnJvZ2F0ZSAoVStEODAwIC0gVStERkZGKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaSArPSAzO1xuICAgIH0gZWxzZSBpZiAoKGJ1ZltpXSAmIDB4ZjgpID09PSAweGYwKSB7XG4gICAgICAvLyAxMTExMHh4eCAxMHh4eHh4eCAxMHh4eHh4eCAxMHh4eHh4eFxuICAgICAgaWYgKFxuICAgICAgICBpICsgMyA+PSBsZW4gfHxcbiAgICAgICAgKGJ1ZltpICsgMV0gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICAoYnVmW2kgKyAyXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIChidWZbaSArIDNdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpXSA9PT0gMHhmMCAmJiAoYnVmW2kgKyAxXSAmIDB4ZjApID09PSAweDgwKSB8fCAvLyBPdmVybG9uZ1xuICAgICAgICAoYnVmW2ldID09PSAweGY0ICYmIGJ1ZltpICsgMV0gPiAweDhmKSB8fFxuICAgICAgICBidWZbaV0gPiAweGY0IC8vID4gVSsxMEZGRkZcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGkgKz0gNDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgYEJsb2JgLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHRlc3RlZFxuICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBgQmxvYmAsIGVsc2UgYGZhbHNlYFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgaGFzQmxvYiAmJlxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICB0eXBlb2YgdmFsdWUuYXJyYXlCdWZmZXIgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgdmFsdWUudHlwZSA9PT0gJ3N0cmluZycgJiZcbiAgICB0eXBlb2YgdmFsdWUuc3RyZWFtID09PSAnZnVuY3Rpb24nICYmXG4gICAgKHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09ICdCbG9iJyB8fFxuICAgICAgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gJ0ZpbGUnKVxuICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNCbG9iLFxuICBpc1ZhbGlkU3RhdHVzQ29kZSxcbiAgaXNWYWxpZFVURjg6IF9pc1ZhbGlkVVRGOCxcbiAgdG9rZW5DaGFyc1xufTtcblxuaWYgKGlzVXRmOCkge1xuICBtb2R1bGUuZXhwb3J0cy5pc1ZhbGlkVVRGOCA9IGZ1bmN0aW9uIChidWYpIHtcbiAgICByZXR1cm4gYnVmLmxlbmd0aCA8IDI0ID8gX2lzVmFsaWRVVEY4KGJ1ZikgOiBpc1V0ZjgoYnVmKTtcbiAgfTtcbn0gLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovIGVsc2UgaWYgKCFwcm9jZXNzLmVudi5XU19OT19VVEZfOF9WQUxJREFURSkge1xuICB0cnkge1xuICAgIGNvbnN0IGlzVmFsaWRVVEY4ID0gcmVxdWlyZSgndXRmLTgtdmFsaWRhdGUnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzLmlzVmFsaWRVVEY4ID0gZnVuY3Rpb24gKGJ1Zikge1xuICAgICAgcmV0dXJuIGJ1Zi5sZW5ndGggPCAzMiA/IF9pc1ZhbGlkVVRGOChidWYpIDogaXNWYWxpZFVURjgoYnVmKTtcbiAgICB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gQ29udGludWUgcmVnYXJkbGVzcyBvZiB0aGUgZXJyb3IuXG4gIH1cbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHsgV3JpdGFibGUgfSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xuXG5jb25zdCBQZXJNZXNzYWdlRGVmbGF0ZSA9IHJlcXVpcmUoJy4vcGVybWVzc2FnZS1kZWZsYXRlJyk7XG5jb25zdCB7XG4gIEJJTkFSWV9UWVBFUyxcbiAgRU1QVFlfQlVGRkVSLFxuICBrU3RhdHVzQ29kZSxcbiAga1dlYlNvY2tldFxufSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCB7IGNvbmNhdCwgdG9BcnJheUJ1ZmZlciwgdW5tYXNrIH0gPSByZXF1aXJlKCcuL2J1ZmZlci11dGlsJyk7XG5jb25zdCB7IGlzVmFsaWRTdGF0dXNDb2RlLCBpc1ZhbGlkVVRGOCB9ID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uJyk7XG5cbmNvbnN0IEZhc3RCdWZmZXIgPSBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdO1xuXG5jb25zdCBHRVRfSU5GTyA9IDA7XG5jb25zdCBHRVRfUEFZTE9BRF9MRU5HVEhfMTYgPSAxO1xuY29uc3QgR0VUX1BBWUxPQURfTEVOR1RIXzY0ID0gMjtcbmNvbnN0IEdFVF9NQVNLID0gMztcbmNvbnN0IEdFVF9EQVRBID0gNDtcbmNvbnN0IElORkxBVElORyA9IDU7XG5jb25zdCBERUZFUl9FVkVOVCA9IDY7XG5cbi8qKlxuICogSHlCaSBSZWNlaXZlciBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyBXcml0YWJsZVxuICovXG5jbGFzcyBSZWNlaXZlciBleHRlbmRzIFdyaXRhYmxlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBSZWNlaXZlciBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHM9dHJ1ZV0gU3BlY2lmaWVzIHdoZXRoZXJcbiAgICogICAgIGFueSBvZiB0aGUgYCdtZXNzYWdlJ2AsIGAncGluZydgLCBhbmQgYCdwb25nJ2AgZXZlbnRzIGNhbiBiZSBlbWl0dGVkXG4gICAqICAgICBtdWx0aXBsZSB0aW1lcyBpbiB0aGUgc2FtZSB0aWNrXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5iaW5hcnlUeXBlPW5vZGVidWZmZXJdIFRoZSB0eXBlIGZvciBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZXh0ZW5zaW9uc10gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG5lZ290aWF0ZWRcbiAgICogICAgIGV4dGVuc2lvbnNcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pc1NlcnZlcj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgdG8gb3BlcmF0ZSBpblxuICAgKiAgICAgY2xpZW50IG9yIHNlcnZlciBtb2RlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhQYXlsb2FkPTBdIFRoZSBtYXhpbXVtIGFsbG93ZWQgbWVzc2FnZSBsZW5ndGhcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5za2lwVVRGOFZhbGlkYXRpb249ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yXG4gICAqICAgICBub3QgdG8gc2tpcCBVVEYtOCB2YWxpZGF0aW9uIGZvciB0ZXh0IGFuZCBjbG9zZSBtZXNzYWdlc1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2FsbG93U3luY2hyb25vdXNFdmVudHMgPVxuICAgICAgb3B0aW9ucy5hbGxvd1N5bmNocm9ub3VzRXZlbnRzICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHNcbiAgICAgICAgOiB0cnVlO1xuICAgIHRoaXMuX2JpbmFyeVR5cGUgPSBvcHRpb25zLmJpbmFyeVR5cGUgfHwgQklOQVJZX1RZUEVTWzBdO1xuICAgIHRoaXMuX2V4dGVuc2lvbnMgPSBvcHRpb25zLmV4dGVuc2lvbnMgfHwge307XG4gICAgdGhpcy5faXNTZXJ2ZXIgPSAhIW9wdGlvbnMuaXNTZXJ2ZXI7XG4gICAgdGhpcy5fbWF4UGF5bG9hZCA9IG9wdGlvbnMubWF4UGF5bG9hZCB8IDA7XG4gICAgdGhpcy5fc2tpcFVURjhWYWxpZGF0aW9uID0gISFvcHRpb25zLnNraXBVVEY4VmFsaWRhdGlvbjtcbiAgICB0aGlzW2tXZWJTb2NrZXRdID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5fYnVmZmVyZWRCeXRlcyA9IDA7XG4gICAgdGhpcy5fYnVmZmVycyA9IFtdO1xuXG4gICAgdGhpcy5fY29tcHJlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3BheWxvYWRMZW5ndGggPSAwO1xuICAgIHRoaXMuX21hc2sgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZnJhZ21lbnRlZCA9IDA7XG4gICAgdGhpcy5fbWFza2VkID0gZmFsc2U7XG4gICAgdGhpcy5fZmluID0gZmFsc2U7XG4gICAgdGhpcy5fb3Bjb2RlID0gMDtcblxuICAgIHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aCA9IDA7XG4gICAgdGhpcy5fbWVzc2FnZUxlbmd0aCA9IDA7XG4gICAgdGhpcy5fZnJhZ21lbnRzID0gW107XG5cbiAgICB0aGlzLl9lcnJvcmVkID0gZmFsc2U7XG4gICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gIH1cblxuICAvKipcbiAgICogSW1wbGVtZW50cyBgV3JpdGFibGUucHJvdG90eXBlLl93cml0ZSgpYC5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGNodW5rIFRoZSBjaHVuayBvZiBkYXRhIHRvIHdyaXRlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbmNvZGluZyBUaGUgY2hhcmFjdGVyIGVuY29kaW5nIG9mIGBjaHVua2BcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF93cml0ZShjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gICAgaWYgKHRoaXMuX29wY29kZSA9PT0gMHgwOCAmJiB0aGlzLl9zdGF0ZSA9PSBHRVRfSU5GTykgcmV0dXJuIGNiKCk7XG5cbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzICs9IGNodW5rLmxlbmd0aDtcbiAgICB0aGlzLl9idWZmZXJzLnB1c2goY2h1bmspO1xuICAgIHRoaXMuc3RhcnRMb29wKGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdW1lcyBgbmAgYnl0ZXMgZnJvbSB0aGUgYnVmZmVyZWQgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG4gVGhlIG51bWJlciBvZiBieXRlcyB0byBjb25zdW1lXG4gICAqIEByZXR1cm4ge0J1ZmZlcn0gVGhlIGNvbnN1bWVkIGJ5dGVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb25zdW1lKG4pIHtcbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzIC09IG47XG5cbiAgICBpZiAobiA9PT0gdGhpcy5fYnVmZmVyc1swXS5sZW5ndGgpIHJldHVybiB0aGlzLl9idWZmZXJzLnNoaWZ0KCk7XG5cbiAgICBpZiAobiA8IHRoaXMuX2J1ZmZlcnNbMF0ubGVuZ3RoKSB7XG4gICAgICBjb25zdCBidWYgPSB0aGlzLl9idWZmZXJzWzBdO1xuICAgICAgdGhpcy5fYnVmZmVyc1swXSA9IG5ldyBGYXN0QnVmZmVyKFxuICAgICAgICBidWYuYnVmZmVyLFxuICAgICAgICBidWYuYnl0ZU9mZnNldCArIG4sXG4gICAgICAgIGJ1Zi5sZW5ndGggLSBuXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gbmV3IEZhc3RCdWZmZXIoYnVmLmJ1ZmZlciwgYnVmLmJ5dGVPZmZzZXQsIG4pO1xuICAgIH1cblxuICAgIGNvbnN0IGRzdCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShuKTtcblxuICAgIGRvIHtcbiAgICAgIGNvbnN0IGJ1ZiA9IHRoaXMuX2J1ZmZlcnNbMF07XG4gICAgICBjb25zdCBvZmZzZXQgPSBkc3QubGVuZ3RoIC0gbjtcblxuICAgICAgaWYgKG4gPj0gYnVmLmxlbmd0aCkge1xuICAgICAgICBkc3Quc2V0KHRoaXMuX2J1ZmZlcnMuc2hpZnQoKSwgb2Zmc2V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRzdC5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmLmJ1ZmZlciwgYnVmLmJ5dGVPZmZzZXQsIG4pLCBvZmZzZXQpO1xuICAgICAgICB0aGlzLl9idWZmZXJzWzBdID0gbmV3IEZhc3RCdWZmZXIoXG4gICAgICAgICAgYnVmLmJ1ZmZlcixcbiAgICAgICAgICBidWYuYnl0ZU9mZnNldCArIG4sXG4gICAgICAgICAgYnVmLmxlbmd0aCAtIG5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgbiAtPSBidWYubGVuZ3RoO1xuICAgIH0gd2hpbGUgKG4gPiAwKTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBwYXJzaW5nIGxvb3AuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGFydExvb3AoY2IpIHtcbiAgICB0aGlzLl9sb29wID0gdHJ1ZTtcblxuICAgIGRvIHtcbiAgICAgIHN3aXRjaCAodGhpcy5fc3RhdGUpIHtcbiAgICAgICAgY2FzZSBHRVRfSU5GTzpcbiAgICAgICAgICB0aGlzLmdldEluZm8oY2IpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEdFVF9QQVlMT0FEX0xFTkdUSF8xNjpcbiAgICAgICAgICB0aGlzLmdldFBheWxvYWRMZW5ndGgxNihjYik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgR0VUX1BBWUxPQURfTEVOR1RIXzY0OlxuICAgICAgICAgIHRoaXMuZ2V0UGF5bG9hZExlbmd0aDY0KGNiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBHRVRfTUFTSzpcbiAgICAgICAgICB0aGlzLmdldE1hc2soKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBHRVRfREFUQTpcbiAgICAgICAgICB0aGlzLmdldERhdGEoY2IpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIElORkxBVElORzpcbiAgICAgICAgY2FzZSBERUZFUl9FVkVOVDpcbiAgICAgICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKHRoaXMuX2xvb3ApO1xuXG4gICAgaWYgKCF0aGlzLl9lcnJvcmVkKSBjYigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBmaXJzdCB0d28gYnl0ZXMgb2YgYSBmcmFtZS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEluZm8oY2IpIHtcbiAgICBpZiAodGhpcy5fYnVmZmVyZWRCeXRlcyA8IDIpIHtcbiAgICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBidWYgPSB0aGlzLmNvbnN1bWUoMik7XG5cbiAgICBpZiAoKGJ1ZlswXSAmIDB4MzApICE9PSAweDAwKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICdSU1YyIGFuZCBSU1YzIG11c3QgYmUgY2xlYXInLFxuICAgICAgICB0cnVlLFxuICAgICAgICAxMDAyLFxuICAgICAgICAnV1NfRVJSX1VORVhQRUNURURfUlNWXzJfMydcbiAgICAgICk7XG5cbiAgICAgIGNiKGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wcmVzc2VkID0gKGJ1ZlswXSAmIDB4NDApID09PSAweDQwO1xuXG4gICAgaWYgKGNvbXByZXNzZWQgJiYgIXRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgJ1JTVjEgbXVzdCBiZSBjbGVhcicsXG4gICAgICAgIHRydWUsXG4gICAgICAgIDEwMDIsXG4gICAgICAgICdXU19FUlJfVU5FWFBFQ1RFRF9SU1ZfMSdcbiAgICAgICk7XG5cbiAgICAgIGNiKGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9maW4gPSAoYnVmWzBdICYgMHg4MCkgPT09IDB4ODA7XG4gICAgdGhpcy5fb3Bjb2RlID0gYnVmWzBdICYgMHgwZjtcbiAgICB0aGlzLl9wYXlsb2FkTGVuZ3RoID0gYnVmWzFdICYgMHg3ZjtcblxuICAgIGlmICh0aGlzLl9vcGNvZGUgPT09IDB4MDApIHtcbiAgICAgIGlmIChjb21wcmVzc2VkKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgICdSU1YxIG11c3QgYmUgY2xlYXInLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgMTAwMixcbiAgICAgICAgICAnV1NfRVJSX1VORVhQRUNURURfUlNWXzEnXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5fZnJhZ21lbnRlZCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgICAnaW52YWxpZCBvcGNvZGUgMCcsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAxMDAyLFxuICAgICAgICAgICdXU19FUlJfSU5WQUxJRF9PUENPREUnXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29wY29kZSA9IHRoaXMuX2ZyYWdtZW50ZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9vcGNvZGUgPT09IDB4MDEgfHwgdGhpcy5fb3Bjb2RlID09PSAweDAyKSB7XG4gICAgICBpZiAodGhpcy5fZnJhZ21lbnRlZCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgICBgaW52YWxpZCBvcGNvZGUgJHt0aGlzLl9vcGNvZGV9YCxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIDEwMDIsXG4gICAgICAgICAgJ1dTX0VSUl9JTlZBTElEX09QQ09ERSdcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29tcHJlc3NlZCA9IGNvbXByZXNzZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9vcGNvZGUgPiAweDA3ICYmIHRoaXMuX29wY29kZSA8IDB4MGIpIHtcbiAgICAgIGlmICghdGhpcy5fZmluKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgICdGSU4gbXVzdCBiZSBzZXQnLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgMTAwMixcbiAgICAgICAgICAnV1NfRVJSX0VYUEVDVEVEX0ZJTidcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbXByZXNzZWQpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgJ1JTVjEgbXVzdCBiZSBjbGVhcicsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAxMDAyLFxuICAgICAgICAgICdXU19FUlJfVU5FWFBFQ1RFRF9SU1ZfMSdcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9wYXlsb2FkTGVuZ3RoID4gMHg3ZCB8fFxuICAgICAgICAodGhpcy5fb3Bjb2RlID09PSAweDA4ICYmIHRoaXMuX3BheWxvYWRMZW5ndGggPT09IDEpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgYGludmFsaWQgcGF5bG9hZCBsZW5ndGggJHt0aGlzLl9wYXlsb2FkTGVuZ3RofWAsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAxMDAyLFxuICAgICAgICAgICdXU19FUlJfSU5WQUxJRF9DT05UUk9MX1BBWUxPQURfTEVOR1RIJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNiKGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgIGBpbnZhbGlkIG9wY29kZSAke3RoaXMuX29wY29kZX1gLFxuICAgICAgICB0cnVlLFxuICAgICAgICAxMDAyLFxuICAgICAgICAnV1NfRVJSX0lOVkFMSURfT1BDT0RFJ1xuICAgICAgKTtcblxuICAgICAgY2IoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZmluICYmICF0aGlzLl9mcmFnbWVudGVkKSB0aGlzLl9mcmFnbWVudGVkID0gdGhpcy5fb3Bjb2RlO1xuICAgIHRoaXMuX21hc2tlZCA9IChidWZbMV0gJiAweDgwKSA9PT0gMHg4MDtcblxuICAgIGlmICh0aGlzLl9pc1NlcnZlcikge1xuICAgICAgaWYgKCF0aGlzLl9tYXNrZWQpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgJ01BU0sgbXVzdCBiZSBzZXQnLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgMTAwMixcbiAgICAgICAgICAnV1NfRVJSX0VYUEVDVEVEX01BU0snXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9tYXNrZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgJ01BU0sgbXVzdCBiZSBjbGVhcicsXG4gICAgICAgIHRydWUsXG4gICAgICAgIDEwMDIsXG4gICAgICAgICdXU19FUlJfVU5FWFBFQ1RFRF9NQVNLJ1xuICAgICAgKTtcblxuICAgICAgY2IoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wYXlsb2FkTGVuZ3RoID09PSAxMjYpIHRoaXMuX3N0YXRlID0gR0VUX1BBWUxPQURfTEVOR1RIXzE2O1xuICAgIGVsc2UgaWYgKHRoaXMuX3BheWxvYWRMZW5ndGggPT09IDEyNykgdGhpcy5fc3RhdGUgPSBHRVRfUEFZTE9BRF9MRU5HVEhfNjQ7XG4gICAgZWxzZSB0aGlzLmhhdmVMZW5ndGgoY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgZXh0ZW5kZWQgcGF5bG9hZCBsZW5ndGggKDcrMTYpLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UGF5bG9hZExlbmd0aDE2KGNiKSB7XG4gICAgaWYgKHRoaXMuX2J1ZmZlcmVkQnl0ZXMgPCAyKSB7XG4gICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcGF5bG9hZExlbmd0aCA9IHRoaXMuY29uc3VtZSgyKS5yZWFkVUludDE2QkUoMCk7XG4gICAgdGhpcy5oYXZlTGVuZ3RoKGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGV4dGVuZGVkIHBheWxvYWQgbGVuZ3RoICg3KzY0KS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFBheWxvYWRMZW5ndGg2NChjYikge1xuICAgIGlmICh0aGlzLl9idWZmZXJlZEJ5dGVzIDwgOCkge1xuICAgICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1ZiA9IHRoaXMuY29uc3VtZSg4KTtcbiAgICBjb25zdCBudW0gPSBidWYucmVhZFVJbnQzMkJFKDApO1xuXG4gICAgLy9cbiAgICAvLyBUaGUgbWF4aW11bSBzYWZlIGludGVnZXIgaW4gSmF2YVNjcmlwdCBpcyAyXjUzIC0gMS4gQW4gZXJyb3IgaXMgcmV0dXJuZWRcbiAgICAvLyBpZiBwYXlsb2FkIGxlbmd0aCBpcyBncmVhdGVyIHRoYW4gdGhpcyBudW1iZXIuXG4gICAgLy9cbiAgICBpZiAobnVtID4gTWF0aC5wb3coMiwgNTMgLSAzMikgLSAxKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICdVbnN1cHBvcnRlZCBXZWJTb2NrZXQgZnJhbWU6IHBheWxvYWQgbGVuZ3RoID4gMl41MyAtIDEnLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgMTAwOSxcbiAgICAgICAgJ1dTX0VSUl9VTlNVUFBPUlRFRF9EQVRBX1BBWUxPQURfTEVOR1RIJ1xuICAgICAgKTtcblxuICAgICAgY2IoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3BheWxvYWRMZW5ndGggPSBudW0gKiBNYXRoLnBvdygyLCAzMikgKyBidWYucmVhZFVJbnQzMkJFKDQpO1xuICAgIHRoaXMuaGF2ZUxlbmd0aChjYik7XG4gIH1cblxuICAvKipcbiAgICogUGF5bG9hZCBsZW5ndGggaGFzIGJlZW4gcmVhZC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhdmVMZW5ndGgoY2IpIHtcbiAgICBpZiAodGhpcy5fcGF5bG9hZExlbmd0aCAmJiB0aGlzLl9vcGNvZGUgPCAweDA4KSB7XG4gICAgICB0aGlzLl90b3RhbFBheWxvYWRMZW5ndGggKz0gdGhpcy5fcGF5bG9hZExlbmd0aDtcbiAgICAgIGlmICh0aGlzLl90b3RhbFBheWxvYWRMZW5ndGggPiB0aGlzLl9tYXhQYXlsb2FkICYmIHRoaXMuX21heFBheWxvYWQgPiAwKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgICdNYXggcGF5bG9hZCBzaXplIGV4Y2VlZGVkJyxcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAxMDA5LFxuICAgICAgICAgICdXU19FUlJfVU5TVVBQT1JURURfTUVTU0FHRV9MRU5HVEgnXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21hc2tlZCkgdGhpcy5fc3RhdGUgPSBHRVRfTUFTSztcbiAgICBlbHNlIHRoaXMuX3N0YXRlID0gR0VUX0RBVEE7XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgbWFzayBieXRlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE1hc2soKSB7XG4gICAgaWYgKHRoaXMuX2J1ZmZlcmVkQnl0ZXMgPCA0KSB7XG4gICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbWFzayA9IHRoaXMuY29uc3VtZSg0KTtcbiAgICB0aGlzLl9zdGF0ZSA9IEdFVF9EQVRBO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIGRhdGEgYnl0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXREYXRhKGNiKSB7XG4gICAgbGV0IGRhdGEgPSBFTVBUWV9CVUZGRVI7XG5cbiAgICBpZiAodGhpcy5fcGF5bG9hZExlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuX2J1ZmZlcmVkQnl0ZXMgPCB0aGlzLl9wYXlsb2FkTGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBkYXRhID0gdGhpcy5jb25zdW1lKHRoaXMuX3BheWxvYWRMZW5ndGgpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX21hc2tlZCAmJlxuICAgICAgICAodGhpcy5fbWFza1swXSB8IHRoaXMuX21hc2tbMV0gfCB0aGlzLl9tYXNrWzJdIHwgdGhpcy5fbWFza1szXSkgIT09IDBcbiAgICAgICkge1xuICAgICAgICB1bm1hc2soZGF0YSwgdGhpcy5fbWFzayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wY29kZSA+IDB4MDcpIHtcbiAgICAgIHRoaXMuY29udHJvbE1lc3NhZ2UoZGF0YSwgY2IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb21wcmVzc2VkKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IElORkxBVElORztcbiAgICAgIHRoaXMuZGVjb21wcmVzcyhkYXRhLCBjYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBtZXNzYWdlIGlzIG5vdCBjb21wcmVzc2VkIHNvIGl0cyBsZW5ndGggaXMgdGhlIHN1bSBvZiB0aGUgcGF5bG9hZFxuICAgICAgLy8gbGVuZ3RoIG9mIGFsbCBmcmFnbWVudHMuXG4gICAgICAvL1xuICAgICAgdGhpcy5fbWVzc2FnZUxlbmd0aCA9IHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aDtcbiAgICAgIHRoaXMuX2ZyYWdtZW50cy5wdXNoKGRhdGEpO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YU1lc3NhZ2UoY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY29tcHJlc3NlcyBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBDb21wcmVzc2VkIGRhdGFcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlY29tcHJlc3MoZGF0YSwgY2IpIHtcbiAgICBjb25zdCBwZXJNZXNzYWdlRGVmbGF0ZSA9IHRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV07XG5cbiAgICBwZXJNZXNzYWdlRGVmbGF0ZS5kZWNvbXByZXNzKGRhdGEsIHRoaXMuX2ZpbiwgKGVyciwgYnVmKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKTtcblxuICAgICAgaWYgKGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fbWVzc2FnZUxlbmd0aCArPSBidWYubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5fbWVzc2FnZUxlbmd0aCA+IHRoaXMuX21heFBheWxvYWQgJiYgdGhpcy5fbWF4UGF5bG9hZCA+IDApIHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgICAgJ01heCBwYXlsb2FkIHNpemUgZXhjZWVkZWQnLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAxMDA5LFxuICAgICAgICAgICAgJ1dTX0VSUl9VTlNVUFBPUlRFRF9NRVNTQUdFX0xFTkdUSCdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2ZyYWdtZW50cy5wdXNoKGJ1Zik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YU1lc3NhZ2UoY2IpO1xuICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBHRVRfSU5GTykgdGhpcy5zdGFydExvb3AoY2IpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSBkYXRhIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkYXRhTWVzc2FnZShjYikge1xuICAgIGlmICghdGhpcy5fZmluKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IEdFVF9JTkZPO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VMZW5ndGggPSB0aGlzLl9tZXNzYWdlTGVuZ3RoO1xuICAgIGNvbnN0IGZyYWdtZW50cyA9IHRoaXMuX2ZyYWdtZW50cztcblxuICAgIHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aCA9IDA7XG4gICAgdGhpcy5fbWVzc2FnZUxlbmd0aCA9IDA7XG4gICAgdGhpcy5fZnJhZ21lbnRlZCA9IDA7XG4gICAgdGhpcy5fZnJhZ21lbnRzID0gW107XG5cbiAgICBpZiAodGhpcy5fb3Bjb2RlID09PSAyKSB7XG4gICAgICBsZXQgZGF0YTtcblxuICAgICAgaWYgKHRoaXMuX2JpbmFyeVR5cGUgPT09ICdub2RlYnVmZmVyJykge1xuICAgICAgICBkYXRhID0gY29uY2F0KGZyYWdtZW50cywgbWVzc2FnZUxlbmd0aCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JpbmFyeVR5cGUgPT09ICdhcnJheWJ1ZmZlcicpIHtcbiAgICAgICAgZGF0YSA9IHRvQXJyYXlCdWZmZXIoY29uY2F0KGZyYWdtZW50cywgbWVzc2FnZUxlbmd0aCkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9iaW5hcnlUeXBlID09PSAnYmxvYicpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBCbG9iKGZyYWdtZW50cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gZnJhZ21lbnRzO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYWxsb3dTeW5jaHJvbm91c0V2ZW50cykge1xuICAgICAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCBkYXRhLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gREVGRVJfRVZFTlQ7XG4gICAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgZGF0YSwgdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgICAgICAgICB0aGlzLnN0YXJ0TG9vcChjYik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBidWYgPSBjb25jYXQoZnJhZ21lbnRzLCBtZXNzYWdlTGVuZ3RoKTtcblxuICAgICAgaWYgKCF0aGlzLl9za2lwVVRGOFZhbGlkYXRpb24gJiYgIWlzVmFsaWRVVEY4KGJ1ZikpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIEVycm9yLFxuICAgICAgICAgICdpbnZhbGlkIFVURi04IHNlcXVlbmNlJyxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIDEwMDcsXG4gICAgICAgICAgJ1dTX0VSUl9JTlZBTElEX1VURjgnXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5GTEFUSU5HIHx8IHRoaXMuX2FsbG93U3luY2hyb25vdXNFdmVudHMpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgYnVmLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IERFRkVSX0VWRU5UO1xuICAgICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZW1pdCgnbWVzc2FnZScsIGJ1ZiwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gICAgICAgICAgdGhpcy5zdGFydExvb3AoY2IpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhIGNvbnRyb2wgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgRGF0YSB0byBoYW5kbGVcbiAgICogQHJldHVybiB7KEVycm9yfFJhbmdlRXJyb3J8dW5kZWZpbmVkKX0gQSBwb3NzaWJsZSBlcnJvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29udHJvbE1lc3NhZ2UoZGF0YSwgY2IpIHtcbiAgICBpZiAodGhpcy5fb3Bjb2RlID09PSAweDA4KSB7XG4gICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVtaXQoJ2NvbmNsdWRlJywgMTAwNSwgRU1QVFlfQlVGRkVSKTtcbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBkYXRhLnJlYWRVSW50MTZCRSgwKTtcblxuICAgICAgICBpZiAoIWlzVmFsaWRTdGF0dXNDb2RlKGNvZGUpKSB7XG4gICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgICAgIGBpbnZhbGlkIHN0YXR1cyBjb2RlICR7Y29kZX1gLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIDEwMDIsXG4gICAgICAgICAgICAnV1NfRVJSX0lOVkFMSURfQ0xPU0VfQ09ERSdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1ZiA9IG5ldyBGYXN0QnVmZmVyKFxuICAgICAgICAgIGRhdGEuYnVmZmVyLFxuICAgICAgICAgIGRhdGEuYnl0ZU9mZnNldCArIDIsXG4gICAgICAgICAgZGF0YS5sZW5ndGggLSAyXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9za2lwVVRGOFZhbGlkYXRpb24gJiYgIWlzVmFsaWRVVEY4KGJ1ZikpIHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgICBFcnJvcixcbiAgICAgICAgICAgICdpbnZhbGlkIFVURi04IHNlcXVlbmNlJyxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAxMDA3LFxuICAgICAgICAgICAgJ1dTX0VSUl9JTlZBTElEX1VURjgnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNiKGVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW1pdCgnY29uY2x1ZGUnLCBjb2RlLCBidWYpO1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zdGF0ZSA9IEdFVF9JTkZPO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9hbGxvd1N5bmNocm9ub3VzRXZlbnRzKSB7XG4gICAgICB0aGlzLmVtaXQodGhpcy5fb3Bjb2RlID09PSAweDA5ID8gJ3BpbmcnIDogJ3BvbmcnLCBkYXRhKTtcbiAgICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gREVGRVJfRVZFTlQ7XG4gICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQodGhpcy5fb3Bjb2RlID09PSAweDA5ID8gJ3BpbmcnIDogJ3BvbmcnLCBkYXRhKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgICAgICAgdGhpcy5zdGFydExvb3AoY2IpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBhbiBlcnJvciBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24obmV3OkVycm9yfFJhbmdlRXJyb3IpfSBFcnJvckN0b3IgVGhlIGVycm9yIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJlZml4IFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBhZGQgYSBkZWZhdWx0IHByZWZpeCB0b1xuICAgKiAgICAgYG1lc3NhZ2VgXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNDb2RlIFRoZSBzdGF0dXMgY29kZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXJyb3JDb2RlIFRoZSBleHBvc2VkIGVycm9yIGNvZGVcbiAgICogQHJldHVybiB7KEVycm9yfFJhbmdlRXJyb3IpfSBUaGUgZXJyb3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZUVycm9yKEVycm9yQ3RvciwgbWVzc2FnZSwgcHJlZml4LCBzdGF0dXNDb2RlLCBlcnJvckNvZGUpIHtcbiAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgdGhpcy5fZXJyb3JlZCA9IHRydWU7XG5cbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3JDdG9yKFxuICAgICAgcHJlZml4ID8gYEludmFsaWQgV2ViU29ja2V0IGZyYW1lOiAke21lc3NhZ2V9YCA6IG1lc3NhZ2VcbiAgICApO1xuXG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoZXJyLCB0aGlzLmNyZWF0ZUVycm9yKTtcbiAgICBlcnIuY29kZSA9IGVycm9yQ29kZTtcbiAgICBlcnJba1N0YXR1c0NvZGVdID0gc3RhdHVzQ29kZTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjZWl2ZXI7XG4iLCAiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbXCJlcnJvclwiLCB7IFwidmFyc0lnbm9yZVBhdHRlcm5cIjogXCJeRHVwbGV4XCIgfV0gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7IER1cGxleCB9ID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5jb25zdCB7IHJhbmRvbUZpbGxTeW5jIH0gPSByZXF1aXJlKCdjcnlwdG8nKTtcbmNvbnN0IHtcbiAgdHlwZXM6IHsgaXNVaW50OEFycmF5IH1cbn0gPSByZXF1aXJlKCd1dGlsJyk7XG5cbmNvbnN0IFBlck1lc3NhZ2VEZWZsYXRlID0gcmVxdWlyZSgnLi9wZXJtZXNzYWdlLWRlZmxhdGUnKTtcbmNvbnN0IHsgRU1QVFlfQlVGRkVSLCBrV2ViU29ja2V0LCBOT09QIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuY29uc3QgeyBpc0Jsb2IsIGlzVmFsaWRTdGF0dXNDb2RlIH0gPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcbmNvbnN0IHsgbWFzazogYXBwbHlNYXNrLCB0b0J1ZmZlciB9ID0gcmVxdWlyZSgnLi9idWZmZXItdXRpbCcpO1xuXG5jb25zdCBrQnl0ZUxlbmd0aCA9IFN5bWJvbCgna0J5dGVMZW5ndGgnKTtcbmNvbnN0IG1hc2tCdWZmZXIgPSBCdWZmZXIuYWxsb2MoNCk7XG5jb25zdCBSQU5ET01fUE9PTF9TSVpFID0gOCAqIDEwMjQ7XG5sZXQgcmFuZG9tUG9vbDtcbmxldCByYW5kb21Qb29sUG9pbnRlciA9IFJBTkRPTV9QT09MX1NJWkU7XG5cbmNvbnN0IERFRkFVTFQgPSAwO1xuY29uc3QgREVGTEFUSU5HID0gMTtcbmNvbnN0IEdFVF9CTE9CX0RBVEEgPSAyO1xuXG4vKipcbiAqIEh5QmkgU2VuZGVyIGltcGxlbWVudGF0aW9uLlxuICovXG5jbGFzcyBTZW5kZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIFNlbmRlciBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtEdXBsZXh9IHNvY2tldCBUaGUgY29ubmVjdGlvbiBzb2NrZXRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtleHRlbnNpb25zXSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgbmVnb3RpYXRlZCBleHRlbnNpb25zXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtnZW5lcmF0ZU1hc2tdIFRoZSBmdW5jdGlvbiB1c2VkIHRvIGdlbmVyYXRlIHRoZSBtYXNraW5nXG4gICAqICAgICBrZXlcbiAgICovXG4gIGNvbnN0cnVjdG9yKHNvY2tldCwgZXh0ZW5zaW9ucywgZ2VuZXJhdGVNYXNrKSB7XG4gICAgdGhpcy5fZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnMgfHwge307XG5cbiAgICBpZiAoZ2VuZXJhdGVNYXNrKSB7XG4gICAgICB0aGlzLl9nZW5lcmF0ZU1hc2sgPSBnZW5lcmF0ZU1hc2s7XG4gICAgICB0aGlzLl9tYXNrQnVmZmVyID0gQnVmZmVyLmFsbG9jKDQpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvY2tldCA9IHNvY2tldDtcblxuICAgIHRoaXMuX2ZpcnN0RnJhZ21lbnQgPSB0cnVlO1xuICAgIHRoaXMuX2NvbXByZXNzID0gZmFsc2U7XG5cbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzID0gMDtcbiAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIHRoaXMuX3N0YXRlID0gREVGQVVMVDtcbiAgICB0aGlzLm9uZXJyb3IgPSBOT09QO1xuICAgIHRoaXNba1dlYlNvY2tldF0gPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRnJhbWVzIGEgcGllY2Ugb2YgZGF0YSBhY2NvcmRpbmcgdG8gdGhlIEh5QmkgV2ViU29ja2V0IHByb3RvY29sLlxuICAgKlxuICAgKiBAcGFyYW0geyhCdWZmZXJ8U3RyaW5nKX0gZGF0YSBUaGUgZGF0YSB0byBmcmFtZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZpbj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIHNldCB0aGVcbiAgICogICAgIEZJTiBiaXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMuZ2VuZXJhdGVNYXNrXSBUaGUgZnVuY3Rpb24gdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAgICogICAgIG1hc2tpbmcga2V5XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWFzaz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2tcbiAgICogICAgIGBkYXRhYFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gW29wdGlvbnMubWFza0J1ZmZlcl0gVGhlIGJ1ZmZlciB1c2VkIHRvIHN0b3JlIHRoZSBtYXNraW5nXG4gICAqICAgICBrZXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMub3Bjb2RlIFRoZSBvcGNvZGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yZWFkT25seT1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGNhbiBiZVxuICAgKiAgICAgbW9kaWZpZWRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yc3YxPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gc2V0IHRoZVxuICAgKiAgICAgUlNWMSBiaXRcbiAgICogQHJldHVybiB7KEJ1ZmZlcnxTdHJpbmcpW119IFRoZSBmcmFtZWQgZGF0YVxuICAgKiBAcHVibGljXG4gICAqL1xuICBzdGF0aWMgZnJhbWUoZGF0YSwgb3B0aW9ucykge1xuICAgIGxldCBtYXNrO1xuICAgIGxldCBtZXJnZSA9IGZhbHNlO1xuICAgIGxldCBvZmZzZXQgPSAyO1xuICAgIGxldCBza2lwTWFza2luZyA9IGZhbHNlO1xuXG4gICAgaWYgKG9wdGlvbnMubWFzaykge1xuICAgICAgbWFzayA9IG9wdGlvbnMubWFza0J1ZmZlciB8fCBtYXNrQnVmZmVyO1xuXG4gICAgICBpZiAob3B0aW9ucy5nZW5lcmF0ZU1hc2spIHtcbiAgICAgICAgb3B0aW9ucy5nZW5lcmF0ZU1hc2sobWFzayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmFuZG9tUG9vbFBvaW50ZXIgPT09IFJBTkRPTV9QT09MX1NJWkUpIHtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAgKi9cbiAgICAgICAgICBpZiAocmFuZG9tUG9vbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBsYXppbHkgaW5pdGlhbGl6ZWQgYmVjYXVzZSBzZXJ2ZXItc2VudCBmcmFtZXMgbXVzdCBub3RcbiAgICAgICAgICAgIC8vIGJlIG1hc2tlZCBzbyBpdCBtYXkgbmV2ZXIgYmUgdXNlZC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICByYW5kb21Qb29sID0gQnVmZmVyLmFsbG9jKFJBTkRPTV9QT09MX1NJWkUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJhbmRvbUZpbGxTeW5jKHJhbmRvbVBvb2wsIDAsIFJBTkRPTV9QT09MX1NJWkUpO1xuICAgICAgICAgIHJhbmRvbVBvb2xQb2ludGVyID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hc2tbMF0gPSByYW5kb21Qb29sW3JhbmRvbVBvb2xQb2ludGVyKytdO1xuICAgICAgICBtYXNrWzFdID0gcmFuZG9tUG9vbFtyYW5kb21Qb29sUG9pbnRlcisrXTtcbiAgICAgICAgbWFza1syXSA9IHJhbmRvbVBvb2xbcmFuZG9tUG9vbFBvaW50ZXIrK107XG4gICAgICAgIG1hc2tbM10gPSByYW5kb21Qb29sW3JhbmRvbVBvb2xQb2ludGVyKytdO1xuICAgICAgfVxuXG4gICAgICBza2lwTWFza2luZyA9IChtYXNrWzBdIHwgbWFza1sxXSB8IG1hc2tbMl0gfCBtYXNrWzNdKSA9PT0gMDtcbiAgICAgIG9mZnNldCA9IDY7XG4gICAgfVxuXG4gICAgbGV0IGRhdGFMZW5ndGg7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoXG4gICAgICAgICghb3B0aW9ucy5tYXNrIHx8IHNraXBNYXNraW5nKSAmJlxuICAgICAgICBvcHRpb25zW2tCeXRlTGVuZ3RoXSAhPT0gdW5kZWZpbmVkXG4gICAgICApIHtcbiAgICAgICAgZGF0YUxlbmd0aCA9IG9wdGlvbnNba0J5dGVMZW5ndGhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IEJ1ZmZlci5mcm9tKGRhdGEpO1xuICAgICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aDtcbiAgICAgIG1lcmdlID0gb3B0aW9ucy5tYXNrICYmIG9wdGlvbnMucmVhZE9ubHkgJiYgIXNraXBNYXNraW5nO1xuICAgIH1cblxuICAgIGxldCBwYXlsb2FkTGVuZ3RoID0gZGF0YUxlbmd0aDtcblxuICAgIGlmIChkYXRhTGVuZ3RoID49IDY1NTM2KSB7XG4gICAgICBvZmZzZXQgKz0gODtcbiAgICAgIHBheWxvYWRMZW5ndGggPSAxMjc7XG4gICAgfSBlbHNlIGlmIChkYXRhTGVuZ3RoID4gMTI1KSB7XG4gICAgICBvZmZzZXQgKz0gMjtcbiAgICAgIHBheWxvYWRMZW5ndGggPSAxMjY7XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKG1lcmdlID8gZGF0YUxlbmd0aCArIG9mZnNldCA6IG9mZnNldCk7XG5cbiAgICB0YXJnZXRbMF0gPSBvcHRpb25zLmZpbiA/IG9wdGlvbnMub3Bjb2RlIHwgMHg4MCA6IG9wdGlvbnMub3Bjb2RlO1xuICAgIGlmIChvcHRpb25zLnJzdjEpIHRhcmdldFswXSB8PSAweDQwO1xuXG4gICAgdGFyZ2V0WzFdID0gcGF5bG9hZExlbmd0aDtcblxuICAgIGlmIChwYXlsb2FkTGVuZ3RoID09PSAxMjYpIHtcbiAgICAgIHRhcmdldC53cml0ZVVJbnQxNkJFKGRhdGFMZW5ndGgsIDIpO1xuICAgIH0gZWxzZSBpZiAocGF5bG9hZExlbmd0aCA9PT0gMTI3KSB7XG4gICAgICB0YXJnZXRbMl0gPSB0YXJnZXRbM10gPSAwO1xuICAgICAgdGFyZ2V0LndyaXRlVUludEJFKGRhdGFMZW5ndGgsIDQsIDYpO1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5tYXNrKSByZXR1cm4gW3RhcmdldCwgZGF0YV07XG5cbiAgICB0YXJnZXRbMV0gfD0gMHg4MDtcbiAgICB0YXJnZXRbb2Zmc2V0IC0gNF0gPSBtYXNrWzBdO1xuICAgIHRhcmdldFtvZmZzZXQgLSAzXSA9IG1hc2tbMV07XG4gICAgdGFyZ2V0W29mZnNldCAtIDJdID0gbWFza1syXTtcbiAgICB0YXJnZXRbb2Zmc2V0IC0gMV0gPSBtYXNrWzNdO1xuXG4gICAgaWYgKHNraXBNYXNraW5nKSByZXR1cm4gW3RhcmdldCwgZGF0YV07XG5cbiAgICBpZiAobWVyZ2UpIHtcbiAgICAgIGFwcGx5TWFzayhkYXRhLCBtYXNrLCB0YXJnZXQsIG9mZnNldCwgZGF0YUxlbmd0aCk7XG4gICAgICByZXR1cm4gW3RhcmdldF07XG4gICAgfVxuXG4gICAgYXBwbHlNYXNrKGRhdGEsIG1hc2ssIGRhdGEsIDAsIGRhdGFMZW5ndGgpO1xuICAgIHJldHVybiBbdGFyZ2V0LCBkYXRhXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIGNsb3NlIG1lc3NhZ2UgdG8gdGhlIG90aGVyIHBlZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbY29kZV0gVGhlIHN0YXR1cyBjb2RlIGNvbXBvbmVudCBvZiB0aGUgYm9keVxuICAgKiBAcGFyYW0geyhTdHJpbmd8QnVmZmVyKX0gW2RhdGFdIFRoZSBtZXNzYWdlIGNvbXBvbmVudCBvZiB0aGUgYm9keVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttYXNrPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFzayB0aGUgbWVzc2FnZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNsb3NlKGNvZGUsIGRhdGEsIG1hc2ssIGNiKSB7XG4gICAgbGV0IGJ1ZjtcblxuICAgIGlmIChjb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGJ1ZiA9IEVNUFRZX0JVRkZFUjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb2RlICE9PSAnbnVtYmVyJyB8fCAhaXNWYWxpZFN0YXR1c0NvZGUoY29kZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSB2YWxpZCBlcnJvciBjb2RlIG51bWJlcicpO1xuICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkIHx8ICFkYXRhLmxlbmd0aCkge1xuICAgICAgYnVmID0gQnVmZmVyLmFsbG9jVW5zYWZlKDIpO1xuICAgICAgYnVmLndyaXRlVUludDE2QkUoY29kZSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpO1xuXG4gICAgICBpZiAobGVuZ3RoID4gMTIzKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgbWVzc2FnZSBtdXN0IG5vdCBiZSBncmVhdGVyIHRoYW4gMTIzIGJ5dGVzJyk7XG4gICAgICB9XG5cbiAgICAgIGJ1ZiA9IEJ1ZmZlci5hbGxvY1Vuc2FmZSgyICsgbGVuZ3RoKTtcbiAgICAgIGJ1Zi53cml0ZVVJbnQxNkJFKGNvZGUsIDApO1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGJ1Zi53cml0ZShkYXRhLCAyKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNVaW50OEFycmF5KGRhdGEpKSB7XG4gICAgICAgIGJ1Zi5zZXQoZGF0YSwgMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZyBvciBhIFVpbnQ4QXJyYXknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgW2tCeXRlTGVuZ3RoXTogYnVmLmxlbmd0aCxcbiAgICAgIGZpbjogdHJ1ZSxcbiAgICAgIGdlbmVyYXRlTWFzazogdGhpcy5fZ2VuZXJhdGVNYXNrLFxuICAgICAgbWFzayxcbiAgICAgIG1hc2tCdWZmZXI6IHRoaXMuX21hc2tCdWZmZXIsXG4gICAgICBvcGNvZGU6IDB4MDgsXG4gICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICByc3YxOiBmYWxzZVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5fc3RhdGUgIT09IERFRkFVTFQpIHtcbiAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5kaXNwYXRjaCwgYnVmLCBmYWxzZSwgb3B0aW9ucywgY2JdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZW5kRnJhbWUoU2VuZGVyLmZyYW1lKGJ1Ziwgb3B0aW9ucyksIGNiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBwaW5nIG1lc3NhZ2UgdG8gdGhlIG90aGVyIHBlZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW21hc2s9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHBpbmcoZGF0YSwgbWFzaywgY2IpIHtcbiAgICBsZXQgYnl0ZUxlbmd0aDtcbiAgICBsZXQgcmVhZE9ubHk7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBieXRlTGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSk7XG4gICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaXNCbG9iKGRhdGEpKSB7XG4gICAgICBieXRlTGVuZ3RoID0gZGF0YS5zaXplO1xuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHRvQnVmZmVyKGRhdGEpO1xuICAgICAgYnl0ZUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgcmVhZE9ubHkgPSB0b0J1ZmZlci5yZWFkT25seTtcbiAgICB9XG5cbiAgICBpZiAoYnl0ZUxlbmd0aCA+IDEyNSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSBkYXRhIHNpemUgbXVzdCBub3QgYmUgZ3JlYXRlciB0aGFuIDEyNSBieXRlcycpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBba0J5dGVMZW5ndGhdOiBieXRlTGVuZ3RoLFxuICAgICAgZmluOiB0cnVlLFxuICAgICAgZ2VuZXJhdGVNYXNrOiB0aGlzLl9nZW5lcmF0ZU1hc2ssXG4gICAgICBtYXNrLFxuICAgICAgbWFza0J1ZmZlcjogdGhpcy5fbWFza0J1ZmZlcixcbiAgICAgIG9wY29kZTogMHgwOSxcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgcnN2MTogZmFsc2VcbiAgICB9O1xuXG4gICAgaWYgKGlzQmxvYihkYXRhKSkge1xuICAgICAgaWYgKHRoaXMuX3N0YXRlICE9PSBERUZBVUxUKSB7XG4gICAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5nZXRCbG9iRGF0YSwgZGF0YSwgZmFsc2UsIG9wdGlvbnMsIGNiXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdldEJsb2JEYXRhKGRhdGEsIGZhbHNlLCBvcHRpb25zLCBjYik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSAhPT0gREVGQVVMVCkge1xuICAgICAgdGhpcy5lbnF1ZXVlKFt0aGlzLmRpc3BhdGNoLCBkYXRhLCBmYWxzZSwgb3B0aW9ucywgY2JdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZW5kRnJhbWUoU2VuZGVyLmZyYW1lKGRhdGEsIG9wdGlvbnMpLCBjYik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgcG9uZyBtZXNzYWdlIHRvIHRoZSBvdGhlciBwZWVyLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgVGhlIG1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttYXNrPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFzayBgZGF0YWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBDYWxsYmFja1xuICAgKiBAcHVibGljXG4gICAqL1xuICBwb25nKGRhdGEsIG1hc2ssIGNiKSB7XG4gICAgbGV0IGJ5dGVMZW5ndGg7XG4gICAgbGV0IHJlYWRPbmx5O1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgYnl0ZUxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpO1xuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGlzQmxvYihkYXRhKSkge1xuICAgICAgYnl0ZUxlbmd0aCA9IGRhdGEuc2l6ZTtcbiAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSB0b0J1ZmZlcihkYXRhKTtcbiAgICAgIGJ5dGVMZW5ndGggPSBkYXRhLmxlbmd0aDtcbiAgICAgIHJlYWRPbmx5ID0gdG9CdWZmZXIucmVhZE9ubHk7XG4gICAgfVxuXG4gICAgaWYgKGJ5dGVMZW5ndGggPiAxMjUpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgZGF0YSBzaXplIG11c3Qgbm90IGJlIGdyZWF0ZXIgdGhhbiAxMjUgYnl0ZXMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgW2tCeXRlTGVuZ3RoXTogYnl0ZUxlbmd0aCxcbiAgICAgIGZpbjogdHJ1ZSxcbiAgICAgIGdlbmVyYXRlTWFzazogdGhpcy5fZ2VuZXJhdGVNYXNrLFxuICAgICAgbWFzayxcbiAgICAgIG1hc2tCdWZmZXI6IHRoaXMuX21hc2tCdWZmZXIsXG4gICAgICBvcGNvZGU6IDB4MGEsXG4gICAgICByZWFkT25seSxcbiAgICAgIHJzdjE6IGZhbHNlXG4gICAgfTtcblxuICAgIGlmIChpc0Jsb2IoZGF0YSkpIHtcbiAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gREVGQVVMVCkge1xuICAgICAgICB0aGlzLmVucXVldWUoW3RoaXMuZ2V0QmxvYkRhdGEsIGRhdGEsIGZhbHNlLCBvcHRpb25zLCBjYl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRCbG9iRGF0YShkYXRhLCBmYWxzZSwgb3B0aW9ucywgY2IpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgIT09IERFRkFVTFQpIHtcbiAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5kaXNwYXRjaCwgZGF0YSwgZmFsc2UsIG9wdGlvbnMsIGNiXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VuZEZyYW1lKFNlbmRlci5mcmFtZShkYXRhLCBvcHRpb25zKSwgY2IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIGRhdGEgbWVzc2FnZSB0byB0aGUgb3RoZXIgcGVlci5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5iaW5hcnk9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIGBkYXRhYCBpcyBiaW5hcnlcbiAgICogICAgIG9yIHRleHRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jb21wcmVzcz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvXG4gICAqICAgICBjb21wcmVzcyBgZGF0YWBcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5maW49ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmcmFnbWVudCBpcyB0aGVcbiAgICogICAgIGxhc3Qgb25lXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWFzaz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2tcbiAgICogICAgIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHNlbmQoZGF0YSwgb3B0aW9ucywgY2IpIHtcbiAgICBjb25zdCBwZXJNZXNzYWdlRGVmbGF0ZSA9IHRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV07XG4gICAgbGV0IG9wY29kZSA9IG9wdGlvbnMuYmluYXJ5ID8gMiA6IDE7XG4gICAgbGV0IHJzdjEgPSBvcHRpb25zLmNvbXByZXNzO1xuXG4gICAgbGV0IGJ5dGVMZW5ndGg7XG4gICAgbGV0IHJlYWRPbmx5O1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgYnl0ZUxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpO1xuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGlzQmxvYihkYXRhKSkge1xuICAgICAgYnl0ZUxlbmd0aCA9IGRhdGEuc2l6ZTtcbiAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSB0b0J1ZmZlcihkYXRhKTtcbiAgICAgIGJ5dGVMZW5ndGggPSBkYXRhLmxlbmd0aDtcbiAgICAgIHJlYWRPbmx5ID0gdG9CdWZmZXIucmVhZE9ubHk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ZpcnN0RnJhZ21lbnQpIHtcbiAgICAgIHRoaXMuX2ZpcnN0RnJhZ21lbnQgPSBmYWxzZTtcbiAgICAgIGlmIChcbiAgICAgICAgcnN2MSAmJlxuICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZSAmJlxuICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZS5wYXJhbXNbXG4gICAgICAgICAgcGVyTWVzc2FnZURlZmxhdGUuX2lzU2VydmVyXG4gICAgICAgICAgICA/ICdzZXJ2ZXJfbm9fY29udGV4dF90YWtlb3ZlcidcbiAgICAgICAgICAgIDogJ2NsaWVudF9ub19jb250ZXh0X3Rha2VvdmVyJ1xuICAgICAgICBdXG4gICAgICApIHtcbiAgICAgICAgcnN2MSA9IGJ5dGVMZW5ndGggPj0gcGVyTWVzc2FnZURlZmxhdGUuX3RocmVzaG9sZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbXByZXNzID0gcnN2MTtcbiAgICB9IGVsc2Uge1xuICAgICAgcnN2MSA9IGZhbHNlO1xuICAgICAgb3Bjb2RlID0gMDtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5maW4pIHRoaXMuX2ZpcnN0RnJhZ21lbnQgPSB0cnVlO1xuXG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIFtrQnl0ZUxlbmd0aF06IGJ5dGVMZW5ndGgsXG4gICAgICBmaW46IG9wdGlvbnMuZmluLFxuICAgICAgZ2VuZXJhdGVNYXNrOiB0aGlzLl9nZW5lcmF0ZU1hc2ssXG4gICAgICBtYXNrOiBvcHRpb25zLm1hc2ssXG4gICAgICBtYXNrQnVmZmVyOiB0aGlzLl9tYXNrQnVmZmVyLFxuICAgICAgb3Bjb2RlLFxuICAgICAgcmVhZE9ubHksXG4gICAgICByc3YxXG4gICAgfTtcblxuICAgIGlmIChpc0Jsb2IoZGF0YSkpIHtcbiAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gREVGQVVMVCkge1xuICAgICAgICB0aGlzLmVucXVldWUoW3RoaXMuZ2V0QmxvYkRhdGEsIGRhdGEsIHRoaXMuX2NvbXByZXNzLCBvcHRzLCBjYl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRCbG9iRGF0YShkYXRhLCB0aGlzLl9jb21wcmVzcywgb3B0cywgY2IpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgIT09IERFRkFVTFQpIHtcbiAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5kaXNwYXRjaCwgZGF0YSwgdGhpcy5fY29tcHJlc3MsIG9wdHMsIGNiXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2goZGF0YSwgdGhpcy5fY29tcHJlc3MsIG9wdHMsIGNiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY29udGVudHMgb2YgYSBibG9iIGFzIGJpbmFyeSBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge0Jsb2J9IGJsb2IgVGhlIGJsb2JcbiAgICogQHBhcmFtIHtCb29sZWFufSBbY29tcHJlc3M9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBjb21wcmVzc1xuICAgKiAgICAgdGhlIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5maW49ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBzZXQgdGhlXG4gICAqICAgICBGSU4gYml0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLmdlbmVyYXRlTWFza10gVGhlIGZ1bmN0aW9uIHVzZWQgdG8gZ2VuZXJhdGUgdGhlXG4gICAqICAgICBtYXNraW5nIGtleVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm1hc2s9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrXG4gICAqICAgICBgZGF0YWBcbiAgICogQHBhcmFtIHtCdWZmZXJ9IFtvcHRpb25zLm1hc2tCdWZmZXJdIFRoZSBidWZmZXIgdXNlZCB0byBzdG9yZSB0aGUgbWFza2luZ1xuICAgKiAgICAga2V5XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLm9wY29kZSBUaGUgb3Bjb2RlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMucmVhZE9ubHk9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIGBkYXRhYCBjYW4gYmVcbiAgICogICAgIG1vZGlmaWVkXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMucnN2MT1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIHNldCB0aGVcbiAgICogICAgIFJTVjEgYml0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEJsb2JEYXRhKGJsb2IsIGNvbXByZXNzLCBvcHRpb25zLCBjYikge1xuICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgKz0gb3B0aW9uc1trQnl0ZUxlbmd0aF07XG4gICAgdGhpcy5fc3RhdGUgPSBHRVRfQkxPQl9EQVRBO1xuXG4gICAgYmxvYlxuICAgICAgLmFycmF5QnVmZmVyKClcbiAgICAgIC50aGVuKChhcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICBpZiAodGhpcy5fc29ja2V0LmRlc3Ryb3llZCkge1xuICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdUaGUgc29ja2V0IHdhcyBjbG9zZWQgd2hpbGUgdGhlIGJsb2Igd2FzIGJlaW5nIHJlYWQnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gYGNhbGxDYWxsYmFja3NgIGlzIGNhbGxlZCBpbiB0aGUgbmV4dCB0aWNrIHRvIGVuc3VyZSB0aGF0IGVycm9yc1xuICAgICAgICAgIC8vIHRoYXQgbWlnaHQgYmUgdGhyb3duIGluIHRoZSBjYWxsYmFja3MgYmVoYXZlIGxpa2UgZXJyb3JzIHRocm93blxuICAgICAgICAgIC8vIG91dHNpZGUgdGhlIHByb21pc2UgY2hhaW4uXG4gICAgICAgICAgLy9cbiAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGNhbGxDYWxsYmFja3MsIHRoaXMsIGVyciwgY2IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgLT0gb3B0aW9uc1trQnl0ZUxlbmd0aF07XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0b0J1ZmZlcihhcnJheUJ1ZmZlcik7XG5cbiAgICAgICAgaWYgKCFjb21wcmVzcykge1xuICAgICAgICAgIHRoaXMuX3N0YXRlID0gREVGQVVMVDtcbiAgICAgICAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoZGF0YSwgb3B0aW9ucyksIGNiKTtcbiAgICAgICAgICB0aGlzLmRlcXVldWUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoKGRhdGEsIGNvbXByZXNzLCBvcHRpb25zLCBjYik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvL1xuICAgICAgICAvLyBgb25FcnJvcmAgaXMgY2FsbGVkIGluIHRoZSBuZXh0IHRpY2sgZm9yIHRoZSBzYW1lIHJlYXNvbiB0aGF0XG4gICAgICAgIC8vIGBjYWxsQ2FsbGJhY2tzYCBhYm92ZSBpcy5cbiAgICAgICAgLy9cbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhvbkVycm9yLCB0aGlzLCBlcnIsIGNiKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0geyhCdWZmZXJ8U3RyaW5nKX0gZGF0YSBUaGUgbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NvbXByZXNzPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gY29tcHJlc3NcbiAgICogICAgIGBkYXRhYFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZpbj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIHNldCB0aGVcbiAgICogICAgIEZJTiBiaXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMuZ2VuZXJhdGVNYXNrXSBUaGUgZnVuY3Rpb24gdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAgICogICAgIG1hc2tpbmcga2V5XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWFzaz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2tcbiAgICogICAgIGBkYXRhYFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gW29wdGlvbnMubWFza0J1ZmZlcl0gVGhlIGJ1ZmZlciB1c2VkIHRvIHN0b3JlIHRoZSBtYXNraW5nXG4gICAqICAgICBrZXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMub3Bjb2RlIFRoZSBvcGNvZGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yZWFkT25seT1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGNhbiBiZVxuICAgKiAgICAgbW9kaWZpZWRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yc3YxPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gc2V0IHRoZVxuICAgKiAgICAgUlNWMSBiaXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGlzcGF0Y2goZGF0YSwgY29tcHJlc3MsIG9wdGlvbnMsIGNiKSB7XG4gICAgaWYgKCFjb21wcmVzcykge1xuICAgICAgdGhpcy5zZW5kRnJhbWUoU2VuZGVyLmZyYW1lKGRhdGEsIG9wdGlvbnMpLCBjYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGVyTWVzc2FnZURlZmxhdGUgPSB0aGlzLl9leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdO1xuXG4gICAgdGhpcy5fYnVmZmVyZWRCeXRlcyArPSBvcHRpb25zW2tCeXRlTGVuZ3RoXTtcbiAgICB0aGlzLl9zdGF0ZSA9IERFRkxBVElORztcbiAgICBwZXJNZXNzYWdlRGVmbGF0ZS5jb21wcmVzcyhkYXRhLCBvcHRpb25zLmZpbiwgKF8sIGJ1ZikgPT4ge1xuICAgICAgaWYgKHRoaXMuX3NvY2tldC5kZXN0cm95ZWQpIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICdUaGUgc29ja2V0IHdhcyBjbG9zZWQgd2hpbGUgZGF0YSB3YXMgYmVpbmcgY29tcHJlc3NlZCdcbiAgICAgICAgKTtcblxuICAgICAgICBjYWxsQ2FsbGJhY2tzKHRoaXMsIGVyciwgY2IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgLT0gb3B0aW9uc1trQnl0ZUxlbmd0aF07XG4gICAgICB0aGlzLl9zdGF0ZSA9IERFRkFVTFQ7XG4gICAgICBvcHRpb25zLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoYnVmLCBvcHRpb25zKSwgY2IpO1xuICAgICAgdGhpcy5kZXF1ZXVlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgcXVldWVkIHNlbmQgb3BlcmF0aW9ucy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlcXVldWUoKSB7XG4gICAgd2hpbGUgKHRoaXMuX3N0YXRlID09PSBERUZBVUxUICYmIHRoaXMuX3F1ZXVlLmxlbmd0aCkge1xuICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5fcXVldWUuc2hpZnQoKTtcblxuICAgICAgdGhpcy5fYnVmZmVyZWRCeXRlcyAtPSBwYXJhbXNbM11ba0J5dGVMZW5ndGhdO1xuICAgICAgUmVmbGVjdC5hcHBseShwYXJhbXNbMF0sIHRoaXMsIHBhcmFtcy5zbGljZSgxKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVucXVldWVzIGEgc2VuZCBvcGVyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBTZW5kIG9wZXJhdGlvbiBwYXJhbWV0ZXJzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZW5xdWV1ZShwYXJhbXMpIHtcbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzICs9IHBhcmFtc1szXVtrQnl0ZUxlbmd0aF07XG4gICAgdGhpcy5fcXVldWUucHVzaChwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgZnJhbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7KEJ1ZmZlciB8IFN0cmluZylbXX0gbGlzdCBUaGUgZnJhbWUgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZW5kRnJhbWUobGlzdCwgY2IpIHtcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMuX3NvY2tldC5jb3JrKCk7XG4gICAgICB0aGlzLl9zb2NrZXQud3JpdGUobGlzdFswXSk7XG4gICAgICB0aGlzLl9zb2NrZXQud3JpdGUobGlzdFsxXSwgY2IpO1xuICAgICAgdGhpcy5fc29ja2V0LnVuY29yaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zb2NrZXQud3JpdGUobGlzdFswXSwgY2IpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbmRlcjtcblxuLyoqXG4gKiBDYWxscyBxdWV1ZWQgY2FsbGJhY2tzIHdpdGggYW4gZXJyb3IuXG4gKlxuICogQHBhcmFtIHtTZW5kZXJ9IHNlbmRlciBUaGUgYFNlbmRlcmAgaW5zdGFuY2VcbiAqIEBwYXJhbSB7RXJyb3J9IGVyciBUaGUgZXJyb3IgdG8gY2FsbCB0aGUgY2FsbGJhY2tzIHdpdGhcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gVGhlIGZpcnN0IGNhbGxiYWNrXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjYWxsQ2FsbGJhY2tzKHNlbmRlciwgZXJyLCBjYikge1xuICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihlcnIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VuZGVyLl9xdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBhcmFtcyA9IHNlbmRlci5fcXVldWVbaV07XG4gICAgY29uc3QgY2FsbGJhY2sgPSBwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soZXJyKTtcbiAgfVxufVxuXG4vKipcbiAqIEhhbmRsZXMgYSBgU2VuZGVyYCBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge1NlbmRlcn0gc2VuZGVyIFRoZSBgU2VuZGVyYCBpbnN0YW5jZVxuICogQHBhcmFtIHtFcnJvcn0gZXJyIFRoZSBlcnJvclxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBUaGUgZmlyc3QgcGVuZGluZyBjYWxsYmFja1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gb25FcnJvcihzZW5kZXIsIGVyciwgY2IpIHtcbiAgY2FsbENhbGxiYWNrcyhzZW5kZXIsIGVyciwgY2IpO1xuICBzZW5kZXIub25lcnJvcihlcnIpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBrRm9yT25FdmVudEF0dHJpYnV0ZSwga0xpc3RlbmVyIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5jb25zdCBrQ29kZSA9IFN5bWJvbCgna0NvZGUnKTtcbmNvbnN0IGtEYXRhID0gU3ltYm9sKCdrRGF0YScpO1xuY29uc3Qga0Vycm9yID0gU3ltYm9sKCdrRXJyb3InKTtcbmNvbnN0IGtNZXNzYWdlID0gU3ltYm9sKCdrTWVzc2FnZScpO1xuY29uc3Qga1JlYXNvbiA9IFN5bWJvbCgna1JlYXNvbicpO1xuY29uc3Qga1RhcmdldCA9IFN5bWJvbCgna1RhcmdldCcpO1xuY29uc3Qga1R5cGUgPSBTeW1ib2woJ2tUeXBlJyk7XG5jb25zdCBrV2FzQ2xlYW4gPSBTeW1ib2woJ2tXYXNDbGVhbicpO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhbiBldmVudC5cbiAqL1xuY2xhc3MgRXZlbnQge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGBFdmVudGAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IElmIHRoZSBgdHlwZWAgYXJndW1lbnQgaXMgbm90IHNwZWNpZmllZFxuICAgKi9cbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXNba1RhcmdldF0gPSBudWxsO1xuICAgIHRoaXNba1R5cGVdID0gdHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7Kn1cbiAgICovXG4gIGdldCB0YXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXNba1RhcmdldF07XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzW2tUeXBlXTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnQucHJvdG90eXBlLCAndGFyZ2V0JywgeyBlbnVtZXJhYmxlOiB0cnVlIH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50LnByb3RvdHlwZSwgJ3R5cGUnLCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgY2xvc2UgZXZlbnQuXG4gKlxuICogQGV4dGVuZHMgRXZlbnRcbiAqL1xuY2xhc3MgQ2xvc2VFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgQ2xvc2VFdmVudGAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEEgZGljdGlvbmFyeSBvYmplY3QgdGhhdCBhbGxvd3MgZm9yIHNldHRpbmdcbiAgICogICAgIGF0dHJpYnV0ZXMgdmlhIG9iamVjdCBtZW1iZXJzIG9mIHRoZSBzYW1lIG5hbWVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmNvZGU9MF0gVGhlIHN0YXR1cyBjb2RlIGV4cGxhaW5pbmcgd2h5IHRoZVxuICAgKiAgICAgY29ubmVjdGlvbiB3YXMgY2xvc2VkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yZWFzb249JyddIEEgaHVtYW4tcmVhZGFibGUgc3RyaW5nIGV4cGxhaW5pbmcgd2h5XG4gICAqICAgICB0aGUgY29ubmVjdGlvbiB3YXMgY2xvc2VkXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMud2FzQ2xlYW49ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0aGVcbiAgICogICAgIGNvbm5lY3Rpb24gd2FzIGNsZWFubHkgY2xvc2VkXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXNba0NvZGVdID0gb3B0aW9ucy5jb2RlID09PSB1bmRlZmluZWQgPyAwIDogb3B0aW9ucy5jb2RlO1xuICAgIHRoaXNba1JlYXNvbl0gPSBvcHRpb25zLnJlYXNvbiA9PT0gdW5kZWZpbmVkID8gJycgOiBvcHRpb25zLnJlYXNvbjtcbiAgICB0aGlzW2tXYXNDbGVhbl0gPSBvcHRpb25zLndhc0NsZWFuID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IG9wdGlvbnMud2FzQ2xlYW47XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIGdldCBjb2RlKCkge1xuICAgIHJldHVybiB0aGlzW2tDb2RlXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0IHJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpc1trUmVhc29uXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIGdldCB3YXNDbGVhbigpIHtcbiAgICByZXR1cm4gdGhpc1trV2FzQ2xlYW5dO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDbG9zZUV2ZW50LnByb3RvdHlwZSwgJ2NvZGUnLCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ2xvc2VFdmVudC5wcm90b3R5cGUsICdyZWFzb24nLCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ2xvc2VFdmVudC5wcm90b3R5cGUsICd3YXNDbGVhbicsIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYW4gZXJyb3IgZXZlbnQuXG4gKlxuICogQGV4dGVuZHMgRXZlbnRcbiAqL1xuY2xhc3MgRXJyb3JFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgRXJyb3JFdmVudGAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEEgZGljdGlvbmFyeSBvYmplY3QgdGhhdCBhbGxvd3MgZm9yIHNldHRpbmdcbiAgICogICAgIGF0dHJpYnV0ZXMgdmlhIG9iamVjdCBtZW1iZXJzIG9mIHRoZSBzYW1lIG5hbWVcbiAgICogQHBhcmFtIHsqfSBbb3B0aW9ucy5lcnJvcj1udWxsXSBUaGUgZXJyb3IgdGhhdCBnZW5lcmF0ZWQgdGhpcyBldmVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubWVzc2FnZT0nJ10gVGhlIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHR5cGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpc1trRXJyb3JdID0gb3B0aW9ucy5lcnJvciA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG9wdGlvbnMuZXJyb3I7XG4gICAgdGhpc1trTWVzc2FnZV0gPSBvcHRpb25zLm1lc3NhZ2UgPT09IHVuZGVmaW5lZCA/ICcnIDogb3B0aW9ucy5tZXNzYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHsqfVxuICAgKi9cbiAgZ2V0IGVycm9yKCkge1xuICAgIHJldHVybiB0aGlzW2tFcnJvcl07XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGdldCBtZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzW2tNZXNzYWdlXTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXJyb3JFdmVudC5wcm90b3R5cGUsICdlcnJvcicsIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFcnJvckV2ZW50LnByb3RvdHlwZSwgJ21lc3NhZ2UnLCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgbWVzc2FnZSBldmVudC5cbiAqXG4gKiBAZXh0ZW5kcyBFdmVudFxuICovXG5jbGFzcyBNZXNzYWdlRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYE1lc3NhZ2VFdmVudGAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEEgZGljdGlvbmFyeSBvYmplY3QgdGhhdCBhbGxvd3MgZm9yIHNldHRpbmdcbiAgICogICAgIGF0dHJpYnV0ZXMgdmlhIG9iamVjdCBtZW1iZXJzIG9mIHRoZSBzYW1lIG5hbWVcbiAgICogQHBhcmFtIHsqfSBbb3B0aW9ucy5kYXRhPW51bGxdIFRoZSBtZXNzYWdlIGNvbnRlbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHR5cGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpc1trRGF0YV0gPSBvcHRpb25zLmRhdGEgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBvcHRpb25zLmRhdGE7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUgeyp9XG4gICAqL1xuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpc1trRGF0YV07XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE1lc3NhZ2VFdmVudC5wcm90b3R5cGUsICdkYXRhJywgeyBlbnVtZXJhYmxlOiB0cnVlIH0pO1xuXG4vKipcbiAqIFRoaXMgcHJvdmlkZXMgbWV0aG9kcyBmb3IgZW11bGF0aW5nIHRoZSBgRXZlbnRUYXJnZXRgIGludGVyZmFjZS4gSXQncyBub3RcbiAqIG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1peGluXG4gKi9cbmNvbnN0IEV2ZW50VGFyZ2V0ID0ge1xuICAvKipcbiAgICogUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZXZlbnQgdHlwZSB0byBsaXN0ZW4gZm9yXG4gICAqIEBwYXJhbSB7KEZ1bmN0aW9ufE9iamVjdCl9IGhhbmRsZXIgVGhlIGxpc3RlbmVyIHRvIGFkZFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEFuIG9wdGlvbnMgb2JqZWN0IHNwZWNpZmllcyBjaGFyYWN0ZXJpc3RpY3MgYWJvdXRcbiAgICogICAgIHRoZSBldmVudCBsaXN0ZW5lclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm9uY2U9ZmFsc2VdIEEgYEJvb2xlYW5gIGluZGljYXRpbmcgdGhhdCB0aGVcbiAgICogICAgIGxpc3RlbmVyIHNob3VsZCBiZSBpbnZva2VkIGF0IG1vc3Qgb25jZSBhZnRlciBiZWluZyBhZGRlZC4gSWYgYHRydWVgLFxuICAgKiAgICAgdGhlIGxpc3RlbmVyIHdvdWxkIGJlIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCB3aGVuIGludm9rZWQuXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycyh0eXBlKSkge1xuICAgICAgaWYgKFxuICAgICAgICAhb3B0aW9uc1trRm9yT25FdmVudEF0dHJpYnV0ZV0gJiZcbiAgICAgICAgbGlzdGVuZXJba0xpc3RlbmVyXSA9PT0gaGFuZGxlciAmJlxuICAgICAgICAhbGlzdGVuZXJba0Zvck9uRXZlbnRBdHRyaWJ1dGVdXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB3cmFwcGVyO1xuXG4gICAgaWYgKHR5cGUgPT09ICdtZXNzYWdlJykge1xuICAgICAgd3JhcHBlciA9IGZ1bmN0aW9uIG9uTWVzc2FnZShkYXRhLCBpc0JpbmFyeSkge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBNZXNzYWdlRXZlbnQoJ21lc3NhZ2UnLCB7XG4gICAgICAgICAgZGF0YTogaXNCaW5hcnkgPyBkYXRhIDogZGF0YS50b1N0cmluZygpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50W2tUYXJnZXRdID0gdGhpcztcbiAgICAgICAgY2FsbExpc3RlbmVyKGhhbmRsZXIsIHRoaXMsIGV2ZW50KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY2xvc2UnKSB7XG4gICAgICB3cmFwcGVyID0gZnVuY3Rpb24gb25DbG9zZShjb2RlLCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IENsb3NlRXZlbnQoJ2Nsb3NlJywge1xuICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgcmVhc29uOiBtZXNzYWdlLnRvU3RyaW5nKCksXG4gICAgICAgICAgd2FzQ2xlYW46IHRoaXMuX2Nsb3NlRnJhbWVSZWNlaXZlZCAmJiB0aGlzLl9jbG9zZUZyYW1lU2VudFxuICAgICAgICB9KTtcblxuICAgICAgICBldmVudFtrVGFyZ2V0XSA9IHRoaXM7XG4gICAgICAgIGNhbGxMaXN0ZW5lcihoYW5kbGVyLCB0aGlzLCBldmVudCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgd3JhcHBlciA9IGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXJyb3JFdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgICB9KTtcblxuICAgICAgICBldmVudFtrVGFyZ2V0XSA9IHRoaXM7XG4gICAgICAgIGNhbGxMaXN0ZW5lcihoYW5kbGVyLCB0aGlzLCBldmVudCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29wZW4nKSB7XG4gICAgICB3cmFwcGVyID0gZnVuY3Rpb24gb25PcGVuKCkge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnb3BlbicpO1xuXG4gICAgICAgIGV2ZW50W2tUYXJnZXRdID0gdGhpcztcbiAgICAgICAgY2FsbExpc3RlbmVyKGhhbmRsZXIsIHRoaXMsIGV2ZW50KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3cmFwcGVyW2tGb3JPbkV2ZW50QXR0cmlidXRlXSA9ICEhb3B0aW9uc1trRm9yT25FdmVudEF0dHJpYnV0ZV07XG4gICAgd3JhcHBlcltrTGlzdGVuZXJdID0gaGFuZGxlcjtcblxuICAgIGlmIChvcHRpb25zLm9uY2UpIHtcbiAgICAgIHRoaXMub25jZSh0eXBlLCB3cmFwcGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbih0eXBlLCB3cmFwcGVyKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBldmVudCB0eXBlIHRvIHJlbW92ZVxuICAgKiBAcGFyYW0geyhGdW5jdGlvbnxPYmplY3QpfSBoYW5kbGVyIFRoZSBsaXN0ZW5lciB0byByZW1vdmVcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKSB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycyh0eXBlKSkge1xuICAgICAgaWYgKGxpc3RlbmVyW2tMaXN0ZW5lcl0gPT09IGhhbmRsZXIgJiYgIWxpc3RlbmVyW2tGb3JPbkV2ZW50QXR0cmlidXRlXSkge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ2xvc2VFdmVudCxcbiAgRXJyb3JFdmVudCxcbiAgRXZlbnQsXG4gIEV2ZW50VGFyZ2V0LFxuICBNZXNzYWdlRXZlbnRcbn07XG5cbi8qKlxuICogQ2FsbCBhbiBldmVudCBsaXN0ZW5lclxuICpcbiAqIEBwYXJhbSB7KEZ1bmN0aW9ufE9iamVjdCl9IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciB0byBjYWxsXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIHZhbHVlIHRvIHVzZSBhcyBgdGhpc2BgIHdoZW4gY2FsbGluZyB0aGUgbGlzdGVuZXJcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0byBwYXNzIHRvIHRoZSBsaXN0ZW5lclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2FsbExpc3RlbmVyKGxpc3RlbmVyLCB0aGlzQXJnLCBldmVudCkge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnb2JqZWN0JyAmJiBsaXN0ZW5lci5oYW5kbGVFdmVudCkge1xuICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBsaXN0ZW5lci5jYWxsKHRoaXNBcmcsIGV2ZW50KTtcbiAgfVxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyB0b2tlbkNoYXJzIH0gPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcblxuLyoqXG4gKiBBZGRzIGFuIG9mZmVyIHRvIHRoZSBtYXAgb2YgZXh0ZW5zaW9uIG9mZmVycyBvciBhIHBhcmFtZXRlciB0byB0aGUgbWFwIG9mXG4gKiBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXN0IFRoZSBtYXAgb2YgZXh0ZW5zaW9uIG9mZmVycyBvciBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZXh0ZW5zaW9uIG9yIHBhcmFtZXRlciBuYW1lXG4gKiBAcGFyYW0geyhPYmplY3R8Qm9vbGVhbnxTdHJpbmcpfSBlbGVtIFRoZSBleHRlbnNpb24gcGFyYW1ldGVycyBvciB0aGVcbiAqICAgICBwYXJhbWV0ZXIgdmFsdWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHB1c2goZGVzdCwgbmFtZSwgZWxlbSkge1xuICBpZiAoZGVzdFtuYW1lXSA9PT0gdW5kZWZpbmVkKSBkZXN0W25hbWVdID0gW2VsZW1dO1xuICBlbHNlIGRlc3RbbmFtZV0ucHVzaChlbGVtKTtcbn1cblxuLyoqXG4gKiBQYXJzZXMgdGhlIGBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnNgIGhlYWRlciBpbnRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVyIFRoZSBmaWVsZCB2YWx1ZSBvZiB0aGUgaGVhZGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBwYXJzZWQgb2JqZWN0XG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKGhlYWRlcikge1xuICBjb25zdCBvZmZlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBsZXQgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgbGV0IG11c3RVbmVzY2FwZSA9IGZhbHNlO1xuICBsZXQgaXNFc2NhcGluZyA9IGZhbHNlO1xuICBsZXQgaW5RdW90ZXMgPSBmYWxzZTtcbiAgbGV0IGV4dGVuc2lvbk5hbWU7XG4gIGxldCBwYXJhbU5hbWU7XG4gIGxldCBzdGFydCA9IC0xO1xuICBsZXQgY29kZSA9IC0xO1xuICBsZXQgZW5kID0gLTE7XG4gIGxldCBpID0gMDtcblxuICBmb3IgKDsgaSA8IGhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgIGNvZGUgPSBoZWFkZXIuY2hhckNvZGVBdChpKTtcblxuICAgIGlmIChleHRlbnNpb25OYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChlbmQgPT09IC0xICYmIHRva2VuQ2hhcnNbY29kZV0gPT09IDEpIHtcbiAgICAgICAgaWYgKHN0YXJ0ID09PSAtMSkgc3RhcnQgPSBpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgaSAhPT0gMCAmJlxuICAgICAgICAoY29kZSA9PT0gMHgyMCAvKiAnICcgKi8gfHwgY29kZSA9PT0gMHgwOSkgLyogJ1xcdCcgKi9cbiAgICAgICkge1xuICAgICAgICBpZiAoZW5kID09PSAtMSAmJiBzdGFydCAhPT0gLTEpIGVuZCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4M2IgLyogJzsnICovIHx8IGNvZGUgPT09IDB4MmMgLyogJywnICovKSB7XG4gICAgICAgIGlmIChzdGFydCA9PT0gLTEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmQgPT09IC0xKSBlbmQgPSBpO1xuICAgICAgICBjb25zdCBuYW1lID0gaGVhZGVyLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgICBpZiAoY29kZSA9PT0gMHgyYykge1xuICAgICAgICAgIHB1c2gob2ZmZXJzLCBuYW1lLCBwYXJhbXMpO1xuICAgICAgICAgIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXh0ZW5zaW9uTmFtZSA9IG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFydCA9IGVuZCA9IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBhdCBpbmRleCAke2l9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYXJhbU5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGVuZCA9PT0gLTEgJiYgdG9rZW5DaGFyc1tjb2RlXSA9PT0gMSkge1xuICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSBzdGFydCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4MjAgfHwgY29kZSA9PT0gMHgwOSkge1xuICAgICAgICBpZiAoZW5kID09PSAtMSAmJiBzdGFydCAhPT0gLTEpIGVuZCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4M2IgfHwgY29kZSA9PT0gMHgyYykge1xuICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBhdCBpbmRleCAke2l9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW5kID09PSAtMSkgZW5kID0gaTtcbiAgICAgICAgcHVzaChwYXJhbXMsIGhlYWRlci5zbGljZShzdGFydCwgZW5kKSwgdHJ1ZSk7XG4gICAgICAgIGlmIChjb2RlID09PSAweDJjKSB7XG4gICAgICAgICAgcHVzaChvZmZlcnMsIGV4dGVuc2lvbk5hbWUsIHBhcmFtcyk7XG4gICAgICAgICAgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBleHRlbnNpb25OYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnQgPSBlbmQgPSAtMTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgzZCAvKiAnPScgKi8gJiYgc3RhcnQgIT09IC0xICYmIGVuZCA9PT0gLTEpIHtcbiAgICAgICAgcGFyYW1OYW1lID0gaGVhZGVyLnNsaWNlKHN0YXJ0LCBpKTtcbiAgICAgICAgc3RhcnQgPSBlbmQgPSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL1xuICAgICAgLy8gVGhlIHZhbHVlIG9mIGEgcXVvdGVkLXN0cmluZyBhZnRlciB1bmVzY2FwaW5nIG11c3QgY29uZm9ybSB0byB0aGVcbiAgICAgIC8vIHRva2VuIEFCTkYsIHNvIG9ubHkgdG9rZW4gY2hhcmFjdGVycyBhcmUgdmFsaWQuXG4gICAgICAvLyBSZWY6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NDU1I3NlY3Rpb24tOS4xXG4gICAgICAvL1xuICAgICAgaWYgKGlzRXNjYXBpbmcpIHtcbiAgICAgICAgaWYgKHRva2VuQ2hhcnNbY29kZV0gIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSBzdGFydCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKCFtdXN0VW5lc2NhcGUpIG11c3RVbmVzY2FwZSA9IHRydWU7XG4gICAgICAgIGlzRXNjYXBpbmcgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaW5RdW90ZXMpIHtcbiAgICAgICAgaWYgKHRva2VuQ2hhcnNbY29kZV0gPT09IDEpIHtcbiAgICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSBzdGFydCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgyMiAvKiAnXCInICovICYmIHN0YXJ0ICE9PSAtMSkge1xuICAgICAgICAgIGluUXVvdGVzID0gZmFsc2U7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAweDVjIC8qICdcXCcgKi8pIHtcbiAgICAgICAgICBpc0VzY2FwaW5nID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAweDIyICYmIGhlYWRlci5jaGFyQ29kZUF0KGkgLSAxKSA9PT0gMHgzZCkge1xuICAgICAgICBpblF1b3RlcyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEgJiYgdG9rZW5DaGFyc1tjb2RlXSA9PT0gMSkge1xuICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSBzdGFydCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0ICE9PSAtMSAmJiAoY29kZSA9PT0gMHgyMCB8fCBjb2RlID09PSAweDA5KSkge1xuICAgICAgICBpZiAoZW5kID09PSAtMSkgZW5kID0gaTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgzYiB8fCBjb2RlID09PSAweDJjKSB7XG4gICAgICAgIGlmIChzdGFydCA9PT0gLTEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmQgPT09IC0xKSBlbmQgPSBpO1xuICAgICAgICBsZXQgdmFsdWUgPSBoZWFkZXIuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICAgIGlmIChtdXN0VW5lc2NhcGUpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcXFwvZywgJycpO1xuICAgICAgICAgIG11c3RVbmVzY2FwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHB1c2gocGFyYW1zLCBwYXJhbU5hbWUsIHZhbHVlKTtcbiAgICAgICAgaWYgKGNvZGUgPT09IDB4MmMpIHtcbiAgICAgICAgICBwdXNoKG9mZmVycywgZXh0ZW5zaW9uTmFtZSwgcGFyYW1zKTtcbiAgICAgICAgICBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGV4dGVuc2lvbk5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHN0YXJ0ID0gZW5kID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnQgPT09IC0xIHx8IGluUXVvdGVzIHx8IGNvZGUgPT09IDB4MjAgfHwgY29kZSA9PT0gMHgwOSkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgaW5wdXQnKTtcbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSBlbmQgPSBpO1xuICBjb25zdCB0b2tlbiA9IGhlYWRlci5zbGljZShzdGFydCwgZW5kKTtcbiAgaWYgKGV4dGVuc2lvbk5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHB1c2gob2ZmZXJzLCB0b2tlbiwgcGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyYW1OYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHB1c2gocGFyYW1zLCB0b2tlbiwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChtdXN0VW5lc2NhcGUpIHtcbiAgICAgIHB1c2gocGFyYW1zLCBwYXJhbU5hbWUsIHRva2VuLnJlcGxhY2UoL1xcXFwvZywgJycpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHVzaChwYXJhbXMsIHBhcmFtTmFtZSwgdG9rZW4pO1xuICAgIH1cbiAgICBwdXNoKG9mZmVycywgZXh0ZW5zaW9uTmFtZSwgcGFyYW1zKTtcbiAgfVxuXG4gIHJldHVybiBvZmZlcnM7XG59XG5cbi8qKlxuICogQnVpbGRzIHRoZSBgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zYCBoZWFkZXIgZmllbGQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGV4dGVuc2lvbnMgVGhlIG1hcCBvZiBleHRlbnNpb25zIGFuZCBwYXJhbWV0ZXJzIHRvIGZvcm1hdFxuICogQHJldHVybiB7U3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGdpdmVuIG9iamVjdFxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBmb3JtYXQoZXh0ZW5zaW9ucykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZXh0ZW5zaW9ucylcbiAgICAubWFwKChleHRlbnNpb24pID0+IHtcbiAgICAgIGxldCBjb25maWd1cmF0aW9ucyA9IGV4dGVuc2lvbnNbZXh0ZW5zaW9uXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb25maWd1cmF0aW9ucykpIGNvbmZpZ3VyYXRpb25zID0gW2NvbmZpZ3VyYXRpb25zXTtcbiAgICAgIHJldHVybiBjb25maWd1cmF0aW9uc1xuICAgICAgICAubWFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgICByZXR1cm4gW2V4dGVuc2lvbl1cbiAgICAgICAgICAgIC5jb25jYXQoXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykubWFwKChrKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHBhcmFtc1trXTtcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkgdmFsdWVzID0gW3ZhbHVlc107XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgLm1hcCgodikgPT4gKHYgPT09IHRydWUgPyBrIDogYCR7a309JHt2fWApKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJzsgJyk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuam9pbignOyAnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgfSlcbiAgICAuam9pbignLCAnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGZvcm1hdCwgcGFyc2UgfTtcbiIsICIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFtcImVycm9yXCIsIHsgXCJ2YXJzSWdub3JlUGF0dGVyblwiOiBcIl5EdXBsZXh8UmVhZGFibGUkXCIsIFwiY2F1Z2h0RXJyb3JzXCI6IFwibm9uZVwiIH1dICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5jb25zdCBodHRwcyA9IHJlcXVpcmUoJ2h0dHBzJyk7XG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgbmV0ID0gcmVxdWlyZSgnbmV0Jyk7XG5jb25zdCB0bHMgPSByZXF1aXJlKCd0bHMnKTtcbmNvbnN0IHsgcmFuZG9tQnl0ZXMsIGNyZWF0ZUhhc2ggfSA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuY29uc3QgeyBEdXBsZXgsIFJlYWRhYmxlIH0gPSByZXF1aXJlKCdzdHJlYW0nKTtcbmNvbnN0IHsgVVJMIH0gPSByZXF1aXJlKCd1cmwnKTtcblxuY29uc3QgUGVyTWVzc2FnZURlZmxhdGUgPSByZXF1aXJlKCcuL3Blcm1lc3NhZ2UtZGVmbGF0ZScpO1xuY29uc3QgUmVjZWl2ZXIgPSByZXF1aXJlKCcuL3JlY2VpdmVyJyk7XG5jb25zdCBTZW5kZXIgPSByZXF1aXJlKCcuL3NlbmRlcicpO1xuY29uc3QgeyBpc0Jsb2IgfSA9IHJlcXVpcmUoJy4vdmFsaWRhdGlvbicpO1xuXG5jb25zdCB7XG4gIEJJTkFSWV9UWVBFUyxcbiAgQ0xPU0VfVElNRU9VVCxcbiAgRU1QVFlfQlVGRkVSLFxuICBHVUlELFxuICBrRm9yT25FdmVudEF0dHJpYnV0ZSxcbiAga0xpc3RlbmVyLFxuICBrU3RhdHVzQ29kZSxcbiAga1dlYlNvY2tldCxcbiAgTk9PUFxufSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCB7XG4gIEV2ZW50VGFyZ2V0OiB7IGFkZEV2ZW50TGlzdGVuZXIsIHJlbW92ZUV2ZW50TGlzdGVuZXIgfVxufSA9IHJlcXVpcmUoJy4vZXZlbnQtdGFyZ2V0Jyk7XG5jb25zdCB7IGZvcm1hdCwgcGFyc2UgfSA9IHJlcXVpcmUoJy4vZXh0ZW5zaW9uJyk7XG5jb25zdCB7IHRvQnVmZmVyIH0gPSByZXF1aXJlKCcuL2J1ZmZlci11dGlsJyk7XG5cbmNvbnN0IGtBYm9ydGVkID0gU3ltYm9sKCdrQWJvcnRlZCcpO1xuY29uc3QgcHJvdG9jb2xWZXJzaW9ucyA9IFs4LCAxM107XG5jb25zdCByZWFkeVN0YXRlcyA9IFsnQ09OTkVDVElORycsICdPUEVOJywgJ0NMT1NJTkcnLCAnQ0xPU0VEJ107XG5jb25zdCBzdWJwcm90b2NvbFJlZ2V4ID0gL15bISMkJSYnKitcXC0uMC05QS1aXl9gfGEten5dKyQvO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIFdlYlNvY2tldC5cbiAqXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuY2xhc3MgV2ViU29ja2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgV2ViU29ja2V0YC5cbiAgICpcbiAgICogQHBhcmFtIHsoU3RyaW5nfFVSTCl9IGFkZHJlc3MgVGhlIFVSTCB0byB3aGljaCB0byBjb25uZWN0XG4gICAqIEBwYXJhbSB7KFN0cmluZ3xTdHJpbmdbXSl9IFtwcm90b2NvbHNdIFRoZSBzdWJwcm90b2NvbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBDb25uZWN0aW9uIG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkZHJlc3MsIHByb3RvY29scywgb3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9iaW5hcnlUeXBlID0gQklOQVJZX1RZUEVTWzBdO1xuICAgIHRoaXMuX2Nsb3NlQ29kZSA9IDEwMDY7XG4gICAgdGhpcy5fY2xvc2VGcmFtZVJlY2VpdmVkID0gZmFsc2U7XG4gICAgdGhpcy5fY2xvc2VGcmFtZVNlbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9jbG9zZU1lc3NhZ2UgPSBFTVBUWV9CVUZGRVI7XG4gICAgdGhpcy5fY2xvc2VUaW1lciA9IG51bGw7XG4gICAgdGhpcy5fZXJyb3JFbWl0dGVkID0gZmFsc2U7XG4gICAgdGhpcy5fZXh0ZW5zaW9ucyA9IHt9O1xuICAgIHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3Byb3RvY29sID0gJyc7XG4gICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DT05ORUNUSU5HO1xuICAgIHRoaXMuX3JlY2VpdmVyID0gbnVsbDtcbiAgICB0aGlzLl9zZW5kZXIgPSBudWxsO1xuICAgIHRoaXMuX3NvY2tldCA9IG51bGw7XG5cbiAgICBpZiAoYWRkcmVzcyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fYnVmZmVyZWRBbW91bnQgPSAwO1xuICAgICAgdGhpcy5faXNTZXJ2ZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlZGlyZWN0cyA9IDA7XG5cbiAgICAgIGlmIChwcm90b2NvbHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm90b2NvbHMgPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkocHJvdG9jb2xzKSkge1xuICAgICAgICBpZiAodHlwZW9mIHByb3RvY29scyA9PT0gJ29iamVjdCcgJiYgcHJvdG9jb2xzICE9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IHByb3RvY29scztcbiAgICAgICAgICBwcm90b2NvbHMgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm90b2NvbHMgPSBbcHJvdG9jb2xzXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbml0QXNDbGllbnQodGhpcywgYWRkcmVzcywgcHJvdG9jb2xzLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXV0b1BvbmcgPSBvcHRpb25zLmF1dG9Qb25nO1xuICAgICAgdGhpcy5fY2xvc2VUaW1lb3V0ID0gb3B0aW9ucy5jbG9zZVRpbWVvdXQ7XG4gICAgICB0aGlzLl9pc1NlcnZlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvciBoaXN0b3JpY2FsIHJlYXNvbnMsIHRoZSBjdXN0b20gXCJub2RlYnVmZmVyXCIgdHlwZSBpcyB1c2VkIGJ5IHRoZSBkZWZhdWx0XG4gICAqIGluc3RlYWQgb2YgXCJibG9iXCIuXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBnZXQgYmluYXJ5VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmluYXJ5VHlwZTtcbiAgfVxuXG4gIHNldCBiaW5hcnlUeXBlKHR5cGUpIHtcbiAgICBpZiAoIUJJTkFSWV9UWVBFUy5pbmNsdWRlcyh0eXBlKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fYmluYXJ5VHlwZSA9IHR5cGU7XG5cbiAgICAvL1xuICAgIC8vIEFsbG93IHRvIGNoYW5nZSBgYmluYXJ5VHlwZWAgb24gdGhlIGZseS5cbiAgICAvL1xuICAgIGlmICh0aGlzLl9yZWNlaXZlcikgdGhpcy5fcmVjZWl2ZXIuX2JpbmFyeVR5cGUgPSB0eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBnZXQgYnVmZmVyZWRBbW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLl9zb2NrZXQpIHJldHVybiB0aGlzLl9idWZmZXJlZEFtb3VudDtcblxuICAgIHJldHVybiB0aGlzLl9zb2NrZXQuX3dyaXRhYmxlU3RhdGUubGVuZ3RoICsgdGhpcy5fc2VuZGVyLl9idWZmZXJlZEJ5dGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBnZXQgZXh0ZW5zaW9ucygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZXh0ZW5zaW9ucykuam9pbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgZ2V0IGlzUGF1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9wYXVzZWQ7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKi9cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZ2V0IG9uY2xvc2UoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKi9cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZ2V0IG9uZXJyb3IoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKi9cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZ2V0IG9ub3BlbigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqL1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBnZXQgb25tZXNzYWdlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBnZXQgcHJvdG9jb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3RvY29sO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBnZXQgcmVhZHlTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZHlTdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB1cCB0aGUgc29ja2V0IGFuZCB0aGUgaW50ZXJuYWwgcmVzb3VyY2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0R1cGxleH0gc29ja2V0IFRoZSBuZXR3b3JrIHNvY2tldCBiZXR3ZWVuIHRoZSBzZXJ2ZXIgYW5kIGNsaWVudFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gaGVhZCBUaGUgZmlyc3QgcGFja2V0IG9mIHRoZSB1cGdyYWRlZCBzdHJlYW1cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hbGxvd1N5bmNocm9ub3VzRXZlbnRzPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlclxuICAgKiAgICAgYW55IG9mIHRoZSBgJ21lc3NhZ2UnYCwgYCdwaW5nJ2AsIGFuZCBgJ3BvbmcnYCBldmVudHMgY2FuIGJlIGVtaXR0ZWRcbiAgICogICAgIG11bHRpcGxlIHRpbWVzIGluIHRoZSBzYW1lIHRpY2tcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMuZ2VuZXJhdGVNYXNrXSBUaGUgZnVuY3Rpb24gdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAgICogICAgIG1hc2tpbmcga2V5XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhQYXlsb2FkPTBdIFRoZSBtYXhpbXVtIGFsbG93ZWQgbWVzc2FnZSBzaXplXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuc2tpcFVURjhWYWxpZGF0aW9uPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvclxuICAgKiAgICAgbm90IHRvIHNraXAgVVRGLTggdmFsaWRhdGlvbiBmb3IgdGV4dCBhbmQgY2xvc2UgbWVzc2FnZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFNvY2tldChzb2NrZXQsIGhlYWQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCByZWNlaXZlciA9IG5ldyBSZWNlaXZlcih7XG4gICAgICBhbGxvd1N5bmNocm9ub3VzRXZlbnRzOiBvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHMsXG4gICAgICBiaW5hcnlUeXBlOiB0aGlzLmJpbmFyeVR5cGUsXG4gICAgICBleHRlbnNpb25zOiB0aGlzLl9leHRlbnNpb25zLFxuICAgICAgaXNTZXJ2ZXI6IHRoaXMuX2lzU2VydmVyLFxuICAgICAgbWF4UGF5bG9hZDogb3B0aW9ucy5tYXhQYXlsb2FkLFxuICAgICAgc2tpcFVURjhWYWxpZGF0aW9uOiBvcHRpb25zLnNraXBVVEY4VmFsaWRhdGlvblxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VuZGVyID0gbmV3IFNlbmRlcihzb2NrZXQsIHRoaXMuX2V4dGVuc2lvbnMsIG9wdGlvbnMuZ2VuZXJhdGVNYXNrKTtcblxuICAgIHRoaXMuX3JlY2VpdmVyID0gcmVjZWl2ZXI7XG4gICAgdGhpcy5fc2VuZGVyID0gc2VuZGVyO1xuICAgIHRoaXMuX3NvY2tldCA9IHNvY2tldDtcblxuICAgIHJlY2VpdmVyW2tXZWJTb2NrZXRdID0gdGhpcztcbiAgICBzZW5kZXJba1dlYlNvY2tldF0gPSB0aGlzO1xuICAgIHNvY2tldFtrV2ViU29ja2V0XSA9IHRoaXM7XG5cbiAgICByZWNlaXZlci5vbignY29uY2x1ZGUnLCByZWNlaXZlck9uQ29uY2x1ZGUpO1xuICAgIHJlY2VpdmVyLm9uKCdkcmFpbicsIHJlY2VpdmVyT25EcmFpbik7XG4gICAgcmVjZWl2ZXIub24oJ2Vycm9yJywgcmVjZWl2ZXJPbkVycm9yKTtcbiAgICByZWNlaXZlci5vbignbWVzc2FnZScsIHJlY2VpdmVyT25NZXNzYWdlKTtcbiAgICByZWNlaXZlci5vbigncGluZycsIHJlY2VpdmVyT25QaW5nKTtcbiAgICByZWNlaXZlci5vbigncG9uZycsIHJlY2VpdmVyT25Qb25nKTtcblxuICAgIHNlbmRlci5vbmVycm9yID0gc2VuZGVyT25FcnJvcjtcblxuICAgIC8vXG4gICAgLy8gVGhlc2UgbWV0aG9kcyBtYXkgbm90IGJlIGF2YWlsYWJsZSBpZiBgc29ja2V0YCBpcyBqdXN0IGEgYER1cGxleGAuXG4gICAgLy9cbiAgICBpZiAoc29ja2V0LnNldFRpbWVvdXQpIHNvY2tldC5zZXRUaW1lb3V0KDApO1xuICAgIGlmIChzb2NrZXQuc2V0Tm9EZWxheSkgc29ja2V0LnNldE5vRGVsYXkoKTtcblxuICAgIGlmIChoZWFkLmxlbmd0aCA+IDApIHNvY2tldC51bnNoaWZ0KGhlYWQpO1xuXG4gICAgc29ja2V0Lm9uKCdjbG9zZScsIHNvY2tldE9uQ2xvc2UpO1xuICAgIHNvY2tldC5vbignZGF0YScsIHNvY2tldE9uRGF0YSk7XG4gICAgc29ja2V0Lm9uKCdlbmQnLCBzb2NrZXRPbkVuZCk7XG4gICAgc29ja2V0Lm9uKCdlcnJvcicsIHNvY2tldE9uRXJyb3IpO1xuXG4gICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5PUEVOO1xuICAgIHRoaXMuZW1pdCgnb3BlbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXQgdGhlIGAnY2xvc2UnYCBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGVtaXRDbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuX3NvY2tldCkge1xuICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TRUQ7XG4gICAgICB0aGlzLmVtaXQoJ2Nsb3NlJywgdGhpcy5fY2xvc2VDb2RlLCB0aGlzLl9jbG9zZU1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdKSB7XG4gICAgICB0aGlzLl9leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdLmNsZWFudXAoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZWNlaXZlci5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NFRDtcbiAgICB0aGlzLmVtaXQoJ2Nsb3NlJywgdGhpcy5fY2xvc2VDb2RlLCB0aGlzLl9jbG9zZU1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGEgY2xvc2luZyBoYW5kc2hha2UuXG4gICAqXG4gICAqICAgICAgICAgICstLS0tLS0tLS0tKyAgICstLS0tLS0tLS0tLSsgICArLS0tLS0tLS0tLStcbiAgICogICAgIC0gLSAtfHdzLmNsb3NlKCl8LS0+fGNsb3NlIGZyYW1lfC0tPnx3cy5jbG9zZSgpfC0gLSAtXG4gICAqICAgIHwgICAgICstLS0tLS0tLS0tKyAgICstLS0tLS0tLS0tLSsgICArLS0tLS0tLS0tLSsgICAgIHxcbiAgICogICAgICAgICAgKy0tLS0tLS0tLS0rICAgKy0tLS0tLS0tLS0tKyAgICAgICAgIHxcbiAgICogQ0xPU0lORyAgfHdzLmNsb3NlKCl8PC0tfGNsb3NlIGZyYW1lfDwtLSstLS0tLSsgICAgICAgQ0xPU0lOR1xuICAgKiAgICAgICAgICArLS0tLS0tLS0tLSsgICArLS0tLS0tLS0tLS0rICAgfFxuICAgKiAgICB8ICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICstLS0rICAgICAgICB8XG4gICAqICAgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0+fGZpbnwgLSAtIC0gLVxuICAgKiAgICB8ICAgICAgICAgKy0tLSsgICAgICAgICAgICAgICAgICAgICAgfCAgICstLS0rXG4gICAqICAgICAtIC0gLSAtIC18ZmlufDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAqICAgICAgICAgICAgICArLS0tK1xuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gW2NvZGVdIFN0YXR1cyBjb2RlIGV4cGxhaW5pbmcgd2h5IHRoZSBjb25uZWN0aW9uIGlzIGNsb3NpbmdcbiAgICogQHBhcmFtIHsoU3RyaW5nfEJ1ZmZlcil9IFtkYXRhXSBUaGUgcmVhc29uIHdoeSB0aGUgY29ubmVjdGlvbiBpc1xuICAgKiAgICAgY2xvc2luZ1xuICAgKiBAcHVibGljXG4gICAqL1xuICBjbG9zZShjb2RlLCBkYXRhKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HKSB7XG4gICAgICBjb25zdCBtc2cgPSAnV2ViU29ja2V0IHdhcyBjbG9zZWQgYmVmb3JlIHRoZSBjb25uZWN0aW9uIHdhcyBlc3RhYmxpc2hlZCc7XG4gICAgICBhYm9ydEhhbmRzaGFrZSh0aGlzLCB0aGlzLl9yZXEsIG1zZyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NJTkcpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fY2xvc2VGcmFtZVNlbnQgJiZcbiAgICAgICAgKHRoaXMuX2Nsb3NlRnJhbWVSZWNlaXZlZCB8fCB0aGlzLl9yZWNlaXZlci5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fc29ja2V0LmVuZCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TSU5HO1xuICAgIHRoaXMuX3NlbmRlci5jbG9zZShjb2RlLCBkYXRhLCAhdGhpcy5faXNTZXJ2ZXIsIChlcnIpID0+IHtcbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIGVycm9yIGlzIGhhbmRsZWQgYnkgdGhlIGAnZXJyb3InYCBsaXN0ZW5lciBvbiB0aGUgc29ja2V0LiBXZSBvbmx5XG4gICAgICAvLyB3YW50IHRvIGtub3cgaWYgdGhlIGNsb3NlIGZyYW1lIGhhcyBiZWVuIHNlbnQgaGVyZS5cbiAgICAgIC8vXG4gICAgICBpZiAoZXJyKSByZXR1cm47XG5cbiAgICAgIHRoaXMuX2Nsb3NlRnJhbWVTZW50ID0gdHJ1ZTtcblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9jbG9zZUZyYW1lUmVjZWl2ZWQgfHxcbiAgICAgICAgdGhpcy5fcmVjZWl2ZXIuX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fc29ja2V0LmVuZCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2V0Q2xvc2VUaW1lcih0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXVzZSB0aGUgc29ja2V0LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwYXVzZSgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HIHx8XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRURcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wYXVzZWQgPSB0cnVlO1xuICAgIHRoaXMuX3NvY2tldC5wYXVzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IFtkYXRhXSBUaGUgZGF0YSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW21hc2tdIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrIHdoaWNoIGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHBpbmcgaXMgc2VudFxuICAgKiBAcHVibGljXG4gICAqL1xuICBwaW5nKGRhdGEsIG1hc2ssIGNiKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2ViU29ja2V0IGlzIG5vdCBvcGVuOiByZWFkeVN0YXRlIDAgKENPTk5FQ1RJTkcpJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IGRhdGE7XG4gICAgICBkYXRhID0gbWFzayA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtYXNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IG1hc2s7XG4gICAgICBtYXNrID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgc2VuZEFmdGVyQ2xvc2UodGhpcywgZGF0YSwgY2IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtYXNrID09PSB1bmRlZmluZWQpIG1hc2sgPSAhdGhpcy5faXNTZXJ2ZXI7XG4gICAgdGhpcy5fc2VuZGVyLnBpbmcoZGF0YSB8fCBFTVBUWV9CVUZGRVIsIG1hc2ssIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgcG9uZy5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBbZGF0YV0gVGhlIGRhdGEgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttYXNrXSBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgdG8gbWFzayBgZGF0YWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBDYWxsYmFjayB3aGljaCBpcyBleGVjdXRlZCB3aGVuIHRoZSBwb25nIGlzIHNlbnRcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcG9uZyhkYXRhLCBtYXNrLCBjYikge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYlNvY2tldCBpcyBub3Qgb3BlbjogcmVhZHlTdGF0ZSAwIChDT05ORUNUSU5HKScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IgPSBkYXRhO1xuICAgICAgZGF0YSA9IG1hc2sgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbWFzayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IgPSBtYXNrO1xuICAgICAgbWFzayA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInKSBkYXRhID0gZGF0YS50b1N0cmluZygpO1xuXG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSAhPT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgIHNlbmRBZnRlckNsb3NlKHRoaXMsIGRhdGEsIGNiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobWFzayA9PT0gdW5kZWZpbmVkKSBtYXNrID0gIXRoaXMuX2lzU2VydmVyO1xuICAgIHRoaXMuX3NlbmRlci5wb25nKGRhdGEgfHwgRU1QVFlfQlVGRkVSLCBtYXNrLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogUmVzdW1lIHRoZSBzb2NrZXQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHJlc3VtZSgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HIHx8XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRURcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wYXVzZWQgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuX3JlY2VpdmVyLl93cml0YWJsZVN0YXRlLm5lZWREcmFpbikgdGhpcy5fc29ja2V0LnJlc3VtZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBkYXRhIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5iaW5hcnldIFNwZWNpZmllcyB3aGV0aGVyIGBkYXRhYCBpcyBiaW5hcnkgb3JcbiAgICogICAgIHRleHRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jb21wcmVzc10gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIGNvbXByZXNzXG4gICAqICAgICBgZGF0YWBcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5maW49dHJ1ZV0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZyYWdtZW50IGlzIHRoZVxuICAgKiAgICAgbGFzdCBvbmVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tYXNrXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFzayBgZGF0YWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBDYWxsYmFjayB3aGljaCBpcyBleGVjdXRlZCB3aGVuIGRhdGEgaXMgd3JpdHRlbiBvdXRcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc2VuZChkYXRhLCBvcHRpb25zLCBjYikge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYlNvY2tldCBpcyBub3Qgb3BlbjogcmVhZHlTdGF0ZSAwIChDT05ORUNUSU5HKScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IgPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgc2VuZEFmdGVyQ2xvc2UodGhpcywgZGF0YSwgY2IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBiaW5hcnk6IHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJyxcbiAgICAgIG1hc2s6ICF0aGlzLl9pc1NlcnZlcixcbiAgICAgIGNvbXByZXNzOiB0cnVlLFxuICAgICAgZmluOiB0cnVlLFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG5cbiAgICBpZiAoIXRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pIHtcbiAgICAgIG9wdHMuY29tcHJlc3MgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZW5kZXIuc2VuZChkYXRhIHx8IEVNUFRZX0JVRkZFUiwgb3B0cywgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmNpYmx5IGNsb3NlIHRoZSBjb25uZWN0aW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICB0ZXJtaW5hdGUoKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HKSB7XG4gICAgICBjb25zdCBtc2cgPSAnV2ViU29ja2V0IHdhcyBjbG9zZWQgYmVmb3JlIHRoZSBjb25uZWN0aW9uIHdhcyBlc3RhYmxpc2hlZCc7XG4gICAgICBhYm9ydEhhbmRzaGFrZSh0aGlzLCB0aGlzLl9yZXEsIG1zZyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3NvY2tldCkge1xuICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TSU5HO1xuICAgICAgdGhpcy5fc29ja2V0LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAY29uc3RhbnQge051bWJlcn0gQ09OTkVDVElOR1xuICogQG1lbWJlcm9mIFdlYlNvY2tldFxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LCAnQ09OTkVDVElORycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHJlYWR5U3RhdGVzLmluZGV4T2YoJ0NPTk5FQ1RJTkcnKVxufSk7XG5cbi8qKlxuICogQGNvbnN0YW50IHtOdW1iZXJ9IENPTk5FQ1RJTkdcbiAqIEBtZW1iZXJvZiBXZWJTb2NrZXQucHJvdG90eXBlXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJTb2NrZXQucHJvdG90eXBlLCAnQ09OTkVDVElORycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHJlYWR5U3RhdGVzLmluZGV4T2YoJ0NPTk5FQ1RJTkcnKVxufSk7XG5cbi8qKlxuICogQGNvbnN0YW50IHtOdW1iZXJ9IE9QRU5cbiAqIEBtZW1iZXJvZiBXZWJTb2NrZXRcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldCwgJ09QRU4nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiByZWFkeVN0YXRlcy5pbmRleE9mKCdPUEVOJylcbn0pO1xuXG4vKipcbiAqIEBjb25zdGFudCB7TnVtYmVyfSBPUEVOXG4gKiBAbWVtYmVyb2YgV2ViU29ja2V0LnByb3RvdHlwZVxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LnByb3RvdHlwZSwgJ09QRU4nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiByZWFkeVN0YXRlcy5pbmRleE9mKCdPUEVOJylcbn0pO1xuXG4vKipcbiAqIEBjb25zdGFudCB7TnVtYmVyfSBDTE9TSU5HXG4gKiBAbWVtYmVyb2YgV2ViU29ja2V0XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJTb2NrZXQsICdDTE9TSU5HJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICB2YWx1ZTogcmVhZHlTdGF0ZXMuaW5kZXhPZignQ0xPU0lORycpXG59KTtcblxuLyoqXG4gKiBAY29uc3RhbnQge051bWJlcn0gQ0xPU0lOR1xuICogQG1lbWJlcm9mIFdlYlNvY2tldC5wcm90b3R5cGVcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldC5wcm90b3R5cGUsICdDTE9TSU5HJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICB2YWx1ZTogcmVhZHlTdGF0ZXMuaW5kZXhPZignQ0xPU0lORycpXG59KTtcblxuLyoqXG4gKiBAY29uc3RhbnQge051bWJlcn0gQ0xPU0VEXG4gKiBAbWVtYmVyb2YgV2ViU29ja2V0XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJTb2NrZXQsICdDTE9TRUQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiByZWFkeVN0YXRlcy5pbmRleE9mKCdDTE9TRUQnKVxufSk7XG5cbi8qKlxuICogQGNvbnN0YW50IHtOdW1iZXJ9IENMT1NFRFxuICogQG1lbWJlcm9mIFdlYlNvY2tldC5wcm90b3R5cGVcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldC5wcm90b3R5cGUsICdDTE9TRUQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiByZWFkeVN0YXRlcy5pbmRleE9mKCdDTE9TRUQnKVxufSk7XG5cbltcbiAgJ2JpbmFyeVR5cGUnLFxuICAnYnVmZmVyZWRBbW91bnQnLFxuICAnZXh0ZW5zaW9ucycsXG4gICdpc1BhdXNlZCcsXG4gICdwcm90b2NvbCcsXG4gICdyZWFkeVN0YXRlJyxcbiAgJ3VybCdcbl0uZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldC5wcm90b3R5cGUsIHByb3BlcnR5LCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG59KTtcblxuLy9cbi8vIEFkZCB0aGUgYG9ub3BlbmAsIGBvbmVycm9yYCwgYG9uY2xvc2VgLCBhbmQgYG9ubWVzc2FnZWAgYXR0cmlidXRlcy5cbi8vIFNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9jb21tcy5odG1sI3RoZS13ZWJzb2NrZXQtaW50ZXJmYWNlXG4vL1xuWydvcGVuJywgJ2Vycm9yJywgJ2Nsb3NlJywgJ21lc3NhZ2UnXS5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldC5wcm90b3R5cGUsIGBvbiR7bWV0aG9kfWAsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMobWV0aG9kKSkge1xuICAgICAgICBpZiAobGlzdGVuZXJba0Zvck9uRXZlbnRBdHRyaWJ1dGVdKSByZXR1cm4gbGlzdGVuZXJba0xpc3RlbmVyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBzZXQoaGFuZGxlcikge1xuICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycyhtZXRob2QpKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lcltrRm9yT25FdmVudEF0dHJpYnV0ZV0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKG1ldGhvZCwgbGlzdGVuZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIobWV0aG9kLCBoYW5kbGVyLCB7XG4gICAgICAgIFtrRm9yT25FdmVudEF0dHJpYnV0ZV06IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KTtcblxuV2ViU29ja2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcjtcbldlYlNvY2tldC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViU29ja2V0O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBXZWJTb2NrZXQgY2xpZW50LlxuICpcbiAqIEBwYXJhbSB7V2ViU29ja2V0fSB3ZWJzb2NrZXQgVGhlIGNsaWVudCB0byBpbml0aWFsaXplXG4gKiBAcGFyYW0geyhTdHJpbmd8VVJMKX0gYWRkcmVzcyBUaGUgVVJMIHRvIHdoaWNoIHRvIGNvbm5lY3RcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3RvY29scyBUaGUgc3VicHJvdG9jb2xzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIENvbm5lY3Rpb24gb3B0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hbGxvd1N5bmNocm9ub3VzRXZlbnRzPXRydWVdIFNwZWNpZmllcyB3aGV0aGVyIGFueVxuICogICAgIG9mIHRoZSBgJ21lc3NhZ2UnYCwgYCdwaW5nJ2AsIGFuZCBgJ3BvbmcnYCBldmVudHMgY2FuIGJlIGVtaXR0ZWQgbXVsdGlwbGVcbiAqICAgICB0aW1lcyBpbiB0aGUgc2FtZSB0aWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmF1dG9Qb25nPXRydWVdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0b1xuICogICAgIGF1dG9tYXRpY2FsbHkgc2VuZCBhIHBvbmcgaW4gcmVzcG9uc2UgdG8gYSBwaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuY2xvc2VUaW1lb3V0PTMwMDAwXSBEdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgdG8gd2FpdFxuICogICAgIGZvciB0aGUgY2xvc2luZyBoYW5kc2hha2UgdG8gZmluaXNoIGFmdGVyIGB3ZWJzb2NrZXQuY2xvc2UoKWAgaXMgY2FsbGVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5maW5pc2hSZXF1ZXN0XSBBIGZ1bmN0aW9uIHdoaWNoIGNhbiBiZSB1c2VkIHRvXG4gKiAgICAgY3VzdG9taXplIHRoZSBoZWFkZXJzIG9mIGVhY2ggaHR0cCByZXF1ZXN0IGJlZm9yZSBpdCBpcyBzZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZvbGxvd1JlZGlyZWN0cz1mYWxzZV0gV2hldGhlciBvciBub3QgdG8gZm9sbG93XG4gKiAgICAgcmVkaXJlY3RzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5nZW5lcmF0ZU1hc2tdIFRoZSBmdW5jdGlvbiB1c2VkIHRvIGdlbmVyYXRlIHRoZVxuICogICAgIG1hc2tpbmcga2V5XG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuaGFuZHNoYWtlVGltZW91dF0gVGltZW91dCBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZVxuICogICAgIGhhbmRzaGFrZSByZXF1ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMubWF4UGF5bG9hZD0xMDQ4NTc2MDBdIFRoZSBtYXhpbXVtIGFsbG93ZWQgbWVzc2FnZVxuICogICAgIHNpemVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhSZWRpcmVjdHM9MTBdIFRoZSBtYXhpbXVtIG51bWJlciBvZiByZWRpcmVjdHNcbiAqICAgICBhbGxvd2VkXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMub3JpZ2luXSBWYWx1ZSBvZiB0aGUgYE9yaWdpbmAgb3JcbiAqICAgICBgU2VjLVdlYlNvY2tldC1PcmlnaW5gIGhlYWRlclxuICogQHBhcmFtIHsoQm9vbGVhbnxPYmplY3QpfSBbb3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZT10cnVlXSBFbmFibGUvZGlzYWJsZVxuICogICAgIHBlcm1lc3NhZ2UtZGVmbGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnByb3RvY29sVmVyc2lvbj0xM10gVmFsdWUgb2YgdGhlXG4gKiAgICAgYFNlYy1XZWJTb2NrZXQtVmVyc2lvbmAgaGVhZGVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnNraXBVVEY4VmFsaWRhdGlvbj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3JcbiAqICAgICBub3QgdG8gc2tpcCBVVEYtOCB2YWxpZGF0aW9uIGZvciB0ZXh0IGFuZCBjbG9zZSBtZXNzYWdlc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5pdEFzQ2xpZW50KHdlYnNvY2tldCwgYWRkcmVzcywgcHJvdG9jb2xzLCBvcHRpb25zKSB7XG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgYWxsb3dTeW5jaHJvbm91c0V2ZW50czogdHJ1ZSxcbiAgICBhdXRvUG9uZzogdHJ1ZSxcbiAgICBjbG9zZVRpbWVvdXQ6IENMT1NFX1RJTUVPVVQsXG4gICAgcHJvdG9jb2xWZXJzaW9uOiBwcm90b2NvbFZlcnNpb25zWzFdLFxuICAgIG1heFBheWxvYWQ6IDEwMCAqIDEwMjQgKiAxMDI0LFxuICAgIHNraXBVVEY4VmFsaWRhdGlvbjogZmFsc2UsXG4gICAgcGVyTWVzc2FnZURlZmxhdGU6IHRydWUsXG4gICAgZm9sbG93UmVkaXJlY3RzOiBmYWxzZSxcbiAgICBtYXhSZWRpcmVjdHM6IDEwLFxuICAgIC4uLm9wdGlvbnMsXG4gICAgc29ja2V0UGF0aDogdW5kZWZpbmVkLFxuICAgIGhvc3RuYW1lOiB1bmRlZmluZWQsXG4gICAgcHJvdG9jb2w6IHVuZGVmaW5lZCxcbiAgICB0aW1lb3V0OiB1bmRlZmluZWQsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBob3N0OiB1bmRlZmluZWQsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIHBvcnQ6IHVuZGVmaW5lZFxuICB9O1xuXG4gIHdlYnNvY2tldC5fYXV0b1BvbmcgPSBvcHRzLmF1dG9Qb25nO1xuICB3ZWJzb2NrZXQuX2Nsb3NlVGltZW91dCA9IG9wdHMuY2xvc2VUaW1lb3V0O1xuXG4gIGlmICghcHJvdG9jb2xWZXJzaW9ucy5pbmNsdWRlcyhvcHRzLnByb3RvY29sVmVyc2lvbikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgIGBVbnN1cHBvcnRlZCBwcm90b2NvbCB2ZXJzaW9uOiAke29wdHMucHJvdG9jb2xWZXJzaW9ufSBgICtcbiAgICAgICAgYChzdXBwb3J0ZWQgdmVyc2lvbnM6ICR7cHJvdG9jb2xWZXJzaW9ucy5qb2luKCcsICcpfSlgXG4gICAgKTtcbiAgfVxuXG4gIGxldCBwYXJzZWRVcmw7XG5cbiAgaWYgKGFkZHJlc3MgaW5zdGFuY2VvZiBVUkwpIHtcbiAgICBwYXJzZWRVcmwgPSBhZGRyZXNzO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBwYXJzZWRVcmwgPSBuZXcgVVJMKGFkZHJlc3MpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBJbnZhbGlkIFVSTDogJHthZGRyZXNzfWApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJzZWRVcmwucHJvdG9jb2wgPT09ICdodHRwOicpIHtcbiAgICBwYXJzZWRVcmwucHJvdG9jb2wgPSAnd3M6JztcbiAgfSBlbHNlIGlmIChwYXJzZWRVcmwucHJvdG9jb2wgPT09ICdodHRwczonKSB7XG4gICAgcGFyc2VkVXJsLnByb3RvY29sID0gJ3dzczonO1xuICB9XG5cbiAgd2Vic29ja2V0Ll91cmwgPSBwYXJzZWRVcmwuaHJlZjtcblxuICBjb25zdCBpc1NlY3VyZSA9IHBhcnNlZFVybC5wcm90b2NvbCA9PT0gJ3dzczonO1xuICBjb25zdCBpc0lwY1VybCA9IHBhcnNlZFVybC5wcm90b2NvbCA9PT0gJ3dzK3VuaXg6JztcbiAgbGV0IGludmFsaWRVcmxNZXNzYWdlO1xuXG4gIGlmIChwYXJzZWRVcmwucHJvdG9jb2wgIT09ICd3czonICYmICFpc1NlY3VyZSAmJiAhaXNJcGNVcmwpIHtcbiAgICBpbnZhbGlkVXJsTWVzc2FnZSA9XG4gICAgICAnVGhlIFVSTFxcJ3MgcHJvdG9jb2wgbXVzdCBiZSBvbmUgb2YgXCJ3czpcIiwgXCJ3c3M6XCIsICcgK1xuICAgICAgJ1wiaHR0cDpcIiwgXCJodHRwczpcIiwgb3IgXCJ3cyt1bml4OlwiJztcbiAgfSBlbHNlIGlmIChpc0lwY1VybCAmJiAhcGFyc2VkVXJsLnBhdGhuYW1lKSB7XG4gICAgaW52YWxpZFVybE1lc3NhZ2UgPSBcIlRoZSBVUkwncyBwYXRobmFtZSBpcyBlbXB0eVwiO1xuICB9IGVsc2UgaWYgKHBhcnNlZFVybC5oYXNoKSB7XG4gICAgaW52YWxpZFVybE1lc3NhZ2UgPSAnVGhlIFVSTCBjb250YWlucyBhIGZyYWdtZW50IGlkZW50aWZpZXInO1xuICB9XG5cbiAgaWYgKGludmFsaWRVcmxNZXNzYWdlKSB7XG4gICAgY29uc3QgZXJyID0gbmV3IFN5bnRheEVycm9yKGludmFsaWRVcmxNZXNzYWdlKTtcblxuICAgIGlmICh3ZWJzb2NrZXQuX3JlZGlyZWN0cyA9PT0gMCkge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0RXJyb3JBbmRDbG9zZSh3ZWJzb2NrZXQsIGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVmYXVsdFBvcnQgPSBpc1NlY3VyZSA/IDQ0MyA6IDgwO1xuICBjb25zdCBrZXkgPSByYW5kb21CeXRlcygxNikudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICBjb25zdCByZXF1ZXN0ID0gaXNTZWN1cmUgPyBodHRwcy5yZXF1ZXN0IDogaHR0cC5yZXF1ZXN0O1xuICBjb25zdCBwcm90b2NvbFNldCA9IG5ldyBTZXQoKTtcbiAgbGV0IHBlck1lc3NhZ2VEZWZsYXRlO1xuXG4gIG9wdHMuY3JlYXRlQ29ubmVjdGlvbiA9XG4gICAgb3B0cy5jcmVhdGVDb25uZWN0aW9uIHx8IChpc1NlY3VyZSA/IHRsc0Nvbm5lY3QgOiBuZXRDb25uZWN0KTtcbiAgb3B0cy5kZWZhdWx0UG9ydCA9IG9wdHMuZGVmYXVsdFBvcnQgfHwgZGVmYXVsdFBvcnQ7XG4gIG9wdHMucG9ydCA9IHBhcnNlZFVybC5wb3J0IHx8IGRlZmF1bHRQb3J0O1xuICBvcHRzLmhvc3QgPSBwYXJzZWRVcmwuaG9zdG5hbWUuc3RhcnRzV2l0aCgnWycpXG4gICAgPyBwYXJzZWRVcmwuaG9zdG5hbWUuc2xpY2UoMSwgLTEpXG4gICAgOiBwYXJzZWRVcmwuaG9zdG5hbWU7XG4gIG9wdHMuaGVhZGVycyA9IHtcbiAgICAuLi5vcHRzLmhlYWRlcnMsXG4gICAgJ1NlYy1XZWJTb2NrZXQtVmVyc2lvbic6IG9wdHMucHJvdG9jb2xWZXJzaW9uLFxuICAgICdTZWMtV2ViU29ja2V0LUtleSc6IGtleSxcbiAgICBDb25uZWN0aW9uOiAnVXBncmFkZScsXG4gICAgVXBncmFkZTogJ3dlYnNvY2tldCdcbiAgfTtcbiAgb3B0cy5wYXRoID0gcGFyc2VkVXJsLnBhdGhuYW1lICsgcGFyc2VkVXJsLnNlYXJjaDtcbiAgb3B0cy50aW1lb3V0ID0gb3B0cy5oYW5kc2hha2VUaW1lb3V0O1xuXG4gIGlmIChvcHRzLnBlck1lc3NhZ2VEZWZsYXRlKSB7XG4gICAgcGVyTWVzc2FnZURlZmxhdGUgPSBuZXcgUGVyTWVzc2FnZURlZmxhdGUoe1xuICAgICAgLi4ub3B0cy5wZXJNZXNzYWdlRGVmbGF0ZSxcbiAgICAgIGlzU2VydmVyOiBmYWxzZSxcbiAgICAgIG1heFBheWxvYWQ6IG9wdHMubWF4UGF5bG9hZFxuICAgIH0pO1xuICAgIG9wdHMuaGVhZGVyc1snU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zJ10gPSBmb3JtYXQoe1xuICAgICAgW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdOiBwZXJNZXNzYWdlRGVmbGF0ZS5vZmZlcigpXG4gICAgfSk7XG4gIH1cbiAgaWYgKHByb3RvY29scy5sZW5ndGgpIHtcbiAgICBmb3IgKGNvbnN0IHByb3RvY29sIG9mIHByb3RvY29scykge1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgcHJvdG9jb2wgIT09ICdzdHJpbmcnIHx8XG4gICAgICAgICFzdWJwcm90b2NvbFJlZ2V4LnRlc3QocHJvdG9jb2wpIHx8XG4gICAgICAgIHByb3RvY29sU2V0Lmhhcyhwcm90b2NvbClcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXG4gICAgICAgICAgJ0FuIGludmFsaWQgb3IgZHVwbGljYXRlZCBzdWJwcm90b2NvbCB3YXMgc3BlY2lmaWVkJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBwcm90b2NvbFNldC5hZGQocHJvdG9jb2wpO1xuICAgIH1cblxuICAgIG9wdHMuaGVhZGVyc1snU2VjLVdlYlNvY2tldC1Qcm90b2NvbCddID0gcHJvdG9jb2xzLmpvaW4oJywnKTtcbiAgfVxuICBpZiAob3B0cy5vcmlnaW4pIHtcbiAgICBpZiAob3B0cy5wcm90b2NvbFZlcnNpb24gPCAxMykge1xuICAgICAgb3B0cy5oZWFkZXJzWydTZWMtV2ViU29ja2V0LU9yaWdpbiddID0gb3B0cy5vcmlnaW47XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdHMuaGVhZGVycy5PcmlnaW4gPSBvcHRzLm9yaWdpbjtcbiAgICB9XG4gIH1cbiAgaWYgKHBhcnNlZFVybC51c2VybmFtZSB8fCBwYXJzZWRVcmwucGFzc3dvcmQpIHtcbiAgICBvcHRzLmF1dGggPSBgJHtwYXJzZWRVcmwudXNlcm5hbWV9OiR7cGFyc2VkVXJsLnBhc3N3b3JkfWA7XG4gIH1cblxuICBpZiAoaXNJcGNVcmwpIHtcbiAgICBjb25zdCBwYXJ0cyA9IG9wdHMucGF0aC5zcGxpdCgnOicpO1xuXG4gICAgb3B0cy5zb2NrZXRQYXRoID0gcGFydHNbMF07XG4gICAgb3B0cy5wYXRoID0gcGFydHNbMV07XG4gIH1cblxuICBsZXQgcmVxO1xuXG4gIGlmIChvcHRzLmZvbGxvd1JlZGlyZWN0cykge1xuICAgIGlmICh3ZWJzb2NrZXQuX3JlZGlyZWN0cyA9PT0gMCkge1xuICAgICAgd2Vic29ja2V0Ll9vcmlnaW5hbElwYyA9IGlzSXBjVXJsO1xuICAgICAgd2Vic29ja2V0Ll9vcmlnaW5hbFNlY3VyZSA9IGlzU2VjdXJlO1xuICAgICAgd2Vic29ja2V0Ll9vcmlnaW5hbEhvc3RPclNvY2tldFBhdGggPSBpc0lwY1VybFxuICAgICAgICA/IG9wdHMuc29ja2V0UGF0aFxuICAgICAgICA6IHBhcnNlZFVybC5ob3N0O1xuXG4gICAgICBjb25zdCBoZWFkZXJzID0gb3B0aW9ucyAmJiBvcHRpb25zLmhlYWRlcnM7XG5cbiAgICAgIC8vXG4gICAgICAvLyBTaGFsbG93IGNvcHkgdGhlIHVzZXIgcHJvdmlkZWQgb3B0aW9ucyBzbyB0aGF0IGhlYWRlcnMgY2FuIGJlIGNoYW5nZWRcbiAgICAgIC8vIHdpdGhvdXQgbXV0YXRpbmcgdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAgICAgIC8vXG4gICAgICBvcHRpb25zID0geyAuLi5vcHRpb25zLCBoZWFkZXJzOiB7fSB9O1xuXG4gICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhoZWFkZXJzKSkge1xuICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1trZXkudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAod2Vic29ja2V0Lmxpc3RlbmVyQ291bnQoJ3JlZGlyZWN0JykgPT09IDApIHtcbiAgICAgIGNvbnN0IGlzU2FtZUhvc3QgPSBpc0lwY1VybFxuICAgICAgICA/IHdlYnNvY2tldC5fb3JpZ2luYWxJcGNcbiAgICAgICAgICA/IG9wdHMuc29ja2V0UGF0aCA9PT0gd2Vic29ja2V0Ll9vcmlnaW5hbEhvc3RPclNvY2tldFBhdGhcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICAgIDogd2Vic29ja2V0Ll9vcmlnaW5hbElwY1xuICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICA6IHBhcnNlZFVybC5ob3N0ID09PSB3ZWJzb2NrZXQuX29yaWdpbmFsSG9zdE9yU29ja2V0UGF0aDtcblxuICAgICAgaWYgKCFpc1NhbWVIb3N0IHx8ICh3ZWJzb2NrZXQuX29yaWdpbmFsU2VjdXJlICYmICFpc1NlY3VyZSkpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gTWF0Y2ggY3VybCA3Ljc3LjAgYmVoYXZpb3IgYW5kIGRyb3AgdGhlIGZvbGxvd2luZyBoZWFkZXJzLiBUaGVzZVxuICAgICAgICAvLyBoZWFkZXJzIGFyZSBhbHNvIGRyb3BwZWQgd2hlbiBmb2xsb3dpbmcgYSByZWRpcmVjdCB0byBhIHN1YmRvbWFpbi5cbiAgICAgICAgLy9cbiAgICAgICAgZGVsZXRlIG9wdHMuaGVhZGVycy5hdXRob3JpemF0aW9uO1xuICAgICAgICBkZWxldGUgb3B0cy5oZWFkZXJzLmNvb2tpZTtcblxuICAgICAgICBpZiAoIWlzU2FtZUhvc3QpIGRlbGV0ZSBvcHRzLmhlYWRlcnMuaG9zdDtcblxuICAgICAgICBvcHRzLmF1dGggPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBNYXRjaCBjdXJsIDcuNzcuMCBiZWhhdmlvciBhbmQgbWFrZSB0aGUgZmlyc3QgYEF1dGhvcml6YXRpb25gIGhlYWRlciB3aW4uXG4gICAgLy8gSWYgdGhlIGBBdXRob3JpemF0aW9uYCBoZWFkZXIgaXMgc2V0LCB0aGVuIHRoZXJlIGlzIG5vdGhpbmcgdG8gZG8gYXMgaXRcbiAgICAvLyB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAgICAvL1xuICAgIGlmIChvcHRzLmF1dGggJiYgIW9wdGlvbnMuaGVhZGVycy5hdXRob3JpemF0aW9uKSB7XG4gICAgICBvcHRpb25zLmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9XG4gICAgICAgICdCYXNpYyAnICsgQnVmZmVyLmZyb20ob3B0cy5hdXRoKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgfVxuXG4gICAgcmVxID0gd2Vic29ja2V0Ll9yZXEgPSByZXF1ZXN0KG9wdHMpO1xuXG4gICAgaWYgKHdlYnNvY2tldC5fcmVkaXJlY3RzKSB7XG4gICAgICAvL1xuICAgICAgLy8gVW5saWtlIHdoYXQgaXMgZG9uZSBmb3IgdGhlIGAndXBncmFkZSdgIGV2ZW50LCBubyBlYXJseSBleGl0IGlzXG4gICAgICAvLyB0cmlnZ2VyZWQgaGVyZSBpZiB0aGUgdXNlciBjYWxscyBgd2Vic29ja2V0LmNsb3NlKClgIG9yXG4gICAgICAvLyBgd2Vic29ja2V0LnRlcm1pbmF0ZSgpYCBmcm9tIGEgbGlzdGVuZXIgb2YgdGhlIGAncmVkaXJlY3QnYCBldmVudC4gVGhpc1xuICAgICAgLy8gaXMgYmVjYXVzZSB0aGUgdXNlciBjYW4gYWxzbyBjYWxsIGByZXF1ZXN0LmRlc3Ryb3koKWAgd2l0aCBhbiBlcnJvclxuICAgICAgLy8gYmVmb3JlIGNhbGxpbmcgYHdlYnNvY2tldC5jbG9zZSgpYCBvciBgd2Vic29ja2V0LnRlcm1pbmF0ZSgpYCBhbmQgdGhpc1xuICAgICAgLy8gd291bGQgcmVzdWx0IGluIGFuIGVycm9yIGJlaW5nIGVtaXR0ZWQgb24gdGhlIGByZXF1ZXN0YCBvYmplY3Qgd2l0aCBub1xuICAgICAgLy8gYCdlcnJvcidgIGV2ZW50IGxpc3RlbmVycyBhdHRhY2hlZC5cbiAgICAgIC8vXG4gICAgICB3ZWJzb2NrZXQuZW1pdCgncmVkaXJlY3QnLCB3ZWJzb2NrZXQudXJsLCByZXEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXEgPSB3ZWJzb2NrZXQuX3JlcSA9IHJlcXVlc3Qob3B0cyk7XG4gIH1cblxuICBpZiAob3B0cy50aW1lb3V0KSB7XG4gICAgcmVxLm9uKCd0aW1lb3V0JywgKCkgPT4ge1xuICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCByZXEsICdPcGVuaW5nIGhhbmRzaGFrZSBoYXMgdGltZWQgb3V0Jyk7XG4gICAgfSk7XG4gIH1cblxuICByZXEub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICAgIGlmIChyZXEgPT09IG51bGwgfHwgcmVxW2tBYm9ydGVkXSkgcmV0dXJuO1xuXG4gICAgcmVxID0gd2Vic29ja2V0Ll9yZXEgPSBudWxsO1xuICAgIGVtaXRFcnJvckFuZENsb3NlKHdlYnNvY2tldCwgZXJyKTtcbiAgfSk7XG5cbiAgcmVxLm9uKCdyZXNwb25zZScsIChyZXMpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHJlcy5oZWFkZXJzLmxvY2F0aW9uO1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZTtcblxuICAgIGlmIChcbiAgICAgIGxvY2F0aW9uICYmXG4gICAgICBvcHRzLmZvbGxvd1JlZGlyZWN0cyAmJlxuICAgICAgc3RhdHVzQ29kZSA+PSAzMDAgJiZcbiAgICAgIHN0YXR1c0NvZGUgPCA0MDBcbiAgICApIHtcbiAgICAgIGlmICgrK3dlYnNvY2tldC5fcmVkaXJlY3RzID4gb3B0cy5tYXhSZWRpcmVjdHMpIHtcbiAgICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCByZXEsICdNYXhpbXVtIHJlZGlyZWN0cyBleGNlZWRlZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlcS5hYm9ydCgpO1xuXG4gICAgICBsZXQgYWRkcjtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYWRkciA9IG5ldyBVUkwobG9jYXRpb24sIGFkZHJlc3MpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgU3ludGF4RXJyb3IoYEludmFsaWQgVVJMOiAke2xvY2F0aW9ufWApO1xuICAgICAgICBlbWl0RXJyb3JBbmRDbG9zZSh3ZWJzb2NrZXQsIGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaW5pdEFzQ2xpZW50KHdlYnNvY2tldCwgYWRkciwgcHJvdG9jb2xzLCBvcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKCF3ZWJzb2NrZXQuZW1pdCgndW5leHBlY3RlZC1yZXNwb25zZScsIHJlcSwgcmVzKSkge1xuICAgICAgYWJvcnRIYW5kc2hha2UoXG4gICAgICAgIHdlYnNvY2tldCxcbiAgICAgICAgcmVxLFxuICAgICAgICBgVW5leHBlY3RlZCBzZXJ2ZXIgcmVzcG9uc2U6ICR7cmVzLnN0YXR1c0NvZGV9YFxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJlcS5vbigndXBncmFkZScsIChyZXMsIHNvY2tldCwgaGVhZCkgPT4ge1xuICAgIHdlYnNvY2tldC5lbWl0KCd1cGdyYWRlJywgcmVzKTtcblxuICAgIC8vXG4gICAgLy8gVGhlIHVzZXIgbWF5IGhhdmUgY2xvc2VkIHRoZSBjb25uZWN0aW9uIGZyb20gYSBsaXN0ZW5lciBvZiB0aGVcbiAgICAvLyBgJ3VwZ3JhZGUnYCBldmVudC5cbiAgICAvL1xuICAgIGlmICh3ZWJzb2NrZXQucmVhZHlTdGF0ZSAhPT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHJldHVybjtcblxuICAgIHJlcSA9IHdlYnNvY2tldC5fcmVxID0gbnVsbDtcblxuICAgIGNvbnN0IHVwZ3JhZGUgPSByZXMuaGVhZGVycy51cGdyYWRlO1xuXG4gICAgaWYgKHVwZ3JhZGUgPT09IHVuZGVmaW5lZCB8fCB1cGdyYWRlLnRvTG93ZXJDYXNlKCkgIT09ICd3ZWJzb2NrZXQnKSB7XG4gICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHNvY2tldCwgJ0ludmFsaWQgVXBncmFkZSBoZWFkZXInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaWdlc3QgPSBjcmVhdGVIYXNoKCdzaGExJylcbiAgICAgIC51cGRhdGUoa2V5ICsgR1VJRClcbiAgICAgIC5kaWdlc3QoJ2Jhc2U2NCcpO1xuXG4gICAgaWYgKHJlcy5oZWFkZXJzWydzZWMtd2Vic29ja2V0LWFjY2VwdCddICE9PSBkaWdlc3QpIHtcbiAgICAgIGFib3J0SGFuZHNoYWtlKHdlYnNvY2tldCwgc29ja2V0LCAnSW52YWxpZCBTZWMtV2ViU29ja2V0LUFjY2VwdCBoZWFkZXInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZXJ2ZXJQcm90ID0gcmVzLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtcHJvdG9jb2wnXTtcbiAgICBsZXQgcHJvdEVycm9yO1xuXG4gICAgaWYgKHNlcnZlclByb3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCFwcm90b2NvbFNldC5zaXplKSB7XG4gICAgICAgIHByb3RFcnJvciA9ICdTZXJ2ZXIgc2VudCBhIHN1YnByb3RvY29sIGJ1dCBub25lIHdhcyByZXF1ZXN0ZWQnO1xuICAgICAgfSBlbHNlIGlmICghcHJvdG9jb2xTZXQuaGFzKHNlcnZlclByb3QpKSB7XG4gICAgICAgIHByb3RFcnJvciA9ICdTZXJ2ZXIgc2VudCBhbiBpbnZhbGlkIHN1YnByb3RvY29sJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHByb3RvY29sU2V0LnNpemUpIHtcbiAgICAgIHByb3RFcnJvciA9ICdTZXJ2ZXIgc2VudCBubyBzdWJwcm90b2NvbCc7XG4gICAgfVxuXG4gICAgaWYgKHByb3RFcnJvcikge1xuICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCBzb2NrZXQsIHByb3RFcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlcnZlclByb3QpIHdlYnNvY2tldC5fcHJvdG9jb2wgPSBzZXJ2ZXJQcm90O1xuXG4gICAgY29uc3Qgc2VjV2ViU29ja2V0RXh0ZW5zaW9ucyA9IHJlcy5oZWFkZXJzWydzZWMtd2Vic29ja2V0LWV4dGVuc2lvbnMnXTtcblxuICAgIGlmIChzZWNXZWJTb2NrZXRFeHRlbnNpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICghcGVyTWVzc2FnZURlZmxhdGUpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAgICAgJ1NlcnZlciBzZW50IGEgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zIGhlYWRlciBidXQgbm8gZXh0ZW5zaW9uICcgK1xuICAgICAgICAgICd3YXMgcmVxdWVzdGVkJztcbiAgICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCBzb2NrZXQsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBleHRlbnNpb25zO1xuXG4gICAgICB0cnkge1xuICAgICAgICBleHRlbnNpb25zID0gcGFyc2Uoc2VjV2ViU29ja2V0RXh0ZW5zaW9ucyk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdJbnZhbGlkIFNlYy1XZWJTb2NrZXQtRXh0ZW5zaW9ucyBoZWFkZXInO1xuICAgICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHNvY2tldCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXh0ZW5zaW9uTmFtZXMgPSBPYmplY3Qua2V5cyhleHRlbnNpb25zKTtcblxuICAgICAgaWYgKFxuICAgICAgICBleHRlbnNpb25OYW1lcy5sZW5ndGggIT09IDEgfHxcbiAgICAgICAgZXh0ZW5zaW9uTmFtZXNbMF0gIT09IFBlck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVcbiAgICAgICkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ1NlcnZlciBpbmRpY2F0ZWQgYW4gZXh0ZW5zaW9uIHRoYXQgd2FzIG5vdCByZXF1ZXN0ZWQnO1xuICAgICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHNvY2tldCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcGVyTWVzc2FnZURlZmxhdGUuYWNjZXB0KGV4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnSW52YWxpZCBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnMgaGVhZGVyJztcbiAgICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCBzb2NrZXQsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdlYnNvY2tldC5fZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSA9XG4gICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlO1xuICAgIH1cblxuICAgIHdlYnNvY2tldC5zZXRTb2NrZXQoc29ja2V0LCBoZWFkLCB7XG4gICAgICBhbGxvd1N5bmNocm9ub3VzRXZlbnRzOiBvcHRzLmFsbG93U3luY2hyb25vdXNFdmVudHMsXG4gICAgICBnZW5lcmF0ZU1hc2s6IG9wdHMuZ2VuZXJhdGVNYXNrLFxuICAgICAgbWF4UGF5bG9hZDogb3B0cy5tYXhQYXlsb2FkLFxuICAgICAgc2tpcFVURjhWYWxpZGF0aW9uOiBvcHRzLnNraXBVVEY4VmFsaWRhdGlvblxuICAgIH0pO1xuICB9KTtcblxuICBpZiAob3B0cy5maW5pc2hSZXF1ZXN0KSB7XG4gICAgb3B0cy5maW5pc2hSZXF1ZXN0KHJlcSwgd2Vic29ja2V0KTtcbiAgfSBlbHNlIHtcbiAgICByZXEuZW5kKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBFbWl0IHRoZSBgJ2Vycm9yJ2AgYW5kIGAnY2xvc2UnYCBldmVudHMuXG4gKlxuICogQHBhcmFtIHtXZWJTb2NrZXR9IHdlYnNvY2tldCBUaGUgV2ViU29ja2V0IGluc3RhbmNlXG4gKiBAcGFyYW0ge0Vycm9yfSBUaGUgZXJyb3IgdG8gZW1pdFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZW1pdEVycm9yQW5kQ2xvc2Uod2Vic29ja2V0LCBlcnIpIHtcbiAgd2Vic29ja2V0Ll9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gIC8vXG4gIC8vIFRoZSBmb2xsb3dpbmcgYXNzaWdubWVudCBpcyBwcmFjdGljYWxseSB1c2VsZXNzIGFuZCBpcyBkb25lIG9ubHkgZm9yXG4gIC8vIGNvbnNpc3RlbmN5LlxuICAvL1xuICB3ZWJzb2NrZXQuX2Vycm9yRW1pdHRlZCA9IHRydWU7XG4gIHdlYnNvY2tldC5lbWl0KCdlcnJvcicsIGVycik7XG4gIHdlYnNvY2tldC5lbWl0Q2xvc2UoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBgbmV0LlNvY2tldGAgYW5kIGluaXRpYXRlIGEgY29ubmVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBDb25uZWN0aW9uIG9wdGlvbnNcbiAqIEByZXR1cm4ge25ldC5Tb2NrZXR9IFRoZSBuZXdseSBjcmVhdGVkIHNvY2tldCB1c2VkIHRvIHN0YXJ0IHRoZSBjb25uZWN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBuZXRDb25uZWN0KG9wdGlvbnMpIHtcbiAgb3B0aW9ucy5wYXRoID0gb3B0aW9ucy5zb2NrZXRQYXRoO1xuICByZXR1cm4gbmV0LmNvbm5lY3Qob3B0aW9ucyk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYHRscy5UTFNTb2NrZXRgIGFuZCBpbml0aWF0ZSBhIGNvbm5lY3Rpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQ29ubmVjdGlvbiBvcHRpb25zXG4gKiBAcmV0dXJuIHt0bHMuVExTU29ja2V0fSBUaGUgbmV3bHkgY3JlYXRlZCBzb2NrZXQgdXNlZCB0byBzdGFydCB0aGUgY29ubmVjdGlvblxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gdGxzQ29ubmVjdChvcHRpb25zKSB7XG4gIG9wdGlvbnMucGF0aCA9IHVuZGVmaW5lZDtcblxuICBpZiAoIW9wdGlvbnMuc2VydmVybmFtZSAmJiBvcHRpb25zLnNlcnZlcm5hbWUgIT09ICcnKSB7XG4gICAgb3B0aW9ucy5zZXJ2ZXJuYW1lID0gbmV0LmlzSVAob3B0aW9ucy5ob3N0KSA/ICcnIDogb3B0aW9ucy5ob3N0O1xuICB9XG5cbiAgcmV0dXJuIHRscy5jb25uZWN0KG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIEFib3J0IHRoZSBoYW5kc2hha2UgYW5kIGVtaXQgYW4gZXJyb3IuXG4gKlxuICogQHBhcmFtIHtXZWJTb2NrZXR9IHdlYnNvY2tldCBUaGUgV2ViU29ja2V0IGluc3RhbmNlXG4gKiBAcGFyYW0geyhodHRwLkNsaWVudFJlcXVlc3R8bmV0LlNvY2tldHx0bHMuU29ja2V0KX0gc3RyZWFtIFRoZSByZXF1ZXN0IHRvXG4gKiAgICAgYWJvcnQgb3IgdGhlIHNvY2tldCB0byBkZXN0cm95XG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCBzdHJlYW0sIG1lc3NhZ2UpIHtcbiAgd2Vic29ja2V0Ll9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG5cbiAgY29uc3QgZXJyID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShlcnIsIGFib3J0SGFuZHNoYWtlKTtcblxuICBpZiAoc3RyZWFtLnNldEhlYWRlcikge1xuICAgIHN0cmVhbVtrQWJvcnRlZF0gPSB0cnVlO1xuICAgIHN0cmVhbS5hYm9ydCgpO1xuXG4gICAgaWYgKHN0cmVhbS5zb2NrZXQgJiYgIXN0cmVhbS5zb2NrZXQuZGVzdHJveWVkKSB7XG4gICAgICAvL1xuICAgICAgLy8gT24gTm9kZS5qcyA+PSAxNC4zLjAgYHJlcXVlc3QuYWJvcnQoKWAgZG9lcyBub3QgZGVzdHJveSB0aGUgc29ja2V0IGlmXG4gICAgICAvLyBjYWxsZWQgYWZ0ZXIgdGhlIHJlcXVlc3QgY29tcGxldGVkLiBTZWVcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJzb2NrZXRzL3dzL2lzc3Vlcy8xODY5LlxuICAgICAgLy9cbiAgICAgIHN0cmVhbS5zb2NrZXQuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdEVycm9yQW5kQ2xvc2UsIHdlYnNvY2tldCwgZXJyKTtcbiAgfSBlbHNlIHtcbiAgICBzdHJlYW0uZGVzdHJveShlcnIpO1xuICAgIHN0cmVhbS5vbmNlKCdlcnJvcicsIHdlYnNvY2tldC5lbWl0LmJpbmQod2Vic29ja2V0LCAnZXJyb3InKSk7XG4gICAgc3RyZWFtLm9uY2UoJ2Nsb3NlJywgd2Vic29ja2V0LmVtaXRDbG9zZS5iaW5kKHdlYnNvY2tldCkpO1xuICB9XG59XG5cbi8qKlxuICogSGFuZGxlIGNhc2VzIHdoZXJlIHRoZSBgcGluZygpYCwgYHBvbmcoKWAsIG9yIGBzZW5kKClgIG1ldGhvZHMgYXJlIGNhbGxlZFxuICogd2hlbiB0aGUgYHJlYWR5U3RhdGVgIGF0dHJpYnV0ZSBpcyBgQ0xPU0lOR2Agb3IgYENMT1NFRGAuXG4gKlxuICogQHBhcmFtIHtXZWJTb2NrZXR9IHdlYnNvY2tldCBUaGUgV2ViU29ja2V0IGluc3RhbmNlXG4gKiBAcGFyYW0geyp9IFtkYXRhXSBUaGUgZGF0YSB0byBzZW5kXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZW5kQWZ0ZXJDbG9zZSh3ZWJzb2NrZXQsIGRhdGEsIGNiKSB7XG4gIGlmIChkYXRhKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gaXNCbG9iKGRhdGEpID8gZGF0YS5zaXplIDogdG9CdWZmZXIoZGF0YSkubGVuZ3RoO1xuXG4gICAgLy9cbiAgICAvLyBUaGUgYF9idWZmZXJlZEFtb3VudGAgcHJvcGVydHkgaXMgdXNlZCBvbmx5IHdoZW4gdGhlIHBlZXIgaXMgYSBjbGllbnQgYW5kXG4gICAgLy8gdGhlIG9wZW5pbmcgaGFuZHNoYWtlIGZhaWxzLiBVbmRlciB0aGVzZSBjaXJjdW1zdGFuY2VzLCBpbiBmYWN0LCB0aGVcbiAgICAvLyBgc2V0U29ja2V0KClgIG1ldGhvZCBpcyBub3QgY2FsbGVkLCBzbyB0aGUgYF9zb2NrZXRgIGFuZCBgX3NlbmRlcmBcbiAgICAvLyBwcm9wZXJ0aWVzIGFyZSBzZXQgdG8gYG51bGxgLlxuICAgIC8vXG4gICAgaWYgKHdlYnNvY2tldC5fc29ja2V0KSB3ZWJzb2NrZXQuX3NlbmRlci5fYnVmZmVyZWRCeXRlcyArPSBsZW5ndGg7XG4gICAgZWxzZSB3ZWJzb2NrZXQuX2J1ZmZlcmVkQW1vdW50ICs9IGxlbmd0aDtcbiAgfVxuXG4gIGlmIChjYikge1xuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcbiAgICAgIGBXZWJTb2NrZXQgaXMgbm90IG9wZW46IHJlYWR5U3RhdGUgJHt3ZWJzb2NrZXQucmVhZHlTdGF0ZX0gYCArXG4gICAgICAgIGAoJHtyZWFkeVN0YXRlc1t3ZWJzb2NrZXQucmVhZHlTdGF0ZV19KWBcbiAgICApO1xuICAgIHByb2Nlc3MubmV4dFRpY2soY2IsIGVycik7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGBSZWNlaXZlcmAgYCdjb25jbHVkZSdgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlIFRoZSBzdGF0dXMgY29kZVxuICogQHBhcmFtIHtCdWZmZXJ9IHJlYXNvbiBUaGUgcmVhc29uIGZvciBjbG9zaW5nXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZWNlaXZlck9uQ29uY2x1ZGUoY29kZSwgcmVhc29uKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgd2Vic29ja2V0Ll9jbG9zZUZyYW1lUmVjZWl2ZWQgPSB0cnVlO1xuICB3ZWJzb2NrZXQuX2Nsb3NlTWVzc2FnZSA9IHJlYXNvbjtcbiAgd2Vic29ja2V0Ll9jbG9zZUNvZGUgPSBjb2RlO1xuXG4gIGlmICh3ZWJzb2NrZXQuX3NvY2tldFtrV2ViU29ja2V0XSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgd2Vic29ja2V0Ll9zb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCBzb2NrZXRPbkRhdGEpO1xuICBwcm9jZXNzLm5leHRUaWNrKHJlc3VtZSwgd2Vic29ja2V0Ll9zb2NrZXQpO1xuXG4gIGlmIChjb2RlID09PSAxMDA1KSB3ZWJzb2NrZXQuY2xvc2UoKTtcbiAgZWxzZSB3ZWJzb2NrZXQuY2xvc2UoY29kZSwgcmVhc29uKTtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGBSZWNlaXZlcmAgYCdkcmFpbidgIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlY2VpdmVyT25EcmFpbigpIHtcbiAgY29uc3Qgd2Vic29ja2V0ID0gdGhpc1trV2ViU29ja2V0XTtcblxuICBpZiAoIXdlYnNvY2tldC5pc1BhdXNlZCkgd2Vic29ja2V0Ll9zb2NrZXQucmVzdW1lKCk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgUmVjZWl2ZXJgIGAnZXJyb3InYCBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhSYW5nZUVycm9yfEVycm9yKX0gZXJyIFRoZSBlbWl0dGVkIGVycm9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZWNlaXZlck9uRXJyb3IoZXJyKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgaWYgKHdlYnNvY2tldC5fc29ja2V0W2tXZWJTb2NrZXRdICE9PSB1bmRlZmluZWQpIHtcbiAgICB3ZWJzb2NrZXQuX3NvY2tldC5yZW1vdmVMaXN0ZW5lcignZGF0YScsIHNvY2tldE9uRGF0YSk7XG5cbiAgICAvL1xuICAgIC8vIE9uIE5vZGUuanMgPCAxNC4wLjAgdGhlIGAnZXJyb3InYCBldmVudCBpcyBlbWl0dGVkIHN5bmNocm9ub3VzbHkuIFNlZVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJzb2NrZXRzL3dzL2lzc3Vlcy8xOTQwLlxuICAgIC8vXG4gICAgcHJvY2Vzcy5uZXh0VGljayhyZXN1bWUsIHdlYnNvY2tldC5fc29ja2V0KTtcblxuICAgIHdlYnNvY2tldC5jbG9zZShlcnJba1N0YXR1c0NvZGVdKTtcbiAgfVxuXG4gIGlmICghd2Vic29ja2V0Ll9lcnJvckVtaXR0ZWQpIHtcbiAgICB3ZWJzb2NrZXQuX2Vycm9yRW1pdHRlZCA9IHRydWU7XG4gICAgd2Vic29ja2V0LmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgYFJlY2VpdmVyYCBgJ2ZpbmlzaCdgIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlY2VpdmVyT25GaW5pc2goKSB7XG4gIHRoaXNba1dlYlNvY2tldF0uZW1pdENsb3NlKCk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgUmVjZWl2ZXJgIGAnbWVzc2FnZSdgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfEFycmF5QnVmZmVyfEJ1ZmZlcltdKX0gZGF0YSBUaGUgbWVzc2FnZVxuICogQHBhcmFtIHtCb29sZWFufSBpc0JpbmFyeSBTcGVjaWZpZXMgd2hldGhlciB0aGUgbWVzc2FnZSBpcyBiaW5hcnkgb3Igbm90XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZWNlaXZlck9uTWVzc2FnZShkYXRhLCBpc0JpbmFyeSkge1xuICB0aGlzW2tXZWJTb2NrZXRdLmVtaXQoJ21lc3NhZ2UnLCBkYXRhLCBpc0JpbmFyeSk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgUmVjZWl2ZXJgIGAncGluZydgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIFRoZSBkYXRhIGluY2x1ZGVkIGluIHRoZSBwaW5nIGZyYW1lXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZWNlaXZlck9uUGluZyhkYXRhKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgaWYgKHdlYnNvY2tldC5fYXV0b1BvbmcpIHdlYnNvY2tldC5wb25nKGRhdGEsICF0aGlzLl9pc1NlcnZlciwgTk9PUCk7XG4gIHdlYnNvY2tldC5lbWl0KCdwaW5nJywgZGF0YSk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgUmVjZWl2ZXJgIGAncG9uZydgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIFRoZSBkYXRhIGluY2x1ZGVkIGluIHRoZSBwb25nIGZyYW1lXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZWNlaXZlck9uUG9uZyhkYXRhKSB7XG4gIHRoaXNba1dlYlNvY2tldF0uZW1pdCgncG9uZycsIGRhdGEpO1xufVxuXG4vKipcbiAqIFJlc3VtZSBhIHJlYWRhYmxlIHN0cmVhbVxuICpcbiAqIEBwYXJhbSB7UmVhZGFibGV9IHN0cmVhbSBUaGUgcmVhZGFibGUgc3RyZWFtXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZXN1bWUoc3RyZWFtKSB7XG4gIHN0cmVhbS5yZXN1bWUoKTtcbn1cblxuLyoqXG4gKiBUaGUgYFNlbmRlcmAgZXJyb3IgZXZlbnQgaGFuZGxlci5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBUaGUgZXJyb3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNlbmRlck9uRXJyb3IoZXJyKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgaWYgKHdlYnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0VEKSByZXR1cm47XG4gIGlmICh3ZWJzb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICB3ZWJzb2NrZXQuX3JlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ0xPU0lORztcbiAgICBzZXRDbG9zZVRpbWVyKHdlYnNvY2tldCk7XG4gIH1cblxuICAvL1xuICAvLyBgc29ja2V0LmVuZCgpYCBpcyB1c2VkIGluc3RlYWQgb2YgYHNvY2tldC5kZXN0cm95KClgIHRvIGFsbG93IHRoZSBvdGhlclxuICAvLyBwZWVyIHRvIGZpbmlzaCBzZW5kaW5nIHF1ZXVlZCBkYXRhLiBUaGVyZSBpcyBubyBuZWVkIHRvIHNldCBhIHRpbWVyIGhlcmVcbiAgLy8gYmVjYXVzZSBgQ0xPU0lOR2AgbWVhbnMgdGhhdCBpdCBpcyBhbHJlYWR5IHNldCBvciBub3QgbmVlZGVkLlxuICAvL1xuICB0aGlzLl9zb2NrZXQuZW5kKCk7XG5cbiAgaWYgKCF3ZWJzb2NrZXQuX2Vycm9yRW1pdHRlZCkge1xuICAgIHdlYnNvY2tldC5fZXJyb3JFbWl0dGVkID0gdHJ1ZTtcbiAgICB3ZWJzb2NrZXQuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB9XG59XG5cbi8qKlxuICogU2V0IGEgdGltZXIgdG8gZGVzdHJveSB0aGUgdW5kZXJseWluZyByYXcgc29ja2V0IG9mIGEgV2ViU29ja2V0LlxuICpcbiAqIEBwYXJhbSB7V2ViU29ja2V0fSB3ZWJzb2NrZXQgVGhlIFdlYlNvY2tldCBpbnN0YW5jZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2V0Q2xvc2VUaW1lcih3ZWJzb2NrZXQpIHtcbiAgd2Vic29ja2V0Ll9jbG9zZVRpbWVyID0gc2V0VGltZW91dChcbiAgICB3ZWJzb2NrZXQuX3NvY2tldC5kZXN0cm95LmJpbmQod2Vic29ja2V0Ll9zb2NrZXQpLFxuICAgIHdlYnNvY2tldC5fY2xvc2VUaW1lb3V0XG4gICk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBzb2NrZXQgYCdjbG9zZSdgIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNvY2tldE9uQ2xvc2UoKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgdGhpcy5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBzb2NrZXRPbkNsb3NlKTtcbiAgdGhpcy5yZW1vdmVMaXN0ZW5lcignZGF0YScsIHNvY2tldE9uRGF0YSk7XG4gIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIHNvY2tldE9uRW5kKTtcblxuICB3ZWJzb2NrZXQuX3JlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ0xPU0lORztcblxuICAvL1xuICAvLyBUaGUgY2xvc2UgZnJhbWUgbWlnaHQgbm90IGhhdmUgYmVlbiByZWNlaXZlZCBvciB0aGUgYCdlbmQnYCBldmVudCBlbWl0dGVkLFxuICAvLyBmb3IgZXhhbXBsZSwgaWYgdGhlIHNvY2tldCB3YXMgZGVzdHJveWVkIGR1ZSB0byBhbiBlcnJvci4gRW5zdXJlIHRoYXQgdGhlXG4gIC8vIGByZWNlaXZlcmAgc3RyZWFtIGlzIGNsb3NlZCBhZnRlciB3cml0aW5nIGFueSByZW1haW5pbmcgYnVmZmVyZWQgZGF0YSB0b1xuICAvLyBpdC4gSWYgdGhlIHJlYWRhYmxlIHNpZGUgb2YgdGhlIHNvY2tldCBpcyBpbiBmbG93aW5nIG1vZGUgdGhlbiB0aGVyZSBpcyBub1xuICAvLyBidWZmZXJlZCBkYXRhIGFzIGV2ZXJ5dGhpbmcgaGFzIGJlZW4gYWxyZWFkeSB3cml0dGVuLiBJZiBpbnN0ZWFkLCB0aGVcbiAgLy8gc29ja2V0IGlzIHBhdXNlZCwgYW55IHBvc3NpYmxlIGJ1ZmZlcmVkIGRhdGEgd2lsbCBiZSByZWFkIGFzIGEgc2luZ2xlXG4gIC8vIGNodW5rLlxuICAvL1xuICBpZiAoXG4gICAgIXRoaXMuX3JlYWRhYmxlU3RhdGUuZW5kRW1pdHRlZCAmJlxuICAgICF3ZWJzb2NrZXQuX2Nsb3NlRnJhbWVSZWNlaXZlZCAmJlxuICAgICF3ZWJzb2NrZXQuX3JlY2VpdmVyLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCAmJlxuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUubGVuZ3RoICE9PSAwXG4gICkge1xuICAgIGNvbnN0IGNodW5rID0gdGhpcy5yZWFkKHRoaXMuX3JlYWRhYmxlU3RhdGUubGVuZ3RoKTtcblxuICAgIHdlYnNvY2tldC5fcmVjZWl2ZXIud3JpdGUoY2h1bmspO1xuICB9XG5cbiAgd2Vic29ja2V0Ll9yZWNlaXZlci5lbmQoKTtcblxuICB0aGlzW2tXZWJTb2NrZXRdID0gdW5kZWZpbmVkO1xuXG4gIGNsZWFyVGltZW91dCh3ZWJzb2NrZXQuX2Nsb3NlVGltZXIpO1xuXG4gIGlmIChcbiAgICB3ZWJzb2NrZXQuX3JlY2VpdmVyLl93cml0YWJsZVN0YXRlLmZpbmlzaGVkIHx8XG4gICAgd2Vic29ja2V0Ll9yZWNlaXZlci5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWRcbiAgKSB7XG4gICAgd2Vic29ja2V0LmVtaXRDbG9zZSgpO1xuICB9IGVsc2Uge1xuICAgIHdlYnNvY2tldC5fcmVjZWl2ZXIub24oJ2Vycm9yJywgcmVjZWl2ZXJPbkZpbmlzaCk7XG4gICAgd2Vic29ja2V0Ll9yZWNlaXZlci5vbignZmluaXNoJywgcmVjZWl2ZXJPbkZpbmlzaCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIHNvY2tldCBgJ2RhdGEnYCBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gY2h1bmsgQSBjaHVuayBvZiBkYXRhXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzb2NrZXRPbkRhdGEoY2h1bmspIHtcbiAgaWYgKCF0aGlzW2tXZWJTb2NrZXRdLl9yZWNlaXZlci53cml0ZShjaHVuaykpIHtcbiAgICB0aGlzLnBhdXNlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIHNvY2tldCBgJ2VuZCdgIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNvY2tldE9uRW5kKCkge1xuICBjb25zdCB3ZWJzb2NrZXQgPSB0aGlzW2tXZWJTb2NrZXRdO1xuXG4gIHdlYnNvY2tldC5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TSU5HO1xuICB3ZWJzb2NrZXQuX3JlY2VpdmVyLmVuZCgpO1xuICB0aGlzLmVuZCgpO1xufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgc29ja2V0IGAnZXJyb3InYCBldmVudC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzb2NrZXRPbkVycm9yKCkge1xuICBjb25zdCB3ZWJzb2NrZXQgPSB0aGlzW2tXZWJTb2NrZXRdO1xuXG4gIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgc29ja2V0T25FcnJvcik7XG4gIHRoaXMub24oJ2Vycm9yJywgTk9PUCk7XG5cbiAgaWYgKHdlYnNvY2tldCkge1xuICAgIHdlYnNvY2tldC5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TSU5HO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG4iLCAiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbXCJlcnJvclwiLCB7IFwidmFyc0lnbm9yZVBhdHRlcm5cIjogXCJeV2ViU29ja2V0JFwiIH1dICovXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IFdlYlNvY2tldCA9IHJlcXVpcmUoJy4vd2Vic29ja2V0Jyk7XG5jb25zdCB7IER1cGxleCB9ID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5cbi8qKlxuICogRW1pdHMgdGhlIGAnY2xvc2UnYCBldmVudCBvbiBhIHN0cmVhbS5cbiAqXG4gKiBAcGFyYW0ge0R1cGxleH0gc3RyZWFtIFRoZSBzdHJlYW0uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBlbWl0Q2xvc2Uoc3RyZWFtKSB7XG4gIHN0cmVhbS5lbWl0KCdjbG9zZScpO1xufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgYCdlbmQnYCBldmVudC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkdXBsZXhPbkVuZCgpIHtcbiAgaWYgKCF0aGlzLmRlc3Ryb3llZCAmJiB0aGlzLl93cml0YWJsZVN0YXRlLmZpbmlzaGVkKSB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGAnZXJyb3InYCBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIgVGhlIGVycm9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkdXBsZXhPbkVycm9yKGVycikge1xuICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGR1cGxleE9uRXJyb3IpO1xuICB0aGlzLmRlc3Ryb3koKTtcbiAgaWYgKHRoaXMubGlzdGVuZXJDb3VudCgnZXJyb3InKSA9PT0gMCkge1xuICAgIC8vIERvIG5vdCBzdXBwcmVzcyB0aGUgdGhyb3dpbmcgYmVoYXZpb3IuXG4gICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIH1cbn1cblxuLyoqXG4gKiBXcmFwcyBhIGBXZWJTb2NrZXRgIGluIGEgZHVwbGV4IHN0cmVhbS5cbiAqXG4gKiBAcGFyYW0ge1dlYlNvY2tldH0gd3MgVGhlIGBXZWJTb2NrZXRgIHRvIHdyYXBcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGhlIG9wdGlvbnMgZm9yIHRoZSBgRHVwbGV4YCBjb25zdHJ1Y3RvclxuICogQHJldHVybiB7RHVwbGV4fSBUaGUgZHVwbGV4IHN0cmVhbVxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBjcmVhdGVXZWJTb2NrZXRTdHJlYW0od3MsIG9wdGlvbnMpIHtcbiAgbGV0IHRlcm1pbmF0ZU9uRGVzdHJveSA9IHRydWU7XG5cbiAgY29uc3QgZHVwbGV4ID0gbmV3IER1cGxleCh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBhdXRvRGVzdHJveTogZmFsc2UsXG4gICAgZW1pdENsb3NlOiBmYWxzZSxcbiAgICBvYmplY3RNb2RlOiBmYWxzZSxcbiAgICB3cml0YWJsZU9iamVjdE1vZGU6IGZhbHNlXG4gIH0pO1xuXG4gIHdzLm9uKCdtZXNzYWdlJywgZnVuY3Rpb24gbWVzc2FnZShtc2csIGlzQmluYXJ5KSB7XG4gICAgY29uc3QgZGF0YSA9XG4gICAgICAhaXNCaW5hcnkgJiYgZHVwbGV4Ll9yZWFkYWJsZVN0YXRlLm9iamVjdE1vZGUgPyBtc2cudG9TdHJpbmcoKSA6IG1zZztcblxuICAgIGlmICghZHVwbGV4LnB1c2goZGF0YSkpIHdzLnBhdXNlKCk7XG4gIH0pO1xuXG4gIHdzLm9uY2UoJ2Vycm9yJywgZnVuY3Rpb24gZXJyb3IoZXJyKSB7XG4gICAgaWYgKGR1cGxleC5kZXN0cm95ZWQpIHJldHVybjtcblxuICAgIC8vIFByZXZlbnQgYHdzLnRlcm1pbmF0ZSgpYCBmcm9tIGJlaW5nIGNhbGxlZCBieSBgZHVwbGV4Ll9kZXN0cm95KClgLlxuICAgIC8vXG4gICAgLy8gLSBJZiB0aGUgYCdlcnJvcidgIGV2ZW50IGlzIGVtaXR0ZWQgYmVmb3JlIHRoZSBgJ29wZW4nYCBldmVudCwgdGhlblxuICAgIC8vICAgYHdzLnRlcm1pbmF0ZSgpYCBpcyBhIG5vb3AgYXMgbm8gc29ja2V0IGlzIGFzc2lnbmVkLlxuICAgIC8vIC0gT3RoZXJ3aXNlLCB0aGUgZXJyb3IgaXMgcmUtZW1pdHRlZCBieSB0aGUgbGlzdGVuZXIgb2YgdGhlIGAnZXJyb3InYFxuICAgIC8vICAgZXZlbnQgb2YgdGhlIGBSZWNlaXZlcmAgb2JqZWN0LiBUaGUgbGlzdGVuZXIgYWxyZWFkeSBjbG9zZXMgdGhlXG4gICAgLy8gICBjb25uZWN0aW9uIGJ5IGNhbGxpbmcgYHdzLmNsb3NlKClgLiBUaGlzIGFsbG93cyBhIGNsb3NlIGZyYW1lIHRvIGJlXG4gICAgLy8gICBzZW50IHRvIHRoZSBvdGhlciBwZWVyLiBJZiBgd3MudGVybWluYXRlKClgIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGlzLFxuICAgIC8vICAgdGhlbiB0aGUgY2xvc2UgZnJhbWUgbWlnaHQgbm90IGJlIHNlbnQuXG4gICAgdGVybWluYXRlT25EZXN0cm95ID0gZmFsc2U7XG4gICAgZHVwbGV4LmRlc3Ryb3koZXJyKTtcbiAgfSk7XG5cbiAgd3Mub25jZSgnY2xvc2UnLCBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAoZHVwbGV4LmRlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgZHVwbGV4LnB1c2gobnVsbCk7XG4gIH0pO1xuXG4gIGR1cGxleC5fZGVzdHJveSA9IGZ1bmN0aW9uIChlcnIsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHdzLnJlYWR5U3RhdGUgPT09IHdzLkNMT1NFRCkge1xuICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdENsb3NlLCBkdXBsZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjYWxsZWQgPSBmYWxzZTtcblxuICAgIHdzLm9uY2UoJ2Vycm9yJywgZnVuY3Rpb24gZXJyb3IoZXJyKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICB9KTtcblxuICAgIHdzLm9uY2UoJ2Nsb3NlJywgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICBpZiAoIWNhbGxlZCkgY2FsbGJhY2soZXJyKTtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdENsb3NlLCBkdXBsZXgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1pbmF0ZU9uRGVzdHJveSkgd3MudGVybWluYXRlKCk7XG4gIH07XG5cbiAgZHVwbGV4Ll9maW5hbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICh3cy5yZWFkeVN0YXRlID09PSB3cy5DT05ORUNUSU5HKSB7XG4gICAgICB3cy5vbmNlKCdvcGVuJywgZnVuY3Rpb24gb3BlbigpIHtcbiAgICAgICAgZHVwbGV4Ll9maW5hbChjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdmFsdWUgb2YgdGhlIGBfc29ja2V0YCBwcm9wZXJ0eSBpcyBgbnVsbGAgaXQgbWVhbnMgdGhhdCBgd3NgIGlzIGFcbiAgICAvLyBjbGllbnQgd2Vic29ja2V0IGFuZCB0aGUgaGFuZHNoYWtlIGZhaWxlZC4gSW4gZmFjdCwgd2hlbiB0aGlzIGhhcHBlbnMsIGFcbiAgICAvLyBzb2NrZXQgaXMgbmV2ZXIgYXNzaWduZWQgdG8gdGhlIHdlYnNvY2tldC4gV2FpdCBmb3IgdGhlIGAnZXJyb3InYCBldmVudFxuICAgIC8vIHRoYXQgd2lsbCBiZSBlbWl0dGVkIGJ5IHRoZSB3ZWJzb2NrZXQuXG4gICAgaWYgKHdzLl9zb2NrZXQgPT09IG51bGwpIHJldHVybjtcblxuICAgIGlmICh3cy5fc29ja2V0Ll93cml0YWJsZVN0YXRlLmZpbmlzaGVkKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgaWYgKGR1cGxleC5fcmVhZGFibGVTdGF0ZS5lbmRFbWl0dGVkKSBkdXBsZXguZGVzdHJveSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3cy5fc29ja2V0Lm9uY2UoJ2ZpbmlzaCcsIGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgICAgICAgLy8gYGR1cGxleGAgaXMgbm90IGRlc3Ryb3llZCBoZXJlIGJlY2F1c2UgdGhlIGAnZW5kJ2AgZXZlbnQgd2lsbCBiZVxuICAgICAgICAvLyBlbWl0dGVkIG9uIGBkdXBsZXhgIGFmdGVyIHRoaXMgYCdmaW5pc2gnYCBldmVudC4gVGhlIEVPRiBzaWduYWxpbmdcbiAgICAgICAgLy8gYG51bGxgIGNodW5rIGlzLCBpbiBmYWN0LCBwdXNoZWQgd2hlbiB0aGUgd2Vic29ja2V0IGVtaXRzIGAnY2xvc2UnYC5cbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0pO1xuICAgICAgd3MuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgZHVwbGV4Ll9yZWFkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh3cy5pc1BhdXNlZCkgd3MucmVzdW1lKCk7XG4gIH07XG5cbiAgZHVwbGV4Ll93cml0ZSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHdzLnJlYWR5U3RhdGUgPT09IHdzLkNPTk5FQ1RJTkcpIHtcbiAgICAgIHdzLm9uY2UoJ29wZW4nLCBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgICBkdXBsZXguX3dyaXRlKGNodW5rLCBlbmNvZGluZywgY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd3Muc2VuZChjaHVuaywgY2FsbGJhY2spO1xuICB9O1xuXG4gIGR1cGxleC5vbignZW5kJywgZHVwbGV4T25FbmQpO1xuICBkdXBsZXgub24oJ2Vycm9yJywgZHVwbGV4T25FcnJvcik7XG4gIHJldHVybiBkdXBsZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlV2ViU29ja2V0U3RyZWFtO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyB0b2tlbkNoYXJzIH0gPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcblxuLyoqXG4gKiBQYXJzZXMgdGhlIGBTZWMtV2ViU29ja2V0LVByb3RvY29sYCBoZWFkZXIgaW50byBhIHNldCBvZiBzdWJwcm90b2NvbCBuYW1lcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVyIFRoZSBmaWVsZCB2YWx1ZSBvZiB0aGUgaGVhZGVyXG4gKiBAcmV0dXJuIHtTZXR9IFRoZSBzdWJwcm90b2NvbCBuYW1lc1xuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBwYXJzZShoZWFkZXIpIHtcbiAgY29uc3QgcHJvdG9jb2xzID0gbmV3IFNldCgpO1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgbGV0IGVuZCA9IC0xO1xuICBsZXQgaSA9IDA7XG5cbiAgZm9yIChpOyBpIDwgaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY29kZSA9IGhlYWRlci5jaGFyQ29kZUF0KGkpO1xuXG4gICAgaWYgKGVuZCA9PT0gLTEgJiYgdG9rZW5DaGFyc1tjb2RlXSA9PT0gMSkge1xuICAgICAgaWYgKHN0YXJ0ID09PSAtMSkgc3RhcnQgPSBpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBpICE9PSAwICYmXG4gICAgICAoY29kZSA9PT0gMHgyMCAvKiAnICcgKi8gfHwgY29kZSA9PT0gMHgwOSkgLyogJ1xcdCcgKi9cbiAgICApIHtcbiAgICAgIGlmIChlbmQgPT09IC0xICYmIHN0YXJ0ICE9PSAtMSkgZW5kID0gaTtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4MmMgLyogJywnICovKSB7XG4gICAgICBpZiAoc3RhcnQgPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kID09PSAtMSkgZW5kID0gaTtcblxuICAgICAgY29uc3QgcHJvdG9jb2wgPSBoZWFkZXIuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgICAgIGlmIChwcm90b2NvbHMuaGFzKHByb3RvY29sKSkge1xuICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFRoZSBcIiR7cHJvdG9jb2x9XCIgc3VicHJvdG9jb2wgaXMgZHVwbGljYXRlZGApO1xuICAgICAgfVxuXG4gICAgICBwcm90b2NvbHMuYWRkKHByb3RvY29sKTtcbiAgICAgIHN0YXJ0ID0gZW5kID0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gLTEgfHwgZW5kICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgaW5wdXQnKTtcbiAgfVxuXG4gIGNvbnN0IHByb3RvY29sID0gaGVhZGVyLnNsaWNlKHN0YXJ0LCBpKTtcblxuICBpZiAocHJvdG9jb2xzLmhhcyhwcm90b2NvbCkpIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFRoZSBcIiR7cHJvdG9jb2x9XCIgc3VicHJvdG9jb2wgaXMgZHVwbGljYXRlZGApO1xuICB9XG5cbiAgcHJvdG9jb2xzLmFkZChwcm90b2NvbCk7XG4gIHJldHVybiBwcm90b2NvbHM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBwYXJzZSB9O1xuIiwgIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogW1wiZXJyb3JcIiwgeyBcInZhcnNJZ25vcmVQYXR0ZXJuXCI6IFwiXkR1cGxleCRcIiwgXCJjYXVnaHRFcnJvcnNcIjogXCJub25lXCIgfV0gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5jb25zdCB7IER1cGxleCB9ID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5jb25zdCB7IGNyZWF0ZUhhc2ggfSA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXG5jb25zdCBleHRlbnNpb24gPSByZXF1aXJlKCcuL2V4dGVuc2lvbicpO1xuY29uc3QgUGVyTWVzc2FnZURlZmxhdGUgPSByZXF1aXJlKCcuL3Blcm1lc3NhZ2UtZGVmbGF0ZScpO1xuY29uc3Qgc3VicHJvdG9jb2wgPSByZXF1aXJlKCcuL3N1YnByb3RvY29sJyk7XG5jb25zdCBXZWJTb2NrZXQgPSByZXF1aXJlKCcuL3dlYnNvY2tldCcpO1xuY29uc3QgeyBDTE9TRV9USU1FT1VULCBHVUlELCBrV2ViU29ja2V0IH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5jb25zdCBrZXlSZWdleCA9IC9eWysvMC05QS1aYS16XXsyMn09PSQvO1xuXG5jb25zdCBSVU5OSU5HID0gMDtcbmNvbnN0IENMT1NJTkcgPSAxO1xuY29uc3QgQ0xPU0VEID0gMjtcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBXZWJTb2NrZXQgc2VydmVyLlxuICpcbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5jbGFzcyBXZWJTb2NrZXRTZXJ2ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgYFdlYlNvY2tldFNlcnZlcmAgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIENvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHM9dHJ1ZV0gU3BlY2lmaWVzIHdoZXRoZXJcbiAgICogICAgIGFueSBvZiB0aGUgYCdtZXNzYWdlJ2AsIGAncGluZydgLCBhbmQgYCdwb25nJ2AgZXZlbnRzIGNhbiBiZSBlbWl0dGVkXG4gICAqICAgICBtdWx0aXBsZSB0aW1lcyBpbiB0aGUgc2FtZSB0aWNrXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYXV0b1Bvbmc9dHJ1ZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvXG4gICAqICAgICBhdXRvbWF0aWNhbGx5IHNlbmQgYSBwb25nIGluIHJlc3BvbnNlIHRvIGEgcGluZ1xuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuYmFja2xvZz01MTFdIFRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aGUgcXVldWUgb2ZcbiAgICogICAgIHBlbmRpbmcgY29ubmVjdGlvbnNcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jbGllbnRUcmFja2luZz10cnVlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG9cbiAgICogICAgIHRyYWNrIGNsaWVudHNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmNsb3NlVGltZW91dD0zMDAwMF0gRHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIHRvXG4gICAqICAgICB3YWl0IGZvciB0aGUgY2xvc2luZyBoYW5kc2hha2UgdG8gZmluaXNoIGFmdGVyIGB3ZWJzb2NrZXQuY2xvc2UoKWAgaXNcbiAgICogICAgIGNhbGxlZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5oYW5kbGVQcm90b2NvbHNdIEEgaG9vayB0byBoYW5kbGUgcHJvdG9jb2xzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5ob3N0XSBUaGUgaG9zdG5hbWUgd2hlcmUgdG8gYmluZCB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhQYXlsb2FkPTEwNDg1NzYwMF0gVGhlIG1heGltdW0gYWxsb3dlZCBtZXNzYWdlXG4gICAqICAgICBzaXplXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubm9TZXJ2ZXI9ZmFsc2VdIEVuYWJsZSBubyBzZXJ2ZXIgbW9kZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucGF0aF0gQWNjZXB0IG9ubHkgY29ubmVjdGlvbnMgbWF0Y2hpbmcgdGhpcyBwYXRoXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58T2JqZWN0KX0gW29wdGlvbnMucGVyTWVzc2FnZURlZmxhdGU9ZmFsc2VdIEVuYWJsZS9kaXNhYmxlXG4gICAqICAgICBwZXJtZXNzYWdlLWRlZmxhdGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnBvcnRdIFRoZSBwb3J0IHdoZXJlIHRvIGJpbmQgdGhlIHNlcnZlclxuICAgKiBAcGFyYW0geyhodHRwLlNlcnZlcnxodHRwcy5TZXJ2ZXIpfSBbb3B0aW9ucy5zZXJ2ZXJdIEEgcHJlLWNyZWF0ZWQgSFRUUC9TXG4gICAqICAgICBzZXJ2ZXIgdG8gdXNlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuc2tpcFVURjhWYWxpZGF0aW9uPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvclxuICAgKiAgICAgbm90IHRvIHNraXAgVVRGLTggdmFsaWRhdGlvbiBmb3IgdGV4dCBhbmQgY2xvc2UgbWVzc2FnZXNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMudmVyaWZ5Q2xpZW50XSBBIGhvb2sgdG8gcmVqZWN0IGNvbm5lY3Rpb25zXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLldlYlNvY2tldD1XZWJTb2NrZXRdIFNwZWNpZmllcyB0aGUgYFdlYlNvY2tldGBcbiAgICogICAgIGNsYXNzIHRvIHVzZS4gSXQgbXVzdCBiZSB0aGUgYFdlYlNvY2tldGAgY2xhc3Mgb3IgY2xhc3MgdGhhdCBleHRlbmRzIGl0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gQSBsaXN0ZW5lciBmb3IgdGhlIGBsaXN0ZW5pbmdgIGV2ZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHN1cGVyKCk7XG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgYWxsb3dTeW5jaHJvbm91c0V2ZW50czogdHJ1ZSxcbiAgICAgIGF1dG9Qb25nOiB0cnVlLFxuICAgICAgbWF4UGF5bG9hZDogMTAwICogMTAyNCAqIDEwMjQsXG4gICAgICBza2lwVVRGOFZhbGlkYXRpb246IGZhbHNlLFxuICAgICAgcGVyTWVzc2FnZURlZmxhdGU6IGZhbHNlLFxuICAgICAgaGFuZGxlUHJvdG9jb2xzOiBudWxsLFxuICAgICAgY2xpZW50VHJhY2tpbmc6IHRydWUsXG4gICAgICBjbG9zZVRpbWVvdXQ6IENMT1NFX1RJTUVPVVQsXG4gICAgICB2ZXJpZnlDbGllbnQ6IG51bGwsXG4gICAgICBub1NlcnZlcjogZmFsc2UsXG4gICAgICBiYWNrbG9nOiBudWxsLCAvLyB1c2UgZGVmYXVsdCAoNTExIGFzIGltcGxlbWVudGVkIGluIG5ldC5qcylcbiAgICAgIHNlcnZlcjogbnVsbCxcbiAgICAgIGhvc3Q6IG51bGwsXG4gICAgICBwYXRoOiBudWxsLFxuICAgICAgcG9ydDogbnVsbCxcbiAgICAgIFdlYlNvY2tldCxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuXG4gICAgaWYgKFxuICAgICAgKG9wdGlvbnMucG9ydCA9PSBudWxsICYmICFvcHRpb25zLnNlcnZlciAmJiAhb3B0aW9ucy5ub1NlcnZlcikgfHxcbiAgICAgIChvcHRpb25zLnBvcnQgIT0gbnVsbCAmJiAob3B0aW9ucy5zZXJ2ZXIgfHwgb3B0aW9ucy5ub1NlcnZlcikpIHx8XG4gICAgICAob3B0aW9ucy5zZXJ2ZXIgJiYgb3B0aW9ucy5ub1NlcnZlcilcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdPbmUgYW5kIG9ubHkgb25lIG9mIHRoZSBcInBvcnRcIiwgXCJzZXJ2ZXJcIiwgb3IgXCJub1NlcnZlclwiIG9wdGlvbnMgJyArXG4gICAgICAgICAgJ211c3QgYmUgc3BlY2lmaWVkJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5wb3J0ICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX3NlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gaHR0cC5TVEFUVVNfQ09ERVNbNDI2XTtcblxuICAgICAgICByZXMud3JpdGVIZWFkKDQyNiwge1xuICAgICAgICAgICdDb250ZW50LUxlbmd0aCc6IGJvZHkubGVuZ3RoLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbidcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcy5lbmQoYm9keSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NlcnZlci5saXN0ZW4oXG4gICAgICAgIG9wdGlvbnMucG9ydCxcbiAgICAgICAgb3B0aW9ucy5ob3N0LFxuICAgICAgICBvcHRpb25zLmJhY2tsb2csXG4gICAgICAgIGNhbGxiYWNrXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5zZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX3NlcnZlciA9IG9wdGlvbnMuc2VydmVyO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zZXJ2ZXIpIHtcbiAgICAgIGNvbnN0IGVtaXRDb25uZWN0aW9uID0gdGhpcy5lbWl0LmJpbmQodGhpcywgJ2Nvbm5lY3Rpb24nKTtcblxuICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzID0gYWRkTGlzdGVuZXJzKHRoaXMuX3NlcnZlciwge1xuICAgICAgICBsaXN0ZW5pbmc6IHRoaXMuZW1pdC5iaW5kKHRoaXMsICdsaXN0ZW5pbmcnKSxcbiAgICAgICAgZXJyb3I6IHRoaXMuZW1pdC5iaW5kKHRoaXMsICdlcnJvcicpLFxuICAgICAgICB1cGdyYWRlOiAocmVxLCBzb2NrZXQsIGhlYWQpID0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVVwZ3JhZGUocmVxLCBzb2NrZXQsIGhlYWQsIGVtaXRDb25uZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMucGVyTWVzc2FnZURlZmxhdGUgPT09IHRydWUpIG9wdGlvbnMucGVyTWVzc2FnZURlZmxhdGUgPSB7fTtcbiAgICBpZiAob3B0aW9ucy5jbGllbnRUcmFja2luZykge1xuICAgICAgdGhpcy5jbGllbnRzID0gbmV3IFNldCgpO1xuICAgICAgdGhpcy5fc2hvdWxkRW1pdENsb3NlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLl9zdGF0ZSA9IFJVTk5JTkc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYm91bmQgYWRkcmVzcywgdGhlIGFkZHJlc3MgZmFtaWx5IG5hbWUsIGFuZCBwb3J0IG9mIHRoZSBzZXJ2ZXJcbiAgICogYXMgcmVwb3J0ZWQgYnkgdGhlIG9wZXJhdGluZyBzeXN0ZW0gaWYgbGlzdGVuaW5nIG9uIGFuIElQIHNvY2tldC5cbiAgICogSWYgdGhlIHNlcnZlciBpcyBsaXN0ZW5pbmcgb24gYSBwaXBlIG9yIFVOSVggZG9tYWluIHNvY2tldCwgdGhlIG5hbWUgaXNcbiAgICogcmV0dXJuZWQgYXMgYSBzdHJpbmcuXG4gICAqXG4gICAqIEByZXR1cm4geyhPYmplY3R8U3RyaW5nfG51bGwpfSBUaGUgYWRkcmVzcyBvZiB0aGUgc2VydmVyXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFkZHJlc3MoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5ub1NlcnZlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgc2VydmVyIGlzIG9wZXJhdGluZyBpbiBcIm5vU2VydmVyXCIgbW9kZScpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fc2VydmVyKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5fc2VydmVyLmFkZHJlc3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHRoZSBzZXJ2ZXIgZnJvbSBhY2NlcHRpbmcgbmV3IGNvbm5lY3Rpb25zIGFuZCBlbWl0IHRoZSBgJ2Nsb3NlJ2AgZXZlbnRcbiAgICogd2hlbiBhbGwgZXhpc3RpbmcgY29ubmVjdGlvbnMgYXJlIGNsb3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBBIG9uZS10aW1lIGxpc3RlbmVyIGZvciB0aGUgYCdjbG9zZSdgIGV2ZW50XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNsb3NlKGNiKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlID09PSBDTE9TRUQpIHtcbiAgICAgIGlmIChjYikge1xuICAgICAgICB0aGlzLm9uY2UoJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgICAgIGNiKG5ldyBFcnJvcignVGhlIHNlcnZlciBpcyBub3QgcnVubmluZycpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdENsb3NlLCB0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2IpIHRoaXMub25jZSgnY2xvc2UnLCBjYik7XG5cbiAgICBpZiAodGhpcy5fc3RhdGUgPT09IENMT1NJTkcpIHJldHVybjtcbiAgICB0aGlzLl9zdGF0ZSA9IENMT1NJTkc7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm5vU2VydmVyIHx8IHRoaXMub3B0aW9ucy5zZXJ2ZXIpIHtcbiAgICAgIGlmICh0aGlzLl9zZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVycyA9IHRoaXMuX3NlcnZlciA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNsaWVudHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsaWVudHMuc2l6ZSkge1xuICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdENsb3NlLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zaG91bGRFbWl0Q2xvc2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGVtaXRDbG9zZSwgdGhpcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlcnZlciA9IHRoaXMuX3NlcnZlcjtcblxuICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMgPSB0aGlzLl9zZXJ2ZXIgPSBudWxsO1xuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIEhUVFAvUyBzZXJ2ZXIgd2FzIGNyZWF0ZWQgaW50ZXJuYWxseS4gQ2xvc2UgaXQsIGFuZCByZWx5IG9uIGl0c1xuICAgICAgLy8gYCdjbG9zZSdgIGV2ZW50LlxuICAgICAgLy9cbiAgICAgIHNlcnZlci5jbG9zZSgoKSA9PiB7XG4gICAgICAgIGVtaXRDbG9zZSh0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWUgaWYgYSBnaXZlbiByZXF1ZXN0IHNob3VsZCBiZSBoYW5kbGVkIGJ5IHRoaXMgc2VydmVyIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge2h0dHAuSW5jb21pbmdNZXNzYWdlfSByZXEgUmVxdWVzdCBvYmplY3QgdG8gaW5zcGVjdFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIHJlcXVlc3QgaXMgdmFsaWQsIGVsc2UgYGZhbHNlYFxuICAgKiBAcHVibGljXG4gICAqL1xuICBzaG91bGRIYW5kbGUocmVxKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wYXRoKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHJlcS51cmwuaW5kZXhPZignPycpO1xuICAgICAgY29uc3QgcGF0aG5hbWUgPSBpbmRleCAhPT0gLTEgPyByZXEudXJsLnNsaWNlKDAsIGluZGV4KSA6IHJlcS51cmw7XG5cbiAgICAgIGlmIChwYXRobmFtZSAhPT0gdGhpcy5vcHRpb25zLnBhdGgpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYSBIVFRQIFVwZ3JhZGUgcmVxdWVzdC5cbiAgICpcbiAgICogQHBhcmFtIHtodHRwLkluY29taW5nTWVzc2FnZX0gcmVxIFRoZSByZXF1ZXN0IG9iamVjdFxuICAgKiBAcGFyYW0ge0R1cGxleH0gc29ja2V0IFRoZSBuZXR3b3JrIHNvY2tldCBiZXR3ZWVuIHRoZSBzZXJ2ZXIgYW5kIGNsaWVudFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gaGVhZCBUaGUgZmlyc3QgcGFja2V0IG9mIHRoZSB1cGdyYWRlZCBzdHJlYW1cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgaGFuZGxlVXBncmFkZShyZXEsIHNvY2tldCwgaGVhZCwgY2IpIHtcbiAgICBzb2NrZXQub24oJ2Vycm9yJywgc29ja2V0T25FcnJvcik7XG5cbiAgICBjb25zdCBrZXkgPSByZXEuaGVhZGVyc1snc2VjLXdlYnNvY2tldC1rZXknXTtcbiAgICBjb25zdCB1cGdyYWRlID0gcmVxLmhlYWRlcnMudXBncmFkZTtcbiAgICBjb25zdCB2ZXJzaW9uID0gK3JlcS5oZWFkZXJzWydzZWMtd2Vic29ja2V0LXZlcnNpb24nXTtcblxuICAgIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdJbnZhbGlkIEhUVFAgbWV0aG9kJztcbiAgICAgIGFib3J0SGFuZHNoYWtlT3JFbWl0d3NDbGllbnRFcnJvcih0aGlzLCByZXEsIHNvY2tldCwgNDA1LCBtZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodXBncmFkZSA9PT0gdW5kZWZpbmVkIHx8IHVwZ3JhZGUudG9Mb3dlckNhc2UoKSAhPT0gJ3dlYnNvY2tldCcpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnSW52YWxpZCBVcGdyYWRlIGhlYWRlcic7XG4gICAgICBhYm9ydEhhbmRzaGFrZU9yRW1pdHdzQ2xpZW50RXJyb3IodGhpcywgcmVxLCBzb2NrZXQsIDQwMCwgbWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8ICFrZXlSZWdleC50ZXN0KGtleSkpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTWlzc2luZyBvciBpbnZhbGlkIFNlYy1XZWJTb2NrZXQtS2V5IGhlYWRlcic7XG4gICAgICBhYm9ydEhhbmRzaGFrZU9yRW1pdHdzQ2xpZW50RXJyb3IodGhpcywgcmVxLCBzb2NrZXQsIDQwMCwgbWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24gIT09IDEzICYmIHZlcnNpb24gIT09IDgpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTWlzc2luZyBvciBpbnZhbGlkIFNlYy1XZWJTb2NrZXQtVmVyc2lvbiBoZWFkZXInO1xuICAgICAgYWJvcnRIYW5kc2hha2VPckVtaXR3c0NsaWVudEVycm9yKHRoaXMsIHJlcSwgc29ja2V0LCA0MDAsIG1lc3NhZ2UsIHtcbiAgICAgICAgJ1NlYy1XZWJTb2NrZXQtVmVyc2lvbic6ICcxMywgOCdcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zaG91bGRIYW5kbGUocmVxKSkge1xuICAgICAgYWJvcnRIYW5kc2hha2Uoc29ja2V0LCA0MDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY1dlYlNvY2tldFByb3RvY29sID0gcmVxLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtcHJvdG9jb2wnXTtcbiAgICBsZXQgcHJvdG9jb2xzID0gbmV3IFNldCgpO1xuXG4gICAgaWYgKHNlY1dlYlNvY2tldFByb3RvY29sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByb3RvY29scyA9IHN1YnByb3RvY29sLnBhcnNlKHNlY1dlYlNvY2tldFByb3RvY29sKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ0ludmFsaWQgU2VjLVdlYlNvY2tldC1Qcm90b2NvbCBoZWFkZXInO1xuICAgICAgICBhYm9ydEhhbmRzaGFrZU9yRW1pdHdzQ2xpZW50RXJyb3IodGhpcywgcmVxLCBzb2NrZXQsIDQwMCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZWNXZWJTb2NrZXRFeHRlbnNpb25zID0gcmVxLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtZXh0ZW5zaW9ucyddO1xuICAgIGNvbnN0IGV4dGVuc2lvbnMgPSB7fTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSAmJlxuICAgICAgc2VjV2ViU29ja2V0RXh0ZW5zaW9ucyAhPT0gdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICBjb25zdCBwZXJNZXNzYWdlRGVmbGF0ZSA9IG5ldyBQZXJNZXNzYWdlRGVmbGF0ZSh7XG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSxcbiAgICAgICAgaXNTZXJ2ZXI6IHRydWUsXG4gICAgICAgIG1heFBheWxvYWQ6IHRoaXMub3B0aW9ucy5tYXhQYXlsb2FkXG4gICAgICB9KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb2ZmZXJzID0gZXh0ZW5zaW9uLnBhcnNlKHNlY1dlYlNvY2tldEV4dGVuc2lvbnMpO1xuXG4gICAgICAgIGlmIChvZmZlcnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pIHtcbiAgICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZS5hY2NlcHQob2ZmZXJzW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdKTtcbiAgICAgICAgICBleHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdID0gcGVyTWVzc2FnZURlZmxhdGU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICAgICAnSW52YWxpZCBvciB1bmFjY2VwdGFibGUgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zIGhlYWRlcic7XG4gICAgICAgIGFib3J0SGFuZHNoYWtlT3JFbWl0d3NDbGllbnRFcnJvcih0aGlzLCByZXEsIHNvY2tldCwgNDAwLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vXG4gICAgLy8gT3B0aW9uYWxseSBjYWxsIGV4dGVybmFsIGNsaWVudCB2ZXJpZmljYXRpb24gaGFuZGxlci5cbiAgICAvL1xuICAgIGlmICh0aGlzLm9wdGlvbnMudmVyaWZ5Q2xpZW50KSB7XG4gICAgICBjb25zdCBpbmZvID0ge1xuICAgICAgICBvcmlnaW46XG4gICAgICAgICAgcmVxLmhlYWRlcnNbYCR7dmVyc2lvbiA9PT0gOCA/ICdzZWMtd2Vic29ja2V0LW9yaWdpbicgOiAnb3JpZ2luJ31gXSxcbiAgICAgICAgc2VjdXJlOiAhIShyZXEuc29ja2V0LmF1dGhvcml6ZWQgfHwgcmVxLnNvY2tldC5lbmNyeXB0ZWQpLFxuICAgICAgICByZXFcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudmVyaWZ5Q2xpZW50Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICB0aGlzLm9wdGlvbnMudmVyaWZ5Q2xpZW50KGluZm8sICh2ZXJpZmllZCwgY29kZSwgbWVzc2FnZSwgaGVhZGVycykgPT4ge1xuICAgICAgICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhYm9ydEhhbmRzaGFrZShzb2NrZXQsIGNvZGUgfHwgNDAxLCBtZXNzYWdlLCBoZWFkZXJzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmNvbXBsZXRlVXBncmFkZShcbiAgICAgICAgICAgIGV4dGVuc2lvbnMsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBwcm90b2NvbHMsXG4gICAgICAgICAgICByZXEsXG4gICAgICAgICAgICBzb2NrZXQsXG4gICAgICAgICAgICBoZWFkLFxuICAgICAgICAgICAgY2JcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy52ZXJpZnlDbGllbnQoaW5mbykpIHJldHVybiBhYm9ydEhhbmRzaGFrZShzb2NrZXQsIDQwMSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb21wbGV0ZVVwZ3JhZGUoZXh0ZW5zaW9ucywga2V5LCBwcm90b2NvbHMsIHJlcSwgc29ja2V0LCBoZWFkLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogVXBncmFkZSB0aGUgY29ubmVjdGlvbiB0byBXZWJTb2NrZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBleHRlbnNpb25zIFRoZSBhY2NlcHRlZCBleHRlbnNpb25zXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIHZhbHVlIG9mIHRoZSBgU2VjLVdlYlNvY2tldC1LZXlgIGhlYWRlclxuICAgKiBAcGFyYW0ge1NldH0gcHJvdG9jb2xzIFRoZSBzdWJwcm90b2NvbHNcbiAgICogQHBhcmFtIHtodHRwLkluY29taW5nTWVzc2FnZX0gcmVxIFRoZSByZXF1ZXN0IG9iamVjdFxuICAgKiBAcGFyYW0ge0R1cGxleH0gc29ja2V0IFRoZSBuZXR3b3JrIHNvY2tldCBiZXR3ZWVuIHRoZSBzZXJ2ZXIgYW5kIGNsaWVudFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gaGVhZCBUaGUgZmlyc3QgcGFja2V0IG9mIHRoZSB1cGdyYWRlZCBzdHJlYW1cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHRocm93cyB7RXJyb3J9IElmIGNhbGxlZCBtb3JlIHRoYW4gb25jZSB3aXRoIHRoZSBzYW1lIHNvY2tldFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29tcGxldGVVcGdyYWRlKGV4dGVuc2lvbnMsIGtleSwgcHJvdG9jb2xzLCByZXEsIHNvY2tldCwgaGVhZCwgY2IpIHtcbiAgICAvL1xuICAgIC8vIERlc3Ryb3kgdGhlIHNvY2tldCBpZiB0aGUgY2xpZW50IGhhcyBhbHJlYWR5IHNlbnQgYSBGSU4gcGFja2V0LlxuICAgIC8vXG4gICAgaWYgKCFzb2NrZXQucmVhZGFibGUgfHwgIXNvY2tldC53cml0YWJsZSkgcmV0dXJuIHNvY2tldC5kZXN0cm95KCk7XG5cbiAgICBpZiAoc29ja2V0W2tXZWJTb2NrZXRdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdzZXJ2ZXIuaGFuZGxlVXBncmFkZSgpIHdhcyBjYWxsZWQgbW9yZSB0aGFuIG9uY2Ugd2l0aCB0aGUgc2FtZSAnICtcbiAgICAgICAgICAnc29ja2V0LCBwb3NzaWJseSBkdWUgdG8gYSBtaXNjb25maWd1cmF0aW9uJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc3RhdGUgPiBSVU5OSU5HKSByZXR1cm4gYWJvcnRIYW5kc2hha2Uoc29ja2V0LCA1MDMpO1xuXG4gICAgY29uc3QgZGlnZXN0ID0gY3JlYXRlSGFzaCgnc2hhMScpXG4gICAgICAudXBkYXRlKGtleSArIEdVSUQpXG4gICAgICAuZGlnZXN0KCdiYXNlNjQnKTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBbXG4gICAgICAnSFRUUC8xLjEgMTAxIFN3aXRjaGluZyBQcm90b2NvbHMnLFxuICAgICAgJ1VwZ3JhZGU6IHdlYnNvY2tldCcsXG4gICAgICAnQ29ubmVjdGlvbjogVXBncmFkZScsXG4gICAgICBgU2VjLVdlYlNvY2tldC1BY2NlcHQ6ICR7ZGlnZXN0fWBcbiAgICBdO1xuXG4gICAgY29uc3Qgd3MgPSBuZXcgdGhpcy5vcHRpb25zLldlYlNvY2tldChudWxsLCB1bmRlZmluZWQsIHRoaXMub3B0aW9ucyk7XG5cbiAgICBpZiAocHJvdG9jb2xzLnNpemUpIHtcbiAgICAgIC8vXG4gICAgICAvLyBPcHRpb25hbGx5IGNhbGwgZXh0ZXJuYWwgcHJvdG9jb2wgc2VsZWN0aW9uIGhhbmRsZXIuXG4gICAgICAvL1xuICAgICAgY29uc3QgcHJvdG9jb2wgPSB0aGlzLm9wdGlvbnMuaGFuZGxlUHJvdG9jb2xzXG4gICAgICAgID8gdGhpcy5vcHRpb25zLmhhbmRsZVByb3RvY29scyhwcm90b2NvbHMsIHJlcSlcbiAgICAgICAgOiBwcm90b2NvbHMudmFsdWVzKCkubmV4dCgpLnZhbHVlO1xuXG4gICAgICBpZiAocHJvdG9jb2wpIHtcbiAgICAgICAgaGVhZGVycy5wdXNoKGBTZWMtV2ViU29ja2V0LVByb3RvY29sOiAke3Byb3RvY29sfWApO1xuICAgICAgICB3cy5fcHJvdG9jb2wgPSBwcm90b2NvbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSkge1xuICAgICAgY29uc3QgcGFyYW1zID0gZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXS5wYXJhbXM7XG4gICAgICBjb25zdCB2YWx1ZSA9IGV4dGVuc2lvbi5mb3JtYXQoe1xuICAgICAgICBbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV06IFtwYXJhbXNdXG4gICAgICB9KTtcbiAgICAgIGhlYWRlcnMucHVzaChgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zOiAke3ZhbHVlfWApO1xuICAgICAgd3MuX2V4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gQWxsb3cgZXh0ZXJuYWwgbW9kaWZpY2F0aW9uL2luc3BlY3Rpb24gb2YgaGFuZHNoYWtlIGhlYWRlcnMuXG4gICAgLy9cbiAgICB0aGlzLmVtaXQoJ2hlYWRlcnMnLCBoZWFkZXJzLCByZXEpO1xuXG4gICAgc29ja2V0LndyaXRlKGhlYWRlcnMuY29uY2F0KCdcXHJcXG4nKS5qb2luKCdcXHJcXG4nKSk7XG4gICAgc29ja2V0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIHNvY2tldE9uRXJyb3IpO1xuXG4gICAgd3Muc2V0U29ja2V0KHNvY2tldCwgaGVhZCwge1xuICAgICAgYWxsb3dTeW5jaHJvbm91c0V2ZW50czogdGhpcy5vcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHMsXG4gICAgICBtYXhQYXlsb2FkOiB0aGlzLm9wdGlvbnMubWF4UGF5bG9hZCxcbiAgICAgIHNraXBVVEY4VmFsaWRhdGlvbjogdGhpcy5vcHRpb25zLnNraXBVVEY4VmFsaWRhdGlvblxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY2xpZW50cykge1xuICAgICAgdGhpcy5jbGllbnRzLmFkZCh3cyk7XG4gICAgICB3cy5vbignY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xpZW50cy5kZWxldGUod3MpO1xuXG4gICAgICAgIGlmICh0aGlzLl9zaG91bGRFbWl0Q2xvc2UgJiYgIXRoaXMuY2xpZW50cy5zaXplKSB7XG4gICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0Q2xvc2UsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjYih3cywgcmVxKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYlNvY2tldFNlcnZlcjtcblxuLyoqXG4gKiBBZGQgZXZlbnQgbGlzdGVuZXJzIG9uIGFuIGBFdmVudEVtaXR0ZXJgIHVzaW5nIGEgbWFwIG9mIDxldmVudCwgbGlzdGVuZXI+XG4gKiBwYWlycy5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gc2VydmVyIFRoZSBldmVudCBlbWl0dGVyXG4gKiBAcGFyYW0ge09iamVjdC48U3RyaW5nLCBGdW5jdGlvbj59IG1hcCBUaGUgbGlzdGVuZXJzIHRvIGFkZFxuICogQHJldHVybiB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlbW92ZSB0aGUgYWRkZWQgbGlzdGVuZXJzIHdoZW5cbiAqICAgICBjYWxsZWRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVycyhzZXJ2ZXIsIG1hcCkge1xuICBmb3IgKGNvbnN0IGV2ZW50IG9mIE9iamVjdC5rZXlzKG1hcCkpIHNlcnZlci5vbihldmVudCwgbWFwW2V2ZW50XSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIE9iamVjdC5rZXlzKG1hcCkpIHtcbiAgICAgIHNlcnZlci5yZW1vdmVMaXN0ZW5lcihldmVudCwgbWFwW2V2ZW50XSk7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIEVtaXQgYSBgJ2Nsb3NlJ2AgZXZlbnQgb24gYW4gYEV2ZW50RW1pdHRlcmAuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IHNlcnZlciBUaGUgZXZlbnQgZW1pdHRlclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZW1pdENsb3NlKHNlcnZlcikge1xuICBzZXJ2ZXIuX3N0YXRlID0gQ0xPU0VEO1xuICBzZXJ2ZXIuZW1pdCgnY2xvc2UnKTtcbn1cblxuLyoqXG4gKiBIYW5kbGUgc29ja2V0IGVycm9ycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzb2NrZXRPbkVycm9yKCkge1xuICB0aGlzLmRlc3Ryb3koKTtcbn1cblxuLyoqXG4gKiBDbG9zZSB0aGUgY29ubmVjdGlvbiB3aGVuIHByZWNvbmRpdGlvbnMgYXJlIG5vdCBmdWxmaWxsZWQuXG4gKlxuICogQHBhcmFtIHtEdXBsZXh9IHNvY2tldCBUaGUgc29ja2V0IG9mIHRoZSB1cGdyYWRlIHJlcXVlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlIFRoZSBIVFRQIHJlc3BvbnNlIHN0YXR1cyBjb2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gW21lc3NhZ2VdIFRoZSBIVFRQIHJlc3BvbnNlIGJvZHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbaGVhZGVyc10gQWRkaXRpb25hbCBIVFRQIHJlc3BvbnNlIGhlYWRlcnNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFib3J0SGFuZHNoYWtlKHNvY2tldCwgY29kZSwgbWVzc2FnZSwgaGVhZGVycykge1xuICAvL1xuICAvLyBUaGUgc29ja2V0IGlzIHdyaXRhYmxlIHVubGVzcyB0aGUgdXNlciBkZXN0cm95ZWQgb3IgZW5kZWQgaXQgYmVmb3JlIGNhbGxpbmdcbiAgLy8gYHNlcnZlci5oYW5kbGVVcGdyYWRlKClgIG9yIGluIHRoZSBgdmVyaWZ5Q2xpZW50YCBmdW5jdGlvbiwgd2hpY2ggaXMgYSB1c2VyXG4gIC8vIGVycm9yLiBIYW5kbGluZyB0aGlzIGRvZXMgbm90IG1ha2UgbXVjaCBzZW5zZSBhcyB0aGUgd29yc3QgdGhhdCBjYW4gaGFwcGVuXG4gIC8vIGlzIHRoYXQgc29tZSBvZiB0aGUgZGF0YSB3cml0dGVuIGJ5IHRoZSB1c2VyIG1pZ2h0IGJlIGRpc2NhcmRlZCBkdWUgdG8gdGhlXG4gIC8vIGNhbGwgdG8gYHNvY2tldC5lbmQoKWAgYmVsb3csIHdoaWNoIHRyaWdnZXJzIGFuIGAnZXJyb3InYCBldmVudCB0aGF0IGluXG4gIC8vIHR1cm4gY2F1c2VzIHRoZSBzb2NrZXQgdG8gYmUgZGVzdHJveWVkLlxuICAvL1xuICBtZXNzYWdlID0gbWVzc2FnZSB8fCBodHRwLlNUQVRVU19DT0RFU1tjb2RlXTtcbiAgaGVhZGVycyA9IHtcbiAgICBDb25uZWN0aW9uOiAnY2xvc2UnLFxuICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sJyxcbiAgICAnQ29udGVudC1MZW5ndGgnOiBCdWZmZXIuYnl0ZUxlbmd0aChtZXNzYWdlKSxcbiAgICAuLi5oZWFkZXJzXG4gIH07XG5cbiAgc29ja2V0Lm9uY2UoJ2ZpbmlzaCcsIHNvY2tldC5kZXN0cm95KTtcblxuICBzb2NrZXQuZW5kKFxuICAgIGBIVFRQLzEuMSAke2NvZGV9ICR7aHR0cC5TVEFUVVNfQ09ERVNbY29kZV19XFxyXFxuYCArXG4gICAgICBPYmplY3Qua2V5cyhoZWFkZXJzKVxuICAgICAgICAubWFwKChoKSA9PiBgJHtofTogJHtoZWFkZXJzW2hdfWApXG4gICAgICAgIC5qb2luKCdcXHJcXG4nKSArXG4gICAgICAnXFxyXFxuXFxyXFxuJyArXG4gICAgICBtZXNzYWdlXG4gICk7XG59XG5cbi8qKlxuICogRW1pdCBhIGAnd3NDbGllbnRFcnJvcidgIGV2ZW50IG9uIGEgYFdlYlNvY2tldFNlcnZlcmAgaWYgdGhlcmUgaXMgYXQgbGVhc3RcbiAqIG9uZSBsaXN0ZW5lciBmb3IgaXQsIG90aGVyd2lzZSBjYWxsIGBhYm9ydEhhbmRzaGFrZSgpYC5cbiAqXG4gKiBAcGFyYW0ge1dlYlNvY2tldFNlcnZlcn0gc2VydmVyIFRoZSBXZWJTb2NrZXQgc2VydmVyXG4gKiBAcGFyYW0ge2h0dHAuSW5jb21pbmdNZXNzYWdlfSByZXEgVGhlIHJlcXVlc3Qgb2JqZWN0XG4gKiBAcGFyYW0ge0R1cGxleH0gc29ja2V0IFRoZSBzb2NrZXQgb2YgdGhlIHVwZ3JhZGUgcmVxdWVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IGNvZGUgVGhlIEhUVFAgcmVzcG9uc2Ugc3RhdHVzIGNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSBIVFRQIHJlc3BvbnNlIGJvZHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbaGVhZGVyc10gVGhlIEhUVFAgcmVzcG9uc2UgaGVhZGVyc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWJvcnRIYW5kc2hha2VPckVtaXR3c0NsaWVudEVycm9yKFxuICBzZXJ2ZXIsXG4gIHJlcSxcbiAgc29ja2V0LFxuICBjb2RlLFxuICBtZXNzYWdlLFxuICBoZWFkZXJzXG4pIHtcbiAgaWYgKHNlcnZlci5saXN0ZW5lckNvdW50KCd3c0NsaWVudEVycm9yJykpIHtcbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoZXJyLCBhYm9ydEhhbmRzaGFrZU9yRW1pdHdzQ2xpZW50RXJyb3IpO1xuXG4gICAgc2VydmVyLmVtaXQoJ3dzQ2xpZW50RXJyb3InLCBlcnIsIHNvY2tldCwgcmVxKTtcbiAgfSBlbHNlIHtcbiAgICBhYm9ydEhhbmRzaGFrZShzb2NrZXQsIGNvZGUsIG1lc3NhZ2UsIGhlYWRlcnMpO1xuICB9XG59XG4iLCAiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0IG9zIGZyb20gXCJub2RlOm9zXCI7XG5pbXBvcnQgcmVhZGxpbmUgZnJvbSBcIm5vZGU6cmVhZGxpbmVcIjtcbmltcG9ydCBwYyBmcm9tIFwicGljb2NvbG9yc1wiO1xuaW1wb3J0IHsgV2ViUHViU3ViQ2xpZW50LCBXZWJQdWJTdWJKc29uUHJvdG9jb2wgfSBmcm9tIFwiQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50XCI7XG5pbXBvcnQgeyBsb2FkQ3JlZGVudGlhbHMsIHNhdmVDcmVkZW50aWFscywgd2lwZUNyZWRlbnRpYWxzLCBDcmVkZW50aWFscyB9IGZyb20gXCIuL2NyZWRlbnRpYWxzLmpzXCI7XG5cbnR5cGUgU3ViY29tbWFuZCA9IChhcmdzOiBzdHJpbmdbXSkgPT4gUHJvbWlzZTxudW1iZXI+O1xuXG5jb25zdCBzdWJjb21tYW5kczogUmVjb3JkPHN0cmluZywgU3ViY29tbWFuZD4gPSB7XG4gIGpvaW46IGNtZEpvaW4sXG4gIGRhZW1vbjogY21kRGFlbW9uLFxuICBjbGllbnRzOiBjbWRDbGllbnRzLFxuICBzZW5kOiBjbWRTZW5kLFxuICB1bnBhaXI6IGNtZFVucGFpcixcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgY29uc3QgW2NtZCwgLi4ucmVzdF0gPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMik7XG4gIGlmICghY21kIHx8IGNtZCA9PT0gXCItLWhlbHBcIiB8fCBjbWQgPT09IFwiLWhcIikge1xuICAgIHByaW50VXNhZ2UoKTtcbiAgICByZXR1cm4gY21kID8gMCA6IDI7XG4gIH1cbiAgY29uc3QgZm4gPSBzdWJjb21tYW5kc1tjbWRdO1xuICBpZiAoIWZuKSB7XG4gICAgY29uc29sZS5lcnJvcihwYy5yZWQoYHVua25vd24gc3ViY29tbWFuZDogJHtjbWR9YCkpO1xuICAgIHByaW50VXNhZ2UoKTtcbiAgICByZXR1cm4gMjtcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbihyZXN0KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihwYy5yZWQoZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFN0cmluZyhlcnIpKSk7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRVc2FnZSgpOiB2b2lkIHtcbiAgY29uc29sZS5lcnJvcihgXG5idmctZGVhbW9uIFx1MjAxNCBwdXJlLUF6dXJlIHRyYW5zcG9ydCBjbGllbnQgZm9yIGJ2Z2VlcnRcblxuVXNhZ2U6XG4gIGJ2Zy1kZWFtb24gam9pbiAtLWh1YiA8d3NzOi8veC53ZWJwdWJzdWIuYXp1cmUuY29tL2NsaWVudC9odWJzLzxodWI+PiAtLXRyYW5zcG9ydCA8aWRlbnRpZmllcj5cbiAgICAgIGFub255bW91c2x5IGNvbm5lY3QgdG8gYnZnZWVydCB2aWEgQXp1cmUsIHJlcXVlc3QgdG8gam9pbiBhXG4gICAgICB0cmFuc3BvcnQsIHByaW50IGEgcGFpcmluZyBjb2RlIGFuZCB3YWl0IGZvciBhZG1pbiBhcHByb3ZhbC5cblxuICBidmctZGVhbW9uIGRhZW1vblxuICAgICAga2VlcCBhbiBhdXRoZW50aWNhdGVkIFdlYlNvY2tldCBvcGVuLiBQcmludHMgaW5jb21pbmcgZW52ZWxvcGVzLlxuICAgICAgVHlwZSBcInJlcGx5IDx0ZXh0PlwiIGluIHN0ZGluIHRvIHJlcGx5IHRvIHRoZSBsYXN0IHNlbmRlci5cblxuICBidmctZGVhbW9uIGNsaWVudHMgWy0tb25saW5lXVxuICAgICAgbGlzdCBtZW1iZXJzIG9mIHRoZSBqb2luZWQgdHJhbnNwb3J0LlxuXG4gIGJ2Zy1kZWFtb24gc2VuZCA8dGFyZ2V0LWlkZW50aWZpZXJ8Kj4gPHRleHQ+XG4gICAgICBzZW5kIGEgZGlyZWN0IG1lc3NhZ2UgdG8gb25lIGNsaWVudCBvbiB0aGUgam9pbmVkIHRyYW5zcG9ydCwgb3IgXCIqXCIgdG8gYnJvYWRjYXN0LlxuXG4gIGJ2Zy1kZWFtb24gdW5wYWlyXG4gICAgICB3aXBlIGxvY2FsIGNyZWRlbnRpYWxzIChzZXJ2ZXItc2lkZSByZXZva2UgdmlhIGJ2Z2VlcnQgYWRtaW4pLlxuXG5DcmVkZW50aWFscyBhcmUgc3RvcmVkIGF0ICRCVkdfREVBTU9OX0NSRURFTlRJQUxTIG9yIH4vLmNvbmZpZy9idmctZGVhbW9uL2NyZWRlbnRpYWxzLmpzb24gKG1vZGUgMDYwMCkuXG5gKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VGbGFnKGFyZ3M6IHN0cmluZ1tdLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBjb25zdCBpZHggPSBhcmdzLmluZGV4T2YoYC0tJHtuYW1lfWApO1xuICBpZiAoaWR4ID09PSAtMSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgcmV0dXJuIGFyZ3NbaWR4ICsgMV07XG59XG5cbnR5cGUgUGFpcmluZ0NvZGVNc2cgPSB7IHR5cGU6IFwicGFpcmluZy5jb2RlXCI7IGNvZGU6IHN0cmluZzsgZXhwaXJlc19hdDogc3RyaW5nOyBhZG1pbl91cmw/OiBzdHJpbmcgfTtcbnR5cGUgUGFpcmluZ0FwcHJvdmVkTXNnID0geyB0eXBlOiBcInBhaXJpbmcuYXBwcm92ZWRcIjsgY2xpZW50X2lkOiBzdHJpbmc7IHJlZ2lzdHJhdGlvbl90b2tlbjogc3RyaW5nOyB1cmw6IHN0cmluZzsgZXhwaXJlc19hdDogc3RyaW5nIH07XG50eXBlIFBhaXJpbmdEZW5pZWRNc2cgPSB7IHR5cGU6IFwicGFpcmluZy5kZW5pZWRcIiB9O1xudHlwZSBUb2tlblJlZnJlc2hNc2cgPSB7IHR5cGU6IFwidG9rZW4ucmVmcmVzaFwiOyB1cmw6IHN0cmluZzsgZXhwaXJlc19hdDogc3RyaW5nIH07XG50eXBlIFN5c3RlbU1zZyA9IFBhaXJpbmdDb2RlTXNnIHwgUGFpcmluZ0FwcHJvdmVkTXNnIHwgUGFpcmluZ0RlbmllZE1zZyB8IFRva2VuUmVmcmVzaE1zZztcblxuZnVuY3Rpb24gYXNTeXN0ZW1Nc2coZGF0YTogdW5rbm93bik6IFN5c3RlbU1zZyB8IG51bGwge1xuICBpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09IFwib2JqZWN0XCIpIHJldHVybiBudWxsO1xuICBjb25zdCBvYmogPSBkYXRhIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBpZiAodHlwZW9mIG9iai50eXBlICE9PSBcInN0cmluZ1wiKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIG9iaiBhcyBTeXN0ZW1Nc2c7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNtZEpvaW4oYXJnczogc3RyaW5nW10pOiBQcm9taXNlPG51bWJlcj4ge1xuICBjb25zdCBodWIgPSBwYXJzZUZsYWcoYXJncywgXCJodWJcIik7XG4gIGNvbnN0IHRyYW5zcG9ydCA9IHBhcnNlRmxhZyhhcmdzLCBcInRyYW5zcG9ydFwiKTtcbiAgaWYgKCFodWIgfHwgIXRyYW5zcG9ydCkge1xuICAgIGNvbnNvbGUuZXJyb3IocGMucmVkKFwidXNhZ2U6IGJ2Zy1kZWFtb24gam9pbiAtLWh1YiA8d3NzLXVybD4gLS10cmFuc3BvcnQgPGlkZW50aWZpZXI+XCIpKTtcbiAgICByZXR1cm4gMjtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHBjLmN5YW4oXCJjb25uZWN0aW5nIHRvIEF6dXJlIGFub255bW91c2x5Li4uXCIpKTtcbiAgY29uc3QgY2xpZW50ID0gbmV3IFdlYlB1YlN1YkNsaWVudCh7IGdldENsaWVudEFjY2Vzc1VybDogYXN5bmMgKCkgPT4gaHViIH0sIHsgcHJvdG9jb2w6IFdlYlB1YlN1Ykpzb25Qcm90b2NvbCgpIH0pO1xuICBsZXQgYXBwcm92ZWQ6IFBhaXJpbmdBcHByb3ZlZE1zZyB8IG51bGwgPSBudWxsO1xuICBsZXQgZGVuaWVkID0gZmFsc2U7XG4gIGxldCB0b3BpY1JlcXVlc3RlZCA9IGZhbHNlO1xuICBsZXQgY29ubmVjdGlvbklkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBjbGllbnQub24oXCJjb25uZWN0ZWRcIiwgKGUpID0+IHtcbiAgICBjb25uZWN0aW9uSWQgPSBlLmNvbm5lY3Rpb25JZDtcbiAgfSk7XG4gIGNsaWVudC5vbihcInNlcnZlci1tZXNzYWdlXCIsIGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgbXNnID0gYXNTeXN0ZW1Nc2coZS5tZXNzYWdlLmRhdGEpO1xuICAgIGlmICghbXNnKSByZXR1cm47XG4gICAgaWYgKG1zZy50eXBlID09PSBcInBhaXJpbmcuY29kZVwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHBjLmJvbGQoXCJwYWlyIGNvZGU6XCIpLCBwYy5jeWFuKG1zZy5jb2RlKSk7XG4gICAgICBpZiAobXNnLmFkbWluX3VybCkgY29uc29sZS5sb2coYGFwcHJvdmUgaW4gYWRtaW46ICR7bXNnLmFkbWluX3VybH1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBleHBpcmVzOiAke21zZy5leHBpcmVzX2F0fWApO1xuICAgICAgY29uc29sZS5sb2cocGMuZGltKFwiXFxud2FpdGluZyBmb3IgYXBwcm92YWwgXHUyMDE0IEN0cmwrQyB0byBjYW5jZWxcXG5cIikpO1xuICAgICAgaWYgKCF0b3BpY1JlcXVlc3RlZCkge1xuICAgICAgICB0b3BpY1JlcXVlc3RlZCA9IHRydWU7XG4gICAgICAgIGF3YWl0IGNsaWVudC5zZW5kRXZlbnQoXCJwYWlyaW5nLnJlcXVlc3RfdG9waWNcIiwgeyB0b3BpY19pZGVudGlmaWVyOiB0cmFuc3BvcnQgfSwgXCJqc29uXCIsIHsgZmlyZUFuZEZvcmdldDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1zZy50eXBlID09PSBcInBhaXJpbmcuYXBwcm92ZWRcIikge1xuICAgICAgYXBwcm92ZWQgPSBtc2c7XG4gICAgfSBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJwYWlyaW5nLmRlbmllZFwiKSB7XG4gICAgICBkZW5pZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgYXdhaXQgY2xpZW50LnN0YXJ0KCk7XG5cbiAgY29uc3Qgc3RhcnRlZEF0ID0gRGF0ZS5ub3coKTtcbiAgd2hpbGUgKCFhcHByb3ZlZCAmJiAhZGVuaWVkICYmIERhdGUubm93KCkgLSBzdGFydGVkQXQgPCAzMCAqIDYwICogMTAwMCkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIDEwMDApKTtcbiAgfVxuICBhd2FpdCBjbGllbnQuc3RvcCgpO1xuXG4gIGlmIChkZW5pZWQpIHtcbiAgICBjb25zb2xlLmVycm9yKHBjLnJlZChcImRlbmllZCBieSBhZG1pblwiKSk7XG4gICAgcmV0dXJuIDM7XG4gIH1cbiAgaWYgKCFhcHByb3ZlZCkge1xuICAgIGNvbnNvbGUuZXJyb3IocGMucmVkKFwidGltZW91dCB3YWl0aW5nIGZvciBhcHByb3ZhbFwiKSk7XG4gICAgcmV0dXJuIDQ7XG4gIH1cblxuICBjb25zdCBwYXRoID0gc2F2ZUNyZWRlbnRpYWxzKHtcbiAgICBhenVyZV9odWJfdXJsOiBodWIsXG4gICAgY2xpZW50X2lkOiAoYXBwcm92ZWQgYXMgUGFpcmluZ0FwcHJvdmVkTXNnKS5jbGllbnRfaWQsXG4gICAgcmVnaXN0cmF0aW9uX3Rva2VuOiAoYXBwcm92ZWQgYXMgUGFpcmluZ0FwcHJvdmVkTXNnKS5yZWdpc3RyYXRpb25fdG9rZW4sXG4gICAgYWNjZXNzX3VybDogKGFwcHJvdmVkIGFzIFBhaXJpbmdBcHByb3ZlZE1zZykudXJsLFxuICAgIGFjY2Vzc191cmxfZXhwaXJlc19hdDogKGFwcHJvdmVkIGFzIFBhaXJpbmdBcHByb3ZlZE1zZykuZXhwaXJlc19hdCxcbiAgICB0b3BpY19pZGVudGlmaWVyOiB0cmFuc3BvcnQsXG4gIH0pO1xuICBjb25zb2xlLmxvZyhwYy5ncmVlbihgcGFpcmVkIGFzICR7KGFwcHJvdmVkIGFzIFBhaXJpbmdBcHByb3ZlZE1zZykuY2xpZW50X2lkfSBvbiB0cmFuc3BvcnQgJHt0cmFuc3BvcnR9YCkpO1xuICBjb25zb2xlLmxvZyhgY3JlZGVudGlhbHM6ICR7cGF0aH1gKTtcbiAgY29uc29sZS5sb2cocGMuZGltKGBib290c3RyYXAgY29ubmVjdGlvbklkIHdhcyAke2Nvbm5lY3Rpb25JZH1gKSk7XG4gIHJldHVybiAwO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjbWRVbnBhaXIoX2FyZ3M6IHN0cmluZ1tdKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgd2lwZUNyZWRlbnRpYWxzKCk7XG4gIGNvbnNvbGUubG9nKHBjLmdyZWVuKFwibG9jYWwgY3JlZGVudGlhbHMgd2lwZWRcIikpO1xuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gYXV0aGVkQ2xpZW50KGNyZWRzOiBDcmVkZW50aWFscyk6IFdlYlB1YlN1YkNsaWVudCB7XG4gIGxldCBhY2Nlc3NVcmwgPSBjcmVkcy5hY2Nlc3NfdXJsID8/IFwiXCI7XG4gIGxldCBhY2Nlc3NFeHBpcmVzQXQgPSBjcmVkcy5hY2Nlc3NfdXJsX2V4cGlyZXNfYXQgPyBEYXRlLnBhcnNlKGNyZWRzLmFjY2Vzc191cmxfZXhwaXJlc19hdCkgOiAwO1xuICBsZXQgcmVmcmVzaFJlc29sdmU6ICgodXJsOiBzdHJpbmcpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3QgYzogV2ViUHViU3ViQ2xpZW50ID0gbmV3IFdlYlB1YlN1YkNsaWVudCh7XG4gICAgZ2V0Q2xpZW50QWNjZXNzVXJsOiBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIWFjY2Vzc1VybCkgdGhyb3cgbmV3IEVycm9yKFwibm8gYWNjZXNzIHVybCBcdTIwMTQgcmUtcGFpclwiKTtcbiAgICAgIGlmIChEYXRlLm5vdygpID49IGFjY2Vzc0V4cGlyZXNBdCAtIDYwXzAwMCAmJiAhcmVmcmVzaFJlc29sdmUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB3YWl0ZXIgPSBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKSA9PiB7IHJlZnJlc2hSZXNvbHZlID0gcmVzb2x2ZTsgfSk7XG4gICAgICAgICAgYXdhaXQgYy5zZW5kRXZlbnQoXCJyZXF1ZXN0X3JlZnJlc2hfdG9rZW5cIiwge30sIFwianNvblwiLCB7IGZpcmVBbmRGb3JnZXQ6IHRydWUgfSk7XG4gICAgICAgICAgYWNjZXNzVXJsID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIHdhaXRlcixcbiAgICAgICAgICAgIG5ldyBQcm9taXNlPHN0cmluZz4oKF8sIHJlamVjdCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWplY3QobmV3IEVycm9yKFwidG9rZW4gcmVmcmVzaCB0aW1lb3V0XCIpKSwgMzBfMDAwKSksXG4gICAgICAgICAgXSk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8qIGZhbGwgYmFjayB0byBzdGFsZSBVUkwgKi9cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICByZWZyZXNoUmVzb2x2ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2Nlc3NVcmw7XG4gICAgfSxcbiAgfSwge1xuICAgIGF1dG9SZWNvbm5lY3Q6IHRydWUsXG4gICAgcmVjb25uZWN0UmV0cnlPcHRpb25zOiB7IG1heFJldHJpZXM6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCByZXRyeURlbGF5SW5NczogMV8wMDAsIG1heFJldHJ5RGVsYXlJbk1zOiAzMF8wMDAsIG1vZGU6IFwiRXhwb25lbnRpYWxcIiB9LFxuICAgIHByb3RvY29sOiBXZWJQdWJTdWJKc29uUHJvdG9jb2woKSxcbiAgfSk7XG5cbiAgYy5vbihcInNlcnZlci1tZXNzYWdlXCIsIChlKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGUubWVzc2FnZS5kYXRhIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkO1xuICAgIGlmIChkYXRhPy50eXBlID09PSBcInRva2VuLnJlZnJlc2hcIiAmJiB0eXBlb2YgZGF0YS51cmwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGFjY2Vzc1VybCA9IGRhdGEudXJsO1xuICAgICAgaWYgKHR5cGVvZiBkYXRhLmV4cGlyZXNfYXQgPT09IFwic3RyaW5nXCIpIGFjY2Vzc0V4cGlyZXNBdCA9IERhdGUucGFyc2UoZGF0YS5leHBpcmVzX2F0KTtcbiAgICAgIHJlZnJlc2hSZXNvbHZlPy4oZGF0YS51cmwpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGM7XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVDcmVkcygpOiBDcmVkZW50aWFscyB7XG4gIGNvbnN0IGNyZWRzID0gbG9hZENyZWRlbnRpYWxzKCk7XG4gIGlmICghY3JlZHMpIHtcbiAgICBjb25zb2xlLmVycm9yKHBjLnJlZChcIm5vdCBwYWlyZWQgXHUyMDE0IHJ1biBgYnZnLWRlYW1vbiBqb2luYCBmaXJzdFwiKSk7XG4gICAgcHJvY2Vzcy5leGl0KDIpO1xuICB9XG4gIHJldHVybiBjcmVkcztcbn1cblxuYXN5bmMgZnVuY3Rpb24gY21kRGFlbW9uKF9hcmdzOiBzdHJpbmdbXSk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGNvbnN0IGNyZWRzID0gcmVxdWlyZUNyZWRzKCk7XG4gIGNvbnN0IGNsaWVudCA9IGF1dGhlZENsaWVudChjcmVkcyk7XG5cbiAgbGV0IGxhc3RTZW5kZXI6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIGNsaWVudC5vbihcImNvbm5lY3RlZFwiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBjLmdyZWVuKGBjb25uZWN0ZWQgXHUyMDE0IGNvbm5lY3Rpb25JZD0ke2UuY29ubmVjdGlvbklkfSB1c2VySWQ9JHtlLnVzZXJJZH1gKSk7XG4gICAgY29uc29sZS5sb2cocGMuZGltKGB0cmFuc3BvcnQ6ICR7Y3JlZHMudG9waWNfaWRlbnRpZmllciA/PyBcIih1bmtub3duKVwifWApKTtcbiAgICBjb25zb2xlLmxvZyhwYy5kaW0oXCJ0eXBlICdyZXBseSA8dGV4dD4nIHRvIHJlcGx5IHRvIGxhc3Qgc2VuZGVyLCAnaGVscCcgZm9yIGNvbW1hbmRzXCIpKTtcbiAgfSk7XG4gIGNsaWVudC5vbihcImRpc2Nvbm5lY3RlZFwiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBjLnllbGxvdyhgZGlzY29ubmVjdGVkIFx1MjAxNCAke2UubWVzc2FnZSA/PyBcIlwifWApKTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlRW52ZWxvcGUgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgaWYgKGRhdGE/LnR5cGUgPT09IFwidG9rZW4ucmVmcmVzaFwiKSByZXR1cm47XG4gICAgY29uc3Qgc2VuZGVyID0gZGF0YT8uc2VuZGVyX2lkZW50aWZpZXIgPz8gXCIodW5rbm93bilcIjtcbiAgICBjb25zdCB0YXJnZXQgPSBkYXRhPy50YXJnZXRfaWRlbnRpZmllcjtcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gY3JlZHMuY2xpZW50X2lkKSByZXR1cm47IC8vIGZpbHRlciBvdXQgdGFyZ2V0ZWQtbm90LWZvci1tZVxuICAgIGNvbnN0IHBheWxvYWQgPSB0eXBlb2YgZGF0YT8ucGF5bG9hZCA9PT0gXCJzdHJpbmdcIiA/IGRhdGEucGF5bG9hZCA6IEpTT04uc3RyaW5naWZ5KGRhdGE/LnBheWxvYWQpO1xuICAgIGNvbnNvbGUubG9nKGAke3BjLmN5YW4oXCJbXCIgKyBzZW5kZXIgKyBcIl1cIil9ICR7ZGF0YT8ubWVzc2FnZV90eXBlID8/IFwiXCJ9OiAke3BheWxvYWR9YCk7XG4gICAgbGFzdFNlbmRlciA9IHNlbmRlcjtcbiAgfTtcblxuICBjbGllbnQub24oXCJzZXJ2ZXItbWVzc2FnZVwiLCAoZSkgPT4gaGFuZGxlRW52ZWxvcGUoZS5tZXNzYWdlLmRhdGEpKTtcbiAgY2xpZW50Lm9uKFwiZ3JvdXAtbWVzc2FnZVwiLCAoZSkgPT4gaGFuZGxlRW52ZWxvcGUoZS5tZXNzYWdlLmRhdGEpKTtcblxuICBhd2FpdCBjbGllbnQuc3RhcnQoKTtcblxuICBjb25zdCBybCA9IHJlYWRsaW5lLmNyZWF0ZUludGVyZmFjZSh7IGlucHV0OiBwcm9jZXNzLnN0ZGluLCBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0LCB0ZXJtaW5hbDogZmFsc2UgfSk7XG4gIHJsLm9uKFwibGluZVwiLCBhc3luYyAocmF3KSA9PiB7XG4gICAgY29uc3QgbGluZSA9IHJhdy50cmltKCk7XG4gICAgaWYgKCFsaW5lKSByZXR1cm47XG4gICAgaWYgKGxpbmUgPT09IFwiaGVscFwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhwYy5kaW0oXCJjb21tYW5kczogcmVwbHkgPHRleHQ+IHwgc2VuZCA8aWRlbnRpZmllcj4gPHRleHQ+IHwgY2xpZW50cyB8IHF1aXRcIikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobGluZSA9PT0gXCJxdWl0XCIpIHtcbiAgICAgIGF3YWl0IGNsaWVudC5zdG9wKCk7XG4gICAgICBwcm9jZXNzLmV4aXQoMCk7XG4gICAgfVxuICAgIGlmIChsaW5lID09PSBcImNsaWVudHNcIikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgbGlzdENsaWVudHMoY3JlZHMsIGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKHBjLnJlZChlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogU3RyaW5nKGVycikpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVwbHlNYXRjaCA9IGxpbmUubWF0Y2goL15yZXBseVxccysoLispJC8pO1xuICAgIGlmIChyZXBseU1hdGNoKSB7XG4gICAgICBpZiAoIWxhc3RTZW5kZXIpIHsgY29uc29sZS5sb2cocGMueWVsbG93KFwibm8gbGFzdCBzZW5kZXIgdG8gcmVwbHkgdG9cIikpOyByZXR1cm47IH1cbiAgICAgIGF3YWl0IHB1Ymxpc2goY2xpZW50LCBjcmVkcywgbGFzdFNlbmRlciwgcmVwbHlNYXRjaFsxXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbmRNYXRjaCA9IGxpbmUubWF0Y2goL15zZW5kXFxzKyhcXFMrKVxccysoLispJC8pO1xuICAgIGlmIChzZW5kTWF0Y2gpIHtcbiAgICAgIGF3YWl0IHB1Ymxpc2goY2xpZW50LCBjcmVkcywgc2VuZE1hdGNoWzFdLCBzZW5kTWF0Y2hbMl0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwYy55ZWxsb3coXCJ1bmtub3duIGNvbW1hbmQgXHUyMDE0IHRyeSAnaGVscCdcIikpO1xuICB9KTtcblxuICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IHNodXRkb3duID0gYXN5bmMgKHNpZzogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwYy5kaW0oYFxcbiR7c2lnfSwgc3RvcHBpbmdgKSk7XG4gICAgICB0cnkgeyBhd2FpdCBjbGllbnQuc3RvcCgpOyB9IGNhdGNoIHsgLyogKi8gfVxuICAgICAgcmVzb2x2ZSgwKTtcbiAgICB9O1xuICAgIHByb2Nlc3Mub24oXCJTSUdJTlRcIiwgKCkgPT4gc2h1dGRvd24oXCJTSUdJTlRcIikpO1xuICAgIHByb2Nlc3Mub24oXCJTSUdURVJNXCIsICgpID0+IHNodXRkb3duKFwiU0lHVEVSTVwiKSk7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwdWJsaXNoKGNsaWVudDogV2ViUHViU3ViQ2xpZW50LCBjcmVkczogQ3JlZGVudGlhbHMsIHRhcmdldElkZW50aWZpZXI6IHN0cmluZywgdGV4dDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHRhcmdldCA9IHRhcmdldElkZW50aWZpZXIgPT09IFwiKlwiID8gbnVsbCA6IHRhcmdldElkZW50aWZpZXI7XG4gIGF3YWl0IGNsaWVudC5zZW5kRXZlbnQoXCJwdWJsaXNoXCIsIHtcbiAgICB0b3BpY19pZGVudGlmaWVyOiBjcmVkcy50b3BpY19pZGVudGlmaWVyLFxuICAgIG1lc3NhZ2VfdHlwZTogXCJjaGF0LnRleHRcIixcbiAgICBwYXlsb2FkOiB0ZXh0LFxuICAgIHRhcmdldF9pZGVudGlmaWVyOiB0YXJnZXQsXG4gIH0sIFwianNvblwiLCB7IGZpcmVBbmRGb3JnZXQ6IHRydWUgfSk7XG4gIGNvbnNvbGUubG9nKHBjLmdyZWVuKGBzZW50IHRvICR7dGFyZ2V0SWRlbnRpZmllcn06ICR7dGV4dH1gKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNtZENsaWVudHMoYXJnczogc3RyaW5nW10pOiBQcm9taXNlPG51bWJlcj4ge1xuICBjb25zdCBjcmVkcyA9IHJlcXVpcmVDcmVkcygpO1xuICBhd2FpdCBsaXN0Q2xpZW50cyhjcmVkcywgYXJncy5pbmNsdWRlcyhcIi0tb25saW5lXCIpKTtcbiAgcmV0dXJuIDA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxpc3RDbGllbnRzKGNyZWRzOiBDcmVkZW50aWFscywgb25saW5lT25seTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoIWNyZWRzLnRvcGljX2lkZW50aWZpZXIpIHRocm93IG5ldyBFcnJvcihcIm5vIHRyYW5zcG9ydCBhc3NvY2lhdGVkIHdpdGggY3JlZGVudGlhbHNcIik7XG5cbiAgY29uc3QgY2xpZW50ID0gYXV0aGVkQ2xpZW50KGNyZWRzKTtcbiAgbGV0IHJlc3VsdDogeyBjbGllbnRzOiBBcnJheTx7IGlkZW50aWZpZXI6IHN0cmluZzsgbmFtZT86IHN0cmluZzsga2luZDogc3RyaW5nOyBvbmxpbmU6IGJvb2xlYW4gfT4gfSB8IG51bGwgPSBudWxsO1xuICBjbGllbnQub24oXCJzZXJ2ZXItbWVzc2FnZVwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBlLm1lc3NhZ2UuZGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZDtcbiAgICBpZiAoZGF0YT8udHlwZSA9PT0gXCJjbGllbnRzLmxpc3RfcmVzdWx0XCIpIHtcbiAgICAgIHJlc3VsdCA9IGRhdGEgYXMgYW55O1xuICAgIH1cbiAgfSk7XG4gIGF3YWl0IGNsaWVudC5zdGFydCgpO1xuICBhd2FpdCBjbGllbnQuc2VuZEV2ZW50KFwiY2xpZW50cy5saXN0XCIsIHsgdG9waWNfaWRlbnRpZmllcjogY3JlZHMudG9waWNfaWRlbnRpZmllciB9LCBcImpzb25cIiwgeyBmaXJlQW5kRm9yZ2V0OiB0cnVlIH0pO1xuICBjb25zdCBzdGFydGVkQXQgPSBEYXRlLm5vdygpO1xuICB3aGlsZSAoIXJlc3VsdCAmJiBEYXRlLm5vdygpIC0gc3RhcnRlZEF0IDwgMTBfMDAwKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgMTAwKSk7XG4gIH1cbiAgYXdhaXQgY2xpZW50LnN0b3AoKTtcbiAgaWYgKCFyZXN1bHQpIHRocm93IG5ldyBFcnJvcihcInRpbWVvdXQgd2FpdGluZyBmb3IgY2xpZW50cyBsaXN0XCIpO1xuXG4gIGNvbnN0IGVudHJpZXMgPSBvbmxpbmVPbmx5ID8gcmVzdWx0LmNsaWVudHMuZmlsdGVyKChjKSA9PiBjLm9ubGluZSkgOiByZXN1bHQuY2xpZW50cztcbiAgZm9yIChjb25zdCBjIG9mIGVudHJpZXMpIHtcbiAgICBjb25zdCBkb3QgPSBjLm9ubGluZSA/IHBjLmdyZWVuKFwiXHUyNUNGXCIpIDogcGMuZGltKFwiXHUyNUNCXCIpO1xuICAgIGNvbnNvbGUubG9nKGAke2RvdH0gJHtjLmlkZW50aWZpZXJ9JHtjLm5hbWUgPyBgICgke2MubmFtZX0pYCA6IFwiXCJ9IFx1MjAxNCAke2Mua2luZH1gKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBjbWRTZW5kKGFyZ3M6IHN0cmluZ1tdKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgY29uc3QgY3JlZHMgPSByZXF1aXJlQ3JlZHMoKTtcbiAgY29uc3QgW3RhcmdldCwgLi4ucmVzdF0gPSBhcmdzO1xuICBpZiAoIXRhcmdldCB8fCByZXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnNvbGUuZXJyb3IocGMucmVkKFwidXNhZ2U6IGJ2Zy1kZWFtb24gc2VuZCA8dGFyZ2V0LWlkZW50aWZpZXJ8Kj4gPHRleHQ+XCIpKTtcbiAgICByZXR1cm4gMjtcbiAgfVxuICBjb25zdCB0ZXh0ID0gcmVzdC5qb2luKFwiIFwiKTtcbiAgY29uc3QgY2xpZW50ID0gYXV0aGVkQ2xpZW50KGNyZWRzKTtcbiAgYXdhaXQgY2xpZW50LnN0YXJ0KCk7XG4gIGF3YWl0IHB1Ymxpc2goY2xpZW50LCBjcmVkcywgdGFyZ2V0LCB0ZXh0KTtcbiAgYXdhaXQgY2xpZW50LnN0b3AoKTtcbiAgcmV0dXJuIDA7XG59XG5cbm1haW4oKS50aGVuKChjb2RlKSA9PiBwcm9jZXNzLmV4aXQoY29kZSkpO1xuIiwgIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbnRlcmZhY2UgV2luZG93IHtcbiAgZG9jdW1lbnQ6IHVua25vd247XG59XG5cbmludGVyZmFjZSBEZWRpY2F0ZWRXb3JrZXJHbG9iYWxTY29wZSB7XG4gIGNvbnN0cnVjdG9yOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICB9O1xuXG4gIGltcG9ydFNjcmlwdHM6ICguLi5wYXRoczogc3RyaW5nW10pID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBOYXZpZ2F0b3Ige1xuICBwcm9kdWN0OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBEZW5vR2xvYmFsIHtcbiAgdmVyc2lvbjoge1xuICAgIGRlbm86IHN0cmluZztcbiAgfTtcbn1cblxuaW50ZXJmYWNlIEJ1bkdsb2JhbCB7XG4gIHZlcnNpb246IHN0cmluZztcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhenVyZS9henVyZS1zZGsvdHMtbm8td2luZG93XG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogV2luZG93O1xuZGVjbGFyZSBjb25zdCBzZWxmOiBEZWRpY2F0ZWRXb3JrZXJHbG9iYWxTY29wZTtcbmRlY2xhcmUgY29uc3QgRGVubzogRGVub0dsb2JhbDtcbmRlY2xhcmUgY29uc3QgQnVuOiBCdW5HbG9iYWw7XG5kZWNsYXJlIGNvbnN0IG5hdmlnYXRvcjogTmF2aWdhdG9yO1xuXG4vKipcbiAqIEEgY29uc3RhbnQgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZW52aXJvbm1lbnQgdGhlIGNvZGUgaXMgcnVubmluZyBpcyBhIFdlYiBCcm93c2VyLlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGF6dXJlL2F6dXJlLXNkay90cy1uby13aW5kb3dcbmV4cG9ydCBjb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCI7XG5cbi8qKlxuICogQSBjb25zdGFudCB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBlbnZpcm9ubWVudCB0aGUgY29kZSBpcyBydW5uaW5nIGlzIGEgV2ViIFdvcmtlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzV2ViV29ya2VyID1cbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiZcbiAgdHlwZW9mIHNlbGY/LmltcG9ydFNjcmlwdHMgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAoc2VsZi5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gXCJEZWRpY2F0ZWRXb3JrZXJHbG9iYWxTY29wZVwiIHx8XG4gICAgc2VsZi5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gXCJTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGVcIiB8fFxuICAgIHNlbGYuY29uc3RydWN0b3I/Lm5hbWUgPT09IFwiU2hhcmVkV29ya2VyR2xvYmFsU2NvcGVcIik7XG5cbi8qKlxuICogQSBjb25zdGFudCB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBlbnZpcm9ubWVudCB0aGUgY29kZSBpcyBydW5uaW5nIGlzIERlbm8uXG4gKi9cbmV4cG9ydCBjb25zdCBpc0Rlbm8gPVxuICB0eXBlb2YgRGVubyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICB0eXBlb2YgRGVuby52ZXJzaW9uICE9PSBcInVuZGVmaW5lZFwiICYmXG4gIHR5cGVvZiBEZW5vLnZlcnNpb24uZGVubyAhPT0gXCJ1bmRlZmluZWRcIjtcblxuLyoqXG4gKiBBIGNvbnN0YW50IHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVudmlyb25tZW50IHRoZSBjb2RlIGlzIHJ1bm5pbmcgaXMgQnVuLnNoLlxuICovXG5leHBvcnQgY29uc3QgaXNCdW4gPSB0eXBlb2YgQnVuICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBCdW4udmVyc2lvbiAhPT0gXCJ1bmRlZmluZWRcIjtcblxuLyoqXG4gKiBBIGNvbnN0YW50IHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVudmlyb25tZW50IHRoZSBjb2RlIGlzIHJ1bm5pbmcgaXMgYSBOb2RlLmpzIGNvbXBhdGlibGUgZW52aXJvbm1lbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBpc05vZGVMaWtlID1cbiAgdHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICBCb29sZWFuKGdsb2JhbFRoaXMucHJvY2Vzcy52ZXJzaW9uKSAmJlxuICBCb29sZWFuKGdsb2JhbFRoaXMucHJvY2Vzcy52ZXJzaW9ucz8ubm9kZSk7XG5cbi8qKlxuICogQSBjb25zdGFudCB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBlbnZpcm9ubWVudCB0aGUgY29kZSBpcyBydW5uaW5nIGlzIE5vZGUuSlMuXG4gKi9cbmV4cG9ydCBjb25zdCBpc05vZGVSdW50aW1lID0gaXNOb2RlTGlrZSAmJiAhaXNCdW4gJiYgIWlzRGVubztcblxuLyoqXG4gKiBBIGNvbnN0YW50IHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVudmlyb25tZW50IHRoZSBjb2RlIGlzIHJ1bm5pbmcgaXMgaW4gUmVhY3QtTmF0aXZlLlxuICovXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL2Jsb2IvbWFpbi9wYWNrYWdlcy9yZWFjdC1uYXRpdmUvTGlicmFyaWVzL0NvcmUvc2V0VXBOYXZpZ2F0b3IuanNcbmV4cG9ydCBjb25zdCBpc1JlYWN0TmF0aXZlID1cbiAgdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZpZ2F0b3I/LnByb2R1Y3QgPT09IFwiUmVhY3ROYXRpdmVcIjtcbiIsICIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuLyoqXG4gKiBUaGlzIGVycm9yIGlzIHRocm93biB3aGVuIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb24gaGFzIGJlZW4gYWJvcnRlZC5cbiAqIENoZWNrIGZvciB0aGlzIGVycm9yIGJ5IHRlc3RpbmcgdGhlIGBuYW1lYCB0aGF0IHRoZSBuYW1lIHByb3BlcnR5IG9mIHRoZVxuICogZXJyb3IgbWF0Y2hlcyBgXCJBYm9ydEVycm9yXCJgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c1xuICogY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAqIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAqIHRyeSB7XG4gKiAgIGRvQXN5bmNXb3JrKGNvbnRyb2xsZXIuc2lnbmFsKVxuICogfSBjYXRjaCAoZSkge1xuICogICBpZiAoZS5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcbiAqICAgICAvLyBoYW5kbGUgYWJvcnQgZXJyb3IgaGVyZS5cbiAqICAgfVxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBBYm9ydEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gXCJBYm9ydEVycm9yXCI7XG4gIH1cbn1cbiIsICIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgQWJvcnRFcnJvciB9IGZyb20gXCJAYXp1cmUvYWJvcnQtY29udHJvbGxlclwiO1xuaW1wb3J0IHR5cGUgeyBBYm9ydE9wdGlvbnMgfSBmcm9tIFwiLi9hYm9ydGVyVXRpbHMuanNcIjtcblxuLyoqXG4gKiBPcHRpb25zIGZvciB0aGUgY3JlYXRlQWJvcnRhYmxlUHJvbWlzZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVBYm9ydGFibGVQcm9taXNlT3B0aW9ucyBleHRlbmRzIEFib3J0T3B0aW9ucyB7XG4gIC8qKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBpZiB0aGUgcHJvbWlzZSB3YXMgYWJvcnRlZCAqL1xuICBjbGVhbnVwQmVmb3JlQWJvcnQ/OiAoKSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYWJvcnRhYmxlIHByb21pc2UuXG4gKiBAcGFyYW0gYnVpbGRQcm9taXNlIC0gQSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZXNvbHZlIGFuZCByZWplY3QgZnVuY3Rpb25zIGFzIHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIGZvciB0aGUgYWJvcnRhYmxlIHByb21pc2UuXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCBjYW4gYmUgYWJvcnRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFib3J0YWJsZVByb21pc2U8VD4oXG4gIGJ1aWxkUHJvbWlzZTogKFxuICAgIHJlc29sdmU6ICh2YWx1ZTogVCB8IFByb21pc2VMaWtlPFQ+KSA9PiB2b2lkLFxuICAgIHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZCxcbiAgKSA9PiB2b2lkLFxuICBvcHRpb25zPzogQ3JlYXRlQWJvcnRhYmxlUHJvbWlzZU9wdGlvbnMsXG4pOiBQcm9taXNlPFQ+IHtcbiAgY29uc3QgeyBjbGVhbnVwQmVmb3JlQWJvcnQsIGFib3J0U2lnbmFsLCBhYm9ydEVycm9yTXNnIH0gPSBvcHRpb25zID8/IHt9O1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZ1bmN0aW9uIHJlamVjdE9uQWJvcnQoKTogdm9pZCB7XG4gICAgICByZWplY3QobmV3IEFib3J0RXJyb3IoYWJvcnRFcnJvck1zZyA/PyBcIlRoZSBvcGVyYXRpb24gd2FzIGFib3J0ZWQuXCIpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgICAgYWJvcnRTaWduYWw/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25BYm9ydCgpOiB2b2lkIHtcbiAgICAgIGNsZWFudXBCZWZvcmVBYm9ydD8uKCk7XG4gICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIHJlamVjdE9uQWJvcnQoKTtcbiAgICB9XG4gICAgaWYgKGFib3J0U2lnbmFsPy5hYm9ydGVkKSB7XG4gICAgICByZXR1cm4gcmVqZWN0T25BYm9ydCgpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgYnVpbGRQcm9taXNlKFxuICAgICAgICAoeCkgPT4ge1xuICAgICAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgICAgIHJlc29sdmUoeCk7XG4gICAgICAgIH0sXG4gICAgICAgICh4KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICAgICAgcmVqZWN0KHgpO1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cbiAgICBhYm9ydFNpZ25hbD8uYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuICB9KTtcbn1cbiIsICIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHR5cGUgeyBBYm9ydE9wdGlvbnMgfSBmcm9tIFwiLi9hYm9ydGVyVXRpbHMuanNcIjtcbmltcG9ydCB7IGNyZWF0ZUFib3J0YWJsZVByb21pc2UgfSBmcm9tIFwiLi9jcmVhdGVBYm9ydGFibGVQcm9taXNlLmpzXCI7XG5pbXBvcnQgeyBnZXRSYW5kb21JbnRlZ2VySW5jbHVzaXZlIH0gZnJvbSBcIkB0eXBlc3BlYy90cy1odHRwLXJ1bnRpbWUvaW50ZXJuYWwvdXRpbFwiO1xuXG5jb25zdCBTdGFuZGFyZEFib3J0TWVzc2FnZSA9IFwiVGhlIGRlbGF5IHdhcyBhYm9ydGVkLlwiO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHN1cHBvcnQgYWJvcnQgZnVuY3Rpb25hbGl0eSBmb3IgdGhlIGRlbGF5IG1ldGhvZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIERlbGF5T3B0aW9ucyBleHRlbmRzIEFib3J0T3B0aW9ucyB7fVxuXG4vKipcbiAqIEEgd3JhcHBlciBmb3Igc2V0VGltZW91dCB0aGF0IHJlc29sdmVzIGEgcHJvbWlzZSBhZnRlciB0aW1lSW5NcyBtaWxsaXNlY29uZHMuXG4gKiBAcGFyYW0gdGltZUluTXMgLSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBiZSBkZWxheWVkLlxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBmb3IgZGVsYXkgLSBjdXJyZW50bHkgYWJvcnQgb3B0aW9uc1xuICogQHJldHVybnMgUHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIGFmdGVyIHRpbWVJbk1zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxheSh0aW1lSW5NczogbnVtYmVyLCBvcHRpb25zPzogRGVsYXlPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIGxldCB0b2tlbjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG4gIGNvbnN0IHsgYWJvcnRTaWduYWwsIGFib3J0RXJyb3JNc2cgfSA9IG9wdGlvbnMgPz8ge307XG4gIHJldHVybiBjcmVhdGVBYm9ydGFibGVQcm9taXNlKFxuICAgIChyZXNvbHZlKSA9PiB7XG4gICAgICB0b2tlbiA9IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZUluTXMpO1xuICAgIH0sXG4gICAge1xuICAgICAgY2xlYW51cEJlZm9yZUFib3J0OiAoKSA9PiBjbGVhclRpbWVvdXQodG9rZW4pLFxuICAgICAgYWJvcnRTaWduYWwsXG4gICAgICBhYm9ydEVycm9yTXNnOiBhYm9ydEVycm9yTXNnID8/IFN0YW5kYXJkQWJvcnRNZXNzYWdlLFxuICAgIH0sXG4gICk7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGVsYXkgaW50ZXJ2YWwgZm9yIHJldHJ5IGF0dGVtcHRzIHVzaW5nIGV4cG9uZW50aWFsIGRlbGF5IHdpdGggaml0dGVyLlxuICogQHBhcmFtIHJldHJ5QXR0ZW1wdCAtIFRoZSBjdXJyZW50IHJldHJ5IGF0dGVtcHQgbnVtYmVyLlxuICogQHBhcmFtIGNvbmZpZyAtIFRoZSBleHBvbmVudGlhbCByZXRyeSBjb25maWd1cmF0aW9uLlxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGNhbGN1bGF0ZWQgcmV0cnkgZGVsYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVSZXRyeURlbGF5KFxuICByZXRyeUF0dGVtcHQ6IG51bWJlcixcbiAgY29uZmlnOiB7XG4gICAgcmV0cnlEZWxheUluTXM6IG51bWJlcjtcbiAgICBtYXhSZXRyeURlbGF5SW5NczogbnVtYmVyO1xuICB9LFxuKTogeyByZXRyeUFmdGVySW5NczogbnVtYmVyIH0ge1xuICAvLyBFeHBvbmVudGlhbGx5IGluY3JlYXNlIHRoZSBkZWxheSBlYWNoIHRpbWVcbiAgY29uc3QgZXhwb25lbnRpYWxEZWxheSA9IGNvbmZpZy5yZXRyeURlbGF5SW5NcyAqIE1hdGgucG93KDIsIHJldHJ5QXR0ZW1wdCk7XG5cbiAgLy8gRG9uJ3QgbGV0IHRoZSBkZWxheSBleGNlZWQgdGhlIG1heGltdW1cbiAgY29uc3QgY2xhbXBlZERlbGF5ID0gTWF0aC5taW4oY29uZmlnLm1heFJldHJ5RGVsYXlJbk1zLCBleHBvbmVudGlhbERlbGF5KTtcblxuICAvLyBBbGxvdyB0aGUgZmluYWwgdmFsdWUgdG8gaGF2ZSBzb21lIFwiaml0dGVyXCIgKHdpdGhpbiA1MCUgb2YgdGhlIGRlbGF5IHNpemUpIHNvXG4gIC8vIHRoYXQgcmV0cmllcyBhY3Jvc3MgbXVsdGlwbGUgY2xpZW50cyBkb24ndCBvY2N1ciBzaW11bHRhbmVvdXNseS5cbiAgY29uc3QgcmV0cnlBZnRlckluTXMgPSBjbGFtcGVkRGVsYXkgLyAyICsgZ2V0UmFuZG9tSW50ZWdlckluY2x1c2l2ZSgwLCBjbGFtcGVkRGVsYXkgLyAyKTtcblxuICByZXR1cm4geyByZXRyeUFmdGVySW5NcyB9O1xufVxuIiwgImltcG9ydCB7IGRlbGF5IH0gZnJvbSBcIkBhenVyZS9jb3JlLXV0aWxcIjtcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50c1wiO1xuaW1wb3J0IHsgSW52b2NhdGlvbkVycm9yLCBTZW5kTWVzc2FnZUVycm9yIH0gZnJvbSBcIi4vZXJyb3JzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tIFwiLi9sb2dnZXIuanNcIjtcbmltcG9ydCB7IFdlYlB1YlN1Ykpzb25SZWxpYWJsZVByb3RvY29sIH0gZnJvbSBcIi4vcHJvdG9jb2xzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBXZWJTb2NrZXRDbGllbnRGYWN0b3J5IH0gZnJvbSBcIi4vd2Vic29ja2V0L3dlYnNvY2tldENsaWVudC5qc1wiO1xuaW1wb3J0IHsgQWNrTWFuYWdlciB9IGZyb20gXCIuL2Fja01hbmFnZXIuanNcIjtcbmltcG9ydCB7IEludm9jYXRpb25NYW5hZ2VyIH0gZnJvbSBcIi4vaW52b2NhdGlvbk1hbmFnZXIuanNcIjtcbnZhciBXZWJQdWJTdWJDbGllbnRTdGF0ZSA9IC8qIEBfX1BVUkVfXyAqLyAoKFdlYlB1YlN1YkNsaWVudFN0YXRlMikgPT4ge1xuICBXZWJQdWJTdWJDbGllbnRTdGF0ZTJbXCJTdG9wcGVkXCJdID0gXCJTdG9wcGVkXCI7XG4gIFdlYlB1YlN1YkNsaWVudFN0YXRlMltcIkRpc2Nvbm5lY3RlZFwiXSA9IFwiRGlzY29ubmVjdGVkXCI7XG4gIFdlYlB1YlN1YkNsaWVudFN0YXRlMltcIkNvbm5lY3RpbmdcIl0gPSBcIkNvbm5lY3RpbmdcIjtcbiAgV2ViUHViU3ViQ2xpZW50U3RhdGUyW1wiQ29ubmVjdGVkXCJdID0gXCJDb25uZWN0ZWRcIjtcbiAgV2ViUHViU3ViQ2xpZW50U3RhdGUyW1wiUmVjb3ZlcmluZ1wiXSA9IFwiUmVjb3ZlcmluZ1wiO1xuICByZXR1cm4gV2ViUHViU3ViQ2xpZW50U3RhdGUyO1xufSkoV2ViUHViU3ViQ2xpZW50U3RhdGUgfHwge30pO1xuY2xhc3MgV2ViUHViU3ViQ2xpZW50IHtcbiAgX3Byb3RvY29sO1xuICBfY3JlZGVudGlhbDtcbiAgX29wdGlvbnM7XG4gIF9ncm91cE1hcDtcbiAgX2Fja01hbmFnZXI7XG4gIF9pbnZvY2F0aW9uTWFuYWdlcjtcbiAgX3NlcXVlbmNlSWQ7XG4gIF9tZXNzYWdlUmV0cnlQb2xpY3k7XG4gIF9yZWNvbm5lY3RSZXRyeVBvbGljeTtcbiAgX3F1aWNrU2VxdWVuY2VBY2tEaWZmID0gMzAwO1xuICAvLyBUaGUgdGltZW91dCBmb3Iga2VlcCBhbGl2ZVxuICBfa2VlcEFsaXZlVGltZW91dEluTXM7XG4gIC8vIFRoZSBpbnRlcnZhbCBhdCB3aGljaCB0byBzZW5kIGtlZXAtYWxpdmUgcGluZyBtZXNzYWdlcyB0byB0aGUgcnVudGltZVxuICBfa2VlcEFsaXZlSW50ZXJ2YWxJbk1zO1xuICBfZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgX3N0YXRlO1xuICBfaXNTdG9wcGluZyA9IGZhbHNlO1xuICBfcGluZ0tlZXBhbGl2ZVRhc2s7XG4gIF90aW1lb3V0TW9uaXRvclRhc2s7XG4gIC8vIGNvbm5lY3Rpb24gbGlmZXRpbWVcbiAgX3dzQ2xpZW50O1xuICBfdXJpO1xuICBfbGFzdENsb3NlRXZlbnQ7XG4gIF9sYXN0RGlzY29ubmVjdGVkTWVzc2FnZTtcbiAgX2Nvbm5lY3Rpb25JZDtcbiAgX3JlY29ubmVjdGlvblRva2VuO1xuICBfaXNJbml0aWFsQ29ubmVjdGVkID0gZmFsc2U7XG4gIF9zZXF1ZW5jZUFja1Rhc2s7XG4gIF9sYXN0TWVzc2FnZVJlY2VpdmVkID0gRGF0ZS5ub3coKTtcbiAgY29uc3RydWN0b3IoY3JlZGVudGlhbCwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgY3JlZGVudGlhbCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhpcy5fY3JlZGVudGlhbCA9IHsgZ2V0Q2xpZW50QWNjZXNzVXJsOiBjcmVkZW50aWFsIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NyZWRlbnRpYWwgPSBjcmVkZW50aWFsO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHRoaXMuX2J1aWxkRGVmYXVsdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5fbWVzc2FnZVJldHJ5UG9saWN5ID0gbmV3IFJldHJ5UG9saWN5KHRoaXMuX29wdGlvbnMubWVzc2FnZVJldHJ5T3B0aW9ucyk7XG4gICAgdGhpcy5fcmVjb25uZWN0UmV0cnlQb2xpY3kgPSBuZXcgUmV0cnlQb2xpY3kodGhpcy5fb3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMpO1xuICAgIHRoaXMuX3Byb3RvY29sID0gdGhpcy5fb3B0aW9ucy5wcm90b2NvbDtcbiAgICB0aGlzLl9ncm91cE1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgdGhpcy5fYWNrTWFuYWdlciA9IG5ldyBBY2tNYW5hZ2VyKCk7XG4gICAgdGhpcy5faW52b2NhdGlvbk1hbmFnZXIgPSBuZXcgSW52b2NhdGlvbk1hbmFnZXIoKTtcbiAgICB0aGlzLl9zZXF1ZW5jZUlkID0gbmV3IFNlcXVlbmNlSWQoKTtcbiAgICB0aGlzLl9rZWVwQWxpdmVUaW1lb3V0SW5NcyA9IHRoaXMuX29wdGlvbnMua2VlcEFsaXZlVGltZW91dEluTXMgPz8gMTJlNDtcbiAgICB0aGlzLl9rZWVwQWxpdmVJbnRlcnZhbEluTXMgPSB0aGlzLl9vcHRpb25zLmtlZXBBbGl2ZUludGVydmFsSW5NcyA/PyAyZTQ7XG4gICAgdGhpcy5fc3RhdGUgPSBcIlN0b3BwZWRcIiAvKiBTdG9wcGVkICovO1xuICB9XG4gIC8qKlxuICAgKiBTdGFydCB0byBzdGFydCB0byB0aGUgc2VydmljZS5cbiAgICogQHBhcmFtIGFib3J0U2lnbmFsIC0gVGhlIGFib3J0IHNpZ25hbFxuICAgKi9cbiAgYXN5bmMgc3RhcnQob3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9pc1N0b3BwaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBzdGFydCBhIGNsaWVudCBkdXJpbmcgc3RvcHBpbmdcIik7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gXCJTdG9wcGVkXCIgLyogU3RvcHBlZCAqLykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2xpZW50IGNhbiBiZSBvbmx5IHN0YXJ0ZWQgd2hlbiBpdCdzIFN0b3BwZWRcIik7XG4gICAgfVxuICAgIGxldCBhYm9ydFNpZ25hbDtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgYWJvcnRTaWduYWwgPSBvcHRpb25zLmFib3J0U2lnbmFsO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3BpbmdLZWVwYWxpdmVUYXNrICYmIHRoaXMuX2tlZXBBbGl2ZUludGVydmFsSW5NcyA+IDApIHtcbiAgICAgIHRoaXMuX3BpbmdLZWVwYWxpdmVUYXNrID0gdGhpcy5fZ2V0UGluZ0tlZXBhbGl2ZVRhc2soKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl90aW1lb3V0TW9uaXRvclRhc2sgJiYgdGhpcy5fa2VlcEFsaXZlVGltZW91dEluTXMgPiAwKSB7XG4gICAgICB0aGlzLl90aW1lb3V0TW9uaXRvclRhc2sgPSB0aGlzLl9nZXRUaW1lb3V0TW9uaXRvclRhc2soKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX3N0YXJ0Q29yZShhYm9ydFNpZ25hbCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9jaGFuZ2VTdGF0ZShcIlN0b3BwZWRcIiAvKiBTdG9wcGVkICovKTtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VLZWVwYWxpdmVUYXNrcygpO1xuICAgICAgdGhpcy5faXNTdG9wcGluZyA9IGZhbHNlO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxuICBhc3luYyBfc3RhcnRGcm9tUmVzdGFydGluZyhhYm9ydFNpZ25hbCkge1xuICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNsaWVudCBjYW4gYmUgb25seSByZXN0YXJ0ZWQgd2hlbiBpdCdzIERpc2Nvbm5lY3RlZFwiKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxvZ2dlci52ZXJib3NlKFwiU3RhcmluZyByZWNvbm5lY3RpbmcuXCIpO1xuICAgICAgYXdhaXQgdGhpcy5fc3RhcnRDb3JlKGFib3J0U2lnbmFsKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2NoYW5nZVN0YXRlKFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovKTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX3N0YXJ0Q29yZShhYm9ydFNpZ25hbCkge1xuICAgIHRoaXMuX2NoYW5nZVN0YXRlKFwiQ29ubmVjdGluZ1wiIC8qIENvbm5lY3RpbmcgKi8pO1xuICAgIGxvZ2dlci5pbmZvKFwiU3RhcmluZyBhIG5ldyBjb25uZWN0aW9uXCIpO1xuICAgIHRoaXMuX3NlcXVlbmNlSWQucmVzZXQoKTtcbiAgICB0aGlzLl9pc0luaXRpYWxDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9sYXN0Q2xvc2VFdmVudCA9IHZvaWQgMDtcbiAgICB0aGlzLl9sYXN0RGlzY29ubmVjdGVkTWVzc2FnZSA9IHZvaWQgMDtcbiAgICB0aGlzLl9jb25uZWN0aW9uSWQgPSB2b2lkIDA7XG4gICAgdGhpcy5fcmVjb25uZWN0aW9uVG9rZW4gPSB2b2lkIDA7XG4gICAgdGhpcy5fdXJpID0gdm9pZCAwO1xuICAgIGlmICh0eXBlb2YgdGhpcy5fY3JlZGVudGlhbC5nZXRDbGllbnRBY2Nlc3NVcmwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMuX3VyaSA9IHRoaXMuX2NyZWRlbnRpYWwuZ2V0Q2xpZW50QWNjZXNzVXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91cmkgPSBhd2FpdCB0aGlzLl9jcmVkZW50aWFsLmdldENsaWVudEFjY2Vzc1VybCh7XG4gICAgICAgIGFib3J0U2lnbmFsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLl91cmkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRoZSBjbGllbnRBY2Nlc3NVcmwgbXVzdCBiZSBhIHN0cmluZyBidXQgY3VycmVudGx5IGl0J3MgJHt0eXBlb2YgdGhpcy5fdXJpfWBcbiAgICAgICk7XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX2Nvbm5lY3RDb3JlKHRoaXMuX3VyaSk7XG4gIH1cbiAgLyoqXG4gICAqIFN0b3AgdGhlIGNsaWVudC5cbiAgICovXG4gIHN0b3AoKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlID09PSBcIlN0b3BwZWRcIiAvKiBTdG9wcGVkICovIHx8IHRoaXMuX2lzU3RvcHBpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faXNTdG9wcGluZyA9IHRydWU7XG4gICAgaWYgKHRoaXMuX3dzQ2xpZW50ICYmIHRoaXMuX3dzQ2xpZW50LmlzT3BlbigpKSB7XG4gICAgICB0aGlzLl93c0NsaWVudC5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pc1N0b3BwaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX2Rpc3Bvc2VLZWVwYWxpdmVUYXNrcygpO1xuICB9XG4gIF9kaXNwb3NlS2VlcGFsaXZlVGFza3MoKSB7XG4gICAgaWYgKHRoaXMuX3BpbmdLZWVwYWxpdmVUYXNrKSB7XG4gICAgICB0aGlzLl9waW5nS2VlcGFsaXZlVGFzay5hYm9ydCgpO1xuICAgICAgdGhpcy5fcGluZ0tlZXBhbGl2ZVRhc2sgPSB2b2lkIDA7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aW1lb3V0TW9uaXRvclRhc2spIHtcbiAgICAgIHRoaXMuX3RpbWVvdXRNb25pdG9yVGFzay5hYm9ydCgpO1xuICAgICAgdGhpcy5fdGltZW91dE1vbml0b3JUYXNrID0gdm9pZCAwO1xuICAgIH1cbiAgfVxuICBvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbiAgb2ZmKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX2VtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxuICBfZW1pdEV2ZW50KGV2ZW50LCBhcmdzKSB7XG4gICAgdGhpcy5fZW1pdHRlci5lbWl0KGV2ZW50LCBhcmdzKTtcbiAgfVxuICAvKipcbiAgICogU2VuZCBjdXN0b20gZXZlbnQgdG8gc2VydmVyLlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIC0gVGhlIGV2ZW50IG5hbWVcbiAgICogQHBhcmFtIGNvbnRlbnQgLSBUaGUgZGF0YSBjb250ZW50XG4gICAqIEBwYXJhbSBkYXRhVHlwZSAtIFRoZSBkYXRhIHR5cGVcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9uc1xuICAgKiBAcGFyYW0gYWJvcnRTaWduYWwgLSBUaGUgYWJvcnQgc2lnbmFsXG4gICAqL1xuICBhc3luYyBzZW5kRXZlbnQoZXZlbnROYW1lLCBjb250ZW50LCBkYXRhVHlwZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9vcGVyYXRpb25FeGVjdXRlV2l0aFJldHJ5KFxuICAgICAgKCkgPT4gdGhpcy5fc2VuZEV2ZW50QXR0ZW1wdChldmVudE5hbWUsIGNvbnRlbnQsIGRhdGFUeXBlLCBvcHRpb25zKSxcbiAgICAgIG9wdGlvbnM/LmFib3J0U2lnbmFsXG4gICAgKTtcbiAgfVxuICBhc3luYyBfc2VuZEV2ZW50QXR0ZW1wdChldmVudE5hbWUsIGNvbnRlbnQsIGRhdGFUeXBlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZmlyZUFuZEZvcmdldCA9IG9wdGlvbnM/LmZpcmVBbmRGb3JnZXQgPz8gZmFsc2U7XG4gICAgaWYgKCFmaXJlQW5kRm9yZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VuZE1lc3NhZ2VXaXRoQWNrSWQoXG4gICAgICAgIChpZCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBraW5kOiBcInNlbmRFdmVudFwiLFxuICAgICAgICAgICAgZGF0YVR5cGUsXG4gICAgICAgICAgICBkYXRhOiBjb250ZW50LFxuICAgICAgICAgICAgYWNrSWQ6IGlkLFxuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50TmFtZVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM/LmFja0lkLFxuICAgICAgICBvcHRpb25zPy5hYm9ydFNpZ25hbFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIGtpbmQ6IFwic2VuZEV2ZW50XCIsXG4gICAgICBkYXRhVHlwZSxcbiAgICAgIGRhdGE6IGNvbnRlbnQsXG4gICAgICBldmVudDogZXZlbnROYW1lXG4gICAgfTtcbiAgICBhd2FpdCB0aGlzLl9zZW5kTWVzc2FnZShtZXNzYWdlLCBvcHRpb25zPy5hYm9ydFNpZ25hbCk7XG4gICAgcmV0dXJuIHsgaXNEdXBsaWNhdGVkOiBmYWxzZSB9O1xuICB9XG4gIGFzeW5jIF9pbnZva2VFdmVudEF0dGVtcHQoZXZlbnROYW1lLCBjb250ZW50LCBkYXRhVHlwZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGludm9rZU9wdGlvbnMgPSBvcHRpb25zID8/IHt9O1xuICAgIGNvbnN0IHsgaW52b2NhdGlvbklkLCB3YWl0IH0gPSB0aGlzLl9pbnZvY2F0aW9uTWFuYWdlci5yZWdpc3Rlckludm9jYXRpb24oXG4gICAgICBpbnZva2VPcHRpb25zLmludm9jYXRpb25JZFxuICAgICk7XG4gICAgY29uc3QgaW52b2tlTWVzc2FnZSA9IHtcbiAgICAgIGtpbmQ6IFwiaW52b2tlXCIsXG4gICAgICBpbnZvY2F0aW9uSWQsXG4gICAgICB0YXJnZXQ6IFwiZXZlbnRcIixcbiAgICAgIGV2ZW50OiBldmVudE5hbWUsXG4gICAgICBkYXRhVHlwZSxcbiAgICAgIGRhdGE6IGNvbnRlbnRcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlUHJvbWlzZSA9IHdhaXQoe1xuICAgICAgYWJvcnRTaWduYWw6IGludm9rZU9wdGlvbnMuYWJvcnRTaWduYWxcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5fc2VuZE1lc3NhZ2UoaW52b2tlTWVzc2FnZSwgaW52b2tlT3B0aW9ucy5hYm9ydFNpZ25hbCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBpbnZvY2F0aW9uRXJyb3IgPSBlcnIgaW5zdGFuY2VvZiBJbnZvY2F0aW9uRXJyb3IgPyBlcnIgOiBuZXcgSW52b2NhdGlvbkVycm9yKFxuICAgICAgICBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogXCJGYWlsZWQgdG8gc2VuZCBpbnZvY2F0aW9uIG1lc3NhZ2UuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBpbnZvY2F0aW9uSWRcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuX2ludm9jYXRpb25NYW5hZ2VyLnJlamVjdEludm9jYXRpb24oaW52b2NhdGlvbklkLCBpbnZvY2F0aW9uRXJyb3IpO1xuICAgICAgdm9pZCByZXNwb25zZVByb21pc2UuY2F0Y2goKCkgPT4ge1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBpbnZvY2F0aW9uRXJyb3I7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlUHJvbWlzZTtcbiAgICAgIHJldHVybiB0aGlzLl9tYXBJbnZva2VSZXNwb25zZShyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBzaG91bGRDYW5jZWwgPSBlcnIgaW5zdGFuY2VvZiBJbnZvY2F0aW9uRXJyb3IgJiYgZXJyLmVycm9yRGV0YWlsID09IG51bGwgfHwgaW52b2tlT3B0aW9ucy5hYm9ydFNpZ25hbD8uYWJvcnRlZCA9PT0gdHJ1ZTtcbiAgICAgIGlmIChzaG91bGRDYW5jZWwpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5fc2VuZENhbmNlbEludm9jYXRpb24oaW52b2NhdGlvbklkKS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9pbnZvY2F0aW9uTWFuYWdlci5kaXNjYXJkKGludm9jYXRpb25JZCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBJbnZva2UgYW4gdXBzdHJlYW0gZXZlbnQgYW5kIHdhaXQgZm9yIHRoZSBjb3JyZWxhdGVkIHJlc3BvbnNlLlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIC0gVGhlIGV2ZW50IG5hbWVcbiAgICogQHBhcmFtIGNvbnRlbnQgLSBUaGUgcGF5bG9hZFxuICAgKiBAcGFyYW0gZGF0YVR5cGUgLSBUaGUgcGF5bG9hZCB0eXBlXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gSW52b2tlIG9wdGlvbnNcbiAgICovXG4gIGFzeW5jIGludm9rZUV2ZW50KGV2ZW50TmFtZSwgY29udGVudCwgZGF0YVR5cGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uRXhlY3V0ZVdpdGhSZXRyeShcbiAgICAgICgpID0+IHRoaXMuX2ludm9rZUV2ZW50QXR0ZW1wdChldmVudE5hbWUsIGNvbnRlbnQsIGRhdGFUeXBlLCBvcHRpb25zKSxcbiAgICAgIG9wdGlvbnM/LmFib3J0U2lnbmFsXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogSm9pbiB0aGUgY2xpZW50IHRvIGdyb3VwXG4gICAqIEBwYXJhbSBncm91cE5hbWUgLSBUaGUgZ3JvdXAgbmFtZVxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBqb2luIGdyb3VwIG9wdGlvbnNcbiAgICovXG4gIGFzeW5jIGpvaW5Hcm91cChncm91cE5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uRXhlY3V0ZVdpdGhSZXRyeShcbiAgICAgICgpID0+IHRoaXMuX2pvaW5Hcm91cEF0dGVtcHQoZ3JvdXBOYW1lLCBvcHRpb25zKSxcbiAgICAgIG9wdGlvbnM/LmFib3J0U2lnbmFsXG4gICAgKTtcbiAgfVxuICBhc3luYyBfam9pbkdyb3VwQXR0ZW1wdChncm91cE5hbWUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBncm91cCA9IHRoaXMuX2dldE9yQWRkR3JvdXAoZ3JvdXBOYW1lKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9qb2luR3JvdXBDb3JlKGdyb3VwTmFtZSwgb3B0aW9ucyk7XG4gICAgZ3JvdXAuaXNKb2luZWQgPSB0cnVlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgYXN5bmMgX2pvaW5Hcm91cENvcmUoZ3JvdXBOYW1lLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbmRNZXNzYWdlV2l0aEFja0lkKFxuICAgICAgKGlkKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZ3JvdXA6IGdyb3VwTmFtZSxcbiAgICAgICAgICBhY2tJZDogaWQsXG4gICAgICAgICAga2luZDogXCJqb2luR3JvdXBcIlxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIG9wdGlvbnM/LmFja0lkLFxuICAgICAgb3B0aW9ucz8uYWJvcnRTaWduYWxcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBMZWF2ZSB0aGUgY2xpZW50IGZyb20gZ3JvdXBcbiAgICogQHBhcmFtIGdyb3VwTmFtZSAtIFRoZSBncm91cCBuYW1lXG4gICAqIEBwYXJhbSBhY2tJZCAtIFRoZSBvcHRpb25hbCBhY2tJZC4gSWYgbm90IHNwZWNpZmllZCwgY2xpZW50IHdpbGwgZ2VuZXJhdGUgb25lLlxuICAgKiBAcGFyYW0gYWJvcnRTaWduYWwgLSBUaGUgYWJvcnQgc2lnbmFsXG4gICAqL1xuICBhc3luYyBsZWF2ZUdyb3VwKGdyb3VwTmFtZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9vcGVyYXRpb25FeGVjdXRlV2l0aFJldHJ5KFxuICAgICAgKCkgPT4gdGhpcy5fbGVhdmVHcm91cEF0dGVtcHQoZ3JvdXBOYW1lLCBvcHRpb25zKSxcbiAgICAgIG9wdGlvbnM/LmFib3J0U2lnbmFsXG4gICAgKTtcbiAgfVxuICBhc3luYyBfbGVhdmVHcm91cEF0dGVtcHQoZ3JvdXBOYW1lLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLl9nZXRPckFkZEdyb3VwKGdyb3VwTmFtZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fc2VuZE1lc3NhZ2VXaXRoQWNrSWQoXG4gICAgICAoaWQpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBncm91cDogZ3JvdXBOYW1lLFxuICAgICAgICAgIGFja0lkOiBpZCxcbiAgICAgICAgICBraW5kOiBcImxlYXZlR3JvdXBcIlxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIG9wdGlvbnM/LmFja0lkLFxuICAgICAgb3B0aW9ucz8uYWJvcnRTaWduYWxcbiAgICApO1xuICAgIGdyb3VwLmlzSm9pbmVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICAvKipcbiAgICogU2VuZCBtZXNzYWdlIHRvIGdyb3VwLlxuICAgKiBAcGFyYW0gZ3JvdXBOYW1lIC0gVGhlIGdyb3VwIG5hbWVcbiAgICogQHBhcmFtIGNvbnRlbnQgLSBUaGUgZGF0YSBjb250ZW50XG4gICAqIEBwYXJhbSBkYXRhVHlwZSAtIFRoZSBkYXRhIHR5cGVcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9uc1xuICAgKiBAcGFyYW0gYWJvcnRTaWduYWwgLSBUaGUgYWJvcnQgc2lnbmFsXG4gICAqL1xuICBhc3luYyBzZW5kVG9Hcm91cChncm91cE5hbWUsIGNvbnRlbnQsIGRhdGFUeXBlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZXJhdGlvbkV4ZWN1dGVXaXRoUmV0cnkoXG4gICAgICAoKSA9PiB0aGlzLl9zZW5kVG9Hcm91cEF0dGVtcHQoZ3JvdXBOYW1lLCBjb250ZW50LCBkYXRhVHlwZSwgb3B0aW9ucyksXG4gICAgICBvcHRpb25zPy5hYm9ydFNpZ25hbFxuICAgICk7XG4gIH1cbiAgYXN5bmMgX3NlbmRUb0dyb3VwQXR0ZW1wdChncm91cE5hbWUsIGNvbnRlbnQsIGRhdGFUeXBlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZmlyZUFuZEZvcmdldCA9IG9wdGlvbnM/LmZpcmVBbmRGb3JnZXQgPz8gZmFsc2U7XG4gICAgY29uc3Qgbm9FY2hvID0gb3B0aW9ucz8ubm9FY2hvID8/IGZhbHNlO1xuICAgIGlmICghZmlyZUFuZEZvcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbmRNZXNzYWdlV2l0aEFja0lkKFxuICAgICAgICAoaWQpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2luZDogXCJzZW5kVG9Hcm91cFwiLFxuICAgICAgICAgICAgZ3JvdXA6IGdyb3VwTmFtZSxcbiAgICAgICAgICAgIGRhdGFUeXBlLFxuICAgICAgICAgICAgZGF0YTogY29udGVudCxcbiAgICAgICAgICAgIGFja0lkOiBpZCxcbiAgICAgICAgICAgIG5vRWNob1xuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM/LmFja0lkLFxuICAgICAgICBvcHRpb25zPy5hYm9ydFNpZ25hbFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIGtpbmQ6IFwic2VuZFRvR3JvdXBcIixcbiAgICAgIGdyb3VwOiBncm91cE5hbWUsXG4gICAgICBkYXRhVHlwZSxcbiAgICAgIGRhdGE6IGNvbnRlbnQsXG4gICAgICBub0VjaG9cbiAgICB9O1xuICAgIGF3YWl0IHRoaXMuX3NlbmRNZXNzYWdlKG1lc3NhZ2UsIG9wdGlvbnM/LmFib3J0U2lnbmFsKTtcbiAgICByZXR1cm4geyBpc0R1cGxpY2F0ZWQ6IGZhbHNlIH07XG4gIH1cbiAgX2dldFdlYlNvY2tldENsaWVudEZhY3RvcnkoKSB7XG4gICAgcmV0dXJuIG5ldyBXZWJTb2NrZXRDbGllbnRGYWN0b3J5KCk7XG4gIH1cbiAgYXN5bmMgX3RyeVNlbmRTZXF1ZW5jZUFjaygpIHtcbiAgICBpZiAoIXRoaXMuX3Byb3RvY29sLmlzUmVsaWFibGVTdWJQcm90b2NvbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBbaXNVcGRhdGVkLCBzZXFJZF0gPSB0aGlzLl9zZXF1ZW5jZUlkLnRyeUdldFNlcXVlbmNlSWQoKTtcbiAgICBpZiAoaXNVcGRhdGVkICYmIHNlcUlkICE9PSBudWxsICYmIHNlcUlkICE9PSB2b2lkIDApIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAgIGtpbmQ6IFwic2VxdWVuY2VBY2tcIixcbiAgICAgICAgc2VxdWVuY2VJZDogc2VxSWRcbiAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLl9zZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICB0aGlzLl9zZXF1ZW5jZUlkLnRyeVVwZGF0ZShzZXFJZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIF9jb25uZWN0Q29yZSh1cmkpIHtcbiAgICBpZiAodGhpcy5faXNTdG9wcGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3Qgc3RhcnQgYSBjbGllbnQgZHVyaW5nIHN0b3BwaW5nXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5fd3NDbGllbnQgPSB0aGlzLl9nZXRXZWJTb2NrZXRDbGllbnRGYWN0b3J5KCkuY3JlYXRlKFxuICAgICAgICB1cmksXG4gICAgICAgIHRoaXMuX3Byb3RvY29sLm5hbWVcbiAgICAgICk7XG4gICAgICBjbGllbnQub25vcGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU3RvcHBpbmcpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFRoZSBjbGllbnQgaXMgc3RvcHBlZGApKTtcbiAgICAgICAgfVxuICAgICAgICBsb2dnZXIudmVyYm9zZShcIldlYlNvY2tldCBjb25uZWN0aW9uIGhhcyBvcGVuZWRcIik7XG4gICAgICAgIHRoaXMuX2xhc3RNZXNzYWdlUmVjZWl2ZWQgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VTdGF0ZShcIkNvbm5lY3RlZFwiIC8qIENvbm5lY3RlZCAqLyk7XG4gICAgICAgIGlmICh0aGlzLl9wcm90b2NvbC5pc1JlbGlhYmxlU3ViUHJvdG9jb2wpIHtcbiAgICAgICAgICBpZiAodGhpcy5fc2VxdWVuY2VBY2tUYXNrICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlcXVlbmNlQWNrVGFzay5hYm9ydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9zZXF1ZW5jZUFja1Rhc2sgPSBuZXcgQWJvcnRhYmxlVGFzayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl90cnlTZW5kU2VxdWVuY2VBY2soKTtcbiAgICAgICAgICB9LCAxZTMpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgICAgY2xpZW50Lm9uZXJyb3IoKGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3NlcXVlbmNlQWNrVGFzayAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5fc2VxdWVuY2VBY2tUYXNrLmFib3J0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfSk7XG4gICAgICBjbGllbnQub25jbG9zZSgoY29kZSwgcmVhc29uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gXCJDb25uZWN0ZWRcIiAvKiBDb25uZWN0ZWQgKi8pIHtcbiAgICAgICAgICBsb2dnZXIudmVyYm9zZShcIldlYlNvY2tldCBjbG9zZWQgYWZ0ZXIgb3BlblwiKTtcbiAgICAgICAgICBpZiAodGhpcy5fc2VxdWVuY2VBY2tUYXNrICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlcXVlbmNlQWNrVGFzay5hYm9ydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2dnZXIuaW5mbyhgV2ViU29ja2V0IGNvbm5lY3Rpb24gY2xvc2VkLiBDb2RlOiAke2NvZGV9LCBSZWFzb246ICR7cmVhc29ufWApO1xuICAgICAgICAgIHRoaXMuX2xhc3RDbG9zZUV2ZW50ID0geyBjb2RlLCByZWFzb24gfTtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVDb25uZWN0aW9uQ2xvc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2dnZXIudmVyYm9zZShcIldlYlNvY2tldCBjbG9zZWQgYmVmb3JlIG9wZW5cIik7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgRmFpbGVkIHRvIHN0YXJ0IFdlYlNvY2tldDogJHtjb2RlfWApKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjbGllbnQub25tZXNzYWdlKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZUFja01lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzRHVwbGljYXRlZCA9IG1lc3NhZ2UuZXJyb3IgIT0gbnVsbCAmJiBtZXNzYWdlLmVycm9yLm5hbWUgPT09IFwiRHVwbGljYXRlXCI7XG4gICAgICAgICAgaWYgKG1lc3NhZ2Uuc3VjY2VzcyB8fCBpc0R1cGxpY2F0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fja01hbmFnZXIucmVzb2x2ZUFjayhtZXNzYWdlLmFja0lkLCB7XG4gICAgICAgICAgICAgIGFja0lkOiBtZXNzYWdlLmFja0lkLFxuICAgICAgICAgICAgICBpc0R1cGxpY2F0ZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9hY2tNYW5hZ2VyLnJlamVjdEFjayhcbiAgICAgICAgICAgICAgbWVzc2FnZS5hY2tJZCxcbiAgICAgICAgICAgICAgbmV3IFNlbmRNZXNzYWdlRXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBtZXNzYWdlLlwiLCB7XG4gICAgICAgICAgICAgICAgYWNrSWQ6IG1lc3NhZ2UuYWNrSWQsXG4gICAgICAgICAgICAgICAgZXJyb3JEZXRhaWw6IG1lc3NhZ2UuZXJyb3JcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVDb25uZWN0ZWRNZXNzYWdlID0gYXN5bmMgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uSWQgPSBtZXNzYWdlLmNvbm5lY3Rpb25JZDtcbiAgICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25Ub2tlbiA9IG1lc3NhZ2UucmVjb25uZWN0aW9uVG9rZW47XG4gICAgICAgICAgaWYgKCF0aGlzLl9pc0luaXRpYWxDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzSW5pdGlhbENvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5hdXRvUmVqb2luR3JvdXBzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGdyb3VwUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgICAgdGhpcy5fZ3JvdXBNYXAuZm9yRWFjaCgoZykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChnLmlzSm9pbmVkKSB7XG4gICAgICAgICAgICAgICAgICBncm91cFByb21pc2VzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2pvaW5Hcm91cENvcmUoZy5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NhZmVFbWl0UmVqb2luR3JvdXBGYWlsZWQoZy5uYW1lLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkoKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChncm91cFByb21pc2VzKS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fc2FmZUVtaXRDb25uZWN0ZWQobWVzc2FnZS5jb25uZWN0aW9uSWQsIG1lc3NhZ2UudXNlcklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZURpc2Nvbm5lY3RlZE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgIHRoaXMuX2xhc3REaXNjb25uZWN0ZWRNZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlR3JvdXBEYXRhTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgaWYgKG1lc3NhZ2Uuc2VxdWVuY2VJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gdGhpcy5fc2VxdWVuY2VJZC50cnlVcGRhdGUobWVzc2FnZS5zZXF1ZW5jZUlkKTtcbiAgICAgICAgICAgIGlmIChkaWZmID09PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWZmID4gdGhpcy5fcXVpY2tTZXF1ZW5jZUFja0RpZmYpIHtcbiAgICAgICAgICAgICAgdGhpcy5fdHJ5U2VuZFNlcXVlbmNlQWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3NhZmVFbWl0R3JvdXBNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVTZXJ2ZXJEYXRhTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgaWYgKG1lc3NhZ2Uuc2VxdWVuY2VJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gdGhpcy5fc2VxdWVuY2VJZC50cnlVcGRhdGUobWVzc2FnZS5zZXF1ZW5jZUlkKTtcbiAgICAgICAgICAgIGlmIChkaWZmID09PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWZmID4gdGhpcy5fcXVpY2tTZXF1ZW5jZUFja0RpZmYpIHtcbiAgICAgICAgICAgICAgdGhpcy5fdHJ5U2VuZFNlcXVlbmNlQWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3NhZmVFbWl0U2VydmVyTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlSW52b2tlUmVzcG9uc2VNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMuX2ludm9jYXRpb25NYW5hZ2VyLnJlc29sdmVJbnZvY2F0aW9uKG1lc3NhZ2UpO1xuICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIGxvZ2dlci52ZXJib3NlKFxuICAgICAgICAgICAgICBgUmVjZWl2ZWQgaW52b2tlUmVzcG9uc2UgZm9yIHVua25vd24gaW52b2NhdGlvbklkOiAke21lc3NhZ2UuaW52b2NhdGlvbklkfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9sYXN0TWVzc2FnZVJlY2VpdmVkID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IG1lc3NhZ2VzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBjb252ZXJ0ZWREYXRhO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBjb252ZXJ0ZWREYXRhID0gQnVmZmVyLmNvbmNhdChkYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udmVydGVkRGF0YSA9IGRhdGE7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1lc3NhZ2VzID0gdGhpcy5fcHJvdG9jb2wucGFyc2VNZXNzYWdlcyhjb252ZXJ0ZWREYXRhKTtcbiAgICAgICAgICBpZiAobWVzc2FnZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZ2dlci53YXJuaW5nKFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcGFyc2luZyB0aGUgbWVzc2FnZSBmcm9tIHNlcnZpY2VcIiwgZXJyKTtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1lc3NhZ2VzKSkge1xuICAgICAgICAgIG1lc3NhZ2VzID0gW21lc3NhZ2VzXTtcbiAgICAgICAgfVxuICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN3aXRjaCAobWVzc2FnZS5raW5kKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJwb25nXCI6IHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXNlIFwiYWNrXCI6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVBY2tNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhc2UgXCJjb25uZWN0ZWRcIjoge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNvbm5lY3RlZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSBcImRpc2Nvbm5lY3RlZFwiOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlRGlzY29ubmVjdGVkTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXNlIFwiZ3JvdXBEYXRhXCI6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVHcm91cERhdGFNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhc2UgXCJzZXJ2ZXJEYXRhXCI6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVTZXJ2ZXJEYXRhTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXNlIFwiaW52b2tlUmVzcG9uc2VcIjoge1xuICAgICAgICAgICAgICAgIGhhbmRsZUludm9rZVJlc3BvbnNlTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm5pbmcoXG4gICAgICAgICAgICAgIGBBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBoYW5kbGluZyB0aGUgbWVzc2FnZSB3aXRoIGtpbmQ6ICR7bWVzc2FnZS5raW5kfSBmcm9tIHNlcnZpY2VgLFxuICAgICAgICAgICAgICBlcnJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIF9oYW5kbGVDb25uZWN0aW9uQ2xvc2VBbmROb1JlY292ZXJ5KCkge1xuICAgIHRoaXMuX3N0YXRlID0gXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi87XG4gICAgdGhpcy5fc2FmZUVtaXREaXNjb25uZWN0ZWQodGhpcy5fY29ubmVjdGlvbklkLCB0aGlzLl9sYXN0RGlzY29ubmVjdGVkTWVzc2FnZSk7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuYXV0b1JlY29ubmVjdCkge1xuICAgICAgYXdhaXQgdGhpcy5fYXV0b1JlY29ubmVjdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLl9oYW5kbGVDb25uZWN0aW9uU3RvcHBlZCgpO1xuICAgIH1cbiAgfVxuICBhc3luYyBfYXV0b1JlY29ubmVjdCgpIHtcbiAgICBsZXQgaXNTdWNjZXNzID0gZmFsc2U7XG4gICAgbGV0IGF0dGVtcHQgPSAwO1xuICAgIHRyeSB7XG4gICAgICB3aGlsZSAoIXRoaXMuX2lzU3RvcHBpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9zdGFydEZyb21SZXN0YXJ0aW5nKCk7XG4gICAgICAgICAgaXNTdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nZ2VyLndhcm5pbmcoXCJBbiBhdHRlbXB0IHRvIHJlY29ubmVjdCBjb25uZWN0aW9uIGZhaWxlZC5cIiwgZXJyKTtcbiAgICAgICAgICBhdHRlbXB0Kys7XG4gICAgICAgICAgY29uc3QgZGVsYXlJbk1zID0gdGhpcy5fcmVjb25uZWN0UmV0cnlQb2xpY3kubmV4dFJldHJ5RGVsYXlJbk1zKGF0dGVtcHQpO1xuICAgICAgICAgIGlmIChkZWxheUluTXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxvZ2dlci52ZXJib3NlKGBEZWxheSB0aW1lIGZvciByZWNvbm5lY3QgYXR0ZW1wdCAke2F0dGVtcHR9OiAke2RlbGF5SW5Nc31gKTtcbiAgICAgICAgICBhd2FpdCBkZWxheShkZWxheUluTXMpLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoIWlzU3VjY2Vzcykge1xuICAgICAgICB0aGlzLl9oYW5kbGVDb25uZWN0aW9uU3RvcHBlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBfaGFuZGxlQ29ubmVjdGlvblN0b3BwZWQoKSB7XG4gICAgdGhpcy5faXNTdG9wcGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX3N0YXRlID0gXCJTdG9wcGVkXCIgLyogU3RvcHBlZCAqLztcbiAgICB0aGlzLl9kaXNwb3NlS2VlcGFsaXZlVGFza3MoKTtcbiAgICB0aGlzLl9zYWZlRW1pdFN0b3BwZWQoKTtcbiAgfVxuICBhc3luYyBfdHJ5U2VuZFBpbmcoKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlICE9PSBcIkNvbm5lY3RlZFwiIC8qIENvbm5lY3RlZCAqLyB8fCAhdGhpcy5fd3NDbGllbnQ/LmlzT3BlbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICBraW5kOiBcInBpbmdcIlxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX3NlbmRNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgbG9nZ2VyLndhcm5pbmcoXCJGYWlsZWQgdG8gc2VuZCBrZWVwYWxpdmUgbWVzc2FnZSB0byB0aGUgc2VydmljZVwiKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX2NoZWNrS2VlcEFsaXZlVGltZW91dCgpIHtcbiAgICBpZiAodGhpcy5fc3RhdGUgIT09IFwiQ29ubmVjdGVkXCIgLyogQ29ubmVjdGVkICovIHx8ICF0aGlzLl93c0NsaWVudD8uaXNPcGVuKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBpZiAobm93IC0gdGhpcy5fbGFzdE1lc3NhZ2VSZWNlaXZlZCA+IHRoaXMuX2tlZXBBbGl2ZVRpbWVvdXRJbk1zKSB7XG4gICAgICBsb2dnZXIud2FybmluZyhcbiAgICAgICAgYE5vIG1lc3NhZ2VzIHJlY2VpdmVkIGZvciAke25vdyAtIHRoaXMuX2xhc3RNZXNzYWdlUmVjZWl2ZWR9IG1zLiBDbG9zaW5nLiBUaGUga2VlcCBhbGl2ZSB0aW1lb3V0IGlzIHNldCB0byAke3RoaXMuX2tlZXBBbGl2ZVRpbWVvdXRJbk1zfSBtcy5gXG4gICAgICApO1xuICAgICAgdGhpcy5fd3NDbGllbnQ/LmNsb3NlKCk7XG4gICAgfVxuICB9XG4gIF9nZXRQaW5nS2VlcGFsaXZlVGFzaygpIHtcbiAgICByZXR1cm4gbmV3IEFib3J0YWJsZVRhc2soYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgdGhpcy5fdHJ5U2VuZFBpbmcoKTtcbiAgICB9LCB0aGlzLl9rZWVwQWxpdmVJbnRlcnZhbEluTXMpO1xuICB9XG4gIF9nZXRUaW1lb3V0TW9uaXRvclRhc2soKSB7XG4gICAgY29uc3QgdGltZW91dCA9IHRoaXMuX2tlZXBBbGl2ZVRpbWVvdXRJbk1zO1xuICAgIGNvbnN0IGNoZWNrSW50ZXJ2YWwgPSBNYXRoLmZsb29yKHRpbWVvdXQgLyAzKTtcbiAgICByZXR1cm4gbmV3IEFib3J0YWJsZVRhc2soYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgdGhpcy5fY2hlY2tLZWVwQWxpdmVUaW1lb3V0KCk7XG4gICAgfSwgY2hlY2tJbnRlcnZhbCk7XG4gIH1cbiAgYXN5bmMgX3NlbmRNZXNzYWdlKG1lc3NhZ2UsIGFib3J0U2lnbmFsKSB7XG4gICAgaWYgKCF0aGlzLl93c0NsaWVudCB8fCAhdGhpcy5fd3NDbGllbnQuaXNPcGVuKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBjb25uZWN0aW9uIGlzIG5vdCBjb25uZWN0ZWQuXCIpO1xuICAgIH1cbiAgICBjb25zdCBwYXlsb2FkID0gdGhpcy5fcHJvdG9jb2wud3JpdGVNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIGF3YWl0IHRoaXMuX3dzQ2xpZW50LnNlbmQocGF5bG9hZCwgYWJvcnRTaWduYWwpO1xuICB9XG4gIGFzeW5jIF9zZW5kTWVzc2FnZVdpdGhBY2tJZChtZXNzYWdlUHJvdmlkZXIsIGFja0lkLCBhYm9ydFNpZ25hbCkge1xuICAgIGNvbnN0IHsgYWNrSWQ6IHJlc29sdmVkQWNrSWQsIHdhaXQgfSA9IHRoaXMuX2Fja01hbmFnZXIucmVnaXN0ZXJBY2soYWNrSWQpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlUHJvdmlkZXIocmVzb2x2ZWRBY2tJZCk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX3NlbmRNZXNzYWdlKG1lc3NhZ2UsIGFib3J0U2lnbmFsKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5fYWNrTWFuYWdlci5kaXNjYXJkKHJlc29sdmVkQWNrSWQpO1xuICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IFwiXCI7XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IFNlbmRNZXNzYWdlRXJyb3IoZXJyb3JNZXNzYWdlLCB7IGFja0lkOiByZXNvbHZlZEFja0lkIH0pO1xuICAgIH1cbiAgICByZXR1cm4gd2FpdChhYm9ydFNpZ25hbCk7XG4gIH1cbiAgYXN5bmMgX2hhbmRsZUNvbm5lY3Rpb25DbG9zZSgpIHtcbiAgICB0aGlzLl9hY2tNYW5hZ2VyLnJlamVjdEFsbCgoYWNrSWQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgU2VuZE1lc3NhZ2VFcnJvcihcbiAgICAgICAgXCJDb25uZWN0aW9uIGlzIGRpc2Nvbm5lY3RlZCBiZWZvcmUgcmVjZWl2ZSBhY2sgZnJvbSB0aGUgc2VydmljZVwiLFxuICAgICAgICB7XG4gICAgICAgICAgYWNrSWRcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgICB0aGlzLl9pbnZvY2F0aW9uTWFuYWdlci5yZWplY3RBbGwoKGludm9jYXRpb25JZCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBJbnZvY2F0aW9uRXJyb3IoXG4gICAgICAgIFwiQ29ubmVjdGlvbiBpcyBkaXNjb25uZWN0ZWQgYmVmb3JlIHJlY2VpdmluZyBpbnZva2UgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmljZVwiLFxuICAgICAgICB7XG4gICAgICAgICAgaW52b2NhdGlvbklkXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuX2lzU3RvcHBpbmcpIHtcbiAgICAgIGxvZ2dlci53YXJuaW5nKFwiVGhlIGNsaWVudCBpcyBzdG9wcGluZyBzdGF0ZS4gU3RvcCByZWNvdmVyeS5cIik7XG4gICAgICB0aGlzLl9oYW5kbGVDb25uZWN0aW9uQ2xvc2VBbmROb1JlY292ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9sYXN0Q2xvc2VFdmVudCAmJiB0aGlzLl9sYXN0Q2xvc2VFdmVudC5jb2RlID09PSAxMDA4KSB7XG4gICAgICBsb2dnZXIud2FybmluZyhcIlRoZSB3ZWJzb2NrZXQgY2xvc2Ugd2l0aCBzdGF0dXMgY29kZSAxMDA4LiBTdG9wIHJlY292ZXJ5LlwiKTtcbiAgICAgIHRoaXMuX2hhbmRsZUNvbm5lY3Rpb25DbG9zZUFuZE5vUmVjb3ZlcnkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9wcm90b2NvbC5pc1JlbGlhYmxlU3ViUHJvdG9jb2wpIHtcbiAgICAgIGxvZ2dlci53YXJuaW5nKFwiVGhlIHByb3RvY29sIGlzIG5vdCByZWxpYWJsZSwgcmVjb3ZlcnkgaXMgbm90IGFwcGxpY2FibGVcIik7XG4gICAgICB0aGlzLl9oYW5kbGVDb25uZWN0aW9uQ2xvc2VBbmROb1JlY292ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlY292ZXJ5VXJpID0gdGhpcy5fYnVpbGRSZWNvdmVyeVVyaSgpO1xuICAgIGlmICghcmVjb3ZlcnlVcmkpIHtcbiAgICAgIGxvZ2dlci53YXJuaW5nKFwiQ29ubmVjdGlvbiBpZCBvciByZWNvbm5lY3Rpb24gdG9rZW4gaXMgbm90IGF2YWlsYWJsZVwiKTtcbiAgICAgIHRoaXMuX2hhbmRsZUNvbm5lY3Rpb25DbG9zZUFuZE5vUmVjb3ZlcnkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHJlY292ZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3N0YXRlID0gXCJSZWNvdmVyaW5nXCIgLyogUmVjb3ZlcmluZyAqLztcbiAgICBjb25zdCBhYm9ydFNpZ25hbCA9IEFib3J0U2lnbmFsLnRpbWVvdXQoMzAgKiAxZTMpO1xuICAgIHRyeSB7XG4gICAgICB3aGlsZSAoIWFib3J0U2lnbmFsLmFib3J0ZWQgfHwgdGhpcy5faXNTdG9wcGluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX2Nvbm5lY3RDb3JlLmNhbGwodGhpcywgcmVjb3ZlcnlVcmkpO1xuICAgICAgICAgIHJlY292ZXJlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICBhd2FpdCBkZWxheSgxZTMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmICghcmVjb3ZlcmVkKSB7XG4gICAgICAgIGxvZ2dlci53YXJuaW5nKFwiUmVjb3ZlcnkgYXR0ZW1wdHMgZmFpbGVkIG1vcmUgdGhlbiAzMCBzZWNvbmRzIG9yIHRoZSBjbGllbnQgaXMgc3RvcHBpbmdcIik7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNvbm5lY3Rpb25DbG9zZUFuZE5vUmVjb3ZlcnkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX3NhZmVFbWl0Q29ubmVjdGVkKGNvbm5lY3Rpb25JZCwgdXNlcklkKSB7XG4gICAgdGhpcy5fZW1pdEV2ZW50KFwiY29ubmVjdGVkXCIsIHtcbiAgICAgIGNvbm5lY3Rpb25JZCxcbiAgICAgIHVzZXJJZFxuICAgIH0pO1xuICB9XG4gIF9zYWZlRW1pdERpc2Nvbm5lY3RlZChjb25uZWN0aW9uSWQsIGxhc3REaXNjb25uZWN0ZWRNZXNzYWdlKSB7XG4gICAgdGhpcy5fZW1pdEV2ZW50KFwiZGlzY29ubmVjdGVkXCIsIHtcbiAgICAgIGNvbm5lY3Rpb25JZCxcbiAgICAgIG1lc3NhZ2U6IGxhc3REaXNjb25uZWN0ZWRNZXNzYWdlXG4gICAgfSk7XG4gIH1cbiAgX3NhZmVFbWl0R3JvdXBNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICB0aGlzLl9lbWl0RXZlbnQoXCJncm91cC1tZXNzYWdlXCIsIHtcbiAgICAgIG1lc3NhZ2VcbiAgICB9KTtcbiAgfVxuICBfc2FmZUVtaXRTZXJ2ZXJNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICB0aGlzLl9lbWl0RXZlbnQoXCJzZXJ2ZXItbWVzc2FnZVwiLCB7XG4gICAgICBtZXNzYWdlXG4gICAgfSk7XG4gIH1cbiAgX3NhZmVFbWl0U3RvcHBlZCgpIHtcbiAgICB0aGlzLl9lbWl0RXZlbnQoXCJzdG9wcGVkXCIsIHt9KTtcbiAgfVxuICBfc2FmZUVtaXRSZWpvaW5Hcm91cEZhaWxlZChncm91cE5hbWUsIGVycikge1xuICAgIHRoaXMuX2VtaXRFdmVudChcInJlam9pbi1ncm91cC1mYWlsZWRcIiwge1xuICAgICAgZ3JvdXA6IGdyb3VwTmFtZSxcbiAgICAgIGVycm9yOiBlcnJcbiAgICB9KTtcbiAgfVxuICBfbWFwSW52b2tlUmVzcG9uc2UobWVzc2FnZSkge1xuICAgIGlmIChtZXNzYWdlLnN1Y2Nlc3MgIT09IHRydWUpIHtcbiAgICAgIGlmIChtZXNzYWdlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgIHRocm93IG5ldyBJbnZvY2F0aW9uRXJyb3IobWVzc2FnZS5lcnJvcj8ubWVzc2FnZSA/PyBcIkludm9jYXRpb24gZmFpbGVkLlwiLCB7XG4gICAgICAgICAgaW52b2NhdGlvbklkOiBtZXNzYWdlLmludm9jYXRpb25JZCxcbiAgICAgICAgICBlcnJvckRldGFpbDogbWVzc2FnZS5lcnJvclxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBJbnZvY2F0aW9uRXJyb3IoXCJVbnN1cHBvcnRlZCBpbnZva2UgcmVzcG9uc2UgZnJhbWUuXCIsIHtcbiAgICAgICAgaW52b2NhdGlvbklkOiBtZXNzYWdlLmludm9jYXRpb25JZFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpbnZvY2F0aW9uSWQ6IG1lc3NhZ2UuaW52b2NhdGlvbklkLFxuICAgICAgZGF0YVR5cGU6IG1lc3NhZ2UuZGF0YVR5cGUsXG4gICAgICBkYXRhOiBtZXNzYWdlLmRhdGFcbiAgICB9O1xuICB9XG4gIGFzeW5jIF9zZW5kQ2FuY2VsSW52b2NhdGlvbihpbnZvY2F0aW9uSWQpIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAga2luZDogXCJjYW5jZWxJbnZvY2F0aW9uXCIsXG4gICAgICBpbnZvY2F0aW9uSWRcbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLl9zZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGxvZ2dlci52ZXJib3NlKGBGYWlsZWQgdG8gc2VuZCBjYW5jZWxJbnZvY2F0aW9uIGZvciAke2ludm9jYXRpb25JZH1gLCBlcnIpO1xuICAgIH1cbiAgfVxuICBfYnVpbGREZWZhdWx0T3B0aW9ucyhjbGllbnRPcHRpb25zKSB7XG4gICAgaWYgKGNsaWVudE9wdGlvbnMuYXV0b1JlY29ubmVjdCA9PSBudWxsKSB7XG4gICAgICBjbGllbnRPcHRpb25zLmF1dG9SZWNvbm5lY3QgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5hdXRvUmVqb2luR3JvdXBzID09IG51bGwpIHtcbiAgICAgIGNsaWVudE9wdGlvbnMuYXV0b1Jlam9pbkdyb3VwcyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLnByb3RvY29sID09IG51bGwpIHtcbiAgICAgIGNsaWVudE9wdGlvbnMucHJvdG9jb2wgPSBXZWJQdWJTdWJKc29uUmVsaWFibGVQcm90b2NvbCgpO1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5rZWVwQWxpdmVUaW1lb3V0SW5NcyA9PSBudWxsKSB7XG4gICAgICBjbGllbnRPcHRpb25zLmtlZXBBbGl2ZVRpbWVvdXRJbk1zID0gMTJlNDtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMua2VlcEFsaXZlVGltZW91dEluTXMgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcImtlZXBBbGl2ZVRpbWVvdXRJbk1zIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDAuXCIpO1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5rZWVwQWxpdmVJbnRlcnZhbEluTXMgPT0gbnVsbCkge1xuICAgICAgY2xpZW50T3B0aW9ucy5rZWVwQWxpdmVJbnRlcnZhbEluTXMgPSAyZTQ7XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLmtlZXBBbGl2ZUludGVydmFsSW5NcyA8IDApIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwia2VlcEFsaXZlSW50ZXJ2YWxJbk1zIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDAuXCIpO1xuICAgIH1cbiAgICB0aGlzLl9idWlsZE1lc3NhZ2VSZXRyeU9wdGlvbnMoY2xpZW50T3B0aW9ucyk7XG4gICAgdGhpcy5fYnVpbGRSZWNvbm5lY3RSZXRyeU9wdGlvbnMoY2xpZW50T3B0aW9ucyk7XG4gICAgcmV0dXJuIGNsaWVudE9wdGlvbnM7XG4gIH1cbiAgX2J1aWxkTWVzc2FnZVJldHJ5T3B0aW9ucyhjbGllbnRPcHRpb25zKSB7XG4gICAgaWYgKCFjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMpIHtcbiAgICAgIGNsaWVudE9wdGlvbnMubWVzc2FnZVJldHJ5T3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5tZXNzYWdlUmV0cnlPcHRpb25zLm1heFJldHJpZXMgPT0gbnVsbCB8fCBjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMubWF4UmV0cmllcyA8IDApIHtcbiAgICAgIGNsaWVudE9wdGlvbnMubWVzc2FnZVJldHJ5T3B0aW9ucy5tYXhSZXRyaWVzID0gMztcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMubWVzc2FnZVJldHJ5T3B0aW9ucy5yZXRyeURlbGF5SW5NcyA9PSBudWxsIHx8IGNsaWVudE9wdGlvbnMubWVzc2FnZVJldHJ5T3B0aW9ucy5yZXRyeURlbGF5SW5NcyA8IDApIHtcbiAgICAgIGNsaWVudE9wdGlvbnMubWVzc2FnZVJldHJ5T3B0aW9ucy5yZXRyeURlbGF5SW5NcyA9IDFlMztcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMubWVzc2FnZVJldHJ5T3B0aW9ucy5tYXhSZXRyeURlbGF5SW5NcyA9PSBudWxsIHx8IGNsaWVudE9wdGlvbnMubWVzc2FnZVJldHJ5T3B0aW9ucy5tYXhSZXRyeURlbGF5SW5NcyA8IDApIHtcbiAgICAgIGNsaWVudE9wdGlvbnMubWVzc2FnZVJldHJ5T3B0aW9ucy5tYXhSZXRyeURlbGF5SW5NcyA9IDNlNDtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMubWVzc2FnZVJldHJ5T3B0aW9ucy5tb2RlID09IG51bGwpIHtcbiAgICAgIGNsaWVudE9wdGlvbnMubWVzc2FnZVJldHJ5T3B0aW9ucy5tb2RlID0gXCJGaXhlZFwiO1xuICAgIH1cbiAgfVxuICBfYnVpbGRSZWNvbm5lY3RSZXRyeU9wdGlvbnMoY2xpZW50T3B0aW9ucykge1xuICAgIGlmICghY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMpIHtcbiAgICAgIGNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zID0ge307XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucy5tYXhSZXRyaWVzID09IG51bGwgfHwgY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMubWF4UmV0cmllcyA8IDApIHtcbiAgICAgIGNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zLm1heFJldHJpZXMgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMucmV0cnlEZWxheUluTXMgPT0gbnVsbCB8fCBjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucy5yZXRyeURlbGF5SW5NcyA8IDApIHtcbiAgICAgIGNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zLnJldHJ5RGVsYXlJbk1zID0gMWUzO1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMubWF4UmV0cnlEZWxheUluTXMgPT0gbnVsbCB8fCBjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucy5tYXhSZXRyeURlbGF5SW5NcyA8IDApIHtcbiAgICAgIGNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zLm1heFJldHJ5RGVsYXlJbk1zID0gM2U0O1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMubW9kZSA9PSBudWxsKSB7XG4gICAgICBjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucy5tb2RlID0gXCJGaXhlZFwiO1xuICAgIH1cbiAgfVxuICBfYnVpbGRSZWNvdmVyeVVyaSgpIHtcbiAgICBpZiAodGhpcy5fY29ubmVjdGlvbklkICYmIHRoaXMuX3JlY29ubmVjdGlvblRva2VuICYmIHRoaXMuX3VyaSkge1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh0aGlzLl91cmkpO1xuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoXCJhd3BzX2Nvbm5lY3Rpb25faWRcIiwgdGhpcy5fY29ubmVjdGlvbklkKTtcbiAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKFwiYXdwc19yZWNvbm5lY3Rpb25fdG9rZW5cIiwgdGhpcy5fcmVjb25uZWN0aW9uVG9rZW4pO1xuICAgICAgcmV0dXJuIHVybC50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBfZ2V0T3JBZGRHcm91cChuYW1lKSB7XG4gICAgaWYgKCF0aGlzLl9ncm91cE1hcC5oYXMobmFtZSkpIHtcbiAgICAgIHRoaXMuX2dyb3VwTWFwLnNldChuYW1lLCBuZXcgV2ViUHViU3ViR3JvdXAobmFtZSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZ3JvdXBNYXAuZ2V0KG5hbWUpO1xuICB9XG4gIF9jaGFuZ2VTdGF0ZShuZXdTdGF0ZSkge1xuICAgIGxvZ2dlci52ZXJib3NlKFxuICAgICAgYFRoZSBjbGllbnQgc3RhdGUgdHJhbnNmZXIgZnJvbSAke3RoaXMuX3N0YXRlLnRvU3RyaW5nKCl9IHRvICR7bmV3U3RhdGUudG9TdHJpbmcoKX1gXG4gICAgKTtcbiAgICB0aGlzLl9zdGF0ZSA9IG5ld1N0YXRlO1xuICB9XG4gIGFzeW5jIF9vcGVyYXRpb25FeGVjdXRlV2l0aFJldHJ5KGlubmVyLCBzaWduYWwpIHtcbiAgICBsZXQgcmV0cnlBdHRlbXB0ID0gMDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGlubmVyLmNhbGwodGhpcyk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEludm9jYXRpb25FcnJvcikge1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICByZXRyeUF0dGVtcHQrKztcbiAgICAgICAgY29uc3QgZGVsYXlJbk1zID0gdGhpcy5fbWVzc2FnZVJldHJ5UG9saWN5Lm5leHRSZXRyeURlbGF5SW5NcyhyZXRyeUF0dGVtcHQpO1xuICAgICAgICBpZiAoZGVsYXlJbk1zID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlJbk1zKTtcbiAgICAgICAgaWYgKHNpZ25hbD8uYWJvcnRlZCkge1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuY2xhc3MgUmV0cnlQb2xpY3kge1xuICBfcmV0cnlPcHRpb25zO1xuICBfbWF4UmV0cmllc1RvR2V0TWF4RGVsYXk7XG4gIGNvbnN0cnVjdG9yKHJldHJ5T3B0aW9ucykge1xuICAgIHRoaXMuX3JldHJ5T3B0aW9ucyA9IHJldHJ5T3B0aW9ucztcbiAgICB0aGlzLl9tYXhSZXRyaWVzVG9HZXRNYXhEZWxheSA9IE1hdGguY2VpbChcbiAgICAgIE1hdGgubG9nMih0aGlzLl9yZXRyeU9wdGlvbnMubWF4UmV0cnlEZWxheUluTXMpIC0gTWF0aC5sb2cyKHRoaXMuX3JldHJ5T3B0aW9ucy5yZXRyeURlbGF5SW5NcykgKyAxXG4gICAgKTtcbiAgfVxuICBuZXh0UmV0cnlEZWxheUluTXMocmV0cnlBdHRlbXB0KSB7XG4gICAgaWYgKHJldHJ5QXR0ZW1wdCA+IHRoaXMuX3JldHJ5T3B0aW9ucy5tYXhSZXRyaWVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX3JldHJ5T3B0aW9ucy5tb2RlID09PSBcIkZpeGVkXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JldHJ5T3B0aW9ucy5yZXRyeURlbGF5SW5NcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxjdWxhdGVFeHBvbmVudGlhbERlbGF5KHJldHJ5QXR0ZW1wdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIF9jYWxjdWxhdGVFeHBvbmVudGlhbERlbGF5KGF0dGVtcHQpIHtcbiAgICBpZiAoYXR0ZW1wdCA+PSB0aGlzLl9tYXhSZXRyaWVzVG9HZXRNYXhEZWxheSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JldHJ5T3B0aW9ucy5tYXhSZXRyeURlbGF5SW5NcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICgxIDw8IGF0dGVtcHQgLSAxKSAqIHRoaXMuX3JldHJ5T3B0aW9ucy5yZXRyeURlbGF5SW5NcztcbiAgICB9XG4gIH1cbn1cbmNsYXNzIFdlYlB1YlN1Ykdyb3VwIHtcbiAgbmFtZTtcbiAgaXNKb2luZWQgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cbmNsYXNzIFNlcXVlbmNlSWQge1xuICBfc2VxdWVuY2VJZDtcbiAgX2lzVXBkYXRlO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9zZXF1ZW5jZUlkID0gMDtcbiAgICB0aGlzLl9pc1VwZGF0ZSA9IGZhbHNlO1xuICB9XG4gIHRyeVVwZGF0ZShzZXF1ZW5jZUlkKSB7XG4gICAgdGhpcy5faXNVcGRhdGUgPSB0cnVlO1xuICAgIGlmIChzZXF1ZW5jZUlkID4gdGhpcy5fc2VxdWVuY2VJZCkge1xuICAgICAgY29uc3QgZGlmZiA9IHNlcXVlbmNlSWQgLSB0aGlzLl9zZXF1ZW5jZUlkO1xuICAgICAgdGhpcy5fc2VxdWVuY2VJZCA9IHNlcXVlbmNlSWQ7XG4gICAgICByZXR1cm4gZGlmZjtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgdHJ5R2V0U2VxdWVuY2VJZCgpIHtcbiAgICBpZiAodGhpcy5faXNVcGRhdGUpIHtcbiAgICAgIHRoaXMuX2lzVXBkYXRlID0gZmFsc2U7XG4gICAgICByZXR1cm4gW3RydWUsIHRoaXMuX3NlcXVlbmNlSWRdO1xuICAgIH1cbiAgICByZXR1cm4gW2ZhbHNlLCBudWxsXTtcbiAgfVxuICByZXNldCgpIHtcbiAgICB0aGlzLl9zZXF1ZW5jZUlkID0gMDtcbiAgICB0aGlzLl9pc1VwZGF0ZSA9IGZhbHNlO1xuICB9XG59XG5jbGFzcyBBYm9ydGFibGVUYXNrIHtcbiAgX2Z1bmM7XG4gIF9hYm9ydENvbnRyb2xsZXI7XG4gIF9pbnRlcnZhbDtcbiAgX29iajtcbiAgY29uc3RydWN0b3IoZnVuYywgaW50ZXJ2YWwsIG9iaikge1xuICAgIHRoaXMuX2Z1bmMgPSBmdW5jO1xuICAgIHRoaXMuX2Fib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IGludGVydmFsO1xuICAgIHRoaXMuX29iaiA9IG9iajtcbiAgICB0aGlzLl9zdGFydCgpO1xuICB9XG4gIGFib3J0KCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9hYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICB9IGNhdGNoIHtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX3N0YXJ0KCkge1xuICAgIGNvbnN0IHNpZ25hbCA9IHRoaXMuX2Fib3J0Q29udHJvbGxlci5zaWduYWw7XG4gICAgd2hpbGUgKCFzaWduYWwuYWJvcnRlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5fZnVuYyh0aGlzLl9vYmopO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBhd2FpdCBkZWxheSh0aGlzLl9pbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQge1xuICBXZWJQdWJTdWJDbGllbnRcbn07XG4iLCAiY2xhc3MgU2VuZE1lc3NhZ2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgLyoqXG4gICAqIEVycm9yIG5hbWVcbiAgICovXG4gIG5hbWU7XG4gIC8qKlxuICAgKiBUaGUgYWNrIGlkIG9mIHRoZSBtZXNzYWdlXG4gICAqL1xuICBhY2tJZDtcbiAgLyoqXG4gICAqIFRoZSBlcnJvciBkZXRhaWxzIGZyb20gdGhlIHNlcnZpY2VcbiAgICovXG4gIGVycm9yRGV0YWlsO1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhIFNlbmRNZXNzYWdlRXJyb3JcbiAgICogQHBhcmFtIG1lc3NhZ2UgLSBUaGUgZXJyb3IgbWVzc2FnZVxuICAgKiBAcGFyYW0gYWNrTWVzc2FnZSAtIFRoZSBhY2sgbWVzc2FnZVxuICAgKi9cbiAgY29uc3RydWN0b3IobWVzc2FnZSwgb3B0aW9ucykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9IFwiU2VuZE1lc3NhZ2VFcnJvclwiO1xuICAgIHRoaXMuYWNrSWQgPSBvcHRpb25zLmFja0lkO1xuICAgIHRoaXMuZXJyb3JEZXRhaWwgPSBvcHRpb25zLmVycm9yRGV0YWlsO1xuICB9XG59XG5jbGFzcyBJbnZvY2F0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIC8qKlxuICAgKiBUaGUgaW52b2NhdGlvbiBpZCBvZiB0aGUgcmVxdWVzdC5cbiAgICovXG4gIGludm9jYXRpb25JZDtcbiAgLyoqXG4gICAqIEVycm9yIGRldGFpbHMgZnJvbSB0aGUgc2VydmljZSBpZiBhdmFpbGFibGUuXG4gICAqL1xuICBlcnJvckRldGFpbDtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgb3B0aW9ucykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9IFwiSW52b2NhdGlvbkVycm9yXCI7XG4gICAgdGhpcy5pbnZvY2F0aW9uSWQgPSBvcHRpb25zLmludm9jYXRpb25JZDtcbiAgICB0aGlzLmVycm9yRGV0YWlsID0gb3B0aW9ucy5lcnJvckRldGFpbDtcbiAgfVxufVxuZXhwb3J0IHtcbiAgSW52b2NhdGlvbkVycm9yLFxuICBTZW5kTWVzc2FnZUVycm9yXG59O1xuIiwgIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBFT0wgfSBmcm9tIFwibm9kZTpvc1wiO1xuaW1wb3J0IHV0aWwgZnJvbSBcIm5vZGU6dXRpbFwiO1xuaW1wb3J0IHByb2Nlc3MgZnJvbSBcIm5vZGU6cHJvY2Vzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9nKG1lc3NhZ2U6IHVua25vd24sIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gIHByb2Nlc3Muc3RkZXJyLndyaXRlKGAke3V0aWwuZm9ybWF0KG1lc3NhZ2UsIC4uLmFyZ3MpfSR7RU9MfWApO1xufVxuIiwgIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwiLi9sb2cuanNcIjtcblxuLyoqXG4gKiBBIHNpbXBsZSBtZWNoYW5pc20gZm9yIGVuYWJsaW5nIGxvZ2dpbmcuXG4gKiBJbnRlbmRlZCB0byBtaW1pYyB0aGUgcHVibGljbHkgYXZhaWxhYmxlIGBkZWJ1Z2AgcGFja2FnZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEZWJ1ZyB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGxvZ2dlciB3aXRoIHRoZSBnaXZlbiBuYW1lc3BhY2UuXG4gICAqL1xuICAobmFtZXNwYWNlOiBzdHJpbmcpOiBEZWJ1Z2dlcjtcbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGxvZyBtZXRob2QgKGRlZmF1bHRzIHRvIGNvbnNvbGUpXG4gICAqL1xuICBsb2c6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIEVuYWJsZXMgYSBwYXJ0aWN1bGFyIHNldCBvZiBuYW1lc3BhY2VzLlxuICAgKiBUbyBlbmFibGUgbXVsdGlwbGUgc2VwYXJhdGUgdGhlbSB3aXRoIGNvbW1hcywgZS5nLiBcImluZm8sZGVidWdcIi5cbiAgICogU3VwcG9ydHMgd2lsZGNhcmRzLCBlLmcuIFwidHlwZVNwZWNSdW50aW1lOipcIlxuICAgKiBTdXBwb3J0cyBza2lwIHN5bnRheCwgZS5nLiBcInR5cGVTcGVjUnVudGltZToqLC10eXBlU3BlY1J1bnRpbWU6c3RvcmFnZToqXCIgd2lsbCBlbmFibGVcbiAgICogZXZlcnl0aGluZyB1bmRlciB0eXBlU3BlY1J1bnRpbWUgZXhjZXB0IGZvciB0aGluZ3MgdW5kZXIgdHlwZVNwZWNSdW50aW1lOnN0b3JhZ2UuXG4gICAqL1xuICBlbmFibGU6IChuYW1lc3BhY2VzOiBzdHJpbmcpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBwYXJ0aWN1bGFyIG5hbWVzcGFjZSBpcyBlbmFibGVkLlxuICAgKi9cbiAgZW5hYmxlZDogKG5hbWVzcGFjZTogc3RyaW5nKSA9PiBib29sZWFuO1xuICAvKipcbiAgICogRGlzYWJsZXMgYWxsIGxvZ2dpbmcsIHJldHVybnMgd2hhdCB3YXMgcHJldmlvdXNseSBlbmFibGVkLlxuICAgKi9cbiAgZGlzYWJsZTogKCkgPT4gc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgbG9nIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIGR5bmFtaWNhbGx5IGVuYWJsZWQgYW5kIHJlZGlyZWN0ZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVidWdnZXIge1xuICAvKipcbiAgICogTG9ncyB0aGUgZ2l2ZW4gYXJndW1lbnRzIHRvIHRoZSBgbG9nYCBtZXRob2QuXG4gICAqL1xuICAoLi4uYXJnczogYW55W10pOiB2b2lkO1xuICAvKipcbiAgICogVHJ1ZSBpZiB0aGlzIGxvZ2dlciBpcyBhY3RpdmUgYW5kIGxvZ2dpbmcuXG4gICAqL1xuICBlbmFibGVkOiBib29sZWFuO1xuICAvKipcbiAgICogVXNlZCB0byBjbGVhbnVwL3JlbW92ZSB0aGlzIGxvZ2dlci5cbiAgICovXG4gIGRlc3Ryb3k6ICgpID0+IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBsb2cgbWV0aG9kLiBDYW4gYmUgb3ZlcnJpZGRlbiB0byByZWRpcmVjdCBvdXRwdXQuXG4gICAqL1xuICBsb2c6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIFRoZSBuYW1lc3BhY2Ugb2YgdGhpcyBsb2dnZXIuXG4gICAqL1xuICBuYW1lc3BhY2U6IHN0cmluZztcbiAgLyoqXG4gICAqIEV4dGVuZHMgdGhpcyBsb2dnZXIgd2l0aCBhIGNoaWxkIG5hbWVzcGFjZS5cbiAgICogTmFtZXNwYWNlcyBhcmUgc2VwYXJhdGVkIHdpdGggYSAnOicgY2hhcmFjdGVyLlxuICAgKi9cbiAgZXh0ZW5kOiAobmFtZXNwYWNlOiBzdHJpbmcpID0+IERlYnVnZ2VyO1xufVxuXG5jb25zdCBkZWJ1Z0VudlZhcmlhYmxlID1cbiAgKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52LkRFQlVHKSB8fCB1bmRlZmluZWQ7XG5cbmxldCBlbmFibGVkU3RyaW5nOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5sZXQgZW5hYmxlZE5hbWVzcGFjZXM6IHN0cmluZ1tdID0gW107XG5sZXQgc2tpcHBlZE5hbWVzcGFjZXM6IHN0cmluZ1tdID0gW107XG5jb25zdCBkZWJ1Z2dlcnM6IERlYnVnZ2VyW10gPSBbXTtcblxuaWYgKGRlYnVnRW52VmFyaWFibGUpIHtcbiAgZW5hYmxlKGRlYnVnRW52VmFyaWFibGUpO1xufVxuXG5jb25zdCBkZWJ1Z09iajogRGVidWcgPSBPYmplY3QuYXNzaWduKFxuICAobmFtZXNwYWNlOiBzdHJpbmcpOiBEZWJ1Z2dlciA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZURlYnVnZ2VyKG5hbWVzcGFjZSk7XG4gIH0sXG4gIHtcbiAgICBlbmFibGUsXG4gICAgZW5hYmxlZCxcbiAgICBkaXNhYmxlLFxuICAgIGxvZyxcbiAgfSxcbik7XG5cbmZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzOiBzdHJpbmcpOiB2b2lkIHtcbiAgZW5hYmxlZFN0cmluZyA9IG5hbWVzcGFjZXM7XG4gIGVuYWJsZWROYW1lc3BhY2VzID0gW107XG4gIHNraXBwZWROYW1lc3BhY2VzID0gW107XG4gIGNvbnN0IG5hbWVzcGFjZUxpc3QgPSBuYW1lc3BhY2VzLnNwbGl0KFwiLFwiKS5tYXAoKG5zKSA9PiBucy50cmltKCkpO1xuICBmb3IgKGNvbnN0IG5zIG9mIG5hbWVzcGFjZUxpc3QpIHtcbiAgICBpZiAobnMuc3RhcnRzV2l0aChcIi1cIikpIHtcbiAgICAgIHNraXBwZWROYW1lc3BhY2VzLnB1c2gobnMuc3Vic3RyaW5nKDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW5hYmxlZE5hbWVzcGFjZXMucHVzaChucyk7XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgaW5zdGFuY2Ugb2YgZGVidWdnZXJzKSB7XG4gICAgaW5zdGFuY2UuZW5hYmxlZCA9IGVuYWJsZWQoaW5zdGFuY2UubmFtZXNwYWNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWVzcGFjZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmIChuYW1lc3BhY2UuZW5kc1dpdGgoXCIqXCIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmb3IgKGNvbnN0IHNraXBwZWQgb2Ygc2tpcHBlZE5hbWVzcGFjZXMpIHtcbiAgICBpZiAobmFtZXNwYWNlTWF0Y2hlcyhuYW1lc3BhY2UsIHNraXBwZWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgZW5hYmxlZE5hbWVzcGFjZSBvZiBlbmFibGVkTmFtZXNwYWNlcykge1xuICAgIGlmIChuYW1lc3BhY2VNYXRjaGVzKG5hbWVzcGFjZSwgZW5hYmxlZE5hbWVzcGFjZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogR2l2ZW4gYSBuYW1lc3BhY2UsIGNoZWNrIGlmIGl0IG1hdGNoZXMgYSBwYXR0ZXJuLlxuICogUGF0dGVybnMgb25seSBoYXZlIGEgc2luZ2xlIHdpbGRjYXJkIGNoYXJhY3RlciB3aGljaCBpcyAqLlxuICogVGhlIGJlaGF2aW9yIG9mICogaXMgdGhhdCBpdCBtYXRjaGVzIHplcm8gb3IgbW9yZSBvdGhlciBjaGFyYWN0ZXJzLlxuICovXG5mdW5jdGlvbiBuYW1lc3BhY2VNYXRjaGVzKG5hbWVzcGFjZTogc3RyaW5nLCBwYXR0ZXJuVG9NYXRjaDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHNpbXBsZSBjYXNlLCBubyBwYXR0ZXJuIG1hdGNoaW5nIHJlcXVpcmVkXG4gIGlmIChwYXR0ZXJuVG9NYXRjaC5pbmRleE9mKFwiKlwiKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gbmFtZXNwYWNlID09PSBwYXR0ZXJuVG9NYXRjaDtcbiAgfVxuXG4gIGxldCBwYXR0ZXJuID0gcGF0dGVyblRvTWF0Y2g7XG5cbiAgLy8gbm9ybWFsaXplIHN1Y2Nlc3NpdmUgKiBpZiBuZWVkZWRcbiAgaWYgKHBhdHRlcm5Ub01hdGNoLmluZGV4T2YoXCIqKlwiKSAhPT0gLTEpIHtcbiAgICBjb25zdCBwYXR0ZXJuUGFydHMgPSBbXTtcbiAgICBsZXQgbGFzdENoYXJhY3RlciA9IFwiXCI7XG4gICAgZm9yIChjb25zdCBjaGFyYWN0ZXIgb2YgcGF0dGVyblRvTWF0Y2gpIHtcbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IFwiKlwiICYmIGxhc3RDaGFyYWN0ZXIgPT09IFwiKlwiKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdENoYXJhY3RlciA9IGNoYXJhY3RlcjtcbiAgICAgICAgcGF0dGVyblBhcnRzLnB1c2goY2hhcmFjdGVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGF0dGVybiA9IHBhdHRlcm5QYXJ0cy5qb2luKFwiXCIpO1xuICB9XG5cbiAgbGV0IG5hbWVzcGFjZUluZGV4ID0gMDtcbiAgbGV0IHBhdHRlcm5JbmRleCA9IDA7XG4gIGNvbnN0IHBhdHRlcm5MZW5ndGggPSBwYXR0ZXJuLmxlbmd0aDtcbiAgY29uc3QgbmFtZXNwYWNlTGVuZ3RoID0gbmFtZXNwYWNlLmxlbmd0aDtcbiAgbGV0IGxhc3RXaWxkY2FyZCA9IC0xO1xuICBsZXQgbGFzdFdpbGRjYXJkTmFtZXNwYWNlID0gLTE7XG5cbiAgd2hpbGUgKG5hbWVzcGFjZUluZGV4IDwgbmFtZXNwYWNlTGVuZ3RoICYmIHBhdHRlcm5JbmRleCA8IHBhdHRlcm5MZW5ndGgpIHtcbiAgICBpZiAocGF0dGVybltwYXR0ZXJuSW5kZXhdID09PSBcIipcIikge1xuICAgICAgbGFzdFdpbGRjYXJkID0gcGF0dGVybkluZGV4O1xuICAgICAgcGF0dGVybkluZGV4Kys7XG4gICAgICBpZiAocGF0dGVybkluZGV4ID09PSBwYXR0ZXJuTGVuZ3RoKSB7XG4gICAgICAgIC8vIGlmIHdpbGRjYXJkIGlzIHRoZSBsYXN0IGNoYXJhY3RlciwgaXQgd2lsbCBtYXRjaCB0aGUgcmVtYWluaW5nIG5hbWVzcGFjZSBzdHJpbmdcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvLyBub3cgd2UgbGV0IHRoZSB3aWxkY2FyZCBlYXQgY2hhcmFjdGVycyB1bnRpbCB3ZSBtYXRjaCB0aGUgbmV4dCBsaXRlcmFsIGluIHRoZSBwYXR0ZXJuXG4gICAgICB3aGlsZSAobmFtZXNwYWNlW25hbWVzcGFjZUluZGV4XSAhPT0gcGF0dGVybltwYXR0ZXJuSW5kZXhdKSB7XG4gICAgICAgIG5hbWVzcGFjZUluZGV4Kys7XG4gICAgICAgIC8vIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgbmFtZXNwYWNlIHdpdGhvdXQgYSBtYXRjaFxuICAgICAgICBpZiAobmFtZXNwYWNlSW5kZXggPT09IG5hbWVzcGFjZUxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBub3cgdGhhdCB3ZSBoYXZlIGEgbWF0Y2gsIGxldCdzIHRyeSB0byBjb250aW51ZSBvblxuICAgICAgLy8gaG93ZXZlciwgaXQncyBwb3NzaWJsZSB3ZSBjb3VsZCBmaW5kIGEgbGF0ZXIgbWF0Y2hcbiAgICAgIC8vIHNvIGtlZXAgYSByZWZlcmVuY2UgaW4gY2FzZSB3ZSBoYXZlIHRvIGJhY2t0cmFja1xuICAgICAgbGFzdFdpbGRjYXJkTmFtZXNwYWNlID0gbmFtZXNwYWNlSW5kZXg7XG4gICAgICBuYW1lc3BhY2VJbmRleCsrO1xuICAgICAgcGF0dGVybkluZGV4Kys7XG4gICAgICBjb250aW51ZTtcbiAgICB9IGVsc2UgaWYgKHBhdHRlcm5bcGF0dGVybkluZGV4XSA9PT0gbmFtZXNwYWNlW25hbWVzcGFjZUluZGV4XSkge1xuICAgICAgLy8gc2ltcGxlIGNhc2U6IGxpdGVyYWwgcGF0dGVybiBtYXRjaGVzIHNvIGtlZXAgZ29pbmdcbiAgICAgIHBhdHRlcm5JbmRleCsrO1xuICAgICAgbmFtZXNwYWNlSW5kZXgrKztcbiAgICB9IGVsc2UgaWYgKGxhc3RXaWxkY2FyZCA+PSAwKSB7XG4gICAgICAvLyBzcGVjaWFsIGNhc2U6IHdlIGRvbid0IGhhdmUgYSBsaXRlcmFsIG1hdGNoLCBidXQgdGhlcmUgaXMgYSBwcmV2aW91cyB3aWxkY2FyZFxuICAgICAgLy8gd2hpY2ggd2UgY2FuIGJhY2t0cmFjayB0byBhbmQgdHJ5IGhhdmluZyB0aGUgd2lsZGNhcmQgZWF0IHRoZSBtYXRjaCBpbnN0ZWFkXG4gICAgICBwYXR0ZXJuSW5kZXggPSBsYXN0V2lsZGNhcmQgKyAxO1xuICAgICAgbmFtZXNwYWNlSW5kZXggPSBsYXN0V2lsZGNhcmROYW1lc3BhY2UgKyAxO1xuICAgICAgLy8gd2UndmUgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBuYW1lc3BhY2Ugd2l0aG91dCBhIG1hdGNoXG4gICAgICBpZiAobmFtZXNwYWNlSW5kZXggPT09IG5hbWVzcGFjZUxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBzaW1pbGFyIHRvIHRoZSBwcmV2aW91cyBsb2dpYywgbGV0J3Mga2VlcCBnb2luZyB1bnRpbCB3ZSBmaW5kIHRoZSBuZXh0IGxpdGVyYWwgbWF0Y2hcbiAgICAgIHdoaWxlIChuYW1lc3BhY2VbbmFtZXNwYWNlSW5kZXhdICE9PSBwYXR0ZXJuW3BhdHRlcm5JbmRleF0pIHtcbiAgICAgICAgbmFtZXNwYWNlSW5kZXgrKztcbiAgICAgICAgaWYgKG5hbWVzcGFjZUluZGV4ID09PSBuYW1lc3BhY2VMZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxhc3RXaWxkY2FyZE5hbWVzcGFjZSA9IG5hbWVzcGFjZUluZGV4O1xuICAgICAgbmFtZXNwYWNlSW5kZXgrKztcbiAgICAgIHBhdHRlcm5JbmRleCsrO1xuICAgICAgY29udGludWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBuYW1lc3BhY2VEb25lID0gbmFtZXNwYWNlSW5kZXggPT09IG5hbWVzcGFjZS5sZW5ndGg7XG4gIGNvbnN0IHBhdHRlcm5Eb25lID0gcGF0dGVybkluZGV4ID09PSBwYXR0ZXJuLmxlbmd0aDtcbiAgLy8gdGhpcyBpcyB0byBkZXRlY3QgdGhlIGNhc2Ugb2YgYW4gdW5uZWVkZWQgZmluYWwgd2lsZGNhcmRcbiAgLy8gZS5nLiB0aGUgcGF0dGVybiBgYWIqYCBzaG91bGQgbWF0Y2ggdGhlIHN0cmluZyBgYWJgXG4gIGNvbnN0IHRyYWlsaW5nV2lsZENhcmQgPSBwYXR0ZXJuSW5kZXggPT09IHBhdHRlcm4ubGVuZ3RoIC0gMSAmJiBwYXR0ZXJuW3BhdHRlcm5JbmRleF0gPT09IFwiKlwiO1xuICByZXR1cm4gbmFtZXNwYWNlRG9uZSAmJiAocGF0dGVybkRvbmUgfHwgdHJhaWxpbmdXaWxkQ2FyZCk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGUoKTogc3RyaW5nIHtcbiAgY29uc3QgcmVzdWx0ID0gZW5hYmxlZFN0cmluZyB8fCBcIlwiO1xuICBlbmFibGUoXCJcIik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlYnVnZ2VyKG5hbWVzcGFjZTogc3RyaW5nKTogRGVidWdnZXIge1xuICBjb25zdCBuZXdEZWJ1Z2dlcjogRGVidWdnZXIgPSBPYmplY3QuYXNzaWduKGRlYnVnLCB7XG4gICAgZW5hYmxlZDogZW5hYmxlZChuYW1lc3BhY2UpLFxuICAgIGRlc3Ryb3ksXG4gICAgbG9nOiBkZWJ1Z09iai5sb2csXG4gICAgbmFtZXNwYWNlLFxuICAgIGV4dGVuZCxcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZGVidWcoLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICBpZiAoIW5ld0RlYnVnZ2VyLmVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgYXJnc1swXSA9IGAke25hbWVzcGFjZX0gJHthcmdzWzBdfWA7XG4gICAgfVxuICAgIG5ld0RlYnVnZ2VyLmxvZyguLi5hcmdzKTtcbiAgfVxuXG4gIGRlYnVnZ2Vycy5wdXNoKG5ld0RlYnVnZ2VyKTtcblxuICByZXR1cm4gbmV3RGVidWdnZXI7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3kodGhpczogRGVidWdnZXIpOiBib29sZWFuIHtcbiAgY29uc3QgaW5kZXggPSBkZWJ1Z2dlcnMuaW5kZXhPZih0aGlzKTtcbiAgaWYgKGluZGV4ID49IDApIHtcbiAgICBkZWJ1Z2dlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCh0aGlzOiBEZWJ1Z2dlciwgbmFtZXNwYWNlOiBzdHJpbmcpOiBEZWJ1Z2dlciB7XG4gIGNvbnN0IG5ld0RlYnVnZ2VyID0gY3JlYXRlRGVidWdnZXIoYCR7dGhpcy5uYW1lc3BhY2V9OiR7bmFtZXNwYWNlfWApO1xuICBuZXdEZWJ1Z2dlci5sb2cgPSB0aGlzLmxvZztcbiAgcmV0dXJuIG5ld0RlYnVnZ2VyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWJ1Z09iajtcbiIsICIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IGRlYnVnIGZyb20gXCIuL2RlYnVnLmpzXCI7XG5cbmltcG9ydCB0eXBlIHsgRGVidWdnZXIgfSBmcm9tIFwiLi9kZWJ1Zy5qc1wiO1xuZXhwb3J0IHR5cGUgeyBEZWJ1Z2dlciB9O1xuXG4vKipcbiAqIFRoZSBsb2cgbGV2ZWxzIHN1cHBvcnRlZCBieSB0aGUgbG9nZ2VyLlxuICogVGhlIGxvZyBsZXZlbHMgaW4gb3JkZXIgb2YgbW9zdCB2ZXJib3NlIHRvIGxlYXN0IHZlcmJvc2UgYXJlOlxuICogLSB2ZXJib3NlXG4gKiAtIGluZm9cbiAqIC0gd2FybmluZ1xuICogLSBlcnJvclxuICovXG5leHBvcnQgdHlwZSBUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbCA9IFwidmVyYm9zZVwiIHwgXCJpbmZvXCIgfCBcIndhcm5pbmdcIiB8IFwiZXJyb3JcIjtcblxuLyoqXG4gKiBBIFR5cGVTcGVjUnVudGltZUNsaWVudExvZ2dlciBpcyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGxvZyB0byBhbiBhcHByb3ByaWF0ZSBzZXZlcml0eSBsZXZlbC5cbiAqL1xuZXhwb3J0IHR5cGUgVHlwZVNwZWNSdW50aW1lQ2xpZW50TG9nZ2VyID0gRGVidWdnZXI7XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgbWV0aG9kcyBhdmFpbGFibGUgb24gdGhlIFNESy1mYWNpbmcgbG9nZ2VyLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFR5cGVTcGVjUnVudGltZUxvZ2dlciB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBmYWlsdXJlcyB0aGUgcHJvZ3JhbSBpcyB1bmxpa2VseSB0byByZWNvdmVyIGZyb20sXG4gICAqIHN1Y2ggYXMgT3V0IG9mIE1lbW9yeS5cbiAgICovXG4gIGVycm9yOiBEZWJ1Z2dlcjtcbiAgLyoqXG4gICAqIFVzZWQgd2hlbiBhIGZ1bmN0aW9uIGZhaWxzIHRvIHBlcmZvcm0gaXRzIGludGVuZGVkIHRhc2suXG4gICAqIFVzdWFsbHkgdGhpcyBtZWFucyB0aGUgZnVuY3Rpb24gd2lsbCB0aHJvdyBhbiBleGNlcHRpb24uXG4gICAqIE5vdCB1c2VkIGZvciBzZWxmLWhlYWxpbmcgZXZlbnRzIChlLmcuIGF1dG9tYXRpYyByZXRyeSlcbiAgICovXG4gIHdhcm5pbmc6IERlYnVnZ2VyO1xuICAvKipcbiAgICogVXNlZCB3aGVuIGEgZnVuY3Rpb24gb3BlcmF0ZXMgbm9ybWFsbHkuXG4gICAqL1xuICBpbmZvOiBEZWJ1Z2dlcjtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGRldGFpbGVkIHRyb3VibGVzaG9vdGluZyBzY2VuYXJpb3MuIFRoaXMgaXNcbiAgICogaW50ZW5kZWQgZm9yIHVzZSBieSBkZXZlbG9wZXJzIC8gc3lzdGVtIGFkbWluaXN0cmF0b3JzXG4gICAqIGZvciBkaWFnbm9zaW5nIHNwZWNpZmljIGZhaWx1cmVzLlxuICAgKi9cbiAgdmVyYm9zZTogRGVidWdnZXI7XG59XG5cbi8qKlxuICogdG9kbyBkb2NcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2dnZXJDb250ZXh0IHtcbiAgLyoqXG4gICAqIEltbWVkaWF0ZWx5IGVuYWJsZXMgbG9nZ2luZyBhdCB0aGUgc3BlY2lmaWVkIGxvZyBsZXZlbC4gSWYgbm8gbGV2ZWwgaXMgc3BlY2lmaWVkLCBsb2dnaW5nIGlzIGRpc2FibGVkLlxuICAgKiBAcGFyYW0gbGV2ZWwgLSBUaGUgbG9nIGxldmVsIHRvIGVuYWJsZSBmb3IgbG9nZ2luZy5cbiAgICogT3B0aW9ucyBmcm9tIG1vc3QgdmVyYm9zZSB0byBsZWFzdCB2ZXJib3NlIGFyZTpcbiAgICogLSB2ZXJib3NlXG4gICAqIC0gaW5mb1xuICAgKiAtIHdhcm5pbmdcbiAgICogLSBlcnJvclxuICAgKi9cbiAgc2V0TG9nTGV2ZWwobG9nTGV2ZWw/OiBUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY3VycmVudGx5IHNwZWNpZmllZCBsb2cgbGV2ZWwuXG4gICAqL1xuICBnZXRMb2dMZXZlbCgpOiBUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbCB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxvZ2dlciBmb3IgdXNlIGJ5IHRoZSBTREtzIHRoYXQgaW5oZXJpdHMgZnJvbSBgVHlwZVNwZWNSdW50aW1lTG9nZ2VyYC5cbiAgICogQHBhcmFtIG5hbWVzcGFjZSAtIFRoZSBuYW1lIG9mIHRoZSBTREsgcGFja2FnZS5cbiAgICogQGhpZGRlblxuICAgKi9cbiAgY3JlYXRlQ2xpZW50TG9nZ2VyKG5hbWVzcGFjZTogc3RyaW5nKTogVHlwZVNwZWNSdW50aW1lTG9nZ2VyO1xuXG4gIC8qKlxuICAgKiBUaGUgVHlwZVNwZWNSdW50aW1lQ2xpZW50TG9nZ2VyIHByb3ZpZGVzIGEgbWVjaGFuaXNtIGZvciBvdmVycmlkaW5nIHdoZXJlIGxvZ3MgYXJlIG91dHB1dCB0by5cbiAgICogQnkgZGVmYXVsdCwgbG9ncyBhcmUgc2VudCB0byBzdGRlcnIuXG4gICAqIE92ZXJyaWRlIHRoZSBgbG9nYCBtZXRob2QgdG8gcmVkaXJlY3QgbG9ncyB0byBhbm90aGVyIGxvY2F0aW9uLlxuICAgKi9cbiAgbG9nZ2VyOiBUeXBlU3BlY1J1bnRpbWVDbGllbnRMb2dnZXI7XG59XG5cbi8qKlxuICogT3B0aW9uIGZvciBjcmVhdGluZyBhIFR5cGVTcGVjUnVudGltZUxvZ2dlckNvbnRleHQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTG9nZ2VyQ29udGV4dE9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGVudmlyb25tZW50IHZhcmlhYmxlIHRvIGNoZWNrIGZvciB0aGUgbG9nIGxldmVsLlxuICAgKi9cbiAgbG9nTGV2ZWxFbnZWYXJOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lc3BhY2Ugb2YgdGhlIGxvZ2dlci5cbiAgICovXG4gIG5hbWVzcGFjZTogc3RyaW5nO1xufVxuXG5jb25zdCBUWVBFU1BFQ19SVU5USU1FX0xPR19MRVZFTFMgPSBbXCJ2ZXJib3NlXCIsIFwiaW5mb1wiLCBcIndhcm5pbmdcIiwgXCJlcnJvclwiXTtcblxudHlwZSBEZWJ1Z2dlcldpdGhMb2dMZXZlbCA9IERlYnVnZ2VyICYgeyBsZXZlbDogVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwgfTtcblxuY29uc3QgbGV2ZWxNYXAgPSB7XG4gIHZlcmJvc2U6IDQwMCxcbiAgaW5mbzogMzAwLFxuICB3YXJuaW5nOiAyMDAsXG4gIGVycm9yOiAxMDAsXG59O1xuXG5mdW5jdGlvbiBwYXRjaExvZ01ldGhvZChcbiAgcGFyZW50OiBUeXBlU3BlY1J1bnRpbWVDbGllbnRMb2dnZXIsXG4gIGNoaWxkOiBUeXBlU3BlY1J1bnRpbWVDbGllbnRMb2dnZXIgfCBEZWJ1Z2dlcldpdGhMb2dMZXZlbCxcbik6IHZvaWQge1xuICBjaGlsZC5sb2cgPSAoLi4uYXJncykgPT4ge1xuICAgIHBhcmVudC5sb2coLi4uYXJncyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwobGV2ZWw6IHN0cmluZyk6IGxldmVsIGlzIFR5cGVTcGVjUnVudGltZUxvZ0xldmVsIHtcbiAgcmV0dXJuIFRZUEVTUEVDX1JVTlRJTUVfTE9HX0xFVkVMUy5pbmNsdWRlcyhsZXZlbCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGxvZ2dlciBjb250ZXh0IGJhc2Ugb24gdGhlIHByb3ZpZGVkIG9wdGlvbnMuXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIGZvciBjcmVhdGluZyBhIGxvZ2dlciBjb250ZXh0LlxuICogQHJldHVybnMgVGhlIGxvZ2dlciBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9nZ2VyQ29udGV4dChvcHRpb25zOiBDcmVhdGVMb2dnZXJDb250ZXh0T3B0aW9ucyk6IExvZ2dlckNvbnRleHQge1xuICBjb25zdCByZWdpc3RlcmVkTG9nZ2VycyA9IG5ldyBTZXQ8RGVidWdnZXJXaXRoTG9nTGV2ZWw+KCk7XG4gIGNvbnN0IGxvZ0xldmVsRnJvbUVudiA9XG4gICAgKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52W29wdGlvbnMubG9nTGV2ZWxFbnZWYXJOYW1lXSkgfHxcbiAgICB1bmRlZmluZWQ7XG5cbiAgbGV0IGxvZ0xldmVsOiBUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbCB8IHVuZGVmaW5lZDtcblxuICBjb25zdCBjbGllbnRMb2dnZXI6IFR5cGVTcGVjUnVudGltZUNsaWVudExvZ2dlciA9IGRlYnVnKG9wdGlvbnMubmFtZXNwYWNlKTtcbiAgY2xpZW50TG9nZ2VyLmxvZyA9ICguLi5hcmdzKSA9PiB7XG4gICAgZGVidWcubG9nKC4uLmFyZ3MpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNvbnRleHRTZXRMb2dMZXZlbChsZXZlbD86IFR5cGVTcGVjUnVudGltZUxvZ0xldmVsKTogdm9pZCB7XG4gICAgaWYgKGxldmVsICYmICFpc1R5cGVTcGVjUnVudGltZUxvZ0xldmVsKGxldmVsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5rbm93biBsb2cgbGV2ZWwgJyR7bGV2ZWx9Jy4gQWNjZXB0YWJsZSB2YWx1ZXM6ICR7VFlQRVNQRUNfUlVOVElNRV9MT0dfTEVWRUxTLmpvaW4oXCIsXCIpfWAsXG4gICAgICApO1xuICAgIH1cbiAgICBsb2dMZXZlbCA9IGxldmVsO1xuXG4gICAgY29uc3QgZW5hYmxlZE5hbWVzcGFjZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGxvZ2dlciBvZiByZWdpc3RlcmVkTG9nZ2Vycykge1xuICAgICAgaWYgKHNob3VsZEVuYWJsZShsb2dnZXIpKSB7XG4gICAgICAgIGVuYWJsZWROYW1lc3BhY2VzLnB1c2gobG9nZ2VyLm5hbWVzcGFjZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVidWcuZW5hYmxlKGVuYWJsZWROYW1lc3BhY2VzLmpvaW4oXCIsXCIpKTtcbiAgfVxuXG4gIGlmIChsb2dMZXZlbEZyb21FbnYpIHtcbiAgICAvLyBhdm9pZCBjYWxsaW5nIHNldExvZ0xldmVsIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCBhIG1pcy1zZXQgZW52aXJvbm1lbnQgdmFyaWFibGUgdG8gY3Jhc2hcbiAgICBpZiAoaXNUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbChsb2dMZXZlbEZyb21FbnYpKSB7XG4gICAgICBjb250ZXh0U2V0TG9nTGV2ZWwobG9nTGV2ZWxGcm9tRW52KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYCR7b3B0aW9ucy5sb2dMZXZlbEVudlZhck5hbWV9IHNldCB0byB1bmtub3duIGxvZyBsZXZlbCAnJHtsb2dMZXZlbEZyb21FbnZ9JzsgbG9nZ2luZyBpcyBub3QgZW5hYmxlZC4gQWNjZXB0YWJsZSB2YWx1ZXM6ICR7VFlQRVNQRUNfUlVOVElNRV9MT0dfTEVWRUxTLmpvaW4oXG4gICAgICAgICAgXCIsIFwiLFxuICAgICAgICApfS5gLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRFbmFibGUobG9nZ2VyOiBEZWJ1Z2dlcldpdGhMb2dMZXZlbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCb29sZWFuKGxvZ0xldmVsICYmIGxldmVsTWFwW2xvZ2dlci5sZXZlbF0gPD0gbGV2ZWxNYXBbbG9nTGV2ZWxdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUxvZ2dlcihcbiAgICBwYXJlbnQ6IFR5cGVTcGVjUnVudGltZUNsaWVudExvZ2dlcixcbiAgICBsZXZlbDogVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwsXG4gICk6IERlYnVnZ2VyV2l0aExvZ0xldmVsIHtcbiAgICBjb25zdCBsb2dnZXI6IERlYnVnZ2VyV2l0aExvZ0xldmVsID0gT2JqZWN0LmFzc2lnbihwYXJlbnQuZXh0ZW5kKGxldmVsKSwge1xuICAgICAgbGV2ZWwsXG4gICAgfSk7XG5cbiAgICBwYXRjaExvZ01ldGhvZChwYXJlbnQsIGxvZ2dlcik7XG5cbiAgICBpZiAoc2hvdWxkRW5hYmxlKGxvZ2dlcikpIHtcbiAgICAgIGNvbnN0IGVuYWJsZWROYW1lc3BhY2VzID0gZGVidWcuZGlzYWJsZSgpO1xuICAgICAgZGVidWcuZW5hYmxlKGVuYWJsZWROYW1lc3BhY2VzICsgXCIsXCIgKyBsb2dnZXIubmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZWdpc3RlcmVkTG9nZ2Vycy5hZGQobG9nZ2VyKTtcblxuICAgIHJldHVybiBsb2dnZXI7XG4gIH1cblxuICBmdW5jdGlvbiBjb250ZXh0R2V0TG9nTGV2ZWwoKTogVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBsb2dMZXZlbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRleHRDcmVhdGVDbGllbnRMb2dnZXIobmFtZXNwYWNlOiBzdHJpbmcpOiBUeXBlU3BlY1J1bnRpbWVMb2dnZXIge1xuICAgIGNvbnN0IGNsaWVudFJvb3RMb2dnZXI6IFR5cGVTcGVjUnVudGltZUNsaWVudExvZ2dlciA9IGNsaWVudExvZ2dlci5leHRlbmQobmFtZXNwYWNlKTtcbiAgICBwYXRjaExvZ01ldGhvZChjbGllbnRMb2dnZXIsIGNsaWVudFJvb3RMb2dnZXIpO1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogY3JlYXRlTG9nZ2VyKGNsaWVudFJvb3RMb2dnZXIsIFwiZXJyb3JcIiksXG4gICAgICB3YXJuaW5nOiBjcmVhdGVMb2dnZXIoY2xpZW50Um9vdExvZ2dlciwgXCJ3YXJuaW5nXCIpLFxuICAgICAgaW5mbzogY3JlYXRlTG9nZ2VyKGNsaWVudFJvb3RMb2dnZXIsIFwiaW5mb1wiKSxcbiAgICAgIHZlcmJvc2U6IGNyZWF0ZUxvZ2dlcihjbGllbnRSb290TG9nZ2VyLCBcInZlcmJvc2VcIiksXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0TG9nTGV2ZWw6IGNvbnRleHRTZXRMb2dMZXZlbCxcbiAgICBnZXRMb2dMZXZlbDogY29udGV4dEdldExvZ0xldmVsLFxuICAgIGNyZWF0ZUNsaWVudExvZ2dlcjogY29udGV4dENyZWF0ZUNsaWVudExvZ2dlcixcbiAgICBsb2dnZXI6IGNsaWVudExvZ2dlcixcbiAgfTtcbn1cblxuY29uc3QgY29udGV4dCA9IGNyZWF0ZUxvZ2dlckNvbnRleHQoe1xuICBsb2dMZXZlbEVudlZhck5hbWU6IFwiVFlQRVNQRUNfUlVOVElNRV9MT0dfTEVWRUxcIixcbiAgbmFtZXNwYWNlOiBcInR5cGVTcGVjUnVudGltZVwiLFxufSk7XG5cbi8qKlxuICogSW1tZWRpYXRlbHkgZW5hYmxlcyBsb2dnaW5nIGF0IHRoZSBzcGVjaWZpZWQgbG9nIGxldmVsLiBJZiBubyBsZXZlbCBpcyBzcGVjaWZpZWQsIGxvZ2dpbmcgaXMgZGlzYWJsZWQuXG4gKiBAcGFyYW0gbGV2ZWwgLSBUaGUgbG9nIGxldmVsIHRvIGVuYWJsZSBmb3IgbG9nZ2luZy5cbiAqIE9wdGlvbnMgZnJvbSBtb3N0IHZlcmJvc2UgdG8gbGVhc3QgdmVyYm9zZSBhcmU6XG4gKiAtIHZlcmJvc2VcbiAqIC0gaW5mb1xuICogLSB3YXJuaW5nXG4gKiAtIGVycm9yXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVkZWNsYXJlXG5leHBvcnQgY29uc3QgVHlwZVNwZWNSdW50aW1lTG9nZ2VyOiBUeXBlU3BlY1J1bnRpbWVDbGllbnRMb2dnZXIgPSBjb250ZXh0LmxvZ2dlcjtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnRseSBzcGVjaWZpZWQgbG9nIGxldmVsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nTGV2ZWwobG9nTGV2ZWw/OiBUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbCk6IHZvaWQge1xuICBjb250ZXh0LnNldExvZ0xldmVsKGxvZ0xldmVsKTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnRseSBzcGVjaWZpZWQgbG9nIGxldmVsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9nTGV2ZWwoKTogVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwgfCB1bmRlZmluZWQge1xuICByZXR1cm4gY29udGV4dC5nZXRMb2dMZXZlbCgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBsb2dnZXIgZm9yIHVzZSBieSB0aGUgU0RLcyB0aGF0IGluaGVyaXRzIGZyb20gYFR5cGVTcGVjUnVudGltZUxvZ2dlcmAuXG4gKiBAcGFyYW0gbmFtZXNwYWNlIC0gVGhlIG5hbWUgb2YgdGhlIFNESyBwYWNrYWdlLlxuICogQGhpZGRlblxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2xpZW50TG9nZ2VyKG5hbWVzcGFjZTogc3RyaW5nKTogVHlwZVNwZWNSdW50aW1lTG9nZ2VyIHtcbiAgcmV0dXJuIGNvbnRleHQuY3JlYXRlQ2xpZW50TG9nZ2VyKG5hbWVzcGFjZSk7XG59XG4iLCAiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IGNyZWF0ZUxvZ2dlckNvbnRleHQgfSBmcm9tIFwiQHR5cGVzcGVjL3RzLWh0dHAtcnVudGltZS9pbnRlcm5hbC9sb2dnZXJcIjtcblxuY29uc3QgY29udGV4dCA9IGNyZWF0ZUxvZ2dlckNvbnRleHQoe1xuICBsb2dMZXZlbEVudlZhck5hbWU6IFwiQVpVUkVfTE9HX0xFVkVMXCIsXG4gIG5hbWVzcGFjZTogXCJhenVyZVwiLFxufSk7XG5cbi8qKlxuICogVGhlIEF6dXJlTG9nZ2VyIHByb3ZpZGVzIGEgbWVjaGFuaXNtIGZvciBvdmVycmlkaW5nIHdoZXJlIGxvZ3MgYXJlIG91dHB1dCB0by5cbiAqIEJ5IGRlZmF1bHQsIGxvZ3MgYXJlIHNlbnQgdG8gc3RkZXJyLlxuICogT3ZlcnJpZGUgdGhlIGBsb2dgIG1ldGhvZCB0byByZWRpcmVjdCBsb2dzIHRvIGFub3RoZXIgbG9jYXRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBBenVyZUxvZ2dlcjogQXp1cmVDbGllbnRMb2dnZXIgPSBjb250ZXh0LmxvZ2dlcjtcblxuLyoqXG4gKiBJbW1lZGlhdGVseSBlbmFibGVzIGxvZ2dpbmcgYXQgdGhlIHNwZWNpZmllZCBsb2cgbGV2ZWwuIElmIG5vIGxldmVsIGlzIHNwZWNpZmllZCwgbG9nZ2luZyBpcyBkaXNhYmxlZC5cbiAqIEBwYXJhbSBsZXZlbCAtIFRoZSBsb2cgbGV2ZWwgdG8gZW5hYmxlIGZvciBsb2dnaW5nLlxuICogT3B0aW9ucyBmcm9tIG1vc3QgdmVyYm9zZSB0byBsZWFzdCB2ZXJib3NlIGFyZTpcbiAqIC0gdmVyYm9zZVxuICogLSBpbmZvXG4gKiAtIHdhcm5pbmdcbiAqIC0gZXJyb3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldExvZ0xldmVsKGxldmVsPzogQXp1cmVMb2dMZXZlbCk6IHZvaWQge1xuICBjb250ZXh0LnNldExvZ0xldmVsKGxldmVsKTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnRseSBzcGVjaWZpZWQgbG9nIGxldmVsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9nTGV2ZWwoKTogQXp1cmVMb2dMZXZlbCB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBjb250ZXh0LmdldExvZ0xldmVsKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGxvZ2dlciBmb3IgdXNlIGJ5IHRoZSBBenVyZSBTREtzIHRoYXQgaW5oZXJpdHMgZnJvbSBgQXp1cmVMb2dnZXJgLlxuICogQHBhcmFtIG5hbWVzcGFjZSAtIFRoZSBuYW1lIG9mIHRoZSBTREsgcGFja2FnZS5cbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNsaWVudExvZ2dlcihuYW1lc3BhY2U6IHN0cmluZyk6IEF6dXJlTG9nZ2VyIHtcbiAgcmV0dXJuIGNvbnRleHQuY3JlYXRlQ2xpZW50TG9nZ2VyKG5hbWVzcGFjZSk7XG59XG5cbi8qKlxuICogQSBsb2cgZnVuY3Rpb24gdGhhdCBjYW4gYmUgZHluYW1pY2FsbHkgZW5hYmxlZCBhbmQgcmVkaXJlY3RlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEZWJ1Z2dlciB7XG4gIC8qKlxuICAgKiBMb2dzIHRoZSBnaXZlbiBhcmd1bWVudHMgdG8gdGhlIGBsb2dgIG1ldGhvZC5cbiAgICovXG4gICguLi5hcmdzOiBhbnlbXSk6IHZvaWQ7XG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoaXMgbG9nZ2VyIGlzIGFjdGl2ZSBhbmQgbG9nZ2luZy5cbiAgICovXG4gIGVuYWJsZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBVc2VkIHRvIGNsZWFudXAvcmVtb3ZlIHRoaXMgbG9nZ2VyLlxuICAgKi9cbiAgZGVzdHJveTogKCkgPT4gYm9vbGVhbjtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IGxvZyBtZXRob2QuIENhbiBiZSBvdmVycmlkZGVuIHRvIHJlZGlyZWN0IG91dHB1dC5cbiAgICovXG4gIGxvZzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xuICAvKipcbiAgICogVGhlIG5hbWVzcGFjZSBvZiB0aGlzIGxvZ2dlci5cbiAgICovXG4gIG5hbWVzcGFjZTogc3RyaW5nO1xuICAvKipcbiAgICogRXh0ZW5kcyB0aGlzIGxvZ2dlciB3aXRoIGEgY2hpbGQgbmFtZXNwYWNlLlxuICAgKiBOYW1lc3BhY2VzIGFyZSBzZXBhcmF0ZWQgd2l0aCBhICc6JyBjaGFyYWN0ZXIuXG4gICAqL1xuICBleHRlbmQ6IChuYW1lc3BhY2U6IHN0cmluZykgPT4gRGVidWdnZXI7XG59XG5cbi8qKlxuICogVGhlIGxvZyBsZXZlbHMgc3VwcG9ydGVkIGJ5IHRoZSBsb2dnZXIuXG4gKiBUaGUgbG9nIGxldmVscyBpbiBvcmRlciBvZiBtb3N0IHZlcmJvc2UgdG8gbGVhc3QgdmVyYm9zZSBhcmU6XG4gKiAtIHZlcmJvc2VcbiAqIC0gaW5mb1xuICogLSB3YXJuaW5nXG4gKiAtIGVycm9yXG4gKi9cbmV4cG9ydCB0eXBlIEF6dXJlTG9nTGV2ZWwgPSBcInZlcmJvc2VcIiB8IFwiaW5mb1wiIHwgXCJ3YXJuaW5nXCIgfCBcImVycm9yXCI7XG5cbi8qKlxuICogQW4gQXp1cmVDbGllbnRMb2dnZXIgaXMgYSBmdW5jdGlvbiB0aGF0IGNhbiBsb2cgdG8gYW4gYXBwcm9wcmlhdGUgc2V2ZXJpdHkgbGV2ZWwuXG4gKi9cbmV4cG9ydCB0eXBlIEF6dXJlQ2xpZW50TG9nZ2VyID0gRGVidWdnZXI7XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgbWV0aG9kcyBhdmFpbGFibGUgb24gdGhlIFNESy1mYWNpbmcgbG9nZ2VyLlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlZGVjbGFyZVxuZXhwb3J0IGludGVyZmFjZSBBenVyZUxvZ2dlciB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBmYWlsdXJlcyB0aGUgcHJvZ3JhbSBpcyB1bmxpa2VseSB0byByZWNvdmVyIGZyb20sXG4gICAqIHN1Y2ggYXMgT3V0IG9mIE1lbW9yeS5cbiAgICovXG4gIGVycm9yOiBEZWJ1Z2dlcjtcbiAgLyoqXG4gICAqIFVzZWQgd2hlbiBhIGZ1bmN0aW9uIGZhaWxzIHRvIHBlcmZvcm0gaXRzIGludGVuZGVkIHRhc2suXG4gICAqIFVzdWFsbHkgdGhpcyBtZWFucyB0aGUgZnVuY3Rpb24gd2lsbCB0aHJvdyBhbiBleGNlcHRpb24uXG4gICAqIE5vdCB1c2VkIGZvciBzZWxmLWhlYWxpbmcgZXZlbnRzIChlLmcuIGF1dG9tYXRpYyByZXRyeSlcbiAgICovXG4gIHdhcm5pbmc6IERlYnVnZ2VyO1xuICAvKipcbiAgICogVXNlZCB3aGVuIGEgZnVuY3Rpb24gb3BlcmF0ZXMgbm9ybWFsbHkuXG4gICAqL1xuICBpbmZvOiBEZWJ1Z2dlcjtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGRldGFpbGVkIHRyb3VibGVzaG9vdGluZyBzY2VuYXJpb3MuIFRoaXMgaXNcbiAgICogaW50ZW5kZWQgZm9yIHVzZSBieSBkZXZlbG9wZXJzIC8gc3lzdGVtIGFkbWluaXN0cmF0b3JzXG4gICAqIGZvciBkaWFnbm9zaW5nIHNwZWNpZmljIGZhaWx1cmVzLlxuICAgKi9cbiAgdmVyYm9zZTogRGVidWdnZXI7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ2xpZW50TG9nZ2VyIH0gZnJvbSBcIkBhenVyZS9sb2dnZXJcIjtcbmNvbnN0IGxvZ2dlciA9IGNyZWF0ZUNsaWVudExvZ2dlcihcIndlYi1wdWJzdWItY2xpZW50XCIpO1xuZXhwb3J0IHtcbiAgbG9nZ2VyXG59O1xuIiwgImltcG9ydCB7IEJ1ZmZlciB9IGZyb20gXCJidWZmZXJcIjtcbmZ1bmN0aW9uIHBhcnNlTWVzc2FnZXMoaW5wdXQpIHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQgZm9yIEpTT04gaHViIHByb3RvY29sLiBFeHBlY3RlZCBhIHN0cmluZy5cIik7XG4gIH1cbiAgaWYgKCFpbnB1dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGlucHV0XCIpO1xuICB9XG4gIGNvbnN0IHBhcnNlZE1lc3NhZ2UgPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgY29uc3QgdHlwZWRNZXNzYWdlID0gcGFyc2VkTWVzc2FnZTtcbiAgbGV0IHJldHVybk1lc3NhZ2U7XG4gIGlmICh0eXBlZE1lc3NhZ2UudHlwZSA9PT0gXCJzeXN0ZW1cIikge1xuICAgIGlmICh0eXBlZE1lc3NhZ2UuZXZlbnQgPT09IFwiY29ubmVjdGVkXCIpIHtcbiAgICAgIHJldHVybk1lc3NhZ2UgPSB7IC4uLnBhcnNlZE1lc3NhZ2UsIGtpbmQ6IFwiY29ubmVjdGVkXCIgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVkTWVzc2FnZS5ldmVudCA9PT0gXCJkaXNjb25uZWN0ZWRcIikge1xuICAgICAgcmV0dXJuTWVzc2FnZSA9IHsgLi4ucGFyc2VkTWVzc2FnZSwga2luZDogXCJkaXNjb25uZWN0ZWRcIiB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZWRNZXNzYWdlLnR5cGUgPT09IFwibWVzc2FnZVwiKSB7XG4gICAgaWYgKHR5cGVkTWVzc2FnZS5mcm9tID09PSBcImdyb3VwXCIpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBwYXJzZVBheWxvYWQocGFyc2VkTWVzc2FnZS5kYXRhLCBwYXJzZWRNZXNzYWdlLmRhdGFUeXBlKTtcbiAgICAgIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuTWVzc2FnZSA9IHsgLi4ucGFyc2VkTWVzc2FnZSwgZGF0YSwga2luZDogXCJncm91cERhdGFcIiB9O1xuICAgIH0gZWxzZSBpZiAodHlwZWRNZXNzYWdlLmZyb20gPT09IFwic2VydmVyXCIpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBwYXJzZVBheWxvYWQocGFyc2VkTWVzc2FnZS5kYXRhLCBwYXJzZWRNZXNzYWdlLmRhdGFUeXBlKTtcbiAgICAgIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuTWVzc2FnZSA9IHtcbiAgICAgICAgLi4ucGFyc2VkTWVzc2FnZSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAga2luZDogXCJzZXJ2ZXJEYXRhXCJcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlZE1lc3NhZ2UudHlwZSA9PT0gXCJhY2tcIikge1xuICAgIHJldHVybk1lc3NhZ2UgPSB7IC4uLnBhcnNlZE1lc3NhZ2UsIGtpbmQ6IFwiYWNrXCIgfTtcbiAgfSBlbHNlIGlmICh0eXBlZE1lc3NhZ2UudHlwZSA9PT0gXCJpbnZva2VSZXNwb25zZVwiKSB7XG4gICAgbGV0IGRhdGE7XG4gICAgaWYgKHBhcnNlZE1lc3NhZ2UuZGF0YVR5cGUgIT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFyc2VkRGF0YSA9IHBhcnNlUGF5bG9hZChwYXJzZWRNZXNzYWdlLmRhdGEsIHBhcnNlZE1lc3NhZ2UuZGF0YVR5cGUpO1xuICAgICAgaWYgKHBhcnNlZERhdGEgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBkYXRhID0gcGFyc2VkRGF0YTtcbiAgICB9XG4gICAgcmV0dXJuTWVzc2FnZSA9IHtcbiAgICAgIGtpbmQ6IFwiaW52b2tlUmVzcG9uc2VcIixcbiAgICAgIGludm9jYXRpb25JZDogcGFyc2VkTWVzc2FnZS5pbnZvY2F0aW9uSWQsXG4gICAgICBzdWNjZXNzOiBwYXJzZWRNZXNzYWdlLnN1Y2Nlc3MsXG4gICAgICBkYXRhVHlwZTogcGFyc2VkTWVzc2FnZS5kYXRhVHlwZSxcbiAgICAgIGRhdGEsXG4gICAgICBlcnJvcjogcGFyc2VkTWVzc2FnZS5lcnJvclxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZWRNZXNzYWdlLnR5cGUgPT09IFwiY2FuY2VsSW52b2NhdGlvblwiKSB7XG4gICAgcmV0dXJuTWVzc2FnZSA9IHtcbiAgICAgIC4uLnBhcnNlZE1lc3NhZ2UsXG4gICAgICBraW5kOiBcImNhbmNlbEludm9jYXRpb25cIlxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZWRNZXNzYWdlLnR5cGUgPT09IFwicG9uZ1wiKSB7XG4gICAgcmV0dXJuTWVzc2FnZSA9IHsgLi4ucGFyc2VkTWVzc2FnZSwga2luZDogXCJwb25nXCIgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gcmV0dXJuTWVzc2FnZTtcbn1cbmZ1bmN0aW9uIHdyaXRlTWVzc2FnZShtZXNzYWdlKSB7XG4gIGxldCBkYXRhO1xuICBzd2l0Y2ggKG1lc3NhZ2Uua2luZCkge1xuICAgIGNhc2UgXCJqb2luR3JvdXBcIjoge1xuICAgICAgZGF0YSA9IHsgdHlwZTogXCJqb2luR3JvdXBcIiwgZ3JvdXA6IG1lc3NhZ2UuZ3JvdXAsIGFja0lkOiBtZXNzYWdlLmFja0lkIH07XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBcImxlYXZlR3JvdXBcIjoge1xuICAgICAgZGF0YSA9IHsgdHlwZTogXCJsZWF2ZUdyb3VwXCIsIGdyb3VwOiBtZXNzYWdlLmdyb3VwLCBhY2tJZDogbWVzc2FnZS5hY2tJZCB9O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgXCJzZW5kRXZlbnRcIjoge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgdHlwZTogXCJldmVudFwiLFxuICAgICAgICBldmVudDogbWVzc2FnZS5ldmVudCxcbiAgICAgICAgYWNrSWQ6IG1lc3NhZ2UuYWNrSWQsXG4gICAgICAgIGRhdGFUeXBlOiBtZXNzYWdlLmRhdGFUeXBlLFxuICAgICAgICBkYXRhOiBnZXRQYXlsb2FkKG1lc3NhZ2UuZGF0YSwgbWVzc2FnZS5kYXRhVHlwZSlcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBcInNlbmRUb0dyb3VwXCI6IHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIHR5cGU6IFwic2VuZFRvR3JvdXBcIixcbiAgICAgICAgZ3JvdXA6IG1lc3NhZ2UuZ3JvdXAsXG4gICAgICAgIGFja0lkOiBtZXNzYWdlLmFja0lkLFxuICAgICAgICBkYXRhVHlwZTogbWVzc2FnZS5kYXRhVHlwZSxcbiAgICAgICAgZGF0YTogZ2V0UGF5bG9hZChtZXNzYWdlLmRhdGEsIG1lc3NhZ2UuZGF0YVR5cGUpLFxuICAgICAgICBub0VjaG86IG1lc3NhZ2Uubm9FY2hvXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgXCJzZXF1ZW5jZUFja1wiOiB7XG4gICAgICBkYXRhID0geyB0eXBlOiBcInNlcXVlbmNlQWNrXCIsIHNlcXVlbmNlSWQ6IG1lc3NhZ2Uuc2VxdWVuY2VJZCB9O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgXCJpbnZva2VcIjoge1xuICAgICAgY29uc3QgaW52b2tlUGF5bG9hZCA9IHtcbiAgICAgICAgdHlwZTogXCJpbnZva2VcIixcbiAgICAgICAgaW52b2NhdGlvbklkOiBtZXNzYWdlLmludm9jYXRpb25JZCxcbiAgICAgICAgdGFyZ2V0OiBtZXNzYWdlLnRhcmdldCxcbiAgICAgICAgZXZlbnQ6IG1lc3NhZ2UuZXZlbnRcbiAgICAgIH07XG4gICAgICBpZiAobWVzc2FnZS5kYXRhVHlwZSAhPSBudWxsICYmIG1lc3NhZ2UuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgIGludm9rZVBheWxvYWQuZGF0YVR5cGUgPSBtZXNzYWdlLmRhdGFUeXBlO1xuICAgICAgICBpbnZva2VQYXlsb2FkLmRhdGEgPSBnZXRQYXlsb2FkKG1lc3NhZ2UuZGF0YSwgbWVzc2FnZS5kYXRhVHlwZSk7XG4gICAgICB9XG4gICAgICBkYXRhID0gaW52b2tlUGF5bG9hZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiaW52b2tlUmVzcG9uc2VcIjoge1xuICAgICAgY29uc3QgaW52b2tlUmVzcG9uc2UgPSB7XG4gICAgICAgIHR5cGU6IFwiaW52b2tlUmVzcG9uc2VcIixcbiAgICAgICAgaW52b2NhdGlvbklkOiBtZXNzYWdlLmludm9jYXRpb25JZCxcbiAgICAgICAgc3VjY2VzczogbWVzc2FnZS5zdWNjZXNzLFxuICAgICAgICBlcnJvcjogbWVzc2FnZS5lcnJvclxuICAgICAgfTtcbiAgICAgIGlmIChtZXNzYWdlLmRhdGFUeXBlICE9IG51bGwgJiYgbWVzc2FnZS5kYXRhICE9IG51bGwpIHtcbiAgICAgICAgaW52b2tlUmVzcG9uc2UuZGF0YVR5cGUgPSBtZXNzYWdlLmRhdGFUeXBlO1xuICAgICAgICBpbnZva2VSZXNwb25zZS5kYXRhID0gZ2V0UGF5bG9hZChtZXNzYWdlLmRhdGEsIG1lc3NhZ2UuZGF0YVR5cGUpO1xuICAgICAgfVxuICAgICAgZGF0YSA9IGludm9rZVJlc3BvbnNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgXCJjYW5jZWxJbnZvY2F0aW9uXCI6IHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIHR5cGU6IFwiY2FuY2VsSW52b2NhdGlvblwiLFxuICAgICAgICBpbnZvY2F0aW9uSWQ6IG1lc3NhZ2UuaW52b2NhdGlvbklkXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgXCJwaW5nXCI6IHtcbiAgICAgIGRhdGEgPSB7IHR5cGU6IFwicGluZ1wiIH07XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCB0eXBlOiAke21lc3NhZ2Uua2luZH1gKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xufVxuZnVuY3Rpb24gZ2V0UGF5bG9hZChkYXRhLCBkYXRhVHlwZSkge1xuICBzd2l0Y2ggKGRhdGFUeXBlKSB7XG4gICAgY2FzZSBcInRleHRcIjoge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNZXNzYWdlIG11c3QgYmUgYSBzdHJpbmcuXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGNhc2UgXCJqc29uXCI6IHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBjYXNlIFwiYmluYXJ5XCI6XG4gICAgY2FzZSBcInByb3RvYnVmXCI6IHtcbiAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGRhdGEpLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1lc3NhZ2UgbXVzdCBiZSBhIEFycmF5QnVmZmVyXCIpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gcGFyc2VQYXlsb2FkKGRhdGEsIGRhdGFUeXBlKSB7XG4gIGlmIChkYXRhVHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNZXNzYWdlIG11c3QgYmUgYSBzdHJpbmcgd2hlbiBkYXRhVHlwZSBpcyB0ZXh0XCIpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gXCJqc29uXCIpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gXCJiaW5hcnlcIiB8fCBkYXRhVHlwZSA9PT0gXCJwcm90b2J1ZlwiKSB7XG4gICAgY29uc3QgYnVmID0gQnVmZmVyLmZyb20oZGF0YSwgXCJiYXNlNjRcIik7XG4gICAgcmV0dXJuIGJ1Zi5idWZmZXIuc2xpY2UoYnVmLmJ5dGVPZmZzZXQsIGJ1Zi5ieXRlT2Zmc2V0ICsgYnVmLmJ5dGVMZW5ndGgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5leHBvcnQge1xuICBwYXJzZU1lc3NhZ2VzLFxuICB3cml0ZU1lc3NhZ2Vcbn07XG4iLCAiaW1wb3J0ICogYXMgYmFzZSBmcm9tIFwiLi9qc29uUHJvdG9jb2xCYXNlLmpzXCI7XG5jbGFzcyBXZWJQdWJTdWJKc29uUHJvdG9jb2xJbXBsIHtcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHByb3RvY29sIHN1cHBvcnRzIHJlbGlhYmxlIGZlYXR1cmVzXG4gICAqL1xuICBpc1JlbGlhYmxlU3ViUHJvdG9jb2wgPSBmYWxzZTtcbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHN1YnByb3RvY29sLiBOYW1lIHdpbGwgYmUgdXNlZCBpbiB3ZWJzb2NrZXQgc3VicHJvdG9jb2xcbiAgICovXG4gIG5hbWUgPSBcImpzb24ud2VicHVic3ViLmF6dXJlLnYxXCI7XG4gIC8qKlxuICAgKiBDcmVhdGVzIFdlYlB1YlN1Yk1lc3NhZ2Ugb2JqZWN0cyBmcm9tIHRoZSBzcGVjaWZpZWQgc2VyaWFsaXplZCByZXByZXNlbnRhdGlvbi5cbiAgICogQHBhcmFtIGlucHV0IC0gVGhlIHNlcmlhbGl6ZWQgcmVwcmVzZW50YXRpb25cbiAgICovXG4gIHBhcnNlTWVzc2FnZXMoaW5wdXQpIHtcbiAgICByZXR1cm4gYmFzZS5wYXJzZU1lc3NhZ2VzKGlucHV0KTtcbiAgfVxuICAvKipcbiAgICogV3JpdGUgV2ViUHViU3ViTWVzc2FnZSB0byBzdHJpbmdcbiAgICogQHBhcmFtIG1lc3NhZ2UgLSBUaGUgbWVzc2FnZSB0byBiZSB3cml0dGVuXG4gICAqL1xuICB3cml0ZU1lc3NhZ2UobWVzc2FnZSkge1xuICAgIHJldHVybiBiYXNlLndyaXRlTWVzc2FnZShtZXNzYWdlKTtcbiAgfVxufVxuZXhwb3J0IHtcbiAgV2ViUHViU3ViSnNvblByb3RvY29sSW1wbFxufTtcbiIsICJpbXBvcnQgKiBhcyBiYXNlIGZyb20gXCIuL2pzb25Qcm90b2NvbEJhc2UuanNcIjtcbmNsYXNzIFdlYlB1YlN1Ykpzb25SZWxpYWJsZVByb3RvY29sSW1wbCB7XG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBwcm90b2NvbCBzdXBwb3J0cyByZWxpYWJsZSBmZWF0dXJlc1xuICAgKi9cbiAgaXNSZWxpYWJsZVN1YlByb3RvY29sID0gdHJ1ZTtcbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHN1YnByb3RvY29sLiBOYW1lIHdpbGwgYmUgdXNlZCBpbiB3ZWJzb2NrZXQgc3VicHJvdG9jb2xcbiAgICovXG4gIG5hbWUgPSBcImpzb24ucmVsaWFibGUud2VicHVic3ViLmF6dXJlLnYxXCI7XG4gIC8qKlxuICAgKiBDcmVhdGVzIFdlYlB1YlN1Yk1lc3NhZ2Ugb2JqZWN0cyBmcm9tIHRoZSBzcGVjaWZpZWQgc2VyaWFsaXplZCByZXByZXNlbnRhdGlvbi5cbiAgICogQHBhcmFtIGlucHV0IC0gVGhlIHNlcmlhbGl6ZWQgcmVwcmVzZW50YXRpb25cbiAgICovXG4gIHBhcnNlTWVzc2FnZXMoaW5wdXQpIHtcbiAgICByZXR1cm4gYmFzZS5wYXJzZU1lc3NhZ2VzKGlucHV0KTtcbiAgfVxuICAvKipcbiAgICogV3JpdGUgV2ViUHViU3ViTWVzc2FnZSB0byBzdHJpbmdcbiAgICogQHBhcmFtIG1lc3NhZ2UgLSBUaGUgbWVzc2FnZSB0byBiZSB3cml0dGVuXG4gICAqL1xuICB3cml0ZU1lc3NhZ2UobWVzc2FnZSkge1xuICAgIHJldHVybiBiYXNlLndyaXRlTWVzc2FnZShtZXNzYWdlKTtcbiAgfVxufVxuZXhwb3J0IHtcbiAgV2ViUHViU3ViSnNvblJlbGlhYmxlUHJvdG9jb2xJbXBsXG59O1xuIiwgImltcG9ydCB7IFdlYlB1YlN1Ykpzb25Qcm90b2NvbEltcGwgfSBmcm9tIFwiLi93ZWJQdWJTdWJKc29uUHJvdG9jb2wuanNcIjtcbmltcG9ydCB7IFdlYlB1YlN1Ykpzb25SZWxpYWJsZVByb3RvY29sSW1wbCB9IGZyb20gXCIuL3dlYlB1YlN1Ykpzb25SZWxpYWJsZVByb3RvY29sLmpzXCI7XG5jb25zdCBXZWJQdWJTdWJKc29uUHJvdG9jb2wgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgV2ViUHViU3ViSnNvblByb3RvY29sSW1wbCgpO1xufTtcbmNvbnN0IFdlYlB1YlN1Ykpzb25SZWxpYWJsZVByb3RvY29sID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFdlYlB1YlN1Ykpzb25SZWxpYWJsZVByb3RvY29sSW1wbCgpO1xufTtcbmV4cG9ydCB7XG4gIFdlYlB1YlN1Ykpzb25Qcm90b2NvbCxcbiAgV2ViUHViU3ViSnNvblJlbGlhYmxlUHJvdG9jb2xcbn07XG4iLCAiaW1wb3J0IGNyZWF0ZVdlYlNvY2tldFN0cmVhbSBmcm9tICcuL2xpYi9zdHJlYW0uanMnO1xuaW1wb3J0IGV4dGVuc2lvbiBmcm9tICcuL2xpYi9leHRlbnNpb24uanMnO1xuaW1wb3J0IFBlck1lc3NhZ2VEZWZsYXRlIGZyb20gJy4vbGliL3Blcm1lc3NhZ2UtZGVmbGF0ZS5qcyc7XG5pbXBvcnQgUmVjZWl2ZXIgZnJvbSAnLi9saWIvcmVjZWl2ZXIuanMnO1xuaW1wb3J0IFNlbmRlciBmcm9tICcuL2xpYi9zZW5kZXIuanMnO1xuaW1wb3J0IHN1YnByb3RvY29sIGZyb20gJy4vbGliL3N1YnByb3RvY29sLmpzJztcbmltcG9ydCBXZWJTb2NrZXQgZnJvbSAnLi9saWIvd2Vic29ja2V0LmpzJztcbmltcG9ydCBXZWJTb2NrZXRTZXJ2ZXIgZnJvbSAnLi9saWIvd2Vic29ja2V0LXNlcnZlci5qcyc7XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVdlYlNvY2tldFN0cmVhbSxcbiAgZXh0ZW5zaW9uLFxuICBQZXJNZXNzYWdlRGVmbGF0ZSxcbiAgUmVjZWl2ZXIsXG4gIFNlbmRlcixcbiAgc3VicHJvdG9jb2wsXG4gIFdlYlNvY2tldCxcbiAgV2ViU29ja2V0U2VydmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWJTb2NrZXQ7XG4iLCAiaW1wb3J0IFdlYlNvY2tldCBmcm9tIFwid3NcIjtcbmNsYXNzIFdlYlNvY2tldENsaWVudCB7XG4gIF9zb2NrZXQ7XG4gIGNvbnN0cnVjdG9yKHVyaSwgcHJvdG9jb2xOYW1lKSB7XG4gICAgdGhpcy5fc29ja2V0ID0gbmV3IFdlYlNvY2tldCh1cmksIHByb3RvY29sTmFtZSk7XG4gICAgdGhpcy5fc29ja2V0LmJpbmFyeVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gIH1cbiAgb25vcGVuKGZuKSB7XG4gICAgdGhpcy5fc29ja2V0Lm9ub3BlbiA9IGZuO1xuICB9XG4gIG9uY2xvc2UoZm4pIHtcbiAgICB0aGlzLl9zb2NrZXQub25jbG9zZSA9IChldmVudCkgPT4gZm4oZXZlbnQuY29kZSwgZXZlbnQucmVhc29uKTtcbiAgfVxuICBvbmVycm9yKGZuKSB7XG4gICAgdGhpcy5fc29ja2V0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IGZuKGV2ZW50LmVycm9yKTtcbiAgfVxuICBvbm1lc3NhZ2UoZm4pIHtcbiAgICB0aGlzLl9zb2NrZXQub25tZXNzYWdlID0gKGV2ZW50KSA9PiBmbihldmVudC5kYXRhKTtcbiAgfVxuICBjbG9zZShjb2RlLCByZWFzb24pIHtcbiAgICB0aGlzLl9zb2NrZXQuY2xvc2UoY29kZSwgcmVhc29uKTtcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuICBzZW5kKGRhdGEsIF8pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fc29ja2V0LnNlbmQoZGF0YSwgKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTjtcbiAgfVxufVxuY2xhc3MgV2ViU29ja2V0Q2xpZW50RmFjdG9yeSB7XG4gIGNyZWF0ZSh1cmksIHByb3RvY29sTmFtZSkge1xuICAgIHJldHVybiBuZXcgV2ViU29ja2V0Q2xpZW50KHVyaSwgcHJvdG9jb2xOYW1lKTtcbiAgfVxufVxuZXhwb3J0IHtcbiAgV2ViU29ja2V0Q2xpZW50LFxuICBXZWJTb2NrZXRDbGllbnRGYWN0b3J5XG59O1xuIiwgImltcG9ydCB7IEFib3J0RXJyb3IgfSBmcm9tIFwiQGF6dXJlL2Fib3J0LWNvbnRyb2xsZXJcIjtcbmFzeW5jIGZ1bmN0aW9uIGFib3J0YWJsZVByb21pc2UocHJvbWlzZSwgc2lnbmFsKSB7XG4gIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgIHRocm93IG5ldyBBYm9ydEVycm9yKFwiVGhlIG9wZXJhdGlvbiB3YXMgYWJvcnRlZC5cIik7XG4gIH1cbiAgbGV0IG9uQWJvcnQ7XG4gIGNvbnN0IHAgPSBuZXcgUHJvbWlzZSgoXywgcmVqZWN0KSA9PiB7XG4gICAgb25BYm9ydCA9ICgpID0+IHtcbiAgICAgIHJlamVjdChuZXcgQWJvcnRFcnJvcihcIlRoZSBvcGVyYXRpb24gd2FzIGFib3J0ZWQuXCIpKTtcbiAgICB9O1xuICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gIH0pO1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJhY2UoW3Byb21pc2UsIHBdKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuICB9XG59XG5leHBvcnQge1xuICBhYm9ydGFibGVQcm9taXNlXG59O1xuIiwgImltcG9ydCB7IFNlbmRNZXNzYWdlRXJyb3IgfSBmcm9tIFwiLi9lcnJvcnMvaW5kZXguanNcIjtcbmltcG9ydCB7IGFib3J0YWJsZVByb21pc2UgfSBmcm9tIFwiLi91dGlscy9hYm9ydGFibGVQcm9taXNlLmpzXCI7XG5jbGFzcyBBY2tNYW5hZ2VyIHtcbiAgX2Fja0VudHJpZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBfYWNrSWQ7XG4gIGNvbnN0cnVjdG9yKGluaXRpYWxBY2tJZCA9IDApIHtcbiAgICB0aGlzLl9hY2tJZCA9IGluaXRpYWxBY2tJZDtcbiAgfVxuICByZWdpc3RlckFjayhhY2tJZCkge1xuICAgIGNvbnN0IHJlc29sdmVkQWNrSWQgPSBhY2tJZCA/PyB0aGlzLl9nZW5lcmF0ZUFja0lkKCk7XG4gICAgbGV0IGVudHJ5ID0gdGhpcy5fYWNrRW50cmllcy5nZXQocmVzb2x2ZWRBY2tJZCk7XG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgZW50cnkgPSBuZXcgQWNrRW50aXR5KHJlc29sdmVkQWNrSWQpO1xuICAgICAgdGhpcy5fYWNrRW50cmllcy5zZXQocmVzb2x2ZWRBY2tJZCwgZW50cnkpO1xuICAgIH1cbiAgICBjb25zdCBhY2tFbnRyeSA9IGVudHJ5O1xuICAgIHJldHVybiB7XG4gICAgICBhY2tJZDogcmVzb2x2ZWRBY2tJZCxcbiAgICAgIHdhaXQ6IChhYm9ydFNpZ25hbCkgPT4gdGhpcy5fd2FpdEZvckVudHJ5KGFja0VudHJ5LCBhYm9ydFNpZ25hbClcbiAgICB9O1xuICB9XG4gIHJlc29sdmVBY2soYWNrSWQsIHJlc3VsdCkge1xuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5fYWNrRW50cmllcy5nZXQoYWNrSWQpO1xuICAgIGlmICghZW50cnkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fYWNrRW50cmllcy5kZWxldGUoYWNrSWQpO1xuICAgIGVudHJ5LnJlc29sdmUocmVzdWx0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZWplY3RBY2soYWNrSWQsIHJlYXNvbikge1xuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5fYWNrRW50cmllcy5nZXQoYWNrSWQpO1xuICAgIGlmICghZW50cnkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fYWNrRW50cmllcy5kZWxldGUoYWNrSWQpO1xuICAgIGVudHJ5LnJlamVjdChyZWFzb24pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGRpc2NhcmQoYWNrSWQpIHtcbiAgICB0aGlzLl9hY2tFbnRyaWVzLmRlbGV0ZShhY2tJZCk7XG4gIH1cbiAgcmVqZWN0QWxsKGNyZWF0ZVJlYXNvbikge1xuICAgIHRoaXMuX2Fja0VudHJpZXMuZm9yRWFjaCgoZW50cnksIGFja0lkKSA9PiB7XG4gICAgICBpZiAodGhpcy5fYWNrRW50cmllcy5kZWxldGUoYWNrSWQpKSB7XG4gICAgICAgIGVudHJ5LnJlamVjdChjcmVhdGVSZWFzb24oYWNrSWQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfd2FpdEZvckVudHJ5KGVudHJ5LCBhYm9ydFNpZ25hbCkge1xuICAgIGlmICghYWJvcnRTaWduYWwpIHtcbiAgICAgIHJldHVybiBlbnRyeS5wcm9taXNlKCk7XG4gICAgfVxuICAgIHJldHVybiBhYm9ydGFibGVQcm9taXNlKGVudHJ5LnByb21pc2UoKSwgYWJvcnRTaWduYWwpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnIubmFtZSA9PT0gXCJBYm9ydEVycm9yXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNlbmRNZXNzYWdlRXJyb3IoXCJDYW5jZWxsZWQgYnkgYWJvcnRTaWduYWxcIiwgeyBhY2tJZDogZW50cnkuYWNrSWQgfSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cbiAgX2dlbmVyYXRlQWNrSWQoKSB7XG4gICAgdGhpcy5fYWNrSWQgKz0gMTtcbiAgICByZXR1cm4gdGhpcy5fYWNrSWQ7XG4gIH1cbn1cbmNsYXNzIEFja0VudGl0eSB7XG4gIGNvbnN0cnVjdG9yKGFja0lkKSB7XG4gICAgdGhpcy5hY2tJZCA9IGFja0lkO1xuICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgfVxuICBfcHJvbWlzZTtcbiAgX3Jlc29sdmU7XG4gIF9yZWplY3Q7XG4gIHByb21pc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG4gIH1cbiAgcmVzb2x2ZSh2YWx1ZSkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5fcmVzb2x2ZTtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3Jlc29sdmUgPSB2b2lkIDA7XG4gICAgdGhpcy5fcmVqZWN0ID0gdm9pZCAwO1xuICAgIGNhbGxiYWNrKHZhbHVlKTtcbiAgfVxuICByZWplY3QocmVhc29uKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLl9yZWplY3Q7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZXNvbHZlID0gdm9pZCAwO1xuICAgIHRoaXMuX3JlamVjdCA9IHZvaWQgMDtcbiAgICBjYWxsYmFjayhyZWFzb24pO1xuICB9XG59XG5leHBvcnQge1xuICBBY2tNYW5hZ2VyXG59O1xuIiwgImltcG9ydCB7IEludm9jYXRpb25FcnJvciB9IGZyb20gXCIuL2Vycm9ycy9pbmRleC5qc1wiO1xuY2xhc3MgSW52b2NhdGlvbk1hbmFnZXIge1xuICBfZW50cmllcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIF9uZXh0SWQgPSAwO1xuICByZWdpc3Rlckludm9jYXRpb24oaW52b2NhdGlvbklkKSB7XG4gICAgY29uc3QgcmVzb2x2ZWRJZCA9IGludm9jYXRpb25JZCA/PyB0aGlzLl9nZW5lcmF0ZUludm9jYXRpb25JZCgpO1xuICAgIGlmICh0aGlzLl9lbnRyaWVzLmhhcyhyZXNvbHZlZElkKSkge1xuICAgICAgdGhyb3cgbmV3IEludm9jYXRpb25FcnJvcihcIkludm9jYXRpb24gaWQgaXMgYWxyZWFkeSByZWdpc3RlcmVkLlwiLCB7XG4gICAgICAgIGludm9jYXRpb25JZDogcmVzb2x2ZWRJZFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGVudGl0eSA9IG5ldyBJbnZvY2F0aW9uRW50aXR5KHJlc29sdmVkSWQpO1xuICAgIHRoaXMuX2VudHJpZXMuc2V0KHJlc29sdmVkSWQsIGVudGl0eSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludm9jYXRpb25JZDogcmVzb2x2ZWRJZCxcbiAgICAgIHdhaXQ6IChvcHRpb25zKSA9PiB0aGlzLl93YWl0Rm9yRW50cnkoZW50aXR5LCBvcHRpb25zKVxuICAgIH07XG4gIH1cbiAgcmVzb2x2ZUludm9jYXRpb24obWVzc2FnZSkge1xuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5fZW50cmllcy5nZXQobWVzc2FnZS5pbnZvY2F0aW9uSWQpO1xuICAgIGlmICghZW50cnkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fZW50cmllcy5kZWxldGUobWVzc2FnZS5pbnZvY2F0aW9uSWQpO1xuICAgIGVudHJ5LnJlc29sdmUobWVzc2FnZSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmVqZWN0SW52b2NhdGlvbihpbnZvY2F0aW9uSWQsIHJlYXNvbikge1xuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5fZW50cmllcy5nZXQoaW52b2NhdGlvbklkKTtcbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX2VudHJpZXMuZGVsZXRlKGludm9jYXRpb25JZCk7XG4gICAgZW50cnkucmVqZWN0KHJlYXNvbik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZGlzY2FyZChpbnZvY2F0aW9uSWQpIHtcbiAgICB0aGlzLl9lbnRyaWVzLmRlbGV0ZShpbnZvY2F0aW9uSWQpO1xuICB9XG4gIHJlamVjdEFsbChjcmVhdGVSZWFzb24pIHtcbiAgICB0aGlzLl9lbnRyaWVzLmZvckVhY2goKGVudHJ5LCBpbnZvY2F0aW9uSWQpID0+IHtcbiAgICAgIGlmICh0aGlzLl9lbnRyaWVzLmRlbGV0ZShpbnZvY2F0aW9uSWQpKSB7XG4gICAgICAgIGVudHJ5LnJlamVjdChjcmVhdGVSZWFzb24oaW52b2NhdGlvbklkKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgX3dhaXRGb3JFbnRyeShlbnRyeSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHdhaXRQcm9taXNlID0gZW50cnkucHJvbWlzZSgpO1xuICAgIGNvbnN0IGFib3J0U2lnbmFsID0gb3B0aW9ucz8uYWJvcnRTaWduYWw7XG4gICAgaWYgKCFhYm9ydFNpZ25hbCkge1xuICAgICAgcmV0dXJuIHdhaXRQcm9taXNlO1xuICAgIH1cbiAgICBpZiAoYWJvcnRTaWduYWwuYWJvcnRlZCkge1xuICAgICAgaWYgKHRoaXMuX2VudHJpZXMuZGVsZXRlKGVudHJ5Lmludm9jYXRpb25JZCkpIHtcbiAgICAgICAgZW50cnkucmVqZWN0KHRoaXMuX2NyZWF0ZUFib3J0RXJyb3IoZW50cnkuaW52b2NhdGlvbklkKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gd2FpdFByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvbkFib3J0ID0gKCkgPT4ge1xuICAgICAgICBhYm9ydFNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gICAgICAgIGlmICh0aGlzLl9lbnRyaWVzLmRlbGV0ZShlbnRyeS5pbnZvY2F0aW9uSWQpKSB7XG4gICAgICAgICAgZW50cnkucmVqZWN0KHRoaXMuX2NyZWF0ZUFib3J0RXJyb3IoZW50cnkuaW52b2NhdGlvbklkKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBhYm9ydFNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gICAgICB3YWl0UHJvbWlzZS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgYWJvcnRTaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBhYm9ydFNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIF9nZW5lcmF0ZUludm9jYXRpb25JZCgpIHtcbiAgICB0aGlzLl9uZXh0SWQgKz0gMTtcbiAgICByZXR1cm4gdGhpcy5fbmV4dElkLnRvU3RyaW5nKCk7XG4gIH1cbiAgX2NyZWF0ZUFib3J0RXJyb3IoaW52b2NhdGlvbklkKSB7XG4gICAgcmV0dXJuIG5ldyBJbnZvY2F0aW9uRXJyb3IoXCJJbnZvY2F0aW9uIGNhbmNlbGxlZCBieSBhYm9ydFNpZ25hbC5cIiwge1xuICAgICAgaW52b2NhdGlvbklkXG4gICAgfSk7XG4gIH1cbn1cbmNsYXNzIEludm9jYXRpb25FbnRpdHkge1xuICBjb25zdHJ1Y3RvcihpbnZvY2F0aW9uSWQpIHtcbiAgICB0aGlzLmludm9jYXRpb25JZCA9IGludm9jYXRpb25JZDtcbiAgICB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB0aGlzLl9yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG4gIH1cbiAgX3Byb21pc2U7XG4gIF9yZXNvbHZlO1xuICBfcmVqZWN0O1xuICBwcm9taXNlKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICB9XG4gIHJlc29sdmUodmFsdWUpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuX3Jlc29sdmU7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZXNvbHZlID0gdm9pZCAwO1xuICAgIHRoaXMuX3JlamVjdCA9IHZvaWQgMDtcbiAgICBjYWxsYmFjayh2YWx1ZSk7XG4gIH1cbiAgcmVqZWN0KHJlYXNvbikge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5fcmVqZWN0O1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcmVzb2x2ZSA9IHZvaWQgMDtcbiAgICB0aGlzLl9yZWplY3QgPSB2b2lkIDA7XG4gICAgY2FsbGJhY2socmVhc29uKTtcbiAgfVxufVxuZXhwb3J0IHtcbiAgSW52b2NhdGlvbk1hbmFnZXJcbn07XG4iLCAiaW1wb3J0IGZzIGZyb20gXCJub2RlOmZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgb3MgZnJvbSBcIm5vZGU6b3NcIjtcblxuZXhwb3J0IHR5cGUgQ3JlZGVudGlhbHMgPSB7XG4gIGF6dXJlX2h1Yl91cmw6IHN0cmluZztcbiAgY2xpZW50X2lkOiBzdHJpbmc7XG4gIHJlZ2lzdHJhdGlvbl90b2tlbjogc3RyaW5nO1xuICB0b3BpY19pZGVudGlmaWVyPzogc3RyaW5nO1xuICBidmdlZXJ0X2hvc3Q/OiBzdHJpbmc7XG4gIGFjY2Vzc191cmw/OiBzdHJpbmc7XG4gIGFjY2Vzc191cmxfZXhwaXJlc19hdD86IHN0cmluZztcbn07XG5cbmZ1bmN0aW9uIGRlZmF1bHRQYXRoKCk6IHN0cmluZyB7XG4gIGNvbnN0IHhkZyA9IHByb2Nlc3MuZW52LlhER19DT05GSUdfSE9NRTtcbiAgY29uc3QgYmFzZSA9IHhkZyA/IHhkZyA6IHBhdGguam9pbihvcy5ob21lZGlyKCksIFwiLmNvbmZpZ1wiKTtcbiAgcmV0dXJuIHBhdGguam9pbihiYXNlLCBcImJ2Zy1kZWFtb25cIiwgXCJjcmVkZW50aWFscy5qc29uXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlZGVudGlhbHNQYXRoKCk6IHN0cmluZyB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5CVkdfREVBTU9OX0NSRURFTlRJQUxTID8/IGRlZmF1bHRQYXRoKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ3JlZGVudGlhbHMoKTogQ3JlZGVudGlhbHMgfCBudWxsIHtcbiAgY29uc3QgcCA9IGNyZWRlbnRpYWxzUGF0aCgpO1xuICBpZiAoIWZzLmV4aXN0c1N5bmMocCkpIHJldHVybiBudWxsO1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwLCBcInV0ZjhcIikpIGFzIENyZWRlbnRpYWxzO1xuICAgIGlmICghZGF0YS5henVyZV9odWJfdXJsIHx8ICFkYXRhLmNsaWVudF9pZCB8fCAhZGF0YS5yZWdpc3RyYXRpb25fdG9rZW4pIHJldHVybiBudWxsO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUNyZWRlbnRpYWxzKGNyZWRzOiBDcmVkZW50aWFscyk6IHN0cmluZyB7XG4gIGNvbnN0IHAgPSBjcmVkZW50aWFsc1BhdGgoKTtcbiAgZnMubWtkaXJTeW5jKHBhdGguZGlybmFtZShwKSwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gIGZzLndyaXRlRmlsZVN5bmMocCwgSlNPTi5zdHJpbmdpZnkoY3JlZHMsIG51bGwsIDIpLCB7IG1vZGU6IDBvNjAwIH0pO1xuICByZXR1cm4gcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpcGVDcmVkZW50aWFscygpOiB2b2lkIHtcbiAgY29uc3QgcCA9IGNyZWRlbnRpYWxzUGF0aCgpO1xuICBpZiAoZnMuZXhpc3RzU3luYyhwKSkgZnMudW5saW5rU3luYyhwKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSwwQ0FBQUEsVUFBQUMsU0FBQTtBQUFBLFFBQUksSUFBSSxXQUFXLENBQUM7QUFB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RUEsVUFBSSxXQUFXLElBQUk7QUFDbkIsV0FBSyxTQUFTLEVBQUUsR0FBRztBQUFBLElBQ3JCO0FBQUE7QUFBQTs7O0FDL2dCQTtBQUFBLHNDQUFBRSxVQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFNLEVBQUUsT0FBTyxJQUFJLFFBQVEsUUFBUTtBQUVuQyxRQUFNLEVBQUUsUUFBUSxJQUFJO0FBY3BCLFFBQU0sYUFBYTtBQUFBLE1BQ2pCO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUE7QUFBQSxNQUM3QztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBO0FBQUEsTUFDN0M7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQTtBQUFBLE1BQzdDO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUE7QUFBQSxNQUM3QztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxN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Q2pDLFFBQU0sT0FBTyxNQUFNO0FBQ25CLFFBQU0sUUFBUSxRQUFRLE9BQU8sUUFBUSxJQUFJO0FBQ3pDLFFBQU0sT0FBTyxLQUFLO0FBQ2xCLFNBQU87QUFDVDtBQUVBLEtBQUssRUFBRSxLQUFLLENBQUMsU0FBUyxRQUFRLEtBQUssSUFBSSxDQUFDOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJlbmFibGVkIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlBlck1lc3NhZ2VEZWZsYXRlIiwgImRhdGEiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiUGVyTWVzc2FnZURlZmxhdGUiLCAiUmVjZWl2ZXIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiUGVyTWVzc2FnZURlZmxhdGUiLCAiU2VuZGVyIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4dGVuc2lvbiIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJFdmVudEVtaXR0ZXIiLCAiVVJMIiwgIlBlck1lc3NhZ2VEZWZsYXRlIiwgIlJlY2VpdmVyIiwgIlNlbmRlciIsICJXZWJTb2NrZXQiLCAia2V5IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIldlYlNvY2tldCIsICJjcmVhdGVXZWJTb2NrZXRTdHJlYW0iLCAiZXJyIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInByb3RvY29sIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIkV2ZW50RW1pdHRlciIsICJleHRlbnNpb24iLCAiUGVyTWVzc2FnZURlZmxhdGUiLCAic3VicHJvdG9jb2wiLCAiV2ViU29ja2V0IiwgIldlYlNvY2tldFNlcnZlciIsICJwcm9jZXNzIiwgInV0aWwiLCAiZW5hYmxlZE5hbWVzcGFjZXMiLCAibG9nZ2VyIiwgImNvbnRleHQiLCAiY29udGV4dCIsICJXZWJTb2NrZXQiLCAiRXZlbnRFbWl0dGVyIiwgImltcG9ydF9ub2RlX29zIiwgInBhdGgiLCAib3MiLCAiZnMiLCAicGMiLCAicGF0aCIsICJyZWFkbGluZSJdCn0K
