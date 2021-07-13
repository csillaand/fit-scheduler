(self["webpackChunkbabel_client"] = self["webpackChunkbabel_client"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _modules_contracts_contracts_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/contracts/contracts.module */ 4277);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/auth/auth.module */ 3970);
/* harmony import */ var _modules_auth_login_success_login_success_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/auth/login-success/login-success.component */ 4539);
/* harmony import */ var _modules_contracts_contracts_list_contracts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contracts/contracts-list/contracts-list.component */ 6114);
/* harmony import */ var _modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dashboard/dashboard.module */ 8757);
/* harmony import */ var _modules_dashboard_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dashboard/homepage/homepage.component */ 1263);
/* harmony import */ var _services_guard_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/guard/is-authenticated.guard */ 2891);
/* harmony import */ var _modules_invoices_invoices_list_invoices_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/invoices/invoices-list/invoices-list.component */ 2215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);











const routes = [
    { path: 'login-success', component: _modules_auth_login_success_login_success_component__WEBPACK_IMPORTED_MODULE_2__.LoginSuccessPage },
    { path: '', component: _modules_dashboard_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__.HomepageComponent },
    {
        path: 'contracts',
        component: _modules_contracts_contracts_list_contracts_list_component__WEBPACK_IMPORTED_MODULE_3__.ContractsListComponent,
        canActivate: [_services_guard_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_6__.IsAuthenticatedGuard]
    },
    {
        path: 'invoices',
        component: _modules_invoices_invoices_list_invoices_list_component__WEBPACK_IMPORTED_MODULE_7__.InvoicesListComponent,
        canActivate: [_services_guard_is_authenticated_guard__WEBPACK_IMPORTED_MODULE_6__.IsAuthenticatedGuard]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_1__.AuthModule,
            _modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__.DashboardModule,
            _modules_contracts_contracts_module__WEBPACK_IMPORTED_MODULE_0__.ContractsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_1__.AuthModule,
        _modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__.DashboardModule,
        _modules_contracts_contracts_module__WEBPACK_IMPORTED_MODULE_0__.ContractsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navigation-bar/navigation-bar.component */ 9675);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container", "main-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavigationBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: [".main-container[_ngcontent-%COMP%] {\n  max-width: 95%;\n  background-color: #fff;\n  box-shadow: 0px 3px 6px #0000004d;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lclxuICAgIG1heC13aWR0aDogOTUlXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDA0ZFxuICAgIHBhZGRpbmc6IDE1cHhcbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interceptors/auth-interceptor */ 654);
/* harmony import */ var _modules_contracts_contracts_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/contracts/contracts.module */ 4277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navigation-bar/navigation-bar.component */ 9675);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var _modules_icons_icons_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/icons/icons.module */ 4419);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-oauth2-oidc */ 7316);
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/auth/auth.module */ 3970);
/* harmony import */ var _config_i18n_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/i18n.config */ 587);
/* harmony import */ var _config_auth_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/auth.config */ 483);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_common_locales_ro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/ro */ 6639);
/* harmony import */ var _angular_common_locales_ro__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ro__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _services_authorization__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/authorization */ 1821);
/* harmony import */ var _modules_invoices_invoices_list_invoices_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/invoices/invoices-list/invoices-list.component */ 2215);























(0,_angular_common__WEBPACK_IMPORTED_MODULE_13__.registerLocaleData)((_angular_common_locales_ro__WEBPACK_IMPORTED_MODULE_10___default()));
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HTTP_INTERCEPTORS, useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_0__.AuthInterceptor, multi: true },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_14__.LOCALE_ID, useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.defaultLocale },
        { provide: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_16__.OAuthResourceServerErrorHandler, useClass: _services_authorization__WEBPACK_IMPORTED_MODULE_11__.ClientRequestErrorHandler },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
            _modules_icons_icons_module__WEBPACK_IMPORTED_MODULE_5__.IconsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__.AuthModule,
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_16__.OAuthModule.forRoot(_config_auth_config__WEBPACK_IMPORTED_MODULE_8__.oAuthModuleConfig),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule.forRoot(_config_i18n_config__WEBPACK_IMPORTED_MODULE_7__.translationServiceConfig),
            _modules_contracts_contracts_module__WEBPACK_IMPORTED_MODULE_1__.ContractsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_4__.NavigationBarComponent,
        _modules_invoices_invoices_list_invoices_list_component__WEBPACK_IMPORTED_MODULE_12__.InvoicesListComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
        _modules_icons_icons_module__WEBPACK_IMPORTED_MODULE_5__.IconsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__.AuthModule, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_16__.OAuthModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, _modules_contracts_contracts_module__WEBPACK_IMPORTED_MODULE_1__.ContractsModule] }); })();


/***/ }),

/***/ 9675:
/*!***********************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationBarComponent": () => (/* binding */ NavigationBarComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_authorization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/authorization */ 1821);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);









const _c0 = function () {
  return ["far", "user-circle"];
};

function NavigationBarComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_ng_container_7_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r3.isMenuCollapsed = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_ng_container_7_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r5.isMenuCollapsed = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_ng_container_7_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r6.isMenuCollapsed = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_ng_container_7_Template_a_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r7.isMenuCollapsed = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_ng_container_7_Template_a_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r8.isMenuCollapsed = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_ng_container_7_Template_a_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r9.isMenuCollapsed = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_ng_container_7_Template_a_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r10.isMenuCollapsed = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_ng_container_7_Template_a_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r11.isMenuCollapsed = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_ng_container_7_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r12.logout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 17, "navbar.reports"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 19, "navbar.transactions"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/contracts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 21, "navbar.contracts"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/invoices");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 23, "navbar.invoices"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 25, "navbar.settings"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 27, "navbar.projects"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 29, "navbar.createNewProject"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 31, "navbar.logOut"));
  }
}

function NavigationBarComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_ng_template_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r13.login();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "navbar.logIn"));
  }
}

class NavigationBarComponent {
  constructor(authorisationService) {
    this.authorisationService = authorisationService;
    this.isMenuCollapsed = true;
    this.isUserLoggedIn$ = this.authorisationService.isUserLoggedInObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.share)());
  }

  login() {
    this.authorisationService.login();
  }

  logout() {
    this.authorisationService.logout();
  }

}

NavigationBarComponent.ɵfac = function NavigationBarComponent_Factory(t) {
  return new (t || NavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authorization__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService));
};

NavigationBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigationBarComponent,
  selectors: [["app-navigation-bar"]],
  decls: 11,
  vars: 6,
  consts: [[1, "navbar-main", "navbar", "navbar-expand-lg", "navbar-light", "mb-3"], [1, "navbar-brand", 3, "routerLink"], ["src", "../../../assets/logo.png", "width", "30", "height", "30", "alt", ""], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "collapse", "navbar-collapse", "flex-row-reverse", 3, "ngbCollapse"], [1, "navbar-nav", "text-right"], [4, "ngIf", "ngIfElse"], ["logged_out", ""], [1, "nav-item", "active"], [1, "nav-link", 3, "routerLink", "click"], [1, "nav-item"], [3, "icon"], ["type", "button", 1, "btn", "btn-dark", 3, "click"]],
  template: function NavigationBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_Template_button_click_3_listener() {
        return ctx.isMenuCollapsed = !ctx.isMenuCollapsed;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u2630 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NavigationBarComponent_ng_container_7_Template, 36, 34, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NavigationBarComponent_ng_template_9_Template, 4, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, ctx.isUserLoggedIn$))("ngIfElse", _r1);
    }
  },
  directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCollapse, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".navbar-main[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.navbar-main[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 150px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUFDSjtBQUNRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNaIiwiZmlsZSI6Im5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1tYWluXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxuICAgIC5uYXZiYXItYnJhbmRcbiAgICAgICAgaW1nXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvXG4iXX0= */"]
});

/***/ }),

/***/ 483:
/*!***************************************!*\
  !*** ./src/app/config/auth.config.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authCodeFlowConfig": () => (/* binding */ authCodeFlowConfig),
/* harmony export */   "oAuthModuleConfig": () => (/* binding */ oAuthModuleConfig)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);

const AUTH_PROVIDER_BASE_PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.gatekeeperUrl + 'openid';
const authCodeFlowConfig = {
    issuer: AUTH_PROVIDER_BASE_PATH,
    redirectUri: window.location.origin + '/login-success',
    clientId: '927126',
    responseType: 'code',
    scope: 'openid profile budget',
    showDebugInformation: true,
    timeoutFactor: 0.01,
    sessionChecksEnabled: true,
    postLogoutRedirectUri: window.location.origin + '/logout-success'
};
const oAuthModuleConfig = {
    resourceServer: {
        sendAccessToken: true,
    },
};


/***/ }),

/***/ 587:
/*!***************************************!*\
  !*** ./src/app/config/i18n.config.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translationServiceConfig": () => (/* binding */ translationServiceConfig)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _services_factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/factories */ 7176);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 2340);




const translationServiceConfig = {
    loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateLoader,
        useFactory: _services_factories__WEBPACK_IMPORTED_MODULE_0__.HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient]
    },
    defaultLanguage: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultLanguage
};


/***/ }),

/***/ 654:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth-interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9412);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_authorization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/authorization */ 1821);




class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const request = req.clone({ setHeaders: { 'x-requested-by': 'babel-client' } });
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(response => {
            return this.handleResponseError(response, request, next);
        }));
    }
    handleResponseError(response, request, next) {
        return response.status == 403 ?
            (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.authService.refreshToken()).pipe(() => next.handle(request)) :
            (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(response);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_authorization__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 4541:
/*!******************************************!*\
  !*** ./src/app/models/paginated_view.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyPaginatedView": () => (/* binding */ emptyPaginatedView)
/* harmony export */ });
const emptyPaginatedView = {
    count: 0,
    next: '',
    previous: '',
    results: new Array(),
};


/***/ }),

/***/ 3970:
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _login_success_login_success_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-success/login-success.component */ 4539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_success_login_success_component__WEBPACK_IMPORTED_MODULE_0__.LoginSuccessPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_login_success_login_success_component__WEBPACK_IMPORTED_MODULE_0__.LoginSuccessPage] }); })();


/***/ }),

/***/ 4539:
/*!***********************************************************************!*\
  !*** ./src/app/modules/auth/login-success/login-success.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginSuccessPage": () => (/* binding */ LoginSuccessPage)
/* harmony export */ });
/* harmony import */ var _config_auth_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/auth.config */ 483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ 7316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);




class LoginSuccessPage {
    constructor(oauthService, router) {
        this.oauthService = oauthService;
        this.router = router;
        this.oauthService.configure(_config_auth_config__WEBPACK_IMPORTED_MODULE_0__.authCodeFlowConfig);
        this.oauthService.loadDiscoveryDocumentAndLogin()
            .then(_ => router.navigateByUrl('/'));
    }
}
LoginSuccessPage.ɵfac = function LoginSuccessPage_Factory(t) { return new (t || LoginSuccessPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__.OAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
LoginSuccessPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginSuccessPage, selectors: [["app-login-success-page"]], decls: 2, vars: 0, template: function LoginSuccessPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 3538:
/*!***************************************************!*\
  !*** ./src/app/modules/contracts/_models/DTOs.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NullContractCreateUpdateDTO": () => (/* binding */ NullContractCreateUpdateDTO),
/* harmony export */   "NullContractStageDTO": () => (/* binding */ NullContractStageDTO)
/* harmony export */ });
const NullContractCreateUpdateDTO = {
    id: null,
    number: '',
    state: '',
    connected_contract: null,
    partner: null,
    partner_type: '',
    project: null,
    signing_date: '',
    closure_date: '',
};
const NullContractStageDTO = {
    id: null,
    title: '',
    deadline: null,
    net_value: null,
    vat_rate: '',
    currency: null,
    contract: null,
};


/***/ }),

/***/ 9461:
/*!********************************************************!*\
  !*** ./src/app/modules/contracts/_models/constants.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "partnerTypes": () => (/* binding */ partnerTypes),
/* harmony export */   "contractStates": () => (/* binding */ contractStates),
/* harmony export */   "vatRates": () => (/* binding */ vatRates)
/* harmony export */ });
const partnerTypes = ['contracts.partner_type.provider', 'contracts.partner_type.customer'];
const contractStates = ['contracts.states.ongoing', 'contracts.states.completed'];
const vatRates = [0, 5, 9, 19];


/***/ }),

/***/ 6312:
/*!************************************************************************!*\
  !*** ./src/app/modules/contracts/_services/contract-client.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractClient": () => (/* binding */ ContractClient),
/* harmony export */   "ContractStageClient": () => (/* binding */ ContractStageClient)
/* harmony export */ });
/* harmony import */ var _environments_environment_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment.local */ 6497);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _models_paginated_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/paginated_view */ 4541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);






class ContractClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.CONTRACTS_URL = _environments_environment_local__WEBPACK_IMPORTED_MODULE_0__.environment.babelUrl + 'budget/contracts/';
    }
    list(query) {
        let url = this.CONTRACTS_URL;
        if (query && query.size > 0) {
            let queryTerms = [];
            query.forEach((value, queryParamName) => queryTerms.push(queryParamName + '=' + value));
            url += '?' + queryTerms.join('&');
        }
        return this.httpClient.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_models_paginated_view__WEBPACK_IMPORTED_MODULE_1__.emptyPaginatedView)));
    }
    create(dto) {
        return this.httpClient.post(this.CONTRACTS_URL, dto);
    }
    update(id, dto) {
        return this.httpClient
            .put(this.CONTRACTS_URL + id + '/', dto);
    }
    autocomplete() {
        const url = this.CONTRACTS_URL + 'autocomplete/';
        return this.httpClient
            .get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_models_paginated_view__WEBPACK_IMPORTED_MODULE_1__.emptyPaginatedView)));
    }
}
ContractClient.ɵfac = function ContractClient_Factory(t) { return new (t || ContractClient)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
ContractClient.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ContractClient, factory: ContractClient.ɵfac, providedIn: 'root' });
class ContractStageClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    create(dto) {
        return this.httpClient
            .post(this.url(dto.contract), dto)
            .toPromise();
    }
    update(id, dto) {
        return this.httpClient
            .put(this.url(dto.contract, id), dto)
            .toPromise();
    }
    url(contractId, contractStageId) {
        let url = ContractStageClient.CONTRACT_URL + contractId + '/';
        // TODO: Modify this when BE is fixed.
        if (contractStageId) {
            url += 'stage/' + contractStageId + '/';
        }
        else {
            url += 'stages/';
        }
        return url;
    }
}
ContractStageClient.CONTRACT_URL = _environments_environment_local__WEBPACK_IMPORTED_MODULE_0__.environment.babelUrl + 'budget/contracts/';
ContractStageClient.ɵfac = function ContractStageClient_Factory(t) { return new (t || ContractStageClient)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
ContractStageClient.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ContractStageClient, factory: ContractStageClient.ɵfac, providedIn: "root" });


/***/ }),

/***/ 9154:
/*!***********************************************************************!*\
  !*** ./src/app/modules/contracts/_services/contract-store.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractStore": () => (/* binding */ ContractStore)
/* harmony export */ });
/* harmony import */ var _models_paginated_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/paginated_view */ 4541);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _contract_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contract-client.service */ 6312);





class ContractStore {
    constructor(contractClient) {
        this.contractClient = contractClient;
        this.contractsListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.list$ = this.contractsListSubject.asObservable();
        this.subscriptions = [];
        this.load = this.load.bind(this);
        this.contractsListSubject.next(_models_paginated_view__WEBPACK_IMPORTED_MODULE_0__.emptyPaginatedView);
        this.load();
    }
    get list() {
        return this.list$;
    }
    create(dto) {
        return this.contractClient.create(dto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => this.load()));
    }
    update(id, dto) {
        return this.contractClient.update(id, dto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(_ => this.load()));
    }
    load(query = null) {
        this.subscriptions.push(this.contractClient.list(query)
            .subscribe(view => {
            view.results.forEach(contract => {
                contract.contractValue = contract.stages
                    .map((contractStage) => { var _a; return (_a = contractStage.net_value) !== null && _a !== void 0 ? _a : 0; })
                    .reduce((a, b) => a + b, 0);
            });
            this.contractsListSubject.next(view);
        }));
    }
}
ContractStore.ɵfac = function ContractStore_Factory(t) { return new (t || ContractStore)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_contract_client_service__WEBPACK_IMPORTED_MODULE_1__.ContractClient)); };
ContractStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ContractStore, factory: ContractStore.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4310:
/*!**************************************************************************!*\
  !*** ./src/app/modules/contracts/add-contract/add-contract.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddContractComponent": () => (/* binding */ AddContractComponent)
/* harmony export */ });
/* harmony import */ var _shared_directives_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/_directives/modal.component */ 3498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _contract_form_contract_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contract-form/contract-form.component */ 8322);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 9790);




function AddContractComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddContractComponent_ng_template_3_Template_button_click_4_listener() { const dismiss_r2 = ctx.dismiss; return dismiss_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "app-contract-form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeForm", function AddContractComponent_ng_template_3_Template_app_contract_form_closeForm_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "contracts.add_contract"));
} }
class AddContractComponent extends _shared_directives_modal_component__WEBPACK_IMPORTED_MODULE_0__.BabelModal {
}
AddContractComponent.ɵfac = /*@__PURE__*/ function () { let ɵAddContractComponent_BaseFactory; return function AddContractComponent_Factory(t) { return (ɵAddContractComponent_BaseFactory || (ɵAddContractComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](AddContractComponent)))(t || AddContractComponent); }; }();
AddContractComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddContractComponent, selectors: [["app-add-contract"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 0, consts: [[1, "actions"], [1, "btn", "btn-lg", "btn-outline-primary", 3, "click"], ["add_contract_form", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "closeForm"]], template: function AddContractComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddContractComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); return ctx.openModal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AddContractComponent_ng_template_3_Template, 9, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_contract_form_contract_form_component__WEBPACK_IMPORTED_MODULE_1__.ContractFormComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".actions[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  font-size: 35px;\n  padding: 0;\n  color: #fff;\n  border-color: #000;\n  background-color: #000;\n  box-shadow: 0px 3px 6px #0000004d;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  max-width: 70%;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jb250cmFjdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QUFFUjtBQUFBO0VBQ0ksY0FBQTtBQUdKO0FBREk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFJUiIsImZpbGUiOiJhZGQtY29udHJhY3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uc1xuICAgIHRleHQtYWxpZ246IHJpZ2h0XG4gICAgLmJ0blxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCVcbiAgICAgICAgd2lkdGg6IDU1cHhcbiAgICAgICAgaGVpZ2h0OiA1NXB4XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweFxuICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIGNvbG9yOiAjZmZmXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwMFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDA0ZFxuXG4ubW9kYWwtZGlhbG9nXG4gICAgbWF4LXdpZHRoOiA3MCVcbi5tb2RhbC1oZWFkZXJcbiAgICAubW9kYWwtdGl0bGVcbiAgICAgICAgZm9udC1zaXplOiAxNnB4XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDBcbiJdfQ== */"] });


