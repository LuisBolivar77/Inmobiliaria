import { Component, OnInit } from '@angular/core';
import { Inmueble } from 'src/app/Modelo/Inmueble';
import { Ciudad } from 'src/app/Modelo/Ciudad';
import { TipoInmueble } from 'src/app/Modelo/TipoInmueble';
import { Zona } from 'src/app/Modelo/Zona';
import { VentaArriendo } from 'src/app/Modelo/VentaArriendo';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Persona } from 'src/app/Modelo/Persona';
import { Departamento } from 'src/app/Modelo/Departamento';
import { InmuebleTemporal } from 'src/app/Modelo/InmuebleTemporal';
import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { UsuarioService } from 'src/app/Servicios/usuarioServ.service';
import { NgForm } from '@angular/forms';
import { Archivo } from 'src/app/Modelo/Archivo';

@Component({
  selector: 'app-inmueble-cliente',
  templateUrl: './inmueble-cliente.component.html',
  styleUrls: ['./inmueble-cliente.component.css']
})
export class InmuebleClienteComponent implements OnInit {

  file: File[] = null;
  img;
  labelFile: string;

  inmueble: Inmueble = new Inmueble();
  ciudadSeleccionada: Ciudad = new Ciudad();
  tipoInmuebleSeleccionado: TipoInmueble = new TipoInmueble();
  zonaSeleccionada: Zona = new Zona;
  tipoAVSeleccionado: VentaArriendo = new VentaArriendo;
  departamentoSeleccionado: Departamento = new Departamento();
  usuarioSesion: Usuario = new Usuario();
  inmuebleArchivo: Inmueble = new Inmueble();
  inmuebleTemporal: InmuebleTemporal = new InmuebleTemporal();

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
  inmueblesAprobados: Array<InmuebleTemporal> = [];
  inmueblesNoAprobados: Array<InmuebleTemporal> = [];
  departamentos: Array<Departamento> = [];

  show: number;
  msj: string;
  numMatriculaBuscar: string;
  busco: boolean;
  resul: string;

  constructor(private generico: GenericoService, private usuarioServicio: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioServicio.esAccesible('cliente/gestion-inmuebles');
    this.usuarioSesion = this.usuarioServicio.getUsuario();
    this.listarInmueblesAprobados();
    this.listarInmueblesNoAprobados();
    this.listarDepartamentos();
    this.listarTipoInmuebles();
    this.listarZonas();
    this.listarVentaArriendo();
    this.busco = false;
  }

  /**
   * Metodo que permite despues de buscar al usuario propietario
   * registrar un inmueble
   * @param form el formulario de los datos en el html
   */
  registrar(form: NgForm) {
    this.llenarInmueble();

    this.generico.registrar('inmueble', this.inmueble).subscribe(res => {
      if (res.data === 'exito') {
        this.msj = 'El inmueble se ha registrado correctamente';
        this.show = 2;
        this.listarInmueblesAprobados();
        this.listarInmueblesNoAprobados();
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
        this.busco = true;
        this.inmuebleTemporal = rta.data;
        this.buscarCiudad(this.inmuebleTemporal);
        this.llenarInmuebleBusqueda(this.inmuebleTemporal);
      }
    });
  }

  /**
   * permite editar un inmueble
   * @param form el formulario con datos del inmueble
   */
  editar(form: NgForm) {

    this.llenarInmuebleEditar();

    this.generico.editar('inmueble', this.inmueble, 'id').subscribe(res => {
      if (res.data === 'exito') {
        this.busco = false;
        this.show = 2;
        this.msj = 'el inmueble se edito correctamente';
        this.inmueble = new Inmueble();
        form.reset();
        this.listarInmueblesAprobados();
        this.listarInmueblesNoAprobados();
      } else {
        this.show = 1;
        this.msj = res.data;
      }
    });
  }

  /**
   * permite ver la info de un inmueble que este en la lista
   * de inmuebles
   * @param e el inmueble al cual se le quiere ver la info
   */
  verAprobados(e: InmuebleTemporal) {
    for ( const i of this.inmueblesAprobados) {
      if (e.id === i.id) {
        this.busco = true;
        this.buscarCiudad(i);
        this.llenarInmuebleBusqueda(i);
        return;
      }
    }
  }

