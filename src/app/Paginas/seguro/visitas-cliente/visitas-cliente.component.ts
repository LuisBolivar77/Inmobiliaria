import { Component, OnInit } from '@angular/core';
import { ReservarVisita } from 'src/app/Modelo/ReservarVisita';
import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { UsuarioService } from 'src/app/Servicios/usuarioServ.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { NgForm } from '@angular/forms';
import { AuxiliarObjeto } from 'src/app/Modelo/AuxiliarObjeto';

@Component({
  selector: 'app-visitas-cliente',
  templateUrl: './visitas-cliente.component.html',
  styleUrls: ['./visitas-cliente.component.css']
})
export class VisitasClienteComponent implements OnInit {

   // Listado de visitas para comentar / editar
   visitas: Array<ReservarVisita> = [];
  
   // Visita seleccionada para comentar 
   visitaSeleccionada: ReservarVisita = new ReservarVisita();

   //usuario de session
   usuarioSesion:Usuario = new Usuario();

   // Variables para los mensajes en la pagina
  show: number;
  msj: string;

  //Variables de inmueble
  matriculaInmueble:String;
  detalleInmueble:String;

  constructor(private servicioGenerico:GenericoService, private usuarioServicio:UsuarioService) { }

  ngOnInit() {
 
    this.usuarioServicio.esAccesible("cliente/visitas-cliente");
    this.usuarioSesion = this.usuarioServicio.getUsuario();
    this.listar();
  }

  listar(){
    this.servicioGenerico.listar("reservar_visita",{'cliente':this.usuarioSesion.persona.id}).subscribe(rta=>{
      if(rta.data!=null){
        this.visitas=rta.data;
       this.agregarObjetos(this.visitas);
      }
    });
  }

  agregarObjetos(lista){
    for(let i of lista){
      this.servicioGenerico.buscar("inmueble",{"id":i.inmueble}).subscribe(r2 => {
        i.inmueble = r2.data;
        this.servicioGenerico.buscar("persona",{"id":i.empleado}).subscribe(r3 => {
          i.empleado = r3.data;
        });
      });
      console.log(i)
    }
    
  }

  verVisita(visita:ReservarVisita){
    const fields = visita.fecha.split('T');
    const fechaVisi = fields[0];
     visita.fecha = fechaVisi;
    this.visitaSeleccionada = visita;
    this.matriculaInmueble = this.visitaSeleccionada.inmueble.numero_matricula;
    this.detalleInmueble = this.visitaSeleccionada.inmueble.detalles;

  }

  comentarVisita(form:NgForm):void{
    if(this.visitaSeleccionada.id==null){
      this.msj = "Por favor seleccione una visita";
      this.show = 1;
      return;
    }
    if(this.visitaSeleccionada.comentario==null){
      this.msj = "Ingrese los comentarios de la visita por favor";
      this.show = 1;
      return;
    }  
    this.visitaSeleccionada.estado="ATENDIDA"
    var aux: AuxiliarObjeto = new AuxiliarObjeto();
       aux.objeto = this.visitaSeleccionada;
       aux.replaceValue("inmueble",this.visitaSeleccionada.inmueble.id);
       aux.replaceValue("cliente",this.visitaSeleccionada.cliente.id);
       aux.replaceValue("empleado",this.visitaSeleccionada.empleado.id);
       
    this.servicioGenerico.editar('reservar_visita',aux.objeto,'id').subscribe(rta=>{
      if (rta.data === 'exito') {
        this.msj = 'Se ha Registrado el comentario exitosamente !';
        this.show = 2;
        this.limpiarCampos();
        this.listar();
      } else {
        this.msj = 'No se ha podido registrar el comentario: ' + rta.data;
        this.show = 1;
      }
      window.alert(this.msj);
    });

   
  }

  limpiarCampos(){
    this.visitaSeleccionada.comentario="";
    this.visitaSeleccionada.fecha= "";
    this.matriculaInmueble="";
    this.detalleInmueble=""
  }

  editarVisita(form:NgForm){


  }

  quitarVisita(visita:ReservarVisita){
    if(visita.estado=="ATENDIDA"){
      this.msj = "La visita en estado 'ATENDIDA' no se puede cancelar";
      this.show = 1;
      window.alert(this.msj);
      return;
    }
    this.servicioGenerico.eliminar("reservar_visita", {"id": visita.id}).subscribe(rta => {
      if (rta.data === 'exito') {
        this.msj = 'Se ha eliminado la visita correctamente';
        this.show = 2;
        this.limpiarCampos();
        this.listar();
      } else {
        this.msj = 'No se ha podido eliminar la visita: ' + rta.data;
        this.show = 1;
      }
      window.alert(this.msj);
    });
  }

}
