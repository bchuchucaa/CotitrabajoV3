import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cotizacion } from 'src/app/model/cotizacion';
import { CotizacionService } from 'src/app/services/cotizacion.service';
import { NotificacionesService } from 'src/app/services/notificaciones.service';

@Component({
  selector: 'app-lis-cotizaciones-cliente',
  templateUrl: './lis-cotizaciones-cliente.page.html',
  styleUrls: ['./lis-cotizaciones-cliente.page.scss'],
})
export class LisCotizacionesClientePage implements OnInit {

  
  obra: string;
  cotizacion: Cotizacion = new Cotizacion();
  cotizaciones: Observable<any[]>;
  constructor(private route: ActivatedRoute, private router: Router,private cotizacionService: CotizacionService,public notificacionesService: NotificacionesService) { 

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.obra = this.router.getCurrentNavigation().extras.state.obra;
        console.log(this.obra);
      
      }
    });
  }

  ngOnInit() {
    this.cotizaciones = this.cotizacionService.getCotizacionesCliente(this.obra);
  }

}
