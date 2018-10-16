import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleClienteComponent } from './inmueble-cliente.component';

describe('InmuebleClienteComponent', () => {
  let component: InmuebleClienteComponent;
  let fixture: ComponentFixture<InmuebleClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmuebleClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmuebleClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
