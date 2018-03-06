import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeTableGenPage } from './time-tablegen';
import { ComponenetsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TimeTableGenPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeTableGenPage),
    ComponenetsModule
  ],
})
export class TimeTableGenPageModule {}