/***/ }),

/***/ 7005:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/contracts/contract-filters/contract-filters.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractFiltersComponent": () => (/* binding */ ContractFiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_models_query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/_models/query-string */ 6988);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/constants */ 9461);
/* harmony import */ var _partners_services_partners_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partners/_services/partners-client.service */ 884);
/* harmony import */ var _projects_services_projects_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/_services/projects-client.service */ 3663);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 6640);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);











function ContractFiltersComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const state_r1 = ctx.$implicit;
    const value_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", value_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](state_r1);
} }
class ContractFiltersComponent {
    constructor(partnerClient, projectClient) {
        this.partnerClient = partnerClient;
        this.projectClient = projectClient;
        this.filters = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.partners = [];
        this.projects = [];
        this.states = _models_constants__WEBPACK_IMPORTED_MODULE_1__.contractStates;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            partner: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            project: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl()
        });
        this.queryToName = {};
        this.nameToQuery = {
            partner: {
                label: 'contracts.partner',
                query: 'partner__id'
            },
            project: {
                label: 'contracts.project',
                query: 'project__id'
            },
            state: {
                label: 'contracts.state',
                query: 'state'
            }
        };
        Object.keys(this.nameToQuery).forEach(formElementName => this.queryToName[this.nameToQuery[formElementName].query] = formElementName);
    }
    ngOnInit() {
        this.partnerClient.autocomplete().toPromise()
            .then(partners => this.partners = partners);
        this.projectClient.autocomplete().toPromise()
            .then(projects => this.projects = projects);
    }
    set filtersMap(map) {
        map.subscribe(map => {
            const values = this.form.value;
            Object.keys(this.queryToName).forEach(query => {
                const formElement = this.queryToName[query];
                values[formElement] = map.has(query) ? values[formElement] : null;
            });
            this.form.patchValue(values);
        });
    }
    onSubmit() {
        this.filters.emit(new _shared_models_query_string__WEBPACK_IMPORTED_MODULE_0__.QueryParams(this.createQueryParams()));
    }
    createQueryParams() {
        const result = new Map();
        const values = this.form.value;
        Object.keys(values).forEach((elementName) => {
            const elementProps = this.nameToQuery[elementName];
            const elementValue = values[elementName];
            result.set(elementProps.query, elementValue ? {
                label: elementProps.label,
                value: elementValue,
                displayValue: this.getDisplayValue(elementName, elementValue)
            } : null);
        });
        return result;
    }
    getDisplayValue(elementName, elementValue) {
        var _a, _b, _c, _d;
        switch (elementName) {
            case 'partner':
                return (_b = (_a = this.partners.find(element => element.id == elementValue)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '';
            case 'project':
                return (_d = (_c = this.projects.find(element => element.id == elementValue)) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : '';
            case 'state':
                return this.states[elementValue];
        }
        return '';
    }
}
ContractFiltersComponent.ɵfac = function ContractFiltersComponent_Factory(t) { return new (t || ContractFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_partners_services_partners_client_service__WEBPACK_IMPORTED_MODULE_2__.PartnerClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_projects_services_projects_client_service__WEBPACK_IMPORTED_MODULE_3__.ProjectClient)); };
ContractFiltersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ContractFiltersComponent, selectors: [["app-contract-filters"]], inputs: { filtersMap: "filtersMap" }, outputs: { filters: "filters" }, decls: 21, vars: 16, consts: [["xmlns", "http://www.w3.org/1999/html", 3, "formGroup", "ngSubmit"], [1, "form-group", "partner-group", "col-10"], ["for", "partner"], ["id", "partner", "bindValue", "id", "bindLabel", "name", "formControlName", "partner", 3, "items"], [1, "form-group", "project-group", "col-10"], ["for", "project"], ["id", "project", "bindValue", "id", "bindLabel", "name", "formControlName", "project", 3, "items"], [1, "form-group", "status-group", "col-10"], ["for", "state"], ["id", "state", "formControlName", "state", 1, "form-control"], ["value", ""], [4, "ngFor", "ngForOf"], ["type", "submit", 3, "value"], [3, "value"]], template: function ContractFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ContractFiltersComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ng-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "ng-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "- Select -");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ContractFiltersComponent_ng_container_18_Template, 3, 2, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 8, "contracts.partner"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.partners);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 10, "contracts.project"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 12, "contracts.state"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 14, "forms.submit_search"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 8322:
/*!****************************************************************************!*\
  !*** ./src/app/modules/contracts/contract-form/contract-form.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractFormComponent": () => (/* binding */ ContractFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _models_DTOs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_models/DTOs */ 3538);
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/constants */ 9461);
/* harmony import */ var _shared_services_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/_services/validators */ 789);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var _services_contract_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/contract-client.service */ 6312);
/* harmony import */ var _services_contract_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/contract-store.service */ 9154);
/* harmony import */ var _partners_services_partners_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partners/_services/partners-client.service */ 884);
/* harmony import */ var _projects_services_projects_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../projects/_services/projects-client.service */ 3663);
/* harmony import */ var _shared_services_form_submitted_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/_services/form-submitted.service */ 8083);
/* harmony import */ var _shared_form_errors_form_errors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/form-errors/form-errors.component */ 1927);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 6640);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 9790);


















function ContractFormComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ng-select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ContractFormComponent_ng_container_15_Template_ng_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r6.connectedContracts = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "app-form-errors", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 4, "contracts.number"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("items", ctx_r0.contracts)("ngModel", ctx_r0.connectedContracts);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("element", ctx_r0.form.get("connectedContract"));
} }
function ContractFormComponent_ng_container_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const partnerType_r8 = ctx.$implicit;
    const value_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "partner-type-", value_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", value_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("for", "partner-type-", value_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 4, partnerType_r8));
} }
function ContractFormComponent_ng_container_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const state_r10 = ctx.$implicit;
    const value_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", value_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 2, state_r10));
} }
function ContractFormComponent_div_68_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const vatRate_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", vatRate_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", vatRate_r16, " %");
} }
const _c0 = function () { return ["far", "calendar-alt"]; };
function ContractFormComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "app-form-errors", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ContractFormComponent_div_68_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](16); return _r14.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "input", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "app-form-errors", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, ContractFormComponent_div_68_ng_container_32_Template, 3, 2, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "app-form-errors", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contractStage_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroupName", i_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 11, "contracts.stage.name"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("element", contractStage_r12.get("title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 13, "contracts.stage.deadline"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](21, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](21, 15, "contracts.stage.net_value"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("element", contractStage_r12.get("netValue"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](27, 17, "contracts.stage.vat_rate"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](31, 19, "contracts.select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r5.vatRatesEnum);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("element", contractStage_r12.get("vatRate"));
} }
const _c1 = function () { return ["fas", "plus-circle"]; };
class ContractFormComponent {
    constructor(dateParser, contractClient, contractStore, contractStageClient, partnerClient, projectClient, formSubmittedNotifier) {
        this.dateParser = dateParser;
        this.contractClient = contractClient;
        this.contractStore = contractStore;
        this.contractStageClient = contractStageClient;
        this.partnerClient = partnerClient;
        this.projectClient = projectClient;
        this.formSubmittedNotifier = formSubmittedNotifier;
        this.closeFormEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
            isConnected: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false),
            connectedContract: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null, []),
            signingDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
            closureDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            partner: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
            partnerType: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            project: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
            contractStages: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArray([])
        });
        this.vatRatesEnum = _models_constants__WEBPACK_IMPORTED_MODULE_1__.vatRates;
        this.contractStatesEnum = _models_constants__WEBPACK_IMPORTED_MODULE_1__.contractStates;
        this.partnerTypesEnum = _models_constants__WEBPACK_IMPORTED_MODULE_1__.partnerTypes;
        this.contractIsConnected = false;
        this.addContractStageGroup = this.addContractStageGroup.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.createOrUpdateStage = this.createOrUpdateStage.bind(this);
        this.contract = this.contract || _models_DTOs__WEBPACK_IMPORTED_MODULE_0__.NullContractCreateUpdateDTO;
        this.setContractConnectedValidator();
        this.setPartnerTypeValidator();
        const promises = [
            this.partnerClient.autocomplete().toPromise()
                .then(partners => this.partners = partners),
            this.projectClient.autocomplete().toPromise()
                .then(projects => this.projects = projects),
            this.contractClient.autocomplete().toPromise()
                .then(contracts => { var _a; return this.contracts = (_a = contracts.results) !== null && _a !== void 0 ? _a : []; })
        ];
        Promise.all(promises).then(_ => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            this.selectedPartner = (_b = (_a = this.contract.partner) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : null;
            this.selectedProject = (_d = (_c = this.contract.project) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : null;
            this.contractIsConnected = this.contract.connected_contract != null;
            this.connectedContracts = (_f = (_e = this.contract.connected_contract) === null || _e === void 0 ? void 0 : _e.id) !== null && _f !== void 0 ? _f : null;
            this.form.patchValue({
                number: this.contract.number,
                isConnected: this.contract.connected_contract != null,
                connectedContract: ((_g = this.contract.connected_contract) === null || _g === void 0 ? void 0 : _g.id) || null,
                signingDate: this.dateParser
                    .parse(this.contract.signing_date.toString()),
                closureDate: this.dateParser
                    .parse(this.contract.closure_date.toString()),
                partner: ((_h = this.contract.partner) === null || _h === void 0 ? void 0 : _h.id) || null,
                partnerType: this.contract.partner_type,
                project: ((_j = this.contract.project) === null || _j === void 0 ? void 0 : _j.id) || null,
                state: this.contract.state,
            });
            (this.contract.stages || []).forEach(this.addContractStageGroup);
        });
    }
    onSubmit() {
        if (this.form.valid) {
            const contractStages = this.formDataToContractStageDTOs(this.contract.id);
            this.getContractRequest()
                .then(_ => Promise.all(contractStages.map(this.createOrUpdateStage)));
        }
        else {
            Object.keys(this.form.controls)
                .forEach(controlName => this.form.controls[controlName].markAsDirty());
            this.formSubmittedNotifier.notifyFormSubmission();
        }
    }
    get contractStageFormGroups() {
        return this.form.get('contractStages').controls;
    }
    addContractStageGroup(dto) {
        dto = dto || _models_DTOs__WEBPACK_IMPORTED_MODULE_0__.NullContractStageDTO;
        const contractStagesArray = this.form.get('contractStages');
        const deadline = dto.deadline ?
            this.dateParser.parse(dto.deadline.toString()) : null;
        contractStagesArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(dto.id || ''),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(dto.title || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
            deadline: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(deadline),
            netValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(dto.net_value, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
            vatRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(dto.vat_rate, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required])
        }));
    }
    setContractConnectedValidator() {
        const connectedContract = this.form.get('connectedContract');
        const isConnected = this.form.get('isConnected');
        connectedContract === null || connectedContract === void 0 ? void 0 : connectedContract.setValidators([
            (0,_shared_services_validators__WEBPACK_IMPORTED_MODULE_2__.conditionalValidator)(() => isConnected === null || isConnected === void 0 ? void 0 : isConnected.value, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
        ]);
        isConnected === null || isConnected === void 0 ? void 0 : isConnected.valueChanges.subscribe(_ => connectedContract === null || connectedContract === void 0 ? void 0 : connectedContract.updateValueAndValidity());
    }
    setPartnerTypeValidator() {
        const partner = this.form.get('partner');
        const partnerType = this.form.get('partnerType');
        partnerType === null || partnerType === void 0 ? void 0 : partnerType.setValidators([
            (0,_shared_services_validators__WEBPACK_IMPORTED_MODULE_2__.conditionalValidator)(() => partner === null || partner === void 0 ? void 0 : partner.value, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
        ]);
        partner === null || partner === void 0 ? void 0 : partner.valueChanges.subscribe(_ => partnerType === null || partnerType === void 0 ? void 0 : partnerType.updateValueAndValidity());
    }
    formDataToContractDto() {
        var _a, _b, _c;
        const formValues = this.form.value;
        return {
            id: formValues.id,
            number: formValues.number,
            state: formValues.state,
            connected_contract: (_a = this.connectedContracts) !== null && _a !== void 0 ? _a : null,
            partner: (_b = this.selectedPartner) !== null && _b !== void 0 ? _b : null,
            partner_type: formValues.partnerType,
            project: (_c = this.selectedProject) !== null && _c !== void 0 ? _c : null,
            signing_date: this.dateParser.format(formValues.signingDate),
            closure_date: formValues.closureDate ?
                this.dateParser.format(formValues.closureDate) : null,
        };
    }
    formDataToContractStageDTOs(contractId) {
        return this.form.value.contractStages.map((stage) => ({
            id: stage.id,
            title: stage.title,
            deadline: stage.deadline ?
                this.dateParser.format(stage.deadline) : null,
            net_value: stage.netValue,
            vat_rate: stage.vatRate,
            // TODO: Change this.
            currency: 1,
            contract: contractId,
        }));
    }
    createOrUpdateStage(contractStage) {
        return contractStage.id ?
            this.contractStageClient.update(contractStage.id, contractStage) :
            this.contractStageClient.create(contractStage);
    }
    getContractRequest() {
        const dto = this.formDataToContractDto();
        return this.contract.id ?
            this.contractStore.update(this.contract.id, dto).toPromise().then(this.closeForm) :
            this.contractStore.create(dto).toPromise().then(this.closeForm);
    }
    closeForm() {
        this.closeFormEventEmitter.emit(true);
    }
}
ContractFormComponent.ɵfac = function ContractFormComponent_Factory(t) { return new (t || ContractFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDateParserFormatter), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_contract_client_service__WEBPACK_IMPORTED_MODULE_3__.ContractClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_contract_store_service__WEBPACK_IMPORTED_MODULE_4__.ContractStore), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_contract_client_service__WEBPACK_IMPORTED_MODULE_3__.ContractStageClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_partners_services_partners_client_service__WEBPACK_IMPORTED_MODULE_5__.PartnerClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_projects_services_projects_client_service__WEBPACK_IMPORTED_MODULE_6__.ProjectClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_form_submitted_service__WEBPACK_IMPORTED_MODULE_7__.FormSubmittedNotifier)); };
ContractFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ContractFormComponent, selectors: [["app-contract-form"]], inputs: { contract: "contract" }, outputs: { closeFormEventEmitter: "closeForm" }, decls: 80, vars: 63, consts: [[1, "wrapper"], ["xmlns", "http://www.w3.org/1999/html", 3, "formGroup", "ngSubmit"], [1, "form-group", "col-6", "p-0"], ["for", "number"], ["id", "number", "type", "text", "formControlName", "number", 1, "form-control"], [3, "element"], [1, "row", "mb-3"], [1, "form-group", "col-6", "connected-contract"], ["id", "is_connected", "type", "checkbox", "formControlName", "isConnected", 3, "ngModel", "ngModelChange"], ["for", "is_connected"], [1, "form-group", "col-6", "contract-number"], [4, "ngIf"], [1, "row"], [1, "form-group", "col-6"], ["for", "signing_date"], [1, "input-group-calendar"], [1, "calendar", 3, "click"], ["id", "signing_date", "placeholder", "yyyy-mm-dd", "name", "signing_date", "ngbDatepicker", "", "formControlName", "signingDate", "autoClose", "true", 1, "form-control"], ["signing_date", "ngbDatepicker"], [3, "icon"], ["for", "closure_date"], ["id", "closure_date", "placeholder", "yyyy-mm-dd", "name", "closure_date", "ngbDatepicker", "", "formControlName", "closureDate", 1, "form-control"], ["closure_date", "ngbDatepicker"], [1, "row", "align-items-center"], [1, "form-group", "partner-group", "col-10"], ["for", "partner"], ["id", "partner", "bindValue", "id", "bindLabel", "name", "formControlName", "partner", 3, "items", "placeholder", "ngModel", "ngModelChange"], [1, "col-2", "text-right", "pt-3"], [1, "btn", "btn-dark"], [4, "ngFor", "ngForOf"], [1, ""], ["for", "project"], ["id", "project", "bindValue", "id", "bindLabel", "name", "formControlName", "project", 1, "mb-3", 3, "items", "placeholder", "ngModel", "ngModelChange"], [1, "form-group", "form-group-stage"], ["for", "state"], ["id", "state", "formControlName", "state", 1, "form-control"], ["value", ""], ["formArrayName", "contractStages", 1, "form-group"], ["class", "form-group-stage mb-3", 4, "ngFor", "ngForOf"], [1, "pb-5"], ["name", "add-contract", "type", "button", 1, "btn", "btn-stage", "p-0", 3, "click"], [1, "px-1", 3, "icon"], ["type", "submit", 1, "btn", "btn-dark", "mt-3", "float-right"], ["type", "button", 1, "btn", "btn-light", "mt-3", "float-right", 3, "click"], ["for", "connected_contract"], ["id", "connected_contract", "bindValue", "id", "bindLabel", "number", "placeholder", "Select contract", "formControlName", "connectedContract", 3, "items", "ngModel", "ngModelChange"], [1, "col-3"], ["type", "radio", "formControlName", "partnerType", 3, "id", "value"], [1, "px-2", 3, "for"], [3, "value"], [1, "form-group-stage", "mb-3"], [3, "formGroupName"], [1, "form-group"], ["for", "title"], ["name", "title", "id", "title", "type", "text", "formControlName", "title", 1, "form-control"], [1, "form-group", "col-4"], ["for", "deadline"], ["id", "deadline", "placeholder", "yyyy-mm-dd", "name", "deadline", "ngbDatepicker", "", "formControlName", "deadline", 1, "form-control"], ["deadline", "ngbDatepicker"], ["for", "netValue"], ["id", "netValue", "type", "text", "formControlName", "netValue", 1, "form-control"], ["for", "vatRate"], ["id", "vatRate", "formControlName", "vatRate", 1, "form-control"]], template: function ContractFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function ContractFormComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "app-form-errors", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ContractFormComponent_Template_input_ngModelChange_10_listener($event) { return ctx.contractIsConnected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, ContractFormComponent_ng_container_15_Template, 6, 6, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ContractFormComponent_Template_div_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](24); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "app-form-errors", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ContractFormComponent_Template_div_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](34); return _r2.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](36, "app-form-errors", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "ng-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ContractFormComponent_Template_ng_select_ngModelChange_42_listener($event) { return ctx.selectedPartner = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, ContractFormComponent_ng_container_49_Template, 6, 6, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](50, "app-form-errors", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "ng-select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ContractFormComponent_Template_ng_select_ngModelChange_55_listener($event) { return ctx.selectedProject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](65, ContractFormComponent_ng_container_65_Template, 4, 4, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](66, "app-form-errors", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](67, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](68, ContractFormComponent_div_68_Template, 34, 22, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ContractFormComponent_Template_button_click_70_listener() { return ctx.addContractStageGroup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](71, "fa-icon", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ContractFormComponent_Template_button_click_77_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 32, "contracts.number"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("element", ctx.form.get("number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.contractIsConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 34, "contracts.is_annex"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.contractIsConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 36, "contracts.signing_date"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](60, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("element", ctx.form.get("signingDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](30, 38, "contracts.closure_date"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](61, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("element", ctx.form.get("closureDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](41, 40, "contracts.partner"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](43, 42, "contracts.select_partner"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("items", ctx.partners)("ngModel", ctx.selectedPartner);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](47, 44, "contracts.add_partner"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.partnerTypesEnum);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("element", ctx.form.get("partnerType"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](54, 46, "contracts.project"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](56, 48, "contracts.select_project"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("items", ctx.projects)("ngModel", ctx.selectedProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](60, 50, "contracts.state"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](64, 52, "contracts.select"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.contractStatesEnum);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("element", ctx.form.get("state"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.contractStageFormGroups);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](62, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](73, 54, "contracts.stage.add_another"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](76, 56, "forms.save"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](79, 58, "forms.cancel"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _shared_form_errors_form_errors_component__WEBPACK_IMPORTED_MODULE_8__.FormErrorsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbInputDatepicker, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupName], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: ["form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 1px solid;\n}\nform[_ngcontent-%COMP%]   .form-control.ng-invalid.ng-touched[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-control.ng-invalid.ng-dirty[_ngcontent-%COMP%] {\n  border: 1px solid #dc3545;\n}\nform[_ngcontent-%COMP%]   .connected-contract[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n}\nform[_ngcontent-%COMP%]   .connected-contract[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 25px;\n}\nform[_ngcontent-%COMP%]   .connected-contract[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0;\n  padding-left: 5px;\n}\nform[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   .ng-fa-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 15px;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\nform[_ngcontent-%COMP%]   .form-group-stage[_ngcontent-%COMP%] {\n  border: 1px dotted;\n  padding: 15px;\n}\nform[_ngcontent-%COMP%]   .btn-stage[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyYWN0LWZvcm0uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtBQUFSO0FBQ0k7RUFDSSx5QkFBQTtBQUNSO0FBQUk7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUVSO0FBRFE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQUdaO0FBRlE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBSVo7QUFGUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBSVo7QUFISTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQUtSO0FBSkk7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7QUFNUiIsImZpbGUiOiJjb250cmFjdC1mb3JtLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybVxuICAgIC5mb3JtLWNvbnRyb2xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWRcbiAgICAuZm9ybS1jb250cm9sLm5nLWludmFsaWQubmctdG91Y2hlZCwgLmZvcm0tY29udHJvbC5uZy1pbnZhbGlkLm5nLWRpcnR5XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDVcbiAgICAuY29ubmVjdGVkLWNvbnRyYWN0XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIGlucHV0XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1cHhcbiAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHhcbiAgICAuY2FsZW5kYXJcbiAgICAgICAgLm5nLWZhLWljb25cbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICAgICAgYm90dG9tOiAwXG4gICAgICAgICAgICByaWdodDogMTVweFxuICAgICAgICAgICAgd2lkdGg6IDM4cHhcbiAgICAgICAgICAgIGhlaWdodDogMzhweFxuICAgICAgICAgICAgZGlzcGxheTogZmxleFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHlcbiAgICAuZm9ybS1ncm91cC1zdGFnZVxuICAgICAgICBib3JkZXI6IDFweCBkb3R0ZWRcbiAgICAgICAgcGFkZGluZzogMTVweFxuICAgIC5idG4tc3RhZ2VcbiAgICAgICAgZm9udC1zaXplOiAxMnB4XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXG4iXX0= */"] });


/***/ }),

/***/ 6114:
/*!******************************************************************************!*\
  !*** ./src/app/modules/contracts/contracts-list/contracts-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractsListComponent": () => (/* binding */ ContractsListComponent)
/* harmony export */ });
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_models/constants */ 9461);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _shared_models_query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/_models/query-string */ 6988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_contract_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/contract-store.service */ 9154);
/* harmony import */ var _add_contract_add_contract_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-contract/add-contract.component */ 4310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shared_search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/search-filter/search-filter.component */ 5608);
/* harmony import */ var _shared_directives_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/_directives/modal.component */ 3498);
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/modal/modal.component */ 3847);
/* harmony import */ var _contract_filters_contract_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contract-filters/contract-filters.component */ 7005);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/pagination/pagination.component */ 5087);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);
/* harmony import */ var _update_contract_update_contract_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../update-contract/update-contract.component */ 3902);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
















