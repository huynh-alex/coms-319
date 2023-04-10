import React, { useState } from "react";
import { Browse } from "./Browse";
import { Cart } from "./Cart";
import { Products } from "./Products";

export function App() {
  const [page, changePage] = useState("Browse");
  const [cart, setCart] = useState(
    Object.fromEntries(Products.map((product) => [product.name, 0]))
  );

  const productPrices = Object.fromEntries(
    Products.map((product) => [product.name, product.price])
  );

  // useEffect(() => {
  //   var cartEmpty = Object.values(cart).every((item) => item === true);
  //   if (cartEmpty) {
  //     checkoutButton.classList.add("collapse");
  //   } else {
  //     checkoutButton.classList.remove("collapse");
  //   }
  // }, [cart]);

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
  function resetCart(productName) {
    setCart((prevState) => ({
      ...prevState,
      [productName]: 0,
    }));
  }

  return (
    <div className="h-screen" style={{ backgroundColor: "darkslategrey" }}>
      <Browse
        isActive={page === "Browse"}
        changePage={changePage}
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        productPrices={productPrices}
      />
      <Cart
        isActive={page === "Cart"}
        changePage={changePage}
        addToCart={addToCart}
        resetCart={resetCart}
        cart={cart}
        productPrices={productPrices}
      />
    </div>
  );
}
