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
  //http://localhost:8080/productos?page=0&size=2
  public consultarProductosCliente(nro:any){
    return this.http.get(this.url+'/productos'+'?page='+nro+'&size=8');
  }

  public consultarProductosVendedor(id:string|null,nroPag:any){
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
