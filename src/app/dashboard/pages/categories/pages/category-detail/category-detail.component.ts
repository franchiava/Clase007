import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../products/products.service';
import { Category } from '../../models';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styles: [
  ]
})

export class CategoryDetailComponent {
  CategoryId : number
  
  
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductsService,
    ) {
    this.CategoryId =  Number(this.activateRoute.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.productService.getProductsByCategoryId(this.activateRoute.snapshot.params['id']).subscribe({
      next: (products) =>  console.log(products)
    })
  }

  displayedColumns = ['id', 'name', 'price'];
    }

