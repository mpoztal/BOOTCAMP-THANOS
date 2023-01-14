import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { Serie } from 'src/app/interfaces/serie.interface';
import { PersonajeService } from 'src/app/services/personajes.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit {
  //arrPersonajes: Personaje[] = [];
  //arrSeries: Serie[] = [];
  arrItems: Serie[] | Personaje[] | any[] = [];
  // Vamos a necesitar estas 2 propiedades para cuando abordemos esa parte.
  canal: string = "";
  titulo: string = "series";

  constructor(
    //private router: Router
    private activatedRoute: ActivatedRoute,
    private seriesServices: SeriesService,
    private personajesServices: PersonajeService
  ) { }

  ngOnInit(): void {
    //cuando el componente cargue tengo que determinar la ruta que me esta llegando si es de personajes o es de series, dependiendo de esa ruta hacer una peticion al servicio correspondiente.
    //console.log(this.router.url)
    this.titulo = this.activatedRoute.snapshot.url[0].path;
    this.arrItems = (this.titulo === 'series') ? this.seriesServices.getAll() : this.personajesServices.getAll();

  }

  ngDoCheck(){
    let response = this.activatedRoute.snapshot.url;
    if(response.length > 1){
      this.canal = response[1].path; //nombre del canal
      this.arrItems = this.seriesServices.getByChannel(this.canal);
    }
  }

}
