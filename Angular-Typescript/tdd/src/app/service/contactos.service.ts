import { Injectable } from '@angular/core';
import { Contacto } from '../interfaces/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  contactos: Contacto[]
  id: number = 0;
  constructor() {
    this.contactos = [
      { id: 1, name: 'lucia', mail: 'lucia@gmail.com', phone: '1234567' }
    ];
  }

  getAll() {
    return this.contactos;
  }

  create(pContacto: Contacto): string {
    pContacto.id = this.id;
    this.contactos.push(pContacto);
    this.id++;
    return 'insertado';
  }

  delete(pId: Number): string {
    this.contactos = this.contactos.filter(contacto => contacto.id !== pId);
    return 'borrado';
  }
}
