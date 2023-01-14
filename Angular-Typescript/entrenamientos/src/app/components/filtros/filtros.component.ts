import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
  @Output() busquedaEntreno: EventEmitter<string>;
  constructor() { 
    this.busquedaEntreno = new EventEmitter();
  }

  ngOnInit(): void {
  }


  ObtenerBuaqueda($event: any){
    this.busquedaEntreno.emit($event.target.value)
  }

}
