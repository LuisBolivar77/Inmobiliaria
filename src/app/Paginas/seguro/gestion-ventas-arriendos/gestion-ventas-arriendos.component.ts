import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { UsuarioService } from 'src/app/Servicios/usuarioServ.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Contrato } from 'src/app/Modelo/Contrato';
import { Empleado } from 'src/app/Modelo/Empleado';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-gestion-ventas-arriendos',
  templateUrl: './gestion-ventas-arriendos.component.html',
  styleUrls: ['./gestion-ventas-arriendos.component.css']
})
export class GestionVentasArriendosComponent implements OnInit {

  //listado de contratos para finalizar
  contratos: Array<Contrato>=[];
  usuario:Usuario=new Usuario();
  persona:Persona= new Persona();
  empleados:Empleado=new Empleado();
  contrato:Contrato= new Contrato();

  //usuario en sesion 
  usuarioSesion:Usuario = new Usuario();

  // Variables para los mensajes en la pagina
  show: number;
  msj: string;
  idContrato:number;
  busco: boolean;
  
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
  listar(){
    this.generico.listar('contrato', {"estado":0}).subscribe(res => {
      this.contratos = res.data;
      this.agregarObjetos(this.contratos);
    });
  }

  agregarObjetos(lista){
    for(let i of lista){
      //obtenemos el cliente
      this.generico.buscar("personas",{"id":i.persona}).subscribe(r1 => {
        //Seteamos la persona
        i.persona = this.persona; // creamos un objeto usuario y lo seteamos
        i.persona = r1.data;

          

           this.generico.buscar("contrato",{"id":i.contrato}).subscribe(rt3=>{
            i.contrato=rt3.data;
           
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
    this.contrato.id = i.id;
    this.buscarContrato();
  }

  

}