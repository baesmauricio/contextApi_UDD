import { useReducer } from "react";
import { CartContext } from "./cartContext";
import { CartReducer } from "./cartReducer";



const initialState = {
    cart: []
};


export const CartProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(CartReducer, initialState)


    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product })
        console.log(state)
    }

    const removeFromCart = (productID) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productID})
        console.log(state)
    }


    return (
        <CartContext.Provider 
            value={{
                cart: state.cart,
                addToCart,
                removeFromCart
            }}
        >
            { children }
        </CartContext.Provider>
    )

}