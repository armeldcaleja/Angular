import { Injectable } from '@angular/core';
import { Hero } from './hero';

import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{
    //--------- code without promise ----------//
    // getHeroes(): Hero[]{
    //     return HEROES;
    // }

    //--------- code for promise ----------//
    getHeroes(): Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }

}