import { Component, OnInit } from '@angular/core';
import {Artesano} from '../../model/Artesano';
import {ActivatedRoute, Router} from '@angular/router';
import {ArtesanoService} from '../../services/artesano.service';
import {NotificacionesService} from '../../services/notificaciones.service';

@Component({
  selector: 'app-registro-artesano',
  templateUrl: './registro-artesano.page.html',
  styleUrls: ['./registro-artesano.page.scss'],
})
export class RegistroArtesanoPage implements OnInit {

  artesano: Artesano = new Artesano();

  constructor(private route: ActivatedRoute, private router: Router, private artesanoService: ArtesanoService,
              private notificationService: NotificacionesService) { }
  ngOnInit() {
  }

  saveArtesano(){
    try {
      this.artesanoService.saveArtesano(this.artesano);
      this.notificationService.notificacionToast("Te has registrado correctamente..!  :)");
      this.router.navigate(['/log-in-artesano']);
      console.log('Se ha guardado correctamente');
    }catch(error){
      console.log('No se ha podido guardar Artesano', error);
      throw error;
    }
  }

  loginGoogle(){
    this.artesanoService.loginWithGoogle().then((resp) => {
      this.artesano.nombres =  resp.additionalUserInfo.profile['given_name'];
      console.log('nombre', this.artesano.nombres);
      console.log('todo', resp.additionalUserInfo.profile);
      this.router.navigate(['/log-in-artesano']);
    }).catch(err => {
      alert('No se ha podido iniciar sesion');
    });
  }


}
