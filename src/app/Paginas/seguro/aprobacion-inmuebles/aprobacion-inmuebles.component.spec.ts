import { TipoInmueble } from 'src/app/Modelo/TipoInmueble';
import { Promocion } from 'src/app/Modelo/Promocion';
import { Ciudad } from 'src/app/Modelo/Ciudad';
import { Inmueble } from './../../../Modelo/Inmueble';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AprobacionInmueblesComponent } from './aprobacion-inmuebles.component';
import { Persona } from 'src/app/Modelo/Persona';
import { Usuario } from 'src/app/Modelo/Usuario';

describe('AprobacionInmueblesComponent', () => {
  let component: AprobacionInmueblesComponent;
  let fixture: ComponentFixture<AprobacionInmueblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobacionInmueblesComponent ],
      imports: [RouterTestingModule, FormsModule, HttpClientModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobacionInmueblesComponent);
    component = fixture.componentInstance;

    const per = new Persona();
    per.id = 9;

    component.usuarioSesion.persona = per;
    component.usuarioSesion.username = 'admin';
    component.usuarioSesion.password = '123';

    fixture.detectChanges();
  });

  it('lista los inmuebles a aprobar', () => {

    component.listar();
    expect(component.inmuebles).not.toBeNull();

  });

  it('agragega objetos a los inmuebles listados', () => {

    component.listar();
    component.agregarObjetos(component.inmuebles);

    expect(component.objetoAgregado).toBeTruthy();

  });

  it('Aprobar un inmueble', () => {

    const persona = new Persona();
    persona.id = 9;

    component.usuarioSesion.persona = persona;
    component.usuarioSesion.username = 'pepe';
    component.usuarioSesion.password = '123';

    const per = new Persona();
    per.id = 3;

    const usu = new Usuario();
    usu.persona = per;

    const ciudad = new Ciudad();
    ciudad.id = 5;

    const promocion = new Promocion();
    promocion.id = 2;

    const tipo = new TipoInmueble();
    tipo.id = 4;

    const inmueble = new Inmueble();

    inmueble.id = 9;
    inmueble.usuario = usu;
    inmueble.tipo = tipo;
    inmueble.numero_matricula = '723131111';
    inmueble.valor = 6999989;
    inmueble.anoconstruccion = '1983-12-28';
    inmueble.area = 578;
    inmueble.banios = 2;
    inmueble.habitaciones = 5;
    inmueble.detalles = 'casa sin techo';
    inmueble.direccion = 'carrera 43 numer 10';
    inmueble.garajes = 2;
    inmueble.tipoCortinas = 'percianasss';
    inmueble.ciudad = ciudad;
    inmueble.tipoAV = 1;
    inmueble.zona = 1;
    inmueble.estado = 0;
    inmueble.ascensor = false;
    inmueble.canchasDepor = false;
    inmueble.chimenea = false;
    inmueble.cocinaAC = false;
    inmueble.comedorIndependiente = false;
    inmueble.cuartoServicio = false;
    inmueble.deposito = true;
    inmueble.estudio = false;
    inmueble.jardines = true;
    inmueble.parqueadero = false;
    inmueble.precioNegociable = true;
    inmueble.transporteCercano = false;
    inmueble.vistaExterior = false;
    inmueble.zonaInfantil = false;
    inmueble.zonaRopas = false;
    inmueble.zonasHumedas = false;
    inmueble.promocion = promocion;

    component.aprobarInmueble(inmueble);

    expect(component.aprobo).toBeTruthy();

  });
});
