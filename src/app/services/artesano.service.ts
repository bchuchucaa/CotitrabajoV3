import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';
import {Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import { Artesano } from '../model/artesano';

@Injectable({
  providedIn: 'root'
})
export class ArtesanoService {
  artesano: Artesano = new Artesano();

  constructor(public angularfs: AngularFirestore, private aFAuth: AngularFireAuth,
              public platform: Platform, private router: Router) { }

  saveArtesano(artesano: Artesano){
    const refArtesano = this.angularfs.collection('artesanos');
    if (artesano.uid == null){
      artesano.uid = this.angularfs.createId();
    }
    artesano.deleted = false;
    refArtesano.doc(artesano.uid).set(Object.assign({}, artesano), {merge: true});
  }

  loginArtesano(correo: string, contrasenia: string): Observable<any>{
    return this.angularfs.collection('artesanos', ref =>
        ref.where('correo', '==', correo).where('contrasenia', '==', contrasenia))
        .valueChanges();
  }

  getObras(area: string): Observable<any[]>{
    return this.angularfs.collection('obras',
        ref => ref.where('categoria', '==', area)).valueChanges();
  }

  getArtesanoByUid(uid: string): Observable<any[]>{
    return this.angularfs.collection('artesanos',
        ref => ref.where('uid', '==', uid)).valueChanges();
  }

}
