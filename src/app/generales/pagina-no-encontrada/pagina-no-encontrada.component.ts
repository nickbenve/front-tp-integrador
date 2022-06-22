import { VisibilidadHeaderService } from './../header/visibilidadHeader.service';
import { VisibilidadFooterService } from './../footer/visibilidad-footer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-no-encontrada',
  templateUrl: './pagina-no-encontrada.component.html',
  styleUrls: ['./pagina-no-encontrada.component.css']
})
export class PaginaNoEncontradaComponent implements OnInit {

  constructor(
    private visibilidadFooterService:VisibilidadFooterService,
    private visibilidadHeaderService:VisibilidadHeaderService
  ) {


   }

  ngOnInit() {
    this.visibilidadFooterService.desactivarFooter();
    this.visibilidadHeaderService.desactivarHeader();
  }

}
