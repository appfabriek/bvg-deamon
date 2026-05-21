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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL3BpY29jb2xvcnMvcGljb2NvbG9ycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL2NvbnN0YW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL2J1ZmZlci11dGlsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy93cy9saWIvbGltaXRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3Blcm1lc3NhZ2UtZGVmbGF0ZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3ZhbGlkYXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3dzL2xpYi9yZWNlaXZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3NlbmRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL2V2ZW50LXRhcmdldC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL2V4dGVuc2lvbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3dlYnNvY2tldC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3N0cmVhbS5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3MvbGliL3N1YnByb3RvY29sLmpzIiwgIi4uL25vZGVfbW9kdWxlcy93cy9saWIvd2Vic29ja2V0LXNlcnZlci5qcyIsICIuLi9zcmMvY2xpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AdHlwZXNwZWMvdHMtaHR0cC1ydW50aW1lL3NyYy91dGlsL2NoZWNrRW52aXJvbm1lbnQudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BhenVyZS9hYm9ydC1jb250cm9sbGVyL3NyYy9BYm9ydEVycm9yLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvY29yZS11dGlsL3NyYy9jcmVhdGVBYm9ydGFibGVQcm9taXNlLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvY29yZS11dGlsL3NyYy9kZWxheS50cyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL3dlYlB1YlN1YkNsaWVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL2Vycm9ycy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHR5cGVzcGVjL3RzLWh0dHAtcnVudGltZS9zcmMvbG9nZ2VyL2xvZy50cyIsICIuLi9ub2RlX21vZHVsZXMvQHR5cGVzcGVjL3RzLWh0dHAtcnVudGltZS9zcmMvbG9nZ2VyL2RlYnVnLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AdHlwZXNwZWMvdHMtaHR0cC1ydW50aW1lL3NyYy9sb2dnZXIvbG9nZ2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvbG9nZ2VyL3NyYy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL2xvZ2dlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL3Byb3RvY29scy9qc29uUHJvdG9jb2xCYXNlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvd2ViLXB1YnN1Yi1jbGllbnQvZGlzdC9lc20vcHJvdG9jb2xzL3dlYlB1YlN1Ykpzb25Qcm90b2NvbC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL3Byb3RvY29scy93ZWJQdWJTdWJKc29uUmVsaWFibGVQcm90b2NvbC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL3Byb3RvY29scy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3Mvd3JhcHBlci5tanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BhenVyZS93ZWItcHVic3ViLWNsaWVudC9kaXN0L2VzbS93ZWJzb2NrZXQvd2Vic29ja2V0Q2xpZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AYXp1cmUvd2ViLXB1YnN1Yi1jbGllbnQvZGlzdC9lc20vdXRpbHMvYWJvcnRhYmxlUHJvbWlzZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50L2Rpc3QvZXNtL2Fja01hbmFnZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BhenVyZS93ZWItcHVic3ViLWNsaWVudC9kaXN0L2VzbS9pbnZvY2F0aW9uTWFuYWdlci5qcyIsICIuLi9zcmMvY2xpL2NyZWRlbnRpYWxzLnRzIiwgIi4uL3NyYy9jbGkvZGlyZWN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJsZXQgcCA9IHByb2Nlc3MgfHwge30sIGFyZ3YgPSBwLmFyZ3YgfHwgW10sIGVudiA9IHAuZW52IHx8IHt9XG5sZXQgaXNDb2xvclN1cHBvcnRlZCA9XG5cdCEoISFlbnYuTk9fQ09MT1IgfHwgYXJndi5pbmNsdWRlcyhcIi0tbm8tY29sb3JcIikpICYmXG5cdCghIWVudi5GT1JDRV9DT0xPUiB8fCBhcmd2LmluY2x1ZGVzKFwiLS1jb2xvclwiKSB8fCBwLnBsYXRmb3JtID09PSBcIndpbjMyXCIgfHwgKChwLnN0ZG91dCB8fCB7fSkuaXNUVFkgJiYgZW52LlRFUk0gIT09IFwiZHVtYlwiKSB8fCAhIWVudi5DSSlcblxubGV0IGZvcm1hdHRlciA9IChvcGVuLCBjbG9zZSwgcmVwbGFjZSA9IG9wZW4pID0+XG5cdGlucHV0ID0+IHtcblx0XHRsZXQgc3RyaW5nID0gXCJcIiArIGlucHV0LCBpbmRleCA9IHN0cmluZy5pbmRleE9mKGNsb3NlLCBvcGVuLmxlbmd0aClcblx0XHRyZXR1cm4gfmluZGV4ID8gb3BlbiArIHJlcGxhY2VDbG9zZShzdHJpbmcsIGNsb3NlLCByZXBsYWNlLCBpbmRleCkgKyBjbG9zZSA6IG9wZW4gKyBzdHJpbmcgKyBjbG9zZVxuXHR9XG5cbmxldCByZXBsYWNlQ2xvc2UgPSAoc3RyaW5nLCBjbG9zZSwgcmVwbGFjZSwgaW5kZXgpID0+IHtcblx0bGV0IHJlc3VsdCA9IFwiXCIsIGN1cnNvciA9IDBcblx0ZG8ge1xuXHRcdHJlc3VsdCArPSBzdHJpbmcuc3Vic3RyaW5nKGN1cnNvciwgaW5kZXgpICsgcmVwbGFjZVxuXHRcdGN1cnNvciA9IGluZGV4ICsgY2xvc2UubGVuZ3RoXG5cdFx0aW5kZXggPSBzdHJpbmcuaW5kZXhPZihjbG9zZSwgY3Vyc29yKVxuXHR9IHdoaWxlICh+aW5kZXgpXG5cdHJldHVybiByZXN1bHQgKyBzdHJpbmcuc3Vic3RyaW5nKGN1cnNvcilcbn1cblxubGV0IGNyZWF0ZUNvbG9ycyA9IChlbmFibGVkID0gaXNDb2xvclN1cHBvcnRlZCkgPT4ge1xuXHRsZXQgZiA9IGVuYWJsZWQgPyBmb3JtYXR0ZXIgOiAoKSA9PiBTdHJpbmdcblx0cmV0dXJuIHtcblx0XHRpc0NvbG9yU3VwcG9ydGVkOiBlbmFibGVkLFxuXHRcdHJlc2V0OiBmKFwiXFx4MWJbMG1cIiwgXCJcXHgxYlswbVwiKSxcblx0XHRib2xkOiBmKFwiXFx4MWJbMW1cIiwgXCJcXHgxYlsyMm1cIiwgXCJcXHgxYlsyMm1cXHgxYlsxbVwiKSxcblx0XHRkaW06IGYoXCJcXHgxYlsybVwiLCBcIlxceDFiWzIybVwiLCBcIlxceDFiWzIybVxceDFiWzJtXCIpLFxuXHRcdGl0YWxpYzogZihcIlxceDFiWzNtXCIsIFwiXFx4MWJbMjNtXCIpLFxuXHRcdHVuZGVybGluZTogZihcIlxceDFiWzRtXCIsIFwiXFx4MWJbMjRtXCIpLFxuXHRcdGludmVyc2U6IGYoXCJcXHgxYls3bVwiLCBcIlxceDFiWzI3bVwiKSxcblx0XHRoaWRkZW46IGYoXCJcXHgxYls4bVwiLCBcIlxceDFiWzI4bVwiKSxcblx0XHRzdHJpa2V0aHJvdWdoOiBmKFwiXFx4MWJbOW1cIiwgXCJcXHgxYlsyOW1cIiksXG5cblx0XHRibGFjazogZihcIlxceDFiWzMwbVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRyZWQ6IGYoXCJcXHgxYlszMW1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0Z3JlZW46IGYoXCJcXHgxYlszMm1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0eWVsbG93OiBmKFwiXFx4MWJbMzNtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdGJsdWU6IGYoXCJcXHgxYlszNG1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0bWFnZW50YTogZihcIlxceDFiWzM1bVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRjeWFuOiBmKFwiXFx4MWJbMzZtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdHdoaXRlOiBmKFwiXFx4MWJbMzdtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdGdyYXk6IGYoXCJcXHgxYls5MG1cIiwgXCJcXHgxYlszOW1cIiksXG5cblx0XHRiZ0JsYWNrOiBmKFwiXFx4MWJbNDBtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnUmVkOiBmKFwiXFx4MWJbNDFtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnR3JlZW46IGYoXCJcXHgxYls0Mm1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdZZWxsb3c6IGYoXCJcXHgxYls0M21cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdCbHVlOiBmKFwiXFx4MWJbNDRtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnTWFnZW50YTogZihcIlxceDFiWzQ1bVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ0N5YW46IGYoXCJcXHgxYls0Nm1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdXaGl0ZTogZihcIlxceDFiWzQ3bVwiLCBcIlxceDFiWzQ5bVwiKSxcblxuXHRcdGJsYWNrQnJpZ2h0OiBmKFwiXFx4MWJbOTBtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdHJlZEJyaWdodDogZihcIlxceDFiWzkxbVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRncmVlbkJyaWdodDogZihcIlxceDFiWzkybVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHR5ZWxsb3dCcmlnaHQ6IGYoXCJcXHgxYls5M21cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0Ymx1ZUJyaWdodDogZihcIlxceDFiWzk0bVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRtYWdlbnRhQnJpZ2h0OiBmKFwiXFx4MWJbOTVtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdGN5YW5CcmlnaHQ6IGYoXCJcXHgxYls5Nm1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0d2hpdGVCcmlnaHQ6IGYoXCJcXHgxYls5N21cIiwgXCJcXHgxYlszOW1cIiksXG5cblx0XHRiZ0JsYWNrQnJpZ2h0OiBmKFwiXFx4MWJbMTAwbVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ1JlZEJyaWdodDogZihcIlxceDFiWzEwMW1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdHcmVlbkJyaWdodDogZihcIlxceDFiWzEwMm1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdZZWxsb3dCcmlnaHQ6IGYoXCJcXHgxYlsxMDNtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnQmx1ZUJyaWdodDogZihcIlxceDFiWzEwNG1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0YmdNYWdlbnRhQnJpZ2h0OiBmKFwiXFx4MWJbMTA1bVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRiZ0N5YW5CcmlnaHQ6IGYoXCJcXHgxYlsxMDZtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdGJnV2hpdGVCcmlnaHQ6IGYoXCJcXHgxYlsxMDdtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ29sb3JzKClcbm1vZHVsZS5leHBvcnRzLmNyZWF0ZUNvbG9ycyA9IGNyZWF0ZUNvbG9yc1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQklOQVJZX1RZUEVTID0gWydub2RlYnVmZmVyJywgJ2FycmF5YnVmZmVyJywgJ2ZyYWdtZW50cyddO1xuY29uc3QgaGFzQmxvYiA9IHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJztcblxuaWYgKGhhc0Jsb2IpIEJJTkFSWV9UWVBFUy5wdXNoKCdibG9iJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBCSU5BUllfVFlQRVMsXG4gIENMT1NFX1RJTUVPVVQ6IDMwMDAwLFxuICBFTVBUWV9CVUZGRVI6IEJ1ZmZlci5hbGxvYygwKSxcbiAgR1VJRDogJzI1OEVBRkE1LUU5MTQtNDdEQS05NUNBLUM1QUIwREM4NUIxMScsXG4gIGhhc0Jsb2IsXG4gIGtGb3JPbkV2ZW50QXR0cmlidXRlOiBTeW1ib2woJ2tJc0Zvck9uRXZlbnRBdHRyaWJ1dGUnKSxcbiAga0xpc3RlbmVyOiBTeW1ib2woJ2tMaXN0ZW5lcicpLFxuICBrU3RhdHVzQ29kZTogU3ltYm9sKCdzdGF0dXMtY29kZScpLFxuICBrV2ViU29ja2V0OiBTeW1ib2woJ3dlYnNvY2tldCcpLFxuICBOT09QOiAoKSA9PiB7fVxufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHsgRU1QVFlfQlVGRkVSIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5jb25zdCBGYXN0QnVmZmVyID0gQnVmZmVyW1N5bWJvbC5zcGVjaWVzXTtcblxuLyoqXG4gKiBNZXJnZXMgYW4gYXJyYXkgb2YgYnVmZmVycyBpbnRvIGEgbmV3IGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcltdfSBsaXN0IFRoZSBhcnJheSBvZiBidWZmZXJzIHRvIGNvbmNhdFxuICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsTGVuZ3RoIFRoZSB0b3RhbCBsZW5ndGggb2YgYnVmZmVycyBpbiB0aGUgbGlzdFxuICogQHJldHVybiB7QnVmZmVyfSBUaGUgcmVzdWx0aW5nIGJ1ZmZlclxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBjb25jYXQobGlzdCwgdG90YWxMZW5ndGgpIHtcbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gRU1QVFlfQlVGRkVSO1xuICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHJldHVybiBsaXN0WzBdO1xuXG4gIGNvbnN0IHRhcmdldCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZSh0b3RhbExlbmd0aCk7XG4gIGxldCBvZmZzZXQgPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGJ1ZiA9IGxpc3RbaV07XG4gICAgdGFyZ2V0LnNldChidWYsIG9mZnNldCk7XG4gICAgb2Zmc2V0ICs9IGJ1Zi5sZW5ndGg7XG4gIH1cblxuICBpZiAob2Zmc2V0IDwgdG90YWxMZW5ndGgpIHtcbiAgICByZXR1cm4gbmV3IEZhc3RCdWZmZXIodGFyZ2V0LmJ1ZmZlciwgdGFyZ2V0LmJ5dGVPZmZzZXQsIG9mZnNldCk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIE1hc2tzIGEgYnVmZmVyIHVzaW5nIHRoZSBnaXZlbiBtYXNrLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBzb3VyY2UgVGhlIGJ1ZmZlciB0byBtYXNrXG4gKiBAcGFyYW0ge0J1ZmZlcn0gbWFzayBUaGUgbWFzayB0byB1c2VcbiAqIEBwYXJhbSB7QnVmZmVyfSBvdXRwdXQgVGhlIGJ1ZmZlciB3aGVyZSB0byBzdG9yZSB0aGUgcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IFRoZSBvZmZzZXQgYXQgd2hpY2ggdG8gc3RhcnQgd3JpdGluZ1xuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRvIG1hc2suXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIF9tYXNrKHNvdXJjZSwgbWFzaywgb3V0cHV0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0W29mZnNldCArIGldID0gc291cmNlW2ldIF4gbWFza1tpICYgM107XG4gIH1cbn1cblxuLyoqXG4gKiBVbm1hc2tzIGEgYnVmZmVyIHVzaW5nIHRoZSBnaXZlbiBtYXNrLlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byB1bm1hc2tcbiAqIEBwYXJhbSB7QnVmZmVyfSBtYXNrIFRoZSBtYXNrIHRvIHVzZVxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBfdW5tYXNrKGJ1ZmZlciwgbWFzaykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1ZmZlci5sZW5ndGg7IGkrKykge1xuICAgIGJ1ZmZlcltpXSBePSBtYXNrW2kgJiAzXTtcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgYnVmZmVyIHRvIGFuIGBBcnJheUJ1ZmZlcmAuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZiBUaGUgYnVmZmVyIHRvIGNvbnZlcnRcbiAqIEByZXR1cm4ge0FycmF5QnVmZmVyfSBDb252ZXJ0ZWQgYnVmZmVyXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXlCdWZmZXIoYnVmKSB7XG4gIGlmIChidWYubGVuZ3RoID09PSBidWYuYnVmZmVyLmJ5dGVMZW5ndGgpIHtcbiAgICByZXR1cm4gYnVmLmJ1ZmZlcjtcbiAgfVxuXG4gIHJldHVybiBidWYuYnVmZmVyLnNsaWNlKGJ1Zi5ieXRlT2Zmc2V0LCBidWYuYnl0ZU9mZnNldCArIGJ1Zi5sZW5ndGgpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBkYXRhYCB0byBhIGBCdWZmZXJgLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgZGF0YSB0byBjb252ZXJ0XG4gKiBAcmV0dXJuIHtCdWZmZXJ9IFRoZSBidWZmZXJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn1cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdG9CdWZmZXIoZGF0YSkge1xuICB0b0J1ZmZlci5yZWFkT25seSA9IHRydWU7XG5cbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihkYXRhKSkgcmV0dXJuIGRhdGE7XG5cbiAgbGV0IGJ1ZjtcblxuICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgYnVmID0gbmV3IEZhc3RCdWZmZXIoZGF0YSk7XG4gIH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpKSB7XG4gICAgYnVmID0gbmV3IEZhc3RCdWZmZXIoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoKTtcbiAgfSBlbHNlIHtcbiAgICBidWYgPSBCdWZmZXIuZnJvbShkYXRhKTtcbiAgICB0b0J1ZmZlci5yZWFkT25seSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGJ1Zjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbmNhdCxcbiAgbWFzazogX21hc2ssXG4gIHRvQXJyYXlCdWZmZXIsXG4gIHRvQnVmZmVyLFxuICB1bm1hc2s6IF91bm1hc2tcbn07XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICAqL1xuaWYgKCFwcm9jZXNzLmVudi5XU19OT19CVUZGRVJfVVRJTCkge1xuICB0cnkge1xuICAgIGNvbnN0IGJ1ZmZlclV0aWwgPSByZXF1aXJlKCdidWZmZXJ1dGlsJyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cy5tYXNrID0gZnVuY3Rpb24gKHNvdXJjZSwgbWFzaywgb3V0cHV0LCBvZmZzZXQsIGxlbmd0aCkge1xuICAgICAgaWYgKGxlbmd0aCA8IDQ4KSBfbWFzayhzb3VyY2UsIG1hc2ssIG91dHB1dCwgb2Zmc2V0LCBsZW5ndGgpO1xuICAgICAgZWxzZSBidWZmZXJVdGlsLm1hc2soc291cmNlLCBtYXNrLCBvdXRwdXQsIG9mZnNldCwgbGVuZ3RoKTtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHMudW5tYXNrID0gZnVuY3Rpb24gKGJ1ZmZlciwgbWFzaykge1xuICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPCAzMikgX3VubWFzayhidWZmZXIsIG1hc2spO1xuICAgICAgZWxzZSBidWZmZXJVdGlsLnVubWFzayhidWZmZXIsIG1hc2spO1xuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBDb250aW51ZSByZWdhcmRsZXNzIG9mIHRoZSBlcnJvci5cbiAgfVxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3Qga0RvbmUgPSBTeW1ib2woJ2tEb25lJyk7XG5jb25zdCBrUnVuID0gU3ltYm9sKCdrUnVuJyk7XG5cbi8qKlxuICogQSB2ZXJ5IHNpbXBsZSBqb2IgcXVldWUgd2l0aCBhZGp1c3RhYmxlIGNvbmN1cnJlbmN5LiBBZGFwdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9TVFJNTC9hc3luYy1saW1pdGVyXG4gKi9cbmNsYXNzIExpbWl0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBgTGltaXRlcmAuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbY29uY3VycmVuY3k9SW5maW5pdHldIFRoZSBtYXhpbXVtIG51bWJlciBvZiBqb2JzIGFsbG93ZWRcbiAgICogICAgIHRvIHJ1biBjb25jdXJyZW50bHlcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmN1cnJlbmN5KSB7XG4gICAgdGhpc1trRG9uZV0gPSAoKSA9PiB7XG4gICAgICB0aGlzLnBlbmRpbmctLTtcbiAgICAgIHRoaXNba1J1bl0oKTtcbiAgICB9O1xuICAgIHRoaXMuY29uY3VycmVuY3kgPSBjb25jdXJyZW5jeSB8fCBJbmZpbml0eTtcbiAgICB0aGlzLmpvYnMgPSBbXTtcbiAgICB0aGlzLnBlbmRpbmcgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBqb2IgdG8gdGhlIHF1ZXVlLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBqb2IgVGhlIGpvYiB0byBydW5cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgYWRkKGpvYikge1xuICAgIHRoaXMuam9icy5wdXNoKGpvYik7XG4gICAgdGhpc1trUnVuXSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBqb2IgZnJvbSB0aGUgcXVldWUgYW5kIHJ1bnMgaXQgaWYgcG9zc2libGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBba1J1bl0oKSB7XG4gICAgaWYgKHRoaXMucGVuZGluZyA9PT0gdGhpcy5jb25jdXJyZW5jeSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuam9icy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGpvYiA9IHRoaXMuam9icy5zaGlmdCgpO1xuXG4gICAgICB0aGlzLnBlbmRpbmcrKztcbiAgICAgIGpvYih0aGlzW2tEb25lXSk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGltaXRlcjtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHpsaWIgPSByZXF1aXJlKCd6bGliJyk7XG5cbmNvbnN0IGJ1ZmZlclV0aWwgPSByZXF1aXJlKCcuL2J1ZmZlci11dGlsJyk7XG5jb25zdCBMaW1pdGVyID0gcmVxdWlyZSgnLi9saW1pdGVyJyk7XG5jb25zdCB7IGtTdGF0dXNDb2RlIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5jb25zdCBGYXN0QnVmZmVyID0gQnVmZmVyW1N5bWJvbC5zcGVjaWVzXTtcbmNvbnN0IFRSQUlMRVIgPSBCdWZmZXIuZnJvbShbMHgwMCwgMHgwMCwgMHhmZiwgMHhmZl0pO1xuY29uc3Qga1Blck1lc3NhZ2VEZWZsYXRlID0gU3ltYm9sKCdwZXJtZXNzYWdlLWRlZmxhdGUnKTtcbmNvbnN0IGtUb3RhbExlbmd0aCA9IFN5bWJvbCgndG90YWwtbGVuZ3RoJyk7XG5jb25zdCBrQ2FsbGJhY2sgPSBTeW1ib2woJ2NhbGxiYWNrJyk7XG5jb25zdCBrQnVmZmVycyA9IFN5bWJvbCgnYnVmZmVycycpO1xuY29uc3Qga0Vycm9yID0gU3ltYm9sKCdlcnJvcicpO1xuXG4vL1xuLy8gV2UgbGltaXQgemxpYiBjb25jdXJyZW5jeSwgd2hpY2ggcHJldmVudHMgc2V2ZXJlIG1lbW9yeSBmcmFnbWVudGF0aW9uXG4vLyBhcyBkb2N1bWVudGVkIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvODg3MSNpc3N1ZWNvbW1lbnQtMjUwOTE1OTEzXG4vLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL3dlYnNvY2tldHMvd3MvaXNzdWVzLzEyMDJcbi8vXG4vLyBJbnRlbnRpb25hbGx5IGdsb2JhbDsgaXQncyB0aGUgZ2xvYmFsIHRocmVhZCBwb29sIHRoYXQncyBhbiBpc3N1ZS5cbi8vXG5sZXQgemxpYkxpbWl0ZXI7XG5cbi8qKlxuICogcGVybWVzc2FnZS1kZWZsYXRlIGltcGxlbWVudGF0aW9uLlxuICovXG5jbGFzcyBQZXJNZXNzYWdlRGVmbGF0ZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgUGVyTWVzc2FnZURlZmxhdGUgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQ29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58TnVtYmVyKX0gW29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0c10gQWR2ZXJ0aXNlIHN1cHBvcnRcbiAgICogICAgIGZvciwgb3IgcmVxdWVzdCwgYSBjdXN0b20gY2xpZW50IHdpbmRvdyBzaXplXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuY2xpZW50Tm9Db250ZXh0VGFrZW92ZXI9ZmFsc2VdIEFkdmVydGlzZS9cbiAgICogICAgIGFja25vd2xlZGdlIGRpc2FibGluZyBvZiBjbGllbnQgY29udGV4dCB0YWtlb3ZlclxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuY29uY3VycmVuY3lMaW1pdD0xMF0gVGhlIG51bWJlciBvZiBjb25jdXJyZW50XG4gICAqICAgICBjYWxscyB0byB6bGliXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaXNTZXJ2ZXI9ZmFsc2VdIENyZWF0ZSB0aGUgaW5zdGFuY2UgaW4gZWl0aGVyXG4gICAqICAgICBzZXJ2ZXIgb3IgY2xpZW50IG1vZGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm1heFBheWxvYWQ9MF0gVGhlIG1heGltdW0gYWxsb3dlZCBtZXNzYWdlIGxlbmd0aFxuICAgKiBAcGFyYW0geyhCb29sZWFufE51bWJlcil9IFtvcHRpb25zLnNlcnZlck1heFdpbmRvd0JpdHNdIFJlcXVlc3QvY29uZmlybSB0aGVcbiAgICogICAgIHVzZSBvZiBhIGN1c3RvbSBzZXJ2ZXIgd2luZG93IHNpemVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5zZXJ2ZXJOb0NvbnRleHRUYWtlb3Zlcj1mYWxzZV0gUmVxdWVzdC9hY2NlcHRcbiAgICogICAgIGRpc2FibGluZyBvZiBzZXJ2ZXIgY29udGV4dCB0YWtlb3ZlclxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudGhyZXNob2xkPTEwMjRdIFNpemUgKGluIGJ5dGVzKSBiZWxvdyB3aGljaFxuICAgKiAgICAgbWVzc2FnZXMgc2hvdWxkIG5vdCBiZSBjb21wcmVzc2VkIGlmIGNvbnRleHQgdGFrZW92ZXIgaXMgZGlzYWJsZWRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnpsaWJEZWZsYXRlT3B0aW9uc10gT3B0aW9ucyB0byBwYXNzIHRvIHpsaWIgb25cbiAgICogICAgIGRlZmxhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnpsaWJJbmZsYXRlT3B0aW9uc10gT3B0aW9ucyB0byBwYXNzIHRvIHpsaWIgb25cbiAgICogICAgIGluZmxhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLl90aHJlc2hvbGQgPVxuICAgICAgdGhpcy5fb3B0aW9ucy50aHJlc2hvbGQgIT09IHVuZGVmaW5lZCA/IHRoaXMuX29wdGlvbnMudGhyZXNob2xkIDogMTAyNDtcbiAgICB0aGlzLl9tYXhQYXlsb2FkID0gdGhpcy5fb3B0aW9ucy5tYXhQYXlsb2FkIHwgMDtcbiAgICB0aGlzLl9pc1NlcnZlciA9ICEhdGhpcy5fb3B0aW9ucy5pc1NlcnZlcjtcbiAgICB0aGlzLl9kZWZsYXRlID0gbnVsbDtcbiAgICB0aGlzLl9pbmZsYXRlID0gbnVsbDtcblxuICAgIHRoaXMucGFyYW1zID0gbnVsbDtcblxuICAgIGlmICghemxpYkxpbWl0ZXIpIHtcbiAgICAgIGNvbnN0IGNvbmN1cnJlbmN5ID1cbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jb25jdXJyZW5jeUxpbWl0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IHRoaXMuX29wdGlvbnMuY29uY3VycmVuY3lMaW1pdFxuICAgICAgICAgIDogMTA7XG4gICAgICB6bGliTGltaXRlciA9IG5ldyBMaW1pdGVyKGNvbmN1cnJlbmN5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgZXh0ZW5zaW9uTmFtZSgpIHtcbiAgICByZXR1cm4gJ3Blcm1lc3NhZ2UtZGVmbGF0ZSc7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBuZWdvdGlhdGlvbiBvZmZlci5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fSBFeHRlbnNpb24gcGFyYW1ldGVyc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBvZmZlcigpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgIGlmICh0aGlzLl9vcHRpb25zLnNlcnZlck5vQ29udGV4dFRha2VvdmVyKSB7XG4gICAgICBwYXJhbXMuc2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5jbGllbnROb0NvbnRleHRUYWtlb3Zlcikge1xuICAgICAgcGFyYW1zLmNsaWVudF9ub19jb250ZXh0X3Rha2VvdmVyID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuc2VydmVyTWF4V2luZG93Qml0cykge1xuICAgICAgcGFyYW1zLnNlcnZlcl9tYXhfd2luZG93X2JpdHMgPSB0aGlzLl9vcHRpb25zLnNlcnZlck1heFdpbmRvd0JpdHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMpIHtcbiAgICAgIHBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzID0gdGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzID09IG51bGwpIHtcbiAgICAgIHBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBhbiBleHRlbnNpb24gbmVnb3RpYXRpb24gb2ZmZXIvcmVzcG9uc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGNvbmZpZ3VyYXRpb25zIFRoZSBleHRlbnNpb24gbmVnb3RpYXRpb24gb2ZmZXJzL3JlcG9uc2VcbiAgICogQHJldHVybiB7T2JqZWN0fSBBY2NlcHRlZCBjb25maWd1cmF0aW9uXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFjY2VwdChjb25maWd1cmF0aW9ucykge1xuICAgIGNvbmZpZ3VyYXRpb25zID0gdGhpcy5ub3JtYWxpemVQYXJhbXMoY29uZmlndXJhdGlvbnMpO1xuXG4gICAgdGhpcy5wYXJhbXMgPSB0aGlzLl9pc1NlcnZlclxuICAgICAgPyB0aGlzLmFjY2VwdEFzU2VydmVyKGNvbmZpZ3VyYXRpb25zKVxuICAgICAgOiB0aGlzLmFjY2VwdEFzQ2xpZW50KGNvbmZpZ3VyYXRpb25zKTtcblxuICAgIHJldHVybiB0aGlzLnBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlcyBhbGwgcmVzb3VyY2VzIHVzZWQgYnkgdGhlIGV4dGVuc2lvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY2xlYW51cCgpIHtcbiAgICBpZiAodGhpcy5faW5mbGF0ZSkge1xuICAgICAgdGhpcy5faW5mbGF0ZS5jbG9zZSgpO1xuICAgICAgdGhpcy5faW5mbGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RlZmxhdGUpIHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5fZGVmbGF0ZVtrQ2FsbGJhY2tdO1xuXG4gICAgICB0aGlzLl9kZWZsYXRlLmNsb3NlKCk7XG4gICAgICB0aGlzLl9kZWZsYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKFxuICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICdUaGUgZGVmbGF0ZSBzdHJlYW0gd2FzIGNsb3NlZCB3aGlsZSBkYXRhIHdhcyBiZWluZyBwcm9jZXNzZWQnXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAgQWNjZXB0IGFuIGV4dGVuc2lvbiBuZWdvdGlhdGlvbiBvZmZlci5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gb2ZmZXJzIFRoZSBleHRlbnNpb24gbmVnb3RpYXRpb24gb2ZmZXJzXG4gICAqIEByZXR1cm4ge09iamVjdH0gQWNjZXB0ZWQgY29uZmlndXJhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWNjZXB0QXNTZXJ2ZXIob2ZmZXJzKSB7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMuX29wdGlvbnM7XG4gICAgY29uc3QgYWNjZXB0ZWQgPSBvZmZlcnMuZmluZCgocGFyYW1zKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIChvcHRzLnNlcnZlck5vQ29udGV4dFRha2VvdmVyID09PSBmYWxzZSAmJlxuICAgICAgICAgIHBhcmFtcy5zZXJ2ZXJfbm9fY29udGV4dF90YWtlb3ZlcikgfHxcbiAgICAgICAgKHBhcmFtcy5zZXJ2ZXJfbWF4X3dpbmRvd19iaXRzICYmXG4gICAgICAgICAgKG9wdHMuc2VydmVyTWF4V2luZG93Qml0cyA9PT0gZmFsc2UgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygb3B0cy5zZXJ2ZXJNYXhXaW5kb3dCaXRzID09PSAnbnVtYmVyJyAmJlxuICAgICAgICAgICAgICBvcHRzLnNlcnZlck1heFdpbmRvd0JpdHMgPiBwYXJhbXMuc2VydmVyX21heF93aW5kb3dfYml0cykpKSB8fFxuICAgICAgICAodHlwZW9mIG9wdHMuY2xpZW50TWF4V2luZG93Qml0cyA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgICAhcGFyYW1zLmNsaWVudF9tYXhfd2luZG93X2JpdHMpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGlmICghYWNjZXB0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm9uZSBvZiB0aGUgZXh0ZW5zaW9uIG9mZmVycyBjYW4gYmUgYWNjZXB0ZWQnKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5zZXJ2ZXJOb0NvbnRleHRUYWtlb3Zlcikge1xuICAgICAgYWNjZXB0ZWQuc2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0cy5jbGllbnROb0NvbnRleHRUYWtlb3Zlcikge1xuICAgICAgYWNjZXB0ZWQuY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdHMuc2VydmVyTWF4V2luZG93Qml0cyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGFjY2VwdGVkLnNlcnZlcl9tYXhfd2luZG93X2JpdHMgPSBvcHRzLnNlcnZlck1heFdpbmRvd0JpdHM7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0cy5jbGllbnRNYXhXaW5kb3dCaXRzID09PSAnbnVtYmVyJykge1xuICAgICAgYWNjZXB0ZWQuY2xpZW50X21heF93aW5kb3dfYml0cyA9IG9wdHMuY2xpZW50TWF4V2luZG93Qml0cztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgYWNjZXB0ZWQuY2xpZW50X21heF93aW5kb3dfYml0cyA9PT0gdHJ1ZSB8fFxuICAgICAgb3B0cy5jbGllbnRNYXhXaW5kb3dCaXRzID09PSBmYWxzZVxuICAgICkge1xuICAgICAgZGVsZXRlIGFjY2VwdGVkLmNsaWVudF9tYXhfd2luZG93X2JpdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY2VwdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdCB0aGUgZXh0ZW5zaW9uIG5lZ290aWF0aW9uIHJlc3BvbnNlLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSByZXNwb25zZSBUaGUgZXh0ZW5zaW9uIG5lZ290aWF0aW9uIHJlc3BvbnNlXG4gICAqIEByZXR1cm4ge09iamVjdH0gQWNjZXB0ZWQgY29uZmlndXJhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWNjZXB0QXNDbGllbnQocmVzcG9uc2UpIHtcbiAgICBjb25zdCBwYXJhbXMgPSByZXNwb25zZVswXTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMuX29wdGlvbnMuY2xpZW50Tm9Db250ZXh0VGFrZW92ZXIgPT09IGZhbHNlICYmXG4gICAgICBwYXJhbXMuY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXJcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBwYXJhbWV0ZXIgXCJjbGllbnRfbm9fY29udGV4dF90YWtlb3ZlclwiJyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJhbXMuY2xpZW50X21heF93aW5kb3dfYml0cykge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHBhcmFtcy5jbGllbnRfbWF4X3dpbmRvd19iaXRzID0gdGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMgPT09IGZhbHNlIHx8XG4gICAgICAodHlwZW9mIHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cyA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgcGFyYW1zLmNsaWVudF9tYXhfd2luZG93X2JpdHMgPiB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdVbmV4cGVjdGVkIG9yIGludmFsaWQgcGFyYW1ldGVyIFwiY2xpZW50X21heF93aW5kb3dfYml0c1wiJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBwYXJhbWV0ZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBjb25maWd1cmF0aW9ucyBUaGUgZXh0ZW5zaW9uIG5lZ290aWF0aW9uIG9mZmVycy9yZXBvbnNlXG4gICAqIEByZXR1cm4ge0FycmF5fSBUaGUgb2ZmZXJzL3Jlc3BvbnNlIHdpdGggbm9ybWFsaXplZCBwYXJhbWV0ZXJzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBub3JtYWxpemVQYXJhbXMoY29uZmlndXJhdGlvbnMpIHtcbiAgICBjb25maWd1cmF0aW9ucy5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHBhcmFtc1trZXldO1xuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgXCIke2tleX1cIiBtdXN0IGhhdmUgb25seSBhIHNpbmdsZSB2YWx1ZWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZVswXTtcblxuICAgICAgICBpZiAoa2V5ID09PSAnY2xpZW50X21heF93aW5kb3dfYml0cycpIHtcbiAgICAgICAgICBpZiAodmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9ICt2YWx1ZTtcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihudW0pIHx8IG51bSA8IDggfHwgbnVtID4gMTUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgICBgSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyIFwiJHtrZXl9XCI6ICR7dmFsdWV9YFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSBudW07XG4gICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgIGBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgXCIke2tleX1cIjogJHt2YWx1ZX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdzZXJ2ZXJfbWF4X3dpbmRvd19iaXRzJykge1xuICAgICAgICAgIGNvbnN0IG51bSA9ICt2YWx1ZTtcbiAgICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIobnVtKSB8fCBudW0gPCA4IHx8IG51bSA+IDE1KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICBgSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyIFwiJHtrZXl9XCI6ICR7dmFsdWV9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWUgPSBudW07XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAga2V5ID09PSAnY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXInIHx8XG4gICAgICAgICAga2V5ID09PSAnc2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXInXG4gICAgICAgICkge1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgYEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciBcIiR7a2V5fVwiOiAke3ZhbHVlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBwYXJhbWV0ZXIgXCIke2tleX1cImApO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY29tcHJlc3MgZGF0YS4gQ29uY3VycmVuY3kgbGltaXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgQ29tcHJlc3NlZCBkYXRhXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmluIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGlzIHRoZSBsYXN0IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGRlY29tcHJlc3MoZGF0YSwgZmluLCBjYWxsYmFjaykge1xuICAgIHpsaWJMaW1pdGVyLmFkZCgoZG9uZSkgPT4ge1xuICAgICAgdGhpcy5fZGVjb21wcmVzcyhkYXRhLCBmaW4sIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICBkb25lKCk7XG4gICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXByZXNzIGRhdGEuIENvbmN1cnJlbmN5IGxpbWl0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7KEJ1ZmZlcnxTdHJpbmcpfSBkYXRhIERhdGEgdG8gY29tcHJlc3NcbiAgICogQHBhcmFtIHtCb29sZWFufSBmaW4gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgdGhlIGxhc3QgZnJhZ21lbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY29tcHJlc3MoZGF0YSwgZmluLCBjYWxsYmFjaykge1xuICAgIHpsaWJMaW1pdGVyLmFkZCgoZG9uZSkgPT4ge1xuICAgICAgdGhpcy5fY29tcHJlc3MoZGF0YSwgZmluLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNvbXByZXNzIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIENvbXByZXNzZWQgZGF0YVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZpbiBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdGhpcyBpcyB0aGUgbGFzdCBmcmFnbWVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2RlY29tcHJlc3MoZGF0YSwgZmluLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5faXNTZXJ2ZXIgPyAnY2xpZW50JyA6ICdzZXJ2ZXInO1xuXG4gICAgaWYgKCF0aGlzLl9pbmZsYXRlKSB7XG4gICAgICBjb25zdCBrZXkgPSBgJHtlbmRwb2ludH1fbWF4X3dpbmRvd19iaXRzYDtcbiAgICAgIGNvbnN0IHdpbmRvd0JpdHMgPVxuICAgICAgICB0eXBlb2YgdGhpcy5wYXJhbXNba2V5XSAhPT0gJ251bWJlcidcbiAgICAgICAgICA/IHpsaWIuWl9ERUZBVUxUX1dJTkRPV0JJVFNcbiAgICAgICAgICA6IHRoaXMucGFyYW1zW2tleV07XG5cbiAgICAgIHRoaXMuX2luZmxhdGUgPSB6bGliLmNyZWF0ZUluZmxhdGVSYXcoe1xuICAgICAgICAuLi50aGlzLl9vcHRpb25zLnpsaWJJbmZsYXRlT3B0aW9ucyxcbiAgICAgICAgd2luZG93Qml0c1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9pbmZsYXRlW2tQZXJNZXNzYWdlRGVmbGF0ZV0gPSB0aGlzO1xuICAgICAgdGhpcy5faW5mbGF0ZVtrVG90YWxMZW5ndGhdID0gMDtcbiAgICAgIHRoaXMuX2luZmxhdGVba0J1ZmZlcnNdID0gW107XG4gICAgICB0aGlzLl9pbmZsYXRlLm9uKCdlcnJvcicsIGluZmxhdGVPbkVycm9yKTtcbiAgICAgIHRoaXMuX2luZmxhdGUub24oJ2RhdGEnLCBpbmZsYXRlT25EYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pbmZsYXRlW2tDYWxsYmFja10gPSBjYWxsYmFjaztcblxuICAgIHRoaXMuX2luZmxhdGUud3JpdGUoZGF0YSk7XG4gICAgaWYgKGZpbikgdGhpcy5faW5mbGF0ZS53cml0ZShUUkFJTEVSKTtcblxuICAgIHRoaXMuX2luZmxhdGUuZmx1c2goKCkgPT4ge1xuICAgICAgY29uc3QgZXJyID0gdGhpcy5faW5mbGF0ZVtrRXJyb3JdO1xuXG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRoaXMuX2luZmxhdGUuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5faW5mbGF0ZSA9IG51bGw7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IGJ1ZmZlclV0aWwuY29uY2F0KFxuICAgICAgICB0aGlzLl9pbmZsYXRlW2tCdWZmZXJzXSxcbiAgICAgICAgdGhpcy5faW5mbGF0ZVtrVG90YWxMZW5ndGhdXG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5faW5mbGF0ZS5fcmVhZGFibGVTdGF0ZS5lbmRFbWl0dGVkKSB7XG4gICAgICAgIHRoaXMuX2luZmxhdGUuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5faW5mbGF0ZSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbmZsYXRlW2tUb3RhbExlbmd0aF0gPSAwO1xuICAgICAgICB0aGlzLl9pbmZsYXRlW2tCdWZmZXJzXSA9IFtdO1xuXG4gICAgICAgIGlmIChmaW4gJiYgdGhpcy5wYXJhbXNbYCR7ZW5kcG9pbnR9X25vX2NvbnRleHRfdGFrZW92ZXJgXSkge1xuICAgICAgICAgIHRoaXMuX2luZmxhdGUucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wcmVzcyBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0geyhCdWZmZXJ8U3RyaW5nKX0gZGF0YSBEYXRhIHRvIGNvbXByZXNzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmluIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGlzIHRoZSBsYXN0IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29tcHJlc3MoZGF0YSwgZmluLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5faXNTZXJ2ZXIgPyAnc2VydmVyJyA6ICdjbGllbnQnO1xuXG4gICAgaWYgKCF0aGlzLl9kZWZsYXRlKSB7XG4gICAgICBjb25zdCBrZXkgPSBgJHtlbmRwb2ludH1fbWF4X3dpbmRvd19iaXRzYDtcbiAgICAgIGNvbnN0IHdpbmRvd0JpdHMgPVxuICAgICAgICB0eXBlb2YgdGhpcy5wYXJhbXNba2V5XSAhPT0gJ251bWJlcidcbiAgICAgICAgICA/IHpsaWIuWl9ERUZBVUxUX1dJTkRPV0JJVFNcbiAgICAgICAgICA6IHRoaXMucGFyYW1zW2tleV07XG5cbiAgICAgIHRoaXMuX2RlZmxhdGUgPSB6bGliLmNyZWF0ZURlZmxhdGVSYXcoe1xuICAgICAgICAuLi50aGlzLl9vcHRpb25zLnpsaWJEZWZsYXRlT3B0aW9ucyxcbiAgICAgICAgd2luZG93Qml0c1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2RlZmxhdGVba1RvdGFsTGVuZ3RoXSA9IDA7XG4gICAgICB0aGlzLl9kZWZsYXRlW2tCdWZmZXJzXSA9IFtdO1xuXG4gICAgICB0aGlzLl9kZWZsYXRlLm9uKCdkYXRhJywgZGVmbGF0ZU9uRGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGVmbGF0ZVtrQ2FsbGJhY2tdID0gY2FsbGJhY2s7XG5cbiAgICB0aGlzLl9kZWZsYXRlLndyaXRlKGRhdGEpO1xuICAgIHRoaXMuX2RlZmxhdGUuZmx1c2goemxpYi5aX1NZTkNfRkxVU0gsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fZGVmbGF0ZSkge1xuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgZGVmbGF0ZSBzdHJlYW0gd2FzIGNsb3NlZCB3aGlsZSBkYXRhIHdhcyBiZWluZyBwcm9jZXNzZWQuXG4gICAgICAgIC8vXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGEgPSBidWZmZXJVdGlsLmNvbmNhdChcbiAgICAgICAgdGhpcy5fZGVmbGF0ZVtrQnVmZmVyc10sXG4gICAgICAgIHRoaXMuX2RlZmxhdGVba1RvdGFsTGVuZ3RoXVxuICAgICAgKTtcblxuICAgICAgaWYgKGZpbikge1xuICAgICAgICBkYXRhID0gbmV3IEZhc3RCdWZmZXIoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5sZW5ndGggLSA0KTtcbiAgICAgIH1cblxuICAgICAgLy9cbiAgICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBjYWxsYmFjayB3aWxsIG5vdCBiZSBjYWxsZWQgYWdhaW4gaW5cbiAgICAgIC8vIGBQZXJNZXNzYWdlRGVmbGF0ZSNjbGVhbnVwKClgLlxuICAgICAgLy9cbiAgICAgIHRoaXMuX2RlZmxhdGVba0NhbGxiYWNrXSA9IG51bGw7XG5cbiAgICAgIHRoaXMuX2RlZmxhdGVba1RvdGFsTGVuZ3RoXSA9IDA7XG4gICAgICB0aGlzLl9kZWZsYXRlW2tCdWZmZXJzXSA9IFtdO1xuXG4gICAgICBpZiAoZmluICYmIHRoaXMucGFyYW1zW2Ake2VuZHBvaW50fV9ub19jb250ZXh0X3Rha2VvdmVyYF0pIHtcbiAgICAgICAgdGhpcy5fZGVmbGF0ZS5yZXNldCgpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBlck1lc3NhZ2VEZWZsYXRlO1xuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgYHpsaWIuRGVmbGF0ZVJhd2Agc3RyZWFtIGAnZGF0YSdgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBjaHVuayBBIGNodW5rIG9mIGRhdGFcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlZmxhdGVPbkRhdGEoY2h1bmspIHtcbiAgdGhpc1trQnVmZmVyc10ucHVzaChjaHVuayk7XG4gIHRoaXNba1RvdGFsTGVuZ3RoXSArPSBjaHVuay5sZW5ndGg7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgemxpYi5JbmZsYXRlUmF3YCBzdHJlYW0gYCdkYXRhJ2AgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGNodW5rIEEgY2h1bmsgb2YgZGF0YVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5mbGF0ZU9uRGF0YShjaHVuaykge1xuICB0aGlzW2tUb3RhbExlbmd0aF0gKz0gY2h1bmsubGVuZ3RoO1xuXG4gIGlmIChcbiAgICB0aGlzW2tQZXJNZXNzYWdlRGVmbGF0ZV0uX21heFBheWxvYWQgPCAxIHx8XG4gICAgdGhpc1trVG90YWxMZW5ndGhdIDw9IHRoaXNba1Blck1lc3NhZ2VEZWZsYXRlXS5fbWF4UGF5bG9hZFxuICApIHtcbiAgICB0aGlzW2tCdWZmZXJzXS5wdXNoKGNodW5rKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzW2tFcnJvcl0gPSBuZXcgUmFuZ2VFcnJvcignTWF4IHBheWxvYWQgc2l6ZSBleGNlZWRlZCcpO1xuICB0aGlzW2tFcnJvcl0uY29kZSA9ICdXU19FUlJfVU5TVVBQT1JURURfTUVTU0FHRV9MRU5HVEgnO1xuICB0aGlzW2tFcnJvcl1ba1N0YXR1c0NvZGVdID0gMTAwOTtcbiAgdGhpcy5yZW1vdmVMaXN0ZW5lcignZGF0YScsIGluZmxhdGVPbkRhdGEpO1xuXG4gIC8vXG4gIC8vIFRoZSBjaG9pY2UgdG8gZW1wbG95IGB6bGliLnJlc2V0KClgIG92ZXIgYHpsaWIuY2xvc2UoKWAgaXMgZGljdGF0ZWQgYnkgdGhlXG4gIC8vIGZhY3QgdGhhdCBpbiBOb2RlLmpzIHZlcnNpb25zIHByaW9yIHRvIDEzLjEwLjAsIHRoZSBjYWxsYmFjayBmb3JcbiAgLy8gYHpsaWIuZmx1c2goKWAgaXMgbm90IGNhbGxlZCBpZiBgemxpYi5jbG9zZSgpYCBpcyB1c2VkLiBVdGlsaXppbmdcbiAgLy8gYHpsaWIucmVzZXQoKWAgZW5zdXJlcyB0aGF0IGVpdGhlciB0aGUgY2FsbGJhY2sgaXMgaW52b2tlZCBvciBhbiBlcnJvciBpc1xuICAvLyBlbWl0dGVkLlxuICAvL1xuICB0aGlzLnJlc2V0KCk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgemxpYi5JbmZsYXRlUmF3YCBzdHJlYW0gYCdlcnJvcidgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyciBUaGUgZW1pdHRlZCBlcnJvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5mbGF0ZU9uRXJyb3IoZXJyKSB7XG4gIC8vXG4gIC8vIFRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBgWmxpYiNjbG9zZSgpYCBhcyB0aGUgaGFuZGxlIGlzIGF1dG9tYXRpY2FsbHlcbiAgLy8gY2xvc2VkIHdoZW4gYW4gZXJyb3IgaXMgZW1pdHRlZC5cbiAgLy9cbiAgdGhpc1trUGVyTWVzc2FnZURlZmxhdGVdLl9pbmZsYXRlID0gbnVsbDtcblxuICBpZiAodGhpc1trRXJyb3JdKSB7XG4gICAgdGhpc1trQ2FsbGJhY2tdKHRoaXNba0Vycm9yXSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZXJyW2tTdGF0dXNDb2RlXSA9IDEwMDc7XG4gIHRoaXNba0NhbGxiYWNrXShlcnIpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBpc1V0ZjggfSA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG5jb25zdCB7IGhhc0Jsb2IgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbi8vXG4vLyBBbGxvd2VkIHRva2VuIGNoYXJhY3RlcnM6XG4vL1xuLy8gJyEnLCAnIycsICckJywgJyUnLCAnJicsICcnJywgJyonLCAnKycsICctJyxcbi8vICcuJywgMC05LCBBLVosICdeJywgJ18nLCAnYCcsIGEteiwgJ3wnLCAnfidcbi8vXG4vLyB0b2tlbkNoYXJzWzMyXSA9PT0gMCAvLyAnICdcbi8vIHRva2VuQ2hhcnNbMzNdID09PSAxIC8vICchJ1xuLy8gdG9rZW5DaGFyc1szNF0gPT09IDAgLy8gJ1wiJ1xuLy8gLi4uXG4vL1xuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCB0b2tlbkNoYXJzID0gW1xuICAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAvLyAwIC0gMTVcbiAgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgLy8gMTYgLSAzMVxuICAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAwLCAvLyAzMiAtIDQ3XG4gIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIC8vIDQ4IC0gNjNcbiAgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgLy8gNjQgLSA3OVxuICAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAvLyA4MCAtIDk1XG4gIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIC8vIDk2IC0gMTExXG4gIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDAgLy8gMTEyIC0gMTI3XG5dO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIHN0YXR1cyBjb2RlIGlzIGFsbG93ZWQgaW4gYSBjbG9zZSBmcmFtZS5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gY29kZSBUaGUgc3RhdHVzIGNvZGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgc3RhdHVzIGNvZGUgaXMgdmFsaWQsIGVsc2UgYGZhbHNlYFxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBpc1ZhbGlkU3RhdHVzQ29kZShjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgKGNvZGUgPj0gMTAwMCAmJlxuICAgICAgY29kZSA8PSAxMDE0ICYmXG4gICAgICBjb2RlICE9PSAxMDA0ICYmXG4gICAgICBjb2RlICE9PSAxMDA1ICYmXG4gICAgICBjb2RlICE9PSAxMDA2KSB8fFxuICAgIChjb2RlID49IDMwMDAgJiYgY29kZSA8PSA0OTk5KVxuICApO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGdpdmVuIGJ1ZmZlciBjb250YWlucyBvbmx5IGNvcnJlY3QgVVRGLTguXG4gKiBQb3J0ZWQgZnJvbSBodHRwczovL3d3dy5jbC5jYW0uYWMudWsvJTdFbWdrMjUvdWNzL3V0ZjhfY2hlY2suYyBieVxuICogTWFya3VzIEt1aG4uXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZiBUaGUgYnVmZmVyIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYGJ1ZmAgY29udGFpbnMgb25seSBjb3JyZWN0IFVURi04LCBlbHNlIGBmYWxzZWBcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gX2lzVmFsaWRVVEY4KGJ1Zikge1xuICBjb25zdCBsZW4gPSBidWYubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBpZiAoKGJ1ZltpXSAmIDB4ODApID09PSAwKSB7XG4gICAgICAvLyAweHh4eHh4eFxuICAgICAgaSsrO1xuICAgIH0gZWxzZSBpZiAoKGJ1ZltpXSAmIDB4ZTApID09PSAweGMwKSB7XG4gICAgICAvLyAxMTB4eHh4eCAxMHh4eHh4eFxuICAgICAgaWYgKFxuICAgICAgICBpICsgMSA9PT0gbGVuIHx8XG4gICAgICAgIChidWZbaSArIDFdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpXSAmIDB4ZmUpID09PSAweGMwIC8vIE92ZXJsb25nXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpICs9IDI7XG4gICAgfSBlbHNlIGlmICgoYnVmW2ldICYgMHhmMCkgPT09IDB4ZTApIHtcbiAgICAgIC8vIDExMTB4eHh4IDEweHh4eHh4IDEweHh4eHh4XG4gICAgICBpZiAoXG4gICAgICAgIGkgKyAyID49IGxlbiB8fFxuICAgICAgICAoYnVmW2kgKyAxXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIChidWZbaSArIDJdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpXSA9PT0gMHhlMCAmJiAoYnVmW2kgKyAxXSAmIDB4ZTApID09PSAweDgwKSB8fCAvLyBPdmVybG9uZ1xuICAgICAgICAoYnVmW2ldID09PSAweGVkICYmIChidWZbaSArIDFdICYgMHhlMCkgPT09IDB4YTApIC8vIFN1cnJvZ2F0ZSAoVStEODAwIC0gVStERkZGKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaSArPSAzO1xuICAgIH0gZWxzZSBpZiAoKGJ1ZltpXSAmIDB4ZjgpID09PSAweGYwKSB7XG4gICAgICAvLyAxMTExMHh4eCAxMHh4eHh4eCAxMHh4eHh4eCAxMHh4eHh4eFxuICAgICAgaWYgKFxuICAgICAgICBpICsgMyA+PSBsZW4gfHxcbiAgICAgICAgKGJ1ZltpICsgMV0gJiAweGMwKSAhPT0gMHg4MCB8fFxuICAgICAgICAoYnVmW2kgKyAyXSAmIDB4YzApICE9PSAweDgwIHx8XG4gICAgICAgIChidWZbaSArIDNdICYgMHhjMCkgIT09IDB4ODAgfHxcbiAgICAgICAgKGJ1ZltpXSA9PT0gMHhmMCAmJiAoYnVmW2kgKyAxXSAmIDB4ZjApID09PSAweDgwKSB8fCAvLyBPdmVybG9uZ1xuICAgICAgICAoYnVmW2ldID09PSAweGY0ICYmIGJ1ZltpICsgMV0gPiAweDhmKSB8fFxuICAgICAgICBidWZbaV0gPiAweGY0IC8vID4gVSsxMEZGRkZcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGkgKz0gNDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgYEJsb2JgLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHRlc3RlZFxuICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBgQmxvYmAsIGVsc2UgYGZhbHNlYFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgaGFzQmxvYiAmJlxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICB0eXBlb2YgdmFsdWUuYXJyYXlCdWZmZXIgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgdmFsdWUudHlwZSA9PT0gJ3N0cmluZycgJiZcbiAgICB0eXBlb2YgdmFsdWUuc3RyZWFtID09PSAnZnVuY3Rpb24nICYmXG4gICAgKHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09ICdCbG9iJyB8fFxuICAgICAgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gJ0ZpbGUnKVxuICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNCbG9iLFxuICBpc1ZhbGlkU3RhdHVzQ29kZSxcbiAgaXNWYWxpZFVURjg6IF9pc1ZhbGlkVVRGOCxcbiAgdG9rZW5DaGFyc1xufTtcblxuaWYgKGlzVXRmOCkge1xuICBtb2R1bGUuZXhwb3J0cy5pc1ZhbGlkVVRGOCA9IGZ1bmN0aW9uIChidWYpIHtcbiAgICByZXR1cm4gYnVmLmxlbmd0aCA8IDI0ID8gX2lzVmFsaWRVVEY4KGJ1ZikgOiBpc1V0ZjgoYnVmKTtcbiAgfTtcbn0gLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovIGVsc2UgaWYgKCFwcm9jZXNzLmVudi5XU19OT19VVEZfOF9WQUxJREFURSkge1xuICB0cnkge1xuICAgIGNvbnN0IGlzVmFsaWRVVEY4ID0gcmVxdWlyZSgndXRmLTgtdmFsaWRhdGUnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzLmlzVmFsaWRVVEY4ID0gZnVuY3Rpb24gKGJ1Zikge1xuICAgICAgcmV0dXJuIGJ1Zi5sZW5ndGggPCAzMiA/IF9pc1ZhbGlkVVRGOChidWYpIDogaXNWYWxpZFVURjgoYnVmKTtcbiAgICB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gQ29udGludWUgcmVnYXJkbGVzcyBvZiB0aGUgZXJyb3IuXG4gIH1cbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHsgV3JpdGFibGUgfSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xuXG5jb25zdCBQZXJNZXNzYWdlRGVmbGF0ZSA9IHJlcXVpcmUoJy4vcGVybWVzc2FnZS1kZWZsYXRlJyk7XG5jb25zdCB7XG4gIEJJTkFSWV9UWVBFUyxcbiAgRU1QVFlfQlVGRkVSLFxuICBrU3RhdHVzQ29kZSxcbiAga1dlYlNvY2tldFxufSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCB7IGNvbmNhdCwgdG9BcnJheUJ1ZmZlciwgdW5tYXNrIH0gPSByZXF1aXJlKCcuL2J1ZmZlci11dGlsJyk7XG5jb25zdCB7IGlzVmFsaWRTdGF0dXNDb2RlLCBpc1ZhbGlkVVRGOCB9ID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uJyk7XG5cbmNvbnN0IEZhc3RCdWZmZXIgPSBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdO1xuXG5jb25zdCBHRVRfSU5GTyA9IDA7XG5jb25zdCBHRVRfUEFZTE9BRF9MRU5HVEhfMTYgPSAxO1xuY29uc3QgR0VUX1BBWUxPQURfTEVOR1RIXzY0ID0gMjtcbmNvbnN0IEdFVF9NQVNLID0gMztcbmNvbnN0IEdFVF9EQVRBID0gNDtcbmNvbnN0IElORkxBVElORyA9IDU7XG5jb25zdCBERUZFUl9FVkVOVCA9IDY7XG5cbi8qKlxuICogSHlCaSBSZWNlaXZlciBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyBXcml0YWJsZVxuICovXG5jbGFzcyBSZWNlaXZlciBleHRlbmRzIFdyaXRhYmxlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBSZWNlaXZlciBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHM9dHJ1ZV0gU3BlY2lmaWVzIHdoZXRoZXJcbiAgICogICAgIGFueSBvZiB0aGUgYCdtZXNzYWdlJ2AsIGAncGluZydgLCBhbmQgYCdwb25nJ2AgZXZlbnRzIGNhbiBiZSBlbWl0dGVkXG4gICAqICAgICBtdWx0aXBsZSB0aW1lcyBpbiB0aGUgc2FtZSB0aWNrXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5iaW5hcnlUeXBlPW5vZGVidWZmZXJdIFRoZSB0eXBlIGZvciBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZXh0ZW5zaW9uc10gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG5lZ290aWF0ZWRcbiAgICogICAgIGV4dGVuc2lvbnNcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pc1NlcnZlcj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgdG8gb3BlcmF0ZSBpblxuICAgKiAgICAgY2xpZW50IG9yIHNlcnZlciBtb2RlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhQYXlsb2FkPTBdIFRoZSBtYXhpbXVtIGFsbG93ZWQgbWVzc2FnZSBsZW5ndGhcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5za2lwVVRGOFZhbGlkYXRpb249ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yXG4gICAqICAgICBub3QgdG8gc2tpcCBVVEYtOCB2YWxpZGF0aW9uIGZvciB0ZXh0IGFuZCBjbG9zZSBtZXNzYWdlc1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2FsbG93U3luY2hyb25vdXNFdmVudHMgPVxuICAgICAgb3B0aW9ucy5hbGxvd1N5bmNocm9ub3VzRXZlbnRzICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHNcbiAgICAgICAgOiB0cnVlO1xuICAgIHRoaXMuX2JpbmFyeVR5cGUgPSBvcHRpb25zLmJpbmFyeVR5cGUgfHwgQklOQVJZX1RZUEVTWzBdO1xuICAgIHRoaXMuX2V4dGVuc2lvbnMgPSBvcHRpb25zLmV4dGVuc2lvbnMgfHwge307XG4gICAgdGhpcy5faXNTZXJ2ZXIgPSAhIW9wdGlvbnMuaXNTZXJ2ZXI7XG4gICAgdGhpcy5fbWF4UGF5bG9hZCA9IG9wdGlvbnMubWF4UGF5bG9hZCB8IDA7XG4gICAgdGhpcy5fc2tpcFVURjhWYWxpZGF0aW9uID0gISFvcHRpb25zLnNraXBVVEY4VmFsaWRhdGlvbjtcbiAgICB0aGlzW2tXZWJTb2NrZXRdID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5fYnVmZmVyZWRCeXRlcyA9IDA7XG4gICAgdGhpcy5fYnVmZmVycyA9IFtdO1xuXG4gICAgdGhpcy5fY29tcHJlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3BheWxvYWRMZW5ndGggPSAwO1xuICAgIHRoaXMuX21hc2sgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZnJhZ21lbnRlZCA9IDA7XG4gICAgdGhpcy5fbWFza2VkID0gZmFsc2U7XG4gICAgdGhpcy5fZmluID0gZmFsc2U7XG4gICAgdGhpcy5fb3Bjb2RlID0gMDtcblxuICAgIHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aCA9IDA7XG4gICAgdGhpcy5fbWVzc2FnZUxlbmd0aCA9IDA7XG4gICAgdGhpcy5fZnJhZ21lbnRzID0gW107XG5cbiAgICB0aGlzLl9lcnJvcmVkID0gZmFsc2U7XG4gICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gIH1cblxuICAvKipcbiAgICogSW1wbGVtZW50cyBgV3JpdGFibGUucHJvdG90eXBlLl93cml0ZSgpYC5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGNodW5rIFRoZSBjaHVuayBvZiBkYXRhIHRvIHdyaXRlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbmNvZGluZyBUaGUgY2hhcmFjdGVyIGVuY29kaW5nIG9mIGBjaHVua2BcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF93cml0ZShjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gICAgaWYgKHRoaXMuX29wY29kZSA9PT0gMHgwOCAmJiB0aGlzLl9zdGF0ZSA9PSBHRVRfSU5GTykgcmV0dXJuIGNiKCk7XG5cbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzICs9IGNodW5rLmxlbmd0aDtcbiAgICB0aGlzLl9idWZmZXJzLnB1c2goY2h1bmspO1xuICAgIHRoaXMuc3RhcnRMb29wKGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdW1lcyBgbmAgYnl0ZXMgZnJvbSB0aGUgYnVmZmVyZWQgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG4gVGhlIG51bWJlciBvZiBieXRlcyB0byBjb25zdW1lXG4gICAqIEByZXR1cm4ge0J1ZmZlcn0gVGhlIGNvbnN1bWVkIGJ5dGVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb25zdW1lKG4pIHtcbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzIC09IG47XG5cbiAgICBpZiAobiA9PT0gdGhpcy5fYnVmZmVyc1swXS5sZW5ndGgpIHJldHVybiB0aGlzLl9idWZmZXJzLnNoaWZ0KCk7XG5cbiAgICBpZiAobiA8IHRoaXMuX2J1ZmZlcnNbMF0ubGVuZ3RoKSB7XG4gICAgICBjb25zdCBidWYgPSB0aGlzLl9idWZmZXJzWzBdO1xuICAgICAgdGhpcy5fYnVmZmVyc1swXSA9IG5ldyBGYXN0QnVmZmVyKFxuICAgICAgICBidWYuYnVmZmVyLFxuICAgICAgICBidWYuYnl0ZU9mZnNldCArIG4sXG4gICAgICAgIGJ1Zi5sZW5ndGggLSBuXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gbmV3IEZhc3RCdWZmZXIoYnVmLmJ1ZmZlciwgYnVmLmJ5dGVPZmZzZXQsIG4pO1xuICAgIH1cblxuICAgIGNvbnN0IGRzdCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShuKTtcblxuICAgIGRvIHtcbiAgICAgIGNvbnN0IGJ1ZiA9IHRoaXMuX2J1ZmZlcnNbMF07XG4gICAgICBjb25zdCBvZmZzZXQgPSBkc3QubGVuZ3RoIC0gbjtcblxuICAgICAgaWYgKG4gPj0gYnVmLmxlbmd0aCkge1xuICAgICAgICBkc3Quc2V0KHRoaXMuX2J1ZmZlcnMuc2hpZnQoKSwgb2Zmc2V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRzdC5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmLmJ1ZmZlciwgYnVmLmJ5dGVPZmZzZXQsIG4pLCBvZmZzZXQpO1xuICAgICAgICB0aGlzLl9idWZmZXJzWzBdID0gbmV3IEZhc3RCdWZmZXIoXG4gICAgICAgICAgYnVmLmJ1ZmZlcixcbiAgICAgICAgICBidWYuYnl0ZU9mZnNldCArIG4sXG4gICAgICAgICAgYnVmLmxlbmd0aCAtIG5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgbiAtPSBidWYubGVuZ3RoO1xuICAgIH0gd2hpbGUgKG4gPiAwKTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBwYXJzaW5nIGxvb3AuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGFydExvb3AoY2IpIHtcbiAgICB0aGlzLl9sb29wID0gdHJ1ZTtcblxuICAgIGRvIHtcbiAgICAgIHN3aXRjaCAodGhpcy5fc3RhdGUpIHtcbiAgICAgICAgY2FzZSBHRVRfSU5GTzpcbiAgICAgICAgICB0aGlzLmdldEluZm8oY2IpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEdFVF9QQVlMT0FEX0xFTkdUSF8xNjpcbiAgICAgICAgICB0aGlzLmdldFBheWxvYWRMZW5ndGgxNihjYik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgR0VUX1BBWUxPQURfTEVOR1RIXzY0OlxuICAgICAgICAgIHRoaXMuZ2V0UGF5bG9hZExlbmd0aDY0KGNiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBHRVRfTUFTSzpcbiAgICAgICAgICB0aGlzLmdldE1hc2soKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBHRVRfREFUQTpcbiAgICAgICAgICB0aGlzLmdldERhdGEoY2IpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIElORkxBVElORzpcbiAgICAgICAgY2FzZSBERUZFUl9FVkVOVDpcbiAgICAgICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKHRoaXMuX2xvb3ApO1xuXG4gICAgaWYgKCF0aGlzLl9lcnJvcmVkKSBjYigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBmaXJzdCB0d28gYnl0ZXMgb2YgYSBmcmFtZS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEluZm8oY2IpIHtcbiAgICBpZiAodGhpcy5fYnVmZmVyZWRCeXRlcyA8IDIpIHtcbiAgICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBidWYgPSB0aGlzLmNvbnN1bWUoMik7XG5cbiAgICBpZiAoKGJ1ZlswXSAmIDB4MzApICE9PSAweDAwKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICdSU1YyIGFuZCBSU1YzIG11c3QgYmUgY2xlYXInLFxuICAgICAgICB0cnVlLFxuICAgICAgICAxMDAyLFxuICAgICAgICAnV1NfRVJSX1VORVhQRUNURURfUlNWXzJfMydcbiAgICAgICk7XG5cbiAgICAgIGNiKGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wcmVzc2VkID0gKGJ1ZlswXSAmIDB4NDApID09PSAweDQwO1xuXG4gICAgaWYgKGNvbXByZXNzZWQgJiYgIXRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgJ1JTVjEgbXVzdCBiZSBjbGVhcicsXG4gICAgICAgIHRydWUsXG4gICAgICAgIDEwMDIsXG4gICAgICAgICdXU19FUlJfVU5FWFBFQ1RFRF9SU1ZfMSdcbiAgICAgICk7XG5cbiAgICAgIGNiKGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9maW4gPSAoYnVmWzBdICYgMHg4MCkgPT09IDB4ODA7XG4gICAgdGhpcy5fb3Bjb2RlID0gYnVmWzBdICYgMHgwZjtcbiAgICB0aGlzLl9wYXlsb2FkTGVuZ3RoID0gYnVmWzFdICYgMHg3ZjtcblxuICAgIGlmICh0aGlzLl9vcGNvZGUgPT09IDB4MDApIHtcbiAgICAgIGlmIChjb21wcmVzc2VkKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgICdSU1YxIG11c3QgYmUgY2xlYXInLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgMTAwMixcbiAgICAgICAgICAnV1NfRVJSX1VORVhQRUNURURfUlNWXzEnXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5fZnJhZ21lbnRlZCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgICAnaW52YWxpZCBvcGNvZGUgMCcsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAxMDAyLFxuICAgICAgICAgICdXU19FUlJfSU5WQUxJRF9PUENPREUnXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29wY29kZSA9IHRoaXMuX2ZyYWdtZW50ZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9vcGNvZGUgPT09IDB4MDEgfHwgdGhpcy5fb3Bjb2RlID09PSAweDAyKSB7XG4gICAgICBpZiAodGhpcy5fZnJhZ21lbnRlZCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgICBgaW52YWxpZCBvcGNvZGUgJHt0aGlzLl9vcGNvZGV9YCxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIDEwMDIsXG4gICAgICAgICAgJ1dTX0VSUl9JTlZBTElEX09QQ09ERSdcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29tcHJlc3NlZCA9IGNvbXByZXNzZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9vcGNvZGUgPiAweDA3ICYmIHRoaXMuX29wY29kZSA8IDB4MGIpIHtcbiAgICAgIGlmICghdGhpcy5fZmluKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgICdGSU4gbXVzdCBiZSBzZXQnLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgMTAwMixcbiAgICAgICAgICAnV1NfRVJSX0VYUEVDVEVEX0ZJTidcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbXByZXNzZWQpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgJ1JTVjEgbXVzdCBiZSBjbGVhcicsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAxMDAyLFxuICAgICAgICAgICdXU19FUlJfVU5FWFBFQ1RFRF9SU1ZfMSdcbiAgICAgICAgKTtcblxuICAgICAgICBjYihlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9wYXlsb2FkTGVuZ3RoID4gMHg3ZCB8fFxuICAgICAgICAodGhpcy5fb3Bjb2RlID09PSAweDA4ICYmIHRoaXMuX3BheWxvYWRMZW5ndGggPT09IDEpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgYGludmFsaWQgcGF5bG9hZCBsZW5ndGggJHt0aGlzLl9wYXlsb2FkTGVuZ3RofWAsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAxMDAyLFxuICAgICAgICAgICdXU19FUlJfSU5WQUxJRF9DT05UUk9MX1BBWUxPQURfTEVOR1RIJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNiKGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgIGBpbnZhbGlkIG9wY29kZSAke3RoaXMuX29wY29kZX1gLFxuICAgICAgICB0cnVlLFxuICAgICAgICAxMDAyLFxuICAgICAgICAnV1NfRVJSX0lOVkFMSURfT1BDT0RFJ1xuICAgICAgKTtcblxuICAgICAgY2IoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZmluICYmICF0aGlzLl9mcmFnbWVudGVkKSB0aGlzLl9mcmFnbWVudGVkID0gdGhpcy5fb3Bjb2RlO1xuICAgIHRoaXMuX21hc2tlZCA9IChidWZbMV0gJiAweDgwKSA9PT0gMHg4MDtcblxuICAgIGlmICh0aGlzLl9pc1NlcnZlcikge1xuICAgICAgaWYgKCF0aGlzLl9tYXNrZWQpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICAgJ01BU0sgbXVzdCBiZSBzZXQnLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgMTAwMixcbiAgICAgICAgICAnV1NfRVJSX0VYUEVDVEVEX01BU0snXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9tYXNrZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgJ01BU0sgbXVzdCBiZSBjbGVhcicsXG4gICAgICAgIHRydWUsXG4gICAgICAgIDEwMDIsXG4gICAgICAgICdXU19FUlJfVU5FWFBFQ1RFRF9NQVNLJ1xuICAgICAgKTtcblxuICAgICAgY2IoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wYXlsb2FkTGVuZ3RoID09PSAxMjYpIHRoaXMuX3N0YXRlID0gR0VUX1BBWUxPQURfTEVOR1RIXzE2O1xuICAgIGVsc2UgaWYgKHRoaXMuX3BheWxvYWRMZW5ndGggPT09IDEyNykgdGhpcy5fc3RhdGUgPSBHRVRfUEFZTE9BRF9MRU5HVEhfNjQ7XG4gICAgZWxzZSB0aGlzLmhhdmVMZW5ndGgoY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgZXh0ZW5kZWQgcGF5bG9hZCBsZW5ndGggKDcrMTYpLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UGF5bG9hZExlbmd0aDE2KGNiKSB7XG4gICAgaWYgKHRoaXMuX2J1ZmZlcmVkQnl0ZXMgPCAyKSB7XG4gICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcGF5bG9hZExlbmd0aCA9IHRoaXMuY29uc3VtZSgyKS5yZWFkVUludDE2QkUoMCk7XG4gICAgdGhpcy5oYXZlTGVuZ3RoKGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGV4dGVuZGVkIHBheWxvYWQgbGVuZ3RoICg3KzY0KS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFBheWxvYWRMZW5ndGg2NChjYikge1xuICAgIGlmICh0aGlzLl9idWZmZXJlZEJ5dGVzIDwgOCkge1xuICAgICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1ZiA9IHRoaXMuY29uc3VtZSg4KTtcbiAgICBjb25zdCBudW0gPSBidWYucmVhZFVJbnQzMkJFKDApO1xuXG4gICAgLy9cbiAgICAvLyBUaGUgbWF4aW11bSBzYWZlIGludGVnZXIgaW4gSmF2YVNjcmlwdCBpcyAyXjUzIC0gMS4gQW4gZXJyb3IgaXMgcmV0dXJuZWRcbiAgICAvLyBpZiBwYXlsb2FkIGxlbmd0aCBpcyBncmVhdGVyIHRoYW4gdGhpcyBudW1iZXIuXG4gICAgLy9cbiAgICBpZiAobnVtID4gTWF0aC5wb3coMiwgNTMgLSAzMikgLSAxKSB7XG4gICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgIFJhbmdlRXJyb3IsXG4gICAgICAgICdVbnN1cHBvcnRlZCBXZWJTb2NrZXQgZnJhbWU6IHBheWxvYWQgbGVuZ3RoID4gMl41MyAtIDEnLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgMTAwOSxcbiAgICAgICAgJ1dTX0VSUl9VTlNVUFBPUlRFRF9EQVRBX1BBWUxPQURfTEVOR1RIJ1xuICAgICAgKTtcblxuICAgICAgY2IoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3BheWxvYWRMZW5ndGggPSBudW0gKiBNYXRoLnBvdygyLCAzMikgKyBidWYucmVhZFVJbnQzMkJFKDQpO1xuICAgIHRoaXMuaGF2ZUxlbmd0aChjYik7XG4gIH1cblxuICAvKipcbiAgICogUGF5bG9hZCBsZW5ndGggaGFzIGJlZW4gcmVhZC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhdmVMZW5ndGgoY2IpIHtcbiAgICBpZiAodGhpcy5fcGF5bG9hZExlbmd0aCAmJiB0aGlzLl9vcGNvZGUgPCAweDA4KSB7XG4gICAgICB0aGlzLl90b3RhbFBheWxvYWRMZW5ndGggKz0gdGhpcy5fcGF5bG9hZExlbmd0aDtcbiAgICAgIGlmICh0aGlzLl90b3RhbFBheWxvYWRMZW5ndGggPiB0aGlzLl9tYXhQYXlsb2FkICYmIHRoaXMuX21heFBheWxvYWQgPiAwKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvcihcbiAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgICdNYXggcGF5bG9hZCBzaXplIGV4Y2VlZGVkJyxcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAxMDA5LFxuICAgICAgICAgICdXU19FUlJfVU5TVVBQT1JURURfTUVTU0FHRV9MRU5HVEgnXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21hc2tlZCkgdGhpcy5fc3RhdGUgPSBHRVRfTUFTSztcbiAgICBlbHNlIHRoaXMuX3N0YXRlID0gR0VUX0RBVEE7XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgbWFzayBieXRlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE1hc2soKSB7XG4gICAgaWYgKHRoaXMuX2J1ZmZlcmVkQnl0ZXMgPCA0KSB7XG4gICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbWFzayA9IHRoaXMuY29uc3VtZSg0KTtcbiAgICB0aGlzLl9zdGF0ZSA9IEdFVF9EQVRBO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIGRhdGEgYnl0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXREYXRhKGNiKSB7XG4gICAgbGV0IGRhdGEgPSBFTVBUWV9CVUZGRVI7XG5cbiAgICBpZiAodGhpcy5fcGF5bG9hZExlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuX2J1ZmZlcmVkQnl0ZXMgPCB0aGlzLl9wYXlsb2FkTGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBkYXRhID0gdGhpcy5jb25zdW1lKHRoaXMuX3BheWxvYWRMZW5ndGgpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX21hc2tlZCAmJlxuICAgICAgICAodGhpcy5fbWFza1swXSB8IHRoaXMuX21hc2tbMV0gfCB0aGlzLl9tYXNrWzJdIHwgdGhpcy5fbWFza1szXSkgIT09IDBcbiAgICAgICkge1xuICAgICAgICB1bm1hc2soZGF0YSwgdGhpcy5fbWFzayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wY29kZSA+IDB4MDcpIHtcbiAgICAgIHRoaXMuY29udHJvbE1lc3NhZ2UoZGF0YSwgY2IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb21wcmVzc2VkKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IElORkxBVElORztcbiAgICAgIHRoaXMuZGVjb21wcmVzcyhkYXRhLCBjYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBtZXNzYWdlIGlzIG5vdCBjb21wcmVzc2VkIHNvIGl0cyBsZW5ndGggaXMgdGhlIHN1bSBvZiB0aGUgcGF5bG9hZFxuICAgICAgLy8gbGVuZ3RoIG9mIGFsbCBmcmFnbWVudHMuXG4gICAgICAvL1xuICAgICAgdGhpcy5fbWVzc2FnZUxlbmd0aCA9IHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aDtcbiAgICAgIHRoaXMuX2ZyYWdtZW50cy5wdXNoKGRhdGEpO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YU1lc3NhZ2UoY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY29tcHJlc3NlcyBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBDb21wcmVzc2VkIGRhdGFcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlY29tcHJlc3MoZGF0YSwgY2IpIHtcbiAgICBjb25zdCBwZXJNZXNzYWdlRGVmbGF0ZSA9IHRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV07XG5cbiAgICBwZXJNZXNzYWdlRGVmbGF0ZS5kZWNvbXByZXNzKGRhdGEsIHRoaXMuX2ZpbiwgKGVyciwgYnVmKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKTtcblxuICAgICAgaWYgKGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fbWVzc2FnZUxlbmd0aCArPSBidWYubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5fbWVzc2FnZUxlbmd0aCA+IHRoaXMuX21heFBheWxvYWQgJiYgdGhpcy5fbWF4UGF5bG9hZCA+IDApIHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgICBSYW5nZUVycm9yLFxuICAgICAgICAgICAgJ01heCBwYXlsb2FkIHNpemUgZXhjZWVkZWQnLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAxMDA5LFxuICAgICAgICAgICAgJ1dTX0VSUl9VTlNVUFBPUlRFRF9NRVNTQUdFX0xFTkdUSCdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2ZyYWdtZW50cy5wdXNoKGJ1Zik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YU1lc3NhZ2UoY2IpO1xuICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBHRVRfSU5GTykgdGhpcy5zdGFydExvb3AoY2IpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSBkYXRhIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkYXRhTWVzc2FnZShjYikge1xuICAgIGlmICghdGhpcy5fZmluKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IEdFVF9JTkZPO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VMZW5ndGggPSB0aGlzLl9tZXNzYWdlTGVuZ3RoO1xuICAgIGNvbnN0IGZyYWdtZW50cyA9IHRoaXMuX2ZyYWdtZW50cztcblxuICAgIHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aCA9IDA7XG4gICAgdGhpcy5fbWVzc2FnZUxlbmd0aCA9IDA7XG4gICAgdGhpcy5fZnJhZ21lbnRlZCA9IDA7XG4gICAgdGhpcy5fZnJhZ21lbnRzID0gW107XG5cbiAgICBpZiAodGhpcy5fb3Bjb2RlID09PSAyKSB7XG4gICAgICBsZXQgZGF0YTtcblxuICAgICAgaWYgKHRoaXMuX2JpbmFyeVR5cGUgPT09ICdub2RlYnVmZmVyJykge1xuICAgICAgICBkYXRhID0gY29uY2F0KGZyYWdtZW50cywgbWVzc2FnZUxlbmd0aCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JpbmFyeVR5cGUgPT09ICdhcnJheWJ1ZmZlcicpIHtcbiAgICAgICAgZGF0YSA9IHRvQXJyYXlCdWZmZXIoY29uY2F0KGZyYWdtZW50cywgbWVzc2FnZUxlbmd0aCkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9iaW5hcnlUeXBlID09PSAnYmxvYicpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBCbG9iKGZyYWdtZW50cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gZnJhZ21lbnRzO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYWxsb3dTeW5jaHJvbm91c0V2ZW50cykge1xuICAgICAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCBkYXRhLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gREVGRVJfRVZFTlQ7XG4gICAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgZGF0YSwgdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgICAgICAgICB0aGlzLnN0YXJ0TG9vcChjYik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBidWYgPSBjb25jYXQoZnJhZ21lbnRzLCBtZXNzYWdlTGVuZ3RoKTtcblxuICAgICAgaWYgKCF0aGlzLl9za2lwVVRGOFZhbGlkYXRpb24gJiYgIWlzVmFsaWRVVEY4KGJ1ZikpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgIEVycm9yLFxuICAgICAgICAgICdpbnZhbGlkIFVURi04IHNlcXVlbmNlJyxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIDEwMDcsXG4gICAgICAgICAgJ1dTX0VSUl9JTlZBTElEX1VURjgnXG4gICAgICAgICk7XG5cbiAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5GTEFUSU5HIHx8IHRoaXMuX2FsbG93U3luY2hyb25vdXNFdmVudHMpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgYnVmLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IERFRkVSX0VWRU5UO1xuICAgICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZW1pdCgnbWVzc2FnZScsIGJ1ZiwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gICAgICAgICAgdGhpcy5zdGFydExvb3AoY2IpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhIGNvbnRyb2wgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgRGF0YSB0byBoYW5kbGVcbiAgICogQHJldHVybiB7KEVycm9yfFJhbmdlRXJyb3J8dW5kZWZpbmVkKX0gQSBwb3NzaWJsZSBlcnJvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29udHJvbE1lc3NhZ2UoZGF0YSwgY2IpIHtcbiAgICBpZiAodGhpcy5fb3Bjb2RlID09PSAweDA4KSB7XG4gICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVtaXQoJ2NvbmNsdWRlJywgMTAwNSwgRU1QVFlfQlVGRkVSKTtcbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBkYXRhLnJlYWRVSW50MTZCRSgwKTtcblxuICAgICAgICBpZiAoIWlzVmFsaWRTdGF0dXNDb2RlKGNvZGUpKSB7XG4gICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKFxuICAgICAgICAgICAgUmFuZ2VFcnJvcixcbiAgICAgICAgICAgIGBpbnZhbGlkIHN0YXR1cyBjb2RlICR7Y29kZX1gLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIDEwMDIsXG4gICAgICAgICAgICAnV1NfRVJSX0lOVkFMSURfQ0xPU0VfQ09ERSdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1ZiA9IG5ldyBGYXN0QnVmZmVyKFxuICAgICAgICAgIGRhdGEuYnVmZmVyLFxuICAgICAgICAgIGRhdGEuYnl0ZU9mZnNldCArIDIsXG4gICAgICAgICAgZGF0YS5sZW5ndGggLSAyXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9za2lwVVRGOFZhbGlkYXRpb24gJiYgIWlzVmFsaWRVVEY4KGJ1ZikpIHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoXG4gICAgICAgICAgICBFcnJvcixcbiAgICAgICAgICAgICdpbnZhbGlkIFVURi04IHNlcXVlbmNlJyxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAxMDA3LFxuICAgICAgICAgICAgJ1dTX0VSUl9JTlZBTElEX1VURjgnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNiKGVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW1pdCgnY29uY2x1ZGUnLCBjb2RlLCBidWYpO1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zdGF0ZSA9IEdFVF9JTkZPO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9hbGxvd1N5bmNocm9ub3VzRXZlbnRzKSB7XG4gICAgICB0aGlzLmVtaXQodGhpcy5fb3Bjb2RlID09PSAweDA5ID8gJ3BpbmcnIDogJ3BvbmcnLCBkYXRhKTtcbiAgICAgIHRoaXMuX3N0YXRlID0gR0VUX0lORk87XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gREVGRVJfRVZFTlQ7XG4gICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQodGhpcy5fb3Bjb2RlID09PSAweDA5ID8gJ3BpbmcnIDogJ3BvbmcnLCBkYXRhKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBHRVRfSU5GTztcbiAgICAgICAgdGhpcy5zdGFydExvb3AoY2IpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBhbiBlcnJvciBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24obmV3OkVycm9yfFJhbmdlRXJyb3IpfSBFcnJvckN0b3IgVGhlIGVycm9yIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJlZml4IFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBhZGQgYSBkZWZhdWx0IHByZWZpeCB0b1xuICAgKiAgICAgYG1lc3NhZ2VgXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNDb2RlIFRoZSBzdGF0dXMgY29kZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXJyb3JDb2RlIFRoZSBleHBvc2VkIGVycm9yIGNvZGVcbiAgICogQHJldHVybiB7KEVycm9yfFJhbmdlRXJyb3IpfSBUaGUgZXJyb3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZUVycm9yKEVycm9yQ3RvciwgbWVzc2FnZSwgcHJlZml4LCBzdGF0dXNDb2RlLCBlcnJvckNvZGUpIHtcbiAgICB0aGlzLl9sb29wID0gZmFsc2U7XG4gICAgdGhpcy5fZXJyb3JlZCA9IHRydWU7XG5cbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3JDdG9yKFxuICAgICAgcHJlZml4ID8gYEludmFsaWQgV2ViU29ja2V0IGZyYW1lOiAke21lc3NhZ2V9YCA6IG1lc3NhZ2VcbiAgICApO1xuXG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoZXJyLCB0aGlzLmNyZWF0ZUVycm9yKTtcbiAgICBlcnIuY29kZSA9IGVycm9yQ29kZTtcbiAgICBlcnJba1N0YXR1c0NvZGVdID0gc3RhdHVzQ29kZTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjZWl2ZXI7XG4iLCAiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbXCJlcnJvclwiLCB7IFwidmFyc0lnbm9yZVBhdHRlcm5cIjogXCJeRHVwbGV4XCIgfV0gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7IER1cGxleCB9ID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5jb25zdCB7IHJhbmRvbUZpbGxTeW5jIH0gPSByZXF1aXJlKCdjcnlwdG8nKTtcbmNvbnN0IHtcbiAgdHlwZXM6IHsgaXNVaW50OEFycmF5IH1cbn0gPSByZXF1aXJlKCd1dGlsJyk7XG5cbmNvbnN0IFBlck1lc3NhZ2VEZWZsYXRlID0gcmVxdWlyZSgnLi9wZXJtZXNzYWdlLWRlZmxhdGUnKTtcbmNvbnN0IHsgRU1QVFlfQlVGRkVSLCBrV2ViU29ja2V0LCBOT09QIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuY29uc3QgeyBpc0Jsb2IsIGlzVmFsaWRTdGF0dXNDb2RlIH0gPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcbmNvbnN0IHsgbWFzazogYXBwbHlNYXNrLCB0b0J1ZmZlciB9ID0gcmVxdWlyZSgnLi9idWZmZXItdXRpbCcpO1xuXG5jb25zdCBrQnl0ZUxlbmd0aCA9IFN5bWJvbCgna0J5dGVMZW5ndGgnKTtcbmNvbnN0IG1hc2tCdWZmZXIgPSBCdWZmZXIuYWxsb2MoNCk7XG5jb25zdCBSQU5ET01fUE9PTF9TSVpFID0gOCAqIDEwMjQ7XG5sZXQgcmFuZG9tUG9vbDtcbmxldCByYW5kb21Qb29sUG9pbnRlciA9IFJBTkRPTV9QT09MX1NJWkU7XG5cbmNvbnN0IERFRkFVTFQgPSAwO1xuY29uc3QgREVGTEFUSU5HID0gMTtcbmNvbnN0IEdFVF9CTE9CX0RBVEEgPSAyO1xuXG4vKipcbiAqIEh5QmkgU2VuZGVyIGltcGxlbWVudGF0aW9uLlxuICovXG5jbGFzcyBTZW5kZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIFNlbmRlciBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtEdXBsZXh9IHNvY2tldCBUaGUgY29ubmVjdGlvbiBzb2NrZXRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtleHRlbnNpb25zXSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgbmVnb3RpYXRlZCBleHRlbnNpb25zXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtnZW5lcmF0ZU1hc2tdIFRoZSBmdW5jdGlvbiB1c2VkIHRvIGdlbmVyYXRlIHRoZSBtYXNraW5nXG4gICAqICAgICBrZXlcbiAgICovXG4gIGNvbnN0cnVjdG9yKHNvY2tldCwgZXh0ZW5zaW9ucywgZ2VuZXJhdGVNYXNrKSB7XG4gICAgdGhpcy5fZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnMgfHwge307XG5cbiAgICBpZiAoZ2VuZXJhdGVNYXNrKSB7XG4gICAgICB0aGlzLl9nZW5lcmF0ZU1hc2sgPSBnZW5lcmF0ZU1hc2s7XG4gICAgICB0aGlzLl9tYXNrQnVmZmVyID0gQnVmZmVyLmFsbG9jKDQpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvY2tldCA9IHNvY2tldDtcblxuICAgIHRoaXMuX2ZpcnN0RnJhZ21lbnQgPSB0cnVlO1xuICAgIHRoaXMuX2NvbXByZXNzID0gZmFsc2U7XG5cbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzID0gMDtcbiAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIHRoaXMuX3N0YXRlID0gREVGQVVMVDtcbiAgICB0aGlzLm9uZXJyb3IgPSBOT09QO1xuICAgIHRoaXNba1dlYlNvY2tldF0gPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRnJhbWVzIGEgcGllY2Ugb2YgZGF0YSBhY2NvcmRpbmcgdG8gdGhlIEh5QmkgV2ViU29ja2V0IHByb3RvY29sLlxuICAgKlxuICAgKiBAcGFyYW0geyhCdWZmZXJ8U3RyaW5nKX0gZGF0YSBUaGUgZGF0YSB0byBmcmFtZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZpbj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIHNldCB0aGVcbiAgICogICAgIEZJTiBiaXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMuZ2VuZXJhdGVNYXNrXSBUaGUgZnVuY3Rpb24gdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAgICogICAgIG1hc2tpbmcga2V5XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWFzaz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2tcbiAgICogICAgIGBkYXRhYFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gW29wdGlvbnMubWFza0J1ZmZlcl0gVGhlIGJ1ZmZlciB1c2VkIHRvIHN0b3JlIHRoZSBtYXNraW5nXG4gICAqICAgICBrZXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMub3Bjb2RlIFRoZSBvcGNvZGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yZWFkT25seT1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGNhbiBiZVxuICAgKiAgICAgbW9kaWZpZWRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yc3YxPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gc2V0IHRoZVxuICAgKiAgICAgUlNWMSBiaXRcbiAgICogQHJldHVybiB7KEJ1ZmZlcnxTdHJpbmcpW119IFRoZSBmcmFtZWQgZGF0YVxuICAgKiBAcHVibGljXG4gICAqL1xuICBzdGF0aWMgZnJhbWUoZGF0YSwgb3B0aW9ucykge1xuICAgIGxldCBtYXNrO1xuICAgIGxldCBtZXJnZSA9IGZhbHNlO1xuICAgIGxldCBvZmZzZXQgPSAyO1xuICAgIGxldCBza2lwTWFza2luZyA9IGZhbHNlO1xuXG4gICAgaWYgKG9wdGlvbnMubWFzaykge1xuICAgICAgbWFzayA9IG9wdGlvbnMubWFza0J1ZmZlciB8fCBtYXNrQnVmZmVyO1xuXG4gICAgICBpZiAob3B0aW9ucy5nZW5lcmF0ZU1hc2spIHtcbiAgICAgICAgb3B0aW9ucy5nZW5lcmF0ZU1hc2sobWFzayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmFuZG9tUG9vbFBvaW50ZXIgPT09IFJBTkRPTV9QT09MX1NJWkUpIHtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAgKi9cbiAgICAgICAgICBpZiAocmFuZG9tUG9vbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBsYXppbHkgaW5pdGlhbGl6ZWQgYmVjYXVzZSBzZXJ2ZXItc2VudCBmcmFtZXMgbXVzdCBub3RcbiAgICAgICAgICAgIC8vIGJlIG1hc2tlZCBzbyBpdCBtYXkgbmV2ZXIgYmUgdXNlZC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICByYW5kb21Qb29sID0gQnVmZmVyLmFsbG9jKFJBTkRPTV9QT09MX1NJWkUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJhbmRvbUZpbGxTeW5jKHJhbmRvbVBvb2wsIDAsIFJBTkRPTV9QT09MX1NJWkUpO1xuICAgICAgICAgIHJhbmRvbVBvb2xQb2ludGVyID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hc2tbMF0gPSByYW5kb21Qb29sW3JhbmRvbVBvb2xQb2ludGVyKytdO1xuICAgICAgICBtYXNrWzFdID0gcmFuZG9tUG9vbFtyYW5kb21Qb29sUG9pbnRlcisrXTtcbiAgICAgICAgbWFza1syXSA9IHJhbmRvbVBvb2xbcmFuZG9tUG9vbFBvaW50ZXIrK107XG4gICAgICAgIG1hc2tbM10gPSByYW5kb21Qb29sW3JhbmRvbVBvb2xQb2ludGVyKytdO1xuICAgICAgfVxuXG4gICAgICBza2lwTWFza2luZyA9IChtYXNrWzBdIHwgbWFza1sxXSB8IG1hc2tbMl0gfCBtYXNrWzNdKSA9PT0gMDtcbiAgICAgIG9mZnNldCA9IDY7XG4gICAgfVxuXG4gICAgbGV0IGRhdGFMZW5ndGg7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoXG4gICAgICAgICghb3B0aW9ucy5tYXNrIHx8IHNraXBNYXNraW5nKSAmJlxuICAgICAgICBvcHRpb25zW2tCeXRlTGVuZ3RoXSAhPT0gdW5kZWZpbmVkXG4gICAgICApIHtcbiAgICAgICAgZGF0YUxlbmd0aCA9IG9wdGlvbnNba0J5dGVMZW5ndGhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IEJ1ZmZlci5mcm9tKGRhdGEpO1xuICAgICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aDtcbiAgICAgIG1lcmdlID0gb3B0aW9ucy5tYXNrICYmIG9wdGlvbnMucmVhZE9ubHkgJiYgIXNraXBNYXNraW5nO1xuICAgIH1cblxuICAgIGxldCBwYXlsb2FkTGVuZ3RoID0gZGF0YUxlbmd0aDtcblxuICAgIGlmIChkYXRhTGVuZ3RoID49IDY1NTM2KSB7XG4gICAgICBvZmZzZXQgKz0gODtcbiAgICAgIHBheWxvYWRMZW5ndGggPSAxMjc7XG4gICAgfSBlbHNlIGlmIChkYXRhTGVuZ3RoID4gMTI1KSB7XG4gICAgICBvZmZzZXQgKz0gMjtcbiAgICAgIHBheWxvYWRMZW5ndGggPSAxMjY7XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKG1lcmdlID8gZGF0YUxlbmd0aCArIG9mZnNldCA6IG9mZnNldCk7XG5cbiAgICB0YXJnZXRbMF0gPSBvcHRpb25zLmZpbiA/IG9wdGlvbnMub3Bjb2RlIHwgMHg4MCA6IG9wdGlvbnMub3Bjb2RlO1xuICAgIGlmIChvcHRpb25zLnJzdjEpIHRhcmdldFswXSB8PSAweDQwO1xuXG4gICAgdGFyZ2V0WzFdID0gcGF5bG9hZExlbmd0aDtcblxuICAgIGlmIChwYXlsb2FkTGVuZ3RoID09PSAxMjYpIHtcbiAgICAgIHRhcmdldC53cml0ZVVJbnQxNkJFKGRhdGFMZW5ndGgsIDIpO1xuICAgIH0gZWxzZSBpZiAocGF5bG9hZExlbmd0aCA9PT0gMTI3KSB7XG4gICAgICB0YXJnZXRbMl0gPSB0YXJnZXRbM10gPSAwO1xuICAgICAgdGFyZ2V0LndyaXRlVUludEJFKGRhdGFMZW5ndGgsIDQsIDYpO1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5tYXNrKSByZXR1cm4gW3RhcmdldCwgZGF0YV07XG5cbiAgICB0YXJnZXRbMV0gfD0gMHg4MDtcbiAgICB0YXJnZXRbb2Zmc2V0IC0gNF0gPSBtYXNrWzBdO1xuICAgIHRhcmdldFtvZmZzZXQgLSAzXSA9IG1hc2tbMV07XG4gICAgdGFyZ2V0W29mZnNldCAtIDJdID0gbWFza1syXTtcbiAgICB0YXJnZXRbb2Zmc2V0IC0gMV0gPSBtYXNrWzNdO1xuXG4gICAgaWYgKHNraXBNYXNraW5nKSByZXR1cm4gW3RhcmdldCwgZGF0YV07XG5cbiAgICBpZiAobWVyZ2UpIHtcbiAgICAgIGFwcGx5TWFzayhkYXRhLCBtYXNrLCB0YXJnZXQsIG9mZnNldCwgZGF0YUxlbmd0aCk7XG4gICAgICByZXR1cm4gW3RhcmdldF07XG4gICAgfVxuXG4gICAgYXBwbHlNYXNrKGRhdGEsIG1hc2ssIGRhdGEsIDAsIGRhdGFMZW5ndGgpO1xuICAgIHJldHVybiBbdGFyZ2V0LCBkYXRhXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIGNsb3NlIG1lc3NhZ2UgdG8gdGhlIG90aGVyIHBlZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbY29kZV0gVGhlIHN0YXR1cyBjb2RlIGNvbXBvbmVudCBvZiB0aGUgYm9keVxuICAgKiBAcGFyYW0geyhTdHJpbmd8QnVmZmVyKX0gW2RhdGFdIFRoZSBtZXNzYWdlIGNvbXBvbmVudCBvZiB0aGUgYm9keVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttYXNrPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFzayB0aGUgbWVzc2FnZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNsb3NlKGNvZGUsIGRhdGEsIG1hc2ssIGNiKSB7XG4gICAgbGV0IGJ1ZjtcblxuICAgIGlmIChjb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGJ1ZiA9IEVNUFRZX0JVRkZFUjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb2RlICE9PSAnbnVtYmVyJyB8fCAhaXNWYWxpZFN0YXR1c0NvZGUoY29kZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSB2YWxpZCBlcnJvciBjb2RlIG51bWJlcicpO1xuICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkIHx8ICFkYXRhLmxlbmd0aCkge1xuICAgICAgYnVmID0gQnVmZmVyLmFsbG9jVW5zYWZlKDIpO1xuICAgICAgYnVmLndyaXRlVUludDE2QkUoY29kZSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpO1xuXG4gICAgICBpZiAobGVuZ3RoID4gMTIzKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgbWVzc2FnZSBtdXN0IG5vdCBiZSBncmVhdGVyIHRoYW4gMTIzIGJ5dGVzJyk7XG4gICAgICB9XG5cbiAgICAgIGJ1ZiA9IEJ1ZmZlci5hbGxvY1Vuc2FmZSgyICsgbGVuZ3RoKTtcbiAgICAgIGJ1Zi53cml0ZVVJbnQxNkJFKGNvZGUsIDApO1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGJ1Zi53cml0ZShkYXRhLCAyKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNVaW50OEFycmF5KGRhdGEpKSB7XG4gICAgICAgIGJ1Zi5zZXQoZGF0YSwgMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZyBvciBhIFVpbnQ4QXJyYXknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgW2tCeXRlTGVuZ3RoXTogYnVmLmxlbmd0aCxcbiAgICAgIGZpbjogdHJ1ZSxcbiAgICAgIGdlbmVyYXRlTWFzazogdGhpcy5fZ2VuZXJhdGVNYXNrLFxuICAgICAgbWFzayxcbiAgICAgIG1hc2tCdWZmZXI6IHRoaXMuX21hc2tCdWZmZXIsXG4gICAgICBvcGNvZGU6IDB4MDgsXG4gICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICByc3YxOiBmYWxzZVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5fc3RhdGUgIT09IERFRkFVTFQpIHtcbiAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5kaXNwYXRjaCwgYnVmLCBmYWxzZSwgb3B0aW9ucywgY2JdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZW5kRnJhbWUoU2VuZGVyLmZyYW1lKGJ1Ziwgb3B0aW9ucyksIGNiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBwaW5nIG1lc3NhZ2UgdG8gdGhlIG90aGVyIHBlZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW21hc2s9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHBpbmcoZGF0YSwgbWFzaywgY2IpIHtcbiAgICBsZXQgYnl0ZUxlbmd0aDtcbiAgICBsZXQgcmVhZE9ubHk7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBieXRlTGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSk7XG4gICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaXNCbG9iKGRhdGEpKSB7XG4gICAgICBieXRlTGVuZ3RoID0gZGF0YS5zaXplO1xuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHRvQnVmZmVyKGRhdGEpO1xuICAgICAgYnl0ZUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgcmVhZE9ubHkgPSB0b0J1ZmZlci5yZWFkT25seTtcbiAgICB9XG5cbiAgICBpZiAoYnl0ZUxlbmd0aCA+IDEyNSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSBkYXRhIHNpemUgbXVzdCBub3QgYmUgZ3JlYXRlciB0aGFuIDEyNSBieXRlcycpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBba0J5dGVMZW5ndGhdOiBieXRlTGVuZ3RoLFxuICAgICAgZmluOiB0cnVlLFxuICAgICAgZ2VuZXJhdGVNYXNrOiB0aGlzLl9nZW5lcmF0ZU1hc2ssXG4gICAgICBtYXNrLFxuICAgICAgbWFza0J1ZmZlcjogdGhpcy5fbWFza0J1ZmZlcixcbiAgICAgIG9wY29kZTogMHgwOSxcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgcnN2MTogZmFsc2VcbiAgICB9O1xuXG4gICAgaWYgKGlzQmxvYihkYXRhKSkge1xuICAgICAgaWYgKHRoaXMuX3N0YXRlICE9PSBERUZBVUxUKSB7XG4gICAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5nZXRCbG9iRGF0YSwgZGF0YSwgZmFsc2UsIG9wdGlvbnMsIGNiXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdldEJsb2JEYXRhKGRhdGEsIGZhbHNlLCBvcHRpb25zLCBjYik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSAhPT0gREVGQVVMVCkge1xuICAgICAgdGhpcy5lbnF1ZXVlKFt0aGlzLmRpc3BhdGNoLCBkYXRhLCBmYWxzZSwgb3B0aW9ucywgY2JdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZW5kRnJhbWUoU2VuZGVyLmZyYW1lKGRhdGEsIG9wdGlvbnMpLCBjYik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgcG9uZyBtZXNzYWdlIHRvIHRoZSBvdGhlciBwZWVyLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgVGhlIG1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttYXNrPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFzayBgZGF0YWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBDYWxsYmFja1xuICAgKiBAcHVibGljXG4gICAqL1xuICBwb25nKGRhdGEsIG1hc2ssIGNiKSB7XG4gICAgbGV0IGJ5dGVMZW5ndGg7XG4gICAgbGV0IHJlYWRPbmx5O1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgYnl0ZUxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpO1xuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGlzQmxvYihkYXRhKSkge1xuICAgICAgYnl0ZUxlbmd0aCA9IGRhdGEuc2l6ZTtcbiAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSB0b0J1ZmZlcihkYXRhKTtcbiAgICAgIGJ5dGVMZW5ndGggPSBkYXRhLmxlbmd0aDtcbiAgICAgIHJlYWRPbmx5ID0gdG9CdWZmZXIucmVhZE9ubHk7XG4gICAgfVxuXG4gICAgaWYgKGJ5dGVMZW5ndGggPiAxMjUpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgZGF0YSBzaXplIG11c3Qgbm90IGJlIGdyZWF0ZXIgdGhhbiAxMjUgYnl0ZXMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgW2tCeXRlTGVuZ3RoXTogYnl0ZUxlbmd0aCxcbiAgICAgIGZpbjogdHJ1ZSxcbiAgICAgIGdlbmVyYXRlTWFzazogdGhpcy5fZ2VuZXJhdGVNYXNrLFxuICAgICAgbWFzayxcbiAgICAgIG1hc2tCdWZmZXI6IHRoaXMuX21hc2tCdWZmZXIsXG4gICAgICBvcGNvZGU6IDB4MGEsXG4gICAgICByZWFkT25seSxcbiAgICAgIHJzdjE6IGZhbHNlXG4gICAgfTtcblxuICAgIGlmIChpc0Jsb2IoZGF0YSkpIHtcbiAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gREVGQVVMVCkge1xuICAgICAgICB0aGlzLmVucXVldWUoW3RoaXMuZ2V0QmxvYkRhdGEsIGRhdGEsIGZhbHNlLCBvcHRpb25zLCBjYl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRCbG9iRGF0YShkYXRhLCBmYWxzZSwgb3B0aW9ucywgY2IpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgIT09IERFRkFVTFQpIHtcbiAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5kaXNwYXRjaCwgZGF0YSwgZmFsc2UsIG9wdGlvbnMsIGNiXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VuZEZyYW1lKFNlbmRlci5mcmFtZShkYXRhLCBvcHRpb25zKSwgY2IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIGRhdGEgbWVzc2FnZSB0byB0aGUgb3RoZXIgcGVlci5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5iaW5hcnk9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIGBkYXRhYCBpcyBiaW5hcnlcbiAgICogICAgIG9yIHRleHRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jb21wcmVzcz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvXG4gICAqICAgICBjb21wcmVzcyBgZGF0YWBcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5maW49ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmcmFnbWVudCBpcyB0aGVcbiAgICogICAgIGxhc3Qgb25lXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWFzaz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2tcbiAgICogICAgIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHNlbmQoZGF0YSwgb3B0aW9ucywgY2IpIHtcbiAgICBjb25zdCBwZXJNZXNzYWdlRGVmbGF0ZSA9IHRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV07XG4gICAgbGV0IG9wY29kZSA9IG9wdGlvbnMuYmluYXJ5ID8gMiA6IDE7XG4gICAgbGV0IHJzdjEgPSBvcHRpb25zLmNvbXByZXNzO1xuXG4gICAgbGV0IGJ5dGVMZW5ndGg7XG4gICAgbGV0IHJlYWRPbmx5O1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgYnl0ZUxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpO1xuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGlzQmxvYihkYXRhKSkge1xuICAgICAgYnl0ZUxlbmd0aCA9IGRhdGEuc2l6ZTtcbiAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSB0b0J1ZmZlcihkYXRhKTtcbiAgICAgIGJ5dGVMZW5ndGggPSBkYXRhLmxlbmd0aDtcbiAgICAgIHJlYWRPbmx5ID0gdG9CdWZmZXIucmVhZE9ubHk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ZpcnN0RnJhZ21lbnQpIHtcbiAgICAgIHRoaXMuX2ZpcnN0RnJhZ21lbnQgPSBmYWxzZTtcbiAgICAgIGlmIChcbiAgICAgICAgcnN2MSAmJlxuICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZSAmJlxuICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZS5wYXJhbXNbXG4gICAgICAgICAgcGVyTWVzc2FnZURlZmxhdGUuX2lzU2VydmVyXG4gICAgICAgICAgICA/ICdzZXJ2ZXJfbm9fY29udGV4dF90YWtlb3ZlcidcbiAgICAgICAgICAgIDogJ2NsaWVudF9ub19jb250ZXh0X3Rha2VvdmVyJ1xuICAgICAgICBdXG4gICAgICApIHtcbiAgICAgICAgcnN2MSA9IGJ5dGVMZW5ndGggPj0gcGVyTWVzc2FnZURlZmxhdGUuX3RocmVzaG9sZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbXByZXNzID0gcnN2MTtcbiAgICB9IGVsc2Uge1xuICAgICAgcnN2MSA9IGZhbHNlO1xuICAgICAgb3Bjb2RlID0gMDtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5maW4pIHRoaXMuX2ZpcnN0RnJhZ21lbnQgPSB0cnVlO1xuXG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIFtrQnl0ZUxlbmd0aF06IGJ5dGVMZW5ndGgsXG4gICAgICBmaW46IG9wdGlvbnMuZmluLFxuICAgICAgZ2VuZXJhdGVNYXNrOiB0aGlzLl9nZW5lcmF0ZU1hc2ssXG4gICAgICBtYXNrOiBvcHRpb25zLm1hc2ssXG4gICAgICBtYXNrQnVmZmVyOiB0aGlzLl9tYXNrQnVmZmVyLFxuICAgICAgb3Bjb2RlLFxuICAgICAgcmVhZE9ubHksXG4gICAgICByc3YxXG4gICAgfTtcblxuICAgIGlmIChpc0Jsb2IoZGF0YSkpIHtcbiAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gREVGQVVMVCkge1xuICAgICAgICB0aGlzLmVucXVldWUoW3RoaXMuZ2V0QmxvYkRhdGEsIGRhdGEsIHRoaXMuX2NvbXByZXNzLCBvcHRzLCBjYl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRCbG9iRGF0YShkYXRhLCB0aGlzLl9jb21wcmVzcywgb3B0cywgY2IpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgIT09IERFRkFVTFQpIHtcbiAgICAgIHRoaXMuZW5xdWV1ZShbdGhpcy5kaXNwYXRjaCwgZGF0YSwgdGhpcy5fY29tcHJlc3MsIG9wdHMsIGNiXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2goZGF0YSwgdGhpcy5fY29tcHJlc3MsIG9wdHMsIGNiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY29udGVudHMgb2YgYSBibG9iIGFzIGJpbmFyeSBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge0Jsb2J9IGJsb2IgVGhlIGJsb2JcbiAgICogQHBhcmFtIHtCb29sZWFufSBbY29tcHJlc3M9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBjb21wcmVzc1xuICAgKiAgICAgdGhlIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5maW49ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBzZXQgdGhlXG4gICAqICAgICBGSU4gYml0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLmdlbmVyYXRlTWFza10gVGhlIGZ1bmN0aW9uIHVzZWQgdG8gZ2VuZXJhdGUgdGhlXG4gICAqICAgICBtYXNraW5nIGtleVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm1hc2s9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrXG4gICAqICAgICBgZGF0YWBcbiAgICogQHBhcmFtIHtCdWZmZXJ9IFtvcHRpb25zLm1hc2tCdWZmZXJdIFRoZSBidWZmZXIgdXNlZCB0byBzdG9yZSB0aGUgbWFza2luZ1xuICAgKiAgICAga2V5XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLm9wY29kZSBUaGUgb3Bjb2RlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMucmVhZE9ubHk9ZmFsc2VdIFNwZWNpZmllcyB3aGV0aGVyIGBkYXRhYCBjYW4gYmVcbiAgICogICAgIG1vZGlmaWVkXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMucnN2MT1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIHNldCB0aGVcbiAgICogICAgIFJTVjEgYml0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gQ2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEJsb2JEYXRhKGJsb2IsIGNvbXByZXNzLCBvcHRpb25zLCBjYikge1xuICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgKz0gb3B0aW9uc1trQnl0ZUxlbmd0aF07XG4gICAgdGhpcy5fc3RhdGUgPSBHRVRfQkxPQl9EQVRBO1xuXG4gICAgYmxvYlxuICAgICAgLmFycmF5QnVmZmVyKClcbiAgICAgIC50aGVuKChhcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICBpZiAodGhpcy5fc29ja2V0LmRlc3Ryb3llZCkge1xuICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdUaGUgc29ja2V0IHdhcyBjbG9zZWQgd2hpbGUgdGhlIGJsb2Igd2FzIGJlaW5nIHJlYWQnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gYGNhbGxDYWxsYmFja3NgIGlzIGNhbGxlZCBpbiB0aGUgbmV4dCB0aWNrIHRvIGVuc3VyZSB0aGF0IGVycm9yc1xuICAgICAgICAgIC8vIHRoYXQgbWlnaHQgYmUgdGhyb3duIGluIHRoZSBjYWxsYmFja3MgYmVoYXZlIGxpa2UgZXJyb3JzIHRocm93blxuICAgICAgICAgIC8vIG91dHNpZGUgdGhlIHByb21pc2UgY2hhaW4uXG4gICAgICAgICAgLy9cbiAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGNhbGxDYWxsYmFja3MsIHRoaXMsIGVyciwgY2IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgLT0gb3B0aW9uc1trQnl0ZUxlbmd0aF07XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0b0J1ZmZlcihhcnJheUJ1ZmZlcik7XG5cbiAgICAgICAgaWYgKCFjb21wcmVzcykge1xuICAgICAgICAgIHRoaXMuX3N0YXRlID0gREVGQVVMVDtcbiAgICAgICAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoZGF0YSwgb3B0aW9ucyksIGNiKTtcbiAgICAgICAgICB0aGlzLmRlcXVldWUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoKGRhdGEsIGNvbXByZXNzLCBvcHRpb25zLCBjYik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvL1xuICAgICAgICAvLyBgb25FcnJvcmAgaXMgY2FsbGVkIGluIHRoZSBuZXh0IHRpY2sgZm9yIHRoZSBzYW1lIHJlYXNvbiB0aGF0XG4gICAgICAgIC8vIGBjYWxsQ2FsbGJhY2tzYCBhYm92ZSBpcy5cbiAgICAgICAgLy9cbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhvbkVycm9yLCB0aGlzLCBlcnIsIGNiKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0geyhCdWZmZXJ8U3RyaW5nKX0gZGF0YSBUaGUgbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NvbXByZXNzPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gY29tcHJlc3NcbiAgICogICAgIGBkYXRhYFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZpbj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIHNldCB0aGVcbiAgICogICAgIEZJTiBiaXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMuZ2VuZXJhdGVNYXNrXSBUaGUgZnVuY3Rpb24gdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAgICogICAgIG1hc2tpbmcga2V5XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWFzaz1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIG1hc2tcbiAgICogICAgIGBkYXRhYFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gW29wdGlvbnMubWFza0J1ZmZlcl0gVGhlIGJ1ZmZlciB1c2VkIHRvIHN0b3JlIHRoZSBtYXNraW5nXG4gICAqICAgICBrZXlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMub3Bjb2RlIFRoZSBvcGNvZGVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yZWFkT25seT1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgYGRhdGFgIGNhbiBiZVxuICAgKiAgICAgbW9kaWZpZWRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5yc3YxPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gc2V0IHRoZVxuICAgKiAgICAgUlNWMSBiaXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBDYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGlzcGF0Y2goZGF0YSwgY29tcHJlc3MsIG9wdGlvbnMsIGNiKSB7XG4gICAgaWYgKCFjb21wcmVzcykge1xuICAgICAgdGhpcy5zZW5kRnJhbWUoU2VuZGVyLmZyYW1lKGRhdGEsIG9wdGlvbnMpLCBjYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGVyTWVzc2FnZURlZmxhdGUgPSB0aGlzLl9leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdO1xuXG4gICAgdGhpcy5fYnVmZmVyZWRCeXRlcyArPSBvcHRpb25zW2tCeXRlTGVuZ3RoXTtcbiAgICB0aGlzLl9zdGF0ZSA9IERFRkxBVElORztcbiAgICBwZXJNZXNzYWdlRGVmbGF0ZS5jb21wcmVzcyhkYXRhLCBvcHRpb25zLmZpbiwgKF8sIGJ1ZikgPT4ge1xuICAgICAgaWYgKHRoaXMuX3NvY2tldC5kZXN0cm95ZWQpIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICdUaGUgc29ja2V0IHdhcyBjbG9zZWQgd2hpbGUgZGF0YSB3YXMgYmVpbmcgY29tcHJlc3NlZCdcbiAgICAgICAgKTtcblxuICAgICAgICBjYWxsQ2FsbGJhY2tzKHRoaXMsIGVyciwgY2IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2J1ZmZlcmVkQnl0ZXMgLT0gb3B0aW9uc1trQnl0ZUxlbmd0aF07XG4gICAgICB0aGlzLl9zdGF0ZSA9IERFRkFVTFQ7XG4gICAgICBvcHRpb25zLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbmRGcmFtZShTZW5kZXIuZnJhbWUoYnVmLCBvcHRpb25zKSwgY2IpO1xuICAgICAgdGhpcy5kZXF1ZXVlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgcXVldWVkIHNlbmQgb3BlcmF0aW9ucy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlcXVldWUoKSB7XG4gICAgd2hpbGUgKHRoaXMuX3N0YXRlID09PSBERUZBVUxUICYmIHRoaXMuX3F1ZXVlLmxlbmd0aCkge1xuICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5fcXVldWUuc2hpZnQoKTtcblxuICAgICAgdGhpcy5fYnVmZmVyZWRCeXRlcyAtPSBwYXJhbXNbM11ba0J5dGVMZW5ndGhdO1xuICAgICAgUmVmbGVjdC5hcHBseShwYXJhbXNbMF0sIHRoaXMsIHBhcmFtcy5zbGljZSgxKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVucXVldWVzIGEgc2VuZCBvcGVyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBTZW5kIG9wZXJhdGlvbiBwYXJhbWV0ZXJzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZW5xdWV1ZShwYXJhbXMpIHtcbiAgICB0aGlzLl9idWZmZXJlZEJ5dGVzICs9IHBhcmFtc1szXVtrQnl0ZUxlbmd0aF07XG4gICAgdGhpcy5fcXVldWUucHVzaChwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgZnJhbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7KEJ1ZmZlciB8IFN0cmluZylbXX0gbGlzdCBUaGUgZnJhbWUgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZW5kRnJhbWUobGlzdCwgY2IpIHtcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMuX3NvY2tldC5jb3JrKCk7XG4gICAgICB0aGlzLl9zb2NrZXQud3JpdGUobGlzdFswXSk7XG4gICAgICB0aGlzLl9zb2NrZXQud3JpdGUobGlzdFsxXSwgY2IpO1xuICAgICAgdGhpcy5fc29ja2V0LnVuY29yaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zb2NrZXQud3JpdGUobGlzdFswXSwgY2IpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbmRlcjtcblxuLyoqXG4gKiBDYWxscyBxdWV1ZWQgY2FsbGJhY2tzIHdpdGggYW4gZXJyb3IuXG4gKlxuICogQHBhcmFtIHtTZW5kZXJ9IHNlbmRlciBUaGUgYFNlbmRlcmAgaW5zdGFuY2VcbiAqIEBwYXJhbSB7RXJyb3J9IGVyciBUaGUgZXJyb3IgdG8gY2FsbCB0aGUgY2FsbGJhY2tzIHdpdGhcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl0gVGhlIGZpcnN0IGNhbGxiYWNrXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjYWxsQ2FsbGJhY2tzKHNlbmRlciwgZXJyLCBjYikge1xuICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihlcnIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VuZGVyLl9xdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBhcmFtcyA9IHNlbmRlci5fcXVldWVbaV07XG4gICAgY29uc3QgY2FsbGJhY2sgPSBwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soZXJyKTtcbiAgfVxufVxuXG4vKipcbiAqIEhhbmRsZXMgYSBgU2VuZGVyYCBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge1NlbmRlcn0gc2VuZGVyIFRoZSBgU2VuZGVyYCBpbnN0YW5jZVxuICogQHBhcmFtIHtFcnJvcn0gZXJyIFRoZSBlcnJvclxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBUaGUgZmlyc3QgcGVuZGluZyBjYWxsYmFja1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gb25FcnJvcihzZW5kZXIsIGVyciwgY2IpIHtcbiAgY2FsbENhbGxiYWNrcyhzZW5kZXIsIGVyciwgY2IpO1xuICBzZW5kZXIub25lcnJvcihlcnIpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBrRm9yT25FdmVudEF0dHJpYnV0ZSwga0xpc3RlbmVyIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5jb25zdCBrQ29kZSA9IFN5bWJvbCgna0NvZGUnKTtcbmNvbnN0IGtEYXRhID0gU3ltYm9sKCdrRGF0YScpO1xuY29uc3Qga0Vycm9yID0gU3ltYm9sKCdrRXJyb3InKTtcbmNvbnN0IGtNZXNzYWdlID0gU3ltYm9sKCdrTWVzc2FnZScpO1xuY29uc3Qga1JlYXNvbiA9IFN5bWJvbCgna1JlYXNvbicpO1xuY29uc3Qga1RhcmdldCA9IFN5bWJvbCgna1RhcmdldCcpO1xuY29uc3Qga1R5cGUgPSBTeW1ib2woJ2tUeXBlJyk7XG5jb25zdCBrV2FzQ2xlYW4gPSBTeW1ib2woJ2tXYXNDbGVhbicpO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhbiBldmVudC5cbiAqL1xuY2xhc3MgRXZlbnQge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGBFdmVudGAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IElmIHRoZSBgdHlwZWAgYXJndW1lbnQgaXMgbm90IHNwZWNpZmllZFxuICAgKi9cbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXNba1RhcmdldF0gPSBudWxsO1xuICAgIHRoaXNba1R5cGVdID0gdHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7Kn1cbiAgICovXG4gIGdldCB0YXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXNba1RhcmdldF07XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzW2tUeXBlXTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnQucHJvdG90eXBlLCAndGFyZ2V0JywgeyBlbnVtZXJhYmxlOiB0cnVlIH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50LnByb3RvdHlwZSwgJ3R5cGUnLCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgY2xvc2UgZXZlbnQuXG4gKlxuICogQGV4dGVuZHMgRXZlbnRcbiAqL1xuY2xhc3MgQ2xvc2VFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgQ2xvc2VFdmVudGAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEEgZGljdGlvbmFyeSBvYmplY3QgdGhhdCBhbGxvd3MgZm9yIHNldHRpbmdcbiAgICogICAgIGF0dHJpYnV0ZXMgdmlhIG9iamVjdCBtZW1iZXJzIG9mIHRoZSBzYW1lIG5hbWVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmNvZGU9MF0gVGhlIHN0YXR1cyBjb2RlIGV4cGxhaW5pbmcgd2h5IHRoZVxuICAgKiAgICAgY29ubmVjdGlvbiB3YXMgY2xvc2VkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yZWFzb249JyddIEEgaHVtYW4tcmVhZGFibGUgc3RyaW5nIGV4cGxhaW5pbmcgd2h5XG4gICAqICAgICB0aGUgY29ubmVjdGlvbiB3YXMgY2xvc2VkXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMud2FzQ2xlYW49ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0aGVcbiAgICogICAgIGNvbm5lY3Rpb24gd2FzIGNsZWFubHkgY2xvc2VkXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXNba0NvZGVdID0gb3B0aW9ucy5jb2RlID09PSB1bmRlZmluZWQgPyAwIDogb3B0aW9ucy5jb2RlO1xuICAgIHRoaXNba1JlYXNvbl0gPSBvcHRpb25zLnJlYXNvbiA9PT0gdW5kZWZpbmVkID8gJycgOiBvcHRpb25zLnJlYXNvbjtcbiAgICB0aGlzW2tXYXNDbGVhbl0gPSBvcHRpb25zLndhc0NsZWFuID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IG9wdGlvbnMud2FzQ2xlYW47XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIGdldCBjb2RlKCkge1xuICAgIHJldHVybiB0aGlzW2tDb2RlXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0IHJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpc1trUmVhc29uXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIGdldCB3YXNDbGVhbigpIHtcbiAgICByZXR1cm4gdGhpc1trV2FzQ2xlYW5dO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDbG9zZUV2ZW50LnByb3RvdHlwZSwgJ2NvZGUnLCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ2xvc2VFdmVudC5wcm90b3R5cGUsICdyZWFzb24nLCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ2xvc2VFdmVudC5wcm90b3R5cGUsICd3YXNDbGVhbicsIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYW4gZXJyb3IgZXZlbnQuXG4gKlxuICogQGV4dGVuZHMgRXZlbnRcbiAqL1xuY2xhc3MgRXJyb3JFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgRXJyb3JFdmVudGAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEEgZGljdGlvbmFyeSBvYmplY3QgdGhhdCBhbGxvd3MgZm9yIHNldHRpbmdcbiAgICogICAgIGF0dHJpYnV0ZXMgdmlhIG9iamVjdCBtZW1iZXJzIG9mIHRoZSBzYW1lIG5hbWVcbiAgICogQHBhcmFtIHsqfSBbb3B0aW9ucy5lcnJvcj1udWxsXSBUaGUgZXJyb3IgdGhhdCBnZW5lcmF0ZWQgdGhpcyBldmVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubWVzc2FnZT0nJ10gVGhlIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHR5cGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpc1trRXJyb3JdID0gb3B0aW9ucy5lcnJvciA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG9wdGlvbnMuZXJyb3I7XG4gICAgdGhpc1trTWVzc2FnZV0gPSBvcHRpb25zLm1lc3NhZ2UgPT09IHVuZGVmaW5lZCA/ICcnIDogb3B0aW9ucy5tZXNzYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHsqfVxuICAgKi9cbiAgZ2V0IGVycm9yKCkge1xuICAgIHJldHVybiB0aGlzW2tFcnJvcl07XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGdldCBtZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzW2tNZXNzYWdlXTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXJyb3JFdmVudC5wcm90b3R5cGUsICdlcnJvcicsIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFcnJvckV2ZW50LnByb3RvdHlwZSwgJ21lc3NhZ2UnLCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgbWVzc2FnZSBldmVudC5cbiAqXG4gKiBAZXh0ZW5kcyBFdmVudFxuICovXG5jbGFzcyBNZXNzYWdlRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYE1lc3NhZ2VFdmVudGAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEEgZGljdGlvbmFyeSBvYmplY3QgdGhhdCBhbGxvd3MgZm9yIHNldHRpbmdcbiAgICogICAgIGF0dHJpYnV0ZXMgdmlhIG9iamVjdCBtZW1iZXJzIG9mIHRoZSBzYW1lIG5hbWVcbiAgICogQHBhcmFtIHsqfSBbb3B0aW9ucy5kYXRhPW51bGxdIFRoZSBtZXNzYWdlIGNvbnRlbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHR5cGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpc1trRGF0YV0gPSBvcHRpb25zLmRhdGEgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBvcHRpb25zLmRhdGE7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUgeyp9XG4gICAqL1xuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpc1trRGF0YV07XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE1lc3NhZ2VFdmVudC5wcm90b3R5cGUsICdkYXRhJywgeyBlbnVtZXJhYmxlOiB0cnVlIH0pO1xuXG4vKipcbiAqIFRoaXMgcHJvdmlkZXMgbWV0aG9kcyBmb3IgZW11bGF0aW5nIHRoZSBgRXZlbnRUYXJnZXRgIGludGVyZmFjZS4gSXQncyBub3RcbiAqIG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1peGluXG4gKi9cbmNvbnN0IEV2ZW50VGFyZ2V0ID0ge1xuICAvKipcbiAgICogUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZXZlbnQgdHlwZSB0byBsaXN0ZW4gZm9yXG4gICAqIEBwYXJhbSB7KEZ1bmN0aW9ufE9iamVjdCl9IGhhbmRsZXIgVGhlIGxpc3RlbmVyIHRvIGFkZFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEFuIG9wdGlvbnMgb2JqZWN0IHNwZWNpZmllcyBjaGFyYWN0ZXJpc3RpY3MgYWJvdXRcbiAgICogICAgIHRoZSBldmVudCBsaXN0ZW5lclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm9uY2U9ZmFsc2VdIEEgYEJvb2xlYW5gIGluZGljYXRpbmcgdGhhdCB0aGVcbiAgICogICAgIGxpc3RlbmVyIHNob3VsZCBiZSBpbnZva2VkIGF0IG1vc3Qgb25jZSBhZnRlciBiZWluZyBhZGRlZC4gSWYgYHRydWVgLFxuICAgKiAgICAgdGhlIGxpc3RlbmVyIHdvdWxkIGJlIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCB3aGVuIGludm9rZWQuXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycyh0eXBlKSkge1xuICAgICAgaWYgKFxuICAgICAgICAhb3B0aW9uc1trRm9yT25FdmVudEF0dHJpYnV0ZV0gJiZcbiAgICAgICAgbGlzdGVuZXJba0xpc3RlbmVyXSA9PT0gaGFuZGxlciAmJlxuICAgICAgICAhbGlzdGVuZXJba0Zvck9uRXZlbnRBdHRyaWJ1dGVdXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB3cmFwcGVyO1xuXG4gICAgaWYgKHR5cGUgPT09ICdtZXNzYWdlJykge1xuICAgICAgd3JhcHBlciA9IGZ1bmN0aW9uIG9uTWVzc2FnZShkYXRhLCBpc0JpbmFyeSkge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBNZXNzYWdlRXZlbnQoJ21lc3NhZ2UnLCB7XG4gICAgICAgICAgZGF0YTogaXNCaW5hcnkgPyBkYXRhIDogZGF0YS50b1N0cmluZygpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50W2tUYXJnZXRdID0gdGhpcztcbiAgICAgICAgY2FsbExpc3RlbmVyKGhhbmRsZXIsIHRoaXMsIGV2ZW50KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY2xvc2UnKSB7XG4gICAgICB3cmFwcGVyID0gZnVuY3Rpb24gb25DbG9zZShjb2RlLCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IENsb3NlRXZlbnQoJ2Nsb3NlJywge1xuICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgcmVhc29uOiBtZXNzYWdlLnRvU3RyaW5nKCksXG4gICAgICAgICAgd2FzQ2xlYW46IHRoaXMuX2Nsb3NlRnJhbWVSZWNlaXZlZCAmJiB0aGlzLl9jbG9zZUZyYW1lU2VudFxuICAgICAgICB9KTtcblxuICAgICAgICBldmVudFtrVGFyZ2V0XSA9IHRoaXM7XG4gICAgICAgIGNhbGxMaXN0ZW5lcihoYW5kbGVyLCB0aGlzLCBldmVudCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgd3JhcHBlciA9IGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXJyb3JFdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgICB9KTtcblxuICAgICAgICBldmVudFtrVGFyZ2V0XSA9IHRoaXM7XG4gICAgICAgIGNhbGxMaXN0ZW5lcihoYW5kbGVyLCB0aGlzLCBldmVudCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29wZW4nKSB7XG4gICAgICB3cmFwcGVyID0gZnVuY3Rpb24gb25PcGVuKCkge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnb3BlbicpO1xuXG4gICAgICAgIGV2ZW50W2tUYXJnZXRdID0gdGhpcztcbiAgICAgICAgY2FsbExpc3RlbmVyKGhhbmRsZXIsIHRoaXMsIGV2ZW50KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3cmFwcGVyW2tGb3JPbkV2ZW50QXR0cmlidXRlXSA9ICEhb3B0aW9uc1trRm9yT25FdmVudEF0dHJpYnV0ZV07XG4gICAgd3JhcHBlcltrTGlzdGVuZXJdID0gaGFuZGxlcjtcblxuICAgIGlmIChvcHRpb25zLm9uY2UpIHtcbiAgICAgIHRoaXMub25jZSh0eXBlLCB3cmFwcGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbih0eXBlLCB3cmFwcGVyKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBldmVudCB0eXBlIHRvIHJlbW92ZVxuICAgKiBAcGFyYW0geyhGdW5jdGlvbnxPYmplY3QpfSBoYW5kbGVyIFRoZSBsaXN0ZW5lciB0byByZW1vdmVcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKSB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycyh0eXBlKSkge1xuICAgICAgaWYgKGxpc3RlbmVyW2tMaXN0ZW5lcl0gPT09IGhhbmRsZXIgJiYgIWxpc3RlbmVyW2tGb3JPbkV2ZW50QXR0cmlidXRlXSkge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ2xvc2VFdmVudCxcbiAgRXJyb3JFdmVudCxcbiAgRXZlbnQsXG4gIEV2ZW50VGFyZ2V0LFxuICBNZXNzYWdlRXZlbnRcbn07XG5cbi8qKlxuICogQ2FsbCBhbiBldmVudCBsaXN0ZW5lclxuICpcbiAqIEBwYXJhbSB7KEZ1bmN0aW9ufE9iamVjdCl9IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciB0byBjYWxsXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIHZhbHVlIHRvIHVzZSBhcyBgdGhpc2BgIHdoZW4gY2FsbGluZyB0aGUgbGlzdGVuZXJcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0byBwYXNzIHRvIHRoZSBsaXN0ZW5lclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2FsbExpc3RlbmVyKGxpc3RlbmVyLCB0aGlzQXJnLCBldmVudCkge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnb2JqZWN0JyAmJiBsaXN0ZW5lci5oYW5kbGVFdmVudCkge1xuICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBsaXN0ZW5lci5jYWxsKHRoaXNBcmcsIGV2ZW50KTtcbiAgfVxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyB0b2tlbkNoYXJzIH0gPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcblxuLyoqXG4gKiBBZGRzIGFuIG9mZmVyIHRvIHRoZSBtYXAgb2YgZXh0ZW5zaW9uIG9mZmVycyBvciBhIHBhcmFtZXRlciB0byB0aGUgbWFwIG9mXG4gKiBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXN0IFRoZSBtYXAgb2YgZXh0ZW5zaW9uIG9mZmVycyBvciBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZXh0ZW5zaW9uIG9yIHBhcmFtZXRlciBuYW1lXG4gKiBAcGFyYW0geyhPYmplY3R8Qm9vbGVhbnxTdHJpbmcpfSBlbGVtIFRoZSBleHRlbnNpb24gcGFyYW1ldGVycyBvciB0aGVcbiAqICAgICBwYXJhbWV0ZXIgdmFsdWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHB1c2goZGVzdCwgbmFtZSwgZWxlbSkge1xuICBpZiAoZGVzdFtuYW1lXSA9PT0gdW5kZWZpbmVkKSBkZXN0W25hbWVdID0gW2VsZW1dO1xuICBlbHNlIGRlc3RbbmFtZV0ucHVzaChlbGVtKTtcbn1cblxuLyoqXG4gKiBQYXJzZXMgdGhlIGBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnNgIGhlYWRlciBpbnRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVyIFRoZSBmaWVsZCB2YWx1ZSBvZiB0aGUgaGVhZGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBwYXJzZWQgb2JqZWN0XG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKGhlYWRlcikge1xuICBjb25zdCBvZmZlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBsZXQgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgbGV0IG11c3RVbmVzY2FwZSA9IGZhbHNlO1xuICBsZXQgaXNFc2NhcGluZyA9IGZhbHNlO1xuICBsZXQgaW5RdW90ZXMgPSBmYWxzZTtcbiAgbGV0IGV4dGVuc2lvbk5hbWU7XG4gIGxldCBwYXJhbU5hbWU7XG4gIGxldCBzdGFydCA9IC0xO1xuICBsZXQgY29kZSA9IC0xO1xuICBsZXQgZW5kID0gLTE7XG4gIGxldCBpID0gMDtcblxuICBmb3IgKDsgaSA8IGhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgIGNvZGUgPSBoZWFkZXIuY2hhckNvZGVBdChpKTtcblxuICAgIGlmIChleHRlbnNpb25OYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChlbmQgPT09IC0xICYmIHRva2VuQ2hhcnNbY29kZV0gPT09IDEpIHtcbiAgICAgICAgaWYgKHN0YXJ0ID09PSAtMSkgc3RhcnQgPSBpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgaSAhPT0gMCAmJlxuICAgICAgICAoY29kZSA9PT0gMHgyMCAvKiAnICcgKi8gfHwgY29kZSA9PT0gMHgwOSkgLyogJ1xcdCcgKi9cbiAgICAgICkge1xuICAgICAgICBpZiAoZW5kID09PSAtMSAmJiBzdGFydCAhPT0gLTEpIGVuZCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4M2IgLyogJzsnICovIHx8IGNvZGUgPT09IDB4MmMgLyogJywnICovKSB7XG4gICAgICAgIGlmIChzdGFydCA9PT0gLTEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmQgPT09IC0xKSBlbmQgPSBpO1xuICAgICAgICBjb25zdCBuYW1lID0gaGVhZGVyLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgICBpZiAoY29kZSA9PT0gMHgyYykge1xuICAgICAgICAgIHB1c2gob2ZmZXJzLCBuYW1lLCBwYXJhbXMpO1xuICAgICAgICAgIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXh0ZW5zaW9uTmFtZSA9IG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFydCA9IGVuZCA9IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBhdCBpbmRleCAke2l9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYXJhbU5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGVuZCA9PT0gLTEgJiYgdG9rZW5DaGFyc1tjb2RlXSA9PT0gMSkge1xuICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSBzdGFydCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4MjAgfHwgY29kZSA9PT0gMHgwOSkge1xuICAgICAgICBpZiAoZW5kID09PSAtMSAmJiBzdGFydCAhPT0gLTEpIGVuZCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4M2IgfHwgY29kZSA9PT0gMHgyYykge1xuICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBhdCBpbmRleCAke2l9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW5kID09PSAtMSkgZW5kID0gaTtcbiAgICAgICAgcHVzaChwYXJhbXMsIGhlYWRlci5zbGljZShzdGFydCwgZW5kKSwgdHJ1ZSk7XG4gICAgICAgIGlmIChjb2RlID09PSAweDJjKSB7XG4gICAgICAgICAgcHVzaChvZmZlcnMsIGV4dGVuc2lvbk5hbWUsIHBhcmFtcyk7XG4gICAgICAgICAgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBleHRlbnNpb25OYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnQgPSBlbmQgPSAtMTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgzZCAvKiAnPScgKi8gJiYgc3RhcnQgIT09IC0xICYmIGVuZCA9PT0gLTEpIHtcbiAgICAgICAgcGFyYW1OYW1lID0gaGVhZGVyLnNsaWNlKHN0YXJ0LCBpKTtcbiAgICAgICAgc3RhcnQgPSBlbmQgPSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL1xuICAgICAgLy8gVGhlIHZhbHVlIG9mIGEgcXVvdGVkLXN0cmluZyBhZnRlciB1bmVzY2FwaW5nIG11c3QgY29uZm9ybSB0byB0aGVcbiAgICAgIC8vIHRva2VuIEFCTkYsIHNvIG9ubHkgdG9rZW4gY2hhcmFjdGVycyBhcmUgdmFsaWQuXG4gICAgICAvLyBSZWY6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NDU1I3NlY3Rpb24tOS4xXG4gICAgICAvL1xuICAgICAgaWYgKGlzRXNjYXBpbmcpIHtcbiAgICAgICAgaWYgKHRva2VuQ2hhcnNbY29kZV0gIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSBzdGFydCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKCFtdXN0VW5lc2NhcGUpIG11c3RVbmVzY2FwZSA9IHRydWU7XG4gICAgICAgIGlzRXNjYXBpbmcgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaW5RdW90ZXMpIHtcbiAgICAgICAgaWYgKHRva2VuQ2hhcnNbY29kZV0gPT09IDEpIHtcbiAgICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSBzdGFydCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgyMiAvKiAnXCInICovICYmIHN0YXJ0ICE9PSAtMSkge1xuICAgICAgICAgIGluUXVvdGVzID0gZmFsc2U7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAweDVjIC8qICdcXCcgKi8pIHtcbiAgICAgICAgICBpc0VzY2FwaW5nID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAweDIyICYmIGhlYWRlci5jaGFyQ29kZUF0KGkgLSAxKSA9PT0gMHgzZCkge1xuICAgICAgICBpblF1b3RlcyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEgJiYgdG9rZW5DaGFyc1tjb2RlXSA9PT0gMSkge1xuICAgICAgICBpZiAoc3RhcnQgPT09IC0xKSBzdGFydCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0ICE9PSAtMSAmJiAoY29kZSA9PT0gMHgyMCB8fCBjb2RlID09PSAweDA5KSkge1xuICAgICAgICBpZiAoZW5kID09PSAtMSkgZW5kID0gaTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgzYiB8fCBjb2RlID09PSAweDJjKSB7XG4gICAgICAgIGlmIChzdGFydCA9PT0gLTEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmQgPT09IC0xKSBlbmQgPSBpO1xuICAgICAgICBsZXQgdmFsdWUgPSBoZWFkZXIuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICAgIGlmIChtdXN0VW5lc2NhcGUpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcXFwvZywgJycpO1xuICAgICAgICAgIG11c3RVbmVzY2FwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHB1c2gocGFyYW1zLCBwYXJhbU5hbWUsIHZhbHVlKTtcbiAgICAgICAgaWYgKGNvZGUgPT09IDB4MmMpIHtcbiAgICAgICAgICBwdXNoKG9mZmVycywgZXh0ZW5zaW9uTmFtZSwgcGFyYW1zKTtcbiAgICAgICAgICBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGV4dGVuc2lvbk5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHN0YXJ0ID0gZW5kID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnQgPT09IC0xIHx8IGluUXVvdGVzIHx8IGNvZGUgPT09IDB4MjAgfHwgY29kZSA9PT0gMHgwOSkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgaW5wdXQnKTtcbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSBlbmQgPSBpO1xuICBjb25zdCB0b2tlbiA9IGhlYWRlci5zbGljZShzdGFydCwgZW5kKTtcbiAgaWYgKGV4dGVuc2lvbk5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHB1c2gob2ZmZXJzLCB0b2tlbiwgcGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyYW1OYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHB1c2gocGFyYW1zLCB0b2tlbiwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChtdXN0VW5lc2NhcGUpIHtcbiAgICAgIHB1c2gocGFyYW1zLCBwYXJhbU5hbWUsIHRva2VuLnJlcGxhY2UoL1xcXFwvZywgJycpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHVzaChwYXJhbXMsIHBhcmFtTmFtZSwgdG9rZW4pO1xuICAgIH1cbiAgICBwdXNoKG9mZmVycywgZXh0ZW5zaW9uTmFtZSwgcGFyYW1zKTtcbiAgfVxuXG4gIHJldHVybiBvZmZlcnM7XG59XG5cbi8qKlxuICogQnVpbGRzIHRoZSBgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zYCBoZWFkZXIgZmllbGQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGV4dGVuc2lvbnMgVGhlIG1hcCBvZiBleHRlbnNpb25zIGFuZCBwYXJhbWV0ZXJzIHRvIGZvcm1hdFxuICogQHJldHVybiB7U3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGdpdmVuIG9iamVjdFxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBmb3JtYXQoZXh0ZW5zaW9ucykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZXh0ZW5zaW9ucylcbiAgICAubWFwKChleHRlbnNpb24pID0+IHtcbiAgICAgIGxldCBjb25maWd1cmF0aW9ucyA9IGV4dGVuc2lvbnNbZXh0ZW5zaW9uXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb25maWd1cmF0aW9ucykpIGNvbmZpZ3VyYXRpb25zID0gW2NvbmZpZ3VyYXRpb25zXTtcbiAgICAgIHJldHVybiBjb25maWd1cmF0aW9uc1xuICAgICAgICAubWFwKChwYXJhbXMpID0+IHtcbiAgICAgICAgICByZXR1cm4gW2V4dGVuc2lvbl1cbiAgICAgICAgICAgIC5jb25jYXQoXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykubWFwKChrKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHBhcmFtc1trXTtcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkgdmFsdWVzID0gW3ZhbHVlc107XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgLm1hcCgodikgPT4gKHYgPT09IHRydWUgPyBrIDogYCR7a309JHt2fWApKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJzsgJyk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuam9pbignOyAnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgfSlcbiAgICAuam9pbignLCAnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGZvcm1hdCwgcGFyc2UgfTtcbiIsICIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFtcImVycm9yXCIsIHsgXCJ2YXJzSWdub3JlUGF0dGVyblwiOiBcIl5EdXBsZXh8UmVhZGFibGUkXCIsIFwiY2F1Z2h0RXJyb3JzXCI6IFwibm9uZVwiIH1dICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5jb25zdCBodHRwcyA9IHJlcXVpcmUoJ2h0dHBzJyk7XG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgbmV0ID0gcmVxdWlyZSgnbmV0Jyk7XG5jb25zdCB0bHMgPSByZXF1aXJlKCd0bHMnKTtcbmNvbnN0IHsgcmFuZG9tQnl0ZXMsIGNyZWF0ZUhhc2ggfSA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuY29uc3QgeyBEdXBsZXgsIFJlYWRhYmxlIH0gPSByZXF1aXJlKCdzdHJlYW0nKTtcbmNvbnN0IHsgVVJMIH0gPSByZXF1aXJlKCd1cmwnKTtcblxuY29uc3QgUGVyTWVzc2FnZURlZmxhdGUgPSByZXF1aXJlKCcuL3Blcm1lc3NhZ2UtZGVmbGF0ZScpO1xuY29uc3QgUmVjZWl2ZXIgPSByZXF1aXJlKCcuL3JlY2VpdmVyJyk7XG5jb25zdCBTZW5kZXIgPSByZXF1aXJlKCcuL3NlbmRlcicpO1xuY29uc3QgeyBpc0Jsb2IgfSA9IHJlcXVpcmUoJy4vdmFsaWRhdGlvbicpO1xuXG5jb25zdCB7XG4gIEJJTkFSWV9UWVBFUyxcbiAgQ0xPU0VfVElNRU9VVCxcbiAgRU1QVFlfQlVGRkVSLFxuICBHVUlELFxuICBrRm9yT25FdmVudEF0dHJpYnV0ZSxcbiAga0xpc3RlbmVyLFxuICBrU3RhdHVzQ29kZSxcbiAga1dlYlNvY2tldCxcbiAgTk9PUFxufSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCB7XG4gIEV2ZW50VGFyZ2V0OiB7IGFkZEV2ZW50TGlzdGVuZXIsIHJlbW92ZUV2ZW50TGlzdGVuZXIgfVxufSA9IHJlcXVpcmUoJy4vZXZlbnQtdGFyZ2V0Jyk7XG5jb25zdCB7IGZvcm1hdCwgcGFyc2UgfSA9IHJlcXVpcmUoJy4vZXh0ZW5zaW9uJyk7XG5jb25zdCB7IHRvQnVmZmVyIH0gPSByZXF1aXJlKCcuL2J1ZmZlci11dGlsJyk7XG5cbmNvbnN0IGtBYm9ydGVkID0gU3ltYm9sKCdrQWJvcnRlZCcpO1xuY29uc3QgcHJvdG9jb2xWZXJzaW9ucyA9IFs4LCAxM107XG5jb25zdCByZWFkeVN0YXRlcyA9IFsnQ09OTkVDVElORycsICdPUEVOJywgJ0NMT1NJTkcnLCAnQ0xPU0VEJ107XG5jb25zdCBzdWJwcm90b2NvbFJlZ2V4ID0gL15bISMkJSYnKitcXC0uMC05QS1aXl9gfGEten5dKyQvO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIFdlYlNvY2tldC5cbiAqXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuY2xhc3MgV2ViU29ja2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBgV2ViU29ja2V0YC5cbiAgICpcbiAgICogQHBhcmFtIHsoU3RyaW5nfFVSTCl9IGFkZHJlc3MgVGhlIFVSTCB0byB3aGljaCB0byBjb25uZWN0XG4gICAqIEBwYXJhbSB7KFN0cmluZ3xTdHJpbmdbXSl9IFtwcm90b2NvbHNdIFRoZSBzdWJwcm90b2NvbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBDb25uZWN0aW9uIG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkZHJlc3MsIHByb3RvY29scywgb3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9iaW5hcnlUeXBlID0gQklOQVJZX1RZUEVTWzBdO1xuICAgIHRoaXMuX2Nsb3NlQ29kZSA9IDEwMDY7XG4gICAgdGhpcy5fY2xvc2VGcmFtZVJlY2VpdmVkID0gZmFsc2U7XG4gICAgdGhpcy5fY2xvc2VGcmFtZVNlbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9jbG9zZU1lc3NhZ2UgPSBFTVBUWV9CVUZGRVI7XG4gICAgdGhpcy5fY2xvc2VUaW1lciA9IG51bGw7XG4gICAgdGhpcy5fZXJyb3JFbWl0dGVkID0gZmFsc2U7XG4gICAgdGhpcy5fZXh0ZW5zaW9ucyA9IHt9O1xuICAgIHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3Byb3RvY29sID0gJyc7XG4gICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DT05ORUNUSU5HO1xuICAgIHRoaXMuX3JlY2VpdmVyID0gbnVsbDtcbiAgICB0aGlzLl9zZW5kZXIgPSBudWxsO1xuICAgIHRoaXMuX3NvY2tldCA9IG51bGw7XG5cbiAgICBpZiAoYWRkcmVzcyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fYnVmZmVyZWRBbW91bnQgPSAwO1xuICAgICAgdGhpcy5faXNTZXJ2ZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlZGlyZWN0cyA9IDA7XG5cbiAgICAgIGlmIChwcm90b2NvbHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm90b2NvbHMgPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkocHJvdG9jb2xzKSkge1xuICAgICAgICBpZiAodHlwZW9mIHByb3RvY29scyA9PT0gJ29iamVjdCcgJiYgcHJvdG9jb2xzICE9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IHByb3RvY29scztcbiAgICAgICAgICBwcm90b2NvbHMgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm90b2NvbHMgPSBbcHJvdG9jb2xzXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbml0QXNDbGllbnQodGhpcywgYWRkcmVzcywgcHJvdG9jb2xzLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXV0b1BvbmcgPSBvcHRpb25zLmF1dG9Qb25nO1xuICAgICAgdGhpcy5fY2xvc2VUaW1lb3V0ID0gb3B0aW9ucy5jbG9zZVRpbWVvdXQ7XG4gICAgICB0aGlzLl9pc1NlcnZlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvciBoaXN0b3JpY2FsIHJlYXNvbnMsIHRoZSBjdXN0b20gXCJub2RlYnVmZmVyXCIgdHlwZSBpcyB1c2VkIGJ5IHRoZSBkZWZhdWx0XG4gICAqIGluc3RlYWQgb2YgXCJibG9iXCIuXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBnZXQgYmluYXJ5VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmluYXJ5VHlwZTtcbiAgfVxuXG4gIHNldCBiaW5hcnlUeXBlKHR5cGUpIHtcbiAgICBpZiAoIUJJTkFSWV9UWVBFUy5pbmNsdWRlcyh0eXBlKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fYmluYXJ5VHlwZSA9IHR5cGU7XG5cbiAgICAvL1xuICAgIC8vIEFsbG93IHRvIGNoYW5nZSBgYmluYXJ5VHlwZWAgb24gdGhlIGZseS5cbiAgICAvL1xuICAgIGlmICh0aGlzLl9yZWNlaXZlcikgdGhpcy5fcmVjZWl2ZXIuX2JpbmFyeVR5cGUgPSB0eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBnZXQgYnVmZmVyZWRBbW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLl9zb2NrZXQpIHJldHVybiB0aGlzLl9idWZmZXJlZEFtb3VudDtcblxuICAgIHJldHVybiB0aGlzLl9zb2NrZXQuX3dyaXRhYmxlU3RhdGUubGVuZ3RoICsgdGhpcy5fc2VuZGVyLl9idWZmZXJlZEJ5dGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBnZXQgZXh0ZW5zaW9ucygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZXh0ZW5zaW9ucykuam9pbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgZ2V0IGlzUGF1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9wYXVzZWQ7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKi9cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZ2V0IG9uY2xvc2UoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKi9cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZ2V0IG9uZXJyb3IoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKi9cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZ2V0IG9ub3BlbigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqL1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBnZXQgb25tZXNzYWdlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBnZXQgcHJvdG9jb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3RvY29sO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBnZXQgcmVhZHlTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZHlTdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB1cCB0aGUgc29ja2V0IGFuZCB0aGUgaW50ZXJuYWwgcmVzb3VyY2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0R1cGxleH0gc29ja2V0IFRoZSBuZXR3b3JrIHNvY2tldCBiZXR3ZWVuIHRoZSBzZXJ2ZXIgYW5kIGNsaWVudFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gaGVhZCBUaGUgZmlyc3QgcGFja2V0IG9mIHRoZSB1cGdyYWRlZCBzdHJlYW1cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hbGxvd1N5bmNocm9ub3VzRXZlbnRzPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlclxuICAgKiAgICAgYW55IG9mIHRoZSBgJ21lc3NhZ2UnYCwgYCdwaW5nJ2AsIGFuZCBgJ3BvbmcnYCBldmVudHMgY2FuIGJlIGVtaXR0ZWRcbiAgICogICAgIG11bHRpcGxlIHRpbWVzIGluIHRoZSBzYW1lIHRpY2tcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMuZ2VuZXJhdGVNYXNrXSBUaGUgZnVuY3Rpb24gdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAgICogICAgIG1hc2tpbmcga2V5XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhQYXlsb2FkPTBdIFRoZSBtYXhpbXVtIGFsbG93ZWQgbWVzc2FnZSBzaXplXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuc2tpcFVURjhWYWxpZGF0aW9uPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvclxuICAgKiAgICAgbm90IHRvIHNraXAgVVRGLTggdmFsaWRhdGlvbiBmb3IgdGV4dCBhbmQgY2xvc2UgbWVzc2FnZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFNvY2tldChzb2NrZXQsIGhlYWQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCByZWNlaXZlciA9IG5ldyBSZWNlaXZlcih7XG4gICAgICBhbGxvd1N5bmNocm9ub3VzRXZlbnRzOiBvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHMsXG4gICAgICBiaW5hcnlUeXBlOiB0aGlzLmJpbmFyeVR5cGUsXG4gICAgICBleHRlbnNpb25zOiB0aGlzLl9leHRlbnNpb25zLFxuICAgICAgaXNTZXJ2ZXI6IHRoaXMuX2lzU2VydmVyLFxuICAgICAgbWF4UGF5bG9hZDogb3B0aW9ucy5tYXhQYXlsb2FkLFxuICAgICAgc2tpcFVURjhWYWxpZGF0aW9uOiBvcHRpb25zLnNraXBVVEY4VmFsaWRhdGlvblxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VuZGVyID0gbmV3IFNlbmRlcihzb2NrZXQsIHRoaXMuX2V4dGVuc2lvbnMsIG9wdGlvbnMuZ2VuZXJhdGVNYXNrKTtcblxuICAgIHRoaXMuX3JlY2VpdmVyID0gcmVjZWl2ZXI7XG4gICAgdGhpcy5fc2VuZGVyID0gc2VuZGVyO1xuICAgIHRoaXMuX3NvY2tldCA9IHNvY2tldDtcblxuICAgIHJlY2VpdmVyW2tXZWJTb2NrZXRdID0gdGhpcztcbiAgICBzZW5kZXJba1dlYlNvY2tldF0gPSB0aGlzO1xuICAgIHNvY2tldFtrV2ViU29ja2V0XSA9IHRoaXM7XG5cbiAgICByZWNlaXZlci5vbignY29uY2x1ZGUnLCByZWNlaXZlck9uQ29uY2x1ZGUpO1xuICAgIHJlY2VpdmVyLm9uKCdkcmFpbicsIHJlY2VpdmVyT25EcmFpbik7XG4gICAgcmVjZWl2ZXIub24oJ2Vycm9yJywgcmVjZWl2ZXJPbkVycm9yKTtcbiAgICByZWNlaXZlci5vbignbWVzc2FnZScsIHJlY2VpdmVyT25NZXNzYWdlKTtcbiAgICByZWNlaXZlci5vbigncGluZycsIHJlY2VpdmVyT25QaW5nKTtcbiAgICByZWNlaXZlci5vbigncG9uZycsIHJlY2VpdmVyT25Qb25nKTtcblxuICAgIHNlbmRlci5vbmVycm9yID0gc2VuZGVyT25FcnJvcjtcblxuICAgIC8vXG4gICAgLy8gVGhlc2UgbWV0aG9kcyBtYXkgbm90IGJlIGF2YWlsYWJsZSBpZiBgc29ja2V0YCBpcyBqdXN0IGEgYER1cGxleGAuXG4gICAgLy9cbiAgICBpZiAoc29ja2V0LnNldFRpbWVvdXQpIHNvY2tldC5zZXRUaW1lb3V0KDApO1xuICAgIGlmIChzb2NrZXQuc2V0Tm9EZWxheSkgc29ja2V0LnNldE5vRGVsYXkoKTtcblxuICAgIGlmIChoZWFkLmxlbmd0aCA+IDApIHNvY2tldC51bnNoaWZ0KGhlYWQpO1xuXG4gICAgc29ja2V0Lm9uKCdjbG9zZScsIHNvY2tldE9uQ2xvc2UpO1xuICAgIHNvY2tldC5vbignZGF0YScsIHNvY2tldE9uRGF0YSk7XG4gICAgc29ja2V0Lm9uKCdlbmQnLCBzb2NrZXRPbkVuZCk7XG4gICAgc29ja2V0Lm9uKCdlcnJvcicsIHNvY2tldE9uRXJyb3IpO1xuXG4gICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5PUEVOO1xuICAgIHRoaXMuZW1pdCgnb3BlbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXQgdGhlIGAnY2xvc2UnYCBldmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGVtaXRDbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuX3NvY2tldCkge1xuICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TRUQ7XG4gICAgICB0aGlzLmVtaXQoJ2Nsb3NlJywgdGhpcy5fY2xvc2VDb2RlLCB0aGlzLl9jbG9zZU1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdKSB7XG4gICAgICB0aGlzLl9leHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdLmNsZWFudXAoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZWNlaXZlci5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NFRDtcbiAgICB0aGlzLmVtaXQoJ2Nsb3NlJywgdGhpcy5fY2xvc2VDb2RlLCB0aGlzLl9jbG9zZU1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGEgY2xvc2luZyBoYW5kc2hha2UuXG4gICAqXG4gICAqICAgICAgICAgICstLS0tLS0tLS0tKyAgICstLS0tLS0tLS0tLSsgICArLS0tLS0tLS0tLStcbiAgICogICAgIC0gLSAtfHdzLmNsb3NlKCl8LS0+fGNsb3NlIGZyYW1lfC0tPnx3cy5jbG9zZSgpfC0gLSAtXG4gICAqICAgIHwgICAgICstLS0tLS0tLS0tKyAgICstLS0tLS0tLS0tLSsgICArLS0tLS0tLS0tLSsgICAgIHxcbiAgICogICAgICAgICAgKy0tLS0tLS0tLS0rICAgKy0tLS0tLS0tLS0tKyAgICAgICAgIHxcbiAgICogQ0xPU0lORyAgfHdzLmNsb3NlKCl8PC0tfGNsb3NlIGZyYW1lfDwtLSstLS0tLSsgICAgICAgQ0xPU0lOR1xuICAgKiAgICAgICAgICArLS0tLS0tLS0tLSsgICArLS0tLS0tLS0tLS0rICAgfFxuICAgKiAgICB8ICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICstLS0rICAgICAgICB8XG4gICAqICAgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0+fGZpbnwgLSAtIC0gLVxuICAgKiAgICB8ICAgICAgICAgKy0tLSsgICAgICAgICAgICAgICAgICAgICAgfCAgICstLS0rXG4gICAqICAgICAtIC0gLSAtIC18ZmlufDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAqICAgICAgICAgICAgICArLS0tK1xuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gW2NvZGVdIFN0YXR1cyBjb2RlIGV4cGxhaW5pbmcgd2h5IHRoZSBjb25uZWN0aW9uIGlzIGNsb3NpbmdcbiAgICogQHBhcmFtIHsoU3RyaW5nfEJ1ZmZlcil9IFtkYXRhXSBUaGUgcmVhc29uIHdoeSB0aGUgY29ubmVjdGlvbiBpc1xuICAgKiAgICAgY2xvc2luZ1xuICAgKiBAcHVibGljXG4gICAqL1xuICBjbG9zZShjb2RlLCBkYXRhKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HKSB7XG4gICAgICBjb25zdCBtc2cgPSAnV2ViU29ja2V0IHdhcyBjbG9zZWQgYmVmb3JlIHRoZSBjb25uZWN0aW9uIHdhcyBlc3RhYmxpc2hlZCc7XG4gICAgICBhYm9ydEhhbmRzaGFrZSh0aGlzLCB0aGlzLl9yZXEsIG1zZyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NJTkcpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fY2xvc2VGcmFtZVNlbnQgJiZcbiAgICAgICAgKHRoaXMuX2Nsb3NlRnJhbWVSZWNlaXZlZCB8fCB0aGlzLl9yZWNlaXZlci5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fc29ja2V0LmVuZCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TSU5HO1xuICAgIHRoaXMuX3NlbmRlci5jbG9zZShjb2RlLCBkYXRhLCAhdGhpcy5faXNTZXJ2ZXIsIChlcnIpID0+IHtcbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIGVycm9yIGlzIGhhbmRsZWQgYnkgdGhlIGAnZXJyb3InYCBsaXN0ZW5lciBvbiB0aGUgc29ja2V0LiBXZSBvbmx5XG4gICAgICAvLyB3YW50IHRvIGtub3cgaWYgdGhlIGNsb3NlIGZyYW1lIGhhcyBiZWVuIHNlbnQgaGVyZS5cbiAgICAgIC8vXG4gICAgICBpZiAoZXJyKSByZXR1cm47XG5cbiAgICAgIHRoaXMuX2Nsb3NlRnJhbWVTZW50ID0gdHJ1ZTtcblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9jbG9zZUZyYW1lUmVjZWl2ZWQgfHxcbiAgICAgICAgdGhpcy5fcmVjZWl2ZXIuX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fc29ja2V0LmVuZCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2V0Q2xvc2VUaW1lcih0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXVzZSB0aGUgc29ja2V0LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwYXVzZSgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HIHx8XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRURcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wYXVzZWQgPSB0cnVlO1xuICAgIHRoaXMuX3NvY2tldC5wYXVzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IFtkYXRhXSBUaGUgZGF0YSB0byBzZW5kXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW21hc2tdIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0byBtYXNrIGBkYXRhYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrIHdoaWNoIGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHBpbmcgaXMgc2VudFxuICAgKiBAcHVibGljXG4gICAqL1xuICBwaW5nKGRhdGEsIG1hc2ssIGNiKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2ViU29ja2V0IGlzIG5vdCBvcGVuOiByZWFkeVN0YXRlIDAgKENPTk5FQ1RJTkcpJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IGRhdGE7XG4gICAgICBkYXRhID0gbWFzayA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtYXNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IG1hc2s7XG4gICAgICBtYXNrID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgc2VuZEFmdGVyQ2xvc2UodGhpcywgZGF0YSwgY2IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtYXNrID09PSB1bmRlZmluZWQpIG1hc2sgPSAhdGhpcy5faXNTZXJ2ZXI7XG4gICAgdGhpcy5fc2VuZGVyLnBpbmcoZGF0YSB8fCBFTVBUWV9CVUZGRVIsIG1hc2ssIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgcG9uZy5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBbZGF0YV0gVGhlIGRhdGEgdG8gc2VuZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttYXNrXSBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgdG8gbWFzayBgZGF0YWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBDYWxsYmFjayB3aGljaCBpcyBleGVjdXRlZCB3aGVuIHRoZSBwb25nIGlzIHNlbnRcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcG9uZyhkYXRhLCBtYXNrLCBjYikge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYlNvY2tldCBpcyBub3Qgb3BlbjogcmVhZHlTdGF0ZSAwIChDT05ORUNUSU5HKScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IgPSBkYXRhO1xuICAgICAgZGF0YSA9IG1hc2sgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbWFzayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IgPSBtYXNrO1xuICAgICAgbWFzayA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInKSBkYXRhID0gZGF0YS50b1N0cmluZygpO1xuXG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSAhPT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgIHNlbmRBZnRlckNsb3NlKHRoaXMsIGRhdGEsIGNiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobWFzayA9PT0gdW5kZWZpbmVkKSBtYXNrID0gIXRoaXMuX2lzU2VydmVyO1xuICAgIHRoaXMuX3NlbmRlci5wb25nKGRhdGEgfHwgRU1QVFlfQlVGRkVSLCBtYXNrLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogUmVzdW1lIHRoZSBzb2NrZXQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHJlc3VtZSgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HIHx8XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRURcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wYXVzZWQgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuX3JlY2VpdmVyLl93cml0YWJsZVN0YXRlLm5lZWREcmFpbikgdGhpcy5fc29ja2V0LnJlc3VtZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBkYXRhIG1lc3NhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5iaW5hcnldIFNwZWNpZmllcyB3aGV0aGVyIGBkYXRhYCBpcyBiaW5hcnkgb3JcbiAgICogICAgIHRleHRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jb21wcmVzc10gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvIGNvbXByZXNzXG4gICAqICAgICBgZGF0YWBcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5maW49dHJ1ZV0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZyYWdtZW50IGlzIHRoZVxuICAgKiAgICAgbGFzdCBvbmVcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tYXNrXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gbWFzayBgZGF0YWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBDYWxsYmFjayB3aGljaCBpcyBleGVjdXRlZCB3aGVuIGRhdGEgaXMgd3JpdHRlbiBvdXRcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc2VuZChkYXRhLCBvcHRpb25zLCBjYikge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYlNvY2tldCBpcyBub3Qgb3BlbjogcmVhZHlTdGF0ZSAwIChDT05ORUNUSU5HKScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IgPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgc2VuZEFmdGVyQ2xvc2UodGhpcywgZGF0YSwgY2IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBiaW5hcnk6IHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJyxcbiAgICAgIG1hc2s6ICF0aGlzLl9pc1NlcnZlcixcbiAgICAgIGNvbXByZXNzOiB0cnVlLFxuICAgICAgZmluOiB0cnVlLFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG5cbiAgICBpZiAoIXRoaXMuX2V4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pIHtcbiAgICAgIG9wdHMuY29tcHJlc3MgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZW5kZXIuc2VuZChkYXRhIHx8IEVNUFRZX0JVRkZFUiwgb3B0cywgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmNpYmx5IGNsb3NlIHRoZSBjb25uZWN0aW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICB0ZXJtaW5hdGUoKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DT05ORUNUSU5HKSB7XG4gICAgICBjb25zdCBtc2cgPSAnV2ViU29ja2V0IHdhcyBjbG9zZWQgYmVmb3JlIHRoZSBjb25uZWN0aW9uIHdhcyBlc3RhYmxpc2hlZCc7XG4gICAgICBhYm9ydEhhbmRzaGFrZSh0aGlzLCB0aGlzLl9yZXEsIG1zZyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3NvY2tldCkge1xuICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TSU5HO1xuICAgICAgdGhpcy5fc29ja2V0LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAY29uc3RhbnQge051bWJlcn0gQ09OTkVDVElOR1xuICogQG1lbWJlcm9mIFdlYlNvY2tldFxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LCAnQ09OTkVDVElORycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHJlYWR5U3RhdGVzLmluZGV4T2YoJ0NPTk5FQ1RJTkcnKVxufSk7XG5cbi8qKlxuICogQGNvbnN0YW50IHtOdW1iZXJ9IENPTk5FQ1RJTkdcbiAqIEBtZW1iZXJvZiBXZWJTb2NrZXQucHJvdG90eXBlXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJTb2NrZXQucHJvdG90eXBlLCAnQ09OTkVDVElORycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHJlYWR5U3RhdGVzLmluZGV4T2YoJ0NPTk5FQ1RJTkcnKVxufSk7XG5cbi8qKlxuICogQGNvbnN0YW50IHtOdW1iZXJ9IE9QRU5cbiAqIEBtZW1iZXJvZiBXZWJTb2NrZXRcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldCwgJ09QRU4nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiByZWFkeVN0YXRlcy5pbmRleE9mKCdPUEVOJylcbn0pO1xuXG4vKipcbiAqIEBjb25zdGFudCB7TnVtYmVyfSBPUEVOXG4gKiBAbWVtYmVyb2YgV2ViU29ja2V0LnByb3RvdHlwZVxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViU29ja2V0LnByb3RvdHlwZSwgJ09QRU4nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiByZWFkeVN0YXRlcy5pbmRleE9mKCdPUEVOJylcbn0pO1xuXG4vKipcbiAqIEBjb25zdGFudCB7TnVtYmVyfSBDTE9TSU5HXG4gKiBAbWVtYmVyb2YgV2ViU29ja2V0XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJTb2NrZXQsICdDTE9TSU5HJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICB2YWx1ZTogcmVhZHlTdGF0ZXMuaW5kZXhPZignQ0xPU0lORycpXG59KTtcblxuLyoqXG4gKiBAY29uc3RhbnQge051bWJlcn0gQ0xPU0lOR1xuICogQG1lbWJlcm9mIFdlYlNvY2tldC5wcm90b3R5cGVcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldC5wcm90b3R5cGUsICdDTE9TSU5HJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICB2YWx1ZTogcmVhZHlTdGF0ZXMuaW5kZXhPZignQ0xPU0lORycpXG59KTtcblxuLyoqXG4gKiBAY29uc3RhbnQge051bWJlcn0gQ0xPU0VEXG4gKiBAbWVtYmVyb2YgV2ViU29ja2V0XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJTb2NrZXQsICdDTE9TRUQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiByZWFkeVN0YXRlcy5pbmRleE9mKCdDTE9TRUQnKVxufSk7XG5cbi8qKlxuICogQGNvbnN0YW50IHtOdW1iZXJ9IENMT1NFRFxuICogQG1lbWJlcm9mIFdlYlNvY2tldC5wcm90b3R5cGVcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldC5wcm90b3R5cGUsICdDTE9TRUQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIHZhbHVlOiByZWFkeVN0YXRlcy5pbmRleE9mKCdDTE9TRUQnKVxufSk7XG5cbltcbiAgJ2JpbmFyeVR5cGUnLFxuICAnYnVmZmVyZWRBbW91bnQnLFxuICAnZXh0ZW5zaW9ucycsXG4gICdpc1BhdXNlZCcsXG4gICdwcm90b2NvbCcsXG4gICdyZWFkeVN0YXRlJyxcbiAgJ3VybCdcbl0uZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldC5wcm90b3R5cGUsIHByb3BlcnR5LCB7IGVudW1lcmFibGU6IHRydWUgfSk7XG59KTtcblxuLy9cbi8vIEFkZCB0aGUgYG9ub3BlbmAsIGBvbmVycm9yYCwgYG9uY2xvc2VgLCBhbmQgYG9ubWVzc2FnZWAgYXR0cmlidXRlcy5cbi8vIFNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9jb21tcy5odG1sI3RoZS13ZWJzb2NrZXQtaW50ZXJmYWNlXG4vL1xuWydvcGVuJywgJ2Vycm9yJywgJ2Nsb3NlJywgJ21lc3NhZ2UnXS5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYlNvY2tldC5wcm90b3R5cGUsIGBvbiR7bWV0aG9kfWAsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMobWV0aG9kKSkge1xuICAgICAgICBpZiAobGlzdGVuZXJba0Zvck9uRXZlbnRBdHRyaWJ1dGVdKSByZXR1cm4gbGlzdGVuZXJba0xpc3RlbmVyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBzZXQoaGFuZGxlcikge1xuICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycyhtZXRob2QpKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lcltrRm9yT25FdmVudEF0dHJpYnV0ZV0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKG1ldGhvZCwgbGlzdGVuZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIobWV0aG9kLCBoYW5kbGVyLCB7XG4gICAgICAgIFtrRm9yT25FdmVudEF0dHJpYnV0ZV06IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KTtcblxuV2ViU29ja2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcjtcbldlYlNvY2tldC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViU29ja2V0O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBXZWJTb2NrZXQgY2xpZW50LlxuICpcbiAqIEBwYXJhbSB7V2ViU29ja2V0fSB3ZWJzb2NrZXQgVGhlIGNsaWVudCB0byBpbml0aWFsaXplXG4gKiBAcGFyYW0geyhTdHJpbmd8VVJMKX0gYWRkcmVzcyBUaGUgVVJMIHRvIHdoaWNoIHRvIGNvbm5lY3RcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3RvY29scyBUaGUgc3VicHJvdG9jb2xzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIENvbm5lY3Rpb24gb3B0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hbGxvd1N5bmNocm9ub3VzRXZlbnRzPXRydWVdIFNwZWNpZmllcyB3aGV0aGVyIGFueVxuICogICAgIG9mIHRoZSBgJ21lc3NhZ2UnYCwgYCdwaW5nJ2AsIGFuZCBgJ3BvbmcnYCBldmVudHMgY2FuIGJlIGVtaXR0ZWQgbXVsdGlwbGVcbiAqICAgICB0aW1lcyBpbiB0aGUgc2FtZSB0aWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmF1dG9Qb25nPXRydWVdIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0b1xuICogICAgIGF1dG9tYXRpY2FsbHkgc2VuZCBhIHBvbmcgaW4gcmVzcG9uc2UgdG8gYSBwaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuY2xvc2VUaW1lb3V0PTMwMDAwXSBEdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgdG8gd2FpdFxuICogICAgIGZvciB0aGUgY2xvc2luZyBoYW5kc2hha2UgdG8gZmluaXNoIGFmdGVyIGB3ZWJzb2NrZXQuY2xvc2UoKWAgaXMgY2FsbGVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5maW5pc2hSZXF1ZXN0XSBBIGZ1bmN0aW9uIHdoaWNoIGNhbiBiZSB1c2VkIHRvXG4gKiAgICAgY3VzdG9taXplIHRoZSBoZWFkZXJzIG9mIGVhY2ggaHR0cCByZXF1ZXN0IGJlZm9yZSBpdCBpcyBzZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZvbGxvd1JlZGlyZWN0cz1mYWxzZV0gV2hldGhlciBvciBub3QgdG8gZm9sbG93XG4gKiAgICAgcmVkaXJlY3RzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5nZW5lcmF0ZU1hc2tdIFRoZSBmdW5jdGlvbiB1c2VkIHRvIGdlbmVyYXRlIHRoZVxuICogICAgIG1hc2tpbmcga2V5XG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuaGFuZHNoYWtlVGltZW91dF0gVGltZW91dCBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZVxuICogICAgIGhhbmRzaGFrZSByZXF1ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMubWF4UGF5bG9hZD0xMDQ4NTc2MDBdIFRoZSBtYXhpbXVtIGFsbG93ZWQgbWVzc2FnZVxuICogICAgIHNpemVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhSZWRpcmVjdHM9MTBdIFRoZSBtYXhpbXVtIG51bWJlciBvZiByZWRpcmVjdHNcbiAqICAgICBhbGxvd2VkXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMub3JpZ2luXSBWYWx1ZSBvZiB0aGUgYE9yaWdpbmAgb3JcbiAqICAgICBgU2VjLVdlYlNvY2tldC1PcmlnaW5gIGhlYWRlclxuICogQHBhcmFtIHsoQm9vbGVhbnxPYmplY3QpfSBbb3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZT10cnVlXSBFbmFibGUvZGlzYWJsZVxuICogICAgIHBlcm1lc3NhZ2UtZGVmbGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnByb3RvY29sVmVyc2lvbj0xM10gVmFsdWUgb2YgdGhlXG4gKiAgICAgYFNlYy1XZWJTb2NrZXQtVmVyc2lvbmAgaGVhZGVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnNraXBVVEY4VmFsaWRhdGlvbj1mYWxzZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3JcbiAqICAgICBub3QgdG8gc2tpcCBVVEYtOCB2YWxpZGF0aW9uIGZvciB0ZXh0IGFuZCBjbG9zZSBtZXNzYWdlc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5pdEFzQ2xpZW50KHdlYnNvY2tldCwgYWRkcmVzcywgcHJvdG9jb2xzLCBvcHRpb25zKSB7XG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgYWxsb3dTeW5jaHJvbm91c0V2ZW50czogdHJ1ZSxcbiAgICBhdXRvUG9uZzogdHJ1ZSxcbiAgICBjbG9zZVRpbWVvdXQ6IENMT1NFX1RJTUVPVVQsXG4gICAgcHJvdG9jb2xWZXJzaW9uOiBwcm90b2NvbFZlcnNpb25zWzFdLFxuICAgIG1heFBheWxvYWQ6IDEwMCAqIDEwMjQgKiAxMDI0LFxuICAgIHNraXBVVEY4VmFsaWRhdGlvbjogZmFsc2UsXG4gICAgcGVyTWVzc2FnZURlZmxhdGU6IHRydWUsXG4gICAgZm9sbG93UmVkaXJlY3RzOiBmYWxzZSxcbiAgICBtYXhSZWRpcmVjdHM6IDEwLFxuICAgIC4uLm9wdGlvbnMsXG4gICAgc29ja2V0UGF0aDogdW5kZWZpbmVkLFxuICAgIGhvc3RuYW1lOiB1bmRlZmluZWQsXG4gICAgcHJvdG9jb2w6IHVuZGVmaW5lZCxcbiAgICB0aW1lb3V0OiB1bmRlZmluZWQsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBob3N0OiB1bmRlZmluZWQsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIHBvcnQ6IHVuZGVmaW5lZFxuICB9O1xuXG4gIHdlYnNvY2tldC5fYXV0b1BvbmcgPSBvcHRzLmF1dG9Qb25nO1xuICB3ZWJzb2NrZXQuX2Nsb3NlVGltZW91dCA9IG9wdHMuY2xvc2VUaW1lb3V0O1xuXG4gIGlmICghcHJvdG9jb2xWZXJzaW9ucy5pbmNsdWRlcyhvcHRzLnByb3RvY29sVmVyc2lvbikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgIGBVbnN1cHBvcnRlZCBwcm90b2NvbCB2ZXJzaW9uOiAke29wdHMucHJvdG9jb2xWZXJzaW9ufSBgICtcbiAgICAgICAgYChzdXBwb3J0ZWQgdmVyc2lvbnM6ICR7cHJvdG9jb2xWZXJzaW9ucy5qb2luKCcsICcpfSlgXG4gICAgKTtcbiAgfVxuXG4gIGxldCBwYXJzZWRVcmw7XG5cbiAgaWYgKGFkZHJlc3MgaW5zdGFuY2VvZiBVUkwpIHtcbiAgICBwYXJzZWRVcmwgPSBhZGRyZXNzO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBwYXJzZWRVcmwgPSBuZXcgVVJMKGFkZHJlc3MpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBJbnZhbGlkIFVSTDogJHthZGRyZXNzfWApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJzZWRVcmwucHJvdG9jb2wgPT09ICdodHRwOicpIHtcbiAgICBwYXJzZWRVcmwucHJvdG9jb2wgPSAnd3M6JztcbiAgfSBlbHNlIGlmIChwYXJzZWRVcmwucHJvdG9jb2wgPT09ICdodHRwczonKSB7XG4gICAgcGFyc2VkVXJsLnByb3RvY29sID0gJ3dzczonO1xuICB9XG5cbiAgd2Vic29ja2V0Ll91cmwgPSBwYXJzZWRVcmwuaHJlZjtcblxuICBjb25zdCBpc1NlY3VyZSA9IHBhcnNlZFVybC5wcm90b2NvbCA9PT0gJ3dzczonO1xuICBjb25zdCBpc0lwY1VybCA9IHBhcnNlZFVybC5wcm90b2NvbCA9PT0gJ3dzK3VuaXg6JztcbiAgbGV0IGludmFsaWRVcmxNZXNzYWdlO1xuXG4gIGlmIChwYXJzZWRVcmwucHJvdG9jb2wgIT09ICd3czonICYmICFpc1NlY3VyZSAmJiAhaXNJcGNVcmwpIHtcbiAgICBpbnZhbGlkVXJsTWVzc2FnZSA9XG4gICAgICAnVGhlIFVSTFxcJ3MgcHJvdG9jb2wgbXVzdCBiZSBvbmUgb2YgXCJ3czpcIiwgXCJ3c3M6XCIsICcgK1xuICAgICAgJ1wiaHR0cDpcIiwgXCJodHRwczpcIiwgb3IgXCJ3cyt1bml4OlwiJztcbiAgfSBlbHNlIGlmIChpc0lwY1VybCAmJiAhcGFyc2VkVXJsLnBhdGhuYW1lKSB7XG4gICAgaW52YWxpZFVybE1lc3NhZ2UgPSBcIlRoZSBVUkwncyBwYXRobmFtZSBpcyBlbXB0eVwiO1xuICB9IGVsc2UgaWYgKHBhcnNlZFVybC5oYXNoKSB7XG4gICAgaW52YWxpZFVybE1lc3NhZ2UgPSAnVGhlIFVSTCBjb250YWlucyBhIGZyYWdtZW50IGlkZW50aWZpZXInO1xuICB9XG5cbiAgaWYgKGludmFsaWRVcmxNZXNzYWdlKSB7XG4gICAgY29uc3QgZXJyID0gbmV3IFN5bnRheEVycm9yKGludmFsaWRVcmxNZXNzYWdlKTtcblxuICAgIGlmICh3ZWJzb2NrZXQuX3JlZGlyZWN0cyA9PT0gMCkge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0RXJyb3JBbmRDbG9zZSh3ZWJzb2NrZXQsIGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVmYXVsdFBvcnQgPSBpc1NlY3VyZSA/IDQ0MyA6IDgwO1xuICBjb25zdCBrZXkgPSByYW5kb21CeXRlcygxNikudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICBjb25zdCByZXF1ZXN0ID0gaXNTZWN1cmUgPyBodHRwcy5yZXF1ZXN0IDogaHR0cC5yZXF1ZXN0O1xuICBjb25zdCBwcm90b2NvbFNldCA9IG5ldyBTZXQoKTtcbiAgbGV0IHBlck1lc3NhZ2VEZWZsYXRlO1xuXG4gIG9wdHMuY3JlYXRlQ29ubmVjdGlvbiA9XG4gICAgb3B0cy5jcmVhdGVDb25uZWN0aW9uIHx8IChpc1NlY3VyZSA/IHRsc0Nvbm5lY3QgOiBuZXRDb25uZWN0KTtcbiAgb3B0cy5kZWZhdWx0UG9ydCA9IG9wdHMuZGVmYXVsdFBvcnQgfHwgZGVmYXVsdFBvcnQ7XG4gIG9wdHMucG9ydCA9IHBhcnNlZFVybC5wb3J0IHx8IGRlZmF1bHRQb3J0O1xuICBvcHRzLmhvc3QgPSBwYXJzZWRVcmwuaG9zdG5hbWUuc3RhcnRzV2l0aCgnWycpXG4gICAgPyBwYXJzZWRVcmwuaG9zdG5hbWUuc2xpY2UoMSwgLTEpXG4gICAgOiBwYXJzZWRVcmwuaG9zdG5hbWU7XG4gIG9wdHMuaGVhZGVycyA9IHtcbiAgICAuLi5vcHRzLmhlYWRlcnMsXG4gICAgJ1NlYy1XZWJTb2NrZXQtVmVyc2lvbic6IG9wdHMucHJvdG9jb2xWZXJzaW9uLFxuICAgICdTZWMtV2ViU29ja2V0LUtleSc6IGtleSxcbiAgICBDb25uZWN0aW9uOiAnVXBncmFkZScsXG4gICAgVXBncmFkZTogJ3dlYnNvY2tldCdcbiAgfTtcbiAgb3B0cy5wYXRoID0gcGFyc2VkVXJsLnBhdGhuYW1lICsgcGFyc2VkVXJsLnNlYXJjaDtcbiAgb3B0cy50aW1lb3V0ID0gb3B0cy5oYW5kc2hha2VUaW1lb3V0O1xuXG4gIGlmIChvcHRzLnBlck1lc3NhZ2VEZWZsYXRlKSB7XG4gICAgcGVyTWVzc2FnZURlZmxhdGUgPSBuZXcgUGVyTWVzc2FnZURlZmxhdGUoe1xuICAgICAgLi4ub3B0cy5wZXJNZXNzYWdlRGVmbGF0ZSxcbiAgICAgIGlzU2VydmVyOiBmYWxzZSxcbiAgICAgIG1heFBheWxvYWQ6IG9wdHMubWF4UGF5bG9hZFxuICAgIH0pO1xuICAgIG9wdHMuaGVhZGVyc1snU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zJ10gPSBmb3JtYXQoe1xuICAgICAgW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdOiBwZXJNZXNzYWdlRGVmbGF0ZS5vZmZlcigpXG4gICAgfSk7XG4gIH1cbiAgaWYgKHByb3RvY29scy5sZW5ndGgpIHtcbiAgICBmb3IgKGNvbnN0IHByb3RvY29sIG9mIHByb3RvY29scykge1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgcHJvdG9jb2wgIT09ICdzdHJpbmcnIHx8XG4gICAgICAgICFzdWJwcm90b2NvbFJlZ2V4LnRlc3QocHJvdG9jb2wpIHx8XG4gICAgICAgIHByb3RvY29sU2V0Lmhhcyhwcm90b2NvbClcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXG4gICAgICAgICAgJ0FuIGludmFsaWQgb3IgZHVwbGljYXRlZCBzdWJwcm90b2NvbCB3YXMgc3BlY2lmaWVkJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBwcm90b2NvbFNldC5hZGQocHJvdG9jb2wpO1xuICAgIH1cblxuICAgIG9wdHMuaGVhZGVyc1snU2VjLVdlYlNvY2tldC1Qcm90b2NvbCddID0gcHJvdG9jb2xzLmpvaW4oJywnKTtcbiAgfVxuICBpZiAob3B0cy5vcmlnaW4pIHtcbiAgICBpZiAob3B0cy5wcm90b2NvbFZlcnNpb24gPCAxMykge1xuICAgICAgb3B0cy5oZWFkZXJzWydTZWMtV2ViU29ja2V0LU9yaWdpbiddID0gb3B0cy5vcmlnaW47XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdHMuaGVhZGVycy5PcmlnaW4gPSBvcHRzLm9yaWdpbjtcbiAgICB9XG4gIH1cbiAgaWYgKHBhcnNlZFVybC51c2VybmFtZSB8fCBwYXJzZWRVcmwucGFzc3dvcmQpIHtcbiAgICBvcHRzLmF1dGggPSBgJHtwYXJzZWRVcmwudXNlcm5hbWV9OiR7cGFyc2VkVXJsLnBhc3N3b3JkfWA7XG4gIH1cblxuICBpZiAoaXNJcGNVcmwpIHtcbiAgICBjb25zdCBwYXJ0cyA9IG9wdHMucGF0aC5zcGxpdCgnOicpO1xuXG4gICAgb3B0cy5zb2NrZXRQYXRoID0gcGFydHNbMF07XG4gICAgb3B0cy5wYXRoID0gcGFydHNbMV07XG4gIH1cblxuICBsZXQgcmVxO1xuXG4gIGlmIChvcHRzLmZvbGxvd1JlZGlyZWN0cykge1xuICAgIGlmICh3ZWJzb2NrZXQuX3JlZGlyZWN0cyA9PT0gMCkge1xuICAgICAgd2Vic29ja2V0Ll9vcmlnaW5hbElwYyA9IGlzSXBjVXJsO1xuICAgICAgd2Vic29ja2V0Ll9vcmlnaW5hbFNlY3VyZSA9IGlzU2VjdXJlO1xuICAgICAgd2Vic29ja2V0Ll9vcmlnaW5hbEhvc3RPclNvY2tldFBhdGggPSBpc0lwY1VybFxuICAgICAgICA/IG9wdHMuc29ja2V0UGF0aFxuICAgICAgICA6IHBhcnNlZFVybC5ob3N0O1xuXG4gICAgICBjb25zdCBoZWFkZXJzID0gb3B0aW9ucyAmJiBvcHRpb25zLmhlYWRlcnM7XG5cbiAgICAgIC8vXG4gICAgICAvLyBTaGFsbG93IGNvcHkgdGhlIHVzZXIgcHJvdmlkZWQgb3B0aW9ucyBzbyB0aGF0IGhlYWRlcnMgY2FuIGJlIGNoYW5nZWRcbiAgICAgIC8vIHdpdGhvdXQgbXV0YXRpbmcgdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAgICAgIC8vXG4gICAgICBvcHRpb25zID0geyAuLi5vcHRpb25zLCBoZWFkZXJzOiB7fSB9O1xuXG4gICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhoZWFkZXJzKSkge1xuICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1trZXkudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAod2Vic29ja2V0Lmxpc3RlbmVyQ291bnQoJ3JlZGlyZWN0JykgPT09IDApIHtcbiAgICAgIGNvbnN0IGlzU2FtZUhvc3QgPSBpc0lwY1VybFxuICAgICAgICA/IHdlYnNvY2tldC5fb3JpZ2luYWxJcGNcbiAgICAgICAgICA/IG9wdHMuc29ja2V0UGF0aCA9PT0gd2Vic29ja2V0Ll9vcmlnaW5hbEhvc3RPclNvY2tldFBhdGhcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICAgIDogd2Vic29ja2V0Ll9vcmlnaW5hbElwY1xuICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICA6IHBhcnNlZFVybC5ob3N0ID09PSB3ZWJzb2NrZXQuX29yaWdpbmFsSG9zdE9yU29ja2V0UGF0aDtcblxuICAgICAgaWYgKCFpc1NhbWVIb3N0IHx8ICh3ZWJzb2NrZXQuX29yaWdpbmFsU2VjdXJlICYmICFpc1NlY3VyZSkpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gTWF0Y2ggY3VybCA3Ljc3LjAgYmVoYXZpb3IgYW5kIGRyb3AgdGhlIGZvbGxvd2luZyBoZWFkZXJzLiBUaGVzZVxuICAgICAgICAvLyBoZWFkZXJzIGFyZSBhbHNvIGRyb3BwZWQgd2hlbiBmb2xsb3dpbmcgYSByZWRpcmVjdCB0byBhIHN1YmRvbWFpbi5cbiAgICAgICAgLy9cbiAgICAgICAgZGVsZXRlIG9wdHMuaGVhZGVycy5hdXRob3JpemF0aW9uO1xuICAgICAgICBkZWxldGUgb3B0cy5oZWFkZXJzLmNvb2tpZTtcblxuICAgICAgICBpZiAoIWlzU2FtZUhvc3QpIGRlbGV0ZSBvcHRzLmhlYWRlcnMuaG9zdDtcblxuICAgICAgICBvcHRzLmF1dGggPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBNYXRjaCBjdXJsIDcuNzcuMCBiZWhhdmlvciBhbmQgbWFrZSB0aGUgZmlyc3QgYEF1dGhvcml6YXRpb25gIGhlYWRlciB3aW4uXG4gICAgLy8gSWYgdGhlIGBBdXRob3JpemF0aW9uYCBoZWFkZXIgaXMgc2V0LCB0aGVuIHRoZXJlIGlzIG5vdGhpbmcgdG8gZG8gYXMgaXRcbiAgICAvLyB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAgICAvL1xuICAgIGlmIChvcHRzLmF1dGggJiYgIW9wdGlvbnMuaGVhZGVycy5hdXRob3JpemF0aW9uKSB7XG4gICAgICBvcHRpb25zLmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9XG4gICAgICAgICdCYXNpYyAnICsgQnVmZmVyLmZyb20ob3B0cy5hdXRoKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgfVxuXG4gICAgcmVxID0gd2Vic29ja2V0Ll9yZXEgPSByZXF1ZXN0KG9wdHMpO1xuXG4gICAgaWYgKHdlYnNvY2tldC5fcmVkaXJlY3RzKSB7XG4gICAgICAvL1xuICAgICAgLy8gVW5saWtlIHdoYXQgaXMgZG9uZSBmb3IgdGhlIGAndXBncmFkZSdgIGV2ZW50LCBubyBlYXJseSBleGl0IGlzXG4gICAgICAvLyB0cmlnZ2VyZWQgaGVyZSBpZiB0aGUgdXNlciBjYWxscyBgd2Vic29ja2V0LmNsb3NlKClgIG9yXG4gICAgICAvLyBgd2Vic29ja2V0LnRlcm1pbmF0ZSgpYCBmcm9tIGEgbGlzdGVuZXIgb2YgdGhlIGAncmVkaXJlY3QnYCBldmVudC4gVGhpc1xuICAgICAgLy8gaXMgYmVjYXVzZSB0aGUgdXNlciBjYW4gYWxzbyBjYWxsIGByZXF1ZXN0LmRlc3Ryb3koKWAgd2l0aCBhbiBlcnJvclxuICAgICAgLy8gYmVmb3JlIGNhbGxpbmcgYHdlYnNvY2tldC5jbG9zZSgpYCBvciBgd2Vic29ja2V0LnRlcm1pbmF0ZSgpYCBhbmQgdGhpc1xuICAgICAgLy8gd291bGQgcmVzdWx0IGluIGFuIGVycm9yIGJlaW5nIGVtaXR0ZWQgb24gdGhlIGByZXF1ZXN0YCBvYmplY3Qgd2l0aCBub1xuICAgICAgLy8gYCdlcnJvcidgIGV2ZW50IGxpc3RlbmVycyBhdHRhY2hlZC5cbiAgICAgIC8vXG4gICAgICB3ZWJzb2NrZXQuZW1pdCgncmVkaXJlY3QnLCB3ZWJzb2NrZXQudXJsLCByZXEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXEgPSB3ZWJzb2NrZXQuX3JlcSA9IHJlcXVlc3Qob3B0cyk7XG4gIH1cblxuICBpZiAob3B0cy50aW1lb3V0KSB7XG4gICAgcmVxLm9uKCd0aW1lb3V0JywgKCkgPT4ge1xuICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCByZXEsICdPcGVuaW5nIGhhbmRzaGFrZSBoYXMgdGltZWQgb3V0Jyk7XG4gICAgfSk7XG4gIH1cblxuICByZXEub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICAgIGlmIChyZXEgPT09IG51bGwgfHwgcmVxW2tBYm9ydGVkXSkgcmV0dXJuO1xuXG4gICAgcmVxID0gd2Vic29ja2V0Ll9yZXEgPSBudWxsO1xuICAgIGVtaXRFcnJvckFuZENsb3NlKHdlYnNvY2tldCwgZXJyKTtcbiAgfSk7XG5cbiAgcmVxLm9uKCdyZXNwb25zZScsIChyZXMpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHJlcy5oZWFkZXJzLmxvY2F0aW9uO1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZTtcblxuICAgIGlmIChcbiAgICAgIGxvY2F0aW9uICYmXG4gICAgICBvcHRzLmZvbGxvd1JlZGlyZWN0cyAmJlxuICAgICAgc3RhdHVzQ29kZSA+PSAzMDAgJiZcbiAgICAgIHN0YXR1c0NvZGUgPCA0MDBcbiAgICApIHtcbiAgICAgIGlmICgrK3dlYnNvY2tldC5fcmVkaXJlY3RzID4gb3B0cy5tYXhSZWRpcmVjdHMpIHtcbiAgICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCByZXEsICdNYXhpbXVtIHJlZGlyZWN0cyBleGNlZWRlZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlcS5hYm9ydCgpO1xuXG4gICAgICBsZXQgYWRkcjtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYWRkciA9IG5ldyBVUkwobG9jYXRpb24sIGFkZHJlc3MpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgU3ludGF4RXJyb3IoYEludmFsaWQgVVJMOiAke2xvY2F0aW9ufWApO1xuICAgICAgICBlbWl0RXJyb3JBbmRDbG9zZSh3ZWJzb2NrZXQsIGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaW5pdEFzQ2xpZW50KHdlYnNvY2tldCwgYWRkciwgcHJvdG9jb2xzLCBvcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKCF3ZWJzb2NrZXQuZW1pdCgndW5leHBlY3RlZC1yZXNwb25zZScsIHJlcSwgcmVzKSkge1xuICAgICAgYWJvcnRIYW5kc2hha2UoXG4gICAgICAgIHdlYnNvY2tldCxcbiAgICAgICAgcmVxLFxuICAgICAgICBgVW5leHBlY3RlZCBzZXJ2ZXIgcmVzcG9uc2U6ICR7cmVzLnN0YXR1c0NvZGV9YFxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJlcS5vbigndXBncmFkZScsIChyZXMsIHNvY2tldCwgaGVhZCkgPT4ge1xuICAgIHdlYnNvY2tldC5lbWl0KCd1cGdyYWRlJywgcmVzKTtcblxuICAgIC8vXG4gICAgLy8gVGhlIHVzZXIgbWF5IGhhdmUgY2xvc2VkIHRoZSBjb25uZWN0aW9uIGZyb20gYSBsaXN0ZW5lciBvZiB0aGVcbiAgICAvLyBgJ3VwZ3JhZGUnYCBldmVudC5cbiAgICAvL1xuICAgIGlmICh3ZWJzb2NrZXQucmVhZHlTdGF0ZSAhPT0gV2ViU29ja2V0LkNPTk5FQ1RJTkcpIHJldHVybjtcblxuICAgIHJlcSA9IHdlYnNvY2tldC5fcmVxID0gbnVsbDtcblxuICAgIGNvbnN0IHVwZ3JhZGUgPSByZXMuaGVhZGVycy51cGdyYWRlO1xuXG4gICAgaWYgKHVwZ3JhZGUgPT09IHVuZGVmaW5lZCB8fCB1cGdyYWRlLnRvTG93ZXJDYXNlKCkgIT09ICd3ZWJzb2NrZXQnKSB7XG4gICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHNvY2tldCwgJ0ludmFsaWQgVXBncmFkZSBoZWFkZXInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaWdlc3QgPSBjcmVhdGVIYXNoKCdzaGExJylcbiAgICAgIC51cGRhdGUoa2V5ICsgR1VJRClcbiAgICAgIC5kaWdlc3QoJ2Jhc2U2NCcpO1xuXG4gICAgaWYgKHJlcy5oZWFkZXJzWydzZWMtd2Vic29ja2V0LWFjY2VwdCddICE9PSBkaWdlc3QpIHtcbiAgICAgIGFib3J0SGFuZHNoYWtlKHdlYnNvY2tldCwgc29ja2V0LCAnSW52YWxpZCBTZWMtV2ViU29ja2V0LUFjY2VwdCBoZWFkZXInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZXJ2ZXJQcm90ID0gcmVzLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtcHJvdG9jb2wnXTtcbiAgICBsZXQgcHJvdEVycm9yO1xuXG4gICAgaWYgKHNlcnZlclByb3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCFwcm90b2NvbFNldC5zaXplKSB7XG4gICAgICAgIHByb3RFcnJvciA9ICdTZXJ2ZXIgc2VudCBhIHN1YnByb3RvY29sIGJ1dCBub25lIHdhcyByZXF1ZXN0ZWQnO1xuICAgICAgfSBlbHNlIGlmICghcHJvdG9jb2xTZXQuaGFzKHNlcnZlclByb3QpKSB7XG4gICAgICAgIHByb3RFcnJvciA9ICdTZXJ2ZXIgc2VudCBhbiBpbnZhbGlkIHN1YnByb3RvY29sJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHByb3RvY29sU2V0LnNpemUpIHtcbiAgICAgIHByb3RFcnJvciA9ICdTZXJ2ZXIgc2VudCBubyBzdWJwcm90b2NvbCc7XG4gICAgfVxuXG4gICAgaWYgKHByb3RFcnJvcikge1xuICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCBzb2NrZXQsIHByb3RFcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlcnZlclByb3QpIHdlYnNvY2tldC5fcHJvdG9jb2wgPSBzZXJ2ZXJQcm90O1xuXG4gICAgY29uc3Qgc2VjV2ViU29ja2V0RXh0ZW5zaW9ucyA9IHJlcy5oZWFkZXJzWydzZWMtd2Vic29ja2V0LWV4dGVuc2lvbnMnXTtcblxuICAgIGlmIChzZWNXZWJTb2NrZXRFeHRlbnNpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICghcGVyTWVzc2FnZURlZmxhdGUpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAgICAgJ1NlcnZlciBzZW50IGEgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zIGhlYWRlciBidXQgbm8gZXh0ZW5zaW9uICcgK1xuICAgICAgICAgICd3YXMgcmVxdWVzdGVkJztcbiAgICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCBzb2NrZXQsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBleHRlbnNpb25zO1xuXG4gICAgICB0cnkge1xuICAgICAgICBleHRlbnNpb25zID0gcGFyc2Uoc2VjV2ViU29ja2V0RXh0ZW5zaW9ucyk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdJbnZhbGlkIFNlYy1XZWJTb2NrZXQtRXh0ZW5zaW9ucyBoZWFkZXInO1xuICAgICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHNvY2tldCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXh0ZW5zaW9uTmFtZXMgPSBPYmplY3Qua2V5cyhleHRlbnNpb25zKTtcblxuICAgICAgaWYgKFxuICAgICAgICBleHRlbnNpb25OYW1lcy5sZW5ndGggIT09IDEgfHxcbiAgICAgICAgZXh0ZW5zaW9uTmFtZXNbMF0gIT09IFBlck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVcbiAgICAgICkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ1NlcnZlciBpbmRpY2F0ZWQgYW4gZXh0ZW5zaW9uIHRoYXQgd2FzIG5vdCByZXF1ZXN0ZWQnO1xuICAgICAgICBhYm9ydEhhbmRzaGFrZSh3ZWJzb2NrZXQsIHNvY2tldCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcGVyTWVzc2FnZURlZmxhdGUuYWNjZXB0KGV4dGVuc2lvbnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnSW52YWxpZCBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnMgaGVhZGVyJztcbiAgICAgICAgYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCBzb2NrZXQsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdlYnNvY2tldC5fZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSA9XG4gICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlO1xuICAgIH1cblxuICAgIHdlYnNvY2tldC5zZXRTb2NrZXQoc29ja2V0LCBoZWFkLCB7XG4gICAgICBhbGxvd1N5bmNocm9ub3VzRXZlbnRzOiBvcHRzLmFsbG93U3luY2hyb25vdXNFdmVudHMsXG4gICAgICBnZW5lcmF0ZU1hc2s6IG9wdHMuZ2VuZXJhdGVNYXNrLFxuICAgICAgbWF4UGF5bG9hZDogb3B0cy5tYXhQYXlsb2FkLFxuICAgICAgc2tpcFVURjhWYWxpZGF0aW9uOiBvcHRzLnNraXBVVEY4VmFsaWRhdGlvblxuICAgIH0pO1xuICB9KTtcblxuICBpZiAob3B0cy5maW5pc2hSZXF1ZXN0KSB7XG4gICAgb3B0cy5maW5pc2hSZXF1ZXN0KHJlcSwgd2Vic29ja2V0KTtcbiAgfSBlbHNlIHtcbiAgICByZXEuZW5kKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBFbWl0IHRoZSBgJ2Vycm9yJ2AgYW5kIGAnY2xvc2UnYCBldmVudHMuXG4gKlxuICogQHBhcmFtIHtXZWJTb2NrZXR9IHdlYnNvY2tldCBUaGUgV2ViU29ja2V0IGluc3RhbmNlXG4gKiBAcGFyYW0ge0Vycm9yfSBUaGUgZXJyb3IgdG8gZW1pdFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZW1pdEVycm9yQW5kQ2xvc2Uod2Vic29ja2V0LCBlcnIpIHtcbiAgd2Vic29ja2V0Ll9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gIC8vXG4gIC8vIFRoZSBmb2xsb3dpbmcgYXNzaWdubWVudCBpcyBwcmFjdGljYWxseSB1c2VsZXNzIGFuZCBpcyBkb25lIG9ubHkgZm9yXG4gIC8vIGNvbnNpc3RlbmN5LlxuICAvL1xuICB3ZWJzb2NrZXQuX2Vycm9yRW1pdHRlZCA9IHRydWU7XG4gIHdlYnNvY2tldC5lbWl0KCdlcnJvcicsIGVycik7XG4gIHdlYnNvY2tldC5lbWl0Q2xvc2UoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBgbmV0LlNvY2tldGAgYW5kIGluaXRpYXRlIGEgY29ubmVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBDb25uZWN0aW9uIG9wdGlvbnNcbiAqIEByZXR1cm4ge25ldC5Tb2NrZXR9IFRoZSBuZXdseSBjcmVhdGVkIHNvY2tldCB1c2VkIHRvIHN0YXJ0IHRoZSBjb25uZWN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBuZXRDb25uZWN0KG9wdGlvbnMpIHtcbiAgb3B0aW9ucy5wYXRoID0gb3B0aW9ucy5zb2NrZXRQYXRoO1xuICByZXR1cm4gbmV0LmNvbm5lY3Qob3B0aW9ucyk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYHRscy5UTFNTb2NrZXRgIGFuZCBpbml0aWF0ZSBhIGNvbm5lY3Rpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQ29ubmVjdGlvbiBvcHRpb25zXG4gKiBAcmV0dXJuIHt0bHMuVExTU29ja2V0fSBUaGUgbmV3bHkgY3JlYXRlZCBzb2NrZXQgdXNlZCB0byBzdGFydCB0aGUgY29ubmVjdGlvblxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gdGxzQ29ubmVjdChvcHRpb25zKSB7XG4gIG9wdGlvbnMucGF0aCA9IHVuZGVmaW5lZDtcblxuICBpZiAoIW9wdGlvbnMuc2VydmVybmFtZSAmJiBvcHRpb25zLnNlcnZlcm5hbWUgIT09ICcnKSB7XG4gICAgb3B0aW9ucy5zZXJ2ZXJuYW1lID0gbmV0LmlzSVAob3B0aW9ucy5ob3N0KSA/ICcnIDogb3B0aW9ucy5ob3N0O1xuICB9XG5cbiAgcmV0dXJuIHRscy5jb25uZWN0KG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIEFib3J0IHRoZSBoYW5kc2hha2UgYW5kIGVtaXQgYW4gZXJyb3IuXG4gKlxuICogQHBhcmFtIHtXZWJTb2NrZXR9IHdlYnNvY2tldCBUaGUgV2ViU29ja2V0IGluc3RhbmNlXG4gKiBAcGFyYW0geyhodHRwLkNsaWVudFJlcXVlc3R8bmV0LlNvY2tldHx0bHMuU29ja2V0KX0gc3RyZWFtIFRoZSByZXF1ZXN0IHRvXG4gKiAgICAgYWJvcnQgb3IgdGhlIHNvY2tldCB0byBkZXN0cm95XG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWJvcnRIYW5kc2hha2Uod2Vic29ja2V0LCBzdHJlYW0sIG1lc3NhZ2UpIHtcbiAgd2Vic29ja2V0Ll9yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG5cbiAgY29uc3QgZXJyID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShlcnIsIGFib3J0SGFuZHNoYWtlKTtcblxuICBpZiAoc3RyZWFtLnNldEhlYWRlcikge1xuICAgIHN0cmVhbVtrQWJvcnRlZF0gPSB0cnVlO1xuICAgIHN0cmVhbS5hYm9ydCgpO1xuXG4gICAgaWYgKHN0cmVhbS5zb2NrZXQgJiYgIXN0cmVhbS5zb2NrZXQuZGVzdHJveWVkKSB7XG4gICAgICAvL1xuICAgICAgLy8gT24gTm9kZS5qcyA+PSAxNC4zLjAgYHJlcXVlc3QuYWJvcnQoKWAgZG9lcyBub3QgZGVzdHJveSB0aGUgc29ja2V0IGlmXG4gICAgICAvLyBjYWxsZWQgYWZ0ZXIgdGhlIHJlcXVlc3QgY29tcGxldGVkLiBTZWVcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJzb2NrZXRzL3dzL2lzc3Vlcy8xODY5LlxuICAgICAgLy9cbiAgICAgIHN0cmVhbS5zb2NrZXQuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdEVycm9yQW5kQ2xvc2UsIHdlYnNvY2tldCwgZXJyKTtcbiAgfSBlbHNlIHtcbiAgICBzdHJlYW0uZGVzdHJveShlcnIpO1xuICAgIHN0cmVhbS5vbmNlKCdlcnJvcicsIHdlYnNvY2tldC5lbWl0LmJpbmQod2Vic29ja2V0LCAnZXJyb3InKSk7XG4gICAgc3RyZWFtLm9uY2UoJ2Nsb3NlJywgd2Vic29ja2V0LmVtaXRDbG9zZS5iaW5kKHdlYnNvY2tldCkpO1xuICB9XG59XG5cbi8qKlxuICogSGFuZGxlIGNhc2VzIHdoZXJlIHRoZSBgcGluZygpYCwgYHBvbmcoKWAsIG9yIGBzZW5kKClgIG1ldGhvZHMgYXJlIGNhbGxlZFxuICogd2hlbiB0aGUgYHJlYWR5U3RhdGVgIGF0dHJpYnV0ZSBpcyBgQ0xPU0lOR2Agb3IgYENMT1NFRGAuXG4gKlxuICogQHBhcmFtIHtXZWJTb2NrZXR9IHdlYnNvY2tldCBUaGUgV2ViU29ja2V0IGluc3RhbmNlXG4gKiBAcGFyYW0geyp9IFtkYXRhXSBUaGUgZGF0YSB0byBzZW5kXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdIENhbGxiYWNrXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZW5kQWZ0ZXJDbG9zZSh3ZWJzb2NrZXQsIGRhdGEsIGNiKSB7XG4gIGlmIChkYXRhKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gaXNCbG9iKGRhdGEpID8gZGF0YS5zaXplIDogdG9CdWZmZXIoZGF0YSkubGVuZ3RoO1xuXG4gICAgLy9cbiAgICAvLyBUaGUgYF9idWZmZXJlZEFtb3VudGAgcHJvcGVydHkgaXMgdXNlZCBvbmx5IHdoZW4gdGhlIHBlZXIgaXMgYSBjbGllbnQgYW5kXG4gICAgLy8gdGhlIG9wZW5pbmcgaGFuZHNoYWtlIGZhaWxzLiBVbmRlciB0aGVzZSBjaXJjdW1zdGFuY2VzLCBpbiBmYWN0LCB0aGVcbiAgICAvLyBgc2V0U29ja2V0KClgIG1ldGhvZCBpcyBub3QgY2FsbGVkLCBzbyB0aGUgYF9zb2NrZXRgIGFuZCBgX3NlbmRlcmBcbiAgICAvLyBwcm9wZXJ0aWVzIGFyZSBzZXQgdG8gYG51bGxgLlxuICAgIC8vXG4gICAgaWYgKHdlYnNvY2tldC5fc29ja2V0KSB3ZWJzb2NrZXQuX3NlbmRlci5fYnVmZmVyZWRCeXRlcyArPSBsZW5ndGg7XG4gICAgZWxzZSB3ZWJzb2NrZXQuX2J1ZmZlcmVkQW1vdW50ICs9IGxlbmd0aDtcbiAgfVxuXG4gIGlmIChjYikge1xuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcbiAgICAgIGBXZWJTb2NrZXQgaXMgbm90IG9wZW46IHJlYWR5U3RhdGUgJHt3ZWJzb2NrZXQucmVhZHlTdGF0ZX0gYCArXG4gICAgICAgIGAoJHtyZWFkeVN0YXRlc1t3ZWJzb2NrZXQucmVhZHlTdGF0ZV19KWBcbiAgICApO1xuICAgIHByb2Nlc3MubmV4dFRpY2soY2IsIGVycik7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGBSZWNlaXZlcmAgYCdjb25jbHVkZSdgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlIFRoZSBzdGF0dXMgY29kZVxuICogQHBhcmFtIHtCdWZmZXJ9IHJlYXNvbiBUaGUgcmVhc29uIGZvciBjbG9zaW5nXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZWNlaXZlck9uQ29uY2x1ZGUoY29kZSwgcmVhc29uKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgd2Vic29ja2V0Ll9jbG9zZUZyYW1lUmVjZWl2ZWQgPSB0cnVlO1xuICB3ZWJzb2NrZXQuX2Nsb3NlTWVzc2FnZSA9IHJlYXNvbjtcbiAgd2Vic29ja2V0Ll9jbG9zZUNvZGUgPSBjb2RlO1xuXG4gIGlmICh3ZWJzb2NrZXQuX3NvY2tldFtrV2ViU29ja2V0XSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgd2Vic29ja2V0Ll9zb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCBzb2NrZXRPbkRhdGEpO1xuICBwcm9jZXNzLm5leHRUaWNrKHJlc3VtZSwgd2Vic29ja2V0Ll9zb2NrZXQpO1xuXG4gIGlmIChjb2RlID09PSAxMDA1KSB3ZWJzb2NrZXQuY2xvc2UoKTtcbiAgZWxzZSB3ZWJzb2NrZXQuY2xvc2UoY29kZSwgcmVhc29uKTtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGBSZWNlaXZlcmAgYCdkcmFpbidgIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlY2VpdmVyT25EcmFpbigpIHtcbiAgY29uc3Qgd2Vic29ja2V0ID0gdGhpc1trV2ViU29ja2V0XTtcblxuICBpZiAoIXdlYnNvY2tldC5pc1BhdXNlZCkgd2Vic29ja2V0Ll9zb2NrZXQucmVzdW1lKCk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgUmVjZWl2ZXJgIGAnZXJyb3InYCBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhSYW5nZUVycm9yfEVycm9yKX0gZXJyIFRoZSBlbWl0dGVkIGVycm9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZWNlaXZlck9uRXJyb3IoZXJyKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgaWYgKHdlYnNvY2tldC5fc29ja2V0W2tXZWJTb2NrZXRdICE9PSB1bmRlZmluZWQpIHtcbiAgICB3ZWJzb2NrZXQuX3NvY2tldC5yZW1vdmVMaXN0ZW5lcignZGF0YScsIHNvY2tldE9uRGF0YSk7XG5cbiAgICAvL1xuICAgIC8vIE9uIE5vZGUuanMgPCAxNC4wLjAgdGhlIGAnZXJyb3InYCBldmVudCBpcyBlbWl0dGVkIHN5bmNocm9ub3VzbHkuIFNlZVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJzb2NrZXRzL3dzL2lzc3Vlcy8xOTQwLlxuICAgIC8vXG4gICAgcHJvY2Vzcy5uZXh0VGljayhyZXN1bWUsIHdlYnNvY2tldC5fc29ja2V0KTtcblxuICAgIHdlYnNvY2tldC5jbG9zZShlcnJba1N0YXR1c0NvZGVdKTtcbiAgfVxuXG4gIGlmICghd2Vic29ja2V0Ll9lcnJvckVtaXR0ZWQpIHtcbiAgICB3ZWJzb2NrZXQuX2Vycm9yRW1pdHRlZCA9IHRydWU7XG4gICAgd2Vic29ja2V0LmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgYFJlY2VpdmVyYCBgJ2ZpbmlzaCdgIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlY2VpdmVyT25GaW5pc2goKSB7XG4gIHRoaXNba1dlYlNvY2tldF0uZW1pdENsb3NlKCk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgUmVjZWl2ZXJgIGAnbWVzc2FnZSdgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfEFycmF5QnVmZmVyfEJ1ZmZlcltdKX0gZGF0YSBUaGUgbWVzc2FnZVxuICogQHBhcmFtIHtCb29sZWFufSBpc0JpbmFyeSBTcGVjaWZpZXMgd2hldGhlciB0aGUgbWVzc2FnZSBpcyBiaW5hcnkgb3Igbm90XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZWNlaXZlck9uTWVzc2FnZShkYXRhLCBpc0JpbmFyeSkge1xuICB0aGlzW2tXZWJTb2NrZXRdLmVtaXQoJ21lc3NhZ2UnLCBkYXRhLCBpc0JpbmFyeSk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgUmVjZWl2ZXJgIGAncGluZydgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIFRoZSBkYXRhIGluY2x1ZGVkIGluIHRoZSBwaW5nIGZyYW1lXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZWNlaXZlck9uUGluZyhkYXRhKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgaWYgKHdlYnNvY2tldC5fYXV0b1BvbmcpIHdlYnNvY2tldC5wb25nKGRhdGEsICF0aGlzLl9pc1NlcnZlciwgTk9PUCk7XG4gIHdlYnNvY2tldC5lbWl0KCdwaW5nJywgZGF0YSk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBgUmVjZWl2ZXJgIGAncG9uZydgIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIFRoZSBkYXRhIGluY2x1ZGVkIGluIHRoZSBwb25nIGZyYW1lXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZWNlaXZlck9uUG9uZyhkYXRhKSB7XG4gIHRoaXNba1dlYlNvY2tldF0uZW1pdCgncG9uZycsIGRhdGEpO1xufVxuXG4vKipcbiAqIFJlc3VtZSBhIHJlYWRhYmxlIHN0cmVhbVxuICpcbiAqIEBwYXJhbSB7UmVhZGFibGV9IHN0cmVhbSBUaGUgcmVhZGFibGUgc3RyZWFtXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZXN1bWUoc3RyZWFtKSB7XG4gIHN0cmVhbS5yZXN1bWUoKTtcbn1cblxuLyoqXG4gKiBUaGUgYFNlbmRlcmAgZXJyb3IgZXZlbnQgaGFuZGxlci5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBUaGUgZXJyb3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNlbmRlck9uRXJyb3IoZXJyKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgaWYgKHdlYnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0VEKSByZXR1cm47XG4gIGlmICh3ZWJzb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICB3ZWJzb2NrZXQuX3JlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ0xPU0lORztcbiAgICBzZXRDbG9zZVRpbWVyKHdlYnNvY2tldCk7XG4gIH1cblxuICAvL1xuICAvLyBgc29ja2V0LmVuZCgpYCBpcyB1c2VkIGluc3RlYWQgb2YgYHNvY2tldC5kZXN0cm95KClgIHRvIGFsbG93IHRoZSBvdGhlclxuICAvLyBwZWVyIHRvIGZpbmlzaCBzZW5kaW5nIHF1ZXVlZCBkYXRhLiBUaGVyZSBpcyBubyBuZWVkIHRvIHNldCBhIHRpbWVyIGhlcmVcbiAgLy8gYmVjYXVzZSBgQ0xPU0lOR2AgbWVhbnMgdGhhdCBpdCBpcyBhbHJlYWR5IHNldCBvciBub3QgbmVlZGVkLlxuICAvL1xuICB0aGlzLl9zb2NrZXQuZW5kKCk7XG5cbiAgaWYgKCF3ZWJzb2NrZXQuX2Vycm9yRW1pdHRlZCkge1xuICAgIHdlYnNvY2tldC5fZXJyb3JFbWl0dGVkID0gdHJ1ZTtcbiAgICB3ZWJzb2NrZXQuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB9XG59XG5cbi8qKlxuICogU2V0IGEgdGltZXIgdG8gZGVzdHJveSB0aGUgdW5kZXJseWluZyByYXcgc29ja2V0IG9mIGEgV2ViU29ja2V0LlxuICpcbiAqIEBwYXJhbSB7V2ViU29ja2V0fSB3ZWJzb2NrZXQgVGhlIFdlYlNvY2tldCBpbnN0YW5jZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2V0Q2xvc2VUaW1lcih3ZWJzb2NrZXQpIHtcbiAgd2Vic29ja2V0Ll9jbG9zZVRpbWVyID0gc2V0VGltZW91dChcbiAgICB3ZWJzb2NrZXQuX3NvY2tldC5kZXN0cm95LmJpbmQod2Vic29ja2V0Ll9zb2NrZXQpLFxuICAgIHdlYnNvY2tldC5fY2xvc2VUaW1lb3V0XG4gICk7XG59XG5cbi8qKlxuICogVGhlIGxpc3RlbmVyIG9mIHRoZSBzb2NrZXQgYCdjbG9zZSdgIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNvY2tldE9uQ2xvc2UoKSB7XG4gIGNvbnN0IHdlYnNvY2tldCA9IHRoaXNba1dlYlNvY2tldF07XG5cbiAgdGhpcy5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBzb2NrZXRPbkNsb3NlKTtcbiAgdGhpcy5yZW1vdmVMaXN0ZW5lcignZGF0YScsIHNvY2tldE9uRGF0YSk7XG4gIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIHNvY2tldE9uRW5kKTtcblxuICB3ZWJzb2NrZXQuX3JlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ0xPU0lORztcblxuICAvL1xuICAvLyBUaGUgY2xvc2UgZnJhbWUgbWlnaHQgbm90IGhhdmUgYmVlbiByZWNlaXZlZCBvciB0aGUgYCdlbmQnYCBldmVudCBlbWl0dGVkLFxuICAvLyBmb3IgZXhhbXBsZSwgaWYgdGhlIHNvY2tldCB3YXMgZGVzdHJveWVkIGR1ZSB0byBhbiBlcnJvci4gRW5zdXJlIHRoYXQgdGhlXG4gIC8vIGByZWNlaXZlcmAgc3RyZWFtIGlzIGNsb3NlZCBhZnRlciB3cml0aW5nIGFueSByZW1haW5pbmcgYnVmZmVyZWQgZGF0YSB0b1xuICAvLyBpdC4gSWYgdGhlIHJlYWRhYmxlIHNpZGUgb2YgdGhlIHNvY2tldCBpcyBpbiBmbG93aW5nIG1vZGUgdGhlbiB0aGVyZSBpcyBub1xuICAvLyBidWZmZXJlZCBkYXRhIGFzIGV2ZXJ5dGhpbmcgaGFzIGJlZW4gYWxyZWFkeSB3cml0dGVuLiBJZiBpbnN0ZWFkLCB0aGVcbiAgLy8gc29ja2V0IGlzIHBhdXNlZCwgYW55IHBvc3NpYmxlIGJ1ZmZlcmVkIGRhdGEgd2lsbCBiZSByZWFkIGFzIGEgc2luZ2xlXG4gIC8vIGNodW5rLlxuICAvL1xuICBpZiAoXG4gICAgIXRoaXMuX3JlYWRhYmxlU3RhdGUuZW5kRW1pdHRlZCAmJlxuICAgICF3ZWJzb2NrZXQuX2Nsb3NlRnJhbWVSZWNlaXZlZCAmJlxuICAgICF3ZWJzb2NrZXQuX3JlY2VpdmVyLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCAmJlxuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUubGVuZ3RoICE9PSAwXG4gICkge1xuICAgIGNvbnN0IGNodW5rID0gdGhpcy5yZWFkKHRoaXMuX3JlYWRhYmxlU3RhdGUubGVuZ3RoKTtcblxuICAgIHdlYnNvY2tldC5fcmVjZWl2ZXIud3JpdGUoY2h1bmspO1xuICB9XG5cbiAgd2Vic29ja2V0Ll9yZWNlaXZlci5lbmQoKTtcblxuICB0aGlzW2tXZWJTb2NrZXRdID0gdW5kZWZpbmVkO1xuXG4gIGNsZWFyVGltZW91dCh3ZWJzb2NrZXQuX2Nsb3NlVGltZXIpO1xuXG4gIGlmIChcbiAgICB3ZWJzb2NrZXQuX3JlY2VpdmVyLl93cml0YWJsZVN0YXRlLmZpbmlzaGVkIHx8XG4gICAgd2Vic29ja2V0Ll9yZWNlaXZlci5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWRcbiAgKSB7XG4gICAgd2Vic29ja2V0LmVtaXRDbG9zZSgpO1xuICB9IGVsc2Uge1xuICAgIHdlYnNvY2tldC5fcmVjZWl2ZXIub24oJ2Vycm9yJywgcmVjZWl2ZXJPbkZpbmlzaCk7XG4gICAgd2Vic29ja2V0Ll9yZWNlaXZlci5vbignZmluaXNoJywgcmVjZWl2ZXJPbkZpbmlzaCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIHNvY2tldCBgJ2RhdGEnYCBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gY2h1bmsgQSBjaHVuayBvZiBkYXRhXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzb2NrZXRPbkRhdGEoY2h1bmspIHtcbiAgaWYgKCF0aGlzW2tXZWJTb2NrZXRdLl9yZWNlaXZlci53cml0ZShjaHVuaykpIHtcbiAgICB0aGlzLnBhdXNlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIHNvY2tldCBgJ2VuZCdgIGV2ZW50LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNvY2tldE9uRW5kKCkge1xuICBjb25zdCB3ZWJzb2NrZXQgPSB0aGlzW2tXZWJTb2NrZXRdO1xuXG4gIHdlYnNvY2tldC5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TSU5HO1xuICB3ZWJzb2NrZXQuX3JlY2VpdmVyLmVuZCgpO1xuICB0aGlzLmVuZCgpO1xufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgc29ja2V0IGAnZXJyb3InYCBldmVudC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzb2NrZXRPbkVycm9yKCkge1xuICBjb25zdCB3ZWJzb2NrZXQgPSB0aGlzW2tXZWJTb2NrZXRdO1xuXG4gIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgc29ja2V0T25FcnJvcik7XG4gIHRoaXMub24oJ2Vycm9yJywgTk9PUCk7XG5cbiAgaWYgKHdlYnNvY2tldCkge1xuICAgIHdlYnNvY2tldC5fcmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DTE9TSU5HO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG4iLCAiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbXCJlcnJvclwiLCB7IFwidmFyc0lnbm9yZVBhdHRlcm5cIjogXCJeV2ViU29ja2V0JFwiIH1dICovXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IFdlYlNvY2tldCA9IHJlcXVpcmUoJy4vd2Vic29ja2V0Jyk7XG5jb25zdCB7IER1cGxleCB9ID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5cbi8qKlxuICogRW1pdHMgdGhlIGAnY2xvc2UnYCBldmVudCBvbiBhIHN0cmVhbS5cbiAqXG4gKiBAcGFyYW0ge0R1cGxleH0gc3RyZWFtIFRoZSBzdHJlYW0uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBlbWl0Q2xvc2Uoc3RyZWFtKSB7XG4gIHN0cmVhbS5lbWl0KCdjbG9zZScpO1xufVxuXG4vKipcbiAqIFRoZSBsaXN0ZW5lciBvZiB0aGUgYCdlbmQnYCBldmVudC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkdXBsZXhPbkVuZCgpIHtcbiAgaWYgKCF0aGlzLmRlc3Ryb3llZCAmJiB0aGlzLl93cml0YWJsZVN0YXRlLmZpbmlzaGVkKSB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgbGlzdGVuZXIgb2YgdGhlIGAnZXJyb3InYCBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIgVGhlIGVycm9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkdXBsZXhPbkVycm9yKGVycikge1xuICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGR1cGxleE9uRXJyb3IpO1xuICB0aGlzLmRlc3Ryb3koKTtcbiAgaWYgKHRoaXMubGlzdGVuZXJDb3VudCgnZXJyb3InKSA9PT0gMCkge1xuICAgIC8vIERvIG5vdCBzdXBwcmVzcyB0aGUgdGhyb3dpbmcgYmVoYXZpb3IuXG4gICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIH1cbn1cblxuLyoqXG4gKiBXcmFwcyBhIGBXZWJTb2NrZXRgIGluIGEgZHVwbGV4IHN0cmVhbS5cbiAqXG4gKiBAcGFyYW0ge1dlYlNvY2tldH0gd3MgVGhlIGBXZWJTb2NrZXRgIHRvIHdyYXBcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGhlIG9wdGlvbnMgZm9yIHRoZSBgRHVwbGV4YCBjb25zdHJ1Y3RvclxuICogQHJldHVybiB7RHVwbGV4fSBUaGUgZHVwbGV4IHN0cmVhbVxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBjcmVhdGVXZWJTb2NrZXRTdHJlYW0od3MsIG9wdGlvbnMpIHtcbiAgbGV0IHRlcm1pbmF0ZU9uRGVzdHJveSA9IHRydWU7XG5cbiAgY29uc3QgZHVwbGV4ID0gbmV3IER1cGxleCh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBhdXRvRGVzdHJveTogZmFsc2UsXG4gICAgZW1pdENsb3NlOiBmYWxzZSxcbiAgICBvYmplY3RNb2RlOiBmYWxzZSxcbiAgICB3cml0YWJsZU9iamVjdE1vZGU6IGZhbHNlXG4gIH0pO1xuXG4gIHdzLm9uKCdtZXNzYWdlJywgZnVuY3Rpb24gbWVzc2FnZShtc2csIGlzQmluYXJ5KSB7XG4gICAgY29uc3QgZGF0YSA9XG4gICAgICAhaXNCaW5hcnkgJiYgZHVwbGV4Ll9yZWFkYWJsZVN0YXRlLm9iamVjdE1vZGUgPyBtc2cudG9TdHJpbmcoKSA6IG1zZztcblxuICAgIGlmICghZHVwbGV4LnB1c2goZGF0YSkpIHdzLnBhdXNlKCk7XG4gIH0pO1xuXG4gIHdzLm9uY2UoJ2Vycm9yJywgZnVuY3Rpb24gZXJyb3IoZXJyKSB7XG4gICAgaWYgKGR1cGxleC5kZXN0cm95ZWQpIHJldHVybjtcblxuICAgIC8vIFByZXZlbnQgYHdzLnRlcm1pbmF0ZSgpYCBmcm9tIGJlaW5nIGNhbGxlZCBieSBgZHVwbGV4Ll9kZXN0cm95KClgLlxuICAgIC8vXG4gICAgLy8gLSBJZiB0aGUgYCdlcnJvcidgIGV2ZW50IGlzIGVtaXR0ZWQgYmVmb3JlIHRoZSBgJ29wZW4nYCBldmVudCwgdGhlblxuICAgIC8vICAgYHdzLnRlcm1pbmF0ZSgpYCBpcyBhIG5vb3AgYXMgbm8gc29ja2V0IGlzIGFzc2lnbmVkLlxuICAgIC8vIC0gT3RoZXJ3aXNlLCB0aGUgZXJyb3IgaXMgcmUtZW1pdHRlZCBieSB0aGUgbGlzdGVuZXIgb2YgdGhlIGAnZXJyb3InYFxuICAgIC8vICAgZXZlbnQgb2YgdGhlIGBSZWNlaXZlcmAgb2JqZWN0LiBUaGUgbGlzdGVuZXIgYWxyZWFkeSBjbG9zZXMgdGhlXG4gICAgLy8gICBjb25uZWN0aW9uIGJ5IGNhbGxpbmcgYHdzLmNsb3NlKClgLiBUaGlzIGFsbG93cyBhIGNsb3NlIGZyYW1lIHRvIGJlXG4gICAgLy8gICBzZW50IHRvIHRoZSBvdGhlciBwZWVyLiBJZiBgd3MudGVybWluYXRlKClgIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGlzLFxuICAgIC8vICAgdGhlbiB0aGUgY2xvc2UgZnJhbWUgbWlnaHQgbm90IGJlIHNlbnQuXG4gICAgdGVybWluYXRlT25EZXN0cm95ID0gZmFsc2U7XG4gICAgZHVwbGV4LmRlc3Ryb3koZXJyKTtcbiAgfSk7XG5cbiAgd3Mub25jZSgnY2xvc2UnLCBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAoZHVwbGV4LmRlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgZHVwbGV4LnB1c2gobnVsbCk7XG4gIH0pO1xuXG4gIGR1cGxleC5fZGVzdHJveSA9IGZ1bmN0aW9uIChlcnIsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHdzLnJlYWR5U3RhdGUgPT09IHdzLkNMT1NFRCkge1xuICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdENsb3NlLCBkdXBsZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjYWxsZWQgPSBmYWxzZTtcblxuICAgIHdzLm9uY2UoJ2Vycm9yJywgZnVuY3Rpb24gZXJyb3IoZXJyKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICB9KTtcblxuICAgIHdzLm9uY2UoJ2Nsb3NlJywgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICBpZiAoIWNhbGxlZCkgY2FsbGJhY2soZXJyKTtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdENsb3NlLCBkdXBsZXgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1pbmF0ZU9uRGVzdHJveSkgd3MudGVybWluYXRlKCk7XG4gIH07XG5cbiAgZHVwbGV4Ll9maW5hbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICh3cy5yZWFkeVN0YXRlID09PSB3cy5DT05ORUNUSU5HKSB7XG4gICAgICB3cy5vbmNlKCdvcGVuJywgZnVuY3Rpb24gb3BlbigpIHtcbiAgICAgICAgZHVwbGV4Ll9maW5hbChjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdmFsdWUgb2YgdGhlIGBfc29ja2V0YCBwcm9wZXJ0eSBpcyBgbnVsbGAgaXQgbWVhbnMgdGhhdCBgd3NgIGlzIGFcbiAgICAvLyBjbGllbnQgd2Vic29ja2V0IGFuZCB0aGUgaGFuZHNoYWtlIGZhaWxlZC4gSW4gZmFjdCwgd2hlbiB0aGlzIGhhcHBlbnMsIGFcbiAgICAvLyBzb2NrZXQgaXMgbmV2ZXIgYXNzaWduZWQgdG8gdGhlIHdlYnNvY2tldC4gV2FpdCBmb3IgdGhlIGAnZXJyb3InYCBldmVudFxuICAgIC8vIHRoYXQgd2lsbCBiZSBlbWl0dGVkIGJ5IHRoZSB3ZWJzb2NrZXQuXG4gICAgaWYgKHdzLl9zb2NrZXQgPT09IG51bGwpIHJldHVybjtcblxuICAgIGlmICh3cy5fc29ja2V0Ll93cml0YWJsZVN0YXRlLmZpbmlzaGVkKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgaWYgKGR1cGxleC5fcmVhZGFibGVTdGF0ZS5lbmRFbWl0dGVkKSBkdXBsZXguZGVzdHJveSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3cy5fc29ja2V0Lm9uY2UoJ2ZpbmlzaCcsIGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgICAgICAgLy8gYGR1cGxleGAgaXMgbm90IGRlc3Ryb3llZCBoZXJlIGJlY2F1c2UgdGhlIGAnZW5kJ2AgZXZlbnQgd2lsbCBiZVxuICAgICAgICAvLyBlbWl0dGVkIG9uIGBkdXBsZXhgIGFmdGVyIHRoaXMgYCdmaW5pc2gnYCBldmVudC4gVGhlIEVPRiBzaWduYWxpbmdcbiAgICAgICAgLy8gYG51bGxgIGNodW5rIGlzLCBpbiBmYWN0LCBwdXNoZWQgd2hlbiB0aGUgd2Vic29ja2V0IGVtaXRzIGAnY2xvc2UnYC5cbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0pO1xuICAgICAgd3MuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgZHVwbGV4Ll9yZWFkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh3cy5pc1BhdXNlZCkgd3MucmVzdW1lKCk7XG4gIH07XG5cbiAgZHVwbGV4Ll93cml0ZSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHdzLnJlYWR5U3RhdGUgPT09IHdzLkNPTk5FQ1RJTkcpIHtcbiAgICAgIHdzLm9uY2UoJ29wZW4nLCBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgICBkdXBsZXguX3dyaXRlKGNodW5rLCBlbmNvZGluZywgY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd3Muc2VuZChjaHVuaywgY2FsbGJhY2spO1xuICB9O1xuXG4gIGR1cGxleC5vbignZW5kJywgZHVwbGV4T25FbmQpO1xuICBkdXBsZXgub24oJ2Vycm9yJywgZHVwbGV4T25FcnJvcik7XG4gIHJldHVybiBkdXBsZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlV2ViU29ja2V0U3RyZWFtO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyB0b2tlbkNoYXJzIH0gPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcblxuLyoqXG4gKiBQYXJzZXMgdGhlIGBTZWMtV2ViU29ja2V0LVByb3RvY29sYCBoZWFkZXIgaW50byBhIHNldCBvZiBzdWJwcm90b2NvbCBuYW1lcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVyIFRoZSBmaWVsZCB2YWx1ZSBvZiB0aGUgaGVhZGVyXG4gKiBAcmV0dXJuIHtTZXR9IFRoZSBzdWJwcm90b2NvbCBuYW1lc1xuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBwYXJzZShoZWFkZXIpIHtcbiAgY29uc3QgcHJvdG9jb2xzID0gbmV3IFNldCgpO1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgbGV0IGVuZCA9IC0xO1xuICBsZXQgaSA9IDA7XG5cbiAgZm9yIChpOyBpIDwgaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY29kZSA9IGhlYWRlci5jaGFyQ29kZUF0KGkpO1xuXG4gICAgaWYgKGVuZCA9PT0gLTEgJiYgdG9rZW5DaGFyc1tjb2RlXSA9PT0gMSkge1xuICAgICAgaWYgKHN0YXJ0ID09PSAtMSkgc3RhcnQgPSBpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBpICE9PSAwICYmXG4gICAgICAoY29kZSA9PT0gMHgyMCAvKiAnICcgKi8gfHwgY29kZSA9PT0gMHgwOSkgLyogJ1xcdCcgKi9cbiAgICApIHtcbiAgICAgIGlmIChlbmQgPT09IC0xICYmIHN0YXJ0ICE9PSAtMSkgZW5kID0gaTtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4MmMgLyogJywnICovKSB7XG4gICAgICBpZiAoc3RhcnQgPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kID09PSAtMSkgZW5kID0gaTtcblxuICAgICAgY29uc3QgcHJvdG9jb2wgPSBoZWFkZXIuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgICAgIGlmIChwcm90b2NvbHMuaGFzKHByb3RvY29sKSkge1xuICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFRoZSBcIiR7cHJvdG9jb2x9XCIgc3VicHJvdG9jb2wgaXMgZHVwbGljYXRlZGApO1xuICAgICAgfVxuXG4gICAgICBwcm90b2NvbHMuYWRkKHByb3RvY29sKTtcbiAgICAgIHN0YXJ0ID0gZW5kID0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gLTEgfHwgZW5kICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgaW5wdXQnKTtcbiAgfVxuXG4gIGNvbnN0IHByb3RvY29sID0gaGVhZGVyLnNsaWNlKHN0YXJ0LCBpKTtcblxuICBpZiAocHJvdG9jb2xzLmhhcyhwcm90b2NvbCkpIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFRoZSBcIiR7cHJvdG9jb2x9XCIgc3VicHJvdG9jb2wgaXMgZHVwbGljYXRlZGApO1xuICB9XG5cbiAgcHJvdG9jb2xzLmFkZChwcm90b2NvbCk7XG4gIHJldHVybiBwcm90b2NvbHM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBwYXJzZSB9O1xuIiwgIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogW1wiZXJyb3JcIiwgeyBcInZhcnNJZ25vcmVQYXR0ZXJuXCI6IFwiXkR1cGxleCRcIiwgXCJjYXVnaHRFcnJvcnNcIjogXCJub25lXCIgfV0gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5jb25zdCB7IER1cGxleCB9ID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5jb25zdCB7IGNyZWF0ZUhhc2ggfSA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXG5jb25zdCBleHRlbnNpb24gPSByZXF1aXJlKCcuL2V4dGVuc2lvbicpO1xuY29uc3QgUGVyTWVzc2FnZURlZmxhdGUgPSByZXF1aXJlKCcuL3Blcm1lc3NhZ2UtZGVmbGF0ZScpO1xuY29uc3Qgc3VicHJvdG9jb2wgPSByZXF1aXJlKCcuL3N1YnByb3RvY29sJyk7XG5jb25zdCBXZWJTb2NrZXQgPSByZXF1aXJlKCcuL3dlYnNvY2tldCcpO1xuY29uc3QgeyBDTE9TRV9USU1FT1VULCBHVUlELCBrV2ViU29ja2V0IH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5jb25zdCBrZXlSZWdleCA9IC9eWysvMC05QS1aYS16XXsyMn09PSQvO1xuXG5jb25zdCBSVU5OSU5HID0gMDtcbmNvbnN0IENMT1NJTkcgPSAxO1xuY29uc3QgQ0xPU0VEID0gMjtcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBXZWJTb2NrZXQgc2VydmVyLlxuICpcbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5jbGFzcyBXZWJTb2NrZXRTZXJ2ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgYFdlYlNvY2tldFNlcnZlcmAgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIENvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHM9dHJ1ZV0gU3BlY2lmaWVzIHdoZXRoZXJcbiAgICogICAgIGFueSBvZiB0aGUgYCdtZXNzYWdlJ2AsIGAncGluZydgLCBhbmQgYCdwb25nJ2AgZXZlbnRzIGNhbiBiZSBlbWl0dGVkXG4gICAqICAgICBtdWx0aXBsZSB0aW1lcyBpbiB0aGUgc2FtZSB0aWNrXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYXV0b1Bvbmc9dHJ1ZV0gU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRvXG4gICAqICAgICBhdXRvbWF0aWNhbGx5IHNlbmQgYSBwb25nIGluIHJlc3BvbnNlIHRvIGEgcGluZ1xuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuYmFja2xvZz01MTFdIFRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aGUgcXVldWUgb2ZcbiAgICogICAgIHBlbmRpbmcgY29ubmVjdGlvbnNcbiAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jbGllbnRUcmFja2luZz10cnVlXSBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG9cbiAgICogICAgIHRyYWNrIGNsaWVudHNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmNsb3NlVGltZW91dD0zMDAwMF0gRHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIHRvXG4gICAqICAgICB3YWl0IGZvciB0aGUgY2xvc2luZyBoYW5kc2hha2UgdG8gZmluaXNoIGFmdGVyIGB3ZWJzb2NrZXQuY2xvc2UoKWAgaXNcbiAgICogICAgIGNhbGxlZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5oYW5kbGVQcm90b2NvbHNdIEEgaG9vayB0byBoYW5kbGUgcHJvdG9jb2xzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5ob3N0XSBUaGUgaG9zdG5hbWUgd2hlcmUgdG8gYmluZCB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhQYXlsb2FkPTEwNDg1NzYwMF0gVGhlIG1heGltdW0gYWxsb3dlZCBtZXNzYWdlXG4gICAqICAgICBzaXplXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubm9TZXJ2ZXI9ZmFsc2VdIEVuYWJsZSBubyBzZXJ2ZXIgbW9kZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucGF0aF0gQWNjZXB0IG9ubHkgY29ubmVjdGlvbnMgbWF0Y2hpbmcgdGhpcyBwYXRoXG4gICAqIEBwYXJhbSB7KEJvb2xlYW58T2JqZWN0KX0gW29wdGlvbnMucGVyTWVzc2FnZURlZmxhdGU9ZmFsc2VdIEVuYWJsZS9kaXNhYmxlXG4gICAqICAgICBwZXJtZXNzYWdlLWRlZmxhdGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnBvcnRdIFRoZSBwb3J0IHdoZXJlIHRvIGJpbmQgdGhlIHNlcnZlclxuICAgKiBAcGFyYW0geyhodHRwLlNlcnZlcnxodHRwcy5TZXJ2ZXIpfSBbb3B0aW9ucy5zZXJ2ZXJdIEEgcHJlLWNyZWF0ZWQgSFRUUC9TXG4gICAqICAgICBzZXJ2ZXIgdG8gdXNlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuc2tpcFVURjhWYWxpZGF0aW9uPWZhbHNlXSBTcGVjaWZpZXMgd2hldGhlciBvclxuICAgKiAgICAgbm90IHRvIHNraXAgVVRGLTggdmFsaWRhdGlvbiBmb3IgdGV4dCBhbmQgY2xvc2UgbWVzc2FnZXNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMudmVyaWZ5Q2xpZW50XSBBIGhvb2sgdG8gcmVqZWN0IGNvbm5lY3Rpb25zXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLldlYlNvY2tldD1XZWJTb2NrZXRdIFNwZWNpZmllcyB0aGUgYFdlYlNvY2tldGBcbiAgICogICAgIGNsYXNzIHRvIHVzZS4gSXQgbXVzdCBiZSB0aGUgYFdlYlNvY2tldGAgY2xhc3Mgb3IgY2xhc3MgdGhhdCBleHRlbmRzIGl0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gQSBsaXN0ZW5lciBmb3IgdGhlIGBsaXN0ZW5pbmdgIGV2ZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHN1cGVyKCk7XG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgYWxsb3dTeW5jaHJvbm91c0V2ZW50czogdHJ1ZSxcbiAgICAgIGF1dG9Qb25nOiB0cnVlLFxuICAgICAgbWF4UGF5bG9hZDogMTAwICogMTAyNCAqIDEwMjQsXG4gICAgICBza2lwVVRGOFZhbGlkYXRpb246IGZhbHNlLFxuICAgICAgcGVyTWVzc2FnZURlZmxhdGU6IGZhbHNlLFxuICAgICAgaGFuZGxlUHJvdG9jb2xzOiBudWxsLFxuICAgICAgY2xpZW50VHJhY2tpbmc6IHRydWUsXG4gICAgICBjbG9zZVRpbWVvdXQ6IENMT1NFX1RJTUVPVVQsXG4gICAgICB2ZXJpZnlDbGllbnQ6IG51bGwsXG4gICAgICBub1NlcnZlcjogZmFsc2UsXG4gICAgICBiYWNrbG9nOiBudWxsLCAvLyB1c2UgZGVmYXVsdCAoNTExIGFzIGltcGxlbWVudGVkIGluIG5ldC5qcylcbiAgICAgIHNlcnZlcjogbnVsbCxcbiAgICAgIGhvc3Q6IG51bGwsXG4gICAgICBwYXRoOiBudWxsLFxuICAgICAgcG9ydDogbnVsbCxcbiAgICAgIFdlYlNvY2tldCxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuXG4gICAgaWYgKFxuICAgICAgKG9wdGlvbnMucG9ydCA9PSBudWxsICYmICFvcHRpb25zLnNlcnZlciAmJiAhb3B0aW9ucy5ub1NlcnZlcikgfHxcbiAgICAgIChvcHRpb25zLnBvcnQgIT0gbnVsbCAmJiAob3B0aW9ucy5zZXJ2ZXIgfHwgb3B0aW9ucy5ub1NlcnZlcikpIHx8XG4gICAgICAob3B0aW9ucy5zZXJ2ZXIgJiYgb3B0aW9ucy5ub1NlcnZlcilcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdPbmUgYW5kIG9ubHkgb25lIG9mIHRoZSBcInBvcnRcIiwgXCJzZXJ2ZXJcIiwgb3IgXCJub1NlcnZlclwiIG9wdGlvbnMgJyArXG4gICAgICAgICAgJ211c3QgYmUgc3BlY2lmaWVkJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5wb3J0ICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX3NlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gaHR0cC5TVEFUVVNfQ09ERVNbNDI2XTtcblxuICAgICAgICByZXMud3JpdGVIZWFkKDQyNiwge1xuICAgICAgICAgICdDb250ZW50LUxlbmd0aCc6IGJvZHkubGVuZ3RoLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbidcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcy5lbmQoYm9keSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NlcnZlci5saXN0ZW4oXG4gICAgICAgIG9wdGlvbnMucG9ydCxcbiAgICAgICAgb3B0aW9ucy5ob3N0LFxuICAgICAgICBvcHRpb25zLmJhY2tsb2csXG4gICAgICAgIGNhbGxiYWNrXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5zZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX3NlcnZlciA9IG9wdGlvbnMuc2VydmVyO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zZXJ2ZXIpIHtcbiAgICAgIGNvbnN0IGVtaXRDb25uZWN0aW9uID0gdGhpcy5lbWl0LmJpbmQodGhpcywgJ2Nvbm5lY3Rpb24nKTtcblxuICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzID0gYWRkTGlzdGVuZXJzKHRoaXMuX3NlcnZlciwge1xuICAgICAgICBsaXN0ZW5pbmc6IHRoaXMuZW1pdC5iaW5kKHRoaXMsICdsaXN0ZW5pbmcnKSxcbiAgICAgICAgZXJyb3I6IHRoaXMuZW1pdC5iaW5kKHRoaXMsICdlcnJvcicpLFxuICAgICAgICB1cGdyYWRlOiAocmVxLCBzb2NrZXQsIGhlYWQpID0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVVwZ3JhZGUocmVxLCBzb2NrZXQsIGhlYWQsIGVtaXRDb25uZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMucGVyTWVzc2FnZURlZmxhdGUgPT09IHRydWUpIG9wdGlvbnMucGVyTWVzc2FnZURlZmxhdGUgPSB7fTtcbiAgICBpZiAob3B0aW9ucy5jbGllbnRUcmFja2luZykge1xuICAgICAgdGhpcy5jbGllbnRzID0gbmV3IFNldCgpO1xuICAgICAgdGhpcy5fc2hvdWxkRW1pdENsb3NlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLl9zdGF0ZSA9IFJVTk5JTkc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYm91bmQgYWRkcmVzcywgdGhlIGFkZHJlc3MgZmFtaWx5IG5hbWUsIGFuZCBwb3J0IG9mIHRoZSBzZXJ2ZXJcbiAgICogYXMgcmVwb3J0ZWQgYnkgdGhlIG9wZXJhdGluZyBzeXN0ZW0gaWYgbGlzdGVuaW5nIG9uIGFuIElQIHNvY2tldC5cbiAgICogSWYgdGhlIHNlcnZlciBpcyBsaXN0ZW5pbmcgb24gYSBwaXBlIG9yIFVOSVggZG9tYWluIHNvY2tldCwgdGhlIG5hbWUgaXNcbiAgICogcmV0dXJuZWQgYXMgYSBzdHJpbmcuXG4gICAqXG4gICAqIEByZXR1cm4geyhPYmplY3R8U3RyaW5nfG51bGwpfSBUaGUgYWRkcmVzcyBvZiB0aGUgc2VydmVyXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFkZHJlc3MoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5ub1NlcnZlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgc2VydmVyIGlzIG9wZXJhdGluZyBpbiBcIm5vU2VydmVyXCIgbW9kZScpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fc2VydmVyKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5fc2VydmVyLmFkZHJlc3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHRoZSBzZXJ2ZXIgZnJvbSBhY2NlcHRpbmcgbmV3IGNvbm5lY3Rpb25zIGFuZCBlbWl0IHRoZSBgJ2Nsb3NlJ2AgZXZlbnRcbiAgICogd2hlbiBhbGwgZXhpc3RpbmcgY29ubmVjdGlvbnMgYXJlIGNsb3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXSBBIG9uZS10aW1lIGxpc3RlbmVyIGZvciB0aGUgYCdjbG9zZSdgIGV2ZW50XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNsb3NlKGNiKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlID09PSBDTE9TRUQpIHtcbiAgICAgIGlmIChjYikge1xuICAgICAgICB0aGlzLm9uY2UoJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgICAgIGNiKG5ldyBFcnJvcignVGhlIHNlcnZlciBpcyBub3QgcnVubmluZycpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdENsb3NlLCB0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2IpIHRoaXMub25jZSgnY2xvc2UnLCBjYik7XG5cbiAgICBpZiAodGhpcy5fc3RhdGUgPT09IENMT1NJTkcpIHJldHVybjtcbiAgICB0aGlzLl9zdGF0ZSA9IENMT1NJTkc7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm5vU2VydmVyIHx8IHRoaXMub3B0aW9ucy5zZXJ2ZXIpIHtcbiAgICAgIGlmICh0aGlzLl9zZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVycyA9IHRoaXMuX3NlcnZlciA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNsaWVudHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsaWVudHMuc2l6ZSkge1xuICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdENsb3NlLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zaG91bGRFbWl0Q2xvc2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGVtaXRDbG9zZSwgdGhpcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlcnZlciA9IHRoaXMuX3NlcnZlcjtcblxuICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMgPSB0aGlzLl9zZXJ2ZXIgPSBudWxsO1xuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIEhUVFAvUyBzZXJ2ZXIgd2FzIGNyZWF0ZWQgaW50ZXJuYWxseS4gQ2xvc2UgaXQsIGFuZCByZWx5IG9uIGl0c1xuICAgICAgLy8gYCdjbG9zZSdgIGV2ZW50LlxuICAgICAgLy9cbiAgICAgIHNlcnZlci5jbG9zZSgoKSA9PiB7XG4gICAgICAgIGVtaXRDbG9zZSh0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWUgaWYgYSBnaXZlbiByZXF1ZXN0IHNob3VsZCBiZSBoYW5kbGVkIGJ5IHRoaXMgc2VydmVyIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge2h0dHAuSW5jb21pbmdNZXNzYWdlfSByZXEgUmVxdWVzdCBvYmplY3QgdG8gaW5zcGVjdFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIHJlcXVlc3QgaXMgdmFsaWQsIGVsc2UgYGZhbHNlYFxuICAgKiBAcHVibGljXG4gICAqL1xuICBzaG91bGRIYW5kbGUocmVxKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wYXRoKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHJlcS51cmwuaW5kZXhPZignPycpO1xuICAgICAgY29uc3QgcGF0aG5hbWUgPSBpbmRleCAhPT0gLTEgPyByZXEudXJsLnNsaWNlKDAsIGluZGV4KSA6IHJlcS51cmw7XG5cbiAgICAgIGlmIChwYXRobmFtZSAhPT0gdGhpcy5vcHRpb25zLnBhdGgpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYSBIVFRQIFVwZ3JhZGUgcmVxdWVzdC5cbiAgICpcbiAgICogQHBhcmFtIHtodHRwLkluY29taW5nTWVzc2FnZX0gcmVxIFRoZSByZXF1ZXN0IG9iamVjdFxuICAgKiBAcGFyYW0ge0R1cGxleH0gc29ja2V0IFRoZSBuZXR3b3JrIHNvY2tldCBiZXR3ZWVuIHRoZSBzZXJ2ZXIgYW5kIGNsaWVudFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gaGVhZCBUaGUgZmlyc3QgcGFja2V0IG9mIHRoZSB1cGdyYWRlZCBzdHJlYW1cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgaGFuZGxlVXBncmFkZShyZXEsIHNvY2tldCwgaGVhZCwgY2IpIHtcbiAgICBzb2NrZXQub24oJ2Vycm9yJywgc29ja2V0T25FcnJvcik7XG5cbiAgICBjb25zdCBrZXkgPSByZXEuaGVhZGVyc1snc2VjLXdlYnNvY2tldC1rZXknXTtcbiAgICBjb25zdCB1cGdyYWRlID0gcmVxLmhlYWRlcnMudXBncmFkZTtcbiAgICBjb25zdCB2ZXJzaW9uID0gK3JlcS5oZWFkZXJzWydzZWMtd2Vic29ja2V0LXZlcnNpb24nXTtcblxuICAgIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICdJbnZhbGlkIEhUVFAgbWV0aG9kJztcbiAgICAgIGFib3J0SGFuZHNoYWtlT3JFbWl0d3NDbGllbnRFcnJvcih0aGlzLCByZXEsIHNvY2tldCwgNDA1LCBtZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodXBncmFkZSA9PT0gdW5kZWZpbmVkIHx8IHVwZ3JhZGUudG9Mb3dlckNhc2UoKSAhPT0gJ3dlYnNvY2tldCcpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnSW52YWxpZCBVcGdyYWRlIGhlYWRlcic7XG4gICAgICBhYm9ydEhhbmRzaGFrZU9yRW1pdHdzQ2xpZW50RXJyb3IodGhpcywgcmVxLCBzb2NrZXQsIDQwMCwgbWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8ICFrZXlSZWdleC50ZXN0KGtleSkpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTWlzc2luZyBvciBpbnZhbGlkIFNlYy1XZWJTb2NrZXQtS2V5IGhlYWRlcic7XG4gICAgICBhYm9ydEhhbmRzaGFrZU9yRW1pdHdzQ2xpZW50RXJyb3IodGhpcywgcmVxLCBzb2NrZXQsIDQwMCwgbWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24gIT09IDEzICYmIHZlcnNpb24gIT09IDgpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTWlzc2luZyBvciBpbnZhbGlkIFNlYy1XZWJTb2NrZXQtVmVyc2lvbiBoZWFkZXInO1xuICAgICAgYWJvcnRIYW5kc2hha2VPckVtaXR3c0NsaWVudEVycm9yKHRoaXMsIHJlcSwgc29ja2V0LCA0MDAsIG1lc3NhZ2UsIHtcbiAgICAgICAgJ1NlYy1XZWJTb2NrZXQtVmVyc2lvbic6ICcxMywgOCdcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zaG91bGRIYW5kbGUocmVxKSkge1xuICAgICAgYWJvcnRIYW5kc2hha2Uoc29ja2V0LCA0MDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY1dlYlNvY2tldFByb3RvY29sID0gcmVxLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtcHJvdG9jb2wnXTtcbiAgICBsZXQgcHJvdG9jb2xzID0gbmV3IFNldCgpO1xuXG4gICAgaWYgKHNlY1dlYlNvY2tldFByb3RvY29sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByb3RvY29scyA9IHN1YnByb3RvY29sLnBhcnNlKHNlY1dlYlNvY2tldFByb3RvY29sKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ0ludmFsaWQgU2VjLVdlYlNvY2tldC1Qcm90b2NvbCBoZWFkZXInO1xuICAgICAgICBhYm9ydEhhbmRzaGFrZU9yRW1pdHdzQ2xpZW50RXJyb3IodGhpcywgcmVxLCBzb2NrZXQsIDQwMCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZWNXZWJTb2NrZXRFeHRlbnNpb25zID0gcmVxLmhlYWRlcnNbJ3NlYy13ZWJzb2NrZXQtZXh0ZW5zaW9ucyddO1xuICAgIGNvbnN0IGV4dGVuc2lvbnMgPSB7fTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSAmJlxuICAgICAgc2VjV2ViU29ja2V0RXh0ZW5zaW9ucyAhPT0gdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICBjb25zdCBwZXJNZXNzYWdlRGVmbGF0ZSA9IG5ldyBQZXJNZXNzYWdlRGVmbGF0ZSh7XG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSxcbiAgICAgICAgaXNTZXJ2ZXI6IHRydWUsXG4gICAgICAgIG1heFBheWxvYWQ6IHRoaXMub3B0aW9ucy5tYXhQYXlsb2FkXG4gICAgICB9KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb2ZmZXJzID0gZXh0ZW5zaW9uLnBhcnNlKHNlY1dlYlNvY2tldEV4dGVuc2lvbnMpO1xuXG4gICAgICAgIGlmIChvZmZlcnNbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV0pIHtcbiAgICAgICAgICBwZXJNZXNzYWdlRGVmbGF0ZS5hY2NlcHQob2ZmZXJzW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdKTtcbiAgICAgICAgICBleHRlbnNpb25zW1Blck1lc3NhZ2VEZWZsYXRlLmV4dGVuc2lvbk5hbWVdID0gcGVyTWVzc2FnZURlZmxhdGU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICAgICAnSW52YWxpZCBvciB1bmFjY2VwdGFibGUgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zIGhlYWRlcic7XG4gICAgICAgIGFib3J0SGFuZHNoYWtlT3JFbWl0d3NDbGllbnRFcnJvcih0aGlzLCByZXEsIHNvY2tldCwgNDAwLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vXG4gICAgLy8gT3B0aW9uYWxseSBjYWxsIGV4dGVybmFsIGNsaWVudCB2ZXJpZmljYXRpb24gaGFuZGxlci5cbiAgICAvL1xuICAgIGlmICh0aGlzLm9wdGlvbnMudmVyaWZ5Q2xpZW50KSB7XG4gICAgICBjb25zdCBpbmZvID0ge1xuICAgICAgICBvcmlnaW46XG4gICAgICAgICAgcmVxLmhlYWRlcnNbYCR7dmVyc2lvbiA9PT0gOCA/ICdzZWMtd2Vic29ja2V0LW9yaWdpbicgOiAnb3JpZ2luJ31gXSxcbiAgICAgICAgc2VjdXJlOiAhIShyZXEuc29ja2V0LmF1dGhvcml6ZWQgfHwgcmVxLnNvY2tldC5lbmNyeXB0ZWQpLFxuICAgICAgICByZXFcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudmVyaWZ5Q2xpZW50Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICB0aGlzLm9wdGlvbnMudmVyaWZ5Q2xpZW50KGluZm8sICh2ZXJpZmllZCwgY29kZSwgbWVzc2FnZSwgaGVhZGVycykgPT4ge1xuICAgICAgICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhYm9ydEhhbmRzaGFrZShzb2NrZXQsIGNvZGUgfHwgNDAxLCBtZXNzYWdlLCBoZWFkZXJzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmNvbXBsZXRlVXBncmFkZShcbiAgICAgICAgICAgIGV4dGVuc2lvbnMsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBwcm90b2NvbHMsXG4gICAgICAgICAgICByZXEsXG4gICAgICAgICAgICBzb2NrZXQsXG4gICAgICAgICAgICBoZWFkLFxuICAgICAgICAgICAgY2JcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy52ZXJpZnlDbGllbnQoaW5mbykpIHJldHVybiBhYm9ydEhhbmRzaGFrZShzb2NrZXQsIDQwMSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb21wbGV0ZVVwZ3JhZGUoZXh0ZW5zaW9ucywga2V5LCBwcm90b2NvbHMsIHJlcSwgc29ja2V0LCBoZWFkLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogVXBncmFkZSB0aGUgY29ubmVjdGlvbiB0byBXZWJTb2NrZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBleHRlbnNpb25zIFRoZSBhY2NlcHRlZCBleHRlbnNpb25zXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIHZhbHVlIG9mIHRoZSBgU2VjLVdlYlNvY2tldC1LZXlgIGhlYWRlclxuICAgKiBAcGFyYW0ge1NldH0gcHJvdG9jb2xzIFRoZSBzdWJwcm90b2NvbHNcbiAgICogQHBhcmFtIHtodHRwLkluY29taW5nTWVzc2FnZX0gcmVxIFRoZSByZXF1ZXN0IG9iamVjdFxuICAgKiBAcGFyYW0ge0R1cGxleH0gc29ja2V0IFRoZSBuZXR3b3JrIHNvY2tldCBiZXR3ZWVuIHRoZSBzZXJ2ZXIgYW5kIGNsaWVudFxuICAgKiBAcGFyYW0ge0J1ZmZlcn0gaGVhZCBUaGUgZmlyc3QgcGFja2V0IG9mIHRoZSB1cGdyYWRlZCBzdHJlYW1cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2tcbiAgICogQHRocm93cyB7RXJyb3J9IElmIGNhbGxlZCBtb3JlIHRoYW4gb25jZSB3aXRoIHRoZSBzYW1lIHNvY2tldFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29tcGxldGVVcGdyYWRlKGV4dGVuc2lvbnMsIGtleSwgcHJvdG9jb2xzLCByZXEsIHNvY2tldCwgaGVhZCwgY2IpIHtcbiAgICAvL1xuICAgIC8vIERlc3Ryb3kgdGhlIHNvY2tldCBpZiB0aGUgY2xpZW50IGhhcyBhbHJlYWR5IHNlbnQgYSBGSU4gcGFja2V0LlxuICAgIC8vXG4gICAgaWYgKCFzb2NrZXQucmVhZGFibGUgfHwgIXNvY2tldC53cml0YWJsZSkgcmV0dXJuIHNvY2tldC5kZXN0cm95KCk7XG5cbiAgICBpZiAoc29ja2V0W2tXZWJTb2NrZXRdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdzZXJ2ZXIuaGFuZGxlVXBncmFkZSgpIHdhcyBjYWxsZWQgbW9yZSB0aGFuIG9uY2Ugd2l0aCB0aGUgc2FtZSAnICtcbiAgICAgICAgICAnc29ja2V0LCBwb3NzaWJseSBkdWUgdG8gYSBtaXNjb25maWd1cmF0aW9uJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc3RhdGUgPiBSVU5OSU5HKSByZXR1cm4gYWJvcnRIYW5kc2hha2Uoc29ja2V0LCA1MDMpO1xuXG4gICAgY29uc3QgZGlnZXN0ID0gY3JlYXRlSGFzaCgnc2hhMScpXG4gICAgICAudXBkYXRlKGtleSArIEdVSUQpXG4gICAgICAuZGlnZXN0KCdiYXNlNjQnKTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBbXG4gICAgICAnSFRUUC8xLjEgMTAxIFN3aXRjaGluZyBQcm90b2NvbHMnLFxuICAgICAgJ1VwZ3JhZGU6IHdlYnNvY2tldCcsXG4gICAgICAnQ29ubmVjdGlvbjogVXBncmFkZScsXG4gICAgICBgU2VjLVdlYlNvY2tldC1BY2NlcHQ6ICR7ZGlnZXN0fWBcbiAgICBdO1xuXG4gICAgY29uc3Qgd3MgPSBuZXcgdGhpcy5vcHRpb25zLldlYlNvY2tldChudWxsLCB1bmRlZmluZWQsIHRoaXMub3B0aW9ucyk7XG5cbiAgICBpZiAocHJvdG9jb2xzLnNpemUpIHtcbiAgICAgIC8vXG4gICAgICAvLyBPcHRpb25hbGx5IGNhbGwgZXh0ZXJuYWwgcHJvdG9jb2wgc2VsZWN0aW9uIGhhbmRsZXIuXG4gICAgICAvL1xuICAgICAgY29uc3QgcHJvdG9jb2wgPSB0aGlzLm9wdGlvbnMuaGFuZGxlUHJvdG9jb2xzXG4gICAgICAgID8gdGhpcy5vcHRpb25zLmhhbmRsZVByb3RvY29scyhwcm90b2NvbHMsIHJlcSlcbiAgICAgICAgOiBwcm90b2NvbHMudmFsdWVzKCkubmV4dCgpLnZhbHVlO1xuXG4gICAgICBpZiAocHJvdG9jb2wpIHtcbiAgICAgICAgaGVhZGVycy5wdXNoKGBTZWMtV2ViU29ja2V0LVByb3RvY29sOiAke3Byb3RvY29sfWApO1xuICAgICAgICB3cy5fcHJvdG9jb2wgPSBwcm90b2NvbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXSkge1xuICAgICAgY29uc3QgcGFyYW1zID0gZXh0ZW5zaW9uc1tQZXJNZXNzYWdlRGVmbGF0ZS5leHRlbnNpb25OYW1lXS5wYXJhbXM7XG4gICAgICBjb25zdCB2YWx1ZSA9IGV4dGVuc2lvbi5mb3JtYXQoe1xuICAgICAgICBbUGVyTWVzc2FnZURlZmxhdGUuZXh0ZW5zaW9uTmFtZV06IFtwYXJhbXNdXG4gICAgICB9KTtcbiAgICAgIGhlYWRlcnMucHVzaChgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zOiAke3ZhbHVlfWApO1xuICAgICAgd3MuX2V4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gQWxsb3cgZXh0ZXJuYWwgbW9kaWZpY2F0aW9uL2luc3BlY3Rpb24gb2YgaGFuZHNoYWtlIGhlYWRlcnMuXG4gICAgLy9cbiAgICB0aGlzLmVtaXQoJ2hlYWRlcnMnLCBoZWFkZXJzLCByZXEpO1xuXG4gICAgc29ja2V0LndyaXRlKGhlYWRlcnMuY29uY2F0KCdcXHJcXG4nKS5qb2luKCdcXHJcXG4nKSk7XG4gICAgc29ja2V0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIHNvY2tldE9uRXJyb3IpO1xuXG4gICAgd3Muc2V0U29ja2V0KHNvY2tldCwgaGVhZCwge1xuICAgICAgYWxsb3dTeW5jaHJvbm91c0V2ZW50czogdGhpcy5vcHRpb25zLmFsbG93U3luY2hyb25vdXNFdmVudHMsXG4gICAgICBtYXhQYXlsb2FkOiB0aGlzLm9wdGlvbnMubWF4UGF5bG9hZCxcbiAgICAgIHNraXBVVEY4VmFsaWRhdGlvbjogdGhpcy5vcHRpb25zLnNraXBVVEY4VmFsaWRhdGlvblxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY2xpZW50cykge1xuICAgICAgdGhpcy5jbGllbnRzLmFkZCh3cyk7XG4gICAgICB3cy5vbignY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xpZW50cy5kZWxldGUod3MpO1xuXG4gICAgICAgIGlmICh0aGlzLl9zaG91bGRFbWl0Q2xvc2UgJiYgIXRoaXMuY2xpZW50cy5zaXplKSB7XG4gICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0Q2xvc2UsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjYih3cywgcmVxKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYlNvY2tldFNlcnZlcjtcblxuLyoqXG4gKiBBZGQgZXZlbnQgbGlzdGVuZXJzIG9uIGFuIGBFdmVudEVtaXR0ZXJgIHVzaW5nIGEgbWFwIG9mIDxldmVudCwgbGlzdGVuZXI+XG4gKiBwYWlycy5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gc2VydmVyIFRoZSBldmVudCBlbWl0dGVyXG4gKiBAcGFyYW0ge09iamVjdC48U3RyaW5nLCBGdW5jdGlvbj59IG1hcCBUaGUgbGlzdGVuZXJzIHRvIGFkZFxuICogQHJldHVybiB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlbW92ZSB0aGUgYWRkZWQgbGlzdGVuZXJzIHdoZW5cbiAqICAgICBjYWxsZWRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVycyhzZXJ2ZXIsIG1hcCkge1xuICBmb3IgKGNvbnN0IGV2ZW50IG9mIE9iamVjdC5rZXlzKG1hcCkpIHNlcnZlci5vbihldmVudCwgbWFwW2V2ZW50XSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIE9iamVjdC5rZXlzKG1hcCkpIHtcbiAgICAgIHNlcnZlci5yZW1vdmVMaXN0ZW5lcihldmVudCwgbWFwW2V2ZW50XSk7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIEVtaXQgYSBgJ2Nsb3NlJ2AgZXZlbnQgb24gYW4gYEV2ZW50RW1pdHRlcmAuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IHNlcnZlciBUaGUgZXZlbnQgZW1pdHRlclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZW1pdENsb3NlKHNlcnZlcikge1xuICBzZXJ2ZXIuX3N0YXRlID0gQ0xPU0VEO1xuICBzZXJ2ZXIuZW1pdCgnY2xvc2UnKTtcbn1cblxuLyoqXG4gKiBIYW5kbGUgc29ja2V0IGVycm9ycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzb2NrZXRPbkVycm9yKCkge1xuICB0aGlzLmRlc3Ryb3koKTtcbn1cblxuLyoqXG4gKiBDbG9zZSB0aGUgY29ubmVjdGlvbiB3aGVuIHByZWNvbmRpdGlvbnMgYXJlIG5vdCBmdWxmaWxsZWQuXG4gKlxuICogQHBhcmFtIHtEdXBsZXh9IHNvY2tldCBUaGUgc29ja2V0IG9mIHRoZSB1cGdyYWRlIHJlcXVlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlIFRoZSBIVFRQIHJlc3BvbnNlIHN0YXR1cyBjb2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gW21lc3NhZ2VdIFRoZSBIVFRQIHJlc3BvbnNlIGJvZHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbaGVhZGVyc10gQWRkaXRpb25hbCBIVFRQIHJlc3BvbnNlIGhlYWRlcnNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFib3J0SGFuZHNoYWtlKHNvY2tldCwgY29kZSwgbWVzc2FnZSwgaGVhZGVycykge1xuICAvL1xuICAvLyBUaGUgc29ja2V0IGlzIHdyaXRhYmxlIHVubGVzcyB0aGUgdXNlciBkZXN0cm95ZWQgb3IgZW5kZWQgaXQgYmVmb3JlIGNhbGxpbmdcbiAgLy8gYHNlcnZlci5oYW5kbGVVcGdyYWRlKClgIG9yIGluIHRoZSBgdmVyaWZ5Q2xpZW50YCBmdW5jdGlvbiwgd2hpY2ggaXMgYSB1c2VyXG4gIC8vIGVycm9yLiBIYW5kbGluZyB0aGlzIGRvZXMgbm90IG1ha2UgbXVjaCBzZW5zZSBhcyB0aGUgd29yc3QgdGhhdCBjYW4gaGFwcGVuXG4gIC8vIGlzIHRoYXQgc29tZSBvZiB0aGUgZGF0YSB3cml0dGVuIGJ5IHRoZSB1c2VyIG1pZ2h0IGJlIGRpc2NhcmRlZCBkdWUgdG8gdGhlXG4gIC8vIGNhbGwgdG8gYHNvY2tldC5lbmQoKWAgYmVsb3csIHdoaWNoIHRyaWdnZXJzIGFuIGAnZXJyb3InYCBldmVudCB0aGF0IGluXG4gIC8vIHR1cm4gY2F1c2VzIHRoZSBzb2NrZXQgdG8gYmUgZGVzdHJveWVkLlxuICAvL1xuICBtZXNzYWdlID0gbWVzc2FnZSB8fCBodHRwLlNUQVRVU19DT0RFU1tjb2RlXTtcbiAgaGVhZGVycyA9IHtcbiAgICBDb25uZWN0aW9uOiAnY2xvc2UnLFxuICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sJyxcbiAgICAnQ29udGVudC1MZW5ndGgnOiBCdWZmZXIuYnl0ZUxlbmd0aChtZXNzYWdlKSxcbiAgICAuLi5oZWFkZXJzXG4gIH07XG5cbiAgc29ja2V0Lm9uY2UoJ2ZpbmlzaCcsIHNvY2tldC5kZXN0cm95KTtcblxuICBzb2NrZXQuZW5kKFxuICAgIGBIVFRQLzEuMSAke2NvZGV9ICR7aHR0cC5TVEFUVVNfQ09ERVNbY29kZV19XFxyXFxuYCArXG4gICAgICBPYmplY3Qua2V5cyhoZWFkZXJzKVxuICAgICAgICAubWFwKChoKSA9PiBgJHtofTogJHtoZWFkZXJzW2hdfWApXG4gICAgICAgIC5qb2luKCdcXHJcXG4nKSArXG4gICAgICAnXFxyXFxuXFxyXFxuJyArXG4gICAgICBtZXNzYWdlXG4gICk7XG59XG5cbi8qKlxuICogRW1pdCBhIGAnd3NDbGllbnRFcnJvcidgIGV2ZW50IG9uIGEgYFdlYlNvY2tldFNlcnZlcmAgaWYgdGhlcmUgaXMgYXQgbGVhc3RcbiAqIG9uZSBsaXN0ZW5lciBmb3IgaXQsIG90aGVyd2lzZSBjYWxsIGBhYm9ydEhhbmRzaGFrZSgpYC5cbiAqXG4gKiBAcGFyYW0ge1dlYlNvY2tldFNlcnZlcn0gc2VydmVyIFRoZSBXZWJTb2NrZXQgc2VydmVyXG4gKiBAcGFyYW0ge2h0dHAuSW5jb21pbmdNZXNzYWdlfSByZXEgVGhlIHJlcXVlc3Qgb2JqZWN0XG4gKiBAcGFyYW0ge0R1cGxleH0gc29ja2V0IFRoZSBzb2NrZXQgb2YgdGhlIHVwZ3JhZGUgcmVxdWVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IGNvZGUgVGhlIEhUVFAgcmVzcG9uc2Ugc3RhdHVzIGNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSBIVFRQIHJlc3BvbnNlIGJvZHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbaGVhZGVyc10gVGhlIEhUVFAgcmVzcG9uc2UgaGVhZGVyc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWJvcnRIYW5kc2hha2VPckVtaXR3c0NsaWVudEVycm9yKFxuICBzZXJ2ZXIsXG4gIHJlcSxcbiAgc29ja2V0LFxuICBjb2RlLFxuICBtZXNzYWdlLFxuICBoZWFkZXJzXG4pIHtcbiAgaWYgKHNlcnZlci5saXN0ZW5lckNvdW50KCd3c0NsaWVudEVycm9yJykpIHtcbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoZXJyLCBhYm9ydEhhbmRzaGFrZU9yRW1pdHdzQ2xpZW50RXJyb3IpO1xuXG4gICAgc2VydmVyLmVtaXQoJ3dzQ2xpZW50RXJyb3InLCBlcnIsIHNvY2tldCwgcmVxKTtcbiAgfSBlbHNlIHtcbiAgICBhYm9ydEhhbmRzaGFrZShzb2NrZXQsIGNvZGUsIG1lc3NhZ2UsIGhlYWRlcnMpO1xuICB9XG59XG4iLCAiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0IG9zIGZyb20gXCJub2RlOm9zXCI7XG5pbXBvcnQgcmVhZGxpbmUgZnJvbSBcIm5vZGU6cmVhZGxpbmVcIjtcbmltcG9ydCBwYyBmcm9tIFwicGljb2NvbG9yc1wiO1xuaW1wb3J0IHsgV2ViUHViU3ViQ2xpZW50LCBXZWJQdWJTdWJKc29uUHJvdG9jb2wgfSBmcm9tIFwiQGF6dXJlL3dlYi1wdWJzdWItY2xpZW50XCI7XG5pbXBvcnQgeyBsb2FkQ3JlZGVudGlhbHMsIHNhdmVDcmVkZW50aWFscywgd2lwZUNyZWRlbnRpYWxzLCBjcmVkZW50aWFsTW9kZSwgQ3JlZGVudGlhbHMgfSBmcm9tIFwiLi9jcmVkZW50aWFscy5qc1wiO1xuaW1wb3J0IHsgam9pbkRpcmVjdCwgZGFlbW9uRGlyZWN0IH0gZnJvbSBcIi4vZGlyZWN0LmpzXCI7XG5cbnR5cGUgU3ViY29tbWFuZCA9IChhcmdzOiBzdHJpbmdbXSkgPT4gUHJvbWlzZTxudW1iZXI+O1xuXG5jb25zdCBzdWJjb21tYW5kczogUmVjb3JkPHN0cmluZywgU3ViY29tbWFuZD4gPSB7XG4gIGpvaW46IGNtZEpvaW4sXG4gIGRhZW1vbjogY21kRGFlbW9uLFxuICBjbGllbnRzOiBjbWRDbGllbnRzLFxuICBzZW5kOiBjbWRTZW5kLFxuICB1bnBhaXI6IGNtZFVucGFpcixcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgY29uc3QgW2NtZCwgLi4ucmVzdF0gPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMik7XG4gIGlmICghY21kIHx8IGNtZCA9PT0gXCItLWhlbHBcIiB8fCBjbWQgPT09IFwiLWhcIikge1xuICAgIHByaW50VXNhZ2UoKTtcbiAgICByZXR1cm4gY21kID8gMCA6IDI7XG4gIH1cbiAgY29uc3QgZm4gPSBzdWJjb21tYW5kc1tjbWRdO1xuICBpZiAoIWZuKSB7XG4gICAgY29uc29sZS5lcnJvcihwYy5yZWQoYHVua25vd24gc3ViY29tbWFuZDogJHtjbWR9YCkpO1xuICAgIHByaW50VXNhZ2UoKTtcbiAgICByZXR1cm4gMjtcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmbihyZXN0KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihwYy5yZWQoZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IFN0cmluZyhlcnIpKSk7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRVc2FnZSgpOiB2b2lkIHtcbiAgY29uc29sZS5lcnJvcihgXG5idmctZGVhbW9uIFx1MjAxNCBwdXJlLUF6dXJlIHRyYW5zcG9ydCBjbGllbnQgZm9yIGJ2Z2VlcnRcblxuVXNhZ2U6XG4gIGJ2Zy1kZWFtb24gam9pbiAtLWh1YiA8d3NzOi8veC53ZWJwdWJzdWIuYXp1cmUuY29tL2NsaWVudC9odWJzLzxodWI+PiAtLXRyYW5zcG9ydCA8aWRlbnRpZmllcj4gWy0tdG9rZW4gPGp0X3h4eD5dXG4gICAgICBhbm9ueW1vdXNseSBjb25uZWN0IHRvIGJ2Z2VlcnQgdmlhIEF6dXJlLCByZXF1ZXN0IHRvIGpvaW4gYVxuICAgICAgdHJhbnNwb3J0LCBwcmludCBhIHBhaXJpbmcgY29kZSBhbmQgd2FpdCBmb3IgYWRtaW4gYXBwcm92YWwuXG4gICAgICBXaXRoIC0tdG9rZW4gKG9yIGVudiBCVkdfSk9JTl9UT0tFTiksIHJlZGVlbSBhIHByZS1hcHByb3ZlZFxuICAgICAgam9pbiB0b2tlbiBpbnN0ZWFkIG9mIHdhaXRpbmcgZm9yIGFuIGFkbWluIFx1MjAxNCBza2lwcyB0aGUgcGFpci1jb2RlXG4gICAgICBzdGVwIGVudGlyZWx5LlxuXG4gIGJ2Zy1kZWFtb24gZGFlbW9uXG4gICAgICBrZWVwIGFuIGF1dGhlbnRpY2F0ZWQgV2ViU29ja2V0IG9wZW4uIFByaW50cyBpbmNvbWluZyBlbnZlbG9wZXMuXG4gICAgICBUeXBlIFwicmVwbHkgPHRleHQ+XCIgaW4gc3RkaW4gdG8gcmVwbHkgdG8gdGhlIGxhc3Qgc2VuZGVyLlxuXG4gIGJ2Zy1kZWFtb24gY2xpZW50cyBbLS1vbmxpbmVdXG4gICAgICBsaXN0IG1lbWJlcnMgb2YgdGhlIGpvaW5lZCB0cmFuc3BvcnQuXG5cbiAgYnZnLWRlYW1vbiBzZW5kIDx0YXJnZXQtaWRlbnRpZmllcnwqPiA8dGV4dD5cbiAgICAgIHNlbmQgYSBkaXJlY3QgbWVzc2FnZSB0byBvbmUgY2xpZW50IG9uIHRoZSBqb2luZWQgdHJhbnNwb3J0LCBvciBcIipcIiB0byBicm9hZGNhc3QuXG5cbiAgYnZnLWRlYW1vbiB1bnBhaXJcbiAgICAgIHdpcGUgbG9jYWwgY3JlZGVudGlhbHMgKHNlcnZlci1zaWRlIHJldm9rZSB2aWEgYnZnZWVydCBhZG1pbikuXG5cbkNyZWRlbnRpYWxzIGFyZSBzdG9yZWQgYXQgJEJWR19ERUFNT05fQ1JFREVOVElBTFMgb3Igfi8uY29uZmlnL2J2Zy1kZWFtb24vY3JlZGVudGlhbHMuanNvbiAobW9kZSAwNjAwKS5cbmApO1xufVxuXG5mdW5jdGlvbiBwYXJzZUZsYWcoYXJnczogc3RyaW5nW10sIG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IGlkeCA9IGFyZ3MuaW5kZXhPZihgLS0ke25hbWV9YCk7XG4gIGlmIChpZHggPT09IC0xKSByZXR1cm4gdW5kZWZpbmVkO1xuICByZXR1cm4gYXJnc1tpZHggKyAxXTtcbn1cblxudHlwZSBQYWlyaW5nQ29kZU1zZyA9IHsgdHlwZTogXCJwYWlyaW5nLmNvZGVcIjsgY29kZTogc3RyaW5nOyBleHBpcmVzX2F0OiBzdHJpbmc7IGFkbWluX3VybD86IHN0cmluZyB9O1xudHlwZSBQYWlyaW5nQXBwcm92ZWRNc2cgPSB7IHR5cGU6IFwicGFpcmluZy5hcHByb3ZlZFwiOyBjbGllbnRfaWQ6IHN0cmluZzsgcmVnaXN0cmF0aW9uX3Rva2VuOiBzdHJpbmc7IHVybDogc3RyaW5nOyBleHBpcmVzX2F0OiBzdHJpbmcgfTtcbnR5cGUgUGFpcmluZ0RlbmllZE1zZyA9IHsgdHlwZTogXCJwYWlyaW5nLmRlbmllZFwiIH07XG50eXBlIFRva2VuUmVmcmVzaE1zZyA9IHsgdHlwZTogXCJ0b2tlbi5yZWZyZXNoXCI7IHVybDogc3RyaW5nOyBleHBpcmVzX2F0OiBzdHJpbmcgfTtcbnR5cGUgU3lzdGVtTXNnID0gUGFpcmluZ0NvZGVNc2cgfCBQYWlyaW5nQXBwcm92ZWRNc2cgfCBQYWlyaW5nRGVuaWVkTXNnIHwgVG9rZW5SZWZyZXNoTXNnO1xuXG5mdW5jdGlvbiBhc1N5c3RlbU1zZyhkYXRhOiB1bmtub3duKTogU3lzdGVtTXNnIHwgbnVsbCB7XG4gIGlmICghZGF0YSB8fCB0eXBlb2YgZGF0YSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIG51bGw7XG4gIGNvbnN0IG9iaiA9IGRhdGEgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGlmICh0eXBlb2Ygb2JqLnR5cGUgIT09IFwic3RyaW5nXCIpIHJldHVybiBudWxsO1xuICByZXR1cm4gb2JqIGFzIFN5c3RlbU1zZztcbn1cblxuYXN5bmMgZnVuY3Rpb24gY21kSm9pbihhcmdzOiBzdHJpbmdbXSk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGNvbnN0IGhvc3QgPSBwYXJzZUZsYWcoYXJncywgXCJob3N0XCIpID8/IHByb2Nlc3MuZW52LkJWR19CVkdFRVJUX0hPU1Q7XG4gIGNvbnN0IHRva2VuRmxhZyA9IHBhcnNlRmxhZyhhcmdzLCBcInRva2VuXCIpO1xuICBjb25zdCB0b2tlbiA9IHRva2VuRmxhZyA/PyBwcm9jZXNzLmVudi5CVkdfSk9JTl9UT0tFTiA/PyB1bmRlZmluZWQ7XG4gIGNvbnN0IHRyYW5zcG9ydCA9IHBhcnNlRmxhZyhhcmdzLCBcInRyYW5zcG9ydFwiKSA/PyBwcm9jZXNzLmVudi5CVkdfVFJBTlNQT1JUO1xuXG4gIC8vIERpcmVjdC1tb2RlOiBidmdlZXJ0IGRpcmVjdCBiZXJlaWtiYWFyIHZpYSBIVFRQUy5cbiAgaWYgKGhvc3QgJiYgdG9rZW4pIHtcbiAgICByZXR1cm4gYXdhaXQgam9pbkRpcmVjdChob3N0LCB0b2tlbiwgdHJhbnNwb3J0KTtcbiAgfVxuXG4gIGNvbnN0IGh1YiA9IHBhcnNlRmxhZyhhcmdzLCBcImh1YlwiKSA/PyBwcm9jZXNzLmVudi5CVkdfQVpVUkVfSFVCO1xuICBpZiAoIWh1YiB8fCAhdHJhbnNwb3J0KSB7XG4gICAgY29uc29sZS5lcnJvcihwYy5yZWQoXCJ1c2FnZTogYnZnLWRlYW1vbiBqb2luIC0taG9zdCA8YnZnZWVydC1ob3N0PiAtLXRva2VuIDxqdF94eHg+ICAgICAoZGlyZWN0ZSByb3V0ZSlcIikpO1xuICAgIGNvbnNvbGUuZXJyb3IocGMucmVkKFwiICAgICAgIGJ2Zy1kZWFtb24gam9pbiAtLWh1YiA8d3NzLXVybD4gLS10cmFuc3BvcnQgPGlkPiBbLS10b2tlbiA8anRfeHh4Pl0gICAoQXp1cmUtcm91dGUpXCIpKTtcbiAgICByZXR1cm4gMjtcbiAgfVxuICBjb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52LkJWR19ERUJVRyA9PT0gXCIxXCI7XG4gIGNvbnN0IGRiZyA9ICguLi5hOiB1bmtub3duW10pID0+IHsgaWYgKGRlYnVnKSBjb25zb2xlLmVycm9yKHBjLmRpbShcIltkZWJ1Z11cIiksIC4uLmEgYXMgc3RyaW5nW10pOyB9O1xuXG4gIGNvbnNvbGUubG9nKHBjLmN5YW4odG9rZW4gPyBcImNvbm5lY3RpbmcgdG8gQXp1cmUgKHRva2VuIHJlZGVlbSkuLi5cIiA6IFwiY29ubmVjdGluZyB0byBBenVyZSBhbm9ueW1vdXNseS4uLlwiKSk7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBXZWJQdWJTdWJDbGllbnQoeyBnZXRDbGllbnRBY2Nlc3NVcmw6IGFzeW5jICgpID0+IGh1YiB9LCB7IHByb3RvY29sOiBXZWJQdWJTdWJKc29uUHJvdG9jb2woKSB9KTtcbiAgbGV0IGFwcHJvdmVkOiBQYWlyaW5nQXBwcm92ZWRNc2cgfCBudWxsID0gbnVsbDtcbiAgbGV0IGRlbmllZCA9IGZhbHNlO1xuICBsZXQgdG9waWNSZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgbGV0IHRva2VuUmVkZWVtZWQgPSBmYWxzZTtcbiAgbGV0IGNvbm5lY3Rpb25JZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgY2xpZW50Lm9uKFwiY29ubmVjdGVkXCIsIGFzeW5jIChlKSA9PiB7XG4gICAgY29ubmVjdGlvbklkID0gZS5jb25uZWN0aW9uSWQ7XG4gICAgZGJnKFwiY29ubmVjdGVkXCIsIHsgY29ubmVjdGlvbklkOiBlLmNvbm5lY3Rpb25JZCwgdXNlcklkOiBlLnVzZXJJZCB9KTtcbiAgICBpZiAodG9rZW4gJiYgIXRva2VuUmVkZWVtZWQpIHtcbiAgICAgIHRva2VuUmVkZWVtZWQgPSB0cnVlO1xuICAgICAgZGJnKFwicmVkZWVtaW5nIGpvaW4gdG9rZW5cIik7XG4gICAgICBhd2FpdCBjbGllbnQuc2VuZEV2ZW50KFwicmVkZWVtX2pvaW5fdG9rZW5cIiwgeyB0b2tlbiwgdG9waWNfaWRlbnRpZmllcjogdHJhbnNwb3J0IH0sIFwianNvblwiLCB7IGZpcmVBbmRGb3JnZXQ6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbiAgY2xpZW50Lm9uKFwiZGlzY29ubmVjdGVkXCIsIChlKSA9PiB7XG4gICAgZGJnKFwiZGlzY29ubmVjdGVkXCIsIHsgbWVzc2FnZTogZS5tZXNzYWdlIH0pO1xuICB9KTtcbiAgY2xpZW50Lm9uKFwic3RvcHBlZFwiLCAoKSA9PiBkYmcoXCJzdG9wcGVkXCIpKTtcbiAgY2xpZW50Lm9uKFwic2VydmVyLW1lc3NhZ2VcIiwgYXN5bmMgKGUpID0+IHtcbiAgICBkYmcoXCJzZXJ2ZXItbWVzc2FnZSByYXc6XCIsIEpTT04uc3RyaW5naWZ5KGUubWVzc2FnZS5kYXRhKSk7XG4gICAgY29uc3QgbXNnID0gYXNTeXN0ZW1Nc2coZS5tZXNzYWdlLmRhdGEpO1xuICAgIGlmICghbXNnKSByZXR1cm47XG4gICAgaWYgKG1zZy50eXBlID09PSBcInBhaXJpbmcuY29kZVwiKSB7XG4gICAgICAvLyBTa2lwIHRoZSBwYWlyLWNvZGUgZGFuY2UgZW50aXJlbHkgd2hlbiBhIHRva2VuIHdhcyBzdXBwbGllZCBcdTIwMTRcbiAgICAgIC8vIHRoZSByZWRlZW1fam9pbl90b2tlbiBldmVudCBpcyBhbHJlYWR5IGluIGZsaWdodCBmcm9tIGNvbm5lY3RlZC5cbiAgICAgIGlmICh0b2tlbikgcmV0dXJuO1xuICAgICAgY29uc29sZS5sb2coXCJcIik7XG4gICAgICBjb25zb2xlLmxvZyhwYy5ib2xkKFwicGFpciBjb2RlOlwiKSwgcGMuY3lhbihtc2cuY29kZSkpO1xuICAgICAgaWYgKG1zZy5hZG1pbl91cmwpIGNvbnNvbGUubG9nKGBhcHByb3ZlIGluIGFkbWluOiAke21zZy5hZG1pbl91cmx9YCk7XG4gICAgICBjb25zb2xlLmxvZyhgZXhwaXJlczogJHttc2cuZXhwaXJlc19hdH1gKTtcbiAgICAgIGNvbnNvbGUubG9nKHBjLmRpbShcIlxcbndhaXRpbmcgZm9yIGFwcHJvdmFsIFx1MjAxNCBDdHJsK0MgdG8gY2FuY2VsXFxuXCIpKTtcbiAgICAgIGlmICghdG9waWNSZXF1ZXN0ZWQpIHtcbiAgICAgICAgdG9waWNSZXF1ZXN0ZWQgPSB0cnVlO1xuICAgICAgICBhd2FpdCBjbGllbnQuc2VuZEV2ZW50KFwicGFpcmluZ19yZXF1ZXN0X3RvcGljXCIsIHsgdG9waWNfaWRlbnRpZmllcjogdHJhbnNwb3J0IH0sIFwianNvblwiLCB7IGZpcmVBbmRGb3JnZXQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJwYWlyaW5nLmFwcHJvdmVkXCIpIHtcbiAgICAgIGFwcHJvdmVkID0gbXNnO1xuICAgIH0gZWxzZSBpZiAobXNnLnR5cGUgPT09IFwicGFpcmluZy5kZW5pZWRcIikge1xuICAgICAgZGVuaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGF3YWl0IGNsaWVudC5zdGFydCgpO1xuXG4gIGNvbnN0IHN0YXJ0ZWRBdCA9IERhdGUubm93KCk7XG4gIHdoaWxlICghYXBwcm92ZWQgJiYgIWRlbmllZCAmJiBEYXRlLm5vdygpIC0gc3RhcnRlZEF0IDwgMzAgKiA2MCAqIDEwMDApIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCAxMDAwKSk7XG4gIH1cbiAgYXdhaXQgY2xpZW50LnN0b3AoKTtcblxuICBpZiAoZGVuaWVkKSB7XG4gICAgY29uc29sZS5lcnJvcihwYy5yZWQoXCJkZW5pZWQgYnkgYWRtaW5cIikpO1xuICAgIHJldHVybiAzO1xuICB9XG4gIGlmICghYXBwcm92ZWQpIHtcbiAgICBjb25zb2xlLmVycm9yKHBjLnJlZChcInRpbWVvdXQgd2FpdGluZyBmb3IgYXBwcm92YWxcIikpO1xuICAgIHJldHVybiA0O1xuICB9XG5cbiAgY29uc3QgcGF0aCA9IHNhdmVDcmVkZW50aWFscyh7XG4gICAgYXp1cmVfaHViX3VybDogaHViLFxuICAgIGNsaWVudF9pZDogKGFwcHJvdmVkIGFzIFBhaXJpbmdBcHByb3ZlZE1zZykuY2xpZW50X2lkLFxuICAgIHJlZ2lzdHJhdGlvbl90b2tlbjogKGFwcHJvdmVkIGFzIFBhaXJpbmdBcHByb3ZlZE1zZykucmVnaXN0cmF0aW9uX3Rva2VuLFxuICAgIGFjY2Vzc191cmw6IChhcHByb3ZlZCBhcyBQYWlyaW5nQXBwcm92ZWRNc2cpLnVybCxcbiAgICBhY2Nlc3NfdXJsX2V4cGlyZXNfYXQ6IChhcHByb3ZlZCBhcyBQYWlyaW5nQXBwcm92ZWRNc2cpLmV4cGlyZXNfYXQsXG4gICAgdG9waWNfaWRlbnRpZmllcjogdHJhbnNwb3J0LFxuICB9KTtcbiAgY29uc29sZS5sb2cocGMuZ3JlZW4oYHBhaXJlZCBhcyAkeyhhcHByb3ZlZCBhcyBQYWlyaW5nQXBwcm92ZWRNc2cpLmNsaWVudF9pZH0gb24gdHJhbnNwb3J0ICR7dHJhbnNwb3J0fWApKTtcbiAgY29uc29sZS5sb2coYGNyZWRlbnRpYWxzOiAke3BhdGh9YCk7XG4gIGNvbnNvbGUubG9nKHBjLmRpbShgYm9vdHN0cmFwIGNvbm5lY3Rpb25JZCB3YXMgJHtjb25uZWN0aW9uSWR9YCkpO1xuICByZXR1cm4gMDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY21kVW5wYWlyKF9hcmdzOiBzdHJpbmdbXSk6IFByb21pc2U8bnVtYmVyPiB7XG4gIHdpcGVDcmVkZW50aWFscygpO1xuICBjb25zb2xlLmxvZyhwYy5ncmVlbihcImxvY2FsIGNyZWRlbnRpYWxzIHdpcGVkXCIpKTtcbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIGF1dGhlZENsaWVudChjcmVkczogQ3JlZGVudGlhbHMpOiBXZWJQdWJTdWJDbGllbnQge1xuICBsZXQgYWNjZXNzVXJsID0gY3JlZHMuYWNjZXNzX3VybCA/PyBcIlwiO1xuICBsZXQgYWNjZXNzRXhwaXJlc0F0ID0gY3JlZHMuYWNjZXNzX3VybF9leHBpcmVzX2F0ID8gRGF0ZS5wYXJzZShjcmVkcy5hY2Nlc3NfdXJsX2V4cGlyZXNfYXQpIDogMDtcbiAgbGV0IHJlZnJlc2hSZXNvbHZlOiAoKHVybDogc3RyaW5nKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0IGM6IFdlYlB1YlN1YkNsaWVudCA9IG5ldyBXZWJQdWJTdWJDbGllbnQoe1xuICAgIGdldENsaWVudEFjY2Vzc1VybDogYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCFhY2Nlc3NVcmwpIHRocm93IG5ldyBFcnJvcihcIm5vIGFjY2VzcyB1cmwgXHUyMDE0IHJlLXBhaXJcIik7XG4gICAgICBpZiAoRGF0ZS5ub3coKSA+PSBhY2Nlc3NFeHBpcmVzQXQgLSA2MF8wMDAgJiYgIXJlZnJlc2hSZXNvbHZlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgd2FpdGVyID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSkgPT4geyByZWZyZXNoUmVzb2x2ZSA9IHJlc29sdmU7IH0pO1xuICAgICAgICAgIGF3YWl0IGMuc2VuZEV2ZW50KFwicmVxdWVzdF9yZWZyZXNoX3Rva2VuXCIsIHt9LCBcImpzb25cIiwgeyBmaXJlQW5kRm9yZ2V0OiB0cnVlIH0pO1xuICAgICAgICAgIGFjY2Vzc1VybCA9IGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgICAgICB3YWl0ZXIsXG4gICAgICAgICAgICBuZXcgUHJvbWlzZTxzdHJpbmc+KChfLCByZWplY3QpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KG5ldyBFcnJvcihcInRva2VuIHJlZnJlc2ggdGltZW91dFwiKSksIDMwXzAwMCkpLFxuICAgICAgICAgIF0pO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvKiBmYWxsIGJhY2sgdG8gc3RhbGUgVVJMICovXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgcmVmcmVzaFJlc29sdmUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjZXNzVXJsO1xuICAgIH0sXG4gIH0sIHtcbiAgICBhdXRvUmVjb25uZWN0OiB0cnVlLFxuICAgIHJlY29ubmVjdFJldHJ5T3B0aW9uczogeyBtYXhSZXRyaWVzOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgcmV0cnlEZWxheUluTXM6IDFfMDAwLCBtYXhSZXRyeURlbGF5SW5NczogMzBfMDAwLCBtb2RlOiBcIkV4cG9uZW50aWFsXCIgfSxcbiAgICBwcm90b2NvbDogV2ViUHViU3ViSnNvblByb3RvY29sKCksXG4gIH0pO1xuXG4gIGMub24oXCJzZXJ2ZXItbWVzc2FnZVwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBlLm1lc3NhZ2UuZGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZDtcbiAgICBpZiAoZGF0YT8udHlwZSA9PT0gXCJ0b2tlbi5yZWZyZXNoXCIgJiYgdHlwZW9mIGRhdGEudXJsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBhY2Nlc3NVcmwgPSBkYXRhLnVybDtcbiAgICAgIGlmICh0eXBlb2YgZGF0YS5leHBpcmVzX2F0ID09PSBcInN0cmluZ1wiKSBhY2Nlc3NFeHBpcmVzQXQgPSBEYXRlLnBhcnNlKGRhdGEuZXhwaXJlc19hdCk7XG4gICAgICByZWZyZXNoUmVzb2x2ZT8uKGRhdGEudXJsKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjO1xufVxuXG5mdW5jdGlvbiByZXF1aXJlQ3JlZHMoKTogQ3JlZGVudGlhbHMge1xuICBjb25zdCBjcmVkcyA9IGxvYWRDcmVkZW50aWFscygpO1xuICBpZiAoIWNyZWRzKSB7XG4gICAgY29uc29sZS5lcnJvcihwYy5yZWQoXCJub3QgcGFpcmVkIFx1MjAxNCBydW4gYGJ2Zy1kZWFtb24gam9pbmAgZmlyc3RcIikpO1xuICAgIHByb2Nlc3MuZXhpdCgyKTtcbiAgfVxuICByZXR1cm4gY3JlZHM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNtZERhZW1vbihfYXJnczogc3RyaW5nW10pOiBQcm9taXNlPG51bWJlcj4ge1xuICBjb25zdCBjcmVkcyA9IHJlcXVpcmVDcmVkcygpO1xuICBpZiAoY3JlZGVudGlhbE1vZGUoY3JlZHMpID09PSBcImRpcmVjdFwiKSB7XG4gICAgcmV0dXJuIGF3YWl0IGRhZW1vbkRpcmVjdChjcmVkcyk7XG4gIH1cbiAgY29uc3QgY2xpZW50ID0gYXV0aGVkQ2xpZW50KGNyZWRzKTtcblxuICBsZXQgbGFzdFNlbmRlcjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgY2xpZW50Lm9uKFwiY29ubmVjdGVkXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2cocGMuZ3JlZW4oYGNvbm5lY3RlZCBcdTIwMTQgY29ubmVjdGlvbklkPSR7ZS5jb25uZWN0aW9uSWR9IHVzZXJJZD0ke2UudXNlcklkfWApKTtcbiAgICBjb25zb2xlLmxvZyhwYy5kaW0oYHRyYW5zcG9ydDogJHtjcmVkcy50b3BpY19pZGVudGlmaWVyID8/IFwiKHVua25vd24pXCJ9YCkpO1xuICAgIGNvbnNvbGUubG9nKHBjLmRpbShcInR5cGUgJ3JlcGx5IDx0ZXh0PicgdG8gcmVwbHkgdG8gbGFzdCBzZW5kZXIsICdoZWxwJyBmb3IgY29tbWFuZHNcIikpO1xuICB9KTtcbiAgY2xpZW50Lm9uKFwiZGlzY29ubmVjdGVkXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2cocGMueWVsbG93KGBkaXNjb25uZWN0ZWQgXHUyMDE0ICR7ZS5tZXNzYWdlID8/IFwiXCJ9YCkpO1xuICB9KTtcblxuICBjb25zdCBoYW5kbGVFbnZlbG9wZSA9IChkYXRhOiBhbnkpID0+IHtcbiAgICBpZiAoZGF0YT8udHlwZSA9PT0gXCJ0b2tlbi5yZWZyZXNoXCIpIHJldHVybjtcbiAgICBjb25zdCBzZW5kZXIgPSBkYXRhPy5zZW5kZXJfaWRlbnRpZmllciA/PyBcIih1bmtub3duKVwiO1xuICAgIGNvbnN0IHRhcmdldCA9IGRhdGE/LnRhcmdldF9pZGVudGlmaWVyO1xuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSBjcmVkcy5jbGllbnRfaWQpIHJldHVybjsgLy8gZmlsdGVyIG91dCB0YXJnZXRlZC1ub3QtZm9yLW1lXG4gICAgY29uc3QgcGF5bG9hZCA9IHR5cGVvZiBkYXRhPy5wYXlsb2FkID09PSBcInN0cmluZ1wiID8gZGF0YS5wYXlsb2FkIDogSlNPTi5zdHJpbmdpZnkoZGF0YT8ucGF5bG9hZCk7XG4gICAgY29uc29sZS5sb2coYCR7cGMuY3lhbihcIltcIiArIHNlbmRlciArIFwiXVwiKX0gJHtkYXRhPy5tZXNzYWdlX3R5cGUgPz8gXCJcIn06ICR7cGF5bG9hZH1gKTtcbiAgICBsYXN0U2VuZGVyID0gc2VuZGVyO1xuICB9O1xuXG4gIGNsaWVudC5vbihcInNlcnZlci1tZXNzYWdlXCIsIChlKSA9PiBoYW5kbGVFbnZlbG9wZShlLm1lc3NhZ2UuZGF0YSkpO1xuICBjbGllbnQub24oXCJncm91cC1tZXNzYWdlXCIsIChlKSA9PiBoYW5kbGVFbnZlbG9wZShlLm1lc3NhZ2UuZGF0YSkpO1xuXG4gIGF3YWl0IGNsaWVudC5zdGFydCgpO1xuXG4gIGNvbnN0IHJsID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHsgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sIG91dHB1dDogcHJvY2Vzcy5zdGRvdXQsIHRlcm1pbmFsOiBmYWxzZSB9KTtcbiAgcmwub24oXCJsaW5lXCIsIGFzeW5jIChyYXcpID0+IHtcbiAgICBjb25zdCBsaW5lID0gcmF3LnRyaW0oKTtcbiAgICBpZiAoIWxpbmUpIHJldHVybjtcbiAgICBpZiAobGluZSA9PT0gXCJoZWxwXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKHBjLmRpbShcImNvbW1hbmRzOiByZXBseSA8dGV4dD4gfCBzZW5kIDxpZGVudGlmaWVyPiA8dGV4dD4gfCBjbGllbnRzIHwgcXVpdFwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsaW5lID09PSBcInF1aXRcIikge1xuICAgICAgYXdhaXQgY2xpZW50LnN0b3AoKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgICB9XG4gICAgaWYgKGxpbmUgPT09IFwiY2xpZW50c1wiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBsaXN0Q2xpZW50cyhjcmVkcywgZmFsc2UpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IocGMucmVkKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBTdHJpbmcoZXJyKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZXBseU1hdGNoID0gbGluZS5tYXRjaCgvXnJlcGx5XFxzKyguKykkLyk7XG4gICAgaWYgKHJlcGx5TWF0Y2gpIHtcbiAgICAgIGlmICghbGFzdFNlbmRlcikgeyBjb25zb2xlLmxvZyhwYy55ZWxsb3coXCJubyBsYXN0IHNlbmRlciB0byByZXBseSB0b1wiKSk7IHJldHVybjsgfVxuICAgICAgYXdhaXQgcHVibGlzaChjbGllbnQsIGNyZWRzLCBsYXN0U2VuZGVyLCByZXBseU1hdGNoWzFdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VuZE1hdGNoID0gbGluZS5tYXRjaCgvXnNlbmRcXHMrKFxcUyspXFxzKyguKykkLyk7XG4gICAgaWYgKHNlbmRNYXRjaCkge1xuICAgICAgYXdhaXQgcHVibGlzaChjbGllbnQsIGNyZWRzLCBzZW5kTWF0Y2hbMV0sIHNlbmRNYXRjaFsyXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHBjLnllbGxvdyhcInVua25vd24gY29tbWFuZCBcdTIwMTQgdHJ5ICdoZWxwJ1wiKSk7XG4gIH0pO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZTxudW1iZXI+KChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3Qgc2h1dGRvd24gPSBhc3luYyAoc2lnOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHBjLmRpbShgXFxuJHtzaWd9LCBzdG9wcGluZ2ApKTtcbiAgICAgIHRyeSB7IGF3YWl0IGNsaWVudC5zdG9wKCk7IH0gY2F0Y2ggeyAvKiAqLyB9XG4gICAgICByZXNvbHZlKDApO1xuICAgIH07XG4gICAgcHJvY2Vzcy5vbihcIlNJR0lOVFwiLCAoKSA9PiBzaHV0ZG93bihcIlNJR0lOVFwiKSk7XG4gICAgcHJvY2Vzcy5vbihcIlNJR1RFUk1cIiwgKCkgPT4gc2h1dGRvd24oXCJTSUdURVJNXCIpKTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHB1Ymxpc2goY2xpZW50OiBXZWJQdWJTdWJDbGllbnQsIGNyZWRzOiBDcmVkZW50aWFscywgdGFyZ2V0SWRlbnRpZmllcjogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0SWRlbnRpZmllciA9PT0gXCIqXCIgPyBudWxsIDogdGFyZ2V0SWRlbnRpZmllcjtcbiAgYXdhaXQgY2xpZW50LnNlbmRFdmVudChcInB1Ymxpc2hcIiwge1xuICAgIHRvcGljX2lkZW50aWZpZXI6IGNyZWRzLnRvcGljX2lkZW50aWZpZXIsXG4gICAgbWVzc2FnZV90eXBlOiBcImNoYXQudGV4dFwiLFxuICAgIHBheWxvYWQ6IHRleHQsXG4gICAgdGFyZ2V0X2lkZW50aWZpZXI6IHRhcmdldCxcbiAgfSwgXCJqc29uXCIsIHsgZmlyZUFuZEZvcmdldDogdHJ1ZSB9KTtcbiAgY29uc29sZS5sb2cocGMuZ3JlZW4oYHNlbnQgdG8gJHt0YXJnZXRJZGVudGlmaWVyfTogJHt0ZXh0fWApKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY21kQ2xpZW50cyhhcmdzOiBzdHJpbmdbXSk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGNvbnN0IGNyZWRzID0gcmVxdWlyZUNyZWRzKCk7XG4gIGF3YWl0IGxpc3RDbGllbnRzKGNyZWRzLCBhcmdzLmluY2x1ZGVzKFwiLS1vbmxpbmVcIikpO1xuICByZXR1cm4gMDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbGlzdENsaWVudHMoY3JlZHM6IENyZWRlbnRpYWxzLCBvbmxpbmVPbmx5OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmICghY3JlZHMudG9waWNfaWRlbnRpZmllcikgdGhyb3cgbmV3IEVycm9yKFwibm8gdHJhbnNwb3J0IGFzc29jaWF0ZWQgd2l0aCBjcmVkZW50aWFsc1wiKTtcblxuICBjb25zdCBjbGllbnQgPSBhdXRoZWRDbGllbnQoY3JlZHMpO1xuICBsZXQgcmVzdWx0OiB7IGNsaWVudHM6IEFycmF5PHsgaWRlbnRpZmllcjogc3RyaW5nOyBuYW1lPzogc3RyaW5nOyBraW5kOiBzdHJpbmc7IG9ubGluZTogYm9vbGVhbiB9PiB9IHwgbnVsbCA9IG51bGw7XG4gIGNsaWVudC5vbihcInNlcnZlci1tZXNzYWdlXCIsIChlKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGUubWVzc2FnZS5kYXRhIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkO1xuICAgIGlmIChkYXRhPy50eXBlID09PSBcImNsaWVudHMubGlzdF9yZXN1bHRcIikge1xuICAgICAgcmVzdWx0ID0gZGF0YSBhcyBhbnk7XG4gICAgfVxuICB9KTtcbiAgYXdhaXQgY2xpZW50LnN0YXJ0KCk7XG4gIGF3YWl0IGNsaWVudC5zZW5kRXZlbnQoXCJjbGllbnRzX2xpc3RcIiwgeyB0b3BpY19pZGVudGlmaWVyOiBjcmVkcy50b3BpY19pZGVudGlmaWVyIH0sIFwianNvblwiLCB7IGZpcmVBbmRGb3JnZXQ6IHRydWUgfSk7XG4gIGNvbnN0IHN0YXJ0ZWRBdCA9IERhdGUubm93KCk7XG4gIHdoaWxlICghcmVzdWx0ICYmIERhdGUubm93KCkgLSBzdGFydGVkQXQgPCAxMF8wMDApIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCAxMDApKTtcbiAgfVxuICBhd2FpdCBjbGllbnQuc3RvcCgpO1xuICBpZiAoIXJlc3VsdCkgdGhyb3cgbmV3IEVycm9yKFwidGltZW91dCB3YWl0aW5nIGZvciBjbGllbnRzIGxpc3RcIik7XG5cbiAgY29uc3QgZW50cmllcyA9IG9ubGluZU9ubHkgPyByZXN1bHQuY2xpZW50cy5maWx0ZXIoKGMpID0+IGMub25saW5lKSA6IHJlc3VsdC5jbGllbnRzO1xuICBmb3IgKGNvbnN0IGMgb2YgZW50cmllcykge1xuICAgIGNvbnN0IGRvdCA9IGMub25saW5lID8gcGMuZ3JlZW4oXCJcdTI1Q0ZcIikgOiBwYy5kaW0oXCJcdTI1Q0JcIik7XG4gICAgY29uc29sZS5sb2coYCR7ZG90fSAke2MuaWRlbnRpZmllcn0ke2MubmFtZSA/IGAgKCR7Yy5uYW1lfSlgIDogXCJcIn0gXHUyMDE0ICR7Yy5raW5kfWApO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNtZFNlbmQoYXJnczogc3RyaW5nW10pOiBQcm9taXNlPG51bWJlcj4ge1xuICBjb25zdCBjcmVkcyA9IHJlcXVpcmVDcmVkcygpO1xuICBjb25zdCBbdGFyZ2V0LCAuLi5yZXN0XSA9IGFyZ3M7XG4gIGlmICghdGFyZ2V0IHx8IHJlc3QubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc29sZS5lcnJvcihwYy5yZWQoXCJ1c2FnZTogYnZnLWRlYW1vbiBzZW5kIDx0YXJnZXQtaWRlbnRpZmllcnwqPiA8dGV4dD5cIikpO1xuICAgIHJldHVybiAyO1xuICB9XG4gIGNvbnN0IHRleHQgPSByZXN0LmpvaW4oXCIgXCIpO1xuICBjb25zdCBjbGllbnQgPSBhdXRoZWRDbGllbnQoY3JlZHMpO1xuICBhd2FpdCBjbGllbnQuc3RhcnQoKTtcbiAgYXdhaXQgcHVibGlzaChjbGllbnQsIGNyZWRzLCB0YXJnZXQsIHRleHQpO1xuICBhd2FpdCBjbGllbnQuc3RvcCgpO1xuICByZXR1cm4gMDtcbn1cblxubWFpbigpLnRoZW4oKGNvZGUpID0+IHByb2Nlc3MuZXhpdChjb2RlKSk7XG4iLCAiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmludGVyZmFjZSBXaW5kb3cge1xuICBkb2N1bWVudDogdW5rbm93bjtcbn1cblxuaW50ZXJmYWNlIERlZGljYXRlZFdvcmtlckdsb2JhbFNjb3BlIHtcbiAgY29uc3RydWN0b3I6IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gIH07XG5cbiAgaW1wb3J0U2NyaXB0czogKC4uLnBhdGhzOiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIE5hdmlnYXRvciB7XG4gIHByb2R1Y3Q6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIERlbm9HbG9iYWwge1xuICB2ZXJzaW9uOiB7XG4gICAgZGVubzogc3RyaW5nO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgQnVuR2xvYmFsIHtcbiAgdmVyc2lvbjogc3RyaW5nO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGF6dXJlL2F6dXJlLXNkay90cy1uby13aW5kb3dcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBXaW5kb3c7XG5kZWNsYXJlIGNvbnN0IHNlbGY6IERlZGljYXRlZFdvcmtlckdsb2JhbFNjb3BlO1xuZGVjbGFyZSBjb25zdCBEZW5vOiBEZW5vR2xvYmFsO1xuZGVjbGFyZSBjb25zdCBCdW46IEJ1bkdsb2JhbDtcbmRlY2xhcmUgY29uc3QgbmF2aWdhdG9yOiBOYXZpZ2F0b3I7XG5cbi8qKlxuICogQSBjb25zdGFudCB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBlbnZpcm9ubWVudCB0aGUgY29kZSBpcyBydW5uaW5nIGlzIGEgV2ViIEJyb3dzZXIuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYXp1cmUvYXp1cmUtc2RrL3RzLW5vLXdpbmRvd1xuZXhwb3J0IGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIjtcblxuLyoqXG4gKiBBIGNvbnN0YW50IHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVudmlyb25tZW50IHRoZSBjb2RlIGlzIHJ1bm5pbmcgaXMgYSBXZWIgV29ya2VyLlxuICovXG5leHBvcnQgY29uc3QgaXNXZWJXb3JrZXIgPVxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJlxuICB0eXBlb2Ygc2VsZj8uaW1wb3J0U2NyaXB0cyA9PT0gXCJmdW5jdGlvblwiICYmXG4gIChzZWxmLmNvbnN0cnVjdG9yPy5uYW1lID09PSBcIkRlZGljYXRlZFdvcmtlckdsb2JhbFNjb3BlXCIgfHxcbiAgICBzZWxmLmNvbnN0cnVjdG9yPy5uYW1lID09PSBcIlNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZVwiIHx8XG4gICAgc2VsZi5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gXCJTaGFyZWRXb3JrZXJHbG9iYWxTY29wZVwiKTtcblxuLyoqXG4gKiBBIGNvbnN0YW50IHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVudmlyb25tZW50IHRoZSBjb2RlIGlzIHJ1bm5pbmcgaXMgRGVuby5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzRGVubyA9XG4gIHR5cGVvZiBEZW5vICE9PSBcInVuZGVmaW5lZFwiICYmXG4gIHR5cGVvZiBEZW5vLnZlcnNpb24gIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgdHlwZW9mIERlbm8udmVyc2lvbi5kZW5vICE9PSBcInVuZGVmaW5lZFwiO1xuXG4vKipcbiAqIEEgY29uc3RhbnQgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZW52aXJvbm1lbnQgdGhlIGNvZGUgaXMgcnVubmluZyBpcyBCdW4uc2guXG4gKi9cbmV4cG9ydCBjb25zdCBpc0J1biA9IHR5cGVvZiBCdW4gIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIEJ1bi52ZXJzaW9uICE9PSBcInVuZGVmaW5lZFwiO1xuXG4vKipcbiAqIEEgY29uc3RhbnQgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZW52aXJvbm1lbnQgdGhlIGNvZGUgaXMgcnVubmluZyBpcyBhIE5vZGUuanMgY29tcGF0aWJsZSBlbnZpcm9ubWVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzTm9kZUxpa2UgPVxuICB0eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmXG4gIEJvb2xlYW4oZ2xvYmFsVGhpcy5wcm9jZXNzLnZlcnNpb24pICYmXG4gIEJvb2xlYW4oZ2xvYmFsVGhpcy5wcm9jZXNzLnZlcnNpb25zPy5ub2RlKTtcblxuLyoqXG4gKiBBIGNvbnN0YW50IHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVudmlyb25tZW50IHRoZSBjb2RlIGlzIHJ1bm5pbmcgaXMgTm9kZS5KUy5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzTm9kZVJ1bnRpbWUgPSBpc05vZGVMaWtlICYmICFpc0J1biAmJiAhaXNEZW5vO1xuXG4vKipcbiAqIEEgY29uc3RhbnQgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZW52aXJvbm1lbnQgdGhlIGNvZGUgaXMgcnVubmluZyBpcyBpbiBSZWFjdC1OYXRpdmUuXG4gKi9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi9tYWluL3BhY2thZ2VzL3JlYWN0LW5hdGl2ZS9MaWJyYXJpZXMvQ29yZS9zZXRVcE5hdmlnYXRvci5qc1xuZXhwb3J0IGNvbnN0IGlzUmVhY3ROYXRpdmUgPVxuICB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvcj8ucHJvZHVjdCA9PT0gXCJSZWFjdE5hdGl2ZVwiO1xuIiwgIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4vKipcbiAqIFRoaXMgZXJyb3IgaXMgdGhyb3duIHdoZW4gYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbiBoYXMgYmVlbiBhYm9ydGVkLlxuICogQ2hlY2sgZm9yIHRoaXMgZXJyb3IgYnkgdGVzdGluZyB0aGUgYG5hbWVgIHRoYXQgdGhlIG5hbWUgcHJvcGVydHkgb2YgdGhlXG4gKiBlcnJvciBtYXRjaGVzIGBcIkFib3J0RXJyb3JcImAuXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYHRzXG4gKiBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICogY29udHJvbGxlci5hYm9ydCgpO1xuICogdHJ5IHtcbiAqICAgZG9Bc3luY1dvcmsoY29udHJvbGxlci5zaWduYWwpXG4gKiB9IGNhdGNoIChlKSB7XG4gKiAgIGlmIChlLm5hbWUgPT09ICdBYm9ydEVycm9yJykge1xuICogICAgIC8vIGhhbmRsZSBhYm9ydCBlcnJvciBoZXJlLlxuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIEFib3J0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSBcIkFib3J0RXJyb3JcIjtcbiAgfVxufVxuIiwgIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBBYm9ydEVycm9yIH0gZnJvbSBcIkBhenVyZS9hYm9ydC1jb250cm9sbGVyXCI7XG5pbXBvcnQgdHlwZSB7IEFib3J0T3B0aW9ucyB9IGZyb20gXCIuL2Fib3J0ZXJVdGlscy5qc1wiO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHRoZSBjcmVhdGVBYm9ydGFibGVQcm9taXNlIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUFib3J0YWJsZVByb21pc2VPcHRpb25zIGV4dGVuZHMgQWJvcnRPcHRpb25zIHtcbiAgLyoqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGlmIHRoZSBwcm9taXNlIHdhcyBhYm9ydGVkICovXG4gIGNsZWFudXBCZWZvcmVBYm9ydD86ICgpID0+IHZvaWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhYm9ydGFibGUgcHJvbWlzZS5cbiAqIEBwYXJhbSBidWlsZFByb21pc2UgLSBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlc29sdmUgYW5kIHJlamVjdCBmdW5jdGlvbnMgYXMgcGFyYW1ldGVycy5cbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgZm9yIHRoZSBhYm9ydGFibGUgcHJvbWlzZS5cbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IGNhbiBiZSBhYm9ydGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWJvcnRhYmxlUHJvbWlzZTxUPihcbiAgYnVpbGRQcm9taXNlOiAoXG4gICAgcmVzb2x2ZTogKHZhbHVlOiBUIHwgUHJvbWlzZUxpa2U8VD4pID0+IHZvaWQsXG4gICAgcmVqZWN0OiAocmVhc29uPzogYW55KSA9PiB2b2lkLFxuICApID0+IHZvaWQsXG4gIG9wdGlvbnM/OiBDcmVhdGVBYm9ydGFibGVQcm9taXNlT3B0aW9ucyxcbik6IFByb21pc2U8VD4ge1xuICBjb25zdCB7IGNsZWFudXBCZWZvcmVBYm9ydCwgYWJvcnRTaWduYWwsIGFib3J0RXJyb3JNc2cgfSA9IG9wdGlvbnMgPz8ge307XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZnVuY3Rpb24gcmVqZWN0T25BYm9ydCgpOiB2b2lkIHtcbiAgICAgIHJlamVjdChuZXcgQWJvcnRFcnJvcihhYm9ydEVycm9yTXNnID8/IFwiVGhlIG9wZXJhdGlvbiB3YXMgYWJvcnRlZC5cIikpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgICBhYm9ydFNpZ25hbD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkFib3J0KCk6IHZvaWQge1xuICAgICAgY2xlYW51cEJlZm9yZUFib3J0Py4oKTtcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgcmVqZWN0T25BYm9ydCgpO1xuICAgIH1cbiAgICBpZiAoYWJvcnRTaWduYWw/LmFib3J0ZWQpIHtcbiAgICAgIHJldHVybiByZWplY3RPbkFib3J0KCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBidWlsZFByb21pc2UoXG4gICAgICAgICh4KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICAgICAgcmVzb2x2ZSh4KTtcbiAgICAgICAgfSxcbiAgICAgICAgKHgpID0+IHtcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgICAgICByZWplY3QoeCk7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuICAgIGFib3J0U2lnbmFsPy5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gIH0pO1xufVxuIiwgIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgdHlwZSB7IEFib3J0T3B0aW9ucyB9IGZyb20gXCIuL2Fib3J0ZXJVdGlscy5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlQWJvcnRhYmxlUHJvbWlzZSB9IGZyb20gXCIuL2NyZWF0ZUFib3J0YWJsZVByb21pc2UuanNcIjtcbmltcG9ydCB7IGdldFJhbmRvbUludGVnZXJJbmNsdXNpdmUgfSBmcm9tIFwiQHR5cGVzcGVjL3RzLWh0dHAtcnVudGltZS9pbnRlcm5hbC91dGlsXCI7XG5cbmNvbnN0IFN0YW5kYXJkQWJvcnRNZXNzYWdlID0gXCJUaGUgZGVsYXkgd2FzIGFib3J0ZWQuXCI7XG5cbi8qKlxuICogT3B0aW9ucyBmb3Igc3VwcG9ydCBhYm9ydCBmdW5jdGlvbmFsaXR5IGZvciB0aGUgZGVsYXkgbWV0aG9kXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVsYXlPcHRpb25zIGV4dGVuZHMgQWJvcnRPcHRpb25zIHt9XG5cbi8qKlxuICogQSB3cmFwcGVyIGZvciBzZXRUaW1lb3V0IHRoYXQgcmVzb2x2ZXMgYSBwcm9taXNlIGFmdGVyIHRpbWVJbk1zIG1pbGxpc2Vjb25kcy5cbiAqIEBwYXJhbSB0aW1lSW5NcyAtIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGRlbGF5ZWQuXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIGZvciBkZWxheSAtIGN1cnJlbnRseSBhYm9ydCBvcHRpb25zXG4gKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgYWZ0ZXIgdGltZUluTXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5KHRpbWVJbk1zOiBudW1iZXIsIG9wdGlvbnM/OiBEZWxheU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgbGV0IHRva2VuOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PjtcbiAgY29uc3QgeyBhYm9ydFNpZ25hbCwgYWJvcnRFcnJvck1zZyB9ID0gb3B0aW9ucyA/PyB7fTtcbiAgcmV0dXJuIGNyZWF0ZUFib3J0YWJsZVByb21pc2UoXG4gICAgKHJlc29sdmUpID0+IHtcbiAgICAgIHRva2VuID0gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lSW5Ncyk7XG4gICAgfSxcbiAgICB7XG4gICAgICBjbGVhbnVwQmVmb3JlQWJvcnQ6ICgpID0+IGNsZWFyVGltZW91dCh0b2tlbiksXG4gICAgICBhYm9ydFNpZ25hbCxcbiAgICAgIGFib3J0RXJyb3JNc2c6IGFib3J0RXJyb3JNc2cgPz8gU3RhbmRhcmRBYm9ydE1lc3NhZ2UsXG4gICAgfSxcbiAgKTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZWxheSBpbnRlcnZhbCBmb3IgcmV0cnkgYXR0ZW1wdHMgdXNpbmcgZXhwb25lbnRpYWwgZGVsYXkgd2l0aCBqaXR0ZXIuXG4gKiBAcGFyYW0gcmV0cnlBdHRlbXB0IC0gVGhlIGN1cnJlbnQgcmV0cnkgYXR0ZW1wdCBudW1iZXIuXG4gKiBAcGFyYW0gY29uZmlnIC0gVGhlIGV4cG9uZW50aWFsIHJldHJ5IGNvbmZpZ3VyYXRpb24uXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgY2FsY3VsYXRlZCByZXRyeSBkZWxheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVJldHJ5RGVsYXkoXG4gIHJldHJ5QXR0ZW1wdDogbnVtYmVyLFxuICBjb25maWc6IHtcbiAgICByZXRyeURlbGF5SW5NczogbnVtYmVyO1xuICAgIG1heFJldHJ5RGVsYXlJbk1zOiBudW1iZXI7XG4gIH0sXG4pOiB7IHJldHJ5QWZ0ZXJJbk1zOiBudW1iZXIgfSB7XG4gIC8vIEV4cG9uZW50aWFsbHkgaW5jcmVhc2UgdGhlIGRlbGF5IGVhY2ggdGltZVxuICBjb25zdCBleHBvbmVudGlhbERlbGF5ID0gY29uZmlnLnJldHJ5RGVsYXlJbk1zICogTWF0aC5wb3coMiwgcmV0cnlBdHRlbXB0KTtcblxuICAvLyBEb24ndCBsZXQgdGhlIGRlbGF5IGV4Y2VlZCB0aGUgbWF4aW11bVxuICBjb25zdCBjbGFtcGVkRGVsYXkgPSBNYXRoLm1pbihjb25maWcubWF4UmV0cnlEZWxheUluTXMsIGV4cG9uZW50aWFsRGVsYXkpO1xuXG4gIC8vIEFsbG93IHRoZSBmaW5hbCB2YWx1ZSB0byBoYXZlIHNvbWUgXCJqaXR0ZXJcIiAod2l0aGluIDUwJSBvZiB0aGUgZGVsYXkgc2l6ZSkgc29cbiAgLy8gdGhhdCByZXRyaWVzIGFjcm9zcyBtdWx0aXBsZSBjbGllbnRzIGRvbid0IG9jY3VyIHNpbXVsdGFuZW91c2x5LlxuICBjb25zdCByZXRyeUFmdGVySW5NcyA9IGNsYW1wZWREZWxheSAvIDIgKyBnZXRSYW5kb21JbnRlZ2VySW5jbHVzaXZlKDAsIGNsYW1wZWREZWxheSAvIDIpO1xuXG4gIHJldHVybiB7IHJldHJ5QWZ0ZXJJbk1zIH07XG59XG4iLCAiaW1wb3J0IHsgZGVsYXkgfSBmcm9tIFwiQGF6dXJlL2NvcmUtdXRpbFwiO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCI7XG5pbXBvcnQgeyBJbnZvY2F0aW9uRXJyb3IsIFNlbmRNZXNzYWdlRXJyb3IgfSBmcm9tIFwiLi9lcnJvcnMvaW5kZXguanNcIjtcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gXCIuL2xvZ2dlci5qc1wiO1xuaW1wb3J0IHsgV2ViUHViU3ViSnNvblJlbGlhYmxlUHJvdG9jb2wgfSBmcm9tIFwiLi9wcm90b2NvbHMvaW5kZXguanNcIjtcbmltcG9ydCB7IFdlYlNvY2tldENsaWVudEZhY3RvcnkgfSBmcm9tIFwiLi93ZWJzb2NrZXQvd2Vic29ja2V0Q2xpZW50LmpzXCI7XG5pbXBvcnQgeyBBY2tNYW5hZ2VyIH0gZnJvbSBcIi4vYWNrTWFuYWdlci5qc1wiO1xuaW1wb3J0IHsgSW52b2NhdGlvbk1hbmFnZXIgfSBmcm9tIFwiLi9pbnZvY2F0aW9uTWFuYWdlci5qc1wiO1xudmFyIFdlYlB1YlN1YkNsaWVudFN0YXRlID0gLyogQF9fUFVSRV9fICovICgoV2ViUHViU3ViQ2xpZW50U3RhdGUyKSA9PiB7XG4gIFdlYlB1YlN1YkNsaWVudFN0YXRlMltcIlN0b3BwZWRcIl0gPSBcIlN0b3BwZWRcIjtcbiAgV2ViUHViU3ViQ2xpZW50U3RhdGUyW1wiRGlzY29ubmVjdGVkXCJdID0gXCJEaXNjb25uZWN0ZWRcIjtcbiAgV2ViUHViU3ViQ2xpZW50U3RhdGUyW1wiQ29ubmVjdGluZ1wiXSA9IFwiQ29ubmVjdGluZ1wiO1xuICBXZWJQdWJTdWJDbGllbnRTdGF0ZTJbXCJDb25uZWN0ZWRcIl0gPSBcIkNvbm5lY3RlZFwiO1xuICBXZWJQdWJTdWJDbGllbnRTdGF0ZTJbXCJSZWNvdmVyaW5nXCJdID0gXCJSZWNvdmVyaW5nXCI7XG4gIHJldHVybiBXZWJQdWJTdWJDbGllbnRTdGF0ZTI7XG59KShXZWJQdWJTdWJDbGllbnRTdGF0ZSB8fCB7fSk7XG5jbGFzcyBXZWJQdWJTdWJDbGllbnQge1xuICBfcHJvdG9jb2w7XG4gIF9jcmVkZW50aWFsO1xuICBfb3B0aW9ucztcbiAgX2dyb3VwTWFwO1xuICBfYWNrTWFuYWdlcjtcbiAgX2ludm9jYXRpb25NYW5hZ2VyO1xuICBfc2VxdWVuY2VJZDtcbiAgX21lc3NhZ2VSZXRyeVBvbGljeTtcbiAgX3JlY29ubmVjdFJldHJ5UG9saWN5O1xuICBfcXVpY2tTZXF1ZW5jZUFja0RpZmYgPSAzMDA7XG4gIC8vIFRoZSB0aW1lb3V0IGZvciBrZWVwIGFsaXZlXG4gIF9rZWVwQWxpdmVUaW1lb3V0SW5NcztcbiAgLy8gVGhlIGludGVydmFsIGF0IHdoaWNoIHRvIHNlbmQga2VlcC1hbGl2ZSBwaW5nIG1lc3NhZ2VzIHRvIHRoZSBydW50aW1lXG4gIF9rZWVwQWxpdmVJbnRlcnZhbEluTXM7XG4gIF9lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBfc3RhdGU7XG4gIF9pc1N0b3BwaW5nID0gZmFsc2U7XG4gIF9waW5nS2VlcGFsaXZlVGFzaztcbiAgX3RpbWVvdXRNb25pdG9yVGFzaztcbiAgLy8gY29ubmVjdGlvbiBsaWZldGltZVxuICBfd3NDbGllbnQ7XG4gIF91cmk7XG4gIF9sYXN0Q2xvc2VFdmVudDtcbiAgX2xhc3REaXNjb25uZWN0ZWRNZXNzYWdlO1xuICBfY29ubmVjdGlvbklkO1xuICBfcmVjb25uZWN0aW9uVG9rZW47XG4gIF9pc0luaXRpYWxDb25uZWN0ZWQgPSBmYWxzZTtcbiAgX3NlcXVlbmNlQWNrVGFzaztcbiAgX2xhc3RNZXNzYWdlUmVjZWl2ZWQgPSBEYXRlLm5vdygpO1xuICBjb25zdHJ1Y3RvcihjcmVkZW50aWFsLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBjcmVkZW50aWFsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aGlzLl9jcmVkZW50aWFsID0geyBnZXRDbGllbnRBY2Nlc3NVcmw6IGNyZWRlbnRpYWwgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3JlZGVudGlhbCA9IGNyZWRlbnRpYWw7XG4gICAgfVxuICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5fYnVpbGREZWZhdWx0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLl9tZXNzYWdlUmV0cnlQb2xpY3kgPSBuZXcgUmV0cnlQb2xpY3kodGhpcy5fb3B0aW9ucy5tZXNzYWdlUmV0cnlPcHRpb25zKTtcbiAgICB0aGlzLl9yZWNvbm5lY3RSZXRyeVBvbGljeSA9IG5ldyBSZXRyeVBvbGljeSh0aGlzLl9vcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucyk7XG4gICAgdGhpcy5fcHJvdG9jb2wgPSB0aGlzLl9vcHRpb25zLnByb3RvY29sO1xuICAgIHRoaXMuX2dyb3VwTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICB0aGlzLl9hY2tNYW5hZ2VyID0gbmV3IEFja01hbmFnZXIoKTtcbiAgICB0aGlzLl9pbnZvY2F0aW9uTWFuYWdlciA9IG5ldyBJbnZvY2F0aW9uTWFuYWdlcigpO1xuICAgIHRoaXMuX3NlcXVlbmNlSWQgPSBuZXcgU2VxdWVuY2VJZCgpO1xuICAgIHRoaXMuX2tlZXBBbGl2ZVRpbWVvdXRJbk1zID0gdGhpcy5fb3B0aW9ucy5rZWVwQWxpdmVUaW1lb3V0SW5NcyA/PyAxMmU0O1xuICAgIHRoaXMuX2tlZXBBbGl2ZUludGVydmFsSW5NcyA9IHRoaXMuX29wdGlvbnMua2VlcEFsaXZlSW50ZXJ2YWxJbk1zID8/IDJlNDtcbiAgICB0aGlzLl9zdGF0ZSA9IFwiU3RvcHBlZFwiIC8qIFN0b3BwZWQgKi87XG4gIH1cbiAgLyoqXG4gICAqIFN0YXJ0IHRvIHN0YXJ0IHRvIHRoZSBzZXJ2aWNlLlxuICAgKiBAcGFyYW0gYWJvcnRTaWduYWwgLSBUaGUgYWJvcnQgc2lnbmFsXG4gICAqL1xuICBhc3luYyBzdGFydChvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuX2lzU3RvcHBpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHN0YXJ0IGEgY2xpZW50IGR1cmluZyBzdG9wcGluZ1wiKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0YXRlICE9PSBcIlN0b3BwZWRcIiAvKiBTdG9wcGVkICovKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDbGllbnQgY2FuIGJlIG9ubHkgc3RhcnRlZCB3aGVuIGl0J3MgU3RvcHBlZFwiKTtcbiAgICB9XG4gICAgbGV0IGFib3J0U2lnbmFsO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBhYm9ydFNpZ25hbCA9IG9wdGlvbnMuYWJvcnRTaWduYWw7XG4gICAgfVxuICAgIGlmICghdGhpcy5fcGluZ0tlZXBhbGl2ZVRhc2sgJiYgdGhpcy5fa2VlcEFsaXZlSW50ZXJ2YWxJbk1zID4gMCkge1xuICAgICAgdGhpcy5fcGluZ0tlZXBhbGl2ZVRhc2sgPSB0aGlzLl9nZXRQaW5nS2VlcGFsaXZlVGFzaygpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3RpbWVvdXRNb25pdG9yVGFzayAmJiB0aGlzLl9rZWVwQWxpdmVUaW1lb3V0SW5NcyA+IDApIHtcbiAgICAgIHRoaXMuX3RpbWVvdXRNb25pdG9yVGFzayA9IHRoaXMuX2dldFRpbWVvdXRNb25pdG9yVGFzaygpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5fc3RhcnRDb3JlKGFib3J0U2lnbmFsKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2NoYW5nZVN0YXRlKFwiU3RvcHBlZFwiIC8qIFN0b3BwZWQgKi8pO1xuICAgICAgdGhpcy5fZGlzcG9zZUtlZXBhbGl2ZVRhc2tzKCk7XG4gICAgICB0aGlzLl9pc1N0b3BwaW5nID0gZmFsc2U7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9zdGFydEZyb21SZXN0YXJ0aW5nKGFib3J0U2lnbmFsKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlICE9PSBcIkRpc2Nvbm5lY3RlZFwiIC8qIERpc2Nvbm5lY3RlZCAqLykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2xpZW50IGNhbiBiZSBvbmx5IHJlc3RhcnRlZCB3aGVuIGl0J3MgRGlzY29ubmVjdGVkXCIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgbG9nZ2VyLnZlcmJvc2UoXCJTdGFyaW5nIHJlY29ubmVjdGluZy5cIik7XG4gICAgICBhd2FpdCB0aGlzLl9zdGFydENvcmUoYWJvcnRTaWduYWwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fY2hhbmdlU3RhdGUoXCJEaXNjb25uZWN0ZWRcIiAvKiBEaXNjb25uZWN0ZWQgKi8pO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxuICBhc3luYyBfc3RhcnRDb3JlKGFib3J0U2lnbmFsKSB7XG4gICAgdGhpcy5fY2hhbmdlU3RhdGUoXCJDb25uZWN0aW5nXCIgLyogQ29ubmVjdGluZyAqLyk7XG4gICAgbG9nZ2VyLmluZm8oXCJTdGFyaW5nIGEgbmV3IGNvbm5lY3Rpb25cIik7XG4gICAgdGhpcy5fc2VxdWVuY2VJZC5yZXNldCgpO1xuICAgIHRoaXMuX2lzSW5pdGlhbENvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2xhc3RDbG9zZUV2ZW50ID0gdm9pZCAwO1xuICAgIHRoaXMuX2xhc3REaXNjb25uZWN0ZWRNZXNzYWdlID0gdm9pZCAwO1xuICAgIHRoaXMuX2Nvbm5lY3Rpb25JZCA9IHZvaWQgMDtcbiAgICB0aGlzLl9yZWNvbm5lY3Rpb25Ub2tlbiA9IHZvaWQgMDtcbiAgICB0aGlzLl91cmkgPSB2b2lkIDA7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9jcmVkZW50aWFsLmdldENsaWVudEFjY2Vzc1VybCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhpcy5fdXJpID0gdGhpcy5fY3JlZGVudGlhbC5nZXRDbGllbnRBY2Nlc3NVcmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VyaSA9IGF3YWl0IHRoaXMuX2NyZWRlbnRpYWwuZ2V0Q2xpZW50QWNjZXNzVXJsKHtcbiAgICAgICAgYWJvcnRTaWduYWxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMuX3VyaSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVGhlIGNsaWVudEFjY2Vzc1VybCBtdXN0IGJlIGEgc3RyaW5nIGJ1dCBjdXJyZW50bHkgaXQncyAke3R5cGVvZiB0aGlzLl91cml9YFxuICAgICAgKTtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fY29ubmVjdENvcmUodGhpcy5fdXJpKTtcbiAgfVxuICAvKipcbiAgICogU3RvcCB0aGUgY2xpZW50LlxuICAgKi9cbiAgc3RvcCgpIHtcbiAgICBpZiAodGhpcy5fc3RhdGUgPT09IFwiU3RvcHBlZFwiIC8qIFN0b3BwZWQgKi8gfHwgdGhpcy5faXNTdG9wcGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9pc1N0b3BwaW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5fd3NDbGllbnQgJiYgdGhpcy5fd3NDbGllbnQuaXNPcGVuKCkpIHtcbiAgICAgIHRoaXMuX3dzQ2xpZW50LmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2lzU3RvcHBpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fZGlzcG9zZUtlZXBhbGl2ZVRhc2tzKCk7XG4gIH1cbiAgX2Rpc3Bvc2VLZWVwYWxpdmVUYXNrcygpIHtcbiAgICBpZiAodGhpcy5fcGluZ0tlZXBhbGl2ZVRhc2spIHtcbiAgICAgIHRoaXMuX3BpbmdLZWVwYWxpdmVUYXNrLmFib3J0KCk7XG4gICAgICB0aGlzLl9waW5nS2VlcGFsaXZlVGFzayA9IHZvaWQgMDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RpbWVvdXRNb25pdG9yVGFzaykge1xuICAgICAgdGhpcy5fdGltZW91dE1vbml0b3JUYXNrLmFib3J0KCk7XG4gICAgICB0aGlzLl90aW1lb3V0TW9uaXRvclRhc2sgPSB2b2lkIDA7XG4gICAgfVxuICB9XG4gIG9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHRoaXMuX2VtaXR0ZXIub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxuICBvZmYoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5fZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9XG4gIF9lbWl0RXZlbnQoZXZlbnQsIGFyZ3MpIHtcbiAgICB0aGlzLl9lbWl0dGVyLmVtaXQoZXZlbnQsIGFyZ3MpO1xuICB9XG4gIC8qKlxuICAgKiBTZW5kIGN1c3RvbSBldmVudCB0byBzZXJ2ZXIuXG4gICAqIEBwYXJhbSBldmVudE5hbWUgLSBUaGUgZXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gY29udGVudCAtIFRoZSBkYXRhIGNvbnRlbnRcbiAgICogQHBhcmFtIGRhdGFUeXBlIC0gVGhlIGRhdGEgdHlwZVxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zXG4gICAqIEBwYXJhbSBhYm9ydFNpZ25hbCAtIFRoZSBhYm9ydCBzaWduYWxcbiAgICovXG4gIGFzeW5jIHNlbmRFdmVudChldmVudE5hbWUsIGNvbnRlbnQsIGRhdGFUeXBlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZXJhdGlvbkV4ZWN1dGVXaXRoUmV0cnkoXG4gICAgICAoKSA9PiB0aGlzLl9zZW5kRXZlbnRBdHRlbXB0KGV2ZW50TmFtZSwgY29udGVudCwgZGF0YVR5cGUsIG9wdGlvbnMpLFxuICAgICAgb3B0aW9ucz8uYWJvcnRTaWduYWxcbiAgICApO1xuICB9XG4gIGFzeW5jIF9zZW5kRXZlbnRBdHRlbXB0KGV2ZW50TmFtZSwgY29udGVudCwgZGF0YVR5cGUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBmaXJlQW5kRm9yZ2V0ID0gb3B0aW9ucz8uZmlyZUFuZEZvcmdldCA/PyBmYWxzZTtcbiAgICBpZiAoIWZpcmVBbmRGb3JnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZW5kTWVzc2FnZVdpdGhBY2tJZChcbiAgICAgICAgKGlkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtpbmQ6IFwic2VuZEV2ZW50XCIsXG4gICAgICAgICAgICBkYXRhVHlwZSxcbiAgICAgICAgICAgIGRhdGE6IGNvbnRlbnQsXG4gICAgICAgICAgICBhY2tJZDogaWQsXG4gICAgICAgICAgICBldmVudDogZXZlbnROYW1lXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucz8uYWNrSWQsXG4gICAgICAgIG9wdGlvbnM/LmFib3J0U2lnbmFsXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAga2luZDogXCJzZW5kRXZlbnRcIixcbiAgICAgIGRhdGFUeXBlLFxuICAgICAgZGF0YTogY29udGVudCxcbiAgICAgIGV2ZW50OiBldmVudE5hbWVcbiAgICB9O1xuICAgIGF3YWl0IHRoaXMuX3NlbmRNZXNzYWdlKG1lc3NhZ2UsIG9wdGlvbnM/LmFib3J0U2lnbmFsKTtcbiAgICByZXR1cm4geyBpc0R1cGxpY2F0ZWQ6IGZhbHNlIH07XG4gIH1cbiAgYXN5bmMgX2ludm9rZUV2ZW50QXR0ZW1wdChldmVudE5hbWUsIGNvbnRlbnQsIGRhdGFUeXBlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgaW52b2tlT3B0aW9ucyA9IG9wdGlvbnMgPz8ge307XG4gICAgY29uc3QgeyBpbnZvY2F0aW9uSWQsIHdhaXQgfSA9IHRoaXMuX2ludm9jYXRpb25NYW5hZ2VyLnJlZ2lzdGVySW52b2NhdGlvbihcbiAgICAgIGludm9rZU9wdGlvbnMuaW52b2NhdGlvbklkXG4gICAgKTtcbiAgICBjb25zdCBpbnZva2VNZXNzYWdlID0ge1xuICAgICAga2luZDogXCJpbnZva2VcIixcbiAgICAgIGludm9jYXRpb25JZCxcbiAgICAgIHRhcmdldDogXCJldmVudFwiLFxuICAgICAgZXZlbnQ6IGV2ZW50TmFtZSxcbiAgICAgIGRhdGFUeXBlLFxuICAgICAgZGF0YTogY29udGVudFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2VQcm9taXNlID0gd2FpdCh7XG4gICAgICBhYm9ydFNpZ25hbDogaW52b2tlT3B0aW9ucy5hYm9ydFNpZ25hbFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLl9zZW5kTWVzc2FnZShpbnZva2VNZXNzYWdlLCBpbnZva2VPcHRpb25zLmFib3J0U2lnbmFsKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnN0IGludm9jYXRpb25FcnJvciA9IGVyciBpbnN0YW5jZW9mIEludm9jYXRpb25FcnJvciA/IGVyciA6IG5ldyBJbnZvY2F0aW9uRXJyb3IoXG4gICAgICAgIGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcIkZhaWxlZCB0byBzZW5kIGludm9jYXRpb24gbWVzc2FnZS5cIixcbiAgICAgICAge1xuICAgICAgICAgIGludm9jYXRpb25JZFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgdGhpcy5faW52b2NhdGlvbk1hbmFnZXIucmVqZWN0SW52b2NhdGlvbihpbnZvY2F0aW9uSWQsIGludm9jYXRpb25FcnJvcik7XG4gICAgICB2b2lkIHJlc3BvbnNlUHJvbWlzZS5jYXRjaCgoKSA9PiB7XG4gICAgICB9KTtcbiAgICAgIHRocm93IGludm9jYXRpb25FcnJvcjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2VQcm9taXNlO1xuICAgICAgcmV0dXJuIHRoaXMuX21hcEludm9rZVJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnN0IHNob3VsZENhbmNlbCA9IGVyciBpbnN0YW5jZW9mIEludm9jYXRpb25FcnJvciAmJiBlcnIuZXJyb3JEZXRhaWwgPT0gbnVsbCB8fCBpbnZva2VPcHRpb25zLmFib3J0U2lnbmFsPy5hYm9ydGVkID09PSB0cnVlO1xuICAgICAgaWYgKHNob3VsZENhbmNlbCkge1xuICAgICAgICBhd2FpdCB0aGlzLl9zZW5kQ2FuY2VsSW52b2NhdGlvbihpbnZvY2F0aW9uSWQpLmNhdGNoKCgpID0+IHtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX2ludm9jYXRpb25NYW5hZ2VyLmRpc2NhcmQoaW52b2NhdGlvbklkKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEludm9rZSBhbiB1cHN0cmVhbSBldmVudCBhbmQgd2FpdCBmb3IgdGhlIGNvcnJlbGF0ZWQgcmVzcG9uc2UuXG4gICAqIEBwYXJhbSBldmVudE5hbWUgLSBUaGUgZXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gY29udGVudCAtIFRoZSBwYXlsb2FkXG4gICAqIEBwYXJhbSBkYXRhVHlwZSAtIFRoZSBwYXlsb2FkIHR5cGVcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBJbnZva2Ugb3B0aW9uc1xuICAgKi9cbiAgYXN5bmMgaW52b2tlRXZlbnQoZXZlbnROYW1lLCBjb250ZW50LCBkYXRhVHlwZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9vcGVyYXRpb25FeGVjdXRlV2l0aFJldHJ5KFxuICAgICAgKCkgPT4gdGhpcy5faW52b2tlRXZlbnRBdHRlbXB0KGV2ZW50TmFtZSwgY29udGVudCwgZGF0YVR5cGUsIG9wdGlvbnMpLFxuICAgICAgb3B0aW9ucz8uYWJvcnRTaWduYWxcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBKb2luIHRoZSBjbGllbnQgdG8gZ3JvdXBcbiAgICogQHBhcmFtIGdyb3VwTmFtZSAtIFRoZSBncm91cCBuYW1lXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIGpvaW4gZ3JvdXAgb3B0aW9uc1xuICAgKi9cbiAgYXN5bmMgam9pbkdyb3VwKGdyb3VwTmFtZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9vcGVyYXRpb25FeGVjdXRlV2l0aFJldHJ5KFxuICAgICAgKCkgPT4gdGhpcy5fam9pbkdyb3VwQXR0ZW1wdChncm91cE5hbWUsIG9wdGlvbnMpLFxuICAgICAgb3B0aW9ucz8uYWJvcnRTaWduYWxcbiAgICApO1xuICB9XG4gIGFzeW5jIF9qb2luR3JvdXBBdHRlbXB0KGdyb3VwTmFtZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGdyb3VwID0gdGhpcy5fZ2V0T3JBZGRHcm91cChncm91cE5hbWUpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX2pvaW5Hcm91cENvcmUoZ3JvdXBOYW1lLCBvcHRpb25zKTtcbiAgICBncm91cC5pc0pvaW5lZCA9IHRydWU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBhc3luYyBfam9pbkdyb3VwQ29yZShncm91cE5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VuZE1lc3NhZ2VXaXRoQWNrSWQoXG4gICAgICAoaWQpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBncm91cDogZ3JvdXBOYW1lLFxuICAgICAgICAgIGFja0lkOiBpZCxcbiAgICAgICAgICBraW5kOiBcImpvaW5Hcm91cFwiXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgb3B0aW9ucz8uYWNrSWQsXG4gICAgICBvcHRpb25zPy5hYm9ydFNpZ25hbFxuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIExlYXZlIHRoZSBjbGllbnQgZnJvbSBncm91cFxuICAgKiBAcGFyYW0gZ3JvdXBOYW1lIC0gVGhlIGdyb3VwIG5hbWVcbiAgICogQHBhcmFtIGFja0lkIC0gVGhlIG9wdGlvbmFsIGFja0lkLiBJZiBub3Qgc3BlY2lmaWVkLCBjbGllbnQgd2lsbCBnZW5lcmF0ZSBvbmUuXG4gICAqIEBwYXJhbSBhYm9ydFNpZ25hbCAtIFRoZSBhYm9ydCBzaWduYWxcbiAgICovXG4gIGFzeW5jIGxlYXZlR3JvdXAoZ3JvdXBOYW1lLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZXJhdGlvbkV4ZWN1dGVXaXRoUmV0cnkoXG4gICAgICAoKSA9PiB0aGlzLl9sZWF2ZUdyb3VwQXR0ZW1wdChncm91cE5hbWUsIG9wdGlvbnMpLFxuICAgICAgb3B0aW9ucz8uYWJvcnRTaWduYWxcbiAgICApO1xuICB9XG4gIGFzeW5jIF9sZWF2ZUdyb3VwQXR0ZW1wdChncm91cE5hbWUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBncm91cCA9IHRoaXMuX2dldE9yQWRkR3JvdXAoZ3JvdXBOYW1lKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9zZW5kTWVzc2FnZVdpdGhBY2tJZChcbiAgICAgIChpZCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGdyb3VwOiBncm91cE5hbWUsXG4gICAgICAgICAgYWNrSWQ6IGlkLFxuICAgICAgICAgIGtpbmQ6IFwibGVhdmVHcm91cFwiXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgb3B0aW9ucz8uYWNrSWQsXG4gICAgICBvcHRpb25zPy5hYm9ydFNpZ25hbFxuICAgICk7XG4gICAgZ3JvdXAuaXNKb2luZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIC8qKlxuICAgKiBTZW5kIG1lc3NhZ2UgdG8gZ3JvdXAuXG4gICAqIEBwYXJhbSBncm91cE5hbWUgLSBUaGUgZ3JvdXAgbmFtZVxuICAgKiBAcGFyYW0gY29udGVudCAtIFRoZSBkYXRhIGNvbnRlbnRcbiAgICogQHBhcmFtIGRhdGFUeXBlIC0gVGhlIGRhdGEgdHlwZVxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zXG4gICAqIEBwYXJhbSBhYm9ydFNpZ25hbCAtIFRoZSBhYm9ydCBzaWduYWxcbiAgICovXG4gIGFzeW5jIHNlbmRUb0dyb3VwKGdyb3VwTmFtZSwgY29udGVudCwgZGF0YVR5cGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uRXhlY3V0ZVdpdGhSZXRyeShcbiAgICAgICgpID0+IHRoaXMuX3NlbmRUb0dyb3VwQXR0ZW1wdChncm91cE5hbWUsIGNvbnRlbnQsIGRhdGFUeXBlLCBvcHRpb25zKSxcbiAgICAgIG9wdGlvbnM/LmFib3J0U2lnbmFsXG4gICAgKTtcbiAgfVxuICBhc3luYyBfc2VuZFRvR3JvdXBBdHRlbXB0KGdyb3VwTmFtZSwgY29udGVudCwgZGF0YVR5cGUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBmaXJlQW5kRm9yZ2V0ID0gb3B0aW9ucz8uZmlyZUFuZEZvcmdldCA/PyBmYWxzZTtcbiAgICBjb25zdCBub0VjaG8gPSBvcHRpb25zPy5ub0VjaG8gPz8gZmFsc2U7XG4gICAgaWYgKCFmaXJlQW5kRm9yZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VuZE1lc3NhZ2VXaXRoQWNrSWQoXG4gICAgICAgIChpZCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBraW5kOiBcInNlbmRUb0dyb3VwXCIsXG4gICAgICAgICAgICBncm91cDogZ3JvdXBOYW1lLFxuICAgICAgICAgICAgZGF0YVR5cGUsXG4gICAgICAgICAgICBkYXRhOiBjb250ZW50LFxuICAgICAgICAgICAgYWNrSWQ6IGlkLFxuICAgICAgICAgICAgbm9FY2hvXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucz8uYWNrSWQsXG4gICAgICAgIG9wdGlvbnM/LmFib3J0U2lnbmFsXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAga2luZDogXCJzZW5kVG9Hcm91cFwiLFxuICAgICAgZ3JvdXA6IGdyb3VwTmFtZSxcbiAgICAgIGRhdGFUeXBlLFxuICAgICAgZGF0YTogY29udGVudCxcbiAgICAgIG5vRWNob1xuICAgIH07XG4gICAgYXdhaXQgdGhpcy5fc2VuZE1lc3NhZ2UobWVzc2FnZSwgb3B0aW9ucz8uYWJvcnRTaWduYWwpO1xuICAgIHJldHVybiB7IGlzRHVwbGljYXRlZDogZmFsc2UgfTtcbiAgfVxuICBfZ2V0V2ViU29ja2V0Q2xpZW50RmFjdG9yeSgpIHtcbiAgICByZXR1cm4gbmV3IFdlYlNvY2tldENsaWVudEZhY3RvcnkoKTtcbiAgfVxuICBhc3luYyBfdHJ5U2VuZFNlcXVlbmNlQWNrKCkge1xuICAgIGlmICghdGhpcy5fcHJvdG9jb2wuaXNSZWxpYWJsZVN1YlByb3RvY29sKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IFtpc1VwZGF0ZWQsIHNlcUlkXSA9IHRoaXMuX3NlcXVlbmNlSWQudHJ5R2V0U2VxdWVuY2VJZCgpO1xuICAgIGlmIChpc1VwZGF0ZWQgJiYgc2VxSWQgIT09IG51bGwgJiYgc2VxSWQgIT09IHZvaWQgMCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgICAga2luZDogXCJzZXF1ZW5jZUFja1wiLFxuICAgICAgICBzZXF1ZW5jZUlkOiBzZXFJZFxuICAgICAgfTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHRoaXMuX3NlcXVlbmNlSWQudHJ5VXBkYXRlKHNlcUlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX2Nvbm5lY3RDb3JlKHVyaSkge1xuICAgIGlmICh0aGlzLl9pc1N0b3BwaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBzdGFydCBhIGNsaWVudCBkdXJpbmcgc3RvcHBpbmdcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl93c0NsaWVudCA9IHRoaXMuX2dldFdlYlNvY2tldENsaWVudEZhY3RvcnkoKS5jcmVhdGUoXG4gICAgICAgIHVyaSxcbiAgICAgICAgdGhpcy5fcHJvdG9jb2wubmFtZVxuICAgICAgKTtcbiAgICAgIGNsaWVudC5vbm9wZW4oKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faXNTdG9wcGluZykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgVGhlIGNsaWVudCBpcyBzdG9wcGVkYCkpO1xuICAgICAgICB9XG4gICAgICAgIGxvZ2dlci52ZXJib3NlKFwiV2ViU29ja2V0IGNvbm5lY3Rpb24gaGFzIG9wZW5lZFwiKTtcbiAgICAgICAgdGhpcy5fbGFzdE1lc3NhZ2VSZWNlaXZlZCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZVN0YXRlKFwiQ29ubmVjdGVkXCIgLyogQ29ubmVjdGVkICovKTtcbiAgICAgICAgaWYgKHRoaXMuX3Byb3RvY29sLmlzUmVsaWFibGVTdWJQcm90b2NvbCkge1xuICAgICAgICAgIGlmICh0aGlzLl9zZXF1ZW5jZUFja1Rhc2sgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fc2VxdWVuY2VBY2tUYXNrLmFib3J0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3NlcXVlbmNlQWNrVGFzayA9IG5ldyBBYm9ydGFibGVUYXNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3RyeVNlbmRTZXF1ZW5jZUFjaygpO1xuICAgICAgICAgIH0sIDFlMyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgICBjbGllbnQub25lcnJvcigoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fc2VxdWVuY2VBY2tUYXNrICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLl9zZXF1ZW5jZUFja1Rhc2suYWJvcnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9KTtcbiAgICAgIGNsaWVudC5vbmNsb3NlKChjb2RlLCByZWFzb24pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBcIkNvbm5lY3RlZFwiIC8qIENvbm5lY3RlZCAqLykge1xuICAgICAgICAgIGxvZ2dlci52ZXJib3NlKFwiV2ViU29ja2V0IGNsb3NlZCBhZnRlciBvcGVuXCIpO1xuICAgICAgICAgIGlmICh0aGlzLl9zZXF1ZW5jZUFja1Rhc2sgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fc2VxdWVuY2VBY2tUYXNrLmFib3J0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxvZ2dlci5pbmZvKGBXZWJTb2NrZXQgY29ubmVjdGlvbiBjbG9zZWQuIENvZGU6ICR7Y29kZX0sIFJlYXNvbjogJHtyZWFzb259YCk7XG4gICAgICAgICAgdGhpcy5fbGFzdENsb3NlRXZlbnQgPSB7IGNvZGUsIHJlYXNvbiB9O1xuICAgICAgICAgIHRoaXMuX2hhbmRsZUNvbm5lY3Rpb25DbG9zZS5jYWxsKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvZ2dlci52ZXJib3NlKFwiV2ViU29ja2V0IGNsb3NlZCBiZWZvcmUgb3BlblwiKTtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBGYWlsZWQgdG8gc3RhcnQgV2ViU29ja2V0OiAke2NvZGV9YCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNsaWVudC5vbm1lc3NhZ2UoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlQWNrTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNEdXBsaWNhdGVkID0gbWVzc2FnZS5lcnJvciAhPSBudWxsICYmIG1lc3NhZ2UuZXJyb3IubmFtZSA9PT0gXCJEdXBsaWNhdGVcIjtcbiAgICAgICAgICBpZiAobWVzc2FnZS5zdWNjZXNzIHx8IGlzRHVwbGljYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5fYWNrTWFuYWdlci5yZXNvbHZlQWNrKG1lc3NhZ2UuYWNrSWQsIHtcbiAgICAgICAgICAgICAgYWNrSWQ6IG1lc3NhZ2UuYWNrSWQsXG4gICAgICAgICAgICAgIGlzRHVwbGljYXRlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2Fja01hbmFnZXIucmVqZWN0QWNrKFxuICAgICAgICAgICAgICBtZXNzYWdlLmFja0lkLFxuICAgICAgICAgICAgICBuZXcgU2VuZE1lc3NhZ2VFcnJvcihcIkZhaWxlZCB0byBzZW5kIG1lc3NhZ2UuXCIsIHtcbiAgICAgICAgICAgICAgICBhY2tJZDogbWVzc2FnZS5hY2tJZCxcbiAgICAgICAgICAgICAgICBlcnJvckRldGFpbDogbWVzc2FnZS5lcnJvclxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZUNvbm5lY3RlZE1lc3NhZ2UgPSBhc3luYyAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25JZCA9IG1lc3NhZ2UuY29ubmVjdGlvbklkO1xuICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGlvblRva2VuID0gbWVzc2FnZS5yZWNvbm5lY3Rpb25Ub2tlbjtcbiAgICAgICAgICBpZiAoIXRoaXMuX2lzSW5pdGlhbENvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5faXNJbml0aWFsQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmF1dG9SZWpvaW5Hcm91cHMpIHtcbiAgICAgICAgICAgICAgY29uc3QgZ3JvdXBQcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgICB0aGlzLl9ncm91cE1hcC5mb3JFYWNoKChnKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGcuaXNKb2luZWQpIHtcbiAgICAgICAgICAgICAgICAgIGdyb3VwUHJvbWlzZXMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fam9pbkdyb3VwQ29yZShnLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2FmZUVtaXRSZWpvaW5Hcm91cEZhaWxlZChnLm5hbWUsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSgpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGdyb3VwUHJvbWlzZXMpLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zYWZlRW1pdENvbm5lY3RlZChtZXNzYWdlLmNvbm5lY3Rpb25JZCwgbWVzc2FnZS51c2VySWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlRGlzY29ubmVjdGVkTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgdGhpcy5fbGFzdERpc2Nvbm5lY3RlZE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVHcm91cERhdGFNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBpZiAobWVzc2FnZS5zZXF1ZW5jZUlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLl9zZXF1ZW5jZUlkLnRyeVVwZGF0ZShtZXNzYWdlLnNlcXVlbmNlSWQpO1xuICAgICAgICAgICAgaWYgKGRpZmYgPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZmYgPiB0aGlzLl9xdWlja1NlcXVlbmNlQWNrRGlmZikge1xuICAgICAgICAgICAgICB0aGlzLl90cnlTZW5kU2VxdWVuY2VBY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fc2FmZUVtaXRHcm91cE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZVNlcnZlckRhdGFNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBpZiAobWVzc2FnZS5zZXF1ZW5jZUlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLl9zZXF1ZW5jZUlkLnRyeVVwZGF0ZShtZXNzYWdlLnNlcXVlbmNlSWQpO1xuICAgICAgICAgICAgaWYgKGRpZmYgPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZmYgPiB0aGlzLl9xdWlja1NlcXVlbmNlQWNrRGlmZikge1xuICAgICAgICAgICAgICB0aGlzLl90cnlTZW5kU2VxdWVuY2VBY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fc2FmZUVtaXRTZXJ2ZXJNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVJbnZva2VSZXNwb25zZU1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc29sdmVkID0gdGhpcy5faW52b2NhdGlvbk1hbmFnZXIucmVzb2x2ZUludm9jYXRpb24obWVzc2FnZSk7XG4gICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgbG9nZ2VyLnZlcmJvc2UoXG4gICAgICAgICAgICAgIGBSZWNlaXZlZCBpbnZva2VSZXNwb25zZSBmb3IgdW5rbm93biBpbnZvY2F0aW9uSWQ6ICR7bWVzc2FnZS5pbnZvY2F0aW9uSWR9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2xhc3RNZXNzYWdlUmVjZWl2ZWQgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgbWVzc2FnZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IGNvbnZlcnRlZERhdGE7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZERhdGEgPSBCdWZmZXIuY29uY2F0KGRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb252ZXJ0ZWREYXRhID0gZGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWVzc2FnZXMgPSB0aGlzLl9wcm90b2NvbC5wYXJzZU1lc3NhZ2VzKGNvbnZlcnRlZERhdGEpO1xuICAgICAgICAgIGlmIChtZXNzYWdlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nZ2VyLndhcm5pbmcoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBwYXJzaW5nIHRoZSBtZXNzYWdlIGZyb20gc2VydmljZVwiLCBlcnIpO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZXMpKSB7XG4gICAgICAgICAgbWVzc2FnZXMgPSBbbWVzc2FnZXNdO1xuICAgICAgICB9XG4gICAgICAgIG1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3dpdGNoIChtZXNzYWdlLmtpbmQpIHtcbiAgICAgICAgICAgICAgY2FzZSBcInBvbmdcIjoge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhc2UgXCJhY2tcIjoge1xuICAgICAgICAgICAgICAgIGhhbmRsZUFja01lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSBcImNvbm5lY3RlZFwiOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ29ubmVjdGVkTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXNlIFwiZGlzY29ubmVjdGVkXCI6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVEaXNjb25uZWN0ZWRNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhc2UgXCJncm91cERhdGFcIjoge1xuICAgICAgICAgICAgICAgIGhhbmRsZUdyb3VwRGF0YU1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSBcInNlcnZlckRhdGFcIjoge1xuICAgICAgICAgICAgICAgIGhhbmRsZVNlcnZlckRhdGFNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhc2UgXCJpbnZva2VSZXNwb25zZVwiOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlSW52b2tlUmVzcG9uc2VNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybmluZyhcbiAgICAgICAgICAgICAgYEFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGhhbmRsaW5nIHRoZSBtZXNzYWdlIHdpdGgga2luZDogJHttZXNzYWdlLmtpbmR9IGZyb20gc2VydmljZWAsXG4gICAgICAgICAgICAgIGVyclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgX2hhbmRsZUNvbm5lY3Rpb25DbG9zZUFuZE5vUmVjb3ZlcnkoKSB7XG4gICAgdGhpcy5fc3RhdGUgPSBcIkRpc2Nvbm5lY3RlZFwiIC8qIERpc2Nvbm5lY3RlZCAqLztcbiAgICB0aGlzLl9zYWZlRW1pdERpc2Nvbm5lY3RlZCh0aGlzLl9jb25uZWN0aW9uSWQsIHRoaXMuX2xhc3REaXNjb25uZWN0ZWRNZXNzYWdlKTtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5hdXRvUmVjb25uZWN0KSB7XG4gICAgICBhd2FpdCB0aGlzLl9hdXRvUmVjb25uZWN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMuX2hhbmRsZUNvbm5lY3Rpb25TdG9wcGVkKCk7XG4gICAgfVxuICB9XG4gIGFzeW5jIF9hdXRvUmVjb25uZWN0KCkge1xuICAgIGxldCBpc1N1Y2Nlc3MgPSBmYWxzZTtcbiAgICBsZXQgYXR0ZW1wdCA9IDA7XG4gICAgdHJ5IHtcbiAgICAgIHdoaWxlICghdGhpcy5faXNTdG9wcGluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX3N0YXJ0RnJvbVJlc3RhcnRpbmcoKTtcbiAgICAgICAgICBpc1N1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2dnZXIud2FybmluZyhcIkFuIGF0dGVtcHQgdG8gcmVjb25uZWN0IGNvbm5lY3Rpb24gZmFpbGVkLlwiLCBlcnIpO1xuICAgICAgICAgIGF0dGVtcHQrKztcbiAgICAgICAgICBjb25zdCBkZWxheUluTXMgPSB0aGlzLl9yZWNvbm5lY3RSZXRyeVBvbGljeS5uZXh0UmV0cnlEZWxheUluTXMoYXR0ZW1wdCk7XG4gICAgICAgICAgaWYgKGRlbGF5SW5NcyA9PSBudWxsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgbG9nZ2VyLnZlcmJvc2UoYERlbGF5IHRpbWUgZm9yIHJlY29ubmVjdCBhdHRlbXB0ICR7YXR0ZW1wdH06ICR7ZGVsYXlJbk1zfWApO1xuICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5SW5NcykuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmICghaXNTdWNjZXNzKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNvbm5lY3Rpb25TdG9wcGVkKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIF9oYW5kbGVDb25uZWN0aW9uU3RvcHBlZCgpIHtcbiAgICB0aGlzLl9pc1N0b3BwaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fc3RhdGUgPSBcIlN0b3BwZWRcIiAvKiBTdG9wcGVkICovO1xuICAgIHRoaXMuX2Rpc3Bvc2VLZWVwYWxpdmVUYXNrcygpO1xuICAgIHRoaXMuX3NhZmVFbWl0U3RvcHBlZCgpO1xuICB9XG4gIGFzeW5jIF90cnlTZW5kUGluZygpIHtcbiAgICBpZiAodGhpcy5fc3RhdGUgIT09IFwiQ29ubmVjdGVkXCIgLyogQ29ubmVjdGVkICovIHx8ICF0aGlzLl93c0NsaWVudD8uaXNPcGVuKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIGtpbmQ6IFwicGluZ1wiXG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5fc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBsb2dnZXIud2FybmluZyhcIkZhaWxlZCB0byBzZW5kIGtlZXBhbGl2ZSBtZXNzYWdlIHRvIHRoZSBzZXJ2aWNlXCIpO1xuICAgIH1cbiAgfVxuICBhc3luYyBfY2hlY2tLZWVwQWxpdmVUaW1lb3V0KCkge1xuICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gXCJDb25uZWN0ZWRcIiAvKiBDb25uZWN0ZWQgKi8gfHwgIXRoaXMuX3dzQ2xpZW50Py5pc09wZW4oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGlmIChub3cgLSB0aGlzLl9sYXN0TWVzc2FnZVJlY2VpdmVkID4gdGhpcy5fa2VlcEFsaXZlVGltZW91dEluTXMpIHtcbiAgICAgIGxvZ2dlci53YXJuaW5nKFxuICAgICAgICBgTm8gbWVzc2FnZXMgcmVjZWl2ZWQgZm9yICR7bm93IC0gdGhpcy5fbGFzdE1lc3NhZ2VSZWNlaXZlZH0gbXMuIENsb3NpbmcuIFRoZSBrZWVwIGFsaXZlIHRpbWVvdXQgaXMgc2V0IHRvICR7dGhpcy5fa2VlcEFsaXZlVGltZW91dEluTXN9IG1zLmBcbiAgICAgICk7XG4gICAgICB0aGlzLl93c0NsaWVudD8uY2xvc2UoKTtcbiAgICB9XG4gIH1cbiAgX2dldFBpbmdLZWVwYWxpdmVUYXNrKCkge1xuICAgIHJldHVybiBuZXcgQWJvcnRhYmxlVGFzayhhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLl90cnlTZW5kUGluZygpO1xuICAgIH0sIHRoaXMuX2tlZXBBbGl2ZUludGVydmFsSW5Ncyk7XG4gIH1cbiAgX2dldFRpbWVvdXRNb25pdG9yVGFzaygpIHtcbiAgICBjb25zdCB0aW1lb3V0ID0gdGhpcy5fa2VlcEFsaXZlVGltZW91dEluTXM7XG4gICAgY29uc3QgY2hlY2tJbnRlcnZhbCA9IE1hdGguZmxvb3IodGltZW91dCAvIDMpO1xuICAgIHJldHVybiBuZXcgQWJvcnRhYmxlVGFzayhhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLl9jaGVja0tlZXBBbGl2ZVRpbWVvdXQoKTtcbiAgICB9LCBjaGVja0ludGVydmFsKTtcbiAgfVxuICBhc3luYyBfc2VuZE1lc3NhZ2UobWVzc2FnZSwgYWJvcnRTaWduYWwpIHtcbiAgICBpZiAoIXRoaXMuX3dzQ2xpZW50IHx8ICF0aGlzLl93c0NsaWVudC5pc09wZW4oKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNvbm5lY3Rpb24gaXMgbm90IGNvbm5lY3RlZC5cIik7XG4gICAgfVxuICAgIGNvbnN0IHBheWxvYWQgPSB0aGlzLl9wcm90b2NvbC53cml0ZU1lc3NhZ2UobWVzc2FnZSk7XG4gICAgYXdhaXQgdGhpcy5fd3NDbGllbnQuc2VuZChwYXlsb2FkLCBhYm9ydFNpZ25hbCk7XG4gIH1cbiAgYXN5bmMgX3NlbmRNZXNzYWdlV2l0aEFja0lkKG1lc3NhZ2VQcm92aWRlciwgYWNrSWQsIGFib3J0U2lnbmFsKSB7XG4gICAgY29uc3QgeyBhY2tJZDogcmVzb2x2ZWRBY2tJZCwgd2FpdCB9ID0gdGhpcy5fYWNrTWFuYWdlci5yZWdpc3RlckFjayhhY2tJZCk7XG4gICAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VQcm92aWRlcihyZXNvbHZlZEFja0lkKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5fc2VuZE1lc3NhZ2UobWVzc2FnZSwgYWJvcnRTaWduYWwpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLl9hY2tNYW5hZ2VyLmRpc2NhcmQocmVzb2x2ZWRBY2tJZCk7XG4gICAgICBsZXQgZXJyb3JNZXNzYWdlID0gXCJcIjtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgU2VuZE1lc3NhZ2VFcnJvcihlcnJvck1lc3NhZ2UsIHsgYWNrSWQ6IHJlc29sdmVkQWNrSWQgfSk7XG4gICAgfVxuICAgIHJldHVybiB3YWl0KGFib3J0U2lnbmFsKTtcbiAgfVxuICBhc3luYyBfaGFuZGxlQ29ubmVjdGlvbkNsb3NlKCkge1xuICAgIHRoaXMuX2Fja01hbmFnZXIucmVqZWN0QWxsKChhY2tJZCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBTZW5kTWVzc2FnZUVycm9yKFxuICAgICAgICBcIkNvbm5lY3Rpb24gaXMgZGlzY29ubmVjdGVkIGJlZm9yZSByZWNlaXZlIGFjayBmcm9tIHRoZSBzZXJ2aWNlXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhY2tJZFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICAgIHRoaXMuX2ludm9jYXRpb25NYW5hZ2VyLnJlamVjdEFsbCgoaW52b2NhdGlvbklkKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IEludm9jYXRpb25FcnJvcihcbiAgICAgICAgXCJDb25uZWN0aW9uIGlzIGRpc2Nvbm5lY3RlZCBiZWZvcmUgcmVjZWl2aW5nIGludm9rZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2aWNlXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBpbnZvY2F0aW9uSWRcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5faXNTdG9wcGluZykge1xuICAgICAgbG9nZ2VyLndhcm5pbmcoXCJUaGUgY2xpZW50IGlzIHN0b3BwaW5nIHN0YXRlLiBTdG9wIHJlY292ZXJ5LlwiKTtcbiAgICAgIHRoaXMuX2hhbmRsZUNvbm5lY3Rpb25DbG9zZUFuZE5vUmVjb3ZlcnkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xhc3RDbG9zZUV2ZW50ICYmIHRoaXMuX2xhc3RDbG9zZUV2ZW50LmNvZGUgPT09IDEwMDgpIHtcbiAgICAgIGxvZ2dlci53YXJuaW5nKFwiVGhlIHdlYnNvY2tldCBjbG9zZSB3aXRoIHN0YXR1cyBjb2RlIDEwMDguIFN0b3AgcmVjb3ZlcnkuXCIpO1xuICAgICAgdGhpcy5faGFuZGxlQ29ubmVjdGlvbkNsb3NlQW5kTm9SZWNvdmVyeSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3Byb3RvY29sLmlzUmVsaWFibGVTdWJQcm90b2NvbCkge1xuICAgICAgbG9nZ2VyLndhcm5pbmcoXCJUaGUgcHJvdG9jb2wgaXMgbm90IHJlbGlhYmxlLCByZWNvdmVyeSBpcyBub3QgYXBwbGljYWJsZVwiKTtcbiAgICAgIHRoaXMuX2hhbmRsZUNvbm5lY3Rpb25DbG9zZUFuZE5vUmVjb3ZlcnkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVjb3ZlcnlVcmkgPSB0aGlzLl9idWlsZFJlY292ZXJ5VXJpKCk7XG4gICAgaWYgKCFyZWNvdmVyeVVyaSkge1xuICAgICAgbG9nZ2VyLndhcm5pbmcoXCJDb25uZWN0aW9uIGlkIG9yIHJlY29ubmVjdGlvbiB0b2tlbiBpcyBub3QgYXZhaWxhYmxlXCIpO1xuICAgICAgdGhpcy5faGFuZGxlQ29ubmVjdGlvbkNsb3NlQW5kTm9SZWNvdmVyeSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcmVjb3ZlcmVkID0gZmFsc2U7XG4gICAgdGhpcy5fc3RhdGUgPSBcIlJlY292ZXJpbmdcIiAvKiBSZWNvdmVyaW5nICovO1xuICAgIGNvbnN0IGFib3J0U2lnbmFsID0gQWJvcnRTaWduYWwudGltZW91dCgzMCAqIDFlMyk7XG4gICAgdHJ5IHtcbiAgICAgIHdoaWxlICghYWJvcnRTaWduYWwuYWJvcnRlZCB8fCB0aGlzLl9pc1N0b3BwaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fY29ubmVjdENvcmUuY2FsbCh0aGlzLCByZWNvdmVyeVVyaSk7XG4gICAgICAgICAgcmVjb3ZlcmVkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIGF3YWl0IGRlbGF5KDFlMyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKCFyZWNvdmVyZWQpIHtcbiAgICAgICAgbG9nZ2VyLndhcm5pbmcoXCJSZWNvdmVyeSBhdHRlbXB0cyBmYWlsZWQgbW9yZSB0aGVuIDMwIHNlY29uZHMgb3IgdGhlIGNsaWVudCBpcyBzdG9wcGluZ1wiKTtcbiAgICAgICAgdGhpcy5faGFuZGxlQ29ubmVjdGlvbkNsb3NlQW5kTm9SZWNvdmVyeSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBfc2FmZUVtaXRDb25uZWN0ZWQoY29ubmVjdGlvbklkLCB1c2VySWQpIHtcbiAgICB0aGlzLl9lbWl0RXZlbnQoXCJjb25uZWN0ZWRcIiwge1xuICAgICAgY29ubmVjdGlvbklkLFxuICAgICAgdXNlcklkXG4gICAgfSk7XG4gIH1cbiAgX3NhZmVFbWl0RGlzY29ubmVjdGVkKGNvbm5lY3Rpb25JZCwgbGFzdERpc2Nvbm5lY3RlZE1lc3NhZ2UpIHtcbiAgICB0aGlzLl9lbWl0RXZlbnQoXCJkaXNjb25uZWN0ZWRcIiwge1xuICAgICAgY29ubmVjdGlvbklkLFxuICAgICAgbWVzc2FnZTogbGFzdERpc2Nvbm5lY3RlZE1lc3NhZ2VcbiAgICB9KTtcbiAgfVxuICBfc2FmZUVtaXRHcm91cE1lc3NhZ2UobWVzc2FnZSkge1xuICAgIHRoaXMuX2VtaXRFdmVudChcImdyb3VwLW1lc3NhZ2VcIiwge1xuICAgICAgbWVzc2FnZVxuICAgIH0pO1xuICB9XG4gIF9zYWZlRW1pdFNlcnZlck1lc3NhZ2UobWVzc2FnZSkge1xuICAgIHRoaXMuX2VtaXRFdmVudChcInNlcnZlci1tZXNzYWdlXCIsIHtcbiAgICAgIG1lc3NhZ2VcbiAgICB9KTtcbiAgfVxuICBfc2FmZUVtaXRTdG9wcGVkKCkge1xuICAgIHRoaXMuX2VtaXRFdmVudChcInN0b3BwZWRcIiwge30pO1xuICB9XG4gIF9zYWZlRW1pdFJlam9pbkdyb3VwRmFpbGVkKGdyb3VwTmFtZSwgZXJyKSB7XG4gICAgdGhpcy5fZW1pdEV2ZW50KFwicmVqb2luLWdyb3VwLWZhaWxlZFwiLCB7XG4gICAgICBncm91cDogZ3JvdXBOYW1lLFxuICAgICAgZXJyb3I6IGVyclxuICAgIH0pO1xuICB9XG4gIF9tYXBJbnZva2VSZXNwb25zZShtZXNzYWdlKSB7XG4gICAgaWYgKG1lc3NhZ2Uuc3VjY2VzcyAhPT0gdHJ1ZSkge1xuICAgICAgaWYgKG1lc3NhZ2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEludm9jYXRpb25FcnJvcihtZXNzYWdlLmVycm9yPy5tZXNzYWdlID8/IFwiSW52b2NhdGlvbiBmYWlsZWQuXCIsIHtcbiAgICAgICAgICBpbnZvY2F0aW9uSWQ6IG1lc3NhZ2UuaW52b2NhdGlvbklkLFxuICAgICAgICAgIGVycm9yRGV0YWlsOiBtZXNzYWdlLmVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEludm9jYXRpb25FcnJvcihcIlVuc3VwcG9ydGVkIGludm9rZSByZXNwb25zZSBmcmFtZS5cIiwge1xuICAgICAgICBpbnZvY2F0aW9uSWQ6IG1lc3NhZ2UuaW52b2NhdGlvbklkXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGludm9jYXRpb25JZDogbWVzc2FnZS5pbnZvY2F0aW9uSWQsXG4gICAgICBkYXRhVHlwZTogbWVzc2FnZS5kYXRhVHlwZSxcbiAgICAgIGRhdGE6IG1lc3NhZ2UuZGF0YVxuICAgIH07XG4gIH1cbiAgYXN5bmMgX3NlbmRDYW5jZWxJbnZvY2F0aW9uKGludm9jYXRpb25JZCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICBraW5kOiBcImNhbmNlbEludm9jYXRpb25cIixcbiAgICAgIGludm9jYXRpb25JZFxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX3NlbmRNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgbG9nZ2VyLnZlcmJvc2UoYEZhaWxlZCB0byBzZW5kIGNhbmNlbEludm9jYXRpb24gZm9yICR7aW52b2NhdGlvbklkfWAsIGVycik7XG4gICAgfVxuICB9XG4gIF9idWlsZERlZmF1bHRPcHRpb25zKGNsaWVudE9wdGlvbnMpIHtcbiAgICBpZiAoY2xpZW50T3B0aW9ucy5hdXRvUmVjb25uZWN0ID09IG51bGwpIHtcbiAgICAgIGNsaWVudE9wdGlvbnMuYXV0b1JlY29ubmVjdCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLmF1dG9SZWpvaW5Hcm91cHMgPT0gbnVsbCkge1xuICAgICAgY2xpZW50T3B0aW9ucy5hdXRvUmVqb2luR3JvdXBzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMucHJvdG9jb2wgPT0gbnVsbCkge1xuICAgICAgY2xpZW50T3B0aW9ucy5wcm90b2NvbCA9IFdlYlB1YlN1Ykpzb25SZWxpYWJsZVByb3RvY29sKCk7XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLmtlZXBBbGl2ZVRpbWVvdXRJbk1zID09IG51bGwpIHtcbiAgICAgIGNsaWVudE9wdGlvbnMua2VlcEFsaXZlVGltZW91dEluTXMgPSAxMmU0O1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5rZWVwQWxpdmVUaW1lb3V0SW5NcyA8IDApIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwia2VlcEFsaXZlVGltZW91dEluTXMgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gMC5cIik7XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLmtlZXBBbGl2ZUludGVydmFsSW5NcyA9PSBudWxsKSB7XG4gICAgICBjbGllbnRPcHRpb25zLmtlZXBBbGl2ZUludGVydmFsSW5NcyA9IDJlNDtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMua2VlcEFsaXZlSW50ZXJ2YWxJbk1zIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJrZWVwQWxpdmVJbnRlcnZhbEluTXMgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gMC5cIik7XG4gICAgfVxuICAgIHRoaXMuX2J1aWxkTWVzc2FnZVJldHJ5T3B0aW9ucyhjbGllbnRPcHRpb25zKTtcbiAgICB0aGlzLl9idWlsZFJlY29ubmVjdFJldHJ5T3B0aW9ucyhjbGllbnRPcHRpb25zKTtcbiAgICByZXR1cm4gY2xpZW50T3B0aW9ucztcbiAgfVxuICBfYnVpbGRNZXNzYWdlUmV0cnlPcHRpb25zKGNsaWVudE9wdGlvbnMpIHtcbiAgICBpZiAoIWNsaWVudE9wdGlvbnMubWVzc2FnZVJldHJ5T3B0aW9ucykge1xuICAgICAgY2xpZW50T3B0aW9ucy5tZXNzYWdlUmV0cnlPcHRpb25zID0ge307XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLm1lc3NhZ2VSZXRyeU9wdGlvbnMubWF4UmV0cmllcyA9PSBudWxsIHx8IGNsaWVudE9wdGlvbnMubWVzc2FnZVJldHJ5T3B0aW9ucy5tYXhSZXRyaWVzIDwgMCkge1xuICAgICAgY2xpZW50T3B0aW9ucy5tZXNzYWdlUmV0cnlPcHRpb25zLm1heFJldHJpZXMgPSAzO1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5tZXNzYWdlUmV0cnlPcHRpb25zLnJldHJ5RGVsYXlJbk1zID09IG51bGwgfHwgY2xpZW50T3B0aW9ucy5tZXNzYWdlUmV0cnlPcHRpb25zLnJldHJ5RGVsYXlJbk1zIDwgMCkge1xuICAgICAgY2xpZW50T3B0aW9ucy5tZXNzYWdlUmV0cnlPcHRpb25zLnJldHJ5RGVsYXlJbk1zID0gMWUzO1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5tZXNzYWdlUmV0cnlPcHRpb25zLm1heFJldHJ5RGVsYXlJbk1zID09IG51bGwgfHwgY2xpZW50T3B0aW9ucy5tZXNzYWdlUmV0cnlPcHRpb25zLm1heFJldHJ5RGVsYXlJbk1zIDwgMCkge1xuICAgICAgY2xpZW50T3B0aW9ucy5tZXNzYWdlUmV0cnlPcHRpb25zLm1heFJldHJ5RGVsYXlJbk1zID0gM2U0O1xuICAgIH1cbiAgICBpZiAoY2xpZW50T3B0aW9ucy5tZXNzYWdlUmV0cnlPcHRpb25zLm1vZGUgPT0gbnVsbCkge1xuICAgICAgY2xpZW50T3B0aW9ucy5tZXNzYWdlUmV0cnlPcHRpb25zLm1vZGUgPSBcIkZpeGVkXCI7XG4gICAgfVxuICB9XG4gIF9idWlsZFJlY29ubmVjdFJldHJ5T3B0aW9ucyhjbGllbnRPcHRpb25zKSB7XG4gICAgaWYgKCFjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucykge1xuICAgICAgY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKGNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zLm1heFJldHJpZXMgPT0gbnVsbCB8fCBjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucy5tYXhSZXRyaWVzIDwgMCkge1xuICAgICAgY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMubWF4UmV0cmllcyA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucy5yZXRyeURlbGF5SW5NcyA9PSBudWxsIHx8IGNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zLnJldHJ5RGVsYXlJbk1zIDwgMCkge1xuICAgICAgY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMucmV0cnlEZWxheUluTXMgPSAxZTM7XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucy5tYXhSZXRyeURlbGF5SW5NcyA9PSBudWxsIHx8IGNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zLm1heFJldHJ5RGVsYXlJbk1zIDwgMCkge1xuICAgICAgY2xpZW50T3B0aW9ucy5yZWNvbm5lY3RSZXRyeU9wdGlvbnMubWF4UmV0cnlEZWxheUluTXMgPSAzZTQ7XG4gICAgfVxuICAgIGlmIChjbGllbnRPcHRpb25zLnJlY29ubmVjdFJldHJ5T3B0aW9ucy5tb2RlID09IG51bGwpIHtcbiAgICAgIGNsaWVudE9wdGlvbnMucmVjb25uZWN0UmV0cnlPcHRpb25zLm1vZGUgPSBcIkZpeGVkXCI7XG4gICAgfVxuICB9XG4gIF9idWlsZFJlY292ZXJ5VXJpKCkge1xuICAgIGlmICh0aGlzLl9jb25uZWN0aW9uSWQgJiYgdGhpcy5fcmVjb25uZWN0aW9uVG9rZW4gJiYgdGhpcy5fdXJpKSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHRoaXMuX3VyaSk7XG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChcImF3cHNfY29ubmVjdGlvbl9pZFwiLCB0aGlzLl9jb25uZWN0aW9uSWQpO1xuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoXCJhd3BzX3JlY29ubmVjdGlvbl90b2tlblwiLCB0aGlzLl9yZWNvbm5lY3Rpb25Ub2tlbik7XG4gICAgICByZXR1cm4gdXJsLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIF9nZXRPckFkZEdyb3VwKG5hbWUpIHtcbiAgICBpZiAoIXRoaXMuX2dyb3VwTWFwLmhhcyhuYW1lKSkge1xuICAgICAgdGhpcy5fZ3JvdXBNYXAuc2V0KG5hbWUsIG5ldyBXZWJQdWJTdWJHcm91cChuYW1lKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9ncm91cE1hcC5nZXQobmFtZSk7XG4gIH1cbiAgX2NoYW5nZVN0YXRlKG5ld1N0YXRlKSB7XG4gICAgbG9nZ2VyLnZlcmJvc2UoXG4gICAgICBgVGhlIGNsaWVudCBzdGF0ZSB0cmFuc2ZlciBmcm9tICR7dGhpcy5fc3RhdGUudG9TdHJpbmcoKX0gdG8gJHtuZXdTdGF0ZS50b1N0cmluZygpfWBcbiAgICApO1xuICAgIHRoaXMuX3N0YXRlID0gbmV3U3RhdGU7XG4gIH1cbiAgYXN5bmMgX29wZXJhdGlvbkV4ZWN1dGVXaXRoUmV0cnkoaW5uZXIsIHNpZ25hbCkge1xuICAgIGxldCByZXRyeUF0dGVtcHQgPSAwO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgaW5uZXIuY2FsbCh0aGlzKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgSW52b2NhdGlvbkVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIHJldHJ5QXR0ZW1wdCsrO1xuICAgICAgICBjb25zdCBkZWxheUluTXMgPSB0aGlzLl9tZXNzYWdlUmV0cnlQb2xpY3kubmV4dFJldHJ5RGVsYXlJbk1zKHJldHJ5QXR0ZW1wdCk7XG4gICAgICAgIGlmIChkZWxheUluTXMgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBkZWxheShkZWxheUluTXMpO1xuICAgICAgICBpZiAoc2lnbmFsPy5hYm9ydGVkKSB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5jbGFzcyBSZXRyeVBvbGljeSB7XG4gIF9yZXRyeU9wdGlvbnM7XG4gIF9tYXhSZXRyaWVzVG9HZXRNYXhEZWxheTtcbiAgY29uc3RydWN0b3IocmV0cnlPcHRpb25zKSB7XG4gICAgdGhpcy5fcmV0cnlPcHRpb25zID0gcmV0cnlPcHRpb25zO1xuICAgIHRoaXMuX21heFJldHJpZXNUb0dldE1heERlbGF5ID0gTWF0aC5jZWlsKFxuICAgICAgTWF0aC5sb2cyKHRoaXMuX3JldHJ5T3B0aW9ucy5tYXhSZXRyeURlbGF5SW5NcykgLSBNYXRoLmxvZzIodGhpcy5fcmV0cnlPcHRpb25zLnJldHJ5RGVsYXlJbk1zKSArIDFcbiAgICApO1xuICB9XG4gIG5leHRSZXRyeURlbGF5SW5NcyhyZXRyeUF0dGVtcHQpIHtcbiAgICBpZiAocmV0cnlBdHRlbXB0ID4gdGhpcy5fcmV0cnlPcHRpb25zLm1heFJldHJpZXMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fcmV0cnlPcHRpb25zLm1vZGUgPT09IFwiRml4ZWRcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmV0cnlPcHRpb25zLnJldHJ5RGVsYXlJbk1zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGN1bGF0ZUV4cG9uZW50aWFsRGVsYXkocmV0cnlBdHRlbXB0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX2NhbGN1bGF0ZUV4cG9uZW50aWFsRGVsYXkoYXR0ZW1wdCkge1xuICAgIGlmIChhdHRlbXB0ID49IHRoaXMuX21heFJldHJpZXNUb0dldE1heERlbGF5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmV0cnlPcHRpb25zLm1heFJldHJ5RGVsYXlJbk1zO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKDEgPDwgYXR0ZW1wdCAtIDEpICogdGhpcy5fcmV0cnlPcHRpb25zLnJldHJ5RGVsYXlJbk1zO1xuICAgIH1cbiAgfVxufVxuY2xhc3MgV2ViUHViU3ViR3JvdXAge1xuICBuYW1lO1xuICBpc0pvaW5lZCA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxufVxuY2xhc3MgU2VxdWVuY2VJZCB7XG4gIF9zZXF1ZW5jZUlkO1xuICBfaXNVcGRhdGU7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3NlcXVlbmNlSWQgPSAwO1xuICAgIHRoaXMuX2lzVXBkYXRlID0gZmFsc2U7XG4gIH1cbiAgdHJ5VXBkYXRlKHNlcXVlbmNlSWQpIHtcbiAgICB0aGlzLl9pc1VwZGF0ZSA9IHRydWU7XG4gICAgaWYgKHNlcXVlbmNlSWQgPiB0aGlzLl9zZXF1ZW5jZUlkKSB7XG4gICAgICBjb25zdCBkaWZmID0gc2VxdWVuY2VJZCAtIHRoaXMuX3NlcXVlbmNlSWQ7XG4gICAgICB0aGlzLl9zZXF1ZW5jZUlkID0gc2VxdWVuY2VJZDtcbiAgICAgIHJldHVybiBkaWZmO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuICB0cnlHZXRTZXF1ZW5jZUlkKCkge1xuICAgIGlmICh0aGlzLl9pc1VwZGF0ZSkge1xuICAgICAgdGhpcy5faXNVcGRhdGUgPSBmYWxzZTtcbiAgICAgIHJldHVybiBbdHJ1ZSwgdGhpcy5fc2VxdWVuY2VJZF07XG4gICAgfVxuICAgIHJldHVybiBbZmFsc2UsIG51bGxdO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX3NlcXVlbmNlSWQgPSAwO1xuICAgIHRoaXMuX2lzVXBkYXRlID0gZmFsc2U7XG4gIH1cbn1cbmNsYXNzIEFib3J0YWJsZVRhc2sge1xuICBfZnVuYztcbiAgX2Fib3J0Q29udHJvbGxlcjtcbiAgX2ludGVydmFsO1xuICBfb2JqO1xuICBjb25zdHJ1Y3RvcihmdW5jLCBpbnRlcnZhbCwgb2JqKSB7XG4gICAgdGhpcy5fZnVuYyA9IGZ1bmM7XG4gICAgdGhpcy5fYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIHRoaXMuX2ludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgdGhpcy5fb2JqID0gb2JqO1xuICAgIHRoaXMuX3N0YXJ0KCk7XG4gIH1cbiAgYWJvcnQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2Fib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgIH0gY2F0Y2gge1xuICAgIH1cbiAgfVxuICBhc3luYyBfc3RhcnQoKSB7XG4gICAgY29uc3Qgc2lnbmFsID0gdGhpcy5fYWJvcnRDb250cm9sbGVyLnNpZ25hbDtcbiAgICB3aGlsZSAoIXNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLl9mdW5jKHRoaXMuX29iaik7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGF3YWl0IGRlbGF5KHRoaXMuX2ludGVydmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCB7XG4gIFdlYlB1YlN1YkNsaWVudFxufTtcbiIsICJjbGFzcyBTZW5kTWVzc2FnZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAvKipcbiAgICogRXJyb3IgbmFtZVxuICAgKi9cbiAgbmFtZTtcbiAgLyoqXG4gICAqIFRoZSBhY2sgaWQgb2YgdGhlIG1lc3NhZ2VcbiAgICovXG4gIGFja0lkO1xuICAvKipcbiAgICogVGhlIGVycm9yIGRldGFpbHMgZnJvbSB0aGUgc2VydmljZVxuICAgKi9cbiAgZXJyb3JEZXRhaWw7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGEgU2VuZE1lc3NhZ2VFcnJvclxuICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBlcnJvciBtZXNzYWdlXG4gICAqIEBwYXJhbSBhY2tNZXNzYWdlIC0gVGhlIGFjayBtZXNzYWdlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gXCJTZW5kTWVzc2FnZUVycm9yXCI7XG4gICAgdGhpcy5hY2tJZCA9IG9wdGlvbnMuYWNrSWQ7XG4gICAgdGhpcy5lcnJvckRldGFpbCA9IG9wdGlvbnMuZXJyb3JEZXRhaWw7XG4gIH1cbn1cbmNsYXNzIEludm9jYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgLyoqXG4gICAqIFRoZSBpbnZvY2F0aW9uIGlkIG9mIHRoZSByZXF1ZXN0LlxuICAgKi9cbiAgaW52b2NhdGlvbklkO1xuICAvKipcbiAgICogRXJyb3IgZGV0YWlscyBmcm9tIHRoZSBzZXJ2aWNlIGlmIGF2YWlsYWJsZS5cbiAgICovXG4gIGVycm9yRGV0YWlsO1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gXCJJbnZvY2F0aW9uRXJyb3JcIjtcbiAgICB0aGlzLmludm9jYXRpb25JZCA9IG9wdGlvbnMuaW52b2NhdGlvbklkO1xuICAgIHRoaXMuZXJyb3JEZXRhaWwgPSBvcHRpb25zLmVycm9yRGV0YWlsO1xuICB9XG59XG5leHBvcnQge1xuICBJbnZvY2F0aW9uRXJyb3IsXG4gIFNlbmRNZXNzYWdlRXJyb3Jcbn07XG4iLCAiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IEVPTCB9IGZyb20gXCJub2RlOm9zXCI7XG5pbXBvcnQgdXRpbCBmcm9tIFwibm9kZTp1dGlsXCI7XG5pbXBvcnQgcHJvY2VzcyBmcm9tIFwibm9kZTpwcm9jZXNzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cobWVzc2FnZTogdW5rbm93biwgLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoYCR7dXRpbC5mb3JtYXQobWVzc2FnZSwgLi4uYXJncyl9JHtFT0x9YCk7XG59XG4iLCAiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IGxvZyB9IGZyb20gXCIuL2xvZy5qc1wiO1xuXG4vKipcbiAqIEEgc2ltcGxlIG1lY2hhbmlzbSBmb3IgZW5hYmxpbmcgbG9nZ2luZy5cbiAqIEludGVuZGVkIHRvIG1pbWljIHRoZSBwdWJsaWNseSBhdmFpbGFibGUgYGRlYnVnYCBwYWNrYWdlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERlYnVnIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgbG9nZ2VyIHdpdGggdGhlIGdpdmVuIG5hbWVzcGFjZS5cbiAgICovXG4gIChuYW1lc3BhY2U6IHN0cmluZyk6IERlYnVnZ2VyO1xuICAvKipcbiAgICogVGhlIGRlZmF1bHQgbG9nIG1ldGhvZCAoZGVmYXVsdHMgdG8gY29uc29sZSlcbiAgICovXG4gIGxvZzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xuICAvKipcbiAgICogRW5hYmxlcyBhIHBhcnRpY3VsYXIgc2V0IG9mIG5hbWVzcGFjZXMuXG4gICAqIFRvIGVuYWJsZSBtdWx0aXBsZSBzZXBhcmF0ZSB0aGVtIHdpdGggY29tbWFzLCBlLmcuIFwiaW5mbyxkZWJ1Z1wiLlxuICAgKiBTdXBwb3J0cyB3aWxkY2FyZHMsIGUuZy4gXCJ0eXBlU3BlY1J1bnRpbWU6KlwiXG4gICAqIFN1cHBvcnRzIHNraXAgc3ludGF4LCBlLmcuIFwidHlwZVNwZWNSdW50aW1lOiosLXR5cGVTcGVjUnVudGltZTpzdG9yYWdlOipcIiB3aWxsIGVuYWJsZVxuICAgKiBldmVyeXRoaW5nIHVuZGVyIHR5cGVTcGVjUnVudGltZSBleGNlcHQgZm9yIHRoaW5ncyB1bmRlciB0eXBlU3BlY1J1bnRpbWU6c3RvcmFnZS5cbiAgICovXG4gIGVuYWJsZTogKG5hbWVzcGFjZXM6IHN0cmluZykgPT4gdm9pZDtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHBhcnRpY3VsYXIgbmFtZXNwYWNlIGlzIGVuYWJsZWQuXG4gICAqL1xuICBlbmFibGVkOiAobmFtZXNwYWNlOiBzdHJpbmcpID0+IGJvb2xlYW47XG4gIC8qKlxuICAgKiBEaXNhYmxlcyBhbGwgbG9nZ2luZywgcmV0dXJucyB3aGF0IHdhcyBwcmV2aW91c2x5IGVuYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlOiAoKSA9PiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBsb2cgZnVuY3Rpb24gdGhhdCBjYW4gYmUgZHluYW1pY2FsbHkgZW5hYmxlZCBhbmQgcmVkaXJlY3RlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEZWJ1Z2dlciB7XG4gIC8qKlxuICAgKiBMb2dzIHRoZSBnaXZlbiBhcmd1bWVudHMgdG8gdGhlIGBsb2dgIG1ldGhvZC5cbiAgICovXG4gICguLi5hcmdzOiBhbnlbXSk6IHZvaWQ7XG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoaXMgbG9nZ2VyIGlzIGFjdGl2ZSBhbmQgbG9nZ2luZy5cbiAgICovXG4gIGVuYWJsZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBVc2VkIHRvIGNsZWFudXAvcmVtb3ZlIHRoaXMgbG9nZ2VyLlxuICAgKi9cbiAgZGVzdHJveTogKCkgPT4gYm9vbGVhbjtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IGxvZyBtZXRob2QuIENhbiBiZSBvdmVycmlkZGVuIHRvIHJlZGlyZWN0IG91dHB1dC5cbiAgICovXG4gIGxvZzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xuICAvKipcbiAgICogVGhlIG5hbWVzcGFjZSBvZiB0aGlzIGxvZ2dlci5cbiAgICovXG4gIG5hbWVzcGFjZTogc3RyaW5nO1xuICAvKipcbiAgICogRXh0ZW5kcyB0aGlzIGxvZ2dlciB3aXRoIGEgY2hpbGQgbmFtZXNwYWNlLlxuICAgKiBOYW1lc3BhY2VzIGFyZSBzZXBhcmF0ZWQgd2l0aCBhICc6JyBjaGFyYWN0ZXIuXG4gICAqL1xuICBleHRlbmQ6IChuYW1lc3BhY2U6IHN0cmluZykgPT4gRGVidWdnZXI7XG59XG5cbmNvbnN0IGRlYnVnRW52VmFyaWFibGUgPVxuICAodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuREVCVUcpIHx8IHVuZGVmaW5lZDtcblxubGV0IGVuYWJsZWRTdHJpbmc6IHN0cmluZyB8IHVuZGVmaW5lZDtcbmxldCBlbmFibGVkTmFtZXNwYWNlczogc3RyaW5nW10gPSBbXTtcbmxldCBza2lwcGVkTmFtZXNwYWNlczogc3RyaW5nW10gPSBbXTtcbmNvbnN0IGRlYnVnZ2VyczogRGVidWdnZXJbXSA9IFtdO1xuXG5pZiAoZGVidWdFbnZWYXJpYWJsZSkge1xuICBlbmFibGUoZGVidWdFbnZWYXJpYWJsZSk7XG59XG5cbmNvbnN0IGRlYnVnT2JqOiBEZWJ1ZyA9IE9iamVjdC5hc3NpZ24oXG4gIChuYW1lc3BhY2U6IHN0cmluZyk6IERlYnVnZ2VyID0+IHtcbiAgICByZXR1cm4gY3JlYXRlRGVidWdnZXIobmFtZXNwYWNlKTtcbiAgfSxcbiAge1xuICAgIGVuYWJsZSxcbiAgICBlbmFibGVkLFxuICAgIGRpc2FibGUsXG4gICAgbG9nLFxuICB9LFxuKTtcblxuZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXM6IHN0cmluZyk6IHZvaWQge1xuICBlbmFibGVkU3RyaW5nID0gbmFtZXNwYWNlcztcbiAgZW5hYmxlZE5hbWVzcGFjZXMgPSBbXTtcbiAgc2tpcHBlZE5hbWVzcGFjZXMgPSBbXTtcbiAgY29uc3QgbmFtZXNwYWNlTGlzdCA9IG5hbWVzcGFjZXMuc3BsaXQoXCIsXCIpLm1hcCgobnMpID0+IG5zLnRyaW0oKSk7XG4gIGZvciAoY29uc3QgbnMgb2YgbmFtZXNwYWNlTGlzdCkge1xuICAgIGlmIChucy5zdGFydHNXaXRoKFwiLVwiKSkge1xuICAgICAgc2tpcHBlZE5hbWVzcGFjZXMucHVzaChucy5zdWJzdHJpbmcoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmFibGVkTmFtZXNwYWNlcy5wdXNoKG5zKTtcbiAgICB9XG4gIH1cbiAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiBkZWJ1Z2dlcnMpIHtcbiAgICBpbnN0YW5jZS5lbmFibGVkID0gZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuYWJsZWQobmFtZXNwYWNlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKG5hbWVzcGFjZS5lbmRzV2l0aChcIipcIikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZvciAoY29uc3Qgc2tpcHBlZCBvZiBza2lwcGVkTmFtZXNwYWNlcykge1xuICAgIGlmIChuYW1lc3BhY2VNYXRjaGVzKG5hbWVzcGFjZSwgc2tpcHBlZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChjb25zdCBlbmFibGVkTmFtZXNwYWNlIG9mIGVuYWJsZWROYW1lc3BhY2VzKSB7XG4gICAgaWYgKG5hbWVzcGFjZU1hdGNoZXMobmFtZXNwYWNlLCBlbmFibGVkTmFtZXNwYWNlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBHaXZlbiBhIG5hbWVzcGFjZSwgY2hlY2sgaWYgaXQgbWF0Y2hlcyBhIHBhdHRlcm4uXG4gKiBQYXR0ZXJucyBvbmx5IGhhdmUgYSBzaW5nbGUgd2lsZGNhcmQgY2hhcmFjdGVyIHdoaWNoIGlzICouXG4gKiBUaGUgYmVoYXZpb3Igb2YgKiBpcyB0aGF0IGl0IG1hdGNoZXMgemVybyBvciBtb3JlIG90aGVyIGNoYXJhY3RlcnMuXG4gKi9cbmZ1bmN0aW9uIG5hbWVzcGFjZU1hdGNoZXMobmFtZXNwYWNlOiBzdHJpbmcsIHBhdHRlcm5Ub01hdGNoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gc2ltcGxlIGNhc2UsIG5vIHBhdHRlcm4gbWF0Y2hpbmcgcmVxdWlyZWRcbiAgaWYgKHBhdHRlcm5Ub01hdGNoLmluZGV4T2YoXCIqXCIpID09PSAtMSkge1xuICAgIHJldHVybiBuYW1lc3BhY2UgPT09IHBhdHRlcm5Ub01hdGNoO1xuICB9XG5cbiAgbGV0IHBhdHRlcm4gPSBwYXR0ZXJuVG9NYXRjaDtcblxuICAvLyBub3JtYWxpemUgc3VjY2Vzc2l2ZSAqIGlmIG5lZWRlZFxuICBpZiAocGF0dGVyblRvTWF0Y2guaW5kZXhPZihcIioqXCIpICE9PSAtMSkge1xuICAgIGNvbnN0IHBhdHRlcm5QYXJ0cyA9IFtdO1xuICAgIGxldCBsYXN0Q2hhcmFjdGVyID0gXCJcIjtcbiAgICBmb3IgKGNvbnN0IGNoYXJhY3RlciBvZiBwYXR0ZXJuVG9NYXRjaCkge1xuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gXCIqXCIgJiYgbGFzdENoYXJhY3RlciA9PT0gXCIqXCIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0Q2hhcmFjdGVyID0gY2hhcmFjdGVyO1xuICAgICAgICBwYXR0ZXJuUGFydHMucHVzaChjaGFyYWN0ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBwYXR0ZXJuID0gcGF0dGVyblBhcnRzLmpvaW4oXCJcIik7XG4gIH1cblxuICBsZXQgbmFtZXNwYWNlSW5kZXggPSAwO1xuICBsZXQgcGF0dGVybkluZGV4ID0gMDtcbiAgY29uc3QgcGF0dGVybkxlbmd0aCA9IHBhdHRlcm4ubGVuZ3RoO1xuICBjb25zdCBuYW1lc3BhY2VMZW5ndGggPSBuYW1lc3BhY2UubGVuZ3RoO1xuICBsZXQgbGFzdFdpbGRjYXJkID0gLTE7XG4gIGxldCBsYXN0V2lsZGNhcmROYW1lc3BhY2UgPSAtMTtcblxuICB3aGlsZSAobmFtZXNwYWNlSW5kZXggPCBuYW1lc3BhY2VMZW5ndGggJiYgcGF0dGVybkluZGV4IDwgcGF0dGVybkxlbmd0aCkge1xuICAgIGlmIChwYXR0ZXJuW3BhdHRlcm5JbmRleF0gPT09IFwiKlwiKSB7XG4gICAgICBsYXN0V2lsZGNhcmQgPSBwYXR0ZXJuSW5kZXg7XG4gICAgICBwYXR0ZXJuSW5kZXgrKztcbiAgICAgIGlmIChwYXR0ZXJuSW5kZXggPT09IHBhdHRlcm5MZW5ndGgpIHtcbiAgICAgICAgLy8gaWYgd2lsZGNhcmQgaXMgdGhlIGxhc3QgY2hhcmFjdGVyLCBpdCB3aWxsIG1hdGNoIHRoZSByZW1haW5pbmcgbmFtZXNwYWNlIHN0cmluZ1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIG5vdyB3ZSBsZXQgdGhlIHdpbGRjYXJkIGVhdCBjaGFyYWN0ZXJzIHVudGlsIHdlIG1hdGNoIHRoZSBuZXh0IGxpdGVyYWwgaW4gdGhlIHBhdHRlcm5cbiAgICAgIHdoaWxlIChuYW1lc3BhY2VbbmFtZXNwYWNlSW5kZXhdICE9PSBwYXR0ZXJuW3BhdHRlcm5JbmRleF0pIHtcbiAgICAgICAgbmFtZXNwYWNlSW5kZXgrKztcbiAgICAgICAgLy8gcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBuYW1lc3BhY2Ugd2l0aG91dCBhIG1hdGNoXG4gICAgICAgIGlmIChuYW1lc3BhY2VJbmRleCA9PT0gbmFtZXNwYWNlTGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIG5vdyB0aGF0IHdlIGhhdmUgYSBtYXRjaCwgbGV0J3MgdHJ5IHRvIGNvbnRpbnVlIG9uXG4gICAgICAvLyBob3dldmVyLCBpdCdzIHBvc3NpYmxlIHdlIGNvdWxkIGZpbmQgYSBsYXRlciBtYXRjaFxuICAgICAgLy8gc28ga2VlcCBhIHJlZmVyZW5jZSBpbiBjYXNlIHdlIGhhdmUgdG8gYmFja3RyYWNrXG4gICAgICBsYXN0V2lsZGNhcmROYW1lc3BhY2UgPSBuYW1lc3BhY2VJbmRleDtcbiAgICAgIG5hbWVzcGFjZUluZGV4Kys7XG4gICAgICBwYXR0ZXJuSW5kZXgrKztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gZWxzZSBpZiAocGF0dGVybltwYXR0ZXJuSW5kZXhdID09PSBuYW1lc3BhY2VbbmFtZXNwYWNlSW5kZXhdKSB7XG4gICAgICAvLyBzaW1wbGUgY2FzZTogbGl0ZXJhbCBwYXR0ZXJuIG1hdGNoZXMgc28ga2VlcCBnb2luZ1xuICAgICAgcGF0dGVybkluZGV4Kys7XG4gICAgICBuYW1lc3BhY2VJbmRleCsrO1xuICAgIH0gZWxzZSBpZiAobGFzdFdpbGRjYXJkID49IDApIHtcbiAgICAgIC8vIHNwZWNpYWwgY2FzZTogd2UgZG9uJ3QgaGF2ZSBhIGxpdGVyYWwgbWF0Y2gsIGJ1dCB0aGVyZSBpcyBhIHByZXZpb3VzIHdpbGRjYXJkXG4gICAgICAvLyB3aGljaCB3ZSBjYW4gYmFja3RyYWNrIHRvIGFuZCB0cnkgaGF2aW5nIHRoZSB3aWxkY2FyZCBlYXQgdGhlIG1hdGNoIGluc3RlYWRcbiAgICAgIHBhdHRlcm5JbmRleCA9IGxhc3RXaWxkY2FyZCArIDE7XG4gICAgICBuYW1lc3BhY2VJbmRleCA9IGxhc3RXaWxkY2FyZE5hbWVzcGFjZSArIDE7XG4gICAgICAvLyB3ZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIG5hbWVzcGFjZSB3aXRob3V0IGEgbWF0Y2hcbiAgICAgIGlmIChuYW1lc3BhY2VJbmRleCA9PT0gbmFtZXNwYWNlTGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIHNpbWlsYXIgdG8gdGhlIHByZXZpb3VzIGxvZ2ljLCBsZXQncyBrZWVwIGdvaW5nIHVudGlsIHdlIGZpbmQgdGhlIG5leHQgbGl0ZXJhbCBtYXRjaFxuICAgICAgd2hpbGUgKG5hbWVzcGFjZVtuYW1lc3BhY2VJbmRleF0gIT09IHBhdHRlcm5bcGF0dGVybkluZGV4XSkge1xuICAgICAgICBuYW1lc3BhY2VJbmRleCsrO1xuICAgICAgICBpZiAobmFtZXNwYWNlSW5kZXggPT09IG5hbWVzcGFjZUxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGFzdFdpbGRjYXJkTmFtZXNwYWNlID0gbmFtZXNwYWNlSW5kZXg7XG4gICAgICBuYW1lc3BhY2VJbmRleCsrO1xuICAgICAgcGF0dGVybkluZGV4Kys7XG4gICAgICBjb250aW51ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG5hbWVzcGFjZURvbmUgPSBuYW1lc3BhY2VJbmRleCA9PT0gbmFtZXNwYWNlLmxlbmd0aDtcbiAgY29uc3QgcGF0dGVybkRvbmUgPSBwYXR0ZXJuSW5kZXggPT09IHBhdHRlcm4ubGVuZ3RoO1xuICAvLyB0aGlzIGlzIHRvIGRldGVjdCB0aGUgY2FzZSBvZiBhbiB1bm5lZWRlZCBmaW5hbCB3aWxkY2FyZFxuICAvLyBlLmcuIHRoZSBwYXR0ZXJuIGBhYipgIHNob3VsZCBtYXRjaCB0aGUgc3RyaW5nIGBhYmBcbiAgY29uc3QgdHJhaWxpbmdXaWxkQ2FyZCA9IHBhdHRlcm5JbmRleCA9PT0gcGF0dGVybi5sZW5ndGggLSAxICYmIHBhdHRlcm5bcGF0dGVybkluZGV4XSA9PT0gXCIqXCI7XG4gIHJldHVybiBuYW1lc3BhY2VEb25lICYmIChwYXR0ZXJuRG9uZSB8fCB0cmFpbGluZ1dpbGRDYXJkKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZSgpOiBzdHJpbmcge1xuICBjb25zdCByZXN1bHQgPSBlbmFibGVkU3RyaW5nIHx8IFwiXCI7XG4gIGVuYWJsZShcIlwiKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVidWdnZXIobmFtZXNwYWNlOiBzdHJpbmcpOiBEZWJ1Z2dlciB7XG4gIGNvbnN0IG5ld0RlYnVnZ2VyOiBEZWJ1Z2dlciA9IE9iamVjdC5hc3NpZ24oZGVidWcsIHtcbiAgICBlbmFibGVkOiBlbmFibGVkKG5hbWVzcGFjZSksXG4gICAgZGVzdHJveSxcbiAgICBsb2c6IGRlYnVnT2JqLmxvZyxcbiAgICBuYW1lc3BhY2UsXG4gICAgZXh0ZW5kLFxuICB9KTtcblxuICBmdW5jdGlvbiBkZWJ1ZyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICghbmV3RGVidWdnZXIuZW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICBhcmdzWzBdID0gYCR7bmFtZXNwYWNlfSAke2FyZ3NbMF19YDtcbiAgICB9XG4gICAgbmV3RGVidWdnZXIubG9nKC4uLmFyZ3MpO1xuICB9XG5cbiAgZGVidWdnZXJzLnB1c2gobmV3RGVidWdnZXIpO1xuXG4gIHJldHVybiBuZXdEZWJ1Z2dlcjtcbn1cblxuZnVuY3Rpb24gZGVzdHJveSh0aGlzOiBEZWJ1Z2dlcik6IGJvb2xlYW4ge1xuICBjb25zdCBpbmRleCA9IGRlYnVnZ2Vycy5pbmRleE9mKHRoaXMpO1xuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIGRlYnVnZ2Vycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKHRoaXM6IERlYnVnZ2VyLCBuYW1lc3BhY2U6IHN0cmluZyk6IERlYnVnZ2VyIHtcbiAgY29uc3QgbmV3RGVidWdnZXIgPSBjcmVhdGVEZWJ1Z2dlcihgJHt0aGlzLm5hbWVzcGFjZX06JHtuYW1lc3BhY2V9YCk7XG4gIG5ld0RlYnVnZ2VyLmxvZyA9IHRoaXMubG9nO1xuICByZXR1cm4gbmV3RGVidWdnZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYnVnT2JqO1xuIiwgIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgZGVidWcgZnJvbSBcIi4vZGVidWcuanNcIjtcblxuaW1wb3J0IHR5cGUgeyBEZWJ1Z2dlciB9IGZyb20gXCIuL2RlYnVnLmpzXCI7XG5leHBvcnQgdHlwZSB7IERlYnVnZ2VyIH07XG5cbi8qKlxuICogVGhlIGxvZyBsZXZlbHMgc3VwcG9ydGVkIGJ5IHRoZSBsb2dnZXIuXG4gKiBUaGUgbG9nIGxldmVscyBpbiBvcmRlciBvZiBtb3N0IHZlcmJvc2UgdG8gbGVhc3QgdmVyYm9zZSBhcmU6XG4gKiAtIHZlcmJvc2VcbiAqIC0gaW5mb1xuICogLSB3YXJuaW5nXG4gKiAtIGVycm9yXG4gKi9cbmV4cG9ydCB0eXBlIFR5cGVTcGVjUnVudGltZUxvZ0xldmVsID0gXCJ2ZXJib3NlXCIgfCBcImluZm9cIiB8IFwid2FybmluZ1wiIHwgXCJlcnJvclwiO1xuXG4vKipcbiAqIEEgVHlwZVNwZWNSdW50aW1lQ2xpZW50TG9nZ2VyIGlzIGEgZnVuY3Rpb24gdGhhdCBjYW4gbG9nIHRvIGFuIGFwcHJvcHJpYXRlIHNldmVyaXR5IGxldmVsLlxuICovXG5leHBvcnQgdHlwZSBUeXBlU3BlY1J1bnRpbWVDbGllbnRMb2dnZXIgPSBEZWJ1Z2dlcjtcblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBtZXRob2RzIGF2YWlsYWJsZSBvbiB0aGUgU0RLLWZhY2luZyBsb2dnZXIuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHlwZVNwZWNSdW50aW1lTG9nZ2VyIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGZhaWx1cmVzIHRoZSBwcm9ncmFtIGlzIHVubGlrZWx5IHRvIHJlY292ZXIgZnJvbSxcbiAgICogc3VjaCBhcyBPdXQgb2YgTWVtb3J5LlxuICAgKi9cbiAgZXJyb3I6IERlYnVnZ2VyO1xuICAvKipcbiAgICogVXNlZCB3aGVuIGEgZnVuY3Rpb24gZmFpbHMgdG8gcGVyZm9ybSBpdHMgaW50ZW5kZWQgdGFzay5cbiAgICogVXN1YWxseSB0aGlzIG1lYW5zIHRoZSBmdW5jdGlvbiB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbi5cbiAgICogTm90IHVzZWQgZm9yIHNlbGYtaGVhbGluZyBldmVudHMgKGUuZy4gYXV0b21hdGljIHJldHJ5KVxuICAgKi9cbiAgd2FybmluZzogRGVidWdnZXI7XG4gIC8qKlxuICAgKiBVc2VkIHdoZW4gYSBmdW5jdGlvbiBvcGVyYXRlcyBub3JtYWxseS5cbiAgICovXG4gIGluZm86IERlYnVnZ2VyO1xuICAvKipcbiAgICogVXNlZCBmb3IgZGV0YWlsZWQgdHJvdWJsZXNob290aW5nIHNjZW5hcmlvcy4gVGhpcyBpc1xuICAgKiBpbnRlbmRlZCBmb3IgdXNlIGJ5IGRldmVsb3BlcnMgLyBzeXN0ZW0gYWRtaW5pc3RyYXRvcnNcbiAgICogZm9yIGRpYWdub3Npbmcgc3BlY2lmaWMgZmFpbHVyZXMuXG4gICAqL1xuICB2ZXJib3NlOiBEZWJ1Z2dlcjtcbn1cblxuLyoqXG4gKiB0b2RvIGRvY1xuICovXG5leHBvcnQgaW50ZXJmYWNlIExvZ2dlckNvbnRleHQge1xuICAvKipcbiAgICogSW1tZWRpYXRlbHkgZW5hYmxlcyBsb2dnaW5nIGF0IHRoZSBzcGVjaWZpZWQgbG9nIGxldmVsLiBJZiBubyBsZXZlbCBpcyBzcGVjaWZpZWQsIGxvZ2dpbmcgaXMgZGlzYWJsZWQuXG4gICAqIEBwYXJhbSBsZXZlbCAtIFRoZSBsb2cgbGV2ZWwgdG8gZW5hYmxlIGZvciBsb2dnaW5nLlxuICAgKiBPcHRpb25zIGZyb20gbW9zdCB2ZXJib3NlIHRvIGxlYXN0IHZlcmJvc2UgYXJlOlxuICAgKiAtIHZlcmJvc2VcbiAgICogLSBpbmZvXG4gICAqIC0gd2FybmluZ1xuICAgKiAtIGVycm9yXG4gICAqL1xuICBzZXRMb2dMZXZlbChsb2dMZXZlbD86IFR5cGVTcGVjUnVudGltZUxvZ0xldmVsKTogdm9pZDtcblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjdXJyZW50bHkgc3BlY2lmaWVkIGxvZyBsZXZlbC5cbiAgICovXG4gIGdldExvZ0xldmVsKCk6IFR5cGVTcGVjUnVudGltZUxvZ0xldmVsIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbG9nZ2VyIGZvciB1c2UgYnkgdGhlIFNES3MgdGhhdCBpbmhlcml0cyBmcm9tIGBUeXBlU3BlY1J1bnRpbWVMb2dnZXJgLlxuICAgKiBAcGFyYW0gbmFtZXNwYWNlIC0gVGhlIG5hbWUgb2YgdGhlIFNESyBwYWNrYWdlLlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjcmVhdGVDbGllbnRMb2dnZXIobmFtZXNwYWNlOiBzdHJpbmcpOiBUeXBlU3BlY1J1bnRpbWVMb2dnZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBUeXBlU3BlY1J1bnRpbWVDbGllbnRMb2dnZXIgcHJvdmlkZXMgYSBtZWNoYW5pc20gZm9yIG92ZXJyaWRpbmcgd2hlcmUgbG9ncyBhcmUgb3V0cHV0IHRvLlxuICAgKiBCeSBkZWZhdWx0LCBsb2dzIGFyZSBzZW50IHRvIHN0ZGVyci5cbiAgICogT3ZlcnJpZGUgdGhlIGBsb2dgIG1ldGhvZCB0byByZWRpcmVjdCBsb2dzIHRvIGFub3RoZXIgbG9jYXRpb24uXG4gICAqL1xuICBsb2dnZXI6IFR5cGVTcGVjUnVudGltZUNsaWVudExvZ2dlcjtcbn1cblxuLyoqXG4gKiBPcHRpb24gZm9yIGNyZWF0aW5nIGEgVHlwZVNwZWNSdW50aW1lTG9nZ2VyQ29udGV4dC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVMb2dnZXJDb250ZXh0T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGUgdG8gY2hlY2sgZm9yIHRoZSBsb2cgbGV2ZWwuXG4gICAqL1xuICBsb2dMZXZlbEVudlZhck5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG5hbWVzcGFjZSBvZiB0aGUgbG9nZ2VyLlxuICAgKi9cbiAgbmFtZXNwYWNlOiBzdHJpbmc7XG59XG5cbmNvbnN0IFRZUEVTUEVDX1JVTlRJTUVfTE9HX0xFVkVMUyA9IFtcInZlcmJvc2VcIiwgXCJpbmZvXCIsIFwid2FybmluZ1wiLCBcImVycm9yXCJdO1xuXG50eXBlIERlYnVnZ2VyV2l0aExvZ0xldmVsID0gRGVidWdnZXIgJiB7IGxldmVsOiBUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbCB9O1xuXG5jb25zdCBsZXZlbE1hcCA9IHtcbiAgdmVyYm9zZTogNDAwLFxuICBpbmZvOiAzMDAsXG4gIHdhcm5pbmc6IDIwMCxcbiAgZXJyb3I6IDEwMCxcbn07XG5cbmZ1bmN0aW9uIHBhdGNoTG9nTWV0aG9kKFxuICBwYXJlbnQ6IFR5cGVTcGVjUnVudGltZUNsaWVudExvZ2dlcixcbiAgY2hpbGQ6IFR5cGVTcGVjUnVudGltZUNsaWVudExvZ2dlciB8IERlYnVnZ2VyV2l0aExvZ0xldmVsLFxuKTogdm9pZCB7XG4gIGNoaWxkLmxvZyA9ICguLi5hcmdzKSA9PiB7XG4gICAgcGFyZW50LmxvZyguLi5hcmdzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbChsZXZlbDogc3RyaW5nKTogbGV2ZWwgaXMgVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwge1xuICByZXR1cm4gVFlQRVNQRUNfUlVOVElNRV9MT0dfTEVWRUxTLmluY2x1ZGVzKGxldmVsKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbG9nZ2VyIGNvbnRleHQgYmFzZSBvbiB0aGUgcHJvdmlkZWQgb3B0aW9ucy5cbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgZm9yIGNyZWF0aW5nIGEgbG9nZ2VyIGNvbnRleHQuXG4gKiBAcmV0dXJucyBUaGUgbG9nZ2VyIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2dnZXJDb250ZXh0KG9wdGlvbnM6IENyZWF0ZUxvZ2dlckNvbnRleHRPcHRpb25zKTogTG9nZ2VyQ29udGV4dCB7XG4gIGNvbnN0IHJlZ2lzdGVyZWRMb2dnZXJzID0gbmV3IFNldDxEZWJ1Z2dlcldpdGhMb2dMZXZlbD4oKTtcbiAgY29uc3QgbG9nTGV2ZWxGcm9tRW52ID1cbiAgICAodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnZbb3B0aW9ucy5sb2dMZXZlbEVudlZhck5hbWVdKSB8fFxuICAgIHVuZGVmaW5lZDtcblxuICBsZXQgbG9nTGV2ZWw6IFR5cGVTcGVjUnVudGltZUxvZ0xldmVsIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0IGNsaWVudExvZ2dlcjogVHlwZVNwZWNSdW50aW1lQ2xpZW50TG9nZ2VyID0gZGVidWcob3B0aW9ucy5uYW1lc3BhY2UpO1xuICBjbGllbnRMb2dnZXIubG9nID0gKC4uLmFyZ3MpID0+IHtcbiAgICBkZWJ1Zy5sb2coLi4uYXJncyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gY29udGV4dFNldExvZ0xldmVsKGxldmVsPzogVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwpOiB2b2lkIHtcbiAgICBpZiAobGV2ZWwgJiYgIWlzVHlwZVNwZWNSdW50aW1lTG9nTGV2ZWwobGV2ZWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbmtub3duIGxvZyBsZXZlbCAnJHtsZXZlbH0nLiBBY2NlcHRhYmxlIHZhbHVlczogJHtUWVBFU1BFQ19SVU5USU1FX0xPR19MRVZFTFMuam9pbihcIixcIil9YCxcbiAgICAgICk7XG4gICAgfVxuICAgIGxvZ0xldmVsID0gbGV2ZWw7XG5cbiAgICBjb25zdCBlbmFibGVkTmFtZXNwYWNlcyA9IFtdO1xuICAgIGZvciAoY29uc3QgbG9nZ2VyIG9mIHJlZ2lzdGVyZWRMb2dnZXJzKSB7XG4gICAgICBpZiAoc2hvdWxkRW5hYmxlKGxvZ2dlcikpIHtcbiAgICAgICAgZW5hYmxlZE5hbWVzcGFjZXMucHVzaChsb2dnZXIubmFtZXNwYWNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWJ1Zy5lbmFibGUoZW5hYmxlZE5hbWVzcGFjZXMuam9pbihcIixcIikpO1xuICB9XG5cbiAgaWYgKGxvZ0xldmVsRnJvbUVudikge1xuICAgIC8vIGF2b2lkIGNhbGxpbmcgc2V0TG9nTGV2ZWwgYmVjYXVzZSB3ZSBkb24ndCB3YW50IGEgbWlzLXNldCBlbnZpcm9ubWVudCB2YXJpYWJsZSB0byBjcmFzaFxuICAgIGlmIChpc1R5cGVTcGVjUnVudGltZUxvZ0xldmVsKGxvZ0xldmVsRnJvbUVudikpIHtcbiAgICAgIGNvbnRleHRTZXRMb2dMZXZlbChsb2dMZXZlbEZyb21FbnYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgJHtvcHRpb25zLmxvZ0xldmVsRW52VmFyTmFtZX0gc2V0IHRvIHVua25vd24gbG9nIGxldmVsICcke2xvZ0xldmVsRnJvbUVudn0nOyBsb2dnaW5nIGlzIG5vdCBlbmFibGVkLiBBY2NlcHRhYmxlIHZhbHVlczogJHtUWVBFU1BFQ19SVU5USU1FX0xPR19MRVZFTFMuam9pbihcbiAgICAgICAgICBcIiwgXCIsXG4gICAgICAgICl9LmAsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEVuYWJsZShsb2dnZXI6IERlYnVnZ2VyV2l0aExvZ0xldmVsKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJvb2xlYW4obG9nTGV2ZWwgJiYgbGV2ZWxNYXBbbG9nZ2VyLmxldmVsXSA8PSBsZXZlbE1hcFtsb2dMZXZlbF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTG9nZ2VyKFxuICAgIHBhcmVudDogVHlwZVNwZWNSdW50aW1lQ2xpZW50TG9nZ2VyLFxuICAgIGxldmVsOiBUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbCxcbiAgKTogRGVidWdnZXJXaXRoTG9nTGV2ZWwge1xuICAgIGNvbnN0IGxvZ2dlcjogRGVidWdnZXJXaXRoTG9nTGV2ZWwgPSBPYmplY3QuYXNzaWduKHBhcmVudC5leHRlbmQobGV2ZWwpLCB7XG4gICAgICBsZXZlbCxcbiAgICB9KTtcblxuICAgIHBhdGNoTG9nTWV0aG9kKHBhcmVudCwgbG9nZ2VyKTtcblxuICAgIGlmIChzaG91bGRFbmFibGUobG9nZ2VyKSkge1xuICAgICAgY29uc3QgZW5hYmxlZE5hbWVzcGFjZXMgPSBkZWJ1Zy5kaXNhYmxlKCk7XG4gICAgICBkZWJ1Zy5lbmFibGUoZW5hYmxlZE5hbWVzcGFjZXMgKyBcIixcIiArIGxvZ2dlci5uYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyZWRMb2dnZXJzLmFkZChsb2dnZXIpO1xuXG4gICAgcmV0dXJuIGxvZ2dlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRleHRHZXRMb2dMZXZlbCgpOiBUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIGxvZ0xldmVsO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udGV4dENyZWF0ZUNsaWVudExvZ2dlcihuYW1lc3BhY2U6IHN0cmluZyk6IFR5cGVTcGVjUnVudGltZUxvZ2dlciB7XG4gICAgY29uc3QgY2xpZW50Um9vdExvZ2dlcjogVHlwZVNwZWNSdW50aW1lQ2xpZW50TG9nZ2VyID0gY2xpZW50TG9nZ2VyLmV4dGVuZChuYW1lc3BhY2UpO1xuICAgIHBhdGNoTG9nTWV0aG9kKGNsaWVudExvZ2dlciwgY2xpZW50Um9vdExvZ2dlcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBjcmVhdGVMb2dnZXIoY2xpZW50Um9vdExvZ2dlciwgXCJlcnJvclwiKSxcbiAgICAgIHdhcm5pbmc6IGNyZWF0ZUxvZ2dlcihjbGllbnRSb290TG9nZ2VyLCBcIndhcm5pbmdcIiksXG4gICAgICBpbmZvOiBjcmVhdGVMb2dnZXIoY2xpZW50Um9vdExvZ2dlciwgXCJpbmZvXCIpLFxuICAgICAgdmVyYm9zZTogY3JlYXRlTG9nZ2VyKGNsaWVudFJvb3RMb2dnZXIsIFwidmVyYm9zZVwiKSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRMb2dMZXZlbDogY29udGV4dFNldExvZ0xldmVsLFxuICAgIGdldExvZ0xldmVsOiBjb250ZXh0R2V0TG9nTGV2ZWwsXG4gICAgY3JlYXRlQ2xpZW50TG9nZ2VyOiBjb250ZXh0Q3JlYXRlQ2xpZW50TG9nZ2VyLFxuICAgIGxvZ2dlcjogY2xpZW50TG9nZ2VyLFxuICB9O1xufVxuXG5jb25zdCBjb250ZXh0ID0gY3JlYXRlTG9nZ2VyQ29udGV4dCh7XG4gIGxvZ0xldmVsRW52VmFyTmFtZTogXCJUWVBFU1BFQ19SVU5USU1FX0xPR19MRVZFTFwiLFxuICBuYW1lc3BhY2U6IFwidHlwZVNwZWNSdW50aW1lXCIsXG59KTtcblxuLyoqXG4gKiBJbW1lZGlhdGVseSBlbmFibGVzIGxvZ2dpbmcgYXQgdGhlIHNwZWNpZmllZCBsb2cgbGV2ZWwuIElmIG5vIGxldmVsIGlzIHNwZWNpZmllZCwgbG9nZ2luZyBpcyBkaXNhYmxlZC5cbiAqIEBwYXJhbSBsZXZlbCAtIFRoZSBsb2cgbGV2ZWwgdG8gZW5hYmxlIGZvciBsb2dnaW5nLlxuICogT3B0aW9ucyBmcm9tIG1vc3QgdmVyYm9zZSB0byBsZWFzdCB2ZXJib3NlIGFyZTpcbiAqIC0gdmVyYm9zZVxuICogLSBpbmZvXG4gKiAtIHdhcm5pbmdcbiAqIC0gZXJyb3JcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZWRlY2xhcmVcbmV4cG9ydCBjb25zdCBUeXBlU3BlY1J1bnRpbWVMb2dnZXI6IFR5cGVTcGVjUnVudGltZUNsaWVudExvZ2dlciA9IGNvbnRleHQubG9nZ2VyO1xuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgY3VycmVudGx5IHNwZWNpZmllZCBsb2cgbGV2ZWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2dMZXZlbChsb2dMZXZlbD86IFR5cGVTcGVjUnVudGltZUxvZ0xldmVsKTogdm9pZCB7XG4gIGNvbnRleHQuc2V0TG9nTGV2ZWwobG9nTGV2ZWwpO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgY3VycmVudGx5IHNwZWNpZmllZCBsb2cgbGV2ZWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2dMZXZlbCgpOiBUeXBlU3BlY1J1bnRpbWVMb2dMZXZlbCB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBjb250ZXh0LmdldExvZ0xldmVsKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGxvZ2dlciBmb3IgdXNlIGJ5IHRoZSBTREtzIHRoYXQgaW5oZXJpdHMgZnJvbSBgVHlwZVNwZWNSdW50aW1lTG9nZ2VyYC5cbiAqIEBwYXJhbSBuYW1lc3BhY2UgLSBUaGUgbmFtZSBvZiB0aGUgU0RLIHBhY2thZ2UuXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDbGllbnRMb2dnZXIobmFtZXNwYWNlOiBzdHJpbmcpOiBUeXBlU3BlY1J1bnRpbWVMb2dnZXIge1xuICByZXR1cm4gY29udGV4dC5jcmVhdGVDbGllbnRMb2dnZXIobmFtZXNwYWNlKTtcbn1cbiIsICIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyQ29udGV4dCB9IGZyb20gXCJAdHlwZXNwZWMvdHMtaHR0cC1ydW50aW1lL2ludGVybmFsL2xvZ2dlclwiO1xuXG5jb25zdCBjb250ZXh0ID0gY3JlYXRlTG9nZ2VyQ29udGV4dCh7XG4gIGxvZ0xldmVsRW52VmFyTmFtZTogXCJBWlVSRV9MT0dfTEVWRUxcIixcbiAgbmFtZXNwYWNlOiBcImF6dXJlXCIsXG59KTtcblxuLyoqXG4gKiBUaGUgQXp1cmVMb2dnZXIgcHJvdmlkZXMgYSBtZWNoYW5pc20gZm9yIG92ZXJyaWRpbmcgd2hlcmUgbG9ncyBhcmUgb3V0cHV0IHRvLlxuICogQnkgZGVmYXVsdCwgbG9ncyBhcmUgc2VudCB0byBzdGRlcnIuXG4gKiBPdmVycmlkZSB0aGUgYGxvZ2AgbWV0aG9kIHRvIHJlZGlyZWN0IGxvZ3MgdG8gYW5vdGhlciBsb2NhdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IEF6dXJlTG9nZ2VyOiBBenVyZUNsaWVudExvZ2dlciA9IGNvbnRleHQubG9nZ2VyO1xuXG4vKipcbiAqIEltbWVkaWF0ZWx5IGVuYWJsZXMgbG9nZ2luZyBhdCB0aGUgc3BlY2lmaWVkIGxvZyBsZXZlbC4gSWYgbm8gbGV2ZWwgaXMgc3BlY2lmaWVkLCBsb2dnaW5nIGlzIGRpc2FibGVkLlxuICogQHBhcmFtIGxldmVsIC0gVGhlIGxvZyBsZXZlbCB0byBlbmFibGUgZm9yIGxvZ2dpbmcuXG4gKiBPcHRpb25zIGZyb20gbW9zdCB2ZXJib3NlIHRvIGxlYXN0IHZlcmJvc2UgYXJlOlxuICogLSB2ZXJib3NlXG4gKiAtIGluZm9cbiAqIC0gd2FybmluZ1xuICogLSBlcnJvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nTGV2ZWwobGV2ZWw/OiBBenVyZUxvZ0xldmVsKTogdm9pZCB7XG4gIGNvbnRleHQuc2V0TG9nTGV2ZWwobGV2ZWwpO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgY3VycmVudGx5IHNwZWNpZmllZCBsb2cgbGV2ZWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2dMZXZlbCgpOiBBenVyZUxvZ0xldmVsIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGNvbnRleHQuZ2V0TG9nTGV2ZWwoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbG9nZ2VyIGZvciB1c2UgYnkgdGhlIEF6dXJlIFNES3MgdGhhdCBpbmhlcml0cyBmcm9tIGBBenVyZUxvZ2dlcmAuXG4gKiBAcGFyYW0gbmFtZXNwYWNlIC0gVGhlIG5hbWUgb2YgdGhlIFNESyBwYWNrYWdlLlxuICogQGhpZGRlblxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2xpZW50TG9nZ2VyKG5hbWVzcGFjZTogc3RyaW5nKTogQXp1cmVMb2dnZXIge1xuICByZXR1cm4gY29udGV4dC5jcmVhdGVDbGllbnRMb2dnZXIobmFtZXNwYWNlKTtcbn1cblxuLyoqXG4gKiBBIGxvZyBmdW5jdGlvbiB0aGF0IGNhbiBiZSBkeW5hbWljYWxseSBlbmFibGVkIGFuZCByZWRpcmVjdGVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERlYnVnZ2VyIHtcbiAgLyoqXG4gICAqIExvZ3MgdGhlIGdpdmVuIGFyZ3VtZW50cyB0byB0aGUgYGxvZ2AgbWV0aG9kLlxuICAgKi9cbiAgKC4uLmFyZ3M6IGFueVtdKTogdm9pZDtcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhpcyBsb2dnZXIgaXMgYWN0aXZlIGFuZCBsb2dnaW5nLlxuICAgKi9cbiAgZW5hYmxlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFVzZWQgdG8gY2xlYW51cC9yZW1vdmUgdGhpcyBsb2dnZXIuXG4gICAqL1xuICBkZXN0cm95OiAoKSA9PiBib29sZWFuO1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgbG9nIG1ldGhvZC4gQ2FuIGJlIG92ZXJyaWRkZW4gdG8gcmVkaXJlY3Qgb3V0cHV0LlxuICAgKi9cbiAgbG9nOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBUaGUgbmFtZXNwYWNlIG9mIHRoaXMgbG9nZ2VyLlxuICAgKi9cbiAgbmFtZXNwYWNlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFeHRlbmRzIHRoaXMgbG9nZ2VyIHdpdGggYSBjaGlsZCBuYW1lc3BhY2UuXG4gICAqIE5hbWVzcGFjZXMgYXJlIHNlcGFyYXRlZCB3aXRoIGEgJzonIGNoYXJhY3Rlci5cbiAgICovXG4gIGV4dGVuZDogKG5hbWVzcGFjZTogc3RyaW5nKSA9PiBEZWJ1Z2dlcjtcbn1cblxuLyoqXG4gKiBUaGUgbG9nIGxldmVscyBzdXBwb3J0ZWQgYnkgdGhlIGxvZ2dlci5cbiAqIFRoZSBsb2cgbGV2ZWxzIGluIG9yZGVyIG9mIG1vc3QgdmVyYm9zZSB0byBsZWFzdCB2ZXJib3NlIGFyZTpcbiAqIC0gdmVyYm9zZVxuICogLSBpbmZvXG4gKiAtIHdhcm5pbmdcbiAqIC0gZXJyb3JcbiAqL1xuZXhwb3J0IHR5cGUgQXp1cmVMb2dMZXZlbCA9IFwidmVyYm9zZVwiIHwgXCJpbmZvXCIgfCBcIndhcm5pbmdcIiB8IFwiZXJyb3JcIjtcblxuLyoqXG4gKiBBbiBBenVyZUNsaWVudExvZ2dlciBpcyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGxvZyB0byBhbiBhcHByb3ByaWF0ZSBzZXZlcml0eSBsZXZlbC5cbiAqL1xuZXhwb3J0IHR5cGUgQXp1cmVDbGllbnRMb2dnZXIgPSBEZWJ1Z2dlcjtcblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBtZXRob2RzIGF2YWlsYWJsZSBvbiB0aGUgU0RLLWZhY2luZyBsb2dnZXIuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVkZWNsYXJlXG5leHBvcnQgaW50ZXJmYWNlIEF6dXJlTG9nZ2VyIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGZhaWx1cmVzIHRoZSBwcm9ncmFtIGlzIHVubGlrZWx5IHRvIHJlY292ZXIgZnJvbSxcbiAgICogc3VjaCBhcyBPdXQgb2YgTWVtb3J5LlxuICAgKi9cbiAgZXJyb3I6IERlYnVnZ2VyO1xuICAvKipcbiAgICogVXNlZCB3aGVuIGEgZnVuY3Rpb24gZmFpbHMgdG8gcGVyZm9ybSBpdHMgaW50ZW5kZWQgdGFzay5cbiAgICogVXN1YWxseSB0aGlzIG1lYW5zIHRoZSBmdW5jdGlvbiB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbi5cbiAgICogTm90IHVzZWQgZm9yIHNlbGYtaGVhbGluZyBldmVudHMgKGUuZy4gYXV0b21hdGljIHJldHJ5KVxuICAgKi9cbiAgd2FybmluZzogRGVidWdnZXI7XG4gIC8qKlxuICAgKiBVc2VkIHdoZW4gYSBmdW5jdGlvbiBvcGVyYXRlcyBub3JtYWxseS5cbiAgICovXG4gIGluZm86IERlYnVnZ2VyO1xuICAvKipcbiAgICogVXNlZCBmb3IgZGV0YWlsZWQgdHJvdWJsZXNob290aW5nIHNjZW5hcmlvcy4gVGhpcyBpc1xuICAgKiBpbnRlbmRlZCBmb3IgdXNlIGJ5IGRldmVsb3BlcnMgLyBzeXN0ZW0gYWRtaW5pc3RyYXRvcnNcbiAgICogZm9yIGRpYWdub3Npbmcgc3BlY2lmaWMgZmFpbHVyZXMuXG4gICAqL1xuICB2ZXJib3NlOiBEZWJ1Z2dlcjtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDbGllbnRMb2dnZXIgfSBmcm9tIFwiQGF6dXJlL2xvZ2dlclwiO1xuY29uc3QgbG9nZ2VyID0gY3JlYXRlQ2xpZW50TG9nZ2VyKFwid2ViLXB1YnN1Yi1jbGllbnRcIik7XG5leHBvcnQge1xuICBsb2dnZXJcbn07XG4iLCAiaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSBcImJ1ZmZlclwiO1xuZnVuY3Rpb24gcGFyc2VNZXNzYWdlcyhpbnB1dCkge1xuICBpZiAodHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dCBmb3IgSlNPTiBodWIgcHJvdG9jb2wuIEV4cGVjdGVkIGEgc3RyaW5nLlwiKTtcbiAgfVxuICBpZiAoIWlucHV0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gaW5wdXRcIik7XG4gIH1cbiAgY29uc3QgcGFyc2VkTWVzc2FnZSA9IEpTT04ucGFyc2UoaW5wdXQpO1xuICBjb25zdCB0eXBlZE1lc3NhZ2UgPSBwYXJzZWRNZXNzYWdlO1xuICBsZXQgcmV0dXJuTWVzc2FnZTtcbiAgaWYgKHR5cGVkTWVzc2FnZS50eXBlID09PSBcInN5c3RlbVwiKSB7XG4gICAgaWYgKHR5cGVkTWVzc2FnZS5ldmVudCA9PT0gXCJjb25uZWN0ZWRcIikge1xuICAgICAgcmV0dXJuTWVzc2FnZSA9IHsgLi4ucGFyc2VkTWVzc2FnZSwga2luZDogXCJjb25uZWN0ZWRcIiB9O1xuICAgIH0gZWxzZSBpZiAodHlwZWRNZXNzYWdlLmV2ZW50ID09PSBcImRpc2Nvbm5lY3RlZFwiKSB7XG4gICAgICByZXR1cm5NZXNzYWdlID0geyAuLi5wYXJzZWRNZXNzYWdlLCBraW5kOiBcImRpc2Nvbm5lY3RlZFwiIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlZE1lc3NhZ2UudHlwZSA9PT0gXCJtZXNzYWdlXCIpIHtcbiAgICBpZiAodHlwZWRNZXNzYWdlLmZyb20gPT09IFwiZ3JvdXBcIikge1xuICAgICAgY29uc3QgZGF0YSA9IHBhcnNlUGF5bG9hZChwYXJzZWRNZXNzYWdlLmRhdGEsIHBhcnNlZE1lc3NhZ2UuZGF0YVR5cGUpO1xuICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm5NZXNzYWdlID0geyAuLi5wYXJzZWRNZXNzYWdlLCBkYXRhLCBraW5kOiBcImdyb3VwRGF0YVwiIH07XG4gICAgfSBlbHNlIGlmICh0eXBlZE1lc3NhZ2UuZnJvbSA9PT0gXCJzZXJ2ZXJcIikge1xuICAgICAgY29uc3QgZGF0YSA9IHBhcnNlUGF5bG9hZChwYXJzZWRNZXNzYWdlLmRhdGEsIHBhcnNlZE1lc3NhZ2UuZGF0YVR5cGUpO1xuICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm5NZXNzYWdlID0ge1xuICAgICAgICAuLi5wYXJzZWRNZXNzYWdlLFxuICAgICAgICBkYXRhLFxuICAgICAgICBraW5kOiBcInNlcnZlckRhdGFcIlxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVkTWVzc2FnZS50eXBlID09PSBcImFja1wiKSB7XG4gICAgcmV0dXJuTWVzc2FnZSA9IHsgLi4ucGFyc2VkTWVzc2FnZSwga2luZDogXCJhY2tcIiB9O1xuICB9IGVsc2UgaWYgKHR5cGVkTWVzc2FnZS50eXBlID09PSBcImludm9rZVJlc3BvbnNlXCIpIHtcbiAgICBsZXQgZGF0YTtcbiAgICBpZiAocGFyc2VkTWVzc2FnZS5kYXRhVHlwZSAhPSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJzZWREYXRhID0gcGFyc2VQYXlsb2FkKHBhcnNlZE1lc3NhZ2UuZGF0YSwgcGFyc2VkTWVzc2FnZS5kYXRhVHlwZSk7XG4gICAgICBpZiAocGFyc2VkRGF0YSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGRhdGEgPSBwYXJzZWREYXRhO1xuICAgIH1cbiAgICByZXR1cm5NZXNzYWdlID0ge1xuICAgICAga2luZDogXCJpbnZva2VSZXNwb25zZVwiLFxuICAgICAgaW52b2NhdGlvbklkOiBwYXJzZWRNZXNzYWdlLmludm9jYXRpb25JZCxcbiAgICAgIHN1Y2Nlc3M6IHBhcnNlZE1lc3NhZ2Uuc3VjY2VzcyxcbiAgICAgIGRhdGFUeXBlOiBwYXJzZWRNZXNzYWdlLmRhdGFUeXBlLFxuICAgICAgZGF0YSxcbiAgICAgIGVycm9yOiBwYXJzZWRNZXNzYWdlLmVycm9yXG4gICAgfTtcbiAgfSBlbHNlIGlmICh0eXBlZE1lc3NhZ2UudHlwZSA9PT0gXCJjYW5jZWxJbnZvY2F0aW9uXCIpIHtcbiAgICByZXR1cm5NZXNzYWdlID0ge1xuICAgICAgLi4ucGFyc2VkTWVzc2FnZSxcbiAgICAgIGtpbmQ6IFwiY2FuY2VsSW52b2NhdGlvblwiXG4gICAgfTtcbiAgfSBlbHNlIGlmICh0eXBlZE1lc3NhZ2UudHlwZSA9PT0gXCJwb25nXCIpIHtcbiAgICByZXR1cm5NZXNzYWdlID0geyAuLi5wYXJzZWRNZXNzYWdlLCBraW5kOiBcInBvbmdcIiB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiByZXR1cm5NZXNzYWdlO1xufVxuZnVuY3Rpb24gd3JpdGVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgbGV0IGRhdGE7XG4gIHN3aXRjaCAobWVzc2FnZS5raW5kKSB7XG4gICAgY2FzZSBcImpvaW5Hcm91cFwiOiB7XG4gICAgICBkYXRhID0geyB0eXBlOiBcImpvaW5Hcm91cFwiLCBncm91cDogbWVzc2FnZS5ncm91cCwgYWNrSWQ6IG1lc3NhZ2UuYWNrSWQgfTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwibGVhdmVHcm91cFwiOiB7XG4gICAgICBkYXRhID0geyB0eXBlOiBcImxlYXZlR3JvdXBcIiwgZ3JvdXA6IG1lc3NhZ2UuZ3JvdXAsIGFja0lkOiBtZXNzYWdlLmFja0lkIH07XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBcInNlbmRFdmVudFwiOiB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICB0eXBlOiBcImV2ZW50XCIsXG4gICAgICAgIGV2ZW50OiBtZXNzYWdlLmV2ZW50LFxuICAgICAgICBhY2tJZDogbWVzc2FnZS5hY2tJZCxcbiAgICAgICAgZGF0YVR5cGU6IG1lc3NhZ2UuZGF0YVR5cGUsXG4gICAgICAgIGRhdGE6IGdldFBheWxvYWQobWVzc2FnZS5kYXRhLCBtZXNzYWdlLmRhdGFUeXBlKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwic2VuZFRvR3JvdXBcIjoge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgdHlwZTogXCJzZW5kVG9Hcm91cFwiLFxuICAgICAgICBncm91cDogbWVzc2FnZS5ncm91cCxcbiAgICAgICAgYWNrSWQ6IG1lc3NhZ2UuYWNrSWQsXG4gICAgICAgIGRhdGFUeXBlOiBtZXNzYWdlLmRhdGFUeXBlLFxuICAgICAgICBkYXRhOiBnZXRQYXlsb2FkKG1lc3NhZ2UuZGF0YSwgbWVzc2FnZS5kYXRhVHlwZSksXG4gICAgICAgIG5vRWNobzogbWVzc2FnZS5ub0VjaG9cbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBcInNlcXVlbmNlQWNrXCI6IHtcbiAgICAgIGRhdGEgPSB7IHR5cGU6IFwic2VxdWVuY2VBY2tcIiwgc2VxdWVuY2VJZDogbWVzc2FnZS5zZXF1ZW5jZUlkIH07XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBcImludm9rZVwiOiB7XG4gICAgICBjb25zdCBpbnZva2VQYXlsb2FkID0ge1xuICAgICAgICB0eXBlOiBcImludm9rZVwiLFxuICAgICAgICBpbnZvY2F0aW9uSWQ6IG1lc3NhZ2UuaW52b2NhdGlvbklkLFxuICAgICAgICB0YXJnZXQ6IG1lc3NhZ2UudGFyZ2V0LFxuICAgICAgICBldmVudDogbWVzc2FnZS5ldmVudFxuICAgICAgfTtcbiAgICAgIGlmIChtZXNzYWdlLmRhdGFUeXBlICE9IG51bGwgJiYgbWVzc2FnZS5kYXRhICE9IG51bGwpIHtcbiAgICAgICAgaW52b2tlUGF5bG9hZC5kYXRhVHlwZSA9IG1lc3NhZ2UuZGF0YVR5cGU7XG4gICAgICAgIGludm9rZVBheWxvYWQuZGF0YSA9IGdldFBheWxvYWQobWVzc2FnZS5kYXRhLCBtZXNzYWdlLmRhdGFUeXBlKTtcbiAgICAgIH1cbiAgICAgIGRhdGEgPSBpbnZva2VQYXlsb2FkO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgXCJpbnZva2VSZXNwb25zZVwiOiB7XG4gICAgICBjb25zdCBpbnZva2VSZXNwb25zZSA9IHtcbiAgICAgICAgdHlwZTogXCJpbnZva2VSZXNwb25zZVwiLFxuICAgICAgICBpbnZvY2F0aW9uSWQ6IG1lc3NhZ2UuaW52b2NhdGlvbklkLFxuICAgICAgICBzdWNjZXNzOiBtZXNzYWdlLnN1Y2Nlc3MsXG4gICAgICAgIGVycm9yOiBtZXNzYWdlLmVycm9yXG4gICAgICB9O1xuICAgICAgaWYgKG1lc3NhZ2UuZGF0YVR5cGUgIT0gbnVsbCAmJiBtZXNzYWdlLmRhdGEgIT0gbnVsbCkge1xuICAgICAgICBpbnZva2VSZXNwb25zZS5kYXRhVHlwZSA9IG1lc3NhZ2UuZGF0YVR5cGU7XG4gICAgICAgIGludm9rZVJlc3BvbnNlLmRhdGEgPSBnZXRQYXlsb2FkKG1lc3NhZ2UuZGF0YSwgbWVzc2FnZS5kYXRhVHlwZSk7XG4gICAgICB9XG4gICAgICBkYXRhID0gaW52b2tlUmVzcG9uc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBcImNhbmNlbEludm9jYXRpb25cIjoge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgdHlwZTogXCJjYW5jZWxJbnZvY2F0aW9uXCIsXG4gICAgICAgIGludm9jYXRpb25JZDogbWVzc2FnZS5pbnZvY2F0aW9uSWRcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBcInBpbmdcIjoge1xuICAgICAgZGF0YSA9IHsgdHlwZTogXCJwaW5nXCIgfTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHR5cGU6ICR7bWVzc2FnZS5raW5kfWApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG59XG5mdW5jdGlvbiBnZXRQYXlsb2FkKGRhdGEsIGRhdGFUeXBlKSB7XG4gIHN3aXRjaCAoZGF0YVR5cGUpIHtcbiAgICBjYXNlIFwidGV4dFwiOiB7XG4gICAgICBpZiAodHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1lc3NhZ2UgbXVzdCBiZSBhIHN0cmluZy5cIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgY2FzZSBcImpzb25cIjoge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGNhc2UgXCJiaW5hcnlcIjpcbiAgICBjYXNlIFwicHJvdG9idWZcIjoge1xuICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oZGF0YSkudG9TdHJpbmcoXCJiYXNlNjRcIik7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWVzc2FnZSBtdXN0IGJlIGEgQXJyYXlCdWZmZXJcIik7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBwYXJzZVBheWxvYWQoZGF0YSwgZGF0YVR5cGUpIHtcbiAgaWYgKGRhdGFUeXBlID09PSBcInRleHRcIikge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1lc3NhZ2UgbXVzdCBiZSBhIHN0cmluZyB3aGVuIGRhdGFUeXBlIGlzIHRleHRcIik7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9IGVsc2UgaWYgKGRhdGFUeXBlID09PSBcImpzb25cIikge1xuICAgIHJldHVybiBkYXRhO1xuICB9IGVsc2UgaWYgKGRhdGFUeXBlID09PSBcImJpbmFyeVwiIHx8IGRhdGFUeXBlID09PSBcInByb3RvYnVmXCIpIHtcbiAgICBjb25zdCBidWYgPSBCdWZmZXIuZnJvbShkYXRhLCBcImJhc2U2NFwiKTtcbiAgICByZXR1cm4gYnVmLmJ1ZmZlci5zbGljZShidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVPZmZzZXQgKyBidWYuYnl0ZUxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIHBhcnNlTWVzc2FnZXMsXG4gIHdyaXRlTWVzc2FnZVxufTtcbiIsICJpbXBvcnQgKiBhcyBiYXNlIGZyb20gXCIuL2pzb25Qcm90b2NvbEJhc2UuanNcIjtcbmNsYXNzIFdlYlB1YlN1Ykpzb25Qcm90b2NvbEltcGwge1xuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgcHJvdG9jb2wgc3VwcG9ydHMgcmVsaWFibGUgZmVhdHVyZXNcbiAgICovXG4gIGlzUmVsaWFibGVTdWJQcm90b2NvbCA9IGZhbHNlO1xuICAvKipcbiAgICogVGhlIG5hbWUgb2Ygc3VicHJvdG9jb2wuIE5hbWUgd2lsbCBiZSB1c2VkIGluIHdlYnNvY2tldCBzdWJwcm90b2NvbFxuICAgKi9cbiAgbmFtZSA9IFwianNvbi53ZWJwdWJzdWIuYXp1cmUudjFcIjtcbiAgLyoqXG4gICAqIENyZWF0ZXMgV2ViUHViU3ViTWVzc2FnZSBvYmplY3RzIGZyb20gdGhlIHNwZWNpZmllZCBzZXJpYWxpemVkIHJlcHJlc2VudGF0aW9uLlxuICAgKiBAcGFyYW0gaW5wdXQgLSBUaGUgc2VyaWFsaXplZCByZXByZXNlbnRhdGlvblxuICAgKi9cbiAgcGFyc2VNZXNzYWdlcyhpbnB1dCkge1xuICAgIHJldHVybiBiYXNlLnBhcnNlTWVzc2FnZXMoaW5wdXQpO1xuICB9XG4gIC8qKlxuICAgKiBXcml0ZSBXZWJQdWJTdWJNZXNzYWdlIHRvIHN0cmluZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIGJlIHdyaXR0ZW5cbiAgICovXG4gIHdyaXRlTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGJhc2Uud3JpdGVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG59XG5leHBvcnQge1xuICBXZWJQdWJTdWJKc29uUHJvdG9jb2xJbXBsXG59O1xuIiwgImltcG9ydCAqIGFzIGJhc2UgZnJvbSBcIi4vanNvblByb3RvY29sQmFzZS5qc1wiO1xuY2xhc3MgV2ViUHViU3ViSnNvblJlbGlhYmxlUHJvdG9jb2xJbXBsIHtcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHByb3RvY29sIHN1cHBvcnRzIHJlbGlhYmxlIGZlYXR1cmVzXG4gICAqL1xuICBpc1JlbGlhYmxlU3ViUHJvdG9jb2wgPSB0cnVlO1xuICAvKipcbiAgICogVGhlIG5hbWUgb2Ygc3VicHJvdG9jb2wuIE5hbWUgd2lsbCBiZSB1c2VkIGluIHdlYnNvY2tldCBzdWJwcm90b2NvbFxuICAgKi9cbiAgbmFtZSA9IFwianNvbi5yZWxpYWJsZS53ZWJwdWJzdWIuYXp1cmUudjFcIjtcbiAgLyoqXG4gICAqIENyZWF0ZXMgV2ViUHViU3ViTWVzc2FnZSBvYmplY3RzIGZyb20gdGhlIHNwZWNpZmllZCBzZXJpYWxpemVkIHJlcHJlc2VudGF0aW9uLlxuICAgKiBAcGFyYW0gaW5wdXQgLSBUaGUgc2VyaWFsaXplZCByZXByZXNlbnRhdGlvblxuICAgKi9cbiAgcGFyc2VNZXNzYWdlcyhpbnB1dCkge1xuICAgIHJldHVybiBiYXNlLnBhcnNlTWVzc2FnZXMoaW5wdXQpO1xuICB9XG4gIC8qKlxuICAgKiBXcml0ZSBXZWJQdWJTdWJNZXNzYWdlIHRvIHN0cmluZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIGJlIHdyaXR0ZW5cbiAgICovXG4gIHdyaXRlTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGJhc2Uud3JpdGVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG59XG5leHBvcnQge1xuICBXZWJQdWJTdWJKc29uUmVsaWFibGVQcm90b2NvbEltcGxcbn07XG4iLCAiaW1wb3J0IHsgV2ViUHViU3ViSnNvblByb3RvY29sSW1wbCB9IGZyb20gXCIuL3dlYlB1YlN1Ykpzb25Qcm90b2NvbC5qc1wiO1xuaW1wb3J0IHsgV2ViUHViU3ViSnNvblJlbGlhYmxlUHJvdG9jb2xJbXBsIH0gZnJvbSBcIi4vd2ViUHViU3ViSnNvblJlbGlhYmxlUHJvdG9jb2wuanNcIjtcbmNvbnN0IFdlYlB1YlN1Ykpzb25Qcm90b2NvbCA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBXZWJQdWJTdWJKc29uUHJvdG9jb2xJbXBsKCk7XG59O1xuY29uc3QgV2ViUHViU3ViSnNvblJlbGlhYmxlUHJvdG9jb2wgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgV2ViUHViU3ViSnNvblJlbGlhYmxlUHJvdG9jb2xJbXBsKCk7XG59O1xuZXhwb3J0IHtcbiAgV2ViUHViU3ViSnNvblByb3RvY29sLFxuICBXZWJQdWJTdWJKc29uUmVsaWFibGVQcm90b2NvbFxufTtcbiIsICJpbXBvcnQgY3JlYXRlV2ViU29ja2V0U3RyZWFtIGZyb20gJy4vbGliL3N0cmVhbS5qcyc7XG5pbXBvcnQgZXh0ZW5zaW9uIGZyb20gJy4vbGliL2V4dGVuc2lvbi5qcyc7XG5pbXBvcnQgUGVyTWVzc2FnZURlZmxhdGUgZnJvbSAnLi9saWIvcGVybWVzc2FnZS1kZWZsYXRlLmpzJztcbmltcG9ydCBSZWNlaXZlciBmcm9tICcuL2xpYi9yZWNlaXZlci5qcyc7XG5pbXBvcnQgU2VuZGVyIGZyb20gJy4vbGliL3NlbmRlci5qcyc7XG5pbXBvcnQgc3VicHJvdG9jb2wgZnJvbSAnLi9saWIvc3VicHJvdG9jb2wuanMnO1xuaW1wb3J0IFdlYlNvY2tldCBmcm9tICcuL2xpYi93ZWJzb2NrZXQuanMnO1xuaW1wb3J0IFdlYlNvY2tldFNlcnZlciBmcm9tICcuL2xpYi93ZWJzb2NrZXQtc2VydmVyLmpzJztcblxuZXhwb3J0IHtcbiAgY3JlYXRlV2ViU29ja2V0U3RyZWFtLFxuICBleHRlbnNpb24sXG4gIFBlck1lc3NhZ2VEZWZsYXRlLFxuICBSZWNlaXZlcixcbiAgU2VuZGVyLFxuICBzdWJwcm90b2NvbCxcbiAgV2ViU29ja2V0LFxuICBXZWJTb2NrZXRTZXJ2ZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdlYlNvY2tldDtcbiIsICJpbXBvcnQgV2ViU29ja2V0IGZyb20gXCJ3c1wiO1xuY2xhc3MgV2ViU29ja2V0Q2xpZW50IHtcbiAgX3NvY2tldDtcbiAgY29uc3RydWN0b3IodXJpLCBwcm90b2NvbE5hbWUpIHtcbiAgICB0aGlzLl9zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVyaSwgcHJvdG9jb2xOYW1lKTtcbiAgICB0aGlzLl9zb2NrZXQuYmluYXJ5VHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgfVxuICBvbm9wZW4oZm4pIHtcbiAgICB0aGlzLl9zb2NrZXQub25vcGVuID0gZm47XG4gIH1cbiAgb25jbG9zZShmbikge1xuICAgIHRoaXMuX3NvY2tldC5vbmNsb3NlID0gKGV2ZW50KSA9PiBmbihldmVudC5jb2RlLCBldmVudC5yZWFzb24pO1xuICB9XG4gIG9uZXJyb3IoZm4pIHtcbiAgICB0aGlzLl9zb2NrZXQub25lcnJvciA9IChldmVudCkgPT4gZm4oZXZlbnQuZXJyb3IpO1xuICB9XG4gIG9ubWVzc2FnZShmbikge1xuICAgIHRoaXMuX3NvY2tldC5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IGZuKGV2ZW50LmRhdGEpO1xuICB9XG4gIGNsb3NlKGNvZGUsIHJlYXNvbikge1xuICAgIHRoaXMuX3NvY2tldC5jbG9zZShjb2RlLCByZWFzb24pO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG4gIHNlbmQoZGF0YSwgXykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9zb2NrZXQuc2VuZChkYXRhLCAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOO1xuICB9XG59XG5jbGFzcyBXZWJTb2NrZXRDbGllbnRGYWN0b3J5IHtcbiAgY3JlYXRlKHVyaSwgcHJvdG9jb2xOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBXZWJTb2NrZXRDbGllbnQodXJpLCBwcm90b2NvbE5hbWUpO1xuICB9XG59XG5leHBvcnQge1xuICBXZWJTb2NrZXRDbGllbnQsXG4gIFdlYlNvY2tldENsaWVudEZhY3Rvcnlcbn07XG4iLCAiaW1wb3J0IHsgQWJvcnRFcnJvciB9IGZyb20gXCJAYXp1cmUvYWJvcnQtY29udHJvbGxlclwiO1xuYXN5bmMgZnVuY3Rpb24gYWJvcnRhYmxlUHJvbWlzZShwcm9taXNlLCBzaWduYWwpIHtcbiAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgdGhyb3cgbmV3IEFib3J0RXJyb3IoXCJUaGUgb3BlcmF0aW9uIHdhcyBhYm9ydGVkLlwiKTtcbiAgfVxuICBsZXQgb25BYm9ydDtcbiAgY29uc3QgcCA9IG5ldyBQcm9taXNlKChfLCByZWplY3QpID0+IHtcbiAgICBvbkFib3J0ID0gKCkgPT4ge1xuICAgICAgcmVqZWN0KG5ldyBBYm9ydEVycm9yKFwiVGhlIG9wZXJhdGlvbiB3YXMgYWJvcnRlZC5cIikpO1xuICAgIH07XG4gICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgfSk7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmFjZShbcHJvbWlzZSwgcF0pO1xuICB9IGZpbmFsbHkge1xuICAgIHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIGFib3J0YWJsZVByb21pc2Vcbn07XG4iLCAiaW1wb3J0IHsgU2VuZE1lc3NhZ2VFcnJvciB9IGZyb20gXCIuL2Vycm9ycy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgYWJvcnRhYmxlUHJvbWlzZSB9IGZyb20gXCIuL3V0aWxzL2Fib3J0YWJsZVByb21pc2UuanNcIjtcbmNsYXNzIEFja01hbmFnZXIge1xuICBfYWNrRW50cmllcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIF9hY2tJZDtcbiAgY29uc3RydWN0b3IoaW5pdGlhbEFja0lkID0gMCkge1xuICAgIHRoaXMuX2Fja0lkID0gaW5pdGlhbEFja0lkO1xuICB9XG4gIHJlZ2lzdGVyQWNrKGFja0lkKSB7XG4gICAgY29uc3QgcmVzb2x2ZWRBY2tJZCA9IGFja0lkID8/IHRoaXMuX2dlbmVyYXRlQWNrSWQoKTtcbiAgICBsZXQgZW50cnkgPSB0aGlzLl9hY2tFbnRyaWVzLmdldChyZXNvbHZlZEFja0lkKTtcbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICBlbnRyeSA9IG5ldyBBY2tFbnRpdHkocmVzb2x2ZWRBY2tJZCk7XG4gICAgICB0aGlzLl9hY2tFbnRyaWVzLnNldChyZXNvbHZlZEFja0lkLCBlbnRyeSk7XG4gICAgfVxuICAgIGNvbnN0IGFja0VudHJ5ID0gZW50cnk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFja0lkOiByZXNvbHZlZEFja0lkLFxuICAgICAgd2FpdDogKGFib3J0U2lnbmFsKSA9PiB0aGlzLl93YWl0Rm9yRW50cnkoYWNrRW50cnksIGFib3J0U2lnbmFsKVxuICAgIH07XG4gIH1cbiAgcmVzb2x2ZUFjayhhY2tJZCwgcmVzdWx0KSB7XG4gICAgY29uc3QgZW50cnkgPSB0aGlzLl9hY2tFbnRyaWVzLmdldChhY2tJZCk7XG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9hY2tFbnRyaWVzLmRlbGV0ZShhY2tJZCk7XG4gICAgZW50cnkucmVzb2x2ZShyZXN1bHQpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJlamVjdEFjayhhY2tJZCwgcmVhc29uKSB7XG4gICAgY29uc3QgZW50cnkgPSB0aGlzLl9hY2tFbnRyaWVzLmdldChhY2tJZCk7XG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9hY2tFbnRyaWVzLmRlbGV0ZShhY2tJZCk7XG4gICAgZW50cnkucmVqZWN0KHJlYXNvbik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZGlzY2FyZChhY2tJZCkge1xuICAgIHRoaXMuX2Fja0VudHJpZXMuZGVsZXRlKGFja0lkKTtcbiAgfVxuICByZWplY3RBbGwoY3JlYXRlUmVhc29uKSB7XG4gICAgdGhpcy5fYWNrRW50cmllcy5mb3JFYWNoKChlbnRyeSwgYWNrSWQpID0+IHtcbiAgICAgIGlmICh0aGlzLl9hY2tFbnRyaWVzLmRlbGV0ZShhY2tJZCkpIHtcbiAgICAgICAgZW50cnkucmVqZWN0KGNyZWF0ZVJlYXNvbihhY2tJZCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIF93YWl0Rm9yRW50cnkoZW50cnksIGFib3J0U2lnbmFsKSB7XG4gICAgaWYgKCFhYm9ydFNpZ25hbCkge1xuICAgICAgcmV0dXJuIGVudHJ5LnByb21pc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGFib3J0YWJsZVByb21pc2UoZW50cnkucHJvbWlzZSgpLCBhYm9ydFNpZ25hbCkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yICYmIGVyci5uYW1lID09PSBcIkFib3J0RXJyb3JcIikge1xuICAgICAgICB0aHJvdyBuZXcgU2VuZE1lc3NhZ2VFcnJvcihcIkNhbmNlbGxlZCBieSBhYm9ydFNpZ25hbFwiLCB7IGFja0lkOiBlbnRyeS5hY2tJZCB9KTtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxuICBfZ2VuZXJhdGVBY2tJZCgpIHtcbiAgICB0aGlzLl9hY2tJZCArPSAxO1xuICAgIHJldHVybiB0aGlzLl9hY2tJZDtcbiAgfVxufVxuY2xhc3MgQWNrRW50aXR5IHtcbiAgY29uc3RydWN0b3IoYWNrSWQpIHtcbiAgICB0aGlzLmFja0lkID0gYWNrSWQ7XG4gICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuICB9XG4gIF9wcm9taXNlO1xuICBfcmVzb2x2ZTtcbiAgX3JlamVjdDtcbiAgcHJvbWlzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcbiAgfVxuICByZXNvbHZlKHZhbHVlKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLl9yZXNvbHZlO1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcmVzb2x2ZSA9IHZvaWQgMDtcbiAgICB0aGlzLl9yZWplY3QgPSB2b2lkIDA7XG4gICAgY2FsbGJhY2sodmFsdWUpO1xuICB9XG4gIHJlamVjdChyZWFzb24pIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuX3JlamVjdDtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3Jlc29sdmUgPSB2b2lkIDA7XG4gICAgdGhpcy5fcmVqZWN0ID0gdm9pZCAwO1xuICAgIGNhbGxiYWNrKHJlYXNvbik7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIEFja01hbmFnZXJcbn07XG4iLCAiaW1wb3J0IHsgSW52b2NhdGlvbkVycm9yIH0gZnJvbSBcIi4vZXJyb3JzL2luZGV4LmpzXCI7XG5jbGFzcyBJbnZvY2F0aW9uTWFuYWdlciB7XG4gIF9lbnRyaWVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgX25leHRJZCA9IDA7XG4gIHJlZ2lzdGVySW52b2NhdGlvbihpbnZvY2F0aW9uSWQpIHtcbiAgICBjb25zdCByZXNvbHZlZElkID0gaW52b2NhdGlvbklkID8/IHRoaXMuX2dlbmVyYXRlSW52b2NhdGlvbklkKCk7XG4gICAgaWYgKHRoaXMuX2VudHJpZXMuaGFzKHJlc29sdmVkSWQpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52b2NhdGlvbkVycm9yKFwiSW52b2NhdGlvbiBpZCBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuXCIsIHtcbiAgICAgICAgaW52b2NhdGlvbklkOiByZXNvbHZlZElkXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgZW50aXR5ID0gbmV3IEludm9jYXRpb25FbnRpdHkocmVzb2x2ZWRJZCk7XG4gICAgdGhpcy5fZW50cmllcy5zZXQocmVzb2x2ZWRJZCwgZW50aXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgaW52b2NhdGlvbklkOiByZXNvbHZlZElkLFxuICAgICAgd2FpdDogKG9wdGlvbnMpID0+IHRoaXMuX3dhaXRGb3JFbnRyeShlbnRpdHksIG9wdGlvbnMpXG4gICAgfTtcbiAgfVxuICByZXNvbHZlSW52b2NhdGlvbihtZXNzYWdlKSB7XG4gICAgY29uc3QgZW50cnkgPSB0aGlzLl9lbnRyaWVzLmdldChtZXNzYWdlLmludm9jYXRpb25JZCk7XG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9lbnRyaWVzLmRlbGV0ZShtZXNzYWdlLmludm9jYXRpb25JZCk7XG4gICAgZW50cnkucmVzb2x2ZShtZXNzYWdlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZWplY3RJbnZvY2F0aW9uKGludm9jYXRpb25JZCwgcmVhc29uKSB7XG4gICAgY29uc3QgZW50cnkgPSB0aGlzLl9lbnRyaWVzLmdldChpbnZvY2F0aW9uSWQpO1xuICAgIGlmICghZW50cnkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fZW50cmllcy5kZWxldGUoaW52b2NhdGlvbklkKTtcbiAgICBlbnRyeS5yZWplY3QocmVhc29uKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBkaXNjYXJkKGludm9jYXRpb25JZCkge1xuICAgIHRoaXMuX2VudHJpZXMuZGVsZXRlKGludm9jYXRpb25JZCk7XG4gIH1cbiAgcmVqZWN0QWxsKGNyZWF0ZVJlYXNvbikge1xuICAgIHRoaXMuX2VudHJpZXMuZm9yRWFjaCgoZW50cnksIGludm9jYXRpb25JZCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2VudHJpZXMuZGVsZXRlKGludm9jYXRpb25JZCkpIHtcbiAgICAgICAgZW50cnkucmVqZWN0KGNyZWF0ZVJlYXNvbihpbnZvY2F0aW9uSWQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfd2FpdEZvckVudHJ5KGVudHJ5LCBvcHRpb25zKSB7XG4gICAgY29uc3Qgd2FpdFByb21pc2UgPSBlbnRyeS5wcm9taXNlKCk7XG4gICAgY29uc3QgYWJvcnRTaWduYWwgPSBvcHRpb25zPy5hYm9ydFNpZ25hbDtcbiAgICBpZiAoIWFib3J0U2lnbmFsKSB7XG4gICAgICByZXR1cm4gd2FpdFByb21pc2U7XG4gICAgfVxuICAgIGlmIChhYm9ydFNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICBpZiAodGhpcy5fZW50cmllcy5kZWxldGUoZW50cnkuaW52b2NhdGlvbklkKSkge1xuICAgICAgICBlbnRyeS5yZWplY3QodGhpcy5fY3JlYXRlQWJvcnRFcnJvcihlbnRyeS5pbnZvY2F0aW9uSWQpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3YWl0UHJvbWlzZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9uQWJvcnQgPSAoKSA9PiB7XG4gICAgICAgIGFib3J0U2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICAgICAgaWYgKHRoaXMuX2VudHJpZXMuZGVsZXRlKGVudHJ5Lmludm9jYXRpb25JZCkpIHtcbiAgICAgICAgICBlbnRyeS5yZWplY3QodGhpcy5fY3JlYXRlQWJvcnRFcnJvcihlbnRyeS5pbnZvY2F0aW9uSWQpKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFib3J0U2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICAgIHdhaXRQcm9taXNlLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBhYm9ydFNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGFib3J0U2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgX2dlbmVyYXRlSW52b2NhdGlvbklkKCkge1xuICAgIHRoaXMuX25leHRJZCArPSAxO1xuICAgIHJldHVybiB0aGlzLl9uZXh0SWQudG9TdHJpbmcoKTtcbiAgfVxuICBfY3JlYXRlQWJvcnRFcnJvcihpbnZvY2F0aW9uSWQpIHtcbiAgICByZXR1cm4gbmV3IEludm9jYXRpb25FcnJvcihcIkludm9jYXRpb24gY2FuY2VsbGVkIGJ5IGFib3J0U2lnbmFsLlwiLCB7XG4gICAgICBpbnZvY2F0aW9uSWRcbiAgICB9KTtcbiAgfVxufVxuY2xhc3MgSW52b2NhdGlvbkVudGl0eSB7XG4gIGNvbnN0cnVjdG9yKGludm9jYXRpb25JZCkge1xuICAgIHRoaXMuaW52b2NhdGlvbklkID0gaW52b2NhdGlvbklkO1xuICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgfVxuICBfcHJvbWlzZTtcbiAgX3Jlc29sdmU7XG4gIF9yZWplY3Q7XG4gIHByb21pc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG4gIH1cbiAgcmVzb2x2ZSh2YWx1ZSkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5fcmVzb2x2ZTtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3Jlc29sdmUgPSB2b2lkIDA7XG4gICAgdGhpcy5fcmVqZWN0ID0gdm9pZCAwO1xuICAgIGNhbGxiYWNrKHZhbHVlKTtcbiAgfVxuICByZWplY3QocmVhc29uKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLl9yZWplY3Q7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZXNvbHZlID0gdm9pZCAwO1xuICAgIHRoaXMuX3JlamVjdCA9IHZvaWQgMDtcbiAgICBjYWxsYmFjayhyZWFzb24pO1xuICB9XG59XG5leHBvcnQge1xuICBJbnZvY2F0aW9uTWFuYWdlclxufTtcbiIsICJpbXBvcnQgZnMgZnJvbSBcIm5vZGU6ZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJub2RlOnBhdGhcIjtcbmltcG9ydCBvcyBmcm9tIFwibm9kZTpvc1wiO1xuXG4vLyBEYWVtb24gc3VwcG9ydHMgdHdvIHRyYW5zcG9ydCBtb2Rlczpcbi8vICAgLSBcImRpcmVjdFwiICA6IGNvbm5lY3QgV1NTIG5hYXIgYnZnZWVydCAvY2FibGUgKEFjdGlvbkNhYmxlKS4gVmVyZWlzdCBidmdlZXJ0X2hvc3QuXG4vLyAgIC0gXCJhenVyZVwiICAgOiBjb25uZWN0IFdQUyBodWIgdm9vciByZXN0cmljdGVkIG5ldHdvcmtzLiBWZXJlaXN0IGF6dXJlX2h1Yl91cmwuXG4vLyBNb2RlIHdvcmR0IGFmZ2VsZWlkIHVpdCB3ZWxrZSBjcmVkZW50aWFscyBnZXpldCB6aWpuLlxuZXhwb3J0IHR5cGUgQ3JlZGVudGlhbHMgPSB7XG4gIC8vIGdlZGVlbGRcbiAgY2xpZW50X2lkOiBzdHJpbmc7XG4gIHJlZ2lzdHJhdGlvbl90b2tlbjogc3RyaW5nO1xuICBjb25uZWN0aW9uX2lkZW50aWZpZXI/OiBzdHJpbmc7XG4gIC8vIGRpcmVjdC1tb2RlXG4gIGJ2Z2VlcnRfaG9zdD86IHN0cmluZztcbiAgY2FibGVfdXJsPzogc3RyaW5nO1xuICB0cmFuc3BvcnRfdG9rZW4/OiBzdHJpbmc7IC8vIHNpZ25lZCB0cmFuc3BvcnQtc2Vzc2lvbiB0b2tlbiAoN2QpXG4gIC8vIGF6dXJlLW1vZGUgKGxlZ2FjeSAvIHJlc3RyaWN0ZWQtbmV0d29yayBmYWxsYmFjaylcbiAgYXp1cmVfaHViX3VybD86IHN0cmluZztcbiAgYWNjZXNzX3VybD86IHN0cmluZztcbiAgYWNjZXNzX3VybF9leHBpcmVzX2F0Pzogc3RyaW5nO1xuICB0b3BpY19pZGVudGlmaWVyPzogc3RyaW5nOyAvLyBoaXN0b3Jpc2NoIHN5bm9uaWVtIHZvb3IgY29ubmVjdGlvbl9pZGVudGlmaWVyXG59O1xuXG5leHBvcnQgdHlwZSBDcmVkZW50aWFsTW9kZSA9IFwiZGlyZWN0XCIgfCBcImF6dXJlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVkZW50aWFsTW9kZShjcmVkczogQ3JlZGVudGlhbHMpOiBDcmVkZW50aWFsTW9kZSB8IG51bGwge1xuICBpZiAoY3JlZHMuYnZnZWVydF9ob3N0KSByZXR1cm4gXCJkaXJlY3RcIjtcbiAgaWYgKGNyZWRzLmF6dXJlX2h1Yl91cmwpIHJldHVybiBcImF6dXJlXCI7XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UGF0aCgpOiBzdHJpbmcge1xuICBjb25zdCB4ZGcgPSBwcm9jZXNzLmVudi5YREdfQ09ORklHX0hPTUU7XG4gIGNvbnN0IGJhc2UgPSB4ZGcgPyB4ZGcgOiBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCBcIi5jb25maWdcIik7XG4gIHJldHVybiBwYXRoLmpvaW4oYmFzZSwgXCJidmctZGVhbW9uXCIsIFwiY3JlZGVudGlhbHMuanNvblwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWRlbnRpYWxzUGF0aCgpOiBzdHJpbmcge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuQlZHX0RFQU1PTl9DUkVERU5USUFMUyA/PyBkZWZhdWx0UGF0aCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZENyZWRlbnRpYWxzKCk6IENyZWRlbnRpYWxzIHwgbnVsbCB7XG4gIGNvbnN0IHAgPSBjcmVkZW50aWFsc1BhdGgoKTtcbiAgaWYgKCFmcy5leGlzdHNTeW5jKHApKSByZXR1cm4gbnVsbDtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocCwgXCJ1dGY4XCIpKSBhcyBDcmVkZW50aWFscztcbiAgICBpZiAoIWRhdGEuY2xpZW50X2lkIHx8ICFkYXRhLnJlZ2lzdHJhdGlvbl90b2tlbikgcmV0dXJuIG51bGw7XG4gICAgaWYgKCFjcmVkZW50aWFsTW9kZShkYXRhKSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlQ3JlZGVudGlhbHMoY3JlZHM6IENyZWRlbnRpYWxzKTogc3RyaW5nIHtcbiAgY29uc3QgcCA9IGNyZWRlbnRpYWxzUGF0aCgpO1xuICBmcy5ta2RpclN5bmMocGF0aC5kaXJuYW1lKHApLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgZnMud3JpdGVGaWxlU3luYyhwLCBKU09OLnN0cmluZ2lmeShjcmVkcywgbnVsbCwgMiksIHsgbW9kZTogMG82MDAgfSk7XG4gIHJldHVybiBwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2lwZUNyZWRlbnRpYWxzKCk6IHZvaWQge1xuICBjb25zdCBwID0gY3JlZGVudGlhbHNQYXRoKCk7XG4gIGlmIChmcy5leGlzdHNTeW5jKHApKSBmcy51bmxpbmtTeW5jKHApO1xufVxuIiwgIi8vIERpcmVjdC1tb2RlOiBwcmFhdCByZWNodHN0cmVla3MgbWV0IGJ2Z2VlcnQgdmlhIEhUVFBTIChyZWRlZW0pIGVuXG4vLyBXU1MgKEFjdGlvbkNhYmxlKS4gR2VlbiBBenVyZSB0dXNzZW5zdGFwLlxuaW1wb3J0IHBjIGZyb20gXCJwaWNvY29sb3JzXCI7XG5pbXBvcnQgeyBDcmVkZW50aWFscywgc2F2ZUNyZWRlbnRpYWxzIH0gZnJvbSBcIi4vY3JlZGVudGlhbHMuanNcIjtcblxudHlwZSBSZWRlZW1SZXNwb25zZSA9IHtcbiAgY2xpZW50X2lkZW50aWZpZXI6IHN0cmluZztcbiAgcmVnaXN0cmF0aW9uX3Rva2VuOiBzdHJpbmc7XG4gIHRyYW5zcG9ydF90b2tlbjogc3RyaW5nO1xuICB3ZWJzb2NrZXRfdXJsOiBzdHJpbmc7XG4gIGNvbm5lY3Rpb25faWRlbnRpZmllcj86IHN0cmluZztcbn07XG5cbi8vIEFjY2VwdGVlcnQgXCJidmdlZXJ0LmNvbVwiIChkZWZhdWx0IEhUVFBTKSwgXCJidmdlZXJ0Lmx2aC5tZTozMDAwXCIgKGRlZmF1bHRcbi8vIEhUVFBTIFx1MjAxNCBnZWVmIGV4cGxpY2lldCBodHRwOi8vXHUyMDI2IG1lZSB2b29yIGRldiksIG9mIGVlbiB2b2xsZWRpZ2UgVVJMIG1ldFxuLy8gc2NoZW1lLiBWb29yIGxva2FsZSBkZXY6IGAtLWhvc3QgaHR0cDovL2J2Z2VlcnQubHZoLm1lOjMwMDBgLlxuZnVuY3Rpb24gYmFzZVVybChob3N0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoaG9zdC5zdGFydHNXaXRoKFwiaHR0cDovL1wiKSB8fCBob3N0LnN0YXJ0c1dpdGgoXCJodHRwczovL1wiKSkgcmV0dXJuIGhvc3QucmVwbGFjZSgvXFwvJC8sIFwiXCIpO1xuICByZXR1cm4gYGh0dHBzOi8vJHtob3N0fWA7XG59XG5cbmZ1bmN0aW9uIHdzQmFzZVVybChob3N0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYmFzZVVybChob3N0KS5yZXBsYWNlKC9eaHR0cC8sIFwid3NcIik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWRlZW1EaXJlY3QoaG9zdDogc3RyaW5nLCB0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxSZWRlZW1SZXNwb25zZT4ge1xuICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsKGhvc3QpfS9hcGkvdjEvdHJhbnNwb3J0L3JlZGVlbWA7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRva2VuIH0pXG4gIH0pO1xuICBpZiAoIXJlcy5vaykge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgIHRocm93IG5ldyBFcnJvcihgcmVkZWVtIGZhaWxlZCAoJHtyZXMuc3RhdHVzfSk6ICR7Ym9keX1gKTtcbiAgfVxuICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKSBhcyBSZWRlZW1SZXNwb25zZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGpvaW5EaXJlY3QoaG9zdDogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCB0cmFuc3BvcnQ/OiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xuICBjb25zb2xlLmxvZyhwYy5jeWFuKGBjb25uZWN0aW5nIHRvIGJ2Z2VlcnQgYXQgJHtob3N0fS4uLmApKTtcbiAgY29uc3QgciA9IGF3YWl0IHJlZGVlbURpcmVjdChob3N0LCB0b2tlbik7XG4gIGNvbnN0IHBhdGggPSBzYXZlQ3JlZGVudGlhbHMoe1xuICAgIGNsaWVudF9pZDogci5jbGllbnRfaWRlbnRpZmllcixcbiAgICByZWdpc3RyYXRpb25fdG9rZW46IHIucmVnaXN0cmF0aW9uX3Rva2VuLFxuICAgIHRyYW5zcG9ydF90b2tlbjogci50cmFuc3BvcnRfdG9rZW4sXG4gICAgYnZnZWVydF9ob3N0OiBob3N0LFxuICAgIGNhYmxlX3VybDogci53ZWJzb2NrZXRfdXJsLFxuICAgIGNvbm5lY3Rpb25faWRlbnRpZmllcjogci5jb25uZWN0aW9uX2lkZW50aWZpZXIgPz8gdHJhbnNwb3J0LFxuICB9KTtcbiAgY29uc29sZS5sb2cocGMuZ3JlZW4oYHBhaXJlZCBhcyAke3IuY2xpZW50X2lkZW50aWZpZXJ9IG9uICR7ci5jb25uZWN0aW9uX2lkZW50aWZpZXIgPz8gdHJhbnNwb3J0ID8/IFwiKHVua25vd24pXCJ9YCkpO1xuICBjb25zb2xlLmxvZyhgY3JlZGVudGlhbHM6ICR7cGF0aH1gKTtcbiAgcmV0dXJuIDA7XG59XG5cbi8vIE1pbmltYWwgQWN0aW9uQ2FibGUgY2xpZW50OiBvcGVucyBhIFdTLCBzdWJzY3JpYmVzIHRvIFRyYW5zcG9ydENoYW5uZWxcbi8vIHdpdGggdGhlIHJpZ2h0IGNvbm5lY3Rpb25faWRlbnRpZmllciwgcHJpbnRzIGluY29taW5nIG1lc3NhZ2VzLlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRhZW1vbkRpcmVjdChjcmVkczogQ3JlZGVudGlhbHMpOiBQcm9taXNlPG51bWJlcj4ge1xuICBjb25zdCBjYWJsZVVybCA9IGNyZWRzLmNhYmxlX3VybCA/PyBgJHt3c0Jhc2VVcmwoY3JlZHMuYnZnZWVydF9ob3N0ISl9L2NhYmxlYDtcbiAgLy8gQXBwbGljYXRpb25DYWJsZSB2ZXJ3YWNodCBlZW4gUmFpbHMtc2lnbmVkIHRyYW5zcG9ydC1zZXNzaW9uIHRva2VuLlxuICAvLyBGYWxsYmFjayBuYWFyIHJlZ2lzdHJhdGlvbl90b2tlbiB2b29yIGJhY2t3YXJkLWNvbXBhdC5cbiAgY29uc3Qgd3NUb2tlbiA9IGNyZWRzLnRyYW5zcG9ydF90b2tlbiA/PyBjcmVkcy5yZWdpc3RyYXRpb25fdG9rZW47XG4gIGNvbnN0IHVybCA9IGAke2NhYmxlVXJsfT90cmFuc3BvcnRfdG9rZW49JHtlbmNvZGVVUklDb21wb25lbnQod3NUb2tlbil9YDtcbiAgY29uc3QgZGVidWcgPSBwcm9jZXNzLmVudi5CVkdfREVCVUcgPT09IFwiMVwiO1xuICBjb25zdCBkYmcgPSAoLi4uYTogdW5rbm93bltdKSA9PiB7IGlmIChkZWJ1ZykgY29uc29sZS5lcnJvcihwYy5kaW0oXCJbZGVidWddXCIpLCAuLi5hIGFzIHN0cmluZ1tdKTsgfTtcblxuICBjb25zb2xlLmxvZyhwYy5jeWFuKGBjb25uZWN0aW5nIFdTUyAke2NhYmxlVXJsfS4uLmApKTtcbiAgY29uc3QgV1M6IGFueSA9IChnbG9iYWxUaGlzIGFzIGFueSkuV2ViU29ja2V0O1xuICBpZiAoIVdTKSB7XG4gICAgY29uc29sZS5lcnJvcihwYy5yZWQoXCJOb2RlIGxhY2tzIGdsb2JhbCBXZWJTb2NrZXQuIFJlcXVpcmUgTm9kZSA+PSAyMi5cIikpO1xuICAgIHJldHVybiAxO1xuICB9XG4gIC8vIEFjdGlvbkNhYmxlIHN1Yi1wcm90b2NvbCBcdTIwMTQgYW5kZXJzIHNsdWl0IFJhaWxzIGRlIHZlcmJpbmRpbmcgbWV0ZWVuLlxuICBjb25zdCB3cyA9IG5ldyBXUyh1cmwsIFsgXCJhY3Rpb25jYWJsZS12MS1qc29uXCIgXSk7XG4gIGNvbnN0IGNvbm5JZCA9IGNyZWRzLmNvbm5lY3Rpb25faWRlbnRpZmllcjtcbiAgY29uc3Qgc3ViSWQgPSBKU09OLnN0cmluZ2lmeSh7IGNoYW5uZWw6IFwiVHJhbnNwb3J0Q2hhbm5lbFwiLCBjb25uZWN0aW9uX2lkZW50aWZpZXI6IGNvbm5JZCB9KTtcblxuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZSkgPT4ge1xuICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsICgpID0+IHtcbiAgICAgIGRiZyhcIndzIG9wZW5cIik7XG4gICAgfSk7XG4gICAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHJhdyA9IHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiID8gZXZlbnQuZGF0YSA6IG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShldmVudC5kYXRhIGFzIEFycmF5QnVmZmVyKTtcbiAgICAgIGRiZyhcIndzIG1zZ1wiLCByYXcpO1xuICAgICAgbGV0IG1zZzogYW55O1xuICAgICAgdHJ5IHsgbXNnID0gSlNPTi5wYXJzZShyYXcpOyB9IGNhdGNoIHsgcmV0dXJuOyB9XG4gICAgICBpZiAobXNnLnR5cGUgPT09IFwid2VsY29tZVwiKSB7XG4gICAgICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBjb21tYW5kOiBcInN1YnNjcmliZVwiLCBpZGVudGlmaWVyOiBzdWJJZCB9KSk7XG4gICAgICB9IGVsc2UgaWYgKG1zZy50eXBlID09PSBcInBpbmdcIiB8fCBtc2cudHlwZSA9PT0gXCJjb25maXJtX3N1YnNjcmlwdGlvblwiKSB7XG4gICAgICAgIC8vIG5vLW9wXG4gICAgICB9IGVsc2UgaWYgKG1zZy5pZGVudGlmaWVyICYmIG1zZy5tZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGVudiA9IG1zZy5tZXNzYWdlO1xuICAgICAgICBjb25zb2xlLmxvZyhwYy5ib2xkKGAjJHtlbnYuc2VxdWVuY2UgPz8gXCI/XCJ9YCksIHBjLmRpbShlbnYubWVzc2FnZV90eXBlID8/IFwiXCIpLCBwYy5jeWFuKGVudi5wYXlsb2FkID8/IFwiXCIpKTtcbiAgICAgIH0gZWxzZSBpZiAobXNnLnR5cGUgPT09IFwicmVqZWN0X3N1YnNjcmlwdGlvblwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IocGMucmVkKFwic3Vic2NyaXB0aW9uIHJlamVjdGVkXCIpKTtcbiAgICAgICAgd3MuY2xvc2UoKTtcbiAgICAgICAgcmVzb2x2ZSgyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihwYy5yZWQoXCJ3cyBlcnJvclwiKSwgZT8ubWVzc2FnZSA/PyBlKTtcbiAgICB9KTtcbiAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgKGU6IGFueSkgPT4ge1xuICAgICAgZGJnKFwid3MgY2xvc2VcIiwgZT8uY29kZSwgZT8ucmVhc29uKTtcbiAgICAgIHJlc29sdmUoMCk7XG4gICAgfSk7XG4gICAgcHJvY2Vzcy5vbihcIlNJR0lOVFwiLCAoKSA9PiB7IHdzLmNsb3NlKCk7IHJlc29sdmUoMCk7IH0pO1xuICAgIHByb2Nlc3Mub24oXCJTSUdURVJNXCIsICgpID0+IHsgd3MuY2xvc2UoKTsgcmVzb2x2ZSgwKTsgfSk7XG4gIH0pO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLDBDQUFBQSxVQUFBQyxTQUFBO0FBQUEsUUFBSSxJQUFJLFdBQVcsQ0FBQztBQUFwQixRQUF1QixPQUFPLEVBQUUsUUFBUSxDQUFDO0FBQXpDLFFBQTRDLE1BQU0sRUFBRSxPQUFPLENBQUM7QUFDNUQsUUFBSSxtQkFDSCxFQUFFLENBQUMsQ0FBQyxJQUFJLFlBQVksS0FBSyxTQUFTLFlBQVksT0FDN0MsQ0FBQyxDQUFDLElBQUksZUFBZSxLQUFLLFNBQVMsU0FBUyxLQUFLLEVBQUUsYUFBYSxZQUFhLEVBQUUsVUFBVSxDQUFDLEdBQUcsU0FBUyxJQUFJLFNBQVMsVUFBVyxDQUFDLENBQUMsSUFBSTtBQUV0SSxRQUFJLFlBQVksQ0FBQyxNQUFNLE9BQU8sVUFBVSxTQUN2QyxXQUFTO0FBQ1IsVUFBSSxTQUFTLEtBQUssT0FBTyxRQUFRLE9BQU8sUUFBUSxPQUFPLEtBQUssTUFBTTtBQUNsRSxhQUFPLENBQUMsUUFBUSxPQUFPLGFBQWEsUUFBUSxPQUFPLFNBQVMsS0FBSyxJQUFJLFFBQVEsT0FBTyxTQUFTO0FBQUEsSUFDOUY7QUFFRCxRQUFJLGVBQWUsQ0FBQyxRQUFRLE9BQU8sU0FBUyxVQUFVO0FBQ3JELFVBQUksU0FBUyxJQUFJLFNBQVM7QUFDMUIsU0FBRztBQUNGLGtCQUFVLE9BQU8sVUFBVSxRQUFRLEtBQUssSUFBSTtBQUM1QyxpQkFBUyxRQUFRLE1BQU07QUFDdkIsZ0JBQVEsT0FBTyxRQUFRLE9BQU8sTUFBTTtBQUFBLE1BQ3JDLFNBQVMsQ0FBQztBQUNWLGFBQU8sU0FBUyxPQUFPLFVBQVUsTUFBTTtBQUFBLElBQ3hDO0FB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QUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBO0FBQUEsTUFDN0M7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQTtBQUFBLE1BQzdDO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUE7QUFBQSxNQUM3QztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBO0FBQUEsTUFDN0M7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQTtBQUFBLE1BQzdDO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUEsTUFBRztBQUFBLE1BQUc7QUFBQSxNQUFHO0FBQUE7QUFBQSxJQUMvQztBQVNBLGFBQVMsa0JBQWtCLE1BQU07QUFDL0IsYUFD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bUJBQUFBLFFBQUcsSUFBSSxRQUFHO0FBQ2pELFlBQVEsSUFBSSxHQUFHLEdBQUcsSUFBSSxFQUFFLFVBQVUsR0FBRyxFQUFFLE9BQU8sS0FBSyxFQUFFLElBQUksTUFBTSxFQUFFLFdBQU0sRUFBRSxJQUFJLEVBQUU7QUFBQSxFQUNqRjtBQUNGO0FBRUEsZUFBZSxRQUFRLE1BQWlDO0FBQ3RELFFBQU0sUUFBUSxhQUFhO0FBQzNCLFFBQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJO0FBQzFCLE1BQUksQ0FBQyxVQUFVLEtBQUssV0FBVyxHQUFHO0FBQ2hDLFlBQVEsTUFBTSxtQkFBQUEsUUFBRyxJQUFJLHFEQUFxRCxDQUFDO0FBQzNFLFdBQU87QUFBQSxFQUNUO0FBQ0EsUUFBTSxPQUFPLEtBQUssS0FBSyxHQUFHO0FBQzFCLFFBQU0sU0FBUyxhQUFhLEtBQUs7QUFDakMsUUFBTSxPQUFPLE1BQU07QUFDbkIsUUFBTSxRQUFRLFFBQVEsT0FBTyxRQUFRLElBQUk7QUFDekMsUUFBTSxPQUFPLEtBQUs7QUFDbEIsU0FBTztBQUNUO0FBRUEsS0FBSyxFQUFFLEtBQUssQ0FBQyxTQUFTLFFBQVEsS0FBSyxJQUFJLENBQUM7IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAibW9kdWxlIiwgImVuYWJsZWQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiUGVyTWVzc2FnZURlZmxhdGUiLCAiZGF0YSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJQZXJNZXNzYWdlRGVmbGF0ZSIsICJSZWNlaXZlciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJQZXJNZXNzYWdlRGVmbGF0ZSIsICJTZW5kZXIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXh0ZW5zaW9uIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIkV2ZW50RW1pdHRlciIsICJVUkwiLCAiUGVyTWVzc2FnZURlZmxhdGUiLCAiUmVjZWl2ZXIiLCAiU2VuZGVyIiwgIldlYlNvY2tldCIsICJrZXkiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiV2ViU29ja2V0IiwgImNyZWF0ZVdlYlNvY2tldFN0cmVhbSIsICJlcnIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAicHJvdG9jb2wiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiRXZlbnRFbWl0dGVyIiwgImV4dGVuc2lvbiIsICJQZXJNZXNzYWdlRGVmbGF0ZSIsICJzdWJwcm90b2NvbCIsICJXZWJTb2NrZXQiLCAiV2ViU29ja2V0U2VydmVyIiwgImltcG9ydF9waWNvY29sb3JzIiwgInByb2Nlc3MiLCAidXRpbCIsICJlbmFibGVkTmFtZXNwYWNlcyIsICJsb2dnZXIiLCAiY29udGV4dCIsICJjb250ZXh0IiwgIldlYlNvY2tldCIsICJFdmVudEVtaXR0ZXIiLCAiaW1wb3J0X25vZGVfb3MiLCAicGF0aCIsICJvcyIsICJmcyIsICJwYyIsICJwYXRoIiwgInBjIiwgInBhdGgiLCAicmVhZGxpbmUiXQp9Cg==
