import { map } from 'rxjs/operators';
import { Usuario } from '../Modelo/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Modelo/Persona';
import { Rol } from '../Modelo/Rol';
// import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {

    // Usuario que inicio sesion en la aplicacion
    public usuario: Usuario;

    // Ruta raiz donde se encuentran los servicios
    domain = 'http://localhost:4200/';

    constructor(private http: HttpClient) {
    }
    /**
     * Asignamos el usuario que inicio sesion y el estado a logeado
     * @param logeado el usuario que se conecto
     */
    setUsuario(logeado: Usuario) {
        this.usuario = logeado;
        localStorage.setItem('usuario', JSON.stringify(logeado));
      }

    /**
     * Accedemos al usuario que se conecto
     */
    getUsuario() {
        return JSON.parse(localStorage.getItem('usuario'));
    }

    Registrar(persona: Persona) {

        return this.http.post<any>(`${this.domain}/usuarios/regitrarUsu`, persona)
        .pipe(map(res => {
            return res;
        }));

    }


    /**
     * Iniciar sesion
     * @param usuario el usuario que intenta conectarse
     */
    Login (usuario: Usuario) {
        return this.http.get<any>(this.domain + 'usuarios/login/' + usuario.username + '/' + usuario.password)
        .pipe(
            map(res => {
                return res;
            })
        );
    }

    /**
     * Cerrar Sesion
     */
    logout () {
        this.usuario = null;
        // Limpiamos el storage
        localStorage.clear();
    }

    /**
     * Obtenemos la informacion de la persona del usuario que inicio sesion
     * @param usuario el usuario al que vamos a obtener la persona
     */
    getUsuarioPersona (usuario: Usuario) {
        return this.http.get<any>(this.domain + 'personas/persona-by-id/' + usuario.persona)
        .pipe(
            map(res => {
                return res;
            })
        );
    }

    /**
     * Obtenemos la informacion del Rol de la persona del usuario que inicio sesion
     * @param rol el rol al que vamos a obtener la informacion
     */
    getUsuarioPersonaRol (persona: Persona) {
        return this.http.get<any>(this.domain + 'rol/rol-by-id/' + persona.rol)
        .pipe(
            map(res => {
                return res;
            })
        );
    }

    /**
     * Obtenemos la lista de Accesos del Rol de la persona del usuario que inicio sesion
     * @param rol el rol al que vamos a obtener los accesos
     */
    getUsuarioRolAccesos (rol: Rol) {
        return this.http.get<any>(this.domain + 'acceso/por-rol/' + rol.id)
        .pipe(
            map(res => {
                return res;
            })
        );
    }
}