  /**
   * permite ver la info de un inmueble que este en la lista
   * de inmuebles
   * @param e el inmueble al cual se le quiere ver la info
   */
  verNoAprobados(e: InmuebleTemporal) {
    for ( const i of this.inmueblesNoAprobados) {
      if (e.id === i.id) {
        this.busco = true;
        this.buscarCiudad(i);
        this.llenarInmuebleBusqueda(i);
        return;
      }
    }
  }

  /**
   * permite eliminar un inmueble que este en la lista de inmuebles
   * @param e el inmueble el cual se quiere eliminar
   */
  eliminarAprobados(e: Inmueble) {

    this.generico.eliminar('inmueble', {'id': e.id}).subscribe(res => {
      if (res.data === 'exito') {
        this.show = 2;
        this.msj = 'El inmueble fue eliminado';
        this.listarInmueblesAprobados();
        this.listarInmueblesNoAprobados();
      } else {
        this.show = 1;
        this.msj = 'no se pudo eliminar el inmueble ' + res.data;
      }
    });
  }

  /**
   * permite eliminar un inmueble que este en la lista de inmuebles
   * @param e el inmueble el cual se quiere eliminar
   */
  eliminarNoAprobados(e: Inmueble) {

    this.generico.eliminar('inmueble', {'id': e.id}).subscribe(res => {
      if (res.data === 'exito') {
        this.show = 2;
        this.msj = 'El inmueble fue eliminado';
        this.listarInmueblesAprobados();
        this.listarInmueblesNoAprobados();
      } else {
        this.show = 1;
        this.msj = 'no se pudo eliminar el inmueble ' + res.data;
      }
    });
  }

