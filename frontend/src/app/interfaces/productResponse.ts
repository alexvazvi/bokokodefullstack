import { Product } from "./product";

export interface ProductsResponse {
    products: Product[];
    totalCount: number;
    currentPage: number;
  }