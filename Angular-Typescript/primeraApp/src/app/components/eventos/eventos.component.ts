import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  color: string = 'blue';
  texto: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  cambiarColor($event: any): void{
    this.color = $event.target.value;

  }

  capturarTexto($event: any): void{
    this.texto = $event.target.value;
  }

}
