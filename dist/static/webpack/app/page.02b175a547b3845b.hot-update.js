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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datepicker */ \"(app-pages-browser)/./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ \"(app-pages-browser)/./node_modules/react-datepicker/dist/react-datepicker.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst MyForm = ()=>{\n    _s();\n    const [nameOption, setNameOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fullName, setFullName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    // const [arrivalDate, setArrivalDate] = useState(new Date());\n    const [timeOut, setTimeOut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const [timeIn, setTimeIn] = useState(\"\");\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleFormSubmit = (e)=>{\n        e.preventDefault();\n        let chatId;\n        if (nameOption === \"4. Kitchen Cleaning\" || \"5. Bathroom Cleaning\") {\n            // Set your Telegram bot token and chat ID for Cleaning option\n            const botTokenCleaning = \"6183309812:AAH-cWBHOUiXWPEyU72nlafzOojW8rhEWeI\";\n            chatId = \"-4089040065\";\n            // Send the message to the Telegram bot for Cleaning option\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"https://api.telegram.org/bot\".concat(botTokenCleaning, \"/sendMessage\"), {\n                chat_id: chatId,\n                text: createTelegramMessage()\n            }).then((response)=>{\n                console.log(response.data);\n            }).catch((error)=>{\n                console.error(error);\n            });\n        } else {}\n        // Reset the form fields after submission\n        setNameOption(\"\");\n        setFullName(\"\");\n        setDate(new Date());\n        setTimeOut(\"\");\n        setComment(\"\");\n    };\n    const createTelegramMessage = ()=>{\n        const message = \"\\n      Full Name: \".concat(fullName.toUpperCase(), \"\\n      -Type: \").concat(nameOption, \"\\n      -Date: \").concat(date.toDateString(new Date()), \"\\n      -Time: \").concat(timeOut, \"\\n      -----------------------------\\n      Comment: \").concat(comment, \"\\n    \");\n        return message;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleFormSubmit,\n            className: \"bg-white drop-shadow-2xl w-5/6 sm:w-2/3 m-auto mt-5 sm:p-8 p-5 rounded-t-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-lg sm:text-3xl text-pink-600 font-serif font-semibold mb-3\",\n                    children: \"Check In-Out & Cleaning Form\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"nameOption\",\n                            className: \"block text-black font-medium font-sans \",\n                            children: \"...\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: nameOption,\n                            onChange: (e)=>setNameOption(e.target.value),\n                            className: \"w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            required: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"please select option...\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"1. Departure\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"2. Arrival\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"3. Late Night\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"4. Kitchen Cleaning\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"5. Bathroom Cleaning\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"fullName\",\n                            className: \"block text-black font-medium font-sans \",\n                            children: \"Full Name\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"fullName\",\n                            placeholder: \"your full name...\",\n                            value: fullName,\n                            onChange: (e)=>setFullName(e.target.value),\n                            className: \"w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 115,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"date\",\n                            className: \"block text-black font-medium font-sans \",\n                            children: \"Pick Date\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 131,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_datepicker__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            id: \"date\",\n                            placeholderText: \"pick date...\",\n                            selected: date,\n                            onChange: (date)=>setDate(date),\n                            className: \"w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 134,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 130,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"timeOut\",\n                            className: \"block text-black font-medium font-sans \",\n                            children: \"Pick Time\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 145,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"time\",\n                            id: \"timeOut\",\n                            placeholder: \"pick time...\",\n                            value: timeOut,\n                            onChange: (e)=>setTimeOut(e.target.value),\n                            className: \" px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 148,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 144,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"comment\",\n                            className: \"block text-black font-medium font-sans\",\n                            children: \"Detail:\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 191,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"comment\",\n                            placeholder: \"please provide more details following the option you've selected...\",\n                            value: comment,\n                            onChange: (e)=>setComment(e.target.value),\n                            className: \" w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            rows: \"4\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 194,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 190,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"mb-5 px-4 py-2 text-white bg-blue-600 rounded hover:bg-pink-700\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 205,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-pink-700 text-center text-white drop-shadow-md p-3 mb-3 mt-3 text-xl sm:text-2xl rounded-md\",\n                    children: \"May God Bless You!\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 211,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n            lineNumber: 78,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n        lineNumber: 77,\n        columnNumber: 7\n    }, undefined);\n};\n_s(MyForm, \"Bti/7Zg9DdPlS5wjVD5RuBUAQ74=\");\n_c = MyForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyForm);\nvar _c;\n$RefreshReg$(_c, \"MyForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTXlGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3dDO0FBQ0U7QUFDVTtBQUMxQjtBQUUxQixNQUFNSSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDLElBQUlVO0lBQ3JDLDhEQUE4RDtJQUM5RCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsNENBQTRDO0lBQzVDLE1BQU0sQ0FBQ2EsU0FBU0MsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNZSxtQkFBbUIsQ0FBQ0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFFaEIsSUFBSUM7UUFDSixJQUFJZCxlQUFlLHlCQUF5Qix3QkFBd0I7WUFDbEUsOERBQThEO1lBQzlELE1BQU1lLG1CQUFtQjtZQUN6QkQsU0FBUztZQUVULDJEQUEyRDtZQUMzRGhCLDZDQUFLQSxDQUNGa0IsSUFBSSxDQUFDLCtCQUFnRCxPQUFqQkQsa0JBQWlCLGlCQUFlO2dCQUNuRUUsU0FBU0g7Z0JBQ1RJLE1BQU1DO1lBQ1IsR0FDQ0MsSUFBSSxDQUFDLENBQUNDO2dCQUNMQyxRQUFRQyxHQUFHLENBQUNGLFNBQVNHLElBQUk7WUFDM0IsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO2dCQUNOSixRQUFRSSxLQUFLLENBQUNBO1lBQ2hCO1FBQ0osT0FBTyxFQWlCTjtRQUVELHlDQUF5QztRQUN6Q3pCLGNBQWM7UUFDZEUsWUFBWTtRQUNaRSxRQUFRLElBQUlDO1FBQ1pFLFdBQVc7UUFDWEUsV0FBVztJQUNiO0lBRUEsTUFBTVMsd0JBQXdCO1FBQzVCLE1BQU1TLFVBQVUsc0JBRUw1QixPQURJRSxTQUFTMkIsV0FBVyxJQUFHLG1CQUUzQnpCLE9BREFKLFlBQVcsbUJBRVhPLE9BREFILEtBQUswQixZQUFZLENBQUMsSUFBSXhCLFNBQVEsbUJBRzVCRyxPQUZGRixTQUFRLDBEQUVFLE9BQVJFLFNBQVE7UUFFckIsT0FBT21CO0lBQ1Q7SUFFQSxxQkFDSSw4REFBQ0c7a0JBQ0MsNEVBQUNDO1lBQ0NDLFVBQVV0QjtZQUNWdUIsV0FBVTs7OEJBRVYsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFrRTs7Ozs7OzhCQUdoRiw4REFBQ0g7b0JBQUlHLFdBQVU7O3NDQUNmLDhEQUFDRTs0QkFBTUMsU0FBUTs0QkFBYUgsV0FBVTtzQ0FBMEM7Ozs7OztzQ0FHOUUsOERBQUNJOzRCQUFPQyxPQUFPdkM7NEJBRWJ3QyxVQUFVLENBQUM1QixJQUFNWCxjQUFjVyxFQUFFNkIsTUFBTSxDQUFDRixLQUFLOzRCQUM3Q0wsV0FBVTs0QkFDVlEsUUFBUTs7OENBQ1IsOERBQUNDOzhDQUFPOzs7Ozs7OENBQ1IsOERBQUNBOzhDQUFPOzs7Ozs7OENBQ1IsOERBQUNBOzhDQUFPOzs7Ozs7OENBQ1IsOERBQUNBOzhDQUFPOzs7Ozs7OENBQ1IsOERBQUNBOzhDQUFPOzs7Ozs7OENBQ1IsOERBQUNBOzhDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBZ0JaLDhEQUFDWjtvQkFBSUcsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFNQyxTQUFROzRCQUFXSCxXQUFVO3NDQUEwQzs7Ozs7O3NDQUc5RSw4REFBQ1U7NEJBQ0NDLE1BQUs7NEJBQ0xDLElBQUc7NEJBQ0hDLGFBQVk7NEJBQ1pSLE9BQU9yQzs0QkFDUHNDLFVBQVUsQ0FBQzVCLElBQU1ULFlBQVlTLEVBQUU2QixNQUFNLENBQUNGLEtBQUs7NEJBQzNDTCxXQUFVOzRCQUNWUSxRQUFROzs7Ozs7Ozs7Ozs7OEJBSVosOERBQUNYO29CQUFJRyxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQU1DLFNBQVE7NEJBQU9ILFdBQVU7c0NBQTBDOzs7Ozs7c0NBRzFFLDhEQUFDckMseURBQVVBOzRCQUNUaUQsSUFBRzs0QkFDSEUsaUJBQWdCOzRCQUNoQkMsVUFBVTdDOzRCQUNWb0MsVUFBVSxDQUFDcEMsT0FBU0MsUUFBUUQ7NEJBQzVCOEIsV0FBVTs0QkFDVlEsUUFBUTs7Ozs7Ozs7Ozs7OzhCQUlaLDhEQUFDWDtvQkFBSUcsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFNQyxTQUFROzRCQUFVSCxXQUFVO3NDQUEwQzs7Ozs7O3NDQUc3RSw4REFBQ1U7NEJBQ0NDLE1BQUs7NEJBQ0xDLElBQUc7NEJBQ0hDLGFBQVk7NEJBQ1pSLE9BQU9oQzs0QkFDUGlDLFVBQVUsQ0FBQzVCLElBQU1KLFdBQVdJLEVBQUU2QixNQUFNLENBQUNGLEtBQUs7NEJBQzFDTCxXQUFVOzRCQUNWUSxRQUFROzs7Ozs7Ozs7Ozs7OEJBbUNaLDhEQUFDWDtvQkFBSUcsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFNQyxTQUFROzRCQUFVSCxXQUFVO3NDQUF5Qzs7Ozs7O3NDQUc1RSw4REFBQ2dCOzRCQUNDSixJQUFHOzRCQUNIQyxhQUFZOzRCQUNaUixPQUFPOUI7NEJBQ1ArQixVQUFVLENBQUM1QixJQUFNRixXQUFXRSxFQUFFNkIsTUFBTSxDQUFDRixLQUFLOzRCQUMxQ0wsV0FBVTs0QkFDVmlCLE1BQUs7NEJBQ0xULFFBQVE7Ozs7Ozs7Ozs7Ozs4QkFJWiw4REFBQ1U7b0JBQ0NQLE1BQUs7b0JBQ0xYLFdBQVU7OEJBQ1g7Ozs7Ozs4QkFHRCw4REFBQ0g7b0JBQUlHLFdBQVU7OEJBQWlHOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkxSDtHQWhOTW5DO0tBQUFBO0FBa05OLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXlGb3JtLmpzeD9mNGEzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IE15Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbbmFtZU9wdGlvbiwgc2V0TmFtZU9wdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZnVsbE5hbWUsIHNldEZ1bGxOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIC8vIGNvbnN0IFthcnJpdmFsRGF0ZSwgc2V0QXJyaXZhbERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW3RpbWVPdXQsIHNldFRpbWVPdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy8gY29uc3QgW3RpbWVJbiwgc2V0VGltZUluXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgY2hhdElkO1xyXG4gICAgaWYgKG5hbWVPcHRpb24gPT09IFwiNC4gS2l0Y2hlbiBDbGVhbmluZ1wiIHx8IFwiNS4gQmF0aHJvb20gQ2xlYW5pbmdcIikge1xyXG4gICAgICAvLyBTZXQgeW91ciBUZWxlZ3JhbSBib3QgdG9rZW4gYW5kIGNoYXQgSUQgZm9yIENsZWFuaW5nIG9wdGlvblxyXG4gICAgICBjb25zdCBib3RUb2tlbkNsZWFuaW5nID0gXCI2MTgzMzA5ODEyOkFBSC1jV0JIT1VpWFdQRXlVNzJubGFmek9valc4cmhFV2VJXCI7XHJcbiAgICAgIGNoYXRJZCA9IFwiLTQwODkwNDAwNjVcIjtcclxuICAgICAgXHJcbiAgICAgIC8vIFNlbmQgdGhlIG1lc3NhZ2UgdG8gdGhlIFRlbGVncmFtIGJvdCBmb3IgQ2xlYW5pbmcgb3B0aW9uXHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3Qke2JvdFRva2VuQ2xlYW5pbmd9L3NlbmRNZXNzYWdlYCwge1xyXG4gICAgICAgICAgY2hhdF9pZDogY2hhdElkLFxyXG4gICAgICAgICAgdGV4dDogY3JlYXRlVGVsZWdyYW1NZXNzYWdlKCksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTZXQgeW91ciBUZWxlZ3JhbSBib3QgdG9rZW4gYW5kIGNoYXQgSURcclxuICAgICAgY29uc3QgYm90VG9rZW4gPSBcIjY1MjI3Mjk5MTU6QUFFbjN4TzBnRHB6Y1VQem54NGdld2hjVDU2YlVLS1RybmNcIjtcclxuICAgICAgY2hhdElkID0gXCItMTAwMjA3MjA3MjM1MlwiO1xyXG4gICAgICBcclxuICAgICAgLy8gU2VuZCB0aGUgbWVzc2FnZSB0byB0aGUgVGVsZWdyYW0gYm90XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3Qke2JvdFRva2VufS9zZW5kTWVzc2FnZWAsIHtcclxuICAgICAgICAgIGNoYXRfaWQ6IGNoYXRJZCxcclxuICAgICAgICAgIHRleHQ6IGNyZWF0ZVRlbGVncmFtTWVzc2FnZSgpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlc2V0IHRoZSBmb3JtIGZpZWxkcyBhZnRlciBzdWJtaXNzaW9uXHJcbiAgICBzZXROYW1lT3B0aW9uKFwiXCIpO1xyXG4gICAgc2V0RnVsbE5hbWUoXCJcIik7XHJcbiAgICBzZXREYXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgc2V0VGltZU91dChcIlwiKTtcclxuICAgIHNldENvbW1lbnQoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlVGVsZWdyYW1NZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGBcclxuICAgICAgRnVsbCBOYW1lOiAke2Z1bGxOYW1lLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgIC1UeXBlOiAke25hbWVPcHRpb259XHJcbiAgICAgIC1EYXRlOiAke2RhdGUudG9EYXRlU3RyaW5nKG5ldyBEYXRlKCkpfVxyXG4gICAgICAtVGltZTogJHt0aW1lT3V0fVxyXG4gICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICBDb21tZW50OiAke2NvbW1lbnR9XHJcbiAgICBgO1xyXG4gICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBkcm9wLXNoYWRvdy0yeGwgdy01LzYgc206dy0yLzMgbS1hdXRvIG10LTUgc206cC04IHAtNSByb3VuZGVkLXQtMnhsXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBzbTp0ZXh0LTN4bCB0ZXh0LXBpbmstNjAwIGZvbnQtc2VyaWYgZm9udC1zZW1pYm9sZCBtYi0zXCI+XHJcbiAgICAgICAgICAgIENoZWNrIEluLU91dCAmIENsZWFuaW5nIEZvcm1cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZU9wdGlvblwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgZm9udC1tZWRpdW0gZm9udC1zYW5zIFwiPlxyXG4gICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17bmFtZU9wdGlvbn1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWVPcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgbXQtMSB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+cGxlYXNlIHNlbGVjdCBvcHRpb24uLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uPjEuIERlcGFydHVyZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+Mi4gQXJyaXZhbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+My4gTGF0ZSBOaWdodDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+NC4gS2l0Y2hlbiBDbGVhbmluZzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+NS4gQmF0aHJvb20gQ2xlYW5pbmc8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lT3B0aW9uXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIERlcGFydHVyZSBvciBBcnJpdmFsP1xyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lT3B0aW9uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZU9wdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWVPcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgbXQtMSB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmdWxsTmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgZm9udC1tZWRpdW0gZm9udC1zYW5zIFwiPlxyXG4gICAgICAgICAgICAgIEZ1bGwgTmFtZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJmdWxsTmFtZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyIGZ1bGwgbmFtZS4uLlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RnVsbE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgbXQtMSB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkYXRlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayBmb250LW1lZGl1bSBmb250LXNhbnMgXCI+XHJcbiAgICAgICAgICAgICAgUGljayBEYXRlXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgaWQ9XCJkYXRlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9XCJwaWNrIGRhdGUuLi5cIlxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtkYXRlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0RGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIG10LTEgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGltZU91dFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgZm9udC1tZWRpdW0gZm9udC1zYW5zIFwiPlxyXG4gICAgICAgICAgICAgIFBpY2sgVGltZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGltZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJ0aW1lT3V0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBpY2sgdGltZS4uLlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RpbWVPdXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaW1lT3V0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgcHgtMyBweS0yIG10LTEgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIDxociBjbGFzc05hbWU9XCJtLWF1dG8gdy02NCBoLXB4IGJnLWdyZWVuLTkwMCBib3JkZXItMFwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byB3LWZ1bGwgdGV4dC1tZCBmb250LXNhbnMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPkFycml2YWwgT3B0aW9uPC9kaXY+XHJcbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibS1hdXRvIHctNjQgaC1weCBiZy1ncmVlbi05MDAgYm9yZGVyLTBcIiAvPiAqL31cclxuXHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYXJyaXZhbERhdGVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgQXJyaXZhbCBEYXRlXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgaWQ9XCJhcnJpdmFsRGF0ZVwiXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2Fycml2YWxEYXRlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0QXJyaXZhbERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBtdC0xIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aW1lSW5cIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgQXJyaXZhbCBUaW1lXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0aW1lXCJcclxuICAgICAgICAgICAgICBpZD1cInRpbWVJblwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RpbWVJbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpbWVJbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBtdC0xIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tbWVudFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgZm9udC1tZWRpdW0gZm9udC1zYW5zXCI+XHJcbiAgICAgICAgICAgICAgRGV0YWlsOlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBpZD1cImNvbW1lbnRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGxlYXNlIHByb3ZpZGUgbW9yZSBkZXRhaWxzIGZvbGxvd2luZyB0aGUgb3B0aW9uIHlvdSd2ZSBzZWxlY3RlZC4uLlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy1mdWxsIHB4LTMgcHktMiBtdC0xIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgcm93cz1cIjRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNSBweC00IHB5LTIgdGV4dC13aGl0ZSBiZy1ibHVlLTYwMCByb3VuZGVkIGhvdmVyOmJnLXBpbmstNzAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcGluay03MDAgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBkcm9wLXNoYWRvdy1tZCBwLTMgbWItMyBtdC0zIHRleHQteGwgc206dGV4dC0yeGwgcm91bmRlZC1tZFwiPk1heSBHb2QgQmxlc3MgWW91ITwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Rm9ybTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEYXRlUGlja2VyIiwiYXhpb3MiLCJNeUZvcm0iLCJuYW1lT3B0aW9uIiwic2V0TmFtZU9wdGlvbiIsImZ1bGxOYW1lIiwic2V0RnVsbE5hbWUiLCJkYXRlIiwic2V0RGF0ZSIsIkRhdGUiLCJ0aW1lT3V0Iiwic2V0VGltZU91dCIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiaGFuZGxlRm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNoYXRJZCIsImJvdFRva2VuQ2xlYW5pbmciLCJwb3N0IiwiY2hhdF9pZCIsInRleHQiLCJjcmVhdGVUZWxlZ3JhbU1lc3NhZ2UiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJib3RUb2tlbiIsIm1lc3NhZ2UiLCJ0b1VwcGVyQ2FzZSIsInRvRGF0ZVN0cmluZyIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImgyIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwib3B0aW9uIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsInBsYWNlaG9sZGVyVGV4dCIsInNlbGVjdGVkIiwidGV4dGFyZWEiLCJyb3dzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MyForm.jsx\n"));

/***/ })

});