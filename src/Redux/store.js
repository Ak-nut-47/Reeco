import { legacy_createStore } from "redux"
import { reducer } from "./reducer"

const initialState = {
    products: [],
    isError: false,
    isFailure: false,
    isApproved: false
}

export const store = legacy_createStore(reducer, initialState)