(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_TextMorseCode_text_to_morsecode_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TextMorseCode/text-to-morsecode.component */ "./src/app/components/TextMorseCode/text-to-morsecode.component.ts");
/* harmony import */ var _components_morse_code_text_morse_code_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/morse-code-text/morse-code-text.component */ "./src/app/components/morse-code-text/morse-code-text.component.ts");






const routes = [
    { path: 'text-to-morsecode', component: _components_TextMorseCode_text_to_morsecode_component__WEBPACK_IMPORTED_MODULE_2__["TextToMorsecodeComponent"] },
    { path: 'morsecode-to-text', component: _components_morse_code_text_morse_code_text_component__WEBPACK_IMPORTED_MODULE_3__["MorseCodeTextComponent"] },
    { path: '', redirectTo: '/text-to-morsecode', pathMatch: 'full' },
    { path: '**', redirectTo: '/text-to-morsecode', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






class AppComponent {
    constructor() {
        this.title = 'morse-code-generator';
        this.tower = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBroadcastTower"];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 1, consts: [[1, "bg-purple"], [2, "cursor", "pointer"], ["routerLink", ""], [3, "icon"], [1, "fill-space"], [1, "dropdown", "dropleft"], ["href", "#", "role", "button", "id", "dropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu"], ["routerLink", "/text-to-morsecode", 1, "dropdown-item"], ["routerLink", "/morsecode-to-text", 1, "dropdown-item"], ["role", "main", 1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.tower);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin: 32px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  align-items: center;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background-color: #ADEFD1FF;\n  color: #00203FFF;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #00203FFF;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .fill-space[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVuYmEvRG9jdW1lbnRzL3dvcmtzcGFjZS9tb3JzZS1jb2RlLWdlbmVyYXRvci9tb3JzZS1jb2RlLWdlbmVyYXRvci9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEpBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREFFO0VBQ0UsZ0JBQUE7QUNFSjs7QURBRTtFQUVFLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaDIge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogMzJweCBhdXRvIDMycHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQURFRkQxRkY7XG4gIGNvbG9yOiAjMDAyMDNGRkY7XG4gIHNwYW4gPiBhIHtcbiAgICBjb2xvcjogIzAwMjAzRkZGO1xuICB9XG4gIC5maWxsLXNwYWNlIHtcbiAgICAvLyBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxufVxuXG5cblxuXG5cblxuIiwiOmhvc3Qge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMzM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5oMiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAzMnB4IGF1dG8gMzJweDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBREVGRDFGRjtcbiAgY29sb3I6ICMwMDIwM0ZGRjtcbn1cbm1hdC10b29sYmFyIHNwYW4gPiBhIHtcbiAgY29sb3I6ICMwMDIwM0ZGRjtcbn1cbm1hdC10b29sYmFyIC5maWxsLXNwYWNlIHtcbiAgZmxleDogMSAxIGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_TextMorseCode_text_to_morsecode_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TextMorseCode/text-to-morsecode.component */ "./src/app/components/TextMorseCode/text-to-morsecode.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_reference_reference_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/reference/reference.component */ "./src/app/components/reference/reference.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _components_morse_code_text_morse_code_text_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/morse-code-text/morse-code-text.component */ "./src/app/components/morse-code-text/morse-code-text.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_TextMorseCode_text_to_morsecode_component__WEBPACK_IMPORTED_MODULE_5__["TextToMorsecodeComponent"],
        _components_reference_reference_component__WEBPACK_IMPORTED_MODULE_12__["ReferenceComponent"],
        _components_morse_code_text_morse_code_text_component__WEBPACK_IMPORTED_MODULE_16__["MorseCodeTextComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_TextMorseCode_text_to_morsecode_component__WEBPACK_IMPORTED_MODULE_5__["TextToMorsecodeComponent"],
                    _components_reference_reference_component__WEBPACK_IMPORTED_MODULE_12__["ReferenceComponent"],
                    _components_morse_code_text_morse_code_text_component__WEBPACK_IMPORTED_MODULE_16__["MorseCodeTextComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/TextMorseCode/text-to-morsecode.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/TextMorseCode/text-to-morsecode.component.ts ***!
  \*************************************************************************/
/*! exports provided: TextToMorsecodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextToMorsecodeComponent", function() { return TextToMorsecodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _domain_alphabets_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/alphabets.enum */ "./src/app/domain/alphabets.enum.ts");
/* harmony import */ var _domain_numbers_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/numbers.enum */ "./src/app/domain/numbers.enum.ts");
/* harmony import */ var _domain_characters_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/characters.enum */ "./src/app/domain/characters.enum.ts");
/* harmony import */ var _domain_special_char_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/special-char.enum */ "./src/app/domain/special-char.enum.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _reference_reference_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reference/reference.component */ "./src/app/components/reference/reference.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");













function TextToMorsecodeComponent_ng_container_12_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextToMorsecodeComponent_ng_container_12_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.playMorseText(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextToMorsecodeComponent_ng_container_12_div_12_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.pauseResumeAudio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextToMorsecodeComponent_ng_container_12_div_12_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.stopAudio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.play);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.pause);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.stop);
} }
const _c0 = function () { return { "display": "flex", "align-items": "center" }; };
const _c1 = function () { return { "display": "flex", "justify-content": "center" }; };
function TextToMorsecodeComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", !ctx_r0.isMobile() ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.isMobile() ? ctx_r0.arrowDownIcon : ctx_r0.arrowRightIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.morsecode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r0.morsecode);
} }
const _c2 = function () { return { standalone: true }; };
class TextToMorsecodeComponent {
    constructor() {
        // icons
        this.arrowRightIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowRight"];
        this.arrowDownIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowDown"];
        this.play = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlayCircle"];
        this.pause = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPauseCircle"];
        this.stop = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faStopCircle"];
        this.rate = 20;
    }
    ngOnInit() {
        const jsonObject = JSON.parse(localStorage.getItem('text-to-morseCode'));
        if (!!jsonObject) {
            this.storage = Object.entries(jsonObject).map(entry => {
                const entryValue = entry[1];
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
    generateMorseCode() {
        this.morsecode = '';
        const text = this.searchText.trim().toUpperCase();
        const charArray = [...text];
        charArray.forEach(char => {
            if (char.charCodeAt(0) === 10) {
                this.morsecode += '\n\n';
            }
            else if (char.match('^[0-9]$')) {
                const key = Object.keys(_domain_numbers_enum__WEBPACK_IMPORTED_MODULE_2__["Numbers"]).find(n => _domain_characters_enum__WEBPACK_IMPORTED_MODULE_3__["Characters"][n] === char);
                this.morsecode = this.morsecode + _domain_numbers_enum__WEBPACK_IMPORTED_MODULE_2__["Numbers"][key] + ' ';
            }
            else if (this.isLetter(char)) {
                this.morsecode += _domain_alphabets_enum__WEBPACK_IMPORTED_MODULE_1__["Alphabets"][char] + ' ';
            }
            else if (char === ' ') {
                this.morsecode += '/ ';
            }
            else {
                const key = Object.keys(_domain_special_char_enum__WEBPACK_IMPORTED_MODULE_4__["SpecialChar"]).find(n => _domain_characters_enum__WEBPACK_IMPORTED_MODULE_3__["Characters"][n] === char);
                if (_domain_special_char_enum__WEBPACK_IMPORTED_MODULE_4__["SpecialChar"][key] !== undefined) {
                    this.morsecode += _domain_special_char_enum__WEBPACK_IMPORTED_MODULE_4__["SpecialChar"][key] + ' ';
                }
            }
        });
        this.saveToStorage();
    }
    saveToStorage() {
        if (this.storage.length > 10) {
            this.storage.splice(0, 1);
        }
        this.storage.push({
            key: this.searchText.toUpperCase(),
            value: this.morsecode
        });
        localStorage.setItem('text-to-morseCode', JSON.stringify(this.storage));
    }
    isLetter(c) {
        return c.toLowerCase() !== c.toUpperCase();
    }
    playMorseText() {
        if (this.audioContext === undefined) {
            // Chrome requires audio context after gesture
            // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
            this.createContext();
        }
        else if (this.audioContext.state === 'suspended') {
            this.audioContext.resume(); // resume play when paused.
            return;
        }
        this.generateMorseAudio(this.audioContext.currentTime, this.morsecode);
    }
    pauseResumeAudio() {
        if (!!this.audioContext) {
            if (this.audioContext.state === 'running') {
                this.audioContext.suspend();
            }
        }
    }
    stopAudio() {
        if (!!this.audioContext) {
            if (this.audioContext.state !== 'closed') {
                this.audioContext.close().then(() => {
                    this.audioContext = undefined;
                });
            }
        }
    }
    createContext() {
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
    generateMorseAudio(time, morse) {
        for (const code of morse) {
            if (code === ' ') {
                time += 3 * this.dot;
            }
            else if (code !== undefined) {
                time = this.createSound(time, code);
                time += 2 * this.dot;
            }
        }
    }
    createSound(time, char) {
        for (const c of char) {
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
        return time;
    }
    isMobile() {
        return window.matchMedia('(max-width: 487px)').matches;
    }
}
TextToMorsecodeComponent.ɵfac = function TextToMorsecodeComponent_Factory(t) { return new (t || TextToMorsecodeComponent)(); };
TextToMorsecodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextToMorsecodeComponent, selectors: [["app-text-morse-code"]], decls: 18, vars: 6, consts: [[1, "container-fluid", "mt-3"], [1, "row"], [3, "ngClass"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-body"], ["appearance", "outline", 1, "mb-4"], ["rows", "7", "matInput", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "float-right"], ["type", "button", 1, "btn", 3, "click"], [4, "ngIf"], [1, "row", "mt-5"], [1, "col-md-12"], [1, "card"], [3, "history"], [1, "col-sm-1", 3, "ngStyle"], ["size", "4x", 3, "icon"], [1, "col-sm-6"], [1, "card-text"], ["code", ""], ["class", "card-body", 4, "ngIf"], [1, "float-right", "ml-1", "btn", 3, "click"], ["size", "2x", 2, "color", "black !important", 3, "icon"], [1, "float-right", "btn", 3, "click"]], template: function TextToMorsecodeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TextToMorsecodeComponent_Template_textarea_ngModelChange_8_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextToMorsecodeComponent_Template_button_click_10_listener() { return ctx.generateMorseCode(); });
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.morsecode || (ctx.morsecode == null ? null : ctx.morsecode.length) < 0 ? "col-sm-12" : "col-sm-5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.morsecode == null ? null : ctx.morsecode.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("history", ctx.storage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _reference_reference_component__WEBPACK_IMPORTED_MODULE_10__["ReferenceComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 350px;\n  width: 100%;\n  overflow-y: scroll !important;\n}\n\n.card[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n\nfa-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: black;\n}\n\n\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: black;\n}\n\n\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-label {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVuYmEvRG9jdW1lbnRzL3dvcmtzcGFjZS9tb3JzZS1jb2RlLWdlbmVyYXRvci9tb3JzZS1jb2RlLWdlbmVyYXRvci9zcmMvYXBwL2NvbXBvbmVudHMvVGV4dE1vcnNlQ29kZS90ZXh0LXRvLW1vcnNlY29kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9UZXh0TW9yc2VDb2RlL3RleHQtdG8tbW9yc2Vjb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREFFO0VBQ0UscUJBQUE7QUNFSjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQSxrQkFBQTs7QUFDQTtFQUNFLFlBQUE7QUNBRjs7QURHQSx5QkFBQTs7QUFDQTtFQUNFLFlBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvVGV4dE1vcnNlQ29kZS90ZXh0LXRvLW1vcnNlY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xuICBwcmUge1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgfVxufVxuXG5mYS1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vLyBkZWZhdWx0IGNvbG9yXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogZm9jdXNlZCBjb2xvciAqL1xuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIGZsb2F0aW5nIGxhYmVsIGNvbG9yICovXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG59XG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogMzUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbn1cbi5jYXJkIHByZSB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuZmEtaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIGZvY3VzZWQgY29sb3IgKi9cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBmbG9hdGluZyBsYWJlbCBjb2xvciAqL1xuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextToMorsecodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text-morse-code',
                templateUrl: './text-to-morsecode.component.html',
                styleUrls: ['./text-to-morsecode.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/morse-code-text/morse-code-text.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/morse-code-text/morse-code-text.component.ts ***!
  \*************************************************************************/
/*! exports provided: MorseCodeTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorseCodeTextComponent", function() { return MorseCodeTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _domain_numbers_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/numbers.enum */ "./src/app/domain/numbers.enum.ts");
/* harmony import */ var _domain_characters_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/characters.enum */ "./src/app/domain/characters.enum.ts");
/* harmony import */ var _domain_alphabets_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/alphabets.enum */ "./src/app/domain/alphabets.enum.ts");
/* harmony import */ var _domain_special_char_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/special-char.enum */ "./src/app/domain/special-char.enum.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _reference_reference_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reference/reference.component */ "./src/app/components/reference/reference.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");













const _c0 = function () { return { "display": "flex", "align-items": "center" }; };
const _c1 = function () { return { "display": "flex", "justify-content": "center" }; };
function MorseCodeTextComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", !ctx_r0.isMobile() ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.isMobile() ? ctx_r0.arrowDownIcon : ctx_r0.arrowRightIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.text);
} }
const _c2 = function () { return { standalone: true }; };
class MorseCodeTextComponent {
    constructor() {
        this.arrowRightIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowRight"];
        this.arrowDownIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowDown"];
        this.alphabetKeys = Object.keys(_domain_alphabets_enum__WEBPACK_IMPORTED_MODULE_3__["Alphabets"]);
        this.numberKeys = Object.keys(_domain_numbers_enum__WEBPACK_IMPORTED_MODULE_1__["Numbers"]);
        this.specialCharKeys = Object.keys(_domain_special_char_enum__WEBPACK_IMPORTED_MODULE_4__["SpecialChar"]);
    }
    ngOnInit() {
        const jsonObject = JSON.parse(localStorage.getItem('morsecode-to-text'));
        if (!!jsonObject) {
            this.storage = Object.entries(jsonObject).map(entry => {
                const entryValue = entry[1];
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
    generateText() {
        this.text = '';
        const morsecode = this.morseCode.trim();
        const codeArray = morsecode.split(' ');
        codeArray.forEach(code => {
            if (code === '/') {
                this.text += ' ';
            }
            else {
                let char = this.alphabetKeys.find(key => _domain_alphabets_enum__WEBPACK_IMPORTED_MODULE_3__["Alphabets"][key] === code);
                if (!!char) {
                    this.text += char;
                }
                else {
                    char = this.numberKeys.find(key => _domain_numbers_enum__WEBPACK_IMPORTED_MODULE_1__["Numbers"][key] === code);
                    if (!!char) {
                        this.text += _domain_characters_enum__WEBPACK_IMPORTED_MODULE_2__["Characters"][char];
                    }
                    else {
                        char = this.specialCharKeys.find(key => _domain_special_char_enum__WEBPACK_IMPORTED_MODULE_4__["SpecialChar"][key] === code);
                        if (!!char) {
                            this.text += _domain_characters_enum__WEBPACK_IMPORTED_MODULE_2__["Characters"][char];
                        }
                    }
                }
            }
        });
        if (!!this.text && !!this.morseCode) {
            this.saveToStorage();
        }
    }
    saveToStorage() {
        if (this.storage.length > 10) {
            this.storage.splice(0, 1);
        }
        this.storage.push({
            key: this.text.toUpperCase(),
            value: this.morseCode
        });
        localStorage.setItem('morsecode-to-text', JSON.stringify(this.storage));
    }
    isLetter(c) {
        return c.toLowerCase() !== c.toUpperCase();
    }
    isMobile() {
        return window.matchMedia('(max-width: 487px)').matches;
    }
}
MorseCodeTextComponent.ɵfac = function MorseCodeTextComponent_Factory(t) { return new (t || MorseCodeTextComponent)(); };
MorseCodeTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MorseCodeTextComponent, selectors: [["app-morse-code-text"]], decls: 22, vars: 7, consts: [[1, "container-fluid", "mt-3"], [1, "row"], [3, "ngClass"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-subtitle", "pl-3"], [1, "card-body"], ["appearance", "outline", 1, "mb-4", 2, "margin-bottom", "0 !important"], ["matInput", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "float-right"], ["type", "button", 1, "btn", 3, "click"], [4, "ngIf"], [1, "row", "mt-5"], [1, "col-md-12"], [1, "card"], [3, "history"], [1, "col-sm-1", 3, "ngStyle"], ["size", "4x", 3, "icon"], [1, "col-sm-5"], [1, "card-text"]], template: function MorseCodeTextComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MorseCodeTextComponent_Template_textarea_ngModelChange_12_listener($event) { return ctx.morseCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MorseCodeTextComponent_Template_button_click_14_listener() { return ctx.generateText(); });
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.text || (ctx.text == null ? null : ctx.text.length) < 0 ? "col-sm-12" : "col-sm-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.morseCode)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rows", !ctx.text || (ctx.text == null ? null : ctx.text.length) < 0 ? 5 : 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.text == null ? null : ctx.text.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("history", ctx.storage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _reference_reference_component__WEBPACK_IMPORTED_MODULE_10__["ReferenceComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: bold;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 350px;\n  width: 100%;\n  overflow-y: scroll !important;\n}\n\n.card[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n}\n\nfa-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: black;\n}\n\n\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: black;\n}\n\n\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-label {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVuYmEvRG9jdW1lbnRzL3dvcmtzcGFjZS9tb3JzZS1jb2RlLWdlbmVyYXRvci9tb3JzZS1jb2RlLWdlbmVyYXRvci9zcmMvYXBwL2NvbXBvbmVudHMvbW9yc2UtY29kZS10ZXh0L21vcnNlLWNvZGUtdGV4dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb3JzZS1jb2RlLXRleHQvbW9yc2UtY29kZS10ZXh0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREFFO0VBQ0UscUJBQUE7QUNFSjs7QURBRTtFQUNFLGtCQUFBO0FDRUo7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0Esa0JBQUE7O0FBQ0E7RUFDRSxZQUFBO0FDQUY7O0FER0EseUJBQUE7O0FBQ0E7RUFDRSxZQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vcnNlLWNvZGUtdGV4dC9tb3JzZS1jb2RlLXRleHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogMzUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgcHJlIHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIH1cbiAgLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMCAxLjI1cmVtO1xuICB9XG59XG5cbmZhLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8vIGRlZmF1bHQgY29sb3Jcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBmb2N1c2VkIGNvbG9yICovXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogZmxvYXRpbmcgbGFiZWwgY29sb3IgKi9cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiBibGFjaztcbn1cbiIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRleHRhcmVhIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xufVxuLmNhcmQgcHJlIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLmNhcmQgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDAgMS4yNXJlbTtcbn1cblxuZmEtaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIGZvY3VzZWQgY29sb3IgKi9cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBmbG9hdGluZyBsYWJlbCBjb2xvciAqL1xuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MorseCodeTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-morse-code-text',
                templateUrl: './morse-code-text.component.html',
                styleUrls: ['./morse-code-text.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/reference/reference.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/reference/reference.component.ts ***!
  \*************************************************************/
/*! exports provided: ReferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceComponent", function() { return ReferenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _domain_alphabets_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/alphabets.enum */ "./src/app/domain/alphabets.enum.ts");
/* harmony import */ var _domain_numbers_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/numbers.enum */ "./src/app/domain/numbers.enum.ts");
/* harmony import */ var _domain_special_char_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/special-char.enum */ "./src/app/domain/special-char.enum.ts");
/* harmony import */ var _domain_characters_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/characters.enum */ "./src/app/domain/characters.enum.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");











function ReferenceComponent_div_7_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const key_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.convertCode(ctx_r0.alphabetCode[key_r4]));
} }
function ReferenceComponent_div_12_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const key_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.showKey(key_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.convertCode(ctx_r1.numberCode[key_r5]));
} }
function ReferenceComponent_div_16_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const key_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.format(key_r6), " [ ", ctx_r2.showKey(key_r6), " ]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.convertCode(ctx_r2.splCharCode[key_r6]));
} }
function ReferenceComponent_mat_tab_18_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReferenceComponent_mat_tab_18_div_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const key_r8 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.playMorseText(i_r9, key_r8.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReferenceComponent_mat_tab_18_div_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.pauseResumeAudio(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReferenceComponent_mat_tab_18_div_3_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.stopAudio(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
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
} }
function ReferenceComponent_mat_tab_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReferenceComponent_mat_tab_18_div_3_Template, 15, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.history);
} }
const _c0 = function () { return [5, 10, 15]; };
const _c1 = function () { return [5, 10]; };
class ReferenceComponent {
    constructor() {
        this.alphabetCode = _domain_alphabets_enum__WEBPACK_IMPORTED_MODULE_1__["Alphabets"];
        this.numberCode = _domain_numbers_enum__WEBPACK_IMPORTED_MODULE_2__["Numbers"];
        this.splCharCode = _domain_special_char_enum__WEBPACK_IMPORTED_MODULE_3__["SpecialChar"];
        // icons
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
    convertCode(code) {
        return code.split('').join(' ');
    }
    format(key) {
        return key.replace('_', ' ');
    }
    showKey(key) {
        if (!!_domain_characters_enum__WEBPACK_IMPORTED_MODULE_4__["Characters"][key]) {
            return (_domain_characters_enum__WEBPACK_IMPORTED_MODULE_4__["Characters"][key]);
        }
        return key;
    }
    pageAlphabetEvent(event) {
        const startIndex = event.pageIndex * event.pageSize;
        let endIndex = startIndex + event.pageSize;
        if (endIndex > this.alphabetKeys.length) {
            endIndex = this.alphabetKeys.length;
        }
        this.alphabetPagedList = this.alphabetKeys.slice(startIndex, endIndex);
    }
    pageSplCharEvent(event) {
        const startIndex = event.pageIndex * event.pageSize;
        let endIndex = startIndex + event.pageSize;
        if (endIndex > this.splCharKeys.length) {
            endIndex = this.splCharKeys.length;
        }
        this.splCharPagedList = this.splCharKeys.slice(startIndex, endIndex);
    }
    playMorseText(index, value) {
        if (this.audioContexts[index] === undefined) {
            // Chrome requires audio context after gesture
            // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
            this.createContext(index);
        }
        else if (this.audioContexts[index].state === 'suspended') {
            this.audioContexts[index].resume(); // resume play when paused.
            return;
        }
        this.generateMorseAudio(index, this.audioContexts[index].currentTime, value);
    }
    pauseResumeAudio(index) {
        if (!!this.audioContexts[index]) {
            if (this.audioContexts[index].state === 'running') {
                this.audioContexts[index].suspend();
            }
        }
    }
    stopAudio(index) {
        if (!!this.audioContexts[index]) {
            if (this.audioContexts[index].state !== 'closed') {
                this.audioContexts[index].close().then(() => {
                    this.audioContexts[index] = undefined;
                });
            }
        }
    }
    createContext(index) {
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
    generateMorseAudio(index, time, morse) {
        for (const code of morse) {
            if (code === ' ') {
                time += 3 * this.dot;
            }
            else if (code !== undefined) {
                time = this.createSound(index, time, code);
                time += 2 * this.dot;
            }
        }
    }
    createSound(index, time, char) {
        for (const c of char) {
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
        return time;
    }
}
ReferenceComponent.ɵfac = function ReferenceComponent_Factory(t) { return new (t || ReferenceComponent)(); };
ReferenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReferenceComponent, selectors: [["app-reference"]], inputs: { history: "history" }, decls: 19, vars: 14, consts: [[1, "min-height", "container-fluid"], [1, "text-center", "pb-3"], ["mat-align-tabs", "start"], ["label", "Alphabets"], [1, "row", "pt-3"], [1, "p-1", "col-md-12", "col-lg-12", "col-sm-12", "col-xs-12"], ["class", "row text-center", 4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageSizeOptions", "showFirstLastButtons", "page"], ["label", "Numbers"], ["label", "Special Characters"], ["label", "History", 4, "ngIf"], [1, "row", "text-center"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "col-lg-4", "col-md-4", "col-sm-12"], [2, "font-weight", "bold"], ["label", "History"], [1, "col-lg-4", "col-md-4", "col-sm-4"], [1, "mr-1", "btn", 3, "click"], [2, "color", "black !important", 3, "icon"], [1, "btn", 3, "click"]], template: function ReferenceComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ReferenceComponent_Template_mat_paginator_page_8_listener($event) { return ctx.pageAlphabetEvent($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ReferenceComponent_Template_mat_paginator_page_17_listener($event) { return ctx.pageSplCharEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ReferenceComponent_mat_tab_18_Template, 4, 1, "mat-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"]], styles: [".mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n\n.min-height[_ngcontent-%COMP%] {\n  min-height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVuYmEvRG9jdW1lbnRzL3dvcmtzcGFjZS9tb3JzZS1jb2RlLWdlbmVyYXRvci9tb3JzZS1jb2RlLWdlbmVyYXRvci9zcmMvYXBwL2NvbXBvbmVudHMvcmVmZXJlbmNlL3JlZmVyZW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZWZlcmVuY2UvcmVmZXJlbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZmVyZW5jZS9yZWZlcmVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYi1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG59XG5cbi5taW4taGVpZ2h0IHtcbiAgbWluLWhlaWdodDogNjAwcHhcbn1cbiIsIi5tYXQtdGFiLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn1cblxuLm1pbi1oZWlnaHQge1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferenceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reference',
                templateUrl: './reference.component.html',
                styleUrls: ['./reference.component.scss']
            }]
    }], function () { return []; }, { history: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/domain/alphabets.enum.ts":
/*!******************************************!*\
  !*** ./src/app/domain/alphabets.enum.ts ***!
  \******************************************/
/*! exports provided: Alphabets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alphabets", function() { return Alphabets; });
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
    Alphabets["\u00C4"] = ".-.-";
    Alphabets["\u00D6"] = "---.";
    Alphabets["\u00DC"] = "..--";
    Alphabets["CH"] = "----";
    Alphabets["\u00E9"] = "..-..";
    Alphabets["\u00F1"] = "--.--";
})(Alphabets || (Alphabets = {}));


/***/ }),

/***/ "./src/app/domain/characters.enum.ts":
/*!*******************************************!*\
  !*** ./src/app/domain/characters.enum.ts ***!
  \*******************************************/
/*! exports provided: Characters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Characters", function() { return Characters; });
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


/***/ }),

/***/ "./src/app/domain/numbers.enum.ts":
/*!****************************************!*\
  !*** ./src/app/domain/numbers.enum.ts ***!
  \****************************************/
/*! exports provided: Numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Numbers", function() { return Numbers; });
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


/***/ }),

/***/ "./src/app/domain/special-char.enum.ts":
/*!*********************************************!*\
  !*** ./src/app/domain/special-char.enum.ts ***!
  \*********************************************/
/*! exports provided: SpecialChar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialChar", function() { return SpecialChar; });
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


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shenba/Documents/workspace/morse-code-generator/morse-code-generator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map