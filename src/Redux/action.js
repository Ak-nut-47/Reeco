import { ERROR, FAILURE, FINAL_APPROVAL, MARK_APPROVED, MARK_MISSING, MARK_MISSING_URGENT, SUCCESS, UPDATE_QUANTITY } from "./actionType"

export const successAction = (payload) => {
    return { type: SUCCESS, payload: payload }
}

export const failureAction = () => {
    return { type: FAILURE }
}

export const errorAction = () => {
    return { type: ERROR }
}
export const updateQuantityAction = (productId, newQuantity) => {
    return { type: UPDATE_QUANTITY, payload: { productId, newQuantity } }
}
export const markApprovedAction = (productId) => {
    return { type: MARK_APPROVED, payload: productId }
}

export const markMissingAction = (productId) => {
    return { type: MARK_MISSING, payload: productId }
}
export const markMissingUrgent = (productId) => {
    return { type: MARK_MISSING_URGENT, payload: productId }
}

export const finalApprovalAction = () => {
    return { type: FINAL_APPROVAL }
}