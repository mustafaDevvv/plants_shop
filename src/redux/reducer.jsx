import { createStore } from "redux"
import { types } from "./typesFromRedux";

let initalState = {
}
export const reducer = (state = initalState, action) => {
    switch (action.type) {
        case types.add:
            return console.log('jj');
        default:
            return state;
    }
}

export const store = createStore(reducer)