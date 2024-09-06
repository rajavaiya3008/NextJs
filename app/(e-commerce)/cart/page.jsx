import CartItems from '@/app/components/CartItems'
import CartTotal from '@/app/components/CartTotal'
import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-200">Item In Cart</h1>
      <div className="flex gap-6">
        <div className="w-[800px]">
          <CartItems />
        </div>
        <div className="flex-shrink-0">
          <CartTotal />
        </div>
      </div>
    </div>
  )
}

export default page