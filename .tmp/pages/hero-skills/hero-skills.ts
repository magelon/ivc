import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-hero-skills',
  templateUrl: 'hero-skills.html'
})
export class HeroSkills {

    broker: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.broker = this.navParams.data;
        
    }

 

}
