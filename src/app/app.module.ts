import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormBuilder, FormGroup } from '@angular/forms';
import { FormularioModule } from './formulario/formulario.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormularioModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
