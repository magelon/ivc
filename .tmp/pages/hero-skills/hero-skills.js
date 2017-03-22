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
export var HeroSkills = (function () {
    function HeroSkills(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.broker = this.navParams.data;
    }
    HeroSkills = __decorate([
        Component({
            selector: 'page-hero-skills',template:/*ion-inline-start:"C:\Users\guojin\Desktop\server\ivc\src\pages\hero-skills\hero-skills.html"*/'\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>HeroSkills</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\guojin\Desktop\server\ivc\src\pages\hero-skills\hero-skills.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, NavParams])
    ], HeroSkills);
    return HeroSkills;
}());
//# sourceMappingURL=hero-skills.js.map