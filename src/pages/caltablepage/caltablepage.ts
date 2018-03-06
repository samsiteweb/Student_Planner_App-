import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {FirebaseListObservable, AngularFireDatabase, } from 'angularfire2/database-deprecated'
// import { FirebaseProvider } from '../../app/firebase.provider';
import { TimeTable } from '../../app/timetable.interface';
@IonicPage()
@Component({
  selector: 'page-caltablepage',
  templateUrl: 'caltablepage.html',
})
export class CaltablepagePage {
  
timeTable= {} as TimeTable;

day:string;
timeTableRef: FirebaseListObservable<TimeTable[]>;
  constructor(public toast: ToastController, private database:AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.day = this.timeTable.day;
  }
  addTimeTable(timeTable: TimeTable) { 
    try {
    this.timeTable.day = this.day;
    this.timeTableRef = this.database.list('time-table/'+this.day);
    this.timeTableRef.push({
      startTime: this.timeTable.startTime,
      endTime: this.timeTable.endTime.toString(),
      courseList: this.timeTable.courseList,
      day: this.timeTable.day
    });
    this.toast.create({
      message: this.timeTable.courseList+ ' added to timeTable',
      duration: 3000
    }).present();

    this.navCtrl.pop();

  } catch (error) {
      this.toast.create({
        message: "Please Your Check Inputs",
        duration: 3000
      }).present();
  }
  }
}