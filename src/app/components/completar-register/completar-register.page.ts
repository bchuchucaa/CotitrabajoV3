import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Artesano } from 'src/app/model/artesano';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
import { ArtesanoService } from '../../services/artesano.service';

@Component({
  selector: 'app-completar-register',
  templateUrl: './completar-register.page.html',
  styleUrls: ['./completar-register.page.scss'],
})
export class CompletarRegisterPage implements OnInit {
  artesano : Artesano = new Artesano();
  constructor(private artesanoService: ArtesanoService,private router:Router,private route:ActivatedRoute,public notificationService:NotificacionesService) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.artesano = this.router.getCurrentNavigation().extras.state.artesano;
      }
    });
  }

  ngOnInit() {
  }
  saveByGoogle(){
    try {
      if (this.artesano.area === undefined){
        this.notificationService.notificacionToast('Por favor escoja una area');
      }else {
        this.artesanoService.saveArtesano(this.artesano);
        this.notificationService.notificacionToast('Te has registrado correctamente..! :)');
        const navigationExtras: NavigationExtras = {
          state: {
            area: this.artesano.area,
            uid: this.artesano.uid
          }
        };
        this.router.navigate(['/view-artesano'], navigationExtras);
      }
    }catch(error){
      console.log('No se ha podido guardar Artesano', error);
      throw error;
    }
  }

}
