import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/interfaces/serie.interface';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-vista-serie',
  templateUrl: './vista-serie.component.html',
  styleUrls: ['./vista-serie.component.css']
})
export class VistaSerieComponent implements OnInit {
  serie: Serie | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private seriesServices: SeriesService
      
    
  ) { }

  ngOnInit(): void {
     //cuando cargue el componente tengo que extraer la parte activa de la ruta que es id de serie con el que pedire toda la info de serie por id a traves del servicio.

     this.activatedRoute.params.subscribe((params:any) =>{
      let id: number = parseInt(params.idserie)
      this.serie = this.seriesServices.getById(id);
     })
  }

}
