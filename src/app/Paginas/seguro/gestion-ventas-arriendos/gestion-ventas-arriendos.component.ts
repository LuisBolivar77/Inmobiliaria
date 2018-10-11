import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { UsuarioService } from 'src/app/Servicios/usuarioServ.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-gestion-ventas-arriendos',
  templateUrl: './gestion-ventas-arriendos.component.html',
  styleUrls: ['./gestion-ventas-arriendos.component.css']
})
export class GestionVentasArriendosComponent implements OnInit {

  constructor(private generico: GenericoService, private usuarioServicio: UsuarioService) { }

  ngOnInit() {
    // Validamos si el usuario tiene acceso a la pagina
    this.usuarioServicio.esAccesible('administracion/gestion-ventas-arriendos');

  }

}
