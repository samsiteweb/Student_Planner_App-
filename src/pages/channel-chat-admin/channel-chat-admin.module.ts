import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChannelChatAdminPage } from './channel-chat-admin';
import { ComponenetsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ChannelChatAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ChannelChatAdminPage),
    ComponenetsModule
  ],
})
export class ChannelChatAdminPageModule {}
