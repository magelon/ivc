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
import { BrokerDetailPage } from '../broker-detail/broker-detail';
import { PropertyService } from '../../providers/property-service-mock';
export var PropertyDetailPage = (function () {
    function PropertyDetailPage(actionSheetCtrl, navCtrl, navParams, propertyService, toastCtrl) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.property = this.navParams.data;
        propertyService.findById(this.property.id).then(function (property) { return _this.property = property; });
    }
    PropertyDetailPage.prototype.openBrokerDetail = function (broker) {
        this.navCtrl.push(BrokerDetailPage, broker);
    };
    PropertyDetailPage.prototype.favorite = function (property) {
        var _this = this;
        this.propertyService.favorite(property)
            .then(function (property) {
            var toast = _this.toastCtrl.create({
                message: 'Property added to your favorites',
                cssClass: 'mytoast',
                duration: 1000
            });
            toast.present(toast);
        });
    };
    PropertyDetailPage.prototype.share = function (property) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: function () { return console.log('share via twitter'); }
                },
                {
                    text: 'Facebook',
                    handler: function () { return console.log('share via twitter'); }
                },
                {
                    text: 'Email',
                    handler: function () { return console.log('share via email'); }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { return console.log('cancel share'); }
                }
            ]
        });
        actionSheet.present();
    };
    PropertyDetailPage = __decorate([
        Component({
            selector: 'page-property-detail',template:/*ion-inline-start:"C:\Users\guojin\Desktop\server\iv\src\pages\property-detail\property-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Property</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card *ngIf="property.id">\n\n        <img src="{{property.pic}}"/>\n\n        <ion-card-content>\n\n            <h2 class="card-title">{{property.title}}</h2>\n\n            <p>{{property.address}}, {{property.city}} {{property.state}}</p>\n\n        </ion-card-content>\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n                <ion-icon item-left name="moon"></ion-icon>\n\n                <h3>Bedrooms</h3>\n\n                <ion-note item-right>{{property.bedrooms}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left name="leaf"></ion-icon>\n\n                <h3>Bathrooms</h3>\n\n                <ion-note item-right>{{property.bathrooms}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left name="pricetag"></ion-icon>\n\n                <h3>Asking Price</h3>\n\n                <ion-note item-right>{{property.price}}</ion-note>\n\n            </ion-item>\n\n            <button ion-item (click)="openBrokerDetail(property.broker)">\n\n                <ion-avatar item-left>\n\n                    <img src="{{property.broker.picture}}"/>\n\n                </ion-avatar>\n\n                <h2>{{property.broker.name}}</h2>\n\n                <p>{{property.broker.title}}</p>\n\n            </button>\n\n        </ion-list>\n\n\n\n        <ion-item>\n\n            <button ion-button icon-left (click)="favorite(property)" clear item-left>\n\n                <ion-icon name="star"></ion-icon>\n\n                Favorite\n\n            </button>\n\n            <button ion-button icon-left (click)="share(property)" clear item-right>\n\n                <ion-icon name="share"></ion-icon>\n\n                Share\n\n            </button>\n\n        </ion-item>\n\n\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\guojin\Desktop\server\iv\src\pages\property-detail\property-detail.html"*/
        }), 
        __metadata('design:paramtypes', [ActionSheetController, NavController, NavParams, PropertyService, ToastController])
    ], PropertyDetailPage);
    return PropertyDetailPage;
}());
//# sourceMappingURL=property-detail.js.map