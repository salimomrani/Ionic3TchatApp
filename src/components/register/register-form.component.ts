import {Component, EventEmitter, Output} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Account} from "../../models/account/account.interface";
import {ToastController} from "ionic-angular";
import {AuthProvider} from "../../providers/auth/auth.service";
import {LoginResponse} from "../../models/login/login-response.interface";

/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account;
  @Output() registerStatus :EventEmitter<LoginResponse>;
  constructor(private afAuth: AuthProvider,private toast:ToastController) {
    this.registerStatus = new EventEmitter<LoginResponse>()
  }

  async registerForm() {
    try {
      const result = await this.afAuth.createUserWithEmailAnDPassword(this.account);
      this.registerStatus.emit(result)
    } catch (e){
      this.registerStatus.emit(e)
    }
  }
}
