import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuscarItemsService {

  @Output() cambioResultados: EventEmitter<string>;
  private url: string = environment.apiUser;
  carrito:any;

  constructor(
    private http: HttpClient
  ) {
    this.cambioResultados= new EventEmitter();
   }

   public consultarItemsCliente(id:string|null){
      return this.http.get(this.url+"/carrito?id="+id)
   }

   public cambiarResultados(resultado:any ){
      this.carrito=resultado;
      this.notificar();
   }


   public notificar(){
    this.cambioResultados.emit(this.carrito);
  }
}
