import React, { useState } from "react";
import { Browse } from "./Browse";
import { Cart } from "./Cart";
import { Products } from "./Products";

export function App() {
  const [page, changePage] = useState("Browse");
  const [cart, setCart] = useState(
    Object.fromEntries(Products.map((product) => [product.name, 0, ]))
  );

  function removeFromCart(productName) {
    setCart((prevState) => ({
      ...prevState,
      [productName]: Math.max(0, cart[productName] - 1),
    }));
  }
  function addToCart(productName) {
    setCart((prevState) => ({
      ...prevState,
      [productName]: cart[productName] + 1,
    }));
  }


  return (
    <div>
      <Browse
        isActive={page === "Browse"}
        changePage={changePage}
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
      <Cart
        isActive={page === "Cart"}
        changePage={changePage}
        cart={cart}
      />
    </div>
  );
}
