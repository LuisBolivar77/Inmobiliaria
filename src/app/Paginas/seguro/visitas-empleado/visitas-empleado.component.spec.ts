import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisitasEmpleadoComponent } from './visitas-empleado.component';
import { Persona } from 'src/app/Modelo/Persona';
import { Inmueble } from 'src/app/Modelo/Inmueble';
import { ReservarVisita } from 'src/app/Modelo/ReservarVisita';

describe('VisitasEmpleadoComponent', () => {
  let component: VisitasEmpleadoComponent;
  let fixture: ComponentFixture<VisitasEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitasEmpleadoComponent ],
      imports: [FormsModule, HttpClientModule, RouterTestingModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasEmpleadoComponent);
    component = fixture.componentInstance;

    const per = new Persona();
    per.id = 9;

    component.usuarioSesion.persona = per;
    component.usuarioSesion.username = 'pepe';
    component.usuarioSesion.password = '123';

    fixture.detectChanges();
  });

  it('listar visitas', () => {

    component.listar();
    expect(component.visitas).not.toBeNull();

  });

  it('agregar objetos a la lista de visitas', () => {

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
    expect(component.verInmueble).toBeTruthy();

  });

  it('limpia los campos del form', () => {

    component.limpiarCampos();
    expect(component.matriculaInmueble).toBe('');

  });

  it('no edita una visita (visitaSeleccionada id null)', () => {

    component.visitaSeleccionada.id = null;
    component.comentarVisita(null);
    expect(component.show).toBe(1);

  });

  it('no edita una visita (visitaSeleccionada comentario null)', () => {

    component.visitaSeleccionada.id = 24;
    component.visitaSeleccionada.comentario = null;
    component.comentarVisita(null);
    expect(component.show).toBe(1);

  });

  it('edita una visita', () => {

    const perCliente = new Persona();
    perCliente.id = 11116;

    const perEmpleado = new Persona();
    perEmpleado.id = 9;

    const inmu = new Inmueble();
    inmu.id = 16;

    component.visitaSeleccionada.id = 24;
    component.visitaSeleccionada.comentario = 'PRUEBA COMPONENT CLIENTE VISITAS SIN E';
    component.visitaSeleccionada.cliente = perCliente;
    component.visitaSeleccionada.empleado = perEmpleado;
    component.visitaSeleccionada.inmueble = inmu;

    component.comentarVisita(null);
    expect(component.visitaComentada).toBeTruthy();

  });
});
