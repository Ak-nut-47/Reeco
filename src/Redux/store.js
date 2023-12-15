import { legacy_createStore } from "redux"
import { reducer } from "./reducer"

const initialState = {
    products: [],
    isError: false,
    isFailure: false,
}

export const store = legacy_createStore(reducer, initialState)