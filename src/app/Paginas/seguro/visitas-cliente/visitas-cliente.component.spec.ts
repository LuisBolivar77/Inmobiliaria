import { ReservarVisita } from 'src/app/Modelo/ReservarVisita';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisitasClienteComponent } from './visitas-cliente.component';
import { Persona } from 'src/app/Modelo/Persona';
import { Inmueble } from 'src/app/Modelo/Inmueble';
import { Usuario } from 'src/app/Modelo/Usuario';

describe('VisitasClienteComponent', () => {
  let component: VisitasClienteComponent;
  let fixture: ComponentFixture<VisitasClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitasClienteComponent ],
      imports: [FormsModule, HttpClientModule, RouterTestingModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasClienteComponent);
    component = fixture.componentInstance;

    const per = new Persona();
    per.id = 11116;

    component.usuarioSesion.persona = per;
    component.usuarioSesion.username = 'lucho';
    component.usuarioSesion.password = '1234';

    fixture.detectChanges();
  });

  it('valida estados', () => {

    const res = component.validarEstado('ATENDIDA');
    expect(res).toBeTruthy();

  });

  it('lista las visitas del cliente', () => {

    component.listar();
    expect(component.visitas).not.toBeNull();

  });

  it('agrega objetos a las lista de visitas', () => {

    component.listar();
    component.agregarObjetos(component.visitas);
    expect(component.agregoObjetos).toBeTruthy();

  });

  it('permite ver la informacion de una visita', () => {

    const inmueble = new Inmueble();
    inmueble.id = 15;
    inmueble.numero_matricula = '65432123456';
    inmueble.detalles = 'bella casa';

    const visita = new ReservarVisita();
    visita.id = 21;
    visita.estado = '';
    visita.inmueble = inmueble;

    component.visitaSeleccionada.mensaje = 'prueba prueba prueba';
    component.visitaSeleccionada.fecha = '2018-04-05';
    component.visitaSeleccionada.hora_visita = 10;
    component.visitaSeleccionada.inmueble = inmueble;

    component.verVisita(visita);
    expect(component.habilitarEditar).toBeTruthy();

  });

  it('permite ver la informacion de una visita (entra al else)', () => {

    const inmueble = new Inmueble();
    inmueble.id = 15;
    inmueble.numero_matricula = '65432123456';
    inmueble.detalles = 'bella casa';

    const visita = new ReservarVisita();
    visita.id = 21;
    visita.estado = 'ATENDIDA';
    visita.inmueble = inmueble;

    component.visitaSeleccionada.mensaje = 'prueba prueba prueba';
    component.visitaSeleccionada.fecha = '2018-04-05';
    component.visitaSeleccionada.hora_visita = 10;
    component.visitaSeleccionada.inmueble = inmueble;

    component.verVisita(visita);
    expect(component.habilitarEditar).toBeFalsy();

  });

  it('limpia los campos del form', () => {

    component.limpiarCampos();
    expect(component.matriculaInmueble).toBe('');

  });

  it('no edita una visita (visitaSeleccionada id null)', () => {

    component.visitaSeleccionada.id = null;
    component.editarVisita(null);
    expect(component.show).toBe(1);

  });

  it('no edita una visita (visitaSeleccionada fecha null)', () => {

    component.visitaSeleccionada.id = 10;
    component.visitaSeleccionada.fecha = null;
    component.editarVisita(null);
    expect(component.show).toBe(1);

  });

  it('no edita una visita (visitaSeleccionada esta atendida)', () => {

    component.visitaSeleccionada.id = 10;
    component.visitaSeleccionada.fecha = '2018-04-05';
    component.visitaSeleccionada.estado = 'ATENDIDA';
    component.editarVisita(null);
    expect(component.show).toBe(1);

  });

  it('edita una visita con empleado', () => {

    const perCliente = new Persona();
    perCliente.id = 11116;

    const perEmpleado = new Persona();
    perEmpleado.id = 9;

    const inmu = new Inmueble();
    inmu.id = 16;

    component.visitaSeleccionada.id = 21;
    component.visitaSeleccionada.mensaje = 'PRUEBA COMPONENT CLIENTE VISITAS CON E';
    component.visitaSeleccionada.fecha = '2018-11-28';
    component.visitaSeleccionada.estado = 'PENDIENTE';
    component.visitaSeleccionada.inmueble = inmu;
    component.visitaSeleccionada.empleado = perEmpleado;
    component.visitaSeleccionada.cliente = perCliente;

    component.editarVisita(null);
    expect(component.edito).toBeTruthy();

  });

  it('edita una visita sin empleado', () => {

    const perCliente = new Persona();
    perCliente.id = 11116;

    const inmu = new Inmueble();
    inmu.id = 16;

    component.visitaSeleccionada.id = 24;
    component.visitaSeleccionada.mensaje = 'PRUEBA COMPONENT CLIENTE VISITAS SIN E';
    component.visitaSeleccionada.fecha = '2018-11-29';
    component.visitaSeleccionada.estado = 'PENDIENTE';
    component.visitaSeleccionada.inmueble = inmu;
    component.visitaSeleccionada.cliente = perCliente;

    component.editarVisita(null);
    expect(component.edito).toBeTruthy();

  });

  it('no quita la visita (estado ATENDIDA)', () => {

    const inmueble = new Inmueble();
    inmueble.id = 15;
    inmueble.numero_matricula = '65432123456';
    inmueble.detalles = 'bella casa';

    const visita = new ReservarVisita();
    visita.id = 66;
    visita.estado = 'ATENDIDA';
    visita.inmueble = inmueble;

    component.quitarVisita(visita);
    expect(component.show).toBe(1);

  });

  it('no quita la visita (id null)', () => {

    const inmueble = new Inmueble();
    inmueble.id = 15;
    inmueble.numero_matricula = '65432123456';
    inmueble.detalles = 'bella casa';

    const visita = new ReservarVisita();
    visita.id = null;
    visita.estado = 'PENDIENTE';
    visita.inmueble = inmueble;

    component.quitarVisita(visita);
    expect(component.elimino).toBeTruthy();

  });

  it('quita la visita', () => {

    const inmueble = new Inmueble();
    inmueble.id = 15;
    inmueble.numero_matricula = '65432123456';
    inmueble.detalles = 'bella casa';

    const visita = new ReservarVisita();
    visita.id = 66;
    visita.estado = 'PENDIENTE';
    visita.inmueble = inmueble;

    component.quitarVisita(visita);
    expect(component.elimino).toBeTruthy();

  });

  it('crea un contrato', () => {

    const inmueble = new Inmueble();
    inmueble.id = 15;
    inmueble.numero_matricula = '65432123456';
    inmueble.detalles = 'bella casa';
    inmueble.tipoAV = 0;

    const visita = new ReservarVisita();
    visita.id = 64;
    visita.estado = 'PENDIENTE';
    visita.inmueble = inmueble;

    component.crearContrato(visita);
    expect(component.creoContrato).toBeTruthy();

  });
});
