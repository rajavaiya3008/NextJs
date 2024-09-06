import ProductItem from '@/app/components/ProductItem'
import React from 'react'

const page = async({params}) => {
    const data = await fetch(`https://fakestoreapi.com/products/category/${params.tag}`)
    const products = await data.json()
  return (
    <div className="flex flex-wrap gap-6 mt-[20px] justify-center">
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
  )
}

export default page