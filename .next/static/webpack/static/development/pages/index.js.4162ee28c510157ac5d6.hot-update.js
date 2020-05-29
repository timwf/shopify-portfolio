webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-ga */ "./node_modules/next-ga/index.js");
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_ga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/styles.scss */ "./pages/styles.scss");
/* harmony import */ var _pages_styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Tim\\Desktop\\React_projects\\shopify-portfolio\\components\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Layout = function Layout(props) {
  return __jsx("div", {
    className: "layout-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: "Shopify Partner | Developer | Designer.  Start customizing your Shopify theme now.  Expertise in theme development and design and SEO optimization. Contact me now for a free consultation.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })), props.children);
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (next_ga__WEBPACK_IMPORTED_MODULE_3___default()("UA-140228069-7", next_router__WEBPACK_IMPORTED_MODULE_2___default.a)(Layout));

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */
function log(...args) {
	// This hackery is required for IE8/9, where
	// the `console.log` function doesn't have 'apply'
	return typeof console === 'object' &&
		console.log &&
		console.log(...args);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* Active `debug` instances.
	*/
	createDebug.instances = [];

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return match;
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.enabled = createDebug.enabled(namespace);
		debug.useColors = createDebug.useColors();
		debug.color = selectColor(namespace);
		debug.destroy = destroy;
		debug.extend = extend;
		// Debug.formatArgs = formatArgs;
		// debug.rawLog = rawLog;

		// env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		createDebug.instances.push(debug);

		return debug;
	}

	function destroy() {
		const index = createDebug.instances.indexOf(this);
		if (index !== -1) {
			createDebug.instances.splice(index, 1);
			return true;
		}
		return false;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}

		for (i = 0; i < createDebug.instances.length; i++) {
			const instance = createDebug.instances[i];
			instance.enabled = createDebug.enabled(instance.namespace);
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/next-ga/dist/analytics/dev.js":
/*!****************************************************!*\
  !*** ./node_modules/next-ga/dist/analytics/dev.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _debug=_interopRequireDefault(__webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=init,exports.pageview=pageview,exports.event=event,exports.exception=exception;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var log=(0,_debug.default)("analytics");function init(a){log("Analytics init triggered for ".concat(a))}function pageview(){log("Pageview triggered for ".concat(window.location.pathname))}function event(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"";log("Event for category ".concat(a," and action ").concat(b," triggered"))}function exception(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",b=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1];log("".concat(b?"Fatal exception":"Exception"," with description ").concat(a))}

/***/ }),

/***/ "./node_modules/next-ga/dist/analytics/prod.js":
/*!*****************************************************!*\
  !*** ./node_modules/next-ga/dist/analytics/prod.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _reactGa=_interopRequireDefault(__webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=init,exports.pageview=pageview,exports.event=event,exports.exception=exception;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var IS_BROWSER="undefined"!=typeof window;function init(a){IS_BROWSER&&!window.GA_INITIALIZED&&a&&_reactGa.default.initialize(a)}function pageview(){_reactGa.default.set({page:window.location.pathname}),_reactGa.default.pageview(window.location.pathname)}function event(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"";a&&b&&_reactGa.default.event({category:a,action:b})}function exception(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",b=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1];a&&_reactGa.default.exception({description:a,fatal:b})}

/***/ }),

/***/ "./node_modules/next-ga/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/next-ga/dist/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=__webpack_require__(/*! react */ "./node_modules/react/index.js"),prodLytics=_interopRequireWildcard(__webpack_require__(/*! ./analytics/prod */ "./node_modules/next-ga/dist/analytics/prod.js")),devLytics=_interopRequireWildcard(__webpack_require__(/*! ./analytics/dev */ "./node_modules/next-ga/dist/analytics/dev.js"));function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function isLocal(a){return location.hostname===a}function isDev(){return"production"!=="development"}var _default=function(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},d=c.localhost,e=void 0===d?"localhost":d;return function(c){var d=/*#__PURE__*/function(d){function f(){var a,b;_classCallCheck(this,f);for(var c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=_possibleConstructorReturn(this,(a=_getPrototypeOf(f)).call.apply(a,[this].concat(d))),_defineProperty(_assertThisInitialized(_assertThisInitialized(b)),"state",{analytics:void 0}),b}return _inherits(f,d),_createClass(f,[{key:"componentDidMount",value:function g(){// check if it should track
var c=isLocal(e)||isDev(),d=c?devLytics:prodLytics;// check if it should use production or dev analytics
d.init(a),d.pageview();// save possible previously defined callback
var f=b.onRouteChangeComplete;b.onRouteChangeComplete=function(){"function"==typeof f&&f(),d.pageview()},this.setState({analytics:d})}},{key:"render",value:function a(){return(0,_react.createElement)(c,_objectSpread({},this.props,{analytics:this.state.analytics}))}}]),f}(_react.Component);return c.getInitialProps&&(d.getInitialProps=c.getInitialProps),d}};exports.default=_default;

