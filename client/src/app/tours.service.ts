import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Tour} from '../Model/tour';
import {Tours} from './mock-tours';
import {of} from 'rxjs/observable/of';

@Injectable()
export class ToursService {

  constructor() { }

  getTours(): Observable<Tour[]> {
    return of(Tours);
  }

  getTour(id: Number): Observable<Tour> {
    return of(Tours.find(tour => tour.id === id));
  }
}
