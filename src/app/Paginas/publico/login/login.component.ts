import { Usuario } from '../../../Modelo/Usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';
import {Router} from "@angular/router";

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
  
    constructor(private servicios: UsuarioService,private router: Router) { }
  
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
          this.msj = "A ingresado datos incorrectos";
          this.show = 1;
        }else{
          // Redirigimos el usuario al panel de administracion
          this.router.navigate(['/']);
        }
      });
    }

}
