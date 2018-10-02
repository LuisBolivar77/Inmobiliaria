import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { GestionarAdministradoresComponent } from './gestionar-administradores.component';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { HttpClientModule } from '@angular/common/http';
import { RolService } from '../../../Servicios/rolServ.service';
import { PersonaService } from '../../../Servicios/personaServ.service';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';
import { Rol } from 'src/app/Modelo/Rol';
import { Persona } from 'src/app/Modelo/Persona';
import { Usuario } from 'src/app/Modelo/Usuario';
import { FormsModule } from '../../../../../node_modules/@angular/forms';

fdescribe('GestionarAdministradoresComponent', () => {

  /**
   * Componente de Gestionar Administradores
   */
  let componente: GestionarAdministradoresComponent;
  let fixture: ComponentFixture<GestionarAdministradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [UsuarioService],
      // Importamos el http para poder consumir los servicios
      imports: [HttpClientModule,FormsModule, RouterTestingModule],
      // Se declara el componente, para poder ver el reporte en el coverage
      declarations: [GestionarAdministradoresComponent]
    }).compileComponents();
  }));

  /**
   * Se ejecuta antes de cada it
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarAdministradoresComponent);
    // Inicializamos el componente, para poder acceder a sus metodos
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('crear un administrador', () => {
    // Rol que tendra la persona  
    let rol = new Rol();
    // persona asociada al usuario
    let persona = new Persona();
    // usuario que se registra con la persona
    let usuario = new Usuario();

    //Datos del rol
    rol.id = 1;
    componente.rol.id=1;
    // datos de la persona
    persona.cedula = '4194';
    persona.nombre = 'Rosa';
    persona.apellido = 'Cardona';
    persona.fecha_nacimiento = '1978-03-30';
    persona.telefono = '315581';
    persona.direccion = 'Bayon';
    persona.rol = rol;
    componente.persona.cedula = '4194';
    // datos del usuario
    usuario.persona = persona;
    usuario.username = 'Rosa';
    usuario.password = '1234';
    componente.usuario=usuario;

    let registrar = componente.registrar(null);
    expect(registrar).toBeTruthy;

  });

  /**
  *  Busca un administrador por la cedula cuando existe
  */
  it('buscar un administrador por cedula', () => {
    // persona asociada al usuario
    componente.persona.cedula = '4194';
    let buscarSiCedula = componente.buscar();
    expect(buscarSiCedula).toBeTruthy;
  });

  /**
  *  Busca un administrador por la cedula cuando no existe
  */
  it('buscar un administrador que no existe por cedula', () => {
    componente.persona.cedula = '4194453';
    let buscarNoCedula = componente.buscar();
    expect(buscarNoCedula).toBeFalsy;
  });

  /**
   *  Busca el empleado por el id y carga la informacion
   */
  it('Buscar Empleado', () => {
    // id del emplelado a buscar y cargar
    componente.persona.id = 8;
    let buscarId = componente.buscar();
    // toBeTruthy cuando es verdadero
    expect(buscarId).toBeTruthy;
    console.log(componente.persona);
  });

  /**
   *  Busca el empleado por rol y carga la informacion
   */
  it('Editar Empleado', () => {
    // id del emplelado a buscar y cargar
    componente.usuario.persona.rol.id = 1;
    let buscarRol = componente.buscar();
    // toBeTruthy cuando es verdadero
    expect(buscarRol).toBeTruthy;
    console.log(componente.persona);
  });

  /**
   *  probando el flujo alterno, cuando no se encuentra un empleado
   */
  it('Empleado No Carga', () => {
    // id del empleado a buscar y a no cargar, este empleado no debe existir en la bd
    componente.persona.id = 100;
    let b = componente.buscar();
    // toBeFalsy cuando es Falso
    expect(b).toBeFalsy;
  });

  /**
   * Edita un administrador
   */
  it('editar un administrador', () => {
    let rol = new Rol();
    // persona asociada al usuario
    let persona = new Persona();
    // usuario que se registra con la persona
    let usuario = new Usuario();
    //Datos del rol
    componente.rol.id = 1;
    componente.persona.id = 8;
    // datos de la persona
    componente.persona.cedula = '4194451'
    componente.persona.nombre = 'Rosalba';
    componente.persona.apellido = 'Cardona';
    componente.persona.fecha_nacimiento = '1978-03-30';
    componente.persona.telefono = '3155819215';
    componente.persona.direccion = 'Torre Horizonte';
    componente.persona.rol = rol;
    // datos del usuario
    componente.usuario.persona = persona;
    componente.usuario.username = 'Rosa';
    componente.usuario.password = '1234';
    // Usamos TestBed para poder usar el servicio http
    let respuesta = componente.editar(null);
    expect(respuesta).toBeTruthy;
    });

  /**
   *  Elimina un administrador
   */
    it('Eliminar un administrador', () => {
      let persona: Persona = new Persona();
      persona.id = 1;
      let eliminar = componente.eliminar(persona);
      expect(eliminar).toBeFalsy;
    })

});


