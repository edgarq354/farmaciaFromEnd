import { Injectable } from '@angular/core'; 
import { GLOBAL } from '../global';


import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
//import { map,catchError } from "rxjs/operators";
/**
 * npm install rxjs-compat
 * 
 */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {
  public url: string;
  public nombre: string;

  private options;

  constructor (private http: Http) {
    //let token = localStorage.getItem('token');
    let headers = new Headers({
      'Content-Type': 'application/json'
      //'Authorization':'Bearer ' + token
    });
    this.options = new RequestOptions({ headers: headers });
    this.url = GLOBAL.url;
    this.nombre = 'frmFarmacia.php?opcion=';
  
  }

    
  lista_farmacia (pin,jsonData) {
    let url = this.url + '/' + this.nombre + 'lista_farmacia';
    let iJson = jsonData;
    return this.http.post(url, iJson, this.options)
                    .map(response => response.json())
                    .catch(this.handleError);;
  }

  getFarmaciaPorId(pin,jsonData) {
    let url = this.url + '/' + this.nombre + 'getFarmaciaPorId';
    let iJson = jsonData;
    return this.http.post(url, iJson, this.options)
                    .map(response => response.json())
                    .catch(this.handleError);;
  }
 
 
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  }
