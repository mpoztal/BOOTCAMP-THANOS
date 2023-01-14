import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async getDataForm(pForm: any): Promise<void> {
    let response = await this.usersService.login(pForm.value)
    console.log(response)
    if (response.token) {
      localStorage.setItem('token', response.token)
      this.router.navigate(['/dashboard'])
    }
  }

}
