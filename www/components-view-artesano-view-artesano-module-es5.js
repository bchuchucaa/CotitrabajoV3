(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-view-artesano-view-artesano-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-artesano/view-artesano.page.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-artesano/view-artesano.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsViewArtesanoViewArtesanoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n       <img style=\"height: 40px;\" src=\"./assets/img/artesangif.gif\">\n        <ion-title>COTITRABAJO </ion-title>\n        <ion-icon name=\"exit\" (click)=\"returninit()\" style=\"float: right;height: 50px;\"></ion-icon>\n        \n    </ion-toolbar>\n\n</ion-header>\n<ion-content>\n    \n    \n        <ion-card-header>\n            Obras disponibles\n        </ion-card-header>\n        <ion-card *ngFor=\"let obra of obras | async\" style=\"width: 40%;float: left;height: 40%;\">\n            <img style=\"height: 85%;width: 100%;\"  src={{obra.image?.url}} (click)=\"Cotizar(obra.uid,obra)\" >\n            \n            <ion-card-subtitle style=\"text-align: center;\">{{obra.titulo}}</ion-card-subtitle>\n        </ion-card>\n       \n\n        \n        \n\n        <!-- <ion-list>\n\n            <ion-item-sliding *ngFor=\"let obra of obras | async \">\n                <img src={{obra.image?.url}} />\n                <ion-item>\n\n                    <ion-label>\n                        <h1 class=\"blanquear \">{{obra.titulo}}</h1>\n                        <h2 class=\"blanquear \">{{obra.categoria}}</h2>\n                        <h3 class=\"blanquear \">{{obra.descripcion}}</h3>\n                        <ion-button fill=\"outline\" slot=\"end\" (click)=\"ListarCotizaciones(obra.uid)\">cotizar</ion-button>\n                    </ion-label>\n                </ion-item>\n                <ion-item-options>\n                    <ion-item-option color=\"primary \" (click)=\"Cotizar(obra.uid,obra) \">\n                        <ion-icon name=\"cash-outline \"></ion-icon>\n                        Cotizar\n                    </ion-item-option>\n                    <ion-item-option color=\"secondary \" (click)=\"ListarCotizaciones(obra.uid) \">\n                        <ion-icon name=\"chatbox-ellipses-outline \"></ion-icon>\n                        Visualizar Cotizaciones\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list> -->\n\n   \n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/components/view-artesano/view-artesano-routing.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/components/view-artesano/view-artesano-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: ViewArtesanoPageRoutingModule */

    /***/
    function srcAppComponentsViewArtesanoViewArtesanoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewArtesanoPageRoutingModule", function () {
        return ViewArtesanoPageRoutingModule;
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


      var _view_artesano_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-artesano.page */
      "./src/app/components/view-artesano/view-artesano.page.ts");

      var routes = [{
        path: '',
        component: _view_artesano_page__WEBPACK_IMPORTED_MODULE_3__["ViewArtesanoPage"]
      }];

      var ViewArtesanoPageRoutingModule = function ViewArtesanoPageRoutingModule() {
        _classCallCheck(this, ViewArtesanoPageRoutingModule);
      };

      ViewArtesanoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewArtesanoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/components/view-artesano/view-artesano.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/components/view-artesano/view-artesano.module.ts ***!
      \******************************************************************/

    /*! exports provided: ViewArtesanoPageModule */

    /***/
    function srcAppComponentsViewArtesanoViewArtesanoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewArtesanoPageModule", function () {
        return ViewArtesanoPageModule;
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


      var _view_artesano_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view-artesano-routing.module */
      "./src/app/components/view-artesano/view-artesano-routing.module.ts");
      /* harmony import */


      var _view_artesano_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view-artesano.page */
      "./src/app/components/view-artesano/view-artesano.page.ts");

      var ViewArtesanoPageModule = function ViewArtesanoPageModule() {
        _classCallCheck(this, ViewArtesanoPageModule);
      };

      ViewArtesanoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_artesano_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewArtesanoPageRoutingModule"]],
        declarations: [_view_artesano_page__WEBPACK_IMPORTED_MODULE_6__["ViewArtesanoPage"]]
      })], ViewArtesanoPageModule);
      /***/
    },

    /***/
    "./src/app/components/view-artesano/view-artesano.page.scss":
    /*!******************************************************************!*\
      !*** ./src/app/components/view-artesano/view-artesano.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsViewArtesanoViewArtesanoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  --ion-background-color: #3da4ab;\n}\n\n.blanquear {\n  color: white;\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n}\n\n.obraimg {\n  float: left;\n}\n\nion-card::after {\n  border-color: black;\n  border-style: solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LWFydGVzYW5vL3ZpZXctYXJ0ZXNhbm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUVJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy1hcnRlc2Fuby92aWV3LWFydGVzYW5vLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjM2RhNGFiO1xufVxuXG4uYmxhbnF1ZWFyIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi53cmFwcGVyIHtcbiAgIFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLWdhcDogMTBweDtcbiAgfVxuXG4ub2JyYWltZ3tcbiAgICBmbG9hdDogbGVmdDtcbn1cbmlvbi1jYXJkOjphZnRlcntcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/view-artesano/view-artesano.page.ts":
    /*!****************************************************************!*\
      !*** ./src/app/components/view-artesano/view-artesano.page.ts ***!
      \****************************************************************/

    /*! exports provided: ViewArtesanoPage */

    /***/
    function srcAppComponentsViewArtesanoViewArtesanoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewArtesanoPage", function () {
        return ViewArtesanoPage;
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


      var src_app_model_cotizacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/model/cotizacion */
      "./src/app/model/cotizacion.ts");
      /* harmony import */


      var src_app_services_artesano_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/artesano.service */
      "./src/app/services/artesano.service.ts");

      var ViewArtesanoPage = /*#__PURE__*/function () {
        function ViewArtesanoPage(route, router, artesanoService) {
          var _this = this;

          _classCallCheck(this, ViewArtesanoPage);

          this.route = route;
          this.router = router;
          this.artesanoService = artesanoService;
          this.bandera = false;
          this.cotizacion = new src_app_model_cotizacion__WEBPACK_IMPORTED_MODULE_3__["Cotizacion"]();
          this.area = localStorage.getItem("area");
          this.uid = localStorage.getItem("artesano");
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.area = _this.router.getCurrentNavigation().extras.state.area, _this.uid = _this.router.getCurrentNavigation().extras.state.uid;
              console.log(_this.uid);
            }
          });
        }

        _createClass(ViewArtesanoPage, [{
          key: "Cotizar",
          value: function Cotizar(String, obra) {
            var navigationExtras = {
              state: {
                uid: this.uid,
                obra: String,
                obraparam: obra
              }
            };
            this.router.navigate(['/cotizacion'], navigationExtras);
          }
        }, {
          key: "ListarCotizaciones",
          value: function ListarCotizaciones(String) {
            var navigationExtras = {
              state: {
                uid: this.uid,
                obra: String
              }
            };
            this.router.navigate(['/lis-cotizaciones-artesano'], navigationExtras);
          }
        }, {
          key: "saveCotizacion",
          value: function saveCotizacion() {
            this.bandera = false;
            console.log(this.cotizar_valor);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.obras = this.artesanoService.getObras(this.area);
          }
        }, {
          key: "returninit",
          value: function returninit() {
            this.router.navigate(['/log-in']);
          }
        }, {
          key: "misObras",
          value: function misObras() {
            localStorage.setItem("area", this.area);
            localStorage.setItem("artesano", this.uid);
            this.router.navigate(['/mis-obras-artesano']);
          }
        }]);

        return ViewArtesanoPage;
      }();

      ViewArtesanoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_artesano_service__WEBPACK_IMPORTED_MODULE_4__["ArtesanoService"]
        }];
      };

      ViewArtesanoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-artesano',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./view-artesano.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-artesano/view-artesano.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./view-artesano.page.scss */
        "./src/app/components/view-artesano/view-artesano.page.scss"))["default"]]
      })], ViewArtesanoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-view-artesano-view-artesano-module-es5.js.map