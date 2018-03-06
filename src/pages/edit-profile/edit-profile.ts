import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  saveProfileResult(event: Boolean){
    if (event) {
      this.navCtrl.setRoot('MenuPage')
    } else {
      console.log("not Authenticated or Saved")
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
