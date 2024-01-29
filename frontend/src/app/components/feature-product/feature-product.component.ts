import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-feature-product',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './feature-product.component.html',
  styleUrl: './feature-product.component.scss'
})
export class FeatureProductComponent {

}
