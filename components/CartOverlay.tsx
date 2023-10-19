// CartOverlay.js

import React from "react";

interface CartOverlayProps {
  cart: { product: string; quantity: number }[];
  products: { id: number; name: string; price: number }[];
  onClose: () => void;
  onRemoveFromCart: (product: string) => void;
}

const CartOverlay: React.FC<CartOverlayProps> = ({
  cart,
  products,
  onClose,
  onRemoveFromCart,
}) => {
  return (
    <div className="cart-overlay">
      <div className="flex justify-between p-2 ">
        <h2>Your Cart</h2>
        <button onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <ul>
        {cart.map((cartItem) => {
          const product = products.find(
            (product) => product.name === cartItem.product
          );
          if (product) {
            return (
              <li key={product.id}>
                {product.name} (Quantity: {cartItem.quantity})
                <button onClick={() => onRemoveFromCart(product.name)}>
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
};

export default CartOverlay;
