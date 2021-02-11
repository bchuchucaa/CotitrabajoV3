import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import { AngularFireAuth} from '@angular/fire/auth';
import auth from 'firebase/app';

import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore'
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$:Observable<User>;

  constructor(public afaAuth:AngularFireAuth, private afs:AngularFirestore) { 
    this.user$ = this.afaAuth.authState.pipe(
      switchMap((user) => {
        if(user){
          this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }

  async loginGoogle():Promise<User>{
    try {
      const {user} = await this.afaAuth.signInWithPopup(new auth.auth.GoogleAuthProvider());
      return user;
    } catch (error) {
      console.log('error ',error);
    }

  }

  async resetPassword(email:string):Promise<void>{
      
    try {
      return this.afaAuth.sendPasswordResetEmail(email);   
    } catch (error) {
      console.log('error ',error);
    }
  }

  
  async login(email:string,password:string):Promise<User>{
    try {
      const {user}= await this.afaAuth.signInWithEmailAndPassword(email,password);
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log('Error -> ',error);
    }

  }
  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afaAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }
  async sendVerificationEmail():Promise<void>{
    try {
      return (await this.afaAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log('Error ', error);
    }
    

  }
  isEmailVerified(user: User):boolean{
    return user.emailVerified === true ? true : false;
  }
  async logout():Promise<void>{
    try {
      await this.afaAuth.signOut();
      
    } catch (error) {
      console.log('Error ->',error);
    }

  }
  private updateUserData(user:User){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data:User = {
      uid:user.uid,
      email:user.email,
      emailVerified:user.emailVerified,
      displayName:user.displayName,
    };
    return userRef.set(data, {merge:true});
  }
}