const _c0 = function () {
  return ["fas", "times"];
};

function ContractsListComponent_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ContractsListComponent_ng_container_3_span_1_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const queryParam_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return ctx_r4.removeFilter(queryParam_r2.key);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const queryParam_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", queryParam_r2.value.label, ": ", queryParam_r2.value.displayValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](3, _c0));
  }
}

function ContractsListComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ContractsListComponent_ng_container_3_span_1_Template, 3, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const queryParam_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", queryParam_r2.value.hasOwnProperty("label"));
  }
}

function ContractsListComponent_tr_42_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const stage_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](stage_r12.title);
  }
}

function ContractsListComponent_tr_42_li_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const stage_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, stage_r13.deadline, "mediumDate"));
  }
}

function ContractsListComponent_tr_42_li_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const stage_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](stage_r14.net_value);
  }
}

function ContractsListComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, ContractsListComponent_tr_42_li_16_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, ContractsListComponent_tr_42_li_22_Template, 3, 4, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, ContractsListComponent_tr_42_li_27_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "app-update-contract", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const contract_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](contract_r8.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 11, ctx_r1.contractStatesEnum[contract_r8.state]));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](contract_r8.partner.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](10, 13, contract_r8.signing_date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](contract_r8.project == null ? null : contract_r8.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", contract_r8.stages);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](21, 16, contract_r8.closure_date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", contract_r8.stages);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](contract_r8.contractValue != 0 ? contract_r8.contractValue : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", contract_r8.stages);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("contract", contract_r8);
  }
}

const _c1 = function () {
  return ["fas", "sliders-h"];
};

class ContractsListComponent {
  constructor(contractsStore) {
    this.contractsStore = contractsStore;
    this.contractStatesEnum = _models_constants__WEBPACK_IMPORTED_MODULE_0__.contractStates;
    this.queryParams = new Map();
    this.goToFirstPageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    this.goToFirstPage$ = this.goToFirstPageSubject.asObservable();
    this.closeModalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    this.closeModal$ = this.closeModalSubject.asObservable();
    this.queryParamsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    this.queryParams$ = this.queryParamsSubject.asObservable();
  }

  get contracts$() {
    return this.contractsStore.list;
  }

  removeFilter(filterName) {
    this.reloadList(new _shared_models_query_string__WEBPACK_IMPORTED_MODULE_1__.QueryParams(new Map([[filterName, null]])));
  }

  reloadList(convertibleToQuery, goToFirstPage = false) {
    convertibleToQuery.toQueryParams().forEach((param, paramName) => param !== null ? this.queryParams.set(paramName, param) : this.queryParams.delete(paramName));

    if (goToFirstPage) {
      this.goToFirstPageSubject.next(true);
      this.queryParams.set('page', 1);
    }

    const simpleQueryParams = new Map();
    this.queryParams.forEach((value, key) => {
      simpleQueryParams.set(key, value.hasOwnProperty('value') ? value.value : value);
    });
    this.closeModalSubject.next(true);
    this.contractsStore.load(simpleQueryParams);
    this.queryParamsSubject.next(this.queryParams);
    this.goToFirstPageSubject.next(false);
    this.closeModalSubject.next(false);
  }

}

ContractsListComponent.ɵfac = function ContractsListComponent_Factory(t) {
  return new (t || ContractsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_contract_store_service__WEBPACK_IMPORTED_MODULE_2__.ContractStore));
};

ContractsListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: ContractsListComponent,
  selectors: [["app-contracts-list"]],
  decls: 45,
  vars: 46,
  consts: [[4, "ngFor", "ngForOf"], [3, "filterName", "label", "filterChange"], [3, "buttonIcon", "title", "shouldClose"], [3, "filtersMap", "filters"], [1, "table-container"], [1, "table", "table-striped"], ["scope", "col"], [3, "view", "goToFirstPage", "paginationChange"], [3, "click", 4, "ngIf"], [3, "click"], [3, "icon"], [1, "p-0", "m-0", "list-stages"], [3, "contract"]],
  template: function ContractsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-add-contract");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ContractsListComponent_ng_container_3_Template, 2, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "app-search-filter", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("filterChange", function ContractsListComponent_Template_app_search_filter_filterChange_5_listener($event) {
        return ctx.reloadList($event, true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "app-modal", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "app-contract-filters", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("filters", function ContractsListComponent_Template_app_contract_filters_filters_9_listener($event) {
        return ctx.reloadList($event, true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "table", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, ContractsListComponent_tr_42_Template, 30, 19, "tr", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](43, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "app-pagination", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("paginationChange", function ContractsListComponent_Template_app_pagination_paginationChange_44_listener($event) {
        return ctx.reloadList($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      let tmp_16_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 19, ctx.queryParams));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("filterName", "search")("label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 21, "forms.search"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buttonIcon", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](45, _c1))("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 23, "contracts.filter.advanced"))("shouldClose", ctx.closeModal$);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("filtersMap", ctx.queryParams$);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 25, "contracts.number"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 27, "contracts.state"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 29, "contracts.partner"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](25, 31, "contracts.signing_date"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](28, 33, "contracts.related_project"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](31, 35, "contracts.stages"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](34, 37, "contracts.due_date"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](37, 39, "contracts.value"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](40, 41, "contracts.actions"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", (tmp_16_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](43, 43, ctx.contracts$)) == null ? null : tmp_16_0.results);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("view", ctx.contracts$)("goToFirstPage", ctx.goToFirstPage$);
    }
  },
  directives: [_add_contract_add_contract_component__WEBPACK_IMPORTED_MODULE_3__.AddContractComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _shared_search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_4__.SearchFilterComponent, _shared_directives_modal_component__WEBPACK_IMPORTED_MODULE_5__.BabelModal, _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__.ModalComponent, _contract_filters_contract_filters_component__WEBPACK_IMPORTED_MODULE_7__.ContractFiltersComponent, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent, _update_contract_update_contract_component__WEBPACK_IMPORTED_MODULE_9__.UpdateContractComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.KeyValuePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
  styles: [".table-container[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.table-container[_ngcontent-%COMP%]   .list-stages[_ngcontent-%COMP%] {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyYWN0cy1saXN0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjtBQUFJO0VBQ0ksbUJBQUE7QUFFUjtBQURJO0VBQ0ksZ0JBQUE7QUFHUiIsImZpbGUiOiJjb250cmFjdHMtbGlzdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1jb250YWluZXJcbiAgICBwYWRkaW5nLXRvcDogMTVweFxuICAgIHRhYmxlXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXBcbiAgICAubGlzdC1zdGFnZXNcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZVxuIl19 */"]
});

/***/ }),

/***/ 4277:
/*!*******************************************************!*\
  !*** ./src/app/modules/contracts/contracts.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractsModule": () => (/* binding */ ContractsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _contracts_list_contracts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contracts-list/contracts-list.component */ 6114);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _config_i18n_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/i18n.config */ 587);
/* harmony import */ var _add_contract_add_contract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-contract/add-contract.component */ 4310);
/* harmony import */ var _contract_form_contract_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contract-form/contract-form.component */ 8322);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var _update_contract_update_contract_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-contract/update-contract.component */ 3902);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 6640);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ 2271);
/* harmony import */ var _icons_icons_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/icons.module */ 4419);
/* harmony import */ var _contract_filters_contract_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contract-filters/contract-filters.component */ 7005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);















class ContractsModule {
}
ContractsModule.ɵfac = function ContractsModule_Factory(t) { return new (t || ContractsModule)(); };
ContractsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ContractsModule });
ContractsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forRoot(_config_i18n_config__WEBPACK_IMPORTED_MODULE_1__.translationServiceConfig),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDatepickerModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _icons_icons_module__WEBPACK_IMPORTED_MODULE_6__.IconsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ContractsModule, { declarations: [_contracts_list_contracts_list_component__WEBPACK_IMPORTED_MODULE_0__.ContractsListComponent,
        _add_contract_add_contract_component__WEBPACK_IMPORTED_MODULE_2__.AddContractComponent,
        _update_contract_update_contract_component__WEBPACK_IMPORTED_MODULE_4__.UpdateContractComponent,
        _contract_form_contract_form_component__WEBPACK_IMPORTED_MODULE_3__.ContractFormComponent,
        _contract_filters_contract_filters_component__WEBPACK_IMPORTED_MODULE_7__.ContractFiltersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDatepickerModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _icons_icons_module__WEBPACK_IMPORTED_MODULE_6__.IconsModule], exports: [_contracts_list_contracts_list_component__WEBPACK_IMPORTED_MODULE_0__.ContractsListComponent] }); })();


/***/ }),

/***/ 3902:
/*!********************************************************************************!*\
  !*** ./src/app/modules/contracts/update-contract/update-contract.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateContractComponent": () => (/* binding */ UpdateContractComponent)
/* harmony export */ });
/* harmony import */ var _shared_directives_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/_directives/modal.component */ 3498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);
/* harmony import */ var _contract_form_contract_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contract-form/contract-form.component */ 8322);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 9790);





function UpdateContractComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateContractComponent_ng_template_3_Template_button_click_4_listener() { const dismiss_r2 = ctx.dismiss; return dismiss_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "app-contract-form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeForm", function UpdateContractComponent_ng_template_3_Template_app_contract_form_closeForm_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "contracts.update_contract"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("contract", ctx_r1.contract);
} }
const _c0 = function () { return ["fas", "pencil-alt"]; };
class UpdateContractComponent extends _shared_directives_modal_component__WEBPACK_IMPORTED_MODULE_0__.BabelModal {
}
UpdateContractComponent.ɵfac = /*@__PURE__*/ function () { let ɵUpdateContractComponent_BaseFactory; return function UpdateContractComponent_Factory(t) { return (ɵUpdateContractComponent_BaseFactory || (ɵUpdateContractComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](UpdateContractComponent)))(t || UpdateContractComponent); }; }();
UpdateContractComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UpdateContractComponent, selectors: [["app-update-contract"]], inputs: { contract: "contract" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 2, consts: [[1, "actions"], [1, "btn", 3, "click"], [3, "icon"], ["update_contract_form", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "contract", "closeForm"]], template: function UpdateContractComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateContractComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); return ctx.openModal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, UpdateContractComponent_ng_template_3_Template, 9, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent, _contract_form_contract_form_component__WEBPACK_IMPORTED_MODULE_1__.ContractFormComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".modal-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1jb250cmFjdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InVwZGF0ZS1jb250cmFjdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC10aXRsZVxuICAgIGZvbnQtc2l6ZTogMTZweFxuICAgIGZvbnQtd2VpZ2h0OiA4MDBcbiJdfQ== */"] });


/***/ }),

/***/ 8757:
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage/homepage.component */ 1263);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.module */ 3970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__.AuthModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__.HomepageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__.AuthModule] }); })();


/***/ }),

/***/ 1263:
/*!******************************************************************!*\
  !*** ./src/app/modules/dashboard/homepage/homepage.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageComponent": () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class HomepageComponent {
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 4, vars: 0, consts: [["role", "main", 1, "content"], [1, ""]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 4419:
/*!***********************************************!*\
  !*** ./src/app/modules/icons/icons.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsModule": () => (/* binding */ IconsModule)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 1903);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





class IconsModule {
    constructor(library) {
        library.addIcons(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faUserCircle, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCalendarAlt, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faPlusCircle, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faPencilAlt, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faSlidersH, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTimes);
    }
}
IconsModule.ɵfac = function IconsModule_Factory(t) { return new (t || IconsModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconLibrary)); };
IconsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: IconsModule });
IconsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeModule], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IconsModule, { imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeModule], exports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeModule] }); })();


/***/ }),

/***/ 4609:
/*!**********************************************************************!*\
  !*** ./src/app/modules/invoices/_services/invoice-client.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceClient": () => (/* binding */ InvoiceClient)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_models_paginated_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/paginated_view */ 4541);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);






class InvoiceClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.INVOICES_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.babelUrl + 'budget/invoices';
    }
    list(query) {
        let url = this.INVOICES_URL;
        if (query && query.size > 0) {
            let queryTerms = [];
            query.forEach((value, queryParamName) => queryTerms.push(queryParamName + '=' + value));
            url += '?' + queryTerms.join('&');
        }
        return this.httpClient.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(src_app_models_paginated_view__WEBPACK_IMPORTED_MODULE_0__.emptyPaginatedView)));
    }
}
InvoiceClient.ɵfac = function InvoiceClient_Factory(t) { return new (t || InvoiceClient)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
InvoiceClient.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: InvoiceClient, factory: InvoiceClient.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8587:
/*!*********************************************************************!*\
  !*** ./src/app/modules/invoices/_services/invoice-store.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceStore": () => (/* binding */ InvoiceStore)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var src_app_models_paginated_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/paginated_view */ 4541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _invoice_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-client.service */ 4609);




