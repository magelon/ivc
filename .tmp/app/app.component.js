var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { BrokerListPage } from '../pages/broker-list/broker-list';
import { FavoriteListPage } from '../pages/favorite-list/favorite-list';
import { WelcomePage } from '../pages/welcome/welcome';
import { AboutPage } from '../pages/about/about';
export var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = WelcomePage;
        this.initializeApp();
        this.appMenuItems = [
            //{title: 'Properties', component: PropertyListPage, icon: 'home'},
            { title: 'Heroes', component: BrokerListPage, icon: 'people' },
            // { title: 'Arts', component: Arts, icon: 'people' },
            { title: 'Favorites', component: FavoriteListPage, icon: 'star' },
        ];
        this.helpMenuItems = [
            { title: 'Welcome', component: WelcomePage, icon: 'bookmark' },
            { title: 'About', component: AboutPage, icon: 'information-circle' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleLightContent();
            Splashscreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        ViewChild(Nav), 
        __metadata('design:type', Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({template:/*ion-inline-start:"C:\Users\guojin\Desktop\server\iv\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-content>\n\n\n\n    <img src="assets/img/Item.png" class="menu-logo"/>\n\n\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Allies\n\n      </ion-list-header>\n\n      <button menuClose ion-item *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n\n        {{menuItem.title}}\n\n      </button>\n\n    </ion-list>\n\n\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Help\n\n      </ion-list-header>\n\n      <button menuClose ion-item *ngFor="let menuItem of helpMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n\n        {{menuItem.title}}\n\n      </button>\n\n    </ion-list>\n\n\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\guojin\Desktop\server\iv\src\app\app.html"*/
        }), 
        __metadata('design:paramtypes', [Platform])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map