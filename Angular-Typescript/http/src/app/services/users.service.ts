import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
// El servicio se conecta a una http API-REST.Para ello importamos 
//el modulo HttpClientModule dentro del app.module.Despues inyectamos dentro del servicio--> HttpClient.
  private baseUrl: string = 'https://reqres.in/api/users'
  constructor(private httpClient: HttpClient) { }

  
  // así se hace una petición a una API con el metodo get a una lista de usuarios. Con (pPage..)sacaremos una paginacion dentro del metodo
  getAll(pPage: number = 1) : Promise<any> {
    //httpClient devuelve un observable, y lo convertiremos en una promesa con el metodo
    // lastValueFrom()  
    
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}?page=${pPage}`)) // con éste return, me carga los 6 primeros
  }

  getById(pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}/${pId}`))
  }


  create(pFormValue: any): Promise<any> {
    //en una peticion http es muy normal que te pidan cabeceras para poder validar no solo peticion (token), si no saber el tipo de fichero que le envias (json). Interceptors

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json",
        //"authorization" : "435678dsfag"
      })
    }
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl, pFormValue, httpOptions))
  }

  update(pFormValue: User): Promise<any> {
    return lastValueFrom(this.httpClient.put<any>(`${this.baseUrl}/${pFormValue.id}`, pFormValue))
  }

  delete(pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}/${pId}`))
  }

}
