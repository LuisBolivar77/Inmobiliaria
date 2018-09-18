import { Usuario } from '../../../Modelo/Usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';
import { Acceso } from '../../../Modelo/Acceso';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  // Usuario que inicio sesion en la aplicacion
  usuario: Usuario;
  // Listado de Accesos a los que puede ingresar el usuario que inicio sesion
  accesos: Array<Acceso> = []; 


  constructor(private servicios: UsuarioService, private router: Router) {
   }

  ngOnInit() {
    this.usuario = this.servicios.getUsuario();
    if(this.usuario != null){
      this.accesos = this.usuario.persona.rol.accesos;
    }
  }

  /**
   * Cerramos la sesion del usuario
   */
  logout(event) {
    this.servicios.logout();
  }

}
