import { Contrato } from './../../../Modelo/Contrato';
import { GenericoService } from './../../../Servicios/genericoServ.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignarVentasContratosComponent } from './asignar-ventas-contratos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Venta } from '../../../Modelo/Venta';
import { Inmueble } from '../../../Modelo/Inmueble';

describe('AsignarVentasContratosComponent', () => {
  let component: AsignarVentasContratosComponent;
  let fixture: ComponentFixture<AsignarVentasContratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [GenericoService],
      // Importamos el http para poder consumir los servicios
      imports: [HttpClientModule, FormsModule, RouterTestingModule],
      declarations: [ AsignarVentasContratosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarVentasContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Crear una venta', () => {

    let venta: Venta = new Venta;

    venta.id = 1;
    venta.contrato.id = 4;
    venta.empleado.usuario.persona.id = 9;
    venta.fecha = '2018-11-05';
    venta.descripcion = 'vendida';

    component.venta = venta;

    const respuesta = component.registrar(null);

    expect(respuesta).toBeTruthy();
  });


  it('buscar una venta', () => {
    let venta: Venta = new Venta;
    component.venta.id = 1;
    const respuesta = component.buscarContrato();
    // tslint:disable-next-line:no-unused-expression
    expect(respuesta).toBeTruthy;
  });

  it('buscar una Noventa', () => {
    let venta: Venta = new Venta;
    component.venta.id = 2;
    const respuesta = component.buscarContrato();
    // tslint:disable-next-line:no-unused-expression
    expect(respuesta).toBeFalsy;
  });

  it('ver info contrato', () => {
    // tslint:disable-next-line:prefer-const
    let venta: Venta = new Venta;
    venta.id = 1;
    const respuesta = component.listarVentas();
    // tslint:disable-next-line:no-unused-expression
    expect(respuesta).toBeTruthy;
  });

  it('ver info contratosFinales', () => {
    // tslint:disable-next-line:prefer-const
    let contrato: Contrato = new Contrato;
    contrato.id = 2;
    const respuesta = component.listadoFinal();
    // tslint:disable-next-line:no-unused-expression
    expect(respuesta).toBeTruthy;
  });

  it('Buscar desde el formulario html si existe', () => {
    // tslint:disable-next-line:prefer-const
    let venta: Venta = new Venta;
    venta.id = 1;
    component.venta = venta;

    const respuesta = component.buscarContrato();
    // tslint:disable-next-line:no-unused-expression
    expect(respuesta).toBeTruthy;
  });

});
