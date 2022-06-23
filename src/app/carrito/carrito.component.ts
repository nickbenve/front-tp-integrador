import { Component, OnInit } from '@angular/core';
import { VisibilidadHeaderService } from './../generales/header/visibilidadHeader.service';
import { VisibilidadFooterService } from './../generales/footer/visibilidad-footer.service';
import { BuscarItemsService } from './../generales/header/buscar-items.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public carrito:any;
  public items:any
  public precioSinDescuento:any;
  public precioConDescuento:any;
  constructor(
    private visibilidadFooterService:VisibilidadFooterService,
    private visibilidadHeaderService:VisibilidadHeaderService,
    private buscarItemsService:BuscarItemsService
     ) {

  }

  ngOnInit() {
    this.visibilidadHeaderService.activarHeader();
    this.visibilidadFooterService.activarFooter();

    this.buscarItemsService.cambioResultados.subscribe((carritoo:any)=>{
      this.carrito=carritoo;
      this.items=carritoo.items;
      this.precioSinDescuento=carritoo.precioTotalSinDescuento;

      this.precioConDescuento=carritoo.precioTotalConDescuento;

    })
    this.buscarItemsService.consultarItemsCliente(localStorage.getItem('id')).subscribe((resultado:any)=>{
      this.buscarItemsService.cambiarResultados(resultado);

    })

  }

}
