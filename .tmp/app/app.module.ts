import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import {WelcomePage} from '../pages/welcome/welcome';
import {PropertyListPage} from '../pages/property-list/property-list';
import {PropertyDetailPage} from '../pages/property-detail/property-detail';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {BrokerDetailPage} from '../pages/broker-detail/broker-detail';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {AboutPage} from '../pages/about/about';
import {Arts} from '../pages/arts/arts';
import {Skills}from '../pages/skills/skills';
import {HeroSkills}from '../pages/hero-skills/hero-skills';
import {SkillDetail}from '../pages/skill-detail/skill-detail';

import { PropertyService } from "../providers/property-service-mock";
import { BrokerService } from "../providers/broker-service-mock";
import {SkillServiceMock}from "../providers/skill-service-mock";



@NgModule({
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
  providers: [PropertyService, BrokerService,SkillServiceMock]
})
export class AppModule {}
