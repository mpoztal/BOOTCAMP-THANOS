import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nuevaTarea: any;
  @Output() tareaEmitida: EventEmitter<any>
  
  constructor() {
    this.nuevaTarea = {
      titulo: "",
      prioridad: ""
    }
    this.tareaEmitida = new EventEmitter();

   }

  ngOnInit(): void {
  }

  obtenerDatos(){
    //mandarla a app.component  (Output)
    this.tareaEmitida.emit(this.nuevaTarea)
    this.nuevaTarea = {  //Esto se añade para q el formulario quede varío de tareas.
      titulo: "",
      prioridad: ""
    }
  }

}
