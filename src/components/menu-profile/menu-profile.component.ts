import { Component, OnInit, ViewChild  } from '@angular/core';
import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { User } from 'firebase/app';
import {NavController, NavParams, Nav } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.interface';
import { LoadingController, Loading } from 'ionic-angular';
@Component({
  selector: 'app-menu-profile',
  templateUrl: 'menu-profile.component.html'
})
export class MenuProfileComponent implements OnInit {
  getProfile: Profile;
  loader: Loading

  ngOnInit(): void {

    this.loader.present();
    this.auth.getAuthenticatedUser().subscribe((user:User) =>
    this.data.getProfile(user).subscribe(profile=>{
      this.getProfile = <Profile>profile.val();
      this.loader.dismiss();
    }))
  
    
  }
  @ViewChild(Nav) nav: Nav;

  constructor(private loading:LoadingController, private data: DataService, private auth: AuthService, public navCtrl: NavController, public navParams: NavParams) {
    this.loader = this.loading.create({
      content: 'Loading profile...'
    });
  }

}
