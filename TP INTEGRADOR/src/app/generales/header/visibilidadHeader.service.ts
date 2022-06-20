import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadHeaderService {

  private estadoHeader: boolean;

  @Output() cambioDeVisibilidad: EventEmitter<boolean>;


  constructor() {
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
