import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionClienteComponent } from './gestion-cliente.component';

describe('GestionClienteComponent', () => {
  let component: GestionClienteComponent;
  let fixture: ComponentFixture<GestionClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
