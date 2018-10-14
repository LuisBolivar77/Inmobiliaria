import { Inmueble } from "./Inmueble";
import { Usuario } from "./Usuario";
import { Empleado } from "./Empleado";

export class ReservarVisita{

    id: number;
    mensaje: String;
    fecha: String;
     /**
     * 0=pendiente
     * 1=finalizado
     */
    estado: number;
    inmueble:Inmueble;
    cliente:Usuario;
    empleado:Empleado;


      /**
     * retorna el valor texto de un estado
     * @param estado el numero del indice a retornar
     */
    getEstado(estado: number) {
        const estados = [
            'pendiente para Visitar',
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