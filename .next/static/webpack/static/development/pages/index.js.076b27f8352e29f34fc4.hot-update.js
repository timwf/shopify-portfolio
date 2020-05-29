webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/react-ga/dist/esm/components/OutboundLink.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/components/OutboundLink.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OutboundLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NEWTAB = '_blank';
var MIDDLECLICK = 1;

var OutboundLink =
/*#__PURE__*/
function (_Component) {
  _inherits(OutboundLink, _Component);

  function OutboundLink() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OutboundLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OutboundLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var _this$props = _this.props,
          target = _this$props.target,
          eventLabel = _this$props.eventLabel,
          to = _this$props.to,
          onClick = _this$props.onClick,
          trackerNames = _this$props.trackerNames;
      var eventMeta = {
        label: eventLabel
      };
      var sameTarget = target !== NEWTAB;
      var normalClick = !(event.ctrlKey || event.shiftKey || event.metaKey || event.button === MIDDLECLICK);

      if (sameTarget && normalClick) {
        event.preventDefault();
        OutboundLink.trackLink(eventMeta, function () {
          window.location.href = to;
        }, trackerNames);
      } else {
        OutboundLink.trackLink(eventMeta, function () {}, trackerNames);
      }

      if (onClick) {
        onClick(event);
      }
    });

    return _this;
  }

  _createClass(OutboundLink, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          href = _this$props2.to,
          oldProps = _objectWithoutProperties(_this$props2, ["to"]);

      var props = _objectSpread({}, oldProps, {
        href: href,
        onClick: this.handleClick
      });

      if (this.props.target === NEWTAB) {
        props.rel = 'noopener noreferrer';
      }

      delete props.eventLabel;
      delete props.trackerNames;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('a', props);
    }
  }]);

  return OutboundLink;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(OutboundLink, "trackLink", function () {
  Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_2__["default"])('ga tracking not enabled');
});

_defineProperty(OutboundLink, "propTypes", {
  eventLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  trackerNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)
});

_defineProperty(OutboundLink, "defaultProps", {
  target: null,
  to: null,
  onClick: null,
  trackerNames: null
});



/***/ }),

/***/ "./node_modules/react-ga/dist/esm/core.js":
/*!************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/core.js ***!
  \************************************************/
/*! exports provided: initialize, ga, set, send, pageview, modalview, timing, event, exception, plugin, outboundLink, testModeAPI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ga", function() { return ga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalview", function() { return modalview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timing", function() { return timing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exception", function() { return exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outboundLink", function() { return outboundLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testModeAPI", function() { return testModeAPI; });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/format */ "./node_modules/react-ga/dist/esm/utils/format.js");
/* harmony import */ var _utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/removeLeadingSlash */ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js");
/* harmony import */ var _utils_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/trim */ "./node_modules/react-ga/dist/esm/utils/trim.js");
/* harmony import */ var _utils_loadGA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/loadGA */ "./node_modules/react-ga/dist/esm/utils/loadGA.js");
/* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
/* harmony import */ var _utils_console_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/console/log */ "./node_modules/react-ga/dist/esm/utils/console/log.js");
/* harmony import */ var _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/testModeAPI */ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * React Google Analytics Module
 *
 * @package react-ga
 * @author  Adam Lofting <adam@mozillafoundation.org>
 *          Atul Varma <atul@mozillafoundation.org>
 */

/**
 * Utilities
 */








var _isNotBrowser = typeof window === 'undefined' || typeof document === 'undefined';

var _debug = false;
var _titleCase = true;
var _testMode = false;
var _alwaysSendToDefaultTracker = true;

var internalGa = function internalGa() {
  var _window;

  if (_testMode) return _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"].ga.apply(_utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"], arguments);
  if (_isNotBrowser) return false;
  if (!window.ga) return Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually');
  return (_window = window).ga.apply(_window, arguments);
};

function _format(s) {
  return Object(_utils_format__WEBPACK_IMPORTED_MODULE_0__["default"])(s, _titleCase);
}

function _gaCommand(trackerNames) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var command = args[0];

  if (typeof internalGa === 'function') {
    if (typeof command !== 'string') {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('ga command must be a string');
      return;
    }

    if (_alwaysSendToDefaultTracker || !Array.isArray(trackerNames)) internalGa.apply(void 0, args);

    if (Array.isArray(trackerNames)) {
      trackerNames.forEach(function (name) {
        internalGa.apply(void 0, _toConsumableArray(["".concat(name, ".").concat(command)].concat(args.slice(1))));
      });
    }
  }
}

function _initialize(gaTrackingID, options) {
  if (!gaTrackingID) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('gaTrackingID is required in initialize()');
    return;
  }

  if (options) {
    if (options.debug && options.debug === true) {
      _debug = true;
    }

    if (options.titleCase === false) {
      _titleCase = false;
    }

    if (options.useExistingGa) {
      return;
    }
  }

  if (options && options.gaOptions) {
    internalGa('create', gaTrackingID, options.gaOptions);
  } else {
    internalGa('create', gaTrackingID, 'auto');
  }
}

function initialize(configsOrTrackingId, options) {
  if (options && options.testMode === true) {
    _testMode = true;
  } else {
    if (_isNotBrowser) {
      return false;
    }

    if (!options || options.standardImplementation !== true) Object(_utils_loadGA__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  }

  _alwaysSendToDefaultTracker = options && typeof options.alwaysSendToDefaultTracker === 'boolean' ? options.alwaysSendToDefaultTracker : true;

  if (Array.isArray(configsOrTrackingId)) {
    configsOrTrackingId.forEach(function (config) {
      if (_typeof(config) !== 'object') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('All configs must be an object');
        return;
      }

      _initialize(config.trackingId, config);
    });
  } else {
    _initialize(configsOrTrackingId, options);
  }

  return true;
}
/**
 * ga:
 * Returns the original GA object.
 */

function ga() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length > 0) {
    internalGa.apply(void 0, args);

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'arguments\');');
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with arguments: ".concat(JSON.stringify(args)));
    }
  }

  return window.ga;
}
/**
 * set:
 * GA tracker set method
 * @param {Object} fieldsObject - a field/value pair or a group of field/value pairs on the tracker
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function set(fieldsObject, trackerNames) {
  if (!fieldsObject) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`fieldsObject` is required in .set()');
    return;
  }

  if (_typeof(fieldsObject) !== 'object') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `fieldsObject` arg to be an Object');
    return;
  }

  if (Object.keys(fieldsObject).length === 0) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('empty `fieldsObject` given to .set()');
  }

  _gaCommand(trackerNames, 'set', fieldsObject);

  if (_debug) {
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'set\', fieldsObject);');
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with fieldsObject: ".concat(JSON.stringify(fieldsObject)));
  }
}
/**
 * send:
 * Clone of the low level `ga.send` method
 * WARNING: No validations will be applied to this
 * @param  {Object} fieldObject - field object for tracking different analytics
 * @param  {Array} trackerNames - trackers to send the command to
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function send(fieldObject, trackerNames) {
  _gaCommand(trackerNames, 'send', fieldObject);

  if (_debug) {
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', fieldObject);');
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with fieldObject: ".concat(JSON.stringify(fieldObject)));
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with trackers: ".concat(JSON.stringify(trackerNames)));
  }
}
/**
 * pageview:
 * Basic GA pageview tracking
 * @param  {String} path - the current page page e.g. '/about'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 * @param {String} title - (optional) the page title e. g. 'My Website'
 */

