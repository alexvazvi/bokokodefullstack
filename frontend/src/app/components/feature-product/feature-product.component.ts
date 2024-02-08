import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-feature-product',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './feature-product.component.html',
  styleUrl: './feature-product.component.scss',
})
export class FeatureProductComponent {
  product: Product = {
    category: '',
    name: '',
    price: 0,
    id: 0,
    currency: '',
    bestseller: false,
    featured: false,
    description: '',
    image: '',
  };
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data) => {
      // Coger el primer elemento del array
      if (data.length > 0) {
        this.product = data.find(product => !product.featured) ?? this.product;
        if (!this.product) {
          //Si no hay producto featured, poner el primero, para que no esté vacio.
          this.product = data[0];
        }
      }
    });
  }
}
