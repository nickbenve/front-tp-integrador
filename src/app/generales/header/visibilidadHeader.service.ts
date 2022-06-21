import { VisibilidadRolService } from './../../home/visibilidadRol/visibilidad-rol.service';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadHeaderService {

  private estadoHeader: boolean;

  @Output() cambioDeVisibilidad: EventEmitter<boolean>;


  constructor(
      private visibilidadRolService:VisibilidadRolService
  ) {
    this.estadoHeader = true;
    this.cambioDeVisibilidad = new EventEmitter();
  }




  public desactivarHeader(){
    this.estadoHeader = false;
    this.notificar();

  }
  public activarHeader(){
    this.estadoHeader = true;
    this.notificar();
  }


  public notificar(){
    this.cambioDeVisibilidad.emit(this.estadoHeader);
  }

}
