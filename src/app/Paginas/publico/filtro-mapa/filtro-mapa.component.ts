import { Component, OnInit } from '@angular/core';
import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { Inmueble } from 'src/app/Modelo/Inmueble';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtro-mapa',
  templateUrl: './filtro-mapa.component.html',
  styleUrls: ['./filtro-mapa.component.css']
})
export class FiltroMapaComponent implements OnInit {

  inmuebles: Array<Inmueble> = [];
  listaFinal: Array<Inmueble> = [];

  latSelected = 4.540130;
  longSelected = -75.665193;
  locationSelec = false;
  zoom = 6;
  latitudSuperior = 0;
  latitudInferior = 0;
  longitudSuperior = 0;
  longitudInferior = 0;

  constructor( private generico: GenericoService, private router: Router) { }

  ngOnInit() {
    this.listar();
  }

  /**
   * Lista todos los inmuebles
   */
  listar() {
    // Obtenemos la lista de inmuebles
    this.generico.listar('inmueble', {'estado': 1}).subscribe(rta => {
      this.inmuebles = rta.data;
    });
  }

  onChoseLocation(lat, lng) {

    this.latSelected = lat;
    this.longSelected = lng;
    this.locationSelec = true;
    this.obtenerRango(lat, lng);

  }

  obtenerRango(lat, lng) {

    this.listaFinal = [];
    this.latitudSuperior = lat + 0.006176;
    this.latitudInferior = lat - 0.006176;
    this.longitudSuperior = lng + 0.006176;
    this.longitudInferior = lng - 0.006176;

    for (const i of this.inmuebles) {
      if (i.latitud >= this.latitudInferior && i.latitud <= this.latitudSuperior
        && i.longitud >= this.longitudInferior && i.longitud <= this.longitudSuperior) {
          this.listaFinal.push(i);
      }
    }
  }

  quietarFiltro () {
    this.locationSelec = false;
  }

  navigate(i: Inmueble) {
    console.log(i.id);
    window.location.replace('http://localhost:4200/ver-inmueble?id=' + i.id);

  }

}
