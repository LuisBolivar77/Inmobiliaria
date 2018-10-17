import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../../Modelo/Contrato';
import { Venta } from '../../../Modelo/Venta';
import { Usuario } from '../../../Modelo/Usuario';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';

@Component({
  selector: 'app-asignar-arriendo-contrato',
  templateUrl: './asignar-arriendo-contrato.component.html',
  styleUrls: ['./asignar-arriendo-contrato.component.css']
})
export class AsignarArriendoContratoComponent implements OnInit {

  contratos: Array<Contrato> = [];
  constratosFinales: Array<Contrato> = [];
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
    this.usuarioServicio.esAccesible('administracion/asignar-arriendo-contrato');
    this.usuarioSesion = this.usuarioServicio.getUsuario();
    this.listar();
  }

    /**
   * lista los contratos de estado "1" para llegar a su finalizacion
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
                this.generico.buscar('reservar_visita', {'id': c.visita}).subscribe(res6 => {
                  c.visita = res6.data;
                  this.generico.buscar('inmueble', {'id': c.visita.inmueble}).subscribe(res7 => {
                    c.visita.inmueble = res7.data;
                    this.listadoFinal();
                  });
                });
              });
            });
          });
        });
      });
    }
  }

   /**
   * lista los contratos finalizados de tipo arriendo
   */
  listadoFinal() {
    for (const c of this.contratos) {
      console.log(c.descripcion);
      if (c.visita.inmueble.tipoAV === 0) {
        this.constratosFinales.push(c);
      }
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
