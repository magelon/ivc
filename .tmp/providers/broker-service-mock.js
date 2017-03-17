var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import brokers from './mock-brokers';
export var BrokerService = (function () {
    function BrokerService() {
        this.favorites = [];
    }
    BrokerService.prototype.findAll = function () {
        return Promise.resolve(brokers);
    };
    BrokerService.prototype.findById = function (id) {
        return Promise.resolve(brokers[id - 1]);
    };
    BrokerService.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        return Promise.resolve(brokers.filter(function (brokers) {
            return (brokers.firstName + ' ' + brokers.lastName + ' ' + brokers.title).toUpperCase().indexOf(key) > -1;
        }));
    };
    BrokerService.prototype.favorite = function (broker) {
        this.favorites.push(broker);
        return Promise.resolve();
    };
    BrokerService.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    BrokerService.prototype.unfavorite = function (broker) {
        var index = this.favorites.indexOf(broker);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    };
    BrokerService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], BrokerService);
    return BrokerService;
}());
//# sourceMappingURL=broker-service-mock.js.map