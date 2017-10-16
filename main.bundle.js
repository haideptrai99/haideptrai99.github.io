webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">Start Bootstrap</a>\n        </div>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li>\n                    <a href=\"#\">About</a>\n                </li>\n                <li>\n                    <a href=\"#\">Services</a>\n                </li>\n                <li>\n                    <a href=\"#\">Contact</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container -->\n</nav>\n\n<!-- Page Content -->\n<div class=\"container\">\n\n    <div class=\"row\">\n\n        <div class=\"col-md-3\">\n            <p class=\"lead\">Shop Name</p>\n            <div class=\"list-group\">\n                <a routerLink=\"/basic/zero-config\" class=\"list-group-item\" routerLinkActive=\"active\">Zero config</a>\n                <a routerLink=\"/basic/with-options\" class=\"list-group-item\" routerLinkActive=\"active\">With option</a>\n                <a routerLink=\"/basic/with-ajax\" class=\"list-group-item\" routerLinkActive=\"active\">With ajax</a>\n                <a routerLink=\"/basic/with-paging\" class=\"list-group-item\" routerLinkActive=\"active\">With paging</a>\n            </div>\n            <div class=\"panel-group\" id=\"accordion\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\"><span class=\"glyphicon glyphicon-folder-close\">\n                        </span>GameSpot List</a>\n                    </h4>\n                </div>\n                <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n                    <div class=\"panel-body\">\n                        <table class=\"table\">\n                            <tr>\n                                <td>\n                                    <span class=\"glyphicon glyphicon-pencil text-primary\"></span><a routerLink=\"/basic/with-paging\" >GameSpot List</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <span class=\"glyphicon glyphicon-flash text-success\"></span><a routerLink=\"/basic/with-paging-add\">GameSpot Add</a>\n                                </td>\n                            </tr>\n                            \n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\"><span class=\"glyphicon glyphicon-th\">\n                        </span>Modules</a>\n                    </h4>\n                </div>\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n                    <div class=\"panel-body\">\n                        <table class=\"table\">\n                            <tr>\n                                <td>\n                                    <a href=\"http://www.jquery2dotnet.com\">Orders</a> <span class=\"label label-success\">$ 320</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <a href=\"http://www.jquery2dotnet.com\">Invoices</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <a href=\"http://www.jquery2dotnet.com\">Shipments</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <a href=\"http://www.jquery2dotnet.com\">Tex</a>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\"><span class=\"glyphicon glyphicon-user\">\n                        </span>Account</a>\n                    </h4>\n                </div>\n                <div id=\"collapseThree\" class=\"panel-collapse collapse\">\n                    <div class=\"panel-body\">\n                        <table class=\"table\">\n                            <tr>\n                                <td>\n                                    <a href=\"http://www.jquery2dotnet.com\">Change Password</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <a href=\"http://www.jquery2dotnet.com\">Notifications</a> <span class=\"label label-info\">5</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <a href=\"http://www.jquery2dotnet.com\">Import/Export</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <span class=\"glyphicon glyphicon-trash text-danger\"></span><a href=\"http://www.jquery2dotnet.com\" class=\"text-danger\">\n                                        Delete Account</a>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\"><span class=\"glyphicon glyphicon-file\">\n                        </span>Reports</a>\n                    </h4>\n                </div>\n                <div id=\"collapseFour\" class=\"panel-collapse collapse\">\n                    <div class=\"panel-body\">\n                        <table class=\"table\">\n                            <tr>\n                                <td>\n                                    <span class=\"glyphicon glyphicon-usd\"></span><a href=\"http://www.jquery2dotnet.com\">Sales</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <span class=\"glyphicon glyphicon-user\"></span><a href=\"http://www.jquery2dotnet.com\">Customers</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <span class=\"glyphicon glyphicon-tasks\"></span><a href=\"http://www.jquery2dotnet.com\">Products</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <span class=\"glyphicon glyphicon-shopping-cart\"></span><a href=\"http://www.jquery2dotnet.com\">Shopping Cart</a>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n        </div>\n\n        <div class=\"col-md-9\">\n\n            <router-outlet></router-outlet>\n\n            \n\n        </div>\n\n    </div>\n\n</div>\n<!-- /.container -->\n\n<div class=\"container\">\n\n    <hr>\n\n    <!-- Footer -->\n    <footer>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <p>Copyright &copy; Your Website 2014</p>\n            </div>\n        </div>\n    </footer>\n\n</div>\n<!-- /.container -->\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'hello hai dep trai';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__word_word_component__ = __webpack_require__("../../../../../src/app/word/word.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_form_user_form_component__ = __webpack_require__("../../../../../src/app/user-form/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__struct_struct_component__ = __webpack_require__("../../../../../src/app/struct/struct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__person_person_component__ = __webpack_require__("../../../../../src/app/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__list_person_list_person_component__ = __webpack_require__("../../../../../src/app/list-person/list-person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__parent_component__ = __webpack_require__("../../../../../src/app/parent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__child_component__ = __webpack_require__("../../../../../src/app/child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__card_component__ = __webpack_require__("../../../../../src/app/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__round_pipe__ = __webpack_require__("../../../../../src/app/round.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ip_component__ = __webpack_require__("../../../../../src/app/ip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__weather_weather_component__ = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__sign_in_component__ = __webpack_require__("../../../../../src/app/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__contact_detail_contact_detail_component__ = __webpack_require__("../../../../../src/app/contact-detail/contact-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__basic_zero_config_component__ = __webpack_require__("../../../../../src/app/basic/zero-config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__basic_with_options_component__ = __webpack_require__("../../../../../src/app/basic/with-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__basic_with_ajax_component__ = __webpack_require__("../../../../../src/app/basic/with-ajax.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__basic_with_paging_component__ = __webpack_require__("../../../../../src/app/basic/with-paging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__basic_with_paging_detail_component__ = __webpack_require__("../../../../../src/app/basic/with-paging-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__basic_with_paging_add_component__ = __webpack_require__("../../../../../src/app/basic/with-paging-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__basic_with_paging_edit_component__ = __webpack_require__("../../../../../src/app/basic/with-paging-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_select2_component_angular__ = __webpack_require__("../../../../select2-component/angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__basic_confirm_component__ = __webpack_require__("../../../../../src/app/basic/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__basic_alert_component__ = __webpack_require__("../../../../../src/app/basic/alert.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


var routesConfig = [
    { path: 'contacts/:id', component: __WEBPACK_IMPORTED_MODULE_22__contacts_contacts_component__["a" /* ContactsComponent */] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_22__contacts_contacts_component__["a" /* ContactsComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_23__contact_detail_contact_detail_component__["a" /* ContactDetailComponent */] },
    { path: '', redirectTo: '/basic/zero-config', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_24__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
























//import { NgbdModalBasic } from './basic/modal-basic';


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__word_word_component__["a" /* WordComponent */],
            __WEBPACK_IMPORTED_MODULE_11__user_form_user_form_component__["a" /* UserFormComponent */],
            __WEBPACK_IMPORTED_MODULE_12__struct_struct_component__["a" /* StructComponent */],
            __WEBPACK_IMPORTED_MODULE_13__person_person_component__["a" /* PersonComponent */],
            __WEBPACK_IMPORTED_MODULE_14__list_person_list_person_component__["a" /* ListPersonComponent */],
            __WEBPACK_IMPORTED_MODULE_15__parent_component__["a" /* ParentComponent */],
            __WEBPACK_IMPORTED_MODULE_16__child_component__["a" /* ChildComponent */],
            __WEBPACK_IMPORTED_MODULE_17__card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__round_pipe__["a" /* RoundPipe */],
            __WEBPACK_IMPORTED_MODULE_19__ip_component__["a" /* IpComponent */],
            __WEBPACK_IMPORTED_MODULE_20__weather_weather_component__["a" /* WeatherComponent */],
            __WEBPACK_IMPORTED_MODULE_21__sign_in_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_22__contacts_contacts_component__["a" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__contact_detail_contact_detail_component__["a" /* ContactDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_24__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_25__basic_zero_config_component__["a" /* ZeroConfigComponent */],
            __WEBPACK_IMPORTED_MODULE_26__basic_with_options_component__["a" /* WithOptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_27__basic_with_ajax_component__["a" /* WithAjaxComponent */],
            __WEBPACK_IMPORTED_MODULE_28__basic_with_paging_component__["a" /* WithPagingComponent */],
            __WEBPACK_IMPORTED_MODULE_29__basic_with_paging_detail_component__["a" /* WithPagingDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_30__basic_with_paging_add_component__["a" /* WithPagingAddComponent */],
            __WEBPACK_IMPORTED_MODULE_33__basic_confirm_component__["a" /* ConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_34__basic_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_31__basic_with_paging_edit_component__["a" /* WithPagingEditComponent */]
            //NgbdModalBasic
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_32_select2_component_angular__["a" /* Select2Module */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__["BootstrapModalModule"],
            //NgbModule.forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(routesConfig),
            __WEBPACK_IMPORTED_MODULE_5_angular_datatables__["a" /* DataTablesModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_33__basic_confirm_component__["a" /* ConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_34__basic_alert_component__["a" /* AlertComponent */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_zero_config_component__ = __webpack_require__("../../../../../src/app/basic/zero-config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_with_options_component__ = __webpack_require__("../../../../../src/app/basic/with-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basic_with_ajax_component__ = __webpack_require__("../../../../../src/app/basic/with-ajax.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__basic_with_paging_component__ = __webpack_require__("../../../../../src/app/basic/with-paging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basic_with_paging_detail_component__ = __webpack_require__("../../../../../src/app/basic/with-paging-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__basic_with_paging_add_component__ = __webpack_require__("../../../../../src/app/basic/with-paging-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__basic_with_paging_edit_component__ = __webpack_require__("../../../../../src/app/basic/with-paging-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'basic/zero-config',
        component: __WEBPACK_IMPORTED_MODULE_2__basic_zero_config_component__["a" /* ZeroConfigComponent */]
    },
    {
        path: 'basic/with-options',
        component: __WEBPACK_IMPORTED_MODULE_3__basic_with_options_component__["a" /* WithOptionsComponent */]
    },
    {
        path: 'basic/with-ajax',
        component: __WEBPACK_IMPORTED_MODULE_4__basic_with_ajax_component__["a" /* WithAjaxComponent */]
    },
    {
        path: 'basic/with-paging',
        component: __WEBPACK_IMPORTED_MODULE_5__basic_with_paging_component__["a" /* WithPagingComponent */]
    },
    {
        path: 'basic/with-paging/:limit/:page',
        component: __WEBPACK_IMPORTED_MODULE_6__basic_with_paging_detail_component__["a" /* WithPagingDetailComponent */]
    },
    {
        path: 'basic/with-paging-add',
        component: __WEBPACK_IMPORTED_MODULE_7__basic_with_paging_add_component__["a" /* WithPagingAddComponent */]
    },
    {
        path: 'basic/with-paging-edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_8__basic_with_paging_edit_component__["a" /* WithPagingEditComponent */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/basic/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function (_super) {
    __extends(AlertComponent, _super);
    function AlertComponent(dialogService, sanitizer) {
        var _this = _super.call(this, dialogService) || this;
        _this.sanitizer = sanitizer;
        _this.dangerousUrl = '';
        return _this;
    }
    AlertComponent.prototype.ngOnInit = function () {
        this.dangerousUrl = 'https://www.youtube.com/embed/' + this.message;
        this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousUrl);
    };
    return AlertComponent;
}(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogComponent"]));
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'alert',
        template: "<div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                   <div class=\"modal-header\">\n                     <button type=\"button\" class=\"close\" (click)=\"close()\" >&times;</button>\n                     <h4 class=\"modal-title\">{{title || 'Alert!'}}</h4>\n                   </div>\n                   <div class=\"modal-body\">\n                   <iframe allowfullscreen=\"allowfullscreen\" width=\"420\" height=\"345\" [src]=\"trustedUrl\"></iframe>\n                   </div>\n                   <div class=\"modal-footer\">\n                     <button type=\"button\" class=\"btn btn-primary\" (click)=\"close()\">Close</button>\n                   </div>\n                </div>\n             </div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object])
], AlertComponent);

var _a, _b;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/basic/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmComponent = (function (_super) {
    __extends(ConfirmComponent, _super);
    function ConfirmComponent(dialogService) {
        return _super.call(this, dialogService) || this;
    }
    ConfirmComponent.prototype.confirm = function () {
        // we set dialog result as true on click on confirm button, 
        // then we can get dialog result from caller code 
        this.result = true;
        this.close();
    };
    return ConfirmComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));
ConfirmComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'confirm',
        template: "<div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                   <div class=\"modal-header\">\n                     <button type=\"button\" class=\"close\" (click)=\"close()\" >&times;</button>\n                     <h4 class=\"modal-title\">{{title || 'Confirm'}}</h4>\n                   </div>\n                   <div class=\"modal-body\">\n                     <p>{{message || 'Are you sure?'}}</p>\n                   </div>\n                   <div class=\"modal-footer\">\n                     <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">OK</button>\n                     <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\" >Cancel</button>\n                   </div>\n                 </div>\n              </div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object])
], ConfirmComponent);

var _a;
//# sourceMappingURL=confirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/basic/with-add.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithAddService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WithAddService = (function () {
    function WithAddService(http) {
        this.http = http;
    }
    WithAddService.prototype.getCateList = function () {
        //const url='http://localhost/scoregame/api/v1/getCateList';
        var url = 'https://scoregame.000webhostapp.com/scoregame/api/v1/getCateList';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        // headers.append('Access-Control-Allow-Origin','*');  
        // headers.append('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        // headers.append('Access-Control-Allow-Headers', "Origin, Content-Type, X-Auth-Token");      
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    return WithAddService;
}());
WithAddService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WithAddService);

var _a;
//# sourceMappingURL=with-add.service.js.map

/***/ }),

/***/ "../../../../../src/app/basic/with-ajax.component.html":
/***/ (function(module, exports) {

module.exports = "<table id=\"dtTable\" class=\"row-border hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>First name</th>\r\n        <th>Last name</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>1</td>\r\n        <td>Foo</td>\r\n        <td>Bar</td>\r\n      </tr>\r\n      <tr>\r\n        <td>2</td>\r\n        <td>Someone</td>\r\n        <td>Youknow</td>\r\n      </tr>\r\n      <tr>\r\n        <td>3</td>\r\n        <td>Iamout</td>\r\n        <td>Ofinspiration</td>\r\n      </tr>\r\n      <tr>\r\n        <td>4</td>\r\n        <td>Yoda</td>\r\n        <td>Skywalker</td>\r\n      </tr>\r\n      <tr>\r\n        <td>5</td>\r\n        <td>Patrick</td>\r\n        <td>Dupont</td>\r\n      </tr>\r\n      <tr>\r\n        <td>6</td>\r\n        <td>Barack</td>\r\n        <td>Obama</td>\r\n      </tr>\r\n      <tr>\r\n        <td>7</td>\r\n        <td>François</td>\r\n        <td>Holland</td>\r\n      </tr>\r\n      <tr>\r\n        <td>8</td>\r\n        <td>Michel</td>\r\n        <td>Popo</td>\r\n      </tr>\r\n      <tr>\r\n        <td>9</td>\r\n        <td>Chuck</td>\r\n        <td>Norris</td>\r\n      </tr>\r\n      <tr>\r\n        <td>10</td>\r\n        <td>Simon</td>\r\n        <td>Robin</td>\r\n      </tr>\r\n      <tr>\r\n        <td>11</td>\r\n        <td>Louis</td>\r\n        <td>Lin</td>\r\n      </tr>\r\n      <tr>\r\n        <td>12</td>\r\n        <td>Zelda</td>\r\n        <td>Link</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "../../../../../src/app/basic/with-ajax.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithAjaxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WithAjaxComponent = (function () {
    function WithAjaxComponent() {
    }
    WithAjaxComponent.prototype.ngOnInit = function () {
        $('#dtTable').DataTable({
            searching: false,
            "pagingType": "full_numbers",
            "processing": true,
            "serverSide": true,
            "columns": [{
                    // "width" : "90%",
                    "orderable": true,
                    className: "t_col",
                    "name": 'id'
                }, {
                    // "width" : "5%",
                    "orderable": true,
                    className: "s_col",
                    "name": 'name'
                }, {
                    // "width" : "5%",
                    "orderable": false,
                    className: "d_col",
                    "name": 'score'
                }],
            "ajax": {
                "url": 'http://localhost/scoregame/api/v1/gamespotListAngular',
                "data": function (d) {
                    return $.extend({}, d, {
                        "extra_search": 'test',
                        "extra_search 1": 'test'
                    });
                }
            },
        });
    };
    return WithAjaxComponent;
}());
WithAjaxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'with-ajax',
        template: __webpack_require__("../../../../../src/app/basic/with-ajax.component.html")
    })
], WithAjaxComponent);

//# sourceMappingURL=with-ajax.component.js.map

/***/ }),

/***/ "../../../../../src/app/basic/with-edit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithEditService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WithEditService = (function () {
    function WithEditService(http) {
        this.http = http;
    }
    WithEditService.prototype.getCateList = function () {
        //const url='http://localhost/scoregame/api/v1/getCateList';
        var url = 'https://scoregame.000webhostapp.com/scoregame/api/v1/getCateList';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        // headers.append('Access-Control-Allow-Origin','*');  
        // headers.append('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        // headers.append('Access-Control-Allow-Headers', "Origin, Content-Type, X-Auth-Token");      
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    WithEditService.prototype.getData = function (id) {
        //const url='http://localhost/scoregame/api/v1/gamespotListPagingAngular?id='+id;
        var url = 'https://scoregame.000webhostapp.com/scoregame/api/v1/gamespotListPagingAngular?id=' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        // headers.append('Access-Control-Allow-Origin','*');  
        // headers.append('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        // headers.append('Access-Control-Allow-Headers', "Origin, Content-Type, X-Auth-Token");      
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    return WithEditService;
}());
WithEditService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WithEditService);

var _a;
//# sourceMappingURL=with-edit.service.js.map

/***/ }),

/***/ "../../../../../src/app/basic/with-options.component.html":
/***/ (function(module, exports) {

module.exports = "<table datatable [dtOptions]=\"dtOptions\" class=\"row-border hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>First name</th>\r\n        <th>Last name</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>1</td>\r\n        <td>Foo</td>\r\n        <td>Bar</td>\r\n      </tr>\r\n      <tr>\r\n        <td>2</td>\r\n        <td>Someone</td>\r\n        <td>Youknow</td>\r\n      </tr>\r\n      <tr>\r\n        <td>3</td>\r\n        <td>Iamout</td>\r\n        <td>Ofinspiration</td>\r\n      </tr>\r\n      <tr>\r\n        <td>4</td>\r\n        <td>Yoda</td>\r\n        <td>Skywalker</td>\r\n      </tr>\r\n      <tr>\r\n        <td>5</td>\r\n        <td>Patrick</td>\r\n        <td>Dupont</td>\r\n      </tr>\r\n      <tr>\r\n        <td>6</td>\r\n        <td>Barack</td>\r\n        <td>Obama</td>\r\n      </tr>\r\n      <tr>\r\n        <td>7</td>\r\n        <td>François</td>\r\n        <td>Holland</td>\r\n      </tr>\r\n      <tr>\r\n        <td>8</td>\r\n        <td>Michel</td>\r\n        <td>Popo</td>\r\n      </tr>\r\n      <tr>\r\n        <td>9</td>\r\n        <td>Chuck</td>\r\n        <td>Norris</td>\r\n      </tr>\r\n      <tr>\r\n        <td>10</td>\r\n        <td>Simon</td>\r\n        <td>Robin</td>\r\n      </tr>\r\n      <tr>\r\n        <td>11</td>\r\n        <td>Louis</td>\r\n        <td>Lin</td>\r\n      </tr>\r\n      <tr>\r\n        <td>12</td>\r\n        <td>Zelda</td>\r\n        <td>Link</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "../../../../../src/app/basic/with-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithOptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WithOptionsComponent = (function () {
    function WithOptionsComponent() {
        this.dtOptions = {};
    }
    WithOptionsComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            paging: false
        };
    };
    return WithOptionsComponent;
}());
WithOptionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-with-options',
        template: __webpack_require__("../../../../../src/app/basic/with-options.component.html")
    })
], WithOptionsComponent);

