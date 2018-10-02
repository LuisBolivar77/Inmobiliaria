import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { HttpClientModule } from '@angular/common/http';
import { Persona } from '../../../Modelo/Persona';
import { Rol } from '../../../Modelo/Rol';
import { PersonaService } from '../../../Servicios/personaServ.service';
import { NgForm, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Usuario } from '../../../Modelo/Usuario';
import { GestionarPersonasComponent } from './gestionar-personas.component';
import { Empleado } from '../../../Modelo/Empleado';


describe('Gestionar persona', () => {
  console.log("ENTRO GESTIONAR PERSONAS PRUEBAS");
  

  let component: GestionarPersonasComponent;
  let fixture: ComponentFixture<GestionarPersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [PersonaService],
      // Importamos el http para poder consumir los servicios
      imports: [HttpClientModule, FormsModule, RouterTestingModule],
      // Se declara el componente, para poder ver el reporte en el coverage
      declarations: [GestionarPersonasComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(GestionarPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('crear una persona GESTIONAR PERSONAS', () => {

    let rol: Rol = new Rol();
    rol.id = 1;
    component.rol.id =1;

    let persona: Persona = new Persona();
    //persona.id = 11111;
    persona.cedula = '1099';
    persona.nombre = 'Valentina';
    persona.apellido = 'Rua';
    persona.fecha_nacimiento = '1999-29-11';
    persona.telefono = '3128762521';
    persona.direccion = 'montenegro';
    persona.rol = rol;
    component.persona.cedula = '1099';

    let usuario: Usuario = new Usuario();
    usuario.password = 'valen';
    usuario.username = 'valen123';
    usuario.persona = persona;
    component.usuario = usuario;

    let respuesta = component.registrar(null);

    expect(respuesta).toBeTruthy;

  });

  it('buscar persona GESTIONAR PERSONAS', () => {

    let rol: Rol = new Rol();
    rol.id = 1;
    component.rol.id =1;

    let persona: Persona = new Persona();
    //persona.id = 11111;
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

    let respuesta = component.buscar();
    expect(respuesta).toBeTruthy;
  });

  it('buscar persona no existe', () => {
    let pers: Persona = new Persona();
    pers.cedula = '1090';
    component.persona = pers;

    let respuesta = component.buscar();
    expect(respuesta).toBeFalsy;
  });

  it('editar persona', () => {

    let rol: Rol = new Rol();
    rol.id = 1;
    let persona: Persona = new Persona();
    persona.id = 2;
    persona.cedula = '1090';
    persona.nombre = 'Valentina';
    persona.apellido = 'Rua Gonzales';
    persona.fecha_nacimiento = '1999-29-11';
    persona.telefono = '3004501089';
    persona.direccion = 'Centenario';
    persona.rol = rol;

    component.usuario.persona = persona;

    let respuesta = component.editar(null);

    expect(respuesta).toBeTruthy;

  });

  it('Buscar desde el formulario html falso', () => {
    component.persona.cedula = '1093';
    let respuesta = component.fbuscar(event);
    expect(respuesta).toBeFalsy;
  });

  it('eliminar persona', () => {
    let persona: Persona = new Persona();
    persona.id = 27;
    let respuesta = component.eliminar(persona);
    expect(respuesta).toBeTruthy;
  });

});
