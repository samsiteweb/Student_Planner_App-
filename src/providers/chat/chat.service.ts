import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Channel } from '../../models/channel/channel.inteface';
import { ChannelMessage } from '../../models/channel/channel-message.interface';

@Injectable()
export class ChatService {

  constructor(private database: AngularFireDatabase) {
    console.log('Hello ChatProvider Provider');
  }

  addChannel(channelName: string){
    this.database.list('channel-names').push({name: channelName})
  }

  getChannelListRef(): FirebaseListObservable<Channel[]> {
    return this.database.list('channel-names');
  }

  getChannelChatRef(channelKey: string): FirebaseListObservable<any> {
    return this.database.list('channels/'+channelKey)
  }
async sendChannelMessage(channelKey: string, message: ChannelMessage){
  await this.database.list('/channels/'+channelKey).push(message);
}

}
