import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from './models';
import { ProductsService } from './products.service';
import { Observable, pipe, take } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit, OnDestroy {
  public dataSource: Product[] = [];
  public data$: Observable<Product[]>;
  public displayedColumns = ['id', 'name', 'price', 'actions'];

  constructor(private productsService: ProductsService) {
    this.data$ = this.productsService.getProducts();
  }
  ngOnInit(): void {
    this.productsService.loadProcuts();
    this.productsService.getProducts()
      .pipe(take(1))
      .subscribe({
        next: (data) => (data)
      });
  }

  ngOnDestroy(): void {
  }
  

  OnCreate(): void {
    this.productsService.create()
  }

  onDelete(id: number): void {
    this.productsService.deleteById(id);
  }

}
