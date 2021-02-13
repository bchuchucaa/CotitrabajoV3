(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-view-cliente-view-cliente-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-cliente/view-cliente.page.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-cliente/view-cliente.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsViewClienteViewClientePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n    <ion-header translucent>\n        <ion-toolbar>\n            <ion-title>CotiTrabajo</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content fullscreen>\n        <ion-list>\n            <ion-list-header>\n                Lista de contactos opciones\n            </ion-list-header>\n\n\n            <ion-item-sliding *ngFor=\"let obra of obras | async\">\n                <ion-item>\n                    <ion-avatar slot=\"start\">\n                        <img src=\"./avatar-finn.png\">\n                    </ion-avatar>\n                    <ion-label (click)=\"editarContactoById(obra.uid)\">\n                        <h2>{{ obra.titulo }}</h2>\n                        <h3>{{ obra.descripcion }}</h3>\n                        <p>{{ obra.categoria }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item-options>\n                    <ion-item-option color=\"primary\" (click)=\"editarContacto(contacto)\">\n                        <ion-icon slot=\"start\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n                        More\n                    </ion-item-option>\n                    <ion-item-option color=\"secondary\" (click)=\"confirmarBorrado(contacto.uid)\">\n                        <ion-icon slot=\"start\" name=\"archive\"></ion-icon>\n                        Archive\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n\n        </ion-list>\n\n        <ion-button (click)=\"crearNuevaObra()\" expand=\"block\">NUEVA OBRA</ion-button>\n\n    </ion-content>\n</ion-app>";
      /***/
    },

    /***/
    "./src/app/components/view-cliente/view-cliente-routing.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/components/view-cliente/view-cliente-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: ViewClientePageRoutingModule */

    /***/
    function srcAppComponentsViewClienteViewClienteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewClientePageRoutingModule", function () {
        return ViewClientePageRoutingModule;
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


      var _view_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-cliente.page */
      "./src/app/components/view-cliente/view-cliente.page.ts");

      var routes = [{
        path: '',
        component: _view_cliente_page__WEBPACK_IMPORTED_MODULE_3__["ViewClientePage"]
      }];

      var ViewClientePageRoutingModule = function ViewClientePageRoutingModule() {
        _classCallCheck(this, ViewClientePageRoutingModule);
      };

      ViewClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewClientePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/components/view-cliente/view-cliente.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/components/view-cliente/view-cliente.module.ts ***!
      \****************************************************************/

    /*! exports provided: ViewClientePageModule */

    /***/
    function srcAppComponentsViewClienteViewClienteModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewClientePageModule", function () {
        return ViewClientePageModule;
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


      var _view_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view-cliente-routing.module */
      "./src/app/components/view-cliente/view-cliente-routing.module.ts");
      /* harmony import */


      var _view_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view-cliente.page */
      "./src/app/components/view-cliente/view-cliente.page.ts");

      var ViewClientePageModule = function ViewClientePageModule() {
        _classCallCheck(this, ViewClientePageModule);
      };

      ViewClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewClientePageRoutingModule"]],
        declarations: [_view_cliente_page__WEBPACK_IMPORTED_MODULE_6__["ViewClientePage"]]
      })], ViewClientePageModule);
      /***/
    },

    /***/
    "./src/app/components/view-cliente/view-cliente.page.scss":
    /*!****************************************************************!*\
      !*** ./src/app/components/view-cliente/view-cliente.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsViewClienteViewClientePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy1jbGllbnRlL3ZpZXctY2xpZW50ZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/view-cliente/view-cliente.page.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/view-cliente/view-cliente.page.ts ***!
      \**************************************************************/

    /*! exports provided: ViewClientePage */

    /***/
    function srcAppComponentsViewClienteViewClientePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewClientePage", function () {
        return ViewClientePage;
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


      var src_app_services_obras_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/obras.service */
      "./src/app/services/obras.service.ts");

      var ViewClientePage = /*#__PURE__*/function () {
        function ViewClientePage(route, router, obrasService) {
          _classCallCheck(this, ViewClientePage);

          this.route = route;
          this.router = router;
          this.obrasService = obrasService;
          this.uid = this.route.snapshot.paramMap.get('uid');
          console.log("consultando ", this.uid);
        }

        _createClass(ViewClientePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.obras = this.obrasService.getObrasCliente(this.uid);
          }
        }, {
          key: "crearNuevaObra",
          value: function crearNuevaObra() {
            var url = '/crear-obra/' + this.uid;
            console.log("Sending this route " + url);
            this.router.navigate([url]);
          }
        }, {
          key: "editarObra",
          value: function editarObra(obra) {}
        }]);

        return ViewClientePage;
      }();

      ViewClientePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_obras_service__WEBPACK_IMPORTED_MODULE_3__["ObrasService"]
        }];
      };

      ViewClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-cliente',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./view-cliente.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-cliente/view-cliente.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./view-cliente.page.scss */
        "./src/app/components/view-cliente/view-cliente.page.scss"))["default"]]
      })], ViewClientePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-view-cliente-view-cliente-module-es5.js.map