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
  rol = '1';

  // variable crear Persona
  persona: Persona;

  constructor(private servicios: UsuarioService, private router: Router) { }

  ngOnInit() {
      // Validamos si el usuario ya inicio sesion
      if (this.servicios.getUsuario() != null) {
        // como ya inicio sesion, lo redireccionamos al inicio
        this.router.navigate(['/']);
      }
  }


  registrar() {

    this.persona.nombre = this.nombre;
    this.persona.apellido = this.apellido;
    this.persona.cedula = this.cedula;
    this.persona.telefono = this.telefono;
    this.persona.direccion = this.direccion;
    this.persona.fecha_nacimiento = this.fecha;
    this.persona.rol = this.rol;

    this.cedula = '';
    this.nombre = '';
    this.apellido = '';
    this.telefono = '';
    this.direccion = '';

  }
}
