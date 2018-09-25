import { GenericoService } from './../../../Servicios/genericoServ.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inmuebles-admin',
  templateUrl: './inmuebles-admin.component.html',
  styleUrls: ['./inmuebles-admin.component.css']
})
export class InmueblesAdminComponent implements OnInit {

  file: File[];

  constructor(private generico: GenericoService) { }

  ngOnInit() {
    this.registrar();
  }

  onFileSelected(event) {
    this.file = event.target.files;
  }

  registrar() {
    this.generico.registrar('inmueble', {
      'numero_matricula': '1234',
        'direccion': 'sdnkand',
        'area': '21312',
        'valor': '1',
        'banios': '1',
        'estado': '1',
        'tipoVentaArrendo': 'venta',
        'garajes': '1',
        'antiguedad': '1',
        'detalles': '1',
        'añoConstruccion': '1',
        'ascensor': '1',
        'canchas_deportivas': '1',
        'zonas_humedas': '1',
        'zona_infantil': '1',
        'jardines': '1',
        'transporte_publico_cercano': '1',
        'precio_negociable': '1',
        'zona_ropas': '1',
        'parqueadero': '1',
        'deposito': '1',
        'estudio': '1',
        'tipo_cortinas': 'kjbvhguv',
        'cuarto_servicio': '1',
        'chimenea': '1',
        'cocinaAbiertaCerrada': '1',
        'comedorIndependiente': '1',
        'vista_exterior_interior': '1',
        'zona': '1',
        'aprobacion_fecha': '1',
        'Tipo': '1',
        'Ciudad': '1',
        'Usuario': '1'
      }).subscribe(rta => {
      window.alert(rta.data);
    });
  }

}
