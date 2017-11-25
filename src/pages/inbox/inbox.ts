import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MESSAGE_LIST} from "../../mocks/message/message";
import {Message} from "../../models/message/message.interface";

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  messageList:Message[] = MESSAGE_LIST;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  navigateToSearchUserPage() {
    this.navCtrl.push('SearchUserPage');
  }
}
