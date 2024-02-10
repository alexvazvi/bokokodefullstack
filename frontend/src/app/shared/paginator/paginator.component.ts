import { Component } from '@angular/core';
import { PaginationService } from '../../services/paginator.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  constructor(private paginationService: PaginationService, private productService: ProductService) {}

  changePage(page: number) {
    this.paginationService.changePage(page);
    this.productService.getProducts('', '', '', page, 6).subscribe();
  }
}
