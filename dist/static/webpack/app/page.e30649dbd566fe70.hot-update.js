"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/MyForm.jsx":
/*!*******************************!*\
  !*** ./components/MyForm.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datepicker */ \"(app-pages-browser)/./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ \"(app-pages-browser)/./node_modules/react-datepicker/dist/react-datepicker.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst MyForm = ()=>{\n    _s();\n    const [nameOption, setNameOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fullName, setFullName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    // const [arrivalDate, setArrivalDate] = useState(new Date());\n    const [timeOut, setTimeOut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const [timeIn, setTimeIn] = useState(\"\");\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleFormSubmit = (e)=>{\n        e.preventDefault();\n        // Format the data to be sent to the Telegram bot\n        const message = \"\\n    Full Name: \".concat(fullName.toUpperCase(), \"\\n     -Type: \").concat(nameOption, \"\\n     -Date: \").concat(date.toDateString(new Date()), \"\\n     -Time: \").concat(timeOut, \"\\n     -----------------------------\\n    Comment: \").concat(comment, \"\\n    \");\n        // Arrival Date: ${arrivalDate.toDateString(new Date())}\n        // Time: ${timeIn}\n        // Set your Telegram bot token and chat ID\n        const botToken = \"6522729915:AAEn3xO0gDpzcUPznx4gewhcT56bUKKTrnc\";\n        const chatId = \"-1002072072352\";\n        // Send the message to the Telegram bot\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"https://api.telegram.org/bot\".concat(botToken, \"/sendMessage\"), {\n            chat_id: chatId,\n            text: message\n        }).then((response)=>{\n            // Handle the response if needed\n            console.log(response.data);\n        }).catch((error)=>{\n            // Handle errors if any\n            console.error(error);\n        });\n        // Reset the form fields after submission\n        setNameOption(\"\");\n        setFullName(\"\");\n        setDate(new Date());\n        // setArrivalDate(new Date());\n        setTimeOut(\"\");\n        // setTimeIn(\"\");\n        setComment(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleFormSubmit,\n            className: \"bg-pink-400 drop-shadow-xl w-5/6 sm:w-2/3 m-auto mt-5 p-5 rounded-t-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl sm:text-2xl text-green-800 font-serif font-semibold mb-3\",\n                    children: \"Check In-Out Form\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"nameOption\",\n                            className: \"block text-black font-medium font-sans \",\n                            children: \"Departure, Arrival or Late?\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: nameOption,\n                            onChange: (e)=>setNameOption(e.target.value),\n                            className: \"w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            required: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"please select option...\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"1. Departure\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"2. Arrival\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"3. Late Night\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"fullName\",\n                            className: \"block text-black font-medium font-sans \",\n                            children: \"Full Name\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"fullName\",\n                            placeholder: \"your full name...\",\n                            value: fullName,\n                            onChange: (e)=>setFullName(e.target.value),\n                            className: \"w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"date\",\n                            className: \"block text-black font-medium font-sans \",\n                            children: \"Pick Date\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_datepicker__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            id: \"date\",\n                            placeholderText: \"pick date...\",\n                            selected: date,\n                            onChange: (date)=>setDate(date),\n                            className: \"w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"timeOut\",\n                            className: \"block text-black font-medium font-sans \",\n                            children: \"Pick Time\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"time\",\n                            id: \"timeOut\",\n                            placeholder: \"pick time...\",\n                            value: timeOut,\n                            onChange: (e)=>setTimeOut(e.target.value),\n                            className: \" px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 130,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 126,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"comment\",\n                            className: \"block text-black font-medium font-sans\",\n                            children: \"Detail:\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 173,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"comment\",\n                            placeholder: \"please provide more details following the option you've selected...\",\n                            value: comment,\n                            onChange: (e)=>setComment(e.target.value),\n                            className: \" w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            rows: \"4\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 176,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 172,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"mb-5 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 187,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-green-700 text-center text-pink-700 shadow-md p-5 text-2xl\",\n                    children: \"May God Bless You!\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 193,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n            lineNumber: 62,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n        lineNumber: 61,\n        columnNumber: 7\n    }, undefined);\n};\n_s(MyForm, \"Bti/7Zg9DdPlS5wjVD5RuBUAQ74=\");\n_c = MyForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyForm);\nvar _c;\n$RefreshReg$(_c, \"MyForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTXlGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3dDO0FBQ0U7QUFDVTtBQUMxQjtBQUUxQixNQUFNSSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDLElBQUlVO0lBQ3JDLDhEQUE4RDtJQUM5RCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsNENBQTRDO0lBQzVDLE1BQU0sQ0FBQ2EsU0FBU0MsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNZSxtQkFBbUIsQ0FBQ0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFFaEIsaURBQWlEO1FBQ2pELE1BQU1DLFVBQVUsb0JBRU5kLE9BREdFLFNBQVNhLFdBQVcsSUFBRyxrQkFFMUJYLE9BREFKLFlBQVcsa0JBRVhPLE9BREFILEtBQUtZLFlBQVksQ0FBQyxJQUFJVixTQUFRLGtCQUc3QkcsT0FGREYsU0FBUSx1REFFQyxPQUFSRSxTQUFRO1FBRW5CLHdEQUF3RDtRQUN2RCxrQkFBa0I7UUFFbkIsMENBQTBDO1FBQzFDLE1BQU1RLFdBQVc7UUFDakIsTUFBTUMsU0FBUztRQUVmLHVDQUF1QztRQUN2Q3BCLDZDQUFLQSxDQUNGcUIsSUFBSSxDQUFDLCtCQUF3QyxPQUFURixVQUFTLGlCQUFlO1lBQzNERyxTQUFTRjtZQUNURyxNQUFNUDtRQUNSLEdBQ0NRLElBQUksQ0FBQyxDQUFDQztZQUNMLGdDQUFnQztZQUNoQ0MsUUFBUUMsR0FBRyxDQUFDRixTQUFTRyxJQUFJO1FBQzNCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOLHVCQUF1QjtZQUN2QkosUUFBUUksS0FBSyxDQUFDQTtRQUNoQjtRQUVGLHlDQUF5QztRQUN6QzNCLGNBQWM7UUFDZEUsWUFBWTtRQUNaRSxRQUFRLElBQUlDO1FBQ1osOEJBQThCO1FBQzlCRSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCRSxXQUFXO0lBQ2I7SUFFQSxxQkFDSSw4REFBQ21CO2tCQUNDLDRFQUFDQztZQUNDQyxVQUFVcEI7WUFDVnFCLFdBQVU7OzhCQUVWLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBbUU7Ozs7Ozs4QkFHakYsOERBQUNIO29CQUFJRyxXQUFVOztzQ0FDZiw4REFBQ0U7NEJBQU1DLFNBQVE7NEJBQWFILFdBQVU7c0NBQTBDOzs7Ozs7c0NBRzlFLDhEQUFDSTs0QkFBT0MsT0FBT3JDOzRCQUVic0MsVUFBVSxDQUFDMUIsSUFBTVgsY0FBY1csRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDN0NMLFdBQVU7NEJBQ1ZRLFFBQVE7OzhDQUNSLDhEQUFDQzs4Q0FBTzs7Ozs7OzhDQUNSLDhEQUFDQTs4Q0FBTzs7Ozs7OzhDQUNSLDhEQUFDQTs4Q0FBTzs7Ozs7OzhDQUNSLDhEQUFDQTs4Q0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQWdCWiw4REFBQ1o7b0JBQUlHLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBTUMsU0FBUTs0QkFBV0gsV0FBVTtzQ0FBMEM7Ozs7OztzQ0FHOUUsOERBQUNVOzRCQUNDQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxhQUFZOzRCQUNaUixPQUFPbkM7NEJBQ1BvQyxVQUFVLENBQUMxQixJQUFNVCxZQUFZUyxFQUFFMkIsTUFBTSxDQUFDRixLQUFLOzRCQUMzQ0wsV0FBVTs0QkFDVlEsUUFBUTs7Ozs7Ozs7Ozs7OzhCQUlaLDhEQUFDWDtvQkFBSUcsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFNQyxTQUFROzRCQUFPSCxXQUFVO3NDQUEwQzs7Ozs7O3NDQUcxRSw4REFBQ25DLHlEQUFVQTs0QkFDVCtDLElBQUc7NEJBQ0hFLGlCQUFnQjs0QkFDaEJDLFVBQVUzQzs0QkFDVmtDLFVBQVUsQ0FBQ2xDLE9BQVNDLFFBQVFEOzRCQUM1QjRCLFdBQVU7NEJBQ1ZRLFFBQVE7Ozs7Ozs7Ozs7Ozs4QkFJWiw4REFBQ1g7b0JBQUlHLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBTUMsU0FBUTs0QkFBVUgsV0FBVTtzQ0FBMEM7Ozs7OztzQ0FHN0UsOERBQUNVOzRCQUNDQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxhQUFZOzRCQUNaUixPQUFPOUI7NEJBQ1ArQixVQUFVLENBQUMxQixJQUFNSixXQUFXSSxFQUFFMkIsTUFBTSxDQUFDRixLQUFLOzRCQUMxQ0wsV0FBVTs0QkFDVlEsUUFBUTs7Ozs7Ozs7Ozs7OzhCQW1DWiw4REFBQ1g7b0JBQUlHLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBTUMsU0FBUTs0QkFBVUgsV0FBVTtzQ0FBeUM7Ozs7OztzQ0FHNUUsOERBQUNnQjs0QkFDQ0osSUFBRzs0QkFDSEMsYUFBWTs0QkFDWlIsT0FBTzVCOzRCQUNQNkIsVUFBVSxDQUFDMUIsSUFBTUYsV0FBV0UsRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDMUNMLFdBQVU7NEJBQ1ZpQixNQUFLOzRCQUNMVCxRQUFROzs7Ozs7Ozs7Ozs7OEJBSVosOERBQUNVO29CQUNDUCxNQUFLO29CQUNMWCxXQUFVOzhCQUNYOzs7Ozs7OEJBR0QsOERBQUNIO29CQUFJRyxXQUFVOzhCQUFnRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekY7R0E5TE1qQztLQUFBQTtBQWdNTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL015Rm9ybS5qc3g/ZjRhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBNeUZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW25hbWVPcHRpb24sIHNldE5hbWVPcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Z1bGxOYW1lLCBzZXRGdWxsTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICAvLyBjb25zdCBbYXJyaXZhbERhdGUsIHNldEFycml2YWxEYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIGNvbnN0IFt0aW1lT3V0LCBzZXRUaW1lT3V0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIGNvbnN0IFt0aW1lSW4sIHNldFRpbWVJbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gRm9ybWF0IHRoZSBkYXRhIHRvIGJlIHNlbnQgdG8gdGhlIFRlbGVncmFtIGJvdFxyXG4gICAgY29uc3QgbWVzc2FnZSA9IGBcclxuICAgIEZ1bGwgTmFtZTogJHtmdWxsTmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgIC1UeXBlOiAke25hbWVPcHRpb259XHJcbiAgICAgLURhdGU6ICR7ZGF0ZS50b0RhdGVTdHJpbmcobmV3IERhdGUoKSl9XHJcbiAgICAgLVRpbWU6ICR7dGltZU91dH1cclxuICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgQ29tbWVudDogJHtjb21tZW50fVxyXG4gICAgYDtcclxuICAgIC8vIEFycml2YWwgRGF0ZTogJHthcnJpdmFsRGF0ZS50b0RhdGVTdHJpbmcobmV3IERhdGUoKSl9XHJcbiAgICAgLy8gVGltZTogJHt0aW1lSW59XHJcblxyXG4gICAgLy8gU2V0IHlvdXIgVGVsZWdyYW0gYm90IHRva2VuIGFuZCBjaGF0IElEXHJcbiAgICBjb25zdCBib3RUb2tlbiA9IFwiNjUyMjcyOTkxNTpBQUVuM3hPMGdEcHpjVVB6bng0Z2V3aGNUNTZiVUtLVHJuY1wiO1xyXG4gICAgY29uc3QgY2hhdElkID0gXCItMTAwMjA3MjA3MjM1MlwiO1xyXG5cclxuICAgIC8vIFNlbmQgdGhlIG1lc3NhZ2UgdG8gdGhlIFRlbGVncmFtIGJvdFxyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3Qke2JvdFRva2VufS9zZW5kTWVzc2FnZWAsIHtcclxuICAgICAgICBjaGF0X2lkOiBjaGF0SWQsXHJcbiAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBpZiBuZWVkZWRcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvcnMgaWYgYW55XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIFJlc2V0IHRoZSBmb3JtIGZpZWxkcyBhZnRlciBzdWJtaXNzaW9uXHJcbiAgICBzZXROYW1lT3B0aW9uKFwiXCIpO1xyXG4gICAgc2V0RnVsbE5hbWUoXCJcIik7XHJcbiAgICBzZXREYXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgLy8gc2V0QXJyaXZhbERhdGUobmV3IERhdGUoKSk7XHJcbiAgICBzZXRUaW1lT3V0KFwiXCIpO1xyXG4gICAgLy8gc2V0VGltZUluKFwiXCIpO1xyXG4gICAgc2V0Q29tbWVudChcIlwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXBpbmstNDAwIGRyb3Atc2hhZG93LXhsIHctNS82IHNtOnctMi8zIG0tYXV0byBtdC01IHAtNSByb3VuZGVkLXQtMnhsXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBzbTp0ZXh0LTJ4bCB0ZXh0LWdyZWVuLTgwMCBmb250LXNlcmlmIGZvbnQtc2VtaWJvbGQgbWItM1wiPlxyXG4gICAgICAgICAgICBDaGVjayBJbi1PdXQgRm9ybVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lT3B0aW9uXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayBmb250LW1lZGl1bSBmb250LXNhbnMgXCI+XHJcbiAgICAgICAgICAgICAgRGVwYXJ0dXJlLCBBcnJpdmFsIG9yIExhdGU/XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtuYW1lT3B0aW9ufVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZU9wdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBtdC0xIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj5wbGVhc2Ugc2VsZWN0IG9wdGlvbi4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+MS4gRGVwYXJ0dXJlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj4yLiBBcnJpdmFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj4zLiBMYXRlIE5pZ2h0PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZU9wdGlvblwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICBEZXBhcnR1cmUgb3IgQXJyaXZhbD9cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwibmFtZU9wdGlvblwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWVPcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lT3B0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIG10LTEgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZnVsbE5hbWVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIGZvbnQtbWVkaXVtIGZvbnQtc2FucyBcIj5cclxuICAgICAgICAgICAgICBGdWxsIE5hbWVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZnVsbE5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieW91ciBmdWxsIG5hbWUuLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmdWxsTmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZ1bGxOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIG10LTEgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgZm9udC1tZWRpdW0gZm9udC1zYW5zIFwiPlxyXG4gICAgICAgICAgICAgIFBpY2sgRGF0ZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwicGljayBkYXRlLi4uXCJcclxuICAgICAgICAgICAgICBzZWxlY3RlZD17ZGF0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBtdC0xIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpbWVPdXRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIGZvbnQtbWVkaXVtIGZvbnQtc2FucyBcIj5cclxuICAgICAgICAgICAgICBQaWNrIFRpbWVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRpbWVcIlxyXG4gICAgICAgICAgICAgIGlkPVwidGltZU91dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwaWNrIHRpbWUuLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aW1lT3V0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGltZU91dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHB4LTMgcHktMiBtdC0xIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiA8aHIgY2xhc3NOYW1lPVwibS1hdXRvIHctNjQgaC1weCBiZy1ncmVlbi05MDAgYm9yZGVyLTBcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gdy1mdWxsIHRleHQtbWQgZm9udC1zYW5zIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5BcnJpdmFsIE9wdGlvbjwvZGl2PlxyXG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm0tYXV0byB3LTY0IGgtcHggYmctZ3JlZW4tOTAwIGJvcmRlci0wXCIgLz4gKi99XHJcblxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFycml2YWxEYXRlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIEFycml2YWwgRGF0ZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgIGlkPVwiYXJyaXZhbERhdGVcIlxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXthcnJpdmFsRGF0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldEFycml2YWxEYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgbXQtMSB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGltZUluXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIEFycml2YWwgVGltZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGltZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJ0aW1lSW5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aW1lSW59XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaW1lSW4oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgbXQtMSB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbW1lbnRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIGZvbnQtbWVkaXVtIGZvbnQtc2Fuc1wiPlxyXG4gICAgICAgICAgICAgIERldGFpbDpcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgaWQ9XCJjb21tZW50XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBsZWFzZSBwcm92aWRlIG1vcmUgZGV0YWlscyBmb2xsb3dpbmcgdGhlIG9wdGlvbiB5b3UndmUgc2VsZWN0ZWQuLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctZnVsbCBweC0zIHB5LTIgbXQtMSB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTUgcHgtNCBweS0yIHRleHQtd2hpdGUgYmctYmx1ZS01MDAgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTYwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTcwMCB0ZXh0LWNlbnRlciB0ZXh0LXBpbmstNzAwIHNoYWRvdy1tZCBwLTUgdGV4dC0yeGxcIj5NYXkgR29kIEJsZXNzIFlvdSE8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRGF0ZVBpY2tlciIsImF4aW9zIiwiTXlGb3JtIiwibmFtZU9wdGlvbiIsInNldE5hbWVPcHRpb24iLCJmdWxsTmFtZSIsInNldEZ1bGxOYW1lIiwiZGF0ZSIsInNldERhdGUiLCJEYXRlIiwidGltZU91dCIsInNldFRpbWVPdXQiLCJjb21tZW50Iiwic2V0Q29tbWVudCIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtZXNzYWdlIiwidG9VcHBlckNhc2UiLCJ0b0RhdGVTdHJpbmciLCJib3RUb2tlbiIsImNoYXRJZCIsInBvc3QiLCJjaGF0X2lkIiwidGV4dCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImgyIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwib3B0aW9uIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsInBsYWNlaG9sZGVyVGV4dCIsInNlbGVjdGVkIiwidGV4dGFyZWEiLCJyb3dzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MyForm.jsx\n"));

/***/ })

});