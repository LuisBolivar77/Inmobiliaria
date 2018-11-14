import { AuxiliarObjeto } from 'src/app/Modelo/AuxiliarObjeto';
import { Usuario } from './../../../Modelo/Usuario';
import { NgForm } from '@angular/forms';
import { Empleado } from 'src/app/Modelo/Empleado';
import { Persona } from './../../../Modelo/Persona';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { UsuarioService } from 'src/app/Servicios/usuarioServ.service';
import { Reunion } from 'src/app/Modelo/Reunion';

@Component({
  selector: 'app-gestion-reuniones',
  templateUrl: './gestion-reuniones.component.html',
  styleUrls: ['./gestion-reuniones.component.css']
})
export class GestionReunionesComponent implements OnInit {

  reuniones: Array<Reunion> = [];
  personas: Array<Persona> = [];
  clientes: Array<Persona> = [];
  empleados: Array<Persona> = [];
  horas: Array<any> = [ {valor: '7 AM'}, {valor: '10 AM'}, {valor: '2 PM'}, {valor: '5 PM'} ];

  empleadoSeleccionado: Persona = new Persona();
  clienteSeleccionado: Persona = new Persona();
  reunion: Reunion = new Reunion();
  horaSeleccionada: string;
  fechaSeleccionada: string;
  fechaAEditar: string;

  editarSelected: boolean;

  // variables para pruebas
  registrado = false;
  editado = false;
  eliminado = false;
  listarPer = false;
  listarReu = false;
  banderaElseFechaRegistro = false;
  banderaElseNumMaximoReu = false;
  resNumHoraP: string;
  banderaElseHoraOcupada = false;
  banderaElseFechaRegistroEditar = false;
  banderaElseNumMaximoReuEditar = false;
  banderaElseHoraOcupadaEditar = false;
  banderaElseHoraOcupadaEditar1 = false;

  step: number;

  constructor(private generico: GenericoService, private usuarioServicio: UsuarioService) { }

  ngOnInit() {
    this.usuarioServicio.esAccesible('administrador/reuniones');
    this.listarReuniones();
    this.listarPersonas();
    this.step = 0;
    this.editarSelected = false;
  }

  listarReuniones() {
    this.listarReu = true;
    this.generico.listar('reunion', null).subscribe(res => {
      this.reuniones = res.data;
      this.agregarObjetos();
    });
  }

  listarPersonas() {
    this.listarPer = true;
    this.generico.listar('personas', null).subscribe(res => {
      this.personas = res.data;
      this.agregarObjetosPer();
    });
  }

  registrar() {

    const fechaReunion = new Date(this.reunion.fecha);
    const fechaActual = new Date;

    if (fechaActual < fechaReunion) {

      const resNumHora = this.numeroReunionesEmpleado(this.empleadoSeleccionado.id + '', this.reunion.fecha,
      this.reunion.hora);
      const data = resNumHora.split(',');
      const numeroCitas = Number(data[0]);
      const resHora = data[1];
      console.log(numeroCitas);
      console.log(resHora);
      if (numeroCitas < 3) {
        if (resHora !== 'horaOcupada') {

          const empleadoTemp = new Empleado();
          const personaTemp = new Usuario();

          this.reunion.estado = 0;
          this.reunion.empleado = empleadoTemp;
          this.reunion.cliente = personaTemp;

          const aux: AuxiliarObjeto = new AuxiliarObjeto();
          aux.objeto = this.reunion;
          this.registrado = true;
          aux.replaceValue('empleado', this.empleadoSeleccionado.id);
          aux.replaceValue('cliente', this.clienteSeleccionado.id);

          console.log(aux.objeto);
          this.generico.registrar('reunion', aux.objeto).subscribe(res => {
            if (res.data === 'exito') {
              this.limpiarCampos();
              this.listarReuniones();
              this.registrado = true;
              window.alert('la reunion fue registrada exitosamente');
            } else {
              window.alert('ERROR, ' + res.data);
            }
          });

        } else {
          this.banderaElseHoraOcupada = true;
          window.alert('la hora seleccionada ya esta ocupada para el ' + this.reunion.fecha);
        }
      } else {
        this.banderaElseNumMaximoReu = true;
        window.alert('el empleado ya tiene el numero maximo de reuniones en la fecha seleccionada');
      }
    } else {
      this.banderaElseFechaRegistro = true;
      window.alert('debe seleccionar una fecha posterio a ' + this.reunion.fecha);
    }
  }

