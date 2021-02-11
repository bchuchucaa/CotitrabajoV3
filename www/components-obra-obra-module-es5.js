(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-obra-obra-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/obra/obra.page.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/obra/obra.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsObraObraPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>OBRA</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n        <ion-item>\n            <div>\n                <ion-img [src]=\"obra.image?.url\"></ion-img>\n            </div>\n        </ion-item>\n\n        <ion-card-header>Publicacion</ion-card-header>\n        <ion-item>\n            <ion-label position=\"floating\">Titulo</ion-label>\n            <ion-input [(ngModel)]=\"obra.titulo\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Categoria</ion-label>\n            <ion-input [(ngModel)]=\"obra.categoria\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Descripcion</ion-label>\n            <ion-textarea placeholder=\"Enter more information here...\" [(ngModel)]=\"obra.descripcion\"></ion-textarea>\n        </ion-item>\n\n\n        <!--<app-take-photo source=\"photo \" (imageSelected)=\"imageSeleccionada($event) \" (uploadFinished)=\"uploadFinished($event) \"></app-take-photo>\n\n    -->\n\n\n        <footer>\n\n            <ion-button color=\"dark\" expand=\"block\" (click)=\"guardarObra() \">Actualizar</ion-button>\n\n            <ion-button color=\"danger\" expand=\"block\" (click)=\"cancelar() \">Cancelar</ion-button>\n        </footer>\n    </ion-card>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/components/obra/obra-routing.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/components/obra/obra-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: ObraPageRoutingModule */

    /***/
    function srcAppComponentsObraObraRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObraPageRoutingModule", function () {
        return ObraPageRoutingModule;
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


      var _obra_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./obra.page */
      "./src/app/components/obra/obra.page.ts");

      var routes = [{
        path: '',
        component: _obra_page__WEBPACK_IMPORTED_MODULE_3__["ObraPage"]
      }];

      var ObraPageRoutingModule = function ObraPageRoutingModule() {
        _classCallCheck(this, ObraPageRoutingModule);
      };

      ObraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ObraPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/components/obra/obra.module.ts":
    /*!************************************************!*\
      !*** ./src/app/components/obra/obra.module.ts ***!
      \************************************************/

    /*! exports provided: ObraPageModule */

    /***/
    function srcAppComponentsObraObraModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObraPageModule", function () {
        return ObraPageModule;
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


      var _obra_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./obra-routing.module */
      "./src/app/components/obra/obra-routing.module.ts");
      /* harmony import */


      var _obra_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./obra.page */
      "./src/app/components/obra/obra.page.ts");

      var ObraPageModule = function ObraPageModule() {
        _classCallCheck(this, ObraPageModule);
      };

      ObraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _obra_routing_module__WEBPACK_IMPORTED_MODULE_5__["ObraPageRoutingModule"]],
        declarations: [_obra_page__WEBPACK_IMPORTED_MODULE_6__["ObraPage"]]
      })], ObraPageModule);
      /***/
    },

    /***/
    "./src/app/components/obra/obra.page.scss":
    /*!************************************************!*\
      !*** ./src/app/components/obra/obra.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsObraObraPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\n\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n\n.about-header {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n.about-header .about-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0;\n  transition: opacity 500ms ease-in-out;\n}\n\n.about-header .madison {\n  background-image: url(/assets/img/about/madison.jpg);\n}\n\n.about-header .austin {\n  background-image: url(/assets/img/about/austin.jpg);\n}\n\n.about-header .chicago {\n  background-image: url(/assets/img/about/chicago.jpg);\n}\n\n.about-header .seattle {\n  background-image: url(/assets/img/about/seattle.jpg);\n}\n\n.about-info {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #fff);\n}\n\n.about-info h3 {\n  margin-top: 0;\n}\n\n.about-info ion-list {\n  padding-top: 0;\n}\n\n.about-info p {\n  line-height: 130%;\n  color: var(--ion-color-dark);\n}\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n/*\n   * iOS Only\n   */\n\n.ios .about-info {\n  --ion-padding: 19px;\n}\n\n.ios .about-info h3 {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vYnJhL29icmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTs7O0VBR0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0FBQ0o7O0FBRUE7RUFDSSxvREFBQTtBQUNKOztBQUVBO0VBQ0ksbURBQUE7QUFDSjs7QUFFQTtFQUNJLG9EQUFBO0FBQ0o7O0FBRUE7RUFDSSxvREFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7QUFDSjs7QUFHQTs7SUFBQTs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vYnJhL29icmEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciBpb24tYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIHtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmFib3V0LWhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAlO1xufVxuXG4uYWJvdXQtaGVhZGVyIC5hYm91dC1pbWFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmFib3V0LWhlYWRlciAubWFkaXNvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L21hZGlzb24uanBnKTtcbn1cblxuLmFib3V0LWhlYWRlciAuYXVzdGluIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvYXVzdGluLmpwZyk7XG59XG5cbi5hYm91dC1oZWFkZXIgLmNoaWNhZ28ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9jaGljYWdvLmpwZyk7XG59XG5cbi5hYm91dC1oZWFkZXIgLnNlYXR0bGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9zZWF0dGxlLmpwZyk7XG59XG5cbi5hYm91dC1pbmZvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7XG59XG5cbi5hYm91dC1pbmZvIGgzIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYWJvdXQtaW5mbyBpb24tbGlzdCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIHAge1xuICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1pY29uIHtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMzJweDtcbn1cblxuXG4vKlxuICAgKiBpT1MgT25seVxuICAgKi9cblxuLmlvcyAuYWJvdXQtaW5mbyB7XG4gICAgLS1pb24tcGFkZGluZzogMTlweDtcbn1cblxuLmlvcyAuYWJvdXQtaW5mbyBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/obra/obra.page.ts":
    /*!**********************************************!*\
      !*** ./src/app/components/obra/obra.page.ts ***!
      \**********************************************/

    /*! exports provided: ObraPage */

    /***/
    function srcAppComponentsObraObraPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObraPage", function () {
        return ObraPage;
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


      var src_app_model_obra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/model/obra */
      "./src/app/model/obra.ts");
      /* harmony import */


      var _services_obras_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/obras.service */
      "./src/app/services/obras.service.ts");

      var ObraPage = /*#__PURE__*/function () {
        function ObraPage(route, router, obraService) {
          var _this = this;

          _classCallCheck(this, ObraPage);

          this.route = route;
          this.router = router;
          this.obraService = obraService;
          this.obra = new src_app_model_obra__WEBPACK_IMPORTED_MODULE_3__["Obra"]();
          console.log("globally", localStorage.getItem("uid"));
          this.uid = this.route.snapshot.paramMap.get('uid');
          this.uid = this.route.snapshot.paramMap.get('uid');
          this.route.queryParams.subscribe(function (params) {
            console.log(params);

            if (_this.router.getCurrentNavigation().extras.queryParams) {
              _this.obra = _this.router.getCurrentNavigation().extras.queryParams.obra;
              console.log(_this.obra.image);
            }
          });
        }

        _createClass(ObraPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "guardarObra",
          value: function guardarObra() {}
        }, {
          key: "cancelar",
          value: function cancelar() {
            var url = '/view-cliente/' + this.uid;
            this.router.navigate([url]);
          }
        }]);

        return ObraPage;
      }();

      ObraPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_obras_service__WEBPACK_IMPORTED_MODULE_4__["ObrasService"]
        }];
      };

      ObraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-obra',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./obra.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/obra/obra.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./obra.page.scss */
        "./src/app/components/obra/obra.page.scss"))["default"]]
      })], ObraPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-obra-obra-module-es5.js.map