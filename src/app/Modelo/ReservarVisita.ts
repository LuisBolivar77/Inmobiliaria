import { Inmueble } from './Inmueble';
import { Usuario } from './Usuario';
import { Empleado } from './Empleado';
import { Persona } from './Persona';

export class ReservarVisita {

    id: number;
    mensaje: String;
    fecha: String;
     /**
     * Pendiete (para visitar)
     * Visitado
     */
    estado: String;

<<<<<<< HEAD
    inmueble:Inmueble;
    cliente:Persona;
    empleado:Persona;
    comentario:String;// El comentario que hace el cliente despues de haber realizado su visita
    hora_visita:number; // la hora de la visita
    
=======
    inmueble: Inmueble;
    cliente: Persona;
    empleado: Persona;
    comentario: String; // El comentario que hace el cliente despues de haber realizado su visita
    hora_visita: number; // la hora de la visita
>>>>>>> 08d4efcf2c8dc300c901e7bb8711d62a69ba35ee
}
