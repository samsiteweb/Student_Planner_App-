import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyChannelGenPage } from './mychannelgen';

@NgModule({
  declarations: [
    MyChannelGenPage,
  ],
  imports: [
    IonicPageModule.forChild(MyChannelGenPage),
  ],
})
export class MyChannelGenPageModule {}
