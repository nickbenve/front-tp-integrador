import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargaProductoService {
  private url: string = environment.apiUser;

  constructor(
    private http: HttpClient
  ) {

  }


  public cargaProducto(nombre:string,descripcion:string,precio:number,moneda:string,stock :number,imagenURL:string){
    var monedaBoolean;
    if(moneda==='pesos'){
      monedaBoolean=true;
    }else{
      monedaBoolean=false;
    }
    return this.http.post(this.url+'/vendedor/'+localStorage.getItem('id')+'/productos',
      {
        'nombre':nombre,
        'descripcion':descripcion,
        'precio':precio,
        'stock':stock,
        'idProveedor':2,
        'foto':imagenURL,
        'esPesos':monedaBoolean
      }
    )
  }
}
