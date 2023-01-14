import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
    activate: boolean = true;
    arrCanales: string[] = [];

  constructor(
    private seriesServices: SeriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.arrCanales = this.seriesServices.getAllChannels();
  }

  // Este filtro es para que muestre o no el filtro Todas las cadenas 
  // No se mostrará cuando incluya la palabra personaje/s
  ngDoCheck(){
    let path = window.location.pathname
    this.activate = (path.includes('personaje')) ? false : true;
  }

  capturarCanal($event: any){
    if ($event.target.value === 'todas') {
      //ir a la ruta de series
      this.router.navigate(['/series']);
    } else {
      //ir a la ruta de canales pasando el canal
      this.router.navigate(['/canal', $event.target.value])
    }

  }

}
