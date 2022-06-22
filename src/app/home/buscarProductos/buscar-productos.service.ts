import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscarProductosService {


  @Output() cambioResultados: EventEmitter<string>;

  private url: string = environment.apiUser;
  private productos:any;

  constructor(
    private http: HttpClient

  ) {
    this.cambioResultados= new EventEmitter();
  }

  public consultarProductosCliente(){
    return this.http.get(this.url+'/productos');
  }

  public consultarProductosVendedor(id:string|null){
    return this.http.get(this.url+'/vendedores/'+id+'/productos');
  }

  public notificarCambio(){
    this.cambioResultados.emit(this.productos);
  }

  public actualizarProductos(productos:any){
    this.productos=productos;
    this.notificarCambio();
  }
}
