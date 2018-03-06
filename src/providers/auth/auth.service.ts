import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/accounts/account.interface';
import { LoginResponse } from '../../models/login/login-response.interface';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthService {

  constructor(private auth: AngularFireAuth) {
  }

getAuthenticatedUser() {
  return this.auth.authState;
}

  async createUserWithEmailAndPassword(account: Account){
    try {
      console.log(event)
     return <LoginResponse> {
       result: await 
       this.auth.auth.createUserWithEmailAndPassword(account.email, account.password)
     }
    } catch (e) {
      return <LoginResponse> {
        error: e
      }
      
    }
  }
  
  async signInWithEmailAndPassword(account: Account){
try {
  
return <LoginResponse> {
  result: await this.auth.auth.signInWithEmailAndPassword(account.email, account.password)
}
} catch (e) {
  return <LoginResponse> {
    error: e
  };
  
}
  }

}
