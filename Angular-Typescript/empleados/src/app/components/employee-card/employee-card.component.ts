import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee.interface';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  @Input() myEmployee: Employee | any;

  constructor() { }

  ngOnInit(): void {
  }


  changeStatus() {
    this.myEmployee.status = !this.myEmployee.status;
  }

}
