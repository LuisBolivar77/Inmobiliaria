import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarClientesComponent } from './gestionar-clientes.component';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { HttpClientModule } from '@angular/common/http';
import { Persona } from '../../../Modelo/Persona';
import { Rol } from '../../../Modelo/Rol';
import { PersonaService } from '../../../Servicios/personaServ.service';
import { NgForm, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Usuario } from '../../../Modelo/Usuario';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';



describe('Gestionar cliente', () => {

  let component: GestionarClientesComponent;
  let fixture: ComponentFixture<GestionarClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [UsuarioService],
      // Importamos el http para poder consumir los servicios
      imports: [HttpClientModule, FormsModule, RouterTestingModule],
      // Se declara el componente, para poder ver el reporte en el coverage
      declarations: [GestionarClientesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(GestionarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('crear un ciente', () => {

    let rol: Rol = new Rol;
    let usuario: Usuario = new Usuario;    
    let persona: Persona = new Persona;
    

    rol.id = 2;
    component.rol.id = 2;

    persona.id = 9999999;
    persona.cedula = '112233';
    persona.nombre = 'Sandra milena';
    persona.apellido = 'Jaramillo castaño';
    persona.fecha_nacimiento = '1992-24-05';
    persona.telefono = '698349295';
    persona.direccion = 'Madrid';

    component.persona.id = 9999999;
    component.persona.cedula = '112233';
    component.persona.nombre = 'Sandra Milena';
    component.persona.apellido = 'Jaramillo Castaño';
    component.persona.fecha_nacimiento = '1992-24-05';
    component.persona.telefono = '698349295';
    component.persona.direccion = 'Madrid';
    component.persona.rol = rol;
   
    usuario.password = '9876';
    usuario.username = 'mile24';
    usuario.persona = persona;

    component.usuario.password = '9876';
    component.usuario.username = 'mile24';
    component.usuario.persona = persona;

    persona.rol = rol;  

    component.persona = persona;

    component.usuario = usuario;

    component.usuario.persona = persona

    let respuesta = component.registrar(null);

    expect(respuesta).toBeTruthy;

  });

  it('buscar ciente', () => {
    let persona: Persona = new Persona();
    component.persona.id = 1;
    component.persona.cedula = '1094';
    component.usuario.persona = persona;

    let respuesta = component.buscar();

    expect(respuesta).toBeTruthy;
  });

  it('buscar ciente no existe', () => {

    let persona: Persona = new Persona();

    component.persona.cedula = '1094555';

    component.usuario.persona = persona;
    let respuesta = component.buscar();
    expect(respuesta).toBeFalsy;
  });

  it('editar ciente', () => {

    let rol: Rol = new Rol();
    rol.id = 3;
    let persona: Persona = new Persona();
    persona.cedula = '1090';
    persona.nombre = 'Sandra';
    persona.apellido = 'Jaramillo';
    persona.fecha_nacimiento = '1992-24-05';
    persona.telefono = '698349295';
    persona.direccion = 'Madrid m3#4';
    persona.rol = rol;

    component.usuario.persona = persona;

    let respuesta = component.editar(null);

    expect(respuesta).toBeTruthy;

  });


  it('editar ciente usuario no existe', () => {

    let respuesta = component.editar(null);

    expect(respuesta).toBeFalsy;

  });

  it('Ver la inormacion de un empleado de la tabla', () => {
    let persona: Persona = new Persona();
    persona.cedula = '1094';
    let respuesta = component.ver(persona);
    expect(respuesta).toBeTruthy;
  });

  it('Buscar desde el formulario html verdadero', () => {
    let persona: Persona = new Persona();
    persona.cedula = '1094';

    component.persona.cedula = '1094';
    component.persona = persona;

    let respuesta = component.fbuscar(null);
    expect(respuesta).toBeTruthy;
  });

  it('Buscar desde el formulario html falso', () => {
    let persona: Persona = new Persona();
    persona.cedula = null;

    component.persona.cedula = null;
    component.persona = persona;

    let respuesta = component.fbuscar(null);
    expect(respuesta).toBeFalsy;
  });


  it('eliminar cliente', () => {
    let persona: Persona = new Persona();
    persona.id = 20;
    let respuesta = component.eliminar(persona);
    expect(respuesta).toBeFalsy;
  });



});