//# sourceMappingURL=with-options.component.js.map

/***/ }),

/***/ "../../../../../src/app/basic/with-paging-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\r\n    <h1 class=\"page-header\">Gamespot add\r\n    </h1>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <!-- <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\"><i class=\"fa fa-pencil\"></i> Score game add </h3>\r\n    </div> -->\r\n    <div class=\"panel-body\">\r\n        <form (submit)=\"onSubmit(formAdd);\" #formAdd=\"ngForm\">\r\n            <ul class=\"nav nav-tabs\">\r\n                <li class=\"active\">\r\n                    <a href=\"#tab-data\" data-toggle=\"tab\">Data</a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"tab-content\">\r\n                <div class=\"tab-pane active\" id=\"tab-data\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>Category Parent</label>\r\n                        <select2 [data]=\"dataCate\" [value]=\"valueCate\" placeholder=\"select an category\" (update)=\"updateCate($event)\">\r\n                        </select2>\r\n\r\n                        <!-- <select class=\"form-control\" name=\"cate_id\" id=\"cate_id\">\r\n          <option value=\"\">Please choose category</option>\r\n          <ng-container *ngFor=\"let cate of arrCateList\">\r\n            <option value=\"{{cate.id}}\">{{cate.name}}</option>\r\n          </ng-container>\r\n          </select> -->\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Name</label>\r\n                        <input class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"name\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Score</label>\r\n                        <input class=\"form-control\" name=\"score\" id=\"score\" [(ngModel)]=\"score\" placeholder=\"Please Enter score\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Score world</label>\r\n                        <select class=\"form-control\" name=\"score_word\" id=\"score_word\" [(ngModel)]=\"score_word\">\r\n                            <option value=\"\">Please choose score word</option>\r\n                            <option value=\"Good\">Good</option>\r\n                            <option value=\"Fair\">Fair</option>\r\n                            <option value=\"Great\">Great</option>\r\n                            <option value=\"Mediocre\">Mediocre</option>\r\n                            <option value=\"Poor\">Poor</option>\r\n                            <option value=\"Superb\">Superb</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Hinh dai dien</label>\r\n                        <div class=\"fileupload fileupload-new\" data-provides=\"fileupload\">\r\n                            <div class=\"fileupload-preview thumbnail\" style=\"width: 200px; height: 150px;\"></div>\r\n                            <div>\r\n                                <span class=\"btn btn-file btn-success\">\r\n                                    <span class=\"fileupload-new\">Select image</span>\r\n                                    <span class=\"fileupload-exists\">Change</span>\r\n                                    <input type=\"file\" name=\"img\" (change)=\"uploadImg($event);\" />\r\n                                </span>\r\n                                <a href=\"#\" class=\"btn btn-danger fileupload-exists\" data-dismiss=\"fileupload\">Remove</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Youtube id</label>\r\n                        <input class=\"form-control\" name=\"youtube_id\" id=\"youtube_id\" placeholder=\"Please enter youtube id\" [(ngModel)]=\"youtube_id\"\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <button type=\"submit\" class=\"btn\">Gamespot Add</button>\r\n                <button type=\"reset\" class=\"btn\">Reset</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/basic/with-paging-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithPagingAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__with_add_service__ = __webpack_require__("../../../../../src/app/basic/with-add.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WithPagingAddComponent = (function () {
    function WithPagingAddComponent(withAddService, http, router) {
        this.withAddService = withAddService;
        this.http = http;
        this.router = router;
        this.arrCateList = [];
        this.dataCate = [];
    }
    WithPagingAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.withAddService.getCateList().then(function (v) {
            for (var _i = 0, _a = v.cateList; _i < _a.length; _i++) {
                var cate = _a[_i];
                _this.dataCate.push({ value: cate.id, label: cate.name });
            }
        }).catch(function (err) {
            console.log('Error ' + err);
        });
    };
    WithPagingAddComponent.prototype.updateCate = function (value) {
        this.valueCate = value;
    };
    WithPagingAddComponent.prototype.onSubmit = function (event) {
        var _this = this;
        console.log(event.value);
        console.log(this.imageUpload);
        this.submitValue = event.value;
        //const url2 = 'http://localhost/scoregame/api/v1/gamespotListAdd/add';
        var url2 = 'https://scoregame.000webhostapp.com/scoregame/api/v1/gamespotListAdd/add';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('Access-Control-Allow-Origin','*');  
        //headers.append('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        //headers.append('Access-Control-Allow-Headers', "Origin, Content-Type, X-Auth-Token");      
        // const body = JSON.stringify({ 
        //     name: this.submitValue.name,
        //     score:this.submitValue.score,
        //     score_word:this.submitValue.score_word,
        //     img:this.imageUpload,
        //     youtube_link:this.submitValue.youtube_id
        // });
        var formData = new FormData();
        formData.append('cate_id', this.valueCate);
        formData.append('name', this.submitValue.name);
        formData.append('score', this.submitValue.score);
        formData.append('score_word', this.submitValue.score_word);
        formData.append('img', this.imageUpload);
        formData.append('youtube_link', this.submitValue.youtube_id);
        return this.http.post(url2, formData)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) {
            //alert(resJson.info);
            if (resJson.info == 'success') {
                _this.router.navigate(['/basic/with-paging']);
            }
        });
    };
    WithPagingAddComponent.prototype.uploadImg = function (event) {
        var elem = event.target;
        //console.log(event.target.files);
        this.imageUpload = elem.files[0];
        // if (elem.files.length > 0) {
        //     console.log(elem.files[0]);
        //     let formData = new FormData();
        //     formData.append('fileUploadDemo', elem.files[0]);
        //     const url = 'http://localhost/scoregame/api/v1/uploadImageDemo';
        //     const headers = new Headers();
        //     headers.append('Content-Type', 'application/json');
        //     //headers.append('Access-Control-Allow-Origin','*');  
        //     //headers.append('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        //     //headers.append('Access-Control-Allow-Headers', "Origin, Content-Type, X-Auth-Token");      
        //     const body = JSON.stringify({ name: 'hải đẹp trai' });
        //     return this.http.post(url, formData)
        //         .toPromise()
        //         .then(res => res.text())
        //         .then(resJson => console.log(resJson));
        // }
    };
    return WithPagingAddComponent;
}());
WithPagingAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paging-add',
        template: __webpack_require__("../../../../../src/app/basic/with-paging-add.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_4__with_add_service__["a" /* WithAddService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__with_add_service__["a" /* WithAddService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__with_add_service__["a" /* WithAddService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WithPagingAddComponent);

var _a, _b, _c;
//# sourceMappingURL=with-paging-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/basic/with-paging-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithPagingDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__with_paging_service__ = __webpack_require__("../../../../../src/app/basic/with-paging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_component__ = __webpack_require__("../../../../../src/app/basic/alert.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WithPagingDetailComponent = (function () {
    function WithPagingDetailComponent(route, withPagingService, dialogService) {
        this.route = route;
        this.withPagingService = withPagingService;
        this.dialogService = dialogService;
        this.arrayData = [];
        this.html = '';
        this.sotrang = 0;
        this.page = 0;
        this.last = 0;
        this.start = 0;
        this.end = 0;
        this.list_class = '';
        this.class = '';
        this.limit = 10;
        this.numbers = [];
        this.isLoading = false;
        //$('#tablePaging').addClass('loading');
        //this.isLoading2=true;
    }
    WithPagingDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.isLoading = true;
            var page = params.get('page');
            _this.withPagingService.getData(page)
                .then(function (temp) {
                //console.log(temp.data);
                _this.arrayData = temp.data;
                _this.sotrang = temp.sotrang;
                _this.page = temp.page;
                // for (var i = 0; i < this.sotrang; i++) {
                //     this.html += `<a class="page-num" href="#">`+i+`</a>`;
                // }
                _this.last = Math.ceil(temp.total / temp.limit);
                _this.start = ((_this.page - 7) > 0) ? _this.page - 7 : 1;
                //alert(this.start)
                _this.end = ((_this.page + 7) < _this.last) ? _this.page + 7 : _this.last;
                _this.numbers = Array(_this.end).fill(_this.start).map(function (x, i) { return i + 1; });
                /* this.list_class = 'pagination pagination-sm';
                this.html = '<ul class="' + this.list_class + '">';
                this.class = (this.page == 1) ? "disabled" : "";
                this.html += '<li class="' + this.class + '"><a href="basic/with-paging/' + this.limit + '/' + (this.page - 1) + '">&laquo;</a></li>';
                if (this.start > 1) {
                  this.html += '<li><a href="basic/with-paging/' + this.limit + '/1">1</a></li>';
                  this.html += '<li class="disabled"><span>...</span></li>';
                }
        
                for (var i = this.start; i <= this.end; i++) {
                  this.class = (this.page == i) ? "active" : "";
                  this.html += '<li  class="' + this.class + '"><a  href="basic/with-paging/' + this.limit + '/' + i + '">' + i + '</a></li>';
                }
        
                if (this.end < this.last) {
                  this.html += '<li class="disabled"><span>...</span></li>';
                  this.html += '<li><a href="basic/with-paging/' + this.limit + '/' + this.last + '">' + this.last + '</a></li>';
                }
        
                this.class = (this.page == this.last) ? "disabled" : "";
                this.html += '<li class="' + this.class + '"><a href="basic/with-paging/' + this.limit + '/' + (this.page + 1) + '">&raquo;</a></li>';
        
                this.html += '</ul>'; */
                //$('#paging').html(this.html);
                //console.log(this.elRef.nativeElement.querySelector('#paging li a'));
                //this.elRef.nativeElement.querySelector('#testClick').addEventHandler('click', alert('test'));
                //this.renderer.listen(this.elRef.nativeElement.querySelector('#testClick'), 'click', (event) => { alert('test 111')});
                //$('#tablePaging').removeClass('loading');
                _this.isLoading = false;
            })
                .catch(function (err) {
                console.log('error ' + err);
            });
        });
    };
    WithPagingDetailComponent.prototype.youTubePlay = function (data) {
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_4__alert_component__["a" /* AlertComponent */], { title: data.name, message: data.youtube_id });
    };
    return WithPagingDetailComponent;
}());
WithPagingDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paging-detail',
        template: __webpack_require__("../../../../../src/app/basic/with-paging.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3__with_paging_service__["a" /* WithPagingService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__with_paging_service__["a" /* WithPagingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__with_paging_service__["a" /* WithPagingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object])
], WithPagingDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=with-paging-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/basic/with-paging-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\r\n    <h1 class=\"page-header\">Gamespot edit\r\n    </h1>\r\n</div>\r\n<div class=\"panel panel-default\">\r\n    <!-- <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\"><i class=\"fa fa-pencil\"></i> Score game add </h3>\r\n    </div> -->\r\n    <div class=\"panel-body\">\r\n     <form (submit)=\"onSubmit(formAdd);\" #formAdd=\"ngForm\" >\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"active\"><a href=\"#tab-data\" data-toggle=\"tab\">Data</a></li>\r\n        </ul>\r\n        <div class=\"tab-content\">\r\n          <div class=\"tab-pane active\" id=\"tab-data\">\r\n            \r\n     <div class=\"form-group\">\r\n            <label>Category Parent</label>\r\n            <select2  [data]=\"dataCate\"\r\n            [value]=\"valueCate\"\r\n            [(ngModel)]=\"cate_id\"\r\n            name=\"cate_id\"\r\n            (update)=\"updateCate($event)\">\r\n        </select2>\r\n        \r\n          <!-- <select class=\"form-control\" name=\"cate_id\" id=\"cate_id\">\r\n          <option value=\"\">Please choose category</option>\r\n          <ng-container *ngFor=\"let cate of arrCateList\">\r\n            <option value=\"{{cate.id}}\">{{cate.name}}</option>\r\n          </ng-container>\r\n          </select> -->\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <input class=\"form-control\" name=\"name\" id=\"name\"  [(ngModel)]=\"name\"/>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label>Score</label>\r\n          <input class=\"form-control\" name=\"score\" id=\"score\" [(ngModel)]=\"score\" placeholder=\"Please Enter score\"  />\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label>Score world</label>\r\n          <select class=\"form-control\" name=\"score_word\" id=\"score_word\" [(ngModel)]=\"score_word\">\r\n          <option value=\"\">Please choose score word</option>\r\n          <option value=\"Good\">Good</option>\r\n          <option value=\"Fair\">Fair</option>\r\n          <option value=\"Great\">Great</option>\r\n          <option value=\"Mediocre\">Mediocre</option>\r\n          <option value=\"Poor\">Poor</option>\r\n          <option value=\"Superb\">Superb</option>\r\n          </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label>Hinh dai dien</label>\r\n          <div class=\"fileupload fileupload-new\" data-provides=\"fileupload\">\r\n              <div class=\"fileupload-preview thumbnail\" style=\"width: 200px; height: 150px;\">\r\n                  <img src=\"https://scoregame.000webhostapp.com/scoregame/public/img/gamespot/{{img}}\"/>\r\n              </div>\r\n              <div>\r\n                  <span class=\"btn btn-file btn-success\"><span class=\"fileupload-new\">Select image</span><span class=\"fileupload-exists\">Change</span>\r\n                  <input type=\"file\" name=\"img\" (change)=\"uploadImg($event);\"/></span>\r\n                  <a href=\"#\" class=\"btn btn-danger fileupload-exists\" data-dismiss=\"fileupload\">Remove</a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label>Youtube id</label>\r\n          <input class=\"form-control\" name=\"youtube_id\" id=\"youtube_id\" placeholder=\"Please enter youtube id\" [(ngModel)]=\"youtube_id\"/>\r\n      </div>\r\n          </div>\r\n          <input type=\"hidden\" name=\"id\" value=\"{{id}}\"/>\r\n          <input type=\"hidden\" name=\"imgUrl\" value=\"{{img}}\"/>\r\n          <button type=\"submit\" class=\"btn\">Gamespot Edit</button>\r\n          <button type=\"reset\" class=\"btn\">Reset</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/basic/with-paging-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithPagingEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__with_edit_service__ = __webpack_require__("../../../../../src/app/basic/with-edit.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WithPagingEditComponent = (function () {
    function WithPagingEditComponent(routeActive, withEditService, http, router) {
        this.routeActive = routeActive;
        this.withEditService = withEditService;
        this.http = http;
        this.router = router;
        this.arrCateList = [];
        this.dataCate = [];
        this.name = '';
        this.img = '';
        this.score = '';
        this.score_word = '';
        this.youtube_id = '';
        this.cate_id = 0;
        this.id = '';
    }
    WithPagingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.withEditService.getCateList().then(function (v) {
            for (var _i = 0, _a = v.cateList; _i < _a.length; _i++) {
                var cate = _a[_i];
                _this.dataCate.push({ value: cate.id, label: cate.name });
            }
        }).catch(function (err) {
            console.log('Error ' + err);
        });
        this.routeActive.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.withEditService.getData(_this.id)
                .then(function (temp) {
                console.log(temp.data);
                var data = temp.data[0];
                _this.cate_id = data.cate_id;
                _this.name = data.name;
                _this.img = data.img;
                _this.score = data.score;
                _this.score_word = data.score_word;
                _this.youtube_id = data.youtube_id;
            })
                .catch(function (err) {
                console.log('error ' + err);
            });
        });
    };
    WithPagingEditComponent.prototype.updateCate = function (value) {
        this.valueCate = value;
    };
    WithPagingEditComponent.prototype.onSubmit = function (event) {
        var _this = this;
        console.log(event.value);
        console.log('img upload' + this.imageUpload);
        this.submitValue = event.value;
        //const url2 = 'http://localhost/scoregame/api/v1/gamespotListUpdate';
        var url2 = 'https://scoregame.000webhostapp.com/scoregame/api/v1/gamespotListUpdate';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('Access-Control-Allow-Origin','*');  
        //headers.append('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        //headers.append('Access-Control-Allow-Headers', "Origin, Content-Type, X-Auth-Token");      
        // const body = JSON.stringify({ 
        //     name: this.submitValue.name,
        //     score:this.submitValue.score,
        //     score_word:this.submitValue.score_word,
        //     img:this.imageUpload,
        //     youtube_link:this.submitValue.youtube_id
        // });
        var formData = new FormData();
        formData.append('id', this.id);
        formData.append('cate_id', this.valueCate);
        formData.append('name', this.submitValue.name);
        formData.append('score', this.submitValue.score);
        formData.append('score_word', this.submitValue.score_word);
        formData.append('img', this.imageUpload);
        formData.append('imgUrl', this.img);
        formData.append('youtube_link', this.submitValue.youtube_id);
        return this.http.post(url2, formData)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) {
            console.log(resJson);
            // alert(resJson.info);
            if (resJson.info == 'success') {
                _this.router.navigate(['/basic/with-paging']);
            }
        });
    };
    WithPagingEditComponent.prototype.uploadImg = function (event) {
        var elem = event.target;
        //console.log(event.target.files);
        this.imageUpload = elem.files[0];
        // if (elem.files.length > 0) {
        //     console.log(elem.files[0]);
        //     let formData = new FormData();
        //     formData.append('fileUploadDemo', elem.files[0]);
        //     const url = 'http://localhost/scoregame/api/v1/uploadImageDemo';
        //     const headers = new Headers();
        //     headers.append('Content-Type', 'application/json');
        //     //headers.append('Access-Control-Allow-Origin','*');  
        //     //headers.append('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        //     //headers.append('Access-Control-Allow-Headers', "Origin, Content-Type, X-Auth-Token");      
        //     const body = JSON.stringify({ name: 'hải đẹp trai' });
        //     return this.http.post(url, formData)
        //         .toPromise()
        //         .then(res => res.text())
        //         .then(resJson => console.log(resJson));
        // }
    };
    return WithPagingEditComponent;
}());
WithPagingEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paging-edit',
        template: __webpack_require__("../../../../../src/app/basic/with-paging-edit.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_4__with_edit_service__["a" /* WithEditService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__with_edit_service__["a" /* WithEditService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__with_edit_service__["a" /* WithEditService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WithPagingEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=with-paging-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/basic/with-paging.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-bordered table-hover table-full-width {{isLoading==true?'loading':''}} \" id=\"tablePaging\">\r\n    <thead>\r\n        <tr>\r\n            <th>Img</th>\r\n            <th>Name</th>\r\n            <th>Score</th>\r\n            <th>Youtube</th>\r\n            <th>Cate name</th>\r\n            <th>Action</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let data of arrayData\">\r\n            <td width=\"50\"><img src=\"https://scoregame.000webhostapp.com/scoregame/public/img/gamespot/{{data.img}}\" width=\"50\" height=\"50\"></td>\r\n            <td>{{data.name}}</td>\r\n            <td>{{data.score}}</td>\r\n            <td><a (click)=\"youTubePlay(data);\">Link</a></td>\r\n            <td>{{data.cate_name}}</td>\r\n            <td><a routerLink=\"/basic/with-paging-edit/{{data.id}}\">Edit</a>|<a (click)=\"delete(data);\">Delete</a></td>\r\n\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n <!-- <div id=\"pagination\">\r\n    <div [innerHTML]=\"html\" id=\"paging\"></div>\r\n</div> -->\r\n<div id=\"pagination\">\r\n    <ul class=\"pagination pagination-sm\">\r\n        <li class=\"{{(page == 1) ? 'disabled' : ''}}\"><a routerLink=\"/basic/with-paging/{{limit}}/{{page - 1}}\">&laquo;</a></li>\r\n        <ng-container *ngIf=\"start > 1\">\r\n            <li><a routerLink=\"/basic/with-paging/{{limit}}/1\">1</a></li>';\r\n            <li class=\"disabled\"><span>...</span></li>\r\n        </ng-container>\r\n        <li class=\"{{(page == number) ? 'active' : ''}}\" *ngFor=\"let number of numbers\">\r\n            <a  routerLink=\"/basic/with-paging/{{limit}}/{{number}}\">{{number}}</a>\r\n        </li>\r\n        <ng-container *ngIf=\"end < last\">\r\n            <li class=\"disabled\"><span>...</span></li>\r\n            <li><a routerLink=\"/basic/with-paging/{{limit}}/{{last}}\">{{last}}</a></li>\r\n        </ng-container>\r\n        <li class=\"{{(page == last) ? 'disabled' : ''}}\"><a routerLink=\"/basic/with-paging/{{limit}}/{{page + 1}}\">&raquo;</a></li>\r\n    </ul>\r\n</div>\r\n<!-- <ul>\r\n    <li *ngFor=\"let number of numbers\">{{number}}</li>\r\n</ul> -->\r\n<!-- <a [routerLink]=\"['product-list']\" [queryParams]=\"{ page: 99 }\">Go to Page 99</a> -->"

/***/ }),

