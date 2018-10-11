import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVentasArriendosComponent } from './gestion-ventas-arriendos.component';

describe('GestionVentasArriendosComponent', () => {
  let component: GestionVentasArriendosComponent;
  let fixture: ComponentFixture<GestionVentasArriendosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionVentasArriendosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionVentasArriendosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
