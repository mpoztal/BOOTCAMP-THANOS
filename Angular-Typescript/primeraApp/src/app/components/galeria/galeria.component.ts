import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  arrImagenes: any[] = [];
  imagenActual: number = 0;

  constructor() { 
    this.arrImagenes = [
      {url: './assets/images/imagen_1.jpg', title: 'Yellow'},
      {url: './assets/images/imagen_2.jpg', title: 'Orange'},
      {url: './assets/images/imagen_3.jpg', title: 'Tomato'},
      {url: './assets/images/imagen_4.jpg', title: 'Blue'},
    ]
  }

  ngOnInit(): void {
  }

  cambiarImagen($event: any){
    if($event.target.innerText === 'NEXT') {  //Forma larga de hacer que se cambie de imágenes cada vez q hacemos click en botones
      // if(this.imagenActual === this.arrImagenes.length -1)
      // {
      //   this.imagenActual = 0;
      // }
      // else{
      //   this.imagenActual++;
      // }
      this.imagenActual = (this.imagenActual === this.arrImagenes.length -1) ? 0 :  // Forma corta y más usada-----> con un ternario
        this.imagenActual+1;

    }else{  // Aquí está la sentencia del otro boton (PREV)

        this.imagenActual = (this.imagenActual === 0) ? this.arrImagenes.length-1:
          this.imagenActual-1;
    }
    

  }

}
