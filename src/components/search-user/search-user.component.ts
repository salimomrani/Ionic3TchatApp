import { Component } from '@angular/core';
import {DataProvider} from "../../providers/data/data.service";
import {Profile} from "../../models/profile/profile.interface";
import {map} from "rxjs/operator/map";

/**
 * Generated class for the SearchUserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-search-user',
  templateUrl: 'search-user.component.html'
})
export class SearchUserComponent {

  query:string;

  profileList : Profile[];

  constructor(public data: DataProvider) {
  }

   searchUser(query:string){
      this.data.searchUser(query).valueChanges().subscribe(profile =>{
        this.profileList = profile
      })
   }
}
