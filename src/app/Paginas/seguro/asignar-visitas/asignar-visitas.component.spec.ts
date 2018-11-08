import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AsignarVisitasComponent } from './asignar-visitas.component';
import { Persona } from 'src/app/Modelo/Persona';
import { Inmueble } from 'src/app/Modelo/Inmueble';

describe('AsignarVisitasComponent', () => {
  let component: AsignarVisitasComponent;
  let fixture: ComponentFixture<AsignarVisitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule , BrowserAnimationsModule, FormsModule],
      declarations: [ AsignarVisitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Asignar visita', () => {
   
    //creamos los objetos
    const inmueble = new Inmueble();
    inmueble.id=16;
    const cliente = new Persona();
    cliente.id=12;
    const empleado = new Persona();
    empleado.id=9;

    component.visitaSeleccionada.inmueble=inmueble;
    component.visitaSeleccionada.cliente=cliente;
    component.visitaSeleccionada.empleado=empleado;

    component.asignarVisita();

    expect(component.asignoVisita).toBeTruthy();
  });
});
