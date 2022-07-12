import React, { useContext } from "react";

import CartContext from "../../context/CartContext";

import CartItem from "./CartItem";

function Cart() {
  const ctx = useContext(CartContext);

  const addItem = (item) => {
    return ctx.addItem({ ...item, amount: 1 });
  };

  const removeItem = (id) => {
    return ctx.removeItem(id);
  };

  return (
    <div>
      {ctx.items.map((item) => (
        <CartItem key={item.id} id={item.id} name={item.name} amount={item.amount} price={item.price} onAdd={addItem.bind(null, item)} onRemove={removeItem.bind(null, item.id)}/>
      ))}
    </div>
  );
}

export default Cart;
