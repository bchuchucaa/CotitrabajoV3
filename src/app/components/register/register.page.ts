import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/shared/user.interface';
import { AuthService } from '../../services/auth.service';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  cliente:Cliente= new Cliente();
  constructor(private authSvc:AuthService,private router:Router,public clienteService:ClienteService ) { }

  ngOnInit() {
  }

  async onRegister(email, password){
   try {
     const user = await this.authSvc.register(email.value,password.value);
     if(user){
       //Check email verified
       console.log('User' ,user);
       const isVerified = this.authSvc.isEmailVerified(user);
       this.redirectUser(isVerified,user);
       //Todo: CheckEmail


     }
   } catch (error) {
     console.log(error);
   }

  }
  private redirectUser(isVerified:boolean,user:User){
    /// redirect -> view client
    ///ELSE verified your email
    if(isVerified){
  let navigationExtras: NavigationExtras = {
    queryParams: {
      uid: user.uid, 
    }
  };

  this.router.navigate(['/view-cliente'], navigationExtras);

   }else{
     this.router.navigate(['verify-email']); 
  } 

  }

  async googleSignup() {
    const googleUser = await Plugins.GoogleAuth.signIn() as any;
    console.log('my user: ', googleUser);
      this.cliente.nombres= googleUser['givenName'];
      this.cliente.apellidos= googleUser['familyName'];
      this.cliente.correo= googleUser['email'];
      this.cliente.contrasena=googleUser['id'];
      this.cliente.idgoogle=googleUser['id'];
      this.clienteService.saveCliente(this.cliente);
      this.router.navigate(['log-in']);
   // this.aSvc.login(this.userInfo.email);
    
  }
  async registerClient(email,passowrd){
    this.cliente.correo=email.value;
    this.cliente.contrasena=passowrd.value;
    this.clienteService.saveCliente(this.cliente);
      this.router.navigate(['log-in']);
  }


}
