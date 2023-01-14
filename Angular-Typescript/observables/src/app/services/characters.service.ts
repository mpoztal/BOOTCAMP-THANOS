import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  baseUrl: string = "https://rickandmortyapi.com/api/character/"


  constructor(private httpClient: HttpClient) { }

  getAll(pPage: string = this.baseUrl): Observable<any> {
    //observables no se convierten en promesas se gestionan con suscribe
    return this.httpClient.get<any>(pPage);
  }

  getByName(pName: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}?name=${pName}`)
  }


}
