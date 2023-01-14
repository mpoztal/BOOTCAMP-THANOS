import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-numeros',
  templateUrl: './lista-numeros.component.html',
  styleUrls: ['./lista-numeros.component.css']
})
export class ListaNumerosComponent implements OnInit {

  @Input() numeros: number[] = [];
  resultado: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.cargarNumeros()
  }

  cargarNumeros(): void {
    this.resultado = this.numeros.join(",");
  }

}
