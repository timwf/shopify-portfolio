webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/WorkSection.jsx":
/*!************************************!*\
  !*** ./components/WorkSection.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var WorkSection = function WorkSection() {
  return hei;
};

_c = WorkSection;
/* harmony default export */ __webpack_exports__["default"] = (WorkSection);

var _c;

$RefreshReg$(_c, "WorkSection");

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
var _this = undefined,
    _jsxFileName = "C:\\Users\\Tim\\Desktop\\React_projects\\shopify-portfolio\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Index = function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "Shopify Partner | Developer | Designer - Home Page")), __jsx(_components_HeroSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "hero-height",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_components_SectionBreak__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_components_SevicesSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  })), __jsx(_components_SectionBreak__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Work",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }), __jsx(_components_WorkSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmtTZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJXb3JrU2VjdGlvbiIsImhlaSIsIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFBQSxrREFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QixTQUNJQyxHQURKO0FBSUgsQ0FMRDs7S0FBTUQsVztBQU9TQSwwRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFNBQ1YsbUVBQ0MsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFRCxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBEQURKLENBREwsRUFJSyxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKTCxDQUZDLEVBUUE7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxnRUFBRDtBQUFjLFFBQUksRUFBQyxVQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FSQSxFQVdBLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBWEEsRUFjQSxNQUFDLGdFQUFEO0FBQWMsUUFBSSxFQUFDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkQSxFQWVBLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZBLENBRFU7QUFBQSxDQUFkOztLQUFNQSxLO0FBb0JTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuODRlNDllZDc0ODhlYmQ4YzlhOGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBXb3JrU2VjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICBoZWlcclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtTZWN0aW9uIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXHJcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uJ1xyXG5pbXBvcnQgU2VjdGlvbkJyZWFrIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbkJyZWFrJ1xyXG5pbXBvcnQgU2VydmljZXNTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvU2V2aWNlc1NlY3Rpb24nXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXHJcbmltcG9ydCBXb3JrU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1dvcmtTZWN0aW9uJ1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiAoXHJcbiAgICA8PlxyXG4gICAgIDxOYXZiYXIgLz5cclxuICAgPExheW91dD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPlNob3BpZnkgUGFydG5lciB8IERldmVsb3BlciB8IERlc2lnbmVyIC0gSG9tZSBQYWdlPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEhlcm9TZWN0aW9uIC8+XHJcbiAgICA8L0xheW91dD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1oZWlnaHRcIj5cclxuICAgIDxTZWN0aW9uQnJlYWsgbmFtZT1cIlNlcnZpY2VzXCIvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8TGF5b3V0PlxyXG4gICAgPFNlcnZpY2VzU2VjdGlvbiAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgICA8U2VjdGlvbkJyZWFrIG5hbWU9XCJXb3JrXCIvPlxyXG4gICAgPFdvcmtTZWN0aW9uIC8+XHJcbiAgICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==