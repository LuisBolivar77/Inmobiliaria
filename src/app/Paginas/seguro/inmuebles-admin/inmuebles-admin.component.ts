import { InmuebleTemporal } from './../../../Modelo/InmuebleTemporal';
import { Persona } from './../../../Modelo/Persona';
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
import { UsuarioService } from '../../../Servicios/usuarioServ.service';
import { AuxiliarObjeto } from '../../../Modelo/AuxiliarObjeto';
import { FileUploader } from 'ng2-file-upload';
import { Archivo } from '../../../Modelo/Archivo';

@Component({
  selector: 'app-inmuebles-admin',
  templateUrl: './inmuebles-admin.component.html',
  styleUrls: ['./inmuebles-admin.component.css']
})
export class InmueblesAdminComponent implements OnInit {

  file: File[] = null;
  img;
  labelFile: string;

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
  ciudadBusqueda: Ciudad = new Ciudad();
  inmuebleArchivo: Inmueble = new Inmueble();

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
  inmuebles: Array<InmuebleTemporal> = [];
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

    this.usuarioSesion = this.usuarioServicio.getUsuario();
    this.listar();
    this.listarDepartamentos();
    this.listarTipoInmuebles();
    this.listarZonas();
    this.listarVentaArriendo();
    this.busco = false;

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

