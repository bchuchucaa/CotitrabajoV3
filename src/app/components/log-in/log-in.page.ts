import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { NotificacionesService } from '../../services/notificaciones.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  cliente:Cliente= new Cliente();
  coincidenciasLogIn: Observable<any[]>;
  coincidencias:any;
  userInfo = null;
  email=null;
  givenname=null;
  familyname=null;
  
  constructor(private loadingCtrl: LoadingController,private route: ActivatedRoute, private router: Router,public clienteService:ClienteService,public notificacioneservice:NotificacionesService,private aSvc:AuthService ) { }

  ngOnInit() {

  }

  registroCliente(){
    this.router.navigate(['/registro-cliente']);
  }
  async loInCliente(){
    const loading = await this.loadingCtrl.create({
      message: 'Porfavor Espere..'
    });  
    await loading.present(); 
    console.log("correo ",this.cliente.correo,"contrasena ",this.cliente.contrasena);
   
   
  
    await this.clienteService.logInClient(this.cliente.correo,this.cliente.contrasena).then(data=> this.coincidencias=(JSON.parse(JSON.stringify(data))));
   
    let codigo=this.coincidencias['uid'];
    
   
   if(codigo!=null){
      const url='/view-cliente/'+ codigo;
      this.router.navigate([url]);
      
   }else{
    this.notificacioneservice.notificacionToast("No pudimos encontrar tu cuenta..!  :(");
    this.router.navigate(['/log-in']);
  } 

  }


  async googleLogin() {
    const googleUser = await Plugins.GoogleAuth.signIn() as any;
    const givenName = 'given_name';
    const familyName = 'family_name';
    const email = 'email';
    const id = 'id';
    const correos=googleUser['email'];
    const password=googleUser['id'];
    await this.clienteService.logInClient(correos,password).then(data=> this.coincidencias=(JSON.parse(JSON.stringify(data))));
    
    let codigo=this.coincidencias['uid'];
    if(codigo!=null){
      localStorage.setItem("uid", codigo);
        const url='/view-cliente/'+ codigo;
        this.router.navigate([url]); 
 
     }else{
      this.notificacioneservice.notificacionToast("No pudimos encontrar tu cuenta..!  :(");
      this.router.navigate(['/log-in']);
    }   
   // this.aSvc.login(this.userInfo.email);  
  }
  
}
