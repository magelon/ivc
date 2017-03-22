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
import { NavController, NavParams } from 'ionic-angular';
import { BrokerService } from '../../providers/broker-service-mock';
import { BrokerDetailPage } from '../broker-detail/broker-detail';
export var SkillDetail = (function () {
    function SkillDetail(navCtrl, navParams, serviceB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceB = serviceB;
        this.skill = this.navParams.data;
        console.log(this.skill);
        serviceB.findBySkill(this.skill.name).then(function (brokers) { return _this.brokers = brokers; });
    }
    SkillDetail.prototype.openBrokerDetail = function (broker) {
        this.navCtrl.push(BrokerDetailPage, broker);
    };
    SkillDetail = __decorate([
        Component({
            selector: 'page-skill-detail',template:/*ion-inline-start:"C:\Users\guojin\Desktop\server\ivc\src\pages\skill-detail\skill-detail.html"*/'\n<ion-header>\n\n  <ion-navbar>\n       <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n    <ion-title>{{skill.name}}SkillDetail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n<ion-list>\n\n\n\n        <button ion-item *ngFor="let broker of brokers" (click)="openBrokerDetail(broker)">\n\n            <ion-avatar item-left>\n\n                <img src="./Face/{{broker.firstName}}{{broker.lastName}}/Face_FC.png"/>\n\n            </ion-avatar>\n\n            <h2>{{broker.firstName}} {{broker.lastName}}</h2>\n\n            <p>{{broker.title}}</p>\n\n        </button>\n\n\n\n    </ion-list>\n\n    </ion-content>'/*ion-inline-end:"C:\Users\guojin\Desktop\server\ivc\src\pages\skill-detail\skill-detail.html"*/
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a) || Object, (typeof (_b = typeof NavParams !== 'undefined' && NavParams) === 'function' && _b) || Object, (typeof (_c = typeof BrokerService !== 'undefined' && BrokerService) === 'function' && _c) || Object])
    ], SkillDetail);
    return SkillDetail;
    var _a, _b, _c;
}());
//# sourceMappingURL=skill-detail.js.map