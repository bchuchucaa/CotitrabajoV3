(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-view-cliente-view-cliente-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-cliente/view-cliente.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-cliente/view-cliente.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n    <ion-header translucent>\n        <ion-toolbar>\n            <ion-buttons slot=\"start\">\n                <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <ion-avatar slot=\"start\">\n                <img src=\"assets/icon/iconlogo.png\" alt=\"Ionic logo\">\n            </ion-avatar>\n            <ion-title>CEC: MIS OBRAS</ion-title>\n            \n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content fullscreen>\n        <ion-row>\n            <ion-col>\n                <ion-button (click)=\"crearNuevaObra() \" color=\"warning\" expand=\"block\">Crear nueva obra</ion-button>\n            </ion-col>\n            <ion-col>\n                <ion-button (click)=\"singOut()\" color=\"dark\" expand=\"block\">Salir</ion-button>\n            </ion-col>\n\n\n        </ion-row>\n        \n        <ion-list>\n            \n            <ion-grid *ngFor=\" let obra of obras | async \" >\n                <ion-row>\n                    <ion-col><ion-img id=\"catalogImage\" [src]=\"obra.image?.url \"></ion-img></ion-col>\n                    <ion-col>\n                        <header class=\"productDesc\">TITULO</header>\n                        <h5 class=\"gridInfo\">{{ obra.titulo }}</h5>\n                        <header class=\"productDesc\">DESCRIPCION</header>\n                        <h5 class=\"gridInfo\">{{ obra.descripcion }}</h5>\n                        <header class=\"productDesc\">CATEGORIA</header>\n                        <h5 class=\"gridInfo\">{{ obra.categoria }}</h5>\n                        <ion-button (click)=\"editarObra(obra)\" color=\"secondary\" >Editar</ion-button>\n                        <ion-button (click)=\"confirmarBorrado(obra.uid)\" color=\"danger\">Eliminar</ion-button>\n                        <ion-button (click)=\"ListarCotizaciones(obra.uid)\" color=\"medium\" expand=\"block\">Cotizaciones</ion-button>\n                       \n\n                    </ion-col>\n                        \n\n                </ion-row>\n               \n            </ion-grid>\n\n            <ion-card>\n                <ion-item-sliding *ngFor=\" let obra of obras | async \">\n\n                    <ion-item>\n\n                        <ion-avatar>\n                            <ion-img [src]=\"obra.image?.url \"></ion-img>\n                        </ion-avatar>\n\n                        <ion-label (click)=\"editarContactoById(obra.uid) \">\n                            <h2>{{ obra.titulo }}</h2>\n                            <h3>{{ obra.descripcion }}</h3>\n                            <p>{{ obra.categoria }}</p>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item-options>\n                        <ion-item-option color=\"primary \" (click)=\"editarObra(obra)\">\n                            <ion-icon name=\"create-outline\"></ion-icon>\n                        </ion-item-option>\n                        <ion-item-option color=\"primary\" (click)=\"ListarCotizaciones(obra.uid)\">\n                            <ion-icon name=\"cash-outline\"></ion-icon>\n                        </ion-item-option>\n                        <ion-item-option color=\"secondary \" (click)=\"confirmarBorrado(obra.uid) \">\n                            <ion-icon name=\"trash-outline\"></ion-icon>\n                        </ion-item-option>\n                    </ion-item-options>\n                </ion-item-sliding>\n            </ion-card>\n\n        </ion-list>\n\n    </ion-content>\n    <footer>\n       \n\n    </footer>\n</ion-app>");

/***/ }),

/***/ "./src/app/components/view-cliente/view-cliente-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/view-cliente/view-cliente-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ViewClientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClientePageRoutingModule", function() { return ViewClientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _view_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-cliente.page */ "./src/app/components/view-cliente/view-cliente.page.ts");




