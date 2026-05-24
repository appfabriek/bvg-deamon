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
var import_picocolors2 = __toESM(require_picocolors());

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
function credentialMode(creds) {
  if (creds.bvgeert_host) return "direct";
  if (creds.azure_hub_url) return "azure";
  return null;
}
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
    if (!data.client_id || !data.registration_token) return null;
    if (!credentialMode(data)) return null;
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

// src/cli/direct.ts
var import_picocolors = __toESM(require_picocolors());
function baseUrl(host) {
  if (host.startsWith("http://") || host.startsWith("https://")) return host.replace(/\/$/, "");
  return `https://${host}`;
}
function wsBaseUrl(host) {
  return baseUrl(host).replace(/^http/, "ws");
}
async function redeemDirect(host, token) {
  const url = `${baseUrl(host)}/api/v1/transport/redeem`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({ token })
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`redeem failed (${res.status}): ${body}`);
  }
  return await res.json();
}
async function joinDirect(host, token, transport) {
  console.log(import_picocolors.default.cyan(`connecting to bvgeert at ${host}...`));
  const r = await redeemDirect(host, token);
  const path2 = saveCredentials({
    client_id: r.client_identifier,
    registration_token: r.registration_token,
    transport_token: r.transport_token,
    bvgeert_host: host,
    cable_url: r.websocket_url,
    connection_identifier: r.connection_identifier ?? transport
  });
  console.log(import_picocolors.default.green(`paired as ${r.client_identifier} on ${r.connection_identifier ?? transport ?? "(unknown)"}`));
  console.log(`credentials: ${path2}`);
  return 0;
}
async function daemonDirect(creds) {
  const cableUrl = creds.cable_url ?? `${wsBaseUrl(creds.bvgeert_host)}/cable`;
  const wsToken = creds.transport_token ?? creds.registration_token;
  const url = `${cableUrl}?transport_token=${encodeURIComponent(wsToken)}`;
  const debug = process.env.BVG_DEBUG === "1";
  const dbg = (...a) => {
    if (debug) console.error(import_picocolors.default.dim("[debug]"), ...a);
  };
  console.log(import_picocolors.default.cyan(`connecting WSS ${cableUrl}...`));
  const WS = globalThis.WebSocket;
  if (!WS) {
    console.error(import_picocolors.default.red("Node lacks global WebSocket. Require Node >= 22."));
    return 1;
  }
  const ws = new WS(url, ["actioncable-v1-json"]);
  const connId = creds.connection_identifier;
  const subId = JSON.stringify({ channel: "TransportChannel", connection_identifier: connId });
  return await new Promise((resolve) => {
    ws.addEventListener("open", () => {
      dbg("ws open");
    });
    ws.addEventListener("message", (event) => {
      const raw = typeof event.data === "string" ? event.data : new TextDecoder().decode(event.data);
      dbg("ws msg", raw);
      let msg;
      try {
        msg = JSON.parse(raw);
      } catch {
        return;
      }
      if (msg.type === "welcome") {
        ws.send(JSON.stringify({ command: "subscribe", identifier: subId }));
      } else if (msg.type === "ping" || msg.type === "confirm_subscription") {
      } else if (msg.identifier && msg.message) {
        const env = msg.message;
        console.log(import_picocolors.default.bold(`#${env.sequence ?? "?"}`), import_picocolors.default.dim(env.message_type ?? ""), import_picocolors.default.cyan(env.payload ?? ""));
      } else if (msg.type === "reject_subscription") {
        console.error(import_picocolors.default.red("subscription rejected"));
        ws.close();
        resolve(2);
      }
    });
    ws.addEventListener("error", (e) => {
      console.error(import_picocolors.default.red("ws error"), e?.message ?? e);
    });
    ws.addEventListener("close", (e) => {
      dbg("ws close", e?.code, e?.reason);
      resolve(0);
    });
    process.on("SIGINT", () => {
      ws.close();
      resolve(0);
    });
    process.on("SIGTERM", () => {
      ws.close();
      resolve(0);
    });
  });
}

// src/cli/index.ts
var VERSION = true ? "0.4.5" : "unknown";
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
  if (cmd === "--version" || cmd === "-v" || cmd === "version") {
    console.log(VERSION);
    return 0;
  }
  const fn = subcommands[cmd];
  if (!fn) {
    console.error(import_picocolors2.default.red(`unknown subcommand: ${cmd}`));
    printUsage();
    return 2;
  }
  try {
    return await fn(rest);
  } catch (err) {
    console.error(import_picocolors2.default.red(err instanceof Error ? err.message : String(err)));
    return 1;
  }
}
function printUsage() {
  console.error(`
bvg-deamon \u2014 pure-Azure transport client for bvgeert

Usage:
  bvg-deamon join --hub <wss://x.webpubsub.azure.com/client/hubs/<hub>> --transport <identifier> [--token <jt_xxx>]
      anonymously connect to bvgeert via Azure, request to join a
      transport, print a pairing code and wait for admin approval.
      With --token (or env BVG_JOIN_TOKEN), redeem a pre-approved
      join token instead of waiting for an admin \u2014 skips the pair-code
      step entirely.

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
  const host = parseFlag(args, "host") ?? process.env.BVG_BVGEERT_HOST;
  const tokenFlag = parseFlag(args, "token");
  const token = tokenFlag ?? process.env.BVG_JOIN_TOKEN ?? void 0;
  const transport = parseFlag(args, "transport") ?? process.env.BVG_TRANSPORT;
  if (host && token) {
    return await joinDirect(host, token, transport);
  }
  const hub = parseFlag(args, "hub") ?? process.env.BVG_AZURE_HUB;
  if (!hub || !transport) {
    console.error(import_picocolors2.default.red("usage: bvg-deamon join --host <bvgeert-host> --token <jt_xxx>     (directe route)"));
    console.error(import_picocolors2.default.red("       bvg-deamon join --hub <wss-url> --transport <id> [--token <jt_xxx>]   (Azure-route)"));
    return 2;
  }
  const debug = process.env.BVG_DEBUG === "1";
  const dbg = (...a) => {
    if (debug) console.error(import_picocolors2.default.dim("[debug]"), ...a);
  };
  console.log(import_picocolors2.default.cyan(token ? "connecting to Azure (token redeem)..." : "connecting to Azure anonymously..."));
  const client = new WebPubSubClient({ getClientAccessUrl: async () => hub }, { protocol: WebPubSubJsonProtocol() });
  let approved = null;
  let denied = false;
  let topicRequested = false;
  let tokenRedeemed = false;
  let connectionId = null;
  client.on("connected", async (e) => {
    connectionId = e.connectionId;
    dbg("connected", { connectionId: e.connectionId, userId: e.userId });
    if (token && !tokenRedeemed) {
      tokenRedeemed = true;
      dbg("redeeming join token");
      await client.sendEvent("redeem_join_token", { token, topic_identifier: transport }, "json", { fireAndForget: true });
    }
  });
  client.on("disconnected", (e) => {
    dbg("disconnected", { message: e.message });
  });
  client.on("stopped", () => dbg("stopped"));
  client.on("server-message", async (e) => {
    dbg("server-message raw:", JSON.stringify(e.message.data));
    const msg = asSystemMsg(e.message.data);
    if (!msg) return;
    if (msg.type === "pairing.code") {
      if (token) return;
      console.log("");
      console.log(import_picocolors2.default.bold("pair code:"), import_picocolors2.default.cyan(msg.code));
      if (msg.admin_url) console.log(`approve in admin: ${msg.admin_url}`);
      console.log(`expires: ${msg.expires_at}`);
      console.log(import_picocolors2.default.dim("\nwaiting for approval \u2014 Ctrl+C to cancel\n"));
      if (!topicRequested) {
        topicRequested = true;
        await client.sendEvent("pairing_request_topic", { topic_identifier: transport }, "json", { fireAndForget: true });
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
    console.error(import_picocolors2.default.red("denied by admin"));
    return 3;
  }
  if (!approved) {
    console.error(import_picocolors2.default.red("timeout waiting for approval"));
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
  console.log(import_picocolors2.default.green(`paired as ${approved.client_id} on transport ${transport}`));
  console.log(`credentials: ${path2}`);
  console.log(import_picocolors2.default.dim(`bootstrap connectionId was ${connectionId}`));
  return 0;
}
async function cmdUnpair(_args) {
  wipeCredentials();
  console.log(import_picocolors2.default.green("local credentials wiped"));
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
    console.error(import_picocolors2.default.red("not paired \u2014 run `bvg-deamon join` first"));
    process.exit(2);
  }
  return creds;
}
async function cmdDaemon(_args) {
  const creds = requireCreds();
  if (credentialMode(creds) === "direct") {
    return await daemonDirect(creds);
  }
  const client = authedClient(creds);
  let lastSender = null;
  client.on("connected", (e) => {
    console.log(import_picocolors2.default.green(`connected \u2014 connectionId=${e.connectionId} userId=${e.userId}`));
    console.log(import_picocolors2.default.dim(`transport: ${creds.topic_identifier ?? "(unknown)"}`));
    console.log(import_picocolors2.default.dim("type 'reply <text>' to reply to last sender, 'help' for commands"));
  });
  client.on("disconnected", (e) => {
    console.log(import_picocolors2.default.yellow(`disconnected \u2014 ${e.message ?? ""}`));
  });
  const handleEnvelope = (data) => {
    if (data?.type === "token.refresh") return;
    const sender = data?.sender_identifier ?? "(unknown)";
    const target = data?.target_identifier;
    if (target && target !== creds.client_id) return;
    const payload = typeof data?.payload === "string" ? data.payload : JSON.stringify(data?.payload);
    console.log(`${import_picocolors2.default.cyan("[" + sender + "]")} ${data?.message_type ?? ""}: ${payload}`);
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
      console.log(import_picocolors2.default.dim("commands: reply <text> | send <identifier> <text> | clients | quit"));
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
        console.error(import_picocolors2.default.red(err instanceof Error ? err.message : String(err)));
      }
      return;
    }
    const replyMatch = line.match(/^reply\s+(.+)$/);
    if (replyMatch) {
      if (!lastSender) {
        console.log(import_picocolors2.default.yellow("no last sender to reply to"));
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
    console.log(import_picocolors2.default.yellow("unknown command \u2014 try 'help'"));
  });
  return new Promise((resolve) => {
    const shutdown = async (sig) => {
      console.log(import_picocolors2.default.dim(`
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
  console.log(import_picocolors2.default.green(`sent to ${targetIdentifier}: ${text}`));
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
  await client.sendEvent("clients_list", { topic_identifier: creds.topic_identifier }, "json", { fireAndForget: true });
  const startedAt = Date.now();
  while (!result && Date.now() - startedAt < 1e4) {
    await new Promise((r) => setTimeout(r, 100));
  }
  await client.stop();
  if (!result) throw new Error("timeout waiting for clients list");
  const entries = onlineOnly ? result.clients.filter((c) => c.online) : result.clients;
  for (const c of entries) {
    const dot = c.online ? import_picocolors2.default.green("\u25CF") : import_picocolors2.default.dim("\u25CB");
    console.log(`${dot} ${c.identifier}${c.name ? ` (${c.name})` : ""} \u2014 ${c.kind}`);
  }
}
async function cmdSend(args) {
  const creds = requireCreds();
  const [target, ...rest] = args;
  if (!target || rest.length === 0) {
    console.error(import_picocolors2.default.red("usage: bvg-deamon send <target-identifier|*> <text>"));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL3BpY29jb2xvcnMvcGljb2NvbG9ycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL2NvbnN0YW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL2J1ZmZlci11dGlsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy93cy9saWIvbGltaXRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3Blcm1lc3NhZ2UtZGVmbGF0ZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3ZhbGlkYXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3dzL2xpYi9yZWNlaXZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3NlbmRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL2V2ZW50LXRhcmdldC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL2V4dGVuc2lvbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3dlYnNvY2tldC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3N0cmVhbS5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3N1YnByb3RvY29sLmpzIiwgIi4uL25vZGVfbW9kdWxlcy93cy9saWIvd2Vic29ja2V0LXNlcnZlci5qcyIsICIuLi9zcmMvY2xpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AdHlwZXNwZWMvdHMtaHR0cC1ydW50aW1lL3NyYy91dGlsL2NoZWNrRW52aXJvbm1lbnQudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BhenVyZS9hYm9ydC1jb250cm9sbGVyL3NyYy9BYm9ydEVycm9yLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvY29yZS11dGlsL3NyYy9jcmVhdGVBYm9ydGFibGVQcm9taXNlLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvY29yZS11dGlsL3NyYy9kZWxheS50cyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL3dlYlB1YlN1YkNsaWVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL2Vycm9ycy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHR5cGVzcGVjL3RzLWh0dHAtcnVudGltZS9zcmMvbG9nZ2VyL2xvZy50cyIsICIuLi9ub2RlX21vZHVsZXMvQHR5cGVzcGVjL3RzLWh0dHAtcnVudGltZS9zcmMvbG9nZ2VyL2RlYnVnLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AdHlwZXNwZWMvdHMtaHR0cC1ydW50aW1lL3NyYy9sb2dnZXIvbG9nZ2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvbG9nZ2VyL3NyYy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL2xvZ2dlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL3Byb3RvY29scy9qc29uUHJvdG9jb2xCYXNlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvd2ViLXB1YnN1Yi1jbGllbnQvZGlzdC9lc20vcHJvdG9jb2xzL3dlYlB1YlN1Ykpzb25Qcm90b2NvbC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL3Byb3RvY29scy93ZWJQdWJTdWJKc29uUmVsaWFibGVQcm90b2NvbC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL3Byb3RvY29scy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3Mvd3JhcHBlci5tanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BhenVyZS93ZWItcHVic3ViLWNsaWVudC9kaXN0L2VzbS93ZWJzb2NrZXQvd2Vic29ja2V0Q2xpZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvd2ViLXB1YnN1Yi1jbGllbnQvZGlzdC9lc20vdXRpbHMvYWJvcnRhYmxlUHJvbWlzZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL2Fja01hbmFnZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BhenVyZS93ZWItcHVic3ViLWNsaWVudC9kaXN0L2VzbS9pbnZvY2F0aW9uTWFuYWdlci5qcyIsICIuLi9zcmMvY2xpL2NyZWRlbnRpYWxzLnRzIiwgIi4uL3NyYy9jbGkvZGlyZWN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJsZXQgcCA9IHByb2Nlc3MgfHwge30sIGFyZ3YgPSBwLmFyZ3YgfHwgW10sIGVudiA9IHAuZW52IHx8IHt9XG5sZXQgaXNDb2xvclN1cHBvcnRlZCA9XG5cdCEoISFlbnYuTk9fQ09MT1IgfHwgYXJndi5pbmNsdWRlcyhcIi0tbm8tY29sb3JcIikpICYmXG5cdCghIWVudi5GT1JDRV9DT0xPUiB8fCBhcmd2LmluY2x1ZGVzKFwiLS1jb2xvclwiKSB8fCBwLnBsYXRmb3JtID09PSBcIndpbjMyXCIgfHwgKChwLnN0ZG91dCB8fCB7fSkuaXNUVFkgJiYgZW52LlRFUk0gIT09IFwiZHVtYlwiKSB8fCAhIWVudi5DSSlcblxubGV0IGZvcm1hdHRlciA9IChvcGVuLCBjbG9zZSwgcmVwbGFjZSA9IG9wZW4pID0+XG5cdGlucHV0ID0+IHtcblx0XHRsZXQgc3RyaW5nID0gXCJcIiArIGlucHV0LCBpbmRleCA9IHN0cmluZy5pbmRleE9mKGNsb3NlLCBvcGVuLmxlbmd0aClcblx0XHRyZXR1cm4gfmluZGV4ID8gb3BlbiArIHJlcGxhY2VDbG9zZShzdHJpbmcsIGNsb3NlLCByZXBsYWNlLCBpbmRleCkgKyBjbG9zZSA6IG9wZW4gKyBzdHJpbmcgKyBjbG9zZVxuXHR9XG5cbmxldCByZXBsYWNlQ2xvc2UgPSAoc3RyaW5nLCBjbG9zZSwgcmVwbGFjZSwgaW5kZXgpID0+IHtcblx0bGV0IHJlc3VsdCA9IFwiXCIsIGN1cnNvciA9IDBcblx0ZG8ge1xuXHRcdHJlc3VsdCArPSBzdHJpbmcuc3Vic3RyaW5nKGN1cnNvciwgaW5kZXgpICsgcmVwbGFjZVxuXHRcdGN1cnNvciA9IGluZGV4ICsgY2xvc2UubGVuZ3RoXG5cdFx0aW5kZXggPSBzdHJpbmcuaW5kZXhPZihjbG9zZSwgY3Vyc29yKVxuXHR9IHdoaWxlICh+aW5kZXgpXG5cdHJldHVybiByZXN1bHQgKyBzdHJpbmcuc3Vic3RyaW5nKGN1cnNvcilcbn1cblxubGV0IGNyZWF0ZUNvbG9ycyA9IChlbmFibGVkID0gaXNDb2xvclN1cHBvcnRlZCkgPT4ge1xuXHRsZXQgZiA9IGVuYWJsZWQgPyBmb3JtYXR0ZXIgOiAoKSA9PiBTdHJpbmdcblx0cmV0dXJuIHtcblx0XHRpc0NvbG9yU3VwcG9ydGVkOiBlbmFibGVkLFxuXHRcdHJlc2V0OiBmKFwiXFx4MWJbMG1cIiwgXCJcXHgxYlswbVwiKSxcblx0XHRib2xkOiBmKFwiXFx4MWJbMW1cIiwgXCJcXHgxYlsyMm1cIiwgXCJcXHgxYlsyMm1cXHgxYlsxbVwiKSxcblx0XHRkaW06IGYoXCJcXHgxYlsybVwiLCBcIlxceDFiWzIybVwiLCBcIlxceDFiWzIybVxceDFiWzJtXCIpLFxuXHRcdGl0YWxpYzogZihcIlxceDFiWzNtXCIsIFwiXFx4MWJbMjNtXCIpLFxuXHRcdHVuZGVybGluZTogZihcIlxceDFiWzRtXCIsIFwiXFx4MWJbMjRtXCIpLFxuXHRcdGludmVyc2U6IGYoXCJcXHgxYls3bVwiLCBcIlxceDFiWzI3bVwiKSxcblx0XHRoaWRkZW46IGYoXCJcXHgxYls4bVwiLCBcIlxceDFiWzI4bVwiKSxcblx0XHRzdHJpa2V0aHJvdWdoOiBmKFwiXFx4MWJbOW1cIiwgXCJcXHgxYlsyOW1cIiksXG5cblx0XHRibGFjazogZihcIlxceDFiWzMwbVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRyZWQ6IGYoXCJcXHgxYlszMW1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0Z3JlZW46IGYoXCJcXHgxYlszMm1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0eWVsbG93OiBmKFwiXFx4MWJbMzNtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdGJsdWU6IGYoXCJcXHgxYlszNG1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0bWFnZW50YTogZihcIlxceDFiWzM1bVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRjeWFuOiBmKFwiXFx4MWJbMzZtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdHdoaXRlOiBmKFwiXFx4MWJbMzdtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdGdyYXk6IGYoXCJcXHgxYls5MG1cIiwgXCJcXHgxYlszOW1cIiksXG5cblx0XHRiZ0JsYWNrOiBmKFwiXFx4MWJbNDBtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnUmVkOiBmKFwiXFx4MWJbNDFtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnR3JlZW46IGYoXCJcXHgxYls0Mm1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdZZWxsb3c6IGYoXCJcXHgxYls0M21cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdCbHVlOiBmKFwiXFx4MWJbNDRtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnTWFnZW50YTogZihcIlxceDFiWzQ1bVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ0N5YW46IGYoXCJcXHgxYls0Nm1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdXaGl0ZTogZihcIlxceDFiWzQ3bVwiLCBcIlxceDFiWzQ5bVwiKSxcblxuXHRcdGJsYWNrQnJpZ2h0OiBmKFwiXFx4MWJbOTBtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdHJlZEJyaWdodDogZihcIlxceDFiWzkxbVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRncmVlbkJyaWdodDogZihcIlxceDFiWzkybVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHR5ZWxsb3dCcmlnaHQ6IGYoXCJcXHgxYls5M21cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0Ymx1ZUJyaWdodDogZihcIlxceDFiWzk0bVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRtYWdlbnRhQnJpZ2h0OiBmKFwiXFx4MWJbOTVtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdGN5YW5CcmlnaHQ6IGYoXCJcXHgxYls5Nm1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0d2hpdGVCcmlnaHQ6IGYoXCJcXHgxYls5N21cIiwgXCJcXHgxYlszOW1cIiksXG5cblx0XHRiZ0JsYWNrQnJpZ2h0OiBmKFwiXFx4MWJbMTAwbVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ1JlZEJyaWdodDogZihcIlxceDFiWzEwMW1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdHcmVlbkJyaWdodDogZihcIlxceDFiWzEwMm1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdZZWxsb3dCcmlnaHQ6IGYoXCJcXHgxYlsxMDNtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnQmx1ZUJyaWdodDogZihcIlxceDFiWzEwNG1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdNYWdlbnRhQnJpZ2h0OiBmKFwiXFx4MWJbMTA1bVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ0N5YW5CcmlnaHQ6IGYoXCJcXHgxYlsxMDZtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnV2hpdGVCcmlnaHQ6IGYoXCJcXHgxYlsxMDdtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ29sb3JzKClcbm1vZHVsZS5leHBvcnRzLmNyZWF0ZUNvbG9ycyA9IGNyZWF0ZUNvbG9yc1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQklOQVJZX1RZUEVTID0gWydub2RlYnVmZmVyJywgJ2FycmF5YnVmZmVyJywgJ2ZyYWdtZW50cyddO1xuY29uc3QgaGFzQmxvYiA9IHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJztcblxuaWYgKGhhc0Jsb2IpIEJJTkFSWV9UWVBFUy5wdXNoKCdibG9iJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBCSU5BUllfVFlQRVMsXG4gIENMT1NFX1RJTUVPVVQ6IDMwMDAwLFxuICBFTVBUWV9CVUZGRVI6IEJ1ZmZlci5hbGxvYygwKSxcbiAgR1VJRDogJzI1OEVBRkE1LUU5MTQtNDdEQS05NUNBLUM1QUIwREM4NUIxMScsXG4gIGhhc0Jsb2IsXG4gIGtGb3JPbkV2ZW50QXR0cmlidXRlOiBTeW1ib2woJ2tJc0Zvck9uRXZlbnRBdHRyaWJ1dGUnKSxcbiAga0xpc3RlbmVyOiBTeW1ib2woJ2tMaXN0ZW5lcicpLFxuICBrU3RhdHVzQ29kZTogU3ltYm9sKCdzdGF0dXMtY29kZScpLFxuICBrV2ViU29ja2V0OiBTeW1ib2woJ3dlYnNvY2tldCcpLFxuICBOT09QOiAoKSA9PiB7fVxufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHsgRU1QVFlfQlVGRkVSIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5jb25zdCBGYXN0QnVmZmVyID0gQnVmZmVyW1N5bWJvbC5zcGVjaWVzXTtcblxuLyoqXG4gKiBNZXJnZXMgYW4gYXJyYXkgb2YgYnVmZmVycyBpbnRvIGEgbmV3IGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcltdfSBsaXN0IFRoZSBhcnJheSBvZiBidWZmZXJzIHRvIGNvbmNhdFxuICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsTGVuZ3RoIFRoZSB0b3RhbCBsZW5ndGggb2YgYnVmZmVycyBpbiB0aGUgbGlzdFxuICogQHJldHVybiB7QnVmZmVyfSBUaGUgcmVzdWx0aW5nIGJ1ZmZlclxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBjb25jYXQobGlzdCwgdG90YWxMZW5ndGgpIHtcbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gRU1QVFlfQlVGRkVSO1xuICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHJldHVybiBsaXN0WzBdO1xuXG4gIGNvbnN0IHRhcmdldCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZSh0b3RhbExlbmd0aCk7XG4gIGxldCBvZmZzZXQgPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGJ1ZiA9IGxpc3RbaV07XG4gICAgdGFyZ2V0LnNldChidWYsIG9mZnNldCk7XG4gICAgb2Zmc2V0ICs9IGJ1Zi5sZW5ndGg7XG4gIH1cblxuICBpZiAob2Zmc2V0IDwgdG90YWxMZW5ndGgpIHtcbiAgICByZXR1cm4gbmV3IEZhc3RCdWZmZXIodGFyZ2V0LmJ1ZmZlciwgdGFyZ2V0LmJ5dGVPZmZzZXQsIG9mZnNldCk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIE1hc2tzIGEgYnVmZmVyIHVzaW5nIHRoZSBnaXZlbiBtYXNrLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBzb3VyY2UgVGhlIGJ1ZmZlciB0byBtYXNrXG4gKiBAcGFyYW0ge0J1ZmZlcn0gbWFzayBUaGUgbWFzayB0byB1c2VcbiAqIEBwYXJhbSB7QnVmZmVyfSBvdXRwdXQgVGhlIGJ1ZmZlciB3aGVyZSB0byBzdG9yZSB0aGUgcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IFRoZSBvZmZzZXQgYXQgd2hpY2ggdG8gc3RhcnQgd3JpdGluZ1xuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRvIG1hc2suXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIF9tYXNrKHNvdXJjZSwgbWFzaywgb3V0cHV0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0W29mZnNldCArIGldID0gc291cmNlW2ldIF4gbWFza1tpICYgM107XG4gIH1cbn1cblxuLyoqXG4gKiBVbm1hc2tzIGEgYnVmZmVyIHVzaW5nIHRoZSBnaXZlbiBtYXNrLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byB1bm1hc2tcbiAqIEBwYXJhbSB7QnVmZmVyfSBtYXNrIFRoZSBtYXNrIHRvIHVzZVxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBfdW5tYXNrKGJ1ZmZlciwgbWFzaykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1ZmZlci5sZW5ndGg7IGkrKykge1xuICAgIGJ1ZmZlcltpXSBePSBtYXNrW2kgJiAzXTtcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgYnVmZmVyIHRvIGFuIGBBcnJheUJ1ZmZlcmAuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZiBUaGUgYnVmZmVyIHRvIGNvbnZlcnRcbiAqIEByZXR1cm4ge0FycmF5QnVmZmVyfSBDb252ZXJ0ZWQgYnVmZmVyXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXlCdWZmZXIoYnVmKSB7XG4gIGlmIChidWYubGVuZ3RoID09PSBidWYuYnVmZmVyLmJ5dGVMZW5ndGgpIHtcbiAgICByZXR1cm4gYnVmLmJ1ZmZlcjtcbiAgfVxuXG4gIHJldHVybiBidWYuYnVmZmVyLnNsaWNlKGJ1Zi5ieXRlT2Zmc2V0LCBidWYuYnl0ZU9mZnNldCArIGJ1Zi5sZW5ndGgpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBkYXRhYCB0byBhIGBCdWZmZXJgLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgZGF0YSB0byBjb252ZXJ0XG4gKiBAcmV0dXJuIHtCdWZmZXJ9IFRoZSBidWZmZXJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdG9CdWZmZXIoZGF0YSkge1xuICB0b0J1ZmZlci5yZWFkT25seSA9IHRydWU7XG5cbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihkYXRhKSkgcmV0dXJuIGRhdGE7XG5cbiAgbGV0IGJ1ZjtcblxuICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgYnVmID0gbmV3IEZhc3RCdWZmZXIoZGF0YSk7XG4gIH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpKSB7XG4gICAgYnVmID0gbmV3IEZhc3RCdWZmZXIoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoKTtcbiAgfSBlbHNlIHtcbiAgICBidWYgPSBCdWZmZXIuZnJvbShkYXRhKTtcbiAgICB0b0J1ZmZlci5yZWFkT25seSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGJ1Zjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbmNhdCxcbiAgbWFzazogX21hc2ssXG4gIHRvQXJyYXlCdWZmZXIsXG4gIHRvQnVmZmVyLFxuICB1bm1hc2s6IF91bm1hc2tcbn07XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICAqL1xuaWYgKCFwcm9jZXNzLmVudi5XU19OT19CVUZGRVJfVVRJTCkge1xuICB0cnkge1xuICAgIGNvbnN0IGJ1ZmZlclV0aWwgPSByZXF1aXJlKCdidWZmZXJ1dGlsJyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cy5tYXNrID0gZnVuY3Rpb24gKHNvdXJjZSwgbWFzaywgb3V0cHV0LCBvZmZzZXQsIGxlbmd0aCkge1xuICAgICAgaWYgKGxlbmd0aCA8IDQ4KSBfbWFzayhzb3VyY2UsIG1hc2ssIG91dHB1dCwgb2Zmc2V0LCBsZW5ndGgpO1xuICAgICAgZWxzZSBidWZmZXJVdGlsLm1hc2soc291cmNlLCBtYXNrLCBvdXRwdXQsIG9mZnNldCwgbGVuZ3RoKTtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHMudW5tYXNrID0gZnVuY3Rpb24gKGJ1ZmZlciwgbWFzaykge1xuICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPCAzMikgX3VubWFzayhidWZmZXIsIG1hc2spO1xuICAgICAgZWxzZSBidWZmZXJVdGlsLnVubWFzayhidWZmZXIsIG1hc2spO1xuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBDb250aW51ZSByZWdhcmRsZXNzIG9mIHRoZSBlcnJvci5cbiAgfVxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3Qga0RvbmUgPSBTeW1ib2woJ2tEb25lJyk7XG5jb25zdCBrUnVuID0gU3ltYm9sKCdrUnVuJyk7XG5cbi8qKlxuICogQSB2ZXJ5IHNpbXBsZSBqb2IgcXVldWUgd2l0aCBhZGp1c3RhYmxlIGNvbmN1cnJlbmN5LiBBZGFwdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9TVFJNTC9hc3luYy1saW1pdGVyXG4gKi9cbmNsYXNzIExpbWl0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBgTGltaXRlcmAuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbY29uY3VycmVuY3k9SW5maW5pdHldIFRoZSBtYXhpbXVtIG51bWJlciBvZiBqb2JzIGFsbG93ZWRcbiAgICogICAgIHRvIHJ1biBjb25jdXJyZW50bHlcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmN1cnJlbmN5KSB7XG4gICAgdGhpc1trRG9uZV0gPSAoKSA9PiB7XG4gICAgICB0aGlzLnBlbmRpbmctLTtcbiAgICAgIHRoaXNba1J1bl0oKTtcbiAgICB9O1xuICAgIHRoaXMuY29uY3VycmVuY3kgPSBjb25jdXJyZW5jeSB8fCBJbmZpbml0eTtcbiAgICB0aGlzLmpvYnMgPSBbXTtcbiAgICB0aGlzLnBlbmRpbmcgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBqb2IgdG8gdGhlIHF1ZXVlLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBqb2IgVGhlIGpvYiB0byBydW5cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgYWRkKGpvYikge1xuICAgIHRoaXMuam9icy5wdXNoKGpvYik7XG4gICAgdGhpc1trUnVuXSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBqb2IgZnJvbSB0aGUgcXVldWUgYW5kIHJ1bnMgaXQgaWYgcG9zc2libGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBba1J1bl0oKSB7XG4gICAgaWYgKHRoaXMucGVuZGluZyA9PT0gdGhpcy5jb25jdXJyZW5jeSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuam9icy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGpvYiA9IHRoaXMuam9icy5zaGlmdCgpO1xuXG4gICAgICB0aGlzLnBlbmRpbmcrKztcbiAgICAgIGpvYih0aGlzW2tEb25lXSk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGltaXRlcjtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHpsaWIgPSByZXF1aXJlKCd6bGliJyk7XG5cbmNvbnN0IGJ1ZmZlclV0aWwgPSByZXF1aXJlKCcuL2J1ZmZlci11dGlsJyk7XG5jb25zdCBMaW1pdGVyID0gcmVxdWlyZSgnLi9saW1pdGVyJyk7XG5jb25zdCB7IGtTdGF0dXNDb2RlIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5jb25zdCBGYXN0QnVmZmVyID0gQnVmZmVyW1N5bWJvbC5zcGVjaWVzXTtcbmNvbnN0IFRSQUlMRVIgPSBCdWZmZXIuZnJvbShbMHgwMCwgMHgwMCwgMHhmZiwgMHhmZl0pO1xuY29uc3Qga1Blck1lc3NhZ2VEZWZsYXRlID0gU3ltYm9sKCdwZXJtZXNzYWdlLWRlZmxhdGUnKTtcbmNvbnN0IGtUb3RhbExlbmd0aCA9IFN5bWJvbCgndG90YWwtbGVuZ3RoJyk7XG5jb25zdCBrQ2FsbGJhY2sgPSBTeW1ib2woJ2NhbGxiYWNrJyk7XG5jb25zdCBrQnVmZmVycyA9IFN5bWJvbCgnYnVmZmVycycpO1xuY29uc3Qga0Vycm9yID0gU3ltYm9sKCdlcnJvcicpO1xuXG4vL1xuLy8gV2UgbGltaXQgemxpYiBjb25jdXJyZW5jeSwgd2hpY2ggcHJldmVudHMgc2V2ZXJlIG1lbW9yeSBmcmFnbWVudGF0aW9uXG4vLyBhcyBkb2N1bWVudGVkIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvODg3MSNpc3N1ZWNvbW1lbnQtMjUwOTE1OTEzXG4vLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL3dlYnNvY2tldHMvd3MvaXNzdWVzLzEyMDJcbi8vXG4vLyBJbnRlbnRpb25hbGx5IGdsb2JhbDsgaXQncyB0aGUgZ2xvYmFsIHRocmVhZCBwb29sIHRoYXQncyBhbiBpc3N1ZS5cbi8vXG5sZXQgemxpYkxpbWl0ZXI7XG5cbi8qKlxuICogcGVybWVzc2FnZS1kZWZsYXRlIGltcGxlbWVudGF0aW9uLlxuICovXG5jbGFzcyBQZXJNZXNzYWdlRGVmbGF0ZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgUGVyTWVzc2FnZURlZmxhdGUgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQ29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TnVtYmVyKX0gW29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0c10gQWR2ZXJ0aXNlIHN1cHBvcnRcbiAgICogICAgIGZvciwgb3IgcmVxdWVzdCwgYSBjdXN0b20gY2xpZW50IHdpbmRvdyBzaXplXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuY2xpZW50Tm9Db250ZXh0VGFrZW92ZXI9ZmFsc2VdIEFkdmVydGlzZS9cbiAgICogICAgIGFja25vd2xlZGdlIGRpc2FibGluZyBvZiBjbGllbnQgY29udGV4dCB0YWtlb3ZlclxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuY29uY3VycmVuY3lMaW1pdD0xMF0gVGhlIG51bWJlciBvZiBjb25jdXJyZW50XG4gICAqICAgICBjYWxscyB0byB6bGliXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaXNTZXJ2ZXI9ZmFsc2VdIENyZWF0ZSB0aGUgaW5zdGFuY2UgaW4gZWl0aGVyXG4gICAqICAgICBzZXJ2ZXIgb3IgY2xpZW50IG1vZGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm1heFBheWxvYWQ9MF0gVGhlIG1heGltdW0gYWxsb3dlZCBtZXNzYWdlIGxlbmd0aFxuICAgKiBAcGFyYW0geyhCb29sZWFufE51bWJlcil9IFtvcHRpb25zLnNlcnZlck1heFdpbmRvd0JpdHNdIFJlcXVlc3QvY29uZmlybSB0aGVcbiAgICogICAgIHVzZSBvZiBhIGN1c3RvbSBzZXJ2ZXIgd2luZG93IHNpemVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5zZXJ2ZXJOb0NvbnRleHRUYWtlb3Zlcj1mYWxzZV0gUmVxdWVzdC9hY2NlcHRcbiAgICogICAgIGRpc2FibGluZyBvZiBzZXJ2ZXIgY29udGV4dCB0YWtlb3ZlclxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudGhyZXNob2xkPTEwMjRdIFNpemUgKGluIGJ5dGVzKSBiZWxvdyB3aGljaFxuICAgKiAgICAgbWVzc2FnZXMgc2hvdWxkIG5vdCBiZSBjb21wcmVzc2VkIGlmIGNvbnRleHQgdGFrZW92ZXIgaXMgZGlzYWJsZWRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnpsaWJEZWZsYXRlT3B0aW9uc10gT3B0aW9ucyB0byBwYXNzIHRvIHpsaWIgb25cbiAgICogICAgIGRlZmxhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnpsaWJJbmZsYXRlT3B0aW9uc10gT3B0aW9ucyB0byBwYXNzIHRvIHpsaWIgb25cbiAgICogICAgIGluZmxhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLl90aHJlc2hvbGQgPVxuICAgICAgdGhpcy5fb3B0aW9ucy50aHJlc2hvbGQgIT09IHVuZGVmaW5lZCA/IHRoaXMuX29wdGlvbnMudGhyZXNob2xkIDogMTAyNDtcbiAgICB0aGlzLl9tYXhQYXlsb2FkID0gdGhpcy5fb3B0aW9ucy5tYXhQYXlsb2FkIHwgMDtcbiAgICB0aGlzLl9pc1NlcnZlciA9ICEhdGhpcy5fb3B0aW9ucy5pc1NlcnZlcjtcbiAgICB0aGlzLl9kZWZsYXRlID0gbnVsbDtcbiAgICB0aGlzLl9pbmZsYXRlID0gbnVsbDtcblxuICAgIHRoaXMucGFyYW1zID0gbnVsbDtcblxuICAgIGlmICghemxpYkxpbWl0ZXIpIHtcbiAgICAgIGNvbnN0IGNvbmN1cnJlbmN5ID1cbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jb25jdXJyZW5jeUxpbWl0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IHRoaXMuX29wdGlvbnMuY29uY3VycmVuY3lMaW1pdFxuICAgICAgICAgIDogMTA7XG4gICAgICB6bGliTGltaXRlciA9IG5ldyBMaW1pdGVyKGNvbmN1cnJlbmN5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgZXh0ZW5zaW9uTmFtZSgpIHtcbiAgICByZXR1cm4gJ3Blcm1lc3NhZ2UtZGVmbGF0ZSc7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBuZWdvdGlhdGlvbiBvZmZlci5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fSBFeHRlbnNpb24gcGFyYW1ldGVyc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBvZmZlcigpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgIGlmICh0aGlzLl9vcHRpb25zLnNlcnZlck5vQ29udGV4dFRha2VvdmVyKSB7XG4gICAgICBwYXJhbXMuc2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5jbGllbnROb0NvbnRleHRUYWtlb3Zlcikge1xuICAgICAgcGFyYW1zLmNsaWVudF9ub19jb250ZXh0X3Rha2VvdmVyID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuc2VydmVyTWF4V2luZG93Qml0cykge1xuICAgICAgcGFyYW1zLnNlcnZlcl9tYXhfd2luZG93X2JpdHMgPSB0aGlzLl9vcHRpb25zLnNlcnZlck1heFdpbmRvd0JpdHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMpIHtcbiAgICAgIHBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzID0gdGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzID09IG51bGwpIHtcbiAgICAgIHBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBhbiBleHRlbnNpb24gbmVnb3RpYXRpb24gb2ZmZXIvcmVzcG9uc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGNvbmZpZ3VyYXRpb25zIFRoZSBleHRlbnNpb24gbmVnb3RpYXRpb24gb2ZmZXJzL3JlcG9uc2VcbiAgICogQHJldHVybiB7T2JqZWN0fSBBY2NlcHRlZCBjb25maWd1cmF0aW9uXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFjY2VwdChjb25maWd1cmF0aW9ucykge1xuICAgIGNvbmZpZ3VyYXRpb25zID0gdGhpcy5ub3JtYWxpemVQYXJhbXMoY29uZmlndXJhdGlvbnMpO1xuXG4gICAgdGhpcy5wYXJhbXMgPSB0aGlzLl9pc1NlcnZlclxuICAgICAgPyB0aGlzLmFjY2VwdEFzU2VydmVyKGNvbmZpZ3VyYXRpb25zKVxuICAgICAgOiB0aGlzLmFjY2VwdEFzQ2xpZW50KGNvbmZpZ3VyYXRpb25zKTtcblxuICAgIHJldHVybiB0aGlzLnBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlcyBhbGwgcmVzb3VyY2VzIHVzZWQgYnkgdGhlIGV4dGVuc2lvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY2xlYW51cCgpIHtcbiAgICBpZiAodGhpcy5faW5mbGF0ZSkge1xuICAgICAgdGhpcy5faW5mbGF0ZS5jbG9zZSgpO1xuICAgICAgdGhpcy5faW5mbGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RlZmxhdGUpIHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5fZGVmbGF0ZVtrQ2FsbGJhY2tdO1xuXG4gICAgICB0aGlzLl9kZWZsYXRlLmNsb3NlKCk7XG4gICAgICB0aGlzLl9kZWZsYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKFxuICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICdUaGUgZGVmbGF0ZSBzdHJlYW0gd2FzIGNsb3NlZCB3aGlsZSBkYXRhIHdhcyBiZWluZyBwcm9jZXNzZWQnXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAgQWNjZXB0IGFuIGV4dGVuc2lvbiBuZWdvdGlhdGlvbiBvZmZlci5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gb2ZmZXJzIFRoZSBleHRlbnNpb24gbmVnb3RpYXRpb24gb2ZmZXJzXG4gICAqIEByZXR1cm4ge09iamVjdH0gQWNjZXB0ZWQgY29uZmlndXJhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWNjZXB0QXNTZXJ2ZXIob2ZmZXJzKSB7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMuX29wdGlvbnM7XG4gICAgY29uc3QgYWNjZXB0ZWQgPSBvZmZlcnMuZmluZCgocGFyYW1zKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIChvcHRzLnNlcnZlck5vQ29udGV4dFRha2VvdmVyID09PSBmYWxzZSAmJlxuICAgICAgICAgIHBhcmFtcy5zZXJ2ZXJfbm9fY29udGV4dF90YWtlb3ZlcikgfHxcbiAgICAgICAgKHBhcmFtcy5zZXJ2ZXJfbWF4X3dpbmRvd19iaXRzICYmXG4gICAgICAgICAgKG9wdHMuc2VydmVyTWF4V2luZG93Qml0cyA9PT0gZmFsc2UgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygb3B0cy5zZXJ2ZXJNYXhXaW5kb3dCaXRzID09PSAnbnVtYmVyJyAmJlxuICAgICAgICAgICAgICBvcHRzLnNlcnZlck1heFdpbmRvd0JpdHMgPiBwYXJhbXMuc2VydmVyX21heF93aW5kb3dfYml0cykpKSB8fFxuICAgICAgICAodHlwZW9mIG9wdHMuY2xpZW50TWF4V2luZG93Qml0cyA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgICAhcGFyYW1zLmNsaWVudF9tYXhfd2luZG93X2JpdHMpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGlmICghYWNjZXB0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm9uZSBvZiB0aGUgZXh0ZW5zaW9uIG9mZmVycyBjYW4gYmUgYWNjZXB0ZWQnKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5zZXJ2ZXJOb0NvbnRleHRUYWtlb3Zlcikge1xuICAgICAgYWNjZXB0ZWQuc2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0cy5jbGllbnROb0NvbnRleHRUYWtlb3Zlcikge1xuICAgICAgYWNjZXB0ZWQuY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdHMuc2VydmVyTWF4V2luZG93Qml0cyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGFjY2VwdGVkLnNlcnZlcl9tYXhfd2luZG93X2JpdHMgPSBvcHRzLnNlcnZlck1heFdpbmRvd0JpdHM7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0cy5jbGllbnRNYXhXaW5kb3dCaXRzID09PSAnbnVtYmVyJykge1xuICAgICAgYWNjZXB0ZWQuY2xpZW50X21heF93aW5kb3dfYml0cyA9IG9wdHMuY2xpZW50TWF4V2luZG93Qml0cztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgYWNjZXB0ZWQuY2xpZW50X21heF93aW5kb3dfYml0cyA9PT0gdHJ1ZSB8fFxuICAgICAgb3B0cy5jbGllbnRNYXhXaW5kb3dCaXRzID09PSBmYWxzZVxuICAgICkge1xuICAgICAgZGVsZXRlIGFjY2VwdGVkLmNsaWVudF9tYXhfd2luZG93X2JpdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY2VwdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdCB0aGUgZXh0ZW5zaW9uIG5lZ290aWF0aW9uIHJlc3BvbnNlLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSByZXNwb25zZSBUaGUgZXh0ZW5zaW9uIG5lZ290aWF0aW9uIHJlc3BvbnNlXG4gICAqIEByZXR1cm4ge09iamVjdH0gQWNjZXB0ZWQgY29uZmlndXJhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWNjZXB0QXNDbGllbnQocmVzcG9uc2UpIHtcbiAgICBjb25zdCBwYXJhbXMgPSByZXNwb25zZVswXTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMuX29wdGlvbnMuY2xpZW50Tm9Db250ZXh0VGFrZW92ZXIgPT09IGZhbHNlICYmXG4gICAgICBwYXJhbXMuY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXJcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBwYXJhbWV0ZXIgXCJjbGllbnRfbm9fY29udGV4dF90YWtlb3ZlclwiJyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJhbXMuY2xpZW50X21heF93aW5kb3dfYml0cykge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzID0gdGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMgPT09IGZhbHNlIHx8XG4gICAgICAodHlwZW9mIHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cyA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgcGFyYW1zLmNsaWVudF9tYXhfd2luZG93X2JpdHMgPiB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdVbmV4cGVjdGVkIG9yIGludmFsaWQgcGFyYW1ldGVyIFwiY2xpZW50X21heF93aW5kb3dfYml0c1wiJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBwYXJhbWV0ZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBjb25maWd1cmF0aW9ucyBUaGUgZXh0ZW5zaW9uIG5lZ290aWF0aW9uIG9mZmVycy9yZXBvbnNlXG4gICAqIEByZXR1cm4ge0FycmF5fSBUaGUgb2ZmZXJzL3Jlc3BvbnNlIHdpdGggbm9ybWFsaXplZCBwYXJhbWV0ZXJzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBub3JtYWxpemVQYXJhbXMoY29uZmlndXJhdGlvbnMpIHtcbiAgICBjb25maWd1cmF0aW9ucy5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHBhcmFtc1trZXldO1xuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgXCIke2tleX1cIiBtdXN0IGhhdmUgb25seSBhIHNpbmdsZSB2YWx1ZWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZVswXTtcblxuICAgICAgICBpZiAoa2V5ID09PSAnY2xpZW50X21heF93aW5kb3dfYml0cycpIHtcbiAgICAgICAgICBpZiAodmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9ICt2YWx1ZTtcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihudW0pIHx8IG51bSA8IDggfHwgbnVtID4gMTUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgICBgSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyIFwiJHtrZXl9XCI6ICR7dmFsdWV9YFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSBudW07XG4gICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgIGBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgXCIke2tleX1cIjogJHt2YWx1ZX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdzZXJ2ZXJfbWF4X3dpbmRvd19iaXRzJykge1xuICAgICAgICAgIGNvbnN0IG51bSA9ICt2YWx1ZTtcbiAgICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIobnVtKSB8fCBudW0gPCA4IHx8IG51bSA+IDE1KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICBgSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyIFwiJHtrZXl9XCI6ICR7dmFsdWV9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWUgPSBudW07XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAga2V5ID09PSAnY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXInIHx8XG4gICAgICAgICAga2V5ID09PSAnc2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXInXG4gICAgICAgICkge1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgYEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciBcIiR7a2V5fVwiOiAke3ZhbHVlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBwYXJhbWV0ZXIgXCIke2tleX1cImApO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY29tcHJlc3MgZGF0YS4gQ29uY3VycmVuY3kgbGltaXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgQ29tcHJlc3NlZCBkYXRhXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmluIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGlzIHRoZSBsYXN0IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGRlY29tcHJlc3MoZGF0YSwgZmluLCBjYWxsYmFjaykge1xuICAgIHpsaWJMaW1pdGVyLmFkZCgoZG9uZSkgPT4ge1xuICAgICAgdGhpcy5fZGVjb21wcmVzcyhkYXRhLCBmaW4sIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICBkb25lKCk7XG4gICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXByZXNzIGRhdGEuIENvbmN1cnJlbmN5IGxpbWl0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7KEJ1ZmZlcnxTdHJpbmcpfSBkYXRhIERhdGEgdG8gY29tcHJlc3NcbiAgICogQHBhcmFtIHtCb29sZWFufSBmaW4gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgdGhlIGxhc3QgZnJhZ21lbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY29tcHJlc3MoZGF0YSwgZmluLCBjYWxsYmFjaykge1xuICAgIHpsaWJMaW1pdGVyLmFkZCgoZG9uZSkgPT4ge1xuICAgICAgdGhpcy5fY29tcHJlc3MoZGF0YSwgZmluLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNvbXByZXNzIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIENvbXByZXNzZWQgZGF0YVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZpbiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhpcyBpcyB0aGUgbGFzdCBmcmFnbWVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2RlY29tcHJlc3MoZGF0YSwgZmluLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5faXNTZXJ2ZXIgPyAnY2xpZW50JyA6ICdzZXJ2ZXInO1xuXG4gICAgaWYgKCF0aGlzLl9pbmZsYXRlKSB7XG4gICAgICBjb25zdCBrZXkgPSBgJHtlbmRwb2ludH1fbWF4X3dpbmRvd19iaXRzYDtcbiAgICAgIGNvbnN0IHdpbmRvd0JpdHMgPVxuICAgICAgICB0eXBlb2YgdGhpcy5wYXJhbXNba2V5XSAhPT0gJ251bWJlcidcbiAgICAgICAgICA/IHpsaWIuWl9ERUZBVUxUX1dJTkRPV0JJVFNcbiAgICAgICAgICA6IHRoaXMucGFyYW1zW2tleV07XG5cbiAgICAgIHRoaXMuX2luZmxhdGUgPSB6bGliLmNyZWF0ZUluZmxhdGVSYXcoe1xuICAgICAgICAuLi50aGlzLl9vcHRpb25zLnpsaWJJbmZsYXRlT3B0aW9ucyxcbiAgICAgICAgd2luZG93Qml0c1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9pbmZsYXRlW2tQZXJNZXNzYWdlRGVmbGF0ZV0gPSB0aGlzO1xuICAgICAgdGhpcy5faW5mbGF0ZVtrVG90YWxMZW5ndGhdID0gMDtcbiAgICAgIHRoaXMuX2luZmxhdGVba0J1ZmZlcnNdID0gW107XG4gICAgICB0aGlzLl9pbmZsYXRlLm9uKCdlcnJvcicsIGluZmxhdGVPbkVycm9yKTtcbiAgICAgIHRoaXMuX2luZmxhdGUub24oJ2RhdGEnLCBpbmZsYXRlT25EYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pbmZsYXRlW2tDYWxsYmFja10gPSBjYWxsYmFjaztcblxuICAgIHRoaXMuX2luZmxhdGUud3JpdGUoZGF0YSk7XG4gICAgaWYgKGZpbikgdGhpcy5faW5mbGF0ZS53cml0ZShUUkFJTEVSKTtcblxuICAgIHRoaXMuX2luZmxhdGUuZmx1c2goKCkgPT4ge1xuICAgICAgY29uc3QgZXJyID0gdGhpcy5faW5mbGF0ZVtrRXJyb3JdO1xuXG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRoaXMuX2luZmxhdGUuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5faW5mbGF0ZSA9IG51bGw7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IGJ1ZmZlclV0aWwuY29uY2F0KFxuICAgICAgICB0aGlzLl9pbmZsYXRlW2tCdWZmZXJzXSxcbiAgICAgICAgdGhpcy5faW5mbGF0ZVtrVG90YWxMZW5ndGhdXG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5faW5mbGF0ZS5fcmVhZGFibGVTdGF0ZS5lbmRFbWl0dGVkKSB7XG4gICAgICAgIHRoaXMuX2luZmxhdGUuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5faW5mbGF0ZSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbmZsYXRlW2tUb3RhbExlbmd0aF0gPSAwO1xuICAgICAgICB0aGlzLl9pbmZsYXRlW2tCdWZmZXJzXSA9IFtdO1xuXG4gICAgICAgIGlmIChmaW4gJiYgdGhpcy5wYXJhbXNbYCR7ZW5kcG9pbnR9X25vX2NvbnRleHRfdGFrZW92ZXJgXSkge1xuICAgICAgICAgIHRoaXMuX2luZmxhdGUucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wcmVzcyBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0geyhCdWZmZXJ8U3RyaW5nKX0gZGF0YSBEYXRhIHRvIGNvbXByZXNzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmluIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGlzIHRoZSBsYXN0IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29tcHJlc3MoZGF0YSwgZmluLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5faXNTZXJ2ZXIgPyAnc2VydmVyJyA6ICdjbGllbnQnO1xuXG4gICAgaWYgKCF0aGlzLl9kZWZsYXRlKSB7XG4gICAgICBjb25zdCBrZXkgPSBgJHtlbmRwb2ludH1fbWF4X3dpbmRvd19iaXRzYDtcbiAgICAgIGNvbnN0IHdpbmRvd0JpdHMgPVxuICAgICAgICB0eXBlb2YgdGhpcy5wYXJhbXNba2V5XSAhPT0gJ251bWJlcidcbiAgICAgICAgICA/IHpsaWIuWl9ERUZBVUxUX1dJTkRPV0JJVFNcbiAgICAgICAgICA6IHRoaXMucGFyYW1zW2tleV07XG5cbiAgICAgIHRoaXMuX2RlZmxhdGUgPSB6bGliLmNyZWF0ZURlZmxhdGVSYXcoe1xuICAgICAgICAuLi50aGlzLl9vcHRpb25zLnpsaWJEZWZsYXRlT3B0aW9ucyxcbiAgICAgICAgd2luZG93Qml0c1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2RlZmxhdGVba1RvdGFsTGVuZ3RoXSA9IDA7XG4gICAgICB0aGlzLl9kZWZsYXRlW2tCdWZmZXJzXSA9IFtdO1xuXG4gICAgICB0aGlzLl9kZWZsYXRlLm9uKCdkYXRhJywgZGVmbGF0ZU9uRGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGVmbGF0ZVtrQ2FsbGJhY2tdID0gY2FsbGJhY2s7XG5cbiAgICB0aGlzLl9kZWZsYXRlLndyaXRlKGRhdGEpO1xuICAgIHRoaXMuX2RlZmxhdGUuZmx1c2goemxpYi5aX1NZTkNfRkxVU0gsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fZGVmbGF0ZSkge1xuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgZGVmbGF0ZSBzdHJlYW0gd2FzIGNsb3NlZCB3aGlsZSBkYXRhIHdhcyBiZWluZyBwcm9jZXNzZWQuXG4gICAgICAgIC8vXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGEgPSBidWZmZXJVdGlsLmNvbmNhdChcbiAgICAgICAgdGhpcy5fZGVmbGF0ZVtrQnVmZmVyc10sXG4gICAgICAgIHRoaXMuX2RlZmxhdGVba1RvdGFsTGVuZ3RoXVxuICAgICAgKTtcblxuICAgICAgaWYgKGZpbikge1xuICAgICAgICBkYXRhID0gbmV3IEZhc3RCdWZmZXIoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5sZW5ndGggLSA0KTtcbiAgICAgIH1cblxuICAgICAgLy9cbiAgICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBjYWxsYmFjayB3aWxsIG5vdCBiZSBjYWxsZWQgYWdhaW4gaW5cbiAgICAgIC8vIGBQZXJNZXNzYWdlRGVmbGF0ZSNjbGVhbnVwKClgLlxuICAgICAgLy9cbiAgICAgIHRoaXMuX2RlZmxhdGVba0NhbGxiYWNrXSA9IG51bGw7XG5cbiAgICAgIHRoaXMuX2RlZmxhdGVba1RvdGFsTGVuZ3RoXSA9IDA7XG4gICAgICB0aGlzLl9kZWZsYXRlW2tCdWZmZXJzXSA9IFtdO1xuXG4gICAgICBpZiAoZmluICYmIHRoaXMucGFyYW1zW2Ake2VuZHBvaW50fV9ub19jb250ZXh0X3Rha2VvdmVyYF0pIHtcbiAgICAgICAgdGhpcy5fZGVmbGF0ZS5yZXNldCgpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBlck1lc3NhZ2VEZWZsYXRlO1xuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgYHpsaWIuRGVmbGF0ZVJhd2Agc3RyZWFtIGAnZGF0YSdgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBjaHVuayBBIGNodW5rIG9mIGRhdGFcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlZmxhdGVPbkRhdGEoY2h1bmspIHtcbiAgdGhpc1trQnVmZmVyc10ucHVzaChjaHVuayk7XG4gIHRoaXNba1RvdGFsTGVuZ3RoXSArPSBjaHVuay5sZW5ndGg7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgemxpYi5JbmZsYXRlUmF3YCBzdHJlYW0gYCdkYXRhJ2AgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGNodW5rIEEgY2h1bmsgb2YgZGF0YVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5mbGF0ZU9uRGF0YShjaHVuaykge1xuICB0aGlzW2tUb3RhbExlbmd0aF0gKz0gY2h1bmsubGVuZ3RoO1xuXG4gIGlmIChcbiAgICB0aGlzW2tQZXJNZXNzYWdlRGVmbGF0ZV0uX21heFBheWxvYWQgPCAxIHx8XG4gICAgdGhpc1trVG90YWxMZW5ndGhdIDw9IHRoaXNba1Blck1lc3NhZ2VEZWZsYXRlXS5fbWF4UGF5bG9hZFxuICApIHtcbiAgICB0aGlzW2tCdWZmZXJzXS5wdXNoKGNodW5rKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzW2tFcnJvcl0gPSBuZXcgUmFuZ2VFcnJvcignTWF4IHBheWxvYWQgc2l6ZSBleGNlZWRlZCcpO1xuICB0aGlzW2tFcnJvcl0uY29kZSA9ICdXU19FUlJfVU5TVVBQT1JURURfTUVTU0FHRV9MRU5HVEgnO1xuICB0aGlzW2tFcnJvcl1ba1N0YXR1c0NvZGVdID0gMTAwOTtcbiAgdGhpcy5yZW1vdmVMaXN0ZW5lcignZGF0YScsIGluZmxhdGVPbkRhdGEpO1xuXG4gIC8vXG4gIC8vIFRoZSBjaG9pY2UgdG8gZW1wbG95IGB6bGliLnJlc2V0KClgIG92ZXIgYHpsaWIuY2xvc2UoKWAgaXMgZGljdGF0ZWQgYnkgdGhlXG4gIC8vIGZhY3QgdGhhdCBpbiBOb2RlLmpzIHZlcnNpb25zIHByaW9yIHRvIDEzLjEwLjAsIHRoZSBjYWxsYmFjayBmb3JcbiAgLy8gYHpsaWIuZmx1c2goKWAgaXMgbm90IGNhbGxlZCBpZiBgemxpYi5jbG9zZSgpYCBpcyB1c2VkLiBVdGlsaXppbmdcbiAgLy8gYHpsaWIucmVzZXQoKWAgZW5zdXJlcyB0aGF0IGVpdGhlciB0aGUgY2FsbGJhY2sgaXMgaW52b2tlZCBvciBhbiBlcnJvciBpc1xuICAvLyBlbWl0dGVkLlxuICAvL1xuICB0aGlzLnJlc2V0KCk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgemxpYi5JbmZsYXRlUmF3YCBzdHJlYW0gYCdlcnJvcidgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyciBUaGUgZW1pdHRlZCBlcnJvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5mbGF0ZU9uRXJyb3IoZXJyKSB7XG4gIC8vXG4gIC8vIFRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBgWmxpYiNjbG9zZSgpYCBhcyB0aGUgaGFuZGxlIGlzIGF1dG9tYXRpY2FsbHlcbiAgLy8gY2xvc2VkIHdoZW4gYW4gZXJyb3IgaXMgZW1pdHRlZC5cbiAgLy9cbiAgdGhpc1trUGVyTWVzc2FnZURlZmxhdGVdLl9pbmZsYXRlID0gbnVsbDtcblxuICBpZiAodGhpc1trRXJyb3JdKSB7XG4gICAgdGhpc1trQ2FsbGJhY2tdKHRoaXNba0Vycm9yXSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZXJyW2tTdGF0dXNDb2RlXSA9IDEwMDc7XG4gIHRoaXNba0NhbGxiYWNrXShlcnIpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBpc1V0ZjggfSA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG5jb25zdCB7IGhhc0Jsb2IgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbi8vXG4vLyBBbGxvd2VkIHRva2VuIGNoYXJhY3RlcnM6XG4vL1xuLy8gJyEnLCAnIycsICckJywgJyUnLCAnJicsICcnJywgJyonLCAnKycsICctJyxcbi8vICcuJywgMC05LCBBLVosICdeJywgJ18nLCAnYCcsIGEteiwgJ3wnLCAnfidcbi8vXG4vLyB0b2tlbkNoYXJzWzMyXSA9PT0gMCAvLyAnICdcbi8vIHRva2VuQ2hhcnNbMzNdID09PSAxIC8vICchJ1xuLy8gdG9rZW5DaGFyc1szNF0gPT09IDAgLy8gJ1wiJ1xuLy8gLi4uXG4vL1xuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCB0b2tlbkNoYXJzID0gW1xuICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAvLyAwIC0gMTVcbiAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgLy8gMTYgLSAzMVxuICAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAwLCAvLyAzMiAtIDQ3XG4gIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIC8vIDQ4IC0gNjNcbiAgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgLy8gNjQgLSA3OVxuICAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAvLyA4MCAtIDk1XG4gIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIC8vIDk2IC0gMTExXG4gIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDAgLy8gMTEyIC0gMTI3XG5dO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIHN0YXR1cyBjb2RlIGlzIGFsbG93ZWQgaW4gYSBjbG9zZSBmcmFtZS5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gY29kZSBUaGUgc3RhdHVzIGNvZGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgc3RhdHVzIGNvZGUgaXMgdmFsaWQsIGVsc2UgYGZhbHNlYFxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBpc1ZhbGlkU3RhdHVzQ29kZShjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgKGNvZGUgPj0gMTAwMCAmJlxuICAgICAgY29kZSA8PSAxMDE0ICYmXG4gICAgICBjb2RlICE9PSAxMDA0ICYmXG4gICAgICBjb2RlICE9PSAxMDA1ICYmXG4gICAgICBjb2RlICE9PSAxMDA2KSB8fFxuICAgIChjb2RlID49IDMwMDAgJiYgY29kZSA8PSA0OTk5KVxuICApO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGdpdmVuIGJ1ZmZlciBjb250YWlucyBvbmx5IGNvcnJlY3QgVVRGLTguXG4gKiBQb3J0ZWQgZnJvbSBodHRwczovL3d3dy5jbC5jYW0uYWMudWsvJTdFbWdrMjUvdWNzL3V0ZjhfY2hlY2suYyBieVxuICogTWFya3VzIEt1aG4uXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZiBUaGUgYnVmZmVyIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYGJ1ZmAgY29udGFpbnMgb25seSBjb3JyZWN0IFVURi04LCBlbHNlIGBmYWxzZWBcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gX2lzVmFsaWRVVEY4KGJ1Zikge1xuICBjb25zdCBsZW4gPSBidWYubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBpZiAoKGJ1ZltpXSAmIDB4ODApID09PSAwKSB7XG4gICAgICAvLyAweHh4eHh4eFxuICAgICAgaSsrO1xuICAgIH0gZWxzZSBpZiAoKGJ1ZltpXSAmIDB4ZTApID09PSAweGMwKSB7XG4gICAgICAvLyAxMTB4eHh4eCAxMHh4eHh4eFxuICAgICAgaWYgKFxuICAgICAgICBpICsgMSA9PT0gbGVuIHx8XG4gICAgICAgIChidWZbaSArIDFdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpXSAmIDB4ZmUpID09PSAweGMwIC8vIE92ZXJsb25nXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpICs9IDI7XG4gICAgfSBlbHNlIGlmICgoYnVmW2ldICYgMHhmMCkgPT09IDB4ZTApIHtcbiAgICAgIC8vIDExMTB4eHh4IDEweHh4eHh4IDEweHh4eHh4XG4gICAgICBpZiAoXG4gICAgICAgIGkgKyAyID49IGxlbiB8fFxuICAgICAgICAoYnVmW2kgKyAxXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIChidWZbaSArIDJdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpXSA9PT0gMHhlMCAmJiAoYnVmW2kgKyAxXSAmIDB4ZTApID09PSAweDgwKSB8fCAvLyBPdmVybG9uZ1xuICAgICAgICAoYnVmW2ldID09PSAweGVkICYmIChidWZbaSArIDFdICYgMHhlMCkgPT09IDB4YTApIC8vIFN1cnJvZ2F0ZSAoVStEODAwIC0gVStERkZGKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaSArPSAzO1xuICAgIH0gZWxzZSBpZiAoKGJ1ZltpXSAmIDB4ZjgpID09PSAweGYwKSB7XG4gICAgICAvLyAxMTExMHh4eCAxMHh4eHh4eCAxMHh4eHh4eCAxMHh4eHh4eFxuICAgICAgaWYgKFxuICAgICAgICBpICsgMyA+PSBsZW4gfHxcbiAgICAgICAgKGJ1ZltpICsgMV0gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICAoYnVmW2kgKyAyXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIChidWZbaSArIDNdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpXSA9PT0gMHhmMCAmJiAoYnVmW2kgKyAxXSAmIDB4ZjApID09PSAweDgwKSB8fCAvLyBPdmVybG9uZ1xuICAgICAgICAoYnVmW2ldID09PSAweGY0ICYmIGJ1ZltpICsgMV0gPiAweDhmKSB8fFxuICAgICAgICBidWZbaV0gPiAweGY0IC8vID4gVSsxMEZGRkZcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGkgKz0gNDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgYEJsb2JgLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHRlc3RlZFxuICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBgQmxvYmAsIGVsc2UgYGZhbHNlYFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgaGFzQmxvYiAmJlxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICB0eXBlb2YgdmFsdWUuYXJyYXlCdWZmZXIgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgdmFsdWUudHlwZSA9PT0gJ3N0cmluZycgJiZcbiAgICB0eXBlb2YgdmFsdWUuc3RyZWFtID09PSAnZnVuY3Rpb24nICYmXG4gICAgKHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09ICdCbG9iJyB8fFxuICAgICAgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gJ0ZpbGUnKVxuICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNCbG9iLFxuICBpc1ZhbGlkU3RhdHVzQ29kZSxcbiAgaXNWYWxpZFVURjg6IF9pc1ZhbGlkVVRGOCxcbiAgdG9rZW5DaGFyc1xufTtcblxuaWYgKGlzVXRmOCkge1xuICBtb2R1bGUuZXhwb3J0cy5pc1ZhbGlkVVRGOCA9IGZ1bmN0aW9uIChidWYpIHtcbiAgICByZXR1cm4gYnVmLmxlbmd0aCA8IDI0ID8gX2lzVmFsaWRVVEY4KGJ1ZikgOiBpc1V0ZjgoYnVmKTtcbiAgfTtcbn0gLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovIGVsc2UgaWYgKCFwcm9jZXNzLmVudi5XU19OT19VVEZfOF9WQUxJREFURSkge1xuICB0cnkge1xuICAgIGNvbnN0IGlzVmFsaWRVVEY4ID0gcmVxdWlyZSgndXRmLTgtdmFsaWRhdGUnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzLmlzVmFsaWRVVEY4ID0gZnVuY3Rpb24gKGJ1Zikge1xuICAgICAgcmV0dXJuIGJ1Zi5sZW5ndGggPCAzMiA/IF9pc1ZhbGlkVVRGOChidWYpIDogaXNWYWxpZFVURjgoYnVmKTtcbiAgICB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gQ29udGludWUgcmVnYXJkbGVzcyBvZiB0aGUgZXJyb3IuXG4gIH1cbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHsgV3JpdGFibGUgfSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xuXG5jb25zdCBQZXJNZXNzYWdlRGVmbGF0ZSA9IHJlcXVpcmUoJy4vcGVybWVzc2FnZS1kZWZsYXRlJyk7XG5jb25zdCB7XG4gIEJJTkFSWV9UWVBFUyxcbiAgRU1QVFlfQlVGRkVSLFxuICBrU3RhdHVzQ29kZSxcbiAga1dlYlNvY2tldFxufSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCB7IGNvbmNhdCwgdG9BcnJheUJ1ZmZlciwgdW5tYXNrIH0gPSByZXF1aXJlKCcuL2J1ZmZlci11dGlsJyk7XG5jb25zdCB7IGlzVmFsaWRTdGF0dXNDb2RlLCBpc1ZhbGlkVVRGOCB9ID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uJyk7XG5cbmNvbnN0IEZhc3RCdWZmZXIgPSBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdO1xuXG5jb25zdCBHRVRfSU5GTyA9IDA7XG5jb25zdCBHRVRfUEFZTE9BRF9MRU5HVEhfMTYgPSAxO1xuY29uc3QgR0VUX1BBWUxPQURfTEVOR1RIXzY0ID0gMjtcbmNvbnN0IEdFVF9NQVNLID0gMztcbmNvbnN0IEdFVF9EQVRBID0gNDtcbmNvbnN0IElORkxBVElORyA9IDU7XG5jb25zdCBERUZFUl9FVkVOVCA9IDY7XG5cbi8qKlxuICogSHlCaSBSZWNlaXZlciBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyBXcml0YWJsZVxuICovXG5jbGFzcyBSZWNlaXZlciBleHRlbmRzIFdyaXRhYmxlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBSZWNlaXZlciBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHM9dHJ1ZV0gU3BlY2lmaWVzIHdoZXRoZXJcbiAgICogICAgIGFueSBvZiB0aGUgYCdtZXNzYWdlJ2AsIGAncGluZydgLCBhbmQgYCdwb25nJ2AgZXZlbnRzIGNhbiBiZSBlbWl0dGVkXG4gICAqICAgICBtdWx0aXBsZSB0aW1lcyBpbiB0aGUgc2FtZSB0aWNrXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5iaW5hcnlUeXBlPW5vZGVidWZmZXJdIFRoZSB0eXBlIGZvciBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZXh0ZW5zaW9uc10gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG5lZ290aWF0ZWRcbiAgICogICAgIGV4dGVuc2lvbnNcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pc1NlcnZlcj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgdG8gb3BlcmF0ZSBpblxuICAgKiAgICAgY2xpZW50IG9yIHNlcnZlciBtb2RlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhQYXlsb2FkPTBdIFRoZSBtYXhpbXVtIGFsbG93ZWQgbWVzc2FnZSBsZW5ndGhcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5za2lwVVRGOFZhbGlkYXRpb249ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yXG4gICAqICAgICBub3QgdG8gc2tpcCBVVEYtOCB2YWxpZGF0aW9uIGZvciB0ZXh0IGFuZCBjbG9zZSBtZXNzYWdlc1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2FsbG93U3luY2hyb25vdXNFdmVudHMgPVxuICAgICAgb3B0aW9ucy5hbGxvd1N5bmNocm9ub3VzRXZlbnRzICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHNcbiAgICAgICAgOiB0cnVlO1xuICAgIHRoaXMuX2JpbmFyeVR5cGUgPSBvcHRpb25zLmJpbmFyeVR5cGUgfHwgQklOQVJZX1RZUEVTWzBdO1xuICAgIHRoaXMuX2V4dGVuc2lvbnMgPSBvcHRpb25zLmV4dGVuc2lvbnMgfHwge307XG4gICAgdGhpcy5faXNTZXJ2ZXIgPSAhIW9wdGlvbnMuaXNTZXJ2ZXI7XG4gICAgdGhpcy5fbWF4UGF5bG9hZCA9IG9wdGlvbnMubWF4UGF5bG9hZCB8IDA7XG4gICAgdGhpcy5fc2tpcFVURjhWYWxpZGF0aW9uID0gISFvcHRpb25zLnNraXBVVEY4VmFsaWRhdGlvbjtcbiAgICB0aGlzW2tXZWJTb2NrZXRdID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5fYnVmZmVyZWRCeXRlcyA9IDA7XG4gICAgdGhpcy5fYnVmZmVycyA9IFtdO1xuXG4gICAgdGhpcy5fY29tcHJlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3BheWxvYWRMZW5ndGggPSAwO1xuICAgIHRoaXMuX21hc2sgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZnJhZ21lbnRlZCA9IDA7XG4gICAgdGhpcy5fbWFza2VkID0gZmFsc2U7XG4gICAgdGhpcy5fZmluID0gZmFsc2U7XG4gICAgdGhpcy5fb3Bjb2RlID0gMDtcblxuICAgIHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aCA9IDA7XG4gICAgdGhpcy5fbWVzc2FnZUxlbmd0aCA9IDA7XG4gICAgdGhpcy5fZnJhZ21lbnRzID0gW107XG5cbiAgICB0aGlzLl9lcnJvcmVkID0gZmFsc2U7XG4gICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gIH1cblxuICAvKipcbiAgICogSW1wbGVtZW50cyBgV3JpdGFibGUucHJvdG90eXBlLl93cml0ZSgpYC5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGNodW5rIFRoZSBjaHVuayBvZiBkYXRhIHRvIHdyaXRlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbmNvZGluZyBUaGUgY2hhcmFjdGVyIGVuY29kaW5nIG9mIGBjaHVua2BcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF93cml0ZShjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gICAgaWYgKHRoaXMuX29wY29kZSA9PT0gMHgwOCAmJiB0aGlzLl9zdGF0ZSA9PSBHRVRfSU5GTykgcmV0dXJuIGNiKCk7XG5cbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzICs9IGNodW5rLmxlbmd0aDtcbiAgICB0aGlzLl9idWZmZXJzLnB1c2goY2h1bmspO1xuICAgIHRoaXMuc3RhcnRMb29wKGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdW1lcyBgbmAgYnl0ZXMgZnJvbSB0aGUgYnVmZmVyZWQgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG4gVGhlIG51bWJlciBvZiBieXRlcyB0byBjb25zdW1lXG4gICAqIEByZXR1cm4ge0J1ZmZlcn0gVGhlIGNvbnN1bWVkIGJ5dGVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb25zdW1lKG4pIHtcbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzIC09IG47XG5cbiAgICBpZiAobiA9PT0gdGhpcy5fYnVmZmVyc1swXS5sZW5ndGgpIHJldHVybiB0aGlzLl9idWZmZXJzLnNoaWZ0KCk7XG5cbiAgICBpZiAobiA8IHRoaXMuX2J1ZmZlcnNbMF0ubGVuZ3RoKSB7XG4gICAgICBjb25zdCBidWYgPSB0aGlzLl9idWZmZXJzWzBdO1xuICAgICAgdGhpcy5fYnVmZmVyc1swXSA9IG5ldyBGYXN0QnVmZmVyKFxuICAgICAgICBidWYuYnVmZmVyLFxuICAgICAgICBidWYuYnl0ZU9mZnNldCArIG4sXG4gICAgICAgIGJ1Zi5sZW5ndGggLSBuXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gbmV3IEZhc3RCdWZmZXIoYnVmLmJ1ZmZlciwgYnVmLmJ5dGVPZmZzZXQsIG4pO1xuICAgIH1cblxuICAgIGNvbnN0IGRzdCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShuKTtcblxuICAgIGRvIHtcbiAgICAgIGNvbnN0IGJ1ZiA9IHRoaXMuX2J1ZmZlcnNbMF07XG4gICAgICBjb25zdCBvZmZzZXQgPSBkc3QubGVuZ3RoIC0gbjtcblxuICAgICAgaWYgKG4gPj0gYnVmLmxlbmd0aCkge1xuICAgICAgICBkc3Quc2V0KHRoaXMuX2J1ZmZlcnMuc2hpZnQoKSwgb2Zmc2V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRzdC5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmLmJ1ZmZlciwgYnVmLmJ5dGVPZmZzZXQsIG4pLCBvZmZzZXQpO1xuICAgICAgICB0aGlzLl9idWZmZXJzWzBdID0gbmV3IEZhc3RCdWZmZXIoXG4gICAgICAgICAgYnVmLmJ1ZmZlcixcbiAgICAgICAgICBidWYuYnl0ZU9mZnNldCArIG4sXG4gICAgICAgICAgYnVmLmxlbmd0aCAtIG5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgbiAtPSBidWYubGVuZ3RoO1xuICAgIH0gd2hpbGUgKG4gPiAwKTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBwYXJzaW5nIGxvb3AuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGFydExvb3AoY2IpIHtcbiAgICB0aGlzLl9sb29wID0gdHJ1ZTtcblxuICAgIGRvIHtcbiAgICAgIHN3aXRjaCAodGhpcy5fc3RhdGUpIHtcbiAgICAgICAgY2FzZSBHRVRfSU5GTzpcbiAgICAgICAgICB0aGlzLmdldEluZm8oY2IpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEdFVF9QQVlMT0FEX0xFTkdUSF8xNjpcbiAgICAgICAgICB0aGlzLmdldFBheWxvYWRMZW5ndGgxNihjYik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgR0VUX1BBWUxPQURfTEVOR1RIXzY0OlxuICAgICAgICAgIHRoaXMuZ2V0UGF5bG9hZExlbmd0aDY0KGNiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBHRVRfTUFTSzpcbiAgICAgICAgICB0aGlzLmdldE1hc2soKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBHRVRfREFUQTpcbiAgICAgICAgICB0aGlzLmdldERhdGEoY2IpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIElORkxBVElORzpcbiAgICAgICAgY2FzZSBERUZFUl9FVkVOVDpcbiAgICAgICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKHRoaXMuX2xvb3ApO1xuXG4gICAgaWYgKCF0aGlzLl9lcnJvcmVkKSBjYigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBmaXJzdCB0d28gYnl0ZXMgb2YgYSBmcmFtZS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEluZm8oY2IpIHtcbiAgICBpZiAodGhpcy5fYnVmZmVyZWRCeXRlcyA8IDIpIHtcbiAgICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBidWYgPSB0aGlzLmNvbnN1bWUoMik7XG5cbiAgICBpZiAoKGJ1ZlswXSAmIDB4MzApICE9PSAweDAwKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICdSU1YyIGFuZCBSU1YzIG11c3QgYmUgY2xlYXInLFxuICAgICAgICB0cnVlLFxuICAgICAgICAxMDAyLFxuICAgICAgICAnV1NfRVJSX1VORVhQRUNURURfUlNWXzJfMydcbiAgICAgICk7XG5cbiAgICAgIGNiKGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wcmVzc2VkID0gKGJ1ZlswXSAmIDB4NDApID09PSAweDQwO1xuXG4gICAgaWYgKGNvbXByZXNzZWQgJiYgIXRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgJ1JTVjEgbXVzdCBiZSBjbGVhcicsXG4gICAgICAgIHRydWUsXG4gICAgICAgIDEwMDIsXG4gICAgICAgICdXU19FUlJfVU5FWFBFQ1RFRF9SU1ZfMSdcbiAgICAgICk7XG5cbiAgICAgIGNiKGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9maW4gPSAoYnVmWzBdICYgMHg4MCkgPT09IDB4ODA7XG4gICAgdGhpcy5fb3Bjb2RlID0gYnVmWzBdICYgMHgwZjtcbiAgICB0aGlzLl9wYXlsb2FkTGVuZ3RoID0gYnVmWzFdICYgMHg3ZjtcblxuICAgIGlmICh0aGlzLl9vcGNvZGUgPT09IDB4MDApIHtcbiAgICAgIGlmIChjb21wcmVzc2VkKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgICdSU1YxIG11c3QgYmUgY2xlYXInLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgMTAwMixcbiAgICAgICAgICAnV1NfRVJSX1VORVhQRUNURURfUlNWXzEnXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5fZnJhZ21lbnRlZCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgICAnaW52YWxpZCBvcGNvZGUgMCcsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAxMDAyLFxuICAgICAgICAgICdXU19FUlJfSU5WQUxJRF9PUENPREUnXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29wY29kZSA9IHRoaXMuX2ZyYWdtZW50ZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9vcGNvZGUgPT09IDB4MDEgfHwgdGhpcy5fb3Bjb2RlID09PSAweDAyKSB7XG4gICAgICBpZiAodGhpcy5fZnJhZ21lbnRlZCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgICBgaW52YWxpZCBvcGNvZGUgJHt0aGlzLl9vcGNvZGV9YCxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIDEwMDIsXG4gICAgICAgICAgJ1dTX0VSUl9JTlZBTElEX09QQ09ERSdcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29tcHJlc3NlZCA9IGNvbXByZXNzZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9vcGNvZGUgPiAweDA3ICYmIHRoaXMuX29wY29kZSA8IDB4MGIpIHtcbiAgICAgIGlmICghdGhpcy5fZmluKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgICdGSU4gbXVzdCBiZSBzZXQnLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgMTAwMixcbiAgICAgICAgICAnV1NfRVJSX0VYUEVDVEVEX0ZJTidcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbXByZXNzZWQpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgJ1JTVjEgbXVzdCBiZSBjbGVhcicsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAxMDAyLFxuICAgICAgICAgICdXU19FUlJfVU5FWFBFQ1RFRF9SU1ZfMSdcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9wYXlsb2FkTGVuZ3RoID4gMHg3ZCB8fFxuICAgICAgICAodGhpcy5fb3Bjb2RlID09PSAweDA4ICYmIHRoaXMuX3BheWxvYWRMZW5ndGggPT09IDEpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgYGludmFsaWQgcGF5bG9hZCBsZW5ndGggJHt0aGlzLl9wYXlsb2FkTGVuZ3RofWAsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAxMDAyLFxuICAgICAgICAgICdXU19FUlJfSU5WQUxJRF9DT05UUk9MX1BBWUxPQURfTEVOR1RIJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNiKGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgIGBpbnZhbGlkIG9wY29kZSAke3RoaXMuX29wY29kZX1gLFxuICAgICAgICB0cnVlLFxuICAgICAgICAxMDAyLFxuICAgICAgICAnV1NfRVJSX0lOVkFMSURfT1BDT0RFJ1xuICAgICAgKTtcblxuICAgICAgY2IoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZmluICYmICF0aGlzLl9mcmFnbWVudGVkKSB0aGlzLl9mcmFnbWVudGVkID0gdGhpcy5fb3Bjb2RlO1xuICAgIHRoaXMuX21hc2tlZCA9IChidWZbMV0gJiAweDgwKSA9PT0gMHg4MDtcblxuICAgIGlmICh0aGlzLl9pc1NlcnZlcikge1xuICAgICAgaWYgKCF0aGlzLl9tYXNrZWQpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgJ01BU0sgbXVzdCBiZSBzZXQnLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgMTAwMixcbiAgICAgICAgICAnV1NfRVJSX0VYUEVDVEVEX01BU0snXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9tYXNrZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgJ01BU0sgbXVzdCBiZSBjbGVhcicsXG4gICAgICAgIHRydWUsXG4gICAgICAgIDEwMDIsXG4gICAgICAgICdXU19FUlJfVU5FWFBFQ1RFRF9NQVNLJ1xuICAgICAgKTtcblxuICAgICAgY2IoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wYXlsb2FkTGVuZ3RoID09PSAxMjYpIHRoaXMuX3N0YXRlID0gR0VUX1BBWUxPQURfTEVOR1RIXzE2O1xuICAgIGVsc2UgaWYgKHRoaXMuX3BheWxvYWRMZW5ndGggPT09IDEyNykgdGhpcy5fc3RhdGUgPSBHRVRfUEFZTE9BRF9MRU5HVEhfNjQ7XG4gICAgZWxzZSB0aGlzLmhhdmVMZW5ndGgoY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgZXh0ZW5kZWQgcGF5bG9hZCBsZW5ndGggKDcrMTYpLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UGF5bG9hZExlbmd0aDE2KGNiKSB7XG4gICAgaWYgKHRoaXMuX2J1ZmZlcmVkQnl0ZXMgPCAyKSB7XG4gICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcGF5bG9hZExlbmd0aCA9IHRoaXMuY29uc3VtZSgyKS5yZWFkVUludDE2QkUoMCk7XG4gICAgdGhpcy5oYXZlTGVuZ3RoKGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGV4dGVuZGVkIHBheWxvYWQgbGVuZ3RoICg3KzY0KS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFBheWxvYWRMZW5ndGg2NChjYikge1xuICAgIGlmICh0aGlzLl9idWZmZXJlZEJ5dGVzIDwgOCkge1xuICAgICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1ZiA9IHRoaXMuY29uc3VtZSg4KTtcbiAgICBjb25zdCBudW0gPSBidWYucmVhZFVJbnQzMkJFKDApO1xuXG4gICAgLy9cbiAgICAvLyBUaGUgbWF4aW11bSBzYWZlIGludGVnZXIgaW4gSmF2YVNjcmlwdCBpcyAyXjUzIC0gMS4gQW4gZXJyb3IgaXMgcmV0dXJuZWRcbiAgICAvLyBpZiBwYXlsb2FkIGxlbmd0aCBpcyBncmVhdGVyIHRoYW4gdGhpcyBudW1iZXIuXG4gICAgLy9cbiAgICBpZiAobnVtID4gTWF0aC5wb3coMiwgNTMgLSAzMikgLSAxKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICdVbnN1cHBvcnRlZCBXZWJTb2NrZXQgZnJhbWU6IHBheWxvYWQgbGVuZ3RoID4gMl41MyAtIDEnLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgMTAwOSxcbiAgICAgICAgJ1dTX0VSUl9VTlNVUFBPUlRFRF9EQVRBX1BBWUxPQURfTEVOR1RIJ1xuICAgICAgKTtcblxuICAgICAgY2IoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3BheWxvYWRMZW5ndGggPSBudW0gKiBNYXRoLnBvdygyLCAzMikgKyBidWYucmVhZFVJbnQzMkJFKDQpO1xuICAgIHRoaXMuaGF2ZUxlbmd0aChjYik7XG4gIH1cblxuICAvKipcbiAgICogUGF5bG9hZCBsZW5ndGggaGFzIGJlZW4gcmVhZC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhdmVMZW5ndGgoY2IpIHtcbiAgICBpZiAodGhpcy5fcGF5bG9hZExlbmd0aCAmJiB0aGlzLl9vcGNvZGUgPCAweDA4KSB7XG4gICAgICB0aGlzLl90b3RhbFBheWxvYWRMZW5ndGggKz0gdGhpcy5fcGF5bG9hZExlbmd0aDtcbiAgICAgIGlmICh0aGlzLl90b3RhbFBheWxvYWRMZW5ndGggPiB0aGlzLl9tYXhQYXlsb2FkICYmIHRoaXMuX21heFBheWxvYWQgPiAwKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgICdNYXggcGF5bG9hZCBzaXplIGV4Y2VlZGVkJyxcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAxMDA5LFxuICAgICAgICAgICdXU19FUlJfVU5TVVBQT1JURURfTUVTU0FHRV9MRU5HVEgnXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21hc2tlZCkgdGhpcy5fc3RhdGUgPSBHRVRfTUFTSztcbiAgICBlbHNlIHRoaXMuX3N0YXRlID0gR0VUX0RBVEE7XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgbWFzayBieXRlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE1hc2soKSB7XG4gICAgaWYgKHRoaXMuX2J1ZmZlcmVkQnl0ZXMgPCA0KSB7XG4gICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbWFzayA9IHRoaXMuY29uc3VtZSg0KTtcbiAgICB0aGlzLl9zdGF0ZSA9IEdFVF9EQVRBO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIGRhdGEgYnl0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXREYXRhKGNiKSB7XG4gICAgbGV0IGRhdGEgPSBFTVBUWV9CVUZGRVI7XG5cbiAgICBpZiAodGhpcy5fcGF5bG9hZExlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuX2J1ZmZlcmVkQnl0ZXMgPCB0aGlzLl9wYXlsb2FkTGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBkYXRhID0gdGhpcy5jb25zdW1lKHRoaXMuX3BheWxvYWRMZW5ndGgpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX21hc2tlZCAmJlxuICAgICAgICAodGhpcy5fbWFza1swXSB8IHRoaXMuX21hc2tbMV0gfCB0aGlzLl9tYXNrWzJdIHwgdGhpcy5fbWFza1szXSkgIT09IDBcbiAgICAgICkge1xuICAgICAgICB1bm1hc2soZGF0YSwgdGhpcy5fbWFzayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wY29kZSA+IDB4MDcpIHtcbiAgICAgIHRoaXMuY29udHJvbE1lc3NhZ2UoZGF0YSwgY2IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb21wcmVzc2VkKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IElORkxBVElORztcbiAgICAgIHRoaXMuZGVjb21wcmVzcyhkYXRhLCBjYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBtZXNzYWdlIGlzIG5vdCBjb21wcmVzc2VkIHNvIGl0cyBsZW5ndGggaXMgdGhlIHN1bSBvZiB0aGUgcGF5bG9hZFxuICAgICAgLy8gbGVuZ3RoIG9mIGFsbCBmcmFnbWVudHMuXG4gICAgICAvL1xuICAgICAgdGhpcy5fbWVzc2FnZUxlbmd0aCA9IHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aDtcbiAgICAgIHRoaXMuX2ZyYWdtZW50cy5wdXNoKGRhdGEpO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YU1lc3NhZ2UoY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY29tcHJlc3NlcyBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBDb21wcmVzc2VkIGRhdGFcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlY29tcHJlc3MoZGF0YSwgY2IpIHtcbiAgICBjb25zdCBwZXJNZXNzYWdlRGVmbGF0ZSA9IHRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV07XG5cbiAgICBwZXJNZXNzYWdlRGVmbGF0ZS5kZWNvbXByZXNzKGRhdGEsIHRoaXMuX2ZpbiwgKGVyciwgYnVmKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKTtcblxuICAgICAgaWYgKGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fbWVzc2FnZUxlbmd0aCArPSBidWYubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5fbWVzc2FnZUxlbmd0aCA+IHRoaXMuX21heFBheWxvYWQgJiYgdGhpcy5fbWF4UGF5bG9hZCA+IDApIHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgICAgJ01heCBwYXlsb2FkIHNpemUgZXhjZWVkZWQnLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAxMDA5LFxuICAgICAgICAgICAgJ1dTX0VSUl9VTlNVUFBPUlRFRF9NRVNTQUdFX0xFTkdUSCdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2ZyYWdtZW50cy5wdXNoKGJ1Zik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YU1lc3NhZ2UoY2IpO1xuICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBHRVRfSU5GTykgdGhpcy5zdGFydExvb3AoY2IpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSBkYXRhIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkYXRhTWVzc2FnZShjYikge1xuICAgIGlmICghdGhpcy5fZmluKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IEdFVF9JTkZPO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VMZW5ndGggPSB0aGlzLl9tZXNzYWdlTGVuZ3RoO1xuICAgIGNvbnN0IGZyYWdtZW50cyA9IHRoaXMuX2ZyYWdtZW50cztcblxuICAgIHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aCA9IDA7XG4gICAgdGhpcy5fbWVzc2FnZUxlbmd0aCA9IDA7XG4gICAgdGhpcy5fZnJhZ21lbnRlZCA9IDA7XG4gICAgdGhpcy5fZnJhZ21lbnRzID0gW107XG5cbiAgICBpZiAodGhpcy5fb3Bjb2RlID09PSAyKSB7XG4gICAgICBsZXQgZGF0YTtcblxuICAgICAgaWYgKHRoaXMuX2JpbmFyeVR5cGUgPT09ICdub2RlYnVmZmVyJykge1xuICAgICAgICBkYXRhID0gY29uY2F0KGZyYWdtZW50cywgbWVzc2FnZUxlbmd0aCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JpbmFyeVR5cGUgPT09ICdhcnJheWJ1ZmZlcicpIHtcbiAgICAgICAgZGF0YSA9IHRvQXJyYXlCdWZmZXIoY29uY2F0KGZyYWdtZW50cywgbWVzc2FnZUxlbmd0aCkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9iaW5hcnlUeXBlID09PSAnYmxvYicpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBCbG9iKGZyYWdtZW50cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gZnJhZ21lbnRzO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYWxsb3dTeW5jaHJvbm91c0V2ZW50cykge1xuICAgICAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCBkYXRhLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gREVGRVJfRVZFTlQ7XG4gICAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgZGF0YSwgdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgICAgICAgICB0aGlzLnN0YXJ0TG9vcChjYik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBidWYgPSBjb25jYXQoZnJhZ21lbnRzLCBtZXNzYWdlTGVuZ3RoKTtcblxuICAgICAgaWYgKCF0aGlzLl9za2lwVVRGOFZhbGlkYXRpb24gJiYgIWlzVmFsaWRVVEY4KGJ1ZikpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIEVycm9yLFxuICAgICAgICAgICdpbnZhbGlkIFVURi04IHNlcXVlbmNlJyxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIDEwMDcsXG4gICAgICAgICAgJ1dTX0VSUl9JTlZBTElEX1VURjgnXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5GTEFUSU5HIHx8IHRoaXMuX2FsbG93U3luY2hyb25vdXNFdmVudHMpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgYnVmLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IERFRkVSX0VWRU5UO1xuICAgICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZW1pdCgnbWVzc2FnZScsIGJ1ZiwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gICAgICAgICAgdGhpcy5zdGFydExvb3AoY2IpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhIGNvbnRyb2wgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgRGF0YSB0byBoYW5kbGVcbiAgICogQHJldHVybiB7KEVycm9yfFJhbmdlRXJyb3J8dW5kZWZpbmVkKX0gQSBwb3NzaWJsZSBlcnJvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29udHJvbE1lc3NhZ2UoZGF0YSwgY2IpIHtcbiAgICBpZiAodGhpcy5fb3Bjb2RlID09PSAweDA4KSB7XG4gICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVtaXQoJ2NvbmNsdWRlJywgMTAwNSwgRU1QVFlfQlVGRkVSKTtcbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBkYXRhLnJlYWRVSW50MTZCRSgwKTtcblxuICAgICAgICBpZiAoIWlzVmFsaWRTdGF0dXNDb2RlKGNvZGUpKSB7XG4gICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgICAgIGBpbnZhbGlkIHN0YXR1cyBjb2RlICR7Y29kZX1gLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIDEwMDIsXG4gICAgICAgICAgICAnV1NfRVJSX0lOVkFMSURfQ0xPU0VfQ09ERSdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1ZiA9IG5ldyBGYXN0QnVmZmVyKFxuICAgICAgICAgIGRhdGEuYnVmZmVyLFxuICAgICAgICAgIGRhdGEuYnl0ZU9mZnNldCArIDIsXG4gICAgICAgICAgZGF0YS5sZW5ndGggLSAyXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9za2lwVVRGOFZhbGlkYXRpb24gJiYgIWlzVmFsaWRVVEY4KGJ1ZikpIHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgICBFcnJvcixcbiAgICAgICAgICAgICdpbnZhbGlkIFVURi04IHNlcXVlbmNlJyxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAxMDA3LFxuICAgICAgICAgICAgJ1dTX0VSUl9JTlZBTElEX1VURjgnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNiKGVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW1pdCgnY29uY2x1ZGUnLCBjb2RlLCBidWYpO1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zdGF0ZSA9IEdFVF9JTkZPO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9hbGxvd1N5bmNocm9ub3VzRXZlbnRzKSB7XG4gICAgICB0aGlzLmVtaXQodGhpcy5fb3Bjb2RlID09PSAweDA5ID8gJ3BpbmcnIDogJ3BvbmcnLCBkYXRhKTtcbiAgICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gREVGRVJfRVZFTlQ7XG4gICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQodGhpcy5fb3Bjb2RlID09PSAweDA5ID8gJ3BpbmcnIDogJ3BvbmcnLCBkYXRhKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgICAgICAgdGhpcy5zdGFydExvb3AoY2IpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBhbiBlcnJvciBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24obmV3OkVycm9yfFJhbmdlRXJyb3IpfSBFcnJvckN0b3IgVGhlIGVycm9yIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJlZml4IFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBhZGQgYSBkZWZhdWx0IHByZWZpeCB0b1xuICAgKiAgICAgYG1lc3NhZ2VgXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNDb2RlIFRoZSBzdGF0dXMgY29kZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXJyb3JDb2RlIFRoZSBleHBvc2VkIGVycm9yIGNvZGVcbiAgICogQHJldHVybiB7KEVycm9yfFJhbmdlRXJyb3IpfSBUaGUgZXJyb3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZUVycm9yKEVycm9yQ3RvciwgbWVzc2FnZSwgcHJlZml4LCBzdGF0dXNDb2RlLCBlcnJvckNvZGUpIHtcbiAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgdGhpcy5fZXJyb3JlZCA9IHRydWU7XG5cbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3JDdG9yKFxuICAgICAgcHJlZml4ID8gYEludmFsaWQgV2ViU29ja2V0IGZyYW1lOiAke21lc3NhZ2V9YCA6IG1lc3NhZ2VcbiAgICApO1xuXG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoZXJyLCB0aGlzLmNyZWF0ZUVycm9yKTtcbiAgICBlcnIuY29kZSA9IGVycm9yQ29kZTtcbiAgICBlcnJba1N0YXR1c0NvZGVdID0gc3RhdHVzQ29kZTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjZWl2ZXI7XG4iLCAiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbXCJlcnJvclwiLCB7IFwidmFyc0lnbm9yZVBhdHRlcm5cIjogXCJeRHVwbGV4XCIgfV0gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7IER1cGxleCB9ID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5jb25zdCB7IHJhbmRvbUZpbGxTeW5jIH0gPSByZXF1aXJlKCdjcnlwdG8nKTtcbmNvbnN0IHtcbiAgdHlwZXM6IHsgaXNVaW50OEFycmF5IH1cbn0gPSByZXF1aXJlKCd1dGlsJyk7XG5cbmNvbnN0IFBlck1lc3NhZ2VEZWZsYXRlID0gcmVxdWlyZSgnLi9wZXJtZXNzYWdlLWRlZmxhdGUnKTtcbmNvbnN0IHsgRU1QVFlfQlVGRkVSLCBrV2ViU29ja2V0LCBOT09QIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuY29uc3QgeyBpc0Jsb2IsIGlzVmFsaWRTdGF0dXNDb2RlIH0gPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcbmNvbnN0IHsgbWFzazogYXBwbHlNYXNrLCB0b0J1ZmZlciB9ID0gcmVxdWlyZSgnLi9idWZmZXItdXRpbCcpO1xuXG5jb25zdCBrQnl0ZUxlbmd0aCA9IFN5bWJvbCgna0J5dGVMZW5ndGgnKTtcbmNvbnN0IG1hc2tCdWZmZXIgPSBCdWZmZXIuYWxsb2MoNCk7XG5jb25zdCBSQU5ET01fUE9PTF9TSVpFID0gOCAqIDEwMjQ7XG5sZXQgcmFuZG9tUG9vbDtcbmxldCByYW5kb21Qb29sUG9pbnRlciA9IFJBTkRPTV9QT09MX1NJWkU7XG5cbmNvbnN0IERFRkFVTFQgPSAwO1xuY29uc3QgREVGTEFUSU5HID0gMTtcbmNvbnN0IEdFVF9CTE9CX0RBVEEgPSAyO1xuXG4vKipcbiAqIEh5QmkgU2VuZGVyIGltcGxlbWVudGF0aW9uLlxuICovXG5jbGFzcyBTZW5kZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIFNlbmRlciBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtEdXBsZXh9IHNvY2tldCBUaGUgY29ubmVjdGlvbiBzb2NrZXRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtleHRlbnNpb25zXSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgbmVnb3RpYXRlZCBleHRlbnNpb25zXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtnZW5lcmF0ZU1hc2tdIFRoZSBmdW5jdGlvbiB1c2VkIHRvIGdlbmVyYXRlIHRoZSBtYXNraW5nXG4gICAqICAgICBrZXlcbiAgICovXG4gIGNvbnN0cnVjdG9yKHNvY2tldCwgZXh0ZW5zaW9ucywgZ2VuZXJhdGVNYXNrKSB7XG4gICAgdGhpcy5fZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnMgfHwge307XG5cbiAgICBpZiAoZ2VuZXJhdGVNYXNrKSB7XG4gICAgICB0aGlzLl9nZW5lcmF0ZU1hc2sgPSBnZW5lcmF0ZU1hc2s7XG4gICAgICB0aGlzLl9tYXNrQnVmZmVyID0gQnVmZmVyLmFsbG9jKDQpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvY2tldCA9IHNvY2tldDtcblxuICAgIHRoaXMuX2ZpcnN0RnJhZ21lbnQgPSB0cnVlO1xuICAgIHRoaXMuX2NvbXByZXNzID0gZmFsc2U7XG5cbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzID0gMDtcbiAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIHRoaXMuX3N0YXRlID0gREVGQVVMVDtcbiAgICB0aGlzLm9uZXJyb3IgPSBOT09QO1xuICAgIHRoaXNba1dlYlNvY2tldF0gPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRnJhbWVzIGEgcGllY2Ugb2YgZGF0YSBhY2NvcmRpbmcgdG8gdGhlIEh5QmkgV2ViU29ja2V0IHByb3RvY29sLlxuICAgKlxuICAgKiBAcGFyYW0geyhCdWZmZXJ8U3RyaW5nKX0gZGF0YSBUaGUgZGF0YSB0byBmcmFtZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZpbj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIHNldCB0aGVcbiAgICogICAgIEZJTiBiaXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMuZ2VuZXJhdGVNYXNrXSBUaGUgZnVuY3Rpb24gdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAgICogICAgIG1hc2tpbmcga2V5XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWFzaz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2tcbiAgICogICAgIGBkYXRhYFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gW29wdGlvbnMubWFza0J1ZmZlcl0gVGhlIGJ1ZmZlciB1c2VkIHRvIHN0b3JlIHRoZSBtYXNraW5nXG4gICAqICAgICBrZXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMub3Bjb2RlIFRoZSBvcGNvZGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yZWFkT25seT1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGNhbiBiZVxuICAgKiAgICAgbW9kaWZpZWRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yc3YxPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gc2V0IHRoZVxuICAgKiAgICAgUlNWMSBiaXRcbiAgICogQHJldHVybiB7KEJ1ZmZlcnxTdHJpbmcpW119IFRoZSBmcmFtZWQgZGF0YVxuICAgKiBAcHVibGljXG4gICAqL1xuICBzdGF0aWMgZnJhbWUoZGF0YSwgb3B0aW9ucykge1xuICAgIGxldCBtYXNrO1xuICAgIGxldCBtZXJnZSA9IGZhbHNlO1xuICAgIGxldCBvZmZzZXQgPSAyO1xuICAgIGxldCBza2lwTWFza2luZyA9IGZhbHNlO1xuXG4gICAgaWYgKG9wdGlvbnMubWFzaykge1xuICAgICAgbWFzayA9IG9wdGlvbnMubWFza0J1ZmZlciB8fCBtYXNrQnVmZmVyO1xuXG4gICAgICBpZiAob3B0aW9ucy5nZW5lcmF0ZU1hc2spIHtcbiAgICAgICAgb3B0aW9ucy5nZW5lcmF0ZU1hc2sobWFzayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmFuZG9tUG9vbFBvaW50ZXIgPT09IFJBTkRPTV9QT09MX1NJWkUpIHtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAgKi9cbiAgICAgICAgICBpZiAocmFuZG9tUG9vbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBsYXppbHkgaW5pdGlhbGl6ZWQgYmVjYXVzZSBzZXJ2ZXItc2VudCBmcmFtZXMgbXVzdCBub3RcbiAgICAgICAgICAgIC8vIGJlIG1hc2tlZCBzbyBpdCBtYXkgbmV2ZXIgYmUgdXNlZC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICByYW5kb21Qb29sID0gQnVmZmVyLmFsbG9jKFJBTkRPTV9QT09MX1NJWkUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJhbmRvbUZpbGxTeW5jKHJhbmRvbVBvb2wsIDAsIFJBTkRPTV9QT09MX1NJWkUpO1xuICAgICAgICAgIHJhbmRvbVBvb2xQb2ludGVyID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hc2tbMF0gPSByYW5kb21Qb29sW3JhbmRvbVBvb2xQb2ludGVyKytdO1xuICAgICAgICBtYXNrWzFdID0gcmFuZG9tUG9vbFtyYW5kb21Qb29sUG9pbnRlcisrXTtcbiAgICAgICAgbWFza1syXSA9IHJhbmRvbVBvb2xbcmFuZG9tUG9vbFBvaW50ZXIrK107XG4gICAgICAgIG1hc2tbM10gPSByYW5kb21Qb29sW3JhbmRvbVBvb2xQb2ludGVyKytdO1xuICAgICAgfVxuXG4gICAgICBza2lwTWFza2luZyA9IChtYXNrWzBdIHwgbWFza1sxXSB8IG1hc2tbMl0gfCBtYXNrWzNdKSA9PT0gMDtcbiAgICAgIG9mZnNldCA9IDY7XG4gICAgfVxuXG4gICAgbGV0IGRhdGFMZW5ndGg7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoXG4gICAgICAgICghb3B0aW9ucy5tYXNrIHx8IHNraXBNYXNraW5nKSAmJlxuICAgICAgICBvcHRpb25zW2tCeXRlTGVuZ3RoXSAhPT0gdW5kZWZpbmVkXG4gICAgICApIHtcbiAgICAgICAgZGF0YUxlbmd0aCA9IG9wdGlvbnNba0J5dGVMZW5ndGhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IEJ1ZmZlci5mcm9tKGRhdGEpO1xuICAgICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aDtcbiAgICAgIG1lcmdlID0gb3B0aW9ucy5tYXNrICYmIG9wdGlvbnMucmVhZE9ubHkgJiYgIXNraXBNYXNraW5nO1xuICAgIH1cblxuICAgIGxldCBwYXlsb2FkTGVuZ3RoID0gZGF0YUxlbmd0aDtcblxuICAgIGlmIChkYXRhTGVuZ3RoID49IDY1NTM2KSB7XG4gICAgICBvZmZzZXQgKz0gODtcbiAgICAgIHBheWxvYWRMZW5ndGggPSAxMjc7XG4gICAgfSBlbHNlIGlmIChkYXRhTGVuZ3RoID4gMTI1KSB7XG4gICAgICBvZmZzZXQgKz0gMjtcbiAgICAgIHBheWxvYWRMZW5ndGggPSAxMjY7XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKG1lcmdlID8gZGF0YUxlbmd0aCArIG9mZnNldCA6IG9mZnNldCk7XG5cbiAgICB0YXJnZXRbMF0gPSBvcHRpb25zLmZpbiA/IG9wdGlvbnMub3Bjb2RlIHwgMHg4MCA6IG9wdGlvbnMub3Bjb2RlO1xuICAgIGlmIChvcHRpb25zLnJzdjEpIHRhcmdldFswXSB8PSAweDQwO1xuXG4gICAgdGFyZ2V0WzFdID0gcGF5bG9hZExlbmd0aDtcblxuICAgIGlmIChwYXlsb2FkTGVuZ3RoID09PSAxMjYpIHtcbiAgICAgIHRhcmdldC53cml0ZVVJbnQxNkJFKGRhdGFMZW5ndGgsIDIpO1xuICAgIH0gZWxzZSBpZiAocGF5bG9hZExlbmd0aCA9PT0gMTI3KSB7XG4gICAgICB0YXJnZXRbMl0gPSB0YXJnZXRbM10gPSAwO1xuICAgICAgdGFyZ2V0LndyaXRlVUludEJFKGRhdGFMZW5ndGgsIDQsIDYpO1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5tYXNrKSByZXR1cm4gW3RhcmdldCwgZGF0YV07XG5cbiAgICB0YXJnZXRbMV0gfD0gMHg4MDtcbiAgICB0YXJnZXRbb2Zmc2V0IC0gNF0gPSBtYXNrWzBdO1xuICAgIHRhcmdldFtvZmZzZXQgLSAzXSA9IG1hc2tbMV07XG4gICAgdGFyZ2V0W29mZnNldCAtIDJdID0gbWFza1syXTtcbiAgICB0YXJnZXRbb2Zmc2V0IC0gMV0gPSBtYXNrWzNdO1xuXG4gICAgaWYgKHNraXBNYXNraW5nKSByZXR1cm4gW3RhcmdldCwgZGF0YV07XG5cbiAgICBpZiAobWVyZ2UpIHtcbiAgICAgIGFwcGx5TWFzayhkYXRhLCBtYXNrLCB0YXJnZXQsIG9mZnNldCwgZGF0YUxlbmd0aCk7XG4gICAgICByZXR1cm4gW3RhcmdldF07XG4gICAgfVxuXG4gICAgYXBwbHlNYXNrKGRhdGEsIG1hc2ssIGRhdGEsIDAsIGRhdGFMZW5ndGgpO1xuICAgIHJldHVybiBbdGFyZ2V0LCBkYXRhXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIGNsb3NlIG1lc3NhZ2UgdG8gdGhlIG90aGVyIHBlZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbY29kZV0gVGhlIHN0YXR1cyBjb2RlIGNvbXBvbmVudCBvZiB0aGUgYm9keVxuICAgKiBAcGFyYW0geyhTdHJpbmd8QnVmZmVyKX0gW2RhdGFdIFRoZSBtZXNzYWdlIGNvbXBvbmVudCBvZiB0aGUgYm9keVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttYXNrPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFzayB0aGUgbWVzc2FnZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNsb3NlKGNvZGUsIGRhdGEsIG1hc2ssIGNiKSB7XG4gICAgbGV0IGJ1ZjtcblxuICAgIGlmIChjb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGJ1ZiA9IEVNUFRZX0JVRkZFUjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb2RlICE9PSAnbnVtYmVyJyB8fCAhaXNWYWxpZFN0YXR1c0NvZGUoY29kZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSB2YWxpZCBlcnJvciBjb2RlIG51bWJlcicpO1xuICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkIHx8ICFkYXRhLmxlbmd0aCkge1xuICAgICAgYnVmID0gQnVmZmVyLmFsbG9jVW5zYWZlKDIpO1xuICAgICAgYnVmLndyaXRlVUludDE2QkUoY29kZSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpO1xuXG4gICAgICBpZiAobGVuZ3RoID4gMTIzKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgbWVzc2FnZSBtdXN0IG5vdCBiZSBncmVhdGVyIHRoYW4gMTIzIGJ5dGVzJyk7XG4gICAgICB9XG5cbiAgICAgIGJ1ZiA9IEJ1ZmZlci5hbGxvY1Vuc2FmZSgyICsgbGVuZ3RoKTtcbiAgICAgIGJ1Zi53cml0ZVVJbnQxNkJFKGNvZGUsIDApO1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGJ1Zi53cml0ZShkYXRhLCAyKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNVaW50OEFycmF5KGRhdGEpKSB7XG4gICAgICAgIGJ1Zi5zZXQoZGF0YSwgMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZyBvciBhIFVpbnQ4QXJyYXknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgW2tCeXRlTGVuZ3RoXTogYnVmLmxlbmd0aCxcbiAgICAgIGZpbjogdHJ1ZSxcbiAgICAgIGdlbmVyYXRlTWFzazogdGhpcy5fZ2VuZXJhdGVNYXNrLFxuICAgICAgbWFzayxcbiAgICAgIG1hc2tCdWZmZXI6IHRoaXMuX21hc2tCdWZmZXIsXG4gICAgICBvcGNvZGU6IDB4MDgsXG4gICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICByc3YxOiBmYWxzZVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5fc3RhdGUgIT09IERFRkFVTFQpIHtcbiAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5kaXNwYXRjaCwgYnVmLCBmYWxzZSwgb3B0aW9ucywgY2JdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZW5kRnJhbWUoU2VuZGVyLmZyYW1lKGJ1Ziwgb3B0aW9ucyksIGNiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBwaW5nIG1lc3NhZ2UgdG8gdGhlIG90aGVyIHBlZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW21hc2s9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHBpbmcoZGF0YSwgbWFzaywgY2IpIHtcbiAgICBsZXQgYnl0ZUxlbmd0aDtcbiAgICBsZXQgcmVhZE9ubHk7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBieXRlTGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSk7XG4gICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaXNCbG9iKGRhdGEpKSB7XG4gICAgICBieXRlTGVuZ3RoID0gZGF0YS5zaXplO1xuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHRvQnVmZmVyKGRhdGEpO1xuICAgICAgYnl0ZUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgcmVhZE9ubHkgPSB0b0J1ZmZlci5yZWFkT25seTtcbiAgICB9XG5cbiAgICBpZiAoYnl0ZUxlbmd0aCA+IDEyNSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSBkYXRhIHNpemUgbXVzdCBub3QgYmUgZ3JlYXRlciB0aGFuIDEyNSBieXRlcycpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBba0J5dGVMZW5ndGhdOiBieXRlTGVuZ3RoLFxuICAgICAgZmluOiB0cnVlLFxuICAgICAgZ2VuZXJhdGVNYXNrOiB0aGlzLl9nZW5lcmF0ZU1hc2ssXG4gICAgICBtYXNrLFxuICAgICAgbWFza0J1ZmZlcjogdGhpcy5fbWFza0J1ZmZlcixcbiAgICAgIG9wY29kZTogMHgwOSxcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgcnN2MTogZmFsc2VcbiAgICB9O1xuXG4gICAgaWYgKGlzQmxvYihkYXRhKSkge1xuICAgICAgaWYgKHRoaXMuX3N0YXRlICE9PSBERUZBVUxUKSB7XG4gICAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5nZXRCbG9iRGF0YSwgZGF0YSwgZmFsc2UsIG9wdGlvbnMsIGNiXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdldEJsb2JEYXRhKGRhdGEsIGZhbHNlLCBvcHRpb25zLCBjYik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSAhPT0gREVGQVVMVCkge1xuICAgICAgdGhpcy5lbnF1ZXVlKFt0aGlzLmRpc3BhdGNoLCBkYXRhLCBmYWxzZSwgb3B0aW9ucywgY2JdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZW5kRnJhbWUoU2VuZGVyLmZyYW1lKGRhdGEsIG9wdGlvbnMpLCBjYik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgcG9uZyBtZXNzYWdlIHRvIHRoZSBvdGhlciBwZWVyLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgVGhlIG1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttYXNrPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFzayBgZGF0YWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBDYWxsYmFja1xuICAgKiBAcHVibGljXG4gICAqL1xuICBwb25nKGRhdGEsIG1hc2ssIGNiKSB7XG4gICAgbGV0IGJ5dGVMZW5ndGg7XG4gICAgbGV0IHJlYWRPbmx5O1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgYnl0ZUxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpO1xuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGlzQmxvYihkYXRhKSkge1xuICAgICAgYnl0ZUxlbmd0aCA9IGRhdGEuc2l6ZTtcbiAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSB0b0J1ZmZlcihkYXRhKTtcbiAgICAgIGJ5dGVMZW5ndGggPSBkYXRhLmxlbmd0aDtcbiAgICAgIHJlYWRPbmx5ID0gdG9CdWZmZXIucmVhZE9ubHk7XG4gICAgfVxuXG4gICAgaWYgKGJ5dGVMZW5ndGggPiAxMjUpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgZGF0YSBzaXplIG11c3Qgbm90IGJlIGdyZWF0ZXIgdGhhbiAxMjUgYnl0ZXMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgW2tCeXRlTGVuZ3RoXTogYnl0ZUxlbmd0aCxcbiAgICAgIGZpbjogdHJ1ZSxcbiAgICAgIGdlbmVyYXRlTWFzazogdGhpcy5fZ2VuZXJhdGVNYXNrLFxuICAgICAgbWFzayxcbiAgICAgIG1hc2tCdWZmZXI6IHRoaXMuX21hc2tCdWZmZXIsXG4gICAgICBvcGNvZGU6IDB4MGEsXG4gICAgICByZWFkT25seSxcbiAgICAgIHJzdjE6IGZhbHNlXG4gICAgfTtcblxuICAgIGlmIChpc0Jsb2IoZGF0YSkpIHtcbiAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gREVGQVVMVCkge1xuICAgICAgICB0aGlzLmVucXVldWUoW3RoaXMuZ2V0QmxvYkRhdGEsIGRhdGEsIGZhbHNlLCBvcHRpb25zLCBjYl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRCbG9iRGF0YShkYXRhLCBmYWxzZSwgb3B0aW9ucywgY2IpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgIT09IERFRkFVTFQpIHtcbiAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5kaXNwYXRjaCwgZGF0YSwgZmFsc2UsIG9wdGlvbnMsIGNiXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VuZEZyYW1lKFNlbmRlci5mcmFtZShkYXRhLCBvcHRpb25zKSwgY2IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIGRhdGEgbWVzc2FnZSB0byB0aGUgb3RoZXIgcGVlci5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5iaW5hcnk9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIGBkYXRhYCBpcyBiaW5hcnlcbiAgICogICAgIG9yIHRleHRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jb21wcmVzcz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvXG4gICAqICAgICBjb21wcmVzcyBgZGF0YWBcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5maW49ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmcmFnbWVudCBpcyB0aGVcbiAgICogICAgIGxhc3Qgb25lXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWFzaz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2tcbiAgICogICAgIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHNlbmQoZGF0YSwgb3B0aW9ucywgY2IpIHtcbiAgICBjb25zdCBwZXJNZXNzYWdlRGVmbGF0ZSA9IHRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV07XG4gICAgbGV0IG9wY29kZSA9IG9wdGlvbnMuYmluYXJ5ID8gMiA6IDE7XG4gICAgbGV0IHJzdjEgPSBvcHRpb25zLmNvbXByZXNzO1xuXG4gICAgbGV0IGJ5dGVMZW5ndGg7XG4gICAgbGV0IHJlYWRPbmx5O1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgYnl0ZUxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpO1xuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGlzQmxvYihkYXRhKSkge1xuICAgICAgYnl0ZUxlbmd0aCA9IGRhdGEuc2l6ZTtcbiAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSB0b0J1ZmZlcihkYXRhKTtcbiAgICAgIGJ5dGVMZW5ndGggPSBkYXRhLmxlbmd0aDtcbiAgICAgIHJlYWRPbmx5ID0gdG9CdWZmZXIucmVhZE9ubHk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ZpcnN0RnJhZ21lbnQpIHtcbiAgICAgIHRoaXMuX2ZpcnN0RnJhZ21lbnQgPSBmYWxzZTtcbiAgICAgIGlmIChcbiAgICAgICAgcnN2MSAmJlxuICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZSAmJlxuICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZS5wYXJhbXNbXG4gICAgICAgICAgcGVyTWVzc2FnZURlZmxhdGUuX2lzU2VydmVyXG4gICAgICAgICAgICA/ICdzZXJ2ZXJfbm9fY29udGV4dF90YWtlb3ZlcidcbiAgICAgICAgICAgIDogJ2NsaWVudF9ub19jb250ZXh0X3Rha2VvdmVyJ1xuICAgICAgICBdXG4gICAgICApIHtcbiAgICAgICAgcnN2MSA9IGJ5dGVMZW5ndGggPj0gcGVyTWVzc2FnZURlZmxhdGUuX3RocmVzaG9sZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbXByZXNzID0gcnN2MTtcbiAgICB9IGVsc2Uge1xuICAgICAgcnN2MSA9IGZhbHNlO1xuICAgICAgb3Bjb2RlID0gMDtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5maW4pIHRoaXMuX2ZpcnN0RnJhZ21lbnQgPSB0cnVlO1xuXG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIFtrQnl0ZUxlbmd0aF06IGJ5dGVMZW5ndGgsXG4gICAgICBmaW46IG9wdGlvbnMuZmluLFxuICAgICAgZ2VuZXJhdGVNYXNrOiB0aGlzLl9nZW5lcmF0ZU1hc2ssXG4gICAgICBtYXNrOiBvcHRpb25zLm1hc2ssXG4gICAgICBtYXNrQnVmZmVyOiB0aGlzLl9tYXNrQnVmZmVyLFxuICAgICAgb3Bjb2RlLFxuICAgICAgcmVhZE9ubHksXG4gICAgICByc3YxXG4gICAgfTtcblxuICAgIGlmIChpc0Jsb2IoZGF0YSkpIHtcbiAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gREVGQVVMVCkge1xuICAgICAgICB0aGlzLmVucXVldWUoW3RoaXMuZ2V0QmxvYkRhdGEsIGRhdGEsIHRoaXMuX2NvbXByZXNzLCBvcHRzLCBjYl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRCbG9iRGF0YShkYXRhLCB0aGlzLl9jb21wcmVzcywgb3B0cywgY2IpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgIT09IERFRkFVTFQpIHtcbiAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5kaXNwYXRjaCwgZGF0YSwgdGhpcy5fY29tcHJlc3MsIG9wdHMsIGNiXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2goZGF0YSwgdGhpcy5fY29tcHJlc3MsIG9wdHMsIGNiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY29udGVudHMgb2YgYSBibG9iIGFzIGJpbmFyeSBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge0Jsb2J9IGJsb2IgVGhlIGJsb2JcbiAgICogQHBhcmFtIHtCb29sZWFufSBbY29tcHJlc3M9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBjb21wcmVzc1xuICAgKiAgICAgdGhlIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5maW49ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBzZXQgdGhlXG4gICAqICAgICBGSU4gYml0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLmdlbmVyYXRlTWFza10gVGhlIGZ1bmN0aW9uIHVzZWQgdG8gZ2VuZXJhdGUgdGhlXG4gICAqICAgICBtYXNraW5nIGtleVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm1hc2s9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrXG4gICAqICAgICBgZGF0YWBcbiAgICogQHBhcmFtIHtCdWZmZXJ9IFtvcHRpb25zLm1hc2tCdWZmZXJdIFRoZSBidWZmZXIgdXNlZCB0byBzdG9yZSB0aGUgbWFza2luZ1xuICAgKiAgICAga2V5XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLm9wY29kZSBUaGUgb3Bjb2RlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMucmVhZE9ubHk9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIGBkYXRhYCBjYW4gYmVcbiAgICogICAgIG1vZGlmaWVkXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMucnN2MT1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIHNldCB0aGVcbiAgICogICAgIFJTVjEgYml0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEJsb2JEYXRhKGJsb2IsIGNvbXByZXNzLCBvcHRpb25zLCBjYikge1xuICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgKz0gb3B0aW9uc1trQnl0ZUxlbmd0aF07XG4gICAgdGhpcy5fc3RhdGUgPSBHRVRfQkxPQl9EQVRBO1xuXG4gICAgYmxvYlxuICAgICAgLmFycmF5QnVmZmVyKClcbiAgICAgIC50aGVuKChhcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICBpZiAodGhpcy5fc29ja2V0LmRlc3Ryb3llZCkge1xuICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdUaGUgc29ja2V0IHdhcyBjbG9zZWQgd2hpbGUgdGhlIGJsb2Igd2FzIGJlaW5nIHJlYWQnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gYGNhbGxDYWxsYmFja3NgIGlzIGNhbGxlZCBpbiB0aGUgbmV4dCB0aWNrIHRvIGVuc3VyZSB0aGF0IGVycm9yc1xuICAgICAgICAgIC8vIHRoYXQgbWlnaHQgYmUgdGhyb3duIGluIHRoZSBjYWxsYmFja3MgYmVoYXZlIGxpa2UgZXJyb3JzIHRocm93blxuICAgICAgICAgIC8vIG91dHNpZGUgdGhlIHByb21pc2UgY2hhaW4uXG4gICAgICAgICAgLy9cbiAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGNhbGxDYWxsYmFja3MsIHRoaXMsIGVyciwgY2IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgLT0gb3B0aW9uc1trQnl0ZUxlbmd0aF07XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0b0J1ZmZlcihhcnJheUJ1ZmZlcik7XG5cbiAgICAgICAgaWYgKCFjb21wcmVzcykge1xuICAgICAgICAgIHRoaXMuX3N0YXRlID0gREVGQVVMVDtcbiAgICAgICAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoZGF0YSwgb3B0aW9ucyksIGNiKTtcbiAgICAgICAgICB0aGlzLmRlcXVldWUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoKGRhdGEsIGNvbXByZXNzLCBvcHRpb25zLCBjYik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvL1xuICAgICAgICAvLyBgb25FcnJvcmAgaXMgY2FsbGVkIGluIHRoZSBuZXh0IHRpY2sgZm9yIHRoZSBzYW1lIHJlYXNvbiB0aGF0XG4gICAgICAgIC8vIGBjYWxsQ2FsbGJhY2tzYCBhYm92ZSBpcy5cbiAgICAgICAgLy9cbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhvbkVycm9yLCB0aGlzLCBlcnIsIGNiKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0geyhCdWZmZXJ8U3RyaW5nKX0gZGF0YSBUaGUgbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NvbXByZXNzPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gY29tcHJlc3NcbiAgICogICAgIGBkYXRhYFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZpbj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIHNldCB0aGVcbiAgICogICAgIEZJTiBiaXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMuZ2VuZXJhdGVNYXNrXSBUaGUgZnVuY3Rpb24gdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAgICogICAgIG1hc2tpbmcga2V5XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWFzaz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2tcbiAgICogICAgIGBkYXRhYFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gW29wdGlvbnMubWFza0J1ZmZlcl0gVGhlIGJ1ZmZlciB1c2VkIHRvIHN0b3JlIHRoZSBtYXNraW5nXG4gICAqICAgICBrZXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMub3Bjb2RlIFRoZSBvcGNvZGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yZWFkT25seT1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGNhbiBiZVxuICAgKiAgICAgbW9kaWZpZWRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yc3YxPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gc2V0IHRoZVxuICAgKiAgICAgUlNWMSBiaXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGlzcGF0Y2goZGF0YSwgY29tcHJlc3MsIG9wdGlvbnMsIGNiKSB7XG4gICAgaWYgKCFjb21wcmVzcykge1xuICAgICAgdGhpcy5zZW5kRnJhbWUoU2VuZGVyLmZyYW1lKGRhdGEsIG9wdGlvbnMpLCBjYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGVyTWVzc2FnZURlZmxhdGUgPSB0aGlzLl9leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdO1xuXG4gICAgdGhpcy5fYnVmZmVyZWRCeXRlcyArPSBvcHRpb25zW2tCeXRlTGVuZ3RoXTtcbiAgICB0aGlzLl9zdGF0ZSA9IERFRkxBVElORztcbiAgICBwZXJNZXNzYWdlRGVmbGF0ZS5jb21wcmVzcyhkYXRhLCBvcHRpb25zLmZpbiwgKF8sIGJ1ZikgPT4ge1xuICAgICAgaWYgKHRoaXMuX3NvY2tldC5kZXN0cm95ZWQpIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICdUaGUgc29ja2V0IHdhcyBjbG9zZWQgd2hpbGUgZGF0YSB3YXMgYmVpbmcgY29tcHJlc3NlZCdcbiAgICAgICAgKTtcblxuICAgICAgICBjYWxsQ2FsbGJhY2tzKHRoaXMsIGVyciwgY2IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgLT0gb3B0aW9uc1trQnl0ZUxlbmd0aF07XG4gICAgICB0aGlzLl9zdGF0ZSA9IERFRkFVTFQ7XG4gICAgICBvcHRpb25zLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoYnVmLCBvcHRpb25zKSwgY2IpO1xuICAgICAgdGhpcy5kZXF1ZXVlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgcXVldWVkIHNlbmQgb3BlcmF0aW9ucy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlcXVldWUoKSB7XG4gICAgd2hpbGUgKHRoaXMuX3N0YXRlID09PSBERUZBVUxUICYmIHRoaXMuX3F1ZXVlLmxlbmd0aCkge1xuICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5fcXVldWUuc2hpZnQoKTtcblxuICAgICAgdGhpcy5fYnVmZmVyZWRCeXRlcyAtPSBwYXJhbXNbM11ba0J5dGVMZW5ndGhdO1xuICAgICAgUmVmbGVjdC5hcHBseShwYXJhbXNbMF0sIHRoaXMsIHBhcmFtcy5zbGljZSgxKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVucXVldWVzIGEgc2VuZCBvcGVyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBTZW5kIG9wZXJhdGlvbiBwYXJhbWV0ZXJzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZW5xdWV1ZShwYXJhbXMpIHtcbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzICs9IHBhcmFtc1szXVtrQnl0ZUxlbmd0aF07XG4gICAgdGhpcy5fcXVldWUucHVzaChwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgZnJhbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7KEJ1ZmZlciB8IFN0cmluZylbXX0gbGlzdCBUaGUgZnJhbWUgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZW5kRnJhbWUobGlzdCwgY2IpIHtcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMuX3NvY2tldC5jb3JrKCk7XG4gICAgICB0aGlzLl9zb2NrZXQud3JpdGUobGlzdFswXSk7XG4gICAgICB0aGlzLl9zb2NrZXQud3JpdGUobGlzdFsxXSwgY2IpO1xuICAgICAgdGhpcy5fc29ja2V0LnVuY29yaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zb2NrZXQud3JpdGUobGlzdFswXSwgY2IpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbmRlcjtcblxuLyoqXG4gKiBDYWxscyBxdWV1ZWQgY2FsbGJhY2tzIHdpdGggYW4gZXJyb3IuXG4gKlxuICogQHBhcmFtIHtTZW5kZXJ9IHNlbmRlciBUaGUgYFNlbmRlcmAgaW5zdGFuY2VcbiAqIEBwYXJhbSB7RXJyb3J9IGVyciBUaGUgZXJyb3IgdG8gY2FsbCB0aGUgY2FsbGJhY2tzIHdpdGhcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gVGhlIGZpcnN0IGNhbGxiYWNrXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjYWxsQ2FsbGJhY2tzKHNlbmRlciwgZXJyLCBjYikge1xuICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihlcnIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VuZGVyLl9xdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBhcmFtcyA9IHNlbmRlci5fcXVldWVbaV07XG4gICAgY29uc3QgY2FsbGJhY2sgPSBwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soZXJyKTtcbiAgfVxufVxuXG4vKipcbiAqIEhhbmRsZXMgYSBgU2VuZGVyYCBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge1NlbmRlcn0gc2VuZGVyIFRoZSBgU2VuZGVyYCBpbnN0YW5jZVxuICogQHBhcmFtIHtFcnJvcn0gZXJyIFRoZSBlcnJvclxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBUaGUgZmlyc3QgcGVuZGluZyBjYWxsYmFja1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gb25FcnJvcihzZW5kZXIsIGVyciwgY2IpIHtcbiAgY2FsbENhbGxiYWNrcyhzZW5kZXIsIGVyciwgY2IpO1xuICBzZW5kZXIub25lcnJvcihlcnIpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBrRm9yT25FdmVudEF0dHJpYnV0ZSwga0xpc3RlbmVyIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5jb25zdCBrQ29kZSA9IFN5bWJvbCgna0NvZGUnKTtcbmNvbnN0IGtEYXRhID0gU3ltYm9sKCdrRGF0YScpO1xuY29uc3Qga0Vycm9yID0gU3ltYm9sKCdrRXJyb3InKTtcbmNvbnN0IGtNZXNzYWdlID0gU3ltYm9sKCdrTWVzc2FnZScpO1xuY29uc3Qga1JlYXNvbiA9IFN5bWJvbCgna1JlYXNvbicpO1xuY29uc3Qga1RhcmdldCA9IFN5bWJvbCgna1RhcmdldCcpO1xuY29uc3Qga1R5cGUgPSBTeW1ib2woJ2tUeXBlJyk7XG5jb25zdCBrV2FzQ2xlYW4gPSBTeW1ib2woJ2tXYXNDbGVhbicpO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhbiBldmVudC5cbiAqL1xuY2xhc3MgRXZlbnQge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGBFdmVudGAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IElmIHRoZSBgdHlwZWAgYXJndW1lbnQgaXMgbm90IHNwZWNpZmllZFxuICAgKi9cbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXNba1RhcmdldF0gPSBudWxsO1xuICAgIHRoaXNba1R5cGVdID0gdHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7Kn1cbiAgICovXG4gIGdldCB0YXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXNba1RhcmdldF07XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzW2tUeXBlXTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnQucHJvdG90eXBlLCAndGFyZ2V0JywgeyBlbnVtZXJhYmxlOiB0cnVlIH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50LnByb3RvdHlwZSwgJ3R5cGUnLCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgY2xvc2UgZXZlbnQuXG4gKlxuICogQGV4dGVuZHMgRXZlbnRcbiAqL1xuY2xhc3MgQ2xvc2VFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgQ2xvc2VFdmVudGAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEEgZGljdGlvbmFyeSBvYmplY3QgdGhhdCBhbGxvd3MgZm9yIHNldHRpbmdcbiAgICogICAgIGF0dHJpYnV0ZXMgdmlhIG9iamVjdCBtZW1iZXJzIG9mIHRoZSBzYW1lIG5hbWVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmNvZGU9MF0gVGhlIHN0YXR1cyBjb2RlIGV4cGxhaW5pbmcgd2h5IHRoZVxuICAgKiAgICAgY29ubmVjdGlvbiB3YXMgY2xvc2VkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yZWFzb249JyddIEEgaHVtYW4tcmVhZGFibGUgc3RyaW5nIGV4cGxhaW5pbmcgd2h5XG4gICAqICAgICB0aGUgY29ubmVjdGlvbiB3YXMgY2xvc2VkXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMud2FzQ2xlYW49ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0aGVcbiAgICogICAgIGNvbm5lY3Rpb24gd2FzIGNsZWFubHkgY2xvc2VkXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXNba0NvZGVdID0gb3B0aW9ucy5jb2RlID09PSB1bmRlZmluZWQgPyAwIDogb3B0aW9ucy5jb2RlO1xuICAgIHRoaXNba1JlYXNvbl0gPSBvcHRpb25zLnJlYXNvbiA9PT0gdW5kZWZpbmVkID8gJycgOiBvcHRpb25zLnJlYXNvbjtcbiAgICB0aGlzW2tXYXNDbGVhbl0gPSBvcHRpb25zLndhc0NsZWFuID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IG9wdGlvbnMud2FzQ2xlYW47XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIGdldCBjb2RlKCkge1xuICAgIHJldHVybiB0aGlzW2tDb2RlXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0IHJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpc1trUmVhc29uXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIGdldCB3YXNDbGVhbigpIHtcbiAgICByZXR1cm4gdGhpc1trV2FzQ2xlYW5dO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDbG9zZUV2ZW50LnByb3RvdHlwZSwgJ2NvZGUnLCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ2xvc2VFdmVudC5wcm90b3R5cGUsICdyZWFzb24nLCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ2xvc2VFdmVudC5wcm90b3R5cGUsICd3YXNDbGVhbicsIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYW4gZXJyb3IgZXZlbnQuXG4gKlxuICogQGV4dGVuZHMgRXZlbnRcbiAqL1xuY2xhc3MgRXJyb3JFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgRXJyb3JFdmVudGAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEEgZGljdGlvbmFyeSBvYmplY3QgdGhhdCBhbGxvd3MgZm9yIHNldHRpbmdcbiAgICogICAgIGF0dHJpYnV0ZXMgdmlhIG9iamVjdCBtZW1iZXJzIG9mIHRoZSBzYW1lIG5hbWVcbiAgICogQHBhcmFtIHsqfSBbb3B0aW9ucy5lcnJvcj1udWxsXSBUaGUgZXJyb3IgdGhhdCBnZW5lcmF0ZWQgdGhpcyBldmVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubWVzc2FnZT0nJ10gVGhlIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHR5cGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpc1trRXJyb3JdID0gb3B0aW9ucy5lcnJvciA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG9wdGlvbnMuZXJyb3I7XG4gICAgdGhpc1trTWVzc2FnZV0gPSBvcHRpb25zLm1lc3NhZ2UgPT09IHVuZGVmaW5lZCA/ICcnIDogb3B0aW9ucy5tZXNzYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHsqfVxuICAgKi9cbiAgZ2V0IGVycm9yKCkge1xuICAgIHJldHVybiB0aGlzW2tFcnJvcl07XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGdldCBtZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzW2tNZXNzYWdlXTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXJyb3JFdmVudC5wcm90b3R5cGUsICdlcnJvcicsIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFcnJvckV2ZW50LnByb3RvdHlwZSwgJ21lc3NhZ2UnLCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgbWVzc2FnZSBldmVudC5cbiAqXG4gKiBAZXh0ZW5kcyBFdmVudFxuICovXG5jbGFzcyBNZXNzYWdlRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYE1lc3NhZ2VFdmVudGAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEEgZGljdGlvbmFyeSBvYmplY3QgdGhhdCBhbGxvd3MgZm9yIHNldHRpbmdcbiAgICogICAgIGF0dHJpYnV0ZXMgdmlhIG9iamVjdCBtZW1iZXJzIG9mIHRoZSBzYW1lIG5hbWVcbiAgICogQHBhcmFtIHsqfSBbb3B0aW9ucy5kYXRhPW51bGxdIFRoZSBtZXNzYWdlIGNvbnRlbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHR5cGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpc1trRGF0YV0gPSBvcHRpb25zLmRhdGEgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBvcHRpb25zLmRhdGE7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUgeyp9XG4gICAqL1xuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpc1trRGF0YV07XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE1lc3NhZ2VFdmVudC5wcm90b3R5cGUsICdkYXRhJywgeyBlbnVtZXJhYmxlOiB0cnVlIH0pO1xuXG4vKipcbiAqIFRoaXMgcHJvdmlkZXMgbWV0aG9kcyBmb3IgZW11bGF0aW5nIHRoZSBgRXZlbnRUYXJnZXRgIGludGVyZmFjZS4gSXQncyBub3RcbiAqIG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1peGluXG4gKi9cbmNvbnN0IEV2ZW50VGFyZ2V0ID0ge1xuICAvKipcbiAgICogUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZXZlbnQgdHlwZSB0byBsaXN0ZW4gZm9yXG4gICAqIEBwYXJhbSB7KEZ1bmN0aW9ufE9iamVjdCl9IGhhbmRsZXIgVGhlIGxpc3RlbmVyIHRvIGFkZFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEFuIG9wdGlvbnMgb2JqZWN0IHNwZWNpZmllcyBjaGFyYWN0ZXJpc3RpY3MgYWJvdXRcbiAgICogICAgIHRoZSBldmVudCBsaXN0ZW5lclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm9uY2U9ZmFsc2VdIEEgYEJvb2xlYW5gIGluZGljYXRpbmcgdGhhdCB0aGVcbiAgICogICAgIGxpc3RlbmVyIHNob3VsZCBiZSBpbnZva2VkIGF0IG1vc3Qgb25jZSBhZnRlciBiZWluZyBhZGRlZC4gSWYgYHRydWVgLFxuICAgKiAgICAgdGhlIGxpc3RlbmVyIHdvdWxkIGJlIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCB3aGVuIGludm9rZWQuXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycyh0eXBlKSkge1xuICAgICAgaWYgKFxuICAgICAgICAhb3B0aW9uc1trRm9yT25FdmVudEF0dHJpYnV0ZV0gJiZcbiAgICAgICAgbGlzdGVuZXJba0xpc3RlbmVyXSA9PT0gaGFuZGxlciAmJlxuICAgICAgICAhbGlzdGVuZXJba0Zvck9uRXZlbnRBdHRyaWJ1dGVdXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB3cmFwcGVyO1xuXG4gICAgaWYgKHR5cGUgPT09ICdtZXNzYWdlJykge1xuICAgICAgd3JhcHBlciA9IGZ1bmN0aW9uIG9uTWVzc2FnZShkYXRhLCBpc0JpbmFyeSkge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBNZXNzYWdlRXZlbnQoJ21lc3NhZ2UnLCB7XG4gICAgICAgICAgZGF0YTogaXNCaW5hcnkgPyBkYXRhIDogZGF0YS50b1N0cmluZygpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50W2tUYXJnZXRdID0gdGhpcztcbiAgICAgICAgY2FsbExpc3RlbmVyKGhhbmRsZXIsIHRoaXMsIGV2ZW50KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY2xvc2UnKSB7XG4gICAgICB3cmFwcGVyID0gZnVuY3Rpb24gb25DbG9zZShjb2RlLCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IENsb3NlRXZlbnQoJ2Nsb3NlJywge1xuICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgcmVhc29uOiBtZXNzYWdlLnRvU3RyaW5nKCksXG4gICAgICAgICAgd2FzQ2xlYW46IHRoaXMuX2Nsb3NlRnJhbWVSZWNlaXZlZCAmJiB0aGlzLl9jbG9zZUZyYW1lU2VudFxuICAgICAgICB9KTtcblxuICAgICAgICBldmVudFtrVGFyZ2V0XSA9IHRoaXM7XG4gICAgICAgIGNhbGxMaXN0ZW5lcihoYW5kbGVyLCB0aGlzLCBldmVudCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgd3JhcHBlciA9IGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXJyb3JFdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgICB9KTtcblxuICAgICAgICBldmVudFtrVGFyZ2V0XSA9IHRoaXM7XG4gICAgICAgIGNhbGxMaXN0ZW5lcihoYW5kbGVyLCB0aGlzLCBldmVudCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29wZW4nKSB7XG4gICAgICB3cmFwcGVyID0gZnVuY3Rpb24gb25PcGVuKCkge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnb3BlbicpO1xuXG4gICAgICAgIGV2ZW50W2tUYXJnZXRdID0gdGhpcztcbiAgICAgICAgY2FsbExpc3RlbmVyKGhhbmRsZXIsIHRoaXMsIGV2ZW50KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3cmFwcGVyW2tGb3JPbkV2ZW50QXR0cmlidXRlXSA9ICEhb3B0aW9uc1trRm9yT25FdmVudEF0dHJpYnV0ZV07XG4gICAgd3JhcHBlcltrTGlzdGVuZXJdID0gaGFuZGxlcjtcblxuICAgIGlmIChvcHRpb25zLm9uY2UpIHtcbiAgICAgIHRoaXMub25jZSh0eXBlLCB3cmFwcGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbih0eXBlLCB3cmFwcGVyKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBldmVudCB0eXBlIHRvIHJlbW92ZVxuICAgKiBAcGFyYW0geyhGdW5jdGlvbnxPYmplY3QpfSBoYW5kbGVyIFRoZSBsaXN0ZW5lciB0byByZW1vdmVcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKSB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycyh0eXBlKSkge1xuICAgICAgaWYgKGxpc3RlbmVyW2tMaXN0ZW5lcl0gPT09IGhhbmRsZXIgJiYgIWxpc3RlbmVyW2tGb3JPbkV2ZW50QXR0cmlidXRlXSkge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ2xvc2VFdmVudCxcbiAgRXJyb3JFdmVudCxcbiAgRXZlbnQsXG4gIEV2ZW50VGFyZ2V0LFxuICBNZXNzYWdlRXZlbnRcbn07XG5cbi8qKlxuICogQ2FsbCBhbiBldmVudCBsaXN0ZW5lclxuICpcbiAqIEBwYXJhbSB7KEZ1bmN0aW9ufE9iamVjdCl9IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciB0byBjYWxsXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIHZhbHVlIHRvIHVzZSBhcyBgdGhpc2BgIHdoZW4gY2FsbGluZyB0aGUgbGlzdGVuZXJcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0byBwYXNzIHRvIHRoZSBsaXN0ZW5lclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2FsbExpc3RlbmVyKGxpc3RlbmVyLCB0aGlzQXJnLCBldmVudCkge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnb2JqZWN0JyAmJiBsaXN0ZW5lci5oYW5kbGVFdmVudCkge1xuICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBsaXN0ZW5lci5jYWxsKHRoaXNBcmcsIGV2ZW50KTtcbiAgfVxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyB0b2tlbkNoYXJzIH0gPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcblxuLyoqXG4gKiBBZGRzIGFuIG9mZmVyIHRvIHRoZSBtYXAgb2YgZXh0ZW5zaW9uIG9mZmVycyBvciBhIHBhcmFtZXRlciB0byB0aGUgbWFwIG9mXG4gKiBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXN0IFRoZSBtYXAgb2YgZXh0ZW5zaW9uIG9mZmVycyBvciBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZXh0ZW5zaW9uIG9yIHBhcmFtZXRlciBuYW1lXG4gKiBAcGFyYW0geyhPYmplY3R8Qm9vbGVhbnxTdHJpbmcpfSBlbGVtIFRoZSBleHRlbnNpb24gcGFyYW1ldGVycyBvciB0aGVcbiAqICAgICBwYXJhbWV0ZXIgdmFsdWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHB1c2goZGVzdCwgbmFtZSwgZWxlbSkge1xuICBpZiAoZGVzdFtuYW1lXSA9PT0gdW5kZWZpbmVkKSBkZXN0W25hbWVdID0gW2VsZW1dO1xuICBlbHNlIGRlc3RbbmFtZV0ucHVzaChlbGVtKTtcbn1cblxuLyoqXG4gKiBQYXJzZXMgdGhlIGBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnNgIGhlYWRlciBpbnRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVyIFRoZSBmaWVsZCB2YWx1ZSBvZiB0aGUgaGVhZGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBwYXJzZWQgb2JqZWN0XG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKGhlYWRlcikge1xuICBjb25zdCBvZmZlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBsZXQgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgbGV0IG11c3RVbmVzY2FwZSA9IGZhbHNlO1xuICBsZXQgaXNFc2NhcGluZyA9IGZhbHNlO1xuICBsZXQgaW5RdW90ZXMgPSBmYWxzZTtcbiAgbGV0IGV4dGVuc2lvbk5hbWU7XG4gIGxldCBwYXJhbU5hbWU7XG4gIGxldCBzdGFydCA9IC0xO1xuICBsZXQgY29kZSA9IC0xO1xuICBsZXQgZW5kID0gLTE7XG4gIGxldCBpID0gMDtcblxuICBmb3IgKDsgaSA8IGhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgIGNvZGUgPSBoZWFkZXIuY2hhckNvZGVBdChpKTtcblxuICAgIGlmIChleHRlbnNpb25OYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChlbmQgPT09IC0xICYmIHRva2VuQ2hhcnNbY29kZV0gPT09IDEpIHtcbiAgICAgICAgaWYgKHN0YXJ0ID09PSAtMSkgc3RhcnQgPSBpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgaSAhPT0gMCAmJlxuICAgICAgICAoY29kZSA9PT0gMHgyMCAvKiAnICcgKi8gfHwgY29kZSA9PT0gMHgwOSkgLyogJ1xcdCcgKi9cbiAgICAgICkge1xuICAgICAgICBpZiAoZW5kID09PSAtMSAmJiBzdGFydCAhPT0gLTEpIGVuZCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4M2IgLyogJzsnICovIHx8IGNvZGUgPT09IDB4MmMgLyogJywnICovKSB7XG4gICAgICAgIGlmIChzdGFydCA9PT0gLTEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmQgPT09IC0xKSBlbmQgPSBpO1xuICAgICAgICBjb25zdCBuYW1lID0gaGVhZGVyLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgICBpZiAoY29kZSA9PT0gMHgyYykge1xuICAgICAgICAgIHB1c2gob2ZmZXJzLCBuYW1lLCBwYXJhbXMpO1xuICAgICAgICAgIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXh0ZW5zaW9uTmFtZSA9IG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFydCA9IGVuZCA9IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBhdCBpbmRleCAke2l9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYXJhbU5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGVuZCA9PT0gLTEgJiYgdG9rZW5DaGFyc1tjb2RlXSA9PT0gMSkge1xuICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSBzdGFydCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4MjAgfHwgY29kZSA9PT0gMHgwOSkge1xuICAgICAgICBpZiAoZW5kID09PSAtMSAmJiBzdGFydCAhPT0gLTEpIGVuZCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4M2IgfHwgY29kZSA9PT0gMHgyYykge1xuICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBhdCBpbmRleCAke2l9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW5kID09PSAtMSkgZW5kID0gaTtcbiAgICAgICAgcHVzaChwYXJhbXMsIGhlYWRlci5zbGljZShzdGFydCwgZW5kKSwgdHJ1ZSk7XG4gICAgICAgIGlmIChjb2RlID09PSAweDJjKSB7XG4gICAgICAgICAgcHVzaChvZmZlcnMsIGV4dGVuc2lvbk5hbWUsIHBhcmFtcyk7XG4gICAgICAgICAgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBleHRlbnNpb25OYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnQgPSBlbmQgPSAtMTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgzZCAvKiAnPScgKi8gJiYgc3RhcnQgIT09IC0xICYmIGVuZCA9PT0gLTEpIHtcbiAgICAgICAgcGFyYW1OYW1lID0gaGVhZGVyLnNsaWNlKHN0YXJ0LCBpKTtcbiAgICAgICAgc3RhcnQgPSBlbmQgPSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL1xuICAgICAgLy8gVGhlIHZhbHVlIG9mIGEgcXVvdGVkLXN0cmluZyBhZnRlciB1bmVzY2FwaW5nIG11c3QgY29uZm9ybSB0byB0aGVcbiAgICAgIC8vIHRva2VuIEFCTkYsIHNvIG9ubHkgdG9rZW4gY2hhcmFjdGVycyBhcmUgdmFsaWQuXG4gICAgICAvLyBSZWY6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NDU1I3NlY3Rpb24tOS4xXG4gICAgICAvL1xuICAgICAgaWYgKGlzRXNjYXBpbmcpIHtcbiAgICAgICAgaWYgKHRva2VuQ2hhcnNbY29kZV0gIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSBzdGFydCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKCFtdXN0VW5lc2NhcGUpIG11c3RVbmVzY2FwZSA9IHRydWU7XG4gICAgICAgIGlzRXNjYXBpbmcgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaW5RdW90ZXMpIHtcbiAgICAgICAgaWYgKHRva2VuQ2hhcnNbY29kZV0gPT09IDEpIHtcbiAgICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSBzdGFydCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgyMiAvKiAnXCInICovICYmIHN0YXJ0ICE9PSAtMSkge1xuICAgICAgICAgIGluUXVvdGVzID0gZmFsc2U7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAweDVjIC8qICdcXCcgKi8pIHtcbiAgICAgICAgICBpc0VzY2FwaW5nID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAweDIyICYmIGhlYWRlci5jaGFyQ29kZUF0KGkgLSAxKSA9PT0gMHgzZCkge1xuICAgICAgICBpblF1b3RlcyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEgJiYgdG9rZW5DaGFyc1tjb2RlXSA9PT0gMSkge1xuICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSBzdGFydCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0ICE9PSAtMSAmJiAoY29kZSA9PT0gMHgyMCB8fCBjb2RlID09PSAweDA5KSkge1xuICAgICAgICBpZiAoZW5kID09PSAtMSkgZW5kID0gaTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgzYiB8fCBjb2RlID09PSAweDJjKSB7XG4gICAgICAgIGlmIChzdGFydCA9PT0gLTEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmQgPT09IC0xKSBlbmQgPSBpO1xuICAgICAgICBsZXQgdmFsdWUgPSBoZWFkZXIuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICAgIGlmIChtdXN0VW5lc2NhcGUpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcXFwvZywgJycpO1xuICAgICAgICAgIG11c3RVbmVzY2FwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHB1c2gocGFyYW1zLCBwYXJhbU5hbWUsIHZhbHVlKTtcbiAgICAgICAgaWYgKGNvZGUgPT09IDB4MmMpIHtcbiAgICAgICAgICBwdXNoKG9mZmVycywgZXh0ZW5zaW9uTmFtZSwgcGFyYW1zKTtcbiAgICAgICAgICBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGV4dGVuc2lvbk5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHN0YXJ0ID0gZW5kID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnQgPT09IC0xIHx8IGluUXVvdGVzIHx8IGNvZGUgPT09IDB4MjAgfHwgY29kZSA9PT0gMHgwOSkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgaW5wdXQnKTtcbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSBlbmQgPSBpO1xuICBjb25zdCB0b2tlbiA9IGhlYWRlci5zbGljZShzdGFydCwgZW5kKTtcbiAgaWYgKGV4dGVuc2lvbk5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHB1c2gob2ZmZXJzLCB0b2tlbiwgcGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyYW1OYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHB1c2gocGFyYW1zLCB0b2tlbiwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChtdXN0VW5lc2NhcGUpIHtcbiAgICAgIHB1c2gocGFyYW1zLCBwYXJhbU5hbWUsIHRva2VuLnJlcGxhY2UoL1xcXFwvZywgJycpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHVzaChwYXJhbXMsIHBhcmFtTmFtZSwgdG9rZW4pO1xuICAgIH1cbiAgICBwdXNoKG9mZmVycywgZXh0ZW5zaW9uTmFtZSwgcGFyYW1zKTtcbiAgfVxuXG4gIHJldHVybiBvZmZlcnM7XG59XG5cbi8qKlxuICogQnVpbGRzIHRoZSBgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zYCBoZWFkZXIgZmllbGQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGV4dGVuc2lvbnMgVGhlIG1hcCBvZiBleHRlbnNpb25zIGFuZCBwYXJhbWV0ZXJzIHRvIGZvcm1hdFxuICogQHJldHVybiB7U3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGdpdmVuIG9iamVjdFxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBmb3JtYXQoZXh0ZW5zaW9ucykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZXh0ZW5zaW9ucylcbiAgICAubWFwKChleHRlbnNpb24pID0+IHtcbiAgICAgIGxldCBjb25maWd1cmF0aW9ucyA9IGV4dGVuc2lvbnNbZXh0ZW5zaW9uXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb25maWd1cmF0aW9ucykpIGNvbmZpZ3VyYXRpb25zID0gW2NvbmZpZ3VyYXRpb25zXTtcbiAgICAgIHJldHVybiBjb25maWd1cmF0aW9uc1xuICAgICAgICAubWFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgICByZXR1cm4gW2V4dGVuc2lvbl1cbiAgICAgICAgICAgIC5jb25jYXQoXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykubWFwKChrKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHBhcmFtc1trXTtcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkgdmFsdWVzID0gW3ZhbHVlc107XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgLm1hcCgodikgPT4gKHYgPT09IHRydWUgPyBrIDogYCR7a309JHt2fWApKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJzsgJyk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuam9pbignOyAnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgfSlcbiAgICAuam9pbignLCAnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGZvcm1hdCwgcGFyc2UgfTtcbiIsICIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFtcImVycm9yXCIsIHsgXCJ2YXJzSWdub3JlUGF0dGVyblwiOiBcIl5EdXBsZXh8UmVhZGFibGUkXCIsIFwiY2F1Z2h0RXJyb3JzXCI6IFwibm9uZVwiIH1dICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5jb25zdCBodHRwcyA9IHJlcXVpcmUoJ2h0dHBzJyk7XG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgbmV0ID0gcmVxdWlyZSgnbmV0Jyk7XG5jb25zdCB0bHMgPSByZXF1aXJlKCd0bHMnKTtcbmNvbnN0IHsgcmFuZG9tQnl0ZXMsIGNyZWF0ZUhhc2ggfSA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuY29uc3QgeyBEdXBsZXgsIFJlYWRhYmxlIH0gPSByZXF1aXJlKCdzdHJlYW0nKTtcbmNvbnN0IHsgVVJMIH0gPSByZXF1aXJlKCd1cmwnKTtcblxuY29uc3QgUGVyTWVzc2FnZURlZmxhdGUgPSByZXF1aXJlKCcuL3Blcm1lc3NhZ2UtZGVmbGF0ZScpO1xuY29uc3QgUmVjZWl2ZXIgPSByZXF1aXJlKCcuL3JlY2VpdmVyJyk7XG5jb25zdCBTZW5kZXIgPSByZXF1aXJlKCcuL3NlbmRlcicpO1xuY29uc3QgeyBpc0Jsb2IgfSA9IHJlcXVpcmUoJy4vdmFsaWRhdGlvbicpO1xuXG5jb25zdCB7XG4gIEJJTkFSWV9UWVBFUyxcbiAgQ0xPU0VfVElNRU9VVCxcbiAgRU1QVFlfQlVGRkVSLFxuICBHVUlELFxuICBrRm9yT25FdmVudEF0dHJpYnV0ZSxcbiAga0xpc3RlbmVyLFxuICBrU3RhdHVzQ29kZSxcbiAga1dlYlNvY2tldCxcbiAgTk9PUFxufSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCB7XG4gIEV2ZW50VGFyZ2V0OiB7IGFkZEV2ZW50TGlzdGVuZXIsIHJlbW92ZUV2ZW50TGlzdGVuZXIgfVxufSA9IHJlcXVpcmUoJy4vZXZlbnQtdGFyZ2V0Jyk7XG5jb25zdCB7IGZvcm1hdCwgcGFyc2UgfSA9IHJlcXVpcmUoJy4vZXh0ZW5zaW9uJyk7XG5jb25zdCB7IHRvQnVmZmVyIH0gPSByZXF1aXJlKCcuL2J1ZmZlci11dGlsJyk7XG5cbmNvbnN0IGtBYm9ydGVkID0gU3ltYm9sKCdrQWJvcnRlZCcpO1xuY29uc3QgcHJvdG9jb2xWZXJzaW9ucyA9IFs4LCAxM107XG5jb25zdCByZWFkeVN0YXRlcyA9IFsnQ09OTkVDVElORycsICdPUEVOJywgJ0NMT1NJTkcnLCAnQ0xPU0VEJ107XG5jb25zdCBzdWJwcm90b2NvbFJlZ2V4ID0gL15bISMkJSYnKitcXC0uMC05QS1aXl9gfGEten5dKyQvO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIFdlYlNvY2tldC5cbiAqXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuY2xhc3MgV2ViU29ja2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgV2ViU29ja2V0YC5cbiAgICpcbiAgICogQHBhcmFtIHsoU3RyaW5nfFVSTCl9IGFkZHJlc3MgVGhlIFVSTCB0byB3aGljaCB0byBjb25uZWN0XG4gICAqIEBwYXJhbSB7KFN0cmluZ3xTdHJpbmdbXSl9IFtwcm90b2NvbHNdIFRoZSBzdWJwcm90b2NvbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBDb25uZWN0aW9uIG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkZHJlc3MsIHByb3RvY29scywgb3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9iaW5hcnlUeXBlID0gQklOQVJZX1RZUEVTWzBdO1xuICAgIHRoaXMuX2Nsb3NlQ29kZSA9IDEwMDY7XG4gICAgdGhpcy5fY2xvc2VGcmFtZVJlY2VpdmVkID0gZmFsc2U7XG4gICAgdGhpcy5fY2xvc2VGcmFtZVNlbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9jbG9zZU1lc3NhZ2UgPSBFTVBUWV9CVUZGRVI7XG4gICAgdGhpcy5fY2xvc2VUaW1lciA9IG51bGw7XG4gICAgdGhpcy5fZXJyb3JFbWl0dGVkID0gZmFsc2U7XG4gICAgdGhpcy5fZXh0ZW5zaW9ucyA9IHt9O1xuICAgIHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3Byb3RvY29sID0gJyc7XG4gICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DT05ORUNUSU5HO1xuICAgIHRoaXMuX3JlY2VpdmVyID0gbnVsbDtcbiAgICB0aGlzLl9zZW5kZXIgPSBudWxsO1xuICAgIHRoaXMuX3NvY2tldCA9IG51bGw7XG5cbiAgICBpZiAoYWRkcmVzcyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fYnVmZmVyZWRBbW91bnQgPSAwO1xuICAgICAgdGhpcy5faXNTZXJ2ZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlZGlyZWN0cyA9IDA7XG5cbiAgICAgIGlmIChwcm90b2NvbHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm90b2NvbHMgPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkocHJvdG9jb2xzKSkge1xuICAgICAgICBpZiAodHlwZW9mIHByb3RvY29scyA9PT0gJ29iamVjdCcgJiYgcHJvdG9jb2xzICE9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IHByb3RvY29scztcbiAgICAgICAgICBwcm90b2NvbHMgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm90b2NvbHMgPSBbcHJvdG9jb2xzXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbml0QXNDbGllbnQodGhpcywgYWRkcmVzcywgcHJvdG9jb2xzLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXV0b1BvbmcgPSBvcHRpb25zLmF1dG9Qb25nO1xuICAgICAgdGhpcy5fY2xvc2VUaW1lb3V0ID0gb3B0aW9ucy5jbG9zZVRpbWVvdXQ7XG4gICAgICB0aGlzLl9pc1NlcnZlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvciBoaXN0b3JpY2FsIHJlYXNvbnMsIHRoZSBjdXN0b20gXCJub2RlYnVmZmVyXCIgdHlwZSBpcyB1c2VkIGJ5IHRoZSBkZWZhdWx0XG4gICAqIGluc3RlYWQgb2YgXCJibG9iXCIuXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBnZXQgYmluYXJ5VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmluYXJ5VHlwZTtcbiAgfVxuXG4gIHNldCBiaW5hcnlUeXBlKHR5cGUpIHtcbiAgICBpZiAoIUJJTkFSWV9UWVBFUy5pbmNsdWRlcyh0eXBlKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fYmluYXJ5VHlwZSA9IHR5cGU7XG5cbiAgICAvL1xuICAgIC8vIEFsbG93IHRvIGNoYW5nZSBgYmluYXJ5VHlwZWAgb24gdGhlIGZseS5cbiAgICAvL1xuICAgIGlmICh0aGlzLl9yZWNlaXZlcikgdGhpcy5fcmVjZWl2ZXIuX2JpbmFyeVR5cGUgPSB0eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBnZXQgYnVmZmVyZWRBbW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLl9zb2NrZXQpIHJldHVybiB0aGlzLl9idWZmZXJlZEFtb3VudDtcblxuICAgIHJldHVybiB0aGlzLl9zb2NrZXQuX3dyaXRhYmxlU3RhdGUubGVuZ3RoICsgdGhpcy5fc2VuZGVyLl9idWZmZXJlZEJ5dGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBnZXQgZXh0ZW5zaW9ucygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZXh0ZW5zaW9ucykuam9pbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgZ2V0IGlzUGF1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9wYXVzZWQ7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKi9cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZ2V0IG9uY2xvc2UoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKi9cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZ2V0IG9uZXJyb3IoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKi9cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZ2V0IG9ub3BlbigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqL1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBnZXQgb25tZXNzYWdlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBnZXQgcHJvdG9jb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3RvY29sO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBnZXQgcmVhZHlTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZHlTdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB1cCB0aGUgc29ja2V0IGFuZCB0aGUgaW50ZXJuYWwgcmVzb3VyY2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0R1cGxleH0gc29ja2V0IFRoZSBuZXR3b3JrIHNvY2tldCBiZXR3ZWVuIHRoZSBzZXJ2ZXIgYW5kIGNsaWVudFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gaGVhZCBUaGUgZmlyc3QgcGFja2V0IG9mIHRoZSB1cGdyYWRlZCBzdHJlYW1cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hbGxvd1N5bmNocm9ub3VzRXZlbnRzPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlclxuICAgKiAgICAgYW55IG9mIHRoZSBgJ21lc3NhZ2UnYCwgYCdwaW5nJ2AsIGFuZCBgJ3BvbmcnYCBldmVudHMgY2FuIGJlIGVtaXR0ZWRcbiAgICogICAgIG11bHRpcGxlIHRpbWVzIGluIHRoZSBzYW1lIHRpY2tcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMuZ2VuZXJhdGVNYXNrXSBUaGUgZnVuY3Rpb24gdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAgICogICAgIG1hc2tpbmcga2V5XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhQYXlsb2FkPTBdIFRoZSBtYXhpbXVtIGFsbG93ZWQgbWVzc2FnZSBzaXplXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuc2tpcFVURjhWYWxpZGF0aW9uPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvclxuICAgKiAgICAgbm90IHRvIHNraXAgVVRGLTggdmFsaWRhdGlvbiBmb3IgdGV4dCBhbmQgY2xvc2UgbWVzc2FnZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFNvY2tldChzb2NrZXQsIGhlYWQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCByZWNlaXZlciA9IG5ldyBSZWNlaXZlcih7XG4gICAgICBhbGxvd1N5bmNocm9ub3VzRXZlbnRzOiBvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHMsXG4gICAgICBiaW5hcnlUeXBlOiB0aGlzLmJpbmFyeVR5cGUsXG4gICAgICBleHRlbnNpb25zOiB0aGlzLl9leHRlbnNpb25zLFxuICAgICAgaXNTZXJ2ZXI6IHRoaXMuX2lzU2VydmVyLFxuICAgICAgbWF4UGF5bG9hZDogb3B0aW9ucy5tYXhQYXlsb2FkLFxuICAgICAgc2tpcFVURjhWYWxpZGF0aW9uOiBvcHRpb25zLnNraXBVVEY4VmFsaWRhdGlvblxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VuZGVyID0gbmV3IFNlbmRlcihzb2NrZXQsIHRoaXMuX2V4dGVuc2lvbnMsIG9wdGlvbnMuZ2VuZXJhdGVNYXNrKTtcblxuICAgIHRoaXMuX3JlY2VpdmVyID0gcmVjZWl2ZXI7XG4gICAgdGhpcy5fc2VuZGVyID0gc2VuZGVyO1xuICAgIHRoaXMuX3NvY2tldCA9IHNvY2tldDtcblxuICAgIHJlY2VpdmVyW2tXZWJTb2NrZXRdID0gdGhpcztcbiAgICBzZW5kZXJba1dlYlNvY2tldF0gPSB0aGlzO1xuICAgIHNvY2tldFtrV2ViU29ja2V0XSA9IHRoaXM7XG5cbiAgICByZWNlaXZlci5vbignY29uY2x1ZGUnLCByZWNlaXZlck9uQ29uY2x1ZGUpO1xuICAgIHJlY2VpdmVyLm9uKCdkcmFpbicsIHJlY2VpdmVyT25EcmFpbik7XG4gICAgcmVjZWl2ZXIub24oJ2Vycm9yJywgcmVjZWl2ZXJPbkVycm9yKTtcbiAgICByZWNlaXZlci5vbignbWVzc2FnZScsIHJlY2VpdmVyT25NZXNzYWdlKTtcbiAgICByZWNlaXZlci5vbigncGluZycsIHJlY2VpdmVyT25QaW5nKTtcbiAgICByZWNlaXZlci5vbigncG9uZycsIHJlY2VpdmVyT25Qb25nKTtcblxuICAgIHNlbmRlci5vbmVycm9yID0gc2VuZGVyT25FcnJvcjtcblxuICAgIC8vXG4gICAgLy8gVGhlc2UgbWV0aG9kcyBtYXkgbm90IGJlIGF2YWlsYWJsZSBpZiBgc29ja2V0YCBpcyBqdXN0IGEgYER1cGxleGAuXG4gICAgLy9cbiAgICBpZiAoc29ja2V0LnNldFRpbWVvdXQpIHNvY2tldC5zZXRUaW1lb3V0KDApO1xuICAgIGlmIChzb2NrZXQuc2V0Tm9EZWxheSkgc29ja2V0LnNldE5vRGVsYXkoKTtcblxuICAgIGlmIChoZWFkLmxlbmd0aCA+IDApIHNvY2tldC51bnNoaWZ0KGhlYWQpO1xuXG4gICAgc29ja2V0Lm9uKCdjbG9zZScsIHNvY2tldE9uQ2xvc2UpO1xuICAgIHNvY2tldC5vbignZGF0YScsIHNvY2tldE9uRGF0YSk7XG4gICAgc29ja2V0Lm9uKCdlbmQnLCBzb2NrZXRPbkVuZCk7XG4gICAgc29ja2V0Lm9uKCdlcnJvcicsIHNvY2tldE9uRXJyb3IpO1xuXG4gICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5PUEVOO1xuICAgIHRoaXMuZW1pdCgnb3BlbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXQgdGhlIGAnY2xvc2UnYCBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGVtaXRDbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuX3NvY2tldCkge1xuICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TRUQ7XG4gICAgICB0aGlzLmVtaXQoJ2Nsb3NlJywgdGhpcy5fY2xvc2VDb2RlLCB0aGlzLl9jbG9zZU1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdKSB7XG4gICAgICB0aGlzLl9leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdLmNsZWFudXAoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZWNlaXZlci5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NFRDtcbiAgICB0aGlzLmVtaXQoJ2Nsb3NlJywgdGhpcy5fY2xvc2VDb2RlLCB0aGlzLl9jbG9zZU1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGEgY2xvc2luZyBoYW5kc2hha2UuXG4gICAqXG4gICAqICAgICAgICAgICstLS0tLS0tLS0tKyAgICstLS0tLS0tLS0tLSsgICArLS0tLS0tLS0tLStcbiAgICogICAgIC0gLSAtfHdzLmNsb3NlKCl8LS0+fGNsb3NlIGZyYW1lfC0tPnx3cy5jbG9zZSgpfC0gLSAtXG4gICAqICAgIHwgICAgICstLS0tLS0tLS0tKyAgICstLS0tLS0tLS0tLSsgICArLS0tLS0tLS0tLSsgICAgIHxcbiAgICogICAgICAgICAgKy0tLS0tLS0tLS0rICAgKy0tLS0tLS0tLS0tKyAgICAgICAgIHxcbiAgICogQ0xPU0lORyAgfHdzLmNsb3NlKCl8PC0tfGNsb3NlIGZyYW1lfDwtLSstLS0tLSsgICAgICAgQ0xPU0lOR1xuICAgKiAgICAgICAgICArLS0tLS0tLS0tLSsgICArLS0tLS0tLS0tLS0rICAgfFxuICAgKiAgICB8ICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICstLS0rICAgICAgICB8XG4gICAqICAgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0+fGZpbnwgLSAtIC0gLVxuICAgKiAgICB8ICAgICAgICAgKy0tLSsgICAgICAgICAgICAgICAgICAgICAgfCAgICstLS0rXG4gICAqICAgICAtIC0gLSAtIC18ZmlufDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAqICAgICAgICAgICAgICArLS0tK1xuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gW2NvZGVdIFN0YXR1cyBjb2RlIGV4cGxhaW5pbmcgd2h5IHRoZSBjb25uZWN0aW9uIGlzIGNsb3NpbmdcbiAgICogQHBhcmFtIHsoU3RyaW5nfEJ1ZmZlcil9IFtkYXRhXSBUaGUgcmVhc29uIHdoeSB0aGUgY29ubmVjdGlvbiBpc1xuICAgKiAgICAgY2xvc2luZ1xuICAgKiBAcHVibGljXG4gICAqL1xuICBjbG9zZShjb2RlLCBkYXRhKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HKSB7XG4gICAgICBjb25zdCBtc2cgPSAnV2ViU29ja2V0IHdhcyBjbG9zZWQgYmVmb3JlIHRoZSBjb25uZWN0aW9uIHdhcyBlc3RhYmxpc2hlZCc7XG4gICAgICBhYm9ydEhhbmRzaGFrZSh0aGlzLCB0aGlzLl9yZXEsIG1zZyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NJTkcpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fY2xvc2VGcmFtZVNlbnQgJiZcbiAgICAgICAgKHRoaXMuX2Nsb3NlRnJhbWVSZWNlaXZlZCB8fCB0aGlzLl9yZWNlaXZlci5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fc29ja2V0LmVuZCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TSU5HO1xuICAgIHRoaXMuX3NlbmRlci5jbG9zZShjb2RlLCBkYXRhLCAhdGhpcy5faXNTZXJ2ZXIsIChlcnIpID0+IHtcbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIGVycm9yIGlzIGhhbmRsZWQgYnkgdGhlIGAnZXJyb3InYCBsaXN0ZW5lciBvbiB0aGUgc29ja2V0LiBXZSBvbmx5XG4gICAgICAvLyB3YW50IHRvIGtub3cgaWYgdGhlIGNsb3NlIGZyYW1lIGhhcyBiZWVuIHNlbnQgaGVyZS5cbiAgICAgIC8vXG4gICAgICBpZiAoZXJyKSByZXR1cm47XG5cbiAgICAgIHRoaXMuX2Nsb3NlRnJhbWVTZW50ID0gdHJ1ZTtcblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9jbG9zZUZyYW1lUmVjZWl2ZWQgfHxcbiAgICAgICAgdGhpcy5fcmVjZWl2ZXIuX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fc29ja2V0LmVuZCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2V0Q2xvc2VUaW1lcih0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXVzZSB0aGUgc29ja2V0LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwYXVzZSgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HIHx8XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRURcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wYXVzZWQgPSB0cnVlO1xuICAgIHRoaXMuX3NvY2tldC5wYXVzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IFtkYXRhXSBUaGUgZGF0YSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW21hc2tdIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrIHdoaWNoIGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHBpbmcgaXMgc2VudFxuICAgKiBAcHVibGljXG4gICAqL1xuICBwaW5nKGRhdGEsIG1hc2ssIGNiKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2ViU29ja2V0IGlzIG5vdCBvcGVuOiByZWFkeVN0YXRlIDAgKENPTk5FQ1RJTkcpJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IGRhdGE7XG4gICAgICBkYXRhID0gbWFzayA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtYXNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IG1hc2s7XG4gICAgICBtYXNrID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgc2VuZEFmdGVyQ2xvc2UodGhpcywgZGF0YSwgY2IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtYXNrID09PSB1bmRlZmluZWQpIG1hc2sgPSAhdGhpcy5faXNTZXJ2ZXI7XG4gICAgdGhpcy5fc2VuZGVyLnBpbmcoZGF0YSB8fCBFTVBUWV9CVUZGRVIsIG1hc2ssIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgcG9uZy5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBbZGF0YV0gVGhlIGRhdGEgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttYXNrXSBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgdG8gbWFzayBgZGF0YWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBDYWxsYmFjayB3aGljaCBpcyBleGVjdXRlZCB3aGVuIHRoZSBwb25nIGlzIHNlbnRcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcG9uZyhkYXRhLCBtYXNrLCBjYikge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYlNvY2tldCBpcyBub3Qgb3BlbjogcmVhZHlTdGF0ZSAwIChDT05ORUNUSU5HKScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IgPSBkYXRhO1xuICAgICAgZGF0YSA9IG1hc2sgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbWFzayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IgPSBtYXNrO1xuICAgICAgbWFzayA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInKSBkYXRhID0gZGF0YS50b1N0cmluZygpO1xuXG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSAhPT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgIHNlbmRBZnRlckNsb3NlKHRoaXMsIGRhdGEsIGNiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobWFzayA9PT0gdW5kZWZpbmVkKSBtYXNrID0gIXRoaXMuX2lzU2VydmVyO1xuICAgIHRoaXMuX3NlbmRlci5wb25nKGRhdGEgfHwgRU1QVFlfQlVGRkVSLCBtYXNrLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogUmVzdW1lIHRoZSBzb2NrZXQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHJlc3VtZSgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HIHx8XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRURcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wYXVzZWQgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuX3JlY2VpdmVyLl93cml0YWJsZVN0YXRlLm5lZWREcmFpbikgdGhpcy5fc29ja2V0LnJlc3VtZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBkYXRhIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5iaW5hcnldIFNwZWNpZmllcyB3aGV0aGVyIGBkYXRhYCBpcyBiaW5hcnkgb3JcbiAgICogICAgIHRleHRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jb21wcmVzc10gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIGNvbXByZXNzXG4gICAqICAgICBgZGF0YWBcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5maW49dHJ1ZV0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZyYWdtZW50IGlzIHRoZVxuICAgKiAgICAgbGFzdCBvbmVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tYXNrXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFzayBgZGF0YWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBDYWxsYmFjayB3aGljaCBpcyBleGVjdXRlZCB3aGVuIGRhdGEgaXMgd3JpdHRlbiBvdXRcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc2VuZChkYXRhLCBvcHRpb25zLCBjYikge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYlNvY2tldCBpcyBub3Qgb3BlbjogcmVhZHlTdGF0ZSAwIChDT05ORUNUSU5HKScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IgPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgc2VuZEFmdGVyQ2xvc2UodGhpcywgZGF0YSwgY2IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBiaW5hcnk6IHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJyxcbiAgICAgIG1hc2s6ICF0aGlzLl9pc1NlcnZlcixcbiAgICAgIGNvbXByZXNzOiB0cnVlLFxuICAgICAgZmluOiB0cnVlLFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG5cbiAgICBpZiAoIXRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pIHtcbiAgICAgIG9wdHMuY29tcHJlc3MgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZW5kZXIuc2VuZChkYXRhIHx8IEVNUFRZX0JVRkZFUiwgb3B0cywgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmNpYmx5IGNsb3NlIHRoZSBjb25uZWN0aW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICB0ZXJtaW5hdGUoKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HKSB7XG4gICAgICBjb25zdCBtc2cgPSAnV2ViU29ja2V0IHdhcyBjbG9zZWQgYmVmb3JlIHRoZSBjb25uZWN0aW9uIHdhcyBlc3RhYmxpc2hlZCc7XG4gICAgICBhYm9ydEhhbmRzaGFrZSh0aGlzLCB0aGlzLl9yZXEsIG1zZyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3NvY2tldCkge1xuICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TSU5HO1xuICAgICAgdGhpcy5fc29ja2V0LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAY29uc3RhbnQge051bWJlcn0gQ09OTkVDVElOR1xuICogQG1lbWJlcm9mIFdlYlNvY2tldFxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LCAnQ09OTkVDVElORycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHJlYWR5U3RhdGVzLmluZGV4T2YoJ0NPTk5FQ1RJTkcnKVxufSk7XG5cbi8qKlxuICogQGNvbnN0YW50IHtOdW1iZXJ9IENPTk5FQ1RJTkdcbiAqIEBtZW1iZXJvZiBXZWJTb2NrZXQucHJvdG90eXBlXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJTb2NrZXQucHJvdG90eXBlLCAnQ09OTkVDVElORycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHJlYWR5U3RhdGVzLmluZGV4T2YoJ0NPTk5FQ1RJTkcnKVxufSk7XG5cbi8qKlxuICogQGNvbnN0YW50IHtOdW1iZXJ9IE9QRU5cbiAqIEBtZW1iZXJvZiBXZWJTb2NrZXRcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldCwgJ09QRU4nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiByZWFkeVN0YXRlcy5pbmRleE9mKCdPUEVOJylcbn0pO1xuXG4vKipcbiAqIEBjb25zdGFudCB7TnVtYmVyfSBPUEVOXG4gKiBAbWVtYmVyb2YgV2ViU29ja2V0LnByb3RvdHlwZVxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LnByb3RvdHlwZSwgJ09QRU4nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiByZWFkeVN0YXRlcy5pbmRleE9mKCdPUEVOJylcbn0pO1xuXG4vKipcbiAqIEBjb25zdGFudCB7TnVtYmVyfSBDTE9TSU5HXG4gKiBAbWVtYmVyb2YgV2ViU29ja2V0XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJTb2NrZXQsICdDTE9TSU5HJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICB2YWx1ZTogcmVhZHlTdGF0ZXMuaW5kZXhPZignQ0xPU0lORycpXG59KTtcblxuLyoqXG4gKiBAY29uc3RhbnQge051bWJlcn0gQ0xPU0lOR1xuICogQG1lbWJlcm9mIFdlYlNvY2tldC5wcm90b3R5cGVcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldC5wcm90b3R5cGUsICdDTE9TSU5HJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICB2YWx1ZTogcmVhZHlTdGF0ZXMuaW5kZXhPZignQ0xPU0lORycpXG59KTtcblxuLyoqXG4gKiBAY29uc3RhbnQge051bWJlcn0gQ0xPU0VEXG4gKiBAbWVtYmVyb2YgV2ViU29ja2V0XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJTb2NrZXQsICdDTE9TRUQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiByZWFkeVN0YXRlcy5pbmRleE9mKCdDTE9TRUQnKVxufSk7XG5cbi8qKlxuICogQGNvbnN0YW50IHtOdW1iZXJ9IENMT1NFRFxuICogQG1lbWJlcm9mIFdlYlNvY2tldC5wcm90b3R5cGVcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldC5wcm90b3R5cGUsICdDTE9TRUQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiByZWFkeVN0YXRlcy5pbmRleE9mKCdDTE9TRUQnKVxufSk7XG5cbltcbiAgJ2JpbmFyeVR5cGUnLFxuICAnYnVmZmVyZWRBbW91bnQnLFxuICAnZXh0ZW5zaW9ucycsXG4gICdpc1BhdXNlZCcsXG4gICdwcm90b2NvbCcsXG4gICdyZWFkeVN0YXRlJyxcbiAgJ3VybCdcbl0uZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldC5wcm90b3R5cGUsIHByb3BlcnR5LCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG59KTtcblxuLy9cbi8vIEFkZCB0aGUgYG9ub3BlbmAsIGBvbmVycm9yYCwgYG9uY2xvc2VgLCBhbmQgYG9ubWVzc2FnZWAgYXR0cmlidXRlcy5cbi8vIFNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9jb21tcy5odG1sI3RoZS13ZWJzb2NrZXQtaW50ZXJmYWNlXG4vL1xuWydvcGVuJywgJ2Vycm9yJywgJ2Nsb3NlJywgJ21lc3NhZ2UnXS5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldC5wcm90b3R5cGUsIGBvbiR7bWV0aG9kfWAsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMobWV0aG9kKSkge1xuICAgICAgICBpZiAobGlzdGVuZXJba0Zvck9uRXZlbnRBdHRyaWJ1dGVdKSByZXR1cm4gbGlzdGVuZXJba0xpc3RlbmVyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBzZXQoaGFuZGxlcikge1xuICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycyhtZXRob2QpKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lcltrRm9yT25FdmVudEF0dHJpYnV0ZV0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKG1ldGhvZCwgbGlzdGVuZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIobWV0aG9kLCBoYW5kbGVyLCB7XG4gICAgICAgIFtrRm9yT25FdmVudEF0dHJpYnV0ZV06IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KTtcblxuV2ViU29ja2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcjtcbldlYlNvY2tldC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViU29ja2V0O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBXZWJTb2NrZXQgY2xpZW50LlxuICpcbiAqIEBwYXJhbSB7V2ViU29ja2V0fSB3ZWJzb2NrZXQgVGhlIGNsaWVudCB0byBpbml0aWFsaXplXG4gKiBAcGFyYW0geyhTdHJpbmd8VVJMKX0gYWRkcmVzcyBUaGUgVVJMIHRvIHdoaWNoIHRvIGNvbm5lY3RcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3RvY29scyBUaGUgc3VicHJvdG9jb2xzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIENvbm5lY3Rpb24gb3B0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hbGxvd1N5bmNocm9ub3VzRXZlbnRzPXRydWVdIFNwZWNpZmllcyB3aGV0aGVyIGFueVxuICogICAgIG9mIHRoZSBgJ21lc3NhZ2UnYCwgYCdwaW5nJ2AsIGFuZCBgJ3BvbmcnYCBldmVudHMgY2FuIGJlIGVtaXR0ZWQgbXVsdGlwbGVcbiAqICAgICB0aW1lcyBpbiB0aGUgc2FtZSB0aWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmF1dG9Qb25nPXRydWVdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0b1xuICogICAgIGF1dG9tYXRpY2FsbHkgc2VuZCBhIHBvbmcgaW4gcmVzcG9uc2UgdG8gYSBwaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuY2xvc2VUaW1lb3V0PTMwMDAwXSBEdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgdG8gd2FpdFxuICogICAgIGZvciB0aGUgY2xvc2luZyBoYW5kc2hha2UgdG8gZmluaXNoIGFmdGVyIGB3ZWJzb2NrZXQuY2xvc2UoKWAgaXMgY2FsbGVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5maW5pc2hSZXF1ZXN0XSBBIGZ1bmN0aW9uIHdoaWNoIGNhbiBiZSB1c2VkIHRvXG4gKiAgICAgY3VzdG9taXplIHRoZSBoZWFkZXJzIG9mIGVhY2ggaHR0cCByZXF1ZXN0IGJlZm9yZSBpdCBpcyBzZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZvbGxvd1JlZGlyZWN0cz1mYWxzZV0gV2hldGhlciBvciBub3QgdG8gZm9sbG93XG4gKiAgICAgcmVkaXJlY3RzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5nZW5lcmF0ZU1hc2tdIFRoZSBmdW5jdGlvbiB1c2VkIHRvIGdlbmVyYXRlIHRoZVxuICogICAgIG1hc2tpbmcga2V5XG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuaGFuZHNoYWtlVGltZW91dF0gVGltZW91dCBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZVxuICogICAgIGhhbmRzaGFrZSByZXF1ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMubWF4UGF5bG9hZD0xMDQ4NTc2MDBdIFRoZSBtYXhpbXVtIGFsbG93ZWQgbWVzc2FnZVxuICogICAgIHNpemVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhSZWRpcmVjdHM9MTBdIFRoZSBtYXhpbXVtIG51bWJlciBvZiByZWRpcmVjdHNcbiAqICAgICBhbGxvd2VkXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMub3JpZ2luXSBWYWx1ZSBvZiB0aGUgYE9yaWdpbmAgb3JcbiAqICAgICBgU2VjLVdlYlNvY2tldC1PcmlnaW5gIGhlYWRlclxuICogQHBhcmFtIHsoQm9vbGVhbnxPYmplY3QpfSBbb3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZT10cnVlXSBFbmFibGUvZGlzYWJsZVxuICogICAgIHBlcm1lc3NhZ2UtZGVmbGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnByb3RvY29sVmVyc2lvbj0xM10gVmFsdWUgb2YgdGhlXG4gKiAgICAgYFNlYy1XZWJTb2NrZXQtVmVyc2lvbmAgaGVhZGVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnNraXBVVEY4VmFsaWRhdGlvbj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3JcbiAqICAgICBub3QgdG8gc2tpcCBVVEYtOCB2YWxpZGF0aW9uIGZvciB0ZXh0IGFuZCBjbG9zZSBtZXNzYWdlc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5pdEFzQ2xpZW50KHdlYnNvY2tldCwgYWRkcmVzcywgcHJvdG9jb2xzLCBvcHRpb25zKSB7XG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgYWxsb3dTeW5jaHJvbm91c0V2ZW50czogdHJ1ZSxcbiAgICBhdXRvUG9uZzogdHJ1ZSxcbiAgICBjbG9zZVRpbWVvdXQ6IENMT1NFX1RJTUVPVVQsXG4gICAgcHJvdG9jb2xWZXJzaW9uOiBwcm90b2NvbFZlcnNpb25zWzFdLFxuICAgIG1heFBheWxvYWQ6IDEwMCAqIDEwMjQgKiAxMDI0LFxuICAgIHNraXBVVEY4VmFsaWRhdGlvbjogZmFsc2UsXG4gICAgcGVyTWVzc2FnZURlZmxhdGU6IHRydWUsXG4gICAgZm9sbG93UmVkaXJlY3RzOiBmYWxzZSxcbiAgICBtYXhSZWRpcmVjdHM6IDEwLFxuICAgIC4uLm9wdGlvbnMsXG4gICAgc29ja2V0UGF0aDogdW5kZWZpbmVkLFxuICAgIGhvc3RuYW1lOiB1bmRlZmluZWQsXG4gICAgcHJvdG9jb2w6IHVuZGVmaW5lZCxcbiAgICB0aW1lb3V0OiB1bmRlZmluZWQsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBob3N0OiB1bmRlZmluZWQsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIHBvcnQ6IHVuZGVmaW5lZFxuICB9O1xuXG4gIHdlYnNvY2tldC5fYXV0b1BvbmcgPSBvcHRzLmF1dG9Qb25nO1xuICB3ZWJzb2NrZXQuX2Nsb3NlVGltZW91dCA9IG9wdHMuY2xvc2VUaW1lb3V0O1xuXG4gIGlmICghcHJvdG9jb2xWZXJzaW9ucy5pbmNsdWRlcyhvcHRzLnByb3RvY29sVmVyc2lvbikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgIGBVbnN1cHBvcnRlZCBwcm90b2NvbCB2ZXJzaW9uOiAke29wdHMucHJvdG9jb2xWZXJzaW9ufSBgICtcbiAgICAgICAgYChzdXBwb3J0ZWQgdmVyc2lvbnM6ICR7cHJvdG9jb2xWZXJzaW9ucy5qb2luKCcsICcpfSlgXG4gICAgKTtcbiAgfVxuXG4gIGxldCBwYXJzZWRVcmw7XG5cbiAgaWYgKGFkZHJlc3MgaW5zdGFuY2VvZiBVUkwpIHtcbiAgICBwYXJzZWRVcmwgPSBhZGRyZXNzO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBwYXJzZWRVcmwgPSBuZXcgVVJMKGFkZHJlc3MpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBJbnZhbGlkIFVSTDogJHthZGRyZXNzfWApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJzZWRVcmwucHJvdG9jb2wgPT09ICdodHRwOicpIHtcbiAgICBwYXJzZWRVcmwucHJvdG9jb2wgPSAnd3M6JztcbiAgfSBlbHNlIGlmIChwYXJzZWRVcmwucHJvdG9jb2wgPT09ICdodHRwczonKSB7XG4gICAgcGFyc2VkVXJsLnByb3RvY29sID0gJ3dzczonO1xuICB9XG5cbiAgd2Vic29ja2V0Ll91cmwgPSBwYXJzZWRVcmwuaHJlZjtcblxuICBjb25zdCBpc1NlY3VyZSA9IHBhcnNlZFVybC5wcm90b2NvbCA9PT0gJ3dzczonO1xuICBjb25zdCBpc0lwY1VybCA9IHBhcnNlZFVybC5wcm90b2NvbCA9PT0gJ3dzK3VuaXg6JztcbiAgbGV0IGludmFsaWRVcmxNZXNzYWdlO1xuXG4gIGlmIChwYXJzZWRVcmwucHJvdG9jb2wgIT09ICd3czonICYmICFpc1NlY3VyZSAmJiAhaXNJcGNVcmwpIHtcbiAgICBpbnZhbGlkVXJsTWVzc2FnZSA9XG4gICAgICAnVGhlIFVSTFxcJ3MgcHJvdG9jb2wgbXVzdCBiZSBvbmUgb2YgXCJ3czpcIiwgXCJ3c3M6XCIsICcgK1xuICAgICAgJ1wiaHR0cDpcIiwgXCJodHRwczpcIiwgb3IgXCJ3cyt1bml4OlwiJztcbiAgfSBlbHNlIGlmIChpc0lwY1VybCAmJiAhcGFyc2VkVXJsLnBhdGhuYW1lKSB7XG4gICAgaW52YWxpZFVybE1lc3NhZ2UgPSBcIlRoZSBVUkwncyBwYXRobmFtZSBpcyBlbXB0eVwiO1xuICB9IGVsc2UgaWYgKHBhcnNlZFVybC5oYXNoKSB7XG4gICAgaW52YWxpZFVybE1lc3NhZ2UgPSAnVGhlIFVSTCBjb250YWlucyBhIGZyYWdtZW50IGlkZW50aWZpZXInO1xuICB9XG5cbiAgaWYgKGludmFsaWRVcmxNZXNzYWdlKSB7XG4gICAgY29uc3QgZXJyID0gbmV3IFN5bnRheEVycm9yKGludmFsaWRVcmxNZXNzYWdlKTtcblxuICAgIGlmICh3ZWJzb2NrZXQuX3JlZGlyZWN0cyA9PT0gMCkge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0RXJyb3JBbmRDbG9zZSh3ZWJzb2NrZXQsIGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVmYXVsdFBvcnQgPSBpc1NlY3VyZSA/IDQ0MyA6IDgwO1xuICBjb25zdCBrZXkgPSByYW5kb21CeXRlcygxNikudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICBjb25zdCByZXF1ZXN0ID0gaXNTZWN1cmUgPyBodHRwcy5yZXF1ZXN0IDogaHR0cC5yZXF1ZXN0O1xuICBjb25zdCBwcm90b2NvbFNldCA9IG5ldyBTZXQoKTtcbiAgbGV0IHBlck1lc3NhZ2VEZWZsYXRlO1xuXG4gIG9wdHMuY3JlYXRlQ29ubmVjdGlvbiA9XG4gICAgb3B0cy5jcmVhdGVDb25uZWN0aW9uIHx8IChpc1NlY3VyZSA/IHRsc0Nvbm5lY3QgOiBuZXRDb25uZWN0KTtcbiAgb3B0cy5kZWZhdWx0UG9ydCA9IG9wdHMuZGVmYXVsdFBvcnQgfHwgZGVmYXVsdFBvcnQ7XG4gIG9wdHMucG9ydCA9IHBhcnNlZFVybC5wb3J0IHx8IGRlZmF1bHRQb3J0O1xuICBvcHRzLmhvc3QgPSBwYXJzZWRVcmwuaG9zdG5hbWUuc3RhcnRzV2l0aCgnWycpXG4gICAgPyBwYXJzZWRVcmwuaG9zdG5hbWUuc2xpY2UoMSwgLTEpXG4gICAgOiBwYXJzZWRVcmwuaG9zdG5hbWU7XG4gIG9wdHMuaGVhZGVycyA9IHtcbiAgICAuLi5vcHRzLmhlYWRlcnMsXG4gICAgJ1NlYy1XZWJTb2NrZXQtVmVyc2lvbic6IG9wdHMucHJvdG9jb2xWZXJzaW9uLFxuICAgICdTZWMtV2ViU29ja2V0LUtleSc6IGtleSxcbiAgICBDb25uZWN0aW9uOiAnVXBncmFkZScsXG4gICAgVXBncmFkZTogJ3dlYnNvY2tldCdcbiAgfTtcbiAgb3B0cy5wYXRoID0gcGFyc2VkVXJsLnBhdGhuYW1lICsgcGFyc2VkVXJsLnNlYXJjaDtcbiAgb3B0cy50aW1lb3V0ID0gb3B0cy5oYW5kc2hha2VUaW1lb3V0O1xuXG4gIGlmIChvcHRzLnBlck1lc3NhZ2VEZWZsYXRlKSB7XG4gICAgcGVyTWVzc2FnZURlZmxhdGUgPSBuZXcgUGVyTWVzc2FnZURlZmxhdGUoe1xuICAgICAgLi4ub3B0cy5wZXJNZXNzYWdlRGVmbGF0ZSxcbiAgICAgIGlzU2VydmVyOiBmYWxzZSxcbiAgICAgIG1heFBheWxvYWQ6IG9wdHMubWF4UGF5bG9hZFxuICAgIH0pO1xuICAgIG9wdHMuaGVhZGVyc1snU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zJ10gPSBmb3JtYXQoe1xuICAgICAgW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdOiBwZXJNZXNzYWdlRGVmbGF0ZS5vZmZlcigpXG4gICAgfSk7XG4gIH1cbiAgaWYgKHByb3RvY29scy5sZW5ndGgpIHtcbiAgICBmb3IgKGNvbnN0IHByb3RvY29sIG9mIHByb3RvY29scykge1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgcHJvdG9jb2wgIT09ICdzdHJpbmcnIHx8XG4gICAgICAgICFzdWJwcm90b2NvbFJlZ2V4LnRlc3QocHJvdG9jb2wpIHx8XG4gICAgICAgIHByb3RvY29sU2V0Lmhhcyhwcm90b2NvbClcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXG4gICAgICAgICAgJ0FuIGludmFsaWQgb3IgZHVwbGljYXRlZCBzdWJwcm90b2NvbCB3YXMgc3BlY2lmaWVkJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBwcm90b2NvbFNldC5hZGQocHJvdG9jb2wpO1xuICAgIH1cblxuICAgIG9wdHMuaGVhZGVyc1snU2VjLVdlYlNvY2tldC1Qcm90b2NvbCddID0gcHJvdG9jb2xzLmpvaW4oJywnKTtcbiAgfVxuICBpZiAob3B0cy5vcmlnaW4pIHtcbiAgICBpZiAob3B0cy5wcm90b2NvbFZlcnNpb24gPCAxMykge1xuICAgICAgb3B0cy5oZWFkZXJzWydTZWMtV2ViU29ja2V0LU9yaWdpbiddID0gb3B0cy5vcmlnaW47XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdHMuaGVhZGVycy5PcmlnaW4gPSBvcHRzLm9yaWdpbjtcbiAgICB9XG4gIH1cbiAgaWYgKHBhcnNlZFVybC51c2VybmFtZSB8fCBwYXJzZWRVcmwucGFzc3dvcmQpIHtcbiAgICBvcHRzLmF1dGggPSBgJHtwYXJzZWRVcmwudXNlcm5hbWV9OiR7cGFyc2VkVXJsLnBhc3N3b3JkfWA7XG4gIH1cblxuICBpZiAoaXNJcGNVcmwpIHtcbiAgICBjb25zdCBwYXJ0cyA9IG9wdHMucGF0aC5zcGxpdCgnOicpO1xuXG4gICAgb3B0cy5zb2NrZXRQYXRoID0gcGFydHNbMF07XG4gICAgb3B0cy5wYXRoID0gcGFydHNbMV07XG4gIH1cblxuICBsZXQgcmVxO1xuXG4gIGlmIChvcHRzLmZvbGxvd1JlZGlyZWN0cykge1xuICAgIGlmICh3ZWJzb2NrZXQuX3JlZGlyZWN0cyA9PT0gMCkge1xuICAgICAgd2Vic29ja2V0Ll9vcmlnaW5hbElwYyA9IGlzSXBjVXJsO1xuICAgICAgd2Vic29ja2V0Ll9vcmlnaW5hbFNlY3VyZSA9IGlzU2VjdXJlO1xuICAgICAgd2Vic29ja2V0Ll9vcmlnaW5hbEhvc3RPclNvY2tldFBhdGggPSBpc0lwY1VybFxuICAgICAgICA/IG9wdHMuc29ja2V0UGF0aFxuICAgICAgICA6IHBhcnNlZFVybC5ob3N0O1xuXG4gICAgICBjb25zdCBoZWFkZXJzID0gb3B0aW9ucyAmJiBvcHRpb25zLmhlYWRlcnM7XG5cbiAgICAgIC8vXG4gICAgICAvLyBTaGFsbG93IGNvcHkgdGhlIHVzZXIgcHJvdmlkZWQgb3B0aW9ucyBzbyB0aGF0IGhlYWRlcnMgY2FuIGJlIGNoYW5nZWRcbiAgICAgIC8vIHdpdGhvdXQgbXV0YXRpbmcgdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAgICAgIC8vXG4gICAgICBvcHRpb25zID0geyAuLi5vcHRpb25zLCBoZWFkZXJzOiB7fSB9O1xuXG4gICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhoZWFkZXJzKSkge1xuICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1trZXkudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAod2Vic29ja2V0Lmxpc3RlbmVyQ291bnQoJ3JlZGlyZWN0JykgPT09IDApIHtcbiAgICAgIGNvbnN0IGlzU2FtZUhvc3QgPSBpc0lwY1VybFxuICAgICAgICA/IHdlYnNvY2tldC5fb3JpZ2luYWxJcGNcbiAgICAgICAgICA/IG9wdHMuc29ja2V0UGF0aCA9PT0gd2Vic29ja2V0Ll9vcmlnaW5hbEhvc3RPclNvY2tldFBhdGhcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICAgIDogd2Vic29ja2V0Ll9vcmlnaW5hbElwY1xuICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICA6IHBhcnNlZFVybC5ob3N0ID09PSB3ZWJzb2NrZXQuX29yaWdpbmFsSG9zdE9yU29ja2V0UGF0aDtcblxuICAgICAgaWYgKCFpc1NhbWVIb3N0IHx8ICh3ZWJzb2NrZXQuX29yaWdpbmFsU2VjdXJlICYmICFpc1NlY3VyZSkpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gTWF0Y2ggY3VybCA3Ljc3LjAgYmVoYXZpb3IgYW5kIGRyb3AgdGhlIGZvbGxvd2luZyBoZWFkZXJzLiBUaGVzZVxuICAgICAgICAvLyBoZWFkZXJzIGFyZSBhbHNvIGRyb3BwZWQgd2hlbiBmb2xsb3dpbmcgYSByZWRpcmVjdCB0byBhIHN1YmRvbWFpbi5cbiAgICAgICAgLy9cbiAgICAgICAgZGVsZXRlIG9wdHMuaGVhZGVycy5hdXRob3JpemF0aW9uO1xuICAgICAgICBkZWxldGUgb3B0cy5oZWFkZXJzLmNvb2tpZTtcblxuICAgICAgICBpZiAoIWlzU2FtZUhvc3QpIGRlbGV0ZSBvcHRzLmhlYWRlcnMuaG9zdDtcblxuICAgICAgICBvcHRzLmF1dGggPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBNYXRjaCBjdXJsIDcuNzcuMCBiZWhhdmlvciBhbmQgbWFrZSB0aGUgZmlyc3QgYEF1dGhvcml6YXRpb25gIGhlYWRlciB3aW4uXG4gICAgLy8gSWYgdGhlIGBBdXRob3JpemF0aW9uYCBoZWFkZXIgaXMgc2V0LCB0aGVuIHRoZXJlIGlzIG5vdGhpbmcgdG8gZG8gYXMgaXRcbiAgICAvLyB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAgICAvL1xuICAgIGlmIChvcHRzLmF1dGggJiYgIW9wdGlvbnMuaGVhZGVycy5hdXRob3JpemF0aW9uKSB7XG4gICAgICBvcHRpb25zLmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9XG4gICAgICAgICdCYXNpYyAnICsgQnVmZmVyLmZyb20ob3B0cy5hdXRoKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgfVxuXG4gICAgcmVxID0gd2Vic29ja2V0Ll9yZXEgPSByZXF1ZXN0KG9wdHMpO1xuXG4gICAgaWYgKHdlYnNvY2tldC5fcmVkaXJlY3RzKSB7XG4gICAgICAvL1xuICAgICAgLy8gVW5saWtlIHdoYXQgaXMgZG9uZSBmb3IgdGhlIGAndXBncmFkZSdgIGV2ZW50LCBubyBlYXJseSBleGl0IGlzXG4gICAgICAvLyB0cmlnZ2VyZWQgaGVyZSBpZiB0aGUgdXNlciBjYWxscyBgd2Vic29ja2V0LmNsb3NlKClgIG9yXG4gICAgICAvLyBgd2Vic29ja2V0LnRlcm1pbmF0ZSgpYCBmcm9tIGEgbGlzdGVuZXIgb2YgdGhlIGAncmVkaXJlY3QnYCBldmVudC4gVGhpc1xuICAgICAgLy8gaXMgYmVjYXVzZSB0aGUgdXNlciBjYW4gYWxzbyBjYWxsIGByZXF1ZXN0LmRlc3Ryb3koKWAgd2l0aCBhbiBlcnJvclxuICAgICAgLy8gYmVmb3JlIGNhbGxpbmcgYHdlYnNvY2tldC5jbG9zZSgpYCBvciBgd2Vic29ja2V0LnRlcm1pbmF0ZSgpYCBhbmQgdGhpc1xuICAgICAgLy8gd291bGQgcmVzdWx0IGluIGFuIGVycm9yIGJlaW5nIGVtaXR0ZWQgb24gdGhlIGByZXF1ZXN0YCBvYmplY3Qgd2l0aCBub1xuICAgICAgLy8gYCdlcnJvcidgIGV2ZW50IGxpc3RlbmVycyBhdHRhY2hlZC5cbiAgICAgIC8vXG4gICAgICB3ZWJzb2NrZXQuZW1pdCgncmVkaXJlY3QnLCB3ZWJzb2NrZXQudXJsLCByZXEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXEgPSB3ZWJzb2NrZXQuX3JlcSA9IHJlcXVlc3Qob3B0cyk7XG4gIH1cblxuICBpZiAob3B0cy50aW1lb3V0KSB7XG4gICAgcmVxLm9uKCd0aW1lb3V0JywgKCkgPT4ge1xuICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCByZXEsICdPcGVuaW5nIGhhbmRzaGFrZSBoYXMgdGltZWQgb3V0Jyk7XG4gICAgfSk7XG4gIH1cblxuICByZXEub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICAgIGlmIChyZXEgPT09IG51bGwgfHwgcmVxW2tBYm9ydGVkXSkgcmV0dXJuO1xuXG4gICAgcmVxID0gd2Vic29ja2V0Ll9yZXEgPSBudWxsO1xuICAgIGVtaXRFcnJvckFuZENsb3NlKHdlYnNvY2tldCwgZXJyKTtcbiAgfSk7XG5cbiAgcmVxLm9uKCdyZXNwb25zZScsIChyZXMpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHJlcy5oZWFkZXJzLmxvY2F0aW9uO1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZTtcblxuICAgIGlmIChcbiAgICAgIGxvY2F0aW9uICYmXG4gICAgICBvcHRzLmZvbGxvd1JlZGlyZWN0cyAmJlxuICAgICAgc3RhdHVzQ29kZSA+PSAzMDAgJiZcbiAgICAgIHN0YXR1c0NvZGUgPCA0MDBcbiAgICApIHtcbiAgICAgIGlmICgrK3dlYnNvY2tldC5fcmVkaXJlY3RzID4gb3B0cy5tYXhSZWRpcmVjdHMpIHtcbiAgICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCByZXEsICdNYXhpbXVtIHJlZGlyZWN0cyBleGNlZWRlZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlcS5hYm9ydCgpO1xuXG4gICAgICBsZXQgYWRkcjtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYWRkciA9IG5ldyBVUkwobG9jYXRpb24sIGFkZHJlc3MpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgU3ludGF4RXJyb3IoYEludmFsaWQgVVJMOiAke2xvY2F0aW9ufWApO1xuICAgICAgICBlbWl0RXJyb3JBbmRDbG9zZSh3ZWJzb2NrZXQsIGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaW5pdEFzQ2xpZW50KHdlYnNvY2tldCwgYWRkciwgcHJvdG9jb2xzLCBvcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKCF3ZWJzb2NrZXQuZW1pdCgndW5leHBlY3RlZC1yZXNwb25zZScsIHJlcSwgcmVzKSkge1xuICAgICAgYWJvcnRIYW5kc2hha2UoXG4gICAgICAgIHdlYnNvY2tldCxcbiAgICAgICAgcmVxLFxuICAgICAgICBgVW5leHBlY3RlZCBzZXJ2ZXIgcmVzcG9uc2U6ICR7cmVzLnN0YXR1c0NvZGV9YFxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJlcS5vbigndXBncmFkZScsIChyZXMsIHNvY2tldCwgaGVhZCkgPT4ge1xuICAgIHdlYnNvY2tldC5lbWl0KCd1cGdyYWRlJywgcmVzKTtcblxuICAgIC8vXG4gICAgLy8gVGhlIHVzZXIgbWF5IGhhdmUgY2xvc2VkIHRoZSBjb25uZWN0aW9uIGZyb20gYSBsaXN0ZW5lciBvZiB0aGVcbiAgICAvLyBgJ3VwZ3JhZGUnYCBldmVudC5cbiAgICAvL1xuICAgIGlmICh3ZWJzb2NrZXQucmVhZHlTdGF0ZSAhPT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHJldHVybjtcblxuICAgIHJlcSA9IHdlYnNvY2tldC5fcmVxID0gbnVsbDtcblxuICAgIGNvbnN0IHVwZ3JhZGUgPSByZXMuaGVhZGVycy51cGdyYWRlO1xuXG4gICAgaWYgKHVwZ3JhZGUgPT09IHVuZGVmaW5lZCB8fCB1cGdyYWRlLnRvTG93ZXJDYXNlKCkgIT09ICd3ZWJzb2NrZXQnKSB7XG4gICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHNvY2tldCwgJ0ludmFsaWQgVXBncmFkZSBoZWFkZXInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaWdlc3QgPSBjcmVhdGVIYXNoKCdzaGExJylcbiAgICAgIC51cGRhdGUoa2V5ICsgR1VJRClcbiAgICAgIC5kaWdlc3QoJ2Jhc2U2NCcpO1xuXG4gICAgaWYgKHJlcy5oZWFkZXJzWydzZWMtd2Vic29ja2V0LWFjY2VwdCddICE9PSBkaWdlc3QpIHtcbiAgICAgIGFib3J0SGFuZHNoYWtlKHdlYnNvY2tldCwgc29ja2V0LCAnSW52YWxpZCBTZWMtV2ViU29ja2V0LUFjY2VwdCBoZWFkZXInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZXJ2ZXJQcm90ID0gcmVzLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtcHJvdG9jb2wnXTtcbiAgICBsZXQgcHJvdEVycm9yO1xuXG4gICAgaWYgKHNlcnZlclByb3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCFwcm90b2NvbFNldC5zaXplKSB7XG4gICAgICAgIHByb3RFcnJvciA9ICdTZXJ2ZXIgc2VudCBhIHN1YnByb3RvY29sIGJ1dCBub25lIHdhcyByZXF1ZXN0ZWQnO1xuICAgICAgfSBlbHNlIGlmICghcHJvdG9jb2xTZXQuaGFzKHNlcnZlclByb3QpKSB7XG4gICAgICAgIHByb3RFcnJvciA9ICdTZXJ2ZXIgc2VudCBhbiBpbnZhbGlkIHN1YnByb3RvY29sJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHByb3RvY29sU2V0LnNpemUpIHtcbiAgICAgIHByb3RFcnJvciA9ICdTZXJ2ZXIgc2VudCBubyBzdWJwcm90b2NvbCc7XG4gICAgfVxuXG4gICAgaWYgKHByb3RFcnJvcikge1xuICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCBzb2NrZXQsIHByb3RFcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlcnZlclByb3QpIHdlYnNvY2tldC5fcHJvdG9jb2wgPSBzZXJ2ZXJQcm90O1xuXG4gICAgY29uc3Qgc2VjV2ViU29ja2V0RXh0ZW5zaW9ucyA9IHJlcy5oZWFkZXJzWydzZWMtd2Vic29ja2V0LWV4dGVuc2lvbnMnXTtcblxuICAgIGlmIChzZWNXZWJTb2NrZXRFeHRlbnNpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICghcGVyTWVzc2FnZURlZmxhdGUpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAgICAgJ1NlcnZlciBzZW50IGEgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zIGhlYWRlciBidXQgbm8gZXh0ZW5zaW9uICcgK1xuICAgICAgICAgICd3YXMgcmVxdWVzdGVkJztcbiAgICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCBzb2NrZXQsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBleHRlbnNpb25zO1xuXG4gICAgICB0cnkge1xuICAgICAgICBleHRlbnNpb25zID0gcGFyc2Uoc2VjV2ViU29ja2V0RXh0ZW5zaW9ucyk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdJbnZhbGlkIFNlYy1XZWJTb2NrZXQtRXh0ZW5zaW9ucyBoZWFkZXInO1xuICAgICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHNvY2tldCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXh0ZW5zaW9uTmFtZXMgPSBPYmplY3Qua2V5cyhleHRlbnNpb25zKTtcblxuICAgICAgaWYgKFxuICAgICAgICBleHRlbnNpb25OYW1lcy5sZW5ndGggIT09IDEgfHxcbiAgICAgICAgZXh0ZW5zaW9uTmFtZXNbMF0gIT09IFBlck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVcbiAgICAgICkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ1NlcnZlciBpbmRpY2F0ZWQgYW4gZXh0ZW5zaW9uIHRoYXQgd2FzIG5vdCByZXF1ZXN0ZWQnO1xuICAgICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHNvY2tldCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcGVyTWVzc2FnZURlZmxhdGUuYWNjZXB0KGV4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnSW52YWxpZCBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnMgaGVhZGVyJztcbiAgICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCBzb2NrZXQsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdlYnNvY2tldC5fZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSA9XG4gICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlO1xuICAgIH1cblxuICAgIHdlYnNvY2tldC5zZXRTb2NrZXQoc29ja2V0LCBoZWFkLCB7XG4gICAgICBhbGxvd1N5bmNocm9ub3VzRXZlbnRzOiBvcHRzLmFsbG93U3luY2hyb25vdXNFdmVudHMsXG4gICAgICBnZW5lcmF0ZU1hc2s6IG9wdHMuZ2VuZXJhdGVNYXNrLFxuICAgICAgbWF4UGF5bG9hZDogb3B0cy5tYXhQYXlsb2FkLFxuICAgICAgc2tpcFVURjhWYWxpZGF0aW9uOiBvcHRzLnNraXBVVEY4VmFsaWRhdGlvblxuICAgIH0pO1xuICB9KTtcblxuICBpZiAob3B0cy5maW5pc2hSZXF1ZXN0KSB7XG4gICAgb3B0cy5maW5pc2hSZXF1ZXN0KHJlcSwgd2Vic29ja2V0KTtcbiAgfSBlbHNlIHtcbiAgICByZXEuZW5kKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBFbWl0IHRoZSBgJ2Vycm9yJ2AgYW5kIGAnY2xvc2UnYCBldmVudHMuXG4gKlxuICogQHBhcmFtIHtXZWJTb2NrZXR9IHdlYnNvY2tldCBUaGUgV2ViU29ja2V0IGluc3RhbmNlXG4gKiBAcGFyYW0ge0Vycm9yfSBUaGUgZXJyb3IgdG8gZW1pdFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZW1pdEVycm9yQW5kQ2xvc2Uod2Vic29ja2V0LCBlcnIpIHtcbiAgd2Vic29ja2V0Ll9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gIC8vXG4gIC8vIFRoZSBmb2xsb3dpbmcgYXNzaWdubWVudCBpcyBwcmFjdGljYWxseSB1c2VsZXNzIGFuZCBpcyBkb25lIG9ubHkgZm9yXG4gIC8vIGNvbnNpc3RlbmN5LlxuICAvL1xuICB3ZWJzb2NrZXQuX2Vycm9yRW1pdHRlZCA9IHRydWU7XG4gIHdlYnNvY2tldC5lbWl0KCdlcnJvcicsIGVycik7XG4gIHdlYnNvY2tldC5lbWl0Q2xvc2UoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBgbmV0LlNvY2tldGAgYW5kIGluaXRpYXRlIGEgY29ubmVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBDb25uZWN0aW9uIG9wdGlvbnNcbiAqIEByZXR1cm4ge25ldC5Tb2NrZXR9IFRoZSBuZXdseSBjcmVhdGVkIHNvY2tldCB1c2VkIHRvIHN0YXJ0IHRoZSBjb25uZWN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBuZXRDb25uZWN0KG9wdGlvbnMpIHtcbiAgb3B0aW9ucy5wYXRoID0gb3B0aW9ucy5zb2NrZXRQYXRoO1xuICByZXR1cm4gbmV0LmNvbm5lY3Qob3B0aW9ucyk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYHRscy5UTFNTb2NrZXRgIGFuZCBpbml0aWF0ZSBhIGNvbm5lY3Rpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQ29ubmVjdGlvbiBvcHRpb25zXG4gKiBAcmV0dXJuIHt0bHMuVExTU29ja2V0fSBUaGUgbmV3bHkgY3JlYXRlZCBzb2NrZXQgdXNlZCB0byBzdGFydCB0aGUgY29ubmVjdGlvblxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gdGxzQ29ubmVjdChvcHRpb25zKSB7XG4gIG9wdGlvbnMucGF0aCA9IHVuZGVmaW5lZDtcblxuICBpZiAoIW9wdGlvbnMuc2VydmVybmFtZSAmJiBvcHRpb25zLnNlcnZlcm5hbWUgIT09ICcnKSB7XG4gICAgb3B0aW9ucy5zZXJ2ZXJuYW1lID0gbmV0LmlzSVAob3B0aW9ucy5ob3N0KSA/ICcnIDogb3B0aW9ucy5ob3N0O1xuICB9XG5cbiAgcmV0dXJuIHRscy5jb25uZWN0KG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIEFib3J0IHRoZSBoYW5kc2hha2UgYW5kIGVtaXQgYW4gZXJyb3IuXG4gKlxuICogQHBhcmFtIHtXZWJTb2NrZXR9IHdlYnNvY2tldCBUaGUgV2ViU29ja2V0IGluc3RhbmNlXG4gKiBAcGFyYW0geyhodHRwLkNsaWVudFJlcXVlc3R8bmV0LlNvY2tldHx0bHMuU29ja2V0KX0gc3RyZWFtIFRoZSByZXF1ZXN0IHRvXG4gKiAgICAgYWJvcnQgb3IgdGhlIHNvY2tldCB0byBkZXN0cm95XG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCBzdHJlYW0sIG1lc3NhZ2UpIHtcbiAgd2Vic29ja2V0Ll9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG5cbiAgY29uc3QgZXJyID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShlcnIsIGFib3J0SGFuZHNoYWtlKTtcblxuICBpZiAoc3RyZWFtLnNldEhlYWRlcikge1xuICAgIHN0cmVhbVtrQWJvcnRlZF0gPSB0cnVlO1xuICAgIHN0cmVhbS5hYm9ydCgpO1xuXG4gICAgaWYgKHN0cmVhbS5zb2NrZXQgJiYgIXN0cmVhbS5zb2NrZXQuZGVzdHJveWVkKSB7XG4gICAgICAvL1xuICAgICAgLy8gT24gTm9kZS5qcyA+PSAxNC4zLjAgYHJlcXVlc3QuYWJvcnQoKWAgZG9lcyBub3QgZGVzdHJveSB0aGUgc29ja2V0IGlmXG4gICAgICAvLyBjYWxsZWQgYWZ0ZXIgdGhlIHJlcXVlc3QgY29tcGxldGVkLiBTZWVcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJzb2NrZXRzL3dzL2lzc3Vlcy8xODY5LlxuICAgICAgLy9cbiAgICAgIHN0cmVhbS5zb2NrZXQuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdEVycm9yQW5kQ2xvc2UsIHdlYnNvY2tldCwgZXJyKTtcbiAgfSBlbHNlIHtcbiAgICBzdHJlYW0uZGVzdHJveShlcnIpO1xuICAgIHN0cmVhbS5vbmNlKCdlcnJvcicsIHdlYnNvY2tldC5lbWl0LmJpbmQod2Vic29ja2V0LCAnZXJyb3InKSk7XG4gICAgc3RyZWFtLm9uY2UoJ2Nsb3NlJywgd2Vic29ja2V0LmVtaXRDbG9zZS5iaW5kKHdlYnNvY2tldCkpO1xuICB9XG59XG5cbi8qKlxuICogSGFuZGxlIGNhc2VzIHdoZXJlIHRoZSBgcGluZygpYCwgYHBvbmcoKWAsIG9yIGBzZW5kKClgIG1ldGhvZHMgYXJlIGNhbGxlZFxuICogd2hlbiB0aGUgYHJlYWR5U3RhdGVgIGF0dHJpYnV0ZSBpcyBgQ0xPU0lOR2Agb3IgYENMT1NFRGAuXG4gKlxuICogQHBhcmFtIHtXZWJTb2NrZXR9IHdlYnNvY2tldCBUaGUgV2ViU29ja2V0IGluc3RhbmNlXG4gKiBAcGFyYW0geyp9IFtkYXRhXSBUaGUgZGF0YSB0byBzZW5kXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZW5kQWZ0ZXJDbG9zZSh3ZWJzb2NrZXQsIGRhdGEsIGNiKSB7XG4gIGlmIChkYXRhKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gaXNCbG9iKGRhdGEpID8gZGF0YS5zaXplIDogdG9CdWZmZXIoZGF0YSkubGVuZ3RoO1xuXG4gICAgLy9cbiAgICAvLyBUaGUgYF9idWZmZXJlZEFtb3VudGAgcHJvcGVydHkgaXMgdXNlZCBvbmx5IHdoZW4gdGhlIHBlZXIgaXMgYSBjbGllbnQgYW5kXG4gICAgLy8gdGhlIG9wZW5pbmcgaGFuZHNoYWtlIGZhaWxzLiBVbmRlciB0aGVzZSBjaXJjdW1zdGFuY2VzLCBpbiBmYWN0LCB0aGVcbiAgICAvLyBgc2V0U29ja2V0KClgIG1ldGhvZCBpcyBub3QgY2FsbGVkLCBzbyB0aGUgYF9zb2NrZXRgIGFuZCBgX3NlbmRlcmBcbiAgICAvLyBwcm9wZXJ0aWVzIGFyZSBzZXQgdG8gYG51bGxgLlxuICAgIC8vXG4gICAgaWYgKHdlYnNvY2tldC5fc29ja2V0KSB3ZWJzb2NrZXQuX3NlbmRlci5fYnVmZmVyZWRCeXRlcyArPSBsZW5ndGg7XG4gICAgZWxzZSB3ZWJzb2NrZXQuX2J1ZmZlcmVkQW1vdW50ICs9IGxlbmd0aDtcbiAgfVxuXG4gIGlmIChjYikge1xuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcbiAgICAgIGBXZWJTb2NrZXQgaXMgbm90IG9wZW46IHJlYWR5U3RhdGUgJHt3ZWJzb2NrZXQucmVhZHlTdGF0ZX0gYCArXG4gICAgICAgIGAoJHtyZWFkeVN0YXRlc1t3ZWJzb2NrZXQucmVhZHlTdGF0ZV19KWBcbiAgICApO1xuICAgIHByb2Nlc3MubmV4dFRpY2soY2IsIGVycik7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGBSZWNlaXZlcmAgYCdjb25jbHVkZSdgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlIFRoZSBzdGF0dXMgY29kZVxuICogQHBhcmFtIHtCdWZmZXJ9IHJlYXNvbiBUaGUgcmVhc29uIGZvciBjbG9zaW5nXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZWNlaXZlck9uQ29uY2x1ZGUoY29kZSwgcmVhc29uKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgd2Vic29ja2V0Ll9jbG9zZUZyYW1lUmVjZWl2ZWQgPSB0cnVlO1xuICB3ZWJzb2NrZXQuX2Nsb3NlTWVzc2FnZSA9IHJlYXNvbjtcbiAgd2Vic29ja2V0Ll9jbG9zZUNvZGUgPSBjb2RlO1xuXG4gIGlmICh3ZWJzb2NrZXQuX3NvY2tldFtrV2ViU29ja2V0XSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgd2Vic29ja2V0Ll9zb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCBzb2NrZXRPbkRhdGEpO1xuICBwcm9jZXNzLm5leHRUaWNrKHJlc3VtZSwgd2Vic29ja2V0Ll9zb2NrZXQpO1xuXG4gIGlmIChjb2RlID09PSAxMDA1KSB3ZWJzb2NrZXQuY2xvc2UoKTtcbiAgZWxzZSB3ZWJzb2NrZXQuY2xvc2UoY29kZSwgcmVhc29uKTtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGBSZWNlaXZlcmAgYCdkcmFpbidgIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlY2VpdmVyT25EcmFpbigpIHtcbiAgY29uc3Qgd2Vic29ja2V0ID0gdGhpc1trV2ViU29ja2V0XTtcblxuICBpZiAoIXdlYnNvY2tldC5pc1BhdXNlZCkgd2Vic29ja2V0Ll9zb2NrZXQucmVzdW1lKCk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgUmVjZWl2ZXJgIGAnZXJyb3InYCBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhSYW5nZUVycm9yfEVycm9yKX0gZXJyIFRoZSBlbWl0dGVkIGVycm9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZWNlaXZlck9uRXJyb3IoZXJyKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgaWYgKHdlYnNvY2tldC5fc29ja2V0W2tXZWJTb2NrZXRdICE9PSB1bmRlZmluZWQpIHtcbiAgICB3ZWJzb2NrZXQuX3NvY2tldC5yZW1vdmVMaXN0ZW5lcignZGF0YScsIHNvY2tldE9uRGF0YSk7XG5cbiAgICAvL1xuICAgIC8vIE9uIE5vZGUuanMgPCAxNC4wLjAgdGhlIGAnZXJyb3InYCBldmVudCBpcyBlbWl0dGVkIHN5bmNocm9ub3VzbHkuIFNlZVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJzb2NrZXRzL3dzL2lzc3Vlcy8xOTQwLlxuICAgIC8vXG4gICAgcHJvY2Vzcy5uZXh0VGljayhyZXN1bWUsIHdlYnNvY2tldC5fc29ja2V0KTtcblxuICAgIHdlYnNvY2tldC5jbG9zZShlcnJba1N0YXR1c0NvZGVdKTtcbiAgfVxuXG4gIGlmICghd2Vic29ja2V0Ll9lcnJvckVtaXR0ZWQpIHtcbiAgICB3ZWJzb2NrZXQuX2Vycm9yRW1pdHRlZCA9IHRydWU7XG4gICAgd2Vic29ja2V0LmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgYFJlY2VpdmVyYCBgJ2ZpbmlzaCdgIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlY2VpdmVyT25GaW5pc2goKSB7XG4gIHRoaXNba1dlYlNvY2tldF0uZW1pdENsb3NlKCk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgUmVjZWl2ZXJgIGAnbWVzc2FnZSdgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfEFycmF5QnVmZmVyfEJ1ZmZlcltdKX0gZGF0YSBUaGUgbWVzc2FnZVxuICogQHBhcmFtIHtCb29sZWFufSBpc0JpbmFyeSBTcGVjaWZpZXMgd2hldGhlciB0aGUgbWVzc2FnZSBpcyBiaW5hcnkgb3Igbm90XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZWNlaXZlck9uTWVzc2FnZShkYXRhLCBpc0JpbmFyeSkge1xuICB0aGlzW2tXZWJTb2NrZXRdLmVtaXQoJ21lc3NhZ2UnLCBkYXRhLCBpc0JpbmFyeSk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgUmVjZWl2ZXJgIGAncGluZydgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIFRoZSBkYXRhIGluY2x1ZGVkIGluIHRoZSBwaW5nIGZyYW1lXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZWNlaXZlck9uUGluZyhkYXRhKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgaWYgKHdlYnNvY2tldC5fYXV0b1BvbmcpIHdlYnNvY2tldC5wb25nKGRhdGEsICF0aGlzLl9pc1NlcnZlciwgTk9PUCk7XG4gIHdlYnNvY2tldC5lbWl0KCdwaW5nJywgZGF0YSk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgUmVjZWl2ZXJgIGAncG9uZydgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIFRoZSBkYXRhIGluY2x1ZGVkIGluIHRoZSBwb25nIGZyYW1lXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZWNlaXZlck9uUG9uZyhkYXRhKSB7XG4gIHRoaXNba1dlYlNvY2tldF0uZW1pdCgncG9uZycsIGRhdGEpO1xufVxuXG4vKipcbiAqIFJlc3VtZSBhIHJlYWRhYmxlIHN0cmVhbVxuICpcbiAqIEBwYXJhbSB7UmVhZGFibGV9IHN0cmVhbSBUaGUgcmVhZGFibGUgc3RyZWFtXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZXN1bWUoc3RyZWFtKSB7XG4gIHN0cmVhbS5yZXN1bWUoKTtcbn1cblxuLyoqXG4gKiBUaGUgYFNlbmRlcmAgZXJyb3IgZXZlbnQgaGFuZGxlci5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBUaGUgZXJyb3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNlbmRlck9uRXJyb3IoZXJyKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgaWYgKHdlYnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0VEKSByZXR1cm47XG4gIGlmICh3ZWJzb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICB3ZWJzb2NrZXQuX3JlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ0xPU0lORztcbiAgICBzZXRDbG9zZVRpbWVyKHdlYnNvY2tldCk7XG4gIH1cblxuICAvL1xuICAvLyBgc29ja2V0LmVuZCgpYCBpcyB1c2VkIGluc3RlYWQgb2YgYHNvY2tldC5kZXN0cm95KClgIHRvIGFsbG93IHRoZSBvdGhlclxuICAvLyBwZWVyIHRvIGZpbmlzaCBzZW5kaW5nIHF1ZXVlZCBkYXRhLiBUaGVyZSBpcyBubyBuZWVkIHRvIHNldCBhIHRpbWVyIGhlcmVcbiAgLy8gYmVjYXVzZSBgQ0xPU0lOR2AgbWVhbnMgdGhhdCBpdCBpcyBhbHJlYWR5IHNldCBvciBub3QgbmVlZGVkLlxuICAvL1xuICB0aGlzLl9zb2NrZXQuZW5kKCk7XG5cbiAgaWYgKCF3ZWJzb2NrZXQuX2Vycm9yRW1pdHRlZCkge1xuICAgIHdlYnNvY2tldC5fZXJyb3JFbWl0dGVkID0gdHJ1ZTtcbiAgICB3ZWJzb2NrZXQuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB9XG59XG5cbi8qKlxuICogU2V0IGEgdGltZXIgdG8gZGVzdHJveSB0aGUgdW5kZXJseWluZyByYXcgc29ja2V0IG9mIGEgV2ViU29ja2V0LlxuICpcbiAqIEBwYXJhbSB7V2ViU29ja2V0fSB3ZWJzb2NrZXQgVGhlIFdlYlNvY2tldCBpbnN0YW5jZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2V0Q2xvc2VUaW1lcih3ZWJzb2NrZXQpIHtcbiAgd2Vic29ja2V0Ll9jbG9zZVRpbWVyID0gc2V0VGltZW91dChcbiAgICB3ZWJzb2NrZXQuX3NvY2tldC5kZXN0cm95LmJpbmQod2Vic29ja2V0Ll9zb2NrZXQpLFxuICAgIHdlYnNvY2tldC5fY2xvc2VUaW1lb3V0XG4gICk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBzb2NrZXQgYCdjbG9zZSdgIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNvY2tldE9uQ2xvc2UoKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgdGhpcy5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBzb2NrZXRPbkNsb3NlKTtcbiAgdGhpcy5yZW1vdmVMaXN0ZW5lcignZGF0YScsIHNvY2tldE9uRGF0YSk7XG4gIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIHNvY2tldE9uRW5kKTtcblxuICB3ZWJzb2NrZXQuX3JlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ0xPU0lORztcblxuICAvL1xuICAvLyBUaGUgY2xvc2UgZnJhbWUgbWlnaHQgbm90IGhhdmUgYmVlbiByZWNlaXZlZCBvciB0aGUgYCdlbmQnYCBldmVudCBlbWl0dGVkLFxuICAvLyBmb3IgZXhhbXBsZSwgaWYgdGhlIHNvY2tldCB3YXMgZGVzdHJveWVkIGR1ZSB0byBhbiBlcnJvci4gRW5zdXJlIHRoYXQgdGhlXG4gIC8vIGByZWNlaXZlcmAgc3RyZWFtIGlzIGNsb3NlZCBhZnRlciB3cml0aW5nIGFueSByZW1haW5pbmcgYnVmZmVyZWQgZGF0YSB0b1xuICAvLyBpdC4gSWYgdGhlIHJlYWRhYmxlIHNpZGUgb2YgdGhlIHNvY2tldCBpcyBpbiBmbG93aW5nIG1vZGUgdGhlbiB0aGVyZSBpcyBub1xuICAvLyBidWZmZXJlZCBkYXRhIGFzIGV2ZXJ5dGhpbmcgaGFzIGJlZW4gYWxyZWFkeSB3cml0dGVuLiBJZiBpbnN0ZWFkLCB0aGVcbiAgLy8gc29ja2V0IGlzIHBhdXNlZCwgYW55IHBvc3NpYmxlIGJ1ZmZlcmVkIGRhdGEgd2lsbCBiZSByZWFkIGFzIGEgc2luZ2xlXG4gIC8vIGNodW5rLlxuICAvL1xuICBpZiAoXG4gICAgIXRoaXMuX3JlYWRhYmxlU3RhdGUuZW5kRW1pdHRlZCAmJlxuICAgICF3ZWJzb2NrZXQuX2Nsb3NlRnJhbWVSZWNlaXZlZCAmJlxuICAgICF3ZWJzb2NrZXQuX3JlY2VpdmVyLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCAmJlxuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUubGVuZ3RoICE9PSAwXG4gICkge1xuICAgIGNvbnN0IGNodW5rID0gdGhpcy5yZWFkKHRoaXMuX3JlYWRhYmxlU3RhdGUubGVuZ3RoKTtcblxuICAgIHdlYnNvY2tldC5fcmVjZWl2ZXIud3JpdGUoY2h1bmspO1xuICB9XG5cbiAgd2Vic29ja2V0Ll9yZWNlaXZlci5lbmQoKTtcblxuICB0aGlzW2tXZWJTb2NrZXRdID0gdW5kZWZpbmVkO1xuXG4gIGNsZWFyVGltZW91dCh3ZWJzb2NrZXQuX2Nsb3NlVGltZXIpO1xuXG4gIGlmIChcbiAgICB3ZWJzb2NrZXQuX3JlY2VpdmVyLl93cml0YWJsZVN0YXRlLmZpbmlzaGVkIHx8XG4gICAgd2Vic29ja2V0Ll9yZWNlaXZlci5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWRcbiAgKSB7XG4gICAgd2Vic29ja2V0LmVtaXRDbG9zZSgpO1xuICB9IGVsc2Uge1xuICAgIHdlYnNvY2tldC5fcmVjZWl2ZXIub24oJ2Vycm9yJywgcmVjZWl2ZXJPbkZpbmlzaCk7XG4gICAgd2Vic29ja2V0Ll9yZWNlaXZlci5vbignZmluaXNoJywgcmVjZWl2ZXJPbkZpbmlzaCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIHNvY2tldCBgJ2RhdGEnYCBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gY2h1bmsgQSBjaHVuayBvZiBkYXRhXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzb2NrZXRPbkRhdGEoY2h1bmspIHtcbiAgaWYgKCF0aGlzW2tXZWJTb2NrZXRdLl9yZWNlaXZlci53cml0ZShjaHVuaykpIHtcbiAgICB0aGlzLnBhdXNlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIHNvY2tldCBgJ2VuZCdgIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNvY2tldE9uRW5kKCkge1xuICBjb25zdCB3ZWJzb2NrZXQgPSB0aGlzW2tXZWJTb2NrZXRdO1xuXG4gIHdlYnNvY2tldC5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TSU5HO1xuICB3ZWJzb2NrZXQuX3JlY2VpdmVyLmVuZCgpO1xuICB0aGlzLmVuZCgpO1xufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgc29ja2V0IGAnZXJyb3InYCBldmVudC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzb2NrZXRPbkVycm9yKCkge1xuICBjb25zdCB3ZWJzb2NrZXQgPSB0aGlzW2tXZWJTb2NrZXRdO1xuXG4gIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgc29ja2V0T25FcnJvcik7XG4gIHRoaXMub24oJ2Vycm9yJywgTk9PUCk7XG5cbiAgaWYgKHdlYnNvY2tldCkge1xuICAgIHdlYnNvY2tldC5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TSU5HO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG4iLCAiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbXCJlcnJvclwiLCB7IFwidmFyc0lnbm9yZVBhdHRlcm5cIjogXCJeV2ViU29ja2V0JFwiIH1dICovXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IFdlYlNvY2tldCA9IHJlcXVpcmUoJy4vd2Vic29ja2V0Jyk7XG5jb25zdCB7IER1cGxleCB9ID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5cbi8qKlxuICogRW1pdHMgdGhlIGAnY2xvc2UnYCBldmVudCBvbiBhIHN0cmVhbS5cbiAqXG4gKiBAcGFyYW0ge0R1cGxleH0gc3RyZWFtIFRoZSBzdHJlYW0uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBlbWl0Q2xvc2Uoc3RyZWFtKSB7XG4gIHN0cmVhbS5lbWl0KCdjbG9zZScpO1xufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgYCdlbmQnYCBldmVudC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkdXBsZXhPbkVuZCgpIHtcbiAgaWYgKCF0aGlzLmRlc3Ryb3llZCAmJiB0aGlzLl93cml0YWJsZVN0YXRlLmZpbmlzaGVkKSB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGAnZXJyb3InYCBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIgVGhlIGVycm9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkdXBsZXhPbkVycm9yKGVycikge1xuICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGR1cGxleE9uRXJyb3IpO1xuICB0aGlzLmRlc3Ryb3koKTtcbiAgaWYgKHRoaXMubGlzdGVuZXJDb3VudCgnZXJyb3InKSA9PT0gMCkge1xuICAgIC8vIERvIG5vdCBzdXBwcmVzcyB0aGUgdGhyb3dpbmcgYmVoYXZpb3IuXG4gICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIH1cbn1cblxuLyoqXG4gKiBXcmFwcyBhIGBXZWJTb2NrZXRgIGluIGEgZHVwbGV4IHN0cmVhbS5cbiAqXG4gKiBAcGFyYW0ge1dlYlNvY2tldH0gd3MgVGhlIGBXZWJTb2NrZXRgIHRvIHdyYXBcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGhlIG9wdGlvbnMgZm9yIHRoZSBgRHVwbGV4YCBjb25zdHJ1Y3RvclxuICogQHJldHVybiB7RHVwbGV4fSBUaGUgZHVwbGV4IHN0cmVhbVxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBjcmVhdGVXZWJTb2NrZXRTdHJlYW0od3MsIG9wdGlvbnMpIHtcbiAgbGV0IHRlcm1pbmF0ZU9uRGVzdHJveSA9IHRydWU7XG5cbiAgY29uc3QgZHVwbGV4ID0gbmV3IER1cGxleCh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBhdXRvRGVzdHJveTogZmFsc2UsXG4gICAgZW1pdENsb3NlOiBmYWxzZSxcbiAgICBvYmplY3RNb2RlOiBmYWxzZSxcbiAgICB3cml0YWJsZU9iamVjdE1vZGU6IGZhbHNlXG4gIH0pO1xuXG4gIHdzLm9uKCdtZXNzYWdlJywgZnVuY3Rpb24gbWVzc2FnZShtc2csIGlzQmluYXJ5KSB7XG4gICAgY29uc3QgZGF0YSA9XG4gICAgICAhaXNCaW5hcnkgJiYgZHVwbGV4Ll9yZWFkYWJsZVN0YXRlLm9iamVjdE1vZGUgPyBtc2cudG9TdHJpbmcoKSA6IG1zZztcblxuICAgIGlmICghZHVwbGV4LnB1c2goZGF0YSkpIHdzLnBhdXNlKCk7XG4gIH0pO1xuXG4gIHdzLm9uY2UoJ2Vycm9yJywgZnVuY3Rpb24gZXJyb3IoZXJyKSB7XG4gICAgaWYgKGR1cGxleC5kZXN0cm95ZWQpIHJldHVybjtcblxuICAgIC8vIFByZXZlbnQgYHdzLnRlcm1pbmF0ZSgpYCBmcm9tIGJlaW5nIGNhbGxlZCBieSBgZHVwbGV4Ll9kZXN0cm95KClgLlxuICAgIC8vXG4gICAgLy8gLSBJZiB0aGUgYCdlcnJvcidgIGV2ZW50IGlzIGVtaXR0ZWQgYmVmb3JlIHRoZSBgJ29wZW4nYCBldmVudCwgdGhlblxuICAgIC8vICAgYHdzLnRlcm1pbmF0ZSgpYCBpcyBhIG5vb3AgYXMgbm8gc29ja2V0IGlzIGFzc2lnbmVkLlxuICAgIC8vIC0gT3RoZXJ3aXNlLCB0aGUgZXJyb3IgaXMgcmUtZW1pdHRlZCBieSB0aGUgbGlzdGVuZXIgb2YgdGhlIGAnZXJyb3InYFxuICAgIC8vICAgZXZlbnQgb2YgdGhlIGBSZWNlaXZlcmAgb2JqZWN0LiBUaGUgbGlzdGVuZXIgYWxyZWFkeSBjbG9zZXMgdGhlXG4gICAgLy8gICBjb25uZWN0aW9uIGJ5IGNhbGxpbmcgYHdzLmNsb3NlKClgLiBUaGlzIGFsbG93cyBhIGNsb3NlIGZyYW1lIHRvIGJlXG4gICAgLy8gICBzZW50IHRvIHRoZSBvdGhlciBwZWVyLiBJZiBgd3MudGVybWluYXRlKClgIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGlzLFxuICAgIC8vICAgdGhlbiB0aGUgY2xvc2UgZnJhbWUgbWlnaHQgbm90IGJlIHNlbnQuXG4gICAgdGVybWluYXRlT25EZXN0cm95ID0gZmFsc2U7XG4gICAgZHVwbGV4LmRlc3Ryb3koZXJyKTtcbiAgfSk7XG5cbiAgd3Mub25jZSgnY2xvc2UnLCBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAoZHVwbGV4LmRlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgZHVwbGV4LnB1c2gobnVsbCk7XG4gIH0pO1xuXG4gIGR1cGxleC5fZGVzdHJveSA9IGZ1bmN0aW9uIChlcnIsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHdzLnJlYWR5U3RhdGUgPT09IHdzLkNMT1NFRCkge1xuICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdENsb3NlLCBkdXBsZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjYWxsZWQgPSBmYWxzZTtcblxuICAgIHdzLm9uY2UoJ2Vycm9yJywgZnVuY3Rpb24gZXJyb3IoZXJyKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICB9KTtcblxuICAgIHdzLm9uY2UoJ2Nsb3NlJywgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICBpZiAoIWNhbGxlZCkgY2FsbGJhY2soZXJyKTtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdENsb3NlLCBkdXBsZXgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1pbmF0ZU9uRGVzdHJveSkgd3MudGVybWluYXRlKCk7XG4gIH07XG5cbiAgZHVwbGV4Ll9maW5hbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICh3cy5yZWFkeVN0YXRlID09PSB3cy5DT05ORUNUSU5HKSB7XG4gICAgICB3cy5vbmNlKCdvcGVuJywgZnVuY3Rpb24gb3BlbigpIHtcbiAgICAgICAgZHVwbGV4Ll9maW5hbChjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdmFsdWUgb2YgdGhlIGBfc29ja2V0YCBwcm9wZXJ0eSBpcyBgbnVsbGAgaXQgbWVhbnMgdGhhdCBgd3NgIGlzIGFcbiAgICAvLyBjbGllbnQgd2Vic29ja2V0IGFuZCB0aGUgaGFuZHNoYWtlIGZhaWxlZC4gSW4gZmFjdCwgd2hlbiB0aGlzIGhhcHBlbnMsIGFcbiAgICAvLyBzb2NrZXQgaXMgbmV2ZXIgYXNzaWduZWQgdG8gdGhlIHdlYnNvY2tldC4gV2FpdCBmb3IgdGhlIGAnZXJyb3InYCBldmVudFxuICAgIC8vIHRoYXQgd2lsbCBiZSBlbWl0dGVkIGJ5IHRoZSB3ZWJzb2NrZXQuXG4gICAgaWYgKHdzLl9zb2NrZXQgPT09IG51bGwpIHJldHVybjtcblxuICAgIGlmICh3cy5fc29ja2V0Ll93cml0YWJsZVN0YXRlLmZpbmlzaGVkKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgaWYgKGR1cGxleC5fcmVhZGFibGVTdGF0ZS5lbmRFbWl0dGVkKSBkdXBsZXguZGVzdHJveSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3cy5fc29ja2V0Lm9uY2UoJ2ZpbmlzaCcsIGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgICAgICAgLy8gYGR1cGxleGAgaXMgbm90IGRlc3Ryb3llZCBoZXJlIGJlY2F1c2UgdGhlIGAnZW5kJ2AgZXZlbnQgd2lsbCBiZVxuICAgICAgICAvLyBlbWl0dGVkIG9uIGBkdXBsZXhgIGFmdGVyIHRoaXMgYCdmaW5pc2gnYCBldmVudC4gVGhlIEVPRiBzaWduYWxpbmdcbiAgICAgICAgLy8gYG51bGxgIGNodW5rIGlzLCBpbiBmYWN0LCBwdXNoZWQgd2hlbiB0aGUgd2Vic29ja2V0IGVtaXRzIGAnY2xvc2UnYC5cbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0pO1xuICAgICAgd3MuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgZHVwbGV4Ll9yZWFkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh3cy5pc1BhdXNlZCkgd3MucmVzdW1lKCk7XG4gIH07XG5cbiAgZHVwbGV4Ll93cml0ZSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHdzLnJlYWR5U3RhdGUgPT09IHdzLkNPTk5FQ1RJTkcpIHtcbiAgICAgIHdzLm9uY2UoJ29wZW4nLCBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgICBkdXBsZXguX3dyaXRlKGNodW5rLCBlbmNvZGluZywgY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd3Muc2VuZChjaHVuaywgY2FsbGJhY2spO1xuICB9O1xuXG4gIGR1cGxleC5vbignZW5kJywgZHVwbGV4T25FbmQpO1xuICBkdXBsZXgub24oJ2Vycm9yJywgZHVwbGV4T25FcnJvcik7XG4gIHJldHVybiBkdXBsZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlV2ViU29ja2V0U3RyZWFtO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyB0b2tlbkNoYXJzIH0gPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcblxuLyoqXG4gKiBQYXJzZXMgdGhlIGBTZWMtV2ViU29ja2V0LVByb3RvY29sYCBoZWFkZXIgaW50byBhIHNldCBvZiBzdWJwcm90b2NvbCBuYW1lcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVyIFRoZSBmaWVsZCB2YWx1ZSBvZiB0aGUgaGVhZGVyXG4gKiBAcmV0dXJuIHtTZXR9IFRoZSBzdWJwcm90b2NvbCBuYW1lc1xuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBwYXJzZShoZWFkZXIpIHtcbiAgY29uc3QgcHJvdG9jb2xzID0gbmV3IFNldCgpO1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgbGV0IGVuZCA9IC0xO1xuICBsZXQgaSA9IDA7XG5cbiAgZm9yIChpOyBpIDwgaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY29kZSA9IGhlYWRlci5jaGFyQ29kZUF0KGkpO1xuXG4gICAgaWYgKGVuZCA9PT0gLTEgJiYgdG9rZW5DaGFyc1tjb2RlXSA9PT0gMSkge1xuICAgICAgaWYgKHN0YXJ0ID09PSAtMSkgc3RhcnQgPSBpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBpICE9PSAwICYmXG4gICAgICAoY29kZSA9PT0gMHgyMCAvKiAnICcgKi8gfHwgY29kZSA9PT0gMHgwOSkgLyogJ1xcdCcgKi9cbiAgICApIHtcbiAgICAgIGlmIChlbmQgPT09IC0xICYmIHN0YXJ0ICE9PSAtMSkgZW5kID0gaTtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4MmMgLyogJywnICovKSB7XG4gICAgICBpZiAoc3RhcnQgPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kID09PSAtMSkgZW5kID0gaTtcblxuICAgICAgY29uc3QgcHJvdG9jb2wgPSBoZWFkZXIuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgICAgIGlmIChwcm90b2NvbHMuaGFzKHByb3RvY29sKSkge1xuICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFRoZSBcIiR7cHJvdG9jb2x9XCIgc3VicHJvdG9jb2wgaXMgZHVwbGljYXRlZGApO1xuICAgICAgfVxuXG4gICAgICBwcm90b2NvbHMuYWRkKHByb3RvY29sKTtcbiAgICAgIHN0YXJ0ID0gZW5kID0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gLTEgfHwgZW5kICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgaW5wdXQnKTtcbiAgfVxuXG4gIGNvbnN0IHByb3RvY29sID0gaGVhZGVyLnNsaWNlKHN0YXJ0LCBpKTtcblxuICBpZiAocHJvdG9jb2xzLmhhcyhwcm90b2NvbCkpIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFRoZSBcIiR7cHJvdG9jb2x9XCIgc3VicHJvdG9jb2wgaXMgZHVwbGljYXRlZGApO1xuICB9XG5cbiAgcHJvdG9jb2xzLmFkZChwcm90b2NvbCk7XG4gIHJldHVybiBwcm90b2NvbHM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBwYXJzZSB9O1xuIiwgIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogW1wiZXJyb3JcIiwgeyBcInZhcnNJZ25vcmVQYXR0ZXJuXCI6IFwiXkR1cGxleCRcIiwgXCJjYXVnaHRFcnJvcnNcIjogXCJub25lXCIgfV0gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5jb25zdCB7IER1cGxleCB9ID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5jb25zdCB7IGNyZWF0ZUhhc2ggfSA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXG5jb25zdCBleHRlbnNpb24gPSByZXF1aXJlKCcuL2V4dGVuc2lvbicpO1xuY29uc3QgUGVyTWVzc2FnZURlZmxhdGUgPSByZXF1aXJlKCcuL3Blcm1lc3NhZ2UtZGVmbGF0ZScpO1xuY29uc3Qgc3VicHJvdG9jb2wgPSByZXF1aXJlKCcuL3N1YnByb3RvY29sJyk7XG5jb25zdCBXZWJTb2NrZXQgPSByZXF1aXJlKCcuL3dlYnNvY2tldCcpO1xuY29uc3QgeyBDTE9TRV9USU1FT1VULCBHVUlELCBrV2ViU29ja2V0IH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5jb25zdCBrZXlSZWdleCA9IC9eWysvMC05QS1aYS16XXsyMn09PSQvO1xuXG5jb25zdCBSVU5OSU5HID0gMDtcbmNvbnN0IENMT1NJTkcgPSAxO1xuY29uc3QgQ0xPU0VEID0gMjtcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBXZWJTb2NrZXQgc2VydmVyLlxuICpcbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5jbGFzcyBXZWJTb2NrZXRTZXJ2ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgYFdlYlNvY2tldFNlcnZlcmAgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIENvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHM9dHJ1ZV0gU3BlY2lmaWVzIHdoZXRoZXJcbiAgICogICAgIGFueSBvZiB0aGUgYCdtZXNzYWdlJ2AsIGAncGluZydgLCBhbmQgYCdwb25nJ2AgZXZlbnRzIGNhbiBiZSBlbWl0dGVkXG4gICAqICAgICBtdWx0aXBsZSB0aW1lcyBpbiB0aGUgc2FtZSB0aWNrXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYXV0b1Bvbmc9dHJ1ZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvXG4gICAqICAgICBhdXRvbWF0aWNhbGx5IHNlbmQgYSBwb25nIGluIHJlc3BvbnNlIHRvIGEgcGluZ1xuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuYmFja2xvZz01MTFdIFRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aGUgcXVldWUgb2ZcbiAgICogICAgIHBlbmRpbmcgY29ubmVjdGlvbnNcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jbGllbnRUcmFja2luZz10cnVlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG9cbiAgICogICAgIHRyYWNrIGNsaWVudHNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmNsb3NlVGltZW91dD0zMDAwMF0gRHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIHRvXG4gICAqICAgICB3YWl0IGZvciB0aGUgY2xvc2luZyBoYW5kc2hha2UgdG8gZmluaXNoIGFmdGVyIGB3ZWJzb2NrZXQuY2xvc2UoKWAgaXNcbiAgICogICAgIGNhbGxlZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5oYW5kbGVQcm90b2NvbHNdIEEgaG9vayB0byBoYW5kbGUgcHJvdG9jb2xzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5ob3N0XSBUaGUgaG9zdG5hbWUgd2hlcmUgdG8gYmluZCB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhQYXlsb2FkPTEwNDg1NzYwMF0gVGhlIG1heGltdW0gYWxsb3dlZCBtZXNzYWdlXG4gICAqICAgICBzaXplXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubm9TZXJ2ZXI9ZmFsc2VdIEVuYWJsZSBubyBzZXJ2ZXIgbW9kZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucGF0aF0gQWNjZXB0IG9ubHkgY29ubmVjdGlvbnMgbWF0Y2hpbmcgdGhpcyBwYXRoXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58T2JqZWN0KX0gW29wdGlvbnMucGVyTWVzc2FnZURlZmxhdGU9ZmFsc2VdIEVuYWJsZS9kaXNhYmxlXG4gICAqICAgICBwZXJtZXNzYWdlLWRlZmxhdGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnBvcnRdIFRoZSBwb3J0IHdoZXJlIHRvIGJpbmQgdGhlIHNlcnZlclxuICAgKiBAcGFyYW0geyhodHRwLlNlcnZlcnxodHRwcy5TZXJ2ZXIpfSBbb3B0aW9ucy5zZXJ2ZXJdIEEgcHJlLWNyZWF0ZWQgSFRUUC9TXG4gICAqICAgICBzZXJ2ZXIgdG8gdXNlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuc2tpcFVURjhWYWxpZGF0aW9uPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvclxuICAgKiAgICAgbm90IHRvIHNraXAgVVRGLTggdmFsaWRhdGlvbiBmb3IgdGV4dCBhbmQgY2xvc2UgbWVzc2FnZXNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMudmVyaWZ5Q2xpZW50XSBBIGhvb2sgdG8gcmVqZWN0IGNvbm5lY3Rpb25zXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLldlYlNvY2tldD1XZWJTb2NrZXRdIFNwZWNpZmllcyB0aGUgYFdlYlNvY2tldGBcbiAgICogICAgIGNsYXNzIHRvIHVzZS4gSXQgbXVzdCBiZSB0aGUgYFdlYlNvY2tldGAgY2xhc3Mgb3IgY2xhc3MgdGhhdCBleHRlbmRzIGl0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gQSBsaXN0ZW5lciBmb3IgdGhlIGBsaXN0ZW5pbmdgIGV2ZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHN1cGVyKCk7XG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgYWxsb3dTeW5jaHJvbm91c0V2ZW50czogdHJ1ZSxcbiAgICAgIGF1dG9Qb25nOiB0cnVlLFxuICAgICAgbWF4UGF5bG9hZDogMTAwICogMTAyNCAqIDEwMjQsXG4gICAgICBza2lwVVRGOFZhbGlkYXRpb246IGZhbHNlLFxuICAgICAgcGVyTWVzc2FnZURlZmxhdGU6IGZhbHNlLFxuICAgICAgaGFuZGxlUHJvdG9jb2xzOiBudWxsLFxuICAgICAgY2xpZW50VHJhY2tpbmc6IHRydWUsXG4gICAgICBjbG9zZVRpbWVvdXQ6IENMT1NFX1RJTUVPVVQsXG4gICAgICB2ZXJpZnlDbGllbnQ6IG51bGwsXG4gICAgICBub1NlcnZlcjogZmFsc2UsXG4gICAgICBiYWNrbG9nOiBudWxsLCAvLyB1c2UgZGVmYXVsdCAoNTExIGFzIGltcGxlbWVudGVkIGluIG5ldC5qcylcbiAgICAgIHNlcnZlcjogbnVsbCxcbiAgICAgIGhvc3Q6IG51bGwsXG4gICAgICBwYXRoOiBudWxsLFxuICAgICAgcG9ydDogbnVsbCxcbiAgICAgIFdlYlNvY2tldCxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuXG4gICAgaWYgKFxuICAgICAgKG9wdGlvbnMucG9ydCA9PSBudWxsICYmICFvcHRpb25zLnNlcnZlciAmJiAhb3B0aW9ucy5ub1NlcnZlcikgfHxcbiAgICAgIChvcHRpb25zLnBvcnQgIT0gbnVsbCAmJiAob3B0aW9ucy5zZXJ2ZXIgfHwgb3B0aW9ucy5ub1NlcnZlcikpIHx8XG4gICAgICAob3B0aW9ucy5zZXJ2ZXIgJiYgb3B0aW9ucy5ub1NlcnZlcilcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdPbmUgYW5kIG9ubHkgb25lIG9mIHRoZSBcInBvcnRcIiwgXCJzZXJ2ZXJcIiwgb3IgXCJub1NlcnZlclwiIG9wdGlvbnMgJyArXG4gICAgICAgICAgJ211c3QgYmUgc3BlY2lmaWVkJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5wb3J0ICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX3NlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gaHR0cC5TVEFUVVNfQ09ERVNbNDI2XTtcblxuICAgICAgICByZXMud3JpdGVIZWFkKDQyNiwge1xuICAgICAgICAgICdDb250ZW50LUxlbmd0aCc6IGJvZHkubGVuZ3RoLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbidcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcy5lbmQoYm9keSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NlcnZlci5saXN0ZW4oXG4gICAgICAgIG9wdGlvbnMucG9ydCxcbiAgICAgICAgb3B0aW9ucy5ob3N0LFxuICAgICAgICBvcHRpb25zLmJhY2tsb2csXG4gICAgICAgIGNhbGxiYWNrXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5zZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX3NlcnZlciA9IG9wdGlvbnMuc2VydmVyO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zZXJ2ZXIpIHtcbiAgICAgIGNvbnN0IGVtaXRDb25uZWN0aW9uID0gdGhpcy5lbWl0LmJpbmQodGhpcywgJ2Nvbm5lY3Rpb24nKTtcblxuICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzID0gYWRkTGlzdGVuZXJzKHRoaXMuX3NlcnZlciwge1xuICAgICAgICBsaXN0ZW5pbmc6IHRoaXMuZW1pdC5iaW5kKHRoaXMsICdsaXN0ZW5pbmcnKSxcbiAgICAgICAgZXJyb3I6IHRoaXMuZW1pdC5iaW5kKHRoaXMsICdlcnJvcicpLFxuICAgICAgICB1cGdyYWRlOiAocmVxLCBzb2NrZXQsIGhlYWQpID0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVVwZ3JhZGUocmVxLCBzb2NrZXQsIGhlYWQsIGVtaXRDb25uZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMucGVyTWVzc2FnZURlZmxhdGUgPT09IHRydWUpIG9wdGlvbnMucGVyTWVzc2FnZURlZmxhdGUgPSB7fTtcbiAgICBpZiAob3B0aW9ucy5jbGllbnRUcmFja2luZykge1xuICAgICAgdGhpcy5jbGllbnRzID0gbmV3IFNldCgpO1xuICAgICAgdGhpcy5fc2hvdWxkRW1pdENsb3NlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLl9zdGF0ZSA9IFJVTk5JTkc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYm91bmQgYWRkcmVzcywgdGhlIGFkZHJlc3MgZmFtaWx5IG5hbWUsIGFuZCBwb3J0IG9mIHRoZSBzZXJ2ZXJcbiAgICogYXMgcmVwb3J0ZWQgYnkgdGhlIG9wZXJhdGluZyBzeXN0ZW0gaWYgbGlzdGVuaW5nIG9uIGFuIElQIHNvY2tldC5cbiAgICogSWYgdGhlIHNlcnZlciBpcyBsaXN0ZW5pbmcgb24gYSBwaXBlIG9yIFVOSVggZG9tYWluIHNvY2tldCwgdGhlIG5hbWUgaXNcbiAgICogcmV0dXJuZWQgYXMgYSBzdHJpbmcuXG4gICAqXG4gICAqIEByZXR1cm4geyhPYmplY3R8U3RyaW5nfG51bGwpfSBUaGUgYWRkcmVzcyBvZiB0aGUgc2VydmVyXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFkZHJlc3MoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5ub1NlcnZlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgc2VydmVyIGlzIG9wZXJhdGluZyBpbiBcIm5vU2VydmVyXCIgbW9kZScpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fc2VydmVyKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5fc2VydmVyLmFkZHJlc3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHRoZSBzZXJ2ZXIgZnJvbSBhY2NlcHRpbmcgbmV3IGNvbm5lY3Rpb25zIGFuZCBlbWl0IHRoZSBgJ2Nsb3NlJ2AgZXZlbnRcbiAgICogd2hlbiBhbGwgZXhpc3RpbmcgY29ubmVjdGlvbnMgYXJlIGNsb3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBBIG9uZS10aW1lIGxpc3RlbmVyIGZvciB0aGUgYCdjbG9zZSdgIGV2ZW50XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNsb3NlKGNiKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlID09PSBDTE9TRUQpIHtcbiAgICAgIGlmIChjYikge1xuICAgICAgICB0aGlzLm9uY2UoJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgICAgIGNiKG5ldyBFcnJvcignVGhlIHNlcnZlciBpcyBub3QgcnVubmluZycpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdENsb3NlLCB0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2IpIHRoaXMub25jZSgnY2xvc2UnLCBjYik7XG5cbiAgICBpZiAodGhpcy5fc3RhdGUgPT09IENMT1NJTkcpIHJldHVybjtcbiAgICB0aGlzLl9zdGF0ZSA9IENMT1NJTkc7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm5vU2VydmVyIHx8IHRoaXMub3B0aW9ucy5zZXJ2ZXIpIHtcbiAgICAgIGlmICh0aGlzLl9zZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVycyA9IHRoaXMuX3NlcnZlciA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNsaWVudHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsaWVudHMuc2l6ZSkge1xuICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdENsb3NlLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zaG91bGRFbWl0Q2xvc2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGVtaXRDbG9zZSwgdGhpcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlcnZlciA9IHRoaXMuX3NlcnZlcjtcblxuICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMgPSB0aGlzLl9zZXJ2ZXIgPSBudWxsO1xuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIEhUVFAvUyBzZXJ2ZXIgd2FzIGNyZWF0ZWQgaW50ZXJuYWxseS4gQ2xvc2UgaXQsIGFuZCByZWx5IG9uIGl0c1xuICAgICAgLy8gYCdjbG9zZSdgIGV2ZW50LlxuICAgICAgLy9cbiAgICAgIHNlcnZlci5jbG9zZSgoKSA9PiB7XG4gICAgICAgIGVtaXRDbG9zZSh0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWUgaWYgYSBnaXZlbiByZXF1ZXN0IHNob3VsZCBiZSBoYW5kbGVkIGJ5IHRoaXMgc2VydmVyIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge2h0dHAuSW5jb21pbmdNZXNzYWdlfSByZXEgUmVxdWVzdCBvYmplY3QgdG8gaW5zcGVjdFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIHJlcXVlc3QgaXMgdmFsaWQsIGVsc2UgYGZhbHNlYFxuICAgKiBAcHVibGljXG4gICAqL1xuICBzaG91bGRIYW5kbGUocmVxKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wYXRoKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHJlcS51cmwuaW5kZXhPZignPycpO1xuICAgICAgY29uc3QgcGF0aG5hbWUgPSBpbmRleCAhPT0gLTEgPyByZXEudXJsLnNsaWNlKDAsIGluZGV4KSA6IHJlcS51cmw7XG5cbiAgICAgIGlmIChwYXRobmFtZSAhPT0gdGhpcy5vcHRpb25zLnBhdGgpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYSBIVFRQIFVwZ3JhZGUgcmVxdWVzdC5cbiAgICpcbiAgICogQHBhcmFtIHtodHRwLkluY29taW5nTWVzc2FnZX0gcmVxIFRoZSByZXF1ZXN0IG9iamVjdFxuICAgKiBAcGFyYW0ge0R1cGxleH0gc29ja2V0IFRoZSBuZXR3b3JrIHNvY2tldCBiZXR3ZWVuIHRoZSBzZXJ2ZXIgYW5kIGNsaWVudFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gaGVhZCBUaGUgZmlyc3QgcGFja2V0IG9mIHRoZSB1cGdyYWRlZCBzdHJlYW1cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgaGFuZGxlVXBncmFkZShyZXEsIHNvY2tldCwgaGVhZCwgY2IpIHtcbiAgICBzb2NrZXQub24oJ2Vycm9yJywgc29ja2V0T25FcnJvcik7XG5cbiAgICBjb25zdCBrZXkgPSByZXEuaGVhZGVyc1snc2VjLXdlYnNvY2tldC1rZXknXTtcbiAgICBjb25zdCB1cGdyYWRlID0gcmVxLmhlYWRlcnMudXBncmFkZTtcbiAgICBjb25zdCB2ZXJzaW9uID0gK3JlcS5oZWFkZXJzWydzZWMtd2Vic29ja2V0LXZlcnNpb24nXTtcblxuICAgIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdJbnZhbGlkIEhUVFAgbWV0aG9kJztcbiAgICAgIGFib3J0SGFuZHNoYWtlT3JFbWl0d3NDbGllbnRFcnJvcih0aGlzLCByZXEsIHNvY2tldCwgNDA1LCBtZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodXBncmFkZSA9PT0gdW5kZWZpbmVkIHx8IHVwZ3JhZGUudG9Mb3dlckNhc2UoKSAhPT0gJ3dlYnNvY2tldCcpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnSW52YWxpZCBVcGdyYWRlIGhlYWRlcic7XG4gICAgICBhYm9ydEhhbmRzaGFrZU9yRW1pdHdzQ2xpZW50RXJyb3IodGhpcywgcmVxLCBzb2NrZXQsIDQwMCwgbWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8ICFrZXlSZWdleC50ZXN0KGtleSkpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTWlzc2luZyBvciBpbnZhbGlkIFNlYy1XZWJTb2NrZXQtS2V5IGhlYWRlcic7XG4gICAgICBhYm9ydEhhbmRzaGFrZU9yRW1pdHdzQ2xpZW50RXJyb3IodGhpcywgcmVxLCBzb2NrZXQsIDQwMCwgbWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24gIT09IDEzICYmIHZlcnNpb24gIT09IDgpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTWlzc2luZyBvciBpbnZhbGlkIFNlYy1XZWJTb2NrZXQtVmVyc2lvbiBoZWFkZXInO1xuICAgICAgYWJvcnRIYW5kc2hha2VPckVtaXR3c0NsaWVudEVycm9yKHRoaXMsIHJlcSwgc29ja2V0LCA0MDAsIG1lc3NhZ2UsIHtcbiAgICAgICAgJ1NlYy1XZWJTb2NrZXQtVmVyc2lvbic6ICcxMywgOCdcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zaG91bGRIYW5kbGUocmVxKSkge1xuICAgICAgYWJvcnRIYW5kc2hha2Uoc29ja2V0LCA0MDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY1dlYlNvY2tldFByb3RvY29sID0gcmVxLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtcHJvdG9jb2wnXTtcbiAgICBsZXQgcHJvdG9jb2xzID0gbmV3IFNldCgpO1xuXG4gICAgaWYgKHNlY1dlYlNvY2tldFByb3RvY29sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByb3RvY29scyA9IHN1YnByb3RvY29sLnBhcnNlKHNlY1dlYlNvY2tldFByb3RvY29sKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ0ludmFsaWQgU2VjLVdlYlNvY2tldC1Qcm90b2NvbCBoZWFkZXInO1xuICAgICAgICBhYm9ydEhhbmRzaGFrZU9yRW1pdHdzQ2xpZW50RXJyb3IodGhpcywgcmVxLCBzb2NrZXQsIDQwMCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZWNXZWJTb2NrZXRFeHRlbnNpb25zID0gcmVxLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtZXh0ZW5zaW9ucyddO1xuICAgIGNvbnN0IGV4dGVuc2lvbnMgPSB7fTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSAmJlxuICAgICAgc2VjV2ViU29ja2V0RXh0ZW5zaW9ucyAhPT0gdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICBjb25zdCBwZXJNZXNzYWdlRGVmbGF0ZSA9IG5ldyBQZXJNZXNzYWdlRGVmbGF0ZSh7XG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSxcbiAgICAgICAgaXNTZXJ2ZXI6IHRydWUsXG4gICAgICAgIG1heFBheWxvYWQ6IHRoaXMub3B0aW9ucy5tYXhQYXlsb2FkXG4gICAgICB9KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb2ZmZXJzID0gZXh0ZW5zaW9uLnBhcnNlKHNlY1dlYlNvY2tldEV4dGVuc2lvbnMpO1xuXG4gICAgICAgIGlmIChvZmZlcnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pIHtcbiAgICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZS5hY2NlcHQob2ZmZXJzW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdKTtcbiAgICAgICAgICBleHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdID0gcGVyTWVzc2FnZURlZmxhdGU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICAgICAnSW52YWxpZCBvciB1bmFjY2VwdGFibGUgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zIGhlYWRlcic7XG4gICAgICAgIGFib3J0SGFuZHNoYWtlT3JFbWl0d3NDbGllbnRFcnJvcih0aGlzLCByZXEsIHNvY2tldCwgNDAwLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vXG4gICAgLy8gT3B0aW9uYWxseSBjYWxsIGV4dGVybmFsIGNsaWVudCB2ZXJpZmljYXRpb24gaGFuZGxlci5cbiAgICAvL1xuICAgIGlmICh0aGlzLm9wdGlvbnMudmVyaWZ5Q2xpZW50KSB7XG4gICAgICBjb25zdCBpbmZvID0ge1xuICAgICAgICBvcmlnaW46XG4gICAgICAgICAgcmVxLmhlYWRlcnNbYCR7dmVyc2lvbiA9PT0gOCA/ICdzZWMtd2Vic29ja2V0LW9yaWdpbicgOiAnb3JpZ2luJ31gXSxcbiAgICAgICAgc2VjdXJlOiAhIShyZXEuc29ja2V0LmF1dGhvcml6ZWQgfHwgcmVxLnNvY2tldC5lbmNyeXB0ZWQpLFxuICAgICAgICByZXFcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudmVyaWZ5Q2xpZW50Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICB0aGlzLm9wdGlvbnMudmVyaWZ5Q2xpZW50KGluZm8sICh2ZXJpZmllZCwgY29kZSwgbWVzc2FnZSwgaGVhZGVycykgPT4ge1xuICAgICAgICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhYm9ydEhhbmRzaGFrZShzb2NrZXQsIGNvZGUgfHwgNDAxLCBtZXNzYWdlLCBoZWFkZXJzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmNvbXBsZXRlVXBncmFkZShcbiAgICAgICAgICAgIGV4dGVuc2lvbnMsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBwcm90b2NvbHMsXG4gICAgICAgICAgICByZXEsXG4gICAgICAgICAgICBzb2NrZXQsXG4gICAgICAgICAgICBoZWFkLFxuICAgICAgICAgICAgY2JcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy52ZXJpZnlDbGllbnQoaW5mbykpIHJldHVybiBhYm9ydEhhbmRzaGFrZShzb2NrZXQsIDQwMSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb21wbGV0ZVVwZ3JhZGUoZXh0ZW5zaW9ucywga2V5LCBwcm90b2NvbHMsIHJlcSwgc29ja2V0LCBoZWFkLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogVXBncmFkZSB0aGUgY29ubmVjdGlvbiB0byBXZWJTb2NrZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBleHRlbnNpb25zIFRoZSBhY2NlcHRlZCBleHRlbnNpb25zXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIHZhbHVlIG9mIHRoZSBgU2VjLVdlYlNvY2tldC1LZXlgIGhlYWRlclxuICAgKiBAcGFyYW0ge1NldH0gcHJvdG9jb2xzIFRoZSBzdWJwcm90b2NvbHNcbiAgICogQHBhcmFtIHtodHRwLkluY29taW5nTWVzc2FnZX0gcmVxIFRoZSByZXF1ZXN0IG9iamVjdFxuICAgKiBAcGFyYW0ge0R1cGxleH0gc29ja2V0IFRoZSBuZXR3b3JrIHNvY2tldCBiZXR3ZWVuIHRoZSBzZXJ2ZXIgYW5kIGNsaWVudFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gaGVhZCBUaGUgZmlyc3QgcGFja2V0IG9mIHRoZSB1cGdyYWRlZCBzdHJlYW1cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHRocm93cyB7RXJyb3J9IElmIGNhbGxlZCBtb3JlIHRoYW4gb25jZSB3aXRoIHRoZSBzYW1lIHNvY2tldFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29tcGxldGVVcGdyYWRlKGV4dGVuc2lvbnMsIGtleSwgcHJvdG9jb2xzLCByZXEsIHNvY2tldCwgaGVhZCwgY2IpIHtcbiAgICAvL1xuICAgIC8vIERlc3Ryb3kgdGhlIHNvY2tldCBpZiB0aGUgY2xpZW50IGhhcyBhbHJlYWR5IHNlbnQgYSBGSU4gcGFja2V0LlxuICAgIC8vXG4gICAgaWYgKCFzb2NrZXQucmVhZGFibGUgfHwgIXNvY2tldC53cml0YWJsZSkgcmV0dXJuIHNvY2tldC5kZXN0cm95KCk7XG5cbiAgICBpZiAoc29ja2V0W2tXZWJTb2NrZXRdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdzZXJ2ZXIuaGFuZGxlVXBncmFkZSgpIHdhcyBjYWxsZWQgbW9yZSB0aGFuIG9uY2Ugd2l0aCB0aGUgc2FtZSAnICtcbiAgICAgICAgICAnc29ja2V0LCBwb3NzaWJseSBkdWUgdG8gYSBtaXNjb25maWd1cmF0aW9uJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc3RhdGUgPiBSVU5OSU5HKSByZXR1cm4gYWJvcnRIYW5kc2hha2Uoc29ja2V0LCA1MDMpO1xuXG4gICAgY29uc3QgZGlnZXN0ID0gY3JlYXRlSGFzaCgnc2hhMScpXG4gICAgICAudXBkYXRlKGtleSArIEdVSUQpXG4gICAgICAuZGlnZXN0KCdiYXNlNjQnKTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBbXG4gICAgICAnSFRUUC8xLjEgMTAxIFN3aXRjaGluZyBQcm90b2NvbHMnLFxuICAgICAgJ1VwZ3JhZGU6IHdlYnNvY2tldCcsXG4gICAgICAnQ29ubmVjdGlvbjogVXBncmFkZScsXG4gICAgICBgU2VjLVdlYlNvY2tldC1BY2NlcHQ6ICR7ZGlnZXN0fWBcbiAgICBdO1xuXG4gICAgY29uc3Qgd3MgPSBuZXcgdGhpcy5vcHRpb25zLldlYlNvY2tldChudWxsLCB1bmRlZmluZWQsIHRoaXMub3B0aW9ucyk7XG5cbiAgICBpZiAocHJvdG9jb2xzLnNpemUpIHtcbiAgICAgIC8vXG4gICAgICAvLyBPcHRpb25hbGx5IGNhbGwgZXh0ZXJuYWwgcHJvdG9jb2wgc2VsZWN0aW9uIGhhbmRsZXIuXG4gICAgICAvL1xuICAgICAgY29uc3QgcHJvdG9jb2wgPSB0aGlzLm9wdGlvbnMuaGFuZGxlUHJvdG9jb2xzXG4gICAgICAgID8gdGhpcy5vcHRpb25zLmhhbmRsZVByb3RvY29scyhwcm90b2NvbHMsIHJlcSlcbiAgICAgICAgOiBwcm90b2NvbHMudmFsdWVzKCkubmV4dCgpLnZhbHVlO1xuXG4gICAgICBpZiAocHJvdG9jb2wpIHtcbiAgICAgICAgaGVhZGVycy5wdXNoKGBTZWMtV2ViU29ja2V0LVByb3RvY29sOiAke3Byb3RvY29sfWApO1xuICAgICAgICB3cy5fcHJvdG9jb2wgPSBwcm90b2NvbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSkge1xuICAgICAgY29uc3QgcGFyYW1zID0gZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXS5wYXJhbXM7XG4gICAgICBjb25zdCB2YWx1ZSA9IGV4dGVuc2lvbi5mb3JtYXQoe1xuICAgICAgICBbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV06IFtwYXJhbXNdXG4gICAgICB9KTtcbiAgICAgIGhlYWRlcnMucHVzaChgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zOiAke3ZhbHVlfWApO1xuICAgICAgd3MuX2V4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gQWxsb3cgZXh0ZXJuYWwgbW9kaWZpY2F0aW9uL2luc3BlY3Rpb24gb2YgaGFuZHNoYWtlIGhlYWRlcnMuXG4gICAgLy9cbiAgICB0aGlzLmVtaXQoJ2hlYWRlcnMnLCBoZWFkZXJzLCByZXEpO1xuXG4gICAgc29ja2V0LndyaXRlKGhlYWRlcnMuY29uY2F0KCdcXHJcXG4nKS5qb2luKCdcXHJcXG4nKSk7XG4gICAgc29ja2V0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIHNvY2tldE9uRXJyb3IpO1xuXG4gICAgd3Muc2V0U29ja2V0KHNvY2tldCwgaGVhZCwge1xuICAgICAgYWxsb3dTeW5jaHJvbm91c0V2ZW50czogdGhpcy5vcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHMsXG4gICAgICBtYXhQYXlsb2FkOiB0aGlzLm9wdGlvbnMubWF4UGF5bG9hZCxcbiAgICAgIHNraXBVVEY4VmFsaWRhdGlvbjogdGhpcy5vcHRpb25zLnNraXBVVEY4VmFsaWRhdGlvblxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY2xpZW50cykge1xuICAgICAgdGhpcy5jbGllbnRzLmFkZCh3cyk7XG4gICAgICB3cy5vbignY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xpZW50cy5kZWxldGUod3MpO1xuXG4gICAgICAgIGlmICh0aGlzLl9zaG91bGRFbWl0Q2xvc2UgJiYgIXRoaXMuY2xpZW50cy5zaXplKSB7XG4gICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0Q2xvc2UsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjYih3cywgcmVxKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYlNvY2tldFNlcnZlcjtcblxuLyoqXG4gKiBBZGQgZXZlbnQgbGlzdGVuZXJzIG9uIGFuIGBFdmVudEVtaXR0ZXJgIHVzaW5nIGEgbWFwIG9mIDxldmVudCwgbGlzdGVuZXI+XG4gKiBwYWlycy5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gc2VydmVyIFRoZSBldmVudCBlbWl0dGVyXG4gKiBAcGFyYW0ge09iamVjdC48U3RyaW5nLCBGdW5jdGlvbj59IG1hcCBUaGUgbGlzdGVuZXJzIHRvIGFkZFxuICogQHJldHVybiB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlbW92ZSB0aGUgYWRkZWQgbGlzdGVuZXJzIHdoZW5cbiAqICAgICBjYWxsZWRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVycyhzZXJ2ZXIsIG1hcCkge1xuICBmb3IgKGNvbnN0IGV2ZW50IG9mIE9iamVjdC5rZXlzKG1hcCkpIHNlcnZlci5vbihldmVudCwgbWFwW2V2ZW50XSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIE9iamVjdC5rZXlzKG1hcCkpIHtcbiAgICAgIHNlcnZlci5yZW1vdmVMaXN0ZW5lcihldmVudCwgbWFwW2V2ZW50XSk7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIEVtaXQgYSBgJ2Nsb3NlJ2AgZXZlbnQgb24gYW4gYEV2ZW50RW1pdHRlcmAuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IHNlcnZlciBUaGUgZXZlbnQgZW1pdHRlclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZW1pdENsb3NlKHNlcnZlcikge1xuICBzZXJ2ZXIuX3N0YXRlID0gQ0xPU0VEO1xuICBzZXJ2ZXIuZW1pdCgnY2xvc2UnKTtcbn1cblxuLyoqXG4gKiBIYW5kbGUgc29ja2V0IGVycm9ycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzb2NrZXRPbkVycm9yKCkge1xuICB0aGlzLmRlc3Ryb3koKTtcbn1cblxuLyoqXG4gKiBDbG9zZSB0aGUgY29ubmVjdGlvbiB3aGVuIHByZWNvbmRpdGlvbnMgYXJlIG5vdCBmdWxmaWxsZWQuXG4gKlxuICogQHBhcmFtIHtEdXBsZXh9IHNvY2tldCBUaGUgc29ja2V0IG9mIHRoZSB1cGdyYWRlIHJlcXVlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlIFRoZSBIVFRQIHJlc3BvbnNlIHN0YXR1cyBjb2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gW21lc3NhZ2VdIFRoZSBIVFRQIHJlc3BvbnNlIGJvZHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbaGVhZGVyc10gQWRkaXRpb25hbCBIVFRQIHJlc3BvbnNlIGhlYWRlcnNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFib3J0SGFuZHNoYWtlKHNvY2tldCwgY29kZSwgbWVzc2FnZSwgaGVhZGVycykge1xuICAvL1xuICAvLyBUaGUgc29ja2V0IGlzIHdyaXRhYmxlIHVubGVzcyB0aGUgdXNlciBkZXN0cm95ZWQgb3IgZW5kZWQgaXQgYmVmb3JlIGNhbGxpbmdcbiAgLy8gYHNlcnZlci5oYW5kbGVVcGdyYWRlKClgIG9yIGluIHRoZSBgdmVyaWZ5Q2xpZW50YCBmdW5jdGlvbiwgd2hpY2ggaXMgYSB1c2VyXG4gIC8vIGVycm9yLiBIYW5kbGluZyB0aGlzIGRvZXMgbm90IG1ha2UgbXVjaCBzZW5zZSBhcyB0aGUgd29yc3QgdGhhdCBjYW4gaGFwcGVuXG4gIC8vIGlzIHRoYXQgc29tZSBvZiB0aGUgZGF0YSB3cml0dGVuIGJ5IHRoZSB1c2VyIG1pZ2h0IGJlIGRpc2NhcmRlZCBkdWUgdG8gdGhlXG4gIC8vIGNhbGwgdG8gYHNvY2tldC5lbmQoKWAgYmVsb3csIHdoaWNoIHRyaWdnZXJzIGFuIGAnZXJyb3InYCBldmVudCB0aGF0IGluXG4gIC8vIHR1cm4gY2F1c2VzIHRoZSBzb2NrZXQgdG8gYmUgZGVzdHJveWVkLlxuICAvL1xuICBtZXNzYWdlID0gbWVzc2FnZSB8fCBodHRwLlNUQVRVU19DT0RFU1tjb2RlXTtcbiAgaGVhZGVycyA9IHtcbiAgICBDb25uZWN0aW9uOiAnY2xvc2UnLFxuICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sJyxcbiAgICAnQ29udGVudC1MZW5ndGgnOiBCdWZmZXIuYnl0ZUxlbmd0aChtZXNzYWdlKSxcbiAgICAuLi5oZWFkZXJzXG4gIH07XG5cbiAgc29ja2V0Lm9uY2UoJ2ZpbmlzaCcsIHNvY2tldC5kZXN0cm95KTtcblxuICBzb2NrZXQuZW5kKFxuICAgIGBIVFRQLzEuMSAke2NvZGV9ICR7aHR0cC5TVEFUVVNfQ09ERVNbY29kZV19XFxyXFxuYCArXG4gICAgICBPYmplY3Qua2V5cyhoZWFkZXJzKVxuICAgICAgICAubWFwKChoKSA9PiBgJHtofTogJHtoZWFkZXJzW2hdfWApXG4gICAgICAgIC5qb2luKCdcXHJcXG4nKSArXG4gICAgICAnXFxyXFxuXFxyXFxuJyArXG4gICAgICBtZXNzYWdlXG4gICk7XG59XG5cbi8qKlxuICogRW1pdCBhIGAnd3NDbGllbnRFcnJvcidgIGV2ZW50IG9uIGEgYFdlYlNvY2tldFNlcnZlcmAgaWYgdGhlcmUgaXMgYXQgbGVhc3RcbiAqIG9uZSBsaXN0ZW5lciBmb3IgaXQsIG90aGVyd2lzZSBjYWxsIGBhYm9ydEhhbmRzaGFrZSgpYC5cbiAqXG4gKiBAcGFyYW0ge1dlYlNvY2tldFNlcnZlcn0gc2VydmVyIFRoZSBXZWJTb2NrZXQgc2VydmVyXG4gKiBAcGFyYW0ge2h0dHAuSW5jb21pbmdNZXNzYWdlfSByZXEgVGhlIHJlcXVlc3Qgb2JqZWN0XG4gKiBAcGFyYW0ge0R1cGxleH0gc29ja2V0IFRoZSBzb2NrZXQgb2YgdGhlIHVwZ3JhZGUgcmVxdWVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IGNvZGUgVGhlIEhUVFAgcmVzcG9uc2Ugc3RhdHVzIGNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSBIVFRQIHJlc3BvbnNlIGJvZHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbaGVhZGVyc10gVGhlIEhUVFAgcmVzcG9uc2UgaGVhZGVyc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWJvcnRIYW5kc2hha2VPckVtaXR3c0NsaWVudEVycm9yKFxuICBzZXJ2ZXIsXG4gIHJlcSxcbiAgc29ja2V0LFxuICBjb2RlLFxuICBtZXNzYWdlLFxuICBoZWFkZXJzXG4pIHtcbiAgaWYgKHNlcnZlci5saXN0ZW5lckNvdW50KCd3c0NsaWVudEVycm9yJykpIHtcbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoZXJyLCBhYm9ydEhhbmRzaGFrZU9yRW1pdHdzQ2xpZW50RXJyb3IpO1xuXG4gICAgc2VydmVyLmVtaXQoJ3dzQ2xpZW50RXJyb3InLCBlcnIsIHNvY2tldCwgcmVxKTtcbiAgfSBlbHNlIHtcbiAgICBhYm9ydEhhbmRzaGFrZShzb2NrZXQsIGNvZGUsIG1lc3NhZ2UsIGhlYWRlcnMpO1xuICB9XG59XG4iLCAiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0IG9zIGZyb20gXCJub2RlOm9zXCI7XG5pbXBvcnQgcmVhZGxpbmUgZnJvbSBcIm5vZGU6cmVhZGxpbmVcIjtcbmltcG9ydCBwYyBmcm9tIFwicGljb2NvbG9yc1wiO1xuaW1wb3J0IHsgV2ViUHViU3ViQ2xpZW50LCBXZWJQdWJTdWJKc29uUHJvdG9jb2wgfSBmcm9tIFwiQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50XCI7XG5pbXBvcnQgeyBsb2FkQ3JlZGVudGlhbHMsIHNhdmVDcmVkZW50aWFscywgd2lwZUNyZWRlbnRpYWxzLCBjcmVkZW50aWFsTW9kZSwgQ3JlZGVudGlhbHMgfSBmcm9tIFwiLi9jcmVkZW50aWFscy5qc1wiO1xuaW1wb3J0IHsgam9pbkRpcmVjdCwgZGFlbW9uRGlyZWN0IH0gZnJvbSBcIi4vZGlyZWN0LmpzXCI7XG5cbi8vIFdvcmR0IGRvb3IgZXNidWlsZCBpbmdlbGluZWQgdmlhIC0tZGVmaW5lOkJWR19WRVJTSU9OPSdcIngueS56XCInLlxuLy8gVmFsdCB0ZXJ1ZyBvcCAndW5rbm93bicgYmlqIGRpcmVjdGUgdHMtcnVuIHpvbmRlciBkZWZpbmUuXG5kZWNsYXJlIGNvbnN0IEJWR19WRVJTSU9OOiBzdHJpbmc7XG5jb25zdCBWRVJTSU9OID0gdHlwZW9mIEJWR19WRVJTSU9OICE9PSBcInVuZGVmaW5lZFwiID8gQlZHX1ZFUlNJT04gOiBcInVua25vd25cIjtcblxudHlwZSBTdWJjb21tYW5kID0gKGFyZ3M6IHN0cmluZ1tdKSA9PiBQcm9taXNlPG51bWJlcj47XG5cbmNvbnN0IHN1YmNvbW1hbmRzOiBSZWNvcmQ8c3RyaW5nLCBTdWJjb21tYW5kPiA9IHtcbiAgam9pbjogY21kSm9pbixcbiAgZGFlbW9uOiBjbWREYWVtb24sXG4gIGNsaWVudHM6IGNtZENsaWVudHMsXG4gIHNlbmQ6IGNtZFNlbmQsXG4gIHVucGFpcjogY21kVW5wYWlyLFxufTtcblxuYXN5bmMgZnVuY3Rpb24gbWFpbigpOiBQcm9taXNlPG51bWJlcj4ge1xuICBjb25zdCBbY21kLCAuLi5yZXN0XSA9IHByb2Nlc3MuYXJndi5zbGljZSgyKTtcbiAgaWYgKCFjbWQgfHwgY21kID09PSBcIi0taGVscFwiIHx8IGNtZCA9PT0gXCItaFwiKSB7XG4gICAgcHJpbnRVc2FnZSgpO1xuICAgIHJldHVybiBjbWQgPyAwIDogMjtcbiAgfVxuICBpZiAoY21kID09PSBcIi0tdmVyc2lvblwiIHx8IGNtZCA9PT0gXCItdlwiIHx8IGNtZCA9PT0gXCJ2ZXJzaW9uXCIpIHtcbiAgICBjb25zb2xlLmxvZyhWRVJTSU9OKTtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjb25zdCBmbiA9IHN1YmNvbW1hbmRzW2NtZF07XG4gIGlmICghZm4pIHtcbiAgICBjb25zb2xlLmVycm9yKHBjLnJlZChgdW5rbm93biBzdWJjb21tYW5kOiAke2NtZH1gKSk7XG4gICAgcHJpbnRVc2FnZSgpO1xuICAgIHJldHVybiAyO1xuICB9XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IGZuKHJlc3QpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKHBjLnJlZChlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogU3RyaW5nKGVycikpKTtcbiAgICByZXR1cm4gMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFVzYWdlKCk6IHZvaWQge1xuICBjb25zb2xlLmVycm9yKGBcbmJ2Zy1kZWFtb24gXHUyMDE0IHB1cmUtQXp1cmUgdHJhbnNwb3J0IGNsaWVudCBmb3IgYnZnZWVydFxuXG5Vc2FnZTpcbiAgYnZnLWRlYW1vbiBqb2luIC0taHViIDx3c3M6Ly94LndlYnB1YnN1Yi5henVyZS5jb20vY2xpZW50L2h1YnMvPGh1Yj4+IC0tdHJhbnNwb3J0IDxpZGVudGlmaWVyPiBbLS10b2tlbiA8anRfeHh4Pl1cbiAgICAgIGFub255bW91c2x5IGNvbm5lY3QgdG8gYnZnZWVydCB2aWEgQXp1cmUsIHJlcXVlc3QgdG8gam9pbiBhXG4gICAgICB0cmFuc3BvcnQsIHByaW50IGEgcGFpcmluZyBjb2RlIGFuZCB3YWl0IGZvciBhZG1pbiBhcHByb3ZhbC5cbiAgICAgIFdpdGggLS10b2tlbiAob3IgZW52IEJWR19KT0lOX1RPS0VOKSwgcmVkZWVtIGEgcHJlLWFwcHJvdmVkXG4gICAgICBqb2luIHRva2VuIGluc3RlYWQgb2Ygd2FpdGluZyBmb3IgYW4gYWRtaW4gXHUyMDE0IHNraXBzIHRoZSBwYWlyLWNvZGVcbiAgICAgIHN0ZXAgZW50aXJlbHkuXG5cbiAgYnZnLWRlYW1vbiBkYWVtb25cbiAgICAgIGtlZXAgYW4gYXV0aGVudGljYXRlZCBXZWJTb2NrZXQgb3Blbi4gUHJpbnRzIGluY29taW5nIGVudmVsb3Blcy5cbiAgICAgIFR5cGUgXCJyZXBseSA8dGV4dD5cIiBpbiBzdGRpbiB0byByZXBseSB0byB0aGUgbGFzdCBzZW5kZXIuXG5cbiAgYnZnLWRlYW1vbiBjbGllbnRzIFstLW9ubGluZV1cbiAgICAgIGxpc3QgbWVtYmVycyBvZiB0aGUgam9pbmVkIHRyYW5zcG9ydC5cblxuICBidmctZGVhbW9uIHNlbmQgPHRhcmdldC1pZGVudGlmaWVyfCo+IDx0ZXh0PlxuICAgICAgc2VuZCBhIGRpcmVjdCBtZXNzYWdlIHRvIG9uZSBjbGllbnQgb24gdGhlIGpvaW5lZCB0cmFuc3BvcnQsIG9yIFwiKlwiIHRvIGJyb2FkY2FzdC5cblxuICBidmctZGVhbW9uIHVucGFpclxuICAgICAgd2lwZSBsb2NhbCBjcmVkZW50aWFscyAoc2VydmVyLXNpZGUgcmV2b2tlIHZpYSBidmdlZXJ0IGFkbWluKS5cblxuQ3JlZGVudGlhbHMgYXJlIHN0b3JlZCBhdCAkQlZHX0RFQU1PTl9DUkVERU5USUFMUyBvciB+Ly5jb25maWcvYnZnLWRlYW1vbi9jcmVkZW50aWFscy5qc29uIChtb2RlIDA2MDApLlxuYCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRmxhZyhhcmdzOiBzdHJpbmdbXSwgbmFtZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgaWR4ID0gYXJncy5pbmRleE9mKGAtLSR7bmFtZX1gKTtcbiAgaWYgKGlkeCA9PT0gLTEpIHJldHVybiB1bmRlZmluZWQ7XG4gIHJldHVybiBhcmdzW2lkeCArIDFdO1xufVxuXG50eXBlIFBhaXJpbmdDb2RlTXNnID0geyB0eXBlOiBcInBhaXJpbmcuY29kZVwiOyBjb2RlOiBzdHJpbmc7IGV4cGlyZXNfYXQ6IHN0cmluZzsgYWRtaW5fdXJsPzogc3RyaW5nIH07XG50eXBlIFBhaXJpbmdBcHByb3ZlZE1zZyA9IHsgdHlwZTogXCJwYWlyaW5nLmFwcHJvdmVkXCI7IGNsaWVudF9pZDogc3RyaW5nOyByZWdpc3RyYXRpb25fdG9rZW46IHN0cmluZzsgdXJsOiBzdHJpbmc7IGV4cGlyZXNfYXQ6IHN0cmluZyB9O1xudHlwZSBQYWlyaW5nRGVuaWVkTXNnID0geyB0eXBlOiBcInBhaXJpbmcuZGVuaWVkXCIgfTtcbnR5cGUgVG9rZW5SZWZyZXNoTXNnID0geyB0eXBlOiBcInRva2VuLnJlZnJlc2hcIjsgdXJsOiBzdHJpbmc7IGV4cGlyZXNfYXQ6IHN0cmluZyB9O1xudHlwZSBTeXN0ZW1Nc2cgPSBQYWlyaW5nQ29kZU1zZyB8IFBhaXJpbmdBcHByb3ZlZE1zZyB8IFBhaXJpbmdEZW5pZWRNc2cgfCBUb2tlblJlZnJlc2hNc2c7XG5cbmZ1bmN0aW9uIGFzU3lzdGVtTXNnKGRhdGE6IHVua25vd24pOiBTeXN0ZW1Nc2cgfCBudWxsIHtcbiAgaWYgKCFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSBcIm9iamVjdFwiKSByZXR1cm4gbnVsbDtcbiAgY29uc3Qgb2JqID0gZGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgaWYgKHR5cGVvZiBvYmoudHlwZSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIG51bGw7XG4gIHJldHVybiBvYmogYXMgU3lzdGVtTXNnO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjbWRKb2luKGFyZ3M6IHN0cmluZ1tdKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgY29uc3QgaG9zdCA9IHBhcnNlRmxhZyhhcmdzLCBcImhvc3RcIikgPz8gcHJvY2Vzcy5lbnYuQlZHX0JWR0VFUlRfSE9TVDtcbiAgY29uc3QgdG9rZW5GbGFnID0gcGFyc2VGbGFnKGFyZ3MsIFwidG9rZW5cIik7XG4gIGNvbnN0IHRva2VuID0gdG9rZW5GbGFnID8/IHByb2Nlc3MuZW52LkJWR19KT0lOX1RPS0VOID8/IHVuZGVmaW5lZDtcbiAgY29uc3QgdHJhbnNwb3J0ID0gcGFyc2VGbGFnKGFyZ3MsIFwidHJhbnNwb3J0XCIpID8/IHByb2Nlc3MuZW52LkJWR19UUkFOU1BPUlQ7XG5cbiAgLy8gRGlyZWN0LW1vZGU6IGJ2Z2VlcnQgZGlyZWN0IGJlcmVpa2JhYXIgdmlhIEhUVFBTLlxuICBpZiAoaG9zdCAmJiB0b2tlbikge1xuICAgIHJldHVybiBhd2FpdCBqb2luRGlyZWN0KGhvc3QsIHRva2VuLCB0cmFuc3BvcnQpO1xuICB9XG5cbiAgY29uc3QgaHViID0gcGFyc2VGbGFnKGFyZ3MsIFwiaHViXCIpID8/IHByb2Nlc3MuZW52LkJWR19BWlVSRV9IVUI7XG4gIGlmICghaHViIHx8ICF0cmFuc3BvcnQpIHtcbiAgICBjb25zb2xlLmVycm9yKHBjLnJlZChcInVzYWdlOiBidmctZGVhbW9uIGpvaW4gLS1ob3N0IDxidmdlZXJ0LWhvc3Q+IC0tdG9rZW4gPGp0X3h4eD4gICAgIChkaXJlY3RlIHJvdXRlKVwiKSk7XG4gICAgY29uc29sZS5lcnJvcihwYy5yZWQoXCIgICAgICAgYnZnLWRlYW1vbiBqb2luIC0taHViIDx3c3MtdXJsPiAtLXRyYW5zcG9ydCA8aWQ+IFstLXRva2VuIDxqdF94eHg+XSAgIChBenVyZS1yb3V0ZSlcIikpO1xuICAgIHJldHVybiAyO1xuICB9XG4gIGNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuQlZHX0RFQlVHID09PSBcIjFcIjtcbiAgY29uc3QgZGJnID0gKC4uLmE6IHVua25vd25bXSkgPT4geyBpZiAoZGVidWcpIGNvbnNvbGUuZXJyb3IocGMuZGltKFwiW2RlYnVnXVwiKSwgLi4uYSBhcyBzdHJpbmdbXSk7IH07XG5cbiAgY29uc29sZS5sb2cocGMuY3lhbih0b2tlbiA/IFwiY29ubmVjdGluZyB0byBBenVyZSAodG9rZW4gcmVkZWVtKS4uLlwiIDogXCJjb25uZWN0aW5nIHRvIEF6dXJlIGFub255bW91c2x5Li4uXCIpKTtcbiAgY29uc3QgY2xpZW50ID0gbmV3IFdlYlB1YlN1YkNsaWVudCh7IGdldENsaWVudEFjY2Vzc1VybDogYXN5bmMgKCkgPT4gaHViIH0sIHsgcHJvdG9jb2w6IFdlYlB1YlN1Ykpzb25Qcm90b2NvbCgpIH0pO1xuICBsZXQgYXBwcm92ZWQ6IFBhaXJpbmdBcHByb3ZlZE1zZyB8IG51bGwgPSBudWxsO1xuICBsZXQgZGVuaWVkID0gZmFsc2U7XG4gIGxldCB0b3BpY1JlcXVlc3RlZCA9IGZhbHNlO1xuICBsZXQgdG9rZW5SZWRlZW1lZCA9IGZhbHNlO1xuICBsZXQgY29ubmVjdGlvbklkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBjbGllbnQub24oXCJjb25uZWN0ZWRcIiwgYXN5bmMgKGUpID0+IHtcbiAgICBjb25uZWN0aW9uSWQgPSBlLmNvbm5lY3Rpb25JZDtcbiAgICBkYmcoXCJjb25uZWN0ZWRcIiwgeyBjb25uZWN0aW9uSWQ6IGUuY29ubmVjdGlvbklkLCB1c2VySWQ6IGUudXNlcklkIH0pO1xuICAgIGlmICh0b2tlbiAmJiAhdG9rZW5SZWRlZW1lZCkge1xuICAgICAgdG9rZW5SZWRlZW1lZCA9IHRydWU7XG4gICAgICBkYmcoXCJyZWRlZW1pbmcgam9pbiB0b2tlblwiKTtcbiAgICAgIGF3YWl0IGNsaWVudC5zZW5kRXZlbnQoXCJyZWRlZW1fam9pbl90b2tlblwiLCB7IHRva2VuLCB0b3BpY19pZGVudGlmaWVyOiB0cmFuc3BvcnQgfSwgXCJqc29uXCIsIHsgZmlyZUFuZEZvcmdldDogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pO1xuICBjbGllbnQub24oXCJkaXNjb25uZWN0ZWRcIiwgKGUpID0+IHtcbiAgICBkYmcoXCJkaXNjb25uZWN0ZWRcIiwgeyBtZXNzYWdlOiBlLm1lc3NhZ2UgfSk7XG4gIH0pO1xuICBjbGllbnQub24oXCJzdG9wcGVkXCIsICgpID0+IGRiZyhcInN0b3BwZWRcIikpO1xuICBjbGllbnQub24oXCJzZXJ2ZXItbWVzc2FnZVwiLCBhc3luYyAoZSkgPT4ge1xuICAgIGRiZyhcInNlcnZlci1tZXNzYWdlIHJhdzpcIiwgSlNPTi5zdHJpbmdpZnkoZS5tZXNzYWdlLmRhdGEpKTtcbiAgICBjb25zdCBtc2cgPSBhc1N5c3RlbU1zZyhlLm1lc3NhZ2UuZGF0YSk7XG4gICAgaWYgKCFtc2cpIHJldHVybjtcbiAgICBpZiAobXNnLnR5cGUgPT09IFwicGFpcmluZy5jb2RlXCIpIHtcbiAgICAgIC8vIFNraXAgdGhlIHBhaXItY29kZSBkYW5jZSBlbnRpcmVseSB3aGVuIGEgdG9rZW4gd2FzIHN1cHBsaWVkIFx1MjAxNFxuICAgICAgLy8gdGhlIHJlZGVlbV9qb2luX3Rva2VuIGV2ZW50IGlzIGFscmVhZHkgaW4gZmxpZ2h0IGZyb20gY29ubmVjdGVkLlxuICAgICAgaWYgKHRva2VuKSByZXR1cm47XG4gICAgICBjb25zb2xlLmxvZyhcIlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHBjLmJvbGQoXCJwYWlyIGNvZGU6XCIpLCBwYy5jeWFuKG1zZy5jb2RlKSk7XG4gICAgICBpZiAobXNnLmFkbWluX3VybCkgY29uc29sZS5sb2coYGFwcHJvdmUgaW4gYWRtaW46ICR7bXNnLmFkbWluX3VybH1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBleHBpcmVzOiAke21zZy5leHBpcmVzX2F0fWApO1xuICAgICAgY29uc29sZS5sb2cocGMuZGltKFwiXFxud2FpdGluZyBmb3IgYXBwcm92YWwgXHUyMDE0IEN0cmwrQyB0byBjYW5jZWxcXG5cIikpO1xuICAgICAgaWYgKCF0b3BpY1JlcXVlc3RlZCkge1xuICAgICAgICB0b3BpY1JlcXVlc3RlZCA9IHRydWU7XG4gICAgICAgIGF3YWl0IGNsaWVudC5zZW5kRXZlbnQoXCJwYWlyaW5nX3JlcXVlc3RfdG9waWNcIiwgeyB0b3BpY19pZGVudGlmaWVyOiB0cmFuc3BvcnQgfSwgXCJqc29uXCIsIHsgZmlyZUFuZEZvcmdldDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1zZy50eXBlID09PSBcInBhaXJpbmcuYXBwcm92ZWRcIikge1xuICAgICAgYXBwcm92ZWQgPSBtc2c7XG4gICAgfSBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJwYWlyaW5nLmRlbmllZFwiKSB7XG4gICAgICBkZW5pZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgYXdhaXQgY2xpZW50LnN0YXJ0KCk7XG5cbiAgY29uc3Qgc3RhcnRlZEF0ID0gRGF0ZS5ub3coKTtcbiAgd2hpbGUgKCFhcHByb3ZlZCAmJiAhZGVuaWVkICYmIERhdGUubm93KCkgLSBzdGFydGVkQXQgPCAzMCAqIDYwICogMTAwMCkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIDEwMDApKTtcbiAgfVxuICBhd2FpdCBjbGllbnQuc3RvcCgpO1xuXG4gIGlmIChkZW5pZWQpIHtcbiAgICBjb25zb2xlLmVycm9yKHBjLnJlZChcImRlbmllZCBieSBhZG1pblwiKSk7XG4gICAgcmV0dXJuIDM7XG4gIH1cbiAgaWYgKCFhcHByb3ZlZCkge1xuICAgIGNvbnNvbGUuZXJyb3IocGMucmVkKFwidGltZW91dCB3YWl0aW5nIGZvciBhcHByb3ZhbFwiKSk7XG4gICAgcmV0dXJuIDQ7XG4gIH1cblxuICBjb25zdCBwYXRoID0gc2F2ZUNyZWRlbnRpYWxzKHtcbiAgICBhenVyZV9odWJfdXJsOiBodWIsXG4gICAgY2xpZW50X2lkOiAoYXBwcm92ZWQgYXMgUGFpcmluZ0FwcHJvdmVkTXNnKS5jbGllbnRfaWQsXG4gICAgcmVnaXN0cmF0aW9uX3Rva2VuOiAoYXBwcm92ZWQgYXMgUGFpcmluZ0FwcHJvdmVkTXNnKS5yZWdpc3RyYXRpb25fdG9rZW4sXG4gICAgYWNjZXNzX3VybDogKGFwcHJvdmVkIGFzIFBhaXJpbmdBcHByb3ZlZE1zZykudXJsLFxuICAgIGFjY2Vzc191cmxfZXhwaXJlc19hdDogKGFwcHJvdmVkIGFzIFBhaXJpbmdBcHByb3ZlZE1zZykuZXhwaXJlc19hdCxcbiAgICB0b3BpY19pZGVudGlmaWVyOiB0cmFuc3BvcnQsXG4gIH0pO1xuICBjb25zb2xlLmxvZyhwYy5ncmVlbihgcGFpcmVkIGFzICR7KGFwcHJvdmVkIGFzIFBhaXJpbmdBcHByb3ZlZE1zZykuY2xpZW50X2lkfSBvbiB0cmFuc3BvcnQgJHt0cmFuc3BvcnR9YCkpO1xuICBjb25zb2xlLmxvZyhgY3JlZGVudGlhbHM6ICR7cGF0aH1gKTtcbiAgY29uc29sZS5sb2cocGMuZGltKGBib290c3RyYXAgY29ubmVjdGlvbklkIHdhcyAke2Nvbm5lY3Rpb25JZH1gKSk7XG4gIHJldHVybiAwO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjbWRVbnBhaXIoX2FyZ3M6IHN0cmluZ1tdKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgd2lwZUNyZWRlbnRpYWxzKCk7XG4gIGNvbnNvbGUubG9nKHBjLmdyZWVuKFwibG9jYWwgY3JlZGVudGlhbHMgd2lwZWRcIikpO1xuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gYXV0aGVkQ2xpZW50KGNyZWRzOiBDcmVkZW50aWFscyk6IFdlYlB1YlN1YkNsaWVudCB7XG4gIGxldCBhY2Nlc3NVcmwgPSBjcmVkcy5hY2Nlc3NfdXJsID8/IFwiXCI7XG4gIGxldCBhY2Nlc3NFeHBpcmVzQXQgPSBjcmVkcy5hY2Nlc3NfdXJsX2V4cGlyZXNfYXQgPyBEYXRlLnBhcnNlKGNyZWRzLmFjY2Vzc191cmxfZXhwaXJlc19hdCkgOiAwO1xuICBsZXQgcmVmcmVzaFJlc29sdmU6ICgodXJsOiBzdHJpbmcpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3QgYzogV2ViUHViU3ViQ2xpZW50ID0gbmV3IFdlYlB1YlN1YkNsaWVudCh7XG4gICAgZ2V0Q2xpZW50QWNjZXNzVXJsOiBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIWFjY2Vzc1VybCkgdGhyb3cgbmV3IEVycm9yKFwibm8gYWNjZXNzIHVybCBcdTIwMTQgcmUtcGFpclwiKTtcbiAgICAgIGlmIChEYXRlLm5vdygpID49IGFjY2Vzc0V4cGlyZXNBdCAtIDYwXzAwMCAmJiAhcmVmcmVzaFJlc29sdmUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB3YWl0ZXIgPSBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKSA9PiB7IHJlZnJlc2hSZXNvbHZlID0gcmVzb2x2ZTsgfSk7XG4gICAgICAgICAgYXdhaXQgYy5zZW5kRXZlbnQoXCJyZXF1ZXN0X3JlZnJlc2hfdG9rZW5cIiwge30sIFwianNvblwiLCB7IGZpcmVBbmRGb3JnZXQ6IHRydWUgfSk7XG4gICAgICAgICAgYWNjZXNzVXJsID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIHdhaXRlcixcbiAgICAgICAgICAgIG5ldyBQcm9taXNlPHN0cmluZz4oKF8sIHJlamVjdCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWplY3QobmV3IEVycm9yKFwidG9rZW4gcmVmcmVzaCB0aW1lb3V0XCIpKSwgMzBfMDAwKSksXG4gICAgICAgICAgXSk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8qIGZhbGwgYmFjayB0byBzdGFsZSBVUkwgKi9cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICByZWZyZXNoUmVzb2x2ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2Nlc3NVcmw7XG4gICAgfSxcbiAgfSwge1xuICAgIGF1dG9SZWNvbm5lY3Q6IHRydWUsXG4gICAgcmVjb25uZWN0UmV0cnlPcHRpb25zOiB7IG1heFJldHJpZXM6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCByZXRyeURlbGF5SW5NczogMV8wMDAsIG1heFJldHJ5RGVsYXlJbk1zOiAzMF8wMDAsIG1vZGU6IFwiRXhwb25lbnRpYWxcIiB9LFxuICAgIHByb3RvY29sOiBXZWJQdWJTdWJKc29uUHJvdG9jb2woKSxcbiAgfSk7XG5cbiAgYy5vbihcInNlcnZlci1tZXNzYWdlXCIsIChlKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGUubWVzc2FnZS5kYXRhIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkO1xuICAgIGlmIChkYXRhPy50eXBlID09PSBcInRva2VuLnJlZnJlc2hcIiAmJiB0eXBlb2YgZGF0YS51cmwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGFjY2Vzc1VybCA9IGRhdGEudXJsO1xuICAgICAgaWYgKHR5cGVvZiBkYXRhLmV4cGlyZXNfYXQgPT09IFwic3RyaW5nXCIpIGFjY2Vzc0V4cGlyZXNBdCA9IERhdGUucGFyc2UoZGF0YS5leHBpcmVzX2F0KTtcbiAgICAgIHJlZnJlc2hSZXNvbHZlPy4oZGF0YS51cmwpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGM7XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVDcmVkcygpOiBDcmVkZW50aWFscyB7XG4gIGNvbnN0IGNyZWRzID0gbG9hZENyZWRlbnRpYWxzKCk7XG4gIGlmICghY3JlZHMpIHtcbiAgICBjb25zb2xlLmVycm9yKHBjLnJlZChcIm5vdCBwYWlyZWQgXHUyMDE0IHJ1biBgYnZnLWRlYW1vbiBqb2luYCBmaXJzdFwiKSk7XG4gICAgcHJvY2Vzcy5leGl0KDIpO1xuICB9XG4gIHJldHVybiBjcmVkcztcbn1cblxuYXN5bmMgZnVuY3Rpb24gY21kRGFlbW9uKF9hcmdzOiBzdHJpbmdbXSk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGNvbnN0IGNyZWRzID0gcmVxdWlyZUNyZWRzKCk7XG4gIGlmIChjcmVkZW50aWFsTW9kZShjcmVkcykgPT09IFwiZGlyZWN0XCIpIHtcbiAgICByZXR1cm4gYXdhaXQgZGFlbW9uRGlyZWN0KGNyZWRzKTtcbiAgfVxuICBjb25zdCBjbGllbnQgPSBhdXRoZWRDbGllbnQoY3JlZHMpO1xuXG4gIGxldCBsYXN0U2VuZGVyOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBjbGllbnQub24oXCJjb25uZWN0ZWRcIiwgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwYy5ncmVlbihgY29ubmVjdGVkIFx1MjAxNCBjb25uZWN0aW9uSWQ9JHtlLmNvbm5lY3Rpb25JZH0gdXNlcklkPSR7ZS51c2VySWR9YCkpO1xuICAgIGNvbnNvbGUubG9nKHBjLmRpbShgdHJhbnNwb3J0OiAke2NyZWRzLnRvcGljX2lkZW50aWZpZXIgPz8gXCIodW5rbm93bilcIn1gKSk7XG4gICAgY29uc29sZS5sb2cocGMuZGltKFwidHlwZSAncmVwbHkgPHRleHQ+JyB0byByZXBseSB0byBsYXN0IHNlbmRlciwgJ2hlbHAnIGZvciBjb21tYW5kc1wiKSk7XG4gIH0pO1xuICBjbGllbnQub24oXCJkaXNjb25uZWN0ZWRcIiwgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwYy55ZWxsb3coYGRpc2Nvbm5lY3RlZCBcdTIwMTQgJHtlLm1lc3NhZ2UgPz8gXCJcIn1gKSk7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUVudmVsb3BlID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIGlmIChkYXRhPy50eXBlID09PSBcInRva2VuLnJlZnJlc2hcIikgcmV0dXJuO1xuICAgIGNvbnN0IHNlbmRlciA9IGRhdGE/LnNlbmRlcl9pZGVudGlmaWVyID8/IFwiKHVua25vd24pXCI7XG4gICAgY29uc3QgdGFyZ2V0ID0gZGF0YT8udGFyZ2V0X2lkZW50aWZpZXI7XG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgIT09IGNyZWRzLmNsaWVudF9pZCkgcmV0dXJuOyAvLyBmaWx0ZXIgb3V0IHRhcmdldGVkLW5vdC1mb3ItbWVcbiAgICBjb25zdCBwYXlsb2FkID0gdHlwZW9mIGRhdGE/LnBheWxvYWQgPT09IFwic3RyaW5nXCIgPyBkYXRhLnBheWxvYWQgOiBKU09OLnN0cmluZ2lmeShkYXRhPy5wYXlsb2FkKTtcbiAgICBjb25zb2xlLmxvZyhgJHtwYy5jeWFuKFwiW1wiICsgc2VuZGVyICsgXCJdXCIpfSAke2RhdGE/Lm1lc3NhZ2VfdHlwZSA/PyBcIlwifTogJHtwYXlsb2FkfWApO1xuICAgIGxhc3RTZW5kZXIgPSBzZW5kZXI7XG4gIH07XG5cbiAgY2xpZW50Lm9uKFwic2VydmVyLW1lc3NhZ2VcIiwgKGUpID0+IGhhbmRsZUVudmVsb3BlKGUubWVzc2FnZS5kYXRhKSk7XG4gIGNsaWVudC5vbihcImdyb3VwLW1lc3NhZ2VcIiwgKGUpID0+IGhhbmRsZUVudmVsb3BlKGUubWVzc2FnZS5kYXRhKSk7XG5cbiAgYXdhaXQgY2xpZW50LnN0YXJ0KCk7XG5cbiAgY29uc3QgcmwgPSByZWFkbGluZS5jcmVhdGVJbnRlcmZhY2UoeyBpbnB1dDogcHJvY2Vzcy5zdGRpbiwgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dCwgdGVybWluYWw6IGZhbHNlIH0pO1xuICBybC5vbihcImxpbmVcIiwgYXN5bmMgKHJhdykgPT4ge1xuICAgIGNvbnN0IGxpbmUgPSByYXcudHJpbSgpO1xuICAgIGlmICghbGluZSkgcmV0dXJuO1xuICAgIGlmIChsaW5lID09PSBcImhlbHBcIikge1xuICAgICAgY29uc29sZS5sb2cocGMuZGltKFwiY29tbWFuZHM6IHJlcGx5IDx0ZXh0PiB8IHNlbmQgPGlkZW50aWZpZXI+IDx0ZXh0PiB8IGNsaWVudHMgfCBxdWl0XCIpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGxpbmUgPT09IFwicXVpdFwiKSB7XG4gICAgICBhd2FpdCBjbGllbnQuc3RvcCgpO1xuICAgICAgcHJvY2Vzcy5leGl0KDApO1xuICAgIH1cbiAgICBpZiAobGluZSA9PT0gXCJjbGllbnRzXCIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGxpc3RDbGllbnRzKGNyZWRzLCBmYWxzZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihwYy5yZWQoZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFN0cmluZyhlcnIpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlcGx5TWF0Y2ggPSBsaW5lLm1hdGNoKC9ecmVwbHlcXHMrKC4rKSQvKTtcbiAgICBpZiAocmVwbHlNYXRjaCkge1xuICAgICAgaWYgKCFsYXN0U2VuZGVyKSB7IGNvbnNvbGUubG9nKHBjLnllbGxvdyhcIm5vIGxhc3Qgc2VuZGVyIHRvIHJlcGx5IHRvXCIpKTsgcmV0dXJuOyB9XG4gICAgICBhd2FpdCBwdWJsaXNoKGNsaWVudCwgY3JlZHMsIGxhc3RTZW5kZXIsIHJlcGx5TWF0Y2hbMV0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZW5kTWF0Y2ggPSBsaW5lLm1hdGNoKC9ec2VuZFxccysoXFxTKylcXHMrKC4rKSQvKTtcbiAgICBpZiAoc2VuZE1hdGNoKSB7XG4gICAgICBhd2FpdCBwdWJsaXNoKGNsaWVudCwgY3JlZHMsIHNlbmRNYXRjaFsxXSwgc2VuZE1hdGNoWzJdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocGMueWVsbG93KFwidW5rbm93biBjb21tYW5kIFx1MjAxNCB0cnkgJ2hlbHAnXCIpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlPG51bWJlcj4oKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBzaHV0ZG93biA9IGFzeW5jIChzaWc6IHN0cmluZykgPT4ge1xuICAgICAgY29uc29sZS5sb2cocGMuZGltKGBcXG4ke3NpZ30sIHN0b3BwaW5nYCkpO1xuICAgICAgdHJ5IHsgYXdhaXQgY2xpZW50LnN0b3AoKTsgfSBjYXRjaCB7IC8qICovIH1cbiAgICAgIHJlc29sdmUoMCk7XG4gICAgfTtcbiAgICBwcm9jZXNzLm9uKFwiU0lHSU5UXCIsICgpID0+IHNodXRkb3duKFwiU0lHSU5UXCIpKTtcbiAgICBwcm9jZXNzLm9uKFwiU0lHVEVSTVwiLCAoKSA9PiBzaHV0ZG93bihcIlNJR1RFUk1cIikpO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHVibGlzaChjbGllbnQ6IFdlYlB1YlN1YkNsaWVudCwgY3JlZHM6IENyZWRlbnRpYWxzLCB0YXJnZXRJZGVudGlmaWVyOiBzdHJpbmcsIHRleHQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB0YXJnZXQgPSB0YXJnZXRJZGVudGlmaWVyID09PSBcIipcIiA/IG51bGwgOiB0YXJnZXRJZGVudGlmaWVyO1xuICBhd2FpdCBjbGllbnQuc2VuZEV2ZW50KFwicHVibGlzaFwiLCB7XG4gICAgdG9waWNfaWRlbnRpZmllcjogY3JlZHMudG9waWNfaWRlbnRpZmllcixcbiAgICBtZXNzYWdlX3R5cGU6IFwiY2hhdC50ZXh0XCIsXG4gICAgcGF5bG9hZDogdGV4dCxcbiAgICB0YXJnZXRfaWRlbnRpZmllcjogdGFyZ2V0LFxuICB9LCBcImpzb25cIiwgeyBmaXJlQW5kRm9yZ2V0OiB0cnVlIH0pO1xuICBjb25zb2xlLmxvZyhwYy5ncmVlbihgc2VudCB0byAke3RhcmdldElkZW50aWZpZXJ9OiAke3RleHR9YCkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjbWRDbGllbnRzKGFyZ3M6IHN0cmluZ1tdKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgY29uc3QgY3JlZHMgPSByZXF1aXJlQ3JlZHMoKTtcbiAgYXdhaXQgbGlzdENsaWVudHMoY3JlZHMsIGFyZ3MuaW5jbHVkZXMoXCItLW9ubGluZVwiKSk7XG4gIHJldHVybiAwO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsaXN0Q2xpZW50cyhjcmVkczogQ3JlZGVudGlhbHMsIG9ubGluZU9ubHk6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKCFjcmVkcy50b3BpY19pZGVudGlmaWVyKSB0aHJvdyBuZXcgRXJyb3IoXCJubyB0cmFuc3BvcnQgYXNzb2NpYXRlZCB3aXRoIGNyZWRlbnRpYWxzXCIpO1xuXG4gIGNvbnN0IGNsaWVudCA9IGF1dGhlZENsaWVudChjcmVkcyk7XG4gIGxldCByZXN1bHQ6IHsgY2xpZW50czogQXJyYXk8eyBpZGVudGlmaWVyOiBzdHJpbmc7IG5hbWU/OiBzdHJpbmc7IGtpbmQ6IHN0cmluZzsgb25saW5lOiBib29sZWFuIH0+IH0gfCBudWxsID0gbnVsbDtcbiAgY2xpZW50Lm9uKFwic2VydmVyLW1lc3NhZ2VcIiwgKGUpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZS5tZXNzYWdlLmRhdGEgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQ7XG4gICAgaWYgKGRhdGE/LnR5cGUgPT09IFwiY2xpZW50cy5saXN0X3Jlc3VsdFwiKSB7XG4gICAgICByZXN1bHQgPSBkYXRhIGFzIGFueTtcbiAgICB9XG4gIH0pO1xuICBhd2FpdCBjbGllbnQuc3RhcnQoKTtcbiAgYXdhaXQgY2xpZW50LnNlbmRFdmVudChcImNsaWVudHNfbGlzdFwiLCB7IHRvcGljX2lkZW50aWZpZXI6IGNyZWRzLnRvcGljX2lkZW50aWZpZXIgfSwgXCJqc29uXCIsIHsgZmlyZUFuZEZvcmdldDogdHJ1ZSB9KTtcbiAgY29uc3Qgc3RhcnRlZEF0ID0gRGF0ZS5ub3coKTtcbiAgd2hpbGUgKCFyZXN1bHQgJiYgRGF0ZS5ub3coKSAtIHN0YXJ0ZWRBdCA8IDEwXzAwMCkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIDEwMCkpO1xuICB9XG4gIGF3YWl0IGNsaWVudC5zdG9wKCk7XG4gIGlmICghcmVzdWx0KSB0aHJvdyBuZXcgRXJyb3IoXCJ0aW1lb3V0IHdhaXRpbmcgZm9yIGNsaWVudHMgbGlzdFwiKTtcblxuICBjb25zdCBlbnRyaWVzID0gb25saW5lT25seSA/IHJlc3VsdC5jbGllbnRzLmZpbHRlcigoYykgPT4gYy5vbmxpbmUpIDogcmVzdWx0LmNsaWVudHM7XG4gIGZvciAoY29uc3QgYyBvZiBlbnRyaWVzKSB7XG4gICAgY29uc3QgZG90ID0gYy5vbmxpbmUgPyBwYy5ncmVlbihcIlx1MjVDRlwiKSA6IHBjLmRpbShcIlx1MjVDQlwiKTtcbiAgICBjb25zb2xlLmxvZyhgJHtkb3R9ICR7Yy5pZGVudGlmaWVyfSR7Yy5uYW1lID8gYCAoJHtjLm5hbWV9KWAgOiBcIlwifSBcdTIwMTQgJHtjLmtpbmR9YCk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gY21kU2VuZChhcmdzOiBzdHJpbmdbXSk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGNvbnN0IGNyZWRzID0gcmVxdWlyZUNyZWRzKCk7XG4gIGNvbnN0IFt0YXJnZXQsIC4uLnJlc3RdID0gYXJncztcbiAgaWYgKCF0YXJnZXQgfHwgcmVzdC5sZW5ndGggPT09IDApIHtcbiAgICBjb25zb2xlLmVycm9yKHBjLnJlZChcInVzYWdlOiBidmctZGVhbW9uIHNlbmQgPHRhcmdldC1pZGVudGlmaWVyfCo+IDx0ZXh0PlwiKSk7XG4gICAgcmV0dXJuIDI7XG4gIH1cbiAgY29uc3QgdGV4dCA9IHJlc3Quam9pbihcIiBcIik7XG4gIGNvbnN0IGNsaWVudCA9IGF1dGhlZENsaWVudChjcmVkcyk7XG4gIGF3YWl0IGNsaWVudC5zdGFydCgpO1xuICBhd2FpdCBwdWJsaXNoKGNsaWVudCwgY3JlZHMsIHRhcmdldCwgdGV4dCk7XG4gIGF3YWl0IGNsaWVudC5zdG9wKCk7XG4gIHJldHVybiAwO1xufVxuXG5tYWluKCkudGhlbigoY29kZSkgPT4gcHJvY2Vzcy5leGl0KGNvZGUpKTtcbiIsICIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW50ZXJmYWNlIFdpbmRvdyB7XG4gIGRvY3VtZW50OiB1bmtub3duO1xufVxuXG5pbnRlcmZhY2UgRGVkaWNhdGVkV29ya2VyR2xvYmFsU2NvcGUge1xuICBjb25zdHJ1Y3Rvcjoge1xuICAgIG5hbWU6IHN0cmluZztcbiAgfTtcblxuICBpbXBvcnRTY3JpcHRzOiAoLi4ucGF0aHM6IHN0cmluZ1tdKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgTmF2aWdhdG9yIHtcbiAgcHJvZHVjdDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRGVub0dsb2JhbCB7XG4gIHZlcnNpb246IHtcbiAgICBkZW5vOiBzdHJpbmc7XG4gIH07XG59XG5cbmludGVyZmFjZSBCdW5HbG9iYWwge1xuICB2ZXJzaW9uOiBzdHJpbmc7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYXp1cmUvYXp1cmUtc2RrL3RzLW5vLXdpbmRvd1xuZGVjbGFyZSBjb25zdCB3aW5kb3c6IFdpbmRvdztcbmRlY2xhcmUgY29uc3Qgc2VsZjogRGVkaWNhdGVkV29ya2VyR2xvYmFsU2NvcGU7XG5kZWNsYXJlIGNvbnN0IERlbm86IERlbm9HbG9iYWw7XG5kZWNsYXJlIGNvbnN0IEJ1bjogQnVuR2xvYmFsO1xuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IE5hdmlnYXRvcjtcblxuLyoqXG4gKiBBIGNvbnN0YW50IHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVudmlyb25tZW50IHRoZSBjb2RlIGlzIHJ1bm5pbmcgaXMgYSBXZWIgQnJvd3Nlci5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhenVyZS9henVyZS1zZGsvdHMtbm8td2luZG93XG5leHBvcnQgY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiO1xuXG4vKipcbiAqIEEgY29uc3RhbnQgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZW52aXJvbm1lbnQgdGhlIGNvZGUgaXMgcnVubmluZyBpcyBhIFdlYiBXb3JrZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBpc1dlYldvcmtlciA9XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmXG4gIHR5cGVvZiBzZWxmPy5pbXBvcnRTY3JpcHRzID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgKHNlbGYuY29uc3RydWN0b3I/Lm5hbWUgPT09IFwiRGVkaWNhdGVkV29ya2VyR2xvYmFsU2NvcGVcIiB8fFxuICAgIHNlbGYuY29uc3RydWN0b3I/Lm5hbWUgPT09IFwiU2VydmljZVdvcmtlckdsb2JhbFNjb3BlXCIgfHxcbiAgICBzZWxmLmNvbnN0cnVjdG9yPy5uYW1lID09PSBcIlNoYXJlZFdvcmtlckdsb2JhbFNjb3BlXCIpO1xuXG4vKipcbiAqIEEgY29uc3RhbnQgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZW52aXJvbm1lbnQgdGhlIGNvZGUgaXMgcnVubmluZyBpcyBEZW5vLlxuICovXG5leHBvcnQgY29uc3QgaXNEZW5vID1cbiAgdHlwZW9mIERlbm8gIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgdHlwZW9mIERlbm8udmVyc2lvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICB0eXBlb2YgRGVuby52ZXJzaW9uLmRlbm8gIT09IFwidW5kZWZpbmVkXCI7XG5cbi8qKlxuICogQSBjb25zdGFudCB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBlbnZpcm9ubWVudCB0aGUgY29kZSBpcyBydW5uaW5nIGlzIEJ1bi5zaC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzQnVuID0gdHlwZW9mIEJ1biAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgQnVuLnZlcnNpb24gIT09IFwidW5kZWZpbmVkXCI7XG5cbi8qKlxuICogQSBjb25zdGFudCB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBlbnZpcm9ubWVudCB0aGUgY29kZSBpcyBydW5uaW5nIGlzIGEgTm9kZS5qcyBjb21wYXRpYmxlIGVudmlyb25tZW50LlxuICovXG5leHBvcnQgY29uc3QgaXNOb2RlTGlrZSA9XG4gIHR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgQm9vbGVhbihnbG9iYWxUaGlzLnByb2Nlc3MudmVyc2lvbikgJiZcbiAgQm9vbGVhbihnbG9iYWxUaGlzLnByb2Nlc3MudmVyc2lvbnM/Lm5vZGUpO1xuXG4vKipcbiAqIEEgY29uc3RhbnQgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZW52aXJvbm1lbnQgdGhlIGNvZGUgaXMgcnVubmluZyBpcyBOb2RlLkpTLlxuICovXG5leHBvcnQgY29uc3QgaXNOb2RlUnVudGltZSA9IGlzTm9kZUxpa2UgJiYgIWlzQnVuICYmICFpc0Rlbm87XG5cbi8qKlxuICogQSBjb25zdGFudCB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBlbnZpcm9ubWVudCB0aGUgY29kZSBpcyBydW5uaW5nIGlzIGluIFJlYWN0LU5hdGl2ZS5cbiAqL1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9ibG9iL21haW4vcGFja2FnZXMvcmVhY3QtbmF0aXZlL0xpYnJhcmllcy9Db3JlL3NldFVwTmF2aWdhdG9yLmpzXG5leHBvcnQgY29uc3QgaXNSZWFjdE5hdGl2ZSA9XG4gIHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgbmF2aWdhdG9yPy5wcm9kdWN0ID09PSBcIlJlYWN0TmF0aXZlXCI7XG4iLCAiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbi8qKlxuICogVGhpcyBlcnJvciBpcyB0aHJvd24gd2hlbiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uIGhhcyBiZWVuIGFib3J0ZWQuXG4gKiBDaGVjayBmb3IgdGhpcyBlcnJvciBieSB0ZXN0aW5nIHRoZSBgbmFtZWAgdGhhdCB0aGUgbmFtZSBwcm9wZXJ0eSBvZiB0aGVcbiAqIGVycm9yIG1hdGNoZXMgYFwiQWJvcnRFcnJvclwiYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgdHNcbiAqIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gKiBjb250cm9sbGVyLmFib3J0KCk7XG4gKiB0cnkge1xuICogICBkb0FzeW5jV29yayhjb250cm9sbGVyLnNpZ25hbClcbiAqIH0gY2F0Y2ggKGUpIHtcbiAqICAgaWYgKGUubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG4gKiAgICAgLy8gaGFuZGxlIGFib3J0IGVycm9yIGhlcmUuXG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgQWJvcnRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9IFwiQWJvcnRFcnJvclwiO1xuICB9XG59XG4iLCAiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IEFib3J0RXJyb3IgfSBmcm9tIFwiQGF6dXJlL2Fib3J0LWNvbnRyb2xsZXJcIjtcbmltcG9ydCB0eXBlIHsgQWJvcnRPcHRpb25zIH0gZnJvbSBcIi4vYWJvcnRlclV0aWxzLmpzXCI7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgdGhlIGNyZWF0ZUFib3J0YWJsZVByb21pc2UgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlQWJvcnRhYmxlUHJvbWlzZU9wdGlvbnMgZXh0ZW5kcyBBYm9ydE9wdGlvbnMge1xuICAvKiogQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgaWYgdGhlIHByb21pc2Ugd2FzIGFib3J0ZWQgKi9cbiAgY2xlYW51cEJlZm9yZUFib3J0PzogKCkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFib3J0YWJsZSBwcm9taXNlLlxuICogQHBhcmFtIGJ1aWxkUHJvbWlzZSAtIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVzb2x2ZSBhbmQgcmVqZWN0IGZ1bmN0aW9ucyBhcyBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBmb3IgdGhlIGFib3J0YWJsZSBwcm9taXNlLlxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgY2FuIGJlIGFib3J0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBYm9ydGFibGVQcm9taXNlPFQ+KFxuICBidWlsZFByb21pc2U6IChcbiAgICByZXNvbHZlOiAodmFsdWU6IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZCxcbiAgICByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQsXG4gICkgPT4gdm9pZCxcbiAgb3B0aW9ucz86IENyZWF0ZUFib3J0YWJsZVByb21pc2VPcHRpb25zLFxuKTogUHJvbWlzZTxUPiB7XG4gIGNvbnN0IHsgY2xlYW51cEJlZm9yZUFib3J0LCBhYm9ydFNpZ25hbCwgYWJvcnRFcnJvck1zZyB9ID0gb3B0aW9ucyA/PyB7fTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmdW5jdGlvbiByZWplY3RPbkFib3J0KCk6IHZvaWQge1xuICAgICAgcmVqZWN0KG5ldyBBYm9ydEVycm9yKGFib3J0RXJyb3JNc2cgPz8gXCJUaGUgb3BlcmF0aW9uIHdhcyBhYm9ydGVkLlwiKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpOiB2b2lkIHtcbiAgICAgIGFib3J0U2lnbmFsPy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQWJvcnQoKTogdm9pZCB7XG4gICAgICBjbGVhbnVwQmVmb3JlQWJvcnQ/LigpO1xuICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICByZWplY3RPbkFib3J0KCk7XG4gICAgfVxuICAgIGlmIChhYm9ydFNpZ25hbD8uYWJvcnRlZCkge1xuICAgICAgcmV0dXJuIHJlamVjdE9uQWJvcnQoKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGJ1aWxkUHJvbWlzZShcbiAgICAgICAgKHgpID0+IHtcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgICAgICByZXNvbHZlKHgpO1xuICAgICAgICB9LFxuICAgICAgICAoeCkgPT4ge1xuICAgICAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgICAgIHJlamVjdCh4KTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG4gICAgYWJvcnRTaWduYWw/LmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgfSk7XG59XG4iLCAiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB0eXBlIHsgQWJvcnRPcHRpb25zIH0gZnJvbSBcIi4vYWJvcnRlclV0aWxzLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVBYm9ydGFibGVQcm9taXNlIH0gZnJvbSBcIi4vY3JlYXRlQWJvcnRhYmxlUHJvbWlzZS5qc1wiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tSW50ZWdlckluY2x1c2l2ZSB9IGZyb20gXCJAdHlwZXNwZWMvdHMtaHR0cC1ydW50aW1lL2ludGVybmFsL3V0aWxcIjtcblxuY29uc3QgU3RhbmRhcmRBYm9ydE1lc3NhZ2UgPSBcIlRoZSBkZWxheSB3YXMgYWJvcnRlZC5cIjtcblxuLyoqXG4gKiBPcHRpb25zIGZvciBzdXBwb3J0IGFib3J0IGZ1bmN0aW9uYWxpdHkgZm9yIHRoZSBkZWxheSBtZXRob2RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEZWxheU9wdGlvbnMgZXh0ZW5kcyBBYm9ydE9wdGlvbnMge31cblxuLyoqXG4gKiBBIHdyYXBwZXIgZm9yIHNldFRpbWVvdXQgdGhhdCByZXNvbHZlcyBhIHByb21pc2UgYWZ0ZXIgdGltZUluTXMgbWlsbGlzZWNvbmRzLlxuICogQHBhcmFtIHRpbWVJbk1zIC0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gYmUgZGVsYXllZC5cbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgZm9yIGRlbGF5IC0gY3VycmVudGx5IGFib3J0IG9wdGlvbnNcbiAqIEByZXR1cm5zIFByb21pc2UgdGhhdCBpcyByZXNvbHZlZCBhZnRlciB0aW1lSW5Nc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsYXkodGltZUluTXM6IG51bWJlciwgb3B0aW9ucz86IERlbGF5T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICBsZXQgdG9rZW46IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+O1xuICBjb25zdCB7IGFib3J0U2lnbmFsLCBhYm9ydEVycm9yTXNnIH0gPSBvcHRpb25zID8/IHt9O1xuICByZXR1cm4gY3JlYXRlQWJvcnRhYmxlUHJvbWlzZShcbiAgICAocmVzb2x2ZSkgPT4ge1xuICAgICAgdG9rZW4gPSBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWVJbk1zKTtcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsZWFudXBCZWZvcmVBYm9ydDogKCkgPT4gY2xlYXJUaW1lb3V0KHRva2VuKSxcbiAgICAgIGFib3J0U2lnbmFsLFxuICAgICAgYWJvcnRFcnJvck1zZzogYWJvcnRFcnJvck1zZyA/PyBTdGFuZGFyZEFib3J0TWVzc2FnZSxcbiAgICB9LFxuICApO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRlbGF5IGludGVydmFsIGZvciByZXRyeSBhdHRlbXB0cyB1c2luZyBleHBvbmVudGlhbCBkZWxheSB3aXRoIGppdHRlci5cbiAqIEBwYXJhbSByZXRyeUF0dGVtcHQgLSBUaGUgY3VycmVudCByZXRyeSBhdHRlbXB0IG51bWJlci5cbiAqIEBwYXJhbSBjb25maWcgLSBUaGUgZXhwb25lbnRpYWwgcmV0cnkgY29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBjYWxjdWxhdGVkIHJldHJ5IGRlbGF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlUmV0cnlEZWxheShcbiAgcmV0cnlBdHRlbXB0OiBudW1iZXIsXG4gIGNvbmZpZzoge1xuICAgIHJldHJ5RGVsYXlJbk1zOiBudW1iZXI7XG4gICAgbWF4UmV0cnlEZWxheUluTXM6IG51bWJlcjtcbiAgfSxcbik6IHsgcmV0cnlBZnRlckluTXM6IG51bWJlciB9IHtcbiAgLy8gRXhwb25lbnRpYWxseSBpbmNyZWFzZSB0aGUgZGVsYXkgZWFjaCB0aW1lXG4gIGNvbnN0IGV4cG9uZW50aWFsRGVsYXkgPSBjb25maWcucmV0cnlEZWxheUluTXMgKiBNYXRoLnBvdygyLCByZXRyeUF0dGVtcHQpO1xuXG4gIC8vIERvbid0IGxldCB0aGUgZGVsYXkgZXhjZWVkIHRoZSBtYXhpbXVtXG4gIGNvbnN0IGNsYW1wZWREZWxheSA9IE1hdGgubWluKGNvbmZpZy5tYXhSZXRyeURlbGF5SW5NcywgZXhwb25lbnRpYWxEZWxheSk7XG5cbiAgLy8gQWxsb3cgdGhlIGZpbmFsIHZhbHVlIHRvIGhhdmUgc29tZSBcImppdHRlclwiICh3aXRoaW4gNTAlIG9mIHRoZSBkZWxheSBzaXplKSBzb1xuICAvLyB0aGF0IHJldHJpZXMgYWNyb3NzIG11bHRpcGxlIGNsaWVudHMgZG9uJ3Qgb2NjdXIgc2ltdWx0YW5lb3VzbHkuXG4gIGNvbnN0IHJldHJ5QWZ0ZXJJbk1zID0gY2xhbXBlZERlbGF5IC8gMiArIGdldFJhbmRvbUludGVnZXJJbmNsdXNpdmUoMCwgY2xhbXBlZERlbGF5IC8gMik7XG5cbiAgcmV0dXJuIHsgcmV0cnlBZnRlckluTXMgfTtcbn1cbiIsICJpbXBvcnQgeyBkZWxheSB9IGZyb20gXCJAYXp1cmUvY29yZS11dGlsXCI7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCJldmVudHNcIjtcbmltcG9ydCB7IEludm9jYXRpb25FcnJvciwgU2VuZE1lc3NhZ2VFcnJvciB9IGZyb20gXCIuL2Vycm9ycy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4vbG9nZ2VyLmpzXCI7XG5pbXBvcnQgeyBXZWJQdWJTdWJKc29uUmVsaWFibGVQcm90b2NvbCB9IGZyb20gXCIuL3Byb3RvY29scy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgV2ViU29ja2V0Q2xpZW50RmFjdG9yeSB9IGZyb20gXCIuL3dlYnNvY2tldC93ZWJzb2NrZXRDbGllbnQuanNcIjtcbmltcG9ydCB7IEFja01hbmFnZXIgfSBmcm9tIFwiLi9hY2tNYW5hZ2VyLmpzXCI7XG5pbXBvcnQgeyBJbnZvY2F0aW9uTWFuYWdlciB9IGZyb20gXCIuL2ludm9jYXRpb25NYW5hZ2VyLmpzXCI7XG52YXIgV2ViUHViU3ViQ2xpZW50U3RhdGUgPSAvKiBAX19QVVJFX18gKi8gKChXZWJQdWJTdWJDbGllbnRTdGF0ZTIpID0+IHtcbiAgV2ViUHViU3ViQ2xpZW50U3RhdGUyW1wiU3RvcHBlZFwiXSA9IFwiU3RvcHBlZFwiO1xuICBXZWJQdWJTdWJDbGllbnRTdGF0ZTJbXCJEaXNjb25uZWN0ZWRcIl0gPSBcIkRpc2Nvbm5lY3RlZFwiO1xuICBXZWJQdWJTdWJDbGllbnRTdGF0ZTJbXCJDb25uZWN0aW5nXCJdID0gXCJDb25uZWN0aW5nXCI7XG4gIFdlYlB1YlN1YkNsaWVudFN0YXRlMltcIkNvbm5lY3RlZFwiXSA9IFwiQ29ubmVjdGVkXCI7XG4gIFdlYlB1YlN1YkNsaWVudFN0YXRlMltcIlJlY292ZXJpbmdcIl0gPSBcIlJlY292ZXJpbmdcIjtcbiAgcmV0dXJuIFdlYlB1YlN1YkNsaWVudFN0YXRlMjtcbn0pKFdlYlB1YlN1YkNsaWVudFN0YXRlIHx8IHt9KTtcbmNsYXNzIFdlYlB1YlN1YkNsaWVudCB7XG4gIF9wcm90b2NvbDtcbiAgX2NyZWRlbnRpYWw7XG4gIF9vcHRpb25zO1xuICBfZ3JvdXBNYXA7XG4gIF9hY2tNYW5hZ2VyO1xuICBfaW52b2NhdGlvbk1hbmFnZXI7XG4gIF9zZXF1ZW5jZUlkO1xuICBfbWVzc2FnZVJldHJ5UG9saWN5O1xuICBfcmVjb25uZWN0UmV0cnlQb2xpY3k7XG4gIF9xdWlja1NlcXVlbmNlQWNrRGlmZiA9IDMwMDtcbiAgLy8gVGhlIHRpbWVvdXQgZm9yIGtlZXAgYWxpdmVcbiAgX2tlZXBBbGl2ZVRpbWVvdXRJbk1zO1xuICAvLyBUaGUgaW50ZXJ2YWwgYXQgd2hpY2ggdG8gc2VuZCBrZWVwLWFsaXZlIHBpbmcgbWVzc2FnZXMgdG8gdGhlIHJ1bnRpbWVcbiAgX2tlZXBBbGl2ZUludGVydmFsSW5NcztcbiAgX2VtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIF9zdGF0ZTtcbiAgX2lzU3RvcHBpbmcgPSBmYWxzZTtcbiAgX3BpbmdLZWVwYWxpdmVUYXNrO1xuICBfdGltZW91dE1vbml0b3JUYXNrO1xuICAvLyBjb25uZWN0aW9uIGxpZmV0aW1lXG4gIF93c0NsaWVudDtcbiAgX3VyaTtcbiAgX2xhc3RDbG9zZUV2ZW50O1xuICBfbGFzdERpc2Nvbm5lY3RlZE1lc3NhZ2U7XG4gIF9jb25uZWN0aW9uSWQ7XG4gIF9yZWNvbm5lY3Rpb25Ub2tlbjtcbiAgX2lzSW5pdGlhbENvbm5lY3RlZCA9IGZhbHNlO1xuICBfc2VxdWVuY2VBY2tUYXNrO1xuICBfbGFzdE1lc3NhZ2VSZWNlaXZlZCA9IERhdGUubm93KCk7XG4gIGNvbnN0cnVjdG9yKGNyZWRlbnRpYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGNyZWRlbnRpYWwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMuX2NyZWRlbnRpYWwgPSB7IGdldENsaWVudEFjY2Vzc1VybDogY3JlZGVudGlhbCB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jcmVkZW50aWFsID0gY3JlZGVudGlhbDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLl9idWlsZERlZmF1bHRPcHRpb25zKG9wdGlvbnMpO1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuX21lc3NhZ2VSZXRyeVBvbGljeSA9IG5ldyBSZXRyeVBvbGljeSh0aGlzLl9vcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMpO1xuICAgIHRoaXMuX3JlY29ubmVjdFJldHJ5UG9saWN5ID0gbmV3IFJldHJ5UG9saWN5KHRoaXMuX29wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zKTtcbiAgICB0aGlzLl9wcm90b2NvbCA9IHRoaXMuX29wdGlvbnMucHJvdG9jb2w7XG4gICAgdGhpcy5fZ3JvdXBNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgIHRoaXMuX2Fja01hbmFnZXIgPSBuZXcgQWNrTWFuYWdlcigpO1xuICAgIHRoaXMuX2ludm9jYXRpb25NYW5hZ2VyID0gbmV3IEludm9jYXRpb25NYW5hZ2VyKCk7XG4gICAgdGhpcy5fc2VxdWVuY2VJZCA9IG5ldyBTZXF1ZW5jZUlkKCk7XG4gICAgdGhpcy5fa2VlcEFsaXZlVGltZW91dEluTXMgPSB0aGlzLl9vcHRpb25zLmtlZXBBbGl2ZVRpbWVvdXRJbk1zID8/IDEyZTQ7XG4gICAgdGhpcy5fa2VlcEFsaXZlSW50ZXJ2YWxJbk1zID0gdGhpcy5fb3B0aW9ucy5rZWVwQWxpdmVJbnRlcnZhbEluTXMgPz8gMmU0O1xuICAgIHRoaXMuX3N0YXRlID0gXCJTdG9wcGVkXCIgLyogU3RvcHBlZCAqLztcbiAgfVxuICAvKipcbiAgICogU3RhcnQgdG8gc3RhcnQgdG8gdGhlIHNlcnZpY2UuXG4gICAqIEBwYXJhbSBhYm9ydFNpZ25hbCAtIFRoZSBhYm9ydCBzaWduYWxcbiAgICovXG4gIGFzeW5jIHN0YXJ0KG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5faXNTdG9wcGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3Qgc3RhcnQgYSBjbGllbnQgZHVyaW5nIHN0b3BwaW5nXCIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdGUgIT09IFwiU3RvcHBlZFwiIC8qIFN0b3BwZWQgKi8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNsaWVudCBjYW4gYmUgb25seSBzdGFydGVkIHdoZW4gaXQncyBTdG9wcGVkXCIpO1xuICAgIH1cbiAgICBsZXQgYWJvcnRTaWduYWw7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGFib3J0U2lnbmFsID0gb3B0aW9ucy5hYm9ydFNpZ25hbDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9waW5nS2VlcGFsaXZlVGFzayAmJiB0aGlzLl9rZWVwQWxpdmVJbnRlcnZhbEluTXMgPiAwKSB7XG4gICAgICB0aGlzLl9waW5nS2VlcGFsaXZlVGFzayA9IHRoaXMuX2dldFBpbmdLZWVwYWxpdmVUYXNrKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fdGltZW91dE1vbml0b3JUYXNrICYmIHRoaXMuX2tlZXBBbGl2ZVRpbWVvdXRJbk1zID4gMCkge1xuICAgICAgdGhpcy5fdGltZW91dE1vbml0b3JUYXNrID0gdGhpcy5fZ2V0VGltZW91dE1vbml0b3JUYXNrKCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLl9zdGFydENvcmUoYWJvcnRTaWduYWwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fY2hhbmdlU3RhdGUoXCJTdG9wcGVkXCIgLyogU3RvcHBlZCAqLyk7XG4gICAgICB0aGlzLl9kaXNwb3NlS2VlcGFsaXZlVGFza3MoKTtcbiAgICAgIHRoaXMuX2lzU3RvcHBpbmcgPSBmYWxzZTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX3N0YXJ0RnJvbVJlc3RhcnRpbmcoYWJvcnRTaWduYWwpIHtcbiAgICBpZiAodGhpcy5fc3RhdGUgIT09IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDbGllbnQgY2FuIGJlIG9ubHkgcmVzdGFydGVkIHdoZW4gaXQncyBEaXNjb25uZWN0ZWRcIik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBsb2dnZXIudmVyYm9zZShcIlN0YXJpbmcgcmVjb25uZWN0aW5nLlwiKTtcbiAgICAgIGF3YWl0IHRoaXMuX3N0YXJ0Q29yZShhYm9ydFNpZ25hbCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9jaGFuZ2VTdGF0ZShcIkRpc2Nvbm5lY3RlZFwiIC8qIERpc2Nvbm5lY3RlZCAqLyk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9zdGFydENvcmUoYWJvcnRTaWduYWwpIHtcbiAgICB0aGlzLl9jaGFuZ2VTdGF0ZShcIkNvbm5lY3RpbmdcIiAvKiBDb25uZWN0aW5nICovKTtcbiAgICBsb2dnZXIuaW5mbyhcIlN0YXJpbmcgYSBuZXcgY29ubmVjdGlvblwiKTtcbiAgICB0aGlzLl9zZXF1ZW5jZUlkLnJlc2V0KCk7XG4gICAgdGhpcy5faXNJbml0aWFsQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fbGFzdENsb3NlRXZlbnQgPSB2b2lkIDA7XG4gICAgdGhpcy5fbGFzdERpc2Nvbm5lY3RlZE1lc3NhZ2UgPSB2b2lkIDA7XG4gICAgdGhpcy5fY29ubmVjdGlvbklkID0gdm9pZCAwO1xuICAgIHRoaXMuX3JlY29ubmVjdGlvblRva2VuID0gdm9pZCAwO1xuICAgIHRoaXMuX3VyaSA9IHZvaWQgMDtcbiAgICBpZiAodHlwZW9mIHRoaXMuX2NyZWRlbnRpYWwuZ2V0Q2xpZW50QWNjZXNzVXJsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aGlzLl91cmkgPSB0aGlzLl9jcmVkZW50aWFsLmdldENsaWVudEFjY2Vzc1VybDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXJpID0gYXdhaXQgdGhpcy5fY3JlZGVudGlhbC5nZXRDbGllbnRBY2Nlc3NVcmwoe1xuICAgICAgICBhYm9ydFNpZ25hbFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5fdXJpICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUaGUgY2xpZW50QWNjZXNzVXJsIG11c3QgYmUgYSBzdHJpbmcgYnV0IGN1cnJlbnRseSBpdCdzICR7dHlwZW9mIHRoaXMuX3VyaX1gXG4gICAgICApO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLl9jb25uZWN0Q29yZSh0aGlzLl91cmkpO1xuICB9XG4gIC8qKlxuICAgKiBTdG9wIHRoZSBjbGllbnQuXG4gICAqL1xuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gXCJTdG9wcGVkXCIgLyogU3RvcHBlZCAqLyB8fCB0aGlzLl9pc1N0b3BwaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2lzU3RvcHBpbmcgPSB0cnVlO1xuICAgIGlmICh0aGlzLl93c0NsaWVudCAmJiB0aGlzLl93c0NsaWVudC5pc09wZW4oKSkge1xuICAgICAgdGhpcy5fd3NDbGllbnQuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXNTdG9wcGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9kaXNwb3NlS2VlcGFsaXZlVGFza3MoKTtcbiAgfVxuICBfZGlzcG9zZUtlZXBhbGl2ZVRhc2tzKCkge1xuICAgIGlmICh0aGlzLl9waW5nS2VlcGFsaXZlVGFzaykge1xuICAgICAgdGhpcy5fcGluZ0tlZXBhbGl2ZVRhc2suYWJvcnQoKTtcbiAgICAgIHRoaXMuX3BpbmdLZWVwYWxpdmVUYXNrID0gdm9pZCAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGltZW91dE1vbml0b3JUYXNrKSB7XG4gICAgICB0aGlzLl90aW1lb3V0TW9uaXRvclRhc2suYWJvcnQoKTtcbiAgICAgIHRoaXMuX3RpbWVvdXRNb25pdG9yVGFzayA9IHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vbihldmVudCwgbGlzdGVuZXIpO1xuICB9XG4gIG9mZihldmVudCwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLl9lbWl0dGVyLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbiAgX2VtaXRFdmVudChldmVudCwgYXJncykge1xuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChldmVudCwgYXJncyk7XG4gIH1cbiAgLyoqXG4gICAqIFNlbmQgY3VzdG9tIGV2ZW50IHRvIHNlcnZlci5cbiAgICogQHBhcmFtIGV2ZW50TmFtZSAtIFRoZSBldmVudCBuYW1lXG4gICAqIEBwYXJhbSBjb250ZW50IC0gVGhlIGRhdGEgY29udGVudFxuICAgKiBAcGFyYW0gZGF0YVR5cGUgLSBUaGUgZGF0YSB0eXBlXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnNcbiAgICogQHBhcmFtIGFib3J0U2lnbmFsIC0gVGhlIGFib3J0IHNpZ25hbFxuICAgKi9cbiAgYXN5bmMgc2VuZEV2ZW50KGV2ZW50TmFtZSwgY29udGVudCwgZGF0YVR5cGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uRXhlY3V0ZVdpdGhSZXRyeShcbiAgICAgICgpID0+IHRoaXMuX3NlbmRFdmVudEF0dGVtcHQoZXZlbnROYW1lLCBjb250ZW50LCBkYXRhVHlwZSwgb3B0aW9ucyksXG4gICAgICBvcHRpb25zPy5hYm9ydFNpZ25hbFxuICAgICk7XG4gIH1cbiAgYXN5bmMgX3NlbmRFdmVudEF0dGVtcHQoZXZlbnROYW1lLCBjb250ZW50LCBkYXRhVHlwZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGZpcmVBbmRGb3JnZXQgPSBvcHRpb25zPy5maXJlQW5kRm9yZ2V0ID8/IGZhbHNlO1xuICAgIGlmICghZmlyZUFuZEZvcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbmRNZXNzYWdlV2l0aEFja0lkKFxuICAgICAgICAoaWQpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2luZDogXCJzZW5kRXZlbnRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlLFxuICAgICAgICAgICAgZGF0YTogY29udGVudCxcbiAgICAgICAgICAgIGFja0lkOiBpZCxcbiAgICAgICAgICAgIGV2ZW50OiBldmVudE5hbWVcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zPy5hY2tJZCxcbiAgICAgICAgb3B0aW9ucz8uYWJvcnRTaWduYWxcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICBraW5kOiBcInNlbmRFdmVudFwiLFxuICAgICAgZGF0YVR5cGUsXG4gICAgICBkYXRhOiBjb250ZW50LFxuICAgICAgZXZlbnQ6IGV2ZW50TmFtZVxuICAgIH07XG4gICAgYXdhaXQgdGhpcy5fc2VuZE1lc3NhZ2UobWVzc2FnZSwgb3B0aW9ucz8uYWJvcnRTaWduYWwpO1xuICAgIHJldHVybiB7IGlzRHVwbGljYXRlZDogZmFsc2UgfTtcbiAgfVxuICBhc3luYyBfaW52b2tlRXZlbnRBdHRlbXB0KGV2ZW50TmFtZSwgY29udGVudCwgZGF0YVR5cGUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBpbnZva2VPcHRpb25zID0gb3B0aW9ucyA/PyB7fTtcbiAgICBjb25zdCB7IGludm9jYXRpb25JZCwgd2FpdCB9ID0gdGhpcy5faW52b2NhdGlvbk1hbmFnZXIucmVnaXN0ZXJJbnZvY2F0aW9uKFxuICAgICAgaW52b2tlT3B0aW9ucy5pbnZvY2F0aW9uSWRcbiAgICApO1xuICAgIGNvbnN0IGludm9rZU1lc3NhZ2UgPSB7XG4gICAgICBraW5kOiBcImludm9rZVwiLFxuICAgICAgaW52b2NhdGlvbklkLFxuICAgICAgdGFyZ2V0OiBcImV2ZW50XCIsXG4gICAgICBldmVudDogZXZlbnROYW1lLFxuICAgICAgZGF0YVR5cGUsXG4gICAgICBkYXRhOiBjb250ZW50XG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZVByb21pc2UgPSB3YWl0KHtcbiAgICAgIGFib3J0U2lnbmFsOiBpbnZva2VPcHRpb25zLmFib3J0U2lnbmFsXG4gICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX3NlbmRNZXNzYWdlKGludm9rZU1lc3NhZ2UsIGludm9rZU9wdGlvbnMuYWJvcnRTaWduYWwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc3QgaW52b2NhdGlvbkVycm9yID0gZXJyIGluc3RhbmNlb2YgSW52b2NhdGlvbkVycm9yID8gZXJyIDogbmV3IEludm9jYXRpb25FcnJvcihcbiAgICAgICAgZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFwiRmFpbGVkIHRvIHNlbmQgaW52b2NhdGlvbiBtZXNzYWdlLlwiLFxuICAgICAgICB7XG4gICAgICAgICAgaW52b2NhdGlvbklkXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB0aGlzLl9pbnZvY2F0aW9uTWFuYWdlci5yZWplY3RJbnZvY2F0aW9uKGludm9jYXRpb25JZCwgaW52b2NhdGlvbkVycm9yKTtcbiAgICAgIHZvaWQgcmVzcG9uc2VQcm9taXNlLmNhdGNoKCgpID0+IHtcbiAgICAgIH0pO1xuICAgICAgdGhyb3cgaW52b2NhdGlvbkVycm9yO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZVByb21pc2U7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwSW52b2tlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc3Qgc2hvdWxkQ2FuY2VsID0gZXJyIGluc3RhbmNlb2YgSW52b2NhdGlvbkVycm9yICYmIGVyci5lcnJvckRldGFpbCA9PSBudWxsIHx8IGludm9rZU9wdGlvbnMuYWJvcnRTaWduYWw/LmFib3J0ZWQgPT09IHRydWU7XG4gICAgICBpZiAoc2hvdWxkQ2FuY2VsKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRDYW5jZWxJbnZvY2F0aW9uKGludm9jYXRpb25JZCkuY2F0Y2goKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5faW52b2NhdGlvbk1hbmFnZXIuZGlzY2FyZChpbnZvY2F0aW9uSWQpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogSW52b2tlIGFuIHVwc3RyZWFtIGV2ZW50IGFuZCB3YWl0IGZvciB0aGUgY29ycmVsYXRlZCByZXNwb25zZS5cbiAgICogQHBhcmFtIGV2ZW50TmFtZSAtIFRoZSBldmVudCBuYW1lXG4gICAqIEBwYXJhbSBjb250ZW50IC0gVGhlIHBheWxvYWRcbiAgICogQHBhcmFtIGRhdGFUeXBlIC0gVGhlIHBheWxvYWQgdHlwZVxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIEludm9rZSBvcHRpb25zXG4gICAqL1xuICBhc3luYyBpbnZva2VFdmVudChldmVudE5hbWUsIGNvbnRlbnQsIGRhdGFUeXBlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZXJhdGlvbkV4ZWN1dGVXaXRoUmV0cnkoXG4gICAgICAoKSA9PiB0aGlzLl9pbnZva2VFdmVudEF0dGVtcHQoZXZlbnROYW1lLCBjb250ZW50LCBkYXRhVHlwZSwgb3B0aW9ucyksXG4gICAgICBvcHRpb25zPy5hYm9ydFNpZ25hbFxuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIEpvaW4gdGhlIGNsaWVudCB0byBncm91cFxuICAgKiBAcGFyYW0gZ3JvdXBOYW1lIC0gVGhlIGdyb3VwIG5hbWVcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgam9pbiBncm91cCBvcHRpb25zXG4gICAqL1xuICBhc3luYyBqb2luR3JvdXAoZ3JvdXBOYW1lLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZXJhdGlvbkV4ZWN1dGVXaXRoUmV0cnkoXG4gICAgICAoKSA9PiB0aGlzLl9qb2luR3JvdXBBdHRlbXB0KGdyb3VwTmFtZSwgb3B0aW9ucyksXG4gICAgICBvcHRpb25zPy5hYm9ydFNpZ25hbFxuICAgICk7XG4gIH1cbiAgYXN5bmMgX2pvaW5Hcm91cEF0dGVtcHQoZ3JvdXBOYW1lLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLl9nZXRPckFkZEdyb3VwKGdyb3VwTmFtZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fam9pbkdyb3VwQ29yZShncm91cE5hbWUsIG9wdGlvbnMpO1xuICAgIGdyb3VwLmlzSm9pbmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGFzeW5jIF9qb2luR3JvdXBDb3JlKGdyb3VwTmFtZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9zZW5kTWVzc2FnZVdpdGhBY2tJZChcbiAgICAgIChpZCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGdyb3VwOiBncm91cE5hbWUsXG4gICAgICAgICAgYWNrSWQ6IGlkLFxuICAgICAgICAgIGtpbmQ6IFwiam9pbkdyb3VwXCJcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBvcHRpb25zPy5hY2tJZCxcbiAgICAgIG9wdGlvbnM/LmFib3J0U2lnbmFsXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogTGVhdmUgdGhlIGNsaWVudCBmcm9tIGdyb3VwXG4gICAqIEBwYXJhbSBncm91cE5hbWUgLSBUaGUgZ3JvdXAgbmFtZVxuICAgKiBAcGFyYW0gYWNrSWQgLSBUaGUgb3B0aW9uYWwgYWNrSWQuIElmIG5vdCBzcGVjaWZpZWQsIGNsaWVudCB3aWxsIGdlbmVyYXRlIG9uZS5cbiAgICogQHBhcmFtIGFib3J0U2lnbmFsIC0gVGhlIGFib3J0IHNpZ25hbFxuICAgKi9cbiAgYXN5bmMgbGVhdmVHcm91cChncm91cE5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uRXhlY3V0ZVdpdGhSZXRyeShcbiAgICAgICgpID0+IHRoaXMuX2xlYXZlR3JvdXBBdHRlbXB0KGdyb3VwTmFtZSwgb3B0aW9ucyksXG4gICAgICBvcHRpb25zPy5hYm9ydFNpZ25hbFxuICAgICk7XG4gIH1cbiAgYXN5bmMgX2xlYXZlR3JvdXBBdHRlbXB0KGdyb3VwTmFtZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGdyb3VwID0gdGhpcy5fZ2V0T3JBZGRHcm91cChncm91cE5hbWUpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3NlbmRNZXNzYWdlV2l0aEFja0lkKFxuICAgICAgKGlkKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZ3JvdXA6IGdyb3VwTmFtZSxcbiAgICAgICAgICBhY2tJZDogaWQsXG4gICAgICAgICAga2luZDogXCJsZWF2ZUdyb3VwXCJcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBvcHRpb25zPy5hY2tJZCxcbiAgICAgIG9wdGlvbnM/LmFib3J0U2lnbmFsXG4gICAgKTtcbiAgICBncm91cC5pc0pvaW5lZCA9IGZhbHNlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgLyoqXG4gICAqIFNlbmQgbWVzc2FnZSB0byBncm91cC5cbiAgICogQHBhcmFtIGdyb3VwTmFtZSAtIFRoZSBncm91cCBuYW1lXG4gICAqIEBwYXJhbSBjb250ZW50IC0gVGhlIGRhdGEgY29udGVudFxuICAgKiBAcGFyYW0gZGF0YVR5cGUgLSBUaGUgZGF0YSB0eXBlXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnNcbiAgICogQHBhcmFtIGFib3J0U2lnbmFsIC0gVGhlIGFib3J0IHNpZ25hbFxuICAgKi9cbiAgYXN5bmMgc2VuZFRvR3JvdXAoZ3JvdXBOYW1lLCBjb250ZW50LCBkYXRhVHlwZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9vcGVyYXRpb25FeGVjdXRlV2l0aFJldHJ5KFxuICAgICAgKCkgPT4gdGhpcy5fc2VuZFRvR3JvdXBBdHRlbXB0KGdyb3VwTmFtZSwgY29udGVudCwgZGF0YVR5cGUsIG9wdGlvbnMpLFxuICAgICAgb3B0aW9ucz8uYWJvcnRTaWduYWxcbiAgICApO1xuICB9XG4gIGFzeW5jIF9zZW5kVG9Hcm91cEF0dGVtcHQoZ3JvdXBOYW1lLCBjb250ZW50LCBkYXRhVHlwZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGZpcmVBbmRGb3JnZXQgPSBvcHRpb25zPy5maXJlQW5kRm9yZ2V0ID8/IGZhbHNlO1xuICAgIGNvbnN0IG5vRWNobyA9IG9wdGlvbnM/Lm5vRWNobyA/PyBmYWxzZTtcbiAgICBpZiAoIWZpcmVBbmRGb3JnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZW5kTWVzc2FnZVdpdGhBY2tJZChcbiAgICAgICAgKGlkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtpbmQ6IFwic2VuZFRvR3JvdXBcIixcbiAgICAgICAgICAgIGdyb3VwOiBncm91cE5hbWUsXG4gICAgICAgICAgICBkYXRhVHlwZSxcbiAgICAgICAgICAgIGRhdGE6IGNvbnRlbnQsXG4gICAgICAgICAgICBhY2tJZDogaWQsXG4gICAgICAgICAgICBub0VjaG9cbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zPy5hY2tJZCxcbiAgICAgICAgb3B0aW9ucz8uYWJvcnRTaWduYWxcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICBraW5kOiBcInNlbmRUb0dyb3VwXCIsXG4gICAgICBncm91cDogZ3JvdXBOYW1lLFxuICAgICAgZGF0YVR5cGUsXG4gICAgICBkYXRhOiBjb250ZW50LFxuICAgICAgbm9FY2hvXG4gICAgfTtcbiAgICBhd2FpdCB0aGlzLl9zZW5kTWVzc2FnZShtZXNzYWdlLCBvcHRpb25zPy5hYm9ydFNpZ25hbCk7XG4gICAgcmV0dXJuIHsgaXNEdXBsaWNhdGVkOiBmYWxzZSB9O1xuICB9XG4gIF9nZXRXZWJTb2NrZXRDbGllbnRGYWN0b3J5KCkge1xuICAgIHJldHVybiBuZXcgV2ViU29ja2V0Q2xpZW50RmFjdG9yeSgpO1xuICB9XG4gIGFzeW5jIF90cnlTZW5kU2VxdWVuY2VBY2soKSB7XG4gICAgaWYgKCF0aGlzLl9wcm90b2NvbC5pc1JlbGlhYmxlU3ViUHJvdG9jb2wpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgW2lzVXBkYXRlZCwgc2VxSWRdID0gdGhpcy5fc2VxdWVuY2VJZC50cnlHZXRTZXF1ZW5jZUlkKCk7XG4gICAgaWYgKGlzVXBkYXRlZCAmJiBzZXFJZCAhPT0gbnVsbCAmJiBzZXFJZCAhPT0gdm9pZCAwKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgICBraW5kOiBcInNlcXVlbmNlQWNrXCIsXG4gICAgICAgIHNlcXVlbmNlSWQ6IHNlcUlkXG4gICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5fc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgdGhpcy5fc2VxdWVuY2VJZC50cnlVcGRhdGUoc2VxSWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBfY29ubmVjdENvcmUodXJpKSB7XG4gICAgaWYgKHRoaXMuX2lzU3RvcHBpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHN0YXJ0IGEgY2xpZW50IGR1cmluZyBzdG9wcGluZ1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuX3dzQ2xpZW50ID0gdGhpcy5fZ2V0V2ViU29ja2V0Q2xpZW50RmFjdG9yeSgpLmNyZWF0ZShcbiAgICAgICAgdXJpLFxuICAgICAgICB0aGlzLl9wcm90b2NvbC5uYW1lXG4gICAgICApO1xuICAgICAgY2xpZW50Lm9ub3BlbigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc1N0b3BwaW5nKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBUaGUgY2xpZW50IGlzIHN0b3BwZWRgKSk7XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VyLnZlcmJvc2UoXCJXZWJTb2NrZXQgY29ubmVjdGlvbiBoYXMgb3BlbmVkXCIpO1xuICAgICAgICB0aGlzLl9sYXN0TWVzc2FnZVJlY2VpdmVkID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlU3RhdGUoXCJDb25uZWN0ZWRcIiAvKiBDb25uZWN0ZWQgKi8pO1xuICAgICAgICBpZiAodGhpcy5fcHJvdG9jb2wuaXNSZWxpYWJsZVN1YlByb3RvY29sKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3NlcXVlbmNlQWNrVGFzayAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXF1ZW5jZUFja1Rhc2suYWJvcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fc2VxdWVuY2VBY2tUYXNrID0gbmV3IEFib3J0YWJsZVRhc2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fdHJ5U2VuZFNlcXVlbmNlQWNrKCk7XG4gICAgICAgICAgfSwgMWUzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICAgIGNsaWVudC5vbmVycm9yKChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9zZXF1ZW5jZUFja1Rhc2sgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuX3NlcXVlbmNlQWNrVGFzay5hYm9ydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH0pO1xuICAgICAgY2xpZW50Lm9uY2xvc2UoKGNvZGUsIHJlYXNvbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFwiQ29ubmVjdGVkXCIgLyogQ29ubmVjdGVkICovKSB7XG4gICAgICAgICAgbG9nZ2VyLnZlcmJvc2UoXCJXZWJTb2NrZXQgY2xvc2VkIGFmdGVyIG9wZW5cIik7XG4gICAgICAgICAgaWYgKHRoaXMuX3NlcXVlbmNlQWNrVGFzayAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXF1ZW5jZUFja1Rhc2suYWJvcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbG9nZ2VyLmluZm8oYFdlYlNvY2tldCBjb25uZWN0aW9uIGNsb3NlZC4gQ29kZTogJHtjb2RlfSwgUmVhc29uOiAke3JlYXNvbn1gKTtcbiAgICAgICAgICB0aGlzLl9sYXN0Q2xvc2VFdmVudCA9IHsgY29kZSwgcmVhc29uIH07XG4gICAgICAgICAgdGhpcy5faGFuZGxlQ29ubmVjdGlvbkNsb3NlLmNhbGwodGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9nZ2VyLnZlcmJvc2UoXCJXZWJTb2NrZXQgY2xvc2VkIGJlZm9yZSBvcGVuXCIpO1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYEZhaWxlZCB0byBzdGFydCBXZWJTb2NrZXQ6ICR7Y29kZX1gKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY2xpZW50Lm9ubWVzc2FnZSgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVBY2tNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBjb25zdCBpc0R1cGxpY2F0ZWQgPSBtZXNzYWdlLmVycm9yICE9IG51bGwgJiYgbWVzc2FnZS5lcnJvci5uYW1lID09PSBcIkR1cGxpY2F0ZVwiO1xuICAgICAgICAgIGlmIChtZXNzYWdlLnN1Y2Nlc3MgfHwgaXNEdXBsaWNhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9hY2tNYW5hZ2VyLnJlc29sdmVBY2sobWVzc2FnZS5hY2tJZCwge1xuICAgICAgICAgICAgICBhY2tJZDogbWVzc2FnZS5hY2tJZCxcbiAgICAgICAgICAgICAgaXNEdXBsaWNhdGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYWNrTWFuYWdlci5yZWplY3RBY2soXG4gICAgICAgICAgICAgIG1lc3NhZ2UuYWNrSWQsXG4gICAgICAgICAgICAgIG5ldyBTZW5kTWVzc2FnZUVycm9yKFwiRmFpbGVkIHRvIHNlbmQgbWVzc2FnZS5cIiwge1xuICAgICAgICAgICAgICAgIGFja0lkOiBtZXNzYWdlLmFja0lkLFxuICAgICAgICAgICAgICAgIGVycm9yRGV0YWlsOiBtZXNzYWdlLmVycm9yXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlQ29ubmVjdGVkTWVzc2FnZSA9IGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgdGhpcy5fY29ubmVjdGlvbklkID0gbWVzc2FnZS5jb25uZWN0aW9uSWQ7XG4gICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uVG9rZW4gPSBtZXNzYWdlLnJlY29ubmVjdGlvblRva2VuO1xuICAgICAgICAgIGlmICghdGhpcy5faXNJbml0aWFsQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0luaXRpYWxDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYXV0b1Jlam9pbkdyb3Vwcykge1xuICAgICAgICAgICAgICBjb25zdCBncm91cFByb21pc2VzID0gW107XG4gICAgICAgICAgICAgIHRoaXMuX2dyb3VwTWFwLmZvckVhY2goKGcpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZy5pc0pvaW5lZCkge1xuICAgICAgICAgICAgICAgICAgZ3JvdXBQcm9taXNlcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9qb2luR3JvdXBDb3JlKGcubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYWZlRW1pdFJlam9pbkdyb3VwRmFpbGVkKGcubmFtZSwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKClcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoZ3JvdXBQcm9taXNlcykuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3NhZmVFbWl0Q29ubmVjdGVkKG1lc3NhZ2UuY29ubmVjdGlvbklkLCBtZXNzYWdlLnVzZXJJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVEaXNjb25uZWN0ZWRNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICB0aGlzLl9sYXN0RGlzY29ubmVjdGVkTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZUdyb3VwRGF0YU1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgIGlmIChtZXNzYWdlLnNlcXVlbmNlSWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMuX3NlcXVlbmNlSWQudHJ5VXBkYXRlKG1lc3NhZ2Uuc2VxdWVuY2VJZCk7XG4gICAgICAgICAgICBpZiAoZGlmZiA9PT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlmZiA+IHRoaXMuX3F1aWNrU2VxdWVuY2VBY2tEaWZmKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3RyeVNlbmRTZXF1ZW5jZUFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9zYWZlRW1pdEdyb3VwTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlU2VydmVyRGF0YU1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgIGlmIChtZXNzYWdlLnNlcXVlbmNlSWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMuX3NlcXVlbmNlSWQudHJ5VXBkYXRlKG1lc3NhZ2Uuc2VxdWVuY2VJZCk7XG4gICAgICAgICAgICBpZiAoZGlmZiA9PT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlmZiA+IHRoaXMuX3F1aWNrU2VxdWVuY2VBY2tEaWZmKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3RyeVNlbmRTZXF1ZW5jZUFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9zYWZlRW1pdFNlcnZlck1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZUludm9rZVJlc3BvbnNlTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSB0aGlzLl9pbnZvY2F0aW9uTWFuYWdlci5yZXNvbHZlSW52b2NhdGlvbihtZXNzYWdlKTtcbiAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICBsb2dnZXIudmVyYm9zZShcbiAgICAgICAgICAgICAgYFJlY2VpdmVkIGludm9rZVJlc3BvbnNlIGZvciB1bmtub3duIGludm9jYXRpb25JZDogJHttZXNzYWdlLmludm9jYXRpb25JZH1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fbGFzdE1lc3NhZ2VSZWNlaXZlZCA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBtZXNzYWdlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgY29udmVydGVkRGF0YTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgY29udmVydGVkRGF0YSA9IEJ1ZmZlci5jb25jYXQoZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZERhdGEgPSBkYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtZXNzYWdlcyA9IHRoaXMuX3Byb3RvY29sLnBhcnNlTWVzc2FnZXMoY29udmVydGVkRGF0YSk7XG4gICAgICAgICAgaWYgKG1lc3NhZ2VzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2dnZXIud2FybmluZyhcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHBhcnNpbmcgdGhlIG1lc3NhZ2UgZnJvbSBzZXJ2aWNlXCIsIGVycik7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtZXNzYWdlcykpIHtcbiAgICAgICAgICBtZXNzYWdlcyA9IFttZXNzYWdlc107XG4gICAgICAgIH1cbiAgICAgICAgbWVzc2FnZXMuZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2Uua2luZCkge1xuICAgICAgICAgICAgICBjYXNlIFwicG9uZ1wiOiB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSBcImFja1wiOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQWNrTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXNlIFwiY29ubmVjdGVkXCI6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVDb25uZWN0ZWRNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhc2UgXCJkaXNjb25uZWN0ZWRcIjoge1xuICAgICAgICAgICAgICAgIGhhbmRsZURpc2Nvbm5lY3RlZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSBcImdyb3VwRGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlR3JvdXBEYXRhTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXNlIFwic2VydmVyRGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlU2VydmVyRGF0YU1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSBcImludm9rZVJlc3BvbnNlXCI6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVJbnZva2VSZXNwb25zZU1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuaW5nKFxuICAgICAgICAgICAgICBgQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgaGFuZGxpbmcgdGhlIG1lc3NhZ2Ugd2l0aCBraW5kOiAke21lc3NhZ2Uua2luZH0gZnJvbSBzZXJ2aWNlYCxcbiAgICAgICAgICAgICAgZXJyXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhc3luYyBfaGFuZGxlQ29ubmVjdGlvbkNsb3NlQW5kTm9SZWNvdmVyeSgpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IFwiRGlzY29ubmVjdGVkXCIgLyogRGlzY29ubmVjdGVkICovO1xuICAgIHRoaXMuX3NhZmVFbWl0RGlzY29ubmVjdGVkKHRoaXMuX2Nvbm5lY3Rpb25JZCwgdGhpcy5fbGFzdERpc2Nvbm5lY3RlZE1lc3NhZ2UpO1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmF1dG9SZWNvbm5lY3QpIHtcbiAgICAgIGF3YWl0IHRoaXMuX2F1dG9SZWNvbm5lY3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy5faGFuZGxlQ29ubmVjdGlvblN0b3BwZWQoKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgX2F1dG9SZWNvbm5lY3QoKSB7XG4gICAgbGV0IGlzU3VjY2VzcyA9IGZhbHNlO1xuICAgIGxldCBhdHRlbXB0ID0gMDtcbiAgICB0cnkge1xuICAgICAgd2hpbGUgKCF0aGlzLl9pc1N0b3BwaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fc3RhcnRGcm9tUmVzdGFydGluZygpO1xuICAgICAgICAgIGlzU3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZ2dlci53YXJuaW5nKFwiQW4gYXR0ZW1wdCB0byByZWNvbm5lY3QgY29ubmVjdGlvbiBmYWlsZWQuXCIsIGVycik7XG4gICAgICAgICAgYXR0ZW1wdCsrO1xuICAgICAgICAgIGNvbnN0IGRlbGF5SW5NcyA9IHRoaXMuX3JlY29ubmVjdFJldHJ5UG9saWN5Lm5leHRSZXRyeURlbGF5SW5NcyhhdHRlbXB0KTtcbiAgICAgICAgICBpZiAoZGVsYXlJbk1zID09IG51bGwpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2dnZXIudmVyYm9zZShgRGVsYXkgdGltZSBmb3IgcmVjb25uZWN0IGF0dGVtcHQgJHthdHRlbXB0fTogJHtkZWxheUluTXN9YCk7XG4gICAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlJbk1zKS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKCFpc1N1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlQ29ubmVjdGlvblN0b3BwZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX2hhbmRsZUNvbm5lY3Rpb25TdG9wcGVkKCkge1xuICAgIHRoaXMuX2lzU3RvcHBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9zdGF0ZSA9IFwiU3RvcHBlZFwiIC8qIFN0b3BwZWQgKi87XG4gICAgdGhpcy5fZGlzcG9zZUtlZXBhbGl2ZVRhc2tzKCk7XG4gICAgdGhpcy5fc2FmZUVtaXRTdG9wcGVkKCk7XG4gIH1cbiAgYXN5bmMgX3RyeVNlbmRQaW5nKCkge1xuICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gXCJDb25uZWN0ZWRcIiAvKiBDb25uZWN0ZWQgKi8gfHwgIXRoaXMuX3dzQ2xpZW50Py5pc09wZW4oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAga2luZDogXCJwaW5nXCJcbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLl9zZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGxvZ2dlci53YXJuaW5nKFwiRmFpbGVkIHRvIHNlbmQga2VlcGFsaXZlIG1lc3NhZ2UgdG8gdGhlIHNlcnZpY2VcIik7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9jaGVja0tlZXBBbGl2ZVRpbWVvdXQoKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlICE9PSBcIkNvbm5lY3RlZFwiIC8qIENvbm5lY3RlZCAqLyB8fCAhdGhpcy5fd3NDbGllbnQ/LmlzT3BlbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgaWYgKG5vdyAtIHRoaXMuX2xhc3RNZXNzYWdlUmVjZWl2ZWQgPiB0aGlzLl9rZWVwQWxpdmVUaW1lb3V0SW5Ncykge1xuICAgICAgbG9nZ2VyLndhcm5pbmcoXG4gICAgICAgIGBObyBtZXNzYWdlcyByZWNlaXZlZCBmb3IgJHtub3cgLSB0aGlzLl9sYXN0TWVzc2FnZVJlY2VpdmVkfSBtcy4gQ2xvc2luZy4gVGhlIGtlZXAgYWxpdmUgdGltZW91dCBpcyBzZXQgdG8gJHt0aGlzLl9rZWVwQWxpdmVUaW1lb3V0SW5Nc30gbXMuYFxuICAgICAgKTtcbiAgICAgIHRoaXMuX3dzQ2xpZW50Py5jbG9zZSgpO1xuICAgIH1cbiAgfVxuICBfZ2V0UGluZ0tlZXBhbGl2ZVRhc2soKSB7XG4gICAgcmV0dXJuIG5ldyBBYm9ydGFibGVUYXNrKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHRoaXMuX3RyeVNlbmRQaW5nKCk7XG4gICAgfSwgdGhpcy5fa2VlcEFsaXZlSW50ZXJ2YWxJbk1zKTtcbiAgfVxuICBfZ2V0VGltZW91dE1vbml0b3JUYXNrKCkge1xuICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLl9rZWVwQWxpdmVUaW1lb3V0SW5NcztcbiAgICBjb25zdCBjaGVja0ludGVydmFsID0gTWF0aC5mbG9vcih0aW1lb3V0IC8gMyk7XG4gICAgcmV0dXJuIG5ldyBBYm9ydGFibGVUYXNrKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHRoaXMuX2NoZWNrS2VlcEFsaXZlVGltZW91dCgpO1xuICAgIH0sIGNoZWNrSW50ZXJ2YWwpO1xuICB9XG4gIGFzeW5jIF9zZW5kTWVzc2FnZShtZXNzYWdlLCBhYm9ydFNpZ25hbCkge1xuICAgIGlmICghdGhpcy5fd3NDbGllbnQgfHwgIXRoaXMuX3dzQ2xpZW50LmlzT3BlbigpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY29ubmVjdGlvbiBpcyBub3QgY29ubmVjdGVkLlwiKTtcbiAgICB9XG4gICAgY29uc3QgcGF5bG9hZCA9IHRoaXMuX3Byb3RvY29sLndyaXRlTWVzc2FnZShtZXNzYWdlKTtcbiAgICBhd2FpdCB0aGlzLl93c0NsaWVudC5zZW5kKHBheWxvYWQsIGFib3J0U2lnbmFsKTtcbiAgfVxuICBhc3luYyBfc2VuZE1lc3NhZ2VXaXRoQWNrSWQobWVzc2FnZVByb3ZpZGVyLCBhY2tJZCwgYWJvcnRTaWduYWwpIHtcbiAgICBjb25zdCB7IGFja0lkOiByZXNvbHZlZEFja0lkLCB3YWl0IH0gPSB0aGlzLl9hY2tNYW5hZ2VyLnJlZ2lzdGVyQWNrKGFja0lkKTtcbiAgICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZVByb3ZpZGVyKHJlc29sdmVkQWNrSWQpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLl9zZW5kTWVzc2FnZShtZXNzYWdlLCBhYm9ydFNpZ25hbCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuX2Fja01hbmFnZXIuZGlzY2FyZChyZXNvbHZlZEFja0lkKTtcbiAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBcIlwiO1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBTZW5kTWVzc2FnZUVycm9yKGVycm9yTWVzc2FnZSwgeyBhY2tJZDogcmVzb2x2ZWRBY2tJZCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHdhaXQoYWJvcnRTaWduYWwpO1xuICB9XG4gIGFzeW5jIF9oYW5kbGVDb25uZWN0aW9uQ2xvc2UoKSB7XG4gICAgdGhpcy5fYWNrTWFuYWdlci5yZWplY3RBbGwoKGFja0lkKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFNlbmRNZXNzYWdlRXJyb3IoXG4gICAgICAgIFwiQ29ubmVjdGlvbiBpcyBkaXNjb25uZWN0ZWQgYmVmb3JlIHJlY2VpdmUgYWNrIGZyb20gdGhlIHNlcnZpY2VcIixcbiAgICAgICAge1xuICAgICAgICAgIGFja0lkXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gICAgdGhpcy5faW52b2NhdGlvbk1hbmFnZXIucmVqZWN0QWxsKChpbnZvY2F0aW9uSWQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgSW52b2NhdGlvbkVycm9yKFxuICAgICAgICBcIkNvbm5lY3Rpb24gaXMgZGlzY29ubmVjdGVkIGJlZm9yZSByZWNlaXZpbmcgaW52b2tlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZpY2VcIixcbiAgICAgICAge1xuICAgICAgICAgIGludm9jYXRpb25JZFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLl9pc1N0b3BwaW5nKSB7XG4gICAgICBsb2dnZXIud2FybmluZyhcIlRoZSBjbGllbnQgaXMgc3RvcHBpbmcgc3RhdGUuIFN0b3AgcmVjb3ZlcnkuXCIpO1xuICAgICAgdGhpcy5faGFuZGxlQ29ubmVjdGlvbkNsb3NlQW5kTm9SZWNvdmVyeSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGFzdENsb3NlRXZlbnQgJiYgdGhpcy5fbGFzdENsb3NlRXZlbnQuY29kZSA9PT0gMTAwOCkge1xuICAgICAgbG9nZ2VyLndhcm5pbmcoXCJUaGUgd2Vic29ja2V0IGNsb3NlIHdpdGggc3RhdHVzIGNvZGUgMTAwOC4gU3RvcCByZWNvdmVyeS5cIik7XG4gICAgICB0aGlzLl9oYW5kbGVDb25uZWN0aW9uQ2xvc2VBbmROb1JlY292ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fcHJvdG9jb2wuaXNSZWxpYWJsZVN1YlByb3RvY29sKSB7XG4gICAgICBsb2dnZXIud2FybmluZyhcIlRoZSBwcm90b2NvbCBpcyBub3QgcmVsaWFibGUsIHJlY292ZXJ5IGlzIG5vdCBhcHBsaWNhYmxlXCIpO1xuICAgICAgdGhpcy5faGFuZGxlQ29ubmVjdGlvbkNsb3NlQW5kTm9SZWNvdmVyeSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWNvdmVyeVVyaSA9IHRoaXMuX2J1aWxkUmVjb3ZlcnlVcmkoKTtcbiAgICBpZiAoIXJlY292ZXJ5VXJpKSB7XG4gICAgICBsb2dnZXIud2FybmluZyhcIkNvbm5lY3Rpb24gaWQgb3IgcmVjb25uZWN0aW9uIHRva2VuIGlzIG5vdCBhdmFpbGFibGVcIik7XG4gICAgICB0aGlzLl9oYW5kbGVDb25uZWN0aW9uQ2xvc2VBbmROb1JlY292ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCByZWNvdmVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9zdGF0ZSA9IFwiUmVjb3ZlcmluZ1wiIC8qIFJlY292ZXJpbmcgKi87XG4gICAgY29uc3QgYWJvcnRTaWduYWwgPSBBYm9ydFNpZ25hbC50aW1lb3V0KDMwICogMWUzKTtcbiAgICB0cnkge1xuICAgICAgd2hpbGUgKCFhYm9ydFNpZ25hbC5hYm9ydGVkIHx8IHRoaXMuX2lzU3RvcHBpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLl9jb25uZWN0Q29yZS5jYWxsKHRoaXMsIHJlY292ZXJ5VXJpKTtcbiAgICAgICAgICByZWNvdmVyZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgYXdhaXQgZGVsYXkoMWUzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoIXJlY292ZXJlZCkge1xuICAgICAgICBsb2dnZXIud2FybmluZyhcIlJlY292ZXJ5IGF0dGVtcHRzIGZhaWxlZCBtb3JlIHRoZW4gMzAgc2Vjb25kcyBvciB0aGUgY2xpZW50IGlzIHN0b3BwaW5nXCIpO1xuICAgICAgICB0aGlzLl9oYW5kbGVDb25uZWN0aW9uQ2xvc2VBbmROb1JlY292ZXJ5KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIF9zYWZlRW1pdENvbm5lY3RlZChjb25uZWN0aW9uSWQsIHVzZXJJZCkge1xuICAgIHRoaXMuX2VtaXRFdmVudChcImNvbm5lY3RlZFwiLCB7XG4gICAgICBjb25uZWN0aW9uSWQsXG4gICAgICB1c2VySWRcbiAgICB9KTtcbiAgfVxuICBfc2FmZUVtaXREaXNjb25uZWN0ZWQoY29ubmVjdGlvbklkLCBsYXN0RGlzY29ubmVjdGVkTWVzc2FnZSkge1xuICAgIHRoaXMuX2VtaXRFdmVudChcImRpc2Nvbm5lY3RlZFwiLCB7XG4gICAgICBjb25uZWN0aW9uSWQsXG4gICAgICBtZXNzYWdlOiBsYXN0RGlzY29ubmVjdGVkTWVzc2FnZVxuICAgIH0pO1xuICB9XG4gIF9zYWZlRW1pdEdyb3VwTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgdGhpcy5fZW1pdEV2ZW50KFwiZ3JvdXAtbWVzc2FnZVwiLCB7XG4gICAgICBtZXNzYWdlXG4gICAgfSk7XG4gIH1cbiAgX3NhZmVFbWl0U2VydmVyTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgdGhpcy5fZW1pdEV2ZW50KFwic2VydmVyLW1lc3NhZ2VcIiwge1xuICAgICAgbWVzc2FnZVxuICAgIH0pO1xuICB9XG4gIF9zYWZlRW1pdFN0b3BwZWQoKSB7XG4gICAgdGhpcy5fZW1pdEV2ZW50KFwic3RvcHBlZFwiLCB7fSk7XG4gIH1cbiAgX3NhZmVFbWl0UmVqb2luR3JvdXBGYWlsZWQoZ3JvdXBOYW1lLCBlcnIpIHtcbiAgICB0aGlzLl9lbWl0RXZlbnQoXCJyZWpvaW4tZ3JvdXAtZmFpbGVkXCIsIHtcbiAgICAgIGdyb3VwOiBncm91cE5hbWUsXG4gICAgICBlcnJvcjogZXJyXG4gICAgfSk7XG4gIH1cbiAgX21hcEludm9rZVJlc3BvbnNlKG1lc3NhZ2UpIHtcbiAgICBpZiAobWVzc2FnZS5zdWNjZXNzICE9PSB0cnVlKSB7XG4gICAgICBpZiAobWVzc2FnZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICB0aHJvdyBuZXcgSW52b2NhdGlvbkVycm9yKG1lc3NhZ2UuZXJyb3I/Lm1lc3NhZ2UgPz8gXCJJbnZvY2F0aW9uIGZhaWxlZC5cIiwge1xuICAgICAgICAgIGludm9jYXRpb25JZDogbWVzc2FnZS5pbnZvY2F0aW9uSWQsXG4gICAgICAgICAgZXJyb3JEZXRhaWw6IG1lc3NhZ2UuZXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgSW52b2NhdGlvbkVycm9yKFwiVW5zdXBwb3J0ZWQgaW52b2tlIHJlc3BvbnNlIGZyYW1lLlwiLCB7XG4gICAgICAgIGludm9jYXRpb25JZDogbWVzc2FnZS5pbnZvY2F0aW9uSWRcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaW52b2NhdGlvbklkOiBtZXNzYWdlLmludm9jYXRpb25JZCxcbiAgICAgIGRhdGFUeXBlOiBtZXNzYWdlLmRhdGFUeXBlLFxuICAgICAgZGF0YTogbWVzc2FnZS5kYXRhXG4gICAgfTtcbiAgfVxuICBhc3luYyBfc2VuZENhbmNlbEludm9jYXRpb24oaW52b2NhdGlvbklkKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIGtpbmQ6IFwiY2FuY2VsSW52b2NhdGlvblwiLFxuICAgICAgaW52b2NhdGlvbklkXG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5fc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBsb2dnZXIudmVyYm9zZShgRmFpbGVkIHRvIHNlbmQgY2FuY2VsSW52b2NhdGlvbiBmb3IgJHtpbnZvY2F0aW9uSWR9YCwgZXJyKTtcbiAgICB9XG4gIH1cbiAgX2J1aWxkRGVmYXVsdE9wdGlvbnMoY2xpZW50T3B0aW9ucykge1xuICAgIGlmIChjbGllbnRPcHRpb25zLmF1dG9SZWNvbm5lY3QgPT0gbnVsbCkge1xuICAgICAgY2xpZW50T3B0aW9ucy5hdXRvUmVjb25uZWN0ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMuYXV0b1Jlam9pbkdyb3VwcyA9PSBudWxsKSB7XG4gICAgICBjbGllbnRPcHRpb25zLmF1dG9SZWpvaW5Hcm91cHMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5wcm90b2NvbCA9PSBudWxsKSB7XG4gICAgICBjbGllbnRPcHRpb25zLnByb3RvY29sID0gV2ViUHViU3ViSnNvblJlbGlhYmxlUHJvdG9jb2woKTtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMua2VlcEFsaXZlVGltZW91dEluTXMgPT0gbnVsbCkge1xuICAgICAgY2xpZW50T3B0aW9ucy5rZWVwQWxpdmVUaW1lb3V0SW5NcyA9IDEyZTQ7XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLmtlZXBBbGl2ZVRpbWVvdXRJbk1zIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJrZWVwQWxpdmVUaW1lb3V0SW5NcyBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAwLlwiKTtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMua2VlcEFsaXZlSW50ZXJ2YWxJbk1zID09IG51bGwpIHtcbiAgICAgIGNsaWVudE9wdGlvbnMua2VlcEFsaXZlSW50ZXJ2YWxJbk1zID0gMmU0O1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5rZWVwQWxpdmVJbnRlcnZhbEluTXMgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcImtlZXBBbGl2ZUludGVydmFsSW5NcyBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAwLlwiKTtcbiAgICB9XG4gICAgdGhpcy5fYnVpbGRNZXNzYWdlUmV0cnlPcHRpb25zKGNsaWVudE9wdGlvbnMpO1xuICAgIHRoaXMuX2J1aWxkUmVjb25uZWN0UmV0cnlPcHRpb25zKGNsaWVudE9wdGlvbnMpO1xuICAgIHJldHVybiBjbGllbnRPcHRpb25zO1xuICB9XG4gIF9idWlsZE1lc3NhZ2VSZXRyeU9wdGlvbnMoY2xpZW50T3B0aW9ucykge1xuICAgIGlmICghY2xpZW50T3B0aW9ucy5tZXNzYWdlUmV0cnlPcHRpb25zKSB7XG4gICAgICBjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMubWVzc2FnZVJldHJ5T3B0aW9ucy5tYXhSZXRyaWVzID09IG51bGwgfHwgY2xpZW50T3B0aW9ucy5tZXNzYWdlUmV0cnlPcHRpb25zLm1heFJldHJpZXMgPCAwKSB7XG4gICAgICBjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMubWF4UmV0cmllcyA9IDM7XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMucmV0cnlEZWxheUluTXMgPT0gbnVsbCB8fCBjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMucmV0cnlEZWxheUluTXMgPCAwKSB7XG4gICAgICBjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMucmV0cnlEZWxheUluTXMgPSAxZTM7XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMubWF4UmV0cnlEZWxheUluTXMgPT0gbnVsbCB8fCBjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMubWF4UmV0cnlEZWxheUluTXMgPCAwKSB7XG4gICAgICBjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMubWF4UmV0cnlEZWxheUluTXMgPSAzZTQ7XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMubW9kZSA9PSBudWxsKSB7XG4gICAgICBjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMubW9kZSA9IFwiRml4ZWRcIjtcbiAgICB9XG4gIH1cbiAgX2J1aWxkUmVjb25uZWN0UmV0cnlPcHRpb25zKGNsaWVudE9wdGlvbnMpIHtcbiAgICBpZiAoIWNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zKSB7XG4gICAgICBjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMubWF4UmV0cmllcyA9PSBudWxsIHx8IGNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zLm1heFJldHJpZXMgPCAwKSB7XG4gICAgICBjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucy5tYXhSZXRyaWVzID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zLnJldHJ5RGVsYXlJbk1zID09IG51bGwgfHwgY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMucmV0cnlEZWxheUluTXMgPCAwKSB7XG4gICAgICBjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucy5yZXRyeURlbGF5SW5NcyA9IDFlMztcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zLm1heFJldHJ5RGVsYXlJbk1zID09IG51bGwgfHwgY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMubWF4UmV0cnlEZWxheUluTXMgPCAwKSB7XG4gICAgICBjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucy5tYXhSZXRyeURlbGF5SW5NcyA9IDNlNDtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zLm1vZGUgPT0gbnVsbCkge1xuICAgICAgY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMubW9kZSA9IFwiRml4ZWRcIjtcbiAgICB9XG4gIH1cbiAgX2J1aWxkUmVjb3ZlcnlVcmkoKSB7XG4gICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25JZCAmJiB0aGlzLl9yZWNvbm5lY3Rpb25Ub2tlbiAmJiB0aGlzLl91cmkpIHtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodGhpcy5fdXJpKTtcbiAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKFwiYXdwc19jb25uZWN0aW9uX2lkXCIsIHRoaXMuX2Nvbm5lY3Rpb25JZCk7XG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChcImF3cHNfcmVjb25uZWN0aW9uX3Rva2VuXCIsIHRoaXMuX3JlY29ubmVjdGlvblRva2VuKTtcbiAgICAgIHJldHVybiB1cmwudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgX2dldE9yQWRkR3JvdXAobmFtZSkge1xuICAgIGlmICghdGhpcy5fZ3JvdXBNYXAuaGFzKG5hbWUpKSB7XG4gICAgICB0aGlzLl9ncm91cE1hcC5zZXQobmFtZSwgbmV3IFdlYlB1YlN1Ykdyb3VwKG5hbWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2dyb3VwTWFwLmdldChuYW1lKTtcbiAgfVxuICBfY2hhbmdlU3RhdGUobmV3U3RhdGUpIHtcbiAgICBsb2dnZXIudmVyYm9zZShcbiAgICAgIGBUaGUgY2xpZW50IHN0YXRlIHRyYW5zZmVyIGZyb20gJHt0aGlzLl9zdGF0ZS50b1N0cmluZygpfSB0byAke25ld1N0YXRlLnRvU3RyaW5nKCl9YFxuICAgICk7XG4gICAgdGhpcy5fc3RhdGUgPSBuZXdTdGF0ZTtcbiAgfVxuICBhc3luYyBfb3BlcmF0aW9uRXhlY3V0ZVdpdGhSZXRyeShpbm5lciwgc2lnbmFsKSB7XG4gICAgbGV0IHJldHJ5QXR0ZW1wdCA9IDA7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBpbm5lci5jYWxsKHRoaXMpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBJbnZvY2F0aW9uRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0cnlBdHRlbXB0Kys7XG4gICAgICAgIGNvbnN0IGRlbGF5SW5NcyA9IHRoaXMuX21lc3NhZ2VSZXRyeVBvbGljeS5uZXh0UmV0cnlEZWxheUluTXMocmV0cnlBdHRlbXB0KTtcbiAgICAgICAgaWYgKGRlbGF5SW5NcyA9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5SW5Ncyk7XG4gICAgICAgIGlmIChzaWduYWw/LmFib3J0ZWQpIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmNsYXNzIFJldHJ5UG9saWN5IHtcbiAgX3JldHJ5T3B0aW9ucztcbiAgX21heFJldHJpZXNUb0dldE1heERlbGF5O1xuICBjb25zdHJ1Y3RvcihyZXRyeU9wdGlvbnMpIHtcbiAgICB0aGlzLl9yZXRyeU9wdGlvbnMgPSByZXRyeU9wdGlvbnM7XG4gICAgdGhpcy5fbWF4UmV0cmllc1RvR2V0TWF4RGVsYXkgPSBNYXRoLmNlaWwoXG4gICAgICBNYXRoLmxvZzIodGhpcy5fcmV0cnlPcHRpb25zLm1heFJldHJ5RGVsYXlJbk1zKSAtIE1hdGgubG9nMih0aGlzLl9yZXRyeU9wdGlvbnMucmV0cnlEZWxheUluTXMpICsgMVxuICAgICk7XG4gIH1cbiAgbmV4dFJldHJ5RGVsYXlJbk1zKHJldHJ5QXR0ZW1wdCkge1xuICAgIGlmIChyZXRyeUF0dGVtcHQgPiB0aGlzLl9yZXRyeU9wdGlvbnMubWF4UmV0cmllcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9yZXRyeU9wdGlvbnMubW9kZSA9PT0gXCJGaXhlZFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXRyeU9wdGlvbnMucmV0cnlEZWxheUluTXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsY3VsYXRlRXhwb25lbnRpYWxEZWxheShyZXRyeUF0dGVtcHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBfY2FsY3VsYXRlRXhwb25lbnRpYWxEZWxheShhdHRlbXB0KSB7XG4gICAgaWYgKGF0dGVtcHQgPj0gdGhpcy5fbWF4UmV0cmllc1RvR2V0TWF4RGVsYXkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXRyeU9wdGlvbnMubWF4UmV0cnlEZWxheUluTXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoMSA8PCBhdHRlbXB0IC0gMSkgKiB0aGlzLl9yZXRyeU9wdGlvbnMucmV0cnlEZWxheUluTXM7XG4gICAgfVxuICB9XG59XG5jbGFzcyBXZWJQdWJTdWJHcm91cCB7XG4gIG5hbWU7XG4gIGlzSm9pbmVkID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG59XG5jbGFzcyBTZXF1ZW5jZUlkIHtcbiAgX3NlcXVlbmNlSWQ7XG4gIF9pc1VwZGF0ZTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fc2VxdWVuY2VJZCA9IDA7XG4gICAgdGhpcy5faXNVcGRhdGUgPSBmYWxzZTtcbiAgfVxuICB0cnlVcGRhdGUoc2VxdWVuY2VJZCkge1xuICAgIHRoaXMuX2lzVXBkYXRlID0gdHJ1ZTtcbiAgICBpZiAoc2VxdWVuY2VJZCA+IHRoaXMuX3NlcXVlbmNlSWQpIHtcbiAgICAgIGNvbnN0IGRpZmYgPSBzZXF1ZW5jZUlkIC0gdGhpcy5fc2VxdWVuY2VJZDtcbiAgICAgIHRoaXMuX3NlcXVlbmNlSWQgPSBzZXF1ZW5jZUlkO1xuICAgICAgcmV0dXJuIGRpZmY7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG4gIHRyeUdldFNlcXVlbmNlSWQoKSB7XG4gICAgaWYgKHRoaXMuX2lzVXBkYXRlKSB7XG4gICAgICB0aGlzLl9pc1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIFt0cnVlLCB0aGlzLl9zZXF1ZW5jZUlkXTtcbiAgICB9XG4gICAgcmV0dXJuIFtmYWxzZSwgbnVsbF07XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fc2VxdWVuY2VJZCA9IDA7XG4gICAgdGhpcy5faXNVcGRhdGUgPSBmYWxzZTtcbiAgfVxufVxuY2xhc3MgQWJvcnRhYmxlVGFzayB7XG4gIF9mdW5jO1xuICBfYWJvcnRDb250cm9sbGVyO1xuICBfaW50ZXJ2YWw7XG4gIF9vYmo7XG4gIGNvbnN0cnVjdG9yKGZ1bmMsIGludGVydmFsLCBvYmopIHtcbiAgICB0aGlzLl9mdW5jID0gZnVuYztcbiAgICB0aGlzLl9hYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgICB0aGlzLl9vYmogPSBvYmo7XG4gICAgdGhpcy5fc3RhcnQoKTtcbiAgfVxuICBhYm9ydCgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG4gICAgfSBjYXRjaCB7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9zdGFydCgpIHtcbiAgICBjb25zdCBzaWduYWwgPSB0aGlzLl9hYm9ydENvbnRyb2xsZXIuc2lnbmFsO1xuICAgIHdoaWxlICghc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX2Z1bmModGhpcy5fb2JqKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgZGVsYXkodGhpcy5faW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IHtcbiAgV2ViUHViU3ViQ2xpZW50XG59O1xuIiwgImNsYXNzIFNlbmRNZXNzYWdlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIC8qKlxuICAgKiBFcnJvciBuYW1lXG4gICAqL1xuICBuYW1lO1xuICAvKipcbiAgICogVGhlIGFjayBpZCBvZiB0aGUgbWVzc2FnZVxuICAgKi9cbiAgYWNrSWQ7XG4gIC8qKlxuICAgKiBUaGUgZXJyb3IgZGV0YWlscyBmcm9tIHRoZSBzZXJ2aWNlXG4gICAqL1xuICBlcnJvckRldGFpbDtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYSBTZW5kTWVzc2FnZUVycm9yXG4gICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIGVycm9yIG1lc3NhZ2VcbiAgICogQHBhcmFtIGFja01lc3NhZ2UgLSBUaGUgYWNrIG1lc3NhZ2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSBcIlNlbmRNZXNzYWdlRXJyb3JcIjtcbiAgICB0aGlzLmFja0lkID0gb3B0aW9ucy5hY2tJZDtcbiAgICB0aGlzLmVycm9yRGV0YWlsID0gb3B0aW9ucy5lcnJvckRldGFpbDtcbiAgfVxufVxuY2xhc3MgSW52b2NhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAvKipcbiAgICogVGhlIGludm9jYXRpb24gaWQgb2YgdGhlIHJlcXVlc3QuXG4gICAqL1xuICBpbnZvY2F0aW9uSWQ7XG4gIC8qKlxuICAgKiBFcnJvciBkZXRhaWxzIGZyb20gdGhlIHNlcnZpY2UgaWYgYXZhaWxhYmxlLlxuICAgKi9cbiAgZXJyb3JEZXRhaWw7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSBcIkludm9jYXRpb25FcnJvclwiO1xuICAgIHRoaXMuaW52b2NhdGlvbklkID0gb3B0aW9ucy5pbnZvY2F0aW9uSWQ7XG4gICAgdGhpcy5lcnJvckRldGFpbCA9IG9wdGlvbnMuZXJyb3JEZXRhaWw7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIEludm9jYXRpb25FcnJvcixcbiAgU2VuZE1lc3NhZ2VFcnJvclxufTtcbiIsICIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgRU9MIH0gZnJvbSBcIm5vZGU6b3NcIjtcbmltcG9ydCB1dGlsIGZyb20gXCJub2RlOnV0aWxcIjtcbmltcG9ydCBwcm9jZXNzIGZyb20gXCJub2RlOnByb2Nlc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhtZXNzYWdlOiB1bmtub3duLCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICBwcm9jZXNzLnN0ZGVyci53cml0ZShgJHt1dGlsLmZvcm1hdChtZXNzYWdlLCAuLi5hcmdzKX0ke0VPTH1gKTtcbn1cbiIsICIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgbG9nIH0gZnJvbSBcIi4vbG9nLmpzXCI7XG5cbi8qKlxuICogQSBzaW1wbGUgbWVjaGFuaXNtIGZvciBlbmFibGluZyBsb2dnaW5nLlxuICogSW50ZW5kZWQgdG8gbWltaWMgdGhlIHB1YmxpY2x5IGF2YWlsYWJsZSBgZGVidWdgIHBhY2thZ2UuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVidWcge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBsb2dnZXIgd2l0aCB0aGUgZ2l2ZW4gbmFtZXNwYWNlLlxuICAgKi9cbiAgKG5hbWVzcGFjZTogc3RyaW5nKTogRGVidWdnZXI7XG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBsb2cgbWV0aG9kIChkZWZhdWx0cyB0byBjb25zb2xlKVxuICAgKi9cbiAgbG9nOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBFbmFibGVzIGEgcGFydGljdWxhciBzZXQgb2YgbmFtZXNwYWNlcy5cbiAgICogVG8gZW5hYmxlIG11bHRpcGxlIHNlcGFyYXRlIHRoZW0gd2l0aCBjb21tYXMsIGUuZy4gXCJpbmZvLGRlYnVnXCIuXG4gICAqIFN1cHBvcnRzIHdpbGRjYXJkcywgZS5nLiBcInR5cGVTcGVjUnVudGltZToqXCJcbiAgICogU3VwcG9ydHMgc2tpcCBzeW50YXgsIGUuZy4gXCJ0eXBlU3BlY1J1bnRpbWU6KiwtdHlwZVNwZWNSdW50aW1lOnN0b3JhZ2U6KlwiIHdpbGwgZW5hYmxlXG4gICAqIGV2ZXJ5dGhpbmcgdW5kZXIgdHlwZVNwZWNSdW50aW1lIGV4Y2VwdCBmb3IgdGhpbmdzIHVuZGVyIHR5cGVTcGVjUnVudGltZTpzdG9yYWdlLlxuICAgKi9cbiAgZW5hYmxlOiAobmFtZXNwYWNlczogc3RyaW5nKSA9PiB2b2lkO1xuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgcGFydGljdWxhciBuYW1lc3BhY2UgaXMgZW5hYmxlZC5cbiAgICovXG4gIGVuYWJsZWQ6IChuYW1lc3BhY2U6IHN0cmluZykgPT4gYm9vbGVhbjtcbiAgLyoqXG4gICAqIERpc2FibGVzIGFsbCBsb2dnaW5nLCByZXR1cm5zIHdoYXQgd2FzIHByZXZpb3VzbHkgZW5hYmxlZC5cbiAgICovXG4gIGRpc2FibGU6ICgpID0+IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIGxvZyBmdW5jdGlvbiB0aGF0IGNhbiBiZSBkeW5hbWljYWxseSBlbmFibGVkIGFuZCByZWRpcmVjdGVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERlYnVnZ2VyIHtcbiAgLyoqXG4gICAqIExvZ3MgdGhlIGdpdmVuIGFyZ3VtZW50cyB0byB0aGUgYGxvZ2AgbWV0aG9kLlxuICAgKi9cbiAgKC4uLmFyZ3M6IGFueVtdKTogdm9pZDtcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhpcyBsb2dnZXIgaXMgYWN0aXZlIGFuZCBsb2dnaW5nLlxuICAgKi9cbiAgZW5hYmxlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFVzZWQgdG8gY2xlYW51cC9yZW1vdmUgdGhpcyBsb2dnZXIuXG4gICAqL1xuICBkZXN0cm95OiAoKSA9PiBib29sZWFuO1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgbG9nIG1ldGhvZC4gQ2FuIGJlIG92ZXJyaWRkZW4gdG8gcmVkaXJlY3Qgb3V0cHV0LlxuICAgKi9cbiAgbG9nOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBUaGUgbmFtZXNwYWNlIG9mIHRoaXMgbG9nZ2VyLlxuICAgKi9cbiAgbmFtZXNwYWNlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFeHRlbmRzIHRoaXMgbG9nZ2VyIHdpdGggYSBjaGlsZCBuYW1lc3BhY2UuXG4gICAqIE5hbWVzcGFjZXMgYXJlIHNlcGFyYXRlZCB3aXRoIGEgJzonIGNoYXJhY3Rlci5cbiAgICovXG4gIGV4dGVuZDogKG5hbWVzcGFjZTogc3RyaW5nKSA9PiBEZWJ1Z2dlcjtcbn1cblxuY29uc3QgZGVidWdFbnZWYXJpYWJsZSA9XG4gICh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5ERUJVRykgfHwgdW5kZWZpbmVkO1xuXG5sZXQgZW5hYmxlZFN0cmluZzogc3RyaW5nIHwgdW5kZWZpbmVkO1xubGV0IGVuYWJsZWROYW1lc3BhY2VzOiBzdHJpbmdbXSA9IFtdO1xubGV0IHNraXBwZWROYW1lc3BhY2VzOiBzdHJpbmdbXSA9IFtdO1xuY29uc3QgZGVidWdnZXJzOiBEZWJ1Z2dlcltdID0gW107XG5cbmlmIChkZWJ1Z0VudlZhcmlhYmxlKSB7XG4gIGVuYWJsZShkZWJ1Z0VudlZhcmlhYmxlKTtcbn1cblxuY29uc3QgZGVidWdPYmo6IERlYnVnID0gT2JqZWN0LmFzc2lnbihcbiAgKG5hbWVzcGFjZTogc3RyaW5nKTogRGVidWdnZXIgPT4ge1xuICAgIHJldHVybiBjcmVhdGVEZWJ1Z2dlcihuYW1lc3BhY2UpO1xuICB9LFxuICB7XG4gICAgZW5hYmxlLFxuICAgIGVuYWJsZWQsXG4gICAgZGlzYWJsZSxcbiAgICBsb2csXG4gIH0sXG4pO1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlczogc3RyaW5nKTogdm9pZCB7XG4gIGVuYWJsZWRTdHJpbmcgPSBuYW1lc3BhY2VzO1xuICBlbmFibGVkTmFtZXNwYWNlcyA9IFtdO1xuICBza2lwcGVkTmFtZXNwYWNlcyA9IFtdO1xuICBjb25zdCBuYW1lc3BhY2VMaXN0ID0gbmFtZXNwYWNlcy5zcGxpdChcIixcIikubWFwKChucykgPT4gbnMudHJpbSgpKTtcbiAgZm9yIChjb25zdCBucyBvZiBuYW1lc3BhY2VMaXN0KSB7XG4gICAgaWYgKG5zLnN0YXJ0c1dpdGgoXCItXCIpKSB7XG4gICAgICBza2lwcGVkTmFtZXNwYWNlcy5wdXNoKG5zLnN1YnN0cmluZygxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuYWJsZWROYW1lc3BhY2VzLnB1c2gobnMpO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIGRlYnVnZ2Vycykge1xuICAgIGluc3RhbmNlLmVuYWJsZWQgPSBlbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5hYmxlZChuYW1lc3BhY2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAobmFtZXNwYWNlLmVuZHNXaXRoKFwiKlwiKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZm9yIChjb25zdCBza2lwcGVkIG9mIHNraXBwZWROYW1lc3BhY2VzKSB7XG4gICAgaWYgKG5hbWVzcGFjZU1hdGNoZXMobmFtZXNwYWNlLCBza2lwcGVkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IGVuYWJsZWROYW1lc3BhY2Ugb2YgZW5hYmxlZE5hbWVzcGFjZXMpIHtcbiAgICBpZiAobmFtZXNwYWNlTWF0Y2hlcyhuYW1lc3BhY2UsIGVuYWJsZWROYW1lc3BhY2UpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEdpdmVuIGEgbmFtZXNwYWNlLCBjaGVjayBpZiBpdCBtYXRjaGVzIGEgcGF0dGVybi5cbiAqIFBhdHRlcm5zIG9ubHkgaGF2ZSBhIHNpbmdsZSB3aWxkY2FyZCBjaGFyYWN0ZXIgd2hpY2ggaXMgKi5cbiAqIFRoZSBiZWhhdmlvciBvZiAqIGlzIHRoYXQgaXQgbWF0Y2hlcyB6ZXJvIG9yIG1vcmUgb3RoZXIgY2hhcmFjdGVycy5cbiAqL1xuZnVuY3Rpb24gbmFtZXNwYWNlTWF0Y2hlcyhuYW1lc3BhY2U6IHN0cmluZywgcGF0dGVyblRvTWF0Y2g6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBzaW1wbGUgY2FzZSwgbm8gcGF0dGVybiBtYXRjaGluZyByZXF1aXJlZFxuICBpZiAocGF0dGVyblRvTWF0Y2guaW5kZXhPZihcIipcIikgPT09IC0xKSB7XG4gICAgcmV0dXJuIG5hbWVzcGFjZSA9PT0gcGF0dGVyblRvTWF0Y2g7XG4gIH1cblxuICBsZXQgcGF0dGVybiA9IHBhdHRlcm5Ub01hdGNoO1xuXG4gIC8vIG5vcm1hbGl6ZSBzdWNjZXNzaXZlICogaWYgbmVlZGVkXG4gIGlmIChwYXR0ZXJuVG9NYXRjaC5pbmRleE9mKFwiKipcIikgIT09IC0xKSB7XG4gICAgY29uc3QgcGF0dGVyblBhcnRzID0gW107XG4gICAgbGV0IGxhc3RDaGFyYWN0ZXIgPSBcIlwiO1xuICAgIGZvciAoY29uc3QgY2hhcmFjdGVyIG9mIHBhdHRlcm5Ub01hdGNoKSB7XG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBcIipcIiAmJiBsYXN0Q2hhcmFjdGVyID09PSBcIipcIikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhc3RDaGFyYWN0ZXIgPSBjaGFyYWN0ZXI7XG4gICAgICAgIHBhdHRlcm5QYXJ0cy5wdXNoKGNoYXJhY3Rlcik7XG4gICAgICB9XG4gICAgfVxuICAgIHBhdHRlcm4gPSBwYXR0ZXJuUGFydHMuam9pbihcIlwiKTtcbiAgfVxuXG4gIGxldCBuYW1lc3BhY2VJbmRleCA9IDA7XG4gIGxldCBwYXR0ZXJuSW5kZXggPSAwO1xuICBjb25zdCBwYXR0ZXJuTGVuZ3RoID0gcGF0dGVybi5sZW5ndGg7XG4gIGNvbnN0IG5hbWVzcGFjZUxlbmd0aCA9IG5hbWVzcGFjZS5sZW5ndGg7XG4gIGxldCBsYXN0V2lsZGNhcmQgPSAtMTtcbiAgbGV0IGxhc3RXaWxkY2FyZE5hbWVzcGFjZSA9IC0xO1xuXG4gIHdoaWxlIChuYW1lc3BhY2VJbmRleCA8IG5hbWVzcGFjZUxlbmd0aCAmJiBwYXR0ZXJuSW5kZXggPCBwYXR0ZXJuTGVuZ3RoKSB7XG4gICAgaWYgKHBhdHRlcm5bcGF0dGVybkluZGV4XSA9PT0gXCIqXCIpIHtcbiAgICAgIGxhc3RXaWxkY2FyZCA9IHBhdHRlcm5JbmRleDtcbiAgICAgIHBhdHRlcm5JbmRleCsrO1xuICAgICAgaWYgKHBhdHRlcm5JbmRleCA9PT0gcGF0dGVybkxlbmd0aCkge1xuICAgICAgICAvLyBpZiB3aWxkY2FyZCBpcyB0aGUgbGFzdCBjaGFyYWN0ZXIsIGl0IHdpbGwgbWF0Y2ggdGhlIHJlbWFpbmluZyBuYW1lc3BhY2Ugc3RyaW5nXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gbm93IHdlIGxldCB0aGUgd2lsZGNhcmQgZWF0IGNoYXJhY3RlcnMgdW50aWwgd2UgbWF0Y2ggdGhlIG5leHQgbGl0ZXJhbCBpbiB0aGUgcGF0dGVyblxuICAgICAgd2hpbGUgKG5hbWVzcGFjZVtuYW1lc3BhY2VJbmRleF0gIT09IHBhdHRlcm5bcGF0dGVybkluZGV4XSkge1xuICAgICAgICBuYW1lc3BhY2VJbmRleCsrO1xuICAgICAgICAvLyByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIG5hbWVzcGFjZSB3aXRob3V0IGEgbWF0Y2hcbiAgICAgICAgaWYgKG5hbWVzcGFjZUluZGV4ID09PSBuYW1lc3BhY2VMZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gbm93IHRoYXQgd2UgaGF2ZSBhIG1hdGNoLCBsZXQncyB0cnkgdG8gY29udGludWUgb25cbiAgICAgIC8vIGhvd2V2ZXIsIGl0J3MgcG9zc2libGUgd2UgY291bGQgZmluZCBhIGxhdGVyIG1hdGNoXG4gICAgICAvLyBzbyBrZWVwIGEgcmVmZXJlbmNlIGluIGNhc2Ugd2UgaGF2ZSB0byBiYWNrdHJhY2tcbiAgICAgIGxhc3RXaWxkY2FyZE5hbWVzcGFjZSA9IG5hbWVzcGFjZUluZGV4O1xuICAgICAgbmFtZXNwYWNlSW5kZXgrKztcbiAgICAgIHBhdHRlcm5JbmRleCsrO1xuICAgICAgY29udGludWU7XG4gICAgfSBlbHNlIGlmIChwYXR0ZXJuW3BhdHRlcm5JbmRleF0gPT09IG5hbWVzcGFjZVtuYW1lc3BhY2VJbmRleF0pIHtcbiAgICAgIC8vIHNpbXBsZSBjYXNlOiBsaXRlcmFsIHBhdHRlcm4gbWF0Y2hlcyBzbyBrZWVwIGdvaW5nXG4gICAgICBwYXR0ZXJuSW5kZXgrKztcbiAgICAgIG5hbWVzcGFjZUluZGV4Kys7XG4gICAgfSBlbHNlIGlmIChsYXN0V2lsZGNhcmQgPj0gMCkge1xuICAgICAgLy8gc3BlY2lhbCBjYXNlOiB3ZSBkb24ndCBoYXZlIGEgbGl0ZXJhbCBtYXRjaCwgYnV0IHRoZXJlIGlzIGEgcHJldmlvdXMgd2lsZGNhcmRcbiAgICAgIC8vIHdoaWNoIHdlIGNhbiBiYWNrdHJhY2sgdG8gYW5kIHRyeSBoYXZpbmcgdGhlIHdpbGRjYXJkIGVhdCB0aGUgbWF0Y2ggaW5zdGVhZFxuICAgICAgcGF0dGVybkluZGV4ID0gbGFzdFdpbGRjYXJkICsgMTtcbiAgICAgIG5hbWVzcGFjZUluZGV4ID0gbGFzdFdpbGRjYXJkTmFtZXNwYWNlICsgMTtcbiAgICAgIC8vIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgbmFtZXNwYWNlIHdpdGhvdXQgYSBtYXRjaFxuICAgICAgaWYgKG5hbWVzcGFjZUluZGV4ID09PSBuYW1lc3BhY2VMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gc2ltaWxhciB0byB0aGUgcHJldmlvdXMgbG9naWMsIGxldCdzIGtlZXAgZ29pbmcgdW50aWwgd2UgZmluZCB0aGUgbmV4dCBsaXRlcmFsIG1hdGNoXG4gICAgICB3aGlsZSAobmFtZXNwYWNlW25hbWVzcGFjZUluZGV4XSAhPT0gcGF0dGVybltwYXR0ZXJuSW5kZXhdKSB7XG4gICAgICAgIG5hbWVzcGFjZUluZGV4Kys7XG4gICAgICAgIGlmIChuYW1lc3BhY2VJbmRleCA9PT0gbmFtZXNwYWNlTGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsYXN0V2lsZGNhcmROYW1lc3BhY2UgPSBuYW1lc3BhY2VJbmRleDtcbiAgICAgIG5hbWVzcGFjZUluZGV4Kys7XG4gICAgICBwYXR0ZXJuSW5kZXgrKztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmFtZXNwYWNlRG9uZSA9IG5hbWVzcGFjZUluZGV4ID09PSBuYW1lc3BhY2UubGVuZ3RoO1xuICBjb25zdCBwYXR0ZXJuRG9uZSA9IHBhdHRlcm5JbmRleCA9PT0gcGF0dGVybi5sZW5ndGg7XG4gIC8vIHRoaXMgaXMgdG8gZGV0ZWN0IHRoZSBjYXNlIG9mIGFuIHVubmVlZGVkIGZpbmFsIHdpbGRjYXJkXG4gIC8vIGUuZy4gdGhlIHBhdHRlcm4gYGFiKmAgc2hvdWxkIG1hdGNoIHRoZSBzdHJpbmcgYGFiYFxuICBjb25zdCB0cmFpbGluZ1dpbGRDYXJkID0gcGF0dGVybkluZGV4ID09PSBwYXR0ZXJuLmxlbmd0aCAtIDEgJiYgcGF0dGVybltwYXR0ZXJuSW5kZXhdID09PSBcIipcIjtcbiAgcmV0dXJuIG5hbWVzcGFjZURvbmUgJiYgKHBhdHRlcm5Eb25lIHx8IHRyYWlsaW5nV2lsZENhcmQpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlKCk6IHN0cmluZyB7XG4gIGNvbnN0IHJlc3VsdCA9IGVuYWJsZWRTdHJpbmcgfHwgXCJcIjtcbiAgZW5hYmxlKFwiXCIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWJ1Z2dlcihuYW1lc3BhY2U6IHN0cmluZyk6IERlYnVnZ2VyIHtcbiAgY29uc3QgbmV3RGVidWdnZXI6IERlYnVnZ2VyID0gT2JqZWN0LmFzc2lnbihkZWJ1Zywge1xuICAgIGVuYWJsZWQ6IGVuYWJsZWQobmFtZXNwYWNlKSxcbiAgICBkZXN0cm95LFxuICAgIGxvZzogZGVidWdPYmoubG9nLFxuICAgIG5hbWVzcGFjZSxcbiAgICBleHRlbmQsXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKCFuZXdEZWJ1Z2dlci5lbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGFyZ3NbMF0gPSBgJHtuYW1lc3BhY2V9ICR7YXJnc1swXX1gO1xuICAgIH1cbiAgICBuZXdEZWJ1Z2dlci5sb2coLi4uYXJncyk7XG4gIH1cblxuICBkZWJ1Z2dlcnMucHVzaChuZXdEZWJ1Z2dlcik7XG5cbiAgcmV0dXJuIG5ld0RlYnVnZ2VyO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95KHRoaXM6IERlYnVnZ2VyKTogYm9vbGVhbiB7XG4gIGNvbnN0IGluZGV4ID0gZGVidWdnZXJzLmluZGV4T2YodGhpcyk7XG4gIGlmIChpbmRleCA+PSAwKSB7XG4gICAgZGVidWdnZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBleHRlbmQodGhpczogRGVidWdnZXIsIG5hbWVzcGFjZTogc3RyaW5nKTogRGVidWdnZXIge1xuICBjb25zdCBuZXdEZWJ1Z2dlciA9IGNyZWF0ZURlYnVnZ2VyKGAke3RoaXMubmFtZXNwYWNlfToke25hbWVzcGFjZX1gKTtcbiAgbmV3RGVidWdnZXIubG9nID0gdGhpcy5sb2c7XG4gIHJldHVybiBuZXdEZWJ1Z2dlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVidWdPYmo7XG4iLCAiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCBkZWJ1ZyBmcm9tIFwiLi9kZWJ1Zy5qc1wiO1xuXG5pbXBvcnQgdHlwZSB7IERlYnVnZ2VyIH0gZnJvbSBcIi4vZGVidWcuanNcIjtcbmV4cG9ydCB0eXBlIHsgRGVidWdnZXIgfTtcblxuLyoqXG4gKiBUaGUgbG9nIGxldmVscyBzdXBwb3J0ZWQgYnkgdGhlIGxvZ2dlci5cbiAqIFRoZSBsb2cgbGV2ZWxzIGluIG9yZGVyIG9mIG1vc3QgdmVyYm9zZSB0byBsZWFzdCB2ZXJib3NlIGFyZTpcbiAqIC0gdmVyYm9zZVxuICogLSBpbmZvXG4gKiAtIHdhcm5pbmdcbiAqIC0gZXJyb3JcbiAqL1xuZXhwb3J0IHR5cGUgVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwgPSBcInZlcmJvc2VcIiB8IFwiaW5mb1wiIHwgXCJ3YXJuaW5nXCIgfCBcImVycm9yXCI7XG5cbi8qKlxuICogQSBUeXBlU3BlY1J1bnRpbWVDbGllbnRMb2dnZXIgaXMgYSBmdW5jdGlvbiB0aGF0IGNhbiBsb2cgdG8gYW4gYXBwcm9wcmlhdGUgc2V2ZXJpdHkgbGV2ZWwuXG4gKi9cbmV4cG9ydCB0eXBlIFR5cGVTcGVjUnVudGltZUNsaWVudExvZ2dlciA9IERlYnVnZ2VyO1xuXG4vKipcbiAqIERlZmluZXMgdGhlIG1ldGhvZHMgYXZhaWxhYmxlIG9uIHRoZSBTREstZmFjaW5nIGxvZ2dlci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUeXBlU3BlY1J1bnRpbWVMb2dnZXIge1xuICAvKipcbiAgICogVXNlZCBmb3IgZmFpbHVyZXMgdGhlIHByb2dyYW0gaXMgdW5saWtlbHkgdG8gcmVjb3ZlciBmcm9tLFxuICAgKiBzdWNoIGFzIE91dCBvZiBNZW1vcnkuXG4gICAqL1xuICBlcnJvcjogRGVidWdnZXI7XG4gIC8qKlxuICAgKiBVc2VkIHdoZW4gYSBmdW5jdGlvbiBmYWlscyB0byBwZXJmb3JtIGl0cyBpbnRlbmRlZCB0YXNrLlxuICAgKiBVc3VhbGx5IHRoaXMgbWVhbnMgdGhlIGZ1bmN0aW9uIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uLlxuICAgKiBOb3QgdXNlZCBmb3Igc2VsZi1oZWFsaW5nIGV2ZW50cyAoZS5nLiBhdXRvbWF0aWMgcmV0cnkpXG4gICAqL1xuICB3YXJuaW5nOiBEZWJ1Z2dlcjtcbiAgLyoqXG4gICAqIFVzZWQgd2hlbiBhIGZ1bmN0aW9uIG9wZXJhdGVzIG5vcm1hbGx5LlxuICAgKi9cbiAgaW5mbzogRGVidWdnZXI7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBkZXRhaWxlZCB0cm91Ymxlc2hvb3Rpbmcgc2NlbmFyaW9zLiBUaGlzIGlzXG4gICAqIGludGVuZGVkIGZvciB1c2UgYnkgZGV2ZWxvcGVycyAvIHN5c3RlbSBhZG1pbmlzdHJhdG9yc1xuICAgKiBmb3IgZGlhZ25vc2luZyBzcGVjaWZpYyBmYWlsdXJlcy5cbiAgICovXG4gIHZlcmJvc2U6IERlYnVnZ2VyO1xufVxuXG4vKipcbiAqIHRvZG8gZG9jXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9nZ2VyQ29udGV4dCB7XG4gIC8qKlxuICAgKiBJbW1lZGlhdGVseSBlbmFibGVzIGxvZ2dpbmcgYXQgdGhlIHNwZWNpZmllZCBsb2cgbGV2ZWwuIElmIG5vIGxldmVsIGlzIHNwZWNpZmllZCwgbG9nZ2luZyBpcyBkaXNhYmxlZC5cbiAgICogQHBhcmFtIGxldmVsIC0gVGhlIGxvZyBsZXZlbCB0byBlbmFibGUgZm9yIGxvZ2dpbmcuXG4gICAqIE9wdGlvbnMgZnJvbSBtb3N0IHZlcmJvc2UgdG8gbGVhc3QgdmVyYm9zZSBhcmU6XG4gICAqIC0gdmVyYm9zZVxuICAgKiAtIGluZm9cbiAgICogLSB3YXJuaW5nXG4gICAqIC0gZXJyb3JcbiAgICovXG4gIHNldExvZ0xldmVsKGxvZ0xldmVsPzogVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnRseSBzcGVjaWZpZWQgbG9nIGxldmVsLlxuICAgKi9cbiAgZ2V0TG9nTGV2ZWwoKTogVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsb2dnZXIgZm9yIHVzZSBieSB0aGUgU0RLcyB0aGF0IGluaGVyaXRzIGZyb20gYFR5cGVTcGVjUnVudGltZUxvZ2dlcmAuXG4gICAqIEBwYXJhbSBuYW1lc3BhY2UgLSBUaGUgbmFtZSBvZiB0aGUgU0RLIHBhY2thZ2UuXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNyZWF0ZUNsaWVudExvZ2dlcihuYW1lc3BhY2U6IHN0cmluZyk6IFR5cGVTcGVjUnVudGltZUxvZ2dlcjtcblxuICAvKipcbiAgICogVGhlIFR5cGVTcGVjUnVudGltZUNsaWVudExvZ2dlciBwcm92aWRlcyBhIG1lY2hhbmlzbSBmb3Igb3ZlcnJpZGluZyB3aGVyZSBsb2dzIGFyZSBvdXRwdXQgdG8uXG4gICAqIEJ5IGRlZmF1bHQsIGxvZ3MgYXJlIHNlbnQgdG8gc3RkZXJyLlxuICAgKiBPdmVycmlkZSB0aGUgYGxvZ2AgbWV0aG9kIHRvIHJlZGlyZWN0IGxvZ3MgdG8gYW5vdGhlciBsb2NhdGlvbi5cbiAgICovXG4gIGxvZ2dlcjogVHlwZVNwZWNSdW50aW1lQ2xpZW50TG9nZ2VyO1xufVxuXG4vKipcbiAqIE9wdGlvbiBmb3IgY3JlYXRpbmcgYSBUeXBlU3BlY1J1bnRpbWVMb2dnZXJDb250ZXh0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUxvZ2dlckNvbnRleHRPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSB0byBjaGVjayBmb3IgdGhlIGxvZyBsZXZlbC5cbiAgICovXG4gIGxvZ0xldmVsRW52VmFyTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZXNwYWNlIG9mIHRoZSBsb2dnZXIuXG4gICAqL1xuICBuYW1lc3BhY2U6IHN0cmluZztcbn1cblxuY29uc3QgVFlQRVNQRUNfUlVOVElNRV9MT0dfTEVWRUxTID0gW1widmVyYm9zZVwiLCBcImluZm9cIiwgXCJ3YXJuaW5nXCIsIFwiZXJyb3JcIl07XG5cbnR5cGUgRGVidWdnZXJXaXRoTG9nTGV2ZWwgPSBEZWJ1Z2dlciAmIHsgbGV2ZWw6IFR5cGVTcGVjUnVudGltZUxvZ0xldmVsIH07XG5cbmNvbnN0IGxldmVsTWFwID0ge1xuICB2ZXJib3NlOiA0MDAsXG4gIGluZm86IDMwMCxcbiAgd2FybmluZzogMjAwLFxuICBlcnJvcjogMTAwLFxufTtcblxuZnVuY3Rpb24gcGF0Y2hMb2dNZXRob2QoXG4gIHBhcmVudDogVHlwZVNwZWNSdW50aW1lQ2xpZW50TG9nZ2VyLFxuICBjaGlsZDogVHlwZVNwZWNSdW50aW1lQ2xpZW50TG9nZ2VyIHwgRGVidWdnZXJXaXRoTG9nTGV2ZWwsXG4pOiB2b2lkIHtcbiAgY2hpbGQubG9nID0gKC4uLmFyZ3MpID0+IHtcbiAgICBwYXJlbnQubG9nKC4uLmFyZ3MpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpc1R5cGVTcGVjUnVudGltZUxvZ0xldmVsKGxldmVsOiBzdHJpbmcpOiBsZXZlbCBpcyBUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbCB7XG4gIHJldHVybiBUWVBFU1BFQ19SVU5USU1FX0xPR19MRVZFTFMuaW5jbHVkZXMobGV2ZWwpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBsb2dnZXIgY29udGV4dCBiYXNlIG9uIHRoZSBwcm92aWRlZCBvcHRpb25zLlxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBmb3IgY3JlYXRpbmcgYSBsb2dnZXIgY29udGV4dC5cbiAqIEByZXR1cm5zIFRoZSBsb2dnZXIgY29udGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvZ2dlckNvbnRleHQob3B0aW9uczogQ3JlYXRlTG9nZ2VyQ29udGV4dE9wdGlvbnMpOiBMb2dnZXJDb250ZXh0IHtcbiAgY29uc3QgcmVnaXN0ZXJlZExvZ2dlcnMgPSBuZXcgU2V0PERlYnVnZ2VyV2l0aExvZ0xldmVsPigpO1xuICBjb25zdCBsb2dMZXZlbEZyb21FbnYgPVxuICAgICh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudltvcHRpb25zLmxvZ0xldmVsRW52VmFyTmFtZV0pIHx8XG4gICAgdW5kZWZpbmVkO1xuXG4gIGxldCBsb2dMZXZlbDogVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3QgY2xpZW50TG9nZ2VyOiBUeXBlU3BlY1J1bnRpbWVDbGllbnRMb2dnZXIgPSBkZWJ1ZyhvcHRpb25zLm5hbWVzcGFjZSk7XG4gIGNsaWVudExvZ2dlci5sb2cgPSAoLi4uYXJncykgPT4ge1xuICAgIGRlYnVnLmxvZyguLi5hcmdzKTtcbiAgfTtcblxuICBmdW5jdGlvbiBjb250ZXh0U2V0TG9nTGV2ZWwobGV2ZWw/OiBUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbCk6IHZvaWQge1xuICAgIGlmIChsZXZlbCAmJiAhaXNUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbChsZXZlbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFVua25vd24gbG9nIGxldmVsICcke2xldmVsfScuIEFjY2VwdGFibGUgdmFsdWVzOiAke1RZUEVTUEVDX1JVTlRJTUVfTE9HX0xFVkVMUy5qb2luKFwiLFwiKX1gLFxuICAgICAgKTtcbiAgICB9XG4gICAgbG9nTGV2ZWwgPSBsZXZlbDtcblxuICAgIGNvbnN0IGVuYWJsZWROYW1lc3BhY2VzID0gW107XG4gICAgZm9yIChjb25zdCBsb2dnZXIgb2YgcmVnaXN0ZXJlZExvZ2dlcnMpIHtcbiAgICAgIGlmIChzaG91bGRFbmFibGUobG9nZ2VyKSkge1xuICAgICAgICBlbmFibGVkTmFtZXNwYWNlcy5wdXNoKGxvZ2dlci5uYW1lc3BhY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRlYnVnLmVuYWJsZShlbmFibGVkTmFtZXNwYWNlcy5qb2luKFwiLFwiKSk7XG4gIH1cblxuICBpZiAobG9nTGV2ZWxGcm9tRW52KSB7XG4gICAgLy8gYXZvaWQgY2FsbGluZyBzZXRMb2dMZXZlbCBiZWNhdXNlIHdlIGRvbid0IHdhbnQgYSBtaXMtc2V0IGVudmlyb25tZW50IHZhcmlhYmxlIHRvIGNyYXNoXG4gICAgaWYgKGlzVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwobG9nTGV2ZWxGcm9tRW52KSkge1xuICAgICAgY29udGV4dFNldExvZ0xldmVsKGxvZ0xldmVsRnJvbUVudik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGAke29wdGlvbnMubG9nTGV2ZWxFbnZWYXJOYW1lfSBzZXQgdG8gdW5rbm93biBsb2cgbGV2ZWwgJyR7bG9nTGV2ZWxGcm9tRW52fSc7IGxvZ2dpbmcgaXMgbm90IGVuYWJsZWQuIEFjY2VwdGFibGUgdmFsdWVzOiAke1RZUEVTUEVDX1JVTlRJTUVfTE9HX0xFVkVMUy5qb2luKFxuICAgICAgICAgIFwiLCBcIixcbiAgICAgICAgKX0uYCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkRW5hYmxlKGxvZ2dlcjogRGVidWdnZXJXaXRoTG9nTGV2ZWwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQm9vbGVhbihsb2dMZXZlbCAmJiBsZXZlbE1hcFtsb2dnZXIubGV2ZWxdIDw9IGxldmVsTWFwW2xvZ0xldmVsXSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMb2dnZXIoXG4gICAgcGFyZW50OiBUeXBlU3BlY1J1bnRpbWVDbGllbnRMb2dnZXIsXG4gICAgbGV2ZWw6IFR5cGVTcGVjUnVudGltZUxvZ0xldmVsLFxuICApOiBEZWJ1Z2dlcldpdGhMb2dMZXZlbCB7XG4gICAgY29uc3QgbG9nZ2VyOiBEZWJ1Z2dlcldpdGhMb2dMZXZlbCA9IE9iamVjdC5hc3NpZ24ocGFyZW50LmV4dGVuZChsZXZlbCksIHtcbiAgICAgIGxldmVsLFxuICAgIH0pO1xuXG4gICAgcGF0Y2hMb2dNZXRob2QocGFyZW50LCBsb2dnZXIpO1xuXG4gICAgaWYgKHNob3VsZEVuYWJsZShsb2dnZXIpKSB7XG4gICAgICBjb25zdCBlbmFibGVkTmFtZXNwYWNlcyA9IGRlYnVnLmRpc2FibGUoKTtcbiAgICAgIGRlYnVnLmVuYWJsZShlbmFibGVkTmFtZXNwYWNlcyArIFwiLFwiICsgbG9nZ2VyLm5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJlZExvZ2dlcnMuYWRkKGxvZ2dlcik7XG5cbiAgICByZXR1cm4gbG9nZ2VyO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udGV4dEdldExvZ0xldmVsKCk6IFR5cGVTcGVjUnVudGltZUxvZ0xldmVsIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gbG9nTGV2ZWw7XG4gIH1cblxuICBmdW5jdGlvbiBjb250ZXh0Q3JlYXRlQ2xpZW50TG9nZ2VyKG5hbWVzcGFjZTogc3RyaW5nKTogVHlwZVNwZWNSdW50aW1lTG9nZ2VyIHtcbiAgICBjb25zdCBjbGllbnRSb290TG9nZ2VyOiBUeXBlU3BlY1J1bnRpbWVDbGllbnRMb2dnZXIgPSBjbGllbnRMb2dnZXIuZXh0ZW5kKG5hbWVzcGFjZSk7XG4gICAgcGF0Y2hMb2dNZXRob2QoY2xpZW50TG9nZ2VyLCBjbGllbnRSb290TG9nZ2VyKTtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IGNyZWF0ZUxvZ2dlcihjbGllbnRSb290TG9nZ2VyLCBcImVycm9yXCIpLFxuICAgICAgd2FybmluZzogY3JlYXRlTG9nZ2VyKGNsaWVudFJvb3RMb2dnZXIsIFwid2FybmluZ1wiKSxcbiAgICAgIGluZm86IGNyZWF0ZUxvZ2dlcihjbGllbnRSb290TG9nZ2VyLCBcImluZm9cIiksXG4gICAgICB2ZXJib3NlOiBjcmVhdGVMb2dnZXIoY2xpZW50Um9vdExvZ2dlciwgXCJ2ZXJib3NlXCIpLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNldExvZ0xldmVsOiBjb250ZXh0U2V0TG9nTGV2ZWwsXG4gICAgZ2V0TG9nTGV2ZWw6IGNvbnRleHRHZXRMb2dMZXZlbCxcbiAgICBjcmVhdGVDbGllbnRMb2dnZXI6IGNvbnRleHRDcmVhdGVDbGllbnRMb2dnZXIsXG4gICAgbG9nZ2VyOiBjbGllbnRMb2dnZXIsXG4gIH07XG59XG5cbmNvbnN0IGNvbnRleHQgPSBjcmVhdGVMb2dnZXJDb250ZXh0KHtcbiAgbG9nTGV2ZWxFbnZWYXJOYW1lOiBcIlRZUEVTUEVDX1JVTlRJTUVfTE9HX0xFVkVMXCIsXG4gIG5hbWVzcGFjZTogXCJ0eXBlU3BlY1J1bnRpbWVcIixcbn0pO1xuXG4vKipcbiAqIEltbWVkaWF0ZWx5IGVuYWJsZXMgbG9nZ2luZyBhdCB0aGUgc3BlY2lmaWVkIGxvZyBsZXZlbC4gSWYgbm8gbGV2ZWwgaXMgc3BlY2lmaWVkLCBsb2dnaW5nIGlzIGRpc2FibGVkLlxuICogQHBhcmFtIGxldmVsIC0gVGhlIGxvZyBsZXZlbCB0byBlbmFibGUgZm9yIGxvZ2dpbmcuXG4gKiBPcHRpb25zIGZyb20gbW9zdCB2ZXJib3NlIHRvIGxlYXN0IHZlcmJvc2UgYXJlOlxuICogLSB2ZXJib3NlXG4gKiAtIGluZm9cbiAqIC0gd2FybmluZ1xuICogLSBlcnJvclxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlZGVjbGFyZVxuZXhwb3J0IGNvbnN0IFR5cGVTcGVjUnVudGltZUxvZ2dlcjogVHlwZVNwZWNSdW50aW1lQ2xpZW50TG9nZ2VyID0gY29udGV4dC5sb2dnZXI7XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBjdXJyZW50bHkgc3BlY2lmaWVkIGxvZyBsZXZlbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldExvZ0xldmVsKGxvZ0xldmVsPzogVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwpOiB2b2lkIHtcbiAgY29udGV4dC5zZXRMb2dMZXZlbChsb2dMZXZlbCk7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBjdXJyZW50bHkgc3BlY2lmaWVkIGxvZyBsZXZlbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ0xldmVsKCk6IFR5cGVTcGVjUnVudGltZUxvZ0xldmVsIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGNvbnRleHQuZ2V0TG9nTGV2ZWwoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbG9nZ2VyIGZvciB1c2UgYnkgdGhlIFNES3MgdGhhdCBpbmhlcml0cyBmcm9tIGBUeXBlU3BlY1J1bnRpbWVMb2dnZXJgLlxuICogQHBhcmFtIG5hbWVzcGFjZSAtIFRoZSBuYW1lIG9mIHRoZSBTREsgcGFja2FnZS5cbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNsaWVudExvZ2dlcihuYW1lc3BhY2U6IHN0cmluZyk6IFR5cGVTcGVjUnVudGltZUxvZ2dlciB7XG4gIHJldHVybiBjb250ZXh0LmNyZWF0ZUNsaWVudExvZ2dlcihuYW1lc3BhY2UpO1xufVxuIiwgIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBjcmVhdGVMb2dnZXJDb250ZXh0IH0gZnJvbSBcIkB0eXBlc3BlYy90cy1odHRwLXJ1bnRpbWUvaW50ZXJuYWwvbG9nZ2VyXCI7XG5cbmNvbnN0IGNvbnRleHQgPSBjcmVhdGVMb2dnZXJDb250ZXh0KHtcbiAgbG9nTGV2ZWxFbnZWYXJOYW1lOiBcIkFaVVJFX0xPR19MRVZFTFwiLFxuICBuYW1lc3BhY2U6IFwiYXp1cmVcIixcbn0pO1xuXG4vKipcbiAqIFRoZSBBenVyZUxvZ2dlciBwcm92aWRlcyBhIG1lY2hhbmlzbSBmb3Igb3ZlcnJpZGluZyB3aGVyZSBsb2dzIGFyZSBvdXRwdXQgdG8uXG4gKiBCeSBkZWZhdWx0LCBsb2dzIGFyZSBzZW50IHRvIHN0ZGVyci5cbiAqIE92ZXJyaWRlIHRoZSBgbG9nYCBtZXRob2QgdG8gcmVkaXJlY3QgbG9ncyB0byBhbm90aGVyIGxvY2F0aW9uLlxuICovXG5leHBvcnQgY29uc3QgQXp1cmVMb2dnZXI6IEF6dXJlQ2xpZW50TG9nZ2VyID0gY29udGV4dC5sb2dnZXI7XG5cbi8qKlxuICogSW1tZWRpYXRlbHkgZW5hYmxlcyBsb2dnaW5nIGF0IHRoZSBzcGVjaWZpZWQgbG9nIGxldmVsLiBJZiBubyBsZXZlbCBpcyBzcGVjaWZpZWQsIGxvZ2dpbmcgaXMgZGlzYWJsZWQuXG4gKiBAcGFyYW0gbGV2ZWwgLSBUaGUgbG9nIGxldmVsIHRvIGVuYWJsZSBmb3IgbG9nZ2luZy5cbiAqIE9wdGlvbnMgZnJvbSBtb3N0IHZlcmJvc2UgdG8gbGVhc3QgdmVyYm9zZSBhcmU6XG4gKiAtIHZlcmJvc2VcbiAqIC0gaW5mb1xuICogLSB3YXJuaW5nXG4gKiAtIGVycm9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbD86IEF6dXJlTG9nTGV2ZWwpOiB2b2lkIHtcbiAgY29udGV4dC5zZXRMb2dMZXZlbChsZXZlbCk7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBjdXJyZW50bHkgc3BlY2lmaWVkIGxvZyBsZXZlbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ0xldmVsKCk6IEF6dXJlTG9nTGV2ZWwgfCB1bmRlZmluZWQge1xuICByZXR1cm4gY29udGV4dC5nZXRMb2dMZXZlbCgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBsb2dnZXIgZm9yIHVzZSBieSB0aGUgQXp1cmUgU0RLcyB0aGF0IGluaGVyaXRzIGZyb20gYEF6dXJlTG9nZ2VyYC5cbiAqIEBwYXJhbSBuYW1lc3BhY2UgLSBUaGUgbmFtZSBvZiB0aGUgU0RLIHBhY2thZ2UuXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDbGllbnRMb2dnZXIobmFtZXNwYWNlOiBzdHJpbmcpOiBBenVyZUxvZ2dlciB7XG4gIHJldHVybiBjb250ZXh0LmNyZWF0ZUNsaWVudExvZ2dlcihuYW1lc3BhY2UpO1xufVxuXG4vKipcbiAqIEEgbG9nIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIGR5bmFtaWNhbGx5IGVuYWJsZWQgYW5kIHJlZGlyZWN0ZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVidWdnZXIge1xuICAvKipcbiAgICogTG9ncyB0aGUgZ2l2ZW4gYXJndW1lbnRzIHRvIHRoZSBgbG9nYCBtZXRob2QuXG4gICAqL1xuICAoLi4uYXJnczogYW55W10pOiB2b2lkO1xuICAvKipcbiAgICogVHJ1ZSBpZiB0aGlzIGxvZ2dlciBpcyBhY3RpdmUgYW5kIGxvZ2dpbmcuXG4gICAqL1xuICBlbmFibGVkOiBib29sZWFuO1xuICAvKipcbiAgICogVXNlZCB0byBjbGVhbnVwL3JlbW92ZSB0aGlzIGxvZ2dlci5cbiAgICovXG4gIGRlc3Ryb3k6ICgpID0+IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBsb2cgbWV0aG9kLiBDYW4gYmUgb3ZlcnJpZGRlbiB0byByZWRpcmVjdCBvdXRwdXQuXG4gICAqL1xuICBsb2c6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIFRoZSBuYW1lc3BhY2Ugb2YgdGhpcyBsb2dnZXIuXG4gICAqL1xuICBuYW1lc3BhY2U6IHN0cmluZztcbiAgLyoqXG4gICAqIEV4dGVuZHMgdGhpcyBsb2dnZXIgd2l0aCBhIGNoaWxkIG5hbWVzcGFjZS5cbiAgICogTmFtZXNwYWNlcyBhcmUgc2VwYXJhdGVkIHdpdGggYSAnOicgY2hhcmFjdGVyLlxuICAgKi9cbiAgZXh0ZW5kOiAobmFtZXNwYWNlOiBzdHJpbmcpID0+IERlYnVnZ2VyO1xufVxuXG4vKipcbiAqIFRoZSBsb2cgbGV2ZWxzIHN1cHBvcnRlZCBieSB0aGUgbG9nZ2VyLlxuICogVGhlIGxvZyBsZXZlbHMgaW4gb3JkZXIgb2YgbW9zdCB2ZXJib3NlIHRvIGxlYXN0IHZlcmJvc2UgYXJlOlxuICogLSB2ZXJib3NlXG4gKiAtIGluZm9cbiAqIC0gd2FybmluZ1xuICogLSBlcnJvclxuICovXG5leHBvcnQgdHlwZSBBenVyZUxvZ0xldmVsID0gXCJ2ZXJib3NlXCIgfCBcImluZm9cIiB8IFwid2FybmluZ1wiIHwgXCJlcnJvclwiO1xuXG4vKipcbiAqIEFuIEF6dXJlQ2xpZW50TG9nZ2VyIGlzIGEgZnVuY3Rpb24gdGhhdCBjYW4gbG9nIHRvIGFuIGFwcHJvcHJpYXRlIHNldmVyaXR5IGxldmVsLlxuICovXG5leHBvcnQgdHlwZSBBenVyZUNsaWVudExvZ2dlciA9IERlYnVnZ2VyO1xuXG4vKipcbiAqIERlZmluZXMgdGhlIG1ldGhvZHMgYXZhaWxhYmxlIG9uIHRoZSBTREstZmFjaW5nIGxvZ2dlci5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZWRlY2xhcmVcbmV4cG9ydCBpbnRlcmZhY2UgQXp1cmVMb2dnZXIge1xuICAvKipcbiAgICogVXNlZCBmb3IgZmFpbHVyZXMgdGhlIHByb2dyYW0gaXMgdW5saWtlbHkgdG8gcmVjb3ZlciBmcm9tLFxuICAgKiBzdWNoIGFzIE91dCBvZiBNZW1vcnkuXG4gICAqL1xuICBlcnJvcjogRGVidWdnZXI7XG4gIC8qKlxuICAgKiBVc2VkIHdoZW4gYSBmdW5jdGlvbiBmYWlscyB0byBwZXJmb3JtIGl0cyBpbnRlbmRlZCB0YXNrLlxuICAgKiBVc3VhbGx5IHRoaXMgbWVhbnMgdGhlIGZ1bmN0aW9uIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uLlxuICAgKiBOb3QgdXNlZCBmb3Igc2VsZi1oZWFsaW5nIGV2ZW50cyAoZS5nLiBhdXRvbWF0aWMgcmV0cnkpXG4gICAqL1xuICB3YXJuaW5nOiBEZWJ1Z2dlcjtcbiAgLyoqXG4gICAqIFVzZWQgd2hlbiBhIGZ1bmN0aW9uIG9wZXJhdGVzIG5vcm1hbGx5LlxuICAgKi9cbiAgaW5mbzogRGVidWdnZXI7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBkZXRhaWxlZCB0cm91Ymxlc2hvb3Rpbmcgc2NlbmFyaW9zLiBUaGlzIGlzXG4gICAqIGludGVuZGVkIGZvciB1c2UgYnkgZGV2ZWxvcGVycyAvIHN5c3RlbSBhZG1pbmlzdHJhdG9yc1xuICAgKiBmb3IgZGlhZ25vc2luZyBzcGVjaWZpYyBmYWlsdXJlcy5cbiAgICovXG4gIHZlcmJvc2U6IERlYnVnZ2VyO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNsaWVudExvZ2dlciB9IGZyb20gXCJAYXp1cmUvbG9nZ2VyXCI7XG5jb25zdCBsb2dnZXIgPSBjcmVhdGVDbGllbnRMb2dnZXIoXCJ3ZWItcHVic3ViLWNsaWVudFwiKTtcbmV4cG9ydCB7XG4gIGxvZ2dlclxufTtcbiIsICJpbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiYnVmZmVyXCI7XG5mdW5jdGlvbiBwYXJzZU1lc3NhZ2VzKGlucHV0KSB7XG4gIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0IGZvciBKU09OIGh1YiBwcm90b2NvbC4gRXhwZWN0ZWQgYSBzdHJpbmcuXCIpO1xuICB9XG4gIGlmICghaW5wdXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBpbnB1dFwiKTtcbiAgfVxuICBjb25zdCBwYXJzZWRNZXNzYWdlID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gIGNvbnN0IHR5cGVkTWVzc2FnZSA9IHBhcnNlZE1lc3NhZ2U7XG4gIGxldCByZXR1cm5NZXNzYWdlO1xuICBpZiAodHlwZWRNZXNzYWdlLnR5cGUgPT09IFwic3lzdGVtXCIpIHtcbiAgICBpZiAodHlwZWRNZXNzYWdlLmV2ZW50ID09PSBcImNvbm5lY3RlZFwiKSB7XG4gICAgICByZXR1cm5NZXNzYWdlID0geyAuLi5wYXJzZWRNZXNzYWdlLCBraW5kOiBcImNvbm5lY3RlZFwiIH07XG4gICAgfSBlbHNlIGlmICh0eXBlZE1lc3NhZ2UuZXZlbnQgPT09IFwiZGlzY29ubmVjdGVkXCIpIHtcbiAgICAgIHJldHVybk1lc3NhZ2UgPSB7IC4uLnBhcnNlZE1lc3NhZ2UsIGtpbmQ6IFwiZGlzY29ubmVjdGVkXCIgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVkTWVzc2FnZS50eXBlID09PSBcIm1lc3NhZ2VcIikge1xuICAgIGlmICh0eXBlZE1lc3NhZ2UuZnJvbSA9PT0gXCJncm91cFwiKSB7XG4gICAgICBjb25zdCBkYXRhID0gcGFyc2VQYXlsb2FkKHBhcnNlZE1lc3NhZ2UuZGF0YSwgcGFyc2VkTWVzc2FnZS5kYXRhVHlwZSk7XG4gICAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybk1lc3NhZ2UgPSB7IC4uLnBhcnNlZE1lc3NhZ2UsIGRhdGEsIGtpbmQ6IFwiZ3JvdXBEYXRhXCIgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVkTWVzc2FnZS5mcm9tID09PSBcInNlcnZlclwiKSB7XG4gICAgICBjb25zdCBkYXRhID0gcGFyc2VQYXlsb2FkKHBhcnNlZE1lc3NhZ2UuZGF0YSwgcGFyc2VkTWVzc2FnZS5kYXRhVHlwZSk7XG4gICAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybk1lc3NhZ2UgPSB7XG4gICAgICAgIC4uLnBhcnNlZE1lc3NhZ2UsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGtpbmQ6IFwic2VydmVyRGF0YVwiXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZWRNZXNzYWdlLnR5cGUgPT09IFwiYWNrXCIpIHtcbiAgICByZXR1cm5NZXNzYWdlID0geyAuLi5wYXJzZWRNZXNzYWdlLCBraW5kOiBcImFja1wiIH07XG4gIH0gZWxzZSBpZiAodHlwZWRNZXNzYWdlLnR5cGUgPT09IFwiaW52b2tlUmVzcG9uc2VcIikge1xuICAgIGxldCBkYXRhO1xuICAgIGlmIChwYXJzZWRNZXNzYWdlLmRhdGFUeXBlICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnNlZERhdGEgPSBwYXJzZVBheWxvYWQocGFyc2VkTWVzc2FnZS5kYXRhLCBwYXJzZWRNZXNzYWdlLmRhdGFUeXBlKTtcbiAgICAgIGlmIChwYXJzZWREYXRhID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgZGF0YSA9IHBhcnNlZERhdGE7XG4gICAgfVxuICAgIHJldHVybk1lc3NhZ2UgPSB7XG4gICAgICBraW5kOiBcImludm9rZVJlc3BvbnNlXCIsXG4gICAgICBpbnZvY2F0aW9uSWQ6IHBhcnNlZE1lc3NhZ2UuaW52b2NhdGlvbklkLFxuICAgICAgc3VjY2VzczogcGFyc2VkTWVzc2FnZS5zdWNjZXNzLFxuICAgICAgZGF0YVR5cGU6IHBhcnNlZE1lc3NhZ2UuZGF0YVR5cGUsXG4gICAgICBkYXRhLFxuICAgICAgZXJyb3I6IHBhcnNlZE1lc3NhZ2UuZXJyb3JcbiAgICB9O1xuICB9IGVsc2UgaWYgKHR5cGVkTWVzc2FnZS50eXBlID09PSBcImNhbmNlbEludm9jYXRpb25cIikge1xuICAgIHJldHVybk1lc3NhZ2UgPSB7XG4gICAgICAuLi5wYXJzZWRNZXNzYWdlLFxuICAgICAga2luZDogXCJjYW5jZWxJbnZvY2F0aW9uXCJcbiAgICB9O1xuICB9IGVsc2UgaWYgKHR5cGVkTWVzc2FnZS50eXBlID09PSBcInBvbmdcIikge1xuICAgIHJldHVybk1lc3NhZ2UgPSB7IC4uLnBhcnNlZE1lc3NhZ2UsIGtpbmQ6IFwicG9uZ1wiIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHJldHVybk1lc3NhZ2U7XG59XG5mdW5jdGlvbiB3cml0ZU1lc3NhZ2UobWVzc2FnZSkge1xuICBsZXQgZGF0YTtcbiAgc3dpdGNoIChtZXNzYWdlLmtpbmQpIHtcbiAgICBjYXNlIFwiam9pbkdyb3VwXCI6IHtcbiAgICAgIGRhdGEgPSB7IHR5cGU6IFwiam9pbkdyb3VwXCIsIGdyb3VwOiBtZXNzYWdlLmdyb3VwLCBhY2tJZDogbWVzc2FnZS5hY2tJZCB9O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgXCJsZWF2ZUdyb3VwXCI6IHtcbiAgICAgIGRhdGEgPSB7IHR5cGU6IFwibGVhdmVHcm91cFwiLCBncm91cDogbWVzc2FnZS5ncm91cCwgYWNrSWQ6IG1lc3NhZ2UuYWNrSWQgfTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwic2VuZEV2ZW50XCI6IHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIHR5cGU6IFwiZXZlbnRcIixcbiAgICAgICAgZXZlbnQ6IG1lc3NhZ2UuZXZlbnQsXG4gICAgICAgIGFja0lkOiBtZXNzYWdlLmFja0lkLFxuICAgICAgICBkYXRhVHlwZTogbWVzc2FnZS5kYXRhVHlwZSxcbiAgICAgICAgZGF0YTogZ2V0UGF5bG9hZChtZXNzYWdlLmRhdGEsIG1lc3NhZ2UuZGF0YVR5cGUpXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgXCJzZW5kVG9Hcm91cFwiOiB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICB0eXBlOiBcInNlbmRUb0dyb3VwXCIsXG4gICAgICAgIGdyb3VwOiBtZXNzYWdlLmdyb3VwLFxuICAgICAgICBhY2tJZDogbWVzc2FnZS5hY2tJZCxcbiAgICAgICAgZGF0YVR5cGU6IG1lc3NhZ2UuZGF0YVR5cGUsXG4gICAgICAgIGRhdGE6IGdldFBheWxvYWQobWVzc2FnZS5kYXRhLCBtZXNzYWdlLmRhdGFUeXBlKSxcbiAgICAgICAgbm9FY2hvOiBtZXNzYWdlLm5vRWNob1xuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwic2VxdWVuY2VBY2tcIjoge1xuICAgICAgZGF0YSA9IHsgdHlwZTogXCJzZXF1ZW5jZUFja1wiLCBzZXF1ZW5jZUlkOiBtZXNzYWdlLnNlcXVlbmNlSWQgfTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiaW52b2tlXCI6IHtcbiAgICAgIGNvbnN0IGludm9rZVBheWxvYWQgPSB7XG4gICAgICAgIHR5cGU6IFwiaW52b2tlXCIsXG4gICAgICAgIGludm9jYXRpb25JZDogbWVzc2FnZS5pbnZvY2F0aW9uSWQsXG4gICAgICAgIHRhcmdldDogbWVzc2FnZS50YXJnZXQsXG4gICAgICAgIGV2ZW50OiBtZXNzYWdlLmV2ZW50XG4gICAgICB9O1xuICAgICAgaWYgKG1lc3NhZ2UuZGF0YVR5cGUgIT0gbnVsbCAmJiBtZXNzYWdlLmRhdGEgIT0gbnVsbCkge1xuICAgICAgICBpbnZva2VQYXlsb2FkLmRhdGFUeXBlID0gbWVzc2FnZS5kYXRhVHlwZTtcbiAgICAgICAgaW52b2tlUGF5bG9hZC5kYXRhID0gZ2V0UGF5bG9hZChtZXNzYWdlLmRhdGEsIG1lc3NhZ2UuZGF0YVR5cGUpO1xuICAgICAgfVxuICAgICAgZGF0YSA9IGludm9rZVBheWxvYWQ7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBcImludm9rZVJlc3BvbnNlXCI6IHtcbiAgICAgIGNvbnN0IGludm9rZVJlc3BvbnNlID0ge1xuICAgICAgICB0eXBlOiBcImludm9rZVJlc3BvbnNlXCIsXG4gICAgICAgIGludm9jYXRpb25JZDogbWVzc2FnZS5pbnZvY2F0aW9uSWQsXG4gICAgICAgIHN1Y2Nlc3M6IG1lc3NhZ2Uuc3VjY2VzcyxcbiAgICAgICAgZXJyb3I6IG1lc3NhZ2UuZXJyb3JcbiAgICAgIH07XG4gICAgICBpZiAobWVzc2FnZS5kYXRhVHlwZSAhPSBudWxsICYmIG1lc3NhZ2UuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgIGludm9rZVJlc3BvbnNlLmRhdGFUeXBlID0gbWVzc2FnZS5kYXRhVHlwZTtcbiAgICAgICAgaW52b2tlUmVzcG9uc2UuZGF0YSA9IGdldFBheWxvYWQobWVzc2FnZS5kYXRhLCBtZXNzYWdlLmRhdGFUeXBlKTtcbiAgICAgIH1cbiAgICAgIGRhdGEgPSBpbnZva2VSZXNwb25zZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiY2FuY2VsSW52b2NhdGlvblwiOiB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICB0eXBlOiBcImNhbmNlbEludm9jYXRpb25cIixcbiAgICAgICAgaW52b2NhdGlvbklkOiBtZXNzYWdlLmludm9jYXRpb25JZFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwicGluZ1wiOiB7XG4gICAgICBkYXRhID0geyB0eXBlOiBcInBpbmdcIiB9O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgdHlwZTogJHttZXNzYWdlLmtpbmR9YCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbn1cbmZ1bmN0aW9uIGdldFBheWxvYWQoZGF0YSwgZGF0YVR5cGUpIHtcbiAgc3dpdGNoIChkYXRhVHlwZSkge1xuICAgIGNhc2UgXCJ0ZXh0XCI6IHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWVzc2FnZSBtdXN0IGJlIGEgc3RyaW5nLlwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBjYXNlIFwianNvblwiOiB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgY2FzZSBcImJpbmFyeVwiOlxuICAgIGNhc2UgXCJwcm90b2J1ZlwiOiB7XG4gICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShkYXRhKS50b1N0cmluZyhcImJhc2U2NFwiKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNZXNzYWdlIG11c3QgYmUgYSBBcnJheUJ1ZmZlclwiKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlUGF5bG9hZChkYXRhLCBkYXRhVHlwZSkge1xuICBpZiAoZGF0YVR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWVzc2FnZSBtdXN0IGJlIGEgc3RyaW5nIHdoZW4gZGF0YVR5cGUgaXMgdGV4dFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09IFwianNvblwiKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09IFwiYmluYXJ5XCIgfHwgZGF0YVR5cGUgPT09IFwicHJvdG9idWZcIikge1xuICAgIGNvbnN0IGJ1ZiA9IEJ1ZmZlci5mcm9tKGRhdGEsIFwiYmFzZTY0XCIpO1xuICAgIHJldHVybiBidWYuYnVmZmVyLnNsaWNlKGJ1Zi5ieXRlT2Zmc2V0LCBidWYuYnl0ZU9mZnNldCArIGJ1Zi5ieXRlTGVuZ3RoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuZXhwb3J0IHtcbiAgcGFyc2VNZXNzYWdlcyxcbiAgd3JpdGVNZXNzYWdlXG59O1xuIiwgImltcG9ydCAqIGFzIGJhc2UgZnJvbSBcIi4vanNvblByb3RvY29sQmFzZS5qc1wiO1xuY2xhc3MgV2ViUHViU3ViSnNvblByb3RvY29sSW1wbCB7XG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBwcm90b2NvbCBzdXBwb3J0cyByZWxpYWJsZSBmZWF0dXJlc1xuICAgKi9cbiAgaXNSZWxpYWJsZVN1YlByb3RvY29sID0gZmFsc2U7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiBzdWJwcm90b2NvbC4gTmFtZSB3aWxsIGJlIHVzZWQgaW4gd2Vic29ja2V0IHN1YnByb3RvY29sXG4gICAqL1xuICBuYW1lID0gXCJqc29uLndlYnB1YnN1Yi5henVyZS52MVwiO1xuICAvKipcbiAgICogQ3JlYXRlcyBXZWJQdWJTdWJNZXNzYWdlIG9iamVjdHMgZnJvbSB0aGUgc3BlY2lmaWVkIHNlcmlhbGl6ZWQgcmVwcmVzZW50YXRpb24uXG4gICAqIEBwYXJhbSBpbnB1dCAtIFRoZSBzZXJpYWxpemVkIHJlcHJlc2VudGF0aW9uXG4gICAqL1xuICBwYXJzZU1lc3NhZ2VzKGlucHV0KSB7XG4gICAgcmV0dXJuIGJhc2UucGFyc2VNZXNzYWdlcyhpbnB1dCk7XG4gIH1cbiAgLyoqXG4gICAqIFdyaXRlIFdlYlB1YlN1Yk1lc3NhZ2UgdG8gc3RyaW5nXG4gICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdG8gYmUgd3JpdHRlblxuICAgKi9cbiAgd3JpdGVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYmFzZS53cml0ZU1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIFdlYlB1YlN1Ykpzb25Qcm90b2NvbEltcGxcbn07XG4iLCAiaW1wb3J0ICogYXMgYmFzZSBmcm9tIFwiLi9qc29uUHJvdG9jb2xCYXNlLmpzXCI7XG5jbGFzcyBXZWJQdWJTdWJKc29uUmVsaWFibGVQcm90b2NvbEltcGwge1xuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgcHJvdG9jb2wgc3VwcG9ydHMgcmVsaWFibGUgZmVhdHVyZXNcbiAgICovXG4gIGlzUmVsaWFibGVTdWJQcm90b2NvbCA9IHRydWU7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiBzdWJwcm90b2NvbC4gTmFtZSB3aWxsIGJlIHVzZWQgaW4gd2Vic29ja2V0IHN1YnByb3RvY29sXG4gICAqL1xuICBuYW1lID0gXCJqc29uLnJlbGlhYmxlLndlYnB1YnN1Yi5henVyZS52MVwiO1xuICAvKipcbiAgICogQ3JlYXRlcyBXZWJQdWJTdWJNZXNzYWdlIG9iamVjdHMgZnJvbSB0aGUgc3BlY2lmaWVkIHNlcmlhbGl6ZWQgcmVwcmVzZW50YXRpb24uXG4gICAqIEBwYXJhbSBpbnB1dCAtIFRoZSBzZXJpYWxpemVkIHJlcHJlc2VudGF0aW9uXG4gICAqL1xuICBwYXJzZU1lc3NhZ2VzKGlucHV0KSB7XG4gICAgcmV0dXJuIGJhc2UucGFyc2VNZXNzYWdlcyhpbnB1dCk7XG4gIH1cbiAgLyoqXG4gICAqIFdyaXRlIFdlYlB1YlN1Yk1lc3NhZ2UgdG8gc3RyaW5nXG4gICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdG8gYmUgd3JpdHRlblxuICAgKi9cbiAgd3JpdGVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYmFzZS53cml0ZU1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIFdlYlB1YlN1Ykpzb25SZWxpYWJsZVByb3RvY29sSW1wbFxufTtcbiIsICJpbXBvcnQgeyBXZWJQdWJTdWJKc29uUHJvdG9jb2xJbXBsIH0gZnJvbSBcIi4vd2ViUHViU3ViSnNvblByb3RvY29sLmpzXCI7XG5pbXBvcnQgeyBXZWJQdWJTdWJKc29uUmVsaWFibGVQcm90b2NvbEltcGwgfSBmcm9tIFwiLi93ZWJQdWJTdWJKc29uUmVsaWFibGVQcm90b2NvbC5qc1wiO1xuY29uc3QgV2ViUHViU3ViSnNvblByb3RvY29sID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFdlYlB1YlN1Ykpzb25Qcm90b2NvbEltcGwoKTtcbn07XG5jb25zdCBXZWJQdWJTdWJKc29uUmVsaWFibGVQcm90b2NvbCA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBXZWJQdWJTdWJKc29uUmVsaWFibGVQcm90b2NvbEltcGwoKTtcbn07XG5leHBvcnQge1xuICBXZWJQdWJTdWJKc29uUHJvdG9jb2wsXG4gIFdlYlB1YlN1Ykpzb25SZWxpYWJsZVByb3RvY29sXG59O1xuIiwgImltcG9ydCBjcmVhdGVXZWJTb2NrZXRTdHJlYW0gZnJvbSAnLi9saWIvc3RyZWFtLmpzJztcbmltcG9ydCBleHRlbnNpb24gZnJvbSAnLi9saWIvZXh0ZW5zaW9uLmpzJztcbmltcG9ydCBQZXJNZXNzYWdlRGVmbGF0ZSBmcm9tICcuL2xpYi9wZXJtZXNzYWdlLWRlZmxhdGUuanMnO1xuaW1wb3J0IFJlY2VpdmVyIGZyb20gJy4vbGliL3JlY2VpdmVyLmpzJztcbmltcG9ydCBTZW5kZXIgZnJvbSAnLi9saWIvc2VuZGVyLmpzJztcbmltcG9ydCBzdWJwcm90b2NvbCBmcm9tICcuL2xpYi9zdWJwcm90b2NvbC5qcyc7XG5pbXBvcnQgV2ViU29ja2V0IGZyb20gJy4vbGliL3dlYnNvY2tldC5qcyc7XG5pbXBvcnQgV2ViU29ja2V0U2VydmVyIGZyb20gJy4vbGliL3dlYnNvY2tldC1zZXJ2ZXIuanMnO1xuXG5leHBvcnQge1xuICBjcmVhdGVXZWJTb2NrZXRTdHJlYW0sXG4gIGV4dGVuc2lvbixcbiAgUGVyTWVzc2FnZURlZmxhdGUsXG4gIFJlY2VpdmVyLFxuICBTZW5kZXIsXG4gIHN1YnByb3RvY29sLFxuICBXZWJTb2NrZXQsXG4gIFdlYlNvY2tldFNlcnZlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2ViU29ja2V0O1xuIiwgImltcG9ydCBXZWJTb2NrZXQgZnJvbSBcIndzXCI7XG5jbGFzcyBXZWJTb2NrZXRDbGllbnQge1xuICBfc29ja2V0O1xuICBjb25zdHJ1Y3Rvcih1cmksIHByb3RvY29sTmFtZSkge1xuICAgIHRoaXMuX3NvY2tldCA9IG5ldyBXZWJTb2NrZXQodXJpLCBwcm90b2NvbE5hbWUpO1xuICAgIHRoaXMuX3NvY2tldC5iaW5hcnlUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xuICB9XG4gIG9ub3Blbihmbikge1xuICAgIHRoaXMuX3NvY2tldC5vbm9wZW4gPSBmbjtcbiAgfVxuICBvbmNsb3NlKGZuKSB7XG4gICAgdGhpcy5fc29ja2V0Lm9uY2xvc2UgPSAoZXZlbnQpID0+IGZuKGV2ZW50LmNvZGUsIGV2ZW50LnJlYXNvbik7XG4gIH1cbiAgb25lcnJvcihmbikge1xuICAgIHRoaXMuX3NvY2tldC5vbmVycm9yID0gKGV2ZW50KSA9PiBmbihldmVudC5lcnJvcik7XG4gIH1cbiAgb25tZXNzYWdlKGZuKSB7XG4gICAgdGhpcy5fc29ja2V0Lm9ubWVzc2FnZSA9IChldmVudCkgPT4gZm4oZXZlbnQuZGF0YSk7XG4gIH1cbiAgY2xvc2UoY29kZSwgcmVhc29uKSB7XG4gICAgdGhpcy5fc29ja2V0LmNsb3NlKGNvZGUsIHJlYXNvbik7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbiAgc2VuZChkYXRhLCBfKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3NvY2tldC5zZW5kKGRhdGEsIChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU47XG4gIH1cbn1cbmNsYXNzIFdlYlNvY2tldENsaWVudEZhY3Rvcnkge1xuICBjcmVhdGUodXJpLCBwcm90b2NvbE5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFdlYlNvY2tldENsaWVudCh1cmksIHByb3RvY29sTmFtZSk7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIFdlYlNvY2tldENsaWVudCxcbiAgV2ViU29ja2V0Q2xpZW50RmFjdG9yeVxufTtcbiIsICJpbXBvcnQgeyBBYm9ydEVycm9yIH0gZnJvbSBcIkBhenVyZS9hYm9ydC1jb250cm9sbGVyXCI7XG5hc3luYyBmdW5jdGlvbiBhYm9ydGFibGVQcm9taXNlKHByb21pc2UsIHNpZ25hbCkge1xuICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICB0aHJvdyBuZXcgQWJvcnRFcnJvcihcIlRoZSBvcGVyYXRpb24gd2FzIGFib3J0ZWQuXCIpO1xuICB9XG4gIGxldCBvbkFib3J0O1xuICBjb25zdCBwID0gbmV3IFByb21pc2UoKF8sIHJlamVjdCkgPT4ge1xuICAgIG9uQWJvcnQgPSAoKSA9PiB7XG4gICAgICByZWplY3QobmV3IEFib3J0RXJyb3IoXCJUaGUgb3BlcmF0aW9uIHdhcyBhYm9ydGVkLlwiKSk7XG4gICAgfTtcbiAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuICB9KTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yYWNlKFtwcm9taXNlLCBwXSk7XG4gIH0gZmluYWxseSB7XG4gICAgc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgfVxufVxuZXhwb3J0IHtcbiAgYWJvcnRhYmxlUHJvbWlzZVxufTtcbiIsICJpbXBvcnQgeyBTZW5kTWVzc2FnZUVycm9yIH0gZnJvbSBcIi4vZXJyb3JzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBhYm9ydGFibGVQcm9taXNlIH0gZnJvbSBcIi4vdXRpbHMvYWJvcnRhYmxlUHJvbWlzZS5qc1wiO1xuY2xhc3MgQWNrTWFuYWdlciB7XG4gIF9hY2tFbnRyaWVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgX2Fja0lkO1xuICBjb25zdHJ1Y3Rvcihpbml0aWFsQWNrSWQgPSAwKSB7XG4gICAgdGhpcy5fYWNrSWQgPSBpbml0aWFsQWNrSWQ7XG4gIH1cbiAgcmVnaXN0ZXJBY2soYWNrSWQpIHtcbiAgICBjb25zdCByZXNvbHZlZEFja0lkID0gYWNrSWQgPz8gdGhpcy5fZ2VuZXJhdGVBY2tJZCgpO1xuICAgIGxldCBlbnRyeSA9IHRoaXMuX2Fja0VudHJpZXMuZ2V0KHJlc29sdmVkQWNrSWQpO1xuICAgIGlmICghZW50cnkpIHtcbiAgICAgIGVudHJ5ID0gbmV3IEFja0VudGl0eShyZXNvbHZlZEFja0lkKTtcbiAgICAgIHRoaXMuX2Fja0VudHJpZXMuc2V0KHJlc29sdmVkQWNrSWQsIGVudHJ5KTtcbiAgICB9XG4gICAgY29uc3QgYWNrRW50cnkgPSBlbnRyeTtcbiAgICByZXR1cm4ge1xuICAgICAgYWNrSWQ6IHJlc29sdmVkQWNrSWQsXG4gICAgICB3YWl0OiAoYWJvcnRTaWduYWwpID0+IHRoaXMuX3dhaXRGb3JFbnRyeShhY2tFbnRyeSwgYWJvcnRTaWduYWwpXG4gICAgfTtcbiAgfVxuICByZXNvbHZlQWNrKGFja0lkLCByZXN1bHQpIHtcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMuX2Fja0VudHJpZXMuZ2V0KGFja0lkKTtcbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX2Fja0VudHJpZXMuZGVsZXRlKGFja0lkKTtcbiAgICBlbnRyeS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmVqZWN0QWNrKGFja0lkLCByZWFzb24pIHtcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMuX2Fja0VudHJpZXMuZ2V0KGFja0lkKTtcbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX2Fja0VudHJpZXMuZGVsZXRlKGFja0lkKTtcbiAgICBlbnRyeS5yZWplY3QocmVhc29uKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBkaXNjYXJkKGFja0lkKSB7XG4gICAgdGhpcy5fYWNrRW50cmllcy5kZWxldGUoYWNrSWQpO1xuICB9XG4gIHJlamVjdEFsbChjcmVhdGVSZWFzb24pIHtcbiAgICB0aGlzLl9hY2tFbnRyaWVzLmZvckVhY2goKGVudHJ5LCBhY2tJZCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2Fja0VudHJpZXMuZGVsZXRlKGFja0lkKSkge1xuICAgICAgICBlbnRyeS5yZWplY3QoY3JlYXRlUmVhc29uKGFja0lkKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgX3dhaXRGb3JFbnRyeShlbnRyeSwgYWJvcnRTaWduYWwpIHtcbiAgICBpZiAoIWFib3J0U2lnbmFsKSB7XG4gICAgICByZXR1cm4gZW50cnkucHJvbWlzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gYWJvcnRhYmxlUHJvbWlzZShlbnRyeS5wcm9taXNlKCksIGFib3J0U2lnbmFsKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyLm5hbWUgPT09IFwiQWJvcnRFcnJvclwiKSB7XG4gICAgICAgIHRocm93IG5ldyBTZW5kTWVzc2FnZUVycm9yKFwiQ2FuY2VsbGVkIGJ5IGFib3J0U2lnbmFsXCIsIHsgYWNrSWQ6IGVudHJ5LmFja0lkIH0pO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG4gIF9nZW5lcmF0ZUFja0lkKCkge1xuICAgIHRoaXMuX2Fja0lkICs9IDE7XG4gICAgcmV0dXJuIHRoaXMuX2Fja0lkO1xuICB9XG59XG5jbGFzcyBBY2tFbnRpdHkge1xuICBjb25zdHJ1Y3RvcihhY2tJZCkge1xuICAgIHRoaXMuYWNrSWQgPSBhY2tJZDtcbiAgICB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB0aGlzLl9yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG4gIH1cbiAgX3Byb21pc2U7XG4gIF9yZXNvbHZlO1xuICBfcmVqZWN0O1xuICBwcm9taXNlKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICB9XG4gIHJlc29sdmUodmFsdWUpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuX3Jlc29sdmU7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZXNvbHZlID0gdm9pZCAwO1xuICAgIHRoaXMuX3JlamVjdCA9IHZvaWQgMDtcbiAgICBjYWxsYmFjayh2YWx1ZSk7XG4gIH1cbiAgcmVqZWN0KHJlYXNvbikge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5fcmVqZWN0O1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcmVzb2x2ZSA9IHZvaWQgMDtcbiAgICB0aGlzLl9yZWplY3QgPSB2b2lkIDA7XG4gICAgY2FsbGJhY2socmVhc29uKTtcbiAgfVxufVxuZXhwb3J0IHtcbiAgQWNrTWFuYWdlclxufTtcbiIsICJpbXBvcnQgeyBJbnZvY2F0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvcnMvaW5kZXguanNcIjtcbmNsYXNzIEludm9jYXRpb25NYW5hZ2VyIHtcbiAgX2VudHJpZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBfbmV4dElkID0gMDtcbiAgcmVnaXN0ZXJJbnZvY2F0aW9uKGludm9jYXRpb25JZCkge1xuICAgIGNvbnN0IHJlc29sdmVkSWQgPSBpbnZvY2F0aW9uSWQgPz8gdGhpcy5fZ2VuZXJhdGVJbnZvY2F0aW9uSWQoKTtcbiAgICBpZiAodGhpcy5fZW50cmllcy5oYXMocmVzb2x2ZWRJZCkpIHtcbiAgICAgIHRocm93IG5ldyBJbnZvY2F0aW9uRXJyb3IoXCJJbnZvY2F0aW9uIGlkIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC5cIiwge1xuICAgICAgICBpbnZvY2F0aW9uSWQ6IHJlc29sdmVkSWRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBlbnRpdHkgPSBuZXcgSW52b2NhdGlvbkVudGl0eShyZXNvbHZlZElkKTtcbiAgICB0aGlzLl9lbnRyaWVzLnNldChyZXNvbHZlZElkLCBlbnRpdHkpO1xuICAgIHJldHVybiB7XG4gICAgICBpbnZvY2F0aW9uSWQ6IHJlc29sdmVkSWQsXG4gICAgICB3YWl0OiAob3B0aW9ucykgPT4gdGhpcy5fd2FpdEZvckVudHJ5KGVudGl0eSwgb3B0aW9ucylcbiAgICB9O1xuICB9XG4gIHJlc29sdmVJbnZvY2F0aW9uKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMuX2VudHJpZXMuZ2V0KG1lc3NhZ2UuaW52b2NhdGlvbklkKTtcbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX2VudHJpZXMuZGVsZXRlKG1lc3NhZ2UuaW52b2NhdGlvbklkKTtcbiAgICBlbnRyeS5yZXNvbHZlKG1lc3NhZ2UpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJlamVjdEludm9jYXRpb24oaW52b2NhdGlvbklkLCByZWFzb24pIHtcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMuX2VudHJpZXMuZ2V0KGludm9jYXRpb25JZCk7XG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9lbnRyaWVzLmRlbGV0ZShpbnZvY2F0aW9uSWQpO1xuICAgIGVudHJ5LnJlamVjdChyZWFzb24pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGRpc2NhcmQoaW52b2NhdGlvbklkKSB7XG4gICAgdGhpcy5fZW50cmllcy5kZWxldGUoaW52b2NhdGlvbklkKTtcbiAgfVxuICByZWplY3RBbGwoY3JlYXRlUmVhc29uKSB7XG4gICAgdGhpcy5fZW50cmllcy5mb3JFYWNoKChlbnRyeSwgaW52b2NhdGlvbklkKSA9PiB7XG4gICAgICBpZiAodGhpcy5fZW50cmllcy5kZWxldGUoaW52b2NhdGlvbklkKSkge1xuICAgICAgICBlbnRyeS5yZWplY3QoY3JlYXRlUmVhc29uKGludm9jYXRpb25JZCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIF93YWl0Rm9yRW50cnkoZW50cnksIG9wdGlvbnMpIHtcbiAgICBjb25zdCB3YWl0UHJvbWlzZSA9IGVudHJ5LnByb21pc2UoKTtcbiAgICBjb25zdCBhYm9ydFNpZ25hbCA9IG9wdGlvbnM/LmFib3J0U2lnbmFsO1xuICAgIGlmICghYWJvcnRTaWduYWwpIHtcbiAgICAgIHJldHVybiB3YWl0UHJvbWlzZTtcbiAgICB9XG4gICAgaWYgKGFib3J0U2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIGlmICh0aGlzLl9lbnRyaWVzLmRlbGV0ZShlbnRyeS5pbnZvY2F0aW9uSWQpKSB7XG4gICAgICAgIGVudHJ5LnJlamVjdCh0aGlzLl9jcmVhdGVBYm9ydEVycm9yKGVudHJ5Lmludm9jYXRpb25JZCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdhaXRQcm9taXNlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb25BYm9ydCA9ICgpID0+IHtcbiAgICAgICAgYWJvcnRTaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuICAgICAgICBpZiAodGhpcy5fZW50cmllcy5kZWxldGUoZW50cnkuaW52b2NhdGlvbklkKSkge1xuICAgICAgICAgIGVudHJ5LnJlamVjdCh0aGlzLl9jcmVhdGVBYm9ydEVycm9yKGVudHJ5Lmludm9jYXRpb25JZCkpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYWJvcnRTaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuICAgICAgd2FpdFByb21pc2UudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGFib3J0U2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgYWJvcnRTaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBfZ2VuZXJhdGVJbnZvY2F0aW9uSWQoKSB7XG4gICAgdGhpcy5fbmV4dElkICs9IDE7XG4gICAgcmV0dXJuIHRoaXMuX25leHRJZC50b1N0cmluZygpO1xuICB9XG4gIF9jcmVhdGVBYm9ydEVycm9yKGludm9jYXRpb25JZCkge1xuICAgIHJldHVybiBuZXcgSW52b2NhdGlvbkVycm9yKFwiSW52b2NhdGlvbiBjYW5jZWxsZWQgYnkgYWJvcnRTaWduYWwuXCIsIHtcbiAgICAgIGludm9jYXRpb25JZFxuICAgIH0pO1xuICB9XG59XG5jbGFzcyBJbnZvY2F0aW9uRW50aXR5IHtcbiAgY29uc3RydWN0b3IoaW52b2NhdGlvbklkKSB7XG4gICAgdGhpcy5pbnZvY2F0aW9uSWQgPSBpbnZvY2F0aW9uSWQ7XG4gICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuICB9XG4gIF9wcm9taXNlO1xuICBfcmVzb2x2ZTtcbiAgX3JlamVjdDtcbiAgcHJvbWlzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcbiAgfVxuICByZXNvbHZlKHZhbHVlKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLl9yZXNvbHZlO1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcmVzb2x2ZSA9IHZvaWQgMDtcbiAgICB0aGlzLl9yZWplY3QgPSB2b2lkIDA7XG4gICAgY2FsbGJhY2sodmFsdWUpO1xuICB9XG4gIHJlamVjdChyZWFzb24pIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuX3JlamVjdDtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3Jlc29sdmUgPSB2b2lkIDA7XG4gICAgdGhpcy5fcmVqZWN0ID0gdm9pZCAwO1xuICAgIGNhbGxiYWNrKHJlYXNvbik7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIEludm9jYXRpb25NYW5hZ2VyXG59O1xuIiwgImltcG9ydCBmcyBmcm9tIFwibm9kZTpmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcIm5vZGU6cGF0aFwiO1xuaW1wb3J0IG9zIGZyb20gXCJub2RlOm9zXCI7XG5cbi8vIERhZW1vbiBzdXBwb3J0cyB0d28gdHJhbnNwb3J0IG1vZGVzOlxuLy8gICAtIFwiZGlyZWN0XCIgIDogY29ubmVjdCBXU1MgbmFhciBidmdlZXJ0IC9jYWJsZSAoQWN0aW9uQ2FibGUpLiBWZXJlaXN0IGJ2Z2VlcnRfaG9zdC5cbi8vICAgLSBcImF6dXJlXCIgICA6IGNvbm5lY3QgV1BTIGh1YiB2b29yIHJlc3RyaWN0ZWQgbmV0d29ya3MuIFZlcmVpc3QgYXp1cmVfaHViX3VybC5cbi8vIE1vZGUgd29yZHQgYWZnZWxlaWQgdWl0IHdlbGtlIGNyZWRlbnRpYWxzIGdlemV0IHppam4uXG5leHBvcnQgdHlwZSBDcmVkZW50aWFscyA9IHtcbiAgLy8gZ2VkZWVsZFxuICBjbGllbnRfaWQ6IHN0cmluZztcbiAgcmVnaXN0cmF0aW9uX3Rva2VuOiBzdHJpbmc7XG4gIGNvbm5lY3Rpb25faWRlbnRpZmllcj86IHN0cmluZztcbiAgLy8gZGlyZWN0LW1vZGVcbiAgYnZnZWVydF9ob3N0Pzogc3RyaW5nO1xuICBjYWJsZV91cmw/OiBzdHJpbmc7XG4gIHRyYW5zcG9ydF90b2tlbj86IHN0cmluZzsgLy8gc2lnbmVkIHRyYW5zcG9ydC1zZXNzaW9uIHRva2VuICg3ZClcbiAgLy8gYXp1cmUtbW9kZSAobGVnYWN5IC8gcmVzdHJpY3RlZC1uZXR3b3JrIGZhbGxiYWNrKVxuICBhenVyZV9odWJfdXJsPzogc3RyaW5nO1xuICBhY2Nlc3NfdXJsPzogc3RyaW5nO1xuICBhY2Nlc3NfdXJsX2V4cGlyZXNfYXQ/OiBzdHJpbmc7XG4gIHRvcGljX2lkZW50aWZpZXI/OiBzdHJpbmc7IC8vIGhpc3RvcmlzY2ggc3lub25pZW0gdm9vciBjb25uZWN0aW9uX2lkZW50aWZpZXJcbn07XG5cbmV4cG9ydCB0eXBlIENyZWRlbnRpYWxNb2RlID0gXCJkaXJlY3RcIiB8IFwiYXp1cmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWRlbnRpYWxNb2RlKGNyZWRzOiBDcmVkZW50aWFscyk6IENyZWRlbnRpYWxNb2RlIHwgbnVsbCB7XG4gIGlmIChjcmVkcy5idmdlZXJ0X2hvc3QpIHJldHVybiBcImRpcmVjdFwiO1xuICBpZiAoY3JlZHMuYXp1cmVfaHViX3VybCkgcmV0dXJuIFwiYXp1cmVcIjtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQYXRoKCk6IHN0cmluZyB7XG4gIGNvbnN0IHhkZyA9IHByb2Nlc3MuZW52LlhER19DT05GSUdfSE9NRTtcbiAgY29uc3QgYmFzZSA9IHhkZyA/IHhkZyA6IHBhdGguam9pbihvcy5ob21lZGlyKCksIFwiLmNvbmZpZ1wiKTtcbiAgcmV0dXJuIHBhdGguam9pbihiYXNlLCBcImJ2Zy1kZWFtb25cIiwgXCJjcmVkZW50aWFscy5qc29uXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlZGVudGlhbHNQYXRoKCk6IHN0cmluZyB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5CVkdfREVBTU9OX0NSRURFTlRJQUxTID8/IGRlZmF1bHRQYXRoKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ3JlZGVudGlhbHMoKTogQ3JlZGVudGlhbHMgfCBudWxsIHtcbiAgY29uc3QgcCA9IGNyZWRlbnRpYWxzUGF0aCgpO1xuICBpZiAoIWZzLmV4aXN0c1N5bmMocCkpIHJldHVybiBudWxsO1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwLCBcInV0ZjhcIikpIGFzIENyZWRlbnRpYWxzO1xuICAgIGlmICghZGF0YS5jbGllbnRfaWQgfHwgIWRhdGEucmVnaXN0cmF0aW9uX3Rva2VuKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoIWNyZWRlbnRpYWxNb2RlKGRhdGEpKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVDcmVkZW50aWFscyhjcmVkczogQ3JlZGVudGlhbHMpOiBzdHJpbmcge1xuICBjb25zdCBwID0gY3JlZGVudGlhbHNQYXRoKCk7XG4gIGZzLm1rZGlyU3luYyhwYXRoLmRpcm5hbWUocCksIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICBmcy53cml0ZUZpbGVTeW5jKHAsIEpTT04uc3RyaW5naWZ5KGNyZWRzLCBudWxsLCAyKSwgeyBtb2RlOiAwbzYwMCB9KTtcbiAgcmV0dXJuIHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXBlQ3JlZGVudGlhbHMoKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBjcmVkZW50aWFsc1BhdGgoKTtcbiAgaWYgKGZzLmV4aXN0c1N5bmMocCkpIGZzLnVubGlua1N5bmMocCk7XG59XG4iLCAiLy8gRGlyZWN0LW1vZGU6IHByYWF0IHJlY2h0c3RyZWVrcyBtZXQgYnZnZWVydCB2aWEgSFRUUFMgKHJlZGVlbSkgZW5cbi8vIFdTUyAoQWN0aW9uQ2FibGUpLiBHZWVuIEF6dXJlIHR1c3NlbnN0YXAuXG5pbXBvcnQgcGMgZnJvbSBcInBpY29jb2xvcnNcIjtcbmltcG9ydCB7IENyZWRlbnRpYWxzLCBzYXZlQ3JlZGVudGlhbHMgfSBmcm9tIFwiLi9jcmVkZW50aWFscy5qc1wiO1xuXG50eXBlIFJlZGVlbVJlc3BvbnNlID0ge1xuICBjbGllbnRfaWRlbnRpZmllcjogc3RyaW5nO1xuICByZWdpc3RyYXRpb25fdG9rZW46IHN0cmluZztcbiAgdHJhbnNwb3J0X3Rva2VuOiBzdHJpbmc7XG4gIHdlYnNvY2tldF91cmw6IHN0cmluZztcbiAgY29ubmVjdGlvbl9pZGVudGlmaWVyPzogc3RyaW5nO1xufTtcblxuLy8gQWNjZXB0ZWVydCBcImJ2Z2VlcnQuY29tXCIgKGRlZmF1bHQgSFRUUFMpLCBcImJ2Z2VlcnQubHZoLm1lOjMwMDBcIiAoZGVmYXVsdFxuLy8gSFRUUFMgXHUyMDE0IGdlZWYgZXhwbGljaWV0IGh0dHA6Ly9cdTIwMjYgbWVlIHZvb3IgZGV2KSwgb2YgZWVuIHZvbGxlZGlnZSBVUkwgbWV0XG4vLyBzY2hlbWUuIFZvb3IgbG9rYWxlIGRldjogYC0taG9zdCBodHRwOi8vYnZnZWVydC5sdmgubWU6MzAwMGAuXG5mdW5jdGlvbiBiYXNlVXJsKGhvc3Q6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChob3N0LnN0YXJ0c1dpdGgoXCJodHRwOi8vXCIpIHx8IGhvc3Quc3RhcnRzV2l0aChcImh0dHBzOi8vXCIpKSByZXR1cm4gaG9zdC5yZXBsYWNlKC9cXC8kLywgXCJcIik7XG4gIHJldHVybiBgaHR0cHM6Ly8ke2hvc3R9YDtcbn1cblxuZnVuY3Rpb24gd3NCYXNlVXJsKGhvc3Q6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBiYXNlVXJsKGhvc3QpLnJlcGxhY2UoL15odHRwLywgXCJ3c1wiKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZGVlbURpcmVjdChob3N0OiBzdHJpbmcsIHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPFJlZGVlbVJlc3BvbnNlPiB7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2VVcmwoaG9zdCl9L2FwaS92MS90cmFuc3BvcnQvcmVkZWVtYDtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdG9rZW4gfSlcbiAgfSk7XG4gIGlmICghcmVzLm9rKSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy50ZXh0KCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGByZWRlZW0gZmFpbGVkICgke3Jlcy5zdGF0dXN9KTogJHtib2R5fWApO1xuICB9XG4gIHJldHVybiBhd2FpdCByZXMuanNvbigpIGFzIFJlZGVlbVJlc3BvbnNlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gam9pbkRpcmVjdChob3N0OiBzdHJpbmcsIHRva2VuOiBzdHJpbmcsIHRyYW5zcG9ydD86IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGNvbnNvbGUubG9nKHBjLmN5YW4oYGNvbm5lY3RpbmcgdG8gYnZnZWVydCBhdCAke2hvc3R9Li4uYCkpO1xuICBjb25zdCByID0gYXdhaXQgcmVkZWVtRGlyZWN0KGhvc3QsIHRva2VuKTtcbiAgY29uc3QgcGF0aCA9IHNhdmVDcmVkZW50aWFscyh7XG4gICAgY2xpZW50X2lkOiByLmNsaWVudF9pZGVudGlmaWVyLFxuICAgIHJlZ2lzdHJhdGlvbl90b2tlbjogci5yZWdpc3RyYXRpb25fdG9rZW4sXG4gICAgdHJhbnNwb3J0X3Rva2VuOiByLnRyYW5zcG9ydF90b2tlbixcbiAgICBidmdlZXJ0X2hvc3Q6IGhvc3QsXG4gICAgY2FibGVfdXJsOiByLndlYnNvY2tldF91cmwsXG4gICAgY29ubmVjdGlvbl9pZGVudGlmaWVyOiByLmNvbm5lY3Rpb25faWRlbnRpZmllciA/PyB0cmFuc3BvcnQsXG4gIH0pO1xuICBjb25zb2xlLmxvZyhwYy5ncmVlbihgcGFpcmVkIGFzICR7ci5jbGllbnRfaWRlbnRpZmllcn0gb24gJHtyLmNvbm5lY3Rpb25faWRlbnRpZmllciA/PyB0cmFuc3BvcnQgPz8gXCIodW5rbm93bilcIn1gKSk7XG4gIGNvbnNvbGUubG9nKGBjcmVkZW50aWFsczogJHtwYXRofWApO1xuICByZXR1cm4gMDtcbn1cblxuLy8gTWluaW1hbCBBY3Rpb25DYWJsZSBjbGllbnQ6IG9wZW5zIGEgV1MsIHN1YnNjcmliZXMgdG8gVHJhbnNwb3J0Q2hhbm5lbFxuLy8gd2l0aCB0aGUgcmlnaHQgY29ubmVjdGlvbl9pZGVudGlmaWVyLCBwcmludHMgaW5jb21pbmcgbWVzc2FnZXMuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGFlbW9uRGlyZWN0KGNyZWRzOiBDcmVkZW50aWFscyk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGNvbnN0IGNhYmxlVXJsID0gY3JlZHMuY2FibGVfdXJsID8/IGAke3dzQmFzZVVybChjcmVkcy5idmdlZXJ0X2hvc3QhKX0vY2FibGVgO1xuICAvLyBBcHBsaWNhdGlvbkNhYmxlIHZlcndhY2h0IGVlbiBSYWlscy1zaWduZWQgdHJhbnNwb3J0LXNlc3Npb24gdG9rZW4uXG4gIC8vIEZhbGxiYWNrIG5hYXIgcmVnaXN0cmF0aW9uX3Rva2VuIHZvb3IgYmFja3dhcmQtY29tcGF0LlxuICBjb25zdCB3c1Rva2VuID0gY3JlZHMudHJhbnNwb3J0X3Rva2VuID8/IGNyZWRzLnJlZ2lzdHJhdGlvbl90b2tlbjtcbiAgY29uc3QgdXJsID0gYCR7Y2FibGVVcmx9P3RyYW5zcG9ydF90b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudCh3c1Rva2VuKX1gO1xuICBjb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52LkJWR19ERUJVRyA9PT0gXCIxXCI7XG4gIGNvbnN0IGRiZyA9ICguLi5hOiB1bmtub3duW10pID0+IHsgaWYgKGRlYnVnKSBjb25zb2xlLmVycm9yKHBjLmRpbShcIltkZWJ1Z11cIiksIC4uLmEgYXMgc3RyaW5nW10pOyB9O1xuXG4gIGNvbnNvbGUubG9nKHBjLmN5YW4oYGNvbm5lY3RpbmcgV1NTICR7Y2FibGVVcmx9Li4uYCkpO1xuICBjb25zdCBXUzogYW55ID0gKGdsb2JhbFRoaXMgYXMgYW55KS5XZWJTb2NrZXQ7XG4gIGlmICghV1MpIHtcbiAgICBjb25zb2xlLmVycm9yKHBjLnJlZChcIk5vZGUgbGFja3MgZ2xvYmFsIFdlYlNvY2tldC4gUmVxdWlyZSBOb2RlID49IDIyLlwiKSk7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgLy8gQWN0aW9uQ2FibGUgc3ViLXByb3RvY29sIFx1MjAxNCBhbmRlcnMgc2x1aXQgUmFpbHMgZGUgdmVyYmluZGluZyBtZXRlZW4uXG4gIGNvbnN0IHdzID0gbmV3IFdTKHVybCwgWyBcImFjdGlvbmNhYmxlLXYxLWpzb25cIiBdKTtcbiAgY29uc3QgY29ubklkID0gY3JlZHMuY29ubmVjdGlvbl9pZGVudGlmaWVyO1xuICBjb25zdCBzdWJJZCA9IEpTT04uc3RyaW5naWZ5KHsgY2hhbm5lbDogXCJUcmFuc3BvcnRDaGFubmVsXCIsIGNvbm5lY3Rpb25faWRlbnRpZmllcjogY29ubklkIH0pO1xuXG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZTxudW1iZXI+KChyZXNvbHZlKSA9PiB7XG4gICAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwgKCkgPT4ge1xuICAgICAgZGJnKFwid3Mgb3BlblwiKTtcbiAgICB9KTtcbiAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgcmF3ID0gdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgPyBldmVudC5kYXRhIDogbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKGV2ZW50LmRhdGEgYXMgQXJyYXlCdWZmZXIpO1xuICAgICAgZGJnKFwid3MgbXNnXCIsIHJhdyk7XG4gICAgICBsZXQgbXNnOiBhbnk7XG4gICAgICB0cnkgeyBtc2cgPSBKU09OLnBhcnNlKHJhdyk7IH0gY2F0Y2ggeyByZXR1cm47IH1cbiAgICAgIGlmIChtc2cudHlwZSA9PT0gXCJ3ZWxjb21lXCIpIHtcbiAgICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeSh7IGNvbW1hbmQ6IFwic3Vic2NyaWJlXCIsIGlkZW50aWZpZXI6IHN1YklkIH0pKTtcbiAgICAgIH0gZWxzZSBpZiAobXNnLnR5cGUgPT09IFwicGluZ1wiIHx8IG1zZy50eXBlID09PSBcImNvbmZpcm1fc3Vic2NyaXB0aW9uXCIpIHtcbiAgICAgICAgLy8gbm8tb3BcbiAgICAgIH0gZWxzZSBpZiAobXNnLmlkZW50aWZpZXIgJiYgbXNnLm1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgZW52ID0gbXNnLm1lc3NhZ2U7XG4gICAgICAgIGNvbnNvbGUubG9nKHBjLmJvbGQoYCMke2Vudi5zZXF1ZW5jZSA/PyBcIj9cIn1gKSwgcGMuZGltKGVudi5tZXNzYWdlX3R5cGUgPz8gXCJcIiksIHBjLmN5YW4oZW52LnBheWxvYWQgPz8gXCJcIikpO1xuICAgICAgfSBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJyZWplY3Rfc3Vic2NyaXB0aW9uXCIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihwYy5yZWQoXCJzdWJzY3JpcHRpb24gcmVqZWN0ZWRcIikpO1xuICAgICAgICB3cy5jbG9zZSgpO1xuICAgICAgICByZXNvbHZlKDIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZTogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKHBjLnJlZChcIndzIGVycm9yXCIpLCBlPy5tZXNzYWdlID8/IGUpO1xuICAgIH0pO1xuICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCAoZTogYW55KSA9PiB7XG4gICAgICBkYmcoXCJ3cyBjbG9zZVwiLCBlPy5jb2RlLCBlPy5yZWFzb24pO1xuICAgICAgcmVzb2x2ZSgwKTtcbiAgICB9KTtcbiAgICBwcm9jZXNzLm9uKFwiU0lHSU5UXCIsICgpID0+IHsgd3MuY2xvc2UoKTsgcmVzb2x2ZSgwKTsgfSk7XG4gICAgcHJvY2Vzcy5vbihcIlNJR1RFUk1cIiwgKCkgPT4geyB3cy5jbG9zZSgpOyByZXNvbHZlKDApOyB9KTtcbiAgfSk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsMENBQUFBLFVBQUFDLFNBQUE7QUFBQSxRQUFJLElBQUksV0FBVyxDQUFDO0FBQXBCLFFBQXVCLE9BQU8sRUFBRSxRQUFRLENBQUM7QUFBekMsUUFBNEMsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM1RCxRQUFJLG1CQUNILEVBQUUsQ0FBQyxDQUFDLElBQUksWUFBWSxLQUFLLFNBQVMsWUFBWSxPQUM3QyxDQUFDLENBQUMsSUFBSSxlQUFlLEtBQUssU0FBUyxTQUFTLEtBQUssRUFBRSxhQUFhLFlBQWEsRUFBRSxVQUFVLENBQUMsR0FBRyxTQUFTLElBQUksU0FBUyxVQUFXLENBQUMsQ0FBQyxJQUFJO0FBRXRJLFFBQUksWUFBWSxDQUFDLE1BQU0sT0FBTyxVQUFVLFNBQ3ZD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TUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBO0FBQUEsTUFDN0M7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQTtBQUFBLE1BQzdDO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUE7QUFBQSxNQUM3QztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBO0FBQUEsTUFDN0M7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQTtBQUFBLE1BQzdDO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUE7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T0FBTyxRQUFRLElBQUk7QUFDekMsUUFBTSxPQUFPLEtBQUs7QUFDbEIsU0FBTztBQUNUO0FBRUEsS0FBSyxFQUFFLEtBQUssQ0FBQyxTQUFTLFFBQVEsS0FBSyxJQUFJLENBQUM7IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAibW9kdWxlIiwgImVuYWJsZWQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiUGVyTWVzc2FnZURlZmxhdGUiLCAiZGF0YSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJQZXJNZXNzYWdlRGVmbGF0ZSIsICJSZWNlaXZlciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJQZXJNZXNzYWdlRGVmbGF0ZSIsICJTZW5kZXIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXh0ZW5zaW9uIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIkV2ZW50RW1pdHRlciIsICJVUkwiLCAiUGVyTWVzc2FnZURlZmxhdGUiLCAiUmVjZWl2ZXIiLCAiU2VuZGVyIiwgIldlYlNvY2tldCIsICJrZXkiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiV2ViU29ja2V0IiwgImNyZWF0ZVdlYlNvY2tldFN0cmVhbSIsICJlcnIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAicHJvdG9jb2wiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiRXZlbnRFbWl0dGVyIiwgImV4dGVuc2lvbiIsICJQZXJNZXNzYWdlRGVmbGF0ZSIsICJzdWJwcm90b2NvbCIsICJXZWJTb2NrZXQiLCAiV2ViU29ja2V0U2VydmVyIiwgImltcG9ydF9waWNvY29sb3JzIiwgInByb2Nlc3MiLCAidXRpbCIsICJlbmFibGVkTmFtZXNwYWNlcyIsICJsb2dnZXIiLCAiY29udGV4dCIsICJjb250ZXh0IiwgIldlYlNvY2tldCIsICJFdmVudEVtaXR0ZXIiLCAiaW1wb3J0X25vZGVfb3MiLCAicGF0aCIsICJvcyIsICJmcyIsICJwYyIsICJwYXRoIiwgInBjIiwgInBhdGgiLCAicmVhZGxpbmUiXQp9Cg==
