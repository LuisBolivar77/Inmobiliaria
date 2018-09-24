import { Cargo } from "./Cargo";
import { Usuario } from "./Usuario";
import { Experiencia } from "./Experiencia";
import { Formacion } from "./formacion";

/**
 * Empleado de la inmobiliaria
 */
export class Empleado{
    
    usuario: Usuario;
    salario: number;
    cargo: Cargo;
    
}