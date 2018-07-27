import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Tour} from '../Model/tour';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import {catchError} from "rxjs/operators";

import {HandleError, HttpErrorHandler} from "./http-error-handler.service";

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
    return this.http.get<Tour[]>("http://localhost:3000/api/v1/tours")
      .pipe(catchError(this.errorHandle('Get Tours', [])))
  }

  getTour(id: number): Observable<Tour> {
    const url = 'http://localhost:3000/api/v1/tours/' + id;
    return this.http.get<Tour>(url, httpOptions)
  }

  getTourImageNames(id: number): Observable<String[]> {
    const url = 'http://localhost:3000/api/v1/tourImages/' + id;
    return this.http
      .get<String[]>(url, httpOptions);
  }

  getTourImage(id: String): Observable<Blob> {
    const url = 'http://localhost:3000/api/v1/tourImages/' + id;
    console.log("id of image " + id)
    return this.http
      .get(url, { responseType: 'blob' });
  }


}
