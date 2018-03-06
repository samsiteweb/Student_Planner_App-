import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTimeTablePage } from './edit-time-table';

@NgModule({
  declarations: [
    EditTimeTablePage,
  ],
  imports: [
    IonicPageModule.forChild(EditTimeTablePage),
  ],
})
export class EditTimeTablePageModule {}
