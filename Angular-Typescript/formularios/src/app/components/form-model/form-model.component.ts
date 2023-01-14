import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {

  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({      // 5º paso; Inicializamos dentro del ts el objeto FormGroup..
      nombre: new FormControl('', [
        Validators.required,  // 1º PASO PARA LA VALIDACION Obliga a que este campo sea requerido, si no, no lo envia
        Validators.minLength(3) // Obliga a que este campo sea requerido como min 3 letras, 
      ]),
      edad: new FormControl('', [
        this.ageValidator  // Creacion de nuestro propio validador
      ]),
      email: new FormControl('', [  // VALIDACION ESPECIAL PARA email
      Validators.required,
      Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) //EXPRESION REGULAR
      ]),
      dni: new FormControl('', [
        this.dnivalidator
      ]),
      puesto: new FormControl('', []),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(8)
      ]),
      repeatpass: new FormControl('', [
        Validators.required
      ]),
      rgpd:  new FormControl('', [
        Validators.requiredTrue
      ]),

    }, [this.passwordValidator]) 
   }

        // Validador del DNI

   dnivalidator(pControlName: AbstractControl): any {
    //validamos el dni no solo que este bien escrito (lo haremos con expresiones regulares) si no que la letra sea valida.
    const letrasDni: string[] = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    const dni = pControlName.value;
    const expReg = /^\d{8}[A-Z]{1}/

    if (expReg.test(dni)) {
      //el dni esta bien escrito pero no significa que sea valido
      const numero: number = parseInt(dni.substring(0, dni.length - 1))
      const letra = dni.at(-1) // esto equivale a---> dni[dni.length - 1]

      const position: number = numero % 23;

      return (letra !== letrasDni[position]) ? { 'dnivalidator': 'La letra no corresponde al dni' } : null;

    } else {
      return { 'dnivalidator': 'formato de dni incorrecto' }
    }

  }



   // Validador del password
   passwordValidator(pForm: AbstractControl): any {
    const password: string = pForm.get('password')?.value;
    const repeatpass: string = pForm.get('repeatpass')?.value;

    if (password !== repeatpass) {
      return { 'passwordvalidator': true }
    }
    return null;
  }


   // Con esta funcion creamos ERROR PERSONALIZADO 
  ageValidator(pControlName: AbstractControl): any {
    const edad: number = parseInt(pControlName.value);

    // 1º buscamos que edad es un numero
    // 2º que sea mayor 18 y menor 65

    if (isNaN(edad)) {
      return { 'agevalidator': 'La edad tiene que ser un numero' }
    } else if (edad < 18 || edad > 65) {
      return { 'agevalidator': 'La edad tiene que estar comprendida entre 18 y 65 años ' }
    }

    return null;
  }
   
  

  
  ngOnInit(): void {

  }

        // Con esto conseguimos q nadie toque desde el inspec. y cambie los valores.
  getDataForm(){

    if (this.formModel.valid) {
      console.log(this.formModel.value)
    } else {
      console.log('cenutrio no toques el inspector')
    }

  }
                                       // FUNCION IMPORTANTE  !!!
  // Con ésta funcion controlamos con los parametros pControlName y pError los campos q queremos validar y sus errores.
  checkControl(pControlName: string, pError: string) : boolean {
    if (this.formModel.get(pControlName)?.hasError(pError) && this.formModel.get(pControlName)?.touched) {
      return true
    
    }else{
      return false
    }
  }

}

