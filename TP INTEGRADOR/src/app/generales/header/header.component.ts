import { VisibilidadHeaderService } from './visibilidadHeader.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeaderComponent implements OnInit {


  estaActivo: boolean;
  constructor(
    private visibilidadHeaderService: VisibilidadHeaderService
  ) {
    this. estaActivo=true;
  }

  ngOnInit(): void {
    this.visibilidadHeaderService.cambioDeVisibilidad.subscribe((estaVisible: boolean) =>{
      this. estaActivo=estaVisible;
    })
  }

}