/***/ "../../../../../src/app/basic/with-paging.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithPagingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__with_paging_service__ = __webpack_require__("../../../../../src/app/basic/with-paging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_component__ = __webpack_require__("../../../../../src/app/basic/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_component__ = __webpack_require__("../../../../../src/app/basic/confirm.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WithPagingComponent = (function () {
    function WithPagingComponent(withPagingService, router, elRef, renderer, dialogService, sanitizer) {
        this.withPagingService = withPagingService;
        this.router = router;
        this.elRef = elRef;
        this.renderer = renderer;
        this.dialogService = dialogService;
        this.sanitizer = sanitizer;
        this.arrayData = [];
        this.html = '';
        this.sotrang = 0;
        this.page = 0;
        this.last = 0;
        this.start = 0;
        this.end = 0;
        this.list_class = '';
        this.class = '';
        this.limit = 10;
        this.numbers = [];
        this.isLoading = false;
        this.htmlPlayYouTube = '';
        this.dangerousUrl = '';
    }
    WithPagingComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this.numbers);
        this.isLoading = true;
        var navigationExtras = {
            queryParams: { 'page': 1 },
        };
        //this.router.navigate(['/login'],navigationExtras);
        this.withPagingService.getData(0)
            .then(function (temp) {
            //console.log(temp.data);
            _this.arrayData = temp.data;
            _this.sotrang = temp.sotrang;
            _this.page = temp.page;
            // for (var i = 0; i < this.sotrang; i++) {
            //     this.html += `<a class="page-num" href="#">`+i+`</a>`;
            // }
            _this.last = Math.ceil(temp.total / temp.limit);
            _this.start = ((_this.page - 7) > 0) ? _this.page - 7 : 1;
            //alert(this.start)
            _this.end = ((_this.page + 7) < _this.last) ? _this.page + 7 : _this.last;
            _this.numbers = Array(_this.end).fill(_this.start).map(function (x, i) { return i + 1; });
            _this.isLoading = false;
        })
            .catch(function (err) {
            console.log('error ' + err);
        });
    };
    WithPagingComponent.prototype.showMore = function (a) {
        alert('test');
    };
    WithPagingComponent.prototype.youTubePlay = function (data) {
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_5__alert_component__["a" /* AlertComponent */], { title: data.name, message: data.youtube_id });
    };
    WithPagingComponent.prototype.delete = function (data) {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_6__confirm_component__["a" /* ConfirmComponent */], {
            title: 'Thông báo',
            message: 'Bạn có muốn xóa ' + data.name
        })
            .subscribe(function (isConfirmed) {
            //We get dialog result
            if (isConfirmed) {
                _this.withPagingService.deleteData(data.id).then(function (v) {
                    //console.log(v);
                    //this.router.navigate(['/basic/with-paging']);
                    window.location.reload();
                }).catch(function (err) {
                    console.log("Error " + err);
                });
            }
            else {
                //alert('declined');
            }
        });
        //We can close dialog calling disposable.unsubscribe();
        //If dialog was not closed manually close it by timeout
        setTimeout(function () {
            disposable.unsubscribe();
        }, 10000);
    };
    return WithPagingComponent;
}());
WithPagingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paging',
        template: __webpack_require__("../../../../../src/app/basic/with-paging.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_4__with_paging_service__["a" /* WithPagingService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__with_paging_service__["a" /* WithPagingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__with_paging_service__["a" /* WithPagingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["DialogService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _f || Object])
], WithPagingComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=with-paging.component.js.map

