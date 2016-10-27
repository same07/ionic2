import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

import { Users } from '../../pages/users/users';



@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html'
})
export class LoginPage {
	data = {}
  	constructor(
  		public navCtrl: NavController,
  		private authService : AuthService,
  		public loadingController : LoadingController,
  		public alertCtrl: AlertController
	) {
	  	this.data = {};
  	}

  	login(data){
  		let loader = this.loadingController.create({
      		content: "Logging In"
    	});  
		loader.present();
  		this.authService.login(data).then(data => {
  			loader.dismiss();
  			if(data){
  				this.navCtrl.setRoot(Users);
  			}
        })
  	}

}
