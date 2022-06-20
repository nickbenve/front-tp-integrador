import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadFooterService {
  private estadoFooter: boolean;

  @Output() cambioDeVisibilidad: EventEmitter<boolean>;


  constructor() {
    this.estadoFooter = true;
    this.cambioDeVisibilidad = new EventEmitter();
  }


  public desactivarFooter(){
    this.estadoFooter = false;
    this.notificar();

  }
  public activarFooter(){
    this.estadoFooter = true;
    this.notificar();
  }


  public notificar(){
    this.cambioDeVisibilidad.emit(this.estadoFooter);
  }

}
