(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-log-in-log-in-module~components-register-register-module~components-registro-clie~935530ef"], {
    /***/
    "./capacitor.config.json":
    /*!*******************************!*\
      !*** ./capacitor.config.json ***!
      \*******************************/

    /*! exports provided: appId, appName, bundledWebRuntime, npmClient, webDir, plugins, cordova, default */

    /***/
    function capacitorConfigJson(module) {
      module.exports = JSON.parse("{\"appId\":\"io.ionic.starter\",\"appName\":\"Cotitrabajo\",\"bundledWebRuntime\":false,\"npmClient\":\"npm\",\"webDir\":\"www\",\"plugins\":{\"SplashScreen\":{\"launchShowDuration\":0},\"GoogleAuth\":{\"scopes\":[\"profile\",\"email\"],\"serverClientId\":\"304796130309-6b4e1s44jbcabcm3guapfloisdhq353k.apps.googleusercontent.com\",\"forceCodeForRefreshToken\":true}},\"cordova\":{}}");
      /***/
    },

    /***/
    "./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js ***!
      \*******************************************************************************/

    /*! exports provided: GoogleAuthWeb, GoogleAuth */

    /***/
    function node_modulesCodetrixStudioCapacitorGoogleAuthDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./web */
      "./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/web.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GoogleAuthWeb", function () {
        return _web__WEBPACK_IMPORTED_MODULE_0__["GoogleAuthWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GoogleAuth", function () {
        return _web__WEBPACK_IMPORTED_MODULE_0__["GoogleAuth"];
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/web.js":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/web.js ***!
      \*****************************************************************************/

    /*! exports provided: GoogleAuthWeb, GoogleAuth */

    /***/
    function node_modulesCodetrixStudioCapacitorGoogleAuthDistEsmWebJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleAuthWeb", function () {
        return GoogleAuthWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleAuth", function () {
        return GoogleAuth;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../capacitor.config.json */
      "./capacitor.config.json");

      var _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../../capacitor.config.json */
      "./capacitor.config.json", 1);

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }; // @ts-ignore


      var GoogleAuthWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
        _inherits(GoogleAuthWeb, _capacitor_core__WEBP);

        var _super = _createSuper(GoogleAuthWeb);

        _createClass(GoogleAuthWeb, [{
          key: "webConfigured",
          get: function get() {
            return document.getElementsByName('google-signin-client_id').length > 0;
          }
        }]);

        function GoogleAuthWeb() {
          var _this;

          _classCallCheck(this, GoogleAuthWeb);

          _this = _super.call(this, {
            name: 'GoogleAuth',
            platforms: ['web']
          });
          if (!_this.webConfigured) return _possibleConstructorReturn(_this);
          _this.gapiLoaded = new Promise(function (resolve) {
            // HACK: Relying on window object, can't get property in gapi.load callback
            window.gapiResolve = resolve;

            _this.initialize();
          });

          _this.addUserChangeListener();

          return _this;
        }

        _createClass(GoogleAuthWeb, [{
          key: "initialize",
          value: function initialize() {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.defer = true;
            script.async = true;
            script.onload = this.platformJsLoaded;
            script.src = 'https://apis.google.com/js/platform.js';
            head.appendChild(script);
          }
        }, {
          key: "platformJsLoaded",
          value: function platformJsLoaded() {
            gapi.load('auth2', function () {
              var clientConfig = {
                client_id: document.getElementsByName('google-signin-client_id')[0].content
              };

              if (_capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth != null && _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth.scopes != null) {
                clientConfig.scope = _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth.scopes.join(' ');
              }

              gapi.auth2.init(clientConfig);
              window.gapiResolve();
            });
          }
        }, {
          key: "signIn",
          value: function signIn() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", new Promise(function (resolve, reject) {
                        return __awaiter(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var serverAuthCode, needsOfflineAccess, offlineAccessResponse, googleUser, user;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.prev = 0;
                                  needsOfflineAccess = false;

                                  try {
                                    needsOfflineAccess = _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth.serverClientId != null;
                                  } catch (_a) {}

                                  if (!needsOfflineAccess) {
                                    _context.next = 10;
                                    break;
                                  }

                                  _context.next = 6;
                                  return gapi.auth2.getAuthInstance().grantOfflineAccess();

                                case 6:
                                  offlineAccessResponse = _context.sent;
                                  serverAuthCode = offlineAccessResponse.code;
                                  _context.next = 12;
                                  break;

                                case 10:
                                  _context.next = 12;
                                  return gapi.auth2.getAuthInstance().signIn();

                                case 12:
                                  googleUser = gapi.auth2.getAuthInstance().currentUser.get();

                                  if (!needsOfflineAccess) {
                                    _context.next = 16;
                                    break;
                                  }

                                  _context.next = 16;
                                  return googleUser.reloadAuthResponse();

                                case 16:
                                  user = this.getUserFrom(googleUser);
                                  user.serverAuthCode = serverAuthCode;
                                  resolve(user);
                                  _context.next = 24;
                                  break;

                                case 21:
                                  _context.prev = 21;
                                  _context.t0 = _context["catch"](0);
                                  reject(_context.t0);

                                case 24:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this, [[0, 21]]);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "refresh",
          value: function refresh() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var authResponse;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();

                    case 2:
                      authResponse = _context3.sent;
                      return _context3.abrupt("return", {
                        accessToken: authResponse.access_token,
                        idToken: authResponse.id_token
                      });

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", gapi.auth2.getAuthInstance().signOut());

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          }
        }, {
          key: "addUserChangeListener",
          value: function addUserChangeListener() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.gapiLoaded;

                    case 2:
                      gapi.auth2.getAuthInstance().currentUser.listen(function (googleUser) {
                        _this3.notifyListeners("userChange", googleUser.isSignedIn() ? _this3.getUserFrom(googleUser) : null);
                      });

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getUserFrom",
          value: function getUserFrom(googleUser) {
            var user = {};
            var profile = googleUser.getBasicProfile();
            user.email = profile.getEmail();
            user.familyName = profile.getFamilyName();
            user.givenName = profile.getGivenName();
            user.id = profile.getId();
            user.imageUrl = profile.getImageUrl();
            user.name = profile.getName();
            var authResponse = googleUser.getAuthResponse(true);
            user.authentication = {
              accessToken: authResponse.access_token,
              idToken: authResponse.id_token
            };
            return user;
          }
        }]);

        return GoogleAuthWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]);

      var GoogleAuth = new GoogleAuthWeb();
      Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(GoogleAuth); //# sourceMappingURL=web.js.map

      /***/
    },

    /***/
    "./src/app/model/cliente.ts":
    /*!**********************************!*\
      !*** ./src/app/model/cliente.ts ***!
      \**********************************/

    /*! exports provided: Cliente */

    /***/
    function srcAppModelClienteTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cliente", function () {
        return Cliente;
      });

      var Cliente = function Cliente() {
        _classCallCheck(this, Cliente);
      };
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
          var _this4 = this;

          _classCallCheck(this, AuthService);

          this.afaAuth = afaAuth;
          this.afs = afs;
          this.user$ = this.afaAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
            if (user) {
              _this4.afs.doc("users/".concat(user.uid)).valueChanges();
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
          }));
        }

        _createClass(AuthService, [{
          key: "loginGoogle",
          value: function loginGoogle() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _yield$this$afaAuth$s, user;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.prev = 0;
                      _context6.next = 3;
                      return this.afaAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth.GoogleAuthProvider());

                    case 3:
                      _yield$this$afaAuth$s = _context6.sent;
                      user = _yield$this$afaAuth$s.user;
                      return _context6.abrupt("return", user);

                    case 8:
                      _context6.prev = 8;
                      _context6.t0 = _context6["catch"](0);
                      console.log('error ', _context6.t0);

                    case 11:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[0, 8]]);
            }));
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.prev = 0;
                      return _context7.abrupt("return", this.afaAuth.sendPasswordResetEmail(email));

                    case 4:
                      _context7.prev = 4;
                      _context7.t0 = _context7["catch"](0);
                      console.log('error ', _context7.t0);

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[0, 4]]);
            }));
          }
        }, {
          key: "login",
          value: function login(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _yield$this$afaAuth$s2, user;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.prev = 0;
                      _context8.next = 3;
                      return this.afaAuth.signInWithEmailAndPassword(email, password);

                    case 3:
                      _yield$this$afaAuth$s2 = _context8.sent;
                      user = _yield$this$afaAuth$s2.user;
                      this.updateUserData(user);
                      return _context8.abrupt("return", user);

                    case 9:
                      _context8.prev = 9;
                      _context8.t0 = _context8["catch"](0);
                      console.log('Error -> ', _context8.t0);

                    case 12:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this, [[0, 9]]);
            }));
          }
        }, {
          key: "register",
          value: function register(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _yield$this$afaAuth$c, user;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      _context9.next = 3;
                      return this.afaAuth.createUserWithEmailAndPassword(email, password);

                    case 3:
                      _yield$this$afaAuth$c = _context9.sent;
                      user = _yield$this$afaAuth$c.user;
                      _context9.next = 7;
                      return this.sendVerificationEmail();

                    case 7:
                      return _context9.abrupt("return", user);

                    case 10:
                      _context9.prev = 10;
                      _context9.t0 = _context9["catch"](0);
                      console.log('Error->', _context9.t0);

                    case 13:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[0, 10]]);
            }));
          }
        }, {
          key: "sendVerificationEmail",
          value: function sendVerificationEmail() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.prev = 0;
                      _context10.next = 3;
                      return this.afaAuth.currentUser;

                    case 3:
                      return _context10.abrupt("return", _context10.sent.sendEmailVerification());

                    case 6:
                      _context10.prev = 6;
                      _context10.t0 = _context10["catch"](0);
                      console.log('Error ', _context10.t0);

                    case 9:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this, [[0, 6]]);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.prev = 0;
                      _context11.next = 3;
                      return this.afaAuth.signOut();

                    case 3:
                      _context11.next = 8;
                      break;

                    case 5:
                      _context11.prev = 5;
                      _context11.t0 = _context11["catch"](0);
                      console.log('Error ->', _context11.t0);

                    case 8:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this, [[0, 5]]);
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
    },

    /***/
    "./src/app/services/cliente.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/cliente.service.ts ***!
      \*********************************************/

    /*! exports provided: ClienteService */

    /***/
    function srcAppServicesClienteServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClienteService", function () {
        return ClienteService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var ClienteService = /*#__PURE__*/function () {
        function ClienteService(afs) {
          _classCallCheck(this, ClienteService);

          this.afs = afs;
        } //Metodo para registrar Clientes


        _createClass(ClienteService, [{
          key: "saveCliente",
          value: function saveCliente(cliente) {
            var refCliente = this.afs.collection("clientes");

            if (cliente.uid == null) {
              cliente.uid = this.afs.createId();
              cliente.deleted = false;
            }

            refCliente.doc(cliente.uid).set(Object.assign({}, cliente), {
              merge: true
            });
          } //Metodo para el logueo del cliente

        }, {
          key: "logInCliente",
          value: function logInCliente(correo, contrasena) {
            console.log("this is mail of client " + correo);
            return this.afs.collection("clientes", function (ref) {
              return ref.where("correo", "==", correo).where("contrasena", "==", contrasena);
            }).valueChanges();
          }
        }, {
          key: "logInClient",
          value: function logInClient(correo, contrasena) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var aux;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.prev = 0;
                      _context12.next = 3;
                      return this.afs.collection("clientes", function (ref) {
                        return ref.where('correo', '==', correo).where('contrasena', '==', contrasena);
                      }).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).toPromise().then(function (doc) {
                        return doc;
                      })["catch"](function (error) {
                        throw error;
                      });

                    case 3:
                      aux = _context12.sent;

                      if (!(aux == null)) {
                        _context12.next = 6;
                        break;
                      }

                      return _context12.abrupt("return", {});

                    case 6:
                      return _context12.abrupt("return", aux[0]);

                    case 9:
                      _context12.prev = 9;
                      _context12.t0 = _context12["catch"](0);
                      console.error("Error lLog In", _context12.t0);
                      throw _context12.t0;

                    case 13:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this, [[0, 9]]);
            }));
          }
        }]);

        return ClienteService;
      }();

      ClienteService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      ClienteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ClienteService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~components-log-in-log-in-module~components-register-register-module~components-registro-clie~935530ef-es5.js.map