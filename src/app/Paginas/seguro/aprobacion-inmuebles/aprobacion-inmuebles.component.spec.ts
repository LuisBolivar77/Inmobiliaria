import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionInmueblesComponent } from './aprobacion-inmuebles.component';

describe('AprobacionInmueblesComponent', () => {
  let component: AprobacionInmueblesComponent;
  let fixture: ComponentFixture<AprobacionInmueblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobacionInmueblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobacionInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
