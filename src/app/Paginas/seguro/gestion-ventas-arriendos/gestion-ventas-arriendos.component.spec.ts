import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVentasArriendosComponent } from './gestion-ventas-arriendos.component';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { HttpClientModule } from '../../../../../node_modules/@angular/common/http';
import { FormsModule } from '../../../../../node_modules/@angular/forms';
import { RouterTestingModule } from '../../../../../node_modules/@angular/router/testing';
import { Contrato } from '../../../Modelo/Contrato';
import { Persona } from '../../../Modelo/Persona';
import { ReservarVisita } from '../../../Modelo/ReservarVisita';
import { Usuario } from '../../../Modelo/Usuario';
import { Rol } from 'src/app/Modelo/Rol';
import { Empleado } from 'src/app/Modelo/Empleado';

describe('GestionVentasArriendosComponent', () => {
  let component: GestionVentasArriendosComponent;
  let fixture: ComponentFixture<GestionVentasArriendosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [GenericoService],
      // Importamos el http para poder consumir los servicios
      imports: [HttpClientModule, FormsModule, RouterTestingModule],
      // Se declara el componente, para poder ver el reporte en el coverage
      declarations: [GestionVentasArriendosComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionVentasArriendosComponent);
    component = fixture.componentInstance;

    const per = new Persona();
    per.id = 9;

    component.usuarioSesion.persona = per;
    component.usuarioSesion.username = 'pepe';
    component.usuarioSesion.password = '123';

    fixture.detectChanges();
  });

   /**
   * probamos que liste los contratos
   */
  it('listar los contratos', () => {
    console.log('listar los contratos');
    component.listar();
   // expect(component.lista).toBeTruthy();
  });

  it('editar contrato', () => {

    console.log('Editar un contrato');

    const visita = new ReservarVisita();
    visita.id = 7;

    const per = new Persona();
    per.id = 11116;

    const usuario = new Usuario();
    usuario.persona = per;
    usuario.username = 'lucho';
    usuario.password = '1234';

    component.contrato.cliente = usuario;
    component.contrato.visita = visita;

    component.contrato.id = 33333;
    component.contrato.descripcion = 'cualquier cosa';

    component.contrato.valorFinalInmueble = 1200000;

    component.editar(null);
    expect(component.editado).toBeTruthy();
  });
});



