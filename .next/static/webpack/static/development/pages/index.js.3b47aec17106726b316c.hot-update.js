webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/SevicesSection.jsx":
/*!***************************************!*\
  !*** ./components/SevicesSection.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ServiceCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceCard */ "./components/ServiceCard.jsx");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Tim\\Desktop\\React_projects\\shopify-portfolio\\components\\SevicesSection.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ServicesSection = function ServicesSection() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inview = _useState[0],
      setInview = _useState[1];

  console.log(inview);
  var animatedStyle = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    marginTop: inview ? '0px' : '150px',
    delay: 0
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var observer = new IntersectionObserver(function (entries) {
      console.log('working');

      if (entries[0].isIntersecting === true) {
        console.log(inview);
        setInview(true);
      }
    }, {
      threshold: [0]
    });
    observer.observe(document.querySelector(".service-section-container"));
    return function () {};
  }, []);
  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    style: inview ? animatedStyle : null,
    className: "service-section-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: "/theme-changes-services.png",
    header: "Custom Themes and Changes",
    content: "Need a new customizable section? Not happy with your navigation.  Want to stand out and create a whole new design? ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx(_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: "/starter-shop-service.png",
    header: "Complete Starter Shops",
    content: "Get selling within a week! A complete starter shop can cost as little as $800 and will include everything you need to start selling.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx(_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: "/seo-op-service.png",
    header: "SEO Optimisation",
    content: "SEO is vital for getting clients to tour store.  I use the latest tech and bblsad asvjn adf jnf jn dfjnda jnada.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }));
};

_s(ServicesSection, "iS1E3FgYjD3VGOiQLwWBETSod/Q=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"]];
});

_c = ServicesSection;
/* harmony default export */ __webpack_exports__["default"] = (ServicesSection);

var _c;

