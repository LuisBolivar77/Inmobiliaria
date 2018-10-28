import { Component, OnInit } from '@angular/core';
import { GenericoService } from 'src/app/Servicios/genericoServ.service';
import { UsuarioService } from 'src/app/Servicios/usuarioServ.service';
import { ReservarVisita } from 'src/app/Modelo/ReservarVisita';
import { Inmueble } from 'src/app/Modelo/Inmueble';

@Component({
  selector: 'app-generar-reportes',
  templateUrl: './generar-reportes.component.html',
  styleUrls: ['./generar-reportes.component.css']
})
export class GenerarReportesComponent implements OnInit {

  //Lista de reservas de visitas
  reservarVis: Array<ReservarVisita> = [];
  //Lista de inmuebles
  inmuebles: Array<Inmueble> = [];
  //Lista de reservas de visitas final
  reservarVista: Array<ReservarVisita> = [];
  //Lista de inmuebles final
  inmueblesFinal: Array<Inmueble> = [];

  //constructor(private servicioGenerico: GenericoServiceService, private usuarioServicio: UsuarioServiceioService) { }
  constructor(private servicioGenerico: GenericoService, private usuarioServicio: UsuarioService) { }

  ngOnInit() {
    this.usuarioServicio.esAccesible('administracion/generar-reportes');
    this.listarVisitas();
    this.listarInmubles();
  }

  tableToExcel(table, EmployeeList) {
    let uri = 'data:application/vnd.ms-excel;base64,'
      , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
      , base64 = function (s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))) }
      , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
    if (!table.nodeType) table = document.getElementById(table)
    var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
    window.location.href = uri + base64(format(template, ctx))
  }

  cambiarFecha(fecha: string): string {
    const data = fecha.split('T');
    const fechaReturn = data[0];

    return fechaReturn;
  }

  siONo(valor: string) {
    if (valor == '0') {
      return 'NO';
    } else if (valor == '1') {
      return 'SI';
    }
  }

  /**
   * Carga la lista de visitas registradas (estado 1 = publicado)
   */
  listarVisitas() {
    // Obtenemos la lista de visitas
    this.servicioGenerico.listar('reservar_visita', null).subscribe(r => {
      if (r.data != null) {
        // reserva visitas
        this.reservarVis = r.data;
      }
      this.agregarObjetos(this.reservarVis);
    });
  }

  /**
   * Carga la lista de visitas registradas (estado 1 = publicado)
   */
  listarInmubles() {
    // Obtenemos la lista de visitas
    this.servicioGenerico.listar('inmueble', null).subscribe(r => {
      if (r.data != null) {
        // reserva visitas
        this.inmuebles = r.data;
        this.agregarObjetosInmuebles(this.inmuebles);
      }

    });
  }

  /**
   * Agrega objetos a las visitas reservadas
   * @param lista
   */
  agregarObjetos(lista) {
    for (const i of lista) {
      // Obtenemos inmueble
      this.servicioGenerico.buscar('inmueble', { 'id': i.inmueble }).subscribe(r1 => {
        // Setteamos el inmueble
        i.inmueble = r1.data;
      });
      // Obtenemos el cliente
      this.servicioGenerico.buscar('personas', { 'id': i.cliente }).subscribe(r2 => {
        // Setteamos el cliente
        i.cliente = r2.data;
      });
      // Obtenemos el empleado
      this.servicioGenerico.buscar('personas', { 'id': i.empleado }).subscribe(r3 => {
        // Setteamos el empleado
        i.empleado = r3.data;
      });

      i.fecha = this.cambiarFecha(i.fecha);
      this.reservarVista.push(i);
    }
  }

  /**
   * Agrega objetos a las visitas reservadas
   * @param lista
   */
  agregarObjetosInmuebles(lista) {
    for (const i of lista) {
      i.ascensor = this.siONo(i.ascensor);
      i.canchasDepor = this.siONo(i.canchasDepor);
      i.zonasHumedas = this.siONo(i.zonasHumedas);
      i.zonaInfantil = this.siONo(i.zonaInfantil);
      i.jardines = this.siONo(i.jardines);
      i.transporteCercano = this.siONo(i.transporteCercano);
      i.precioNegociable = this.siONo(i.precioNegociable);
      i.zonaRopas = this.siONo(i.zonaRopas);
      i.parqueadero = this.siONo(i.parqueadero);
      i.deposito = this.siONo(i.deposito);
      i.estudio = this.siONo(i.estudio);
      i.tipoCortinas = this.siONo(i.tipoCortinas);
      i.cuartoServicio = this.siONo(i.cuartoServicio);
      i.chimenea = this.siONo(i.chimenea);
      i.cocinaAC = this.siONo(i.cocinaAC);
      i.comedorIndependiente = this.siONo(i.comedorIndependiente);
      i.vistaExterior = this.siONo(i.vistaExterior);
      i.zona = this.siONo(i.zona);

      // i.fechaAprobacion = this.cambiarFecha(i.fechaAprobacion);
      //  i.anoconstruccion = this.cambiarFecha(i.anoconstruccion);

      // Obtenemos el tipo de inmueble
      this.servicioGenerico.buscar('tipo_inmueble', { 'id': i.tipo }).subscribe(r1 => {
        // Setteamos el tipo de inmueble
        if (r1.data != null) {
          i.tipo = r1.data;
        }
      });
      // Obtenemos la ciudad
      this.servicioGenerico.buscar('ciudades', { 'id': i.ciudad }).subscribe(r2 => {
        // Setteamos la ciudad
        if (r2.data != null) {
          i.ciudad = r2.data;
        }
      });
      // Obtenemos el usuario
      this.servicioGenerico.buscar('usuarios', { 'id': i.usuario }).subscribe(r3 => {
        // Setteamos el usuario
        if (r3.data != null) {
          i.usuario = r3.data;
        }
      });

      // Obtenemos la promocion
      // if (i.promocion != '' || i.promocion!= null ) {
      if (i.promocion.id != '' || i.promocion.id != null ) {
        this.servicioGenerico.buscar('promocion', { 'id': i.promocion }).subscribe(r4 => {
          // Setteamos la promocion
          if (r4.data != null) {
            i.promocion = r4.data;
          }
        });
      }
       
      this.inmueblesFinal.push(i);
    }
  }


}
