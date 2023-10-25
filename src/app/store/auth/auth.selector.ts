import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AuthState, authFeatureKey } from "./auth.reducer"


export const SelectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const SelectorAuthUser = createSelector(SelectAuthState, (state) => state.authUser)