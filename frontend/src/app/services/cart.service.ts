import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  //Emisor para evento de actualizar carrito
  cartEmitter = new EventEmitter<Product[]>();

  addToCart(product: Product): void {
    this.cart.push(product);
    this.saveCartToLocalStorage();
    //En caso de hacerlo con emisores
    //this.cartEmitter.emit(this.cart);
  }

  getCart(): Product[] {
    return this.cart;
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
