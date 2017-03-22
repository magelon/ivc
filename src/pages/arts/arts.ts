import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-arts',
  templateUrl: 'arts.html'
})
export class Arts {
    broker: any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.broker = this.navParams.data;
    }

 

}
