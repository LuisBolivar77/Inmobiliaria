import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed, ComponentFixture, async, inject } from '@angular/core/testing';
import { PersonaService } from '../../../Servicios/personaServ.servide';
import { Rol } from '../../../Modelo/Rol';
import { Persona } from '../../../Modelo/Persona';
import { Usuario } from '../../../Modelo/Usuario';

fdescribe('GestionarPersonasComponent', () => {
  // Rol que tendra la persona
  // tslint:disable-next-line:prefer-const
  let rol = new Rol();
  // la informacion de la persona asociada al usuario
  // tslint:disable-next-line:prefer-const
  let persona = new Persona();
  // usuario que se registra con la persona
  // tslint:disable-next-line:prefer-const
  let usuario = new Usuario();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:    [ PersonaService, HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    rol.id = 1;
    rol.nombre = 'Administrador';
    rol.descripcion = 'administrador';

    console.log(rol.id + ' ----- ' + rol.nombre + ' ---- ' + rol.descripcion);
    // datos de la persona
    // persona.id = 3000;
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

  it('debe registrar un usuario',
    inject([PersonaService], (service: PersonaService) => {
    service.registrar(usuario).subscribe(dataEntra => expect(dataEntra).toEqual('exito'));

  }));

});
