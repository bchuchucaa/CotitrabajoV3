(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-crear-obra-crear-obra-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/crear-obra/crear-obra.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/crear-obra/crear-obra.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Large title -->\n<ion-toolbar>\n    <ion-title size=\"large\">Crea tu Obra</ion-title>\n</ion-toolbar>\n\n\n<ion-content>\n    <ion-item>\n        <ion-input placeholder=\"Ingresa un titulo\" [(ngModel)]=\"obra.titulo\">Titulo: </ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input placeholder=\"Ingresa una descripcion de tu obra\" [(ngModel)]=\"obra.descripcion\">Descipcion: </ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Selecciona una categoria</ion-label>\n        <ion-select class=\"custom-options\" [(ngModel)]=\"obra.categoria\">\n            <ion-select-option value=\"CARPINTERIA\">CARPINTERIA</ion-select-option>\n            <ion-select-option value=\"INDUSTRIAL\">INDUSTRIAL</ion-select-option>\n            <ion-select-option value=\"PLOMERIA\">PLOMERIA</ion-select-option>\n            <ion-select-option value=\"ARQUITECTURA\">ARQUITECTURA</ion-select-option>\n        </ion-select>\n    </ion-item>\n\n\n</ion-content>\n<ion-card class=\"ion-text-center\" *ngIf=\"!isUploading && !isUploaded\">\n    <ion-card-header>\n        <ion-card-title>Choose Images to Upload</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n        <ion-button color=\"success\" shape=\"round\" size=\"large\">\n            <span>Select Image</span>\n            <input id=\"uploadBtn\" type=\"file\" class=\"upload\" (change)=\"subirImagen($event.target.files)\" />\n        </ion-button>\n    </ion-card-content>\n</ion-card>\n<app-take-photo [source]=\"'photo'\"></app-take-photo>\n<footer>\n    <div style=\"margin-left: 25%;\">\n        <ion-button (click)=\"guardarObra()\" color=\" success \">Guardar</ion-button>\n        <ion-button color=\"danger \">Cancelar</ion-button>\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/take-photo/take-photo.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/take-photo/take-photo.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button color=\"dark\" (click)=\"tomarFoto()\" *ngIf=\"source=='photo'\">\n    <ion-icon name=\"camera-outline\"></ion-icon> Fotografia\n</ion-button>\n<ion-button color=\"dark\" icon=\"image-outline\" (click)=\"recuperarImgagen()\" *ngIf=\"source!=='photo'\">\n    <ion-icon name=\"image-outline\"></ion-icon> Galeria\n</ion-button>");

/***/ }),

/***/ "./src/app/components/crear-obra/crear-obra-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/crear-obra/crear-obra-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: CrearObraPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearObraPageRoutingModule", function() { return CrearObraPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _crear_obra_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-obra.page */ "./src/app/components/crear-obra/crear-obra.page.ts");




const routes = [
    {
        path: '',
        component: _crear_obra_page__WEBPACK_IMPORTED_MODULE_3__["CrearObraPage"]
    }
];
let CrearObraPageRoutingModule = class CrearObraPageRoutingModule {
};
CrearObraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearObraPageRoutingModule);



/***/ }),

/***/ "./src/app/components/crear-obra/crear-obra.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/crear-obra/crear-obra.module.ts ***!
  \************************************************************/
/*! exports provided: CrearObraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearObraPageModule", function() { return CrearObraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _take_photo_take_photo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../take-photo/take-photo.component */ "./src/app/components/take-photo/take-photo.component.ts");
/* harmony import */ var _crear_obra_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-obra-routing.module */ "./src/app/components/crear-obra/crear-obra-routing.module.ts");
/* harmony import */ var _crear_obra_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crear-obra.page */ "./src/app/components/crear-obra/crear-obra.page.ts");








let CrearObraPageModule = class CrearObraPageModule {
};
CrearObraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_obra_routing_module__WEBPACK_IMPORTED_MODULE_6__["CrearObraPageRoutingModule"]
        ],
        declarations: [_crear_obra_page__WEBPACK_IMPORTED_MODULE_7__["CrearObraPage"], _take_photo_take_photo_component__WEBPACK_IMPORTED_MODULE_5__["TakePhotoComponent"]]
    })
], CrearObraPageModule);



/***/ }),

/***/ "./src/app/components/crear-obra/crear-obra.page.scss":
/*!************************************************************!*\
  !*** ./src/app/components/crear-obra/crear-obra.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXItb2JyYS9jcmVhci1vYnJhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/crear-obra/crear-obra.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/crear-obra/crear-obra.page.ts ***!
  \**********************************************************/
/*! exports provided: CrearObraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearObraPage", function() { return CrearObraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_obra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/obra */ "./src/app/model/obra.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_obras_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/obras.service */ "./src/app/services/obras.service.ts");
/* harmony import */ var _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/notificaciones.service */ "./src/app/services/notificaciones.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






//IMPORT TO UPLOAD IMAGES BY SCORPION



