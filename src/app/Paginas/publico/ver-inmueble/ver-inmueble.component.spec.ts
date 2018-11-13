import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { VerInmuebleComponent } from './ver-inmueble.component';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';
import { Persona } from 'src/app/Modelo/Persona';
import { ReservarVisita } from 'src/app/Modelo/ReservarVisita';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Inmueble } from 'src/app/Modelo/Inmueble';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



describe('VerInmuebleComponent', () => {
  /**
   * Componente de ver inmueble
   */
  let componente: VerInmuebleComponent;
  let fixture: ComponentFixture<VerInmuebleComponent>;

  /**
   * Se ejecuta en cada it de manera asincrona
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [ GenericoService, UsuarioService],
      // Importamos el http para poder consumir los servicios
      imports: [ HttpClientModule, RouterTestingModule , BrowserAnimationsModule, FormsModule],
      // Se declara el componente, para poder ver el reporte en el coverage
      declarations: [ VerInmuebleComponent ]
    }).compileComponents();
  }));

  /**
   * Se ejecuta antes de cada it
   */
  beforeEach(() => {
    fixture = TestBed.createComponent( VerInmuebleComponent);
    // Inicializamos el componente, para poder acceder a sus metodos
    componente = fixture.componentInstance;

    const usuarioSesion = new Persona();
    usuarioSesion.id = 1;

    componente.usuarioSesion.persona = usuarioSesion;
    componente.usuarioSesion.username = 'admin';
    componente.usuarioSesion.password = '123';

    fixture.detectChanges();
  });

  it('Crear una visita', () => {

    // creamos los objetos
    const inmueble = new Inmueble();
    inmueble.id = 16;

    componente.horaVisita = 10;
    componente.reservaVisita.mensaje = 'prueba prueba prueba';
    componente.reservaVisita.fecha = '2018-11-30';
    componente.reservaVisita.hora_visita = 10;
    componente.inmueble = inmueble;

    componente.reservarVisita(null);

    expect(componente.reservoVisita).toBeTruthy();
  });

  it('no Crear una visita (error inmueble indefinido)', () => {

    // creamos los objetos
    const inmueble = new Inmueble();
    inmueble.id = 16;

    componente.horaVisita = 10;
    componente.reservaVisita.mensaje = 'prueba prueba prueba';
    componente.reservaVisita.fecha = '2018-11-30';
    componente.reservaVisita.hora_visita = 10;
    componente.reservaVisita.inmueble = inmueble;

    componente.reservarVisita(null);

    expect(componente.reservoVisita).toBeTruthy();
  });

  it('no Crear una visita (error faltan campos)', () => {

    // creamos los objetos
    const inmueble = new Inmueble();
    inmueble.id = 16;

    componente.reservaVisita.mensaje = 'prueba prueba prueba';
    componente.reservaVisita.fecha = '2018-11-30';
    componente.reservaVisita.hora_visita = 10;
    componente.reservaVisita.inmueble = inmueble;

    componente.reservarVisita(null);

    expect(componente.show).toBe(1);
  });

  it('no Crear una visita (error faltan campos)', () => {

    // creamos los objetos
    const inmueble = new Inmueble();
    inmueble.id = 16;

    componente.horaVisita = 10;
    componente.reservaVisita.mensaje = 'prueba prueba prueba';
    componente.reservaVisita.fecha = '2018-04-05';
    componente.reservaVisita.hora_visita = 10;
    componente.reservaVisita.inmueble = inmueble;

    componente.reservarVisita(null);

    expect(componente.show).toBe(1);
  });

  it('no crea reserva usuarioSesion null', () => {

    componente.usuarioSesion = null;

    componente.reservarVisita(null);
    expect(componente.show).toBe(1);

  });

  it('limpiar campos', () => {

    componente.limpiarCampos();
    expect(componente.horaVisita).toBe(0);

  });

  it('listar', () => {

    componente.listar();
    expect(componente.visitas).not.toBeNull();

  });

  it('agregarObjetos', () => {

    componente.listar();
    componente.agregarObjetos(componente.visitas);
    expect(componente.agregObjeto).toBeTruthy();

  });

  it('obtiene el tipoAV', () => {

    const res = componente.getTipoAV(0);
    expect(res).toBe('Arriendo');

  });

  it('obtiene la zona', () => {

    const res = componente.getZona(0);
    expect(res).toBe('Norte');

  });

  it('agrega una coma al valor', () => {

    const res = componente.addComa(200000);
    expect(res).toBe('200.000');

  });

  it('booleano', () => {

    const res = componente.siNo('1');
    expect(res).toBe('Si');

  });

  it('carga el inmueble', () => {



  });
});