function pageview(rawPath, trackerNames, title) {
  if (!rawPath) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('path is required in .pageview()');
    return;
  }

  var path = Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawPath);

  if (path === '') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('path cannot be an empty string in .pageview()');
    return;
  }

  var extraFields = {};

  if (title) {
    extraFields.title = title;
  }

  if (typeof ga === 'function') {
    _gaCommand(trackerNames, 'send', _objectSpread({
      hitType: 'pageview',
      page: path
    }, extraFields));

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', \'pageview\', path);');
      var extraLog = '';

      if (title) {
        extraLog = " and title: ".concat(title);
      }

      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with path: ".concat(path).concat(extraLog));
    }
  }
}
/**
 * modalview:
 * a proxy to basic GA pageview tracking to consistently track
 * modal views that are an equivalent UX to a traditional pageview
 * @param  {String} modalName e.g. 'add-or-edit-club'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function modalview(rawModalName, trackerNames) {
  if (!rawModalName) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('modalName is required in .modalview(modalName)');
    return;
  }

  var modalName = Object(_utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawModalName));

  if (modalName === '') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('modalName cannot be an empty string or a single / in .modalview()');
    return;
  }

  if (typeof ga === 'function') {
    var path = "/modal/".concat(modalName);

    _gaCommand(trackerNames, 'send', 'pageview', path);

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', \'pageview\', path);');
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with path: ".concat(path));
    }
  }
}
/**
 * timing:
 * GA timing
 * @param args.category {String} required
 * @param args.variable {String} required
 * @param args.value  {Int}  required
 * @param args.label  {String} required
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function timing() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref.category,
      variable = _ref.variable,
      value = _ref.value,
      label = _ref.label;

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    if (!category || !variable || !value || typeof value !== 'number') {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.category, args.variable ' + 'AND args.value are required in timing() ' + 'AND args.value has to be a number');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'timing',
      timingCategory: _format(category),
      timingVar: _format(variable),
      timingValue: value
    };

    if (label) {
      fieldObject.timingLabel = _format(label);
    }

    send(fieldObject, trackerNames);
  }
}
/**
 * event:
 * GA event tracking
 * @param args.category {String} required
 * @param args.action {String} required
 * @param args.label {String} optional
 * @param args.value {Int} optional
 * @param args.nonInteraction {boolean} optional
 * @param args.transport {string} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function event() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref2.category,
      action = _ref2.action,
      label = _ref2.label,
      value = _ref2.value,
      nonInteraction = _ref2.nonInteraction,
      transport = _ref2.transport,
      args = _objectWithoutProperties(_ref2, ["category", "action", "label", "value", "nonInteraction", "transport"]);

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    // Simple Validation
    if (!category || !action) {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.category AND args.action are required in event()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: _format(category),
      eventAction: _format(action)
    }; // Optional Fields

    if (label) {
      fieldObject.eventLabel = _format(label);
    }

    if (typeof value !== 'undefined') {
      if (typeof value !== 'number') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `args.value` arg to be a Number.');
      } else {
        fieldObject.eventValue = value;
      }
    }

    if (typeof nonInteraction !== 'undefined') {
      if (typeof nonInteraction !== 'boolean') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.nonInteraction` must be a boolean.');
      } else {
        fieldObject.nonInteraction = nonInteraction;
      }
    }

    if (typeof transport !== 'undefined') {
      if (typeof transport !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.transport` must be a string.');
      } else {
        if (['beacon', 'xhr', 'image'].indexOf(transport) === -1) {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.transport` must be either one of these values: `beacon`, `xhr` or `image`');
        }

        fieldObject.transport = transport;
      }
    }

    Object.keys(args).filter(function (key) {
      return key.substr(0, 'dimension'.length) === 'dimension';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    });
    Object.keys(args).filter(function (key) {
      return key.substr(0, 'metric'.length) === 'metric';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    }); // Send to GA

    send(fieldObject, trackerNames);
  }
}
/**
 * exception:
 * GA exception tracking
 * @param args.description {String} optional
 * @param args.fatal {boolean} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function exception(_ref3, trackerNames) {
  var description = _ref3.description,
      fatal = _ref3.fatal;

  if (typeof ga === 'function') {
    // Required Fields
    var fieldObject = {
      hitType: 'exception'
    }; // Optional Fields

    if (description) {
      fieldObject.exDescription = _format(description);
    }

    if (typeof fatal !== 'undefined') {
      if (typeof fatal !== 'boolean') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.fatal` must be a boolean.');
      } else {
        fieldObject.exFatal = fatal;
      }
    } // Send to GA


    send(fieldObject, trackerNames);
  }
}
var plugin = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   * @param trackerName {String} optional e.g 'trackerName'
   */
  require: function require(rawName, options, trackerName) {
    if (typeof ga === 'function') {
      // Required Fields
      if (!rawName) {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`name` is required in .require()');
        return;
      }

      var name = Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawName);

      if (name === '') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`name` cannot be an empty string in .require()');
        return;
      }

      var requireString = trackerName ? "".concat(trackerName, ".require") : 'require'; // Optional Fields

      if (options) {
        if (_typeof(options) !== 'object') {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `options` arg to be an Object');
          return;
        }

        if (Object.keys(options).length === 0) {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Empty `options` given to .require()');
        }

        ga(requireString, name, options);

        if (_debug) {
          Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('require', '".concat(name, "', ").concat(JSON.stringify(options)));
        }
      } else {
        ga(requireString, name);

        if (_debug) {
          Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('require', '".concat(name, "');"));
        }
      }
    }
  },

  /**
   * execute:
   * GA execute action for plugin
   * Takes variable number of arguments
   * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
   * @param action {String} e.g. 'addItem' or 'myCustomAction'
   * @param actionType {String} optional e.g. 'detail'
   * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
   */
  execute: function execute(pluginName, action) {
    var payload;
    var actionType;

    if ((arguments.length <= 2 ? 0 : arguments.length - 2) === 1) {
      payload = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      actionType = arguments.length <= 2 ? undefined : arguments[2];
      payload = arguments.length <= 3 ? undefined : arguments[3];
    }

    if (typeof ga === 'function') {
      if (typeof pluginName !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `pluginName` arg to be a String.');
      } else if (typeof action !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `action` arg to be a String.');
      } else {
        var command = "".concat(pluginName, ":").concat(action);
        payload = payload || null;

        if (actionType && payload) {
          ga(command, actionType, payload);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("actionType: \"".concat(actionType, "\" with payload: ").concat(JSON.stringify(payload)));
          }
        } else if (payload) {
          ga(command, payload);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with payload: ".concat(JSON.stringify(payload)));
          }
        } else {
          ga(command);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
          }
        }
      }
    }
  }
};
/**
 * outboundLink:
 * GA outboundLink tracking
 * @param args.label {String} e.g. url, or 'Create an Account'
 * @param {function} hitCallback - Called after processing a hit.
 */

function outboundLink(args, hitCallback, trackerNames) {
  if (typeof hitCallback !== 'function') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('hitCallback function is required');
    return;
  }

  if (typeof ga === 'function') {
    // Simple Validation
    if (!args || !args.label) {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.label is required in outboundLink()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: 'Outbound',
      eventAction: 'Click',
      eventLabel: _format(args.label)
    };
    var safetyCallbackCalled = false;

    var safetyCallback = function safetyCallback() {
      // This prevents a delayed response from GA
      // causing hitCallback from being fired twice
      safetyCallbackCalled = true;
      hitCallback();
    }; // Using a timeout to ensure the execution of critical application code
    // in the case when the GA server might be down
    // or an ad blocker prevents sending the data
    // register safety net timeout:


    var t = setTimeout(safetyCallback, 250);

    var clearableCallbackForGA = function clearableCallbackForGA() {
      clearTimeout(t);

      if (!safetyCallbackCalled) {
        hitCallback();
      }
    };

    fieldObject.hitCallback = clearableCallbackForGA; // Send to GA

    send(fieldObject, trackerNames);
  } else {
    // if ga is not defined, return the callback so the application
    // continues to work as expected
    setTimeout(hitCallback, 0);
  }
}
var testModeAPI = _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"];
/* harmony default export */ __webpack_exports__["default"] = ({
  initialize: initialize,
  ga: ga,
  set: set,
  send: send,
  pageview: pageview,
  modalview: modalview,
  timing: timing,
  event: event,
  exception: exception,
  plugin: plugin,
  outboundLink: outboundLink,
  testModeAPI: _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/index.js ***!
  \*************************************************/
/*! exports provided: initialize, ga, set, send, pageview, modalview, timing, event, exception, plugin, outboundLink, testModeAPI, OutboundLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ga", function() { return ga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalview", function() { return modalview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timing", function() { return timing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exception", function() { return exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outboundLink", function() { return outboundLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testModeAPI", function() { return testModeAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundLink", function() { return OutboundLink; });
/* harmony import */ var _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/OutboundLink */ "./node_modules/react-ga/dist/esm/components/OutboundLink.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./node_modules/react-ga/dist/esm/core.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialize = _core__WEBPACK_IMPORTED_MODULE_1__["initialize"];
var ga = _core__WEBPACK_IMPORTED_MODULE_1__["ga"];
var set = _core__WEBPACK_IMPORTED_MODULE_1__["set"];
var send = _core__WEBPACK_IMPORTED_MODULE_1__["send"];
var pageview = _core__WEBPACK_IMPORTED_MODULE_1__["pageview"];
var modalview = _core__WEBPACK_IMPORTED_MODULE_1__["modalview"];
var timing = _core__WEBPACK_IMPORTED_MODULE_1__["timing"];
var event = _core__WEBPACK_IMPORTED_MODULE_1__["event"];
var exception = _core__WEBPACK_IMPORTED_MODULE_1__["exception"];
var plugin = _core__WEBPACK_IMPORTED_MODULE_1__["plugin"];
var outboundLink = _core__WEBPACK_IMPORTED_MODULE_1__["outboundLink"];
var testModeAPI = _core__WEBPACK_IMPORTED_MODULE_1__["testModeAPI"];
_components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"].origTrackLink = _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"].trackLink;
_components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"].trackLink = _core__WEBPACK_IMPORTED_MODULE_1__["outboundLink"];
var OutboundLink = _components_OutboundLink__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_objectSpread({}, _core__WEBPACK_IMPORTED_MODULE_1__, {
  OutboundLink: OutboundLink
}));

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/console/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/log.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
function log(s) {
  console.info('[react-ga]', s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/console/warn.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/warn.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warn; });
function warn(s) {
  console.warn('[react-ga]', s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/format.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/format.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
/* harmony import */ var _mightBeEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mightBeEmail */ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js");
/* harmony import */ var _toTitleCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toTitleCase */ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js");
/* harmony import */ var _console_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");



var redacted = 'REDACTED (Potential Email Address)';
function format(s, titleCase) {
  if (Object(_mightBeEmail__WEBPACK_IMPORTED_MODULE_0__["default"])(s)) {
    Object(_console_warn__WEBPACK_IMPORTED_MODULE_2__["default"])('This arg looks like an email address, redacting.');
    return redacted;
  }

  if (titleCase) {
    return Object(_toTitleCase__WEBPACK_IMPORTED_MODULE_1__["default"])(s);
  }

  return s;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/loadGA.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/loadGA.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  var gaAddress = 'https://www.google-analytics.com/analytics.js';

  if (options && options.gaAddress) {
    gaAddress = options.gaAddress;
  } else if (options && options.debug) {
    gaAddress = 'https://www.google-analytics.com/analytics_debug.js';
  } // https://developers.google.com/analytics/devguides/collection/analyticsjs/

  /* eslint-disable */


  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', gaAddress, 'ga');
  /* eslint-enable */

});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/mightBeEmail.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mightBeEmail; });
// See if s could be an email address. We don't want to send personal data like email.
// https://support.google.com/analytics/answer/2795983?hl=en
function mightBeEmail(s) {
  // There's no point trying to validate rfc822 fully, just look for ...@...
  return typeof s === 'string' && s.indexOf('@') !== -1;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeLeadingSlash; });
