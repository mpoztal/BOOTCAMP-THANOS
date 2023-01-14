import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto.interface';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  arrContactos: Contacto[] = []
  resultado:string = "";
  constructor() { 
    this.arrContactos = [
      { id: 1, name: 'Juan', phone: 952522216},
      { id: 2, name: 'Ursula', phone: 912523216},
      { id: 3, name: 'Angeles', phone: 952582266},
      { id: 4, name: 'Carla', phone: 952572929},
    ]
  }
// funcion de ciclo de vida q se ejecuta SIEMPRE y nos indica q se está cargando
// clase en HTML, el Css y la etiqueta del componente
  ngOnInit(): void {
    this.cargarDatos()
  }

  cargarDatos($event: any = ""): void {
    this.resultado = "";
    let busqueda: string = ($event !== "" ) ? $event.target.value : "";
 
    this.arrContactos.forEach(contacto => {
      if (contacto.name.toLowerCase().includes(busqueda.toLowerCase())){
        this.resultado += `<li>${contacto.name} : ${contacto.phone}</li>`

      }

    })

  }

}
