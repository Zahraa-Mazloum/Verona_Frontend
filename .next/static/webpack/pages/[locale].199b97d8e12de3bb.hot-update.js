"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[locale]",{

/***/ "./components/CallAction/action-style.js":
/*!***********************************************!*\
  !*** ./components/CallAction/action-style.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tss-react/mui */ \"./node_modules/tss-react/esm/mui.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n\n\n\nvar useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(function (theme) {\n  var _btncontainer;\n\n  return {\n    root: {\n      position: 'relative'\n    },\n    background: {\n      fill: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.darken)(theme.palette.primary.light, 0.8) : (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.lighten)(theme.palette.primary.light, 0.8),\n      width: 560,\n      height: 560,\n      top: theme.spacing(-50),\n      left: '20%',\n      position: 'absolute',\n      transform: 'scale(3)',\n      zIndex: -1\n    },\n    btncontainer: (_btncontainer = {\n      position: 'relative',\n      display: 'inline-block',\n      overflow: 'hidden',\n      borderRadius: 25,\n      transition: 'transform 0.3s, box-shadow 0.3s',\n      cursor: 'pointer',\n      '&:hover': {\n        transform: 'perspective(1000px) rotateY(180deg)',\n        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'\n      },\n      '& > *': {\n        position: 'relative'\n      },\n      background: '#f16c21',\n      color: 'white',\n      textDecoration: 'none',\n      paddingTop: '7%',\n      width: '100%'\n    }, (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_btncontainer, theme.breakpoints.up('md'), {\n      width: 240,\n      height: 64,\n      fontSize: 20\n    }), (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_btncontainer, theme.breakpoints.down('lg'), {\n      margin: '0 auto'\n    }), _btncontainer),\n    rightIcon: {\n      transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none',\n      fontSize: '20px',\n      color: 'white',\n      textAlign: 'center',\n      marginTop: '3%',\n      marginLeft: '3%'\n    },\n    btninv: {\n      textDecoration: 'none',\n      color: 'white',\n      paddingLeft: '5px'\n    }\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbGxBY3Rpb24vYWN0aW9uLXN0eWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1HLFNBQVMsR0FBR0gseURBQVUsQ0FBQyxVQUFDSSxLQUFEO0VBQUE7O0VBQUEsT0FBWTtJQUN2Q0MsSUFBSSxFQUFFO01BQ0pDLFFBQVEsRUFBRTtJQUROLENBRGlDO0lBSXZDQyxVQUFVLEVBQUU7TUFDVkMsSUFBSSxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsSUFBZCxLQUF1QixNQUF2QixHQUFnQ1IsNERBQU0sQ0FBQ0UsS0FBSyxDQUFDSyxPQUFOLENBQWNFLE9BQWQsQ0FBc0JDLEtBQXZCLEVBQThCLEdBQTlCLENBQXRDLEdBQTJFWCw2REFBTyxDQUFDRyxLQUFLLENBQUNLLE9BQU4sQ0FBY0UsT0FBZCxDQUFzQkMsS0FBdkIsRUFBOEIsR0FBOUIsQ0FEOUU7TUFFVkMsS0FBSyxFQUFFLEdBRkc7TUFHVkMsTUFBTSxFQUFFLEdBSEU7TUFJVkMsR0FBRyxFQUFFWCxLQUFLLENBQUNZLE9BQU4sQ0FBYyxDQUFDLEVBQWYsQ0FKSztNQUtWQyxJQUFJLEVBQUUsS0FMSTtNQU1WWCxRQUFRLEVBQUUsVUFOQTtNQU9WWSxTQUFTLEVBQUUsVUFQRDtNQVFWQyxNQUFNLEVBQUUsQ0FBQztJQVJDLENBSjJCO0lBY3ZDQyxZQUFZO01BQ1ZkLFFBQVEsRUFBRSxVQURBO01BRVZlLE9BQU8sRUFBRSxjQUZDO01BR1ZDLFFBQVEsRUFBRSxRQUhBO01BSVZDLFlBQVksRUFBRSxFQUpKO01BS1ZDLFVBQVUsRUFBRSxpQ0FMRjtNQU1WQyxNQUFNLEVBQUUsU0FORTtNQU9WLFdBQVc7UUFDVFAsU0FBUyxFQUFFLHFDQURGO1FBRVRRLFNBQVMsRUFBRTtNQUZGLENBUEQ7TUFXVixTQUFTO1FBQ1BwQixRQUFRLEVBQUU7TUFESCxDQVhDO01BY1ZDLFVBQVUsRUFBRSxTQWRGO01BZVZvQixLQUFLLEVBQUUsT0FmRztNQWdCVkMsY0FBYyxFQUFFLE1BaEJOO01BaUJWQyxVQUFVLEVBQUUsSUFqQkY7TUFrQlZoQixLQUFLLEVBQUU7SUFsQkcseU1BbUJUVCxLQUFLLENBQUMwQixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQW5CUyxFQW1Cb0I7TUFDNUJsQixLQUFLLEVBQUUsR0FEcUI7TUFFNUJDLE1BQU0sRUFBRSxFQUZvQjtNQUc1QmtCLFFBQVEsRUFBRTtJQUhrQixDQW5CcEIseU1Bd0JUNUIsS0FBSyxDQUFDMEIsV0FBTixDQUFrQkcsSUFBbEIsQ0FBdUIsSUFBdkIsQ0F4QlMsRUF3QnNCO01BQzlCQyxNQUFNLEVBQUU7SUFEc0IsQ0F4QnRCLGlCQWQyQjtJQTBDdkNDLFNBQVMsRUFBRTtNQUNUakIsU0FBUyxFQUFFZCxLQUFLLENBQUNnQyxTQUFOLEtBQW9CLEtBQXBCLEdBQTRCLGdCQUE1QixHQUErQyxNQURqRDtNQUVUSixRQUFRLEVBQUUsTUFGRDtNQUdUTCxLQUFLLEVBQUUsT0FIRTtNQUlUVSxTQUFTLEVBQUUsUUFKRjtNQUtUQyxTQUFTLEVBQUUsSUFMRjtNQU1UQyxVQUFVLEVBQUU7SUFOSCxDQTFDNEI7SUFrRHZDQyxNQUFNLEVBQUU7TUFDTlosY0FBYyxFQUFFLE1BRFY7TUFFTkQsS0FBSyxFQUFFLE9BRkQ7TUFHTmMsV0FBVyxFQUFFO0lBSFA7RUFsRCtCLENBQVo7QUFBQSxDQUFELENBQTVCO0FBeURBLCtEQUFldEMsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhbGxBY3Rpb24vYWN0aW9uLXN0eWxlLmpzPzA5YTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ3Rzcy1yZWFjdC9tdWknO1xuaW1wb3J0IHsgbGlnaHRlbiwgZGFya2VuIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICBiYWNrZ3JvdW5kOiB7XG4gICAgZmlsbDogdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaycgPyBkYXJrZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LCAwLjgpIDogbGlnaHRlbih0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQsIDAuOCksXG4gICAgd2lkdGg6IDU2MCxcbiAgICBoZWlnaHQ6IDU2MCxcbiAgICB0b3A6IHRoZW1lLnNwYWNpbmcoLTUwKSxcbiAgICBsZWZ0OiAnMjAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgzKScsXG4gICAgekluZGV4OiAtMSxcbiAgfSxcbiAgYnRuY29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGJvcmRlclJhZGl1czogMjUsXG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3MnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgdHJhbnNmb3JtOiAncGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDE4MGRlZyknLFxuICAgICAgYm94U2hhZG93OiAnMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMyknLFxuICAgIH0sXG4gICAgJyYgPiAqJzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiAnI2YxNmMyMScsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBwYWRkaW5nVG9wOiAnNyUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgd2lkdGg6IDI0MCxcbiAgICAgIGhlaWdodDogNjQsXG4gICAgICBmb250U2l6ZTogMjAsXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbGcnKV06IHtcbiAgICAgIG1hcmdpbjogJzAgYXV0bydcbiAgICB9XG4gIH0sXG4gIHJpZ2h0SWNvbjoge1xuICAgIHRyYW5zZm9ybTogdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/ICdyb3RhdGUoMTgwZGVnKScgOiAnbm9uZScsXG4gICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG1hcmdpblRvcDogJzMlJyxcbiAgICBtYXJnaW5MZWZ0OiAnMyUnLFxuICB9LFxuICBidG5pbnY6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIHBhZGRpbmdMZWZ0OiAnNXB4J1xuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlcztcbiJdLCJuYW1lcyI6WyJtYWtlU3R5bGVzIiwibGlnaHRlbiIsImRhcmtlbiIsInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsInBvc2l0aW9uIiwiYmFja2dyb3VuZCIsImZpbGwiLCJwYWxldHRlIiwibW9kZSIsInByaW1hcnkiLCJsaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwic3BhY2luZyIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJidG5jb250YWluZXIiLCJkaXNwbGF5Iiwib3ZlcmZsb3ciLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2l0aW9uIiwiY3Vyc29yIiwiYm94U2hhZG93IiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsInBhZGRpbmdUb3AiLCJicmVha3BvaW50cyIsInVwIiwiZm9udFNpemUiLCJkb3duIiwibWFyZ2luIiwicmlnaHRJY29uIiwiZGlyZWN0aW9uIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImJ0bmludiIsInBhZGRpbmdMZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CallAction/action-style.js\n"));

/***/ })

});