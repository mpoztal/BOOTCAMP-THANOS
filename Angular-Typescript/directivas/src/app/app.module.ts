import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgIfElseComponent } from './components/ng-if-else/ng-if-else.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClassComponent,
    NgForComponent,
    NgIfComponent,
    NgIfElseComponent,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
