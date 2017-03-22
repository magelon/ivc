import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {SERVER_URL} from './config';
import {Http, Headers, RequestOptions} from '@angular/http';

let brokersURL = SERVER_URL + 'brokers/',
    favoritesURL = brokersURL + 'favorites/';

@Injectable()
export class BrokerService {

    constructor(public http: Http) {
        this.http = http;
    }

    findAll() {
        return this.http.get(brokersURL)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(brokersURL + id)
            .map(res => res.json())
            .toPromise();
    }

    findByName(key: string) {
        return this.http.get(brokersURL + "?key=" + key)
            .map(res => res.json())
            .toPromise();
    }

    findBySkill(skill) {
        return this.http.get(brokersURL + skill)
            .map(res => res.json())
            .toPromise();
    }

    favorite(broker) {
        let body = JSON.stringify(broker),
            headers = new Headers({ 'Content-Type': 'application/json' }),
            options = new RequestOptions({ headers: headers });
        return this.http.post(brokersURL, body, options).toPromise();
    }

    getFavorites() {
        return this.http.get(favoritesURL)
            .map(res => res.json())
            .toPromise();
    }

    unfavorite(property) {
        return this.http.delete(favoritesURL + property.id)
            .map(res => res.json())
            .toPromise();
    }

}
