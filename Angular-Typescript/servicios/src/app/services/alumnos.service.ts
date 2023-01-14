import { Injectable } from '@angular/core';
import { ALUMNOS } from '../db/alumnos.db';
import { Alumno } from '../interfaces/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private arrayAlumnos: Alumno[] = []
  private id: number = 5;

  constructor() {
    this.arrayAlumnos = ALUMNOS;
    console.log(this.arrayAlumnos)
   }

   getAll(): Alumno[] {    // Obtener el array al completo
    return this.arrayAlumnos;
   }

   getByLevel(pLevel: string): Alumno[]{  // Obtener filtrados por nivel
    return this.arrayAlumnos.filter(alumno => alumno.level.includes(pLevel))
   }

   insert(pData: any): any {  // Insertar
    pData.id = this.id;
    let position = this.arrayAlumnos.push(pData)
    if(position){
      this.id++;
      return {msg: 'Alumno insertado correctamente'}
    }else{
      return {msg:'Error al insertar el alumno'}
    }


   }
}
