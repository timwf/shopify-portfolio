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
  var photoSlideIn = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    from: {
      marginTop: '-500px'
    },
    to: {
      marginTop: '-0px'
    },
    delay: 1000
  });
  return __jsx("div", {
    className: "hero-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "response-hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "animated-hero-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(_AnimatedHeroContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "hero-sub-header-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "sub-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].img, {
    style: animatedStyle,
    src: "/shopify-logo.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].h3, {
    style: animatedStyle,
    className: "hero-sub",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "shopify-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 73
    }
  }, "Shopify "), " | Partner | Developer | Designer")), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].p, {
    style: animatedStyle,
    className: "tim-blurb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Hi, I'm Tim - a Bangkok based Shopify devoloper and designer"))), __jsx("div", {
    className: "hero-image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/hero-photo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }))), __jsx("div", {
    className: "hero-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/github-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: "/linkedin-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: "/twitter-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: "/codepen-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  })));
};

_s(HeroSection, "TVKx9EF9wBphkf9lIi2NgSSX5yg=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"], react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uLmpzeCJdLCJuYW1lcyI6WyJIZXJvU2VjdGlvbiIsImFuaW1hdGVkU3R5bGUiLCJ1c2VTcHJpbmciLCJmcm9tIiwib3BhY2l0eSIsInRvIiwiZGVsYXkiLCJwaG90b1NsaWRlSW4iLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBS0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN0QjtBQUNBLE1BQU1DLGFBQWEsR0FBR0MsOERBQVMsQ0FBQztBQUM1QkMsUUFBSSxFQUFFO0FBQUNDLGFBQU8sRUFBRTtBQUFWLEtBRHNCO0FBRTVCQyxNQUFFLEVBQUU7QUFBQ0QsYUFBTyxFQUFFO0FBQVYsS0FGd0I7QUFHNUJFLFNBQUssRUFBRTtBQUhxQixHQUFELENBQS9CO0FBTUUsTUFBTUMsWUFBWSxHQUFHTCw4REFBUyxDQUFDO0FBQzdCQyxRQUFJLEVBQUU7QUFBQ0ssZUFBUyxFQUFFO0FBQVosS0FEdUI7QUFFN0JILE1BQUUsRUFBRTtBQUFDRyxlQUFTLEVBQUU7QUFBWixLQUZ5QjtBQUc3QkYsU0FBSyxFQUFFO0FBSHNCLEdBQUQsQ0FBOUI7QUFNRixTQUNBO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFEQUFELENBQVUsR0FBVjtBQUFjLFNBQUssRUFBRUwsYUFBckI7QUFBcUMsT0FBRyxFQUFDLG1CQUF6QztBQUE2RCxPQUFHLEVBQUMsRUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxxREFBRCxDQUFVLEVBQVY7QUFBYSxTQUFLLEVBQUVBLGFBQXBCO0FBQW1DLGFBQVMsRUFBQyxVQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdEO0FBQU0sYUFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQXhELHNDQUZKLENBREEsRUFNQSxNQUFDLHFEQUFELENBQVUsQ0FBVjtBQUFZLFNBQUssRUFBRUEsYUFBbkI7QUFBa0MsYUFBUyxFQUFDLFdBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0VBTkEsQ0FGSixDQURBLEVBZUE7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQU0sT0FBRyxFQUFDLGlCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQWZBLENBREosRUFxQkk7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMsa0JBQVQ7QUFBNEIsT0FBRyxFQUFDLEVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssT0FBRyxFQUFDLG9CQUFUO0FBQThCLE9BQUcsRUFBQyxFQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixPQUFHLEVBQUMsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsT0FBRyxFQUFDLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQXJCSixDQURBO0FBaUNGLENBL0NGOztHQUFNRCxXO1VBRW9CRSxzRCxFQU1DQSxzRDs7O0tBUnJCRixXO0FBaURTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNGEyOGNjMTFiNTc1NjQxZDU0ZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRlZEhlcm9Db250ZW50IGZyb20gXCIuL0FuaW1hdGVkSGVyb0NvbnRlbnRcIjtcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEhlcm9TZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgcHJvcHMgPSB1c2VTcHJpbmcoeyBmcm9tOiB7Y29sb3I6ICdncmVlbid9LCB0bzogeyBjb2xvcjogJ3JlZCd9LCBkZWxheTogMTAwfSlcclxuICAgIGNvbnN0IGFuaW1hdGVkU3R5bGUgPSB1c2VTcHJpbmcoe1xyXG4gICAgICAgIGZyb206IHtvcGFjaXR5OiAwfSwgXHJcbiAgICAgICAgdG86IHtvcGFjaXR5OiAxfSwgXHJcbiAgICAgICAgZGVsYXk6IDEwMDBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBwaG90b1NsaWRlSW4gPSB1c2VTcHJpbmcoe1xyXG4gICAgICAgIGZyb206IHttYXJnaW5Ub3A6ICctNTAwcHgnfSwgXHJcbiAgICAgICAgdG86IHttYXJnaW5Ub3A6ICctMHB4J30sIFxyXG4gICAgICAgIGRlbGF5OiAxMDAwXHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8td3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzcG9uc2UtaGVyb1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZWQtaGVyby1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPEFuaW1hdGVkSGVyb0NvbnRlbnQgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXN1Yi1oZWFkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGFuaW1hdGVkLmltZyBzdHlsZT17YW5pbWF0ZWRTdHlsZX0gIHNyYz1cIi9zaG9waWZ5LWxvZ28ucG5nXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgPGFuaW1hdGVkLmgzIHN0eWxlPXthbmltYXRlZFN0eWxlfSBjbGFzc05hbWU9XCJoZXJvLXN1YlwiPjxzcGFuIGNsYXNzTmFtZT1cInNob3BpZnktdGV4dFwiPlNob3BpZnkgPC9zcGFuPiB8IFBhcnRuZXIgfCBEZXZlbG9wZXIgfCBEZXNpZ25lcjwvYW5pbWF0ZWQuaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGFuaW1hdGVkLnAgc3R5bGU9e2FuaW1hdGVkU3R5bGV9IGNsYXNzTmFtZT1cInRpbS1ibHVyYlwiPkhpLCBJJ20gVGltIC0gYSBCYW5na29rIGJhc2VkIFNob3BpZnkgZGV2b2xvcGVyIGFuZCBkZXNpZ25lciBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2FuaW1hdGVkLnA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nICBzcmM9XCIvaGVyby1waG90by5wbmdcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zb2NpYWxcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvZ2l0aHViLWdyZXkucG5nXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9saW5rZWRpbi1ncmV5LnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvdHdpdHRlci1ncmV5LnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvY29kZXBlbi1ncmV5LnBuZ1wiIGFsdD1cIlwiLz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcblxyXG4pfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==