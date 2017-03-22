import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {SkillDetail}from '../skill-detail/skill-detail';

import {SkillServiceMock} from '../../providers/skill-service-mock';


@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html'
})
export class Skills {

    skills: Array<any>;
    searchKey: string = "";

    constructor(public navCtrl: NavController, public service: SkillServiceMock) {
        service.findAll().then(data => this.skills = data);
    }

    openBrokerDetail(skill) {
        this.navCtrl.push(SkillDetail, skill);
    }

    onInput(event) {
        this.service.findByName(this.searchKey)
            .then(data => {
                this.skills = data;

            })
            .catch(error => alert(error));
    }

    onCancel(event) {
        this.service.findAll().then(data => this.skills = data);
    }

  

}
