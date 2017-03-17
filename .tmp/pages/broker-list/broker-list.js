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
export var BrokerListPage = (function () {
    function BrokerListPage(navCtrl, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.searchKey = "";
        service.findAll().then(function (data) { return _this.brokers = data; });
    }
    BrokerListPage.prototype.openBrokerDetail = function (broker) {
        this.navCtrl.push(BrokerDetailPage, broker);
    };
    BrokerListPage.prototype.onInput = function (event) {
        var _this = this;
        this.service.findByName(this.searchKey)
            .then(function (data) {
            _this.brokers = data;
        })
            .catch(function (error) { return alert(error); });
    };
    BrokerListPage.prototype.onCancel = function (event) {
        var _this = this;
        this.service.findAll().then(function (data) { return _this.brokers = data; });
    };
    BrokerListPage = __decorate([
        Component({
            selector: 'page-broker-list',template:/*ion-inline-start:"C:\Users\guojin\Desktop\server\iv\src\pages\broker-list\broker-list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n\n                       (ionCancel)="onCancel($event)"></ion-searchbar>\n\n       \n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-list>\n\n\n\n        <button ion-item *ngFor="let broker of brokers" (click)="openBrokerDetail(broker)">\n\n            <ion-avatar item-left>\n\n                <img src="./Face/{{broker.firstName}}{{broker.lastName}}/Face_FC.png"/>\n\n            </ion-avatar>\n\n            <h2>{{broker.firstName}} {{broker.lastName}}</h2>\n\n            <p>{{broker.title}}</p>\n\n        </button>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\guojin\Desktop\server\iv\src\pages\broker-list\broker-list.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, BrokerService])
    ], BrokerListPage);
    return BrokerListPage;
}());
//# sourceMappingURL=broker-list.js.map