import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class DataService{

  constructor(public http: Http){}

  public loadData() {

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    myHeaders.append('Access-Control-Allow-Headers', 'origin, content-type, x-requested-with');
    
    let options = new RequestOptions({ headers: myHeaders });
    

    const url = 'https://github.com/nshntarora/Indian-Cities-JSON/blob/master/a-detailed-version.json';
    return this.http.get('assets/india_places_to_visit.json', options).map(res=>res.json());
    
  }

}
