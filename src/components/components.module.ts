import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { MenuProfileComponent } from './menu-profile/menu-profile.component';
import { CalTableComponent } from './cal-table/cal-table.component';
import { ChannelsComponent } from './channels/channels';
import { SendMessageBoxComponent } from './send-message-box/send-message-box.component';


@NgModule({
    declarations: [LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    MenuProfileComponent,
    CalTableComponent,
    ChannelsComponent,
    SendMessageBoxComponent],
    imports: [IonicModule],
    exports: [LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    MenuProfileComponent,
    CalTableComponent,
    ChannelsComponent,
    SendMessageBoxComponent]
})
export class ComponenetsModule {
    
}
