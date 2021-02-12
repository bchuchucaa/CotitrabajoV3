import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cotizacion } from 'src/app/model/cotizacion';
import { CotizacionService } from 'src/app/services/cotizacion.service';
import { NotificacionesService } from 'src/app/services/notificaciones.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.page.html',
  styleUrls: ['./cotizacion.page.scss'],
})
export class CotizacionPage implements OnInit {

  uid: String;
  obra: String;
  cotizacion: Cotizacion = new Cotizacion();

  constructor(private route: ActivatedRoute, private router: Router,private cotizacionService: CotizacionService,public notificacionesService: NotificacionesService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.obra = this.router.getCurrentNavigation().extras.state.obra,
        this.uid = this.router.getCurrentNavigation().extras.state.uid;
        console.log(this.obra);
        console.log(this.uid);

      }
    });

   }

   guardarCotizacion(){
     this.cotizacion.obra = this.obra;
     this.cotizacion.artesano = this.uid;
    console.log(this.cotizacion);
    try{
    this.cotizacionService.saveCotizacion(this.cotizacion);
    this.notificacionesService.notificacionToast("Se ha emviado tu cotizacion correctamente!");
  }catch(error){
    console.error("Error tratando de emviar la cotizacion", error);
    throw error;
  
  }
  }
  

  ngOnInit() {
  }

}
