import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { FormComponent } from './components/form/form.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { AlertsComponent } from './components/alerts/alerts.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    FormComponent,
    FiltrosComponent,
    TareaComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
