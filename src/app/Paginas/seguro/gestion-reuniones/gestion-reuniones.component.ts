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

  empleadoSeleccionado: Empleado = new Empleado();
  clienteSeleccionado: Persona = new Persona();
  reunion: Reunion = new Reunion();

  editarSelected: boolean;

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

  registrar(form: NgForm) {

    const empleadoTemp = new Empleado();
    const personaTemp = new Usuario();

    this.reunion.estado = 0;
    this.reunion.empleado = empleadoTemp;
    this.reunion.cliente = personaTemp;

    const aux: AuxiliarObjeto = new AuxiliarObjeto();
    aux.objeto = this.reunion;
    aux.replaceValue('empleado', this.empleadoSeleccionado.usuario);
    aux.replaceValue('cliente', this.clienteSeleccionado.id);

    this.generico.registrar('reunion', aux.objeto).subscribe(res => {
      if (res.data === 'exito') {
        window.alert('la reunion fue registrada exitosamente');
        form.reset();
      } else {
        window.alert('ERROR, ' + res.data);
      }
    });
  }

  editar(form: NgForm) {

  }

  ver(r: Reunion) {
    this.reunion = r;
    this.editarSelected = true;
  }

  limpiarCampos(form: NgForm) {
    form.reset();
    this.editarSelected = false;
  }

  agregarObjetos() {
    for (const r of this.reuniones) {

      console.log(r);

      const data = r.fecha.split('T');
      const fecha = data[0];
      r.fecha = fecha;

      this.generico.buscar('usuarios', {'persona': r.cliente}).subscribe(res => {
        r.cliente = res.data;
        this.generico.buscar('persona', {'id': r.cliente.persona}).subscribe(res2 => {
          r.cliente.persona = res2.data;
          this.generico.buscar('empleados', {'usuario': r.empleado}).subscribe(res3 => {
            r.empleado = res3.data;
            this.generico.buscar('usuarios', {'persona': r.empleado.usuario}).subscribe(res4 => {
              r.empleado.usuario = res4.data;
              this.generico.buscar('persona', {'id': r.empleado.usuario.persona}).subscribe(res5 => {
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

}
