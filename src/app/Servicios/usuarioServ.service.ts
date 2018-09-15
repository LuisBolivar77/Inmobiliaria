import { map } from 'rxjs/operators';
import { Usuario } from '../Modelo/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Modelo/Persona';
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {

    // Ruta raiz donde se encuentran los servicios
    domain = 'http://localhost:4200/';

    constructor(private http: HttpClient) {

    }


    Registrar(persona: Persona) {

    }


    /**
     * Iniciar sesion
     * @param usrname nombre de usuario
     * @param pass contraseña del usuario
     */
    LogIn (usrname: string, pass: string) {
        return this.http.get<any>('${this.domain}//usuarios/login/${username}/${pass}').pipe(map(res => {
            return res.data;
        }));
    }
}
