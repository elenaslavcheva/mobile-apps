import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamsPage } from '../pages';
import { EliteApiProvider } from '../../providers/elite-api/elite-api';


/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eliteApi: EliteApiProvider, public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting tournaments...',
      //spinner: 'dots'
    });
    loader.present().then(() => {
      this.eliteApi.getTournaments().subscribe(
        tournaments => {
          this.tournaments = tournaments;  
          loader.dismiss();
      });
    });
  }

  itemTapped($event, item) {
    this.navCtrl.push(TeamsPage, item);
  }

}