  /**
   * Buscar un inmueble
   */
  buscarInmueble() {
      this.generico.buscar('inmueble', {'numero_matricula': this.numMatriculaBuscar}).subscribe(rta => {
        if (rta.data == null) {
          this.show = 1;
          this.msj = 'No existe el inmueble con ese numero de matricula: ' + this.numMatriculaBuscar;
        } else {
          let inmuebleTemporal = new InmuebleTemporal();
          this.busco = true;
          inmuebleTemporal = rta.data;
          this.buscarCiudad(inmuebleTemporal);
          this.llenarInmuebleBusqueda(inmuebleTemporal);
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
          this.generico.buscar('usuarios', {'persona': this.persona.id}).subscribe(res => {
            if (res.data != null) {
              this.usuarioCliente = res.data;
              this.registrar(form);
            } else {
              this.show = 1;
              this.msj = 'error, esta persona no tiene un usuario creado en nuestro sistema';
            }
          });
        }
      });
    } else {
      this.show = 1;
      this.msj = 'error, debe ingresar la cedula del propietaria';
    }
  }

  ver(e: InmuebleTemporal) {
    for ( const i of this.inmuebles) {
      if (e.id === i.id) {
        this.busco = true;
        this.buscarCiudad(i);
        this.llenarInmuebleBusqueda(i);
        return;
      }
    }
  }

  eliminar(e: Inmueble) {
    console.log('//////////// id del inmueble a eliminar /////////////  ' + e.id);
    this.generico.eliminar('inmueble', {'id': e.id}).subscribe(res => {
      if (res.data === 'exito') {
        this.show = 2;
        this.msj = 'El inmueble fue eliminado';
        this.listar();
      } else {
        this.show = 1;
        this.msj = 'no se pudo eliminar el inmueble ' + res.data;
      }
    });
  }

  editar(form: NgForm) {

    this.llenarInmuebleEditar();

    const aux: AuxiliarObjeto = new AuxiliarObjeto();
    aux.objeto = this.inmueble;
    aux.replaceValue('usuario', this.usuarioCliente.persona.id);
    aux.replaceValue('ciudad',  this.ciudadSeleccionada.id);
    aux.replaceValue('tipo', this.tipoInmuebleSeleccionado.id);

    this.generico.editar('inmueble', aux.objeto, 'id').subscribe(res => {
      if (res.data === 'exito') {
        this.busco = false;
        this.show = 2;
        this.msj = 'el inmueble se edito correctamente';
        this.inmueble = new Inmueble();
        form.reset();
        this.listar();
      } else {
        this.show = 1;
        this.msj = res.data;
      }
    });
  }

  /**
   * Lista todos los inmuebles
   */
  listar() {
    // Obtenemos la lista de inmuebles
    this.generico.listar('inmueble', {'estado': 1}).subscribe(rta => {
    if ( rta.data != null ) {
      this.inmuebles = rta.data;
      // tslint:disable-next-line:prefer-const
      for (let e of this.inmuebles) {
        // obtenemos el cargo del empleado
        this.generico.buscar('usuarios', {'persona': e.usuario}).subscribe(rta2 => {
          e.usuario = rta2.data;
          this.generico.buscar('personas', {'id': e.usuario.persona}).subscribe(res => {
            e.usuario.persona = res.data;
          });
        });
      }
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

  buscarCiudad(inmuebleTemporal: InmuebleTemporal) {
    this.generico.buscar('ciudades', {'id': inmuebleTemporal.ciudad}).subscribe(res => {
      this.ciudadSeleccionada = res.data;
      this.generico.buscar('departamentos', {'id': this.ciudadSeleccionada.departamento}).subscribe(res2 => {
        this.departamentoSeleccionado = res2.data;
        this.listarCiudades();
      });
    });
  }

  cambio(cambiar: boolean): boolean {
    if (cambiar === null) {
      return false;
    }
    return true;
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
    this.inmueble.administrador = this.usuarioSesion;
    this.inmueble.ascensor = this.theCheckboxAsensor;
    this.inmueble.canchasDepor = this.theCheckboxCanchasDepor;
    this.inmueble.zonasHumedas = this.theCheckboxZonasHumedas;
    this.inmueble.zonaInfantil = this.theCheckboxZonaInfantil;
    this.inmueble.jardines = this.theCheckboxJardines;
    this.inmueble.transporteCercano = this.theCheckboxTransporteCercano;
    this.inmueble.precioNegociable = this.theCheckboxPrecioNegociable;
    this.inmueble.zonaRopas =  this.theCheckboxZonasRopas;
    this.inmueble.parqueadero = this.theCheckboxParqueadero;
    this.inmueble.deposito = this.theCheckboxDeposito;
    this.inmueble.estudio = this.theCheckboxEstudio;
    this.inmueble.cuartoServicio = this.theCheckboxCuartoServicio;
    this.inmueble.chimenea = this.theCheckboxChimenea;
    this.inmueble.cocinaAC = this.theCheckboxCocinaAC;
    this.inmueble.comedorIndependiente = this.theCheckboxComedorIndependiente;
    this.inmueble.vistaExterior = this.theCheckboxVistaExterios;
  }

  llenarInmuebleEditar() {
    this.inmueble.usuario = this.usuarioCliente;
    this.inmueble.tipoAV = this.tipoAVSeleccionado.id;
    this.inmueble.zona = this.zonaSeleccionada.id;
    this.inmueble.ciudad = this.ciudadSeleccionada;
    this.inmueble.tipo = this.tipoInmuebleSeleccionado;
    this.inmueble.ascensor = this.cambio(this.theCheckboxAsensor);
    this.inmueble.canchasDepor = this.cambio(this.theCheckboxCanchasDepor);
    this.inmueble.zonasHumedas = this.cambio(this.theCheckboxZonasHumedas);
    this.inmueble.zonaInfantil = this.cambio(this.theCheckboxZonaInfantil);
    this.inmueble.jardines = this.cambio(this.theCheckboxJardines);
    this.inmueble.transporteCercano = this.cambio(this.theCheckboxTransporteCercano);
    this.inmueble.precioNegociable = this.cambio(this.theCheckboxPrecioNegociable);
    this.inmueble.zonaRopas =  this.cambio(this.theCheckboxZonasRopas);
    this.inmueble.parqueadero = this.cambio(this.theCheckboxParqueadero);
    this.inmueble.deposito = this.cambio(this.theCheckboxDeposito);
    this.inmueble.estudio = this.cambio(this.theCheckboxEstudio);
    this.inmueble.cuartoServicio = this.cambio(this.theCheckboxCuartoServicio);
    this.inmueble.chimenea = this.cambio(this.theCheckboxChimenea);
    this.inmueble.cocinaAC = this.cambio(this.theCheckboxCocinaAC);
    this.inmueble.comedorIndependiente = this.cambio(this.theCheckboxComedorIndependiente);
    this.inmueble.vistaExterior = this.cambio(this.theCheckboxVistaExterios);
  }

  llenarInmuebleBusqueda(inmuebleTemporal: InmuebleTemporal) {

    console.log('inmueble tipo busqueda --- ' + inmuebleTemporal.tipo);
    console.log('inmueble zona busqueda --- ' + inmuebleTemporal.zona);

    this.usuarioCliente = inmuebleTemporal.usuario;
    this.getTipoInmueble(inmuebleTemporal);
    this.zonaSeleccionada.id = inmuebleTemporal.zona;
    this.tipoAVSeleccionado.id = inmuebleTemporal.tipoAV;
    this.inmueble.anoconstruccion = inmuebleTemporal.anoconstruccion;
    this.inmueble.id = inmuebleTemporal.id;
    this.inmueble.direccion = inmuebleTemporal.direccion;
    this.inmueble.numero_matricula = inmuebleTemporal.numero_matricula;
    this.inmueble.area = inmuebleTemporal.area;
    this.inmueble.valor = inmuebleTemporal.valor;
    this.inmueble.banios = inmuebleTemporal.banios;
    this.inmueble.estado = inmuebleTemporal.estado;
    this.inmueble.garajes = inmuebleTemporal.garajes;
    this.inmueble.habitaciones = inmuebleTemporal.habitaciones;
    this.inmueble.detalles = inmuebleTemporal.detalles;
    this.inmueble.anoconstruccion = inmuebleTemporal.anoconstruccion;
    this.inmueble.tipoCortinas = inmuebleTemporal.tipoCortinas;
    this.inmueble.fechaAprobacion = inmuebleTemporal.fechaAprobacion;
    this.theCheckboxAsensor = this.booleanComp(inmuebleTemporal.ascensor);
    this.theCheckboxCanchasDepor = this.booleanComp(inmuebleTemporal.canchasDepor);
    this.theCheckboxZonasHumedas = this.booleanComp(inmuebleTemporal.zonasHumedas);
    this.theCheckboxZonaInfantil = this.booleanComp(inmuebleTemporal.zonaInfantil);
    this.theCheckboxJardines = this.booleanComp(inmuebleTemporal.jardines);
    this.theCheckboxTransporteCercano = this.booleanComp(inmuebleTemporal.transporteCercano);
    this.theCheckboxPrecioNegociable = this.booleanComp(inmuebleTemporal.precioNegociable);
    this.theCheckboxZonasRopas = this.booleanComp(inmuebleTemporal.zonasRopas);
    this.theCheckboxParqueadero = this.booleanComp(inmuebleTemporal.parqueadero);
    this.theCheckboxDeposito = this.booleanComp(inmuebleTemporal.deposito);
    this.theCheckboxEstudio = this.booleanComp(inmuebleTemporal.estudio);
    this.theCheckboxCuartoServicio = this.booleanComp(inmuebleTemporal.cuartoServicio);
    this.theCheckboxChimenea = this.booleanComp(inmuebleTemporal.chimenea);
    this.theCheckboxCocinaAC = this.booleanComp(inmuebleTemporal.cocinaAC);
    this.theCheckboxComedorIndependiente = this.booleanComp(inmuebleTemporal.comedorIndependiente);
    this.theCheckboxVistaExterios = this.booleanComp(inmuebleTemporal.vistaExterior);

  }

  getTipoInmueble(inm: InmuebleTemporal) {
    this.generico.buscar('tipo_inmueble', {'id': inm.tipo}).subscribe(res => {
      this.tipoInmuebleSeleccionado = res.data;
      console.log(this.tipoInmuebleSeleccionado.id);
      console.log(this.tipoInmuebleSeleccionado.nombre);
      this.prueba(this.tipoInmuebleSeleccionado.id);
    });
  }

  prueba(num: number) {
    for (const o of this.tiposInmueble) {
      if (o.id === num) {
        console.log(o.id);
        console.log(o.nombre);
      }
    }
  }

  booleanComp(comp: string): boolean {
    if (comp === '1') {
      return true;
    }
    return null;
  }

  limpiarCampos(form: NgForm) {
    this.busco = false;
    this.numMatriculaBuscar = '';
    form.reset();
  }

  fechaActual(): string {

    // tslint:disable-next-line:prefer-const
    let dateFormat = require('dateformat');
    // tslint:disable-next-line:prefer-const
    let now = new Date();
    return dateFormat(now, 'yyyy/mm/dd');

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

  onFileSelected(event) {
    this.file = event.target.files;
  }

  buscarInmuebleArchivo(form: NgForm) {
    this.generico.buscar('inmueble', {'numero_matricula': this.numMatriculaBuscar}).subscribe(res => {
      if (res.data != null) {
        this.inmuebleArchivo = res.data;
        console.log('inmueble' + this.inmuebleArchivo.id);
        this.crearArchivo(this.inmuebleArchivo, form);
      } else {
        this.show = 1;
        this.msj = 'ERROR ' + res.data;
      }
    });
  }

  crearArchivo(inmueble: Inmueble, form: NgForm) {
    for (const fileC of this.file) {
      const ext = fileC.name.substr(fileC.name.lastIndexOf('.') + 1);
      if (ext === 'jpg' || ext === 'png' || ext === 'jpeg') {
        this.convertirArchivoBase64(fileC, true, inmueble, form);
      } else if (ext === 'mp4') {

      } else {
        this.show = 404;
        this.msj = 'El archivo ' + fileC.name + ' tiene una extensión no permitida';
      }
    }
  }

  convertirArchivoBase64(file: File, imgn: boolean, inmueble: Inmueble, form: NgForm) {
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.img = myReader.result;
      // tslint:disable-next-line:prefer-const
      const archivoIngresado: Archivo = new Archivo();
      archivoIngresado.nombre = this.img;
      archivoIngresado.inmueble = inmueble;
      if (imgn) {
        archivoIngresado.tipo = 0;
      } else {
        archivoIngresado.tipo = 1;
      }
      this.generico.registrar('archivo_inmueble', archivoIngresado)
      .subscribe(res => {
        if (res.data === 'exito') {
          this.show = 2;
          this.msj = 'El archivo se registro correctamente';
          form.reset();
        } else {
          this.show = 1;
          this.msj = 'ERROR, no se pudo registrar ' + res.data;
        }
      });
    };
    myReader.readAsDataURL(file);
  }


}
