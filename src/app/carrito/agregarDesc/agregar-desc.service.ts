import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgregarDescService {
  private url: string = environment.apiUser;
  constructor(
    private http: HttpClient
  ) { }

  public agregarDesc(descuento:string){
      return this.http.post(
        this.url+'/carrito/'+localStorage.getItem('id')+'/carritoDeCompras/descuentos/'+ descuento,
       {

       }
      )

  }

}
