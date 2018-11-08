import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PromocionesComponent } from './promociones.component';
import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('PromocionesComponent', () => {
  let component: PromocionesComponent;
  let fixture: ComponentFixture<PromocionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ GenericoService],
      imports: [ HttpClientModule, RouterTestingModule, FormsModule, BrowserAnimationsModule],
      declarations: [ PromocionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('obtiene el tipoAV', () => {

    const res = component.getTipoAV(0);
    expect(res).toBe('Arriendo');

  });

  it('obtiene la zona', () => {

    const res = component.getZona(0);
    expect(res).toBe('Norte');

  });

  it('agrega una coma al valor', () => {

    const res = component.addComa(200000);
    expect(res).toBe('200.000');

  });

  it('agrega objetos', () => {

    component.listarInmuebles();
    component.agregarObjetos(component.inmuebles);
    expect(component.agregoObjeto).toBeTruthy();

  });
});
