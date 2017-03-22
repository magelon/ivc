import {Component} from '@angular/core';
import {ActionSheetController,ActionSheet,NavController, NavParams, ToastController} from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-mock';
import {Arts} from '../arts/arts';


@Component({
    selector: 'page-broker-detail',
    templateUrl: 'broker-detail.html'
})
export class BrokerDetailPage {

    broker: any;
    
    constructor(public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams, public service: BrokerService, public toastCtrl: ToastController) {
        this.broker = this.navParams.data;
        service.findById(this.broker.id).then(
            broker => this.broker = broker
        );

        
    }

    openArtsPage(broker) {
        this.navCtrl.push(Arts, broker);
    }

    //openHeroSkillsPage(broker) {
        //this.navCtrl.push(HeroSkills, broker);
       // }

        favorite(broker) {
            this.service.favorite(broker)
                .then(broker => {
                    let toast = this.toastCtrl.create({
                        message: 'Hero added to your favorites',
                        cssClass: 'mytoast',
                        duration: 1000
                    });
                    toast.present(toast);
                });
        }

        share(broker) {
            let actionSheet: ActionSheet = this.actionSheetCtrl.create({
                title: 'LV.40',
                buttons: [
                    {
                        text:'HP:'+ broker.hpm,
                        handler: () => console.log('share via twitter')
                    },
                    {
                        text: 'ATK:' + broker.atkm,
                        handler: () => console.log('share via twitter')
                    },
                    {
                        text: 'SPD:' + broker.spdm,
                        handler: () => console.log('share via twitter')
                    },
                    {
                        text: 'DEF:' + broker.defm,
                        handler: () => console.log('share via twitter')
                    },
                    {
                        text: 'RES:' + broker.resm,
                        handler: () => console.log('share via twitter')
                    }
                ]
            });

            actionSheet.present();
        }


}
