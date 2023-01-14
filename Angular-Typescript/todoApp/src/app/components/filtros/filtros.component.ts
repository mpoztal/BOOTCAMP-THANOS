import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  @Output() busquedaEmitida: EventEmitter<string>;
  @Output() prioridadEmitida: EventEmitter<string>;


  constructor() { 
    this.busquedaEmitida = new EventEmitter();
    this.prioridadEmitida = new EventEmitter();

  }

  ngOnInit(): void {
  }

  capturarBusqueda($event: any){
    this.busquedaEmitida.emit($event.target.value)
  }

  capturarPrioridad($event: any){
   this.prioridadEmitida.emit($event.target.value)
  }
  

}
