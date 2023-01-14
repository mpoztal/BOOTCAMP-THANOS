import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  bgColor: string = 'lightblue';
  fontSize: number = 15;
  
  propiedadCss: string = "";
  valorCss: string = "";
  estiloParrafo: any = {};


  constructor() { }

  ngOnInit(): void {
  }

  cambiarFuente($event: any){  // Con ésta funcion cambiamos tamaño de la fuente del párrafo
    this.fontSize = $event.target.value;
  }

  cambiarEstilos(){
    console.log(this.propiedadCss, this.valorCss) // Para comprobar si funciona.
    this.estiloParrafo[this.propiedadCss] = this.valorCss
  }

 
 
}
