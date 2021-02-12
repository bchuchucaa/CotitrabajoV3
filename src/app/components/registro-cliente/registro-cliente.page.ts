import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { NotificacionesService } from '../../services/notificaciones.service';


@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.page.html',
  styleUrls: ['./registro-cliente.page.scss'],
})
export class RegistroClientePage implements OnInit {
  cliente: Cliente = new Cliente();

  constructor(private route: ActivatedRoute, private router: Router,public clienteService: ClienteService,public notificacionesService: NotificacionesService) { 
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
}