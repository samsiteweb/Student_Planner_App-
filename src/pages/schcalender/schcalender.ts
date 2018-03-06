import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-schcalender',
  templateUrl: 'schcalender.html',
})

export class SchCalenderPage {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;
  segment = "all";
  SwipedTabsIndicator :any= null;

  tabs:any=[];

  calendar = [
    {
      title: "Students Arrive", startDate: 'Sat. 18/02/17',  endDate: 'Sat. 18/02/17', details: 'Students Enter to the Halls of Recidence'
    },
    {
      title: "	1 Week for Orientation/Registration", startDate: 'Mon. 20/02/17',  endDate: 'Fri. 24/02/17', details: 'Orientation Week for Fresh Students'
    },
    {
      title: "13 Weeks for Teaching/Revision", startDate: 'Mon. 20/02/17',  endDate: 'Fri. 19/05/17', details: '13 Weeks for Teaching/Revision'
    },
    {
      title: "GES Examinations", startDate: 'Mon. 15/05/17',  endDate: 'Fri. 19/05/17', details: 'GES Examination Starts'
    },
    {
      title: "Two Weeks for Examinations in Faculty of Education", startDate: 'Mon. 15/05/17',  endDate: 'Fri. 26/05/17', details: ' Examinations in Faculty of Education Starts'
    },
    {
      title: "Two Weeks for Examinations in all other Faculties", startDate: 'Mon. 22/05/17',  endDate: 'Fri. 02/06/17', details: ' Examinations in all other Faculties Starts'
    },
    {
      title: "2 Weeks for Processing Examination Results", startDate: 'Mon. 05/06/17',  endDate: 'Fri. 16/06/17', details: ' Processing Examination Results Starts'
    },
    {
      title: "Mid-Session Break for Students (2 Weeks)", startDate: 'Mon. 05/06/17',  endDate: 'Fri. 16/06/17', details: ' Break for Students (2 Weeks) Starts'
    },
    {
      title: "2 Weeks for Processing Examination Results", startDate: 'Mon. 05/06/17',  endDate: 'Fri. 16/06/17', details: ' Processing Examination Results Starts'
    },
    {
      title: "Mid-Session Break for Students (2 Weeks)", startDate: 'Mon. 05/06/17',  endDate: 'Fri. 16/06/17', details: ' Break for Students (2 Weeks) Starts'
    },
  ]  

  calendar2 = [
    {
      title: "13 Weeks for Teaching /Revision", startDate: 'Mon. 19/06/17',  endDate: 'Sat. 15/09/17', details: '13 Weeks for Teaching /Revision'
    },
    {
      title: "1 Week Meetings to consider First Semester Non-Final Year Results", startDate: 'Mon. 26/06/17',  endDate: 'Fri. 30/06/17', details: '1 Week to consider First Semester Non-Final Year Results'
    },
    {
      title: "Senate Meeting for the Consideration of First Semester Non-Final Year Results", startDate: 'Mon. 10/07/17',  endDate: 'Mon. 10/07/17', details: 'Senate Meeting for Year Results'
    },
    {
      title: "GES Examinations", startDate: 'Mon. 11/09/17',  endDate: 'Fri. 15/09/17', details: 'GES Examination Starts'
    },
    {
      title: "2 Weeks for Examinations in Faculty of Education", startDate: 'Mon. 11/09/17',  endDate: 'Fri. 22/09/17', details: '2 Weeks for Examinations in Faculty of Education'
    },
    {
      title: "1 Week for Meetings of Faculty of Examiners (Non-Final Year Results)", startDate: 'Wed. 25/10/17',  endDate: 'Tue. 31/10/17', details: '1 Week for Meetings of Faculty of Examiners'
    },
    {
      title: "Senate Meeting for the Consideration of Non-Final Year Results/End of Session", startDate: 'Mon. 06/11/17',  endDate: 'Mon. 06/11/17', details: 'Senate Meeting forNon-Final Year Results/End of Session'
    },
    {
      title: "3 Weeks for End-of-the-Session Break", startDate: 'Mon. 06/11/17',  endDate: 'Fri. 24/11/17', details: ' 3 Weeks for End-of-the-Session Break'
    },
  ]  
  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.tabs=["1st Semester","2nd Semester"];
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

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchCalenderPage');
  }

}
