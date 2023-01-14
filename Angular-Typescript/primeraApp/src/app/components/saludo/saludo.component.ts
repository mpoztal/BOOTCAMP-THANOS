import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  nombre: string =""
  edad: number = 40;
  color: string = 'azul';
  numeroAleatorio: number = Math.floor(Math.random() * 4)
  arrImagenes: any = [
    {name: 'Alfredo', url: 'https://randomuser.me/api/portraits/men/12.jpg'}, 
    {name: 'Lucia', url: 'https://randomuser.me/api/portraits/women/21.jpg'}, 

  ]

  constructor() {
    this.nombre = 'Rodrigo'
   }

  ngOnInit(): void {
  }

  sumar(pNumer1: number, pNumer2: number): string{
    return `El resultado de sumar ${pNumer1} y ${pNumer2} es igual a 
    <strong>${pNumer1 + pNumer2}</strong>`
  }

}


