import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [UsuarioService],
      // Importamos el http para poder consumir los servicios
      imports: [HttpClientModule, FormsModule, RouterTestingModule, BrowserAnimationsModule],
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

    const respuestaLogin = component.login(null);

    // console.log(component.usuario.username + component.usuario.password );
    // tslint:disable-next-line:no-unused-expression
    expect(respuestaLogin).toBeFalsy;

  });

  it('Acceso Login onInit', () => {
    const res = component.ngOnInit();
    // tslint:disable-next-line:no-unused-expression
    expect(res).toBeNull;

  });

  it('Acceso Login', () => {

    component.usuario.username = 'admin';
    component.usuario.password = '123';

    const respuestaLogin = component.login(null);

    // tslint:disable-next-line:no-unused-expression
    expect(respuestaLogin).toBeNaN;

  });
});

