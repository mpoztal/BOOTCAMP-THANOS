import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/interfaces/department.interface';
import { Employee } from 'src/app/interfaces/employee.interface';
import { DepartmentsService } from 'src/app/services/departments.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employee: Employee | any;
  department: Department | any;
  constructor(
    private employeesService: EmployeesService, //Ya tenemos los 2 servicios que vamos a manejar para el punto 8
    private departmentService : DepartmentsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  //capturar el id de ruta y llamar al servicio con ese id
  this.activatedRoute.params.subscribe((params: any) => {
    let id: number = parseInt(params.idemployee);
     //hacemos una peticion al servicio ( EmployeesService) para traernos un empleado y pintarlo.
     this.employee = this.employeesService.getById(id);
     this.department = this.departmentService.getById(this.employee.department)
  })
  }
  changeStatus() {
    this.employee.status = !this.employee.status
  }

}
