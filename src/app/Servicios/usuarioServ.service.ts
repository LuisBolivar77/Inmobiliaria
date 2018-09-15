import { map } from 'rxjs/operators';
import { Usuario } from '../Modelo/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {

    // Ruta raiz donde se encuentran los servicios
    domain = 'http://localhost:4300/';

    constructor(private http: HttpClient) {

    }
    
    /**
     * Iniciar sesion
     * @param username nombre de usuario
     * @param pass contraseña del usuario
     */
    Login (usuario: Usuario) {
        return this.http.get<any>(this.domain+'usuarios/login/'+usuario.username+'/'+usuario.password)
        .pipe(
            map(res => {
                return res;
            })
        );
    }
}
