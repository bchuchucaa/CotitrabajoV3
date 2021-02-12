import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {NotificacionesService} from '../../services/notificaciones.service';
import {ArtesanoService} from '../../services/artesano.service';
import { Artesano } from 'src/app/model/artesano';
@Component({
  selector: 'app-log-in-artesano',
  templateUrl: './log-in-artesano.page.html',
  styleUrls: ['./log-in-artesano.page.scss'],
})
export class LogInArtesanoPage implements OnInit {

  artesano: Artesano = new Artesano();
  logeado: Artesano = new Artesano();

  constructor(private route: ActivatedRoute, private router: Router,
              public artesanoService: ArtesanoService,
              public notificacioneservice: NotificacionesService ) { }

  ngOnInit() {}


  loginArtesano(){
    this.artesanoService.loginArtesano(this.artesano.correo, this.artesano.contrasenia).subscribe( data => {
      if (data.length > 0){
        this.logeado = (JSON.parse(JSON.stringify(data[0])));
        console.log('Area', this.logeado['area']);
        console.log('Uid', this.logeado['uid']);

        let navigationExtras: NavigationExtras = {
          state: {
            area: this.logeado['area'],
            uid: this.logeado['uid']
          }
        };
        this.router.navigate(['/view-artesano'], navigationExtras);
        
      }else{
        this.notificacioneservice.notificacionToast('No pudimos encontrar tu cuenta..!  :(');
        this.router.navigate(['/log-in-artesano']);
      }
    });

  }

}
