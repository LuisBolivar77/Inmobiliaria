import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarPromocionesComponent } from './gestionar-promociones.component';

describe('GestionarPromocionesComponent', () => {
  let component: GestionarPromocionesComponent;
  let fixture: ComponentFixture<GestionarPromocionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarPromocionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarPromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
