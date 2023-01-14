// IMPORTACIONES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


// COMPONENTES
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    EventosComponent,
    GaleriaComponent,
    CalculadoraComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
