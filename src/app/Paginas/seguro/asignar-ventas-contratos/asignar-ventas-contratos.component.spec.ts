import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarVentasContratosComponent } from './asignar-ventas-contratos.component';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { HttpClientModule } from '../../../../../node_modules/@angular/common/http';
import { FormsModule } from '../../../../../node_modules/@angular/forms';
import { RouterTestingModule } from '../../../../../node_modules/@angular/router/testing';
import { Contrato } from '../../../Modelo/Contrato';
import { Empleado } from '../../../Modelo/Empleado';
import { Persona } from '../../../Modelo/Persona';
import { ReservarVisita } from '../../../Modelo/ReservarVisita';

describe('AsignarVentasContratosComponent', () => {
  let component: AsignarVentasContratosComponent;
  let fixture: ComponentFixture<AsignarVentasContratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [GenericoService],
      // Importamos el http para poder consumir los servicios
      imports: [HttpClientModule, FormsModule, RouterTestingModule],
      // Se declara el componente, para poder ver el reporte en el coverage
      declarations: [AsignarVentasContratosComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarVentasContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('buscar contrato', () => {

    console.log("ENTRO BUSCAR CONTRATO");   
    
    let contrato: Contrato = new Contrato();
    contrato.id =2;
    component.contrato.id = 2;
    
    const buscar = component.buscarContrato();
    expect(buscar).toBeTruthy;
  });
});
