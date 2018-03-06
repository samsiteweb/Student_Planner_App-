import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  frontslide: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.frontslide = "img/student1.png"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

  slideChanged(){
    this.navCtrl.setRoot('WelcomePage')
  }

  pushLogin(){
    this.slideChanged();
  }
}
