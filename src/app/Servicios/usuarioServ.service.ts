import { map } from 'rxjs/operators';
import { Usuario } from '../Modelo/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {

    domain = 'http://localhost:4200/';

    constructor(private http: HttpClient) {}

    LogIn (usrname: string, pass: string) {

        return this.http.get<any>('${this.domain}//usuarios/login/${username}/${pass}').pipe(map(res => {
            return res.data;
        }));

    }
}
