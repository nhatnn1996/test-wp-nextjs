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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL {\\n      categories {\\n        nodes {\\n          name\\n          slug\\n          id\\n          uri\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL($categoryName: String!) {\\n      informationalPost(where: { categoryName: $categoryName }) {\\n        nodes {\\n          title\\n          slug\\n          link\\n          featuredImage {\\n            node {\\n              uri\\n            }\\n          }\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s1 = $RefreshSig$();\nvar Category = function() {\n    var _this1 = _this;\n    var ref, ref1;\n    _s1();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), category = ref2[0], setCategory = ref2[1];\n    var GET_CATEGORY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_templateObject());\n    var GET_LIST_POSTS = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_templateObject1());\n    var ref3 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(GET_CATEGORY), loading = ref3.loading, error = ref3.error, data = ref3.data;\n    var ref4 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useLazyQuery)(GET_LIST_POSTS, {\n        fetchPolicy: \"network-only\"\n    }), 2), callGetListPosts = ref4[0], ref5 = ref4[1], listPosts = ref5.data;\n    var categoryList = data === null || data === void 0 ? void 0 : (ref = data.categories) === null || ref === void 0 ? void 0 : ref.nodes;\n    var postLists = data === null || data === void 0 ? void 0 : (ref1 = data.informationalPost) === null || ref1 === void 0 ? void 0 : ref1.nodes;\n    var getListPosts = function(item) {\n        setCategory(item.name);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (category) {\n            callGetListPosts({\n                variables: {\n                    categoryName: category\n                }\n            });\n        }\n    }, [\n        category\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n            lineNumber: 57,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto p-4\",\n            __source: {\n                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Catelogy\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"catelogy flex justify-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: categoryList === null || categoryList === void 0 ? void 0 : categoryList.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            onClick: function() {\n                                return getListPosts(item);\n                            },\n                            className: \"nav-link mt-4\",\n                            \"data-toggle\": \"tab\",\n                            href: \"#\",\n                            role: \"tab\",\n                            \"aria-selected\": \"false\",\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                className: \"nav nav-tabs text-center\",\n                                id: \"myTab\",\n                                role: \"tablist\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    className: \"cursor-pointer rounded h-20 m-3 p-3 nav-item m-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white\",\n                                    __source: {\n                                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: item.name\n                                })\n                            })\n                        });\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Posts by category\"\n                }),\n                postLists.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        class: \"card\",\n                        __source: {\n                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        },\n                        __self: _this1\n                    });\n                })\n            ]\n        })\n    }));\n};\n_s1(Category, \"FpIUI+aeBcP1v2B/CXxHSc3gSB0=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useLazyQuery\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLElBQUk7OzRCQUNoQ0ssU0FBUyxFQUFDLENBQWU7NEJBQ3pCSyxDQUFXLGNBQUMsQ0FBSzs0QkFDakJDLElBQUksRUFBQyxDQUFHOzRCQUNSQyxJQUFJLEVBQUMsQ0FBSzs0QkFDVkMsQ0FBYSxnQkFBQyxDQUFPOzs7Ozs7OzJHQUVwQkMsQ0FBRTtnQ0FDRFQsU0FBUyxFQUFDLENBQTBCO2dDQUNwQ1UsRUFBRSxFQUFDLENBQU87Z0NBQ1ZILElBQUksRUFBQyxDQUFTOzs7Ozs7OytHQUViSSxDQUFFO29DQUFDWCxTQUFTLEVBQUMsQ0FBc0c7Ozs7Ozs7OENBQ2pITCxJQUFJLENBQUNDLElBQUk7Ozs7OztxRkFNbkJLLENBQUM7Ozs7Ozs7OEJBQUMsQ0FBaUI7O2dCQUNuQlQsU0FBUyxDQUFDVSxHQUFHLENBQUMsUUFBUSxDQUFQUCxJQUFJO2tDQUNoQixNQUFNLHdEQUFMSSxDQUFHO3dCQUFDYSxLQUFLLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7O0FBSzdCLENBQUM7SUFyRktsQyxRQUFROztRQStCcUJILG9EQUFRO1FBQ09DLHdEQUFZOzs7S0FoQ3hERSxRQUFRO0FBc0ZkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvaW5kZXguanM/MmEzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnksIHVzZUxhenlRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmNvbnN0IENhdGVnb3J5ID0gKCkgPT4ge1xuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBHRVRfQ0FURUdPUlkgPSBncWxgXG4gICAgcXVlcnkgR3JhcGhRTCB7XG4gICAgICBjYXRlZ29yaWVzIHtcbiAgICAgICAgbm9kZXMge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgaWRcbiAgICAgICAgICB1cmlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3QgR0VUX0xJU1RfUE9TVFMgPSBncWxgXG4gICAgcXVlcnkgR3JhcGhRTCgkY2F0ZWdvcnlOYW1lOiBTdHJpbmchKSB7XG4gICAgICBpbmZvcm1hdGlvbmFsUG9zdCh3aGVyZTogeyBjYXRlZ29yeU5hbWU6ICRjYXRlZ29yeU5hbWUgfSkge1xuICAgICAgICBub2RlcyB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgbGlua1xuICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIHVyaVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcblxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfQ0FURUdPUlkpO1xuICBjb25zdCBbY2FsbEdldExpc3RQb3N0cywgeyBkYXRhOiBsaXN0UG9zdHMgfV0gPSB1c2VMYXp5UXVlcnkoR0VUX0xJU1RfUE9TVFMsIHtcbiAgICBmZXRjaFBvbGljeTogXCJuZXR3b3JrLW9ubHlcIixcbiAgfSk7XG5cbiAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gZGF0YT8uY2F0ZWdvcmllcz8ubm9kZXM7XG4gIGNvbnN0IHBvc3RMaXN0cyA9IGRhdGE/LmluZm9ybWF0aW9uYWxQb3N0Py5ub2Rlc1xuXG4gIGNvbnN0IGdldExpc3RQb3N0cyA9IChpdGVtKSA9PiB7XG4gICAgc2V0Q2F0ZWdvcnkoaXRlbS5uYW1lKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2F0ZWdvcnkpIHtcbiAgICAgIGNhbGxHZXRMaXN0UG9zdHMoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBjYXRlZ29yeU5hbWU6IGNhdGVnb3J5LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbY2F0ZWdvcnldKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkNhdGVsb2d5PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVsb2d5IGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7Y2F0ZWdvcnlMaXN0Py5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldExpc3RQb3N0cyhpdGVtKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgbXQtNFwiXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBpZD1cIm15VGFiXCJcbiAgICAgICAgICAgICAgICByb2xlPVwidGFibGlzdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcm91bmRlZCBoLTIwIG0tMyBwLTMgbmF2LWl0ZW0gbS00IGJnLWN5YW4tNTAwIHNoYWRvdy1sZyBzaGFkb3ctY3lhbi01MDAvNTAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+UG9zdHMgYnkgY2F0ZWdvcnk8L3A+XG4gICAgICAgIHtwb3N0TGlzdHMubWFwKChpdGVtKSA9PihcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+PC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVF1ZXJ5IiwidXNlTGF6eVF1ZXJ5IiwiZ3FsIiwiQ2F0ZWdvcnkiLCJkYXRhIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsIkdFVF9DQVRFR09SWSIsIkdFVF9MSVNUX1BPU1RTIiwibG9hZGluZyIsImVycm9yIiwiZmV0Y2hQb2xpY3kiLCJjYWxsR2V0TGlzdFBvc3RzIiwibGlzdFBvc3RzIiwiY2F0ZWdvcnlMaXN0IiwiY2F0ZWdvcmllcyIsIm5vZGVzIiwicG9zdExpc3RzIiwiaW5mb3JtYXRpb25hbFBvc3QiLCJnZXRMaXN0UG9zdHMiLCJpdGVtIiwibmFtZSIsInZhcmlhYmxlcyIsImNhdGVnb3J5TmFtZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJtYXAiLCJhIiwib25DbGljayIsImRhdGEtdG9nZ2xlIiwiaHJlZiIsInJvbGUiLCJhcmlhLXNlbGVjdGVkIiwidWwiLCJpZCIsImxpIiwiY2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/category/index.js\n");

/***/ })

});