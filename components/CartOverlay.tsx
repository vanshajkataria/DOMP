// CartOverlay.js

import React from 'react';

interface CartOverlayProps {
  cart: { product: string; quantity: number }[];
  products: { id: number; name: string; price: number }[];
  onClose: () => void;
  onRemoveFromCart: (product: string) => void;
}

const CartOverlay: React.FC<CartOverlayProps> = ({ cart, products, onClose, onRemoveFromCart }) => {
  return (
    <div className="cart-overlay">
      <h2>Your Cart</h2>
      <ul>
        {cart.map((cartItem) => {
          const product = products.find((product) => product.name === cartItem.product);
          if (product) {
            return (
              <li key={product.id}>
                {product.name} (Quantity: {cartItem.quantity})
                <button onClick={() => onRemoveFromCart(product.name)}>Remove</button>
              </li>
            );
          } else {
            return null; // Handle the case where product is not found
          }
        })}
      </ul>
      <button onClick={onClose}>Close Cart</button>
    </div>
  );
};

export default CartOverlay;
