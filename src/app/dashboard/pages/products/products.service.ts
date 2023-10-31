import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Product } from './models';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/enviroment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products$ = new BehaviorSubject<Product[]>([]);

  constructor(private httpClient:HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  loadProcuts() :void {
    this.products$.next([
      {
        id: 1,
        name: 'heladera',
        description: 'lorem ipsum',
        price: 30.000,
        stock: 21,
      },
      {
        id: 2,
        name: 'mircoondas',
        description: 'lorem ipsum',
        price: 21020,
        stock:13,
      },
      {
        id: 3,
        name: 'computadora',
        description: 'lorem ipsum',
        price: 230.000,
        stock: 15,
      }
    ])
  }

  create () :void {
    this.products$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this.products$.next([...arrayActual,
          {
            id: arrayActual.length+1,
            name: 'Random',
            description: 'Random',
            price: 2000,
            stock: 20,
          }
        ]);
      }
    })}

  deleteById(id: number):void {
    this.products$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this.products$.next(arrayActual.filter((p) => p.id !== id))
      }
    })
  }

  getProductsByCategoryId(categoryId: number): Observable <Product[]> {
    return this.httpClient.get<Product[]>(enviroment.baseApiUrl + `/products?categoryId=${categoryId}`)
}

}
