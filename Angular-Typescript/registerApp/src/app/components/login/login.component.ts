import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private usersServices: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async getDataForm(pForm: any): Promise<void> {
    try {
      let response = await this.usersServices.login(pForm.value);
      if (response.token) {
        // Como pasar éste token al premio...2 opciones:
        //opcion 1: usando rutas
        //this.router.navigate(['/premio', response.token])

        //opcion 2: usando localstorage
        localStorage.setItem('token', response.token)
        this.router.navigate(['/premio'])

      } else {
        alert('Usuario no existe')
      }
    } catch (err) {
      console.log(err)
    }
  }

}
