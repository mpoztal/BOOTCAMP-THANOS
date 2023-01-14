import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea.interface';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() miTarea: Tarea | any;
  @Output() tareaBorrada: EventEmitter<number>;//fase 1

  constructor() {
    this.tareaBorrada = new EventEmitter();//fase 2
  }

  ngOnInit(): void {
  }

  borrarTarea(pId: number): void{
    //console.log(pId)
    //se lo tengo q enviar al padre, Output
    this.tareaBorrada.emit(pId);//fase 3   fases 4 y 5 se produce con la union del compont.padre e hijo.
  }

}
