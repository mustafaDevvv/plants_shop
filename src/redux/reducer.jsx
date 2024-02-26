import { createStore } from "redux"
import { types } from "./typesFromRedux";
import { apis } from "../api/apis";
import axios from "axios";


let initalState = {
}
export const reducer = (state = initalState, action) => {
    switch (action.type) {
        case types.add:
            return addData(action.payload);
        default:
            return state;
    }
    async function addData(obj) {
        await axios.post(apis.plants, obj)
    }
}

export const store = createStore(reducer)