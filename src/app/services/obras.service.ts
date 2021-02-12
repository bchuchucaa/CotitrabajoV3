import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Obra } from '../model/obra';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ObrasService {

  constructor(public afs:AngularFirestore) { }

  saveObra(obra: Obra){
    const refObra = this.afs.collection("obras");
    if(obra.uid==null){
      obra.uid=this.afs.createId();
      obra.codigoobrero=null;
    }
    refObra.doc(obra.uid).set(Object.assign({},obra),{merge: true})
  }

  //Metodo para listar las obras del cliente
  getObrasCliente(uid:string): Observable<any[]>{
    console.log("this is identifier of client "+uid);
    return this.afs.collection("obras",
            ref => ref.where("codigocliente", "==", uid)).valueChanges();
  }

     //metodo para guaradar uid artesano en obra
     finalizarObra(uid: string,uidartesano: string){
      const refObra = this.afs.collection("obras");
     const aux = {codigoobrero: uidartesano};
    refObra.doc(uid).set( {...aux}, { merge: true})
    }

}
