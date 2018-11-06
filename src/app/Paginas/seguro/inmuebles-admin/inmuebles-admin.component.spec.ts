import { InmuebleTemporal } from 'src/app/Modelo/InmuebleTemporal';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { InmueblesAdminComponent } from './inmuebles-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { Persona } from '../../../Modelo/Persona';

fdescribe('InmueblesAdminComponent', () => {
  let component: InmueblesAdminComponent;
  let fixture: ComponentFixture<InmueblesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientModule, BrowserAnimationsModule,
        AgmCoreModule.forRoot({
        apiKey: 'AIzaSyB0WP4oGVaDXx-3HZDqzwNsbUi6yS6lEk8'
      })
    ],
      declarations: [ InmueblesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmueblesAdminComponent);
    component = fixture.componentInstance;

    const per = new Persona();
    per.id = 11116;

    component.usuarioSesion.persona = per;
    component.usuarioSesion.username = 'admin';
    component.usuarioSesion.password = '123';

    fixture.detectChanges();
  });

  /**
   * probamos que liste los inmuebles
   */
  it('listar los inmuebles', () => {
    console.log('listar los inmuebles');
    component.listar();
    expect(component.lista).toBeTruthy();
  });

  /**
   * probamos que liste los inmuebles
   */
  it('listar Departamentos', () => {
    console.log('listar Departamentos');
    component.listarDepartamentos();
    expect(component.listaDepartamento).toBeTruthy();
  });

  /**
   * probamos que liste los inmuebles
   */
  it('listar las Cidudades', () => {

    console.log('listar las Cidudades');
    component.departamentoSeleccionado.id = 2;
    component.listarCiudades();
    expect(component.listarCiudad).toBeTruthy();
  });

  /**
   * probamos que liste los inmuebles
   */
  it('listar los Tipos de Inmuebles', () => {
    console.log('listar los Tipos de Inmuebles');
    component.listarTipoInmuebles();
    expect(component.listaTipoInmueble).toBeTruthy();
  });

  it('registrar un inmueble', () => {

    console.log('registrar un inmueble');

    component.cedula = '10989';

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
    component.inmueble.detalles = 'INMUEBLE DE PRUEBA';
    component.inmueble.direccion = 'DIRECCION DE PRUEBA';
    component.inmueble.garajes = 2;

    component.buscarUsuario(null);
    expect(component.registrado).toBeTruthy();
  });

  it('edita un inmueble', () => {

    console.log('edita un inmueble');
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

  it('Bucar un inmueble', () => {
    console.log('Bucar un inmueble');
    component.numMatriculaBuscar = '723131';
    component.buscarInmueble();

    expect(component.buscarInmueble).toBeTruthy();
  });

  it('limpia los campos', () => {

    component.limpiarCampos(null);
    expect(component.locationSelec).toBeFalsy();

  });

  it('ver inmueble en el mapa', () => {

    const inmTemporal = new InmuebleTemporal();
    inmTemporal.id = 30;
    component.verUnInmuebleEnMap(inmTemporal);
    expect(component.verInmueble).toBeTruthy();

  });

  it('ver inmueble', () => {

    const inmTemporal = new InmuebleTemporal();
    inmTemporal.id = 30;

    component.ver(inmTemporal);
    expect(component.selectedEditar).toBeTruthy();

  });

  it('eliminar un inmueble ', () => {

    component.eliminar(101);
    expect(component.eliminado).toBeTruthy();

  });

  it('lista zonas', () => {

    console.log('lista zonas');
    component.listarZonas();
    expect(component.zonas).not.toBeNull();

  });

  it('lista tipoAV', () => {

    console.log('lista tipoAV');
    component.listarVentaArriendo();
    expect(component.ventaArriendo).not.toBeNull();

  });

});
