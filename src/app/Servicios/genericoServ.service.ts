import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class GenericoService {

    // Ruta raiz donde se encuentran los servicios
    domain = 'http://localhost:4300/';

    constructor(private http: HttpClient) {
    }

    /**
     * Listar registros de una determinada tabla
     * @param tabla la tabla de donde se traera los registros 
     * @param objeto los parametros dado el caso que vaya a iltrar
     */
    listar (table: string, object: object) {
        var data = {"tabla" : table, "objeto" : object}
        return this.http.post<any>(this.domain + 'generico/listar', data)
        .pipe(
            map(res => {
                return res;
            })
        );
    }

    /**
     * Registrar en una determinada tabla
     * @param tabla la tabla de donde se traera los registros 
     * @param objeto el objeto a registrar
     */
    registrar (table: string, object: object) {
        var data = {"tabla" : table, "objeto" : object}
        return this.http.post<any>(this.domain + 'generico/guardar', data)
        .pipe(
            map(res => {
                return res;
            })
        );
    }

    /**
     * Editar en una determinada tabla
     * @param tabla la tabla de donde se traera los registros 
     * @param objeto el objeto a editar
     */
    editar (table: string, object: object) {
        var data = {"tabla" : table, "objeto" : object}
        return this.http.post<any>(this.domain + 'generico/editar', data)
        .pipe(
            map(res => {
                return res;
            })
        );
    }

    /**
     * Buscar en una determinada tabla
     * @param tabla la tabla de donde se traera los registros 
     * @param objeto los parametros dado el caso que vaya a iltrar
     */
    buscar (table: string, object: object) {
        var data = {"tabla" : table, "objeto" : object}
        return this.http.post<any>(this.domain + 'generico/buscar', data)
        .pipe(
            map(res => {
                return res;
            })
        );
    }

}
