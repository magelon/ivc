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
export var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Component({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\guojin\Desktop\server\ivc\src\pages\about\about.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>About</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div class="about-header">\n\n        <img src="assets/img/Item.png">\n\n    </div>\n\n\n\n    <div padding class="about-info">\n\n\n\n        <h4>Fire Emblem Heroes IV Check</h4>\n\n\n\n        <p>\n\n            Fire Emblem Heroes IV Check is a sample application that demonstrayes how to build apps with Ionic 2, Angular 2, and Node.js\n\n        </p>\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\guojin\Desktop\server\ivc\src\pages\about\about.html"*/
        }), 
        __metadata('design:paramtypes', [NavController])
    ], AboutPage);
    return AboutPage;
}());
//# sourceMappingURL=about.js.map