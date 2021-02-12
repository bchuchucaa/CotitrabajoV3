import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Obra } from 'src/app/model/obra';
import { ObrasService } from '../../services/obras.service';
import { NotificacionesService } from '../../services/notificaciones.service';

@Component({
  selector: 'app-obra',
  templateUrl: './obra.page.html',
  styleUrls: ['./obra.page.scss'],
})
export class ObraPage implements OnInit {
  obra:Obra = new Obra();
  uid:string;
  constructor(private route: ActivatedRoute, private router: Router,
    
    public obraService: ObrasService,public notificaciones:NotificacionesService) { 
      this.uid=localStorage.getItem("uid")
      
      
      
      this.route.queryParams.subscribe(params => {
        console.log(params);
        if (this.router.getCurrentNavigation().extras.queryParams) {
          this.obra = this.router.getCurrentNavigation().extras.queryParams.obra;
          console.log(this.obra.image);
        }
      });
  

}

  ngOnInit() {
  }

  guardarObra(){
    this.obraService.saveObra(this.obra);
    this.notificaciones.notificacionToast("Tu obra se a actualizado correctamente ..:)");
    this.router.navigate(['view-cliente']);
    
  }
  cancelar(){

        this.router.navigate(['view-cliente']);
        
         
  }
  verificarSesion(){
    if(this.uid==null || this.uid==""){
      this.router.navigate(['log-in']);
    }
    
  }


}
