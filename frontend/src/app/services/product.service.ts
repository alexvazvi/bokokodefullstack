import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlProducts = 'http://localhost:3000/products';
  
  constructor(private http: HttpClient) {}

  getProducts(categories?: any, orderByParam?: string, orderByDirection?: string): Observable<Product[]> {
    let params = new HttpParams();

    if (categories){
      params = params.set('category', categories);
    }
    
    if (orderByParam)
      params = params.set('orderByParam', orderByParam);

      if (orderByDirection)
      params = params.set('orderByDirection', orderByDirection);

      return this.http.get<Product[]>(this.urlProducts, { params });
    }
}
