import { useState } from "react";
import styles from "./shoppingcart.module.css";

const PRODUCTS = [
  { id: 1, name: "Mechanical Keyboard", price: 89.99, emoji: "⌨️" },
  { id: 2, name: "Wireless Mouse", price: 34.99, emoji: "🖱️" },
  { id: 3, name: "USB-C Hub", price: 49.99, emoji: "🔌" },
  { id: 4, name: "Monitor Stand", price: 27.99, emoji: "🖥️" },
];

function ProductList({ PRODUCTS, onAddToCart }) {
  return <ProductItem PRODUCTS={PRODUCTS} onAddToCart={onAddToCart} />;
}

function ProductItem({ PRODUCTS, onAddToCart }) {
  return (
    <>
      {PRODUCTS.map(({ id, emoji, name, price }) => (
        <div className={styles.productCard} key={id}>
          <span className={styles.productEmoji}>{emoji}</span>
          <div className={styles.productInfo}>
            <h3 className={styles.productName}>{name}</h3>
            <p className={styles.productPrice}>${price}</p>
          </div>
          <button className={styles.addButton} onClick={() => onAddToCart(id)}>
            Add to Cart
          </button>
        </div>
      ))}
    </>
  );
}

function Cart({ remove, cartItems }) {
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  return(
    <>
    <CartItem remove={remove} cartItems={cartItems} />
    <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
    </>
  ) 
}

function CartItem({ cartItems, remove }) {
  return (
    <div className={styles.cartItems}>
      {cartItems.map(({ id, name, price, emoji }) => (
        <div className={styles.cartItem} key={id}>
          <div className={styles.cartItemInfo}>
            <span className={styles.cartItemName}>
              {emoji} {name}
            </span>
            <p className={styles.cartItemPrice}>${price}</p>
          </div>
          <button className={styles.removeButton} onClick={() => remove(id)}>
            REMOVE
          </button>
        </div>
      ))}
    </div>
  );
}

function CartSummary({totalItems , totalPrice}) {
  return(
    <div className={styles.summary}>
      <div className={styles.summaryRow}>
        <span>Items:</span>
        <span>{totalItems}</span>
      </div>
      <div className={styles.summaryRow}>
        <span className={styles.total}>Total:</span>
        <span className={styles.total}>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(id) {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === id);
      if (exists) return prev;

      const product = PRODUCTS.find((p) => p.id === id);
      return [...prev, product];
    });
  }

  function remove(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }
  return (
    <>
      <ProductList PRODUCTS={PRODUCTS} onAddToCart={addToCart} />
      <Cart cartItems={cartItems} remove={remove} />
    </>
  );
}
