import { Injectable } from '@angular/core';
import { PERSONAJES } from '../db/personajes.db';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  private arrPersonajes: Personaje [] = [];

  constructor() {
    this.arrPersonajes = PERSONAJES;
   }

    /**
  * @memberof PersonajesService
  * @author  Codehouse
  * @date 11/07/2022
  * @function getAll()
  * @description Devuelve un array de Personajes
  * @returns {*} {Personaje[]}
  */
     getAll(): Personaje[] {
      return this.arrPersonajes;
    }
  
     /**
    * @memberof PersonajesService
    * @author  Codehouse
    * @date 11/07/2022
    * @function getById()
    * @description Devuelve una personaje por cada Id
    * * @params {number} pId
    * @returns {*} {personaje | any}
    */
  
  
      getById(pId: number): Personaje | any {
        return this.arrPersonajes.find(personaje => personaje.id === pId);
      }

      getBySerieId(pId: number): Personaje[] {
        return this.arrPersonajes.filter(personaje => personaje.serie === pId);
      }
}
