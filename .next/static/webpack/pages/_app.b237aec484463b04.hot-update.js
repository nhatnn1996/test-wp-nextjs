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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL {\\n      categories {\\n        nodes {\\n          name\\n          slug\\n          id\\n          uri\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL($categoryName: String!) {\\n      informationalPost(where: { categoryName: $categoryName }) {\\n        nodes {\\n          title\\n          slug\\n          link\\n          id\\n          featuredImage {\\n            node {\\n              uri\\n            }\\n          }\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Category = function() {\n    var _this1 = _this;\n    var ref3;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var GET_CATEGORY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject());\n    var GET_LIST_POSTS = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject1());\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(GET_CATEGORY, {\n        fetchPolicy: \"cache-and-network\"\n    }), loading = ref1.loading, error = ref1.error, data = ref1.data;\n    //   const [callGetListPosts, { data: listPosts }] = useLazyQuery(GET_LIST_POSTS, {\n    //     fetchPolicy: \"network-only\",\n    //   });\n    var categoryList = data === null || data === void 0 ? void 0 : (ref3 = data.categories) === null || ref3 === void 0 ? void 0 : ref3.nodes;\n    //   const postLists = listPosts?.informationalPost?.nodes;\n    var getListPosts = function(item) {\n        console.log(item, \"item\");\n    // if (item) {\n    //   callGetListPosts({\n    //     variables: {\n    //       categoryName: item.name,\n    //     },\n    //   });\n    // }\n    // router.push(\"/category/\" + item.slug);\n    };\n    var callGetPost = function(item) {\n        console.log(item, \"item\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n            lineNumber: 63,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto p-4\",\n            __source: {\n                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Catelogy\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"catelogy flex justify-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: categoryList === null || categoryList === void 0 ? void 0 : categoryList.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            onClick: function() {\n                                return getListPosts(item);\n                            },\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                className: \"nav nav-tabs text-center\",\n                                id: \"myTab\",\n                                role: \"tablist\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    className: \"cursor-pointer rounded h-20 m-3 p-3 nav-item m-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white\",\n                                    __source: {\n                                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: item.name\n                                })\n                            })\n                        });\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Posts by category\"\n                }),\n                postLists === null || postLists === void 0 ? void 0 : postLists.map(function(item) {\n                    var ref, ref2;\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"card flex border bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 text-white rounded\",\n                        onClick: function() {\n                            return callGetPost(item);\n                        },\n                        __source: {\n                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                width: \"200\",\n                                height: \"100\",\n                                className: \"mr-3\",\n                                src: \"https://wordpress-749115-2523479.cloudwaysapps.com/\" + (item === null || item === void 0 ? void 0 : (ref = item.featuredImage) === null || ref === void 0 ? void 0 : (ref2 = ref.node) === null || ref2 === void 0 ? void 0 : ref2.uri),\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                },\n                                __self: _this1\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"mt-3\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                },\n                                __self: _this1,\n                                children: item.title\n                            })\n                        ]\n                    }));\n                })\n            ]\n        })\n    }));\n};\n_s(Category, \"3cmGJmCPbWz07HwSwgYwWOwFKhw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFtRjt3QkFDN0ZHLE9BQU8sRUFBRSxRQUFROzRCQUFGTCxNQUFNLENBQU5BLFdBQVcsQ0FBQ0gsSUFBSTs7Ozs7Ozs7O2lHQUU5QmUsQ0FBRztnQ0FDRkMsS0FBSyxFQUFDLENBQUs7Z0NBQ1hDLE1BQU0sRUFBQyxDQUFLO2dDQUNaWixTQUFTLEVBQUMsQ0FBTTtnQ0FDaEJhLEdBQUcsRUFDRCxDQUFxRCx3REFDckRsQixJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFtQixHQUFuQkEsSUFBSSxDQUFKQSxDQUFtQixJQUFuQkEsR0FBbUIsR0FBbkJBLElBQUksQ0FBRW1CLGFBQWEsY0FBbkJuQixHQUFtQixLQUFuQkEsSUFBSSxDQUFKQSxDQUFtQixHQUFuQkEsSUFBSSxDQUFKQSxDQUFtQixXQUFuQkEsR0FBbUIsQ0FBRW9CLElBQUksdUJBQXpCcEIsSUFBSSxDQUFKQSxDQUFtQixHQUFuQkEsSUFBSSxDQUFKQSxDQUFtQixRQUFRcUIsR0FBRzs7Ozs7Ozs7aUdBR2pDZixDQUFDO2dDQUFDRCxTQUFTLEVBQUMsQ0FBTTs7Ozs7OzswQ0FBRUwsSUFBSSxDQUFDc0IsS0FBSzs7Ozs7Ozs7QUFNM0MsQ0FBQztHQWhHS2xDLFFBQVE7O1FBQ0dELGtEQUFTO1FBK0JTSCxvREFBUTs7O0tBaENyQ0ksUUFBUTtBQWlHZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhdGVnb3J5L2luZGV4LmpzPzJhMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VMYXp5UXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgQ2F0ZWdvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBHRVRfQ0FURUdPUlkgPSBncWxgXG4gICAgcXVlcnkgR3JhcGhRTCB7XG4gICAgICBjYXRlZ29yaWVzIHtcbiAgICAgICAgbm9kZXMge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgaWRcbiAgICAgICAgICB1cmlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3QgR0VUX0xJU1RfUE9TVFMgPSBncWxgXG4gICAgcXVlcnkgR3JhcGhRTCgkY2F0ZWdvcnlOYW1lOiBTdHJpbmchKSB7XG4gICAgICBpbmZvcm1hdGlvbmFsUG9zdCh3aGVyZTogeyBjYXRlZ29yeU5hbWU6ICRjYXRlZ29yeU5hbWUgfSkge1xuICAgICAgICBub2RlcyB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgbGlua1xuICAgICAgICAgIGlkXG4gICAgICAgICAgZmVhdHVyZWRJbWFnZSB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgdXJpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9DQVRFR09SWSwge1xuICAgIGZldGNoUG9saWN5OiBcImNhY2hlLWFuZC1uZXR3b3JrXCIsXG4gIH0pO1xuLy8gICBjb25zdCBbY2FsbEdldExpc3RQb3N0cywgeyBkYXRhOiBsaXN0UG9zdHMgfV0gPSB1c2VMYXp5UXVlcnkoR0VUX0xJU1RfUE9TVFMsIHtcbi8vICAgICBmZXRjaFBvbGljeTogXCJuZXR3b3JrLW9ubHlcIixcbi8vICAgfSk7XG5cbiAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gZGF0YT8uY2F0ZWdvcmllcz8ubm9kZXM7XG4vLyAgIGNvbnN0IHBvc3RMaXN0cyA9IGxpc3RQb3N0cz8uaW5mb3JtYXRpb25hbFBvc3Q/Lm5vZGVzO1xuICBjb25zdCBnZXRMaXN0UG9zdHMgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGl0ZW0sIFwiaXRlbVwiKTtcbiAgICAvLyBpZiAoaXRlbSkge1xuICAgIC8vICAgY2FsbEdldExpc3RQb3N0cyh7XG4gICAgLy8gICAgIHZhcmlhYmxlczoge1xuICAgIC8vICAgICAgIGNhdGVnb3J5TmFtZTogaXRlbS5uYW1lLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuICAgIC8vIHJvdXRlci5wdXNoKFwiL2NhdGVnb3J5L1wiICsgaXRlbS5zbHVnKTtcbiAgfTtcbiAgY29uc3QgY2FsbEdldFBvc3QgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGl0ZW0sIFwiaXRlbVwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkNhdGVsb2d5PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVsb2d5IGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7Y2F0ZWdvcnlMaXN0Py5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gZ2V0TGlzdFBvc3RzKGl0ZW0pfT5cbiAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBpZD1cIm15VGFiXCJcbiAgICAgICAgICAgICAgICByb2xlPVwidGFibGlzdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcm91bmRlZCBoLTIwIG0tMyBwLTMgbmF2LWl0ZW0gbS00IGJnLWN5YW4tNTAwIHNoYWRvdy1sZyBzaGFkb3ctY3lhbi01MDAvNTAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlBvc3RzIGJ5IGNhdGVnb3J5PC9wPlxuICAgICAgICB7cG9zdExpc3RzPy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkIGZsZXggYm9yZGVyIGJnLWN5YW4tNTAwIHNoYWRvdy1sZyBzaGFkb3ctY3lhbi01MDAvNTAgbXQtOCB0ZXh0LXdoaXRlIHJvdW5kZWRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2FsbEdldFBvc3QoaXRlbSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICB3aWR0aD1cIjIwMFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEwMFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTNcIlxuICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93b3JkcHJlc3MtNzQ5MTE1LTI1MjM0NzkuY2xvdWR3YXlzYXBwcy5jb20vXCIgK1xuICAgICAgICAgICAgICAgIGl0ZW0/LmZlYXR1cmVkSW1hZ2U/Lm5vZGU/LnVyaVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zXCI+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VRdWVyeSIsInVzZUxhenlRdWVyeSIsImdxbCIsInVzZVJvdXRlciIsIkNhdGVnb3J5IiwiZGF0YSIsInJvdXRlciIsIkdFVF9DQVRFR09SWSIsIkdFVF9MSVNUX1BPU1RTIiwiZmV0Y2hQb2xpY3kiLCJsb2FkaW5nIiwiZXJyb3IiLCJjYXRlZ29yeUxpc3QiLCJjYXRlZ29yaWVzIiwibm9kZXMiLCJnZXRMaXN0UG9zdHMiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImNhbGxHZXRQb3N0IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm1hcCIsIm9uQ2xpY2siLCJ1bCIsImlkIiwicm9sZSIsImxpIiwibmFtZSIsInBvc3RMaXN0cyIsImltZyIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiZmVhdHVyZWRJbWFnZSIsIm5vZGUiLCJ1cmkiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/category/index.js\n");

/***/ })

});