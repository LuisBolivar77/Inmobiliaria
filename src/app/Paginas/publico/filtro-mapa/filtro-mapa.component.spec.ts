import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroMapaComponent } from './filtro-mapa.component';

describe('FiltroMapaComponent', () => {
  let component: FiltroMapaComponent;
  let fixture: ComponentFixture<FiltroMapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroMapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
