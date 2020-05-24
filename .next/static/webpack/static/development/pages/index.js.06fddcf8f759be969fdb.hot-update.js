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
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: "/theme-changes-services.png",
    header: "Custom Themes and Changes",
    content: "Need a new customizable section? Not happy with your navigation.  Want to stand out and create a whole new design? ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: "/starter-shop-service.png",
    header: "Complete Starter Shops",
    content: "Get selling within a week! A complete starter shop can cost as little as $800 and will include everything you need to start selling.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx(_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: "/seo-op-service.png",
    header: "SEO Optimisation",
    content: "SEO is vital for getting clients to tour store.  I use the latest tech and bblsad asvjn adf jnf jn dfjnda jnada.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NldmljZXNTZWN0aW9uLmpzeCJdLCJuYW1lcyI6WyJTZXJ2aWNlc1NlY3Rpb24iLCJ1c2VTdGF0ZSIsImludmlldyIsInNldEludmlldyIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlZFN0eWxlIiwidXNlU3ByaW5nIiwibWFyZ2luVG9wIiwiZGVsYXkiLCJ1c2VFZmZlY3QiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUdBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEtBQUQsQ0FEVjtBQUFBLE1BQ25CQyxNQURtQjtBQUFBLE1BQ1hDLFNBRFc7O0FBRTFCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWjtBQUdBLE1BQU1JLGFBQWEsR0FBR0MsOERBQVMsQ0FBQztBQUM1QkMsYUFBUyxFQUFFTixNQUFNLEdBQUcsS0FBSCxHQUFXLE9BREE7QUFFNUJPLFNBQUssRUFBRTtBQUZxQixHQUFELENBQS9CO0FBS0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFTQyxPQUFULEVBQWtCO0FBQ3REVCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaOztBQUNBLFVBQUdRLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsY0FBWCxLQUE4QixJQUFqQyxFQUFzQztBQUNsQ1YsZUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFDQUMsaUJBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSDtBQUVKLEtBUGMsRUFPWjtBQUFFWSxlQUFTLEVBQUUsQ0FBQyxDQUFEO0FBQWIsS0FQWSxDQUFmO0FBUUFKLFlBQVEsQ0FBQ0ssT0FBVCxDQUFpQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLDRCQUF2QixDQUFqQjtBQUNBLFdBQU8sWUFBTSxDQUNaLENBREQ7QUFFSCxHQVpRLEVBWU4sRUFaTSxDQUFUO0FBZ0JBLFNBQ0ksTUFBQyxxREFBRCxDQUFVLEdBQVY7QUFBYyxTQUFLLEVBQUVoQixNQUFNLEdBQUdJLGFBQUgsR0FBa0IsSUFBN0M7QUFBbUQsYUFBUyxFQUFDLDJCQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRDtBQUNJLFNBQUssRUFBRSw2QkFEWDtBQUVJLFVBQU0sRUFBQywyQkFGWDtBQUdJLFdBQU8sRUFBQyxxSEFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFNSSxNQUFDLG9EQUFEO0FBQ0ksU0FBSyxFQUFFLDJCQURYO0FBRUksVUFBTSxFQUFDLHdCQUZYO0FBR0ksV0FBTyxFQUFDLHNJQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQVdJLE1BQUMsb0RBQUQ7QUFDSSxTQUFLLEVBQUUscUJBRFg7QUFFSSxVQUFNLEVBQUMsa0JBRlg7QUFHSSxXQUFPLEVBQUMsa0hBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLENBREo7QUFvQkgsQ0E5Q0Q7O0dBQU1OLGU7VUFLb0JPLHNEOzs7S0FMcEJQLGU7QUFnRFNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wNmZkZGNmOGY3NTliZTk2OWZkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBTZXJ2aWNlc0NhcmQgZnJvbSBcIi4vU2VydmljZUNhcmRcIlxyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xyXG5cclxuXHJcbmNvbnN0IFNlcnZpY2VzU2VjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpbnZpZXcsIHNldEludmlld10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnNvbGUubG9nKGludmlldyk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBhbmltYXRlZFN0eWxlID0gdXNlU3ByaW5nKHtcclxuICAgICAgICBtYXJnaW5Ub3A6IGludmlldyA/ICcwcHgnIDogJzE1MHB4JyxcclxuICAgICAgICBkZWxheTogMFxyXG4gICAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3b3JraW5nJyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGVudHJpZXNbMF0uaXNJbnRlcnNlY3RpbmcgPT09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW52aWV3KTsgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldEludmlldyh0cnVlKSAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgfSwgeyB0aHJlc2hvbGQ6IFswXSB9KTtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VydmljZS1zZWN0aW9uLWNvbnRhaW5lclwiKSk7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gKCkgPT4geyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IHN0eWxlPXtpbnZpZXcgPyBhbmltYXRlZFN0eWxlOiBudWxsfSBjbGFzc05hbWU9XCJzZXJ2aWNlLXNlY3Rpb24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxTZXJ2aWNlc0NhcmQgXHJcbiAgICAgICAgICAgICAgICBpbWFnZT17XCIvdGhlbWUtY2hhbmdlcy1zZXJ2aWNlcy5wbmdcIn0gXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCJDdXN0b20gVGhlbWVzIGFuZCBDaGFuZ2VzXCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJOZWVkIGEgbmV3IGN1c3RvbWl6YWJsZSBzZWN0aW9uPyBOb3QgaGFwcHkgd2l0aCB5b3VyIG5hdmlnYXRpb24uICBXYW50IHRvIHN0YW5kIG91dCBhbmQgY3JlYXRlIGEgd2hvbGUgbmV3IGRlc2lnbj8gXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZXJ2aWNlc0NhcmQgXHJcbiAgICAgICAgICAgICAgICBpbWFnZT17XCIvc3RhcnRlci1zaG9wLXNlcnZpY2UucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCJDb21wbGV0ZSBTdGFydGVyIFNob3BzXCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJHZXQgc2VsbGluZyB3aXRoaW4gYSB3ZWVrISBBIGNvbXBsZXRlIHN0YXJ0ZXIgc2hvcCBjYW4gY29zdCBhcyBsaXR0bGUgYXMgJDgwMCBhbmQgd2lsbCBpbmNsdWRlIGV2ZXJ5dGhpbmcgeW91IG5lZWQgdG8gc3RhcnQgc2VsbGluZy5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlcnZpY2VzQ2FyZCBcclxuICAgICAgICAgICAgICAgIGltYWdlPXtcIi9zZW8tb3Atc2VydmljZS5wbmdcIn1cclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIlNFTyBPcHRpbWlzYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIlNFTyBpcyB2aXRhbCBmb3IgZ2V0dGluZyBjbGllbnRzIHRvIHRvdXIgc3RvcmUuICBJIHVzZSB0aGUgbGF0ZXN0IHRlY2ggYW5kIGJibHNhZCBhc3ZqbiBhZGYgam5mIGpuIGRmam5kYSBqbmFkYS5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXNTZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==