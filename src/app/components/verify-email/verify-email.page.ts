import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import auth from 'firebase/app';
import { User } from 'src/app/shared/user.interface';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {
  user$:Observable<User> = this.authService.afaAuth.user;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  async onSendEmail():Promise<void>{
    try {
     await this.authService.sendVerificationEmail();

    } catch (error) {
      console.log(error);
    }
  }
  ngOnDestroy(){
    this.authService.logout();
  }

}
