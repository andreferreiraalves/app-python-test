import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Usuario } from './models/Index';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _url = 'http://127.0.0.1:5000';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private _http: HttpClient) { }

  GetUsuario(usuario: Usuario) {
    return this._http.get(this._url + '/usuarios', this.httpOptions);
  }
}
