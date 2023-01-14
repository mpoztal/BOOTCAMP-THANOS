import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private router: Router) {

  }

  canActivate(): boolean {
    console.log('paso por el guard')
    let token: string | null = localStorage.getItem('token')
    if (token === null) {
      //regidirigir a la pagina de login
      this.router.navigate(['/login'])
      return false
    }
    return true;
  }
  
}
