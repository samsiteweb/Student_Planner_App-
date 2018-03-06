import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
import { DataService } from '../../providers/data/data.service';
import { User } from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private data: DataService, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  login(event: LoginResponse){
    console.log(event);
    if (!event.error) {
      
      this.toast.create({
        message: 'Welcome '+ event.result.email,
        duration: 3000
      }).present();

this.data.getProfile(<User>event.result).subscribe(profile =>{
  console.log(profile);
  profile.val() ? this.navCtrl.setRoot('MenuPage'):this.navCtrl.setRoot('EditProfilePage')
})
    } else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }
  
}
