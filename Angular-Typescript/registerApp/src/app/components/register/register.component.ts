import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    /** Comentamos para tomar como guía estos campos
  name: string;
  surname: string;
  username: string;
  password: string;
  mail: string;
  address: string;
  age: number;
   */
  registerForm: FormGroup;
  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl("", []),
      surname: new FormControl("", []),
      username: new FormControl("", []),
      password: new FormControl("", []),
      mail: new FormControl("", []),
      address: new FormControl("", []),
      age: new FormControl("", []),
    }, [])
   }

  ngOnInit(): void {
  }

  async getDataForm() {
    try {
      let response = await this.usersService.register(this.registerForm.value);
      if (response.success) {
        //regirijo al login
        this.router.navigate(['/login'])
      } else {
        alert(response.error)
      }
    } catch (err) {
      console.log(err)
    }
  }

}
