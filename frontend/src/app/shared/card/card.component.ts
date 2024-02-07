import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() category: string = '';
  @Input() image: string = '';
  @Input() bestSeller: boolean = false;

  showAddToCartBox: boolean = false;

  constructor(private cartService: CartService) {}

  addToCart(): void {
    const product: Product = {
      name: this.name, price: this.price, category: this.category,
      id: 0,
      currency: '',
      bestseller: false,
      featured: false,
      description: '',
      image: this.image,
    };
    this.cartService.addToCart(product);
  }
}
