import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroMapaComponent } from './filtro-mapa.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

describe('FiltroMapaComponent', () => {
  let component: FiltroMapaComponent;
  let fixture: ComponentFixture<FiltroMapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroMapaComponent ],
      imports: [FormsModule, HttpClientModule, RouterTestingModule, BrowserAnimationsModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyB0WP4oGVaDXx-3HZDqzwNsbUi6yS6lEk8'
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Listar inmuebles
  it('listar', () => {
    component.listar();
    expect(component.inmuebles).not.toBeNull();
  });

  // onChoseLocation
  it('onChoseLocation', () => {
    component.onChoseLocation(1234, 12234);
    expect(component.locationSelec).toBeTruthy();
  });
});