class InvoiceStore {
    constructor(invoiceClient) {
        this.invoiceClient = invoiceClient;
        this.invoicesListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.list$ = this.invoicesListSubject.asObservable();
        this.subscriptions = [];
        this.load = this.load.bind(this);
        this.invoicesListSubject.next(src_app_models_paginated_view__WEBPACK_IMPORTED_MODULE_0__.emptyPaginatedView);
        this.load();
    }
    get list() {
        return this.list$;
    }
    load(query = null) {
        this.subscriptions.push(this.invoiceClient.list(query)
            .subscribe(view => {
            this.invoicesListSubject.next(view);
        }));
    }
}
InvoiceStore.ɵfac = function InvoiceStore_Factory(t) { return new (t || InvoiceStore)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_invoice_client_service__WEBPACK_IMPORTED_MODULE_1__.InvoiceClient)); };
InvoiceStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: InvoiceStore, factory: InvoiceStore.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2215:
/*!***************************************************************************!*\
  !*** ./src/app/modules/invoices/invoices-list/invoices-list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicesListComponent": () => (/* binding */ InvoicesListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_invoice_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/invoice-store.service */ 8587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);




function InvoicesListComponent_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const invoice_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](invoice_r1);
  }
}

class InvoicesListComponent {
  constructor(invoicesStore) {
    this.invoicesStore = invoicesStore;
  }

  get invoices$() {
    return this.invoicesStore.list;
  }

}

InvoicesListComponent.ɵfac = function InvoicesListComponent_Factory(t) {
  return new (t || InvoicesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_invoice_store_service__WEBPACK_IMPORTED_MODULE_0__.InvoiceStore));
};

InvoicesListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: InvoicesListComponent,
  selectors: [["app-invoices-list"]],
  decls: 9,
  vars: 3,
  consts: [[1, "table-container"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"]],
  template: function InvoicesListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "something");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, InvoicesListComponent_tr_7_Template, 3, 1, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      let tmp_0_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 1, ctx.invoices$)) == null ? null : tmp_0_0.results);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlcy1saXN0LmNvbXBvbmVudC5zYXNzIn0= */"]
});

/***/ }),

/***/ 884:
/*!***********************************************************************!*\
  !*** ./src/app/modules/partners/_services/partners-client.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerClient": () => (/* binding */ PartnerClient)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _environments_environment_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment.local */ 6497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);





class PartnerClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    autocomplete() {
        return this.httpClient.get(PartnerClient.PARTNERS_URL)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([])));
    }
}
PartnerClient.PARTNERS_URL = _environments_environment_local__WEBPACK_IMPORTED_MODULE_0__.environment.babelUrl + 'budget/partners/';
PartnerClient.ɵfac = function PartnerClient_Factory(t) { return new (t || PartnerClient)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
PartnerClient.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PartnerClient, factory: PartnerClient.ɵfac, providedIn: "root" });


/***/ }),

/***/ 3663:
/*!***********************************************************************!*\
  !*** ./src/app/modules/projects/_services/projects-client.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectClient": () => (/* binding */ ProjectClient)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _environments_environment_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment.local */ 6497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);





class ProjectClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    autocomplete() {
        return this.httpClient.get(ProjectClient.PROJECT_URL)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([])));
    }
}
ProjectClient.PROJECT_URL = _environments_environment_local__WEBPACK_IMPORTED_MODULE_0__.environment.babelUrl + 'budget/projects/';
ProjectClient.ɵfac = function ProjectClient_Factory(t) { return new (t || ProjectClient)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
ProjectClient.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProjectClient, factory: ProjectClient.ɵfac, providedIn: "root" });


/***/ }),

/***/ 3498:
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/_directives/modal.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BabelModal": () => (/* binding */ BabelModal)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);


class BabelModal {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModal(content) {
        this.modalRef = this.modalService.open(content);
    }
    close() {
        this.modalRef.close();
    }
}
BabelModal.ɵfac = function BabelModal_Factory(t) { return new (t || BabelModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal)); };
BabelModal.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BabelModal, selectors: [["app-modal"]] });


/***/ }),

/***/ 6988:
/*!********************************************************!*\
  !*** ./src/app/modules/shared/_models/query-string.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryParams": () => (/* binding */ QueryParams)
/* harmony export */ });
class QueryParams {
    constructor(params) {
        this.params = params;
    }
    toQueryParams() {
        return this.params;
    }
}


/***/ }),

/***/ 8083:
/*!********************************************************************!*\
  !*** ./src/app/modules/shared/_services/form-submitted.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormSubmittedNotifier": () => (/* binding */ FormSubmittedNotifier)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class FormSubmittedNotifier {
    constructor() {
        this.isSubmittedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.isSubmitted$ = this.isSubmittedSubject.asObservable();
        this.isSubmittedSubject.next(false);
    }
    notifyFormSubmission() {
        this.isSubmittedSubject.next(true);
    }
    subscribe(next, error, complete) {
        return this.isSubmitted$.subscribe(next, error, complete);
    }
}
FormSubmittedNotifier.ɵfac = function FormSubmittedNotifier_Factory(t) { return new (t || FormSubmittedNotifier)(); };
FormSubmittedNotifier.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FormSubmittedNotifier, factory: FormSubmittedNotifier.ɵfac, providedIn: "root" });


/***/ }),

/***/ 789:
/*!********************************************************!*\
  !*** ./src/app/modules/shared/_services/validators.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "conditionalValidator": () => (/* binding */ conditionalValidator)
/* harmony export */ });
const conditionalValidator = (predicate, validator) => (formControl) => predicate() ? validator(formControl) : null;


/***/ }),

/***/ 1927:
/*!*********************************************************************!*\
  !*** ./src/app/modules/shared/form-errors/form-errors.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormErrorsComponent": () => (/* binding */ FormErrorsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_form_submitted_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/form-submitted.service */ 8083);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);





function FormErrorsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const error_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](error_r1);
  }
}

class FormErrorsComponent {
  constructor(formSubmittedNotifier) {
    this.formSubmittedNotifier = formSubmittedNotifier;
    this.errorsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.errors$ = this.errorsSubject.asObservable();
    this.subscribers = [];
  }

  ngOnInit() {
    if (this.element) {
      this.subscribers.push(this.formSubmittedNotifier.subscribe(isSubmitted => {
        if (!isSubmitted) {
          return;
        }

        this.errorsSubject.next([]);

        if (this.element && this.element.errors) {
          this.errorsSubject.next(this.errorsList);
        }
      }));
      this.subscribers.push(this.element.statusChanges.subscribe(_ => {
        this.errorsSubject.next([]);

        if (this.element && this.element.errors && this.element.dirty) {
          this.errorsSubject.next(this.errorsList);
        }
      }));
    }
  }

  ngOnDestroy() {
    this.subscribers.forEach(subscription => subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe());
  }

  get errorsList() {
    var _a;

    return Object.keys(((_a = this.element) === null || _a === void 0 ? void 0 : _a.errors) || []).filter(validator => {
      var _a;

      return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.errors) && this.element.errors[validator];
    }).map(validator => {
      var _a;

      return (_a = FormErrorsComponent.formErrors.get(validator)) !== null && _a !== void 0 ? _a : 'Invalid';
    });
  }

}
FormErrorsComponent.formErrors = new Map().set('required', 'This field is required');

FormErrorsComponent.ɵfac = function FormErrorsComponent_Factory(t) {
  return new (t || FormErrorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_form_submitted_service__WEBPACK_IMPORTED_MODULE_0__.FormSubmittedNotifier));
};

FormErrorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FormErrorsComponent,
  selectors: [["app-form-errors"]],
  inputs: {
    element: "element"
  },
  decls: 2,
  vars: 3,
  consts: [[4, "ngFor", "ngForOf"]],
  template: function FormErrorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FormErrorsComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.errors$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 3847:
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/modal/modal.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);




function ModalComponent_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.buttonIcon);
} }
function ModalComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.buttonText);
} }
function ModalComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_3_Template_button_click_3_listener() { const dismiss_r4 = ctx.dismiss; return dismiss_r4(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.title);
} }
const _c0 = ["*"];
class ModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    set shouldClose(shouldClose) {
        shouldClose.subscribe(shouldCloseModal => shouldCloseModal && this.close());
    }
    openModal(content) {
        this.modalRef = this.modalService.open(content);
    }
    close() {
        this.modalRef.close();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal)); };
ModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { buttonText: "buttonText", buttonIcon: "buttonIcon", title: "title", shouldClose: "shouldClose" }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[1, "btn", 3, "click"], [3, "icon", 4, "ngIf"], [4, "ngIf"], ["content", ""], [3, "icon"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.openModal(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalComponent_fa_icon_1_Template, 1, 1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalComponent_ng_template_3_Template, 8, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent], encapsulation: 2 });


/***/ }),

/***/ 236:
/*!****************************************************************!*\
  !*** ./src/app/modules/shared/pagination/_model/pagination.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageSizes": () => (/* binding */ pageSizes),
