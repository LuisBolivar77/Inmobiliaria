import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarPersonasComponent } from './gestionar-personas.component';

describe('GestionarPersonasComponent', () => {
  let component: GestionarPersonasComponent;
  let fixture: ComponentFixture<GestionarPersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarPersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
