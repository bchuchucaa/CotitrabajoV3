(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-log-in-artesano-log-in-artesano-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in-artesano/log-in-artesano.page.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in-artesano/log-in-artesano.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLogInArtesanoLogInArtesanoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Login Artesano</ion-title>\n    </ion-toolbar>\n</ion-header>\n<div>\n    <ion-card>\n        <header>CotitrabajoEC</header>\n        <img src=\"assets/img/loginArtesano.gif\" alt=\"LogoLoginArt\" />\n        <form #loginForm=\"ngForm\" novalidate>\n            \n            <ion-list>\n                <ion-item>\n                    <ion-label position=\"stacked\" color=\"primary\">Correo</ion-label>\n                    <ion-input name=\"mail\" [(ngModel)]=\"artesano.correo\" type=\"text\" spellcheck=\"false\"\n                        autocapitalize=\"off\" required>\n                    </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" color=\"primary\">Password</ion-label>\n                    <ion-input name=\"password\" [(ngModel)]=\"artesano.contrasenia\" type=\"password\" required>\n                    </ion-input>\n                </ion-item>\n\n\n            </ion-list>\n\n            <ion-row>\n                <ion-col>\n                    <ion-button (click)=\"loginArtesano()\" type=\"submit\" expand=\"block\">Login</ion-button>\n                </ion-col>\n                <ion-col>\n                    <ion-button (click)=\"loginArtesanoByGoogle()\" type=\"submit\" expand=\"block\" color=\"danger\">\n                        <ion-icon name=\"logo-google\"></ion-icon>\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n            <a href=\"/registro-artesano\">Registrate como artesano.</a>\n        </form>\n    </ion-card>\n\n</div>";
      /***/
    },

    /***/
    "./src/app/components/log-in-artesano/log-in-artesano-routing.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/components/log-in-artesano/log-in-artesano-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: LogInArtesanoPageRoutingModule */

    /***/
    function srcAppComponentsLogInArtesanoLogInArtesanoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogInArtesanoPageRoutingModule", function () {
        return LogInArtesanoPageRoutingModule;
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


      var _log_in_artesano_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./log-in-artesano.page */
      "./src/app/components/log-in-artesano/log-in-artesano.page.ts");

      var routes = [{
        path: '',
        component: _log_in_artesano_page__WEBPACK_IMPORTED_MODULE_3__["LogInArtesanoPage"]
      }];

      var LogInArtesanoPageRoutingModule = function LogInArtesanoPageRoutingModule() {
        _classCallCheck(this, LogInArtesanoPageRoutingModule);
      };

      LogInArtesanoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogInArtesanoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/components/log-in-artesano/log-in-artesano.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/components/log-in-artesano/log-in-artesano.module.ts ***!
      \**********************************************************************/

    /*! exports provided: LogInArtesanoPageModule */

    /***/
    function srcAppComponentsLogInArtesanoLogInArtesanoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogInArtesanoPageModule", function () {
        return LogInArtesanoPageModule;
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


      var _log_in_artesano_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./log-in-artesano-routing.module */
      "./src/app/components/log-in-artesano/log-in-artesano-routing.module.ts");
      /* harmony import */


      var _log_in_artesano_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./log-in-artesano.page */
      "./src/app/components/log-in-artesano/log-in-artesano.page.ts");

      var LogInArtesanoPageModule = function LogInArtesanoPageModule() {
        _classCallCheck(this, LogInArtesanoPageModule);
      };

      LogInArtesanoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _log_in_artesano_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogInArtesanoPageRoutingModule"]],
        declarations: [_log_in_artesano_page__WEBPACK_IMPORTED_MODULE_6__["LogInArtesanoPage"]]
      })], LogInArtesanoPageModule);
      /***/
    },

    /***/
    "./src/app/components/log-in-artesano/log-in-artesano.page.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/components/log-in-artesano/log-in-artesano.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLogInArtesanoLogInArtesanoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div {\n  height: 100%;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2ctaW4tYXJ0ZXNhbm8vbG9nLWluLWFydGVzYW5vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2ctaW4tYXJ0ZXNhbm8vbG9nLWluLWFydGVzYW5vLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/log-in-artesano/log-in-artesano.page.ts":
    /*!********************************************************************!*\
      !*** ./src/app/components/log-in-artesano/log-in-artesano.page.ts ***!
      \********************************************************************/

    /*! exports provided: LogInArtesanoPage */

    /***/
    function srcAppComponentsLogInArtesanoLogInArtesanoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogInArtesanoPage", function () {
        return LogInArtesanoPage;
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


      var _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/notificaciones.service */
      "./src/app/services/notificaciones.service.ts");
      /* harmony import */


      var _services_artesano_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/artesano.service */
      "./src/app/services/artesano.service.ts");
      /* harmony import */


      var src_app_model_artesano__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/model/artesano */
      "./src/app/model/artesano.ts");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var LogInArtesanoPage = /*#__PURE__*/function () {
        function LogInArtesanoPage(route, router, artesanoService, notificacioneservice) {
          _classCallCheck(this, LogInArtesanoPage);

          this.route = route;
          this.router = router;
          this.artesanoService = artesanoService;
          this.notificacioneservice = notificacioneservice;
          this.artesano = new src_app_model_artesano__WEBPACK_IMPORTED_MODULE_5__["Artesano"]();
          this.logeado = new src_app_model_artesano__WEBPACK_IMPORTED_MODULE_5__["Artesano"]();
        }

        _createClass(LogInArtesanoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "loginArtesano",
          value: function loginArtesano() {
            var _this = this;

            this.artesanoService.loginArtesano(this.artesano.correo, this.artesano.contrasenia).subscribe(function (data) {
              if (data.length > 0) {
                _this.logeado = JSON.parse(JSON.stringify(data[0]));
                console.log('Area', _this.logeado['area']);
                console.log('Uid', _this.logeado['uid']);
                localStorage.setItem("area", _this.logeado['area']);
                localStorage.setItem("artesano", _this.logeado['uid']);
                var navigationExtras = {
                  state: {
                    area: _this.logeado['area'],
                    uid: _this.logeado['uid']
                  }
                };

                _this.router.navigate(['/view-artesano'], navigationExtras);
              } else {
                _this.notificacioneservice.notificacionToast('No pudimos encontrar tu cuenta..!  :(');

                _this.router.navigate(['/log-in-artesano']);
              }
            });
          }
        }, {
          key: "loginArtesanoByGoogle",
          value: function loginArtesanoByGoogle() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var userGoogle;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].GoogleAuth.signIn();

                    case 2:
                      userGoogle = _context.sent;
                      this.logeado.correo = userGoogle['email'];
                      this.logeado.contrasenia = userGoogle['id'];
                      this.artesanoService.loginArtesano(this.logeado.correo, this.logeado.contrasenia).subscribe(function (data) {
                        if (data.length > 0) {
                          _this2.logeado = JSON.parse(JSON.stringify(data[0]));
                          console.log('Area', _this2.logeado['area']);
                          console.log('Uid', _this2.logeado['uid']);
                          var navigationExtras = {
                            state: {
                              area: _this2.logeado['area'],
                              uid: _this2.logeado['uid']
                            }
                          };

                          _this2.router.navigate(['/view-artesano'], navigationExtras);
                        } else {
                          _this2.notificacioneservice.notificacionToast('Cuenta no registrada!');

                          _this2.router.navigate(['/log-in-artesano']);
                        }
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return LogInArtesanoPage;
      }();

      LogInArtesanoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_artesano_service__WEBPACK_IMPORTED_MODULE_4__["ArtesanoService"]
        }, {
          type: _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_3__["NotificacionesService"]
        }];
      };

      LogInArtesanoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-in-artesano',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./log-in-artesano.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in-artesano/log-in-artesano.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./log-in-artesano.page.scss */
        "./src/app/components/log-in-artesano/log-in-artesano.page.scss"))["default"]]
      })], LogInArtesanoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-log-in-artesano-log-in-artesano-module-es5.js.map