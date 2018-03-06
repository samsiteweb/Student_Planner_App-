import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { TimeTable } from '../../app/timetable.interface';
import { AlertController } from 'ionic-angular';
import { LoadingController, Loading } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-time-table',
  templateUrl: 'time-table.html',
})
export class TimeTablePage implements OnInit {
  loader: Loading
  tuesRef: FirebaseListObservable<TimeTable[]>;
    MontimetableRef: FirebaseListObservable<TimeTable[]>;
    TuetimetableRef: FirebaseListObservable<TimeTable[]>;
    WedtimetableRef: FirebaseListObservable<TimeTable[]>;
    ThurtimetableRef: FirebaseListObservable<TimeTable[]>;
    FritimetableRef: FirebaseListObservable<TimeTable[]>;
    SattimetableRef: FirebaseListObservable<TimeTable[]>;
 
  ngOnInit(): void {
    this.loader.present();
    this.MontimetableRef = this.database.list('time-table/Monday');
    this.TuetimetableRef = this.database.list('time-table/Tuesday');
    this.WedtimetableRef = this.database.list('time-table/Wednesday');
    this.ThurtimetableRef = this.database.list('time-table/Thursday');
    this.FritimetableRef = this.database.list('time-table/Friday');
    this.SattimetableRef = this.database.list('time-table/Saturday');
    this.tabs=["Mon","Tues","Wed","Thur","Fri", "Sat"];
      this.loader.dismiss();

  
    
  }

  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;
  
//SuntimetableRef: FirebaseListObservable<TimeTable[]>;
 
;

  SwipedTabsIndicator :any= null;
  tabs:any=[];

 
  constructor(private loading:LoadingController,private actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, private database:AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.loader = this.loading.create({
      content: 'Loading profile...'
    });
    this.tabs=["Mon","Tues","Wed","Thur","Fri", "Sat"];
   
  }



  selectTable(timeTable: TimeTable) {
    /**
     * Display the actionsheet
     * options: 
     * 1. Edit the shoppingItem
     * 2. Delete the shoppingItem
     * 3. Cancel selection
     */
    
     this.actionSheetCtrl.create({
       //title should be the title of the item user has selected
       title: `${timeTable.startTime}` +" - " +`${timeTable.endTime}`,
       buttons: [
         {
           text: 'Edit',
           icon: 'md-create',
           handler: () => {
             //Send the user to the EditShoppingItempage and pass the key - shoppingItem as a parameter
             this.navCtrl.push('EditTimeTablePage', 
                               { timeTableId: timeTable.$key, timeTableDay: timeTable.day}
                              );

             /**
              * Navigation Stack
                ['ShoppingListPage', 'EditShoppingPage', {shoppingItemId: Selected item id}]
              */
           }
         },
         {
           text: 'Delete',
           icon: 'md-trash',
           role: 'destructive',
           handler: () => {
              //Delete the current ShoppingItem that is passed via the parameter
            if (timeTable.day === "Monday") {
              this.MontimetableRef.remove(timeTable.$key);

              let alert = this.alertCtrl.create({
                title: 'Deleted!',
                subTitle:'Deleted Successfully.',
                buttons: ['OK']
              });
              alert.present();
            } else if(timeTable.day === "Tuesday") {
              this.TuetimetableRef.remove(timeTable.$key);

              let alert = this.alertCtrl.create({
                title: 'Deleted!',
                subTitle:'Deleted Successfully.',
                buttons: ['OK']
              });
              alert.present();
            }else if(timeTable.day === "Wednesday") {
              this.WedtimetableRef.remove(timeTable.$key);

              let alert = this.alertCtrl.create({
                title: 'Deleted!',
                subTitle:'Deleted Successfully.',
                buttons: ['OK']
              });
              alert.present();
            }else if(timeTable.day === "Thursday") {
              this.ThurtimetableRef.remove(timeTable.$key);

              let alert = this.alertCtrl.create({
                title: 'Deleted!',
                subTitle:'Deleted Successfully.',
                buttons: ['OK']
              });
              alert.present();
            }else if(timeTable.day === "Friday") {
              this.FritimetableRef.remove(timeTable.$key);

              let alert = this.alertCtrl.create({
                title: 'Deleted!',
                subTitle:'Deleted Successfully.',
                buttons: ['OK']
              });
              alert.present();
            }else if(timeTable.day === "Saturday") {
              this.SattimetableRef.remove(timeTable.$key);

              let alert = this.alertCtrl.create({
                title: 'Deleted!',
                subTitle:'Deleted Successfully.',
                buttons: ['OK']
              });
              alert.present();
            }

             
           }
         },
         {
           text: 'Cancel',
           icon:'md-close',
           role: 'cancel',
           handler: () => {
             console.log("Cancel Button Clicked");
           }
         }
       ]
     }).present();
  }
















  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  selectTab(index) {    
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
      // this condition is to avoid passing to incorrect index
  	if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
  	{
  		this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
  	}
    
    }

  animateIndicator($event) {
  	if(this.SwipedTabsIndicator)
   	    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  }

  removeItem(id){

  };

  editItem(id){

  }

}
