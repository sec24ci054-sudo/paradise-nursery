
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <main className="shopping-cart">
        <h1>Your Shopping Cart</h1>
        <p>Your cart is empty. Add some plants to get started!</p>
      </main>
    );
  }

  return (
    <main className="shopping-cart">
      <h1>Your Shopping Cart</h1>

      {items.map((item) => (
        <article className="cart-item" key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            width="120"
          />

          <div>
            <h2>{item.name}</h2>
            <p>Price: ${Number(item.price).toFixed(2)}</p>

            <label>
              Quantity:
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(event) => {
                  const quantity = Number(event.target.value);
                  if (quantity >= 1) {
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity,
                      })
                    );
                  }
                }}
              />
            </label>

            <p>
              Subtotal: $
              {(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => dispatch(removeItem(item.id))}
            >
              Remove
            </button>
          </div>
        </article>
      ))}

      <h2>Grand Total: ${total.toFixed(2)}</h2>

      <button onClick={() => alert("Thank you for shopping with Paradise Nursery!")}>
        Checkout
      </button>
    </main>
  );
}

export default CartItem;
