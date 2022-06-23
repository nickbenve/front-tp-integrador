import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VisibilidadFooterService } from './../generales/footer/visibilidad-footer.service';
import { VisibilidadHeaderService } from './../generales/header/visibilidadHeader.service';
import { HttpClient } from '@angular/common/http';
@Component({
  templateUrl: './carga-productos.component.html',
  styleUrls: ['./carga-productos.component.css']
})
export class CargaProductosComponent implements OnInit {
  formulario: FormGroup|null;
  constructor(
    private visibilidadHeaderService:VisibilidadHeaderService,
    private visibilidadFooterService:VisibilidadFooterService,
    private formBuilder:FormBuilder

  ) {
    this.formulario=null;

   }

  ngOnInit(
  ){
    this.visibilidadHeaderService.activarHeader();
    this.visibilidadFooterService.activarFooter();
    this.inicializarFormulario();

  }


  private inicializarFormulario(){
    this.formulario= this.formBuilder.group(
      {
      nombre:['', Validators.required],
      descripcion:['', Validators.required],
      precio:['', Validators.required],
      stock:['', Validators.required],
      moneda:['', Validators.required],
      imagenURL:['', Validators.required]
      }
    )
  }

  public guardarProducto(){
    var nombre = this.formulario?.get('nombre')?.value;
    var descripcion = this.formulario?.get('descripcion')?.value;
    var precio = this.formulario?.get('precio')?.value;
    var moneda= this.formulario?.get('moneda')?.value;
    var stock= this.formulario?.get('stock')?.value;
    var imagenURL=this.formulario?.get('imagenURL')?.value;
    console.log(nombre+' '+descripcion+' '+precio+' '+moneda+' '+stock+' '+imagenURL)
  }
}
