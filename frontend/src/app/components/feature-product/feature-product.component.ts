import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-feature-product',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './feature-product.component.html',
  styleUrl: './feature-product.component.scss'
})
export class FeatureProductComponent {
  product: Product = {name: "Perro", category: "Animal", price: 10.00}
  constructor(private cartService: CartService) {}

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }
}
