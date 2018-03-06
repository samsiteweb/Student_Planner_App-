import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface pageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage  {
rootPage = 'TabsPage';

adminUser: string;
adminPass: string;



@ViewChild(Nav) nav: Nav;



pages: pageInterface[] = [
  {
    title: "Home", pageName: 'TabsPage',  tabComponent: 'HomePage',index: 0, icon: 'home'
  },

  {
    title: "School Calendar", pageName: 'TabsPage', tabComponent: 'SchCalenderPage', index: 1, icon: 'calendar'
    
  },
  
  {
    title: "TimeTable", pageName: 'TabsPage', tabComponent: 'TimeTableGenPage', index: 2, icon: 'clock'
  },

  {
    title: "Channels", pageName: 'TabsPage', tabComponent: 'MyChannelGenPage', index: 3, icon: 'contacts'
  },
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }


  gotoPage(page: pageInterface) {
    let params ={};

    if (page.index) {
      params = {tabIndex: page.index}

    if (this.nav.getActiveChildNav() && page.index !== undefined) {
    //  this.nav.setRoot(page.pageName, params);
      this.nav.getActiveChildNav().select(page.index);
    } 

    }else {
      // page.index == 0;
      this.nav.setRoot(page.pageName, params);
     
    }

  }

  isActive(page: pageInterface){

      let childNav = this.nav.getActiveChildNav();

      if(childNav){
        if(childNav.getSelected() && childNav.getSelected().root == page.tabComponent)
        return 'primary'
      }

      
  }

  loginAdmin(){
    if (this.adminUser == "admin" && this.adminPass == "password") {
          this.navCtrl.setRoot('AdminPage')      
    }
  }

}
