import { Rol } from './Rol';
/**
 * Entidad persona
 */
export class Persona {

    id: number;
    cedula: string;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    telefono: string;
    direccion: string;
    Rol: Rol;

}
