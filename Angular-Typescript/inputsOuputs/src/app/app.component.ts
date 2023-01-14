import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  listaNumeros: number[] = [];

  constructor() {
    this.listaNumeros = [1,2,3,4,5,6,7,8,9,10]
  }

  guardarNumero($event: number){
    this.listaNumeros.push($event);
  }

  
}


