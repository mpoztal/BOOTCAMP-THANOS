import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { VueltaPipe } from './pipes/vuelta.pipe';
import { RecortarStringsPipe } from './pipes/recortar-strings.pipe';
import { FormateadorPipe } from './pipes/formateador.pipe';




registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    VueltaPipe,
    RecortarStringsPipe,
    FormateadorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
