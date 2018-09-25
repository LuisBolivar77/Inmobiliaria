import { Component, OnInit } from '@angular/core';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { Inmueble } from '../../../Modelo/Inmueble';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  /**
   * Listado de inmuebles
   */
  inmuebles: Array<Inmueble> = [];
  // Inmueble
  inmueble: Inmueble = new Inmueble();

  constructor(private genericoServicio: GenericoService) {}

  ngOnInit() {
    // listamos los inmuebles
    this.listarInmuebles();
  }

  /**
   * Carga la lista de inmuebles disponibles (estado 1 = publicado)
   */
  listarInmuebles(){
    // Obtenemos la lista de inmuebles
    this.genericoServicio.listar("inmueble",{"estado":1}).subscribe(r => {
      if(r.data != null){
        this.inmuebles = r.data;
        for(let i of this.inmuebles){
          // Obtenemos el tipo de inmueble
          this.genericoServicio.buscar("tipo_inmueble",{"id":i.tipo}).subscribe(r2 => {
            // Setteamos el tipo inmueble
            i.tipo = r2.data;
            // Obtenemos la ciudad
            this.genericoServicio.buscar("ciudades",{"id":i.ciudad}).subscribe(r3 => {
              // Setteamos la ciudad
              i.ciudad = r3.data;
              // Obtenemos el departamento
              this.genericoServicio.buscar("departamentos",{"id":i.ciudad.departamento}).subscribe(r4 => {
                // Setteamos el departamento
                i.ciudad.departamento = r4.data;
              });
            });
          });
        }
      }
    });
  }

  /**
   * Obtiene la zona apartir del numero de zona asignado en el inmueble
   */
  getZona(indice:number){
    return this.inmueble.getZona(indice);
  }

  /**
   * Obtiene el tipo de inmueble (Arriendo o Venta)
   */
  getTipoAV(indice:number){
    return this.inmueble.getTipoAV(indice);
  }

  /**
   * Agrega comas a un valor numerico
   * @param valor 
   */
  addComa(valor:number){
    return this.inmueble.addComa(valor);
  }
}