function removeLeadingSlash(string) {
  if (string.substring(0, 1) === '/') {
    return string.substring(1);
  }

  return string;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/testModeAPI.js ***!
  \*************************************************************/
/*! exports provided: gaCalls, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaCalls", function() { return gaCalls; });
var gaCalls = [];
/* harmony default export */ __webpack_exports__["default"] = ({
  calls: gaCalls,
  ga: function ga() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    gaCalls.push([].concat(args));
  },
  resetCalls: function resetCalls() {
    gaCalls.length = 0;
  }
});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/toTitleCase.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toTitleCase; });
/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trim */ "./node_modules/react-ga/dist/esm/utils/trim.js");
/**
 * To Title Case 2.1 - http://individed.com/code/to-title-case/
 * Copyright 2008-2013 David Gouch. Licensed under the MIT License.
 * https://github.com/gouch/to-title-case
 */

var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
function toTitleCase(string) {
  return Object(_trim__WEBPACK_IMPORTED_MODULE_0__["default"])(string).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' && (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/trim.js":
/*!******************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/trim.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trim; });
// GA strings need to have leading/trailing whitespace trimmed, and not all
// browsers have String.prototoype.trim().
function trim(s) {
  return s.replace(/^\s+|\s+$/g, '');
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HeroSection */ "./components/HeroSection.jsx");
/* harmony import */ var _components_SectionBreak__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SectionBreak */ "./components/SectionBreak.jsx");
/* harmony import */ var _components_SevicesSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SevicesSection */ "./components/SevicesSection.jsx");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_WorkSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/WorkSection */ "./components/WorkSection.jsx");
/* harmony import */ var _components_ReviewsSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ReviewsSection */ "./components/ReviewsSection.jsx");
/* harmony import */ var _components_Footer_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer.jsx */ "./components/Footer.jsx");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Tim\\Desktop\\React_projects\\shopify-portfolio\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var Index = function Index() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    eReactGA.initialize("\n       \n<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-140228069-7\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-140228069-7');\n</script>");
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Shopify Partner | Developer | Designer - Home Page")), __jsx(_components_HeroSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "hero-height",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(_components_SectionBreak__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(_components_SevicesSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  })), __jsx(_components_SectionBreak__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Work",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }), __jsx(_components_WorkSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }), __jsx(_components_SectionBreak__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Reviews",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }), __jsx(_components_ReviewsSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }), __jsx(_components_Footer_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }));
};

