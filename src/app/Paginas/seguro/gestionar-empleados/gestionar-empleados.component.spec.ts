import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericoService } from '../../../Servicios/genericoServ.service';
import { HttpClientModule } from '@angular/common/http';
import { Persona } from '../../../Modelo/Persona';
import { Rol } from '../../../Modelo/Rol';
import { PersonaService } from '../../../Servicios/personaServ.service';
import { NgForm, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Usuario } from '../../../Modelo/Usuario';
import { Empleado } from '../../../Modelo/Empleado';
import { Cargo } from '../../../Modelo/Cargo';
import { GestionarEmpleadosComponent } from './gestionar-empleados.component';

describe('Gestionar un empeleadfo', () => {

  let component: GestionarEmpleadosComponent;
  let fixture: ComponentFixture<GestionarEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [GenericoService],
      // Importamos el http para poder consumir los servicios
      imports: [HttpClientModule, FormsModule, RouterTestingModule],
      // Se declara el componente, para poder ver el reporte en el coverage
      declarations: [GestionarEmpleadosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(GestionarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('crear un empleado', () => {
    
    let rol: Rol = new Rol();
    rol.id = 1;

    let persona: Persona = new Persona();
    persona.id = 123456;
    persona.cedula = '1097730';
    persona.nombre = 'Laura Vanessa';
    persona.apellido = 'Posadsa castaño';
    persona.fecha_nacimiento = '1998-04-05';
    persona.telefono = '3207356688';
    persona.direccion = 'Armenia';
    persona.rol = rol;

    let usuario: Usuario = new Usuario();
    usuario.password = 'laura';
    usuario.username = 'laura';
    usuario.persona = persona;

    let cargo: Cargo = new Cargo();
    cargo.id=1;
    
    let empleado: Empleado = new Empleado();
    empleado.usuario = usuario;
    empleado.salario = 12345;
    empleado.cargo.id= cargo.id;    

    component.empleado = empleado;

    let respuesta = component.registrar(null);

    expect(respuesta).toBeTruthy;

  });
});