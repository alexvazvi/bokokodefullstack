import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  showAddToCartBox: boolean = false;
  @Input() nombre: string = '';
  @Input() precio: number = 0;
  @Input() descripcion: string = '';
}
