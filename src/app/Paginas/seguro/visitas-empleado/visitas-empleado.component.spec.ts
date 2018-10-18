import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitasEmpleadoComponent } from './visitas-empleado.component';

describe('VisitasEmpleadoComponent', () => {
  let component: VisitasEmpleadoComponent;
  let fixture: ComponentFixture<VisitasEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitasEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
