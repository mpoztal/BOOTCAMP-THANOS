import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private router: Router) { }  //  inyectable de tipo Router, nos permite navegar a cualquiera d nustras rutas.

  ngOnInit(): void {
  }

  recogerDatos(formContact: any): void {
    if (formContact.value.nombre !== "" && formContact.value.email !== "") {
      //enviaria los datos y redirigiria a la pagina servicios.
      alert('Mensaje enviado correctamente')
      this.router.navigate(['/mis-servicios']) // El router tiene métodos: navegate o navegateByUrl..donde cada uno navegaría como su nombre nos indica.
    }
  }

}
