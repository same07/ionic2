import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';


import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';
import { Storage } from '@ionic/storage';
import { UserDetails } from '../../pages/user-details/user-details';



@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class Users {

	users : User[]
	originalUsers : User[]
	token : any

  	constructor(
  		public navCtrl: NavController, 
  		private githubUsers : GithubUsers,
  		public loadingController : LoadingController,
  		public storage: Storage
  	){

  		
  		let loader = this.loadingController.create({
      		content: "Loading Data..."
    	});  
		loader.present();
		githubUsers.load().subscribe(users => {
			loader.dismiss();
			this.users = users;
			this.originalUsers = users;
		});

	}

	ionViewDidLoad() {
    	this.storage.get('token').then((data) => {
  			this.token = data;
		});
  	}

	goToDetails(login: string) {
    	this.navCtrl.push(UserDetails, {login});
  	}

  	search(searchEvent) {
    let term = searchEvent.target.value;  
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.users = this.originalUsers;
    } else {
      // Get the searched users from github
      	this.githubUsers.searchUsers(term).subscribe(users => {
        	this.users = users
      	});
    }
  }
}
