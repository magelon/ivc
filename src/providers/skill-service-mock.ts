import {Injectable} from '@angular/core';
import skills from './mock-skills';

@Injectable()
export class SkillServiceMock {

        findAll() {
            return Promise.resolve(skills);
        }

        findById(id) {
            return Promise.resolve(skills[id - 1]);
        }

        findByName(searchKey: string) {
            let key: string = searchKey.toUpperCase();
            return Promise.resolve(skills.filter((skills: any) =>
                (skills.name + ' ' + skills.doc+' '+skills.type).toUpperCase().indexOf(key) > -1));
        }

  

}
