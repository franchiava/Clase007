import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCategories from './categories.reducer';

export const selectCategoriesState = createFeatureSelector<fromCategories.State>(
  fromCategories.categoriesFeatureKey
);

export const selectCategoriesArray = createSelector(selectCategoriesState, (state) => state.categories)
