import { VisibilidadRolService } from './../../home/visibilidadRol/visibilidad-rol.service';
import { VisibilidadHeaderService } from './visibilidadHeader.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BuscarItemsService } from './buscar-items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeaderComponent implements OnInit {


  estaActivo: boolean;
  esVendedor:string;
  constructor(
    private visibilidadHeaderService: VisibilidadHeaderService,
    private visibilidadRolService: VisibilidadRolService,
    private buscarItemsService:BuscarItemsService
  ) {
    this.estaActivo=true;
    this.esVendedor="";
  }

  ngOnInit(): void {
    this.visibilidadHeaderService.cambioDeVisibilidad.subscribe((estaVisible: boolean) =>{
      this. estaActivo=estaVisible;
    })

    this.visibilidadRolService.cambioDeVisibilidad.subscribe((tipoRol:string)=>{
      this.esVendedor=tipoRol;
    })


  }



}
