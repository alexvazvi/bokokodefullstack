import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  
  products: Product[] = [
    {
      name: 'Producto 1',
      price: 20.19,
      category: 'Animales'
    },
    {
      name: 'Producto 2',
      price: 30.00,
      category: 'Animales'
    },
    {
      name: 'Producto 3',
      price: 11.19,
      category: 'Animales'
    },
 ]


}
