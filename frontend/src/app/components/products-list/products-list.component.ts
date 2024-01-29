import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  products = [
    {
      nombre: 'Producto 1',
      precio: 20.19,
      descripcion: 'Animales'
    },
    {
      nombre: 'Producto 2',
      precio: 30.00,
      descripcion: 'Animales'
    },
    {
      nombre: 'Producto 3',
      precio: 11.19,
      descripcion: 'Animales'
    },
 ]
}
