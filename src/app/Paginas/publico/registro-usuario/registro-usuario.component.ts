import { PersonaService } from './../../../Servicios/personaServ.servide';
import { Usuario } from './../../../Modelo/Usuario';
import { Rol } from './../../../Modelo/Rol';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../../../Modelo/Persona';
import { Date } from '../../../Modelo/date';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  // variables de entrada
  cedula: string;
  nombre: string;
  apellido: string;
  telefono: string;
  direccion: string;
  fecha: string;

  // variable crear Persona
  persona: Persona = new Persona();
  rol: Rol = new Rol();
  usu: Usuario = new Usuario();

  // variables de servicio
  servicioPer: PersonaService;

  constructor(private servicios: UsuarioService, private router: Router) { }

  ngOnInit() {
      // Validamos si el usuario ya inicio sesion
      if (this.servicios.getUsuario() != null) {
        // como ya inicio sesion, lo redireccionamos al inicio
        this.router.navigate(['/']);
      }
  }


  registrar() {

    this.rol.id = 1;
    this.rol.nombre = 'Cliente';
    this.rol.descripcion = 'cliente';

    this.persona.nombre = this.nombre;
    this.persona.apellido = this.apellido;
    this.persona.cedula = this.cedula;
    this.persona.telefono = this.telefono;
    this.persona.direccion = this.direccion;
    this.persona.fecha_nacimiento = this.fecha;
    this.persona.rol = this.rol;

    this.usu.username = this.nombre + '.' + this.apellido;
    this.usu.password = this.cedula;
    this.usu.persona = this.persona;

    window.alert('su nombre de usuario es ' + this.usu.username + ' y la contraseña es ' + this.usu.password);

    this.servicioPer.registrar(this.usu).subscribe(rta => {
      window.alert(rta.data);
      // limpiamos los campos
      this.limpiarCampos();
    });

  }


  /**
   * metodo se encarga de limpiar los campos
   */
  limpiarCampos() {

    this.cedula = '';
    this.nombre = '';
    this.apellido = '';
    this.telefono = '';
    this.direccion = '';

  }
}
