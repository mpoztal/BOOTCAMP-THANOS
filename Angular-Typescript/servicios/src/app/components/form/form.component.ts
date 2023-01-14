import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    newAlumno: any;
  constructor(private alumnosServices: AlumnosService) { 
    this.newAlumno = {
      name: "",
      mail: "",
      age: 0,
      level: ""
    }
  }

  ngOnInit(): void {
  }

  getDataForm(){
    //console.log(this.newAlumno).
    // Enviar el dato en el servicio para que lo inserte en el array.
    let response = this.alumnosServices.insert(this.newAlumno);
    alert(response.msg)
  }

}
