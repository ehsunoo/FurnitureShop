import React, { useReducer } from "react";

// Context
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

// Default values of cart state
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(CartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  console.log("Provider: ", cartState);
  // Context Value
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
}

export default CartProvider;
