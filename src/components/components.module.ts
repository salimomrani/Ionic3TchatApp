import { NgModule } from '@angular/core';
import { LoginformComponent } from './loginform/loginform.component';
import {IonicModule} from "ionic-angular";
import {RegisterFormComponent} from "./register/register-form.component";
import { EditprofileformComponent } from './editprofileform/editprofileform.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { SearchUserComponent } from './search-user/search-user.component';
@NgModule({
	declarations: [
    LoginformComponent,
    RegisterFormComponent,
    EditprofileformComponent,
    ProfileViewComponent,
    SearchUserComponent],
	imports: [IonicModule],
	exports: [
    LoginformComponent,
    RegisterFormComponent,
    EditprofileformComponent,
    ProfileViewComponent,
    SearchUserComponent]
})
export class ComponentsModule {}
