import { Time } from "@angular/common";

export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    currency: string;
    image: string;
    bestseller: boolean;
    featured: boolean;
    description: string;
    created_at?: Date; 
    updated_at?: Date;
  }