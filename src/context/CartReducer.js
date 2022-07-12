function CartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      // Calculate new price
      const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price;

      // Search between existed items in cart
      // Is there any item which has duplicated id ?!
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.item.id;
      });

      let updatedItems;

      // Check if this item added before.
      if (existingCartItemIndex !== -1) {
        // Fetch existed item
        const existingCartItem = state.items[existingCartItemIndex];

        // Update amount value of exist item
        const updatedItem = { ...existingCartItem, amount: existingCartItem.amount + action.item.amount };

        // Copy existed items in new array
        updatedItems = [...state.items];

        // Update cart items with new added item
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        // Add new item to cart list
        updatedItems = state.items.concat(action.item);
      }

      // New State
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    case "REMOVE": {
      // Find item's index
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.id;
      });
      // Fetch item by index
      const existingCartItem = state.items[existingCartItemIndex];

      //
      const updatedTotalAmount = state.totalAmount - existingCartItem.price;

      let updatedItems;

      // If just one number of item exist, delete that item from cart
      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((item) => {
          return item.id !== action.id;
        });

        // If more than one number exist in cart
      } else {
        // Decrease one from amount of item in cart list
        const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };

        // Copy items to new array
        updatedItems = [...state.items];
        console.log("Reducer2: ", updatedItems);
        console.log("Reducer3: ", updatedItem);
        // Select target member of array (item), and update that.
        updatedItems[existingCartItemIndex] = updatedItem;
        console.log("Reducer4: ", updatedItems);
      }

      // New State
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
  }
}

export default CartReducer;
