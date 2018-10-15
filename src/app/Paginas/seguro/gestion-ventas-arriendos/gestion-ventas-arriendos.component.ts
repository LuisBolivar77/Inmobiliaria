import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { UsuarioService } from 'src/app/Servicios/usuarioServ.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Contrato } from 'src/app/Modelo/Contrato';
import { Empleado } from 'src/app/Modelo/Empleado';
import { Persona } from 'src/app/Modelo/Persona';
import { NgForm } from '@angular/forms';
import { AuxiliarObjeto } from 'src/app/Modelo/AuxiliarObjeto';

@Component ({
  selector: 'app-gestion-ventas-arriendos',
  templateUrl: './gestion-ventas-arriendos.component.html',
  styleUrls: ['./gestion-ventas-arriendos.component.css']
})
export class GestionVentasArriendosComponent implements OnInit {

  // listado de contratos para finalizar
  contratos: Array<Contrato> = [];
  usuario: Usuario = new Usuario();
  persona: Persona = new Persona();
  empleados: Empleado = new Empleado();
  contrato: Contrato = new Contrato();

  // usuario en sesion
  usuarioSesion: Usuario = new Usuario();

  // Variables para los mensajes en la pagina
  show: number;
  msj: string;
  idContrato: number;
  busco: boolean;
  verSelec = false;

  constructor(private generico: GenericoService, private usuarioServicio: UsuarioService) { }

  ngOnInit() {
    // Validamos si el usuario tiene acceso a la pagina
    this.usuarioServicio.esAccesible('administracion/gestion-ventas-arriendos');
    this.usuarioSesion = this.usuarioServicio.getUsuario();
    this.listar();
  }

  /**
   * lista los contratos de estado "0" para llegar a su finalizacion
   */
  listar() {
    this.generico.listar('contrato', {'estado': 0}).subscribe(res => {
      this.contratos = res.data;
      this.agregarObjetos();
    });
  }

  agregarObjetos() {
    for (const c of this.contratos) {
      const fields = c.fecha_solicitud.split('T');
      const fechaSoli = fields[0];
      c.fecha_solicitud = fechaSoli;

      this.generico.buscar('usuarios', {'persona': c.cliente}).subscribe(res1 => {
        c.cliente = res1.data;
        this.generico.buscar('personas', {'id': c.cliente.persona}).subscribe(res5 => {
          c.cliente.persona = res5.data;
          this.generico.buscar('empleados', {'usuario': c.empleado}).subscribe(res3 => {
            c.empleado = res3.data;
            this.generico.buscar('usuarios', {'persona': c.empleado.usuario}).subscribe(res2 => {
              c.empleado.usuario = res2.data;
              this.generico.buscar('personas', {'id': c.empleado.usuario.persona}).subscribe(res4 => {
                c.empleado.usuario.persona = res4.data;
              });
            });
          });
        });
      });
    }
  }

  /*
  * Buscar contrato
  */
 buscarContrato() {
     this.generico.buscar('contrato', {'id': this.idContrato}).subscribe(rta => {
       if (rta.data == null) {
         this.show = 1;
         this.msj = 'No existe el contrato con ese numero de identificacion: ' + this.idContrato;
       } else {
         this.busco = true;
         this.contrato = rta.data;
       }
     });
 }

  /**
   * Ver la inormacion del contrato
   */
  ver(i: Contrato) {
    this.verSelec = true;
    this.contrato = i;
  }


  registrar(form: NgForm) {

    this.generico.registrar('contrato', this.contrato).subscribe(res => {
      if (res.data === 'exito') {
        this.msj = 'El contrato se ha registrado correctamente';
        this.show = 2;
        form.reset();
      } else {
        this.msj = res.data;
        this.show = 1;
      }
    });
  }


  /**
   * permite editar un inmueble
   * @param form el formulario con datos del inmueble
   */
  editar(form: NgForm) {

    const fecha = this.fechaActual();
    this.contrato.fecha_finalizacion = fecha;
    this.contrato.estado = 1;
    // tslint:disable-next-line:prefer-const
    var aux: AuxiliarObjeto = new AuxiliarObjeto();
    aux.objeto = this.contrato;
    aux.replaceValue('cliente', this.contrato.cliente.persona.id);
    aux.replaceValue('empleado', this.contrato.empleado.usuario.persona.id);
    console.log(aux.objeto);

    this.generico.editar('contrato', aux.objeto, 'id').subscribe(res => {
      if (res.data === 'exito') {
        this.msj = 'el contrato se edito correctamente';
        this.show = 2;
        this.verSelec = false;
        form.reset();
        this.listar();
      } else {
        this.show = 1;
        this.msj = res.data;
      }
    });
  }

  fechaActual(): string {

    // tslint:disable-next-line:prefer-const
    let dateFormat = require('dateformat');
    // tslint:disable-next-line:prefer-const
    let now = new Date();
    return dateFormat(now, 'yyyy/mm/dd');

  }
}
