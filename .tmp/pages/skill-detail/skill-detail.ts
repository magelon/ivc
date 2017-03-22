import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SkillDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-skill-detail',
  templateUrl: 'skill-detail.html'
})
export class SkillDetail {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SkillDetail Page');
  }

}
