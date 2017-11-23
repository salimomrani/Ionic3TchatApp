import {Component, EventEmitter, Output} from '@angular/core';
import {NavController} from "ionic-angular";
import {Account} from "../../models/account/account.interface";
import {LoginResponse} from "../../models/login/login-response.interface";
import {AuthProvider} from "../../providers/auth/auth.service";

/**
 * Generated class for the LoginformComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'loginform.component.html'
})
export class LoginformComponent {


  login = {} as Account;

  @Output() loginStatus : EventEmitter<LoginResponse>;

  constructor(private navCtrl: NavController,private authProvider :AuthProvider) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  // navigateToPage(pageName:string) {
  //   pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName): this.navCtrl.push(pageName) ;
  // }


  async loginForm() {
      const  loginResponse = await this.authProvider.signWithEmailAndPassword(this.login);
      this.loginStatus.emit(loginResponse);
  }

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }
}
