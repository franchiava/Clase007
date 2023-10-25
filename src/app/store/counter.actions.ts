import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const CounterActions = createActionGroup({
    source: 'counter',
    events: {
        'increment': emptyProps(),
        'decrement': emptyProps(),
    }
});