'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartItems = () => {

    const cartItems = useSelector(state => state.cart.cartItems)

  return (
    <div>
        {
            cartItems.length > 0 ? cartItems.map((item) => <CartItem item={item}/>) : <p className='text-2xl font-bold mb-6 text-center text-gray-200'>Cart is Empty</p>
        }
    </div>
  )
}

export default CartItems