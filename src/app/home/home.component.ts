import { BuscarProductosService } from './buscarProductos/buscar-productos.service';
import { VisibilidadFooterService } from './../generales/footer/visibilidad-footer.service';
import { VisibilidadHeaderService } from './../generales/header/visibilidadHeader.service';
import { VisibilidadRolService } from './visibilidadRol/visibilidad-rol.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import {CargarItemService} from './cargar-item/cargar-item.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paginaActual:number;

  esVendedor: string="";
  formulario: FormGroup|null;
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
    private buscarProductosService:BuscarProductosService,
    private formBuilder: FormBuilder,
    private cargarItemService:CargarItemService
  ) {

    this.esVendedor="";
    this.formulario=null;
    this.paginaActual=0;

   }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.visibilidadRolService.cambioDeVisibilidad.subscribe((estadoVisibleVendedor: string) =>{
      this.esVendedor = estadoVisibleVendedor;
      this.visibilidadHeaderService.activarHeader();
      this.visibilidadFooterService.activarFooter();
    });

    this.buscarProductosService.cambioResultados.subscribe((productos:any)=>{
      this.productos=productos;
    })

    this.visibilidadRolService.rolVisibilidad();
    if(localStorage.getItem('rol')==='vendedor'){
          this.buscarProductosService.consultarProductosVendedor(localStorage.getItem('id'),this.paginaActual).subscribe((productos:any)=>{
            this.buscarProductosService.actualizarProductos(productos._embedded.productoes);
          })
    }else{

        this.buscarProductosService.consultarProductosCliente(this.paginaActual).subscribe((productos:any)=>{
          this.buscarProductosService.actualizarProductos(productos._embedded.productoes);
        })
    }


    this.buscarProductosService.cambioResultados.subscribe((productos:any)=>{
      this.productos=productos;
    })


  }

 public inicializarFormulario(){
  this.formulario= this.formBuilder.group(
    {
    cantidad:['', Validators.required]
    }
  )
 }

 public crearItem(id_producto:any){
  var cantidad= this.formulario?.get('cantidad')?.value;
  this.cargarItemService.crearItem(id_producto,cantidad).subscribe();

 }

 public paginaSig(){
  console.log(this.paginaActual);
  this.paginaActual=this.paginaActual+1;
  if(localStorage.getItem('rol')==='vendedor'){
    this.buscarProductosService.consultarProductosVendedor(localStorage.getItem('id'),this.paginaActual).subscribe((resultado:any)=>{
      this.buscarProductosService.actualizarProductos(resultado._embedded.productoes);

    })

    ;
  }else{
     this.buscarProductosService.consultarProductosCliente(this.paginaActual).subscribe((resultado:any)=>{
      this.buscarProductosService.actualizarProductos(resultado._embedded.productoes);
     }

     )

  }
 }

 public paginaAnt(){
    if(this.paginaActual==0){

    }else{
      this.paginaActual=this.paginaActual-1;
    if(localStorage.getItem('rol')==='vendedor'){
      this.buscarProductosService.consultarProductosVendedor(localStorage.getItem('id'),this.paginaActual).subscribe((resultado:any)=>{
        this.buscarProductosService.actualizarProductos(resultado._embedded.productoes);
      });
    }else{
       this.buscarProductosService.consultarProductosCliente(this.paginaActual).subscribe((resultado:any)=>{
        this.buscarProductosService.actualizarProductos(resultado._embedded.productoes);

       }
       );
    }


    }
 }
}
