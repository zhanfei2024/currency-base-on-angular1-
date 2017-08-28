import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';



@Component({
  template: 
    `
      <ion-nav #myNav [root]="rootPage"></ion-nav>
    `
})


export class MyApp {
  @ViewChild('myNav') nav: NavController
  public rootPage = TabsPage;


  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
