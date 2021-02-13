import { Component, OnInit } from '@angular/core';
import { Obra } from 'src/app/model/obra';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ObrasService } from 'src/app/services/obras.service';
import { NotificacionesService } from 'src/app/services/notificaciones.service';



@Component({
  selector: 'app-view-cliente',
  templateUrl: './view-cliente.page.html',
  styleUrls: ['./view-cliente.page.scss'],
})
export class ViewClientePage implements OnInit {
   uid:string;
    obras:Observable<any[]>;
  constructor(private route: ActivatedRoute, private router: Router,public obrasService:ObrasService,private notificacionesService:NotificacionesService) {
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

async borrarContacto(uid: string){
  this.obrasService.borrarObra(uid);
  this.notificacionesService.notificacionToast("Obra borrada..!");
}

async confirmarBorrado(uid: string) {
  this.notificacionesService.confirmacion(
      "Confirmar", 
      "Esta seguro de borrar", 
      this.borrarContacto.bind(this, uid));
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
