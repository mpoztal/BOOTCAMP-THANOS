import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Servicio } from 'src/app/interfaces/servicio.interface';


@Component({
  selector: 'app-vista-servicio',
  templateUrl: './vista-servicio.component.html',
  styleUrls: ['./vista-servicio.component.css']
})
export class VistaServicioComponent implements OnInit {
  miServicio: Servicio | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private serviciosService: ServiciosService
    ) { }

  ngOnInit(): void {
     //activatedRoute  captura la parte dinaminamica de una ruta. tienen metodo params que es un observable
     this.activatedRoute.params.subscribe((params: any) => {
      let url = params.urlservicio
      //con esta url llamo al servicio para pedirle el servicio que tenga esa url.
      this.miServicio = this.serviciosService.getByUrl(url);
    })
  }

}
