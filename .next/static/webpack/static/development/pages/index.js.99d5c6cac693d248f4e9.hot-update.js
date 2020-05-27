webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ServiceCard.jsx":
/*!************************************!*\
  !*** ./components/ServiceCard.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Tim\\Desktop\\React_projects\\shopify-portfolio\\components\\ServiceCard.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var calc = function calc(x, y) {
  return [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
};

var trans = function trans(x, y, s) {
  return "perspective(600px) rotateX(".concat(x, "deg) rotateY(").concat(y, "deg) scale(").concat(s, ")");
};

console.log(calc());

var ServicesCard = function ServicesCard(props) {
  _s();

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])(function () {
    return {
      xys: [0, 0, 1],
      config: {
        mass: 5,
        tension: 350,
        friction: 40
      }
    };
  }),
      _useSpring2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSpring, 2),
      propsAni = _useSpring2[0],
      set = _useSpring2[1];

  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    "class": "card",
    onMouseMove: function onMouseMove(_ref) {
      var x = _ref.clientX,
          y = _ref.clientY;
      return set({
        xys: calc(x, y)
      });
    },
    onMouseLeave: function onMouseLeave() {
      return set({
        xys: [0, 0, 1]
      });
    },
    style: {
      transform: propsAni.xys.interpolate(trans)
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "service-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: props.image,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "service-card-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 18
    }
  }, props.header)), __jsx("div", {
    className: "service-card-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, props.content)), __jsx("div", {
    className: "service-card-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "Find Our More"))));
};

_s(ServicesCard, "ms35i0ezlUVtCiljdN1THTXv464=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"]];
});

_c = ServicesCard;
/* harmony default export */ __webpack_exports__["default"] = (ServicesCard);

var _c;

$RefreshReg$(_c, "ServicesCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlcnZpY2VDYXJkLmpzeCJdLCJuYW1lcyI6WyJjYWxjIiwieCIsInkiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJ0cmFucyIsInMiLCJjb25zb2xlIiwibG9nIiwiU2VydmljZXNDYXJkIiwicHJvcHMiLCJ1c2VTcHJpbmciLCJ4eXMiLCJjb25maWciLCJtYXNzIiwidGVuc2lvbiIsImZyaWN0aW9uIiwicHJvcHNBbmkiLCJzZXQiLCJjbGllbnRYIiwiY2xpZW50WSIsInRyYW5zZm9ybSIsImludGVycG9sYXRlIiwiaW1hZ2UiLCJoZWFkZXIiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVUsQ0FBQyxFQUFFQSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixDQUEzQixJQUFnQyxFQUFqQyxFQUFxQyxDQUFDSCxDQUFDLEdBQUdFLE1BQU0sQ0FBQ0UsVUFBUCxHQUFvQixDQUF6QixJQUE4QixFQUFuRSxFQUF1RSxHQUF2RSxDQUFWO0FBQUEsQ0FBYjs7QUFDQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDTCxDQUFELEVBQUlDLENBQUosRUFBT0ssQ0FBUDtBQUFBLDhDQUEyQ04sQ0FBM0MsMEJBQTREQyxDQUE1RCx3QkFBMkVLLENBQTNFO0FBQUEsQ0FBZDs7QUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlULElBQUksRUFBaEI7O0FBR0EsSUFBTVUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsbUJBQ0pDLDhEQUFTLENBQUM7QUFBQSxXQUFPO0FBQUVDLFNBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFQO0FBQWtCQyxZQUFNLEVBQUU7QUFBRUMsWUFBSSxFQUFFLENBQVI7QUFBV0MsZUFBTyxFQUFFLEdBQXBCO0FBQXlCQyxnQkFBUSxFQUFFO0FBQW5DO0FBQTFCLEtBQVA7QUFBQSxHQUFELENBREw7QUFBQTtBQUFBLE1BQ3JCQyxRQURxQjtBQUFBLE1BQ1hDLEdBRFc7O0FBRzVCLFNBQ0ksTUFBQyxxREFBRCxDQUFVLEdBQVY7QUFDQSxhQUFNLE1BRE47QUFFQSxlQUFXLEVBQUU7QUFBQSxVQUFZbEIsQ0FBWixRQUFHbUIsT0FBSDtBQUFBLFVBQXdCbEIsQ0FBeEIsUUFBZW1CLE9BQWY7QUFBQSxhQUFnQ0YsR0FBRyxDQUFDO0FBQUVOLFdBQUcsRUFBRWIsSUFBSSxDQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBWCxPQUFELENBQW5DO0FBQUEsS0FGYjtBQUdBLGdCQUFZLEVBQUU7QUFBQSxhQUFNaUIsR0FBRyxDQUFDO0FBQUVOLFdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUFQLE9BQUQsQ0FBVDtBQUFBLEtBSGQ7QUFJQSxTQUFLLEVBQUU7QUFBRVMsZUFBUyxFQUFFSixRQUFRLENBQUNMLEdBQVQsQ0FBYVUsV0FBYixDQUF5QmpCLEtBQXpCO0FBQWIsS0FKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0E7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUVLLEtBQUssQ0FBQ2EsS0FBaEI7QUFBdUIsT0FBRyxFQUFDLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUliLEtBQUssQ0FBQ2MsTUFBVixDQURMLENBRkosRUFLSTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJZCxLQUFLLENBQUNlLE9BQVYsQ0FESixDQUxKLEVBUUk7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosQ0FSSixDQVBBLENBREo7QUF1QkgsQ0ExQkQ7O0dBQU1oQixZO1VBQ3NCRSxzRDs7O0tBRHRCRixZO0FBNEJTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOTlkNWM2Y2FjNjkzZDI0OGY0ZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcblxyXG5jb25zdCBjYWxjID0gKHgsIHkpID0+IFstKHkgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAvIDIwLCAoeCAtIHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLyAyMCwgMS4xXVxyXG5jb25zdCB0cmFucyA9ICh4LCB5LCBzKSA9PiBgcGVyc3BlY3RpdmUoNjAwcHgpIHJvdGF0ZVgoJHt4fWRlZykgcm90YXRlWSgke3l9ZGVnKSBzY2FsZSgke3N9KWBcclxuXHJcbmNvbnNvbGUubG9nKGNhbGMoKSk7XHJcblxyXG5cclxuY29uc3QgU2VydmljZXNDYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbcHJvcHNBbmksIHNldF0gPSB1c2VTcHJpbmcoKCkgPT4gKHsgeHlzOiBbMCwgMCwgMV0sIGNvbmZpZzogeyBtYXNzOiA1LCB0ZW5zaW9uOiAzNTAsIGZyaWN0aW9uOiA0MCB9IH0pKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8YW5pbWF0ZWQuZGl2XHJcbiAgICAgICAgY2xhc3M9XCJjYXJkXCJcclxuICAgICAgICBvbk1vdXNlTW92ZT17KHsgY2xpZW50WDogeCwgY2xpZW50WTogeSB9KSA9PiBzZXQoeyB4eXM6IGNhbGMoeCwgeSkgfSl9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXQoeyB4eXM6IFswLCAwLCAxXSB9KX1cclxuICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IHByb3BzQW5pLnh5cy5pbnRlcnBvbGF0ZSh0cmFucykgfX1cclxuICAgICAgPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtY2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgPHA+e3Byb3BzLmhlYWRlcn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8cD57cHJvcHMuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtY2FyZC1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxwPkZpbmQgT3VyIE1vcmU8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FuaW1hdGVkLmRpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzQ2FyZCJdLCJzb3VyY2VSb290IjoiIn0=