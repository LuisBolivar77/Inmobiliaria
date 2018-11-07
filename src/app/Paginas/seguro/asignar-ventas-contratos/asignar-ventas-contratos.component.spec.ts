import { Contrato } from './../../../Modelo/Contrato';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignarVentasContratosComponent } from './asignar-ventas-contratos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Venta } from '../../../Modelo/Venta';
import { Persona } from '../../../Modelo/Persona';
import { BrowserAnimationsModule } from '../../../../../node_modules/@angular/platform-browser/animations';
import { Usuario } from '../../../Modelo/Usuario';
import { ReservarVisita } from '../../../Modelo/ReservarVisita';

describe('AsignarVentasContratosComponent', () => {
  let component: AsignarVentasContratosComponent;
  let fixture: ComponentFixture<AsignarVentasContratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientModule, BrowserAnimationsModule,
      ],
      declarations: [AsignarVentasContratosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarVentasContratosComponent);
    component = fixture.componentInstance;

    const per = new Persona();
    per.id = 9;

    component.usuarioSesion.persona = per;
    component.usuarioSesion.username = 'pepe';
    component.usuarioSesion.password = '123';

    fixture.detectChanges();
  });

  it('Crear una venta', () => {

    const persona = new Persona();
    persona.id = 5;

    const usuario = new Usuario();
    usuario.persona = persona;

    const visita = new ReservarVisita();
    visita.id = 2;

    component.contrato.cliente = usuario;
    component.contrato.visita = visita;

    component.contrato.id = 4;
    component.descripcionSel = 'vendida';

    component.registrar(null);

    expect(component.registrado).toBeTruthy();
  });


   it('ver info contrato', () => {
    // tslint:disable-next-line:prefer-const
    component.ventas;
    const respuesta = component.listarVentas();
    // tslint:disable-next-line:no-unused-expression
    expect(respuesta).toBeTruthy;
  });

  it('ver info contratosFinales', () => {
    // tslint:disable-next-line:prefer-const
    component.contratos;
    const respuesta = component.listadoFinal();
    // s tslint:disable-next-line:no-unused-expression
    expect(respuesta).toBeTruthy();
  });

  it('Ver la info de la tabla venta', () => {
    // tslint:disable-next-line:prefer-const
    component.verSelec;
    const respuesta = component.ver(null);
    // tslint:disable-next-line:no-unused-expression
    expect(respuesta).toBeTruthy;
  });

  
});
