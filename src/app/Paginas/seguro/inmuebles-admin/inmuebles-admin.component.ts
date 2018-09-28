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

@Component({
  selector: 'app-inmuebles-admin',
  templateUrl: './inmuebles-admin.component.html',
  styleUrls: ['./inmuebles-admin.component.css']
})
export class InmueblesAdminComponent implements OnInit {

  file: File[];

  inmueble: Inmueble = new Inmueble();

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

  // variables Checkbox
  markedAsensor = false;
  theCheckboxAsensor = false;
  //
  markedCanchasDepor = false;
  theCheckboxCanchasDepor = false;
  //
  markedZonasHumedas = false;
  theCheckboxZonasHumedas = false;
  //
  markedZonaInfantil = false;
  theCheckboxZonaInfantil = false;
  //
  markedJardines = false;
  theCheckboxJardines = false;
  //
  markedTransporteCercano = false;
  theCheckboxTransporteCercano = false;
  //
  markedPrecioNegociable = false;
  theCheckboxPrecioNegociable = false;
  //
  markedZonasRopas = false;
  theCheckboxZonasRopas = false;
  //
  markedParqueadero = false;
  theCheckboxParqueadero = false;
  //
  markedDeposito = false;
  theCheckboxDeposito = false;
  //
  markedEstudio = false;
  theCheckboxEstudio = false;
  //
  markedCuartoServicio = false;
  theCheckboxCuartoServicio = false;
  //
  markedChimenea = false;
  theCheckboxChimenea = false;
  //
  markedCocinaAC = false;
  theCheckboxCocinaAC = false;
  //
  markedComedorIndependiente = false;
  theCheckboxComedorIndependiente = false;
  //
  markedVistaExterios = false;
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
  valor = false;

  constructor(private generico: GenericoService, private usuarioServicio: UsuarioService) { }

  ngOnInit() {

    // Validamos si el usuario tiene acceso a la pagina
    this.usuarioServicio.esAccesible('administracion/gestion-inmuebles');

    // this.usuarioSesion.persona = this.usuarioServicio.getUsuario;
    this.listar();
    this.listarDepartamentos();
    this.listarTipoInmuebles();
    console.log(this.ciudades.length);
    this.listarZonas();
    this.listarVentaArriendo();

  }

  onFileSelected(event) {
    this.file = event.target.files;
  }

  registrar(form: NgForm) {

        console.log('persona a guardar /////////////// ' + this.inmueble.usuario.persona);
        this.llenarInmueble();

        this.generico.registrar('inmueble', {'inmueble': this.inmueble}).subscribe(res => {
          if (res.data === 'exito') {
            this.msj = 'Se ha registrado correctamente';
            this.show = 2;
            // Actualizamos la lista de empleados
            this.listar();
            window.alert(res.data);
          } else {
            this.msj = res.data;
            this.show = 1;
          }
        });
  }

  llenarInmueble() {
    const fecha = this.fechaActual();
    this.inmueble.fechaAprobacion = fecha;
    this.inmueble.ciudad = this.ciudadSeleccionada;
    this.inmueble.tipoAV = this.tipoAVSeleccionado.id;
    this.inmueble.zona = this.zonaSeleccionada.id;
    this.inmueble.estado = 1;
    this.inmueble.ciudad = this.ciudadSeleccionada;
    this.inmueble.tipo = this.tipoInmuebleSeleccionado;
    this.inmueble.zona = this.zonaSeleccionada.id;
    this.inmueble.tipoAV = this.tipoAVSeleccionado.id;
    this.inmueble.ascensor = this.markedAsensor;
    this.inmueble.canchasDepor = this.markedCanchasDepor;
    this.inmueble.chimenea = this.markedChimenea;
    this.inmueble.cocinaAC = this.markedCocinaAC;
    this.inmueble.comedorIndependiente = this.markedComedorIndependiente;
    this.inmueble.cuartoServicio = this.markedCuartoServicio;
    this.inmueble.deposito = this.markedDeposito;
    this.inmueble.estudio = this.markedEstudio;
    this.inmueble.jardines = this.markedJardines;
    this.inmueble.parqueadero = this.markedParqueadero;
    this.inmueble.precioNegociable = this.markedPrecioNegociable;
    this.inmueble.transporteCercano = this.markedTransporteCercano;
    this.inmueble.vistaExterior = this.markedVistaExterios;
    this.inmueble.zonaInfantil = this.markedZonaInfantil;
    this.inmueble.zonasHumedas = this.markedZonasHumedas;
    this.inmueble.zonasRopas = this.markedZonasRopas;
  }