/***/ }),

/***/ "../../../../../src/app/basic/with-paging.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithPagingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WithPagingService = (function () {
    function WithPagingService(http) {
        this.http = http;
    }
    WithPagingService.prototype.getData = function (page1) {
        //const url='http://localhost/scoregame/api/v1/gamespotListPagingAngular?page='+page1;
        var url = 'https://scoregame.000webhostapp.com/scoregame/api/v1/gamespotListPagingAngular?page=' + page1;
        //const url ='http://angular4.byethost32.com/scoregame/api/v1/gamespotListPagingAngular?page='+page1;
        //const url='http://localhost/scoregame/api/testApi';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        //headers.append('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        //headers.append('Access-Control-Allow-Headers', "Origin, Content-Type, X-Auth-Token");      
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    WithPagingService.prototype.deleteData = function (id) {
        //const url='http://localhost/scoregame/api/v1/gamespotListDelete/'+id;
        var url = 'https://scoregame.000webhostapp.com/scoregame/api/v1/gamespotListDelete/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        // headers.append('Access-Control-Allow-Origin','*');  
        // headers.append('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        // headers.append('Access-Control-Allow-Headers', "Origin, Content-Type, X-Auth-Token");      
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    return WithPagingService;
}());
WithPagingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WithPagingService);

