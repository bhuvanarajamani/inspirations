import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Quote } from '../models/quote';

const QUOTES_API: string = "/quotes";

@Injectable()
export class QuotesService {

  constructor(private http: Http) { }
  
  getQuotes(): Observable<Quote[]>{
    return this.http
      .get(QUOTES_API)
      .map(resp => resp.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

}
