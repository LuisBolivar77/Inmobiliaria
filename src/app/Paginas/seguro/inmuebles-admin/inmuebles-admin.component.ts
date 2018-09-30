import { Zona } from './../../../Modelo/Zona';
import { Departamento } from './../../../Modelo/Departamento';
import { Usuario } from './../../../Modelo/Usuario';
import { Inmueble } from './../../../Modelo/Inmueble';
import { VentaArriendo } from './../../../Modelo/VentaArriendo';
import { NgForm } from '@angular/forms';
import { TipoInmueble } from './../../../Modelo/TipoInmueble';
import { Ciudad } from './../../../Modelo/Ciudad';
import { GenericoService } from './../../../Servicios/genericoServ.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../../../Modelo/Persona';
import { UsuarioService } from '../../../Servicios/usuarioServ.service';
import { AuxiliarObjeto } from '../../../Modelo/AuxiliarObjeto';

@Component({
  selector: 'app-inmuebles-admin',
  templateUrl: './inmuebles-admin.component.html',
  styleUrls: ['./inmuebles-admin.component.css']
})
export class InmueblesAdminComponent implements OnInit {

  file: File[];

  inmueble: Inmueble = new Inmueble();
  inmuebleTemporal: Inmueble = new Inmueble();
  ciudadSeleccionada: Ciudad = new Ciudad();
  tipoInmuebleSeleccionado: TipoInmueble = new TipoInmueble();
  zonaSeleccionada: Zona = new Zona;
  tipoAVSeleccionado: VentaArriendo = new VentaArriendo;
  usuarioCliente: Usuario = new Usuario();
  usuarioEmpleado: Usuario = new Usuario();
  persona: Persona = new Persona();
  usuarioListar: Usuario = new Usuario();
  departamentoSeleccionado: Departamento = new Departamento();
  usuarioSesion: Usuario = new Usuario();
  ciudadBusqueda: Ciudad = new Ciudad();

  // variables Checkbox
  theCheckboxAsensor = false;
  theCheckboxCanchasDepor = false;
  theCheckboxZonasHumedas = false;
  theCheckboxZonaInfantil = false;
  theCheckboxJardines = false;
  theCheckboxTransporteCercano = false;
  theCheckboxPrecioNegociable = false;
  theCheckboxZonasRopas = false;
  theCheckboxParqueadero = false;
  theCheckboxDeposito = false;
  theCheckboxEstudio = false;
  theCheckboxCuartoServicio = false;
  theCheckboxChimenea = false;
  theCheckboxCocinaAC = false;
  theCheckboxComedorIndependiente = false;
  theCheckboxVistaExterios = false;

  ciudades: Array<Ciudad> = [];
  tiposInmueble: Array<TipoInmueble> = [];
  zonas: Array<Zona> = [];
  ventaArriendo: Array<VentaArriendo> = [];
  inmuebles: Array<Inmueble> = [];
  departamentos: Array<Departamento> = [];

  show: number;
  msj: string;
  cedula: string;
  encontroUsu: boolean;
  numMatriculaBuscar: string;
  busco: boolean;
  resul: string;

  constructor(private generico: GenericoService, private usuarioServicio: UsuarioService) { }

  ngOnInit() {

    // Validamos si el usuario tiene acceso a la pagina
    this.usuarioServicio.esAccesible('administracion/gestion-inmuebles');

    // this.usuarioSesion.persona = this.usuarioServicio.getUsuario;
    this.listar();
    this.listarDepartamentos();
    this.listarTipoInmuebles();
    this.listarZonas();
    this.listarVentaArriendo();
    this.busco = false;

  }

  onFileSelected(event) {
    this.file = event.target.files;
  }

  registrar(form: NgForm) {
        this.llenarInmueble();

        this.generico.registrar('inmueble', this.inmueble).subscribe(res => {
          if (res.data === 'exito') {
            this.msj = 'El inmueble se ha registrado correctamente';
            this.show = 2;
            // Actualizamos la lista de empleados
            this.listar();
            form.reset();
          } else {
            this.msj = res.data;
            this.show = 1;
          }
        });
  }

