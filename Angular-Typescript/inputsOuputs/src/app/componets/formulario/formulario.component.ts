import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() numeroEnviado: EventEmitter<number>
  miNumero: number = 0;
  
  constructor() { 
    this.numeroEnviado = new EventEmitter();

  }

  ngOnInit(): void {
  }

  //Recoger la información
  guardar() {
    this.numeroEnviado.emit(this.miNumero)  // 3º paso de la receta
    this.miNumero = 0;
  }

}