var _a;
//# sourceMappingURL=with-paging.service.js.map

/***/ }),

/***/ "../../../../../src/app/basic/zero-config.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n           \r\n              \r\n              \r\n                <table datatable class=\"table table-striped table-bordered table-hover table-full-width \">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>ID</th>\r\n                      <th>First name</th>\r\n                      <th>Last name</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>1</td>\r\n                      <td>Foo</td>\r\n                      <td>Bar</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>2</td>\r\n                      <td>Someone</td>\r\n                      <td>Youknow</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>3</td>\r\n                      <td>Iamout</td>\r\n                      <td>Ofinspiration</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>4</td>\r\n                      <td>Yoda</td>\r\n                      <td>Skywalker</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>5</td>\r\n                      <td>Patrick</td>\r\n                      <td>Dupont</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>6</td>\r\n                      <td>Barack</td>\r\n                      <td>Obama</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>7</td>\r\n                      <td>François</td>\r\n                      <td>Holland</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>8</td>\r\n                      <td>Michel</td>\r\n                      <td>Popo</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>9</td>\r\n                      <td>Chuck</td>\r\n                      <td>Norris</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>10</td>\r\n                      <td>Simon</td>\r\n                      <td>Robin</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>11</td>\r\n                      <td>Louis</td>\r\n                      <td>Lin</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>12</td>\r\n                      <td>Zelda</td>\r\n                      <td>Link</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n             <h2>Upload Image</h2>\r\n             <div class=\"text-center\">\r\n               <label class=\"btn btn-default\">\r\n                 Upload Image<input type=\"file\" hidden (change)=\"testUploadImg($event);\" />\r\n                </label>\r\n                <div><input type=\"text\" name=\"testInput\" [(ngModel)]=\"testInput\"/></div>\r\n             </div>\r\n\r\n             <!-- <ngbd-modal-basic></ngbd-modal-basic> -->\r\n             <button class=\"btn btn-default\" (click)=showConfirm()>Show confirm</button>\r\n             <button class=\"btn btn-default\" (click)=showAlert()>Show alert</button>\r\n             \r\n             \r\n           "

