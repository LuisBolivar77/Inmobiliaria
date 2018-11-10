import { Usuario } from 'src/app/Modelo/Usuario';
import { Reunion } from './../../../Modelo/Reunion';
import { Rol } from './../../../Modelo/Rol';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionReunionesComponent } from './gestion-reuniones.component';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Persona } from 'src/app/Modelo/Persona';
import { Empleado } from 'src/app/Modelo/Empleado';

describe('GestionReunionesComponent', () => {
  let component: GestionReunionesComponent;
  let fixture: ComponentFixture<GestionReunionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientModule, MatExpansionModule, BrowserAnimationsModule],
      declarations: [ GestionReunionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionReunionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Registra una reunion', () => {

    component.editarSelected = false;

    component.resNumHora = '0,';
    component.reunion.id = 100;
    component.reunion.descripcion = 'prueba Test';
    component.reunion.fecha = '2018-11-30';
    component.reunion.hora = '5 PM';

    const rolCliente: Rol = new Rol();
    rolCliente.id = 2;

    const rolEmpleado: Rol = new Rol();
    rolEmpleado.id = 3;

    component.clienteSeleccionado.id = 3;
    component.clienteSeleccionado.cedula = '1091';
    component.clienteSeleccionado.nombre = 'daniel';
    component.clienteSeleccionado.apellido = 'perez';
    component.clienteSeleccionado.direccion = 'carrera 214a jasdnas';
    component.clienteSeleccionado.fecha_nacimiento = '03/02/1989';
    component.clienteSeleccionado.telefono = '3214567';
    component.clienteSeleccionado.latitud = 4.3332699;
    component.clienteSeleccionado.longitud = -74.3715004;
    component.clienteSeleccionado.rol = rolCliente;

    component.empleadoSeleccionado.id = 9;
    component.empleadoSeleccionado.cedula = '218937';
    component.empleadoSeleccionado.nombre = 'pedro';
    component.empleadoSeleccionado.apellido = 'perezzzz';
    component.empleadoSeleccionado.direccion = 'jhdjkas';
    component.empleadoSeleccionado.fecha_nacimiento = '27/01/1994';
    component.empleadoSeleccionado.telefono = '193091823';
    component.empleadoSeleccionado.latitud = 4.330065;
    component.empleadoSeleccionado.longitud = -74.366315;
    component.empleadoSeleccionado.rol = rolEmpleado;

    component.registrar();
    console.log(component.registrado);
    expect(component.registrado).toBeTruthy();
  });

  it('no registra por fecha', () => {

    component.reunion.fecha = '2018-11-07';
    component.registrar();
    expect(component.banderaElseFechaRegistro).toBeTruthy();

  });

  it('no registra por numero maximo de reuniones para ese empleado', () => {

    component.listarReuniones();

    component.reunion.fecha = '2018-11-30';
    component.resNumHora = '3,horaOcupada';

    component.registrar();
    expect(component.banderaElseNumMaximoReu).toBeTruthy();

  });

  it('no registra por hora de reunion ocupada', () => {

    component.listarReuniones();

    component.reunion.fecha = '2018-11-30';
    component.resNumHora = '2,horaOcupada';

    component.registrar();
    expect(component.banderaElseHoraOcupada).toBeTruthy();

  });

  it('Editar una reunion', () => {

    component.resNumHora = '0,';
    component.editarSelected = false;
    component.fechaAEditar = '2018-11-22';

    component.reunion.id = 4;
    component.reunion.descripcion = 'PRUEBA EDICION';
    component.fechaSeleccionada = '2018-11-29';
    component.horaSeleccionada = '2 PM';

    const rolCliente: Rol = new Rol();
    rolCliente.id = 2;

    const rolEmpleado: Rol = new Rol();
    rolEmpleado.id = 3;

    component.clienteSeleccionado.id = 3;
    component.clienteSeleccionado.cedula = '1091';
    component.clienteSeleccionado.nombre = 'daniel';
    component.clienteSeleccionado.apellido = 'perez';
    component.clienteSeleccionado.direccion = 'carrera 214a jasdnas';
    component.clienteSeleccionado.fecha_nacimiento = '03/02/1989';
    component.clienteSeleccionado.telefono = '3214567';
    component.clienteSeleccionado.latitud = 4.3332699;
    component.clienteSeleccionado.longitud = -74.3715004;
    component.clienteSeleccionado.rol = rolCliente;

    component.empleadoSeleccionado.id = 9;
    component.empleadoSeleccionado.cedula = '218937';
    component.empleadoSeleccionado.nombre = 'pedro';
    component.empleadoSeleccionado.apellido = 'perezzzz';
    component.empleadoSeleccionado.direccion = 'jhdjkas';
    component.empleadoSeleccionado.fecha_nacimiento = '27/01/1994';
    component.empleadoSeleccionado.telefono = '193091823';
    component.empleadoSeleccionado.latitud = 4.330065;
    component.empleadoSeleccionado.longitud = -74.366315;
    component.empleadoSeleccionado.rol = rolEmpleado;

    component.editar(null);
    expect(component.editado).toBeTruthy();
  });

  it('Editar una reunion 2.0', () => {

    component.resNumHora = '0,';
    component.editarSelected = false;
    component.fechaAEditar = '2018-11-22';

    component.reunion.id = 2;
    component.reunion.descripcion = 'PRUEBA EDICION 2.0';
    component.fechaSeleccionada = '2018-11-22';
    component.horaSeleccionada = '5 PM';

    const rolCliente: Rol = new Rol();
    rolCliente.id = 2;

    const rolEmpleado: Rol = new Rol();
    rolEmpleado.id = 3;

    component.clienteSeleccionado.id = 3;
    component.clienteSeleccionado.cedula = '1091';
    component.clienteSeleccionado.nombre = 'daniel';
    component.clienteSeleccionado.apellido = 'perez';
    component.clienteSeleccionado.direccion = 'carrera 214a jasdnas';
    component.clienteSeleccionado.fecha_nacimiento = '03/02/1989';
    component.clienteSeleccionado.telefono = '3214567';
    component.clienteSeleccionado.latitud = 4.3332699;
    component.clienteSeleccionado.longitud = -74.3715004;
    component.clienteSeleccionado.rol = rolCliente;

    component.empleadoSeleccionado.id = 9;
    component.empleadoSeleccionado.cedula = '218937';
    component.empleadoSeleccionado.nombre = 'pedro';
    component.empleadoSeleccionado.apellido = 'perezzzz';
    component.empleadoSeleccionado.direccion = 'jhdjkas';
    component.empleadoSeleccionado.fecha_nacimiento = '27/01/1994';
    component.empleadoSeleccionado.telefono = '193091823';
    component.empleadoSeleccionado.latitud = 4.330065;
    component.empleadoSeleccionado.longitud = -74.366315;
    component.empleadoSeleccionado.rol = rolEmpleado;

    component.editar(null);
    expect(component.editado).toBeTruthy();
  });

  it('no edita por fecha', () => {

    component.reunion.fecha = '2018-11-07';
    component.editar(null);
    expect(component.banderaElseFechaRegistroEditar).toBeTruthy();

  });

  it('no edita por numero maximo de reuniones de un empleado', () => {

    component.resNumHora = '3,';
    component.fechaSeleccionada = '2018-11-30';
    component.fechaAEditar = '2018-11-29';

    component.editar(null);
    expect(component.banderaElseNumMaximoReuEditar).toBeTruthy();

  });

  it('no edita por hora ocupada', () => {

    component.resNumHora = '2,horaOcupada';
    component.fechaSeleccionada = '2018-11-30';
    component.fechaAEditar = '2018-11-29';

    component.editar(null);
    expect(component.banderaElseHoraOcupadaEditar).toBeTruthy();

  });

  it('no edita por numero maximo de reuniones de un empleado', () => {

    component.resNumHora = '2,horaOcupada';
    component.fechaSeleccionada = '2018-11-30';
    component.fechaAEditar = '2018-11-30';

    component.editar(null);
    expect(component.banderaElseHoraOcupadaEditar1).toBeTruthy();

  });

  it('Elimina una reunion', () => {

    component.eliminar(100);
    expect(component.eliminado).toBeTruthy();
  });

  it('Generar el estado de la reunion', () => {

    const res = component.estadoReunion(0);
    expect(res).toBe('PENDIENTE');
  });

  it('limpiar campos', () => {
    component.limpiarCampos();
    expect(component.editarSelected).toBeFalsy();
  });

  it('ver una reunion', () => {

    const persona1 = new Persona();
    persona1.id = 11116;

    const persona2 = new Persona();
    persona2.id = 9;

    const usu1 = new Usuario();
    usu1.persona = persona1;
    usu1.username = 'lucho';
    usu1.password = '1234';

    const usu2 = new Usuario();
    usu2.persona = persona2;
    usu2.password = '123';
    usu2.username = 'pepe';

    const emple = new Empleado();
    emple.usuario = usu2;

    const reunion = new Reunion();
    reunion.id = 1;

    reunion.cliente = usu1;
    reunion.empleado = emple;

    component.ver(reunion);
    expect(component.editarSelected).toBeTruthy();

  });

  it('valida el estado de la reunion', () => {

    const res = component.valEstadoReunion(0);
    expect(res).toBeTruthy();

  });

  it('valida si a el empleado se le pueden asignar reuniones', () => {

    component.listarReuniones();
    // tslint:disable-next-line:quotemark
    const res = component.numeroReunionesEmpleado("9", '2018-12-02', '5 PM');
    const data = res.split(',');
    const resValidar = data[1];

    expect(resValidar).not.toBe('horaOcupada');

  });

  it('lista personas', () => {

    component.listarPersonas();
    expect(component.listarPer).toBeTruthy();

  });

  it('lista Reuniones', () => {

    component.listarReuniones();
    expect(component.listarReu).toBeTruthy();

  });
});
