import { Component,  ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Message } from '../../app/sendmessage.interface';
import { Channel } from '../../models/channel/channel.inteface';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-send-message',
  templateUrl: 'send-message.html',
})

export class SendMessagePage {

  message =  {} as Message;
  channel: any;
  messageRef: FirebaseListObservable<Message[]>
  
  @ViewChild('myInput') myInput: ElementRef;
  resize() {
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
  }
  constructor( public toast: ToastController, private database:AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.channel = this.navParams.get('channel')
  }
pushPage(channel: Channel = this.channel) {
  this.navCtrl.push('ChannelChatPage', {channel})
}
sendMessage(message: Message){
  try {
    let channel = this.channel
    this.messageRef = this.database.list('sentMessages/'+channel.$key);
    this.messageRef.push({
      messageTitle: this.message.messageTitle,
      messageContent: this.message.messageContent,
      senderName: this.message.senderName,
    });
    this.toast.create({
      message: this.message.messageTitle+ ' sent',
      duration: 3000
    }).present();
    this.pushPage();
  } catch (error) {
      this.toast.create({
        message: "Please Your Check Inputs",
        duration: 3000
      }).present();
      console.log(error)
  }
  }
}
