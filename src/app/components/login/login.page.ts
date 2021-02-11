import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { async } from '@angular/core/testing';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
import { User } from 'src/app/shared/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authSvc:AuthService, private router:Router, private notificationService:NotificacionesService,private route: ActivatedRoute,) { }

  ngOnInit() {
  }
  async onLogin(email,password){
    try {
      const user = await this.authSvc.login(email.value,password.value);
      if(user){
        //Todo:checkEmail
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified,user);
               
      }
    } catch (error) {
      console.log('errror',error);
    }
  }

    async onLoginGoogle(){
      try {
        const user = await this.authSvc.loginGoogle();
        if(user){
          //console.log("USER  -> ",user);
          const isVerified = this.authSvc.isEmailVerified(user);
          this.redirectUser(isVerified,user);
        }
      } catch (error) {
        console.log(error);
      }
    }

    private redirectUser(isVerified:boolean,user:User){
      /// redirect -> view client
      ///ELSE verified your email
      if(isVerified){
        console.log("UID GOOGLE",user.uid);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        uid: user.uid, 
      }
    };

    this.router.navigate(['view-cliente'], navigationExtras);

     }else{
       this.router.navigate(['verify-email']); 
    } 

    }
  

}

