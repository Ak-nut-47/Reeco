import { ERROR, FAILURE, MARK_ACTION, MARK_APPROVED, MARK_MISSING, MARK_MISSING_URGENT, SUCCESS, UPDATE_QUANTITY } from "./actionType";

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case SUCCESS:
            return { ...state, products: payload, isError: false, isFailure: false };
        case FAILURE:
            return { ...state, isFailure: true, isError: false };
        case ERROR:
            return { ...state, isError: true, isFailure: false };
        case UPDATE_QUANTITY:
            const { productId, newQuantity } = payload;
            const updatedProducts = state.products.map((product) => productId.id === productId ? { ...product, quantity: newQuantity } : product)
            return { ...state, products: updatedProducts, isError: false, isFailure: false }
        case MARK_APPROVED:
            const updatedApprovedProducts = state.products.map((product) => product.id === payload ? { ...product, approved: true } : product);
            return { ...state, products: updatedApprovedProducts, isError: false, isFailure: false };
        case MARK_MISSING:
            const updatedMissingProducts = state.products.map((product) => product.id === payload ? { ...product, approved: "missing" } : product);
            return { ...state, products: updatedMissingProducts, isError: false, isFailure: false };
        case MARK_MISSING_URGENT:
            const updatedMissingUrgentProducts = state.products.map((product) => product.id === payload ? { ...product, approved: "missingurgent" } : product);
            return { ...state, products: updatedMissingUrgentProducts, isError: false, isFailure: false };
        default:
            return state;
    }
};