const routes = [
    {
        path: '',
        component: _view_cliente_page__WEBPACK_IMPORTED_MODULE_3__["ViewClientePage"]
    }
];
let ViewClientePageRoutingModule = class ViewClientePageRoutingModule {
};
ViewClientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewClientePageRoutingModule);



/***/ }),

/***/ "./src/app/components/view-cliente/view-cliente.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/view-cliente/view-cliente.module.ts ***!
  \****************************************************************/
/*! exports provided: ViewClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClientePageModule", function() { return ViewClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _view_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-cliente-routing.module */ "./src/app/components/view-cliente/view-cliente-routing.module.ts");
/* harmony import */ var _view_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-cliente.page */ "./src/app/components/view-cliente/view-cliente.page.ts");







let ViewClientePageModule = class ViewClientePageModule {
};
ViewClientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewClientePageRoutingModule"]
        ],
        declarations: [_view_cliente_page__WEBPACK_IMPORTED_MODULE_6__["ViewClientePage"]]
    })
], ViewClientePageModule);



/***/ }),

/***/ "./src/app/components/view-cliente/view-cliente.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/view-cliente/view-cliente.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".productDesc {\n  color: grey;\n  font-size: 12px;\n}\n\n.gridInfo {\n  font-size: 15px;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LWNsaWVudGUvdmlldy1jbGllbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsNkVBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy1jbGllbnRlL3ZpZXctY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdERlc2N7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmdyaWRJbmZve1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/components/view-cliente/view-cliente.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/view-cliente/view-cliente.page.ts ***!
  \**************************************************************/
/*! exports provided: ViewClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClientePage", function() { return ViewClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_obras_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/obras.service */ "./src/app/services/obras.service.ts");
/* harmony import */ var src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notificaciones.service */ "./src/app/services/notificaciones.service.ts");





let ViewClientePage = class ViewClientePage {
    constructor(route, router, obrasService, notificacionesService) {
        this.route = route;
        this.router = router;
        this.obrasService = obrasService;
        this.notificacionesService = notificacionesService;
        this.uid = localStorage.getItem("uid");
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (this.router.getCurrentNavigation().extras.queryParams) {
                this.uid = this.router.getCurrentNavigation().extras.queryParams.uid;
            }
        });
        this.obras = this.obrasService.getObrasCliente(this.uid);
    }
    ngOnInit() {
    }
    crearNuevaObra() {
        this.verificarSesion();
        const url = '/crear-obra/' + this.uid;
        console.log("Sending this route " + url);
        this.router.navigate([url]);
    }
    editarObra(obra) {
        this.verificarSesion();
        let navigationExtras = {
            queryParams: {
                obra: obra
            }
        };
        this.router.navigate(['/obra'], navigationExtras);
    }
    editarContactoById() {
    }
    borrarContacto(uid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.obrasService.borrarObra(uid);
            this.notificacionesService.notificacionToast("Obra borrada..!");
        });
    }
    confirmarBorrado(uid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.notificacionesService.confirmacion("Confirmar", "Esta seguro de borrar", this.borrarContacto.bind(this, uid));
        });
    }
    singOut() {
        localStorage.setItem("uid", "");
        this.router.navigate(['log-in']);
    }
    verificarSesion() {
        if (this.uid == null || this.uid == "") {
            this.router.navigate(['log-in']);
        }
    }
    ListarCotizaciones(String) {
        let navigationExtras = {
            state: {
                obra: String
            }
        };
        this.router.navigate(['/lis-cotizaciones-cliente'], navigationExtras);
    }
};
ViewClientePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_obras_service__WEBPACK_IMPORTED_MODULE_3__["ObrasService"] },
    { type: src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_4__["NotificacionesService"] }
];
ViewClientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-cliente',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-cliente.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-cliente/view-cliente.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-cliente.page.scss */ "./src/app/components/view-cliente/view-cliente.page.scss")).default]
    })
], ViewClientePage);



/***/ })

}]);
//# sourceMappingURL=components-view-cliente-view-cliente-module-es2015.js.map