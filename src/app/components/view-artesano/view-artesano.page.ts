import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Observable} from 'rxjs';
import { Cotizacion } from 'src/app/model/cotizacion';
import {ArtesanoService} from '../../services/artesano.service';

@Component({
  selector: 'app-view-artesano',
  templateUrl: './view-artesano.page.html',
  styleUrls: ['./view-artesano.page.scss'],
})
export class ViewArtesanoPage implements OnInit {
  area: string;
  uid:string;
  bandera:boolean = false;
  cotizacion: Cotizacion = new Cotizacion();
  cotizar_valor : String;
  obras: Observable<any[]>;

  constructor(private route: ActivatedRoute, private router: Router,
              public artesanoService: ArtesanoService) {

    this.area=localStorage.getItem("area")
    this.uid=localStorage.getItem("artesano")

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.area = this.router.getCurrentNavigation().extras.state.area,
        this.uid = this.router.getCurrentNavigation().extras.state.uid;
        console.log(this.uid);
      }
    });
  }
  

  Cotizar(String:any){
    let navigationExtras: NavigationExtras = {
      state: {
        uid: this.uid,
        obra: String
      }
    };
    this.router.navigate(['/cotizacion'], navigationExtras);
  }
  ListarCotizaciones(String:any){
    let navigationExtras: NavigationExtras = {
      state: {
        uid: this.uid,
        obra: String
      }
    };
    this.router.navigate(['/lis-cotizaciones-artesano'], navigationExtras);
  }
  misObras(){
    
    this.router.navigate(['/mis-obras-artesano']);

  }

  saveCotizacion(){
    this.bandera = false;
    console.log(this.cotizar_valor)
  }

  ngOnInit() {
    this.obras = this.artesanoService.getObras(this.area);
  }

}
