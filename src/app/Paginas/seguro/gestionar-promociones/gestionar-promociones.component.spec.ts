import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarPromocionesComponent } from './gestionar-promociones.component';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Promocion } from 'src/app/Modelo/Promocion';

describe('GestionarPromocionesComponent', () => {
  let component: GestionarPromocionesComponent;
  let fixture: ComponentFixture<GestionarPromocionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [GenericoService],
      // Importamos el http para poder consumir los servicios
      imports: [HttpClientModule, FormsModule, RouterTestingModule, BrowserAnimationsModule],
      // Se declara el componente, para poder ver el reporte en el coverage
      declarations: [GestionarPromocionesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarPromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * prueba crear promocion
   */
  it('Crear una promocion', () => {

    // tslint:disable-next-line:prefer-const
    let promocion: Promocion = new Promocion;

    promocion.id = 99999;
    promocion.descripcion = 'Esta descripcion es de una promocion de prueba';
    promocion.fecha_inicio = '2018-10-01';
    promocion.fecha_fin = '2018-12-01';
    promocion.porcentaje = 20;

    component.promocion = promocion;

    const respuesta = component.registrar(null);

    expect(respuesta).toBeTruthy();
  });

  /**
   * Promocion cuanod hay registro en bd
   */
  it('buscar una promocion', () => {
    component.promocion.id = 1;

    const respuesta = component.buscar();

    // tslint:disable-next-line:no-unused-expression
    expect(respuesta).toBeTruthy;
  });

  /**
   * Promocion cunaod no existe
   */
  it('buscar una promocion que no existe', () => {
    component.promocion.id = 0;

    const respuesta = component.buscar();

    // tslint:disable-next-line:no-unused-expression
    expect(respuesta).toBeFalsy;
  });

  it('editar promocion', () => {

    // tslint:disable-next-line:prefer-const
    let promocion: Promocion = new Promocion;

    promocion.id = 99999;
    promocion.descripcion = 'Esta descripcion es de una promocion de prueba editada';
    promocion.fecha_inicio = '2018-12-01';
    promocion.fecha_fin = '2018-12-01';
    promocion.porcentaje = 20;

    component.promocion = promocion;

    const respuesta = component.editar(null);

    // tslint:disable-next-line:no-unused-expression
    expect(respuesta).toBeTruthy;

  });

  /**
   * Editar promocion que no existe
   */
  it('editar promocion', () => {
    const respuesta = component.editar(null);
    expect(respuesta).toBeFalsy();
  });


  it('eliminar una promocion', () => {
    // tslint:disable-next-line:prefer-const
    let promocion: Promocion = new Promocion;
    promocion.id = 99999;
    component.promocion = promocion;

    const respuesta = component.eliminar(promocion);
    // tslint:disable-next-line:no-unused-expression
    expect(respuesta).toBeFalsy;
  });

  it('Ver la inormacion de una promocion de la tabla', () => {
    // tslint:disable-next-line:prefer-const
    let promocion: Promocion = new Promocion;
    promocion.id = 1;

    const respuesta = component.ver(promocion);
    // tslint:disable-next-line:no-unused-expression
    expect(respuesta).toBeTruthy;
  });

  it('Buscar desde el formulario html verdadero', () => {
    // tslint:disable-next-line:prefer-const
    let promocion: Promocion = new Promocion;
    promocion.id = 1;

    component.promocion = promocion;

    const respuesta = component.fbuscar(null);
    // tslint:disable-next-line:no-unused-expression
    expect(respuesta).toBeTruthy;
  });

  it('Buscar desde el formulario html falso', () => {
    // tslint:disable-next-line:prefer-const
    let promocion: Promocion = new Promocion;
    promocion.id = null;

    component.promocion = promocion;

    const respuesta = component.fbuscar(null);
    // tslint:disable-next-line:no-unused-expression
    expect(respuesta).toBeFalsy;
  });


});
