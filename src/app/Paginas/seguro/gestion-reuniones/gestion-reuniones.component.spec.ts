import { Rol } from './../../../Modelo/Rol';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionReunionesComponent } from './gestion-reuniones.component';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

    component.registrado = true;

    component.reunion.descripcion = 'prueba Test';
    component.reunion.fecha = '11/07/2018';

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
    expect(component.validarRegistro()).toBeTruthy();
  });

  it('Editar una reunion', () => {

    component.editarSelected = false;

    component.editado = true;

    component.reunion.id = 4;
    component.reunion.descripcion = 'PRUEBA EDICION';
    component.reunion.fecha = '11/07/2018';

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
    expect(component.validarEdicion()).toBeTruthy();
  });

  it('Elimina una reunion', () => {
    component.eliminado = true;

    component.eliminar('11');
    expect(component.validarEliminacion()).toBeTruthy();
  });

  it('Generar el estado de la reunion', () => {

    const res = component.estadoReunion(0);
    expect(res).toBe('PENDIENTE');
  });
});
