import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { homeDisplay } from '../../assets/data/home.data';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  getName: string = 'Calender';
  homedata = homeDisplay;
  calender: string = 'SchCalenderPage'
  timetable: string = 'TimeTablePage'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  pushCal(){
    this.navCtrl.push('SchCalenderPage')
  }
  pushTime(){
    this.navCtrl.push('TimeTablePage')
  }
  pushAbout(){
    this.navCtrl.push('NotePage')
  }
  pushForum(){
    this.navCtrl.push('MyChannelGenPage')
  }

  gotoPage(){





  }
}
