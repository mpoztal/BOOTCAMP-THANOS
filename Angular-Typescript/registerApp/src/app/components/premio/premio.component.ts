import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-premio',
  templateUrl: './premio.component.html',
  styleUrls: ['./premio.component.css']
})
export class PremioComponent implements OnInit {
  premio: string = ""
  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    //opcion 1 por ruta tengo que capturar la ruta activa
    /* this.activatedRoute.params.subscribe(async (params: any) => {
      let token = params.token;
      let response = await this.usersService.getPremio(token)
      console.log(response)
    })
    */
   // Una llamada a la API con seguridad basada en token
    const token: string | null = localStorage.getItem('token')
    if (token !== null) {
      let response = await this.usersService.getPremio(token)
      let valor = response.success.split(': ')[1]
      this.premio = valor.split(" ")[0]
      // console.log(this.premio)
    }

  }

}
