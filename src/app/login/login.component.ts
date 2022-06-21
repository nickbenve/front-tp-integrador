import { VisibilidadRolService } from './../home/visibilidadRol/visibilidad-rol.service';
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
    private formBuilder: FormBuilder,
    private visibilidadRolService:VisibilidadRolService
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

    this.visibilidadRolService.verificarLog(usuario,contrasenia).subscribe((respuesta: any)=>{
      localStorage.setItem('rol',respuesta.rol);
      localStorage.setItem('id',respuesta.id);
      this.visibilidadRolService.rolVisibilidad();
    });


  }


}