$RefreshReg$(_c, "ServicesSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NldmljZXNTZWN0aW9uLmpzeCJdLCJuYW1lcyI6WyJTZXJ2aWNlc1NlY3Rpb24iLCJ1c2VTdGF0ZSIsImludmlldyIsInNldEludmlldyIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlZFN0eWxlIiwidXNlU3ByaW5nIiwibWFyZ2luVG9wIiwiZGVsYXkiLCJ1c2VFZmZlY3QiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUdBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEtBQUQsQ0FEVjtBQUFBLE1BQ25CQyxNQURtQjtBQUFBLE1BQ1hDLFNBRFc7O0FBRTFCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWjtBQUdBLE1BQU1JLGFBQWEsR0FBR0MsOERBQVMsQ0FBQztBQUM1QkMsYUFBUyxFQUFFTixNQUFNLEdBQUcsS0FBSCxHQUFXLE9BREE7QUFFNUJPLFNBQUssRUFBRTtBQUZxQixHQUFELENBQS9CO0FBS0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFTQyxPQUFULEVBQWtCO0FBQ3REVCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaOztBQUNBLFVBQUdRLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsY0FBWCxLQUE4QixJQUFqQyxFQUFzQztBQUNsQ1YsZUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFDQUMsaUJBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSDtBQUNKLEtBTmMsRUFNWjtBQUFFWSxlQUFTLEVBQUUsQ0FBQyxDQUFEO0FBQWIsS0FOWSxDQUFmO0FBT0FKLFlBQVEsQ0FBQ0ssT0FBVCxDQUFpQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLDRCQUF2QixDQUFqQjtBQUNBLFdBQU8sWUFBTSxDQUNaLENBREQ7QUFFSCxHQVhRLEVBV04sRUFYTSxDQUFUO0FBZUEsU0FDSSxNQUFDLHFEQUFELENBQVUsR0FBVjtBQUFjLFNBQUssRUFBRWhCLE1BQU0sR0FBR0ksYUFBSCxHQUFrQixJQUE3QztBQUFtRCxhQUFTLEVBQUMsMkJBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFEO0FBQ0ksU0FBSyxFQUFFLDZCQURYO0FBRUksVUFBTSxFQUFDLDJCQUZYO0FBR0ksV0FBTyxFQUFDLHFIQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQU1JLE1BQUMsb0RBQUQ7QUFDSSxTQUFLLEVBQUUsMkJBRFg7QUFFSSxVQUFNLEVBQUMsd0JBRlg7QUFHSSxXQUFPLEVBQUMsc0lBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBV0ksTUFBQyxvREFBRDtBQUNJLFNBQUssRUFBRSxxQkFEWDtBQUVJLFVBQU0sRUFBQyxrQkFGWDtBQUdJLFdBQU8sRUFBQyxrSEFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEosQ0FESjtBQW9CSCxDQTdDRDs7R0FBTU4sZTtVQUtvQk8sc0Q7OztLQUxwQlAsZTtBQStDU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjNiNDdhZWMxNzEwNjcyNmIzMTZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IFNlcnZpY2VzQ2FyZCBmcm9tIFwiLi9TZXJ2aWNlQ2FyZFwiXHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XHJcblxyXG5cclxuY29uc3QgU2VydmljZXNTZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2ludmlldywgc2V0SW52aWV3XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc29sZS5sb2coaW52aWV3KTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGFuaW1hdGVkU3R5bGUgPSB1c2VTcHJpbmcoe1xyXG4gICAgICAgIG1hcmdpblRvcDogaW52aWV3ID8gJzBweCcgOiAnMTUwcHgnLFxyXG4gICAgICAgIGRlbGF5OiAwXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dvcmtpbmcnKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZW50cmllc1swXS5pc0ludGVyc2VjdGluZyA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbnZpZXcpOyAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0SW52aWV3KHRydWUpICBcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICBcclxuICAgICAgICB9LCB7IHRocmVzaG9sZDogWzBdIH0pO1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2aWNlLXNlY3Rpb24tY29udGFpbmVyXCIpKTsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e2ludmlldyA/IGFuaW1hdGVkU3R5bGU6IG51bGx9IGNsYXNzTmFtZT1cInNlcnZpY2Utc2VjdGlvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPFNlcnZpY2VzQ2FyZCBcclxuICAgICAgICAgICAgICAgIGltYWdlPXtcIi90aGVtZS1jaGFuZ2VzLXNlcnZpY2VzLnBuZ1wifSBcclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIkN1c3RvbSBUaGVtZXMgYW5kIENoYW5nZXNcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIk5lZWQgYSBuZXcgY3VzdG9taXphYmxlIHNlY3Rpb24/IE5vdCBoYXBweSB3aXRoIHlvdXIgbmF2aWdhdGlvbi4gIFdhbnQgdG8gc3RhbmQgb3V0IGFuZCBjcmVhdGUgYSB3aG9sZSBuZXcgZGVzaWduPyBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlcnZpY2VzQ2FyZCBcclxuICAgICAgICAgICAgICAgIGltYWdlPXtcIi9zdGFydGVyLXNob3Atc2VydmljZS5wbmdcIn1cclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIkNvbXBsZXRlIFN0YXJ0ZXIgU2hvcHNcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIkdldCBzZWxsaW5nIHdpdGhpbiBhIHdlZWshIEEgY29tcGxldGUgc3RhcnRlciBzaG9wIGNhbiBjb3N0IGFzIGxpdHRsZSBhcyAkODAwIGFuZCB3aWxsIGluY2x1ZGUgZXZlcnl0aGluZyB5b3UgbmVlZCB0byBzdGFydCBzZWxsaW5nLlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VydmljZXNDYXJkIFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e1wiL3Nlby1vcC1zZXJ2aWNlLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwiU0VPIE9wdGltaXNhdGlvblwiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiU0VPIGlzIHZpdGFsIGZvciBnZXR0aW5nIGNsaWVudHMgdG8gdG91ciBzdG9yZS4gIEkgdXNlIHRoZSBsYXRlc3QgdGVjaCBhbmQgYmJsc2FkIGFzdmpuIGFkZiBqbmYgam4gZGZqbmRhIGpuYWRhLlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9hbmltYXRlZC5kaXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlc1NlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9