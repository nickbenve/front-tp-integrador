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

  private items:any;
  constructor(
    private visibilidadFooterService:VisibilidadFooterService,
    private visibilidadHeaderService:VisibilidadHeaderService,
    private buscarItemsService:BuscarItemsService
     ) {

  }

  ngOnInit() {
    this.visibilidadHeaderService.activarHeader();
    this.visibilidadFooterService.activarFooter();

    this.buscarItemsService.cambioResultados.subscribe((iteem:any)=>{
        this.items=iteem;
    })
  }

}
