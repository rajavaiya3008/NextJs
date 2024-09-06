"use client";

import Link from "next/link";
import React from "react";
import { useCart } from "../hooks/useCart";

const ProductItem = ({ product }) => {
    const {handleCartItem} = useCart()

  return (
    <div className="border border-green-400 rounded-lg shadow-lg p-4 w-[300px] relative">
      <Link href={`/products/${product.id}`}>
        <div className="flex justify-center mb-4">
          <img
            src={product.image}
            className="h-[200px] w-[200px] object-cover rounded-md"
            alt={product.title}
          />
        </div>

        <div className="text-center mb-2">
          <p className="text-lg font-semibold text-gray-200 overflow-hidden text-ellipsis whitespace-nowrap">
            {product.title}
          </p>
        </div>

        <div className="text-center mb-12">
          <span className="text-xl font-bold text-gray-300">
            ${product.price}
          </span>
        </div>
      </Link>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center">
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => handleCartItem(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
