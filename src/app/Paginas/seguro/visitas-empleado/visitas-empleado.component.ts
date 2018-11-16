import { Component, OnInit } from '@angular/core';
import { ReservarVisita } from 'src/app/Modelo/ReservarVisita';
import { Usuario } from 'src/app/Modelo/Usuario';
import { AuxiliarObjeto } from 'src/app/Modelo/AuxiliarObjeto';
import { NgForm } from '@angular/forms';
import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { UsuarioService } from 'src/app/Servicios/usuarioServ.service';

@Component({
  selector: 'app-visitas-empleado',
  templateUrl: './visitas-empleado.component.html',
  styleUrls: ['./visitas-empleado.component.css']
})
export class VisitasEmpleadoComponent implements OnInit {

 // Listado de visitas para comentar / editar
 visitas: Array<ReservarVisita> = [];

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

// variables de pruebas
agregoObjetos = false;
verInmueble = false;
visitaComentada = false;

  constructor(private servicioGenerico: GenericoService, private usuarioServicio: UsuarioService) { }

  ngOnInit() {
    this.usuarioServicio.esAccesible('empleado/visitas-empleado');
    this.usuarioSesion = this.usuarioServicio.getUsuario();
    this.listar();
  }

  /**
   * Lista las viitas del empleado que inicio sesion
   */
  listar() {
    this.servicioGenerico.listar('reservar_visita', {'empleado': this.usuarioSesion.persona.id, 'estado': "'PENDIENTE'"}).subscribe(rta=>{
      if (rta.data != null) {
        this.visitas = rta.data;
       this.agregarObjetos(this.visitas);
      }
    });
  }

  agregarObjetos(lista: Array<ReservarVisita>) {
    this.agregoObjetos = true;
    for (const i of lista) {
      const data = i.fecha.split('T');
      const fecha = data[0];
      i.fecha = fecha;
      this.servicioGenerico.buscar('inmueble', {'id': i.inmueble}).subscribe(r2 => {
        i.inmueble = r2.data;
        this.servicioGenerico.buscar('persona', {'id': i.cliente}).subscribe(r3 => {
        if (r3.data != null) {
          i.cliente = r3.data;
        }

        });
      });
    }
  }

  verVisita(visita: ReservarVisita) {
    this.visitaSeleccionada = visita;
    this.verInmueble = true;
    this.matriculaInmueble = this.visitaSeleccionada.inmueble.numero_matricula;
    this.detalleInmueble = this.visitaSeleccionada.inmueble.detalles;

  }

  comentarVisita(form: NgForm): void {
    if (this.visitaSeleccionada.id == null) {
      this.msj = 'Por favor seleccione una visita';
      this.show = 1;
      window.alert(this.msj);
      return;
    }
    if (this.visitaSeleccionada.comentario == null) {
      this.msj = 'Ingrese los comentarios de la visita por favor';
      this.show = 1;
      return;
    }
    this.visitaComentada = true;
    this.visitaSeleccionada.estado = 'ATENDIDA';
    const aux: AuxiliarObjeto = new AuxiliarObjeto();
       aux.objeto = this.visitaSeleccionada;
       aux.replaceValue('inmueble', this.visitaSeleccionada.inmueble.id);
       aux.replaceValue('cliente', this.visitaSeleccionada.cliente.id);
       aux.replaceValue('empleado', this.visitaSeleccionada.empleado.id);

    this.servicioGenerico.editar('reservar_visita', aux.objeto, 'id').subscribe(rta => {
      if (rta.data === 'exito') {
        this.msj = 'Se ha Registrado el comentario exitosamente !';
        this.show = 2;
        this.limpiarCampos();
        this.listar();
      } else {
        this.msj = 'No se ha podido registrar el comentario: ' + rta.data;
        this.show = 1;
      }
      window.alert(this.msj);
    });


  }

  limpiarCampos() {
    this.visitaSeleccionada.comentario = '';
    this.visitaSeleccionada.mensaje = '';
    this.visitaSeleccionada.fecha = '';
    this.matriculaInmueble = '';
    this.detalleInmueble = '';
  }

}
