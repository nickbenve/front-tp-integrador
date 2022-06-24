import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnviarConfirService {
  private url: string = environment.apiUser;
  constructor(
    private http: HttpClient
  ) {

   }

   public enviarConfir(){
     return this.http.post(
      this.url+'/orden/'+localStorage.getItem('id'),
      {
      });

   }
  }
