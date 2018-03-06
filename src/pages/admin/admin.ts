import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

pushChannel(){
  this.navCtrl.push("MyChannelPage")
}
pushTimeTable(){
  this.navCtrl.push("TimeTablePage")
}

pushCalPage(){
  this.navCtrl.push("SchCalenderPage")
}
pushHome(){
  this.navCtrl.push("MenuPage")
}

}
