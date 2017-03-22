var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { SERVER_URL } from './config';
import { Http } from '@angular/http';
var skillsURL = SERVER_URL + 'skills/';
export var SkillService = (function () {
    function SkillService(http) {
        this.http = http;
        this.http = http;
    }
    SkillService.prototype.findAll = function () {
        return this.http.get(skillsURL)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    SkillService.prototype.findById = function (id) {
        return this.http.get(skillsURL + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    SkillService.prototype.findByName = function (key) {
        return this.http.get(skillsURL + "?key=" + key)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    SkillService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], SkillService);
    return SkillService;
}());
//# sourceMappingURL=skill-service.js.map