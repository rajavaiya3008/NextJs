'use client'

import React from 'react'
import { useCart } from '../hooks/useCart'

const ProductDetail = ({productData:product}) => {

    const {handleCartItem} = useCart()
  return (
    <div className='max-w-4xl mx-auto mt-[20px] p-6 bg-white shadow-lg rounded-lg'>

      <div className='flex justify-center mb-8'>
        <img
          src={product.image}
          className='w-[400px] h-[300px] object-cover rounded-lg'
          alt={product.title}
        />
      </div>

      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>{product.title}</h1>
        <span className='text-2xl font-semibold text-gray-600'>${product.price}</span>
        <div className='mt-4'>
          <button
            className='bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500'
            onClick={() => handleCartItem(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Product Description</h2>
        <p className='text-gray-700 leading-relaxed'>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductDetail