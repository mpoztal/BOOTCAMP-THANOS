import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {

  producto: Producto | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id: number = parseInt(params.idproducto);
      console.log(id)
      this.producto = this.productosService.getById(id);
      console.log(this.producto)
    })
  }

}

