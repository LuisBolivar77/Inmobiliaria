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

  //Promociones
  promocion: Promocion = new Promocion();

  // Variables para los mensajes en la pagina
  show: number;
  msj: string;

  constructor(private genericoServicio: GenericoService, private usuarioServicio: UsuarioService) { }

  ngOnInit() {
    this.usuarioServicio.esAccesible('administracion/gestionar-personas');
    this.listar();
  }

  registrar(form: NgForm) {
    //console.log("----------------------------entra registrar")
    this.genericoServicio.registrar("promocion", this.promocion).subscribe(rta => {
      if (rta.data === 'exito') {

        this.msj = 'Se ha registrado correctamente';
        this.show = 2;
        // window.alert(this.msj);
        // limpiamos los campos
        form.reset();
        // Actualizamos la lista de personas
        this.listar();
      } else {
        this.msj = rta.data;
        this.show = 1;
        window.alert(rta.data);
      }
    });
  }

  /**
     * Buscar promocion
     */
  buscar() {
    this.genericoServicio.buscar("promocion", {'id':this.promocion.id}).subscribe(rta => {
      if (rta.data == null) {
        this.show = 1;
        this.msj = 'No existe una promocion: ' + this.promocion.descripcion;
      } else {
        this.show = 3;
        this.promocion = rta.data;
        this.genericoServicio.formatoFecha(rta.promocion.fecha_fin);

        this.genericoServicio.formatoFecha(rta.promocion.fecha_inicio);

      }
    });
  }

  /**
     * Registra una persona con su usuario
     */
  editar(form: NgForm) {
    if (this.promocion != null) {
      //this.promocion = this.promocion;

      this.genericoServicio.editar("promocion", this.promocion, 'id').subscribe(rta => {
        if (rta.data === 'exito') {
          this.msj = 'Se ha editado correctamente';
          this.show = 2;
          // window.alert(this.msj);
          // limpiamos los campos
          form.reset();
          // Actualizamos la lista de personas
          this.listar();
        } else {
          this.msj = rta.data;
          this.show = 1;
          window.alert(rta.data);
        }
      });
    } else {
      this.msj = 'Primero busque la persona que va a editar';
      this.show = 1;
      window.alert(this.msj);
    }
  }

  /**
   * Ver la informacion de una promocion de la tabla
   */
  ver(p: Promocion) {
    this.promocion = p;   
  }

  /**
     * Buscar desde el formulario html
     */
  fbuscar(event) {
    event.preventDefault();
    if (this.promocion.id > 0) {
      this.buscar();
    }
  }

  /**
   * Eliminar promocion con su usuario de la base de datos
   */
  eliminar(p: Promocion) {
    this.genericoServicio.eliminar("promocion", { "id": p.id }).subscribe(rta => {
      if (rta.data === 'exito') {
        this.msj = 'Se ha eliminado la persona correctamente';
        this.show = 2;
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
     // if (rta.data != null) {
        this.listPromociones = rta.data;
     // }
    });

  }


}
