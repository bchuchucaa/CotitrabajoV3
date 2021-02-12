import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Artesano} from '../model/Artesano';
import {Observable} from 'rxjs';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';
import {Platform} from '@ionic/angular';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ArtesanoService {

  artesano: Artesano = new Artesano();

  constructor(public angularfs: AngularFirestore, private google: GooglePlus, private aFAuth: AngularFireAuth,
              public platform: Platform, private router: Router) { }

  saveArtesano(artesano: Artesano){
    const refArtesano = this.angularfs.collection('artesanos');
    if (artesano.uid == null){
      artesano.uid = this.angularfs.createId();
      artesano.deleted = false;
    }
    refArtesano.doc(artesano.uid).set(Object.assign({}, artesano), {merge: true});
  }
  loginArtesano(correo: string, contrasenia: string): Observable<any>{
    return this.angularfs.collection('artesanos', ref =>
        ref.where('correo', '==', correo).where('contrasenia', '==', contrasenia))
        .valueChanges();
  }
  getObras(area: string): Observable<any[]>{
    return this.angularfs.collection('obras',
        ref => ref.where('categoria', '==', area).where('estado', '==', false)).valueChanges();
  }

  getObrasMias(area: string, uidobrero:string): Observable<any[]>{
    return this.angularfs.collection('obras',
        ref => ref.where('categoria', '==', area).where('estado', '==', true).where('codigoobrero', '==', uidobrero)).valueChanges();
  }

  loginWithGoogle(){
    if (this.platform.is('cordova')){
    return this.google.login({}).then(response => {
      const userDataGoogle = response;
      return this.aFAuth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(null, userDataGoogle.accessToken));
    }); } else {
      return this.aFAuth.signInWithPopup( new firebase.auth.GoogleAuthProvider);
      // return this.aFAuth.signInWithPopup( new firebase.auth.GoogleAuthProvider).then(response => {
      //
      //   this.artesano.nombres = response.additionalUserInfo.profile.given_name;
      //
      //   this.router.navigate(['/log-in-artesano']);
      //   console.log('Usario', response);
      //   console.log('Nombre de Google', this.artesano.nombres);
      // });
      //console.log('Hello');
    }

  }
}
