import { PaginaNoEncontradaComponent } from './generales/pagina-no-encontrada/pagina-no-encontrada.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"carrito",component:CarritoComponent},


  { path: "**", component: PaginaNoEncontradaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
