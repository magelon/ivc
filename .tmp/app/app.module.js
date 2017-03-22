var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { PropertyListPage } from '../pages/property-list/property-list';
import { PropertyDetailPage } from '../pages/property-detail/property-detail';
import { BrokerListPage } from '../pages/broker-list/broker-list';
import { BrokerDetailPage } from '../pages/broker-detail/broker-detail';
import { FavoriteListPage } from '../pages/favorite-list/favorite-list';
import { AboutPage } from '../pages/about/about';
import { Arts } from '../pages/arts/arts';
import { Skills } from '../pages/skills/skills';
import { HeroSkills } from '../pages/hero-skills/hero-skills';
import { SkillDetail } from '../pages/skill-detail/skill-detail';
import { PropertyService } from "../providers/property-service-mock";
import { BrokerService } from "../providers/broker-service-mock";
import { SkillServiceMock } from "../providers/skill-service-mock";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                WelcomePage,
                AboutPage,
                PropertyListPage,
                PropertyDetailPage,
                FavoriteListPage,
                BrokerListPage,
                BrokerDetailPage,
                Arts,
                Skills,
                HeroSkills,
                SkillDetail
            ],
            imports: [
                IonicModule.forRoot(MyApp)
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                WelcomePage,
                AboutPage,
                PropertyListPage,
                PropertyDetailPage,
                FavoriteListPage,
                BrokerListPage,
                BrokerDetailPage,
                Arts,
                Skills,
                HeroSkills,
                SkillDetail
            ],
            providers: [PropertyService, BrokerService, SkillServiceMock]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map