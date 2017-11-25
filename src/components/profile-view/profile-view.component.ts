import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataProvider} from "../../providers/data/data.service";
import {AuthProvider} from "../../providers/auth/auth.service";
import {User} from "firebase/app";
import {Profile} from "../../models/profile/profile.interface";
import {Loading, LoadingController} from "ionic-angular";

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit{


  private authUser : User;
  private  userProfile : Profile;
  private loader: Loading;

  @Output() existingProfile : EventEmitter<Profile>;

  constructor(private loading:LoadingController,private data:DataProvider,private auth:AuthProvider) {

    this.existingProfile = new EventEmitter<Profile>();

    this.loader = this.loading.create({
      content: 'Chargement de votre Profile...',
      duration : 1000
    })
  }

  ngOnInit() {
    this.loader.present().catch(error=>{
      console.log(error)
    });
    this.auth.getAuthenticatedUser().subscribe((user: User)=>{

      this.authUser = user

       this.data.getProfile(user).subscribe((profile)=>{
          this.userProfile = <Profile>profile.payload.val();
         this.loader.dismissAll()
       })
    })
  }



}
