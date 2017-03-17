import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-mock';
import {BrokerDetailPage} from '../broker-detail/broker-detail';

@Component({
    selector: 'page-broker-list',
    templateUrl: 'broker-list.html'
})
export class BrokerListPage {

    brokers: Array<any>;
    searchKey: string = "";

    constructor(public navCtrl: NavController, public service: BrokerService) {
        service.findAll().then(data => this.brokers = data);
    }

    openBrokerDetail(broker) {
        this.navCtrl.push(BrokerDetailPage, broker);
    }

    onInput(event) {
        this.service.findByName(this.searchKey)
            .then(data => {
                this.brokers = data;
                
            })
            .catch(error => alert(error));
    }

    onCancel(event) {
        this.service.findAll().then(data => this.brokers = data);
    }




}
