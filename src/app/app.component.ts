import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from 'ionic-native';


import { Users } from '../pages/users/users';
import { LoginPage } from '../pages/login-page/login-page';
import { AuthService } from '../providers/auth-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // Commented Out for Brevity

  	@ViewChild(Nav) nav: Nav;

  	rootPage : any = LoginPage;
  	pages : Array<{title:string,component:any}>;

  	constructor(
  		public platform: Platform,  
  		public menu: MenuController,
  		private authService : AuthService
  	) {

  		this.initializeApp();

  		this.pages = [
  			{title : "Users",component : Users}
  		];

  	}


  	initializeApp(){

  		this.platform.ready().then(()=>{
  			StatusBar.styleDefault();
  		});

  	}

  	openPage(page){
  		this.menu.close();
  		this.nav.setRoot(page.component);
  	}

	logout(){
		this.menu.close();
		this.authService.logout();
		this.nav.setRoot(LoginPage);
	}  	

}