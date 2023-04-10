import React, { useState, useEffect } from "react";
import { Browse } from "./Browse";
import { Cart } from "./Cart";
// import { Products } from "./Products";

export function App() {
  const [page, changePage] = useState("Browse");
  const [cart, setCart] = useState([]);
  const [productPrices, setProductPrices] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((response) => response.json())
      .then((json) => {
        json = json.products;
        setCart(Object.fromEntries(json.map((product) => [product.name, 0])));
        setProductPrices(
          Object.fromEntries(
            json.map((product) => [product.name, product.price])
          )
        );
      });
  }, []);

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
