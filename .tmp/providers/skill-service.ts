import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {SERVER_URL} from './config';
import {Http, Headers, RequestOptions} from '@angular/http';

let skillsURL = SERVER_URL + 'skills/';

@Injectable()
export class SkillService {

    constructor(public http: Http) {
        this.http = http;
    }

    findAll() {
        return this.http.get(skillsURL)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(skillsURL + id)
            .map(res => res.json())
            .toPromise();
    }

    findByName(key: string) {
        return this.http.get(skillsURL + "?key=" + key)
            .map(res => res.json())
            .toPromise();
    }

}
