(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-log-in-log-in-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in/log-in.page.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in/log-in.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLogInLogInPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-avatar slot=\"start\">\n            <img src=\"assets/icon/iconlogo.png\" alt=\"Ionic logo\">\n        </ion-avatar>\n\n        <ion-title>Login</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<div>\n    <img src=\"assets/img/logo.png\" alt=\"Ionic logo\">\n</div>\n<ion-content>\n\n    <form #loginForm=\"ngForm\" novalidate>\n        <ion-card>\n            <ion-list>\n                <ion-item>\n                    <ion-label position=\"floating\" color=\"primary\" type=\"text\">Username</ion-label>\n                    <ion-input name=\"username\" [(ngModel)]=\"cliente.correo\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" required>\n                    </ion-input>\n                </ion-item>\n\n\n\n                <ion-item>\n                    <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\n                    <ion-input name=\"password\" [(ngModel)]=\"cliente.contrasena\" type=\"password\" required>\n                    </ion-input>\n                </ion-item>\n\n\n            </ion-list>\n        </ion-card>\n        <ion-card>\n            <ion-row>\n                <ion-col>\n                    <ion-button expand=\"block\" color=\"warning\" (click)=\"googleLogin()\">\n                        <ion-icon name=\"logo-google\"></ion-icon>oogle\n                    </ion-button>\n                </ion-col>\n\n                <ion-col>\n                    <ion-button (click)=\" loInCliente() \" type=\"submit \" expand=\"block \">Login</ion-button>\n                </ion-col>\n                <ion-col>\n                    <ion-button (click)=\"registroCliente() \" color=\"success\" expand=\"block \">Registrate\n                        <ion-icon name=\"pencil-outline\"></ion-icon>\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n\n        </ion-card>\n    </form>";
      /***/
    },

    /***/
    "./src/app/components/log-in/log-in-routing.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/components/log-in/log-in-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: LogInPageRoutingModule */

    /***/
    function srcAppComponentsLogInLogInRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogInPageRoutingModule", function () {
        return LogInPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _log_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./log-in.page */
      "./src/app/components/log-in/log-in.page.ts");

      var routes = [{
        path: '',
        component: _log_in_page__WEBPACK_IMPORTED_MODULE_3__["LogInPage"]
      }];

      var LogInPageRoutingModule = function LogInPageRoutingModule() {
        _classCallCheck(this, LogInPageRoutingModule);
      };

      LogInPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogInPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/components/log-in/log-in.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/components/log-in/log-in.module.ts ***!
      \****************************************************/

    /*! exports provided: LogInPageModule */

    /***/
    function srcAppComponentsLogInLogInModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogInPageModule", function () {
        return LogInPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _log_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./log-in-routing.module */
      "./src/app/components/log-in/log-in-routing.module.ts");
      /* harmony import */


      var _log_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./log-in.page */
      "./src/app/components/log-in/log-in.page.ts");

      var LogInPageModule = function LogInPageModule() {
        _classCallCheck(this, LogInPageModule);
      };

      LogInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _log_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogInPageRoutingModule"]],
        declarations: [_log_in_page__WEBPACK_IMPORTED_MODULE_6__["LogInPage"]]
      })], LogInPageModule);
      /***/
    },

    /***/
    "./src/app/components/log-in/log-in.page.scss":
    /*!****************************************************!*\
      !*** ./src/app/components/log-in/log-in.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLogInLogInPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\n.facebook {\n  background: #4267B2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2ctaW4vbG9nLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZy1pbi9sb2ctaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWxvZ28ge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1sb2dvIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5mYWNlYm9vayB7XG4gICAgYmFja2dyb3VuZDogIzQyNjdCMjtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/log-in/log-in.page.ts":
    /*!**************************************************!*\
      !*** ./src/app/components/log-in/log-in.page.ts ***!
      \**************************************************/

    /*! exports provided: LogInPage */

    /***/
    function srcAppComponentsLogInLogInPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogInPage", function () {
        return LogInPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _model_cliente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../model/cliente */
      "./src/app/model/cliente.ts");
      /* harmony import */


      var _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/cliente.service */
      "./src/app/services/cliente.service.ts");
      /* harmony import */


      var _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/notificaciones.service */
      "./src/app/services/notificaciones.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @codetrix-studio/capacitor-google-auth */
      "./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var LogInPage = /*#__PURE__*/function () {
        function LogInPage(loadingCtrl, route, router, clienteService, notificacioneservice, aSvc) {
          _classCallCheck(this, LogInPage);

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

        _createClass(LogInPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "registroCliente",
          value: function registroCliente() {
            this.router.navigate(['/registro-cliente']);
          }
        }, {
          key: "loInCliente",
          value: function loInCliente() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading, codigo, url;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Porfavor Espere..'
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      console.log("correo ", this.cliente.correo, "contrasena ", this.cliente.contrasena);
                      _context.next = 8;
                      return this.clienteService.logInClient(this.cliente.correo, this.cliente.contrasena).then(function (data) {
                        return _this.coincidencias = JSON.parse(JSON.stringify(data));
                      });

                    case 8:
                      codigo = this.coincidencias['uid'];

                      if (codigo != null) {
                        url = '/view-cliente/' + codigo;
                        this.router.navigate([url]);
                        loading.dismiss();
                      } else {
                        loading.dismiss();
                        this.notificacioneservice.notificacionToast("No pudimos encontrar tu cuenta..!  :(");
                        this.router.navigate(['/log-in']);
                      }

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "googleLogin",
          value: function googleLogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var googleUser, givenName, familyName, email, id, correos, password, codigo, url;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].GoogleAuth.signIn();

                    case 2:
                      googleUser = _context2.sent;
                      givenName = 'given_name';
                      familyName = 'family_name';
                      email = 'email';
                      id = 'id';
                      correos = googleUser['email'];
                      password = googleUser['id'];
                      _context2.next = 11;
                      return this.clienteService.logInClient(correos, password).then(function (data) {
                        return _this2.coincidencias = JSON.parse(JSON.stringify(data));
                      });

                    case 11:
                      codigo = this.coincidencias['uid'];

                      if (codigo != null) {
                        localStorage.setItem("uid", codigo);
                        url = '/view-cliente/' + codigo;
                        this.router.navigate([url]);
                      } else {
                        this.notificacioneservice.notificacionToast("No pudimos encontrar tu cuenta..!  :(");
                        this.router.navigate(['/log-in']);
                      } // this.aSvc.login(this.userInfo.email);  


                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return LogInPage;
      }();

      LogInPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"]
        }, {
          type: _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_4__["NotificacionesService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }];
      };

      LogInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-in',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./log-in.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in/log-in.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./log-in.page.scss */
        "./src/app/components/log-in/log-in.page.scss"))["default"]]
      })], LogInPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-log-in-log-in-module-es5.js.map