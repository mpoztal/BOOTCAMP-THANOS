import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { PersonajeService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-reparto',
  templateUrl: './reparto.component.html',
  styleUrls: ['./reparto.component.css']
})
export class RepartoComponent implements OnInit {

  arrPersonajes: Personaje[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private personajesService: PersonajeService
  ) { }

  ngOnInit(): void {
   //capturo la ruta activa del padre.
    this.activatedRoute.parent?.params.subscribe((params: any) => {
      let id: number = parseInt(params.idserie);
      this.arrPersonajes = this.personajesService.getBySerieId(id);
    })
  }

}
