import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// COMPONENTS
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AlumnoComponent } from './components/alumno/alumno.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListaAlumnosComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
