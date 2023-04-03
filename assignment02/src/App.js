import React, { useState } from "react";
import { Browse } from "./Browse";
import { Cart } from "./Cart";

export function App() {
  const [page, changePage] = useState("Browse");

  return (
    <div>
      <Browse
        isActive={page === "Browse"}
        changePage={changePage}
      />
      <Cart
        isActive={page === "Cart"}
        changePage={changePage}
      />
    </div>
  );
}
