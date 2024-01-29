import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureProductComponent } from './components/feature-product/feature-product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeatureProductComponent, ProductsListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
