import { Component, OnInit } from '@angular/core';
import { Obra } from '../../model/obra';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ObrasService } from '../../services/obras.service';
import { NotificacionesService } from '../../services/notificaciones.service';
//IMPORT TO UPLOAD IMAGES BY SCORPION
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LocationService } from '../../services/location.service';
import { Localizacion } from '../../model/localizacion';
export interface MyData {
  name: string;
  filepath: string;
  size: number;
}



@Component({
  selector: 'app-crear-obra',
  templateUrl: './crear-obra.page.html',
  styleUrls: ['./crear-obra.page.scss'],
})
export class CrearObraPage implements OnInit {
  task: AngularFireUploadTask;
  percentaje: Observable<number>;
  snapshot: Observable<any>;
  UploadedFileURL: Observable<string>;
  images: Observable<MyData[]>;
  fileName:string;
  fileSize:number;
  isUploading:boolean;
  isUploaded:boolean;

  imgData: string;
  imgURL: string;
  //PARA EL MAPA
  current = {
    latitude: '',
    longitude: '',
    address: ''
  }

  newLocation = {
    latitude: '',
    longitude: '',
    address: ''
  }
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  private imageCollection: AngularFirestoreCollection<MyData>;

  uidCliente:string;
  idImgObra:string;

  obra :Obra =new Obra();
  constructor(private camera:Camera,private storage:AngularFireStorage,private database:AngularFirestore, private route: ActivatedRoute, private router: Router,public obraService:ObrasService,public notificacionesService: NotificacionesService,private locationService: LocationService) { 
    this.uidCliente=localStorage.getItem("uid")
    console.log("consultando ", this.uidCliente);
    obraService:ObrasService;
    this.isUploaded=false;
    this.isUploading=false;
    this.imageCollection = database.collection<MyData>('freakyImages');
    this.images = this.imageCollection.valueChanges();

  }

  async ngOnInit() {
    this.current = await this.locationService.getCurrentLocation();
   
  }

  guardarObra(){
    console.log(this.uidCliente);
    this.verificarSesion();
  
    try{
      this.obra.codigocliente=this.uidCliente;
      this.obra.latitude=this.newLocation.latitude;
      this.obra.longitud=this.newLocation.longitude;
      this.obra.address=this.newLocation.address;
      console.log(this.obra.image);
      this.obraService.saveObra(this.obra);
    
      let navigationExtras: NavigationExtras ={
        queryParams:{
          obra: this.obra,
        }
      };
      this.notificacionesService.notificacionToast("Tu obra se creo correctamente..!  :)");
      const url='/view-cliente/'+this.uidCliente;
      console.log('Sending this route '+url);
      this.router.navigate([url]);
    }catch(error){
      console.error("Error tratando de guardar la obra", error);
      throw error;
    
    }
  }
  subirImagen(event:FileList)
  {
    const file= event.item(0);
    if (file.type.split('/')[0]!=='image'){
      console.log("Error formato desconocido :(")
      return;
    }
    this.isUploading=true;
    this.isUploaded=false;
    this.fileName=file.name;
    const path =`freakyStorage/${new Date().getTime()}_${file.name}`;
    const customMetadata = {app:'Freaky Image Upload Demo'};
    const fileRef= this.storage.ref(path);
    console.log(path);
    this.task = this.storage.upload(path,file,{customMetadata});
    console.log(path,file,{customMetadata});
    this.percentaje = this.task.percentageChanges();
    this.snapshot=  this.task.snapshotChanges().pipe(
      finalize(() => {
        this.UploadedFileURL = fileRef.getDownloadURL();
        console.log("ruta imagen subir "+this.UploadedFileURL);
        this.UploadedFileURL.subscribe(resp=>{
          this.addImagetoDB({
            name:file.name,
            filepath:resp,
            size:this.fileSize,        
           

          });
          this.isUploading=false;
          this.isUploaded =true;

        },error =>{
          console.error(error);
        })
      }),
      tap(snap=>{
        this.fileSize = snap.totalBytes;
      })
    )

  }

  addImagetoDB(image: MyData) {
    //Create an ID for document
    const id = this.database.createId();
  
    //Set document id with value in database
    this.imageCollection.doc(id).set(image).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log("error " + error);
    });
  }
  tomarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     console.log(base64Image);
    }, (err) => {
     // Handle error
    });
  }
  imageSeleccionada(data){
    console.log("subiendo data imagen");
    console.log(data);
    this.imgData = data;
  }

  uploadFinished(data){
    console.log("upload finished");
    this.obra.image = data;
    console.log(this.obra.image);
    console.log("-----------------");
  }
  verificarSesion(){
    if(this.uidCliente==null || this.uidCliente==""){
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
  
}
