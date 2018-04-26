import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Image} from '../Model/Image'
import {Tour} from '../Model/tour';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

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
export class ImageService {

  private errorHandle : HandleError

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler)
  {this.errorHandle = httpErrorHandler.createHandleError("ImageService") }


  getImage(id: number): Observable<Image> {
    const url = 'api/v1/tourImages/' + id;
    return this.http.get<Image>(url, httpOptions)
  }

}
