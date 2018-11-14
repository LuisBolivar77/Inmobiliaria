import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../Modelo/Usuario';
import { Persona } from '../../../Modelo/Persona';
import { Rol } from '../../../Modelo/Rol';
import { RolService } from '../../../Servicios/rolServ.service';
import { PersonaService } from '../../../Servicios/personaServ.service';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';
import { NgForm } from '@angular/forms';
import { GenericoService } from '../../../Servicios/genericoServ.service';

@Component({
  selector: 'app-gestionar-personas',
  templateUrl: './gestionar-personas.component.html',
  styleUrls: ['./gestionar-personas.component.css']
})
export class GestionarPersonasComponent implements OnInit {

  // Listado de roles
  roles: Array<Rol> = [];
  // Listado de personas
  personas: Array<Persona> = [];

  // Usuario que vamos a registrar
  usuario: Usuario = new Usuario;
  // La persona asignada al usuario que vamos a registrar
  persona: Persona = new Persona();
  // el rol de la persona
  rol: Rol = new Rol();

  // Variables para los mensajes en la pagina
  cedulaSelected: string;
  show: number;
  msj: string;

  verSelected = false;

  constructor(private rolServicio: RolService, private personaServicio: PersonaService,
    private usuarioServicio: UsuarioService, private genericoServicio: GenericoService) { }

  ngOnInit() {
    // Validamos si el usuario tiene acceso a la pagina
    this.usuarioServicio.esAccesible('administracion/gestionar-personas');
    this.persona.rol = this.rol;
    // Obtenemos la lista de roles
    this.rolServicio.listar().subscribe(rta => {
      this.roles = rta.data;
    });
    // Actualizamos la tabla de personas
    this.listar();
  }

  /**
   * Registra una persona con su usuario
   */
  registrar(form: NgForm) {
    this.rol.id = this.persona.rol.id;
    this.persona.rol = this.rol;
    this.usuario.persona = this.persona;
    this.personaServicio.registrar(this.usuario).subscribe(rta => {
      if (rta.data === 'exito') {
        this.msj = 'Se ha registrado correctamente';
        this.show = 2;
        window.alert(this.msj);
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
   * Registra una persona con su usuario
   */
  editar(form: NgForm) {
    if (this.verSelected) {
      this.rol.id = this.persona.rol.id;
      this.persona.rol = this.rol;
      this.usuario.persona = this.persona;
      this.personaServicio.editar(this.usuario).subscribe(rta => {
        if (rta.data === 'exito') {
          this.msj = 'Se ha editado correctamente';
          this.show = 2;
          this.verSelected = false;
          window.alert(this.msj);
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
   * Buscar persona
   */
  buscar() {
    this.personaServicio.usuarioByPersona(this.persona).subscribe(rta2 => {
      this.usuario = rta2.data;
    });
  }

  /**
   * Ver la informacion de una persona de la tabla
   */
  ver(p: Persona) {
    this.verSelected = true;
    this.persona = p;
    this.buscar();
  }
  /**
   * Buscar desde el formulario html
   */
  fbuscar(event) {
    this.verSelected = true;
    event.preventDefault();
    if (this.cedulaSelected != null) {
      for (const p of this.personas) {
        if (p.cedula === this.cedulaSelected) {
          this.persona = p;
          this.buscar();
          return;
        }
      }
    }
  }
  /**
   * Lista todas las personas registradas
   */
  listar() {
    // Obtenemos la lista de personas
    this.personaServicio.listar().subscribe(rta => {
      this.personas = rta.data;
      // obtenemos la informacion del rol de cada persona
      for (const p of this.personas) {
        const data = p.fecha_nacimiento.split('T');
        const fechaReturn = data[0];
        p.fecha_nacimiento = fechaReturn;
        this.rolServicio.buscarRolPersona(p).subscribe(rta2 => {
          p.rol = rta2.data;
        });
      }
    });
  }

  /**
   * Eliminar persona con su usuario de la base de datos
   */
  eliminar(p: Persona) {
    this.genericoServicio.eliminar('personas', { 'id': p.id }).subscribe(rta => {
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

  limpiarCampos (form: NgForm ) {
    this.cedulaSelected = '';
    this.verSelected = false;
    form.reset();
  }
}
