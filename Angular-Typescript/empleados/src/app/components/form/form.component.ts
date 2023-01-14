import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Department } from 'src/app/interfaces/department.interface';
import { EmployeesService } from 'src/app/services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  departments: Department[] = [];

  constructor(private departmentsService: DepartmentsService,
    private employeesService: EmployeesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //tengo que pedir todos los departamentos al servicio y llenar el selector con dicho departamentos. De estam forma si se eliminan o añaden departamentos quedará automaticamente reflejado.
    this.departments = this.departmentsService.getAll();
  }

  getDataForm(pForm : any) {
    pForm.value.department = parseInt(pForm.value.department)
    let response = this.employeesService.create(pForm.value);
    if (response.id) {
      //redireccion a empleados
      this.router.navigate(['/employees'])
    }
  }

}
