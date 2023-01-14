import { Injectable } from '@angular/core';
import { PRODUCTOS } from '../db/productos.db';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private arrProductos: Producto[] = []
  constructor() {
    this.arrProductos = PRODUCTOS
   }

   /**
   * @memberof ProductosServices
   * @function getAll()
   * @description  Me Devuelve el array de productos completo
   * @return {Producto[]}    Retorna un array de  Producto[]
   */

    getAll(): Producto[] {
      return this.arrProductos;
    }

    /**
 * @memberof ProductosServices
 * @author Codehouse
 * @date 11/07/2022
 * @function getById(param)
 * @description Devuelve un producto por ID
 * @param {number} pId
 * @return {*} {Producto | any}
 */
  getById(pId: number): Producto | any {
    return this.arrProductos.find(producto => producto.id === pId);
  }

}
