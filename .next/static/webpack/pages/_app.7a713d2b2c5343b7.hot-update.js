"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/category/index.js":
/*!*********************************!*\
  !*** ./pages/category/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL {\\n      categories {\\n        nodes {\\n          name\\n          slug\\n          id\\n          uri\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Category = function() {\n    var _this1 = _this;\n    var ref;\n    _s();\n    var GET_CATEGORY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject());\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(GET_CATEGORY), loading = ref1.loading, error = ref1.error, data = ref1.data;\n    console.log(data, \"data\");\n    var categoryList = data === null || data === void 0 ? void 0 : (ref = data.categories) === null || ref === void 0 ? void 0 : ref.nodes;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n            lineNumber: 20,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto p-4\",\n            __source: {\n                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Catelogy\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"catelogy flex justify-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: categoryList === null || categoryList === void 0 ? void 0 : categoryList.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            onClick: get,\n                            className: \"nav-link mt-4\",\n                            \"data-toggle\": \"tab\",\n                            href: item.uri,\n                            role: \"tab\",\n                            \"aria-selected\": \"false\",\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                className: \"nav nav-tabs text-center\",\n                                id: \"myTab\",\n                                role: \"tablist\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    className: \"cursor-pointer rounded h-20 m-3 p-3 nav-item m-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white\",\n                                    __source: {\n                                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: item.name\n                                })\n                            })\n                        });\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s(Category, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yeS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUNxQjs7Ozs7Ozs7Ozs7Ozs7UUFFbkIsQ0FXekI7Ozs7Ozs7O0FBWkYsR0FBSyxDQUFDRyxRQUFRLEdBQUcsUUFDakIsR0FEdUIsQ0FBQzs7UUFlREMsR0FBZ0I7O0lBZHJDLEdBQUssQ0FBQ0MsWUFBWSxHQUFHSixtREFBRztJQVl4QixHQUFLLENBQTRCQyxJQUFzQixHQUF0QkEsd0RBQVEsQ0FBQ0csWUFBWSxHQUE5Q0MsT0FBTyxHQUFrQkosSUFBc0IsQ0FBL0NJLE9BQU8sRUFBRUMsS0FBSyxHQUFXTCxJQUFzQixDQUF0Q0ssS0FBSyxFQUFFSCxJQUFJLEdBQUtGLElBQXNCLENBQS9CRSxJQUFJO0lBQzVCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsSUFBSSxFQUFFLENBQU07SUFDeEIsR0FBSyxDQUFDTSxZQUFZLEdBQUdOLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUpBLENBQWdCLElBQWhCQSxHQUFnQixHQUFoQkEsSUFBSSxDQUFFTyxVQUFVLGNBQWhCUCxHQUFnQixLQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsR0FBZ0IsQ0FBRVEsS0FBSztJQUM1QyxNQUFNLHNFQUNIQyxDQUFHOzs7Ozs7O3dGQUNEQSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUF1Qjs7Ozs7Ozs7cUZBQ25DQyxDQUFDO29CQUFDRCxTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs4QkFBQyxDQUFROztxRkFDbENELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUE4Qjs7Ozs7Ozs4QkFDMUNKLFlBQVksYUFBWkEsWUFBWSxLQUFaQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxZQUFZLENBQUVNLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUk7c0NBQ3RCLE1BQ1QsQ0FBQyx1REFEU0MsQ0FBQzs0QkFDRkMsT0FBTyxFQUFFQyxHQUFHOzRCQUNWTixTQUFTLEVBQUMsQ0FBZTs0QkFDekJPLENBQVcsY0FBQyxDQUFLOzRCQUNqQkMsSUFBSSxFQUFFTCxJQUFJLENBQUNNLEdBQUc7NEJBQ2RDLElBQUksRUFBQyxDQUFLOzRCQUNWQyxDQUFhLGdCQUFDLENBQU87Ozs7Ozs7MkdBRXBCQyxDQUFFO2dDQUNEWixTQUFTLEVBQUMsQ0FBMEI7Z0NBQ3BDYSxFQUFFLEVBQUMsQ0FBTztnQ0FDVkgsSUFBSSxFQUFDLENBQVM7Ozs7Ozs7K0dBRWJJLENBQUU7b0NBQUNkLFNBQVMsRUFBQyxDQUFzRzs7Ozs7Ozs4Q0FDakhHLElBQUksQ0FBQ1ksSUFBSTs7Ozs7Ozs7O0FBUzVCLENBQUM7R0E3Q0sxQixRQUFROztRQWFxQkQsb0RBQVE7OztLQWJyQ0MsUUFBUTtBQThDZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhdGVnb3J5L2luZGV4LmpzPzJhMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuY29uc3QgQ2F0ZWdvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IEdFVF9DQVRFR09SWSA9IGdxbGBcbiAgICBxdWVyeSBHcmFwaFFMIHtcbiAgICAgIGNhdGVnb3JpZXMge1xuICAgICAgICBub2RlcyB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIHNsdWdcbiAgICAgICAgICBpZFxuICAgICAgICAgIHVyaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfQ0FURUdPUlkpO1xuICBjb25zb2xlLmxvZyhkYXRhLCBcImRhdGFcIik7XG4gIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGRhdGE/LmNhdGVnb3JpZXM/Lm5vZGVzO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkNhdGVsb2d5PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVsb2d5IGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7Y2F0ZWdvcnlMaXN0Py5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICBvbkNsaWNrPXtnZXR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIG10LTRcIlxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXG4gICAgICAgICAgICAgIGhyZWY9e2l0ZW0udXJpfVxuICAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBpZD1cIm15VGFiXCJcbiAgICAgICAgICAgICAgICByb2xlPVwidGFibGlzdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcm91bmRlZCBoLTIwIG0tMyBwLTMgbmF2LWl0ZW0gbS00IGJnLWN5YW4tNTAwIHNoYWRvdy1sZyBzaGFkb3ctY3lhbi01MDAvNTAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ3FsIiwidXNlUXVlcnkiLCJDYXRlZ29yeSIsImRhdGEiLCJHRVRfQ0FURUdPUlkiLCJsb2FkaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcnlMaXN0IiwiY2F0ZWdvcmllcyIsIm5vZGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm1hcCIsIml0ZW0iLCJhIiwib25DbGljayIsImdldCIsImRhdGEtdG9nZ2xlIiwiaHJlZiIsInVyaSIsInJvbGUiLCJhcmlhLXNlbGVjdGVkIiwidWwiLCJpZCIsImxpIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/category/index.js\n");

/***/ })

});