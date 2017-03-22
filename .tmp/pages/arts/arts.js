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
export var Arts = (function () {
    function Arts(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.broker = this.navParams.data;
    }
    Arts = __decorate([
        Component({
            selector: 'page-arts',template:/*ion-inline-start:"C:\Users\guojin\Desktop\server\ivc\src\pages\arts\arts.html"*/'\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Arts</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n<div>\n</div>\n<ion-slides pager [options]="{pager: true}">\n\n\n\n\n\n\n\n  <ion-slide style="background-color: green">\n\n     <img src="./Face/{{broker.firstName}}{{broker.lastName}}/BtlFace.png"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide style="background-color: blue">\n\n    <img src="./Face/{{broker.firstName}}{{broker.lastName}}/BtlFace_C.png"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide style="background-color: red">\n\n    <img src="./Face/{{broker.firstName}}{{broker.lastName}}/BtlFace_D.png"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide style="background-color: green">\n\n     <img src="./Face/{{broker.firstName}}{{broker.lastName}}/Face.png"/>\n\n  </ion-slide>\n\n\n\n</ion-slides>\n'/*ion-inline-end:"C:\Users\guojin\Desktop\server\ivc\src\pages\arts\arts.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, NavParams])
    ], Arts);
    return Arts;
}());
//# sourceMappingURL=arts.js.map