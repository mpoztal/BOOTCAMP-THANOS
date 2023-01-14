import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  // TWO WAY DATABIDING
  //1º paso para usar TWO WAY DATABIDING es importar FormsModule
  //2º paso, como es comunicacion bidireccional, necesitamos un event Biding es ésto; ()="" 
  //y property Biding []=""

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  sumar(){
    this.resultado = this.numero1 + this.numero2;
  }

  restar(){
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar(){
    this.resultado = this.numero1 * this.numero2;
  }

}
