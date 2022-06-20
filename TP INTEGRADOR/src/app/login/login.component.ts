import { VisibilidadHeaderService } from './../generales/header/visibilidadHeader.service';
import { VisibilidadFooterService } from './../generales/footer/visibilidad-footer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private visibilidadFooterService:VisibilidadFooterService,
    private visibilidadHeaderService:VisibilidadHeaderService
  ) {

  }

  ngOnInit(): void {
    this.visibilidadFooterService.desactivarFooter();
    this.visibilidadHeaderService.desactivarHeader();
  }

}
