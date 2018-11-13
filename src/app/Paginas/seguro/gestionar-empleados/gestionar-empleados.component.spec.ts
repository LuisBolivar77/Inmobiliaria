import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { HttpClientModule } from '@angular/common/http';
import { Persona } from '../../../Modelo/Persona';
import { Rol } from '../../../Modelo/Rol';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Usuario } from '../../../Modelo/Usuario';
import { Empleado } from '../../../Modelo/Empleado';
import { Cargo } from '../../../Modelo/Cargo';
import { GestionarEmpleadosComponent } from './gestionar-empleados.component';
import { Formacion } from '../../../Modelo/Formacion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Gestionar un empeleado', () => {

  let component: GestionarEmpleadosComponent;
  let fixture: ComponentFixture<GestionarEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // el servicio a usar
      providers: [GenericoService],
      // Importamos el http para poder consumir los servicios
      imports: [HttpClientModule, FormsModule, RouterTestingModule, BrowserAnimationsModule],
      // Se declara el componente, para poder ver el reporte en el coverage
      declarations: [GestionarEmpleadosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(GestionarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('No registra un empleado (Cedula)', () => {

    const cargo = new Cargo();
    cargo.id = 2;
    cargo.nombre = 'Administrador Ventas';
    cargo.descripcion = 'es el que administra las ventas';

    const rol = new Rol();
    rol.id = 3;

    const per = new Persona();
    per.cedula = '1234321';
    per.nombre = 'Matias PRUEBA';
    per.apellido = 'Fernandes PRUEBA';
    per.direccion = 'DIRECCION PRUEBA';
    per.telefono = '10923881923 PRUEBA';
    per.telefono = '213812739 PRUEBA';
    per.fecha_nacimiento = '1989-02-02';
    per.rol = rol;
    per.latitud = 4.3332699;
    per.longitud = -74.3715004;

    const usuario = new Usuario();
    usuario.persona = per;
    usuario.password = '123';
    usuario.username = 'matiPRUEBA';

    component.empleado.usuario = usuario;
    component.empleado.salario = 2019831;
    component.empleado.cargo = cargo;

    component.registrar(null);
    expect(component.registro).toBeTruthy();

  });

  it('no registra un empleado (NomUsuario)', () => {

    const cargo = new Cargo();
    cargo.id = 2;
    cargo.nombre = 'Administrador Ventas';
    cargo.descripcion = 'es el que administra las ventas';

    const rol = new Rol();
    rol.id = 3;

    const per = new Persona();
    per.cedula = '1234321222';
    per.nombre = 'Matias PRUEBA';
    per.apellido = 'Fernandes PRUEBA';
    per.direccion = 'DIRECCION PRUEBA';
    per.telefono = '10923881923 PRUEBA';
    per.telefono = '213812739 PRUEBA';
    per.fecha_nacimiento = '1989-02-02';
    per.rol = rol;
    per.latitud = 4.3332699;
    per.longitud = -74.3715004;

    const usuario = new Usuario();
    usuario.persona = per;
    usuario.password = '123';
    usuario.username = 'matiPRUEBA';

    component.empleado.usuario = usuario;
    component.empleado.salario = 2019831;
    component.empleado.cargo = cargo;

    component.registrar(null);
    expect(component.registro).toBeTruthy();

  });

  it('no registra un empleado (Falta de datos)', () => {

    const cargo = new Cargo();
    cargo.id = 2;
    cargo.nombre = 'Administrador Ventas';
    cargo.descripcion = 'es el que administra las ventas';

    const rol = new Rol();
    rol.id = 3;

    const per = new Persona();
    per.cedula = '1234321222';
    per.nombre = 'Matias PRUEBA';
    per.apellido = null;
    per.direccion = 'DIRECCION PRUEBA';
    per.telefono = '10923881923 PRUEBA';
    per.telefono = '213812739 PRUEBA';
    per.fecha_nacimiento = '1989-02-02';
    per.rol = rol;
    per.latitud = 4.3332699;
    per.longitud = -74.3715004;

    const usuario = new Usuario();
    usuario.persona = per;
    usuario.password = '123';
    usuario.username = null;

    component.empleado.usuario = usuario;
    component.empleado.salario = 2019831;
    component.empleado.cargo = cargo;

    component.registrar(null);
    expect(component.noRegistroSinDatos).toBeTruthy();

  });

  /*
  it('registra un empleado', () => {

    const cargo = new Cargo();
    cargo.id = 2;
    cargo.nombre = 'Administrador Ventas';
    cargo.descripcion = 'es el que administra las ventas';

    const rol = new Rol();
    rol.id = 3;

    const per = new Persona();
    per.cedula = '1234321222';
    per.nombre = 'Matias PRUEBA';
    per.apellido = 'Fernandez PRUEBA';
    per.direccion = 'DIRECCION PRUEBA';
    per.telefono = '10923881923 PRUEBA';
    per.telefono = '213812739 PRUEBA';
    per.fecha_nacimiento = '1989-02-02';
    per.rol = rol;
    per.latitud = 4.3332699;
    per.longitud = -74.3715004;

    const usuario = new Usuario();
    usuario.persona = per;
    usuario.password = '123';
    usuario.username = 'MatiPReuba2';

    component.empleado.usuario = usuario;
    component.empleado.salario = 2019831;
    component.empleado.cargo = cargo;

    component.registrar(null);
    expect(component.registro).toBeTruthy();

  });
  */

  it('Edita un Empleado', () => {

    const cargo = new Cargo();
    cargo.id = 2;
    cargo.nombre = 'Administrador Ventas';
    cargo.descripcion = 'es el que administra las ventas';

    const rol = new Rol();
    rol.id = 3;

    const per = new Persona();
    per.cedula = '1234321222';
    per.nombre = 'Matias PRUEBAE DICION';
    per.apellido = 'Fernandez PRUEBA EDICION';
    per.direccion = 'DIRECCION PRUEBA EDICION';
    per.telefono = '10923881923 PRUEBA EDICION';
    per.telefono = '213812739 PRUEBA EDICION';
    per.fecha_nacimiento = '1989-02-02';
    per.rol = rol;
    per.latitud = 4.3332699;
    per.longitud = -74.3715004;

    const usuario = new Usuario();
    usuario.persona = per;
    usuario.password = '123';
    usuario.username = 'MatiPReuba2';

    component.empleado.usuario = usuario;
    component.empleado.salario = 2019831;
    component.empleado.cargo = cargo;

    component.editar(null);
    expect(component.edito).toBeTruthy();

  });

  it('no Edita un Empleado (sin datos)', () => {

    const cargo = new Cargo();
    cargo.id = 2;
    cargo.nombre = 'Administrador Ventas';
    cargo.descripcion = 'es el que administra las ventas';

    const rol = new Rol();
    rol.id = 3;

    const per = new Persona();
    per.cedula = '1234321222';
    per.nombre = 'Matias PRUEBAE DICION';
    per.apellido = 'Fernandez PRUEBA EDICION';
    per.direccion = 'DIRECCION PRUEBA EDICION';
    per.telefono = '10923881923 PRUEBA EDICION';
    per.telefono = '213812739 PRUEBA EDICION';
    per.fecha_nacimiento = '1989-02-02';
    per.rol = rol;
    per.latitud = 4.3332699;
    per.longitud = -74.3715004;

    const usuario = new Usuario();
    usuario.persona = null;
    usuario.password = '123';
    usuario.username = null;

    component.empleado.usuario = usuario;
    component.empleado.salario = 2019831;
    component.empleado.cargo = cargo;

    component.editar(null);
    expect(component.noEditoSinDatos).toBeTruthy();

  });

  it('Busca un Empleado', () => {

    const cargo = new Cargo();
    cargo.id = 2;
    cargo.nombre = 'Administrador Ventas';
    cargo.descripcion = 'es el que administra las ventas';

    const rol = new Rol();
    rol.id = 3;

    const per = new Persona();
    per.cedula = '1234321222';
    per.nombre = 'Matias PRUEBAE DICION';
    per.apellido = 'Fernandez PRUEBA EDICION';
    per.direccion = 'DIRECCION PRUEBA EDICION';
    per.telefono = '10923881923 PRUEBA EDICION';
    per.telefono = '213812739 PRUEBA EDICION';
    per.fecha_nacimiento = '1989-02-02';
    per.rol = rol;
    per.latitud = 4.3332699;
    per.longitud = -74.3715004;

    const usuario = new Usuario();
    usuario.persona = per;
    usuario.password = '123';
    usuario.username = 'MatiPReuba2';

    component.empleado.usuario = usuario;
    component.empleado.salario = 2019831;
    component.empleado.cargo = cargo;

    component.buscar();
    expect(component.buscado).toBeTruthy();

  });

  it('no Busca un Empleado (cedula erronea)', () => {

    const cargo = new Cargo();
    cargo.id = 2;
    cargo.nombre = 'Administrador Ventas';
    cargo.descripcion = 'es el que administra las ventas';

    const rol = new Rol();
    rol.id = 3;

    const per = new Persona();
    per.cedula = '123432122222222';
    per.nombre = 'Matias PRUEBAE DICION';
    per.apellido = 'Fernandez PRUEBA EDICION';
    per.direccion = 'DIRECCION PRUEBA EDICION';
    per.telefono = '10923881923 PRUEBA EDICION';
    per.telefono = '213812739 PRUEBA EDICION';
    per.fecha_nacimiento = '1989-02-02';
    per.rol = rol;
    per.latitud = 4.3332699;
    per.longitud = -74.3715004;

    const usuario = new Usuario();
    usuario.persona = per;
    usuario.password = '123';
    usuario.username = 'MatiPReuba2';

    component.empleado.usuario = usuario;
    component.empleado.salario = 2019831;
    component.empleado.cargo = cargo;

    component.buscar();
    expect(component.buscado).toBeTruthy();

  });

  it('limpia campos', () => {

    component.limpiar();
    expect(component.experiencias.length).toBe(0);

  });

  it('muestra un empleado', () => {

    const cargo = new Cargo();
    cargo.id = 2;
    cargo.nombre = 'Administrador Ventas';
    cargo.descripcion = 'es el que administra las ventas';

    const rol = new Rol();
    rol.id = 3;

    const per = new Persona();
    per.cedula = '1234321222';
    per.nombre = 'Matias PRUEBAE DICION';
    per.apellido = 'Fernandez PRUEBA EDICION';
    per.direccion = 'DIRECCION PRUEBA EDICION';
    per.telefono = '10923881923 PRUEBA EDICION';
    per.telefono = '213812739 PRUEBA EDICION';
    per.fecha_nacimiento = '1989-02-02';
    per.rol = rol;
    per.latitud = 4.3332699;
    per.longitud = -74.3715004;

    const usuario = new Usuario();
    usuario.persona = per;
    usuario.password = '123';
    usuario.username = 'MatiPReuba2';

    component.empleado.usuario = usuario;
    component.empleado.salario = 2019831;
    component.empleado.cargo = cargo;

    const res = component.ver(component.empleado);
    expect(res).toBeTruthy();

  });

  it('lista empleados', () => {

    component.listar();
    expect(component.empleados).not.toBeNull();

  });

  it('lista cargos', () => {

    component.listarCargos();
    expect(component.cargos).not.toBeNull();

  });

  /*
  it('elimina un empleado', () => {

    const cargo = new Cargo();
    cargo.id = 2;
    cargo.nombre = 'Administrador Ventas';
    cargo.descripcion = 'es el que administra las ventas';

    const rol = new Rol();
    rol.id = 3;

    const per = new Persona();
    per.id = 11123;
    per.cedula = '1234321222';
    per.nombre = 'Matias PRUEBAE DICION';
    per.apellido = 'Fernandez PRUEBA EDICION';
    per.direccion = 'DIRECCION PRUEBA EDICION';
    per.telefono = '10923881923 PRUEBA EDICION';
    per.telefono = '213812739 PRUEBA EDICION';
    per.fecha_nacimiento = '1989-02-02';
    per.rol = rol;
    per.latitud = 4.3332699;
    per.longitud = -74.3715004;

    const usuario = new Usuario();
    usuario.persona = per;
    usuario.password = '123';
    usuario.username = 'MatiPReuba2';

    component.empleado.usuario = usuario;
    component.empleado.salario = 2019831;
    component.empleado.cargo = cargo;

    component.eliminar(component.empleado);
    expect(component.eliminoEmpleado).toBeTruthy();

  });
  */

  it('no elimina un empleado (cedula erronea)', () => {

    const cargo = new Cargo();
    cargo.id = 2;
    cargo.nombre = 'Administrador Ventas';
    cargo.descripcion = 'es el que administra las ventas';

    const rol = new Rol();
    rol.id = 3;

    const per = new Persona();
    per.id = 1112333333333333;
    per.cedula = '1234321222';
    per.nombre = 'Matias PRUEBAE DICION';
    per.apellido = 'Fernandez PRUEBA EDICION';
    per.direccion = 'DIRECCION PRUEBA EDICION';
    per.telefono = '10923881923 PRUEBA EDICION';
    per.telefono = '213812739 PRUEBA EDICION';
    per.fecha_nacimiento = '1989-02-02';
    per.rol = rol;
    per.latitud = 4.3332699;
    per.longitud = -74.3715004;

    const usuario = new Usuario();
    usuario.persona = per;
    usuario.password = '123';
    usuario.username = 'MatiPReuba2';

    component.empleado.usuario = usuario;
    component.empleado.salario = 2019831;
    component.empleado.cargo = cargo;

    component.eliminar(component.empleado);
    expect(component.eliminoEmpleado).toBeTruthy();

  });

  it('no registra formacion del empleado (id persona null)', () => {

    const file: File = null;

    const cargo = new Cargo();
    cargo.id = 2;
    cargo.nombre = 'Administrador Ventas';
    cargo.descripcion = 'es el que administra las ventas';

    const rol = new Rol();
    rol.id = 3;

    const per = new Persona();
    per.cedula = '1234321222';
    per.nombre = 'Matias PRUEBAE DICION';
    per.apellido = 'Fernandez PRUEBA EDICION';
    per.direccion = 'DIRECCION PRUEBA EDICION';
    per.telefono = '10923881923 PRUEBA EDICION';
    per.telefono = '213812739 PRUEBA EDICION';
    per.fecha_nacimiento = '1989-02-02';
    per.rol = rol;
    per.latitud = 4.3332699;
    per.longitud = -74.3715004;

    const usuario = new Usuario();
    usuario.persona = per;
    usuario.password = '123';
    usuario.username = 'MatiPReuba2';

    component.archivoFormacion = file;

    component.empleado.usuario = usuario;
    component.empleado.salario = 2019831;
    component.empleado.cargo = cargo;

    component.formacion.titulo = 'TITULO PRUEBA';
    component.formacion.institucion = 'INSTITUCION PRUEBA';

    component.registrarFormacion(null);
    expect(component.show).toBe(1);

  });

  it('no registra formacion (file null)', () => {

    const file: File = null;

    const cargo = new Cargo();
    cargo.id = 2;
    cargo.nombre = 'Administrador Ventas';
    cargo.descripcion = 'es el que administra las ventas';

    const rol = new Rol();
    rol.id = 3;

    const per = new Persona();
    per.id = 11130;
    per.cedula = '1234321222';
    per.nombre = 'Matias PRUEBAE DICION';
    per.apellido = 'Fernandez PRUEBA EDICION';
    per.direccion = 'DIRECCION PRUEBA EDICION';
    per.telefono = '10923881923 PRUEBA EDICION';
    per.telefono = '213812739 PRUEBA EDICION';
    per.fecha_nacimiento = '1989-02-02';
    per.rol = rol;
    per.latitud = 4.3332699;
    per.longitud = -74.3715004;

    const usuario = new Usuario();
    usuario.persona = per;
    usuario.password = '123';
    usuario.username = 'MatiPReuba2';

    component.archivoFormacion = file;

    component.empleado.usuario = usuario;
    component.empleado.salario = 2019831;
    component.empleado.cargo = cargo;

    component.formacion.titulo = 'TITULO PRUEBA';
    component.formacion.institucion = 'INSTITUCION PRUEBA';

    component.registrarFormacion(null);
    expect(component.show).toBe(1);

  });

  it('no edita una formacion (id null)', () => {

    component.formacion.id = null;
    component.formacion.institucion = 'edicion de PRUEBA';

    component.editarFormacion(null);
    expect(component.show).toBe(1);

  });

  it('no edita una formacion (inetitucion null)', () => {

    const per = new Persona();
    per.id = 11130;

    const usuario = new Usuario();
    usuario.persona = per;

    component.empleado.usuario = usuario;

    component.formacion.id = 2;
    component.formacion.institucion = 'Intitucion DE PRUEBA';
    component.formacion.titulo = 'Titulo DE PRUEBA';

    component.editarFormacion(null);
    expect(component.editoFormacion).toBeTruthy();

  });

  it('no edita una formacion (inetitucion null)', () => {

    const per = new Persona();
    per.id = 11130;

    const usuario = new Usuario();
    usuario.persona = per;

    component.empleado.usuario = usuario;

    component.formacion.id = 2222;
    component.formacion.institucion = 'Intitucion DE PRUEBA';
    component.formacion.titulo = 'Titulo DE PRUEBA';

    component.editarFormacion(null);
    expect(component.editoFormacion).toBeTruthy();

  });
});
