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
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var animatedStyle = "";

var ServicesSection = function ServicesSection() {
  _s2();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _s = $RefreshSig$();

    var observer = new IntersectionObserver(_s(function (entries) {
      _s();

      console.log('working');
      if (entries[0].isIntersecting === true) animatedStyle = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        },
        delay: 800
      });
    }, "osm+04XShAFeF/DrWOpJZHjaaNg=", false, function () {
      return [react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"]];
    }), {
      threshold: [0]
    });
    observer.observe(document.querySelector(".service-section-container"));
    return function () {};
  }, []);
  return __jsx("div", {
    style: animatedStyle,
    className: "service-section-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: "/theme-changes-services.png",
    header: "Custom Themes and Changes",
    content: "Need a new customizable section? Not happy with your navigation.  Want to stand out and create a whole new design? ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx(_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: "/starter-shop-service.png",
    header: "Complete Starter Shops",
    content: "Get selling within a week! A complete starter shop can cost as little as $800 and will include everything you need to start selling.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx(_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: "/seo-op-service.png",
    header: "SEO Optimisation",
    content: "SEO is vital for getting clients to tour store.  I use the latest tech and bblsad asvjn adf jnf jn dfjnda jnada.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }));
};

_s2(ServicesSection, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NldmljZXNTZWN0aW9uLmpzeCJdLCJuYW1lcyI6WyJhbmltYXRlZFN0eWxlIiwiU2VydmljZXNTZWN0aW9uIiwidXNlRWZmZWN0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJjb25zb2xlIiwibG9nIiwiaXNJbnRlcnNlY3RpbmciLCJ1c2VTcHJpbmciLCJmcm9tIiwib3BhY2l0eSIsInRvIiwiZGVsYXkiLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFJQSxhQUFhLEdBQUcsRUFBcEI7O0FBRUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBRTFCQyx5REFBUyxDQUFDLFlBQU07QUFBQTs7QUFDWixRQUFJQyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosSUFBeUIsVUFBU0MsT0FBVCxFQUFrQjtBQUFBOztBQUN0REMsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBLFVBQUdGLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0csY0FBWCxLQUE4QixJQUFqQyxFQUNBUixhQUFhLEdBQUdTLDhEQUFTLENBQUM7QUFDdEJDLFlBQUksRUFBRTtBQUFDQyxpQkFBTyxFQUFFO0FBQVYsU0FEZ0I7QUFFdEJDLFVBQUUsRUFBRTtBQUFDRCxpQkFBTyxFQUFFO0FBQVYsU0FGa0I7QUFHdEJFLGFBQUssRUFBRTtBQUhlLE9BQUQsQ0FBekI7QUFLSCxLQVJjO0FBQUEsY0FHS0osc0RBSEw7QUFBQSxRQVFaO0FBQUVLLGVBQVMsRUFBRSxDQUFDLENBQUQ7QUFBYixLQVJZLENBQWY7QUFTQVgsWUFBUSxDQUFDWSxPQUFULENBQWlCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsNEJBQXZCLENBQWpCO0FBQ0EsV0FBTyxZQUFNLENBQ1osQ0FERDtBQUVILEdBYlEsRUFhTixFQWJNLENBQVQ7QUFnQkEsU0FDSTtBQUFLLFNBQUssRUFBRWpCLGFBQVo7QUFBMkIsYUFBUyxFQUFDLDJCQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRDtBQUNJLFNBQUssRUFBRSw2QkFEWDtBQUVJLFVBQU0sRUFBQywyQkFGWDtBQUdJLFdBQU8sRUFBQyxxSEFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFNSSxNQUFDLG9EQUFEO0FBQ0ksU0FBSyxFQUFFLDJCQURYO0FBRUksVUFBTSxFQUFDLHdCQUZYO0FBR0ksV0FBTyxFQUFDLHNJQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQVdJLE1BQUMsb0RBQUQ7QUFDSSxTQUFLLEVBQUUscUJBRFg7QUFFSSxVQUFNLEVBQUMsa0JBRlg7QUFHSSxXQUFPLEVBQUMsa0hBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLENBREo7QUFvQkgsQ0F0Q0Q7O0lBQU1DLGU7O0tBQUFBLGU7QUF3Q1NBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40NWZjNDQxMTY3ZmJiZWY3NDU5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IFNlcnZpY2VzQ2FyZCBmcm9tIFwiLi9TZXJ2aWNlQ2FyZFwiXHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XHJcblxyXG5sZXQgYW5pbWF0ZWRTdHlsZSA9IFwiXCJcclxuXHJcbmNvbnN0IFNlcnZpY2VzU2VjdGlvbiA9ICgpID0+IHtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3b3JraW5nJyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGVudHJpZXNbMF0uaXNJbnRlcnNlY3RpbmcgPT09IHRydWUpXHJcbiAgICAgICAgICAgIGFuaW1hdGVkU3R5bGUgPSB1c2VTcHJpbmcoe1xyXG4gICAgICAgICAgICAgICAgZnJvbToge29wYWNpdHk6IDB9LCBcclxuICAgICAgICAgICAgICAgIHRvOiB7b3BhY2l0eTogMX0sIFxyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDgwMFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIHsgdGhyZXNob2xkOiBbMF0gfSk7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlcnZpY2Utc2VjdGlvbi1jb250YWluZXJcIikpOyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e2FuaW1hdGVkU3R5bGV9IGNsYXNzTmFtZT1cInNlcnZpY2Utc2VjdGlvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPFNlcnZpY2VzQ2FyZCBcclxuICAgICAgICAgICAgICAgIGltYWdlPXtcIi90aGVtZS1jaGFuZ2VzLXNlcnZpY2VzLnBuZ1wifSBcclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIkN1c3RvbSBUaGVtZXMgYW5kIENoYW5nZXNcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIk5lZWQgYSBuZXcgY3VzdG9taXphYmxlIHNlY3Rpb24/IE5vdCBoYXBweSB3aXRoIHlvdXIgbmF2aWdhdGlvbi4gIFdhbnQgdG8gc3RhbmQgb3V0IGFuZCBjcmVhdGUgYSB3aG9sZSBuZXcgZGVzaWduPyBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlcnZpY2VzQ2FyZCBcclxuICAgICAgICAgICAgICAgIGltYWdlPXtcIi9zdGFydGVyLXNob3Atc2VydmljZS5wbmdcIn1cclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIkNvbXBsZXRlIFN0YXJ0ZXIgU2hvcHNcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIkdldCBzZWxsaW5nIHdpdGhpbiBhIHdlZWshIEEgY29tcGxldGUgc3RhcnRlciBzaG9wIGNhbiBjb3N0IGFzIGxpdHRsZSBhcyAkODAwIGFuZCB3aWxsIGluY2x1ZGUgZXZlcnl0aGluZyB5b3UgbmVlZCB0byBzdGFydCBzZWxsaW5nLlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VydmljZXNDYXJkIFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e1wiL3Nlby1vcC1zZXJ2aWNlLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwiU0VPIE9wdGltaXNhdGlvblwiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiU0VPIGlzIHZpdGFsIGZvciBnZXR0aW5nIGNsaWVudHMgdG8gdG91ciBzdG9yZS4gIEkgdXNlIHRoZSBsYXRlc3QgdGVjaCBhbmQgYmJsc2FkIGFzdmpuIGFkZiBqbmYgam4gZGZqbmRhIGpuYWRhLlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlc1NlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9