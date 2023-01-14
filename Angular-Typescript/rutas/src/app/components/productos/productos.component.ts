import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = []

  constructor(private productosServices: ProductosService) { }

  ngOnInit(): void {
    this.productos = this.productosServices.getAll(); // para pintar ese array de productos nos vamos al html de productos y con un *ngFor...
    console.log(this.productos)
  }

}
