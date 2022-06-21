import { VisibilidadRolService } from './visibilidadRol/visibilidad-rol.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  esVendedor: string="";


  constructor(

    private visibilidadRolService:VisibilidadRolService
  ) {

    this.esVendedor="";

   }



  ngOnInit(): void {

    this.visibilidadRolService.cambioDeVisibilidad.subscribe((estadoVisibleVendedor: string) =>{

      this.esVendedor = estadoVisibleVendedor;

    });


    this.visibilidadRolService.verificarLog().subscribe((persona:any) =>{
      console.log(persona.rol);
      this.visibilidadRolService.rolVisibilidad(persona.rol);
    })


  }



}
