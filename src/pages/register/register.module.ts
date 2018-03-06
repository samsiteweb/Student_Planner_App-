import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { ComponenetsModule } from '../../components/components.module';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    ComponenetsModule,
    AngularFireAuthModule
  ],
})
export class RegisterPageModule {}
