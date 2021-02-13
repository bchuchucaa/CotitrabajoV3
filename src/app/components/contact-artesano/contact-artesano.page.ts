import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Observable } from 'rxjs';
import { CotizacionService } from 'src/app/services/cotizacion.service';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
import { ObrasService } from '../../services/obras.service';

@Component({
  selector: 'app-contact-artesano',
  templateUrl: './contact-artesano.page.html',
  styleUrls: ['./contact-artesano.page.scss'],
})
export class ContactArtesanoPage implements OnInit {
  artesano:string;
  obra:string;
  artesanos: Observable<any[]>;

  constructor(private obrasService: ObrasService,private route: ActivatedRoute, private router: Router,private cotizacionService: CotizacionService,public notificacionesService: NotificacionesService,private callNumber: CallNumber) { 

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.artesano = this.router.getCurrentNavigation().extras.state.artesano,
        this.obra = this.router.getCurrentNavigation().extras.state.obra;
        ;
        console.log(this.artesano);
        console.log(this.obra);

      }
    });
  }

  
  ngOnInit() {
    this.artesanos = this.cotizacionService.getArtesanoContacto(this.artesano);
  }
  
  Llamar(phoneNumber: string ){
    this.callNumber.callNumber(phoneNumber, true)
    .then(() => console.log('Llamada exitosa!'))
    .catch(() => console.log('Error al intentar llamar'));
}
finalizarObra(){
  this.cotizacionService.finalizarObra(this.obra);
  console.log('finalizar obra' ,this.obra );
  this.obrasService.finalizarObra(this.obra, this.artesano);
  this.router.navigate(['view-cliente']);
}
cancelar(){
  this.router.navigate(['view-cliente']);
}
}
