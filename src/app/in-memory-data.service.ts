import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' , pts: 100},
      { id: 13, name: 'Bombasto' ,pts: 222},
      { id: 14, name: 'Celeritas' ,pts: 163},
      { id: 15, name: 'Magneta' ,pts: 76},
      { id: 16, name: 'RubberMan' ,pts: 654},
      { id: 17, name: 'Dynama' ,pts: 632},
      { id: 18, name: 'Dr. IQ' ,pts: 24},
      { id: 19, name: 'Magma' ,pts: 2},
      { id: 20, name: 'Tornado' ,pts: 210}
    ];
    heroes.sort((a, b) => (a.pts > b.pts) ? -1 : 1);;

    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}