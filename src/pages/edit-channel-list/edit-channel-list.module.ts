import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditChannelListPage } from './edit-channel-list';

@NgModule({
  declarations: [
    EditChannelListPage,
  ],
  imports: [
    IonicPageModule.forChild(EditChannelListPage),
  ],
})
export class EditChannelListPageModule {}
