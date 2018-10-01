import { Component, OnInit } from '@angular/core';
import { Inmueble } from '../../../Modelo/Inmueble';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { Usuario } from '../../../Modelo/Usuario';
import { AuxiliarObjeto } from '../../../Modelo/AuxiliarObjeto';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';

@Component({
  selector: 'app-aprobacion-inmuebles',
  templateUrl: './aprobacion-inmuebles.component.html',
  styleUrls: ['./aprobacion-inmuebles.component.css']
})
export class AprobacionInmueblesComponent implements OnInit {

  // Listado de Inmubeles para aprovar
  inmuebles: Array<Inmueble> = [];
  usuario:Usuario=new Usuario();

  usuarioSesion:Usuario = new Usuario();

  // Variables para los mensajes en la pagina
  show: number;
  msj: string;

  constructor(private servicioGenerico:GenericoService, private usuarioServicio:UsuarioService) { }

  ngOnInit() {
    this.usuarioServicio.esAccesible("administracion/aprobar-inmueble");
    this.usuarioSesion = this.usuarioServicio.getUsuario();
    this.listar();
  }

   /**
   * Lista todos los inmuebles que necesiten ser aprobados
   */
  listar() {
   this.servicioGenerico.listar("inmueble", {"estado":"0"}).subscribe(rta=>{
     if(rta.data!=null){
       
       this.inmuebles=rta.data;
      this.agregarObjetos(this.inmuebles);
     }
   });
  }

  agregarObjetos(lista){
    for(let i of lista){
      // Obtenemos el tipo de inmueble
      this.servicioGenerico.buscar("tipo_inmueble",{"id":i.tipo}).subscribe(r2 => {
        // Setteamos el tipo inmueble
        i.tipo = r2.data;
        // Obtenemos la ciudad
        this.servicioGenerico.buscar("ciudades",{"id":i.ciudad}).subscribe(r3 => {
          // Setteamos la ciudad
          i.ciudad = r3.data;
          // Obtenemos el departamento
          this.servicioGenerico.buscar("departamentos",{"id":i.ciudad.departamento}).subscribe(r4 => {
            // Setteamos el departamento
            i.ciudad.departamento = r4.data;
            // Obtenemos la persona que quiere la aprovacion
            this.servicioGenerico.buscar("personas",{"id":i.usuario}).subscribe(r5 => {
            //Seteamos la persona
            i.usuario = this.usuario; // creamos un objeto usuario y lo seteamos
            i.usuario.persona = r5.data;
            });
          });
        });
      });
    }
  }

  aprobarInmueble(inmueble:Inmueble){
    inmueble.estado = 1;
    inmueble.administrador = this.usuarioSesion;
    var aux: AuxiliarObjeto = new AuxiliarObjeto();
    aux.objeto = inmueble;
    aux.replaceValue("administrador",inmueble.administrador);
    aux.replaceValue("promocion",  inmueble.promocion.id);
    aux.replaceValue("tipo",  inmueble.tipo.id);
    aux.replaceValue("ciudad", inmueble.ciudad.id);
    aux.replaceValue("usuario", inmueble.usuario.persona.id);
    console.log(aux.objeto);
    this.servicioGenerico.editar("inmueble",aux.objeto, "id").subscribe(r => {
      if(r.data=="exito"){
        this.msj= "Se ha aprobado el mueble con exito!";
        this.show=2;
        this.listar();
      }else{
        this.msj= "Error en la aprobacion :"+r.data;
        this.show=1;
      }
    });
  }

}