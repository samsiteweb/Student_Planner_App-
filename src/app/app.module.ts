import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireDatabaseModule } from 'angularfire2/database-deprecated'
import { FIREBASE_CONFIG } from './firebase.config';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { AuthService } from '../providers/auth/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DataService } from '../providers/data/data.service';
import { FirebaseProvider } from './firebase.provider';
import { ChatService } from '../providers/chat/chat.service';
import { TooltipsModule} from 'ionic-tooltips'
// import { ReadmessagePage } from '../pages/readmessage/readmessage';

@NgModule({
  declarations: [
    MyApp,
    // ReadmessagePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    TooltipsModule,
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // ReadmessagePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DataService,
    FirebaseProvider,
    ChatService
    
  ]
})
export class AppModule {}
