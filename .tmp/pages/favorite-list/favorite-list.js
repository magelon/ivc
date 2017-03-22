var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BrokerService } from '../../providers/broker-service-mock';
import { BrokerDetailPage } from '../broker-detail/broker-detail';
export var FavoriteListPage = (function () {
    function FavoriteListPage(navCtrl, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.brokerService = service;
        this.brokerService.getFavorites().then(function (data) { return _this.brokers = data; });
    }
    FavoriteListPage.prototype.itemTapped = function (broker) {
        this.navCtrl.push(BrokerDetailPage, broker);
    };
    FavoriteListPage.prototype.deleteItem = function (broker) {
        this.brokerService.unfavorite(broker);
    };
    FavoriteListPage = __decorate([
        Component({
            selector: 'page-favorite-list',template:/*ion-inline-start:"C:\Users\guojin\Desktop\server\ivc\src\pages\favorite-list\favorite-list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Favorites</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let broker of brokers">\n\n            <button ion-item (click)="itemTapped(broker)">\n\n                <ion-thumbnail item-left>\n\n                    <img src="./Face/{{broker.firstName}}{{broker.lastName}}/Face_FC.png"/>\n\n                </ion-thumbnail>\n\n                <h2>{{broker.firstName}}</h2>\n\n                <p>{{broker.title}}</p>\n\n            </button>\n\n            <ion-item-options>\n\n                <button danger (click)="deleteItem(broker)">Delete</button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\guojin\Desktop\server\ivc\src\pages\favorite-list\favorite-list.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, BrokerService])
    ], FavoriteListPage);
    return FavoriteListPage;
}());
//# sourceMappingURL=favorite-list.js.map