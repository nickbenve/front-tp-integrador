import { BuscarProductosService } from './buscarProductos/buscar-productos.service';
import { VisibilidadFooterService } from './../generales/footer/visibilidad-footer.service';
import { VisibilidadHeaderService } from './../generales/header/visibilidadHeader.service';
import { VisibilidadRolService } from './visibilidadRol/visibilidad-rol.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  esVendedor: string="";

  productos :any;

  /*[
    { nombre: 'heladera', descripcion: 'blanca', precio: 50000},
    { nombre: 'cocina', descripcion: 'petiza', precio: 25000},
    { nombre: 'agua', descripcion: 'mineral', precio: 100},
    { nombre: 'celular', descripcion: 'blanca', precio: 40},
    { nombre: 'altavoz', descripcion: 'petiza', precio: 250400},
    { nombre: 'aagua', descripcion: 'mineral', precio: 1010},
    { nombre: 'v', descripcion: 'blanca', precio: 500200},
    { nombre: 'b', descripcion: 'petiza', precio: 250400}

  ];
*/
  constructor(

    private visibilidadRolService:VisibilidadRolService,
    private visibilidadHeaderService:VisibilidadHeaderService,
    private visibilidadFooterService:VisibilidadFooterService,
    private buscarProductosService:BuscarProductosService
  ) {

    this.esVendedor="";

   }

  ngOnInit(): void {


    this.visibilidadRolService.cambioDeVisibilidad.subscribe((estadoVisibleVendedor: string) =>{
      this.esVendedor = estadoVisibleVendedor;
      this.visibilidadHeaderService.activarHeader();
      this.visibilidadFooterService.activarFooter();

    });

    this.buscarProductosService.cambioResultados.subscribe((productos:any)=>{
      this.productos=productos;
    })

  }

}