  editar(form: NgForm) {

    const fechaReunion = new Date(this.fechaSeleccionada);
    const fechaActual = new Date;

    if (fechaActual < fechaReunion) {

      const resNumHora = this.numeroReunionesEmpleado(this.empleadoSeleccionado.id + '', this.fechaSeleccionada,
      this.horaSeleccionada);
      const data = resNumHora.split(',');
      const numeroCitas = Number(data[0]);
      const resHora = data[1];
      console.log(this.fechaAEditar + '' + this.fechaSeleccionada);
      if (this.fechaAEditar === this.fechaSeleccionada) {
        console.log(resHora);
          if (resHora !== 'horaOcupada') {
            console.log('entro if indevido');
            this.reunion.hora = this.horaSeleccionada;

            const aux: AuxiliarObjeto = new AuxiliarObjeto();
            aux.objeto = this.reunion;
            this.editado = true;
            aux.replaceValue('empleado', this.empleadoSeleccionado.id);
            aux.replaceValue('cliente', this.clienteSeleccionado.id);

            this.generico.editar('reunion', aux.objeto, 'id').subscribe(res => {
              if (res.data === 'exito') {
                form.reset();
                this.step = 0;
                this.listarReuniones();
                this.editado = true;
                window.alert('la reunion se edito exitosamente');
              } else {
                window.alert('ERROR, ' + res.data);
              }
            });
          } else {
            this.banderaElseHoraOcupadaEditar1 = true;
            window.alert('la hora seleccionada ya esta ocupada para el ' + this.fechaSeleccionada);
          }
      } else {
        if (numeroCitas < 3) {
          if (resHora !== 'horaOcupada') {

            this.reunion.hora = this.horaSeleccionada;
            this.reunion.fecha = this.fechaSeleccionada;

            const aux: AuxiliarObjeto = new AuxiliarObjeto();
            aux.objeto = this.reunion;
            this.registrado = true;
            this.editado = true;
            aux.replaceValue('empleado', this.empleadoSeleccionado.id);
            aux.replaceValue('cliente', this.clienteSeleccionado.id);

            this.generico.editar('reunion', aux.objeto, 'id').subscribe(res => {
              if (res.data === 'exito') {
                form.reset();
                this.step = 0;
                this.listarReuniones();
                this.editado = true;
                window.alert('la reunion se edito exitosamente');
              } else {
                window.alert('ERROR, ' + res.data);
              }
            });

          } else {
            this.banderaElseHoraOcupadaEditar = true;
            window.alert('la hora seleccionada ya esta ocupada para el ' + this.fechaSeleccionada);
          }
        } else {
          this.banderaElseNumMaximoReuEditar = true;
          window.alert('el empleado ya tiene el numero maximo de reuniones en la fecha seleccionada');
        }
      }
    } else {
      this.banderaElseFechaRegistroEditar = true;
      window.alert('debe seleccionar una fecha posterio a ' + fechaActual);
    }

  }

  eliminar(id: number) {
    this.eliminado = true;
    this.generico.eliminar('reunion', {'id': id}).subscribe(res => {
      if (res.data === 'exito') {
        window.alert('La reunion fue eliminada');
        this.eliminado = true;
        this.listarReuniones();
      } else {
        window.alert('ERROR, ' + res.data);
      }
    });
  }

  ver(r: Reunion) {

    this.reunion = r;
    this.empleadoSeleccionado.id = r.empleado.usuario.persona.id;
    this.clienteSeleccionado.id = r.cliente.persona.id;
    this.fechaSeleccionada = r.fecha;
    this.horaSeleccionada = r.hora;
    this.fechaAEditar = r.fecha;

    this.editarSelected = true;
    this.step = 1;

  }

  limpiarCampos() {
    this.clienteSeleccionado.id = 0;
    this.empleadoSeleccionado.id = 0;
    this.reunion.descripcion = '';
    this.reunion.fecha = '';
    this.reunion.id = null;
    this.reunion.hora = '';
    this.editarSelected = false;
    this.listarReuniones();
    this.step = 0;
  }

  agregarObjetos() {
    for (const r of this.reuniones) {
      const data = r.fecha.split('T');
      const fecha = data[0];
      r.fecha = fecha;

      this.generico.buscar('usuarios', {'persona': r.cliente}).subscribe(res => {
        r.cliente = res.data;
        this.generico.buscar('personas', {'id': r.cliente.persona}).subscribe(res2 => {
          r.cliente.persona = res2.data;
          this.generico.buscar('empleados', {'usuario': r.empleado}).subscribe(res3 => {
            r.empleado = res3.data;
            this.generico.buscar('usuarios', {'persona': r.empleado.usuario}).subscribe(res4 => {
              r.empleado.usuario = res4.data;
              this.generico.buscar('personas', {'id': r.empleado.usuario.persona}).subscribe(res5 => {
                r.empleado.usuario.persona = res5.data;
              });
            });
          });
        });
      });
    }
  }

  agregarObjetosPer() {
    for (const p of this.personas) {
      this.generico.buscar('roles', {'id': p.rol}).subscribe(res => {
        p.rol = res.data;
        if (p.rol.id === 2) {
          this.clientes.push(p);
        }
        if (p.rol.id === 3) {
          this.empleados.push(p);
        }
      });
    }
  }

  estadoReunion(estado): string {
    if (estado === 0) {
      return 'PENDIENTE';
    }
    return 'ATENDIDA';
  }

  valEstadoReunion(estado): boolean {
    if (estado === 0) {
      return true;
    }
    return false;
  }

  numeroReunionesEmpleado(id: string, fecha: string, hora: string): string {

    let cont = 0;
    let resHora = '';
    const data = id.split('"');
    const idEmpleado = Number(data[0]);

    for (const r of this.reuniones) {

      if (r.empleado.usuario.persona.id === idEmpleado && fecha === r.fecha) {
        console.log('entro al if necesario para la prueba');
        cont = cont + 1;
      }
      if (r.empleado.usuario.persona.id === idEmpleado && r.hora === hora && fecha === r.fecha) {
        resHora = 'horaOcupada';
      }
    }
    return cont + ',' + resHora;
  }
}
