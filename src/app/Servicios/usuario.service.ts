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
export class UsuarioService {
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
    this.nombre = 'frmUsuario.php?opcion=';
  
  }

    
  verificar_celular (pin,jsonData) {
    //let url = `${this.url}`;
    let url = this.url + '/' + this.nombre + 'iniciar_sesion_con_celular';
    let iJson = jsonData;
    return this.http.post(url, iJson, this.options)
                    .map(response => response.json())
                    .catch(this.handleError);;
  }

  registrarUsuario (pin,jsonData) {
    //let url = `${this.url}`;
    let url = this.url + '/' + this.nombre + 'registrar_usuario_autenticar';
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

          /**
     * Esta función lista los espacios.     
     */
    /*
    verificar_celular(pin,jsonData) {
      var json;
      let body = jsonData;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
          'Access-Control-Allow-Credentials':'false'
        })
      };

      const headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Access-Control-Allow-Credentials':'false'
      });


      return this.http.post(this.url + '/' + this.nombre + 'iniciar_sesion_con_celular',
       jsonData,
        {headers})
          .subscribe(  resp => {
            console.log(resp);
      
      });    
      */  
      /*
       return  this.http.post(this.url + '/' + this.nombre + '/listar',
                          body)
                          .pipe(map(
                            data => {
                              json = data;
                          })
                          );     
                          
                                                          
  }   */  
 /*
  verificarCelular2(pin, json, SessionUser) {
    let body =json;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', pin);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
                            this.url + '/' + this.nombre , 
                            body, 
                            options).pipe(map(res => res.json())); 
    }
   */ 
  }
