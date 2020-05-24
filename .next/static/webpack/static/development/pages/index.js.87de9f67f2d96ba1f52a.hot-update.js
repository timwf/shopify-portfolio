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

  var animatedStyle = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 800
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var observer = new IntersectionObserver(function (entries) {
      console.log('working');
      if (entries[0].isIntersecting === true) setInview(true);
    }, {
      threshold: [0]
    });
    observer.observe(document.querySelector(".service-section-container"));
    return function () {};
  }, []);
  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    style: animatedStyle,
    className: "service-section-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: "/theme-changes-services.png",
    header: "Custom Themes and Changes",
    content: "Need a new customizable section? Not happy with your navigation.  Want to stand out and create a whole new design? ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx(_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: "/starter-shop-service.png",
    header: "Complete Starter Shops",
    content: "Get selling within a week! A complete starter shop can cost as little as $800 and will include everything you need to start selling.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx(_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: "/seo-op-service.png",
    header: "SEO Optimisation",
    content: "SEO is vital for getting clients to tour store.  I use the latest tech and bblsad asvjn adf jnf jn dfjnda jnada.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NldmljZXNTZWN0aW9uLmpzeCJdLCJuYW1lcyI6WyJTZXJ2aWNlc1NlY3Rpb24iLCJ1c2VTdGF0ZSIsImludmlldyIsInNldEludmlldyIsImFuaW1hdGVkU3R5bGUiLCJ1c2VTcHJpbmciLCJmcm9tIiwib3BhY2l0eSIsInRvIiwiZGVsYXkiLCJ1c2VFZmZlY3QiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImNvbnNvbGUiLCJsb2ciLCJpc0ludGVyc2VjdGluZyIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFHQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxLQUFELENBRFY7QUFBQSxNQUNuQkMsTUFEbUI7QUFBQSxNQUNYQyxTQURXOztBQUcxQixNQUFNQyxhQUFhLEdBQUdDLDhEQUFTLENBQUM7QUFDNUJDLFFBQUksRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBVixLQURzQjtBQUU1QkMsTUFBRSxFQUFFO0FBQUNELGFBQU8sRUFBRTtBQUFWLEtBRndCO0FBRzVCRSxTQUFLLEVBQUU7QUFIcUIsR0FBRCxDQUEvQjtBQU1BQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJQyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FBeUIsVUFBU0MsT0FBVCxFQUFrQjtBQUN0REMsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBLFVBQUdGLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0csY0FBWCxLQUE4QixJQUFqQyxFQUNBYixTQUFTLENBQUMsSUFBRCxDQUFUO0FBRUgsS0FMYyxFQUtaO0FBQUVjLGVBQVMsRUFBRSxDQUFDLENBQUQ7QUFBYixLQUxZLENBQWY7QUFNQU4sWUFBUSxDQUFDTyxPQUFULENBQWlCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsNEJBQXZCLENBQWpCO0FBQ0EsV0FBTyxZQUFNLENBQ1osQ0FERDtBQUVILEdBVlEsRUFVTixFQVZNLENBQVQ7QUFhQSxTQUNJLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQWMsU0FBSyxFQUFFaEIsYUFBckI7QUFBb0MsYUFBUyxFQUFDLDJCQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRDtBQUNJLFNBQUssRUFBRSw2QkFEWDtBQUVJLFVBQU0sRUFBQywyQkFGWDtBQUdJLFdBQU8sRUFBQyxxSEFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFNSSxNQUFDLG9EQUFEO0FBQ0ksU0FBSyxFQUFFLDJCQURYO0FBRUksVUFBTSxFQUFDLHdCQUZYO0FBR0ksV0FBTyxFQUFDLHNJQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQVdJLE1BQUMsb0RBQUQ7QUFDSSxTQUFLLEVBQUUscUJBRFg7QUFFSSxVQUFNLEVBQUMsa0JBRlg7QUFHSSxXQUFPLEVBQUMsa0hBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLENBREo7QUFvQkgsQ0ExQ0Q7O0dBQU1KLGU7VUFHb0JLLHNEOzs7S0FIcEJMLGU7QUE0Q1NBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy44N2RlOWY2N2YyZDk2YmExZjUyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBTZXJ2aWNlc0NhcmQgZnJvbSBcIi4vU2VydmljZUNhcmRcIlxyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xyXG5cclxuXHJcbmNvbnN0IFNlcnZpY2VzU2VjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpbnZpZXcsIHNldEludmlld10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBhbmltYXRlZFN0eWxlID0gdXNlU3ByaW5nKHtcclxuICAgICAgICBmcm9tOiB7b3BhY2l0eTogMH0sIFxyXG4gICAgICAgIHRvOiB7b3BhY2l0eTogMX0sIFxyXG4gICAgICAgIGRlbGF5OiA4MDBcclxuICAgICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZW50cmllcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd29ya2luZycpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nID09PSB0cnVlKVxyXG4gICAgICAgICAgICBzZXRJbnZpZXcodHJ1ZSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSwgeyB0aHJlc2hvbGQ6IFswXSB9KTtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VydmljZS1zZWN0aW9uLWNvbnRhaW5lclwiKSk7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gKCkgPT4geyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGFuaW1hdGVkLmRpdiBzdHlsZT17YW5pbWF0ZWRTdHlsZX0gY2xhc3NOYW1lPVwic2VydmljZS1zZWN0aW9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8U2VydmljZXNDYXJkIFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e1wiL3RoZW1lLWNoYW5nZXMtc2VydmljZXMucG5nXCJ9IFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwiQ3VzdG9tIFRoZW1lcyBhbmQgQ2hhbmdlc1wiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiTmVlZCBhIG5ldyBjdXN0b21pemFibGUgc2VjdGlvbj8gTm90IGhhcHB5IHdpdGggeW91ciBuYXZpZ2F0aW9uLiAgV2FudCB0byBzdGFuZCBvdXQgYW5kIGNyZWF0ZSBhIHdob2xlIG5ldyBkZXNpZ24/IFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VydmljZXNDYXJkIFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e1wiL3N0YXJ0ZXItc2hvcC1zZXJ2aWNlLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwiQ29tcGxldGUgU3RhcnRlciBTaG9wc1wiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiR2V0IHNlbGxpbmcgd2l0aGluIGEgd2VlayEgQSBjb21wbGV0ZSBzdGFydGVyIHNob3AgY2FuIGNvc3QgYXMgbGl0dGxlIGFzICQ4MDAgYW5kIHdpbGwgaW5jbHVkZSBldmVyeXRoaW5nIHlvdSBuZWVkIHRvIHN0YXJ0IHNlbGxpbmcuXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZXJ2aWNlc0NhcmQgXHJcbiAgICAgICAgICAgICAgICBpbWFnZT17XCIvc2VvLW9wLXNlcnZpY2UucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCJTRU8gT3B0aW1pc2F0aW9uXCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJTRU8gaXMgdml0YWwgZm9yIGdldHRpbmcgY2xpZW50cyB0byB0b3VyIHN0b3JlLiAgSSB1c2UgdGhlIGxhdGVzdCB0ZWNoIGFuZCBiYmxzYWQgYXN2am4gYWRmIGpuZiBqbiBkZmpuZGEgam5hZGEuXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzU2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=