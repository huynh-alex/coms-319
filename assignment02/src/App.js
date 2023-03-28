import "./App.css";
import React, { useState } from "react";

import { Products } from "./Products";

export function App() {
  const [products, setProducts] = useState(Products);
  const [cart, setCart] = useState(Object.fromEntries(Products.map(product => [product.name, 0])));

  function handleSearchChange(event) {
    if (event) {
      let filtered = Products.filter((product) =>
        product.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setProducts(filtered);
    }
  }

  function addToCart(product) {
    console.log(product);
  }

  return (
    <div className="bg-white">
      <div>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search"
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="w-full overflow-hidden rounded-md bg-gray-100 lg:h-50">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
              <br></br>
              <div className="flex items-center justify-center">
                <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  -
                </button>
                <span>&emsp; 0 &emsp;</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
