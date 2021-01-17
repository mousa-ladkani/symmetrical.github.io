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

/***/ "./src/app/User.ts":
/*!*************************!*\
  !*** ./src/app/User.ts ***!
  \*************************/
/*! exports provided: IUser, Isupport, IPageUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IUser", function() { return IUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Isupport", function() { return Isupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPageUser", function() { return IPageUser; });
class IUser {
}
class Isupport {
}
class IPageUser {
}


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
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");






const routes = [
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"] },
    { path: 'users/:id', component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"] },
    { path: 'user/:id', component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailsComponent"] },
    { path: '**', redirectTo: '/users', pathMatch: 'full' }
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _my_loader_my_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-loader/my-loader.component */ "./src/app/my-loader/my-loader.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'Test';
        this.name = "test-from parent";
        this.message = "";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-my-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _my_loader_my_loader_component__WEBPACK_IMPORTED_MODULE_3__["MyLoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users-service.service */ "./src/app/users-service.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");
/* harmony import */ var _my_loader_my_loader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./my-loader/my-loader.component */ "./src/app/my-loader/my-loader.component.ts");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var _loader_interceptor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./loader-interceptor.service */ "./src/app/loader-interceptor.service.ts");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_loader_service__WEBPACK_IMPORTED_MODULE_18__["LoaderService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _loader_interceptor_service__WEBPACK_IMPORTED_MODULE_19__["LoaderInterceptor"], multi: true }, _users_service_service__WEBPACK_IMPORTED_MODULE_9__["UsersServiceService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_15__["CoreModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"],
        _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_16__["UserDetailsComponent"],
        _my_loader_my_loader_component__WEBPACK_IMPORTED_MODULE_17__["MyLoaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_15__["CoreModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"],
                    _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_16__["UserDetailsComponent"],
                    _my_loader_my_loader_component__WEBPACK_IMPORTED_MODULE_17__["MyLoaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_15__["CoreModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"]
                ],
                providers: [_loader_service__WEBPACK_IMPORTED_MODULE_18__["LoaderService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _loader_interceptor_service__WEBPACK_IMPORTED_MODULE_19__["LoaderInterceptor"], multi: true }, _users_service_service__WEBPACK_IMPORTED_MODULE_9__["UsersServiceService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-import.guard */ "./src/app/core/module-import.guard.ts");





class CoreModule {
    constructor(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_3__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12)); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]
                ]
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.navbarVisibilityToggle = false;
    }
    ngOnInit() {
    }
    Filter(value) {
        this.router.navigate(['/users/' + value]);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 0, consts: [[1, "header"], ["routerLink", "/"], [1, "header-right"], ["routerLink", "/users"], ["type", "text", "id", "UserID", "name", "UserID", "placeholder", "Search by user id..", 3, "input"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Users List App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HeaderComponent_Template_input_input_7_listener($event) { return ctx.Filter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 12px 10px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/module-import.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import.guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "./src/app/loader-interceptor.service.ts":
/*!***********************************************!*\
  !*** ./src/app/loader-interceptor.service.ts ***!
  \***********************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.service */ "./src/app/loader.service.ts");





class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.requests = [];
    }
    removeRequest(req) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.loaderService.isLoading.next(this.requests.length > 0);
    }
    intercept(req, next) {
        this.requests.push(req);
        console.log("No of requests--->" + this.requests.length);
        this.loaderService.isLoading.next(true);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(observer => {
            const subscription = next.handle(req)
                .subscribe(event => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                    this.removeRequest(req);
                    observer.next(event);
                }
            }, err => {
                console.log('error' + err);
                this.removeRequest(req);
                observer.error(err);
            }, () => {
                this.removeRequest(req);
                observer.complete();
            });
            // remove request from queue when cancelled
            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"])); };
LoaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/loader.service.ts":
/*!***********************************!*\
  !*** ./src/app/loader.service.ts ***!
  \***********************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/my-loader/my-loader.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-loader/my-loader.component.ts ***!
  \**************************************************/
/*! exports provided: MyLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyLoaderComponent", function() { return MyLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");




class MyLoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.loaderService.isLoading.subscribe((v) => {
            console.log(v);
            this.loading = v;
        });
    }
    ngOnInit() {
    }
}
MyLoaderComponent.ɵfac = function MyLoaderComponent_Factory(t) { return new (t || MyLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"])); };
MyLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyLoaderComponent, selectors: [["app-my-loader"]], decls: 2, vars: 1, consts: [[1, "progress-loader", 3, "hidden"], ["mode", "indeterminate"]], template: function MyLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.loading);
    } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWxvYWRlci9teS1sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-loader',
                templateUrl: './my-loader.component.html',
                styleUrls: ['./my-loader.component.css']
            }]
    }], function () { return [{ type: _loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function PaginationComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const pageNumber_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getUsersFor(pageNumber_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNumber_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.currentPage === pageNumber_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageNumber_r1, " ");
} }
class PaginationComponent {
    constructor() {
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    getUsersFor(selectedPageNumber) {
        this.pageChanged.emit(selectedPageNumber);
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { totalPages: "totalPages", pageNumbers: "pageNumbers", currentPage: "currentPage" }, outputs: { pageChanged: "pageChanged" }, decls: 9, vars: 7, consts: [["aria-label", "Page navigation example"], [1, "pagination"], [1, "page-item"], [1, "page-link", 3, "disabled", "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "page-link", 3, "click"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_button_click_3_listener() { return ctx.getUsersFor(ctx.currentPage - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_li_5_Template, 3, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_button_click_7_listener() { return ctx.getUsersFor(ctx.currentPage + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.currentPage === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.currentPage === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageNumbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.currentPage === ctx.totalPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.currentPage === ctx.totalPages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["nav[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\nbutton[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%] {\r\n  background-color: #8cceb8;\r\n  font-weight: bold;\r\n}\r\n.page-link[_ngcontent-%COMP%] {\r\n  border: 0.2px solid white !important;\r\n}\r\n.page-link[_ngcontent-%COMP%]:focus {\r\n  border: 1px solid white !important;\r\n  background-color: #127757 !important;\r\n  outline: none;\r\n}\r\n.page-link[_ngcontent-%COMP%]:active {\r\n  border: 1px solid white !important;\r\n  outline: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsb0NBQW9DO0VBQ3BDLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5idXR0b246ZGlzYWJsZWQsXHJcbmJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4Y2NlYjg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnBhZ2UtbGluayB7XHJcbiAgYm9yZGVyOiAwLjJweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5wYWdlLWxpbms6Zm9jdXMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyNzc1NyAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnBhZ2UtbGluazphY3RpdmUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagination',
                templateUrl: './pagination.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styleUrls: ['./pagination.component.css']
            }]
    }], function () { return []; }, { totalPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageNumbers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user-details/user-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-details/user-details.component.ts ***!
  \********************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _users_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users-service.service */ "./src/app/users-service.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");





class UserDetailsComponent {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.getUserDetails(id);
        });
    }
    getUserDetails(userId) {
        this.userService.getUserDetails(userId).subscribe((response) => {
            this.userVar = response.data;
        }, (error) => {
            console.log('Got the Error as:', error);
        });
    }
    ngOnDestroy() {
    }
}
UserDetailsComponent.ɵfac = function UserDetailsComponent_Factory(t) { return new (t || UserDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_service_service__WEBPACK_IMPORTED_MODULE_2__["UsersServiceService"])); };
UserDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDetailsComponent, selectors: [["app-user-details"]], decls: 13, vars: 5, consts: [[1, "container"], [1, "example-card", "card"], ["alt", "Person", 1, "card__image", 3, "src"], [1, "card__name"], [1, "grid-container"], [1, "grid-child-posts", 2, "margin-left", "20%"], [1, "grid-child-followers"], ["routerLink", "/", 1, "btn", "draw-border"]], template: function UserDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.userVar.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.userVar.first_name, " ", ctx.userVar.last_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ID:", ctx.userVar.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userVar.email, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\r\n  padding: 50px !important;\r\n  grid-template-columns: 300px 300px 300px !important;\r\n  grid-gap: 50px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #f5f5f5;\r\n  font-family: \"Baloo Paaji 2\", cursive;\r\n  padding-left: 35% !important;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  background-color: #58bd9e;\r\n  \r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  box-shadow: rgba(0, 0, 0, 0.7);\r\n  color: white;\r\n  width: 45%;\r\n}\r\n\r\n.card__name[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  font-size: 1.5em;\r\n  font-weight: 500;\r\n}\r\n\r\n.card__image[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  \r\n  margin-top: 20px;\r\n  box-shadow: 0 10px 50px rgb(255 255 255);\r\n  height: 128px;\r\n  width: 128px;\r\n}\r\n\r\n.draw-border[_ngcontent-%COMP%] {\r\n  box-shadow: inset 0 0 0 4px white;\r\n  color: white;\r\n  transition: color 0.25s 0.0833333333s;\r\n  position: relative;\r\n  border-radius: 10px;\r\n}\r\n\r\n.draw-border[_ngcontent-%COMP%]::before, .draw-border[_ngcontent-%COMP%]::after {\r\n  border: 0 solid transparent;\r\n  box-sizing: border-box;\r\n  content: \"\";\r\n  pointer-events: none;\r\n  position: absolute;\r\n  width: 0rem;\r\n  height: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  border-radius: 10px;\r\n}\r\n\r\n.draw-border[_ngcontent-%COMP%]::before {\r\n  border-bottom-width: 4px;\r\n  border-left-width: 4px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.draw-border[_ngcontent-%COMP%]::after {\r\n  border-top-width: 4px;\r\n  border-right-width: 4px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.draw-border[_ngcontent-%COMP%]:hover {\r\n  color: #127757;\r\n  border-radius: 10px;\r\n}\r\n\r\n.draw-border[_ngcontent-%COMP%]:hover::before, .draw-border[_ngcontent-%COMP%]:hover::after {\r\n  border-color: #127757;\r\n  transition: border-color 0s, width 0.25s, height 0.25s;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.draw-border[_ngcontent-%COMP%]:hover::before {\r\n  transition-delay: 0s, 0s, 0.25s;\r\n  border-radius: 10px;\r\n}\r\n\r\n.draw-border[_ngcontent-%COMP%]:hover::after {\r\n  transition-delay: 0s, 0.25s, 0s;\r\n  border-radius: 10px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  line-height: 1.5;\r\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\r\n  padding: 0.4em 0.75em;\r\n  letter-spacing: 0.05rem;\r\n  margin: 1em;\r\n  width: 13rem;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:focus {\r\n  outline: 2px dotted #55d7dc;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-gap: 20px;\r\n  font-size: 1.2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1EQUFtRDtFQUNuRCxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIscUNBQXFDO0VBQ3JDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxZQUFZO0VBRVoscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFNBQVM7RUFDVCxRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUscUJBQXFCO0VBRXJCLHNEQUFzRDtFQUN0RCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUVFLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7O0FBRUE7RUFFRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQyxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAzMDBweCAzMDBweCAhaW1wb3J0YW50O1xyXG4gIGdyaWQtZ2FwOiA1MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBmb250LWZhbWlseTogXCJCYWxvbyBQYWFqaSAyXCIsIGN1cnNpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OGJkOWU7XHJcbiAgLyogaGVpZ2h0OiAzN3JlbTsgKi9cclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG4uY2FyZF9fbmFtZSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5jYXJkX19pbWFnZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC8qIGJvcmRlcjogNXB4IHNvbGlkICMyNzIxMzM7ICovXHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggNTBweCByZ2IoMjU1IDI1NSAyNTUpO1xyXG4gIGhlaWdodDogMTI4cHg7XHJcbiAgd2lkdGg6IDEyOHB4O1xyXG59XHJcblxyXG4uZHJhdy1ib3JkZXIge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDRweCB3aGl0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjI1cyAwLjA4MzMzMzMzMzNzO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIDAuMDgzMzMzMzMzM3M7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kcmF3LWJvcmRlcjo6YmVmb3JlLFxyXG4uZHJhdy1ib3JkZXI6OmFmdGVyIHtcclxuICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMHJlbTtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kcmF3LWJvcmRlcjo6YmVmb3JlIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiA0cHg7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZHJhdy1ib3JkZXI6OmFmdGVyIHtcclxuICBib3JkZXItdG9wLXdpZHRoOiA0cHg7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmRyYXctYm9yZGVyOmhvdmVyIHtcclxuICBjb2xvcjogIzEyNzc1NztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZHJhdy1ib3JkZXI6aG92ZXI6OmJlZm9yZSxcclxuLmRyYXctYm9yZGVyOmhvdmVyOjphZnRlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTI3NzU3O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDBzLCB3aWR0aCAwLjI1cywgaGVpZ2h0IDAuMjVzO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwcywgd2lkdGggMC4yNXMsIGhlaWdodCAwLjI1cztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmRyYXctYm9yZGVyOmhvdmVyOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjI1cztcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMjVzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kcmF3LWJvcmRlcjpob3Zlcjo6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHMsIDAuMjVzLCAwcztcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMC4yNXMsIDBzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGZvbnQ6IDcwMCAxLjJyZW0gXCJSb2JvdG8gU2xhYlwiLCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmc6IDAuNGVtIDAuNzVlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcclxuICBtYXJnaW46IDFlbTtcclxuICB3aWR0aDogMTNyZW07XHJcbn1cclxuXHJcbi5idG46Zm9jdXMge1xyXG4gIG91dGxpbmU6IDJweCBkb3R0ZWQgIzU1ZDdkYztcclxufVxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-details',
                templateUrl: './user-details.component.html',
                styleUrls: ['./user-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _users_service_service__WEBPACK_IMPORTED_MODULE_2__["UsersServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/users-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/users-service.service.ts ***!
  \******************************************/
/*! exports provided: UsersServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersServiceService", function() { return UsersServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class UsersServiceService {
    constructor(http) {
        this.http = http;
    }
    getUsersForPage(pageNumber) {
        return this.http
            .get(`https://reqres.in/api/users?page=${pageNumber}`);
    }
    getUserDetails(userId) {
        return this.http
            .get(`https://reqres.in/api/users/${userId}`);
    }
}
UsersServiceService.ɵfac = function UsersServiceService_Factory(t) { return new (t || UsersServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsersServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersServiceService, factory: UsersServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../User */ "./src/app/User.ts");
/* harmony import */ var _users_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users-service.service */ "./src/app/users-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");