  /**
   * Lista los inmuebles de el ususario logeado y que ya estan
   * publicados
   */
  listarInmueblesAprobados() {
    this.generico.listar('inmueble', {'estado': 1, 'usuario': this.usuarioSesion.persona.id}).subscribe(rta => {
    if ( rta.data != null ) {
      this.inmueblesAprobados = rta.data;
      for (const e of this.inmueblesAprobados) {
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
   * Lista los inmuebles de el ususario logeado y que no estan
   * publicados
   */
  listarInmueblesNoAprobados() {
    this.generico.listar('inmueble', {'estado': 0, 'usuario': this.usuarioSesion.persona.id}).subscribe(rta => {
    if ( rta.data != null ) {
      this.inmueblesNoAprobados = rta.data;
      for (const e of this.inmueblesNoAprobados) {
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
   * permite buscar el objeto completo ciudad del
   * inmueble que se busco y obtener el departamento
   * de esa ciudad
   * @param inmuebleTemporal el inmueble que se encontro en la busqueda
   * y al cual se le esta buscando el objeto completo ciudad
   */
  buscarCiudad(inmuebleTemporal: InmuebleTemporal) {
    this.generico.buscar('ciudades', {'id': inmuebleTemporal.ciudad}).subscribe(res => {
      this.ciudadSeleccionada = res.data;
      this.generico.buscar('departamentos', {'id': this.ciudadSeleccionada.departamento}).subscribe(res2 => {
        this.departamentoSeleccionado = res2.data;
        this.listarCiudades();
      });
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
   * lista los departamentos
   */
  listarDepartamentos() {
    this.generico.listar('departamentos', null).subscribe(res => {
      this.departamentos = res.data;
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

  /**
   * permite llenar el objeto inmueble con la info
   * que se va a registrar
   */
  llenarInmueble() {

    this.inmueble.tipoAV = this.tipoAVSeleccionado.id;
    this.inmueble.zona = this.zonaSeleccionada.id;
    this.inmueble.ciudad = this.ciudadSeleccionada;
    this.inmueble.tipo = this.tipoInmuebleSeleccionado;
    this.inmueble.usuario = this.usuarioSesion;
    this.inmueble.estado = 0;
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

  /**
   * permite llena el obejto inmueble para se editado
   */
  llenarInmuebleEditar() {
    this.inmueble.usuario = this.usuarioSesion;
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

  /**
   * permite llena el un inmueble con la info que contiene
   * un inmueble temporal
   * @param inmuebleTemporal la info del inmueble que se encontro
   * en la BD
   */
  llenarInmuebleBusqueda(inmuebleTemporal: InmuebleTemporal) {

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
    });
  }

  /**
   * permite cambiar un boolean que se trae de la BD
   * que viene como uno y cero y convertirlo a un
   * boolean true o false
   * @param comp el dato que viene de la BD como 1 o 0
   */
  booleanComp(comp: string): boolean {
    if (comp === '1') {
      return true;
    }
    return null;
  }

  /**
   * permite cambian un null que en algunos momento
   * retorna el checkbox a false para guardarlo en
   * la BD
   * @param cambiar lo que puede contener un null
   */
  cambio(cambiar: boolean): boolean {
    if (cambiar === false || cambiar === null) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * permite limpiar los campos del formulario
   * @param form el formulario que contiene los campos a limpiar
   */
  limpiarCampos(form: NgForm) {
    this.busco = false;
    this.numMatriculaBuscar = '';
    form.reset();
  }

  /**
   * crea objetos ZONAS y llena una lista con ellos
   */
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

  /**
   * crea objetos VentaArriendo y llena una lista con ellos
   */
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

  // ---------------------- de aqui en adelante metodos para crear archivos de un inmueble -------------- //

  /**
   * obtiene la url del archivo que se selecciono
   */
  onFileSelected(event) {
    this.file = event.target.files;
  }

  /**
   * busca el inmueble al que se le va a registrar el archivo
   */
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

  /**
   * crea el archivo del inmueble
   * @param inmueble el inmueble al que se le va a registrar un archivo
   * @param form el formulario con los campos que se estan utilizando
   */
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

  /**
   * conviente el archivo a base64 y lo registra en la BD
   */
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

  /**
  imprimirInmueble() {
    console.log('admin: ' + this.inmueble.administrador.username);
    console.log('año construccion: ' + this.inmueble.anoconstruccion);
    console.log('area: ' + this.inmueble.area);
    console.log('ascensor: ' + this.inmueble.ascensor);
    console.log('baños: ' + this.inmueble.banios);
    console.log('Cancha depor: ' + this.inmueble.canchasDepor);
    console.log('chimenea: ' + this.inmueble.chimenea);
    console.log('ciudad: ' + this.inmueble.ciudad);
    console.log('cocinaAC: ' + this.inmueble.cocinaAC);
    console.log('comedor independiente: ' + this.inmueble.comedorIndependiente);
    console.log('cuarto servicios: ' + this.inmueble.cuartoServicio);
    console.log('deposito: ' + this.inmueble.deposito);
    console.log('detalles: ' + this.inmueble.detalles);
    console.log('direccion: ' + this.inmueble.direccion);
    console.log('estado: ' + this.inmueble.estado);
    console.log('estudio: ' + this.inmueble.estudio);
    console.log('fecha aprobacion: ' + this.inmueble.fechaAprobacion);
    console.log('garajes: ' + this.inmueble.garajes);
    console.log('habitaciones: ' + this.inmueble.habitaciones);
    console.log('chimenea: ' + this.inmueble.jardines);
    console.log('numero matricula: ' + this.inmueble.numero_matricula);
    console.log('parqueadero: ' + this.inmueble.parqueadero);
    console.log('precio negociable: ' + this.inmueble.precioNegociable);
    console.log('tipoAV: ' + this.inmueble.tipoAV);
    console.log('tipo cortinas: ' + this.inmueble.tipoCortinas);
    console.log('transporte cercano: ' + this.inmueble.transporteCercano);
    console.log('usuario: ' + this.inmueble.usuario);
    console.log('valor: ' + this.inmueble.valor);
    console.log('vista exterios: ' + this.inmueble.vistaExterior);
    console.log('zona: ' + this.inmueble.zona);
    console.log('zona infantil: ' + this.inmueble.zonaInfantil);
    console.log('zona ropas: ' + this.inmueble.zonaRopas);
    console.log('zonas humedas: ' + this.inmueble.zonasHumedas);
  }
  */

}
