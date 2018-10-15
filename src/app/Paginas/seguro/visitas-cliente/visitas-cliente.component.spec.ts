import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitasClienteComponent } from './visitas-cliente.component';

describe('VisitasClienteComponent', () => {
  let component: VisitasClienteComponent;
  let fixture: ComponentFixture<VisitasClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitasClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
