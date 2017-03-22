import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-mock';
import {BrokerDetailPage} from '../broker-detail/broker-detail';


@Component({
  selector: 'page-skill-detail',
  templateUrl: 'skill-detail.html'
})
export class SkillDetail {

    skill: any;
    brokers: Array<any>;
    

    constructor(public navCtrl: NavController, public navParams: NavParams, public serviceB: BrokerService)
    {
        this.skill = this.navParams.data;
       console.log(this.skill)
        serviceB.findBySkill(this.skill.name).then(
            brokers => this.brokers = brokers
        );


        

    }

    openBrokerDetail(broker) {
        this.navCtrl.push(BrokerDetailPage, broker);
    }

  

}
