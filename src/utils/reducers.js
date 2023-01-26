import {
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    CLEAR_CART,
    TOGGLE_CART,
    UPDATE_CURRENT_CATEGORY,
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product],
            };
        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.products],
            };
        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(product => {
                    return action.id === product.id ?
                    {...product, purchaseQuantity: action.purchaseQuantity} : product
                })
            };
        case REMOVE_FROM_CART:
            let newState = state.cart.filter(product => {
                return product.id !== action.id;
            });

            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState
            };
        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: []
            };
        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            };
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };
        default: 
            return state;
    }
};

