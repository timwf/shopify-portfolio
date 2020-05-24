webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/HeroSection.jsx":
/*!************************************!*\
  !*** ./components/HeroSection.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AnimatedHeroContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimatedHeroContent */ "./components/AnimatedHeroContent.jsx");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Tim\\Desktop\\React_projects\\shopify-portfolio\\components\\HeroSection.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var HeroSection = function HeroSection() {
  _s();

  // const props = useSpring({ from: {color: 'green'}, to: { color: 'red'}, delay: 100})
  var animatedStyle = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 1000
  });
  return __jsx("div", {
    className: "hero-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "response-hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "animated-hero-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_AnimatedHeroContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "hero-sub-header-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "sub-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/shopify-logo.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("h3", {
    className: "hero-sub",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "shopify-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 42
    }
  }, "Shopify "), " | Partner | Developer | Designer")), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].p, {
    style: animatedStyle,
    className: "tim-blurb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Hi, I'm Tim - a Bangkok based Shopify devoloper and designer"))), __jsx("div", {
    className: "hero-image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/hero-photo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }))), __jsx("div", {
    className: "hero-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/github-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: "/linkedin-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: "/twitter-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: "/codepen-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  })));
};

_s(HeroSection, "LMM1hQWW3tmMGhM/qr78AhmsJbM=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"]];
});

_c = HeroSection;
/* harmony default export */ __webpack_exports__["default"] = (HeroSection);

var _c;

$RefreshReg$(_c, "HeroSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uLmpzeCJdLCJuYW1lcyI6WyJIZXJvU2VjdGlvbiIsImFuaW1hdGVkU3R5bGUiLCJ1c2VTcHJpbmciLCJmcm9tIiwib3BhY2l0eSIsInRvIiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBS0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN0QjtBQUNBLE1BQU1DLGFBQWEsR0FBR0MsOERBQVMsQ0FBQztBQUM1QkMsUUFBSSxFQUFFO0FBQUNDLGFBQU8sRUFBRTtBQUFWLEtBRHNCO0FBRTVCQyxNQUFFLEVBQUU7QUFBQ0QsYUFBTyxFQUFFO0FBQVYsS0FGd0I7QUFHNUJFLFNBQUssRUFBRTtBQUhxQixHQUFELENBQS9CO0FBTUEsU0FDQTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsT0FBRyxFQUFDLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5QjtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUF6QixzQ0FGSixDQURBLEVBTUEsTUFBQyxxREFBRCxDQUFVLENBQVY7QUFBWSxTQUFLLEVBQUVMLGFBQW5CO0FBQWtDLGFBQVMsRUFBQyxXQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9FQU5BLENBRkosQ0FEQSxFQWVBO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFNLE9BQUcsRUFBQyxpQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FmQSxDQURKLEVBcUJJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFDLGtCQUFUO0FBQTRCLE9BQUcsRUFBQyxFQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLE9BQUcsRUFBQyxvQkFBVDtBQUE4QixPQUFHLEVBQUMsRUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsT0FBRyxFQUFDLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLE9BQUcsRUFBQyxFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FyQkosQ0FEQTtBQWlDRixDQXpDRjs7R0FBTUQsVztVQUVvQkUsc0Q7OztLQUZwQkYsVztBQTJDU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjA3ZGMyNjgwYmRjZmRlNjhhY2NmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0ZWRIZXJvQ29udGVudCBmcm9tIFwiLi9BbmltYXRlZEhlcm9Db250ZW50XCI7XHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBIZXJvU2VjdGlvbiA9ICgpID0+IHtcclxuICAgIC8vIGNvbnN0IHByb3BzID0gdXNlU3ByaW5nKHsgZnJvbToge2NvbG9yOiAnZ3JlZW4nfSwgdG86IHsgY29sb3I6ICdyZWQnfSwgZGVsYXk6IDEwMH0pXHJcbiAgICBjb25zdCBhbmltYXRlZFN0eWxlID0gdXNlU3ByaW5nKHtcclxuICAgICAgICBmcm9tOiB7b3BhY2l0eTogMH0sIFxyXG4gICAgICAgIHRvOiB7b3BhY2l0eTogMX0sIFxyXG4gICAgICAgIGRlbGF5OiAxMDAwXHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8td3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzcG9uc2UtaGVyb1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZWQtaGVyby1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPEFuaW1hdGVkSGVyb0NvbnRlbnQgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXN1Yi1oZWFkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc2hvcGlmeS1sb2dvLnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZXJvLXN1YlwiPjxzcGFuIGNsYXNzTmFtZT1cInNob3BpZnktdGV4dFwiPlNob3BpZnkgPC9zcGFuPiB8IFBhcnRuZXIgfCBEZXZlbG9wZXIgfCBEZXNpZ25lcjwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGFuaW1hdGVkLnAgc3R5bGU9e2FuaW1hdGVkU3R5bGV9IGNsYXNzTmFtZT1cInRpbS1ibHVyYlwiPkhpLCBJJ20gVGltIC0gYSBCYW5na29rIGJhc2VkIFNob3BpZnkgZGV2b2xvcGVyIGFuZCBkZXNpZ25lciBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2FuaW1hdGVkLnA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nICBzcmM9XCIvaGVyby1waG90by5wbmdcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zb2NpYWxcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvZ2l0aHViLWdyZXkucG5nXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9saW5rZWRpbi1ncmV5LnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvdHdpdHRlci1ncmV5LnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvY29kZXBlbi1ncmV5LnBuZ1wiIGFsdD1cIlwiLz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcblxyXG4pfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==