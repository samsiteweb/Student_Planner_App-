import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
// import { Channel } from '../../models/channel/channel.inteface';
import { Message } from '../../app/sendmessage.interface';

/**
 * Generated class for the ReadmessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-readmessage',
  templateUrl: 'readmessage.html',
})
export class ReadmessagePage {
  messageComment =  {} as Message;
  messageCommentRef: FirebaseListObservable<Message[]>
  message: Message

  channelMessage: FirebaseListObservable<Message[]>
  constructor(public toast: ToastController, public database:AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewWillLoad(){
    this.message = this.navParams.get('message');
    // console.log("i am in the message page")
  }
  ionViewDidLoad() {
    console.log("i am in the message page")
    this.message = this.navParams.get('message');
    console.log(this.message.$key)
    // this.channelMessage =  this.database.list('sentMessages/'+ this.channel.$key)
    }
    
    // sendMessageComment(messageComment: Message){
    //   try {
    //     let message = this.channel
    //     this.messageRef = this.database.list('sentMessages/'+channel.$key);
    //     this.messageRef.push({
    //       messageTitle: this.message.messageTitle,
    //       messageContent: this.message.messageContent,
    //       senderName: this.message.senderName,
    //     });
    //     this.toast.create({
    //       message: this.message.messageTitle+ ' sent',
    //       duration: 3000
    //     }).present();
    //     this.pushPage();
    //   } catch (error) {
    //       this.toast.create({
    //         message: "Please Your Check Inputs",
    //         duration: 3000
    //       }).present();
    //       console.log(error)
    //   }
    //   }
}
