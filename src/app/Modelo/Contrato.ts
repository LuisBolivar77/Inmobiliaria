import { Empleado } from './Empleado';
import { Usuario } from './Usuario';
import { ReservarVisita } from './ReservarVisita';

export class Contrato {

    id: number;
    descripcion: string;
    empleado: Empleado;
    cliente: Usuario;
    visita: ReservarVisita;
    /**
     * 0=pendiente
     * 1=finalizado
     */
    estado: number;
    fecha_finalizacion: string;
    fecha_solicitud: string;
    file_certificacion: string;

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
