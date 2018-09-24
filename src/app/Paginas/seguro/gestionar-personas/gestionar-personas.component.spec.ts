import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { GestionarPersonasComponent } from '../../seguro/gestionar-personas/gestionar-personas.component';
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
      providers:    [ GestionarPersonasComponent, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

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

  it('debe registrar un usuario',
      inject([GestionarPersonasComponent],
      (service: GestionarPersonasComponent) => {
        const res = service.registrarTest(usuario);
        expect<any>(res).toEqual('myValue');
        // expect(res).toEqual('exito');
      }));

});
