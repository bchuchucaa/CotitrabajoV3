import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Proveedor1Service {

  constructor(public http:HttpClient) { 
    console.log('Hello Proveedor1Provider Provider');
  }



  obtenerDatos(){
    return this.http.get('https://jsonplaceholder.typicode.com/users'); 
  
  }
  getPhotos(){
    return this.http.get('https://pixabay.com/api/?key=19953914-8bfb353c839dfab77d40934cd&q=yellow+flowers&image_type=photo');
  }
  
}

