import { Component, Output, EventEmitter } from '@angular/core';
import { Account } from '../../models/accounts/account.interface';
import { AuthService } from '../../providers/auth/auth.service';
import { LoginResponse } from '../../models/login/login-response.interface';
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {
account = {} as Account;
@Output() registerStatus: EventEmitter<LoginResponse> ;
text: string;

  constructor(private auth: AuthService) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }
async register(){
  
  try {
  const result = await this.auth.createUserWithEmailAndPassword(this.account)
 this.registerStatus.emit(result);

} catch (e) {
    console.error(e);
    this.registerStatus.emit(e);
  }
 
  }
}
