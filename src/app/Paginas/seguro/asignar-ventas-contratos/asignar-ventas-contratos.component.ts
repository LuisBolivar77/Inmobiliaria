import { Component, OnInit } from '@angular/core';
import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { UsuarioService } from 'src/app/Servicios/usuarioServ.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Venta } from 'src/app/Modelo/Venta';
import { Contrato } from 'src/app/Modelo/Contrato';

@Component({
  selector: 'app-asignar-ventas-contratos',
  templateUrl: './asignar-ventas-contratos.component.html',
  styleUrls: ['./asignar-ventas-contratos.component.css']
})
export class AsignarVentasContratosComponent implements OnInit {

  contratos: Array<Contrato> = [];
  venta: Array<Venta> = [];

  // usuario en sesion
  usuarioSesion: Usuario = new Usuario();

  constructor(private generico: GenericoService, private usuarioServicio: UsuarioService) { }

  ngOnInit() {
    // Validamos si el usuario tiene acceso a la pagina
    this.usuarioServicio.esAccesible('administracion/asignar-ventas-contratos');
    this.usuarioSesion = this.usuarioServicio.getUsuario();
    this.listar();
  }

  /**
   * lista los contratos de estado "0" para llegar a su finalizacion
   */
  listar() {
    this.generico.listar('contrato', {'estado': 1}).subscribe(res => {
      this.contratos = res.data;
      // this.agregarObjetos(this.contratos);
    });
  }

}
