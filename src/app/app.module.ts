import { NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { Users } from '../pages/users/users';

import { LoginPage } from '../pages/login-page/login-page';
import { UserDetails } from '../pages/user-details/user-details';

import { GithubUsers } from '../providers/github-users';
import { AuthService } from '../providers/auth-service';


@NgModule({
  declarations: [
    MyApp,
    Users,
    UserDetails,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Users,
    UserDetails,
    LoginPage
  ],
  providers: [GithubUsers,AuthService,Storage]
})
export class AppModule {}
