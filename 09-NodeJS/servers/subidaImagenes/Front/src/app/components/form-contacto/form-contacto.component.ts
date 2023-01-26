import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {

  formulario: FormGroup;
  files: any[];

  imagen: string = '';

  constructor(
    private contactoService: ContactoService
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      direccion: new FormControl(),
      telefono: new FormControl()
    });
    this.files = [];
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const { nombre, apellidos, direccion, telefono } = this.formulario.value;

    const fd = new FormData();
    fd.append('imagen', this.files[0]);
    fd.append('nombre', nombre);
    fd.append('apellidos', apellidos);
    fd.append('direccion', direccion);
    fd.append('telefono', telefono);

    // POST /api/contactos
    const response = await this.contactoService.create(fd);
    console.log(response);
    this.imagen = response.imagen;
  }

  onChange($event: any) {
    this.files = $event.target.files;
  }

}
