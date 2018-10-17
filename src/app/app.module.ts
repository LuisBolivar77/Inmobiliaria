import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistroUsuarioComponent } from './Paginas/publico/registro-usuario/registro-usuario.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormField } from '@angular/material';
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
import { AgmCoreModule } from '@agm/core';
import { GestionVentasArriendosComponent } from './Paginas/seguro/gestion-ventas-arriendos/gestion-ventas-arriendos.component';
import { GestionarPromocionesComponent } from './Paginas/seguro/gestionar-promociones/gestionar-promociones.component';
import { AsignarVentasContratosComponent } from './Paginas/seguro/asignar-ventas-contratos/asignar-ventas-contratos.component';
import { VisitasClienteComponent } from './Paginas/seguro/visitas-cliente/visitas-cliente.component';
import { AsignarArriendoContratoComponent } from './Paginas/seguro/asignar-arriendo-contrato/asignar-arriendo-contrato.component';
import { AsignarVisitasComponent } from './Paginas/seguro/asignar-visitas/asignar-visitas.component';
import { VisitasEmpleadoComponent } from './Paginas/seguro/visitas-empleado/visitas-empleado.component';

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
    InmuebleClienteComponent,
    GestionVentasArriendosComponent,
    GestionarPromocionesComponent,
    VisitasClienteComponent,
    AsignarVentasContratosComponent,
    AsignarVisitasComponent,
    VisitasEmpleadoComponent,
    AsignarArriendoContratoComponent
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB0WP4oGVaDXx-3HZDqzwNsbUi6yS6lEk8'
    }),
    RouterModule.forRoot([
      {
        path: 'empleado/visitas-empleado',
        component: VisitasEmpleadoComponent
      },       
      {
        path: 'administracion/asignar-visitas',
        component: AsignarVisitasComponent
      },
      {
      path: 'cliente/visitas-cliente',
      component: VisitasClienteComponent
      },
      {
        path: 'administrador/gestionar-promociones',
        component: GestionarPromocionesComponent
      },
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
        path: 'administracion/gestion-ventas-arriendos',
        component: GestionVentasArriendosComponent
      },
      {
        path: 'administracion/asignar-ventas-contratos',
        component: AsignarVentasContratosComponent
      },
      {
        path: 'administracion/asignar-arriendo-contrato',
        component: AsignarArriendoContratoComponent
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
