import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './componets/formulario/formulario.component';
import { ListaNumerosComponent } from './componets/lista-numeros/lista-numeros.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaNumerosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
