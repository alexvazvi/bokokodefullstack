import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  //Se crea un BehaviorSubject para la página actual y otro para los items por página
  private pageSource = new BehaviorSubject(1);
  currentPage = this.pageSource.asObservable();

  private itemsPerPageSource = new BehaviorSubject(6);
  itemsPerPage = this.itemsPerPageSource.asObservable();

  changePage(page: number) {
    this.pageSource.next(page);
  }

  changeItemsPerPage(itemsPerPage: number) {
    this.itemsPerPageSource.next(itemsPerPage);
  }
}