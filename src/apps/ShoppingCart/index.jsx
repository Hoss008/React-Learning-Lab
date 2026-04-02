import { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Mechanical Keyboard", price: 89.99, emoji: "⌨️" },
  { id: 2, name: "Wireless Mouse", price: 34.99, emoji: "🖱️" },
  { id: 3, name: "USB-C Hub", price: 49.99, emoji: "🔌" },
  { id: 4, name: "Monitor Stand", price: 27.99, emoji: "🖥️" },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2>Products</h2>
      {PRODUCTS.map((p) => (
        <div key={p.id}>
          <span>
            {p.emoji} {p.name} — ${p.price}
          </span>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}

      <h2>Cart ({cart.length} items)</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <span>
            {item.name} x{item.qty}
          </span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
