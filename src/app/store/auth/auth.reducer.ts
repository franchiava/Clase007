import { createReducer, on } from "@ngrx/store";
import { user } from "src/app/dashboard/pages/users/models";
import { AuthActions } from "./auth.actions";
import { Action } from "rxjs/internal/scheduler/Action";


export const authFeatureKey = 'auth';
export interface AuthState {
    authUser: user | null;
}

const initialState: AuthState = {
    authUser: null
}

export const AuthReducer = createReducer(
    initialState, on(
        AuthActions.setAuthUser, (currentState, action) => {
            return {
                authUser: action.payload
    }
        }))