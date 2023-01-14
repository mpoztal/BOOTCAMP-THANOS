import { Injectable } from '@angular/core';
import { SERIES } from '../db/series.db';
import { Serie } from '../interfaces/serie.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private arrSeries: Serie[] = [];
  constructor() {
    this.arrSeries = SERIES;
   }

  /**
  * @memberof SeriesService
  * @author  Codehouse
  * @date 11/07/2022
  * @function getAll()
  * @description Devuelve un array de series
  * @returns {*} {Serie[]}
  */
   getAll(): Serie[] {
    return this.arrSeries;
  }

   /**
  * @memberof SeriesService
  * @author  Codehouse
  * @date 11/07/2022
  * @function getById()
  * @description Devuelve una serie por cada Id
  * * @params {number} pId
  * @returns {*} {Serie | any}
  */


    getById(pId: number): Serie | any {
      return this.arrSeries.find(serie => serie.id === pId);
    }

    getSeasons(pId:number): string[] | any {
      let result = this.arrSeries.find(serie => serie.id === pId);
      return result?.temporadas;
    }

    getAllChannels(): string[] {
      let channels: string[] = this.arrSeries.map(serie => serie.canal); 
       //quitar los canales repetidos.
       channels = [...new Set(channels)]
      return channels;
    }

    getByChannel(pCanal: string): Serie[] {

      return this.arrSeries.filter(serie => serie.canal === pCanal)
    }
}
