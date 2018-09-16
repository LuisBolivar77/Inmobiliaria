import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    RegistroUsuarioComponent,
    HeaderComponent
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
