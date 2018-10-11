import { Empleado } from "./Empleado";
import { Persona } from "./Persona";
import { Usuario } from "./Usuario";

export class Contrato {

    id: number;
    descripcion: string;
    empleado: Empleado;
    cliente:Usuario;
    visita:string;
    /**
     * 0=pendiente
     * 1=finalizado
     */
    estado:number;
    fechaAprobacion: string;
    fechaSolicitud: string;
    archivo:string;

    /**
     * retorna el valor texto de un estado
     * @param estado el numero del indice a retornar
     */
    getEstado(estado: number) {
        const estados = [
            'pendiente para finalizar',
            'finalizado'
        ];
        if (estado == null) {
            // Retornamos todo el listado de estados
            return estados;
        } else {
            return estados[estado];
        }
    }

}