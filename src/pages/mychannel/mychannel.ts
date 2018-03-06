import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, PopoverController} from 'ionic-angular';
import { ChatService } from '../../providers/chat/chat.service';
import { Channel } from '../../models/channel/channel.inteface';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
// import { Subscription } from 'rxjs/Subscription';
@IonicPage()
@Component({
  selector: 'page-mychannel',
  templateUrl: 'mychannel.html',
})
export class MyChannelPage {
  
  channel: any;

  channelList: FirebaseListObservable<Channel[]>
 channelListRef: FirebaseListObservable<Channel[]>;
//  channelRef: FirebaseListObservable<Channel>;
//  channel = {} as Channel;
//  channelSubscription: Subscription;


  constructor( public popoverCtrl: PopoverController, public database: AngularFireDatabase, private chat:ChatService, private alert:AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.channelListRef = this.database.list('channel-names');
  }

  showAddChannel(){
    this.alert.create(
      {
        title: "Channel Name",
        inputs: [{
          name: 'channelName'
        }],
        buttons: [
          {
            text: 'Cancel',
          role:'cancel'
          },
          {
            text: 'Add',
          handler: data =>{
            this.chat.addChannel(data.channelName)
          }
          }
        ]
      }
    ).present();
  }

  ionViewWillLoad(){
    this.getChannels();
  }

  getChannels(){
    this.channelList= this.chat.getChannelListRef()
  }

  selectChannel(channel: Channel){
    this.navCtrl.push('SendMessagePage', {channel})
  }

  trashChannel(channel: Channel){
  this.channelListRef.remove(channel.$key)
  }

  editChannel(channel){
      let popover = this.popoverCtrl.create('EditChannelListPage', {channel});
      popover.present();
    }

    pushPage(channel) {
      this.navCtrl.push('ChannelChatPage', {channel})
    }
}
