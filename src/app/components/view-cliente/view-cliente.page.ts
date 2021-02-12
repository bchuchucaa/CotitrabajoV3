import { Component, OnInit } from '@angular/core';
import { Obra } from 'src/app/model/obra';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ObrasService } from 'src/app/services/obras.service';


@Component({
  selector: 'app-view-cliente',
  templateUrl: './view-cliente.page.html',
  styleUrls: ['./view-cliente.page.scss'],
})
export class ViewClientePage implements OnInit {
    uid:string;
    obras:Observable<any[]>;

  constructor(private route: ActivatedRoute, private router: Router,public obrasService:ObrasService) {


    this.uid = this.route.snapshot.paramMap.get('uid');
    console.log("consultando ", this.uid);
   }

  ngOnInit() {
    this.obras = this.obrasService.getObrasCliente(this.uid);
  }
crearNuevaObra(){
  
  const url='/crear-obra/'+this.uid;
  console.log("Sending this route "+url);
  this.router.navigate([url]);
}
editarObra(obra:Obra){
  
}

ListarCotizaciones(String:any){

  localStorage.setItem("uid" , this.uid)

  let navigationExtras: NavigationExtras = {
    state: {
      obra: String
    }
  };
  this.router.navigate(['/lis-cotizaciones-cliente'], navigationExtras);
}
}
