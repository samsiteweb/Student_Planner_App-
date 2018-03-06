import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { ChatService } from '../../providers/chat/chat.service';
import { Channel } from '../../models/channel/channel.inteface';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';



@IonicPage()
@Component({
  selector: 'page-mychannelgen',
  templateUrl: 'mychannelgen.html',
})
export class MyChannelGenPage {
  channelList: FirebaseListObservable<Channel[]>

  constructor(private chat:ChatService, public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillLoad(){
    this.getChannels();
  }

  getChannels(){
    this.channelList= this.chat.getChannelListRef()
  }

  selectChannel(channel: Channel){
    this.navCtrl.push('ChannelChatPage', {channel})
  }
}
