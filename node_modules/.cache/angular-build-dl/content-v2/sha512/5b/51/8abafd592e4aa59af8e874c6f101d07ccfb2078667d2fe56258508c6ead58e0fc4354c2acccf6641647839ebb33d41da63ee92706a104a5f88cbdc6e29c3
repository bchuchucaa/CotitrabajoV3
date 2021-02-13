(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-contact-artesano-contact-artesano-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-artesano/contact-artesano.page.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-artesano/contact-artesano.page.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactArtesanoContactArtesanoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-title>CONTACTAR ARTESANO</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <div>\n            <img src=\"assets/img/call.png\" style=\"height: 200px;margin-left: 25%;margin-top: 5%;\" alt=\"Ionic logo\">\n        </div>\n        <ion-item-sliding *ngFor=\"let artesano of artesanos | async\">\n            <ion-item>\n                {{artesano.nombres}}\n            </ion-item>\n            <ion-item>{{artesano.apellidos}} </ion-item>\n            <ion-item>{{artesano.correo}} </ion-item>\n            <ion-item>{{artesano.area}} </ion-item>\n            <ion-item>{{artesano.celular}}</ion-item>\n            <div>\n                <ion-button color=\"success\" expand=\"block\" (click)='Llamar(artesano.celular)'>\n                    <ion-icon name=\"call-outline\"></ion-icon> Llamar </ion-button>\n\n            </div>\n            <div>\n                <ion-button color=\"warning\" expand=\"block\" (click)='finalizarObra()'>\n                    <ion-icon name=\"checkmark-done-circle-outline\"></ion-icon>Finalizar obra </ion-button>\n\n            </div>\n            <div>\n                <ion-button color=\"dark\" expand=\"block\" (click)=\"cancelar()\">\n                    <ion-icon name=\" checkmark-done-circle-outline \"></ion-icon>Cancelar </ion-button>\n\n            </div>\n        </ion-item-sliding>\n\n    </ion-card>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/components/contact-artesano/contact-artesano-routing.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/components/contact-artesano/contact-artesano-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: ContactArtesanoPageRoutingModule */

    /***/
    function srcAppComponentsContactArtesanoContactArtesanoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactArtesanoPageRoutingModule", function () {
        return ContactArtesanoPageRoutingModule;
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


      var _contact_artesano_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contact-artesano.page */
      "./src/app/components/contact-artesano/contact-artesano.page.ts");

      var routes = [{
        path: '',
        component: _contact_artesano_page__WEBPACK_IMPORTED_MODULE_3__["ContactArtesanoPage"]
      }];

      var ContactArtesanoPageRoutingModule = function ContactArtesanoPageRoutingModule() {
        _classCallCheck(this, ContactArtesanoPageRoutingModule);
      };

      ContactArtesanoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ContactArtesanoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/components/contact-artesano/contact-artesano.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/components/contact-artesano/contact-artesano.module.ts ***!
      \************************************************************************/

    /*! exports provided: ContactArtesanoPageModule */

    /***/
    function srcAppComponentsContactArtesanoContactArtesanoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactArtesanoPageModule", function () {
        return ContactArtesanoPageModule;
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


      var _contact_artesano_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contact-artesano-routing.module */
      "./src/app/components/contact-artesano/contact-artesano-routing.module.ts");
      /* harmony import */


      var _contact_artesano_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contact-artesano.page */
      "./src/app/components/contact-artesano/contact-artesano.page.ts");

      var ContactArtesanoPageModule = function ContactArtesanoPageModule() {
        _classCallCheck(this, ContactArtesanoPageModule);
      };

      ContactArtesanoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contact_artesano_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactArtesanoPageRoutingModule"]],
        declarations: [_contact_artesano_page__WEBPACK_IMPORTED_MODULE_6__["ContactArtesanoPage"]]
      })], ContactArtesanoPageModule);
      /***/
    },

    /***/
    "./src/app/components/contact-artesano/contact-artesano.page.scss":
    /*!************************************************************************!*\
      !*** ./src/app/components/contact-artesano/contact-artesano.page.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsContactArtesanoContactArtesanoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1hcnRlc2Fuby9jb250YWN0LWFydGVzYW5vLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/contact-artesano/contact-artesano.page.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/components/contact-artesano/contact-artesano.page.ts ***!
      \**********************************************************************/

    /*! exports provided: ContactArtesanoPage */

    /***/
    function srcAppComponentsContactArtesanoContactArtesanoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactArtesanoPage", function () {
        return ContactArtesanoPage;
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


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_services_cotizacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/cotizacion.service */
      "./src/app/services/cotizacion.service.ts");
      /* harmony import */


      var src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/notificaciones.service */
      "./src/app/services/notificaciones.service.ts");
      /* harmony import */


      var _services_obras_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/obras.service */
      "./src/app/services/obras.service.ts");

      var ContactArtesanoPage = /*#__PURE__*/function () {
        function ContactArtesanoPage(obrasService, route, router, cotizacionService, notificacionesService, callNumber) {
          var _this = this;

          _classCallCheck(this, ContactArtesanoPage);

          this.obrasService = obrasService;
          this.route = route;
          this.router = router;
          this.cotizacionService = cotizacionService;
          this.notificacionesService = notificacionesService;
          this.callNumber = callNumber;
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.artesano = _this.router.getCurrentNavigation().extras.state.artesano, _this.obra = _this.router.getCurrentNavigation().extras.state.obra;
              ;
              console.log(_this.artesano);
              console.log(_this.obra);
            }
          });
        }

        _createClass(ContactArtesanoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.artesanos = this.cotizacionService.getArtesanoContacto(this.artesano);
          }
        }, {
          key: "Llamar",
          value: function Llamar(phoneNumber) {
            this.callNumber.callNumber(phoneNumber, true).then(function () {
              return console.log('Llamada exitosa!');
            })["catch"](function () {
              return console.log('Error al intentar llamar');
            });
          }
        }, {
          key: "finalizarObra",
          value: function finalizarObra() {
            this.cotizacionService.finalizarObra(this.obra);
            console.log('finalizar obra', this.obra);
            this.obrasService.finalizarObra(this.obra, this.artesano);
            this.router.navigate(['view-cliente']);
          }
        }, {
          key: "cancelar",
          value: function cancelar() {
            this.router.navigate(['view-cliente']);
          }
        }]);

        return ContactArtesanoPage;
      }();

      ContactArtesanoPage.ctorParameters = function () {
        return [{
          type: _services_obras_service__WEBPACK_IMPORTED_MODULE_6__["ObrasService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_cotizacion_service__WEBPACK_IMPORTED_MODULE_4__["CotizacionService"]
        }, {
          type: src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__["NotificacionesService"]
        }, {
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"]
        }];
      };

      ContactArtesanoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-artesano',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./contact-artesano.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-artesano/contact-artesano.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./contact-artesano.page.scss */
        "./src/app/components/contact-artesano/contact-artesano.page.scss"))["default"]]
      })], ContactArtesanoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-contact-artesano-contact-artesano-module-es5.js.map