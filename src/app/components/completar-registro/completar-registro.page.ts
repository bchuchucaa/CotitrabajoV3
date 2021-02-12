import { Component, OnInit } from '@angular/core';
import {Artesano} from '../../model/artesano';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {ArtesanoService} from '../../services/artesano.service';
import {NotificacionesService} from '../../services/notificaciones.service';

@Component({
  selector: 'app-completar-registro',
  templateUrl: './completar-registro.page.html',
  styleUrls: ['./completar-registro.page.scss'],
})
export class CompletarRegistroPage implements OnInit {

  artesano : Artesano = new Artesano();
  constructor(private route: ActivatedRoute, private router: Router,
              public artesanoService: ArtesanoService, private notificationService: NotificacionesService) {
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
