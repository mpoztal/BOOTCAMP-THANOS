import { Component, Input, OnInit } from '@angular/core';
import { Entreno } from 'src/app/interfaces/entreno.interface';
import { EntrenosService } from '../services/entrenos.service';

@Component({
  selector: 'app-entreno',
  templateUrl: './entreno.component.html',
  styleUrls: ['./entreno.component.css']
})
export class EntrenoComponent implements OnInit {

  @Input() miEntreno: Entreno | any

  constructor(private entrenosService: EntrenosService
  ){}
    
  

  ngOnInit(): void {
  }


  deleteEntreno(pId: number): void {
    let reponse = this.entrenosService.delete(pId);

  }

}
