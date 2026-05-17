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
  const client = new WebPubSubClient({ getClientAccessUrl: async () => hub });
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
        await client.sendEvent("pairing.request_topic", { topic_identifier: transport }, "json");
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
          await c.sendEvent("request_refresh_token", {}, "json");
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
    reconnectRetryOptions: { maxRetries: Number.MAX_SAFE_INTEGER, retryDelayInMs: 1e3, maxRetryDelayInMs: 3e4, mode: "Exponential" }
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
  }, "json");
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
  await client.sendEvent("clients.list", { topic_identifier: creds.topic_identifier }, "json");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL3BpY29jb2xvcnMvcGljb2NvbG9ycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL2NvbnN0YW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL2J1ZmZlci11dGlsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy93cy9saWIvbGltaXRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3Blcm1lc3NhZ2UtZGVmbGF0ZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3ZhbGlkYXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3dzL2xpYi9yZWNlaXZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3NlbmRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL2V2ZW50LXRhcmdldC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL2V4dGVuc2lvbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3dlYnNvY2tldC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3N0cmVhbS5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3N1YnByb3RvY29sLmpzIiwgIi4uL25vZGVfbW9kdWxlcy93cy9saWIvd2Vic29ja2V0LXNlcnZlci5qcyIsICIuLi9zcmMvY2xpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AdHlwZXNwZWMvdHMtaHR0cC1ydW50aW1lL3NyYy91dGlsL2NoZWNrRW52aXJvbm1lbnQudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BhenVyZS9hYm9ydC1jb250cm9sbGVyL3NyYy9BYm9ydEVycm9yLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvY29yZS11dGlsL3NyYy9jcmVhdGVBYm9ydGFibGVQcm9taXNlLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvY29yZS11dGlsL3NyYy9kZWxheS50cyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL3dlYlB1YlN1YkNsaWVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL2Vycm9ycy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHR5cGVzcGVjL3RzLWh0dHAtcnVudGltZS9zcmMvbG9nZ2VyL2xvZy50cyIsICIuLi9ub2RlX21vZHVsZXMvQHR5cGVzcGVjL3RzLWh0dHAtcnVudGltZS9zcmMvbG9nZ2VyL2RlYnVnLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AdHlwZXNwZWMvdHMtaHR0cC1ydW50aW1lL3NyYy9sb2dnZXIvbG9nZ2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvbG9nZ2VyL3NyYy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL2xvZ2dlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL3Byb3RvY29scy9qc29uUHJvdG9jb2xCYXNlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvd2ViLXB1YnN1Yi1jbGllbnQvZGlzdC9lc20vcHJvdG9jb2xzL3dlYlB1YlN1Ykpzb25SZWxpYWJsZVByb3RvY29sLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvd2ViLXB1YnN1Yi1jbGllbnQvZGlzdC9lc20vcHJvdG9jb2xzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy93cy93cmFwcGVyLm1qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL3dlYnNvY2tldC93ZWJzb2NrZXRDbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BhenVyZS93ZWItcHVic3ViLWNsaWVudC9kaXN0L2VzbS91dGlscy9hYm9ydGFibGVQcm9taXNlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvd2ViLXB1YnN1Yi1jbGllbnQvZGlzdC9lc20vYWNrTWFuYWdlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL2ludm9jYXRpb25NYW5hZ2VyLmpzIiwgIi4uL3NyYy9jbGkvY3JlZGVudGlhbHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImxldCBwID0gcHJvY2VzcyB8fCB7fSwgYXJndiA9IHAuYXJndiB8fCBbXSwgZW52ID0gcC5lbnYgfHwge31cbmxldCBpc0NvbG9yU3VwcG9ydGVkID1cblx0ISghIWVudi5OT19DT0xPUiB8fCBhcmd2LmluY2x1ZGVzKFwiLS1uby1jb2xvclwiKSkgJiZcblx0KCEhZW52LkZPUkNFX0NPTE9SIHx8IGFyZ3YuaW5jbHVkZXMoXCItLWNvbG9yXCIpIHx8IHAucGxhdGZvcm0gPT09IFwid2luMzJcIiB8fCAoKHAuc3Rkb3V0IHx8IHt9KS5pc1RUWSAmJiBlbnYuVEVSTSAhPT0gXCJkdW1iXCIpIHx8ICEhZW52LkNJKVxuXG5sZXQgZm9ybWF0dGVyID0gKG9wZW4sIGNsb3NlLCByZXBsYWNlID0gb3BlbikgPT5cblx0aW5wdXQgPT4ge1xuXHRcdGxldCBzdHJpbmcgPSBcIlwiICsgaW5wdXQsIGluZGV4ID0gc3RyaW5nLmluZGV4T2YoY2xvc2UsIG9wZW4ubGVuZ3RoKVxuXHRcdHJldHVybiB+aW5kZXggPyBvcGVuICsgcmVwbGFjZUNsb3NlKHN0cmluZywgY2xvc2UsIHJlcGxhY2UsIGluZGV4KSArIGNsb3NlIDogb3BlbiArIHN0cmluZyArIGNsb3NlXG5cdH1cblxubGV0IHJlcGxhY2VDbG9zZSA9IChzdHJpbmcsIGNsb3NlLCByZXBsYWNlLCBpbmRleCkgPT4ge1xuXHRsZXQgcmVzdWx0ID0gXCJcIiwgY3Vyc29yID0gMFxuXHRkbyB7XG5cdFx0cmVzdWx0ICs9IHN0cmluZy5zdWJzdHJpbmcoY3Vyc29yLCBpbmRleCkgKyByZXBsYWNlXG5cdFx0Y3Vyc29yID0gaW5kZXggKyBjbG9zZS5sZW5ndGhcblx0XHRpbmRleCA9IHN0cmluZy5pbmRleE9mKGNsb3NlLCBjdXJzb3IpXG5cdH0gd2hpbGUgKH5pbmRleClcblx0cmV0dXJuIHJlc3VsdCArIHN0cmluZy5zdWJzdHJpbmcoY3Vyc29yKVxufVxuXG5sZXQgY3JlYXRlQ29sb3JzID0gKGVuYWJsZWQgPSBpc0NvbG9yU3VwcG9ydGVkKSA9PiB7XG5cdGxldCBmID0gZW5hYmxlZCA/IGZvcm1hdHRlciA6ICgpID0+IFN0cmluZ1xuXHRyZXR1cm4ge1xuXHRcdGlzQ29sb3JTdXBwb3J0ZWQ6IGVuYWJsZWQsXG5cdFx0cmVzZXQ6IGYoXCJcXHgxYlswbVwiLCBcIlxceDFiWzBtXCIpLFxuXHRcdGJvbGQ6IGYoXCJcXHgxYlsxbVwiLCBcIlxceDFiWzIybVwiLCBcIlxceDFiWzIybVxceDFiWzFtXCIpLFxuXHRcdGRpbTogZihcIlxceDFiWzJtXCIsIFwiXFx4MWJbMjJtXCIsIFwiXFx4MWJbMjJtXFx4MWJbMm1cIiksXG5cdFx0aXRhbGljOiBmKFwiXFx4MWJbM21cIiwgXCJcXHgxYlsyM21cIiksXG5cdFx0dW5kZXJsaW5lOiBmKFwiXFx4MWJbNG1cIiwgXCJcXHgxYlsyNG1cIiksXG5cdFx0aW52ZXJzZTogZihcIlxceDFiWzdtXCIsIFwiXFx4MWJbMjdtXCIpLFxuXHRcdGhpZGRlbjogZihcIlxceDFiWzhtXCIsIFwiXFx4MWJbMjhtXCIpLFxuXHRcdHN0cmlrZXRocm91Z2g6IGYoXCJcXHgxYls5bVwiLCBcIlxceDFiWzI5bVwiKSxcblxuXHRcdGJsYWNrOiBmKFwiXFx4MWJbMzBtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdHJlZDogZihcIlxceDFiWzMxbVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRncmVlbjogZihcIlxceDFiWzMybVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHR5ZWxsb3c6IGYoXCJcXHgxYlszM21cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0Ymx1ZTogZihcIlxceDFiWzM0bVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRtYWdlbnRhOiBmKFwiXFx4MWJbMzVtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdGN5YW46IGYoXCJcXHgxYlszNm1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0d2hpdGU6IGYoXCJcXHgxYlszN21cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0Z3JheTogZihcIlxceDFiWzkwbVwiLCBcIlxceDFiWzM5bVwiKSxcblxuXHRcdGJnQmxhY2s6IGYoXCJcXHgxYls0MG1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdSZWQ6IGYoXCJcXHgxYls0MW1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdHcmVlbjogZihcIlxceDFiWzQybVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ1llbGxvdzogZihcIlxceDFiWzQzbVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ0JsdWU6IGYoXCJcXHgxYls0NG1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdNYWdlbnRhOiBmKFwiXFx4MWJbNDVtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnQ3lhbjogZihcIlxceDFiWzQ2bVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ1doaXRlOiBmKFwiXFx4MWJbNDdtXCIsIFwiXFx4MWJbNDltXCIpLFxuXG5cdFx0YmxhY2tCcmlnaHQ6IGYoXCJcXHgxYls5MG1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0cmVkQnJpZ2h0OiBmKFwiXFx4MWJbOTFtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdGdyZWVuQnJpZ2h0OiBmKFwiXFx4MWJbOTJtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdHllbGxvd0JyaWdodDogZihcIlxceDFiWzkzbVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRibHVlQnJpZ2h0OiBmKFwiXFx4MWJbOTRtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdG1hZ2VudGFCcmlnaHQ6IGYoXCJcXHgxYls5NW1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0Y3lhbkJyaWdodDogZihcIlxceDFiWzk2bVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHR3aGl0ZUJyaWdodDogZihcIlxceDFiWzk3bVwiLCBcIlxceDFiWzM5bVwiKSxcblxuXHRcdGJnQmxhY2tCcmlnaHQ6IGYoXCJcXHgxYlsxMDBtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnUmVkQnJpZ2h0OiBmKFwiXFx4MWJbMTAxbVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ0dyZWVuQnJpZ2h0OiBmKFwiXFx4MWJbMTAybVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ1llbGxvd0JyaWdodDogZihcIlxceDFiWzEwM21cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdCbHVlQnJpZ2h0OiBmKFwiXFx4MWJbMTA0bVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ01hZ2VudGFCcmlnaHQ6IGYoXCJcXHgxYlsxMDVtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnQ3lhbkJyaWdodDogZihcIlxceDFiWzEwNm1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdXaGl0ZUJyaWdodDogZihcIlxceDFiWzEwN21cIiwgXCJcXHgxYls0OW1cIiksXG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDb2xvcnMoKVxubW9kdWxlLmV4cG9ydHMuY3JlYXRlQ29sb3JzID0gY3JlYXRlQ29sb3JzXG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBCSU5BUllfVFlQRVMgPSBbJ25vZGVidWZmZXInLCAnYXJyYXlidWZmZXInLCAnZnJhZ21lbnRzJ107XG5jb25zdCBoYXNCbG9iID0gdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnO1xuXG5pZiAoaGFzQmxvYikgQklOQVJZX1RZUEVTLnB1c2goJ2Jsb2InKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEJJTkFSWV9UWVBFUyxcbiAgQ0xPU0VfVElNRU9VVDogMzAwMDAsXG4gIEVNUFRZX0JVRkZFUjogQnVmZmVyLmFsbG9jKDApLFxuICBHVUlEOiAnMjU4RUFGQTUtRTkxNC00N0RBLTk1Q0EtQzVBQjBEQzg1QjExJyxcbiAgaGFzQmxvYixcbiAga0Zvck9uRXZlbnRBdHRyaWJ1dGU6IFN5bWJvbCgna0lzRm9yT25FdmVudEF0dHJpYnV0ZScpLFxuICBrTGlzdGVuZXI6IFN5bWJvbCgna0xpc3RlbmVyJyksXG4gIGtTdGF0dXNDb2RlOiBTeW1ib2woJ3N0YXR1cy1jb2RlJyksXG4gIGtXZWJTb2NrZXQ6IFN5bWJvbCgnd2Vic29ja2V0JyksXG4gIE5PT1A6ICgpID0+IHt9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBFTVBUWV9CVUZGRVIgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IEZhc3RCdWZmZXIgPSBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdO1xuXG4vKipcbiAqIE1lcmdlcyBhbiBhcnJheSBvZiBidWZmZXJzIGludG8gYSBuZXcgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyW119IGxpc3QgVGhlIGFycmF5IG9mIGJ1ZmZlcnMgdG8gY29uY2F0XG4gKiBAcGFyYW0ge051bWJlcn0gdG90YWxMZW5ndGggVGhlIHRvdGFsIGxlbmd0aCBvZiBidWZmZXJzIGluIHRoZSBsaXN0XG4gKiBAcmV0dXJuIHtCdWZmZXJ9IFRoZSByZXN1bHRpbmcgYnVmZmVyXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGNvbmNhdChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHJldHVybiBFTVBUWV9CVUZGRVI7XG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkgcmV0dXJuIGxpc3RbMF07XG5cbiAgY29uc3QgdGFyZ2V0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKHRvdGFsTGVuZ3RoKTtcbiAgbGV0IG9mZnNldCA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYnVmID0gbGlzdFtpXTtcbiAgICB0YXJnZXQuc2V0KGJ1Ziwgb2Zmc2V0KTtcbiAgICBvZmZzZXQgKz0gYnVmLmxlbmd0aDtcbiAgfVxuXG4gIGlmIChvZmZzZXQgPCB0b3RhbExlbmd0aCkge1xuICAgIHJldHVybiBuZXcgRmFzdEJ1ZmZlcih0YXJnZXQuYnVmZmVyLCB0YXJnZXQuYnl0ZU9mZnNldCwgb2Zmc2V0KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogTWFza3MgYSBidWZmZXIgdXNpbmcgdGhlIGdpdmVuIG1hc2suXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IHNvdXJjZSBUaGUgYnVmZmVyIHRvIG1hc2tcbiAqIEBwYXJhbSB7QnVmZmVyfSBtYXNrIFRoZSBtYXNrIHRvIHVzZVxuICogQHBhcmFtIHtCdWZmZXJ9IG91dHB1dCBUaGUgYnVmZmVyIHdoZXJlIHRvIHN0b3JlIHRoZSByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgVGhlIG9mZnNldCBhdCB3aGljaCB0byBzdGFydCB3cml0aW5nXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgYnl0ZXMgdG8gbWFzay5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gX21hc2soc291cmNlLCBtYXNrLCBvdXRwdXQsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRbb2Zmc2V0ICsgaV0gPSBzb3VyY2VbaV0gXiBtYXNrW2kgJiAzXTtcbiAgfVxufVxuXG4vKipcbiAqIFVubWFza3MgYSBidWZmZXIgdXNpbmcgdGhlIGdpdmVuIG1hc2suXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIHVubWFza1xuICogQHBhcmFtIHtCdWZmZXJ9IG1hc2sgVGhlIG1hc2sgdG8gdXNlXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIF91bm1hc2soYnVmZmVyLCBtYXNrKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmZmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgYnVmZmVyW2ldIF49IG1hc2tbaSAmIDNdO1xuICB9XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBidWZmZXIgdG8gYW4gYEFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmIFRoZSBidWZmZXIgdG8gY29udmVydFxuICogQHJldHVybiB7QXJyYXlCdWZmZXJ9IENvbnZlcnRlZCBidWZmZXJcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdG9BcnJheUJ1ZmZlcihidWYpIHtcbiAgaWYgKGJ1Zi5sZW5ndGggPT09IGJ1Zi5idWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBidWYuYnVmZmVyO1xuICB9XG5cbiAgcmV0dXJuIGJ1Zi5idWZmZXIuc2xpY2UoYnVmLmJ5dGVPZmZzZXQsIGJ1Zi5ieXRlT2Zmc2V0ICsgYnVmLmxlbmd0aCk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYGRhdGFgIHRvIGEgYEJ1ZmZlcmAuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRhIFRoZSBkYXRhIHRvIGNvbnZlcnRcbiAqIEByZXR1cm4ge0J1ZmZlcn0gVGhlIGJ1ZmZlclxuICogQHRocm93cyB7VHlwZUVycm9yfVxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB0b0J1ZmZlcihkYXRhKSB7XG4gIHRvQnVmZmVyLnJlYWRPbmx5ID0gdHJ1ZTtcblxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKGRhdGEpKSByZXR1cm4gZGF0YTtcblxuICBsZXQgYnVmO1xuXG4gIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICBidWYgPSBuZXcgRmFzdEJ1ZmZlcihkYXRhKTtcbiAgfSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkpIHtcbiAgICBidWYgPSBuZXcgRmFzdEJ1ZmZlcihkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGgpO1xuICB9IGVsc2Uge1xuICAgIGJ1ZiA9IEJ1ZmZlci5mcm9tKGRhdGEpO1xuICAgIHRvQnVmZmVyLnJlYWRPbmx5ID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gYnVmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29uY2F0LFxuICBtYXNrOiBfbWFzayxcbiAgdG9BcnJheUJ1ZmZlcixcbiAgdG9CdWZmZXIsXG4gIHVubWFzazogX3VubWFza1xufTtcblxuLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovXG5pZiAoIXByb2Nlc3MuZW52LldTX05PX0JVRkZFUl9VVElMKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYnVmZmVyVXRpbCA9IHJlcXVpcmUoJ2J1ZmZlcnV0aWwnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzLm1hc2sgPSBmdW5jdGlvbiAoc291cmNlLCBtYXNrLCBvdXRwdXQsIG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICBpZiAobGVuZ3RoIDwgNDgpIF9tYXNrKHNvdXJjZSwgbWFzaywgb3V0cHV0LCBvZmZzZXQsIGxlbmd0aCk7XG4gICAgICBlbHNlIGJ1ZmZlclV0aWwubWFzayhzb3VyY2UsIG1hc2ssIG91dHB1dCwgb2Zmc2V0LCBsZW5ndGgpO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0cy51bm1hc2sgPSBmdW5jdGlvbiAoYnVmZmVyLCBtYXNrKSB7XG4gICAgICBpZiAoYnVmZmVyLmxlbmd0aCA8IDMyKSBfdW5tYXNrKGJ1ZmZlciwgbWFzayk7XG4gICAgICBlbHNlIGJ1ZmZlclV0aWwudW5tYXNrKGJ1ZmZlciwgbWFzayk7XG4gICAgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIENvbnRpbnVlIHJlZ2FyZGxlc3Mgb2YgdGhlIGVycm9yLlxuICB9XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBrRG9uZSA9IFN5bWJvbCgna0RvbmUnKTtcbmNvbnN0IGtSdW4gPSBTeW1ib2woJ2tSdW4nKTtcblxuLyoqXG4gKiBBIHZlcnkgc2ltcGxlIGpvYiBxdWV1ZSB3aXRoIGFkanVzdGFibGUgY29uY3VycmVuY3kuIEFkYXB0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL1NUUk1ML2FzeW5jLWxpbWl0ZXJcbiAqL1xuY2xhc3MgTGltaXRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGBMaW1pdGVyYC5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtjb25jdXJyZW5jeT1JbmZpbml0eV0gVGhlIG1heGltdW0gbnVtYmVyIG9mIGpvYnMgYWxsb3dlZFxuICAgKiAgICAgdG8gcnVuIGNvbmN1cnJlbnRseVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uY3VycmVuY3kpIHtcbiAgICB0aGlzW2tEb25lXSA9ICgpID0+IHtcbiAgICAgIHRoaXMucGVuZGluZy0tO1xuICAgICAgdGhpc1trUnVuXSgpO1xuICAgIH07XG4gICAgdGhpcy5jb25jdXJyZW5jeSA9IGNvbmN1cnJlbmN5IHx8IEluZmluaXR5O1xuICAgIHRoaXMuam9icyA9IFtdO1xuICAgIHRoaXMucGVuZGluZyA9IDA7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGpvYiB0byB0aGUgcXVldWUuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGpvYiBUaGUgam9iIHRvIHJ1blxuICAgKiBAcHVibGljXG4gICAqL1xuICBhZGQoam9iKSB7XG4gICAgdGhpcy5qb2JzLnB1c2goam9iKTtcbiAgICB0aGlzW2tSdW5dKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGpvYiBmcm9tIHRoZSBxdWV1ZSBhbmQgcnVucyBpdCBpZiBwb3NzaWJsZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFtrUnVuXSgpIHtcbiAgICBpZiAodGhpcy5wZW5kaW5nID09PSB0aGlzLmNvbmN1cnJlbmN5KSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5qb2JzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgam9iID0gdGhpcy5qb2JzLnNoaWZ0KCk7XG5cbiAgICAgIHRoaXMucGVuZGluZysrO1xuICAgICAgam9iKHRoaXNba0RvbmVdKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW1pdGVyO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgemxpYiA9IHJlcXVpcmUoJ3psaWInKTtcblxuY29uc3QgYnVmZmVyVXRpbCA9IHJlcXVpcmUoJy4vYnVmZmVyLXV0aWwnKTtcbmNvbnN0IExpbWl0ZXIgPSByZXF1aXJlKCcuL2xpbWl0ZXInKTtcbmNvbnN0IHsga1N0YXR1c0NvZGUgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IEZhc3RCdWZmZXIgPSBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdO1xuY29uc3QgVFJBSUxFUiA9IEJ1ZmZlci5mcm9tKFsweDAwLCAweDAwLCAweGZmLCAweGZmXSk7XG5jb25zdCBrUGVyTWVzc2FnZURlZmxhdGUgPSBTeW1ib2woJ3Blcm1lc3NhZ2UtZGVmbGF0ZScpO1xuY29uc3Qga1RvdGFsTGVuZ3RoID0gU3ltYm9sKCd0b3RhbC1sZW5ndGgnKTtcbmNvbnN0IGtDYWxsYmFjayA9IFN5bWJvbCgnY2FsbGJhY2snKTtcbmNvbnN0IGtCdWZmZXJzID0gU3ltYm9sKCdidWZmZXJzJyk7XG5jb25zdCBrRXJyb3IgPSBTeW1ib2woJ2Vycm9yJyk7XG5cbi8vXG4vLyBXZSBsaW1pdCB6bGliIGNvbmN1cnJlbmN5LCB3aGljaCBwcmV2ZW50cyBzZXZlcmUgbWVtb3J5IGZyYWdtZW50YXRpb25cbi8vIGFzIGRvY3VtZW50ZWQgaW4gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2lzc3Vlcy84ODcxI2lzc3VlY29tbWVudC0yNTA5MTU5MTNcbi8vIGFuZCBodHRwczovL2dpdGh1Yi5jb20vd2Vic29ja2V0cy93cy9pc3N1ZXMvMTIwMlxuLy9cbi8vIEludGVudGlvbmFsbHkgZ2xvYmFsOyBpdCdzIHRoZSBnbG9iYWwgdGhyZWFkIHBvb2wgdGhhdCdzIGFuIGlzc3VlLlxuLy9cbmxldCB6bGliTGltaXRlcjtcblxuLyoqXG4gKiBwZXJtZXNzYWdlLWRlZmxhdGUgaW1wbGVtZW50YXRpb24uXG4gKi9cbmNsYXNzIFBlck1lc3NhZ2VEZWZsYXRlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBQZXJNZXNzYWdlRGVmbGF0ZSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBDb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgICogQHBhcmFtIHsoQm9vbGVhbnxOdW1iZXIpfSBbb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzXSBBZHZlcnRpc2Ugc3VwcG9ydFxuICAgKiAgICAgZm9yLCBvciByZXF1ZXN0LCBhIGN1c3RvbSBjbGllbnQgd2luZG93IHNpemVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jbGllbnROb0NvbnRleHRUYWtlb3Zlcj1mYWxzZV0gQWR2ZXJ0aXNlL1xuICAgKiAgICAgYWNrbm93bGVkZ2UgZGlzYWJsaW5nIG9mIGNsaWVudCBjb250ZXh0IHRha2VvdmVyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5jb25jdXJyZW5jeUxpbWl0PTEwXSBUaGUgbnVtYmVyIG9mIGNvbmN1cnJlbnRcbiAgICogICAgIGNhbGxzIHRvIHpsaWJcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pc1NlcnZlcj1mYWxzZV0gQ3JlYXRlIHRoZSBpbnN0YW5jZSBpbiBlaXRoZXJcbiAgICogICAgIHNlcnZlciBvciBjbGllbnQgbW9kZVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMubWF4UGF5bG9hZD0wXSBUaGUgbWF4aW11bSBhbGxvd2VkIG1lc3NhZ2UgbGVuZ3RoXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TnVtYmVyKX0gW29wdGlvbnMuc2VydmVyTWF4V2luZG93Qml0c10gUmVxdWVzdC9jb25maXJtIHRoZVxuICAgKiAgICAgdXNlIG9mIGEgY3VzdG9tIHNlcnZlciB3aW5kb3cgc2l6ZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnNlcnZlck5vQ29udGV4dFRha2VvdmVyPWZhbHNlXSBSZXF1ZXN0L2FjY2VwdFxuICAgKiAgICAgZGlzYWJsaW5nIG9mIHNlcnZlciBjb250ZXh0IHRha2VvdmVyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy50aHJlc2hvbGQ9MTAyNF0gU2l6ZSAoaW4gYnl0ZXMpIGJlbG93IHdoaWNoXG4gICAqICAgICBtZXNzYWdlcyBzaG91bGQgbm90IGJlIGNvbXByZXNzZWQgaWYgY29udGV4dCB0YWtlb3ZlciBpcyBkaXNhYmxlZFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuemxpYkRlZmxhdGVPcHRpb25zXSBPcHRpb25zIHRvIHBhc3MgdG8gemxpYiBvblxuICAgKiAgICAgZGVmbGF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuemxpYkluZmxhdGVPcHRpb25zXSBPcHRpb25zIHRvIHBhc3MgdG8gemxpYiBvblxuICAgKiAgICAgaW5mbGF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHRoaXMuX3RocmVzaG9sZCA9XG4gICAgICB0aGlzLl9vcHRpb25zLnRocmVzaG9sZCAhPT0gdW5kZWZpbmVkID8gdGhpcy5fb3B0aW9ucy50aHJlc2hvbGQgOiAxMDI0O1xuICAgIHRoaXMuX21heFBheWxvYWQgPSB0aGlzLl9vcHRpb25zLm1heFBheWxvYWQgfCAwO1xuICAgIHRoaXMuX2lzU2VydmVyID0gISF0aGlzLl9vcHRpb25zLmlzU2VydmVyO1xuICAgIHRoaXMuX2RlZmxhdGUgPSBudWxsO1xuICAgIHRoaXMuX2luZmxhdGUgPSBudWxsO1xuXG4gICAgdGhpcy5wYXJhbXMgPSBudWxsO1xuXG4gICAgaWYgKCF6bGliTGltaXRlcikge1xuICAgICAgY29uc3QgY29uY3VycmVuY3kgPVxuICAgICAgICB0aGlzLl9vcHRpb25zLmNvbmN1cnJlbmN5TGltaXQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gdGhpcy5fb3B0aW9ucy5jb25jdXJyZW5jeUxpbWl0XG4gICAgICAgICAgOiAxMDtcbiAgICAgIHpsaWJMaW1pdGVyID0gbmV3IExpbWl0ZXIoY29uY3VycmVuY3kpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBleHRlbnNpb25OYW1lKCkge1xuICAgIHJldHVybiAncGVybWVzc2FnZS1kZWZsYXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIG5lZ290aWF0aW9uIG9mZmVyLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEV4dGVuc2lvbiBwYXJhbWV0ZXJzXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIG9mZmVyKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuc2VydmVyTm9Db250ZXh0VGFrZW92ZXIpIHtcbiAgICAgIHBhcmFtcy5zZXJ2ZXJfbm9fY29udGV4dF90YWtlb3ZlciA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vcHRpb25zLmNsaWVudE5vQ29udGV4dFRha2VvdmVyKSB7XG4gICAgICBwYXJhbXMuY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5zZXJ2ZXJNYXhXaW5kb3dCaXRzKSB7XG4gICAgICBwYXJhbXMuc2VydmVyX21heF93aW5kb3dfYml0cyA9IHRoaXMuX29wdGlvbnMuc2VydmVyTWF4V2luZG93Qml0cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cykge1xuICAgICAgcGFyYW1zLmNsaWVudF9tYXhfd2luZG93X2JpdHMgPSB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHM7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMgPT0gbnVsbCkge1xuICAgICAgcGFyYW1zLmNsaWVudF9tYXhfd2luZG93X2JpdHMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0IGFuIGV4dGVuc2lvbiBuZWdvdGlhdGlvbiBvZmZlci9yZXNwb25zZS5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gY29uZmlndXJhdGlvbnMgVGhlIGV4dGVuc2lvbiBuZWdvdGlhdGlvbiBvZmZlcnMvcmVwb25zZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEFjY2VwdGVkIGNvbmZpZ3VyYXRpb25cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgYWNjZXB0KGNvbmZpZ3VyYXRpb25zKSB7XG4gICAgY29uZmlndXJhdGlvbnMgPSB0aGlzLm5vcm1hbGl6ZVBhcmFtcyhjb25maWd1cmF0aW9ucyk7XG5cbiAgICB0aGlzLnBhcmFtcyA9IHRoaXMuX2lzU2VydmVyXG4gICAgICA/IHRoaXMuYWNjZXB0QXNTZXJ2ZXIoY29uZmlndXJhdGlvbnMpXG4gICAgICA6IHRoaXMuYWNjZXB0QXNDbGllbnQoY29uZmlndXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2VzIGFsbCByZXNvdXJjZXMgdXNlZCBieSB0aGUgZXh0ZW5zaW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBjbGVhbnVwKCkge1xuICAgIGlmICh0aGlzLl9pbmZsYXRlKSB7XG4gICAgICB0aGlzLl9pbmZsYXRlLmNsb3NlKCk7XG4gICAgICB0aGlzLl9pbmZsYXRlID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGVmbGF0ZSkge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLl9kZWZsYXRlW2tDYWxsYmFja107XG5cbiAgICAgIHRoaXMuX2RlZmxhdGUuY2xvc2UoKTtcbiAgICAgIHRoaXMuX2RlZmxhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soXG4gICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ1RoZSBkZWZsYXRlIHN0cmVhbSB3YXMgY2xvc2VkIHdoaWxlIGRhdGEgd2FzIGJlaW5nIHByb2Nlc3NlZCdcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqICBBY2NlcHQgYW4gZXh0ZW5zaW9uIG5lZ290aWF0aW9uIG9mZmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBvZmZlcnMgVGhlIGV4dGVuc2lvbiBuZWdvdGlhdGlvbiBvZmZlcnNcbiAgICogQHJldHVybiB7T2JqZWN0fSBBY2NlcHRlZCBjb25maWd1cmF0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhY2NlcHRBc1NlcnZlcihvZmZlcnMpIHtcbiAgICBjb25zdCBvcHRzID0gdGhpcy5fb3B0aW9ucztcbiAgICBjb25zdCBhY2NlcHRlZCA9IG9mZmVycy5maW5kKChwYXJhbXMpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgKG9wdHMuc2VydmVyTm9Db250ZXh0VGFrZW92ZXIgPT09IGZhbHNlICYmXG4gICAgICAgICAgcGFyYW1zLnNlcnZlcl9ub19jb250ZXh0X3Rha2VvdmVyKSB8fFxuICAgICAgICAocGFyYW1zLnNlcnZlcl9tYXhfd2luZG93X2JpdHMgJiZcbiAgICAgICAgICAob3B0cy5zZXJ2ZXJNYXhXaW5kb3dCaXRzID09PSBmYWxzZSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBvcHRzLnNlcnZlck1heFdpbmRvd0JpdHMgPT09ICdudW1iZXInICYmXG4gICAgICAgICAgICAgIG9wdHMuc2VydmVyTWF4V2luZG93Qml0cyA+IHBhcmFtcy5zZXJ2ZXJfbWF4X3dpbmRvd19iaXRzKSkpIHx8XG4gICAgICAgICh0eXBlb2Ygb3B0cy5jbGllbnRNYXhXaW5kb3dCaXRzID09PSAnbnVtYmVyJyAmJlxuICAgICAgICAgICFwYXJhbXMuY2xpZW50X21heF93aW5kb3dfYml0cylcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgaWYgKCFhY2NlcHRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb25lIG9mIHRoZSBleHRlbnNpb24gb2ZmZXJzIGNhbiBiZSBhY2NlcHRlZCcpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnNlcnZlck5vQ29udGV4dFRha2VvdmVyKSB7XG4gICAgICBhY2NlcHRlZC5zZXJ2ZXJfbm9fY29udGV4dF90YWtlb3ZlciA9IHRydWU7XG4gICAgfVxuICAgIGlmIChvcHRzLmNsaWVudE5vQ29udGV4dFRha2VvdmVyKSB7XG4gICAgICBhY2NlcHRlZC5jbGllbnRfbm9fY29udGV4dF90YWtlb3ZlciA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0cy5zZXJ2ZXJNYXhXaW5kb3dCaXRzID09PSAnbnVtYmVyJykge1xuICAgICAgYWNjZXB0ZWQuc2VydmVyX21heF93aW5kb3dfYml0cyA9IG9wdHMuc2VydmVyTWF4V2luZG93Qml0cztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRzLmNsaWVudE1heFdpbmRvd0JpdHMgPT09ICdudW1iZXInKSB7XG4gICAgICBhY2NlcHRlZC5jbGllbnRfbWF4X3dpbmRvd19iaXRzID0gb3B0cy5jbGllbnRNYXhXaW5kb3dCaXRzO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBhY2NlcHRlZC5jbGllbnRfbWF4X3dpbmRvd19iaXRzID09PSB0cnVlIHx8XG4gICAgICBvcHRzLmNsaWVudE1heFdpbmRvd0JpdHMgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICBkZWxldGUgYWNjZXB0ZWQuY2xpZW50X21heF93aW5kb3dfYml0cztcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjZXB0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0IHRoZSBleHRlbnNpb24gbmVnb3RpYXRpb24gcmVzcG9uc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHJlc3BvbnNlIFRoZSBleHRlbnNpb24gbmVnb3RpYXRpb24gcmVzcG9uc2VcbiAgICogQHJldHVybiB7T2JqZWN0fSBBY2NlcHRlZCBjb25maWd1cmF0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhY2NlcHRBc0NsaWVudChyZXNwb25zZSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHJlc3BvbnNlWzBdO1xuXG4gICAgaWYgKFxuICAgICAgdGhpcy5fb3B0aW9ucy5jbGllbnROb0NvbnRleHRUYWtlb3ZlciA9PT0gZmFsc2UgJiZcbiAgICAgIHBhcmFtcy5jbGllbnRfbm9fY29udGV4dF90YWtlb3ZlclxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIHBhcmFtZXRlciBcImNsaWVudF9ub19jb250ZXh0X3Rha2VvdmVyXCInKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcGFyYW1zLmNsaWVudF9tYXhfd2luZG93X2JpdHMgPSB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHM7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cyA9PT0gZmFsc2UgfHxcbiAgICAgICh0eXBlb2YgdGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzID09PSAnbnVtYmVyJyAmJlxuICAgICAgICBwYXJhbXMuY2xpZW50X21heF93aW5kb3dfYml0cyA+IHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cylcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1VuZXhwZWN0ZWQgb3IgaW52YWxpZCBwYXJhbWV0ZXIgXCJjbGllbnRfbWF4X3dpbmRvd19iaXRzXCInXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogTm9ybWFsaXplIHBhcmFtZXRlcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGNvbmZpZ3VyYXRpb25zIFRoZSBleHRlbnNpb24gbmVnb3RpYXRpb24gb2ZmZXJzL3JlcG9uc2VcbiAgICogQHJldHVybiB7QXJyYXl9IFRoZSBvZmZlcnMvcmVzcG9uc2Ugd2l0aCBub3JtYWxpemVkIHBhcmFtZXRlcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIG5vcm1hbGl6ZVBhcmFtcyhjb25maWd1cmF0aW9ucykge1xuICAgIGNvbmZpZ3VyYXRpb25zLmZvckVhY2goKHBhcmFtcykgPT4ge1xuICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gcGFyYW1zW2tleV07XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciBcIiR7a2V5fVwiIG11c3QgaGF2ZSBvbmx5IGEgc2luZ2xlIHZhbHVlYCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IHZhbHVlWzBdO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdjbGllbnRfbWF4X3dpbmRvd19iaXRzJykge1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gK3ZhbHVlO1xuICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKG51bSkgfHwgbnVtIDwgOCB8fCBudW0gPiAxNSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAgIGBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgXCIke2tleX1cIjogJHt2YWx1ZX1gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IG51bTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1NlcnZlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgYEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciBcIiR7a2V5fVwiOiAke3ZhbHVlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3NlcnZlcl9tYXhfd2luZG93X2JpdHMnKSB7XG4gICAgICAgICAgY29uc3QgbnVtID0gK3ZhbHVlO1xuICAgICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihudW0pIHx8IG51bSA8IDggfHwgbnVtID4gMTUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgIGBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgXCIke2tleX1cIjogJHt2YWx1ZX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZSA9IG51bTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBrZXkgPT09ICdjbGllbnRfbm9fY29udGV4dF90YWtlb3ZlcicgfHxcbiAgICAgICAgICBrZXkgPT09ICdzZXJ2ZXJfbm9fY29udGV4dF90YWtlb3ZlcidcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICBgSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyIFwiJHtrZXl9XCI6ICR7dmFsdWV9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHBhcmFtZXRlciBcIiR7a2V5fVwiYCk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29uZmlndXJhdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogRGVjb21wcmVzcyBkYXRhLiBDb25jdXJyZW5jeSBsaW1pdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBDb21wcmVzc2VkIGRhdGFcbiAgICogQHBhcmFtIHtCb29sZWFufSBmaW4gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgdGhlIGxhc3QgZnJhZ21lbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZGVjb21wcmVzcyhkYXRhLCBmaW4sIGNhbGxiYWNrKSB7XG4gICAgemxpYkxpbWl0ZXIuYWRkKChkb25lKSA9PiB7XG4gICAgICB0aGlzLl9kZWNvbXByZXNzKGRhdGEsIGZpbiwgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHJlc3MgZGF0YS4gQ29uY3VycmVuY3kgbGltaXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHsoQnVmZmVyfFN0cmluZyl9IGRhdGEgRGF0YSB0byBjb21wcmVzc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZpbiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhpcyBpcyB0aGUgbGFzdCBmcmFnbWVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFja1xuICAgKiBAcHVibGljXG4gICAqL1xuICBjb21wcmVzcyhkYXRhLCBmaW4sIGNhbGxiYWNrKSB7XG4gICAgemxpYkxpbWl0ZXIuYWRkKChkb25lKSA9PiB7XG4gICAgICB0aGlzLl9jb21wcmVzcyhkYXRhLCBmaW4sIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICBkb25lKCk7XG4gICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY29tcHJlc3MgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgQ29tcHJlc3NlZCBkYXRhXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmluIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGlzIHRoZSBsYXN0IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZGVjb21wcmVzcyhkYXRhLCBmaW4sIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLl9pc1NlcnZlciA/ICdjbGllbnQnIDogJ3NlcnZlcic7XG5cbiAgICBpZiAoIXRoaXMuX2luZmxhdGUpIHtcbiAgICAgIGNvbnN0IGtleSA9IGAke2VuZHBvaW50fV9tYXhfd2luZG93X2JpdHNgO1xuICAgICAgY29uc3Qgd2luZG93Qml0cyA9XG4gICAgICAgIHR5cGVvZiB0aGlzLnBhcmFtc1trZXldICE9PSAnbnVtYmVyJ1xuICAgICAgICAgID8gemxpYi5aX0RFRkFVTFRfV0lORE9XQklUU1xuICAgICAgICAgIDogdGhpcy5wYXJhbXNba2V5XTtcblxuICAgICAgdGhpcy5faW5mbGF0ZSA9IHpsaWIuY3JlYXRlSW5mbGF0ZVJhdyh7XG4gICAgICAgIC4uLnRoaXMuX29wdGlvbnMuemxpYkluZmxhdGVPcHRpb25zLFxuICAgICAgICB3aW5kb3dCaXRzXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2luZmxhdGVba1Blck1lc3NhZ2VEZWZsYXRlXSA9IHRoaXM7XG4gICAgICB0aGlzLl9pbmZsYXRlW2tUb3RhbExlbmd0aF0gPSAwO1xuICAgICAgdGhpcy5faW5mbGF0ZVtrQnVmZmVyc10gPSBbXTtcbiAgICAgIHRoaXMuX2luZmxhdGUub24oJ2Vycm9yJywgaW5mbGF0ZU9uRXJyb3IpO1xuICAgICAgdGhpcy5faW5mbGF0ZS5vbignZGF0YScsIGluZmxhdGVPbkRhdGEpO1xuICAgIH1cblxuICAgIHRoaXMuX2luZmxhdGVba0NhbGxiYWNrXSA9IGNhbGxiYWNrO1xuXG4gICAgdGhpcy5faW5mbGF0ZS53cml0ZShkYXRhKTtcbiAgICBpZiAoZmluKSB0aGlzLl9pbmZsYXRlLndyaXRlKFRSQUlMRVIpO1xuXG4gICAgdGhpcy5faW5mbGF0ZS5mbHVzaCgoKSA9PiB7XG4gICAgICBjb25zdCBlcnIgPSB0aGlzLl9pbmZsYXRlW2tFcnJvcl07XG5cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhpcy5faW5mbGF0ZS5jbG9zZSgpO1xuICAgICAgICB0aGlzLl9pbmZsYXRlID0gbnVsbDtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYnVmZmVyVXRpbC5jb25jYXQoXG4gICAgICAgIHRoaXMuX2luZmxhdGVba0J1ZmZlcnNdLFxuICAgICAgICB0aGlzLl9pbmZsYXRlW2tUb3RhbExlbmd0aF1cbiAgICAgICk7XG5cbiAgICAgIGlmICh0aGlzLl9pbmZsYXRlLl9yZWFkYWJsZVN0YXRlLmVuZEVtaXR0ZWQpIHtcbiAgICAgICAgdGhpcy5faW5mbGF0ZS5jbG9zZSgpO1xuICAgICAgICB0aGlzLl9pbmZsYXRlID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2luZmxhdGVba1RvdGFsTGVuZ3RoXSA9IDA7XG4gICAgICAgIHRoaXMuX2luZmxhdGVba0J1ZmZlcnNdID0gW107XG5cbiAgICAgICAgaWYgKGZpbiAmJiB0aGlzLnBhcmFtc1tgJHtlbmRwb2ludH1fbm9fY29udGV4dF90YWtlb3ZlcmBdKSB7XG4gICAgICAgICAgdGhpcy5faW5mbGF0ZS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXByZXNzIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7KEJ1ZmZlcnxTdHJpbmcpfSBkYXRhIERhdGEgdG8gY29tcHJlc3NcbiAgICogQHBhcmFtIHtCb29sZWFufSBmaW4gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgdGhlIGxhc3QgZnJhZ21lbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jb21wcmVzcyhkYXRhLCBmaW4sIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLl9pc1NlcnZlciA/ICdzZXJ2ZXInIDogJ2NsaWVudCc7XG5cbiAgICBpZiAoIXRoaXMuX2RlZmxhdGUpIHtcbiAgICAgIGNvbnN0IGtleSA9IGAke2VuZHBvaW50fV9tYXhfd2luZG93X2JpdHNgO1xuICAgICAgY29uc3Qgd2luZG93Qml0cyA9XG4gICAgICAgIHR5cGVvZiB0aGlzLnBhcmFtc1trZXldICE9PSAnbnVtYmVyJ1xuICAgICAgICAgID8gemxpYi5aX0RFRkFVTFRfV0lORE9XQklUU1xuICAgICAgICAgIDogdGhpcy5wYXJhbXNba2V5XTtcblxuICAgICAgdGhpcy5fZGVmbGF0ZSA9IHpsaWIuY3JlYXRlRGVmbGF0ZVJhdyh7XG4gICAgICAgIC4uLnRoaXMuX29wdGlvbnMuemxpYkRlZmxhdGVPcHRpb25zLFxuICAgICAgICB3aW5kb3dCaXRzXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fZGVmbGF0ZVtrVG90YWxMZW5ndGhdID0gMDtcbiAgICAgIHRoaXMuX2RlZmxhdGVba0J1ZmZlcnNdID0gW107XG5cbiAgICAgIHRoaXMuX2RlZmxhdGUub24oJ2RhdGEnLCBkZWZsYXRlT25EYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kZWZsYXRlW2tDYWxsYmFja10gPSBjYWxsYmFjaztcblxuICAgIHRoaXMuX2RlZmxhdGUud3JpdGUoZGF0YSk7XG4gICAgdGhpcy5fZGVmbGF0ZS5mbHVzaCh6bGliLlpfU1lOQ19GTFVTSCwgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9kZWZsYXRlKSB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZSBkZWZsYXRlIHN0cmVhbSB3YXMgY2xvc2VkIHdoaWxlIGRhdGEgd2FzIGJlaW5nIHByb2Nlc3NlZC5cbiAgICAgICAgLy9cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YSA9IGJ1ZmZlclV0aWwuY29uY2F0KFxuICAgICAgICB0aGlzLl9kZWZsYXRlW2tCdWZmZXJzXSxcbiAgICAgICAgdGhpcy5fZGVmbGF0ZVtrVG90YWxMZW5ndGhdXG4gICAgICApO1xuXG4gICAgICBpZiAoZmluKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgRmFzdEJ1ZmZlcihkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmxlbmd0aCAtIDQpO1xuICAgICAgfVxuXG4gICAgICAvL1xuICAgICAgLy8gRW5zdXJlIHRoYXQgdGhlIGNhbGxiYWNrIHdpbGwgbm90IGJlIGNhbGxlZCBhZ2FpbiBpblxuICAgICAgLy8gYFBlck1lc3NhZ2VEZWZsYXRlI2NsZWFudXAoKWAuXG4gICAgICAvL1xuICAgICAgdGhpcy5fZGVmbGF0ZVtrQ2FsbGJhY2tdID0gbnVsbDtcblxuICAgICAgdGhpcy5fZGVmbGF0ZVtrVG90YWxMZW5ndGhdID0gMDtcbiAgICAgIHRoaXMuX2RlZmxhdGVba0J1ZmZlcnNdID0gW107XG5cbiAgICAgIGlmIChmaW4gJiYgdGhpcy5wYXJhbXNbYCR7ZW5kcG9pbnR9X25vX2NvbnRleHRfdGFrZW92ZXJgXSkge1xuICAgICAgICB0aGlzLl9kZWZsYXRlLnJlc2V0KCk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGVyTWVzc2FnZURlZmxhdGU7XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgemxpYi5EZWZsYXRlUmF3YCBzdHJlYW0gYCdkYXRhJ2AgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGNodW5rIEEgY2h1bmsgb2YgZGF0YVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGVmbGF0ZU9uRGF0YShjaHVuaykge1xuICB0aGlzW2tCdWZmZXJzXS5wdXNoKGNodW5rKTtcbiAgdGhpc1trVG90YWxMZW5ndGhdICs9IGNodW5rLmxlbmd0aDtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGB6bGliLkluZmxhdGVSYXdgIHN0cmVhbSBgJ2RhdGEnYCBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gY2h1bmsgQSBjaHVuayBvZiBkYXRhXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbmZsYXRlT25EYXRhKGNodW5rKSB7XG4gIHRoaXNba1RvdGFsTGVuZ3RoXSArPSBjaHVuay5sZW5ndGg7XG5cbiAgaWYgKFxuICAgIHRoaXNba1Blck1lc3NhZ2VEZWZsYXRlXS5fbWF4UGF5bG9hZCA8IDEgfHxcbiAgICB0aGlzW2tUb3RhbExlbmd0aF0gPD0gdGhpc1trUGVyTWVzc2FnZURlZmxhdGVdLl9tYXhQYXlsb2FkXG4gICkge1xuICAgIHRoaXNba0J1ZmZlcnNdLnB1c2goY2h1bmspO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXNba0Vycm9yXSA9IG5ldyBSYW5nZUVycm9yKCdNYXggcGF5bG9hZCBzaXplIGV4Y2VlZGVkJyk7XG4gIHRoaXNba0Vycm9yXS5jb2RlID0gJ1dTX0VSUl9VTlNVUFBPUlRFRF9NRVNTQUdFX0xFTkdUSCc7XG4gIHRoaXNba0Vycm9yXVtrU3RhdHVzQ29kZV0gPSAxMDA5O1xuICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdkYXRhJywgaW5mbGF0ZU9uRGF0YSk7XG5cbiAgLy9cbiAgLy8gVGhlIGNob2ljZSB0byBlbXBsb3kgYHpsaWIucmVzZXQoKWAgb3ZlciBgemxpYi5jbG9zZSgpYCBpcyBkaWN0YXRlZCBieSB0aGVcbiAgLy8gZmFjdCB0aGF0IGluIE5vZGUuanMgdmVyc2lvbnMgcHJpb3IgdG8gMTMuMTAuMCwgdGhlIGNhbGxiYWNrIGZvclxuICAvLyBgemxpYi5mbHVzaCgpYCBpcyBub3QgY2FsbGVkIGlmIGB6bGliLmNsb3NlKClgIGlzIHVzZWQuIFV0aWxpemluZ1xuICAvLyBgemxpYi5yZXNldCgpYCBlbnN1cmVzIHRoYXQgZWl0aGVyIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkIG9yIGFuIGVycm9yIGlzXG4gIC8vIGVtaXR0ZWQuXG4gIC8vXG4gIHRoaXMucmVzZXQoKTtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGB6bGliLkluZmxhdGVSYXdgIHN0cmVhbSBgJ2Vycm9yJ2AgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyIFRoZSBlbWl0dGVkIGVycm9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbmZsYXRlT25FcnJvcihlcnIpIHtcbiAgLy9cbiAgLy8gVGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGBabGliI2Nsb3NlKClgIGFzIHRoZSBoYW5kbGUgaXMgYXV0b21hdGljYWxseVxuICAvLyBjbG9zZWQgd2hlbiBhbiBlcnJvciBpcyBlbWl0dGVkLlxuICAvL1xuICB0aGlzW2tQZXJNZXNzYWdlRGVmbGF0ZV0uX2luZmxhdGUgPSBudWxsO1xuXG4gIGlmICh0aGlzW2tFcnJvcl0pIHtcbiAgICB0aGlzW2tDYWxsYmFja10odGhpc1trRXJyb3JdKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBlcnJba1N0YXR1c0NvZGVdID0gMTAwNztcbiAgdGhpc1trQ2FsbGJhY2tdKGVycik7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7IGlzVXRmOCB9ID0gcmVxdWlyZSgnYnVmZmVyJyk7XG5cbmNvbnN0IHsgaGFzQmxvYiB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxuLy9cbi8vIEFsbG93ZWQgdG9rZW4gY2hhcmFjdGVyczpcbi8vXG4vLyAnIScsICcjJywgJyQnLCAnJScsICcmJywgJycnLCAnKicsICcrJywgJy0nLFxuLy8gJy4nLCAwLTksIEEtWiwgJ14nLCAnXycsICdgJywgYS16LCAnfCcsICd+J1xuLy9cbi8vIHRva2VuQ2hhcnNbMzJdID09PSAwIC8vICcgJ1xuLy8gdG9rZW5DaGFyc1szM10gPT09IDEgLy8gJyEnXG4vLyB0b2tlbkNoYXJzWzM0XSA9PT0gMCAvLyAnXCInXG4vLyAuLi5cbi8vXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IHRva2VuQ2hhcnMgPSBbXG4gIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIC8vIDAgLSAxNVxuICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAvLyAxNiAtIDMxXG4gIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIC8vIDMyIC0gNDdcbiAgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgLy8gNDggLSA2M1xuICAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAvLyA2NCAtIDc5XG4gIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIC8vIDgwIC0gOTVcbiAgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgLy8gOTYgLSAxMTFcbiAgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMCAvLyAxMTIgLSAxMjdcbl07XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhdHVzIGNvZGUgaXMgYWxsb3dlZCBpbiBhIGNsb3NlIGZyYW1lLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlIFRoZSBzdGF0dXMgY29kZVxuICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBzdGF0dXMgY29kZSBpcyB2YWxpZCwgZWxzZSBgZmFsc2VgXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRTdGF0dXNDb2RlKGNvZGUpIHtcbiAgcmV0dXJuIChcbiAgICAoY29kZSA+PSAxMDAwICYmXG4gICAgICBjb2RlIDw9IDEwMTQgJiZcbiAgICAgIGNvZGUgIT09IDEwMDQgJiZcbiAgICAgIGNvZGUgIT09IDEwMDUgJiZcbiAgICAgIGNvZGUgIT09IDEwMDYpIHx8XG4gICAgKGNvZGUgPj0gMzAwMCAmJiBjb2RlIDw9IDQ5OTkpXG4gICk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgZ2l2ZW4gYnVmZmVyIGNvbnRhaW5zIG9ubHkgY29ycmVjdCBVVEYtOC5cbiAqIFBvcnRlZCBmcm9tIGh0dHBzOi8vd3d3LmNsLmNhbS5hYy51ay8lN0VtZ2syNS91Y3MvdXRmOF9jaGVjay5jIGJ5XG4gKiBNYXJrdXMgS3Vobi5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmIFRoZSBidWZmZXIgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiBgYnVmYCBjb250YWlucyBvbmx5IGNvcnJlY3QgVVRGLTgsIGVsc2UgYGZhbHNlYFxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBfaXNWYWxpZFVURjgoYnVmKSB7XG4gIGNvbnN0IGxlbiA9IGJ1Zi5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIGlmICgoYnVmW2ldICYgMHg4MCkgPT09IDApIHtcbiAgICAgIC8vIDB4eHh4eHh4XG4gICAgICBpKys7XG4gICAgfSBlbHNlIGlmICgoYnVmW2ldICYgMHhlMCkgPT09IDB4YzApIHtcbiAgICAgIC8vIDExMHh4eHh4IDEweHh4eHh4XG4gICAgICBpZiAoXG4gICAgICAgIGkgKyAxID09PSBsZW4gfHxcbiAgICAgICAgKGJ1ZltpICsgMV0gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICAoYnVmW2ldICYgMHhmZSkgPT09IDB4YzAgLy8gT3ZlcmxvbmdcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGkgKz0gMjtcbiAgICB9IGVsc2UgaWYgKChidWZbaV0gJiAweGYwKSA9PT0gMHhlMCkge1xuICAgICAgLy8gMTExMHh4eHggMTB4eHh4eHggMTB4eHh4eHhcbiAgICAgIGlmIChcbiAgICAgICAgaSArIDIgPj0gbGVuIHx8XG4gICAgICAgIChidWZbaSArIDFdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpICsgMl0gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICAoYnVmW2ldID09PSAweGUwICYmIChidWZbaSArIDFdICYgMHhlMCkgPT09IDB4ODApIHx8IC8vIE92ZXJsb25nXG4gICAgICAgIChidWZbaV0gPT09IDB4ZWQgJiYgKGJ1ZltpICsgMV0gJiAweGUwKSA9PT0gMHhhMCkgLy8gU3Vycm9nYXRlIChVK0Q4MDAgLSBVK0RGRkYpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpICs9IDM7XG4gICAgfSBlbHNlIGlmICgoYnVmW2ldICYgMHhmOCkgPT09IDB4ZjApIHtcbiAgICAgIC8vIDExMTEweHh4IDEweHh4eHh4IDEweHh4eHh4IDEweHh4eHh4XG4gICAgICBpZiAoXG4gICAgICAgIGkgKyAzID49IGxlbiB8fFxuICAgICAgICAoYnVmW2kgKyAxXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIChidWZbaSArIDJdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpICsgM10gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICAoYnVmW2ldID09PSAweGYwICYmIChidWZbaSArIDFdICYgMHhmMCkgPT09IDB4ODApIHx8IC8vIE92ZXJsb25nXG4gICAgICAgIChidWZbaV0gPT09IDB4ZjQgJiYgYnVmW2kgKyAxXSA+IDB4OGYpIHx8XG4gICAgICAgIGJ1ZltpXSA+IDB4ZjQgLy8gPiBVKzEwRkZGRlxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaSArPSA0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBgQmxvYmAuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgdGVzdGVkXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGBCbG9iYCwgZWxzZSBgZmFsc2VgXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICBoYXNCbG9iICYmXG4gICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgIHR5cGVvZiB2YWx1ZS5hcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiB2YWx1ZS50eXBlID09PSAnc3RyaW5nJyAmJlxuICAgIHR5cGVvZiB2YWx1ZS5zdHJlYW0gPT09ICdmdW5jdGlvbicgJiZcbiAgICAodmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gJ0Jsb2InIHx8XG4gICAgICB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddID09PSAnRmlsZScpXG4gICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0Jsb2IsXG4gIGlzVmFsaWRTdGF0dXNDb2RlLFxuICBpc1ZhbGlkVVRGODogX2lzVmFsaWRVVEY4LFxuICB0b2tlbkNoYXJzXG59O1xuXG5pZiAoaXNVdGY4KSB7XG4gIG1vZHVsZS5leHBvcnRzLmlzVmFsaWRVVEY4ID0gZnVuY3Rpb24gKGJ1Zikge1xuICAgIHJldHVybiBidWYubGVuZ3RoIDwgMjQgPyBfaXNWYWxpZFVURjgoYnVmKSA6IGlzVXRmOChidWYpO1xuICB9O1xufSAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAgKi8gZWxzZSBpZiAoIXByb2Nlc3MuZW52LldTX05PX1VURl84X1ZBTElEQVRFKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaXNWYWxpZFVURjggPSByZXF1aXJlKCd1dGYtOC12YWxpZGF0ZScpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMuaXNWYWxpZFVURjggPSBmdW5jdGlvbiAoYnVmKSB7XG4gICAgICByZXR1cm4gYnVmLmxlbmd0aCA8IDMyID8gX2lzVmFsaWRVVEY4KGJ1ZikgOiBpc1ZhbGlkVVRGOChidWYpO1xuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBDb250aW51ZSByZWdhcmRsZXNzIG9mIHRoZSBlcnJvci5cbiAgfVxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBXcml0YWJsZSB9ID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5cbmNvbnN0IFBlck1lc3NhZ2VEZWZsYXRlID0gcmVxdWlyZSgnLi9wZXJtZXNzYWdlLWRlZmxhdGUnKTtcbmNvbnN0IHtcbiAgQklOQVJZX1RZUEVTLFxuICBFTVBUWV9CVUZGRVIsXG4gIGtTdGF0dXNDb2RlLFxuICBrV2ViU29ja2V0XG59ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmNvbnN0IHsgY29uY2F0LCB0b0FycmF5QnVmZmVyLCB1bm1hc2sgfSA9IHJlcXVpcmUoJy4vYnVmZmVyLXV0aWwnKTtcbmNvbnN0IHsgaXNWYWxpZFN0YXR1c0NvZGUsIGlzVmFsaWRVVEY4IH0gPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcblxuY29uc3QgRmFzdEJ1ZmZlciA9IEJ1ZmZlcltTeW1ib2wuc3BlY2llc107XG5cbmNvbnN0IEdFVF9JTkZPID0gMDtcbmNvbnN0IEdFVF9QQVlMT0FEX0xFTkdUSF8xNiA9IDE7XG5jb25zdCBHRVRfUEFZTE9BRF9MRU5HVEhfNjQgPSAyO1xuY29uc3QgR0VUX01BU0sgPSAzO1xuY29uc3QgR0VUX0RBVEEgPSA0O1xuY29uc3QgSU5GTEFUSU5HID0gNTtcbmNvbnN0IERFRkVSX0VWRU5UID0gNjtcblxuLyoqXG4gKiBIeUJpIFJlY2VpdmVyIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBleHRlbmRzIFdyaXRhYmxlXG4gKi9cbmNsYXNzIFJlY2VpdmVyIGV4dGVuZHMgV3JpdGFibGUge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIFJlY2VpdmVyIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMgb2JqZWN0XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWxsb3dTeW5jaHJvbm91c0V2ZW50cz10cnVlXSBTcGVjaWZpZXMgd2hldGhlclxuICAgKiAgICAgYW55IG9mIHRoZSBgJ21lc3NhZ2UnYCwgYCdwaW5nJ2AsIGFuZCBgJ3BvbmcnYCBldmVudHMgY2FuIGJlIGVtaXR0ZWRcbiAgICogICAgIG11bHRpcGxlIHRpbWVzIGluIHRoZSBzYW1lIHRpY2tcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmJpbmFyeVR5cGU9bm9kZWJ1ZmZlcl0gVGhlIHR5cGUgZm9yIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5leHRlbnNpb25zXSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgbmVnb3RpYXRlZFxuICAgKiAgICAgZXh0ZW5zaW9uc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmlzU2VydmVyPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciB0byBvcGVyYXRlIGluXG4gICAqICAgICBjbGllbnQgb3Igc2VydmVyIG1vZGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm1heFBheWxvYWQ9MF0gVGhlIG1heGltdW0gYWxsb3dlZCBtZXNzYWdlIGxlbmd0aFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnNraXBVVEY4VmFsaWRhdGlvbj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3JcbiAgICogICAgIG5vdCB0byBza2lwIFVURi04IHZhbGlkYXRpb24gZm9yIHRleHQgYW5kIGNsb3NlIG1lc3NhZ2VzXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fYWxsb3dTeW5jaHJvbm91c0V2ZW50cyA9XG4gICAgICBvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHMgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IG9wdGlvbnMuYWxsb3dTeW5jaHJvbm91c0V2ZW50c1xuICAgICAgICA6IHRydWU7XG4gICAgdGhpcy5fYmluYXJ5VHlwZSA9IG9wdGlvbnMuYmluYXJ5VHlwZSB8fCBCSU5BUllfVFlQRVNbMF07XG4gICAgdGhpcy5fZXh0ZW5zaW9ucyA9IG9wdGlvbnMuZXh0ZW5zaW9ucyB8fCB7fTtcbiAgICB0aGlzLl9pc1NlcnZlciA9ICEhb3B0aW9ucy5pc1NlcnZlcjtcbiAgICB0aGlzLl9tYXhQYXlsb2FkID0gb3B0aW9ucy5tYXhQYXlsb2FkIHwgMDtcbiAgICB0aGlzLl9za2lwVVRGOFZhbGlkYXRpb24gPSAhIW9wdGlvbnMuc2tpcFVURjhWYWxpZGF0aW9uO1xuICAgIHRoaXNba1dlYlNvY2tldF0gPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzID0gMDtcbiAgICB0aGlzLl9idWZmZXJzID0gW107XG5cbiAgICB0aGlzLl9jb21wcmVzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5fcGF5bG9hZExlbmd0aCA9IDA7XG4gICAgdGhpcy5fbWFzayA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9mcmFnbWVudGVkID0gMDtcbiAgICB0aGlzLl9tYXNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9maW4gPSBmYWxzZTtcbiAgICB0aGlzLl9vcGNvZGUgPSAwO1xuXG4gICAgdGhpcy5fdG90YWxQYXlsb2FkTGVuZ3RoID0gMDtcbiAgICB0aGlzLl9tZXNzYWdlTGVuZ3RoID0gMDtcbiAgICB0aGlzLl9mcmFnbWVudHMgPSBbXTtcblxuICAgIHRoaXMuX2Vycm9yZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRzIGBXcml0YWJsZS5wcm90b3R5cGUuX3dyaXRlKClgLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gY2h1bmsgVGhlIGNodW5rIG9mIGRhdGEgdG8gd3JpdGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVuY29kaW5nIFRoZSBjaGFyYWN0ZXIgZW5jb2Rpbmcgb2YgYGNodW5rYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3dyaXRlKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgICBpZiAodGhpcy5fb3Bjb2RlID09PSAweDA4ICYmIHRoaXMuX3N0YXRlID09IEdFVF9JTkZPKSByZXR1cm4gY2IoKTtcblxuICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgKz0gY2h1bmsubGVuZ3RoO1xuICAgIHRoaXMuX2J1ZmZlcnMucHVzaChjaHVuayk7XG4gICAgdGhpcy5zdGFydExvb3AoY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN1bWVzIGBuYCBieXRlcyBmcm9tIHRoZSBidWZmZXJlZCBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRvIGNvbnN1bWVcbiAgICogQHJldHVybiB7QnVmZmVyfSBUaGUgY29uc3VtZWQgYnl0ZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNvbnN1bWUobikge1xuICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgLT0gbjtcblxuICAgIGlmIChuID09PSB0aGlzLl9idWZmZXJzWzBdLmxlbmd0aCkgcmV0dXJuIHRoaXMuX2J1ZmZlcnMuc2hpZnQoKTtcblxuICAgIGlmIChuIDwgdGhpcy5fYnVmZmVyc1swXS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGJ1ZiA9IHRoaXMuX2J1ZmZlcnNbMF07XG4gICAgICB0aGlzLl9idWZmZXJzWzBdID0gbmV3IEZhc3RCdWZmZXIoXG4gICAgICAgIGJ1Zi5idWZmZXIsXG4gICAgICAgIGJ1Zi5ieXRlT2Zmc2V0ICsgbixcbiAgICAgICAgYnVmLmxlbmd0aCAtIG5cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBuZXcgRmFzdEJ1ZmZlcihidWYuYnVmZmVyLCBidWYuYnl0ZU9mZnNldCwgbik7XG4gICAgfVxuXG4gICAgY29uc3QgZHN0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKG4pO1xuXG4gICAgZG8ge1xuICAgICAgY29uc3QgYnVmID0gdGhpcy5fYnVmZmVyc1swXTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGRzdC5sZW5ndGggLSBuO1xuXG4gICAgICBpZiAobiA+PSBidWYubGVuZ3RoKSB7XG4gICAgICAgIGRzdC5zZXQodGhpcy5fYnVmZmVycy5zaGlmdCgpLCBvZmZzZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHN0LnNldChuZXcgVWludDhBcnJheShidWYuYnVmZmVyLCBidWYuYnl0ZU9mZnNldCwgbiksIG9mZnNldCk7XG4gICAgICAgIHRoaXMuX2J1ZmZlcnNbMF0gPSBuZXcgRmFzdEJ1ZmZlcihcbiAgICAgICAgICBidWYuYnVmZmVyLFxuICAgICAgICAgIGJ1Zi5ieXRlT2Zmc2V0ICsgbixcbiAgICAgICAgICBidWYubGVuZ3RoIC0gblxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBuIC09IGJ1Zi5sZW5ndGg7XG4gICAgfSB3aGlsZSAobiA+IDApO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIHBhcnNpbmcgbG9vcC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXJ0TG9vcChjYikge1xuICAgIHRoaXMuX2xvb3AgPSB0cnVlO1xuXG4gICAgZG8ge1xuICAgICAgc3dpdGNoICh0aGlzLl9zdGF0ZSkge1xuICAgICAgICBjYXNlIEdFVF9JTkZPOlxuICAgICAgICAgIHRoaXMuZ2V0SW5mbyhjYik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgR0VUX1BBWUxPQURfTEVOR1RIXzE2OlxuICAgICAgICAgIHRoaXMuZ2V0UGF5bG9hZExlbmd0aDE2KGNiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBHRVRfUEFZTE9BRF9MRU5HVEhfNjQ6XG4gICAgICAgICAgdGhpcy5nZXRQYXlsb2FkTGVuZ3RoNjQoY2IpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEdFVF9NQVNLOlxuICAgICAgICAgIHRoaXMuZ2V0TWFzaygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEdFVF9EQVRBOlxuICAgICAgICAgIHRoaXMuZ2V0RGF0YShjYik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgSU5GTEFUSU5HOlxuICAgICAgICBjYXNlIERFRkVSX0VWRU5UOlxuICAgICAgICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSB3aGlsZSAodGhpcy5fbG9vcCk7XG5cbiAgICBpZiAoIXRoaXMuX2Vycm9yZWQpIGNiKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgdGhlIGZpcnN0IHR3byBieXRlcyBvZiBhIGZyYW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0SW5mbyhjYikge1xuICAgIGlmICh0aGlzLl9idWZmZXJlZEJ5dGVzIDwgMikge1xuICAgICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1ZiA9IHRoaXMuY29uc3VtZSgyKTtcblxuICAgIGlmICgoYnVmWzBdICYgMHgzMCkgIT09IDB4MDApIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgJ1JTVjIgYW5kIFJTVjMgbXVzdCBiZSBjbGVhcicsXG4gICAgICAgIHRydWUsXG4gICAgICAgIDEwMDIsXG4gICAgICAgICdXU19FUlJfVU5FWFBFQ1RFRF9SU1ZfMl8zJ1xuICAgICAgKTtcblxuICAgICAgY2IoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXByZXNzZWQgPSAoYnVmWzBdICYgMHg0MCkgPT09IDB4NDA7XG5cbiAgICBpZiAoY29tcHJlc3NlZCAmJiAhdGhpcy5fZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSkge1xuICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAnUlNWMSBtdXN0IGJlIGNsZWFyJyxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgMTAwMixcbiAgICAgICAgJ1dTX0VSUl9VTkVYUEVDVEVEX1JTVl8xJ1xuICAgICAgKTtcblxuICAgICAgY2IoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2ZpbiA9IChidWZbMF0gJiAweDgwKSA9PT0gMHg4MDtcbiAgICB0aGlzLl9vcGNvZGUgPSBidWZbMF0gJiAweDBmO1xuICAgIHRoaXMuX3BheWxvYWRMZW5ndGggPSBidWZbMV0gJiAweDdmO1xuXG4gICAgaWYgKHRoaXMuX29wY29kZSA9PT0gMHgwMCkge1xuICAgICAgaWYgKGNvbXByZXNzZWQpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgJ1JTVjEgbXVzdCBiZSBjbGVhcicsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAxMDAyLFxuICAgICAgICAgICdXU19FUlJfVU5FWFBFQ1RFRF9SU1ZfMSdcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9mcmFnbWVudGVkKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgICdpbnZhbGlkIG9wY29kZSAwJyxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIDEwMDIsXG4gICAgICAgICAgJ1dTX0VSUl9JTlZBTElEX09QQ09ERSdcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fb3Bjb2RlID0gdGhpcy5fZnJhZ21lbnRlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX29wY29kZSA9PT0gMHgwMSB8fCB0aGlzLl9vcGNvZGUgPT09IDB4MDIpIHtcbiAgICAgIGlmICh0aGlzLl9mcmFnbWVudGVkKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgIGBpbnZhbGlkIG9wY29kZSAke3RoaXMuX29wY29kZX1gLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgMTAwMixcbiAgICAgICAgICAnV1NfRVJSX0lOVkFMSURfT1BDT0RFJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNiKGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jb21wcmVzc2VkID0gY29tcHJlc3NlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX29wY29kZSA+IDB4MDcgJiYgdGhpcy5fb3Bjb2RlIDwgMHgwYikge1xuICAgICAgaWYgKCF0aGlzLl9maW4pIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgJ0ZJTiBtdXN0IGJlIHNldCcsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAxMDAyLFxuICAgICAgICAgICdXU19FUlJfRVhQRUNURURfRklOJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNiKGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29tcHJlc3NlZCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgICAnUlNWMSBtdXN0IGJlIGNsZWFyJyxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIDEwMDIsXG4gICAgICAgICAgJ1dTX0VSUl9VTkVYUEVDVEVEX1JTVl8xJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNiKGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX3BheWxvYWRMZW5ndGggPiAweDdkIHx8XG4gICAgICAgICh0aGlzLl9vcGNvZGUgPT09IDB4MDggJiYgdGhpcy5fcGF5bG9hZExlbmd0aCA9PT0gMSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgICBgaW52YWxpZCBwYXlsb2FkIGxlbmd0aCAke3RoaXMuX3BheWxvYWRMZW5ndGh9YCxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIDEwMDIsXG4gICAgICAgICAgJ1dTX0VSUl9JTlZBTElEX0NPTlRST0xfUEFZTE9BRF9MRU5HVEgnXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgYGludmFsaWQgb3Bjb2RlICR7dGhpcy5fb3Bjb2RlfWAsXG4gICAgICAgIHRydWUsXG4gICAgICAgIDEwMDIsXG4gICAgICAgICdXU19FUlJfSU5WQUxJRF9PUENPREUnXG4gICAgICApO1xuXG4gICAgICBjYihlcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9maW4gJiYgIXRoaXMuX2ZyYWdtZW50ZWQpIHRoaXMuX2ZyYWdtZW50ZWQgPSB0aGlzLl9vcGNvZGU7XG4gICAgdGhpcy5fbWFza2VkID0gKGJ1ZlsxXSAmIDB4ODApID09PSAweDgwO1xuXG4gICAgaWYgKHRoaXMuX2lzU2VydmVyKSB7XG4gICAgICBpZiAoIXRoaXMuX21hc2tlZCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgICAnTUFTSyBtdXN0IGJlIHNldCcsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAxMDAyLFxuICAgICAgICAgICdXU19FUlJfRVhQRUNURURfTUFTSydcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX21hc2tlZCkge1xuICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAnTUFTSyBtdXN0IGJlIGNsZWFyJyxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgMTAwMixcbiAgICAgICAgJ1dTX0VSUl9VTkVYUEVDVEVEX01BU0snXG4gICAgICApO1xuXG4gICAgICBjYihlcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BheWxvYWRMZW5ndGggPT09IDEyNikgdGhpcy5fc3RhdGUgPSBHRVRfUEFZTE9BRF9MRU5HVEhfMTY7XG4gICAgZWxzZSBpZiAodGhpcy5fcGF5bG9hZExlbmd0aCA9PT0gMTI3KSB0aGlzLl9zdGF0ZSA9IEdFVF9QQVlMT0FEX0xFTkdUSF82NDtcbiAgICBlbHNlIHRoaXMuaGF2ZUxlbmd0aChjYik7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBleHRlbmRlZCBwYXlsb2FkIGxlbmd0aCAoNysxNikuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQYXlsb2FkTGVuZ3RoMTYoY2IpIHtcbiAgICBpZiAodGhpcy5fYnVmZmVyZWRCeXRlcyA8IDIpIHtcbiAgICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wYXlsb2FkTGVuZ3RoID0gdGhpcy5jb25zdW1lKDIpLnJlYWRVSW50MTZCRSgwKTtcbiAgICB0aGlzLmhhdmVMZW5ndGgoY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgZXh0ZW5kZWQgcGF5bG9hZCBsZW5ndGggKDcrNjQpLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UGF5bG9hZExlbmd0aDY0KGNiKSB7XG4gICAgaWYgKHRoaXMuX2J1ZmZlcmVkQnl0ZXMgPCA4KSB7XG4gICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYnVmID0gdGhpcy5jb25zdW1lKDgpO1xuICAgIGNvbnN0IG51bSA9IGJ1Zi5yZWFkVUludDMyQkUoMCk7XG5cbiAgICAvL1xuICAgIC8vIFRoZSBtYXhpbXVtIHNhZmUgaW50ZWdlciBpbiBKYXZhU2NyaXB0IGlzIDJeNTMgLSAxLiBBbiBlcnJvciBpcyByZXR1cm5lZFxuICAgIC8vIGlmIHBheWxvYWQgbGVuZ3RoIGlzIGdyZWF0ZXIgdGhhbiB0aGlzIG51bWJlci5cbiAgICAvL1xuICAgIGlmIChudW0gPiBNYXRoLnBvdygyLCA1MyAtIDMyKSAtIDEpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgJ1Vuc3VwcG9ydGVkIFdlYlNvY2tldCBmcmFtZTogcGF5bG9hZCBsZW5ndGggPiAyXjUzIC0gMScsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICAxMDA5LFxuICAgICAgICAnV1NfRVJSX1VOU1VQUE9SVEVEX0RBVEFfUEFZTE9BRF9MRU5HVEgnXG4gICAgICApO1xuXG4gICAgICBjYihlcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcGF5bG9hZExlbmd0aCA9IG51bSAqIE1hdGgucG93KDIsIDMyKSArIGJ1Zi5yZWFkVUludDMyQkUoNCk7XG4gICAgdGhpcy5oYXZlTGVuZ3RoKGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXlsb2FkIGxlbmd0aCBoYXMgYmVlbiByZWFkLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGF2ZUxlbmd0aChjYikge1xuICAgIGlmICh0aGlzLl9wYXlsb2FkTGVuZ3RoICYmIHRoaXMuX29wY29kZSA8IDB4MDgpIHtcbiAgICAgIHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aCArPSB0aGlzLl9wYXlsb2FkTGVuZ3RoO1xuICAgICAgaWYgKHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aCA+IHRoaXMuX21heFBheWxvYWQgJiYgdGhpcy5fbWF4UGF5bG9hZCA+IDApIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgJ01heCBwYXlsb2FkIHNpemUgZXhjZWVkZWQnLFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgIDEwMDksXG4gICAgICAgICAgJ1dTX0VSUl9VTlNVUFBPUlRFRF9NRVNTQUdFX0xFTkdUSCdcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbWFza2VkKSB0aGlzLl9zdGF0ZSA9IEdFVF9NQVNLO1xuICAgIGVsc2UgdGhpcy5fc3RhdGUgPSBHRVRfREFUQTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyBtYXNrIGJ5dGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TWFzaygpIHtcbiAgICBpZiAodGhpcy5fYnVmZmVyZWRCeXRlcyA8IDQpIHtcbiAgICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tYXNrID0gdGhpcy5jb25zdW1lKDQpO1xuICAgIHRoaXMuX3N0YXRlID0gR0VUX0RBVEE7XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgZGF0YSBieXRlcy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldERhdGEoY2IpIHtcbiAgICBsZXQgZGF0YSA9IEVNUFRZX0JVRkZFUjtcblxuICAgIGlmICh0aGlzLl9wYXlsb2FkTGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5fYnVmZmVyZWRCeXRlcyA8IHRoaXMuX3BheWxvYWRMZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGRhdGEgPSB0aGlzLmNvbnN1bWUodGhpcy5fcGF5bG9hZExlbmd0aCk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fbWFza2VkICYmXG4gICAgICAgICh0aGlzLl9tYXNrWzBdIHwgdGhpcy5fbWFza1sxXSB8IHRoaXMuX21hc2tbMl0gfCB0aGlzLl9tYXNrWzNdKSAhPT0gMFxuICAgICAgKSB7XG4gICAgICAgIHVubWFzayhkYXRhLCB0aGlzLl9tYXNrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3Bjb2RlID4gMHgwNykge1xuICAgICAgdGhpcy5jb250cm9sTWVzc2FnZShkYXRhLCBjYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbXByZXNzZWQpIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gSU5GTEFUSU5HO1xuICAgICAgdGhpcy5kZWNvbXByZXNzKGRhdGEsIGNiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5sZW5ndGgpIHtcbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIG1lc3NhZ2UgaXMgbm90IGNvbXByZXNzZWQgc28gaXRzIGxlbmd0aCBpcyB0aGUgc3VtIG9mIHRoZSBwYXlsb2FkXG4gICAgICAvLyBsZW5ndGggb2YgYWxsIGZyYWdtZW50cy5cbiAgICAgIC8vXG4gICAgICB0aGlzLl9tZXNzYWdlTGVuZ3RoID0gdGhpcy5fdG90YWxQYXlsb2FkTGVuZ3RoO1xuICAgICAgdGhpcy5fZnJhZ21lbnRzLnB1c2goZGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhTWVzc2FnZShjYik7XG4gIH1cblxuICAvKipcbiAgICogRGVjb21wcmVzc2VzIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIENvbXByZXNzZWQgZGF0YVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVjb21wcmVzcyhkYXRhLCBjYikge1xuICAgIGNvbnN0IHBlck1lc3NhZ2VEZWZsYXRlID0gdGhpcy5fZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXTtcblxuICAgIHBlck1lc3NhZ2VEZWZsYXRlLmRlY29tcHJlc3MoZGF0YSwgdGhpcy5fZmluLCAoZXJyLCBidWYpID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpO1xuXG4gICAgICBpZiAoYnVmLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9tZXNzYWdlTGVuZ3RoICs9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLl9tZXNzYWdlTGVuZ3RoID4gdGhpcy5fbWF4UGF5bG9hZCAmJiB0aGlzLl9tYXhQYXlsb2FkID4gMCkge1xuICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgICAnTWF4IHBheWxvYWQgc2l6ZSBleGNlZWRlZCcsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDEwMDksXG4gICAgICAgICAgICAnV1NfRVJSX1VOU1VQUE9SVEVEX01FU1NBR0VfTEVOR1RIJ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjYihlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZnJhZ21lbnRzLnB1c2goYnVmKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXRhTWVzc2FnZShjYik7XG4gICAgICBpZiAodGhpcy5fc3RhdGUgPT09IEdFVF9JTkZPKSB0aGlzLnN0YXJ0TG9vcChjYik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhIGRhdGEgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRhdGFNZXNzYWdlKGNiKSB7XG4gICAgaWYgKCF0aGlzLl9maW4pIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZUxlbmd0aCA9IHRoaXMuX21lc3NhZ2VMZW5ndGg7XG4gICAgY29uc3QgZnJhZ21lbnRzID0gdGhpcy5fZnJhZ21lbnRzO1xuXG4gICAgdGhpcy5fdG90YWxQYXlsb2FkTGVuZ3RoID0gMDtcbiAgICB0aGlzLl9tZXNzYWdlTGVuZ3RoID0gMDtcbiAgICB0aGlzLl9mcmFnbWVudGVkID0gMDtcbiAgICB0aGlzLl9mcmFnbWVudHMgPSBbXTtcblxuICAgIGlmICh0aGlzLl9vcGNvZGUgPT09IDIpIHtcbiAgICAgIGxldCBkYXRhO1xuXG4gICAgICBpZiAodGhpcy5fYmluYXJ5VHlwZSA9PT0gJ25vZGVidWZmZXInKSB7XG4gICAgICAgIGRhdGEgPSBjb25jYXQoZnJhZ21lbnRzLCBtZXNzYWdlTGVuZ3RoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYmluYXJ5VHlwZSA9PT0gJ2FycmF5YnVmZmVyJykge1xuICAgICAgICBkYXRhID0gdG9BcnJheUJ1ZmZlcihjb25jYXQoZnJhZ21lbnRzLCBtZXNzYWdlTGVuZ3RoKSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JpbmFyeVR5cGUgPT09ICdibG9iJykge1xuICAgICAgICBkYXRhID0gbmV3IEJsb2IoZnJhZ21lbnRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSBmcmFnbWVudHM7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9hbGxvd1N5bmNocm9ub3VzRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnbWVzc2FnZScsIGRhdGEsIHRydWUpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IEdFVF9JTkZPO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBERUZFUl9FVkVOVDtcbiAgICAgICAgc2V0SW1tZWRpYXRlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCBkYXRhLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLl9zdGF0ZSA9IEdFVF9JTkZPO1xuICAgICAgICAgIHRoaXMuc3RhcnRMb29wKGNiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGJ1ZiA9IGNvbmNhdChmcmFnbWVudHMsIG1lc3NhZ2VMZW5ndGgpO1xuXG4gICAgICBpZiAoIXRoaXMuX3NraXBVVEY4VmFsaWRhdGlvbiAmJiAhaXNWYWxpZFVURjgoYnVmKSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgRXJyb3IsXG4gICAgICAgICAgJ2ludmFsaWQgVVRGLTggc2VxdWVuY2UnLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgMTAwNyxcbiAgICAgICAgICAnV1NfRVJSX0lOVkFMSURfVVRGOCdcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBJTkZMQVRJTkcgfHwgdGhpcy5fYWxsb3dTeW5jaHJvbm91c0V2ZW50cykge1xuICAgICAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCBidWYsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gREVGRVJfRVZFTlQ7XG4gICAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgYnVmLCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgICAgICAgICB0aGlzLnN0YXJ0TG9vcChjYik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgY29udHJvbCBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBEYXRhIHRvIGhhbmRsZVxuICAgKiBAcmV0dXJuIHsoRXJyb3J8UmFuZ2VFcnJvcnx1bmRlZmluZWQpfSBBIHBvc3NpYmxlIGVycm9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb250cm9sTWVzc2FnZShkYXRhLCBjYikge1xuICAgIGlmICh0aGlzLl9vcGNvZGUgPT09IDB4MDgpIHtcbiAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW1pdCgnY29uY2x1ZGUnLCAxMDA1LCBFTVBUWV9CVUZGRVIpO1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGRhdGEucmVhZFVJbnQxNkJFKDApO1xuXG4gICAgICAgIGlmICghaXNWYWxpZFN0YXR1c0NvZGUoY29kZSkpIHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgICAgYGludmFsaWQgc3RhdHVzIGNvZGUgJHtjb2RlfWAsXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgMTAwMixcbiAgICAgICAgICAgICdXU19FUlJfSU5WQUxJRF9DTE9TRV9DT0RFJ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjYihlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnVmID0gbmV3IEZhc3RCdWZmZXIoXG4gICAgICAgICAgZGF0YS5idWZmZXIsXG4gICAgICAgICAgZGF0YS5ieXRlT2Zmc2V0ICsgMixcbiAgICAgICAgICBkYXRhLmxlbmd0aCAtIDJcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIXRoaXMuX3NraXBVVEY4VmFsaWRhdGlvbiAmJiAhaXNWYWxpZFVURjgoYnVmKSkge1xuICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICAgIEVycm9yLFxuICAgICAgICAgICAgJ2ludmFsaWQgVVRGLTggc2VxdWVuY2UnLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIDEwMDcsXG4gICAgICAgICAgICAnV1NfRVJSX0lOVkFMSURfVVRGOCdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbWl0KCdjb25jbHVkZScsIGNvZGUsIGJ1Zik7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2FsbG93U3luY2hyb25vdXNFdmVudHMpIHtcbiAgICAgIHRoaXMuZW1pdCh0aGlzLl9vcGNvZGUgPT09IDB4MDkgPyAncGluZycgOiAncG9uZycsIGRhdGEpO1xuICAgICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RhdGUgPSBERUZFUl9FVkVOVDtcbiAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCh0aGlzLl9vcGNvZGUgPT09IDB4MDkgPyAncGluZycgOiAncG9uZycsIGRhdGEpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IEdFVF9JTkZPO1xuICAgICAgICB0aGlzLnN0YXJ0TG9vcChjYik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIGFuIGVycm9yIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbihuZXc6RXJyb3J8UmFuZ2VFcnJvcil9IEVycm9yQ3RvciBUaGUgZXJyb3IgY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2VcbiAgICogQHBhcmFtIHtCb29sZWFufSBwcmVmaXggU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIGFkZCBhIGRlZmF1bHQgcHJlZml4IHRvXG4gICAqICAgICBgbWVzc2FnZWBcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c0NvZGUgVGhlIHN0YXR1cyBjb2RlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlcnJvckNvZGUgVGhlIGV4cG9zZWQgZXJyb3IgY29kZVxuICAgKiBAcmV0dXJuIHsoRXJyb3J8UmFuZ2VFcnJvcil9IFRoZSBlcnJvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlRXJyb3IoRXJyb3JDdG9yLCBtZXNzYWdlLCBwcmVmaXgsIHN0YXR1c0NvZGUsIGVycm9yQ29kZSkge1xuICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICB0aGlzLl9lcnJvcmVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvckN0b3IoXG4gICAgICBwcmVmaXggPyBgSW52YWxpZCBXZWJTb2NrZXQgZnJhbWU6ICR7bWVzc2FnZX1gIDogbWVzc2FnZVxuICAgICk7XG5cbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShlcnIsIHRoaXMuY3JlYXRlRXJyb3IpO1xuICAgIGVyci5jb2RlID0gZXJyb3JDb2RlO1xuICAgIGVycltrU3RhdHVzQ29kZV0gPSBzdGF0dXNDb2RlO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWNlaXZlcjtcbiIsICIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFtcImVycm9yXCIsIHsgXCJ2YXJzSWdub3JlUGF0dGVyblwiOiBcIl5EdXBsZXhcIiB9XSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IHsgRHVwbGV4IH0gPSByZXF1aXJlKCdzdHJlYW0nKTtcbmNvbnN0IHsgcmFuZG9tRmlsbFN5bmMgfSA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuY29uc3Qge1xuICB0eXBlczogeyBpc1VpbnQ4QXJyYXkgfVxufSA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuY29uc3QgUGVyTWVzc2FnZURlZmxhdGUgPSByZXF1aXJlKCcuL3Blcm1lc3NhZ2UtZGVmbGF0ZScpO1xuY29uc3QgeyBFTVBUWV9CVUZGRVIsIGtXZWJTb2NrZXQsIE5PT1AgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCB7IGlzQmxvYiwgaXNWYWxpZFN0YXR1c0NvZGUgfSA9IHJlcXVpcmUoJy4vdmFsaWRhdGlvbicpO1xuY29uc3QgeyBtYXNrOiBhcHBseU1hc2ssIHRvQnVmZmVyIH0gPSByZXF1aXJlKCcuL2J1ZmZlci11dGlsJyk7XG5cbmNvbnN0IGtCeXRlTGVuZ3RoID0gU3ltYm9sKCdrQnl0ZUxlbmd0aCcpO1xuY29uc3QgbWFza0J1ZmZlciA9IEJ1ZmZlci5hbGxvYyg0KTtcbmNvbnN0IFJBTkRPTV9QT09MX1NJWkUgPSA4ICogMTAyNDtcbmxldCByYW5kb21Qb29sO1xubGV0IHJhbmRvbVBvb2xQb2ludGVyID0gUkFORE9NX1BPT0xfU0laRTtcblxuY29uc3QgREVGQVVMVCA9IDA7XG5jb25zdCBERUZMQVRJTkcgPSAxO1xuY29uc3QgR0VUX0JMT0JfREFUQSA9IDI7XG5cbi8qKlxuICogSHlCaSBTZW5kZXIgaW1wbGVtZW50YXRpb24uXG4gKi9cbmNsYXNzIFNlbmRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgU2VuZGVyIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge0R1cGxleH0gc29ja2V0IFRoZSBjb25uZWN0aW9uIHNvY2tldFxuICAgKiBAcGFyYW0ge09iamVjdH0gW2V4dGVuc2lvbnNdIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBuZWdvdGlhdGVkIGV4dGVuc2lvbnNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2dlbmVyYXRlTWFza10gVGhlIGZ1bmN0aW9uIHVzZWQgdG8gZ2VuZXJhdGUgdGhlIG1hc2tpbmdcbiAgICogICAgIGtleVxuICAgKi9cbiAgY29uc3RydWN0b3Ioc29ja2V0LCBleHRlbnNpb25zLCBnZW5lcmF0ZU1hc2spIHtcbiAgICB0aGlzLl9leHRlbnNpb25zID0gZXh0ZW5zaW9ucyB8fCB7fTtcblxuICAgIGlmIChnZW5lcmF0ZU1hc2spIHtcbiAgICAgIHRoaXMuX2dlbmVyYXRlTWFzayA9IGdlbmVyYXRlTWFzaztcbiAgICAgIHRoaXMuX21hc2tCdWZmZXIgPSBCdWZmZXIuYWxsb2MoNCk7XG4gICAgfVxuXG4gICAgdGhpcy5fc29ja2V0ID0gc29ja2V0O1xuXG4gICAgdGhpcy5fZmlyc3RGcmFnbWVudCA9IHRydWU7XG4gICAgdGhpcy5fY29tcHJlc3MgPSBmYWxzZTtcblxuICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgPSAwO1xuICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgdGhpcy5fc3RhdGUgPSBERUZBVUxUO1xuICAgIHRoaXMub25lcnJvciA9IE5PT1A7XG4gICAgdGhpc1trV2ViU29ja2V0XSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGcmFtZXMgYSBwaWVjZSBvZiBkYXRhIGFjY29yZGluZyB0byB0aGUgSHlCaSBXZWJTb2NrZXQgcHJvdG9jb2wuXG4gICAqXG4gICAqIEBwYXJhbSB7KEJ1ZmZlcnxTdHJpbmcpfSBkYXRhIFRoZSBkYXRhIHRvIGZyYW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgb2JqZWN0XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZmluPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gc2V0IHRoZVxuICAgKiAgICAgRklOIGJpdFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5nZW5lcmF0ZU1hc2tdIFRoZSBmdW5jdGlvbiB1c2VkIHRvIGdlbmVyYXRlIHRoZVxuICAgKiAgICAgbWFza2luZyBrZXlcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tYXNrPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFza1xuICAgKiAgICAgYGRhdGFgXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBbb3B0aW9ucy5tYXNrQnVmZmVyXSBUaGUgYnVmZmVyIHVzZWQgdG8gc3RvcmUgdGhlIG1hc2tpbmdcbiAgICogICAgIGtleVxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5vcGNvZGUgVGhlIG9wY29kZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnJlYWRPbmx5PWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBgZGF0YWAgY2FuIGJlXG4gICAqICAgICBtb2RpZmllZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnJzdjE9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBzZXQgdGhlXG4gICAqICAgICBSU1YxIGJpdFxuICAgKiBAcmV0dXJuIHsoQnVmZmVyfFN0cmluZylbXX0gVGhlIGZyYW1lZCBkYXRhXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHN0YXRpYyBmcmFtZShkYXRhLCBvcHRpb25zKSB7XG4gICAgbGV0IG1hc2s7XG4gICAgbGV0IG1lcmdlID0gZmFsc2U7XG4gICAgbGV0IG9mZnNldCA9IDI7XG4gICAgbGV0IHNraXBNYXNraW5nID0gZmFsc2U7XG5cbiAgICBpZiAob3B0aW9ucy5tYXNrKSB7XG4gICAgICBtYXNrID0gb3B0aW9ucy5tYXNrQnVmZmVyIHx8IG1hc2tCdWZmZXI7XG5cbiAgICAgIGlmIChvcHRpb25zLmdlbmVyYXRlTWFzaykge1xuICAgICAgICBvcHRpb25zLmdlbmVyYXRlTWFzayhtYXNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyYW5kb21Qb29sUG9pbnRlciA9PT0gUkFORE9NX1BPT0xfU0laRSkge1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICAqL1xuICAgICAgICAgIGlmIChyYW5kb21Qb29sID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGxhemlseSBpbml0aWFsaXplZCBiZWNhdXNlIHNlcnZlci1zZW50IGZyYW1lcyBtdXN0IG5vdFxuICAgICAgICAgICAgLy8gYmUgbWFza2VkIHNvIGl0IG1heSBuZXZlciBiZSB1c2VkLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHJhbmRvbVBvb2wgPSBCdWZmZXIuYWxsb2MoUkFORE9NX1BPT0xfU0laRSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmFuZG9tRmlsbFN5bmMocmFuZG9tUG9vbCwgMCwgUkFORE9NX1BPT0xfU0laRSk7XG4gICAgICAgICAgcmFuZG9tUG9vbFBvaW50ZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFza1swXSA9IHJhbmRvbVBvb2xbcmFuZG9tUG9vbFBvaW50ZXIrK107XG4gICAgICAgIG1hc2tbMV0gPSByYW5kb21Qb29sW3JhbmRvbVBvb2xQb2ludGVyKytdO1xuICAgICAgICBtYXNrWzJdID0gcmFuZG9tUG9vbFtyYW5kb21Qb29sUG9pbnRlcisrXTtcbiAgICAgICAgbWFza1szXSA9IHJhbmRvbVBvb2xbcmFuZG9tUG9vbFBvaW50ZXIrK107XG4gICAgICB9XG5cbiAgICAgIHNraXBNYXNraW5nID0gKG1hc2tbMF0gfCBtYXNrWzFdIHwgbWFza1syXSB8IG1hc2tbM10pID09PSAwO1xuICAgICAgb2Zmc2V0ID0gNjtcbiAgICB9XG5cbiAgICBsZXQgZGF0YUxlbmd0aDtcblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChcbiAgICAgICAgKCFvcHRpb25zLm1hc2sgfHwgc2tpcE1hc2tpbmcpICYmXG4gICAgICAgIG9wdGlvbnNba0J5dGVMZW5ndGhdICE9PSB1bmRlZmluZWRcbiAgICAgICkge1xuICAgICAgICBkYXRhTGVuZ3RoID0gb3B0aW9uc1trQnl0ZUxlbmd0aF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gQnVmZmVyLmZyb20oZGF0YSk7XG4gICAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgbWVyZ2UgPSBvcHRpb25zLm1hc2sgJiYgb3B0aW9ucy5yZWFkT25seSAmJiAhc2tpcE1hc2tpbmc7XG4gICAgfVxuXG4gICAgbGV0IHBheWxvYWRMZW5ndGggPSBkYXRhTGVuZ3RoO1xuXG4gICAgaWYgKGRhdGFMZW5ndGggPj0gNjU1MzYpIHtcbiAgICAgIG9mZnNldCArPSA4O1xuICAgICAgcGF5bG9hZExlbmd0aCA9IDEyNztcbiAgICB9IGVsc2UgaWYgKGRhdGFMZW5ndGggPiAxMjUpIHtcbiAgICAgIG9mZnNldCArPSAyO1xuICAgICAgcGF5bG9hZExlbmd0aCA9IDEyNjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBCdWZmZXIuYWxsb2NVbnNhZmUobWVyZ2UgPyBkYXRhTGVuZ3RoICsgb2Zmc2V0IDogb2Zmc2V0KTtcblxuICAgIHRhcmdldFswXSA9IG9wdGlvbnMuZmluID8gb3B0aW9ucy5vcGNvZGUgfCAweDgwIDogb3B0aW9ucy5vcGNvZGU7XG4gICAgaWYgKG9wdGlvbnMucnN2MSkgdGFyZ2V0WzBdIHw9IDB4NDA7XG5cbiAgICB0YXJnZXRbMV0gPSBwYXlsb2FkTGVuZ3RoO1xuXG4gICAgaWYgKHBheWxvYWRMZW5ndGggPT09IDEyNikge1xuICAgICAgdGFyZ2V0LndyaXRlVUludDE2QkUoZGF0YUxlbmd0aCwgMik7XG4gICAgfSBlbHNlIGlmIChwYXlsb2FkTGVuZ3RoID09PSAxMjcpIHtcbiAgICAgIHRhcmdldFsyXSA9IHRhcmdldFszXSA9IDA7XG4gICAgICB0YXJnZXQud3JpdGVVSW50QkUoZGF0YUxlbmd0aCwgNCwgNik7XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLm1hc2spIHJldHVybiBbdGFyZ2V0LCBkYXRhXTtcblxuICAgIHRhcmdldFsxXSB8PSAweDgwO1xuICAgIHRhcmdldFtvZmZzZXQgLSA0XSA9IG1hc2tbMF07XG4gICAgdGFyZ2V0W29mZnNldCAtIDNdID0gbWFza1sxXTtcbiAgICB0YXJnZXRbb2Zmc2V0IC0gMl0gPSBtYXNrWzJdO1xuICAgIHRhcmdldFtvZmZzZXQgLSAxXSA9IG1hc2tbM107XG5cbiAgICBpZiAoc2tpcE1hc2tpbmcpIHJldHVybiBbdGFyZ2V0LCBkYXRhXTtcblxuICAgIGlmIChtZXJnZSkge1xuICAgICAgYXBwbHlNYXNrKGRhdGEsIG1hc2ssIHRhcmdldCwgb2Zmc2V0LCBkYXRhTGVuZ3RoKTtcbiAgICAgIHJldHVybiBbdGFyZ2V0XTtcbiAgICB9XG5cbiAgICBhcHBseU1hc2soZGF0YSwgbWFzaywgZGF0YSwgMCwgZGF0YUxlbmd0aCk7XG4gICAgcmV0dXJuIFt0YXJnZXQsIGRhdGFdO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgY2xvc2UgbWVzc2FnZSB0byB0aGUgb3RoZXIgcGVlci5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtjb2RlXSBUaGUgc3RhdHVzIGNvZGUgY29tcG9uZW50IG9mIHRoZSBib2R5XG4gICAqIEBwYXJhbSB7KFN0cmluZ3xCdWZmZXIpfSBbZGF0YV0gVGhlIG1lc3NhZ2UgY29tcG9uZW50IG9mIHRoZSBib2R5XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW21hc2s9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIHRoZSBtZXNzYWdlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY2xvc2UoY29kZSwgZGF0YSwgbWFzaywgY2IpIHtcbiAgICBsZXQgYnVmO1xuXG4gICAgaWYgKGNvZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYnVmID0gRU1QVFlfQlVGRkVSO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvZGUgIT09ICdudW1iZXInIHx8ICFpc1ZhbGlkU3RhdHVzQ29kZShjb2RlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHZhbGlkIGVycm9yIGNvZGUgbnVtYmVyJyk7XG4gICAgfSBlbHNlIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgIWRhdGEubGVuZ3RoKSB7XG4gICAgICBidWYgPSBCdWZmZXIuYWxsb2NVbnNhZmUoMik7XG4gICAgICBidWYud3JpdGVVSW50MTZCRShjb2RlLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSk7XG5cbiAgICAgIGlmIChsZW5ndGggPiAxMjMpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSBtZXNzYWdlIG11c3Qgbm90IGJlIGdyZWF0ZXIgdGhhbiAxMjMgYnl0ZXMnKTtcbiAgICAgIH1cblxuICAgICAgYnVmID0gQnVmZmVyLmFsbG9jVW5zYWZlKDIgKyBsZW5ndGgpO1xuICAgICAgYnVmLndyaXRlVUludDE2QkUoY29kZSwgMCk7XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYnVmLndyaXRlKGRhdGEsIDIpO1xuICAgICAgfSBlbHNlIGlmIChpc1VpbnQ4QXJyYXkoZGF0YSkpIHtcbiAgICAgICAgYnVmLnNldChkYXRhLCAyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nIG9yIGEgVWludDhBcnJheScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBba0J5dGVMZW5ndGhdOiBidWYubGVuZ3RoLFxuICAgICAgZmluOiB0cnVlLFxuICAgICAgZ2VuZXJhdGVNYXNrOiB0aGlzLl9nZW5lcmF0ZU1hc2ssXG4gICAgICBtYXNrLFxuICAgICAgbWFza0J1ZmZlcjogdGhpcy5fbWFza0J1ZmZlcixcbiAgICAgIG9wY29kZTogMHgwOCxcbiAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgIHJzdjE6IGZhbHNlXG4gICAgfTtcblxuICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gREVGQVVMVCkge1xuICAgICAgdGhpcy5lbnF1ZXVlKFt0aGlzLmRpc3BhdGNoLCBidWYsIGZhbHNlLCBvcHRpb25zLCBjYl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoYnVmLCBvcHRpb25zKSwgY2IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIHBpbmcgbWVzc2FnZSB0byB0aGUgb3RoZXIgcGVlci5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbbWFzaz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2sgYGRhdGFgXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcGluZyhkYXRhLCBtYXNrLCBjYikge1xuICAgIGxldCBieXRlTGVuZ3RoO1xuICAgIGxldCByZWFkT25seTtcblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGJ5dGVMZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChkYXRhKTtcbiAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChpc0Jsb2IoZGF0YSkpIHtcbiAgICAgIGJ5dGVMZW5ndGggPSBkYXRhLnNpemU7XG4gICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gdG9CdWZmZXIoZGF0YSk7XG4gICAgICBieXRlTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG4gICAgICByZWFkT25seSA9IHRvQnVmZmVyLnJlYWRPbmx5O1xuICAgIH1cblxuICAgIGlmIChieXRlTGVuZ3RoID4gMTI1KSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIGRhdGEgc2l6ZSBtdXN0IG5vdCBiZSBncmVhdGVyIHRoYW4gMTI1IGJ5dGVzJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIFtrQnl0ZUxlbmd0aF06IGJ5dGVMZW5ndGgsXG4gICAgICBmaW46IHRydWUsXG4gICAgICBnZW5lcmF0ZU1hc2s6IHRoaXMuX2dlbmVyYXRlTWFzayxcbiAgICAgIG1hc2ssXG4gICAgICBtYXNrQnVmZmVyOiB0aGlzLl9tYXNrQnVmZmVyLFxuICAgICAgb3Bjb2RlOiAweDA5LFxuICAgICAgcmVhZE9ubHksXG4gICAgICByc3YxOiBmYWxzZVxuICAgIH07XG5cbiAgICBpZiAoaXNCbG9iKGRhdGEpKSB7XG4gICAgICBpZiAodGhpcy5fc3RhdGUgIT09IERFRkFVTFQpIHtcbiAgICAgICAgdGhpcy5lbnF1ZXVlKFt0aGlzLmdldEJsb2JEYXRhLCBkYXRhLCBmYWxzZSwgb3B0aW9ucywgY2JdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2V0QmxvYkRhdGEoZGF0YSwgZmFsc2UsIG9wdGlvbnMsIGNiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlICE9PSBERUZBVUxUKSB7XG4gICAgICB0aGlzLmVucXVldWUoW3RoaXMuZGlzcGF0Y2gsIGRhdGEsIGZhbHNlLCBvcHRpb25zLCBjYl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoZGF0YSwgb3B0aW9ucyksIGNiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBwb25nIG1lc3NhZ2UgdG8gdGhlIG90aGVyIHBlZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW21hc2s9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHBvbmcoZGF0YSwgbWFzaywgY2IpIHtcbiAgICBsZXQgYnl0ZUxlbmd0aDtcbiAgICBsZXQgcmVhZE9ubHk7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBieXRlTGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSk7XG4gICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaXNCbG9iKGRhdGEpKSB7XG4gICAgICBieXRlTGVuZ3RoID0gZGF0YS5zaXplO1xuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHRvQnVmZmVyKGRhdGEpO1xuICAgICAgYnl0ZUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgcmVhZE9ubHkgPSB0b0J1ZmZlci5yZWFkT25seTtcbiAgICB9XG5cbiAgICBpZiAoYnl0ZUxlbmd0aCA+IDEyNSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSBkYXRhIHNpemUgbXVzdCBub3QgYmUgZ3JlYXRlciB0aGFuIDEyNSBieXRlcycpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBba0J5dGVMZW5ndGhdOiBieXRlTGVuZ3RoLFxuICAgICAgZmluOiB0cnVlLFxuICAgICAgZ2VuZXJhdGVNYXNrOiB0aGlzLl9nZW5lcmF0ZU1hc2ssXG4gICAgICBtYXNrLFxuICAgICAgbWFza0J1ZmZlcjogdGhpcy5fbWFza0J1ZmZlcixcbiAgICAgIG9wY29kZTogMHgwYSxcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgcnN2MTogZmFsc2VcbiAgICB9O1xuXG4gICAgaWYgKGlzQmxvYihkYXRhKSkge1xuICAgICAgaWYgKHRoaXMuX3N0YXRlICE9PSBERUZBVUxUKSB7XG4gICAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5nZXRCbG9iRGF0YSwgZGF0YSwgZmFsc2UsIG9wdGlvbnMsIGNiXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdldEJsb2JEYXRhKGRhdGEsIGZhbHNlLCBvcHRpb25zLCBjYik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSAhPT0gREVGQVVMVCkge1xuICAgICAgdGhpcy5lbnF1ZXVlKFt0aGlzLmRpc3BhdGNoLCBkYXRhLCBmYWxzZSwgb3B0aW9ucywgY2JdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZW5kRnJhbWUoU2VuZGVyLmZyYW1lKGRhdGEsIG9wdGlvbnMpLCBjYik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgZGF0YSBtZXNzYWdlIHRvIHRoZSBvdGhlciBwZWVyLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgVGhlIG1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmJpbmFyeT1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGlzIGJpbmFyeVxuICAgKiAgICAgb3IgdGV4dFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNvbXByZXNzPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG9cbiAgICogICAgIGNvbXByZXNzIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZpbj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZyYWdtZW50IGlzIHRoZVxuICAgKiAgICAgbGFzdCBvbmVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tYXNrPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFza1xuICAgKiAgICAgYGRhdGFgXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc2VuZChkYXRhLCBvcHRpb25zLCBjYikge1xuICAgIGNvbnN0IHBlck1lc3NhZ2VEZWZsYXRlID0gdGhpcy5fZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXTtcbiAgICBsZXQgb3Bjb2RlID0gb3B0aW9ucy5iaW5hcnkgPyAyIDogMTtcbiAgICBsZXQgcnN2MSA9IG9wdGlvbnMuY29tcHJlc3M7XG5cbiAgICBsZXQgYnl0ZUxlbmd0aDtcbiAgICBsZXQgcmVhZE9ubHk7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBieXRlTGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSk7XG4gICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaXNCbG9iKGRhdGEpKSB7XG4gICAgICBieXRlTGVuZ3RoID0gZGF0YS5zaXplO1xuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHRvQnVmZmVyKGRhdGEpO1xuICAgICAgYnl0ZUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgcmVhZE9ubHkgPSB0b0J1ZmZlci5yZWFkT25seTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZmlyc3RGcmFnbWVudCkge1xuICAgICAgdGhpcy5fZmlyc3RGcmFnbWVudCA9IGZhbHNlO1xuICAgICAgaWYgKFxuICAgICAgICByc3YxICYmXG4gICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlICYmXG4gICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlLnBhcmFtc1tcbiAgICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZS5faXNTZXJ2ZXJcbiAgICAgICAgICAgID8gJ3NlcnZlcl9ub19jb250ZXh0X3Rha2VvdmVyJ1xuICAgICAgICAgICAgOiAnY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXInXG4gICAgICAgIF1cbiAgICAgICkge1xuICAgICAgICByc3YxID0gYnl0ZUxlbmd0aCA+PSBwZXJNZXNzYWdlRGVmbGF0ZS5fdGhyZXNob2xkO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29tcHJlc3MgPSByc3YxO1xuICAgIH0gZWxzZSB7XG4gICAgICByc3YxID0gZmFsc2U7XG4gICAgICBvcGNvZGUgPSAwO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmZpbikgdGhpcy5fZmlyc3RGcmFnbWVudCA9IHRydWU7XG5cbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgW2tCeXRlTGVuZ3RoXTogYnl0ZUxlbmd0aCxcbiAgICAgIGZpbjogb3B0aW9ucy5maW4sXG4gICAgICBnZW5lcmF0ZU1hc2s6IHRoaXMuX2dlbmVyYXRlTWFzayxcbiAgICAgIG1hc2s6IG9wdGlvbnMubWFzayxcbiAgICAgIG1hc2tCdWZmZXI6IHRoaXMuX21hc2tCdWZmZXIsXG4gICAgICBvcGNvZGUsXG4gICAgICByZWFkT25seSxcbiAgICAgIHJzdjFcbiAgICB9O1xuXG4gICAgaWYgKGlzQmxvYihkYXRhKSkge1xuICAgICAgaWYgKHRoaXMuX3N0YXRlICE9PSBERUZBVUxUKSB7XG4gICAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5nZXRCbG9iRGF0YSwgZGF0YSwgdGhpcy5fY29tcHJlc3MsIG9wdHMsIGNiXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdldEJsb2JEYXRhKGRhdGEsIHRoaXMuX2NvbXByZXNzLCBvcHRzLCBjYik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSAhPT0gREVGQVVMVCkge1xuICAgICAgdGhpcy5lbnF1ZXVlKFt0aGlzLmRpc3BhdGNoLCBkYXRhLCB0aGlzLl9jb21wcmVzcywgb3B0cywgY2JdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwYXRjaChkYXRhLCB0aGlzLl9jb21wcmVzcywgb3B0cywgY2IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjb250ZW50cyBvZiBhIGJsb2IgYXMgYmluYXJ5IGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7QmxvYn0gYmxvYiBUaGUgYmxvYlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtjb21wcmVzcz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIGNvbXByZXNzXG4gICAqICAgICB0aGUgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZpbj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIHNldCB0aGVcbiAgICogICAgIEZJTiBiaXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMuZ2VuZXJhdGVNYXNrXSBUaGUgZnVuY3Rpb24gdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAgICogICAgIG1hc2tpbmcga2V5XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWFzaz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2tcbiAgICogICAgIGBkYXRhYFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gW29wdGlvbnMubWFza0J1ZmZlcl0gVGhlIGJ1ZmZlciB1c2VkIHRvIHN0b3JlIHRoZSBtYXNraW5nXG4gICAqICAgICBrZXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMub3Bjb2RlIFRoZSBvcGNvZGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yZWFkT25seT1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGNhbiBiZVxuICAgKiAgICAgbW9kaWZpZWRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yc3YxPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gc2V0IHRoZVxuICAgKiAgICAgUlNWMSBiaXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QmxvYkRhdGEoYmxvYiwgY29tcHJlc3MsIG9wdGlvbnMsIGNiKSB7XG4gICAgdGhpcy5fYnVmZmVyZWRCeXRlcyArPSBvcHRpb25zW2tCeXRlTGVuZ3RoXTtcbiAgICB0aGlzLl9zdGF0ZSA9IEdFVF9CTE9CX0RBVEE7XG5cbiAgICBibG9iXG4gICAgICAuYXJyYXlCdWZmZXIoKVxuICAgICAgLnRoZW4oKGFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9zb2NrZXQuZGVzdHJveWVkKSB7XG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ1RoZSBzb2NrZXQgd2FzIGNsb3NlZCB3aGlsZSB0aGUgYmxvYiB3YXMgYmVpbmcgcmVhZCdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBgY2FsbENhbGxiYWNrc2AgaXMgY2FsbGVkIGluIHRoZSBuZXh0IHRpY2sgdG8gZW5zdXJlIHRoYXQgZXJyb3JzXG4gICAgICAgICAgLy8gdGhhdCBtaWdodCBiZSB0aHJvd24gaW4gdGhlIGNhbGxiYWNrcyBiZWhhdmUgbGlrZSBlcnJvcnMgdGhyb3duXG4gICAgICAgICAgLy8gb3V0c2lkZSB0aGUgcHJvbWlzZSBjaGFpbi5cbiAgICAgICAgICAvL1xuICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soY2FsbENhbGxiYWNrcywgdGhpcywgZXJyLCBjYik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYnVmZmVyZWRCeXRlcyAtPSBvcHRpb25zW2tCeXRlTGVuZ3RoXTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRvQnVmZmVyKGFycmF5QnVmZmVyKTtcblxuICAgICAgICBpZiAoIWNvbXByZXNzKSB7XG4gICAgICAgICAgdGhpcy5fc3RhdGUgPSBERUZBVUxUO1xuICAgICAgICAgIHRoaXMuc2VuZEZyYW1lKFNlbmRlci5mcmFtZShkYXRhLCBvcHRpb25zKSwgY2IpO1xuICAgICAgICAgIHRoaXMuZGVxdWV1ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2goZGF0YSwgY29tcHJlc3MsIG9wdGlvbnMsIGNiKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGBvbkVycm9yYCBpcyBjYWxsZWQgaW4gdGhlIG5leHQgdGljayBmb3IgdGhlIHNhbWUgcmVhc29uIHRoYXRcbiAgICAgICAgLy8gYGNhbGxDYWxsYmFja3NgIGFib3ZlIGlzLlxuICAgICAgICAvL1xuICAgICAgICBwcm9jZXNzLm5leHRUaWNrKG9uRXJyb3IsIHRoaXMsIGVyciwgY2IpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7KEJ1ZmZlcnxTdHJpbmcpfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbY29tcHJlc3M9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBjb21wcmVzc1xuICAgKiAgICAgYGRhdGFgXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgb2JqZWN0XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZmluPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gc2V0IHRoZVxuICAgKiAgICAgRklOIGJpdFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5nZW5lcmF0ZU1hc2tdIFRoZSBmdW5jdGlvbiB1c2VkIHRvIGdlbmVyYXRlIHRoZVxuICAgKiAgICAgbWFza2luZyBrZXlcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tYXNrPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFza1xuICAgKiAgICAgYGRhdGFgXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBbb3B0aW9ucy5tYXNrQnVmZmVyXSBUaGUgYnVmZmVyIHVzZWQgdG8gc3RvcmUgdGhlIG1hc2tpbmdcbiAgICogICAgIGtleVxuICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5vcGNvZGUgVGhlIG9wY29kZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnJlYWRPbmx5PWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBgZGF0YWAgY2FuIGJlXG4gICAqICAgICBtb2RpZmllZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnJzdjE9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBzZXQgdGhlXG4gICAqICAgICBSU1YxIGJpdFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkaXNwYXRjaChkYXRhLCBjb21wcmVzcywgb3B0aW9ucywgY2IpIHtcbiAgICBpZiAoIWNvbXByZXNzKSB7XG4gICAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoZGF0YSwgb3B0aW9ucyksIGNiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwZXJNZXNzYWdlRGVmbGF0ZSA9IHRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV07XG5cbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzICs9IG9wdGlvbnNba0J5dGVMZW5ndGhdO1xuICAgIHRoaXMuX3N0YXRlID0gREVGTEFUSU5HO1xuICAgIHBlck1lc3NhZ2VEZWZsYXRlLmNvbXByZXNzKGRhdGEsIG9wdGlvbnMuZmluLCAoXywgYnVmKSA9PiB7XG4gICAgICBpZiAodGhpcy5fc29ja2V0LmRlc3Ryb3llZCkge1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1RoZSBzb2NrZXQgd2FzIGNsb3NlZCB3aGlsZSBkYXRhIHdhcyBiZWluZyBjb21wcmVzc2VkJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNhbGxDYWxsYmFja3ModGhpcywgZXJyLCBjYik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYnVmZmVyZWRCeXRlcyAtPSBvcHRpb25zW2tCeXRlTGVuZ3RoXTtcbiAgICAgIHRoaXMuX3N0YXRlID0gREVGQVVMVDtcbiAgICAgIG9wdGlvbnMucmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VuZEZyYW1lKFNlbmRlci5mcmFtZShidWYsIG9wdGlvbnMpLCBjYik7XG4gICAgICB0aGlzLmRlcXVldWUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBxdWV1ZWQgc2VuZCBvcGVyYXRpb25zLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVxdWV1ZSgpIHtcbiAgICB3aGlsZSAodGhpcy5fc3RhdGUgPT09IERFRkFVTFQgJiYgdGhpcy5fcXVldWUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLl9xdWV1ZS5zaGlmdCgpO1xuXG4gICAgICB0aGlzLl9idWZmZXJlZEJ5dGVzIC09IHBhcmFtc1szXVtrQnl0ZUxlbmd0aF07XG4gICAgICBSZWZsZWN0LmFwcGx5KHBhcmFtc1swXSwgdGhpcywgcGFyYW1zLnNsaWNlKDEpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5xdWV1ZXMgYSBzZW5kIG9wZXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gcGFyYW1zIFNlbmQgb3BlcmF0aW9uIHBhcmFtZXRlcnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBlbnF1ZXVlKHBhcmFtcykge1xuICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgKz0gcGFyYW1zWzNdW2tCeXRlTGVuZ3RoXTtcbiAgICB0aGlzLl9xdWV1ZS5wdXNoKHBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBmcmFtZS5cbiAgICpcbiAgICogQHBhcmFtIHsoQnVmZmVyIHwgU3RyaW5nKVtdfSBsaXN0IFRoZSBmcmFtZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNlbmRGcmFtZShsaXN0LCBjYikge1xuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5fc29ja2V0LmNvcmsoKTtcbiAgICAgIHRoaXMuX3NvY2tldC53cml0ZShsaXN0WzBdKTtcbiAgICAgIHRoaXMuX3NvY2tldC53cml0ZShsaXN0WzFdLCBjYik7XG4gICAgICB0aGlzLl9zb2NrZXQudW5jb3JrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NvY2tldC53cml0ZShsaXN0WzBdLCBjYik7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VuZGVyO1xuXG4vKipcbiAqIENhbGxzIHF1ZXVlZCBjYWxsYmFja3Mgd2l0aCBhbiBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge1NlbmRlcn0gc2VuZGVyIFRoZSBgU2VuZGVyYCBpbnN0YW5jZVxuICogQHBhcmFtIHtFcnJvcn0gZXJyIFRoZSBlcnJvciB0byBjYWxsIHRoZSBjYWxsYmFja3Mgd2l0aFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBUaGUgZmlyc3QgY2FsbGJhY2tcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNhbGxDYWxsYmFja3Moc2VuZGVyLCBlcnIsIGNiKSB7XG4gIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKGVycik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZW5kZXIuX3F1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc2VuZGVyLl9xdWV1ZVtpXTtcbiAgICBjb25zdCBjYWxsYmFjayA9IHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhlcnIpO1xuICB9XG59XG5cbi8qKlxuICogSGFuZGxlcyBhIGBTZW5kZXJgIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7U2VuZGVyfSBzZW5kZXIgVGhlIGBTZW5kZXJgIGluc3RhbmNlXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIgVGhlIGVycm9yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIFRoZSBmaXJzdCBwZW5kaW5nIGNhbGxiYWNrXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBvbkVycm9yKHNlbmRlciwgZXJyLCBjYikge1xuICBjYWxsQ2FsbGJhY2tzKHNlbmRlciwgZXJyLCBjYik7XG4gIHNlbmRlci5vbmVycm9yKGVycik7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7IGtGb3JPbkV2ZW50QXR0cmlidXRlLCBrTGlzdGVuZXIgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IGtDb2RlID0gU3ltYm9sKCdrQ29kZScpO1xuY29uc3Qga0RhdGEgPSBTeW1ib2woJ2tEYXRhJyk7XG5jb25zdCBrRXJyb3IgPSBTeW1ib2woJ2tFcnJvcicpO1xuY29uc3Qga01lc3NhZ2UgPSBTeW1ib2woJ2tNZXNzYWdlJyk7XG5jb25zdCBrUmVhc29uID0gU3ltYm9sKCdrUmVhc29uJyk7XG5jb25zdCBrVGFyZ2V0ID0gU3ltYm9sKCdrVGFyZ2V0Jyk7XG5jb25zdCBrVHlwZSA9IFN5bWJvbCgna1R5cGUnKTtcbmNvbnN0IGtXYXNDbGVhbiA9IFN5bWJvbCgna1dhc0NsZWFuJyk7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGFuIGV2ZW50LlxuICovXG5jbGFzcyBFdmVudCB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYEV2ZW50YC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gSWYgdGhlIGB0eXBlYCBhcmd1bWVudCBpcyBub3Qgc3BlY2lmaWVkXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpc1trVGFyZ2V0XSA9IG51bGw7XG4gICAgdGhpc1trVHlwZV0gPSB0eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHsqfVxuICAgKi9cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpc1trVGFyZ2V0XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXNba1R5cGVdO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudC5wcm90b3R5cGUsICd0YXJnZXQnLCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnQucHJvdG90eXBlLCAndHlwZScsIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBjbG9zZSBldmVudC5cbiAqXG4gKiBAZXh0ZW5kcyBFdmVudFxuICovXG5jbGFzcyBDbG9zZUV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGBDbG9zZUV2ZW50YC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQSBkaWN0aW9uYXJ5IG9iamVjdCB0aGF0IGFsbG93cyBmb3Igc2V0dGluZ1xuICAgKiAgICAgYXR0cmlidXRlcyB2aWEgb2JqZWN0IG1lbWJlcnMgb2YgdGhlIHNhbWUgbmFtZVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuY29kZT0wXSBUaGUgc3RhdHVzIGNvZGUgZXhwbGFpbmluZyB3aHkgdGhlXG4gICAqICAgICBjb25uZWN0aW9uIHdhcyBjbG9zZWRcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnJlYXNvbj0nJ10gQSBodW1hbi1yZWFkYWJsZSBzdHJpbmcgZXhwbGFpbmluZyB3aHlcbiAgICogICAgIHRoZSBjb25uZWN0aW9uIHdhcyBjbG9zZWRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy53YXNDbGVhbj1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRoZVxuICAgKiAgICAgY29ubmVjdGlvbiB3YXMgY2xlYW5seSBjbG9zZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHR5cGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpc1trQ29kZV0gPSBvcHRpb25zLmNvZGUgPT09IHVuZGVmaW5lZCA/IDAgOiBvcHRpb25zLmNvZGU7XG4gICAgdGhpc1trUmVhc29uXSA9IG9wdGlvbnMucmVhc29uID09PSB1bmRlZmluZWQgPyAnJyA6IG9wdGlvbnMucmVhc29uO1xuICAgIHRoaXNba1dhc0NsZWFuXSA9IG9wdGlvbnMud2FzQ2xlYW4gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogb3B0aW9ucy53YXNDbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgZ2V0IGNvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXNba0NvZGVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBnZXQgcmVhc29uKCkge1xuICAgIHJldHVybiB0aGlzW2tSZWFzb25dO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgZ2V0IHdhc0NsZWFuKCkge1xuICAgIHJldHVybiB0aGlzW2tXYXNDbGVhbl07XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KENsb3NlRXZlbnQucHJvdG90eXBlLCAnY29kZScsIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDbG9zZUV2ZW50LnByb3RvdHlwZSwgJ3JlYXNvbicsIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDbG9zZUV2ZW50LnByb3RvdHlwZSwgJ3dhc0NsZWFuJywgeyBlbnVtZXJhYmxlOiB0cnVlIH0pO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhbiBlcnJvciBldmVudC5cbiAqXG4gKiBAZXh0ZW5kcyBFdmVudFxuICovXG5jbGFzcyBFcnJvckV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGBFcnJvckV2ZW50YC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQSBkaWN0aW9uYXJ5IG9iamVjdCB0aGF0IGFsbG93cyBmb3Igc2V0dGluZ1xuICAgKiAgICAgYXR0cmlidXRlcyB2aWEgb2JqZWN0IG1lbWJlcnMgb2YgdGhlIHNhbWUgbmFtZVxuICAgKiBAcGFyYW0geyp9IFtvcHRpb25zLmVycm9yPW51bGxdIFRoZSBlcnJvciB0aGF0IGdlbmVyYXRlZCB0aGlzIGV2ZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5tZXNzYWdlPScnXSBUaGUgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgY29uc3RydWN0b3IodHlwZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzW2tFcnJvcl0gPSBvcHRpb25zLmVycm9yID09PSB1bmRlZmluZWQgPyBudWxsIDogb3B0aW9ucy5lcnJvcjtcbiAgICB0aGlzW2tNZXNzYWdlXSA9IG9wdGlvbnMubWVzc2FnZSA9PT0gdW5kZWZpbmVkID8gJycgOiBvcHRpb25zLm1lc3NhZ2U7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUgeyp9XG4gICAqL1xuICBnZXQgZXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXNba0Vycm9yXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0IG1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXNba01lc3NhZ2VdO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFcnJvckV2ZW50LnByb3RvdHlwZSwgJ2Vycm9yJywgeyBlbnVtZXJhYmxlOiB0cnVlIH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KEVycm9yRXZlbnQucHJvdG90eXBlLCAnbWVzc2FnZScsIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBtZXNzYWdlIGV2ZW50LlxuICpcbiAqIEBleHRlbmRzIEV2ZW50XG4gKi9cbmNsYXNzIE1lc3NhZ2VFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgTWVzc2FnZUV2ZW50YC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQSBkaWN0aW9uYXJ5IG9iamVjdCB0aGF0IGFsbG93cyBmb3Igc2V0dGluZ1xuICAgKiAgICAgYXR0cmlidXRlcyB2aWEgb2JqZWN0IG1lbWJlcnMgb2YgdGhlIHNhbWUgbmFtZVxuICAgKiBAcGFyYW0geyp9IFtvcHRpb25zLmRhdGE9bnVsbF0gVGhlIG1lc3NhZ2UgY29udGVudFxuICAgKi9cbiAgY29uc3RydWN0b3IodHlwZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzW2tEYXRhXSA9IG9wdGlvbnMuZGF0YSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG9wdGlvbnMuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7Kn1cbiAgICovXG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzW2tEYXRhXTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTWVzc2FnZUV2ZW50LnByb3RvdHlwZSwgJ2RhdGEnLCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG5cbi8qKlxuICogVGhpcyBwcm92aWRlcyBtZXRob2RzIGZvciBlbXVsYXRpbmcgdGhlIGBFdmVudFRhcmdldGAgaW50ZXJmYWNlLiBJdCdzIG5vdFxuICogbWVhbnQgdG8gYmUgdXNlZCBkaXJlY3RseS5cbiAqXG4gKiBAbWl4aW5cbiAqL1xuY29uc3QgRXZlbnRUYXJnZXQgPSB7XG4gIC8qKlxuICAgKiBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBldmVudCB0eXBlIHRvIGxpc3RlbiBmb3JcbiAgICogQHBhcmFtIHsoRnVuY3Rpb258T2JqZWN0KX0gaGFuZGxlciBUaGUgbGlzdGVuZXIgdG8gYWRkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQW4gb3B0aW9ucyBvYmplY3Qgc3BlY2lmaWVzIGNoYXJhY3RlcmlzdGljcyBhYm91dFxuICAgKiAgICAgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMub25jZT1mYWxzZV0gQSBgQm9vbGVhbmAgaW5kaWNhdGluZyB0aGF0IHRoZVxuICAgKiAgICAgbGlzdGVuZXIgc2hvdWxkIGJlIGludm9rZWQgYXQgbW9zdCBvbmNlIGFmdGVyIGJlaW5nIGFkZGVkLiBJZiBgdHJ1ZWAsXG4gICAqICAgICB0aGUgbGlzdGVuZXIgd291bGQgYmUgYXV0b21hdGljYWxseSByZW1vdmVkIHdoZW4gaW52b2tlZC5cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBvcHRpb25zID0ge30pIHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKHR5cGUpKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFvcHRpb25zW2tGb3JPbkV2ZW50QXR0cmlidXRlXSAmJlxuICAgICAgICBsaXN0ZW5lcltrTGlzdGVuZXJdID09PSBoYW5kbGVyICYmXG4gICAgICAgICFsaXN0ZW5lcltrRm9yT25FdmVudEF0dHJpYnV0ZV1cbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHdyYXBwZXI7XG5cbiAgICBpZiAodHlwZSA9PT0gJ21lc3NhZ2UnKSB7XG4gICAgICB3cmFwcGVyID0gZnVuY3Rpb24gb25NZXNzYWdlKGRhdGEsIGlzQmluYXJ5KSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IE1lc3NhZ2VFdmVudCgnbWVzc2FnZScsIHtcbiAgICAgICAgICBkYXRhOiBpc0JpbmFyeSA/IGRhdGEgOiBkYXRhLnRvU3RyaW5nKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXZlbnRba1RhcmdldF0gPSB0aGlzO1xuICAgICAgICBjYWxsTGlzdGVuZXIoaGFuZGxlciwgdGhpcywgZXZlbnQpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgIHdyYXBwZXIgPSBmdW5jdGlvbiBvbkNsb3NlKGNvZGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ2xvc2VFdmVudCgnY2xvc2UnLCB7XG4gICAgICAgICAgY29kZSxcbiAgICAgICAgICByZWFzb246IG1lc3NhZ2UudG9TdHJpbmcoKSxcbiAgICAgICAgICB3YXNDbGVhbjogdGhpcy5fY2xvc2VGcmFtZVJlY2VpdmVkICYmIHRoaXMuX2Nsb3NlRnJhbWVTZW50XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50W2tUYXJnZXRdID0gdGhpcztcbiAgICAgICAgY2FsbExpc3RlbmVyKGhhbmRsZXIsIHRoaXMsIGV2ZW50KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgICB3cmFwcGVyID0gZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFcnJvckV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50W2tUYXJnZXRdID0gdGhpcztcbiAgICAgICAgY2FsbExpc3RlbmVyKGhhbmRsZXIsIHRoaXMsIGV2ZW50KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb3BlbicpIHtcbiAgICAgIHdyYXBwZXIgPSBmdW5jdGlvbiBvbk9wZW4oKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdvcGVuJyk7XG5cbiAgICAgICAgZXZlbnRba1RhcmdldF0gPSB0aGlzO1xuICAgICAgICBjYWxsTGlzdGVuZXIoaGFuZGxlciwgdGhpcywgZXZlbnQpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdyYXBwZXJba0Zvck9uRXZlbnRBdHRyaWJ1dGVdID0gISFvcHRpb25zW2tGb3JPbkV2ZW50QXR0cmlidXRlXTtcbiAgICB3cmFwcGVyW2tMaXN0ZW5lcl0gPSBoYW5kbGVyO1xuXG4gICAgaWYgKG9wdGlvbnMub25jZSkge1xuICAgICAgdGhpcy5vbmNlKHR5cGUsIHdyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uKHR5cGUsIHdyYXBwZXIpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGV2ZW50IHR5cGUgdG8gcmVtb3ZlXG4gICAqIEBwYXJhbSB7KEZ1bmN0aW9ufE9iamVjdCl9IGhhbmRsZXIgVGhlIGxpc3RlbmVyIHRvIHJlbW92ZVxuICAgKiBAcHVibGljXG4gICAqL1xuICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIpIHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKHR5cGUpKSB7XG4gICAgICBpZiAobGlzdGVuZXJba0xpc3RlbmVyXSA9PT0gaGFuZGxlciAmJiAhbGlzdGVuZXJba0Zvck9uRXZlbnRBdHRyaWJ1dGVdKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDbG9zZUV2ZW50LFxuICBFcnJvckV2ZW50LFxuICBFdmVudCxcbiAgRXZlbnRUYXJnZXQsXG4gIE1lc3NhZ2VFdmVudFxufTtcblxuLyoqXG4gKiBDYWxsIGFuIGV2ZW50IGxpc3RlbmVyXG4gKlxuICogQHBhcmFtIHsoRnVuY3Rpb258T2JqZWN0KX0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIHRvIGNhbGxcbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgdmFsdWUgdG8gdXNlIGFzIGB0aGlzYGAgd2hlbiBjYWxsaW5nIHRoZSBsaXN0ZW5lclxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRvIHBhc3MgdG8gdGhlIGxpc3RlbmVyXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjYWxsTGlzdGVuZXIobGlzdGVuZXIsIHRoaXNBcmcsIGV2ZW50KSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdvYmplY3QnICYmIGxpc3RlbmVyLmhhbmRsZUV2ZW50KSB7XG4gICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpO1xuICB9IGVsc2Uge1xuICAgIGxpc3RlbmVyLmNhbGwodGhpc0FyZywgZXZlbnQpO1xuICB9XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7IHRva2VuQ2hhcnMgfSA9IHJlcXVpcmUoJy4vdmFsaWRhdGlvbicpO1xuXG4vKipcbiAqIEFkZHMgYW4gb2ZmZXIgdG8gdGhlIG1hcCBvZiBleHRlbnNpb24gb2ZmZXJzIG9yIGEgcGFyYW1ldGVyIHRvIHRoZSBtYXAgb2ZcbiAqIHBhcmFtZXRlcnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlc3QgVGhlIG1hcCBvZiBleHRlbnNpb24gb2ZmZXJzIG9yIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBleHRlbnNpb24gb3IgcGFyYW1ldGVyIG5hbWVcbiAqIEBwYXJhbSB7KE9iamVjdHxCb29sZWFufFN0cmluZyl9IGVsZW0gVGhlIGV4dGVuc2lvbiBwYXJhbWV0ZXJzIG9yIHRoZVxuICogICAgIHBhcmFtZXRlciB2YWx1ZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcHVzaChkZXN0LCBuYW1lLCBlbGVtKSB7XG4gIGlmIChkZXN0W25hbWVdID09PSB1bmRlZmluZWQpIGRlc3RbbmFtZV0gPSBbZWxlbV07XG4gIGVsc2UgZGVzdFtuYW1lXS5wdXNoKGVsZW0pO1xufVxuXG4vKipcbiAqIFBhcnNlcyB0aGUgYFNlYy1XZWJTb2NrZXQtRXh0ZW5zaW9uc2AgaGVhZGVyIGludG8gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXIgVGhlIGZpZWxkIHZhbHVlIG9mIHRoZSBoZWFkZXJcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHBhcnNlZCBvYmplY3RcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcGFyc2UoaGVhZGVyKSB7XG4gIGNvbnN0IG9mZmVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGxldCBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBsZXQgbXVzdFVuZXNjYXBlID0gZmFsc2U7XG4gIGxldCBpc0VzY2FwaW5nID0gZmFsc2U7XG4gIGxldCBpblF1b3RlcyA9IGZhbHNlO1xuICBsZXQgZXh0ZW5zaW9uTmFtZTtcbiAgbGV0IHBhcmFtTmFtZTtcbiAgbGV0IHN0YXJ0ID0gLTE7XG4gIGxldCBjb2RlID0gLTE7XG4gIGxldCBlbmQgPSAtMTtcbiAgbGV0IGkgPSAwO1xuXG4gIGZvciAoOyBpIDwgaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29kZSA9IGhlYWRlci5jaGFyQ29kZUF0KGkpO1xuXG4gICAgaWYgKGV4dGVuc2lvbk5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGVuZCA9PT0gLTEgJiYgdG9rZW5DaGFyc1tjb2RlXSA9PT0gMSkge1xuICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSBzdGFydCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBpICE9PSAwICYmXG4gICAgICAgIChjb2RlID09PSAweDIwIC8qICcgJyAqLyB8fCBjb2RlID09PSAweDA5KSAvKiAnXFx0JyAqL1xuICAgICAgKSB7XG4gICAgICAgIGlmIChlbmQgPT09IC0xICYmIHN0YXJ0ICE9PSAtMSkgZW5kID0gaTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgzYiAvKiAnOycgKi8gfHwgY29kZSA9PT0gMHgyYyAvKiAnLCcgKi8pIHtcbiAgICAgICAgaWYgKHN0YXJ0ID09PSAtMSkge1xuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZCA9PT0gLTEpIGVuZCA9IGk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBoZWFkZXIuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICAgIGlmIChjb2RlID09PSAweDJjKSB7XG4gICAgICAgICAgcHVzaChvZmZlcnMsIG5hbWUsIHBhcmFtcyk7XG4gICAgICAgICAgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleHRlbnNpb25OYW1lID0gbmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0ID0gZW5kID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhcmFtTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoZW5kID09PSAtMSAmJiB0b2tlbkNoYXJzW2NvZGVdID09PSAxKSB7XG4gICAgICAgIGlmIChzdGFydCA9PT0gLTEpIHN0YXJ0ID0gaTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgyMCB8fCBjb2RlID09PSAweDA5KSB7XG4gICAgICAgIGlmIChlbmQgPT09IC0xICYmIHN0YXJ0ICE9PSAtMSkgZW5kID0gaTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgzYiB8fCBjb2RlID09PSAweDJjKSB7XG4gICAgICAgIGlmIChzdGFydCA9PT0gLTEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmQgPT09IC0xKSBlbmQgPSBpO1xuICAgICAgICBwdXNoKHBhcmFtcywgaGVhZGVyLnNsaWNlKHN0YXJ0LCBlbmQpLCB0cnVlKTtcbiAgICAgICAgaWYgKGNvZGUgPT09IDB4MmMpIHtcbiAgICAgICAgICBwdXNoKG9mZmVycywgZXh0ZW5zaW9uTmFtZSwgcGFyYW1zKTtcbiAgICAgICAgICBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGV4dGVuc2lvbk5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFydCA9IGVuZCA9IC0xO1xuICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAweDNkIC8qICc9JyAqLyAmJiBzdGFydCAhPT0gLTEgJiYgZW5kID09PSAtMSkge1xuICAgICAgICBwYXJhbU5hbWUgPSBoZWFkZXIuc2xpY2Uoc3RhcnQsIGkpO1xuICAgICAgICBzdGFydCA9IGVuZCA9IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBhdCBpbmRleCAke2l9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vXG4gICAgICAvLyBUaGUgdmFsdWUgb2YgYSBxdW90ZWQtc3RyaW5nIGFmdGVyIHVuZXNjYXBpbmcgbXVzdCBjb25mb3JtIHRvIHRoZVxuICAgICAgLy8gdG9rZW4gQUJORiwgc28gb25seSB0b2tlbiBjaGFyYWN0ZXJzIGFyZSB2YWxpZC5cbiAgICAgIC8vIFJlZjogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY0NTUjc2VjdGlvbi05LjFcbiAgICAgIC8vXG4gICAgICBpZiAoaXNFc2NhcGluZykge1xuICAgICAgICBpZiAodG9rZW5DaGFyc1tjb2RlXSAhPT0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydCA9PT0gLTEpIHN0YXJ0ID0gaTtcbiAgICAgICAgZWxzZSBpZiAoIW11c3RVbmVzY2FwZSkgbXVzdFVuZXNjYXBlID0gdHJ1ZTtcbiAgICAgICAgaXNFc2NhcGluZyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpblF1b3Rlcykge1xuICAgICAgICBpZiAodG9rZW5DaGFyc1tjb2RlXSA9PT0gMSkge1xuICAgICAgICAgIGlmIChzdGFydCA9PT0gLTEpIHN0YXJ0ID0gaTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAweDIyIC8qICdcIicgKi8gJiYgc3RhcnQgIT09IC0xKSB7XG4gICAgICAgICAgaW5RdW90ZXMgPSBmYWxzZTtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4NWMgLyogJ1xcJyAqLykge1xuICAgICAgICAgIGlzRXNjYXBpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4MjIgJiYgaGVhZGVyLmNoYXJDb2RlQXQoaSAtIDEpID09PSAweDNkKSB7XG4gICAgICAgIGluUXVvdGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSAmJiB0b2tlbkNoYXJzW2NvZGVdID09PSAxKSB7XG4gICAgICAgIGlmIChzdGFydCA9PT0gLTEpIHN0YXJ0ID0gaTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhcnQgIT09IC0xICYmIChjb2RlID09PSAweDIwIHx8IGNvZGUgPT09IDB4MDkpKSB7XG4gICAgICAgIGlmIChlbmQgPT09IC0xKSBlbmQgPSBpO1xuICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAweDNiIHx8IGNvZGUgPT09IDB4MmMpIHtcbiAgICAgICAgaWYgKHN0YXJ0ID09PSAtMSkge1xuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZCA9PT0gLTEpIGVuZCA9IGk7XG4gICAgICAgIGxldCB2YWx1ZSA9IGhlYWRlci5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgICAgaWYgKG11c3RVbmVzY2FwZSkge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxcXC9nLCAnJyk7XG4gICAgICAgICAgbXVzdFVuZXNjYXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaChwYXJhbXMsIHBhcmFtTmFtZSwgdmFsdWUpO1xuICAgICAgICBpZiAoY29kZSA9PT0gMHgyYykge1xuICAgICAgICAgIHB1c2gob2ZmZXJzLCBleHRlbnNpb25OYW1lLCBwYXJhbXMpO1xuICAgICAgICAgIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZXh0ZW5zaW9uTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmFtTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgc3RhcnQgPSBlbmQgPSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gLTEgfHwgaW5RdW90ZXMgfHwgY29kZSA9PT0gMHgyMCB8fCBjb2RlID09PSAweDA5KSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBpbnB1dCcpO1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIGVuZCA9IGk7XG4gIGNvbnN0IHRva2VuID0gaGVhZGVyLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICBpZiAoZXh0ZW5zaW9uTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcHVzaChvZmZlcnMsIHRva2VuLCBwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXJhbU5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHVzaChwYXJhbXMsIHRva2VuLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKG11c3RVbmVzY2FwZSkge1xuICAgICAgcHVzaChwYXJhbXMsIHBhcmFtTmFtZSwgdG9rZW4ucmVwbGFjZSgvXFxcXC9nLCAnJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwdXNoKHBhcmFtcywgcGFyYW1OYW1lLCB0b2tlbik7XG4gICAgfVxuICAgIHB1c2gob2ZmZXJzLCBleHRlbnNpb25OYW1lLCBwYXJhbXMpO1xuICB9XG5cbiAgcmV0dXJuIG9mZmVycztcbn1cblxuLyoqXG4gKiBCdWlsZHMgdGhlIGBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnNgIGhlYWRlciBmaWVsZCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXh0ZW5zaW9ucyBUaGUgbWFwIG9mIGV4dGVuc2lvbnMgYW5kIHBhcmFtZXRlcnMgdG8gZm9ybWF0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gb2JqZWN0XG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdChleHRlbnNpb25zKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhleHRlbnNpb25zKVxuICAgIC5tYXAoKGV4dGVuc2lvbikgPT4ge1xuICAgICAgbGV0IGNvbmZpZ3VyYXRpb25zID0gZXh0ZW5zaW9uc1tleHRlbnNpb25dO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbmZpZ3VyYXRpb25zKSkgY29uZmlndXJhdGlvbnMgPSBbY29uZmlndXJhdGlvbnNdO1xuICAgICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25zXG4gICAgICAgIC5tYXAoKHBhcmFtcykgPT4ge1xuICAgICAgICAgIHJldHVybiBbZXh0ZW5zaW9uXVxuICAgICAgICAgICAgLmNvbmNhdChcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5tYXAoKGspID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gcGFyYW1zW2tdO1xuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzXG4gICAgICAgICAgICAgICAgICAubWFwKCh2KSA9PiAodiA9PT0gdHJ1ZSA/IGsgOiBgJHtrfT0ke3Z9YCkpXG4gICAgICAgICAgICAgICAgICAuam9pbignOyAnKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5qb2luKCc7ICcpO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignLCAnKTtcbiAgICB9KVxuICAgIC5qb2luKCcsICcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgZm9ybWF0LCBwYXJzZSB9O1xuIiwgIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogW1wiZXJyb3JcIiwgeyBcInZhcnNJZ25vcmVQYXR0ZXJuXCI6IFwiXkR1cGxleHxSZWFkYWJsZSRcIiwgXCJjYXVnaHRFcnJvcnNcIjogXCJub25lXCIgfV0gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcbmNvbnN0IGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5jb25zdCBuZXQgPSByZXF1aXJlKCduZXQnKTtcbmNvbnN0IHRscyA9IHJlcXVpcmUoJ3RscycpO1xuY29uc3QgeyByYW5kb21CeXRlcywgY3JlYXRlSGFzaCB9ID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5jb25zdCB7IER1cGxleCwgUmVhZGFibGUgfSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xuY29uc3QgeyBVUkwgfSA9IHJlcXVpcmUoJ3VybCcpO1xuXG5jb25zdCBQZXJNZXNzYWdlRGVmbGF0ZSA9IHJlcXVpcmUoJy4vcGVybWVzc2FnZS1kZWZsYXRlJyk7XG5jb25zdCBSZWNlaXZlciA9IHJlcXVpcmUoJy4vcmVjZWl2ZXInKTtcbmNvbnN0IFNlbmRlciA9IHJlcXVpcmUoJy4vc2VuZGVyJyk7XG5jb25zdCB7IGlzQmxvYiB9ID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uJyk7XG5cbmNvbnN0IHtcbiAgQklOQVJZX1RZUEVTLFxuICBDTE9TRV9USU1FT1VULFxuICBFTVBUWV9CVUZGRVIsXG4gIEdVSUQsXG4gIGtGb3JPbkV2ZW50QXR0cmlidXRlLFxuICBrTGlzdGVuZXIsXG4gIGtTdGF0dXNDb2RlLFxuICBrV2ViU29ja2V0LFxuICBOT09QXG59ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmNvbnN0IHtcbiAgRXZlbnRUYXJnZXQ6IHsgYWRkRXZlbnRMaXN0ZW5lciwgcmVtb3ZlRXZlbnRMaXN0ZW5lciB9XG59ID0gcmVxdWlyZSgnLi9ldmVudC10YXJnZXQnKTtcbmNvbnN0IHsgZm9ybWF0LCBwYXJzZSB9ID0gcmVxdWlyZSgnLi9leHRlbnNpb24nKTtcbmNvbnN0IHsgdG9CdWZmZXIgfSA9IHJlcXVpcmUoJy4vYnVmZmVyLXV0aWwnKTtcblxuY29uc3Qga0Fib3J0ZWQgPSBTeW1ib2woJ2tBYm9ydGVkJyk7XG5jb25zdCBwcm90b2NvbFZlcnNpb25zID0gWzgsIDEzXTtcbmNvbnN0IHJlYWR5U3RhdGVzID0gWydDT05ORUNUSU5HJywgJ09QRU4nLCAnQ0xPU0lORycsICdDTE9TRUQnXTtcbmNvbnN0IHN1YnByb3RvY29sUmVnZXggPSAvXlshIyQlJicqK1xcLS4wLTlBLVpeX2B8YS16fl0rJC87XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgV2ViU29ja2V0LlxuICpcbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5jbGFzcyBXZWJTb2NrZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGBXZWJTb2NrZXRgLlxuICAgKlxuICAgKiBAcGFyYW0geyhTdHJpbmd8VVJMKX0gYWRkcmVzcyBUaGUgVVJMIHRvIHdoaWNoIHRvIGNvbm5lY3RcbiAgICogQHBhcmFtIHsoU3RyaW5nfFN0cmluZ1tdKX0gW3Byb3RvY29sc10gVGhlIHN1YnByb3RvY29sc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIENvbm5lY3Rpb24gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IoYWRkcmVzcywgcHJvdG9jb2xzLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2JpbmFyeVR5cGUgPSBCSU5BUllfVFlQRVNbMF07XG4gICAgdGhpcy5fY2xvc2VDb2RlID0gMTAwNjtcbiAgICB0aGlzLl9jbG9zZUZyYW1lUmVjZWl2ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jbG9zZUZyYW1lU2VudCA9IGZhbHNlO1xuICAgIHRoaXMuX2Nsb3NlTWVzc2FnZSA9IEVNUFRZX0JVRkZFUjtcbiAgICB0aGlzLl9jbG9zZVRpbWVyID0gbnVsbDtcbiAgICB0aGlzLl9lcnJvckVtaXR0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9leHRlbnNpb25zID0ge307XG4gICAgdGhpcy5fcGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5fcHJvdG9jb2wgPSAnJztcbiAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNPTk5FQ1RJTkc7XG4gICAgdGhpcy5fcmVjZWl2ZXIgPSBudWxsO1xuICAgIHRoaXMuX3NlbmRlciA9IG51bGw7XG4gICAgdGhpcy5fc29ja2V0ID0gbnVsbDtcblxuICAgIGlmIChhZGRyZXNzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9idWZmZXJlZEFtb3VudCA9IDA7XG4gICAgICB0aGlzLl9pc1NlcnZlciA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVkaXJlY3RzID0gMDtcblxuICAgICAgaWYgKHByb3RvY29scyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3RvY29scyA9IFtdO1xuICAgICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShwcm90b2NvbHMpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvdG9jb2xzID09PSAnb2JqZWN0JyAmJiBwcm90b2NvbHMgIT09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zID0gcHJvdG9jb2xzO1xuICAgICAgICAgIHByb3RvY29scyA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3RvY29scyA9IFtwcm90b2NvbHNdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGluaXRBc0NsaWVudCh0aGlzLCBhZGRyZXNzLCBwcm90b2NvbHMsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hdXRvUG9uZyA9IG9wdGlvbnMuYXV0b1Bvbmc7XG4gICAgICB0aGlzLl9jbG9zZVRpbWVvdXQgPSBvcHRpb25zLmNsb3NlVGltZW91dDtcbiAgICAgIHRoaXMuX2lzU2VydmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9yIGhpc3RvcmljYWwgcmVhc29ucywgdGhlIGN1c3RvbSBcIm5vZGVidWZmZXJcIiB0eXBlIGlzIHVzZWQgYnkgdGhlIGRlZmF1bHRcbiAgICogaW5zdGVhZCBvZiBcImJsb2JcIi5cbiAgICpcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGdldCBiaW5hcnlUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLl9iaW5hcnlUeXBlO1xuICB9XG5cbiAgc2V0IGJpbmFyeVR5cGUodHlwZSkge1xuICAgIGlmICghQklOQVJZX1RZUEVTLmluY2x1ZGVzKHR5cGUpKSByZXR1cm47XG5cbiAgICB0aGlzLl9iaW5hcnlUeXBlID0gdHlwZTtcblxuICAgIC8vXG4gICAgLy8gQWxsb3cgdG8gY2hhbmdlIGBiaW5hcnlUeXBlYCBvbiB0aGUgZmx5LlxuICAgIC8vXG4gICAgaWYgKHRoaXMuX3JlY2VpdmVyKSB0aGlzLl9yZWNlaXZlci5fYmluYXJ5VHlwZSA9IHR5cGU7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIGdldCBidWZmZXJlZEFtb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuX3NvY2tldCkgcmV0dXJuIHRoaXMuX2J1ZmZlcmVkQW1vdW50O1xuXG4gICAgcmV0dXJuIHRoaXMuX3NvY2tldC5fd3JpdGFibGVTdGF0ZS5sZW5ndGggKyB0aGlzLl9zZW5kZXIuX2J1ZmZlcmVkQnl0ZXM7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGdldCBleHRlbnNpb25zKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9leHRlbnNpb25zKS5qb2luKCk7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNQYXVzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdXNlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqL1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBnZXQgb25jbG9zZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqL1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBnZXQgb25lcnJvcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqL1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBnZXQgb25vcGVuKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICovXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGdldCBvbm1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2w7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIGdldCByZWFkeVN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWFkeVN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBnZXQgdXJsKCkge1xuICAgIHJldHVybiB0aGlzLl91cmw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHVwIHRoZSBzb2NrZXQgYW5kIHRoZSBpbnRlcm5hbCByZXNvdXJjZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RHVwbGV4fSBzb2NrZXQgVGhlIG5ldHdvcmsgc29ja2V0IGJldHdlZW4gdGhlIHNlcnZlciBhbmQgY2xpZW50XG4gICAqIEBwYXJhbSB7QnVmZmVyfSBoZWFkIFRoZSBmaXJzdCBwYWNrZXQgb2YgdGhlIHVwZ3JhZGVkIHN0cmVhbVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHM9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyXG4gICAqICAgICBhbnkgb2YgdGhlIGAnbWVzc2FnZSdgLCBgJ3BpbmcnYCwgYW5kIGAncG9uZydgIGV2ZW50cyBjYW4gYmUgZW1pdHRlZFxuICAgKiAgICAgbXVsdGlwbGUgdGltZXMgaW4gdGhlIHNhbWUgdGlja1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5nZW5lcmF0ZU1hc2tdIFRoZSBmdW5jdGlvbiB1c2VkIHRvIGdlbmVyYXRlIHRoZVxuICAgKiAgICAgbWFza2luZyBrZXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm1heFBheWxvYWQ9MF0gVGhlIG1heGltdW0gYWxsb3dlZCBtZXNzYWdlIHNpemVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5za2lwVVRGOFZhbGlkYXRpb249ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yXG4gICAqICAgICBub3QgdG8gc2tpcCBVVEYtOCB2YWxpZGF0aW9uIGZvciB0ZXh0IGFuZCBjbG9zZSBtZXNzYWdlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0U29ja2V0KHNvY2tldCwgaGVhZCwgb3B0aW9ucykge1xuICAgIGNvbnN0IHJlY2VpdmVyID0gbmV3IFJlY2VpdmVyKHtcbiAgICAgIGFsbG93U3luY2hyb25vdXNFdmVudHM6IG9wdGlvbnMuYWxsb3dTeW5jaHJvbm91c0V2ZW50cyxcbiAgICAgIGJpbmFyeVR5cGU6IHRoaXMuYmluYXJ5VHlwZSxcbiAgICAgIGV4dGVuc2lvbnM6IHRoaXMuX2V4dGVuc2lvbnMsXG4gICAgICBpc1NlcnZlcjogdGhpcy5faXNTZXJ2ZXIsXG4gICAgICBtYXhQYXlsb2FkOiBvcHRpb25zLm1heFBheWxvYWQsXG4gICAgICBza2lwVVRGOFZhbGlkYXRpb246IG9wdGlvbnMuc2tpcFVURjhWYWxpZGF0aW9uXG4gICAgfSk7XG5cbiAgICBjb25zdCBzZW5kZXIgPSBuZXcgU2VuZGVyKHNvY2tldCwgdGhpcy5fZXh0ZW5zaW9ucywgb3B0aW9ucy5nZW5lcmF0ZU1hc2spO1xuXG4gICAgdGhpcy5fcmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICB0aGlzLl9zZW5kZXIgPSBzZW5kZXI7XG4gICAgdGhpcy5fc29ja2V0ID0gc29ja2V0O1xuXG4gICAgcmVjZWl2ZXJba1dlYlNvY2tldF0gPSB0aGlzO1xuICAgIHNlbmRlcltrV2ViU29ja2V0XSA9IHRoaXM7XG4gICAgc29ja2V0W2tXZWJTb2NrZXRdID0gdGhpcztcblxuICAgIHJlY2VpdmVyLm9uKCdjb25jbHVkZScsIHJlY2VpdmVyT25Db25jbHVkZSk7XG4gICAgcmVjZWl2ZXIub24oJ2RyYWluJywgcmVjZWl2ZXJPbkRyYWluKTtcbiAgICByZWNlaXZlci5vbignZXJyb3InLCByZWNlaXZlck9uRXJyb3IpO1xuICAgIHJlY2VpdmVyLm9uKCdtZXNzYWdlJywgcmVjZWl2ZXJPbk1lc3NhZ2UpO1xuICAgIHJlY2VpdmVyLm9uKCdwaW5nJywgcmVjZWl2ZXJPblBpbmcpO1xuICAgIHJlY2VpdmVyLm9uKCdwb25nJywgcmVjZWl2ZXJPblBvbmcpO1xuXG4gICAgc2VuZGVyLm9uZXJyb3IgPSBzZW5kZXJPbkVycm9yO1xuXG4gICAgLy9cbiAgICAvLyBUaGVzZSBtZXRob2RzIG1heSBub3QgYmUgYXZhaWxhYmxlIGlmIGBzb2NrZXRgIGlzIGp1c3QgYSBgRHVwbGV4YC5cbiAgICAvL1xuICAgIGlmIChzb2NrZXQuc2V0VGltZW91dCkgc29ja2V0LnNldFRpbWVvdXQoMCk7XG4gICAgaWYgKHNvY2tldC5zZXROb0RlbGF5KSBzb2NrZXQuc2V0Tm9EZWxheSgpO1xuXG4gICAgaWYgKGhlYWQubGVuZ3RoID4gMCkgc29ja2V0LnVuc2hpZnQoaGVhZCk7XG5cbiAgICBzb2NrZXQub24oJ2Nsb3NlJywgc29ja2V0T25DbG9zZSk7XG4gICAgc29ja2V0Lm9uKCdkYXRhJywgc29ja2V0T25EYXRhKTtcbiAgICBzb2NrZXQub24oJ2VuZCcsIHNvY2tldE9uRW5kKTtcbiAgICBzb2NrZXQub24oJ2Vycm9yJywgc29ja2V0T25FcnJvcik7XG5cbiAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2ViU29ja2V0Lk9QRU47XG4gICAgdGhpcy5lbWl0KCdvcGVuJyk7XG4gIH1cblxuICAvKipcbiAgICogRW1pdCB0aGUgYCdjbG9zZSdgIGV2ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZW1pdENsb3NlKCkge1xuICAgIGlmICghdGhpcy5fc29ja2V0KSB7XG4gICAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NFRDtcbiAgICAgIHRoaXMuZW1pdCgnY2xvc2UnLCB0aGlzLl9jbG9zZUNvZGUsIHRoaXMuX2Nsb3NlTWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pIHtcbiAgICAgIHRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0uY2xlYW51cCgpO1xuICAgIH1cblxuICAgIHRoaXMuX3JlY2VpdmVyLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ0xPU0VEO1xuICAgIHRoaXMuZW1pdCgnY2xvc2UnLCB0aGlzLl9jbG9zZUNvZGUsIHRoaXMuX2Nsb3NlTWVzc2FnZSk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgYSBjbG9zaW5nIGhhbmRzaGFrZS5cbiAgICpcbiAgICogICAgICAgICAgKy0tLS0tLS0tLS0rICAgKy0tLS0tLS0tLS0tKyAgICstLS0tLS0tLS0tK1xuICAgKiAgICAgLSAtIC18d3MuY2xvc2UoKXwtLT58Y2xvc2UgZnJhbWV8LS0+fHdzLmNsb3NlKCl8LSAtIC1cbiAgICogICAgfCAgICAgKy0tLS0tLS0tLS0rICAgKy0tLS0tLS0tLS0tKyAgICstLS0tLS0tLS0tKyAgICAgfFxuICAgKiAgICAgICAgICArLS0tLS0tLS0tLSsgICArLS0tLS0tLS0tLS0rICAgICAgICAgfFxuICAgKiBDTE9TSU5HICB8d3MuY2xvc2UoKXw8LS18Y2xvc2UgZnJhbWV8PC0tKy0tLS0tKyAgICAgICBDTE9TSU5HXG4gICAqICAgICAgICAgICstLS0tLS0tLS0tKyAgICstLS0tLS0tLS0tLSsgICB8XG4gICAqICAgIHwgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICB8ICAgKy0tLSsgICAgICAgIHxcbiAgICogICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLT58ZmlufCAtIC0gLSAtXG4gICAqICAgIHwgICAgICAgICArLS0tKyAgICAgICAgICAgICAgICAgICAgICB8ICAgKy0tLStcbiAgICogICAgIC0gLSAtIC0gLXxmaW58PC0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICogICAgICAgICAgICAgICstLS0rXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbY29kZV0gU3RhdHVzIGNvZGUgZXhwbGFpbmluZyB3aHkgdGhlIGNvbm5lY3Rpb24gaXMgY2xvc2luZ1xuICAgKiBAcGFyYW0geyhTdHJpbmd8QnVmZmVyKX0gW2RhdGFdIFRoZSByZWFzb24gd2h5IHRoZSBjb25uZWN0aW9uIGlzXG4gICAqICAgICBjbG9zaW5nXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNsb3NlKGNvZGUsIGRhdGEpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0VEKSByZXR1cm47XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHtcbiAgICAgIGNvbnN0IG1zZyA9ICdXZWJTb2NrZXQgd2FzIGNsb3NlZCBiZWZvcmUgdGhlIGNvbm5lY3Rpb24gd2FzIGVzdGFibGlzaGVkJztcbiAgICAgIGFib3J0SGFuZHNoYWtlKHRoaXMsIHRoaXMuX3JlcSwgbXNnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0lORykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9jbG9zZUZyYW1lU2VudCAmJlxuICAgICAgICAodGhpcy5fY2xvc2VGcmFtZVJlY2VpdmVkIHx8IHRoaXMuX3JlY2VpdmVyLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZClcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9zb2NrZXQuZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gICAgdGhpcy5fc2VuZGVyLmNsb3NlKGNvZGUsIGRhdGEsICF0aGlzLl9pc1NlcnZlciwgKGVycikgPT4ge1xuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgZXJyb3IgaXMgaGFuZGxlZCBieSB0aGUgYCdlcnJvcidgIGxpc3RlbmVyIG9uIHRoZSBzb2NrZXQuIFdlIG9ubHlcbiAgICAgIC8vIHdhbnQgdG8ga25vdyBpZiB0aGUgY2xvc2UgZnJhbWUgaGFzIGJlZW4gc2VudCBoZXJlLlxuICAgICAgLy9cbiAgICAgIGlmIChlcnIpIHJldHVybjtcblxuICAgICAgdGhpcy5fY2xvc2VGcmFtZVNlbnQgPSB0cnVlO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX2Nsb3NlRnJhbWVSZWNlaXZlZCB8fFxuICAgICAgICB0aGlzLl9yZWNlaXZlci5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWRcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9zb2NrZXQuZW5kKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzZXRDbG9zZVRpbWVyKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhdXNlIHRoZSBzb2NrZXQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHBhdXNlKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcgfHxcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3BhdXNlZCA9IHRydWU7XG4gICAgdGhpcy5fc29ja2V0LnBhdXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIHBpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gW2RhdGFdIFRoZSBkYXRhIHRvIHNlbmRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbbWFza10gSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2sgYGRhdGFgXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gQ2FsbGJhY2sgd2hpY2ggaXMgZXhlY3V0ZWQgd2hlbiB0aGUgcGluZyBpcyBzZW50XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHBpbmcoZGF0YSwgbWFzaywgY2IpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ09OTkVDVElORykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdXZWJTb2NrZXQgaXMgbm90IG9wZW46IHJlYWR5U3RhdGUgMCAoQ09OTkVDVElORyknKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gZGF0YTtcbiAgICAgIGRhdGEgPSBtYXNrID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1hc2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gbWFzaztcbiAgICAgIG1hc2sgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJykgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcblxuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgIT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICBzZW5kQWZ0ZXJDbG9zZSh0aGlzLCBkYXRhLCBjYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1hc2sgPT09IHVuZGVmaW5lZCkgbWFzayA9ICF0aGlzLl9pc1NlcnZlcjtcbiAgICB0aGlzLl9zZW5kZXIucGluZyhkYXRhIHx8IEVNUFRZX0JVRkZFUiwgbWFzaywgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBwb25nLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IFtkYXRhXSBUaGUgZGF0YSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW21hc2tdIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrIHdoaWNoIGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHBvbmcgaXMgc2VudFxuICAgKiBAcHVibGljXG4gICAqL1xuICBwb25nKGRhdGEsIG1hc2ssIGNiKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2ViU29ja2V0IGlzIG5vdCBvcGVuOiByZWFkeVN0YXRlIDAgKENPTk5FQ1RJTkcpJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IGRhdGE7XG4gICAgICBkYXRhID0gbWFzayA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtYXNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IG1hc2s7XG4gICAgICBtYXNrID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgc2VuZEFmdGVyQ2xvc2UodGhpcywgZGF0YSwgY2IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtYXNrID09PSB1bmRlZmluZWQpIG1hc2sgPSAhdGhpcy5faXNTZXJ2ZXI7XG4gICAgdGhpcy5fc2VuZGVyLnBvbmcoZGF0YSB8fCBFTVBUWV9CVUZGRVIsIG1hc2ssIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN1bWUgdGhlIHNvY2tldC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcmVzdW1lKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcgfHxcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5fcmVjZWl2ZXIuX3dyaXRhYmxlU3RhdGUubmVlZERyYWluKSB0aGlzLl9zb2NrZXQucmVzdW1lKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIGRhdGEgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmJpbmFyeV0gU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGlzIGJpbmFyeSBvclxuICAgKiAgICAgdGV4dFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNvbXByZXNzXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gY29tcHJlc3NcbiAgICogICAgIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZpbj10cnVlXSBTcGVjaWZpZXMgd2hldGhlciB0aGUgZnJhZ21lbnQgaXMgdGhlXG4gICAqICAgICBsYXN0IG9uZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm1hc2tdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrIHdoaWNoIGlzIGV4ZWN1dGVkIHdoZW4gZGF0YSBpcyB3cml0dGVuIG91dFxuICAgKiBAcHVibGljXG4gICAqL1xuICBzZW5kKGRhdGEsIG9wdGlvbnMsIGNiKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2ViU29ja2V0IGlzIG5vdCBvcGVuOiByZWFkeVN0YXRlIDAgKENPTk5FQ1RJTkcpJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJykgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcblxuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgIT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICBzZW5kQWZ0ZXJDbG9zZSh0aGlzLCBkYXRhLCBjYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJpbmFyeTogdHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnLFxuICAgICAgbWFzazogIXRoaXMuX2lzU2VydmVyLFxuICAgICAgY29tcHJlc3M6IHRydWUsXG4gICAgICBmaW46IHRydWUsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfTtcblxuICAgIGlmICghdGhpcy5fZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSkge1xuICAgICAgb3B0cy5jb21wcmVzcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuX3NlbmRlci5zZW5kKGRhdGEgfHwgRU1QVFlfQlVGRkVSLCBvcHRzLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogRm9yY2libHkgY2xvc2UgdGhlIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHRlcm1pbmF0ZSgpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0VEKSByZXR1cm47XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHtcbiAgICAgIGNvbnN0IG1zZyA9ICdXZWJTb2NrZXQgd2FzIGNsb3NlZCBiZWZvcmUgdGhlIGNvbm5lY3Rpb24gd2FzIGVzdGFibGlzaGVkJztcbiAgICAgIGFib3J0SGFuZHNoYWtlKHRoaXMsIHRoaXMuX3JlcSwgbXNnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc29ja2V0KSB7XG4gICAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gICAgICB0aGlzLl9zb2NrZXQuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBjb25zdGFudCB7TnVtYmVyfSBDT05ORUNUSU5HXG4gKiBAbWVtYmVyb2YgV2ViU29ja2V0XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJTb2NrZXQsICdDT05ORUNUSU5HJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICB2YWx1ZTogcmVhZHlTdGF0ZXMuaW5kZXhPZignQ09OTkVDVElORycpXG59KTtcblxuLyoqXG4gKiBAY29uc3RhbnQge051bWJlcn0gQ09OTkVDVElOR1xuICogQG1lbWJlcm9mIFdlYlNvY2tldC5wcm90b3R5cGVcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldC5wcm90b3R5cGUsICdDT05ORUNUSU5HJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICB2YWx1ZTogcmVhZHlTdGF0ZXMuaW5kZXhPZignQ09OTkVDVElORycpXG59KTtcblxuLyoqXG4gKiBAY29uc3RhbnQge051bWJlcn0gT1BFTlxuICogQG1lbWJlcm9mIFdlYlNvY2tldFxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LCAnT1BFTicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHJlYWR5U3RhdGVzLmluZGV4T2YoJ09QRU4nKVxufSk7XG5cbi8qKlxuICogQGNvbnN0YW50IHtOdW1iZXJ9IE9QRU5cbiAqIEBtZW1iZXJvZiBXZWJTb2NrZXQucHJvdG90eXBlXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJTb2NrZXQucHJvdG90eXBlLCAnT1BFTicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHJlYWR5U3RhdGVzLmluZGV4T2YoJ09QRU4nKVxufSk7XG5cbi8qKlxuICogQGNvbnN0YW50IHtOdW1iZXJ9IENMT1NJTkdcbiAqIEBtZW1iZXJvZiBXZWJTb2NrZXRcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldCwgJ0NMT1NJTkcnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiByZWFkeVN0YXRlcy5pbmRleE9mKCdDTE9TSU5HJylcbn0pO1xuXG4vKipcbiAqIEBjb25zdGFudCB7TnVtYmVyfSBDTE9TSU5HXG4gKiBAbWVtYmVyb2YgV2ViU29ja2V0LnByb3RvdHlwZVxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LnByb3RvdHlwZSwgJ0NMT1NJTkcnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiByZWFkeVN0YXRlcy5pbmRleE9mKCdDTE9TSU5HJylcbn0pO1xuXG4vKipcbiAqIEBjb25zdGFudCB7TnVtYmVyfSBDTE9TRURcbiAqIEBtZW1iZXJvZiBXZWJTb2NrZXRcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldCwgJ0NMT1NFRCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHJlYWR5U3RhdGVzLmluZGV4T2YoJ0NMT1NFRCcpXG59KTtcblxuLyoqXG4gKiBAY29uc3RhbnQge051bWJlcn0gQ0xPU0VEXG4gKiBAbWVtYmVyb2YgV2ViU29ja2V0LnByb3RvdHlwZVxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LnByb3RvdHlwZSwgJ0NMT1NFRCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHJlYWR5U3RhdGVzLmluZGV4T2YoJ0NMT1NFRCcpXG59KTtcblxuW1xuICAnYmluYXJ5VHlwZScsXG4gICdidWZmZXJlZEFtb3VudCcsXG4gICdleHRlbnNpb25zJyxcbiAgJ2lzUGF1c2VkJyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3JlYWR5U3RhdGUnLFxuICAndXJsJ1xuXS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LnByb3RvdHlwZSwgcHJvcGVydHksIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn0pO1xuXG4vL1xuLy8gQWRkIHRoZSBgb25vcGVuYCwgYG9uZXJyb3JgLCBgb25jbG9zZWAsIGFuZCBgb25tZXNzYWdlYCBhdHRyaWJ1dGVzLlxuLy8gU2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2NvbW1zLmh0bWwjdGhlLXdlYnNvY2tldC1pbnRlcmZhY2Vcbi8vXG5bJ29wZW4nLCAnZXJyb3InLCAnY2xvc2UnLCAnbWVzc2FnZSddLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LnByb3RvdHlwZSwgYG9uJHttZXRob2R9YCwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0KCkge1xuICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycyhtZXRob2QpKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lcltrRm9yT25FdmVudEF0dHJpYnV0ZV0pIHJldHVybiBsaXN0ZW5lcltrTGlzdGVuZXJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHNldChoYW5kbGVyKSB7XG4gICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKG1ldGhvZCkpIHtcbiAgICAgICAgaWYgKGxpc3RlbmVyW2tGb3JPbkV2ZW50QXR0cmlidXRlXSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIobWV0aG9kLCBsaXN0ZW5lcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihtZXRob2QsIGhhbmRsZXIsIHtcbiAgICAgICAgW2tGb3JPbkV2ZW50QXR0cmlidXRlXTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5XZWJTb2NrZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xuV2ViU29ja2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWJTb2NrZXQ7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIFdlYlNvY2tldCBjbGllbnQuXG4gKlxuICogQHBhcmFtIHtXZWJTb2NrZXR9IHdlYnNvY2tldCBUaGUgY2xpZW50IHRvIGluaXRpYWxpemVcbiAqIEBwYXJhbSB7KFN0cmluZ3xVUkwpfSBhZGRyZXNzIFRoZSBVUkwgdG8gd2hpY2ggdG8gY29ubmVjdFxuICogQHBhcmFtIHtBcnJheX0gcHJvdG9jb2xzIFRoZSBzdWJwcm90b2NvbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQ29ubmVjdGlvbiBvcHRpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHM9dHJ1ZV0gU3BlY2lmaWVzIHdoZXRoZXIgYW55XG4gKiAgICAgb2YgdGhlIGAnbWVzc2FnZSdgLCBgJ3BpbmcnYCwgYW5kIGAncG9uZydgIGV2ZW50cyBjYW4gYmUgZW1pdHRlZCBtdWx0aXBsZVxuICogICAgIHRpbWVzIGluIHRoZSBzYW1lIHRpY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYXV0b1Bvbmc9dHJ1ZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvXG4gKiAgICAgYXV0b21hdGljYWxseSBzZW5kIGEgcG9uZyBpbiByZXNwb25zZSB0byBhIHBpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5jbG9zZVRpbWVvdXQ9MzAwMDBdIER1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyB0byB3YWl0XG4gKiAgICAgZm9yIHRoZSBjbG9zaW5nIGhhbmRzaGFrZSB0byBmaW5pc2ggYWZ0ZXIgYHdlYnNvY2tldC5jbG9zZSgpYCBpcyBjYWxsZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLmZpbmlzaFJlcXVlc3RdIEEgZnVuY3Rpb24gd2hpY2ggY2FuIGJlIHVzZWQgdG9cbiAqICAgICBjdXN0b21pemUgdGhlIGhlYWRlcnMgb2YgZWFjaCBodHRwIHJlcXVlc3QgYmVmb3JlIGl0IGlzIHNlbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZm9sbG93UmVkaXJlY3RzPWZhbHNlXSBXaGV0aGVyIG9yIG5vdCB0byBmb2xsb3dcbiAqICAgICByZWRpcmVjdHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLmdlbmVyYXRlTWFza10gVGhlIGZ1bmN0aW9uIHVzZWQgdG8gZ2VuZXJhdGUgdGhlXG4gKiAgICAgbWFza2luZyBrZXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5oYW5kc2hha2VUaW1lb3V0XSBUaW1lb3V0IGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlXG4gKiAgICAgaGFuZHNoYWtlIHJlcXVlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhQYXlsb2FkPTEwNDg1NzYwMF0gVGhlIG1heGltdW0gYWxsb3dlZCBtZXNzYWdlXG4gKiAgICAgc2l6ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm1heFJlZGlyZWN0cz0xMF0gVGhlIG1heGltdW0gbnVtYmVyIG9mIHJlZGlyZWN0c1xuICogICAgIGFsbG93ZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5vcmlnaW5dIFZhbHVlIG9mIHRoZSBgT3JpZ2luYCBvclxuICogICAgIGBTZWMtV2ViU29ja2V0LU9yaWdpbmAgaGVhZGVyXG4gKiBAcGFyYW0geyhCb29sZWFufE9iamVjdCl9IFtvcHRpb25zLnBlck1lc3NhZ2VEZWZsYXRlPXRydWVdIEVuYWJsZS9kaXNhYmxlXG4gKiAgICAgcGVybWVzc2FnZS1kZWZsYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucHJvdG9jb2xWZXJzaW9uPTEzXSBWYWx1ZSBvZiB0aGVcbiAqICAgICBgU2VjLVdlYlNvY2tldC1WZXJzaW9uYCBoZWFkZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuc2tpcFVURjhWYWxpZGF0aW9uPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvclxuICogICAgIG5vdCB0byBza2lwIFVURi04IHZhbGlkYXRpb24gZm9yIHRleHQgYW5kIGNsb3NlIG1lc3NhZ2VzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbml0QXNDbGllbnQod2Vic29ja2V0LCBhZGRyZXNzLCBwcm90b2NvbHMsIG9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBhbGxvd1N5bmNocm9ub3VzRXZlbnRzOiB0cnVlLFxuICAgIGF1dG9Qb25nOiB0cnVlLFxuICAgIGNsb3NlVGltZW91dDogQ0xPU0VfVElNRU9VVCxcbiAgICBwcm90b2NvbFZlcnNpb246IHByb3RvY29sVmVyc2lvbnNbMV0sXG4gICAgbWF4UGF5bG9hZDogMTAwICogMTAyNCAqIDEwMjQsXG4gICAgc2tpcFVURjhWYWxpZGF0aW9uOiBmYWxzZSxcbiAgICBwZXJNZXNzYWdlRGVmbGF0ZTogdHJ1ZSxcbiAgICBmb2xsb3dSZWRpcmVjdHM6IGZhbHNlLFxuICAgIG1heFJlZGlyZWN0czogMTAsXG4gICAgLi4ub3B0aW9ucyxcbiAgICBzb2NrZXRQYXRoOiB1bmRlZmluZWQsXG4gICAgaG9zdG5hbWU6IHVuZGVmaW5lZCxcbiAgICBwcm90b2NvbDogdW5kZWZpbmVkLFxuICAgIHRpbWVvdXQ6IHVuZGVmaW5lZCxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhvc3Q6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgcG9ydDogdW5kZWZpbmVkXG4gIH07XG5cbiAgd2Vic29ja2V0Ll9hdXRvUG9uZyA9IG9wdHMuYXV0b1Bvbmc7XG4gIHdlYnNvY2tldC5fY2xvc2VUaW1lb3V0ID0gb3B0cy5jbG9zZVRpbWVvdXQ7XG5cbiAgaWYgKCFwcm90b2NvbFZlcnNpb25zLmluY2x1ZGVzKG9wdHMucHJvdG9jb2xWZXJzaW9uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgYFVuc3VwcG9ydGVkIHByb3RvY29sIHZlcnNpb246ICR7b3B0cy5wcm90b2NvbFZlcnNpb259IGAgK1xuICAgICAgICBgKHN1cHBvcnRlZCB2ZXJzaW9uczogJHtwcm90b2NvbFZlcnNpb25zLmpvaW4oJywgJyl9KWBcbiAgICApO1xuICB9XG5cbiAgbGV0IHBhcnNlZFVybDtcblxuICBpZiAoYWRkcmVzcyBpbnN0YW5jZW9mIFVSTCkge1xuICAgIHBhcnNlZFVybCA9IGFkZHJlc3M7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHBhcnNlZFVybCA9IG5ldyBVUkwoYWRkcmVzcyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYEludmFsaWQgVVJMOiAke2FkZHJlc3N9YCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnNlZFVybC5wcm90b2NvbCA9PT0gJ2h0dHA6Jykge1xuICAgIHBhcnNlZFVybC5wcm90b2NvbCA9ICd3czonO1xuICB9IGVsc2UgaWYgKHBhcnNlZFVybC5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcbiAgICBwYXJzZWRVcmwucHJvdG9jb2wgPSAnd3NzOic7XG4gIH1cblxuICB3ZWJzb2NrZXQuX3VybCA9IHBhcnNlZFVybC5ocmVmO1xuXG4gIGNvbnN0IGlzU2VjdXJlID0gcGFyc2VkVXJsLnByb3RvY29sID09PSAnd3NzOic7XG4gIGNvbnN0IGlzSXBjVXJsID0gcGFyc2VkVXJsLnByb3RvY29sID09PSAnd3MrdW5peDonO1xuICBsZXQgaW52YWxpZFVybE1lc3NhZ2U7XG5cbiAgaWYgKHBhcnNlZFVybC5wcm90b2NvbCAhPT0gJ3dzOicgJiYgIWlzU2VjdXJlICYmICFpc0lwY1VybCkge1xuICAgIGludmFsaWRVcmxNZXNzYWdlID1cbiAgICAgICdUaGUgVVJMXFwncyBwcm90b2NvbCBtdXN0IGJlIG9uZSBvZiBcIndzOlwiLCBcIndzczpcIiwgJyArXG4gICAgICAnXCJodHRwOlwiLCBcImh0dHBzOlwiLCBvciBcIndzK3VuaXg6XCInO1xuICB9IGVsc2UgaWYgKGlzSXBjVXJsICYmICFwYXJzZWRVcmwucGF0aG5hbWUpIHtcbiAgICBpbnZhbGlkVXJsTWVzc2FnZSA9IFwiVGhlIFVSTCdzIHBhdGhuYW1lIGlzIGVtcHR5XCI7XG4gIH0gZWxzZSBpZiAocGFyc2VkVXJsLmhhc2gpIHtcbiAgICBpbnZhbGlkVXJsTWVzc2FnZSA9ICdUaGUgVVJMIGNvbnRhaW5zIGEgZnJhZ21lbnQgaWRlbnRpZmllcic7XG4gIH1cblxuICBpZiAoaW52YWxpZFVybE1lc3NhZ2UpIHtcbiAgICBjb25zdCBlcnIgPSBuZXcgU3ludGF4RXJyb3IoaW52YWxpZFVybE1lc3NhZ2UpO1xuXG4gICAgaWYgKHdlYnNvY2tldC5fcmVkaXJlY3RzID09PSAwKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXRFcnJvckFuZENsb3NlKHdlYnNvY2tldCwgZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZWZhdWx0UG9ydCA9IGlzU2VjdXJlID8gNDQzIDogODA7XG4gIGNvbnN0IGtleSA9IHJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZygnYmFzZTY0Jyk7XG4gIGNvbnN0IHJlcXVlc3QgPSBpc1NlY3VyZSA/IGh0dHBzLnJlcXVlc3QgOiBodHRwLnJlcXVlc3Q7XG4gIGNvbnN0IHByb3RvY29sU2V0ID0gbmV3IFNldCgpO1xuICBsZXQgcGVyTWVzc2FnZURlZmxhdGU7XG5cbiAgb3B0cy5jcmVhdGVDb25uZWN0aW9uID1cbiAgICBvcHRzLmNyZWF0ZUNvbm5lY3Rpb24gfHwgKGlzU2VjdXJlID8gdGxzQ29ubmVjdCA6IG5ldENvbm5lY3QpO1xuICBvcHRzLmRlZmF1bHRQb3J0ID0gb3B0cy5kZWZhdWx0UG9ydCB8fCBkZWZhdWx0UG9ydDtcbiAgb3B0cy5wb3J0ID0gcGFyc2VkVXJsLnBvcnQgfHwgZGVmYXVsdFBvcnQ7XG4gIG9wdHMuaG9zdCA9IHBhcnNlZFVybC5ob3N0bmFtZS5zdGFydHNXaXRoKCdbJylcbiAgICA/IHBhcnNlZFVybC5ob3N0bmFtZS5zbGljZSgxLCAtMSlcbiAgICA6IHBhcnNlZFVybC5ob3N0bmFtZTtcbiAgb3B0cy5oZWFkZXJzID0ge1xuICAgIC4uLm9wdHMuaGVhZGVycyxcbiAgICAnU2VjLVdlYlNvY2tldC1WZXJzaW9uJzogb3B0cy5wcm90b2NvbFZlcnNpb24sXG4gICAgJ1NlYy1XZWJTb2NrZXQtS2V5Jzoga2V5LFxuICAgIENvbm5lY3Rpb246ICdVcGdyYWRlJyxcbiAgICBVcGdyYWRlOiAnd2Vic29ja2V0J1xuICB9O1xuICBvcHRzLnBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWUgKyBwYXJzZWRVcmwuc2VhcmNoO1xuICBvcHRzLnRpbWVvdXQgPSBvcHRzLmhhbmRzaGFrZVRpbWVvdXQ7XG5cbiAgaWYgKG9wdHMucGVyTWVzc2FnZURlZmxhdGUpIHtcbiAgICBwZXJNZXNzYWdlRGVmbGF0ZSA9IG5ldyBQZXJNZXNzYWdlRGVmbGF0ZSh7XG4gICAgICAuLi5vcHRzLnBlck1lc3NhZ2VEZWZsYXRlLFxuICAgICAgaXNTZXJ2ZXI6IGZhbHNlLFxuICAgICAgbWF4UGF5bG9hZDogb3B0cy5tYXhQYXlsb2FkXG4gICAgfSk7XG4gICAgb3B0cy5oZWFkZXJzWydTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnMnXSA9IGZvcm1hdCh7XG4gICAgICBbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV06IHBlck1lc3NhZ2VEZWZsYXRlLm9mZmVyKClcbiAgICB9KTtcbiAgfVxuICBpZiAocHJvdG9jb2xzLmxlbmd0aCkge1xuICAgIGZvciAoY29uc3QgcHJvdG9jb2wgb2YgcHJvdG9jb2xzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBwcm90b2NvbCAhPT0gJ3N0cmluZycgfHxcbiAgICAgICAgIXN1YnByb3RvY29sUmVnZXgudGVzdChwcm90b2NvbCkgfHxcbiAgICAgICAgcHJvdG9jb2xTZXQuaGFzKHByb3RvY29sKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcbiAgICAgICAgICAnQW4gaW52YWxpZCBvciBkdXBsaWNhdGVkIHN1YnByb3RvY29sIHdhcyBzcGVjaWZpZWQnXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHByb3RvY29sU2V0LmFkZChwcm90b2NvbCk7XG4gICAgfVxuXG4gICAgb3B0cy5oZWFkZXJzWydTZWMtV2ViU29ja2V0LVByb3RvY29sJ10gPSBwcm90b2NvbHMuam9pbignLCcpO1xuICB9XG4gIGlmIChvcHRzLm9yaWdpbikge1xuICAgIGlmIChvcHRzLnByb3RvY29sVmVyc2lvbiA8IDEzKSB7XG4gICAgICBvcHRzLmhlYWRlcnNbJ1NlYy1XZWJTb2NrZXQtT3JpZ2luJ10gPSBvcHRzLm9yaWdpbjtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0cy5oZWFkZXJzLk9yaWdpbiA9IG9wdHMub3JpZ2luO1xuICAgIH1cbiAgfVxuICBpZiAocGFyc2VkVXJsLnVzZXJuYW1lIHx8IHBhcnNlZFVybC5wYXNzd29yZCkge1xuICAgIG9wdHMuYXV0aCA9IGAke3BhcnNlZFVybC51c2VybmFtZX06JHtwYXJzZWRVcmwucGFzc3dvcmR9YDtcbiAgfVxuXG4gIGlmIChpc0lwY1VybCkge1xuICAgIGNvbnN0IHBhcnRzID0gb3B0cy5wYXRoLnNwbGl0KCc6Jyk7XG5cbiAgICBvcHRzLnNvY2tldFBhdGggPSBwYXJ0c1swXTtcbiAgICBvcHRzLnBhdGggPSBwYXJ0c1sxXTtcbiAgfVxuXG4gIGxldCByZXE7XG5cbiAgaWYgKG9wdHMuZm9sbG93UmVkaXJlY3RzKSB7XG4gICAgaWYgKHdlYnNvY2tldC5fcmVkaXJlY3RzID09PSAwKSB7XG4gICAgICB3ZWJzb2NrZXQuX29yaWdpbmFsSXBjID0gaXNJcGNVcmw7XG4gICAgICB3ZWJzb2NrZXQuX29yaWdpbmFsU2VjdXJlID0gaXNTZWN1cmU7XG4gICAgICB3ZWJzb2NrZXQuX29yaWdpbmFsSG9zdE9yU29ja2V0UGF0aCA9IGlzSXBjVXJsXG4gICAgICAgID8gb3B0cy5zb2NrZXRQYXRoXG4gICAgICAgIDogcGFyc2VkVXJsLmhvc3Q7XG5cbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zICYmIG9wdGlvbnMuaGVhZGVycztcblxuICAgICAgLy9cbiAgICAgIC8vIFNoYWxsb3cgY29weSB0aGUgdXNlciBwcm92aWRlZCBvcHRpb25zIHNvIHRoYXQgaGVhZGVycyBjYW4gYmUgY2hhbmdlZFxuICAgICAgLy8gd2l0aG91dCBtdXRhdGluZyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgLy9cbiAgICAgIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMsIGhlYWRlcnM6IHt9IH07XG5cbiAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGhlYWRlcnMpKSB7XG4gICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW2tleS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh3ZWJzb2NrZXQubGlzdGVuZXJDb3VudCgncmVkaXJlY3QnKSA9PT0gMCkge1xuICAgICAgY29uc3QgaXNTYW1lSG9zdCA9IGlzSXBjVXJsXG4gICAgICAgID8gd2Vic29ja2V0Ll9vcmlnaW5hbElwY1xuICAgICAgICAgID8gb3B0cy5zb2NrZXRQYXRoID09PSB3ZWJzb2NrZXQuX29yaWdpbmFsSG9zdE9yU29ja2V0UGF0aFxuICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgOiB3ZWJzb2NrZXQuX29yaWdpbmFsSXBjXG4gICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgIDogcGFyc2VkVXJsLmhvc3QgPT09IHdlYnNvY2tldC5fb3JpZ2luYWxIb3N0T3JTb2NrZXRQYXRoO1xuXG4gICAgICBpZiAoIWlzU2FtZUhvc3QgfHwgKHdlYnNvY2tldC5fb3JpZ2luYWxTZWN1cmUgJiYgIWlzU2VjdXJlKSkge1xuICAgICAgICAvL1xuICAgICAgICAvLyBNYXRjaCBjdXJsIDcuNzcuMCBiZWhhdmlvciBhbmQgZHJvcCB0aGUgZm9sbG93aW5nIGhlYWRlcnMuIFRoZXNlXG4gICAgICAgIC8vIGhlYWRlcnMgYXJlIGFsc28gZHJvcHBlZCB3aGVuIGZvbGxvd2luZyBhIHJlZGlyZWN0IHRvIGEgc3ViZG9tYWluLlxuICAgICAgICAvL1xuICAgICAgICBkZWxldGUgb3B0cy5oZWFkZXJzLmF1dGhvcml6YXRpb247XG4gICAgICAgIGRlbGV0ZSBvcHRzLmhlYWRlcnMuY29va2llO1xuXG4gICAgICAgIGlmICghaXNTYW1lSG9zdCkgZGVsZXRlIG9wdHMuaGVhZGVycy5ob3N0O1xuXG4gICAgICAgIG9wdHMuYXV0aCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIE1hdGNoIGN1cmwgNy43Ny4wIGJlaGF2aW9yIGFuZCBtYWtlIHRoZSBmaXJzdCBgQXV0aG9yaXphdGlvbmAgaGVhZGVyIHdpbi5cbiAgICAvLyBJZiB0aGUgYEF1dGhvcml6YXRpb25gIGhlYWRlciBpcyBzZXQsIHRoZW4gdGhlcmUgaXMgbm90aGluZyB0byBkbyBhcyBpdFxuICAgIC8vIHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICAgIC8vXG4gICAgaWYgKG9wdHMuYXV0aCAmJiAhb3B0aW9ucy5oZWFkZXJzLmF1dGhvcml6YXRpb24pIHtcbiAgICAgIG9wdGlvbnMuaGVhZGVycy5hdXRob3JpemF0aW9uID1cbiAgICAgICAgJ0Jhc2ljICcgKyBCdWZmZXIuZnJvbShvcHRzLmF1dGgpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICB9XG5cbiAgICByZXEgPSB3ZWJzb2NrZXQuX3JlcSA9IHJlcXVlc3Qob3B0cyk7XG5cbiAgICBpZiAod2Vic29ja2V0Ll9yZWRpcmVjdHMpIHtcbiAgICAgIC8vXG4gICAgICAvLyBVbmxpa2Ugd2hhdCBpcyBkb25lIGZvciB0aGUgYCd1cGdyYWRlJ2AgZXZlbnQsIG5vIGVhcmx5IGV4aXQgaXNcbiAgICAgIC8vIHRyaWdnZXJlZCBoZXJlIGlmIHRoZSB1c2VyIGNhbGxzIGB3ZWJzb2NrZXQuY2xvc2UoKWAgb3JcbiAgICAgIC8vIGB3ZWJzb2NrZXQudGVybWluYXRlKClgIGZyb20gYSBsaXN0ZW5lciBvZiB0aGUgYCdyZWRpcmVjdCdgIGV2ZW50LiBUaGlzXG4gICAgICAvLyBpcyBiZWNhdXNlIHRoZSB1c2VyIGNhbiBhbHNvIGNhbGwgYHJlcXVlc3QuZGVzdHJveSgpYCB3aXRoIGFuIGVycm9yXG4gICAgICAvLyBiZWZvcmUgY2FsbGluZyBgd2Vic29ja2V0LmNsb3NlKClgIG9yIGB3ZWJzb2NrZXQudGVybWluYXRlKClgIGFuZCB0aGlzXG4gICAgICAvLyB3b3VsZCByZXN1bHQgaW4gYW4gZXJyb3IgYmVpbmcgZW1pdHRlZCBvbiB0aGUgYHJlcXVlc3RgIG9iamVjdCB3aXRoIG5vXG4gICAgICAvLyBgJ2Vycm9yJ2AgZXZlbnQgbGlzdGVuZXJzIGF0dGFjaGVkLlxuICAgICAgLy9cbiAgICAgIHdlYnNvY2tldC5lbWl0KCdyZWRpcmVjdCcsIHdlYnNvY2tldC51cmwsIHJlcSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcSA9IHdlYnNvY2tldC5fcmVxID0gcmVxdWVzdChvcHRzKTtcbiAgfVxuXG4gIGlmIChvcHRzLnRpbWVvdXQpIHtcbiAgICByZXEub24oJ3RpbWVvdXQnLCAoKSA9PiB7XG4gICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHJlcSwgJ09wZW5pbmcgaGFuZHNoYWtlIGhhcyB0aW1lZCBvdXQnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlcS5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gICAgaWYgKHJlcSA9PT0gbnVsbCB8fCByZXFba0Fib3J0ZWRdKSByZXR1cm47XG5cbiAgICByZXEgPSB3ZWJzb2NrZXQuX3JlcSA9IG51bGw7XG4gICAgZW1pdEVycm9yQW5kQ2xvc2Uod2Vic29ja2V0LCBlcnIpO1xuICB9KTtcblxuICByZXEub24oJ3Jlc3BvbnNlJywgKHJlcykgPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gcmVzLmhlYWRlcnMubG9jYXRpb247XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlO1xuXG4gICAgaWYgKFxuICAgICAgbG9jYXRpb24gJiZcbiAgICAgIG9wdHMuZm9sbG93UmVkaXJlY3RzICYmXG4gICAgICBzdGF0dXNDb2RlID49IDMwMCAmJlxuICAgICAgc3RhdHVzQ29kZSA8IDQwMFxuICAgICkge1xuICAgICAgaWYgKCsrd2Vic29ja2V0Ll9yZWRpcmVjdHMgPiBvcHRzLm1heFJlZGlyZWN0cykge1xuICAgICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHJlcSwgJ01heGltdW0gcmVkaXJlY3RzIGV4Y2VlZGVkJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVxLmFib3J0KCk7XG5cbiAgICAgIGxldCBhZGRyO1xuXG4gICAgICB0cnkge1xuICAgICAgICBhZGRyID0gbmV3IFVSTChsb2NhdGlvbiwgYWRkcmVzcyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBTeW50YXhFcnJvcihgSW52YWxpZCBVUkw6ICR7bG9jYXRpb259YCk7XG4gICAgICAgIGVtaXRFcnJvckFuZENsb3NlKHdlYnNvY2tldCwgZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpbml0QXNDbGllbnQod2Vic29ja2V0LCBhZGRyLCBwcm90b2NvbHMsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSBpZiAoIXdlYnNvY2tldC5lbWl0KCd1bmV4cGVjdGVkLXJlc3BvbnNlJywgcmVxLCByZXMpKSB7XG4gICAgICBhYm9ydEhhbmRzaGFrZShcbiAgICAgICAgd2Vic29ja2V0LFxuICAgICAgICByZXEsXG4gICAgICAgIGBVbmV4cGVjdGVkIHNlcnZlciByZXNwb25zZTogJHtyZXMuc3RhdHVzQ29kZX1gXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgcmVxLm9uKCd1cGdyYWRlJywgKHJlcywgc29ja2V0LCBoZWFkKSA9PiB7XG4gICAgd2Vic29ja2V0LmVtaXQoJ3VwZ3JhZGUnLCByZXMpO1xuXG4gICAgLy9cbiAgICAvLyBUaGUgdXNlciBtYXkgaGF2ZSBjbG9zZWQgdGhlIGNvbm5lY3Rpb24gZnJvbSBhIGxpc3RlbmVyIG9mIHRoZVxuICAgIC8vIGAndXBncmFkZSdgIGV2ZW50LlxuICAgIC8vXG4gICAgaWYgKHdlYnNvY2tldC5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuQ09OTkVDVElORykgcmV0dXJuO1xuXG4gICAgcmVxID0gd2Vic29ja2V0Ll9yZXEgPSBudWxsO1xuXG4gICAgY29uc3QgdXBncmFkZSA9IHJlcy5oZWFkZXJzLnVwZ3JhZGU7XG5cbiAgICBpZiAodXBncmFkZSA9PT0gdW5kZWZpbmVkIHx8IHVwZ3JhZGUudG9Mb3dlckNhc2UoKSAhPT0gJ3dlYnNvY2tldCcpIHtcbiAgICAgIGFib3J0SGFuZHNoYWtlKHdlYnNvY2tldCwgc29ja2V0LCAnSW52YWxpZCBVcGdyYWRlIGhlYWRlcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpZ2VzdCA9IGNyZWF0ZUhhc2goJ3NoYTEnKVxuICAgICAgLnVwZGF0ZShrZXkgKyBHVUlEKVxuICAgICAgLmRpZ2VzdCgnYmFzZTY0Jyk7XG5cbiAgICBpZiAocmVzLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtYWNjZXB0J10gIT09IGRpZ2VzdCkge1xuICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCBzb2NrZXQsICdJbnZhbGlkIFNlYy1XZWJTb2NrZXQtQWNjZXB0IGhlYWRlcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlcnZlclByb3QgPSByZXMuaGVhZGVyc1snc2VjLXdlYnNvY2tldC1wcm90b2NvbCddO1xuICAgIGxldCBwcm90RXJyb3I7XG5cbiAgICBpZiAoc2VydmVyUHJvdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoIXByb3RvY29sU2V0LnNpemUpIHtcbiAgICAgICAgcHJvdEVycm9yID0gJ1NlcnZlciBzZW50IGEgc3VicHJvdG9jb2wgYnV0IG5vbmUgd2FzIHJlcXVlc3RlZCc7XG4gICAgICB9IGVsc2UgaWYgKCFwcm90b2NvbFNldC5oYXMoc2VydmVyUHJvdCkpIHtcbiAgICAgICAgcHJvdEVycm9yID0gJ1NlcnZlciBzZW50IGFuIGludmFsaWQgc3VicHJvdG9jb2wnO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHJvdG9jb2xTZXQuc2l6ZSkge1xuICAgICAgcHJvdEVycm9yID0gJ1NlcnZlciBzZW50IG5vIHN1YnByb3RvY29sJztcbiAgICB9XG5cbiAgICBpZiAocHJvdEVycm9yKSB7XG4gICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHNvY2tldCwgcHJvdEVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VydmVyUHJvdCkgd2Vic29ja2V0Ll9wcm90b2NvbCA9IHNlcnZlclByb3Q7XG5cbiAgICBjb25zdCBzZWNXZWJTb2NrZXRFeHRlbnNpb25zID0gcmVzLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtZXh0ZW5zaW9ucyddO1xuXG4gICAgaWYgKHNlY1dlYlNvY2tldEV4dGVuc2lvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCFwZXJNZXNzYWdlRGVmbGF0ZSkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICAgICAnU2VydmVyIHNlbnQgYSBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnMgaGVhZGVyIGJ1dCBubyBleHRlbnNpb24gJyArXG4gICAgICAgICAgJ3dhcyByZXF1ZXN0ZWQnO1xuICAgICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHNvY2tldCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGV4dGVuc2lvbnM7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGV4dGVuc2lvbnMgPSBwYXJzZShzZWNXZWJTb2NrZXRFeHRlbnNpb25zKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ0ludmFsaWQgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zIGhlYWRlcic7XG4gICAgICAgIGFib3J0SGFuZHNoYWtlKHdlYnNvY2tldCwgc29ja2V0LCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBleHRlbnNpb25OYW1lcyA9IE9iamVjdC5rZXlzKGV4dGVuc2lvbnMpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGV4dGVuc2lvbk5hbWVzLmxlbmd0aCAhPT0gMSB8fFxuICAgICAgICBleHRlbnNpb25OYW1lc1swXSAhPT0gUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnU2VydmVyIGluZGljYXRlZCBhbiBleHRlbnNpb24gdGhhdCB3YXMgbm90IHJlcXVlc3RlZCc7XG4gICAgICAgIGFib3J0SGFuZHNoYWtlKHdlYnNvY2tldCwgc29ja2V0LCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZS5hY2NlcHQoZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdJbnZhbGlkIFNlYy1XZWJTb2NrZXQtRXh0ZW5zaW9ucyBoZWFkZXInO1xuICAgICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHNvY2tldCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2Vic29ja2V0Ll9leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdID1cbiAgICAgICAgcGVyTWVzc2FnZURlZmxhdGU7XG4gICAgfVxuXG4gICAgd2Vic29ja2V0LnNldFNvY2tldChzb2NrZXQsIGhlYWQsIHtcbiAgICAgIGFsbG93U3luY2hyb25vdXNFdmVudHM6IG9wdHMuYWxsb3dTeW5jaHJvbm91c0V2ZW50cyxcbiAgICAgIGdlbmVyYXRlTWFzazogb3B0cy5nZW5lcmF0ZU1hc2ssXG4gICAgICBtYXhQYXlsb2FkOiBvcHRzLm1heFBheWxvYWQsXG4gICAgICBza2lwVVRGOFZhbGlkYXRpb246IG9wdHMuc2tpcFVURjhWYWxpZGF0aW9uXG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmIChvcHRzLmZpbmlzaFJlcXVlc3QpIHtcbiAgICBvcHRzLmZpbmlzaFJlcXVlc3QocmVxLCB3ZWJzb2NrZXQpO1xuICB9IGVsc2Uge1xuICAgIHJlcS5lbmQoKTtcbiAgfVxufVxuXG4vKipcbiAqIEVtaXQgdGhlIGAnZXJyb3InYCBhbmQgYCdjbG9zZSdgIGV2ZW50cy5cbiAqXG4gKiBAcGFyYW0ge1dlYlNvY2tldH0gd2Vic29ja2V0IFRoZSBXZWJTb2NrZXQgaW5zdGFuY2VcbiAqIEBwYXJhbSB7RXJyb3J9IFRoZSBlcnJvciB0byBlbWl0XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBlbWl0RXJyb3JBbmRDbG9zZSh3ZWJzb2NrZXQsIGVycikge1xuICB3ZWJzb2NrZXQuX3JlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ0xPU0lORztcbiAgLy9cbiAgLy8gVGhlIGZvbGxvd2luZyBhc3NpZ25tZW50IGlzIHByYWN0aWNhbGx5IHVzZWxlc3MgYW5kIGlzIGRvbmUgb25seSBmb3JcbiAgLy8gY29uc2lzdGVuY3kuXG4gIC8vXG4gIHdlYnNvY2tldC5fZXJyb3JFbWl0dGVkID0gdHJ1ZTtcbiAgd2Vic29ja2V0LmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgd2Vic29ja2V0LmVtaXRDbG9zZSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGBuZXQuU29ja2V0YCBhbmQgaW5pdGlhdGUgYSBjb25uZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIENvbm5lY3Rpb24gb3B0aW9uc1xuICogQHJldHVybiB7bmV0LlNvY2tldH0gVGhlIG5ld2x5IGNyZWF0ZWQgc29ja2V0IHVzZWQgdG8gc3RhcnQgdGhlIGNvbm5lY3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG5ldENvbm5lY3Qob3B0aW9ucykge1xuICBvcHRpb25zLnBhdGggPSBvcHRpb25zLnNvY2tldFBhdGg7XG4gIHJldHVybiBuZXQuY29ubmVjdChvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBgdGxzLlRMU1NvY2tldGAgYW5kIGluaXRpYXRlIGEgY29ubmVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBDb25uZWN0aW9uIG9wdGlvbnNcbiAqIEByZXR1cm4ge3Rscy5UTFNTb2NrZXR9IFRoZSBuZXdseSBjcmVhdGVkIHNvY2tldCB1c2VkIHRvIHN0YXJ0IHRoZSBjb25uZWN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiB0bHNDb25uZWN0KG9wdGlvbnMpIHtcbiAgb3B0aW9ucy5wYXRoID0gdW5kZWZpbmVkO1xuXG4gIGlmICghb3B0aW9ucy5zZXJ2ZXJuYW1lICYmIG9wdGlvbnMuc2VydmVybmFtZSAhPT0gJycpIHtcbiAgICBvcHRpb25zLnNlcnZlcm5hbWUgPSBuZXQuaXNJUChvcHRpb25zLmhvc3QpID8gJycgOiBvcHRpb25zLmhvc3Q7XG4gIH1cblxuICByZXR1cm4gdGxzLmNvbm5lY3Qob3B0aW9ucyk7XG59XG5cbi8qKlxuICogQWJvcnQgdGhlIGhhbmRzaGFrZSBhbmQgZW1pdCBhbiBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge1dlYlNvY2tldH0gd2Vic29ja2V0IFRoZSBXZWJTb2NrZXQgaW5zdGFuY2VcbiAqIEBwYXJhbSB7KGh0dHAuQ2xpZW50UmVxdWVzdHxuZXQuU29ja2V0fHRscy5Tb2NrZXQpfSBzdHJlYW0gVGhlIHJlcXVlc3QgdG9cbiAqICAgICBhYm9ydCBvciB0aGUgc29ja2V0IHRvIGRlc3Ryb3lcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHN0cmVhbSwgbWVzc2FnZSkge1xuICB3ZWJzb2NrZXQuX3JlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ0xPU0lORztcblxuICBjb25zdCBlcnIgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKGVyciwgYWJvcnRIYW5kc2hha2UpO1xuXG4gIGlmIChzdHJlYW0uc2V0SGVhZGVyKSB7XG4gICAgc3RyZWFtW2tBYm9ydGVkXSA9IHRydWU7XG4gICAgc3RyZWFtLmFib3J0KCk7XG5cbiAgICBpZiAoc3RyZWFtLnNvY2tldCAmJiAhc3RyZWFtLnNvY2tldC5kZXN0cm95ZWQpIHtcbiAgICAgIC8vXG4gICAgICAvLyBPbiBOb2RlLmpzID49IDE0LjMuMCBgcmVxdWVzdC5hYm9ydCgpYCBkb2VzIG5vdCBkZXN0cm95IHRoZSBzb2NrZXQgaWZcbiAgICAgIC8vIGNhbGxlZCBhZnRlciB0aGUgcmVxdWVzdCBjb21wbGV0ZWQuIFNlZVxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnNvY2tldHMvd3MvaXNzdWVzLzE4NjkuXG4gICAgICAvL1xuICAgICAgc3RyZWFtLnNvY2tldC5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0RXJyb3JBbmRDbG9zZSwgd2Vic29ja2V0LCBlcnIpO1xuICB9IGVsc2Uge1xuICAgIHN0cmVhbS5kZXN0cm95KGVycik7XG4gICAgc3RyZWFtLm9uY2UoJ2Vycm9yJywgd2Vic29ja2V0LmVtaXQuYmluZCh3ZWJzb2NrZXQsICdlcnJvcicpKTtcbiAgICBzdHJlYW0ub25jZSgnY2xvc2UnLCB3ZWJzb2NrZXQuZW1pdENsb3NlLmJpbmQod2Vic29ja2V0KSk7XG4gIH1cbn1cblxuLyoqXG4gKiBIYW5kbGUgY2FzZXMgd2hlcmUgdGhlIGBwaW5nKClgLCBgcG9uZygpYCwgb3IgYHNlbmQoKWAgbWV0aG9kcyBhcmUgY2FsbGVkXG4gKiB3aGVuIHRoZSBgcmVhZHlTdGF0ZWAgYXR0cmlidXRlIGlzIGBDTE9TSU5HYCBvciBgQ0xPU0VEYC5cbiAqXG4gKiBAcGFyYW0ge1dlYlNvY2tldH0gd2Vic29ja2V0IFRoZSBXZWJTb2NrZXQgaW5zdGFuY2VcbiAqIEBwYXJhbSB7Kn0gW2RhdGFdIFRoZSBkYXRhIHRvIHNlbmRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gQ2FsbGJhY2tcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNlbmRBZnRlckNsb3NlKHdlYnNvY2tldCwgZGF0YSwgY2IpIHtcbiAgaWYgKGRhdGEpIHtcbiAgICBjb25zdCBsZW5ndGggPSBpc0Jsb2IoZGF0YSkgPyBkYXRhLnNpemUgOiB0b0J1ZmZlcihkYXRhKS5sZW5ndGg7XG5cbiAgICAvL1xuICAgIC8vIFRoZSBgX2J1ZmZlcmVkQW1vdW50YCBwcm9wZXJ0eSBpcyB1c2VkIG9ubHkgd2hlbiB0aGUgcGVlciBpcyBhIGNsaWVudCBhbmRcbiAgICAvLyB0aGUgb3BlbmluZyBoYW5kc2hha2UgZmFpbHMuIFVuZGVyIHRoZXNlIGNpcmN1bXN0YW5jZXMsIGluIGZhY3QsIHRoZVxuICAgIC8vIGBzZXRTb2NrZXQoKWAgbWV0aG9kIGlzIG5vdCBjYWxsZWQsIHNvIHRoZSBgX3NvY2tldGAgYW5kIGBfc2VuZGVyYFxuICAgIC8vIHByb3BlcnRpZXMgYXJlIHNldCB0byBgbnVsbGAuXG4gICAgLy9cbiAgICBpZiAod2Vic29ja2V0Ll9zb2NrZXQpIHdlYnNvY2tldC5fc2VuZGVyLl9idWZmZXJlZEJ5dGVzICs9IGxlbmd0aDtcbiAgICBlbHNlIHdlYnNvY2tldC5fYnVmZmVyZWRBbW91bnQgKz0gbGVuZ3RoO1xuICB9XG5cbiAgaWYgKGNiKSB7XG4gICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFxuICAgICAgYFdlYlNvY2tldCBpcyBub3Qgb3BlbjogcmVhZHlTdGF0ZSAke3dlYnNvY2tldC5yZWFkeVN0YXRlfSBgICtcbiAgICAgICAgYCgke3JlYWR5U3RhdGVzW3dlYnNvY2tldC5yZWFkeVN0YXRlXX0pYFxuICAgICk7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhjYiwgZXJyKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgYFJlY2VpdmVyYCBgJ2NvbmNsdWRlJ2AgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGNvZGUgVGhlIHN0YXR1cyBjb2RlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gcmVhc29uIFRoZSByZWFzb24gZm9yIGNsb3NpbmdcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlY2VpdmVyT25Db25jbHVkZShjb2RlLCByZWFzb24pIHtcbiAgY29uc3Qgd2Vic29ja2V0ID0gdGhpc1trV2ViU29ja2V0XTtcblxuICB3ZWJzb2NrZXQuX2Nsb3NlRnJhbWVSZWNlaXZlZCA9IHRydWU7XG4gIHdlYnNvY2tldC5fY2xvc2VNZXNzYWdlID0gcmVhc29uO1xuICB3ZWJzb2NrZXQuX2Nsb3NlQ29kZSA9IGNvZGU7XG5cbiAgaWYgKHdlYnNvY2tldC5fc29ja2V0W2tXZWJTb2NrZXRdID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICB3ZWJzb2NrZXQuX3NvY2tldC5yZW1vdmVMaXN0ZW5lcignZGF0YScsIHNvY2tldE9uRGF0YSk7XG4gIHByb2Nlc3MubmV4dFRpY2socmVzdW1lLCB3ZWJzb2NrZXQuX3NvY2tldCk7XG5cbiAgaWYgKGNvZGUgPT09IDEwMDUpIHdlYnNvY2tldC5jbG9zZSgpO1xuICBlbHNlIHdlYnNvY2tldC5jbG9zZShjb2RlLCByZWFzb24pO1xufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgYFJlY2VpdmVyYCBgJ2RyYWluJ2AgZXZlbnQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVjZWl2ZXJPbkRyYWluKCkge1xuICBjb25zdCB3ZWJzb2NrZXQgPSB0aGlzW2tXZWJTb2NrZXRdO1xuXG4gIGlmICghd2Vic29ja2V0LmlzUGF1c2VkKSB3ZWJzb2NrZXQuX3NvY2tldC5yZXN1bWUoKTtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGBSZWNlaXZlcmAgYCdlcnJvcidgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFJhbmdlRXJyb3J8RXJyb3IpfSBlcnIgVGhlIGVtaXR0ZWQgZXJyb3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlY2VpdmVyT25FcnJvcihlcnIpIHtcbiAgY29uc3Qgd2Vic29ja2V0ID0gdGhpc1trV2ViU29ja2V0XTtcblxuICBpZiAod2Vic29ja2V0Ll9zb2NrZXRba1dlYlNvY2tldF0gIT09IHVuZGVmaW5lZCkge1xuICAgIHdlYnNvY2tldC5fc29ja2V0LnJlbW92ZUxpc3RlbmVyKCdkYXRhJywgc29ja2V0T25EYXRhKTtcblxuICAgIC8vXG4gICAgLy8gT24gTm9kZS5qcyA8IDE0LjAuMCB0aGUgYCdlcnJvcidgIGV2ZW50IGlzIGVtaXR0ZWQgc3luY2hyb25vdXNseS4gU2VlXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnNvY2tldHMvd3MvaXNzdWVzLzE5NDAuXG4gICAgLy9cbiAgICBwcm9jZXNzLm5leHRUaWNrKHJlc3VtZSwgd2Vic29ja2V0Ll9zb2NrZXQpO1xuXG4gICAgd2Vic29ja2V0LmNsb3NlKGVycltrU3RhdHVzQ29kZV0pO1xuICB9XG5cbiAgaWYgKCF3ZWJzb2NrZXQuX2Vycm9yRW1pdHRlZCkge1xuICAgIHdlYnNvY2tldC5fZXJyb3JFbWl0dGVkID0gdHJ1ZTtcbiAgICB3ZWJzb2NrZXQuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgUmVjZWl2ZXJgIGAnZmluaXNoJ2AgZXZlbnQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVjZWl2ZXJPbkZpbmlzaCgpIHtcbiAgdGhpc1trV2ViU29ja2V0XS5lbWl0Q2xvc2UoKTtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGBSZWNlaXZlcmAgYCdtZXNzYWdlJ2AgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ8QXJyYXlCdWZmZXJ8QnVmZmVyW10pfSBkYXRhIFRoZSBtZXNzYWdlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzQmluYXJ5IFNwZWNpZmllcyB3aGV0aGVyIHRoZSBtZXNzYWdlIGlzIGJpbmFyeSBvciBub3RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlY2VpdmVyT25NZXNzYWdlKGRhdGEsIGlzQmluYXJ5KSB7XG4gIHRoaXNba1dlYlNvY2tldF0uZW1pdCgnbWVzc2FnZScsIGRhdGEsIGlzQmluYXJ5KTtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGBSZWNlaXZlcmAgYCdwaW5nJ2AgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgVGhlIGRhdGEgaW5jbHVkZWQgaW4gdGhlIHBpbmcgZnJhbWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlY2VpdmVyT25QaW5nKGRhdGEpIHtcbiAgY29uc3Qgd2Vic29ja2V0ID0gdGhpc1trV2ViU29ja2V0XTtcblxuICBpZiAod2Vic29ja2V0Ll9hdXRvUG9uZykgd2Vic29ja2V0LnBvbmcoZGF0YSwgIXRoaXMuX2lzU2VydmVyLCBOT09QKTtcbiAgd2Vic29ja2V0LmVtaXQoJ3BpbmcnLCBkYXRhKTtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGBSZWNlaXZlcmAgYCdwb25nJ2AgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgVGhlIGRhdGEgaW5jbHVkZWQgaW4gdGhlIHBvbmcgZnJhbWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlY2VpdmVyT25Qb25nKGRhdGEpIHtcbiAgdGhpc1trV2ViU29ja2V0XS5lbWl0KCdwb25nJywgZGF0YSk7XG59XG5cbi8qKlxuICogUmVzdW1lIGEgcmVhZGFibGUgc3RyZWFtXG4gKlxuICogQHBhcmFtIHtSZWFkYWJsZX0gc3RyZWFtIFRoZSByZWFkYWJsZSBzdHJlYW1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlc3VtZShzdHJlYW0pIHtcbiAgc3RyZWFtLnJlc3VtZSgpO1xufVxuXG4vKipcbiAqIFRoZSBgU2VuZGVyYCBlcnJvciBldmVudCBoYW5kbGVyLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IFRoZSBlcnJvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VuZGVyT25FcnJvcihlcnIpIHtcbiAgY29uc3Qgd2Vic29ja2V0ID0gdGhpc1trV2ViU29ja2V0XTtcblxuICBpZiAod2Vic29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRUQpIHJldHVybjtcbiAgaWYgKHdlYnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xuICAgIHdlYnNvY2tldC5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TSU5HO1xuICAgIHNldENsb3NlVGltZXIod2Vic29ja2V0KTtcbiAgfVxuXG4gIC8vXG4gIC8vIGBzb2NrZXQuZW5kKClgIGlzIHVzZWQgaW5zdGVhZCBvZiBgc29ja2V0LmRlc3Ryb3koKWAgdG8gYWxsb3cgdGhlIG90aGVyXG4gIC8vIHBlZXIgdG8gZmluaXNoIHNlbmRpbmcgcXVldWVkIGRhdGEuIFRoZXJlIGlzIG5vIG5lZWQgdG8gc2V0IGEgdGltZXIgaGVyZVxuICAvLyBiZWNhdXNlIGBDTE9TSU5HYCBtZWFucyB0aGF0IGl0IGlzIGFscmVhZHkgc2V0IG9yIG5vdCBuZWVkZWQuXG4gIC8vXG4gIHRoaXMuX3NvY2tldC5lbmQoKTtcblxuICBpZiAoIXdlYnNvY2tldC5fZXJyb3JFbWl0dGVkKSB7XG4gICAgd2Vic29ja2V0Ll9lcnJvckVtaXR0ZWQgPSB0cnVlO1xuICAgIHdlYnNvY2tldC5lbWl0KCdlcnJvcicsIGVycik7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgYSB0aW1lciB0byBkZXN0cm95IHRoZSB1bmRlcmx5aW5nIHJhdyBzb2NrZXQgb2YgYSBXZWJTb2NrZXQuXG4gKlxuICogQHBhcmFtIHtXZWJTb2NrZXR9IHdlYnNvY2tldCBUaGUgV2ViU29ja2V0IGluc3RhbmNlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXRDbG9zZVRpbWVyKHdlYnNvY2tldCkge1xuICB3ZWJzb2NrZXQuX2Nsb3NlVGltZXIgPSBzZXRUaW1lb3V0KFxuICAgIHdlYnNvY2tldC5fc29ja2V0LmRlc3Ryb3kuYmluZCh3ZWJzb2NrZXQuX3NvY2tldCksXG4gICAgd2Vic29ja2V0Ll9jbG9zZVRpbWVvdXRcbiAgKTtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIHNvY2tldCBgJ2Nsb3NlJ2AgZXZlbnQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc29ja2V0T25DbG9zZSgpIHtcbiAgY29uc3Qgd2Vic29ja2V0ID0gdGhpc1trV2ViU29ja2V0XTtcblxuICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIHNvY2tldE9uQ2xvc2UpO1xuICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdkYXRhJywgc29ja2V0T25EYXRhKTtcbiAgdGhpcy5yZW1vdmVMaXN0ZW5lcignZW5kJywgc29ja2V0T25FbmQpO1xuXG4gIHdlYnNvY2tldC5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TSU5HO1xuXG4gIC8vXG4gIC8vIFRoZSBjbG9zZSBmcmFtZSBtaWdodCBub3QgaGF2ZSBiZWVuIHJlY2VpdmVkIG9yIHRoZSBgJ2VuZCdgIGV2ZW50IGVtaXR0ZWQsXG4gIC8vIGZvciBleGFtcGxlLCBpZiB0aGUgc29ja2V0IHdhcyBkZXN0cm95ZWQgZHVlIHRvIGFuIGVycm9yLiBFbnN1cmUgdGhhdCB0aGVcbiAgLy8gYHJlY2VpdmVyYCBzdHJlYW0gaXMgY2xvc2VkIGFmdGVyIHdyaXRpbmcgYW55IHJlbWFpbmluZyBidWZmZXJlZCBkYXRhIHRvXG4gIC8vIGl0LiBJZiB0aGUgcmVhZGFibGUgc2lkZSBvZiB0aGUgc29ja2V0IGlzIGluIGZsb3dpbmcgbW9kZSB0aGVuIHRoZXJlIGlzIG5vXG4gIC8vIGJ1ZmZlcmVkIGRhdGEgYXMgZXZlcnl0aGluZyBoYXMgYmVlbiBhbHJlYWR5IHdyaXR0ZW4uIElmIGluc3RlYWQsIHRoZVxuICAvLyBzb2NrZXQgaXMgcGF1c2VkLCBhbnkgcG9zc2libGUgYnVmZmVyZWQgZGF0YSB3aWxsIGJlIHJlYWQgYXMgYSBzaW5nbGVcbiAgLy8gY2h1bmsuXG4gIC8vXG4gIGlmIChcbiAgICAhdGhpcy5fcmVhZGFibGVTdGF0ZS5lbmRFbWl0dGVkICYmXG4gICAgIXdlYnNvY2tldC5fY2xvc2VGcmFtZVJlY2VpdmVkICYmXG4gICAgIXdlYnNvY2tldC5fcmVjZWl2ZXIuX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkICYmXG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5sZW5ndGggIT09IDBcbiAgKSB7XG4gICAgY29uc3QgY2h1bmsgPSB0aGlzLnJlYWQodGhpcy5fcmVhZGFibGVTdGF0ZS5sZW5ndGgpO1xuXG4gICAgd2Vic29ja2V0Ll9yZWNlaXZlci53cml0ZShjaHVuayk7XG4gIH1cblxuICB3ZWJzb2NrZXQuX3JlY2VpdmVyLmVuZCgpO1xuXG4gIHRoaXNba1dlYlNvY2tldF0gPSB1bmRlZmluZWQ7XG5cbiAgY2xlYXJUaW1lb3V0KHdlYnNvY2tldC5fY2xvc2VUaW1lcik7XG5cbiAgaWYgKFxuICAgIHdlYnNvY2tldC5fcmVjZWl2ZXIuX3dyaXRhYmxlU3RhdGUuZmluaXNoZWQgfHxcbiAgICB3ZWJzb2NrZXQuX3JlY2VpdmVyLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZFxuICApIHtcbiAgICB3ZWJzb2NrZXQuZW1pdENsb3NlKCk7XG4gIH0gZWxzZSB7XG4gICAgd2Vic29ja2V0Ll9yZWNlaXZlci5vbignZXJyb3InLCByZWNlaXZlck9uRmluaXNoKTtcbiAgICB3ZWJzb2NrZXQuX3JlY2VpdmVyLm9uKCdmaW5pc2gnLCByZWNlaXZlck9uRmluaXNoKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgc29ja2V0IGAnZGF0YSdgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBjaHVuayBBIGNodW5rIG9mIGRhdGFcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNvY2tldE9uRGF0YShjaHVuaykge1xuICBpZiAoIXRoaXNba1dlYlNvY2tldF0uX3JlY2VpdmVyLndyaXRlKGNodW5rKSkge1xuICAgIHRoaXMucGF1c2UoKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgc29ja2V0IGAnZW5kJ2AgZXZlbnQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc29ja2V0T25FbmQoKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgd2Vic29ja2V0Ll9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gIHdlYnNvY2tldC5fcmVjZWl2ZXIuZW5kKCk7XG4gIHRoaXMuZW5kKCk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBzb2NrZXQgYCdlcnJvcidgIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNvY2tldE9uRXJyb3IoKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgdGhpcy5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBzb2NrZXRPbkVycm9yKTtcbiAgdGhpcy5vbignZXJyb3InLCBOT09QKTtcblxuICBpZiAod2Vic29ja2V0KSB7XG4gICAgd2Vic29ja2V0Ll9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cbiIsICIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFtcImVycm9yXCIsIHsgXCJ2YXJzSWdub3JlUGF0dGVyblwiOiBcIl5XZWJTb2NrZXQkXCIgfV0gKi9cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgV2ViU29ja2V0ID0gcmVxdWlyZSgnLi93ZWJzb2NrZXQnKTtcbmNvbnN0IHsgRHVwbGV4IH0gPSByZXF1aXJlKCdzdHJlYW0nKTtcblxuLyoqXG4gKiBFbWl0cyB0aGUgYCdjbG9zZSdgIGV2ZW50IG9uIGEgc3RyZWFtLlxuICpcbiAqIEBwYXJhbSB7RHVwbGV4fSBzdHJlYW0gVGhlIHN0cmVhbS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGVtaXRDbG9zZShzdHJlYW0pIHtcbiAgc3RyZWFtLmVtaXQoJ2Nsb3NlJyk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgJ2VuZCdgIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGR1cGxleE9uRW5kKCkge1xuICBpZiAoIXRoaXMuZGVzdHJveWVkICYmIHRoaXMuX3dyaXRhYmxlU3RhdGUuZmluaXNoZWQpIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgYCdlcnJvcidgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyciBUaGUgZXJyb3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGR1cGxleE9uRXJyb3IoZXJyKSB7XG4gIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZHVwbGV4T25FcnJvcik7XG4gIHRoaXMuZGVzdHJveSgpO1xuICBpZiAodGhpcy5saXN0ZW5lckNvdW50KCdlcnJvcicpID09PSAwKSB7XG4gICAgLy8gRG8gbm90IHN1cHByZXNzIHRoZSB0aHJvd2luZyBiZWhhdmlvci5cbiAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgfVxufVxuXG4vKipcbiAqIFdyYXBzIGEgYFdlYlNvY2tldGAgaW4gYSBkdXBsZXggc3RyZWFtLlxuICpcbiAqIEBwYXJhbSB7V2ViU29ja2V0fSB3cyBUaGUgYFdlYlNvY2tldGAgdG8gd3JhcFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBUaGUgb3B0aW9ucyBmb3IgdGhlIGBEdXBsZXhgIGNvbnN0cnVjdG9yXG4gKiBAcmV0dXJuIHtEdXBsZXh9IFRoZSBkdXBsZXggc3RyZWFtXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVdlYlNvY2tldFN0cmVhbSh3cywgb3B0aW9ucykge1xuICBsZXQgdGVybWluYXRlT25EZXN0cm95ID0gdHJ1ZTtcblxuICBjb25zdCBkdXBsZXggPSBuZXcgRHVwbGV4KHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGF1dG9EZXN0cm95OiBmYWxzZSxcbiAgICBlbWl0Q2xvc2U6IGZhbHNlLFxuICAgIG9iamVjdE1vZGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlT2JqZWN0TW9kZTogZmFsc2VcbiAgfSk7XG5cbiAgd3Mub24oJ21lc3NhZ2UnLCBmdW5jdGlvbiBtZXNzYWdlKG1zZywgaXNCaW5hcnkpIHtcbiAgICBjb25zdCBkYXRhID1cbiAgICAgICFpc0JpbmFyeSAmJiBkdXBsZXguX3JlYWRhYmxlU3RhdGUub2JqZWN0TW9kZSA/IG1zZy50b1N0cmluZygpIDogbXNnO1xuXG4gICAgaWYgKCFkdXBsZXgucHVzaChkYXRhKSkgd3MucGF1c2UoKTtcbiAgfSk7XG5cbiAgd3Mub25jZSgnZXJyb3InLCBmdW5jdGlvbiBlcnJvcihlcnIpIHtcbiAgICBpZiAoZHVwbGV4LmRlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgLy8gUHJldmVudCBgd3MudGVybWluYXRlKClgIGZyb20gYmVpbmcgY2FsbGVkIGJ5IGBkdXBsZXguX2Rlc3Ryb3koKWAuXG4gICAgLy9cbiAgICAvLyAtIElmIHRoZSBgJ2Vycm9yJ2AgZXZlbnQgaXMgZW1pdHRlZCBiZWZvcmUgdGhlIGAnb3BlbidgIGV2ZW50LCB0aGVuXG4gICAgLy8gICBgd3MudGVybWluYXRlKClgIGlzIGEgbm9vcCBhcyBubyBzb2NrZXQgaXMgYXNzaWduZWQuXG4gICAgLy8gLSBPdGhlcndpc2UsIHRoZSBlcnJvciBpcyByZS1lbWl0dGVkIGJ5IHRoZSBsaXN0ZW5lciBvZiB0aGUgYCdlcnJvcidgXG4gICAgLy8gICBldmVudCBvZiB0aGUgYFJlY2VpdmVyYCBvYmplY3QuIFRoZSBsaXN0ZW5lciBhbHJlYWR5IGNsb3NlcyB0aGVcbiAgICAvLyAgIGNvbm5lY3Rpb24gYnkgY2FsbGluZyBgd3MuY2xvc2UoKWAuIFRoaXMgYWxsb3dzIGEgY2xvc2UgZnJhbWUgdG8gYmVcbiAgICAvLyAgIHNlbnQgdG8gdGhlIG90aGVyIHBlZXIuIElmIGB3cy50ZXJtaW5hdGUoKWAgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoaXMsXG4gICAgLy8gICB0aGVuIHRoZSBjbG9zZSBmcmFtZSBtaWdodCBub3QgYmUgc2VudC5cbiAgICB0ZXJtaW5hdGVPbkRlc3Ryb3kgPSBmYWxzZTtcbiAgICBkdXBsZXguZGVzdHJveShlcnIpO1xuICB9KTtcblxuICB3cy5vbmNlKCdjbG9zZScsIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGlmIChkdXBsZXguZGVzdHJveWVkKSByZXR1cm47XG5cbiAgICBkdXBsZXgucHVzaChudWxsKTtcbiAgfSk7XG5cbiAgZHVwbGV4Ll9kZXN0cm95ID0gZnVuY3Rpb24gKGVyciwgY2FsbGJhY2spIHtcbiAgICBpZiAod3MucmVhZHlTdGF0ZSA9PT0gd3MuQ0xPU0VEKSB7XG4gICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0Q2xvc2UsIGR1cGxleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuXG4gICAgd3Mub25jZSgnZXJyb3InLCBmdW5jdGlvbiBlcnJvcihlcnIpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBjYWxsYmFjayhlcnIpO1xuICAgIH0pO1xuXG4gICAgd3Mub25jZSgnY2xvc2UnLCBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgIGlmICghY2FsbGVkKSBjYWxsYmFjayhlcnIpO1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0Q2xvc2UsIGR1cGxleCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybWluYXRlT25EZXN0cm95KSB3cy50ZXJtaW5hdGUoKTtcbiAgfTtcblxuICBkdXBsZXguX2ZpbmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKHdzLnJlYWR5U3RhdGUgPT09IHdzLkNPTk5FQ1RJTkcpIHtcbiAgICAgIHdzLm9uY2UoJ29wZW4nLCBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgICBkdXBsZXguX2ZpbmFsKGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSB2YWx1ZSBvZiB0aGUgYF9zb2NrZXRgIHByb3BlcnR5IGlzIGBudWxsYCBpdCBtZWFucyB0aGF0IGB3c2AgaXMgYVxuICAgIC8vIGNsaWVudCB3ZWJzb2NrZXQgYW5kIHRoZSBoYW5kc2hha2UgZmFpbGVkLiBJbiBmYWN0LCB3aGVuIHRoaXMgaGFwcGVucywgYVxuICAgIC8vIHNvY2tldCBpcyBuZXZlciBhc3NpZ25lZCB0byB0aGUgd2Vic29ja2V0LiBXYWl0IGZvciB0aGUgYCdlcnJvcidgIGV2ZW50XG4gICAgLy8gdGhhdCB3aWxsIGJlIGVtaXR0ZWQgYnkgdGhlIHdlYnNvY2tldC5cbiAgICBpZiAod3MuX3NvY2tldCA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgaWYgKHdzLl9zb2NrZXQuX3dyaXRhYmxlU3RhdGUuZmluaXNoZWQpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgICBpZiAoZHVwbGV4Ll9yZWFkYWJsZVN0YXRlLmVuZEVtaXR0ZWQpIGR1cGxleC5kZXN0cm95KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdzLl9zb2NrZXQub25jZSgnZmluaXNoJywgZnVuY3Rpb24gZmluaXNoKCkge1xuICAgICAgICAvLyBgZHVwbGV4YCBpcyBub3QgZGVzdHJveWVkIGhlcmUgYmVjYXVzZSB0aGUgYCdlbmQnYCBldmVudCB3aWxsIGJlXG4gICAgICAgIC8vIGVtaXR0ZWQgb24gYGR1cGxleGAgYWZ0ZXIgdGhpcyBgJ2ZpbmlzaCdgIGV2ZW50LiBUaGUgRU9GIHNpZ25hbGluZ1xuICAgICAgICAvLyBgbnVsbGAgY2h1bmsgaXMsIGluIGZhY3QsIHB1c2hlZCB3aGVuIHRoZSB3ZWJzb2NrZXQgZW1pdHMgYCdjbG9zZSdgLlxuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfSk7XG4gICAgICB3cy5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBkdXBsZXguX3JlYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHdzLmlzUGF1c2VkKSB3cy5yZXN1bWUoKTtcbiAgfTtcblxuICBkdXBsZXguX3dyaXRlID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgICBpZiAod3MucmVhZHlTdGF0ZSA9PT0gd3MuQ09OTkVDVElORykge1xuICAgICAgd3Mub25jZSgnb3BlbicsIGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgICAgIGR1cGxleC5fd3JpdGUoY2h1bmssIGVuY29kaW5nLCBjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3cy5zZW5kKGNodW5rLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgZHVwbGV4Lm9uKCdlbmQnLCBkdXBsZXhPbkVuZCk7XG4gIGR1cGxleC5vbignZXJyb3InLCBkdXBsZXhPbkVycm9yKTtcbiAgcmV0dXJuIGR1cGxleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVXZWJTb2NrZXRTdHJlYW07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7IHRva2VuQ2hhcnMgfSA9IHJlcXVpcmUoJy4vdmFsaWRhdGlvbicpO1xuXG4vKipcbiAqIFBhcnNlcyB0aGUgYFNlYy1XZWJTb2NrZXQtUHJvdG9jb2xgIGhlYWRlciBpbnRvIGEgc2V0IG9mIHN1YnByb3RvY29sIG5hbWVzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXIgVGhlIGZpZWxkIHZhbHVlIG9mIHRoZSBoZWFkZXJcbiAqIEByZXR1cm4ge1NldH0gVGhlIHN1YnByb3RvY29sIG5hbWVzXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKGhlYWRlcikge1xuICBjb25zdCBwcm90b2NvbHMgPSBuZXcgU2V0KCk7XG4gIGxldCBzdGFydCA9IC0xO1xuICBsZXQgZW5kID0gLTE7XG4gIGxldCBpID0gMDtcblxuICBmb3IgKGk7IGkgPCBoZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjb2RlID0gaGVhZGVyLmNoYXJDb2RlQXQoaSk7XG5cbiAgICBpZiAoZW5kID09PSAtMSAmJiB0b2tlbkNoYXJzW2NvZGVdID09PSAxKSB7XG4gICAgICBpZiAoc3RhcnQgPT09IC0xKSBzdGFydCA9IGk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGkgIT09IDAgJiZcbiAgICAgIChjb2RlID09PSAweDIwIC8qICcgJyAqLyB8fCBjb2RlID09PSAweDA5KSAvKiAnXFx0JyAqL1xuICAgICkge1xuICAgICAgaWYgKGVuZCA9PT0gLTEgJiYgc3RhcnQgIT09IC0xKSBlbmQgPSBpO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgyYyAvKiAnLCcgKi8pIHtcbiAgICAgIGlmIChzdGFydCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBhdCBpbmRleCAke2l9YCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmQgPT09IC0xKSBlbmQgPSBpO1xuXG4gICAgICBjb25zdCBwcm90b2NvbCA9IGhlYWRlci5zbGljZShzdGFydCwgZW5kKTtcblxuICAgICAgaWYgKHByb3RvY29scy5oYXMocHJvdG9jb2wpKSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVGhlIFwiJHtwcm90b2NvbH1cIiBzdWJwcm90b2NvbCBpcyBkdXBsaWNhdGVkYCk7XG4gICAgICB9XG5cbiAgICAgIHByb3RvY29scy5hZGQocHJvdG9jb2wpO1xuICAgICAgc3RhcnQgPSBlbmQgPSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBhdCBpbmRleCAke2l9YCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSAtMSB8fCBlbmQgIT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBpbnB1dCcpO1xuICB9XG5cbiAgY29uc3QgcHJvdG9jb2wgPSBoZWFkZXIuc2xpY2Uoc3RhcnQsIGkpO1xuXG4gIGlmIChwcm90b2NvbHMuaGFzKHByb3RvY29sKSkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVGhlIFwiJHtwcm90b2NvbH1cIiBzdWJwcm90b2NvbCBpcyBkdXBsaWNhdGVkYCk7XG4gIH1cblxuICBwcm90b2NvbHMuYWRkKHByb3RvY29sKTtcbiAgcmV0dXJuIHByb3RvY29scztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IHBhcnNlIH07XG4iLCAiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbXCJlcnJvclwiLCB7IFwidmFyc0lnbm9yZVBhdHRlcm5cIjogXCJeRHVwbGV4JFwiLCBcImNhdWdodEVycm9yc1wiOiBcIm5vbmVcIiB9XSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbmNvbnN0IHsgRHVwbGV4IH0gPSByZXF1aXJlKCdzdHJlYW0nKTtcbmNvbnN0IHsgY3JlYXRlSGFzaCB9ID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5cbmNvbnN0IGV4dGVuc2lvbiA9IHJlcXVpcmUoJy4vZXh0ZW5zaW9uJyk7XG5jb25zdCBQZXJNZXNzYWdlRGVmbGF0ZSA9IHJlcXVpcmUoJy4vcGVybWVzc2FnZS1kZWZsYXRlJyk7XG5jb25zdCBzdWJwcm90b2NvbCA9IHJlcXVpcmUoJy4vc3VicHJvdG9jb2wnKTtcbmNvbnN0IFdlYlNvY2tldCA9IHJlcXVpcmUoJy4vd2Vic29ja2V0Jyk7XG5jb25zdCB7IENMT1NFX1RJTUVPVVQsIEdVSUQsIGtXZWJTb2NrZXQgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IGtleVJlZ2V4ID0gL15bKy8wLTlBLVphLXpdezIyfT09JC87XG5cbmNvbnN0IFJVTk5JTkcgPSAwO1xuY29uc3QgQ0xPU0lORyA9IDE7XG5jb25zdCBDTE9TRUQgPSAyO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIFdlYlNvY2tldCBzZXJ2ZXIuXG4gKlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmNsYXNzIFdlYlNvY2tldFNlcnZlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBgV2ViU29ja2V0U2VydmVyYCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQ29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWxsb3dTeW5jaHJvbm91c0V2ZW50cz10cnVlXSBTcGVjaWZpZXMgd2hldGhlclxuICAgKiAgICAgYW55IG9mIHRoZSBgJ21lc3NhZ2UnYCwgYCdwaW5nJ2AsIGFuZCBgJ3BvbmcnYCBldmVudHMgY2FuIGJlIGVtaXR0ZWRcbiAgICogICAgIG11bHRpcGxlIHRpbWVzIGluIHRoZSBzYW1lIHRpY2tcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hdXRvUG9uZz10cnVlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG9cbiAgICogICAgIGF1dG9tYXRpY2FsbHkgc2VuZCBhIHBvbmcgaW4gcmVzcG9uc2UgdG8gYSBwaW5nXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5iYWNrbG9nPTUxMV0gVGhlIG1heGltdW0gbGVuZ3RoIG9mIHRoZSBxdWV1ZSBvZlxuICAgKiAgICAgcGVuZGluZyBjb25uZWN0aW9uc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNsaWVudFRyYWNraW5nPXRydWVdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0b1xuICAgKiAgICAgdHJhY2sgY2xpZW50c1xuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuY2xvc2VUaW1lb3V0PTMwMDAwXSBEdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgdG9cbiAgICogICAgIHdhaXQgZm9yIHRoZSBjbG9zaW5nIGhhbmRzaGFrZSB0byBmaW5pc2ggYWZ0ZXIgYHdlYnNvY2tldC5jbG9zZSgpYCBpc1xuICAgKiAgICAgY2FsbGVkXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLmhhbmRsZVByb3RvY29sc10gQSBob29rIHRvIGhhbmRsZSBwcm90b2NvbHNcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmhvc3RdIFRoZSBob3N0bmFtZSB3aGVyZSB0byBiaW5kIHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm1heFBheWxvYWQ9MTA0ODU3NjAwXSBUaGUgbWF4aW11bSBhbGxvd2VkIG1lc3NhZ2VcbiAgICogICAgIHNpemVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5ub1NlcnZlcj1mYWxzZV0gRW5hYmxlIG5vIHNlcnZlciBtb2RlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wYXRoXSBBY2NlcHQgb25seSBjb25uZWN0aW9ucyBtYXRjaGluZyB0aGlzIHBhdGhcbiAgICogQHBhcmFtIHsoQm9vbGVhbnxPYmplY3QpfSBbb3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZT1mYWxzZV0gRW5hYmxlL2Rpc2FibGVcbiAgICogICAgIHBlcm1lc3NhZ2UtZGVmbGF0ZVxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucG9ydF0gVGhlIHBvcnQgd2hlcmUgdG8gYmluZCB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7KGh0dHAuU2VydmVyfGh0dHBzLlNlcnZlcil9IFtvcHRpb25zLnNlcnZlcl0gQSBwcmUtY3JlYXRlZCBIVFRQL1NcbiAgICogICAgIHNlcnZlciB0byB1c2VcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5za2lwVVRGOFZhbGlkYXRpb249ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yXG4gICAqICAgICBub3QgdG8gc2tpcCBVVEYtOCB2YWxpZGF0aW9uIGZvciB0ZXh0IGFuZCBjbG9zZSBtZXNzYWdlc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy52ZXJpZnlDbGllbnRdIEEgaG9vayB0byByZWplY3QgY29ubmVjdGlvbnNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMuV2ViU29ja2V0PVdlYlNvY2tldF0gU3BlY2lmaWVzIHRoZSBgV2ViU29ja2V0YFxuICAgKiAgICAgY2xhc3MgdG8gdXNlLiBJdCBtdXN0IGJlIHRoZSBgV2ViU29ja2V0YCBjbGFzcyBvciBjbGFzcyB0aGF0IGV4dGVuZHMgaXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSBBIGxpc3RlbmVyIGZvciB0aGUgYGxpc3RlbmluZ2AgZXZlbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIG9wdGlvbnMgPSB7XG4gICAgICBhbGxvd1N5bmNocm9ub3VzRXZlbnRzOiB0cnVlLFxuICAgICAgYXV0b1Bvbmc6IHRydWUsXG4gICAgICBtYXhQYXlsb2FkOiAxMDAgKiAxMDI0ICogMTAyNCxcbiAgICAgIHNraXBVVEY4VmFsaWRhdGlvbjogZmFsc2UsXG4gICAgICBwZXJNZXNzYWdlRGVmbGF0ZTogZmFsc2UsXG4gICAgICBoYW5kbGVQcm90b2NvbHM6IG51bGwsXG4gICAgICBjbGllbnRUcmFja2luZzogdHJ1ZSxcbiAgICAgIGNsb3NlVGltZW91dDogQ0xPU0VfVElNRU9VVCxcbiAgICAgIHZlcmlmeUNsaWVudDogbnVsbCxcbiAgICAgIG5vU2VydmVyOiBmYWxzZSxcbiAgICAgIGJhY2tsb2c6IG51bGwsIC8vIHVzZSBkZWZhdWx0ICg1MTEgYXMgaW1wbGVtZW50ZWQgaW4gbmV0LmpzKVxuICAgICAgc2VydmVyOiBudWxsLFxuICAgICAgaG9zdDogbnVsbCxcbiAgICAgIHBhdGg6IG51bGwsXG4gICAgICBwb3J0OiBudWxsLFxuICAgICAgV2ViU29ja2V0LFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG5cbiAgICBpZiAoXG4gICAgICAob3B0aW9ucy5wb3J0ID09IG51bGwgJiYgIW9wdGlvbnMuc2VydmVyICYmICFvcHRpb25zLm5vU2VydmVyKSB8fFxuICAgICAgKG9wdGlvbnMucG9ydCAhPSBudWxsICYmIChvcHRpb25zLnNlcnZlciB8fCBvcHRpb25zLm5vU2VydmVyKSkgfHxcbiAgICAgIChvcHRpb25zLnNlcnZlciAmJiBvcHRpb25zLm5vU2VydmVyKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgJ09uZSBhbmQgb25seSBvbmUgb2YgdGhlIFwicG9ydFwiLCBcInNlcnZlclwiLCBvciBcIm5vU2VydmVyXCIgb3B0aW9ucyAnICtcbiAgICAgICAgICAnbXVzdCBiZSBzcGVjaWZpZWQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnBvcnQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBodHRwLlNUQVRVU19DT0RFU1s0MjZdO1xuXG4gICAgICAgIHJlcy53cml0ZUhlYWQoNDI2LCB7XG4gICAgICAgICAgJ0NvbnRlbnQtTGVuZ3RoJzogYm9keS5sZW5ndGgsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzLmVuZChib2R5KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc2VydmVyLmxpc3RlbihcbiAgICAgICAgb3B0aW9ucy5wb3J0LFxuICAgICAgICBvcHRpb25zLmhvc3QsXG4gICAgICAgIG9wdGlvbnMuYmFja2xvZyxcbiAgICAgICAgY2FsbGJhY2tcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnNlcnZlcikge1xuICAgICAgdGhpcy5fc2VydmVyID0gb3B0aW9ucy5zZXJ2ZXI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3NlcnZlcikge1xuICAgICAgY29uc3QgZW1pdENvbm5lY3Rpb24gPSB0aGlzLmVtaXQuYmluZCh0aGlzLCAnY29ubmVjdGlvbicpO1xuXG4gICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMgPSBhZGRMaXN0ZW5lcnModGhpcy5fc2VydmVyLCB7XG4gICAgICAgIGxpc3RlbmluZzogdGhpcy5lbWl0LmJpbmQodGhpcywgJ2xpc3RlbmluZycpLFxuICAgICAgICBlcnJvcjogdGhpcy5lbWl0LmJpbmQodGhpcywgJ2Vycm9yJyksXG4gICAgICAgIHVwZ3JhZGU6IChyZXEsIHNvY2tldCwgaGVhZCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlVXBncmFkZShyZXEsIHNvY2tldCwgaGVhZCwgZW1pdENvbm5lY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSA9PT0gdHJ1ZSkgb3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSA9IHt9O1xuICAgIGlmIChvcHRpb25zLmNsaWVudFRyYWNraW5nKSB7XG4gICAgICB0aGlzLmNsaWVudHMgPSBuZXcgU2V0KCk7XG4gICAgICB0aGlzLl9zaG91bGRFbWl0Q2xvc2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuX3N0YXRlID0gUlVOTklORztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBib3VuZCBhZGRyZXNzLCB0aGUgYWRkcmVzcyBmYW1pbHkgbmFtZSwgYW5kIHBvcnQgb2YgdGhlIHNlcnZlclxuICAgKiBhcyByZXBvcnRlZCBieSB0aGUgb3BlcmF0aW5nIHN5c3RlbSBpZiBsaXN0ZW5pbmcgb24gYW4gSVAgc29ja2V0LlxuICAgKiBJZiB0aGUgc2VydmVyIGlzIGxpc3RlbmluZyBvbiBhIHBpcGUgb3IgVU5JWCBkb21haW4gc29ja2V0LCB0aGUgbmFtZSBpc1xuICAgKiByZXR1cm5lZCBhcyBhIHN0cmluZy5cbiAgICpcbiAgICogQHJldHVybiB7KE9iamVjdHxTdHJpbmd8bnVsbCl9IFRoZSBhZGRyZXNzIG9mIHRoZSBzZXJ2ZXJcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgYWRkcmVzcygpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLm5vU2VydmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBzZXJ2ZXIgaXMgb3BlcmF0aW5nIGluIFwibm9TZXJ2ZXJcIiBtb2RlJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9zZXJ2ZXIpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB0aGlzLl9zZXJ2ZXIuYWRkcmVzcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgdGhlIHNlcnZlciBmcm9tIGFjY2VwdGluZyBuZXcgY29ubmVjdGlvbnMgYW5kIGVtaXQgdGhlIGAnY2xvc2UnYCBldmVudFxuICAgKiB3aGVuIGFsbCBleGlzdGluZyBjb25uZWN0aW9ucyBhcmUgY2xvc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIEEgb25lLXRpbWUgbGlzdGVuZXIgZm9yIHRoZSBgJ2Nsb3NlJ2AgZXZlbnRcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY2xvc2UoY2IpIHtcbiAgICBpZiAodGhpcy5fc3RhdGUgPT09IENMT1NFRCkge1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIHRoaXMub25jZSgnY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgICAgY2IobmV3IEVycm9yKCdUaGUgc2VydmVyIGlzIG5vdCBydW5uaW5nJykpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0Q2xvc2UsIHRoaXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjYikgdGhpcy5vbmNlKCdjbG9zZScsIGNiKTtcblxuICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gQ0xPU0lORykgcmV0dXJuO1xuICAgIHRoaXMuX3N0YXRlID0gQ0xPU0lORztcblxuICAgIGlmICh0aGlzLm9wdGlvbnMubm9TZXJ2ZXIgfHwgdGhpcy5vcHRpb25zLnNlcnZlcikge1xuICAgICAgaWYgKHRoaXMuX3NlcnZlcikge1xuICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzID0gdGhpcy5fc2VydmVyID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2xpZW50cykge1xuICAgICAgICBpZiAoIXRoaXMuY2xpZW50cy5zaXplKSB7XG4gICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0Q2xvc2UsIHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3Nob3VsZEVtaXRDbG9zZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdENsb3NlLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2VydmVyID0gdGhpcy5fc2VydmVyO1xuXG4gICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVycyA9IHRoaXMuX3NlcnZlciA9IG51bGw7XG5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgSFRUUC9TIHNlcnZlciB3YXMgY3JlYXRlZCBpbnRlcm5hbGx5LiBDbG9zZSBpdCwgYW5kIHJlbHkgb24gaXRzXG4gICAgICAvLyBgJ2Nsb3NlJ2AgZXZlbnQuXG4gICAgICAvL1xuICAgICAgc2VydmVyLmNsb3NlKCgpID0+IHtcbiAgICAgICAgZW1pdENsb3NlKHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlZSBpZiBhIGdpdmVuIHJlcXVlc3Qgc2hvdWxkIGJlIGhhbmRsZWQgYnkgdGhpcyBzZXJ2ZXIgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7aHR0cC5JbmNvbWluZ01lc3NhZ2V9IHJlcSBSZXF1ZXN0IG9iamVjdCB0byBpbnNwZWN0XG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgcmVxdWVzdCBpcyB2YWxpZCwgZWxzZSBgZmFsc2VgXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHNob3VsZEhhbmRsZShyZXEpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnBhdGgpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gcmVxLnVybC5pbmRleE9mKCc/Jyk7XG4gICAgICBjb25zdCBwYXRobmFtZSA9IGluZGV4ICE9PSAtMSA/IHJlcS51cmwuc2xpY2UoMCwgaW5kZXgpIDogcmVxLnVybDtcblxuICAgICAgaWYgKHBhdGhuYW1lICE9PSB0aGlzLm9wdGlvbnMucGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBhIEhUVFAgVXBncmFkZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAcGFyYW0ge2h0dHAuSW5jb21pbmdNZXNzYWdlfSByZXEgVGhlIHJlcXVlc3Qgb2JqZWN0XG4gICAqIEBwYXJhbSB7RHVwbGV4fSBzb2NrZXQgVGhlIG5ldHdvcmsgc29ja2V0IGJldHdlZW4gdGhlIHNlcnZlciBhbmQgY2xpZW50XG4gICAqIEBwYXJhbSB7QnVmZmVyfSBoZWFkIFRoZSBmaXJzdCBwYWNrZXQgb2YgdGhlIHVwZ3JhZGVkIHN0cmVhbVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHVibGljXG4gICAqL1xuICBoYW5kbGVVcGdyYWRlKHJlcSwgc29ja2V0LCBoZWFkLCBjYikge1xuICAgIHNvY2tldC5vbignZXJyb3InLCBzb2NrZXRPbkVycm9yKTtcblxuICAgIGNvbnN0IGtleSA9IHJlcS5oZWFkZXJzWydzZWMtd2Vic29ja2V0LWtleSddO1xuICAgIGNvbnN0IHVwZ3JhZGUgPSByZXEuaGVhZGVycy51cGdyYWRlO1xuICAgIGNvbnN0IHZlcnNpb24gPSArcmVxLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtdmVyc2lvbiddO1xuXG4gICAgaWYgKHJlcS5tZXRob2QgIT09ICdHRVQnKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gJ0ludmFsaWQgSFRUUCBtZXRob2QnO1xuICAgICAgYWJvcnRIYW5kc2hha2VPckVtaXR3c0NsaWVudEVycm9yKHRoaXMsIHJlcSwgc29ja2V0LCA0MDUsIG1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh1cGdyYWRlID09PSB1bmRlZmluZWQgfHwgdXBncmFkZS50b0xvd2VyQ2FzZSgpICE9PSAnd2Vic29ja2V0Jykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdJbnZhbGlkIFVwZ3JhZGUgaGVhZGVyJztcbiAgICAgIGFib3J0SGFuZHNoYWtlT3JFbWl0d3NDbGllbnRFcnJvcih0aGlzLCByZXEsIHNvY2tldCwgNDAwLCBtZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwgIWtleVJlZ2V4LnRlc3Qoa2V5KSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdNaXNzaW5nIG9yIGludmFsaWQgU2VjLVdlYlNvY2tldC1LZXkgaGVhZGVyJztcbiAgICAgIGFib3J0SGFuZHNoYWtlT3JFbWl0d3NDbGllbnRFcnJvcih0aGlzLCByZXEsIHNvY2tldCwgNDAwLCBtZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbiAhPT0gMTMgJiYgdmVyc2lvbiAhPT0gOCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdNaXNzaW5nIG9yIGludmFsaWQgU2VjLVdlYlNvY2tldC1WZXJzaW9uIGhlYWRlcic7XG4gICAgICBhYm9ydEhhbmRzaGFrZU9yRW1pdHdzQ2xpZW50RXJyb3IodGhpcywgcmVxLCBzb2NrZXQsIDQwMCwgbWVzc2FnZSwge1xuICAgICAgICAnU2VjLVdlYlNvY2tldC1WZXJzaW9uJzogJzEzLCA4J1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnNob3VsZEhhbmRsZShyZXEpKSB7XG4gICAgICBhYm9ydEhhbmRzaGFrZShzb2NrZXQsIDQwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VjV2ViU29ja2V0UHJvdG9jb2wgPSByZXEuaGVhZGVyc1snc2VjLXdlYnNvY2tldC1wcm90b2NvbCddO1xuICAgIGxldCBwcm90b2NvbHMgPSBuZXcgU2V0KCk7XG5cbiAgICBpZiAoc2VjV2ViU29ja2V0UHJvdG9jb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJvdG9jb2xzID0gc3VicHJvdG9jb2wucGFyc2Uoc2VjV2ViU29ja2V0UHJvdG9jb2wpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnSW52YWxpZCBTZWMtV2ViU29ja2V0LVByb3RvY29sIGhlYWRlcic7XG4gICAgICAgIGFib3J0SGFuZHNoYWtlT3JFbWl0d3NDbGllbnRFcnJvcih0aGlzLCByZXEsIHNvY2tldCwgNDAwLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNlY1dlYlNvY2tldEV4dGVuc2lvbnMgPSByZXEuaGVhZGVyc1snc2VjLXdlYnNvY2tldC1leHRlbnNpb25zJ107XG4gICAgY29uc3QgZXh0ZW5zaW9ucyA9IHt9O1xuXG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRpb25zLnBlck1lc3NhZ2VEZWZsYXRlICYmXG4gICAgICBzZWNXZWJTb2NrZXRFeHRlbnNpb25zICE9PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIGNvbnN0IHBlck1lc3NhZ2VEZWZsYXRlID0gbmV3IFBlck1lc3NhZ2VEZWZsYXRlKHtcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLnBlck1lc3NhZ2VEZWZsYXRlLFxuICAgICAgICBpc1NlcnZlcjogdHJ1ZSxcbiAgICAgICAgbWF4UGF5bG9hZDogdGhpcy5vcHRpb25zLm1heFBheWxvYWRcbiAgICAgIH0pO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBvZmZlcnMgPSBleHRlbnNpb24ucGFyc2Uoc2VjV2ViU29ja2V0RXh0ZW5zaW9ucyk7XG5cbiAgICAgICAgaWYgKG9mZmVyc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSkge1xuICAgICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlLmFjY2VwdChvZmZlcnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pO1xuICAgICAgICAgIGV4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0gPSBwZXJNZXNzYWdlRGVmbGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgICAgICdJbnZhbGlkIG9yIHVuYWNjZXB0YWJsZSBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnMgaGVhZGVyJztcbiAgICAgICAgYWJvcnRIYW5kc2hha2VPckVtaXR3c0NsaWVudEVycm9yKHRoaXMsIHJlcSwgc29ja2V0LCA0MDAsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBPcHRpb25hbGx5IGNhbGwgZXh0ZXJuYWwgY2xpZW50IHZlcmlmaWNhdGlvbiBoYW5kbGVyLlxuICAgIC8vXG4gICAgaWYgKHRoaXMub3B0aW9ucy52ZXJpZnlDbGllbnQpIHtcbiAgICAgIGNvbnN0IGluZm8gPSB7XG4gICAgICAgIG9yaWdpbjpcbiAgICAgICAgICByZXEuaGVhZGVyc1tgJHt2ZXJzaW9uID09PSA4ID8gJ3NlYy13ZWJzb2NrZXQtb3JpZ2luJyA6ICdvcmlnaW4nfWBdLFxuICAgICAgICBzZWN1cmU6ICEhKHJlcS5zb2NrZXQuYXV0aG9yaXplZCB8fCByZXEuc29ja2V0LmVuY3J5cHRlZCksXG4gICAgICAgIHJlcVxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy52ZXJpZnlDbGllbnQubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy52ZXJpZnlDbGllbnQoaW5mbywgKHZlcmlmaWVkLCBjb2RlLCBtZXNzYWdlLCBoZWFkZXJzKSA9PiB7XG4gICAgICAgICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIGFib3J0SGFuZHNoYWtlKHNvY2tldCwgY29kZSB8fCA0MDEsIG1lc3NhZ2UsIGhlYWRlcnMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY29tcGxldGVVcGdyYWRlKFxuICAgICAgICAgICAgZXh0ZW5zaW9ucyxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIHByb3RvY29scyxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIHNvY2tldCxcbiAgICAgICAgICAgIGhlYWQsXG4gICAgICAgICAgICBjYlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5vcHRpb25zLnZlcmlmeUNsaWVudChpbmZvKSkgcmV0dXJuIGFib3J0SGFuZHNoYWtlKHNvY2tldCwgNDAxKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBsZXRlVXBncmFkZShleHRlbnNpb25zLCBrZXksIHByb3RvY29scywgcmVxLCBzb2NrZXQsIGhlYWQsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGdyYWRlIHRoZSBjb25uZWN0aW9uIHRvIFdlYlNvY2tldC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGV4dGVuc2lvbnMgVGhlIGFjY2VwdGVkIGV4dGVuc2lvbnNcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUgdmFsdWUgb2YgdGhlIGBTZWMtV2ViU29ja2V0LUtleWAgaGVhZGVyXG4gICAqIEBwYXJhbSB7U2V0fSBwcm90b2NvbHMgVGhlIHN1YnByb3RvY29sc1xuICAgKiBAcGFyYW0ge2h0dHAuSW5jb21pbmdNZXNzYWdlfSByZXEgVGhlIHJlcXVlc3Qgb2JqZWN0XG4gICAqIEBwYXJhbSB7RHVwbGV4fSBzb2NrZXQgVGhlIG5ldHdvcmsgc29ja2V0IGJldHdlZW4gdGhlIHNlcnZlciBhbmQgY2xpZW50XG4gICAqIEBwYXJhbSB7QnVmZmVyfSBoZWFkIFRoZSBmaXJzdCBwYWNrZXQgb2YgdGhlIHVwZ3JhZGVkIHN0cmVhbVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgY2FsbGVkIG1vcmUgdGhhbiBvbmNlIHdpdGggdGhlIHNhbWUgc29ja2V0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb21wbGV0ZVVwZ3JhZGUoZXh0ZW5zaW9ucywga2V5LCBwcm90b2NvbHMsIHJlcSwgc29ja2V0LCBoZWFkLCBjYikge1xuICAgIC8vXG4gICAgLy8gRGVzdHJveSB0aGUgc29ja2V0IGlmIHRoZSBjbGllbnQgaGFzIGFscmVhZHkgc2VudCBhIEZJTiBwYWNrZXQuXG4gICAgLy9cbiAgICBpZiAoIXNvY2tldC5yZWFkYWJsZSB8fCAhc29ja2V0LndyaXRhYmxlKSByZXR1cm4gc29ja2V0LmRlc3Ryb3koKTtcblxuICAgIGlmIChzb2NrZXRba1dlYlNvY2tldF0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ3NlcnZlci5oYW5kbGVVcGdyYWRlKCkgd2FzIGNhbGxlZCBtb3JlIHRoYW4gb25jZSB3aXRoIHRoZSBzYW1lICcgK1xuICAgICAgICAgICdzb2NrZXQsIHBvc3NpYmx5IGR1ZSB0byBhIG1pc2NvbmZpZ3VyYXRpb24nXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zdGF0ZSA+IFJVTk5JTkcpIHJldHVybiBhYm9ydEhhbmRzaGFrZShzb2NrZXQsIDUwMyk7XG5cbiAgICBjb25zdCBkaWdlc3QgPSBjcmVhdGVIYXNoKCdzaGExJylcbiAgICAgIC51cGRhdGUoa2V5ICsgR1VJRClcbiAgICAgIC5kaWdlc3QoJ2Jhc2U2NCcpO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IFtcbiAgICAgICdIVFRQLzEuMSAxMDEgU3dpdGNoaW5nIFByb3RvY29scycsXG4gICAgICAnVXBncmFkZTogd2Vic29ja2V0JyxcbiAgICAgICdDb25uZWN0aW9uOiBVcGdyYWRlJyxcbiAgICAgIGBTZWMtV2ViU29ja2V0LUFjY2VwdDogJHtkaWdlc3R9YFxuICAgIF07XG5cbiAgICBjb25zdCB3cyA9IG5ldyB0aGlzLm9wdGlvbnMuV2ViU29ja2V0KG51bGwsIHVuZGVmaW5lZCwgdGhpcy5vcHRpb25zKTtcblxuICAgIGlmIChwcm90b2NvbHMuc2l6ZSkge1xuICAgICAgLy9cbiAgICAgIC8vIE9wdGlvbmFsbHkgY2FsbCBleHRlcm5hbCBwcm90b2NvbCBzZWxlY3Rpb24gaGFuZGxlci5cbiAgICAgIC8vXG4gICAgICBjb25zdCBwcm90b2NvbCA9IHRoaXMub3B0aW9ucy5oYW5kbGVQcm90b2NvbHNcbiAgICAgICAgPyB0aGlzLm9wdGlvbnMuaGFuZGxlUHJvdG9jb2xzKHByb3RvY29scywgcmVxKVxuICAgICAgICA6IHByb3RvY29scy52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG5cbiAgICAgIGlmIChwcm90b2NvbCkge1xuICAgICAgICBoZWFkZXJzLnB1c2goYFNlYy1XZWJTb2NrZXQtUHJvdG9jb2w6ICR7cHJvdG9jb2x9YCk7XG4gICAgICAgIHdzLl9wcm90b2NvbCA9IHByb3RvY29sO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChleHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSBleHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdLnBhcmFtcztcbiAgICAgIGNvbnN0IHZhbHVlID0gZXh0ZW5zaW9uLmZvcm1hdCh7XG4gICAgICAgIFtQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXTogW3BhcmFtc11cbiAgICAgIH0pO1xuICAgICAgaGVhZGVycy5wdXNoKGBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnM6ICR7dmFsdWV9YCk7XG4gICAgICB3cy5fZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnM7XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBBbGxvdyBleHRlcm5hbCBtb2RpZmljYXRpb24vaW5zcGVjdGlvbiBvZiBoYW5kc2hha2UgaGVhZGVycy5cbiAgICAvL1xuICAgIHRoaXMuZW1pdCgnaGVhZGVycycsIGhlYWRlcnMsIHJlcSk7XG5cbiAgICBzb2NrZXQud3JpdGUoaGVhZGVycy5jb25jYXQoJ1xcclxcbicpLmpvaW4oJ1xcclxcbicpKTtcbiAgICBzb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgc29ja2V0T25FcnJvcik7XG5cbiAgICB3cy5zZXRTb2NrZXQoc29ja2V0LCBoZWFkLCB7XG4gICAgICBhbGxvd1N5bmNocm9ub3VzRXZlbnRzOiB0aGlzLm9wdGlvbnMuYWxsb3dTeW5jaHJvbm91c0V2ZW50cyxcbiAgICAgIG1heFBheWxvYWQ6IHRoaXMub3B0aW9ucy5tYXhQYXlsb2FkLFxuICAgICAgc2tpcFVURjhWYWxpZGF0aW9uOiB0aGlzLm9wdGlvbnMuc2tpcFVURjhWYWxpZGF0aW9uXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5jbGllbnRzKSB7XG4gICAgICB0aGlzLmNsaWVudHMuYWRkKHdzKTtcbiAgICAgIHdzLm9uKCdjbG9zZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5jbGllbnRzLmRlbGV0ZSh3cyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3Nob3VsZEVtaXRDbG9zZSAmJiAhdGhpcy5jbGllbnRzLnNpemUpIHtcbiAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGVtaXRDbG9zZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNiKHdzLCByZXEpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViU29ja2V0U2VydmVyO1xuXG4vKipcbiAqIEFkZCBldmVudCBsaXN0ZW5lcnMgb24gYW4gYEV2ZW50RW1pdHRlcmAgdXNpbmcgYSBtYXAgb2YgPGV2ZW50LCBsaXN0ZW5lcj5cbiAqIHBhaXJzLlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBzZXJ2ZXIgVGhlIGV2ZW50IGVtaXR0ZXJcbiAqIEBwYXJhbSB7T2JqZWN0LjxTdHJpbmcsIEZ1bmN0aW9uPn0gbWFwIFRoZSBsaXN0ZW5lcnMgdG8gYWRkXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVtb3ZlIHRoZSBhZGRlZCBsaXN0ZW5lcnMgd2hlblxuICogICAgIGNhbGxlZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkTGlzdGVuZXJzKHNlcnZlciwgbWFwKSB7XG4gIGZvciAoY29uc3QgZXZlbnQgb2YgT2JqZWN0LmtleXMobWFwKSkgc2VydmVyLm9uKGV2ZW50LCBtYXBbZXZlbnRdKTtcblxuICByZXR1cm4gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGZvciAoY29uc3QgZXZlbnQgb2YgT2JqZWN0LmtleXMobWFwKSkge1xuICAgICAgc2VydmVyLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBtYXBbZXZlbnRdKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogRW1pdCBhIGAnY2xvc2UnYCBldmVudCBvbiBhbiBgRXZlbnRFbWl0dGVyYC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gc2VydmVyIFRoZSBldmVudCBlbWl0dGVyXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBlbWl0Q2xvc2Uoc2VydmVyKSB7XG4gIHNlcnZlci5fc3RhdGUgPSBDTE9TRUQ7XG4gIHNlcnZlci5lbWl0KCdjbG9zZScpO1xufVxuXG4vKipcbiAqIEhhbmRsZSBzb2NrZXQgZXJyb3JzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNvY2tldE9uRXJyb3IoKSB7XG4gIHRoaXMuZGVzdHJveSgpO1xufVxuXG4vKipcbiAqIENsb3NlIHRoZSBjb25uZWN0aW9uIHdoZW4gcHJlY29uZGl0aW9ucyBhcmUgbm90IGZ1bGZpbGxlZC5cbiAqXG4gKiBAcGFyYW0ge0R1cGxleH0gc29ja2V0IFRoZSBzb2NrZXQgb2YgdGhlIHVwZ3JhZGUgcmVxdWVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IGNvZGUgVGhlIEhUVFAgcmVzcG9uc2Ugc3RhdHVzIGNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBbbWVzc2FnZV0gVGhlIEhUVFAgcmVzcG9uc2UgYm9keVxuICogQHBhcmFtIHtPYmplY3R9IFtoZWFkZXJzXSBBZGRpdGlvbmFsIEhUVFAgcmVzcG9uc2UgaGVhZGVyc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWJvcnRIYW5kc2hha2Uoc29ja2V0LCBjb2RlLCBtZXNzYWdlLCBoZWFkZXJzKSB7XG4gIC8vXG4gIC8vIFRoZSBzb2NrZXQgaXMgd3JpdGFibGUgdW5sZXNzIHRoZSB1c2VyIGRlc3Ryb3llZCBvciBlbmRlZCBpdCBiZWZvcmUgY2FsbGluZ1xuICAvLyBgc2VydmVyLmhhbmRsZVVwZ3JhZGUoKWAgb3IgaW4gdGhlIGB2ZXJpZnlDbGllbnRgIGZ1bmN0aW9uLCB3aGljaCBpcyBhIHVzZXJcbiAgLy8gZXJyb3IuIEhhbmRsaW5nIHRoaXMgZG9lcyBub3QgbWFrZSBtdWNoIHNlbnNlIGFzIHRoZSB3b3JzdCB0aGF0IGNhbiBoYXBwZW5cbiAgLy8gaXMgdGhhdCBzb21lIG9mIHRoZSBkYXRhIHdyaXR0ZW4gYnkgdGhlIHVzZXIgbWlnaHQgYmUgZGlzY2FyZGVkIGR1ZSB0byB0aGVcbiAgLy8gY2FsbCB0byBgc29ja2V0LmVuZCgpYCBiZWxvdywgd2hpY2ggdHJpZ2dlcnMgYW4gYCdlcnJvcidgIGV2ZW50IHRoYXQgaW5cbiAgLy8gdHVybiBjYXVzZXMgdGhlIHNvY2tldCB0byBiZSBkZXN0cm95ZWQuXG4gIC8vXG4gIG1lc3NhZ2UgPSBtZXNzYWdlIHx8IGh0dHAuU1RBVFVTX0NPREVTW2NvZGVdO1xuICBoZWFkZXJzID0ge1xuICAgIENvbm5lY3Rpb246ICdjbG9zZScsXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWwnLFxuICAgICdDb250ZW50LUxlbmd0aCc6IEJ1ZmZlci5ieXRlTGVuZ3RoKG1lc3NhZ2UpLFxuICAgIC4uLmhlYWRlcnNcbiAgfTtcblxuICBzb2NrZXQub25jZSgnZmluaXNoJywgc29ja2V0LmRlc3Ryb3kpO1xuXG4gIHNvY2tldC5lbmQoXG4gICAgYEhUVFAvMS4xICR7Y29kZX0gJHtodHRwLlNUQVRVU19DT0RFU1tjb2RlXX1cXHJcXG5gICtcbiAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpXG4gICAgICAgIC5tYXAoKGgpID0+IGAke2h9OiAke2hlYWRlcnNbaF19YClcbiAgICAgICAgLmpvaW4oJ1xcclxcbicpICtcbiAgICAgICdcXHJcXG5cXHJcXG4nICtcbiAgICAgIG1lc3NhZ2VcbiAgKTtcbn1cblxuLyoqXG4gKiBFbWl0IGEgYCd3c0NsaWVudEVycm9yJ2AgZXZlbnQgb24gYSBgV2ViU29ja2V0U2VydmVyYCBpZiB0aGVyZSBpcyBhdCBsZWFzdFxuICogb25lIGxpc3RlbmVyIGZvciBpdCwgb3RoZXJ3aXNlIGNhbGwgYGFib3J0SGFuZHNoYWtlKClgLlxuICpcbiAqIEBwYXJhbSB7V2ViU29ja2V0U2VydmVyfSBzZXJ2ZXIgVGhlIFdlYlNvY2tldCBzZXJ2ZXJcbiAqIEBwYXJhbSB7aHR0cC5JbmNvbWluZ01lc3NhZ2V9IHJlcSBUaGUgcmVxdWVzdCBvYmplY3RcbiAqIEBwYXJhbSB7RHVwbGV4fSBzb2NrZXQgVGhlIHNvY2tldCBvZiB0aGUgdXBncmFkZSByZXF1ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gY29kZSBUaGUgSFRUUCByZXNwb25zZSBzdGF0dXMgY29kZVxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIEhUVFAgcmVzcG9uc2UgYm9keVxuICogQHBhcmFtIHtPYmplY3R9IFtoZWFkZXJzXSBUaGUgSFRUUCByZXNwb25zZSBoZWFkZXJzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhYm9ydEhhbmRzaGFrZU9yRW1pdHdzQ2xpZW50RXJyb3IoXG4gIHNlcnZlcixcbiAgcmVxLFxuICBzb2NrZXQsXG4gIGNvZGUsXG4gIG1lc3NhZ2UsXG4gIGhlYWRlcnNcbikge1xuICBpZiAoc2VydmVyLmxpc3RlbmVyQ291bnQoJ3dzQ2xpZW50RXJyb3InKSkge1xuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShlcnIsIGFib3J0SGFuZHNoYWtlT3JFbWl0d3NDbGllbnRFcnJvcik7XG5cbiAgICBzZXJ2ZXIuZW1pdCgnd3NDbGllbnRFcnJvcicsIGVyciwgc29ja2V0LCByZXEpO1xuICB9IGVsc2Uge1xuICAgIGFib3J0SGFuZHNoYWtlKHNvY2tldCwgY29kZSwgbWVzc2FnZSwgaGVhZGVycyk7XG4gIH1cbn1cbiIsICIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgb3MgZnJvbSBcIm5vZGU6b3NcIjtcbmltcG9ydCByZWFkbGluZSBmcm9tIFwibm9kZTpyZWFkbGluZVwiO1xuaW1wb3J0IHBjIGZyb20gXCJwaWNvY29sb3JzXCI7XG5pbXBvcnQgeyBXZWJQdWJTdWJDbGllbnQgfSBmcm9tIFwiQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50XCI7XG5pbXBvcnQgeyBsb2FkQ3JlZGVudGlhbHMsIHNhdmVDcmVkZW50aWFscywgd2lwZUNyZWRlbnRpYWxzLCBDcmVkZW50aWFscyB9IGZyb20gXCIuL2NyZWRlbnRpYWxzLmpzXCI7XG5cbnR5cGUgU3ViY29tbWFuZCA9IChhcmdzOiBzdHJpbmdbXSkgPT4gUHJvbWlzZTxudW1iZXI+O1xuXG5jb25zdCBzdWJjb21tYW5kczogUmVjb3JkPHN0cmluZywgU3ViY29tbWFuZD4gPSB7XG4gIGpvaW46IGNtZEpvaW4sXG4gIGRhZW1vbjogY21kRGFlbW9uLFxuICBjbGllbnRzOiBjbWRDbGllbnRzLFxuICBzZW5kOiBjbWRTZW5kLFxuICB1bnBhaXI6IGNtZFVucGFpcixcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgY29uc3QgW2NtZCwgLi4ucmVzdF0gPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMik7XG4gIGlmICghY21kIHx8IGNtZCA9PT0gXCItLWhlbHBcIiB8fCBjbWQgPT09IFwiLWhcIikge1xuICAgIHByaW50VXNhZ2UoKTtcbiAgICByZXR1cm4gY21kID8gMCA6IDI7XG4gIH1cbiAgY29uc3QgZm4gPSBzdWJjb21tYW5kc1tjbWRdO1xuICBpZiAoIWZuKSB7XG4gICAgY29uc29sZS5lcnJvcihwYy5yZWQoYHVua25vd24gc3ViY29tbWFuZDogJHtjbWR9YCkpO1xuICAgIHByaW50VXNhZ2UoKTtcbiAgICByZXR1cm4gMjtcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbihyZXN0KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihwYy5yZWQoZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFN0cmluZyhlcnIpKSk7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRVc2FnZSgpOiB2b2lkIHtcbiAgY29uc29sZS5lcnJvcihgXG5idmctZGVhbW9uIFx1MjAxNCBwdXJlLUF6dXJlIHRyYW5zcG9ydCBjbGllbnQgZm9yIGJ2Z2VlcnRcblxuVXNhZ2U6XG4gIGJ2Zy1kZWFtb24gam9pbiAtLWh1YiA8d3NzOi8veC53ZWJwdWJzdWIuYXp1cmUuY29tL2NsaWVudC9odWJzLzxodWI+PiAtLXRyYW5zcG9ydCA8aWRlbnRpZmllcj5cbiAgICAgIGFub255bW91c2x5IGNvbm5lY3QgdG8gYnZnZWVydCB2aWEgQXp1cmUsIHJlcXVlc3QgdG8gam9pbiBhXG4gICAgICB0cmFuc3BvcnQsIHByaW50IGEgcGFpcmluZyBjb2RlIGFuZCB3YWl0IGZvciBhZG1pbiBhcHByb3ZhbC5cblxuICBidmctZGVhbW9uIGRhZW1vblxuICAgICAga2VlcCBhbiBhdXRoZW50aWNhdGVkIFdlYlNvY2tldCBvcGVuLiBQcmludHMgaW5jb21pbmcgZW52ZWxvcGVzLlxuICAgICAgVHlwZSBcInJlcGx5IDx0ZXh0PlwiIGluIHN0ZGluIHRvIHJlcGx5IHRvIHRoZSBsYXN0IHNlbmRlci5cblxuICBidmctZGVhbW9uIGNsaWVudHMgWy0tb25saW5lXVxuICAgICAgbGlzdCBtZW1iZXJzIG9mIHRoZSBqb2luZWQgdHJhbnNwb3J0LlxuXG4gIGJ2Zy1kZWFtb24gc2VuZCA8dGFyZ2V0LWlkZW50aWZpZXJ8Kj4gPHRleHQ+XG4gICAgICBzZW5kIGEgZGlyZWN0IG1lc3NhZ2UgdG8gb25lIGNsaWVudCBvbiB0aGUgam9pbmVkIHRyYW5zcG9ydCwgb3IgXCIqXCIgdG8gYnJvYWRjYXN0LlxuXG4gIGJ2Zy1kZWFtb24gdW5wYWlyXG4gICAgICB3aXBlIGxvY2FsIGNyZWRlbnRpYWxzIChzZXJ2ZXItc2lkZSByZXZva2UgdmlhIGJ2Z2VlcnQgYWRtaW4pLlxuXG5DcmVkZW50aWFscyBhcmUgc3RvcmVkIGF0ICRCVkdfREVBTU9OX0NSRURFTlRJQUxTIG9yIH4vLmNvbmZpZy9idmctZGVhbW9uL2NyZWRlbnRpYWxzLmpzb24gKG1vZGUgMDYwMCkuXG5gKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VGbGFnKGFyZ3M6IHN0cmluZ1tdLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBjb25zdCBpZHggPSBhcmdzLmluZGV4T2YoYC0tJHtuYW1lfWApO1xuICBpZiAoaWR4ID09PSAtMSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgcmV0dXJuIGFyZ3NbaWR4ICsgMV07XG59XG5cbnR5cGUgUGFpcmluZ0NvZGVNc2cgPSB7IHR5cGU6IFwicGFpcmluZy5jb2RlXCI7IGNvZGU6IHN0cmluZzsgZXhwaXJlc19hdDogc3RyaW5nOyBhZG1pbl91cmw/OiBzdHJpbmcgfTtcbnR5cGUgUGFpcmluZ0FwcHJvdmVkTXNnID0geyB0eXBlOiBcInBhaXJpbmcuYXBwcm92ZWRcIjsgY2xpZW50X2lkOiBzdHJpbmc7IHJlZ2lzdHJhdGlvbl90b2tlbjogc3RyaW5nOyB1cmw6IHN0cmluZzsgZXhwaXJlc19hdDogc3RyaW5nIH07XG50eXBlIFBhaXJpbmdEZW5pZWRNc2cgPSB7IHR5cGU6IFwicGFpcmluZy5kZW5pZWRcIiB9O1xudHlwZSBUb2tlblJlZnJlc2hNc2cgPSB7IHR5cGU6IFwidG9rZW4ucmVmcmVzaFwiOyB1cmw6IHN0cmluZzsgZXhwaXJlc19hdDogc3RyaW5nIH07XG50eXBlIFN5c3RlbU1zZyA9IFBhaXJpbmdDb2RlTXNnIHwgUGFpcmluZ0FwcHJvdmVkTXNnIHwgUGFpcmluZ0RlbmllZE1zZyB8IFRva2VuUmVmcmVzaE1zZztcblxuZnVuY3Rpb24gYXNTeXN0ZW1Nc2coZGF0YTogdW5rbm93bik6IFN5c3RlbU1zZyB8IG51bGwge1xuICBpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09IFwib2JqZWN0XCIpIHJldHVybiBudWxsO1xuICBjb25zdCBvYmogPSBkYXRhIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBpZiAodHlwZW9mIG9iai50eXBlICE9PSBcInN0cmluZ1wiKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIG9iaiBhcyBTeXN0ZW1Nc2c7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNtZEpvaW4oYXJnczogc3RyaW5nW10pOiBQcm9taXNlPG51bWJlcj4ge1xuICBjb25zdCBodWIgPSBwYXJzZUZsYWcoYXJncywgXCJodWJcIik7XG4gIGNvbnN0IHRyYW5zcG9ydCA9IHBhcnNlRmxhZyhhcmdzLCBcInRyYW5zcG9ydFwiKTtcbiAgaWYgKCFodWIgfHwgIXRyYW5zcG9ydCkge1xuICAgIGNvbnNvbGUuZXJyb3IocGMucmVkKFwidXNhZ2U6IGJ2Zy1kZWFtb24gam9pbiAtLWh1YiA8d3NzLXVybD4gLS10cmFuc3BvcnQgPGlkZW50aWZpZXI+XCIpKTtcbiAgICByZXR1cm4gMjtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHBjLmN5YW4oXCJjb25uZWN0aW5nIHRvIEF6dXJlIGFub255bW91c2x5Li4uXCIpKTtcbiAgY29uc3QgY2xpZW50ID0gbmV3IFdlYlB1YlN1YkNsaWVudCh7IGdldENsaWVudEFjY2Vzc1VybDogYXN5bmMgKCkgPT4gaHViIH0pO1xuICBsZXQgYXBwcm92ZWQ6IFBhaXJpbmdBcHByb3ZlZE1zZyB8IG51bGwgPSBudWxsO1xuICBsZXQgZGVuaWVkID0gZmFsc2U7XG4gIGxldCB0b3BpY1JlcXVlc3RlZCA9IGZhbHNlO1xuICBsZXQgY29ubmVjdGlvbklkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBjbGllbnQub24oXCJjb25uZWN0ZWRcIiwgKGUpID0+IHtcbiAgICBjb25uZWN0aW9uSWQgPSBlLmNvbm5lY3Rpb25JZDtcbiAgfSk7XG4gIGNsaWVudC5vbihcInNlcnZlci1tZXNzYWdlXCIsIGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgbXNnID0gYXNTeXN0ZW1Nc2coZS5tZXNzYWdlLmRhdGEpO1xuICAgIGlmICghbXNnKSByZXR1cm47XG4gICAgaWYgKG1zZy50eXBlID09PSBcInBhaXJpbmcuY29kZVwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHBjLmJvbGQoXCJwYWlyIGNvZGU6XCIpLCBwYy5jeWFuKG1zZy5jb2RlKSk7XG4gICAgICBpZiAobXNnLmFkbWluX3VybCkgY29uc29sZS5sb2coYGFwcHJvdmUgaW4gYWRtaW46ICR7bXNnLmFkbWluX3VybH1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBleHBpcmVzOiAke21zZy5leHBpcmVzX2F0fWApO1xuICAgICAgY29uc29sZS5sb2cocGMuZGltKFwiXFxud2FpdGluZyBmb3IgYXBwcm92YWwgXHUyMDE0IEN0cmwrQyB0byBjYW5jZWxcXG5cIikpO1xuICAgICAgaWYgKCF0b3BpY1JlcXVlc3RlZCkge1xuICAgICAgICB0b3BpY1JlcXVlc3RlZCA9IHRydWU7XG4gICAgICAgIGF3YWl0IGNsaWVudC5zZW5kRXZlbnQoXCJwYWlyaW5nLnJlcXVlc3RfdG9waWNcIiwgeyB0b3BpY19pZGVudGlmaWVyOiB0cmFuc3BvcnQgfSwgXCJqc29uXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobXNnLnR5cGUgPT09IFwicGFpcmluZy5hcHByb3ZlZFwiKSB7XG4gICAgICBhcHByb3ZlZCA9IG1zZztcbiAgICB9IGVsc2UgaWYgKG1zZy50eXBlID09PSBcInBhaXJpbmcuZGVuaWVkXCIpIHtcbiAgICAgIGRlbmllZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICBhd2FpdCBjbGllbnQuc3RhcnQoKTtcblxuICBjb25zdCBzdGFydGVkQXQgPSBEYXRlLm5vdygpO1xuICB3aGlsZSAoIWFwcHJvdmVkICYmICFkZW5pZWQgJiYgRGF0ZS5ub3coKSAtIHN0YXJ0ZWRBdCA8IDMwICogNjAgKiAxMDAwKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgMTAwMCkpO1xuICB9XG4gIGF3YWl0IGNsaWVudC5zdG9wKCk7XG5cbiAgaWYgKGRlbmllZCkge1xuICAgIGNvbnNvbGUuZXJyb3IocGMucmVkKFwiZGVuaWVkIGJ5IGFkbWluXCIpKTtcbiAgICByZXR1cm4gMztcbiAgfVxuICBpZiAoIWFwcHJvdmVkKSB7XG4gICAgY29uc29sZS5lcnJvcihwYy5yZWQoXCJ0aW1lb3V0IHdhaXRpbmcgZm9yIGFwcHJvdmFsXCIpKTtcbiAgICByZXR1cm4gNDtcbiAgfVxuXG4gIGNvbnN0IHBhdGggPSBzYXZlQ3JlZGVudGlhbHMoe1xuICAgIGF6dXJlX2h1Yl91cmw6IGh1YixcbiAgICBjbGllbnRfaWQ6IChhcHByb3ZlZCBhcyBQYWlyaW5nQXBwcm92ZWRNc2cpLmNsaWVudF9pZCxcbiAgICByZWdpc3RyYXRpb25fdG9rZW46IChhcHByb3ZlZCBhcyBQYWlyaW5nQXBwcm92ZWRNc2cpLnJlZ2lzdHJhdGlvbl90b2tlbixcbiAgICBhY2Nlc3NfdXJsOiAoYXBwcm92ZWQgYXMgUGFpcmluZ0FwcHJvdmVkTXNnKS51cmwsXG4gICAgYWNjZXNzX3VybF9leHBpcmVzX2F0OiAoYXBwcm92ZWQgYXMgUGFpcmluZ0FwcHJvdmVkTXNnKS5leHBpcmVzX2F0LFxuICAgIHRvcGljX2lkZW50aWZpZXI6IHRyYW5zcG9ydCxcbiAgfSk7XG4gIGNvbnNvbGUubG9nKHBjLmdyZWVuKGBwYWlyZWQgYXMgJHsoYXBwcm92ZWQgYXMgUGFpcmluZ0FwcHJvdmVkTXNnKS5jbGllbnRfaWR9IG9uIHRyYW5zcG9ydCAke3RyYW5zcG9ydH1gKSk7XG4gIGNvbnNvbGUubG9nKGBjcmVkZW50aWFsczogJHtwYXRofWApO1xuICBjb25zb2xlLmxvZyhwYy5kaW0oYGJvb3RzdHJhcCBjb25uZWN0aW9uSWQgd2FzICR7Y29ubmVjdGlvbklkfWApKTtcbiAgcmV0dXJuIDA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNtZFVucGFpcihfYXJnczogc3RyaW5nW10pOiBQcm9taXNlPG51bWJlcj4ge1xuICB3aXBlQ3JlZGVudGlhbHMoKTtcbiAgY29uc29sZS5sb2cocGMuZ3JlZW4oXCJsb2NhbCBjcmVkZW50aWFscyB3aXBlZFwiKSk7XG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBhdXRoZWRDbGllbnQoY3JlZHM6IENyZWRlbnRpYWxzKTogV2ViUHViU3ViQ2xpZW50IHtcbiAgbGV0IGFjY2Vzc1VybCA9IGNyZWRzLmFjY2Vzc191cmwgPz8gXCJcIjtcbiAgbGV0IGFjY2Vzc0V4cGlyZXNBdCA9IGNyZWRzLmFjY2Vzc191cmxfZXhwaXJlc19hdCA/IERhdGUucGFyc2UoY3JlZHMuYWNjZXNzX3VybF9leHBpcmVzX2F0KSA6IDA7XG4gIGxldCByZWZyZXNoUmVzb2x2ZTogKCh1cmw6IHN0cmluZykgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcblxuICBjb25zdCBjOiBXZWJQdWJTdWJDbGllbnQgPSBuZXcgV2ViUHViU3ViQ2xpZW50KHtcbiAgICBnZXRDbGllbnRBY2Nlc3NVcmw6IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghYWNjZXNzVXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJubyBhY2Nlc3MgdXJsIFx1MjAxNCByZS1wYWlyXCIpO1xuICAgICAgaWYgKERhdGUubm93KCkgPj0gYWNjZXNzRXhwaXJlc0F0IC0gNjBfMDAwICYmICFyZWZyZXNoUmVzb2x2ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHdhaXRlciA9IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUpID0+IHsgcmVmcmVzaFJlc29sdmUgPSByZXNvbHZlOyB9KTtcbiAgICAgICAgICBhd2FpdCBjLnNlbmRFdmVudChcInJlcXVlc3RfcmVmcmVzaF90b2tlblwiLCB7fSwgXCJqc29uXCIpO1xuICAgICAgICAgIGFjY2Vzc1VybCA9IGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgICAgICB3YWl0ZXIsXG4gICAgICAgICAgICBuZXcgUHJvbWlzZTxzdHJpbmc+KChfLCByZWplY3QpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KG5ldyBFcnJvcihcInRva2VuIHJlZnJlc2ggdGltZW91dFwiKSksIDMwXzAwMCkpLFxuICAgICAgICAgIF0pO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvKiBmYWxsIGJhY2sgdG8gc3RhbGUgVVJMICovXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgcmVmcmVzaFJlc29sdmUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjZXNzVXJsO1xuICAgIH0sXG4gIH0sIHtcbiAgICBhdXRvUmVjb25uZWN0OiB0cnVlLFxuICAgIHJlY29ubmVjdFJldHJ5T3B0aW9uczogeyBtYXhSZXRyaWVzOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgcmV0cnlEZWxheUluTXM6IDFfMDAwLCBtYXhSZXRyeURlbGF5SW5NczogMzBfMDAwLCBtb2RlOiBcIkV4cG9uZW50aWFsXCIgfSxcbiAgfSk7XG5cbiAgYy5vbihcInNlcnZlci1tZXNzYWdlXCIsIChlKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGUubWVzc2FnZS5kYXRhIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkO1xuICAgIGlmIChkYXRhPy50eXBlID09PSBcInRva2VuLnJlZnJlc2hcIiAmJiB0eXBlb2YgZGF0YS51cmwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGFjY2Vzc1VybCA9IGRhdGEudXJsO1xuICAgICAgaWYgKHR5cGVvZiBkYXRhLmV4cGlyZXNfYXQgPT09IFwic3RyaW5nXCIpIGFjY2Vzc0V4cGlyZXNBdCA9IERhdGUucGFyc2UoZGF0YS5leHBpcmVzX2F0KTtcbiAgICAgIHJlZnJlc2hSZXNvbHZlPy4oZGF0YS51cmwpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGM7XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVDcmVkcygpOiBDcmVkZW50aWFscyB7XG4gIGNvbnN0IGNyZWRzID0gbG9hZENyZWRlbnRpYWxzKCk7XG4gIGlmICghY3JlZHMpIHtcbiAgICBjb25zb2xlLmVycm9yKHBjLnJlZChcIm5vdCBwYWlyZWQgXHUyMDE0IHJ1biBgYnZnLWRlYW1vbiBqb2luYCBmaXJzdFwiKSk7XG4gICAgcHJvY2Vzcy5leGl0KDIpO1xuICB9XG4gIHJldHVybiBjcmVkcztcbn1cblxuYXN5bmMgZnVuY3Rpb24gY21kRGFlbW9uKF9hcmdzOiBzdHJpbmdbXSk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGNvbnN0IGNyZWRzID0gcmVxdWlyZUNyZWRzKCk7XG4gIGNvbnN0IGNsaWVudCA9IGF1dGhlZENsaWVudChjcmVkcyk7XG5cbiAgbGV0IGxhc3RTZW5kZXI6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIGNsaWVudC5vbihcImNvbm5lY3RlZFwiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBjLmdyZWVuKGBjb25uZWN0ZWQgXHUyMDE0IGNvbm5lY3Rpb25JZD0ke2UuY29ubmVjdGlvbklkfSB1c2VySWQ9JHtlLnVzZXJJZH1gKSk7XG4gICAgY29uc29sZS5sb2cocGMuZGltKGB0cmFuc3BvcnQ6ICR7Y3JlZHMudG9waWNfaWRlbnRpZmllciA/PyBcIih1bmtub3duKVwifWApKTtcbiAgICBjb25zb2xlLmxvZyhwYy5kaW0oXCJ0eXBlICdyZXBseSA8dGV4dD4nIHRvIHJlcGx5IHRvIGxhc3Qgc2VuZGVyLCAnaGVscCcgZm9yIGNvbW1hbmRzXCIpKTtcbiAgfSk7XG4gIGNsaWVudC5vbihcImRpc2Nvbm5lY3RlZFwiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBjLnllbGxvdyhgZGlzY29ubmVjdGVkIFx1MjAxNCAke2UubWVzc2FnZSA/PyBcIlwifWApKTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlRW52ZWxvcGUgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgaWYgKGRhdGE/LnR5cGUgPT09IFwidG9rZW4ucmVmcmVzaFwiKSByZXR1cm47XG4gICAgY29uc3Qgc2VuZGVyID0gZGF0YT8uc2VuZGVyX2lkZW50aWZpZXIgPz8gXCIodW5rbm93bilcIjtcbiAgICBjb25zdCB0YXJnZXQgPSBkYXRhPy50YXJnZXRfaWRlbnRpZmllcjtcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gY3JlZHMuY2xpZW50X2lkKSByZXR1cm47IC8vIGZpbHRlciBvdXQgdGFyZ2V0ZWQtbm90LWZvci1tZVxuICAgIGNvbnN0IHBheWxvYWQgPSB0eXBlb2YgZGF0YT8ucGF5bG9hZCA9PT0gXCJzdHJpbmdcIiA/IGRhdGEucGF5bG9hZCA6IEpTT04uc3RyaW5naWZ5KGRhdGE/LnBheWxvYWQpO1xuICAgIGNvbnNvbGUubG9nKGAke3BjLmN5YW4oXCJbXCIgKyBzZW5kZXIgKyBcIl1cIil9ICR7ZGF0YT8ubWVzc2FnZV90eXBlID8/IFwiXCJ9OiAke3BheWxvYWR9YCk7XG4gICAgbGFzdFNlbmRlciA9IHNlbmRlcjtcbiAgfTtcblxuICBjbGllbnQub24oXCJzZXJ2ZXItbWVzc2FnZVwiLCAoZSkgPT4gaGFuZGxlRW52ZWxvcGUoZS5tZXNzYWdlLmRhdGEpKTtcbiAgY2xpZW50Lm9uKFwiZ3JvdXAtbWVzc2FnZVwiLCAoZSkgPT4gaGFuZGxlRW52ZWxvcGUoZS5tZXNzYWdlLmRhdGEpKTtcblxuICBhd2FpdCBjbGllbnQuc3RhcnQoKTtcblxuICBjb25zdCBybCA9IHJlYWRsaW5lLmNyZWF0ZUludGVyZmFjZSh7IGlucHV0OiBwcm9jZXNzLnN0ZGluLCBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0LCB0ZXJtaW5hbDogZmFsc2UgfSk7XG4gIHJsLm9uKFwibGluZVwiLCBhc3luYyAocmF3KSA9PiB7XG4gICAgY29uc3QgbGluZSA9IHJhdy50cmltKCk7XG4gICAgaWYgKCFsaW5lKSByZXR1cm47XG4gICAgaWYgKGxpbmUgPT09IFwiaGVscFwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhwYy5kaW0oXCJjb21tYW5kczogcmVwbHkgPHRleHQ+IHwgc2VuZCA8aWRlbnRpZmllcj4gPHRleHQ+IHwgY2xpZW50cyB8IHF1aXRcIikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobGluZSA9PT0gXCJxdWl0XCIpIHtcbiAgICAgIGF3YWl0IGNsaWVudC5zdG9wKCk7XG4gICAgICBwcm9jZXNzLmV4aXQoMCk7XG4gICAgfVxuICAgIGlmIChsaW5lID09PSBcImNsaWVudHNcIikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgbGlzdENsaWVudHMoY3JlZHMsIGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKHBjLnJlZChlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogU3RyaW5nKGVycikpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVwbHlNYXRjaCA9IGxpbmUubWF0Y2goL15yZXBseVxccysoLispJC8pO1xuICAgIGlmIChyZXBseU1hdGNoKSB7XG4gICAgICBpZiAoIWxhc3RTZW5kZXIpIHsgY29uc29sZS5sb2cocGMueWVsbG93KFwibm8gbGFzdCBzZW5kZXIgdG8gcmVwbHkgdG9cIikpOyByZXR1cm47IH1cbiAgICAgIGF3YWl0IHB1Ymxpc2goY2xpZW50LCBjcmVkcywgbGFzdFNlbmRlciwgcmVwbHlNYXRjaFsxXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbmRNYXRjaCA9IGxpbmUubWF0Y2goL15zZW5kXFxzKyhcXFMrKVxccysoLispJC8pO1xuICAgIGlmIChzZW5kTWF0Y2gpIHtcbiAgICAgIGF3YWl0IHB1Ymxpc2goY2xpZW50LCBjcmVkcywgc2VuZE1hdGNoWzFdLCBzZW5kTWF0Y2hbMl0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwYy55ZWxsb3coXCJ1bmtub3duIGNvbW1hbmQgXHUyMDE0IHRyeSAnaGVscCdcIikpO1xuICB9KTtcblxuICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IHNodXRkb3duID0gYXN5bmMgKHNpZzogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwYy5kaW0oYFxcbiR7c2lnfSwgc3RvcHBpbmdgKSk7XG4gICAgICB0cnkgeyBhd2FpdCBjbGllbnQuc3RvcCgpOyB9IGNhdGNoIHsgLyogKi8gfVxuICAgICAgcmVzb2x2ZSgwKTtcbiAgICB9O1xuICAgIHByb2Nlc3Mub24oXCJTSUdJTlRcIiwgKCkgPT4gc2h1dGRvd24oXCJTSUdJTlRcIikpO1xuICAgIHByb2Nlc3Mub24oXCJTSUdURVJNXCIsICgpID0+IHNodXRkb3duKFwiU0lHVEVSTVwiKSk7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwdWJsaXNoKGNsaWVudDogV2ViUHViU3ViQ2xpZW50LCBjcmVkczogQ3JlZGVudGlhbHMsIHRhcmdldElkZW50aWZpZXI6IHN0cmluZywgdGV4dDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHRhcmdldCA9IHRhcmdldElkZW50aWZpZXIgPT09IFwiKlwiID8gbnVsbCA6IHRhcmdldElkZW50aWZpZXI7XG4gIGF3YWl0IGNsaWVudC5zZW5kRXZlbnQoXCJwdWJsaXNoXCIsIHtcbiAgICB0b3BpY19pZGVudGlmaWVyOiBjcmVkcy50b3BpY19pZGVudGlmaWVyLFxuICAgIG1lc3NhZ2VfdHlwZTogXCJjaGF0LnRleHRcIixcbiAgICBwYXlsb2FkOiB0ZXh0LFxuICAgIHRhcmdldF9pZGVudGlmaWVyOiB0YXJnZXQsXG4gIH0sIFwianNvblwiKTtcbiAgY29uc29sZS5sb2cocGMuZ3JlZW4oYHNlbnQgdG8gJHt0YXJnZXRJZGVudGlmaWVyfTogJHt0ZXh0fWApKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY21kQ2xpZW50cyhhcmdzOiBzdHJpbmdbXSk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGNvbnN0IGNyZWRzID0gcmVxdWlyZUNyZWRzKCk7XG4gIGF3YWl0IGxpc3RDbGllbnRzKGNyZWRzLCBhcmdzLmluY2x1ZGVzKFwiLS1vbmxpbmVcIikpO1xuICByZXR1cm4gMDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbGlzdENsaWVudHMoY3JlZHM6IENyZWRlbnRpYWxzLCBvbmxpbmVPbmx5OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmICghY3JlZHMudG9waWNfaWRlbnRpZmllcikgdGhyb3cgbmV3IEVycm9yKFwibm8gdHJhbnNwb3J0IGFzc29jaWF0ZWQgd2l0aCBjcmVkZW50aWFsc1wiKTtcblxuICBjb25zdCBjbGllbnQgPSBhdXRoZWRDbGllbnQoY3JlZHMpO1xuICBsZXQgcmVzdWx0OiB7IGNsaWVudHM6IEFycmF5PHsgaWRlbnRpZmllcjogc3RyaW5nOyBuYW1lPzogc3RyaW5nOyBraW5kOiBzdHJpbmc7IG9ubGluZTogYm9vbGVhbiB9PiB9IHwgbnVsbCA9IG51bGw7XG4gIGNsaWVudC5vbihcInNlcnZlci1tZXNzYWdlXCIsIChlKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGUubWVzc2FnZS5kYXRhIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkO1xuICAgIGlmIChkYXRhPy50eXBlID09PSBcImNsaWVudHMubGlzdF9yZXN1bHRcIikge1xuICAgICAgcmVzdWx0ID0gZGF0YSBhcyBhbnk7XG4gICAgfVxuICB9KTtcbiAgYXdhaXQgY2xpZW50LnN0YXJ0KCk7XG4gIGF3YWl0IGNsaWVudC5zZW5kRXZlbnQoXCJjbGllbnRzLmxpc3RcIiwgeyB0b3BpY19pZGVudGlmaWVyOiBjcmVkcy50b3BpY19pZGVudGlmaWVyIH0sIFwianNvblwiKTtcbiAgY29uc3Qgc3RhcnRlZEF0ID0gRGF0ZS5ub3coKTtcbiAgd2hpbGUgKCFyZXN1bHQgJiYgRGF0ZS5ub3coKSAtIHN0YXJ0ZWRBdCA8IDEwXzAwMCkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIDEwMCkpO1xuICB9XG4gIGF3YWl0IGNsaWVudC5zdG9wKCk7XG4gIGlmICghcmVzdWx0KSB0aHJvdyBuZXcgRXJyb3IoXCJ0aW1lb3V0IHdhaXRpbmcgZm9yIGNsaWVudHMgbGlzdFwiKTtcblxuICBjb25zdCBlbnRyaWVzID0gb25saW5lT25seSA/IHJlc3VsdC5jbGllbnRzLmZpbHRlcigoYykgPT4gYy5vbmxpbmUpIDogcmVzdWx0LmNsaWVudHM7XG4gIGZvciAoY29uc3QgYyBvZiBlbnRyaWVzKSB7XG4gICAgY29uc3QgZG90ID0gYy5vbmxpbmUgPyBwYy5ncmVlbihcIlx1MjVDRlwiKSA6IHBjLmRpbShcIlx1MjVDQlwiKTtcbiAgICBjb25zb2xlLmxvZyhgJHtkb3R9ICR7Yy5pZGVudGlmaWVyfSR7Yy5uYW1lID8gYCAoJHtjLm5hbWV9KWAgOiBcIlwifSBcdTIwMTQgJHtjLmtpbmR9YCk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gY21kU2VuZChhcmdzOiBzdHJpbmdbXSk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGNvbnN0IGNyZWRzID0gcmVxdWlyZUNyZWRzKCk7XG4gIGNvbnN0IFt0YXJnZXQsIC4uLnJlc3RdID0gYXJncztcbiAgaWYgKCF0YXJnZXQgfHwgcmVzdC5sZW5ndGggPT09IDApIHtcbiAgICBjb25zb2xlLmVycm9yKHBjLnJlZChcInVzYWdlOiBidmctZGVhbW9uIHNlbmQgPHRhcmdldC1pZGVudGlmaWVyfCo+IDx0ZXh0PlwiKSk7XG4gICAgcmV0dXJuIDI7XG4gIH1cbiAgY29uc3QgdGV4dCA9IHJlc3Quam9pbihcIiBcIik7XG4gIGNvbnN0IGNsaWVudCA9IGF1dGhlZENsaWVudChjcmVkcyk7XG4gIGF3YWl0IGNsaWVudC5zdGFydCgpO1xuICBhd2FpdCBwdWJsaXNoKGNsaWVudCwgY3JlZHMsIHRhcmdldCwgdGV4dCk7XG4gIGF3YWl0IGNsaWVudC5zdG9wKCk7XG4gIHJldHVybiAwO1xufVxuXG5tYWluKCkudGhlbigoY29kZSkgPT4gcHJvY2Vzcy5leGl0KGNvZGUpKTtcbiIsICIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW50ZXJmYWNlIFdpbmRvdyB7XG4gIGRvY3VtZW50OiB1bmtub3duO1xufVxuXG5pbnRlcmZhY2UgRGVkaWNhdGVkV29ya2VyR2xvYmFsU2NvcGUge1xuICBjb25zdHJ1Y3Rvcjoge1xuICAgIG5hbWU6IHN0cmluZztcbiAgfTtcblxuICBpbXBvcnRTY3JpcHRzOiAoLi4ucGF0aHM6IHN0cmluZ1tdKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgTmF2aWdhdG9yIHtcbiAgcHJvZHVjdDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRGVub0dsb2JhbCB7XG4gIHZlcnNpb246IHtcbiAgICBkZW5vOiBzdHJpbmc7XG4gIH07XG59XG5cbmludGVyZmFjZSBCdW5HbG9iYWwge1xuICB2ZXJzaW9uOiBzdHJpbmc7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYXp1cmUvYXp1cmUtc2RrL3RzLW5vLXdpbmRvd1xuZGVjbGFyZSBjb25zdCB3aW5kb3c6IFdpbmRvdztcbmRlY2xhcmUgY29uc3Qgc2VsZjogRGVkaWNhdGVkV29ya2VyR2xvYmFsU2NvcGU7XG5kZWNsYXJlIGNvbnN0IERlbm86IERlbm9HbG9iYWw7XG5kZWNsYXJlIGNvbnN0IEJ1bjogQnVuR2xvYmFsO1xuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IE5hdmlnYXRvcjtcblxuLyoqXG4gKiBBIGNvbnN0YW50IHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVudmlyb25tZW50IHRoZSBjb2RlIGlzIHJ1bm5pbmcgaXMgYSBXZWIgQnJvd3Nlci5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhenVyZS9henVyZS1zZGsvdHMtbm8td2luZG93XG5leHBvcnQgY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiO1xuXG4vKipcbiAqIEEgY29uc3RhbnQgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZW52aXJvbm1lbnQgdGhlIGNvZGUgaXMgcnVubmluZyBpcyBhIFdlYiBXb3JrZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBpc1dlYldvcmtlciA9XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmXG4gIHR5cGVvZiBzZWxmPy5pbXBvcnRTY3JpcHRzID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgKHNlbGYuY29uc3RydWN0b3I/Lm5hbWUgPT09IFwiRGVkaWNhdGVkV29ya2VyR2xvYmFsU2NvcGVcIiB8fFxuICAgIHNlbGYuY29uc3RydWN0b3I/Lm5hbWUgPT09IFwiU2VydmljZVdvcmtlckdsb2JhbFNjb3BlXCIgfHxcbiAgICBzZWxmLmNvbnN0cnVjdG9yPy5uYW1lID09PSBcIlNoYXJlZFdvcmtlckdsb2JhbFNjb3BlXCIpO1xuXG4vKipcbiAqIEEgY29uc3RhbnQgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZW52aXJvbm1lbnQgdGhlIGNvZGUgaXMgcnVubmluZyBpcyBEZW5vLlxuICovXG5leHBvcnQgY29uc3QgaXNEZW5vID1cbiAgdHlwZW9mIERlbm8gIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgdHlwZW9mIERlbm8udmVyc2lvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICB0eXBlb2YgRGVuby52ZXJzaW9uLmRlbm8gIT09IFwidW5kZWZpbmVkXCI7XG5cbi8qKlxuICogQSBjb25zdGFudCB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBlbnZpcm9ubWVudCB0aGUgY29kZSBpcyBydW5uaW5nIGlzIEJ1bi5zaC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzQnVuID0gdHlwZW9mIEJ1biAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgQnVuLnZlcnNpb24gIT09IFwidW5kZWZpbmVkXCI7XG5cbi8qKlxuICogQSBjb25zdGFudCB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBlbnZpcm9ubWVudCB0aGUgY29kZSBpcyBydW5uaW5nIGlzIGEgTm9kZS5qcyBjb21wYXRpYmxlIGVudmlyb25tZW50LlxuICovXG5leHBvcnQgY29uc3QgaXNOb2RlTGlrZSA9XG4gIHR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgQm9vbGVhbihnbG9iYWxUaGlzLnByb2Nlc3MudmVyc2lvbikgJiZcbiAgQm9vbGVhbihnbG9iYWxUaGlzLnByb2Nlc3MudmVyc2lvbnM/Lm5vZGUpO1xuXG4vKipcbiAqIEEgY29uc3RhbnQgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZW52aXJvbm1lbnQgdGhlIGNvZGUgaXMgcnVubmluZyBpcyBOb2RlLkpTLlxuICovXG5leHBvcnQgY29uc3QgaXNOb2RlUnVudGltZSA9IGlzTm9kZUxpa2UgJiYgIWlzQnVuICYmICFpc0Rlbm87XG5cbi8qKlxuICogQSBjb25zdGFudCB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBlbnZpcm9ubWVudCB0aGUgY29kZSBpcyBydW5uaW5nIGlzIGluIFJlYWN0LU5hdGl2ZS5cbiAqL1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9ibG9iL21haW4vcGFja2FnZXMvcmVhY3QtbmF0aXZlL0xpYnJhcmllcy9Db3JlL3NldFVwTmF2aWdhdG9yLmpzXG5leHBvcnQgY29uc3QgaXNSZWFjdE5hdGl2ZSA9XG4gIHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgbmF2aWdhdG9yPy5wcm9kdWN0ID09PSBcIlJlYWN0TmF0aXZlXCI7XG4iLCAiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbi8qKlxuICogVGhpcyBlcnJvciBpcyB0aHJvd24gd2hlbiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uIGhhcyBiZWVuIGFib3J0ZWQuXG4gKiBDaGVjayBmb3IgdGhpcyBlcnJvciBieSB0ZXN0aW5nIHRoZSBgbmFtZWAgdGhhdCB0aGUgbmFtZSBwcm9wZXJ0eSBvZiB0aGVcbiAqIGVycm9yIG1hdGNoZXMgYFwiQWJvcnRFcnJvclwiYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgdHNcbiAqIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gKiBjb250cm9sbGVyLmFib3J0KCk7XG4gKiB0cnkge1xuICogICBkb0FzeW5jV29yayhjb250cm9sbGVyLnNpZ25hbClcbiAqIH0gY2F0Y2ggKGUpIHtcbiAqICAgaWYgKGUubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG4gKiAgICAgLy8gaGFuZGxlIGFib3J0IGVycm9yIGhlcmUuXG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgQWJvcnRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9IFwiQWJvcnRFcnJvclwiO1xuICB9XG59XG4iLCAiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IEFib3J0RXJyb3IgfSBmcm9tIFwiQGF6dXJlL2Fib3J0LWNvbnRyb2xsZXJcIjtcbmltcG9ydCB0eXBlIHsgQWJvcnRPcHRpb25zIH0gZnJvbSBcIi4vYWJvcnRlclV0aWxzLmpzXCI7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgdGhlIGNyZWF0ZUFib3J0YWJsZVByb21pc2UgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlQWJvcnRhYmxlUHJvbWlzZU9wdGlvbnMgZXh0ZW5kcyBBYm9ydE9wdGlvbnMge1xuICAvKiogQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgaWYgdGhlIHByb21pc2Ugd2FzIGFib3J0ZWQgKi9cbiAgY2xlYW51cEJlZm9yZUFib3J0PzogKCkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFib3J0YWJsZSBwcm9taXNlLlxuICogQHBhcmFtIGJ1aWxkUHJvbWlzZSAtIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVzb2x2ZSBhbmQgcmVqZWN0IGZ1bmN0aW9ucyBhcyBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBmb3IgdGhlIGFib3J0YWJsZSBwcm9taXNlLlxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgY2FuIGJlIGFib3J0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBYm9ydGFibGVQcm9taXNlPFQ+KFxuICBidWlsZFByb21pc2U6IChcbiAgICByZXNvbHZlOiAodmFsdWU6IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZCxcbiAgICByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQsXG4gICkgPT4gdm9pZCxcbiAgb3B0aW9ucz86IENyZWF0ZUFib3J0YWJsZVByb21pc2VPcHRpb25zLFxuKTogUHJvbWlzZTxUPiB7XG4gIGNvbnN0IHsgY2xlYW51cEJlZm9yZUFib3J0LCBhYm9ydFNpZ25hbCwgYWJvcnRFcnJvck1zZyB9ID0gb3B0aW9ucyA/PyB7fTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmdW5jdGlvbiByZWplY3RPbkFib3J0KCk6IHZvaWQge1xuICAgICAgcmVqZWN0KG5ldyBBYm9ydEVycm9yKGFib3J0RXJyb3JNc2cgPz8gXCJUaGUgb3BlcmF0aW9uIHdhcyBhYm9ydGVkLlwiKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpOiB2b2lkIHtcbiAgICAgIGFib3J0U2lnbmFsPy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQWJvcnQoKTogdm9pZCB7XG4gICAgICBjbGVhbnVwQmVmb3JlQWJvcnQ/LigpO1xuICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICByZWplY3RPbkFib3J0KCk7XG4gICAgfVxuICAgIGlmIChhYm9ydFNpZ25hbD8uYWJvcnRlZCkge1xuICAgICAgcmV0dXJuIHJlamVjdE9uQWJvcnQoKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGJ1aWxkUHJvbWlzZShcbiAgICAgICAgKHgpID0+IHtcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgICAgICByZXNvbHZlKHgpO1xuICAgICAgICB9LFxuICAgICAgICAoeCkgPT4ge1xuICAgICAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgICAgIHJlamVjdCh4KTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG4gICAgYWJvcnRTaWduYWw/LmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgfSk7XG59XG4iLCAiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB0eXBlIHsgQWJvcnRPcHRpb25zIH0gZnJvbSBcIi4vYWJvcnRlclV0aWxzLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVBYm9ydGFibGVQcm9taXNlIH0gZnJvbSBcIi4vY3JlYXRlQWJvcnRhYmxlUHJvbWlzZS5qc1wiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tSW50ZWdlckluY2x1c2l2ZSB9IGZyb20gXCJAdHlwZXNwZWMvdHMtaHR0cC1ydW50aW1lL2ludGVybmFsL3V0aWxcIjtcblxuY29uc3QgU3RhbmRhcmRBYm9ydE1lc3NhZ2UgPSBcIlRoZSBkZWxheSB3YXMgYWJvcnRlZC5cIjtcblxuLyoqXG4gKiBPcHRpb25zIGZvciBzdXBwb3J0IGFib3J0IGZ1bmN0aW9uYWxpdHkgZm9yIHRoZSBkZWxheSBtZXRob2RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEZWxheU9wdGlvbnMgZXh0ZW5kcyBBYm9ydE9wdGlvbnMge31cblxuLyoqXG4gKiBBIHdyYXBwZXIgZm9yIHNldFRpbWVvdXQgdGhhdCByZXNvbHZlcyBhIHByb21pc2UgYWZ0ZXIgdGltZUluTXMgbWlsbGlzZWNvbmRzLlxuICogQHBhcmFtIHRpbWVJbk1zIC0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gYmUgZGVsYXllZC5cbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgZm9yIGRlbGF5IC0gY3VycmVudGx5IGFib3J0IG9wdGlvbnNcbiAqIEByZXR1cm5zIFByb21pc2UgdGhhdCBpcyByZXNvbHZlZCBhZnRlciB0aW1lSW5Nc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsYXkodGltZUluTXM6IG51bWJlciwgb3B0aW9ucz86IERlbGF5T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICBsZXQgdG9rZW46IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+O1xuICBjb25zdCB7IGFib3J0U2lnbmFsLCBhYm9ydEVycm9yTXNnIH0gPSBvcHRpb25zID8/IHt9O1xuICByZXR1cm4gY3JlYXRlQWJvcnRhYmxlUHJvbWlzZShcbiAgICAocmVzb2x2ZSkgPT4ge1xuICAgICAgdG9rZW4gPSBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWVJbk1zKTtcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsZWFudXBCZWZvcmVBYm9ydDogKCkgPT4gY2xlYXJUaW1lb3V0KHRva2VuKSxcbiAgICAgIGFib3J0U2lnbmFsLFxuICAgICAgYWJvcnRFcnJvck1zZzogYWJvcnRFcnJvck1zZyA/PyBTdGFuZGFyZEFib3J0TWVzc2FnZSxcbiAgICB9LFxuICApO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRlbGF5IGludGVydmFsIGZvciByZXRyeSBhdHRlbXB0cyB1c2luZyBleHBvbmVudGlhbCBkZWxheSB3aXRoIGppdHRlci5cbiAqIEBwYXJhbSByZXRyeUF0dGVtcHQgLSBUaGUgY3VycmVudCByZXRyeSBhdHRlbXB0IG51bWJlci5cbiAqIEBwYXJhbSBjb25maWcgLSBUaGUgZXhwb25lbnRpYWwgcmV0cnkgY29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBjYWxjdWxhdGVkIHJldHJ5IGRlbGF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlUmV0cnlEZWxheShcbiAgcmV0cnlBdHRlbXB0OiBudW1iZXIsXG4gIGNvbmZpZzoge1xuICAgIHJldHJ5RGVsYXlJbk1zOiBudW1iZXI7XG4gICAgbWF4UmV0cnlEZWxheUluTXM6IG51bWJlcjtcbiAgfSxcbik6IHsgcmV0cnlBZnRlckluTXM6IG51bWJlciB9IHtcbiAgLy8gRXhwb25lbnRpYWxseSBpbmNyZWFzZSB0aGUgZGVsYXkgZWFjaCB0aW1lXG4gIGNvbnN0IGV4cG9uZW50aWFsRGVsYXkgPSBjb25maWcucmV0cnlEZWxheUluTXMgKiBNYXRoLnBvdygyLCByZXRyeUF0dGVtcHQpO1xuXG4gIC8vIERvbid0IGxldCB0aGUgZGVsYXkgZXhjZWVkIHRoZSBtYXhpbXVtXG4gIGNvbnN0IGNsYW1wZWREZWxheSA9IE1hdGgubWluKGNvbmZpZy5tYXhSZXRyeURlbGF5SW5NcywgZXhwb25lbnRpYWxEZWxheSk7XG5cbiAgLy8gQWxsb3cgdGhlIGZpbmFsIHZhbHVlIHRvIGhhdmUgc29tZSBcImppdHRlclwiICh3aXRoaW4gNTAlIG9mIHRoZSBkZWxheSBzaXplKSBzb1xuICAvLyB0aGF0IHJldHJpZXMgYWNyb3NzIG11bHRpcGxlIGNsaWVudHMgZG9uJ3Qgb2NjdXIgc2ltdWx0YW5lb3VzbHkuXG4gIGNvbnN0IHJldHJ5QWZ0ZXJJbk1zID0gY2xhbXBlZERlbGF5IC8gMiArIGdldFJhbmRvbUludGVnZXJJbmNsdXNpdmUoMCwgY2xhbXBlZERlbGF5IC8gMik7XG5cbiAgcmV0dXJuIHsgcmV0cnlBZnRlckluTXMgfTtcbn1cbiIsICJpbXBvcnQgeyBkZWxheSB9IGZyb20gXCJAYXp1cmUvY29yZS11dGlsXCI7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCJldmVudHNcIjtcbmltcG9ydCB7IEludm9jYXRpb25FcnJvciwgU2VuZE1lc3NhZ2VFcnJvciB9IGZyb20gXCIuL2Vycm9ycy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4vbG9nZ2VyLmpzXCI7XG5pbXBvcnQgeyBXZWJQdWJTdWJKc29uUmVsaWFibGVQcm90b2NvbCB9IGZyb20gXCIuL3Byb3RvY29scy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgV2ViU29ja2V0Q2xpZW50RmFjdG9yeSB9IGZyb20gXCIuL3dlYnNvY2tldC93ZWJzb2NrZXRDbGllbnQuanNcIjtcbmltcG9ydCB7IEFja01hbmFnZXIgfSBmcm9tIFwiLi9hY2tNYW5hZ2VyLmpzXCI7XG5pbXBvcnQgeyBJbnZvY2F0aW9uTWFuYWdlciB9IGZyb20gXCIuL2ludm9jYXRpb25NYW5hZ2VyLmpzXCI7XG52YXIgV2ViUHViU3ViQ2xpZW50U3RhdGUgPSAvKiBAX19QVVJFX18gKi8gKChXZWJQdWJTdWJDbGllbnRTdGF0ZTIpID0+IHtcbiAgV2ViUHViU3ViQ2xpZW50U3RhdGUyW1wiU3RvcHBlZFwiXSA9IFwiU3RvcHBlZFwiO1xuICBXZWJQdWJTdWJDbGllbnRTdGF0ZTJbXCJEaXNjb25uZWN0ZWRcIl0gPSBcIkRpc2Nvbm5lY3RlZFwiO1xuICBXZWJQdWJTdWJDbGllbnRTdGF0ZTJbXCJDb25uZWN0aW5nXCJdID0gXCJDb25uZWN0aW5nXCI7XG4gIFdlYlB1YlN1YkNsaWVudFN0YXRlMltcIkNvbm5lY3RlZFwiXSA9IFwiQ29ubmVjdGVkXCI7XG4gIFdlYlB1YlN1YkNsaWVudFN0YXRlMltcIlJlY292ZXJpbmdcIl0gPSBcIlJlY292ZXJpbmdcIjtcbiAgcmV0dXJuIFdlYlB1YlN1YkNsaWVudFN0YXRlMjtcbn0pKFdlYlB1YlN1YkNsaWVudFN0YXRlIHx8IHt9KTtcbmNsYXNzIFdlYlB1YlN1YkNsaWVudCB7XG4gIF9wcm90b2NvbDtcbiAgX2NyZWRlbnRpYWw7XG4gIF9vcHRpb25zO1xuICBfZ3JvdXBNYXA7XG4gIF9hY2tNYW5hZ2VyO1xuICBfaW52b2NhdGlvbk1hbmFnZXI7XG4gIF9zZXF1ZW5jZUlkO1xuICBfbWVzc2FnZVJldHJ5UG9saWN5O1xuICBfcmVjb25uZWN0UmV0cnlQb2xpY3k7XG4gIF9xdWlja1NlcXVlbmNlQWNrRGlmZiA9IDMwMDtcbiAgLy8gVGhlIHRpbWVvdXQgZm9yIGtlZXAgYWxpdmVcbiAgX2tlZXBBbGl2ZVRpbWVvdXRJbk1zO1xuICAvLyBUaGUgaW50ZXJ2YWwgYXQgd2hpY2ggdG8gc2VuZCBrZWVwLWFsaXZlIHBpbmcgbWVzc2FnZXMgdG8gdGhlIHJ1bnRpbWVcbiAgX2tlZXBBbGl2ZUludGVydmFsSW5NcztcbiAgX2VtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIF9zdGF0ZTtcbiAgX2lzU3RvcHBpbmcgPSBmYWxzZTtcbiAgX3BpbmdLZWVwYWxpdmVUYXNrO1xuICBfdGltZW91dE1vbml0b3JUYXNrO1xuICAvLyBjb25uZWN0aW9uIGxpZmV0aW1lXG4gIF93c0NsaWVudDtcbiAgX3VyaTtcbiAgX2xhc3RDbG9zZUV2ZW50O1xuICBfbGFzdERpc2Nvbm5lY3RlZE1lc3NhZ2U7XG4gIF9jb25uZWN0aW9uSWQ7XG4gIF9yZWNvbm5lY3Rpb25Ub2tlbjtcbiAgX2lzSW5pdGlhbENvbm5lY3RlZCA9IGZhbHNlO1xuICBfc2VxdWVuY2VBY2tUYXNrO1xuICBfbGFzdE1lc3NhZ2VSZWNlaXZlZCA9IERhdGUubm93KCk7XG4gIGNvbnN0cnVjdG9yKGNyZWRlbnRpYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGNyZWRlbnRpYWwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMuX2NyZWRlbnRpYWwgPSB7IGdldENsaWVudEFjY2Vzc1VybDogY3JlZGVudGlhbCB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jcmVkZW50aWFsID0gY3JlZGVudGlhbDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLl9idWlsZERlZmF1bHRPcHRpb25zKG9wdGlvbnMpO1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuX21lc3NhZ2VSZXRyeVBvbGljeSA9IG5ldyBSZXRyeVBvbGljeSh0aGlzLl9vcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMpO1xuICAgIHRoaXMuX3JlY29ubmVjdFJldHJ5UG9saWN5ID0gbmV3IFJldHJ5UG9saWN5KHRoaXMuX29wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zKTtcbiAgICB0aGlzLl9wcm90b2NvbCA9IHRoaXMuX29wdGlvbnMucHJvdG9jb2w7XG4gICAgdGhpcy5fZ3JvdXBNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgIHRoaXMuX2Fja01hbmFnZXIgPSBuZXcgQWNrTWFuYWdlcigpO1xuICAgIHRoaXMuX2ludm9jYXRpb25NYW5hZ2VyID0gbmV3IEludm9jYXRpb25NYW5hZ2VyKCk7XG4gICAgdGhpcy5fc2VxdWVuY2VJZCA9IG5ldyBTZXF1ZW5jZUlkKCk7XG4gICAgdGhpcy5fa2VlcEFsaXZlVGltZW91dEluTXMgPSB0aGlzLl9vcHRpb25zLmtlZXBBbGl2ZVRpbWVvdXRJbk1zID8/IDEyZTQ7XG4gICAgdGhpcy5fa2VlcEFsaXZlSW50ZXJ2YWxJbk1zID0gdGhpcy5fb3B0aW9ucy5rZWVwQWxpdmVJbnRlcnZhbEluTXMgPz8gMmU0O1xuICAgIHRoaXMuX3N0YXRlID0gXCJTdG9wcGVkXCIgLyogU3RvcHBlZCAqLztcbiAgfVxuICAvKipcbiAgICogU3RhcnQgdG8gc3RhcnQgdG8gdGhlIHNlcnZpY2UuXG4gICAqIEBwYXJhbSBhYm9ydFNpZ25hbCAtIFRoZSBhYm9ydCBzaWduYWxcbiAgICovXG4gIGFzeW5jIHN0YXJ0KG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNTdG9wcGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3Qgc3RhcnQgYSBjbGllbnQgZHVyaW5nIHN0b3BwaW5nXCIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdGUgIT09IFwiU3RvcHBlZFwiIC8qIFN0b3BwZWQgKi8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNsaWVudCBjYW4gYmUgb25seSBzdGFydGVkIHdoZW4gaXQncyBTdG9wcGVkXCIpO1xuICAgIH1cbiAgICBsZXQgYWJvcnRTaWduYWw7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGFib3J0U2lnbmFsID0gb3B0aW9ucy5hYm9ydFNpZ25hbDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9waW5nS2VlcGFsaXZlVGFzayAmJiB0aGlzLl9rZWVwQWxpdmVJbnRlcnZhbEluTXMgPiAwKSB7XG4gICAgICB0aGlzLl9waW5nS2VlcGFsaXZlVGFzayA9IHRoaXMuX2dldFBpbmdLZWVwYWxpdmVUYXNrKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fdGltZW91dE1vbml0b3JUYXNrICYmIHRoaXMuX2tlZXBBbGl2ZVRpbWVvdXRJbk1zID4gMCkge1xuICAgICAgdGhpcy5fdGltZW91dE1vbml0b3JUYXNrID0gdGhpcy5fZ2V0VGltZW91dE1vbml0b3JUYXNrKCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLl9zdGFydENvcmUoYWJvcnRTaWduYWwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fY2hhbmdlU3RhdGUoXCJTdG9wcGVkXCIgLyogU3RvcHBlZCAqLyk7XG4gICAgICB0aGlzLl9kaXNwb3NlS2VlcGFsaXZlVGFza3MoKTtcbiAgICAgIHRoaXMuX2lzU3RvcHBpbmcgPSBmYWxzZTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX3N0YXJ0RnJvbVJlc3RhcnRpbmcoYWJvcnRTaWduYWwpIHtcbiAgICBpZiAodGhpcy5fc3RhdGUgIT09IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDbGllbnQgY2FuIGJlIG9ubHkgcmVzdGFydGVkIHdoZW4gaXQncyBEaXNjb25uZWN0ZWRcIik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBsb2dnZXIudmVyYm9zZShcIlN0YXJpbmcgcmVjb25uZWN0aW5nLlwiKTtcbiAgICAgIGF3YWl0IHRoaXMuX3N0YXJ0Q29yZShhYm9ydFNpZ25hbCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9jaGFuZ2VTdGF0ZShcIkRpc2Nvbm5lY3RlZFwiIC8qIERpc2Nvbm5lY3RlZCAqLyk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9zdGFydENvcmUoYWJvcnRTaWduYWwpIHtcbiAgICB0aGlzLl9jaGFuZ2VTdGF0ZShcIkNvbm5lY3RpbmdcIiAvKiBDb25uZWN0aW5nICovKTtcbiAgICBsb2dnZXIuaW5mbyhcIlN0YXJpbmcgYSBuZXcgY29ubmVjdGlvblwiKTtcbiAgICB0aGlzLl9zZXF1ZW5jZUlkLnJlc2V0KCk7XG4gICAgdGhpcy5faXNJbml0aWFsQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fbGFzdENsb3NlRXZlbnQgPSB2b2lkIDA7XG4gICAgdGhpcy5fbGFzdERpc2Nvbm5lY3RlZE1lc3NhZ2UgPSB2b2lkIDA7XG4gICAgdGhpcy5fY29ubmVjdGlvbklkID0gdm9pZCAwO1xuICAgIHRoaXMuX3JlY29ubmVjdGlvblRva2VuID0gdm9pZCAwO1xuICAgIHRoaXMuX3VyaSA9IHZvaWQgMDtcbiAgICBpZiAodHlwZW9mIHRoaXMuX2NyZWRlbnRpYWwuZ2V0Q2xpZW50QWNjZXNzVXJsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aGlzLl91cmkgPSB0aGlzLl9jcmVkZW50aWFsLmdldENsaWVudEFjY2Vzc1VybDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXJpID0gYXdhaXQgdGhpcy5fY3JlZGVudGlhbC5nZXRDbGllbnRBY2Nlc3NVcmwoe1xuICAgICAgICBhYm9ydFNpZ25hbFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5fdXJpICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUaGUgY2xpZW50QWNjZXNzVXJsIG11c3QgYmUgYSBzdHJpbmcgYnV0IGN1cnJlbnRseSBpdCdzICR7dHlwZW9mIHRoaXMuX3VyaX1gXG4gICAgICApO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLl9jb25uZWN0Q29yZSh0aGlzLl91cmkpO1xuICB9XG4gIC8qKlxuICAgKiBTdG9wIHRoZSBjbGllbnQuXG4gICAqL1xuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gXCJTdG9wcGVkXCIgLyogU3RvcHBlZCAqLyB8fCB0aGlzLl9pc1N0b3BwaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2lzU3RvcHBpbmcgPSB0cnVlO1xuICAgIGlmICh0aGlzLl93c0NsaWVudCAmJiB0aGlzLl93c0NsaWVudC5pc09wZW4oKSkge1xuICAgICAgdGhpcy5fd3NDbGllbnQuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXNTdG9wcGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9kaXNwb3NlS2VlcGFsaXZlVGFza3MoKTtcbiAgfVxuICBfZGlzcG9zZUtlZXBhbGl2ZVRhc2tzKCkge1xuICAgIGlmICh0aGlzLl9waW5nS2VlcGFsaXZlVGFzaykge1xuICAgICAgdGhpcy5fcGluZ0tlZXBhbGl2ZVRhc2suYWJvcnQoKTtcbiAgICAgIHRoaXMuX3BpbmdLZWVwYWxpdmVUYXNrID0gdm9pZCAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGltZW91dE1vbml0b3JUYXNrKSB7XG4gICAgICB0aGlzLl90aW1lb3V0TW9uaXRvclRhc2suYWJvcnQoKTtcbiAgICAgIHRoaXMuX3RpbWVvdXRNb25pdG9yVGFzayA9IHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vbihldmVudCwgbGlzdGVuZXIpO1xuICB9XG4gIG9mZihldmVudCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl9lbWl0dGVyLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbiAgX2VtaXRFdmVudChldmVudCwgYXJncykge1xuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChldmVudCwgYXJncyk7XG4gIH1cbiAgLyoqXG4gICAqIFNlbmQgY3VzdG9tIGV2ZW50IHRvIHNlcnZlci5cbiAgICogQHBhcmFtIGV2ZW50TmFtZSAtIFRoZSBldmVudCBuYW1lXG4gICAqIEBwYXJhbSBjb250ZW50IC0gVGhlIGRhdGEgY29udGVudFxuICAgKiBAcGFyYW0gZGF0YVR5cGUgLSBUaGUgZGF0YSB0eXBlXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnNcbiAgICogQHBhcmFtIGFib3J0U2lnbmFsIC0gVGhlIGFib3J0IHNpZ25hbFxuICAgKi9cbiAgYXN5bmMgc2VuZEV2ZW50KGV2ZW50TmFtZSwgY29udGVudCwgZGF0YVR5cGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uRXhlY3V0ZVdpdGhSZXRyeShcbiAgICAgICgpID0+IHRoaXMuX3NlbmRFdmVudEF0dGVtcHQoZXZlbnROYW1lLCBjb250ZW50LCBkYXRhVHlwZSwgb3B0aW9ucyksXG4gICAgICBvcHRpb25zPy5hYm9ydFNpZ25hbFxuICAgICk7XG4gIH1cbiAgYXN5bmMgX3NlbmRFdmVudEF0dGVtcHQoZXZlbnROYW1lLCBjb250ZW50LCBkYXRhVHlwZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGZpcmVBbmRGb3JnZXQgPSBvcHRpb25zPy5maXJlQW5kRm9yZ2V0ID8/IGZhbHNlO1xuICAgIGlmICghZmlyZUFuZEZvcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbmRNZXNzYWdlV2l0aEFja0lkKFxuICAgICAgICAoaWQpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2luZDogXCJzZW5kRXZlbnRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlLFxuICAgICAgICAgICAgZGF0YTogY29udGVudCxcbiAgICAgICAgICAgIGFja0lkOiBpZCxcbiAgICAgICAgICAgIGV2ZW50OiBldmVudE5hbWVcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zPy5hY2tJZCxcbiAgICAgICAgb3B0aW9ucz8uYWJvcnRTaWduYWxcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICBraW5kOiBcInNlbmRFdmVudFwiLFxuICAgICAgZGF0YVR5cGUsXG4gICAgICBkYXRhOiBjb250ZW50LFxuICAgICAgZXZlbnQ6IGV2ZW50TmFtZVxuICAgIH07XG4gICAgYXdhaXQgdGhpcy5fc2VuZE1lc3NhZ2UobWVzc2FnZSwgb3B0aW9ucz8uYWJvcnRTaWduYWwpO1xuICAgIHJldHVybiB7IGlzRHVwbGljYXRlZDogZmFsc2UgfTtcbiAgfVxuICBhc3luYyBfaW52b2tlRXZlbnRBdHRlbXB0KGV2ZW50TmFtZSwgY29udGVudCwgZGF0YVR5cGUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBpbnZva2VPcHRpb25zID0gb3B0aW9ucyA/PyB7fTtcbiAgICBjb25zdCB7IGludm9jYXRpb25JZCwgd2FpdCB9ID0gdGhpcy5faW52b2NhdGlvbk1hbmFnZXIucmVnaXN0ZXJJbnZvY2F0aW9uKFxuICAgICAgaW52b2tlT3B0aW9ucy5pbnZvY2F0aW9uSWRcbiAgICApO1xuICAgIGNvbnN0IGludm9rZU1lc3NhZ2UgPSB7XG4gICAgICBraW5kOiBcImludm9rZVwiLFxuICAgICAgaW52b2NhdGlvbklkLFxuICAgICAgdGFyZ2V0OiBcImV2ZW50XCIsXG4gICAgICBldmVudDogZXZlbnROYW1lLFxuICAgICAgZGF0YVR5cGUsXG4gICAgICBkYXRhOiBjb250ZW50XG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZVByb21pc2UgPSB3YWl0KHtcbiAgICAgIGFib3J0U2lnbmFsOiBpbnZva2VPcHRpb25zLmFib3J0U2lnbmFsXG4gICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX3NlbmRNZXNzYWdlKGludm9rZU1lc3NhZ2UsIGludm9rZU9wdGlvbnMuYWJvcnRTaWduYWwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc3QgaW52b2NhdGlvbkVycm9yID0gZXJyIGluc3RhbmNlb2YgSW52b2NhdGlvbkVycm9yID8gZXJyIDogbmV3IEludm9jYXRpb25FcnJvcihcbiAgICAgICAgZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwiRmFpbGVkIHRvIHNlbmQgaW52b2NhdGlvbiBtZXNzYWdlLlwiLFxuICAgICAgICB7XG4gICAgICAgICAgaW52b2NhdGlvbklkXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB0aGlzLl9pbnZvY2F0aW9uTWFuYWdlci5yZWplY3RJbnZvY2F0aW9uKGludm9jYXRpb25JZCwgaW52b2NhdGlvbkVycm9yKTtcbiAgICAgIHZvaWQgcmVzcG9uc2VQcm9taXNlLmNhdGNoKCgpID0+IHtcbiAgICAgIH0pO1xuICAgICAgdGhyb3cgaW52b2NhdGlvbkVycm9yO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZVByb21pc2U7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwSW52b2tlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc3Qgc2hvdWxkQ2FuY2VsID0gZXJyIGluc3RhbmNlb2YgSW52b2NhdGlvbkVycm9yICYmIGVyci5lcnJvckRldGFpbCA9PSBudWxsIHx8IGludm9rZU9wdGlvbnMuYWJvcnRTaWduYWw/LmFib3J0ZWQgPT09IHRydWU7XG4gICAgICBpZiAoc2hvdWxkQ2FuY2VsKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRDYW5jZWxJbnZvY2F0aW9uKGludm9jYXRpb25JZCkuY2F0Y2goKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5faW52b2NhdGlvbk1hbmFnZXIuZGlzY2FyZChpbnZvY2F0aW9uSWQpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogSW52b2tlIGFuIHVwc3RyZWFtIGV2ZW50IGFuZCB3YWl0IGZvciB0aGUgY29ycmVsYXRlZCByZXNwb25zZS5cbiAgICogQHBhcmFtIGV2ZW50TmFtZSAtIFRoZSBldmVudCBuYW1lXG4gICAqIEBwYXJhbSBjb250ZW50IC0gVGhlIHBheWxvYWRcbiAgICogQHBhcmFtIGRhdGFUeXBlIC0gVGhlIHBheWxvYWQgdHlwZVxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIEludm9rZSBvcHRpb25zXG4gICAqL1xuICBhc3luYyBpbnZva2VFdmVudChldmVudE5hbWUsIGNvbnRlbnQsIGRhdGFUeXBlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZXJhdGlvbkV4ZWN1dGVXaXRoUmV0cnkoXG4gICAgICAoKSA9PiB0aGlzLl9pbnZva2VFdmVudEF0dGVtcHQoZXZlbnROYW1lLCBjb250ZW50LCBkYXRhVHlwZSwgb3B0aW9ucyksXG4gICAgICBvcHRpb25zPy5hYm9ydFNpZ25hbFxuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIEpvaW4gdGhlIGNsaWVudCB0byBncm91cFxuICAgKiBAcGFyYW0gZ3JvdXBOYW1lIC0gVGhlIGdyb3VwIG5hbWVcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgam9pbiBncm91cCBvcHRpb25zXG4gICAqL1xuICBhc3luYyBqb2luR3JvdXAoZ3JvdXBOYW1lLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZXJhdGlvbkV4ZWN1dGVXaXRoUmV0cnkoXG4gICAgICAoKSA9PiB0aGlzLl9qb2luR3JvdXBBdHRlbXB0KGdyb3VwTmFtZSwgb3B0aW9ucyksXG4gICAgICBvcHRpb25zPy5hYm9ydFNpZ25hbFxuICAgICk7XG4gIH1cbiAgYXN5bmMgX2pvaW5Hcm91cEF0dGVtcHQoZ3JvdXBOYW1lLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLl9nZXRPckFkZEdyb3VwKGdyb3VwTmFtZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fam9pbkdyb3VwQ29yZShncm91cE5hbWUsIG9wdGlvbnMpO1xuICAgIGdyb3VwLmlzSm9pbmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGFzeW5jIF9qb2luR3JvdXBDb3JlKGdyb3VwTmFtZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9zZW5kTWVzc2FnZVdpdGhBY2tJZChcbiAgICAgIChpZCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGdyb3VwOiBncm91cE5hbWUsXG4gICAgICAgICAgYWNrSWQ6IGlkLFxuICAgICAgICAgIGtpbmQ6IFwiam9pbkdyb3VwXCJcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBvcHRpb25zPy5hY2tJZCxcbiAgICAgIG9wdGlvbnM/LmFib3J0U2lnbmFsXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogTGVhdmUgdGhlIGNsaWVudCBmcm9tIGdyb3VwXG4gICAqIEBwYXJhbSBncm91cE5hbWUgLSBUaGUgZ3JvdXAgbmFtZVxuICAgKiBAcGFyYW0gYWNrSWQgLSBUaGUgb3B0aW9uYWwgYWNrSWQuIElmIG5vdCBzcGVjaWZpZWQsIGNsaWVudCB3aWxsIGdlbmVyYXRlIG9uZS5cbiAgICogQHBhcmFtIGFib3J0U2lnbmFsIC0gVGhlIGFib3J0IHNpZ25hbFxuICAgKi9cbiAgYXN5bmMgbGVhdmVHcm91cChncm91cE5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uRXhlY3V0ZVdpdGhSZXRyeShcbiAgICAgICgpID0+IHRoaXMuX2xlYXZlR3JvdXBBdHRlbXB0KGdyb3VwTmFtZSwgb3B0aW9ucyksXG4gICAgICBvcHRpb25zPy5hYm9ydFNpZ25hbFxuICAgICk7XG4gIH1cbiAgYXN5bmMgX2xlYXZlR3JvdXBBdHRlbXB0KGdyb3VwTmFtZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGdyb3VwID0gdGhpcy5fZ2V0T3JBZGRHcm91cChncm91cE5hbWUpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3NlbmRNZXNzYWdlV2l0aEFja0lkKFxuICAgICAgKGlkKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZ3JvdXA6IGdyb3VwTmFtZSxcbiAgICAgICAgICBhY2tJZDogaWQsXG4gICAgICAgICAga2luZDogXCJsZWF2ZUdyb3VwXCJcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBvcHRpb25zPy5hY2tJZCxcbiAgICAgIG9wdGlvbnM/LmFib3J0U2lnbmFsXG4gICAgKTtcbiAgICBncm91cC5pc0pvaW5lZCA9IGZhbHNlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgLyoqXG4gICAqIFNlbmQgbWVzc2FnZSB0byBncm91cC5cbiAgICogQHBhcmFtIGdyb3VwTmFtZSAtIFRoZSBncm91cCBuYW1lXG4gICAqIEBwYXJhbSBjb250ZW50IC0gVGhlIGRhdGEgY29udGVudFxuICAgKiBAcGFyYW0gZGF0YVR5cGUgLSBUaGUgZGF0YSB0eXBlXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnNcbiAgICogQHBhcmFtIGFib3J0U2lnbmFsIC0gVGhlIGFib3J0IHNpZ25hbFxuICAgKi9cbiAgYXN5bmMgc2VuZFRvR3JvdXAoZ3JvdXBOYW1lLCBjb250ZW50LCBkYXRhVHlwZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9vcGVyYXRpb25FeGVjdXRlV2l0aFJldHJ5KFxuICAgICAgKCkgPT4gdGhpcy5fc2VuZFRvR3JvdXBBdHRlbXB0KGdyb3VwTmFtZSwgY29udGVudCwgZGF0YVR5cGUsIG9wdGlvbnMpLFxuICAgICAgb3B0aW9ucz8uYWJvcnRTaWduYWxcbiAgICApO1xuICB9XG4gIGFzeW5jIF9zZW5kVG9Hcm91cEF0dGVtcHQoZ3JvdXBOYW1lLCBjb250ZW50LCBkYXRhVHlwZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGZpcmVBbmRGb3JnZXQgPSBvcHRpb25zPy5maXJlQW5kRm9yZ2V0ID8/IGZhbHNlO1xuICAgIGNvbnN0IG5vRWNobyA9IG9wdGlvbnM/Lm5vRWNobyA/PyBmYWxzZTtcbiAgICBpZiAoIWZpcmVBbmRGb3JnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZW5kTWVzc2FnZVdpdGhBY2tJZChcbiAgICAgICAgKGlkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtpbmQ6IFwic2VuZFRvR3JvdXBcIixcbiAgICAgICAgICAgIGdyb3VwOiBncm91cE5hbWUsXG4gICAgICAgICAgICBkYXRhVHlwZSxcbiAgICAgICAgICAgIGRhdGE6IGNvbnRlbnQsXG4gICAgICAgICAgICBhY2tJZDogaWQsXG4gICAgICAgICAgICBub0VjaG9cbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zPy5hY2tJZCxcbiAgICAgICAgb3B0aW9ucz8uYWJvcnRTaWduYWxcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICBraW5kOiBcInNlbmRUb0dyb3VwXCIsXG4gICAgICBncm91cDogZ3JvdXBOYW1lLFxuICAgICAgZGF0YVR5cGUsXG4gICAgICBkYXRhOiBjb250ZW50LFxuICAgICAgbm9FY2hvXG4gICAgfTtcbiAgICBhd2FpdCB0aGlzLl9zZW5kTWVzc2FnZShtZXNzYWdlLCBvcHRpb25zPy5hYm9ydFNpZ25hbCk7XG4gICAgcmV0dXJuIHsgaXNEdXBsaWNhdGVkOiBmYWxzZSB9O1xuICB9XG4gIF9nZXRXZWJTb2NrZXRDbGllbnRGYWN0b3J5KCkge1xuICAgIHJldHVybiBuZXcgV2ViU29ja2V0Q2xpZW50RmFjdG9yeSgpO1xuICB9XG4gIGFzeW5jIF90cnlTZW5kU2VxdWVuY2VBY2soKSB7XG4gICAgaWYgKCF0aGlzLl9wcm90b2NvbC5pc1JlbGlhYmxlU3ViUHJvdG9jb2wpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgW2lzVXBkYXRlZCwgc2VxSWRdID0gdGhpcy5fc2VxdWVuY2VJZC50cnlHZXRTZXF1ZW5jZUlkKCk7XG4gICAgaWYgKGlzVXBkYXRlZCAmJiBzZXFJZCAhPT0gbnVsbCAmJiBzZXFJZCAhPT0gdm9pZCAwKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgICBraW5kOiBcInNlcXVlbmNlQWNrXCIsXG4gICAgICAgIHNlcXVlbmNlSWQ6IHNlcUlkXG4gICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5fc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgdGhpcy5fc2VxdWVuY2VJZC50cnlVcGRhdGUoc2VxSWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBfY29ubmVjdENvcmUodXJpKSB7XG4gICAgaWYgKHRoaXMuX2lzU3RvcHBpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHN0YXJ0IGEgY2xpZW50IGR1cmluZyBzdG9wcGluZ1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuX3dzQ2xpZW50ID0gdGhpcy5fZ2V0V2ViU29ja2V0Q2xpZW50RmFjdG9yeSgpLmNyZWF0ZShcbiAgICAgICAgdXJpLFxuICAgICAgICB0aGlzLl9wcm90b2NvbC5uYW1lXG4gICAgICApO1xuICAgICAgY2xpZW50Lm9ub3BlbigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc1N0b3BwaW5nKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBUaGUgY2xpZW50IGlzIHN0b3BwZWRgKSk7XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VyLnZlcmJvc2UoXCJXZWJTb2NrZXQgY29ubmVjdGlvbiBoYXMgb3BlbmVkXCIpO1xuICAgICAgICB0aGlzLl9sYXN0TWVzc2FnZVJlY2VpdmVkID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlU3RhdGUoXCJDb25uZWN0ZWRcIiAvKiBDb25uZWN0ZWQgKi8pO1xuICAgICAgICBpZiAodGhpcy5fcHJvdG9jb2wuaXNSZWxpYWJsZVN1YlByb3RvY29sKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3NlcXVlbmNlQWNrVGFzayAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXF1ZW5jZUFja1Rhc2suYWJvcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fc2VxdWVuY2VBY2tUYXNrID0gbmV3IEFib3J0YWJsZVRhc2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fdHJ5U2VuZFNlcXVlbmNlQWNrKCk7XG4gICAgICAgICAgfSwgMWUzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICAgIGNsaWVudC5vbmVycm9yKChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9zZXF1ZW5jZUFja1Rhc2sgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuX3NlcXVlbmNlQWNrVGFzay5hYm9ydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH0pO1xuICAgICAgY2xpZW50Lm9uY2xvc2UoKGNvZGUsIHJlYXNvbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFwiQ29ubmVjdGVkXCIgLyogQ29ubmVjdGVkICovKSB7XG4gICAgICAgICAgbG9nZ2VyLnZlcmJvc2UoXCJXZWJTb2NrZXQgY2xvc2VkIGFmdGVyIG9wZW5cIik7XG4gICAgICAgICAgaWYgKHRoaXMuX3NlcXVlbmNlQWNrVGFzayAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXF1ZW5jZUFja1Rhc2suYWJvcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbG9nZ2VyLmluZm8oYFdlYlNvY2tldCBjb25uZWN0aW9uIGNsb3NlZC4gQ29kZTogJHtjb2RlfSwgUmVhc29uOiAke3JlYXNvbn1gKTtcbiAgICAgICAgICB0aGlzLl9sYXN0Q2xvc2VFdmVudCA9IHsgY29kZSwgcmVhc29uIH07XG4gICAgICAgICAgdGhpcy5faGFuZGxlQ29ubmVjdGlvbkNsb3NlLmNhbGwodGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9nZ2VyLnZlcmJvc2UoXCJXZWJTb2NrZXQgY2xvc2VkIGJlZm9yZSBvcGVuXCIpO1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYEZhaWxlZCB0byBzdGFydCBXZWJTb2NrZXQ6ICR7Y29kZX1gKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY2xpZW50Lm9ubWVzc2FnZSgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVBY2tNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBjb25zdCBpc0R1cGxpY2F0ZWQgPSBtZXNzYWdlLmVycm9yICE9IG51bGwgJiYgbWVzc2FnZS5lcnJvci5uYW1lID09PSBcIkR1cGxpY2F0ZVwiO1xuICAgICAgICAgIGlmIChtZXNzYWdlLnN1Y2Nlc3MgfHwgaXNEdXBsaWNhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9hY2tNYW5hZ2VyLnJlc29sdmVBY2sobWVzc2FnZS5hY2tJZCwge1xuICAgICAgICAgICAgICBhY2tJZDogbWVzc2FnZS5hY2tJZCxcbiAgICAgICAgICAgICAgaXNEdXBsaWNhdGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYWNrTWFuYWdlci5yZWplY3RBY2soXG4gICAgICAgICAgICAgIG1lc3NhZ2UuYWNrSWQsXG4gICAgICAgICAgICAgIG5ldyBTZW5kTWVzc2FnZUVycm9yKFwiRmFpbGVkIHRvIHNlbmQgbWVzc2FnZS5cIiwge1xuICAgICAgICAgICAgICAgIGFja0lkOiBtZXNzYWdlLmFja0lkLFxuICAgICAgICAgICAgICAgIGVycm9yRGV0YWlsOiBtZXNzYWdlLmVycm9yXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlQ29ubmVjdGVkTWVzc2FnZSA9IGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgdGhpcy5fY29ubmVjdGlvbklkID0gbWVzc2FnZS5jb25uZWN0aW9uSWQ7XG4gICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uVG9rZW4gPSBtZXNzYWdlLnJlY29ubmVjdGlvblRva2VuO1xuICAgICAgICAgIGlmICghdGhpcy5faXNJbml0aWFsQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0luaXRpYWxDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYXV0b1Jlam9pbkdyb3Vwcykge1xuICAgICAgICAgICAgICBjb25zdCBncm91cFByb21pc2VzID0gW107XG4gICAgICAgICAgICAgIHRoaXMuX2dyb3VwTWFwLmZvckVhY2goKGcpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZy5pc0pvaW5lZCkge1xuICAgICAgICAgICAgICAgICAgZ3JvdXBQcm9taXNlcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9qb2luR3JvdXBDb3JlKGcubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYWZlRW1pdFJlam9pbkdyb3VwRmFpbGVkKGcubmFtZSwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKClcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoZ3JvdXBQcm9taXNlcykuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3NhZmVFbWl0Q29ubmVjdGVkKG1lc3NhZ2UuY29ubmVjdGlvbklkLCBtZXNzYWdlLnVzZXJJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVEaXNjb25uZWN0ZWRNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICB0aGlzLl9sYXN0RGlzY29ubmVjdGVkTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZUdyb3VwRGF0YU1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgIGlmIChtZXNzYWdlLnNlcXVlbmNlSWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMuX3NlcXVlbmNlSWQudHJ5VXBkYXRlKG1lc3NhZ2Uuc2VxdWVuY2VJZCk7XG4gICAgICAgICAgICBpZiAoZGlmZiA9PT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlmZiA+IHRoaXMuX3F1aWNrU2VxdWVuY2VBY2tEaWZmKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3RyeVNlbmRTZXF1ZW5jZUFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9zYWZlRW1pdEdyb3VwTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlU2VydmVyRGF0YU1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgIGlmIChtZXNzYWdlLnNlcXVlbmNlSWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMuX3NlcXVlbmNlSWQudHJ5VXBkYXRlKG1lc3NhZ2Uuc2VxdWVuY2VJZCk7XG4gICAgICAgICAgICBpZiAoZGlmZiA9PT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlmZiA+IHRoaXMuX3F1aWNrU2VxdWVuY2VBY2tEaWZmKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3RyeVNlbmRTZXF1ZW5jZUFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9zYWZlRW1pdFNlcnZlck1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZUludm9rZVJlc3BvbnNlTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSB0aGlzLl9pbnZvY2F0aW9uTWFuYWdlci5yZXNvbHZlSW52b2NhdGlvbihtZXNzYWdlKTtcbiAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICBsb2dnZXIudmVyYm9zZShcbiAgICAgICAgICAgICAgYFJlY2VpdmVkIGludm9rZVJlc3BvbnNlIGZvciB1bmtub3duIGludm9jYXRpb25JZDogJHttZXNzYWdlLmludm9jYXRpb25JZH1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fbGFzdE1lc3NhZ2VSZWNlaXZlZCA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBtZXNzYWdlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgY29udmVydGVkRGF0YTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgY29udmVydGVkRGF0YSA9IEJ1ZmZlci5jb25jYXQoZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZERhdGEgPSBkYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtZXNzYWdlcyA9IHRoaXMuX3Byb3RvY29sLnBhcnNlTWVzc2FnZXMoY29udmVydGVkRGF0YSk7XG4gICAgICAgICAgaWYgKG1lc3NhZ2VzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2dnZXIud2FybmluZyhcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHBhcnNpbmcgdGhlIG1lc3NhZ2UgZnJvbSBzZXJ2aWNlXCIsIGVycik7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtZXNzYWdlcykpIHtcbiAgICAgICAgICBtZXNzYWdlcyA9IFttZXNzYWdlc107XG4gICAgICAgIH1cbiAgICAgICAgbWVzc2FnZXMuZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2Uua2luZCkge1xuICAgICAgICAgICAgICBjYXNlIFwicG9uZ1wiOiB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSBcImFja1wiOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQWNrTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXNlIFwiY29ubmVjdGVkXCI6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVDb25uZWN0ZWRNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhc2UgXCJkaXNjb25uZWN0ZWRcIjoge1xuICAgICAgICAgICAgICAgIGhhbmRsZURpc2Nvbm5lY3RlZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSBcImdyb3VwRGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlR3JvdXBEYXRhTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXNlIFwic2VydmVyRGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlU2VydmVyRGF0YU1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSBcImludm9rZVJlc3BvbnNlXCI6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVJbnZva2VSZXNwb25zZU1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuaW5nKFxuICAgICAgICAgICAgICBgQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgaGFuZGxpbmcgdGhlIG1lc3NhZ2Ugd2l0aCBraW5kOiAke21lc3NhZ2Uua2luZH0gZnJvbSBzZXJ2aWNlYCxcbiAgICAgICAgICAgICAgZXJyXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhc3luYyBfaGFuZGxlQ29ubmVjdGlvbkNsb3NlQW5kTm9SZWNvdmVyeSgpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovO1xuICAgIHRoaXMuX3NhZmVFbWl0RGlzY29ubmVjdGVkKHRoaXMuX2Nvbm5lY3Rpb25JZCwgdGhpcy5fbGFzdERpc2Nvbm5lY3RlZE1lc3NhZ2UpO1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmF1dG9SZWNvbm5lY3QpIHtcbiAgICAgIGF3YWl0IHRoaXMuX2F1dG9SZWNvbm5lY3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy5faGFuZGxlQ29ubmVjdGlvblN0b3BwZWQoKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX2F1dG9SZWNvbm5lY3QoKSB7XG4gICAgbGV0IGlzU3VjY2VzcyA9IGZhbHNlO1xuICAgIGxldCBhdHRlbXB0ID0gMDtcbiAgICB0cnkge1xuICAgICAgd2hpbGUgKCF0aGlzLl9pc1N0b3BwaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fc3RhcnRGcm9tUmVzdGFydGluZygpO1xuICAgICAgICAgIGlzU3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZ2dlci53YXJuaW5nKFwiQW4gYXR0ZW1wdCB0byByZWNvbm5lY3QgY29ubmVjdGlvbiBmYWlsZWQuXCIsIGVycik7XG4gICAgICAgICAgYXR0ZW1wdCsrO1xuICAgICAgICAgIGNvbnN0IGRlbGF5SW5NcyA9IHRoaXMuX3JlY29ubmVjdFJldHJ5UG9saWN5Lm5leHRSZXRyeURlbGF5SW5NcyhhdHRlbXB0KTtcbiAgICAgICAgICBpZiAoZGVsYXlJbk1zID09IG51bGwpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2dnZXIudmVyYm9zZShgRGVsYXkgdGltZSBmb3IgcmVjb25uZWN0IGF0dGVtcHQgJHthdHRlbXB0fTogJHtkZWxheUluTXN9YCk7XG4gICAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlJbk1zKS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKCFpc1N1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlQ29ubmVjdGlvblN0b3BwZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX2hhbmRsZUNvbm5lY3Rpb25TdG9wcGVkKCkge1xuICAgIHRoaXMuX2lzU3RvcHBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9zdGF0ZSA9IFwiU3RvcHBlZFwiIC8qIFN0b3BwZWQgKi87XG4gICAgdGhpcy5fZGlzcG9zZUtlZXBhbGl2ZVRhc2tzKCk7XG4gICAgdGhpcy5fc2FmZUVtaXRTdG9wcGVkKCk7XG4gIH1cbiAgYXN5bmMgX3RyeVNlbmRQaW5nKCkge1xuICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gXCJDb25uZWN0ZWRcIiAvKiBDb25uZWN0ZWQgKi8gfHwgIXRoaXMuX3dzQ2xpZW50Py5pc09wZW4oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAga2luZDogXCJwaW5nXCJcbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLl9zZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGxvZ2dlci53YXJuaW5nKFwiRmFpbGVkIHRvIHNlbmQga2VlcGFsaXZlIG1lc3NhZ2UgdG8gdGhlIHNlcnZpY2VcIik7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9jaGVja0tlZXBBbGl2ZVRpbWVvdXQoKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlICE9PSBcIkNvbm5lY3RlZFwiIC8qIENvbm5lY3RlZCAqLyB8fCAhdGhpcy5fd3NDbGllbnQ/LmlzT3BlbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgaWYgKG5vdyAtIHRoaXMuX2xhc3RNZXNzYWdlUmVjZWl2ZWQgPiB0aGlzLl9rZWVwQWxpdmVUaW1lb3V0SW5Ncykge1xuICAgICAgbG9nZ2VyLndhcm5pbmcoXG4gICAgICAgIGBObyBtZXNzYWdlcyByZWNlaXZlZCBmb3IgJHtub3cgLSB0aGlzLl9sYXN0TWVzc2FnZVJlY2VpdmVkfSBtcy4gQ2xvc2luZy4gVGhlIGtlZXAgYWxpdmUgdGltZW91dCBpcyBzZXQgdG8gJHt0aGlzLl9rZWVwQWxpdmVUaW1lb3V0SW5Nc30gbXMuYFxuICAgICAgKTtcbiAgICAgIHRoaXMuX3dzQ2xpZW50Py5jbG9zZSgpO1xuICAgIH1cbiAgfVxuICBfZ2V0UGluZ0tlZXBhbGl2ZVRhc2soKSB7XG4gICAgcmV0dXJuIG5ldyBBYm9ydGFibGVUYXNrKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHRoaXMuX3RyeVNlbmRQaW5nKCk7XG4gICAgfSwgdGhpcy5fa2VlcEFsaXZlSW50ZXJ2YWxJbk1zKTtcbiAgfVxuICBfZ2V0VGltZW91dE1vbml0b3JUYXNrKCkge1xuICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLl9rZWVwQWxpdmVUaW1lb3V0SW5NcztcbiAgICBjb25zdCBjaGVja0ludGVydmFsID0gTWF0aC5mbG9vcih0aW1lb3V0IC8gMyk7XG4gICAgcmV0dXJuIG5ldyBBYm9ydGFibGVUYXNrKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHRoaXMuX2NoZWNrS2VlcEFsaXZlVGltZW91dCgpO1xuICAgIH0sIGNoZWNrSW50ZXJ2YWwpO1xuICB9XG4gIGFzeW5jIF9zZW5kTWVzc2FnZShtZXNzYWdlLCBhYm9ydFNpZ25hbCkge1xuICAgIGlmICghdGhpcy5fd3NDbGllbnQgfHwgIXRoaXMuX3dzQ2xpZW50LmlzT3BlbigpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY29ubmVjdGlvbiBpcyBub3QgY29ubmVjdGVkLlwiKTtcbiAgICB9XG4gICAgY29uc3QgcGF5bG9hZCA9IHRoaXMuX3Byb3RvY29sLndyaXRlTWVzc2FnZShtZXNzYWdlKTtcbiAgICBhd2FpdCB0aGlzLl93c0NsaWVudC5zZW5kKHBheWxvYWQsIGFib3J0U2lnbmFsKTtcbiAgfVxuICBhc3luYyBfc2VuZE1lc3NhZ2VXaXRoQWNrSWQobWVzc2FnZVByb3ZpZGVyLCBhY2tJZCwgYWJvcnRTaWduYWwpIHtcbiAgICBjb25zdCB7IGFja0lkOiByZXNvbHZlZEFja0lkLCB3YWl0IH0gPSB0aGlzLl9hY2tNYW5hZ2VyLnJlZ2lzdGVyQWNrKGFja0lkKTtcbiAgICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZVByb3ZpZGVyKHJlc29sdmVkQWNrSWQpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLl9zZW5kTWVzc2FnZShtZXNzYWdlLCBhYm9ydFNpZ25hbCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuX2Fja01hbmFnZXIuZGlzY2FyZChyZXNvbHZlZEFja0lkKTtcbiAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBcIlwiO1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBTZW5kTWVzc2FnZUVycm9yKGVycm9yTWVzc2FnZSwgeyBhY2tJZDogcmVzb2x2ZWRBY2tJZCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHdhaXQoYWJvcnRTaWduYWwpO1xuICB9XG4gIGFzeW5jIF9oYW5kbGVDb25uZWN0aW9uQ2xvc2UoKSB7XG4gICAgdGhpcy5fYWNrTWFuYWdlci5yZWplY3RBbGwoKGFja0lkKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFNlbmRNZXNzYWdlRXJyb3IoXG4gICAgICAgIFwiQ29ubmVjdGlvbiBpcyBkaXNjb25uZWN0ZWQgYmVmb3JlIHJlY2VpdmUgYWNrIGZyb20gdGhlIHNlcnZpY2VcIixcbiAgICAgICAge1xuICAgICAgICAgIGFja0lkXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gICAgdGhpcy5faW52b2NhdGlvbk1hbmFnZXIucmVqZWN0QWxsKChpbnZvY2F0aW9uSWQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgSW52b2NhdGlvbkVycm9yKFxuICAgICAgICBcIkNvbm5lY3Rpb24gaXMgZGlzY29ubmVjdGVkIGJlZm9yZSByZWNlaXZpbmcgaW52b2tlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZpY2VcIixcbiAgICAgICAge1xuICAgICAgICAgIGludm9jYXRpb25JZFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLl9pc1N0b3BwaW5nKSB7XG4gICAgICBsb2dnZXIud2FybmluZyhcIlRoZSBjbGllbnQgaXMgc3RvcHBpbmcgc3RhdGUuIFN0b3AgcmVjb3ZlcnkuXCIpO1xuICAgICAgdGhpcy5faGFuZGxlQ29ubmVjdGlvbkNsb3NlQW5kTm9SZWNvdmVyeSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGFzdENsb3NlRXZlbnQgJiYgdGhpcy5fbGFzdENsb3NlRXZlbnQuY29kZSA9PT0gMTAwOCkge1xuICAgICAgbG9nZ2VyLndhcm5pbmcoXCJUaGUgd2Vic29ja2V0IGNsb3NlIHdpdGggc3RhdHVzIGNvZGUgMTAwOC4gU3RvcCByZWNvdmVyeS5cIik7XG4gICAgICB0aGlzLl9oYW5kbGVDb25uZWN0aW9uQ2xvc2VBbmROb1JlY292ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fcHJvdG9jb2wuaXNSZWxpYWJsZVN1YlByb3RvY29sKSB7XG4gICAgICBsb2dnZXIud2FybmluZyhcIlRoZSBwcm90b2NvbCBpcyBub3QgcmVsaWFibGUsIHJlY292ZXJ5IGlzIG5vdCBhcHBsaWNhYmxlXCIpO1xuICAgICAgdGhpcy5faGFuZGxlQ29ubmVjdGlvbkNsb3NlQW5kTm9SZWNvdmVyeSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWNvdmVyeVVyaSA9IHRoaXMuX2J1aWxkUmVjb3ZlcnlVcmkoKTtcbiAgICBpZiAoIXJlY292ZXJ5VXJpKSB7XG4gICAgICBsb2dnZXIud2FybmluZyhcIkNvbm5lY3Rpb24gaWQgb3IgcmVjb25uZWN0aW9uIHRva2VuIGlzIG5vdCBhdmFpbGFibGVcIik7XG4gICAgICB0aGlzLl9oYW5kbGVDb25uZWN0aW9uQ2xvc2VBbmROb1JlY292ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCByZWNvdmVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9zdGF0ZSA9IFwiUmVjb3ZlcmluZ1wiIC8qIFJlY292ZXJpbmcgKi87XG4gICAgY29uc3QgYWJvcnRTaWduYWwgPSBBYm9ydFNpZ25hbC50aW1lb3V0KDMwICogMWUzKTtcbiAgICB0cnkge1xuICAgICAgd2hpbGUgKCFhYm9ydFNpZ25hbC5hYm9ydGVkIHx8IHRoaXMuX2lzU3RvcHBpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9jb25uZWN0Q29yZS5jYWxsKHRoaXMsIHJlY292ZXJ5VXJpKTtcbiAgICAgICAgICByZWNvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgYXdhaXQgZGVsYXkoMWUzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoIXJlY292ZXJlZCkge1xuICAgICAgICBsb2dnZXIud2FybmluZyhcIlJlY292ZXJ5IGF0dGVtcHRzIGZhaWxlZCBtb3JlIHRoZW4gMzAgc2Vjb25kcyBvciB0aGUgY2xpZW50IGlzIHN0b3BwaW5nXCIpO1xuICAgICAgICB0aGlzLl9oYW5kbGVDb25uZWN0aW9uQ2xvc2VBbmROb1JlY292ZXJ5KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIF9zYWZlRW1pdENvbm5lY3RlZChjb25uZWN0aW9uSWQsIHVzZXJJZCkge1xuICAgIHRoaXMuX2VtaXRFdmVudChcImNvbm5lY3RlZFwiLCB7XG4gICAgICBjb25uZWN0aW9uSWQsXG4gICAgICB1c2VySWRcbiAgICB9KTtcbiAgfVxuICBfc2FmZUVtaXREaXNjb25uZWN0ZWQoY29ubmVjdGlvbklkLCBsYXN0RGlzY29ubmVjdGVkTWVzc2FnZSkge1xuICAgIHRoaXMuX2VtaXRFdmVudChcImRpc2Nvbm5lY3RlZFwiLCB7XG4gICAgICBjb25uZWN0aW9uSWQsXG4gICAgICBtZXNzYWdlOiBsYXN0RGlzY29ubmVjdGVkTWVzc2FnZVxuICAgIH0pO1xuICB9XG4gIF9zYWZlRW1pdEdyb3VwTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgdGhpcy5fZW1pdEV2ZW50KFwiZ3JvdXAtbWVzc2FnZVwiLCB7XG4gICAgICBtZXNzYWdlXG4gICAgfSk7XG4gIH1cbiAgX3NhZmVFbWl0U2VydmVyTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgdGhpcy5fZW1pdEV2ZW50KFwic2VydmVyLW1lc3NhZ2VcIiwge1xuICAgICAgbWVzc2FnZVxuICAgIH0pO1xuICB9XG4gIF9zYWZlRW1pdFN0b3BwZWQoKSB7XG4gICAgdGhpcy5fZW1pdEV2ZW50KFwic3RvcHBlZFwiLCB7fSk7XG4gIH1cbiAgX3NhZmVFbWl0UmVqb2luR3JvdXBGYWlsZWQoZ3JvdXBOYW1lLCBlcnIpIHtcbiAgICB0aGlzLl9lbWl0RXZlbnQoXCJyZWpvaW4tZ3JvdXAtZmFpbGVkXCIsIHtcbiAgICAgIGdyb3VwOiBncm91cE5hbWUsXG4gICAgICBlcnJvcjogZXJyXG4gICAgfSk7XG4gIH1cbiAgX21hcEludm9rZVJlc3BvbnNlKG1lc3NhZ2UpIHtcbiAgICBpZiAobWVzc2FnZS5zdWNjZXNzICE9PSB0cnVlKSB7XG4gICAgICBpZiAobWVzc2FnZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICB0aHJvdyBuZXcgSW52b2NhdGlvbkVycm9yKG1lc3NhZ2UuZXJyb3I/Lm1lc3NhZ2UgPz8gXCJJbnZvY2F0aW9uIGZhaWxlZC5cIiwge1xuICAgICAgICAgIGludm9jYXRpb25JZDogbWVzc2FnZS5pbnZvY2F0aW9uSWQsXG4gICAgICAgICAgZXJyb3JEZXRhaWw6IG1lc3NhZ2UuZXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgSW52b2NhdGlvbkVycm9yKFwiVW5zdXBwb3J0ZWQgaW52b2tlIHJlc3BvbnNlIGZyYW1lLlwiLCB7XG4gICAgICAgIGludm9jYXRpb25JZDogbWVzc2FnZS5pbnZvY2F0aW9uSWRcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaW52b2NhdGlvbklkOiBtZXNzYWdlLmludm9jYXRpb25JZCxcbiAgICAgIGRhdGFUeXBlOiBtZXNzYWdlLmRhdGFUeXBlLFxuICAgICAgZGF0YTogbWVzc2FnZS5kYXRhXG4gICAgfTtcbiAgfVxuICBhc3luYyBfc2VuZENhbmNlbEludm9jYXRpb24oaW52b2NhdGlvbklkKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIGtpbmQ6IFwiY2FuY2VsSW52b2NhdGlvblwiLFxuICAgICAgaW52b2NhdGlvbklkXG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5fc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBsb2dnZXIudmVyYm9zZShgRmFpbGVkIHRvIHNlbmQgY2FuY2VsSW52b2NhdGlvbiBmb3IgJHtpbnZvY2F0aW9uSWR9YCwgZXJyKTtcbiAgICB9XG4gIH1cbiAgX2J1aWxkRGVmYXVsdE9wdGlvbnMoY2xpZW50T3B0aW9ucykge1xuICAgIGlmIChjbGllbnRPcHRpb25zLmF1dG9SZWNvbm5lY3QgPT0gbnVsbCkge1xuICAgICAgY2xpZW50T3B0aW9ucy5hdXRvUmVjb25uZWN0ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMuYXV0b1Jlam9pbkdyb3VwcyA9PSBudWxsKSB7XG4gICAgICBjbGllbnRPcHRpb25zLmF1dG9SZWpvaW5Hcm91cHMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5wcm90b2NvbCA9PSBudWxsKSB7XG4gICAgICBjbGllbnRPcHRpb25zLnByb3RvY29sID0gV2ViUHViU3ViSnNvblJlbGlhYmxlUHJvdG9jb2woKTtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMua2VlcEFsaXZlVGltZW91dEluTXMgPT0gbnVsbCkge1xuICAgICAgY2xpZW50T3B0aW9ucy5rZWVwQWxpdmVUaW1lb3V0SW5NcyA9IDEyZTQ7XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLmtlZXBBbGl2ZVRpbWVvdXRJbk1zIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJrZWVwQWxpdmVUaW1lb3V0SW5NcyBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAwLlwiKTtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMua2VlcEFsaXZlSW50ZXJ2YWxJbk1zID09IG51bGwpIHtcbiAgICAgIGNsaWVudE9wdGlvbnMua2VlcEFsaXZlSW50ZXJ2YWxJbk1zID0gMmU0O1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5rZWVwQWxpdmVJbnRlcnZhbEluTXMgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcImtlZXBBbGl2ZUludGVydmFsSW5NcyBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAwLlwiKTtcbiAgICB9XG4gICAgdGhpcy5fYnVpbGRNZXNzYWdlUmV0cnlPcHRpb25zKGNsaWVudE9wdGlvbnMpO1xuICAgIHRoaXMuX2J1aWxkUmVjb25uZWN0UmV0cnlPcHRpb25zKGNsaWVudE9wdGlvbnMpO1xuICAgIHJldHVybiBjbGllbnRPcHRpb25zO1xuICB9XG4gIF9idWlsZE1lc3NhZ2VSZXRyeU9wdGlvbnMoY2xpZW50T3B0aW9ucykge1xuICAgIGlmICghY2xpZW50T3B0aW9ucy5tZXNzYWdlUmV0cnlPcHRpb25zKSB7XG4gICAgICBjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMubWVzc2FnZVJldHJ5T3B0aW9ucy5tYXhSZXRyaWVzID09IG51bGwgfHwgY2xpZW50T3B0aW9ucy5tZXNzYWdlUmV0cnlPcHRpb25zLm1heFJldHJpZXMgPCAwKSB7XG4gICAgICBjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMubWF4UmV0cmllcyA9IDM7XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMucmV0cnlEZWxheUluTXMgPT0gbnVsbCB8fCBjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMucmV0cnlEZWxheUluTXMgPCAwKSB7XG4gICAgICBjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMucmV0cnlEZWxheUluTXMgPSAxZTM7XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMubWF4UmV0cnlEZWxheUluTXMgPT0gbnVsbCB8fCBjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMubWF4UmV0cnlEZWxheUluTXMgPCAwKSB7XG4gICAgICBjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMubWF4UmV0cnlEZWxheUluTXMgPSAzZTQ7XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMubW9kZSA9PSBudWxsKSB7XG4gICAgICBjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMubW9kZSA9IFwiRml4ZWRcIjtcbiAgICB9XG4gIH1cbiAgX2J1aWxkUmVjb25uZWN0UmV0cnlPcHRpb25zKGNsaWVudE9wdGlvbnMpIHtcbiAgICBpZiAoIWNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zKSB7XG4gICAgICBjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMubWF4UmV0cmllcyA9PSBudWxsIHx8IGNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zLm1heFJldHJpZXMgPCAwKSB7XG4gICAgICBjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucy5tYXhSZXRyaWVzID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zLnJldHJ5RGVsYXlJbk1zID09IG51bGwgfHwgY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMucmV0cnlEZWxheUluTXMgPCAwKSB7XG4gICAgICBjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucy5yZXRyeURlbGF5SW5NcyA9IDFlMztcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zLm1heFJldHJ5RGVsYXlJbk1zID09IG51bGwgfHwgY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMubWF4UmV0cnlEZWxheUluTXMgPCAwKSB7XG4gICAgICBjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucy5tYXhSZXRyeURlbGF5SW5NcyA9IDNlNDtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zLm1vZGUgPT0gbnVsbCkge1xuICAgICAgY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMubW9kZSA9IFwiRml4ZWRcIjtcbiAgICB9XG4gIH1cbiAgX2J1aWxkUmVjb3ZlcnlVcmkoKSB7XG4gICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25JZCAmJiB0aGlzLl9yZWNvbm5lY3Rpb25Ub2tlbiAmJiB0aGlzLl91cmkpIHtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodGhpcy5fdXJpKTtcbiAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKFwiYXdwc19jb25uZWN0aW9uX2lkXCIsIHRoaXMuX2Nvbm5lY3Rpb25JZCk7XG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChcImF3cHNfcmVjb25uZWN0aW9uX3Rva2VuXCIsIHRoaXMuX3JlY29ubmVjdGlvblRva2VuKTtcbiAgICAgIHJldHVybiB1cmwudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgX2dldE9yQWRkR3JvdXAobmFtZSkge1xuICAgIGlmICghdGhpcy5fZ3JvdXBNYXAuaGFzKG5hbWUpKSB7XG4gICAgICB0aGlzLl9ncm91cE1hcC5zZXQobmFtZSwgbmV3IFdlYlB1YlN1Ykdyb3VwKG5hbWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2dyb3VwTWFwLmdldChuYW1lKTtcbiAgfVxuICBfY2hhbmdlU3RhdGUobmV3U3RhdGUpIHtcbiAgICBsb2dnZXIudmVyYm9zZShcbiAgICAgIGBUaGUgY2xpZW50IHN0YXRlIHRyYW5zZmVyIGZyb20gJHt0aGlzLl9zdGF0ZS50b1N0cmluZygpfSB0byAke25ld1N0YXRlLnRvU3RyaW5nKCl9YFxuICAgICk7XG4gICAgdGhpcy5fc3RhdGUgPSBuZXdTdGF0ZTtcbiAgfVxuICBhc3luYyBfb3BlcmF0aW9uRXhlY3V0ZVdpdGhSZXRyeShpbm5lciwgc2lnbmFsKSB7XG4gICAgbGV0IHJldHJ5QXR0ZW1wdCA9IDA7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBpbm5lci5jYWxsKHRoaXMpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBJbnZvY2F0aW9uRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0cnlBdHRlbXB0Kys7XG4gICAgICAgIGNvbnN0IGRlbGF5SW5NcyA9IHRoaXMuX21lc3NhZ2VSZXRyeVBvbGljeS5uZXh0UmV0cnlEZWxheUluTXMocmV0cnlBdHRlbXB0KTtcbiAgICAgICAgaWYgKGRlbGF5SW5NcyA9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5SW5Ncyk7XG4gICAgICAgIGlmIChzaWduYWw/LmFib3J0ZWQpIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmNsYXNzIFJldHJ5UG9saWN5IHtcbiAgX3JldHJ5T3B0aW9ucztcbiAgX21heFJldHJpZXNUb0dldE1heERlbGF5O1xuICBjb25zdHJ1Y3RvcihyZXRyeU9wdGlvbnMpIHtcbiAgICB0aGlzLl9yZXRyeU9wdGlvbnMgPSByZXRyeU9wdGlvbnM7XG4gICAgdGhpcy5fbWF4UmV0cmllc1RvR2V0TWF4RGVsYXkgPSBNYXRoLmNlaWwoXG4gICAgICBNYXRoLmxvZzIodGhpcy5fcmV0cnlPcHRpb25zLm1heFJldHJ5RGVsYXlJbk1zKSAtIE1hdGgubG9nMih0aGlzLl9yZXRyeU9wdGlvbnMucmV0cnlEZWxheUluTXMpICsgMVxuICAgICk7XG4gIH1cbiAgbmV4dFJldHJ5RGVsYXlJbk1zKHJldHJ5QXR0ZW1wdCkge1xuICAgIGlmIChyZXRyeUF0dGVtcHQgPiB0aGlzLl9yZXRyeU9wdGlvbnMubWF4UmV0cmllcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9yZXRyeU9wdGlvbnMubW9kZSA9PT0gXCJGaXhlZFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXRyeU9wdGlvbnMucmV0cnlEZWxheUluTXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsY3VsYXRlRXhwb25lbnRpYWxEZWxheShyZXRyeUF0dGVtcHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBfY2FsY3VsYXRlRXhwb25lbnRpYWxEZWxheShhdHRlbXB0KSB7XG4gICAgaWYgKGF0dGVtcHQgPj0gdGhpcy5fbWF4UmV0cmllc1RvR2V0TWF4RGVsYXkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXRyeU9wdGlvbnMubWF4UmV0cnlEZWxheUluTXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoMSA8PCBhdHRlbXB0IC0gMSkgKiB0aGlzLl9yZXRyeU9wdGlvbnMucmV0cnlEZWxheUluTXM7XG4gICAgfVxuICB9XG59XG5jbGFzcyBXZWJQdWJTdWJHcm91cCB7XG4gIG5hbWU7XG4gIGlzSm9pbmVkID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG59XG5jbGFzcyBTZXF1ZW5jZUlkIHtcbiAgX3NlcXVlbmNlSWQ7XG4gIF9pc1VwZGF0ZTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fc2VxdWVuY2VJZCA9IDA7XG4gICAgdGhpcy5faXNVcGRhdGUgPSBmYWxzZTtcbiAgfVxuICB0cnlVcGRhdGUoc2VxdWVuY2VJZCkge1xuICAgIHRoaXMuX2lzVXBkYXRlID0gdHJ1ZTtcbiAgICBpZiAoc2VxdWVuY2VJZCA+IHRoaXMuX3NlcXVlbmNlSWQpIHtcbiAgICAgIGNvbnN0IGRpZmYgPSBzZXF1ZW5jZUlkIC0gdGhpcy5fc2VxdWVuY2VJZDtcbiAgICAgIHRoaXMuX3NlcXVlbmNlSWQgPSBzZXF1ZW5jZUlkO1xuICAgICAgcmV0dXJuIGRpZmY7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG4gIHRyeUdldFNlcXVlbmNlSWQoKSB7XG4gICAgaWYgKHRoaXMuX2lzVXBkYXRlKSB7XG4gICAgICB0aGlzLl9pc1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIFt0cnVlLCB0aGlzLl9zZXF1ZW5jZUlkXTtcbiAgICB9XG4gICAgcmV0dXJuIFtmYWxzZSwgbnVsbF07XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fc2VxdWVuY2VJZCA9IDA7XG4gICAgdGhpcy5faXNVcGRhdGUgPSBmYWxzZTtcbiAgfVxufVxuY2xhc3MgQWJvcnRhYmxlVGFzayB7XG4gIF9mdW5jO1xuICBfYWJvcnRDb250cm9sbGVyO1xuICBfaW50ZXJ2YWw7XG4gIF9vYmo7XG4gIGNvbnN0cnVjdG9yKGZ1bmMsIGludGVydmFsLCBvYmopIHtcbiAgICB0aGlzLl9mdW5jID0gZnVuYztcbiAgICB0aGlzLl9hYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgICB0aGlzLl9vYmogPSBvYmo7XG4gICAgdGhpcy5fc3RhcnQoKTtcbiAgfVxuICBhYm9ydCgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG4gICAgfSBjYXRjaCB7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9zdGFydCgpIHtcbiAgICBjb25zdCBzaWduYWwgPSB0aGlzLl9hYm9ydENvbnRyb2xsZXIuc2lnbmFsO1xuICAgIHdoaWxlICghc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX2Z1bmModGhpcy5fb2JqKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgZGVsYXkodGhpcy5faW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IHtcbiAgV2ViUHViU3ViQ2xpZW50XG59O1xuIiwgImNsYXNzIFNlbmRNZXNzYWdlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIC8qKlxuICAgKiBFcnJvciBuYW1lXG4gICAqL1xuICBuYW1lO1xuICAvKipcbiAgICogVGhlIGFjayBpZCBvZiB0aGUgbWVzc2FnZVxuICAgKi9cbiAgYWNrSWQ7XG4gIC8qKlxuICAgKiBUaGUgZXJyb3IgZGV0YWlscyBmcm9tIHRoZSBzZXJ2aWNlXG4gICAqL1xuICBlcnJvckRldGFpbDtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYSBTZW5kTWVzc2FnZUVycm9yXG4gICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIGVycm9yIG1lc3NhZ2VcbiAgICogQHBhcmFtIGFja01lc3NhZ2UgLSBUaGUgYWNrIG1lc3NhZ2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSBcIlNlbmRNZXNzYWdlRXJyb3JcIjtcbiAgICB0aGlzLmFja0lkID0gb3B0aW9ucy5hY2tJZDtcbiAgICB0aGlzLmVycm9yRGV0YWlsID0gb3B0aW9ucy5lcnJvckRldGFpbDtcbiAgfVxufVxuY2xhc3MgSW52b2NhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAvKipcbiAgICogVGhlIGludm9jYXRpb24gaWQgb2YgdGhlIHJlcXVlc3QuXG4gICAqL1xuICBpbnZvY2F0aW9uSWQ7XG4gIC8qKlxuICAgKiBFcnJvciBkZXRhaWxzIGZyb20gdGhlIHNlcnZpY2UgaWYgYXZhaWxhYmxlLlxuICAgKi9cbiAgZXJyb3JEZXRhaWw7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSBcIkludm9jYXRpb25FcnJvclwiO1xuICAgIHRoaXMuaW52b2NhdGlvbklkID0gb3B0aW9ucy5pbnZvY2F0aW9uSWQ7XG4gICAgdGhpcy5lcnJvckRldGFpbCA9IG9wdGlvbnMuZXJyb3JEZXRhaWw7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIEludm9jYXRpb25FcnJvcixcbiAgU2VuZE1lc3NhZ2VFcnJvclxufTtcbiIsICIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgRU9MIH0gZnJvbSBcIm5vZGU6b3NcIjtcbmltcG9ydCB1dGlsIGZyb20gXCJub2RlOnV0aWxcIjtcbmltcG9ydCBwcm9jZXNzIGZyb20gXCJub2RlOnByb2Nlc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhtZXNzYWdlOiB1bmtub3duLCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICBwcm9jZXNzLnN0ZGVyci53cml0ZShgJHt1dGlsLmZvcm1hdChtZXNzYWdlLCAuLi5hcmdzKX0ke0VPTH1gKTtcbn1cbiIsICIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgbG9nIH0gZnJvbSBcIi4vbG9nLmpzXCI7XG5cbi8qKlxuICogQSBzaW1wbGUgbWVjaGFuaXNtIGZvciBlbmFibGluZyBsb2dnaW5nLlxuICogSW50ZW5kZWQgdG8gbWltaWMgdGhlIHB1YmxpY2x5IGF2YWlsYWJsZSBgZGVidWdgIHBhY2thZ2UuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVidWcge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBsb2dnZXIgd2l0aCB0aGUgZ2l2ZW4gbmFtZXNwYWNlLlxuICAgKi9cbiAgKG5hbWVzcGFjZTogc3RyaW5nKTogRGVidWdnZXI7XG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBsb2cgbWV0aG9kIChkZWZhdWx0cyB0byBjb25zb2xlKVxuICAgKi9cbiAgbG9nOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBFbmFibGVzIGEgcGFydGljdWxhciBzZXQgb2YgbmFtZXNwYWNlcy5cbiAgICogVG8gZW5hYmxlIG11bHRpcGxlIHNlcGFyYXRlIHRoZW0gd2l0aCBjb21tYXMsIGUuZy4gXCJpbmZvLGRlYnVnXCIuXG4gICAqIFN1cHBvcnRzIHdpbGRjYXJkcywgZS5nLiBcInR5cGVTcGVjUnVudGltZToqXCJcbiAgICogU3VwcG9ydHMgc2tpcCBzeW50YXgsIGUuZy4gXCJ0eXBlU3BlY1J1bnRpbWU6KiwtdHlwZVNwZWNSdW50aW1lOnN0b3JhZ2U6KlwiIHdpbGwgZW5hYmxlXG4gICAqIGV2ZXJ5dGhpbmcgdW5kZXIgdHlwZVNwZWNSdW50aW1lIGV4Y2VwdCBmb3IgdGhpbmdzIHVuZGVyIHR5cGVTcGVjUnVudGltZTpzdG9yYWdlLlxuICAgKi9cbiAgZW5hYmxlOiAobmFtZXNwYWNlczogc3RyaW5nKSA9PiB2b2lkO1xuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgcGFydGljdWxhciBuYW1lc3BhY2UgaXMgZW5hYmxlZC5cbiAgICovXG4gIGVuYWJsZWQ6IChuYW1lc3BhY2U6IHN0cmluZykgPT4gYm9vbGVhbjtcbiAgLyoqXG4gICAqIERpc2FibGVzIGFsbCBsb2dnaW5nLCByZXR1cm5zIHdoYXQgd2FzIHByZXZpb3VzbHkgZW5hYmxlZC5cbiAgICovXG4gIGRpc2FibGU6ICgpID0+IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIGxvZyBmdW5jdGlvbiB0aGF0IGNhbiBiZSBkeW5hbWljYWxseSBlbmFibGVkIGFuZCByZWRpcmVjdGVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERlYnVnZ2VyIHtcbiAgLyoqXG4gICAqIExvZ3MgdGhlIGdpdmVuIGFyZ3VtZW50cyB0byB0aGUgYGxvZ2AgbWV0aG9kLlxuICAgKi9cbiAgKC4uLmFyZ3M6IGFueVtdKTogdm9pZDtcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhpcyBsb2dnZXIgaXMgYWN0aXZlIGFuZCBsb2dnaW5nLlxuICAgKi9cbiAgZW5hYmxlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFVzZWQgdG8gY2xlYW51cC9yZW1vdmUgdGhpcyBsb2dnZXIuXG4gICAqL1xuICBkZXN0cm95OiAoKSA9PiBib29sZWFuO1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgbG9nIG1ldGhvZC4gQ2FuIGJlIG92ZXJyaWRkZW4gdG8gcmVkaXJlY3Qgb3V0cHV0LlxuICAgKi9cbiAgbG9nOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBUaGUgbmFtZXNwYWNlIG9mIHRoaXMgbG9nZ2VyLlxuICAgKi9cbiAgbmFtZXNwYWNlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFeHRlbmRzIHRoaXMgbG9nZ2VyIHdpdGggYSBjaGlsZCBuYW1lc3BhY2UuXG4gICAqIE5hbWVzcGFjZXMgYXJlIHNlcGFyYXRlZCB3aXRoIGEgJzonIGNoYXJhY3Rlci5cbiAgICovXG4gIGV4dGVuZDogKG5hbWVzcGFjZTogc3RyaW5nKSA9PiBEZWJ1Z2dlcjtcbn1cblxuY29uc3QgZGVidWdFbnZWYXJpYWJsZSA9XG4gICh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5ERUJVRykgfHwgdW5kZWZpbmVkO1xuXG5sZXQgZW5hYmxlZFN0cmluZzogc3RyaW5nIHwgdW5kZWZpbmVkO1xubGV0IGVuYWJsZWROYW1lc3BhY2VzOiBzdHJpbmdbXSA9IFtdO1xubGV0IHNraXBwZWROYW1lc3BhY2VzOiBzdHJpbmdbXSA9IFtdO1xuY29uc3QgZGVidWdnZXJzOiBEZWJ1Z2dlcltdID0gW107XG5cbmlmIChkZWJ1Z0VudlZhcmlhYmxlKSB7XG4gIGVuYWJsZShkZWJ1Z0VudlZhcmlhYmxlKTtcbn1cblxuY29uc3QgZGVidWdPYmo6IERlYnVnID0gT2JqZWN0LmFzc2lnbihcbiAgKG5hbWVzcGFjZTogc3RyaW5nKTogRGVidWdnZXIgPT4ge1xuICAgIHJldHVybiBjcmVhdGVEZWJ1Z2dlcihuYW1lc3BhY2UpO1xuICB9LFxuICB7XG4gICAgZW5hYmxlLFxuICAgIGVuYWJsZWQsXG4gICAgZGlzYWJsZSxcbiAgICBsb2csXG4gIH0sXG4pO1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlczogc3RyaW5nKTogdm9pZCB7XG4gIGVuYWJsZWRTdHJpbmcgPSBuYW1lc3BhY2VzO1xuICBlbmFibGVkTmFtZXNwYWNlcyA9IFtdO1xuICBza2lwcGVkTmFtZXNwYWNlcyA9IFtdO1xuICBjb25zdCBuYW1lc3BhY2VMaXN0ID0gbmFtZXNwYWNlcy5zcGxpdChcIixcIikubWFwKChucykgPT4gbnMudHJpbSgpKTtcbiAgZm9yIChjb25zdCBucyBvZiBuYW1lc3BhY2VMaXN0KSB7XG4gICAgaWYgKG5zLnN0YXJ0c1dpdGgoXCItXCIpKSB7XG4gICAgICBza2lwcGVkTmFtZXNwYWNlcy5wdXNoKG5zLnN1YnN0cmluZygxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuYWJsZWROYW1lc3BhY2VzLnB1c2gobnMpO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIGRlYnVnZ2Vycykge1xuICAgIGluc3RhbmNlLmVuYWJsZWQgPSBlbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5hYmxlZChuYW1lc3BhY2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAobmFtZXNwYWNlLmVuZHNXaXRoKFwiKlwiKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZm9yIChjb25zdCBza2lwcGVkIG9mIHNraXBwZWROYW1lc3BhY2VzKSB7XG4gICAgaWYgKG5hbWVzcGFjZU1hdGNoZXMobmFtZXNwYWNlLCBza2lwcGVkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IGVuYWJsZWROYW1lc3BhY2Ugb2YgZW5hYmxlZE5hbWVzcGFjZXMpIHtcbiAgICBpZiAobmFtZXNwYWNlTWF0Y2hlcyhuYW1lc3BhY2UsIGVuYWJsZWROYW1lc3BhY2UpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEdpdmVuIGEgbmFtZXNwYWNlLCBjaGVjayBpZiBpdCBtYXRjaGVzIGEgcGF0dGVybi5cbiAqIFBhdHRlcm5zIG9ubHkgaGF2ZSBhIHNpbmdsZSB3aWxkY2FyZCBjaGFyYWN0ZXIgd2hpY2ggaXMgKi5cbiAqIFRoZSBiZWhhdmlvciBvZiAqIGlzIHRoYXQgaXQgbWF0Y2hlcyB6ZXJvIG9yIG1vcmUgb3RoZXIgY2hhcmFjdGVycy5cbiAqL1xuZnVuY3Rpb24gbmFtZXNwYWNlTWF0Y2hlcyhuYW1lc3BhY2U6IHN0cmluZywgcGF0dGVyblRvTWF0Y2g6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBzaW1wbGUgY2FzZSwgbm8gcGF0dGVybiBtYXRjaGluZyByZXF1aXJlZFxuICBpZiAocGF0dGVyblRvTWF0Y2guaW5kZXhPZihcIipcIikgPT09IC0xKSB7XG4gICAgcmV0dXJuIG5hbWVzcGFjZSA9PT0gcGF0dGVyblRvTWF0Y2g7XG4gIH1cblxuICBsZXQgcGF0dGVybiA9IHBhdHRlcm5Ub01hdGNoO1xuXG4gIC8vIG5vcm1hbGl6ZSBzdWNjZXNzaXZlICogaWYgbmVlZGVkXG4gIGlmIChwYXR0ZXJuVG9NYXRjaC5pbmRleE9mKFwiKipcIikgIT09IC0xKSB7XG4gICAgY29uc3QgcGF0dGVyblBhcnRzID0gW107XG4gICAgbGV0IGxhc3RDaGFyYWN0ZXIgPSBcIlwiO1xuICAgIGZvciAoY29uc3QgY2hhcmFjdGVyIG9mIHBhdHRlcm5Ub01hdGNoKSB7XG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBcIipcIiAmJiBsYXN0Q2hhcmFjdGVyID09PSBcIipcIikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhc3RDaGFyYWN0ZXIgPSBjaGFyYWN0ZXI7XG4gICAgICAgIHBhdHRlcm5QYXJ0cy5wdXNoKGNoYXJhY3Rlcik7XG4gICAgICB9XG4gICAgfVxuICAgIHBhdHRlcm4gPSBwYXR0ZXJuUGFydHMuam9pbihcIlwiKTtcbiAgfVxuXG4gIGxldCBuYW1lc3BhY2VJbmRleCA9IDA7XG4gIGxldCBwYXR0ZXJuSW5kZXggPSAwO1xuICBjb25zdCBwYXR0ZXJuTGVuZ3RoID0gcGF0dGVybi5sZW5ndGg7XG4gIGNvbnN0IG5hbWVzcGFjZUxlbmd0aCA9IG5hbWVzcGFjZS5sZW5ndGg7XG4gIGxldCBsYXN0V2lsZGNhcmQgPSAtMTtcbiAgbGV0IGxhc3RXaWxkY2FyZE5hbWVzcGFjZSA9IC0xO1xuXG4gIHdoaWxlIChuYW1lc3BhY2VJbmRleCA8IG5hbWVzcGFjZUxlbmd0aCAmJiBwYXR0ZXJuSW5kZXggPCBwYXR0ZXJuTGVuZ3RoKSB7XG4gICAgaWYgKHBhdHRlcm5bcGF0dGVybkluZGV4XSA9PT0gXCIqXCIpIHtcbiAgICAgIGxhc3RXaWxkY2FyZCA9IHBhdHRlcm5JbmRleDtcbiAgICAgIHBhdHRlcm5JbmRleCsrO1xuICAgICAgaWYgKHBhdHRlcm5JbmRleCA9PT0gcGF0dGVybkxlbmd0aCkge1xuICAgICAgICAvLyBpZiB3aWxkY2FyZCBpcyB0aGUgbGFzdCBjaGFyYWN0ZXIsIGl0IHdpbGwgbWF0Y2ggdGhlIHJlbWFpbmluZyBuYW1lc3BhY2Ugc3RyaW5nXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gbm93IHdlIGxldCB0aGUgd2lsZGNhcmQgZWF0IGNoYXJhY3RlcnMgdW50aWwgd2UgbWF0Y2ggdGhlIG5leHQgbGl0ZXJhbCBpbiB0aGUgcGF0dGVyblxuICAgICAgd2hpbGUgKG5hbWVzcGFjZVtuYW1lc3BhY2VJbmRleF0gIT09IHBhdHRlcm5bcGF0dGVybkluZGV4XSkge1xuICAgICAgICBuYW1lc3BhY2VJbmRleCsrO1xuICAgICAgICAvLyByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIG5hbWVzcGFjZSB3aXRob3V0IGEgbWF0Y2hcbiAgICAgICAgaWYgKG5hbWVzcGFjZUluZGV4ID09PSBuYW1lc3BhY2VMZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gbm93IHRoYXQgd2UgaGF2ZSBhIG1hdGNoLCBsZXQncyB0cnkgdG8gY29udGludWUgb25cbiAgICAgIC8vIGhvd2V2ZXIsIGl0J3MgcG9zc2libGUgd2UgY291bGQgZmluZCBhIGxhdGVyIG1hdGNoXG4gICAgICAvLyBzbyBrZWVwIGEgcmVmZXJlbmNlIGluIGNhc2Ugd2UgaGF2ZSB0byBiYWNrdHJhY2tcbiAgICAgIGxhc3RXaWxkY2FyZE5hbWVzcGFjZSA9IG5hbWVzcGFjZUluZGV4O1xuICAgICAgbmFtZXNwYWNlSW5kZXgrKztcbiAgICAgIHBhdHRlcm5JbmRleCsrO1xuICAgICAgY29udGludWU7XG4gICAgfSBlbHNlIGlmIChwYXR0ZXJuW3BhdHRlcm5JbmRleF0gPT09IG5hbWVzcGFjZVtuYW1lc3BhY2VJbmRleF0pIHtcbiAgICAgIC8vIHNpbXBsZSBjYXNlOiBsaXRlcmFsIHBhdHRlcm4gbWF0Y2hlcyBzbyBrZWVwIGdvaW5nXG4gICAgICBwYXR0ZXJuSW5kZXgrKztcbiAgICAgIG5hbWVzcGFjZUluZGV4Kys7XG4gICAgfSBlbHNlIGlmIChsYXN0V2lsZGNhcmQgPj0gMCkge1xuICAgICAgLy8gc3BlY2lhbCBjYXNlOiB3ZSBkb24ndCBoYXZlIGEgbGl0ZXJhbCBtYXRjaCwgYnV0IHRoZXJlIGlzIGEgcHJldmlvdXMgd2lsZGNhcmRcbiAgICAgIC8vIHdoaWNoIHdlIGNhbiBiYWNrdHJhY2sgdG8gYW5kIHRyeSBoYXZpbmcgdGhlIHdpbGRjYXJkIGVhdCB0aGUgbWF0Y2ggaW5zdGVhZFxuICAgICAgcGF0dGVybkluZGV4ID0gbGFzdFdpbGRjYXJkICsgMTtcbiAgICAgIG5hbWVzcGFjZUluZGV4ID0gbGFzdFdpbGRjYXJkTmFtZXNwYWNlICsgMTtcbiAgICAgIC8vIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgbmFtZXNwYWNlIHdpdGhvdXQgYSBtYXRjaFxuICAgICAgaWYgKG5hbWVzcGFjZUluZGV4ID09PSBuYW1lc3BhY2VMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gc2ltaWxhciB0byB0aGUgcHJldmlvdXMgbG9naWMsIGxldCdzIGtlZXAgZ29pbmcgdW50aWwgd2UgZmluZCB0aGUgbmV4dCBsaXRlcmFsIG1hdGNoXG4gICAgICB3aGlsZSAobmFtZXNwYWNlW25hbWVzcGFjZUluZGV4XSAhPT0gcGF0dGVybltwYXR0ZXJuSW5kZXhdKSB7XG4gICAgICAgIG5hbWVzcGFjZUluZGV4Kys7XG4gICAgICAgIGlmIChuYW1lc3BhY2VJbmRleCA9PT0gbmFtZXNwYWNlTGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsYXN0V2lsZGNhcmROYW1lc3BhY2UgPSBuYW1lc3BhY2VJbmRleDtcbiAgICAgIG5hbWVzcGFjZUluZGV4Kys7XG4gICAgICBwYXR0ZXJuSW5kZXgrKztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmFtZXNwYWNlRG9uZSA9IG5hbWVzcGFjZUluZGV4ID09PSBuYW1lc3BhY2UubGVuZ3RoO1xuICBjb25zdCBwYXR0ZXJuRG9uZSA9IHBhdHRlcm5JbmRleCA9PT0gcGF0dGVybi5sZW5ndGg7XG4gIC8vIHRoaXMgaXMgdG8gZGV0ZWN0IHRoZSBjYXNlIG9mIGFuIHVubmVlZGVkIGZpbmFsIHdpbGRjYXJkXG4gIC8vIGUuZy4gdGhlIHBhdHRlcm4gYGFiKmAgc2hvdWxkIG1hdGNoIHRoZSBzdHJpbmcgYGFiYFxuICBjb25zdCB0cmFpbGluZ1dpbGRDYXJkID0gcGF0dGVybkluZGV4ID09PSBwYXR0ZXJuLmxlbmd0aCAtIDEgJiYgcGF0dGVybltwYXR0ZXJuSW5kZXhdID09PSBcIipcIjtcbiAgcmV0dXJuIG5hbWVzcGFjZURvbmUgJiYgKHBhdHRlcm5Eb25lIHx8IHRyYWlsaW5nV2lsZENhcmQpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlKCk6IHN0cmluZyB7XG4gIGNvbnN0IHJlc3VsdCA9IGVuYWJsZWRTdHJpbmcgfHwgXCJcIjtcbiAgZW5hYmxlKFwiXCIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWJ1Z2dlcihuYW1lc3BhY2U6IHN0cmluZyk6IERlYnVnZ2VyIHtcbiAgY29uc3QgbmV3RGVidWdnZXI6IERlYnVnZ2VyID0gT2JqZWN0LmFzc2lnbihkZWJ1Zywge1xuICAgIGVuYWJsZWQ6IGVuYWJsZWQobmFtZXNwYWNlKSxcbiAgICBkZXN0cm95LFxuICAgIGxvZzogZGVidWdPYmoubG9nLFxuICAgIG5hbWVzcGFjZSxcbiAgICBleHRlbmQsXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKCFuZXdEZWJ1Z2dlci5lbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGFyZ3NbMF0gPSBgJHtuYW1lc3BhY2V9ICR7YXJnc1swXX1gO1xuICAgIH1cbiAgICBuZXdEZWJ1Z2dlci5sb2coLi4uYXJncyk7XG4gIH1cblxuICBkZWJ1Z2dlcnMucHVzaChuZXdEZWJ1Z2dlcik7XG5cbiAgcmV0dXJuIG5ld0RlYnVnZ2VyO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95KHRoaXM6IERlYnVnZ2VyKTogYm9vbGVhbiB7XG4gIGNvbnN0IGluZGV4ID0gZGVidWdnZXJzLmluZGV4T2YodGhpcyk7XG4gIGlmIChpbmRleCA+PSAwKSB7XG4gICAgZGVidWdnZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBleHRlbmQodGhpczogRGVidWdnZXIsIG5hbWVzcGFjZTogc3RyaW5nKTogRGVidWdnZXIge1xuICBjb25zdCBuZXdEZWJ1Z2dlciA9IGNyZWF0ZURlYnVnZ2VyKGAke3RoaXMubmFtZXNwYWNlfToke25hbWVzcGFjZX1gKTtcbiAgbmV3RGVidWdnZXIubG9nID0gdGhpcy5sb2c7XG4gIHJldHVybiBuZXdEZWJ1Z2dlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVidWdPYmo7XG4iLCAiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCBkZWJ1ZyBmcm9tIFwiLi9kZWJ1Zy5qc1wiO1xuXG5pbXBvcnQgdHlwZSB7IERlYnVnZ2VyIH0gZnJvbSBcIi4vZGVidWcuanNcIjtcbmV4cG9ydCB0eXBlIHsgRGVidWdnZXIgfTtcblxuLyoqXG4gKiBUaGUgbG9nIGxldmVscyBzdXBwb3J0ZWQgYnkgdGhlIGxvZ2dlci5cbiAqIFRoZSBsb2cgbGV2ZWxzIGluIG9yZGVyIG9mIG1vc3QgdmVyYm9zZSB0byBsZWFzdCB2ZXJib3NlIGFyZTpcbiAqIC0gdmVyYm9zZVxuICogLSBpbmZvXG4gKiAtIHdhcm5pbmdcbiAqIC0gZXJyb3JcbiAqL1xuZXhwb3J0IHR5cGUgVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwgPSBcInZlcmJvc2VcIiB8IFwiaW5mb1wiIHwgXCJ3YXJuaW5nXCIgfCBcImVycm9yXCI7XG5cbi8qKlxuICogQSBUeXBlU3BlY1J1bnRpbWVDbGllbnRMb2dnZXIgaXMgYSBmdW5jdGlvbiB0aGF0IGNhbiBsb2cgdG8gYW4gYXBwcm9wcmlhdGUgc2V2ZXJpdHkgbGV2ZWwuXG4gKi9cbmV4cG9ydCB0eXBlIFR5cGVTcGVjUnVudGltZUNsaWVudExvZ2dlciA9IERlYnVnZ2VyO1xuXG4vKipcbiAqIERlZmluZXMgdGhlIG1ldGhvZHMgYXZhaWxhYmxlIG9uIHRoZSBTREstZmFjaW5nIGxvZ2dlci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUeXBlU3BlY1J1bnRpbWVMb2dnZXIge1xuICAvKipcbiAgICogVXNlZCBmb3IgZmFpbHVyZXMgdGhlIHByb2dyYW0gaXMgdW5saWtlbHkgdG8gcmVjb3ZlciBmcm9tLFxuICAgKiBzdWNoIGFzIE91dCBvZiBNZW1vcnkuXG4gICAqL1xuICBlcnJvcjogRGVidWdnZXI7XG4gIC8qKlxuICAgKiBVc2VkIHdoZW4gYSBmdW5jdGlvbiBmYWlscyB0byBwZXJmb3JtIGl0cyBpbnRlbmRlZCB0YXNrLlxuICAgKiBVc3VhbGx5IHRoaXMgbWVhbnMgdGhlIGZ1bmN0aW9uIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uLlxuICAgKiBOb3QgdXNlZCBmb3Igc2VsZi1oZWFsaW5nIGV2ZW50cyAoZS5nLiBhdXRvbWF0aWMgcmV0cnkpXG4gICAqL1xuICB3YXJuaW5nOiBEZWJ1Z2dlcjtcbiAgLyoqXG4gICAqIFVzZWQgd2hlbiBhIGZ1bmN0aW9uIG9wZXJhdGVzIG5vcm1hbGx5LlxuICAgKi9cbiAgaW5mbzogRGVidWdnZXI7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBkZXRhaWxlZCB0cm91Ymxlc2hvb3Rpbmcgc2NlbmFyaW9zLiBUaGlzIGlzXG4gICAqIGludGVuZGVkIGZvciB1c2UgYnkgZGV2ZWxvcGVycyAvIHN5c3RlbSBhZG1pbmlzdHJhdG9yc1xuICAgKiBmb3IgZGlhZ25vc2luZyBzcGVjaWZpYyBmYWlsdXJlcy5cbiAgICovXG4gIHZlcmJvc2U6IERlYnVnZ2VyO1xufVxuXG4vKipcbiAqIHRvZG8gZG9jXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9nZ2VyQ29udGV4dCB7XG4gIC8qKlxuICAgKiBJbW1lZGlhdGVseSBlbmFibGVzIGxvZ2dpbmcgYXQgdGhlIHNwZWNpZmllZCBsb2cgbGV2ZWwuIElmIG5vIGxldmVsIGlzIHNwZWNpZmllZCwgbG9nZ2luZyBpcyBkaXNhYmxlZC5cbiAgICogQHBhcmFtIGxldmVsIC0gVGhlIGxvZyBsZXZlbCB0byBlbmFibGUgZm9yIGxvZ2dpbmcuXG4gICAqIE9wdGlvbnMgZnJvbSBtb3N0IHZlcmJvc2UgdG8gbGVhc3QgdmVyYm9zZSBhcmU6XG4gICAqIC0gdmVyYm9zZVxuICAgKiAtIGluZm9cbiAgICogLSB3YXJuaW5nXG4gICAqIC0gZXJyb3JcbiAgICovXG4gIHNldExvZ0xldmVsKGxvZ0xldmVsPzogVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnRseSBzcGVjaWZpZWQgbG9nIGxldmVsLlxuICAgKi9cbiAgZ2V0TG9nTGV2ZWwoKTogVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsb2dnZXIgZm9yIHVzZSBieSB0aGUgU0RLcyB0aGF0IGluaGVyaXRzIGZyb20gYFR5cGVTcGVjUnVudGltZUxvZ2dlcmAuXG4gICAqIEBwYXJhbSBuYW1lc3BhY2UgLSBUaGUgbmFtZSBvZiB0aGUgU0RLIHBhY2thZ2UuXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNyZWF0ZUNsaWVudExvZ2dlcihuYW1lc3BhY2U6IHN0cmluZyk6IFR5cGVTcGVjUnVudGltZUxvZ2dlcjtcblxuICAvKipcbiAgICogVGhlIFR5cGVTcGVjUnVudGltZUNsaWVudExvZ2dlciBwcm92aWRlcyBhIG1lY2hhbmlzbSBmb3Igb3ZlcnJpZGluZyB3aGVyZSBsb2dzIGFyZSBvdXRwdXQgdG8uXG4gICAqIEJ5IGRlZmF1bHQsIGxvZ3MgYXJlIHNlbnQgdG8gc3RkZXJyLlxuICAgKiBPdmVycmlkZSB0aGUgYGxvZ2AgbWV0aG9kIHRvIHJlZGlyZWN0IGxvZ3MgdG8gYW5vdGhlciBsb2NhdGlvbi5cbiAgICovXG4gIGxvZ2dlcjogVHlwZVNwZWNSdW50aW1lQ2xpZW50TG9nZ2VyO1xufVxuXG4vKipcbiAqIE9wdGlvbiBmb3IgY3JlYXRpbmcgYSBUeXBlU3BlY1J1bnRpbWVMb2dnZXJDb250ZXh0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUxvZ2dlckNvbnRleHRPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSB0byBjaGVjayBmb3IgdGhlIGxvZyBsZXZlbC5cbiAgICovXG4gIGxvZ0xldmVsRW52VmFyTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZXNwYWNlIG9mIHRoZSBsb2dnZXIuXG4gICAqL1xuICBuYW1lc3BhY2U6IHN0cmluZztcbn1cblxuY29uc3QgVFlQRVNQRUNfUlVOVElNRV9MT0dfTEVWRUxTID0gW1widmVyYm9zZVwiLCBcImluZm9cIiwgXCJ3YXJuaW5nXCIsIFwiZXJyb3JcIl07XG5cbnR5cGUgRGVidWdnZXJXaXRoTG9nTGV2ZWwgPSBEZWJ1Z2dlciAmIHsgbGV2ZWw6IFR5cGVTcGVjUnVudGltZUxvZ0xldmVsIH07XG5cbmNvbnN0IGxldmVsTWFwID0ge1xuICB2ZXJib3NlOiA0MDAsXG4gIGluZm86IDMwMCxcbiAgd2FybmluZzogMjAwLFxuICBlcnJvcjogMTAwLFxufTtcblxuZnVuY3Rpb24gcGF0Y2hMb2dNZXRob2QoXG4gIHBhcmVudDogVHlwZVNwZWNSdW50aW1lQ2xpZW50TG9nZ2VyLFxuICBjaGlsZDogVHlwZVNwZWNSdW50aW1lQ2xpZW50TG9nZ2VyIHwgRGVidWdnZXJXaXRoTG9nTGV2ZWwsXG4pOiB2b2lkIHtcbiAgY2hpbGQubG9nID0gKC4uLmFyZ3MpID0+IHtcbiAgICBwYXJlbnQubG9nKC4uLmFyZ3MpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpc1R5cGVTcGVjUnVudGltZUxvZ0xldmVsKGxldmVsOiBzdHJpbmcpOiBsZXZlbCBpcyBUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbCB7XG4gIHJldHVybiBUWVBFU1BFQ19SVU5USU1FX0xPR19MRVZFTFMuaW5jbHVkZXMobGV2ZWwpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBsb2dnZXIgY29udGV4dCBiYXNlIG9uIHRoZSBwcm92aWRlZCBvcHRpb25zLlxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBmb3IgY3JlYXRpbmcgYSBsb2dnZXIgY29udGV4dC5cbiAqIEByZXR1cm5zIFRoZSBsb2dnZXIgY29udGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvZ2dlckNvbnRleHQob3B0aW9uczogQ3JlYXRlTG9nZ2VyQ29udGV4dE9wdGlvbnMpOiBMb2dnZXJDb250ZXh0IHtcbiAgY29uc3QgcmVnaXN0ZXJlZExvZ2dlcnMgPSBuZXcgU2V0PERlYnVnZ2VyV2l0aExvZ0xldmVsPigpO1xuICBjb25zdCBsb2dMZXZlbEZyb21FbnYgPVxuICAgICh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudltvcHRpb25zLmxvZ0xldmVsRW52VmFyTmFtZV0pIHx8XG4gICAgdW5kZWZpbmVkO1xuXG4gIGxldCBsb2dMZXZlbDogVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3QgY2xpZW50TG9nZ2VyOiBUeXBlU3BlY1J1bnRpbWVDbGllbnRMb2dnZXIgPSBkZWJ1ZyhvcHRpb25zLm5hbWVzcGFjZSk7XG4gIGNsaWVudExvZ2dlci5sb2cgPSAoLi4uYXJncykgPT4ge1xuICAgIGRlYnVnLmxvZyguLi5hcmdzKTtcbiAgfTtcblxuICBmdW5jdGlvbiBjb250ZXh0U2V0TG9nTGV2ZWwobGV2ZWw/OiBUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbCk6IHZvaWQge1xuICAgIGlmIChsZXZlbCAmJiAhaXNUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbChsZXZlbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFVua25vd24gbG9nIGxldmVsICcke2xldmVsfScuIEFjY2VwdGFibGUgdmFsdWVzOiAke1RZUEVTUEVDX1JVTlRJTUVfTE9HX0xFVkVMUy5qb2luKFwiLFwiKX1gLFxuICAgICAgKTtcbiAgICB9XG4gICAgbG9nTGV2ZWwgPSBsZXZlbDtcblxuICAgIGNvbnN0IGVuYWJsZWROYW1lc3BhY2VzID0gW107XG4gICAgZm9yIChjb25zdCBsb2dnZXIgb2YgcmVnaXN0ZXJlZExvZ2dlcnMpIHtcbiAgICAgIGlmIChzaG91bGRFbmFibGUobG9nZ2VyKSkge1xuICAgICAgICBlbmFibGVkTmFtZXNwYWNlcy5wdXNoKGxvZ2dlci5uYW1lc3BhY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRlYnVnLmVuYWJsZShlbmFibGVkTmFtZXNwYWNlcy5qb2luKFwiLFwiKSk7XG4gIH1cblxuICBpZiAobG9nTGV2ZWxGcm9tRW52KSB7XG4gICAgLy8gYXZvaWQgY2FsbGluZyBzZXRMb2dMZXZlbCBiZWNhdXNlIHdlIGRvbid0IHdhbnQgYSBtaXMtc2V0IGVudmlyb25tZW50IHZhcmlhYmxlIHRvIGNyYXNoXG4gICAgaWYgKGlzVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwobG9nTGV2ZWxGcm9tRW52KSkge1xuICAgICAgY29udGV4dFNldExvZ0xldmVsKGxvZ0xldmVsRnJvbUVudik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGAke29wdGlvbnMubG9nTGV2ZWxFbnZWYXJOYW1lfSBzZXQgdG8gdW5rbm93biBsb2cgbGV2ZWwgJyR7bG9nTGV2ZWxGcm9tRW52fSc7IGxvZ2dpbmcgaXMgbm90IGVuYWJsZWQuIEFjY2VwdGFibGUgdmFsdWVzOiAke1RZUEVTUEVDX1JVTlRJTUVfTE9HX0xFVkVMUy5qb2luKFxuICAgICAgICAgIFwiLCBcIixcbiAgICAgICAgKX0uYCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkRW5hYmxlKGxvZ2dlcjogRGVidWdnZXJXaXRoTG9nTGV2ZWwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQm9vbGVhbihsb2dMZXZlbCAmJiBsZXZlbE1hcFtsb2dnZXIubGV2ZWxdIDw9IGxldmVsTWFwW2xvZ0xldmVsXSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMb2dnZXIoXG4gICAgcGFyZW50OiBUeXBlU3BlY1J1bnRpbWVDbGllbnRMb2dnZXIsXG4gICAgbGV2ZWw6IFR5cGVTcGVjUnVudGltZUxvZ0xldmVsLFxuICApOiBEZWJ1Z2dlcldpdGhMb2dMZXZlbCB7XG4gICAgY29uc3QgbG9nZ2VyOiBEZWJ1Z2dlcldpdGhMb2dMZXZlbCA9IE9iamVjdC5hc3NpZ24ocGFyZW50LmV4dGVuZChsZXZlbCksIHtcbiAgICAgIGxldmVsLFxuICAgIH0pO1xuXG4gICAgcGF0Y2hMb2dNZXRob2QocGFyZW50LCBsb2dnZXIpO1xuXG4gICAgaWYgKHNob3VsZEVuYWJsZShsb2dnZXIpKSB7XG4gICAgICBjb25zdCBlbmFibGVkTmFtZXNwYWNlcyA9IGRlYnVnLmRpc2FibGUoKTtcbiAgICAgIGRlYnVnLmVuYWJsZShlbmFibGVkTmFtZXNwYWNlcyArIFwiLFwiICsgbG9nZ2VyLm5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJlZExvZ2dlcnMuYWRkKGxvZ2dlcik7XG5cbiAgICByZXR1cm4gbG9nZ2VyO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udGV4dEdldExvZ0xldmVsKCk6IFR5cGVTcGVjUnVudGltZUxvZ0xldmVsIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gbG9nTGV2ZWw7XG4gIH1cblxuICBmdW5jdGlvbiBjb250ZXh0Q3JlYXRlQ2xpZW50TG9nZ2VyKG5hbWVzcGFjZTogc3RyaW5nKTogVHlwZVNwZWNSdW50aW1lTG9nZ2VyIHtcbiAgICBjb25zdCBjbGllbnRSb290TG9nZ2VyOiBUeXBlU3BlY1J1bnRpbWVDbGllbnRMb2dnZXIgPSBjbGllbnRMb2dnZXIuZXh0ZW5kKG5hbWVzcGFjZSk7XG4gICAgcGF0Y2hMb2dNZXRob2QoY2xpZW50TG9nZ2VyLCBjbGllbnRSb290TG9nZ2VyKTtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IGNyZWF0ZUxvZ2dlcihjbGllbnRSb290TG9nZ2VyLCBcImVycm9yXCIpLFxuICAgICAgd2FybmluZzogY3JlYXRlTG9nZ2VyKGNsaWVudFJvb3RMb2dnZXIsIFwid2FybmluZ1wiKSxcbiAgICAgIGluZm86IGNyZWF0ZUxvZ2dlcihjbGllbnRSb290TG9nZ2VyLCBcImluZm9cIiksXG4gICAgICB2ZXJib3NlOiBjcmVhdGVMb2dnZXIoY2xpZW50Um9vdExvZ2dlciwgXCJ2ZXJib3NlXCIpLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNldExvZ0xldmVsOiBjb250ZXh0U2V0TG9nTGV2ZWwsXG4gICAgZ2V0TG9nTGV2ZWw6IGNvbnRleHRHZXRMb2dMZXZlbCxcbiAgICBjcmVhdGVDbGllbnRMb2dnZXI6IGNvbnRleHRDcmVhdGVDbGllbnRMb2dnZXIsXG4gICAgbG9nZ2VyOiBjbGllbnRMb2dnZXIsXG4gIH07XG59XG5cbmNvbnN0IGNvbnRleHQgPSBjcmVhdGVMb2dnZXJDb250ZXh0KHtcbiAgbG9nTGV2ZWxFbnZWYXJOYW1lOiBcIlRZUEVTUEVDX1JVTlRJTUVfTE9HX0xFVkVMXCIsXG4gIG5hbWVzcGFjZTogXCJ0eXBlU3BlY1J1bnRpbWVcIixcbn0pO1xuXG4vKipcbiAqIEltbWVkaWF0ZWx5IGVuYWJsZXMgbG9nZ2luZyBhdCB0aGUgc3BlY2lmaWVkIGxvZyBsZXZlbC4gSWYgbm8gbGV2ZWwgaXMgc3BlY2lmaWVkLCBsb2dnaW5nIGlzIGRpc2FibGVkLlxuICogQHBhcmFtIGxldmVsIC0gVGhlIGxvZyBsZXZlbCB0byBlbmFibGUgZm9yIGxvZ2dpbmcuXG4gKiBPcHRpb25zIGZyb20gbW9zdCB2ZXJib3NlIHRvIGxlYXN0IHZlcmJvc2UgYXJlOlxuICogLSB2ZXJib3NlXG4gKiAtIGluZm9cbiAqIC0gd2FybmluZ1xuICogLSBlcnJvclxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlZGVjbGFyZVxuZXhwb3J0IGNvbnN0IFR5cGVTcGVjUnVudGltZUxvZ2dlcjogVHlwZVNwZWNSdW50aW1lQ2xpZW50TG9nZ2VyID0gY29udGV4dC5sb2dnZXI7XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBjdXJyZW50bHkgc3BlY2lmaWVkIGxvZyBsZXZlbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldExvZ0xldmVsKGxvZ0xldmVsPzogVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwpOiB2b2lkIHtcbiAgY29udGV4dC5zZXRMb2dMZXZlbChsb2dMZXZlbCk7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBjdXJyZW50bHkgc3BlY2lmaWVkIGxvZyBsZXZlbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ0xldmVsKCk6IFR5cGVTcGVjUnVudGltZUxvZ0xldmVsIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGNvbnRleHQuZ2V0TG9nTGV2ZWwoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbG9nZ2VyIGZvciB1c2UgYnkgdGhlIFNES3MgdGhhdCBpbmhlcml0cyBmcm9tIGBUeXBlU3BlY1J1bnRpbWVMb2dnZXJgLlxuICogQHBhcmFtIG5hbWVzcGFjZSAtIFRoZSBuYW1lIG9mIHRoZSBTREsgcGFja2FnZS5cbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNsaWVudExvZ2dlcihuYW1lc3BhY2U6IHN0cmluZyk6IFR5cGVTcGVjUnVudGltZUxvZ2dlciB7XG4gIHJldHVybiBjb250ZXh0LmNyZWF0ZUNsaWVudExvZ2dlcihuYW1lc3BhY2UpO1xufVxuIiwgIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBjcmVhdGVMb2dnZXJDb250ZXh0IH0gZnJvbSBcIkB0eXBlc3BlYy90cy1odHRwLXJ1bnRpbWUvaW50ZXJuYWwvbG9nZ2VyXCI7XG5cbmNvbnN0IGNvbnRleHQgPSBjcmVhdGVMb2dnZXJDb250ZXh0KHtcbiAgbG9nTGV2ZWxFbnZWYXJOYW1lOiBcIkFaVVJFX0xPR19MRVZFTFwiLFxuICBuYW1lc3BhY2U6IFwiYXp1cmVcIixcbn0pO1xuXG4vKipcbiAqIFRoZSBBenVyZUxvZ2dlciBwcm92aWRlcyBhIG1lY2hhbmlzbSBmb3Igb3ZlcnJpZGluZyB3aGVyZSBsb2dzIGFyZSBvdXRwdXQgdG8uXG4gKiBCeSBkZWZhdWx0LCBsb2dzIGFyZSBzZW50IHRvIHN0ZGVyci5cbiAqIE92ZXJyaWRlIHRoZSBgbG9nYCBtZXRob2QgdG8gcmVkaXJlY3QgbG9ncyB0byBhbm90aGVyIGxvY2F0aW9uLlxuICovXG5leHBvcnQgY29uc3QgQXp1cmVMb2dnZXI6IEF6dXJlQ2xpZW50TG9nZ2VyID0gY29udGV4dC5sb2dnZXI7XG5cbi8qKlxuICogSW1tZWRpYXRlbHkgZW5hYmxlcyBsb2dnaW5nIGF0IHRoZSBzcGVjaWZpZWQgbG9nIGxldmVsLiBJZiBubyBsZXZlbCBpcyBzcGVjaWZpZWQsIGxvZ2dpbmcgaXMgZGlzYWJsZWQuXG4gKiBAcGFyYW0gbGV2ZWwgLSBUaGUgbG9nIGxldmVsIHRvIGVuYWJsZSBmb3IgbG9nZ2luZy5cbiAqIE9wdGlvbnMgZnJvbSBtb3N0IHZlcmJvc2UgdG8gbGVhc3QgdmVyYm9zZSBhcmU6XG4gKiAtIHZlcmJvc2VcbiAqIC0gaW5mb1xuICogLSB3YXJuaW5nXG4gKiAtIGVycm9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbD86IEF6dXJlTG9nTGV2ZWwpOiB2b2lkIHtcbiAgY29udGV4dC5zZXRMb2dMZXZlbChsZXZlbCk7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBjdXJyZW50bHkgc3BlY2lmaWVkIGxvZyBsZXZlbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ0xldmVsKCk6IEF6dXJlTG9nTGV2ZWwgfCB1bmRlZmluZWQge1xuICByZXR1cm4gY29udGV4dC5nZXRMb2dMZXZlbCgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBsb2dnZXIgZm9yIHVzZSBieSB0aGUgQXp1cmUgU0RLcyB0aGF0IGluaGVyaXRzIGZyb20gYEF6dXJlTG9nZ2VyYC5cbiAqIEBwYXJhbSBuYW1lc3BhY2UgLSBUaGUgbmFtZSBvZiB0aGUgU0RLIHBhY2thZ2UuXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDbGllbnRMb2dnZXIobmFtZXNwYWNlOiBzdHJpbmcpOiBBenVyZUxvZ2dlciB7XG4gIHJldHVybiBjb250ZXh0LmNyZWF0ZUNsaWVudExvZ2dlcihuYW1lc3BhY2UpO1xufVxuXG4vKipcbiAqIEEgbG9nIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIGR5bmFtaWNhbGx5IGVuYWJsZWQgYW5kIHJlZGlyZWN0ZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVidWdnZXIge1xuICAvKipcbiAgICogTG9ncyB0aGUgZ2l2ZW4gYXJndW1lbnRzIHRvIHRoZSBgbG9nYCBtZXRob2QuXG4gICAqL1xuICAoLi4uYXJnczogYW55W10pOiB2b2lkO1xuICAvKipcbiAgICogVHJ1ZSBpZiB0aGlzIGxvZ2dlciBpcyBhY3RpdmUgYW5kIGxvZ2dpbmcuXG4gICAqL1xuICBlbmFibGVkOiBib29sZWFuO1xuICAvKipcbiAgICogVXNlZCB0byBjbGVhbnVwL3JlbW92ZSB0aGlzIGxvZ2dlci5cbiAgICovXG4gIGRlc3Ryb3k6ICgpID0+IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBsb2cgbWV0aG9kLiBDYW4gYmUgb3ZlcnJpZGRlbiB0byByZWRpcmVjdCBvdXRwdXQuXG4gICAqL1xuICBsb2c6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIFRoZSBuYW1lc3BhY2Ugb2YgdGhpcyBsb2dnZXIuXG4gICAqL1xuICBuYW1lc3BhY2U6IHN0cmluZztcbiAgLyoqXG4gICAqIEV4dGVuZHMgdGhpcyBsb2dnZXIgd2l0aCBhIGNoaWxkIG5hbWVzcGFjZS5cbiAgICogTmFtZXNwYWNlcyBhcmUgc2VwYXJhdGVkIHdpdGggYSAnOicgY2hhcmFjdGVyLlxuICAgKi9cbiAgZXh0ZW5kOiAobmFtZXNwYWNlOiBzdHJpbmcpID0+IERlYnVnZ2VyO1xufVxuXG4vKipcbiAqIFRoZSBsb2cgbGV2ZWxzIHN1cHBvcnRlZCBieSB0aGUgbG9nZ2VyLlxuICogVGhlIGxvZyBsZXZlbHMgaW4gb3JkZXIgb2YgbW9zdCB2ZXJib3NlIHRvIGxlYXN0IHZlcmJvc2UgYXJlOlxuICogLSB2ZXJib3NlXG4gKiAtIGluZm9cbiAqIC0gd2FybmluZ1xuICogLSBlcnJvclxuICovXG5leHBvcnQgdHlwZSBBenVyZUxvZ0xldmVsID0gXCJ2ZXJib3NlXCIgfCBcImluZm9cIiB8IFwid2FybmluZ1wiIHwgXCJlcnJvclwiO1xuXG4vKipcbiAqIEFuIEF6dXJlQ2xpZW50TG9nZ2VyIGlzIGEgZnVuY3Rpb24gdGhhdCBjYW4gbG9nIHRvIGFuIGFwcHJvcHJpYXRlIHNldmVyaXR5IGxldmVsLlxuICovXG5leHBvcnQgdHlwZSBBenVyZUNsaWVudExvZ2dlciA9IERlYnVnZ2VyO1xuXG4vKipcbiAqIERlZmluZXMgdGhlIG1ldGhvZHMgYXZhaWxhYmxlIG9uIHRoZSBTREstZmFjaW5nIGxvZ2dlci5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZWRlY2xhcmVcbmV4cG9ydCBpbnRlcmZhY2UgQXp1cmVMb2dnZXIge1xuICAvKipcbiAgICogVXNlZCBmb3IgZmFpbHVyZXMgdGhlIHByb2dyYW0gaXMgdW5saWtlbHkgdG8gcmVjb3ZlciBmcm9tLFxuICAgKiBzdWNoIGFzIE91dCBvZiBNZW1vcnkuXG4gICAqL1xuICBlcnJvcjogRGVidWdnZXI7XG4gIC8qKlxuICAgKiBVc2VkIHdoZW4gYSBmdW5jdGlvbiBmYWlscyB0byBwZXJmb3JtIGl0cyBpbnRlbmRlZCB0YXNrLlxuICAgKiBVc3VhbGx5IHRoaXMgbWVhbnMgdGhlIGZ1bmN0aW9uIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uLlxuICAgKiBOb3QgdXNlZCBmb3Igc2VsZi1oZWFsaW5nIGV2ZW50cyAoZS5nLiBhdXRvbWF0aWMgcmV0cnkpXG4gICAqL1xuICB3YXJuaW5nOiBEZWJ1Z2dlcjtcbiAgLyoqXG4gICAqIFVzZWQgd2hlbiBhIGZ1bmN0aW9uIG9wZXJhdGVzIG5vcm1hbGx5LlxuICAgKi9cbiAgaW5mbzogRGVidWdnZXI7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBkZXRhaWxlZCB0cm91Ymxlc2hvb3Rpbmcgc2NlbmFyaW9zLiBUaGlzIGlzXG4gICAqIGludGVuZGVkIGZvciB1c2UgYnkgZGV2ZWxvcGVycyAvIHN5c3RlbSBhZG1pbmlzdHJhdG9yc1xuICAgKiBmb3IgZGlhZ25vc2luZyBzcGVjaWZpYyBmYWlsdXJlcy5cbiAgICovXG4gIHZlcmJvc2U6IERlYnVnZ2VyO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNsaWVudExvZ2dlciB9IGZyb20gXCJAYXp1cmUvbG9nZ2VyXCI7XG5jb25zdCBsb2dnZXIgPSBjcmVhdGVDbGllbnRMb2dnZXIoXCJ3ZWItcHVic3ViLWNsaWVudFwiKTtcbmV4cG9ydCB7XG4gIGxvZ2dlclxufTtcbiIsICJpbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiYnVmZmVyXCI7XG5mdW5jdGlvbiBwYXJzZU1lc3NhZ2VzKGlucHV0KSB7XG4gIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0IGZvciBKU09OIGh1YiBwcm90b2NvbC4gRXhwZWN0ZWQgYSBzdHJpbmcuXCIpO1xuICB9XG4gIGlmICghaW5wdXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBpbnB1dFwiKTtcbiAgfVxuICBjb25zdCBwYXJzZWRNZXNzYWdlID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gIGNvbnN0IHR5cGVkTWVzc2FnZSA9IHBhcnNlZE1lc3NhZ2U7XG4gIGxldCByZXR1cm5NZXNzYWdlO1xuICBpZiAodHlwZWRNZXNzYWdlLnR5cGUgPT09IFwic3lzdGVtXCIpIHtcbiAgICBpZiAodHlwZWRNZXNzYWdlLmV2ZW50ID09PSBcImNvbm5lY3RlZFwiKSB7XG4gICAgICByZXR1cm5NZXNzYWdlID0geyAuLi5wYXJzZWRNZXNzYWdlLCBraW5kOiBcImNvbm5lY3RlZFwiIH07XG4gICAgfSBlbHNlIGlmICh0eXBlZE1lc3NhZ2UuZXZlbnQgPT09IFwiZGlzY29ubmVjdGVkXCIpIHtcbiAgICAgIHJldHVybk1lc3NhZ2UgPSB7IC4uLnBhcnNlZE1lc3NhZ2UsIGtpbmQ6IFwiZGlzY29ubmVjdGVkXCIgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVkTWVzc2FnZS50eXBlID09PSBcIm1lc3NhZ2VcIikge1xuICAgIGlmICh0eXBlZE1lc3NhZ2UuZnJvbSA9PT0gXCJncm91cFwiKSB7XG4gICAgICBjb25zdCBkYXRhID0gcGFyc2VQYXlsb2FkKHBhcnNlZE1lc3NhZ2UuZGF0YSwgcGFyc2VkTWVzc2FnZS5kYXRhVHlwZSk7XG4gICAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybk1lc3NhZ2UgPSB7IC4uLnBhcnNlZE1lc3NhZ2UsIGRhdGEsIGtpbmQ6IFwiZ3JvdXBEYXRhXCIgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVkTWVzc2FnZS5mcm9tID09PSBcInNlcnZlclwiKSB7XG4gICAgICBjb25zdCBkYXRhID0gcGFyc2VQYXlsb2FkKHBhcnNlZE1lc3NhZ2UuZGF0YSwgcGFyc2VkTWVzc2FnZS5kYXRhVHlwZSk7XG4gICAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybk1lc3NhZ2UgPSB7XG4gICAgICAgIC4uLnBhcnNlZE1lc3NhZ2UsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGtpbmQ6IFwic2VydmVyRGF0YVwiXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZWRNZXNzYWdlLnR5cGUgPT09IFwiYWNrXCIpIHtcbiAgICByZXR1cm5NZXNzYWdlID0geyAuLi5wYXJzZWRNZXNzYWdlLCBraW5kOiBcImFja1wiIH07XG4gIH0gZWxzZSBpZiAodHlwZWRNZXNzYWdlLnR5cGUgPT09IFwiaW52b2tlUmVzcG9uc2VcIikge1xuICAgIGxldCBkYXRhO1xuICAgIGlmIChwYXJzZWRNZXNzYWdlLmRhdGFUeXBlICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnNlZERhdGEgPSBwYXJzZVBheWxvYWQocGFyc2VkTWVzc2FnZS5kYXRhLCBwYXJzZWRNZXNzYWdlLmRhdGFUeXBlKTtcbiAgICAgIGlmIChwYXJzZWREYXRhID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgZGF0YSA9IHBhcnNlZERhdGE7XG4gICAgfVxuICAgIHJldHVybk1lc3NhZ2UgPSB7XG4gICAgICBraW5kOiBcImludm9rZVJlc3BvbnNlXCIsXG4gICAgICBpbnZvY2F0aW9uSWQ6IHBhcnNlZE1lc3NhZ2UuaW52b2NhdGlvbklkLFxuICAgICAgc3VjY2VzczogcGFyc2VkTWVzc2FnZS5zdWNjZXNzLFxuICAgICAgZGF0YVR5cGU6IHBhcnNlZE1lc3NhZ2UuZGF0YVR5cGUsXG4gICAgICBkYXRhLFxuICAgICAgZXJyb3I6IHBhcnNlZE1lc3NhZ2UuZXJyb3JcbiAgICB9O1xuICB9IGVsc2UgaWYgKHR5cGVkTWVzc2FnZS50eXBlID09PSBcImNhbmNlbEludm9jYXRpb25cIikge1xuICAgIHJldHVybk1lc3NhZ2UgPSB7XG4gICAgICAuLi5wYXJzZWRNZXNzYWdlLFxuICAgICAga2luZDogXCJjYW5jZWxJbnZvY2F0aW9uXCJcbiAgICB9O1xuICB9IGVsc2UgaWYgKHR5cGVkTWVzc2FnZS50eXBlID09PSBcInBvbmdcIikge1xuICAgIHJldHVybk1lc3NhZ2UgPSB7IC4uLnBhcnNlZE1lc3NhZ2UsIGtpbmQ6IFwicG9uZ1wiIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHJldHVybk1lc3NhZ2U7XG59XG5mdW5jdGlvbiB3cml0ZU1lc3NhZ2UobWVzc2FnZSkge1xuICBsZXQgZGF0YTtcbiAgc3dpdGNoIChtZXNzYWdlLmtpbmQpIHtcbiAgICBjYXNlIFwiam9pbkdyb3VwXCI6IHtcbiAgICAgIGRhdGEgPSB7IHR5cGU6IFwiam9pbkdyb3VwXCIsIGdyb3VwOiBtZXNzYWdlLmdyb3VwLCBhY2tJZDogbWVzc2FnZS5hY2tJZCB9O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgXCJsZWF2ZUdyb3VwXCI6IHtcbiAgICAgIGRhdGEgPSB7IHR5cGU6IFwibGVhdmVHcm91cFwiLCBncm91cDogbWVzc2FnZS5ncm91cCwgYWNrSWQ6IG1lc3NhZ2UuYWNrSWQgfTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwic2VuZEV2ZW50XCI6IHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIHR5cGU6IFwiZXZlbnRcIixcbiAgICAgICAgZXZlbnQ6IG1lc3NhZ2UuZXZlbnQsXG4gICAgICAgIGFja0lkOiBtZXNzYWdlLmFja0lkLFxuICAgICAgICBkYXRhVHlwZTogbWVzc2FnZS5kYXRhVHlwZSxcbiAgICAgICAgZGF0YTogZ2V0UGF5bG9hZChtZXNzYWdlLmRhdGEsIG1lc3NhZ2UuZGF0YVR5cGUpXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgXCJzZW5kVG9Hcm91cFwiOiB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICB0eXBlOiBcInNlbmRUb0dyb3VwXCIsXG4gICAgICAgIGdyb3VwOiBtZXNzYWdlLmdyb3VwLFxuICAgICAgICBhY2tJZDogbWVzc2FnZS5hY2tJZCxcbiAgICAgICAgZGF0YVR5cGU6IG1lc3NhZ2UuZGF0YVR5cGUsXG4gICAgICAgIGRhdGE6IGdldFBheWxvYWQobWVzc2FnZS5kYXRhLCBtZXNzYWdlLmRhdGFUeXBlKSxcbiAgICAgICAgbm9FY2hvOiBtZXNzYWdlLm5vRWNob1xuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwic2VxdWVuY2VBY2tcIjoge1xuICAgICAgZGF0YSA9IHsgdHlwZTogXCJzZXF1ZW5jZUFja1wiLCBzZXF1ZW5jZUlkOiBtZXNzYWdlLnNlcXVlbmNlSWQgfTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiaW52b2tlXCI6IHtcbiAgICAgIGNvbnN0IGludm9rZVBheWxvYWQgPSB7XG4gICAgICAgIHR5cGU6IFwiaW52b2tlXCIsXG4gICAgICAgIGludm9jYXRpb25JZDogbWVzc2FnZS5pbnZvY2F0aW9uSWQsXG4gICAgICAgIHRhcmdldDogbWVzc2FnZS50YXJnZXQsXG4gICAgICAgIGV2ZW50OiBtZXNzYWdlLmV2ZW50XG4gICAgICB9O1xuICAgICAgaWYgKG1lc3NhZ2UuZGF0YVR5cGUgIT0gbnVsbCAmJiBtZXNzYWdlLmRhdGEgIT0gbnVsbCkge1xuICAgICAgICBpbnZva2VQYXlsb2FkLmRhdGFUeXBlID0gbWVzc2FnZS5kYXRhVHlwZTtcbiAgICAgICAgaW52b2tlUGF5bG9hZC5kYXRhID0gZ2V0UGF5bG9hZChtZXNzYWdlLmRhdGEsIG1lc3NhZ2UuZGF0YVR5cGUpO1xuICAgICAgfVxuICAgICAgZGF0YSA9IGludm9rZVBheWxvYWQ7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBcImludm9rZVJlc3BvbnNlXCI6IHtcbiAgICAgIGNvbnN0IGludm9rZVJlc3BvbnNlID0ge1xuICAgICAgICB0eXBlOiBcImludm9rZVJlc3BvbnNlXCIsXG4gICAgICAgIGludm9jYXRpb25JZDogbWVzc2FnZS5pbnZvY2F0aW9uSWQsXG4gICAgICAgIHN1Y2Nlc3M6IG1lc3NhZ2Uuc3VjY2VzcyxcbiAgICAgICAgZXJyb3I6IG1lc3NhZ2UuZXJyb3JcbiAgICAgIH07XG4gICAgICBpZiAobWVzc2FnZS5kYXRhVHlwZSAhPSBudWxsICYmIG1lc3NhZ2UuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgIGludm9rZVJlc3BvbnNlLmRhdGFUeXBlID0gbWVzc2FnZS5kYXRhVHlwZTtcbiAgICAgICAgaW52b2tlUmVzcG9uc2UuZGF0YSA9IGdldFBheWxvYWQobWVzc2FnZS5kYXRhLCBtZXNzYWdlLmRhdGFUeXBlKTtcbiAgICAgIH1cbiAgICAgIGRhdGEgPSBpbnZva2VSZXNwb25zZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiY2FuY2VsSW52b2NhdGlvblwiOiB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICB0eXBlOiBcImNhbmNlbEludm9jYXRpb25cIixcbiAgICAgICAgaW52b2NhdGlvbklkOiBtZXNzYWdlLmludm9jYXRpb25JZFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwicGluZ1wiOiB7XG4gICAgICBkYXRhID0geyB0eXBlOiBcInBpbmdcIiB9O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgdHlwZTogJHttZXNzYWdlLmtpbmR9YCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbn1cbmZ1bmN0aW9uIGdldFBheWxvYWQoZGF0YSwgZGF0YVR5cGUpIHtcbiAgc3dpdGNoIChkYXRhVHlwZSkge1xuICAgIGNhc2UgXCJ0ZXh0XCI6IHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWVzc2FnZSBtdXN0IGJlIGEgc3RyaW5nLlwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBjYXNlIFwianNvblwiOiB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgY2FzZSBcImJpbmFyeVwiOlxuICAgIGNhc2UgXCJwcm90b2J1ZlwiOiB7XG4gICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShkYXRhKS50b1N0cmluZyhcImJhc2U2NFwiKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNZXNzYWdlIG11c3QgYmUgYSBBcnJheUJ1ZmZlclwiKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlUGF5bG9hZChkYXRhLCBkYXRhVHlwZSkge1xuICBpZiAoZGF0YVR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWVzc2FnZSBtdXN0IGJlIGEgc3RyaW5nIHdoZW4gZGF0YVR5cGUgaXMgdGV4dFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09IFwianNvblwiKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09IFwiYmluYXJ5XCIgfHwgZGF0YVR5cGUgPT09IFwicHJvdG9idWZcIikge1xuICAgIGNvbnN0IGJ1ZiA9IEJ1ZmZlci5mcm9tKGRhdGEsIFwiYmFzZTY0XCIpO1xuICAgIHJldHVybiBidWYuYnVmZmVyLnNsaWNlKGJ1Zi5ieXRlT2Zmc2V0LCBidWYuYnl0ZU9mZnNldCArIGJ1Zi5ieXRlTGVuZ3RoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuZXhwb3J0IHtcbiAgcGFyc2VNZXNzYWdlcyxcbiAgd3JpdGVNZXNzYWdlXG59O1xuIiwgImltcG9ydCAqIGFzIGJhc2UgZnJvbSBcIi4vanNvblByb3RvY29sQmFzZS5qc1wiO1xuY2xhc3MgV2ViUHViU3ViSnNvblJlbGlhYmxlUHJvdG9jb2xJbXBsIHtcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHByb3RvY29sIHN1cHBvcnRzIHJlbGlhYmxlIGZlYXR1cmVzXG4gICAqL1xuICBpc1JlbGlhYmxlU3ViUHJvdG9jb2wgPSB0cnVlO1xuICAvKipcbiAgICogVGhlIG5hbWUgb2Ygc3VicHJvdG9jb2wuIE5hbWUgd2lsbCBiZSB1c2VkIGluIHdlYnNvY2tldCBzdWJwcm90b2NvbFxuICAgKi9cbiAgbmFtZSA9IFwianNvbi5yZWxpYWJsZS53ZWJwdWJzdWIuYXp1cmUudjFcIjtcbiAgLyoqXG4gICAqIENyZWF0ZXMgV2ViUHViU3ViTWVzc2FnZSBvYmplY3RzIGZyb20gdGhlIHNwZWNpZmllZCBzZXJpYWxpemVkIHJlcHJlc2VudGF0aW9uLlxuICAgKiBAcGFyYW0gaW5wdXQgLSBUaGUgc2VyaWFsaXplZCByZXByZXNlbnRhdGlvblxuICAgKi9cbiAgcGFyc2VNZXNzYWdlcyhpbnB1dCkge1xuICAgIHJldHVybiBiYXNlLnBhcnNlTWVzc2FnZXMoaW5wdXQpO1xuICB9XG4gIC8qKlxuICAgKiBXcml0ZSBXZWJQdWJTdWJNZXNzYWdlIHRvIHN0cmluZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIGJlIHdyaXR0ZW5cbiAgICovXG4gIHdyaXRlTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGJhc2Uud3JpdGVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG59XG5leHBvcnQge1xuICBXZWJQdWJTdWJKc29uUmVsaWFibGVQcm90b2NvbEltcGxcbn07XG4iLCAiaW1wb3J0IHsgV2ViUHViU3ViSnNvblByb3RvY29sSW1wbCB9IGZyb20gXCIuL3dlYlB1YlN1Ykpzb25Qcm90b2NvbC5qc1wiO1xuaW1wb3J0IHsgV2ViUHViU3ViSnNvblJlbGlhYmxlUHJvdG9jb2xJbXBsIH0gZnJvbSBcIi4vd2ViUHViU3ViSnNvblJlbGlhYmxlUHJvdG9jb2wuanNcIjtcbmNvbnN0IFdlYlB1YlN1Ykpzb25Qcm90b2NvbCA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBXZWJQdWJTdWJKc29uUHJvdG9jb2xJbXBsKCk7XG59O1xuY29uc3QgV2ViUHViU3ViSnNvblJlbGlhYmxlUHJvdG9jb2wgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgV2ViUHViU3ViSnNvblJlbGlhYmxlUHJvdG9jb2xJbXBsKCk7XG59O1xuZXhwb3J0IHtcbiAgV2ViUHViU3ViSnNvblByb3RvY29sLFxuICBXZWJQdWJTdWJKc29uUmVsaWFibGVQcm90b2NvbFxufTtcbiIsICJpbXBvcnQgY3JlYXRlV2ViU29ja2V0U3RyZWFtIGZyb20gJy4vbGliL3N0cmVhbS5qcyc7XG5pbXBvcnQgZXh0ZW5zaW9uIGZyb20gJy4vbGliL2V4dGVuc2lvbi5qcyc7XG5pbXBvcnQgUGVyTWVzc2FnZURlZmxhdGUgZnJvbSAnLi9saWIvcGVybWVzc2FnZS1kZWZsYXRlLmpzJztcbmltcG9ydCBSZWNlaXZlciBmcm9tICcuL2xpYi9yZWNlaXZlci5qcyc7XG5pbXBvcnQgU2VuZGVyIGZyb20gJy4vbGliL3NlbmRlci5qcyc7XG5pbXBvcnQgc3VicHJvdG9jb2wgZnJvbSAnLi9saWIvc3VicHJvdG9jb2wuanMnO1xuaW1wb3J0IFdlYlNvY2tldCBmcm9tICcuL2xpYi93ZWJzb2NrZXQuanMnO1xuaW1wb3J0IFdlYlNvY2tldFNlcnZlciBmcm9tICcuL2xpYi93ZWJzb2NrZXQtc2VydmVyLmpzJztcblxuZXhwb3J0IHtcbiAgY3JlYXRlV2ViU29ja2V0U3RyZWFtLFxuICBleHRlbnNpb24sXG4gIFBlck1lc3NhZ2VEZWZsYXRlLFxuICBSZWNlaXZlcixcbiAgU2VuZGVyLFxuICBzdWJwcm90b2NvbCxcbiAgV2ViU29ja2V0LFxuICBXZWJTb2NrZXRTZXJ2ZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdlYlNvY2tldDtcbiIsICJpbXBvcnQgV2ViU29ja2V0IGZyb20gXCJ3c1wiO1xuY2xhc3MgV2ViU29ja2V0Q2xpZW50IHtcbiAgX3NvY2tldDtcbiAgY29uc3RydWN0b3IodXJpLCBwcm90b2NvbE5hbWUpIHtcbiAgICB0aGlzLl9zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVyaSwgcHJvdG9jb2xOYW1lKTtcbiAgICB0aGlzLl9zb2NrZXQuYmluYXJ5VHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgfVxuICBvbm9wZW4oZm4pIHtcbiAgICB0aGlzLl9zb2NrZXQub25vcGVuID0gZm47XG4gIH1cbiAgb25jbG9zZShmbikge1xuICAgIHRoaXMuX3NvY2tldC5vbmNsb3NlID0gKGV2ZW50KSA9PiBmbihldmVudC5jb2RlLCBldmVudC5yZWFzb24pO1xuICB9XG4gIG9uZXJyb3IoZm4pIHtcbiAgICB0aGlzLl9zb2NrZXQub25lcnJvciA9IChldmVudCkgPT4gZm4oZXZlbnQuZXJyb3IpO1xuICB9XG4gIG9ubWVzc2FnZShmbikge1xuICAgIHRoaXMuX3NvY2tldC5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IGZuKGV2ZW50LmRhdGEpO1xuICB9XG4gIGNsb3NlKGNvZGUsIHJlYXNvbikge1xuICAgIHRoaXMuX3NvY2tldC5jbG9zZShjb2RlLCByZWFzb24pO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG4gIHNlbmQoZGF0YSwgXykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9zb2NrZXQuc2VuZChkYXRhLCAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOO1xuICB9XG59XG5jbGFzcyBXZWJTb2NrZXRDbGllbnRGYWN0b3J5IHtcbiAgY3JlYXRlKHVyaSwgcHJvdG9jb2xOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBXZWJTb2NrZXRDbGllbnQodXJpLCBwcm90b2NvbE5hbWUpO1xuICB9XG59XG5leHBvcnQge1xuICBXZWJTb2NrZXRDbGllbnQsXG4gIFdlYlNvY2tldENsaWVudEZhY3Rvcnlcbn07XG4iLCAiaW1wb3J0IHsgQWJvcnRFcnJvciB9IGZyb20gXCJAYXp1cmUvYWJvcnQtY29udHJvbGxlclwiO1xuYXN5bmMgZnVuY3Rpb24gYWJvcnRhYmxlUHJvbWlzZShwcm9taXNlLCBzaWduYWwpIHtcbiAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgdGhyb3cgbmV3IEFib3J0RXJyb3IoXCJUaGUgb3BlcmF0aW9uIHdhcyBhYm9ydGVkLlwiKTtcbiAgfVxuICBsZXQgb25BYm9ydDtcbiAgY29uc3QgcCA9IG5ldyBQcm9taXNlKChfLCByZWplY3QpID0+IHtcbiAgICBvbkFib3J0ID0gKCkgPT4ge1xuICAgICAgcmVqZWN0KG5ldyBBYm9ydEVycm9yKFwiVGhlIG9wZXJhdGlvbiB3YXMgYWJvcnRlZC5cIikpO1xuICAgIH07XG4gICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgfSk7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmFjZShbcHJvbWlzZSwgcF0pO1xuICB9IGZpbmFsbHkge1xuICAgIHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIGFib3J0YWJsZVByb21pc2Vcbn07XG4iLCAiaW1wb3J0IHsgU2VuZE1lc3NhZ2VFcnJvciB9IGZyb20gXCIuL2Vycm9ycy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgYWJvcnRhYmxlUHJvbWlzZSB9IGZyb20gXCIuL3V0aWxzL2Fib3J0YWJsZVByb21pc2UuanNcIjtcbmNsYXNzIEFja01hbmFnZXIge1xuICBfYWNrRW50cmllcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIF9hY2tJZDtcbiAgY29uc3RydWN0b3IoaW5pdGlhbEFja0lkID0gMCkge1xuICAgIHRoaXMuX2Fja0lkID0gaW5pdGlhbEFja0lkO1xuICB9XG4gIHJlZ2lzdGVyQWNrKGFja0lkKSB7XG4gICAgY29uc3QgcmVzb2x2ZWRBY2tJZCA9IGFja0lkID8/IHRoaXMuX2dlbmVyYXRlQWNrSWQoKTtcbiAgICBsZXQgZW50cnkgPSB0aGlzLl9hY2tFbnRyaWVzLmdldChyZXNvbHZlZEFja0lkKTtcbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICBlbnRyeSA9IG5ldyBBY2tFbnRpdHkocmVzb2x2ZWRBY2tJZCk7XG4gICAgICB0aGlzLl9hY2tFbnRyaWVzLnNldChyZXNvbHZlZEFja0lkLCBlbnRyeSk7XG4gICAgfVxuICAgIGNvbnN0IGFja0VudHJ5ID0gZW50cnk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFja0lkOiByZXNvbHZlZEFja0lkLFxuICAgICAgd2FpdDogKGFib3J0U2lnbmFsKSA9PiB0aGlzLl93YWl0Rm9yRW50cnkoYWNrRW50cnksIGFib3J0U2lnbmFsKVxuICAgIH07XG4gIH1cbiAgcmVzb2x2ZUFjayhhY2tJZCwgcmVzdWx0KSB7XG4gICAgY29uc3QgZW50cnkgPSB0aGlzLl9hY2tFbnRyaWVzLmdldChhY2tJZCk7XG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9hY2tFbnRyaWVzLmRlbGV0ZShhY2tJZCk7XG4gICAgZW50cnkucmVzb2x2ZShyZXN1bHQpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJlamVjdEFjayhhY2tJZCwgcmVhc29uKSB7XG4gICAgY29uc3QgZW50cnkgPSB0aGlzLl9hY2tFbnRyaWVzLmdldChhY2tJZCk7XG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9hY2tFbnRyaWVzLmRlbGV0ZShhY2tJZCk7XG4gICAgZW50cnkucmVqZWN0KHJlYXNvbik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZGlzY2FyZChhY2tJZCkge1xuICAgIHRoaXMuX2Fja0VudHJpZXMuZGVsZXRlKGFja0lkKTtcbiAgfVxuICByZWplY3RBbGwoY3JlYXRlUmVhc29uKSB7XG4gICAgdGhpcy5fYWNrRW50cmllcy5mb3JFYWNoKChlbnRyeSwgYWNrSWQpID0+IHtcbiAgICAgIGlmICh0aGlzLl9hY2tFbnRyaWVzLmRlbGV0ZShhY2tJZCkpIHtcbiAgICAgICAgZW50cnkucmVqZWN0KGNyZWF0ZVJlYXNvbihhY2tJZCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIF93YWl0Rm9yRW50cnkoZW50cnksIGFib3J0U2lnbmFsKSB7XG4gICAgaWYgKCFhYm9ydFNpZ25hbCkge1xuICAgICAgcmV0dXJuIGVudHJ5LnByb21pc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGFib3J0YWJsZVByb21pc2UoZW50cnkucHJvbWlzZSgpLCBhYm9ydFNpZ25hbCkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yICYmIGVyci5uYW1lID09PSBcIkFib3J0RXJyb3JcIikge1xuICAgICAgICB0aHJvdyBuZXcgU2VuZE1lc3NhZ2VFcnJvcihcIkNhbmNlbGxlZCBieSBhYm9ydFNpZ25hbFwiLCB7IGFja0lkOiBlbnRyeS5hY2tJZCB9KTtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxuICBfZ2VuZXJhdGVBY2tJZCgpIHtcbiAgICB0aGlzLl9hY2tJZCArPSAxO1xuICAgIHJldHVybiB0aGlzLl9hY2tJZDtcbiAgfVxufVxuY2xhc3MgQWNrRW50aXR5IHtcbiAgY29uc3RydWN0b3IoYWNrSWQpIHtcbiAgICB0aGlzLmFja0lkID0gYWNrSWQ7XG4gICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuICB9XG4gIF9wcm9taXNlO1xuICBfcmVzb2x2ZTtcbiAgX3JlamVjdDtcbiAgcHJvbWlzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcbiAgfVxuICByZXNvbHZlKHZhbHVlKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLl9yZXNvbHZlO1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcmVzb2x2ZSA9IHZvaWQgMDtcbiAgICB0aGlzLl9yZWplY3QgPSB2b2lkIDA7XG4gICAgY2FsbGJhY2sodmFsdWUpO1xuICB9XG4gIHJlamVjdChyZWFzb24pIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuX3JlamVjdDtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3Jlc29sdmUgPSB2b2lkIDA7XG4gICAgdGhpcy5fcmVqZWN0ID0gdm9pZCAwO1xuICAgIGNhbGxiYWNrKHJlYXNvbik7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIEFja01hbmFnZXJcbn07XG4iLCAiaW1wb3J0IHsgSW52b2NhdGlvbkVycm9yIH0gZnJvbSBcIi4vZXJyb3JzL2luZGV4LmpzXCI7XG5jbGFzcyBJbnZvY2F0aW9uTWFuYWdlciB7XG4gIF9lbnRyaWVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgX25leHRJZCA9IDA7XG4gIHJlZ2lzdGVySW52b2NhdGlvbihpbnZvY2F0aW9uSWQpIHtcbiAgICBjb25zdCByZXNvbHZlZElkID0gaW52b2NhdGlvbklkID8/IHRoaXMuX2dlbmVyYXRlSW52b2NhdGlvbklkKCk7XG4gICAgaWYgKHRoaXMuX2VudHJpZXMuaGFzKHJlc29sdmVkSWQpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52b2NhdGlvbkVycm9yKFwiSW52b2NhdGlvbiBpZCBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuXCIsIHtcbiAgICAgICAgaW52b2NhdGlvbklkOiByZXNvbHZlZElkXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgZW50aXR5ID0gbmV3IEludm9jYXRpb25FbnRpdHkocmVzb2x2ZWRJZCk7XG4gICAgdGhpcy5fZW50cmllcy5zZXQocmVzb2x2ZWRJZCwgZW50aXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgaW52b2NhdGlvbklkOiByZXNvbHZlZElkLFxuICAgICAgd2FpdDogKG9wdGlvbnMpID0+IHRoaXMuX3dhaXRGb3JFbnRyeShlbnRpdHksIG9wdGlvbnMpXG4gICAgfTtcbiAgfVxuICByZXNvbHZlSW52b2NhdGlvbihtZXNzYWdlKSB7XG4gICAgY29uc3QgZW50cnkgPSB0aGlzLl9lbnRyaWVzLmdldChtZXNzYWdlLmludm9jYXRpb25JZCk7XG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9lbnRyaWVzLmRlbGV0ZShtZXNzYWdlLmludm9jYXRpb25JZCk7XG4gICAgZW50cnkucmVzb2x2ZShtZXNzYWdlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZWplY3RJbnZvY2F0aW9uKGludm9jYXRpb25JZCwgcmVhc29uKSB7XG4gICAgY29uc3QgZW50cnkgPSB0aGlzLl9lbnRyaWVzLmdldChpbnZvY2F0aW9uSWQpO1xuICAgIGlmICghZW50cnkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fZW50cmllcy5kZWxldGUoaW52b2NhdGlvbklkKTtcbiAgICBlbnRyeS5yZWplY3QocmVhc29uKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBkaXNjYXJkKGludm9jYXRpb25JZCkge1xuICAgIHRoaXMuX2VudHJpZXMuZGVsZXRlKGludm9jYXRpb25JZCk7XG4gIH1cbiAgcmVqZWN0QWxsKGNyZWF0ZVJlYXNvbikge1xuICAgIHRoaXMuX2VudHJpZXMuZm9yRWFjaCgoZW50cnksIGludm9jYXRpb25JZCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2VudHJpZXMuZGVsZXRlKGludm9jYXRpb25JZCkpIHtcbiAgICAgICAgZW50cnkucmVqZWN0KGNyZWF0ZVJlYXNvbihpbnZvY2F0aW9uSWQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfd2FpdEZvckVudHJ5KGVudHJ5LCBvcHRpb25zKSB7XG4gICAgY29uc3Qgd2FpdFByb21pc2UgPSBlbnRyeS5wcm9taXNlKCk7XG4gICAgY29uc3QgYWJvcnRTaWduYWwgPSBvcHRpb25zPy5hYm9ydFNpZ25hbDtcbiAgICBpZiAoIWFib3J0U2lnbmFsKSB7XG4gICAgICByZXR1cm4gd2FpdFByb21pc2U7XG4gICAgfVxuICAgIGlmIChhYm9ydFNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICBpZiAodGhpcy5fZW50cmllcy5kZWxldGUoZW50cnkuaW52b2NhdGlvbklkKSkge1xuICAgICAgICBlbnRyeS5yZWplY3QodGhpcy5fY3JlYXRlQWJvcnRFcnJvcihlbnRyeS5pbnZvY2F0aW9uSWQpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3YWl0UHJvbWlzZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9uQWJvcnQgPSAoKSA9PiB7XG4gICAgICAgIGFib3J0U2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICAgICAgaWYgKHRoaXMuX2VudHJpZXMuZGVsZXRlKGVudHJ5Lmludm9jYXRpb25JZCkpIHtcbiAgICAgICAgICBlbnRyeS5yZWplY3QodGhpcy5fY3JlYXRlQWJvcnRFcnJvcihlbnRyeS5pbnZvY2F0aW9uSWQpKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFib3J0U2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICAgIHdhaXRQcm9taXNlLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBhYm9ydFNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGFib3J0U2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgX2dlbmVyYXRlSW52b2NhdGlvbklkKCkge1xuICAgIHRoaXMuX25leHRJZCArPSAxO1xuICAgIHJldHVybiB0aGlzLl9uZXh0SWQudG9TdHJpbmcoKTtcbiAgfVxuICBfY3JlYXRlQWJvcnRFcnJvcihpbnZvY2F0aW9uSWQpIHtcbiAgICByZXR1cm4gbmV3IEludm9jYXRpb25FcnJvcihcIkludm9jYXRpb24gY2FuY2VsbGVkIGJ5IGFib3J0U2lnbmFsLlwiLCB7XG4gICAgICBpbnZvY2F0aW9uSWRcbiAgICB9KTtcbiAgfVxufVxuY2xhc3MgSW52b2NhdGlvbkVudGl0eSB7XG4gIGNvbnN0cnVjdG9yKGludm9jYXRpb25JZCkge1xuICAgIHRoaXMuaW52b2NhdGlvbklkID0gaW52b2NhdGlvbklkO1xuICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgfVxuICBfcHJvbWlzZTtcbiAgX3Jlc29sdmU7XG4gIF9yZWplY3Q7XG4gIHByb21pc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG4gIH1cbiAgcmVzb2x2ZSh2YWx1ZSkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5fcmVzb2x2ZTtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3Jlc29sdmUgPSB2b2lkIDA7XG4gICAgdGhpcy5fcmVqZWN0ID0gdm9pZCAwO1xuICAgIGNhbGxiYWNrKHZhbHVlKTtcbiAgfVxuICByZWplY3QocmVhc29uKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLl9yZWplY3Q7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZXNvbHZlID0gdm9pZCAwO1xuICAgIHRoaXMuX3JlamVjdCA9IHZvaWQgMDtcbiAgICBjYWxsYmFjayhyZWFzb24pO1xuICB9XG59XG5leHBvcnQge1xuICBJbnZvY2F0aW9uTWFuYWdlclxufTtcbiIsICJpbXBvcnQgZnMgZnJvbSBcIm5vZGU6ZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJub2RlOnBhdGhcIjtcbmltcG9ydCBvcyBmcm9tIFwibm9kZTpvc1wiO1xuXG5leHBvcnQgdHlwZSBDcmVkZW50aWFscyA9IHtcbiAgYXp1cmVfaHViX3VybDogc3RyaW5nO1xuICBjbGllbnRfaWQ6IHN0cmluZztcbiAgcmVnaXN0cmF0aW9uX3Rva2VuOiBzdHJpbmc7XG4gIHRvcGljX2lkZW50aWZpZXI/OiBzdHJpbmc7XG4gIGJ2Z2VlcnRfaG9zdD86IHN0cmluZztcbiAgYWNjZXNzX3VybD86IHN0cmluZztcbiAgYWNjZXNzX3VybF9leHBpcmVzX2F0Pzogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gZGVmYXVsdFBhdGgoKTogc3RyaW5nIHtcbiAgY29uc3QgeGRnID0gcHJvY2Vzcy5lbnYuWERHX0NPTkZJR19IT01FO1xuICBjb25zdCBiYXNlID0geGRnID8geGRnIDogcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgXCIuY29uZmlnXCIpO1xuICByZXR1cm4gcGF0aC5qb2luKGJhc2UsIFwiYnZnLWRlYW1vblwiLCBcImNyZWRlbnRpYWxzLmpzb25cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVkZW50aWFsc1BhdGgoKTogc3RyaW5nIHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52LkJWR19ERUFNT05fQ1JFREVOVElBTFMgPz8gZGVmYXVsdFBhdGgoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDcmVkZW50aWFscygpOiBDcmVkZW50aWFscyB8IG51bGwge1xuICBjb25zdCBwID0gY3JlZGVudGlhbHNQYXRoKCk7XG4gIGlmICghZnMuZXhpc3RzU3luYyhwKSkgcmV0dXJuIG51bGw7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHAsIFwidXRmOFwiKSkgYXMgQ3JlZGVudGlhbHM7XG4gICAgaWYgKCFkYXRhLmF6dXJlX2h1Yl91cmwgfHwgIWRhdGEuY2xpZW50X2lkIHx8ICFkYXRhLnJlZ2lzdHJhdGlvbl90b2tlbikgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlQ3JlZGVudGlhbHMoY3JlZHM6IENyZWRlbnRpYWxzKTogc3RyaW5nIHtcbiAgY29uc3QgcCA9IGNyZWRlbnRpYWxzUGF0aCgpO1xuICBmcy5ta2RpclN5bmMocGF0aC5kaXJuYW1lKHApLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgZnMud3JpdGVGaWxlU3luYyhwLCBKU09OLnN0cmluZ2lmeShjcmVkcywgbnVsbCwgMiksIHsgbW9kZTogMG82MDAgfSk7XG4gIHJldHVybiBwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2lwZUNyZWRlbnRpYWxzKCk6IHZvaWQge1xuICBjb25zdCBwID0gY3JlZGVudGlhbHNQYXRoKCk7XG4gIGlmIChmcy5leGlzdHNTeW5jKHApKSBmcy51bmxpbmtTeW5jKHApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLDBDQUFBQSxVQUFBQyxTQUFBO0FBQUEsUUFBSSxJQUFJLFdBQVcsQ0FBQztBQUFwQixRQUF1QixPQUFPLEVBQUUsUUFBUSxDQUFDO0FBQXpDLFFBQTRDLE1BQU0sRUFBRSxPQUFPLENBQUM7QUFDNUQsUUFBSSxtQkFDSCxFQUFFLENBQUMsQ0FBQyxJQUFJLFlBQVksS0FBSyxTQUFTLFlBQVksT0FDN0MsQ0FBQyxDQUFDLElBQUksZUFBZSxLQUFL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RUFBRSxRQUFRLElBQUk7QUFjcEIsUUFBTSxhQUFhO0FBQUEsTUFDakI7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQTtBQUFBLE1BQzdDO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUE7QUFBQSxNQUM3QztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBO0FBQUEsTUFDN0M7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQTtBQUFBLE1BQzdDO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUE7QUFBQSxNQUM3QztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFB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RyxJQUFJLEVBQUUsVUFBVSxHQUFHLEVBQUUsT0FBTyxLQUFLLEVBQUUsSUFBSSxNQUFNLEVBQUUsV0FBTSxFQUFFLElBQUksRUFBRTtBQUFBLEVBQ2pGO0FBQ0Y7QUFFQSxlQUFlLFFBQVEsTUFBaUM7QUFDdEQsUUFBTSxRQUFRLGFBQWE7QUFDM0IsUUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUk7QUFDMUIsTUFBSSxDQUFDLFVBQVUsS0FBSyxXQUFXLEdBQUc7QUFDaEMsWUFBUSxNQUFNLGtCQUFBQSxRQUFHLElBQUkscURBQXFELENBQUM7QUFDM0UsV0FBTztBQUFBLEVBQ1Q7QUFDQSxRQUFNLE9BQU8sS0FBSyxLQUFLLEdBQUc7QUFDMUIsUUFBTSxTQUFTLGFBQWEsS0FBSztBQUNqQyxRQUFNLE9BQU8sTUFBTTtBQUNuQixRQUFNLFFBQVEsUUFBUSxPQUFPLFFBQVEsSUFBSTtBQUN6QyxRQUFNLE9BQU8sS0FBSztBQUNsQixTQUFPO0FBQ1Q7QUFFQSxLQUFLLEVBQUUsS0FBSyxDQUFDLFNBQVMsUUFBUSxLQUFLLElBQUksQ0FBQzsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJtb2R1bGUiLCAiZW5hYmxlZCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJQZXJNZXNzYWdlRGVmbGF0ZSIsICJkYXRhIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlBlck1lc3NhZ2VEZWZsYXRlIiwgIlJlY2VpdmVyIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlBlck1lc3NhZ2VEZWZsYXRlIiwgIlNlbmRlciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHRlbnNpb24iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiRXZlbnRFbWl0dGVyIiwgIlVSTCIsICJQZXJNZXNzYWdlRGVmbGF0ZSIsICJSZWNlaXZlciIsICJTZW5kZXIiLCAiV2ViU29ja2V0IiwgImtleSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJXZWJTb2NrZXQiLCAiY3JlYXRlV2ViU29ja2V0U3RyZWFtIiwgImVyciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJwcm90b2NvbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJFdmVudEVtaXR0ZXIiLCAiZXh0ZW5zaW9uIiwgIlBlck1lc3NhZ2VEZWZsYXRlIiwgInN1YnByb3RvY29sIiwgIldlYlNvY2tldCIsICJXZWJTb2NrZXRTZXJ2ZXIiLCAicHJvY2VzcyIsICJ1dGlsIiwgImVuYWJsZWROYW1lc3BhY2VzIiwgImxvZ2dlciIsICJjb250ZXh0IiwgImNvbnRleHQiLCAiV2ViU29ja2V0IiwgIkV2ZW50RW1pdHRlciIsICJpbXBvcnRfbm9kZV9vcyIsICJwYXRoIiwgIm9zIiwgImZzIiwgInBjIiwgInBhdGgiLCAicmVhZGxpbmUiXQp9Cg==
