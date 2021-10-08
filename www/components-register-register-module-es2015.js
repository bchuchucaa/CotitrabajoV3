(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>Cotitrabajo EC</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    \n    <div class=\"register\">\n        <ion-card>\n            <ion-card-header>\n                <ion-card-subtitle>REGISTRO</ion-card-subtitle>\n                <ion-card-title>CLIENTE</ion-card-title>\n            </ion-card-header>\n            <img src=\"assets/img/register.gif\" alt=\"Ionic logo\">\n\n            <form>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">Ingresa un email</ion-label>\n                    <ion-input type=\"text\" #email required></ion-input>\n                </ion-item>\n                <ion-item lines=\"full\">\n                    <ion-label position=\"floating\">Ingresa una contrasena</ion-label>\n                    <ion-input type=\"password\" #password required></ion-input>\n                </ion-item>\n                <ion-row>\n                    <ion-col>\n                        <ion-button type=\"submit\" (click)=\"registerClient(email, password)\" expand=\"block\">Registrar</ion-button>\n                    </ion-col>\n                    <ion-col>\n                    <ion-button type=\"submit\" color=\"warning\" (click)=\"googleSignup()\" expand=\"block\">Registro Google</ion-button>\n                </ion-col>\n                </ion-row>\n            </form>\n            <ion-row>\n                <ion-col>\n                    <p>\n                        <a routerLink=\"/log-in\">Regresar <ion-icon name=\"arrow-back\"></ion-icon> </a>\n                    </p>\n                </ion-col>\n            </ion-row>\n        </ion-card>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/components/register/register-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/register/register-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/components/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/components/register/register.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/register/register.module.ts ***!
  \********************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/components/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/components/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/components/register/register.page.scss":
/*!********************************************************!*\
  !*** ./src/app/components/register/register.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".register {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\nion-content {\n  --ion-background-color: #251e3e;\n}\n\nion-card {\n  --ion-background-color: #ffffff;\n  padding: 10px;\n}\n\na {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMyNTFlM2U7XG59XG5cbmlvbi1jYXJkIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5he1xuICAgIGZsb2F0OiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/register/register.page.ts":
/*!******************************************************!*\
  !*** ./src/app/components/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ "./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var src_app_model_cliente__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/cliente */ "./src/app/model/cliente.ts");
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/cliente.service */ "./src/app/services/cliente.service.ts");








let RegisterPage = class RegisterPage {
    constructor(authSvc, router, clienteService) {
        this.authSvc = authSvc;
        this.router = router;
        this.clienteService = clienteService;
        this.cliente = new src_app_model_cliente__WEBPACK_IMPORTED_MODULE_6__["Cliente"]();
    }
    ngOnInit() {
    }
    onRegister(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield this.authSvc.register(email.value, password.value);
                if (user) {
                    //Check email verified
                    console.log('User', user);
                    const isVerified = this.authSvc.isEmailVerified(user);
                    this.redirectUser(isVerified, user);
                    //Todo: CheckEmail
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    redirectUser(isVerified, user) {
        /// redirect -> view client
        ///ELSE verified your email
        if (isVerified) {
            let navigationExtras = {
                queryParams: {
                    uid: user.uid,
                }
            };
            this.router.navigate(['/view-cliente'], navigationExtras);
        }
        else {
            this.router.navigate(['verify-email']);
        }
    }
    googleSignup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const googleUser = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].GoogleAuth.signIn();
            console.log('my user: ', googleUser);
            this.cliente.nombres = googleUser['givenName'];
            this.cliente.apellidos = googleUser['familyName'];
            this.cliente.correo = googleUser['email'];
            this.cliente.contrasena = googleUser['id'];
            this.cliente.idgoogle = googleUser['id'];
            this.clienteService.saveCliente(this.cliente);
            this.router.navigate(['log-in']);
            // this.aSvc.login(this.userInfo.email);
        });
    }
    registerClient(email, passowrd) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cliente.correo = email.value;
            this.cliente.contrasena = passowrd.value;
            this.clienteService.saveCliente(this.cliente);
            this.router.navigate(['log-in']);
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_7__["ClienteService"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/components/register/register.page.scss")).default]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=components-register-register-module-es2015.js.map