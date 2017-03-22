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
import { Config, NavController } from 'ionic-angular';
import { PropertyService } from '../../providers/property-service-mock';
import { PropertyDetailPage } from '../property-detail/property-detail';
import 'leaflet';
export var PropertyListPage = (function () {
    function PropertyListPage(navCtrl, service, config) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.config = config;
        this.searchKey = "";
        this.viewMode = "list";
        this.findAll();
    }
    PropertyListPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(PropertyDetailPage, property);
    };
    PropertyListPage.prototype.onInput = function (event) {
        var _this = this;
        this.service.findByName(this.searchKey)
            .then(function (data) {
            _this.properties = data;
            if (_this.viewMode === "map") {
                _this.showMarkers();
            }
        })
            .catch(function (error) { return alert(error); });
    };
    PropertyListPage.prototype.onCancel = function (event) {
        this.findAll();
    };
    PropertyListPage.prototype.findAll = function () {
        var _this = this;
        this.service.findAll()
            .then(function (data) { return _this.properties = data; })
            .catch(function (error) { return alert(error); });
    };
    PropertyListPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = L.map("map").setView([42.361132, -71.070876], 14);
            L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(_this.map);
            _this.showMarkers();
        });
    };
    PropertyListPage.prototype.showMarkers = function () {
        var _this = this;
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = L.layerGroup([]);
        this.properties.forEach(function (property) {
            var marker = L.marker([property.lat, property.long]).on('click', function (event) { return _this.openPropertyDetail(event.target.data); });
            marker.data = property;
            _this.markersGroup.addLayer(marker);
        });
        this.map.addLayer(this.markersGroup);
    };
    PropertyListPage = __decorate([
        Component({
            selector: 'page-property-list',template:/*ion-inline-start:"C:\Users\guojin\Desktop\server\ivc\src\pages\property-list\property-list.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n\n                       (ionCancel)="onCancel($event)"></ion-searchbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="property-list">\n\n\n\n    <ion-list *ngIf="viewMode===\'list\'">\n\n\n\n        <ion-item-sliding *ngFor="let property of properties">\n\n            <button ion-item (click)="openPropertyDetail(property)">\n\n                <ion-thumbnail item-left>\n\n                    <img src="{{property.thumb}}"/>\n\n                </ion-thumbnail>\n\n                <h2>{{property.title}}</h2>\n\n                <p>{{property.city}}, {{property.state}} ∙ {{ property.price }}</p>\n\n            </button>\n\n            <ion-item-options>\n\n                <button danger (click)="deleteItem(property)">Delete</button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n\n\n    </ion-list>\n\n\n\n    <div *ngIf="viewMode===\'map\'" style="width:100%;height:100%;" id="map"></div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer padding>\n\n    <ion-segment [(ngModel)]="viewMode">\n\n        <ion-segment-button value="list">\n\n            <ion-icon name="list"></ion-icon>\n\n        </ion-segment-button>\n\n        <ion-segment-button value="map" (ionSelect)="showMap()">\n\n            <ion-icon name="map"></ion-icon>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\guojin\Desktop\server\ivc\src\pages\property-list\property-list.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, PropertyService, Config])
    ], PropertyListPage);
    return PropertyListPage;
}());
//# sourceMappingURL=property-list.js.map