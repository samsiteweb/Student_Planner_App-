import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { ComponenetsModule } from '../../components/components.module'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    LoginPage,
  
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ComponenetsModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class LoginPageModule {}
