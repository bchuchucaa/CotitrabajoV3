import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cotizacion } from 'src/app/model/cotizacion';
import { CotizacionService } from 'src/app/services/cotizacion.service';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
@Component({
  selector: 'app-lis-cotizaciones-artesano',
  templateUrl: './lis-cotizaciones-artesano.page.html',
  styleUrls: ['./lis-cotizaciones-artesano.page.scss'],
})
export class LisCotizacionesArtesanoPage implements OnInit {

  
  area : string;
  uid: string;
  obra: string;
  cotizacion: Cotizacion = new Cotizacion();
  cotizaciones: Observable<any[]>;
  volver: boolean = false;
  
  constructor(private route: ActivatedRoute, private router: Router,private cotizacionService: CotizacionService,public notificacionesService: NotificacionesService) {
    
    this.area=localStorage.getItem("area")
    this.uid=localStorage.getItem("artesano")

    console.log("Esta es la area",this.area);
    console.log("Esta es el artesano",this.uid);

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.obra = this.router.getCurrentNavigation().extras.state.obra,
        this.uid = this.router.getCurrentNavigation().extras.state.uid;
        console.log(this.obra);
        console.log(this.uid);

      }
    });
    
   }

  ngOnInit() {
    this.cotizaciones = this.cotizacionService.getCotizacionesArtesano(this.obra,this.uid);
    if (this.cotizaciones == null){
      this.notificacionesService.notificacionToast("Aun no has realizado ninguna cotizacion!");
      this.volver = true;
    }else{
      this.volver = false;
    }
  }

  volverCotizar(){
    localStorage.setItem("area", this.area);
    this.router.navigate(['/view-artesano']);
  }

  eliminar(string:any){
    this.cotizacionService.eliminarCotizacionArtesano(string);
    this.notificacionesService.notificacionToast("Se ha eliminado una cotizacion!");
    this.router.navigate(['/lis-cotizaciones-artesano']);


  }
}