import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargarItemService {
  private url: string = environment.apiUser;


  constructor(
    private http: HttpClient
  ) {

  }

  public crearItem(id_prod:any,cant:any){
    localStorage.getItem('id')

    return this.http.post(this.url+'/carrito/'+localStorage.getItem('id')+'/carritoDeCompras/items/'+id_prod+'/'+cant,
      {

      }
    )
  }
}