/***/ }),

/***/ "../../../../../src/app/basic/zero-config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZeroConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirm_component__ = __webpack_require__("../../../../../src/app/basic/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_component__ = __webpack_require__("../../../../../src/app/basic/alert.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ZeroConfigComponent = (function () {
    function ZeroConfigComponent(http, dialogService) {
        this.http = http;
        this.dialogService = dialogService;
        this.testInput = "";
    }
    ZeroConfigComponent.prototype.testUploadImg = function (event) {
        alert(this.testInput);
        var elem = event.target;
        //console.log(event.target.files);
        if (elem.files.length > 0) {
            console.log(elem.files[0]);
            var formData = new FormData();
            formData.append('fileUploadDemo', elem.files[0]);
            var url = 'http://localhost/scoregame/api/v1/uploadImageDemo';
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            //headers.append('Access-Control-Allow-Origin','*');  
            //headers.append('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
            //headers.append('Access-Control-Allow-Headers', "Origin, Content-Type, X-Auth-Token");      
            var body = JSON.stringify({ name: 'hải đẹp trai' });
            return this.http.post(url, formData)
                .toPromise()
                .then(function (res) { return res.text(); })
                .then(function (resJson) { return console.log(resJson); });
        }
    };
    ZeroConfigComponent.prototype.showConfirm = function () {
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_4__confirm_component__["a" /* ConfirmComponent */], {
            title: 'Confirm title',
            message: 'Confirm message'
        })
            .subscribe(function (isConfirmed) {
            //We get dialog result
            if (isConfirmed) {
                alert('accepted');
            }
            else {
                alert('declined');
            }
        });
        //We can close dialog calling disposable.unsubscribe();
        //If dialog was not closed manually close it by timeout
        setTimeout(function () {
            disposable.unsubscribe();
        }, 10000);
    };
    ZeroConfigComponent.prototype.showAlert = function () {
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_5__alert_component__["a" /* AlertComponent */], { title: 'Alert title!', message: 'Alert message!!!' });
    };
    return ZeroConfigComponent;
}());
ZeroConfigComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-zero-config',
        template: __webpack_require__("../../../../../src/app/basic/zero-config.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"]) === "function" && _b || Object])
], ZeroConfigComponent);

