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

fdescribe('GestionVentasArriendosComponent', () => {
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
    fixture.detectChanges();
  });

  it('editar contrato', () => {

    console.log("ENTRO editar CONTRATO gestion");
    

    let persona= new Persona();
    persona.id = 3;
    
    let empleado = new Usuario();

    let cliente = new Usuario();
    cliente.persona = 

    let visita = new ReservarVisita();

    component.usuarioSesion= component.usuarioSesion;

    component.contrato.id =2;
    component.contrato.descripcion='cualquier cosa';
    component.contrato.visita = visita;

    
    const editar = component.editar(null);
    expect(editar).toBeTruthy;
  });

  
});
