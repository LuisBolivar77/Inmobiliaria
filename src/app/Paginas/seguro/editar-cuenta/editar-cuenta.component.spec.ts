import { Rol } from './../../../Modelo/Rol';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarCuentaComponent } from './editar-cuenta.component';
import { Persona } from 'src/app/Modelo/Persona';

describe('EditarCuentaComponent', () => {
  let component: EditarCuentaComponent;
  let fixture: ComponentFixture<EditarCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCuentaComponent ],
      imports: [FormsModule, HttpClientModule, RouterTestingModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCuentaComponent);
    component = fixture.componentInstance;

    const rol = new Rol();
    rol.id = 2;

    const per = new Persona();

    per.id = 11126;
    per.cedula = '1094927675';
    per.nombre = 'juliana';
    per.apellido = 'Vanegas';
    per.fecha_nacimiento = '1996-11-30';
    per.telefono = '21893718293';
    per.direccion = 'Prueba';
    per.rol = rol;
    per.latitud = 4.540130;
    per.longitud = -75.665193;

    component.usuario.persona = per;
    component.usuario.username = 'juli';
    component.usuario.password = '123';

    fixture.detectChanges();
  });

  it('edita los datos de una persona', () => {

    component.editar(null);
    expect(component.edito).toBeTruthy();

  });

  it('no registra', () => {

    const rol = new Rol();
    rol.id = 2;

    const per = new Persona();

    per.id = 100;
    per.cedula = '1094927675';
    per.nombre = 'juliana';
    per.apellido = 'Vanegas';
    per.fecha_nacimiento = '1996-11-30';
    per.telefono = '21893718293';
    per.direccion = 'Prueba';
    per.rol = rol;
    per.latitud = 4.540130;
    per.longitud = -75.665193;

    component.usuario.persona = per;
    component.usuario.username = 'juli';
    component.usuario.password = '123';

    component.editar(null);
    expect(component.edito).toBeTruthy();

  });
});
