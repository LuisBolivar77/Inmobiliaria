import { Component, OnInit } from '@angular/core';
import { Inmueble } from 'src/app/Modelo/Inmueble';
import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { Promocion } from 'src/app/Modelo/Promocion';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  agregoObjeto = false;
  /**
  * Listado de inmuebles
  */
  inmuebles: Array<Inmueble> = [];

  /**
     * Listado de inmuebles
     */
  inmuebleFiltro: Array<Inmueble> = [];

  /**
   * Listado de inmuebles
   */
  promociones: Array<Promocion> = [];
  /**
   * imagenes de los inmuebles
   */
  fotos: Array<{}> = [];
  // Inmueble
  inmueble: Inmueble = new Inmueble();
  // parametros de busqueda

  // Listado de promociones
  promocion: Array<Promocion>;

  constructor(private genericoServicio: GenericoService) { }

  ngOnInit() {

    // this.listarInmuebles();

  }

  /**
   * Carga la lista de inmuebles disponibles (estado 1 = publicado)
   */
  listarInmuebles() {
    // Obtenemos la lista de inmuebles
    this.genericoServicio.listar('inmueble', { 'estado': 1 }).subscribe(r => {
      if (r.data != null) {
        // inmuebles
        this.inmuebleFiltro = r.data;

        this.genericoServicio.listar('promocion', null).subscribe(r => {
          if (r.data != null) {
            this.promociones = r.data;
            for (const i of this.inmuebleFiltro) {
              for (const j of this.promociones) {
                const inmu = i.promocion.id;
                const promo = j.id;
                const fechaIni = new Date(j.fecha_inicio);
                const fechaFin = new Date(j.fecha_fin);
                const fechaActual = new Date;
               // alert(inmu +" = " +promo);
               if ((inmu === promo) && // Sale error por el objeto que compara con el number (FUNCIONA)
               (fechaIni <= fechaActual) &&  (fechaFin >= fechaActual)) {
                // alert('Entro al final del for');
                 this.inmuebles.push(i);
                 return true;
               }
              }
            }

            this.agregarObjetos(this.inmuebles);

          }
        });



        // Agregamos los datos (objetos) adicionales a cada inmueble
      }
    });
  }

  /**
   * Agrega objetos a los inmuebles
   * @param lista
   */
  agregarObjetos(lista) {

    this.agregoObjeto = true;
    for (const i of lista) {
      // Obtenemos el tipo de inmueble
      this.genericoServicio.buscar('tipo_inmueble', { 'id': i.tipo }).subscribe(r2 => {
        // Setteamos el tipo inmueble
        i.tipo = r2.data;
        // Obtenemos la ciudad
        this.genericoServicio.buscar('ciudades', { 'id': i.ciudad }).subscribe(r3 => {
          // Setteamos la ciudad
          i.ciudad = r3.data;
          // Obtenemos el departamento
          this.genericoServicio.buscar('departamentos', { 'id': i.ciudad.departamento }).subscribe(r4 => {
            // Setteamos el departamento
            i.ciudad.departamento = r4.data;
            // Obtenemos una sola foto del inmueble
            this.genericoServicio.buscar('archivo_inmueble', { 'inmueble': i.id }).subscribe(r5 => {
              // Guardamos el nombre de la foto en el array de fotos,
              // asignando como clave el id del inmueble
              this.fotos[i.id] = r5.data.nombre;
              // obtenemos las promosiones
              this.genericoServicio.buscar('promocion', { 'id': i.promocion }).subscribe(r6 => {
                i.promocion = r6.data;
                return true;
              });
            });
          });
        });
      });
    }
  }

  /**
   * Obtiene la zona apartir del numero de zona asignado en el inmueble
   */
  getZona(indice: number) {
    return this.inmueble.getZona(indice);
  }

  /**
   * Obtiene el tipo de inmueble (Arriendo o Venta)
   */
  getTipoAV(indice: number) {
    return this.inmueble.getTipoAV(indice);
  }

  /**
   * Agrega comas a un valor numerico
   * @param valor
   */
  addComa(valor: number) {
    return this.inmueble.addComa(valor);
  }



}