var _a, _b;
//# sourceMappingURL=zero-config.component.js.map

/***/ }),

/***/ "../../../../../src/app/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardComponent = (function () {
    function CardComponent() {
    }
    return CardComponent;
}());
CardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card',
        template: "\n        <div class=\"card\">\n            <div class=\"header\">\n                <ng-content select=\".card-header\"></ng-content>\n            </div>\n            <div class=\"body\">\n                <ng-content select=\".card-body\"></ng-content>\n            </div>\n        </div>\n    ",
        styles: ["\n        .card {\n            padding: 5px;\n            margin: 5px;\n            background: #fff;\n            border-radius: 2px;\n            display: inline-block;\n            width: 300px;\n            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n        }\n    "]
    })
], CardComponent);

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChildComponent = (function () {
    function ChildComponent() {
        this.value = 0;
    }
    return ChildComponent;
}());
ChildComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-child',
        template: "<h3>{{value}}</h3>\n  "
    })
], ChildComponent);

//# sourceMappingURL=child.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact-detail/contact-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-detail/contact-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-detail works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/contact-detail/contact-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactDetailComponent = (function () {
    function ContactDetailComponent(route) {
        this.route = route;
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        this.route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            alert(id);
        });
    };
    return ContactDetailComponent;
}());
ContactDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact-detail',
        template: __webpack_require__("../../../../../src/app/contact-detail/contact-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact-detail/contact-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ContactDetailComponent);

var _a;
//# sourceMappingURL=contact-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<ul *ngFor=\"let contact of contacts\">\n  <li>\n      <a routerLink=\"/detail/{{contact.id}}\">{{contact.name}}</a>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = (function () {
    function ContactsComponent() {
        this.contacts = [
            { id: 1, name: 'Teo', phoneNumber: '0123' },
            { id: 2, name: 'Ti', phoneNumber: '0456' },
            { id: 3, name: 'Tun', phoneNumber: '0789' },
        ];
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contacts',
        template: __webpack_require__("../../../../../src/app/contacts/contacts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contacts/contacts.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactsComponent);

//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ "../../../../../src/app/ip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ip_service__ = __webpack_require__("../../../../../src/app/ip.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IpComponent = (function () {
    function IpComponent(ipService) {
        this.ipService = ipService;
        this.ip = '';
    }
    IpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ipService.getIp()
            .then(function (ip) { return _this.ip = ip; })
            .catch(function (err) { return console.log(err); });
    };
    return IpComponent;
}());
IpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ip',
        template: '<h3>{{ip}}</h3>',
        providers: [__WEBPACK_IMPORTED_MODULE_1__ip_service__["a" /* IpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ip_service__["a" /* IpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ip_service__["a" /* IpService */]) === "function" && _a || Object])
], IpComponent);

var _a;
//# sourceMappingURL=ip.component.js.map

/***/ }),

/***/ "../../../../../src/app/ip.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IpService = (function () {
    function IpService(http) {
        this.http = http;
    }
    IpService.prototype.getIp = function () {
        return this.http.get('http://ip.jsontest.com/')
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson.ip; });
    };
    return IpService;
}());
IpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], IpService);

var _a;
//# sourceMappingURL=ip.service.js.map

/***/ }),

/***/ "../../../../../src/app/list-person/list-person.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list-person/list-person.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let person of arrayPerson\">\n  <app-person \n    [name]=\"person.name\" [age]=\"person.age\"\n    (removePerson)=\"removePersonByName($event)\"\n  ></app-person>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/list-person/list-person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListPersonComponent = (function () {
    function ListPersonComponent() {
        this.arrayPerson = [
            { name: 'hải', age: 29 },
            { name: 'vinh', age: 25 },
            { name: 'Duy', age: 28 }
        ];
    }
    ListPersonComponent.prototype.ngOnInit = function () {
    };
    ListPersonComponent.prototype.removePersonByName = function (name) {
        var index = this.arrayPerson.findIndex(function (e) { return e.name == name; });
        this.arrayPerson.splice(index, 1);
    };
    return ListPersonComponent;
}());
ListPersonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list-person',
        template: __webpack_require__("../../../../../src/app/list-person/list-person.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list-person/list-person.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListPersonComponent);

//# sourceMappingURL=list-person.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/parent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__child_component__ = __webpack_require__("../../../../../src/app/child.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParentComponent = (function () {
    function ParentComponent() {
    }
    ParentComponent.prototype.addChild = function () {
        this.myChild.value++;
    };
    return ParentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__child_component__["a" /* ChildComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__child_component__["a" /* ChildComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__child_component__["a" /* ChildComponent */]) === "function" && _a || Object)
], ParentComponent.prototype, "myChild", void 0);
ParentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-parent',
        template: "\n        <button (click)=\"addChild();\">Add for Child </button>\n        <app-child></app-child>\n    "
    })
], ParentComponent);

var _a;
//# sourceMappingURL=parent.component.js.map

/***/ }),

/***/ "../../../../../src/app/person/person.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/person/person.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Tên : {{name}}</h3>\n<h3>Tuổi : {{age}}</h3>\n<button (click)=\"removeByName();\">Xóa</button>\n"

/***/ }),

/***/ "../../../../../src/app/person/person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonComponent = (function () {
    function PersonComponent() {
        this.removePerson = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    PersonComponent.prototype.removeByName = function () {
        this.removePerson.emit(this.name);
    };
    return PersonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PersonComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PersonComponent.prototype, "age", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PersonComponent.prototype, "removePerson", void 0);
PersonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-person',
        template: __webpack_require__("../../../../../src/app/person/person.component.html"),
        styles: [__webpack_require__("../../../../../src/app/person/person.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PersonComponent);

//# sourceMappingURL=person.component.js.map

/***/ }),

/***/ "../../../../../src/app/round.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (value, isUpper) {
        if (isUpper) {
            return Math.ceil(value);
        }
        return Math.floor(value);
    };
    return RoundPipe;
}());
RoundPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'roundNum' })
], RoundPipe);

//# sourceMappingURL=round.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = (function () {
    function SignInComponent(http) {
        this.http = http;
        this.email = '';
        this.password = '';
    }
    SignInComponent.prototype.onSubmit = function (formSignIn) {
        console.log(formSignIn);
    };
    SignInComponent.prototype.postToScoreGame = function () {
        var url2 = 'http://localhost/scoregame/api/v1/gamespotListAdd/add';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('Access-Control-Allow-Origin','*');  
        //headers.append('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        //headers.append('Access-Control-Allow-Headers', "Origin, Content-Type, X-Auth-Token");      
        var body = JSON.stringify({ name: 'hải đẹp trai' });
        return this.http.post(url2, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return console.log(resJson); });
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sing-in',
        template: "\n        <form (submit)=\"onSubmit(formSignIn);\" #formSignIn=\"ngForm\">\n            <input \n            placeholder=\"email\" \n            ngModel \n            #txtEmail=\"ngModel\"\n            name=\"email\" \n            required\n            email\n            />\n            <p *ngIf=\"txtEmail.touched && txtEmail.errors?.required\">\n                Email is required\n            </p>\n            <p *ngIf=\"txtEmail.touched && txtEmail.errors?.email\">\n                Email is not valid\n            </p>\n            <br/><br/>\n            <input type=\"password\" placeholder=\"password\" ngModel name=\"password\"\n            #txtPassword=\"ngModel\"\n            minlength=\"6\"\n            pattern=\"[a-z]*\"\n            />\n            <p *ngIf=\"txtPassword.touched && txtPassword.errors?.minlength!=null\">\n                Password has 6 symbol\n            </p>\n            <p *ngIf=\"txtPassword.touched && txtPassword.errors?.pattern!=null\">\n                Password has a - z\n            </p>\n            <br/><br/>\n            <div ngModelGroup=\"subjects\">\n                <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"nodejs\"/>Nodejs</label>\n                <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"angularjs\"/>Angularjs</label>\n                <label><input type=\"checkbox\" [ngModel]=\"false\"  name=\"php\"/>Php</label>\n            </div>\n            <br/><br/>\n            <button [disabled]=\"formSignIn.invalid\">Login </button>\n            <button (click)=\"postToScoreGame();\">Post</button>\n        </form>\n        <p>{{txtEmail.errors | json }}</p>\n        <p>{{txtPassword.errors | json }}</p>\n        <p>{{formSignIn.value | json }}</p>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SignInComponent);

