import { Usuario } from '../../../Modelo/Usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';
import { Acceso } from '../../../Modelo/Acceso';
import {Router} from "@angular/router";
import { Inmueble } from '../../../Modelo/Inmueble';
import { Ciudad } from '../../../Modelo/Ciudad';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { TipoInmueble } from '../../../Modelo/TipoInmueble';

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
  // Ciudades
  ciudades: Array<Ciudad> = [];
  // Tipos de inmueble
  tiposInmueble: Array<TipoInmueble> = [];
  // inmueble, objeto para obtener parametros para buscar
  inmueble: Inmueble = new Inmueble();

  constructor(private genericoServicio: GenericoService,private servicios: UsuarioService, private router: Router) {
   }

  ngOnInit() {
    this.usuario = this.servicios.getUsuario();
    if(this.usuario != null){
      this.accesos = this.usuario.persona.rol.accesos;
    }
    // Cargamos las ciudades en la busqueda
    this.cargarCiudades();
    // Cargamos los tipos de inmueble
    this.cargarTiposInmueble();
  }

  /**
   * Busca de acuerdo a los parametros seleccionados por el usuario
   */
  buscar(){
    window.alert();
    this.servicios.redireccionar("/");
  }

  /**
   * Carga todas las ciudades
   */
  cargarCiudades(){
    this.genericoServicio.listar("ciudades", null).subscribe(rta => {
      if(rta.data != null){
        this.ciudades = rta.data
      }
    });
  }
  
  /**
   * Carga todas las ciudades
   */
  cargarTiposInmueble(){
    this.genericoServicio.listar("tipo_inmueble", null).subscribe(rta => {
      if(rta.data != null){
        this.tiposInmueble = rta.data
      }
    });
  }
  /**
   * Cerramos la sesion del usuario
   */
  logout(event) {
    this.servicios.logout();
  }

}
