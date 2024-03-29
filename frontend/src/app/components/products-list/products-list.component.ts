import { Component, HostListener, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { firstValueFrom } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { TitleCasePipe } from '@angular/common';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { PaginationService } from '../../services/paginator.service';
@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CardComponent, TitleCasePipe, PaginatorComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  categories = [
    { name: 'people', id: 'people', checked: false },
    { name: 'premium', id: 'premium', checked: false },
    { name: 'pets', id: 'pets', checked: false },
    { name: 'food', id: 'food', checked: false },
    { name: 'landmarks', id: 'landmarks', checked: false },
    { name: 'cities', id: 'cities', checked: false },
    { name: 'nature', id: 'nature', checked: false },
  ];

  orderByValues: string[] = ['price', 'name', 'category'];
  public getScreenWidth: any;
  public getScreenHeight: any;
  products: Product[] = [];
  orderBy: string = '';
  showCategories: boolean = false;

  private currentPage: number = 1;
  private itemsPerPage: number = 6;

  constructor(private productService: ProductService, private paginationService: PaginationService) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
    }
    this.paginationService.currentPage.subscribe(page => {
      this.currentPage = page;
      this.loadProducts();
    });
    this.paginationService.itemsPerPage.subscribe(items => {
      this.itemsPerPage = items;
      this.loadProducts();
    });
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
  closeCategoriesSmall() {
    this.showCategories = false;
  }

  toggleCategories(category?: string) {
    const selectedCategory = this.categories.find(
      (cat) => cat.name === category
    );
    if (selectedCategory) selectedCategory.checked = !selectedCategory.checked;
    this.loadProducts();
  }

  // toggleCategoriesSmall() {
  //   this.showCategories = !this.showCategories;
  // }

  loadProducts() {
    //Lista de categorias, por nombre, solo las checkeadas
    const categoriesToFilter = this.categories
      .filter((cat) => cat.checked)
      .map((cat) => cat.name)
      .join(',');

    this.productService
      .getProducts(categoriesToFilter, this.orderBy, 'asc', this.currentPage, this.itemsPerPage)
      .subscribe((data) => {
        //Coger elementos del array sin featured, al ordenar cambiará no estará al principio, a menos que se mande desde el back, mejora.
        this.products = data.products.filter((product) => !product.featured);
      });
  }

  onOrderByChange(event: any) {
    this.orderBy = event.target.value;
    this.loadProducts();
  }

  loadProductsCategoryPopUp() {
    this.closeCategoriesSmall();
    this.loadProducts();
  }

  clearCategoriesFilter() {
    this.categories.forEach((category) => {
      category.checked = false;
    });
    this.loadProducts();
  }
}
