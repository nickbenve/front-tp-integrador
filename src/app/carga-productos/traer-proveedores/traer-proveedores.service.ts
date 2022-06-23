import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TraerProveedoresService {

  private url: string = environment.apiUser;
  constructor(
    private http: HttpClient
  ) {

  }

  public getProveedores(){
    return this.http.get(this.url+'/proveedores');
  }
}
