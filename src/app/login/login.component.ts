import { Router, RouterModule } from '@angular/router';
import { VisibilidadHeaderService } from './../generales/header/visibilidadHeader.service';
import { VisibilidadFooterService } from './../generales/footer/visibilidad-footer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup|null;
  private busqueda:string|null;

  constructor(
    private visibilidadFooterService:VisibilidadFooterService,
    private visibilidadHeaderService:VisibilidadHeaderService,
    private formBuilder: FormBuilder
  ) {
    this.busqueda=null;
    this.formulario = null;
  }

  ngOnInit(): void {
    this.visibilidadFooterService.desactivarFooter();
    this.visibilidadHeaderService.desactivarHeader();
    this.inicializarFormulario();
  }

  private inicializarFormulario(){
    this.formulario= this.formBuilder.group(
      {
      usuario:['', Validators.required],
      contrasenia:['', Validators.required],
      }
    )
  }

  iniciarSesion(){
    var usuario = this.formulario?.get('usuario')?.value;
    var contrasenia = this.formulario?.get('contrasenia')?.value;

    console.log(usuario + " " + contrasenia);

  }
}
