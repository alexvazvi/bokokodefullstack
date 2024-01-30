import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  cart: Product[] = [];

  constructor(private cartService: CartService) {}
  
  ngOnInit(): void {
    // Subscripcion para actualizar el carrito
    this.cartService.cartEmitter.subscribe((updatedCart: Product[]) => {
      this.cart = updatedCart;
    });
  }
  clearCart(): void{
      this.cart = [];
  }
}
