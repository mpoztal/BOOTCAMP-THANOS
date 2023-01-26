import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto.interface';
import { ContactosService } from 'src/app/service/contactos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  arrContactos: Contacto[];
  response: string = "";
  responseDelete: string = ""
  constructor(private constactosService: ContactosService) {
    this.arrContactos = []
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.arrContactos = this.constactosService.getAll();
  }

  crearContacto(pContacto: Contacto): void {
    this.response = this.constactosService.create(pContacto);
  }

  deleteContacto(pId: number): void {
    this.responseDelete = this.constactosService.delete(pId);
  }

}
