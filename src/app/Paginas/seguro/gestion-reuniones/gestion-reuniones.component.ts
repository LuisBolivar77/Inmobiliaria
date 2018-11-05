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

  empleadoSeleccionado: Persona = new Persona();
  clienteSeleccionado: Persona = new Persona();
  reunion: Reunion = new Reunion();

  editarSelected: boolean;
  registrado = false;
  editado = false;
  eliminado = false;

  step: number;

  constructor(private generico: GenericoService, private usuarioServicio: UsuarioService) { }

  ngOnInit() {
    // this.usuarioServicio.esAccesible('administrador/reuniones');
    this.listarReuniones();
    this.listarPersonas();
    this.step = 0;
    this.editarSelected = false;
  }

  listarReuniones() {
    this.generico.listar('reunion', null).subscribe(res => {
      this.reuniones = res.data;
      this.agregarObjetos();
    });
  }

  listarPersonas() {
    this.generico.listar('personas', null).subscribe(res => {
      this.personas = res.data;
      this.agregarObjetosPer();
    });
  }

  registrar() {

    const fechaReunion = new Date(this.reunion.fecha);
    const fechaActual = new Date;

    if (fechaActual < fechaReunion) {

      const empleadoTemp = new Empleado();
      const personaTemp = new Usuario();

      this.reunion.estado = 0;
      this.reunion.empleado = empleadoTemp;
      this.reunion.cliente = personaTemp;

      const aux: AuxiliarObjeto = new AuxiliarObjeto();
      aux.objeto = this.reunion;
      aux.replaceValue('empleado', this.empleadoSeleccionado.id);
      aux.replaceValue('cliente', this.clienteSeleccionado.id);

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
      window.alert('debe seleccionar una fecha posterio a ' + fechaActual);
    }
  }

  editar(form: NgForm) {

    const fechaReunion = new Date(this.reunion.fecha);
    const fechaActual = new Date;

    if (fechaActual < fechaReunion) {

      const aux: AuxiliarObjeto = new AuxiliarObjeto();
      aux.objeto = this.reunion;
      aux.replaceValue('empleado', this.empleadoSeleccionado.id);
      aux.replaceValue('cliente', this.clienteSeleccionado.id);

      this.generico.editar('reunion', aux.objeto, 'id').subscribe(res => {
        if (res.data === 'exito') {
          // form.reset();
          this.step = 0;
          this.listarReuniones();
          this.editado = true;
          window.alert('la reunion se edito exitosamente');
        } else {
          window.alert('ERROR, ' + res.data);
        }
      });
    } else {
      window.alert('debe seleccionar una fecha posterio a ' + fechaActual);
    }

  }

  eliminar(id: string) {
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

    this.editarSelected = true;
    this.step = 1;

  }

  limpiarCampos() {
    this.clienteSeleccionado.id = 0;
    this.empleadoSeleccionado.id = 0;
    this.reunion.descripcion = '';
    this.reunion.fecha = '';
    this.reunion.id = null;
    this.editarSelected = false;
    this.listarReuniones();
    this.step = 0;
  }

  agregarObjetos() {
    for (const r of this.reuniones) {

      console.log(r);

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

  validarRegistro(): boolean {
    return this.registrado;
  }

  validarEdicion(): boolean {
    return this.editado;
  }

  validarEliminacion(): boolean {
    return this.eliminado;
  }


}
