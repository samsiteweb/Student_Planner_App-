import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeTablePage } from './time-table';
import { ComponenetsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TimeTablePage,
  ],
  imports: [
    IonicPageModule.forChild(TimeTablePage),
    ComponenetsModule
  ],
})
export class TimeTablePageModule {}
