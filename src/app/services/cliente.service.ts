import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouterLink } from '@angular/router';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  constructor(public afs:AngularFirestore) { }
  //Metodo para registrar Clientes
  saveCliente(cliente:Cliente){
    const refCliente = this.afs.collection("clientes");
    if(cliente.uid==null){
      cliente.uid=this.afs.createId();
      cliente.deleted=false;
    }
    refCliente.doc(cliente.uid).set(Object.assign({},cliente),{merge: true})
  }

  //Metodo para el logueo del cliente

  logInCliente(correo:string,contrasena:string): Observable<any[]>{
    console.log("this is mail of client "+correo);
    return this.afs.collection("clientes",
            ref => ref.where("correo", "==", correo).where("contrasena","==",contrasena)).valueChanges();
   
     
  }
  async logInClient(correo:string,contrasena:string){
    try{
      let aux = await this.afs.collection("clientes", 
          ref => ref.where('correo', '==', correo).where('contrasena', '==', contrasena))
                    .valueChanges().pipe(first()).toPromise().then(doc => {                    	  
                        return doc;
                    }).catch(error => {
                        throw error;
                    });
      if(aux==null)
          return {};
      return aux[0];
  }catch(error){
    console.error("Error lLog In", error);
    throw error;
  } 

   
     
  }
  
}
