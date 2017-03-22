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
import { SkillDetail } from '../skill-detail/skill-detail';
import { SkillServiceMock } from '../../providers/skill-service-mock';
export var Skills = (function () {
    function Skills(navCtrl, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.searchKey = "";
        service.findAll().then(function (data) { return _this.skills = data; });
    }
    Skills.prototype.openSkillDetail = function (skill) {
        this.navCtrl.push(SkillDetail, skill);
    };
    Skills.prototype.onInput = function (event) {
        var _this = this;
        this.service.findByName(this.searchKey)
            .then(function (data) {
            _this.skills = data;
        })
            .catch(function (error) { return alert(error); });
    };
    Skills.prototype.onCancel = function (event) {
        var _this = this;
        this.service.findAll().then(function (data) { return _this.skills = data; });
    };
    Skills = __decorate([
        Component({
            selector: 'page-skills',template:/*ion-inline-start:"C:\Users\guojin\Desktop\server\ivc\src\pages\skills\skills.html"*/'\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n\n                       (ionCancel)="onCancel($event)"></ion-searchbar>\n\n       \n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-list>\n\n\n\n        <button ion-item *ngFor="let skill of skills" (click)="openSkillDetail(skill)">\n\n            <ion-avatar item-left>\n\n                <img src="./skill/{{skill.type}}/{{skill.name}}.png"/>\n\n            </ion-avatar>\n\n            <h2>{{skill.name}}</h2>\n\n            \n\n        </button>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\guojin\Desktop\server\ivc\src\pages\skills\skills.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, SkillServiceMock])
    ], Skills);
    return Skills;
}());
//# sourceMappingURL=skills.js.map