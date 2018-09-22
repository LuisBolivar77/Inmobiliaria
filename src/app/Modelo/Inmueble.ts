import { Ciudad } from './Ciudad';
import { TipoInmueble } from './TipoInmueble';
import { Usuario } from './Usuario';
import { Promocion } from './Promocion';
export class Inmueble {

    direccion: string;
    area: number;
    valor: number;
    banios: number;
    estado: boolean;
    tipoAV: number;
    garajes: number;
    antiguedad: number;
    detalles: string;
    anioContruccion: string;
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
