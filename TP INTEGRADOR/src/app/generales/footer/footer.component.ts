import { VisibilidadFooterService } from './visibilidad-footer.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class FooterComponent implements OnInit {

  estaActivo: boolean;
  constructor(
    private visibilidadFooterService: VisibilidadFooterService
  ) {
    this. estaActivo=true;
  }



  ngOnInit(): void {
    this.visibilidadFooterService.cambioDeVisibilidad.subscribe((estaVisible: boolean) =>{
      this. estaActivo=estaVisible;
    })
  }
}
