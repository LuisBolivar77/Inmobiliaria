import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignarArriendoContratoComponent } from './asignar-arriendo-contrato.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '../../../../../node_modules/@angular/router/testing';
import { FormsModule } from '../../../../../node_modules/@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AsignarArriendoContratoComponent', () => {
  let component: AsignarArriendoContratoComponent;
  let fixture: ComponentFixture<AsignarArriendoContratoComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarArriendoContratoComponent ],
      imports: [HttpClientModule, RouterTestingModule, FormsModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarArriendoContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
