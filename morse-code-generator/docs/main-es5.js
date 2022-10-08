function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_TextMorseCode_text_to_morsecode_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/TextMorseCode/text-to-morsecode.component */
    "./src/app/components/TextMorseCode/text-to-morsecode.component.ts");
    /* harmony import */


    var _components_morse_code_text_morse_code_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/morse-code-text/morse-code-text.component */
    "./src/app/components/morse-code-text/morse-code-text.component.ts");

    var routes = [{
      path: 'text-to-morsecode',
      component: _components_TextMorseCode_text_to_morsecode_component__WEBPACK_IMPORTED_MODULE_2__["TextToMorsecodeComponent"]
    }, {
      path: 'morsecode-to-text',
      component: _components_morse_code_text_morse_code_text_component__WEBPACK_IMPORTED_MODULE_3__["MorseCodeTextComponent"]
    }, {
      path: '',
      redirectTo: '/text-to-morsecode',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/text-to-morsecode',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'morse-code-generator';
      this.tower = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBroadcastTower"];
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 16,
      vars: 1,
      consts: [[1, "bg-purple"], [2, "cursor", "pointer"], ["routerLink", ""], [3, "icon"], [1, "fill-space"], [1, "dropdown", "dropleft"], ["href", "#", "role", "button", "id", "dropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu"], ["routerLink", "/text-to-morsecode", 1, "dropdown-item"], ["routerLink", "/morsecode-to-text", 1, "dropdown-item"], ["role", "main", 1, "content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Morse Code Generator ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Menu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Text to Morse Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Morse Code to Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.tower);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin: 32px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  align-items: center;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background-color: #ADEFD1FF;\n  color: #00203FFF;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #00203FFF;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .fill-space[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVuYmEvRG9jdW1lbnRzL3dvcmtzcGFjZS9tb3JzZS1jb2RlLWdlbmVyYXRvci9tb3JzZS1jb2RlLWdlbmVyYXRvci9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBKQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURBRTtFQUNFLGdCQUFBO0FDRUo7O0FEQUU7RUFFRSxjQUFBO0FDQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMzM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5oMiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAzMnB4IGF1dG8gMzJweDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBREVGRDFGRjtcbiAgY29sb3I6ICMwMDIwM0ZGRjtcbiAgc3BhbiA+IGEge1xuICAgIGNvbG9yOiAjMDAyMDNGRkY7XG4gIH1cbiAgLmZpbGwtc3BhY2Uge1xuICAgIC8vIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuXG59XG5cblxuXG5cblxuXG4iLCI6aG9zdCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmgyIHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW46IDMycHggYXV0byAzMnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FERUZEMUZGO1xuICBjb2xvcjogIzAwMjAzRkZGO1xufVxubWF0LXRvb2xiYXIgc3BhbiA+IGEge1xuICBjb2xvcjogIzAwMjAzRkZGO1xufVxubWF0LXRvb2xiYXIgLmZpbGwtc3BhY2Uge1xuICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_TextMorseCode_text_to_morsecode_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/TextMorseCode/text-to-morsecode.component */
    "./src/app/components/TextMorseCode/text-to-morsecode.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_reference_reference_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/reference/reference.component */
    "./src/app/components/reference/reference.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _components_morse_code_text_morse_code_text_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/morse-code-text/morse-code-text.component */
    "./src/app/components/morse-code-text/morse-code-text.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_TextMorseCode_text_to_morsecode_component__WEBPACK_IMPORTED_MODULE_5__["TextToMorsecodeComponent"], _components_reference_reference_component__WEBPACK_IMPORTED_MODULE_12__["ReferenceComponent"], _components_morse_code_text_morse_code_text_component__WEBPACK_IMPORTED_MODULE_16__["MorseCodeTextComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_TextMorseCode_text_to_morsecode_component__WEBPACK_IMPORTED_MODULE_5__["TextToMorsecodeComponent"], _components_reference_reference_component__WEBPACK_IMPORTED_MODULE_12__["ReferenceComponent"], _components_morse_code_text_morse_code_text_component__WEBPACK_IMPORTED_MODULE_16__["MorseCodeTextComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/TextMorseCode/text-to-morsecode.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/TextMorseCode/text-to-morsecode.component.ts ***!
    \*************************************************************************/

  /*! exports provided: TextToMorsecodeComponent */

  /***/
  function srcAppComponentsTextMorseCodeTextToMorsecodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextToMorsecodeComponent", function () {
      return TextToMorsecodeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _domain_alphabets_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../domain/alphabets.enum */
    "./src/app/domain/alphabets.enum.ts");
    /* harmony import */


    var _domain_numbers_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../domain/numbers.enum */
    "./src/app/domain/numbers.enum.ts");
    /* harmony import */


    var _domain_characters_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../domain/characters.enum */
    "./src/app/domain/characters.enum.ts");
    /* harmony import */


    var _domain_special_char_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../domain/special-char.enum */
    "./src/app/domain/special-char.enum.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _reference_reference_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../reference/reference.component */
    "./src/app/components/reference/reference.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    function TextToMorsecodeComponent_ng_container_12_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextToMorsecodeComponent_ng_container_12_div_12_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3.playMorseText();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextToMorsecodeComponent_ng_container_12_div_12_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.pauseResumeAudio();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextToMorsecodeComponent_ng_container_12_div_12_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.stopAudio();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.play);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.pause);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.stop);
      }
    }

    var _c0 = function _c0() {
      return {
        "display": "flex",
        "align-items": "center"
      };
    };

    var _c1 = function _c1() {
      return {
        "display": "flex",
        "justify-content": "center"
      };
    };

    function TextToMorsecodeComponent_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Morse Code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TextToMorsecodeComponent_ng_container_12_div_12_Template, 7, 3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", !ctx_r0.isMobile() ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.isMobile() ? ctx_r0.arrowDownIcon : ctx_r0.arrowRightIcon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.morsecode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r0.morsecode);
      }
    }

    var _c2 = function _c2() {
      return {
        standalone: true
      };
    };

    var TextToMorsecodeComponent = /*#__PURE__*/function () {
      function TextToMorsecodeComponent() {
        _classCallCheck(this, TextToMorsecodeComponent);

        // icons
        this.arrowRightIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowRight"];
        this.arrowDownIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowDown"];
        this.play = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlayCircle"];
        this.pause = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPauseCircle"];
        this.stop = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faStopCircle"];
        this.rate = 20;
      }

      _createClass(TextToMorsecodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var jsonObject = JSON.parse(localStorage.getItem('text-to-morseCode'));

          if (!!jsonObject) {
            this.storage = Object.entries(jsonObject).map(function (entry) {
              var entryValue = entry[1];
              return {
                key: entryValue.key,
                value: entryValue.value
              };
            });
          }

          if (!this.storage) {
            this.storage = [];
          }
        }
      }, {
        key: "generateMorseCode",
        value: function generateMorseCode() {
          var _this = this;

          this.morsecode = '';
          var text = this.searchText.trim().toUpperCase();

          var charArray = _toConsumableArray(text);

          charArray.forEach(function (_char) {
            if (_char.charCodeAt(0) === 10) {
              _this.morsecode += '\n\n';
            } else if (_char.match('^[0-9]$')) {
              var key = Object.keys(_domain_numbers_enum__WEBPACK_IMPORTED_MODULE_2__["Numbers"]).find(function (n) {
                return _domain_characters_enum__WEBPACK_IMPORTED_MODULE_3__["Characters"][n] === _char;
              });
              _this.morsecode = _this.morsecode + _domain_numbers_enum__WEBPACK_IMPORTED_MODULE_2__["Numbers"][key] + ' ';
            } else if (_this.isLetter(_char)) {
              _this.morsecode += _domain_alphabets_enum__WEBPACK_IMPORTED_MODULE_1__["Alphabets"][_char] + ' ';
            } else if (_char === ' ') {
              _this.morsecode += '/ ';
            } else {
              var _key = Object.keys(_domain_special_char_enum__WEBPACK_IMPORTED_MODULE_4__["SpecialChar"]).find(function (n) {
                return _domain_characters_enum__WEBPACK_IMPORTED_MODULE_3__["Characters"][n] === _char;
              });

              if (_domain_special_char_enum__WEBPACK_IMPORTED_MODULE_4__["SpecialChar"][_key] !== undefined) {
                _this.morsecode += _domain_special_char_enum__WEBPACK_IMPORTED_MODULE_4__["SpecialChar"][_key] + ' ';
              }
            }
          });
          this.saveToStorage();
        }
      }, {
        key: "saveToStorage",
        value: function saveToStorage() {
          if (this.storage.length > 10) {
            this.storage.splice(0, 1);
          }

          this.storage.push({
            key: this.searchText.toUpperCase(),
            value: this.morsecode
          });
          localStorage.setItem('text-to-morseCode', JSON.stringify(this.storage));
        }
      }, {
        key: "isLetter",
        value: function isLetter(c) {
          return c.toLowerCase() !== c.toUpperCase();
        }
      }, {
        key: "playMorseText",
        value: function playMorseText() {
          if (this.audioContext === undefined) {
            // Chrome requires audio context after gesture
            // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
            this.createContext();
          } else if (this.audioContext.state === 'suspended') {
            this.audioContext.resume(); // resume play when paused.

            return;
          }

          this.generateMorseAudio(this.audioContext.currentTime, this.morsecode);
        }
      }, {
        key: "pauseResumeAudio",
        value: function pauseResumeAudio() {
          if (!!this.audioContext) {
            if (this.audioContext.state === 'running') {
              this.audioContext.suspend();
            }
          }
        }
      }, {
        key: "stopAudio",
        value: function stopAudio() {
          var _this2 = this;

          if (!!this.audioContext) {
            if (this.audioContext.state !== 'closed') {
              this.audioContext.close().then(function () {
                _this2.audioContext = undefined;
              });
            }
          }
        }
      }, {
        key: "createContext",
        value: function createContext() {
          this.audioContext = new AudioContext();
          this.oscillator = this.audioContext.createOscillator();
          this.gain = this.audioContext.createGain();
          this.gain.gain.value = 0;
          this.oscillator.frequency.value = 750;
          this.oscillator.connect(this.gain);
          this.gain.connect(this.audioContext.destination);
          this.dot = 1.2 / this.rate;
          this.oscillator.start(0);
        }
      }, {
        key: "generateMorseAudio",
        value: function generateMorseAudio(time, morse) {
          var _iterator = _createForOfIteratorHelper(morse),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var code = _step.value;

              if (code === ' ') {
                time += 3 * this.dot;
              } else if (code !== undefined) {
                time = this.createSound(time, code);
                time += 2 * this.dot;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, {
        key: "createSound",
        value: function createSound(time, _char2) {
          var _iterator2 = _createForOfIteratorHelper(_char2),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var c = _step2.value;

              switch (c) {
                case '.':
                  this.gain.gain.setValueAtTime(1.0, time);
                  time += this.dot;
                  this.gain.gain.setValueAtTime(0.0, time);
                  break;

                case '-':
                  this.gain.gain.setValueAtTime(1.0, time);
                  time += 3 * this.dot;
                  this.gain.gain.setValueAtTime(0.0, time);
                  break;
              }

              time += this.dot;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return time;
        }
      }, {
        key: "isMobile",
        value: function isMobile() {
          return window.matchMedia('(max-width: 487px)').matches;
        }
      }]);

      return TextToMorsecodeComponent;
    }();

    TextToMorsecodeComponent.ɵfac = function TextToMorsecodeComponent_Factory(t) {
      return new (t || TextToMorsecodeComponent)();
    };

    TextToMorsecodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TextToMorsecodeComponent,
      selectors: [["app-text-morse-code"]],
      decls: 18,
      vars: 6,
      consts: [[1, "container-fluid", "mt-3"], [1, "row"], [3, "ngClass"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-body"], ["appearance", "outline", 1, "mb-4"], ["rows", "7", "matInput", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "float-right"], ["type", "button", 1, "btn", 3, "click"], [4, "ngIf"], [1, "row", "mt-5"], [1, "col-md-12"], [1, "card"], [3, "history"], [1, "col-sm-1", 3, "ngStyle"], ["size", "4x", 3, "icon"], [1, "col-sm-6"], [1, "card-text"], ["code", ""], ["class", "card-body", 4, "ngIf"], [1, "float-right", "ml-1", "btn", 3, "click"], ["size", "2x", 2, "color", "black !important", 3, "icon"], [1, "float-right", "btn", 3, "click"]],
      template: function TextToMorsecodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Text In English");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TextToMorsecodeComponent_Template_textarea_ngModelChange_8_listener($event) {
            return ctx.searchText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextToMorsecodeComponent_Template_button_click_10_listener() {
            return ctx.generateMorseCode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Convert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TextToMorsecodeComponent_ng_container_12_Template, 13, 6, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-reference", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.morsecode || (ctx.morsecode == null ? null : ctx.morsecode.length) < 0 ? "col-sm-12" : "col-sm-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.morsecode == null ? null : ctx.morsecode.length) > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("history", ctx.storage);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _reference_reference_component__WEBPACK_IMPORTED_MODULE_10__["ReferenceComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"]],
      styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 350px;\n  width: 100%;\n  overflow-y: scroll !important;\n}\n\n.card[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n\nfa-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: black;\n}\n\n\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: black;\n}\n\n\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-label {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVuYmEvRG9jdW1lbnRzL3dvcmtzcGFjZS9tb3JzZS1jb2RlLWdlbmVyYXRvci9tb3JzZS1jb2RlLWdlbmVyYXRvci9zcmMvYXBwL2NvbXBvbmVudHMvVGV4dE1vcnNlQ29kZS90ZXh0LXRvLW1vcnNlY29kZS5jb21wb25lbnQuc2NzcyIsImNvbXBvbmVudHMvVGV4dE1vcnNlQ29kZS90ZXh0LXRvLW1vcnNlY29kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURBRTtFQUNFLHFCQUFBO0FDRUo7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0Esa0JBQUE7O0FBQ0E7RUFDRSxZQUFBO0FDQUY7O0FER0EseUJBQUE7O0FBQ0E7RUFDRSxZQUFBO0FDQUYiLCJmaWxlIjoiY29tcG9uZW50cy9UZXh0TW9yc2VDb2RlL3RleHQtdG8tbW9yc2Vjb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQge1xuICBoZWlnaHQ6IDM1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gIHByZSB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB9XG59XG5cbmZhLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8vIGRlZmF1bHQgY29sb3Jcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBmb2N1c2VkIGNvbG9yICovXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogZmxvYXRpbmcgbGFiZWwgY29sb3IgKi9cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiBibGFjaztcbn1cbiIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xufVxuLmNhcmQgcHJlIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG5mYS1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogZm9jdXNlZCBjb2xvciAqL1xuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIGZsb2F0aW5nIGxhYmVsIGNvbG9yICovXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextToMorsecodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-text-morse-code',
          templateUrl: './text-to-morsecode.component.html',
          styleUrls: ['./text-to-morsecode.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/morse-code-text/morse-code-text.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/morse-code-text/morse-code-text.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MorseCodeTextComponent */

  /***/
  function srcAppComponentsMorseCodeTextMorseCodeTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MorseCodeTextComponent", function () {
      return MorseCodeTextComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _domain_numbers_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../domain/numbers.enum */
    "./src/app/domain/numbers.enum.ts");
    /* harmony import */


    var _domain_characters_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../domain/characters.enum */
    "./src/app/domain/characters.enum.ts");
    /* harmony import */


    var _domain_alphabets_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../domain/alphabets.enum */
    "./src/app/domain/alphabets.enum.ts");
    /* harmony import */


    var _domain_special_char_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../domain/special-char.enum */
    "./src/app/domain/special-char.enum.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _reference_reference_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../reference/reference.component */
    "./src/app/components/reference/reference.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var _c0 = function _c0() {
      return {
        "display": "flex",
        "align-items": "center"
      };
    };

    var _c1 = function _c1() {
      return {
        "display": "flex",
        "justify-content": "center"
      };
    };

    function MorseCodeTextComponent_ng_container_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Text");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", !ctx_r0.isMobile() ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.isMobile() ? ctx_r0.arrowDownIcon : ctx_r0.arrowRightIcon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.text);
      }
    }

    var _c2 = function _c2() {
      return {
        standalone: true
      };
    };

    var MorseCodeTextComponent = /*#__PURE__*/function () {
      function MorseCodeTextComponent() {
        _classCallCheck(this, MorseCodeTextComponent);

        this.arrowRightIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowRight"];
        this.arrowDownIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowDown"];
        this.alphabetKeys = Object.keys(_domain_alphabets_enum__WEBPACK_IMPORTED_MODULE_3__["Alphabets"]);
        this.numberKeys = Object.keys(_domain_numbers_enum__WEBPACK_IMPORTED_MODULE_1__["Numbers"]);
        this.specialCharKeys = Object.keys(_domain_special_char_enum__WEBPACK_IMPORTED_MODULE_4__["SpecialChar"]);
      }

      _createClass(MorseCodeTextComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var jsonObject = JSON.parse(localStorage.getItem('morsecode-to-text'));

          if (!!jsonObject) {
            this.storage = Object.entries(jsonObject).map(function (entry) {
              var entryValue = entry[1];
              return {
                key: entryValue.key,
                value: entryValue.value
              };
            });
          }

          if (!this.storage) {
            this.storage = [];
          }
        }
      }, {
        key: "generateText",
        value: function generateText() {
          var _this3 = this;

          this.text = '';
          var morsecode = this.morseCode.trim();
          var codeArray = morsecode.split(' ');
          codeArray.forEach(function (code) {
            if (code === '/') {
              _this3.text += ' ';
            } else {
              var _char3 = _this3.alphabetKeys.find(function (key) {
                return _domain_alphabets_enum__WEBPACK_IMPORTED_MODULE_3__["Alphabets"][key] === code;
              });

              if (!!_char3) {
                _this3.text += _char3;
              } else {
                _char3 = _this3.numberKeys.find(function (key) {
                  return _domain_numbers_enum__WEBPACK_IMPORTED_MODULE_1__["Numbers"][key] === code;
                });

                if (!!_char3) {
                  _this3.text += _domain_characters_enum__WEBPACK_IMPORTED_MODULE_2__["Characters"][_char3];
                } else {
                  _char3 = _this3.specialCharKeys.find(function (key) {
                    return _domain_special_char_enum__WEBPACK_IMPORTED_MODULE_4__["SpecialChar"][key] === code;
                  });

                  if (!!_char3) {
                    _this3.text += _domain_characters_enum__WEBPACK_IMPORTED_MODULE_2__["Characters"][_char3];
                  }
                }
              }
            }
          });

          if (!!this.text && !!this.morseCode) {
            this.saveToStorage();
          }
        }
      }, {
        key: "saveToStorage",
        value: function saveToStorage() {
          if (this.storage.length > 10) {
            this.storage.splice(0, 1);
          }

          this.storage.push({
            key: this.text.toUpperCase(),
            value: this.morseCode
          });
          localStorage.setItem('morsecode-to-text', JSON.stringify(this.storage));
        }
      }, {
        key: "isLetter",
        value: function isLetter(c) {
          return c.toLowerCase() !== c.toUpperCase();
        }
      }, {
        key: "isMobile",
        value: function isMobile() {
          return window.matchMedia('(max-width: 487px)').matches;
        }
      }]);

      return MorseCodeTextComponent;
    }();

    MorseCodeTextComponent.ɵfac = function MorseCodeTextComponent_Factory(t) {
      return new (t || MorseCodeTextComponent)();
    };

    MorseCodeTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MorseCodeTextComponent,
      selectors: [["app-morse-code-text"]],
      decls: 22,
      vars: 7,
      consts: [[1, "container-fluid", "mt-3"], [1, "row"], [3, "ngClass"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-subtitle", "pl-3"], [1, "card-body"], ["appearance", "outline", 1, "mb-4", 2, "margin-bottom", "0 !important"], ["matInput", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "float-right"], ["type", "button", 1, "btn", 3, "click"], [4, "ngIf"], [1, "row", "mt-5"], [1, "col-md-12"], [1, "card"], [3, "history"], [1, "col-sm-1", 3, "ngStyle"], ["size", "4x", 3, "icon"], [1, "col-sm-5"], [1, "card-text"]],
      template: function MorseCodeTextComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Morse Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Separate every morse code char with space and separate words with ' / ' (/ with spaces on both sides) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Eg: Hello ! -> .... . .-.. .-.. --- / -.-.-- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "textarea", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MorseCodeTextComponent_Template_textarea_ngModelChange_12_listener($event) {
            return ctx.morseCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MorseCodeTextComponent_Template_button_click_14_listener() {
            return ctx.generateText();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Convert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MorseCodeTextComponent_ng_container_16_Template, 11, 5, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-reference", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.text || (ctx.text == null ? null : ctx.text.length) < 0 ? "col-sm-12" : "col-sm-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.morseCode)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rows", !ctx.text || (ctx.text == null ? null : ctx.text.length) < 0 ? 5 : 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.text == null ? null : ctx.text.length) > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("history", ctx.storage);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _reference_reference_component__WEBPACK_IMPORTED_MODULE_10__["ReferenceComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"]],
      styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: bold;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 350px;\n  width: 100%;\n  overflow-y: scroll !important;\n}\n\n.card[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n}\n\nfa-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: black;\n}\n\n\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: black;\n}\n\n\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-label {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVuYmEvRG9jdW1lbnRzL3dvcmtzcGFjZS9tb3JzZS1jb2RlLWdlbmVyYXRvci9tb3JzZS1jb2RlLWdlbmVyYXRvci9zcmMvYXBwL2NvbXBvbmVudHMvbW9yc2UtY29kZS10ZXh0L21vcnNlLWNvZGUtdGV4dC5jb21wb25lbnQuc2NzcyIsImNvbXBvbmVudHMvbW9yc2UtY29kZS10ZXh0L21vcnNlLWNvZGUtdGV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURBRTtFQUNFLHFCQUFBO0FDRUo7O0FEQUU7RUFDRSxrQkFBQTtBQ0VKOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBLGtCQUFBOztBQUNBO0VBQ0UsWUFBQTtBQ0FGOztBREdBLHlCQUFBOztBQUNBO0VBQ0UsWUFBQTtBQ0FGIiwiZmlsZSI6ImNvbXBvbmVudHMvbW9yc2UtY29kZS10ZXh0L21vcnNlLWNvZGUtdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRleHRhcmVhIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xuICBwcmUge1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgfVxuICAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwIDEuMjVyZW07XG4gIH1cbn1cblxuZmEtaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLy8gZGVmYXVsdCBjb2xvclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIGZvY3VzZWQgY29sb3IgKi9cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBmbG9hdGluZyBsYWJlbCBjb2xvciAqL1xuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuIiwibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGV4dGFyZWEge1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmQge1xuICBoZWlnaHQ6IDM1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XG59XG4uY2FyZCBwcmUge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4uY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMCAxLjI1cmVtO1xufVxuXG5mYS1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogZm9jdXNlZCBjb2xvciAqL1xuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIGZsb2F0aW5nIGxhYmVsIGNvbG9yICovXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MorseCodeTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-morse-code-text',
          templateUrl: './morse-code-text.component.html',
          styleUrls: ['./morse-code-text.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/reference/reference.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/reference/reference.component.ts ***!
    \*************************************************************/

  /*! exports provided: ReferenceComponent */

  /***/
  function srcAppComponentsReferenceReferenceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferenceComponent", function () {
      return ReferenceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _domain_alphabets_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../domain/alphabets.enum */
    "./src/app/domain/alphabets.enum.ts");
    /* harmony import */


    var _domain_numbers_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../domain/numbers.enum */
    "./src/app/domain/numbers.enum.ts");
    /* harmony import */


    var _domain_special_char_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../domain/special-char.enum */
    "./src/app/domain/special-char.enum.ts");
    /* harmony import */


    var _domain_characters_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../domain/characters.enum */
    "./src/app/domain/characters.enum.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    function ReferenceComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r4 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.convertCode(ctx_r0.alphabetCode[key_r4]));
      }
    }

    function ReferenceComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r5 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.showKey(key_r5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.convertCode(ctx_r1.numberCode[key_r5]));
      }
    }

    function ReferenceComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r6 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.format(key_r6), " [ ", ctx_r2.showKey(key_r6), " ]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.convertCode(ctx_r2.splCharCode[key_r6]));
      }
    }

    function ReferenceComponent_mat_tab_18_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReferenceComponent_mat_tab_18_div_3_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var i_r9 = ctx.index;
          var key_r8 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.playMorseText(i_r9, key_r8.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReferenceComponent_mat_tab_18_div_3_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var i_r9 = ctx.index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.pauseResumeAudio(i_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReferenceComponent_mat_tab_18_div_3_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var i_r9 = ctx.index;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.stopAudio(i_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "fa-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r8 = ctx.$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r8.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r8.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.play);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.pause);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.stop);
      }
    }

    function ReferenceComponent_mat_tab_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReferenceComponent_mat_tab_18_div_3_Template, 15, 5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.history);
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 15];
    };

    var _c1 = function _c1() {
      return [5, 10];
    };

    var ReferenceComponent = /*#__PURE__*/function () {
      function ReferenceComponent() {
        _classCallCheck(this, ReferenceComponent);

        this.alphabetCode = _domain_alphabets_enum__WEBPACK_IMPORTED_MODULE_1__["Alphabets"];
        this.numberCode = _domain_numbers_enum__WEBPACK_IMPORTED_MODULE_2__["Numbers"];
        this.splCharCode = _domain_special_char_enum__WEBPACK_IMPORTED_MODULE_3__["SpecialChar"]; // icons

        this.play = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlayCircle"];
        this.pause = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPauseCircle"];
        this.stop = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faStopCircle"];
        this.audioContexts = [];
        this.oscillator = [];
        this.gain = [];
        this.rate = 20;
        this.alphabetKeys = Object.keys(_domain_alphabets_enum__WEBPACK_IMPORTED_MODULE_1__["Alphabets"]);
        this.numberKeys = Object.keys(_domain_numbers_enum__WEBPACK_IMPORTED_MODULE_2__["Numbers"]);
        this.splCharKeys = Object.keys(_domain_special_char_enum__WEBPACK_IMPORTED_MODULE_3__["SpecialChar"]);
        this.alphabetPagedList = Object.keys(_domain_alphabets_enum__WEBPACK_IMPORTED_MODULE_1__["Alphabets"]).slice(0, 10);
        this.splCharPagedList = Object.keys(_domain_special_char_enum__WEBPACK_IMPORTED_MODULE_3__["SpecialChar"]).slice(0, 5);
      }

      _createClass(ReferenceComponent, [{
        key: "convertCode",
        value: function convertCode(code) {
          return code.split('').join(' ');
        }
      }, {
        key: "format",
        value: function format(key) {
          return key.replace('_', ' ');
        }
      }, {
        key: "showKey",
        value: function showKey(key) {
          if (!!_domain_characters_enum__WEBPACK_IMPORTED_MODULE_4__["Characters"][key]) {
            return _domain_characters_enum__WEBPACK_IMPORTED_MODULE_4__["Characters"][key];
          }

          return key;
        }
      }, {
        key: "pageAlphabetEvent",
        value: function pageAlphabetEvent(event) {
          var startIndex = event.pageIndex * event.pageSize;
          var endIndex = startIndex + event.pageSize;

          if (endIndex > this.alphabetKeys.length) {
            endIndex = this.alphabetKeys.length;
          }

          this.alphabetPagedList = this.alphabetKeys.slice(startIndex, endIndex);
        }
      }, {
        key: "pageSplCharEvent",
        value: function pageSplCharEvent(event) {
          var startIndex = event.pageIndex * event.pageSize;
          var endIndex = startIndex + event.pageSize;

          if (endIndex > this.splCharKeys.length) {
            endIndex = this.splCharKeys.length;
          }

          this.splCharPagedList = this.splCharKeys.slice(startIndex, endIndex);
        }
      }, {
        key: "playMorseText",
        value: function playMorseText(index, value) {
          if (this.audioContexts[index] === undefined) {
            // Chrome requires audio context after gesture
            // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
            this.createContext(index);
          } else if (this.audioContexts[index].state === 'suspended') {
            this.audioContexts[index].resume(); // resume play when paused.

            return;
          }

          this.generateMorseAudio(index, this.audioContexts[index].currentTime, value);
        }
      }, {
        key: "pauseResumeAudio",
        value: function pauseResumeAudio(index) {
          if (!!this.audioContexts[index]) {
            if (this.audioContexts[index].state === 'running') {
              this.audioContexts[index].suspend();
            }
          }
        }
      }, {
        key: "stopAudio",
        value: function stopAudio(index) {
          var _this4 = this;

          if (!!this.audioContexts[index]) {
            if (this.audioContexts[index].state !== 'closed') {
              this.audioContexts[index].close().then(function () {
                _this4.audioContexts[index] = undefined;
              });
            }
          }
        }
      }, {
        key: "createContext",
        value: function createContext(index) {
          this.audioContexts[index] = new AudioContext();
          this.oscillator[index] = this.audioContexts[index].createOscillator();
          this.gain[index] = this.audioContexts[index].createGain();
          this.gain[index].gain.value = 0;
          this.oscillator[index].frequency.value = 750;
          this.oscillator[index].connect(this.gain[index]);
          this.gain[index].connect(this.audioContexts[index].destination);
          this.dot = 1.2 / this.rate;
          this.oscillator[index].start(0);
        }
      }, {
        key: "generateMorseAudio",
        value: function generateMorseAudio(index, time, morse) {
          var _iterator3 = _createForOfIteratorHelper(morse),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var code = _step3.value;

              if (code === ' ') {
                time += 3 * this.dot;
              } else if (code !== undefined) {
                time = this.createSound(index, time, code);
                time += 2 * this.dot;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, {
        key: "createSound",
        value: function createSound(index, time, _char4) {
          var _iterator4 = _createForOfIteratorHelper(_char4),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var c = _step4.value;

              switch (c) {
                case '.':
                  this.gain[index].gain.setValueAtTime(1.0, time);
                  time += this.dot;
                  this.gain[index].gain.setValueAtTime(0.0, time);
                  break;

                case '-':
                  this.gain[index].gain.setValueAtTime(1.0, time);
                  time += 3 * this.dot;
                  this.gain[index].gain.setValueAtTime(0.0, time);
                  break;
              }

              time += this.dot;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return time;
        }
      }]);

      return ReferenceComponent;
    }();

    ReferenceComponent.ɵfac = function ReferenceComponent_Factory(t) {
      return new (t || ReferenceComponent)();
    };

    ReferenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReferenceComponent,
      selectors: [["app-reference"]],
      inputs: {
        history: "history"
      },
      decls: 19,
      vars: 14,
      consts: [[1, "min-height", "container-fluid"], [1, "text-center", "pb-3"], ["mat-align-tabs", "start"], ["label", "Alphabets"], [1, "row", "pt-3"], [1, "p-1", "col-md-12", "col-lg-12", "col-sm-12", "col-xs-12"], ["class", "row text-center", 4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageSizeOptions", "showFirstLastButtons", "page"], ["label", "Numbers"], ["label", "Special Characters"], ["label", "History", 4, "ngIf"], [1, "row", "text-center"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "col-lg-4", "col-md-4", "col-sm-12"], [2, "font-weight", "bold"], ["label", "History"], [1, "col-lg-4", "col-md-4", "col-sm-4"], [1, "mr-1", "btn", 3, "click"], [2, "color", "black !important", 3, "icon"], [1, "btn", 3, "click"]],
      template: function ReferenceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Morse Code Reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ReferenceComponent_div_7_Template, 7, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-paginator", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ReferenceComponent_Template_mat_paginator_page_8_listener($event) {
            return ctx.pageAlphabetEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ReferenceComponent_div_12_Template, 7, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-tab", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ReferenceComponent_div_16_Template, 7, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-paginator", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ReferenceComponent_Template_mat_paginator_page_17_listener($event) {
            return ctx.pageSplCharEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ReferenceComponent_mat_tab_18_Template, 4, 1, "mat-tab", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alphabetPagedList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.alphabetKeys == null ? null : ctx.alphabetKeys.length)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("showFirstLastButtons", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numberKeys);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.splCharPagedList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.splCharKeys == null ? null : ctx.splCharKeys.length)("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1))("showFirstLastButtons", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.history == null ? null : ctx.history.length) > 0);
        }
      },
      directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"]],
      styles: [".mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n\n.min-height[_ngcontent-%COMP%] {\n  min-height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVuYmEvRG9jdW1lbnRzL3dvcmtzcGFjZS9tb3JzZS1jb2RlLWdlbmVyYXRvci9tb3JzZS1jb2RlLWdlbmVyYXRvci9zcmMvYXBwL2NvbXBvbmVudHMvcmVmZXJlbmNlL3JlZmVyZW5jZS5jb21wb25lbnQuc2NzcyIsImNvbXBvbmVudHMvcmVmZXJlbmNlL3JlZmVyZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6ImNvbXBvbmVudHMvcmVmZXJlbmNlL3JlZmVyZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFiLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn1cblxuLm1pbi1oZWlnaHQge1xuICBtaW4taGVpZ2h0OiA2MDBweFxufVxuIiwiLm1hdC10YWItZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xufVxuXG4ubWluLWhlaWdodCB7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferenceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reference',
          templateUrl: './reference.component.html',
          styleUrls: ['./reference.component.scss']
        }]
      }], function () {
        return [];
      }, {
        history: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/domain/alphabets.enum.ts":
  /*!******************************************!*\
    !*** ./src/app/domain/alphabets.enum.ts ***!
    \******************************************/

  /*! exports provided: Alphabets */

  /***/
  function srcAppDomainAlphabetsEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alphabets", function () {
      return Alphabets;
    });

    var Alphabets;

    (function (Alphabets) {
      Alphabets["A"] = ".-";
      Alphabets["B"] = "-...";
      Alphabets["C"] = "-.-.";
      Alphabets["D"] = "-..";
      Alphabets["E"] = ".";
      Alphabets["F"] = "..-.";
      Alphabets["G"] = "--.";
      Alphabets["H"] = "....";
      Alphabets["I"] = "..";
      Alphabets["J"] = ".---";
      Alphabets["K"] = "-.-";
      Alphabets["L"] = ".-..";
      Alphabets["M"] = "--";
      Alphabets["N"] = "-.";
      Alphabets["O"] = "---";
      Alphabets["P"] = ".--.";
      Alphabets["Q"] = "--.-";
      Alphabets["R"] = ".-.";
      Alphabets["S"] = "...";
      Alphabets["T"] = "-";
      Alphabets["U"] = "..-";
      Alphabets["V"] = "...-";
      Alphabets["W"] = ".--";
      Alphabets["X"] = "-..-";
      Alphabets["Y"] = "-.--";
      Alphabets["Z"] = "--..";
      Alphabets["\xC4"] = ".-.-";
      Alphabets["\xD6"] = "---.";
      Alphabets["\xDC"] = "..--";
      Alphabets["CH"] = "----";
      Alphabets["\xE9"] = "..-..";
      Alphabets["\xF1"] = "--.--";
    })(Alphabets || (Alphabets = {}));
    /***/

  },

  /***/
  "./src/app/domain/characters.enum.ts":
  /*!*******************************************!*\
    !*** ./src/app/domain/characters.enum.ts ***!
    \*******************************************/

  /*! exports provided: Characters */

  /***/
  function srcAppDomainCharactersEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Characters", function () {
      return Characters;
    });

    var Characters;

    (function (Characters) {
      Characters["DOT"] = ".";
      Characters["COMMA"] = ",";
      Characters["QUESTION"] = "?";
      Characters["AMPERSAND"] = "&";
      Characters["APOSTROPHE"] = "'";
      Characters["SLASH"] = "/";
      Characters["AT"] = "@";
      Characters["EQUAL"] = "=";
      Characters["EXCLAMATION"] = "!";
      Characters["PLUS"] = "+";
      Characters["MINUS"] = "-";
      Characters["OPEN_BRACKET"] = "(";
      Characters["CLOSE_BRACKET"] = ")";
      Characters["COLON"] = ":";
      Characters["DOUBLE_QUOTE"] = "\"";
      Characters["ZERO"] = "0";
      Characters["ONE"] = "1";
      Characters["TWO"] = "2";
      Characters["THREE"] = "3";
      Characters["FOUR"] = "4";
      Characters["FIVE"] = "5";
      Characters["SIX"] = "6";
      Characters["SEVEN"] = "7";
      Characters["EIGHT"] = "8";
      Characters["NINE"] = "9";
    })(Characters || (Characters = {}));
    /***/

  },

  /***/
  "./src/app/domain/numbers.enum.ts":
  /*!****************************************!*\
    !*** ./src/app/domain/numbers.enum.ts ***!
    \****************************************/

  /*! exports provided: Numbers */

  /***/
  function srcAppDomainNumbersEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Numbers", function () {
      return Numbers;
    });

    var Numbers;

    (function (Numbers) {
      Numbers["ZERO"] = "-----";
      Numbers["ONE"] = ".----";
      Numbers["TWO"] = "..---";
      Numbers["THREE"] = "...--";
      Numbers["FOUR"] = "....-";
      Numbers["FIVE"] = ".....";
      Numbers["SIX"] = "-....";
      Numbers["SEVEN"] = "--...";
      Numbers["EIGHT"] = "---..";
      Numbers["NINE"] = "----.";
    })(Numbers || (Numbers = {}));
    /***/

  },

  /***/
  "./src/app/domain/special-char.enum.ts":
  /*!*********************************************!*\
    !*** ./src/app/domain/special-char.enum.ts ***!
    \*********************************************/

  /*! exports provided: SpecialChar */

  /***/
  function srcAppDomainSpecialCharEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpecialChar", function () {
      return SpecialChar;
    });

    var SpecialChar;

    (function (SpecialChar) {
      SpecialChar["DOT"] = ".-.-.-";
      SpecialChar["COMMA"] = "--..--";
      SpecialChar["QUESTION"] = "..--..";
      SpecialChar["AMPERSAND"] = ".-...";
      SpecialChar["APOSTROPHE"] = ".----.";
      SpecialChar["SLASH"] = "-..-.";
      SpecialChar["AT"] = ".--.-.";
      SpecialChar["EQUAL"] = "-...-";
      SpecialChar["EXCLAMATION"] = "-.-.--";
      SpecialChar["PLUS"] = ".-.-.";
      SpecialChar["MINUS"] = "-....-";
      SpecialChar["OPEN_BRACKET"] = "-.--.";
      SpecialChar["CLOSE_BRACKET"] = "-.--.-";
      SpecialChar["COLON"] = "---...";
      SpecialChar["DOUBLE_QUOTE"] = ".-..-.";
    })(SpecialChar || (SpecialChar = {}));
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/shenba/Documents/workspace/morse-code-generator/morse-code-generator/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map