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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL {\\n      categories {\\n        nodes {\\n          name\\n          slug\\n          id\\n          uri\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL {\\n      informationalPost(where: { categoryName: \\\"nutrition\\\" }) {\\n        nodes {\\n          title\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s1 = $RefreshSig$();\nvar Category = function() {\n    var _this1 = _this;\n    var ref;\n    _s1();\n    var GET_CATEGORY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject());\n    var GET_LIST_POSTS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject1());\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(GET_CATEGORY), loading = ref1.loading, error = ref1.error, data = ref1.data;\n    var ref2 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(GET_LIST_POSTS, {\n        variables: {\n            breed: breed\n        }\n    }), 2), callGetListPosts = ref2[0], ref3 = ref2[1], listPosts = ref3.data;\n    var categoryList = data === null || data === void 0 ? void 0 : (ref = data.categories) === null || ref === void 0 ? void 0 : ref.nodes;\n    var getListPosts = function(item) {\n        callGetListPosts();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n            lineNumber: 36,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto p-4\",\n            __source: {\n                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Catelogy\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"catelogy flex justify-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: categoryList === null || categoryList === void 0 ? void 0 : categoryList.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            onClick: function() {\n                                return getListPosts(item);\n                            },\n                            className: \"nav-link mt-4\",\n                            \"data-toggle\": \"tab\",\n                            href: \"#\",\n                            role: \"tab\",\n                            \"aria-selected\": \"false\",\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                className: \"nav nav-tabs text-center\",\n                                id: \"myTab\",\n                                role: \"tablist\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    className: \"cursor-pointer rounded h-20 m-3 p-3 nav-item m-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white\",\n                                    __source: {\n                                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: item.name\n                                })\n                            })\n                        });\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s1(Category, \"Nu9nuANVM1ZoCxyz2+7dlzGiAlY=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yeS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUNtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRWpDLENBV3pCOzs7Ozs7Ozs7UUFDMkIsQ0FRM0I7Ozs7Ozs7O0FBckJGLEdBQUssQ0FBQ0ksUUFBUSxHQUFHLFFBQ2pCLEdBRHVCLENBQUM7O1FBMkJEQyxHQUFnQjs7SUExQnJDLEdBQUssQ0FBQ0MsWUFBWSxHQUFHTCxtREFBRztJQVl4QixHQUFLLENBQUNNLGNBQWMsR0FBR04sbURBQUc7SUFTMUIsR0FBSyxDQUE0QkMsSUFBc0IsR0FBdEJBLHdEQUFRLENBQUNJLFlBQVksR0FBOUNFLE9BQU8sR0FBa0JOLElBQXNCLENBQS9DTSxPQUFPLEVBQUVDLEtBQUssR0FBV1AsSUFBc0IsQ0FBdENPLEtBQUssRUFBRUosSUFBSSxHQUFLSCxJQUFzQixDQUEvQkcsSUFBSTtJQUM1QixHQUFLLENBQTJDRixJQUU5QyxrQkFGOENBLDREQUFZLENBQUNJLGNBQWMsRUFBRSxDQUFDO1FBQzVFRyxTQUFTLEVBQUUsQ0FBQztZQUFDQyxLQUFLLEVBQUxBLEtBQUs7UUFBQyxDQUFDO0lBQ3RCLENBQUMsT0FGTUMsZ0JBQWdCLEdBQXlCVCxJQUU5QyxZQUY4Q0EsSUFFOUMsS0FGK0JVLFNBQVMsUUFBZlIsSUFBSTtJQUkvQixHQUFLLENBQUNTLFlBQVksR0FBR1QsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsSUFBaEJBLEdBQWdCLEdBQWhCQSxJQUFJLENBQUVVLFVBQVUsY0FBaEJWLEdBQWdCLEtBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxHQUFnQixDQUFFVyxLQUFLO0lBRTVDLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLFFBQVEsQ0FBUEMsSUFBSSxFQUFLLENBQUM7UUFDOUJOLGdCQUFnQjtJQUNsQixDQUFDO0lBQ0QsTUFBTSxzRUFDSE8sQ0FBRzs7Ozs7Ozt3RkFDREEsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBdUI7Ozs7Ozs7O3FGQUNuQ0MsQ0FBQztvQkFBQ0QsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7OEJBQUMsQ0FBUTs7cUZBQ2xDRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBOEI7Ozs7Ozs7OEJBQzFDTixZQUFZLGFBQVpBLFlBQVksS0FBWkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsWUFBWSxDQUFFUSxHQUFHLENBQUMsUUFBUSxDQUFQSixJQUFJO3NDQUN0QixNQUNULENBQUMsdURBRFNLLENBQUM7NEJBQ0FDLE9BQU8sRUFBRSxRQUFRO2dDQUFGUCxNQUFNLENBQU5BLFlBQVksQ0FBQ0MsSUFBSTs7NEJBQ2hDRSxTQUFTLEVBQUMsQ0FBZTs0QkFDekJLLENBQVcsY0FBQyxDQUFLOzRCQUNqQkMsSUFBSSxFQUFDLENBQUc7NEJBQ1JDLElBQUksRUFBQyxDQUFLOzRCQUNWQyxDQUFhLGdCQUFDLENBQU87Ozs7Ozs7MkdBRXBCQyxDQUFFO2dDQUNEVCxTQUFTLEVBQUMsQ0FBMEI7Z0NBQ3BDVSxFQUFFLEVBQUMsQ0FBTztnQ0FDVkgsSUFBSSxFQUFDLENBQVM7Ozs7Ozs7K0dBRWJJLENBQUU7b0NBQUNYLFNBQVMsRUFBQyxDQUFzRzs7Ozs7Ozs4Q0FDakhGLElBQUksQ0FBQ2MsSUFBSTs7Ozs7Ozs7O0FBUzVCLENBQUM7SUE3REs1QixRQUFROztRQXNCcUJGLG9EQUFRO1FBQ09DLHdEQUFZOzs7S0F2QnhEQyxRQUFRO0FBOERkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvaW5kZXguanM/MmEzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5LCB1c2VMYXp5UXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmNvbnN0IENhdGVnb3J5ID0gKCkgPT4ge1xuICBjb25zdCBHRVRfQ0FURUdPUlkgPSBncWxgXG4gICAgcXVlcnkgR3JhcGhRTCB7XG4gICAgICBjYXRlZ29yaWVzIHtcbiAgICAgICAgbm9kZXMge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgaWRcbiAgICAgICAgICB1cmlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3QgR0VUX0xJU1RfUE9TVFMgPSBncWxgXG4gICAgcXVlcnkgR3JhcGhRTCB7XG4gICAgICBpbmZvcm1hdGlvbmFsUG9zdCh3aGVyZTogeyBjYXRlZ29yeU5hbWU6IFwibnV0cml0aW9uXCIgfSkge1xuICAgICAgICBub2RlcyB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX0NBVEVHT1JZKTtcbiAgY29uc3QgW2NhbGxHZXRMaXN0UG9zdHMsIHsgZGF0YTogbGlzdFBvc3RzIH1dID0gdXNlTGF6eVF1ZXJ5KEdFVF9MSVNUX1BPU1RTLCB7XG4gICAgdmFyaWFibGVzOiB7IGJyZWVkIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGRhdGE/LmNhdGVnb3JpZXM/Lm5vZGVzO1xuXG4gIGNvbnN0IGdldExpc3RQb3N0cyA9IChpdGVtKSA9PiB7XG4gICAgY2FsbEdldExpc3RQb3N0cygpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkNhdGVsb2d5PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVsb2d5IGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7Y2F0ZWdvcnlMaXN0Py5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldExpc3RQb3N0cyhpdGVtKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgbXQtNFwiXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBpZD1cIm15VGFiXCJcbiAgICAgICAgICAgICAgICByb2xlPVwidGFibGlzdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcm91bmRlZCBoLTIwIG0tMyBwLTMgbmF2LWl0ZW0gbS00IGJnLWN5YW4tNTAwIHNoYWRvdy1sZyBzaGFkb3ctY3lhbi01MDAvNTAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ3FsIiwidXNlUXVlcnkiLCJ1c2VMYXp5UXVlcnkiLCJDYXRlZ29yeSIsImRhdGEiLCJHRVRfQ0FURUdPUlkiLCJHRVRfTElTVF9QT1NUUyIsImxvYWRpbmciLCJlcnJvciIsInZhcmlhYmxlcyIsImJyZWVkIiwiY2FsbEdldExpc3RQb3N0cyIsImxpc3RQb3N0cyIsImNhdGVnb3J5TGlzdCIsImNhdGVnb3JpZXMiLCJub2RlcyIsImdldExpc3RQb3N0cyIsIml0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwiYSIsIm9uQ2xpY2siLCJkYXRhLXRvZ2dsZSIsImhyZWYiLCJyb2xlIiwiYXJpYS1zZWxlY3RlZCIsInVsIiwiaWQiLCJsaSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/category/index.js\n");

/***/ })

});