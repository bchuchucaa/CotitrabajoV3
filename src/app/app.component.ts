import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'LogIn',
      url: '/login',
      icon: 'mail'
    },
    {
      title: 'Crear obra',
      url: '/crear-obra',
      icon: 'paper-plane'
    },
    {
      title: 'localizacion',
      url: '/localizacion',
      icon: 'heart'
    },
    {
      title: 'Vista Cliente',
      url: '/view-cliente',
      icon: 'heart'
    },

    {
      title: 'CrearObra',
      url: '/crear-obra',
      icon: 'archive'
    },
    {
      title: 'LOG-IN',
      url: '/log-in',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    
    this.router.navigate(['log-in']);
  }
}