/* harmony export */   "defaultPageSize": () => (/* binding */ defaultPageSize),
/* harmony export */   "Pagination": () => (/* binding */ Pagination)
/* harmony export */ });
const pageSizes = [10, 20, 30, 50, 100];
const defaultPageSize = 10;
class Pagination {
    constructor() {
        this._pageSize = defaultPageSize;
        this._page = 1;
        this._nextPage = null;
        this._prevPage = null;
    }
    get page() {
        return this._page;
    }
    get pageSize() {
        return this._pageSize;
    }
    set page(page) {
        this._page = page;
    }
    set pageSize(pageSize) {
        this._pageSize = pageSize;
    }
    get nextPage() {
        return this._nextPage;
    }
    set nextPage(value) {
        this._nextPage = value;
    }
    get prevPage() {
        return this._prevPage;
    }
    set prevPage(value) {
        this._prevPage = value;
    }
    processQueryParameters(query) {
        if (this._page) {
            query.set('page', this._page);
        }
        if (this._pageSize) {
            query.set('page_size', this._pageSize);
        }
    }
    toQueryParams() {
        return new Map([['page', this._page], ['page_size', this._pageSize]]);
    }
    toRemovableQueryParams() {
        return new Map();
    }
}


/***/ }),

/***/ 5087:
/*!*******************************************************************!*\
  !*** ./src/app/modules/shared/pagination/pagination.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _model_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_model/pagination */ 236);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);





function PaginationComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pageSize_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pageSize_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pageSize_r1);
} }
class PaginationComponent {
    constructor() {
        this.paginationEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.pagination = new _model_pagination__WEBPACK_IMPORTED_MODULE_0__.Pagination();
        this.pageSizesEnum = _model_pagination__WEBPACK_IMPORTED_MODULE_0__.pageSizes;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.view$.subscribe(paginatedView => {
            this.pagination.prevPage = paginatedView.previous ? this.pagination.page - 1 : null;
            this.pagination.nextPage = paginatedView.next ? this.pagination.page + 1 : null;
        }));
        this.subscriptions.push(this.goToFirstPage$.subscribe(goToFirstPage => this.pagination.page = goToFirstPage ? 1 : this.pagination.page));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(subscription => !subscription.closed && subscription.unsubscribe());
    }
    onPageSizeChange(pageSize) {
        this.pagination.pageSize = pageSize;
        this.paginationEmitter.emit(this.pagination);
    }
    onPageChange(page) {
        this.pagination.page = page;
        this.paginationEmitter.emit(this.pagination);
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { view$: ["view", "view$"], goToFirstPage$: ["goToFirstPage", "goToFirstPage$"] }, outputs: { paginationEmitter: "paginationChange" }, decls: 12, vars: 5, consts: [["for", "rows-on-page"], ["id", "rows-on-page", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [3, "disabled", "click"], [3, "value"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Rows per page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PaginationComponent_Template_select_ngModelChange_4_listener($event) { return ctx.onPageSizeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PaginationComponent_ng_container_5_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_Template_button_click_7_listener() { let tmp_b_0; return ctx.onPageChange((tmp_b_0 = ctx.pagination == null ? null : ctx.pagination.prevPage) !== null && tmp_b_0 !== undefined ? tmp_b_0 : 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_Template_button_click_10_listener() { let tmp_b_0; return ctx.onPageChange((tmp_b_0 = ctx.pagination == null ? null : ctx.pagination.nextPage) !== null && tmp_b_0 !== undefined ? tmp_b_0 : 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.pagination == null ? null : ctx.pagination.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pageSizesEnum);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !(ctx.pagination == null ? null : ctx.pagination.prevPage));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = ctx.pagination == null ? null : ctx.pagination.page) !== null && tmp_3_0 !== undefined ? tmp_3_0 : 1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !(ctx.pagination == null ? null : ctx.pagination.nextPage));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"]], encapsulation: 2 });


/***/ }),

/***/ 5608:
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/search-filter/search-filter.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchFilterComponent": () => (/* binding */ SearchFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);



class SearchFilterComponent {
    constructor() {
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    set label(label) {
        this._label = label;
        if (label) {
            this.inputId = label.replace(/[^0-9a-z]/gi, '-').toLowerCase();
        }
    }
    get label() {
        return this._label;
    }
    onSearch() {
        this.filterChange.emit(this);
    }
    toQueryParams() {
        return new Map([[this.filterName, this.searchValue]]);
    }
    toRemovableQueryParams() {
        return new Map();
    }
}
SearchFilterComponent.ɵfac = function SearchFilterComponent_Factory(t) { return new (t || SearchFilterComponent)(); };
SearchFilterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchFilterComponent, selectors: [["app-search-filter"]], inputs: { filterName: "filterName", label: "label" }, outputs: { filterChange: "filterChange" }, decls: 3, vars: 4, consts: [[3, "htmlFor"], ["type", "text", 3, "id", "ngModel", "ngModelChange", "keyup"]], template: function SearchFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchFilterComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchValue = $event; })("keyup", function SearchFilterComponent_Template_input_keyup_2_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("htmlFor", ctx.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("ngModel", ctx.searchValue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 2271:
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _form_errors_form_errors_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-errors/form-errors.component */ 1927);
/* harmony import */ var _directives_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_directives/modal.component */ 3498);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination/pagination.component */ 5087);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-filter/search-filter.component */ 5608);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/modal.component */ 3847);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);









class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_form_errors_form_errors_component__WEBPACK_IMPORTED_MODULE_0__.FormErrorsComponent,
        _directives_modal_component__WEBPACK_IMPORTED_MODULE_1__.BabelModal,
        _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__.PaginationComponent,
        _search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_3__.SearchFilterComponent,
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.ModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule], exports: [_form_errors_form_errors_component__WEBPACK_IMPORTED_MODULE_0__.FormErrorsComponent,
        _directives_modal_component__WEBPACK_IMPORTED_MODULE_1__.BabelModal,
        _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__.PaginationComponent,
        _search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_3__.SearchFilterComponent,
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.ModalComponent] }); })();


/***/ }),

/***/ 1821:
/*!*******************************************!*\
  !*** ./src/app/services/authorization.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationService": () => (/* binding */ AuthorizationService),
/* harmony export */   "ClientRequestErrorHandler": () => (/* binding */ ClientRequestErrorHandler)
/* harmony export */ });
/* harmony import */ var _config_auth_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/auth.config */ 483);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-oauth2-oidc */ 7316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);






class AuthorizationService {
    constructor(oauthService, router) {
        this.oauthService = oauthService;
        this.router = router;
        this.oauthService.configure(_config_auth_config__WEBPACK_IMPORTED_MODULE_0__.authCodeFlowConfig);
        const isLogged = this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken();
        this._isUserLoggedInSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(isLogged);
        this.isUserLoggedInObservable = this._isUserLoggedInSubject.asObservable();
        this.oauthService.setupAutomaticSilentRefresh();
        this.oauthService.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(e => e.type === 'token_received'))
            .subscribe(e => this.setIsUserLoggedIn = true);
        this.oauthService.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(e => e.type === 'logout'))
            .subscribe(e => this.setIsUserLoggedIn = false);
    }
    set setIsUserLoggedIn(isLoggedIn) {
        this._isUserLoggedInSubject.next(isLoggedIn);
    }
    login() {
        this.oauthService.loadDiscoveryDocumentAndLogin();
    }
    logout() {
        this.oauthService.logOut(true);
        this.router.navigateByUrl('');
    }
    refreshToken() {
        return this.oauthService.loadDiscoveryDocument()
            .then(_ => this.oauthService.refreshToken());
    }
}
AuthorizationService.ɵfac = function AuthorizationService_Factory(t) { return new (t || AuthorizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__.OAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AuthorizationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthorizationService, factory: AuthorizationService.ɵfac, providedIn: 'root' });
class ClientRequestErrorHandler {
    handleError(err) {
        console.error(err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
    }
}
ClientRequestErrorHandler.ɵfac = function ClientRequestErrorHandler_Factory(t) { return new (t || ClientRequestErrorHandler)(); };
ClientRequestErrorHandler.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ClientRequestErrorHandler, factory: ClientRequestErrorHandler.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7176:
/*!***************************************!*\
  !*** ./src/app/services/factories.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2472);

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__.TranslateHttpLoader(http);
}


/***/ }),

/***/ 2891:
/*!**********************************************************!*\
  !*** ./src/app/services/guard/is-authenticated.guard.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsAuthenticatedGuard": () => (/* binding */ IsAuthenticatedGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authorization */ 1821);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);




class IsAuthenticatedGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isAuthenticatedSubjectObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.isAuthenticated = this.isAuthenticatedSubjectObservable.asObservable();
        this.authService.isUserLoggedInObservable.subscribe((next) => {
            this.isAuthenticatedSubjectObservable.next(next || router.parseUrl(''));
        });
    }
    canActivate(route, state) {
        return this.isAuthenticated;
    }
}
IsAuthenticatedGuard.ɵfac = function IsAuthenticatedGuard_Factory(t) { return new (t || IsAuthenticatedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_authorization__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
IsAuthenticatedGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: IsAuthenticatedGuard, factory: IsAuthenticatedGuard.ɵfac, providedIn: "root" });


/***/ }),

/***/ 6497:
/*!***********************************************!*\
  !*** ./src/environments/environment.local.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    gatekeeperUrl: 'http://localhost:8001/',
    babelUrl: 'http://localhost:8002/',
    defaultLanguage: 'ro',
    defaultLocale: 'ro-RO'
};


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    gatekeeperUrl: 'http://localhost:8001/',
    babelUrl: 'http://localhost:8002/',
    defaultLanguage: 'ro',
    defaultLocale: 'ro-RO'
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map