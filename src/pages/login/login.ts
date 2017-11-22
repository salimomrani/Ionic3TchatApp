///<reference path="../../../node_modules/ionic-angular/navigation/nav-controller.d.ts"/>
import { Component } from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import {LoginResponse} from "../../models/login/login-response.interface";
import {DataProvider} from "../../providers/data/data.service";
import {User} from "firebase";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {




  constructor(private navCtrl: NavController, private toast: ToastController,private dataService:DataProvider) {
  }




  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }


  loginEvent(event: LoginResponse) {
    if (!event.error){
      this.toast.create({
        message:`Bienvenue dans mon application, ${event.result.email}`,
        duration: 3000
      }).present();

      this.dataService.getProfile(<User>event.result).subscribe(profile=>{
        console.log(profile);
        profile.payload.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditprofilePage');
      });
    }else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }
}
