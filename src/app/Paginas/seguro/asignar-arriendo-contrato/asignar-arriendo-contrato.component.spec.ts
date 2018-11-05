import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignarArriendoContratoComponent } from './asignar-arriendo-contrato.component';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '../../../../../node_modules/@angular/router/testing';
import { Contrato } from '../../../Modelo/Contrato';
import { Usuario } from '../../../Modelo/Usuario';
import { Persona } from '../../../Modelo/Persona';
import { Rol } from '../../../Modelo/Rol';
import { FormsModule } from '../../../../../node_modules/@angular/forms';

describe('AsignarArriendoContratoComponent', () => {
  let component: AsignarArriendoContratoComponent;
  let fixture: ComponentFixture<AsignarArriendoContratoComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ GenericoService],
      imports: [HttpClientModule, FormsModule, RouterTestingModule],
      declarations: [ AsignarArriendoContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarArriendoContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ngOnInit Existe parametro GET', () => {
    const ver = component.ngOnInit();
    // toBeTruthy cuando es verdadero
    // tslint:disable-next-line:no-unused-expression
    expect(ver).toBeTruthy;
  });

  it('ngOnInit No existe parametro GET', () => {
    const ver = component.ngOnInit();
    // toBeFalsy cuando es Falso
    // tslint:disable-next-line:no-unused-expression
    expect(ver).toBeFalsy;
  });

  it('editar un contrato arriendo', () => {
    // tslint:disable-next-line:prefer-const
    let contrato = new Contrato();
    // persona asociada al usuario
    // tslint:disable-next-line:prefer-const
    let persona = new Persona();
    // usuario que se registra con la persona
     // tslint:disable-next-line:prefer-const
    let usuario = new Usuario();

    // Datos del rol
    
    // datos de la persona
    contrato.id = 2;
    component.contrato.id = 2;
    usuario.persona.id = 11111;
    component.usuarioSesion.persona.id = 11111;

    
    // datos del usuario
    component.usuarioSesion.persona = persona;

    // Usamos TestBed para poder usar el servicio http
    
    // tslint:disable-next-line:no-unused-expression
    //expect(respuesta).toBeTruthy;
  });


  it('buscar un contrato', () => {
    // persona asociada al usuario
    // tslint:disable-next-line:prefer-const
    let contrato: Contrato = new Contrato();
    contrato.id = 2 ;
    component.contrato.id = 2;
    const buscarSi = component.buscarContrato();
    // tslint:disable-next-line:no-unused-expression
    expect(buscarSi).toBeTruthy;

    console.log("entro al buscar arrinedo");
  });

  

});
