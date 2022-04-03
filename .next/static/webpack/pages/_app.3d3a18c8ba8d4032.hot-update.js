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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_base_axios_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/base/axios-client */ \"./api-client/base/axios-client.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! katex/dist/katex.min.css */ \"./node_modules/katex/dist/katex.min.css\");\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category */ \"./pages/category/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: -200,\n        y: 0\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: 0,\n        y: -100\n    }\n};\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    // const { logout, profile, error } = useAuth();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var handleErrorAuthentication = function() {\n        logout();\n    };\n    (0,_api_base_axios_client__WEBPACK_IMPORTED_MODULE_3__.constructCallBack)(handleErrorAuthentication);\n    var permission = Component.permission;\n    var theme = Component.layout;\n    var asPath = router.asPath;\n    var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_8__.ApolloClient({\n        uri: 'https://wordpress-749115-2523479.cloudwaysapps.com/graphql',\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_8__.InMemoryCache()\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/_app.js\",\n            lineNumber: 39,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_apollo_client__WEBPACK_IMPORTED_MODULE_8__.ApolloProvider, {\n            client: client,\n            __source: {\n                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/_app.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_category__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/_app.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(swr__WEBPACK_IMPORTED_MODULE_4__.SWRConfig, {\n                    value: {\n                        fetcher: function(url) {\n                            return _api_base_axios_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(url);\n                        },\n                        dedupingInterval: 60 * 60 * 1000,\n                        revalidateOnFocus: false,\n                        shouldRetryOnError: false\n                    },\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/_app.js\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    },\n                    __self: this\n                })\n            ]\n        })\n    }));\n}\n_s(MyApp, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0w7QUFDK0M7QUFDekM7QUFDRTtBQUNNO0FBQ047QUFRVjs7QUFFdkIsR0FBSyxDQUFDVyxRQUFRLEdBQUcsQ0FBQztJQUNoQkMsTUFBTSxFQUFFLENBQUM7UUFBQ0MsT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxHQUFHLEdBQUc7UUFBRUMsQ0FBQyxFQUFFLENBQUM7SUFBQyxDQUFDO0lBQ3JDQyxLQUFLLEVBQUUsQ0FBQztRQUFDSCxPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztJQUFDLENBQUM7SUFDakNFLElBQUksRUFBRSxDQUFDO1FBQUNKLE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsR0FBRyxHQUFHO0lBQUMsQ0FBQztBQUNyQyxDQUFDO1NBRVFHLEtBQUssQ0FBQyxLQUF3QixFQUFFLENBQUM7UUFBekJDLFNBQVMsR0FBWCxLQUF3QixDQUF0QkEsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQXdCLENBQVhBLFNBQVM7O0lBQ25DLEVBQWdEO0lBQ2hELEdBQUssQ0FBQ0MsTUFBTSxHQUFHakIsc0RBQVM7SUFDeEIsR0FBSyxDQUFDa0IseUJBQXlCLEdBQUcsUUFDcEMsR0FEMEMsQ0FBQztRQUN2Q0MsTUFBTTtJQUNSLENBQUM7SUFDRHJCLHlFQUFpQixDQUFDb0IseUJBQXlCO0lBQzNDLEdBQUssQ0FBQ0UsVUFBVSxHQUFHTCxTQUFTLENBQUNLLFVBQVU7SUFDdkMsR0FBSyxDQUFDQyxLQUFLLEdBQUdOLFNBQVMsQ0FBQ08sTUFBTTtJQUU5QixHQUFLLENBQUNDLE1BQU0sR0FBR04sTUFBTSxDQUFDTSxNQUFNO0lBQzVCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ3RCLHdEQUFZLENBQUMsQ0FBQztRQUMvQnVCLEdBQUcsRUFBRSxDQUE0RDtRQUNqRUMsS0FBSyxFQUFFLEdBQUcsQ0FBQ3ZCLHlEQUFhO0lBQzFCLENBQUM7SUFDRCxNQUFNLHNFQUNIUCx1REFBYzs7Ozs7Ozt3RkFDWlEsMERBQWM7WUFBQ29CLE1BQU0sRUFBRUEsTUFBTTs7Ozs7Ozs7cUZBQzNCdkIsaURBQVE7Ozs7Ozs7O3FGQUNWRiwwQ0FBUztvQkFDUjZCLEtBQUssRUFBRSxDQUFDO3dCQUNOQyxPQUFPLEVBQUUsUUFBUSxDQUFQQyxHQUFHLEVBQUssQ0FBQzs0QkFDakIsTUFBTSxDQUFDakMsa0VBQWUsQ0FBQ2lDLEdBQUc7d0JBQzVCLENBQUM7d0JBQ0RFLGdCQUFnQixFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTt3QkFDaENDLGlCQUFpQixFQUFFLEtBQUs7d0JBQ3hCQyxrQkFBa0IsRUFBRSxLQUFLO29CQUMzQixDQUFDOzs7Ozs7Ozs7OztBQVlULENBQUM7R0F2Q1FwQixLQUFLOztRQUVHZCxrREFBUzs7O0tBRmpCYyxLQUFLO0FBeUNkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3NDbGllbnQsIHsgY29uc3RydWN0Q2FsbEJhY2sgfSBmcm9tICdAL2FwaS9iYXNlL2F4aW9zLWNsaWVudCc7XG5pbXBvcnQgeyBTV1JDb25maWcgfSBmcm9tICdzd3InO1xuaW1wb3J0ICdrYXRleC9kaXN0L2thdGV4Lm1pbi5jc3MnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL2NhdGVnb3J5XCJcblxuaW1wb3J0IHtcbiAgQXBvbGxvQ2xpZW50LFxuICBJbk1lbW9yeUNhY2hlLFxuICBBcG9sbG9Qcm92aWRlcixcbiAgdXNlUXVlcnksXG4gIGdxbFxufSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB4OiAtMjAwLCB5OiAwIH0sXG4gIGVudGVyOiB7IG9wYWNpdHk6IDEsIHg6IDAsIHk6IDAgfSxcbiAgZXhpdDogeyBvcGFjaXR5OiAwLCB4OiAwLCB5OiAtMTAwIH1cbn07XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAvLyBjb25zdCB7IGxvZ291dCwgcHJvZmlsZSwgZXJyb3IgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGhhbmRsZUVycm9yQXV0aGVudGljYXRpb24gPSAoKSA9PiB7XG4gICAgbG9nb3V0KCk7XG4gIH07XG4gIGNvbnN0cnVjdENhbGxCYWNrKGhhbmRsZUVycm9yQXV0aGVudGljYXRpb24pO1xuICBjb25zdCBwZXJtaXNzaW9uID0gQ29tcG9uZW50LnBlcm1pc3Npb247XG4gIGNvbnN0IHRoZW1lID0gQ29tcG9uZW50LmxheW91dDtcblxuICBjb25zdCBhc1BhdGggPSByb3V0ZXIuYXNQYXRoO1xuICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICB1cmk6ICdodHRwczovL3dvcmRwcmVzcy03NDkxMTUtMjUyMzQ3OS5jbG91ZHdheXNhcHBzLmNvbS9ncmFwaHFsJyxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICA8Q2F0ZWdvcnk+PC9DYXRlZ29yeT5cbiAgICAgIDxTV1JDb25maWdcbiAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICBmZXRjaGVyOiAodXJsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXhpb3NDbGllbnQuZ2V0KHVybCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWR1cGluZ0ludGVydmFsOiA2MCAqIDYwICogMTAwMCwgLy8gMWhyXG4gICAgICAgICAgcmV2YWxpZGF0ZU9uRm9jdXM6IGZhbHNlLFxuICAgICAgICAgIHNob3VsZFJldHJ5T25FcnJvcjogZmFsc2VcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgey8qIDxIZWFkZXIgLz4gKi99XG4gICAgICAgIHsvKiA8VGhlbWVNYW5hZ2VyIHRoZW1lPXt0aGVtZX0+ICovfVxuICAgICAgICAgIHsvKiA8TWlkZGxld2FyZUF1dGggYXV0aD17cGVybWlzc2lvbiAhPT0gJ3B1YmxpYyd9PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e2FzUGF0aH0gLz5cbiAgICAgICAgICA8L01pZGRsZXdhcmVBdXRoPiAqL31cbiAgICAgICAgey8qIDwvVGhlbWVNYW5hZ2VyPiAqL31cbiAgICAgIDwvU1dSQ29uZmlnPlxuICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zQ2xpZW50IiwiY29uc3RydWN0Q2FsbEJhY2siLCJTV1JDb25maWciLCJ1c2VSb3V0ZXIiLCJDYXRlZ29yeSIsIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJBcG9sbG9Qcm92aWRlciIsInVzZVF1ZXJ5IiwiZ3FsIiwidmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieCIsInkiLCJlbnRlciIsImV4aXQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImhhbmRsZUVycm9yQXV0aGVudGljYXRpb24iLCJsb2dvdXQiLCJwZXJtaXNzaW9uIiwidGhlbWUiLCJsYXlvdXQiLCJhc1BhdGgiLCJjbGllbnQiLCJ1cmkiLCJjYWNoZSIsIkZyYWdtZW50IiwidmFsdWUiLCJmZXRjaGVyIiwidXJsIiwiZ2V0IiwiZGVkdXBpbmdJbnRlcnZhbCIsInJldmFsaWRhdGVPbkZvY3VzIiwic2hvdWxkUmV0cnlPbkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/category/index.js":
/*!*********************************!*\
  !*** ./pages/category/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GetDogs {\\n      dogs {\\n        id\\n        breed\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Category = function() {\n    _s();\n    var GET_CATEGORY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject());\n    var ref = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(GET_DOGS), loading = ref.loading, error = ref.error, data = ref.data;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n            lineNumber: 13,\n            columnNumber: 10\n        },\n        __self: _this\n    }));\n};\n_s(Category, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yeS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUNxQjs7Ozs7Ozs7Ozs7Ozs7UUFFbkIsQ0FPekI7Ozs7Ozs7O0FBUkYsR0FBSyxDQUFDRyxRQUFRLEdBQUcsUUFDakIsR0FEdUIsQ0FBQzs7SUFDdEIsR0FBSyxDQUFDQyxZQUFZLEdBQUdILG1EQUFHO0lBUXhCLEdBQUssQ0FBNEJDLEdBQWtCLEdBQWxCQSx3REFBUSxDQUFDRyxRQUFRLEdBQTFDQyxPQUFPLEdBQWtCSixHQUFrQixDQUEzQ0ksT0FBTyxFQUFFQyxLQUFLLEdBQVdMLEdBQWtCLENBQWxDSyxLQUFLLEVBQUVDLElBQUksR0FBS04sR0FBa0IsQ0FBM0JNLElBQUk7SUFDNUIsTUFBTSxzRUFBRUMsQ0FBRzs7Ozs7Ozs7QUFDYixDQUFDO0dBWEtOLFFBQVE7O1FBU3FCRCxvREFBUTs7O0tBVHJDQyxRQUFRO0FBWWQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXRlZ29yeS9pbmRleC5qcz8yYTM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmNvbnN0IENhdGVnb3J5ID0gKCkgPT4ge1xuICBjb25zdCBHRVRfQ0FURUdPUlkgPSBncWxgXG4gICAgcXVlcnkgR2V0RG9ncyB7XG4gICAgICBkb2dzIHtcbiAgICAgICAgaWRcbiAgICAgICAgYnJlZWRcbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9ET0dTKTtcbiAgcmV0dXJuIDxkaXY+PC9kaXY+O1xufTtcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ3FsIiwidXNlUXVlcnkiLCJDYXRlZ29yeSIsIkdFVF9DQVRFR09SWSIsIkdFVF9ET0dTIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/category/index.js\n");

/***/ })

});