_s(Index, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ2EvZGlzdC9lc20vY29tcG9uZW50cy9PdXRib3VuZExpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdhL2Rpc3QvZXNtL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdhL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nYS9kaXN0L2VzbS91dGlscy9jb25zb2xlL2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ2EvZGlzdC9lc20vdXRpbHMvY29uc29sZS93YXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nYS9kaXN0L2VzbS91dGlscy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdhL2Rpc3QvZXNtL3V0aWxzL2xvYWRHQS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ2EvZGlzdC9lc20vdXRpbHMvbWlnaHRCZUVtYWlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nYS9kaXN0L2VzbS91dGlscy9yZW1vdmVMZWFkaW5nU2xhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdhL2Rpc3QvZXNtL3V0aWxzL3Rlc3RNb2RlQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nYS9kaXN0L2VzbS91dGlscy90b1RpdGxlQ2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ2EvZGlzdC9lc20vdXRpbHMvdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInVzZUVmZmVjdCIsImVSZWFjdEdBIiwiaW5pdGlhbGl6ZSJdLCJtYXBwaW5ncyI6Ijs7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LEtBQ0ssTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFESixDQURMLEVBS0ssTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEwsQ0FGQyxFQVNBO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsZ0VBQUQ7QUFBYyxRQUFJLEVBQUMsVUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBVEEsRUFZQSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQVpBLEVBZUEsTUFBQyxnRUFBRDtBQUFjLFFBQUksRUFBQyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkEsRUFnQkEsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJBLEVBaUJBLE1BQUMsZ0VBQUQ7QUFBYyxRQUFJLEVBQUMsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCQSxFQWtCQSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkEsRUFtQkEsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJBLENBREE7QUF1QkMsQ0F4Q0w7O0dBQU1ILEs7O0tBQUFBLEs7QUF5Q1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wNzZiMjdmODM1MmUyOWYzNGZjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdhcm4gZnJvbSAnLi4vdXRpbHMvY29uc29sZS93YXJuJztcbnZhciBORVdUQUIgPSAnX2JsYW5rJztcbnZhciBNSURETEVDTElDSyA9IDE7XG5cbnZhciBPdXRib3VuZExpbmsgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE91dGJvdW5kTGluaywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gT3V0Ym91bmRMaW5rKCkge1xuICAgIHZhciBfZ2V0UHJvdG90eXBlT2YyO1xuXG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE91dGJvdW5kTGluayk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2dldFByb3RvdHlwZU9mMiA9IF9nZXRQcm90b3R5cGVPZihPdXRib3VuZExpbmspKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJoYW5kbGVDbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHRhcmdldCA9IF90aGlzJHByb3BzLnRhcmdldCxcbiAgICAgICAgICBldmVudExhYmVsID0gX3RoaXMkcHJvcHMuZXZlbnRMYWJlbCxcbiAgICAgICAgICB0byA9IF90aGlzJHByb3BzLnRvLFxuICAgICAgICAgIG9uQ2xpY2sgPSBfdGhpcyRwcm9wcy5vbkNsaWNrLFxuICAgICAgICAgIHRyYWNrZXJOYW1lcyA9IF90aGlzJHByb3BzLnRyYWNrZXJOYW1lcztcbiAgICAgIHZhciBldmVudE1ldGEgPSB7XG4gICAgICAgIGxhYmVsOiBldmVudExhYmVsXG4gICAgICB9O1xuICAgICAgdmFyIHNhbWVUYXJnZXQgPSB0YXJnZXQgIT09IE5FV1RBQjtcbiAgICAgIHZhciBub3JtYWxDbGljayA9ICEoZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmJ1dHRvbiA9PT0gTUlERExFQ0xJQ0spO1xuXG4gICAgICBpZiAoc2FtZVRhcmdldCAmJiBub3JtYWxDbGljaykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBPdXRib3VuZExpbmsudHJhY2tMaW5rKGV2ZW50TWV0YSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdG87XG4gICAgICAgIH0sIHRyYWNrZXJOYW1lcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPdXRib3VuZExpbmsudHJhY2tMaW5rKGV2ZW50TWV0YSwgZnVuY3Rpb24gKCkge30sIHRyYWNrZXJOYW1lcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE91dGJvdW5kTGluaywgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGhyZWYgPSBfdGhpcyRwcm9wczIudG8sXG4gICAgICAgICAgb2xkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3RoaXMkcHJvcHMyLCBbXCJ0b1wiXSk7XG5cbiAgICAgIHZhciBwcm9wcyA9IF9vYmplY3RTcHJlYWQoe30sIG9sZFByb3BzLCB7XG4gICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2tcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy50YXJnZXQgPT09IE5FV1RBQikge1xuICAgICAgICBwcm9wcy5yZWwgPSAnbm9vcGVuZXIgbm9yZWZlcnJlcic7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBwcm9wcy5ldmVudExhYmVsO1xuICAgICAgZGVsZXRlIHByb3BzLnRyYWNrZXJOYW1lcztcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgcHJvcHMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBPdXRib3VuZExpbms7XG59KENvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShPdXRib3VuZExpbmssIFwidHJhY2tMaW5rXCIsIGZ1bmN0aW9uICgpIHtcbiAgd2FybignZ2EgdHJhY2tpbmcgbm90IGVuYWJsZWQnKTtcbn0pO1xuXG5fZGVmaW5lUHJvcGVydHkoT3V0Ym91bmRMaW5rLCBcInByb3BUeXBlc1wiLCB7XG4gIGV2ZW50TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0bzogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHRyYWNrZXJOYW1lczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZylcbn0pO1xuXG5fZGVmaW5lUHJvcGVydHkoT3V0Ym91bmRMaW5rLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIHRhcmdldDogbnVsbCxcbiAgdG86IG51bGwsXG4gIG9uQ2xpY2s6IG51bGwsXG4gIHRyYWNrZXJOYW1lczogbnVsbFxufSk7XG5cbmV4cG9ydCB7IE91dGJvdW5kTGluayBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuLyoqXG4gKiBSZWFjdCBHb29nbGUgQW5hbHl0aWNzIE1vZHVsZVxuICpcbiAqIEBwYWNrYWdlIHJlYWN0LWdhXG4gKiBAYXV0aG9yICBBZGFtIExvZnRpbmcgPGFkYW1AbW96aWxsYWZvdW5kYXRpb24ub3JnPlxuICogICAgICAgICAgQXR1bCBWYXJtYSA8YXR1bEBtb3ppbGxhZm91bmRhdGlvbi5vcmc+XG4gKi9cblxuLyoqXG4gKiBVdGlsaXRpZXNcbiAqL1xuaW1wb3J0IGZvcm1hdCBmcm9tICcuL3V0aWxzL2Zvcm1hdCc7XG5pbXBvcnQgcmVtb3ZlTGVhZGluZ1NsYXNoIGZyb20gJy4vdXRpbHMvcmVtb3ZlTGVhZGluZ1NsYXNoJztcbmltcG9ydCB0cmltIGZyb20gJy4vdXRpbHMvdHJpbSc7XG5pbXBvcnQgbG9hZEdBIGZyb20gJy4vdXRpbHMvbG9hZEdBJztcbmltcG9ydCB3YXJuIGZyb20gJy4vdXRpbHMvY29uc29sZS93YXJuJztcbmltcG9ydCBsb2cgZnJvbSAnLi91dGlscy9jb25zb2xlL2xvZyc7XG5pbXBvcnQgVGVzdE1vZGVBUEkgZnJvbSAnLi91dGlscy90ZXN0TW9kZUFQSSc7XG5cbnZhciBfaXNOb3RCcm93c2VyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJztcblxudmFyIF9kZWJ1ZyA9IGZhbHNlO1xudmFyIF90aXRsZUNhc2UgPSB0cnVlO1xudmFyIF90ZXN0TW9kZSA9IGZhbHNlO1xudmFyIF9hbHdheXNTZW5kVG9EZWZhdWx0VHJhY2tlciA9IHRydWU7XG5cbnZhciBpbnRlcm5hbEdhID0gZnVuY3Rpb24gaW50ZXJuYWxHYSgpIHtcbiAgdmFyIF93aW5kb3c7XG5cbiAgaWYgKF90ZXN0TW9kZSkgcmV0dXJuIFRlc3RNb2RlQVBJLmdhLmFwcGx5KFRlc3RNb2RlQVBJLCBhcmd1bWVudHMpO1xuICBpZiAoX2lzTm90QnJvd3NlcikgcmV0dXJuIGZhbHNlO1xuICBpZiAoIXdpbmRvdy5nYSkgcmV0dXJuIHdhcm4oJ1JlYWN0R0EuaW5pdGlhbGl6ZSBtdXN0IGJlIGNhbGxlZCBmaXJzdCBvciBHb29nbGVBbmFseXRpY3Mgc2hvdWxkIGJlIGxvYWRlZCBtYW51YWxseScpO1xuICByZXR1cm4gKF93aW5kb3cgPSB3aW5kb3cpLmdhLmFwcGx5KF93aW5kb3csIGFyZ3VtZW50cyk7XG59O1xuXG5mdW5jdGlvbiBfZm9ybWF0KHMpIHtcbiAgcmV0dXJuIGZvcm1hdChzLCBfdGl0bGVDYXNlKTtcbn1cblxuZnVuY3Rpb24gX2dhQ29tbWFuZCh0cmFja2VyTmFtZXMpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGNvbW1hbmQgPSBhcmdzWzBdO1xuXG4gIGlmICh0eXBlb2YgaW50ZXJuYWxHYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgY29tbWFuZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHdhcm4oJ2dhIGNvbW1hbmQgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWx3YXlzU2VuZFRvRGVmYXVsdFRyYWNrZXIgfHwgIUFycmF5LmlzQXJyYXkodHJhY2tlck5hbWVzKSkgaW50ZXJuYWxHYS5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodHJhY2tlck5hbWVzKSkge1xuICAgICAgdHJhY2tlck5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgaW50ZXJuYWxHYS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShbXCJcIi5jb25jYXQobmFtZSwgXCIuXCIpLmNvbmNhdChjb21tYW5kKV0uY29uY2F0KGFyZ3Muc2xpY2UoMSkpKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX2luaXRpYWxpemUoZ2FUcmFja2luZ0lELCBvcHRpb25zKSB7XG4gIGlmICghZ2FUcmFja2luZ0lEKSB7XG4gICAgd2FybignZ2FUcmFja2luZ0lEIGlzIHJlcXVpcmVkIGluIGluaXRpYWxpemUoKScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuZGVidWcgJiYgb3B0aW9ucy5kZWJ1ZyA9PT0gdHJ1ZSkge1xuICAgICAgX2RlYnVnID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy50aXRsZUNhc2UgPT09IGZhbHNlKSB7XG4gICAgICBfdGl0bGVDYXNlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMudXNlRXhpc3RpbmdHYSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2FPcHRpb25zKSB7XG4gICAgaW50ZXJuYWxHYSgnY3JlYXRlJywgZ2FUcmFja2luZ0lELCBvcHRpb25zLmdhT3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgaW50ZXJuYWxHYSgnY3JlYXRlJywgZ2FUcmFja2luZ0lELCAnYXV0bycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKGNvbmZpZ3NPclRyYWNraW5nSWQsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy50ZXN0TW9kZSA9PT0gdHJ1ZSkge1xuICAgIF90ZXN0TW9kZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgaWYgKF9pc05vdEJyb3dzZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgb3B0aW9ucy5zdGFuZGFyZEltcGxlbWVudGF0aW9uICE9PSB0cnVlKSBsb2FkR0Eob3B0aW9ucyk7XG4gIH1cblxuICBfYWx3YXlzU2VuZFRvRGVmYXVsdFRyYWNrZXIgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmFsd2F5c1NlbmRUb0RlZmF1bHRUcmFja2VyID09PSAnYm9vbGVhbicgPyBvcHRpb25zLmFsd2F5c1NlbmRUb0RlZmF1bHRUcmFja2VyIDogdHJ1ZTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjb25maWdzT3JUcmFja2luZ0lkKSkge1xuICAgIGNvbmZpZ3NPclRyYWNraW5nSWQuZm9yRWFjaChmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICBpZiAoX3R5cGVvZihjb25maWcpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB3YXJuKCdBbGwgY29uZmlncyBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF9pbml0aWFsaXplKGNvbmZpZy50cmFja2luZ0lkLCBjb25maWcpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIF9pbml0aWFsaXplKGNvbmZpZ3NPclRyYWNraW5nSWQsIG9wdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIGdhOlxuICogUmV0dXJucyB0aGUgb3JpZ2luYWwgR0Egb2JqZWN0LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnYSgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgIGludGVybmFsR2EuYXBwbHkodm9pZCAwLCBhcmdzKTtcblxuICAgIGlmIChfZGVidWcpIHtcbiAgICAgIGxvZygnY2FsbGVkIGdhKFxcJ2FyZ3VtZW50c1xcJyk7Jyk7XG4gICAgICBsb2coXCJ3aXRoIGFyZ3VtZW50czogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGFyZ3MpKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5nYTtcbn1cbi8qKlxuICogc2V0OlxuICogR0EgdHJhY2tlciBzZXQgbWV0aG9kXG4gKiBAcGFyYW0ge09iamVjdH0gZmllbGRzT2JqZWN0IC0gYSBmaWVsZC92YWx1ZSBwYWlyIG9yIGEgZ3JvdXAgb2YgZmllbGQvdmFsdWUgcGFpcnMgb24gdGhlIHRyYWNrZXJcbiAqIEBwYXJhbSB7QXJyYXl9IHRyYWNrZXJOYW1lcyAtIChvcHRpb25hbCkgYSBsaXN0IG9mIGV4dHJhIHRyYWNrZXJzIHRvIHJ1biB0aGUgY29tbWFuZCBvblxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQoZmllbGRzT2JqZWN0LCB0cmFja2VyTmFtZXMpIHtcbiAgaWYgKCFmaWVsZHNPYmplY3QpIHtcbiAgICB3YXJuKCdgZmllbGRzT2JqZWN0YCBpcyByZXF1aXJlZCBpbiAuc2V0KCknKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoX3R5cGVvZihmaWVsZHNPYmplY3QpICE9PSAnb2JqZWN0Jykge1xuICAgIHdhcm4oJ0V4cGVjdGVkIGBmaWVsZHNPYmplY3RgIGFyZyB0byBiZSBhbiBPYmplY3QnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZmllbGRzT2JqZWN0KS5sZW5ndGggPT09IDApIHtcbiAgICB3YXJuKCdlbXB0eSBgZmllbGRzT2JqZWN0YCBnaXZlbiB0byAuc2V0KCknKTtcbiAgfVxuXG4gIF9nYUNvbW1hbmQodHJhY2tlck5hbWVzLCAnc2V0JywgZmllbGRzT2JqZWN0KTtcblxuICBpZiAoX2RlYnVnKSB7XG4gICAgbG9nKCdjYWxsZWQgZ2EoXFwnc2V0XFwnLCBmaWVsZHNPYmplY3QpOycpO1xuICAgIGxvZyhcIndpdGggZmllbGRzT2JqZWN0OiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZmllbGRzT2JqZWN0KSkpO1xuICB9XG59XG4vKipcbiAqIHNlbmQ6XG4gKiBDbG9uZSBvZiB0aGUgbG93IGxldmVsIGBnYS5zZW5kYCBtZXRob2RcbiAqIFdBUk5JTkc6IE5vIHZhbGlkYXRpb25zIHdpbGwgYmUgYXBwbGllZCB0byB0aGlzXG4gKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkT2JqZWN0IC0gZmllbGQgb2JqZWN0IGZvciB0cmFja2luZyBkaWZmZXJlbnQgYW5hbHl0aWNzXG4gKiBAcGFyYW0gIHtBcnJheX0gdHJhY2tlck5hbWVzIC0gdHJhY2tlcnMgdG8gc2VuZCB0aGUgY29tbWFuZCB0b1xuICogQHBhcmFtIHtBcnJheX0gdHJhY2tlck5hbWVzIC0gKG9wdGlvbmFsKSBhIGxpc3Qgb2YgZXh0cmEgdHJhY2tlcnMgdG8gcnVuIHRoZSBjb21tYW5kIG9uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmQoZmllbGRPYmplY3QsIHRyYWNrZXJOYW1lcykge1xuICBfZ2FDb21tYW5kKHRyYWNrZXJOYW1lcywgJ3NlbmQnLCBmaWVsZE9iamVjdCk7XG5cbiAgaWYgKF9kZWJ1Zykge1xuICAgIGxvZygnY2FsbGVkIGdhKFxcJ3NlbmRcXCcsIGZpZWxkT2JqZWN0KTsnKTtcbiAgICBsb2coXCJ3aXRoIGZpZWxkT2JqZWN0OiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZmllbGRPYmplY3QpKSk7XG4gICAgbG9nKFwid2l0aCB0cmFja2VyczogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHRyYWNrZXJOYW1lcykpKTtcbiAgfVxufVxuLyoqXG4gKiBwYWdldmlldzpcbiAqIEJhc2ljIEdBIHBhZ2V2aWV3IHRyYWNraW5nXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGggLSB0aGUgY3VycmVudCBwYWdlIHBhZ2UgZS5nLiAnL2Fib3V0J1xuICogQHBhcmFtIHtBcnJheX0gdHJhY2tlck5hbWVzIC0gKG9wdGlvbmFsKSBhIGxpc3Qgb2YgZXh0cmEgdHJhY2tlcnMgdG8gcnVuIHRoZSBjb21tYW5kIG9uXG4gKiBAcGFyYW0ge1N0cmluZ30gdGl0bGUgLSAob3B0aW9uYWwpIHRoZSBwYWdlIHRpdGxlIGUuIGcuICdNeSBXZWJzaXRlJ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwYWdldmlldyhyYXdQYXRoLCB0cmFja2VyTmFtZXMsIHRpdGxlKSB7XG4gIGlmICghcmF3UGF0aCkge1xuICAgIHdhcm4oJ3BhdGggaXMgcmVxdWlyZWQgaW4gLnBhZ2V2aWV3KCknKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcGF0aCA9IHRyaW0ocmF3UGF0aCk7XG5cbiAgaWYgKHBhdGggPT09ICcnKSB7XG4gICAgd2FybigncGF0aCBjYW5ub3QgYmUgYW4gZW1wdHkgc3RyaW5nIGluIC5wYWdldmlldygpJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGV4dHJhRmllbGRzID0ge307XG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgZXh0cmFGaWVsZHMudGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZ2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICBfZ2FDb21tYW5kKHRyYWNrZXJOYW1lcywgJ3NlbmQnLCBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIGhpdFR5cGU6ICdwYWdldmlldycsXG4gICAgICBwYWdlOiBwYXRoXG4gICAgfSwgZXh0cmFGaWVsZHMpKTtcblxuICAgIGlmIChfZGVidWcpIHtcbiAgICAgIGxvZygnY2FsbGVkIGdhKFxcJ3NlbmRcXCcsIFxcJ3BhZ2V2aWV3XFwnLCBwYXRoKTsnKTtcbiAgICAgIHZhciBleHRyYUxvZyA9ICcnO1xuXG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgZXh0cmFMb2cgPSBcIiBhbmQgdGl0bGU6IFwiLmNvbmNhdCh0aXRsZSk7XG4gICAgICB9XG5cbiAgICAgIGxvZyhcIndpdGggcGF0aDogXCIuY29uY2F0KHBhdGgpLmNvbmNhdChleHRyYUxvZykpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBtb2RhbHZpZXc6XG4gKiBhIHByb3h5IHRvIGJhc2ljIEdBIHBhZ2V2aWV3IHRyYWNraW5nIHRvIGNvbnNpc3RlbnRseSB0cmFja1xuICogbW9kYWwgdmlld3MgdGhhdCBhcmUgYW4gZXF1aXZhbGVudCBVWCB0byBhIHRyYWRpdGlvbmFsIHBhZ2V2aWV3XG4gKiBAcGFyYW0gIHtTdHJpbmd9IG1vZGFsTmFtZSBlLmcuICdhZGQtb3ItZWRpdC1jbHViJ1xuICogQHBhcmFtIHtBcnJheX0gdHJhY2tlck5hbWVzIC0gKG9wdGlvbmFsKSBhIGxpc3Qgb2YgZXh0cmEgdHJhY2tlcnMgdG8gcnVuIHRoZSBjb21tYW5kIG9uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1vZGFsdmlldyhyYXdNb2RhbE5hbWUsIHRyYWNrZXJOYW1lcykge1xuICBpZiAoIXJhd01vZGFsTmFtZSkge1xuICAgIHdhcm4oJ21vZGFsTmFtZSBpcyByZXF1aXJlZCBpbiAubW9kYWx2aWV3KG1vZGFsTmFtZSknKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbW9kYWxOYW1lID0gcmVtb3ZlTGVhZGluZ1NsYXNoKHRyaW0ocmF3TW9kYWxOYW1lKSk7XG5cbiAgaWYgKG1vZGFsTmFtZSA9PT0gJycpIHtcbiAgICB3YXJuKCdtb2RhbE5hbWUgY2Fubm90IGJlIGFuIGVtcHR5IHN0cmluZyBvciBhIHNpbmdsZSAvIGluIC5tb2RhbHZpZXcoKScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZ2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcGF0aCA9IFwiL21vZGFsL1wiLmNvbmNhdChtb2RhbE5hbWUpO1xuXG4gICAgX2dhQ29tbWFuZCh0cmFja2VyTmFtZXMsICdzZW5kJywgJ3BhZ2V2aWV3JywgcGF0aCk7XG5cbiAgICBpZiAoX2RlYnVnKSB7XG4gICAgICBsb2coJ2NhbGxlZCBnYShcXCdzZW5kXFwnLCBcXCdwYWdldmlld1xcJywgcGF0aCk7Jyk7XG4gICAgICBsb2coXCJ3aXRoIHBhdGg6IFwiLmNvbmNhdChwYXRoKSk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIHRpbWluZzpcbiAqIEdBIHRpbWluZ1xuICogQHBhcmFtIGFyZ3MuY2F0ZWdvcnkge1N0cmluZ30gcmVxdWlyZWRcbiAqIEBwYXJhbSBhcmdzLnZhcmlhYmxlIHtTdHJpbmd9IHJlcXVpcmVkXG4gKiBAcGFyYW0gYXJncy52YWx1ZSAge0ludH0gIHJlcXVpcmVkXG4gKiBAcGFyYW0gYXJncy5sYWJlbCAge1N0cmluZ30gcmVxdWlyZWRcbiAqIEBwYXJhbSB7QXJyYXl9IHRyYWNrZXJOYW1lcyAtIChvcHRpb25hbCkgYSBsaXN0IG9mIGV4dHJhIHRyYWNrZXJzIHRvIHJ1biB0aGUgY29tbWFuZCBvblxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1pbmcoKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgIGNhdGVnb3J5ID0gX3JlZi5jYXRlZ29yeSxcbiAgICAgIHZhcmlhYmxlID0gX3JlZi52YXJpYWJsZSxcbiAgICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIGxhYmVsID0gX3JlZi5sYWJlbDtcblxuICB2YXIgdHJhY2tlck5hbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgaWYgKHR5cGVvZiBnYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICghY2F0ZWdvcnkgfHwgIXZhcmlhYmxlIHx8ICF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XG4gICAgICB3YXJuKCdhcmdzLmNhdGVnb3J5LCBhcmdzLnZhcmlhYmxlICcgKyAnQU5EIGFyZ3MudmFsdWUgYXJlIHJlcXVpcmVkIGluIHRpbWluZygpICcgKyAnQU5EIGFyZ3MudmFsdWUgaGFzIHRvIGJlIGEgbnVtYmVyJyk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBSZXF1aXJlZCBGaWVsZHNcblxuXG4gICAgdmFyIGZpZWxkT2JqZWN0ID0ge1xuICAgICAgaGl0VHlwZTogJ3RpbWluZycsXG4gICAgICB0aW1pbmdDYXRlZ29yeTogX2Zvcm1hdChjYXRlZ29yeSksXG4gICAgICB0aW1pbmdWYXI6IF9mb3JtYXQodmFyaWFibGUpLFxuICAgICAgdGltaW5nVmFsdWU6IHZhbHVlXG4gICAgfTtcblxuICAgIGlmIChsYWJlbCkge1xuICAgICAgZmllbGRPYmplY3QudGltaW5nTGFiZWwgPSBfZm9ybWF0KGxhYmVsKTtcbiAgICB9XG5cbiAgICBzZW5kKGZpZWxkT2JqZWN0LCB0cmFja2VyTmFtZXMpO1xuICB9XG59XG4vKipcbiAqIGV2ZW50OlxuICogR0EgZXZlbnQgdHJhY2tpbmdcbiAqIEBwYXJhbSBhcmdzLmNhdGVnb3J5IHtTdHJpbmd9IHJlcXVpcmVkXG4gKiBAcGFyYW0gYXJncy5hY3Rpb24ge1N0cmluZ30gcmVxdWlyZWRcbiAqIEBwYXJhbSBhcmdzLmxhYmVsIHtTdHJpbmd9IG9wdGlvbmFsXG4gKiBAcGFyYW0gYXJncy52YWx1ZSB7SW50fSBvcHRpb25hbFxuICogQHBhcmFtIGFyZ3Mubm9uSW50ZXJhY3Rpb24ge2Jvb2xlYW59IG9wdGlvbmFsXG4gKiBAcGFyYW0gYXJncy50cmFuc3BvcnQge3N0cmluZ30gb3B0aW9uYWxcbiAqIEBwYXJhbSB7QXJyYXl9IHRyYWNrZXJOYW1lcyAtIChvcHRpb25hbCkgYSBsaXN0IG9mIGV4dHJhIHRyYWNrZXJzIHRvIHJ1biB0aGUgY29tbWFuZCBvblxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudCgpIHtcbiAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgIGNhdGVnb3J5ID0gX3JlZjIuY2F0ZWdvcnksXG4gICAgICBhY3Rpb24gPSBfcmVmMi5hY3Rpb24sXG4gICAgICBsYWJlbCA9IF9yZWYyLmxhYmVsLFxuICAgICAgdmFsdWUgPSBfcmVmMi52YWx1ZSxcbiAgICAgIG5vbkludGVyYWN0aW9uID0gX3JlZjIubm9uSW50ZXJhY3Rpb24sXG4gICAgICB0cmFuc3BvcnQgPSBfcmVmMi50cmFuc3BvcnQsXG4gICAgICBhcmdzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYyLCBbXCJjYXRlZ29yeVwiLCBcImFjdGlvblwiLCBcImxhYmVsXCIsIFwidmFsdWVcIiwgXCJub25JbnRlcmFjdGlvblwiLCBcInRyYW5zcG9ydFwiXSk7XG5cbiAgdmFyIHRyYWNrZXJOYW1lcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuXG4gIGlmICh0eXBlb2YgZ2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBTaW1wbGUgVmFsaWRhdGlvblxuICAgIGlmICghY2F0ZWdvcnkgfHwgIWFjdGlvbikge1xuICAgICAgd2FybignYXJncy5jYXRlZ29yeSBBTkQgYXJncy5hY3Rpb24gYXJlIHJlcXVpcmVkIGluIGV2ZW50KCknKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFJlcXVpcmVkIEZpZWxkc1xuXG5cbiAgICB2YXIgZmllbGRPYmplY3QgPSB7XG4gICAgICBoaXRUeXBlOiAnZXZlbnQnLFxuICAgICAgZXZlbnRDYXRlZ29yeTogX2Zvcm1hdChjYXRlZ29yeSksXG4gICAgICBldmVudEFjdGlvbjogX2Zvcm1hdChhY3Rpb24pXG4gICAgfTsgLy8gT3B0aW9uYWwgRmllbGRzXG5cbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIGZpZWxkT2JqZWN0LmV2ZW50TGFiZWwgPSBfZm9ybWF0KGxhYmVsKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgd2FybignRXhwZWN0ZWQgYGFyZ3MudmFsdWVgIGFyZyB0byBiZSBhIE51bWJlci4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkT2JqZWN0LmV2ZW50VmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5vbkludGVyYWN0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHR5cGVvZiBub25JbnRlcmFjdGlvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHdhcm4oJ2BhcmdzLm5vbkludGVyYWN0aW9uYCBtdXN0IGJlIGEgYm9vbGVhbi4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkT2JqZWN0Lm5vbkludGVyYWN0aW9uID0gbm9uSW50ZXJhY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0cmFuc3BvcnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodHlwZW9mIHRyYW5zcG9ydCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgd2FybignYGFyZ3MudHJhbnNwb3J0YCBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKFsnYmVhY29uJywgJ3hocicsICdpbWFnZSddLmluZGV4T2YodHJhbnNwb3J0KSA9PT0gLTEpIHtcbiAgICAgICAgICB3YXJuKCdgYXJncy50cmFuc3BvcnRgIG11c3QgYmUgZWl0aGVyIG9uZSBvZiB0aGVzZSB2YWx1ZXM6IGBiZWFjb25gLCBgeGhyYCBvciBgaW1hZ2VgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZE9iamVjdC50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoYXJncykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBrZXkuc3Vic3RyKDAsICdkaW1lbnNpb24nLmxlbmd0aCkgPT09ICdkaW1lbnNpb24nO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZmllbGRPYmplY3Rba2V5XSA9IGFyZ3Nba2V5XTtcbiAgICB9KTtcbiAgICBPYmplY3Qua2V5cyhhcmdzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGtleS5zdWJzdHIoMCwgJ21ldHJpYycubGVuZ3RoKSA9PT0gJ21ldHJpYyc7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBmaWVsZE9iamVjdFtrZXldID0gYXJnc1trZXldO1xuICAgIH0pOyAvLyBTZW5kIHRvIEdBXG5cbiAgICBzZW5kKGZpZWxkT2JqZWN0LCB0cmFja2VyTmFtZXMpO1xuICB9XG59XG4vKipcbiAqIGV4Y2VwdGlvbjpcbiAqIEdBIGV4Y2VwdGlvbiB0cmFja2luZ1xuICogQHBhcmFtIGFyZ3MuZGVzY3JpcHRpb24ge1N0cmluZ30gb3B0aW9uYWxcbiAqIEBwYXJhbSBhcmdzLmZhdGFsIHtib29sZWFufSBvcHRpb25hbFxuICogQHBhcmFtIHtBcnJheX0gdHJhY2tlck5hbWVzIC0gKG9wdGlvbmFsKSBhIGxpc3Qgb2YgZXh0cmEgdHJhY2tlcnMgdG8gcnVuIHRoZSBjb21tYW5kIG9uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4Y2VwdGlvbihfcmVmMywgdHJhY2tlck5hbWVzKSB7XG4gIHZhciBkZXNjcmlwdGlvbiA9IF9yZWYzLmRlc2NyaXB0aW9uLFxuICAgICAgZmF0YWwgPSBfcmVmMy5mYXRhbDtcblxuICBpZiAodHlwZW9mIGdhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gUmVxdWlyZWQgRmllbGRzXG4gICAgdmFyIGZpZWxkT2JqZWN0ID0ge1xuICAgICAgaGl0VHlwZTogJ2V4Y2VwdGlvbidcbiAgICB9OyAvLyBPcHRpb25hbCBGaWVsZHNcblxuICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgZmllbGRPYmplY3QuZXhEZXNjcmlwdGlvbiA9IF9mb3JtYXQoZGVzY3JpcHRpb24pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZmF0YWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodHlwZW9mIGZhdGFsICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgd2FybignYGFyZ3MuZmF0YWxgIG11c3QgYmUgYSBib29sZWFuLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGRPYmplY3QuZXhGYXRhbCA9IGZhdGFsO1xuICAgICAgfVxuICAgIH0gLy8gU2VuZCB0byBHQVxuXG5cbiAgICBzZW5kKGZpZWxkT2JqZWN0LCB0cmFja2VyTmFtZXMpO1xuICB9XG59XG5leHBvcnQgdmFyIHBsdWdpbiA9IHtcbiAgLyoqXG4gICAqIHJlcXVpcmU6XG4gICAqIEdBIHJlcXVpcmVzIGEgcGx1Z2luXG4gICAqIEBwYXJhbSBuYW1lIHtTdHJpbmd9IGUuZy4gJ2Vjb21tZXJjZScgb3IgJ215cGx1Z2luJ1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7T2JqZWN0fSBvcHRpb25hbCBlLmcge3BhdGg6ICcvbG9nJywgZGVidWc6IHRydWV9XG4gICAqIEBwYXJhbSB0cmFja2VyTmFtZSB7U3RyaW5nfSBvcHRpb25hbCBlLmcgJ3RyYWNrZXJOYW1lJ1xuICAgKi9cbiAgcmVxdWlyZTogZnVuY3Rpb24gcmVxdWlyZShyYXdOYW1lLCBvcHRpb25zLCB0cmFja2VyTmFtZSkge1xuICAgIGlmICh0eXBlb2YgZ2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFJlcXVpcmVkIEZpZWxkc1xuICAgICAgaWYgKCFyYXdOYW1lKSB7XG4gICAgICAgIHdhcm4oJ2BuYW1lYCBpcyByZXF1aXJlZCBpbiAucmVxdWlyZSgpJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5hbWUgPSB0cmltKHJhd05hbWUpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gJycpIHtcbiAgICAgICAgd2FybignYG5hbWVgIGNhbm5vdCBiZSBhbiBlbXB0eSBzdHJpbmcgaW4gLnJlcXVpcmUoKScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByZXF1aXJlU3RyaW5nID0gdHJhY2tlck5hbWUgPyBcIlwiLmNvbmNhdCh0cmFja2VyTmFtZSwgXCIucmVxdWlyZVwiKSA6ICdyZXF1aXJlJzsgLy8gT3B0aW9uYWwgRmllbGRzXG5cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChfdHlwZW9mKG9wdGlvbnMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHdhcm4oJ0V4cGVjdGVkIGBvcHRpb25zYCBhcmcgdG8gYmUgYW4gT2JqZWN0Jyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdhcm4oJ0VtcHR5IGBvcHRpb25zYCBnaXZlbiB0byAucmVxdWlyZSgpJyk7XG4gICAgICAgIH1cblxuICAgICAgICBnYShyZXF1aXJlU3RyaW5nLCBuYW1lLCBvcHRpb25zKTtcblxuICAgICAgICBpZiAoX2RlYnVnKSB7XG4gICAgICAgICAgbG9nKFwiY2FsbGVkIGdhKCdyZXF1aXJlJywgJ1wiLmNvbmNhdChuYW1lLCBcIicsIFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkob3B0aW9ucykpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2EocmVxdWlyZVN0cmluZywgbmFtZSk7XG5cbiAgICAgICAgaWYgKF9kZWJ1Zykge1xuICAgICAgICAgIGxvZyhcImNhbGxlZCBnYSgncmVxdWlyZScsICdcIi5jb25jYXQobmFtZSwgXCInKTtcIikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBleGVjdXRlOlxuICAgKiBHQSBleGVjdXRlIGFjdGlvbiBmb3IgcGx1Z2luXG4gICAqIFRha2VzIHZhcmlhYmxlIG51bWJlciBvZiBhcmd1bWVudHNcbiAgICogQHBhcmFtIHBsdWdpbk5hbWUge1N0cmluZ30gZS5nLiAnZWNvbW1lcmNlJyBvciAnbXlwbHVnaW4nXG4gICAqIEBwYXJhbSBhY3Rpb24ge1N0cmluZ30gZS5nLiAnYWRkSXRlbScgb3IgJ215Q3VzdG9tQWN0aW9uJ1xuICAgKiBAcGFyYW0gYWN0aW9uVHlwZSB7U3RyaW5nfSBvcHRpb25hbCBlLmcuICdkZXRhaWwnXG4gICAqIEBwYXJhbSBwYXlsb2FkIHtPYmplY3R9IG9wdGlvbmFsIGUuZyB7IGlkOiAnMXg1ZScsIG5hbWUgOiAnTXkgcHJvZHVjdCB0byB0cmFjaycgfVxuICAgKi9cbiAgZXhlY3V0ZTogZnVuY3Rpb24gZXhlY3V0ZShwbHVnaW5OYW1lLCBhY3Rpb24pIHtcbiAgICB2YXIgcGF5bG9hZDtcbiAgICB2YXIgYWN0aW9uVHlwZTtcblxuICAgIGlmICgoYXJndW1lbnRzLmxlbmd0aCA8PSAyID8gMCA6IGFyZ3VtZW50cy5sZW5ndGggLSAyKSA9PT0gMSkge1xuICAgICAgcGF5bG9hZCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1syXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aW9uVHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1syXTtcbiAgICAgIHBheWxvYWQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbM107XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBnYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBwbHVnaW5OYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICB3YXJuKCdFeHBlY3RlZCBgcGx1Z2luTmFtZWAgYXJnIHRvIGJlIGEgU3RyaW5nLicpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICB3YXJuKCdFeHBlY3RlZCBgYWN0aW9uYCBhcmcgdG8gYmUgYSBTdHJpbmcuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY29tbWFuZCA9IFwiXCIuY29uY2F0KHBsdWdpbk5hbWUsIFwiOlwiKS5jb25jYXQoYWN0aW9uKTtcbiAgICAgICAgcGF5bG9hZCA9IHBheWxvYWQgfHwgbnVsbDtcblxuICAgICAgICBpZiAoYWN0aW9uVHlwZSAmJiBwYXlsb2FkKSB7XG4gICAgICAgICAgZ2EoY29tbWFuZCwgYWN0aW9uVHlwZSwgcGF5bG9hZCk7XG5cbiAgICAgICAgICBpZiAoX2RlYnVnKSB7XG4gICAgICAgICAgICBsb2coXCJjYWxsZWQgZ2EoJ1wiLmNvbmNhdChjb21tYW5kLCBcIicpO1wiKSk7XG4gICAgICAgICAgICBsb2coXCJhY3Rpb25UeXBlOiBcXFwiXCIuY29uY2F0KGFjdGlvblR5cGUsIFwiXFxcIiB3aXRoIHBheWxvYWQ6IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGF5bG9hZCkge1xuICAgICAgICAgIGdhKGNvbW1hbmQsIHBheWxvYWQpO1xuXG4gICAgICAgICAgaWYgKF9kZWJ1Zykge1xuICAgICAgICAgICAgbG9nKFwiY2FsbGVkIGdhKCdcIi5jb25jYXQoY29tbWFuZCwgXCInKTtcIikpO1xuICAgICAgICAgICAgbG9nKFwid2l0aCBwYXlsb2FkOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2EoY29tbWFuZCk7XG5cbiAgICAgICAgICBpZiAoX2RlYnVnKSB7XG4gICAgICAgICAgICBsb2coXCJjYWxsZWQgZ2EoJ1wiLmNvbmNhdChjb21tYW5kLCBcIicpO1wiKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuLyoqXG4gKiBvdXRib3VuZExpbms6XG4gKiBHQSBvdXRib3VuZExpbmsgdHJhY2tpbmdcbiAqIEBwYXJhbSBhcmdzLmxhYmVsIHtTdHJpbmd9IGUuZy4gdXJsLCBvciAnQ3JlYXRlIGFuIEFjY291bnQnXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoaXRDYWxsYmFjayAtIENhbGxlZCBhZnRlciBwcm9jZXNzaW5nIGEgaGl0LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBvdXRib3VuZExpbmsoYXJncywgaGl0Q2FsbGJhY2ssIHRyYWNrZXJOYW1lcykge1xuICBpZiAodHlwZW9mIGhpdENhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgd2FybignaGl0Q2FsbGJhY2sgZnVuY3Rpb24gaXMgcmVxdWlyZWQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIGdhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gU2ltcGxlIFZhbGlkYXRpb25cbiAgICBpZiAoIWFyZ3MgfHwgIWFyZ3MubGFiZWwpIHtcbiAgICAgIHdhcm4oJ2FyZ3MubGFiZWwgaXMgcmVxdWlyZWQgaW4gb3V0Ym91bmRMaW5rKCknKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFJlcXVpcmVkIEZpZWxkc1xuXG5cbiAgICB2YXIgZmllbGRPYmplY3QgPSB7XG4gICAgICBoaXRUeXBlOiAnZXZlbnQnLFxuICAgICAgZXZlbnRDYXRlZ29yeTogJ091dGJvdW5kJyxcbiAgICAgIGV2ZW50QWN0aW9uOiAnQ2xpY2snLFxuICAgICAgZXZlbnRMYWJlbDogX2Zvcm1hdChhcmdzLmxhYmVsKVxuICAgIH07XG4gICAgdmFyIHNhZmV0eUNhbGxiYWNrQ2FsbGVkID0gZmFsc2U7XG5cbiAgICB2YXIgc2FmZXR5Q2FsbGJhY2sgPSBmdW5jdGlvbiBzYWZldHlDYWxsYmFjaygpIHtcbiAgICAgIC8vIFRoaXMgcHJldmVudHMgYSBkZWxheWVkIHJlc3BvbnNlIGZyb20gR0FcbiAgICAgIC8vIGNhdXNpbmcgaGl0Q2FsbGJhY2sgZnJvbSBiZWluZyBmaXJlZCB0d2ljZVxuICAgICAgc2FmZXR5Q2FsbGJhY2tDYWxsZWQgPSB0cnVlO1xuICAgICAgaGl0Q2FsbGJhY2soKTtcbiAgICB9OyAvLyBVc2luZyBhIHRpbWVvdXQgdG8gZW5zdXJlIHRoZSBleGVjdXRpb24gb2YgY3JpdGljYWwgYXBwbGljYXRpb24gY29kZVxuICAgIC8vIGluIHRoZSBjYXNlIHdoZW4gdGhlIEdBIHNlcnZlciBtaWdodCBiZSBkb3duXG4gICAgLy8gb3IgYW4gYWQgYmxvY2tlciBwcmV2ZW50cyBzZW5kaW5nIHRoZSBkYXRhXG4gICAgLy8gcmVnaXN0ZXIgc2FmZXR5IG5ldCB0aW1lb3V0OlxuXG5cbiAgICB2YXIgdCA9IHNldFRpbWVvdXQoc2FmZXR5Q2FsbGJhY2ssIDI1MCk7XG5cbiAgICB2YXIgY2xlYXJhYmxlQ2FsbGJhY2tGb3JHQSA9IGZ1bmN0aW9uIGNsZWFyYWJsZUNhbGxiYWNrRm9yR0EoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodCk7XG5cbiAgICAgIGlmICghc2FmZXR5Q2FsbGJhY2tDYWxsZWQpIHtcbiAgICAgICAgaGl0Q2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmllbGRPYmplY3QuaGl0Q2FsbGJhY2sgPSBjbGVhcmFibGVDYWxsYmFja0ZvckdBOyAvLyBTZW5kIHRvIEdBXG5cbiAgICBzZW5kKGZpZWxkT2JqZWN0LCB0cmFja2VyTmFtZXMpO1xuICB9IGVsc2Uge1xuICAgIC8vIGlmIGdhIGlzIG5vdCBkZWZpbmVkLCByZXR1cm4gdGhlIGNhbGxiYWNrIHNvIHRoZSBhcHBsaWNhdGlvblxuICAgIC8vIGNvbnRpbnVlcyB0byB3b3JrIGFzIGV4cGVjdGVkXG4gICAgc2V0VGltZW91dChoaXRDYWxsYmFjaywgMCk7XG4gIH1cbn1cbmV4cG9ydCB2YXIgdGVzdE1vZGVBUEkgPSBUZXN0TW9kZUFQSTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdGlhbGl6ZTogaW5pdGlhbGl6ZSxcbiAgZ2E6IGdhLFxuICBzZXQ6IHNldCxcbiAgc2VuZDogc2VuZCxcbiAgcGFnZXZpZXc6IHBhZ2V2aWV3LFxuICBtb2RhbHZpZXc6IG1vZGFsdmlldyxcbiAgdGltaW5nOiB0aW1pbmcsXG4gIGV2ZW50OiBldmVudCxcbiAgZXhjZXB0aW9uOiBleGNlcHRpb24sXG4gIHBsdWdpbjogcGx1Z2luLFxuICBvdXRib3VuZExpbms6IG91dGJvdW5kTGluayxcbiAgdGVzdE1vZGVBUEk6IFRlc3RNb2RlQVBJXG59OyIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCBVbmJvdW5kT3V0Ym91bmRMaW5rIGZyb20gJy4vY29tcG9uZW50cy9PdXRib3VuZExpbmsnO1xuaW1wb3J0ICogYXMgRGVmYXVsdHMgZnJvbSAnLi9jb3JlJztcbmV4cG9ydCB2YXIgaW5pdGlhbGl6ZSA9IERlZmF1bHRzLmluaXRpYWxpemU7XG5leHBvcnQgdmFyIGdhID0gRGVmYXVsdHMuZ2E7XG5leHBvcnQgdmFyIHNldCA9IERlZmF1bHRzLnNldDtcbmV4cG9ydCB2YXIgc2VuZCA9IERlZmF1bHRzLnNlbmQ7XG5leHBvcnQgdmFyIHBhZ2V2aWV3ID0gRGVmYXVsdHMucGFnZXZpZXc7XG5leHBvcnQgdmFyIG1vZGFsdmlldyA9IERlZmF1bHRzLm1vZGFsdmlldztcbmV4cG9ydCB2YXIgdGltaW5nID0gRGVmYXVsdHMudGltaW5nO1xuZXhwb3J0IHZhciBldmVudCA9IERlZmF1bHRzLmV2ZW50O1xuZXhwb3J0IHZhciBleGNlcHRpb24gPSBEZWZhdWx0cy5leGNlcHRpb247XG5leHBvcnQgdmFyIHBsdWdpbiA9IERlZmF1bHRzLnBsdWdpbjtcbmV4cG9ydCB2YXIgb3V0Ym91bmRMaW5rID0gRGVmYXVsdHMub3V0Ym91bmRMaW5rO1xuZXhwb3J0IHZhciB0ZXN0TW9kZUFQSSA9IERlZmF1bHRzLnRlc3RNb2RlQVBJO1xuVW5ib3VuZE91dGJvdW5kTGluay5vcmlnVHJhY2tMaW5rID0gVW5ib3VuZE91dGJvdW5kTGluay50cmFja0xpbms7XG5VbmJvdW5kT3V0Ym91bmRMaW5rLnRyYWNrTGluayA9IERlZmF1bHRzLm91dGJvdW5kTGluaztcbmV4cG9ydCB2YXIgT3V0Ym91bmRMaW5rID0gVW5ib3VuZE91dGJvdW5kTGluaztcbmV4cG9ydCBkZWZhdWx0IF9vYmplY3RTcHJlYWQoe30sIERlZmF1bHRzLCB7XG4gIE91dGJvdW5kTGluazogT3V0Ym91bmRMaW5rXG59KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2cocykge1xuICBjb25zb2xlLmluZm8oJ1tyZWFjdC1nYV0nLCBzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YXJuKHMpIHtcbiAgY29uc29sZS53YXJuKCdbcmVhY3QtZ2FdJywgcyk7XG59IiwiaW1wb3J0IG1pZ2h0QmVFbWFpbCBmcm9tICcuL21pZ2h0QmVFbWFpbCc7XG5pbXBvcnQgdG9UaXRsZUNhc2UgZnJvbSAnLi90b1RpdGxlQ2FzZSc7XG5pbXBvcnQgd2FybiBmcm9tICcuL2NvbnNvbGUvd2Fybic7XG52YXIgcmVkYWN0ZWQgPSAnUkVEQUNURUQgKFBvdGVudGlhbCBFbWFpbCBBZGRyZXNzKSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQocywgdGl0bGVDYXNlKSB7XG4gIGlmIChtaWdodEJlRW1haWwocykpIHtcbiAgICB3YXJuKCdUaGlzIGFyZyBsb29rcyBsaWtlIGFuIGVtYWlsIGFkZHJlc3MsIHJlZGFjdGluZy4nKTtcbiAgICByZXR1cm4gcmVkYWN0ZWQ7XG4gIH1cblxuICBpZiAodGl0bGVDYXNlKSB7XG4gICAgcmV0dXJuIHRvVGl0bGVDYXNlKHMpO1xuICB9XG5cbiAgcmV0dXJuIHM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIGdhQWRkcmVzcyA9ICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2FBZGRyZXNzKSB7XG4gICAgZ2FBZGRyZXNzID0gb3B0aW9ucy5nYUFkZHJlc3M7XG4gIH0gZWxzZSBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnKSB7XG4gICAgZ2FBZGRyZXNzID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2FuYWx5dGljc19kZWJ1Zy5qcyc7XG4gIH0gLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlICovXG5cblxuICAoZnVuY3Rpb24gKGksIHMsIG8sIGcsIHIsIGEsIG0pIHtcbiAgICBpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXSA9IHI7XG4gICAgaVtyXSA9IGlbcl0gfHwgZnVuY3Rpb24gKCkge1xuICAgICAgKGlbcl0ucSA9IGlbcl0ucSB8fCBbXSkucHVzaChhcmd1bWVudHMpO1xuICAgIH0sIGlbcl0ubCA9IDEgKiBuZXcgRGF0ZSgpO1xuICAgIGEgPSBzLmNyZWF0ZUVsZW1lbnQobyksIG0gPSBzLmdldEVsZW1lbnRzQnlUYWdOYW1lKG8pWzBdO1xuICAgIGEuYXN5bmMgPSAxO1xuICAgIGEuc3JjID0gZztcbiAgICBtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIG0pO1xuICB9KSh3aW5kb3csIGRvY3VtZW50LCAnc2NyaXB0JywgZ2FBZGRyZXNzLCAnZ2EnKTtcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG59IiwiLy8gU2VlIGlmIHMgY291bGQgYmUgYW4gZW1haWwgYWRkcmVzcy4gV2UgZG9uJ3Qgd2FudCB0byBzZW5kIHBlcnNvbmFsIGRhdGEgbGlrZSBlbWFpbC5cbi8vIGh0dHBzOi8vc3VwcG9ydC5nb29nbGUuY29tL2FuYWx5dGljcy9hbnN3ZXIvMjc5NTk4Mz9obD1lblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWlnaHRCZUVtYWlsKHMpIHtcbiAgLy8gVGhlcmUncyBubyBwb2ludCB0cnlpbmcgdG8gdmFsaWRhdGUgcmZjODIyIGZ1bGx5LCBqdXN0IGxvb2sgZm9yIC4uLkAuLi5cbiAgcmV0dXJuIHR5cGVvZiBzID09PSAnc3RyaW5nJyAmJiBzLmluZGV4T2YoJ0AnKSAhPT0gLTE7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlTGVhZGluZ1NsYXNoKHN0cmluZykge1xuICBpZiAoc3RyaW5nLnN1YnN0cmluZygwLCAxKSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcoMSk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufSIsImV4cG9ydCB2YXIgZ2FDYWxscyA9IFtdO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjYWxsczogZ2FDYWxscyxcbiAgZ2E6IGZ1bmN0aW9uIGdhKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBnYUNhbGxzLnB1c2goW10uY29uY2F0KGFyZ3MpKTtcbiAgfSxcbiAgcmVzZXRDYWxsczogZnVuY3Rpb24gcmVzZXRDYWxscygpIHtcbiAgICBnYUNhbGxzLmxlbmd0aCA9IDA7XG4gIH1cbn07IiwiLyoqXG4gKiBUbyBUaXRsZSBDYXNlIDIuMSAtIGh0dHA6Ly9pbmRpdmlkZWQuY29tL2NvZGUvdG8tdGl0bGUtY2FzZS9cbiAqIENvcHlyaWdodCAyMDA4LTIwMTMgRGF2aWQgR291Y2guIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb3VjaC90by10aXRsZS1jYXNlXG4gKi9cbmltcG9ydCB0cmltIGZyb20gJy4vdHJpbSc7XG52YXIgc21hbGxXb3JkcyA9IC9eKGF8YW58YW5kfGFzfGF0fGJ1dHxieXxlbnxmb3J8aWZ8aW58bm9yfG9mfG9ufG9yfHBlcnx0aGV8dG98dnM/XFwuP3x2aWEpJC9pO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiB0cmltKHN0cmluZykucmVwbGFjZSgvW0EtWmEtejAtOVxcdTAwQzAtXFx1MDBGRl0rW15cXHMtXSovZywgZnVuY3Rpb24gKG1hdGNoLCBpbmRleCwgdGl0bGUpIHtcbiAgICBpZiAoaW5kZXggPiAwICYmIGluZGV4ICsgbWF0Y2gubGVuZ3RoICE9PSB0aXRsZS5sZW5ndGggJiYgbWF0Y2guc2VhcmNoKHNtYWxsV29yZHMpID4gLTEgJiYgdGl0bGUuY2hhckF0KGluZGV4IC0gMikgIT09ICc6JyAmJiAodGl0bGUuY2hhckF0KGluZGV4ICsgbWF0Y2gubGVuZ3RoKSAhPT0gJy0nIHx8IHRpdGxlLmNoYXJBdChpbmRleCAtIDEpID09PSAnLScpICYmIHRpdGxlLmNoYXJBdChpbmRleCAtIDEpLnNlYXJjaCgvW15cXHMtXS8pIDwgMCkge1xuICAgICAgcmV0dXJuIG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoLnN1YnN0cigxKS5zZWFyY2goL1tBLVpdfFxcLi4vKSA+IC0xKSB7XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbWF0Y2guc3Vic3RyKDEpO1xuICB9KTtcbn0iLCIvLyBHQSBzdHJpbmdzIG5lZWQgdG8gaGF2ZSBsZWFkaW5nL3RyYWlsaW5nIHdoaXRlc3BhY2UgdHJpbW1lZCwgYW5kIG5vdCBhbGxcbi8vIGJyb3dzZXJzIGhhdmUgU3RyaW5nLnByb3RvdG95cGUudHJpbSgpLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJpbShzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn0iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuaW1wb3J0IEhlcm9TZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvSGVyb1NlY3Rpb24nXHJcbmltcG9ydCBTZWN0aW9uQnJlYWsgZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uQnJlYWsnXHJcbmltcG9ydCBTZXJ2aWNlc1NlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZXZpY2VzU2VjdGlvbidcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcidcclxuaW1wb3J0IFdvcmtTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvV29ya1NlY3Rpb24nXHJcbmltcG9ydCBSZXZpZXdzU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1Jldmlld3NTZWN0aW9uJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyLmpzeCdcclxuaW1wb3J0IFJlYWN0R0EgZnJvbSBcInJlYWN0LWdhXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZVJlYWN0R0EuaW5pdGlhbGl6ZShgXHJcbiAgICAgICBcclxuPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPVVBLTE0MDIyODA2OS03XCI+PC9zY3JpcHQ+XHJcbjxzY3JpcHQ+XHJcbiAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxyXG4gIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcblxyXG4gIGd0YWcoJ2NvbmZpZycsICdVQS0xNDAyMjgwNjktNycpO1xyXG48L3NjcmlwdD5gXHJcbik7XHJcblxyXG4gICAgfSwgW10pXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgIDxOYXZiYXIgLz5cclxuICAgPExheW91dD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPlNob3BpZnkgUGFydG5lciB8IERldmVsb3BlciB8IERlc2lnbmVyIC0gSG9tZSBQYWdlPC90aXRsZT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxIZXJvU2VjdGlvbiAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taGVpZ2h0XCI+XHJcbiAgICA8U2VjdGlvbkJyZWFrIG5hbWU9XCJTZXJ2aWNlc1wiLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPExheW91dD5cclxuICAgIDxTZXJ2aWNlc1NlY3Rpb24gLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICAgPFNlY3Rpb25CcmVhayBuYW1lPVwiV29ya1wiLz5cclxuICAgIDxXb3JrU2VjdGlvbiAvPlxyXG4gICAgPFNlY3Rpb25CcmVhayBuYW1lPVwiUmV2aWV3c1wiLz5cclxuICAgIDxSZXZpZXdzU2VjdGlvbiAvPlxyXG4gICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbik7XHJcbiAgICB9XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==