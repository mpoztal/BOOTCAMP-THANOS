import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-else',
  templateUrl: './ng-if-else.component.html',
  styleUrls: ['./ng-if-else.component.css']
})
export class NgIfElseComponent implements OnInit {

  estado: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado(): void {
    this.estado = !this.estado; //this.estado es igual a lo contrario que valga estado

  }

}
