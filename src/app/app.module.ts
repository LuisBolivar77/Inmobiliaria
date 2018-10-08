import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistroUsuarioComponent } from './Paginas/publico/registro-usuario/registro-usuario.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { LoginComponent } from './Paginas/publico/login/login.component';
import { IndexComponent } from './Paginas/publico/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Paginas/publico/header/header.component';
import { GestionarPersonasComponent } from './Paginas/seguro/gestionar-personas/gestionar-personas.component';
import { GestionarEmpleadosComponent } from './Paginas/seguro/gestionar-empleados/gestionar-empleados.component';
import { GestionarClientesComponent } from './Paginas/seguro/gestionar-clientes/gestionar-clientes.component';
import { GestionarAdministradoresComponent } from './Paginas/seguro/gestionar-administradores/gestionar-administradores.component';
import { PromocionesComponent } from './Paginas/publico/promociones/promociones.component';
import { EditarCuentaComponent } from './Paginas/seguro/editar-cuenta/editar-cuenta.component';
import { InmueblesAdminComponent } from './Paginas/seguro/inmuebles-admin/inmuebles-admin.component';
import { VerInmuebleComponent } from './Paginas/publico/ver-inmueble/ver-inmueble.component';
import { AprobacionInmueblesComponent } from './Paginas/seguro/aprobacion-inmuebles/aprobacion-inmuebles.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { InmuebleClienteComponent } from './Paginas/seguro/inmueble-cliente/inmueble-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    RegistroUsuarioComponent,
    HeaderComponent,
    GestionarPersonasComponent,
    GestionarEmpleadosComponent,
    GestionarClientesComponent,
    GestionarAdministradoresComponent,
    PromocionesComponent,
    EditarCuentaComponent,
    InmueblesAdminComponent,
    VerInmuebleComponent,
    AprobacionInmueblesComponent,
    FileSelectDirective,
    InmuebleClienteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'cliente/gestion-inmuebles',
        component: InmuebleClienteComponent
      },
      {
        path: 'administracion/aprobar-inmueble',
        component: AprobacionInmueblesComponent
      },
      {
        path: 'ver-inmueble',
        component: VerInmuebleComponent
      },
      {
        path: 'administracion/gestion-inmuebles',
        component: InmueblesAdminComponent
      },
      {
        path: 'editar-cuenta',
        component: EditarCuentaComponent
      },
      {
        path: 'promociones',
        component: PromocionesComponent
      },
      {
        path: 'administracion/gestionar-personas',
        component: GestionarPersonasComponent
      },
      {
        path: 'administracion/gestionar-empleados',
        component: GestionarEmpleadosComponent
      },
      {
        path: 'administracion/gestionar-clientes',
        component: GestionarClientesComponent
      },
      {
        path: 'administracion/gestionar-administradores',
        component: GestionarAdministradoresComponent
      },
      {
        path: 'registrousuario',
        component: RegistroUsuarioComponent
      },
      {
        path: 'login', // http://localhost:4200/login
        component: LoginComponent
      },
      {
        path: '',
        component: IndexComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
