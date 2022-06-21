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


  constructor(

    private visibilidadRolService:VisibilidadRolService,
    private visibilidadHeaderService:VisibilidadHeaderService,
    private VisibilidadFooterService:VisibilidadFooterService
  ) {

    this.esVendedor="";

   }

  ngOnInit(): void {


    this.visibilidadRolService.cambioDeVisibilidad.subscribe((estadoVisibleVendedor: string) =>{
      this.esVendedor = estadoVisibleVendedor;
      this.visibilidadHeaderService.activarHeader();
      this.VisibilidadFooterService.activarFooter();

    });

  }

}
