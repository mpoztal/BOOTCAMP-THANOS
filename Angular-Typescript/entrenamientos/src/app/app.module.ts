import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { ListaEntrenosComponent } from './components/lista-entrenos/lista-entrenos.component';
import { TotalesComponent } from './components/totales/totales.component';
import { FormComponent } from './components/form/form.component';
import { EntrenoComponent } from './components/entreno/entreno.component';
import { FiltrosComponent } from './components/filtros/filtros.component';


@NgModule({
  declarations: [
    AppComponent,  
    ListaEntrenosComponent,
    TotalesComponent,
    FormComponent,
    EntrenoComponent,
    FiltrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
