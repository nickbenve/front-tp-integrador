import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralesModule } from './generales/generales.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';
import { CargaProductosComponent } from './carga-productos/carga-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
      CarritoComponent,
      CargaProductosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralesModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
