(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-registro-artesano-registro-artesano-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro-artesano/registro-artesano.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro-artesano/registro-artesano.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Registro Artesano</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <form #signupForm=\"ngForm\" novalidate>\n        <ion-list lines=\"none\">\n            <ion-item>\n                <ion-label position=\"stacked\" color=\"primary\">CEDULA</ion-label>\n                <ion-input [(ngModel)]=\"artesano.cedula\" name=\"cedula \" type=\"text \" required>\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked \" color=\"primary \">NOMBRES</ion-label>\n                <ion-input [(ngModel)]=\"artesano.nombres \" name=\"nombres \" type=\"text \" required>\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked \" color=\"primary \">APELLIDOS</ion-label>\n                <ion-input [(ngModel)]=\"artesano.apellidos \" name=\"apellidos \" type=\"text \" required>\n                </ion-input>\n            </ion-item>\n\n\n            <ion-item>\n                <ion-label position=\"stacked \" color=\"primary \">CORREO</ion-label>\n                <ion-input [(ngModel)]=\"artesano.correo \" name=\"correo\" type=\"text\" required>\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked \" color=\"primary \">CONTRASENA</ion-label>\n                <ion-input [(ngModel)]=\"artesano.contrasenia \" name=\"contrasena \" type=\"password \" required>\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked \" color=\"primary \">CELULAR</ion-label>\n                <ion-input [(ngModel)]=\"artesano.celular\" name=\"correo\" type=\"text\" required>\n                </ion-input>\n            </ion-item>\n        </ion-list>\n        <div>\n            <ion-item>\n                <ion-label>Selecciona una categoria</ion-label>\n                <ion-select class=\"custom-options\" [(ngModel)]=\"artesano.area\" name=\"area\">\n                    <ion-select-option value=\"CARPINTERIA\">CARPINTERIA</ion-select-option>\n                    <ion-select-option value=\"INDUSTRIAL\">INDUSTRIAL</ion-select-option>\n                    <ion-select-option value=\"PLOMERIA\">PLOMERIA</ion-select-option>\n                    <ion-select-option value=\"ARQUITECTURA\">ARQUITECTURA</ion-select-option>\n                </ion-select>\n            </ion-item>\n        </div>\n\n    </form>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-button (click)=\"saveArtesano()\" type=\"submit\" expand=\"block\"> REGISTRARME </ion-button>\n            </ion-col>\n            <ion-col>\n\n                <ion-button (click)=\"saveArtesanoByGoogle()\" type=\"submit\" expand=\"block\" color=\"danger\">\n                    <ion-icon name=\"logo-google\"></ion-icon>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/components/registro-artesano/registro-artesano-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/registro-artesano/registro-artesano-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: RegistroArtesanoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroArtesanoPageRoutingModule", function() { return RegistroArtesanoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registro_artesano_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro-artesano.page */ "./src/app/components/registro-artesano/registro-artesano.page.ts");




const routes = [
    {
        path: '',
        component: _registro_artesano_page__WEBPACK_IMPORTED_MODULE_3__["RegistroArtesanoPage"]
    }
];
let RegistroArtesanoPageRoutingModule = class RegistroArtesanoPageRoutingModule {
};
RegistroArtesanoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroArtesanoPageRoutingModule);



/***/ }),

/***/ "./src/app/components/registro-artesano/registro-artesano.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/registro-artesano/registro-artesano.module.ts ***!
  \**************************************************************************/
/*! exports provided: RegistroArtesanoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroArtesanoPageModule", function() { return RegistroArtesanoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registro_artesano_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-artesano-routing.module */ "./src/app/components/registro-artesano/registro-artesano-routing.module.ts");
/* harmony import */ var _registro_artesano_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-artesano.page */ "./src/app/components/registro-artesano/registro-artesano.page.ts");







let RegistroArtesanoPageModule = class RegistroArtesanoPageModule {
};
RegistroArtesanoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registro_artesano_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroArtesanoPageRoutingModule"]
        ],
        declarations: [_registro_artesano_page__WEBPACK_IMPORTED_MODULE_6__["RegistroArtesanoPage"]]
    })
], RegistroArtesanoPageModule);



/***/ }),

/***/ "./src/app/components/registro-artesano/registro-artesano.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/registro-artesano/registro-artesano.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cm8tYXJ0ZXNhbm8vcmVnaXN0cm8tYXJ0ZXNhbm8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/registro-artesano/registro-artesano.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/registro-artesano/registro-artesano.page.ts ***!
  \************************************************************************/
/*! exports provided: RegistroArtesanoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroArtesanoPage", function() { return RegistroArtesanoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_model_artesano__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/artesano */ "./src/app/model/artesano.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_artesano_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/artesano.service */ "./src/app/services/artesano.service.ts");
/* harmony import */ var _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/notificaciones.service */ "./src/app/services/notificaciones.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");







let RegistroArtesanoPage = class RegistroArtesanoPage {
    constructor(route, router, artesanoService, notificationService) {
        this.route = route;
        this.router = router;
        this.artesanoService = artesanoService;
        this.notificationService = notificationService;
        this.artesano = new src_app_model_artesano__WEBPACK_IMPORTED_MODULE_2__["Artesano"]();
    }
    ngOnInit() {
    }
    saveArtesano() {
        try {
            this.artesanoService.saveArtesano(this.artesano);
            this.notificationService.notificacionToast("Te has registrado correctamente..!  :)");
            this.router.navigate(['/log-in-artesano']);
            console.log('Se ha guardado correctamente');
        }
        catch (error) {
            console.log('No se ha podido guardar Artesano', error);
            throw error;
        }
    }
    saveArtesanoByGoogle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userGoogle = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].GoogleAuth.signIn();
            let bandera = false;
            this.artesanoService.getArtesanoByUid(userGoogle['id']).subscribe(data => {
                if (data.length === 0) {
                    this.artesano.uid = userGoogle['id'];
                    this.artesano.nombres = userGoogle['givenName'];
                    this.artesano.apellidos = userGoogle['familyName'];
                    this.artesano.correo = userGoogle['email'];
                    this.artesano.contrasenia = userGoogle['id'];
                    this.artesano.nombres = userGoogle['givenName'];
                    const navigationExtras = {
                        state: {
                            artesano: this.artesano
                        }
                    };
                    this.router.navigate(['/completar-register'], navigationExtras);
                    bandera = true;
                }
                else if (data.length > 0 && bandera === false) {
                    console.log('esta entrando aqui');
                    this.notificationService.notificacionToast('Esta cuenta se encuentra ya vinculada');
                    bandera = true;
                }
            });
        });
    }
};
RegistroArtesanoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_artesano_service__WEBPACK_IMPORTED_MODULE_4__["ArtesanoService"] },
    { type: _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__["NotificacionesService"] }
];
RegistroArtesanoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro-artesano',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registro-artesano.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro-artesano/registro-artesano.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registro-artesano.page.scss */ "./src/app/components/registro-artesano/registro-artesano.page.scss")).default]
    })
], RegistroArtesanoPage);



/***/ })

}]);
//# sourceMappingURL=components-registro-artesano-registro-artesano-module-es2015.js.map