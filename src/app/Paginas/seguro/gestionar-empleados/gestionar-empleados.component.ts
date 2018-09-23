import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../Modelo/Usuario';
import { Persona } from '../../../Modelo/Persona';
import { Rol } from '../../../Modelo/Rol';
import { RolService } from '../../../Servicios/rolServ.service';
import { PersonaService } from '../../../Servicios/personaServ.servide';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';
import { NgForm } from '@angular/forms';
import { Cargo } from '../../../Modelo/Cargo';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { Formacion } from '../../../Modelo/formacion';
import { Experiencia } from '../../../Modelo/Experiencia';
import { Empleado } from '../../../Modelo/Empleado';

@Component({
  selector: 'app-gestionar-empleados',
  templateUrl: './gestionar-empleados.component.html',
  styleUrls: ['./gestionar-empleados.component.css']
})
export class GestionarEmpleadosComponent implements OnInit {

  // Listado de Empleados
  empleados: Array<Empleado> = [];
  // Listado de Cargos
  cargos: Array<Cargo> = [];
  // Listado de Formaciones de un empleado
  formaciones: Array<Formacion> = [];
  // Listado de Experiencias de un empleado
  experiencias: Array<Experiencia> = [];
  // El Empleado
  empleado: Empleado = new Empleado();
  // El usuario del empleado
  usuario: Usuario = new Usuario();
  // La persona asociada con el empleado
  persona: Persona = new Persona();
  // Rol: Empleado (3)
  rol: Rol = new Rol();
  cargo: Cargo = new Cargo();
  // formacion del empleado
  formacion: Formacion =  new Formacion();
  // experiencia del empleado
  experiencia: Experiencia = new Experiencia();
  // Variables para los mensajes en la pagina
  show: number;
  msj: string;

  constructor(private genericoServicio: GenericoService, private rolServicio: RolService, private personaServicio: PersonaService, private usuarioServicio: UsuarioService) { }

  ngOnInit() {
    // Construimos el objeto Empleado, inicialmente vacio
    this.empleado.cargo = this.cargo;
    this.empleado.usuario = this.usuario;
    this.empleado.usuario.persona = this.persona;
    this.rol.id = 3;
    this.empleado.usuario.persona.rol = this.rol;
    // Validamos si el usuario tiene acceso a la pagina
    this.usuarioServicio.esAccesible('administracion/gestionar-empleados');
    // Actualizamos la tabla de empleados
    this.listar();
    // Cargamos los cargos
    this.listarCargos();
  }

 /**
   * Registra un empleado con su usuario
   */
  registrar(form: NgForm) {
    if(this.empleado.usuario.username != null && this.empleado.usuario.persona.apellido != null){
      // Validamos si ya hay una persona con esta cedula
      this.genericoServicio.buscar("personas", {"cedula":this.empleado.usuario.persona.cedula}).subscribe(valida => {
        if(valida.data == null){
          // Validamos si ya hay un usuario con el username
          this.genericoServicio.buscar("usuarios", {"username": "'"+this.empleado.usuario.username+"'"}).subscribe(valida2 => {
            if(valida2.data == null){
              // Guardamos la persona asociada al empleado
              this.genericoServicio.registrar("personas", this.empleado.usuario.persona).subscribe(rta => {
                if(rta.data == 'exito'){
                  // Agregamos el id de la persona empleado que se acabo de registrar
                  this.empleado.usuario.persona.id = rta.id;
                  // registramos el usuario del empleado
                  this.genericoServicio.registrar("usuarios", this.empleado.usuario).subscribe(rta2 => {
                    if(rta2.data == 'exito'){
                      // por ultimo registramos el empleado
                      this.genericoServicio.registrar("empleados", this.empleado).subscribe(rta3 =>{
                        if(rta3.data == 'exito'){
                          this.msj = "Se ha registrado correctamente";
                          this.show = 2;
                          // limpiamos los campos
                          form.reset();
                          // Actualizamos la lista de empleados
                          this.listar();
                          window.alert(this.msj);
                        }else{
                          this.msj = rta3.data;
                          this.show = 1;
                          window.alert(this.msj);
                        }
                      });
                    }else{
                      this.msj = rta2.data;
                      this.show = 1;
                      window.alert(this.msj);
                    }
                  });
                }else{
                  this.msj = rta.data;
                  this.show = 1;
                  window.alert(this.msj);
                }
              });
            }else{
              this.msj = "Ya hay un usuario con el username: "+this.empleado.usuario.username;
              this.show = 1;
              window.alert(this.msj);
            }
          });
        }else{
          this.msj = "Ya hay una persona registrada con la cedula: "+this.empleado.usuario.persona.cedula;
          this.show = 1;
          window.alert(this.msj);
        }
      });
    }else{
      this.msj = "Ingrese toda los datos";
      this.show = 1;
      window.alert(this.msj);
    }
  }

