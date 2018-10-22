import { Contrato } from './../../../Modelo/Contrato';
import { Component, OnInit } from '@angular/core';
import { ReservarVisita } from 'src/app/Modelo/ReservarVisita';
import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { UsuarioService } from 'src/app/Servicios/usuarioServ.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { NgForm } from '@angular/forms';
import { AuxiliarObjeto } from 'src/app/Modelo/AuxiliarObjeto';

@Component({
  selector: 'app-visitas-cliente',
  templateUrl: './visitas-cliente.component.html',
  styleUrls: ['./visitas-cliente.component.css']
})
export class VisitasClienteComponent implements OnInit {

   // Listado de visitas para comentar / editar
   visitas: Array<ReservarVisita> = [];

   visitasFinal: Array<ReservarVisita> = [];

   // Visita seleccionada para comentar
   visitaSeleccionada: ReservarVisita = new ReservarVisita();

   // usuario de session
   usuarioSesion: Usuario = new Usuario();

   // Variables para los mensajes en la pagina
  show: number;
  msj: string;

  // Variables de inmueble
  matriculaInmueble: String;
  detalleInmueble: String;

  estadoVerificar = 'ATENDIDA';

  constructor(private servicioGenerico: GenericoService, private usuarioServicio: UsuarioService) { }

  ngOnInit() {
    this.usuarioServicio.esAccesible('cliente/visitas-cliente');
    this.usuarioSesion = this.usuarioServicio.getUsuario();
    this.listar();
  }

  validarEstado(estado: string): boolean {
    if (estado  === this.estadoVerificar) {
      return true;
    }
    return false;
  }

  listar() {
    this.servicioGenerico.listar('reservar_visita', {'cliente': this.usuarioSesion.persona.id})
    .subscribe(rta => {
      if (rta.data != null) {
        this.visitas = rta.data;
       this.agregarObjetos(this.visitas);
      }
    });
  }

  agregarObjetos(lista) {
    for (const i of lista) {
      if (i.estado === 'ATENDIDA' || i.estado === 'PENDIENTE') {
        const fields = i.fecha.split('T');
        const fechaVisi = fields[0];
        i.fecha = fechaVisi;
        this.servicioGenerico.buscar('inmueble', {'id': i.inmueble}).subscribe(r2 => {
          i.inmueble = r2.data;
          this.servicioGenerico.buscar('personas', {'id': i.empleado}).subscribe(r3 => {
            i.empleado = r3.data;
            this.visitasFinal.push(i);
          });
        });
      }
    }
  }

  verVisita(visita: ReservarVisita) {
    this.visitaSeleccionada = visita;
    this.matriculaInmueble = this.visitaSeleccionada.inmueble.numero_matricula;
    this.detalleInmueble = this.visitaSeleccionada.inmueble.detalles;

  }

  limpiarCampos() {
    this.visitaSeleccionada.comentario = '';
    this.visitaSeleccionada.fecha = '';
    this.matriculaInmueble = '';
    this.detalleInmueble = '';
  }

  editarVisita(form: NgForm) {

    if (this.visitaSeleccionada.id == null) {
      this.msj = 'Por favor seleccione una visita';
      this.show = 1;
      return;
    }
    if (this.visitaSeleccionada.fecha == null) {
      this.msj = 'Ingrese la fecha de la visita por favor';
      this.show = 1;
      return;
    }
    if (this.visitaSeleccionada.estado === 'ATENDIDA') {
      this.msj = 'Esta visita no se puede editar la fecha ya se encuentra ATENDIDA';
      this.show = 1;
      return;
    }
    const aux: AuxiliarObjeto = new AuxiliarObjeto();
       aux.objeto = this.visitaSeleccionada;
       aux.replaceValue('inmueble', this.visitaSeleccionada.inmueble.id);
       aux.replaceValue('cliente', this.visitaSeleccionada.cliente.id);
       aux.replaceValue('empleado', this.visitaSeleccionada.empleado.id);

    this.servicioGenerico.editar('reservar_visita', aux.objeto, 'id').subscribe(rta => {
      if (rta.data === 'exito') {
        this.msj = 'Se ha editado la fecha exitosamente !';
        this.show = 2;
        this.limpiarCampos();
        this.listar();
      } else {
        this.msj = 'No se ha podido editar la fecha ' + rta.data;
        this.show = 1;
      }
      window.alert(this.msj);
    });
  }

  quitarVisita(visita: ReservarVisita) {
    if (visita.estado === 'ATENDIDA') {
      this.msj = 'La visita en estado ATENDIDA no se puede cancelar';
      this.show = 1;
      window.alert(this.msj);
      return;
    }
    this.servicioGenerico.eliminar('reservar_visita', {'id': visita.id}).subscribe(rta => {
      if (rta.data === 'exito') {
        this.msj = 'Se ha eliminado la visita correctamente';
        this.show = 2;
        this.limpiarCampos();
        this.listar();
      } else {
        this.msj = 'No se ha podido eliminar la visita: ' + rta.data;
        this.show = 1;
      }
      window.alert(this.msj);
    });
  }

  fechaActual(): string {

    // tslint:disable-next-line:prefer-const
    let dateFormat = require('dateformat');
    // tslint:disable-next-line:prefer-const
    let now = new Date();
    return dateFormat(now, 'yyyy/mm/dd');

  }

  tipoAV(tipo: number): string {
    if (tipo === 0) {
      return 'arrendar';
    }
    return 'comprar';
  }


  crearContrato(v: ReservarVisita) {

    const tipoC = this.tipoAV(v.inmueble.tipoAV);
    const fecha = this.fechaActual();

    const contrato: Contrato = new Contrato();
    contrato.estado = 0;
    contrato.fecha_solicitud = fecha;
    contrato.cliente = this.usuarioSesion;
    contrato.visita = v;

    const aux: AuxiliarObjeto = new AuxiliarObjeto();
    aux.objeto = contrato;
    aux.replaceValue('cliente', this.usuarioSesion.persona.id);
    aux.replaceValue('visita', v.id);
    console.log(aux.objeto);

    this.servicioGenerico.registrar('contrato', aux.objeto).subscribe(res => {
      if (res.data === 'exito') {
        v.estado  = 'PROCESO-' + tipoC;
        this.servicioGenerico.editar('reservar_visita', v, 'id').subscribe(res2 => {
          this.visitasFinal = new Array<ReservarVisita>();
          this.listar();
          this.show = 2;
          this.msj = 'Su petecion de ' + tipoC + ' el inmueble esta siendo procesada';
        });
      } else {
        this.show = 1;
        this.msj = res.data;
      }
    });

  }

}
