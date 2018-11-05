import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesComponent } from './promociones.component';
import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Inmueble } from 'src/app/Modelo/Inmueble';

describe('PromocionesComponent', () => {
  let component: PromocionesComponent;
  let fixture: ComponentFixture<PromocionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ GenericoService],
      imports: [ HttpClientModule, RouterTestingModule],
      declarations: [ PromocionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/**
  it('zona inmuebles', () => {
    const respuesta = component.getZona;
    expect(respuesta).toBeTruthy();
  });
*/
});
