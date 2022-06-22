import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadRolService {

  private estadoVisibleVendedor: string|null;

  @Output() cambioDeVisibilidad: EventEmitter<string>;

  private url: string = environment.apiUser;



  constructor(
    private http: HttpClient
  ) {

    this.cambioDeVisibilidad= new EventEmitter();
    this.estadoVisibleVendedor="";

  }



  public activarVisibilidadVendedor(){
    this.estadoVisibleVendedor= "vendedor";
    this.notificarCambio();
  }


  public desActivarVisibilidadVendedor(){

    this.estadoVisibleVendedor= "cliente";

    this.notificarCambio();
  }



public verificarLog(usuario:string,contrasenia:string){
  return this.http.get(this.url+'/login?usuario='+usuario+'&contrasenia='+contrasenia);
}
public error(){
  this.estadoVisibleVendedor="error";

  this.notificarCambio();
}


  public rolVisibilidad(){
    if(localStorage.getItem('rol') == "vendedor"){
      console.log(localStorage.getItem('rol'));
      this.activarVisibilidadVendedor();
    }else{
      if(localStorage.getItem('rol') == "cliente"){
        console.log(localStorage.getItem('rol'));
        this.desActivarVisibilidadVendedor();
      }else{
        this.error();
      }

    }
  }

  private notificarCambio(){
    if(this.estadoVisibleVendedor!=null){
      this.cambioDeVisibilidad.emit(this.estadoVisibleVendedor);
    }

  }
}
