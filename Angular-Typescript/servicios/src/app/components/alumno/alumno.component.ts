import { Component, OnInit, Input } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  @Input() miAlumno: Alumno | any;
  constructor() { }

  ngOnInit(): void {
  }

}
