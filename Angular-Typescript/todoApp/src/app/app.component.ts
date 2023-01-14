import { Component } from '@angular/core';
import { Alert } from './interfaces/alert.interface';
import { Tarea } from './interfaces/tarea.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todasTareas: Tarea[] = [];
  misTareas: Tarea[] = [];
  id: number = 4;
  miAlerta: Alert | any; 
  
  constructor(){
    this.todasTareas = [
      {
        id: 1,
        titulo: 'Estudiar Angular',
        prioridad: 'urgente'
      },
      {
        id: 2,
        titulo: 'Sacar al perro',
        prioridad: 'diaria'
      },
      {
        id: 3,
        titulo: 'Leer un libro',
        prioridad: 'mensual'
      },

    ]
    this.misTareas = this.todasTareas;
  }

  //Este es el único caso donde borramos todo el array principal.
  borrarTarea($event: number){
    this.todasTareas = this.todasTareas.filter(tarea => tarea.id !== $event);
    this.misTareas = this.todasTareas;
    this.miAlerta = {
      text: 'Tarea borrada correctamente',
      type: 'success',
      status: true
    }
  }

  guardarTarea($event: any) : boolean {
    //$event le falta un id para ser de tipo tarea
    if ($event.titulo !== "" && $event.prioridad !== ""){
// Si los valores no vienen vacios--> INSERTAMOS

// Tenemos que controlar q antes de insertar el dato no esté DUPLICADO 
//es decir, mismo título con misma prioridad.
      let posicion: number = this.misTareas.findIndex(tarea => tarea.titulo.toLowerCase() === $event.titulo.toLowerCase() && tarea.prioridad === $event.prioridad)
      if(posicion !== -1) {
        this.miAlerta = {
          text: 'Tarea duplicada, intentalo de nuevo',
          type: 'warning',
          status: true
        } 
        return false
      }
      $event.id = this.id
      this.misTareas.push($event)
      this.todasTareas = this.misTareas;
      this.id++;
      this.miAlerta = {
        text: 'Tarea insertada correctamente',
        type: 'success',
        status: true
      }
    }else{
      this.miAlerta = {
        text: 'Los campos no pueden estar vacios',
        type: 'danger',
        status: true
      }
    }
    return true
  }

  filtrarPrioridad($event: string) {
// Hay q desarrollarlos teniendo como array principal todasTareas
    this.misTareas = this.todasTareas.filter(tarea => tarea.prioridad.includes($event))
  }
// Aqui además añadidos el toLowerCase()--> por si el usuario pone minusculas
  buscarTarea($event: string) {
    this.misTareas = this.todasTareas.filter(tarea => tarea.titulo.toLowerCase().includes($event.toLowerCase()))
  }




}
