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


describe('Gestionar persona', () => {
  console.log("ENTRO GESTIONAR PERSONAS PRUEBAS");
  

  let component:  GestionarPersonasComponent;
  let fixture: ComponentFixture<GestionarPersonasComponent>;

  beforeEach(async(() => {    
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [],
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
    let persona: Persona = new Persona();
    persona.id = 11111;
    persona.cedula = '1099';
    persona.nombre = 'Valentina';
    persona.apellido = 'Rua';
    persona.fecha_nacimiento = '1999-29-11';
    persona.telefono = '3128762521';
    persona.direccion = 'montenegro';
    persona.rol = rol;

    let usuario: Usuario = new Usuario();
    usuario.password = 'valen';
    usuario.username = 'valen123';
    usuario.persona = persona;
    component.usuario = usuario;
    
    let respuesta = component.registrar(null);

    expect(respuesta).toBeTruthy;

  });


  


});

//------------------------------------------------------------------------------------------------------------------





//--
/*
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

  
   * Buscar la persona que ya se encuentra registrada
   
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
*/