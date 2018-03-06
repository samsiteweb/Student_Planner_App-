import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Channel } from '../../models/channel/channel.inteface';
import { ChatService } from '../../providers/chat/chat.service';
// import { ChatService } from '../../providers/chat/chat.service';
//import { ChannelMessage } from '../../models/channel/channel-message.interface';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Message } from '../../app/sendmessage.interface';
// import { ReadmessagePage } from '../readmessage/readmessage';


@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {
channel: Channel;
//channelList: FirebaseListObservable<Channel[]>
channelMessage: FirebaseListObservable<Message[]>
  constructor( public database:AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    // private chat:ChatService,
  }

  ionViewWillLoad() {
   // this.getChannels();
  //  this.channel = this.navParams.get('channel');
    this.channelMessage =  this.database.list('sentMessages/'+ this.channel.$key)
    }
  
    getChannels(){
     // this.channelList= this.chat.getChannelListRef()
    }
  
    selectChannel(message: Message){
      this.navCtrl.push('ReadmessagePage', {message})
    }


}
