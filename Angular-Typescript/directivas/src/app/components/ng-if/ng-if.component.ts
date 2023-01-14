import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  visible: boolean = true;
  estado: string = 'novisto'
  seccionActual: string = 'sobremi'

  constructor() { }

  ngOnInit(): void {
  }

  cargarSeccion(seccion: string): void{
    this.seccionActual = seccion;
  }

}
