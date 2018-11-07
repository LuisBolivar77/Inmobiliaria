import { Persona } from 'src/app/Modelo/Persona';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InmuebleClienteComponent } from './inmueble-cliente.component';
import { AgmCoreModule } from '@agm/core';
import { InmuebleTemporal } from 'src/app/Modelo/InmuebleTemporal';

describe('InmuebleClienteComponent', () => {
  let component: InmuebleClienteComponent;
  let fixture: ComponentFixture<InmuebleClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientModule, BrowserAnimationsModule,
        AgmCoreModule.forRoot({
        apiKey: 'AIzaSyB0WP4oGVaDXx-3HZDqzwNsbUi6yS6lEk8'
      })
    ],
      declarations: [ InmuebleClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmuebleClienteComponent);
    component = fixture.componentInstance;

    const per = new Persona();
    per.id = 11116;

    component.usuarioSesion.persona = per;
    component.usuarioSesion.username = 'lucho';
    component.usuarioSesion.password = '1234';

    fixture.detectChanges();


  });

  it('Registra un inmueble', () => {

    component.tipoAVSeleccionado.id = 0;
    component.tipoAVSeleccionado.nombre = 'Arriendo';

    component.zonaSeleccionada.id = 0;
    component.zonaSeleccionada.nombre = 'Norte';

    component.departamentoSeleccionado.id = 1;
    component.departamentoSeleccionado.nombre = 'Quindio';

    component.ciudadSeleccionada.id = 1;
    component.ciudadSeleccionada.nombre = 'Calarca';
    component.ciudadSeleccionada.departamento = component.departamentoSeleccionado;

    component.tipoInmuebleSeleccionado.id = 1;
    component.tipoInmuebleSeleccionado.nombre = 'Casa';
    component.tipoInmuebleSeleccionado.descripcion = 'casa';

    component.latSeleccion = 1.0576201783636634;
    component.longSeleccion = -73.31911914062499;

    component.registrado = true;
    component.theCheckboxAsensor = true;
    component.theCheckboxCanchasDepor = false;
    component.theCheckboxChimenea = true;
    component.theCheckboxCocinaAC = false;
    component.theCheckboxComedorIndependiente = true;
    component.theCheckboxCuartoServicio = false;
    component.theCheckboxDeposito = true;
    component.theCheckboxEstudio = false;
    component.theCheckboxJardines = true;
    component.theCheckboxParqueadero = false;
    component.theCheckboxPrecioNegociable = true;
    component.theCheckboxTransporteCercano = false;
    component.theCheckboxVistaExterios = true;
    component.theCheckboxZonaInfantil = false;
    component.theCheckboxZonasHumedas = true;
    component.theCheckboxZonasRopas = false;

    component.inmueble.id = 100;
    component.inmueble.numero_matricula = '282103292601';
    component.inmueble.valor = 198739182;
    component.inmueble.anoconstruccion = '03/02/1989';
    component.inmueble.area = 123;
    component.inmueble.banios = 2;
    component.inmueble.habitaciones = 5;
    component.inmueble.detalles = 'INMUEBLE DE PRUEBA';
    component.inmueble.direccion = 'DIRECCION DE PRUEBA';
    component.inmueble.garajes = 2;

    component.registrar(null);
    expect(component.registrado).toBeTruthy();

  });

  it('Registra un inmueble2', () => {

    component.tipoAVSeleccionado.id = 0;
    component.tipoAVSeleccionado.nombre = 'Arriendo';

    component.zonaSeleccionada.id = 0;
    component.zonaSeleccionada.nombre = 'Norte';

    component.departamentoSeleccionado.id = 1;
    component.departamentoSeleccionado.nombre = 'Quindio';

    component.ciudadSeleccionada.id = 1;
    component.ciudadSeleccionada.nombre = 'Calarca';
    component.ciudadSeleccionada.departamento = component.departamentoSeleccionado;

    component.tipoInmuebleSeleccionado.id = 1;
    component.tipoInmuebleSeleccionado.nombre = 'Casa';
    component.tipoInmuebleSeleccionado.descripcion = 'casa';

    component.latSeleccion = 1.0576201783636634;
    component.longSeleccion = -73.31911914062499;

    component.registrado = true;
    component.theCheckboxAsensor = true;
    component.theCheckboxCanchasDepor = false;
    component.theCheckboxChimenea = true;
    component.theCheckboxCocinaAC = false;
    component.theCheckboxComedorIndependiente = true;
    component.theCheckboxCuartoServicio = false;
    component.theCheckboxDeposito = true;
    component.theCheckboxEstudio = false;
    component.theCheckboxJardines = true;
    component.theCheckboxParqueadero = false;
    component.theCheckboxPrecioNegociable = true;
    component.theCheckboxTransporteCercano = false;
    component.theCheckboxVistaExterios = true;
    component.theCheckboxZonaInfantil = false;
    component.theCheckboxZonasHumedas = true;
    component.theCheckboxZonasRopas = false;

    component.inmueble.id = 101;
    component.inmueble.numero_matricula = '282103292601';
    component.inmueble.valor = 198739182;
    component.inmueble.anoconstruccion = '03/02/1989';
    component.inmueble.area = 123;
    component.inmueble.banios = 2;
    component.inmueble.habitaciones = 5;
    component.inmueble.detalles = 'INMUEBLE DE PRUEBA2';
    component.inmueble.direccion = 'DIRECCION DE PRUEBA2';
    component.inmueble.garajes = 2;

    component.registrar(null);
    expect(component.registrado).toBeTruthy();

  });

  it('edita un inmueble', () => {

    component.tipoAVSeleccionado.id = 0;
    component.tipoAVSeleccionado.nombre = 'Arriendo';

    component.zonaSeleccionada.id = 0;
    component.zonaSeleccionada.nombre = 'Norte';

    component.departamentoSeleccionado.id = 1;
    component.departamentoSeleccionado.nombre = 'Quindio';

    component.ciudadSeleccionada.id = 1;
    component.ciudadSeleccionada.nombre = 'Calarca';
    component.ciudadSeleccionada.departamento = component.departamentoSeleccionado;

    component.tipoInmuebleSeleccionado.id = 1;
    component.tipoInmuebleSeleccionado.nombre = 'Casa';
    component.tipoInmuebleSeleccionado.descripcion = 'casa';

    component.latSeleccion = 1.0576201783636634;
    component.longSeleccion = -73.31911914062499;

    component.theCheckboxAsensor = true;
    component.theCheckboxCanchasDepor = false;
    component.theCheckboxChimenea = true;
    component.theCheckboxCocinaAC = false;
    component.theCheckboxComedorIndependiente = true;
    component.theCheckboxCuartoServicio = false;
    component.theCheckboxDeposito = true;
    component.editado = true;
    component.theCheckboxEstudio = false;
    component.theCheckboxJardines = true;
    component.theCheckboxParqueadero = false;
    component.theCheckboxPrecioNegociable = true;
    component.theCheckboxTransporteCercano = false;
    component.theCheckboxVistaExterios = true;
    component.theCheckboxZonaInfantil = false;
    component.theCheckboxZonasHumedas = true;
    component.theCheckboxZonasRopas = false;

    component.inmueble.numero_matricula = '2821032926011111111';
    component.inmueble.valor = 198739182;
    component.inmueble.anoconstruccion = '03/02/1989';
    component.inmueble.area = 123;
    component.inmueble.banios = 2;
    component.inmueble.habitaciones = 5;
    component.inmueble.detalles = 'INMUEBLE DE PRUEBA EDICION';
    component.inmueble.direccion = 'DIRECCION DE PRUEBA EDICION';
    component.inmueble.garajes = 2;
    component.inmueble.id = 16;

    component.editar(null);
    expect(component.editado).toBeTruthy();
  });

  it('Busca un inmueble', () => {

    component.buscado = true;
    component.numMatriculaBuscar = '723131111';

    component.buscarInmueble();
    expect(component.buscado).toBeTruthy();

  });

  it('lista zonas', () => {

    component.listarZonas();
    expect(component.zonas).not.toBeNull();

  });

  it('lista tipoAV', () => {

    component.listarVentaArriendo();
    expect(component.ventaArriendo).not.toBeNull();

  });

  it('elimina un inmuebleAprobado', () => {

    component.eliminadoAprobado = true;

    component.eliminarAprobados(100);
    expect(component.eliminadoAprobado).toBeTruthy();
  });

  it('elimina un inmuebleNoAprobado', () => {

    component.eliminadoNoAprobado = true;

    component.eliminarNoAprobados(101);
    expect(component.eliminadoNoAprobado).toBeTruthy();
  });

  it('ver inmueble aprobado', () => {

    const inmuebleTemporal = new InmuebleTemporal();
    inmuebleTemporal.id = 30;

    component.verAprobados(inmuebleTemporal);
    expect(component.busco).toBeTruthy();

  });

  it('ver inmueble No aprobado', () => {

    const inmuebleTemporal = new InmuebleTemporal();
    inmuebleTemporal.id = 30;

    component.verNoAprobados(inmuebleTemporal);
    expect(component.busco).toBeTruthy();

  });

  it('localiza un inmueble en la lisar en el mapa', () => {

    const inmuebleTemporal = new InmuebleTemporal();
    inmuebleTemporal.id = 30;
    inmuebleTemporal.latitud = 1.1720042523187477;
    inmuebleTemporal.longitud = -70.67671338574218;

    component.verUnInmuebleEnMap(inmuebleTemporal);
    expect(component.verInmueble).toBeTruthy();

  });

  it('localiza un inmueble a registrar en el mapa', () => {

    const lat = 1.1720042523187477;
    const lng = -70.67671338574218;

    component.onChoseLocation(lat, lng);
    expect(component.locationSelec).toBeTruthy();

  });

  it('covierte un number a boolean', () => {

    const res = component.booleanComp('1');
    expect(res).toBeTruthy();

  });

  it('cambia un null a false', () => {

    const res = component.cambio(null);
    expect(res).toBeFalsy();

  });

  it('limpia los campos', () => {

    component.limpiarCampos(null);
    expect(component.selectedEditar).toBeFalsy();

  });
});
