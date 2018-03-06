import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { TimeTable } from '../../app/timetable.interface';
import {Subscription} from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-edit-time-table',
  templateUrl: 'edit-time-table.html',
})
export class EditTimeTablePage {

  timeTableSubscription: Subscription;
  timeTableref: FirebaseObjectObservable<TimeTable>;
  timeTable = {} as TimeTable;

day:string;
  constructor(public toast: ToastController, public navCtrl: NavController, 
    public navParams: NavParams, 
    private database: AngularFireDatabase, 
    public alertCtrl: AlertController) {

const timeTableId =this.navParams.get('timeTableId');
const timeDayId =this.navParams.get('timeTableDay');

this.timeTableref = this.database.object('time-table/'+timeDayId+"/"+timeTableId);
  
this.timeTableSubscription =this.timeTableref.subscribe(
  timeTable => this.timeTable = timeTable
);

}

editTimeTable(timeTable){

  this.timeTableref.update(timeTable);

  this.toast.create({
    message: 'TimeTable Edited Successfully',
    duration: 3000
  }).present();
  this.navCtrl.pop();
}

  ionViewWillLeave() {
   
    this.timeTableSubscription.unsubscribe();
  }


}
