import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interfaces/user.interface';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formContact: FormGroup;
  type: string = 'Insertar'

  constructor(
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formContact = new FormGroup({
      first_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      last_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3) 
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      avatar: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(http|https):\/\/[^ "]+$/)
      ]),
  }, [])
  }

  ngOnInit(): void {
    //la diferencia entre actualizar y insertar es la ruta activa,es comprobación la hago cuando carga el componente

    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: number = parseInt(params.userId);
      if (id) {
        //hacer una peticion al servicio, traerme los datos de un usuario por su id con getById
        this.type = 'Actualizar'
        const response = await this.usersService.getById(id);
        console.log(response);
        const user: User = response.data;

        this.formContact = new FormGroup({
          first_name: new FormControl(user?.first_name, [
            Validators.required,
            Validators.minLength(3)
          ]),
          last_name: new FormControl(user?.last_name, [
            Validators.required,
            Validators.minLength(3)
          ]),
          email: new FormControl(user?.email, [
            Validators.required,
            Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
          ]),
          avatar: new FormControl(user?.avatar, [
            Validators.required,
            Validators.pattern(/^(http|https):\/\/[^ "]+$/)
          ]),
          id: new FormControl(user?.id, [])
        }, [])
      }
    })
  }

  checkField(pControlName: string): string {
    if (this.formContact.get(pControlName)?.touched) {
      return (!this.formContact.get(pControlName)?.valid) ? 'is-invalid' : 'is-valid';
    } else {
      return ""
    }
  }
// Esta función personaliza nuestro error checkError
  checkError(pControlName: string, pError: string) {
    if (this.formContact.get(pControlName)?.hasError(pError) && this.formContact.get(pControlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }


   // Qué hace la función async getDataForm? recibir el objeto del formContact con cada campo mandarlo al servicio para que haga una peticion por post a el API-REST
   async getDataForm(){
      try {
        if (this.formContact.value.id) {
          //actualizado el usuario
          let response: any = await this.usersService.update(this.formContact.value)
          console.log(response);
        } else {
          //creo el usuario
          let response = await this.usersService.create(this.formContact.value)
          if (response.id) {
            this.router.navigate(['/agenda']);
          } else {
            alert('Ha habiado un problema, intentelo de nuevo')
          }
      }

      } catch (error) {
        console.log(error);
      }
    }
}
