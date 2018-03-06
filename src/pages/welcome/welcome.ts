import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { SLIDECONTENT } from '../../../www/assets/data/slide.data';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
@ViewChild (Slides)
  slides: Slides;


  // this thing gave me problem because i moved it position
  slideContent;
  skipMsg: string = "Next";
  skipped: string = "Skip";
   
    constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }
  ionViewWillLoad() {
    //console.log('ionViewDidLoad WelcomePage');
    this.slideContent = SLIDECONTENT
  };
  slideChanged(){
    if (this.slides.getActiveIndex() === 5) {
      this.skipMsg = "Ok Got it"
      this.skipped = 'Cool'
    }
    else
    {
      this.skipMsg = "Next";
      this.skipped = 'Skip'
    }
  };
  clickAction(){
    if (this.slides.getActiveIndex() === 5) {
      this.skip(6)
    }
    else if (this.slides.getActiveIndex() !== 5) {
      this.skip(this.slides.getActiveIndex() + 1)

    } else {
      this.skip(5)
    }
  };
  skipAction(){
    this.skip(6)
  };
  skip(a: number){
    this.slides.slideTo(a, 500);
  };

  rewindAction(){
    this.skip(0)
  }
  pushLogin(){
    this.navCtrl.push('LoginPage')
  }
  pushReg(){
    this.navCtrl.push('RegisterPage')
  }

  // SLIDECONTENT = [
  //   {
  //     title: "Welcome to <br> The Student Planner App",
  //     Description: "The Help that Best Student Manager App",
  //     img:" "
  //   },

  //   {
  //     title: "School Callender Tab",
  //     Description: "Get up-to-date with the Integrated Callender which is automatically updated from time to time by the Admin",
  //     img:" "
  //   },

  //   {
  //     title: " Departmental TimeTable Tab",
  //     Description: "Get up-to-date with the Integrated Departmental Time Table, Never Miss a class",
  //     img:" "
  //   },

  //   {
  //     title: "Staff Tab",
  //     Description: "Get to the Information of  All Teaching and Non-Teaching Staffs on the the GO",
  //     img:" "
  //   },

  //   {
  //     title: "Student Tab",
  //     Description: "No need to Go tooo far, to make meet new friends",
  //     img:" "
  //   },

  //   {
  //     title: "Message Tab",
  //     Description: "Sending Messages to your colleques Made Easy",
  //     img:" "
  //   }
  // ]

                      }
