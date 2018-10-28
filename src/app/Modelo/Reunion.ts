import { Empleado } from './Empleado';
import { Usuario } from './Usuario';
export class Reunion {

    id: number;
    fecha: string;
    descripcion: string;
    estado: number;
    cliente: Usuario;
    empleado: Empleado;

}
