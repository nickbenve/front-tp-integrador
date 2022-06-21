import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadRolService {

  private estadoVisibleVendedor: string;

  @Output() cambioDeVisibilidad: EventEmitter<string>;

  private url: string = environment.apiUser;



  constructor(
    private http: HttpClient
  ) {

    this.estadoVisibleVendedor="";
    this.cambioDeVisibilidad= new EventEmitter();

  }



  public activarVisibilidadVendedor(){

    this.estadoVisibleVendedor= "vendedor";
    this.notificarCambio();
  }


  public desActivarVisibilidadVendedor(){

    this.estadoVisibleVendedor= "cliente";
    this.notificarCambio();
  }



public verificarLog(){
  return this.http.get(this.url+'/login?usuario=hola&contrasenia=cami');
}


  public rolVisibilidad(rol:string){

    if(rol == "vendedor"){
      this.activarVisibilidadVendedor();
    }else{
      this.desActivarVisibilidadVendedor();
    }

  }

  private notificarCambio(){
    this.cambioDeVisibilidad.emit(this.estadoVisibleVendedor);
  }
}
