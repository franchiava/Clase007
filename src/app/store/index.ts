import { ActionReducerMap } from "@ngrx/store";
import { CounterState, counterFeatureKey, counterReducer } from "./counter.reducer";
import { AuthReducer, AuthState, authFeatureKey } from "./auth/auth.reducer";

export interface AppState {
    [counterFeatureKey]: CounterState;
    [authFeatureKey]: AuthState;
}

export const appReducer: ActionReducerMap<AppState> = {
    [counterFeatureKey]: counterReducer,
    [authFeatureKey]: AuthReducer,
}
