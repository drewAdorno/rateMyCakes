import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable: variable-name one-line no-string-literal whitespace

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes()
  {
    return this._http.get('/cakes');
  }
  postCakes(cake)
  {
    console.log(`${cake.bakerName} baker`);
    return this._http.post('/cake', cake);
  }
}

