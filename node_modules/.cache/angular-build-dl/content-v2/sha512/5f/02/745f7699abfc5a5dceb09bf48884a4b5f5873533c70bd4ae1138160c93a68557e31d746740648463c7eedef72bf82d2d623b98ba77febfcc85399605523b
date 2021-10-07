(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-lis-cotizaciones-cliente-lis-cotizaciones-cliente-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lis-cotizaciones-cliente/lis-cotizaciones-cliente.page.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lis-cotizaciones-cliente/lis-cotizaciones-cliente.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-avatar slot=\"start\">\n            <img src=\"assets/icon/iconlogo.png\" alt=\"Ionic logo\">\n        </ion-avatar>\n        <ion-title>Cotizaciones</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"login-logo \">\n        <img src=\"assets/img/cotilogo.jpg\" alt=\"Ionic logo \">\n    </div>\n    <ion-card>\n        <ion-header>\n            <ion-row>\n                <ion-col>Comentario</ion-col>\n                <ion-col>Precio $</ion-col>\n                <ion-col></ion-col>\n            </ion-row>\n        </ion-header>\n       \n\n        <ion-grid>\n            <ion-row *ngFor=\"let cotizacion of cotizaciones | async\">\n                <ion-col>\n                    <p id=\"cot_comentario\">{{cotizacion.Comentario}}</p></ion-col>\n                    <ion-col>\n                        <p id=\"cot_precio\">{{cotizacion.Value_cotizar}}</p>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <ion-button expand=\"block\" color=\"warning\" (click)=\"Contacto(cotizacion.artesano)\">Contactar\n                            <ion-icon name=\"call-outline\"></ion-icon>\n                        </ion-button>\n                    </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n\n</ion-content>\n<footer>\n    <ion-button expand=\"block\" color=\"primary\" (click)=\"returnview()\">Regresar\n        <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\n    </ion-button>\n</footer>");

/***/ }),

/***/ "./src/app/components/lis-cotizaciones-cliente/lis-cotizaciones-cliente-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/lis-cotizaciones-cliente/lis-cotizaciones-cliente-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: LisCotizacionesClientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LisCotizacionesClientePageRoutingModule", function() { return LisCotizacionesClientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lis_cotizaciones_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lis-cotizaciones-cliente.page */ "./src/app/components/lis-cotizaciones-cliente/lis-cotizaciones-cliente.page.ts");




const routes = [
    {
        path: '',
        component: _lis_cotizaciones_cliente_page__WEBPACK_IMPORTED_MODULE_3__["LisCotizacionesClientePage"]
    }
];
let LisCotizacionesClientePageRoutingModule = class LisCotizacionesClientePageRoutingModule {
};
LisCotizacionesClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LisCotizacionesClientePageRoutingModule);



/***/ }),

/***/ "./src/app/components/lis-cotizaciones-cliente/lis-cotizaciones-cliente.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/lis-cotizaciones-cliente/lis-cotizaciones-cliente.module.ts ***!
  \****************************************************************************************/
/*! exports provided: LisCotizacionesClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LisCotizacionesClientePageModule", function() { return LisCotizacionesClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _lis_cotizaciones_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lis-cotizaciones-cliente-routing.module */ "./src/app/components/lis-cotizaciones-cliente/lis-cotizaciones-cliente-routing.module.ts");
/* harmony import */ var _lis_cotizaciones_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lis-cotizaciones-cliente.page */ "./src/app/components/lis-cotizaciones-cliente/lis-cotizaciones-cliente.page.ts");







let LisCotizacionesClientePageModule = class LisCotizacionesClientePageModule {
};
LisCotizacionesClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lis_cotizaciones_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["LisCotizacionesClientePageRoutingModule"]
        ],
        declarations: [_lis_cotizaciones_cliente_page__WEBPACK_IMPORTED_MODULE_6__["LisCotizacionesClientePage"]]
    })
], LisCotizacionesClientePageModule);



/***/ }),

/***/ "./src/app/components/lis-cotizaciones-cliente/lis-cotizaciones-cliente.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/lis-cotizaciones-cliente/lis-cotizaciones-cliente.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzLWNvdGl6YWNpb25lcy1jbGllbnRlL2xpcy1jb3RpemFjaW9uZXMtY2xpZW50ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/lis-cotizaciones-cliente/lis-cotizaciones-cliente.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/lis-cotizaciones-cliente/lis-cotizaciones-cliente.page.ts ***!
  \**************************************************************************************/
/*! exports provided: LisCotizacionesClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LisCotizacionesClientePage", function() { return LisCotizacionesClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_model_cotizacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/cotizacion */ "./src/app/model/cotizacion.ts");
/* harmony import */ var src_app_services_cotizacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cotizacion.service */ "./src/app/services/cotizacion.service.ts");
/* harmony import */ var src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notificaciones.service */ "./src/app/services/notificaciones.service.ts");






let LisCotizacionesClientePage = class LisCotizacionesClientePage {
    constructor(route, router, cotizacionService, notificacionesService) {
        this.route = route;
        this.router = router;
        this.cotizacionService = cotizacionService;
        this.notificacionesService = notificacionesService;
        this.cotizacion = new src_app_model_cotizacion__WEBPACK_IMPORTED_MODULE_3__["Cotizacion"]();
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.obra = this.router.getCurrentNavigation().extras.state.obra;
                console.log(this.obra);
            }
        });
    }
    ngOnInit() {
        this.cotizaciones = this.cotizacionService.getCotizacionesCliente(this.obra);
    }
    returnview() {
        this.router.navigate(['view-cliente']);
    }
    Contacto(string) {
        let navigationExtras = {
            state: {
                artesano: string,
                obra: this.obra
            }
        };
        this.router.navigate(['/contact-artesano'], navigationExtras);
    }
};
LisCotizacionesClientePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_cotizacion_service__WEBPACK_IMPORTED_MODULE_4__["CotizacionService"] },
    { type: src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__["NotificacionesService"] }
];
LisCotizacionesClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lis-cotizaciones-cliente',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lis-cotizaciones-cliente.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lis-cotizaciones-cliente/lis-cotizaciones-cliente.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lis-cotizaciones-cliente.page.scss */ "./src/app/components/lis-cotizaciones-cliente/lis-cotizaciones-cliente.page.scss")).default]
    })
], LisCotizacionesClientePage);



/***/ })

}]);
//# sourceMappingURL=components-lis-cotizaciones-cliente-lis-cotizaciones-cliente-module-es2015.js.map