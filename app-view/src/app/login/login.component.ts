import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

import { Usuario } from '../models/Index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this.usuario = new Usuario()
  }

  Login() {
    this._api.GetUsuario(this.usuario)
      .subscribe(res => {
        console.log(res)
      }, err => {
        console.log(err)
      })
  }
}
