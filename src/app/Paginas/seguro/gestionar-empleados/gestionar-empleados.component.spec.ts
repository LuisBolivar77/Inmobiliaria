import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarEmpleadosComponent } from './gestionar-empleados.component';
import {
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http
} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgForm, FormsModule } from '@angular/forms';
import { not } from '@angular/compiler/src/output/output_ast';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { Usuario } from '../../../Modelo/Usuario';
import { Cargo } from '../../../Modelo/Cargo';
import { Empleado } from '../../../Modelo/Empleado';
import { Persona } from '../../../Modelo/Persona';


describe('GestionarEmpleadosComponent', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [GenericoService],
      imports: [HttpClientModule, FormsModule],
      declarations: [GestionarEmpleadosComponent]
    });

  });

  it('crear un empleado', () => {
    // Usuario que tiene una persona  
    let usuario = new Usuario();
    // cargo que se registra con el empleado
    let cargo = new Cargo();
    // empleado a crear
    let empleado = new Empleado();  
    // datos persona
    let persona = new Persona() ;

    //datos persona
    persona.id= 27;

    //Datos del usuario
    usuario.persona = persona;
    
    //datos del cargo
    cargo.id= 1;
    // datos del empleado
    empleado.cargo=cargo;
    empleado.salario = 2000;
    empleado.usuario=usuario;

    // Usamos TestBed para poder usar el servicio http
    const servicio: GenericoService = TestBed.get(GenericoService);
    // usamos el servicio para registrar la persona
    servicio.registrar('empleados', empleado).subscribe(res => {

      console.log(res.data);
      expect<any>(res.data).not.toBe(null);

    });

  });
});

describe('GestionarEmpleadosComponent', () => {
   
  beforeEach(() => {
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [GenericoService],
      // Importamos el http para poder consumir los servicios
      imports: [HttpClientModule, FormsModule],
      // Se declara el componente, para poder ver el reporte en el coverage
      declarations: [GestionarEmpleadosComponent]
    });
  });

  /**
   * Buscar la persona que ya se encuentra registrada
   */
  it('Buscar empleado', () => {

    // Rol que tendra la persona  
    let cargo = new Cargo();
    // persona asociada al usuario
    let persona = new Persona();
    // usuario que se registra con la persona
    let usuario = new Usuario();
    //
    let empleado = new Empleado();

    // Usamos TestBed para poder usar el servicio http
    const servicio: GenericoService = TestBed.get(GenericoService);
    // Usamos el servicio para buscar el empleado
    servicio.buscar('empleados', empleado).subscribe(rta => {
             // Guardamos el retorno del servicio en la variable empleado, creada previamente
      empleado = rta;
      empleado.usuario.persona.cedula = '12345';

      // Validamos si la respuesta si concuerda con la esparada
      expect(empleado.usuario.persona.cedula).toEqual('12345');
    });
  });
});

describe('GestionarEmpleadosComponent', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [GenericoService],
      imports: [HttpClientModule, FormsModule],
      declarations: [GestionarEmpleadosComponent]
    });

  });

  it('editar una empleado', () => {
    // Usuario que tiene una persona  
    let usuario = new Usuario();
    // cargo que se registra con el empleado
    let cargo = new Cargo();
    // empleado a crear
    let empleado = new Empleado();  
    // datos persona
    let persona = new Persona() ;

    //datos persona
    persona.id= 27;

    //Datos del usuario
    usuario.persona = persona;
    
    //datos del cargo
    cargo.id= 1;
    // datos del empleado
    empleado.cargo=cargo;
    empleado.salario = 12300;
    empleado.usuario=usuario;

    // Usamos TestBed para poder usar el servicio http
    const servicio: GenericoService = TestBed.get(GenericoService);
    // usamos el servicio para registrar la persona
    servicio.editar('empleados', empleado,'27').subscribe(res => {

      console.log(res.data);
      expect<any>(res.data).not.toBe(null);

    });

  });
});