var _a;
//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/struct/struct.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lang{\r\n    margin: 5px;\r\n    padding:5px;\r\n    background-color: #DAD5D5;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/struct/struct.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p *ngIf=\"isToggle\">\n  struct works!\n</p>\n<button (click)=\"isToggle=!isToggle\">Click</button>\n<ul>\n  <li *ngFor=\"let subject of arrSubjects\">{{\"subject \" +subject}}</li>\n</ul> -->\n<div *ngIf=\"isShowForm\">\n  <input placeholder=\"english\" [(ngModel)]=\"txtEnglish\" /><br/>\n  <input placeholder=\"viet nam\" [(ngModel)]=\"txtVietNam\" />\n  <button (click)=\"addLang()\">Add</button>\n</div>\n<button (click)=\"isShowForm=true\" *ngIf=\"!isShowForm\">Add</button><br/>\n<select [(ngModel)]=\"filterStatus\">\n  <option value=\"XEM_TAT_CA\">Xem tất cả</option>\n  <option value=\"XEM_DA_NHO\">Xem đã nhớ</option>\n  <option value=\"XEM_CHUA_NHO\">Xem chưa nhớ</option>\n</select>\n<div *ngFor=\"let lang of arrLang\" >\n  <div class=\"lang\" *ngIf=\"getShowStatus(lang.memorized)\">\n    <h4 [ngStyle]=\"{color:lang.memorized?'green':'red'}\">{{lang.en}}</h4>\n    <h4>{{lang.vn}}</h4>\n    <button (click)=\"removeLang(lang.id);\">Remove</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/struct/struct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StructComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StructComponent = (function () {
    function StructComponent() {
        this.txtEnglish = '';
        this.txtVietNam = '';
        this.isShowForm = false;
        this.filterStatus = 'XEM_TAT_CA';
        this.arrLang = [
            { id: 1, en: 'action', vn: 'hành động', memorized: true },
            { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
            { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
            { id: 4, en: 'active', vn: 'chủ động', memorized: true },
            { id: 5, en: 'bath', vn: 'tắm', memorized: false },
            { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
        ];
        this.isToggle = true;
        this.arrSubjects = ['php', 'nodejs', 'reactjs'];
    }
    StructComponent.prototype.ngOnInit = function () {
    };
    StructComponent.prototype.addLang = function () {
        this.arrLang.unshift({
            id: this.arrLang.length + 1,
            en: this.txtEnglish,
            vn: this.txtVietNam,
            memorized: false
        });
        this.txtEnglish = '';
        this.txtVietNam = '';
        this.isShowForm = false;
    };
    StructComponent.prototype.removeLang = function (id) {
        var index = this.arrLang.findIndex(function (word) { return word.id == id; });
        this.arrLang.splice(index, 1);
    };
    StructComponent.prototype.getShowStatus = function (mem) {
        var dkXemTatCa = this.filterStatus == 'XEM_TAT_CA';
        var dkXemDaNho = this.filterStatus == 'XEM_DA_NHO' && mem;
        var dkXemChuaNho = this.filterStatus == 'XEM_CHUA_NHO' && !mem;
        return dkXemTatCa || dkXemDaNho || dkXemChuaNho;
    };
    return StructComponent;
}());
StructComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-struct',
        template: __webpack_require__("../../../../../src/app/struct/struct.component.html"),
        styles: [__webpack_require__("../../../../../src/app/struct/struct.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StructComponent);

//# sourceMappingURL=struct.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-form/user-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cirle{\r\n    width:50px;\r\n    height:50px;\r\n    border-radius: 25px;\r\n    background-color: blue;\r\n}\r\n.square{\r\n    width:50px;\r\n    height:50px;\r\n    border-radius: 2px;\r\n    background-color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-form/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <input id=\"test\" type=\"text\" placeholder=\"Enter your name\" (keyup)=\"showEvent($event)\" /> -->\n<input id=\"test\" type=\"text\" placeholder=\"Enter your name\" [(ngModel)]=\"name\" #txtUserName/>\n<p [style.color]=\"'red'\">Your name is : {{name}}</p>\n<p>Your name reference : {{txtUserName.value|json}}</p>\n<div [class]=\"'cirle'\"></div>\n<div [class.square]=\"'true'\"></div>\n<div [ngStyle]=\"style\">test</div>\n<div [ngClass]=\"{square:true}\"></div>"

/***/ }),

/***/ "../../../../../src/app/user-form/user-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserFormComponent = (function () {
    function UserFormComponent() {
        this.name = '';
        this.style = { color: 'blue' };
    }
    UserFormComponent.prototype.ngOnInit = function () {
    };
    UserFormComponent.prototype.showEvent = function (event) {
        this.name = event.target.value;
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-form',
        template: __webpack_require__("../../../../../src/app/user-form/user-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-form/user-form.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserFormComponent);

//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{getMessage()}}</h3>\n<input placeholder=\"Enter your city name\" [(ngModel)]=\"txtCityName\" />\n<br/><br/>\n<button (click)=\"getWeather();\">Get weather</button>\n<ul>\n    <li *ngFor=\"let data of arrayData\">{{ data.name}}</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather_service__ = __webpack_require__("../../../../../src/app/weather/weather.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = (function () {
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
        this.txtCityName = '';
        this.cityName = '';
        this.temp = '';
        this.isLoading = false;
        this.arrayData = '';
    }
    WeatherComponent.prototype.ngOnInit = function () {
    };
    WeatherComponent.prototype.getWeather = function () {
        var _this = this;
        this.isLoading = true;
        this.weatherService.getTemp(this.txtCityName)
            .then(function (temp) {
            // this.cityName = this.txtCityName;
            // this.temp = temp;
            // this.isLoading = false;
            console.log(temp.scoreGame);
            _this.arrayData = temp.scoreGame;
        })
            .catch(function (err) {
            console.log('error ' + err);
            alert('Cannot find your city');
            _this.isLoading = false;
            _this.cityName = '';
            _this.txtCityName = '';
        });
    };
    WeatherComponent.prototype.getMessage = function () {
        if (this.isLoading) {
            return 'Loading ....';
        }
        return this.cityName == '' ? 'Enter your city name' : (this.cityName + ' is now ' + this.temp);
    };
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-weather',
        template: __webpack_require__("../../../../../src/app/weather/weather.component.html"),
        styles: [__webpack_require__("../../../../../src/app/weather/weather.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */]) === "function" && _a || Object])
], WeatherComponent);

var _a;
//# sourceMappingURL=weather.component.js.map

/***/ }),

/***/ "../../../../../src/app/weather/weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getTemp = function (cityName) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?appid=9a794a8b9651a4bee8f610d7fd3b4ce1&units=metric&q=' + cityName;
        var url2 = 'http://localhost/scoregame/api/v1/gamespotList';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        headers.append('Access-Control-Allow-Headers', "Origin, Content-Type, X-Auth-Token");
        return this.http.get(url2, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    return WeatherService;
}());
WeatherService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WeatherService);

var _a;
//# sourceMappingURL=weather.service.js.map

/***/ }),

/***/ "../../../../../src/app/word/word.component.1.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/word/word.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3{\r\n    color:blue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/word/word.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h3 [hidden]=\"forgot\">{{vn}}</h3>\r\n<img [src]=\"imageUrl\"/>\r\n<button (click)=\"toggleForgot()\">toggleForgot</button> -->\r\n<app-user-form></app-user-form>"

/***/ }),

/***/ "../../../../../src/app/word/word.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WordComponent = (function () {
    function WordComponent() {
        this.en = 'Hello';
        this.vn = 'Xin chào';
        this.imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
        this.forgot = true;
    }
    WordComponent.prototype.toggleForgot = function () {
        this.forgot = !this.forgot;
    };
    return WordComponent;
}());
WordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        //template:'<h3>Hello hai dep trai vo đối</h3>',
        template: __webpack_require__("../../../../../src/app/word/word.component.html"),
        selector: 'app-word',
        /* styles: [`
                h3{
                    color:red;
                }
        `] */
        styles: [__webpack_require__("../../../../../src/app/word/word.component.css"), __webpack_require__("../../../../../src/app/word/word.component.1.css")]
    })
], WordComponent);

//# sourceMappingURL=word.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map