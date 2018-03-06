import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaltablepagePage } from './caltablepage';
import { ComponenetsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CaltablepagePage,
  ],
  imports: [
    IonicPageModule.forChild(CaltablepagePage),
    ComponenetsModule
  ],
})
export class CaltablepagePageModule {}
