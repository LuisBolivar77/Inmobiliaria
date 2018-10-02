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

fdescribe('Gestionar un empeleadfo', () => {

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
    component.rol.id =1;

    let persona: Persona = new Persona();
    persona.id = 11111;
    persona.cedula = '109129';
    persona.nombre = 'Valentina';
    persona.apellido = 'Rua';
    persona.fecha_nacimiento = '1999-29-11';
    persona.telefono = '3128762521';
    persona.direccion = 'montenegro';
    persona.rol = rol;
    component.persona.cedula = '109129';

    let usuario: Usuario = new Usuario();
    usuario.password = 'valen';
    usuario.username = 'valen123';
    usuario.persona = persona;
    component.usuario = usuario;

    let cargo: Cargo = new Cargo();
    cargo.id=2;
    component.cargo.id=2;
    
    let empleado: Empleado = new Empleado();
    empleado.usuario = usuario;
    empleado.salario = 12345;
    empleado.cargo= cargo;
    component.empleado = empleado;

    let respuesta = component.registrar(null);

    expect(respuesta).toBeTruthy;

  });


  it('buscar empleado GESTIONAR EMPLEADO', () => {

    let rol: Rol = new Rol();
    rol.id = 1;
    component.rol.id =1;

    let persona: Persona = new Persona();
    persona.id = 2;
    persona.cedula = '1090';
    persona.nombre = 'Valentina';
    persona.apellido = 'Rua';
    persona.fecha_nacimiento = '1999-29-11';
    persona.telefono = '3128762521';
    persona.direccion = 'montenegro';
    persona.rol = rol;
    component.persona.cedula = '1090';

    let usuario: Usuario = new Usuario();
    usuario.password = 'valen';
    usuario.username = 'valen123';
    usuario.persona = persona;
    component.usuario = usuario;

    let cargo: Cargo = new Cargo();
    cargo.id=1;
    component.cargo.id=1;
    
    let empleado: Empleado = new Empleado();
    empleado.usuario = usuario;
    empleado.salario = 12345;
    empleado.cargo= cargo;
    component.empleado = empleado;

    let respuesta = component.buscar();
    expect(respuesta).toBeTruthy;
  });

  it('editar persona', () => {

    let rol: Rol = new Rol();
    rol.id = 1;
    component.rol.id =1;

    let persona: Persona = new Persona();
    persona.id = 2;
    persona.cedula = '1090';
    persona.nombre = 'Valentina';
    persona.apellido = 'Rua';
    persona.fecha_nacimiento = '1999-29-11';
    persona.telefono = '3128762521';
    persona.direccion = 'montenegro';
    persona.rol = rol;
    component.persona.cedula = '1090';

    let usuario: Usuario = new Usuario();
    usuario.password = 'valen';
    usuario.username = 'valen123';
    usuario.persona = persona;
    component.usuario = usuario;

    let cargo: Cargo = new Cargo();
    cargo.id=1;
    component.cargo.id=1;
    
    let empleado: Empleado = new Empleado();
    empleado.usuario = usuario;
    empleado.salario = 12345;
    empleado.cargo= cargo;
    component.empleado = empleado;

    let respuesta = component.editar(null);

    expect(respuesta).toBeTruthy;

  });
});