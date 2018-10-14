import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { VerInmuebleComponent } from './ver-inmueble.component';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';

describe('VerInmuebleComponent', () => {
  /**
   * Componente de ver inmueble
   */
  let componente: VerInmuebleComponent;
  let fixture: ComponentFixture<VerInmuebleComponent>;

// ----------------------------------------------------------------------------------
  /**
   * Se ejecuta en cada it de manera asincrona
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [ GenericoService, UsuarioService],
      // Importamos el http para poder consumir los servicios
      imports: [ HttpClientModule, RouterTestingModule],
      // Se declara el componente, para poder ver el reporte en el coverage
      declarations: [ VerInmuebleComponent ]
    }).compileComponents();
  }));
// ----------------------------------------------------------------------------------
  /**
   * Se ejecuta antes de cada it
   */
  beforeEach(() => {
    fixture = TestBed.createComponent( VerInmuebleComponent);
    // Inicializamos el componente, para poder acceder a sus metodos
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });
// ----------------------------------------------------------------------------------
  it('Crear componente', () => {
    expect(componente).toBeTruthy();
  });
// ----------------------------------------------------------------------------------
  /**
   *  probando el ngOnInit cuando existe el parametro GET
   */
  it('ngOnInit Existe parametro GET', () => {
    // tslint:disable-next-line:prefer-const
    let ver = componente.ngOnInit();
    // toBeTruthy cuando es verdadero
    // tslint:disable-next-line:no-unused-expression
    expect(ver).toBeTruthy;
  });
// ----------------------------------------------------------------------------------
  /**
   *  probando el ngOnInit cuando no existe el parametro GET
   */
  it('ngOnInit No existe parametro GET', () => {
    // tslint:disable-next-line:prefer-const
    let ver = componente.ngOnInit();
    // toBeFalsy cuando es Falso
    // tslint:disable-next-line:no-unused-expression
    expect(ver).toBeFalsy;
  });
// ----------------------------------------------------------------------------------
  /**
   *  Busca el inmueble y carga la informacion
   */
  it('Cargar Inmueble', () => {
    // id del inmueble a buscar y cargar
    componente.inmueble.id = 2;
    // tslint:disable-next-line:prefer-const
    let ver = componente.cargarInmueble();
    // toBeTruthy cuando es verdadero
    // tslint:disable-next-line:no-unused-expression
    expect(ver).toBeTruthy;
    console.log(componente.inmueble);
  });
// ----------------------------------------------------------------------------------
  /**
   *  probando el flujo alterno, cuando no se encuentra un inmueble
   */
  it('No Cargar Inmueble', () => {
    // id del inmueble a buscar y a no cargar, este inmueble no debe existir en la bd
    componente.inmueble.id = 200;
    // tslint:disable-next-line:prefer-const
    let ver = componente.cargarInmueble();
    // toBeFalsy cuando es Falso
    // tslint:disable-next-line:no-unused-expression
    expect(ver).toBeFalsy;
  });
// ----------------------------------------------------------------------------------
  /**
   * obtener zona
   */
  it('Obtener Zona', () => {
    // tslint:disable-next-line:prefer-const
    let zona = componente.getZona(0);
    // validamos si la respuesta concuerda con la esparada
    expect(zona).toContain('Norte');
  });
// ----------------------------------------------------------------------------------
  /**
   * obtener tipo AV
   */
  it('Obtener TipoAV', () => {
    // tslint:disable-next-line:prefer-const
    let tipoav = componente.getTipoAV(0);
    // validamos si la respuesta concuerda con la esparada
    expect(tipoav).toContain('Arriendo');
  });
// ----------------------------------------------------------------------------------
  /**
   * Agregar punto a un numero
   */
  it('addComa', () => {
    // tslint:disable-next-line:prefer-const
    let valor = componente.addComa(100000);
    // validamos si la respuesta concuerda con la esparada
    expect(valor).toContain('100.000');
  });
// ----------------------------------------------------------------------------------
  /**
   * probar si un boolean nos devuelve si o no
   */
  it('siNo cuando devuelve Si', () => {
    // tslint:disable-next-line:prefer-const
    let valor = componente.siNo(1);
    // validamos si la respuesta concuerda con la esparada
    expect(valor).toContain('Si');
  });
// ----------------------------------------------------------------------------------
  /**
   * probar si un boolean nos devuelve si o no
   */
  it('siNo cuando devuelve NO', () => {
    // tslint:disable-next-line:prefer-const
    let valor = componente.siNo(0);
    // validamos si la respuesta concuerda con la esparada
    expect(valor).toContain('No');
  });
// ---------------------------------------------------------------------------------
});
