import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VisibilidadFooterService } from './../generales/footer/visibilidad-footer.service';
import { VisibilidadHeaderService } from './../generales/header/visibilidadHeader.service';
import { HttpClient } from '@angular/common/http';
import {CargaProductoService} from './carga-producto/carga-producto.service'
import {BuscarProductosService} from './../home/buscarProductos/buscar-productos.service'
import {TraerProveedoresService} from './traer-proveedores/traer-proveedores.service'
@Component({
  templateUrl: './carga-productos.component.html',
  styleUrls: ['./carga-productos.component.css']
})
export class CargaProductosComponent implements OnInit {
  formulario: FormGroup|null;

  public proveedores:any;

  constructor(
    private visibilidadHeaderService:VisibilidadHeaderService,
    private visibilidadFooterService:VisibilidadFooterService,
    private formBuilder:FormBuilder,
    private cargaProductoService:CargaProductoService,
    private buscarProductosService:BuscarProductosService,
    private traerProveedoresService:TraerProveedoresService


  ) {
    this.formulario=null;

   }

  ngOnInit(
  ){
    this.visibilidadHeaderService.activarHeader();
    this.visibilidadFooterService.activarFooter();
    this.inicializarFormulario();

    this.traerProveedoresService.getProveedores().subscribe((resultado:any)=>{
      this.proveedores=resultado._embedded.proveedors;
    })
  }


  private inicializarFormulario(){
    this.formulario= this.formBuilder.group(
      {
      nombre:['', Validators.required],
      descripcion:['', Validators.required],
      precio:['', Validators.required],
      stock:['', Validators.required],
      moneda:['', Validators.required],
      imagenURL:['', Validators.required],
      proveedorElegido:['', Validators.required]
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
    var prov=this.formulario?.get('proveedorElegido')?.value;
    console.log(this.formulario?.get('proveedorElegido')?.value);
    console.log(nombre+' '+descripcion+' '+precio+' '+moneda+' '+stock+' '+imagenURL)
    this.cargaProductoService.cargaProducto(nombre,descripcion,precio,moneda,prov,stock,imagenURL).subscribe(()=>{
      if(localStorage.getItem('rol')==='vendedor'){
        this.buscarProductosService.consultarProductosVendedor(localStorage.getItem('id'),0).subscribe((productos:any)=>{
          this.buscarProductosService.actualizarProductos(productos._embedded.productoes);
        })
       }else{

      this.buscarProductosService.consultarProductosCliente(0).subscribe((productos:any)=>{
        this.buscarProductosService.actualizarProductos(productos._embedded.productoes);
      })
  }
    })

  }
}
