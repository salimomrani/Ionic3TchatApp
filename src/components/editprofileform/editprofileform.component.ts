import {Component, OnDestroy} from '@angular/core';
import {Profile} from "../../models/profile/profile.interface";
import {DataProvider} from "../../providers/data/data.service";
import {AuthProvider} from "../../providers/auth/auth.service";
import {Subscription} from "rxjs/Subscription";
import {User} from "firebase";
import {NavController, ToastController} from "ionic-angular";

/**
 * Generated class for the EditprofileformComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-editprofileform',
  templateUrl: 'editprofileform.component.html'
})
export class EditprofileformComponent implements OnDestroy{


  private authenticatedUser$ : Subscription;
  private authenticatedUser:User;

  profile = {} as Profile;

  constructor(private dataService : DataProvider,private ofAuth:AuthProvider,private toast:ToastController,private navCtrl: NavController) {
    this.authenticatedUser$ = this.ofAuth.getAuthenticatedUser().subscribe((user:User)=>{
      this.authenticatedUser = user;
    });

  }



  async saveProfile() {
    if (this.authenticatedUser){
      this.profile.email =this.authenticatedUser.email;
      const result = await this.dataService.saveProfile(this.authenticatedUser,this.profile);
      this.toast.create({
        message:'Votre compte a bien etait mis a jour',
        duration : 3000
      }).present();
      this.navCtrl.push('TabsPage');
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }
}
