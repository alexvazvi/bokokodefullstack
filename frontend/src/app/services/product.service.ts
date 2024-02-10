import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { ProductsResponse } from '../interfaces/productResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlProducts = 'http://localhost:3000/products';
  
  constructor(private http: HttpClient) {}

  getProducts(categories?: string, orderByParam?: string, orderByDirection?: string, actualPage?: number, itemsPerPage?: number): Observable<ProductsResponse> {
    let params = new HttpParams();

    if (categories){
      params = params.set('category', categories);
    }
    
    if (orderByParam)
      params = params.set('orderBy', orderByParam);

    if (orderByDirection)
      params = params.set('orderByDirection', orderByDirection);

    if (actualPage)
      params = params.set('page', actualPage.toString());

    if(itemsPerPage)
      params = params.set('itemsPerPage', itemsPerPage.toString());

      return this.http.get<ProductsResponse>(this.urlProducts, { params });
    }
}
