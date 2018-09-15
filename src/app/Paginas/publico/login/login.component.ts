import { Usuario } from '../../../Modelo/Usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    // Variables para los mensajes en la pagina
    show: number;
    msj: string;

    // usuario que iniciara sesion
    usuario: Usuario = new Usuario();

    // variable de clase que permite el uso de los servicios
  
    constructor(private servicios: UsuarioService) { }
  
    ngOnInit() {
    }
     
    /**
     * Iniciar Sesion en la aplicacion
     */
    login(event) {
      event.preventDefault();
      // enviamos al servicio
      this.servicios.Login(this.usuario).subscribe(rta => {
        if(rta.data == null){
          this.msj = "Datos incorrectos";
          this.show = 1;
        }else{
          // Redirigimos el usuario al panel de administracion
          this.msj = 'Bienvenido '+this.usuario.username;
          this.show = 2;
        }
      });
    }

}
