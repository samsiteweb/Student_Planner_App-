import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Channel } from '../../models/channel/channel.inteface';
import { Subscription } from 'rxjs/Subscription';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';


@IonicPage()
@Component({
  selector: 'page-edit-channel-list',
  templateUrl: 'edit-channel-list.html',
})
export class EditChannelListPage {
 channelRef: FirebaseObjectObservable<Channel[]>;
 channel = {} as Channel[];
 channelSubscription: Subscription;
 getchannel



  constructor(public toast:ToastController, public database:AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
   const channelkey = this.navParams.get('channel');
this.getchannel = this.navParams.get('channel');
    this.channelRef = this.database.object('channel-names/'+channelkey.names);
  
    this.channelSubscription =this.channelRef.subscribe(
      channel => this.channel = channel

    );

  }

  editChannel(getchannel){
    
    this.channelRef.set(getchannel);
    
    this.toast.create({
      message: 'TimeTable Edited Successfully',
      duration: 3000
    }).present();
    this.navCtrl.pop();


  }

  ionViewWillLoad() {
    this.channelSubscription.unsubscribe();
  }

}
