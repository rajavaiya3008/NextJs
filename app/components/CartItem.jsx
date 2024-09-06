"use client";

import React from "react";
import { useCart } from "../hooks/useCart";

const CartItem = ({ item }) => {
  const { handleQuantity } = useCart();
  return (
    <div className="flex items-center border border-gray-300 rounded-lg shadow-md p-4 mb-4">
        
      <div className="flex-shrink-0 mr-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-[200px] h-[200px] object-cover rounded-md"
        />
      </div>

      <div className="flex-1">
        <p className="text-lg font-semibold text-gray-300 mb-2">{item.title}</p>
        <p className="text-md font-medium text-gray-400 mb-2">${item.price}</p>
        
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-300 mr-2">Quantity:</p>
          <button
            onClick={() => handleQuantity("minus", item)}
            className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            -
          </button>
          <span className="text-sm text-gray-300">{item.quantity}</span>
          <button
            onClick={() => handleQuantity("plus", item)}
            className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
