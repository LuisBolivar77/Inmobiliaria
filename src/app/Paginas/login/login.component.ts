import { Usuario } from '../../Modelo/Usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Servicios/usuarioServ.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    // Nombre de usuario
    nomUser: string;
    // Clave del usuario
    contraUser: string;
  
    user: Usuario;
  
    // variable de clase que permite el uso de los servicios
    servicios: UsuarioService;
  
    constructor() { }
  
    ngOnInit() {
    }
     
    /**
     * Iniciar Sesion en la aplicacion
     */
    LogIng() {
      this.servicios.LogIn(this.nomUser, this.contraUser)
      .subscribe(res => this.user = res);
  
    }

}
