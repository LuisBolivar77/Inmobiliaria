import { GenericoService } from './../../../Servicios/genericoServ.service';
import { PersonaService } from './../../../Servicios/personaServ.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Rol } from '../../../Modelo/Rol';
import { Persona } from '../../../Modelo/Persona';
import { Usuario } from '../../../Modelo/Usuario';
import {
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http
} from '@angular/http';
import { not } from '@angular/compiler/src/output/output_ast';
import { HttpClientModule } from '@angular/common/http';
import { GestionarPersonasComponent } from './gestionar-personas.component';
import { NgForm, FormsModule } from '@angular/forms';

fdescribe('GestionarPersonasComponent', () => {
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:    [ GenericoService ],
      imports: [ HttpClientModule, FormsModule ],
      declarations:[GestionarPersonasComponent]
    });

  });

  it('crear una persona', () => {
    // Rol que tendra la persona
  // tslint:disable-next-line:prefer-const
  let rol = new Rol();
  // la informacion de la persona asociada al usuario
  // tslint:disable-next-line:prefer-const
  let persona = new Persona();
  // usuario que se registra con la persona
  // tslint:disable-next-line:prefer-const
  let usuario = new Usuario();  
    console.log("POR AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII itititititititiit");
    
    rol.id = 1;
    rol.nombre = 'Administrador';
    rol.descripcion = 'administrador';

    // datos de la persona
    persona.id=7;
    persona.cedula = '123456789';
    persona.nombre = 'gaga';
    persona.apellido = 'posada';
      let fecha = new Date('1997-03-03');
    persona.fecha_nacimiento = fecha;
    persona.telefono = '3134566545';
    persona.direccion = 'calle 45';
    persona.rol = rol;
      // datos del usuario
    usuario.persona = persona;
    usuario.username = 'laura';
    usuario.password = '123';

    console.log(persona + " HOLAAAAAAAAAAAAAAAAAA POR AQUIIIIIIIII");

     // Usamos TestBed para poder usar el servicio http
    const servicio: GenericoService = TestBed.get(GenericoService);
      
    // Perform a request and make sure we get the response we expect
    servicio.registrar("personas",{"cedula":persona}).subscribe(rta => {
      console.log("ENTROOOOOOOOOOOOOOOOOOOOOOOOOO");
    //console.log(usuario);
    console.log(rta);
    //  expect(rta.data.length).toEqual(1);
    // servicio.buscar("personas", {"id":persona.cedula}).subscribe(rtap => {
      // Validamos si la respuesta si concuerda con la esparada      
     // expect(rtap.cedula).toEqual('123456789');
   // });

    });
  });
});
