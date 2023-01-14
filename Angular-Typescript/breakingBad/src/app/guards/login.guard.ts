import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }
// Dependiendo si estamos o no logados.. true ó false entraremos en el resto de rutas o no
  canActivate(): boolean {
    let token: string | null = localStorage.getItem('token');
     if (token === null) {
       this.router.navigate(['/'])  // Redirigimos a la raiz (header) 
       return false;
      }
    return true;
  }

}
