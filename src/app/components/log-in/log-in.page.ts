import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { NotificacionesService } from '../../services/notificaciones.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  cliente:Cliente= new Cliente();
  coincidenciasLogIn: Observable<any[]>;
  coincidencias:any;
  constructor(private route: ActivatedRoute, private router: Router,public clienteService:ClienteService,public notificacioneservice:NotificacionesService ) { }

  ngOnInit() {

  }

  registroCliente(){
    this.router.navigate(['/registro-cliente']);
  }
  loInCliente(){
    console.log("correo ",this.cliente.correo,"contrasena ",this.cliente.contrasena);
   
    
    this.clienteService.logInClient(this.cliente.correo,this.cliente.contrasena).then(data=> this.coincidencias=(JSON.parse(JSON.stringify(data))));
   
    let codigo=this.coincidencias['uid'];
   
   if(codigo!=null){
      const url='/view-cliente/'+ codigo;
      this.router.navigate([url]);
   }else{
    this.notificacioneservice.notificacionToast("No pudimos encontrar tu cuenta..!  :(");
    this.router.navigate(['/log-in']);
  } 

  }
}