  /**
   * Edita una empleado con su usuario
   */
  editar(form: NgForm) {
    if(this.empleado.usuario.persona != null && this.empleado.usuario.username != null){
    this.personaServicio.editar(this.usuario).subscribe(rta => {
      if(rta.data == 'exito'){
        this.msj = "Se ha editado correctamente";
        this.show = 2;
        window.alert(this.msj);
        // limpiamos los campos
        form.reset();
        // Actualizamos la lista de empleados
        this.listar();
      }else{
        this.msj = rta.data;
        this.show = 1;
        window.alert(rta.data);
      }
    });
    }else{
      this.msj = "Primero busque el empleado que va a editar";
      this.show = 1
      window.alert(this.msj);
    }
  }

  /**
   * Buscar empleado
   */
  buscar() {
    // Buscamos la persona por cedula y rol 3 (empleado)
    this.genericoServicio.buscar("personas", {"cedula": this.empleado.usuario.persona.cedula, "rol": 3}).subscribe(rta => {
      if (rta.data == null) {
        this.show = 1;
        this.msj = 'No existe un empleado con cedula ' + this.empleado.usuario.persona.cedula;
      } else {
        this.show = 3;
        // Guardamos el resultado en persona
        this.persona = rta.data;
        // Buscamos el empleado
        this.genericoServicio.buscar("empleados", {"usuario":this.persona.id}).subscribe(rta2 => {
          this.empleado = rta2.data;
          // Obtenemos el cargo
          this.genericoServicio.buscar("cargos", {"id":this.empleado.cargo}).subscribe(rta3 => {
            // Asignamos el cargo al empleado
            this.empleado.cargo = rta3.data;
            // Obtenemos el usuario
            this.genericoServicio.buscar("usuarios", {"persona":this.persona.id}).subscribe(rta4 => {
              this.usuario = rta4.data;
              // Obtenemos las ormaciones del empleado
              this.genericoServicio.buscar("formaciones", {"empleado":this.empleado.usuario}).subscribe(rta5 => {
                this.formaciones = rta5.data;
                // Obtenemos las experiencias del empleado
                this.genericoServicio.buscar("experiencias", {"empleado":this.empleado.usuario}).subscribe(rta6 =>{
                  this.experiencias = rta6.data;
                  // Setteamos los datos al empleado
                  this.empleado.usuario = this.usuario;
                  this.empleado.usuario.persona = this.persona;
                  this.show = 2;
                  this.msj = "Despliegue para ver la informacion del empleado "+this.persona.nombre+" "+this.persona.apellido+".";
                });
              });
            });
          });
        });

      }
    });
  }

  /**
   * Ver la inormacion de un empleado de la tabla
   */
  ver(e: Empleado) {
    this.empleado = e;
    this.buscar();
  }

  /**
   * Buscar desde el formulario html
   */
  fbuscar(event) {
    event.preventDefault();
    if (this.empleado.usuario.persona.cedula != null) {
      this.buscar();
    }
  }
  
  /**
   * Lista todas los empleados registradas
   */
  listar() {
    // Obtenemos la lista de empleado
    this.genericoServicio.listar("empleados", null).subscribe(rta => {
      this.empleados = rta.data;
      // obtenemos el resto de informacion del empleado
      for (let e of this.empleados) {
        // obtenemos el cargo del empleado
        this.genericoServicio.buscar("cargos", {"id":e.cargo}).subscribe(rta2 => {
          e.cargo = rta2.data;
          // Obtenemos el usuario
          this.genericoServicio.buscar("usuarios", {"persona":e.usuario}).subscribe(rta3 => {
            e.usuario = rta3.data;
            // Obtenemos la persona
            this.genericoServicio.buscar("personas", {"id":e.usuario.persona}).subscribe(rta4 => {
              e.usuario.persona = rta4.data;
            });
          });
        });
      }
    });
  }

  /**
   * Cargos
   */
  listarCargos(){
    // Obtenemos la lista de cargos
    this.genericoServicio.listar("cargos", null).subscribe(rta => {
      this.cargos = rta.data;
    });
  }

  /**
   * Eliminar empleado con su usuario de la base de datos
   */
  eliminar(persona: Persona) {
    window.alert(persona.nombre);
  }

  /**
   * Registra la formacion del empleado
   */
  registrarFormacion(form: NgForm) {
    window.alert("Formacion registrar");
  }

  /**
   * Editar la formacion del empleado
   */
  editarFormacion(form: NgForm) {
    window.alert("Formacion editar");
  }

  /**
   * Muestra los datos de la certificacion en el formulario y abre el pdf
   */
  verFormacion(f:Formacion){
    window.alert(f);
  }

  /**
   * Registra la experiencia del empleado
   */
  registrarExperiencia(form: NgForm) {
    window.alert("Experiencia registrar");
  }

  /**
   * Registra la experiencia del empleado
   */
  editarExperiencia(form: NgForm) {
    window.alert("Experiencia editar");
  }

  /**
   * Muestra los datos de la certificacion en el formulario y abre el pdf
   */
  verExperiencia(e:Experiencia){
    window.alert(e);
  }

}
