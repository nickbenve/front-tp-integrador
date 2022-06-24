import { Component, OnInit } from '@angular/core';
import { VisibilidadHeaderService } from './../generales/header/visibilidadHeader.service';
import { VisibilidadFooterService } from './../generales/footer/visibilidad-footer.service';
import { BuscarItemsService } from './../generales/header/buscar-items.service';
import { AgregarDescService } from './agregarDesc/agregar-desc.service';
import { AgregarMetService } from './agregarMet/agregar-met.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  formularioMeto: FormGroup|null;
  formularioDesc: FormGroup|null;

  codigoDescuento: string;
  constructor(
    private visibilidadFooterService:VisibilidadFooterService,
    private visibilidadHeaderService:VisibilidadHeaderService,
    private buscarItemsService:BuscarItemsService,
    private formBuilder: FormBuilder,
    private agregarDescService:AgregarDescService,
    private agregarMetService:AgregarMetService
     ) {
this.formularioMeto=null;
this.formularioDesc=null;
  this.codigoDescuento="";
  }

  ngOnInit() {
    this.visibilidadHeaderService.activarHeader();
    this.visibilidadFooterService.activarFooter();
    this.inicializarFormularioMetodo();
    this.buscarItemsService.cambioResultados.subscribe((carritoo:any)=>{
      this.carrito=carritoo;
      this.items=carritoo.items;
      this.precioSinDescuento=carritoo.precioTotalSinDescuento;

      this.precioConDescuento=carritoo.precioTotalConDescuento;

    })
    this.buscarItemsService.cambioResultados.subscribe((resultado:any)=>{
      this.carrito=resultado;
      this.items=resultado.items;
      this.precioConDescuento=resultado.precioTotalConDescuento;
      this.precioSinDescuento=resultado.precioTotalSinDescuento;
    })

    this.buscarItemsService.consultarItemsCliente(localStorage.getItem('id')).subscribe((resultado:any)=>{
      this.buscarItemsService.cambiarResultados(resultado);

    })

  }

  public inicializarFormularioMetodo(){
    this.formularioMeto= this.formBuilder.group(
      {
      metodo:['', Validators.required]
      }
    )
    this.formularioDesc=this.formBuilder.group(
      {
        descuento:['', Validators.required]
      }
    )
  }

  public guardar(){
    var metodoP = this.formularioMeto?.get('metodo')?.value;
    this.agregarMetService.agregarMetodo(metodoP).subscribe(()=>{
      console.log("aca");
      this.buscarItemsService.consultarItemsCliente(localStorage.getItem('id')).subscribe((resultado:any)=>{this.buscarItemsService.cambiarResultados(resultado)});
    });
    console.log(metodoP);
  }

  public guardarDescuento(){
    console.log(this.codigoDescuento);
    this.agregarDescService.agregarDesc(this.codigoDescuento).subscribe((resultado:any)=>
    {
      this.buscarItemsService.consultarItemsCliente(localStorage.getItem('id')).subscribe((resultado:any)=>{this.buscarItemsService.cambiarResultados(resultado)});
    });
}
}
