(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-crear-obra-crear-obra-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/crear-obra/crear-obra.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/crear-obra/crear-obra.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Large title -->\n<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n        <ion-title> PUBLICAR OBRA</ion-title>\n        <ion-avatar slot=\"start\">\n            <img src=\"assets/icon/iconlogo.png\" alt=\" Ionic logo \">\n        </ion-avatar>\n    </ion-toolbar>\n</ion-header>\n\n<!--<ion-button (click)=\"tomarFoto() \" color=\" success \">Fotografia</ion-button>-->\n\n\n<ion-content>\n<div class=\"container\">\n\n    <ion-card>\n        <div class=\"login-logo \">\n            <img src=\"assets/img/publica.jpg \" alt=\"Ionic logo \">\n        </div>\n        <ion-card-header>Datos de tu obra</ion-card-header>\n        <ion-item>\n            <ion-label>Titulo</ion-label>\n            <ion-input placeholder=\"Ingresa un titulo \" [(ngModel)]=\"obra.titulo \"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Descripcion</ion-label>\n            <ion-textarea placeholder=\"Ingresa una descripcion de tu obra \" [(ngModel)]=\"obra.descripcion \"></ion-textarea>\n        </ion-item>\n        <ion-item>\n            <ion-label>Selecciona una categoria</ion-label>\n            <ion-select class=\"custom-options \" [(ngModel)]=\"obra.categoria \">\n                <ion-select-option value=\"CARPINTERIA\">CARPINTERIA</ion-select-option>\n                <ion-select-option value=\"INDUSTRIAL\">INDUSTRIAL</ion-select-option>\n                <ion-select-option value=\"PLOMERIA\">PLOMERIA</ion-select-option>\n                <ion-select-option value=\"ARQUITECTURA\">ARQUITECTURA</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label>Sube una fotografia</ion-label>\n            <app-take-photo [source]=\"'gallery'\" (imageSelected)=\"imageSeleccionada($event)\" (uploadFinished)=\"uploadFinished($event)\"></app-take-photo>\n            <ion-card *ngIf=\"obra.image\">\n                <ion-img [src]=\"imgData\"></ion-img>\n                <ion-img [src]=\"obra.image?.url\"></ion-img>\n            </ion-card>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label>Selecciona la ubicacion de entrega</ion-label>\n        </ion-item>\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" (centerChange)=\"setNewLocation($event)\">\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"'https://cdn4.iconfinder.com/data/icons/essential-app-2/16/botton-on-launch-point-48.png'\">\n                <agm-info-window>UPS</agm-info-window>\n    \n            </agm-marker>\n    \n    \n            <agm-marker [latitude]=\"current.latitude\" [longitude]=\"current.longitude\" [iconUrl]=\"'https://cdn4.iconfinder.com/data/icons/essential-app-2/16/botton-on-launch-point-48.png'\">\n                <agm-info-window>{{current.address}}</agm-info-window>\n    \n            </agm-marker>\n    \n            <agm-marker [latitude]=\"newLocation.latitude\" [longitude]=\"newLocation.longitude\" [iconUrl]=\"'https://cdn2.iconfinder.com/data/icons/pointers-5/24/pointer-top-left-48.png'\">\n                <agm-info-window>{{newLocation.address}}</agm-info-window>\n    \n            </agm-marker>\n    \n    \n    \n    \n        </agm-map>\n    </ion-card>\n    <!--<app-take-photo [source]=\" 'photo' \" (imageSelected)=\"imageSeleccionada($event) \" (uploadFinished)=\"uploadFinished($event) \"></app-take-photo>\n    -->\n\n    \n    \n\n    <div style=\"margin: 5%;margin-left: 20%; \">\n        <ion-button (click)=\"guardarObra()\" color=\"warning\">Publicar\n            <ion-icon name=\"checkmark-done-circle-outline\"></ion-icon>\n        </ion-button>\n        <ion-button [routerLink]=\"['/view-cliente']\" color=\"medium\">Cancelar\n            <ion-icon name=\"trash-outline\"></ion-icon>\n        </ion-button>\n    </div>\n   \n\n</div>\n</ion-content>");

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
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");









let CrearObraPageModule = class CrearObraPageModule {
};
CrearObraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_obra_routing_module__WEBPACK_IMPORTED_MODULE_6__["CrearObraPageRoutingModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyC7lREbDALML3-f6Nj0lEwoFTMuWcmZdK4'
            })
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
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 300px;\n}\n\n.container {\n  padding: 2%;\n}\n\nion-toolbar {\n  background-color: grey;\n}\n\nion-card-header {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhci1vYnJhL2NyZWFyLW9icmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksc0JBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyZWFyLW9icmEvY3JlYXItb2JyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuLmNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAyJTtcbn1cbmlvbi10b29sYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5pb24tY2FyZC1oZWFkZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

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
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");






//IMPORT TO UPLOAD IMAGES BY SCORPION





let CrearObraPage = class CrearObraPage {
    constructor(camera, storage, database, route, router, obraService, notificacionesService, locationService) {
        this.camera = camera;
        this.storage = storage;
        this.database = database;
        this.route = route;
        this.router = router;
        this.obraService = obraService;
        this.notificacionesService = notificacionesService;
        this.locationService = locationService;
        //PARA EL MAPA
        this.current = {
            latitude: '',
            longitude: '',
            address: ''
        };
        this.newLocation = {
            latitude: '',
            longitude: '',
            address: ''
        };
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.obra = new _model_obra__WEBPACK_IMPORTED_MODULE_2__["Obra"]();
        this.uidCliente = localStorage.getItem("uid");
        console.log("consultando ", this.uidCliente);
        obraService: _services_obras_service__WEBPACK_IMPORTED_MODULE_4__["ObrasService"];
        this.isUploaded = false;
        this.isUploading = false;
        this.imageCollection = database.collection('freakyImages');
        this.images = this.imageCollection.valueChanges();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.current = yield this.locationService.getCurrentLocation();
        });
    }
    guardarObra() {
        console.log(this.uidCliente);
        this.verificarSesion();
        try {
            this.obra.estado = false;
            this.obra.codigocliente = this.uidCliente;
            this.obra.latitude = this.newLocation.latitude;
            this.obra.longitud = this.newLocation.longitude;
            this.obra.address = this.newLocation.address;
            console.log(this.obra.image);
            this.obraService.saveObra(this.obra);
            let navigationExtras = {
                queryParams: {
                    obra: this.obra,
                }
            };
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
                this.notificacionesService.notificacionToast("TU IMAGEN ESTA PROCESADA..!  :)");
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
    tomarFoto() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(base64Image);
        }, (err) => {
            // Handle error
        });
    }
    imageSeleccionada(data) {
        console.log("subiendo data imagen");
        console.log(data);
        this.imgData = data;
    }
    uploadFinished(data) {
        console.log("upload finished");
        this.obra.image = data;
        console.log(this.obra.image);
        console.log("-----------------");
    }
    verificarSesion() {
        if (this.uidCliente == null || this.uidCliente == "") {
            this.router.navigate(['log-in']);
        }
    }
    //para el mapa
    setNewLocation(event) {
        if (event) {
            this.newLocation.latitude = event.lat;
            this.newLocation.longitude = event.lng;
            this.locationService.getAddressOfLocation(this.newLocation);
        }
    }
};
CrearObraPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_obras_service__WEBPACK_IMPORTED_MODULE_4__["ObrasService"] },
    { type: _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__["NotificacionesService"] },
    { type: _services_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"] }
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



/***/ })

}]);
//# sourceMappingURL=components-crear-obra-crear-obra-module-es2015.js.map