import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Arts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-arts',
  templateUrl: 'arts.html'
})
export class Arts {
    broker: any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.broker = this.navParams.data;
    }

  ionViewDidLoad() {
    console.log('Hello Arts Page');
  }

}
