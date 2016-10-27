import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {


  	constructor(
  		public http: Http,
  		public alertCtrl: AlertController,
  		public storage: Storage
  	) {

    }

    login(user) {

        
        return new Promise(resolve => {
        
            this.http.post('http://192.168.8.101/web/repo/app/backend/index.php/Auth/login', user).subscribe(data => {
            	if(!data.json().status){
	            	let alert = this.alertCtrl.create({
		      			title: 'Alert',
		      			subTitle: data.json().message,
		      			buttons: ['OK']
		    		});
	            	alert.present();
	            	resolve(false);
	            	return false;
	            }
	            this.storage.set('token', data.json().token);
            	resolve(true);
            
        	});
    	});
    }

    logout() {
 		this.storage.set('token','');
 	}
    
}