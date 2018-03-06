import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot= 'HomePage';
  SchCalenderRoot= 'SchCalenderPage';
  mychannelRoot= 'MyChannelGenPage';
  timeTableRoot= 'TimeTableGenPage';
  myIndex: number;


  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

}
