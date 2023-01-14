import { Component, OnInit } from '@angular/core';
import { EntrenosService } from '../services/entrenos.service';

@Component({
  selector: 'app-totales',
  templateUrl: './totales.component.html',
  styleUrls: ['./totales.component.css']
})
export class TotalesComponent implements OnInit {

  calorias: number = 0;
  tiempo: number = 0;


  constructor(
    private entrenosService: EntrenosService
  ) { }

  ngOnInit(): void {
   
  }

  ngDoCheck(){
    this.tiempo = this.entrenosService.getTotalTime();
    this.calorias = this.entrenosService.getTotalCalorias();

    
  }
  
  
}



