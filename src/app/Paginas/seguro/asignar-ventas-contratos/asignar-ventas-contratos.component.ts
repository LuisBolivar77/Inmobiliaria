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
  contrato: Contrato = new Contrato();

  // usuario en sesion
  usuarioSesion: Usuario = new Usuario();

   // Variables para los mensajes en la pagina
   show: number;
   msj: string;
   idContrato: number;
   busco: boolean;
   verSelec = false;

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
      this.agregarObjetos();
    });
  }

  agregarObjetos() {
    for (const c of this.contratos) {
      const fields = c.fecha_solicitud.split('T');
      const fechaSoli = fields[0];
      c.fecha_solicitud = fechaSoli;

      this.generico.buscar('usuarios', {'persona': c.cliente}).subscribe(res1 => {
        c.cliente = res1.data;
        this.generico.buscar('personas', {'id': c.cliente.persona}).subscribe(res5 => {
          c.cliente.persona = res5.data;
          this.generico.buscar('empleados', {'usuario': c.empleado}).subscribe(res3 => {
            c.empleado = res3.data;
            this.generico.buscar('usuarios', {'persona': c.empleado.usuario}).subscribe(res2 => {
              c.empleado.usuario = res2.data;
              this.generico.buscar('personas', {'id': c.empleado.usuario.persona}).subscribe(res4 => {
                c.empleado.usuario.persona = res4.data;
              });
            });
          });
        });
      });
    }
  }

  /*
  * Buscar contrato
  */
 buscarContrato() {
     this.generico.buscar('contrato', {'id': this.idContrato}).subscribe(rta => {
       if (rta.data == null) {
         this.show = 1;
         this.msj = 'No existe el contrato con ese numero de identificacion: ' + this.idContrato;
       } else {
         this.busco = true;
         this.contrato = rta.data;
       }
     });
 }

  /**
   * Ver la inormacion del contrato
   */
  ver(i: Contrato) {
    this.verSelec = true;
    this.contrato = i;
  }

}
