import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignarArriendoContratoComponent } from './asignar-arriendo-contrato.component';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '../../../../../node_modules/@angular/router/testing';
import { Contrato } from '../../../Modelo/Contrato';
import { Usuario } from '../../../Modelo/Usuario';
import { Persona } from '../../../Modelo/Persona';
import { Rol } from '../../../Modelo/Rol';
import { FormsModule } from '../../../../../node_modules/@angular/forms';

fdescribe('AsignarArriendoContratoComponent', () => {
  let component: AsignarArriendoContratoComponent;
  let fixture: ComponentFixture<AsignarArriendoContratoComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ GenericoService],
      imports: [HttpClientModule, FormsModule, RouterTestingModule],
      declarations: [ AsignarArriendoContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarArriendoContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
