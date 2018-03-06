import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyChannelPage } from './mychannel';

@NgModule({
  declarations: [
    MyChannelPage,
  ],
  imports: [
    IonicPageModule.forChild(MyChannelPage),
  ],
})
export class MyChannelPageModule {}
