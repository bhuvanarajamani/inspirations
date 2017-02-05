import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Quote } from '../models/quote';

@Injectable()
export class QuotesService {
  private baseUrl: string = './assets/data.json';

  constructor(private http: Http) { }
  
  getQuotes(): Observable<Quote[]>{
    return this.http
      .get(this.baseUrl)
      .map(resp => resp.json().quotes)
      .catch((error: any) => Observable.throw(error.json()));
  }

}
