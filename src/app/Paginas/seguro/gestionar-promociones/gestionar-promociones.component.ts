import { Component, OnInit } from '@angular/core';
import { Promocion } from 'src/app/Modelo/Promocion';
import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/Servicios/usuarioServ.service';


@Component({
  selector: 'app-gestionar-promociones',
  templateUrl: './gestionar-promociones.component.html',
  styleUrls: ['./gestionar-promociones.component.css']
})
export class GestionarPromocionesComponent implements OnInit {

  // Listado de personas
  listPromociones: Array<Promocion> = [];
  listPromocionesFinal: Array<Promocion> = [];

  // Promociones
  promocion: Promocion = new Promocion();
  promocionTemp: Promocion = new Promocion();

  // Variables para los mensajes en la pagina
  show: number;
  msj: string;
  verSelected = false;
  idSelected: number;

  constructor(private genericoServicio: GenericoService, private usuarioServicio: UsuarioService) { }

  ngOnInit() {
    this.usuarioServicio.esAccesible('administrador/gestionar-promociones');
    this.listar();
  }

  registrar(form: NgForm) {
    // console.log()
    this.genericoServicio.registrar('promocion', this.promocion).subscribe(rta => {
      if (rta.data === 'exito') {

        this.msj = 'Se ha registrado correctamente';
        this.show = 2;
        this.listPromocionesFinal = new Array<Promocion>();
        // window.alert(this.msj);
        // limpiamos los campos
        form.reset();
        // Actualizamos la lista de personas
        this.listar();
        return true;
      } else {
        this.msj = rta.data;
        this.show = 1;
        window.alert(rta.data);
        return false;
      }
    });
  }

  /**
     * Buscar promocion
     */
  buscar() {
    this.genericoServicio.buscar('promocion', {'id': this.idSelected}).subscribe(rta => {
      if (rta.data == null) {
        this.show = 1;
        this.msj = 'No existe una promocion: ' + this.promocion.descripcion;
        return false;
      } else {
        this.show = 3;
        this.verSelected = true;
        this.promocionTemp = rta.data;

      //  this.promocionTemp.fecha_fin = this.cambiarFecha(this.promocionTemp.fecha_fin);
      //  this.promocionTemp.fecha_inicio = this.cambiarFecha(this.promocionTemp.fecha_inicio);

        this.promocion = this.promocionTemp;
        return true;
      }
    });
  }

  /**
     * Registra una persona con su usuario
     */
  editar(form: NgForm) {
    if (this.promocion != null) {
      // this.promocion = this.promocion;

      this.genericoServicio.editar('promocion', this.promocion, 'id').subscribe(rta => {
        if (rta.data === 'exito') {
          this.msj = 'Se ha editado correctamente';
          this.show = 2;
          this.verSelected = false;
          this.listPromocionesFinal = new Array<Promocion>();
          // window.alert(this.msj);
          // limpiamos los campos
          form.reset();
          //  Actualizamos la lista de personas
          this.listar();
          return true;
        } else {
          this.msj = rta.data;
          this.show = 1;
          window.alert(rta.data);
          return false;
        }
      });
    } else {
      this.msj = 'Primero busque la persona que va a editar';
      this.show = 1;
      window.alert(this.msj);
      return false;
    }
  }

  /**
   * Ver la informacion de una promocion de la tabla
   */
  ver(p: Promocion) {
    this.promocion = p;
    this.verSelected = true;
  }

  /**
     * Buscar desde el formulario html
     */
  fbuscar(event) {
    event.preventDefault();
    if (this.idSelected > 0) {
      this.buscar();
      return true;
    }
  }

  /**
   * Eliminar promocion con su usuario de la base de datos
   */
  eliminar(p: Promocion) {
    this.genericoServicio.eliminar('promocion', { 'id': p.id }).subscribe(rta => {
      if (rta.data === 'exito') {
        this.msj = 'Se ha eliminado la persona correctamente';
        this.show = 2;
        this.listPromocionesFinal = new Array<Promocion>();
        this.listar();
      } else {
        this.msj = 'No se ha podido eliminar la persona: ' + rta.data;
        this.show = 1;
      }
      window.alert(this.msj);
    });
  }



  /**
   * Lista todas las personas registradas
   */
  listar() {

    this.genericoServicio.listarDirect().subscribe(rta => {
      this.listPromociones = rta.data;
      this.agregarObjetos();
    });

  }

  agregarObjetos() {
    for (const p of this.listPromociones) {

      p.fecha_fin = this.cambiarFecha(p.fecha_fin);
      p.fecha_inicio = this.cambiarFecha(p.fecha_inicio);

      this.listPromocionesFinal.push(p);
    }
  }

  cambiarFecha(fecha: string): string {
    const data = fecha.split('T');
    const fechaReturn = data[0];

    return fechaReturn;
  }

  limpiarCampos(form: NgForm) {
    form.reset();
    this.idSelected = null;
    this.verSelected = false;
    this.listPromocionesFinal = new Array<Promocion>();
    this.listar();
  }


}