  /**
   * Buscar persona
   */
  buscarInmueble() {
      this.generico.buscar('inmueble', {'numero_matricula': this.inmueble.numero_matricula}).subscribe(rta => {
        if (rta.data == null) {
          this.show = 1;
          this.msj = 'No existe el inmueble con ese numero de matricula ' + this.inmueble.numero_matricula;
        } else {
          this.show = 3;
        }
      });
  }

    /**
   * Buscar empleado
   */
  buscarUsuario(form: NgForm) {
      this.generico.buscar('personas', {'cedula': this.cedula}).subscribe(rta => {
        if (rta.data == null) {
          this.valor = false;
          // this.limpiar();
        } else {
          this.show = 3;
          // Guardamos el resultado en persona
          this.persona = rta.data;
          // Buscamos el usuario
          this.generico.buscar('usuarios', {'persona': this.persona.id}).subscribe(rta2 => {
                this.usuarioCliente = rta2.data;
                // Setteamos los datos al empleado
                this.inmueble.usuario = this.usuarioCliente;
                this.inmueble.usuario.persona = this.persona;
                this.registrar(form);
                this.valor = true;
          });
        }
      });
  }

  ver(e: Inmueble) {

  }

  eliminar(e: Inmueble) {

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
      console.log(this.ciudades);
    });
  }

  /**
   * lista los tipos de inmuebles
   */
  listarTipoInmuebles() {
    this.generico.listar('tipo_inmueble', null).subscribe(res => {
      this.tiposInmueble = res.data;
      console.log(this.tiposInmueble);
    });
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

  toggleVisibilityAsensor(e) {
    this.markedAsensor = e.target.checked;
  }

  toggleVisibilityCanchasDepor(e) {
    this.markedCanchasDepor = e.target.checked;
  }

  toggleVisibilityZonasHumedas(e) {
    this.markedZonasHumedas = e.target.checked;
  }

  toggleVisibilityZonaInfantil(e) {
    this.markedZonaInfantil = e.target.checked;
  }

  toggleVisibilityJardines(e) {
    this.markedJardines = e.target.checked;
  }

  toggleVisibilityTransporteCercano(e) {
    this.markedTransporteCercano = e.target.checked;
  }

  toggleVisibilityPrecioNegociable(e) {
    this.markedPrecioNegociable = e.target.checked;
  }

  toggleVisibilityZonasRopas(e) {
    this.markedZonasRopas = e.target.checked;
  }

  toggleVisibilityParqueadero(e) {
    this.markedParqueadero = e.target.checked;
  }

  toggleVisibilityDeposito(e) {
    this.markedDeposito = e.target.checked;
  }

  toggleVisibilityEstudio(e) {
    this.markedEstudio = e.target.checked;
  }

  toggleVisibilityCuartoServicio(e) {
    this.markedCuartoServicio = e.target.checked;
  }

  toggleVisibilityChimenea(e) {
    this.markedChimenea = e.target.checked;
  }

  toggleVisibilityCocinaAC(e) {
    this.markedCocinaAC = e.target.checked;
  }

  toggleVisibilityComedorIndependiente(e) {
    this.markedComedorIndependiente = e.target.checked;
  }

  toggleVisibilityVistaExterios(e) {
    this.markedVistaExterios = e.target.checked;
  }

}
