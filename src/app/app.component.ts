import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Registrar Usuario',
      url: '/registrar-usuario',
      icon: 'person-add'
    },
    {
      title: 'Verificar Numero',
      url: '/verificar-numero',
      icon: 'call'
    },
    {
      title: 'Mapa',
      url: '/mapa',
      icon: 'person-add'
    },
    {
      title: 'Bienvenido',
      url: '/bienvenido',
      icon: 'person-add'
    },
    {
      title: 'Farmacia',
      url: '/farmacia',
      icon: 'ios-basket'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
