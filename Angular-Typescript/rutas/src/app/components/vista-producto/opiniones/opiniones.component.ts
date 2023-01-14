import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent implements OnInit {
  id: number = 0;
  title: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
    ) { }

  ngOnInit(): void {
    // 5º voy a captura el id de la ruta que me pasan como parametro
    //necesito la ruta activa de mi padre por que la mia es estatica.
    // Esto hace una peticion a db para traerse las opiniones de este id del producto
    this.activatedRoute.parent?.params.subscribe((params: any) => {
      let id: number = parseInt(params.idproducto)
      let producto = this.productosService.getById(id);
      this.title = "Las opiniones que estas cargando son las del producto " + producto.title;
    })
  }

}
