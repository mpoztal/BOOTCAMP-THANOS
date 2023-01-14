import { Injectable } from '@angular/core';
import { EMPLOYESS } from '../db/employees.db';
import { Employee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private arrEmployees: Employee[] = [];
  private id: number = 3;

  constructor() {
    this.arrEmployees = EMPLOYESS
  }

  getAll(): Employee[] {
    return this.arrEmployees;
  }

  getById(pId: number): Employee | any {
    return this.arrEmployees.find(employee => employee.id === pId)
  }

  // Con esta funcion damos de alta a un nuevo empleado y como en el formulario no aparece el status ni el id
  //pues lo añadimos con push al pForm y retorna id, para comprobar q ha sido insertado correctamente.
  create(pForm: any): any {
    pForm.status = true;
    pForm.id = this.id;
    this.arrEmployees.push(pForm)
    this.id++;
    return { id: pForm.id }
  }



  
}