let CrearObraPage = class CrearObraPage {
    constructor(storage, database, route, router, obraService, notificacionesService) {
        this.storage = storage;
        this.database = database;
        this.route = route;
        this.router = router;
        this.obraService = obraService;
        this.notificacionesService = notificacionesService;
        this.obra = new _model_obra__WEBPACK_IMPORTED_MODULE_2__["Obra"]();
        this.uidCliente = this.route.snapshot.paramMap.get('uid');
        console.log("consultando ", this.uidCliente);
        obraService: _services_obras_service__WEBPACK_IMPORTED_MODULE_4__["ObrasService"];
        this.isUploaded = false;
        this.isUploading = false;
        this.imageCollection = database.collection('freakyImages');
        this.images = this.imageCollection.valueChanges();
    }
    ngOnInit() {
    }
    guardarObra() {
        console.log(this.uidCliente);
        try {
            this.obra.codigocliente = this.uidCliente;
            this.obra.idImgObra = this.idImgObra;
            console.log('id IMagen conseguida');
            console.log(this.idImgObra);
            this.obraService.saveObra(this.obra);
            this.notificacionesService.notificacionToast("Tu obra se creo correctamente..!  :)");
            const url = '/view-cliente/' + this.uidCliente;
            console.log('Sending this route ' + url);
            this.router.navigate([url]);
        }
        catch (error) {
            console.error("Error tratando de guardar la obra", error);
            throw error;
        }
    }
    subirImagen(event) {
        const file = event.item(0);
        if (file.type.split('/')[0] !== 'image') {
            console.log("Error formato desconocido :(");
            return;
        }
        this.isUploading = true;
        this.isUploaded = false;
        this.fileName = file.name;
        const path = `freakyStorage/${new Date().getTime()}_${file.name}`;
        const customMetadata = { app: 'Freaky Image Upload Demo' };
        const fileRef = this.storage.ref(path);
        console.log(path);
        this.task = this.storage.upload(path, file, { customMetadata });
        console.log(path, file, { customMetadata });
        this.percentaje = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.UploadedFileURL = fileRef.getDownloadURL();
            console.log("ruta imagen subir " + this.UploadedFileURL);
            this.UploadedFileURL.subscribe(resp => {
                this.addImagetoDB({
                    name: file.name,
                    filepath: resp,
                    size: this.fileSize,
                });
                this.isUploading = false;
                this.isUploaded = true;
            }, error => {
                console.error(error);
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(snap => {
            this.fileSize = snap.totalBytes;
        }));
    }
    addImagetoDB(image) {
        //Create an ID for document
        const id = this.database.createId();
        //Set document id with value in database
        this.imageCollection.doc(id).set(image).then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log("error " + error);
        });
    }
};
CrearObraPage.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_obras_service__WEBPACK_IMPORTED_MODULE_4__["ObrasService"] },
    { type: _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__["NotificacionesService"] }
];
CrearObraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-obra',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crear-obra.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/crear-obra/crear-obra.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crear-obra.page.scss */ "./src/app/components/crear-obra/crear-obra.page.scss")).default]
    })
], CrearObraPage);



/***/ }),

/***/ "./src/app/components/take-photo/take-photo.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/take-photo/take-photo.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFrZS1waG90by90YWtlLXBob3RvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/take-photo/take-photo.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/take-photo/take-photo.component.ts ***!
  \***************************************************************/
/*! exports provided: TakePhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakePhotoComponent", function() { return TakePhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let TakePhotoComponent = class TakePhotoComponent {
    constructor(camera, storage, loadingCtrl) {
        this.camera = camera;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.source = 'photo'; //posibilidades: photo, gallery
        this.imageSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.uploadFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    tomarFoto() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.imageData = base64Image;
            this.startUpload(imageData);
        }, (err) => {
            // Handle error
        });
    }
    recuperarImgagen() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.imageData = base64Image;
            this.startUpload(imageData);
            this.imageSelected.emit(base64Image);
        }, (err) => {
            // Handle error
        });
    }
    startUpload(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let byteCharacters = atob(file);
            const path = `images/${new Date().getTime()}.jpg`;
            let image = 'data:image/jpg;base64,' + file;
            const data = {
                ref: path,
                type: 'image',
                url: null,
                name: 'image',
                size: this.fileSize(Number(byteCharacters.length))
            };
            try {
                let ref = this.storage.ref(path);
                let task = ref.putString(image, 'data_url');
                const loading = yield this.loadingCtrl.create({
                    message: 'Espere, subiendo fotografía...'
                });
                yield loading.present();
                //Listener de progreso de carga
                task.percentageChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(val => val === 100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(complete => {
                    setTimeout(() => {
                        loading.dismiss();
                    }, 3500);
                })).subscribe();
                task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
                    let downloadURL = ref.getDownloadURL();
                    downloadURL.subscribe(url => {
                        data.url = url;
                        console.log("donload terminado " + url);
                        this.uploadFinished.emit(data);
                    });
                }))
                    .subscribe();
            }
            catch (error) {
                console.error(JSON.stringify(error));
                console.error("error ");
            }
        });
    }
    /**
     * Redondea un número de bytes a un tamaño legible
     * @param sizeInBytes Número de bytes
     */
    fileSize(sizeInBytes) {
        const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
        power = Math.min(power, units.length - 1);
        const size = sizeInBytes / Math.pow(1024, power); // size in new units
        const formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
        const unit = units[power];
        return size ? `${formattedSize} ${unit}` : '0';
    }
};
TakePhotoComponent.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
TakePhotoComponent.propDecorators = {
    source: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    imageSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    uploadFinished: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
TakePhotoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-take-photo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./take-photo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/take-photo/take-photo.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./take-photo.component.scss */ "./src/app/components/take-photo/take-photo.component.scss")).default]
    })
], TakePhotoComponent);



/***/ }),

/***/ "./src/app/model/obra.ts":
/*!*******************************!*\
  !*** ./src/app/model/obra.ts ***!
  \*******************************/
/*! exports provided: Obra */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Obra", function() { return Obra; });
class Obra {
}


/***/ })

}]);
//# sourceMappingURL=components-crear-obra-crear-obra-module-es2015.js.map