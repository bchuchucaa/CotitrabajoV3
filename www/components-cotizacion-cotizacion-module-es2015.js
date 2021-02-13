(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-cotizacion-cotizacion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cotizacion/cotizacion.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cotizacion/cotizacion.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>COTIZACION</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-card>\n        <form #signupForm=\"ngForm\" novalidate>\n            <ion-item>\n                <ion-label position=\"stacked\" color=\"primary\">Cotizacion</ion-label>\n                <ion-label>$</ion-label>\n                <ion-input [(ngModel)]=\"cotizacion.Value_cotizar\" name=\"cotizacion \" type=\"text \" placeholder=\"ejemplo:1150,50\" required>\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Comentario</ion-label>\n                <ion-input [(ngModel)]=\"cotizacion.Comentario\" name=\"cotizacion \" type=\"text \" required>\n                </ion-input>\n            </ion-item>\n\n            <agm-map>\n                <agm-marker [latitude]=\"obraparam.latitude\" [longitude]=\"obraparam.longitud\" [iconUrl]=\"'https://cdn4.iconfinder.com/data/icons/essential-app-2/16/botton-on-launch-point-48.png'\">\n                    <agm-info-window>Obra</agm-info-window>\n                </agm-marker>\n\n            </agm-map>\n\n            <div>\n                <ion-button (click)=\"guardarCotizacion()\" type=\"submit\" expand=\"block\">Enviar </ion-button>\n            </div>\n            <div>\n                <ion-button (click)=\"cancelar()\" type=\"submit\" color=\"danger\" expand=\"block\">Cancelar </ion-button>\n            </div>\n        </form>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/components/cotizacion/cotizacion-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/cotizacion/cotizacion-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: CotizacionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotizacionPageRoutingModule", function() { return CotizacionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cotizacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cotizacion.page */ "./src/app/components/cotizacion/cotizacion.page.ts");




const routes = [
    {
        path: '',
        component: _cotizacion_page__WEBPACK_IMPORTED_MODULE_3__["CotizacionPage"]
    }
];
let CotizacionPageRoutingModule = class CotizacionPageRoutingModule {
};
CotizacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CotizacionPageRoutingModule);



/***/ }),

/***/ "./src/app/components/cotizacion/cotizacion.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/cotizacion/cotizacion.module.ts ***!
  \************************************************************/
/*! exports provided: CotizacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotizacionPageModule", function() { return CotizacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cotizacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cotizacion-routing.module */ "./src/app/components/cotizacion/cotizacion-routing.module.ts");
/* harmony import */ var _cotizacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cotizacion.page */ "./src/app/components/cotizacion/cotizacion.page.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");








let CotizacionPageModule = class CotizacionPageModule {
};
CotizacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cotizacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["CotizacionPageRoutingModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCT9wzsIIAkW95uHWVvCbBEP-xtjNbJPow'
            })
        ],
        declarations: [_cotizacion_page__WEBPACK_IMPORTED_MODULE_6__["CotizacionPage"]]
    })
], CotizacionPageModule);



/***/ }),

/***/ "./src/app/components/cotizacion/cotizacion.page.scss":
/*!************************************************************!*\
  !*** ./src/app/components/cotizacion/cotizacion.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3RpemFjaW9uL2NvdGl6YWNpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3RpemFjaW9uL2NvdGl6YWNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/cotizacion/cotizacion.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/cotizacion/cotizacion.page.ts ***!
  \**********************************************************/
/*! exports provided: CotizacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotizacionPage", function() { return CotizacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_model_cotizacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/cotizacion */ "./src/app/model/cotizacion.ts");
/* harmony import */ var src_app_model_obra__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/obra */ "./src/app/model/obra.ts");
/* harmony import */ var src_app_services_cotizacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cotizacion.service */ "./src/app/services/cotizacion.service.ts");
/* harmony import */ var src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/notificaciones.service */ "./src/app/services/notificaciones.service.ts");







let CotizacionPage = class CotizacionPage {
    constructor(route, router, cotizacionService, notificacionesService) {
        this.route = route;
        this.router = router;
        this.cotizacionService = cotizacionService;
        this.notificacionesService = notificacionesService;
        this.cotizacion = new src_app_model_cotizacion__WEBPACK_IMPORTED_MODULE_3__["Cotizacion"]();
        this.obraparam = new src_app_model_obra__WEBPACK_IMPORTED_MODULE_4__["Obra"]();
        this.area = localStorage.getItem("area");
        this.uid = localStorage.getItem("artesano");
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.obra = this.router.getCurrentNavigation().extras.state.obra,
                    this.uid = this.router.getCurrentNavigation().extras.state.uid,
                    this.obraparam = this.router.getCurrentNavigation().extras.state.obraparam;
            }
        });
    }
    guardarCotizacion() {
        this.cotizacion.obra = this.obra;
        this.cotizacion.artesano = this.uid;
        this.cotizacion.deleted = false;
        console.log(this.cotizacion);
        try {
            this.cotizacionService.saveCotizacion(this.cotizacion);
            this.notificacionesService.notificacionToast("Se ha emviado tu cotizacion !");
            localStorage.setItem("area", this.area);
            this.router.navigate(['/view-artesano']);
        }
        catch (error) {
            console.error("Error tratando de emviar la cotizacion", error);
            throw error;
        }
    }
    cancelar() {
        localStorage.setItem("area", this.area);
        this.router.navigate(['/view-artesano']);
    }
    ngOnInit() {
    }
};
CotizacionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_cotizacion_service__WEBPACK_IMPORTED_MODULE_5__["CotizacionService"] },
    { type: src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_6__["NotificacionesService"] }
];
CotizacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cotizacion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cotizacion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cotizacion/cotizacion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cotizacion.page.scss */ "./src/app/components/cotizacion/cotizacion.page.scss")).default]
    })
], CotizacionPage);



/***/ })

}]);
//# sourceMappingURL=components-cotizacion-cotizacion-module-es2015.js.map