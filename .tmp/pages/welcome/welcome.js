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
export var WelcomePage = (function () {
    function WelcomePage() {
    }
    WelcomePage = __decorate([
        Component({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\guojin\Desktop\server\ivc\src\pages\welcome\welcome.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Welcome</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n    <ion-slides [options]="{pager: true}">\n\n\n\n        <ion-slide style="background-image: url(\'assets/img/slide_properties.png\')">\n\n            <p>Hero IV detail page.</p>\n\n        </ion-slide>\n\n\n\n        <ion-slide style="background-image: url(\'assets/img/slide_brokers.png\')">\n\n            <p>Check any hero you want!</p>\n\n        </ion-slide>\n\n\n\n        <ion-slide style="background-image: url(\'assets/img/slide_favorites.png\')">\n\n            <p>Enjoy Hero Arts!</p>\n\n        </ion-slide>\n\n\n\n    </ion-slides>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\guojin\Desktop\server\ivc\src\pages\welcome\welcome.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomePage);
    return WelcomePage;
}());
//# sourceMappingURL=welcome.js.map