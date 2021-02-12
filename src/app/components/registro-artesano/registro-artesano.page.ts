import { Component, OnInit } from '@angular/core';
import { Artesano } from 'src/app/model/artesano';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {ArtesanoService} from '../../services/artesano.service';
import {NotificacionesService} from '../../services/notificaciones.service';
import {AuthService} from '../../services/auth.service';
import {Plugins} from '@capacitor/core';

@Component({
  selector: 'app-registro-artesano',
  templateUrl: './registro-artesano.page.html',
  styleUrls: ['./registro-artesano.page.scss'],
})
export class RegistroArtesanoPage implements OnInit {

  artesano: Artesano = new Artesano();

  constructor(private route: ActivatedRoute, private router: Router, private artesanoService: ArtesanoService,
              private notificationService: NotificacionesService, private authSvc:AuthService) { }
  ngOnInit() {
  }

  saveArtesano(){
    try {
      this.artesanoService.saveArtesano(this.artesano);
      this.notificationService.notificacionToast('Te has registrado correctamente..!  :)');
      this.router.navigate(['/log-in-artesano']);
      console.log('Se ha guardado correctamente');
    }catch(error){
      console.log('No se ha podido guardar Artesano', error);
      throw error;
    }
  }

  async saveArtesanoByGoogle(){
    const userGoogle = await Plugins.GoogleAuth.signIn() as any;
    let bandera = false;
    this.artesanoService.getArtesanoByUid(userGoogle['id']).subscribe(data => {
      if (data.length === 0){
        this.artesano.uid = userGoogle['id'];
        this.artesano.nombres = userGoogle['givenName'];
        this.artesano.apellidos = userGoogle['familyName'];
        this.artesano.correo = userGoogle['email'];
        this.artesano.contrasenia = userGoogle['id'];
        this.artesano.nombres = userGoogle['givenName'];
        const navigationExtras: NavigationExtras = {
          state: {
            artesano: this.artesano
          }
        };
        this.router.navigate(['/completar-registro'], navigationExtras);
        bandera = true;
      }else if(data.length > 0 && bandera === false) {
        console.log('esta entrando aqui');
        this.notificationService.notificacionToast('Esta cuenta se encuentra ya vinculada');
        bandera = true;
      }
    });
    }



}
