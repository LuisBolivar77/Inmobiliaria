import { Usuario } from './../Modelo/Usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Servicios/usuarioServ.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  // variable de logIn
  nomUser: string;
  contraUser: string;

  user: Usuario;

  // variable de clase que permite el uso de los servicios
  servicios: UsuarioService;

  constructor() { }

  ngOnInit() {
  }

  LogIng() {

    this.servicios.LogIn(this.nomUser, this.contraUser)
    .subscribe(res => this.user = res);

  }

}
