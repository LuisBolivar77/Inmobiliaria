import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AsignarVisitasComponent } from './asignar-visitas.component';
import { Persona } from 'src/app/Modelo/Persona';
import { Inmueble } from 'src/app/Modelo/Inmueble';
import { ReservarVisita } from 'src/app/Modelo/ReservarVisita';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Empleado } from 'src/app/Modelo/Empleado';

describe('AsignarVisitasComponent', () => {
  let component: AsignarVisitasComponent;
  let fixture: ComponentFixture<AsignarVisitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule , BrowserAnimationsModule, FormsModule],
      declarations: [ AsignarVisitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  it('seleccionar visita', () => {

    const cliente = new Persona();
    cliente.id=12;
    cliente.nombre="Kevin";

    const visita = new ReservarVisita();
    visita.id=21;
    visita.cliente=cliente;

    component.seleccionarVisita(visita);
    expect(component.seleccionoVisita).toBeTruthy();
  });

  it('Seleccionar empleado', () => {

    const personaEmpl = new Persona();
    personaEmpl.id=9;
    personaEmpl.nombre="pedro";

    const user = new Usuario();
    user.persona=personaEmpl;
  

    const empleado = new Empleado();
    empleado.usuario=user;

    component.seleccionEmpleado(empleado);

    expect(component.seleccionoEmpleado).toBeTruthy();

  });


  it('Asignar visita', () => {
   
    //creamos los objetos
    const inmueble = new Inmueble();
    inmueble.id=16;
    const persona = new Persona();
    persona.id=9;
    const personaCliente = new Persona();
    personaCliente.id=12;

    const usuario= new Usuario();
    usuario.persona=persona; 

    component.numeroVisita=21;
    component.empleadoSeleccionado.usuario=usuario;

    component.visitaSeleccionada.id=21;
    component.visitaSeleccionada.inmueble=inmueble;
    component.visitaSeleccionada.cliente=personaCliente;

    component.asignarVisita();

    expect(component.asignoVisita).toBeTruthy();
  });
  
  it('limpiar campos', () => {

    component.limpiarCampos();
    expect(component.limpioCampos).toBeTruthy();

  });

  it('lista visitas', () => {

    component.listarVisitas();
    expect(component.visitas).not.toBeNull();

  });

  it('lista empleados', () => {

    component.listarEmpleados();
    expect(component.empleados).not.toBeNull();

  });
  

});
