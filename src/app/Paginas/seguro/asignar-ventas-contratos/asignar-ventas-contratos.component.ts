import { Component, OnInit } from '@angular/core';
import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { UsuarioService } from 'src/app/Servicios/usuarioServ.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Venta } from 'src/app/Modelo/Venta';
import { Contrato } from 'src/app/Modelo/Contrato';
import { NgForm } from '@angular/forms';
import { AuxiliarObjeto } from 'src/app/Modelo/AuxiliarObjeto';


@Component({
  selector: 'app-asignar-ventas-contratos',
  templateUrl: './asignar-ventas-contratos.component.html',
  styleUrls: ['./asignar-ventas-contratos.component.css']
})
export class AsignarVentasContratosComponent implements OnInit {

  contratos: Array<Contrato> = [];
  constratosFinales: Array<Contrato> = [];
  ventas: Array<Venta> = [];
  venta: Venta= new Venta();
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

  listadoFinal() {
    for (const c of this.contratos) {
      if (c.visita.inmueble.tipoAV === 1) {
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
    console.log(this.contrato.id);
  }

  registrar(form: NgForm) {

    const fecha = this.fechaActual();
    this.venta.fecha = fecha;
    this.venta.empleado = this.usuarioServicio.getUsuario();
    this.venta.contrato = this.contrato;
    const aux: AuxiliarObjeto = new AuxiliarObjeto();
    aux.objeto = this.venta;
    aux.replaceValue('contrato', this.contrato.id);

    this.generico.registrar('venta', aux.objeto).subscribe(res => {
      if (res.data === 'exito') {
        this.msj = 'la venta se ha registrado correctamente';
        this.show = 2;
        form.reset();
      } else {
        this.msj = res.data;
        this.show = 1;
      }
    });
  }

  /**
   * edita el estado del contrato con valor '2' para saber que esta finalizado
   */
  editarEstado(form: NgForm){
    
    this.contrato.estado=2;

    this.generico.editar('contrato',this.contrato,'id').subscribe(res => {
      if (res.data === 'exito') {
        this.msj = 'el contrato se edito correctamente';
        this.show = 2;
        this.verSelec = false;
        form.reset();
        this.listar();
      } else {
        this.show = 1;
        this.msj = res.data;
      }
    });

  }

  fechaActual(): string {

    // tslint:disable-next-line:prefer-const
    let dateFormat = require('dateformat');
    // tslint:disable-next-line:prefer-const
    let now = new Date();
    return dateFormat(now, 'yyyy/mm/dd');

  }

}
