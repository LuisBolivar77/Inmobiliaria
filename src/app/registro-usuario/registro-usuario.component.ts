import { Component, OnInit } from '@angular/core';
import { Persona } from '../Modelo/Persona';
import { Date } from '../Modelo/date';

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
  fecha: Date;
  rol = 'Cliente';

  // variable crear Persona
  persona: Persona;

  constructor() { }

  ngOnInit() {
  }


  registrar() {

    console.log(this.fecha + ' ------ ' );
    

    this.cedula = '';
    this.nombre = '';
    this.apellido = '';
    this.telefono = '';
    this.direccion = '';

  }
}
