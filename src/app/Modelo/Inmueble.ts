import { Ciudad } from './Ciudad';
import { TipoInmueble } from './TipoInmueble';
import { Usuario } from './Usuario';
import { Promocion } from './Promocion';
export class Inmueble {

    direccion: string;
    numero_matricula: string;
    area: number;
    valor: number;
    banios: number;
    estado: number;
    tipoAV: number;
    garajes: number;
    habitaciones: number;
    detalles: string;
    anoconstruccion: string;
    ascensor: boolean;
    canchasDepor: boolean;
    zonasHumedas: boolean;
    zonaInfantil: boolean;
    jardines: boolean;
    transporteCercano: boolean;
    precioNegociable: boolean;
    zonasRopas: boolean;
    parqueadero: boolean;
    deposito: boolean;
    estudio: boolean;
    tipoCortinas: string;
    cuartoServicio: boolean;
    chimenea: boolean;
    cocinaAC: boolean;
    comedorIndependiente: boolean;
    vistaExterios: boolean;
    zona: number;
    fechaAprobacion: string;
    tipoInmueble: TipoInmueble;
    ciudad: Ciudad;
    usuario: Usuario;
    admin: Usuario;
    promo: Promocion;

}
