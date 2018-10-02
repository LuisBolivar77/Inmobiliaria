import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';
import { Usuario } from '../../../Modelo/Usuario';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


describe('Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [UsuarioService],
      // Importamos el http para poder consumir los servicios
      imports: [HttpClientModule, FormsModule, RouterTestingModule],
      // Se declara el componente, para poder ver el reporte en el coverage
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Acceso Login no valido', () => {

    component.usuario.username = 'adminu';
    component.usuario.password = '1234';

    let respuestaLogin = component.login(null);

    //console.log(component.usuario.username + component.usuario.password );
    expect(respuestaLogin).toBeFalsy;

  });

  
  it('Acceso Login onInit', () => {
    let res = component.ngOnInit();
    expect(res).toBeNull;

  });

  it('Acceso Login', () => {

    component.usuario.username = 'admin';
    component.usuario.password = '123';

    let respuestaLogin = component.login(null);

    expect(respuestaLogin).toBeNaN;

  });
  
});

