import {Injectable} from '@angular/core';
import brokers from './mock-brokers';

@Injectable()
export class BrokerService {

    favorites: any = [];
    

    findAll() {
        return Promise.resolve(brokers);
    }

    findById(id) {
        return Promise.resolve(brokers[id - 1]);
    }

    findByName(searchKey: string) {
        let key: string = searchKey.toUpperCase();
        return Promise.resolve(brokers.filter((brokers: any) =>
            (brokers.firstName + ' ' + brokers.lastName + ' ' + brokers.title).toUpperCase().indexOf(key) > -1));
    }

    findBySkill(skill) {
        let key: string = skill;
        return Promise.resolve(brokers.filter((brokers: any) =>
            (brokers.skillA + ' ' + brokers.skillB + ' ' + brokers.skillC).toUpperCase().indexOf(key) > -1));
    }


    favorite(broker) {
        this.favorites.push(broker);
        return Promise.resolve();
    }

    getFavorites() {
        return Promise.resolve(this.favorites);
    }

    unfavorite(broker) {
        let index = this.favorites.indexOf(broker);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    }

}