  llenarInmueble() {
    const fecha = this.fechaActual();
    this.inmueble.fechaAprobacion = fecha;
    this.inmueble.tipoAV = this.tipoAVSeleccionado.id;
    this.inmueble.zona = this.zonaSeleccionada.id;
    this.inmueble.ciudad = this.ciudadSeleccionada;
    this.inmueble.tipo = this.tipoInmuebleSeleccionado;
    this.inmueble.usuario = this.usuarioCliente;
    this.inmueble.estado = 1;
    this.inmueble.ascensor = this.theCheckboxAsensor;
    this.inmueble.canchasDepor = this.theCheckboxCanchasDepor;
    this.inmueble.chimenea = this.theCheckboxChimenea;
    this.inmueble.cocinaAC = this.theCheckboxCocinaAC;
    this.inmueble.comedorIndependiente = this.theCheckboxComedorIndependiente;
    this.inmueble.cuartoServicio = this.theCheckboxCuartoServicio;
    this.inmueble.deposito = this.theCheckboxDeposito;
    this.inmueble.estudio = this.theCheckboxEstudio;
    this.inmueble.jardines = this.theCheckboxJardines;
    this.inmueble.parqueadero = this.theCheckboxParqueadero;
    this.inmueble.precioNegociable = this.theCheckboxPrecioNegociable;
    this.inmueble.transporteCercano = this.theCheckboxTransporteCercano;
    this.inmueble.vistaExterior = this.theCheckboxVistaExterios;
    this.inmueble.zonaInfantil = this.theCheckboxZonaInfantil;
    this.inmueble.zonasHumedas = this.theCheckboxZonasHumedas;
    this.inmueble.zonasRopas = this.theCheckboxZonasRopas;
  }


  /**
   * Buscar un inmueble
   */
  buscarInmueble() {
    this.checkboxToNull();
      this.generico.buscar('inmueble', {'numero_matricula': this.numMatriculaBuscar}).subscribe(rta => {
        if (rta.data == null) {
          this.show = 1;
          this.msj = 'No existe el inmueble con ese numero de matricula: ' + this.numMatriculaBuscar;
        } else {
          console.log(rta.data);
          this.busco = true;
          this.inmuebleTemporal = rta.data;
          console.log('/////// valor ascensor ///////// --- ' + this.inmuebleTemporal.ascensor);
          this.buscarCiudad();
          this.zonaSeleccionada.id = this.inmuebleTemporal.zona;
          this.tipoAVSeleccionado.id = this.inmuebleTemporal.tipoAV;
          this.inmueble = this.inmuebleTemporal;
        }
      });
  }

    /**
   * Buscar un usuario
   */
  buscarUsuario(form: NgForm) {
    if (this.cedula != null) {
      this.generico.buscar('personas', {'cedula': this.cedula}).subscribe(rta => {
        if (rta.data == null) {
          this.show = 1;
          this.msj = rta.data;
        } else {
          // Guardamos el resultado en persona
          this.persona = rta.data;
          this.usuarioCliente.persona = this.persona;
          this.registrar(form);
        }
      });
    } else {
      this.show = 1;
      this.msj = 'error, debe ingresar la cedula del propietaria';
    }
  }

  ver(e: Inmueble) {

  }

  eliminar(e: Inmueble) {

  }

  editar(form: NgForm) {
    this.busco = false;
  }

  /**
   * Lista todas los empleados registradas
   */
  listar() {
    // Obtenemos la lista de empleado
    this.generico.listar('inmueble', null).subscribe(rta => {
    if ( rta.data != null ) {
      this.inmuebles = rta.data;
      // obtenemos el resto de informacion del empleado
      // tslint:disable-next-line:prefer-const
      /**
      for (let e of this.inmuebles) {
        // obtenemos el cargo del empleado
        this.generico.buscar('personas', {'id': e.usuario}).subscribe(rta2 => {
          e.usuario.persona = rta2.data;
        });
      }
      */
    }
    });
  }
  /**
   * lista los departamentos
   */
  listarDepartamentos() {
    this.generico.listar('departamentos', null).subscribe(res => {
      this.departamentos = res.data;
    });
  }

  /**
   * lista ciudades dependiendo del departamento que elijan
   */
  listarCiudades() {
    this.generico.listar('ciudades', {'departamento': this.departamentoSeleccionado.id}).subscribe(res => {
      this.ciudades = res.data;
    });
  }

