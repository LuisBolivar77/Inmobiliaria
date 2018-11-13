import { ReservarVisita } from './../../../Modelo/ReservarVisita';
import { Empleado } from 'src/app/Modelo/Empleado';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Contrato } from './../../../Modelo/Contrato';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignarArriendoContratoComponent } from './asignar-arriendo-contrato.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '../../../../../node_modules/@angular/router/testing';
import { FormsModule } from '../../../../../node_modules/@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Persona } from 'src/app/Modelo/Persona';
import { iif } from 'rxjs';

describe('AsignarArriendoContratoComponent', () => {
  let component: AsignarArriendoContratoComponent;
  let fixture: ComponentFixture<AsignarArriendoContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarArriendoContratoComponent ],
      imports: [HttpClientModule, RouterTestingModule, FormsModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarArriendoContratoComponent);
    component = fixture.componentInstance;

    const per = new Persona();
    per.id = 9;

    component.usuarioSesion.persona = per;
    component.usuarioSesion.username = 'pepe';
    component.usuarioSesion.password = '123';

    fixture.detectChanges();
  });

  it('listar los contratos finalizados', () => {

    component.listar();
    expect(component.contratos).not.toBeNull();

  });

  it('listar los arriendos registrados', () => {

    component.listarArriendos();
    expect(component.arriendos).not.toBeNull();

  });

  it('agrega los objetos necesarios a la lista de contratos', () => {

    component.listar();
    component.agregarObjetos();
    expect(component.agregoObjetoContrato).toBeTruthy();

  });

  it('agrega los objetos necesarios a la lista de arriendos', () => {

    component.listarArriendos();
    component.agregarObjetosArriendos();
    expect(component.agregoObjetoArriendo).toBeTruthy();

  });

  it('genera la lista a usar de contratos', () => {

    component.listar();
    component.agregarObjetos();
    component.listadoFinal();
    expect(component.constratosFinales).not.toBeNull();

  });

  it('muestro la informacion de un contrato finalizado', () => {

    const contrato = new Contrato();
    contrato.id = 7;

    component.ver(contrato);
    expect(component.verSelec).toBeTruthy();

  });

  it('genera la fecha actual ', () => {

    const res = component.fechaActual();
    expect(res).toBe('2018/11/09');

  });

  it('no registra un arriendo', () => {

    const visita = new ReservarVisita();
    visita.id = 5;

    const persona = new Persona();
    persona.id = 11116;

    const persona2 = new Persona();
    persona2.id = 9;

    const usuEmpleado = new Usuario();
    usuEmpleado.persona = persona2;

    const empleado = new Empleado();
    empleado.usuario = usuEmpleado;

    const cliente = new Usuario();
    cliente.persona = persona;

    const contrato = new Contrato();
    contrato.id = 10000;
    contrato.estado = 1;
    contrato.cliente = cliente;
    contrato.empleado = empleado;
    contrato.visita = visita;

    component.contrato = contrato;

    component.registrar(null);
    expect(component.registrado).toBeTruthy();

  });

  it('no edita un contrato', () => {

    const visita = new ReservarVisita();
    visita.id = 5;

    const persona = new Persona();
    persona.id = 11116;

    const persona2 = new Persona();
    persona2.id = 9;

    const usuEmpleado = new Usuario();
    usuEmpleado.persona = persona2;

    const empleado = new Empleado();
    empleado.usuario = usuEmpleado;

    const cliente = new Usuario();
    cliente.persona = persona;

    const contrato = new Contrato();
    contrato.id = 1000;
    contrato.estado = 1;
    contrato.cliente = cliente;
    contrato.empleado = empleado;
    contrato.visita = visita;

    component.contrato = contrato;
    component.descripcionSel = 'DESCRIPCION PRUEBA';

    component.registrar(null);
    expect(component.noRegistro).toBeTruthy();

  });

  it('registra un arriendo', () => {

    const visita = new ReservarVisita();
    visita.id = 5;

    const persona = new Persona();
    persona.id = 11116;

    const persona2 = new Persona();
    persona2.id = 9;

    const usuEmpleado = new Usuario();
    usuEmpleado.persona = persona2;

    const empleado = new Empleado();
    empleado.usuario = usuEmpleado;

    const cliente = new Usuario();
    cliente.persona = persona;

    const contrato = new Contrato();
    contrato.id = 7;
    contrato.estado = 1;
    contrato.cliente = cliente;
    contrato.empleado = empleado;
    contrato.visita = visita;

    component.contrato = contrato;
    component.descripcionSel = 'DESCRIPCION PRUEBA';

    component.registrar(null);
    expect(component.registrado).toBeTruthy();

  });
});