function UsersComponent_div_0_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sorry but there are no data to show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_div_0_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.FilterCssClass ? "card-Search" : "card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", card_r4.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r4.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/user/", card_r4.id, "");
} }
function UsersComponent_div_0_app_pagination_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-pagination", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function UsersComponent_div_0_app_pagination_3_Template_app_pagination_pageChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.getUsersFor($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalPages", ctx_r3.totalPages)("pageNumbers", ctx_r3.pageNumbers)("currentPage", ctx_r3.currentPage);
} }
function UsersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersComponent_div_0_h1_1_Template, 2, 0, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UsersComponent_div_0_mat_card_2_Template, 7, 4, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UsersComponent_div_0_app_pagination_3_Template, 1, 3, "app-pagination", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.FilterCssClass ? "container-Search" : "container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.NoCards);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.PagingExist);
} }
class UsersComponent {
    constructor(_UsersServiceService, router, route) {
        this._UsersServiceService = _UsersServiceService;
        this.router = router;
        this.route = route;
        this.GpageNumber = 1;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.CardsExist = true;
            this.PagingExist = true;
            this.getUsersFor(1, this.id);
            this.FilterCssClass = (this.id != undefined ? true : false);
        });
    }
    getUsersFor(pageNumber = 1, filter = 0) {
        if (filter == 0) {
            this._UsersServiceService.getUsersForPage(pageNumber)
                .subscribe((response) => {
                this.users = response.data;
                this.totalPages = response.total_pages;
                this.pageNumbers = [1];
                for (let i = 2; i < this.totalPages + 1; i++) {
                    this.pageNumbers.push(i);
                }
                this.currentPage = response.page;
                this.GpageNumber = pageNumber;
            }, (error) => {
                console.log('Got the Error as:', error);
            });
            this.PagingExist = (this.CardsExist ? true : false);
            this.FilterCssClass = false;
        }
        else {
            this._UsersServiceService.getUserDetails(filter).subscribe((response) => {
                if (response.data) {
                    this.FoundedUser = new _User__WEBPACK_IMPORTED_MODULE_1__["IUser"]();
                    this.FoundedUser.id = response.data.id;
                    this.FoundedUser.avatar = response.data.avatar;
                    this.FoundedUser.first_name = response.data.first_name;
                    this.users = null;
                    this.users = [
                        { "id": this.FoundedUser.id, "email": "", "first_name": this.FoundedUser.first_name, "last_name": "", "avatar": this.FoundedUser.avatar }
                    ];
                }
                this.NoCards = false;
            }, (error) => {
                this.users = null;
                if (error.status == "404")
                    this.NoCards = true;
                console.log('Got the Error as:', error);
            });
            this.PagingExist = false;
            this.FilterCssClass = true;
        }
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_service_service__WEBPACK_IMPORTED_MODULE_2__["UsersServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["style", "color:black;", 4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "totalPages", "pageNumbers", "currentPage", "pageChanged", 4, "ngIf"], [2, "color", "black"], ["alt", "Person", 1, "card__image", 3, "src"], [1, "card__name"], [1, "grid-container"], [1, "btn", "draw-border", 3, "routerLink"], [3, "totalPages", "pageNumbers", "currentPage", "pageChanged"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UsersComponent_div_0_Template, 4, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CardsExist);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  padding: 50px !important;\r\n  display: grid;\r\n  grid-template-columns: 300px 300px 300px !important;\r\n  grid-gap: 50px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  background-color: #f5f5f5;\r\n  font-family: \"Baloo Paaji 2\", cursive;\r\n}\r\n.container-Search[_ngcontent-%COMP%] {\r\n  padding: 50px !important;\r\n  grid-template-columns: 300px 300px 300px !important;\r\n  grid-gap: 50px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #f5f5f5;\r\n  font-family: \"Baloo Paaji 2\", cursive;\r\n  padding-left: 35% !important;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  background-color: #58bd9e;\r\n  \r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  box-shadow: rgba(0, 0, 0, 0.7);\r\n  color: white;\r\n}\r\n.card-Search[_ngcontent-%COMP%] {\r\n  background-color: #58bd9e;\r\n  \r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  box-shadow: rgba(0, 0, 0, 0.7);\r\n  color: white;\r\n  width: 45%;\r\n}\r\n.card__name[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  font-size: 1.5em;\r\n  font-weight: 500;\r\n}\r\n.card__image[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  \r\n  margin-top: 20px;\r\n  box-shadow: 0 10px 50px rgb(255 255 255);\r\n  height: 128px;\r\n  width: 128px;\r\n}\r\n.draw-border[_ngcontent-%COMP%] {\r\n  box-shadow: inset 0 0 0 4px white;\r\n  color: white;\r\n  transition: color 0.25s 0.0833333333s;\r\n  position: relative;\r\n  border-radius: 10px;\r\n}\r\n.draw-border[_ngcontent-%COMP%]::before, .draw-border[_ngcontent-%COMP%]::after {\r\n  border: 0 solid transparent;\r\n  box-sizing: border-box;\r\n  content: \"\";\r\n  pointer-events: none;\r\n  position: absolute;\r\n  width: 0rem;\r\n  height: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  border-radius: 10px;\r\n}\r\n.draw-border[_ngcontent-%COMP%]::before {\r\n  border-bottom-width: 4px;\r\n  border-left-width: 4px;\r\n  border-radius: 10px;\r\n}\r\n.draw-border[_ngcontent-%COMP%]::after {\r\n  border-top-width: 4px;\r\n  border-right-width: 4px;\r\n  border-radius: 10px;\r\n}\r\n.draw-border[_ngcontent-%COMP%]:hover {\r\n  color: #127757;\r\n  border-radius: 10px;\r\n}\r\n.draw-border[_ngcontent-%COMP%]:hover::before, .draw-border[_ngcontent-%COMP%]:hover::after {\r\n  border-color: #127757;\r\n  transition: border-color 0s, width 0.25s, height 0.25s;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 10px;\r\n}\r\n.draw-border[_ngcontent-%COMP%]:hover::before {\r\n  transition-delay: 0s, 0s, 0.25s;\r\n  border-radius: 10px;\r\n}\r\n.draw-border[_ngcontent-%COMP%]:hover::after {\r\n  transition-delay: 0s, 0.25s, 0s;\r\n  border-radius: 10px;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  line-height: 1.5;\r\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\r\n  padding: 0.4em 0.75em;\r\n  letter-spacing: 0.05rem;\r\n  margin: 1em;\r\n  width: 13rem;\r\n}\r\n.btn[_ngcontent-%COMP%]:focus {\r\n  outline: 2px dotted #55d7dc;\r\n}\r\n.grid-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-gap: 20px;\r\n  font-size: 1.2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsbURBQW1EO0VBQ25ELGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5QkFBeUI7RUFDekIscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsbURBQW1EO0VBQ25ELGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixxQ0FBcUM7RUFDckMsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsWUFBWTtFQUVaLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7O0VBRUUsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFNBQVM7RUFDVCxRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxxQkFBcUI7RUFFckIsc0RBQXNEO0VBQ3RELFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFFRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFFRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogNTBweCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAzMDBweCAzMDBweCAhaW1wb3J0YW50O1xyXG4gIGdyaWQtZ2FwOiA1MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIFBhYWppIDJcIiwgY3Vyc2l2ZTtcclxufVxyXG4uY29udGFpbmVyLVNlYXJjaCB7XHJcbiAgcGFkZGluZzogNTBweCAhaW1wb3J0YW50O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMzAwcHggMzAwcHggIWltcG9ydGFudDtcclxuICBncmlkLWdhcDogNTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gUGFhamkgMlwiLCBjdXJzaXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMzUlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OGJkOWU7XHJcbiAgLyogaGVpZ2h0OiAzN3JlbTsgKi9cclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FyZC1TZWFyY2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OGJkOWU7XHJcbiAgLyogaGVpZ2h0OiAzN3JlbTsgKi9cclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNDUlO1xyXG59XHJcbi5jYXJkX19uYW1lIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uY2FyZF9faW1hZ2Uge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAvKiBib3JkZXI6IDVweCBzb2xpZCAjMjcyMTMzOyAqL1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDUwcHggcmdiKDI1NSAyNTUgMjU1KTtcclxuICBoZWlnaHQ6IDEyOHB4O1xyXG4gIHdpZHRoOiAxMjhweDtcclxufVxyXG4uZHJhdy1ib3JkZXIge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDRweCB3aGl0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjI1cyAwLjA4MzMzMzMzMzNzO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIDAuMDgzMzMzMzMzM3M7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmRyYXctYm9yZGVyOjpiZWZvcmUsXHJcbi5kcmF3LWJvcmRlcjo6YWZ0ZXIge1xyXG4gIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwcmVtO1xyXG4gIGhlaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uZHJhdy1ib3JkZXI6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogNHB4O1xyXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uZHJhdy1ib3JkZXI6OmFmdGVyIHtcclxuICBib3JkZXItdG9wLXdpZHRoOiA0cHg7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uZHJhdy1ib3JkZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTI3NzU3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmRyYXctYm9yZGVyOmhvdmVyOjpiZWZvcmUsXHJcbi5kcmF3LWJvcmRlcjpob3Zlcjo6YWZ0ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzEyNzc1NztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwcywgd2lkdGggMC4yNXMsIGhlaWdodCAwLjI1cztcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMHMsIHdpZHRoIDAuMjVzLCBoZWlnaHQgMC4yNXM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmRyYXctYm9yZGVyOmhvdmVyOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjI1cztcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMjVzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmRyYXctYm9yZGVyOmhvdmVyOjphZnRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcywgMC4yNXMsIDBzO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwLjI1cywgMHM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250OiA3MDAgMS4ycmVtIFwiUm9ib3RvIFNsYWJcIiwgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiAwLjRlbSAwLjc1ZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XHJcbiAgbWFyZ2luOiAxZW07XHJcbiAgd2lkdGg6IDEzcmVtO1xyXG59XHJcbi5idG46Zm9jdXMge1xyXG4gIG91dGxpbmU6IDJweCBkb3R0ZWQgIzU1ZDdkYztcclxufVxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.css']
            }]
    }], function () { return [{ type: _users_service_service__WEBPACK_IMPORTED_MODULE_2__["UsersServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


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

module.exports = __webpack_require__(/*! C:\Local Disk D_7282017242\ANGULAR10\FirstAng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map