(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["localizacion-localizacion-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/localizacion/localizacion.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/localizacion/localizacion.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLocalizacionLocalizacionPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-title>direcciones</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <h1>{{ title }}</h1>\n\n    <!-- this creates a google map on the page with the given lat/lng from -->\n    <!-- the component as the initial center of the map: -->\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" (centerChange)=\"setNewLocation($event)\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"'https://cdn4.iconfinder.com/data/icons/essential-app-2/16/botton-on-launch-point-48.png'\">\n            <agm-info-window>UPS</agm-info-window>\n\n        </agm-marker>\n\n\n        <agm-marker [latitude]=\"current.latitude\" [longitude]=\"current.longitude\" [iconUrl]=\"'https://cdn4.iconfinder.com/data/icons/essential-app-2/16/botton-on-launch-point-48.png'\">\n            <agm-info-window>{{current.address}}</agm-info-window>\n\n        </agm-marker>\n\n        <agm-marker [latitude]=\"newLocation.latitude\" [longitude]=\"newLocation.longitude\" [iconUrl]=\"'https://cdn2.iconfinder.com/data/icons/pointers-5/24/pointer-top-left-48.png'\">\n            <agm-info-window>{{newLocation.address}}</agm-info-window>\n\n        </agm-marker>\n        <ion-item *ngFor=\"let location of localizaciones | async\">\n\n            <agm-marker [latitude]=\"location.latitude\" [longitude]=\"location.longitude\" [iconUrl]=\"'https://cdn4.iconfinder.com/data/icons/e-commerce-icon-set/48/Bookmark_2-48.png'\">\n                <agm-info-window>{{newLocation.address}}</agm-info-window>\n\n            </agm-marker>\n        </ion-item>\n\n\n\n    </agm-map>\n\n    {{newLocation | json}}\n\n\n</ion-content>\n<footer>\n    <div style=\"margin-left: 25%;\">\n        <ion-button (click)=\"saveLocation()\" color=\"success\">Guardar</ion-button>\n        <ion-button (click)=\"getSavedLocations()\" color=\"danger\">Cancelar</ion-button>\n    </div>\n</footer>";
      /***/
    },

    /***/
    "./src/app/localizacion/localizacion-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/localizacion/localizacion-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: LocalizacionPageRoutingModule */

    /***/
    function srcAppLocalizacionLocalizacionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalizacionPageRoutingModule", function () {
        return LocalizacionPageRoutingModule;
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


      var _localizacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./localizacion.page */
      "./src/app/localizacion/localizacion.page.ts");

      var routes = [{
        path: '',
        component: _localizacion_page__WEBPACK_IMPORTED_MODULE_3__["LocalizacionPage"]
      }];

      var LocalizacionPageRoutingModule = function LocalizacionPageRoutingModule() {
        _classCallCheck(this, LocalizacionPageRoutingModule);
      };

      LocalizacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LocalizacionPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/localizacion/localizacion.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/localizacion/localizacion.module.ts ***!
      \*****************************************************/

    /*! exports provided: LocalizacionPageModule */

    /***/
    function srcAppLocalizacionLocalizacionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalizacionPageModule", function () {
        return LocalizacionPageModule;
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


      var _localizacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./localizacion-routing.module */
      "./src/app/localizacion/localizacion-routing.module.ts");
      /* harmony import */


      var _localizacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./localizacion.page */
      "./src/app/localizacion/localizacion.page.ts");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

      var LocalizacionPageModule = function LocalizacionPageModule() {
        _classCallCheck(this, LocalizacionPageModule);
      };

      LocalizacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _localizacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocalizacionPageRoutingModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyC7lREbDALML3-f6Nj0lEwoFTMuWcmZdK4'
        })],
        declarations: [_localizacion_page__WEBPACK_IMPORTED_MODULE_6__["LocalizacionPage"]]
      })], LocalizacionPageModule);
      /***/
    },

    /***/
    "./src/app/localizacion/localizacion.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/localizacion/localizacion.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLocalizacionLocalizacionPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "agm-map {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYWxpemFjaW9uL2xvY2FsaXphY2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2NhbGl6YWNpb24vbG9jYWxpemFjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICAgIGhlaWdodDogMzAwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/localizacion/localizacion.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/localizacion/localizacion.page.ts ***!
      \***************************************************/

    /*! exports provided: LocalizacionPage */

    /***/
    function srcAppLocalizacionLocalizacionPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalizacionPage", function () {
        return LocalizacionPage;
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


      var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/location.service */
      "./src/app/services/location.service.ts");

      var LocalizacionPage = /*#__PURE__*/function () {
        function LocalizacionPage(locationService) {
          _classCallCheck(this, LocalizacionPage);

          this.locationService = locationService;
          this.title = 'My first AGM project';
          this.lat = 51.678418;
          this.lng = 7.809007;
          this.myVar = new Array();
          this.current = {
            latitude: '',
            longitude: '',
            address: ''
          };
          this.newLocation = {
            latitude: '',
            longitude: '',
            address: ''
          };
          this.localizaciones = this.locationService.getSavedLocations();
        }

        _createClass(LocalizacionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.locationService.getCurrentLocation();

                    case 2:
                      this.current = _context.sent;
                      this.locationService.getAddressOfLocation(this.newLocation); //this.localizaciones.forEach(q => this.locationService.getAddressOfLocation(q));

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } //IS DEPRECATED BY SCORPION

        }, {
          key: "getSavedLocations",
          value: function getSavedLocations() {
            var _this = this;

            this.locationService.getSavedLocations().subscribe(function (data) {
              console.log(data);
              var aux = data;

              _this.locationService.getAddressOfLocation(aux[0]);
            });
          }
        }, {
          key: "setNewLocation",
          value: function setNewLocation(event) {
            if (event) {
              this.newLocation.latitude = event.lat;
              this.newLocation.longitude = event.lng;
              this.locationService.getAddressOfLocation(this.newLocation);
            }
          }
        }, {
          key: "saveLocation",
          value: function saveLocation() {
            console.log('enviado a guardar');
            this.locationService.saveDireccion(this.newLocation);
          }
        }, {
          key: "logInFacebook",
          value: function logInFacebook() {}
        }]);

        return LocalizacionPage;
      }();

      LocalizacionPage.ctorParameters = function () {
        return [{
          type: _services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"]
        }];
      };

      LocalizacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-localizacion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./localizacion.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/localizacion/localizacion.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./localizacion.page.scss */
        "./src/app/localizacion/localizacion.page.scss"))["default"]]
      })], LocalizacionPage);
      /***/
    },

    /***/
    "./src/app/services/location.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/location.service.ts ***!
      \**********************************************/

    /*! exports provided: LocationService */

    /***/
    function srcAppServicesLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationService", function () {
        return LocationService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

      var LocationService = /*#__PURE__*/function () {
        function LocationService(platform, afs) {
          _classCallCheck(this, LocationService);

          this.platform = platform;
          this.afs = afs;
        }

        _createClass(LocationService, [{
          key: "getCurrentLocation",
          value: function getCurrentLocation() {
            var withAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var location;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      location = {};
                      return _context2.abrupt("return", new Promise(function (resolve, reject) {
                        if (navigator.geolocation) {
                          var options = {
                            frequency: 1000,
                            timeout: 15000,
                            enableHighAccuracy: true
                          };
                          navigator.geolocation.getCurrentPosition(function (position) {
                            location.latitude = position.coords.latitude;
                            location.longitude = position.coords.longitude;

                            if (withAddress) {
                              var geocoder = new google.maps.Geocoder();
                              var latlng = {
                                lat: location.latitude,
                                lng: location.longitude
                              };
                              geocoder.geocode({
                                location: latlng
                              }, function (results, status) {
                                if (results != null && results != undefined) {
                                  location.address = results[0].formatted_address;
                                } //end if


                                resolve(location);
                              });
                            } else {
                              resolve(location);
                            } //end if

                          }, function (error) {
                            resolve(null);
                          }, options);
                        } //end if

                      }));

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "getAddressOfLocation",
          value: function getAddressOfLocation(location) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var geocoder, latlng;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      geocoder = new google.maps.Geocoder();
                      latlng = {
                        lat: location.latitude,
                        lng: location.longitude
                      };
                      geocoder.geocode({
                        location: latlng
                      }, function (results, status) {
                        if (results != null) {
                          location.address = results[0].formatted_address;
                          return location.address;
                        }
                      });

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }, {
          key: "saveDireccion",
          value: function saveDireccion(localizacion) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var refObra;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log(localizacion.latitude);
                      console.log('Direccion a guardar');
                      console.log(localizacion.address);
                      refObra = this.afs.collection("localizaciones");

                      if (localizacion.uid == null) {
                        localizacion.uid = this.afs.createId();
                      }

                      refObra.doc(localizacion.uid).set(Object.assign({}, localizacion), {
                        merge: true
                      });

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getSavedLocations",
          value: function getSavedLocations() {
            console.log('TRYING TO GET SAVED LOCATIONS');
            return this.afs.collection("localizaciones").valueChanges();
          }
        }]);

        return LocationService;
      }();

      LocationService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }];
      };

      LocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LocationService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=localizacion-localizacion-module-es5.js.map