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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_base_axios_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/base/axios-client */ \"./api-client/base/axios-client.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! katex/dist/katex.min.css */ \"./node_modules/katex/dist/katex.min.css\");\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// import Header from '@/components/layouts/header';\n\n\n\n// import { useAuth } from '../hooks';\n// import MiddlewareAuth from '@/components/middleware/auth';\n\n\n// import ThemeManager from '@/components/template';\n\nvar _s = $RefreshSig$();\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: -200,\n        y: 0\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: 0,\n        y: -100\n    }\n};\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    // const { logout, profile, error } = useAuth();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var handleErrorAuthentication = function() {\n        logout();\n    };\n    (0,_api_base_axios_client__WEBPACK_IMPORTED_MODULE_3__.constructCallBack)(handleErrorAuthentication);\n    var permission = Component.permission;\n    var theme = Component.layout;\n    var asPath = router.asPath;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/_app.js\",\n            lineNumber: 38,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(swr__WEBPACK_IMPORTED_MODULE_4__.SWRConfig, {\n            value: {\n                fetcher: function(url) {\n                    return _api_base_axios_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(url);\n                },\n                dedupingInterval: 60 * 60 * 1000,\n                revalidateOnFocus: false,\n                shouldRetryOnError: false\n            },\n            __source: {\n                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/_app.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            },\n            __self: this\n        })\n    }));\n}\n_s(MyApp, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUM5QixFQUFvRDtBQUMzQjtBQUMrQztBQUN6QztBQUMvQixFQUFzQztBQUN0QyxFQUE2RDtBQUM1QjtBQUNNO0FBQ3ZDLEVBQW9EO0FBTzdCOztBQUV2QixHQUFLLENBQUNVLFFBQVEsR0FBRyxDQUFDO0lBQ2hCQyxNQUFNLEVBQUUsQ0FBQztRQUFDQyxPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEdBQUcsR0FBRztRQUFFQyxDQUFDLEVBQUUsQ0FBQztJQUFDLENBQUM7SUFDckNDLEtBQUssRUFBRSxDQUFDO1FBQUNILE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO0lBQUMsQ0FBQztJQUNqQ0UsSUFBSSxFQUFFLENBQUM7UUFBQ0osT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxHQUFHLEdBQUc7SUFBQyxDQUFDO0FBQ3JDLENBQUM7U0FFUUcsS0FBSyxDQUFDLEtBQXdCLEVBQUUsQ0FBQztRQUF6QkMsU0FBUyxHQUFYLEtBQXdCLENBQXRCQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBd0IsQ0FBWEEsU0FBUzs7SUFDbkMsRUFBZ0Q7SUFDaEQsR0FBSyxDQUFDQyxNQUFNLEdBQUdoQixzREFBUztJQUN4QixHQUFLLENBQUNpQix5QkFBeUIsR0FBRyxRQUNwQyxHQUQwQyxDQUFDO1FBQ3ZDQyxNQUFNO0lBQ1IsQ0FBQztJQUNEcEIseUVBQWlCLENBQUNtQix5QkFBeUI7SUFDM0MsR0FBSyxDQUFDRSxVQUFVLEdBQUdMLFNBQVMsQ0FBQ0ssVUFBVTtJQUN2QyxHQUFLLENBQUNDLEtBQUssR0FBR04sU0FBUyxDQUFDTyxNQUFNO0lBRTlCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTixNQUFNLENBQUNNLE1BQU07SUFFNUIsTUFBTSxzRUFDSDFCLHVEQUFjOzs7Ozs7O3VGQUNaRywwQ0FBUztZQUNSeUIsS0FBSyxFQUFFLENBQUM7Z0JBQ05DLE9BQU8sRUFBRSxRQUFRLENBQVBDLEdBQUcsRUFBSyxDQUFDO29CQUNqQixNQUFNLENBQUM3QixrRUFBZSxDQUFDNkIsR0FBRztnQkFDNUIsQ0FBQztnQkFDREUsZ0JBQWdCLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO2dCQUNoQ0MsaUJBQWlCLEVBQUUsS0FBSztnQkFDeEJDLGtCQUFrQixFQUFFLEtBQUs7WUFDM0IsQ0FBQzs7Ozs7Ozs7O0FBV1QsQ0FBQztHQWpDUWpCLEtBQUs7O1FBRUdiLGtEQUFTOzs7S0FGakJhLEtBQUs7QUFtQ2QsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuLy8gaW1wb3J0IEhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0cy9oZWFkZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvc0NsaWVudCwgeyBjb25zdHJ1Y3RDYWxsQmFjayB9IGZyb20gJ0AvYXBpL2Jhc2UvYXhpb3MtY2xpZW50JztcbmltcG9ydCB7IFNXUkNvbmZpZyB9IGZyb20gJ3N3cic7XG4vLyBpbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vaG9va3MnO1xuLy8gaW1wb3J0IE1pZGRsZXdhcmVBdXRoIGZyb20gJ0AvY29tcG9uZW50cy9taWRkbGV3YXJlL2F1dGgnO1xuaW1wb3J0ICdrYXRleC9kaXN0L2thdGV4Lm1pbi5jc3MnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuLy8gaW1wb3J0IFRoZW1lTWFuYWdlciBmcm9tICdAL2NvbXBvbmVudHMvdGVtcGxhdGUnO1xuaW1wb3J0IHtcbiAgQXBvbGxvQ2xpZW50LFxuICBJbk1lbW9yeUNhY2hlLFxuICBBcG9sbG9Qcm92aWRlcixcbiAgdXNlUXVlcnksXG4gIGdxbFxufSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB4OiAtMjAwLCB5OiAwIH0sXG4gIGVudGVyOiB7IG9wYWNpdHk6IDEsIHg6IDAsIHk6IDAgfSxcbiAgZXhpdDogeyBvcGFjaXR5OiAwLCB4OiAwLCB5OiAtMTAwIH1cbn07XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAvLyBjb25zdCB7IGxvZ291dCwgcHJvZmlsZSwgZXJyb3IgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGhhbmRsZUVycm9yQXV0aGVudGljYXRpb24gPSAoKSA9PiB7XG4gICAgbG9nb3V0KCk7XG4gIH07XG4gIGNvbnN0cnVjdENhbGxCYWNrKGhhbmRsZUVycm9yQXV0aGVudGljYXRpb24pO1xuICBjb25zdCBwZXJtaXNzaW9uID0gQ29tcG9uZW50LnBlcm1pc3Npb247XG4gIGNvbnN0IHRoZW1lID0gQ29tcG9uZW50LmxheW91dDtcblxuICBjb25zdCBhc1BhdGggPSByb3V0ZXIuYXNQYXRoO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNXUkNvbmZpZ1xuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgIGZldGNoZXI6ICh1cmwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBheGlvc0NsaWVudC5nZXQodXJsKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZHVwaW5nSW50ZXJ2YWw6IDYwICogNjAgKiAxMDAwLCAvLyAxaHJcbiAgICAgICAgICByZXZhbGlkYXRlT25Gb2N1czogZmFsc2UsXG4gICAgICAgICAgc2hvdWxkUmV0cnlPbkVycm9yOiBmYWxzZVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7LyogPEhlYWRlciAvPiAqL31cbiAgICAgICAgey8qIDxUaGVtZU1hbmFnZXIgdGhlbWU9e3RoZW1lfT4gKi99XG4gICAgICAgICAgey8qIDxNaWRkbGV3YXJlQXV0aCBhdXRoPXtwZXJtaXNzaW9uICE9PSAncHVibGljJ30+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17YXNQYXRofSAvPlxuICAgICAgICAgIDwvTWlkZGxld2FyZUF1dGg+ICovfVxuICAgICAgICB7LyogPC9UaGVtZU1hbmFnZXI+ICovfVxuICAgICAgPC9TV1JDb25maWc+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvc0NsaWVudCIsImNvbnN0cnVjdENhbGxCYWNrIiwiU1dSQ29uZmlnIiwidXNlUm91dGVyIiwiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsIkFwb2xsb1Byb3ZpZGVyIiwidXNlUXVlcnkiLCJncWwiLCJ2YXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ4IiwieSIsImVudGVyIiwiZXhpdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaGFuZGxlRXJyb3JBdXRoZW50aWNhdGlvbiIsImxvZ291dCIsInBlcm1pc3Npb24iLCJ0aGVtZSIsImxheW91dCIsImFzUGF0aCIsIkZyYWdtZW50IiwidmFsdWUiLCJmZXRjaGVyIiwidXJsIiwiZ2V0IiwiZGVkdXBpbmdJbnRlcnZhbCIsInJldmFsaWRhdGVPbkZvY3VzIiwic2hvdWxkUmV0cnlPbkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});