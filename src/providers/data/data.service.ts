import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "angularfire2/database";
import {User} from "firebase";
import {Profile} from "../../models/profile/profile.interface";
import "rxjs/add/operator/take";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  profileObject : AngularFireObject<Profile>;
  profileList : AngularFireList<Profile>;

  constructor(public http: HttpClient,private database:AngularFireDatabase) {

  }

  getProfile(user: User) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    return this.profileObject.snapshotChanges();
  }


  async saveProfile(user:User,profile:Profile){
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    try {
      await this.profileObject.set(profile);
      return true
    }catch (e){
      console.error(e);
      return false
    }
  }


  searchUser(firstName:string){
     this.profileList =  this.database.list('/profiles',
      ref =>
        ref.orderByChild('firstName').equalTo(firstName)
    );
    return this.profileList
  }

}
