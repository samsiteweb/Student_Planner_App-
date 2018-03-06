import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Profile } from '../../models/profile/profile.interface';
import {User} from "firebase/app";
import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy {

private authenticatedUser$: Subscription;
private authenticatedUser: User;

@Output() saveProfileResult: EventEmitter<Boolean>
profile = {} as Profile;

  constructor(private auth: AuthService, private data: DataService) {
  
      

    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) =>{
    this.authenticatedUser = user;
  })
  this.saveProfileResult = new EventEmitter<Boolean>();
}

  async saveProfile() {

    if (this.authenticatedUser){
    this.profile.email =  this.authenticatedUser.email 
    const result = 
    await this.data.saveProfile(this.authenticatedUser, this.profile)
     this.saveProfileResult.emit(result);
  }

  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }
}
