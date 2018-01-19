import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the LocalNotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local-notifications',
  templateUrl: 'local-notifications.html',
})
export class LocalNotificationsPage {

  results: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public localNotifications: LocalNotifications) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalNotificationsPage');
  }

  scheduleNotification() {
    this.localNotifications.schedule({
      id: 1,
      title: 'Cool Notification',
      text: 'This is my cool notification!',
      data: {
        id: 21,
        name: 'Cool Notification #21'
      }
    });
  }
}
