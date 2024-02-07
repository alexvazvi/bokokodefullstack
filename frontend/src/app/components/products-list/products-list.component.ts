import { Component, HostListener, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { firstValueFrom } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {
 categories = [
    { name: 'People', id: 'People', checked: false },
    { name: 'Premium', id: 'Premium', checked: false },
    { name: 'Pets', id: 'Pets', checked: false },
    { name: 'Food', id: 'Food', checked: false },    
    { name: 'Landmarks', id: 'Landmarks', checked: false },
    { name: 'Cities', id: 'Cities', checked: false },
    { name: 'Nature', id: 'Nature', checked: false },

  ];

  orderByValues: string[] = ['price', 'name', 'category'];
  public getScreenWidth: any;
  public getScreenHeight: any;

  products: Product[] = [];
  orderBy: string = '';
  showCategories: boolean = false;
  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
    this.loadProducts();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  openCategoriesSmall() {
    this.showCategories = true;
  }

  toggleCategories(category?: string){
    const selectedCategory = this.categories.find(cat => cat.name === category);
    if (selectedCategory) 
      selectedCategory.checked = !selectedCategory.checked;
    this.loadProducts();
  }

  toggleCategoriesSmall() {
    this.showCategories = !this.showCategories;
  }

  loadProducts() {
   
    //Lista de categorias, por nombre, solo las checkeadas
    const categoriesToFilter = this.categories.filter(cat => cat.checked).map(cat => cat.name).join(',');

    this.productService.getProducts(categoriesToFilter, this.orderBy).subscribe((data) => {
      //Coger desde el segundo elemento del array
      this.products = data.slice(1);
    });
  }
  onOrderByChange(event: any) {
    this.orderBy = event.target.value;
    this.loadProducts();
  }


}

