import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Account} from "../../models/account/account.interface";
import {LoginResponse} from "../../models/login/login-response.interface";
import {Profile} from "../../models/profile/profile.interface";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient, private ofAuth: AngularFireAuth) {
  }


  getAuthenticatedUser(){
    return this.ofAuth.authState;
  }


  async createUserWithEmailAnDPassword(account: Account) {

    try {
      return <LoginResponse>{
        result: await this.ofAuth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    } catch (e) {
      return <LoginResponse> {
        error: e
      }
    }
  }


  async signWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse>{
        result: await this.ofAuth.auth.signInWithEmailAndPassword(account.email, account.password)
      }
    }
    catch (e) {
      return <LoginResponse>{
        error: e
      };
    }
  }

}
