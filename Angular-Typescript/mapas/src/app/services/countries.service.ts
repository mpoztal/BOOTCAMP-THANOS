import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseUrl: string = 'https://restcountries.com/v3.1/';
   //https://restcountries.com/v3.1/region/europe

  constructor(private httpClient: HttpClient ) { }

  getAll(pRegion: string = 'europe'): Promise<Country[]> {
    // lo vamos a gestionar con promesas
    return lastValueFrom(this.httpClient.get<Country[]>(`${this.baseUrl}region/${pRegion}`))
  }

   // observable
   getByCode(pCode: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.baseUrl}alpha/${pCode}`)
  }
}


