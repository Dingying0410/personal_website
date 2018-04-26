import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Tour} from '../Model/tour';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import {catchError} from "rxjs/operators";

import {HttpErrorHandler, HandleError} from "./http-error-handler.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ToursService {

  private errorHandle : HandleError

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler)
     {this.errorHandle = httpErrorHandler.createHandleError("TourService") }

  getTours(): Observable<Tour[]> {
    console.log("123")
    return this.http.get<Tour[]>("api/v1/tours")
      .pipe(catchError(this.errorHandle('Get Tours', [])))
  }

  getTour(id: number): Observable<Tour> {
    console.log("id = " + id)
    const url = 'api/v1/tours/' + id;
    return this.http.get<Tour>(url, httpOptions)
  }
}
