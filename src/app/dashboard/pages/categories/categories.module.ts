import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesComponent } from './categories.component';
import { EffectsModule } from '@ngrx/effects';
import { CategoriesEffects } from './store/categories.effects';
import { StoreModule } from '@ngrx/store';
import { categoriesFeature } from './store/categories.reducer';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
import { CategoriesRoutingModule } from './categories-routing.module';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CategoriesRoutingModule,
    StoreModule.forFeature(categoriesFeature),
    EffectsModule.forFeature([CategoriesEffects])
  ]
})
export class CategoriesModule { }
