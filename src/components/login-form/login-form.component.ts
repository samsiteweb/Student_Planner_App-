import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account } from '../../models/accounts/account.interface';
import { LoginResponse } from '../../models/login/login-response.interface';
import {AuthService} from '../../providers/auth/auth.service';
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {
account = {} as Account;
@Output() loginStatus: EventEmitter<LoginResponse>;


  constructor(private auth: AuthService, public navCtrl: NavController) {
  this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login(){
    const loginResponse = await this.auth.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(loginResponse);
  }
  navigateToPage(){
   this.navCtrl.push('RegisterPage');
}
}
