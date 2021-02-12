import { Component, OnInit } from '@angular/core';
import { Obra } from '../../model/obra';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ObrasService } from '../../services/obras.service';
import { NotificacionesService } from '../../services/notificaciones.service';

@Component({
  selector: 'app-crear-obra',
  templateUrl: './crear-obra.page.html',
  styleUrls: ['./crear-obra.page.scss'],
})
export class CrearObraPage implements OnInit {

  uidCliente:string;

  obra :Obra =new Obra();
  constructor(private route: ActivatedRoute, private router: Router,public obraService:ObrasService,public notificacionesService: NotificacionesService) { 
    this.uidCliente = this.route.snapshot.paramMap.get('uid');
    console.log("consultando ", this.uidCliente);
    obraService:ObrasService;
  }

  ngOnInit() {
  }

  guardarObra(){
    console.log(this.uidCliente);
  
    try{
      this.obra.estado=false;
      this.obra.codigocliente=this.uidCliente;
      this.obraService.saveObra(this.obra);
      this.notificacionesService.notificacionToast("Tu obra se creo correctamente..!  :)");
      const url='/view-cliente/'+this.uidCliente;
      console.log('Sending this route '+url);
      this.router.navigate([url]);
    }catch(error){
      console.error("Error tratando de guardar la obra", error);
      throw error;
    
    }
  }
}
