import { Component, OnInit } from '@angular/core';
import { Entreno } from 'src/app/interfaces/entreno.interface';
import { EntrenosService } from '../services/entrenos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  entreno: Entreno;

  constructor(
    private entrenosService: EntrenosService
    ) {
      this.entreno = this.clearEntreno()
   }

  ngOnInit(): void {
  }

  recogerDatosForm(){
    //console.log(this.entreno)
    let response = this.entrenosService.create(this.entreno);
    this.entreno = this.clearEntreno()
  }

  clearEntreno(): Entreno {
    return {
        id: 0,
        titulo: "",
        fecha: "",
        tiempo: 0
      } 

}

}
