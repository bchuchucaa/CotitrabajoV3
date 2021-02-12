import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cotizacion } from '../model/cotizacion';
@Injectable({
  providedIn: 'root'
})
export class CotizacionService {
  constructor(public afs:AngularFirestore) { }

  //Metodo para guardar cotizaciones
  saveCotizacion(cotizacion:Cotizacion){
    const refCliente = this.afs.collection("cotizaciones");
    if(cotizacion.uid==null){
      cotizacion.uid=this.afs.createId();
     
    }
    refCliente.doc(cotizacion.uid).set(Object.assign({},cotizacion),{merge: true})
  }

   //Metodo para listar las cotizaciones de la obra  del cliente
   getCotizacionesCliente(uid:string): Observable<any[]>{
    return this.afs.collection("cotizaciones",
            ref => ref.where("obra", "==", uid)).valueChanges();
  }

    //Metodo para listar las cotizaciones de la obra  del artesano
    getCotizacionesArtesano(obra: string, artesano: string): Observable<any>{
      return this.afs.collection('cotizaciones', ref =>
          ref.where('obra', '==', obra).where('artesano', '==', artesano))
          .valueChanges();
    }



}