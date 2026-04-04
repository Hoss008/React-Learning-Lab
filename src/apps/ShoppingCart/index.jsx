import { useState } from "react";
import styles from "./shoppingcart.module.css";

const PRODUCTS = [
  { id: 1, name: "Mechanical Keyboard", price: 89.99, emoji: "⌨️" },
  { id: 2, name: "Wireless Mouse", price: 34.99, emoji: "🖱️" },
  { id: 3, name: "USB-C Hub", price: 49.99, emoji: "🔌" },
  { id: 4, name: "Monitor Stand", price: 27.99, emoji: "🖥️" },
];

function ProductList({ PRODUCTS }) {
  return <ProductItem PRODUCTS={PRODUCTS} />;
}

function ProductItem({ PRODUCTS }) {
  return (
    <>
      {PRODUCTS.map(({ id, emoji, name, price }) => (
        <div className={styles.productCard} key={id}>
          <span className={styles.productEmoji}>{emoji}</span>
          <div className={styles.productInfo}>
            <h3 className={styles.productName}>{name}</h3>
            <p className={styles.productPrice}>${price}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState();

  function addToCart() {}

  function remove() {}
  return (
    <>
      <ProductList PRODUCTS={PRODUCTS} />
    </>
  );
}
