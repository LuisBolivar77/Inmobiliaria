import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroUsuarioComponent } from './registro-usuario.component';
import { AgmCoreModule } from '@agm/core';

describe('RegistroUsuarioComponent', () => {
  let component: RegistroUsuarioComponent;
   let fixture: ComponentFixture<RegistroUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroUsuarioComponent ],
      imports: [FormsModule, HttpClientModule, RouterTestingModule, BrowserAnimationsModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyB0WP4oGVaDXx-3HZDqzwNsbUi6yS6lEk8'
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
