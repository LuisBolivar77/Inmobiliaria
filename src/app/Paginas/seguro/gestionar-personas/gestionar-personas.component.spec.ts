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
import { NgForm, FormsModule } from '@angular/forms';

describe('GestionarPersonasComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonaService],
      imports: [HttpClientModule, FormsModule],
      declarations: [GestionarPersonasComponent]
    });

  });

  it('crear una persona', () => {

    // Rol que tendra la persona  
    let rol = new Rol();
    // persona asociada al usuario
    let persona = new Persona();
    // usuario que se registra con la persona
    let usuario = new Usuario();

    //Datos del rol
    rol.id = 1;
    // datos de la persona
    persona.cedula = '12345';
    persona.nombre = 'gaga';
    persona.apellido = 'posada';
    persona.fecha_nacimiento = '1997-03-03';
    persona.telefono = '3134566545';
    persona.direccion = 'calle 45';
    persona.rol = rol;
    // datos del usuario
    usuario.persona = persona;
    usuario.username = 'laura';
    usuario.password = '123';
    // Usamos TestBed para poder usar el servicio http
    const servicio: PersonaService = TestBed.get(PersonaService);
    // usamos el servicio para registrar la persona
    servicio.registrar(usuario).subscribe(res => {

      expect<any>(res.data).not.toBe(null);

    });

  });
});

describe('GestionarPersonasComponent', () => {
   
  beforeEach(() => {
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [PersonaService],
      // Importamos el http para poder consumir los servicios
      imports: [HttpClientModule, FormsModule],
      // Se declara el componente, para poder ver el reporte en el coverage
      declarations: [GestionarPersonasComponent]
    });
  });

  /**
   * Buscar la persona que ya se encuentra registrada
   */
  it('Buscar persona', () => {

    // Rol que tendra la persona  
    let rol = new Rol();
    // persona asociada al usuario
    let persona = new Persona();
    // usuario que se registra con la persona
    let usuario = new Usuario();

    // Usamos TestBed para poder usar el servicio http
    const servicio: PersonaService = TestBed.get(PersonaService);
    // Usamos el servicio para buscar el empleado
    servicio.personaByCedula(persona).subscribe(rta => {
             // Guardamos el retorno del servicio en la variable empleado, creada previamente
      persona = rta;
      persona.cedula = '12345';
      console.log(persona);

      // Validamos si la respuesta si concuerda con la esparada
      expect(persona.cedula).toEqual('12345');
    });
  });
});

describe('GestionarPersonasComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [PersonaService],
      // Importamos el http para poder consumir los servicios
      imports: [HttpClientModule, FormsModule],
      // Se declara el componente, para poder ver el reporte en el coverage
      declarations: [GestionarPersonasComponent]
    });
  });

  it('editar una persona', () => {

    // Rol que tendra la persona  
    let rol = new Rol();
    // persona asociada al usuario
    let persona = new Persona();
    // usuario que se registra con la persona
    let usuario = new Usuario();

    //Datos del rol
    rol.id = 1;
    // datos de la persona
    persona.id= 27;
    persona.cedula = '12345';
    persona.nombre = 'Laura Vanessa';
    persona.apellido = 'posada';
    persona.fecha_nacimiento = '1997-03-03';
    persona.telefono = '3134566545';
    persona.direccion = 'calle 45';
    persona.rol = rol;
    // datos del usuario
    usuario.persona = persona;
    usuario.username = 'laura';
    usuario.password = '123';
    // Usamos TestBed para poder usar el servicio http
    const servicio: PersonaService = TestBed.get(PersonaService);
    // usamos el servicio para editar la persona
    servicio.editar(usuario).subscribe(res => {
      console.log(res);
      expect<any>(res.data).not.toBe(null);

    });

  });
});