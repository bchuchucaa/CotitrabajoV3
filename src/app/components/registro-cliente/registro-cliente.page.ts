import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { NotificacionesService } from '../../services/notificaciones.service';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { User } from 'src/app/shared/user.interface';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.page.html',
  styleUrls: ['./registro-cliente.page.scss'],
})
export class RegistroClientePage implements OnInit {
  cliente: Cliente = new Cliente();
  userInfo = null;


  constructor(private authSvc:AuthService,private route: ActivatedRoute, private router: Router,public clienteService: ClienteService,public notificacionesService: NotificacionesService) { 
    clienteService: ClienteService;
    
  }

  ngOnInit() {
  }
guardarCliente(){
  console.log(this.cliente);
  try{
  this.clienteService.saveCliente(this.cliente);
  this.notificacionesService.notificacionToast("Te has registrado correctamente..!  :)");
  const url='/view-cliente/'+this.cliente.uid;
  console.log('Sending this route '+url);
  this.router.navigate([url]);
}catch(error){
  console.error("Error tratando de guardar el cliente", error);
  throw error;

}

}

async onRegister(email, password){
  try {
    const user = await this.authSvc.register(email.value,password.value);
    if(user){
      //Check email verified
      console.log('User' ,user);
      const isVerified = this.authSvc.isEmailVerified(user);
      //Todo: CheckEmail


    }
  } catch (error) {
    console.log(error);
  }

}
async onRegisterGoogle(email,password){
  try {
    const user = await this.authSvc.register(email.value,password.value);
    if(user){
      //Check email verified
      console.log('User' ,user);
      const isVerified = this.authSvc.isEmailVerified(user);
      //Todo: CheckEmail


    }
  } catch (error) {
    console.log(error);
  }

}


}