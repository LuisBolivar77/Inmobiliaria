import { Departamento } from './../../../Modelo/Departamento';
import { Ciudad } from './../../../Modelo/Ciudad';
import { InmuebleTemporal } from './../../../Modelo/InmuebleTemporal';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InmueblesAdminComponent } from './inmuebles-admin.component';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';
import { TipoInmueble } from '../../../Modelo/TipoInmueble';
import { Usuario } from '../../../Modelo/Usuario';
import { Persona } from '../../../Modelo/Persona';
import { Inmueble } from '../../../Modelo/Inmueble';

describe('InmueblesAdminComponent', () => {
  let component: InmueblesAdminComponent;
  let fixture: ComponentFixture<InmueblesAdminComponent>;

  let inmuebleTemp: InmuebleTemporal;
  let inmueble: Inmueble;
  let ciudad: Ciudad;
  let tipoInmueble: TipoInmueble;
  let usu: Usuario;
  let persona: Persona;
  let depar: Departamento;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [ GenericoService, UsuarioService ],
      // Importamos el http para poder consumir los servicios
      imports: [ HttpClientModule, RouterTestingModule ],
      declarations: [ InmueblesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmueblesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {

    tipoInmueble = new TipoInmueble();
    tipoInmueble.id = 2;
    tipoInmueble.nombre = 'Apartamento';
    tipoInmueble.descripcion = 'apartamento';

    depar = new Departamento();
    depar.id = 2;
    depar.nombre = 'Risaralda';

    ciudad = new Ciudad();
    ciudad.id = 4;
    ciudad.nombre = 'Pereira';
    ciudad.departamento = depar;

    persona = new Persona();
    persona.id = 5;
    persona.nombre = 'laura';
    persona.telefono = '3214133345';
    persona.apellido = 'posada';
    persona.cedula = '1093';
    persona.direccion = 'calle 2 Norte';
    persona.fecha_nacimiento = '1989-07-03';

    usu = new Usuario();
    usu.persona = persona;
    usu.username = 'lau';
    usu.password = '123';

    inmueble = new Inmueble();
    inmueble.anoconstruccion = '05/05/1988';
    inmueble.area = 123;
    inmueble.ascensor = true;
    inmueble.banios = 4;
    inmueble.canchasDepor = false;
    inmueble.chimenea = true;
    inmueble.cocinaAC = false;
    inmueble.comedorIndependiente = true;
    inmueble.cuartoServicio = false;
    inmueble.deposito = true;
    inmueble.detalles = 'bella casa';
    inmueble.direccion = 'carrera 50 numero 30';
    inmueble.estado = 1;
    inmueble.estudio = false;
    inmueble.fechaAprobacion = '05/05/1999';
    inmueble.garajes = 2;
    inmueble.habitaciones = 2;
    inmueble.jardines = true;
    inmueble.numero_matricula = '987654321';
    inmueble.parqueadero = false;
    inmueble.precioNegociable = true;
    inmueble.tipoAV = 1;
    inmueble.tipoCortinas = 'percianas';
    inmueble.transporteCercano = false;
    inmueble.valor = 82131120938;
    inmueble.vistaExterior = true;
    inmueble.zona = 1;
    inmueble.zonaInfantil = false;
    inmueble.zonasHumedas = true;
    inmueble.zonaRopas = false;
    inmueble.ciudad = ciudad;
    inmueble.tipo = tipoInmueble;
    inmueble.usuario = usu;

    inmuebleTemp = new InmuebleTemporal();
    inmuebleTemp.anoconstruccion = '05/05/1988';
    inmuebleTemp.area = 123;
    inmuebleTemp.ascensor = '1';
    inmuebleTemp.banios = 4;
    inmuebleTemp.canchasDepor = '0';
    inmuebleTemp.chimenea = '1';
    inmuebleTemp.cocinaAC = '0';
    inmuebleTemp.comedorIndependiente = '1';
    inmuebleTemp.cuartoServicio = '0';
    inmuebleTemp.deposito = '1';
    inmuebleTemp.detalles = 'bella casa';
    inmuebleTemp.direccion = 'carrera 50 numero 30';
    inmuebleTemp.estado = 1;
    inmuebleTemp.estudio = '0';
    inmuebleTemp.fechaAprobacion = '05/05/1999';
    inmuebleTemp.garajes = 2;
    inmuebleTemp.habitaciones = 2;
    inmuebleTemp.jardines = '1';
    inmuebleTemp.numero_matricula = '987654321';
    inmuebleTemp.parqueadero = '0';
    inmuebleTemp.precioNegociable = '1';
    inmuebleTemp.tipoAV = 1;
    inmuebleTemp.tipoCortinas = 'percianas';
    inmuebleTemp.transporteCercano = '0';
    inmuebleTemp.valor = 82131120938;
    inmuebleTemp.vistaExterior = '1';
    inmuebleTemp.zona = 1;
    inmuebleTemp.zonaInfantil = '0';
    inmuebleTemp.zonasHumedas = '1';
    inmuebleTemp.zonasRopas = '0';
    inmuebleTemp.ciudad = ciudad;
    inmuebleTemp.tipo = tipoInmueble;
    inmuebleTemp.usuario = usu;
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   *  probando el ngOnInit cuando existe el parametro GET
   */
  it('ngOnInit Existe parametro GET', () => {
    const ver = component.ngOnInit();
    // toBeTruthy cuando es verdadero
    // tslint:disable-next-line:no-unused-expression
    expect(ver).toBeTruthy;
  });
// ----------------------------------------------------------------------------------
  /**
   *  probando el ngOnInit cuando no existe el parametro GET
   */
  it('ngOnInit No existe parametro GET', () => {
    const ver = component.ngOnInit();
    // toBeFalsy cuando es Falso
    // tslint:disable-next-line:no-unused-expression
    expect(ver).toBeFalsy;
  });

  /**
   * probamos que liste los inmuebles
   */
  it('listar los inmuebles', () => {
    const ver = component.listar();
    // tslint:disable-next-line:no-unused-expression
    expect(ver).toBeTruthy;
    console.log('lista de inmuebles' + ver);
  });

  /**
   * probamos que liste los inmuebles
   */
  it('listar Departamentos', () => {
    const ver = component.listarDepartamentos();
    // tslint:disable-next-line:no-unused-expression
    expect(ver).toBeTruthy;
    console.log('lista de inmuebles' + ver);
  });

  /**
   * probamos que liste los inmuebles
   */
  it('listar las Cidudades', () => {

    component.departamentoSeleccionado.id = 2;

    const ver = component.listarCiudades();
    // tslint:disable-next-line:no-unused-expression
    expect(ver).toBeTruthy;
    console.log('lista de inmuebles' + ver);
  });

  /**
   * probamos que liste los inmuebles
   */
  it('listar los Tipos de Inmuebles', () => {
    const ver = component.listarTipoInmuebles();
    // tslint:disable-next-line:no-unused-expression
    expect(ver).toBeTruthy;
    console.log('lista de inmuebles' + ver);
  });

  it('registrar un inmueble', () => {
    component.tipoAVSeleccionado.id = 0;
    component.zonaSeleccionada.id = 2;
    component.ciudadSeleccionada = ciudad;
    component.tipoInmuebleSeleccionado = tipoInmueble;
    component.usuarioCliente = usu;
    component.usuarioSesion = usu;
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
    component.theCheckboxPrecioNegociable = false;
    component.theCheckboxTransporteCercano = true;
    component.theCheckboxVistaExterios = false;
    component.theCheckboxZonaInfantil = true;
    component.theCheckboxZonasHumedas = false;
    component.theCheckboxZonasRopas = true;

    component.inmueble = inmueble;

    const ver = component.registrar(null);

    // tslint:disable-next-line:no-unused-expression
    expect(ver).toBeTruthy;

  });

  it('Bucar un inmueble', () => {
    component.numMatriculaBuscar = '723131';
    component.inmuebleTemporal = inmuebleTemp;
    const ver = component.buscarInmueble();

    // tslint:disable-next-line:no-unused-expression
    expect(ver).toBeTruthy;
  });

  it('llenar inmueble para registro', () => {
    component.tipoAVSeleccionado.id = 0;
    component.zonaSeleccionada.id = 2;
    component.ciudadSeleccionada = ciudad;
    component.tipoInmuebleSeleccionado = tipoInmueble;
    component.usuarioCliente = usu;
    component.usuarioSesion = usu;
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
    component.theCheckboxPrecioNegociable = false;
    component.theCheckboxTransporteCercano = true;
    component.theCheckboxVistaExterios = false;
    component.theCheckboxZonaInfantil = true;
    component.theCheckboxZonasHumedas = false;
    component.theCheckboxZonasRopas = true;

    const ver = component.llenarInmueble();

    // tslint:disable-next-line:no-unused-expression
    expect(ver).toBeTruthy;

  });

  it('llenar inmueble despues de la busqueda', () => {

  });



});
