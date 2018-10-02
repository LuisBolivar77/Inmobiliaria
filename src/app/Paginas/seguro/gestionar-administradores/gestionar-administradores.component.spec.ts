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
import { prepareProfile } from '../../../../../node_modules/@types/selenium-webdriver/firefox';

fdescribe('GestionarAdministradoresComponent', () => {
  console.log("ENTRO ADMIN PRUEBA");
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
      imports: [HttpClientModule, FormsModule, RouterTestingModule],
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
    componente.rol.id = 1;
    // datos de la persona
    persona.cedula = '4194';
    componente.persona.cedula = '4194';
    persona.nombre = 'Rosa';
    persona.apellido = 'Cardona';
    persona.fecha_nacimiento = '1978-03-30';
    persona.telefono = '315581';
    persona.direccion = 'Bayon';
    persona.rol = rol;
    
    // datos del usuario
    usuario.persona = persona;
    usuario.username = 'Rosa';
    usuario.password = '1234';
    componente.usuario = usuario;

    let registrar = componente.registrar(null);
    expect(registrar).toBeTruthy;
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
    rol.id = 1;
    persona.id = 16;
    componente.persona.id = 16;
    // datos de la persona
    persona.cedula = '4194'
    componente.persona.cedula = '4194'
    persona.nombre = 'Rosalba';
    persona.apellido = 'Cardona';
    persona.fecha_nacimiento = '1978-03-30';
    persona.telefono = '3155819215';
    persona.direccion = 'Torre Horizonte';
    persona.rol = rol;
    // datos del usuario
    componente.usuario.persona = persona

    // Usamos TestBed para poder usar el servicio http
    let respuesta = componente.editar(null);
    expect(respuesta).toBeTruthy;
  });

  /**
  *  Busca un administrador por la cedula cuando existe
  */
  it('buscar un administrador por cedula y rol', () => {
    // persona asociada al usuario
    let persona: Persona = new Persona();
    persona.cedula = '4194';
    componente.persona.cedula = '4194';
    persona.rol.id = 1;
    componente.rol.id = 1;
    let buscarSiCedula = componente.buscar();
    expect(buscarSiCedula).toBeTruthy;
  });

  it('Ver la inormacion de un empleado de la tabla', () => {
    let persona: Persona = new Persona();
    persona.cedula = '10949';
    let respuesta = componente.ver(persona);
    expect(respuesta).toBeTruthy;
  });

  it
    ('Buscar desde el formulario html verdadero', () => {
      let persona: Persona = new Persona();
      persona.cedula = '10949';
      componente.persona.cedula = '10949';
      let respuesta = componente.fbuscar(event);
      expect(respuesta).toBeTruthy;
    });
    
  it('Buscar desde el formulario html falso', () => {
    let persona: Persona = new Persona();
    persona.cedula = '109499999';
    componente.persona.cedula = '109499999';
    persona.rol.id = 1;
    componente.rol.id = 1;
    let respuesta = componente.fbuscar(event);
    expect(respuesta).toBeFalsy;
  });

  /**
   *  Elimina un administrador
   */
  it('Eliminar un administrador', () => {
    let persona: Persona = new Persona();
    persona.id = 2;
    let eliminar = componente.eliminar(persona);
    expect(eliminar).toBeFalsy;
  });



});


