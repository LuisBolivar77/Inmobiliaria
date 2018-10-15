import { Component, OnInit, Inject } from '@angular/core';
import { GenericoService } from '../../../Servicios/genericoServ.service';
import { Inmueble } from '../../../Modelo/Inmueble';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';
import { Archivo } from '../../../Modelo/Archivo';
import { Ciudad } from '../../../Modelo/Ciudad';
import { Departamento } from '../../../Modelo/Departamento';
import { TipoInmueble } from '../../../Modelo/TipoInmueble';
import { Usuario } from 'src/app/Modelo/Usuario';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ReservarVisita } from 'src/app/Modelo/ReservarVisita';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/Modelo/Persona';
import { AuxiliarObjeto } from 'src/app/Modelo/AuxiliarObjeto';

@Component({
  selector: 'app-ver-inmueble',
  templateUrl: './ver-inmueble.component.html',
  styleUrls: ['./ver-inmueble.component.css']
})


export class VerInmuebleComponent implements OnInit {

  // El inmueble que se mostrara
  inmueble: Inmueble = new Inmueble();
  inmueble2: Inmueble = new Inmueble();

  // Imagenes del inmueble
  fotos: Array<Archivo> = [];
  // Año actual
  anio = new Date().getFullYear();

  usuarioSesion:Usuario = new Usuario();

   // Variables para los mensajes en la pagina
   show: number;
   msj: string;

   //La reserva de visita del inmueble
   reservaVisita:ReservarVisita = new ReservarVisita();


  constructor(private genericoServicio: GenericoService, private usuarioServicio: UsuarioService) { }

  ngOnInit() {
    this.inmueble.tipo = new TipoInmueble();
    this.inmueble.ciudad = new Ciudad();
    this.inmueble.ciudad.departamento = new Departamento();
    // Obtenemos el id del inmueble, que se paso por get (url)
    const id = this.genericoServicio.getUrlParameter('id');
    if (id === undefined || id === '') {
      // Como el id no esta, redireccionamos al inicio
      this.usuarioServicio.redireccionar('/');
      return false;
    } else {
      // Cargamos el inmueble
      this.inmueble.id = id;
      this.cargarInmueble();
      return true;
    }
  }

  /**
   * Busca el inmueble y carga la informacion
   */
  cargarInmueble() {
    this.genericoServicio.buscar('inmueble', {'id': this.inmueble.id, 'estado': 1}).subscribe(rta => {
      if (rta.data != null) {
        this.inmueble = rta.data;
        // Obtenemos el tipo de inmueble
        this.genericoServicio.buscar('tipo_inmueble', {'id': this.inmueble.tipo}).subscribe(r2 => {
          // Setteamos el tipo inmueble
          this.inmueble.tipo = r2.data;
          // Obtenemos la ciudad
          this.genericoServicio.buscar('ciudades', {'id': this.inmueble.ciudad}).subscribe(r3 => {
            // Setteamos la ciudad
            this.inmueble.ciudad = r3.data;
            // Obtenemos el departamento
            this.genericoServicio.buscar('departamentos', {'id': this.inmueble.ciudad.departamento}).subscribe(r4 => {
              // Setteamos el departamento
              this.inmueble.ciudad.departamento = r4.data;
              // Obtenemos las fotos del inmueble
              this.genericoServicio.listar('archivo_inmueble', {'inmueble': this.inmueble.id}).subscribe(r5 => {
                // Guardamos el nombre de la foto en el array de fotos,
                // asignando como clave el id del inmueble
                this.fotos = r5.data;
                return true;
            });
          });
        });
      });
      } else {
        // Como el inmueble no se encontro, redireccionamos el usuario al inicio
        this.usuarioServicio.redireccionar('/');
        return false;
      }
    });
  }



 

  /**
   * Metodo que permite reservar una visita al inmueble seleccionado
   */
  reservarVisita(form: NgForm){
    //Validamos si ha iniciado sesion para que se pueda hacer la reserva del inmueble
    this.usuarioSesion = this.usuarioServicio.getUsuario();
    if(this.usuarioSesion==null){
      this.msj= "Se requiere inicio de sesion para reservar visita";
      window.alert(this.msj);
      this.show=1;
      return;
     }else{
       if(this.reservaVisita.mensaje==null || this.reservaVisita.fecha==null){
        this.msj= "Por favor llene los campos";
        window.alert(this.msj);
        this.show=1;
        return;
       }
       //Asignamos el inmueble
       this.reservaVisita.inmueble=this.inmueble;
       //Asignamos el usuario a la persona tipo cliente
      this.reservaVisita.cliente= this.usuarioSesion.persona;
      //Seteamos los valores por defecto
      //Valor por defecto del estado (Por atender = 'PENDIENTE')
      this.reservaVisita.estado="PENDIENTE";
       //el comentario despues de la visita (null ya que no se ha realizado la visita)
       this.reservaVisita.comentario=null;

       var aux: AuxiliarObjeto = new AuxiliarObjeto();
       aux.objeto = this.reservaVisita;
       aux.replaceValue("inmueble",this.reservaVisita.inmueble.id);
       aux.replaceValue("cliente",this.reservaVisita.cliente.id);
       aux.replaceValue("empleado",null);

      this.genericoServicio.registrar("reservar_visita",aux.objeto).subscribe(res=>{
        if(res.data=="exito"){
          this.msj= "Se registrado su solicitud con exito";
          this.show=2;
          form.reset;
          window.alert("Se ha registrado la peticion correctamente");
          
        }else{
          this.msj= "Error en la solicitud :"+res.data;
          this.show=1;
        }
      });
     }
  }

  limpiarCampos():void{


  }
  

  /**
   * Obtiene la zona apartir del numero de zona asignado en el inmueble
   */
  getZona(indice: number) {
    return this.inmueble2.getZona(indice);
  }

  /**
   * Obtiene el tipo de inmueble (Arriendo o Venta)
   */
  getTipoAV(indice: number) {
    return this.inmueble2.getTipoAV(indice);
  }

  /**
   * Agrega comas a un valor numerico
   * @param valor
   */
  addComa(valor: number) {
    return this.inmueble2.addComa(valor);
  }

  /**
   * Apartir de un booleano nos devuelve si, si o no
   */
  siNo(boolean) {
    if (boolean === 1) {
      return 'Si';
    } else {
      return 'No';
    }
  }

}
