import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Channel } from '../../models/channel/channel.inteface';
// import { ChatService } from '../../providers/chat/chat.service';
//import { ChannelMessage } from '../../models/channel/channel-message.interface';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Message } from '../../app/sendmessage.interface';


@IonicPage()
@Component({
  selector: 'page-channel-chat-admin',
  templateUrl: 'channel-chat-admin.html',
})
export class ChannelChatAdminPage {
channel: Channel;
channelMessage: FirebaseListObservable<Message[]>
  constructor(public database:AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.channel = this.navParams.get('channel');
    this.channelMessage =  this.database.list('sentMessages/'+ this.channel.$key)
    }


}
