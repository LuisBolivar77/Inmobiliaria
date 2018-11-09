import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroUsuarioComponent } from './registro-usuario.component';
import { AgmCoreModule } from '@agm/core';

describe('RegistroUsuarioComponent', () => {
  let component: RegistroUsuarioComponent;
   let fixture: ComponentFixture<RegistroUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroUsuarioComponent ],
      imports: [FormsModule, HttpClientModule, RouterTestingModule, BrowserAnimationsModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyB0WP4oGVaDXx-3HZDqzwNsbUi6yS6lEk8'
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('no registra por no selecionar en el mapa', () => {

    component.locationSelec = false;

    component.registrar(null);
    expect(component.show).toBe(1);
  });

  it('registra una persona', () => {

    component.locationSelec = true;
    component.persona.id = 100;
    component.persona.cedula = '1094927675';
    component.persona.nombre = 'juliana';
    component.persona.apellido = 'Vanegas';
    component.persona.fecha_nacimiento = '1996-11-30';
    component.persona.telefono = '21893718293';
    component.persona.direccion = 'andjkasndka';
    component.usuario.username = 'juli';
    component.usuario.password = '123';
    component.rol.id = 2;
    component.latSelected = 4.540130;
    component.longSelected = -75.665193;

    component.registrar(null);
    expect(component.registrado).toBeTruthy();

  });

  it('limpia el mapa', () => {

    component.limpiarMapa();
    expect(component.locationSelec).toBeFalsy();

  });

  it('selecciona en el mapa', () => {

    const lat = 4.540130;
    const lng = -75.665193;

    component.onChoseLocation(lat, lng);
    expect(component.locationSelec).toBeTruthy();

  });

  it('no registra por falta de datos (direccion)', () => {

    component.locationSelec = true;
    component.persona.id = 100;
    component.persona.cedula = '1094927675';
    component.persona.nombre = 'juliana';
    component.persona.apellido = 'Vanegas';
    component.persona.fecha_nacimiento = '1996-11-30';
    component.persona.telefono = '21893718293';
    component.usuario.username = 'juli';
    component.usuario.password = '123';
    component.rol.id = 2;
    component.latSelected = 4.540130;
    component.longSelected = -75.665193;

    component.registrar(null);
    expect(component.noRegistrado).toBeTruthy();

  });
});
