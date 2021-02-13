import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cotizacion } from 'src/app/model/cotizacion';
import { ArtesanoService } from 'src/app/services/artesano.service';

@Component({
  selector: 'app-mis-obras-artesano',
  templateUrl: './mis-obras-artesano.page.html',
  styleUrls: ['./mis-obras-artesano.page.scss'],
})
export class MisObrasArtesanoPage implements OnInit {

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
    }

  ngOnInit() {
    this.obras =  this.artesanoService.getObrasMias(this.area,this.uid);
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

}
