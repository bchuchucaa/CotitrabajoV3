(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-forgot-password-forgot-password-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.page.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsForgotPasswordForgotPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Actualizar password</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form>\n        <ion-item lines=\"full\">\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input type=\"text\" #email required></ion-input>\n        </ion-item>\n        <ion-row>\n            <ion-col>\n                <ion-button type=\"submit\" (click)=\"onResetPassword(email)\" expand=\"block\">Cambiar contrasena</ion-button>\n            </ion-col>\n        </ion-row>\n    </form>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/components/forgot-password/forgot-password-routing.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/components/forgot-password/forgot-password-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: ForgotPasswordPageRoutingModule */

    /***/
    function srcAppComponentsForgotPasswordForgotPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function () {
        return ForgotPasswordPageRoutingModule;
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


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot-password.page */
      "./src/app/components/forgot-password/forgot-password.page.ts");

      var routes = [{
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
      }];

      var ForgotPasswordPageRoutingModule = function ForgotPasswordPageRoutingModule() {
        _classCallCheck(this, ForgotPasswordPageRoutingModule);
      };

      ForgotPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotPasswordPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/components/forgot-password/forgot-password.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/components/forgot-password/forgot-password.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ForgotPasswordPageModule */

    /***/
    function srcAppComponentsForgotPasswordForgotPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () {
        return ForgotPasswordPageModule;
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


      var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-password-routing.module */
      "./src/app/components/forgot-password/forgot-password-routing.module.ts");
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot-password.page */
      "./src/app/components/forgot-password/forgot-password.page.ts");

      var ForgotPasswordPageModule = function ForgotPasswordPageModule() {
        _classCallCheck(this, ForgotPasswordPageModule);
      };

      ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
      })], ForgotPasswordPageModule);
      /***/
    },

    /***/
    "./src/app/components/forgot-password/forgot-password.page.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/components/forgot-password/forgot-password.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsForgotPasswordForgotPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/forgot-password/forgot-password.page.ts":
    /*!********************************************************************!*\
      !*** ./src/app/components/forgot-password/forgot-password.page.ts ***!
      \********************************************************************/

    /*! exports provided: ForgotPasswordPage */

    /***/
    function srcAppComponentsForgotPasswordForgotPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
        return ForgotPasswordPage;
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


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/auth.service */
      "./src/app/services/auth.service.ts");

      var ForgotPasswordPage = /*#__PURE__*/function () {
        function ForgotPasswordPage(authService, router) {
          _classCallCheck(this, ForgotPasswordPage);

          this.authService = authService;
          this.router = router;
        }

        _createClass(ForgotPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onResetPassword",
          value: function onResetPassword(email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(email);
                      _context.prev = 1;
                      _context.next = 4;
                      return this.authService.resetPassword(email.value);

                    case 4:
                      this.router.navigate(['/login']);
                      _context.next = 10;
                      break;

                    case 7:
                      _context.prev = 7;
                      _context.t0 = _context["catch"](1);
                      console.log(_context.t0);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[1, 7]]);
            }));
          }
        }]);

        return ForgotPasswordPage;
      }();

      ForgotPasswordPage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forgot-password.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forgot-password.page.scss */
        "./src/app/components/forgot-password/forgot-password.page.scss"))["default"]]
      })], ForgotPasswordPage);
      /***/
    },

    /***/
    "./src/app/services/auth.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/app */
      "./node_modules/firebase/app/dist/index.esm.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(afaAuth, afs) {
          var _this = this;

          _classCallCheck(this, AuthService);

          this.afaAuth = afaAuth;
          this.afs = afs;
          this.user$ = this.afaAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
            if (user) {
              _this.afs.doc("users/".concat(user.uid)).valueChanges();
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
          }));
        }

        _createClass(AuthService, [{
          key: "loginGoogle",
          value: function loginGoogle() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _yield$this$afaAuth$s, user;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return this.afaAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth.GoogleAuthProvider());

                    case 3:
                      _yield$this$afaAuth$s = _context2.sent;
                      user = _yield$this$afaAuth$s.user;
                      return _context2.abrupt("return", user);

                    case 8:
                      _context2.prev = 8;
                      _context2.t0 = _context2["catch"](0);
                      console.log('error ', _context2.t0);

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 8]]);
            }));
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      return _context3.abrupt("return", this.afaAuth.sendPasswordResetEmail(email));

                    case 4:
                      _context3.prev = 4;
                      _context3.t0 = _context3["catch"](0);
                      console.log('error ', _context3.t0);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 4]]);
            }));
          }
        }, {
          key: "login",
          value: function login(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _yield$this$afaAuth$s2, user;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.prev = 0;
                      _context4.next = 3;
                      return this.afaAuth.signInWithEmailAndPassword(email, password);

                    case 3:
                      _yield$this$afaAuth$s2 = _context4.sent;
                      user = _yield$this$afaAuth$s2.user;
                      this.updateUserData(user);
                      return _context4.abrupt("return", user);

                    case 9:
                      _context4.prev = 9;
                      _context4.t0 = _context4["catch"](0);
                      console.log('Error -> ', _context4.t0);

                    case 12:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[0, 9]]);
            }));
          }
        }, {
          key: "register",
          value: function register(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _yield$this$afaAuth$c, user;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      _context5.next = 3;
                      return this.afaAuth.createUserWithEmailAndPassword(email, password);

                    case 3:
                      _yield$this$afaAuth$c = _context5.sent;
                      user = _yield$this$afaAuth$c.user;
                      _context5.next = 7;
                      return this.sendVerificationEmail();

                    case 7:
                      return _context5.abrupt("return", user);

                    case 10:
                      _context5.prev = 10;
                      _context5.t0 = _context5["catch"](0);
                      console.log('Error->', _context5.t0);

                    case 13:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[0, 10]]);
            }));
          }
        }, {
          key: "sendVerificationEmail",
          value: function sendVerificationEmail() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.prev = 0;
                      _context6.next = 3;
                      return this.afaAuth.currentUser;

                    case 3:
                      return _context6.abrupt("return", _context6.sent.sendEmailVerification());

                    case 6:
                      _context6.prev = 6;
                      _context6.t0 = _context6["catch"](0);
                      console.log('Error ', _context6.t0);

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[0, 6]]);
            }));
          }
        }, {
          key: "isEmailVerified",
          value: function isEmailVerified(user) {
            return user.emailVerified === true ? true : false;
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.prev = 0;
                      _context7.next = 3;
                      return this.afaAuth.signOut();

                    case 3:
                      _context7.next = 8;
                      break;

                    case 5:
                      _context7.prev = 5;
                      _context7.t0 = _context7["catch"](0);
                      console.log('Error ->', _context7.t0);

                    case 8:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[0, 5]]);
            }));
          }
        }, {
          key: "updateUserData",
          value: function updateUserData(user) {
            var userRef = this.afs.doc("users/".concat(user.uid));
            var data = {
              uid: user.uid,
              email: user.email,
              emailVerified: user.emailVerified,
              displayName: user.displayName
            };
            return userRef.set(data, {
              merge: true
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-forgot-password-forgot-password-module-es5.js.map