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
import { GestionarPersonasComponent } from './gestionar-personas.component';

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

  

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:    [ GenericoService ],
      imports: [ HttpClientModule ],
      declarations:[GestionarPersonasComponent]
    });

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

  it('crear un cliente', () => {
        // Usamos TestBed para poder usar el servicio http

    const servicio: GenericoService = TestBed.get(GenericoService);

    // Perform a request and make sure we get the response we expect
    servicio.registrar("persona",{usuario}).subscribe(rta => {
      //console.log(res.data);
      expect(rta.data.length).toEqual(1);
    });
  });
});
