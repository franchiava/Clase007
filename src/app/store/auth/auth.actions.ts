import { createActionGroup, props } from "@ngrx/store"
import { user } from "src/app/dashboard/pages/users/models"


export const AuthActions = createActionGroup({
    source: 'Auth',
    events: {
        'set Auth User' : props <{payload: user | null}>()
    }
})