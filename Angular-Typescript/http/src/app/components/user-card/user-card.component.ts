import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() myUser: User | any;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  deleteUser(pId: number): void {

    //  como se gestionaria una promesa con then catch

    this.userService.delete(pId)
      .then((response: any) => { if (response === null) alert('usuario borrado correctamente') })
      .catch((err: any) => console.log(err))


    //  con async await

    // try {
    //   let response = await this.usersService.delete(pId);
    //   console.log(response)
    // } catch (err) {
    //   console.log(err)
    // }
    }
  }