/***/ }),

/***/ "./node_modules/next-ga/index.js":
/*!***************************************!*\
  !*** ./node_modules/next-ga/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/index.js */ "./node_modules/next-ga/dist/index.js");


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0LWdhL2Rpc3QvYW5hbHl0aWNzL2Rldi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC1nYS9kaXN0L2FuYWx5dGljcy9wcm9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0LWdhL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQtZ2EvaW5kZXguanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsIndpdGhHQSIsIlJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDWDtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUE7QUFBTSxRQUFJLEVBQUMsK0VBQVg7QUFBMkYsT0FBRyxFQUFDLFlBQS9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxFQUdBO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFDQSxXQUFPLEVBQUMsNkxBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhBLENBREosRUFTS0EsS0FBSyxDQUFDQyxRQVRYLENBRFc7QUFBQSxDQUFmOztLQUFNRixNO0FBY1NHLDZHQUFNLENBQUMsZ0JBQUQsRUFBbUJDLGtEQUFuQixDQUFOLENBQWlDSixNQUFqQyxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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c0JBQXNCLG1DQUFtQyxvR0FBb0csU0FBUyxnQ0FBZ0MseUNBQXlDLGtEQUFrRCxXQUFXLG9CQUFvQiw2QkFBNkIsaUJBQWlCLHFCQUFxQixhQUFvQixDQUFDLDJCQUEyQiwrREFBK0QsMENBQTBDLG1CQUFtQiwrQkFBK0IsYUFBYSxRQUFRLHdCQUF3QiwwQ0FBMEMsSUFBSSxzQkFBc0IsMktBQTJLLGlCQUFpQixJQUFJLHVDQUF1QywyQ0FBMkM7QUFDam5HLG1EQUFtRDtBQUNuRCx1QkFBdUI7QUFDdkIsOEJBQThCLG1DQUFtQyx1Q0FBdUMsZ0JBQWdCLFlBQVksR0FBRyxFQUFFLGdDQUFnQyxpREFBaUQsYUFBYSwrQkFBK0IsSUFBSSxLQUFLLG1CQUFtQixvRUFBb0UseUI7Ozs7Ozs7Ozs7O0FDSHRXLGlCQUFpQixtQkFBTyxDQUFDLDZEQUFpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNDE2MmVlMjhjNTEwMTU3YWM1ZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB3aXRoR0EgZnJvbSAnbmV4dC1nYSdcclxuaW1wb3J0ICcuLi9wYWdlcy9zdHlsZXMuc2NzcydcclxuXHJcblxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dC13cmFwcGVyXCI+XHJcbiAgICAgICAgPEhlYWQ+IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPiAgICAgICAgICAgXHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgXHJcbiAgICAgICAgY29udGVudD1cIlNob3BpZnkgUGFydG5lciB8IERldmVsb3BlciB8IERlc2lnbmVyLiAgU3RhcnQgY3VzdG9taXppbmcgeW91ciBTaG9waWZ5IHRoZW1lIG5vdy4gIEV4cGVydGlzZSBpbiB0aGVtZSBkZXZlbG9wbWVudCBhbmQgZGVzaWduIGFuZCBTRU8gb3B0aW1pemF0aW9uLiBDb250YWN0IG1lIG5vdyBmb3IgYSBmcmVlIGNvbnN1bHRhdGlvbi5cIj48L21ldGE+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgXHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhHQShcIlVBLTE0MDIyODA2OS03XCIsIFJvdXRlcikoTGF5b3V0KSIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuXHQnIzAwMDBDQycsXG5cdCcjMDAwMEZGJyxcblx0JyMwMDMzQ0MnLFxuXHQnIzAwMzNGRicsXG5cdCcjMDA2NkNDJyxcblx0JyMwMDY2RkYnLFxuXHQnIzAwOTlDQycsXG5cdCcjMDA5OUZGJyxcblx0JyMwMENDMDAnLFxuXHQnIzAwQ0MzMycsXG5cdCcjMDBDQzY2Jyxcblx0JyMwMENDOTknLFxuXHQnIzAwQ0NDQycsXG5cdCcjMDBDQ0ZGJyxcblx0JyMzMzAwQ0MnLFxuXHQnIzMzMDBGRicsXG5cdCcjMzMzM0NDJyxcblx0JyMzMzMzRkYnLFxuXHQnIzMzNjZDQycsXG5cdCcjMzM2NkZGJyxcblx0JyMzMzk5Q0MnLFxuXHQnIzMzOTlGRicsXG5cdCcjMzNDQzAwJyxcblx0JyMzM0NDMzMnLFxuXHQnIzMzQ0M2NicsXG5cdCcjMzNDQzk5Jyxcblx0JyMzM0NDQ0MnLFxuXHQnIzMzQ0NGRicsXG5cdCcjNjYwMENDJyxcblx0JyM2NjAwRkYnLFxuXHQnIzY2MzNDQycsXG5cdCcjNjYzM0ZGJyxcblx0JyM2NkNDMDAnLFxuXHQnIzY2Q0MzMycsXG5cdCcjOTkwMENDJyxcblx0JyM5OTAwRkYnLFxuXHQnIzk5MzNDQycsXG5cdCcjOTkzM0ZGJyxcblx0JyM5OUNDMDAnLFxuXHQnIzk5Q0MzMycsXG5cdCcjQ0MwMDAwJyxcblx0JyNDQzAwMzMnLFxuXHQnI0NDMDA2NicsXG5cdCcjQ0MwMDk5Jyxcblx0JyNDQzAwQ0MnLFxuXHQnI0NDMDBGRicsXG5cdCcjQ0MzMzAwJyxcblx0JyNDQzMzMzMnLFxuXHQnI0NDMzM2NicsXG5cdCcjQ0MzMzk5Jyxcblx0JyNDQzMzQ0MnLFxuXHQnI0NDMzNGRicsXG5cdCcjQ0M2NjAwJyxcblx0JyNDQzY2MzMnLFxuXHQnI0NDOTkwMCcsXG5cdCcjQ0M5OTMzJyxcblx0JyNDQ0NDMDAnLFxuXHQnI0NDQ0MzMycsXG5cdCcjRkYwMDAwJyxcblx0JyNGRjAwMzMnLFxuXHQnI0ZGMDA2NicsXG5cdCcjRkYwMDk5Jyxcblx0JyNGRjAwQ0MnLFxuXHQnI0ZGMDBGRicsXG5cdCcjRkYzMzAwJyxcblx0JyNGRjMzMzMnLFxuXHQnI0ZGMzM2NicsXG5cdCcjRkYzMzk5Jyxcblx0JyNGRjMzQ0MnLFxuXHQnI0ZGMzNGRicsXG5cdCcjRkY2NjAwJyxcblx0JyNGRjY2MzMnLFxuXHQnI0ZGOTkwMCcsXG5cdCcjRkY5OTMzJyxcblx0JyNGRkNDMDAnLFxuXHQnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcblx0Ly8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuXHQvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuXHQvLyBleHBsaWNpdGx5XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiAod2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCB3aW5kb3cucHJvY2Vzcy5fX253anMpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIElzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG5cdC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG5cdHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuXHRcdC8vIElzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcblx0XHQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuXHRcdC8vIElzIGZpcmVmb3ggPj0gdjMxP1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuXHRcdC8vIERvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRhcmdzWzBdID0gKHRoaXMudXNlQ29sb3JzID8gJyVjJyA6ICcnKSArXG5cdFx0dGhpcy5uYW1lc3BhY2UgK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKSArXG5cdFx0YXJnc1swXSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyVjICcgOiAnICcpICtcblx0XHQnKycgKyBtb2R1bGUuZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG5cdGlmICghdGhpcy51c2VDb2xvcnMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcblx0YXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0Jyk7XG5cblx0Ly8gVGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcblx0Ly8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuXHQvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cblx0bGV0IGluZGV4ID0gMDtcblx0bGV0IGxhc3RDID0gMDtcblx0YXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIG1hdGNoID0+IHtcblx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5kZXgrKztcblx0XHRpZiAobWF0Y2ggPT09ICclYycpIHtcblx0XHRcdC8vIFdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuXHRcdFx0Ly8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcblx0XHRcdGxhc3RDID0gaW5kZXg7XG5cdFx0fVxuXHR9KTtcblxuXHRhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGxvZyguLi5hcmdzKSB7XG5cdC8vIFRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG5cdC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG5cdHJldHVybiB0eXBlb2YgY29uc29sZSA9PT0gJ29iamVjdCcgJiZcblx0XHRjb25zb2xlLmxvZyAmJlxuXHRcdGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdHRyeSB7XG5cdFx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5zZXRJdGVtKCdkZWJ1ZycsIG5hbWVzcGFjZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdGxldCByO1xuXHR0cnkge1xuXHRcdHIgPSBleHBvcnRzLnN0b3JhZ2UuZ2V0SXRlbSgnZGVidWcnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cblxuXHQvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG5cdGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuXHRcdHIgPSBwcm9jZXNzLmVudi5ERUJVRztcblx0fVxuXG5cdHJldHVybiByO1xufVxuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcblx0dHJ5IHtcblx0XHQvLyBUVk1MS2l0IChBcHBsZSBUViBKUyBSdW50aW1lKSBkb2VzIG5vdCBoYXZlIGEgd2luZG93IG9iamVjdCwganVzdCBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0XG5cdFx0Ly8gVGhlIEJyb3dzZXIgYWxzbyBoYXMgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dC5cblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcblx0fVxufTtcbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICovXG5cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuXHRjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcblx0Y3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuXHRPYmplY3Qua2V5cyhlbnYpLmZvckVhY2goa2V5ID0+IHtcblx0XHRjcmVhdGVEZWJ1Z1trZXldID0gZW52W2tleV07XG5cdH0pO1xuXG5cdC8qKlxuXHQqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cblx0Ki9cblx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzID0gW107XG5cblx0LyoqXG5cdCogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG5cdCovXG5cblx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHQvKipcblx0KiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG5cdCpcblx0KiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcblxuXHQvKipcblx0KiBTZWxlY3RzIGEgY29sb3IgZm9yIGEgZGVidWcgbmFtZXNwYWNlXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblxuXHRcdGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcblx0XHRcdC8vIERpc2FibGVkP1xuXHRcdFx0aWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2VsZiA9IGRlYnVnO1xuXG5cdFx0XHQvLyBTZXQgYGRpZmZgIHRpbWVzdGFtcFxuXHRcdFx0Y29uc3QgY3VyciA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNvbnN0IG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcblx0XHRcdHNlbGYuZGlmZiA9IG1zO1xuXHRcdFx0c2VsZi5wcmV2ID0gcHJldlRpbWU7XG5cdFx0XHRzZWxmLmN1cnIgPSBjdXJyO1xuXHRcdFx0cHJldlRpbWUgPSBjdXJyO1xuXG5cdFx0XHRhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG5cdFx0XHRcdGFyZ3MudW5zaGlmdCgnJU8nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgKG1hdGNoLCBmb3JtYXQpID0+IHtcblx0XHRcdFx0Ly8gSWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuXHRcdFx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gY3JlYXRlRGVidWcuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXHRcdFx0XHRpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGFyZ3NbaW5kZXhdO1xuXHRcdFx0XHRcdG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuXHRcdFx0XHRcdC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblx0XHRcdFx0XHRhcmdzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcblx0XHRcdGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuXHRcdFx0Y29uc3QgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG5cdFx0XHRsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHRkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0ZGVidWcuZW5hYmxlZCA9IGNyZWF0ZURlYnVnLmVuYWJsZWQobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy51c2VDb2xvcnMgPSBjcmVhdGVEZWJ1Zy51c2VDb2xvcnMoKTtcblx0XHRkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cdFx0ZGVidWcuZXh0ZW5kID0gZXh0ZW5kO1xuXHRcdC8vIERlYnVnLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuXHRcdC8vIGRlYnVnLnJhd0xvZyA9IHJhd0xvZztcblxuXHRcdC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG5cdFx0aWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcblx0XHR9XG5cblx0XHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG5cblx0XHRyZXR1cm4gZGVidWc7XG5cdH1cblxuXHRmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRcdGNvbnN0IGluZGV4ID0gY3JlYXRlRGVidWcuaW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG5cdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0Y29uc3QgbmV3RGVidWcgPSBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuXHRcdG5ld0RlYnVnLmxvZyA9IHRoaXMubG9nO1xuXHRcdHJldHVybiBuZXdEZWJ1Zztcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcblx0KiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuXHRcdGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG5cblx0XHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRcdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0XHRsZXQgaTtcblx0XHRjb25zdCBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoIXNwbGl0W2ldKSB7XG5cdFx0XHRcdC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcblxuXHRcdFx0aWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGNyZWF0ZURlYnVnLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXNbaV07XG5cdFx0XHRpbnN0YW5jZS5lbmFibGVkID0gY3JlYXRlRGVidWcuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0Y3JlYXRlRGVidWcuZW5hYmxlKGNyZWF0ZURlYnVnLmxvYWQoKSk7XG5cblx0cmV0dXJuIGNyZWF0ZURlYnVnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xuIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB3ID0gZCAqIDc7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbCkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKC0/KD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2RlYnVnPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImRlYnVnXCIpKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmluaXQ9aW5pdCxleHBvcnRzLnBhZ2V2aWV3PXBhZ2V2aWV3LGV4cG9ydHMuZXZlbnQ9ZXZlbnQsZXhwb3J0cy5leGNlcHRpb249ZXhjZXB0aW9uO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYSl7cmV0dXJuIGEmJmEuX19lc01vZHVsZT9hOntkZWZhdWx0OmF9fXZhciBsb2c9KDAsX2RlYnVnLmRlZmF1bHQpKFwiYW5hbHl0aWNzXCIpO2Z1bmN0aW9uIGluaXQoYSl7bG9nKFwiQW5hbHl0aWNzIGluaXQgdHJpZ2dlcmVkIGZvciBcIi5jb25jYXQoYSkpfWZ1bmN0aW9uIHBhZ2V2aWV3KCl7bG9nKFwiUGFnZXZpZXcgdHJpZ2dlcmVkIGZvciBcIi5jb25jYXQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSl9ZnVuY3Rpb24gZXZlbnQoKXt2YXIgYT0wPGFyZ3VtZW50cy5sZW5ndGgmJmFyZ3VtZW50c1swXSE9PXZvaWQgMD9hcmd1bWVudHNbMF06XCJcIixiPTE8YXJndW1lbnRzLmxlbmd0aCYmYXJndW1lbnRzWzFdIT09dm9pZCAwP2FyZ3VtZW50c1sxXTpcIlwiO2xvZyhcIkV2ZW50IGZvciBjYXRlZ29yeSBcIi5jb25jYXQoYSxcIiBhbmQgYWN0aW9uIFwiKS5jb25jYXQoYixcIiB0cmlnZ2VyZWRcIikpfWZ1bmN0aW9uIGV4Y2VwdGlvbigpe3ZhciBhPTA8YXJndW1lbnRzLmxlbmd0aCYmYXJndW1lbnRzWzBdIT09dm9pZCAwP2FyZ3VtZW50c1swXTpcIlwiLGI9ISEoMTxhcmd1bWVudHMubGVuZ3RoJiZhcmd1bWVudHNbMV0hPT12b2lkIDApJiZhcmd1bWVudHNbMV07bG9nKFwiXCIuY29uY2F0KGI/XCJGYXRhbCBleGNlcHRpb25cIjpcIkV4Y2VwdGlvblwiLFwiIHdpdGggZGVzY3JpcHRpb24gXCIpLmNvbmNhdChhKSl9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9yZWFjdEdhPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0LWdhXCIpKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmluaXQ9aW5pdCxleHBvcnRzLnBhZ2V2aWV3PXBhZ2V2aWV3LGV4cG9ydHMuZXZlbnQ9ZXZlbnQsZXhwb3J0cy5leGNlcHRpb249ZXhjZXB0aW9uO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYSl7cmV0dXJuIGEmJmEuX19lc01vZHVsZT9hOntkZWZhdWx0OmF9fXZhciBJU19CUk9XU0VSPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c7ZnVuY3Rpb24gaW5pdChhKXtJU19CUk9XU0VSJiYhd2luZG93LkdBX0lOSVRJQUxJWkVEJiZhJiZfcmVhY3RHYS5kZWZhdWx0LmluaXRpYWxpemUoYSl9ZnVuY3Rpb24gcGFnZXZpZXcoKXtfcmVhY3RHYS5kZWZhdWx0LnNldCh7cGFnZTp3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9KSxfcmVhY3RHYS5kZWZhdWx0LnBhZ2V2aWV3KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSl9ZnVuY3Rpb24gZXZlbnQoKXt2YXIgYT0wPGFyZ3VtZW50cy5sZW5ndGgmJmFyZ3VtZW50c1swXSE9PXZvaWQgMD9hcmd1bWVudHNbMF06XCJcIixiPTE8YXJndW1lbnRzLmxlbmd0aCYmYXJndW1lbnRzWzFdIT09dm9pZCAwP2FyZ3VtZW50c1sxXTpcIlwiO2EmJmImJl9yZWFjdEdhLmRlZmF1bHQuZXZlbnQoe2NhdGVnb3J5OmEsYWN0aW9uOmJ9KX1mdW5jdGlvbiBleGNlcHRpb24oKXt2YXIgYT0wPGFyZ3VtZW50cy5sZW5ndGgmJmFyZ3VtZW50c1swXSE9PXZvaWQgMD9hcmd1bWVudHNbMF06XCJcIixiPSEhKDE8YXJndW1lbnRzLmxlbmd0aCYmYXJndW1lbnRzWzFdIT09dm9pZCAwKSYmYXJndW1lbnRzWzFdO2EmJl9yZWFjdEdhLmRlZmF1bHQuZXhjZXB0aW9uKHtkZXNjcmlwdGlvbjphLGZhdGFsOmJ9KX0iLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpLHByb2RMeXRpY3M9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vYW5hbHl0aWNzL3Byb2RcIikpLGRldkx5dGljcz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9hbmFseXRpY3MvZGV2XCIpKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChhKXtpZihhJiZhLl9fZXNNb2R1bGUpcmV0dXJuIGE7dmFyIGI9e307aWYobnVsbCE9YSlmb3IodmFyIGMgaW4gYSlpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSxjKSl7dmFyIGQ9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSxjKTp7fTtkLmdldHx8ZC5zZXQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KGIsYyxkKTpiW2NdPWFbY119cmV0dXJuIGIuZGVmYXVsdD1hLGJ9ZnVuY3Rpb24gX3R5cGVvZihhKXtyZXR1cm4gX3R5cGVvZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oYSl7cmV0dXJuIHR5cGVvZiBhfTpmdW5jdGlvbihhKXtyZXR1cm4gYSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZhLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZhIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBhfSxfdHlwZW9mKGEpfWZ1bmN0aW9uIF9vYmplY3RTcHJlYWQoYSl7Zm9yKHZhciBiPTE7Yjxhcmd1bWVudHMubGVuZ3RoO2IrKyl7dmFyIGM9bnVsbD09YXJndW1lbnRzW2JdP3t9OmFyZ3VtZW50c1tiXSxkPU9iamVjdC5rZXlzKGMpO1wiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMmJihkPWQuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoYykuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGMsYSkuZW51bWVyYWJsZX0pKSksZC5mb3JFYWNoKGZ1bmN0aW9uKGIpe19kZWZpbmVQcm9wZXJ0eShhLGIsY1tiXSl9KX1yZXR1cm4gYX1mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soYSxiKXtpZighKGEgaW5zdGFuY2VvZiBiKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKGEsYil7Zm9yKHZhciBjLGQ9MDtkPGIubGVuZ3RoO2QrKyljPWJbZF0sYy5lbnVtZXJhYmxlPWMuZW51bWVyYWJsZXx8ITEsYy5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gYyYmKGMud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGMua2V5LGMpfWZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhhLGIsYyl7cmV0dXJuIGImJl9kZWZpbmVQcm9wZXJ0aWVzKGEucHJvdG90eXBlLGIpLGMmJl9kZWZpbmVQcm9wZXJ0aWVzKGEsYyksYX1mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihhLGIpe3JldHVybiBiJiYoXCJvYmplY3RcIj09PV90eXBlb2YoYil8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGIpP2I6X2Fzc2VydFRoaXNJbml0aWFsaXplZChhKX1mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YoYSl7cmV0dXJuIF9nZXRQcm90b3R5cGVPZj1PYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LmdldFByb3RvdHlwZU9mOmZ1bmN0aW9uKGEpe3JldHVybiBhLl9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKGEpfSxfZ2V0UHJvdG90eXBlT2YoYSl9ZnVuY3Rpb24gX2luaGVyaXRzKGEsYil7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgYiYmbnVsbCE9PWIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO2EucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoYiYmYi5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTphLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxiJiZfc2V0UHJvdG90eXBlT2YoYSxiKX1mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YoYSxiKXtyZXR1cm4gX3NldFByb3RvdHlwZU9mPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5fX3Byb3RvX189YixhfSxfc2V0UHJvdG90eXBlT2YoYSxiKX1mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKGEpe2lmKHZvaWQgMD09PWEpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiBhfWZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShhLGIsYyl7cmV0dXJuIGIgaW4gYT9PYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHt2YWx1ZTpjLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6YVtiXT1jLGF9ZnVuY3Rpb24gaXNMb2NhbChhKXtyZXR1cm4gbG9jYXRpb24uaG9zdG5hbWU9PT1hfWZ1bmN0aW9uIGlzRGV2KCl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVn12YXIgX2RlZmF1bHQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz0yPGFyZ3VtZW50cy5sZW5ndGgmJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06e30sZD1jLmxvY2FsaG9zdCxlPXZvaWQgMD09PWQ/XCJsb2NhbGhvc3RcIjpkO3JldHVybiBmdW5jdGlvbihjKXt2YXIgZD0vKiNfX1BVUkVfXyovZnVuY3Rpb24oZCl7ZnVuY3Rpb24gZigpe3ZhciBhLGI7X2NsYXNzQ2FsbENoZWNrKHRoaXMsZik7Zm9yKHZhciBjPWFyZ3VtZW50cy5sZW5ndGgsZD1BcnJheShjKSxlPTA7ZTxjO2UrKylkW2VdPWFyZ3VtZW50c1tlXTtyZXR1cm4gYj1fcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLChhPV9nZXRQcm90b3R5cGVPZihmKSkuY2FsbC5hcHBseShhLFt0aGlzXS5jb25jYXQoZCkpKSxfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKGIpKSxcInN0YXRlXCIse2FuYWx5dGljczp2b2lkIDB9KSxifXJldHVybiBfaW5oZXJpdHMoZixkKSxfY3JlYXRlQ2xhc3MoZixbe2tleTpcImNvbXBvbmVudERpZE1vdW50XCIsdmFsdWU6ZnVuY3Rpb24gZygpey8vIGNoZWNrIGlmIGl0IHNob3VsZCB0cmFja1xudmFyIGM9aXNMb2NhbChlKXx8aXNEZXYoKSxkPWM/ZGV2THl0aWNzOnByb2RMeXRpY3M7Ly8gY2hlY2sgaWYgaXQgc2hvdWxkIHVzZSBwcm9kdWN0aW9uIG9yIGRldiBhbmFseXRpY3NcbmQuaW5pdChhKSxkLnBhZ2V2aWV3KCk7Ly8gc2F2ZSBwb3NzaWJsZSBwcmV2aW91c2x5IGRlZmluZWQgY2FsbGJhY2tcbnZhciBmPWIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlO2Iub25Sb3V0ZUNoYW5nZUNvbXBsZXRlPWZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZiYmZigpLGQucGFnZXZpZXcoKX0sdGhpcy5zZXRTdGF0ZSh7YW5hbHl0aWNzOmR9KX19LHtrZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbiBhKCl7cmV0dXJuKDAsX3JlYWN0LmNyZWF0ZUVsZW1lbnQpKGMsX29iamVjdFNwcmVhZCh7fSx0aGlzLnByb3BzLHthbmFseXRpY3M6dGhpcy5zdGF0ZS5hbmFseXRpY3N9KSl9fV0pLGZ9KF9yZWFjdC5Db21wb25lbnQpO3JldHVybiBjLmdldEluaXRpYWxQcm9wcyYmKGQuZ2V0SW5pdGlhbFByb3BzPWMuZ2V0SW5pdGlhbFByb3BzKSxkfX07ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZGlzdC9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=