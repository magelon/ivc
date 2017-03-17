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
import { ActionSheetController, NavController, NavParams, ToastController } from 'ionic-angular';
import { BrokerService } from '../../providers/broker-service-mock';
import { Arts } from '../arts/arts';
export var BrokerDetailPage = (function () {
    function BrokerDetailPage(actionSheetCtrl, navCtrl, navParams, service, toastCtrl) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.broker = this.navParams.data;
        service.findById(this.broker.id).then(function (broker) { return _this.broker = broker; });
    }
    BrokerDetailPage.prototype.openArts = function (broker) {
        this.navCtrl.push(Arts, broker);
    };
    BrokerDetailPage.prototype.favorite = function (broker) {
        var _this = this;
        this.service.favorite(broker)
            .then(function (broker) {
            var toast = _this.toastCtrl.create({
                message: 'Hero added to your favorites',
                cssClass: 'mytoast',
                duration: 1000
            });
            toast.present(toast);
        });
    };
    BrokerDetailPage.prototype.share = function (broker) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'LV.40',
            buttons: [
                {
                    text: 'HP:' + broker.hpm,
                    handler: function () { return console.log('share via twitter'); }
                },
                {
                    text: 'ATK:' + broker.atkm,
                    handler: function () { return console.log('share via twitter'); }
                },
                {
                    text: 'SPD:' + broker.spdm,
                    handler: function () { return console.log('share via twitter'); }
                },
                {
                    text: 'DEF:' + broker.defm,
                    handler: function () { return console.log('share via twitter'); }
                },
                {
                    text: 'RES:' + broker.resm,
                    handler: function () { return console.log('share via twitter'); }
                }
            ]
        });
        actionSheet.present();
    };
    BrokerDetailPage = __decorate([
        Component({
            selector: 'page-broker-detail',template:/*ion-inline-start:"C:\Users\guojin\Desktop\server\iv\src\pages\broker-detail\broker-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Heroes</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="broker">\n\n\n\n    <ion-card>\n\n\n\n       \n\n        <ion-card-content>\n\n             \n\n            <img src="./Face/{{broker.firstName}}{{broker.lastName}}/Face_FC.png"/>\n\n              \n\n            <h2>{{broker.firstName}} {{broker.lastName}}</h2>\n\n            <h3>{{broker.title}}</h3>\n\n        </ion-card-content>\n\n         \n\n        <button ion-item (click)="openArts(broker)"><ion-icon name="brush" item-left></ion-icon>{{broker.artby}}</button> \n\n        \n\n\n\n        <ion-list>\n\n            <a href="tel:" ion-item>\n\n                <ion-icon name="" item-left>HP </ion-icon>\n\n                <p>LV.1</p>\n\n                <h2>{{broker.hp}}</h2>\n\n            </a>\n\n            <a href="tel:" ion-item>\n\n                <ion-icon name="" item-left>ATK</ion-icon>\n\n                <p>LV.1</p>\n\n                <h2>{{broker.atk}}</h2>\n\n            </a>\n\n            <a href="tel:" ion-item>\n\n                <ion-icon name="" item-left>SPD</ion-icon>\n\n                <p>LV.1</p>\n\n                <h2>{{broker.spd}}</h2>\n\n            </a>\n\n            <a href="tel:" ion-item>\n\n                <ion-icon name="" item-left>DEF</ion-icon>\n\n                <p>LV.1</p>\n\n                <h2>{{broker.def}}</h2>\n\n            </a>\n\n            <a href="tel:" ion-item>\n\n                <ion-icon name="" item-left>RES</ion-icon>\n\n                <p>LV.1</p>\n\n                <h2>{{broker.res}}</h2>\n\n            </a>\n\n        </ion-list>\n\n\n\n         <ion-item>\n\n            <button ion-button icon-left (click)="favorite(broker)" clear item-left>\n\n                <ion-icon name="star"></ion-icon>\n\n                Favorite\n\n            </button>\n\n\n\n              <button ion-button icon-left (click)="share(broker)" clear item-right>\n\n                <ion-icon name="star"></ion-icon>\n\n                LV.40\n\n            </button>\n\n\n\n             </ion-item>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\guojin\Desktop\server\iv\src\pages\broker-detail\broker-detail.html"*/
        }), 
        __metadata('design:paramtypes', [ActionSheetController, NavController, NavParams, BrokerService, ToastController])
    ], BrokerDetailPage);
    return BrokerDetailPage;
}());
//# sourceMappingURL=broker-detail.js.map