import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  estilos: string = 'fondoAzul textoRojo'
  azul: string = 'fondoAzul'
  activo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarActivo(){
    this.activo = !this.activo;
  }

}
