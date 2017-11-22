import { NgModule } from '@angular/core';
import { LoginformComponent } from './loginform/loginform.component';
import {IonicModule} from "ionic-angular";
import {RegisterFormComponent} from "./register/register-form.component";
import { EditprofileformComponent } from './editprofileform/editprofileform.component';
@NgModule({
	declarations: [
    LoginformComponent,
    RegisterFormComponent,
    EditprofileformComponent],
	imports: [IonicModule],
	exports: [
    LoginformComponent,
    RegisterFormComponent,
    EditprofileformComponent]
})
export class ComponentsModule {}