  /**
   * lista los tipos de inmuebles
   */
  listarTipoInmuebles() {
    this.generico.listar('tipo_inmueble', null).subscribe(res => {
      this.tiposInmueble = res.data;
    });
  }

  buscarCiudad() {
    this.generico.buscar('ciudades', {'id': this.inmuebleTemporal.ciudad}).subscribe(res => {
      this.ciudadSeleccionada = res.data;
      this.generico.buscar('departamentos', {'id': this.ciudadSeleccionada.departamento}).subscribe(res2 => {
        this.departamentoSeleccionado = res2.data;
        this.listarCiudades();
      });
    });
  }

  cambio(cambiar: boolean) {

  }

  listarZonas() {

    // tslint:disable-next-line:prefer-const
    let zona1: Zona = new Zona();
    zona1.id = 0;
    zona1.nombre = 'Norte';

    // tslint:disable-next-line:prefer-const
    let zona2: Zona = new Zona();
    zona2.id = 1;
    zona2.nombre = 'Sur';

    // tslint:disable-next-line:prefer-const
    let zona3: Zona = new Zona();
    zona3.id = 2;
    zona3.nombre = 'Oriente';

    // tslint:disable-next-line:prefer-const
    let zona4: Zona = new Zona();
    zona4.id = 3;
    zona4.nombre = 'Occidente';

    this.zonas.push(zona1, zona2, zona3, zona4);

  }

  listarVentaArriendo() {

    // tslint:disable-next-line:prefer-const
    let tipo1: VentaArriendo = new VentaArriendo();
    tipo1.id = 0;
    tipo1.nombre = 'Arriendo';

    // tslint:disable-next-line:prefer-const
    let tipo2: VentaArriendo = new VentaArriendo();
    tipo2.id = 1;
    tipo2.nombre = 'Venta';

    this.ventaArriendo.push(tipo1, tipo2);

  }

  fechaActual(): string {

    // tslint:disable-next-line:prefer-const
    let dateFormat = require('dateformat');
    // tslint:disable-next-line:prefer-const
    let now = new Date();
    return dateFormat(now, 'yyyy/mm/dd');

  }

  checkboxToNull() {
    this.theCheckboxAsensor = null;
    this.theCheckboxCanchasDepor = null;
    this.theCheckboxZonasHumedas = null;
    this.theCheckboxZonaInfantil = null;
    this.theCheckboxJardines = null;
    this.theCheckboxTransporteCercano = null;
    this.theCheckboxPrecioNegociable = null;
    this.theCheckboxZonasRopas = null;
    this.theCheckboxParqueadero = null;
    this.theCheckboxDeposito = null;
    this.theCheckboxEstudio = null;
    this.theCheckboxCuartoServicio = null;
    this.theCheckboxChimenea = null;
    this.theCheckboxCocinaAC = null;
    this.theCheckboxComedorIndependiente = null;
    this.theCheckboxVistaExterios = null;

  }


  setCheckBox() {
    this.theCheckboxAsensor = this.inmuebleTemporal.ascensor;
    this.theCheckboxCanchasDepor = this.inmuebleTemporal.canchasDepor;
    this.theCheckboxZonasHumedas = this.inmuebleTemporal.zonasHumedas;
    this.theCheckboxZonaInfantil = this.inmuebleTemporal.zonaInfantil;
    this.theCheckboxJardines = this.inmuebleTemporal.jardines;
    this.theCheckboxTransporteCercano = this.inmuebleTemporal.transporteCercano;
    this.theCheckboxPrecioNegociable = this.inmuebleTemporal.precioNegociable;
    this.theCheckboxZonasRopas = this.inmuebleTemporal.zonasRopas;
    this.theCheckboxParqueadero = this.inmuebleTemporal.parqueadero;
    this.theCheckboxDeposito = this.inmuebleTemporal.deposito;
    this.theCheckboxEstudio = this.inmuebleTemporal.estudio;
    this.theCheckboxCuartoServicio = this.inmuebleTemporal.cuartoServicio;
    this.theCheckboxChimenea = this.inmuebleTemporal.chimenea;
    this.theCheckboxCocinaAC = this.inmuebleTemporal.cocinaAC;
    this.theCheckboxComedorIndependiente = this.inmuebleTemporal.comedorIndependiente;
    this.theCheckboxVistaExterios = this.inmuebleTemporal.vistaExterior;
  }
}
