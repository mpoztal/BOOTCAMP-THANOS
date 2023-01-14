import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
// Hago una peticion de servicios trayendome un array de usuarios, pero antes implementamos
//el interface (en la pág Reqres)
  users: User[] = [];
  currentPage: number = 0;
  totalPage: number = 0;

  constructor(private usersService: UsersService) { }

  async ngOnInit(): Promise<void> {
    let response = await this.usersService.getAll() 

    this.totalPage = response.total_pages;
    this.currentPage = response.page;
    this.users = response.data;

    }
    // Función para hacer la paginación    async goToPage(){}
    async goToPage(pPage: number): Promise<void> {
      let response: any = await this.usersService.getAll(pPage);
      this.currentPage = response.page;
      this.users = response.data;
    }
  }


