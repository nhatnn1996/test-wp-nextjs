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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL {\\n      categories {\\n        nodes {\\n          name\\n          slug\\n          id\\n          uri\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL($categoryName: String!) {\\n      informationalPost(where: { categoryName: $categoryName }) {\\n        nodes {\\n          title\\n          slug\\n          link\\n          featuredImage {\\n            node {\\n              uri\\n            }\\n          }\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s1 = $RefreshSig$();\nvar Category = function() {\n    var _this1 = _this;\n    var ref7, ref1;\n    _s1();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), category = ref2[0], setCategory = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var GET_CATEGORY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject());\n    var GET_LIST_POSTS = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject1());\n    var ref3 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(GET_CATEGORY), loading = ref3.loading, error = ref3.error, data = ref3.data;\n    var ref4 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useLazyQuery)(GET_LIST_POSTS, {\n        fetchPolicy: \"cache-and-network\"\n    }), 2), callGetListPosts = ref4[0], ref5 = ref4[1], listPosts = ref5.data;\n    var categoryList = data === null || data === void 0 ? void 0 : (ref7 = data.categories) === null || ref7 === void 0 ? void 0 : ref7.nodes;\n    var postLists = listPosts === null || listPosts === void 0 ? void 0 : (ref1 = listPosts.informationalPost) === null || ref1 === void 0 ? void 0 : ref1.nodes;\n    var getListPosts = function(item) {\n        console.log(item.slug, \"slug\");\n        // router.push(\"/category/\" + item.slug);\n        setCategory(item.name);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (category) {\n            callGetListPosts({\n                variables: {\n                    categoryName: category\n                }\n            });\n        }\n    }, [\n        category\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n            lineNumber: 61,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto p-4\",\n            __source: {\n                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Catelogy\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"catelogy flex justify-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: categoryList === null || categoryList === void 0 ? void 0 : categoryList.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            onClick: function() {\n                                return getListPosts(item);\n                            },\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                className: \"nav nav-tabs text-center\",\n                                id: \"myTab\",\n                                role: \"tablist\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    className: \"cursor-pointer rounded h-20 m-3 p-3 nav-item m-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white\",\n                                    __source: {\n                                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: item.name\n                                })\n                            })\n                        });\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Posts by category\"\n                }),\n                postLists === null || postLists === void 0 ? void 0 : postLists.map(function(item) {\n                    var ref, ref6;\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"card flex border bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 text-white\",\n                        __source: {\n                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                width: \"200\",\n                                height: \"100\",\n                                className: \"mr-3\",\n                                src: \"https://wordpress-749115-2523479.cloudwaysapps.com/\" + (item === null || item === void 0 ? void 0 : (ref = item.featuredImage) === null || ref === void 0 ? void 0 : (ref6 = ref.node) === null || ref6 === void 0 ? void 0 : ref6.uri),\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                },\n                                __self: _this1\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                },\n                                __self: _this1,\n                                children: item.title\n                            })\n                        ]\n                    }));\n                })\n            ]\n        })\n    }));\n};\n_s1(Category, \"npZMEk7VZ/mQVQc4esdtM9/RvPw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useLazyQuery\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUU7Ozs7Ozs7MENBQUVSLElBQUksQ0FBQ3VCLEtBQUs7Ozs7Ozs7O0FBTXZDLENBQUM7SUEzRkt6QyxRQUFROztRQUVHRCxrREFBUztRQThCU0gsb0RBQVE7UUFDT0Msd0RBQVk7OztLQWpDeERHLFFBQVE7QUE0RmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXRlZ29yeS9pbmRleC5qcz8yYTM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTGF6eVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IENhdGVnb3J5ID0gKCkgPT4ge1xuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgR0VUX0NBVEVHT1JZID0gZ3FsYFxuICAgIHF1ZXJ5IEdyYXBoUUwge1xuICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgIG5vZGVzIHtcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIGlkXG4gICAgICAgICAgdXJpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IEdFVF9MSVNUX1BPU1RTID0gZ3FsYFxuICAgIHF1ZXJ5IEdyYXBoUUwoJGNhdGVnb3J5TmFtZTogU3RyaW5nISkge1xuICAgICAgaW5mb3JtYXRpb25hbFBvc3Qod2hlcmU6IHsgY2F0ZWdvcnlOYW1lOiAkY2F0ZWdvcnlOYW1lIH0pIHtcbiAgICAgICAgbm9kZXMge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIGxpbmtcbiAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICB1cmlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG5cbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX0NBVEVHT1JZKTtcbiAgY29uc3QgW2NhbGxHZXRMaXN0UG9zdHMsIHsgZGF0YTogbGlzdFBvc3RzIH1dID0gdXNlTGF6eVF1ZXJ5KEdFVF9MSVNUX1BPU1RTLCB7XG4gICAgZmV0Y2hQb2xpY3k6IFwiY2FjaGUtYW5kLW5ldHdvcmtcIixcbiAgfSk7XG5cbiAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gZGF0YT8uY2F0ZWdvcmllcz8ubm9kZXM7XG4gIGNvbnN0IHBvc3RMaXN0cyA9IGxpc3RQb3N0cz8uaW5mb3JtYXRpb25hbFBvc3Q/Lm5vZGVzO1xuICBjb25zdCBnZXRMaXN0UG9zdHMgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGl0ZW0uc2x1ZywgXCJzbHVnXCIpO1xuICAgIC8vIHJvdXRlci5wdXNoKFwiL2NhdGVnb3J5L1wiICsgaXRlbS5zbHVnKTtcbiAgICBzZXRDYXRlZ29yeShpdGVtLm5hbWUpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjYXRlZ29yeSkge1xuICAgICAgY2FsbEdldExpc3RQb3N0cyh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGNhdGVnb3J5TmFtZTogY2F0ZWdvcnksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtjYXRlZ29yeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC00XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Q2F0ZWxvZ3k8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWxvZ3kgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIHtjYXRlZ29yeUxpc3Q/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBnZXRMaXN0UG9zdHMoaXRlbSl9PlxuICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIGlkPVwibXlUYWJcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJsaXN0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciByb3VuZGVkIGgtMjAgbS0zIHAtMyBuYXYtaXRlbSBtLTQgYmctY3lhbi01MDAgc2hhZG93LWxnIHNoYWRvdy1jeWFuLTUwMC81MCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+UG9zdHMgYnkgY2F0ZWdvcnk8L3A+XG4gICAgICAgIHtwb3N0TGlzdHM/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBmbGV4IGJvcmRlciBiZy1jeWFuLTUwMCBzaGFkb3ctbGcgc2hhZG93LWN5YW4tNTAwLzUwIG10LTggdGV4dC13aGl0ZVwiID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgd2lkdGg9XCIyMDBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0zXCJcbiAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vd29yZHByZXNzLTc0OTExNS0yNTIzNDc5LmNsb3Vkd2F5c2FwcHMuY29tL1wiICtcbiAgICAgICAgICAgICAgICBpdGVtPy5mZWF0dXJlZEltYWdlPy5ub2RlPy51cmlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VRdWVyeSIsInVzZUxhenlRdWVyeSIsImdxbCIsInVzZVJvdXRlciIsIkNhdGVnb3J5IiwiZGF0YSIsImxpc3RQb3N0cyIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJyb3V0ZXIiLCJHRVRfQ0FURUdPUlkiLCJHRVRfTElTVF9QT1NUUyIsImxvYWRpbmciLCJlcnJvciIsImZldGNoUG9saWN5IiwiY2FsbEdldExpc3RQb3N0cyIsImNhdGVnb3J5TGlzdCIsImNhdGVnb3JpZXMiLCJub2RlcyIsInBvc3RMaXN0cyIsImluZm9ybWF0aW9uYWxQb3N0IiwiZ2V0TGlzdFBvc3RzIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzbHVnIiwibmFtZSIsInZhcmlhYmxlcyIsImNhdGVnb3J5TmFtZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJtYXAiLCJvbkNsaWNrIiwidWwiLCJpZCIsInJvbGUiLCJsaSIsImltZyIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiZmVhdHVyZWRJbWFnZSIsIm5vZGUiLCJ1cmkiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/category/index.js\n");

/***/ })

});