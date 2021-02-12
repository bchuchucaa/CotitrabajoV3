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
    this.uid=localStorage.getItem("uid")
    

    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (this.router.getCurrentNavigation().extras.queryParams) {
        this.uid = this.router.getCurrentNavigation().extras.queryParams.uid;
        
        
      }
    });
    this.obras = this.obrasService.getObrasCliente(this.uid);


   }

   ngOnInit() {
    
  }
crearNuevaObra(){
  this.verificarSesion();
  const url='/crear-obra/'+this.uid;
  console.log("Sending this route "+url);
  this.router.navigate([url]);
}
editarObra(obra:Obra){
  this.verificarSesion();
  let navigationExtras: NavigationExtras = {
    queryParams: {
      obra: obra
    }
  };

  this.router.navigate(['/obra'], navigationExtras);

  

}
editarContactoById(){

}
confirmarBorrado(uid:string){

}
singOut(){
  localStorage.setItem("uid", "");
  this.router.navigate(['log-in']);
}
verificarSesion(){
  if(this.uid==null || this.uid==""){
    this.router.navigate(['log-in']);
  } 
}
ListarCotizaciones(String:any){
  let navigationExtras: NavigationExtras = {
    state: {
      obra: String
    }
  };
  this.router.navigate(['/lis-cotizaciones-cliente'], navigationExtras);
}
}
