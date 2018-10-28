import { Component, OnInit } from '@angular/core';
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
  // cliente: Array<>

  constructor(private generico: GenericoService, private usuarioServicio: UsuarioService) { }

  ngOnInit() {
    this.usuarioServicio.esAccesible('administrador/reuniones');
    this.listarReuniones();
  }

  listarReuniones() {
    this.generico.listar('reunion', null).subscribe(res => {
      this.reuniones = res.data;
      this.agregarObjetos();
    });
  }

  registrar() {

  }

  editar() {

  }

  ver() {

  }

  agregarObjetos() {
    for (const r of this.reuniones) {

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

  estadoReunion(estado): string {
    if (estado === '0') {
      return 'PENDIENTE';
    }
    return 'ATENDIDA';
  }

  valEstadoReunion(estado): boolean {
    if (estado === '0') {
      return true;
    }
    return false;
  }

}
