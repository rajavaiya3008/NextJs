import ProductDetail from '@/app/components/ProductDetail'
import React from 'react'

const page = async({params}) => {
    const data = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const productData = await data.json()

  return (
    <div>
        <ProductDetail productData={productData} />
    </div>
  )
}

export default page