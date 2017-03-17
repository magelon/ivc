import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {BrokerService} from '../../providers/broker-service-mock';

import {BrokerDetailPage} from '../broker-detail/broker-detail';

@Component({
    selector: 'page-favorite-list',
    templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {

    
    brokers: Array<any>;
    brokerService: BrokerService;
    

    constructor(public navCtrl: NavController, public service: BrokerService) {
        this.brokerService = service;
        this.brokerService.getFavorites().then(data => this.brokers = data);
    }

    itemTapped(broker) {
        this.navCtrl.push(BrokerDetailPage,broker);
    }

    deleteItem(broker) {
        this.brokerService.unfavorite(broker);
    }

}
