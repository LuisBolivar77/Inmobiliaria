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

describe('GestionarPersonasComponent', () => {
  // Rol que tendra la persona
  // tslint:disable-next-line:prefer-const
  let rol = new Rol();
  // la informacion de la persona asociada al usuario
  // tslint:disable-next-line:prefer-const
  let persona = new Persona();
  // usuario que se registra con la persona
  // tslint:disable-next-line:prefer-const
  let usuario = new Usuario();

  let service: PersonaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:    [ PersonaService],
      imports: [ HttpClientTestingModule ],
    });

    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.get(PersonaService);
    httpMock = TestBed.get(HttpTestingController);
  });

  beforeEach(() => {
    rol.id = 1;
    rol.nombre = 'Administrador';
    rol.descripcion = 'administrador';

    // datos de la persona
    persona.cedula = '123';
    persona.nombre = 'gaga';
    persona.apellido = 'posada';
    persona.fecha_nacimiento = '1997-10-10';
    persona.telefono = '3134566545';
    persona.direccion = 'calle 45';
    persona.rol = rol;
      // datos del usuario
    usuario.persona = persona;
    usuario.username = 'laura';
    usuario.password = '123';
  });

  it('buscar un cliente', () => {
    // Perform a request and make sure we get the response we expect

    const ced = '1094';
    service.personaByCedula(persona).subscribe(res => {

      expect<any>(res.length).toBe(1);
    });

    // const request = httpMock.expectOne('http://localhost:4300/personas/persona-by-cedula/' + ced);
    // expect(request.request.method).toBe('GET');
  });

  /**
  it('registrar un cliente', () => {
    service.registrar(usuario).subscribe(res => {
      expect<any>(res).toBe('exito');

    });
    const request = httpMock.expectOne('http://localhost:4400/personas/registrar' + persona.cedula);
    expect(request.request.method).toBe('POST');
  });
   */
});
