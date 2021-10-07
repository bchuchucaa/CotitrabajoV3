(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-log-in-log-in-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in/log-in.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in/log-in.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\n\n\n\n\n\n\n\n    <ion-card class=\"formulario\">\n        <header>CotitrabajoEC</header>\n\n        <img src=\"assets/img/login.gif\" alt=\"Ionic logo\">\n\n        <ion-list>\n            <ion-item>\n                <ion-label position=\"floating\" color=\"primary\" type=\"text\">Username</ion-label>\n                <ion-input name=\"username\" [(ngModel)]=\"cliente.correo\" type=\"text\" spellcheck=\"false\"\n                    autocapitalize=\"off\" required>\n                </ion-input>\n            </ion-item>\n\n\n\n            <ion-item>\n                <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\n                <ion-input name=\"password\" [(ngModel)]=\"cliente.contrasena\" type=\"password\" required>\n                </ion-input>\n            </ion-item>\n\n\n        </ion-list>\n\n        <ion-row>\n            <ion-col>\n                <ion-button expand=\"block\" color=\"danger\" (click)=\"googleLogin()\">\n                    <ion-icon name=\"logo-google\"></ion-icon>\n                </ion-button>\n            </ion-col>\n\n            <ion-col>\n                <ion-button (click)=\" loInCliente() \" type=\"submit \" expand=\"block \">Login</ion-button>\n            </ion-col>\n            <ion-col>\n                <ion-button (click)=\"registroCliente() \" color=\"success\" expand=\"block \">Registrate\n                    <ion-icon name=\"pencil-outline\"></ion-icon>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n        <a class=\"redirect\" routerLink=\"/log-in-artesano\">Eres artesano..?Registrate aqui </a>\n    </ion-card>\n\n\n\n</div>");

/***/ }),

/***/ "./src/app/components/log-in/log-in-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/log-in/log-in-routing.module.ts ***!
  \************************************************************/
/*! exports provided: LogInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInPageRoutingModule", function() { return LogInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _log_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-in.page */ "./src/app/components/log-in/log-in.page.ts");




const routes = [
    {
        path: '',
        component: _log_in_page__WEBPACK_IMPORTED_MODULE_3__["LogInPage"]
    }
];
let LogInPageRoutingModule = class LogInPageRoutingModule {
};
LogInPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogInPageRoutingModule);



/***/ }),

/***/ "./src/app/components/log-in/log-in.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/log-in/log-in.module.ts ***!
  \****************************************************/
/*! exports provided: LogInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInPageModule", function() { return LogInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _log_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-in-routing.module */ "./src/app/components/log-in/log-in-routing.module.ts");
/* harmony import */ var _log_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log-in.page */ "./src/app/components/log-in/log-in.page.ts");







let LogInPageModule = class LogInPageModule {
};
LogInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _log_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogInPageRoutingModule"]
        ],
        declarations: [_log_in_page__WEBPACK_IMPORTED_MODULE_6__["LogInPage"]]
    })
], LogInPageModule);



/***/ }),

/***/ "./src/app/components/log-in/log-in.page.scss":
/*!****************************************************!*\
  !*** ./src/app/components/log-in/log-in.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\ndiv {\n  background-image: url('backgroundLogin.jpeg');\n  margin: auto;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-card {\n  --ion-background-color: #ffffff;\n  width: 80%;\n  padding: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2ctaW4vbG9nLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFLQTtFQUNJLDZDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFBYyxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7QUFDdEQ7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZy1pbi9sb2ctaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWxvZ28ge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG5cbi5sb2dpbi1sb2dvIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cblxuXG5kaXYge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kTG9naW4uanBlZ1wiKTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBcbiAgICBcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/components/log-in/log-in.page.ts":
/*!**************************************************!*\
  !*** ./src/app/components/log-in/log-in.page.ts ***!
  \**************************************************/
/*! exports provided: LogInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInPage", function() { return LogInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_cliente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/cliente */ "./src/app/model/cliente.ts");
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cliente.service */ "./src/app/services/cliente.service.ts");
/* harmony import */ var _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/notificaciones.service */ "./src/app/services/notificaciones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ "./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");










let LogInPage = class LogInPage {
    constructor(loadingCtrl, route, router, clienteService, notificacioneservice, aSvc) {
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.router = router;
        this.clienteService = clienteService;
        this.notificacioneservice = notificacioneservice;
        this.aSvc = aSvc;
        this.cliente = new _model_cliente__WEBPACK_IMPORTED_MODULE_2__["Cliente"]();
        this.userInfo = null;
        this.email = null;
        this.givenname = null;
        this.familyname = null;
        localStorage.setItem("uid", "");
    }
    ngOnInit() {
    }
    registroCliente() {
        this.router.navigate(['register']);
    }
    loInCliente() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Porfavor Espere..'
            });
            yield loading.present();
            console.log("correo ", this.cliente.correo, "contrasena ", this.cliente.contrasena);
            yield this.clienteService.logInClient(this.cliente.correo, this.cliente.contrasena).then(data => this.coincidencias = (JSON.parse(JSON.stringify(data))));
            let codigo = this.coincidencias['uid'];
            if (codigo != null) {
                const url = '/view-cliente/' + codigo;
                this.router.navigate([url]);
                loading.dismiss();
            }
            else {
                loading.dismiss();
                this.notificacioneservice.notificacionToast("No pudimos encontrar tu cuenta..!  :(");
                this.router.navigate(['/log-in']);
            }
        });
    }
    googleLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const googleUser = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].GoogleAuth.signIn();
            const givenName = 'given_name';
            const familyName = 'family_name';
            const email = 'email';
            const id = 'id';
            const correos = googleUser['email'];
            const password = googleUser['id'];
            yield this.clienteService.logInClient(correos, password).then(data => this.coincidencias = (JSON.parse(JSON.stringify(data))));
            let codigo = this.coincidencias['uid'];
            if (codigo != null) {
                localStorage.setItem("uid", codigo);
                const url = '/view-cliente/' + codigo;
                this.router.navigate([url]);
            }
            else {
                this.notificacioneservice.notificacionToast("No pudimos encontrar tu cuenta..!  :(");
                this.router.navigate(['/log-in']);
            }
            // this.aSvc.login(this.userInfo.email);  
        });
    }
};
LogInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"] },
    { type: _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_4__["NotificacionesService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
LogInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-in',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./log-in.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in/log-in.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./log-in.page.scss */ "./src/app/components/log-in/log-in.page.scss")).default]
    })
], LogInPage);



/***/ })

}]);
//# sourceMappingURL=components-log-in-log-in-module-es2015.js.map