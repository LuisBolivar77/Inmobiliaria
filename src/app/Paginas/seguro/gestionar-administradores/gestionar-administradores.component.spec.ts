import { GenericoService } from './../../../Servicios/genericoServ.service';
import { PersonaService } from './../../../Servicios/personaServ.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Rol } from '../../../Modelo/Rol';
import { Persona } from '../../../Modelo/Persona';
import { Usuario } from '../../../Modelo/Usuario';
import {
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http
} from '@angular/http';
import { not } from '@angular/compiler/src/output/output_ast';
import { HttpClientModule } from '@angular/common/http';
import { GestionarAdministradoresComponent } from './gestionar-administradores.component';
import { NgForm, FormsModule } from '@angular/forms';

describe('GestionarAdministradoresComponent', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonaService],
      imports: [HttpClientModule, FormsModule],
      declarations: [ GestionarAdministradoresComponent ]
    })
  });

  it('crear un administrador', () => {
    // Rol que tendra la persona  
    let rol = new Rol();
    // persona asociada al usuario
    let persona = new Persona();
    // usuario que se registra con la persona
    let usuario = new Usuario();

    //Datos del rol
    rol.id = 1;
    // datos de la persona
    persona.cedula = '4194';
    persona.nombre = 'Rosa';
    persona.apellido = 'Cardona';
    persona.fecha_nacimiento = '1978-03-30';
    persona.telefono = '315581';
    persona.direccion = 'Bayon';
    persona.rol = rol;
    // datos del usuario
    usuario.persona = persona;
    usuario.username = 'Rosa';
    usuario.password = '1234';
    // Usamos TestBed para poder usar el servicio http
    const servicio: PersonaService = TestBed.get(PersonaService);
    // usamos el servicio para registrar la persona
    servicio.registrar(usuario).subscribe(res => {
    expect<any>(res.data).not.toBe(null);
    });

  });
});
