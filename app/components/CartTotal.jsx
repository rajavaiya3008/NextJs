'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import { useCart } from '../hooks/useCart'

const CartTotal = () => {
    const {emptyCart} = useCart()
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalPrice = cartItems.reduce((acc,curr) => {
        acc = acc + (curr.price * curr.quantity)
        return acc
    },0)

  return (
    <div className="w-[500px] bg-white border border-gray-300 rounded-lg shadow-md p-6 flex flex-col items-center">
      <div className="mb-4">
        <span className="text-2xl font-bold text-gray-800">Total Price</span>
        <div className="text-3xl font-semibold text-green-600 mt-2">${totalPrice.toFixed(2)}</div>
      </div>
      <div>
        <button 
        onClick={emptyCart}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Clear All
        </button>
      </div>
    </div>
  )
}

export default CartTotal