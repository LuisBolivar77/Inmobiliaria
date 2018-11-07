import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PromocionesComponent } from './promociones.component';
import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PromocionesComponent', () => {
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
/**
  it('zona inmuebles', () => {
    const respuesta = component.getZona;
    expect(respuesta).toBeTruthy();
  });
*/
});
