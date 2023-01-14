import { Component, OnInit } from '@angular/core';
import { Entreno } from 'src/app/interfaces/entreno.interface';
import { EntrenosService } from '../services/entrenos.service';

@Component({
  selector: 'app-lista-entrenos',
  templateUrl: './lista-entrenos.component.html',
  styleUrls: ['./lista-entrenos.component.css']
})
export class ListaEntrenosComponent implements OnInit {
  entrenos: Entreno[] = [];
  constructor(private EntrenosService: EntrenosService) { }

  ngOnInit(): void {
    //Cuando cargo el componente llamo al servicio y me traigo todos los elementos para llenar mi array.
    this.entrenos = this.EntrenosService.getAll();
    
  }
//Filtro
  buscar($event: string): void{
    if ($event !== "") {
      this.entrenos = this.EntrenosService.getByTitle($event);

    }else{
      this.entrenos = this.EntrenosService.getAll();
    }
  }

}
