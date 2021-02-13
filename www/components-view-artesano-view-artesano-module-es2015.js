(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-view-artesano-view-artesano-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-artesano/view-artesano.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-artesano/view-artesano.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <a color=\"success\" routerLink=\"/view-artesano\">Catalogo</a>\n        <ion-buttons slot=\"secondary\">\n            <ion-button>\n                <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\n            </ion-button>\n\n            <ion-toolbar>\n\n                <ion-buttons slot=\"primary\">\n                    <ion-button fill=\"solid\" color=\"secondary\" (click)=\"misObras()\">\n                        Mis Obras\n                        <ion-icon slot=\"end\" name=\"help-circle\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n            </ion-toolbar>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"secondary\">\n                <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n<ion-content>\n    <ion-fab-button>\n        <ion-icon name=\"arrow-back-sharp\" style=\"float:right\" (click)=\"returninit() \"></ion-icon>\n    </ion-fab-button>\n    <ion-card>\n        <ion-card-header>\n            Obras disponibles\n        </ion-card-header>\n\n        <ion-list>\n\n            <ion-item-sliding *ngFor=\"let obra of obras | async \">\n                <img src={{obra.image?.url}} />\n                <ion-item>\n\n                    <ion-label>\n                        <h1 class=\"blanquear \">{{obra.titulo}}</h1>\n                        <h2 class=\"blanquear \">{{obra.categoria}}</h2>\n                        <h3 class=\"blanquear \">{{obra.descripcion}}</h3>\n                        <ion-button fill=\"outline\" slot=\"end\" (click)=\"ListarCotizaciones(obra.uid)\">cotizar</ion-button>\n                    </ion-label>\n                </ion-item>\n                <ion-item-options>\n                    <ion-item-option color=\"primary \" (click)=\"Cotizar(obra.uid,obra) \">\n                        <ion-icon name=\"cash-outline \"></ion-icon>\n                        Cotizar\n                    </ion-item-option>\n                    <ion-item-option color=\"secondary \" (click)=\"ListarCotizaciones(obra.uid) \">\n                        <ion-icon name=\"chatbox-ellipses-outline \"></ion-icon>\n                        Visualizar Cotizaciones\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n\n    </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/components/view-artesano/view-artesano-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/view-artesano/view-artesano-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ViewArtesanoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewArtesanoPageRoutingModule", function() { return ViewArtesanoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _view_artesano_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-artesano.page */ "./src/app/components/view-artesano/view-artesano.page.ts");




const routes = [
    {
        path: '',
        component: _view_artesano_page__WEBPACK_IMPORTED_MODULE_3__["ViewArtesanoPage"]
    }
];
let ViewArtesanoPageRoutingModule = class ViewArtesanoPageRoutingModule {
};
ViewArtesanoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewArtesanoPageRoutingModule);



/***/ }),

/***/ "./src/app/components/view-artesano/view-artesano.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/view-artesano/view-artesano.module.ts ***!
  \******************************************************************/
/*! exports provided: ViewArtesanoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewArtesanoPageModule", function() { return ViewArtesanoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _view_artesano_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-artesano-routing.module */ "./src/app/components/view-artesano/view-artesano-routing.module.ts");
/* harmony import */ var _view_artesano_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-artesano.page */ "./src/app/components/view-artesano/view-artesano.page.ts");







let ViewArtesanoPageModule = class ViewArtesanoPageModule {
};
ViewArtesanoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_artesano_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewArtesanoPageRoutingModule"]
        ],
        declarations: [_view_artesano_page__WEBPACK_IMPORTED_MODULE_6__["ViewArtesanoPage"]]
    })
], ViewArtesanoPageModule);



/***/ }),

/***/ "./src/app/components/view-artesano/view-artesano.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/view-artesano/view-artesano.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  --ion-background-color: #3da4ab;\n}\n\n.blanquear {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LWFydGVzYW5vL3ZpZXctYXJ0ZXNhbm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy1hcnRlc2Fuby92aWV3LWFydGVzYW5vLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjM2RhNGFiO1xufVxuXG4uYmxhbnF1ZWFyIHtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/view-artesano/view-artesano.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/view-artesano/view-artesano.page.ts ***!
  \****************************************************************/
/*! exports provided: ViewArtesanoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewArtesanoPage", function() { return ViewArtesanoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_model_cotizacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/cotizacion */ "./src/app/model/cotizacion.ts");
/* harmony import */ var src_app_services_artesano_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/artesano.service */ "./src/app/services/artesano.service.ts");





let ViewArtesanoPage = class ViewArtesanoPage {
    constructor(route, router, artesanoService) {
        this.route = route;
        this.router = router;
        this.artesanoService = artesanoService;
        this.bandera = false;
        this.cotizacion = new src_app_model_cotizacion__WEBPACK_IMPORTED_MODULE_3__["Cotizacion"]();
        this.area = localStorage.getItem("area");
        this.uid = localStorage.getItem("artesano");
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.area = this.router.getCurrentNavigation().extras.state.area,
                    this.uid = this.router.getCurrentNavigation().extras.state.uid;
                console.log(this.uid);
            }
        });
    }
    Cotizar(String, obra) {
        let navigationExtras = {
            state: {
                uid: this.uid,
                obra: String,
                obraparam: obra,
            }
        };
        this.router.navigate(['/cotizacion'], navigationExtras);
    }
    ListarCotizaciones(String) {
        let navigationExtras = {
            state: {
                uid: this.uid,
                obra: String
            }
        };
        this.router.navigate(['/lis-cotizaciones-artesano'], navigationExtras);
    }
    saveCotizacion() {
        this.bandera = false;
        console.log(this.cotizar_valor);
    }
    ngOnInit() {
        this.obras = this.artesanoService.getObras(this.area);
    }
    returninit() {
        this.router.navigate(['/log-in']);
    }
    misObras() {
        localStorage.setItem("area", this.area);
        localStorage.setItem("artesano", this.uid);
        this.router.navigate(['/mis-obras-artesano']);
    }
};
ViewArtesanoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_artesano_service__WEBPACK_IMPORTED_MODULE_4__["ArtesanoService"] }
];
ViewArtesanoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-artesano',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-artesano.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-artesano/view-artesano.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-artesano.page.scss */ "./src/app/components/view-artesano/view-artesano.page.scss")).default]
    })
], ViewArtesanoPage);



/***/ })

}]);
//# sourceMappingURL=components-view-artesano-view-artesano-module-es2015.js.map