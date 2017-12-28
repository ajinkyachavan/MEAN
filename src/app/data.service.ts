import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) { }

  getUsers() {
    // return this._http.get('/api/users')
    //   .map(result => this.result = result.json().data);

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: myHeaders });
    
    return this._http.get('assets/seven-wonders.json', options).map(res => res.json());
  }

}
